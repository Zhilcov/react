import React from 'react';
import Figures from "../Figures";
import {Form, Button } from "react-bootstrap"
import Alert from "../alert"
class Triangle extends React.Component{

    constructor(props) {
        super(props);
        this. state = {
            a: 0,
            b: 0,
            c: 0,
            aIsValid: '',
            bIsValid: '',
            cIsValid: '',
            isSet : true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addClassTextToInput = this.addClassTextToInput.bind(this);        
      }    
     
      handleChange(event) {
          var id = event.target.id;
          var valueA, valueB, valueC; 
          switch (id) {
            case "a":
              valueA = event.target.value 
              if(+valueA > 0) {
                this.setState({a: valueA}); 
                this.setState({aIsValid:true})
              } else {
                this.setState({aIsValid:false})
              }
              break;
            case "b":
              valueB = event.target.value
              if( +valueB > 0 ){
                this.setState({b: valueB});
                this.setState({bIsValid:true})  
              }else {
                this.setState({bIsValid:false})
              }
              break;
            case "c":
              valueC = event.target.value
              if( +valueC > 0 ){
                this.setState({c: valueC});
                this.setState({cIsValid:true})  
              }else {
                this.setState({cIsValid:false})
              }
              break;  
            default:
              break;
          }
      }
      
      handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();  
           var a = parseInt(this.state.a),
               b = parseInt(this.state.b),
               c = parseInt(this.state.c)     
           if ((a < b+c) & (b < a+c) & (c < a+b)){
            var obj = new Figures.Triangle(+a,+b,+c);  
            this.props.addFigures("triangle" , obj.calcArea());
            this.setState({isSet:true});
           }else this.setState({isSet:false});
              
      }
      isset = (value) => {
        this.setState({ isSet: value })        
      }
      addClassTextToInput(isValid){
        var classtext
        if(typeof(isValid) === "boolean"){
          isValid ?  classtext = 'is-valid': classtext ='is-invalid'
          return classtext
        }else return " "
      }
      render(){
        const { aIsValid,bIsValid,cIsValid } = this.state;           
        return (
          <Form onSubmit={e => this.handleSubmit(e)}
          >              
               
              <Form.Group  md="4">              
                {this.state.isSet ? " " : <Alert isset = {this.isset}> </Alert>}
                <Form.Label>Введите координаты</Form.Label>  
                  <Form.Control
                    className ={this.addClassTextToInput(aIsValid)}
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
                    className ={this.addClassTextToInput(bIsValid)}
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
                <Form.Group  md="4">               
                  <Form.Control
                    className ={this.addClassTextToInput(cIsValid)}
                    required
                    type="number"
                    placeholder="Сторона c"
                    defaultValue = ""
                    onChange = {this.handleChange}
                    id = "c"
                  />
                  <Form.Control.Feedback type = {cIsValid ? "valid" : "invalid"}>
                  {cIsValid ? "Данные корректны" : "Длинна стороны должна быть больше нуля"}
                  </Form.Control.Feedback>
                </Form.Group>                      
              <Button type="submit" disabled = {aIsValid && bIsValid && cIsValid ? false : true}>Добавить</Button>
          </Form>
        )
      }
}

export default Triangle