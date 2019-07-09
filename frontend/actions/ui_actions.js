export const SHOW_ADD_GUILD = "SHOW_ADD_GUILD";
export const HIDE_ADD_GUILD = "HIDE_ADD_GUILD";
export const SHOW_INVITE_MODAL = "SHOW_INVITE_MODAL";
export const HIDE_INVITE_MODAL = "HIDE_INVITE_MODAL";

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