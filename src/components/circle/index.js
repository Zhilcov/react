import React from 'react';
import Figures from "../Figures";
import "./allFigures.css"
import {Form, Button } from "react-bootstrap"
import { Redirect}  from 'react-router-dom'
class Circle extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            a: 0,
            isValid:  "",
            redirectToNewPage: false,
            idd:0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fillInputs = this.fillInputs.bind(this);
      }
    
      handleChange(event) {
        var value = event.target.value
        this.setState({isValid:true})
        this.setState({a:value });
        if(+value > 0){
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
              this.props.addFigures(`http://localhost:3003/`,"circle" , obj.calcArea(), [a]);
            }else{
              let a = this.state.a; let obj ;
              obj = new Figures.Circle(a);
              this.props.editFigures(`http://localhost:3003/${id}`,obj.calcArea(),[a]);              
            }
            this.setState({ redirectToNewPage: true, a:"0" })
            
            if(id !== null){
               this.props.show(`http://localhost:3003/showRecycle/${id}`);
            }
            
        }
      }
      componentDidMount(){        
        this.setState({a:new URLSearchParams(this.props.location.search).get("a")});
      }
      componentWillUnmount(){
          if(this.state.idd !== null){
          this.props.show(`http://localhost:3003/showRecycle/${this.state.idd}`);
        }
      }
      fillInputs(){
        var a= new URLSearchParams(this.props.location.search).get("a")
        if(a){
          this.setState({a:a});
        }
      }
      render() {
        if (this.state.redirectToNewPage) {
            this.setState({ redirectToNewPage: false })
            this.setState({isValid: ""});
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
      if(id !== this.state.idd){
        this.setState({idd:id})
        
          this.props.show(`http://localhost:3003/showRecycle/${this.state.idd}`);
        
      }          
      return (
        <Form onSubmit={e => this.handleSubmit(e,id)} onMouseEnter={this.fillInputs}>
            <Form.Group  md="4">
              <Form.Label>Введите радиус</Form.Label>
              <Form.Control
                className ={classtext}
                required
                type="number"
                placeholder="Радиус"
                value = {this.state.a || ' '}
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
                    this.props.show(`http://localhost:3003/showRecycle/${id}`);
                    }}> 
                  Отмена 
                </Button>: " "  
          }

        </Form>
      )
    }
}

export default Circle