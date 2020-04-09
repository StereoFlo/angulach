import {Post} from './post';

export class Thread {
  title: string;
  // tslint:disable-next-line:variable-name
  post_count: number;
  // tslint:disable-next-line:variable-name
  unique_posters: number;
  // tslint:disable-next-line:variable-name
  thread_count: number;
  posts: Post[];
}
