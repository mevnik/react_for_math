
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import IMG_0001 from "../IMG_0001.jpg"
import Figure from 'react-bootstrap/Figure';

function Intraduction(props) {

  let info;
  if(props.showResult) { info = props.isRightResult? <b>👍</b> : <b>&#129397;</b>}
  else {info = <b>🤫</b> }
  return (
    <>
     <Container>
      <Row>
        <Col xs={6} md={4}>
          <div>place1</div>
        </Col>
        <Col xs={6} md={4}>
          <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={IMG_0001}
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>
        </Col>
        <Col xs={6} md={4}>
<div>place3</div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4} className=" text-center mb-4">
          <div className=" text-center">
            {props.quantity}
          </div>
        </Col>
        <Col xs={12} md={4} className=" text-center mb-4">
          <div className=" text-center">
            {info}
          </div>
        </Col>
        <Col xs={12} md={4} className=" text-center mb-4">
          <div className=" text-center">
            {props.rightQuantity}
          </div>
        </Col>
      </Row>
    </Container>
</>
  )
}

export default Intraduction;
