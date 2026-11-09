---
description: "SO-ARM 具身智能入门课程第 13 章 —— LeRobot 数据集在磁盘上长什么样、四条质量标准、可视化与回放，以及 lerobot-edit-dataset 数据集工具箱：删除、拆分、合并与转视频。"
title: 第 13 章 - 数据集结构与质量检查
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - 数据集
  - 可视化
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_13
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_physical_ai_course_chapter_13/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 3 阶段 · 第 13 章 · 理论与实践</span>
    <h2>13. 数据集结构与质量检查</h2>
    <p>
      LeRobot 数据集在磁盘上长什么样、好数据的四条标准、可视化与真机回放，以及 lerobot-edit-dataset 工具箱：删除、拆分、合并与图像转视频。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 数据集结构：磁盘上到底存了什么

---

第 12 章录制的本地数据集位于 `~/.cache/huggingface/lerobot/<repo_id>/`：

```text
├── meta/
│   ├── info.json          ← 机器人、fps、特征、相机键
│   ├── episodes/          ← 每条 Episode 的元数据
│   ├── stats/             ← 每个特征的统计量（训练必需！）
│   └── tasks/             ← 任务描述
├── data/                  ← parquet 帧：观测 / 状态 / 动作
└── videos/                ← 编码后的相机视频流（video=true 时）
```

三个值得刻进脑子的事实：

- **相机键是数据契约的一部分。** `front` 与 `side` 会变成 `observation.images.front` / `observation.images.side`。训练与评估必须使用相同的键；
- **统计量在录制结束后才计算。** 这就是不要中途强杀录制会话的原因；
- **`single_task` 字符串存在 `meta/tasks` 里** —— 第四阶段的语言标注正是建立在这个字段上。

---

## 什么算"好"数据：四条标准

---

1. **完整性**：每条都完整走完"接近 → 抓取 → 搬运 → 放置 → 收回"，没有中途截断；
2. **一致性**：策略、速度、节奏统一；相机与场景未被改动；
3. **覆盖度**：目标位置覆盖标记网格，而不是挤在一个角落；
4. **干净度**：没有失败的抓取留在里面、没有物体出画面的帧、没有主臂挡住相机。

---

## 可视化与回放

---

### 可视化数据集

**在线** —— 如果录制时用了 `--dataset.push_to_hub=true`，把 repo id 粘贴进官方可视化工具：[https://huggingface.co/spaces/lerobot/visualize_dataset](https://huggingface.co/spaces/lerobot/visualize_dataset)

**本地** —— 同一个查看器离线也能用：

```bash
lerobot-dataset-viz \
    --repo-id seeedstudio123/test \
    --mode local \
    --episode-index 0
```

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/visualize_datasets.png" alt="数据集可视化" />
</div>

### 在真机上回放一条 Episode

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>运行前的安全检查</strong>
    <p>
      回放会让真机从臂重演录制的动作。开始前清空工作区、手远离机械臂。
    </p>
  </div>
</div>

`replay` 功能可以把任何已录制（或他人的）Episode 在真机上重演 —— 检查动作一致性最好的办法：

```bash
lerobot-replay \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --dataset.repo_id=seeedstudio123 \
    --dataset.root=~/.cache/huggingface/lerobot/seeedstudio123 \
    --dataset.episode=0
```

`dataset.root` 是数据集的物理路径；`repo_id` 是采集时定义的名字；`episode` 是从 0 开始的编号。机械臂应当复现你录制的动作 —— 偏差很大时，先怀疑标定漂移，再怀疑数据。

### 发现问题怎么办

- **坏的一条（掉落、抓空、遮挡）**：删掉 —— 见下一节；
- **系统性问题（每条抓取方向都不一样）**：数据设计问题 —— 修协议重录，删数据没用；
- **统计量异常（可视化中出现无穷 / NaN）**：通常是坏条造成的；删除后重新生成。

---

## 数据集工具箱：lerobot-edit-dataset

---

所有数据集"手术"都用 `lerobot-edit-dataset` 加对应的 `--operation.type` 完成。

### 删除 Episode

删除指定的坏条（此处删 0、2、5）：

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test \
    --operation.type delete_episodes \
    --operation.episode_indices "[0, 2, 5]"
```

或者删除后存成**新**数据集、保留原始数据：

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test \
    --new_repo_id seeedstudio123/test_clean \
    --operation.type delete_episodes \
    --operation.episode_indices "[0, 2, 5]"
```

:::tip
原地删除后，原始数据会备份到数据集旁边的 `_old` 文件夹（例如 `.../test_old/`）。确认新数据集没问题后，可自行删除备份。
:::

### 拆分数据集

按比例拆（如 80% 训练 / 10% 测试 / 10% 验证）—— 生成 `test_train`、`test_test`、`test_val`：

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test \
    --operation.type split \
    --operation.splits '{"train": 0.8, "test": 0.1, "val": 0.1}'
```

或按显式 Episode 编号拆分：

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test \
    --operation.type split \
    --operation.splits '{"task1": [0, 1, 2, 3], "task2": [4, 5]}'
```

### 合并数据集

把多个会话录制的批次合并（任务描述必须完全一致）：

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test_merged \
    --operation.type merge \
    --operation.repo_ids "['seeedstudio123/test_batch1', 'seeedstudio123/test_batch2']"
```

### 移除特征

删掉不想再训练的相机（例如只保留腕部相机）：

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test \
    --operation.type remove_feature \
    --operation.feature_names "['observation.images.side']"
```

### 图像转视频

把图像型数据集转成视频格式 —— 存储更小、训练读取更快：

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test_image \
    --new_repo_id seeedstudio123/test_video \
    --operation.type convert_image_to_video \
    --operation.vcodec libsvtav1 \
    --operation.pix_fmt yuv420p \
    --operation.g 2 \
    --operation.crf 30
```

实用选项：`--operation.output_dir`（自定义输出路径）、`--operation.num_workers 8`（并行编码）、`--operation.max_episodes_per_batch` / `--operation.max_frames_per_batch`（内存受限的机器）。转换结果是完整、标准的 LeRobotDataset —— 视频在 `videos/` 下，元数据全部保留。

---

## 本章 FAQ

---

- **用哪个 LeRobot 仓库？** 第 5 章那个经过验证的：`https://github.com/Seeed-Projects/lerobot.git`。官方仓库持续更新，数据集版本或命令语法可能变化；
- **操作看起来卡住了。** 按一下回车刷新终端输出。新数据集格式是压缩存储的，操作耗时正常 —— 看进度条耐心等；
- **参考**：官方文档 [Using dataset tools](https://huggingface.co/docs/lerobot/using_dataset_tools)。

</div>
