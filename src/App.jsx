
import React,{useState,useEffect} from 'react';
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/header'
import MainField from './Components/main_field'
import MainField2 from './Components/main_field2_temp'
import Handler from './Components/handler'
import {Footer} from './Components/footer'
import Introduction from './Components/introduction'
import {right_res,getTask} from './assets/library'
import {Levels} from './assets/exercises'
import {Color2} from './config.js'




function App() {

  const [level,setLevel] = useState(13)
  const [task,setTask] = useState(() => {return getTask(level)})
  const [isRightResult,setIsRightResult] = useState(false)
  const [showResult,setShowResult] = useState(false)
  const [quantity,setQuantity] = useState(0)
  const [rightQuantity,setRightQuantity] = useState(0)
  const [color,setColor] = useState('')

  useEffect(() => {
  setColor(Color2)

  console.log('effectEFFECT')
  },[])

  const onSubmit = (result) => {
    if(result){
    setRightQuantity((prev) => {return prev+1})
}
    setIsRightResult(result)
    setShowResult(true)
    setQuantity((prev) => {return prev+1})

  }

  const onClick = (result) => {
  console.log('onClick')

    let whatResult;
    switch(level){
    case 11: {
      let indxSlash = result.indexOf('/')
      if(indxSlash === -1){
        whatResult = right_res(Number(task[0][0])/Number(task[0][2]),Number(task[1][0])/Number(task[1][2]),task[2],Number(result))
      }
      else{
        let numerator = result.slice(0,indxSlash)
        let denumirator = result.slice(indxSlash + 1)
        whatResult = right_res(Number(task[0][0])/Number(task[0][2]),Number(task[1][0])/Number(task[1][2]),task[2],Number(numerator)/Number(denumirator))
       }
      }
      break;

    case 12: whatResult = result
      break;

    default: whatResult = right_res(task[0],task[1],task[2],Number(result))
  }


  setIsRightResult(whatResult)
  setShowResult(true)
  setQuantity((prev) => {return prev+1})
  if(whatResult) {
    setRightQuantity((prev) => {return prev+1})
  }
}

useEffect(() => {
  console.log('EFFECT_OTHER= level'+level + 'quantity' + quantity + 'isRightResult' + isRightResult)

  if(isRightResult) {

    setTask(() => {return getTask(level)})
      setColor("#fffff9")

  }
},[quantity,isRightResult,level])

useEffect(() => {
  console.log('EFFECTlev='+level)

    setTask(() => {return getTask(level)})
    setRightQuantity(0)
    setQuantity(0)
    setShowResult(false)

},[level])

const upLevel = () => {

  setLevel((prev) => { 
   if (prev < Levels.length){  
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


// убрать пропс намбер3


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
        {
          (level === 13)?
          <>
          <MainField2  inters = {task[0]} figureHeight = {task[1]} figureWidth = {task[2]} onSubmit = {onSubmit} color = {color}  proportion = {task[3]}/>
          
          </>
          :
          <MainField number1 = {task[0]} number2 = {task[1]} sign = {task[2]} onClick = {onClick} level = {level}/>
        }
        </Col>
      </Row>
      <Footer/>
    </Container>
    
</Container>
  )
}

export default App;
