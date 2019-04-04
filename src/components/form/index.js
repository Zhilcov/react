import React from "react";
import Input from "../../container/input";
import Info from "../../container/info";
import Stats from "../../container/stats";

class Form extends React.Component{
    render(){
        return (
           <div className="row">
            <Info className = "info" ></Info> 
            <Input className = "Input"></Input>   
            <Stats className = "Stats"/>
           </div>
        )
    }
}

export default Form