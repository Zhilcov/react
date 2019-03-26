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
            case "circle":input = <div className="figure"><p>Введите радиус</p>
                                <input className="form-control" type="number" placeholder="Радиус"/>
                                <button className="btn btn-success">Добавить</button>
                                </div>;
            break;
            case "square":input = <div className="figure"><p>Введите длину стороны</p>
                                 <input className="form-control" type="number" placeholder="Сторона a"/>
                                 <button className="btn btn-success">Добавить</button>
                                 </div>;
                                 
            break;
            case "rectangle":input = <div className="figure"><p>Введите координаты</p>
                                    <input className="form-control" type="number" placeholder="Сторона a"/>
                                    <input className="form-control" type="number" placeholder="Сторона b"/> <br/>
                                    <button className="btn btn-success">Добавить</button>
                                    {/* <input type="number"/><input type="number"/> */}
                                    </div>;
            break;       
            case "triangle":input = <div className="figure"><p>Введите длины сторон</p>
                                 <input className="form-control" type="number" placeholder="Сторона a"/>
                                    <input className="form-control" type="number" placeholder="Сторона b"/> <br/>
                                    <input className="form-control" type="number" placeholder="Сторона c"/> <br/>
                                    <button className="btn btn-success">Добавить</button>
                                    </div>;
                    break;                    
            default:
            input = "";
                break;
        }
        return (
                <div className="">
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