import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { throwError } from 'rxjs';
//import { Subject } from 'rxjs/Subject';


@Injectable()
export class GameService {

  constructor(private _http: Http) { }

  public getGames(): Observable<any[]> {

    return this._http.get('http://statsapi.mlb.com/api/v1/schedule/games/?sportId=1&date=09/05/2019')
      .map((response: Response) => <any[]>response.json())
      // .do(data => console.log('Samples data: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return throwError(JSON.stringify(error.json()) || 'Server error');
  }

}
