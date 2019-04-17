import React from 'react';
import Input from "../../container/input";
import Header from "../../container/header"

class Form extends React.Component {    
    render(){
        return(
            <div className="container">
                <Header/>                
                <Input {...this.props}/>
            </div>
        )
    }
}
export default Form