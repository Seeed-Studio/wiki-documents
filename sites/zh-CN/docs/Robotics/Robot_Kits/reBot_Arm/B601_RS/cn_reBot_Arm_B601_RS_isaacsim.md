---
description: 本教程展示了如何下载Isaacsim，并将reBotArm机器人部署在仿真环境中，进行开发和调试。
title: 通过 Isaacsim 仿真 reBotArm
keywords:
  - Isaacsim
  - 机械臂
  - 机器人
  - 遥控操作
  - 运动学
  - Robostride
image: https://files.seeedstudio.com//wiki/robotics/projects/rebot_arm/reBot_Arm_RS_isaacsim.webp
slug: /rebot_arm_b601_rs_isaacsim
last_update:
  date: 8/14/2026
  author: LiuJunjie
createdAt: '2026-07-07'
updatedAt: '2026-08-17'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_rs_isaacsim/
---

import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

<RebotRsDocNav />

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/reBot_Arm_RS_isaacsim.jpg" alt="reBot Arm B601-RS Isaac Sim" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://detail.tmall.com/item.htm?id=1057521963559" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

## 简介

reBot-Isaacsim 是一个专为 reBotArm 设计的 NVIDIA Isaac Sim 仿真项目。它利用 Isaac Sim 的高保真物理引擎，在虚拟环境中精确复现机械臂的运动学特性与夹爪联动逻辑，为控制算法开发、轨迹规划验证及通信协议测试提供独立的纯仿真环境。

## 环境需求
- 操作系统：Ubuntu 22.04 LTS / 24.04 LTS（推荐）或 Windows 11（需 WSL2）
- GPU：NVIDIA RTX 系列显卡（推荐 RTX 3070 及以上），显存 ≥ 8GB
- 驱动：NVIDIA 官方驱动 ≥ 535.x，支持 CUDA 12.x
- 内存：≥ 32GB RAM（Isaac Sim 场景加载与物理仿真对内存消耗较大）
- 存储：≥ 100GB SSD 可用空间（用于 Isaac Sim 安装、缓存及 USD 资产）

:::info
本wiki中使用的计算机配备了 NVIDIA RTX 4080 GPU，并运行 Ubuntu 22.04 LTS 操作系统。
:::

## 安装Isaacsim

官方链接和资源：

https://docs.isaacsim.omniverse.nvidia.com/6.0.0/installation/quick-install.html

https://docs.isaacsim.omniverse.nvidia.com/6.0.0/installation/download.html#isaac-sim-latest-release


### 🔧 方式一：预编译二进制安装

> 💡 适合大多数用户，无需编译，开箱即用。

#### 下载与解压

