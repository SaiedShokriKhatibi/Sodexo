// Actions
import { CityDTO } from 'src/api';

export const SET_CITY = 'city/SET';

interface IAction<T> {
  payload?: T;
  type: string;
}

export interface ICityProps extends CityDTO {
  title: string;
  slug: string;
}
// Reducer

const initialCity = { title: 'تهران', slug: 'tehran' };
export default (state: ICityProps = initialCity, action: IAction<ICityProps>): ICityProps => {
  switch (action.type) {
    case SET_CITY:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// Action Creators
export const setCity = (payload: ICityProps) => {
  return {
    type: SET_CITY,
    payload,
  };
};
