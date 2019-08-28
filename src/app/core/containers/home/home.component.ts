import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';

import { SwitchPage } from '../../../store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private store: Store) {}

  ngOnInit() {}

  onClick() {
    this.store.dispatch(new SwitchPage({ commandId: 'switchPage', id: 'selCampaign' }));
    this.router.navigate(['/newgame']);
  }
}
