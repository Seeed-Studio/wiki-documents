---
title: SO-ARM101 Isaac Sim DLI 仿真与数据采集
description: 使用 Isaac Sim 6.1 运行 SO-ARM101 小瓶分拣场景，进行遥操作、真机联动与 LeRobot 数据采集。
keywords:
  - SO-ARM101
  - Isaac Sim
  - NVIDIA DLI
  - LeRobot
slug: /soarm101_isaac_sim_dli
last_update:
  date: 11/16/2026
  author: ZhuYuan
url: https://wiki.seeedstudio.com/cn/soarm101_isaac_sim_dli/
createdAt: '2026-11-16'
updatedAt: '2026-11-16'
---

# SO-ARM101 Isaac Sim 6.1 数据采集教程

![SO-ARM101 在 Isaac Sim 中采集数据的演示](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/isaac%20sim/isaac_sim_dli.gif)

## 1. 环境要求

> ⚠️ **显卡要求（重要）**：本工程必须使用**显存 ≥ 12GB 的 NVIDIA RTX 显卡**（如 RTX 3080 12G / 4070 Ti 12G 及以上），并安装较新的驱动。
> **显存不足会直接导致电脑死机**：本工程同时运行机械臂、三路相机视口和物理仿真，8GB 显存（如 8GB 笔记本 GPU）在默认渲染器下超出余量，运行几分钟到几十分钟后可能拖死桌面合成器——画面静止、键鼠无响应、只能强制重启（应用本身不一定崩溃，Isaac 日志里通常能看到完整的运行记录）。这不是可以忽略的警告：本工程开发过程中在一台 8GB 笔记本 GPU 上**确实复现过两次整机死机**（包括加了各项防护、使用 `--single-viewport` 的情况），因此**换用显存 ≥ 12GB 的显卡是唯一可靠的解决办法**。
> 如果你只有 8GB 显卡，可参考第 10 节降低渲染负载，仍有死机风险。

- Ubuntu 22.04（Isaac Sim 6.1 同时支持 24.04）
- NVIDIA RTX 显卡，**显存 ≥ 12GB**（8GB 会死机，见上方警告与第 10 节）
- 较新的 NVIDIA 驱动
- Isaac Sim 6.1 standalone 包
- 实体遥操作需要通过 USB 连接 SO-ARM101 主臂。若要联动真机，再连接 SO-ARM101 从臂。

推荐目录结构：

```text
~
├── isaacsim/                 # Isaac Sim 6.1 安装目录
└── rebot_lerobot/
    └── .venv/bin/python      # LeRobot 虚拟环境
```

## 2. 安装 Isaac Sim 6.1

从 NVIDIA 官网下载 `isaac-sim-standalone-6.1.0-linux-x86_64.zip`（约 12.4GB），解压到 `~/isaacsim` 并执行安装脚本：

```bash
unzip isaac-sim-standalone-6.1.0-linux-x86_64.zip -d ~/isaacsim
cd ~/isaacsim
./post_install.sh
```

运行兼容性检查确认环境满足要求：

```bash
./isaac-sim.compatibility_check.sh     # 应输出 System checking result: PASSED
```

几个说明：

- 首次启动（`./isaac-sim.sh`）需要几分钟做着色器编译，属于正常现象；
- 如果 Isaac Sim 安装在其它目录，运行时用 `ISAACSIM_ROOT` 指向它即可（见第 6 节）；
- 启动日志中的 IOMMU、DLSS-RR、PCIe link width 警告均不影响使用。

## 3. 获取代码（需要 Git LFS）

> ⚠️ 本项目的机器人、相机支架、工作台、小瓶和瓶架 **USD 资产使用 Git LFS 存储**。
> 如果本机没有安装 `git-lfs`，克隆下来只会得到几百字节的指针文件，Isaac Sim 将无法打开场景。

```bash
sudo apt update
sudo apt install -y git-lfs

cd ~
git clone https://github.com/Seeed-Projects/rebot-arm-dli-isaacsim.git
cd rebot-arm-dli-isaacsim
git lfs install
git lfs pull
```

验证资产完整：

```bash
du -sh assets/
# 应约为 157M

head -c 8 assets/so101/SO-ARM101-USD-NO-CAMERA.usd
# 应显示 PXR-USDC。如果看到 version 字样，请重新执行 git lfs pull
```

