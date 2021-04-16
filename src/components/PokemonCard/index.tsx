import React, { Reducer, useEffect, useReducer } from 'react';
import { Actions, State, SearchListAction } from 'reducers/search/actions';
import { getPokemonById } from 'API/pokemon';
import { IPokemon } from 'interfaces/common';
import SearchReducer from 'reducers/search';

type PokemonCardType = {
  id: number;
};

const initialState: State<IPokemon> = {
  isLoading: false,
  error: '',
  data: null,
};

const PokemonCard = ({ id }: PokemonCardType) => {
  const [state, dispatch] = useReducer<
    Reducer<State<IPokemon>, SearchListAction<IPokemon>>
  >(SearchReducer, initialState);
  const { data: pokemon, isLoading, error } = state;
  useEffect(() => {
    dispatch({ type: Actions.SET_LOADING });
    getPokemonById(id)
      .then(p => {
        console.log(p);
        dispatch({ type: Actions.SET_SUCCESS, payload: { data: p } });
      })
      .catch(e => {
        console.error(e);
        dispatch({
          type: Actions.SET_ERROR,
          payload: { error: 'There was an error while loading the pokemon' },
        });
      });
  }, []);
  return (
    <div>
      {isLoading && <p>Loading pokemon...</p>}
      {error && <p>{error}</p>}
      {pokemon && (
        <>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt="pokemon" />
        </>
      )}
    </div>
  );
};

export default PokemonCard;
