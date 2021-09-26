import Header from "../../components/Admin/Headers/Header";
import { Formik, Form, Field as Input, ErrorMessage } from "formik";

import { Container, Card, Row, Col, CardBody, Label, FormGroup, Button } from 'reactstrap';
// import React, { useState } from 'react';

const EditProfile = () => {

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardBody>
                <Formik
                  initialValues={{
                    admin_name: "",
                    admin_email: "",
                    admin_phone: "",
                    admin_pic: "",
                  }}
                  onSubmit={async (values) => {
                    console.log(values);

                    // try {
                    //   const response = await postRequestForm(
                    //     "/api/auth/login",
                    //     "",
                    //     values
                    //   );
                    //   localStorage.setItem(
                    //     "TOKEN",
                    //     response.result.data.token
                    //   );
                    //   // console.log('TOKEN', response.result .data.token);
                    //   console.log("status", response.result.status);
                    //   if (response.result.status === 200) {
                    //     console.log("logged in!");
                    //     if (response.result.data.user.type === "teacher") {
                    //       // navigate("TeacherDashboard");
                    //       teacherLoginRedirect();
                    //     }
                    //   }
                    // } catch (error) {
                    //   console.log("Login APi error", error.message);
                    // }
                  }}
                >
                  <Form>
                    <Row>
                      <Col lg={6} md={6} xs={12}>
                        <FormGroup className="mb-3">
                          <Label>Name</Label>
                          <Input
                            name="admin_name"
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