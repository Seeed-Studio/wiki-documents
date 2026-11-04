---
description: "SO-ARM 具身智能入门课程第 22 章 —— 无代码 VLA 路径：在 SenseCraft Robotics 中连接并标定双臂、验证遥操作、绑定相机、采集与清洗数据、云端或本地训练并运行推理 —— 全程无需命令行，也无需训练 GPU。"
title: 第 22 章 - SenseCraft Robotics 无代码 VLA
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SenseCraft Robotics
  - 无代码
  - VLA
  - 训练
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_22
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_physical_ai_course_chapter_22/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 4 阶段 · 第 22 章 · 实践</span>
    <h2>22. SenseCraft Robotics 无代码 VLA</h2>
    <p>
      无代码 VLA 路径：在 SenseCraft Robotics 中连接并标定双臂、验证遥操作、绑定相机、采集与清洗数据、云端或本地训练并运行推理 —— 全程无需命令行，也无需训练 GPU。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>本章适合谁</strong>
    <span>所有人 —— 尤其是没有训练 GPU 的读者。</span>
    <span>与第 11 章相同的任务（A 抓取、B 放置）、相同的理论 —— 无需 Python。</span>
    <span>一个 6 步引导式应用工作流取代命令行。</span>
  </div>
</section>

<div className="sensecraft-banner">
  <div className="sensecraft-banner__copy">
    <span className="sensecraft-banner__badge">⚡ 免代码 · 免配环境</span>
    <p className="sensecraft-banner__title">不想装环境、不想写代码？一个软件就能跑 reBot Arm 与 LeRobot</p>
    <p className="sensecraft-banner__lead">SenseCraft Robotics 是 Seeed 面向 SO-ARM101、reBot Arm 102 + B601-RS / B601-DM 的免代码平台。在引导式界面里完成设备连接、标定、数据采集、模型训练与推理验证 —— 不需要配 Python 环境，也不需要敲命令行。</p>
    <ul className="sensecraft-banner__points">
      <li>✅ 6 步引导式流程</li>
      <li>✅ 云端训练 · 本地无需 GPU</li>
      <li>✅ Windows / macOS 客户端</li>
      <li>✅ SO-ARM101 · B601-RS · B601-DM</li>
    </ul>
  </div>
  <div className="sensecraft-banner__actions">
    <a className="sensecraft-banner__cta" href="https://sensecraft.seeed.cc/zh?utm_source=rebot_wiki&utm_medium=wiki&utm_campaign=sensecraft_banner" target="_blank" rel="noopener noreferrer">前往 SenseCraft Robotics ↗</a>
    <a className="sensecraft-banner__link" href="/cn/sensecraft_robotics/">软件使用教程</a>
  </div>
</div>

:::tip
SenseCraft Robotics 是 Seeed 面向 SO-ARM101（及 reBot 系列机械臂）的免代码平台。在引导式界面里完成设备连接、标定、示教数据采集、模型训练与推理 —— 不需要 Python 环境，也不需要敲命令行。本章是你在第三、四阶段所做一切的图形化对照版。
:::

<a id="overview"></a>

## 准备工作

---

### 硬件

![SO-ARM101 专业版硬件清单](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/01-1-hardware-list-soarm-en.webp)

| 物品 | 主臂 | 从臂 |
| :--- | :--- | :--- |
| 机械臂 | 黑色组装好主臂 ×1 | 白色组装好从臂 ×1 |
| LeRobot 舵机控制板 | ×1 | ×1 |
| 电源线 | 5V 电源线 ×1 | 专业版：12V ×1；标准版：5V |
| 数据线 | USB-C ×1 | USB-C ×1 |
| 桌面夹具 | ×2 | ×2 |

共用物品：柔性夹爪组件、**两个 32 × 32 mm USB 相机**（套件含一个，需另备一个 —— 训练数据必须包含两个视角）、螺丝刀、鼠标垫。

> 双臂必须已组装、固定、供电并连接 USB。若组装未完成，请回到[第 6 章](/cn/robotics/soarm_physical_ai_course_chapter_6/)。

### 电脑与软件

