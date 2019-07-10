import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';

import GlobalStyle from './base-styles/globalStyle';
import Container from './components/Container';
import TodoList from './components/TodoList';

class App extends Component {
	render() {
		return (
			<Fragment>
				<GlobalStyle />
				<Container>
					<TodoList />
				</Container>
			</Fragment>
		);
	}
}

export default hot( module )( App );
