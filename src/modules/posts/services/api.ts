import { Api } from '@services/api';

export default function postApi() {
  const _api = new Api();

  const getPostList = async (page, perPage) => {
    const res = await _api.get(
      `categories/startups/posts?page=${page}&per_page=${perPage}`
    );
    return res;
  };

  const getPost = async slug => {
    const res = await _api.get(`posts/${slug}`);
    return res;
  };

  return {
    getPostList,
    getPost,
  };
}
