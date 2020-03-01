import { generateActions } from '@utils/helpers/duxAction';

export const GET_POSTS = generateActions('app', 'GET_POSTS');
export const GET_MORE_POSTS = generateActions('app', 'GET_MORE_POSTS');
export const GET_POST = generateActions('app', 'GET_POST');
