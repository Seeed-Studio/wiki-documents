---
description: "SO-ARM 具身智能入门课程第 21 章 —— 搭建 Isaac-GR00T 环境、用 so100_dualcam 配置在 SO-ARM 数据集上微调 GR00T N1.5，再用 GR00T 推理服务与 SO-100 机器人控制客户端做真机推理，支持工作站或 Jetson AGX Thor。"
title: 第 21 章 - 使用 Isaac GR00T 微调 SO-ARM
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - GR00T
  - VLA
  - 微调
  - 推理
  - Jetson Thor
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_21
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_physical_ai_course_chapter_21/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">第 4 阶段 · 第 21 章 · 实践</span>
    <h2>21. 使用 Isaac GR00T 微调 SO-ARM</h2>
    <p>
      搭建 Isaac-GR00T 环境，用 so100_dualcam 配置在你的 SO-ARM 数据集上微调 GR00T N1.5，再用 GR00T 推理服务与 SO-100 机器人控制客户端做真机推理 —— 工作站或 Jetson AGX Thor 皆可。
    </p>
    <div className="hero-actions">
      <a href="#overview">本章概览</a>
    </div>
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

<a id="overview"></a>

## 选择你的训练路径

---

本章沿用 NVIDIA 官方 [SO101 微调指南](https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning)的 **Isaac-GR00T** 路径 —— 也是 Seeed [SO101 + GR00T on Jetson Thor](/cn/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/) 教程使用的同一套配方。算力有三种来法：

| 路径 | 硬件 | 说明 |
| :--- | :--- | :--- |
| **本地工作站** | RTX 4090 / A6000 级（Ampere 及以上，约 25GB 显存） | 本章默认 |
| **NVIDIA Brev 云端** | 一个浏览器 | 云笔记本中运行同样的命令；训练完导出下载 |
| **完全没有 GPU** | — | 跳到第 22 章：SenseCraft Robotics 无代码路径 |

:::warning
GR00T 训练 / 微调要求 **Ampere 或更新**架构的 GPU（如 RTX A6000、RTX 4090）。**不支持 V100（Volta）**。
:::

---

## 环境搭建

---

建一个独立环境（与 `lerobot` 环境分开也没问题）：

```bash
git clone https://github.com/NVIDIA/Isaac-GR00T
cd Isaac-GR00T
conda create -n gr00t python=3.10
conda activate gr00t
pip install --upgrade setuptools
pip install -e .[base]
pip install --no-build-isolation flash-attn==2.7.1.post4
```

`flash-attn` 是最容易失败的一步 —— 它必须与你的 PyTorch/CUDA 构建匹配。编译报错时：用 `python -c "import torch; print(torch.version.cuda)"` 核对版本，先装 `ninja` 与 `packaging`，再重试。

