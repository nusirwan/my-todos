import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const { colors } = theme;

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');

	body {
		margin: 0;
		border: 0;
		padding: 0;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background-color: ${ colors.dawnPink };
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
		font-family: 'Quicksand', sans-serif;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	p {
		margin: 0;
		padding: 0;
	}
`;
