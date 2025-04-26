import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';
import Alert from 'react-bootstrap/Alert';

function ProductDetails () {
    // Get product ID number from URL
    const { itemId } = useParams();

    const [loading, setloading] = useState(true);
    const [error, setError] = useState("");
    const [item, setItem] = useState();
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    // Used to show Successful edit Alert on the product detail page
    const [editSuccess, setEditSuccess] = useState(false);

    const handleHide = () => setShowDeleteModal(false);
    const handleEditHide = () => setShowEditModal(false);

    const handleDeleteBtnClick = () => {
        setShowDeleteModal(true);
    }

    const handleSuccessEdit = () => {
        setShowEditModal(false);
        setEditSuccess(true);
    }

    const handleEditBtnClick = () => {
        setShowEditModal(true);
    }

    const handleAlert = () => {
        setEditSuccess(false);
    }

    // Runs everytime the item ID changes to ensure correct item is shown
    useEffect( () => {
        const fetchProductDetails = () => {
            axios.get(`https://fakestoreapi.com/products/${itemId}`)
            .then ((response) => {
                setItem(response.data);
            })
            .catch (e => {
                setError(`Error getting product details: ${e.message}`)
            })
            .finally (() => {
                setloading(false);
            })
        }

        if(itemId) {
            fetchProductDetails();
        }

    }, [itemId]);

    if(loading) {
        return (
            <Container>
                <h2 className="p-5 m-5 text-center">
                    <Spinner animation="border" variant="info" role="status"/>
                    Loading item details...
                </h2>
            </Container>
        )
    }

    if(error) return (<p>Error getting product details: {error}</p>);

    return (
        <Container className="d-flex flex-column my-5 justify-content-center align-content-center">
            {/* Shows Delete Modal or Edit Modal depending on which button is clicked */}
            <DeleteModal item={item} showDeleteModal={showDeleteModal} handleHide={handleHide}/>
            <EditModal item={item} showEditModal={showEditModal} handleEditHide={handleEditHide} handleSuccessEdit={handleSuccessEdit}/>
            
            {/* Alert is shown when Item is successfully updated */}
            {editSuccess && 
            <Alert variant="success" onClose={handleAlert} dismissible>
                Item ID {item.id}. "{item.title}" has been successfully updated!
            </Alert>}

            <Row className="justify-content-center">
                <Col className="col-6 col-lg-5 align-content-center p-5">
                    <Image src={item.image} className="img-fluid object-fit-cover d-block mx-auto mw-100 mh-100"/>
                </Col>
                <Col className="col-12 col-lg-7">
                    <div className="d-flex flex-column justify-content-between ms-3">
                        <div className="d-flex flex-column">
                            <h2 className="display-6 fw-bold text-center mt-3">{item.title}</h2>
                            <p className="text-muted mt-0 fs-6 text-center">{item.category}</p>
                            <p className="fs-6 mx-5"><strong>Description: </strong><br/>{item.description}</p>
                            <p className="text-center fs-3 fw-bold">${item.price}</p>
                            <Button type="button" className="btn-lg align-self-center w-75 mb-5">Add to cart</Button>
                        </div>
                        <div className="align-self-end mt-5">
                            <Button type="button" className="btn-warning me-3" onClick={handleEditBtnClick}>Edit Product</Button>
                            <Button type="button" className="btn-danger" onClick={handleDeleteBtnClick}>Delete Product</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetails;