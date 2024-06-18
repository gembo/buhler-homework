import { createAction, props } from '@ngrx/store';
import { MachineStatus } from './machine.state';

export const setMachineStatus = createAction(
  'setMachineStatus',
  props<{ machineName: string; status: MachineStatus }>(),
);
