import React from 'react';
import Figures from "../Figures";
import {Form,  Button } from "react-bootstrap"
import { Redirect}  from 'react-router-dom';
class Square extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            a: "0",
            isValid:' ',
            redirectToNewPage: false
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
        var a = this.state.a; 
        var obj = new Figures.Figure(a);        
        if(this.state.isValid === true){
          if(id === null){
            this.props.addFigures(`http://localhost:3003/` , "square" , obj.calcArea(),[a]);
          }else{
            this.props.editFigures(`http://localhost:3003/${id}`, obj.calcArea(),[a]);
          }
          this.setState({ redirectToNewPage: true,a:"0" })
          this.props.show();
        }
      }
      componentDidMount() {
          this.setState({a:new URLSearchParams(this.props.location.search).get("a")})
      }
      fillInputs(){
        this.setState({a:new URLSearchParams(this.props.location.search).get("a")});
      }
      render(){
        if (this.state.redirectToNewPage) {
          this.setState({ redirectToNewPage: false })
          this.setState({ isValid:  " "});
          return (
            <Redirect to="/square"/>
            )
        }
        const { isValid } = this.state;
        var classtext = "";
        if(typeof(isValid) === "boolean"){
          isValid ? classtext = 'is-valid': classtext ='is-invalid'
        }      
        var id = new URLSearchParams(this.props.location.search).get("id")
        return (
          <Form onSubmit={e => this.handleSubmit(e,id)} onMouseEnter={this.fillInputs}
          >
              <Form.Group  md="4">
                <Form.Label>Введите длинну стороны</Form.Label>
                <Form.Control
                  className ={classtext}
                  required
                  type="text"
                  placeholder="Сторона"
                  value = {this.state.a || " "}
                  onChange = {this.handleChange}
                />
                <Form.Control.Feedback>Данные корректны</Form.Control.Feedback>
                <Form.Control.Feedback type ="invalid">Радиус должен быть больше нуля</Form.Control.Feedback>
              </Form.Group>   

              <Button
                className = "btn btn-success" 
                type="submit" 
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

export default Square