import * as actionConstant from '../Actions/ActionConstant/ActionConstant';

const initialState = {
  reduContactData: [],
  isLoading: false,
  error: null,
};

const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionConstant.CONTACT_US_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case actionConstant.CONTACT_US_SUCCESS:
      return {
        ...state,
        reduContactData: action.data ? action.data : null,
        isLoading: false,
      };
    case actionConstant.CONTACT_US_ERROR:
      return {
        ...state,
        error: action.data ? action.data : null,
        isLoading: false,
      };
    default:
  }
  return state;
};

export default ContactReducer;
