import React from "react"

import { Link } from 'react-router-dom';
import {Form, Button,InputGroup } from "react-bootstrap"
import axios from "axios"

class RegistrationPage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { 
            validated: false,
            username:"",
            password:""            
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
      console.log(this.props);
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
        const form = event.currentTarget;
      
          event.preventDefault();
          event.stopPropagation();
      
        this.setState({ validated: true });
        this.props.register(this.state.username, this.state.password);
    }
    
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col col-md-4 offset-2">
                        <Form
                            noValidate
                            validated={this.state.validated}
                            onSubmit={e => this.handleSubmit(e)}
                        >
                    <Form.Group  md="4">
                        <Form.Label>Имя пользователя</Form.Label>
                        <Form.Control
                        required
                        type="text"
                        placeholder="Имя пользователя"
                        defaultValue=""
                        onChange = {this.handleChange}
                        id="a"
                        />
                        <Form.Control.Feedback>Подходит</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group  md="4">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control
                        required
                        type="password"
                        placeholder="Пароль"
                        defaultValue=""
                        onChange = {this.handleChange}
                        id="b"
                        />
                    </Form.Group>  
                     <Form.Group  md="4">
                        <Form.Label>Подтвердите пароль</Form.Label>
                        <Form.Control
                        required
                        type="password"
                        placeholder="Подтверждение пароля"
                        defaultValue=""
                        />                            
                    </Form.Group>
                    <Button type="submit">Регистрация</Button>
                    <Link to="/login" className="btn btn-link">Отмена</Link>
                </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegistrationPage