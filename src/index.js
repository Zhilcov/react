import React , {Suspense} from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import reducer from './reducers'
import './index.css';
import {Router}  from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';


const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
const history = syncHistoryWithStore(createBrowserHistory(), store);



ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
              <Suspense fallback = {<h2> loading...</h2>}>
                <App/>
             </Suspense>
      </Router>
    </Provider> , 
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
export default history