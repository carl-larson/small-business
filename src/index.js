import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import Router from './router/Router';
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import store from './redux/store'
import * as serviceWorker from './serviceWorker';

const Main = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(<React.StrictMode><Main /></React.StrictMode>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
