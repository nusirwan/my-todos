import styled, { css } from 'styled-components';
import posed from 'react-pose';

import theme from '../../base-styles/theme';

const { colors } = theme;

const TOGGLEWRAP_WIDTH = '6.25rem';

const ListProps = posed.li( {
	exit: {
		opacity: 0,
		y: -20,
	},
	enter: {
	  opacity: 1,
	  y: 0,
	},
} );

export const List = styled( ListProps )`
	display: flex;
	position: relative;
	margin-top: 1em;
	margin-bottom: 1em;
`;

export const TaskWrap = styled.div`
	display: flex;
	flex-grow: 1;
	align-items: center;
	padding-left: 1em;
	padding-right: 0.375em;
	z-index: 1;
	background-color: ${ colors.white };
	transition: transform 0.2s ease-in;

	${ props => props.isVisible && css`
		transform: translate( -${ TOGGLEWRAP_WIDTH }, 0 );
	`}
`;

export const Task = styled.span`
	flex-grow: 1;
	margin-top: 1em;
	margin-bottom: 1em;
	padding-right: 2em;
	font-size: 1rem;
	color: ${ colors.sanJuan };

	${ props => props.completed && css`
		text-decoration: line-through;
		color: ${ colors.silverChalice };
	`}
`;

export const Form = styled.form`
	flex-grow: 1;
`;

export const Input = styled.input`
	width: 90%;
	margin-top: 0.9375em;
	margin-bottom: 0.9375em;
	border: none;
	font-size: 1rem;
	font-family: 'Quicksand', sans-serif;
	color: ${ colors.sanJuan };

	&:focus {
		border: none;
		outline: none;
	}
`;

const BaseButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 0;
	margin-right: 0;
	margin-bottom: 0;
	margin-left: 0;
	border: none;
	cursor: pointer;
	background-color: transparent;

	&:focus {
		outline: none;
	}
`;

export const More = styled( BaseButton )`
	margin-right: 0.25em;
	padding-left: 0.125em;
	padding-top: 1.125em;
	padding-right: 0.125em;
	padding-bottom: 1.125em;

	svg {
		width: 1.25rem;
		height: 1.25rem;
		color: ${ colors.silverChalice };
	}
`;

export const ToggleWrap = styled.div`
	width: ${ TOGGLEWRAP_WIDTH };
	height: 100%;
	position: absolute;
	right: 0;
	display: flex;
`;

export const Remove = styled( BaseButton )`
	flex-basis: 50%;
	background-color: ${ colors.turquoiseBlue };

	svg {
		width: 1.375rem;
		height: 1.375rem;
		color: ${ colors.carnation };
	}
`;

export const Check = styled( BaseButton )`
	flex-basis: 50%;
	background-color: ${ colors.silverChalice };

	svg {
		width: 1.25rem;
		height: 1.25rem;
		color: ${ colors.turquoiseBlue };
	}
`;
