export class Thread {
  title: string;
  // tslint:disable-next-line:variable-name
  post_count: number;
  // tslint:disable-next-line:variable-name
  unique_posters: number;
  // tslint:disable-next-line:variable-name
  thread_count: number;
  posts: [
    {
      id: number;
      name: string;
      num: number;
      comment: string;
      files: [
        {
          display_name: string;
          height: number;
          width: number;
          size: number;
          path: string;
          thumbnail: string;
        }
      ]|null
    }
  ];
}
