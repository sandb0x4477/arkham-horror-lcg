import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';

import { ToolsState } from '../store/tools.state';
import { ArkhamState } from '../../play-area/store/arkham.state';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent implements OnInit {
  constructor(private store: Store) {}

  @Select(ToolsState.loading) loading$: Observable<boolean>;
  @Select(ToolsState.activeTab) activeTab$: Observable<string>;
  @Select(ArkhamState.chaosBag) chaosBag$: Observable<number[]>;

  ngOnInit() {
    this.chaosBag$.subscribe(res => {
      console.log(res);
    });
  }
}
