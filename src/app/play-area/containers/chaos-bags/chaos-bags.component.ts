import { Component, OnInit, Input } from '@angular/core';
import random from 'lodash.random';

import { ChaosTokens } from '../../../shared/data/settings';

@Component({
  selector: 'app-chaos-bags',
  templateUrl: './chaos-bags.component.html',
  styleUrls: ['./chaos-bags.component.scss'],
})
export class ChaosBagsComponent implements OnInit {
  @Input() chaosBag: number[];

  currentChaosToken = [0, 0];
  chaosTokenClass = [`chaos-bag chaos-token chaos-${ChaosTokens[0]}`, `chaos-bag chaos-token chaos-${ChaosTokens[0]}`];

  constructor() {}

  ngOnInit() {}

  sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
  }

  async generateChaosToken(id: number = 0) {
    let times = 10;
    do {
      times--;
      this.currentChaosToken[id] = random(
        0,
        this.chaosBag.length - 1,
      );
      this.chaosTokenClass[id] = this.getCss(this.currentChaosToken[id], times > 0);
      await this.sleep(70);
    } while (times > 0);
  }

  getCss(chaosToken: number, rolling: boolean = false): string {
    let css = `chaos-bag chaos-token chaos-${
      ChaosTokens[this.chaosBag[chaosToken]]
    }`;

    if (rolling) {
      css += ' rolling';
    }
    return css;
  }
}
