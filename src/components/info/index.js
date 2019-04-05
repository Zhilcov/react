import React from "react";
import FigureItem from "../FigureItem"
import './info.css';

class Info extends React.Component {
    render(){       
        const {figures, actions} = this.props 
        console.log(figures);
               
        return(
            <div className ="col col-md-12">
                    <h1 className ="info">Информация</h1>
                    <table id="grid" className="table">
                        <thead className="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Площадь</th>
                            <th scope="col">Фигура</th>
                            <th scope="col"></th>
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
            </div>
        )
    }
}

  
export default Info