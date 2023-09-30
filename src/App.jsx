
import React,{useState,useEffect} from 'react';
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/header'
import MainField from './Components/main_field'
import Handler from './Components/handler'
import {Footer} from './Components/footer'
import Introduction from './Components/introduction'
import {right_res,getTask} from './assets/library'




function App() {

  const [level,setLevel] = useState(1)
  const [task,setTask] = useState(() => {return getTask(level)})
  const [isRightResult,setIsRightResult] = useState(false)
  const [showResult,setShowResult] = useState(false)
  const [quantity,setQuantity] = useState(0)
  const [rightQuantity,setRightQuantity] = useState(0)

useEffect(() => {

},[])



const onClick = (result) => {
  const whatResult = right_res(task[0],task[1],task[2],Number(result))
  setIsRightResult(whatResult)
  setShowResult(true)
  setQuantity((prev) => {return prev+1})
  if(whatResult) {
    setRightQuantity((prev) => {return prev+1})
  }
}

useEffect(() => {
  if(isRightResult) {
    setTask(() => {return getTask(level)})
  }
},[quantity,isRightResult,level])

useEffect(() => {
    setTask(() => {return getTask(level)})
    setRightQuantity(0)
    setQuantity(0)
    setShowResult(false)
},[level])

const upLevel = () => {
  setLevel((prev) => { 
    if (prev < 10){  
        return prev + 1
      }
      else return 1;
  })
}

const downLevel = () => {
  
    setLevel((prev) => {
      if (prev > 1){  
        return prev-1
      }
      else return 1;
    })

}

const chooseLevel = (level) => {
  setLevel(Number(level))
}

  return (
    <Container>
    <Header/>
     <Container>
      <Introduction upLevel = {upLevel} downLevel = {downLevel} level = {level} chooseLevel = {chooseLevel}/>
      <Handler isRightResult = {isRightResult} showResult = {showResult} quantity = {quantity} rightQuantity = {rightQuantity}/>
      <Row>
        <Col>
          <MainField number1 = {task[0]} number2 = {task[1]} number3 = {3} sign = {task[2]} onClick = {onClick} level = {level}/>
          <p></p>
        </Col>
      </Row>
      <Footer/>
    </Container>
</Container>
  )
}

export default App;
