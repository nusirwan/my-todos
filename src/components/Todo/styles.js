import styled, { css } from 'styled-components';
import posed from 'react-pose';

import theme from '../../base-styles/theme';
import { button } from '../../base-styles/transitions';

const { colors } = theme;

const TOGGLEWRAP_WIDTH = '6.25rem';

const ListProps = {
	exit: {
		opacity: 0,
		y: -20,
	},
	enter: {
	  opacity: 1,
	  y: 0,
	},
};

export const List = styled( posed.li( ListProps ) )`
	display: flex;
	position: relative;
	margin-top: 1em;
	margin-bottom: 1em;
`;

const TaskWrapProps = {
	open: {
		x: `-${ TOGGLEWRAP_WIDTH }`,
	},
	closed: {
		x: 0,
	},
};

export const TaskWrap = styled( posed.div( TaskWrapProps ) )`
	display: flex;
	flex-grow: 1;
	align-items: center;
	padding-left: 1em;
	padding-right: 0.375em;
	z-index: 1;
	background-color: ${ colors.white };
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

const BaseButton = styled( posed.button( button ) )`
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
	position: relative;
	background-color: ${ colors.silverChalice };

	svg {
		position: absolute;
		width: 1.25rem;
		height: 1.25rem;
		color: ${ colors.turquoiseBlue };

		&:first-child {
			visibility: ${ props => props.isVisible ? 'visible' : 'hidden' };
		}
	}
`;
