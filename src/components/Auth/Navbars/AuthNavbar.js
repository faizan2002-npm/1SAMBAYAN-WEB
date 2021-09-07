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
import { Link } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import Images from "../../../Constants/Auth/images";
const AdminNavbar = () => {
  return (
    <>
      <Navbar className="navbar-top" expand="md">
        <Container className="px4 mb-5 justify-content-center">
          <NavbarBrand to="/" tag={Link}>
            <img
              alt="..."
              src={Images.LOGO}
            />
          </NavbarBrand>
         </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
