
import { Link } from "react-router-dom";
import {
  NavbarBrand,
  Navbar,
  Container,
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
