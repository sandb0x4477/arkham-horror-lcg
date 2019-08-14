import { Component, Output, EventEmitter, Input } from '@angular/core';

import { CampaignData } from '../../../shared/models/campign.data.model';
import { CampaignsData } from '../../../shared/data/campaigns.data';

@Component({
  selector: 'app-select-campaign',
  templateUrl: './select-campaign.component.html',
  styleUrls: ['./select-campaign.component.scss'],
})
export class SelectCampaignComponent {
  @Input() selCampaign: number;
  @Output() command = new EventEmitter<any>();

  nextPage = 'selScenario';
  campaigns: CampaignData[] = CampaignsData;

  onCommand(commandId: string, id: string) {
    const payload = {
      commandId,
      id,
    };
    this.command.emit(payload);
  }
}
