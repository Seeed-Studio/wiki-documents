---
description: "SO-ARM101 Sim-to-Real VLA 课程第 13 章（可选）—— 数据增强：用 NVIDIA Cosmos Transfer 把已录 episode 重新渲染到新场景，再合入协同训练。"
title: 第 13 章 - 数据增强（可选）
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Cosmos Transfer
  - 数据增强
  - 协同训练
  - 课程
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_13
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/cn/robotics/soarm_sim2real_vla_chapter_13/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">模块 3 · 第 13 章 · 可选 · 数据增强</span>
    <h2>13. 数据增强</h2>
    <p>
      真实数据昂贵而单调。用 NVIDIA Cosmos Transfer 在保持机器人运动的前提下
      把已录 episode 重渲染到新场景——再用扩充后的数据集协同训练。
    </p>
    <div className="hero-actions">
      <a href="#why">为什么增强</a>
      <a href="#cosmos">Cosmos Transfer</a>
      <a href="#setup">环境</a>
      <a href="#data">准备数据</a>
      <a href="#inference">推理</a>
      <a href="#integration">合入训练</a>
    </div>
  </div>
</section>

:::note 本章为可选进阶内容
建议先完成真实世界闭环（采集 → 训练 → 评估，第 9–11 章）。本流程对第 9 章
的真实数据集和第 12 章的仿真数据集都适用。
:::

## 13.1 为什么要增强

<section id="why" className="section-card">
  <div className="section-title">
    <span>真实数据的局限</span>
    <h2>13.1 为什么要增强</h2>
  </div>

在真实场景采数据成本高、限制多：

- **环境有限**：通常只在少数几个固定场景采集；
- **背景过拟合**：策略网络可能学到与任务无关的背景特征（墙色、光照、物体
  摆放），导致换个环境就失效；
- **采集成本高**：每加一个场景都要重新部署、重新校准、重新采集。

我们利用最先进的 Cosmos Transfer 模型修改视频场景，扩充数据集多样性、提升
模型鲁棒性。

</section>

## 13.2 Cosmos Transfer 的工作原理

<section id="cosmos" className="section-card">
  <div className="section-title">
    <span>视频到视频</span>
    <h2>13.2 Cosmos Transfer 的工作原理</h2>
  </div>

**NVIDIA Cosmos** 是为加速物理 AI（机器人与自动驾驶）开发的基座 AI 平台。
Cosmos Transfer 是一个**视频到视频**生成模型，接收三种输入：

| 输入 | 作用 | 示例 |
|---|---|---|
| 源视频（vision） | 提供时序动态信息 | SO-101 外部相机操作视频 |
| 控制信号（controls） | 约束空间结构、保持机器人形态 | Canny 边缘图 + SAM2 分割图 |
| 文本提示（prompt） | 描述目标场景外观 | "A modern laboratory with white lab benches..." |

控制信号（边缘 + 分割）锁住机器人的形状与运动；文本提示决定新背景的样子。

| 控制类型 | 作用 | 需要预计算吗 |
|---|---|---|
| Edge | 保持物体轮廓，防止主体变形 | 可选（框架可自动算 Canny） |
| Segmentation | 保持语义区域（机器人/物体/背景） | 需要（依赖 SAM2） |
| Blur | 保持全局布局，允许纹理变化 | 可选 |
| Depth | 保持空间深度关系 | 需要（依赖 DepthAnything） |

:::tip 动作标签可以直接复用
Transfer 保持机器人的运动轨迹，因此增强视频可以直接沿用原始动作（关节角、
夹爪状态）。高边缘权重（0.9）正是这种复用安全的原因。
:::

</section>

## 13.3 环境搭建

<section id="setup" className="section-card">
  <div className="section-title">
    <span>GPU 与安装</span>
    <h2>13.3 环境搭建</h2>
  </div>

硬件要求：

| 模型 | 最低显存 | 推荐 GPU |
|---|---|---|
| Cosmos-Nano | ~24 GB | 单卡 RTX 4090 / A5000 / Jetson AGX Thor |
| Cosmos-Super | ~80 GB × 4 | 4× A100 / H100 |

安装：

```bash
# 克隆 Cosmos 仓库
git clone https://github.com/NVIDIA/Cosmos.git
cd Cosmos

# 进入框架目录
cd packages/cosmos3

# 创建虚拟环境
uv venv --python 3.13
source .venv/bin/activate

# 安装依赖
uv pip install -e ".[inference]"

# 登录 Hugging Face 并下载模型权重
huggingface-cli login
hf download nvidia/Cosmos-Nano --local-dir /path/to/models/Cosmos-Nano
```

</section>

## 13.4 准备数据

<section id="data" className="section-card">
  <div className="section-title">
    <span>控制信号与提示词</span>
    <h2>13.4 准备数据</h2>
  </div>

目录结构：

```text
your_project/
├── controls/
│   └── episode_000/
│       ├── vision.mp4                # 源视频（机器人录制）
│       ├── control_edge.mp4           # Canny 边缘图
│       └── control_seg.mp4            # SAM2 分割图
├── prompts/
│   ├── lab_prompt.json               # 目标场景提示词
│   └── workshop_prompt.json
├── specs/
│   └── my_lab.json                   # 推理配置
├── negative_prompt.json
└── outputs/
```

从 SO-101 数据集抽取一段（俯视 `external` 流的结构最适合增强）：

