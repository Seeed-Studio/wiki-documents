---
description: "SO-ARM101 Sim-to-Real VLA 课程第 8 章 —— 搭建工作空间：摄影棚硬件清单、灯箱、相机支架、机架与物料位置、双相机。"
title: 第 8 章 - 搭建工作空间
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - 工作空间
  - 灯箱
  - 相机支架
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_8
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_sim2real_vla_chapter_8/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">模块 2 · 第 8 章 · Build Your Robot Lab</span>
    <h2>8. 搭建工作空间</h2>
    <p>
      任务始终不变：把三支试管放进试管架。本章搭建让任务可录制、可复现的
      摄影棚——硬件清单、灯箱、支架、物料位置与相机。
    </p>
    <div className="hero-actions">
      <a href="#hardware">硬件清单</a>
      <a href="#lightbox">灯箱</a>
      <a href="#brackets">支架</a>
      <a href="#props">物料位置</a>
      <a href="#cameras">相机</a>
      <a href="#checklist">检查清单</a>
    </div>
  </div>
</section>

## 8.1 硬件清单

<section id="hardware" className="section-card">
  <div className="section-title">
    <span>物料表</span>
    <h2>8.1 硬件清单</h2>
  </div>

| 物料 | 说明 | 数量 |
|---|---|---|
| SO-ARM101 Pro 套件（主臂 + 从臂） | [SO-ARM101 低成本 AI 机械臂套件 Pro](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html) | 1 |
| USB 相机 ×2 | 一只装腕部、一只外部；任意 640×480、30 FPS 的 UVC 相机 | 2 |
| 相机支架 | workshop 腕部支架 + 一个刚性外部支架 | 2 |
| 试管架与三支试管 | 任务道具——与数字孪生同规格 | 1 套 |
| 灯箱或泡沫板箱 + 漫射光 | 均匀背景与稳定光照 | 1 |
| 不反光桌垫 | 摆放道具的桌面 | 1 |
| 带电源的 USB Hub | PC 或 Jetson 端口不足时使用 | 1 |

