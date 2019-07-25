import styled from 'styled-components';
import posed from 'react-pose';

import theme from '../../base-styles/theme';
import { fadeIn } from '../../base-styles/transitions';

const { colors } = theme;

export const Wrapper = styled( posed.div( fadeIn ) )`
	justify-content: center;
	margin-top: 0.25rem;
	align-items: center;
`;

export const Title = styled.span`
	margin-left: 0.5rem;
	font-size: 0.875rem;
	color: ${ colors.silverChalice };
`;
