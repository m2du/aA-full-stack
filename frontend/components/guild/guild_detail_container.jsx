import {connect} from 'react-redux';

import { fetchGuild } from '../../actions/guild_actions';
import GuildDetail from './guild_detail';

const mdp = dispatch => ({
  fetchGuild: id => dispatch(fetchGuild(id))
});

export default connect(null, mdp)(GuildDetail);