---
description: 本文档说明如何将 SO-ARM101 从臂与 AmazingHand 灵巧手结合，并通过 LeRobot 进行遥操作。
title: SO-ARM 与 AmazingHand 完整训练指南
keywords:
  - Lerobot
  - SO-ARM
  - AmazingHand
  - Robotics
  - Teleoperation
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/soarm_amazinghand/soarm_amazinghand.webp
slug: /soarm_amazinghand_teleop
sku: 114993666,114993667,100063642,100062181
last_update:
  date: 2026-07-12
  author: ZhuYuan
createdAt: '2026-07-12'
updatedAt: '2026-08-10'
url: https://wiki.seeedstudio.com/cn/soarm_amazinghand_teleop/
---
# SO-ARM与AmazingHand完整训练指南

本文档说明如何将 SO-ARM101从臂与AmazingHand 灵巧手结合，并通过 LeRobot 进行遥操作。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/soarm_amazinghand/soarm_amazinghand.webp" />
</div>

SO-ARM + AmazingHand 演示视频：

<div class="video-container">
<iframe width="900" height="500" src="//player.bilibili.com/player.html?isOutside=true&aid=116941423386102&bvid=BV1naKK6TEXT&cid=40077364140&p=1&autoplay=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" style={{width: 'auto', minWidth: '195px', height: 'auto', whiteSpace: 'nowrap', paddingLeft: '20px', paddingRight: '20px'}} href="https://www.seeedstudio.com/Amazing-Hand-Right-Hand-The-Open-Source-Robotic-Hand-Developer-Kit.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> AmazingHand 立即获取 🖱️</font></span></strong>
</a></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" style={{width: 'auto', minWidth: '195px', height: 'auto', whiteSpace: 'nowrap', paddingLeft: '20px', paddingRight: '20px'}} href="https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> SO-ARM101 立即获取 🖱️</font></span></strong>
</a></div>

## 1. 硬件连接

1.soarm与amazinghand连接的打印件链接如下:

