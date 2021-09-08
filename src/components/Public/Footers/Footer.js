import React from 'react'

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-4 col-12">
                            <a className="site-logo" href="index.html">
                                <img src="img/logo.png" alt=""  className="img-fluid"/>
                            </a>
                            <ul className="nav social">
                                <li className="nav-item">
                                    <a className="nav-link" href="#" target="_BLANK">
                                        <i className="fab fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" target="_BLANK">
                                        <i className="fab fa-facebook" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" target="_BLANK">
                                        <i className="fab fa-twitter" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" target="_BLANK">
                                        <i className="fab fa-whatsapp" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-7 col-md-7 col-12">
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
                        </div>
                    </div>
                </div>
            </footer>
            
        </>
    )
}

export default Footer
