import React from "react";
import Input from "../Input";
import figures from "../figuresCatalog";
import Figures from "../Figures";
import Info from "../info";
import Stats from "../stats/";

class Form extends React.Component{

    state = {
        rerender : false
    }

    sort = () =>{
        sortGrid(1);
    
        function sortGrid(colNum) {
        var grid = document.getElementById('grid');
        var tbody = grid.getElementsByTagName('tbody')[0];
    
        
        var rowsArray = [].slice.call(tbody.rows);
    
        
        var compare  = function(rowA, rowB) {
            return rowB.cells[colNum].innerHTML - rowA.cells[colNum].innerHTML;
        }

        rowsArray.sort(compare);
        grid.removeChild(tbody);

        for (var i = 0; i < rowsArray.length; i++) {
            tbody.appendChild(rowsArray[i]);
        }
    
        grid.appendChild(tbody);
        }
    }

    pushCircle (){
        var r = +document.querySelector(".figure input").value;
        if (r>0){
            var c = new Figures.Circle(r);
            figures.push({value:c.calcArea(), id : Date.now(), label :"circle"});
        }else {
            alert("Радиус должен быть больше 0");
        }
       
    }

    pushSquare(){
        var a = +document.querySelector(".figure input").value;
        if (a>0){
            var s = new Figures.Figure(a);   
            figures.push({value:s.calcArea(), id : Date.now(), label :"square"});
        }else{
            alert("Cторона должна быть больше 0");
        }
    }

    pushRectangle(){
        var elemets = document.querySelectorAll(".figure input");
        if (+elemets[0].value <= 0 || +elemets[1].value<= 0){
            alert("Cторона должна быть больше 0");
        }else{
            var r = new Figures.Rectangle(+elemets[0].value,+elemets[1].value);
            figures.push({value:r.calcArea(), id : Date.now(), label :"rectangle"});
        }
        
    }

    pushTriangle(){
        var elemets = document.querySelectorAll(".figure input");
        var a = +elemets[0].value, 
            b = +elemets[1].value,
            c = +elemets[2].value;
        
            if (a <= 0 || b<= 0 || c<=0){
                alert("Cторона должна быть больше 0");
            }else{
                if (a + b > c && a + c > b && b + c > a){
                    var t = new Figures.Triangle(a,b,c);            
                    figures.push({value:t.calcArea(), id : Date.now(), label :"triangle"}); 
                }else alert("треугольник не существует");
            }        
    }

    pushFigure = (e) =>{
        
        e.preventDefault();
        var figure  = e.target.figure.value;
       
        
        
        switch (figure) {
            case "circle": this.pushCircle();
            break;
            case "square":this.pushSquare();
            break;
            case "rectangle": this.pushRectangle();
            break;       
            case "triangle": this.pushTriangle();
                    break;                    
            default:

                break;
        }
            
        this.setState({
            rerender :!this.state.rerender
        });
        
    }
    delRow= (e)=>{ 
        
        var a = window.confirm("Удалить?");
        if (a){
            var target = e.target.parentNode.parentNode;
            figures.splice(target.id,1);
            this.setState({ rerender: !this.state.rerender })
        }
        
    }
    componentDidMount(){
        this.sort();
    }
    componentDidUpdate(){
        this.sort();
    }
    render(){
              return (
           
           <div className="">
            <Info className ="col col-md-4" fig = {figures} delRow={this.delRow}></Info> 
         
            <form action="" onSubmit = {this.pushFigure} className="col col-md-4 ml-md-auto">
                
                <Input></Input>
                <button className="btn btn-success">Добавить</button>
            </form>
            <Stats fig = {figures}/>

            
           </div>
        )
    }
}

export default Form