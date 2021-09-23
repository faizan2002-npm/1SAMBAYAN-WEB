
import siteSettings from "../../../Constants/Admin/siteSettings";
import {  Row, Col,  } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="12">
          <div className="copyright text-center text-muted">
            {siteSettings.SiteSettings[0].Copyright_text}
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
