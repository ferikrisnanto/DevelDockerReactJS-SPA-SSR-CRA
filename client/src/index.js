import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Main from "./Main";
import "./style.css";


ReactDOM.render(
	// <App />,
	<Main/>, 
	document.getElementById('root'));
registerServiceWorker();