[lerobot/soarm\_amazinghand\_link\_step\_stl/step at soarm\_amazinghand · xiehuangbao888/lerobot](https://github.com/xiehuangbao888/lerobot/tree/soarm_amazinghand/soarm_amazinghand_link_step_stl/step)

2.拆下原来的soarm抓夹

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/soarm_amazinghand/1.webp" />
</div>

3.将soarm与amazinghand的连接打印件装上机械臂

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/soarm_amazinghand/2.webp" />
</div>

4.将amazinghand装上

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/soarm_amazinghand/3.webp" />
</div>

5.连线如下：


| 设备                               | 串口           | 说明                  |
| ---------------------------------- | -------------- | --------------------- |
| SO-101 从臂（已拆除 6 号抓夹舵机） | `/dev/ttyACM0` | 只保留 1~5 号关节舵机 |
| SO-101 主臂（保留 6 号抓夹舵机）   | `/dev/ttyACM1` | 抓夹开合作为输入信号  |
| AmazingHand 灵巧手                 | `/dev/ttyACM2` | 8 个舵机，ID 为 1~8   |

> 如果你的串口号不同，请在后续命令中替换为实际串口号。

---

该机器人会：

- 通过 `/dev/ttyACM0` 控制从臂的 5 个关节（1~5 号舵机）。
- 通过 `/dev/ttyACM2` 控制 AmazingHand 灵巧手。
- 将主臂的 `gripper.pos` 按**比例映射**为灵巧手的张合角度（0 = 完全张开，100 = 完全闭合）。

校准文件会自动保存到：

```text
~/.cache/huggingface/lerobot/calibration/robots/so101_amazing_hand/<robot.id>.json
~/.cache/huggingface/lerobot/calibration/teleoperators/so101_leader/<teleop.id>.json
```

---

## 2. 环境与连接

```bash
git clone https://github.com/xiehuangbao888/lerobot.git
```

切换原有的lerobot虚拟环境

首先，赋予权限

```bash
sudo chmod 666 /dev/ttyACM*
```

#### 步骤 1：校准主臂

```bash
cd ~/lerobot
conda activate lerobot
python -m lerobot.scripts.lerobot_calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=amazing_hand_leader
```

按提示：

1. 将主臂各关节放到中位，按回车。
2. 依次活动各关节到最大/最小范围，按回车结束。

#### 步骤 2：校准从臂

```bash
python -m lerobot.scripts.lerobot_calibrate \
    --robot.type=so101_amazing_hand \
    --robot.port=/dev/ttyACM0 \
    --robot.id=amazing_hand_follower \
    --robot.hand_port=/dev/ttyACM2
```

按提示：

1. 将从臂 5 个关节放到中位，按回车。
2. 依次活动 5 个关节到最大/最小范围，按回车结束。

> 注意：从臂只有 5 个关节，6 号抓夹舵机已拆除。

#### 步骤 3：运行遥操作

```bash
python -m lerobot.scripts.lerobot_teleoperate \
    --robot.type=so101_amazing_hand \
    --robot.port=/dev/ttyACM0 \
    --robot.id=amazing_hand_follower \
    --robot.hand_port=/dev/ttyACM2 \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=amazing_hand_leader \
    --display_data=true
```

---

可自行设置抓取动作，相应文件在此目录下，可修改灵巧手的打开与闭合动作：

```text
src/lerobot/robots/so_amazing_hand/config_so_amazing_hand.py
```

---

## 3. 结合灵巧手采集数据集

```bash
python -m lerobot.scripts.lerobot_record \
    --robot.type=so101_amazing_hand \
    --robot.port=/dev/ttyACM0 \
    --robot.id=amazing_hand_follower \
    --robot.hand_port=/dev/ttyACM2 \
    --robot.cameras='{
      wrist: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30},
      top: {type: opencv, index_or_path: 4, width: 640, height: 480, fps: 30}
    }' \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=amazing_hand_leader \
    --display_data=true \
    --dataset.repo_id=seeed/amazing_soarm \
    --dataset.num_episodes=20 \
    --dataset.single_task="Pick up the cube with the dexterous hand"
```

参数说明：


| 参数                                    | 说明                                                                               |
| --------------------------------------- | ---------------------------------------------------------------------------------- |
| `--robot.cameras`                       | 相机配置，支持`opencv`、`realsense` 等。`index_or_path` 填摄像头索引或视频流路径。 |
| `--dataset.repo_id`                     | 数据集在 Hugging Face 上的 ID，格式为`{username}/{dataset_name}`。                 |
| `--dataset.num_episodes`                | 录制的 episode 数量。                                                              |
| `--dataset.single_task`                 | 任务描述，会写入数据集元信息。                                                     |
| `--robot.hand_use_proportional_control` | 已默认为`true`，命令中无需再写。如需二值张合可显式设为 `false`。                   |

---

## 4. 训练策略

```bash
lerobot-train \
  --dataset.repo_id=seeed/amazing_soarm \
  --policy.type=act \
  --output_dir=outputs/train/amazing_soarm \
  --job_name=amazing_soarm \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=60000 \
```

## 5. 评估与部署

### 用训练好的策略进行真实机器人评估

```bash
python -m lerobot.scripts.lerobot_record \
    --robot.type=so101_amazing_hand \
    --robot.port=/dev/ttyACM0 \
    --robot.id=amazing_hand_follower \
    --robot.hand_port=/dev/ttyACM2 \
    --robot.cameras='{
      wrist: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30},
      top: {type: opencv, index_or_path: 4, width: 640, height: 480, fps: 30}
    }' \
    --policy.path=outputs/train/amazing_soarm/checkpoints/last/pretrained_model \
    --dataset.repo_id=seeed_val/amazinghand_pick_cube_eval \
    --dataset.num_episodes=10 \
    --dataset.single_task="Pick up the cube with the dexterous hand" \
    --display_data=true
```
