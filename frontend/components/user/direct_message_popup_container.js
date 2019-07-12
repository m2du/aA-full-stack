import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {hideDMPopup} from '../../actions/ui_actions';
import {createDM} from '../../actions/dm_actions';
import DirectMessagePopup from './direct_message_popup';

const msp = state => ({
  currentUserId: state.session.id
})

const mdp = dispatch => ({
  hideDMPopup: () => dispatch(hideDMPopup()),
  createDM: userId => dispatch(createDM(userId))
});

export default withRouter(connect(msp, mdp)(DirectMessagePopup));