策略学到的是相机看到的东西。背后有窗户的普通桌面会录出光照不断变化的数据
集；摄影棚消除这类噪声。做法与入门课程的数据集章节一致
（[入门第 11 章 —— 任务设计](https://wiki.seeedstudio.com/cn/robotics/soarm_physical_ai_course_chapter_11/)
与[第 12 章 —— 相机配置](https://wiki.seeedstudio.com/cn/robotics/soarm_physical_ai_course_chapter_12/)）。

</section>

## 8.2 灯箱

<section id="lightbox" className="section-card">
  <div className="section-title">
    <span>摄影棚</span>
    <h2>8.2 灯箱</h2>
  </div>

最低配的摄影棚：

| 物料 | 作用 |
| --- | --- |
| 泡沫板箱或素色桌垫 | 道具背后的均匀背景 |
| 漫射白光（带灯罩的灯，或两盏 45° LED） | 无硬阴影的柔和稳定光照 |
| 不反光桌面 | 两路相机都能看清试管与机架 |
| 固定的机器人位置 | 从臂用螺栓或胶带固定，底座朝向道具 |

:::tip 一盏灯胜过三盏
多个不均匀光源会在光滑的试管上产生移动高光。一盏漫射顶光加环境光更容易在
别的日子复现——后续补录数据时这点很重要。
:::

</section>

## 8.3 支架

<section id="brackets" className="section-card">
  <div className="section-title">
    <span>支架</span>
    <h2>8.3 支架</h2>
  </div>

两个支架承载相机；都必须足够刚性，撑过一周录制而不漂移。

**腕部相机支架。** 装在从臂夹爪上，沿用官方 SO-101 workshop 的相机支架：
相机位于爪子上方、下俯约 45°，使夹爪尖端与被抓物体在整个可达范围内都保持在
画面里。打印或购买 workshop 支架并拧紧螺丝——腕部相机如果在录制中途转动，
之后的所有 episode 全部作废。

**外部相机支架。** 任意刚性支架均可：小三脚架、2020 铝型材立柱，或夹在桌上
的悬臂。放在工作区上方偏前，一帧覆盖机架、三个试管位和从臂大部分行程。不要
手持，也不要夹在从臂会推到的同一块板上。

走线：腕部留出松弛线环避免挂扯，两根相机线都避开从臂的工作区。

</section>

## 8.4 物料位置

<section id="props" className="section-card">
  <div className="section-title">
    <span>物料位置</span>
    <h2>8.4 物料位置</h2>
  </div>

任务定义是数据集的一部分，务必保持一致：

- **试管架**：从臂底座右侧、舒适可达范围内——与数字孪生同侧同距；
- **三支试管**：撒在臂前方工作区，大约 10–20 cm 处；每个 episode 之间手动
  重新摆放；
- **任务句**：`Put the three vials into the vial rack`——第 9 章录制和数字
  孪生数据集用的都是这句原文。不要在不同 episode 之间换说法。

:::tip 量一次，然后做定位治具
用胶带固定机架位置，在桌垫上标记试管区。位置可复现比毫米级精度更重要。
:::

如果你还打算采集仿真数据（第 12 章），就把工作台对齐孪生场景——孪生就是
规格说明：

| 检查项 | 仿真参考 | 真实工作台 |
| --- | --- | --- |
| 机架位置 | `SO101_RACK_POSITION` 固定 | 相对底座同侧同距 |
| 试管初始区 | `SO101_VIAL_POSITIONS` | 臂前方同一 10–20 cm 区域 |
| 相机视角 | 腕部 + 外部 | 相同构图、640×480、30 FPS |
| 光照 | 穹顶光 + 主光 | 漫射光、机架上无硬阴影 |

1–2 cm 的偏差可以容忍。机架放到另一边、相机换了高度、手持相机——不行。

</section>

## 8.5 相机

<section id="cameras" className="section-card">
  <div className="section-title">
    <span>双视角</span>
    <h2>8.5 相机</h2>
  </div>

列出相机并给每台抓一张预览：

```bash
lerobot-find-cameras opencv
```

预览图写在 `outputs/captured_images/`；文件名里含设备号，例如
`opencv__dev_video4.png` 就是 4 号。导出：

```bash
export CAMERA_GRIPPER=4
export CAMERA_EXTERNAL=6
```

重启或重新插拔后设备号可能变化，每次录制前重查一遍。如果相机支持，锁定对焦
和曝光——录制中途的自动对焦表现为训练帧变糊。

在遥操作中验证双视角：

```bash
lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=$ROBOT_PORT \
  --robot.id=$ROBOT_ID \
  --teleop.type=so101_leader \
  --teleop.port=$TELEOP_PORT \
  --teleop.id=$TELEOP_ID \
  --display_data=true \
  --robot.cameras="{
    front: {type: opencv, index_or_path: $CAMERA_GRIPPER, width: 640, height: 480, fps: 30},
    external: {type: opencv, index_or_path: $CAMERA_EXTERNAL, width: 640, height: 480, fps: 30}
  }"
```

:::note 相机键名是数据集模式的一部分
本课程录制时用 `front`（腕部相机）和 `external`（俯视相机）两个键名，让
真实数据集与第 12 章的仿真数据集特征名完全一致——这正是无需重命名特征就能
做仿真+真实协同训练的原因。第 10 章会把这两路映射为 GR00T 的 `wrist` 和
`front` 输入。
:::

</section>

## 8.6 摄影棚检查清单

<section id="checklist" className="section-card">
  <div className="section-title">
    <span>进入第 9 章之前</span>
    <h2>8.6 摄影棚检查清单</h2>
  </div>

- 灯箱或桌垫就位，一盏漫射光，机架无硬阴影；
- 从臂固定到位；主臂在手边舒适可达；
- 腕部支架刚性，相机下俯约 45°，能看到爪子；
- 外部相机在刚性支架上，能看到机架和三个试管槽；
- 两台相机 640×480、30 FPS 预览正常，对焦锁定；
- `CAMERA_GRIPPER` 与 `CAMERA_EXTERNAL` 已导出；
- 机架已用胶带固定，试管区已标记，任务句固定。

下一章：[第 9 章 —— 真实环境数据采集](cn_Sim2Real_VLA_09.md)。

</section>

</div>