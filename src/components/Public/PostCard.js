import React from 'react'
import { Card, Row, Col, Image } from 'react-bootstrap'

export const PostCard = ({ heading, text, time, video, image, grid = true, row = true }) => {
    return (
        <>
            <Card>
                <Card.Body>
                    {
                        (row) ? (grid) ? <Row className="justify-content-center">
                            {
                                (video) ? <>
                                    <Col lg={5} md={12} xs={12}>
                                        <video className="video" controls={true} loop="" muted="">
                                            <source src={video} type="video/mp4" />
                                        </video>
                                    </Col>
                                </> : (image) ? <>
                                    <Col lg={2} md={5} xs={12}>
                                        <Image src={image} alt="" fluid />
                                    </Col>
                                </> : ''
                            }
                            {
                                (video) ? <>
                                    <Col lg={7} md={12} xs={12} className="justify-content-around d-flex flex-column">
                                        {
                                            (heading) ? <h2>
                                                {heading}
                                            </h2> : ''
                                        }
                                        {
                                            (text) ? <p>
                                                {text}
                                            </p> : ''
                                        }
                                        {
                                            (time) ? <h5>
                                                {time}
                                            </h5> : ''
                                        }
                                    </Col>
                                </> : (image) ? <>
                                    <Col lg={5} md={12} xs={12} className="justify-content-around d-flex flex-column">
                                        {
                                            (heading) ? <h2>
                                                {heading}
                                            </h2> : ''
                                        }
                                        {
                                            (text) ? <p>
                                                {text}
                                            </p> : ''
                                        }
                                        {
                                            (time) ? <h5>
                                                {time}
                                            </h5> : ''
                                        }
                                    </Col>
                                </> : ''
                            }
                        </Row> : (image) ? <>
                            <Row className="justify-content-center">
                                <Col lg={2} md={5} xs={12}>
                                    <Image src={image} alt="" fluid />
                                </Col>
                                <Col lg={5} md={12} xs={12} className="justify-content-around d-flex flex-column">
                                    {
                                        (heading) ? <h2>
                                            {heading}
                                        </h2> : ''
                                    }
                                    {
                                        (text) ? <p>
                                            {text}
                                        </p> : ''
                                    }
                                    {
                                        (time) ? <h5>
                                            {time}
                                        </h5> : ''
                                    }
                                </Col>
                            </Row>
                        </> : '' : <>
                            <Image src={image} alt="" fluid />
                            {
                                (heading) ? <h2>
                                    {heading}
                                </h2> : ''
                            }
                            {
                                (text) ? <p>
                                    {text}
                                </p> : ''
                            }
                            {
                                (time) ? <h5>
                                    {time}
                                </h5> : ''
                            }
                        </>
                    }
                </Card.Body>
            </Card>
        </>
    )
}
