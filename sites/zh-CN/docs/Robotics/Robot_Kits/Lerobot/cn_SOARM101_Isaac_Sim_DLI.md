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

import '/src/css/rebot-wiki-style.css';
import '/src/css/soarm101-pinocchio-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SO-ARM101 Isaac Sim 6.1 数据采集教程

<div className="rebot-page soarm-guide">

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/isaac%20sim/isaac_sim_dli.gif" width={800} height={500} style={{height: 'auto'}} alt="SO-ARM101 在 Isaac Sim 中采集数据的演示" />
</div>

在 Isaac Sim 6.1 中操控 SO-ARM101 完成小瓶分拣，录制 LeRobot 数据并验证 ACT 训练。可以用键盘完成仿真操作，也可以接入实体主臂，或让仿真跟随实体从臂。

## 推荐学习路线

<div className="rebot-step-flow soarm-learning-path">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4><a href="#2-安装-isaac-sim-61">安装环境</a></h4>
    <p>安装 Isaac Sim、下载仿真资产并配置 LeRobot。</p>
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4><a href="#5-连接与校准-so-arm101">校准机械臂</a></h4>
    <p>使用实体主臂或从臂前，先确认串口和校准结果。</p>
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4><a href="#6-启动遥操作与数据采集">遥操作与录制</a></h4>
    <p>选择操作方式，录制小瓶分拣任务。</p>
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">
    <h4><a href="#7-数据集检查可视化与回放">检查与回放</a></h4>
    <p>检查双路视频与动作是否同步，再回放录制。</p>
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">5</span>
  <div className="rebot-step-content">
    <h4><a href="#9-使用数据集训练-act-策略">训练 ACT</a></h4>
    <p>使用录制的数据验证训练流程。</p>
  </div>
</section>

</div>

## 1. 环境要求

:::warning
本示例要求 **NVIDIA RTX 显卡具备至少 12 GB 显存**，并安装较新的 NVIDIA 驱动。

机械臂、三路相机视口和物理仿真会同时运行。开发测试中，8 GB 显存的笔记本即使启用了防护和 `--single-viewport`，仍发生过两次整机卡死。此时日志可能继续写入，但画面和键鼠无响应，需要强制重启。

第 10 节的设置可降低渲染负载，8 GB 显存仍可能卡死。
:::

