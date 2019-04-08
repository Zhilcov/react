import React from "react";
import FigureItem from "../FigureItem"
import './info.css';

class Info extends React.Component {
    
    constructor(props) {
        super(props);
        this. state = {            
            nomer: false,
            area: false,
            figure: false
        };
         this.handleChange = this.handleChange.bind(this);    
      }    

      handleChange(e){
          var id = e.target.id;
          if (e.target.tagName  === "I") {
              id = e.target.parentNode.id              
          }
          switch (id) {
              case "1":
              this.setState({nomer : !this.state.nomer})
                  break;
              case "2":
              this.setState({area : !this.state.area})  
                  break;      
              case "3":
              this.setState({figure : !this.state.figure})
                  break;   
              default:
                  break;
          }
      }

    render(){       
        const {figures, actions , value , lable, id} = this.props 
                                    console.log(this.props);
                                          
        return(
            <div className ="col col-md-12">
                    <h1 className ="info">Информация</h1>
                    <table id="grid" className="table">
                        <thead className="thead-light">
                        <tr>
                            <th id ="1" onClick = { () =>{
                                actions.sort(id)
                            } } scope="col">#  {id ? <i class="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}</th>
                            <th id ="2" onClick = {() => {
                                actions.sortByValue(value )
                            }} scope="col">Площадь {value ? <i class="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}</th>
                            <th id ="3" onClick = { () => {
                                actions.sortByName(lable)
                            }} scope="col">Фигура {lable ? <i class="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>}</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
                        {    
                            figures.info.map(figureItem => 
                            <FigureItem key={figureItem.id} figure={figureItem} {...actions}/>
                            )
                        } 
                        </tbody>
                    </table>
            </div>
        )
    }
}

  
export default Info