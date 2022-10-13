import { Button, Col, Container, Form, InputGroup, ListGroup, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';

function Layout(props) {
    return (
        <>
            <Navbar bg='light' expand='md' className='primary-font'>
                <Container>
                    <Navbar.Brand href='#'>
                        <img src='img/logo.png'></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='toggle' className='shadow-none' />
                    <Navbar.Collapse id='toggle'>
                        <Nav className="ms-auto">
                            <NavDropdown title="Home" id="home-dropdown">
                                <NavDropdown.Item href="#">Home 1</NavDropdown.Item>
                                <NavDropdown.Item href="#">Home 2</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">About Us</Nav.Link>
                            <Nav.Link href="#">Listing</Nav.Link>
                            <NavDropdown title="Deatils" id="deatil-dropdown">
                                <NavDropdown.Item href="#">Sofa</NavDropdown.Item>
                                <NavDropdown.Item href="#">Chairs</NavDropdown.Item>
                                <NavDropdown.Item href="#">Beds</NavDropdown.Item>
                                <NavDropdown.Item href="#">Wardores</NavDropdown.Item>
                                <NavDropdown.Item href="#">Tables</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">Deatils</Nav.Link>
                            <Nav.Link href="#">Contact</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {props.children}
            <Container className='padding100 contact text-uppercase'>
                <Row>
                    <Col xs={6} md={3} lg={2}>
                        <h4 className="text-capitalize">Social</h4>
                        <ListGroup as='ul'>
                            <ListGroup.Item className="border-0 px-0" as='li'>Facebook</ListGroup.Item>
                            <ListGroup.Item className="border-0 px-0" as='li'>instagram</ListGroup.Item>
                            <ListGroup.Item className="border-0 px-0" as='li'>twitter</ListGroup.Item>
                            <ListGroup.Item className="border-0 px-0" as='li'>youtube</ListGroup.Item>
                            <ListGroup.Item className="border-0 px-0" as='li'>whatsapp</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col xs={6} md={3} lg={2}>
                        <h4 className="text-capitalize">Support</h4>
                        <ListGroup as='ul'>
                            <ListGroup.Item className="border-0 px-0" as='li'>Home</ListGroup.Item>
                            <ListGroup.Item className="border-0 px-0" as='li'>About</ListGroup.Item>
                            <ListGroup.Item className="border-0 px-0" as='li'>Contact</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col xs={6} md={3} lg={2}>
                        <h4 className="text-capitalize">Trending</h4>
                        <ListGroup as='ul'>
                            <ListGroup.Item className="border-0 px-0" as='li'>Shop</ListGroup.Item>
                            <ListGroup.Item className="border-0 px-0" as='li'>Single</ListGroup.Item>
                            <ListGroup.Item className="border-0 px-0" as='li'>Who are we</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col xs={6} md={3} lg={2}>
                        <h4 className="text-capitalize">Get to Know us</h4>
                        <ListGroup as='ul'>
                            <ListGroup.Item className="border-0 px-0" as='li'>Niche Demoes</ListGroup.Item>
                            <ListGroup.Item className="border-0 px-0" as='li'>Home pages</ListGroup.Item>
                            <ListGroup.Item className="border-0 px-0" as='li'>One pages</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col xs={12} lg={4}>
                        <h4 className="text-capitalize">Subscribe</h4>
                        <p className="fs-16 text-muted text-lowercase">Subscirbe to Our Newsletter to get Important News, Amazing Offers & Inside Scoops:</p>
                        <InputGroup>
                            <Form.Control placeholder="Enter Your Email" />
                            <Button className="contact-btn">Subscribe</Button>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
            <div className="light-bg py-5">
                <Container className="text-muted">
                    <div className="d-flex justify-content-between">
                        <p className='m-0'>© 2020 All Rights Reserved by Canvas Inc.</p>
                        <ul className="d-flex footer-link m-0">
                            <li>Terms of Use</li>
                            <li> / </li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </Container>
            </div>
        </>
    );
}
export default Layout;
