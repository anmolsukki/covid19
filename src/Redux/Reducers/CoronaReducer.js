import * as actionConstant from '../Actions/ActionConstant/ActionConstant';

const initialState = {
  reStateData: [],
  reContactData: [],
  reWorldData: [],
  reNewsData: [],
  reTestData: [],
  isLoading: false,
  error: null,
};

const CoronaReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionConstant.STATE_WISE_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case actionConstant.STATE_WISE_SUCCESS:
      return {
        ...state,
        reStateData: action.data ? action.data : null,
        isLoading: false,
      };
    case actionConstant.STATE_WISE_ERROR:
      return {
        ...state,
        error: action.data ? action.data : null,
        isLoading: false,
      };

    case actionConstant.RESIONAL_CONTACT_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case actionConstant.RESIONAL_CONTACT_SUCCESS:
      return {
        ...state,
        reContactData: action.data ? action.data : null,
        isLoading: false,
      };
    case actionConstant.RESIONAL_CONTACT_ERROR:
      return {
        ...state,
        error: action.data ? action.data : null,
        isLoading: false,
      };

    case actionConstant.WORLD_CASES_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case actionConstant.WORLD_CASES_SUCCESS:
      return {
        ...state,
        reWorldData: action.data ? action.data : null,
        isLoading: false,
      };
    case actionConstant.WORLD_CASES_ERROR:
      return {
        ...state,
        error: action.data ? action.data : null,
        isLoading: false,
      };

    case actionConstant.NEWS_NOTIFICATION_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case actionConstant.NEWS_NOTIFICATION_SUCCESS:
      return {
        ...state,
        reNewsData: action.data ? action.data : null,
        isLoading: false,
      };
    case actionConstant.NEWS_NOTIFICATION_ERROR:
      return {
        ...state,
        error: action.data ? action.data : null,
        isLoading: false,
      };

    case actionConstant.TEST_CENTER_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case actionConstant.TEST_CENTER_SUCCESS:
      return {
        ...state,
        reTestData: action.data ? action.data : null,
        isLoading: false,
      };
    case actionConstant.TEST_CENTER_ERROR:
      return {
        ...state,
        error: action.data ? action.data : null,
        isLoading: false,
      };
    default:
  }
  return state;
};

export default CoronaReducer;
