---
description: "Seeed 具身智能入门课程第三阶段：模仿学习与 LeRobot第 10 章 — LeRobot 与 reBot Arm 系统架构：第 9 章我们建立了模仿学习的概念框架：示范、数据、模型、闭环。但真要把这条链路跑起来，你会立刻遇到一堆琐碎而具体的问题："
title: 第 10 章 - LeRobot 与 reBot Arm 系统架构
hide_title: true
keywords:
  - reBot
  - 机械臂
  - 具身智能
  - 课程
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_10
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/cn/rebot_physical_ai_course_chapter_10/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 3 阶段 · 第 10 章 · 理论</span>
    <h2>10. LeRobot 与 reBot Arm 系统架构</h2>
    <p>
      第 9 章我们建立了模仿学习的概念框架：示范、数据、模型、闭环。但真要把这条链路跑起来，你会立刻遇到一堆琐碎而具体的问题：
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

##  LeRobot 与 reBot Arm 系统架构

## LeRobot 是什么？为什么需要它？

第 9 章我们建立了模仿学习的概念框架：示范、数据、模型、闭环。但真要把这条链路跑起来，你会立刻遇到一堆琐碎而具体的问题：

- 相机画面和关节角度的时间戳怎么对齐？
- 几十个 Episode 的图像、状态、动作数据用什么格式存？
- 训练好的模型怎么在 Hugging Face Hub 上分享和下载？
- 数据采集、训练、推理三套代码怎么共用同一份机械臂控制逻辑？

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-10cn/ch10-01cn.jpg" alt="" />
</div>

如果每个人都自己造一遍轮子，机器人学习永远只是少数实验室的游戏。LeRobot 就是 Hugging Face 为解决这个问题做的开源框架——它用 PyTorch 实现了经过验证的模仿学习算法（ACT、smovla、GROOT 等），定义了标准的机器人数据集格式，并提供从遥操作、数据采集、训练到真机部署的完整命令行工具链。

---

## Leader Arm 与 Follower Arm：主从两臂的分工

- 模仿学习的第一步是"人做给机器人看"。问题是：人怎么"教"一台 750 mm 臂展的机械臂做精细的抓取动作？用手直接掰着它动，既危险又录不出平滑的数据
- 答案是主从遥操作：用一条结构相似、轻便灵活的示教臂作为"输入设备"，人摆主臂，从臂实时跟随。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-10cn/ch10-02cn.jpg" alt="" />
</div>

- **Leader Arm（主臂 / 示教臂）**：人手握着动的这条臂。它**只负责读数**——实时读取自己各关节的角度，发送给电脑。它不需要输出力，所以可以用轻量、低成本的舵机方案。
- **Follower Arm（从臂 / 执行臂）**：真正干活的这条臂。它接收 Leader 传来的关节角度，驱动自己的大功率关节电机跟随动作，完成实际抓取。

这就像吊车驾驶室里的操纵杆和吊臂的关系。司机扳动的是轻巧的操纵杆（Leader），真正举重若轻的是外面的吊臂（Follower）。操纵杆的每个动作都被实时"翻译"成吊臂的动作。

---

## 插件架构：Robot Plugin 与 Teleoperator Plugin

LeRobot 的第一设计原则：框架不认识任何具体硬件，只定义接口；硬件以插件（Plugin）形式接入**。** 

|  | **Robot Plugin** | **Teleoperator Plugin** |
|-|-|-|
| 角色 | 执行体：接收动作、回报状态 | 输入端：只读取人的动作意图 |
| 数据方向 | 双向（读 + 写） | 单向（只读） |
| 核心方法 | `get_observation()`、`send_action()` | `get_action()` |
| 在 reBot 系统中 | B601 Follower 从臂 | reBot 102 Leader 主臂 |

<callout emoji="📌">
一句话区分：**Robot 管"动手"，Teleoperator 管"读手"。**
</callout>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-10cn/ch10-03cn.jpg" alt="" />
</div>

---

## 数据流全景：相机、CAN 与机械臂

一个控制周期里，到底有哪些数据、以什么格式、走哪条路？ 一台电脑同时挂着三类外设，对应三条数据通路：

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1cn/chapter-10cn/ch10-04cn.jpg" alt="" />
</div>

---

## 四大工作流程：同一套系统的四种用法

理解了硬件和数据流，再看本阶段后面几章要走的四个流程，你会发现它们**用的是同一套插件、同一份配置，只是 LeRobot 调用的工具不同**：

<sheet sheet-id="Nn2Y7F" token="N7HzsXq0Ghj47wt0TBFcttzGnFg"></sheet>

- **遥操作和数据采集用的是同一条硬件链路**，区别只在于"录不录数据"。
- **推理部署和数据采集在结构上互为镜像**：采集时动作来自 Leader臂（人），推理时动作来自模型（Checkpoint），其余部分（相机读取、State 回读、CAN 下发、安全限制）完全一样。这就是插件化架构的好处——换决策者不需要换系统。
- **遥操作和推理部署**：都是硬件全开、在线控制机械臂，区别在"谁在决策"——遥操作的决策者是人，推理的决策者是模型。

---

## DM 与 RS 的配置差异

一句话概括两个版本的关系：**同一副骨架，两套"心脏与神经"**。机械结构、关节命名、上层软件流程完全一致，差异全部集中在电机和 CAN 通信链路上——这也是所有 LeRobot 命令中最容易填错的参数。

也就是说我们之后的遥操、采集数据、训练、评估的指令两款机械臂是完全相同的，只需要替换一下相应的机械臂名称即可

<sheet sheet-id="DjkU0W" token="N7HzsXq0Ghj47wt0TBFcttzGnFg"></sheet>

---

</div>
