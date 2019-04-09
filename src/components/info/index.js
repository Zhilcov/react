import React from "react";
import FigureItem from "../FigureItem"
import './info.css';

class Info extends React.Component {
    
    constructor(props) {
        super(props);
      }

    render(){       
        const {figures, actions , value , lable, id} = this.props 
                                                                           
        return(
            <div className ="col col-md-12">
                    <h1 className ="info">Информация</h1>
                    <table id="grid" className="table">
                        <thead className="thead-light">
                        <tr>
                            <th id ="1" onClick = { () =>{
                                actions.sort(id)
                            } } scope="col">#  {id ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}</th>
                            <th id ="2" onClick = {() => {
                                actions.sortByValue(value )
                            }} scope="col">Площадь {value ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}</th>
                            <th id ="3" onClick = { () => {
                                actions.sortByName(lable)
                            }} scope="col">Фигура {lable ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}</th>
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