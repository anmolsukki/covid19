import * as actionConstant from '../ActionConstant/ActionConstant';

// Authentication
export const CONTACT_INIT = () => ({ type: actionConstant.CONTACT_US_INIT });
export const CONTACT_SUCCESS = (data) => ({ type: actionConstant.CONTACT_US_SUCCESS, data: data });
export const CONTACT_ERROR = (data) => ({ type: actionConstant.CONTACT_US_ERROR, data: data });
