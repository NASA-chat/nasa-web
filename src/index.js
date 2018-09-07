import React from 'react';
import ReactDOM from 'react-dom';
import './styles/const.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
