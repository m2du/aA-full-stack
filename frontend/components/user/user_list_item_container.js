import {connect} from 'react-redux';

import {showDMPopup} from '../../actions/ui_actions';
import UserListItem from './user_list_item';

const mdp = dispatch => ({
  showDMPopup: user => dispatch(showDMPopup(user))
});

export default connect(null, mdp)(UserListItem);