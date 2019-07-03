import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => ({
  formType: 'signup',
  errors: state.errors.session
});

const mdp = dispatch => ({
  submitUser: user => dispatch(signup(user))
});

export default connect(msp, mdp)(SessionForm);