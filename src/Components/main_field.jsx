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
      if(props.level === 12){

          let result_12
           const isTrue = (Number(props.number1[0])/Number(props.number1[2]) >= Number(props.number2[0])/Number(props.number2[2]))?true:false
           if((e.target.id === '1' && isTrue) || (e.target.id === '2' && !isTrue)) result_12 = true
           else result_12 = false
            props.onClick(result_12)
      }
      else{
            props.onClick(result)

      }

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
        {(props.level === 12)?
            <input className="border border-success text-center mt-2 cursor" type="text" value={props.number1} id="1" onClick = {onClick} readOnly/>
            :

          <div className="border border-dark-subtle text-center d-block mt-2" >{props.number1}</div>
        }
        </Col>
        <Col xs = {1} md={1}>
          {(props.level === 12)?
            <div className="text-center mt-2 "></div>

            :
            <div className="text-center mt-2 ">{props.sign}</div>
          }
        </Col>
        <Col xs = {3} md={3}>
          {(props.level === 12)?
            <input className="border border-success text-center mt-2 cursor" type="text" value={props.number2} id="2" onClick = {onClick} readOnly/>
            :

             <div className="border border-dark-subtle text-center d-block mt-2" >{props.number2}</div>
           }

        </Col>
        <Col xs = {1} md={1}>
          {(props.level === 12)?
            <div className="text-center mt-2 "></div>

            :
            <div className="text-center mt-2 ">=</div>
          }

        </Col>
        <Col xs = {4} md={4}>

          <div className="mb-3 text-center last" >
        {(props.level === 12)?
        <div className="border border-success bg-light text-dark mb-3 mt-2 text-center last" >

            <b>Choose the larger of two numbers</b>
          </div>

        :
          <>
            {
              (props.level === 11)?

                  <input type="text" className="border border-dark-subtle text-center mt-2"  id="InputResult" placeholder="Enter Result" 
                    value = {value} onChange={onChange} autoComplete = "off"/>
                    :
                    <input type="number" className="border border-dark-subtle text-center mt-2"  id="InputResult" placeholder="Enter Result" 
                      value = {value} onChange={onChange} autoComplete = "off"/>

            }
              <Button variant="info" className="btn btn-primary mt-3 border border-dark rounded-pill" onClick = {onClick}>Submit</Button>
          </>
        }
          </div>

        </Col>
      </Row>
      
    </Container>
</>
  )
}

export default MainField;
