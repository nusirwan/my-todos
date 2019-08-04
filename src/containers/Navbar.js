import { connect } from 'react-redux';

import Navbar from '../components/Navbar';
import { handleAddTodo, toggleButton, setFilter } from '../store/actions';

const mapDispatchToProps = dispatch => ( {
	handleAddTodo: task => dispatch( handleAddTodo( task ) ),
	setFilter: value => dispatch( setFilter( value ) ),
	toggleButton: () => dispatch( toggleButton() ),
} );

const mapStateToProps = state => ( {
	formShow: state.formShow,
	loading: state.loading,
} );

export default connect(
	mapStateToProps,
	mapDispatchToProps
)( Navbar );
