import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Color1, Color2} from '../config.js'



function Squeres(props) {

const [choosen, setChoosen] = useState(new Set())
const [clickRow, setClickRow] = useState(new Set())
const [clickCol, setClickCol] = useState(new Set())

const onSubmit = (e) => {
  let count = 0
  choosen.forEach((item) => {
    count++
  }
    )

    e.preventDefault()
    let indxSlash = props.proportion.indexOf('/')
      let numerator = props.proportion.slice(0,indxSlash)
      let denumirator = props.proportion.slice(indxSlash + 1)

    if(count/(props.inters.length*props.inters[0].length) === Number(numerator)/Number(denumirator))
      { 
       const tg =   document.getElementsByTagName("tr")
      for(let i = 0;i < tg.length; i++) {tg[i].style.backgroundColor = Color2}
       const td =   document.getElementsByTagName("td")
      for(let i = 0;i < td.length; i++) {td[i].style.backgroundColor = Color2}


      setChoosen(new Set())
      props.onSubmit(true)
      setClickRow(new Set())
      setClickCol(new Set())

    }

    else props.onSubmit(false)

      }

const Count = (e) => {
  const indexCel = e.target.id

  if(e.target.style.backgroundColor !== Color1){

    e.target.style.backgroundColor = Color1 //меняем цвет

    let tmp1 = choosen // добавляем в set выбранных
    tmp1.add(indexCel)
    setChoosen(tmp1)
    console.log('size after + click='+choosen.size)

    }
  else {
    e.target.style.backgroundColor = Color2 //возвращаем цвет
    let tmp2 = choosen // удаляем из set-а выбранных
    tmp2.delete(indexCel)
    setChoosen(tmp2)
    console.log('size after - click='+choosen.size)
     
  }
  
}

const changeRowColor =(e) => {
  
  const IdRow = e.target.id
  const indxSlash = IdRow.indexOf('/')
  const indxRow = IdRow.slice(0,indxSlash)
  const indexRow = 'row/' + indxRow
  const rowLength = IdRow.slice(indxSlash + 1)
    console.log('clickRow'+clickRow)

    let tmp = choosen // заполняем массив выбранных
    tmp.forEach((item) => {
    console.log('choosen'+item)

    })
    let tempClickRow = clickRow

if(!tempClickRow.has(indexRow)){

  for(let i = 0; i < rowLength; i++){
      let indexCel = indxRow.toString() + '/' + i.toString()
      let el = document.getElementById(indexCel)
      el.style.backgroundColor = Color1 //меняем цвет всех ячеек ряда
      tmp.add(indexCel)

       }
       tempClickRow.add(indexRow)

    setClickRow(tempClickRow)
    }
else {

  for(let i = 0; i < rowLength; i++){
      let indexCel = indxRow.toString() + '/' + i.toString()
      let el = document.getElementById(indexCel)
        el.style.backgroundColor = Color2 //меняем цвет всех ячеек ряда
        tmp.delete(indexCel)

       }
       tempClickRow.delete(indexRow)

        setClickRow(tempClickRow)

       }
    setChoosen(tmp)
    console.log('size after + row='+choosen.size)

}


const changeColumnColor =(e) => {
  
  const IdCol = e.target.id
  const indxSlash = IdCol.indexOf('/')
  const indxCol = IdCol.slice(0,indxSlash)
  const indexCol = 'col/' + indxCol
  const colLength = IdCol.slice(indxSlash + 1)
    console.log('clickCol='+clickCol)
    console.log('colLength'+IdCol)

    let tmp = choosen // заполняем массив выбранных
    tmp.forEach((item) => {
    console.log('choosen'+item)

    })

    let tempClickCol = clickCol


if(!tempClickCol.has(indexCol)){

  for(let i = 0; i < colLength; i++){
      let indexCel = i.toString() + '/' + indxCol.toString()
    console.log('indexCel'+indexCel)

      let el = document.getElementById(indexCel)
      el.style.backgroundColor = Color1 //меняем цвет всех ячеек ряда
      tmp.add(indexCel)

       }
       tempClickCol.add(indexCol)

        setClickCol(tempClickCol)
    }
else {

  for(let i = 0; i < colLength; i++){
      let indexCel = i.toString() + '/' + indxCol.toString()
      let el = document.getElementById(indexCel)
        el.style.backgroundColor = Color2 //меняем цвет всех ячеек ряда
        tmp.delete(indexCel)

       }

       tempClickCol.delete(indexCol)

        setClickCol(tempClickCol)


       }
    setChoosen(tmp)
    console.log('size after + row='+choosen.size)

}


  return (
     <Container  className = "mb-3 p-2">

     <div>
      Choose random squares so that their total area is equal to {props.proportion} of the area of the large figure. You can choose
      full row or full column by buttons on right and at the bottom
     </div>
          
        <Container className = "mb-3 mt-5  p-2 ">
        
   
          <Row>

            <Col className = " col-1 mt-2 mb-2 pb-5 pt-3 d-flex flex-row ">
              <Row className = " mt-3 mb-4 ">
                <Col className = "col-4 "></Col>
                <Col className = "col-4 d-flex flex-column justify-content-center ">
                      <div className ="mt-2 mb-2 " style={{  height: `${props.figureHeight*props.inters.length}`}}>{props.inters.length}m</div>
                  
                </Col>
                <Col className = "col-4 d-flex flex-column justify-content-center "></Col>
                
              </Row>

            </Col>

            <Col className = "col-10 d-flex flex-column justify-content-center mt-2 mb-2 ">
              <div className ="d-flex justify-content-center mt-1 mb-2 " >{props.inters[0].length}m</div>
              
              <table>
                  <tbody>

                  { 
                  (Array.isArray(props.inters))? 

                    props.inters.map((item,index) => {
                      //const length = props.inters.length
                      const indexRow = 'row/' + index 
                      const indexRowClean = index 

                      return(
                          <tr id = {indexRow} style = {{height: `${props.figureHeight}`}} key = {index} >

                              {item.map((itm,index) => {

                                  const indexCell = indexRowClean + '/' +index.toString()

                                return(
                                <td id = {indexCell}  key = {index} style={{  width: `${props.figureWidth}`, border: "1px solid #000", backgroundColor: `${props.color}`}} onClick = {Count}>
                                </td>
                                )
                                })}
                          </tr>
                              )
                          }
                        )
                    :
                      <tr style = {{backgroundColor: `${props.color}`}}>
                       <td></td>
                      </tr>


                  }
               
                  </tbody>
              </table>

                
                <table className = "mt-2">
                  <tbody>

                      <tr  style = {{height: "20px"}}>
                        { 
                            (Array.isArray(props.inters))? (

                            props.inters[0].map((item,index) => {
                              const lengthCol = props.inters.length
                              const indexCol = index + '/' + lengthCol 

                              return(
                                <td id = {indexCol} key = {index} className = "text-center" style={{height:"28 px", width: `${props.figureWidth}`, border: "1px solid #000", backgroundColor: `${props.color}`}} onClick = {changeColumnColor}>
                                  &#9650;
                                </td>
                                )
                               })

                             )
                  
                            :
                             <td></td>
                    
                        }
                      </tr>
               
                  </tbody>
                </table>


              <button className = "mt-3" onClick = {onSubmit}>Submit</button>

            </Col>

            <Col className = " col-1 mt-2 mb-2 pb-5 d-flex flex-column justify-content-center ">

              <table>
                <tbody>

                  { 
                  (Array.isArray(props.inters))? 

                    props.inters.map((item,index) => {
                      const lengthRow = props.inters[0].length
                      const q = index + '/' + lengthRow

                      return(
                          <tr style = {{height: `${props.figureHeight}`, backgroundColor:`${props.color}`}}
                            key = {index}>
                                <td id = {q} md = {item.length} key = {index} style={{  width: `${props.figureWidth}`, border: "1px solid #000", backgroundColor: `${props.color}`}} onClick = {changeRowColor}>
                                  &#9668;
                                </td>

                              </tr>
                          )}
                        )
                    :
                      <tr style = {{backgroundColor: `${props.color}`}}>
                        <td></td>
                      </tr>

                  }
               
               </tbody>
              </table>
            </Col>

            </Row>
          </Container>

      </Container>



  )
}

export default Squeres;
