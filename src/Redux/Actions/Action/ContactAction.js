import * as actionTypes from '../ActionTypes/ActonTypes';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getHeaders } from '../Header/AuthHeader';

export const ContactUsAction = (data) => {
  let url = `${process.env.REACT_APP_BASE_URL}/queries`;
  return async (dispatch) => {
    dispatch(actionTypes.CONTACT_INIT());
    return axios
      .post(url, data, { headers: await getHeaders(true) })
      .then((res) => {
        console.log(res, 'Contact Us Submitted!');
        dispatch(actionTypes.CONTACT_SUCCESS(res));
        if (res.status === 200) {
          toast.success('Your queries has been submitted!', {
            autoClose: 3000,
            onClose: () => window.location.reload(),
          });
        } else {
          toast.error('Something went wrong!', {
            autoClose: 3000,
          });
        }
      })
      .catch((error) => {
        console.log(error, 'Contact Us Error');
        dispatch(actionTypes.CONTACT_ERROR(error));
        if (error.response) {
          toast.error(error.response.data.message, {
            autoClose: 3000,
          });
        }
      });
  };
};
