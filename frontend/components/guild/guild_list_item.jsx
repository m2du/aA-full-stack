import React from 'react';
import {Link, withRouter} from 'react-router-dom';

import DiscordSVG from '../discord_svg';

class GuildListItem extends React.Component {
  render() {
    const currentGuildId = this.props.match.params.guildId;
    const guild = this.props.guild;
    const imageUrl = (guild.imageUrl) ? guild.imageUrl : "";
    return (
      <div className='guild-item'>
        <div className={`guild-container ${(currentGuildId === guild.id.toString()) ? 'current-guild' : ''}`}>
          <Link className={`guild-link ${(currentGuildId === guild.id.toString()) ? 'current-guild' : ''}`} 
            style={{backgroundImage: `url(${imageUrl})`}}
            to={`/channels/${guild.id}`} replace>
            { 
              (guild.id === 'home') ? 
              <div id='home-svg-wrapper'>
                <DiscordSVG />
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

export default withRouter(GuildListItem);