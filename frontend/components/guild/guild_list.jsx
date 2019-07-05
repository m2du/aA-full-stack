import React from 'react';

import GuildListItem from './guild_list_item';

class GuildList extends React.Component {
  componentDidMount() {
    this.props.fetchAllGuilds();
  }

  render() {
    const guilds = this.props.guilds;
    return (
      <div id='guild-list'>
        {guilds.map(guild => <GuildListItem key={guild.id} guild={guild}/>)}
      </div>
    );
  }
}

export default GuildList;