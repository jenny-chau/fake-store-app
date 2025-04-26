import Container from 'react-bootstrap/Container';

function Footer () {
    return (
        <Container fluid className="p-0">
            <footer className="bg-dark text-light text-center p-3">
                <p className="small">Made with Bootstrap and React <br/>
                Made using the FakeStoreAPI</p>
            </footer>
        </Container>
    )
}

export default Footer;