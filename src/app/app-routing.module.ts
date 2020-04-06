import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BoardListComponent} from './components/board-list/board-list.component';
import {BoardShowComponent} from './components/board-show/board-show.component';


const routes: Routes = [
  {
    path: '', component: BoardListComponent
  },
  {
    path: 'board/:id', component: BoardShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
