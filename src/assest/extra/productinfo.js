import { Col } from "react-bootstrap";

function ProductInfo(props) {
    const { item } = props;
    return (
        <Col xs={12} md={6} lg={3} className="px-2 py-3">
            <div className='w-100'>
                <img src={item.img} className="w-100"></img>
                <div className="d-flex justify-content-between mt-3 align-items-center">
                    <h6>{item.name}</h6>
                    <label>{item.price}</label>
                    <a href="#" className="text-green"><i className="fa-solid fa-cart-shopping"></i></a>
                </div>
            </div>
        </Col>
    );
}
export default ProductInfo;