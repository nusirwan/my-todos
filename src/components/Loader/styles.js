import styled, { css } from 'styled-components';

import theme from '../../base-styles/theme';

const { colors } = theme;

export const Wrapper = styled.div`
	display: none;

	${ props => props.isVisible && css`
		display: flex;
		justify-content: center;
		margin-top: 0.25rem;
		align-items: center;
	`}
`;

export const Title = styled.span`
	margin-left: 0.5rem;
	font-size: 0.875rem;
	color: ${ colors.silverChalice };
`;
