import styled from 'styled-components';
import posed from 'react-pose';

import theme from '../../base-styles/theme';
import { fadeInRight, openForm } from '../../base-styles/transitions';

const { breakpoints, colors } = theme;

export const Header = styled( posed.header( openForm ) )`
	display: block;
`;

export const Wrapper = styled.div`
	display: flex;
	position: relative;
	align-items: center;
`;

export const Title = styled( posed.h1( fadeInRight ) )`
	flex-grow: 1;
	padding-bottom: 0.375rem;
	font-size: 1.5rem;
	color: ${ colors.sanJuan };

	@media ( ${ breakpoints.mobile } ) {
		font-size: 2rem;
		padding-bottom: 0.5rem;
	}
`;
