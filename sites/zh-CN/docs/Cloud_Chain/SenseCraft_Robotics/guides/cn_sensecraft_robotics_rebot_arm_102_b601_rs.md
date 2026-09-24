---
title: reBot Arm 102 + B601 RS 训练指南
description: 使用 reBot Arm 102 + B601 RS 完成硬件准备、机械臂连接、设备设置、动作回放、数据采集、模型训练和运行验证的完整教程。
keywords:
  - SenseCraft Robotics
  - reBot Arm 102
  - B601 RS
image: https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/00-task-overview-rs-en.webp
slug: /sensecraft_robotics_rebot_arm_102_b601_rs
last_update:
  date: 09/24/2026
  author: Seeed Studio
---

本教程使用 reBot Arm 102（主臂）和 B601 RS（从臂）配合 SenseCraft Robotics ，介绍从项目创建、设备设置、数据采集到模型训练和运行的完整流程。
文中使用“将物品从 A 点夹取并放置到 B 点”作为示例任务，仅用于说明操作方法。实际使用时，用户可以根据需求设计应用场景，例如物体分拣、搬运、装箱、按键或插拔等。

![RS 机械臂夹取与搬运任务示例](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/00-task-overview-rs-en.webp)


> **版本提示**
> 界面名称、按钮位置和训练后端可能随 SenseCraft Robotics 版本变化。本文中的串口号（如 COM21、COM35、COM3、COM6）和数据集名称只是视频示例，实际使用时请以当前电脑扫描到的设备为准。

## 教程总览

本教程按照从硬件搭建到软件操作的顺序编排，带您快速完成机械臂的配置与模型训练：

| 章节 | 阶段名称 | 核心内容 |
| :--- | :--- | :--- |
| 第 1 章 | **准备工作** | 硬件清单、电脑软件配置、场景与安全确认 |
| 第 2 章 | **连接机械臂** | 主臂与从臂的物理固定及线缆连接 |
| 第 3 章 | **软件训练** | **核心**：设备设置 ➔ 数据采集 ➔ 模型训练 ➔ 部署运行 |


---

<span id="preparation"></span>

## 1. 准备工作

### 1.1 硬件
![硬件清单](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/01-1-hardware-list-rs-en.webp)

> 机械臂需完成组装、固定、上电和 USB 连接。未完成组装时，请参考[第一步：组装机械臂](https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/)。

#### 机械臂

