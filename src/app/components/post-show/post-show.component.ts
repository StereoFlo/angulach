import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/post';

@Component({
  selector: 'app-post-show',
  templateUrl: './post-show.component.html',
  styleUrls: ['./post-show.component.scss']
})
export class PostShowComponent implements OnInit {

  @Input() post: Post;

  ngOnInit(): void {
    if (this.post) {
      this.post.comment = this.post.comment.replace(/<a href="\/(\w+)\/res\/(\d+)\.html#(\d+)" class="post-reply-link" data-thread="\d+" data-num="\d+">*.+<\/a><br>(.*)/g, '<a href="/board/$1/thread/$2#$3">>>$3</a> | $4');
    }
  }

}
