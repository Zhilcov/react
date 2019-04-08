import React from 'react';
import Figures from "../Figures";
import {Form, InputGroup, Button } from "react-bootstrap"
class Rectangle extends React.Component{

    constructor(props) {
        super(props);
        
        this. state = {
            a: 0,
            b: 0,
            aIsValid: '',
            bIsValid: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);     
      }
    
     
      handleChange(event) {
          var id = event.target.id;
          var valueA, valueB;  
          if(id === "a"){
            valueA = event.target.value 
              if(+valueA > 0) {
                this.setState({a: valueA}); 
                this.setState({aIsValid:true})
              } else {
                this.setState({aIsValid:false})
              }
          }else{
            valueB = event.target.value
              if( +valueB > 0 ){
                this.setState({b: valueB});
                this.setState({bIsValid:true})  
              }else {
                this.setState({bIsValid:false})
              }
          }
      }
      
      handleSubmit(event) {
        const { aIsValid,bIsValid } = this.state;
            event.preventDefault();
            event.stopPropagation();        
            if(aIsValid && bIsValid){
              var a = this.state.a; 
              var b = this.state.b;
              var obj =  new Figures.Rectangle(a,b);
              this.props.addFigures("rectangle" , obj.calcArea()); 
            }
      }
            
        
      render(){
        const { aIsValid,bIsValid } = this.state;
        var classtextA = "",classtextB = "";
        if(typeof(aIsValid) === "boolean"){
          aIsValid ? classtextA = 'is-valid': classtextA ='is-invalid'
        }
        if(typeof(bIsValid) === "boolean"){
          bIsValid ? classtextB = 'is-valid': classtextB ='is-invalid'
        }       
        
        return (
          <Form onSubmit={e => this.handleSubmit(e)}
          >
              <Form.Group  md="4">
                <Form.Label>Введите координаты</Form.Label>
                <Form.Control
                  className ={classtextA}
                  required
                  type="number"
                  placeholder="Сторона a"
                  defaultValue = ""
                  onChange = {this.handleChange}
                  id = "a"
                />
                <Form.Control.Feedback type = {aIsValid ? "valid" : "invalid"}>
                {aIsValid ? "Данные корректны" : "Длинна стороны должна быть больше нуля"}
                </Form.Control.Feedback>
                </Form.Group> 
                <Form.Group  md="4">    
                <Form.Control
                  className ={classtextB}
                  required
                  type="number"
                  placeholder="Сторона b"
                  defaultValue = ""
                  onChange = {this.handleChange}
                  id = "b"
                />
                <Form.Control.Feedback type = {bIsValid ? "valid" : "invalid"}>
                {bIsValid ? "Данные корректны" : "Длинна стороны должна быть больше нуля"}
                </Form.Control.Feedback>
                </Form.Group> 
            <Button type="submit">Добавить</Button>
          </Form>
        )
      }
       
}

export default Rectangle