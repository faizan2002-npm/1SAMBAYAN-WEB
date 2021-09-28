import React from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, FormGroup, Label, Row } from 'reactstrap'
import Header from '../../../components/Admin/Headers/Header'
import DataTable from 'react-data-table-component';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { getRequest, putRequest } from '../../../api/request';
import { Link } from 'react-router-dom';
import { Form, Formik, Field as Input } from 'formik';
import EditorField from '../../../components/Admin/EditorFormik.d';

// A super simple expandable component.
function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}
const ExpandedComponent = ({ data }) => <>
    {/* <Link to={`/${camelize(data.title)}`} className="btn btn-primary btn-sm">View</Link> */}
    {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    <Formik
        enableReinitialize={true} initialValues={{
            editTitle: data.title,
            image: data.image,
        }}
        onSubmit={async (values) => {
            // console.log(values);
            const token = localStorage.getItem("TOKEN");
            // console.log(token);
            const APIresponse = {
                props: {
                    title: values.editTitle,
                    image: values.image,
                    postId: data._id
                }
            };
            console.log('Update Party APIresponse', APIresponse);
            try {
                const response = await putRequest(
                    "/api/secure/party/update",
                    token,
                    APIresponse
                );

                console.log("status", response);
                if (response.result.status === 200) {
                    alert('Updated');

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
        <Form>
            <Row className="m-0">
                <Col xs={12} className="my-3">
                    <h2>Edit Post {data.title}</h2>
                </Col>
                <Col xs={12}>
                    <FormGroup>
                        <Label>Post Title</Label>
                        <Input type="text" name="editTitle" id="editTitle" className="form-control" />
                    </FormGroup>
                </Col>
                <Col className="text-center mt-2" xs={12}>
                    <Button type="submit" color="success" outline>
                        Save
                    </Button>
                </Col>
            </Row>
        </Form>
    </Formik>
</>;

const ListParty = () => {

    const [tableHead, setTableHead] = useState([
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Date',
            selector: row => row.createdAt,
        },
    ]);
    const [tableData, setTableData] = useState();
    const getAllPosts = async () => {
        try {
            const token = localStorage.getItem("TOKEN");
            // console.log("token", token);
            // var params = props.location.search.slice(5);
            const response = await getRequest(
                `/api/secure/party/party-list`,
                token
            );
            setTableData(response.result.data.parties);
            // console.log("Get All Posts Response", response.result.data.posts);
        } catch (error) {
            console.log("Get Site Setting Error", error);
        }
    };

    useEffect(() => {
        getAllPosts();
    }, []);
    return (
        <>
            <Header />
            <Container className="mt--7" fluid>
                <Row className="mt-5">
                    <Col className="mb-5 mb-xl-0" xl="12">
                        <Card className="shadow">
                            <CardHeader className="border-0">

                            </CardHeader>
                            <CardBody>
                                <DataTable
                                    columns={tableHead}
                                    data={tableData}
                                    expandableRows
                                    theme="solarized"
                                    pagination
                                    expandableRowsComponent={ExpandedComponent}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ListParty
