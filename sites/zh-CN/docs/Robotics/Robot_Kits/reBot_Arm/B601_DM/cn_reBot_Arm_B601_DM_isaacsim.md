---
description: 本教程展示了如何下载Isaacsim，并将reBot-B601-DM机器人部署在仿真环境中，进行开发和调试。
title: 通过 Isaacsim 仿真 reBot-B601-DM
keywords:
  - Isaacsim
  - 机械臂
  - 机器人
  - 遥控操作
  - 运动学
  - Damiao
slug: /rebot_arm_b601_dm_isaacsim
last_update:
  date: 2026-08-17
  author: PanYiWei
translation:
  skip: [[zh-CN]]
createdAt: '2026-08-17'
updatedAt: '2026-08-18'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_dm_isaacsim/
---

import RebotDmDocNav from '@site/src/components/robotics/RebotDmDocNav';

<RebotDmDocNav />

<div align="center">
    <img width={800}
    src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://detail.tmall.com/item.htm?id=1042412233386&skuId=6065255360559" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

## 简介

这是一个专为 reBot-B601-DM 设计的 NVIDIA Isaac Sim 仿真项目。它利用 Isaac Sim 的高保真物理引擎，在虚拟环境中精确复现机械臂的运动学特性与夹爪联动逻辑，为控制算法开发、轨迹规划验证及通信协议测试提供独立的纯仿真环境。

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_dm_isaacsim.png" alt="reBot Arm B601-DM Isaac Sim" />
</div>

## 环境需求
- 操作系统：Ubuntu 22.04 LTS / 24.04 LTS（推荐）或 Windows 11（需 WSL2）
- GPU：NVIDIA RTX 系列显卡（推荐 RTX 3070 及以上），显存 ≥ 8GB
- 驱动：NVIDIA 官方驱动 ≥ 535.x，支持 CUDA 12.x
- 内存：≥ 32GB RAM（Isaac Sim 场景加载与物理仿真对内存消耗较大）
- 存储：≥ 100GB SSD 可用空间（用于 Isaac Sim 安装、缓存及 USD 资产）

:::info
本wiki中是电脑连接机械臂，服务器端运行 isaacsim 仿真。服务器配备了 NVIDIA RTX 4090 GPU，运行 Ubuntu 22.04 LTS 操作系统。
:::

## 安装Isaacsim

官方链接和资源：

https://docs.isaacsim.omniverse.nvidia.com/6.0.0/installation/quick-install.html

https://docs.isaacsim.omniverse.nvidia.com/6.0.0/installation/download.html#isaac-sim-latest-release

### 下载 Isaac Sim 独立软件包

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
```

然后执行 `source ~/.bashrc` 使其生效。

#### 启动验证

```Bash
${ISAACSIM_PATH}/isaac-sim.sh
```


## 下载项目

```Bash
git clone https://github.com/hopcan/reBot-Isaacsim.git
```

配置 reBotArm_control_py 的 uv 环境

```bash
cd third_party/reBotArm_control_py
uv sync
```

### 功能组件概览

本项目提供多种发送端，以满足不同的使用场景：

| 组件 | 说明 |
|------|------|
| `gravity_joint_sender` | **重力补偿手柄模式**：改装机械臂（拆卸夹爪，加装手柄），通过重力补偿模式允许手动掰动，实时同步关节角到 Isaac Sim |
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
│   ├── gravity_joint_sender.py              # 真实机械臂发送端（uv 环境）
│   ├── isaacsim_ik_sender.py                # IK 发送脚本（必须用 Isaac python.sh）
│   ├── isaacsim_traj_sender.py              # 轨迹发送脚本（必须用 Isaac python.sh）
│   ├── isaacsim_joint_test_sender.py        # 测试发送脚本（视情况使用 python.sh）
│   ├── joint_reader_sender.py               # 只读映射脚本（真实机械臂/其他项目）
│   ├── isaacsim_joint_receiver.py           # Isaac Sim 接收端（必须用 Isaac python.sh）
│   ├── live_sync.py                         # 启动说明脚本
│   └── ...
├── third_party/
│   └── reBotArm_control_py/                 # 机械臂控制库（独立 uv 环境）
│       ├── pyproject.toml
│       └── ...
├── urdf/
│   └── ...                                  # 机械臂 URDF / 配置
├── usd/
│   └── reBot_B601_DM/
│       └── reBot_B601_DM.usda               # reBot-B601-DM 资产
└── ...
```


## 启动（双终端模式）

需要两个独立终端。**终端 1 是 Isaac Sim 接收端**，**终端 2 根据不同功能选择对应的发送端**。

### 终端 1 — 启动 Isaac Sim 接收端（所有模式共用）
用 isaacsim 的 python 运行接收端代码

:::tip
根据自己的设备修改 DEFAULT_SIM_HOST 和 DEFAULT_REBOT_ARM_HOST的值。

DEFAULT_SIM_HOST 是运行 isaacsim 仿真环境的主机ip。

DEFAULT_REBOT_ARM_HOST 是连接机械臂的主机ip。

如果两端都用的是本机,请将 DEFAULT_SIM_HOST 修改成 "127.0.0.1"
:::

```bash
cd reBotArm_Isaacsim
${ISAACSIM_PYTHON_EXE}  gravity_joint_sender.py 
```

**预期输出：**
- 启动 Isaac Sim 图形界面
- 加载地面和机械臂 USD 资产
- 监听 UDP DEFAULT_SIM_HOST:5005
- 等待发送端连接

### 终端 2 — 根据功能选择对应的发送端

**启动顺序：先接收端，再发送端。**

:::tip

部分功能需要连接实际机械臂，以下是使用usb2can的必要操作。

```bash
# 查看 USB2CAN 的串口，确保检测到端口
ls ttyACM* 

# 赋予端口权限
sudo chmod 666 /dev/ttyACM*
```
根据自己的设备修改 DEFAULT_SIM_HOST 的值。

DEFAULT_SIM_HOST 是运行 isaacsim 仿真环境的主机ip。

如果两端都用的是本机,请将 DEFAULT_SIM_HOST 修改成 "127.0.0.1"
:::

#### ① 关节测试模式（`isaacsim_joint_test_sender`）

无需真实硬件，预设轨迹循环发送，用于验证通讯和 Isaac Sim 接收端：

```bash
cd reBotArm_Isaacsim
uv run python isaacsim_joint_test_sender.py
```

测试发送端在几个预设关节姿态之间缓慢插值循环发送，无需 CAN 连接。

#### ② 逆运动学模式（`isaacsim_ik_sender`）

输入末端位姿（位置/姿态），IK 求解后驱动 Isaac Sim 仿真机械臂。在 `reBotArm_Isaacsim/` 目录下直接 `uv run`：

```bash
cd reBotArm_Isaacsim
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

在 IK 基础上增加关节空间轨迹规划（MIN_JERK），实现平滑运动。在 `reBotArm_Isaacsim/` 目录下直接 `uv run`：

```bash
cd reBotArm_Isaacsim
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
./run_sender.sh
```

**预期行为：**
- 连接真实机械臂，启用 MIT + 重力前馈补偿
- 机械臂可自由掰动
- 关节角以 60 Hz 持续通过 UDP 发送

#### ⑤ Real-to-Sim 映射模式（`joint_reader_sender`）

只读关节角并映射到 Isaac Sim，适合实际机械臂在运行其他任务时同步映射可视化。在 `reBotArm_Isaacsim/` 目录下直接 `uv run`：

```bash
cd reBotArm_Isaacsim
uv run python joint_reader_sender.py
```

**预期行为：**
- 仅读取关节角（被动反馈模式），不发送任何控制指令
- 关节角以 60 Hz 持续通过 UDP 发送
- 实际机械臂由其他项目控制时，可同时在 Isaac Sim 中可视化

## 通信协议

UDP JSON，端口 `DEFAULT_SIM_HOST:5005`。

**发送端每帧 Payload：**

```json
{
  "sequence": 123,
  "timestamp": 1718000000.123,
  "joint_positions": [0.0, 0.1, 0.2, -0.1, 0.0, -0.02],
  "gripper_position": 0.01
}
```

| 字段 | 类型 | 说明 |
|------|------|------|
| `sequence` | int | 递增序号 |
| `timestamp` | float | Unix 时间戳（秒） |
| `joint_positions` | float[6] | 前 6 个关节角（rad） |
| `gripper_position` | float | 夹爪位置（m），由发送端通过 `GRIPPER_POSITION_SCALE` 转换 |

## 配置参数

### 发送端 (`gravity_joint_sender.py`)

| 参数 | 默认值 | 说明 |
|------|--------|------|
| `ARM_JOINT_COUNT`| 6 | 关节数 |
| `DEFAULT_PORT` | 5005 | UDP 端口 |
| `DEFAULT_SEND_HZ` | 60.0 | 发送频率（Hz） |
| `GRIPPER_POSITION_SCALE` | 0.007 |夹爪角到位置的缩放系数 |

### 接收端 (`isaacsim_joint_receiver.py`)

| 参数 | 默认值 | 说明 |
|------|--------|------|
| `ARM_JOINT_COUNT` | 6 | 关节数 |
| `DEFAULT_PORT` | 5005 | UDP 端口 |
| `DEFAULT_RENDER_HZ` | 120.0 | 仿真渲染频率（Hz） |
| `GRIPPER_POSITION_SCALE` | 0.0073 | 夹爪位置缩放系数 |
| `ROBOT_PRIM_PATH` | `/World/reBotArm` | Isaac Sim 中的机械臂 Prim 路径 |
| `ASSET_RELATIVE_PATH` | usd/reBot_B601_DM/reBot_B601_DM.usda | USD 资产相对路径 |


## 常见问题

### `OSError: [Errno 98] Address already in use`

端口 5005 已被占用。先确认并终止占用进程：

```bash
# 查看占用端口的进程
sudo lsof -i :5005

# 终止进程（将 PID 替换为实际值）
kill <PID>
```

### 关节角不同步

- 确认发送端和接收端端口一致（均为 5005）
- 检查发送端日志中 `[send]` 是否有持续输出
- 检查接收端日志中 `[recv]` 是否有持续输出
- 尝试使用 `isaacsim_joint_test_sender.py` 排除硬件问题

### 组件与 Python 环境

| 组件 | Python 环境 | 启动脚本 |
|------|------------|---------|
| 发送端（真实机械臂） | `reBotArm_control_py` uv 环境 | `gravity_joint_sender.py` |
| 发送端（测试模式） | `reBotArm_control_py` uv 环境 | `isaacsim_joint_test_sender.py` |
| 接收端 | Isaac Sim 官方 Python (`python.sh`) | `isaacsim_joint_receiver.py` |


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



