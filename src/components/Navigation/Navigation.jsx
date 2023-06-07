import { useContext } from 'react'

import { Nav, Navbar, Container, Dropdown, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.contexts'

import { useSessionData } from '../../utils/get-session-data'

import menuIcon from './navIcons/menu.png'

import './Navigation.css'

function Navigation() {
    const { logout } = useContext(AuthContext)

    const userData = useSessionData()

    let navigate = useNavigate()

    function handleLogOutClick() {
        navigate('/')
        logout()
        window.location.reload(false)
    }

    return (
        <Navbar id="navBar" bg="dark" variant="dark">
            <Container id="navBar__container">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav>
                    <Dropdown>
                        <Dropdown.Toggle>
                            <img src={menuIcon} alt='menuIcon' />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                userData?.role
                                    ?
                                    <>
                                        <Dropdown.Item as={Button}>
                                            <Nav.Link style={{ color: "black" }} onClick={handleLogOutClick}>Logout</Nav.Link>
                                        </Dropdown.Item>

                                        <Dropdown.Item as={Button}>
                                            <Link to="/profile">My profile</Link>
                                        </Dropdown.Item>
                                    </>
                                    :
                                    <>
                                        <Dropdown.Item as={Button}>
                                            <Link to="/signup">Registro</Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item as={Button}>
                                            <Link to="/login">Login</Link>
                                        </Dropdown.Item>
                                    </>
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default Navigation