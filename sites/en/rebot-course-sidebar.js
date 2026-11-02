// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const C = 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial';
const RS = 'Robotics/Robot_Kits/reBot_Arm/B601_RS';
const DM = 'Robotics/Robot_Kits/reBot_Arm/B601_DM';

const backToRobotics = () => ({
  type: 'ref',
  id: 'Edge_Robotics',
  label: '<-Back to Robotics',
  className: 'sideboard_calss',
});

// The course's own standalone sidebar (opened when browsing course pages).
const courseSidebar = () => [
  backToRobotics(),

  {
    type: 'doc',
    id: `${C}/Arm_Tutorial_Introduction`,
    label: 'Course Introduction',
    className: 'sideboard_calss',
  },
  {
    type: 'category',
    label: 'Stage 1: Basic Concepts and Equipment Preparation',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/Arm_Tutorial_01`,
      `${C}/Arm_Tutorial_02`,
      `${C}/Arm_Tutorial_03`,
    ],
  },
  {
    type: 'category',
    label: 'Stage 2: Robotic Arm Assembly and Basic Control',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/Arm_Tutorial_04`,
      `${C}/Arm_Tutorial_05`,
      `${C}/Arm_Tutorial_06`,
      `${C}/Arm_Tutorial_07`,
      `${C}/Arm_Tutorial_08`,
    ],
  },
  {
    type: 'category',
    label: 'Stage 3: Imitation Learning and LeRobot',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/Arm_Tutorial_09`,
      `${C}/Arm_Tutorial_10`,
      `${C}/Arm_Tutorial_11`,
      `${C}/Arm_Tutorial_12`,
      `${C}/Arm_Tutorial_13`,
      `${C}/Arm_Tutorial_14`,
      `${C}/Arm_Tutorial_15`,
      `${C}/Arm_Tutorial_16`,
      `${C}/Arm_Tutorial_17`,
    ],
  },
  {
    type: 'category',
    label: 'Stage 4: VLA and Isaac GR00T',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/Arm_Tutorial_18`,
      `${C}/Arm_Tutorial_19`,
      `${C}/Arm_Tutorial_20`,
      `${C}/Arm_Tutorial_21`,
      `${C}/Arm_Tutorial_22`,
    ],
  },
  {
    type: 'category',
    label: 'Stage 5: Robot Arm Mathematics and Motion Control',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/Arm_Tutorial_23`,
      `${C}/Arm_Tutorial_24`,
      `${C}/Arm_Tutorial_25`,
      `${C}/Arm_Tutorial_26`,
    ],
  },
  {
    type: 'category',
    label: 'Stage 6: Robot Vision and Autonomous Grasping',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/Arm_Tutorial_27`,
      `${C}/Arm_Tutorial_28`,
      `${C}/Arm_Tutorial_29`,
      `${C}/Arm_Tutorial_30`,
    ],
  },
  {
    type: 'category',
    label: 'Stage 7: ROS2 and Robot System Integration',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/Arm_Tutorial_31`,
      `${C}/Arm_Tutorial_32`,
      `${C}/Arm_Tutorial_33`,
      `${C}/Arm_Tutorial_34`,
    ],
  },
  {
    type: 'category',
    label: 'Stage 8: MuJoCo and Isaac Sim Robot Arm Simulation',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/Arm_Tutorial_35`,
      `${C}/Arm_Tutorial_36`,
      `${C}/Arm_Tutorial_37`,
      `${C}/Arm_Tutorial_38`,
      `${C}/Arm_Tutorial_39`,
    ],
  },
];

