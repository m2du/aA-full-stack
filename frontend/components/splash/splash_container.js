import {connect} from 'react-redux';

import Splash from './splash';

const msp = state => ({
  session: state.session.id ? 'Open' : 'Login',
  target: state.session.id ? '/channels/home' : '/login'
});

export default connect(msp)(Splash);