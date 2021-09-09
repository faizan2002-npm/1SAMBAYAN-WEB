import OtpInput from "react-otp-input";
// reactstrap components
import {
    Button,
    Card,
    CardBody,
    Form,
    Col,
} from "reactstrap";

const OTPAuthentication = (props) => {

    return (
        <>
            <Col lg="5" md="7">
                <Card className="bg-secondary shadow border-0">

                    <CardBody className="px-lg-5 py-lg-5">
                        <Form role="form">
                            <OtpInput
                                value=''
                                onChange={() => { }}
                                numInputs={6}
                                separator={false}
                            />
                            <div className="text-center">
                                <Button className="my-4" color="primary" type="button">
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

export default OTPAuthentication;
