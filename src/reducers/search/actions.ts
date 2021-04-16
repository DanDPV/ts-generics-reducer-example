/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
export enum Actions {
  SET_LOADING = 'SET_LOADING',
  SET_SUCCESS = 'SET_SUCCESS',
  SET_ERROR = 'SET_ERROR',
}

export type State<T> = {
  data: T | null;
  isLoading: boolean;
  error: string;
};

export type SearchListAction<T> =
  | { type: Actions.SET_LOADING }
  | { type: Actions.SET_SUCCESS; payload: { data: T } }
  | { type: Actions.SET_ERROR; payload: { error: string } };
