import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngxs/store';

import { AppState } from '../../core/store/app.state';

@Injectable({
  providedIn: 'root',
})
export class InProgressGuard implements CanActivate {
  constructor(private router: Router, private store: Store) {}

  canActivate(): boolean {
    const inProgress = this.store.selectSnapshot(AppState.isGameInProgress);

    if (inProgress) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
