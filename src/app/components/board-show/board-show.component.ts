import {Component, OnInit} from '@angular/core';
import {DvachService} from '../../services/dvach.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Board} from '../../models/board';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-board-show',
  templateUrl: './board-show.component.html',
  styleUrls: ['./board-show.component.scss']
})
export class BoardShowComponent implements OnInit {

  board: Board;
  isLoading = true;

  constructor(private dvachService: DvachService, private route: ActivatedRoute, private router: Router, private titleService: Title) {
    titleService.setTitle('Angulach | /' + this.route.snapshot.params.id);
  }

  ngOnInit(): void {
    if (!this.route.snapshot.params.id) {
      this.router.navigate(['/']);
      return;
    }

    this.board = new Board();

    this.loadBoard(this.route.snapshot.params.id);
  }

  public loadBoard(boardId: string): void {
    this.isLoading = true;
    this.dvachService.getBoardById(boardId).subscribe(board => {
      this.board = board;

      for (let i = 0; i < board.threads.length; i++) {
        const comment = board.threads[i].comment;
        board.threads[i].comment = comment.replace(/(<a href="\/(\w+)\/res\/(\d+)\.html#(\d+)" class="post-reply-link">*.+<\/a>)/g, '<a href=\'/board/$2/thread/$3\'>$4</a>');
        const comment2 = board.threads[i].comment;
        board.threads[i].comment = comment2.replace(/(http?s:&#47;&#47;2ch.[a-z]{2,3}&#47;([a-z]+)&#47;(?:arch&#47;\d{4}-\d{1,2}-\d{1,2}&#47;)?res&#47;(\d+).html)/g, '<a href=\'/board/$2/thread/$3\'>$3</a>');
      }

      this.isLoading = false;
    });
  }
}
