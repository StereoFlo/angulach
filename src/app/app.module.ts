import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardListComponent } from './components/board-list/board-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BoardShowComponent } from './components/board-show/board-show.component';
import { ThreadShowComponent } from './components/thread-show/thread-show.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

import { NgxSlideshowModule } from 'ngx-slideshow';
import {PostShowComponent} from './components/post-show/post-show.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardListComponent,
    BoardShowComponent,
    ThreadShowComponent,
    PostShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatCardModule,
    MatBadgeModule,
    MatDividerModule,
    MatIconModule,
    NgxSlideshowModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {}
