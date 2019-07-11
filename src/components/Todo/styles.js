import styled, { css } from 'styled-components';
import posed from 'react-pose';

import theme from '../../base-styles/theme';

const { colors } = theme;

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
	align-items: center;
	position: relative;
	margin-top: 1em;
	margin-bottom: 1em;
	padding-left: 1em;
	padding-right: 0.375em;
	background-color: ${ colors.white };
	border-radius: 0.25rem;
	list-style:none;
`;

export const Task = styled.span`
	flex-grow: 1;
	margin-top: 1em;
	margin-bottom: 1em;
	padding-right: 2em;
	font-size: 1rem;
	text-decoration: none;
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
	align-items: center;
	margin-right: 0.375em;
	padding-left: 0.125em;
	padding-top: 1.125em;
	padding-right: 0.125em;
	padding-bottom: 1.125em;
	border: none;
	cursor: pointer;
	background-color: transparent;

	&:focus {
		outline: none;
	}
`;

export const More = styled( BaseButton )`
	visibility: visible;
	opacity: 1;
	transition: visibility 0.1s, opacity 0.5s;

	svg {
		width: 1.25rem;
		height: 1.25rem;
		color: ${ colors.silverChalice };
	}

	${ props => props.isVisible && css`
		visibility: hidden;
		opacity: 0;
	`}
`;

export const ToggleWrap = styled.div`
	display: flex;
	position: absolute;
	right: 0;
	visibility: hidden;
	opacity: 0;
	transition: visibility 0.1s, opacity 0.5s, transform 0.3s;

	${ props => props.isVisible && css`
		visibility: visible;
		opacity: 1;
		transform: translate( -5px, 0 );
	`}
`;

export const Remove = styled( BaseButton )`
	svg {
		width: 1.375rem;
		height: 1.375rem;
		color: ${ colors.carnation };
	}
`;

export const Check = styled( BaseButton )`
	svg {
		width: 1.25rem;
		height: 1.25rem;
		color: ${ colors.turquoiseBlue };
	}
`;
