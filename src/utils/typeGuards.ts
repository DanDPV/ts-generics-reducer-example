/* eslint-disable arrow-body-style */
import { IItem, IPokemon } from 'interfaces/common';

export const isIPokemon = (obj: unknown): obj is IPokemon => {
  return (obj as IPokemon).base_experience !== undefined;
};

export const isIItem = (obj: unknown): obj is IItem => {
  return (obj as IItem).cost !== undefined;
};
