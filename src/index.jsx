import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import rootReducer from './reducers';
import {UnitContainer} from "./containers/UnitContainer";

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
    <UnitContainer/>
    </Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

