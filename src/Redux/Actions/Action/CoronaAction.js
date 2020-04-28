import * as actionTypes from '../ActionTypes/ActonTypes';
import axios from 'axios';
import { getHeaders } from '../Header/AuthHeader';

export const StateWiseAction = () => {
  let url = `${process.env.REACT_APP_BASE_URL}/stats/patientStateWise`;
  return async (dispatch) => {
    dispatch(actionTypes.STATE_INIT());
    return axios
      .get(url, { headers: await getHeaders(true) })
      .then((res) => {
        console.log(res, 'State Wise Data Getting Succes');
        dispatch(actionTypes.STATE_SUCCESS(res.data.data));
      })
      .catch((error) => {
        console.log(error, 'State Wise Data Getting Error');
        dispatch(actionTypes.STATE_ERROR(error));
      });
  };
};

export const ResionalContactAction = () => {
  let url = `${process.env.REACT_APP_BASE_URL}/stats/contacts`;
  return async (dispatch) => {
    dispatch(actionTypes.CONTACT_INIT());
    return axios
      .get(url, { headers: await getHeaders(true) })
      .then((res) => {
        console.log(res, 'Contact Data Getting Succes');
        dispatch(actionTypes.CONTACT_SUCCESS(res.data.data));
      })
      .catch((error) => {
        console.log(error, 'Contact Data Getting Error');
        dispatch(actionTypes.CONTACT_ERROR(error));
      });
  };
};

export const WorldCasesAction = () => {
  let url = `https://corona.lmao.ninja/v2/countries`;
  return async (dispatch) => {
    dispatch(actionTypes.WORLD_INIT());
    return axios
      .get(url, { headers: await getHeaders(true) })
      .then((res) => {
        console.log(res, 'WORLD Data Getting Succes');
        dispatch(actionTypes.WORLD_SUCCESS(res));
      })
      .catch((error) => {
        console.log(error, 'WORLD Data Getting Error');
        dispatch(actionTypes.WORLD_ERROR(error));
      });
  };
};

export const NewsAction = () => {
  let url = `${process.env.REACT_APP_BASE_URL}/stats/notifications`;
  return async (dispatch) => {
    dispatch(actionTypes.NEWS_INIT());
    return axios
      .get(url, { headers: await getHeaders(true) })
      .then((res) => {
        console.log(res, 'News Data Getting Succes');
        dispatch(actionTypes.NEWS_SUCCESS(res.data.data));
      })
      .catch((error) => {
        console.log(error, 'News Data Getting Error');
        dispatch(actionTypes.NEWS_ERROR(error));
      });
  };
};

export const VrdlAction = () => {
  let url = `${process.env.REACT_APP_BASE_URL}/stats/testcenters`;
  return async (dispatch) => {
    dispatch(actionTypes.TEST_INIT());
    return axios
      .get(url, { headers: await getHeaders(true) })
      .then((res) => {
        console.log(res, 'Test Center Data Getting Succes');
        dispatch(actionTypes.TEST_SUCCESS(res.data.data));
      })
      .catch((error) => {
        console.log(error, 'Test Center Data Getting Error');
        dispatch(actionTypes.TEST_ERROR(error));
      });
  };
};
