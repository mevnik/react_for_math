
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Introduction(props) {

const Levels = [
  {id:1,text:"lev 1:  '-,+' < 10"},
  {id:2,text:"lev 2:  '-,+' < 100"},
  {id:3,text:'lev 3:  * < 100'},
  {id:4,text:'lev 4:  * < 700'},
  {id:5,text:'lev 5:  * < 1000'},
  {id:6,text:'lev 6:  / < 1000'},
  ]

const upLevel = (e) => {
  props.upLevel()
}

const downLevel = () => {
  props.downLevel()
}

const chooseLevel = (e) => {
  props.chooseLevel(Number(e.target.name))
}

  return (
     <Container className = "mb-3 border border-0 mt-2 bg-secondary-subtle p-2">
      <Row className = "mb-3 ">
        <Col xs={4} md={4} className = "intraduction_col">
          <div>
            <Button variant="success" onClick = {upLevel} className = "h-100">Up Level</Button>
          </div>
        </Col>
        <Col xs={4} md={4} className = "d-flex flex-column ">
        
          <div className="level">Level: {props.level}</div>
        
         <DropdownButton
            as={ButtonGroup}
            variant={'success'}
            size="sm"
            title={'Choose'}
          >
            <Dropdown.Item className="d-flex flex-column mb-3">
              {Levels.map((level) => (
        
            //<button key = {level.id} type="button" className="btn btn-info border border-dark mb-2 " onClick={chooseLevel} name = {level.id}>{<div className="d-flex flex-row fs-5"><p className="fs-6 bg-secondary-subtle border border-dark me-3 rounded-pill drop_level">{level.id}</p>{level.text}</div>}</button>
            <Button key = {level.id} variant={'outline-success'} as="input" type="button" value={level.text} onClick={chooseLevel} name = {level.id} className="mb-3"/>
            )
        )}
            </Dropdown.Item>

          </DropdownButton>

        </Col>
        <Col xs={4} md={4} className = "intraduction_col">
            <div>
              <Button variant="success" onClick = {downLevel} className = "h-100">Down Level</Button>
            </div>
        </Col>
      </Row>
      
    </Container>
  )
}

export default Introduction;
