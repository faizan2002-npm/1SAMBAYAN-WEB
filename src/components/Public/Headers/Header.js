import React from 'react'
import siteSettings from "../../../Constants/Admin/siteSettings";
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import routes from '../../../routes';

const Header = () => {
    const getRoutes = (routes) => {
        routes.sort((a, b) => (a.order > b.order) ? 1 : -1)
        return routes.map((prop, key) => {
            if (prop.layout === "" && prop.show === 'yes') {
                if (prop.name === 'Home') {
                    return (
                        <Nav.Item as="li" key={key}>
                            <Link className="nav-link" to={prop.layout + prop.path}>{prop.name}</Link>
                        </Nav.Item>
                    );
                } else {
                    return (
                        <Nav.Item as="li" key={key}>
                            <Link className="nav-link" to={prop.layout + prop.path}>{prop.name}</Link>
                        </Nav.Item>
                    );
                }
            } else {
                return null;
            }
        });
    };
    return (
        <>
            <header id="header">
                <Container fluid>
                    <Navbar as="nav" variant="dark" expand="lg">
                        <Link className="navbar-brand" to="/">
                            <Image src={siteSettings.SiteSettings[0].SITE_LOGO} alt="" fluid />
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto" as="ul">
                                {
                                    getRoutes(routes)
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </header>
        </>
    )
}

export default Header
