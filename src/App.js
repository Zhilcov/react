import React from 'react';
import Statistics from './container/stats'
import {Route, Switch, Redirect }  from 'react-router-dom';
import Form from "./components/form";

class App extends React.Component {    
    render(){
      return (
                 <Switch>
                  <Route exact  path="/" component={Form}/> 
                  <Route  path="/stats" component={Statistics}/>
                  <Redirect to = "/"/>
                </Switch>
      )
    }
} 
export default App 