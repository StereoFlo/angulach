import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardListComponent } from './components/board-list/board-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BoardShowComponent } from './components/board-show/board-show.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardListComponent,
    BoardShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
