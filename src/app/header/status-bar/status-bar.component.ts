import { Component, Input } from '@angular/core';
import { MachineComponent } from '../../machine/machine.component';
import { Machine } from '../../store/machine.state';

@Component({
  selector: 'status-bar',
  standalone: true,
  imports: [MachineComponent],
  templateUrl: './status-bar.component.html',
})
export class StatusBarComponent {
  @Input() lineMachine: Machine[] = [];
}
