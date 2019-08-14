import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  @Input() navBarConfig: any;
  @Input() countedDecks: any;
  @Input() activeItem: string;
  @Output() command = new EventEmitter<any>();

  onCdkDrop(event: CdkDragDrop<string[]>) {
    const payload = {
      commandId: 'cdkDrop',
      event
    };
    this.command.emit(payload);
  }

  onNavItemClick(navItemId: string, navBarId: string) {
    const payload = {
      commandId: 'navItemSwitch',
      navItemId,
      navBarId,
    };
    this.command.emit(payload);
  }

  getCount(navItemId: string) {
    const navName = navItemId.substring(0, navItemId.length - 4);
    return this.countedDecks[navName] || '-';
  }
}
