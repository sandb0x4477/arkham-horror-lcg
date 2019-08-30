import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { TestModule } from '../test.module';
import { environment } from '../../../environments/environment';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: TestModule
})
export class TestService {
  localDB = environment.mongoDB;

  constructor(private http: HttpClient) { }

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
