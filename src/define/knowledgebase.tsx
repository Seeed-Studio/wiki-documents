import {translate} from '@docusaurus/Translate';
import {sortBy} from '../utils/jsUtils';

export type TagType =
  | 'favorite'
  | 'opensource'
  | 'product'
  | 'design'
  | 'i18n'
  | 'versioning'
  | 'large'
  | 'Seeed'
  | 'personal'
  | 'rtl';

export const Users: User[] = [
  {
    title: 'AgileTs',
    description: 'Global State and Logic Framework for reactive Applications',
    preview: 'Wiki_Platform_GT_Logo.jpg',
    website: 'https://agile-ts.org/',
    source: 'https://github.com/agile-ts/documentation',
    tags: ['opensource', 'design'],
  },
  {
    title: 'AI-Speaker',
    description: 'Local, reliable, fast and private Audio and IoT gate.',
    preview: 'Wiki_Platform_GT_Logo.jpg',
    website: 'https://ai-speaker.com/',
    source: 'https://github.com/sviete/AIS-WWW',
    tags: ['opensource'],
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
    description: 'Personal frontend blog for learning',
    preview: 'Wiki_Platform_GT_Logo.jpg',
    website: 'https://messiahhh.github.io/blog/',
    source: 'https://github.com/messiahhh/blog',
    tags: ['opensource', 'personal'],
  },
  {
    title: 'Algolia DocSearch',
    description:
      'The best search experience for docs, integrates in minutes, for free',
    preview: 'Wiki_Platform_GT_Logo.jpg',
    website: 'https://docsearch.algolia.com/',
    source: 'https://github.com/algolia/docsearch/tree/main/packages/website',
    tags: ['favorite', 'opensource', 'product'],
  },
  {
    title: 'Apache APISIX',
    description:
      'A Dynamic, Real-Time, High-Performance Cloud-Native API Gateway',
    preview: 'Wiki_Platform_GT_Logo.jpg',
    website: 'https://apisix.apache.org/',
    source: 'https://github.com/apache/apisix-website',
    tags: ['opensource', 'i18n', 'large'],
  },
  {
    title: 'Apex FP',
    description: 'Functional programming library for Salesforce Apex',
    preview: 'Wiki_Platform_GT_Logo.jpg',
    website: 'https://www.apexfp.org',
    source: 'https://github.com/ipavlic/apex-fp/tree/master/website',
    tags: ['opensource'],
  },
  {
    title: 'Astronomer',
    description:
      'Enterprise-grade framework for Apache Airflow. Production-ready Airflow environments with just a few clicks',
    preview: 'astronomer.png',
    website: 'https://docs.astronomer.io',
    source: 'https://github.com/astronomer/docs',
    tags: ['product', 'versioning', 'opensource'],
  },
]
export const ContributionList=[
  {
    title:'Community Activity Attending',
    describe:'Join/check our community events, unleash your talents and bring your ideas into reality with Seeed Studio.',
    list:[
      {
        title: 'Perception System for SDG',
        preview: 'Wiki_Platform_GT_Logo.jpg',
        website: 'https://www.baidu.com',
        source: 'https://github.com/orgs/Seeed-Studio/projects/4/views/1',
        tags: ['opensource', 'design'],
      },
    ]
  },
  {
    title:'Product Ideas Launch Pad',
    describe:'Accept our product application requirements, achieve them within the designated timeframe, and win your reward.',
    list:[
      {
        title: 'XIAO ESP32C3 with Home Assistant',
        preview: 'Wiki_Platform_GT_Logo.jpg',
        website: 'https://wiki.seeedstudio.com/xiao-esp32c3-esphome/',
        source: 'https://github.com/orgs/Seeed-Studio/projects/5/views/1?pane=issue&itemId=30468268',
        tags: ['opensource', 'design'],
      },
      {
        title: 'XIAO ESP32S3 with Home Assistant',
        preview: 'Wiki_Platform_GT_Logo.jpg',
        website: 'https://wiki.seeedstudio.com/xiao-esp32c3-esphome/',
        source: 'https://github.com/orgs/Seeed-Studio/projects/5/views/1',
        tags: ['opensource', 'design'],
      },
    ]
  },
  {
    title:'Knowledge Sharing in Wiki',
    describe:'Share your knowledge with everyone on this open-source wiki platform, and submit through a "Pull Request" and receive your reward.',
    list:[
      {
        title: '[Page Update] Arduino Intro',
        preview: 'Wiki_Platform_GT_Logo.jpg',
        website: 'https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30450213',
        source: 'https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30450213',
        tags: ['opensource', 'design'],
      },
      {
        title: '[Page Add] Raspberry Pi Intro',
        preview: 'Wiki_Platform_GT_Logo.jpg',
        website: 'https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30450213',
        source: 'https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30450213',
        tags: ['opensource', 'design'],
      },
      {
        title: '[Bug Fix] Level 4 hyperlink bug',
        preview: 'Wiki_Platform_GT_Logo.jpg',
        website: 'https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30469734',
        source: 'https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30469734',
        tags: ['opensource', 'design'],
      },
      {
        title: '[Function Add] PDF button',
        preview: 'Wiki_Platform_GT_Logo.jpg',
        website: 'https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30469734',
        source: 'https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30469767',
        tags: ['opensource', 'design'],
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
        tags: ['personal', 'Seeed'],
      },
      {
        title: 'Mrs. S',
        preview: 'huang.png',
        website: 'https://ai-speaker.com/',
        source: 'https://github.com/orgs/Seeed-Studio/projects/7',
        tags: ['personal'],
      },
      {
        title: 'Mr. E',
        preview: 'liu.png',
        website: 'https://ai-speaker.com/',
        source: 'https://github.com/orgs/Seeed-Studio/projects/7',
        tags: ['personal'],
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
  favorite: {
    label: translate({message: 'Favorite'}),
    description: translate({
      message:
        'Our favorite Docusaurus sites that you must absolutely check out!',
      id: 'showcase.tag.favorite.description',
    }),
    color: '#e9669e',
  },

  opensource: {
    label: translate({message: 'Open-Source'}),
    description: translate({
      message: 'Open-Source Docusaurus sites can be useful for inspiration!',
      id: 'showcase.tag.opensource.description',
    }),
    color: '#39ca30',
  },

  product: {
    label: translate({message: 'Product'}),
    description: translate({
      message: 'Docusaurus sites associated to a commercial product!',
      id: 'showcase.tag.product.description',
    }),
    color: '#dfd545',
  },

  design: {
    label: translate({message: 'Design'}),
    description: translate({
      message:
        'Beautiful Docusaurus sites, polished and standing out from the initial template!',
      id: 'showcase.tag.design.description',
    }),
    color: '#a44fb7',
  },

  i18n: {
    label: translate({message: 'I18n'}),
    description: translate({
      message:
        'Translated Docusaurus sites using the internationalization support with more than 1 locale.',
      id: 'showcase.tag.i18n.description',
    }),
    color: '#127f82',
  },

  versioning: {
    label: translate({message: 'Versioning'}),
    description: translate({
      message:
        'Docusaurus sites using the versioning feature of the docs plugin to manage multiple versions.',
      id: 'showcase.tag.versioning.description',
    }),
    color: '#fe6829',
  },

  large: {
    label: translate({message: 'Large'}),
    description: translate({
      message:
        'Very large Docusaurus sites, including many more pages than the average!',
      id: 'showcase.tag.large.description',
    }),
    color: '#8c2f00',
  },

  Seeed: {
    label: translate({message: 'Seeed'}),
    description: translate({
      message: 'Docusaurus sites of Seeed (formerly Facebook) projects',
      id: 'showcase.tag.Seeed.description',
    }),
    color: '#4267b2', // Facebook blue
  },

  personal: {
    label: translate({message: 'Personal'}),
    description: translate({
      message:
        'Personal websites, blogs and digital gardens built with Docusaurus',
      id: 'showcase.tag.personal.description',
    }),
    color: '#14cfc3',
  },

  rtl: {
    label: translate({message: 'RTL Direction'}),
    description: translate({
      message:
        'Docusaurus sites using the right-to-left reading direction support.',
      id: 'showcase.tag.rtl.description',
    }),
    color: '#ffcfc3',
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const sortedUsers = sortUsers();
function sortContribution() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const sortedContribution = sortContribution();