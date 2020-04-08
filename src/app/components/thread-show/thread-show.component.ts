import { Component, OnInit } from '@angular/core';
import {DvachService} from '../../services/dvach.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Thread} from '../../models/thread';

@Component({
  selector: 'app-thread-show',
  templateUrl: './thread-show.component.html',
  styleUrls: ['./thread-show.component.scss']
})
export class ThreadShowComponent implements OnInit {

  thread: Thread;

  constructor(private dvachService: DvachService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (!this.route.snapshot.params.boardId || !this.route.snapshot.params.threadId) {
      this.router.navigate(['/']);
      return;
    }

    this.thread = new Thread();

    this.dvachService.getThread(this.route.snapshot.params.boardId, this.route.snapshot.params.threadId).subscribe(thread => {
      const posts = [];

      thread.posts.map(post => {
        post.comment = post.comment.replace(/<a href="\/(\w+)\/res\/(\d+)\.html#(\d+)" class="post-reply-link" data-thread="\d+" data-num="\d+">*.+<\/a><br>(.*)/g, '<a href="/board/$1/thread/$2#$3">>>$3</a> | $4');
        posts.push(post);
      });

      this.thread = thread;
      this.thread.posts = posts;

    });
  }

}
