import {NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/nav';

function NavBar() {
    return (
        <Navbar className="bg-dark p-3 d-flex" variant="dark" expand="lg">
            <Navbar.Brand href="/" className="fw-bold fs-3 fst-italic justify-content-start px-3">Fake Store App</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar"/>
            <Navbar.Collapse id="navbar" className="justify-content-end">
                <Nav className="text-end p-1 fs-5">
                    <Nav.Link className="px-3" as={NavLink} to="/" activeclassname="active">Home</Nav.Link>
                    <Nav.Link className="px-3" as={NavLink} to="/products" activeclassname="active">Product List</Nav.Link>
                    <Nav.Link className="px-3" as={NavLink} to="/add-product" activeclassname="active">Add Product</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;