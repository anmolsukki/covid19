import * as actionTypes from '../ActionTypes/ActonTypes';
import axios from 'axios';
import { getHeaders } from '../Header/AuthHeader';

export const ContactUsAction = () => {
  let url = `${process.env.REACT_APP_BASE_URL}/stats/patientStateWise`;
  return async (dispatch) => {
    dispatch(actionTypes.CONTACT_INIT());
    return axios
      .get(url, { headers: await getHeaders(true) })
      .then((res) => {
        console.log(res, 'Data Getting Succes');
        dispatch(actionTypes.CONTACT_SUCCESS(res.data));
      })
      .catch((error) => {
        console.log(error, 'Data Getting Error');
        dispatch(actionTypes.CONTACT_ERROR(error));
      });
  };
};

export const DailyStats = () => {
  let url = `${process.env.REACT_APP_BASE_URL}/stats/daily`;
  return async (dispatch) => {
    dispatch(actionTypes.DAILY_INIT());
    return axios
      .get(url, { headers: await getHeaders(true) })
      .then((res) => {
        console.log(res, 'Daily Data Getting Succes');
        dispatch(actionTypes.DAILY_SUCCESS(res.data));
      })
      .catch((error) => {
        console.log(error, 'Daily Data Getting Error');
        dispatch(actionTypes.DAILY_ERROR(error));
      });
  };
};
