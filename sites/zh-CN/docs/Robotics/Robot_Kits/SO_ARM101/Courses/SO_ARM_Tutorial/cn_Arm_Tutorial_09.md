---
description: "SO-ARM 具身智能入门课程第 9 章 —— 什么是 LeRobot、主从臂的分工、Robot 与 Teleoperator 插件架构、相机 / 串行总线 / 机械臂数据流，以及 SO-ARM 的配置要点。"
title: 第 9 章 - LeRobot 与 SO-ARM 系统架构
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - 遥操作
  - 主臂
  - 从臂
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_9
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_physical_ai_course_chapter_9/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 3 阶段 · 第 9 章 · 理论</span>
    <h2>9. LeRobot 与 SO-ARM 系统架构</h2>
    <p>
      什么是 LeRobot、主从臂的分工、Robot 与 Teleoperator 插件架构、相机 / 串行总线 / 机械臂的数据流，以及 SO-ARM 的配置要点。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 什么是 LeRobot，为什么需要它？

---

第 8 章建立了模仿学习的概念框架：示教、数据、模型、闭环。但要真正跑通这条流水线，立刻会遇到一堆琐碎而具体的问题：

- 相机帧与关节角的时间戳怎么对齐？
- 几十个 Episode 的图像、状态、动作用什么格式存储？
- 训练好的模型如何在 Hugging Face Hub 上分享与下载？
- 数据采集、训练、推理三套代码怎么共用同一套机械臂控制逻辑？

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-10cn/ch10-01cn.jpg" alt="重复造轮子" />
</div>

如果人人都重新造轮子，机器人学习就永远是少数实验室的游戏。LeRobot 正是 Hugging Face 为解决这些问题而构建的开源框架 —— 它用 PyTorch 实现了经过验证的模仿学习算法（ACT、SmolVLA、GR00T 等），定义了标准的机器人数据集格式，并提供了从遥操作、数据采集到训练与真机部署的完整命令行工具链。SO-ARM 本身就是与 LeRobot 一同诞生的参考低成本硬件 —— 两者是彼此设计的。

---

## 主臂与从臂

---

- 模仿学习的第一步是"人给机器人示教"。问题是：人怎么"教"一条机械臂做精细的抓取动作？直接用手拖着它动，既危险、数据又不平滑。
- 答案是主从遥操作：用一条结构相同、轻巧灵活的示教臂作为"输入设备" —— 人动主臂，从臂实时跟随。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-10cn/ch10-02cn.jpg" alt="主臂与从臂" />
</div>

- **主臂（Leader / 示教臂）**：人握着动的臂。它**只读位置** —— 实时读取自己的关节角并发给电脑。它不需要输出力，所以可以用同款 STS3215 舵机轻载运行，人手搬动的关节还配了更小的减速比。
- **从臂（Follower / 执行臂）**：真正干活的臂。它接收主臂的关节角，驱动自己扭矩更大、全压供电的舵机跟随，完成实际抓取。

这就像吊车驾驶室里的操纵杆与吊臂的关系。操作员扳动轻巧的操纵杆（主臂），重活由外面的吊臂（从臂）完成。操纵杆的每一个动作都被实时"翻译"成吊臂的运动。

一套 SO-ARM 套件同时给你这两条臂 —— 这正是它成为天然教学平台的原因。

---

## 插件架构：Robot 插件与 Teleoperator 插件

---

LeRobot 的第一条设计原则：框架不认识任何具体硬件，只定义接口。硬件以插件形式接入。

| | **Robot 插件** | **Teleoperator 插件** |
| :--- | :--- | :--- |
| 角色 | 执行者：接收动作、上报状态 | 输入：只读取人的运动意图 |
| 数据方向 | 双向（读 + 写） | 单向（只读） |
| 核心方法 | `get_observation()`、`send_action()` | `get_action()` |
| 在 SO-ARM 系统中 | `so101_follower`（白色从臂） | `so101_leader`（黑色主臂） |

一句话区分：**Robot 管"干"，Teleoperator 管"读"。**

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-10cn/ch10-03cn.jpg" alt="插件架构" />
</div>

---

## 数据流总览：相机、串行总线与机械臂

---

一个控制周期里，什么数据、以什么格式、走哪条路径？一台电脑连接三类外设，对应三条数据通路：

1. **相机 → 电脑**：USB 视频帧（前视 + 侧视）；
2. **主臂 → 电脑**：串行总线上的关节位置（`/dev/ttyACM1`） —— 人的意图；
3. **电脑 → 从臂**：串行总线上的目标关节位置（`/dev/ttyACM0`） —— 同时在同一条总线上回读从臂自身状态。

电脑居于中心：读相机 + 主臂，写给从臂，为一切打时间戳，并在（录制时）把同一时刻对齐的观测 / 状态 / 动作写成一帧数据。

---

## 四个工作流：同一套系统的四种用法

---

理解了硬件与数据流之后，再看本阶段后续的四个工作流，你会发现它们**用的是同一套插件与同一套配置，只是调用的 LeRobot 工具不同**：

| 工作流 | LeRobot 工具 |
|---|---|
| 遥操作 | `lerobot-teleoperate` |
| 数据采集 | `lerobot-record` |
| 训练 | `lerobot-train` |
| 推理与部署 | `lerobot-record`（带策略）或 `lerobot-rollout` |

- **遥操作与数据采集共用同一条硬件链** —— 唯一区别是是否录制数据。
- **推理部署与数据采集互为镜像结构**：采集时，动作来自主臂（人）；推理时，动作来自模型（checkpoint）。其余一切（相机读取、状态反馈、舵机命令、安全限位）完全相同。这就是插件架构的好处 —— 换决策者不用换系统。
- **遥操作与推理部署**：两者都全员在线控臂，区别在"谁来决策" —— 遥操作时决策者是人，推理时是模型。

---

## SO-ARM 配置要点

---

| **项目** | **从臂** | **主臂** |
| :--- | :--- | :--- |
| LeRobot 类型 | `--robot.type=so101_follower` | `--teleop.type=so101_leader` |
| 典型端口 | `/dev/ttyACM0` | `/dev/ttyACM1` |
| 端口配置键 | `--robot.port` | `--teleop.port` |
| ID 键 | `--robot.id` | `--teleop.id` |
| 供电（标准版） | 5V | 5V |
| 供电（专业版） | 12V | 5V |

几个避免踩坑的说明：

- **SO100 与 SO101 共享代码。** `so101_leader` 与 `so100_leader` 是同一实现；SO100 用户使用相同命令即可。
- **`id` 绑定标定文件。** 同一条物理臂在遥操作、录制、评估中要用相同的 `--robot.id` / `--teleop.id` —— 否则 LeRobot 会去找一个不存在的标定文件。
- **端口顺序遵循插入顺序**（Linux 与 Jetson）：先插的板子是 `ttyACM0`，后插的是 `ttyACM1`。每次会话前用 `lerobot-find-port` 再确认一遍。

一句话总结这套系统：**同一副骨架，两种角色。** 主臂读、从臂写、相机看，电脑用时间戳把一切缝在一起。后续所有遥操作、采集、训练、评估命令复用的正是这套配置。

</div>
