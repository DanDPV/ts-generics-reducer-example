import React, { Reducer, useEffect, useReducer } from 'react';
import { Actions, SearchListAction, State } from 'reducers/search/actions';
import { getItemById } from 'API/item';
import { IItem } from 'interfaces/common';
import SearchReducer from 'reducers/search';

type ItemCardType = {
  id: number;
};

const initialState: State<IItem> = {
  isLoading: false,
  error: '',
  data: null,
};

const ItemCard = ({ id }: ItemCardType) => {
  const [state, dispatch] = useReducer<
    Reducer<State<IItem>, SearchListAction<IItem>>
  >(SearchReducer, initialState);
  const { data: item, isLoading, error } = state;
  useEffect(() => {
    dispatch({ type: Actions.SET_LOADING });
    getItemById(id)
      .then(p => {
        console.log(p);
        dispatch({ type: Actions.SET_SUCCESS, payload: { data: p } });
      })
      .catch(e => {
        console.error(e);
        dispatch({
          type: Actions.SET_ERROR,
          payload: { error: 'There was an error while loading the item' },
        });
      });
  }, []);
  return (
    <div>
      {isLoading && <p>Loading item...</p>}
      {error && <p>{error}</p>}
      {item && (
        <>
          <h2>{item.name}</h2>
          <img src={item.sprites.default} alt="item" />
        </>
      )}
    </div>
  );
};

export default ItemCard;
