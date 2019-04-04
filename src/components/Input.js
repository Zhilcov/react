import React from "react";
import Square from "./square"
import Circle from "./circle"
import Rectangle from "./rectangle"
import Triangle from "./triangle"
class Input extends React.Component{
   
    state = {
        figure : undefined
    }

    setInput = (e) =>{
        this.setState({
            figure : e.target.value
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