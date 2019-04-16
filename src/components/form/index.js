import React from 'react';
import Input from "../../container/input";

class Form extends React.Component {    
    render(){
        return(
            <div className="container">
                                
                <Input {...this.props}/>
            </div>
        )
    }
}
export default Form