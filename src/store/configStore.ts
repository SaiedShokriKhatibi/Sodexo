import { createStore, Store } from 'redux';
import rootReducers from '../store/ducks/reducer';
// import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';

const configStore = (): Store => {
  return createStore(rootReducers);
  // return createStore(rootReducers, devToolsEnhancer({}));
};

export default configStore;
