---
description: "SO-ARM 具身智能入门课程第 16 章 —— 真机推理的工作原理、用 lerobot-record 与 lerobot-rollout 运行训练好的 ACT 策略、按成功率评估、失败归因，以及失败驱动的数据迭代。"
title: 第 16 章 - 真机推理、评估与数据迭代
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - 推理
  - 评估
  - ACT
  - LeRobot
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_16
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_physical_ai_course_chapter_16/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 3 阶段 · 第 16 章 · 理论与实践</span>
    <h2>16. 真机推理、评估与数据迭代</h2>
    <p>
      真机推理的工作原理、用 lerobot-record 与 lerobot-rollout 运行训练好的 ACT 策略、按成功率评估、失败归因分析，以及失败驱动的数据迭代。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>运行前的安全检查</strong>
    <p>
      推理时真机无人操控、全力矩运动。清空 1 米内工作区，手远离机械臂，随时准备断电。
    </p>
  </div>
</div>

<a id="overview"></a>

## 推理数据流

---

回忆第 9 章：推理是数据采集的镜像。每帧循环：

1. 读两台相机 → **观测**；
2. 读从臂 6 个关节 → **状态**；
3. 用数据集里保存的统计量做归一化；
4. 策略预测一个**动作分块**（k × 6）；
5. 开环执行分块的前几步；
6. 执行份额耗尽后重新观测、重新预测。

此时主臂不再使用 —— 模型取代了人成为决策者。其余一切（相机、串行总线、安全限位）与录制时完全相同，这就是相机键与 `--robot.id` 必须与录制会话严格一致的原因。

---

## 预处理与反归一化

---

你的数据集把各特征的统计量（均值 / 标准差）存在了 `meta/stats` 里（第 13 章）。推理时：

- **输入侧**：图像与关节状态先用训练统计量归一化，再进网络；
- **输出侧**：网络输出的归一化动作先反归一化回真实关节值，再发给舵机。

这就是评估命令必须使用与录制时**完全相同的相机键**（`front`、`side`）的原因 —— 键不匹配意味着统计量缺失，你会看到：

```text
mean is infinity. You should either initialize with stats as an argument or use a pretrained model
```

---

## 启动真机推理

---

### 方式 A：带策略的 `lerobot-record`（推荐新手使用）

record 工具可以直接接策略检查点。它会在策略控臂的同时录下一份**评估数据集** —— 录 10 条评估：

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=seeedstudio123/eval_test123 \
  --dataset.single_task="Put the object from Point A into Point B" \
  --policy.path=outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

注意事项：

1. `--policy.path` 是第 15 章的检查点路径。如果已上传 Hub，用 repo id 也行（如 `${HF_USER}/act_so101_test`）；
2. 评估用的 `dataset.repo_id` 惯例以 `eval_` 开头 —— 评估视频与数据单独保存，如 `seeedstudio123/eval_test123`；
3. 遇到 `File exists: '.../eval_xxxx'`，先删掉旧的评估目录再运行；
4. 相机键（`front`、`side`）必须与录数据集时严格一致（见 16.2）。

### 方式 B：`lerobot-rollout` 实时运行

不录数据的在线运行（SmolVLA / ACT 等策略支持）：

```bash
lerobot-rollout \
  --strategy.type=base \
  --policy.path=${HF_USER}/act_policy \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 8, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --display_data=true \
  --task="Your task description" \
  --duration=60
```

---

## 动作分块的执行

---

第 14 章的分块 / 视界之分在这里变得可见：

- 模型每次前向预测 k=100 个动作；
- 只开环执行前一小段就重新观测；
- 旧分块尾部与新分块头部之间的重叠会被平滑（时间集成），所以动作看起来连续而不是一步一步蹦。

如果机械臂"一冲一停" —— 每半秒一次明显停顿 —— 问题出在有效视界或推理速度上：查 GPU 利用率、相机帧率，并考虑异步推理（把策略放到独立的服务进程，思路见第四阶段部署章）。

---

## 安全：限位、限速与急停

---

- 标定得到的关节限位约束每一个下发动作；
- 新检查点首跑时手放在电源开关上 —— 断电是最快的急停（舵机即失力松弛）；
- `lerobot-record` 评估会话中按 ESC 可干净地停止；
- 机械臂附近有人、线缆或桌沿时，绝不要让它无人值守运行。

---

## 评估：成功率与完成时间

---

用第 11 章的成功标准 —— 可客观判定，而不是"看着差不多"：

1. **定义成功**："物体最终落在 B 点标记区域内"；
2. **变化起点**：把物体放到 5 个标记点上，每点重复 N 次；
3. **统计**：成功 / 总数 = 成功率。同时记录平均完成时间 —— 成功得又慢又反复的策略也在告诉你一些事。

每个检查点建议保留这样的结果表：

| 起始点 | 次数 | 成功 | 成功率 |
| :--- | :---: | :---: | :---: |
| 中心 | 4 | 4 | 100% |
| 上方 | 4 | 3 | 75% |
| 左侧 | 4 | 2 | 50% |
| ... | | | |

---

## 泛化测试

---

分布内测试通过后，再有意探测边界（一次只改一个变量）：

- 把物体稍微移出标记区；
- 换物体（同类不同尺寸）；
- 改环境光（日光 vs 夜晚台灯）。

数据分布内应优雅退化、分布外应硬性失败 —— 这是第 8 章的分布原理在真机上的显现。想修复的每一个泛化失败，答案都是覆盖该情形的数据，而不是更多训练步数。

---

## 失败类型分析

---

把每条失败 Episode 归入四类之一 —— 类别决定修法：

| 失败类型 | 表现 | 修法 |
| :--- | :--- | :--- |
| **感知失败** | 在物体左边 3 厘米处抓空 | 数据缺该位置 / 光照覆盖 → 去补数据 |
| **策略失败** | 始终从错误方向接近 | 示教不一致 → 用统一策略重录 |
| **执行失败** | 接近正确但物体滑落 | 数据中夹持力度 / 速度不一致；检查夹爪标定 |
| **系统失败** | 机械臂卡顿、停顿、相机掉帧 | 不是模型问题：fps、USB 带宽、标定、舵机温度 |

---

## 数据迭代：失败驱动的数据采集

---

第三阶段主线的收尾闭环：

1. 评估（16.6）并归类失败（16.8）；
2. 对每一个感知 / 策略类失败，针对性地补录 10–20 条覆盖该情形的数据（第 12 章流程）；
3. 用第 13 章的工具清洗、合并进数据集；
4. 重训（第 15 章）—— 续训或全新训练皆可；
5. 重新评估。循环直到成功率满足你对"完成"的定义。

这个失败驱动的循环 —— 而非任何一次训练 —— 才是真实机器人学习项目的日常。

</div>
