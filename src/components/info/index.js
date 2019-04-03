import React from "react";



class Info extends React.Component{
    
    round(params,sign) {
        return Math.round(params*sign)/sign;
    }
 
    render(){
        var elements = this.props.fig.map((figure, index) =>
        <tr key = {figure.id} id ={index}>
                 <th scope="row">{index+1}</th>
                <td>{figure.label}</td>
                <td>{this.round(+figure.value,100)}</td>
                <td className = "delet" ><i className="fas fa-trash-alt" onClick={(e) => { this.props.delRow(e)}}></i></td>        
        </tr> )

        return (
            
            <div className="col col-md-4">
                <h1>Информация</h1>
                <table id="grid" class="table">
                        <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Площадь</th>
                            <th scope="col">Фигура</th>
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