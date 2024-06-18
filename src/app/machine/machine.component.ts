import { Component, Input } from '@angular/core';
import { Machine } from '../store/machine.state';
import { CommonModule } from '@angular/common';
import { splitCamelCaseString } from '../utils/string';

@Component({
  selector: 'machine-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './machine.component.html',
})
export class MachineComponent {
  @Input() public condensed = false;
  @Input() public machine: Machine | undefined;

  public splitCamelCaseString = splitCamelCaseString;

  public get bgColourClass(): string {
    switch (this.machine?.status) {
      case 'alarm':
        return 'bg-red-600';
      case 'warning':
        return 'bg-orange-400';
      default:
        return 'bg-zinc-100';
    }
  }

  public get statusIcon(): string {
    switch (this.machine?.status) {
      case 'alarm':
        return 'error';
      case 'warning':
        return 'warning';
      default:
        return 'settings_backup_restore';
    }
  }
}