## 4. 配置 LeRobot 环境

```bash
mkdir ~/rebot_lerobot
cd ~/rebot_lerobot
sudo apt update
sudo apt install -y ffmpeg

# 下载仓库
git clone https://github.com/Seeed-Projects/lerobot.git

# 创建虚拟环境（Python 3.12）
uv venv --python 3.12 .venv
source .venv/bin/activate

# 安装 lerobot（注意 [dataset,viz] 扩展：数据集写入与可视化依赖）
uv pip install -e "./lerobot[dataset,viz]"

# 安装 SO-ARM101 舵机依赖
uv pip install feetech-servo-sdk
```

> `[dataset,viz]` 会安装 `datasets`、`Pillow`、`av`、`rerun` 等依赖。
> 缺少它们时，录制的 episode 会转换失败（终端出现 `[dataset-error]`）。

## 5. 连接与校准 SO-ARM101

使用实体主臂时，接好电源和 USB 数据线。用 `lerobot-find-port` 分别确认主臂和从臂的串口。本教程以主臂 `/dev/ttyACM1`、从臂 `/dev/ttyACM0` 为例，请替换为实际路径。设备 ID 与项目默认配置一致，请使用 `so101_leader` 和 `so101_follower` 保存校准结果。

### 校准主臂

```bash
source ~/rebot_lerobot/.venv/bin/activate

lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=so101_leader
```

