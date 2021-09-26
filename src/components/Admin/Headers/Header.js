
// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom";
import routes from "../../../routes";

const Header = (props) => {
  const location = useLocation();
  const getPageTitle = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin" && (location.pathname.indexOf(prop.layout + prop.path) > -1)) {
        if (prop.name === 'Dashboard') {
          return (
            <Row key={key}>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Posts
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          0
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Events
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">0</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i className="fas fa-chart-pie" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Candidates
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">0</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="fas fa-users" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Parties
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">0</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <i className="fas fa-percent" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          );
        } else {
          return (
            <>
              {
                (prop.subMenu) ? prop.subMenu.map((prop, key) => {
                  if((location.pathname.indexOf(prop.layout + prop.path) > -1)){
                    return(
                      <Row key={key}>
                        <Col xl="12">
                          <h1 className="display-4 text-center text-white">{prop.name}</h1>
                        </Col>
                      </Row>
                    );
                  }
                }) : <Row key={key}>
                  <Col xl="12">
                    <h1 className="display-4 text-center text-white">{prop.name}</h1>
                  </Col>
                </Row>
              }
            </>
          );
        }
      } else {
        return null;
      }
    });
  };
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            {
              getPageTitle(routes)
            }
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
