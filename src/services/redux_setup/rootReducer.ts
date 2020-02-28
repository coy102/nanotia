import { combineReducers } from 'redux';
import post from '@modules/posts/dux/reducers';

const reducers = combineReducers({
  post,
});

export default reducers;
