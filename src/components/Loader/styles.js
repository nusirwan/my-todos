import styled, { css } from 'styled-components';

import theme from '../../base-styles/theme';

const { colors } = theme;

export const Wrapper = styled.div`
	display: flex;
	margin-top: 0.25rem;
	visibility: hidden;
	opacity: 0;
	transition: visibility 0.1s, opacity 0.5s;

	${ props => props.isVisible && css`
		visibility: visible;
		opacity: 1;
	`}
`;

export const Title = styled.span`
	margin-left: 0.5rem;
	font-size: 0.875rem;
	color: ${ colors.silverChalice };
`;
