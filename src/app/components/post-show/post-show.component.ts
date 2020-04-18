import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/post';

@Component({
  selector: 'app-post-show',
  templateUrl: './post-show.component.html',
  styleUrls: ['./post-show.component.scss']
})
export class PostShowComponent implements OnInit {

  private linkPattern = /<a href="\/(\w+)\/res\/(\d+)\.html#(\d+)" class="post-reply-link" data-thread="\d+" data-num="\d+">*.+<\/a><br>(.*)/g;
  private namePattern = /^.*ID:(.*)/;

  @Input() post: Post;

  ngOnInit(): void {
    if (this.post) {
      const comment = this.post.comment;
      const answerTo = this.post.comment;
      const boardId = this.post.comment;
      const threadId = this.post.comment;
      this.post.comment = this.getVar(comment, '$4');
      this.post.answerTo = +this.getVar(answerTo, '$3');
      this.post.boardId = this.getVar(boardId, '$1');
      this.post.threadId = +this.getVar(threadId, '$2');
      this.post.name = this.post.name.replace(this.namePattern, '$1');
    }
  }

  private getVar(from: string, what: string): any {
    return from.replace(this.linkPattern, what);
  }
}
