import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import ProductForm from './ProductForm';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import AddProductModal from './AddProductModal';

function AddProduct () {
    const [product, setProduct] = useState({
        id: "",
        title: "",
        description: "",
        price: "",
        image: "",
        category: ""
    })

    const [validated, setValidated] = useState(false);
    const [error, setError] = useState("");
    const [successAdd, setSuccessAdd] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // Used to close modal and reset form
    const handleClose = () => {
        setShowModal(false);
        setValidated(false);

        // Reset product values which will reset the form on the page
        const resetProduct = Object.keys(product).reduce((newObject, key) => {
            newObject[key] = "";
            return newObject;
        }, {});
        setProduct(resetProduct);
    }

    // Updates product with user inputs as they type
    const handleChange = (event => {
        const {name, value} = event.target;
        setProduct({
            ...product,
            [name]: value
        });
    });

    const handleProductAdd = (event => {
        event.preventDefault();

        // Resets the success alert if user did not close the previous Alert
        setSuccessAdd(false);

        const form = event.currentTarget;
        if (form.checkValidity() === false){
            setError("Incomplete Form. Please recheck form entries.");
            event.stopPropagation();
        } else {
            axios.post(`https://fakestoreapi.com/products/`, product)
            .then (() => {
                setSuccessAdd(true);
                setError("");
                setShowModal(true);
            })
            .catch ((error) => {
                setError(`Error adding product: ${error.message}`);
            })
        }
        setValidated(true);
    })

    return (
        <Container className="d-flex flex-column align-items-center">
            {/* Modal shown after successfully adding product */}
            <AddProductModal product={product} showModal={showModal} handleClose={handleClose}/>

            {/* Alerts for successful product addition or error */}
            {successAdd && <Alert className="mt-3" variant="success" onClose={()=>setSuccessAdd(false)} dismissible>Successfully added product: {product.title}</Alert>}
            {error && <Alert className="mt-3" variant="danger" onClose={()=>setError("")} dismissible>Error adding product: {error}</Alert>}

            <div className="col-md-8 px-5 m-3 border border-warning-subtle rounded border-4 shadow-lg">
                <h2 className="text-center mt-5">Add Product</h2>
                <Form className="mb-5" onSubmit={handleProductAdd} noValidate validated={validated}>
                    <ProductForm product={product} handleChange={handleChange}/>
                    <Button className="mt-3" type="submit" variant="primary">Add Product</Button>
                </Form>
            </div>
        </Container>
    );
}

export default AddProduct;