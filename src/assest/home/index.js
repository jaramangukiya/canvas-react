import { Carousel, Col, Container, Row } from "react-bootstrap";
import CommonHeading from "../extra/common-heading";
import Deatils from "../extra/deatails";
import ProductInfo from "../extra/productinfo";

function Home() {
    const productList = [
        {
            id: 1,
            img: "img/2.jpg",
            name: "Light Grey Sofa",
            price: "$799.99",
        }, {
            id: 2,
            img: "img/3.jpg",
            name: "Celling Lights",
            price: "$39.49",
        }, {
            id: 3,
            img: "img/4.jpg",
            name: "High Stand Chair",
            price: "$24.99",
        }, {
            id: 4,
            img: "img/5.jpg",
            name: "Dining Sofa with Tea-table",
            price: "$99.99",
        }, {
            id: 5,
            img: "img/6-1.jpg",
            name: "Bathroom Cloths Shelves",
            price: "$23",
        },
        {
            id: 6,
            img: "img/7.jpg",
            name: "Golden Lamp for Room",
            price: "$12.99",
        },
        {
            id: 7,
            img: "img/8.jpg",
            name: "White Cuddle Chair-Cusions",
            price: "$29.99",
        },
        
    ]
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
            <section>
                <Col xs={4} className="mx-auto choose-img">
                    <Row className="justify-content-center align-items-center">
                        <Col xs={3}>
                            <div className="w-100">
                                <a href="#"><img src="img/amazon.svg" className="w-100" /></a>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div className="w-100">
                                <a href="#"><img src="img/cnn.svg" className="w-100" /></a>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div className="w-100">
                                <a href="#"><img src="img/google.svg" className="w-100" /></a>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div className="w-100">
                                <a href="#"><img src="img/linkedin.svg" className="w-100" /></a>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div className="w-100">
                                <a href="#"><img src="img/netflix.svg" className="w-100" /></a>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div className="w-100">
                                <a href="#"><img src="img/jetblue.svg" className="w-100" /></a>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div className="w-100">
                                <a href="#"><img src="img/github.svg" className="w-100" /></a>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </section>
            <section className="light-bg padding100">
                <Container>
                    <Row>
                        <Col xs={12} md={6} lg={3} >
                            <CommonHeading title="Top Arrivals"></CommonHeading>
                            <p className="fs-18 pb-5">Compellingly cultivate synergistic infrastructures rather than fully tested opportunities. Synergistically evisculate web-enabled interfaces.</p>
                            <a href="#" className="arrivals-btn text-decoration-none px-3 py-2 me-2">Top Arrivals</a>
                            <a href="#" className="arrivals-btn text-decoration-none px-3 py-2">Popular</a>
                        </Col>
                        {productList.map((product, index) => {
                            return (
                                <ProductInfo key={`productdetail-${index}`} item={product}></ProductInfo>
                            )
                        })}
                    </Row>
                </Container>
            </section>
        </>
    );
}
export default Home;