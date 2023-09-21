import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'



function MainField(props) {
  const[result,setResult] = useState(props.result)
  const [value, setValue] = useState('')  

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
     <Container>
      <Row>
        <Col  md={3}>
          <div className="border border-success text-center d-block mt-2">{props.number1}</div>
        </Col>
        <Col  md={1}>
          <div className="border border-success text-center mt-2">{props.sign}</div>

        </Col>
        <Col  md={3}>
          <div className="border border-success text-center mt-2">{props.number2}</div>

        </Col>
        <Col  md={1}>
          <div className="border border-success text-center mt-2">=</div>

        </Col>
        <Col md={4}>

          <div className="mb-3 text-center last" >
            <input type="text" className="border border-success text-center mt-2"  id="InputResult" placeholder="Enter Result" 
             value = {value} onChange={onChange}/>
          <button type="submit" className="btn btn-primary mt-2" onClick = {onClick}>Submit</button>
          </div>

        </Col>
      </Row>
    </Container>
</>
  )
}

export default MainField;
