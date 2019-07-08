import React from 'react';

import GuildListContainer from '../guild/guild_list_container';
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
        <h1>{user.username + "#" + user.tag}</h1>
        <button onClick={this.logout}>Logout</button>
        <GuildListContainer />
        { (this.props.addGuild) ? <AddGuildModal hideAddGuild={this.props.hideAddGuild}/> : null }
      </div>
    );
  }
}

export default Main;