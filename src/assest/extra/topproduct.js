import { Col } from "react-bootstrap";

function Topproduct(props) {
    const { pro } = props;
    return (
        <Col xs={12} md={6} lg={4} className="position-relative p-3">
            <div className='w-100 shadow'>
                <img src={pro.img} className="w-100"></img>
                <h6 className="topproducttitle px-3 py-2 text-green fs-18 text-uppercase">{pro.name}</h6>
            </div>
        </Col>
    );
}
export default Topproduct;