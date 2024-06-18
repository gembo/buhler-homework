import { Component, Input } from '@angular/core';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { Machine } from '../store/machine.state';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [StatusBarComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() public lineMachine: Machine[] = [];

  public dateTime = Intl.DateTimeFormat('cs-CZ', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date());

  public onAccountButtonClick(): void {
    console.log('Account button clicked');
  }
}
