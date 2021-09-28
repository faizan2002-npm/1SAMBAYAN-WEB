import React from 'react'
import { Card, CardBody, Col, Container, Row, Label, FormGroup, Button } from 'reactstrap'
import Header from '../../../components/Admin/Headers/Header'
import { Formik, Form, Field as Input } from "formik";
import * as Yup from "yup";
import EditorField from '../../../components/Admin/EditorFormik.d.tsx';
import { postRequestForm } from '../../../api/request';
// import { ImageUploaderField } from './../../../components/ImageUploaderField';
// import MyFileInput from '../../../components/MyFileInput';

const CreateCandidate = () => {
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
                                        title: "",
                                        image: "",
                                    }}
                                    // validationSchema={Yup.object({
                                    //     image: Yup.array().min(1, "select at least 1 file")
                                    // })}
                                    onSubmit={async (values) => {
                                        // console.log(values);
                                        const token = localStorage.getItem("TOKEN");
                                        // console.log(token);
                                        const APIresponse = {
                                            props: {
                                                title: values.title,
                                                image: values.image,
                                            }
                                        };
                                        // console.log('Pre Post APIresponse',APIresponse);
                                        try {
                                            const response = await postRequestForm(
                                                "/api/secure/candidate/create",
                                                token,
                                                APIresponse
                                            );

                                            console.log("status", response);
                                            if (response.result.status === 200) {
                                                alert('Created');

                                                //   console.log("logged in!");
                                                //   if (response.result.data.user.type === "teacher") {
                                                //     // navigate("TeacherDashboard");
                                                //     teacherLoginRedirect();
                                                //   }
                                            }
                                        } catch (error) {
                                            console.log("Set Site Setting error", error.message);
                                        }
                                    }}
                                >
                                    {(props) => {
                                        const {
                                            values,
                                            touched,
                                            errors,
                                            dirty,
                                            isSubmitting,
                                            handleChange,
                                            handleBlur,
                                            handleSubmit,
                                            handleReset,
                                            setFieldValue
                                        } = props;
                                        return (
                                            <>
                                                <Form>
                                                    <Row>
                                                        <Col xs={12}>
                                                            <FormGroup className="mb-3">
                                                                <Label>Title</Label>
                                                                <Input
                                                                    name="title"
                                                                    type="text"
                                                                    placeholder="Name"
                                                                    className="form-control" />
                                                            </FormGroup>
                                                        </Col>
                                                        {/* <Col lg={6} md={6} xs={12}>
                                                            <FormGroup className="mb-3">
                                                                <Label>image</Label>
                                                                <MyFileInput
                                                                    inputProps={{
                                                                        id: 'image',
                                                                        name: 'image',
                                                                        // onBlur: () => formik.setFieldTouched('image'),
                                                                        onChange: e => {
                                                                            console.log(e.target.files[0])
                                                                            setFieldValue('image', e.target.files[0])
                                                                        },
                                                                    }}
                                                                    onRemove={() => {
                                                                        setFieldValue('image', null)
                                                                    }}
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col lg={6} md={6} xs={12}>
                                                            <FormGroup className="mb-3">
                                                                <Label>Video</Label>
                                                                <Input
                                                                    name="video"
                                                                    type="tel"
                                                                    placeholder="Phone Number"
                                                                    className="form-control" />
                                                            </FormGroup>
                                                        </Col> */}
                                                        <Col className="text-center mt-5" xs={12}>
                                                            <Button type="submit" color="success" outline>
                                                                Save
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </>
                                        );
                                    }}
                                </Formik>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CreateCandidate
