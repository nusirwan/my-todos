import styled from 'styled-components';

import theme from '../../base-styles/theme';

const { colors } = theme;

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 4rem;
`;

export const Title = styled.span`
	margin-left: 0.5rem;
	font-size: 0.875rem;
	color: ${ colors.silverChalice };
`;
