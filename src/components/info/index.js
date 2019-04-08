import React from "react";
import FigureItem from "../FigureItem"
import './info.css';

class Info extends React.Component {
    render(){       
        const {figures, actions} = this.props 
                                       
        return(
            <div className ="col col-md-12">
                    <h1 className ="info">Информация</h1>
                    <table id="grid" className="table">
                        <thead className="thead-light">
                        <tr>
                            <th onClick = {actions.sort} scope="col">#</th>
                            <th onClick = {actions.sortByValue} scope="col">Площадь</th>
                            <th onClick = {actions.sortByName} scope="col">Фигура</th>
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