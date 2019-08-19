import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Card } from '../../shared/models/card.model';

@Injectable()
export class CardsDbService {
  localDB = environment.mongoDB;

  constructor(private http: HttpClient) { }

  getCardsFromQuery(query: string): Observable<Card[]> {
    let params = new HttpParams();
    params = params.append(`search`, query);
    return this.http.get<Card[]>(this.localDB + '/cards/search', { params });
  }
}
