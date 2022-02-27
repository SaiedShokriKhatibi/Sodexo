// Actions
export const TOGGLE = 'drawer/TOGGLE';

interface IAction {
  payload?: any;
  type: string;
}

type ToggleState = boolean;

// Reducer
export default (state: ToggleState = true, action: IAction): ToggleState => {
  switch (action.type) {
    case TOGGLE:
      return !state;
    default:
      return state;
  }
};

// Action Creators
export const toggleDrawer = () => {
  return { type: TOGGLE };
};
