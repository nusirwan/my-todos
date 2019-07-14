import styled from 'styled-components';

import theme from '../../base-styles/theme';

const { breakpoints, colors } = theme;

export const Header = styled.header`
	display: block;
	transition: all 0.2s ease-in;
	height: ${ props => props.formShow ? '100px' : '40px' };
`;

export const Wrapper = styled.nav`
	display: flex;
	align-items: center;
`;

export const Title = styled.h1`
	flex-grow: 1;
	padding-bottom: 0.375rem;
	font-size: 1.5rem;
	color: ${ colors.sanJuan };

	@media ( ${ breakpoints.mobile } ) {
		font-size: 2rem;
		padding-bottom: 0.5rem;
	}
`;

export const Select = styled.select`
	position: relative;
	padding-right: 1.125em;
	cursor: pointer;
	border: none;
	box-sizing: border-box;
    appearance: none;
	background: url( "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%238C98F2'><polygon points='0,0 100,0 50,50'/></svg>" ) no-repeat;
	background-size: 0.75rem;
	background-position: right;
	background-repeat: no-repeat;
	background-color: transparent;
	text-align-last: end;
	text-align: end;
	font-family: 'Quicksand', sans-serif;
	font-size: 1rem;
	color: ${ colors.sanJuan };

	&:focus {
		outline: none;
	}
`;

export const Divider = styled.span`
	width: 2px;
	height: 1.25rem;
	margin-left: 0.5em;
	margin-right: 0.5em;
	background-color: ${ colors.white };
`

export const Add = styled.button`
	display: flex;
	align-items: center;
	padding-left: 0.125em;
	padding-top: 0.125em;
	padding-right: 0.125em;
	padding-bottom: 0.125em;
	border: none;
	cursor: pointer;
	background-color: transparent;

	svg {
		width: 1.375rem;
		height: 1.375rem;
		color: ${ props => props.formShow ? `${ colors.sanJuan }` : `${ colors.silverChalice }` };
		transition: color 0.1s ease-in;
	}

	&:hover {
		svg {
			color: ${ colors.sanJuan };
		}
	}

	&:focus {
		outline: none;
	}
`;
