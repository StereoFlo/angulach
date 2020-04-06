import { Component, OnInit } from '@angular/core';
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

  constructor(private dvachService: DvachService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (!this.route.snapshot.params.id) {
      this.router.navigate(['/']);
      return;
    }

    this.dvachService.getBoardById(this.route.snapshot.params.id).subscribe(board => {
      this.board = board;
    });
  }

}
