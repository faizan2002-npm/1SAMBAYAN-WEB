import React, { useState } from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, FormGroup, Label, CardHeader, CardBody } from 'reactstrap';
import classnames from 'classnames';
import { Editor } from "@tinymce/tinymce-react";
import Header from '../../../components/Admin/Headers/Header';
import { Form, Formik, Field as Input } from 'formik';
import EditorField from '../../../components/Admin/EditorFormik.d';
import { getRequest, putRequest } from './../../../api/request';
import { useEffect } from 'react';

const SiteSettingPage = () => {
    const [activeTab, setActiveTab] = useState('1');
    const [siteSettings, setSiteSettings] = useState();

    const getSiteSetting = async () => {
        try {
            const token = localStorage.getItem("TOKEN");
            // console.log("token", token);
            // var params = props.location.search.slice(5);
            const response = await getRequest(
                `/api/secure/site/`,
                token
            );
            setSiteSettings({
                aboutSite: response.result.data.site[0].footer,
                city: response.result.data.site[0].address.city,
                street: response.result.data.site[0].address.street,
                latitude: response.result.data.site[0].address.latitude,
                longitude: response.result.data.site[0].address.longitude,
                zip: response.result.data.site[0].zip,
                copyright: response.result.data.site[0].copyright,
                videoURL: response.result.data.site[0].videoURL,
                loop: response.result.data.site[0].video.videoSettings.loop,
                controls: response.result.data.site[0].video.videoSettings.controls,
                autoPlay: response.result.data.site[0].video.videoSettings.autoPlay,
                muted: response.result.data.site[0].video.videoSettings.muted,
                siteEmail: response.result.data.site[0].email,
                siteLogo: response.result.data.site[0].logo,
                siteOwner: response.result.data.site[0].siteOwner,
                sitePhone: response.result.data.site[0].phone,
                siteSlogan: response.result.data.site[0].slogan,
                siteTitle: response.result.data.site[0].name,
                siteURL: response.result.data.site[0].url,
                fbUrl: response.result.data.site[0].socialMediaLinks.Facebook,
                twUrl: response.result.data.site[0].socialMediaLinks.Twitter,
                igUrl: response.result.data.site[0].socialMediaLinks.Instagram,
                waUrl: response.result.data.site[0].socialMediaLinks.LinkedIn
            });
            // console.log("siteSettings", siteSettings);

            // console.log("Get Site Setting Response", response.result.data.site[0].video.videoSettings);
        } catch (error) {
            console.log("Get Site Setting Error", error);
        }
    };

    useEffect(() => {
        getSiteSetting();
    }, []);
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <>
            <Header />
            <Container className="mt--7" fluid>
                <Row className="mt-5">
                    <Col className="mb-5 mb-xl-0" xl="12">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '1' })}
                                            onClick={() => { toggle('1'); }}
                                        >
                                            Side Core
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '2' })}
                                            onClick={() => { toggle('2'); }}
                                        >
                                            Site Info
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '3' })}
                                            onClick={() => { toggle('3'); }}
                                        >
                                            Footer Setting
                                        </NavLink>
                                    </NavItem>

                                </Nav>
                            </CardHeader>
                            <CardBody>
                                <Formik
                                    enableReinitialize={true}
                                    initialValues={siteSettings}
                                    // values={siteSettings}
                                    onSubmit={async (values) => {
                                        const token = localStorage.getItem("TOKEN");
                                        const APIresponse = {
                                            props: {
                                                name: values.siteTitle,
                                                email: values.siteEmail,
                                                phone: values.sitePhone,
                                                owner: values.siteOwner,
                                                address: {
                                                    city: values.city,
                                                    street: values.street,
                                                    latitude: values.latitude,
                                                    longitude: values.longitude,
                                                    zip: values.zip
                                                },
                                                video: {
                                                    videoURL: '',
                                                    videoSettings: {
                                                        loop: false,
                                                        controls: false,
                                                        autoPlay: false,
                                                        muted: false
                                                    },
                                                },
                                                address: {
                                                    street: values.street,
                                                    city: values.city,
                                                    zip: values.zip,
                                                    latitude: values.latitude,
                                                    longitude: values.longitude,
                                                },
                                                footer: values.aboutSite,
                                                url: values.siteURL,
                                                slogan: values.siteSlogan,
                                                copyright: values.copyright,
                                                logo: values.siteLogo,
                                                socialMediaLinks: {
                                                    Facebook: values.fbUrl,
                                                    Twitter: values.twUrl,
                                                    Instagram: values.igUrl,
                                                    LinkedIn: values.waUrl,
                                                }
                                            }
                                        };
                                        try {
                                            const response = await putRequest(
                                                "/api/secure/site/update-site",
                                                token,
                                                APIresponse
                                            );

                                            console.log("Site ", response);
                                            if (response.result.status === 200) {
                                                alert('Updated');
                                            }
                                        } catch (error) {
                                            console.log("Set Site Setting error", error.message);
                                        }
                                    }}
                                >
                                    <Form>
                                        <TabContent activeTab={activeTab}>
                                            <TabPane tabId="1">
                                                <Row>
                                                    <Col lg={6} md={6} xs={12}>
                                                        <FormGroup>
                                                            <Label for="exampleFile">Site Title</Label>
                                                            <Input type="text" name="siteTitle" id="siteTitle" className="form-control" />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg={6} md={6} xs={12}>
                                                        <FormGroup>
                                                            <Label for="exampleFile">Site URL</Label>
                                                            <Input type="text" name="siteURL" id="siteURL" className="form-control" />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg={6} md={6} xs={12}>
                                                        <FormGroup>
                                                            <Label for="exampleFile">Site Slogan</Label>
                                                            <Input type="text" name="siteSlogan" id="siteSlogan" className="form-control" />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg={6} md={6} xs={12}>
                                                        <FormGroup>
                                                            <Label for="exampleFile">Site Logo</Label>
                                                            <Input type="file" name="siteLogo" id="siteLogo" className="form-control" />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                            <TabPane tabId="2">
                                                <Row>
                                                    <Col md={6} xs={12}>
                                                        <FormGroup>
                                                            <Label >Site Email</Label>
                                                            <Input type="email" name="siteEmail" placeholder="" className="form-control" />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md={6} xs={12}>
                                                        <FormGroup>
                                                            <Label >Site Phone</Label>
                                                            <Input type="tel" name="sitePhone" placeholder="" className="form-control" />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md={6} xs={12}>
                                                        <FormGroup>
                                                            <Label >Instagram URL</Label>
                                                            <Input type="url" name="igUrl" placeholder="" className="form-control" />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md={6} xs={12}>
                                                        <FormGroup>
                                                            <Label >Facebook URL</Label>
                                                            <Input type="url" name="fbUrl" placeholder="" className="form-control" />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md={6} xs={12}>
                                                        <FormGroup>
                                                            <Label >Twitter URL</Label>
                                                            <Input type="url" name="twUrl" placeholder="" className="form-control" />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md={6} xs={12}>
                                                        <FormGroup>
                                                            <Label >Whatapp URL</Label>
                                                            <Input type="url" name="waUrl" placeholder="" className="form-control" />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md={4} xs={12}>
                                                        <FormGroup>
                                                            <Label >Street</Label>
                                                            <Input type="text" name="street" placeholder="" className="form-control" />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md={4} xs={12}>
                                                        <FormGroup>
                                                            <Label >City</Label>
                                                            <Input type="text" name="city" placeholder="" className="form-control" />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md={4} xs={12}>
                                                        <FormGroup>
                                                            <Label >Zip</Label>
                                                            <Input type="text" name="zip" placeholder="" className="form-control" />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md={6} xs={12}>
                                                        <FormGroup>
                                                            <Label >Latitude</Label>
                                                            <Input type="text" name="latitude" placeholder="" className="form-control" />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md={6} xs={12}>
                                                        <FormGroup>
                                                            <Label >Longitude</Label>
                                                            <Input type="text" name="longitude" placeholder="" className="form-control" />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                            <TabPane tabId="3">
                                                <Row>
                                                    <Col xs={12}>
                                                        <FormGroup>
                                                            <Label >Footer About</Label>
                                                            <EditorField
                                                                name="aboutSite"
                                                                init={{
                                                                    plugins: 'autolink link image lists print preview',
                                                                    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                                                                }}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs={12}>
                                                        <FormGroup>
                                                            <Label >Site Copyright</Label>
                                                            <Input type="text" name="copyright" placeholder="" className="form-control" />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                        </TabContent>
                                        <Row>
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

export default SiteSettingPage
