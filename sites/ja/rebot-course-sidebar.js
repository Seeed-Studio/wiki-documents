// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const C = 'Robotics/Robot_Kits/reBot_Arm/Courses/reBot_Arm_Tutorial';
const RS = 'Robotics/Robot_Kits/reBot_Arm/B601_RS';
const DM = 'Robotics/Robot_Kits/reBot_Arm/B601_DM';
const P = 'Robotics/Robot_Kits/reBot_Arm/Courses/Paper_Reading';

const backToRobotics = () => ({
  type: 'ref',
  id: 'ja_Edge_Robotics',
  label: '<-ロボティクスに戻る',
  className: 'sideboard_calss',
});

// The course's own standalone sidebar (opened when browsing course pages).
const courseSidebar = () => [
  backToRobotics(),

  {
    type: 'doc',
    id: `${C}/ja_Arm_Tutorial_Introduction`,
    label: 'コース紹介',
    className: 'sideboard_calss',
  },
  {
    type: 'category',
    label: 'ステージ 1：基本概念と機材準備',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/ja_Arm_Tutorial_01`,
      `${C}/ja_Arm_Tutorial_02`,
      `${C}/ja_Arm_Tutorial_03`,
    ],
  },
  {
    type: 'category',
    label: 'ステージ 2：ロボットアームの組み立てと基本制御',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/ja_Arm_Tutorial_04`,
      `${C}/ja_Arm_Tutorial_05`,
      `${C}/ja_Arm_Tutorial_06`,
      `${C}/ja_Arm_Tutorial_07`,
      `${C}/ja_Arm_Tutorial_08`,
    ],
  },
  {
    type: 'category',
    label: 'ステージ 3：模倣学習と LeRobot',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/ja_Arm_Tutorial_09`,
      `${C}/ja_Arm_Tutorial_10`,
      `${C}/ja_Arm_Tutorial_11`,
      `${C}/ja_Arm_Tutorial_12`,
      `${C}/ja_Arm_Tutorial_13`,
      `${C}/ja_Arm_Tutorial_14`,
      `${C}/ja_Arm_Tutorial_15`,
      `${C}/ja_Arm_Tutorial_16`,
      `${C}/ja_Arm_Tutorial_17`,
    ],
  },
  {
    type: 'category',
    label: 'ステージ 4：VLA と Isaac GR00T',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/ja_Arm_Tutorial_18`,
      `${C}/ja_Arm_Tutorial_19`,
      `${C}/ja_Arm_Tutorial_20`,
      `${C}/ja_Arm_Tutorial_21`,
      `${C}/ja_Arm_Tutorial_22`,
    ],
  },
  {
    type: 'category',
    label: 'ステージ 5：ロボットアームの数学と運動制御',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/ja_Arm_Tutorial_23`,
      `${C}/ja_Arm_Tutorial_24`,
      `${C}/ja_Arm_Tutorial_25`,
      `${C}/ja_Arm_Tutorial_26`,
    ],
  },
  {
    type: 'category',
    label: 'ステージ 6：ロボットビジョンと自律把持',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/ja_Arm_Tutorial_27`,
      `${C}/ja_Arm_Tutorial_28`,
      `${C}/ja_Arm_Tutorial_29`,
      `${C}/ja_Arm_Tutorial_30`,
    ],
  },
  {
    type: 'category',
    label: 'ステージ 7：ROS2 とロボットシステム統合',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/ja_Arm_Tutorial_31`,
      `${C}/ja_Arm_Tutorial_32`,
      `${C}/ja_Arm_Tutorial_33`,
      `${C}/ja_Arm_Tutorial_34`,
    ],
  },
  {
    type: 'category',
    label: 'ステージ 8：MuJoCo と Isaac Sim ロボットアームシミュレーション',
    className: 'robotics-section-title',
    collapsed: false,
    collapsible: false,
    items: [
      `${C}/ja_Arm_Tutorial_35`,
      `${C}/ja_Arm_Tutorial_36`,
      `${C}/ja_Arm_Tutorial_37`,
      `${C}/ja_Arm_Tutorial_38`,
      `${C}/ja_Arm_Tutorial_39`,
    ],
  },
];

const sidebars = {

  // Standalone course sidebar.
  RebotCourseSidebar: courseSidebar(),

  PaperReadingSidebar: [
    backToRobotics(),
    { type: 'doc', id: `${P}/ja_Paper_Reading_Getting_Started`, label: 'はじめに' },
    {
      type: 'category',
      label: 'ハンズオンデプロイ',
      className: 'robotics-section-title robotics-course-sidebar hands-on-reproduction-sidebar',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${P}/ja_Paper_Reading_02_Hardware_and_Teleoperation`, label: 'ハードウェアとソフトウェアのセットアップ' },
        { type: 'doc', id: `${P}/ja_Paper_Reading_03_Task_Design`, label: 'タスク設計とデモンストレーション計画' },
        { type: 'doc', id: `${P}/ja_Paper_Reading_04_Camera_and_Recording`, label: 'マルチビュー・データ収集' },
        { type: 'doc', id: `${P}/ja_Paper_Reading_05_Dataset_Quality`, label: 'データ品質：構造、同期、検証' },
        { type: 'doc', id: `${P}/ja_Paper_Reading_06_ACT_Training`, label: 'ACT モデルの学習' },
        { type: 'doc', id: `${P}/ja_Paper_Reading_07_ACT_Deployment`, label: 'オンロボットデプロイと性能評価' },
        { type: 'doc', id: `${P}/ja_Paper_Reading_08_Algorithm_Switching`, label: 'ポリシー切り替えとタスク実行' },
      ],
    },
    {
      type: 'category',
      label: '論文徹底解説',
      className: 'robotics-section-title robotics-course-sidebar paper-reading-sidebar',
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'パート 1 · アクションチャンク化 & マルチタスクポリシー',
          className: 'robotics-section-title',
          collapsed: false,
          collapsible: false,
          items: [
            { type: 'doc', id: `${P}/ja_Paper_Reading_ACT`, label: 'ACT — 低コスト両腕マニピュレーション' },
          ],
        },
        {
          type: 'category',
          label: 'パート 2 · 軽量 VLA モデル & 効率的なデプロイ',
          className: 'robotics-section-title',
          collapsed: false,
          collapsible: false,
          items: [
            { type: 'doc', id: `${P}/ja_Paper_Reading_SMOLVLA`, label: 'SmolVLA — 手頃な Vision-Language-Action モデル' },
            { type: 'doc', id: `${P}/ja_Paper_Reading_EVO1`, label: 'Evo-1 — 軽量 VLA' },
          ],
        },
        {
          type: 'category',
          label: 'パート 3 · π ロボット基盤モデル',
          className: 'robotics-section-title',
          collapsed: false,
          collapsible: false,
          items: [
            { type: 'doc', id: `${P}/ja_Paper_Reading_PI0`, label: 'π₀ — 汎用ロボット制御' },
            { type: 'doc', id: `${P}/ja_Paper_Reading_PI0_FAST`, label: 'π₀-FAST — 効率的なアクショントークナイゼーション' },
            { type: 'doc', id: `${P}/ja_Paper_Reading_PI05`, label: 'π₀.₅ — オープンワールド汎化' },
          ],
        },
        {
          type: 'category',
          label: 'パート 4 · ジェネラリスト VLA & クロスエンボディメント適応',
          className: 'robotics-section-title',
          collapsed: false,
          collapsible: false,
          items: [
            { type: 'doc', id: `${P}/ja_Paper_Reading_GR00T_N1`, label: 'NVIDIA GR00T — 適応とファインチューニング' },
            { type: 'doc', id: `${P}/ja_Paper_Reading_EO1`, label: 'EO-1 — インタリーブ型マルチモーダル事前学習' },
            { type: 'doc', id: `${P}/ja_Paper_Reading_WALL_OSS`, label: 'WALL-OSS — エンボディド推論とロボット制御' },
          ],
        },
        {
          type: 'html',
          className: 'robotics-section-title',
          value: '<span class="menu__link" role="heading" aria-level="3" style="cursor: default">パート 5 · ワールドモデル &amp; ビデオ・アクション学習</span>',
        },
        {
          type: 'html',
          className: 'robotics-section-title',
          value: '<span class="menu__link" role="heading" aria-level="3" style="cursor: default">パート 6 · 統一評価 &amp; 研究サマリー</span>',
        },
      ],
    },
  ],

  // reBot-RS: Quick Start & SDK / Applications / Course (jumps to course).
  RebotRsSidebar: [
    backToRobotics(),
    {
      type: 'category',
      label: 'コース',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
    {
      type: 'ref',
      id: `${C}/ja_Arm_Tutorial_Introduction`,
      label: '初心者向けコース',
    },
    {
      type: 'ref',
      id: `${P}/ja_Paper_Reading_Getting_Started`,
      label: '論文ディープダイブ',
    },
    {
      type: 'link',
      label: 'NVIDIA Isaac による Sim-to-Real',
      href: 'https://www.seeedstudio.com/sim-to-real-with-seeed-rebot-and-nvidia-isaac',
    },
      ],
    },
    {
      type: 'category',
      label: 'クイックスタート & SDK',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${RS}/ja_reBot_Arm_B601_RS_Getting_Started`, label: 'reBot-RS クイックスタート' },
        { type: 'doc', id: `${RS}/ja_reBot_Arm_B601_RS_Lerobot`, label: 'reBot-RS と LeRobot' },
        { type: 'doc', id: `${RS}/ja_reBot_Arm_B601_RS_pinocchio`, label: 'reBot-RS と Pinocchio' },
        { type: 'doc', id: `${RS}/ja_reBot_Arm_B601_RS_control_mit`, label: 'reBot-RS モーター SDK' },
        { type: 'link', label: 'ノーコードでVLA入門：SenseCraft Robotics プラットフォーム', href: 'https://wiki.seeedstudio.com/ja/sensecraft_robotics_rebot_arm_102_b601_rs/' },
      ],
    },
    {
      type: 'category',
      label: 'アプリケーション',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${RS}/ja_reBot_Arm_B601_RS_Grasping_Demo`, label: 'reBot-RS とビジュアルグラスピング' },
        { type: 'doc', id: `${RS}/ja_reBot_Arm_B601_RS_ROS2_Integration`, label: 'reBot-RS と ROS2' },
        { type: 'doc', id: `${RS}/ja_reBot_Arm_B601_RS_isaacsim`, label: 'reBot-RS と Isaac Sim' },
        { type: 'doc', id: `${RS}/ja_reBot_Arm_B601_RS_Web_Simulator_Developer_Guide`, label: 'reBot-RS Web 制御システム：実機と MuJoCo' },
        { type: 'doc', id: `${RS}/ja_reBot_Arm_B601_RS_Agent`, label: 'reBot-RS と Agent Claw' },
      ],
    },
  ],

  // reBot-DM: Quick Start & SDK / Applications.
  RebotDmSidebar: [
    backToRobotics(),
    {
      type: 'category',
      label: 'コース',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
    {
      type: 'ref',
      id: `${C}/ja_Arm_Tutorial_Introduction`,
      label: '初心者向けコース',
    },
    {
      type: 'ref',
      id: `${P}/ja_Paper_Reading_Getting_Started`,
      label: '論文ディープダイブ',
    },
      ],
    },
    {
      type: 'category',
      label: 'クイックスタート & SDK',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${DM}/ja_reBot_Arm_B601_DM_Getting_Started`, label: 'reBot-DM クイックスタート' },
        { type: 'doc', id: `${DM}/ja_reBot_Arm_B601_DM_Lerobot`, label: 'reBot-DM と LeRobot' },
        { type: 'doc', id: `${DM}/ja_reBot_Arm_B601_DM_pinocchio`, label: 'reBot-DM と Pinocchio' },
        { type: 'link', label: 'ノーコードでVLA入門：SenseCraft Robotics プラットフォーム', href: 'https://wiki.seeedstudio.com/ja/sensecraft_robotics_rebot_arm_102_b601_dm/' },
      ],
    },
    {
      type: 'category',
      label: 'アプリケーション',
      className: 'robotics-section-title',
      collapsed: false,
      collapsible: false,
      items: [
        { type: 'doc', id: `${DM}/ja_reBot_Arm_B601_DM_Grasping_Demo`, label: 'reBot-DM ビジュアルグラスプ' },
        { type: 'doc', id: `${DM}/ja_reBot_Arm_B601_DM_ROS2_Integration`, label: 'reBot-DM と ROS2' },
        { type: 'doc', id: `${DM}/ja_reBot_Arm_B601_DM_isaacsim`, label: 'reBot-DM と Isaac Sim' },
        { type: 'doc', id: `${DM}/ja_reBot_Arm_B601_DM_Web_Simulator_Developer_Guide`, label: 'reBot-DM Web 制御システム：実機と MuJoCo' },
      ],
    },
  ],

};

module.exports = sidebars;
