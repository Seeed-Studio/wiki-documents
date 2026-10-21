---
description: "手把手复现准备：电脑与 reBot Arm 硬件清单、LeRobot 环境安装、相机与 CAN 配置，以及主从臂遥操作练习。"
title: 论文复现平台准备
hide_title: true
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - SO101
  - LeRobot
  - 遥操作
  - 论文精读
  - 机械臂
  - 具身智能
  - 课程
  - 教程
  - SO-ARM101
  - Hugging Face
  - Arm
  - Robotics
  - 手把手复现
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/paper_reading_hardware_and_teleoperation
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-21
  author: LiuJunJie
createdAt: '2026-10-16'
updatedAt: '2026-10-21'
url: https://wiki.seeedstudio.com/cn/robotics/paper_reading_hardware_and_teleoperation/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page hands-on-reproduction-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-hardware-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · 手把手复现</span>
  <h1 id="paper-reading-hardware-title">论文复现平台准备</h1>
  <p className="paper-reading-lead">准备好硬件与环境，打通主从臂遥操作链路，为后续数据采集、模型训练和论文复现做好准备。</p>
  <ul className="paper-reading-badges" aria-label="本篇内容">
    <li>硬件清单</li>
    <li>环境安装</li>
    <li>主从臂设置</li>
    <li>遥操作练习</li>
  </ul>
</section>

## 硬件配置

### 电脑配置：二选一

按自己的设备情况，选择以下一种计算平台。

