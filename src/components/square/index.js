import React from 'react';
import Figures from "../Figures";

class Square extends React.Component{

    constructor(props) {
        super(props);
        this. state = {
            a: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.addSquare = this.addSquare.bind(this);
      }
    
     
      handleChange(event) {
        this.setState({a: event.target.value});      
      }

     addSquare(event) {
           var a = this.state.a; var obj ;
        if (a>0){
          obj = new Figures.Figure(a);
        }else{
            alert("Cторона должна быть больше 0");
        } 
         this.props.addFigures("s" , obj); 
      }

      render(){
          return(
            <div className="figure"><p>Введите длину стороны</p>
            <form action="" className="">
                <input className="form-control" type="number" placeholder="Сторона a" onChange={this.handleChange}/>
            </form>
            <button className="btn btn-success " onClick={ (event) => this.addSquare(event) }>Добавить</button>
            </div>
          )
      }
}

export default Square