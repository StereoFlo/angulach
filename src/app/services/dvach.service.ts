import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BoardList} from '../models/boardList';
import {Board} from '../models/board';
import {Thread} from '../models/thread';

@Injectable({
  providedIn: 'root'
})
export class DvachService {

  constructor(private httpClient: HttpClient) {
  }

  public getBoardList(): Observable<BoardList[]> {
    return this.httpClient.get<BoardList[]>('http://localhost/v1/board');
  }

  public getBoardById(boardId: string): Observable<Board> {
    return this.httpClient.get<Board>('http://localhost/v1/board/' + boardId);
  }

  public getThread(boardId: string, threadId: number): Observable<Thread> {
    return this.httpClient.get<Thread>('http://localhostпш/v1/board/' + boardId + '/' + threadId);
  }
}
