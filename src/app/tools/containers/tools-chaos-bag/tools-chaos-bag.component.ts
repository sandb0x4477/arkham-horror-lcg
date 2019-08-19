import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';

import { ChaosTokens } from '../../../shared/data/settings';
import { SetChaosBag } from '../../../play-area/store/arkham.actions';

@Component({
  selector: 'app-tools-chaos-bag',
  templateUrl: './tools-chaos-bag.component.html',
  styleUrls: ['./tools-chaos-bag.component.scss'],
})
export class ToolsChaosBagComponent implements OnInit {
  @Input() chaosBag: number[];

  constructor(private store: Store) {}

  ngOnInit() {}

}
