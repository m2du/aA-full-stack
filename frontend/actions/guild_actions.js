import * as GuildApiUtil from '../utils/guild_api_util';

export const RECEIVE_ALL_GUILDS = 'RECEIVE_ALL_GUILDS';
export const RECEIVE_GUILD = 'RECEIVE_GUILD';
export const DESTROY_GUILD = 'DESTROY_GUILD';

const receiveAllGuilds = guilds => ({
  type: RECEIVE_ALL_GUILDS,
  guilds
});

const receiveGuild = guild => ({
  type: RECEIVE_GUILD,
  guild
});

const removeGuild = guildId => ({
  type: DESTROY_GUILD,
  guildId
});

export const fetchAllGuilds = () => dispatch => (
  GuildApiUtil.fetchAllGuilds().then(
    guilds => dispatch(receiveAllGuilds(guilds))
  )
);

export const fetchGuild = id => dispatch => (
  GuildApiUtil.fetchGuild(id).then(
    guild => dispatch(receiveGuild(guild))
  )
);

export const createGuild = guild => dispatch => (
  GuildApiUtil.createGuild(guild).then(
    guild => dispatch(receiveGuild(guild))
  )
);

export const updateGuild = guild => dispatch => (
  GuildApiUtil.updateGuild(guild).then(
    guild => dispatch(receiveGuild(guild))
  )
);

export const destroyGuild = id => dispatch => (
  GuildApiUtil.destroyGuild(id).then(
    () => dispatch(removeGuild(id))
  )
);