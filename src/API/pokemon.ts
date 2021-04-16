/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { IPokemon } from 'interfaces/common';
import { get } from './FetchInfo';

export const getPokemonById = async (id: number) => {
  const char = await get<IPokemon>(
    `${process.env.REACT_APP_API_URL}pokemon/${id}`,
  );
  return char;
};
