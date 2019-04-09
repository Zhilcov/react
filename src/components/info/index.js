import React from "react";
import FigureItem from "../FigureItem"
import './info.css';

class Info extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            hideName: true,
            hideValue: true,
            hideId: false
        };
        this.handleChange = this.handleChange.bind(this);    
    }

    handleChange(e){
        var id = e.target.id;
        console.log(id);
        
        switch (id) {
            case "id":
                this.setState({hideName: true, hideValue: true, hideId : false});
                break;
            case "value":
                this.setState({hideName: true, hideId: true, hideValue:false});
                break;
            case "name":
                this.setState({hideValue: true, hideId: true,hideName :false});
                break;
            default:
                break;
        }
    }

    render(){       
        const {figures, actions , value , lable, id} = this.props 
                                                                           
        return(
            <div className ="col col-md-12">
                    <h1 className ="info">Информация</h1>
                    <table id="grid" className="table">
                        <thead className="thead-light">
                        <tr>
                            <th id ="id" onClick = { (e) =>{
                                this.handleChange(e)
                                actions.sort(id)
                            } } scope="col">#  {this.state.hideId ? " " :  id ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}</th>
                            <th id ="value" onClick = {(e) => {
                                this.handleChange(e)
                                actions.sortByValue(value )
                            }} scope="col">Площадь { this.state.hideValue ? " " :  value ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}</th>
                            <th id ="name" onClick = { (e) => {
                                this.handleChange(e)
                                actions.sortByName(lable)
                            }} scope="col">Фигура {this.state.hideName ? " " : lable ? <i className="fas fa-chevron-down"></i>  : <i className="fas fa-chevron-up"></i>}</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
                        {    
                            figures.info.map(figureItem => 
                            <FigureItem key={figureItem.id} figure={figureItem} {...actions}/>
                            )
                        } 
                        </tbody>
                    </table>
            </div>
        )
    }
}

  
export default Info