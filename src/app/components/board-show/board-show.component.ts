import {Component, OnInit} from '@angular/core';
import {DvachService} from '../../services/dvach.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Board} from '../../models/board';

@Component({
  selector: 'app-board-show',
  templateUrl: './board-show.component.html',
  styleUrls: ['./board-show.component.scss']
})
export class BoardShowComponent implements OnInit {

  board: Board;
  isLoading = true;

  constructor(private dvachService: DvachService, private route: ActivatedRoute, private router: Router) {
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
      this.isLoading = false;
    });
  }
}
