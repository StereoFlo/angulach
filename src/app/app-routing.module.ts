import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BoardListComponent} from './components/board-list/board-list.component';
import {BoardShowComponent} from './components/board-show/board-show.component';
import {ThreadShowComponent} from './components/thread-show/thread-show.component';


const routes: Routes = [
  {
    path: '', component: BoardListComponent
  },
  {
    path: 'board/:boardId/thread/:threadId', component: ThreadShowComponent
  },
  {
    path: 'board/:id', component: BoardShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