```bash
ffmpeg -i ~/rebot-arm-dli-isaacsim/datasets/so101_vials_real/videos/chunk-000/observation.images.external/episode_000000.mp4 \
  -c copy your_project/controls/episode_000/vision.mp4
```

生成边缘控制信号：

```python
python -c "
import cv2
cap = cv2.VideoCapture('your_project/controls/episode_000/vision.mp4')
fps = cap.get(cv2.CAP_PROP_FPS)
w, h = int(cap.get(3)), int(cap.get(4))
out = cv2.VideoWriter('your_project/controls/episode_000/control_edge.mp4',
                      cv2.VideoWriter_fourcc(*'avc1'), fps, (w, h), True)
while True:
    ret, frame = cap.read()
    if not ret: break
    edges = cv2.Canny(cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY), 50, 150)
    out.write(cv2.cvtColor(edges, cv2.COLOR_GRAY2BGR))
cap.release(); out.release()
print('edge control done')
"
```

用 SAM2 生成分割信号（需单独安装）：

```bash
pip install sam2
python your_sam2_script.py \
  --input your_project/controls/episode_000/vision.mp4 \
  --output your_project/controls/episode_000/control_seg.mp4
```

编写场景提示词，例如 `prompts/lab_prompt.json`：

```json
{
  "subjects": [{
    "description": "A white SO-ARM101 robotic arm performing a tabletop pick-and-place task",
    "appearance_details": "White 3D-printed links, small two-finger gripper, wrist-mounted camera",
    "action": "pick up a vial and place it into a yellow rack",
    "pose": "Arm reaches toward the vial, gripper closes, the vial lifts and moves to the rack",
    "state_changes": "Gripper transitions from open to closed; the held vial is lifted and placed"
  }],
  "background_setting": "A modern laboratory with white lab benches, soft diffuse lighting, and a plain grey mat",
  "lighting": {
    "description": "Even, diffuse overhead lighting with no hard shadows"
  }
}
```

</section>

## 13.5 运行推理

<section id="inference" className="section-card">
  <div className="section-title">
    <span>生成</span>
    <h2>13.5 运行推理</h2>
  </div>

```bash
cd /path/to/cosmos/packages/cosmos3

export TRANSFER_ROOT="/path/to/your_project"

CUDA_VISIBLE_DEVICES=0 \
  .venv/bin/python -m cosmos_framework.scripts.inference \
    --parallelism-preset=latency \
    -i "$TRANSFER_ROOT/specs/my_lab.json" \
    -o "$TRANSFER_ROOT/outputs/" \
    --checkpoint-path Cosmos-Nano \
    --seed 2026
```

引导参数（权重比例才起作用；总和应 ≈ 1.0）：

| 参数 | 推荐 | 作用 |
|---|---|---|
| `guidance` | 3.0 | 文本 CFG 强度——新场景对提示词的跟随程度 |
| `control_guidance` | 1.5 | 控制 CFG 强度——运动保持的严格程度 |
| `edge.weight` | 0.75–0.9 | 保持主体结构 |
| `seg.weight` | 0.1–0.25 | 辅助语义一致性 |

:::caution 如果机器人变形
提高 `edge.weight`（0.9 → 0.95）、降低 `seg.weight`、调高 `control_guidance`。
背景几乎没变时提高 `guidance` 并把目标场景写得更细。OOM 时：分辨率降到
`"480"`、`num_video_frames_per_chunk` 降到 33。
:::

批量生成：把命令包在对 episode 目录的 shell 循环里，即可跨多个目标场景成倍
扩充数据集。

</section>

## 13.6 合入训练流水线

<section id="integration" className="section-card">
  <div className="section-title">
    <span>回到 GR00T</span>
    <h2>13.6 合入训练流水线</h2>
  </div>

增强视频复用原 episode 的动作与状态标签——无需重标。合入训练：

1. 把增强 episode 构建成 LeRobot 数据集（相同的六维关节列、相同的
   `front`/`external` 相机键、相同任务句）；
2. 像第 12 章合并仿真数据一样与真实数据集合并——特征一致的源都可以用
   `lerobot-edit-dataset --operation.type=merge`；
3. 按[第 10 章](cn_Sim2Real_VLA_10.md)把合并集转成 GR00T v2 并微调，源规模
   不均时调 `EPISODE_SAMPLING_RATE` / `DS_WEIGHTS_ALPHA`。

训练前先做质量检查：逐帧确认机器人形态正确、背景可信；然后做一次短时策略
迁移测试——用增强数据短训一版，与只用真实数据训的版本比真实成功率。

</section>

## 13.7 参考资料

<section id="references" className="section-card">
  <div className="section-title">
    <span>链接</span>
    <h2>13.7 参考资料</h2>
  </div>

- [Cosmos 文档](https://docs.nvidia.com/cosmos)
- [Cosmos Transfer Cookbook](https://github.com/NVIDIA/Cosmos/tree/main/cookbooks/cosmos3/generator/transfer)
- [NVIDIA SO-101 Workshop —— 策略三：用 Cosmos 增强数据集](https://docs.nvidia.com/learning/physical-ai/sim-to-real-so-101/latest/14-strategy3-cosmos.html)

继续模块 4：[第 14 章 —— 准备 Jetson 边缘设备](cn_Sim2Real_VLA_14.md)。

</section>

</div>