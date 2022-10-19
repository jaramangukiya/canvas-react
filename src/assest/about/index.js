import { Col, Container, Row } from "react-bootstrap";
import CommonHeading from "../extra/common-heading";
import Deatils from "../extra/deatails";

function About() {
    return (
        <>
            <section className="about-bg text-center">
                <Col xs={8} className="mx-auto">
                    <p>KNOW MORE ABOUT US</p>
                    <CommonHeading title="Your Home is a Reflection  of Your Personality"></CommonHeading>
                </Col>
            </section>
            <section className="bg-skin rating">
                <Container className="py-5">
                    <Row>
                        <Deatils icon="fa-solid fa-circle-check" productTitle="Original & Excellent Quality" description="Completely formulate top-line resources rather than cross-media portals cross-platform solutions."></Deatils>
                        <Deatils icon="fa-solid fa-truck" productTitle="Free & Fast Shipping" description="Rapidiously optimize user-centric catalysts for change vis-a-vis granular 'outside the box' thinking."></Deatils>
                        <Deatils icon="fa-solid fa-shield-heart" productTitle="Secure Payment" description="Continually recaptiualize 2.0 action items after global information. Efficiently strategize holistic networks."></Deatils>
                    </Row>
                </Container>
             </section>
            <section className="overflow-hidden light-bg">
                <Row className="align-items-center">
                    <Col xs={12} lg={6}>
                        <div className="w-100">
                            <img src="img/sketch-design-interior-reception_256301-1654.jpg"></img>
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className="w-100 px-5">
                            <h2>Vission</h2>
                            <p>To be a successful and growing international design furniture brand.</p>
                            <p>Our quality, solutions and market approach supports innovative partnership,</p>
                            <p>trust and sustainability for our suppliers, customers and employees.</p>
                        </div>
                    </Col>
                </Row>
            </section>
            <section className="overflow-hidden light-bg">
                <Row className="align-items-center">
                    <Col xs={12} lg={6} className="p-0">
                        <div className="w-100 px-5 text-end">
                            <h2>Mission</h2>
                            <p>We want to contribute to Living in Harmony.</p>
                            <p>we make furniture for life and take Pride in our Danish roots and Craftmanship.</p>
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className="p-0">
                        <div className="w-100">
                            <img src="img/interior-with-window-3d-render_375133-1056.webp"></img>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    );
}
export default About;