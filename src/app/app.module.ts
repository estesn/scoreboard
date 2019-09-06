import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameScoreComponent } from './game-score/game-score.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GameService } from './services/games-service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    GameScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
