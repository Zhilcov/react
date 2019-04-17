import React from 'react';
import Statistics from './container/stats'
import {Switch, Redirect}  from 'react-router-dom';
import Form from "./components/form";
import PrivateRoute from "./components/privateRoute"
import LoginPage from "./container/login"
import Registraion from "./container/register"
import PrivateRouteForLogged from "./components/privateRouteForLogged"

class App extends React.Component {    
    render(){
      return (
        <div className="div">
            
                 <Switch>
                  <PrivateRoute exact  path="/" component={Form}/> 
                  <PrivateRoute  path="/stats" component={Statistics}/>
                  <PrivateRoute  path="/circle" component={Form}/>
                  <PrivateRoute  path="/square" component={Form}/>
                  <PrivateRoute  path="/rectangle" component={Form}/>
                  <PrivateRoute  path="/triangle" component={Form}/>
                  <PrivateRouteForLogged  path="/login" component={LoginPage}/>
                  <PrivateRouteForLogged  path="/registraion" component={Registraion}/>
                  <Redirect to = "/"/>
                </Switch>
        </div>
       
      )
    }
} 
export default App 