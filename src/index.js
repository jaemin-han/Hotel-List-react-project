import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();

// A great mindset to have when building React apps is to think in components. 
// Components represent the modularity and reusability of React. You can think of your component classes 
// as factories that produce instances of components. These component classes should follow the single 
// responsibility principle and just "do one thing". If it manages too many different tasks, it may be a 
// good idea to decompose your component into smaller subcomponents.

