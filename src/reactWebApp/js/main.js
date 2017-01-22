import * as React from 'react';
import ReactDOM from 'react-dom';
/*redux added code */
import * as Redux from 'redux';
import { Provider, connect } from 'react-redux';

    
import {Main} from '../components/Main.jsx';

/*===================*/
const ActionTypes = {
    STARTED_UPDATING: 'STARTED_UPDATING',
    UPDATED: 'UPDATED'
};

class AsyncApi {
    static getFieldValue() {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(Math.floor(Math.random() * 100));
            }, 1000);
        });
        return promise;
    }
}

const reducer = (state = { field: 'No data', isWaiting: false }, action) => {
    switch (action.type) {
        case ActionTypes.STARTED_UPDATING:
            return Object.assign({}, state, {isWaiting: true});
        case ActionTypes.UPDATED:
            return Object.assign({}, state, {isWaiting: false, field: action.payload});
        default:
            return state;
    }
};
//const store = Redux.createStore(reducer);

/*===================*/




require('../../stylesheets/main.scss');

ReactDOM.render(
  //  <Provider store={store}>
    <Main/>
    //</Provider>
    ,
    document.getElementById('app')
  );