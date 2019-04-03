import React from 'react';
import Figures from "../Figures";

class Triangle extends React.Component{

    constructor(props) {
        super(props);
        this. state = {
            a: 0,
            b: 0,
            c: 0
        };
        this.handleChange = this.handleChange.bind(this);
  
        this.addTriangle = this.addTriangle.bind(this);
     
      }    
     
      handleChange(event) {
          var id = event.target.id;
          console.log(id);
          
          var id = event.target.id;
          if(id === "a"){
            this.setState({a: event.target.value});   
          }else if(id ==="b"){
            this.setState({b: event.target.value});   
          } else {
            this.setState({c: event.target.value}); 
          }

      }
      
      addTriangle() {
           var a = this.state.a; 
           var b = this.state.b;
           var c = this.state.c;
           var obj;     
            if (a <= 0 || b<= 0 || c<=0){
                alert("Cторона должна быть больше 0");
            }else{
                if (a + b >= c && a + c >= b && b + c >= a){
                    var obj = new Figures.Triangle(a,b,c);  
                    this.props.addFigures("t" , obj); 
                }else alert("треугольник не существует");
            }   
      }
            
        
      render(){
          return(
            <div className="figure"><p>Введите длины сторон</p>
               <input className="form-control" type="number" id ="a" placeholder="Сторона a"  onChange={this.handleChange}/>
               <input className="form-control" type="number" id ="b" placeholder="Сторона b"  onChange={this.handleChange}/> <br/>
               <input className="form-control" type="number" id ="c" placeholder="Сторона c"  onChange={this.handleChange}/> <br/>
               <button className="btn btn-success" onClick={ () => this.addTriangle() }>Добавить</button>
               
            </div>
          )
      }
}

export default Triangle