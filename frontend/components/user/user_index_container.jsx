import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

import { selectGuildMembers } from '../../reducers/selectors';
import UserIndex from './user_index';

const msp = (state, ownProps) => ({
  users: selectGuildMembers(state, ownProps.match.params.guildId)
});

export default withRouter(connect(msp)(UserIndex));

