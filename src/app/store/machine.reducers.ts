import { createFeature, createReducer, on } from '@ngrx/store';
import { initialLineMachineState } from './machine.state';
import { setMachineStatus } from './machine.actions';

export const lineMachineFeature = createFeature({
  name: 'lineMachine',
  reducer: createReducer(
    initialLineMachineState,
    on(setMachineStatus, (state, { machineName, status }) => ({
      ...state,
      lineMachine: state.lineMachine.map((machine) =>
        machine.name === machineName ? { ...machine, status } : machine,
      ),
    })),
  ),
});
