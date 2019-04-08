import React, {lazy,Suspense } from 'react';
import {Route, Switch, Redirect, BrowserRouter as Router}  from 'react-router-dom';
import Form  from './components/form';
import Statistics from './container/stats';

class App extends React.Component {    
    render(){
      return (
          <Router>
              <Suspense fallback = {<h2> loading...</h2>}>
              <Switch>
                  <Route  path="/home" component={Form}/>
                  <Route exact path="/stats" component={Statistics}/>
                  <Redirect to="/home" />
                  </Switch>
             </Suspense>

          </Router>
      )
    }
} 
export default App 