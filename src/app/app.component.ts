import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LetDirective } from '@ngrx/component';
import { HeaderComponent } from './header/header.component';
import { LineMachineComponent } from './line-machine/line-machine.component';
import { Machine } from './store/machine.state';
import { LineMachineFacade } from './store/machine.facade';
import { Observable } from 'rxjs';
import { StatusToggleFormComponent } from './status-toggle-form/status-toggle-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LineMachineComponent,
    HeaderComponent,
    StatusToggleFormComponent,
    LetDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly facade = inject(LineMachineFacade);

  protected lineMachine$: Observable<Machine[]>;

  constructor() {
    this.lineMachine$ = this.facade.lineMachine$;
  }
}
