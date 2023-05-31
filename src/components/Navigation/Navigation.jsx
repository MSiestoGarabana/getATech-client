import { useContext } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.contexts'
function Navigation() {

    const { user, logout } = useContext(AuthContext)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Nav className="me-auto">
                    <Nav.Link as="span">
                        <Link to="/">Home </Link>
                    </Nav.Link>
                    <Navbar.Collapse id="basic-navBar-nav">
                        {
                            user
                                ?
                                <>
                                    <Nav.Link as="span" onClick={logout}>Logout</Nav.Link>
                                    <Nav.Link as="span">
                                        <Link to="/perfil">¡Hola, {user.username}!</Link>
                                    </Nav.Link>
                                </>
                                :
                                <>
                                    <Nav.Link as="span">
                                        <Link to="/signup">Registro</Link>
                                    </Nav.Link>
                                    <Nav.Link as="span">
                                        <Link to="/login">Login</Link>
                                    </Nav.Link>
                                </>
                        }

                    </Navbar.Collapse>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default Navigation