- Windows 或 macOS 电脑；本地训练需要兼容的 GPU；
- 稳定的网络（下载、登录、云端训练与推理）；
- 已安装 [SenseCraft Robotics](https://sensecraft.seeed.cc/zh/robotics)，并注册登录 [SenseCraft 账号](https://account.seeed.cc/login)。

### 场景与安全

- 在桌面标记两个固定位置：A 点为物体起点，B 点为终点；
- 准备一个大小合适、易于抓取的物体（红色方块或软质物体）；
- 确保 A 点、B 点、双臂与物体在相机画面中清晰可见、不被遮挡；
- 清空工作区的人员、杂物、线缆与易碎品。让主臂远离从臂，且不出现在从臂相机视野内。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/01-3-scene-and-safety-soarm-en.webp" alt="任务场景与安全示例" />
</div>

:::note
界面名称、按钮位置与训练后端可能随 SenseCraft Robotics 版本变化。本文中的串口号、数据集名均为示例 —— 请始终以当前电脑实际识别到的设备为准。
:::

---

## 连接双臂

---

:::warning
安全须知：安装、连接或拆卸机械臂前先断电。确认机械臂稳固、线缆正确、工作区清空后再上电。严禁带电插拔电源接口。
:::

**安装机械臂本体。** 把主从臂放在平稳桌面上，每臂用两个夹具固定；两臂之间留出安全距离；断电状态下用手缓慢转动每个关节，确认运动顺畅、无碰撞卡涩。

![安装机械臂本体](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/02-1-install-arm-body-soarm-en.webp)

**安装控制板。** 每臂一块 LeRobot 舵机控制板：对准底座卡槽、确认插头方向后稳固装入；检查每根舵机线是否插到底、无锐弯无夹持。

**连接数据线。** 主臂 → USB-C → 电脑；从臂 → USB-C → 电脑。为方便识别串口，建议先接臂端，电脑端在 22.3 绑定步骤中逐一插入。

![安装控制板](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/02-2-install-controller-board-soarm-en.webp)

**安装电源接口并上电。** 适配器未接交流电时：插入各 DC 线并顺时针拧紧锁环；专业版 = 主臂 5V / 从臂 12V，标准版 = 双臂 5V —— 切勿混用；线缆避开关节运动范围。随后接通电源，观察控制板指示灯，确认 USB-C（数据）与 DC（电源）均已连接。

![安装电源接口](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/02-3-install-power-interface-soarm-en.webp)

---

## 在应用中配置设备

---

登录后打开**项目（Projects）** → **新建项目**，填写名称与描述并创建。项目总览提供设备配置、动作回放、数据集、训练、模型与运行的入口；若显示"待配置"或"未连接"，点击**前往设备配置**。

![创建项目](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-create-project-soarm-en.webp)

### 选择设备型号

在**设备配对**中选择 **SO-ARM101 + SO-ARM101**，点击**下一步**绑定串口。

![选择 SO-ARM101 + SO-ARM101](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-1-device-pairing-soarm-en.webp)

### 绑定 USB 串口

1. **初次扫描**：拔掉两臂的 USB 线，点击**重新扫描**，记下当前显示的端口；
2. **绑定主臂**：接上主臂，**重新扫描**，把新出现的端口绑定给主臂；
3. **绑定从臂**：接上从臂，**重新扫描**，把新出现的端口绑定给从臂；
4. 双臂都显示**已连接** → **下一步**。

![绑定主从臂串口](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-2-serial-binding-soarm-en.webp)

:::tip
串口排障：每次扫描后只绑定**新出现**的端口 —— 不要按 COM 号认设备。端口不显示就重插 USB 再扫描；只显示一个端口时，检查另一根线缆与该臂供电。
:::

### 机械臂标定验证

把主从臂摆到界面示例的中间姿态并清空工作区。两种模式：

- **自动标定** —— 系统驱动机械臂自动识别各关节行程范围。要求所有关节有可靠的物理限位。卸除负载、把双臂大致对齐竖直居中，勾选确认项，点击**开始标定**并等待完成；
- **手动标定** —— 关节无限位或需要逐步确认时使用：主臂保持上电，把各关节转到行程中段，点击**开始标定**，按屏幕指引依次确认主从臂各关节的中位与行程。

> 标定过程中请勿遥操作或采集数据。若姿态异常、关节受阻或标定失败 —— 立即停止，检查机械臂与工作区后重试。

### 遥操作验证

1. 点击**开始遥操作**；
2. 稍微移动主臂 —— 从臂必须同步、同向、平滑地跟随；
3. 点击**结束遥操作**，选择**确认遥操作正常**（或**异常，返回重新标定**）。

![遥操作验证](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-4-teleoperation-soarm-en.webp)

:::tip
**重力补偿（可选）**：机械臂有一定自重，手动扳动从臂比较费力。重力补偿可抵消部分重量、便于调整 —— 调整完成后、进入遥操作验证前请**关闭**。它只是辅助手动移动，不会让从臂跟随主臂。
:::

### 绑定相机

需要两台相机、两个视角。常见布局（第 12 章讨论过同样的选择）：**夹爪视角**（俯视 + 夹爪相机，适合观察接触的精细操作）或**侧视辅助**（俯视 + 侧视，适合抓取 / 搬运 / 放置 —— 本课程采用）。

1. 连接两台相机，点击**重新扫描**；
2. 把视频流分别指派给**前视相机**与**侧视相机**；
3. 检查两路预览：机械臂、物体与目标位置清晰可见 → **下一步**。

![绑定前视与侧视相机](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-5-camera-binding-soarm-en.webp)

---

## 动作回放（可选热身）

---

**动作回放**通过主臂示教记录机械臂动作并存入动作列表，便于回放 —— 在正式录数据集之前验证整条链路的好办法：

| 功能 | 操作 | 目的 |
| :--- | :--- | :--- |
| 录制动作 | 点击 **+** → 用主臂示教 → **停止录制** | 录制抓取 / 移动 / 放置动作 |
| 回放动作 | 点击**回放** | 检查动作完整、连续，方向与夹爪开合正确 |

![动作列表与回放](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-3-action-replay-soarm-en.webp)

---

## 数据集：配置、采集、清洗

---

推荐小批量、多会话的方式 —— 与第 11 章的规划完全一致：每批约 10 条；录 2–3 批后保留 20–30 条有效数据做第一次训练；复杂变体后续再补。

### 配置数据采集任务

打开**数据集** → **采集数据**，填写任务信息：

| 字段 | 示例 | 填写建议 |
| :--- | :--- | :--- |
| 数据集名称 | `SO-ARM101 pick-and-place A-to-B-01` | "设备 + 任务 + 批次"命名 |
| 任务描述 | `Move the object from the left to the right` | 清晰陈述目标；**合并数据集时描述必须逐字一致** |
| Episode 数量 | `10` | 每条完成一次完整任务 |
| 单条时长 | `20`–`30` 秒 | 覆盖完整动作 |
| 休息时长 | `5` 秒 | 复位机械臂与场景 |

![配置数据采集任务](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-1-dataset-config-soarm-en.webp)

### 录制任务 Episode

每条都完整记录"在 A 点抓取 → 搬运 → 在 B 点释放"的流程。保持操作一致；只有在需要更强泛化时才加入小幅位置 / 角度变化。

1. 把物体放到 A 点，确认初始姿态，点击**开始录制**；
2. 用主臂示教完成任务，机械臂回到初始姿态；
3. 等待剩余时间，或点击 ➡（或按空格）提前结束本条；
4. 休息期间把物体放回 A 点，准备下一条。

![录制任务 Episode](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-2-recording-episode-soarm-en.webp)

:::note
重要事项：
- 固定好相机；机械臂、夹爪、物体与 A、B 两点须始终在两路画面中可见；
- 关键动作不要被遮挡、不要出画；
- 任务失败、物体脱落、视频卡顿或相机被挡 —— 点击**重新录制**或按 `Esc` 停止；
- 可以先录完一批，再统一检查并删除异常条；
- 出现失控或碰撞风险时立即停止。
:::

### 检查、删除与合并

| 操作 | 方法 |
| :--- | :--- |
| 检查 Episode | 选中某条，播放视频 / 动作回放；检查任务完成度与夹爪动作 |
| 删除异常条 | **批量删除 Episode** → 选择 → 确认 → **生成删除副本**（原数据集不被覆盖） |
| 合并数据集 | **合并** → 选择数据集 → 输入新名称（任务描述、设备组合与相机配置必须一致） |

![检查数据集](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-4-3-dataset-check-soarm-en.webp)

---

## 训练

---

训练把示教数据变成动作模型 —— 也就是第 15 章的图形化版本。

| 参数 | 选项 / 取值 | 说明 |
| :--- | :--- | :--- |
| **训练硬件** | 云端 · 自动选择 GPU | 云服务器，消耗相应积分 |
| | 本地 · 免费 | 当前电脑，需要兼容的本地 GPU |
| **训练数据集** | 选择目标数据集 | 22.5 清洗好的数据集 |
| **策略** | ACT | 当前默认动作控制策略 |
| **训练步数** | `10000` | 初始值；按效果调整 |

推荐的步数与数据量（与第 11 章的指导一致）：

| 任务难度 | 任务描述 | Episode 数 | 训练步数 |
| :--- | :--- | :---: | :---: |
| 入门 | 固定 A 点到 B 点 | 约 20 | 10,000–15,000 |
| 进阶 | 随机位置抓取与放置 | 约 50 | 30,000–40,000 |
| 高阶 | 多步骤或长时任务 | 约 100 | 80,000–100,000 |

训练时长取决于 GPU 型号与步数 —— 云端 20,000 步通常几分钟到几十分钟；100,000 步约为其五倍。确认设置后点击**开始训练**，在**当前训练任务**中查看进度与历史。

![训练配置](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-5-training-soarm-en.webp)

---

## 模型与运行（推理）

---

打开**模型**查看训练结果；确认任务与设备组合与当前项目匹配。然后**运行**把模型加载到机械臂上：

1. **选择模型**：选择标记为支持当前机械臂的模型；
2. **选择推理方式**：云端推理或本地推理；
3. **开始推理**，观察任务执行。

![模型列表](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-6-model-soarm-en.webp)

**云端推理与本地推理对比：**

| 对比项 | 云端推理 | 本地推理 |
| :--- | :--- | :--- |
| **算力** | 高性能云端 GPU | 本地 CPU（当前平台暂不支持本地 GPU） |
| **性能取决于** | 网络传输质量 | 本地 CPU 性能 |
| **参数** | 动作数（默认 120）：每次推理预测的动作步数；分块阈值（默认 0.9）：影响平滑与精度 —— 越大越谨慎、可能停顿，越小越平滑但误差可能增大 | 运行次数；单次运行时限（超时自动结束） |
| **数据输出** | 仅做推理验证 | 运行结束后自动生成推理数据集 |
| **成本** | 按平台规则消耗积分 | 通常免费，受 CPU 性能限制 |

![模型运行界面](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-7-inference-soarm-en.webp)

:::note
运行前确认机械臂连接正常、工作区安全。运行期间请勿断开或拆卸机械臂，并全程观察。效果不满意时，回到**数据集** —— 删除异常条、补充有效数据、重新训练。这就是第 16 章的迭代闭环，再来一遍。
:::

---

## 课程结语

---

到这里，你已经带着 SO-ARM 从开箱一路走到训练与部署 —— 而且走了两条路：

- **代码路径（第二、三阶段）**：组装、标定、遥操作、录制、训练 ACT、评估、迭代；
- **VLA 路径（第四阶段）**：在自己的 GPU 管线上微调 GR00T，或在 SenseCraft Robotics 上全程无代码。

接下来可以去哪：

- 跳过了的话，补上**第 17 章的双臂**；
- 到[机器人 Wiki](https://wiki.seeedstudio.com/cn/robotics_page/) 探索更广的 SO-ARM 生态：Jetson Thor 上的 GR00T、AmazingHand 灵巧手、Isaac Lab 强化学习、LeIsaac 仿真；
- 开始你自己的任务 —— 整个课程都只是为它们搭的脚手架。

如果课程对你有帮助，欢迎到 GitHub 给 [SO-ARM100](https://github.com/TheRobotStudio/SO-ARM100) 和 [Seeed-Projects/lerobot](https://github.com/Seeed-Projects/lerobot) 点 Star，并到[课程介绍](/cn/robotics/soarm_physical_ai_course_introduction/)里的社区群分享你的作品。

</div>
