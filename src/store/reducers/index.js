import { combineReducers } from 'redux';

import services from './services';
import ui from './ui';

export default combineReducers( {
	services,
	ui,
} );
