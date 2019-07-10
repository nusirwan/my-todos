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
