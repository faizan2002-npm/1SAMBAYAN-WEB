/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

import routes from "../../routes.js";
import AuthNavbar from '../../components/Auth/Navbars/AuthNavbar.js';
import AuthFooter from '../../components/Auth/Footers/AuthFooter.js';

const Auth = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.body.classList.add("bg-default");
    return () => {
      document.body.classList.remove("bg-default");
    };
  }, []);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {

      if (prop.layout === "/auth") {
        console.log(prop.component);

        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <div className="main-content" ref={mainContent}>
        <AuthNavbar />
        <div className="header bg-gradient-info py-7 pt-xl-9">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  {(location.pathname === '/auth/login') ? <>
                    <h1 className="text-white">
                      Welcome!
                    </h1>
                    <p className="text-lead text-white">
                      Please Login to manage the site.
                    </p>
                  </> : (location.pathname === '/auth/resetPassword') ? <>
                    <h1 className="text-white">
                      Reset Password
                    </h1>
                    <p className="text-lead text-white">
                      Please enter your email address we will sent you password recovery email.
                    </p>
                  </> : (location.pathname === '/auth/otpAuthentication') ? <>
                    <h1 className="text-white">
                      Please enter OTP
                    </h1>
                    <p className="text-lead text-white">
                      Please enter the OTP that has been sent on your Email Address
                    </p>
                  </> : ''
                  }

                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>

          </div>
        </div>
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Switch>
              {getRoutes(routes)}
              <Redirect from="/auth" to="/auth/Login" />
              <Redirect from="/auth/*" to="/auth/Login" />

              {/* <Redirect from="*" to="/auth/login" /> */}
            </Switch>
          </Row>
        </Container>
      </div>
      <AuthFooter />
    </>
  );
};

export default Auth;
