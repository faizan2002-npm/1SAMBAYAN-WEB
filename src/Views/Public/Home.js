import img from "../../Constants/Admin/images";
import { useState } from 'react';
import { Carousel, Image, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { PostCard } from "../../components/Public/PostCard";
import OwlCarousel from "react-owl-carousel";
import PublicLayout from './../../layouts/Public/PublicLayout';

const Home = () => {
    const [index, setIndex] = useState(0);
    const [slides] = useState([
        {
            _id: 1,
            backgroundImage: img.carouselBg,
            type: 'image',
            image: img.LOGO,
        },
        {
            _id: 2,
            backgroundImage: img.carouselBg,
            type: 'text',
            heading: '"It is good governance that will bring economic development to the country"',
            text: '- Former Associate Justice Antonio Carpio',
        },
        {
            _id: 3,
            backgroundImage: img.carouselBg,
            type: 'text',
            heading: '"It is good governance that will bring economic development to the country"',
            text: '- Former Associate Justice Antonio Carpio',
        },
    ]);
    const [bigVideo] = useState({
        _id: 1,
        video: 'https://ritzplumbing.com/wp-content/uploads/2021/05/palm-trees.mp4',
        rigisterBtnText: 'REGISTER NOW',
        rigisterBtnUrl: '/',
    });
    const [latestPosts] = useState([
        {
            _id: 1,
            video: "https://ritzplumbing.com/wp-content/uploads/2021/05/palm-trees.mp4",
            heading: "25 Years of Excellenc...",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            time: "09:47",
        },
        {
            _id: 2,
            video: "https://ritzplumbing.com/wp-content/uploads/2021/05/palm-trees.mp4",
            heading: "Community Challenges...",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            time: "09:47",
        },
        {
            _id: 3,
            video: "https://ritzplumbing.com/wp-content/uploads/2021/05/palm-trees.mp4",
            heading: "Protest Continues...",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            time: "09:47",
        },
    ])
    const [latestPostsSection] = useState({
        _id: 1,
        heading: 'LATEST POSTS',
        rigisterBtnText: 'VIEW ALL',
        rigisterBtnUrl: '/',
    });
    const [eventUpdates] = useState([
        {
            _id: 1,
            video: "https://ritzplumbing.com/wp-content/uploads/2021/05/palm-trees.mp4",
            heading: "25 Years of Excellenc...",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            time: "09:47",
        },
        {
            _id: 2,
            video: "https://ritzplumbing.com/wp-content/uploads/2021/05/palm-trees.mp4",
            heading: "Community Challenges...",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            time: "09:47",
        },
        {
            _id: 3,
            video: "https://ritzplumbing.com/wp-content/uploads/2021/05/palm-trees.mp4",
            heading: "Protest Continues...",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
            time: "09:47",
        },
    ])
    const [eventUpdatesSection] = useState({
        _id: 1,
        heading: 'EVENTS UPDATES',
        rigisterBtnText: 'VIEW ALL',
        rigisterBtnUrl: '/',
    });
    const [communities] = useState([
        {
            _id: 1,
            image: img.Placeholder,
            heading: "Gabriel Iglesias",
            text: "Hi there! I’m delighted to announce our...",
            time: "09:47",
        },
        {
            _id: 2,
            image: img.Placeholder,
            heading: "Jacob David",
            text: "Hi there! I’m delighted to announce our...",
            time: "09:47",
        },
        {
            _id: 3,
            image: img.Placeholder,
            heading: "Andrew Garfield",
            text: "Hi there! I’m delighted to announce our...",
            time: "09:47",
        },
        {
            _id: 3,
            image: img.Placeholder,
            heading: "Logan Jackman",
            text: "Hi there! I’m delighted to announce our...",
            time: "09:47",
        },
    ])
    const [communitiesSection] = useState({
        _id: 1,
        heading: 'COMMUNITIES',
        rigisterBtnText: 'VIEW ALL',
        rigisterBtnUrl: '/',
    });
    const [candidates] = useState([
        {
            _id: 1,
            image: img.Placeholder,
            text: "Gabriel Iglesias",
        },
        {
            _id: 2,
            image: img.Placeholder,
            text: "Gabriel Iglesias",
        },
        {
            _id: 3,
            image: img.Placeholder,
            text: "Gabriel Iglesias",
        },
        {
            _id: 3,
            image: img.Placeholder,
            text: "Gabriel Iglesias",
        },
        {
            _id: 4,
            image: img.Placeholder,
            text: "Gabriel Iglesias",
        },
        {
            _id: 5,
            image: img.Placeholder,
            text: "Gabriel Iglesias",
        },
        {
            _id: 6,
            image: img.Placeholder,
            text: "Gabriel Iglesias",
        },
        {
            _id: 7,
            image: img.Placeholder,
            text: "Gabriel Iglesias",
        },
    ])
    const [candidatesSection] = useState({
        _id: 1,
        heading: 'CANDIDATES',
    });
    const [parties] = useState([
        {
            _id: 1,
            image: img.Placeholder,
            text: "Gabriel Iglesias",
        },
        {
            _id: 2,
            image: img.Placeholder,
            text: "Gabriel Iglesias",
        },
        {
            _id: 3,
            image: img.Placeholder,
            text: "Gabriel Iglesias",
        },
        {
            _id: 3,
            image: img.Placeholder,
            text: "Gabriel Iglesias",
        },
        {
            _id: 4,
            image: img.Placeholder,
            text: "Gabriel Iglesias",
        },
        {
            _id: 5,
            image: img.Placeholder,
            text: "Gabriel Iglesias",
        },
        {
            _id: 6,
            image: img.Placeholder,
            text: "Gabriel Iglesias",
        },
        {
            _id: 7,
            image: img.Placeholder,
            text: "Gabriel Iglesias",
        },
    ])
    const [partiesSection] = useState({
        _id: 1,
        heading: 'PARTIES',
    });
    const [registerationSection] = useState({
        _id: 1,
        heading: 'REGISTRATION',
    });
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const carouselOptions = {
        margin: 100,
        responsiveClass: true,
        nav: false,
        dots: true,
        autoplay: false,
        smartSpeed: 1500,
        // rows: true,
        items: 4,
        // rowsCount: 2,
        responsive: {
            0: {
                margin: 50,
                items: 2,
                // rows: 1
            },
            768: {
                margin: 50,

                items: 3,
                // rows: 3
            },
            991: {
                margin: 50,
                items: 4,
                // rows: 2
            },
            1199: {
                items: 4,
                // rows: 2
            }
        },
    };
    return (
        <PublicLayout>
            <main id="main_content">
                <section className="home_banner">
                    <Carousel activeIndex={index} onSelect={handleSelect} controls={false} fade={true}>
                        {
                            slides.map((e, index) => (
                                <Carousel.Item key={`id_${e._id}_${index}`}>
                                    <Image src={e.backgroundImage} className="d-block w-100" alt="" fluid />
                                    {
                                        (e.type === 'image') ? <>
                                            <Carousel.Caption>
                                                <Container>
                                                    <Row className="justify-content-center">
                                                        <Col lg={10} md={10} xs={12}>
                                                            <Image src={e.image} alt="" fluid />
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </Carousel.Caption>
                                        </> : <>
                                            <Carousel.Caption>
                                                <h2>{e.heading}</h2>
                                                <p>{e.text}</p>
                                            </Carousel.Caption>
                                        </>
                                    }
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>
                </section>
                <section className="bigVideo">
                    <Container>
                        <div className="video_cover">
                            <video className="video" controls={true} loop="" muted="" autoPlay="">
                                <source src={bigVideo.video}
                                    type="video/mp4" />
                            </video>
                            <div className="button_cover">
                                <Row>
                                    <Col xs={12} className="w-100 d-flex justify-content-center">
                                        <Link to={bigVideo.rigisterBtnUrl} className="btn btn-default">{bigVideo.rigisterBtnText}</Link>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Container>
                </section>
                <section className="latest_posts">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={10} md={10} xs={12}>
                                <h1>{latestPostsSection.heading}</h1>
                                {
                                    latestPosts.map((e, index) => (
                                        <PostCard key={`id_${e._id}_${index}`} heading={e.heading} text={e.text} time={e.time} video={e.video} image={false} grid={true} />
                                    ))
                                }
                                <Row>
                                    <Col xs={12} className="d-flex justify-content-lg-end justify-content-center">
                                        <Link to={latestPostsSection.rigisterBtnUrl} className="btn btn-default">{latestPostsSection.rigisterBtnText}</Link>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="latest_posts bg-white">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={10} md={10} xs={12}>
                                <h1>{eventUpdatesSection.heading}</h1>
                                {
                                    eventUpdates.map((e, index) => (
                                        <PostCard key={`id_${e._id}_${index}`} heading={e.heading} text={e.text} time={e.time} video={e.video} image={false} grid={true} />
                                    ))
                                }
                                <Row>
                                    <Col xs={12} className="d-flex justify-content-lg-end justify-content-center">
                                        <Link to={eventUpdatesSection.rigisterBtnUrl} className="btn btn-default">{eventUpdatesSection.rigisterBtnText}</Link>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="latest_posts v2">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={10} md={10} xs={12}>
                                <h1>{communitiesSection.heading}</h1>
                                {
                                    communities.map((e, index) => (
                                        <PostCard key={`id_${e._id}_${index}`} heading={e.heading} text={e.text} time={e.time} video={false} image={e.image} grid={false} />
                                    ))
                                }
                                <Row>
                                    <Col xs={12} className="d-flex justify-content-lg-end justify-content-center">
                                        <Link to={communitiesSection.rigisterBtnUrl} className="btn btn-default">{communitiesSection.rigisterBtnText}</Link>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="latest_posts bg-white">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={10} md={10} xs={12}>
                                <h1>{candidatesSection.heading}</h1>
                                <OwlCarousel className='owl-theme' {...carouselOptions} >
                                    {
                                        candidates.map((e, index) => (
                                            <PostCard key={`id_${e._id}_${index}`} text={e.text} image={e.image} grid={false} row={false} />
                                        ))
                                    }
                                </OwlCarousel>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="latest_posts">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={10} md={10} xs={12}>
                                <h1>{partiesSection.heading}</h1>
                                <OwlCarousel className='owl-theme' {...carouselOptions} >
                                    {
                                        parties.map((e, index) => (
                                            <PostCard key={`id_${e._id}_${index}`} text={e.text} image={e.image} grid={false} row={false} />
                                        ))
                                    }
                                </OwlCarousel>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="latest_posts  bg-white v2">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 col-md-10 col-12">
                                <h1>{registerationSection.heading}</h1>
                                <div className="row justify-content-center">
                                    <div className="col-lg-6 col-md-8 col-12">
                                        <div className="form_box">
                                            <div className="form-group">
                                                <label>First Name*</label>
                                                <input type="text" className="form-control" placeholder="Peter" />
                                            </div>
                                            <div className="form-group">
                                                <label>Last Name*</label>
                                                <input type="text" className="form-control" placeholder="Parker" />
                                            </div>
                                            <div className="form-group">
                                                <label>Email Address*</label>
                                                <input type="email" className="form-control" placeholder="spider045@gmail.com" />
                                            </div>
                                            <div className="form-group">
                                                <label>Phone Number*</label>
                                                <input type="tel" className="form-control" placeholder="+91 98765 43210" />
                                            </div>
                                            <div className="form-group">
                                                <label>Facebok Profile Link*</label>
                                                <input type="url" className="form-control"
                                                    placeholder="https://ww.facebook.com/spidey045" />
                                            </div>
                                            <div className="form-group">
                                                <label>Select Party*</label>
                                                <select className="form-control">
                                                    <option>Party Name</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Region and Province</label>
                                                <select className="form-control">
                                                    <option>Region Name</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Profession/Field of Expertise</label>
                                                <select className="form-control">
                                                    <option>Select your Profession</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                            </div>
                                            <div
                                                className="form-group align-items-center justify-content-center text-center flex-column d-flex">
                                                <a to="#" className="btn">
                                                    How do you want to help?
                                                </a>
                                                <input type="submit" className="btn btn-default" value="REGISTER NOW" />

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </PublicLayout>
    )
}

export default Home;
