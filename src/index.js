import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const saveState = (state) => {
    try {
       
        const serialisedState = JSON.stringify(state);

        window.localStorage.setItem('app_state', serialisedState);
    } catch (err) {
        console.log(err);
    }
};
const loadState = () => {
    try {
        
        const serialisedState = window.localStorage.getItem('app_state');

        if (!serialisedState) return undefined;

        return JSON.parse(serialisedState);
    } catch (err) {
        return undefined;
    }
};
const oldState = loadState();
const store = createStore(reducer,oldState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
store.subscribe(() => {
    saveState(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> , 
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
