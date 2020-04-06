import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BoardList} from '../models/boardList';
import {Board} from '../models/board';

@Injectable({
  providedIn: 'root'
})
export class DvachService {

  constructor(private httpClient: HttpClient) {
  }

  public getBoardList(): Observable<BoardList[]> {
    return this.httpClient.get<BoardList[]>('http://angulach.lan/v1/board');
  }

  public getBoardById(boardId: string): Observable<Board> {
    return this.httpClient.get<Board>('http://angulach.lan/v1/board/' + boardId);
  }
}