从 [NVIDIA 官网](https://developer.nvidia.com/isaac-sim) 下载 `isaac-sim-standalone-6.0.0-linux-x86\_64.zip`。

```Bash
mkdir -p ~/isaacsim
cd ~/Downloads
unzip isaac-sim-standalone-6.0.0-linux-x86_64.zip -d ~/isaacsim
cd ~/isaacsim
./post_install.sh
```

#### 设置环境变量

将以下内容添加到 `~/.bashrc` 或 `~/.zshrc`：

```Bash
export ISAACSIM_PATH="${HOME}/isaacsim"
export ISAACSIM_PYTHON_EXE="${ISAACSIM_PATH}/python.sh"
export ISAACSIM_ROOT="${HOME}/isaacsim"
```

然后执行 `source ~/.bashrc` 使其生效。

#### 启动验证

```Bash
${ISAACSIM_PATH}/isaac-sim.sh
```

首次启动会缓存着色器，可能需要 5-10 分钟，请耐心等待 GUI 出现。

### ⚙️ 方式二：从源码构建（推荐）

> 💡 适合需要修改底层代码或调试核心功能的开发者。

#### 安装依赖

```Bash
sudo apt update
sudo apt install cmake build-essential git python3-pip
```

确保 CUDA 和 cuDNN 已正确安装并匹配 GPU 驱动。

#### 克隆与构建

```Bash
git clone https://github.com/NVIDIA-Omniverse/IsaacSim.git
cd IsaacSim
./build.sh release
```

构建过程可能需要 30-60 分钟，取决于硬件性能。

#### 运行测试

```Bash
_build/linux-x86_64/release/isaac-sim.sh
```

源码构建完成后，将 `ISAACSIM_ROOT` 指向该运行目录，供 `run_isaacsim_receiver.sh` 使用：

```bash
export ISAACSIM_ROOT="$PWD/_build/linux-x86_64/release"
```

## 下载项目

本仓通过 git submodule 引用上游控制库 `reBotArm_control_py`。克隆时需一并拉取子模块：

```bash
git clone --recurse-submodules https://github.com/Seeed-Projects/reBot-Isaacsim.git
```

若已经 clone 过且 `third_party/reBotArm_control_py` 为空：

```bash
git submodule update --init --recursive
```

在仓库根目录安装发送端依赖（`run_sender.sh` 与 `uv run` 都使用根目录的 uv 工作空间）：

```bash
cd reBot-Isaacsim
uv sync
```

### 将硬件配置切到 RS

本仓 Isaac Sim 资产是 RS（`usd/RS-rebot-dev-arm`）。上游 `rebotarm.yaml` 默认是 DM。`RebotArm()` 和 `load_robot_model()` 都读这一份，所以重力补偿、只读映射、IK、Traj 都要先切到 RS；不切的话电机协议会对不上，Pinocchio 也会用 DM URDF。只改 submodule 工作区，不要提交：

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
```

成功时会打印 `.../config/rebotarm.yaml -> rebotarm_rs.yaml`。

### 功能组件概览

本项目提供多种发送端，以满足不同的使用场景：

| 组件 | 说明 |
|------|------|
| `gravity_joint_sender` | **重力补偿手柄模式**：改装机械臂（拆卸夹爪，加装手柄），手动掰动；补偿由上游 `GravityCompensation` 提供，本仓只镜像关节角到 Isaac Sim |
| `isaacsim_ik_sender` | **逆运动学（IK）模式**：输入末端位姿，通过 IK 求解器得到关节角，发送到 Isaac Sim |
| `isaacsim_traj_sender` | **轨迹规划（Traj）模式**：在 IK 基础上增加关节空间轨迹规划（MIN_JERK 时间剖面），实现平滑运动控制 |
| `isaacsim_joint_test_sender` | **关节测试模式**：无需真实机械臂，发送预设关节角轨迹，用于验证 Isaac Sim 接收端和通讯是否正常 |
| `joint_reader_sender` | **Real-to-Sim 映射模式**：只读关节角并映射到 Isaac Sim，适合与其他控制项目配合使用（例如：实际机械臂在运行其他任务时，同步映射到 Isaac Sim 进行可视化） |

### 目录结构

```
reBot-Isaacsim/
├── pyproject.toml                           # uv 工作空间配置
├── README.md
├── README_EN.md
├── README_ES.md
├── reBotArm_Isaacsim/                       # 主示例目录
│   ├── gravity_joint_sender.py              # 重力补偿手柄模式（调用上游 GravityCompensation + UDP）
│   ├── isaacsim_ik_sender.py                # 逆运动学模式（IK 控制）
│   ├── isaacsim_traj_sender.py              # 轨迹规划模式（IK + 关节空间轨迹）
│   ├── isaacsim_joint_test_sender.py        # 关节测试模式（预设轨迹，无需硬件）
│   ├── joint_reader_sender.py                # Real-to-Sim 映射模式（只读关节，同步可视化）
│   ├── isaacsim_joint_receiver.py           # Isaac Sim 接收端（关节角同步）
│   ├── live_sync.py                         # 启动说明脚本
│   ├── set_hw_rs.py                         # 将 submodule 硬件配置切到 RS（本机，勿提交）
│   ├── run_sender.sh                        # 启动发送端
│   └── run_isaacsim_receiver.sh             # 启动 Isaac Sim 接收端
├── .gitmodules
├── third_party/
│   └── reBotArm_control_py/                 # git submodule：上游控制库
└── usd/
    └── RS-rebot-dev-arm/
        └── RS-rebot-dev-arm.usda            # Isaac Sim 机械臂资产
```


## 启动（双终端模式）

需要两个独立终端。**终端 1 是 Isaac Sim 接收端**，**终端 2 根据不同功能选择对应的发送端**。

### 终端 1 — 启动 Isaac Sim 接收端（所有模式共用）

```bash
cd reBotArm_Isaacsim
./run_isaacsim_receiver.sh
```

**预期输出：**
- 启动 Isaac Sim 图形界面
- 加载地面和机械臂 USD 资产
- 监听 UDP `127.0.0.1:5005`
- 等待发送端连接

### 终端 2 — 根据功能选择对应的发送端

**启动顺序：先接收端，再发送端。**

:::tip

部分功能需要连接实际机械臂，以下是usb-to-can配置。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS_usb2can.png"/>
</div>

```bash
# 查看 CAN 接口状态
ip link show can0

# 配置为 UP，bitrate为1000000
sudo ip link set can0 up type can bitrate 1000000 restart-ms 100
```
:::

#### ① 关节测试模式（`isaacsim_joint_test_sender`）

无需真实硬件，预设轨迹循环发送，用于验证通讯和 Isaac Sim 接收端：

```bash
cd reBotArm_Isaacsim
uv run python isaacsim_joint_test_sender.py
```

测试发送端在几个预设关节姿态之间缓慢插值循环发送，不读硬件 YAML，无需 `set_hw_rs.py` 或 CAN。

#### ② 逆运动学模式（`isaacsim_ik_sender`）

输入末端位姿（位置/姿态），IK 求解后驱动 Isaac Sim 仿真机械臂。`load_robot_model()` 读 submodule 的 `rebotarm.yaml`，需先切到 RS：

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
uv run python isaacsim_ik_sender.py
```

**输入格式（每行一条）：**
```
x y z                       # 位置 (米)，姿态保持当前
x y z r p y                 # 位置 + 姿态 (米/度)
q j1 j2 j3 j4 j5 j6         # 直接发送关节角 (度)
gripper <0~1>                # 单独更新夹爪
```

#### ③ 轨迹规划模式（`isaacsim_traj_sender`）

在 IK 基础上增加关节空间轨迹规划（MIN_JERK），实现平滑运动。同样通过 `load_robot_model()` 读那份 YAML，需先切到 RS：

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
uv run python isaacsim_traj_sender.py
```

**输入格式（每行一条）：**
```
x y z                       # 位置 (米)
x y z r p y                 # 位置 + 姿态 (米/度)
q j1 j2 j3 j4 j5 j6         # 关节空间直发 (度)
gripper <0~1>                # 单独更新夹爪
speed <scale>                # 调整轨迹时长比例
resync                       # 重新从仿真端读取当前关节角
```

#### ④ 重力补偿手柄模式（`gravity_joint_sender`）

适用于改装后的机械臂（拆卸夹爪、加装手柄），手动掰动控制 Isaac Sim 仿真：

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
./run_sender.sh
```

**预期行为：**
- `set_hw_rs.py` 把 submodule 的 `rebotarm.yaml` 指到 `rebotarm_rs.yaml`，电机和重力模型共用这一份（本机改动，勿提交）
- 连接真实机械臂，启动上游 `GravityCompensation`（与 `example/9` 同一套 MIT + `g(q)` 前馈）
- 机械臂可自由掰动
- 本脚本只把关节角以 60 Hz 通过 UDP 发给 Isaac Sim
- 不要同时再运行上游 `example/9`，以免抢 CAN

#### ⑤ Real-to-Sim 映射模式（`joint_reader_sender`）

只读关节角并映射到 Isaac Sim，适合实际机械臂在运行其他任务时同步映射可视化。`RebotArm()` 读 submodule 的 `rebotarm.yaml`，需先切到 RS：

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
uv run python joint_reader_sender.py
```

**预期行为：**
- `set_hw_rs.py` 把电机配置切到 RS（本机改动，勿提交）
- 仅读取关节角（被动反馈模式），不发送任何控制指令
- 关节角以 60 Hz 持续通过 UDP 发送
- 实际机械臂由其他项目控制时，可同时在 Isaac Sim 中可视化

## 通信协议

UDP JSON，端口 `127.0.0.1:5005`。

**发送端每帧 Payload：**

```json
{
  "sequence": 123,
  "timestamp": 1718000000.123,
  "joint_positions": [0.0, 0.1, 0.2, -0.1, 0.0, -0.02],
  "gripper_position": 0.05
}
```

| 字段 | 类型 | 说明 |
|------|------|------|
| `sequence` | int | 递增序号 |
| `timestamp` | float | Unix 时间戳（秒） |
| `joint_positions` | float[6] | 前 6 个关节角（rad） |
| `gripper_position` | float | 夹爪指位置目标（m），各发送端有各自的换算方式（见下表） |

**夹爪控制链：**
接收端将收到的 `gripper_position` 直接作为左右两个滑动关节的位置目标，并按各指裁剪到 `[0, 上限]`（USD 上限：两指均为 0.05 m；两指由同一电机通过单个小齿轮驱动，行程严格 1:1）。接收端不做额外缩放。各发送端到 `gripper_position` 的换算如下：

| 发送端 | 到 `gripper_position`（m）的换算 |
|------|------|
| `gravity_joint_sender` | `gripper_q × 0.03`（`GRIPPER_POSITION_SCALE = 0.03`） |
| `joint_reader_sender` | `gripper_q × 0.007`（`GRIPPER_POSITION_SCALE = 0.007`） |
| `isaacsim_traj_sender` | `ratio × 0.045`（`gripper <0~1>` 输入，裁剪到 0.045 m） |
| `isaacsim_ik_sender` | 原始 `ratio ∈ [0, 1]` 直接按米发送，因此 ratio ≥ 某指上限时该指完全打开 |

## 配置参数

### 发送端 (`gravity_joint_sender.py`)

| 参数 | 默认值 | 说明 |
|------|--------|------|
| 硬件 YAML | `set_hw_rs.py` → `rebotarm_rs.yaml` | `RebotArm()` 读取 submodule `config/rebotarm.yaml`；电机与 Pinocchio 共用 |
| `ARM_JOINT_COUNT` | 6 | 关节数 |
| `DEFAULT_PORT` | 5005 | UDP 端口 |
| `DEFAULT_SEND_HZ` | 60.0 | 发送频率（Hz） |
| `GRIPPER_POSITION_SCALE` | 0.03 | 夹爪角到位置的缩放系数 |
| `position_alpha` | 0.2 | 低通滤波系数 |

### 接收端 (`isaacsim_joint_receiver.py`)

| 参数 | 默认值 | 说明 |
|------|--------|------|
| `ARM_JOINT_COUNT` | 6 | 关节数 |
| `DEFAULT_PORT` | 5005 | UDP 端口 |
| `DEFAULT_RENDER_HZ` | 120.0 | 仿真渲染频率（Hz） |
| `ROBOT_PRIM_PATH` | `/World/reBotArm` | Isaac Sim 中的机械臂 Prim 路径 |
| `ASSET_RELATIVE_PATH` | `usd/RS-rebot-dev-arm/RS-rebot-dev-arm.usda` | USD 资产相对路径 |


## 常见问题

### `OSError: [Errno 98] Address already in use`

端口 5005 已被占用。先确认并终止占用进程：

```bash
# 查看占用端口的进程
sudo lsof -i :5005

# 终止进程（将 PID 替换为实际值）
kill <PID>
```

### Isaac Sim 资产未找到

确认 USD 资产路径存在，或检查 `REPO_ROOT` 是否正确：

```bash
ls usd/RS-rebot-dev-arm/RS-rebot-dev-arm.usda
```

### CAN 总线未就绪

确保 CAN 接口 up 且 bitrate 正确：

```bash
can_restart can0
# 验证：
ip -details link show can0 | grep bitrate
```

### 关节角不同步

- 确认发送端和接收端端口一致（均为 5005）
- 检查发送端日志中 `[send]` 是否有持续输出
- 检查接收端日志中 `[recv]` 是否有持续输出
- 尝试使用 `isaacsim_joint_test_sender.py` 排除硬件问题

### 组件与 Python 环境

| 组件 | Python 环境 | 启动脚本 |
|------|------------|---------|
| 发送端（真实机械臂） | `reBotArm_control_py` uv 环境 | `run_sender.sh` |
| 发送端（测试模式） | `reBotArm_control_py` uv 环境 | `isaacsim_joint_test_sender.py` |
| 接收端 | Isaac Sim 官方 Python (`python.sh`) | `run_isaacsim_receiver.sh` |


## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持服务，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>



