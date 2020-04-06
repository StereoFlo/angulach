export class Board {
  id: string;
  threadsCount: number;
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
