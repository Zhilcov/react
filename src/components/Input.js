import React, {lazy,Suspense } from 'react';
import {Route, Switch, Redirect, BrowserRouter as Router, Link}  from 'react-router-dom';
import {DropdownButton , Dropdown}  from "react-bootstrap" 
import Circle from './circle'
import Square from "./square"
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
        return (
            <Router>
                <div className="col col-md-12">
                   <div className="row input">
                        <div className="col col-md-5 offset-1">
                                <h1>Ввод данных</h1>
                                <DropdownButton id="dropdown-item-button" title="Выберите фигуру">
                                <Link to="/home/circle"><Dropdown.Item as="button">Круг</Dropdown.Item></Link>
                                <Link to="/home/square"><Dropdown.Item as="button">Квадрат</Dropdown.Item></Link>
                                <Link to="/home/rectangle"><Dropdown.Item as="button">Прямоугольник</Dropdown.Item></Link>
                                <Link to="/home/triangle"><Dropdown.Item as="button">Треугольник</Dropdown.Item></Link>
                                </DropdownButton>
                        </div>
                        <div className="col col-md-4">
                                <Route exact path="/home/circle" render={()=><Circle addFigures={addFigure}/>} />
                                <Route exact path="/home/square" render={()=><Square addFigures={addFigure}/>} />
                                <Route exact path="/home/rectangle" render={()=><Rectangle addFigures={addFigure}/>} />
                                <Route exact path="/home/triangle" render={()=><Triangle addFigures={addFigure}/>} />                      
                        </div>
                   </div>
                </div>
            </Router>
               
        )
    }
}

export default Input