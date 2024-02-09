import InfoUser from "components/InfoUser/InfoUser";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken, selectUser } from "Store/DataUser/userSelect";
import css from './Navigation.module.css'

const Navigation = () => {
    const user = useSelector(selectUser);
    const token = useSelector(selectToken) ?? '';

    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="/goit-react-hw-08-phonebook/contacts" className={css.Title} >
                        Phonebook
                    </Navbar.Brand>
                    {!user && (
                        <Nav>
                            {token && (
                                <Nav.Link to="/contacts" as={Link}>
                                    Contacts
                                </Nav.Link>
                            )}
                            <Nav.Link to="/signup" as={Link} className={css.Register}>
                                Register
                            </Nav.Link>
                            <Nav.Link to="/login" as={Link} className={css.Login}>
                                Login
                            </Nav.Link>
                        </Nav>
                    )}

                    <InfoUser className="d-flex flex-column" />
                </Container>
            </Navbar>
            <Container className={css.Container}>
                {user ? (
                    <h1 className={css.NewTitle}>Welcome to Phonebook '{user.name}'</h1>
                ) : (
                    <h1 className={css.NewTitle}>Please login or register</h1>
                )}
            </Container>
        </>
    )
};

export default Navigation;