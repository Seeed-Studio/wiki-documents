---
title: 使用 SO-ARM 训练与运行 π0.5
description: 使用 SO-ARM 和 π0.5 完成多任务桌面收纳项目的数据采集、数据集合并、云端训练、真机推理与模型优化。
keywords:
  - SenseCraft Robotics
  - SO-ARM
  - π0.5
  - VLA
image: https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/training-scene-zh.webp
slug: /sensecraft_robotics/applications/so-arm-pi05
last_update:
  date: 11/10/2026
  author: Seeed Studio
---

**SenseCraft Robotics 平台软件下载：** [前往下载](https://sensecraft.seeed.cc/zh/robotics?utm_source=wiki&utm_medium=referral&utm_campaign=sensecraft_wiki&utm_content=soarm_pi0.5)

本文以包含三个任务的“桌面收纳”项目为例，使用 SO-ARM + π0.5 完成数据采集、云端训练和真机验证。下文选取其中的“将方盒放入杂物盒”任务讲解具体操作，其余两个任务按相同方式分别采集，最后合并三个任务的数据用于训练。

完成后，你可以输入“将方盒放入杂物盒”，测试机械臂能否将方盒放入杂物盒，随后输入其他任务的指令，测试机械臂能否切换执行其他任务。

你可以先观看下方的视频教程，也可以按照后面的图文教程逐步操作。

<div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', overflow: 'hidden', borderRadius: '12px' }}>
  <iframe
    src="https://player.bilibili.com/player.html?bvid=BV1Bp4t6LEGS&autoplay=0"
    title="使用 SO-ARM 训练与运行 π0.5 视频教程"
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
    allow="fullscreen; picture-in-picture"
    allowFullScreen
    loading="lazy"
  ></iframe>
</div>

## 1. 了解训练流程

VLA 是 Vision-Language-Action（视觉—语言—动作）模型。在本项目中，摄像头提供待收纳物品和目标容器的画面，任务指令说明“抓取什么物品、放入哪个容器”，机械臂状态提供当前关节位置等信息。模型结合这些输入，预测接下来的机械臂动作。

完整流程为：

**创建设备项目 → 配置机械臂与摄像头 → 采集带指令的数据 → 检查与合并数据 → 云端训练 → 真机运行 → 评估与补充数据**

同一个任务通常需要多次示教。对于包含多个任务的数据集，应保留每个 Episode 对应的任务指令。

| 概念 | 含义 | 示例 |
|---|---|---|
| 任务指令（Task） | 描述机械臂需要完成的目标 | 将方盒放入杂物盒 |
| 回合（Episode） | 一次完整的任务执行记录，包含对应的画面、状态和动作等数据 | 从初始位置抓取方盒、放入杂物盒并结束录制 |

## 2. 开始前准备

开始前，请先进行如下准备：

- 已完成组装并可正常使用的 SO-ARM 主臂与从臂。
- 与机械臂匹配的电源、USB 连接线及摄像头。
- 安装了 SenseCraft Robotics 桌面端的电脑，软件版本需升级到 V1.1.27，并保持网络通畅。

  **软件下载：** [前往下载](https://sensecraft.seeed.cc/zh/robotics?utm_source=wiki&utm_medium=referral&utm_campaign=sensecraft_wiki&utm_content=soarm_pi0.5)
- 电脑有足够的本地存储空间，以及满足当前训练任务要求的账户积分。
- 方盒、杂物盒等任务相关物品，以及稳定的操作台。

首次使用时，请先完成机械臂组装与基础配置，再进行本教程。

> 机械臂运行前，请固定底座、清理运动范围，并确认可以及时停止运行。首次测试时保持人员和易损物品远离机械臂运动区域。

![SO-ARM 桌面收纳训练场景](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/training-scene-zh.webp)

## 3. 创建 AI 模型训练项目

1. 打开 SenseCraft Robotics。
2. 新建项目，填写便于识别的名称，例如 `SOARM-Desktop-Tidying`。
3. 将项目用途选择为 **AI 模型训练（AI Model Training）**。
4. 创建项目后，进入 **设备设置（Device Setup）**。

“AI 模型训练”项目用于采集数据、训练模型和运行推理。如果只需要录制并重复执行固定轨迹，可以选择“动作回放”项目；本教程使用 AI 模型训练项目。

![SenseCraft Robotics 项目列表与新建项目入口](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/project-list-zh.webp)

![新建 AI 模型训练项目](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/create-project-zh.webp)

## 4. 配置机械臂与摄像头

在 Device Setup 中，按照界面引导依次完成：

1. **选择设备**：选择实际使用的机械臂型号，本教程适用于 SO-ARM。
2. **绑定串口**：确认主臂与从臂对应的串口。建议先插入主臂的 USB 线，完成绑定后再插入从臂 USB 线进行绑定，避免绑定颠倒。
3. **校准**：按照引导完成机械臂校准，建立关节位置参考，便于主从臂正确跟随。SO-ARM 支持自动校准和手动校准。选择自动校准时，请按教程摆放机械臂，并在周围留出充足的活动空间，避免校准过程中发生碰撞。
4. **遥操作验证**：缓慢移动主臂，确认从臂能够正确跟随，夹爪开合正常。
5. **绑定摄像头**：选择采集所需的摄像头，并检查实时画面。

检查摄像头实时画面：方盒和杂物盒应清晰可见。模拟从方盒起点到杂物盒的移动，确认抓取和放置过程没有离开画面。若使用腕部摄像头，也要检查接近方盒时是否能看清抓取区域。其余两个任务同样检查各自的抓取和放置区域。

采集与运行时，应尽量保持摄像头位置、视角、设备配置和光照条件一致。更换配置后，应先检查其是否与已有数据及模型兼容。

详细配置步骤请参考 [SO-ARM101 指南](/cn/sensecraft_robotics_so_arm101/)。

## 5. 采集带任务指令的示教数据

### 5.1 创建数据集并填写任务描述

1. 进入 **数据集（Datasets）**，创建用于本次任务的数据集。
2. 在采集配置中，填写数据集名称和任务描述。任务描述将作为本批次每个 Episode 的任务指令，请完整说明具体动作和目标，例如“抓取方盒并放入杂物盒”，避免使用“抓取”“任务 1”等含义不明确的表述。数据集名称建议清晰体现采集内容，也可直接使用上述任务描述，便于识别和管理。
3. 配置采集段数、每段时长和休息时长。根据任务难易程度设置采集段数。本教程推荐首次采集先设置单任务 50 回合，并根据筛选结果补录，使有效示教达到 50 回合以上。可先试录一次完整抓取和放置，再据此设置每段采集时长。休息时长应足够将当前任务的物品和机械臂恢复到起始位置，简单项目场景通常可设置 10～15 秒。
4. 检查机械臂、摄像头与保存配置。
5. 将物体和机械臂摆到适合开始示教的位置。确保物品所在位置和将要放置的位置都在机械臂可达范围内。首次采集可以先固定物品起点和容器位置，便于每回合恢复场景；后续优化阶段再进行随机位置的数据采集。

![尚未创建数据集时的数据集页面](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/dataset-empty-zh.webp)

![数据集名称、任务描述与采集参数设置](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/dataset-collection-settings-zh.webp)

### 5.2 录制多个 Episode

1. 开始录制。
2. 通过主臂遥操作从臂，完整演示抓取与放置动作。
3. 完成任务后结束本次录制。
4. 检查记录，保留有效示教。
5. 重置物体和机械臂，再录制下一次示教。

每回合开始前，在休息时将方盒放回采集起点，保持杂物盒位置固定，并让机械臂回到一致的起始姿态。录制时依次完成“靠近方盒 → 夹紧 → 抬起 → 移动到杂物盒上方 → 松开”。其余两个任务分别按相同方式录制和重置。

![开始录制示教数据](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/start-recording-zh.webp)

![Episode 录制进度与快捷操作](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/episode-recording-zh.webp)

### 5.3 采集不同任务

如需训练同一个模型执行多个任务，可分别录制各任务的数据，例如：

| 任务 | 指令示例 |
|---|---|
| 抓取方盒放入杂物盒 | Pick up the small box and place it in the organizer box. |
| 抓取橘子放到水果盘 | Pick up the orange and place it on the fruit plate. |
| 抓取甜甜圈放到玩具盒 | Pick up the donut and place it in the toy box. |

本项目共包含三个收纳任务。完成“方盒放入杂物盒”后，为其余两个任务分别创建数据集、填写对应任务描述，并录制各自的示教。每一批数据的指令必须与实际演示动作一致，不要沿用方盒任务的指令。

![三个收纳任务的数据集列表](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/task-datasets-zh.webp)

## 6. 检查与合并数据集

训练前，打开数据集详情，按任务查看 Episode 并检查：

- 任务指令是否准确、完整。
- 画面是否清晰，关键动作是否可见。
- 动作是否完整，是否存在明显失败或无关片段。
- 各任务的数据是否有明显缺失。

完成三个任务的采集和检查后，在合并功能中选择三个对应的数据集，合并后的数据集可命名为“桌面收纳”，并保留每个 Episode 原有的任务归属和指令。随后使用合并后的三任务数据集训练模型。

合并前检查机械臂类型、摄像头配置、采集帧率（FPS）和动作空间等是否兼容。如果平台提示不兼容，请根据提示调整数据来源或重新采集。

例如，三个源数据集各保留 50 个有效 Episode，合并后应检查是否显示 3 个任务、共 150 个 Episode。依次筛选三个任务，各回放几段，确认任务指令与实际示教动作一致，并确认摄像头记录到完整过程。将失败或录制不完整的回合排除出成功示教，再补录缺少的数量。对其余两个任务，也按各自的成功标准检查。

![合并数据集中的任务与 Episode](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/merged-dataset-episodes-zh.webp)

![数据集列表中的合并入口](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/merge-datasets-zh.webp)

![选择并合并三个源数据集](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/merge-datasets-dialog-zh.webp)

## 7. 在云端训练 π0.5

1. 进入 **训练（Train）** 页面。
2. 选择想要使用的云端 GPU。
3. 选择已检查的数据集。
4. 在训练策略中选择 **π0.5**。
5. 使用平台提供的推荐训练配置作为首次训练的起点。
6. 检查页面展示的训练参数及资源、额度或费用信息。
7. 提交训练任务，并在训练页面查看状态和进度。

提交前，平台会检查数据与模型要求是否匹配。如果提示任务指令缺失、相机配置不匹配或其他数据问题，请先修复，再重新提交。

训练完成后，进入 **模型（Models）** 找到本次训练模型。通常任务名称为数据集名称 + 训练策略。

**训练完成代表训练任务已结束，实际任务效果仍需通过真机验证。** 首次迭代时应先运行模型，再根据失败情况决定补数据还是调整训练配置。

![选择用于训练的云端 GPU](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/cloud-gpu-selection-zh.webp)

![π0.5 云端训练状态与进度](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/training-progress-zh.webp)

## 8. 在 SO-ARM 上运行模型

> **运行方式提示：** VLA 模型（尤其是本教程使用的 π0.5）对 GPU 算力和显存要求较高，普通电脑通常难以流畅运行。本教程建议选择云端 GPU 进行推理，机械臂和摄像头仍连接在本地电脑上，由机械臂在本地执行模型输出的动作。请保持网络连接稳定。如需本地推理，请先确认本机硬件和运行环境满足所选模型的要求。

1. 进入 **运行（Run）** 页面。
2. 选择想要使用的云端 GPU。
3. 选择训练完成的 π0.5 模型，以及当前可用、与模型兼容的运行方式。
4. 确认机械臂与摄像头连接正常，配置与训练数据匹配。
5. 将方盒恢复到采集时的起点，杂物盒恢复到采集时的位置，并将机械臂恢复到示教时的起始姿态。首次测试使用与示教一致的摄像头视角、物品和桌面布置。
6. 测试时填写“抓取方盒放到杂物盒中”作为指令，与方盒任务的采集指令保持一致。验证其余两个任务时，分别恢复对应场景并填写各自的原始任务指令。
7. 启动运行，观察机械臂是否完成任务；发现异常动作时及时停止。

对于包含多个任务的模型，可以使用对应指令分别验证各任务。

![SO-ARM 模型运行预览画面](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/run-model-preview-zh.webp)

![配置并开始云端推理](https://files.seeedstudio.com/wiki/sensecraft-robotics/applications/so-arm-pi05/cloud-inference-zh.webp)

## 9. 根据运行结果改进模型

| 观察到的问题 | 建议先检查或补充的内容 |
|---|---|
| 只在少数初始位置成功 | 补充不同物体位置下的正确示教 |
| 经常抓空或放置偏移 | 检查摄像头、机械臂校准和数据质量，补充对应场景示教 |
| 多任务中某个任务效果较差 | 检查该任务指令、Episode 质量与数据覆盖 |
| 换摄像头或场景后效果下降 | 检查配置一致性，并采集新条件下的数据 |
| 动作与任务指令不一致 | 检查 Episode 的任务关联和运行时输入的指令 |

每轮迭代保留数据集版本、训练配置和测试结果，便于判断改动是否有效。首次优化建议优先处理明确的数据问题，再考虑调整训练参数。

## 10. 常见问题

### 一个数据集可以包含多个任务吗？

可以。每个 Episode 应保留正确的任务指令。合并不同任务数据时，还需要保证设备型号、摄像头及其他数据配置兼容。

### 训练完成后，只改一句指令就能完成任意任务吗？

不能这样保证。模型效果取决于基础模型、示教数据和实际场景。建议先验证训练中覆盖的任务，再逐步测试新的指令或条件。

### 评估数据可以继续训练吗？

可以在检查、筛选并确认符合要求后用于后续训练。失败记录可用于分析问题；对于失败场景，应优先补充正确示教。

### 本地空间不足怎么办？

可在软件设置中查看和修改本地数据保存路径，并按界面引导迁移已有数据。迁移完成后，请确认数据集、模型、动作记录和评估数据能够正常访问。
