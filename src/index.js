import React from 'react';
import ReactDOM from 'react-dom';
import { createStore }from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import reducer from './reducers'
import App from './compornents/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	<App />,
	document.getElementById('root'));
registerServiceWorker();
