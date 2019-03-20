import React from "react";
import figures from "../figuresCatalog";



class Info extends React.Component{
    state = {
        rerender : true
    }

    round(params,sign) {
        return Math.round(params*sign)/sign;
    }
 
    render(){
        var elements = this.props.fig.map((figure, index) =>
        <tr key = {figure.id} id ={index}>
                <td>{figure.label}</td>
                <td>{this.round(+figure.value,100)}</td>
                <td className = "delet" ><i className="fas fa-trash-alt" onClick={(e) => { this.props.delRow(e)}}></i></td>        
        </tr> )

        return (
            <div className="col col-md-4">
               <table id="grid" >
                        <thead>
                        <tr>
                            <th >Фигура</th>
                            <th >Площадь</th>
                        </tr>
                        </thead>
                        <tbody>
                       
                        {elements}

                        </tbody>
                    </table>
               
            </div>
        )
    }
}


export default Info