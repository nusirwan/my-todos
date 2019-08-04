import styled, { css } from 'styled-components';

import theme from '../../base-styles/theme';

const { breakpoints, contentWidth } = theme;

export default styled.div`
	width: 17.5rem;
	margin-top: 10%;
	margin-left: auto;
	margin-right: auto;
    padding-right: 1rem;
    padding-left: 1rem;

    @media ( ${ breakpoints.mobile } ) {
		width: 24rem;
	}

    @media ( ${ breakpoints.tablet } ) {
        padding-right: 1.5rem;
        padding-left: 1.5rem;
    }

	@media ( ${ breakpoints.laptop } ) {
		/* width: ${ contentWidth.laptop }; */
        margin-right: auto;
        margin-left: auto;
        padding-right: unset;
        padding-left: unset;

        ${ props => props.fullWidht && css`
            ${'' /* width: initial; */}
            margin-right: 0;
            margin-left: 0
        `}
	}
`;
