import React from "react"
import {Form,  Button, Alert } from "react-bootstrap"
import "./index.css"
import moment from "moment/min/moment-with-locales"

class Password extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            change:false,
            password:"",
            newPassword:"",
            repeatedPass:""
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }
    handleClick(){
        this.setState({change:!this.state.change})
        this.props.goodRequestChangePassword(false,"")
        this.props.badRequestChangePassword(false,"")
    }
    componentDidUpdate(prevProps){
        if(this.props.changePass.bad !== prevProps.changePass.bad) {
            if(!this.props.changePass.bad){
                this.props.goodRequestChangePassword(true,"Пароль успешно изменен")
            }
        }
    }
    handleTextChange(e){
           var id =  e.target.id;
            switch (id) {
                case "password":
                    this.setState({password:e.target.value})
                    break;
                case "new-password":
                    this.setState({newPassword:e.target.value})
                    break;
                case "repeated":
                    this.setState({repeatedPass:e.target.value})
                    break;  
                default:
                    break;
            }
    }
    handleSubmit(e){
        e.preventDefault();
        e.stopPropagation();
        var {password,newPassword,repeatedPass} = this.state
        if(newPassword !== repeatedPass){
            this.props.badRequestChangePassword(true,"Пароли не совпадают")
        }else{
            this.props.changePassword(localStorage.getItem("id"),password,newPassword);
        }
    }
    render(){
        moment.locale('ru')
        var localDate = localStorage.getItem("lastChange");
        var time ;var from
        if(localDate === "0999-12-31T21:00:00.000Z"){
            from = "пароль не был изменен"
        }else{
            time = moment(localDate)
            from = "обновлён " + time.fromNow()
        }
        
        return(
            <div className="container change"  >
                    {!this.state.change ? 
                        <div className="prechange ">
                            <div className="row" onClick={this.handleClick}>
                                <div className="col col-md-4 text-center">
                                    Пароль
                                </div>
                                <div className="col col-md-6 text-center">
                                    {
                                       from 
                                    }
                                </div>
                                <div className="col col-md-2 text-center">
                                    <a className="change-button" onClick={this.handleClick}>Изменить</a> 
                                </div>
                            </div>
                        </div>
                        :
                        <div className="password-change">
                        {this.props.changePass.bad? 
                        <Alert variant="danger">
                             {this.props.changePass.message}
                        </Alert>:
                        ""
                        }
                         {this.props.changePass.good? 
                        <Alert variant="success">
                             {this.props.changePass.message}
                        </Alert>:
                        ""
                        }
                         
                        <div className="row">
                            <div className="col col-md-4 text-center">
                                <div className="passwordText">
                                    <p className="">Старый пароль</p> 
                                    <p className="">Новый пароль</p>
                                    <p className="">Повторите новый пароль</p>
                                </div>
                            </div>
                            <div className="col col-md-6 ">
                                <Form onSubmit = {this.handleSubmit}>
                                    <Form.Group  md="4">
                                        <Form.Control
                                        required
                                        type="password"
                                        onChange={this.handleTextChange}
                                        id="password"
                                        />
                                    </Form.Group> 
                                    <Form.Group  md="4">
                                        <Form.Control
                                        required
                                        type="password"
                                        onChange={this.handleTextChange}
                                        id="new-password"
                                        />
                                    </Form.Group> 
                                    <Form.Group  md="4">
                                        <Form.Control
                                        required
                                        type="password"
                                        onChange={this.handleTextChange}
                                        id="repeated"
                                        />
                                    </Form.Group>
                                    <Button
                                    type="submit"
                                    >
                                        Изменить пароль
                                    </Button>
                                </Form>   
                                                          
                            </div>
                            <div className="col col-md-2 text-center">
                                <a className="passwordText cancel-button" onClick={this.handleClick}>Отменить</a> 
                            </div>
                         </div>
                        </div>
                    }
            </div>
        )
    }
}

export default Password