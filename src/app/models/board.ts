export class Board {
  id: string;
  // tslint:disable-next-line:variable-name
  threads_count: number;
  threads: [
    {
      subject: string;
      comment: string;
      timestamp: number;
      lasthit: number;
      post_count: number;
      score: number;
      num: number;
      views: number;
    }
  ];
}
