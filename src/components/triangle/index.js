import React from 'react';
import Figures from "../Figures";
import {Form, Button } from "react-bootstrap"
import Alert from "../alert"
import { Redirect}  from 'react-router-dom';


class Triangle extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            a: "0",
            b: "0",
            c: "0",
            aIsValid: '',
            bIsValid: '',
            cIsValid: '',
            isSet : true,
            redirectToNewPage: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addClassTextToInput = this.addClassTextToInput.bind(this);
        this.fillInputs = this.fillInputs.bind(this);        
      }    
      
      handleChange(event) {
          var id = event.target.id;
          var valueA, valueB, valueC; 
          switch (id) {
            case "a":
              valueA = event.target.value
              this.setState({aIsValid:true})  
              this.setState({a: valueA});
              if(+valueA > 0) {
              } else {
                this.setState({aIsValid:false})
              }
              break;
            case "b":
              valueB = event.target.value
              this.setState({bIsValid:true}) 
              this.setState({b: valueB});
              if( +valueB > 0 ){
              }else {
                this.setState({bIsValid:false})
              }
              break;
            case "c":
              valueC = event.target.value
              this.setState({cIsValid:true}) 
              this.setState({c: valueC});
              if( +valueC > 0 ){
              }else {
                this.setState({cIsValid:false})
              }
              break;  
            default:
              break;
          }
      }
      
      handleSubmit(event,id) {
        event.preventDefault();
        event.stopPropagation();  
           var a = parseInt(this.state.a),
               b = parseInt(this.state.b),
               c = parseInt(this.state.c),  
               obj = new Figures.Triangle(+a,+b,+c);    
           if ((a < b+c) & (b < a+c) & (c < a+b)){
              if (id === null){
                this.props.addFigures(`http://localhost:3003/`, "triangle" , obj.calcArea(),[a,b,c]);
                this.setState({isSet:true});
              }else{
                this.props.editFigures(id , obj.calcArea(),[a,b,c]);
              }
              this.setState({ redirectToNewPage: true , a:"0",b:"0",c:"0" })
              this.props.show(); 
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
      componentDidMount(){
        var a= new URLSearchParams(this.props.location.search).get("a")
        if(a){
          a = a.split(",")
          this.setState({a:a[0],b:a[1],c:a[2]});
        }
      }
      fillInputs(){
        var a= new URLSearchParams(this.props.location.search).get("a")
        if(a){
          a = a.split(",")
          this.setState({a:a[0],b:a[1],c:a[2]});
        }
      }
      render(){
        if (this.state.redirectToNewPage) {
          this.setState({ redirectToNewPage: false })
          this.setState({aIsValid:  "",bIsValid:  "", cIsValid : ""});
          return (
            <Redirect to="/triangle"/>
            )
        }
        const { aIsValid,bIsValid,cIsValid } = this.state;
        var id = new URLSearchParams(this.props.location.search).get("id")           
        return (
          <Form onSubmit={e => this.handleSubmit(e,id)} onMouseEnter={this.fillInputs}
          >              
               
              <Form.Group  md="4">              
                {this.state.isSet ? " " : <Alert isset = {this.isset}> </Alert>}
                <Form.Label>Введите координаты</Form.Label>  
                  <Form.Control
                    className ={this.addClassTextToInput(aIsValid)}
                    required
                    type="number"
                    placeholder="Сторона a"
                    value = {this.state.a}
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
                    value = {this.state.b}
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
                    value = {this.state.c}
                    onChange = {this.handleChange}
                    id = "c"
                  />
                  <Form.Control.Feedback type = {cIsValid ? "valid" : "invalid"}>
                  {cIsValid ? "Данные корректны" : "Длинна стороны должна быть больше нуля"}
                  </Form.Control.Feedback>
                </Form.Group>                      
              
              <Button
                className = "btn btn-success" 
                type="submit" 
                disabled = {aIsValid && bIsValid && cIsValid ? false : true}>
                {id ?  "Изменить" : "Добавить"  }
              </Button>

              {id ? <Button className = "btn btn-danger" 
                        onClick = {()=>{
                          this.setState({ redirectToNewPage: true , a:"",b:"",c:"" })
                          this.props.show();
                          }}> 
                        Отмена 
                      </Button>: " "  
                }
          </Form>
        )
      }
}

export default Triangle