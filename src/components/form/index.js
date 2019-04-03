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

    pushFigure (){
       
           
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
            <Info className = "info" fig = {figures} delRow={this.delRow}></Info> 
            <Input className = "Input" pushFigure = {()=> this.pushFigure()}></Input>   
            
            <Stats className = "Stats" fig = {figures}/>

            
           </div>
        )
    }
}

export default Form