
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function Handler(props) {

  let info;
  if(props.showResult) { info = props.isRightResult? <b>👍</b> : <b>&#129397;</b>}
  else {info = <b>🤫</b> }
  return (
    <>
     <Container>
      
      <Row>
        <Col xs={4} md={4} className=" text-center mb-4">
          <div className=" text-center border border-dark rounded-pill fw-bold fs-2">
            {props.quantity}
          </div>
        </Col>
        <Col xs={4} md={4} className=" text-center mb-4">
          <div className=" text-center emoji">
            {info}
          </div>
        </Col>
        <Col xs={4} md={4} className=" text-center mb-4">
          <div className=" text-center border border-dark rounded-pill fw-bold fs-2 red_text">
            {props.rightQuantity}
          </div>
        </Col>
      </Row>
    </Container>
</>
  )
}

export default Handler;
