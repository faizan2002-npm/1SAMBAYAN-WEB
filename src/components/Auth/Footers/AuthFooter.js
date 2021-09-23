
import {  Container, Row, Col } from "reactstrap";
import siteSettings from "../../../Constants/Admin/siteSettings";

const Login = () => {
  return (
    <>
      <footer className="py-5">
        <Container>
          <Row className="align-items-center justify-content-xl-between">
            <Col xl="12">
              <div className="copyright text-center text-muted">
              {siteSettings.SiteSettings[0].Copyright_text}
              </div>
            </Col>
            
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Login;
