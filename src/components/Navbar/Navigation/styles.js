import styled, { css } from 'styled-components';
import posed from 'react-pose';

import theme from '../../../base-styles/theme';
import { button } from '../../../base-styles/transitions';

const { colors } = theme;

export const Nav = styled.nav`
	display: inherit;
	align-items: center;
	position: absolute;
	right: 0;
	visibility: hidden;
	opacity: 0;
	transition: visibility 0.1s, opacity 0.5s;

	${ props => props.isVisible && css`
		visibility: visible;
		opacity: 1;
	`}
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

export const Add = styled( posed.button( button ) )`
	display: flex;
	align-items: center;
	padding-left: 0.125em;
	padding-top: 0.125em;
	padding-right: 0.125em;
	padding-bottom: 0.125em;
	border: none;
	cursor: pointer;
	background-color: transparent;
	color: ${ colors.sanJuan };

	svg {
		width: 1.375rem;
		height: 1.375rem;
	}

	&:focus {
		outline: none;
	}
`;
