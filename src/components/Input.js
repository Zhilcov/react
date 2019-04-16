import React from 'react';
import {Route,  Link}  from 'react-router-dom';
import {DropdownButton , Dropdown}  from "react-bootstrap" 
import Circle from './circle'
import Square from "./square"
import Rectangle from "./rectangle"
import Triangle from "./triangle"
import "./input.css"
import Info from "../container/info";

class Input extends React.Component{
    render(){
        const {addFigure , editFigure, showRecycle,routing } = this.props  
                     
        console.log(this.props);              
        return (
                <div className="col col-md-12">
                   <div className="row input">
                        <div className="col col-md-5 offset-1">
                            <h1>Ввод данных</h1>
                            <DropdownButton id="dropdown-item-button" title="Выберите фигуру">
                                <Link to='/circle'><Dropdown.Item onClick ={showRecycle} as="button">Круг</Dropdown.Item></Link>
                                <Link to="/square"><Dropdown.Item onClick ={showRecycle} as="button">Квадрат</Dropdown.Item></Link>
                                <Link to="/rectangle"><Dropdown.Item onClick ={showRecycle}  as="button">Прямоугольник</Dropdown.Item></Link>
                                <Link to="/triangle"><Dropdown.Item onClick ={showRecycle} as="button">Треугольник</Dropdown.Item></Link>
                            </DropdownButton>    
                        </div>
                        <div className="col col-md-4">
                            <Route path="/circle" render={(props)=>
                                <Circle 
                                addFigures={addFigure}
                                editFigures = {editFigure}
                                show = {showRecycle}
                                routing = {routing}
                                {...props}/>} />

                            <Route path="/square" render={(props)=>
                                <Square 
                                addFigures={addFigure}
                                editFigures = {editFigure}
                                show = {showRecycle}
                                {...props}/>} />
                                
                            <Route  path="/rectangle" render={(props)=>
                                <Rectangle
                                addFigures={addFigure}
                                editFigures = {editFigure}
                                show = {showRecycle}
                                {...props}/>} />

                            <Route path="/triangle" render={(props)=>
                                <Triangle 
                                addFigures={addFigure}
                                editFigures = {editFigure}
                                show = {showRecycle}
                                {...props}/>} />           
                        </div>
                   </div>
                   <Info/>
                </div>
                
           
        )
    }
}

export default Input