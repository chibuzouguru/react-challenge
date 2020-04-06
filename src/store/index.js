import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'ducks/reducers/index';
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunk));
