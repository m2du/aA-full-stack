import {connect} from 'react-redux';

import {logout} from '../../actions/session_actions';
import Main from './main';

const msp = state => ({
  user: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(Main);