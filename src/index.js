import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Layout from './containers/Layout';
import Phones from './containers/Phones';
import './index.css';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Route exact path='/' component={Phones}/>
      </Layout>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
