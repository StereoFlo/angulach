import { Component, OnInit } from '@angular/core';
import {DvachService} from '../../services/dvach.service';
import {BoardList} from '../../models/boardList';
import {Title} from '@angular/platform-browser';


@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {

  list: BoardList[];

  constructor(private dvachService: DvachService, private titleService: Title) {
    titleService.setTitle('Angulach | All boards');
  }

  ngOnInit(): void {
    this.dvachService.getBoardList().subscribe(data => {
        this.list = data;
    });
  }

}
