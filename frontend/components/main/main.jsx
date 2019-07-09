import React from 'react';
import { Route } from 'react-router-dom';

import GuildListContainer from '../guild/guild_list_container';
import GuildDetailContainer from '../guild/guild_detail_container';
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
    return (
      <div id='main-app'>
        <GuildListContainer />
        <Route path='/channels/:guildId' component={GuildDetailContainer} />
        { (this.props.addGuild) ? <AddGuildModal hideAddGuild={this.props.hideAddGuild}/> : null }
      </div>
    );
  }
}

export default Main;