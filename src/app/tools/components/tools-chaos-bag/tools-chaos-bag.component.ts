import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import samplesize from 'lodash.samplesize';

import { ChaosTokens } from '../../../shared/data/settings';
import { RemoveFromChaosBag, AddToChaosBag } from '../../../store';

@Component({
  selector: 'app-tools-chaos-bag',
  templateUrl: './tools-chaos-bag.component.html',
  styleUrls: ['./tools-chaos-bag.component.scss'],
})
export class ToolsChaosBagComponent implements OnInit {
  form: FormGroup;
  @Input() chaosBag: number[];
  // tokens = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  tokens = Object.values(ChaosTokens).filter(value => typeof value === 'number') as number[];

  drawnTokens: number[] = [0, 1];

  constructor(private store: Store, private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.form = this.formBuilder.group({
      query: [5, [Validators.required]],
    });
  }

  onSubmit() {
    const noOfTokens = this.form.getRawValue();
    console.log('noOfTokens => ', noOfTokens);
    this.drawnTokens = samplesize(this.chaosBag, noOfTokens.query);
  }

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
