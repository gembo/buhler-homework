export const machineStates = ['running', 'alarm', 'warning'] as const;
export type MachineStatus = (typeof machineStates)[number];

export type Machine = {
  icon: string;
  name: string;
  status: MachineStatus;
};

export type LineMachine = {
  lineMachine: Machine[];
};

export const initialLineMachineState: LineMachine = {
  lineMachine: [
    {
      icon: 'scale',
      name: 'scale',
      status: 'running',
    },
    {
      icon: 'attach_file',
      name: 'attacher',
      status: 'alarm',
    },
    {
      icon: 'package_2',
      name: 'packer',
      status: 'warning',
    },
    {
      icon: 'bottom_panel_close',
      name: 'closer',
      status: 'running',
    },
  ],
};
