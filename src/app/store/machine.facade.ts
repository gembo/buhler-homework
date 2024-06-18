import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Machine, MachineStatus } from './machine.state';
import { lineMachineFeature } from './machine.reducers';
import { setMachineStatus } from './machine.actions';

@Injectable({ providedIn: 'root' })
export class LineMachineFacade {
  private store = inject(Store);

  get lineMachine$(): Observable<Machine[]> {
    return this.store.select(lineMachineFeature.selectLineMachine);
  }

  setMachineStatus(machineName: string, status: MachineStatus): void {
    this.store.dispatch(setMachineStatus({ machineName, status }));
  }
}
