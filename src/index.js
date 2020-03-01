import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

const store=configureStore();


const Jsx= ()=>  <Provider store={store}>
    <App/>
  </Provider>
;
ReactDOM.render(<Jsx />, document.getElementById('root'));
registerServiceWorker();
