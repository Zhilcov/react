import React from 'react';
import Figures from "../Figures";

class Rectangle extends React.Component{

    constructor(props) {
        super(props);
        
        this. state = {
            a: 0,
            b: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.addRec = this.addRec.bind(this);     
      }
    
     
      handleChange(event) {
          var id = event.target.id;
          if(id === "a"){
            this.setState({a: event.target.value});   
          }else{
            this.setState({b: event.target.value});   
          }
          
      }
      
      addRec() {
           var a = this.state.a; 
           var b = this.state.b;
           var obj;
           if (a <= 0 || b<= 0){
            alert("Cторона должна быть больше 0");
            }else{
                obj =  new Figures.Rectangle(+a,+b);
                this.props.addFigures("rectangle" , obj.calcArea()); 
            } 
      }
            
        
      render(){
          return(
            <div className="figure"><p>Введите координаты</p>
            <input className="form-control" type="number" id = "a" placeholder="Сторона a" onChange={this.handleChange}/>
            <input className="form-control" type="number" id = "b"  placeholder="Сторона b" onChange={this.handleChange}/>
            <button className="btn btn-success " onClick={ this.addRec}>Добавить</button>
            </div>
          )
      }
}

export default Rectangle