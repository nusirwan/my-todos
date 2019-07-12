import styled from 'styled-components';

import theme from '../../base-styles/theme';

const { breakpoints } = theme;

export const Wraper = styled.div`
	width: 17.5rem;
	margin-top: 10%;
	margin-left: auto;
	margin-right: auto;

	@media ( ${ breakpoints.mobile } ) {
		width: 24rem;
	}
`;

export const LoaderWrap = styled.div`
	margin-top: 4rem;

	div {
		display: flex;
		justify-content: center;
	}
`;

export const Todos = styled.ul`
	padding-left: 0;
`;
