import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/post';
import {reflectIdentifierOfDeclaration} from '@angular/compiler-cli/src/ngtsc/reflection';

@Component({
  selector: 'app-post-show',
  templateUrl: './post-show.component.html',
  styleUrls: ['./post-show.component.scss']
})
export class PostShowComponent implements OnInit {

  @Input() post: Post;

  ngOnInit(): void {
    if (this.post) {
      const comment = this.post.comment;
      const answerTo = this.post.comment;
      const boardId = this.post.comment;
      const threadId = this.post.comment;
      this.post.comment = comment.replace(/<a href="\/(\w+)\/res\/(\d+)\.html#(\d+)" class="post-reply-link" data-thread="\d+" data-num="\d+">*.+<\/a><br>(.*)/g, '$4');
      this.post.answerTo = +answerTo.replace(/<a href="\/(\w+)\/res\/(\d+)\.html#(\d+)" class="post-reply-link" data-thread="\d+" data-num="\d+">*.+<\/a><br>(.*)/g, '$3');
      this.post.boardId = boardId.replace(/<a href="\/(\w+)\/res\/(\d+)\.html#(\d+)" class="post-reply-link" data-thread="\d+" data-num="\d+">*.+<\/a><br>(.*)/g, '$1');
      this.post.threadId = +threadId.replace(/<a href="\/(\w+)\/res\/(\d+)\.html#(\d+)" class="post-reply-link" data-thread="\d+" data-num="\d+">*.+<\/a><br>(.*)/g, '$2');
    }
  }

}
