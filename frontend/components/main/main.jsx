import React from 'react';

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
        <GuildDetail />
        {/* <h1>{user.username + "#" + user.tag}</h1>
        <button onClick={this.logout}>Logout</button> */}
        { (this.props.addGuild) ? <AddGuildModal hideAddGuild={this.props.hideAddGuild}/> : null }
      </div>
    );
  }
}

export default Main;