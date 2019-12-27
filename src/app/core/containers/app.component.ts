import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Store } from '@ngxs/store';
import { SetIsPlayPage } from '../../store';

@Component({
  selector: 'app-root',
  template: `
    <div class="main-screen-wrapper">
    	<div>
    		<app-menu-bar></app-menu-bar>
    	</div>
    	<div>
    		<router-outlet></router-outlet>
    	</div>
    </div>`,
  styles: [
    `
    .main-screen-wrapper {
        display: grid;
        grid-template-rows: 36px auto;
    }`,
  ],
})
export class AppComponent {
  constructor(private router: Router, private store: Store) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('event => ', event);
        if (event.url === '/play') {
          this.store.dispatch(new SetIsPlayPage(true));
        } else {
          this.store.dispatch(new SetIsPlayPage(false));
        }
      }
    });
  }
}
