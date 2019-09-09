import { Component, OnInit } from '@angular/core';
import { GameService } from '../../app/services/game.service';

export interface Game {
  gamePk: string;
  teams: any[];
}

@Component({
  selector: 'app-game-score',
  templateUrl: './game-score.component.html',
  styleUrls: ['./game-score.component.css']
})
export class GameScoreComponent implements OnInit {

  games: any[] = [];
  selectedGameIndex: any;

  constructor(
    private gameService: GameService
  ) {
    
  }

  ngOnInit() {

    this.selectedGameIndex = 0;

    this.gameService.getGames()
          .subscribe(
            response => {
              console.log(response);

              this.games = response['dates'][0].games;

              console.log(this.games);

            },
            error => {
              /* this.errorMessage = <any>error;
              this.openSnackBar('Query failed due to web service error. Please try again later.', 'OK', 8000);*/
            }
          ); 

  }

  gameChanger (event: any) {
    //update the ui
    this.selectedGameIndex = event.target.selectedIndex;
  }

}