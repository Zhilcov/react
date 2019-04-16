import React from 'react';
import Statistics from './container/stats'
import {Route, Switch, Redirect}  from 'react-router-dom';
import Form from "./components/form";
import PrivateRoute from "./components/privateRoute"
import LoginPage from "./components/loginPage"
import Registraion from "./container/register"
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
                  <Route  path="/login" component={LoginPage}/>
                  <Route  path="/registraion" component={Registraion}/>
                  <Redirect to = "/"/>
                </Switch>
        </div>
       
      )
    }
} 
export default App 