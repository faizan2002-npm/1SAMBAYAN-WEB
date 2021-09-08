import React from 'react'

const Header = () => {
    return (
        <>
            <header id="header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <a className="navbar-brand" href="index.html">
                            <img src="img/logo.png" alt=""  className="img-fluid" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About us</a>
                                </li>
                                <li className="nav-item">

                                    <a className="nav-link" href="#">Events</a>
                                </li>
                                <li className="nav-item">

                                    <a className="nav-link" href="#">Communities</a>
                                </li>
                                <li className="nav-item">

                                    <a className="nav-link" href="#">Account</a>
                                </li>
                                <li className="nav-item">

                                    <a className="nav-link" href="#">Donate</a>
                                </li>
                                <li className="nav-item">

                                    <a className="nav-link" href="#">Login</a>
                                </li>
                                <li className="nav-item">

                                    <a className="nav-link" href="#"><img src="img/search.png" alt="img"/></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
