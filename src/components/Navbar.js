import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom'

function OffcanvasNavbar() {
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('auth-token')
        navigate("/login");
    }
    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand}>
                    <Container fluid>
                        <LinkContainer to="/"><Navbar.Brand>Changa pharre</Navbar.Brand></LinkContainer>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Changa pharre
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    {!localStorage.getItem('auth-token') ? <>
                                        <LinkContainer to="/login"><Nav.Link>Login kiya?</Nav.Link></LinkContainer>
                                        <LinkContainer to="/signup"><Nav.Link>Nhi, toh signup kr</Nav.Link></LinkContainer></>
                                        : <Nav.Link onClick={handleLogout}>Logout krna h?</Nav.Link>}
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default OffcanvasNavbar;