const RUGGED_J401_GETTING_STARTED = '/jetson/recomputer_rugged_j401/getting_started/';

const text = (en, cn, ja, es, ptBr) => ({
  en,
  cn,
  ja,
  es,
  'pt-br': ptBr,
});

export const ruggedJ401DocNav = {
  ariaLabel: text(
    'reComputer Rugged J40 documentation',
    'reComputer Rugged J40 文档',
    'reComputer Rugged J40 ドキュメント',
    'Documentación de reComputer Rugged J40',
    'Documentação do reComputer Rugged J40',
  ),
  items: [
    {
      to: RUGGED_J401_GETTING_STARTED,
      label: text('Quick Start', '快速开始', 'クイックスタート', 'Inicio rápido', 'Início rápido'),
      hint: text('Overview & flash', '概览与烧录', '概要と書き込み', 'Resumen y flasheo', 'Visão geral e gravação'),
    },
    {
      to: '/jetson/recomputer_rugged_j401/hardware_and_interface_usage/',
      label: text('Hardware & I/O', '硬件与接口', 'ハードウェアと I/O', 'Hardware e I/O', 'Hardware e I/O'),
      hint: text('M12 interfaces', 'M12 接口', 'M12 インターフェース', 'Interfaces M12', 'Interfaces M12'),
    },
  ],
  application: {
    to: `${RUGGED_J401_GETTING_STARTED}#applications`,
    label: text('Application', '应用', 'アプリケーション', 'Aplicación', 'Aplicação'),
    hint: text('Use cases & benchmarks', '案例与基准', '事例とベンチマーク', 'Casos y benchmarks', 'Casos e benchmarks'),
    activePaths: ['/jetson/recomputer_rugged_j401/industrial_vision/'],
  },
};

const ROBOTICS_J601_GETTING_STARTED = '/jetson/recomputer_robotics_j601/getting_started/';

export const roboticsJ601DocNav = {
  ariaLabel: 'reComputer Robotics J601 documentation',
  items: [
    {
      to: ROBOTICS_J601_GETTING_STARTED,
      label: 'Quick Start',
      hint: 'Overview & flash',
    },
    {
      to: '/jetson/recomputer_robotics_j601/hardware_and_interface_usage/',
      label: 'Hardware & I/O',
      hint: 'Interfaces & expansion',
    },
  ],
  application: {
    to: `${ROBOTICS_J601_GETTING_STARTED}#applications`,
    label: 'Application',
    hint: 'Perception & sensor fusion',
  },
};
