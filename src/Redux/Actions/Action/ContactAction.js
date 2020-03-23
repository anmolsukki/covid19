import * as actionTypes from '../ActionTypes/ActonTypes';
import axios from 'axios';
import { getHeaders } from '../Header/AuthHeader';

export const ContactUsAction = () => {
  let url = `${process.env.REACT_APP_BASE_URL}/stats/latest`;
  return async (dispatch) => {
    dispatch(actionTypes.CONTACT_INIT());
    return axios
      .get(url, { headers: await getHeaders(true) })
      .then((res) => {
        console.log(res, 'Data Getting Succes');
        dispatch(actionTypes.CONTACT_SUCCESS(res));
      })
      .catch((error) => {
        console.log(error, 'Data Getting Error');
        dispatch(actionTypes.CONTACT_ERROR(error));
      });
  };
};
