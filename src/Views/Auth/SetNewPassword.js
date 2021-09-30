// reactstrap components
import {
    Button,
    Card,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
  } from "reactstrap";
  const SetNewPassword = (props) => {
  
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
  
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="New Password"
                      type="password"
                      autoComplete="new-email"
                    />
                  </InputGroup>
                  <InputGroup className="input-group-alternative  mt-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Confirm Password"
                      type="password"
                      autoComplete="new-"
                    />
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                  <Button className="mt-2" color="primary" type="button">
                    Reset
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  };
  
  export default SetNewPassword;
  