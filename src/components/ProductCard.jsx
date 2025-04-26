import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function ProductCard({item}) {
    return (
        <Card style={{width: "18rem", justifySelf: "center", maxHeight: "48rem"}} className="h-100 shadow-sm">
            <Card.Body className="d-flex flex-column h-100 justify-content-between align-items-center text-center">
                <div>
                    <Card.Img style={{height: "20rem"}} className="object-fit-scale" variant="top" src={item.image}/>
                    <Card.Title className="p-4 text-dark fs-5">{item.title}</Card.Title>
                </div>
                <div>
                    <Card.Text className="text-dark fs-3">${item.price}</Card.Text>
                    <Link to={`/products/${item.id}`}>
                    <Button className="btn-lg btn-info fw-bold shadow-sm" type="button">Details</Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;