| 所需硬件 | 链接 | 数量 | 备注 |
| --- | --- | :---: | --- |
| 台式机或笔记本 | 自备 | 1 | Ubuntu 22.04 原生系统；RTX 4080 及以上显卡，显存 12 GB 及以上；运行内存 16 GB 及以上。 |
| NVIDIA Jetson AGX Thor 128G | [淘宝](https://detail.tmall.com/item.htm?id=957845742837) | 1 | 与电脑方案二选一。 |

### reBot Arm 硬件准备

| 所需硬件 | 链接 | 数量 | 备注 |
| --- | --- | :---: | --- |
| reBot Arm B601 DM / RS | [DM 机械臂（带电源、木工夹）](https://detail.tmall.com/item.htm?id=1042412233386)<br />[RS 机械臂（带电源、木工夹）](https://detail.tmall.com/item.htm?id=1057521963559) | 1 | DM / RS 二选一，作为 Follower 臂。 |
| reBot Arm 102 Leader 臂 | [reBot Arm 102（带电源）](https://detail.tmall.com/item.htm?id=1049936833505) | 1 | 用于主从臂遥操作。 |
| 720P 单目腕部相机 | [UVC 单目相机](https://item.taobao.com/item.htm?id=617129515352) | 1 | 安装在机械臂腕部。 |
| 1080P 海康相机 | [1080P 定焦](https://item.taobao.com/item.htm?id=644467575802) | 1 | 用于固定视角拍摄。 |
| 腕部相机支架 | [相机支架模型与说明](https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/camera-mounts/README.md) | 1 | 需要自行打印；没有打印机的可以联系客服咨询赠送。 |
| 海康相机俯拍支架 | [单支架 + 万向环拍 + 直播俯拍（通用）](https://item.taobao.com/item.htm?id=797067194359) | 1 | 固定俯拍相机的位置与角度。 |

<div className="paper-reading-callout">

**购买与组装说明**

- 为减少购买压力，也可以选择散件版本，参照 Seeed 提供的详细组装教程完成安装：[DM 组装教程](/cn/rebot_b601_dm_getting_started/#第一步组装机械臂)、[RS 组装教程](/cn/rebot_b601_rs_getting_started/#组装机械臂)。
- Seeed 出货的电源使用防火材料，因此价格会有所增加。也可以自行购买正版台湾明纬电源，并按所选机械臂的电源要求进行配置。

</div>

### Seeed 专属实验沙箱（可选）

实验沙箱为可选配置，你也可以使用共享的数据集和他人训练好的模型开展学习与复现。

<figure className="paper-reading-figure">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/platform_preparation/seeed-sandbox.jpg" alt="Seeed 专属实验沙箱与 reBot Arm 机械臂实物" loading="lazy" />
  <figcaption>Seeed 专属实验沙箱（可选）</figcaption>
</figure>

## 环境安装

### LeRobot 环境安装

推荐使用 **Ubuntu 22.04 原生系统**，不要使用虚拟机或 WSL。选择与你的机械臂型号对应的教程进行安装。

| 机械臂型号 | 安装教程 |
| --- | --- |
| SO-ARM101 | [SO-ARM101：安装 LeRobot](/cn/lerobot_so100m_new/#安装-lerobot) |
| reBot Arm DM | [reBot-DM：安装 LeRobot](/cn/rebot_arm_b601_dm_lerobot/#安装lerobot) |
| reBot Arm RS | [reBot-RS：安装 LeRobot](/cn/rebot_arm_b601_rs_lerobot/#安装lerobot) |

### 相机和 CAN 配置

按照机械臂型号完成通信与相机配置。SO-ARM101 使用串口连接；reBot DM / RS 按对应教程配置 CAN 通信。

| 机械臂型号 | 通信配置 | 相机配置 |
| --- | --- | --- |
| SO-ARM101 | [串口、校准与遥操作](/cn/lerobot_so100m_new/#遥操作) | [添加摄像头](/cn/lerobot_so100m_new/#添加摄像头) |
| reBot Arm DM | [软件配置与校准流程](/cn/rebot_b601_dm_getting_started/#软件配置与校准流程) | [添加摄像头](/cn/rebot_arm_b601_dm_lerobot/#添加摄像头) |
| reBot Arm RS | [软件配置与校准流程](/cn/rebot_b601_rs_getting_started/#软件配置与校准流程) | [添加摄像头](/cn/rebot_arm_b601_rs_lerobot/#添加摄像头) |

## 主从臂设置

### Follower 与 Leader

- **Leader（主臂）**：由人手操作，提供关节位置作为遥操作输入。
- **Follower（从臂）**：接收映射后的控制指令，跟随主臂完成动作。

先完成主从臂校准，再运行遥操作，确认关节方向、运动范围和夹爪开合对应正确。

相关资料：[Follower 与 Leader（飞书原文）](https://seeedstudio.feishu.cn/sync/CLA2dJJTcss5xPbBjwicny8nn8g) · [Wiki 主从臂校准与遥操作教程](/cn/robotics/rebot_physical_ai_course_chapter_11/)。

### 控制频率与延迟

遥操作“跟不跟手”，取决于两件事：转发回路每秒跑多少圈（**频率**），以及你的手到机械臂之间隔了多久（**延迟**）。

#### 延迟从哪里来？为什么必然存在？

从读取 Leader 关节位置，到映射、发送 CAN 指令，再到 Follower 执行动作与状态回读，每一步都需要时间。下图展示了这条链路中的延迟来源。

<figure className="paper-reading-figure">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/platform_preparation/teleoperation-latency.png" alt="reBot 主从臂遥操作链路及各环节延迟来源示意图" loading="lazy" />
  <figcaption>主从臂遥操作中的延迟来源</figcaption>
</figure>

#### 控制频率是多少？能设置吗？

本节沿用 reBot 教程中的 **60 Hz** 遥操作配置：每秒完成 60 圈“读 Leader → 映射 → 发 CAN → 回读”，每圈的时间预算约为 **16.7 ms**。这个频率可以通过 teleoperate 配置中的 `fps` 参数调整。

- **上限由硬件回路耗时决定。** 这套硬件的链路跑一圈本身就需要十几毫秒，实用上限大约在 60–100 Hz。设得更高，实际频率也未必能跟上，可能出现周期超时警告。具体以所用硬件和配置的运行结果为准。
- **60 Hz 已能满足本节的手动操作练习。** 对于抓取、搬运、放置这类动作，稳定的采样与执行节奏比单纯提高频率更重要。

## 实操练习：抓取、搬运、放置

遥操作稳了，但“能动”和“能干活”之间还差刻意练习。后续数据采集的质量，取决于你现在的操作熟练度。按下面两个梯度练习。

### 练习 1：空载移物，熟悉手感

在工作区放几个轻便方块，按顺序练习：

**移动到目标上方 → 下降 → 闭合夹爪 → 抬起**

**练习目标**：连续完成 10 次动作，无碰撞、无中途掉落，单趟动作一气呵成，不犹豫。

### 练习 2：搬运与放置，完成任务链

完成以下全流程：

**抓取 → 搬运 → 放入指定容器**

**练习目标**：连续完成 10 次，并保持每次的起点和终点姿态基本一致。

</div>
