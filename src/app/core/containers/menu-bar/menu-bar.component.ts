import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  @Select(AppState.isGameInProgress) isGameInProgress$: Observable<boolean>;
  @Select(AppState.campaignName) campaignName$: Observable<string>;
  @Select(AppState.scenarioName) scenarioName$: Observable<string>;

  constructor() { }

  ngOnInit() {
  }

}
