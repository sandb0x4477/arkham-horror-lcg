import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ScenarioData } from '../../../shared/models/scenario.data.model';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  nextPage = 'selCampaign';
  previousPage = 'selInv1';
  @Input() selScenario: ScenarioData;
  @Input() introText: string;
  @Output() command = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  onCommand(commandId: string, id: string) {
    const payload = {
      commandId,
      id,
    };
    this.command.emit(payload);
  }
}
