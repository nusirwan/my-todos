import styled from 'styled-components';

import theme from '../../base-styles/theme';

const { colors } = theme;

export const ErrorText = styled.h2`
	margin-top: 4rem;
	text-align: center;
	font-size: 1rem;
	color: ${ colors.carnation }
`

export const Todos = styled.ul`
	padding-left: 0;
`;