| 项目 | 要求 |
| --- | --- |
| 操作系统 | Ubuntu 22.04。Isaac Sim 6.1 也支持 Ubuntu 24.04。 |
| 显卡和驱动 | NVIDIA RTX，显存至少 12 GB，并安装较新的 NVIDIA 驱动。 |
| 仿真软件 | Isaac Sim 6.1 独立安装包。 |
| Python 环境 | 通过 [uv](https://docs.astral.sh/uv/getting-started/installation/) 创建 Python 3.12 虚拟环境。 |
| 实体机械臂 | 实体主臂模式需要通过 USB 连接 SO-ARM101 主臂。真机联动还需连接 SO-ARM101 从臂。 |

推荐目录结构：

```text
~
├── isaacsim/                 # Isaac Sim 6.1 安装目录
└── rebot_lerobot/
    └── .venv/bin/python      # LeRobot 虚拟环境
```

## 2. 安装 Isaac Sim 6.1

<div className="rebot-step-flow">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>解压并安装</h4>

从 [NVIDIA 下载页](https://docs.isaacsim.omniverse.nvidia.com/latest/installation/download.html)下载 `isaac-sim-standalone-6.1.0-linux-x86_64.zip`（约 12.4GB），解压到 `~/isaacsim` 并执行安装脚本：

```bash
unzip isaac-sim-standalone-6.1.0-linux-x86_64.zip -d ~/isaacsim
cd ~/isaacsim
./post_install.sh
```

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>检查兼容性</h4>

运行兼容性检查确认环境满足要求：

```bash
./isaac-sim.compatibility_check.sh     # 应输出 System checking result: PASSED
```

  </div>
</section>

</div>

几个说明：

- 首次启动（`./isaac-sim.sh`）需要几分钟做着色器编译，属于正常现象；
- 如果 Isaac Sim 安装在其它目录，运行时用 `ISAACSIM_ROOT` 指向它即可（见第 6 节）；
- 启动日志中的 IOMMU、DLSS-RR、PCIe link width 警告均不影响使用。

## 3. 获取代码（需要 Git LFS）

:::warning
本项目的机器人、相机支架、工作台、小瓶和瓶架 **USD 资产使用 Git LFS 存储**。

如果本机没有安装 `git-lfs`，克隆下来只会得到几百字节的指针文件，Isaac Sim 将无法打开场景。
:::

<div className="rebot-step-flow">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>克隆仓库并下载资产</h4>

```bash
sudo apt update
sudo apt install -y git-lfs

cd ~
git clone https://github.com/Seeed-Projects/rebot-arm-dli-isaacsim.git
cd rebot-arm-dli-isaacsim
git lfs install
git lfs pull
```

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>检查 USD 文件</h4>

验证资产完整：

```bash
du -sh assets/
# 应约为 157M

head -c 8 assets/so101/SO-ARM101-USD-NO-CAMERA.usd
# 应显示 PXR-USDC。如果看到 version 字样，请重新执行 git lfs pull
```

  </div>
</section>

</div>

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

<div className="rebot-step-flow">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">

### 校准主臂

```bash
source ~/rebot_lerobot/.venv/bin/activate

lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=so101_leader
```

按终端提示将各关节置于活动范围的中点并按回车。随后逐个移动关节，使其经过完整活动范围，再按回车保存。可参考 [LeRobot 的 SO‑101 校准演示](https://huggingface.co/docs/lerobot/so101#calibrate)。

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">

### 校准从臂

真机联动模式需要校准从臂。使用相同的中位和行程校准步骤，等待命令保存并退出。

```bash
source ~/rebot_lerobot/.venv/bin/activate

lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=so101_follower
```

  </div>
</section>

</div>

## 6. 启动遥操作与数据采集

进入项目目录。若 Isaac Sim 安装在其他位置，先在当前终端设置 `export ISAACSIM_ROOT=/实际安装路径`。

```bash
cd ~/rebot-arm-dli-isaacsim
```

### 选择遥操作模式

<Tabs>
<TabItem value="leader" label="实体主臂">

使用实体主臂控制仿真机械臂。状态行中的 `src=LEADER` 表示仿真跟随主臂。

```bash
./run_so101.sh --leader-port /dev/ttyACM1 --no-follower
```

</TabItem>
<TabItem value="follower" label="真机从臂联动">

要联动实体从臂，先让两条实体机械臂处于相近姿态，再运行以下命令。状态行中的 `src=FOLLOWER` 表示仿真跟随从臂的实测关节位置。

```bash
./run_so101.sh --leader-port /dev/ttyACM1 --follower-port /dev/ttyACM0
```

</TabItem>
<TabItem value="keyboard" label="键盘控制">

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

</TabItem>
</Tabs>

### 录制小瓶分拣

<div className="rebot-step-flow">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>重置场景</h4>

单击仿真视口，按 `R` 重置三个小瓶并重新随机化场景。

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>开始录制</h4>

主臂模式按 `S` 开始录制，键盘模式按 `T`。

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>分拣小瓶</h4>

将三个小瓶逐个竖直放入瓶架。夹爪靠近小瓶时，可用视口中的引导线判断抓取距离，终端的 `[GRASP]` 和 `[RELEASE]` 会报告抓取和释放。

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">
    <h4>保存录制</h4>

再按一次录制键保存当前片段。主臂模式下还可以按 `C` 丢弃当前片段。

  </div>
</section>

</div>

数据写入 `~/rebot-arm-dli-isaacsim/datasets/so101_vials_front_side`，数据集 ID 为 `local/so101_vials_front_side`，任务文本为 `Put the three vials into the vial rack`。录制包含 SO‑ARM101 的关节和夹爪数据，以及腕部和俯视相机的 30 FPS 视频。

### 相机画面预览

| ![front](https://media.githubusercontent.com/media/Seeed-Projects/rebot-arm-dli-isaacsim/6235773b9475f56b434d30be47105e8d34f9c4ac/media/so101_camera_previews/so101_front.png) | ![side](https://media.githubusercontent.com/media/Seeed-Projects/rebot-arm-dli-isaacsim/6235773b9475f56b434d30be47105e8d34f9c4ac/media/so101_camera_previews/so101_side.png) | ![external](https://media.githubusercontent.com/media/Seeed-Projects/rebot-arm-dli-isaacsim/6235773b9475f56b434d30be47105e8d34f9c4ac/media/so101_camera_previews/so101_external.png) |
| --- | --- | --- |
| 腕部相机 `front`（录制） | 侧视相机 `side`（观察） | 俯视相机 `external`（录制） |

## 7. 数据集检查、可视化与回放

<div className="rebot-step-flow">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">

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

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">

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

  </div>
</section>

</div>

## 8. 无硬件环境验证

<div className="rebot-step-flow">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>检查关节和录制链路</h4>

以下命令使用模拟主臂检查关节跟踪。第二条命令同时检查双路相机、H.264 编码和 LeRobot 数据集写入。

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --headless --test
./run_so101.sh --headless --test --test-recording
```

  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>生成独立的测试数据</h4>

要生成两段模拟录制，可运行以下命令。示例把验证数据写到单独的目录，便于与正式录制区分。

```bash
./run_so101.sh --headless --auto-record 2 \
  --dataset-root datasets/so101_vials_smoke_test \
  --repo-id local/so101_vials_smoke_test
```

  </div>
</section>

</div>

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

<details className="rebot-demo-details">
<summary>无法访问串口</summary>

确认设备端口和数据线。若当前用户缺少串口权限，可运行 `sudo usermod -aG dialout "$USER"`，退出并重新登录后再试。

</details>

<details className="rebot-demo-details">
<summary>仿真和真机姿态对不上</summary>

检查主从臂是否用了对应的串口和校准 ID，并重新确认校准中位和每个关节的活动范围。

</details>

<details className="rebot-demo-details">
<summary>找不到 Isaac Sim Python</summary>

确认安装目录里有 `python.sh`，并将 `ISAACSIM_ROOT` 指向该目录。

</details>

<details className="rebot-demo-details">
<summary>场景资产缺失</summary>

在项目根目录运行 `git lfs pull`，再按第 3 节检查资产。

</details>

<details className="rebot-demo-details">
<summary>录制出现 <code>[dataset-error]</code></summary>

确认第 4 节的 LeRobot 虚拟环境和 `[dataset,viz]` 扩展已正确安装。

</details>

<details className="rebot-demo-details">
<summary>终端显示 <code>[watchdog] Leader data timed out</code></summary>

检查主臂的 USB 连接和串口桥接进程。通信中断期间，仿真机械臂保持最后一次目标。

</details>

<details className="rebot-demo-details">
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

</div>
