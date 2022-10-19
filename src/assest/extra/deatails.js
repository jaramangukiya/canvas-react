import { Col } from "react-bootstrap";

function Deatils(props) {
    return (
        <Col xs={12} md={6} lg={4} className="text-center choose-content ">
            <i className={props.icon}></i>
            <h3 className="my-4">{props.productTitle}</h3>
            <p>{props.description}</p>
        </Col>
    );
}
export default Deatils;