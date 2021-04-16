/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { IItem } from 'interfaces/common';
import { get } from './FetchInfo';

export const getItemById = async (id: number) => {
  const char = await get<IItem>(
    `${process.env.REACT_APP_API_URL}item/${id}`,
  );
  return char;
};
