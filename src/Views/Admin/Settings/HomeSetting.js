import React, { useState } from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, FormGroup, Label, Input, CardHeader, CardBody } from 'reactstrap';
import classnames from 'classnames';
import SortableList from "../../../components/Admin/SortableList";
import Header from '../../../components/Admin/Headers/Header';

const HomeSetting = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { firstName: "", lastName: "" }]);
    };
    return (
        <>
            {/* <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
                <Container fluid>
                    <div className="header-body"></div>
                </Container>
            </div> */}
            
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
                                            Slider
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '2' })}
                                            onClick={() => { toggle('2'); }}
                                        >
                                            Big Video Section
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '3' })}
                                            onClick={() => { toggle('3'); }}
                                        >
                                            Latest Posts
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '4' })}
                                            onClick={() => { toggle('4'); }}
                                        >
                                            Event Updates
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '5' })}
                                            onClick={() => { toggle('5'); }}
                                        >
                                            Communities
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '6' })}
                                            onClick={() => { toggle('6'); }}
                                        >
                                            Candidates
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '7' })}
                                            onClick={() => { toggle('7'); }}
                                        >
                                            Parties
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </CardHeader>
                            <CardBody>
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1">
                                        <Container fluid>
                                            <Row>
                                                <Col xs={12}>
                                                    {inputList.map((x, i) => {
                                                        return (
                                                            <div className="box">
                                                                <input
                                                                    name="firstName"
                                                                    placeholder="Enter First Name"
                                                                    value={x.firstName}
                                                                    onChange={e => handleInputChange(e, i)}
                                                                />
                                                                <input
                                                                    className="ml10"
                                                                    name="lastName"
                                                                    placeholder="Enter Last Name"
                                                                    value={x.lastName}
                                                                    onChange={e => handleInputChange(e, i)}
                                                                />
                                                                <div className="btn-box">
                                                                    {inputList.length !== 1 && <button
                                                                        className="mr10"
                                                                        onClick={() => handleRemoveClick(i)}>Remove</button>}
                                                                    {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                    <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
                                                </Col>
                                            </Row>
                                        </Container>
                                        {/* <SortableList/> */}
                                    </TabPane>
                                    <TabPane tabId="2">
                                    </TabPane>
                                    <TabPane tabId="3">
                                    </TabPane>
                                    <TabPane tabId="4">
                                    </TabPane>
                                    <TabPane tabId="5">
                                    </TabPane>
                                    <TabPane tabId="6">
                                    </TabPane>
                                    <TabPane tabId="7">
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

export default HomeSetting;
