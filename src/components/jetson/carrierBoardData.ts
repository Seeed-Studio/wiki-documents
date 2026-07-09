// Carrier Board 数据 - 用于 Jetpack Flash and Hardware Usage 的 Carrier Board 分类
// 数据来源: docs/Edge/NVIDIA_Jetson/Carrier_Boards/

import { productOptions, PRODUCT_CATEGORIES } from './productData';

export interface CarrierBoard {
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
  icon: string;
}

export const carrierBoards: CarrierBoard[] = [
  {
    id: 'j10x',
    name: 'reComputer J10x',
    description: 'Entry-level AI performance with Jetson Nano/NX modules. Perfect for learning and prototyping.',
    image: 'https://files.seeedstudio.com/wiki/Jetson/J10_Carrier_Board.png',
    url: 'https://wiki.seeedstudio.com/J1010_J101_carrierboard/',
    tags: ['Nano', 'NX'],
    icon: '🖥️'
  },
  {
    id: 'j20x',
    name: 'reComputer J20x',
    description: 'Mid-range AI performance with Jetson Xavier NX. Ideal for edge AI applications.',
    image: 'https://files.seeedstudio.com/wiki/Jetson/J20_Carrier_Board.png',
    url: 'https://wiki.seeedstudio.com/J2021_J202_carrierboard/',
    tags: ['Xavier NX', '21 TOPS'],
    icon: '⚡'
  },
  {
    id: 'j30x-40x',
    name: 'reComputer J30x/40x',
    description: 'High-performance AI with Jetson Orin Nano/NX. Advanced robotics and vision applications.',
    image: 'https://files.seeedstudio.com/wiki/Jetson/J30_40_Carrier_Board.png',
    url: 'https://wiki.seeedstudio.com/reComputer_J4012/',
    tags: ['Orin Nano', 'Orin NX'],
    icon: '🚀'
  },
  {
    id: 'j50x',
    name: 'reComputer J50x',
    description: 'Maximum AI performance with Jetson Orin NX 16GB. Up to 100 TOPS for demanding workloads.',
    image: 'https://files.seeedstudio.com/wiki/Jetson/J50_Carrier_Board.png',
    url: 'https://wiki.seeedstudio.com/J501_carrierboard/',
    tags: ['Orin NX 16GB', '100 TOPS'],
    icon: '🔥'
  },
  {
    id: 'a203',
    name: 'A203 Carrier Board',
    description: 'Compact carrier board for Jetson Nano/Xavier NX with rich I/O interfaces.',
    image: 'https://files.seeedstudio.com/wiki/Jetson/A203_Carrier_Board.png',
    url: 'https://wiki.seeedstudio.com/A203v2/',
    tags: ['Compact', 'Rich I/O'],
    icon: '🔌'
  },
  {
    id: 'a205',
    name: 'A205 Carrier Board',
    description: 'Full-featured carrier board with multiple camera support and expansion headers.',
    image: 'https://files.seeedstudio.com/wiki/Jetson/A205_Carrier_Board.png',
    url: 'https://wiki.seeedstudio.com/A205/',
    tags: ['Multi-Camera', 'Expansion'],
    icon: '🔌'
  },
  {
    id: 'a603-a607-a608',
    name: 'A603 / A607 / A608',
    description: 'Industrial-grade carrier boards designed for harsh environments and 24/7 operation.',
    image: 'https://files.seeedstudio.com/wiki/Jetson/A603_Carrier_Board.png',
    url: 'https://wiki.seeedstudio.com/reComputer_A603/',
    tags: ['Industrial', '-25°C~80°C'],
    icon: '🏭'
  }
];

// reComputer 系列产品
export const getRecomputerProducts = () => {
  return [
    ...productOptions.filter(PRODUCT_CATEGORIES.super.filter),
    ...productOptions.filter(PRODUCT_CATEGORIES.mini.filter),
    ...productOptions.filter(PRODUCT_CATEGORIES.robotics.filter),
    ...productOptions.filter(PRODUCT_CATEGORIES.classic.filter)
  ];
};

// Industrial 系列产品
export const getIndustrialProducts = () => {
  return productOptions.filter(PRODUCT_CATEGORIES.industrial.filter);
};

// reServer 系列产品 (已合并到 Industrial)
export const getReserverProducts = () => {
  return productOptions.filter(p => p.value.includes('reserver'));
};
