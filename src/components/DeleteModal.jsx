import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react'; 
import axios from 'axios';

function DeleteModal ({item, showDeleteModal, handleHide}) {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [countdown, setCountdown] = useState(3);
    const [success, setSuccess] = useState(false);

    // Disables buttons on modal when true
    const [disableBtnOnClick, setDisableBtnOnClick] = useState(false);

    const handleDeleteInModal = () => {
        // Disable buttons upon confirming product delete
        setDisableBtnOnClick(true);

        axios.delete(`https://fakestoreapi.com/products/${item.id}`)
        .then (() => {
            // Lets user know product successfully deleted and will be redirected to the product list page
            setSuccess(true);

            // Countdown before redirecting to product list page
            const interval = setInterval(() => setCountdown(prev => prev - 1), 1000);
            const timeout = setTimeout(() => {
                handleHide();
                navigate("/products");
            }, 3000);

            return () => {
                clearInterval(interval);
                clearTimeout(timeout);
            };
        })
        .catch (e => {
            // Allows buttons to the clickable again if failed to delete product
            setDisableBtnOnClick(false);
            setError(`Error deleting product: ${e.message}`);
        })
    }

    return (
        <Modal show={showDeleteModal} onHide={()=>{if(!disableBtnOnClick) handleHide}} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Delete Comfirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="text-danger"><strong>Are you sure you want to delete this product?</strong></p>
                <div className="d-flex flex-column">
                    <p className="text-center">{item.title}</p>
                    <Image src={item.image} className="w-25 align-self-center"/>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleDeleteInModal} variant="danger" disabled={disableBtnOnClick}>
                    Delete
                </Button>
                <Button onClick={handleHide} disabled={disableBtnOnClick}>
                    Back
                </Button>
            </Modal.Footer>

            {/* Display error or success messages to user */}
            {error && <p className="text-danger">{error}</p>}
            {success && <p className="text-success px-5">Successfully deleted product. <br/>Redirecting back to the Product List page... {countdown}</p>}
        </Modal>
    )
}

export default DeleteModal;