import React from "react"
import {Form,  Button, Alert,} from "react-bootstrap"
import "./index.css"

class UserName extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this);
    }
    handleTextChange(e){
        this.setState({username:e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        e.stopPropagation();
        
        this.props.changeUsername(localStorage.getItem("id"),this.state.username)

    }
    render(){     
        console.log(this.props.req);
           
        return(
            <div className="container username">
               <div className="row">
                <div className="col col-md-9 ">
                {this.props.req? 
                <Alert variant = "danger">
                    Это имя занято
                </Alert> : ""
                }
                <Form onSubmit = {this.handleSubmit}>
                <Form.Group className = "form change-username">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control
                        placeholder="Новое имя"
                        defaultValue = {localStorage.getItem("username")}
                        onChange = {this.handleTextChange}
                        />
                        <Button type="submit" >Изменить</Button>
                </Form.Group> 
                </Form>
                </div>
               </div>
            </div>
        )
    }
}

export default UserName 