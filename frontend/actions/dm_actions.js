import * as DMApiUtil from '../utils/dm_api_util';

export const RECEIVE_DMS = "RECEIVE_DMS";
export const RECEIVE_DM = "RECEIVE_DM";

const receiveDMs = dms => ({
  type: RECEIVE_DMS,
  dms
});

const receiveDM = dm => ({
  type: RECEIVE_DM,
  dm
});

export const fetchDMs = () => dispatch => (
  DMApiUtil.fetchDMs().then(dms => dispatch(receiveDMs(dms)))
);

export const createDM = userId => dispatch => (
  DMApiUtil.createDM(userId).then(dm => dispatch(receiveDM(dm)))
);