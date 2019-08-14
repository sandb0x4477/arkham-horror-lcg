import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Card } from '../../shared/models/card.model';

@Injectable()
export class CardsDbService {
  arkhamDbURL = 'https://arkhamdb.com/api/';
  localDB = environment.mongoDB;

  constructor(private http: HttpClient) { }

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
}
