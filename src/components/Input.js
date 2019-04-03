import React from "react";
import Square from "./square"
import figures from "./figuresCatalog";
import Circle from "./circle"
import Rectangle from "./rectangle"
import Triangle from "./triangle"
class Input extends React.Component{
   
    state = {
        figure : undefined
    }

    setInput = (e) =>{
        this.setState({
            figure : e.target.value,
            
        })
    }

    addFigures =  (type, obj) =>{
        switch (type) {
            case "s":
            figures.push({value:obj.calcArea(), id : Date.now(), label :"square"});
                break;
            case "c":
            figures.push({value:obj.calcArea(), id : Date.now(), label :"circle"});
                break;
            case "r":
            figures.push({value:obj.calcArea(), id : Date.now(), label :"rectangle"});
                break;
            case "t":
            figures.push({value:obj.calcArea(), id : Date.now(), label :"triangle"});
                break;    
            default:
                break;
        }
       
        this.props.pushFigure();  
    }
    render(){
        
        var input;        
        switch (this.state.figure) {
            case "circle":input = <Circle addFigures={this.addFigures}></Circle>
            break;
            case "square":input = <Square addFigures={this.addFigures}></Square>        
            break;
            case "rectangle":input = <Rectangle addFigures={this.addFigures}></Rectangle>
            break;       
            case "triangle":input = <Triangle addFigures={this.addFigures}></Triangle>
                    break;                    
            default:
            input = "";
                break;
        }
        return (
                <div className="col col-md-4">
                    <h1>Ввод данных</h1>
                    <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" for="inputGroupSelect01">Фигуры</label>
                    </div>
                        <select defaultValue = "Выберите фигуру" name="figure" onChange = {this.setInput} className="custom-select" id="inputGroupSelect01">
                            <option disabled>Выберите фигуру</option>
                                <option value="circle">Круг</option>
                                <option value="square">Квадрат</option>
                                <option value="rectangle">Прямоугольник</option>
                                <option value="triangle">Треугольник</option>
                        </select>
                    {input}  
                    </div>
               </div>
        )
    }
}

export default Input