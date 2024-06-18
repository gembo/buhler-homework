import { Component, Input } from '@angular/core';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { Machine } from '../store/machine.state';
import { DateTimeComponent } from './date-time/date-time.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [StatusBarComponent, DateTimeComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() public lineMachine: Machine[] = [];

  public onAccountButtonClick(): void {
    console.log('Account button clicked');
  }
}
