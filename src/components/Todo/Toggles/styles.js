import styled from 'styled-components';
import posed from 'react-pose';

import theme from '../../../base-styles/theme';
import { button } from '../../../base-styles/transitions';

const { colors } = theme;

const TOGGLEWRAP_WIDTH = '6.25rem';

const BaseButton = styled( posed.button( button ) )`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 0;
	margin-right: 0;
	margin-bottom: 0;
	margin-left: 0;
	border: none;
	cursor: pointer;
	background-color: transparent;

	&:focus {
		outline: none;
	}
`;

export const Wrapper = styled.div`
	width: ${ TOGGLEWRAP_WIDTH };
	height: 100%;
	position: absolute;
	right: 0;
	display: flex;
`;

export const Remove = styled( BaseButton )`
	flex-basis: 50%;
	background-color: ${ colors.turquoiseBlue };

	svg {
		width: 1.375rem;
		height: 1.375rem;
		color: ${ colors.carnation };
	}
`;

export const Check = styled( BaseButton )`
	flex-basis: 50%;
	position: relative;
	background-color: ${ colors.silverChalice };

	svg {
		position: absolute;
		width: 1.25rem;
		height: 1.25rem;
		color: ${ colors.turquoiseBlue };

		&:first-child {
			visibility: ${ props => props.isCheked ? 'visible' : 'hidden' };
		}
	}
`;
