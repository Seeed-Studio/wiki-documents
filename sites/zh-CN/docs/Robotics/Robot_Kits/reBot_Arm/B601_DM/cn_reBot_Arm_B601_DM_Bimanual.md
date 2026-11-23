---
description: 本wiki提供 reBot RS / DM 双臂在 LeRobot 框架内实现校准、遥操作、数据采集与 ACT 训练的完整流程。
title: reBot-DM双臂协作
keywords:
  - LeRobot
  - Huggingface
  - 机械臂
  - rebot arm
  - 机器人
slug: /rebot_arm_b601_dm_bimanual
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-11-19
  author: zhuyuan
translation:
  skip: [[zh-CN]]
createdAt: '2026-11-19'
updatedAt: '2026-11-19'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_dm_bimanual/
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reBot-DM双臂协作

<div style={{ textAlign: 'center' }}>
    <img width={800} style={{ maxWidth: '100%', height: 'auto' }} alt="reBot-RS 双臂协作"
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS_Bimanual/rs_bimanual.webp" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://detail.tmall.com/item.htm?id=1042412233386&skuId=6065255360559" target="_blank" rel="noopener noreferrer">
    <span>点击立即获取</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>


## 1. 环境准备

跑双臂之前可以按照单臂快速入门的教程进行环境安装：

- [reBot-DM 快速入门](/cn/rebot_b601_dm_getting_started/)
- [reBot-DM 与 LeRobot](/cn/rebot_arm_b601_dm_lerobot/)

### 1.1 激活已有环境

在能够完整跑完单臂的流程之后，接着安装双臂的环境。

```bash
conda activate lerobot

cd ~
git clone https://github.com/xiehuangbao888/lerobot-robot-seeed-b601.git
cd lerobot-robot-seeed-b601
pip install -e .
```

### 1.2 本文端口约定

| 设备 | 左侧 | 右侧 |
| --- | --- | --- |
| Arm 102 主臂 | `/dev/ttyUSB0` | `/dev/ttyUSB1` |
| RS 从臂 | `can0` | `can1` |
| DM 从臂，达妙串口 | `/dev/ttyACM0` | `/dev/ttyACM1` |

## 2. 双臂校准

校准和后续操作保持同一组 `robot.id`、`teleop.id`。RS、DM 示例均使用 `bi_follower`，双主臂使用 `bi_leader`。`id` 是校准文件标识，不是电机型号；若你此前用 `bi_follower_dm` 校准过 DM，继续在该机械臂的后续命令里使用 `bi_follower_dm` 即可。

<Tabs groupId="rebot-bimanual-motor" defaultValue="dm">
<TabItem value="dm" label="DM">

### 2.2 双 DM 从臂校准：达妙串口

```bash
sudo chmod 666 /dev/ttyACM*
```

```bash
lerobot-calibrate \
    --robot.type=bi_seeed_b601_follower \
    --robot.id=bi_follower \
    --robot.left_arm_config.motor_family=dm \
    --robot.left_arm_config.port=/dev/ttyACM0 \
    --robot.right_arm_config.motor_family=dm \
    --robot.right_arm_config.port=/dev/ttyACM1
```

</TabItem>
<TabItem value="rs" label="RS">

### 2.1 双 RS 从臂校准



```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
sudo ip link set can1 down 2>/dev/null
sudo ip link set can1 type can bitrate 1000000
sudo ip link set can1 up
```

```bash
lerobot-calibrate \
    --robot.type=bi_seeed_b601_follower \
    --robot.id=bi_follower \
    --robot.left_arm_config.motor_family=rs \
    --robot.left_arm_config.port=can0 \
    --robot.right_arm_config.motor_family=rs \
    --robot.right_arm_config.port=can1
```

</TabItem>
</Tabs>

### 2.3 双主臂校准

```bash
lerobot-calibrate \
    --teleop.type=bi_seeed_102_leader \
    --teleop.id=bi_leader \
    --teleop.left_arm_config.port=/dev/ttyUSB0 \
    --teleop.right_arm_config.port=/dev/ttyUSB1
```

### 2.4 校准时如何操作

:::warning

1. 按提示依次处理左臂和右臂。
2. 已有校准时，直接回车复用；输入 `c` 再回车表示重新校准。
3. 程序提示手动摆零位后，将当前整条机械臂摆到规定零位，完全闭合空夹爪，再确认。
4. 从臂校准会重设整条从臂的所有电机零位，不是只设置夹爪；不要在任意姿态确认设零。

校准退出不会触发双臂自动复位。校准文件默认位于 `~/.cache/huggingface/lerobot/calibration/`，按底层设备类型区分子目录，各侧标识追加 `_left`、`_right`。更换实体机械臂、改动电机零位后应重新核对校准。

:::

## 3. 双臂遥操作

<Tabs groupId="rebot-bimanual-motor" defaultValue="dm">
<TabItem value="dm" label="DM">

### 3.2 双 DM 遥操作：达妙串口

```bash
lerobot-teleoperate \
    --robot.type=bi_seeed_b601_follower \
    --robot.id=bi_follower \
    --robot.left_arm_config.motor_family=dm \
    --robot.left_arm_config.port=/dev/ttyACM0 \
    --robot.right_arm_config.motor_family=dm \
    --robot.right_arm_config.port=/dev/ttyACM1 \
    --teleop.type=bi_seeed_102_leader \
    --teleop.id=bi_leader \
    --teleop.left_arm_config.port=/dev/ttyUSB0 \
    --teleop.right_arm_config.port=/dev/ttyUSB1
```

