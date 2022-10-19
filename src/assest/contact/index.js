import { Col, Ratio, Row } from "react-bootstrap";

function Contact() {
    return (
        <>
            <section className="bg-green overflow-hidden contact-map">
                <Row>
                    <Col xs={12} md={6}>
                        <div className="w-100">
                            <Ratio aspectRatio="1x1">

                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9555278.66220423!2d-13.430934935463041!3d54.218467501124685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2sin!4v1666023945396!5m2!1sen!2sin" className="w-100 overflow-hidden" height="100%" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                            </Ratio>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="w-100">
                            <div className="w-100  padding100">
                                <div className="common-content ms-5 ps-2">
                                    <h2 className="my-5">Our <span> Showrooms</span></h2>
                                </div>
                                <div className="row ms-5 contact-map-content text-white">
                                    <div className="col-12 col-md-6">
                                        <div className="w-100">
                                            <h4>San Fransisco</h4>
                                            <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CA 94107</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="w-100">
                                            <h4>Australia</h4>
                                            <p className="text-muted">62 Parkes Road,Melbourne, Victoria 3004</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="w-100">
                                            <h4>London</h4>
                                            <p className="text-muted">115 Guild Street, Suite 893London, EC3A3RN</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="w-100">
                                            <h4>New York</h4>
                                            <p className="text-muted">996 Geraldine Lane, New York NY, 10004</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="w-100">
                                            <h4>California</h4>
                                            <p className="text-muted">3122 Doctors Drive, Los Angeles California, 90017</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="w-100">
                                            <h4>Canada</h4>
                                            <p className="text-muted">305 Garrett Drive, OttawaCanada, 21907</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
            <section className="bg-skin overflow-hidden">
                <Row>
                    <Col xs={12} md={6} className="p-5">
                        <div className="w-100 p-5"></div>
                    </Col>
                    <Col xs={12} md={6}>
                        <img src="img/contact1.jpg" className="w-100"></img>
                    </Col>
                </Row>
            </section>
        </>
    );
}
export default Contact;