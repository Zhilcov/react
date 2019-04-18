import React from "react"

import { Link } from 'react-router-dom';
import {Form, Button,Alert } from "react-bootstrap"

class RegistrationPage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { 
            matched: true,
            username:"",
            password:"",
            repeatedPass:""            
        };
        this.handleChange = this.handleChange.bind(this);
        this.checkMatchPassworp = this.checkMatchPassworp.bind(this);
    }
    componentDidMount(){
      console.log(this.props);
    }
    
    handleChange(event){
        var id = event.target.id;
        var value
        switch (id) {
            case "a":
                value = event.target.value
                this.setState({username: value}); 
            break;
            case "b":
                value = event.target.value
                this.setState({password: value}); 
            break;
            case "c":
                value = event.target.value
                this.setState({repeatedPass: value}); 
            break;

            default:
                break;
        }
    
    }

    checkMatchPassworp(){
        
    }

    handleSubmit(event) {         
        event.preventDefault();
        event.stopPropagation();
        if(this.state.password === this.state.repeatedPass){
            this.setState({matched:true})
            this.props.register(this.state.username, this.state.password)
        }else this.setState({matched:false})
    }
    componentWillUnmount(){
        this.props.badRequestLogin(false);
    }
    render(){
        return(
            <div className="container">
           
                <div className="row login">
                    <div className="col col-md-4 offset-4">
                    { this.props.autoriz ? <Alert variant="danger"> Пользователь уже сущесвтует </Alert> : " "}
                    {this.state.matched ?  "" :
                         <Alert variant="danger"> Пароли не совпадают </Alert> }
                        <Form
                            onSubmit={e => this.handleSubmit(e)}
                        >
                    <Form.Group  md="4">
                        <Form.Label>Имя пользователя</Form.Label>
                        <Form.Control
                        className ={this.props.autoriz ? "is-invalid" : " "}
                        required
                        type="text"
                        placeholder="Имя пользователя"
                        defaultValue=""
                        onChange = {this.handleChange}
                        id="a"
                        />
                      
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
                        onChange = {this.handleChange}
                        id = "c"
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