按终端提示将各关节置于活动范围的中点并按回车。随后逐个移动关节，使其经过完整活动范围，再按回车保存。可参考 [LeRobot 的 SO‑101 校准演示](https://huggingface.co/docs/lerobot/so101#calibrate)。

### 校准从臂

真机联动模式需要校准从臂。使用相同的中位和行程校准步骤，等待命令保存并退出。

```bash
source ~/rebot_lerobot/.venv/bin/activate

lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=so101_follower
```

## 6. 启动遥操作与数据采集

进入项目目录。若 Isaac Sim 安装在其他位置，先在当前终端设置 `export ISAACSIM_ROOT=/实际安装路径`。

```bash
cd ~/rebot-arm-dli-isaacsim
```

### 选择遥操作模式

使用实体主臂控制仿真机械臂。状态行中的 `src=LEADER` 表示仿真跟随主臂。

```bash
./run_so101.sh --leader-port /dev/ttyACM1 --no-follower
```

要联动实体从臂，先让两条实体机械臂处于相近姿态，再运行以下命令。状态行中的 `src=FOLLOWER` 表示仿真跟随从臂的实测关节位置。

```bash
./run_so101.sh --leader-port /dev/ttyACM1 --follower-port /dev/ttyACM0
```

没有实体主臂时，可以使用键盘控制。启动后单击 3D 视口，再按 `Y` 切换到键盘模式。

```bash
./run_so101.sh --no-start-bridge
```

| 按键 | 键盘模式下的操作 |
| --- | --- |
| `W` / `S` / `A` / `D` | 控制末端前后左右移动 |
| `↑` / `↓` | 抬高或降低末端 |
| `Q` / `E` | 旋转手腕 |
| `Z` / `C` | 调整末端俯仰 |
| `G` | 切换夹爪开合 |
| `B` | 切换 5 mm 和 15 mm 步长 |

### 录制小瓶分拣

1. 单击仿真视口，按 `R` 重置三个小瓶并重新随机化场景。
2. 主臂模式按 `S` 开始录制，键盘模式按 `T`。
3. 将三个小瓶逐个竖直放入瓶架。夹爪靠近小瓶时，可用视口中的引导线判断抓取距离，终端的 `[GRASP]` 和 `[RELEASE]` 会报告抓取和释放。
4. 再按一次录制键保存当前片段。主臂模式下还可以按 `C` 丢弃当前片段。

数据写入 `~/rebot-arm-dli-isaacsim/datasets/so101_vials_front_side`，数据集 ID 为 `local/so101_vials_front_side`，任务文本为 `Put the three vials into the vial rack`。录制包含 SO‑ARM101 的关节和夹爪数据，以及腕部和俯视相机的 30 FPS 视频。

### 相机画面预览

| ![front](https://media.githubusercontent.com/media/Seeed-Projects/rebot-arm-dli-isaacsim/6235773b9475f56b434d30be47105e8d34f9c4ac/media/so101_camera_previews/so101_front.png) | ![side](https://media.githubusercontent.com/media/Seeed-Projects/rebot-arm-dli-isaacsim/6235773b9475f56b434d30be47105e8d34f9c4ac/media/so101_camera_previews/so101_side.png) | ![external](https://media.githubusercontent.com/media/Seeed-Projects/rebot-arm-dli-isaacsim/6235773b9475f56b434d30be47105e8d34f9c4ac/media/so101_camera_previews/so101_external.png) |
| --- | --- | --- |
| 腕部相机 `front`（录制） | 侧视相机 `side`（观察） | 俯视相机 `external`（录制） |

## 7. 数据集检查、可视化与回放

### 检查图像与动作是否同步

```bash
source ~/rebot_lerobot/.venv/bin/activate

lerobot-dataset-viz \
  --repo-id local/so101_vials_front_side \
  --root ~/rebot-arm-dli-isaacsim/datasets/so101_vials_front_side \
  --mode local \
  --episode-index 0
```

检查两路视频是否与动作和状态同步，并查看是否有黑帧、冻结帧或严重遮挡。

### 在 Isaac Sim 中回放动作

在第一个终端启动仿真接收端。

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --no-start-bridge --no-recording --no-dr
```

在另一个终端回放第 0 段录制。添加 `--loop` 可循环回放。

```bash
source ~/rebot_lerobot/.venv/bin/activate
cd ~/rebot-arm-dli-isaacsim
PYTHONPATH=scripts python scripts/replay_episode_so101.py --episode 0
```

## 8. 无硬件环境验证

以下命令使用模拟主臂检查关节跟踪。第二条命令同时检查双路相机、H.264 编码和 LeRobot 数据集写入。

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --headless --test
./run_so101.sh --headless --test --test-recording
```

要生成两段模拟录制，可运行以下命令。示例把验证数据写到单独的目录，便于与正式录制区分。

```bash
./run_so101.sh --headless --auto-record 2 \
  --dataset-root datasets/so101_vials_smoke_test \
  --repo-id local/so101_vials_smoke_test
```

## 9. 使用数据集训练 ACT 策略

以下命令用正式采集目录中的数据运行 60 步 ACT 训练，验证训练流程。训练产物保存在输出目录的 `checkpoints/last/pretrained_model/`。

```bash
source ~/rebot_lerobot/.venv/bin/activate
lerobot-train \
  --policy.type=act \
  --policy.push_to_hub=false \
  --dataset.repo_id=local/so101_vials_front_side \
  --dataset.root=~/rebot-arm-dli-isaacsim/datasets/so101_vials_front_side \
  --output_dir=~/rebot_lerobot/outputs/train/act_so101 \
  --steps=60 --batch_size=4 --num_workers=2
```

## 10. 已知问题

SO‑ARM101 场景默认使用 Path Tracing。若渲染负载过高，可用 `--single-viewport` 只显示主视口并继续录制双路相机，或加上 `--realtime-renderer` 切换到实时渲染。实时渲染的画面可能出现更多噪点。

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --no-start-bridge --no-recording --single-viewport --realtime-renderer
```

## 11. 常见问题排查

- **无法访问串口**。确认设备端口和数据线。若当前用户缺少串口权限，可运行 `sudo usermod -aG dialout "$USER"`，退出并重新登录后再试。
- **仿真和真机姿态对不上**。检查主从臂是否用了对应的串口和校准 ID，并重新确认校准中位和每个关节的活动范围。
- **找不到 Isaac Sim Python**。确认安装目录里有 `python.sh`，并将 `ISAACSIM_ROOT` 指向该目录。
- **场景资产缺失**。在项目根目录运行 `git lfs pull`，再按第 3 节检查资产。
- **录制出现 `[dataset-error]`**。确认第 4 节的 LeRobot 虚拟环境和 `[dataset,viz]` 扩展已正确安装。
- **终端显示 `[watchdog] Leader data timed out`**。检查主臂的 USB 连接和串口桥接进程。通信中断期间，仿真机械臂保持最后一次目标。

<details>
<summary>上游 MIT 许可证</summary>

MIT License

Copyright (c) 2026 reBot Arm DLI Isaac Sim contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

</details>
