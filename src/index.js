import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { BrowserRouter, withRouter } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import reducer from './store/reducers';
import App from './App';

// console.log( reducer )

const store = createStore( reducer, applyMiddleware( thunk, logger ) );
const Main = withRouter( props => <App { ...props } /> );
const root = document.getElementById( 'root' );

ReactDOM.render(
	<Provider store={ store }>
		<BrowserRouter>
			<Main />
		</BrowserRouter>
	</Provider>,
	root,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
