import React from "react"

import { Link } from 'react-router-dom';
import {Form, Button,InputGroup } from "react-bootstrap"


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { validated: false };
    }
    
    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        this.setState({ validated: true });
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
                    <Form.Group  md="4" controlId="validationCustom01">
                        <Form.Label>Имя пользователя</Form.Label>
                        <Form.Control
                        required
                        type="text"
                        placeholder="Имя пользователя"
                        defaultValue=""
                        />
                        <Form.Control.Feedback>Подходит</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group  md="4" controlId="validationCustom02">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control
                        required
                        type="password"
                        placeholder="Пароль"
                        defaultValue=""
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