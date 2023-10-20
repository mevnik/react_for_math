import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'



function MainField3(props) {

    const handleClear = (e) =>  {
    e.preventDefault()
  }

  const onClick = (e) => {
    handleClear(e)
    let result
     const isTrue = (Number(props.number1[0])/Number(props.number1[2]) >= Number(props.number2[0])/Number(props.number2[2]))?true:false
     if((e.target.id === '1' && isTrue) || (e.target.id === '2' && !isTrue)) result = true
     else result = false
      props.onClick(result)
  }
    

  return (

    <>
     <Container >
      <Row >
        <Col xs = {3} md={3}>
          <div className="mb-3 text-center last" >


            <input className="border border-success text-center mt-2 cursor" type="text" value={props.number1} id="1" onClick = {onClick} readOnly/>

          </div>
        </Col>
        <Col xs = {1} md={1}>
          <div className="text-center mt-2 ">
            <div className="text-center mt-2 ">or</div>
          </div>

        </Col>
        <Col xs = {3} md={3}>
          <div className="mb-3 text-center last" >


            <input className="border border-dark-subtle text-center mt-2 cursor" type="text" value={props.number2} id="2" onClick = {onClick} readOnly/>

          </div>

        </Col>
        <Col xs = {1} md={1}>
          <div className=" text-center mt-2"></div>

        </Col>
        <Col xs = {4} md={4}>

          <div className="border border-success bg-light text-dark mb-3 mt-2 text-center last" >

            <b>Choose what number is more</b>
          </div>

        </Col>
      </Row>
    </Container>
</>
    
  )
}

export default MainField3;
