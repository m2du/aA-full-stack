import React from 'react';
import { Route } from 'react-router-dom';

import { ProtectedRoute } from '../../utils/route_util';
import GuildListContainer from '../guild/guild_list_container';
import GuildDetail from '../guild/guild_detail';
import AddGuildModal from '../guild/modal/add_guild_modal';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
  }

  render() {
    const {user} = this.props;
    return (
      <div id='main-app'>
        <GuildListContainer />
        <Route path='/channels/:guildId' component={GuildDetail} />
        { (this.props.addGuild) ? <AddGuildModal hideAddGuild={this.props.hideAddGuild}/> : null }
      </div>
    );
  }
}

export default Main;