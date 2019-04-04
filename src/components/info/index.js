import React from "react";
import FigureItem from "../FigureItem"


class Info extends React.Component {
    render(){       
        const {figures, actions} = this.props        
        return(
            <table id="grid" className="table">
            <thead className="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Площадь</th>
                <th scope="col">Фигура</th>
            </tr>
            </thead>
            <tbody>
             {    
                figures.map(figureItem => 
                <FigureItem key={figureItem.id} figure={figureItem} {...actions}/>
                )
             } 
            </tbody>
        </table>
        )
    }
}

  
export default Info