import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ScenarioData } from '../../../shared/models/scenario.data.model';
import { Scenarios } from '../../../shared/data/scenarios.data';
import { CampaignsData } from '../../../shared/data/campaigns.data';

@Component({
  selector: 'app-select-scenario',
  templateUrl: './select-scenario.component.html',
  styleUrls: ['./select-scenario.component.scss'],
})
export class SelectScenarioComponent implements OnInit, OnChanges {
  form: FormGroup;
  nextPage = 'selInv0';
  previousPage = 'selCampaign';
  @Input() selScenario: ScenarioData;
  @Input() selCampaign: number;
  @Output() command = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selScenario || changes.selCampaign) {
      this.createForm();
    }
  }

  createForm() {
    const formGroup = {};

    this.selScenario.questions.forEach((formControl: any) => {
      formGroup[formControl.controlName] = new FormControl(formControl.active);
    });

    this.form = new FormGroup(formGroup);
  }

  get questions() {
    return this.selScenario.questions;
  }

  get scenarios() {
    const campaignCode = CampaignsData[this.selCampaign].code;
    return Scenarios.filter(scn => scn.campaignCode === campaignCode);
  }

  onCommand(commandId: string, id: any, data: any = null) {
    const payload = {
      commandId,
      id,
      data: this.form.getRawValue(),
    };
    this.command.emit(payload);
    this.createForm();
  }
}
