import {connect} from 'react-redux';

import {hideDMPopup} from '../../actions/ui_actions';
import DirectMessagePopup from './direct_message_popup';

const mdp = dispatch => ({
  hideDMPopup: () => dispatch(hideDMPopup())
});

export default connect(null, mdp)(DirectMessagePopup);