import React from 'react';

class Item extends React.Component {
    render(){
        return(
            <tr>
                <td>{this.props.figure}</td>
                <td>{this.props.area}</td>
            </tr>
        )
    }
}
export default Item