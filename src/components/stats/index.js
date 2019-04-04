import React, { Component } from 'react';
import { Pie } from 'react-chartjs';

class Stats extends Component {
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
        return(
          <div className="col col-md-4 text-center">
                <h1>Статистика</h1>
                <Pie 
                    data={[{value:squares,label:"squares"},
                            {value:rectangle,label:"rectangle"},
                            {value:circle,label:"circle"},
                            {value:triangle,label:"triangle"}]}
                    options={{
                        title:'cool pie chart',
                        text:"coolest data"
                    }}
                    />
          </div>
        );
    }
}

export default Stats