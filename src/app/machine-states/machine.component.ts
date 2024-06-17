import { Component, Input } from '@angular/core';

type MachineStatus = 'running' | 'alarm' | 'warning';

export type Machine = {
  icon: string;
  name: string;
  status: MachineStatus;
}

@Component({
  selector: 'machine-status',
  templateUrl: './machine.component.html',
})
export class MachineComponent {
  @Input() public condensed = false;
  @Input() public machine: Machine | undefined;

  public getBgColourClass(): string {
    switch (this.machine?.status) {
      case 'alarm':
        return 'bg-red-600';
      case 'warning':
        return 'bg-orange-400';
      default:
        return 'bg-zinc-100';
    }
  }

  public getStatusIcon() {
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
