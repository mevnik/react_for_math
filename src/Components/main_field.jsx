import React,{useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'



function MainField(props) {
  const[result,setResult] = useState(props.result)
  const [value, setValue] = useState('')  


  useEffect(() => {
    setValue('')
  },[props.level])

    const onClick = (e) => {
      props.onClick(result)
      handleClear(e)
    }

    const onChange = (e) => {


      setResult(e.target.value)
      setValue(e.target.value)

    }

    const handleClear = (e) =>  {
    e.preventDefault()
    setValue('')
  }
    

  return (
    <>
     <Container >
      <Row >
        <Col xs = {3} md={3}>
          <div className="border border-dark-subtle text-center d-block mt-2">{props.number1}</div>
        </Col>
        <Col xs = {1} md={1}>
          <div className="text-center mt-2 ">{props.sign}</div>

        </Col>
        <Col xs = {3} md={3}>
          <div className="border border-dark-subtle text-center mt-2">{props.number2}</div>

        </Col>
        <Col xs = {1} md={1}>
          <div className=" text-center mt-2">=</div>

        </Col>
        <Col xs = {4} md={4}>

          <div className="mb-3 text-center last" >

            <input type="text" className="border border-dark-subtle text-center mt-2"  id="InputResult" placeholder="Enter Result" 
             value = {value} onChange={onChange} autoComplete = "off"/>
          <Button variant="info" className="btn btn-primary mt-3 border border-dark rounded-pill" onClick = {onClick}>Submit</Button>

          </div>

        </Col>
      </Row>
    </Container>
</>
  )
}

export default MainField;
