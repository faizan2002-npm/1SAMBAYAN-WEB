import Header from "../../components/Admin/Headers/Header";
import { Formik, Form, Field as Input, ErrorMessage } from "formik";

import { Container, Card, Row, Col, CardBody, Label, FormGroup, Button } from 'reactstrap';
import { getRequest } from "../../api/request";
import React, { useState, useEffect } from 'react';
import { putRequest } from './../../api/request';

const EditProfile = () => {
  const [profileData, setProfileData] = useState()
  const getAdminProfile = async () => {
    try {
      const token = localStorage.getItem("TOKEN");
      // console.log("token", token);
      // var params = props.location.search.slice(5);
      const response = await getRequest(
        `/api/secure/user/profile`,
        token
      );
      console.log("setProfileData", response);
      setProfileData({
        admin_firstName: response.result.data.user.firstName,
        admin_lastName: response.result.data.user.lastName,
        admin_email: response.result.data.user.email,
        admin_phone: response.result.data.user.phone,
        admin_pic: '',
      });
      console.log("Get Profile Response", response.result);
    } catch (error) {
      console.log("Get Profile Error", error.message);
    }
  };

  useEffect(() => {
    getAdminProfile();
  }, []);
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardBody>
                <Formik
                  // initialValues={{
                  //   admin_name: "",
                  //   admin_email: "",
                  //   admin_phone: "",
                  //   admin_pic: "",
                  // }}
                  enableReinitialize={true}
                  initialValues={profileData}
                  onSubmit={async (values) => {
                    // console.log("values",values);
                    const token = localStorage.getItem("TOKEN");
                    const APIresponse = {
                      props: {
                        firstName: values.admin_firstName,
                        lastName: values.admin_lastName,
                        email: values.admin_email,
                        phone: values.admin_phone,
                        image: '',
                      }
                    };
                    // console.log('Pre Post APIresponse', JSON.stringify(APIresponse));
                    try {
                      const response = await putRequest(
                        "/api/secure/user/update-profile",
                        token,
                        APIresponse
                      );

                      // console.log("status", response);
                      if (response.result.status === 200) {
                        alert('Updated');
                        //   console.log("logged in!");
                        //   if (response.result.data.user.type === "teacher") {
                        //     // navigate("TeacherDashboard");
                        //     teacherLoginRedirect();
                        //   }
                      }
                    } catch (error) {
                      console.log("Set Profile APi error", error.message);
                    }
                  }}
                >
                  <Form>
                    <Row>
                      <Col lg={6} md={6} xs={12}>
                        <FormGroup className="mb-3">
                          <Label>First Name</Label>
                          <Input
                            name="admin_firstName"
                            type="text"
                            placeholder="Name"
                            className="form-control" />
                        </FormGroup>
                      </Col>
                      <Col lg={6} md={6} xs={12}>
                        <FormGroup className="mb-3">
                          <Label>Last Name</Label>
                          <Input
                            name="admin_lastName"
                            type="text"
                            placeholder="Name"
                            className="form-control" />
                        </FormGroup>
                      </Col>
                      <Col lg={6} md={6} xs={12}>
                        <FormGroup className="mb-3">
                          <Label>Email</Label>
                          <Input
                            name="admin_email"
                            type="email"
                            placeholder="Email Address"
                            className="form-control" />
                        </FormGroup>
                      </Col>
                      <Col lg={6} md={6} xs={12}>
                        <FormGroup className="mb-3">
                          <Label>Phone Number</Label>
                          <Input
                            name="admin_phone"
                            type="tel"
                            placeholder="Phone Number"
                            className="form-control" />
                        </FormGroup>
                      </Col>
                      <Col lg={6} md={6} xs={12}>
                        <FormGroup className="mb-3">
                          <Label>Profile Pic</Label>
                          <Input
                            name="admin_pic"
                            type="file"
                            className="form-control" />
                        </FormGroup>
                      </Col>
                      <Col className="text-center mt-5" xs={12}>
                        <Button type="submit" color="success" outline>
                          Save
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Formik>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default EditProfile;