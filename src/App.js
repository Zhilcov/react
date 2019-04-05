
import React, {lazy, Suspense} from 'react';
import {Route, Switch, Redirect, }  from 'react-router-dom';

import {BrowserRouter as Router }  from 'react-router-dom';
const Form = lazy(() => import('./components/form/'));
const Statistics = lazy(() => import('./container/stats'));

class App extends React.Component {    
    render(){
      return (
         
          <Router>
            <Suspense fallback = {<h2> loading...</h2>}>
              <Switch>
                  <Route exact path="/" component={Form}/>
                  <Route exact path="/stats" component={Statistics}/>
                  <Redirect to="/" />
              </Switch>
             </Suspense>
          </Router>
           
      )
    }


}
export default App