import { createSelector } from 'reselect';

export default function postSelector() {
  const postState = () => state => state.post;

  const selectPosts = () =>
    createSelector(postState(), state => state.listingPost);

  return {
    selectPosts,
  };
}
