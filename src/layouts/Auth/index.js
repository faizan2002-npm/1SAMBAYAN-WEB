
import React from "react";
import { useLocation, Route, Switch, Redirect,useHistory } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

import routes from "../../routes.js";
import AuthNavbar from '../../components/Auth/Navbars/AuthNavbar.js';
import AuthFooter from '../../components/Auth/Footers/AuthFooter.js';
import "../../assets/plugins/nucleo/css/nucleo.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "../../assets/scss/argon-dashboard-react.scss"
const Auth = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();
  const history = useHistory();
  if (localStorage.getItem("TOKEN")) {
    history.push("/admin");
  } else {
    // var pathName = window.location.pathname;
    // if (location.pathname.indexOf('/admin') > -1) {
    //   history.push("/login");
    // }
  }
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
        // console.log(prop.component);

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
                  </> : (location.pathname === '/auth/setNewPassword') ? <>
                    <h1 className="text-white">
                      Enter New Password
                    </h1>
                    <p className="text-lead text-white">
                      Please enter the new password and try a Login
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
            </Switch>
          </Row>
        </Container>
      </div>
      <AuthFooter />
    </>
  );
};

export default Auth;
