import React from 'react';

import GuildListItem from './guild_list_item';
import AddGuildItem from './add_guild_item';

class GuildList extends React.Component {
  componentDidMount() {
    this.props.fetchAllGuilds();
  }

  render() {
    const guilds = this.props.guilds;
    return (
      <div id='guild-list'>
        <GuildListItem key={'home'} guild={{id: 'home'}} />
        <div className='line-wrapper'>
          <div className='guild-separator'></div>
        </div>
        {guilds.map(guild => <GuildListItem key={guild.id} guild={guild}/>)}
        <AddGuildItem showAddGuild={this.props.showAddGuild}/>
      </div>
    );
  }
}

export default GuildList;