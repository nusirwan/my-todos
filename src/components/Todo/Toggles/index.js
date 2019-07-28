import React from 'react';
import PropTypes from 'prop-types';
import { FiCheckSquare, FiSquare, FiX } from 'react-icons/fi';

import { Check, Remove, Wrapper } from './styles';

const Toggles = props => {
	const {
		completed,
		isVisible,
		toggleCompletion,
		toggleRemove,
		toggleWrapRef,
	} = props;

	return (
		<Wrapper ref={ toggleWrapRef }>
			<Check
				completed={ completed }
				isVisible={ isVisible }
				onClick={ toggleCompletion }
			>
				<FiCheckSquare />
				<FiSquare />
			</Check>
			<Remove onClick={ toggleRemove }><FiX /></Remove>
		</Wrapper>
	)
}

Toggles.propTypes = {
	completed: PropTypes.bool.isRequired,
	isVisible: PropTypes.bool.isRequired,
	toggleRemove: PropTypes.func.isRequired,
	toggleCompletion: PropTypes.func.isRequired,
	toggleWrapRef: PropTypes.object.isRequired,
}

export default Toggles;
