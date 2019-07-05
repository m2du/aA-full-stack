import {connect} from 'react-redux';

import {fetchAllGuilds} from '../../actions/guild_actions';
import GuildList from './guild_list';

const msp = state => ({
  guilds: Object.values(state.entities.guilds)
});

const mdp = dispatch => ({
  fetchAllGuilds: () => dispatch(fetchAllGuilds())
});

export default connect(msp, mdp)(GuildList);
