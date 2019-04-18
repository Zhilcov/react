import React, { Component } from 'react';
import { Pie } from 'react-chartjs';
import TableForStats from "../tableForStats/tableForStats"
import "./stats.css"
import Header from "../../container/header"

class Stats extends Component {
    componentDidMount(){
        var reg = /^\/user/
        var path = window.location.pathname
        var name = path.substring(path.lastIndexOf("/")+1);        
        if(path.match(reg)){
            this.props.actions.getFigures(`http://localhost:3003/user/${name}`)
        }else{
            this.props.actions.getFigures(`http://localhost:3003/`)
        }  
    }
    render(){
        
        var squares = 0;
        var rectangle = 0;
        var circle = 0;
        var triangle = 0;
        const  {figures} = this.props        
        figures.forEach(obj => {                
            if (obj.label ==="square"){
                squares += obj.value;
            }
            if (obj.label ==="rectangle"){
                rectangle += obj.value;
            }  
            if (obj.label ==="circle"){
                circle += obj.value;
            } 
            if (obj.label ==="triangle"){
                triangle += obj.value;
            }      
          });   
          var reg = /^\/user/  
          var path = window.location.pathname
          var userStat = path.match(reg) ;
        return(
         <div className="container">
         { userStat ? " " :<Header/> }
                   
             <div className="col col-md-12 text-center">
                <h1>   { userStat ? "Ваша статистика" :"Статистика"}</h1>
                <div className="row">
                    <div className="col col-md-6">
                        <TableForStats  squares = {squares} 
                                        rectangle={rectangle} 
                                        circle={circle}
                                        triangle={triangle}>
                        </TableForStats>
                    </div>
                    <div className="col col-md-6">
                        <Pie 
                        data={[{value:squares,label:"squares"},
                                {value:rectangle,label:"rectangle"},
                                {value:circle,label:"circle"},
                                {value:triangle,label:"triangle"}]}
                        options={{
                            title:'cool pie chart',
                            text:"coolest data",
                            width:100,
                            height:100
                        }}
                        height={283} width={566}
                        />
                    </div>
                </div>
          </div>
         </div>
        );
    }
}

export default Stats