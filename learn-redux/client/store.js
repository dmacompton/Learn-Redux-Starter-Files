import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// reducer
import rootReducer from './reducers/index';

// default data
import comments from './data/comments';
import posts from './data/posts';

//create an obj for default data
const defaultState = {
  posts,
  comments
};

// создание стора из редьюсера и начально
const store = createStore(rootReducer, defaultState); 

export const history = syncHistoryWithStore(browserHistory, store);

export default store;