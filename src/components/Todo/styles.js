import styled, { css } from 'styled-components';

import theme from '../../base-styles/theme';

const { colors } = theme;

export const List = styled.li`
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

export const Remove = styled( BaseButton )`
	svg {
		width: 1.375rem;
		height: 1.375rem;
		color: ${ colors.carnation };
	}
`;