</TabItem>
<TabItem value="rs" label="RS">

### 3.1 双 RS 遥操作

```bash
lerobot-teleoperate \
    --robot.type=bi_seeed_b601_follower \
    --robot.id=bi_follower \
    --robot.left_arm_config.motor_family=rs \
    --robot.left_arm_config.port=can0 \
    --robot.right_arm_config.motor_family=rs \
    --robot.right_arm_config.port=can1 \
    --teleop.type=bi_seeed_102_leader \
    --teleop.id=bi_leader \
    --teleop.left_arm_config.port=/dev/ttyUSB0 \
    --teleop.right_arm_config.port=/dev/ttyUSB1
```

</TabItem>
</Tabs>

## 4. 采集数据

先确认对应的遥操作正常，再运行采集命令。以下默认采集 2 段、每段 20 秒，只用于检查数据流程。把 `dataset.single_task` 改成实际演示任务。

<Tabs groupId="rebot-bimanual-motor" defaultValue="dm">
<TabItem value="dm" label="DM">

### 4.2 双 DM：达妙串口、三路相机采集

```bash
lerobot-record \
    --robot.type=bi_seeed_b601_follower \
    --robot.id=bi_follower \
    --robot.left_arm_config.motor_family=dm \
    --robot.left_arm_config.port=/dev/ttyACM0 \
    --robot.right_arm_config.motor_family=dm \
    --robot.right_arm_config.port=/dev/ttyACM1 \
    --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
    --teleop.type=bi_seeed_102_leader \
    --teleop.id=bi_leader \
    --teleop.left_arm_config.port=/dev/ttyUSB0 \
    --teleop.right_arm_config.port=/dev/ttyUSB1 \
    --dataset.repo_id=seeed_rebot/test \
    --dataset.single_task="pick the cube" \
    --dataset.fps=30 \
    --dataset.num_episodes=2 \
    --dataset.episode_time_s=20 \
    --dataset.reset_time_s=10 \
    --dataset.push_to_hub=false \
    --display_data=false
```

</TabItem>
<TabItem value="rs" label="RS">

### 4.1 双 RS：三路相机采集

```bash
lerobot-record \
    --robot.type=bi_seeed_b601_follower \
    --robot.id=bi_follower \
    --robot.left_arm_config.motor_family=rs \
    --robot.left_arm_config.port=can0 \
    --robot.right_arm_config.motor_family=rs \
    --robot.right_arm_config.port=can1 \
    --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
    --teleop.type=bi_seeed_102_leader \
    --teleop.id=bi_leader \
    --teleop.left_arm_config.port=/dev/ttyUSB0 \
    --teleop.right_arm_config.port=/dev/ttyUSB1 \
    --dataset.repo_id=seeed_rebot/test \
    --dataset.single_task="pick the cube" \
    --dataset.fps=30 \
    --dataset.num_episodes=2 \
    --dataset.episode_time_s=20 \
    --dataset.reset_time_s=10 \
    --dataset.push_to_hub=false \
    --display_data=false
```

</TabItem>
</Tabs>

## 5. 训练及评估

:::note

