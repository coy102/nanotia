import { AxiosResponse } from 'axios';

export type PostResponse = AxiosResponse<PostsResult>;

export interface PostsResult {
  posts: Array<Post>;
}

export interface Post {
  id: string;
  date: string;
  date_gmt: string;
  guid: string;
  modified: string;
  modified_gmt: string;
  title: string;
  slug: string;
  status: string;
  type: string;
  template: string;
  link: string;
  content: string;
  excerpt: string;
  author: Author;
  editor: string;
  comment_status: string;
  comments_count: number;
  featured_image: Featuredimage;
  seo: Seo;
  categories: Array<Category>;
  tags: Array<Category>;
  companies: Array<any>;
  permissions: Permissions;
  is_review_post: string;
  internal_talk: boolean;
  review?: any;
  featured_video: Featuredvideo;
  ga_type: string;
  external_url: string;
  client_logo: string;
  client_name: string;
}

interface Featuredvideo {
  host: string;
  url: string;
}

interface Permissions {
  can_edit: boolean;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
  parent: string;
}

interface Seo {
  title: string;
  description: string;
  image: string;
}

interface Featuredimage {
  title: string;
  caption: string;
  description: string;
  source: string;
  attachment_meta: Attachmentmeta;
}

interface Attachmentmeta {
  width: number;
  height: number;
  sizes: Sizes;
}

interface Sizes {
  thumbnail: Thumbnail;
  medium: Thumbnail;
  medium_large: Thumbnail;
}

interface Thumbnail {
  width: number;
  height: number;
  url: string;
}

interface Author {
  id: string;
  id_techinasia: string;
  first_name: string;
  last_name: string;
  display_name: string;
  description: string;
  roles: Array<string>;
  registered_date: string;
  avatar_url: string;
  author_url: string;
  twitter: string;
  facebook: string;
  google: string;
  comments_count: number;
  contributed_count: number;
}
