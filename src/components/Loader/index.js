import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-loader-spinner';

import { Title, Wrapper } from './styles';

const Loader = props => {
	const {
		color,
		isVisible,
		height,
		title,
		type,
		width,
	} = props;

	return (
		<Wrapper isVisible={ isVisible }>
			<Spinner
				color={ color }
				height={ height }
				type={ type }
				width={ width }
			/>
			{ title && <Title>{ title }</Title> }
		</Wrapper>
	)
};

Loader.defaultProps = {
	color: '#3295a1',
	height: 18,
	title: '',
	type: 'Oval',
	width: 18,
}

Loader.propTypes = {
	color: PropTypes.string,
	height: PropTypes.number,
	isVisible: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired,
	type: PropTypes.oneOf( [
		'Audio',
		'Ball-Triangle',
		'Bars',
		'Circles',
		'Grid',
		'Hearts',
		'Oval',
		'Puff',
		'Rings',
		'TailSpin',
		'ThreeDots',
	] ),
	width: PropTypes.number,
};

export default Loader;
