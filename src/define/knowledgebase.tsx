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
        //reTerminal
        title1: '- How to troubleshoot the black screen issue on reTerminal',
        website1: 'https://wiki.seeedstudio.com/reterminal_black_screen',
        title2: '- How to flash Raspberry Pi OS/ 64-bit Ubuntu OS or Other OS to eMMC',
        website2: 'https://wiki.seeedstudio.com/flash_different_os_to_emmc',
        title3: '- Log in to Raspberry Pi OS/++Ubuntu OS or Other OS using SSH over Wi-Fi/ Ethernet',
        website3: 'https://wiki.seeedstudio.com/log_rpios_use_ssh_over_wifi_ethernet',
        preview: 'knowledge_base1.png',
        source: 'https://wiki.seeedstudio.com/reTerminal-new_FAQ',
        tags: ['Edge', 'SBC'],
      },
      {
        //XIAO
        title1: '- How to check the battery voltage',
        website1: 'https://wiki.seeedstudio.com/check_battery_voltage',
        title2: '- Note on XIAO ESP32C3 IO allocation',
        website2: 'https://wiki.seeedstudio.com/exp32c3_d9_d6_d8',
        title3: '- What to do when upload fails/the program runs abnormally/the device port is not found?',
        website3: 'https://wiki.seeedstudio.com/noport_upload_fails',
        preview: 'knowledge_base2.png',
        source: 'https://wiki.seeedstudio.com/XIAO_FAQ',
        tags: ['Sensing', 'MCU'],
      },
    ]
  },
  {

    list:[
      {
        // ODYSSEY
        title1: '- Re-Installing the Original Windows',
        website1: 'https://wiki.seeedstudio.com/Troubleshooting_BIOS-Related_Issues',
        title2: '- Troubleshooting BIOS-Related Issues(WiFi/Bluetooth/Fan/Auto Power-On/Boot Guard/GPIO)',
        website2: 'https://wiki.seeedstudio.com/reinstall_the_Original_Windows',
        title3: '- Arduino IDE doesnt recognize the onboard microcontroller on ODYSSEY - X86J4105/ X86J4125',
        website3: 'https://wiki.seeedstudio.com/not_recognize-onboard-microcontroller',
        preview: 'knowledge_base3.png',
        source: 'https://wiki.seeedstudio.com/ODYSSEY_FAQ',
        tags: ['Edge', 'SBC', 'X86'],
      },
      {
        //Jetson
        title1: '- The remaining space in the eMMC in the received reComputer is only about 2GB, how can I solve the problem of insufficient space?',
        website1: 'https://wiki.seeedstudio.com/solution_of_insufficient_space',
        title2: '- Troubleshooting Installation for NVIDIA Jetson boards',
        website2: 'https://wiki.seeedstudio.com/Troubleshooting_Installation',
        preview: 'knowledge_base4.png',
        source: 'https://wiki.seeedstudio.com/Jetson_FAQ',
        tags: ['Edge'],
      },
      {
        //OpenWRT
        title1: '- How do I fix my device when I faced the "Read Only Root filesystem"?',
        website1: 'https://wiki.seeedstudio.com/change_default_gateway_IP',
        title2: '- What if I have the Dual Gigabit Ethernet Carrier Board non-CM4 version and attach a CM4 without emmC?',
        website2: 'https://wiki.seeedstudio.com/use_a_CM4_witout_eMMC',
        preview: 'knowledge_base5.png',
        source: 'https://wiki.seeedstudio.com/FAQs_For_openWrt',
        tags: ['Network'],
      },
    ]
  },
 
  {
    title:'Tech Support',
    describe:'Seeed Studio Tech Support Platform',
    list:[
      {
        title: '--> Ideas Exchange',
        title1: 'Join extensive product usage discussion, and share experiences, getting help from our community and technical experts.',
        preview: 'tech_support1.png',
        website: 'https://forum.seeedstudio.com/',
        tags: ['Tech_Support'],
      },
      {
        title: '--> Expert Supports',
        title1: 'Get professional email supports and direct expert helps, by sending us Email about your product problems.',
        preview: 'tech_support2.png',
        website: 'https://www.seeedstudio.com/contacts',
        tags: ['Tech_Support'],
      },
      {
        title: '-->Collective Chatting',
        title1: 'Join our active Discord community channel, and get latest Seeed Studio news, for real-time chatting with Seeed Studio Team.',
        preview: 'tech_support3.png',
        website: 'https://discord.gg/eWkprNDMU7',
        tags: ['Tech_Support'],
      },
      {
        title: '--> Wiki Suggentions',
        title1: 'Collaborate with our wiki development team, and suggest improvements, by leaving your comments and feedbacks about website.',
        preview: 'tech_support4.png',
        website: 'https://github.com/Seeed-Studio/wiki-documents/discussions/69',
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