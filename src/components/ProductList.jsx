import {useState, useEffect} from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then(response => {
            setProducts(response.data);
        })
        .catch(e => {
            setError(`Error getting the list of products. Error: ${e.message}`);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [products]);

    if(loading) {
        return (
            <Container>
                <h3 className="p-5 m-5 text-center">
                    <Spinner 
                        animation="border"
                        variant="info"
                        role="status"
                    />
                    Loading products...
                </h3>
            </Container>
        )
    };

    if(error) {
        return (
            <Container>
                <p>{error}</p>
            </Container>
        )
    };

    return (
        <Container className="d-flex flex-column">
            <h2 className="text-center display-4 fw-bold text-decoration-underline p-5">Products</h2>
            <Row>
                {products.map(item => (
                    <Col key={item.id} className="mb-5">
                        <ProductCard item={item}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ProductList;