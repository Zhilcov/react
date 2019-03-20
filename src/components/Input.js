import React from "react";

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
        var input;        
        switch (this.state.figure) {
            case "circle":input = <div className="figure"><p>Введите радиус</p><input type="number"/></div>;
            break;
            case "square":input = <div className="figure"><p>Введите длину стороны</p><input type="number"/></div>;
            break;
            case "rectangle":input = <div className="figure"><p>Введите координаты</p>
                                    <input type="number"/><input type="number"/> <br/>
                                    {/* <input type="number"/><input type="number"/> */}
                                    </div>;
            break;       
            case "triangle":input = <div className="figure"><p>Введите длины сторон</p>
                                    <input type="number"/> <br/>
                                    <input type="number"/> <br/>
                                    <input type="number"/> <br/>
                                    </div>;
                    break;                    
            default:
            input = "";
                break;
        }
        return (
                <div className="">
                    <p><select size="1" defaultValue = "Выберите фигуру" name="figure" onChange = {this.setInput} >
                    <option disabled>Выберите фигуру</option>
                    <option value="circle">Круг</option>
                    <option value="square">Квадрат</option>
                    <option value="rectangle">Прямоугольник</option>
                    <option value="triangle">Треугольник</option>
                </select></p>

               

                {input}

              </div>
        )
    }
}

export default Input