import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import GlobalStyle from './base-styles/globalStyle';
import Container from './components/Container';

class App extends Component {
	render() {
		return (
			<Fragment>
				<GlobalStyle />
				<Container>
					<Switch>
						<Route
							exact
							path="/"
							render={ props =>
								<h1 { ...props }>My Todos</h1>
							}
						/>
					</Switch>
				</Container>
			</Fragment>
		);
	}
}

export default hot( module )( App );
