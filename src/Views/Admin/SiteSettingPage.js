import React, { useState } from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, FormGroup, Label, Input, CardHeader, CardBody } from 'reactstrap';
import classnames from 'classnames';
import { Editor } from "@tinymce/tinymce-react";

const SiteSettingPage = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <>
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
                <Container fluid>
                    <div className="header-body"></div>
                </Container>
            </div>
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
                                            Header Setting
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '2' })}
                                            onClick={() => { toggle('2'); }}
                                        >
                                            Site Setting
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
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '4' })}
                                            onClick={() => { toggle('4'); }}
                                        >
                                            Privacy Policy
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '5' })}
                                            onClick={() => { toggle('5'); }}
                                        >
                                            Disclaimer
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '6' })}
                                            onClick={() => { toggle('6'); }}
                                        >
                                            Term & Condition
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '7' })}
                                            onClick={() => { toggle('7'); }}
                                        >
                                            FAQ
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '8' })}
                                            onClick={() => { toggle('8'); }}
                                        >
                                            Legal information
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '9' })}
                                            onClick={() => { toggle('9'); }}
                                        >
                                            Act and Regulations
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </CardHeader>
                            <CardBody>
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1">
                                        <Row>
                                            <Col xl={12}>
                                                <FormGroup>
                                                    <Label for="exampleFile">Site Logo</Label>
                                                    <Input type="file" name="siteLogo" id="siteLogo" />
                                                </FormGroup>
                                            </Col>
                                            <Col xl={12}>
                                                <FormGroup>
                                                    <Label >Site URL</Label>
                                                    <Input type="url" name="siteUrl" placeholder="" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <Row>
                                            <Col xl={12}>
                                                <FormGroup>
                                                    <Label >Instagram URL</Label>
                                                    <Input type="url" name="igUrl" placeholder="" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label >Twitter URL</Label>
                                                    <Input type="url" name="twUrl" placeholder="" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label >Twitter URL</Label>
                                                    <Input type="url" name="twUrl" placeholder="" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label >Whatapp URL</Label>
                                                    <Input type="url" name="waUrl" placeholder="" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <Row>
                                            <Col xl={12}>
                                                <FormGroup>
                                                    <Label >Footer About</Label>
                                                    <Editor
                                                        initialValue="<p>Sambayan is broad condition of democratic forcers reprsentaing the broad spesctrum od legitimate political persuasion in the Philippines. It aims to usher in a compotont,trustworthy administration in May 2022 national electrion by feilding a single state of national candidates: president, vice prisident and 12 senators.</p>
                                                        <p>&nbsp;</p>
                                                        <p>The mivement begun September 2020. when economic recaession and unemployment due to tje COVID-19 panademic had set in, in the number of infeations kept rising and the incumbent administration had shown itself incapable of a sensible effective response to the crises.</p>"
                                                        init={{
                                                            plugins: 'autolink link image lists print preview',
                                                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                                                        }}
                                                        onChange={(e) => { console.log(e.target.getContent()); }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col xl={12}>
                                                <FormGroup>
                                                    <Label >Site Copyright</Label>
                                                    <Input type="url" name="siteSetting" placeholder="" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="4">
                                        <Row>
                                            <Col xl={12}>
                                                <FormGroup>
                                                    <Label >Privacy Policy</Label>
                                                    <Editor
                                                        initialValue="<p>Sambayan is broad condition of democratic forcers reprsentaing the broad spesctrum od legitimate political persuasion in the Philippines. It aims to usher in a compotont,trustworthy administration in May 2022 national electrion by feilding a single state of national candidates: president, vice prisident and 12 senators.</p>
                                                        <p>&nbsp;</p>
                                                        <p>The mivement begun September 2020. when economic recaession and unemployment due to tje COVID-19 panademic had set in, in the number of infeations kept rising and the incumbent administration had shown itself incapable of a sensible effective response to the crises.</p>"
                                                        init={{
                                                            plugins: 'autolink link image lists print preview',
                                                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                                                        }}
                                                        onChange={(e) => { console.log(e.target.getContent()); }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="5">
                                        <Row>
                                            <Col xl={12}>
                                                <FormGroup>
                                                    <Label >Disclaimer</Label>
                                                    <Editor
                                                        initialValue="<p>Sambayan is broad condition of democratic forcers reprsentaing the broad spesctrum od legitimate political persuasion in the Philippines. It aims to usher in a compotont,trustworthy administration in May 2022 national electrion by feilding a single state of national candidates: president, vice prisident and 12 senators.</p>
                                                        <p>&nbsp;</p>
                                                        <p>The mivement begun September 2020. when economic recaession and unemployment due to tje COVID-19 panademic had set in, in the number of infeations kept rising and the incumbent administration had shown itself incapable of a sensible effective response to the crises.</p>"
                                                        init={{
                                                            plugins: 'autolink link image lists print preview',
                                                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                                                        }}
                                                        onChange={(e) => { console.log(e.target.getContent()); }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="6">
                                        <Row>
                                            <Col xl={12}>
                                                <FormGroup>
                                                    <Label >Term & Condition</Label>
                                                    <Editor
                                                        initialValue="<p>Sambayan is broad condition of democratic forcers reprsentaing the broad spesctrum od legitimate political persuasion in the Philippines. It aims to usher in a compotont,trustworthy administration in May 2022 national electrion by feilding a single state of national candidates: president, vice prisident and 12 senators.</p>
                                                        <p>&nbsp;</p>
                                                        <p>The mivement begun September 2020. when economic recaession and unemployment due to tje COVID-19 panademic had set in, in the number of infeations kept rising and the incumbent administration had shown itself incapable of a sensible effective response to the crises.</p>"
                                                        init={{
                                                            plugins: 'autolink link image lists print preview',
                                                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                                                        }}
                                                        onChange={(e) => { console.log(e.target.getContent()); }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="7">
                                        <Row>
                                            <Col xl={12}>
                                                <FormGroup>
                                                    <Label >FAQ</Label>
                                                    <Editor
                                                        initialValue="<p>Sambayan is broad condition of democratic forcers reprsentaing the broad spesctrum od legitimate political persuasion in the Philippines. It aims to usher in a compotont,trustworthy administration in May 2022 national electrion by feilding a single state of national candidates: president, vice prisident and 12 senators.</p>
                                                        <p>&nbsp;</p>
                                                        <p>The mivement begun September 2020. when economic recaession and unemployment due to tje COVID-19 panademic had set in, in the number of infeations kept rising and the incumbent administration had shown itself incapable of a sensible effective response to the crises.</p>"
                                                        init={{
                                                            plugins: 'autolink link image lists print preview',
                                                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                                                        }}
                                                        onChange={(e) => { console.log(e.target.getContent()); }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="8">
                                        <Row>
                                            <Col xl={12}>
                                                <FormGroup>
                                                    <Label >Legal information</Label>
                                                    <Editor
                                                        initialValue="<p>Sambayan is broad condition of democratic forcers reprsentaing the broad spesctrum od legitimate political persuasion in the Philippines. It aims to usher in a compotont,trustworthy administration in May 2022 national electrion by feilding a single state of national candidates: president, vice prisident and 12 senators.</p>
                                                        <p>&nbsp;</p>
                                                        <p>The mivement begun September 2020. when economic recaession and unemployment due to tje COVID-19 panademic had set in, in the number of infeations kept rising and the incumbent administration had shown itself incapable of a sensible effective response to the crises.</p>"
                                                        init={{
                                                            plugins: 'autolink link image lists print preview',
                                                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                                                        }}
                                                        onChange={(e) => { console.log(e.target.getContent()); }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="9">
                                        <Row>
                                            <Col xl={12}>
                                                <FormGroup>
                                                    <Label >Act and Regulations</Label>
                                                    <Editor
                                                        initialValue="<p>Sambayan is broad condition of democratic forcers reprsentaing the broad spesctrum od legitimate political persuasion in the Philippines. It aims to usher in a compotont,trustworthy administration in May 2022 national electrion by feilding a single state of national candidates: president, vice prisident and 12 senators.</p>
                                                        <p>&nbsp;</p>
                                                        <p>The mivement begun September 2020. when economic recaession and unemployment due to tje COVID-19 panademic had set in, in the number of infeations kept rising and the incumbent administration had shown itself incapable of a sensible effective response to the crises.</p>"
                                                        init={{
                                                            plugins: 'autolink link image lists print preview',
                                                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                                                        }}
                                                        onChange={(e) => { console.log(e.target.getContent()); }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SiteSettingPage
