import { Component, Input } from '@angular/core';
import { MachineComponent } from '../machine/machine.component';
import { Machine } from '../store/machine.state';

@Component({
  selector: 'line-machine',
  standalone: true,
  imports: [MachineComponent],
  templateUrl: './line-machine.component.html',
})
export class LineMachineComponent {
  @Input() lineMachine: Machine[] = [];
}
