import React from 'react';
import {Link} from 'react-router-dom';

class GuildListItem extends React.Component {
  render() {
    const guild = this.props.guild;

    return (
      <div className='guild-item'>
        <div className='guild-select-bar'></div>
        <div className='guild-container'>
          <Link to={`/channels/${guild.id}`}>
            {guild.name}
          </Link>
        </div>
      </div>
    )
  }
}

export default GuildListItem;