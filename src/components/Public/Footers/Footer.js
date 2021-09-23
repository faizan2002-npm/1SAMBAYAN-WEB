import React from 'react'
import siteSettings from "../../../Constants/Admin/siteSettings";
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={5} md={5} xs={12}>
                            <Link className="site-logo" to="/">
                                <img src={siteSettings.SiteSettings[0].SITE_LOGO} alt="" className="img-fluid" />
                            </Link>
                            <Nav className="social" as="ul">
                                <Nav.Item  as="li">
                                    <Nav.Link to="#" target="_BLANK">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item  as="li">
                                    <Nav.Link to="#" target="_BLANK">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item  as="li">
                                    <Nav.Link to="#" target="_BLANK">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item  as="li">
                                    <Nav.Link to="#" target="_BLANK">
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col lg={7} md={7} xs={12}>
                            <p>Sambayan is broad condition of democratic forcers reprsentaing the broad spesctrum od legitimate
                                political persuasion in the Philippines.
                                It aims to usher in a compotont,trustworthy administration in May 2022 national electrion by
                                feilding a single state of national candidates:
                                president, vice prisident and 12 senators.
                            </p>
                            <p>The mivement begun September 2020. when economic recaession and unemployment due to tje COVID-19
                                panademic had set in, in the
                                number of infeations kept rising and the incumbent administration had shown itself incapable of
                                a sensible effective response
                                to the crises.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <div className="lim">
                <a to="#" className="link btn">
                    Download MEMBERSHIP APPLICATION here
                </a>
            </div>
        </>
    )
}

export default Footer
