import React from "react";
import Input from "../../container/input";
import Info from "../../container/info";
import Header from "../header"

class Form extends React.Component{
    render(){
        return (
            <div className="container">   
            <Header></Header>  
           <div className="row">
           <Input className = "Input"></Input>
            <Info className = "info" ></Info> 
           {/*  <Stats className = "Stats"/> */}
           </div>
           </div>
        )
    }
}

export default Form