import {connect} from 'react-redux';

import { selectGuildChannels } from '../../reducers/selectors';
import { fetchGuild } from '../../actions/guild_actions';
import GuildDetail from './guild_detail';

const msp = (state, ownProps) => ({
  channels: selectGuildChannels(state, ownProps.match.params.guildId)
})

const mdp = dispatch => ({
  fetchGuild: id => dispatch(fetchGuild(id))
});

export default connect(msp, mdp)(GuildDetail);