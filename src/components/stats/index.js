import React, { Component } from 'react';
import { Pie } from 'react-chartjs';
import TableForStats from "../tableForStats/tableForStats"

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
          <div className="col col-md-12 text-center">
                <h1>Статистика</h1>
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
                            text:"coolest data"
                        }}
                        />
                    </div>
                </div>
                
               
          </div>
        );
    }
}

export default Stats