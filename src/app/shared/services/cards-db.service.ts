import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Card } from '../models/card.model';
import { tap, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CardsDbService {
  arkhamDbURL = 'https://arkhamdb.com/api/';
  localDB = environment.mongoDB;

  constructor(private http: HttpClient) {}

  getPublicDeck(code: any): Observable<any> {
    return this.http.get<any>(this.arkhamDbURL + 'public/decklist/' + code);
  }

  getCardsFromDb(ids: string[]): Observable<Card[]> {
    let params = new HttpParams();
    ids.forEach((id: string) => {
      params = params.append(`id`, id);
    });
    return this.http.get<Card[]>(this.localDB + '/cards', { params });
  }

  getCardsFromQuery(query: string): Observable<Card[]> {
    let params = new HttpParams();
    params = params.append(`search`, query);
    return this.http.get<Card[]>(this.localDB + '/cards/search', { params });
  }

  postNewGame(payload: any): Observable<any> {
    // campaignid: req.body.campaignid,
    // scenarioid: req.body.scenarioid,
    // campaignname: req.body.campaignname,
    // scenarioname: req.body.scenarioname,
    // difficulty: req.body.difficulty,
    return this.http.post(this.localDB + '/stats', payload);
  }

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
