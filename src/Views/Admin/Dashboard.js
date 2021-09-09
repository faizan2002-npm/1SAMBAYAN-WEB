
// reactstrap components
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";
import Header from "../../components/Admin/Headers/Header";

const Dashboard = (props) => {
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Page visits</h3>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Page name</th>
                    <th scope="col">Visitors</th>
                    <th scope="col">Unique users</th>
                    <th scope="col">Bounce rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">/admin</th>
                    <td></td>
                    <td></td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/edit-profile</th>
                    <td></td>
                    <td></td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />
                                          </td>
                  </tr>
                  <tr>
                    <th scope="row">/home</th>
                    <td></td>
                    <td></td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/admin/login</th>
                    <td></td>
                    <td></td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col> 
          </Row>
      </Container>
    </>
  );
};

export default Dashboard;
