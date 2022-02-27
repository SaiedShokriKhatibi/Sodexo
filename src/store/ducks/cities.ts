import { CityDTO } from 'src/api';
// Actions
export const SET_CITIES = 'cities/SET';

interface IAction<T> {
  payload?: T;
  type: string;
}

// Reducer

export default (state: Array<CityDTO> = [], action: IAction<Array<CityDTO>>): Array<CityDTO> => {
  switch (action.type) {
    case SET_CITIES:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

// Action Creators
export const setCities = (payload: Array<CityDTO>) => {
  return {
    type: SET_CITIES,
    payload,
  };
};
