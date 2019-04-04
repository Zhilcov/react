import React from 'react'


class FigureItem extends React.Component{
    render() {
        
        const { figure , deleteFigure } = this.props;     
      
        return (
            <tr>
                <th scope="row">{figure.id}</th>
                <td>{figure.value}</td>
                <td>{figure.label}</td>
                <td className = "deletttt" ><i className="fas fa-trash-alt"  onClick={() => {
                   var a =  window.confirm("Вы уверены что хотите удалить?");
                    if(a){
                        deleteFigure(figure.id)
                    }
                    }}></i></td>        
            </tr>
        );
    }
}
export default FigureItem