export const SHOW_ADD_GUILD = "SHOW_ADD_GUILD";
export const HIDE_ADD_GUILD = "HIDE_ADD_GUILD";
export const SHOW_INVITE_MODAL = "SHOW_INVITE_MODAL";
export const HIDE_INVITE_MODAL = "HIDE_INVITE_MODAL";
export const SHOW_CREATE_CHANNEL = "SHOW_CREATE_CHANNEL";
export const HIDE_CREATE_CHANNEL = "HIDE_CREATE_CHANNEL";
export const SHOW_DM_POPUP = "SHOW_DM_POPUP";
export const HIDE_DM_POPUP = "HIDE_DM_POPUP";

export const showAddGuild = () => ({
  type: SHOW_ADD_GUILD
});

export const hideAddGuild = () => ({
  type: HIDE_ADD_GUILD
});

export const showInviteModal = () => ({
  type: SHOW_INVITE_MODAL
});

export const hideInviteModal = () => ({
  type: HIDE_INVITE_MODAL
});

export const showCreateChannel = () => ({
  type: SHOW_CREATE_CHANNEL
});

export const hideCreateChannel = () => ({
  type: HIDE_CREATE_CHANNEL
});

export const showDMPopup = user => ({
  type: SHOW_DM_POPUP,
  user
});

export const hideDMPopup = () => ({
  type: HIDE_DM_POPUP
});