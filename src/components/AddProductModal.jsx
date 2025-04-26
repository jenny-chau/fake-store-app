import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

function AddProductModal({product, showModal, handleClose}) {
    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Product Added Confirmation</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Container className="d-flex flex-column">
                    <p className="fw-bold text-center fs-3 text-success">Product Successfully Added!</p>

                    {/* Only shows image if image is not an empty string */}
                    {product.image !== "" && <Image src={product.image} alt="product image" className="w-50 object-fit-scale align-self-center m-3"/>}
                    <p><strong>Title:</strong> {product.title}</p>
                    <p><strong>Category:</strong> {product.category}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                    <p><strong>Description:</strong> {product.description}</p>
                </Container>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="success" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddProductModal;