---
description: "如何用 LeRobot 训练双臂 SO-ARM 策略：校准四条机械臂、遥操作、录制数据集、训练 ACT，并部署到真实机器人。"
title: SO-Arm 双臂玩法
keywords:
  - LeRobot
  - SO-ARM
  - Double Arm
  - Robotics
  - Training
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/double_soarm/Arm_kit.webp
slug: /lerobot_double_arm_so_arm_training
sku: 114993666,114993667
last_update:
  date: 7/1/2026
  author: ZhuYuan
url: https://wiki.seeedstudio.com/cn/lerobot_double_arm_so_arm_training/
createdAt: '2026-07-01'
updatedAt: '2026-09-16'
---

import '/src/css/rebot-wiki-style.css';
import '/src/css/soarm101-pinocchio-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 双臂 SO-ARM 训练完整指南 {#双臂-so-arm训练完整指南}

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/double_soarm/Arm_kit.webp" width={800} height={456} style={{height: 'auto'}} alt="双臂 SO-ARM 机械臂套件" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://detail.tmall.com/item.htm?ali_refid=a3_430582_1006%3A1275650054%3AH%3AYucC228IGpqMtf32QaDj%2BGR0sEFBfk9z%3Ae391f80d3270e0fba3f97fd66100a726&amp;ali_trackid=318_e391f80d3270e0fba3f97fd66100a726&amp;id=877820346195&amp;mi_id=0000QdaT5iMFgRPNvhyKJJ0Pvv83CID3s-w3LQcF_zT-XZ0&amp;mm_sceneid=0_0_894990015_0_0&amp;priceTId=215042e217949669376555482e0e61&amp;spm=a21n57.1.hoverItem.1&amp;utparam=%7B%22aplus_abtest%22%3A%2217b960a684dfd2c5a93d48bbf5436016%22%7D&amp;xxc=ad_ztc&amp;skuId=6321729994785" target="_blank" rel="noopener noreferrer">
    <span>立即获取 SO-ARM101</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

## 简介

本指南介绍如何使用 LeRobot 训练双臂 SO-ARM 机器人系统的完整流程，包括硬件连接、双臂标定、双臂遥操作、数据集录制与管理、ACT 策略训练以及真实机器人部署。按照本指南操作，你可以使用两个主臂和两个从臂采集示教数据，训练模仿学习策略，并在真实机械臂上运行。

### 推荐学习路线

<div className="rebot-page rebot-step-flow soarm-learning-path">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4><a href="#0-前置准备">前置准备</a></h4>
<p>安装 LeRobot，核对四条机械臂的串口。</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">
<h4><a href="#1-标定关键步骤">标定机械臂</a></h4>
<p>分别标定左、右主臂和从臂。</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4><a href="#2-双臂遥操作">双臂遥操作</a></h4>
<p>确认主从控制，再按需接入摄像头。</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4><a href="#3-录制数据集">录制数据集</a></h4>
<p>录制双臂示教，按需续录和回放。</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">
<h4><a href="#4-act-训练">训练 ACT 策略</a></h4>
<p>选择本地或 Hub 数据集作为训练输入。</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">
<h4><a href="#5-真实机器人部署">真机评估</a></h4>
<p>加载检查点并保存评估数据。</p>
</div>
</section>

</div>

### 双臂 SO-ARM 协作演示

<div className="video-container">
  <iframe src="https://player.bilibili.com/player.html?isOutside=true&aid=116962059355405&bvid=BV17dgr6GEEh&cid=40185169679&p=1&autoplay=0" title="双臂 SO-ARM 协作演示" width="900" height="500" loading="lazy" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
</div>

## 0. 前置准备

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

### 安装依赖 {#01-安装依赖}

<p className="rebot-step-label">第 1 步</p>

按 [SO-ARM 快速入门](/cn/lerobot_so100m_new/#安装-lerobot) 配置 LeRobot 环境。

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

### 连接机械臂并检查 USB 权限 {#02-usb-权限}

<p className="rebot-step-label">第 2 步</p>

先核对四条机械臂实际分配到的串口。后续命令以表格为例，请按你的设备替换，并保持左右臂对应。

| 角色 | 示例串口 | LeRobot 类型 |
| --- | --- | --- |
| 左从臂 | `/dev/ttyACM0` | `so101_follower` |
| 右从臂 | `/dev/ttyACM1` | `so101_follower` |
| 左主臂 | `/dev/ttyACM2` | `so101_leader` |
| 右主臂 | `/dev/ttyACM3` | `so101_leader` |

`so100_leader` 和 `so101_leader` 共用同一实现。

```bash
sudo chmod 666 /dev/ttyACM0 /dev/ttyACM1 /dev/ttyACM2 /dev/ttyACM3
```

</div>
</section>

</div>

## 1. 标定（关键步骤）

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

### 标定左从臂 {#11-标定左从臂}

<p className="rebot-step-label">第 1 步</p>

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_bimanual_follower_left
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

### 标定右从臂 {#12-标定右从臂}

<p className="rebot-step-label">第 2 步</p>

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower_right
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">

### 标定左主臂 {#13-标定左主臂}

<p className="rebot-step-label">第 3 步</p>

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM2 \
  --teleop.id=my_awesome_bimanual_leader_left
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">

### 标定右主臂 {#14-标定右主臂}

<p className="rebot-step-label">第 4 步</p>

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader_right
```

</div>
</section>

</div>

标定成功后，检查终端打印的实际保存路径。当前 Seeed LeRobot 默认使用下表目录，文件名为相应的 `<id>.json`。

| 类别 | 校准文件目录 |
| --- | --- |
| 从臂 | `~/.cache/huggingface/lerobot/calibration/robots/so_follower/` |
| 主臂 | `~/.cache/huggingface/lerobot/calibration/teleoperators/so_leader/` |

<div className="rebot-page soarm-guide">

<details className="rebot-demo-details" id="可选如果之前已用其他-id-标定过">
<summary>可选：复用同一机械臂的标定文件</summary>

仅在原校准文件对应同一条实体机械臂时复用。下方是旧 ID 的示例，先核对日志中的目录和文件名。

```bash
CAL_DIR=~/.cache/huggingface/lerobot/calibration

cp $CAL_DIR/robots/so_follower/my_awesome_follower_arm1.json \
   $CAL_DIR/robots/so_follower/my_awesome_bimanual_follower_left.json

cp $CAL_DIR/robots/so_follower/my_awesome_follower_arm2.json \
   $CAL_DIR/robots/so_follower/my_awesome_bimanual_follower_right.json

cp $CAL_DIR/teleoperators/so_leader/my_awesome_leader_arm3.json \
   $CAL_DIR/teleoperators/so_leader/my_awesome_bimanual_leader_left.json

cp $CAL_DIR/teleoperators/so_leader/my_awesome_leader_arm4.json \
   $CAL_DIR/teleoperators/so_leader/my_awesome_bimanual_leader_right.json
```

</details>

</div>

## 2. 双臂遥操作

<span id="安全提示" aria-hidden="true" />

:::caution 安全提示
操作前请固定机械臂、清空运动范围，并确认每条主臂对应正确的从臂。
:::

<span id="21-不带摄像头" aria-hidden="true" />
<span id="22-带摄像头" aria-hidden="true" />

<Tabs defaultValue="no-camera">
<TabItem value="no-camera" label="不带摄像头">

```bash
lerobot-teleoperate \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --teleop.type=bi_so_leader \
  --teleop.left_arm_config.port=/dev/ttyACM2 \
  --teleop.right_arm_config.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader \
  --display_data=true
```

</TabItem>
<TabItem value="with-camera" label="带摄像头">

用 `lerobot-find-cameras opencv` 查看实际索引，并替换下方示例中的摄像头索引。

```bash
lerobot-teleoperate \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30}
  }' \
  --teleop.type=bi_so_leader \
  --teleop.left_arm_config.port=/dev/ttyACM2 \
  --teleop.right_arm_config.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader \
  --display_data=true
```

</TabItem>
</Tabs>

## 3. 录制数据集

这里的「剧集」指一次完整的机器人动作录制。

用 `lerobot-find-cameras opencv` 查看实际索引，并替换下方示例中的摄像头索引。

<span id="31-保存到本地不上传-hub" aria-hidden="true" />
<span id="32-上传到-hugging-face-hub" aria-hidden="true" />

<Tabs defaultValue="local">
<TabItem value="local" label="保存到本地">

示例关闭上传并使用默认缓存目录。需要自定义路径时，可加 `--dataset.root`。`repo_id` 使用 `用户名/数据集名` 的格式。

```bash
lerobot-record \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30}
  }' \
  --teleop.type=bi_so_leader \
  --teleop.left_arm_config.port=/dev/ttyACM2 \
  --teleop.right_arm_config.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader \
  --dataset.repo_id=seeed/bimanual_so101_task \
  --dataset.push_to_hub=false \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.num_episodes=50 \
  --dataset.fps=30 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.video=true \
  --dataset.rgb_encoder.vcodec=libsvtav1 \
  --display_data=true
```

默认路径为 `~/.cache/huggingface/lerobot/seeed/bimanual_so101_task/`。

```text
├── meta/
│   ├── info.json
│   ├── episodes/
│   ├── stats/
│   └── tasks/
├── data/
└── videos/
```

</TabItem>
<TabItem value="hub" label="上传到 Hugging Face Hub">

将 `HF_USER` 换成自己的 Hugging Face 用户名，并确认你对目标仓库有写权限。示例显式启用上传。

```bash
export HF_USER=your_hf_username

lerobot-record \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30}
  }' \
  --teleop.type=bi_so_leader \
  --teleop.left_arm_config.port=/dev/ttyACM2 \
  --teleop.right_arm_config.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader \
  --dataset.repo_id=${HF_USER}/bimanual_so101_task \
  --dataset.push_to_hub=true \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.num_episodes=50 \
  --dataset.fps=30 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.video=true \
  --dataset.rgb_encoder.vcodec=libsvtav1 \
  --display_data=true
```

</TabItem>
</Tabs>

| 参数 | 含义 |
| --- | --- |
| `--dataset.num_episodes` | 本次录制的剧集数。 |
| `--dataset.episode_time_s` | 单次录制时长（秒）。 |
| `--dataset.reset_time_s` | 两次录制之间的复位时长（秒）。 |
| `--dataset.fps` | 录制帧率。 |
| `--dataset.single_task` | 示教任务的文字描述。 |

### 3.3 继续采集（断点续录）

使用 `--resume=true` 继续向同一数据集追加。保持数据集 ID、保存路径和设备配置一致。比如已经录制 15 条、目标是 50 条，本次将 `--dataset.num_episodes` 设为 35。尽量在当前剧集完成后退出，避免在复位阶段留下空剧集。

```bash
lerobot-record \
  --resume=true \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30}
  }' \
  --teleop.type=bi_so_leader \
  --teleop.left_arm_config.port=/dev/ttyACM2 \
  --teleop.right_arm_config.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader \
  --dataset.repo_id=seeed/bimanual_so101_task \
  --dataset.push_to_hub=false \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.num_episodes=35 \
  --dataset.fps=30 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.video=true \
  --dataset.rgb_encoder.vcodec=libsvtav1 \
  --display_data=true
```

### 3.4 回放与删除 episode

#### 回放指定 episode

```bash
lerobot-replay \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --dataset.repo_id=seeed/bimanual_so101_task \
  --dataset.episode=24
```

剧集编号从 0 开始，`24` 表示第 25 次录制。

#### 删除指定 episode

:::caution
下方示例会原地重写数据集，并将旧数据备份到带 `_old` 后缀的目录。要保留原始数据，可参阅[数据集工具的「另存为新数据集」](/cn/lerobot_dataset_tool/#删除剧集)。
:::

```bash
python -m lerobot.scripts.lerobot_edit_dataset \
  --repo_id=seeed/bimanual_so101_task \
  --operation.type=delete_episodes \
  --operation.episode_indices="[24]"
```

#### 清理旧备份 {#删除整条数据集}

验证新数据集后，若确实不再需要旧备份，请先核对目录以 `_old` 结尾再清理。

```bash
rm -rf ~/.cache/huggingface/lerobot/seeed/bimanual_so101_task_old
```

## 4. ACT 训练

<span id="41-从本地数据集训练" aria-hidden="true" />
<span id="42-从-hugging-face-hub-训练" aria-hidden="true" />

<Tabs defaultValue="local">
<TabItem value="local" label="从本地数据集训练">

若录制时指定了自定义目录，训练时也需要设置 `--dataset.root`。

```bash
lerobot-train \
  --dataset.repo_id=seeed/bimanual_so101_task \
  --policy.type=act \
  --policy.device=cuda \
  --steps=60000 \
  --output_dir=outputs/train/act_bimanual_so101 \
  --wandb.enable=false \
  --policy.push_to_hub=false
```

</TabItem>
<TabItem value="hub" label="从 Hugging Face Hub 训练">

```bash
export HF_USER=your_hf_username

lerobot-train \
  --dataset.repo_id=${HF_USER}/bimanual_so101_task \
  --policy.type=act \
  --policy.device=cuda \
  --steps=100000 \
  --output_dir=outputs/train/act_bimanual_so101 \
  --wandb.enable=false \
  --policy.push_to_hub=false
```

</TabItem>
</Tabs>

| 参数 | 含义 |
| --- | --- |
| `--dataset.repo_id` | 训练使用的数据集 ID。 |
| `--policy.type=act` | 使用 ACT 策略。 |
| `--policy.device=cuda` | 在 CUDA GPU 上训练。 |
| `--steps` | 训练步数，命令中的数值为示例。 |
| `--output_dir` | 训练结果的输出目录。 |

示例使用 ACT 默认模型参数，包括 `chunk_size=100` 和 `dim_model=512`。

## 5. 真实机器人部署

:::caution
开始评估前，核对策略检查点、串口和摄像头，清空机械臂运动范围。
:::

<span id="51-本地保存评估数据" aria-hidden="true" />
<span id="52-上传到-hugging-face-hub" aria-hidden="true" />

<Tabs defaultValue="local">
<TabItem value="local" label="本地保存评估数据">

```bash
lerobot-record \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30}
  }' \
  --dataset.repo_id=seeed_eval/eval_bimanual_so101_task8 \
  --dataset.root=seeed_eval/eval_bimanual_so101_task8 \
  --dataset.push_to_hub=false \
  --dataset.num_episodes=10 \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.fps=30 \
  --dataset.video=true \
  --policy.path=outputs/train/act_bimanual_so101/checkpoints/last/pretrained_model \
  --display_data=true
```

</TabItem>
<TabItem value="hub" label="上传评估数据到 Hub">

将 `HF_USER` 换成自己的 Hugging Face 用户名，并确认你对目标仓库有写权限。示例显式启用上传。

```bash
export HF_USER=your_hf_username

lerobot-record \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30}
  }' \
  --dataset.repo_id=${HF_USER}/eval_bimanual_so101_task \
  --dataset.push_to_hub=true \
  --dataset.num_episodes=10 \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.fps=30 \
  --dataset.video=true \
  --policy.path=outputs/train/act_bimanual_so101/checkpoints/last/pretrained_model \
  --display_data=true
```

</TabItem>
</Tabs>

## 6. 常见问题

| 问题                                                                    | 原因                                                      | 解决方案                                                                                    |
| ----------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 遥操时提示重新标定                                                      | `bi_so_follower` 找不到 `_left` / `_right` 后缀的校准文件 | 用带`_left` / `_right` 的 ID 重新标定，或复制已有校准文件                                   |
| 主臂无法拖动                                                            | leader 扭矩未关闭                                         | 重新标定或检查电机                                                                          |
| 继续采集时报目录已存在                                                  | 未加`--resume=true`                                       | 在`lerobot-record` 命令中添加 `--resume=true`                                               |
| 左右臂反了                                                              | 端口配置错误                                              | 交换`left_arm_config.port` 和 `right_arm_config.port`                                       |
| 训练时找不到数据集                                                      | 本地数据集未指定`root`                                    | 训练时添加`--dataset.root=./datasets/xxx`                                                   |
| 数据集被自动上传                                                        | 未设置`push_to_hub=false`                                 | 录制时添加`--dataset.push_to_hub=false`                                                     |
| 退出时报`You must add one or several frames before calling add_episode` | 在 reset 阶段退出，当前 episode 没有帧                    | 不影响已录数据，用`--resume=true` 继续采集；当前代码已修复该场景，空 episode 会自动跳过保存 |
