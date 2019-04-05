import React from "react";
import {DropdownButton , Dropdown}  from "react-bootstrap" 
import Square from "./square"
import Circle from "./circle"
import Rectangle from "./rectangle"
import Triangle from "./triangle"
import "./input.css"
class Input extends React.Component{
   
    state = {
        figure : undefined
    }

    setInput = (e) =>{
        this.setState({
            figure : e.target.id
        })
    }
    
    render(){
        const {addFigure} = this.props        
        var input;        
        switch (this.state.figure) {
            case "circle":input = <Circle addFigures={(text,value)=> addFigure(text,value)}></Circle>
                break;
            case "square":input = <Square addFigures={(text,value)=>addFigure(text,value)}></Square>        
                break;
            case "rectangle":input = <Rectangle addFigures={(text,value)=>addFigure(text,value)}></Rectangle>
                break;       
            case "triangle":input = <Triangle addFigures={(text,value)=>addFigure(text,value)}></Triangle>
                break;                    
            default:
            input = "";
                break;
        }
        return (
                <div className="col col-md-12">
                   <div className="row input">
                    <div className="col col-md-5 offset-1">
                            <h1>Ввод данных</h1>
                            <DropdownButton id="dropdown-item-button" title="Выберите фигуру">
                                <Dropdown.Item as="button" id ="circle" onClick = {this.setInput}>Круг</Dropdown.Item>
                                <Dropdown.Item as="button" id ="square" onClick = {this.setInput}>Квадрат</Dropdown.Item>
                                <Dropdown.Item as="button" id ="rectangle" onClick = {this.setInput}>Прямоугольник</Dropdown.Item>
                                <Dropdown.Item as="button" id ="triangle" onClick = {this.setInput}>Треугольник</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <div className="col col-md-4">{input}</div>
                   </div>
                </div>
               
        )
    }
}

export default Input