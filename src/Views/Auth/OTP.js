import React, { useState } from 'react';

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
    const [OTP, setOTP] = useState(0);
    return (
        <>
            <Col lg="5" md="7">
                <Card className="bg-secondary shadow border-0">

                    <CardBody className="px-lg-5 py-lg-5">
                        <Form role="form">
                            <OtpInput
                                containerStyle={
                                    {
                                        justifyContent: 'space-between'
                                    }
                                }
                                inputStyle={
                                    {
                                        width: '2.5rem',
                                        height: '2.5rem'
                                    }
                                }
                                value={OTP}
                                onChange={(value) => {
                                    setOTP(value)
                                }}
                                numInputs={6}
                                separator={false}
                            />
                            <div className="text-center">
                                <Button className="my-4" color="primary" type="button">
                                    Submit
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
