import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import ProductForm from './ProductForm';

function EditModal({item, showEditModal, handleEditHide, handleSuccessEdit}) {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [validated, setValidated] = useState(false);
    const [loading, setLoading] = useState(false);

    const [updatedData, setUpdatedData] = useState({...item});

    // To handle user inputs into the input fields
    const handleChange = (event) => {
        const {name, value} = event.target;
        setUpdatedData({
            ...updatedData,
            [name]: value
        });
    }

    // When the close button or back button is clicked. Does not update the item.
    const handleHide = () => {
        setError("");
        setValidated(false);
        setUpdatedData({...item});
        handleEditHide();
    }

    // Called when the user clicks the submit button
    const handleEditInModal = (event) => {
        // Prevents page refresh and lose of user inputted values
        event.preventDefault();

        const form = event.currentTarget;

        // Check if there was an actual update to the item details
        if (JSON.stringify(updatedData) == JSON.stringify(item)) {
            setError("No updates to make. Please make a change.");
        } 
        // Check if form is complete (All entries entered)
        else if(form.checkValidity() === false) {
            setError("Incomplete Form. Please recheck form entries.")
            setValidated(true);
            event.stopPropagation();
        }

        // Updates item
        else {
            setValidated(true);
            setLoading(true);
            axios.put(`https://fakestoreapi.com/products/${item.id}`, updatedData)
            .then ( () => {
                handleSuccessEdit();
                setError("");
                setValidated(false);
                setUpdatedData({...item});
                navigate(`/products/${item.id}`);
            })
            .catch ( (error) => {
                setError(`Error updating product details: ${error.message}`);
            })
            .finally (() => {
                setLoading(false);
            })
        }
    }

    if(loading){
        return (
            <Container>
                <h2>
                    <Spinner animation="border" variant="info" role="status"/>
                    Updating...
                </h2>
            </Container>
        )
    }
    
    return(
        <Modal show={showEditModal} onHide={handleHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Edit Product</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex flex-column">
                <Form onSubmit={handleEditInModal} noValidate validated={validated}>
                    <ProductForm product={updatedData} handleChange={handleChange} />
                    <Button type="submit" variant="warning">Update Product</Button>
                    {error && <p className="m-3 text-danger">{error}</p>}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleHide}>Back</Button>
            </Modal.Footer>

        </Modal>
    )
}

export default EditModal;