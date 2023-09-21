
import React,{useState,useEffect} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/header'
import MainField from './Components/main_field'
import Intraduction from './Components/intraduction'
import {first_number_Chloe,second_number_Chloe,sign_Chloe,right_res} from './assets/NewChildLibrary'



function App() {
const [number1,setNumber1] = useState(() => {return first_number_Chloe()})
const [number2,setNumber2] = useState(() => {return second_number_Chloe()})
const [result,setResult] = useState('')
const [sign,setSign] = useState(() => {return sign_Chloe()})
const [isRightResult,setIsRightResult] = useState(false)
const [showResult,setShowResult] = useState(false)
const [quantity,setQuantity] = useState(0)
const [rightQuantity,setRightQuantity] = useState(0)

const onClick = (result) => {
  setResult(result)
  setIsRightResult(right_res(number1,number2,sign,Number(result)))
  setShowResult(true)
  setQuantity((prev) => {return prev+1})
  console.log(isRightResult.toString())
}
useEffect(() => {
//console.log('render')
  if(isRightResult) {
    setNumber1(first_number_Chloe())
    setNumber2(second_number_Chloe())
    setRightQuantity((prev) => {return prev+1})
    setSign(sign_Chloe())
  }
},[quantity,isRightResult])

  return (
    <>
    <Header/>
     <Container>
      <Intraduction isRightResult = {isRightResult} showResult = {showResult} quantity = {quantity} rightQuantity = {rightQuantity}/>
      <Row>
        <Col>
          <MainField number1 = {number1} number2 = {number2} number3 = {3} sign = {sign} onClick = {onClick}/>
          <p>{quantity}</p>
          <p>{result}</p>
        </Col>
      </Row>
    </Container>
</>
  )
}

export default App;
