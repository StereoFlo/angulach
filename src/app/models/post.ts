export class Post {
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
  ]|null;
  parent: number|null;
  boardId: string;
  threadId: number;
}
