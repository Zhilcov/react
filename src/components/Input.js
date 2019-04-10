import React from 'react';
import {Route, BrowserRouter as Router, Link}  from 'react-router-dom';
import {DropdownButton , Dropdown}  from "react-bootstrap" 
import Circle from './circle'
import Square from "./square"
import Rectangle from "./rectangle"
import Triangle from "./triangle"
import "./input.css"
import Info from "../container/info";



class Input extends React.Component{    
    
    render(){
        const {addFigure , editFigure} = this.props                    
        return (
            <Router>
                <div className="col col-md-12">
                   <div className="row input">
                        <div className="col col-md-5 offset-1">
                            <h1>Ввод данных</h1>
                            <DropdownButton id="dropdown-item-button" title="Выберите фигуру">
                                <Link to='/circle'><Dropdown.Item as="button">Круг</Dropdown.Item></Link>
                                <Link to="/square"><Dropdown.Item as="button">Квадрат</Dropdown.Item></Link>
                                <Link to="/rectangle"><Dropdown.Item as="button">Прямоугольник</Dropdown.Item></Link>
                                <Link to="/triangle"><Dropdown.Item as="button">Треугольник</Dropdown.Item></Link>
                            </DropdownButton>
                        </div>
                        <div className="col col-md-4">
                            <Route path="/circle" render={(props)=>
                                <Circle 
                                addFigures={addFigure}
                                editFigures = {editFigure} 
                                {...props}/>} />

                            <Route path="/square" render={(props)=>
                                <Square 
                                addFigures={addFigure}
                                editFigures = {editFigure} 
                                {...props}/>} />
                                
                            <Route  path="/rectangle" render={(props)=>
                                <Rectangle
                                addFigures={addFigure}
                                editFigures = {editFigure}  
                                {...props}/>} />

                            <Route path="/triangle" render={(props)=>
                                <Triangle 
                                addFigures={addFigure}
                                editFigures = {editFigure} 
                                {...props}/>} />           
                        </div>
                   </div>
                </div>
                <Info/>
            </Router>
        )
    }
}

export default Input