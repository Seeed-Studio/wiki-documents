---
description: "SO-ARM101 Sim-to-Real VLA 课程第 17 章 —— 在 Jetson 上准备数据集与模型资产：带 modality.json 的 v2 数据集、微调后的 checkpoint、VLM backbone。"
title: 第 17 章 - 准备数据集与模型资产
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Jetson
  - GR00T N1.7
  - 数据集
  - checkpoint
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_17
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_sim2real_vla_chapter_17/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">模块 4 · 第 17 章 · Deploy on Jetson</span>
    <h2>17. 准备数据集与模型资产</h2>
    <p>
      把转换后的数据集、微调后的 checkpoint 和 VLM backbone 复制到 Jetson，
      并验证 TensorRT 导出所需的一切都在位。
    </p>
    <div className="hero-actions">
      <a href="#compat">兼容性</a>
      <a href="#dataset">数据集</a>
      <a href="#checkpoint">checkpoint</a>
      <a href="#backbone">backbone</a>
      <a href="#checklist">检查清单</a>
    </div>
  </div>
</section>

## 17.1 数据集兼容性

<section id="compat" className="section-card">
  <div className="section-title">
    <span>与训练严格一致</span>
    <h2>17.1 数据集兼容性</h2>
  </div>

转换后的数据集必须保留微调时使用的相机键、状态/动作维度、任务标签与
episode 边界。

对 SO-ARM101 来说即：

- `meta/modality.json` 里映射的 `wrist` 和 `front` 相机键，与
  [第 10 章](cn_Sim2Real_VLA_10.md)创建的完全一致；
- 六维状态/动作：`single_arm` 0–5、`gripper` 5–6；
- `so101_config.py` 注册的本体标签 `NEW_EMBODIMENT`。

训练之后不要重命名相机模态。

</section>

## 17.2 转换并复制数据集

<section id="dataset" className="section-card">
  <div className="section-title">
    <span>v2.1 布局</span>
    <h2>17.2 转换并复制数据集</h2>
  </div>

尚未转换的话，先在工作站上运行转换器（与第 10 章相同的命令）：

```bash
cd ~/Isaac-GR00T
uv run --project scripts/lerobot_conversion \
  python scripts/lerobot_conversion/convert_v3_to_v2.py \
  --repo-id so101_vials_real \
  --root $HOME/rebot-arm-dli-isaacsim/datasets
```

把转换后的数据集（连同 `meta/modality.json`）复制进 Jetson 工作区路径：

```bash
rsync -av \
  ~/rebot-arm-dli-isaacsim/datasets/so101_vials_real/ \
  jetson:"${GR00T_DATASET_PATH}/"
```

校验 GR00T 需要的布局：

```text
${GR00T_DATASET_PATH}/
├── data/chunk-000/episode_000000.parquet
├── videos/chunk-000/observation.images.front/episode_000000.mp4
└── meta/
    ├── episodes.jsonl
    ├── info.json
    ├── modality.json
    ├── stats.json
    └── tasks.jsonl
```

```bash
source "${HOME}/.config/gr00t-inference/paths.sh"
test -f "${GR00T_DATASET_PATH}/meta/info.json"
test -f "${GR00T_DATASET_PATH}/meta/modality.json"
test -f "${GR00T_DATASET_PATH}/meta/stats.json"
test -f "${GR00T_DATASET_PATH}/meta/tasks.jsonl"
find "${GR00T_DATASET_PATH}/data" -name 'episode_*.parquet' | head
```

</section>

## 17.3 准备微调后的 checkpoint

<section id="checkpoint" className="section-card">
  <div className="section-title">
    <span>只要权重</span>
    <h2>17.3 准备微调后的 checkpoint</h2>
  </div>

把第 10 章的 checkpoint 目录复制到 `${GR00T_MODEL_PATH}`，然后验证：

```bash
test -f "${GR00T_MODEL_PATH}/config.json"
test -f "${GR00T_MODEL_PATH}/processor_config.json"
test -f "${GR00T_MODEL_PATH}/statistics.json"
test -f "${GR00T_MODEL_PATH}/model.safetensors.index.json"
ls "${GR00T_MODEL_PATH}"/model-*-of-*.safetensors
```

`optimizer.pt`、`scheduler.pt`、`trainer_state.json` 等训练态文件在推理与
TensorRT 导出中都不需要。

</section>

## 17.4 准备 VLM backbone

<section id="backbone" className="section-card">
  <div className="section-title">
    <span>Cosmos-Reason2-2B</span>
    <h2>17.4 准备 VLM backbone</h2>
  </div>

GR00T 1.7 默认使用 `nvidia/Cosmos-Reason2-2B`：

```bash
hf download nvidia/Cosmos-Reason2-2B \
  --local-dir "${GR00T_BACKBONE_PATH}"

test -f "${GR00T_BACKBONE_PATH}/config.json"
test -f "${GR00T_BACKBONE_PATH}/model.safetensors" || \
  test -f "${GR00T_BACKBONE_PATH}/model.safetensors.index.json"
```

经验证的仓库也可以通过 `GR00T_BACKBONE_PATH` 使用
`Qwen/Qwen3-VL-2B-Instruct`。Qwen3-VL 是该 checkpoint 与仓库修订下经过验证
的替代方案，并非 GR00T 1.7 官方默认。

</section>

## 17.5 资产就绪检查

<section id="checklist" className="section-card">
  <div className="section-title">
    <span>进入第 18 章之前</span>
    <h2>17.5 资产就绪检查</h2>
  </div>

- [ ] 数据集 episode 与视频符合按 episode 的布局；
- [ ] 相机键、本体标签、状态与动作维度与训练一致；
- [ ] checkpoint 含全部分片与 GR00T 元数据；
- [ ] 选定的 VLM backbone 已固定并存在于本地。

下一章：[第 18 章 —— 运行 GR00T N1.7 TensorRT 推理](cn_Sim2Real_VLA_18.md)。

</section>

</div>