const sidebars = {

  // Standalone course sidebar.
  RebotCourseSidebar: courseSidebar(),

  PaperReadingSidebar: [
    {
      "type": "ref",
      "id": "Edge_Robotics",
      "label": "<-Back to Robotics",
      "className": "sideboard_calss"
    },
    {
      "type": "doc",
      "id": "Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/Paper_Reading_Getting_Started",
      "label": "Getting Started"
    },
    {
      "type": "category",
      "label": "Hands-on Deployment",
      "className": "robotics-section-title robotics-course-sidebar hands-on-reproduction-sidebar",
      "collapsed": false,
      "collapsible": false,
      "items": [
        {
          "type": "doc",
          "id": "Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/Paper_Reading_02_Hardware_and_Teleoperation",
          "label": "Hardware & Software Setup"
        },
        {
          "type": "doc",
          "id": "Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/Paper_Reading_03_Task_Design",
          "label": "Task Design & Demonstration Planning"
        },
        {
          "type": "doc",
          "id": "Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/Paper_Reading_04_Camera_and_Recording",
          "label": "Multi-View Data Collection"
        },
        {
          "type": "doc",
          "id": "Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/Paper_Reading_05_Dataset_Quality",
          "label": "Data Quality: Structure, Synchronization & Validation"
        },
        {
          "type": "doc",
          "id": "Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/Paper_Reading_06_ACT_Training",
          "label": "ACT Model Training"
        },
        {
          "type": "doc",
          "id": "Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/Paper_Reading_07_ACT_Deployment",
          "label": "On-Robot Deployment & Performance Evaluation"
        },
        {
          "type": "doc",
          "id": "Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/Paper_Reading_08_Algorithm_Switching",
          "label": "Policy Switching & Task Execution"
        }
      ]
    },
    {
      "type": "category",
      "label": "Paper Deep-Dives",
      "className": "robotics-section-title robotics-course-sidebar paper-reading-sidebar",
      "collapsed": false,
      "collapsible": false,
      "items": [
        {
          "type": "category",
          "label": "Part 1 · Action Chunking & Multi-Task Policies",
          "className": "robotics-section-title",
          "collapsed": false,
          "collapsible": false,
          "items": [
            {
              "type": "doc",
              "id": "Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/Paper_Reading_ACT",
              "label": "ACT — Low-Cost Bimanual Manipulation"
            }
          ]
        },
        {
          "type": "category",
          "label": "Part 2 · Lightweight VLA Models & Efficient Deployment",
          "className": "robotics-section-title",
          "collapsed": false,
          "collapsible": false,
          "items": [
            {
              "type": "doc",
              "id": "Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/Paper_Reading_SMOLVLA",
              "label": "SmolVLA — Affordable Vision-Language-Action Models"
            },
            {
              "type": "doc",
              "id": "Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/Paper_Reading_EVO1",
              "label": "Evo-1 — Lightweight VLA"
            }
          ]
        },
        {
          "type": "category",
          "label": "Part 3 · π Robot Foundation Models",
          "className": "robotics-section-title",
          "collapsed": false,
          "collapsible": false,
          "items": [
            {
              "type": "doc",
              "id": "Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/Paper_Reading_PI0",
              "label": "π₀ — General-Purpose Robot Control"
            },
            {
              "type": "doc",
              "id": "Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/Paper_Reading_PI0_FAST",
              "label": "π₀-FAST — Efficient Action Tokenization"
            },
            {
              "type": "doc",
              "id": "Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/Paper_Reading_PI05",
              "label": "π₀.₅ — Open-World Generalization"
            }
          ]
        },
        {
          "type": "category",
          "label": "Part 4 · Generalist VLA & Cross-Embodiment Adaptation",
          "className": "robotics-section-title",
          "collapsed": false,
          "collapsible": false,
          "items": [
            {
              "type": "doc",
              "id": "Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/Paper_Reading_GR00T_N1",
              "label": "NVIDIA GR00T — Adaptation & Fine-Tuning"
            },
            {
              "type": "doc",
              "id": "Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/Paper_Reading_EO1",
              "label": "EO-1 — Interleaved Multimodal Pre-Training"
            },
            {
              "type": "doc",
              "id": "Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/Paper_Reading_WALL_OSS",
              "label": "WALL-OSS — Embodied Reasoning & Robot Control"
            }
          ]
        },
        {
          "type": "html",
          "className": "robotics-section-title",
          "value": "<span class=\"menu__link\" role=\"heading\" aria-level=\"3\" style=\"cursor: default\">Part 5 · World Models &amp; Video-Action Learning</span>"
        },
        {
          "type": "html",
          "className": "robotics-section-title",
          "value": "<span class=\"menu__link\" role=\"heading\" aria-level=\"3\" style=\"cursor: default\">Part 6 · Unified Evaluation &amp; Research Summary</span>"
        }
      ]
    }
  ],

  // reBot-RS: Quick Start & SDK / Applications.
  RebotRsSidebar: [
    backToRobotics(),
    {
      type: 'category',
      label: 'Course',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
    {
      type: 'ref',
      id: `${C}/Arm_Tutorial_Introduction`,
      label: 'Beginner Course',
    },
    {
      type: 'ref',
      id: 'Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/Paper_Reading_Getting_Started',
      label: 'Paper Deep-Dive',
    },
    {
      type: 'link',
      label: 'Sim-to-Real with NVIDIA Isaac',
      href: 'https://www.seeedstudio.com/sim-to-real-with-seeed-rebot-and-nvidia-isaac',
    },
      ],
    },
    {
      type: 'category',
      label: 'Quick Start & SDK',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${RS}/reBot_Arm_B601_RS_Getting_Started`, label: 'reBot-RS Quick Start' },
        { type: 'doc', id: `${RS}/reBot_Arm_B601_RS_Lerobot`, label: 'reBot-RS with LeRobot' },
        { type: 'doc', id: `${RS}/reBot_Arm_B601_RS_pinocchio`, label: 'reBot-RS with Pinocchio' },
        { type: 'doc', id: `${RS}/reBot_Arm_B601_RS_control_mit`, label: 'reBot-RS Motor SDK' },
        { type: 'link', label: 'No-Code VLA: SenseCraft Robotics Platform', href: 'https://wiki.seeedstudio.com/sensecraft_robotics_rebot_arm_102_b601_rs/' },
      ],
    },
    {
      type: 'category',
      label: 'Applications',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${RS}/reBot_Arm_B601_RS_Grasping_Demo`, label: 'reBot-RS with Visual Grasping' },
        { type: 'doc', id: `${RS}/reBot_Arm_B601_RS_ROS2_Integration`, label: 'reBot-RS with ROS2' },
        { type: 'doc', id: `${RS}/reBot_Arm_B601_RS_isaacsim`, label: 'reBot-RS with Isaac Sim' },
        { type: 'doc', id: `${RS}/reBot_Arm_B601_RS_Web_Simulator_Developer_Guide`, label: 'reBot-RS Web Control System: Real Robot & MuJoCo' },
        { type: 'doc', id: `${RS}/reBot_Arm_B601_RS_Agent`, label: 'reBot-RS with Agent Claw' },
      ],
    },
  ],

  // reBot-DM: Quick Start & SDK / Applications.
  RebotDmSidebar: [
    backToRobotics(),
    {
      type: 'category',
      label: 'Course',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
    {
      type: 'ref',
      id: `${C}/Arm_Tutorial_Introduction`,
      label: 'Beginner Course',
    },
    {
      type: 'ref',
      id: 'Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading/Paper_Reading_Getting_Started',
      label: 'Paper Deep-Dive',
    },
      ],
    },
    {
      type: 'category',
      label: 'Quick Start & SDK',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${DM}/reBot_Arm_B601_DM_Getting_Started`, label: 'reBot-DM Quick Start' },
        { type: 'doc', id: `${DM}/reBot_Arm_B601_DM_Lerobot`, label: 'reBot-DM with LeRobot' },
        { type: 'doc', id: `${DM}/reBot_Arm_B601_DM_pinocchio`, label: 'reBot-DM with Pinocchio' },
        { type: 'link', label: 'No-Code VLA: SenseCraft Robotics Platform', href: 'https://wiki.seeedstudio.com/sensecraft_robotics_rebot_arm_102_b601_dm/' },
      ],
    },
    {
      type: 'category',
      label: 'Applications',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${DM}/reBot_Arm_B601_DM_Grasping_Demo`, label: 'reBot-DM Visual Grasp' },
        { type: 'doc', id: `${DM}/reBot_Arm_B601_DM_ROS2_Integration`, label: 'reBot-DM with ROS2' },
        { type: 'doc', id: `${DM}/reBot_Arm_B601_DM_isaacsim`, label: 'reBot-DM with Isaac Sim' },
        { type: 'doc', id: `${DM}/reBot_Arm_B601_DM_Web_Simulator_Developer_Guide`, label: 'reBot-DM Web Control System: Real Robot & MuJoCo' },
      ],
    },
  ],

};

module.exports = sidebars;
