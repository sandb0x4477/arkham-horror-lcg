import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-invs',
  templateUrl: './list-invs.component.html',
  styleUrls: ['./list-invs.component.scss'],
})
export class ListInvsComponent {
  @Input() invsListSet: string[];
  @Input() id: number;
  @Input() selectedInv: string;
  @Output() command = new EventEmitter<any>();

  onCommand(commandId: string, code: string) {
    // console.log({ command, code, id: this.id });
    const payload = {
      commandId,
      code,
      id: this.id,
    };
    this.command.emit(payload);
  }
}
