import React from 'react';
import Spinner from 'react-loader-spinner';

import { Title, Wrapper } from './styles';

const Loader = props => {
	return (
		<Wrapper isVisible={ props.isVisible }>
			<Spinner
				color="#3295a1"
				height={ 18 }
				type="Oval"
				width={ 18 }
			/>
			<Title>Loading...</Title>
		</Wrapper>
	)
}

export default Loader;
