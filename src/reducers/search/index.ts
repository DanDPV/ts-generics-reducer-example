/* eslint-disable import/extensions */
import { State, Actions, SearchListAction } from './actions';

const SearchReducer = <T>(state: State<T>, action: SearchListAction<T>): State<T> => {
  switch (action.type) {
    case Actions.SET_LOADING:
      return {
        ...state,
        data: null,
        isLoading: true,
      };

    case Actions.SET_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        error: '',
      };

    case Actions.SET_ERROR:
      return {
        ...state,
        data: null,
        error: action.payload.error,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default SearchReducer;
