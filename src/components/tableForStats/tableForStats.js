import React from 'react';
import Table from "react-bootstrap/Table"
class tableForStats extends React.Component{
    render(){
        console.log(this.props);
        
        return(
            <div className ="col col-md-12">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Тип фигуры</th>
                            <th>Процент от всей площади</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default tableForStats