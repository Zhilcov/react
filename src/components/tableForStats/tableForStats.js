import React from 'react';
import Table from "react-bootstrap/Table"
import Item from "../itemForStat/item"
class tableForStats extends React.Component{
    
    caclPercent(allArea, figure) {
        var precent = 100 * figure / allArea 
        return ( Math.round(precent * 100) / 100 )
    }

    render(){
            var {squares, rectangle, circle, triangle} = this.props 
            var figures = this.props            
            var allArea=0;
            for (var key in figures) {
                allArea += figures[key];
            }
            
        return(
            <div className ="col col-md-12">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Тип фигуры</th>
                            <th>Процент от всей площади</th>
                        </tr>
                    </thead>
                    <tbody>
                    <Item key={1} figure = "squares"  area = {this.caclPercent(allArea,squares)}/>
                    <Item key={2} figure = "rectangle" area = {this.caclPercent(allArea,rectangle)}/>
                    <Item key={3} figure = "circle" area = {this.caclPercent(allArea,circle)}/>
                    <Item key={4} figure = "triangle" area = {this.caclPercent(allArea,triangle)}/>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default tableForStats