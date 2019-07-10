import styled, { css } from 'styled-components';

import theme from '../../base-styles/theme';

const { colors } = theme;

export const Form = styled.form`
	display: flex;
	border-bottom: 1px solid rgb( 127, 167, 184 );
	visibility: hidden;
	opacity: 0;
	transition: visibility 0.1s, opacity 0.5s;

	${ props => props.isVisible && css`
		visibility: visible;
		opacity: 1;
	`}
`;

export const Input = styled.input`
	width: 100%;
	padding-left: 1em;
	padding-top: 1em;
	padding-right: 1em;
	padding-bottom: 1em;
	border: none;
	background-color: transparent;
	font-size: 1rem;
	font-family: 'Quicksand', sans-serif;
	color: ${ colors.sanJuan };

	&:focus {
		outline: none;
	}

	&::placeholder {
		color: ${ colors.silverChalice };
	}
`;

export const Submit = styled.button`
	padding-left: 2em;
	padding-top: 0;
	padding-right: 2em;
	padding-bottom: 0;
	cursor: pointer;
	border: none;
	background-color: inherit;
	visibility: visible;
	opacity: 1;
	transition: visibility 0.1s, opacity 0.5s;

	svg {
		color: ${ colors.neptune };
		width: 1.375rem;
		height: 1.375rem;
	}

	&:disabled {
		visibility: hidden;
		opacity: 0;
	}
`;
