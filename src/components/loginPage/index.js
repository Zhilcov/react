import React from "react"

import { Link } from 'react-router-dom';
import {Form, Button,Alert  } from "react-bootstrap"
import "./index.css"

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { 
            validated: " ",
            username:"",
            password:""    
        };
        this.handleChange = this.handleChange.bind(this);
        this.addClassTextToInput = this.addClassTextToInput.bind(this);
    }

    addClassTextToInput(isValid){
        var classtext
        if(typeof(isValid) === "boolean"){
          isValid ?  classtext = 'is-valid': classtext ='is-invalid'
          return classtext
        }else return " "
      }

    handleChange(event){
        var id = event.target.id;
        var valueA, valueB;
        if(id === "a"){
          valueA = event.target.value
          this.setState({username: valueA}); 
        }else{
          valueB = event.target.value
          this.setState({password: valueB}); 
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.login(this.state.username, this.state.password);
    }
    componentWillUnmount(){
        this.props.badRequestLogin(false);
    }
    render(){
        
        return(
            <div className="container">
                <div className="row login">
                    <div className="col col-md-4 offset-4">

                    { this.props.autoriz ? <Alert variant="danger"> Неверный логин или пароль </Alert> : " "}

                    <Form onSubmit={e => this.handleSubmit(e)}>
                        <Form.Group  md="4" >
                            <Form.Label>Имя пользователя</Form.Label>
                            <Form.Control
                            className ={this.props.autoriz ? "is-invalid" : " "}
                            required
                            type="text"
                            placeholder="Имя пользователя"
                            defaultValue=""
                            id="a"
                            onChange = {this.handleChange}
                            />
                            <Form.Control.Feedback>Подходит</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group  md="4" >
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control
                            className ={this.props.autoriz ? "is-invalid" : " "}
                            required
                            type="password"
                            placeholder="Пароль"
                            defaultValue=""
                            id="b"
                            onChange = {this.handleChange}
                            />
                            <Form.Control.Feedback>Подходит</Form.Control.Feedback>
                            
                        </Form.Group>
                        <Button type="submit">Вход</Button>
                    <Link to="/registraion" className="btn btn-link">Регистрация</Link>
                 </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage