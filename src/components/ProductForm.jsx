import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

function ProductForm({product, handleChange}){
    return(
        <div>
            <Row>
                <Form.Group controlId="formTitle">
                    <Form.Label>Title: </Form.Label>
                    <Form.Control
                        type="text"
                        value={product.title}
                        name="title"
                        onChange={handleChange}
                        required 
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a title.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mt-3">
                <Col md={6}>
                    <Form.Group controlId="formCategory">
                        <Form.Label>Category:</Form.Label>
                        <Form.Control type="text" value={product.category} name="category" onChange={handleChange} required />
                        <Form.Control.Feedback type="invalid">
                            Please enter a category.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="formPrice">
                        <Form.Label>Price:</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control type="number" value={product.price} name="price" onChange={handleChange} required />
                            <Form.Control.Feedback type="invalid">
                                Please enter a price.
                            </Form.Control.Feedback>
                        </InputGroup>
                        <Form.Text muted>Arrows change price by $1</Form.Text>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mt-3">
                <Form.Group controlId="formDescription">
                    <Form.Label>Description: </Form.Label>
                    <Form.Control as="textarea" rows={4} value={product.description} name="description" onChange={handleChange} required />
                    <Form.Control.Feedback type="invalid">
                        Please enter a description.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className="mt-3">
                <Form.Group controlId="formImage">
                    <Form.Label>Image Link</Form.Label>
                    <Form.Control type="text" name="image" onChange={handleChange} value={product.image} required/>
                    <Form.Text muted>Enter link of image</Form.Text>
                    <br/>
                    {/* Only shows image if image is not an empty string */}
                    {product.image !== "" && <Image src={product.image} alt="Unable to load image preview" className="m-5 w-25 object-fit-scale"/>}
                    <Form.Control.Feedback type="invalid">
                        Please upload a photo of the product.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
        </div>
    )
}

export default ProductForm;