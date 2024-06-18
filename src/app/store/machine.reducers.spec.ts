import { setMachineStatus } from './machine.actions';
import { lineMachineFeature } from './machine.reducers';
import { LineMachine } from './machine.state';

describe('Line machine reducer', () => {
  it('setMachineStatus should set the status of the specified machine', () => {

    const action = setMachineStatus({
      machineName: 'testMachineOne',
      status: 'alarm',
    });

    const initialState: LineMachine = {
      lineMachine: [
        { name: 'testMachineOne', icon: 'test_icon', status: 'running' },
        { name: 'testMachineTwo', icon: 'test_icon', status: 'warning' },
      ],
    };

    const expectedState: LineMachine = {
      lineMachine: [
        { name: 'testMachineOne', icon: 'test_icon', status: 'alarm' },
        { name: 'testMachineTwo', icon: 'test_icon', status: 'warning' },
      ],
    };

    expect(lineMachineFeature.reducer(initialState, action)).toEqual(expectedState);
  });
});