| 分类 | 主臂：reBot Arm 102 | 从臂：B601 RS |
|---|---|---|
| 机械臂 | reBot Arm 102 ×1    🔗[立即购买](https://detail.tmall.com/item.htm?abbucket=0&id=1049936833505&mi_id=0000-Yz_bGdBDDSknsQpXk0w18lPzoEp-CuO8B1i-vnH5Ak&ns=1&skuId=6284021463060&spm=a21xtw.29978518.smart_flow.12.45a4262e14Flrn&xxc=taobaoSearch&utm_source=sensecraft_wiki&utm_medium=socil) | reBot Arm B601-RS 组装版（含夹爪） ×1  🔗[立即购买](https://detail.tmall.com/item.htm?id=1042412233386&mi_id=0000Tzgf56Ahe5TEREo2RwCfxjt6ShkRlY9Js5w8wxbwScA&skuId=6279331210830&spm=a21xtw.29978518.0.0&xxc=shop&utm_source=sensecraft_wiki&utm_medium=socil) |
| 电源 | 12 V / 2 A电源适配器 ×1 | 48 V / 12.5 A 电源 ×1  |
| 数据线 | USB-C 数据线 ×1| USB 延长线 ×1 |
| 通信与供电组件 | — | USB-CAN 驱动板 ×1 <br />信号/电源分离板 ×1  |
| 其他连接线 | — | 2-pin JST 线束 ×1<br />3-pin JST 线束 ×1<br />XT30 2+2 线束 ×1 |
| 固定工具 | G 型夹 ×2   | G 型夹 ×2 |

> 机械臂需完成组装、固定、上电和 USB 连接。未完成组装时，请参考[第一步：组装机械臂](https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/)。

#### 摄像头
需配置 2 个摄像头：1 个用于俯视，另 1 个用于侧视或夹爪（二选一）。
<table>
  <thead>
    <tr>
      <th>摄像头</th>
      <th>俯视摄像头</th>
      <th>侧视摄像头</th>
      <th>夹爪摄像头</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>数量</td>
      <td>1 个</td>
      <td colspan="2"> *侧视*与*夹爪* 摄像头2选1</td>
    </tr>
    <tr>
      <td>支架</td>
      <td>俯视支架 ×1</td>
      <td>桌面小支架 ×1</td>
      <td>3D 打印支架 ×1</td>
    </tr>
  </tbody>
</table>

**摄像头方案**： Mac / Windows 系统可从以下组合中任选其一，建议将摄像头直接连接电脑 USB 接口，不要通过 USB Hub 或扩展坞转接。

| 方案 | 海康威视 USB 摄像头 | Logitech C270 HD Webcam | 采集效果 |
|:---|:---|:---|:---|
| 方案一 |  1 个 |  1 个 | 稳定性最佳，支持 120 FPS 采集 |
| 方案二 | ❌ |  2 个 | 稳定性良好，支持所有采集帧率 |
| 方案三 |  2 个 | ❌ | 建议帧率不超过 60 FPS；不支持 120 FPS 采集，部分情况下可能存在兼容性问题 |

### 1.2 电脑与软件

- Windows 或 macOS 电脑（本地训练需要兼容的 GPU）
- 稳定的网络连接（用于下载、登录、云端训练和推理）
- 已安装 [SenseCraft Robotics](https://sensecraft.seeed.cc/zh/robotics)
- 已注册[ SenseCraft 账号](https://account.seeed.cc/login)，并在 SenseCraft Robotics 软件中登录


详细步骤请参考[软件下载与账号设置](/cn/sensecraft_robotics/#download-and-account)。

### 1.3 场景与安全

- 在桌面上标记两个固定位置：A 点为物体初始位置，B 点为放置位置。
- 准备尺寸适中、便于夹取的物体，例如红色积木或柔软物品。
- 确保 A 点、B 点、机械臂和物体均位于摄像头视野内，且不被遮挡。
- 清理机械臂活动范围，移除人员、杂物、线缆和易碎物；调整主臂位置，避免其靠近从臂或出现在从臂摄像头画面中。
![任务场景与安全示例](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/01-3-scene-and-safety-dm-en.webp)

---
<span id="connect-arms"></span>

## 2. 连接机械臂

> **安全提示：**
> 连接或拆卸 JST、XT30 等线束前，必须先断开电源。确认所有线束连接正确后，再接通电源。
> B601RS与B601DM外观相近,请注意区分


### 2.1 固定和连接 reBot Arm 102（主臂）



#### 步骤 1：固定 reBot Arm 102
使用木工夹将 reBot Arm 102 固定在平整桌面上，轻轻推动确认底座不移动。

#### 步骤 2：连接线束
接线分为两条链路：

* **信号链路（机械臂 -> USB-C 线 -> 电脑）**
  1. 准备 USB-C 线连接机械臂与电脑（**先暂不插电脑端，等进入串口绑定环节后再连接扫描**）。

* **供电链路（机械臂 -> 12V 2A 电源 -> 插板 ）**
  1. 将 **12V 2A 电源适配器**连接到机械臂的电源接口。
  2. 将适配器接入插板，完成上电。

![固定和连接 reBot Arm 102（主臂）](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/02-1-connect-leader-dm-en.webp)

---

### 2.2 固定和连接 B601 RS（从臂）
![连接 B601 RS 线束](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/02-2-follower-wiring-overview-rs-en.webp)

#### 步骤 4：固定 B601 RS
使用 G 型夹将 B601 RS 固定在平整桌面上，轻轻左右转动确认底座不移动。

#### 步骤 5：连接线束
开始前确保电源断电。接线分为两条链路：

* **信号链路（机械臂 -> 信号分离板 -> USB-CAN -> 电脑）**
  1. 用 XT30 2+2 线连接机械臂底座与信号分离模块。
  2. 剪开 2-pin 线，一端接信号分离模块，另一端红线接 USB-CAN 的 H、黑线接 L。
  3. 将USB-CAN 的一端通过 usb延长线连接到电脑（**先暂不插电脑端，等串口绑定后再连接扫描**）。

* **供电链路（机械臂 -> 信号分离板 -> 48V 12.5A 电源 -> 插座）**
  1. 用 XT30 2+2 线连接机械臂底座与信号分离模块。
  2. 用电源 XT30 线将信号分离模块连接到 48V 12.5A 电源。
  3. 将电源接入插座。确认机械臂固定、线束正确且周围无障碍后，再打开电源。

![连接 B601 RS电源](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/02-2-connect-follower-rs-en.webp)


---

<span id="project"></span>

## 3. 项目

完成登录后，进入“项目”页面。首次使用时新建项目，已有项目则直接打开。进入项目后，可在“项目概览”中访问设备设置、动作回放、数据集、训练、模型和运行功能。

| 操作方式 | 操作步骤 |
|---|---|
| 新建项目 | 点击“新建项目” → 填写项目名称和描述 → 点击“创建并开始” |
| 打开已有项目 | 在项目列表中选择项目 → 打开项目 |

![新建项目窗口](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-create-project-rs-zh.webp)


### 3.1 项目概览

“项目概览”用于查看项目当前状态，包括机械臂连接、设备设置、数据集、训练、模型和运行状态。

如果页面显示“待配置”或“未连接”，点击“去设备设置”开始配置机械臂。

![项目概览](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-1-device-selection-rs-zh.webp)



<span id="device-setup"></span>

### 3.2 设备设置

设备设置用于完成设备选择、串口绑定、机械臂校准、遥操作验证和摄像头配置。

#### 3.2.1 选择设备型号

在“设备配对”步骤选择 **reBot Arm 102 + B601 RS**，点击“下一步”进入串口绑定。

![选择 reBot Arm 102 + B601 RS](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-2-1-device-pairing-rs-zh.webp)


#### 3.2.2 绑定主臂和从臂 USB 串口



1. **初始扫描**：断开主臂和从臂的 USB 线，点击“重新扫描”，记录当前显示的串口。
2. **绑定主臂**：连接主臂（reBot Arm 102），再次点击“重新扫描”，将新出现的串口绑定到主臂。
3. **绑定从臂**：连接从臂（B601 RS），再次点击“重新扫描”，将*PCAN channel (can0)*绑定到从臂。
4. 确认主臂和从臂均显示为“已连接”后，点击“下一步”。

![绑定主臂与从臂串口](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-2-2-serial-binding-rs-zh.webp)

> **串口绑定与排查：**
> - 每次扫描后只绑定新出现的串口，不要仅根据 COM 编号判断设备。
> - 看不到串口时，重新插拔 USB 并再次扫描；只有一个串口时，检查另一根 USB 线和设备电源。


#### 3.2.3 机械臂校准验证

1. 按页面示例，将主臂和从臂调整到初始姿态，并确认工作区内没有障碍物。
2. 点击“开始校准”，按照页面提示依次完成主臂零位、从臂零位和校准完成。
3. 如果机械臂姿态不一致或校准异常，点击“重新校准”，不要继续后续操作。

![机械臂校准验证](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-3-calibration-dm-en.webp)
*注：图中以 DM 机械臂为例演示，RS 机械臂的操作方法与此完全一致。*

> 校准完成前，不要进行遥操作或数据采集。

#### 3.2.4 遥操作验证

遥操作验证用于确认从臂能够正确跟随主臂运动。如果出现方向相反、延迟过大或动作不连续，请检查设备角色、串口绑定和校准结果。

1. 点击“开始遥控”。
2. 小幅度移动主臂，观察从臂是否同步运动、方向是否一致、动作是否平稳。
3. 完成检查后，点击“结束遥控”，并根据验证结果选择：
   - **正常**：点击“确认遥控正常”；
   - **异常**：点击“异常，返回重新校准”。

![遥操作验证](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-dm/03-2-4-teleoperation-dm-en.webp)
*注：图中以 DM 机械臂为例演示，RS 机械臂的操作方法与此完全一致。*

> **重力补偿（可选）**
> 机械臂有一定重量，手动调整从臂时可能比较费力。开启重力补偿后，系统会抵消部分重量，使从臂更容易移动。调整完成后，请关闭重力补偿，再进行遥操作验证。
> 重力补偿用于调整从臂，不用于控制从臂跟随主臂。

#### 3.2.5 绑定摄像头

摄像头用于记录机械臂执行任务时的视觉信息。根据摄像头的安装位置，常用的布局方式有以下两种：
| 布局方式 | 安装与用途 | 适用场景 | 示意图 |
|:---|:---|:---|:---|
| 夹爪视角<br /> | <small><strong>俯拍摄像头</strong>：安装在工作台前上方，覆盖工作区域。<br /><br /><strong>夹爪摄像头</strong>：安装在夹爪附近，观察抓取细节。</small> | <small>观察夹爪和物体接触过程的精细操作。</small> | ![夹爪视角布局](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-2-5-eye-in-hand-rs-en.webp)<br /><small>*备注：摄像头 3D 支架可自行设计。</small> |
| 侧视辅助<br /> | <small><strong>俯拍摄像头</strong>：安装在工作台前上方，覆盖工作区域。<br /><br /><strong>侧置摄像头</strong>：安装在工作台侧前方，观察机械臂高度和夹爪动作。</small> | <small>抓取、搬运和放置等任务。</small> | ![侧视辅助布局](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-2-5-eye-to-hand-rs-en.webp) |

本教程采用<strong>侧视辅助布局</strong>。完成摄像头安装和摆放后：

1. 将摄像头连接到电脑，点击“重新扫描”。
2. 在“前置摄像机”和“侧置摄像机”区域分别选择对应的视频流。
3. 检查两个预览画面，确认机械臂、物体和目标位置清晰可见。确认无误后，点击“下一步”。

![绑定前视与侧视摄像头](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-2-5-camera-binding-rs-zh.webp)

> 如需确认摄像头与安装位置是否对应，可点击“查看相机布局”。如果画面黑屏或异常，重新扫描、重启摄像头或更换 USB 端口。


<span id="action-replay"></span>

### 3.3 动作回放

“动作回放”用于通过 Leader 示教录制机械臂动作，并在动作列表中保存和回放。录制完成后，可检查动作是否连续、运动方向和夹爪开合是否正常。

| 功能 | 操作 | 用途 |
|---|---|---|
| 录制动作 |点击“+”新建动作 → 主臂操控从臂完成任务 <br />点击“停止录制”  →保存 | 录制抓取、移动、放置等目标动作 |
| 回放动作 | 点击“回放”| 检查动作是否完整、连续，<br />确认运动方向和夹爪开合是否正常 |
> 首次录制动作前，请先在“设备设置”中完成设备连接和遥操作验证，并点击“确认遥控正常”。 如果回放结果异常，请删除该动作并重新录制。

![动作列表与回放操作](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-3-action-replay-rs-zh.webp)


<span id="dataset"></span>

### 3.4 数据集

“数据集”用于创建采集任务，并完成任务片段的录制、检查、清洗和合并。建议采用“小批次、多次采集”的方式，便于及时发现设备断连、软件异常或画面卡顿，降低一次故障导致全部数据丢失的风险。

- 每批先录制约 10 段任务片段；
- 完成 2～3 批后，保留约 20～30 段有效片段用于首次训练；
- 复杂任务可根据训练效果继续补充数据。

#### 3.4.1 配置数据采集任务

进入顶部“数据集”→“采集数据”，填写任务信息；如需合并多个数据集，各批次的任务描述必须完全一致。开始采集前，还应尽量保持 A、B 位置、物体类别、摄像头位置、桌面背景和光照条件稳定。

| 字段 | 示例值 | 填写说明 |
|---|---|---|
| 数据集名称 | `RS机械臂夹取物品从A移动到B-01` | 使用“设备+任务+批次”命名 |
| 任务描述 | `把物品从左边移动到右边` | 明确任务目标；需要合并时，各批次描述必须完全一致 |
| 采集段数 | `10` | 每段完成一次完整任务 |
| 每段时长 | `20`～`30` 秒 | 覆盖完整动作过程 |
| 休息时长 | `5` 秒 | 用于机械臂复位和场景调整 |

![配置数据采集任务](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-4-1-dataset-config-rs-zh.webp)

#### 3.4.2 录制任务片段

录制任务片段是训练数据的核心环节。每段数据都应完整记录从 A 点夹取物体、移动到 B 点并放下的过程。为便于模型快速学习，建议保持任务流程基本一致；如需提升泛化能力，可通过增加不同位置、角度和动作变化的数据来实现。

1. 将物体放在 A 点，确认机械臂处于初始姿态，点击“开始录制”。
2. 使用主臂操控从臂完成任务，再将机械臂恢复到初始姿态。
3. 任务完成后，可等待剩余时间结束，或点击→（或空格）提前结束当前片段。
4. 在休息时间内将物体放回 A 点，确认机械臂准备好；休息时间结束后，开始录制下一段任务。

![录制任务片段](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-4-2-recording-episode-rs-zh.webp)

> **重要提醒⚠️**
>
> -  采集前请调整并固定摄像头，**确保机械臂、夹爪、物体和 A、B 位置均在画面内**。
> -  关键动作不得🚫被遮挡或超出画面，否则数据可能无法用于训练。
> -  若任务失败、物体未夹稳、画面卡顿或镜头被遮挡，可点击“立即重录”，或按 `Esc` 键停止采集。
> -  可先完成本批次采集，再检查并删除异常片段。
> - 如发生失控或碰撞风险，请立即停止🛑操作。

#### 3.4.3 检查、删除与合并数据

采集完成后，可检查异常片段、删除无效数据，并将多个数据集合并使用。

| 操作 | 操作方法 | 说明 |
|---|---|---|
| 检查异常片段 | 选择任务片段，播放视频或回放动作 | 确认任务是否完成、夹爪动作是否正常。录制时可记下异常片段编号，后续直接检查 |
| 删除异常片段 | 点击“批量删除回合”，选择异常片段并确认；再点击“生成删除副本” | 修改新数据集名称后确认，原始数据集不会被覆盖 |
| 合并数据集 | 点击“合并”，选择数据集并填写新数据集名称 | 建议合并任务描述、设备组合和摄像头配置一致的数据集 |

<div style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', gap: '16px', width: '100%' }}>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![检查数据集](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-4-3-dataset-check-rs-zh.webp)


<figcaption>检查数据集</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![删除异常片段](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-4-3-dataset-delete-rs-zh.webp)


<figcaption>删除异常片段</figcaption>
</figure>

<figure style={{ flex: '0 0 100%', scrollSnapAlign: 'start', margin: 0, textAlign: 'center' }}>


![合并数据集](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-4-3-dataset-merge-rs-zh.webp)


<figcaption>合并数据集</figcaption>
</figure>

</div>


<span id="training"></span>

### 3.5 训练

训练用于生成机械臂的动作模型（也就是根据示教数据形成的动作控制程序）。SenseCraft Robotics 会读取已录制的任务数据，分析机械臂如何完成目标动作，并生成可用于自动运行的模型。

请参考下表完成训练参数的配置：

| 参数名称 | 选项 / 填写值 | 详细说明 |
| :--- | :--- | :--- |
| **训练硬件** | 云端·自动选择 GPU | 使用云端服务器进行训练，需要消耗对应积分。 |
| | 本地·免费 | 使用当前电脑进行训练，不消耗积分，但需要本地配置兼容的 GPU。 |
| **训练数据集** | 选择目标数据集 | 选择你已录制并准备好用于本次训练的数据集。 |
| **策略** | ACT | 当前默认使用的动作控制策略。 |
| **训练步数** | `10000` | 建议填写 10000 作为初始值，后续可根据模型的实际表现进行调整。 |

> **积分提示**
> 选择“云端·自动选择 GPU”训练需要消耗积分；选择“本地·免费”训练不消耗云端训练积分。积分的获取、消耗及使用规则请参阅[积分规则](/cn/sensecraft_robotics/#credits)。

**训练步数与回合数建议：**

| 任务难度 | 任务描述 | 建议回合数 | 建议训练步数 |
|---|---|---:|---:|
| 初级 | 固定 A 点到 B 点 | 约 20 个 | 10,000–15,000 步 |
| 中级 | 随机位置抓取并放置 | 约 50 个 | 30,000–40,000 步 |
| 高级 | 步骤多或持续时间长 | 约 100 个 | 80,000–100,000 步 |

> **关于训练时长**：完整的训练时间由**所选的 GPU 型号**和**训练步数**共同决定。例如，在云端使用大部分 GPU 训练 20,000 步（2W）通常需要十几到几十分钟不等；如果训练 100,000 步（10W），则训练时长约为 2W 步的 5 倍。

确认设置无误后，点击“**开始训练**”按钮。训练开始后，可在“当前训练任务”列表中实时查看训练进度和历史任务。

![训练配置界面](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-5-training-rs-zh.webp)

<span id="model"></span>

### 3.6 模型

“模型”用于查看训练结果，并选择后续运行的模型。使用前请确认模型训练已完成，且对应的任务和设备组合与当前项目一致。

![模型列表](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-6-model-rs-en.webp)

> 此处暂用英文界面截图；操作流程与中文界面一致。

<span id="run"></span>

### 3.7 运行

“运行”用于将训练完成的模型加载到机械臂上，验证模型能否正确完成任务。

**操作步骤：**
1. **选择模型**：选择标有“支持当前机械臂”的模型。
2. **选择推理方式**：选择“云端推理”或“本地推理”，并完成相应参数配置。
3. **开始推理**：确认设置后，点击当前推理方式对应的开始按钮。

**云端推理**和**本地推理**核心区别：
| 对比维度 | 云端推理 | 本地推理 |
| :--- | :--- | :--- |
| **硬件算力** | 使用云端高性能显卡（GPU）进行推理。 | 使用电脑本地 CPU 进行推理（注：当前平台暂不支持调用本地显卡）。 |
| **性能影响** | 算力强大不受限，但运行效果高度依赖**网络传输质量**。 | 运行效果受**本地 CPU 算力**影响。 |
| **参数配置** | **动作数（默认 120）：** 模型单次推理预测的动作步数。<br />**块阈值（默认 0.9）：** 影响机械臂动作连贯性与准确度的参数。数值越高，机械臂执行动作越谨慎（可能出现卡顿）；数值越低，动作越连贯（但容易出现失误）。<br />**（通常保持默认设置即可）** | **运行次数：** 希望模型连续重复执行该任务的总遍数（回合数）。<br />**单次时限(秒)：** 机械臂单次任务的最长运行时间，超时将自动结束。<br />**（通常保持默认设置即可）** |
| **数据产出** | 仅执行推理验证任务。 | 运行结束后，推理的内容会自动生成对应的数据集。 |
| **费用与限制** | 费用以平台规则为准；算力较强,适合快速开始训练。 | 通常无需云端积分，但受本地 CPU 性能限制。 |

**注意事项**
- 开始运行前：请确认机械臂连接正确，且工作区安全。
- 运行期间：请勿断开或拆卸机械臂，并观察机械臂动作是否正常。
- 运行效果不理想：请返回“数据集”页面删除异常片段，补充有效数据后重新训练。

![模型运行界面](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/rebot-arm-102-b601-rs/03-7-run-rs-zh.webp)
