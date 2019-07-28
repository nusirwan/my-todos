import styled from 'styled-components';

import theme from '../../base-styles/theme';

const { breakpoints, colors } = theme;

export const Wraper = styled.div`
	width: 17.5rem;
	margin-top: 10%;
	margin-left: auto;
	margin-right: auto;

	@media ( ${ breakpoints.mobile } ) {
		width: 24rem;
	}
`;

export const ErrorText = styled.h2`
	margin-top: 4rem;
	text-align: center;
	font-size: 1rem;
	color: ${ colors.carnation }
`

export const Todos = styled.ul`
	padding-left: 0;
`;
