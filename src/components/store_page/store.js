// store.js
import { createStore  } from 'redux';
import basketReducer from './reducers/basketReducer'; // Create this file later

const store = createStore(basketReducer);

export default store;
