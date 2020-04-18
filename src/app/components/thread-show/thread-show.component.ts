import { Component, OnInit } from '@angular/core';
import {DvachService} from '../../services/dvach.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Thread} from '../../models/thread';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-thread-show',
  templateUrl: './thread-show.component.html',
  styleUrls: ['./thread-show.component.scss']
})
export class ThreadShowComponent implements OnInit {

  thread: Thread;
  boardId: string;

  constructor(private dvachService: DvachService, private route: ActivatedRoute, private router: Router, private titleService: Title) {

  }

  ngOnInit(): void {
    if (!this.route.snapshot.params.boardId || !this.route.snapshot.params.threadId) {
      this.router.navigate(['/']);
      return;
    }

    this.thread = new Thread();
    this.boardId = this.route.snapshot.params.boardId;

    this.dvachService.getThread(this.route.snapshot.params.boardId, this.route.snapshot.params.threadId).subscribe(thread => {
      this.thread = thread;
      this.titleService.setTitle('Angulach | /' + this.boardId + ' | ' + thread.title);
    });
  }

}
