import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './components/app';
import rootReducer from './reducers/reducers'
import {Provider} from 'react-redux'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));