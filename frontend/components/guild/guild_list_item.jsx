import React from 'react';
import {Link} from 'react-router-dom';

import DiscordSVG from '../discord_svg';

class GuildListItem extends React.Component {
  render() {
    const guild = this.props.guild;
    const imageUrl = (guild.imageUrl) ? guild.imageUrl : "";
    return (
      <div className='guild-item'>
        <div className='guild-container'>
          <Link className='guild-link' 
            style={{backgroundImage: `url(${imageUrl})`}}
            to={`/channels/${guild.id}`}>
            { 
              (guild.id === 'home') ? 
              <div id='home-svg-wrapper'>
                <DiscordSVG color='blue' />
              </div> :
              (guild.imageUrl) ? null :
              guild.name.split(' ').map(str => str[0]).join('')
            }
          </Link>
        </div>
        <div className='guild-select-bar'><span></span></div>
      </div>
    )
  }
}

export default GuildListItem;