import React from 'react';
import Statistics from './container/stats'
import {Route, Switch, Redirect}  from 'react-router-dom';
import Form from "./components/form";
class App extends React.Component {    
    render(){
      return (
        <div className="div">
            
                 <Switch>
                  <Route exact  path="/" component={Form}/> 
                  <Route  path="/stats" component={Statistics}/>
                  <Route  path="/circle" component={Form}/>
                  <Route  path="/square" component={Form}/>
                  <Route  path="/rectangle" component={Form}/>
                  <Route  path="/triangle" component={Form}/>
                  <Redirect to = "/"/>
                </Switch>
        </div>
       
      )
    }
} 
export default App 