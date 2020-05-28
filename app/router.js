import React from 'react';
import { HashRouter as Router,Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import route from './route.js';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSagas from './rootSagas';

console.log('得到的sagas===', rootSagas);
// 引入中间件saga
const sagaMiddleware = createSagaMiddleware()
// 创建store
let store = createStore(reducers, window.STATE_FROM_SERVER, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas);

class RouterDom extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <Router HashRouter={history}>
          <Switch>
            {renderRoutes(route)}
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default RouterDom;