预训练基础模型首次使用时自动从 Hugging Face 下载：[`nvidia/GR00T-N1.5-3B`](https://huggingface.co/nvidia/GR00T-N1.5-3B/tree/main)。

---

## 在 SO-ARM 数据集上微调

---

第 20 章的数据集就绪后（此处以 `./demo_data/so101-table-cleanup/` 为例 —— 换成你的数据集路径）：

```bash
python scripts/gr00t_finetune.py \
   --dataset-path ./demo_data/so101-table-cleanup/ \
   --num-gpus 1 \
   --output-dir ./so101-checkpoints  \
   --max-steps 10000 \
   --data-config so100_dualcam \
   --video-backend torchvision_av
```

关键参数：

- `--dataset-path`：你的 LeRobot 数据集目录（第 20 章准备的那份）；
- `--data-config so100_dualcam`：SO-ARM 标准双相机配置；
- `--max-steps`：约 50 条数据先用 10,000 步起步很稳；
- `--video-backend torchvision_av`：视频解码后端；
- 想从本地预下载的基础模型微调，加 `--base-model-path ./pretrained/GR00T-N1.5-3B`。

:::note
默认微调设置约需 **25GB 显存**。显存不够时加 `--no-tune_diffusion_model` —— 冻结 DiT 动作头，训练得更少，但能塞进更小的卡。
:::

按第 15 章的方法监控 Loss；注意每步耗时明显高于 ACT —— 模型约 30 亿参数。

### 从云端笔记本导出（Brev 路径）

Jupyter 侧栏无法直接进入训练目录。先把 checkpoint 目录压缩成 `.zip` 或 `.tar.gz`，再通过笔记本界面下载压缩包。

---

## 运行推理：服务端 + 机器人控制客户端

---

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>运行前的安全检查</strong>
    <p>
      推理时真机无人操控运动。清空工作区，手远离机械臂，随时准备断电。
    </p>
  </div>
</div>

要获得最佳效果，请尽量复刻采数据时的布置 —— 相同的相机、相同的位置、相同的光照。模型的泛化能力是有限的。

**终端 1 —— 启动 GR00T 推理服务：**

```bash
python scripts/inference_service.py --server \
    --model_path ./so101-checkpoints \
    --embodiment-tag new_embodiment \
    --data-config so100_dualcam \
    --denoising-steps 4
```

**终端 2 —— 启动机器人控制客户端**（官方 SO-100 示例，正是为这条臂写的）：

```bash
python examples/SO-100/eval_lerobot.py \
    --robot.type=so100_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ wrist: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, front: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
    --policy_host=0.0.0.0 \
    --lang_instruction="Grab pens and place into pen holder."
```

注意事项：

- 把 `index_or_path` 换成你的相机索引 —— 用 `ls /dev/video*` 或 `lerobot-find-cameras opencv` 查找。必须是数据集里那**两路视角**（前视 + 侧视 / 夹爪）；
- `--lang_instruction` 换成你数据集里的准确任务句 —— 这就是语言条件的现场（第 18 章）；
- 客户端与服务端可同机运行，也可以让服务端跑在网内有 GPU 的机器 / Jetson Thor 上。

---

## 在 Jetson AGX Thor 上做边缘部署

---

Jetson AGX Thor 的算力足以在边缘运行 GR00T N1.5 推理。GR00T 的全部依赖都在专用 Docker 镜像里：

```bash
sudo docker run --rm -it \
  --network=host \
  -e NVIDIA_DRIVER_CAPABILITIES=compute,utility,video,graphics \
  --runtime nvidia \
  --privileged \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  -v /etc/X11:/etc/X11 \
  --device /dev/nvhost-vic \
  -v /dev:/dev \
  <image_name>:<tag>
```

容器内：

```bash
git clone https://github.com/NVIDIA/Isaac-GR00T.git
cd Isaac-GR00T
pip install --upgrade setuptools
pip install -e .[thor]
```

微调（可选，云端没做过的话）与 21.3 的 `gr00t_finetune.py` 命令相同；然后照 21.4 跑同一套服务端 + 客户端。完整的 Jetson Thor 流程 —— 刷机、环境、数据采集、Brev 训练、部署 —— 见完整教程：[微调 GR00T N1.5 并部署到 Jetson Thor 上的 LeRobot SO-ARM](/cn/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/)。

---

## 替代路径：LeRobot 的 `groot` 策略

---

如果更想留在第三阶段的 LeRobot 工具链里，`--policy.type=groot` 策略也可用（同样需要 `flash-attn` 与 CUDA GPU）：

```bash
pip install "lerobot[groot]"

accelerate launch \
  --num_processes=1 \
  $(which lerobot-train) \
  --output_dir=outputs/train/groot_so101 \
  --save_checkpoint=true \
  --batch_size=64 \
  --steps=20000 \
  --policy.type=groot \
  --policy.repo_id=${HF_USER}/groot_so101 \
  --dataset.repo_id=seeedstudio123/test \
  --wandb.enable=true
```

环境要求比 ACT / Pi0 更高 —— 官方建议不变：先把 ACT 端到端跑通，再试 GR00T。评估沿用第 16 章熟悉的 `lerobot-record ... --policy.path` 配方。

---

## 评估与迭代

---

完整复用第 16 章的框架 —— 成功标准、变化起点、成功率、失败归类 —— 加两条 VLA 特有的补充：

1. **指令矩阵**：把数据集里的每个任务句都评一遍；VLA 应当在你换句子时切换行为；
2. **同权重新指令探测**：试一句你**没录过**的句子 —— 成功的部分是语言泛化，失败的部分是第 18 章分布边界的显现。用数据回应失败，而不是用期望。

---

## 排错 FAQ

---

| 问题 | 解决 |
| :--- | :--- |
| 模型下载失败 / 慢 | 手动下载 [`nvidia/GR00T-N1.5-3B`](https://huggingface.co/nvidia/GR00T-N1.5-3B/tree/main)，传 `--base-model-path` |
| `flash-attn` 编译失败 | 核对 PyTorch/CUDA 匹配；先装 `ninja` + `packaging`；用固定的 `2.7.1.post4` |
| 微调 CUDA 显存不足 | 加 `--no-tune_diffusion_model`；降批大小 |
| V100 被拒 | 预期行为 —— 需要 Ampere 及以上 |
| 客户端连不上服务端 | `--policy_host` 填服务端可达的 IP；查防火墙 / 端口 |
| 机械臂动但不理任务 | 相机键或指令句与数据集不匹配 —— 第 19–20 章的规则 |

</div>
