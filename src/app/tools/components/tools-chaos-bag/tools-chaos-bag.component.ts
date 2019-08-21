import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';

import { ChaosTokens } from '../../../shared/data/settings';
import { RemoveFromChaosBag, AddToChaosBag } from '../../../store';

@Component({
  selector: 'app-tools-chaos-bag',
  templateUrl: './tools-chaos-bag.component.html',
  styleUrls: ['./tools-chaos-bag.component.scss'],
})
export class ToolsChaosBagComponent implements OnInit {
  @Input() chaosBag: number[];
  // tokens = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  tokens = Object.values(ChaosTokens).filter(value => typeof value === 'number') as number[];

  constructor(private store: Store) {}

  ngOnInit() {}

  onRemove(tokenId: number) {
    console.log('tokenId => ', tokenId);
    this.store.dispatch(new RemoveFromChaosBag(tokenId));
  }

  onAdd(tokenId: number) {
    this.store.dispatch(new AddToChaosBag(tokenId));
  }

  getCss(chaosToken: number): string {
    const css = `chaos-bag chaos-token chaos-${ChaosTokens[chaosToken]}`;
    return css;
  }
}
