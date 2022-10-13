import { Carousel, Col, Container, Row } from "react-bootstrap";
import CommonHeading from "../extra/common-heading";
import Deatils from "../extra/deatails";

function Home() {
    return (
        <>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="img/slide.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <Row>
                            <Col xs={10} md={4}>
                                <div className="w-100 slider-box rounded-3  blur border border-1 rounded-3 p-3 overflow-hidden">
                                    <Row>
                                        <Col xs={4}>
                                            <div className="w-100">
                                                <img src="img/slidein-1.jpg" className="w-100"></img>
                                            </div>
                                        </Col>
                                        <Col xs={8} className="text-start align-self-center">
                                            <div className="w-100">
                                                <h5>Light Brown Dining Sofa</h5>
                                                <p>$149.99</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={10} md={4}>
                                <div className="w-100 slider-box rounded-3  blur border border-1 rounded-3 p-3 overflow-hidden">
                                    <Row>
                                        <Col xs={4}>
                                            <div className="w-100">
                                                <img src="img/slidein-2.jpg" className="w-100"></img>
                                            </div>
                                        </Col>
                                        <Col xs={8} className="text-start align-self-center">
                                            <div className="w-100">
                                                <h5>Light Brown Dining Sofa</h5>
                                                <p>$149.99</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="img/slide2.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <Row>
                            <Col xs={10} md={4}>
                                <div className="w-100 slider-box rounded-3  blur border border-1 rounded-3 p-3 overflow-hidden">
                                    <Row>
                                        <Col xs={4}>
                                            <div className="w-100">
                                                <img src="img/slidein-3.jpg" className="w-100"></img>
                                            </div>
                                        </Col>
                                        <Col xs={8} className="text-start align-self-center">
                                            <div className="w-100">
                                                <h5>Light Brown Dining Sofa</h5>
                                                <p>$149.99</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={10} md={4}>
                                <div className="w-100 slider-box rounded-3  blur border border-1 rounded-3 p-3 overflow-hidden">
                                    <Row>
                                        <Col xs={4}>
                                            <div className="w-100">
                                                <img src="img/slidein-4.jpg" className="w-100"></img>
                                            </div>
                                        </Col>
                                        <Col xs={8} className="text-start align-self-center">
                                            <div className="w-100">
                                                <h5>Light Brown Dining Sofa</h5>
                                                <p>$149.99</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={10} md={4}>
                                <div className="w-100 slider-box rounded-3  blur border border-1 rounded-3 p-3 overflow-hidden">
                                    <Row>
                                        <Col xs={4}>
                                            <div className="w-100">
                                                <img src="img/slidein-5.jpg" className="w-100"></img>
                                            </div>
                                        </Col>
                                        <Col xs={8} className="text-start align-self-center">
                                            <div className="w-100">
                                                <h5>Light Brown Dining Sofa</h5>
                                                <p>$149.99</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <section className="padding100 light-bg" >
                <Container>
                    <CommonHeading title="Why Choose Us?"></CommonHeading>
                    <Row>
                        <Deatils icon="fa-solid fa-earth-americas" productTitle="Woldwide Brand" description="Powerful Layout with Responsive functionality that can be adapted to any screen size. Resize browser to view."></Deatils>
                        <Deatils icon="fa-solid fa-trophy" productTitle="Award Winner" description="Looks beautiful & ultra-sharp on Retina Screen Displays. Retina Icons, Fonts & all others
                        graphics are optimized"></Deatils>
                        <Deatils icon="fa-solid fa-face-smile" productTitle="Happily Service" description="Canvas includes tons of optimized code that are completely customizable and deliver unmatched
                        fast performance."></Deatils>
                    </Row>
                </Container>
            </section>
        </>
    );
}
export default Home;