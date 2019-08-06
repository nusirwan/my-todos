import { connect } from 'react-redux';

import Navbar from '../components/Navbar';
import { handleAddTodo, toggleButton, setFilter } from '../store/actions';

const mapDispatchToProps = dispatch => ( {
	handleAddTodo: task => dispatch( handleAddTodo( task ) ),
	setFilter: value => dispatch( setFilter( value ) ),
	toggleButton: () => dispatch( toggleButton() ),
} );

const mapStateToProps = state => ( {
	formShow: state.ui.formShow,
	loading: state.services.loading,
} );

export default connect(
	mapStateToProps,
	mapDispatchToProps
)( Navbar );
