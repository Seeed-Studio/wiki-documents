import {translate} from '@docusaurus/Translate';
import {sortBy} from '../utils/jsUtils';

export type TagType =
  | 'Frequent'
  | 'Sensing'
  | 'MCU'
  | 'SBC'
  | 'Edge'
  | 'Network'
  | 'Project'
  | 'X86'
  | 'Tech_Support'
  | 'Cloud';

export const Users: User[] = [
  {
    title: 'AgileTs',
    description: 'Global State and Logic Framework for reactive Applications',
    preview: 'Wiki_Platform_GT_Logo.jpg',
    website: 'https://agile-ts.org/',
    source: 'https://github.com/agile-ts/documentation',
    tags: ['Edge', 'Sensing'],
  },
  {
    title: 'AI-Speaker',
    description: 'Local, reliable, fast and private Audio and IoT gate.',
    preview: 'Wiki_Platform_GT_Logo.jpg',
    website: 'https://ai-speaker.com/',
    source: 'https://github.com/sviete/AIS-WWW',
    tags: ['Edge'],
  },
  {
    title: 'Aide Jeune',
    description:
      'French Discord server that helps young people who have been bullied or feel bad about themselves',
    preview: 'Wiki_Platform_GT_Logo.jpg',
    website: 'https://aidejeune.fr',
    source: null,
    tags: [],
  },
  {
    title: "Akara's blog",
    description: 'Tech_Support frontend blog for learning',
    preview: 'Wiki_Platform_GT_Logo.jpg',
    website: 'https://messiahhh.github.io/blog/',
    source: 'https://github.com/messiahhh/blog',
    tags: ['Edge', 'Tech_Support'],
  },
  {
    title: 'Algolia DocSearch',
    description:
      'The best search experience for docs, integrates in minutes, for free',
    preview: 'Wiki_Platform_GT_Logo.jpg',
    website: 'https://docsearch.algolia.com/',
    source: 'https://github.com/algolia/docsearch/tree/main/packages/website',
    tags: ['Frequent', 'Edge', 'MCU'],
  },
  {
    title: 'Apache APISIX',
    description:
      'A Dynamic, Real-Time, High-Performance Cloud-Native API Gateway',
    preview: 'Wiki_Platform_GT_Logo.jpg',
    website: 'https://apisix.apache.org/',
    source: 'https://github.com/apache/apisix-website',
    tags: ['Edge', 'SBC', 'Project'],
  },
  {
    title: 'Apex FP',
    description: 'Functional programming library for Salesforce Apex',
    preview: 'Wiki_Platform_GT_Logo.jpg',
    website: 'https://www.apexfp.org',
    source: 'https://github.com/ipavlic/apex-fp/tree/master/website',
    tags: ['Edge'],
  },
  {
    title: 'Astronomer',
    description:
      'Enterprise-grade framework for Apache Airflow. MCUion-ready Airflow environments with just a few clicks',
    preview: 'astronomer.png',
    website: 'https://docs.astronomer.io',
    source: 'https://github.com/astronomer/docs',
    tags: ['MCU', 'Network', 'Edge'],
  },
]
export const ContributionList=[
  {
    list:[
      {
        title: 'reTerminal',
        website: 'https://www.baidu.com',
        title1: 'reTerminal 01',
        website1: 'https://www.google.com',
        title2: 'reTerminal 02',
        website2: 'https://www.google.com',
        title3: 'reTerminal 03',
        website3: 'https://www.google.com',
        title4: 'reTerminal 04',
        website4: 'https://www.google.com',
        title5: 'reTerminal 05',
        website5: 'https://www.google.com',
        preview: 'Wiki_Platform_GT_Logo.jpg',
        source: 'https://github.com/orgs/Seeed-Studio/projects/4/views/1',
        tags: ['Edge', 'Sensing'],
      },
      {
        title: 'Seeed Studio XIAO Series',
        website: 'https://www.baidu.com',
        title1: 'reTerminal 01',
        website1: 'https://www.google.com',
        title2: 'reTerminal 02',
        website2: 'https://www.google.com',
        title3: 'reTerminal 03',
        website3: 'https://www.google.com',
        title4: 'reTerminal 04',
        website4: 'https://www.google.com',
        title5: 'reTerminal 05',
        website5: 'https://www.google.com',
        preview: 'Wiki_Platform_GT_Logo.jpg',
        source: 'https://github.com/orgs/Seeed-Studio/projects/4/views/1',
        tags: ['Edge', 'Sensing'],
      },
      {
        title: 'Odyssey',
        website: 'https://www.baidu.com',
        title1: 'reTerminal 01',
        website1: 'https://www.google.com',
        title2: 'reTerminal 02',
        website2: 'https://www.google.com',
        title3: 'reTerminal 03',
        website3: 'https://www.google.com',
        title4: 'reTerminal 04',
        website4: 'https://www.google.com',
        title5: 'reTerminal 05',
        website5: 'https://www.google.com',
        preview: 'Wiki_Platform_GT_Logo.jpg',
        source: 'https://github.com/orgs/Seeed-Studio/projects/4/views/1',
        tags: ['Edge', 'Sensing'],
      },
      {
        title: 'Jetson Series',
        website: 'https://www.baidu.com',
        title1: 'reTerminal 01',
        website1: 'https://www.google.com',
        title2: 'reTerminal 02',
        website2: 'https://www.google.com',
        title3: 'reTerminal 03',
        website3: 'https://www.google.com',
        title4: 'reTerminal 04',
        website4: 'https://www.google.com',
        title5: 'reTerminal 05',
        website5: 'https://www.google.com',
        preview: 'Wiki_Platform_GT_Logo.jpg',
        source: 'https://github.com/orgs/Seeed-Studio/projects/4/views/1',
        tags: ['Edge', 'Sensing'],
      },
      
    ]
  },
  {
    title:'MCU Ideas Launch Pad',
    describe:'Accept our MCU application requirements, achieve them within the Sensingated timeframe, and win your reward.',
    list:[
      {
        title: 'XIAO ESP32C3 with Home Assistant',
        preview: 'Wiki_Platform_GT_Logo.jpg',
        website: 'https://wiki.seeedstudio.com/xiao-esp32c3-esphome/',
        source: 'https://github.com/orgs/Seeed-Studio/projects/5/views/1?pane=issue&itemId=30468268',
        tags: ['Edge', 'Sensing'],
      },
      {
        title: 'XIAO ESP32S3 with Home Assistant',
        preview: 'Wiki_Platform_GT_Logo.jpg',
        website: 'https://wiki.seeedstudio.com/xiao-esp32c3-esphome/',
        source: 'https://github.com/orgs/Seeed-Studio/projects/5/views/1',
        tags: ['Edge', 'Sensing'],
      },
    ]
  },
  {
    title:'KnowlEdge Sharing in Wiki',
    describe:'Share your knowlEdge with everyone on this open-source wiki platform, and submit through a "Pull Request" and receive your reward.',
    list:[
      {
        title: '[Page Update] Arduino Intro',
        preview: 'Wiki_Platform_GT_Logo.jpg',
        website: 'https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30450213',
        source: 'https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30450213',
        tags: ['Edge', 'Sensing'],
      },
      {
        title: '[Page Add] Raspberry Pi Intro',
        preview: 'Wiki_Platform_GT_Logo.jpg',
        website: 'https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30450213',
        source: 'https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30450213',
        tags: ['Edge', 'Sensing'],
      },
      {
        title: '[Bug Fix] Level 4 hyperlink bug',
        preview: 'Wiki_Platform_GT_Logo.jpg',
        website: 'https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30469734',
        source: 'https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30469734',
        tags: ['Edge', 'Sensing'],
      },
    ]
  },
  {
    title:'Tech Support Team',
    describe:'Utilize your skills to assist others in resolving their technical problems and receive your reward.',
    list:[
      {
        title: 'Mr. Jefferson',
        preview: 'Jefferson.png',
        website: 'https://www.baidu.com/',
        source: 'https://github.com/orgs/Seeed-Studio/projects/7',
        tags: ['Tech_Support', 'X86'],
      },
      {
        title: 'Mrs. S',
        preview: 'huang.png',
        website: 'https://ai-speaker.com/',
        source: 'https://github.com/orgs/Seeed-Studio/projects/7',
        tags: ['Tech_Support'],
      },
      {
        title: 'Mr. E',
        preview: 'liu.png',
        website: 'https://ai-speaker.com/',
        source: 'https://github.com/orgs/Seeed-Studio/projects/7',
        tags: ['Tech_Support'],
      },
    ]
  },
]
export type User = {
  title: string;
  description: string;
  preview: string | null; // null = use our serverless screenshot service
  website: string;
  source: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: {[type in TagType]: Tag} = {
  Frequent: {
    label: translate({message: 'Frequent'}),
    description: translate({
      message:
        'Our favorite Docusaurus sites that you must absolutely check out!',
      id: 'showcase.tag.favorite.description',
    }),
    color: '#e9669e',
  },

  Sensing: {
    label: translate({message: 'Sensing'}),
    description: translate({
      message:
        'Beautiful Docusaurus sites, polished and standing out from the initial template!',
      id: 'showcase.tag.design.description',
    }),
    color: '#a44fb7',
  },

  MCU: {
    label: translate({message: 'MCU'}),
    description: translate({
      message: 'Docusaurus sites associated to a commercial prouct!',
      id: 'showcase.tag.product.description',
    }),
    color: '#dfd545',
  },

  SBC: {
    label: translate({message: 'SBC'}),
    description: translate({
      message:
        'Translated Docusaurus sites using the internationalization support with more than 1 locale.',
      id: 'showcase.tag.i18n.description',
    }),
    color: '#127f82',
  },

  X86: {
    label: translate({message: 'X86'}),
    description: translate({
      message: 'Docusaurus sites of Seeed (formerly Facebook) projects',
      id: 'showcase.tag.Seeed.description',
    }),
    color: '#4267b2', // Facebook blue
  },

  Edge: {
    label: translate({message: 'Edge'}),
    description: translate({
      message: 'Open-Source Docusaurus sites can be useful for inspiration!',
      id: 'showcase.tag.opensource.description',
    }),
    color: '#39ca30',
  },


  Network: {
    label: translate({message: 'Network'}),
    description: translate({
      message:
        'Docusaurus sites using the versioning feature of the docs plugin to manage multiple versions.',
      id: 'showcase.tag.versioning.description',
    }),
    color: '#fe6829',
  },


  Cloud: {
    label: translate({message: 'Cloud'}),
    description: translate({
      message:
        'Docusaurus sites using the right-to-left reading direction support.',
      id: 'showcase.tag.rtl.description',
    }),
    color: '#ffcfc3',
  },

  Project: {
    label: translate({message: 'Project'}),
    description: translate({
      message:
        'Very large Docusaurus sites, including many more pages than the average!',
      id: 'showcase.tag.large.description',
    }),
    color: '#8c2f00',
  },


  Tech_Support: {
    label: translate({message: 'Tech Support'}),
    description: translate({
      message:
        'personal websites, blogs and digital gardens built with Docusaurus',
      id: 'showcase.tag.personal.description',
    }),
    color: '#14cfc3',
  },

};

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('Frequent'));
  return result;
}

export const sortedUsers = sortUsers();
function sortContribution() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('Frequent'));
  return result;
}

export const sortedContribution = sortContribution();