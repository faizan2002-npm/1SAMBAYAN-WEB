// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import { useHistory } from "react-router-dom";

import { Formik, Form, Field as Input, ErrorMessage } from "formik";
import { postRequestForm } from "../../api/request";
import { Link } from 'react-router-dom';
const Login = () => {
  const history = useHistory();

  function userLoginRedirect(role) {
    if (role === 'admin') {
      history.push("/admin");
    } else {
      // history.push("/admin");
    }
  }

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is Required";
    }
    if (!values.password) {
      errors.password = "password is Required";
    }

    return errors;
  };
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">

          <CardBody className="px-lg-5 py-lg-5">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={async (values, {
                setSubmitting,
                setErrors,
                resetForm /* setValues and other goodies */,
              }) => {
                // console.log(values);
                const APIresponse = {
                  email: values.email,
                  password: values.password,
                };
                try {

                  const response = await postRequestForm(
                    "/api/pub/auth/login",
                    "",
                    APIresponse
                  );

                  // localStorage.setItem(
                  //   "TOKEN",
                  //   response.result.data.token
                  // );
                  // console.log('TOKEN', response.result .data.token);
                  // console.log("status", response.error.response);
                  if (response.result.status === 200) {
                    console.log("logged in!");
                    console.log("status", response);
                    localStorage.setItem(
                      "TOKEN",
                      response.result.data.token
                    );
                    // if (response.result.data.user.type === "teacher") {
                    // navigate("TeacherDashboard");
                    userLoginRedirect(response.result.data.user.role);
                    // }
                  }
                } catch (error) {
                  console.log("Login APi error", error);
                }
              }}
            >
              <Form>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </InputGroup>
                </FormGroup>
                {/* <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div> */}
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="submit">
                    Sign in
                  </Button>
                </div>
              </Form>
            </Formik>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col className="text-center" xs="12">
            <Link
              className="text-light"
              to="/resetPassword"
            >
              <small>Forgot password?</small>
            </Link>
          </Col>
          <Col className="text-center mt-2" xs="12">
            <Link
              className="text-light"
              to="/"
            >
              <small>Back to 1Sambayan</small>
            </Link>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
