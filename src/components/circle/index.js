import React from 'react';
import Figures from "../Figures";
import "./allFigures.css"
import {Form, Button } from "react-bootstrap"
import { Redirect}  from 'react-router-dom'

class Circle extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            a: "",
            isValid:  "",
            redirectToNewPage: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.method = this.method.bind(this);
      }
    
      handleChange(event) {
        var value = event.target.value 
        this.setState({a:value });    
        if(+value > 0){
          this.setState({isValid:true})    
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
              this.props.addFigures("circle" , obj.calcArea(), [a]);
            }else{
              let a = this.state.a; let obj ;
              obj = new Figures.Circle(a);
              this.props.editFigures(id,obj.calcArea(),[a]);              
            }
            this.setState({ redirectToNewPage: true, a:"" })
            this.props.show();
        }
      }
      componentDidMount(){        
        this.setState({a:new URLSearchParams(this.props.location.search).get("a")});
      }
      method(){
        this.setState({a:new URLSearchParams(this.props.location.search).get("a")});
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
      /* var a = new URLSearchParams(this.props.location.search).get("a");
      console.log(a); */
      
      return (
        <Form onSubmit={e => this.handleSubmit(e,id)}>
            <button onClick={this.method}></button>
            <Form.Group  md="4">
              <Form.Label>Введите радиус</Form.Label>
              <Form.Control
                className ={classtext}
                required
                type="text"
                placeholder="Радиус"
               value = {this.state.a}
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
                    this.setState({ redirectToNewPage: true, a:"" })
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