import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function HomePage () {
    return (
        <Container fluid className="p-0 h-100">
            <header className="text-dark gradient-radial text-center p-5 h-100 d-flex flex-column justify-content-center">
                <h2 className="display-5 fw-bold">Welcome to the <i>Fake Store App!</i></h2>
                <p className="fs-4">A place where you can sell anything your heart desires.</p>
                <p className="text-muted small">Note: all products are digital only. Physical products do NOT exist.</p>
                <br/> <br/>
                <p className="fs-3 fw-bold">Get started by viewing our product list!</p>
                <Link to="/products"><button type="button" className="btn btn-info fw-bold btn-lg">Product List</button></Link>
            </header>
        </Container>
    );
}

export default HomePage;