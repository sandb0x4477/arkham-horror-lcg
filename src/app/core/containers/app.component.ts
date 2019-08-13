import { Component } from '@angular/core';

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
export class AppComponent {}
