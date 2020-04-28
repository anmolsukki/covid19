import * as actionConstant from '../ActionConstant/ActionConstant';

// CoronaAction
export const STATE_INIT = () => ({ type: actionConstant.STATE_WISE_INIT });
export const STATE_SUCCESS = (data) => ({ type: actionConstant.STATE_WISE_SUCCESS, data: data });
export const STATE_ERROR = (data) => ({ type: actionConstant.STATE_WISE_ERROR, data: data });

export const CONTACT_INIT = () => ({ type: actionConstant.RESIONAL_CONTACT_INIT });
export const CONTACT_SUCCESS = (data) => ({
  type: actionConstant.RESIONAL_CONTACT_SUCCESS,
  data: data,
});
export const CONTACT_ERROR = (data) => ({
  type: actionConstant.RESIONAL_CONTACT_ERROR,
  data: data,
});

export const WORLD_INIT = () => ({ type: actionConstant.WORLD_CASES_INIT });
export const WORLD_SUCCESS = (data) => ({ type: actionConstant.WORLD_CASES_SUCCESS, data: data });
export const WORLD_ERROR = (data) => ({ type: actionConstant.WORLD_CASES_ERROR, data: data });

export const NEWS_INIT = () => ({ type: actionConstant.NEWS_NOTIFICATION_INIT });
export const NEWS_SUCCESS = (data) => ({
  type: actionConstant.NEWS_NOTIFICATION_SUCCESS,
  data: data,
});
export const NEWS_ERROR = (data) => ({ type: actionConstant.NEWS_NOTIFICATION_ERROR, data: data });

export const TEST_INIT = () => ({ type: actionConstant.TEST_CENTER_INIT });
export const TEST_SUCCESS = (data) => ({
  type: actionConstant.TEST_CENTER_SUCCESS,
  data: data,
});
export const TEST_ERROR = (data) => ({ type: actionConstant.TEST_CENTER_ERROR, data: data });
