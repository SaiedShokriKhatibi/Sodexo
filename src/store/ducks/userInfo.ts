import { CustomerDTO } from 'src/api';
// Actions
export const SET_USER_INFO = 'user/SET';
export const RESET_USER_INFO = 'user/SET';

interface IAction<T> {
  payload?: T;
  type: string;
}

// Reducer
const userInitial: CustomerDTO = {};
export default (state: CustomerDTO = userInitial, action: IAction<CustomerDTO>): CustomerDTO => {
  switch (action.type) {
    case SET_USER_INFO:
      return { ...state, ...action.payload };
    case RESET_USER_INFO:
      return userInitial;
    default:
      return state;
  }
};

// Action Creators
export const setUserInfo = (payload: CustomerDTO) => {
  return {
    type: SET_USER_INFO,
    payload,
  };
};
export const resetUserInfo = (payload: CustomerDTO) => {
  return {
    type: RESET_USER_INFO,
  };
};
