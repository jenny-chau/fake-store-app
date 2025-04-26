import Container from 'react-bootstrap/Container';
import { useNavigate, Link } from 'react-router-dom'; 
import { useState, useEffect } from 'react';

function NotFound() {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(10);


    useEffect (() => {
        const interval = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        const timeout = setTimeout(() => {
            navigate("/");
        }, 10000);
        
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };

    }, []);

    return (
        <Container className="p-5">
            <h3>Page not found...</h3>
            <p className="m-0">You may also return to the home page by clicking here: </p>
            <Link to="/"><button type="button" className="btn btn-lg btn-info m-3">Home</button></Link>
            <p>Otherwise you will be redirected back to the home page in {countdown}</p>
        </Container>
    );
}

export default NotFound;