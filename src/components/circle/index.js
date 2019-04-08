import React from 'react';
import Figures from "../Figures";
import "./allFigures.css"
import {Form, InputGroup, Button } from "react-bootstrap"

class Circle extends React.Component{

    constructor(props) {
        super(props);
        this. state = {
            a: 0,
            isValid:  ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        var value = event.target.value     
        if(+value > 0){
          this.setState({isValid:true})
          this.setState({a:value });     
        }else {
          this.setState({isValid:false})
        }
        
      }

      handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();        
        if(this.state.isValid === true){
          var a = this.state.a; var obj ;
          obj = new Figures.Circle(a);
          this.props.addFigures("circle" , obj.calcArea()); 
        }
      }

      render() {
      const { isValid } = this.state;
      var classtext = "";
      if(typeof(isValid) === "boolean"){
        isValid ? classtext = 'is-valid': classtext ='is-invalid'
      }      
      console.log(this.props);
      
      return (
        <Form onSubmit={e => this.handleSubmit(e)}
        >
            <Form.Group  md="4">
              <Form.Label>Введите радиус</Form.Label>
              <Form.Control
                className ={classtext}
                required
                type="number"
                placeholder="Радиус"
                defaultValue = ""
                onChange = {this.handleChange}
              />
              <Form.Control.Feedback>Данные корректны</Form.Control.Feedback>
              <Form.Control.Feedback type ="invalid">Радиус должен быть больше нуля</Form.Control.Feedback>
            </Form.Group>         
          <Button type="submit" disabled = {isValid ? false : true}>Добавить</Button>
        </Form>
      )
    }
}

export default Circle