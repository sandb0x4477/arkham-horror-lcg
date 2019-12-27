import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProgressStateModel } from '../../../store';

@Component({
  selector: 'app-progress-card',
  templateUrl: './progress-card.component.html',
  styleUrls: ['./progress-card.component.scss'],
})
export class ProgressCardComponent implements OnInit {
  @Input() progress: ProgressStateModel;
  @Output() command = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  onCommand(command: string) {
    this.command.emit(command);
  }
}
