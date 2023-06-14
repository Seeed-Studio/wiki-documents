/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */


import {translate} from '@docusaurus/Translate';
import {sortBy} from '../utils/jsUtils';

/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE
 *
 * Please don't submit a PR yourself: use the Github Discussion instead:
 * https://github.com/facebook/docusaurus/discussions/7826
 *
 * Instructions for maintainers:
 * - Add the site in the json array below
 * - `title` is the project's name (no need for the "Docs" suffix)
 * - A short (≤120 characters) description of the project
 * - Use relevant tags to categorize the site (read the tag descriptions on the
 *   https://docusaurus.io/showcase page and some further clarifications below)
 * - Add a local image preview (decent screenshot of the Docusaurus site)
 * - The image MUST be added to the GitHub repository, and use `require("img")`
 * - The image has to have minimum width 640 and an aspect of no wider than 2:1
 * - If a website is open-source, add a source link. The link should open
 *   to a directory containing the `docusaurus.config.js` file
 * - Resize images: node admin/scripts/resizeImage.js
 * - Run optimizt manually (see resize image script comment)
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/facebook/docusaurus/pull/7620
 */

// LIST OF AVAILABLE TAGS
// Available tags to assign to a showcase site
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export type TagType =
  // DO NOT USE THIS TAG: we choose sites to add to favorites
  | 'favorite'
  // For open-source sites, a link to the source code is required.
  // The source should be the *website's* source, not the project's source!
  | 'opensource'
  | 'product'
  // Feel free to add the 'design' tag as long as there's _some_ level of
  // CSS/swizzling.
  | 'design'
  // Site must have more than one locale.
  | 'i18n'
  | 'versioning'
  // Large sites are defined as those with > 200 pages, excluding versions.
  | 'large'
  | 'meta'
  | 'personal'
  // Right-to-left direction.
  | 'rtl';

// Add sites to this list
// prettier-ignore
export const Users: User[] = [
  {
    title: 'AgileTs',
    description: 'Global State and Logic Framework for reactive Applications',
    preview: require('./showcase/agilets.png'),
    website: 'https://agile-ts.org/',
    source: 'https://github.com/agile-ts/documentation',
    tags: ['opensource', 'design'],
  },
  {
    title: 'AI-Speaker',
    description: 'Local, reliable, fast and private Audio and IoT gate.',
    preview: require('./showcase/aispeaker.png'),
    website: 'https://ai-speaker.com/',
    source: 'https://github.com/sviete/AIS-WWW',
    tags: ['opensource'],
  },
  {
    title: 'Aide Jeune',
    description:
      'French Discord server that helps young people who have been bullied or feel bad about themselves',
    preview: require('./showcase/aide_jeune.png'),
    website: 'https://aidejeune.fr',
    source: null,
    tags: [],
  },
  {
    title: "Akara's blog",
    description: 'Personal frontend blog for learning',
    preview: require('./showcase/akara-blog.png'),
    website: 'https://messiahhh.github.io/blog/',
    source: 'https://github.com/messiahhh/blog',
    tags: ['opensource', 'personal'],
  },
  {
    title: 'Algolia DocSearch',
    description:
      'The best search experience for docs, integrates in minutes, for free',
    preview: require('./showcase/algolia.png'),
    website: 'https://docsearch.algolia.com/',
    source: 'https://github.com/algolia/docsearch/tree/main/packages/website',
    tags: ['favorite', 'opensource', 'product'],
  },
  {
    title: 'Apache APISIX',
    description:
      'A Dynamic, Real-Time, High-Performance Cloud-Native API Gateway',
    preview: require('./showcase/apache-apisix.png'),
    website: 'https://apisix.apache.org/',
    source: 'https://github.com/apache/apisix-website',
    tags: ['opensource', 'i18n', 'large'],
  },
  {
    title: 'Apex FP',
    description: 'Functional programming library for Salesforce Apex',
    preview: require('./showcase/apexfp.png'),
    website: 'https://www.apexfp.org',
    source: 'https://github.com/ipavlic/apex-fp/tree/master/website',
    tags: ['opensource'],
  },
  {
    title: 'Astronomer',
    description:
      'Enterprise-grade framework for Apache Airflow. Production-ready Airflow environments with just a few clicks',
    preview: require('./showcase/astronomer.png'),
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
        description: 'Come join the community activity and share your solution!',
        preview: require('./showcase/agilets.png'),
        website: 'https://agile-ts.org/',
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
        description: 'Really need your help for applying XIAO ESP32C3 into Home Assistant',
        preview: require('./showcase/agilets.png'),
        website: 'https://wiki.seeedstudio.com/xiao-esp32c3-esphome/',
        source: 'https://github.com/orgs/Seeed-Studio/projects/5/views/1?pane=issue&itemId=30468268',
        tags: ['opensource', 'design'],
      },
      {
        title: 'XIAO ESP32S3 with Home Assistant',
        description: 'Really need your help for applying XIAO ESP32S3 into Home Assistant',
        preview: require('./showcase/agilets.png'),
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
        description: 'We need an updated wiki page introducing Arduino',
        preview: require('./showcase/agilets.png'),
        website: 'https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30450213',
        source: 'https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30450213',
        tags: ['opensource', 'design'],
      },
      {
        title: '[Page Add] Raspberry Pi Intro',
        description: 'We need a new wiki page introducing Raspberry Pi',
        preview: require('./showcase/agilets.png'),
        website: 'https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30450213',
        source: 'https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30450213',
        tags: ['opensource', 'design'],
      },
      {
        title: '[Bug Fix] Level 4 hyperlink bug',
        description: 'Level 4 hyperlink titles cannot be displayed correctly',
        preview: require('./showcase/agilets.png'),
        website: 'https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30469734',
        source: 'https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30469734',
        tags: ['opensource', 'design'],
      },
      {
        title: '[Function Add] PDF button',
        description: 'Add a button at each page that automatically downloads the current page and converts it to PDF#302',
        preview: require('./showcase/agilets.png'),
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
        description: 'Global State and Logic Framework for reactive Applications',
        preview: require('./showcase/agilets.png'),
        website: 'https://agile-ts.org/',
        source: 'https://github.com/orgs/Seeed-Studio/projects/7',
        tags: ['personal'],
      },
      {
        title: 'Mrs. Huang',
        description: 'Local, reliable, fast and private Audio and IoT gate.',
        preview: require('./showcase/aispeaker.png'),
        website: 'https://ai-speaker.com/',
        source: 'https://github.com/orgs/Seeed-Studio/projects/7',
        tags: ['personal'],
      },
      {
        title: 'Mr Liu',
        description: 'Local, reliable, fast and private Audio and IoT gate.',
        preview: require('./showcase/aispeaker.png'),
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

  meta: {
    label: translate({message: 'Meta'}),
    description: translate({
      message: 'Docusaurus sites of Meta (formerly Facebook) projects',
      id: 'showcase.tag.meta.description',
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