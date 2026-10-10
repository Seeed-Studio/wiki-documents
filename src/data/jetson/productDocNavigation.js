const RUGGED_J401_GETTING_STARTED = '/jetson/recomputer_rugged_j401/getting_started/';

export const ruggedJ401DocNav = {
  ariaLabel: 'reComputer Rugged J40 documentation',
  items: [
    {
      to: RUGGED_J401_GETTING_STARTED,
      label: 'Quick Start',
      hint: 'Overview & flash',
    },
    {
      to: '/jetson/recomputer_rugged_j401/hardware_and_interface_usage/',
      label: 'Hardware & I/O',
      hint: 'M12 interfaces',
    },
  ],
  application: {
    to: `${RUGGED_J401_GETTING_STARTED}#applications`,
    label: 'Application',
    hint: 'Use cases & benchmarks',
    activePaths: ['/jetson/recomputer_rugged_j401/industrial_vision/'],
  },
};
