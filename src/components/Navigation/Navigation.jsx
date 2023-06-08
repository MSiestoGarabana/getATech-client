import { useContext } from 'react'

import { Nav, Navbar, Container, Dropdown, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.contexts'

import menuIcon from './navIcons/menu.png'

import './Navigation.css'

function Navigation({ user, setSessionData }) {

    const { logout } = useContext(AuthContext)

    let navigate = useNavigate()

    function handleLogOutClick() {
        navigate('/')
        setSessionData({})
        logout()
    }

    return (
        <Navbar id="navBar" bg="dark" variant="dark">
            <Container id="navBar__container">
                <Navbar.Brand href="#home">G.A.T</Navbar.Brand>
                <Nav>

                    {user &&
                        <Dropdown>
                            <Dropdown.Toggle>
                                <img src={menuIcon} alt="menuIcon" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <>
                                    <Dropdown.Item as={Button}>
                                        <Nav.Link style={{ color: "black" }} onClick={handleLogOutClick}>
                                            Logout
                                        </Nav.Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item as={Button}>
                                        <Link to="/profile">My profile</Link>
                                    </Dropdown.Item>
                                </>
                            </Dropdown.Menu>
                        </Dropdown>
                    }

                </Nav>
            </Container>
        </Navbar>
    )
}
export default Navigation