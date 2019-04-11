import React from 'react';
import Figures from "../Figures";
import "./allFigures.css"
import {Form, Button } from "react-bootstrap"
import { Redirect}  from 'react-router-dom';
class Circle extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            a: 0,
            isValid:  "",
            redirectToNewPage: false
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

      handleSubmit(event,id) {
        event.preventDefault();
        event.stopPropagation();                
        if(this.state.isValid === true){
            if(id === null){
              let a = this.state.a; let obj ;
              obj = new Figures.Circle(a);
              this.props.addFigures("circle" , obj.calcArea()); 
              this.setState({ redirectToNewPage: true })
            }else{
              let a = this.state.a; let obj ;
              obj = new Figures.Circle(a);
              this.props.editFigures(id,obj.calcArea());
              this.setState({ redirectToNewPage: true })
            }
            this.props.show();
        }
      }

      
      render() {
        if (this.state.redirectToNewPage) {
          this.setState({ redirectToNewPage: false })
          this.setState({isValid:  ""});
          return (
            <Redirect to="/circle"/>
            )
        }
      const { isValid } = this.state;
      var classtext = "";
      if(typeof(isValid) === "boolean"){
        isValid ? classtext = 'is-valid': classtext ='is-invalid'
      }      

      var id = new URLSearchParams(this.props.location.search).get("id")
      return (
        <Form onSubmit={e => this.handleSubmit(e,id)}
        >
            <Form.Group  md="4">
              <Form.Label>Введите радиус</Form.Label>
              <Form.Control
                className ={classtext}
                required
                type="number"
                placeholder="Радиус"
                onChange = {this.handleChange}
              />
              <Form.Control.Feedback>Данные корректны</Form.Control.Feedback>
              <Form.Control.Feedback type ="invalid">Радиус должен быть больше нуля</Form.Control.Feedback>
            </Form.Group>  

          <Button type="submit"
          className = "btn btn-success" 
          disabled = {isValid ? false : true}>
          {id ?  "Изменить" : "Добавить"  }
          </Button>

          {id ? <Button className = "btn btn-danger" 
                  onClick = {()=>{
                    this.setState({ redirectToNewPage: true })
                    this.props.show();
                    }}> 
                  Отмена 
                </Button>: " "  
          }

        </Form>
      )
    }
}

export default Circle