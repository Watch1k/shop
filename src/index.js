import { MuiThemeProvider } from 'material-ui';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import {
  applyMiddleware,
  createStore
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Layout from './containers/layout/Layout';
import Phone from './containers/phone/Phone';
import './index.css';
import Phones from './containers/phones/Phones';
import { prepare } from './prepare';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

prepare();

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/phones/:id' component={Phone}/>
            <Route exact path='/'>
              <Layout><Phones/></Layout>
            </Route>
            <Route exact path='/categories/:id?/:id2?'>
              <Layout><p>categories</p></Layout>
            </Route>
            <Route render={() => <p>404 not available page.</p>}/>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>
  , document.getElementById('root'));

registerServiceWorker();
