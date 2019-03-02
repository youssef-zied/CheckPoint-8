import React, { Component } from 'react'
import Example from './Example'
import Experience from './Experience';
import ITExp from './ITexp';
import CV from './CV';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class UserForm extends Component {

    state = {
      ButtonNumber:[0,1,2,3,4,5,6,7,8,9],
      ButtonNumberExp:[],
      ButtonActive:null,
      selectedNumber:null
    }

  render() {
    const {selectedNumber} = this.state;
    //this.state.ButtonNumberExp = this.state.ButtonNumber.map(number=>number*number)
    const ButtonFinal=this.state.ButtonNumber.map((number)=>
      <div style={{margin:10}}>
        <Button
          type="button" 
          className="btn btn-secondary btn-block"
          style={{margin:10, padding:10}}
          onClick={()=>{this.setState({ButtonActive:true, selectedNumber:number})}}
          >{number}
        </Button>
        
      </div>
    )
    return (
    <div className='row' style={{margin:10}}>
      {ButtonFinal}
      {this.state.ButtonActive && 
        <h1>The factorial of {selectedNumber} is {Math.pow(selectedNumber,2)} </h1>}
    </div>
    )
  }
}

export default UserForm
