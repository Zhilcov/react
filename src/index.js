import React , {Suspense} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Statistics from './container/stats'
import { createBrowserHistory } from 'history';
import {Route, Switch, Redirect, Router }  from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const history = syncHistoryWithStore(createBrowserHistory(), store);
ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
              <Suspense fallback = {<h2> loading...</h2>}>
                <Switch>
                  <Route exact path="/" component={App}/> 
                  <Route  path="/stats" component={Statistics}/> 
                  <Route path = "/piw"  render={()=><input/>}/>
                  <Redirect to = "/"></Redirect>
                </Switch>
             </Suspense>
          </Router>
    </Provider> , 
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
