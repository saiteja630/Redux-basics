import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

import App from './App';

//import { moviesList } from './actions';

//moviesList();

const createStoreWithMiddleWare = applyMiddleware()(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleWare(reducers)}>
    <App/>
</Provider>
, document.getElementById('root'));