本节参考 [DM LeRobot 教程](/cn/rebot_arm_b601_dm_lerobot/#训练及评估)，保留其训练方法，并将评估、可选遥操作和异步推理客户端改为本文的 DM 双臂配置。请使用双臂数据集训练的模型，保持校准 ID、相机名称、分辨率和帧率与采集时一致；数据集名称、任务描述和模型路径应替换为实际值。训练示例沿用源教程的 `wandb` 参数；若使用本文前面的双臂环境，请按安装版本使用 `trackio.enable`，不要混用不支持的日志参数。

:::

<Tabs>
<TabItem value="act" label="ACT">

参考官方教程[ACT](https://huggingface.co/docs/lerobot/act)

**训练**

要训练一个控制您机器人策略，使用 `python -m lerobot.scripts.train` 脚本。需要一些参数。以下是一个示例命令：

```bash
lerobot-train \
  --dataset.repo_id=${HF_USER}/rebot_test \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --job_name=act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --steps=300000 
```

**如果您想在本地数据集上进行训练，请确保 `repo_id` 与数据收集时使用的名称匹配，并添加 `--policy.push_to_hub=false`。**

```bash
lerobot-train \
  --dataset.repo_id=seeed_rebot_b601_dm/test \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --job_name=act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000 
```

:::tip

如果您是RTX50系列显卡，在训练时需要增加`--dataset.video_backend=pyav`部分，绕过 torchvision 预览版的 API 缺失，即训练命令为：

```bash
lerobot-train \
  --dataset.repo_id=seeed_rebot_b601_dm/test \
  --dataset.video_backend=pyav \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000 
```

:::

命令解释

- **数据集指定**：我们通过 `--dataset.repo_id=${HF_USER}/rebot_test` 参数提供了数据集。
- **训练步数**：我们通过 `--steps=300000` 修改训练步数，算法默认为800000，根据自己的任务难易程度，来进行调整，如果不确定，可以调高一些，因为训练过程中会生成检查点，评估可以从检查点开始。
- **策略类型**：我们使用 `policy.type=act` 提供了策略，同样你可以更换[act,diffusion,pi0,pi0fast,sac,smolvla]等策略，这将从 `configuration_act.py` 加载配置。重要的是，这个策略会自动适应您机器人的电机状态、电机动作和摄像头数量，这些信息已保存在您的数据集中。
- **设备选择**：我们提供了 `policy.device=cuda`，因为我们正在 Nvidia GPU 上进行训练，但您可以使用 `policy.device=mps` 在 Apple Silicon 上进行训练。
- **可视化工具**：我们提供了 `wandb.enable=true` 来使用 [Weights and Biases](https://docs.wandb.ai/quickstart) 可视化训练图表。这是可选的，但如果您使用它，请确保您已通过运行 `wandb login` 登录。


**评估**


您可以使用 [`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py) 中的 `record` 功能，但需要将策略训练结果训练结果权重文件作为输入。例如，运行以下命令记录 10 个评估回合：


```bash
lerobot-record \
  --robot.type=bi_seeed_b601_follower \
  --robot.left_arm_config.motor_family=dm \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.motor_family=dm \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
  --robot.id=bi_follower \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model
``` 
 
  
1.  `--policy.path` 参数，指示您的策略训练结果权重文件的路径（例如 `outputs/train/act_rebot_test/checkpoints/last/pretrained_model`）。如果您将模型训练结果权重文件上传到 Hub，也可以使用模型仓库（例如 `${HF_USER}/act_rebot_test`）。
2. 数据集的名称`dataset.repo_id`以 `eval_` 开头，这个操作会在你评估的时候为你单独录制评估时候的视频和数据，将保存在eval_开头的文件夹下，例如`seeed/eval_test123`。
3. 如果评估阶段遇到`File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'`请先删除`eval_`开头的这个文件夹再次运行程序。
4. 当遇到`mean is infinity. You should either initialize with stats as an argument or use a pretrained model`请注意--robot.cameras这个参数中的top、left_wrist 和 right_wrist等关键词必须和采集数据集的时候保持严格一致。


</TabItem>

<TabItem value="smolvla" label="SmolVLA">

参考官方教程 [SmolVLA](https://huggingface.co/docs/lerobot/smolvla)。

SmolVLA 是 Hugging Face 提供的**轻量级机器人基础模型**（foundation model）。它的设计目标是：让你把自己录制的 LeRobot 数据集拿来**快速微调（fine-tune）**，更快在真实机器人上跑出效果。

简单理解它的输入/输出：

- 输入：多路相机画面 + 机器人当前状态（传感器/关节等）+ 一句自然语言任务指令
- 输出：一段连续的动作（action chunk），用来驱动机械臂执行任务

```bash
pip install -e ".[smolvla]"
```

**收集数据集（建议）**

SmolVLA 是"底座模型"，要在你的桌面、你的相机、你的夹爪/物体上表现好，通常需要用你自己的数据做微调。

- 建议从 ~50 个 episode 开始（太少容易学不会/泛化差）。
- 如果你的任务有"变化项"（例如方块在桌面上的不同位置），请确保每一种变化都有足够示范：
  - 例：5 个位置 × 每个位置 10 个 episode = 50 个 episode
- 经验：只录 25 个 episode 往往不够，数据质量和数量都很关键。

**训练**

使用 `smolvla_base`（预训练的 450M 模型）作为起点，在你的数据集上微调。官方示例是训练 20k steps；在一张 A100 上大约需要 4 小时（仅供参考，实际会因硬件而变）。

如果你没有可用的 GPU，可以考虑用 Colab 的 notebook 方式训练（见官方教程）。

```bash
lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --dataset.repo_id=${HF_USER}/mydataset \
  --batch_size=64 \
  --steps=20000 \
  --output_dir=outputs/train/my_smolvla \
  --job_name=my_smolvla_training \
  --policy.device=cuda \
  --wandb.enable=true
```

提示：

- 显存不够就先把 `--batch_size` 调小；能跑通后再慢慢加大。
- 想快速了解可用参数：`lerobot-train --help`

**验证**

评估阶段会加载你微调后的模型，让机器人执行任务，并把评估过程录成一个新数据集（便于回看视频、复盘效果）。

```bash
lerobot-record \
  --robot.type=bi_seeed_b601_follower \
  --robot.left_arm_config.motor_family=dm \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.motor_family=dm \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=bi_follower \
  --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
  --dataset.single_task="Grasp a lego block and put it in the bin." \
  --dataset.repo_id=${HF_USER}/eval_DATASET_NAME_test \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=${HF_USER}/FINETUNE_MODEL_NAME
```

参数怎么填：

- `--robot.left_arm_config.port`、`--robot.right_arm_config.port`：分别填写左、右 DM 从臂的串口，本文为 `/dev/ttyACM0` 和 `/dev/ttyACM1`。
- `--robot.id`：你的机器人 ID（要和你校准/录制时使用的保持一致）。
- `--robot.cameras`：改成你真实相机的 `index_or_path`，并确保相机键名（比如 `top`、`left_wrist`、`right_wrist`）和你录制数据集时完全一致。
- `--dataset.single_task`：建议与录制数据集时的任务描述一致。
- `--dataset.repo_id`：评估输出的数据集名；如果你登录了 Hugging Face，它会被创建/上传到你的账号下。
- `--policy.path`：
  - 如果模型在本地：填训练输出目录下的权重路径（例如 `outputs/train/my_smolvla/checkpoints/last/pretrained_model`）
  - 如果模型在 Hub：填 `${HF_USER}/FINETUNE_MODEL_NAME`

可选：如果你想在评估的 episode 之间"手动遥操调整一下"，可以加入 teleop（按你的设备与配置填写）：

```bash
--teleop.type=bi_seeed_102_leader \
--teleop.left_arm_config.port=/dev/ttyUSB0 \
--teleop.right_arm_config.port=/dev/ttyUSB1 \
--teleop.id=bi_leader
```

</TabItem>

<TabItem value="pi0" label="Pi0">

参考官方教程 [Pi0](https://huggingface.co/docs/lerobot/pi0)。

π₀（Pi0）是 Physical Intelligence 提出的 **Vision-Language-Action（视觉-语言-动作）** 模型，用于更"通用"的机器人控制。你可以把它理解为：它既能看相机画面，也能读懂一句自然语言指令，然后输出控制机械臂的动作。

在 LeRobot 里使用它很简单：训练时把策略类型设为 `--policy.type=pi0` 即可（不重复赘述 ACT 里讲过的通用训练/评估概念）。

```bash
pip install -e ".[pi]"
```

:::tip
如果你使用的是较旧的 LeRobot 版本（例如 0.4.0），安装 `pi` 依赖时可能需要从 GitHub 源安装（官方说明后续补丁会修复）：

```bash
pip install "lerobot[pi]@git+https://github.com/huggingface/lerobot.git"
```

:::

**训练**

```bash
lerobot-train \
  --policy.type=pi0 \
  --dataset.repo_id=${HF_USER}/my_dataset \
  --job_name=pi0_training \
  --output_dir=outputs/pi0_training \
  --policy.pretrained_path=lerobot/pi0_base \
  --policy.repo_id=${HF_USER}/my_pi0_policy \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --policy.freeze_vision_encoder=false \
  --policy.train_expert_only=false \
  --steps=3000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false 
```

常用参数（只挑 Pi0 特有/最常调的）：

- `--policy.pretrained_path=lerobot/pi0_base`：基础模型。官方也提供 `lerobot/pi0_libero`（更偏 Libero 数据集的版本），你可以按任务尝试切换。
- `--policy.compile_model=true`：启用编译优化，训练可能更快（首次编译会慢一点）。
- `--policy.gradient_checkpointing=true`：显著省显存，适合显存吃紧时开启。
- `--policy.dtype=bfloat16`：混合精度，速度/显存更友好（硬件支持时推荐）。
- `--policy.train_expert_only=true`（省显存技巧）：冻结大模型（VLM）部分，只训练"动作专家"和投影层；更省显存，但可训练能力会更受限，适合先跑通或小数据快速试验。

**验证**

```bash
lerobot-record \
  --robot.type=bi_seeed_b601_follower \
  --robot.left_arm_config.motor_family=dm \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.motor_family=dm \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
  --robot.id=bi_follower \
  --display_data=false \
  --dataset.repo_id=${HF_USER}/eval_my_pi0_test \
  --dataset.single_task="Put lego brick into the transparent box" \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=outputs/pi0_training/checkpoints/last/pretrained_model
```

</TabItem>

<TabItem value="pi05" label="Pi0.5">

参考官方教程 [Pi0.5](https://huggingface.co/docs/lerobot/pi05)。

π₀.₅（Pi0.5）同样是 Physical Intelligence 提出的 **Vision-Language-Action（视觉-语言-动作）** 模型，可以理解为 π₀ 的"升级版"，重点增强了**开放世界泛化**能力。

在 LeRobot 里使用它：把策略类型设为 `--policy.type=pi05` 即可

```bash
pip install -e ".[pi]"
```

:::tip
如果你使用的是较旧的 LeRobot 版本（例如 0.4.0），安装 `pi` 依赖时可能需要从 GitHub 源安装（官方说明后续补丁会修复）：

```bash
pip install "lerobot[pi]@git+https://github.com/huggingface/lerobot.git"
```

:::

**训练**

```bash
lerobot-train \
  --dataset.repo_id=${HF_USER}/my_dataset \
  --policy.type=pi05 \
  --output_dir=outputs/pi05_training \
  --job_name=pi05_training \
  --policy.repo_id=${HF_USER}/my_pi05_policy \
  --policy.pretrained_path=lerobot/pi05_base \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --policy.freeze_vision_encoder=false \
  --policy.train_expert_only=false \
  --steps=3000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false
```

常用参数（Pi0.5 相关）：

- `--policy.pretrained_path=lerobot/pi05_base`：基础模型。官方也提供 `lerobot/pi05_libero`。
- `--policy.train_expert_only=true`（省显存技巧）：冻结大模型（VLM）部分，只训练"动作专家"和投影层。
- `--policy.normalization_mapping=...`：如果你的数据集归一化统计不匹配/缺失，可以用该映射强制指定归一化方式。

**验证**

```bash
lerobot-record \
  --robot.type=bi_seeed_b601_follower \
  --robot.left_arm_config.motor_family=dm \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.motor_family=dm \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
  --robot.id=bi_follower \
  --display_data=false \
  --dataset.repo_id=${HF_USER}/eval_my_pi05_test \
  --dataset.single_task="Put lego brick into the transparent box" \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=outputs/pi05_training/checkpoints/last/pretrained_model
```

</TabItem>

<TabItem value="groot-n15" label="GR00T N1.5">

请参考官方教程 [GR00T N1.5](https://huggingface.co/docs/lerobot/groot)。

GR00T N1.5 是 NVIDIA 提供的一个开放基础模型（foundation model）。在 LeRobot 中使用它的关键点是把策略类型设为 `--policy.type=groot`。不过需要注意：目前 GR00T N1.5 对环境要求更高（依赖 FlashAttention，且需要 CUDA GPU），建议先把 ACT / Pi0 跑通，再来尝试。

**安装（重要）**

截至官方文档目前的说明，GR00T N1.5 需要 **flash-attn** 才能工作，并且只能在**支持 CUDA 的设备**上使用。

建议步骤（按顺序执行）：

1. 按安装指南先把基础环境准备好（Python、CUDA、驱动等），**这一步先不要安装 `lerobot`**。
2. 安装 PyTorch（版本范围以官方为准）：

```bash
pip install "torch>=2.2.1,<2.8.0" "torchvision>=0.21.0,<0.23.0"
```

:::tip
如果您是RTX 50系列，需要满足下面要求：Python=3.10，CUDA=12.8，Torch=2.7.1

```bash
pip install torch==2.7.1 torchvision==0.22.1 torchaudio==2.7.1 --index-url https://download.pytorch.org/whl/cu128
```
:::

3. 安装 flash-attn 依赖与 flash-attn 本体：

```bash
pip install ninja "packaging>=24.2,<26.0"
pip install "flash-attn>=2.5.9,<3.0.0" --no-build-isolation
python -c "import flash_attn; print(f'Flash Attention {flash_attn.__version__} imported successfully')"
```

:::tip
如果您是RTX 50系列，需要满足下面要求：flash_attn=2.8.0

```bash
pip install flash_attn==2.8.0.post2 torch==2.7.1 --no-build-isolation
```
:::

4. 安装 LeRobot 的 groot 依赖：

```bash
pip install "lerobot[groot]"
```

:::tip
如果 flash-attn 安装失败，通常与（1）PyTorch/CUDA 版本不匹配、（2）编译依赖缺失或（3）环境过新/过旧有关。遇到这种情况优先对照官方 GR00T 文档与 PyTorch 安装说明排查。
:::

**训练（微调）**

官方给了多 GPU 的训练示例（`accelerate launch --multi_gpu ...`）。如果你只有一张 GPU，也可以先用单进程方式跑通（是否支持/参数细节以官方文档为准）。

多 GPU（变量需要自己替换）：

```bash
accelerate launch \
  --multi_gpu \
  --num_processes=$NUM_GPUS \
  $(which lerobot-train) \
  --output_dir=$OUTPUT_DIR \
  --save_checkpoint=true \
  --batch_size=$BATCH_SIZE \
  --steps=$NUM_STEPS \
  --save_freq=$SAVE_FREQ \
  --log_freq=$LOG_FREQ \
  --policy.push_to_hub=true \
  --policy.type=groot \
  --policy.repo_id=$REPO_ID \
  --policy.tune_diffusion_model=false \
  --dataset.repo_id=$DATASET_ID \
  --wandb.enable=true \
  --wandb.disable_artifact=true \
  --job_name=$JOB_NAME
```

参数说明（最常需要修改的几项）：

- `--dataset.repo_id`：你的训练数据集（Hub 上的 `用户名/数据集名` 或本地缓存对应的 `repo_id`）。
- `--output_dir`：训练输出目录（权重/检查点会放在这里）。
- `--steps`、`--batch_size`：训练步数与 batch，大模型对显存很敏感，跑不动就先减小 `batch_size`。
- `--policy.repo_id`：如果你要把模型推到 Hub，填你希望创建的模型仓库名。

**验证（上机运行/评估）**

训练完成后可以像其它策略一样用 `lerobot-record` 做评估/录制回放。对于 reBot B601-DM 双臂用户，请参考以下命令：

```bash
lerobot-record \
  --robot.type=bi_seeed_b601_follower \
  --robot.left_arm_config.motor_family=dm \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.motor_family=dm \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
  --robot.id=bi_follower \
  --display_data=true \
  --dataset.repo_id=${HF_USER}/eval_groot_rebot \
  --dataset.num_episodes=10 \
  --dataset.single_task="Grab the black cube and put it in the box" \
  --policy.path=${HF_USER}/groot-rebot \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10
```

License：该模型遵循 Apache 2.0 许可证（与原始 GR00T 仓库一致）。

</TabItem>

<TabItem value="peft" label="PEFT（可选）">

PEFT（Parameter-Efficient Fine-Tuning，参数高效微调）是一套"参数高效适配"方法与工具，用于在**不更新全部模型参数**的前提下，让大型预训练模型更快适配新任务。对于 LeRobot 的预训练策略（例如 SmolVLA、π₀ 等），通常可以只训练少量"适配器"参数（例如 LoRA），在降低显存占用与训练成本的同时获得接近全量微调的效果。

**安装**

安装 LeRobot 的 `peft` 可选依赖后即可使用 PEFT 相关参数：

```bash
pip install -e ".[peft]"
```

```bash
pip install "lerobot[peft]"
```

更多适配方法与概念说明可参考官方文档：  
[🤗 PEFT 文档](https://huggingface.co/docs/peft/index)

**示例：用 LoRA 微调 SmolVLA（Libero 的 libero_spatial 子任务）**

下面示例展示如何在 `HuggingFaceVLA/libero` 数据集上，对 `lerobot/smolvla_base` 进行 LoRA 微调。参数名称以当前 LeRobot 版本为准，建议同时参考 `lerobot-train --help`。

```bash
lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --policy.repo_id=${HF_USER}/my_libero_smolvla_peft \
  --dataset.repo_id=HuggingFaceVLA/libero \
  --env.type=libero \
  --env.task=libero_spatial \
  --output_dir=outputs/train/my_libero_smolvla_peft \
  --job_name=my_libero_smolvla_peft \
  --policy.device=cuda \
  --steps=10000 \
  --batch_size=32 \
  --optimizer.lr=1e-3 \
  --peft.method_type=LORA \
  --peft.r=64
```

**PEFT 关键参数说明**

- `--peft.method_type`：选择要使用的 PEFT 方法。LoRA（Low-Rank Adapter）是最常用的方法之一。
- `--peft.r`：LoRA 的 rank。一般来说，rank 越大可表达能力越强，但参数量与显存占用也会增加。

**指定要注入 LoRA 的层（可选）**

默认情况下，PEFT 往往会针对模型中最关键的投影层（例如注意力的 `q_proj`、`v_proj` 等）注入 LoRA，并可能额外覆盖状态/动作相关的投影层。若需要针对不同层，可以使用 `--peft.target_modules` 指定目标层。

常见写法包括：

1）按模块名后缀列表指定（示例）：

```bash
--peft.target_modules="['q_proj', 'v_proj']"
```

2）使用正则表达式指定（示例，需按模型实际模块名调整）：

```bash
--peft.target_modules='(model\\.vlm_with_expert\\.lm_expert\\..*\\.(down|gate|up)_proj|.*\\.(state_proj|action_in_proj|action_out_proj|action_time_mlp_in|action_time_mlp_out))'
```

**指定某些层进行全量训练（可选）**

如果希望某些模块"全量训练"（而不是只注入 LoRA），可以使用 `--peft.full_training_modules` 指定。例如仅全量训练 `state_proj`：

```bash
--peft.full_training_modules="['state_proj']"
```

**学习率建议（经验值）**

LoRA 的学习率通常可以比全量微调更大一个量级（常见经验：约 10×）。例如全量微调常用 `1e-4`，LoRA 可以从 `1e-3` 起步；若你启用了学习率衰减（scheduler），最终学习率也常设置在 `1e-4` 附近作为参考。

</TabItem>

<TabItem value="multi-gpu" label="多 GPU（可选）">

**1.训练步骤**

**方式一：使用命令行参数进行多卡训练**

首先，在lerobot环境中安装训练加速系统

```bash

pip install accelerate

```

接着运行以下命令来开始多卡训练

```bash

accelerate launch \

--multi_gpu \

--num_processes=2 \

$(which lerobot-train) \

--dataset.repo_id=${HF_USER}/my_dataset \

--policy.type=act \

--policy.repo_id=${HF_USER}/my_trained_policy \

--output_dir=outputs/train/act_multi_gpu \

--job_name=act_multi_gpu \

--wandb.enable=true

```

关键的 accelerate 参数说明：

--multi_gpu：启用多 GPU 训练

--num_processes=2：使用的 GPU 数量（通常等于 GPU 张数）

--mixed_precision=fp16：使用 fp16 混合精度（如果硬件支持，也可以使用 bf16）

请注意，**bf16 需要硬件支持**，并非所有 GPU 都可以使用。

| 精度类型 | 硬件支持情况 |

|--|--|

| fp16 | 几乎所有 NVIDIA GPU 均支持 |

| bf16 | 仅部分较新的 GPU 支持（如 Ampere 及更新架构） |

如果你的 GPU 不支持 bf16，请在 accelerate 配置中选择 fp16，

或在命令行中显式指定 fp16。

**方式二：使用 accelerate 配置文件（可选）**

如果您经常进行多卡训练，也可以将上述的训练配置进行保存，从而避免繁琐的命令行输入。

> **提示**：如果你不理解这一节的内容，或者只是想尽快跑起来训练，

> **可以直接跳过本节，使用方式一（命令行参数）即可。**

`accelerate config` 的作用是：

**将您的硬件环境（GPU 数量、混合精度等）保存为一个配置文件，

以后运行 `accelerate launch` 时无需重复填写这些信息。**

它并不会改变 LeRobot 的训练逻辑，只是为了减少重复输入参数。

如果只是**偶尔使用多 GPU**，或你是第一次尝试，**不使用它完全没有问题**。

---

运行：

```bash

accelerate config

```

在交互式配置过程中，对于单机多 GPU 的常见场景，可以按如下方式选择：

Compute environment：This machine

Number of machines：1

Number of processes：使用的 GPU 数量（通常等于 GPU 张数）

GPU ids to use：直接回车（表示使用所有 GPU）

Mixed precision：

优先选择 fp16

若确认 GPU 支持 bf16，也可选择 bf16

完成配置后，可以直接使用一下命令进行训练：

```bash

accelerate launch $(which lerobot-train) \

--dataset.repo_id=${HF_USER}/my_dataset \

--policy.type=act \

--policy.repo_id=${HF_USER}/my_trained_policy \

--output_dir=outputs/train/act_multi_gpu \

--job_name=act_multi_gpu \

--wandb.enable=true

```

**多 GPU 训练对于训练参数的影响以及调整策略**

LeRobot 不会根据 GPU 数量自动调整学习率或训练步骤。以避免在用户在不知情的情况下改变训练行为。这与其他常用的分布式训练框架不同。

如果您希望**在多 GPU 训练时调整超参数**，需要按以下步骤手动完成。

**对于步数的影响以及调整策略**

由于多 GPU 会使 有效 batch size 增大（batch_size × num_gpus）

（可以通过以下例子直观理解，如果将训练比作走路，一张卡训练是一步迈出去一米，那么两张卡训练就是一步迈出两米，如果希望达到同等距离（模型学习到的数据总量），双卡训练应该将步数减少至单卡训练的二分之一。同理，n张卡是1/n）

因此在多 GPU 训练的时候，应该适当降低训练的步数（steps）

单卡训练时：

- batch_size = 8

- steps = 100000

双卡训练（有效 batch size 变为 16）：

- batch_size 如果仍然被您设定为 8

- steps 可以减少为 50000

```bash

accelerate launch --num_processes=2 $(which lerobot-train) \

--batch_size=8 \

--steps=50000 \

--dataset.repo_id=lerobot/pusht \

--policy=act

```

**对于学习率的影响以及调整策略**

使用多块 GPU 时，每一步更新会使用更多样本。

如果你希望模型"学习速度"保持和单卡相近，

通常需要按 GPU 数量等比例增大学习率。

- 新的学习率 = 单卡学习率 × GPU 数量

例如：

单卡训练时学习率(optimizer.lr)为 1e-4，

使用 2 张 GPU 时，可以改为 2e-4：

```bash

accelerate launch --num_processes=2 $(which lerobot-train) \

--optimizer.lr=2e-4 \

--dataset.repo_id=lerobot/pusht \

--policy=act

```

注意：

这些并不是强制性的规则，而是常见的经验做法。

如果你不确定如何调整，也可以先：

- 保持学习率不变

- 保持训练步数不变

只要训练过程稳定，结果依然是可用的。

如需更高级的配置和故障排除，请参见[Accelerate](https://huggingface.co/docs/accelerate/index) 文档。如果你想了解更多如何在大量GPU上训练，可以看看这份超棒的指南：[Ultrascale Playbook](https://github.com/huggingface/ultrascale-playbook)。
</TabItem>

<TabItem value="async-inference" label="异步推理（可选）">

在不启用异步推理时，LeRobot 的控制流程可以理解为常规的顺序式 / 同步式推理：策略先预测一段动作，再执行这段动作，之后再等待下一次预测。对于较大的模型，这会导致机器人在等待新动作块时出现明显停顿。异步推理的目标，就是让机器人一边执行当前动作块，一边提前计算下一块动作，从而减少空等并提升响应性。异步推理适用于 LeRobot 支持的策略；包括 ACT、OpenVLA、Pi0、SmolVLA 这类按 chunk 输出动作的策略。由于推理和实际控制解耦，异步推理也有助于利用具有更强算力的机器来为机器人进行推理。

你可以在 Hugging Face 提供的[博客文章](https://huggingface.co/blog/async-robot-inference)中阅读更多关于异步推理的信息。

先让我们介绍一些基本概念：

- 客户端：连接机械臂和相机，采集观测数据（如图像、机器人位姿等），把这些观测发送到服务器；同时接收服务器返回的动作块，并按顺序执行。
- 服务器端：提供算力的设备，接收相机数据和机械臂数据，推理（也就是计算）出动作块发回客户端。它可以是连接机械臂和摄像头的设备本身，也可以是局域网内的另一台电脑，或是网上租赁的云端服务器。
- 动作块：一系列的机械臂动作指令，由策略经过服务器端推理得到。
- 同步推理：预测一块动作块、执行一块动作块；机器人在等待下一块动作时会出现等待动作块推理的间隙，这时候机械臂不会移动。在模型参数量更大并且算力不足的时候，推理的时间间隙是显著的，这时候机械臂会运动一段时间，然后停滞一段时间（推理），然后继续运动。
- 异步推理：不同于同步推理，机器人执行当前动作块的同时，服务器已经在计算下一块动作；重叠部分会做聚合，以得到更及时的控制。

**异步推理的三种部署场景**

**1. 单机部署**

机器人、相机、客户端、服务器都在同一台设备上。  
这是最简单的情况，服务器监听 127.0.0.1 即可，客户端也连接 127.0.0.1:端口。官方文档中的命令示例就是这个场景。

**2. 局域网部署**

机器人和相机接在一台轻量设备上，策略服务器运行在同一局域网中的另一台高算力设备上。  
此时服务器必须监听一个可被其他机器访问的地址，客户端也必须连接服务器的局域网 IP，而不能再写 127.0.0.1。

**3. 跨网络 / 云端部署**

策略服务器运行在公网可访问的云主机上，客户端通过公网连接它。  
这种方式可以使用云主机更强的 GPU。在网络状况良好的情况下，网络往返时间（网络延时）有时相对推理耗时较小，但这取决于你的实际网络环境。

> 安全提醒：LeRobot async inference 管线存在未认证 gRPC + pickle 反序列化的风险。如果服务器上有重要信息或者重要服务，公网部署时，不建议把服务直接裸露到互联网；更稳妥的做法是 VPN、SSH 隧道，或至少把安全组来源 IP 限制到你自己的客户端公网地址。

**开始异步推理部署**

**Step1: 环境配置**

首先，使用 pip 安装运行异步推理所需的额外依赖。客户端和服务器端均需要安装 lerobot 并安装额外依赖：

```bash
pip install -e ".[async]"
```

**Step2: 网络配置与检查**

**1. 代理问题**

如果你当前终端配置了代理，并且连接出现异常，可以临时取消代理环境变量：

```bash
unset http_proxy https_proxy ftp_proxy all_proxy HTTP_PROXY HTTPS_PROXY FTP_PROXY ALL_PROXY
```

注意：以上的命令只对一个终端生效，如果你重新开了另一个终端窗口，需要重新运行该命令。

**2. 在防火墙 / 安全组放行端口**

- 单机部署：通常可以跳过。
- 局域网部署：需要在服务器端放行监听端口。  
  局域网放行监听端口示例（在服务器端运行）：

```bash
sudo ufw allow 8080/tcp
```

- 云端部署：需要在云服务器安全组中放行该端口，并尽量限制来源 IP。

如果是在云端服务器上运行：  
在服务器管理页面的安全组放行 8080 端口，或使用其他已经放行的端口。不同云服务平台的方式并不统一，详见云平台服务商。

**3. 确认 IP 地址**

单机部署可以跳过这一步（单机的 IP 地址恒为 127.0.0.1）。

**4. 连接测试**

- 单机部署：可跳过这一步
- 局域网 / 云端部署：建议在客户端测试是否能访问服务器端口，测试例子如下：

```bash
nc -vz <局域网IP地址> 8080
```

```bash
nc -vz <服务器公网IP> 8080
```

**Step3: 启动服务**

**场景 A：单机部署**

在一个终端中启动本地服务：

```bash
python -m lerobot.async_inference.policy_server \
  --model_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --server_address=127.0.0.1:8080
```

运行成功后，你需要保持这个终端打开，你需要新建新的终端才可以执行其他命令。

**场景 B：局域网内部署**

在服务器端运行：

```bash
python -m lerobot.async_inference.policy_server \
  --model_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --server_address=0.0.0.0:8080
```

此时客户端连接时，`--server_address` 中填写的应当是服务器端的局域网 IP 地址，即 `<局域网IP地址>:8080`。

**场景 C：云端服务器部署**

在服务器端运行：

```bash
python -m lerobot.async_inference.policy_server \
  --model_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --server_address=0.0.0.0:8080
```

此时客户端连接时，`--server_address` 中填写的应当是服务器的公网 IP 地址，即`<服务器公网IP>:8080`。

**Step4: 选择推理参数**

在客户端运行：

```bash
python -m lerobot.async_inference.robot_client \
  --robot.type=bi_seeed_b601_follower \
  --robot.left_arm_config.motor_family=dm \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.motor_family=dm \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
  --robot.id=bi_follower \
  --server_address=127.0.0.1:8080 \
  --actions_per_chunk=50 \
  --chunk_size_threshold=0.5 \
  --fixed_update_fps=30 \
  --visualize_action_queue=false
```

关键参数说明：

- `--server_address`：服务器地址，单机部署用 `127.0.0.1:端口`，局域网/云端用服务器 IP。
- `--actions_per_chunk`：每个动作块的大小（动作数量）。值越大推理频率越低但每次推理更稳定；值越小动作更流畅但服务器推理压力更大。
- `--chunk_size_threshold`：新旧动作块的聚合阈值。当旧动作块执行到此值时，开始与新动作块聚合。
- `--fixed_update_fps`：控制命令发送频率，对应机械臂的运动流畅度。
- `--visualize_action_queue`：是否在运行时可视化动作队列大小。打开后可以更直观地看到队列是否频繁触底，从而帮助你调整 actions_per_chunk 和 chunk_size_threshold。

**Step5: 根据机器人表现调整参数**

在异步推理中，有两个同步推理没有的额外参数需要调整：

- `--actions_per_chunk`：每个动作块的大小。如果机器人运动卡顿/不流畅，可以增大此值；如果机器人响应延迟明显，可以减小此值。
- `--chunk_size_threshold`：新旧动作块的聚合阈值。通常从 `0.5` 开始尝试。

异步推理需要平衡的是：服务器生成动作块的速度必须大于或等于客户端消费动作块的速度。否则动作队列会清空，机器人开始出现卡顿（这可以在队列可视化曲线中看到触底）。

</TabItem>
</Tabs>

要从某个训练结果权重文件恢复训练，下面是一个从 `act_rebot_test` 策略的最后一个训练结果权重文件恢复训练的示例命令：
```bash
lerobot-train \
  --config_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```
