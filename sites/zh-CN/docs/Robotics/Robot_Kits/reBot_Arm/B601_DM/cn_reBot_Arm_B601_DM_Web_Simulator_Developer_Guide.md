---
description: 本教程面向开发者，介绍 reBotArm_simulator-DM 网页仿真器与 ROS2/MuJoCo 仿真链路的架构、运行方式、ROS2 桥接、LLM/MCP 接入与二次开发流程。
title: reBot Arm B601-DM Web 仿真器与 ROS2/MuJoCo 开发者教程
keywords:
  - reBot Arm
  - B601-DM
  - Web Simulator
  - Three.js
  - URDF
  - rosbridge
  - LLM
  - MCP
  - 机械臂
  - 机器人
slug: /rebot_arm_b601_dm_web_simulator_developer_guide
sku: 100065783, 100095532
last_update:
  date: 2026-08-24
  author: YinHaizhou
translation:
  skip: [[zh-CN]]
createdAt: '2026-07-30'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/cn/rebot_arm_b601_dm_web_simulator_developer_guide/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RebotDmDocNav from '@site/src/components/robotics/RebotDmDocNav';

# reBot Arm B601-DM Web 仿真器与 ROS2/MuJoCo 开发者教程

<RebotDmDocNav />

<div align="center">
    <img width={800}
    src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://detail.tmall.com/item.htm?id=1042412233386&skuId=6065255360559" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License: Apache 2.0" />
    </a>
    <img src="https://img.shields.io/badge/ROS2-Jazzy-blue.svg" alt="ROS2 Jazzy" />
    <img src="https://img.shields.io/badge/Node.js-18%2B-green.svg" alt="Node.js 18+" />
    <img src="https://img.shields.io/badge/Three.js-r128-orange.svg" alt="Three.js r128" />
    <img src="https://img.shields.io/badge/Version-v1.0.0-brightgreen.svg" alt="Version v1.0.0" />
    <img src="https://img.shields.io/badge/Platform-Cross%20Platform-lightgrey.svg" alt="Platform" />
</p>

<p align="center">
  <strong>Three.js 可视化 · URDF 加载 · rosbridge 桥接 · LLM/MCP 控制</strong>
</p>

本教程面向开发者，介绍如何运行和二次开发 `reBotArm_simulator-DM` 网页仿真器。该仿真器是一个基于 Node.js + Three.js 的轻量网页控制台，从同仓库的 ROS2 工作空间读取 URDF 与 STL 网格，在浏览器中渲染 reBot Arm B601-DM 的 6 自由度本体与夹爪，并通过 rosbridge WebSocket 与 ROS2 通信，支持关节镜像、控制锁、重力补偿、视觉抓取和 LLM 文本控制等完整开发流程。

:::note
本文默认以 `Ubuntu 24.04 + ROS2 Jazzy` 作为 ROS2 后端环境，网页前端可在 Windows、macOS 或 Linux 任意现代浏览器中运行。ROS2 Humble / Ubuntu 22.04 可参考相同流程使用。
:::

## 项目特点

1. **零构建前端**  
   不依赖 Webpack/Vite 等打包工具，所有前端资源为原生 HTML/CSS/JS，由 Node.js 静态服务器直接托管，部署和调试成本极低。

2. **URDF + STL 直接加载**  
   通过 `URDFLoader` 从同仓库 `reBotArm_ros2_DM` 工作空间的 `src/rebotarm_bringup/description/` 读取 `ReBot_Arm_DM.urdf` 与 STL 网格，本体模型无需在网页目录维护第二份副本。该 URDF 包含完整夹爪定义；网页渲染时会隐藏 `end_link` 下的原始夹爪视觉件，并从 `split_meshes/grouped_gripper/` 加载 4 个优化夹爪 STL。

3. **rosbridge 双向桥接**  
   通过 `ReBotRosClient` 封装 rosbridge JSON 协议，订阅关节状态、夹爪状态、机械臂状态、虚拟相机图像和视觉检测结果，发布单关节命令、夹爪命令和目标位姿。

4. **LLM/MCP 文本控制**  
   网页不直接调用 ROS，而是经 Node.js 代理转发到虚拟机中的 text-agent HTTP 服务，再由 MCP Server 将自然语言意图约束为结构化机器人操作。


5. **一键安装与统一启动**  
   `setup.sh` 自动完成系统依赖安装、SDK 克隆、Python 虚拟环境创建、依赖安装和 `colcon build`；`rebotarm` 统一入口提供 `start web / dm / sim`、`doctor`、`status`、`stop` 等命令，可重复执行，已有且满足要求的组件自动跳过。

## 接线与网络说明

网页仿真器本身不直接连接硬件，所有控制命令经 rosbridge 转发到 ROS2。因此需要确认两件事：

1. **Ubuntu 主机侧**：USB2CAN 串口桥连接机械臂 CAN 总线，夹爪电机接入同一条 CAN 总线，接通 24V 电源。确认主机识别到串口：

```bash
ls /dev/ttyACM*
```
<details>
<summary>预期输出</summary>

```text
/dev/ttyACM0
```

列出 `/dev/ttyACM0`（或 `ttyACM1` 等）即串口已识别。

</details>

2. **网页主机侧**：确认能访问 Ubuntu 主机的 rosbridge 端口（默认 `9090`）。在网页主机的浏览器或终端测试 WebSocket 连通性，例如：

```bash
# 确认 Ubuntu 主机 IP 可达
ping <Ubuntu IP>

# 确认 rosbridge 端口开放（需 Ubuntu 侧已启动 rosbridge）
curl -i http://<Ubuntu IP>:9090
```

如果需要临时开放串口权限（Ubuntu 侧）：

```bash
sudo chmod 666 /dev/ttyACM0
```

更推荐将当前用户加入 `dialout` 组，重新登录后生效：

```bash
sudo usermod -a -G dialout $USER
```

## 环境要求

| 项目 | 推荐要求 |
|---|---|
| 操作系统（后端） | Ubuntu 24.04，Ubuntu 22.04 可参考 |
| ROS2 | Jazzy，Humble 可参考 |
| Python | 系统 Python，Jazzy 通常为 3.12 |
| Node.js | 18 及以上 |
| 浏览器 | Chrome / Edge 90+，Firefox 90+，Safari 14+ |
| MuJoCo（可选） | 3.10+，仅完整物理仿真链路需要 |

## 安装步骤

### 步骤 0. 完成机械臂基础准备

开始网页仿真器开发前，请先完成 [reBot Arm B601-DM 快速入门](https://wiki.seeedstudio.com/cn/rebot_b601_dm_getting_started/) 中的内容，包括机械臂组装、电机 ID 配置、零点初始化和基础连通性确认。

本项目仓库已经包含网页仿真器所需的 ROS2 工作空间、URDF 与 STL 网格，无需另外按照 [reBot Arm B601-DM ROS2 集成](https://wiki.seeedstudio.com/cn/rebot_arm_b601_dm_ros2_integration/) 教程搭建工作空间。

:::tip
`reBotArm_control_py` 是核心外部依赖，提供真机驱动、逆运动学、动力学计算和重力补偿。网页仿真器本身不直接 import 该 SDK，但 ROS2 后端的 `rebotarmcontroller` 真机节点、MuJoCo 力矩闭环与重力补偿功能都依赖它。如果只跑 Fake Driver + 网页的纯仿真模式，SDK 非必需；一旦要控制真机或使用重力补偿，必须安装。

`setup.sh` 会自动从 [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py) 获取 SDK，并安装到 `~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM/third_party/reBotArm_control_py/`（锁定到验证过的 commit）。如果已有 `~/reBotArm_control_py/`，也会被自动识别，不会重复克隆。

安装后目录结构：

```text
reBotArm_control_py/
├─ reBotArm_control_py/
│  ├─ actuator/          RebotArm 类、JointGroup、电机控制
│  ├─ controllers/       RebotArmEndPose（轨迹、IK、重力补偿）
│  ├─ kinematics/        正逆运动学、load_robot_model、pad_q_for_model
│  └─ dynamics/          compute_generalized_gravity 等动力学函数
├─ config/
│  └─ rebotarm_dm.yaml   DM 版电机配置（ID、波特率、限位、PID）
├─ urdf/                 Pinocchio 动力学模型 URDF
└─ pyproject.toml
```

SDK 的 `pyproject.toml` 声明 `requires-python >=3.10,<3.12`，但本项目通过 `sys.path` 引用而非 pip 安装，在 Python 3.12 下可正常工作。如果 `pip install -e .` 报版本冲突，跳过该步，确保目录在 `reBotArm_ros2_DM/third_party/reBotArm_control_py/` 或 `~/reBotArm_control_py/` 即可（代码会自动搜索这些路径）。
:::

### 步骤 1. 一键安装

reBot Arm 官方开源项目地址为 [Seeed-Projects/reBot-DevArm](https://github.com/Seeed-Projects/reBot-DevArm)。本教程所用的 Web 仿真器、ROS2 工作空间和 MuJoCo 仿真代码位于 [Yang-Ci/Borot-Arm_Mujoco](https://github.com/Yang-Ci/Borot-Arm_Mujoco)，请将该软件仓库克隆到 `~/reBot_Arm_Mujoco-DM/`：

```bash
git clone https://github.com/Yang-Ci/Borot-Arm_Mujoco.git ~/reBot_Arm_Mujoco-DM
cd ~/reBot_Arm_Mujoco-DM
```

仓库根目录的 `setup.sh` 可重复执行，自动完成全部环境搭建：

- 安装缺失的 apt 系统包（ROS 2、Node.js、ros-dev-tools 等）
- 克隆 `reBotArm_control_py` SDK 到 `third_party/`（如已存在则跳过）
- 创建 Python 虚拟环境（`reBotArm_ros2_DM/.venv`，启用 `--system-site-packages`）
- 安装 `requirements.txt` 中的 Python 依赖
- 从 `.env.example` 创建网页 `.env`
- 执行 `rosdep` 依赖解析与 `colcon build --symlink-install`

```bash
./setup.sh
```

安装器可重复运行：已有且满足要求的组件会跳过，不会删除现有 SDK、虚拟环境或网页 `.env`；缺失项才会安装。结束时会分别汇总已安装、已跳过、版本不匹配和失败项。

只检查、不修改系统：

```bash
./setup.sh --check
```

安装完成后，运行诊断确认环境就绪：

```bash
./rebotarm doctor
```

<details>
<summary>预期输出（摘要）</summary>

```text
[rebotarm-setup] Checking supported platform
[rebotarm-setup] Checking runtime versions
[rebotarm-setup] Checking reBotArm_control_py SDK
[rebotarm-setup] Checking project virtual environment
[rebotarm-setup] Checking web configuration
[rebotarm-setup] Resolving ROS dependencies and building the workspace

Installed/updated (6)
  - apt nodejs
  - SDK ...
  - virtual environment ...
  - Python requirements checked/updated in project venv
  - created .env from example
  - ROS workspace built with colcon

Already usable; skipped (5)
  - Ubuntu 24.04 supported
  - Python 3.12.3 compatible
  - Node.js v18.19.0 compatible
  - existing SDK preserved
  - critical Python and SDK imports pass

Setup complete. Next:
  ./rebotarm doctor
  ./rebotarm start web
  ./rebotarm start dm
```

出现 `Setup complete` 且 `Failed or still missing` 为空即成功。

</details>

:::note
如果 `setup.sh` 未自动安装 ROS 2（例如系统尚未添加 ROS apt 源），安装器会自动从 GitHub 下载官方 `ros2-apt-source` 包并添加源后重试。无需手动配置 apt 源。
:::

### 步骤 2. 配置环境变量

`setup.sh` 已自动从 `.env.example` 创建 `.env`。如需修改端口或代理目标，编辑 `.env`：

```bash
# reBotArm_simulator-DM/.env 关键字段
PORT=3001
REBOTARM_TEXT_AGENT_URL=http://localhost:8082
REBOTARM_MCP_URL=http://localhost:8081/mcp
```

如果网页运行在 Windows、ROS2 运行在 Ubuntu 虚拟机，将 `REBOTARM_TEXT_AGENT_URL` 与 `REBOTARM_MCP_URL` 改为 Ubuntu 虚拟机的实际 IP，例如 `http://<Ubuntu IP>:8082`。

### 步骤 3. 启动网页服务器

```bash
cd ~/reBot_Arm_Mujoco-DM
./rebotarm start web
```

该命令会自动 source ROS2 环境并启动 rosbridge（如端口已被占用则复用现有监听）与 Node.js 网页服务器。启动后终端会打印访问地址：

```text
ROS WebSocket: ws://localhost:9090 (started by this command)
Web: http://localhost:3001
Ctrl+C stops processes started by this command.
```

浏览器打开 `http://localhost:3001`，等待 URDF 与 STL 加载完成，3D 模型出现即表示前端正常。网页默认已连接本地 rosbridge，可直接在「ROS2 桥接」面板操作。

:::note
如果只想运行纯网页演示（不启动 rosbridge），也可以直接进入网页目录手动启动：

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_simulator-DM
node server.js
```

此时网页可拖动关节滑块、使用姿态预设和 TCP 拖拽，但不会连接任何 ROS 节点。
:::

## 项目启动

:::note
`./rebotarm` 命令内部自动 source 环境，无需手动执行 `source scripts/source_rebotarm_env.sh`。但如果直接运行裸 `ros2` 命令，每个新终端仍需先 source。
:::

<Tabs defaultValue="fake" groupId="launch-mode" queryString>

<TabItem value="web" label="纯网页演示">

最轻量的运行方式，仅启动网页服务器，不连接 ROS2。适合姿态展示、教学和 UI 开发：

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_simulator-DM
node server.js
```

浏览器打开 `http://localhost:3001`，可拖动关节滑块、使用姿态预设、TCP 拖拽和示教录制，但所有操作只影响 3D 模型，不会驱动任何硬件或 ROS 节点。


![网页仿真器界面](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web/rebot_web_simulator.png)
</TabItem>

<TabItem value="fake" label="Fake Driver 仿真">

启动 Fake Driver、rosbridge 和网页服务器，网页通过 rosbridge 镜像关节状态并发送控制命令。适合验证接口、关节方向和限位。

终端 1 启动 Fake Driver：

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM
source scripts/source_rebotarm_env.sh
ros2 launch rebotarm_bringup fake_bringup.launch.py
```

终端 2 启动 rosbridge + 网页（一条命令搞定）：

```bash
cd ~/reBot_Arm_Mujoco-DM
./rebotarm start web
```

网页连接 `ws://localhost:9090` 后，勾选「镜像真实关节状态到网页」可看到 Fake Driver 的关节状态同步到 3D 模型。勾选「允许网页向真实机械臂发控制」后，关节滑块和 Pose 运动会通过 rosbridge 下发命令。


![RViz 模型可视化](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web/rebot_rviz_model.png)
</TabItem>

<TabItem value="mujoco" label="完整物理仿真">

一条命令启动 Fake Driver、MuJoCo physics grasp、task server、虚拟相机、颜色检测和 rosbridge 的完整链路：

```bash
cd ~/reBot_Arm_Mujoco-DM
./rebotarm start sim
```

<details>
<summary>预期输出</summary>

```text
[rebot-mujoco-all] starting fake_bringup...
[rebot-mujoco-all] starting mujoco_physics_grasp...
[rebot-mujoco-all] starting sim_task_server...
[rebot-mujoco-all] starting sim_rgb_camera...
[rebot-mujoco-all] starting sim_color_detector...
[rebot-mujoco-all] starting rosbridge_websocket on :9090...
```

各节点依次启动、无 `ERROR` 即成功。

</details>

该脚本内部等同于 `reBotArm_ros2_DM/scripts/start_rebot_mujoco_all.sh`，默认启动 Fake Driver、robot_state_publisher、MuJoCo physics grasp、task server、overhead RGB camera、color detector 和 rosbridge。随后在另一终端运行 `./rebotarm start web` 启动网页，浏览器连接 ROS 后可使用视觉抓取演示。


![MuJoCo 物理仿真](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web/rebot_mujoco_physics.png)
</TabItem>

<TabItem value="real" label="真机控制">

真机模式启动真实 bringup/driver 和 rosbridge，网页通过相同 ROS 接口控制。建议先用 Fake Driver 验证接口、关节方向和限位，再低速切换真机：

```bash
# 启动前确认设备节点并赋予权限
ls /dev/ttyACM0
sudo chmod 666 /dev/ttyACM0

# 启动真机驱动（自动 source 环境）
cd ~/reBot_Arm_Mujoco-DM
./rebotarm start dm
```

在另一个终端启动 rosbridge + 网页：

```bash
cd ~/reBot_Arm_Mujoco-DM
./rebotarm start web
```

:::warning
连接真机控制器时，网页命令会驱动真实硬件。务必先在 Fake Driver 下验证关节方向与限位，首次使用真机时从末端关节小幅度测试，任何异常立即点「失能」或取消控制锁。不要只依赖网页复选框，现场应保留急停、限位和操作空间隔离。
:::

</TabItem>

</Tabs>

## 项目架构

```text
reBot_Arm_Mujoco-DM/
├─ setup.sh                         可重复执行的一键安装与版本检查
├─ rebotarm                         统一启动、停止、状态和诊断入口
├─ requirements.txt                 Python 依赖兼容版本范围
├─ PROJECT_ARCHITECTURE_ZH.md       整体架构、仿真原理和防抖说明
├─ reBotArm_ros2_DM/                ROS 2 工作空间
│  ├─ scripts/                      一键启动脚本与环境加载
│  ├─ third_party/                  新安装时的 reBotArm_control_py SDK
│  ├─ .venv/                        项目 Python 虚拟环境（由 setup.sh 创建）
│  └─ src/
│     ├─ rebotarm_msgs/             自定义 msg/srv/action
│     ├─ rebotarmcontroller/        真机驱动、Fake Driver、硬件管理
│     ├─ rebotarm_bringup/          URDF、STL、launch、电机配置
│     ├─ rebotarm_mujoco/           MuJoCo 仿真、IK、相机、视觉
│     ├─ rebotarm_agent/            MCP Server 与文本 Agent
│     ├─ rebotarm_moveit_config/    MoveIt 2 配置
│     └─ rebotarm_moveit_demos/     MoveIt 2 应用 demo
└─ reBotArm_simulator-DM/           Node.js + Three.js 网页控制台
   ├─ public/                       页面、样式、前端逻辑
   └─ split_meshes/grouped_gripper/ 网页夹爪网格
```

数据流向：浏览器经 `HTTP /api` 访问 Node.js 静态服务，经 `rosbridge WebSocket` 与 ROS2 双向通信；自然语言经 Node.js 代理转发到 Text Agent / MCP Server，再转为结构化工具调用进入 ROS2。ROS2 向下驱动 Fake/真机驱动与机械臂，向旁连接 MuJoCo 物理仿真、任务服务器和虚拟相机。网页、LLM Agent 和真机都不直接互相硬编码调用，而是通过 ROS2 的 topic、service 和 action 解耦。

`rebotarm` 统一入口是项目的主要操作方式：

| 命令 | 说明 |
|---|---|
| `./rebotarm start web` | 启动 rosbridge + 网页服务器（自动 source 环境） |
| `./rebotarm start dm` | 启动 DM 真机驱动（单独终端，自动 source 环境） |
| `./rebotarm start sim` | 启动完整 MuJoCo 仿真栈（不要与真机同时启动） |
| `./rebotarm doctor` | 诊断检查（等同 `./setup.sh --check`） |
| `./rebotarm status` | 查看进程、端口、串口和 ROS 节点状态 |
| `./rebotarm stop` | 停止由 `start web` 管理的后台进程 |

:::note
`./rebotarm` 的所有命令内部会自动 `source scripts/source_rebotarm_env.sh`，无需手动加载环境。但如果直接运行裸 `ros2` 命令（如手动启动某个 launch 文件），仍需先 source：

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM
source scripts/source_rebotarm_env.sh
```

该脚本按顺序加载 ROS2（`/opt/ros/jazzy/setup.bash`）、Python venv（`.venv/bin/activate`）、cmeel 路径（Pinocchio 的 C 扩展）和工作空间（`install/setup.bash`）。
:::

<details>
<summary><b>核心模块说明</b>（点击展开）</summary>


**server.js — Node.js 静态服务器**

`server.js` 是一个零依赖的 Node.js HTTP 服务器，主要职责：

- 托管 `public/` 下的静态前端资源；
- 从同仓库 ROS2 工作空间读取 URDF 与 STL 网格，对外提供 `/api/urdf` 与 `/api/description/meshes/<file>` 端点；
- 提供网页专用夹爪网格 `/api/gripper_meshes/<file>`（来自 `split_meshes/grouped_gripper/`）；
- 代理 LLM 聊天请求 `/api/llm/chat` 与健康检查 `/api/llm/health` 到虚拟机的 text-agent HTTP 服务；
- 提供 MCP 配置端点 `/api/mcp/config`，返回 `textAgentUrl` 与 `mcpUrl`。

关键路径解析（`server.js`）：

```javascript
const BRINGUP_DIR = path.resolve(
  path.join(ROOT, '..', 'reBotArm_ros2_DM', 'src', 'rebotarm_bringup')
);
const URDF_FILE = path.join(BRINGUP_DIR, 'description', 'urdf', 'ReBot_Arm_DM.urdf');
const MESHES_DIR = path.join(BRINGUP_DIR, 'description', 'meshes');
const GRIPPER_MESHES_DIR = path.join(ROOT, 'split_meshes', 'grouped_gripper');
```

:::note
`server.js` 通过相对路径 `../reBotArm_ros2_DM/...` 定位 ROS2 工作空间。如果将网页目录单独迁移到其他位置，需要同步修改这些路径，或在网页目录维护一份与 ROS2 工作空间同版本的模型副本。
:::

**rebot-sim.js — 3D 场景核心**

`rebot-sim.js` 是前端核心，约 1700 行，负责：

- 初始化 Three.js 场景、相机、渲染器与自定义轨道控制器；
- 通过 `URDFLoader` 加载 URDF，`loader.packages` 将 `package://rebotarm_bringup` 映射到 `${origin}/api`，使网格请求走 Node.js 端点；
- 在 `end_link` 末端附加网页专用夹爪视觉组（4 个 STL），驱动范围为 0~90mm；
- 实现阻尼最小二乘（DLS）逆运动学求解器 `IKSolver`，支持 TCP 拖拽与目标位姿求解；
- 提供姿态预设、关节滑块、TCP 拖拽、示教录制/回放/导出、可达包络估算、目标残影等功能；
- 通过 `window.reBotSim` 对象暴露 API，供 `rebot-ros-ui.js` 调用。

关节定义（`rebot-sim.js`）：

```javascript
const jointDefs = [
  { name: 'joint1', label: 'J1 底座偏航', min: -2.8, max: 2.8, home: 0 },
  { name: 'joint2', label: 'J2 肩部',     min: -3.14, max: 0,   home: 0 },
  { name: 'joint3', label: 'J3 肘部',     min: -3.14, max: 0,   home: 0 },
  { name: 'joint4', label: 'J4 腕部俯仰', min: -1.87, max: 1.57, home: 0 },
  { name: 'joint5', label: 'J5 腕部偏航', min: -1.57, max: 1.57, home: 0 },
  { name: 'joint6', label: 'J6 工具旋转', min: -3.14, max: 3.14, home: 0 },
  { name: 'gripper', label: 'J7 夹爪', min: 0, max: 0.09, home: 0, unit: 'm' }
];
```

:::note
网页 Three.js 坐标系与 ROS 坐标系不同。Three.js 默认 Y 轴向上，ROS 默认 Z 轴向上。`rebot-sim.js` 通过 `threeToRos(v)` 完成转换：`{ x: v.x, y: -v.z, z: v.y }`。开发自定义位姿功能时务必使用该转换，否则坐标会错位。
:::

**rebot-ros-client.js — rosbridge 客户端**

`ReBotRosClient` 继承 `EventTarget`，封装 rosbridge v2 JSON 协议，提供：

- `connect(url)` / `disconnect()`：WebSocket 连接管理，支持自动重连（`autoReconnect`、`reconnectDelay`）；
- `subscribe(topic, type, callback, options)`：订阅 topic，支持 `throttleRate` 节流；
- `callService(service, type, args)`：调用 service 并返回 Promise；
- `sendActionGoal(actionName, actionType, goal)`：通过 `/_action/send_goal` 调用 action；
- 高层封装：`enable()`、`disable()`、`safeHome()`、`startGravityCompensation()`、`setGripper()`、`moveToPose()`、`solveMoveToPoseIK()`、`followJointTrajectory()`；
- 发布封装：`publishJointCommand()`、`publishGripperCommand()`、`publishTargetPose()`。

默认命名空间为 `rebotarm`，所有 topic/service 路径前缀为 `/rebotarm/`。

**rebot-ros-ui.js — ROS 控制面板**

`rebot-ros-ui.js` 约 1500 行，是连接 `ReBotRosClient` 与 `reBotSim` 的业务层，负责：

- 订阅关节状态、夹爪状态、机械臂状态、虚拟相机图像、视觉检测结果、仿真动画事件；
- 实现「镜像真实关节状态到网页」与「允许网页向真实机械臂发控制」两个开关；
- 关节命令节流（`COMMAND_INTERVAL_MS = 45ms`）与镜像保持（`MIRROR_HOLD_MS = 1800ms`）；
- 重力补偿启停与状态查询；
- 夹爪控制与到位等待（`commandGripperAndWait`）；
- IK 检查、Pose 运动、轨迹下发与低层回放降级；
- 视觉抓取完整流程（避让、对正、预下探、下探、夹紧、抬升、中转）；
- 仿真动画事件（`attach_object` / `release_object`）驱动网页夹爪跟随物体。

控制锁是重要的防误操作门槛。`controlAllowed()` 统一检查：未连接 ROS、未勾选控制锁时，所有控制命令被拦截，网页只更新 3D 模型。

**rebot-llm.js — LLM 文本控制 UI**

`rebot-llm.js` 实现自然语言聊天界面，链路为：

```text
网页 rebot-llm.js
  -> Node.js /api/llm/chat
  -> Text Agent HTTP 服务（默认 :8082）
  -> MCP Server（默认 :8081/mcp）
  -> ROS 2 service/action/topic
```

启动时先调用 `/api/llm/health` 健康检查 text-agent，成功后启用输入框。发送消息经 `/api/llm/chat` 代理到 text-agent，返回的 `text` 与 `events`（工具调用过程）分别渲染到聊天区。停止时发送 `{ text: '__reset__', reset: true }` 清空上下文。

</details>

<details>
<summary><b>ROS2 接口一览</b>（点击展开）</summary>


网页仿真器订阅与发布的关键 ROS2 接口如下，命名空间默认为 `rebotarm`。

**订阅的 Topic**

| Topic | 类型 | 说明 |
|---|---|---|
| `/rebotarm/joint_states` | `sensor_msgs/msg/JointState` | 6 关节 + 夹爪实时位置 |
| `/rebotarm/gripper/state` | `rebotarm_msgs/msg/JointMotorState` | 夹爪位置/速度/力矩 |
| `/rebotarm/arm_status` | `rebotarm_msgs/msg/ArmStatus` | 使能、模式、状态机 |
| `/rebotarm/mujoco/overhead_rgb/image_raw` | `sensor_msgs/msg/Image` | 桌面俯视相机 RGB 图像 |
| `/rebotarm/vision/color_blocks/detections` | `std_msgs/msg/String` | 颜色块检测结果（JSON） |
| `/rebotarm/sim/animation_event` | `std_msgs/msg/String` | 仿真动画事件（抓取/释放） |

**发布的 Topic**

| Topic | 类型 | 说明 |
|---|---|---|
| `/rebotarm/joints/<jointN>/cmd` | `rebotarm_msgs/msg/JointMotorCmd` | 单关节稀疏命令（mode=1 POS_VEL） |
| `/rebotarm/gripper/cmd` | `rebotarm_msgs/msg/JointMotorCmd` | 夹爪命令（米，0~0.09） |
| `/rebotarm/mujoco/target_pose` | `geometry_msgs/msg/PoseStamped` | TCP 拖拽目标位姿 |

**调用的 Service**

| Service | 类型 | 说明 |
|---|---|---|
| `/rebotarm/enable` | `std_srvs/srv/Trigger` | 使能所有电机 |
| `/rebotarm/disable` | `std_srvs/srv/Trigger` | 失能所有电机 |
| `/rebotarm/safe_home` | `std_srvs/srv/Trigger` | 安全回零 |
| `/rebotarm/gravity_compensation/start` | `std_srvs/srv/Trigger` | 启动重力补偿 |
| `/rebotarm/gravity_compensation/stop` | `std_srvs/srv/Trigger` | 停止重力补偿 |
| `/rebotarm/gravity_compensation/status` | `std_srvs/srv/Trigger` | 查询重力补偿状态 |
| `/rebotarm/gripper/set` | `rebotarm_msgs/srv/SetGripper` | 夹爪到位服务 |
| `/rebotarm/move_to_pose_ik` | `rebotarm_msgs/srv/MoveToPoseIK` | IK 解算服务 |
| `/rosapi/topics` | `rosapi_msgs/srv/Topics` | 诊断：列出所有 topic |
| `/rosapi/services` | `rosapi_msgs/srv/Services` | 诊断：列出所有 service |

**调用的 Action**

| Action | 类型 | 说明 |
|---|---|---|
| `/rebotarm/move_to_pose` | `rebotarm_msgs/action/MoveToPose` | 笛卡尔位姿运动 |
| `/rebotarm/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | 关节轨迹执行 |

:::note
当 ROS2 环境中未发现 `FollowJointTrajectory` 或 `MoveToPose` 的 `_action/send_goal` service 时，网页会自动降级为「低层回放」模式：按轨迹点时间戳逐点发布单关节命令，并在网页 3D 模型中同步插值。这使网页在仅有 Fake Driver 的最小环境下也能演示轨迹。
:::

</details>

## 夹爪单位与坐标约定

网页和 ROS 接口使用**米**作为夹爪单位：

```text
close: 0.00 m
open:  0.09 m
```

电机固件使用**弧度**（0.0 = 闭合，−5.0 = 张开），换算在 ROS2 控制器的 `HardwareManager` 中完成，网页不直接处理弧度。

URDF 中 `finger_left` / `finger_right` 为 prismatic 关节，限位 `0~0.0285`（米）。网页通过 `fingerOpeningToGripperCommand()` 将 `finger_left` 开口映射到 0~0.09 米的夹爪命令范围。

坐标系方面，网页 Three.js 默认 Y 轴向上，ROS 默认 Z 轴向上。所有 TCP 位姿在发布到 ROS 前都经过 `threeToRos()` 转换：

```javascript
function threeToRos(v) {
  return { x: v.x, y: -v.z, z: v.y };
}
```

## LLM/MCP 文本控制

自然语言控制不由浏览器直接调用 ROS，而是经 Node.js 代理转发，分层设计使 LLM 负责理解意图，MCP 层负责将意图约束为结构化机器人操作。

### 启动 MCP Server 与 Text Agent

在 Ubuntu 虚拟机启动 MCP Server（默认锁定模式，只读）：

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM
source scripts/source_rebotarm_env.sh
ros2 launch rebotarm_agent rebotarm_mcp.launch.py
```

仿真运动模式（允许运动）：

```bash
ros2 launch rebotarm_agent rebotarm_mcp.launch.py motion_mode:=allow
```

启动 text-agent HTTP 服务（供网页调用）：

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM
./scripts/start_rebotarm_text_agent_http.sh
```
<details>
<summary>预期输出</summary>

```text
[rebotarm-text-agent-http] MCP=http://127.0.0.1:8081/mcp
[rebotarm-text-agent-http] model=qwen-plus
INFO:     Uvicorn running on http://0.0.0.0:8082
```

出现 `Uvicorn running on http://0.0.0.0:8082` 即就绪。

</details>

默认监听 `0.0.0.0:8082`，MCP 指向 `http://127.0.0.1:8081/mcp`，LLM 默认使用 `qwen-plus`。

### 网页使用

在网页「LLM 文本控制」面板点击「启动 AI 助手」，网页会先健康检查 text-agent，成功后启用输入框。直接输入中文指令即可，例如：

- 查询机械臂状态
- 移动到 X=0.3 Y=0 Z=0.3
- 打开夹爪
- 抓取红色物块

text-agent 返回的回复与工具调用过程会分别渲染到聊天区。

### 配置代理目标

网页通过 `.env` 的 `REBOTARM_TEXT_AGENT_URL` 与 `REBOTARM_MCP_URL` 定位后端。如果网页运行在 Windows、ROS2 运行在 Ubuntu 虚拟机，修改为虚拟机实际 IP：

```bash
REBOTARM_TEXT_AGENT_URL=http://<Ubuntu IP>:8082
REBOTARM_MCP_URL=http://<Ubuntu IP>:8081/mcp
```

修改后重启 `./rebotarm start web`（或 `node server.js`）。网页启动时会从 `/api/mcp/config` 读取并显示当前代理后端。

### MCP Dashboard 可视化面板

MCP Dashboard 是独立的调试入口，不需要网页仿真器。启动需要两步：
![MCP Dashboard](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web/rebot_mcp.png)

**终端 1 — 启动 MCP Server：**

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM
source scripts/source_rebotarm_env.sh
ros2 launch rebotarm_agent rebotarm_mcp.launch.py motion_mode:=allow
```

**终端 2 — 启动 text-agent（内含 MCP Dashboard）：**

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM
./scripts/start_rebotarm_text_agent_http.sh
```

**浏览器访问：**

```text
http://localhost:8082/
```

浏览器打开 `http://<Ubuntu IP>:8082/` 即可访问，无需额外安装。

**功能**：

- **工具总览**：自动从 MCP Server 拉取全部已注册工具，按类别分组展示（状态与诊断、使能控制、运动控制、夹爪控制、重力补偿、视觉抓取、录制回放）；
- **搜索过滤**：顶部搜索框实时过滤工具名称与描述；
- **参数表单**：根据每个工具的 `inputSchema` 自动生成输入框，填入参数后点「调用」即可直接调用对应 MCP 工具；
- **运动标记**：需要 `motion_mode=allow` 的工具会标注「运动」标签；
- **自定义工具注册**：点击「注册新工具」按钮，填写工具名称、描述、分类、Webhook URL 和参数 Schema（JSON），即可将自定义工具加入面板。调用时参数会以 JSON POST 到 Webhook 地址；
- **中英文切换**：右上角语言按钮一键切换中/英文界面，选择会保存在浏览器 `localStorage`；
- **自然语言输入**：右侧聊天框输入中文指令，经 `/chat` 端点走 LLM → MCP 链路，回复和工具调用过程实时显示在日志区。

:::tip
MCP Dashboard 是独立的调试入口，不依赖网页仿真器。只要 MCP Server（`:8081`）和 Text Agent（`:8082`）已启动，打开 `http://<Ubuntu IP>:8082/` 即可查看和调用全部 18 个 MCP 工具。
:::

**端点一览**：

| 端点 | 方法 | 说明 |
|---|---|---|
| `/` 或 `/dashboard` | GET | 返回 Dashboard HTML 页面（暗色玻璃面板主题，支持中英文切换） |
| `/tools` | GET | 返回 MCP 工具列表 JSON（含名称、描述、参数 schema、分类、自定义标记） |
| `/call_tool` | POST | 直接调用指定 MCP 工具，body: `{"name":"...", "arguments":{...}}` |
| `/register_tool` | POST | 注册自定义工具，body: `{"name":"...", "description":"...", "category":"...", "webhook_url":"...", "parameters":{...}}` |
| `/unregister_tool` | POST | 删除已注册的自定义工具，body: `{"name":"..."}` |
| `/chat` | POST | 自然语言对话，body: `{"text":"..."}` |
| `/health` | GET | 健康检查 |

## 二次开发指南

### 修改关节限位或预设

关节限位与预设姿态定义在 `rebot-sim.js` 顶部的 `jointDefs` 与 `presets` 对象中。修改后刷新页面即可生效，无需重新构建。注意关节限位应与 URDF 中的 `<limit>` 保持一致，否则网页模型与 ROS 行为不符。

### 添加自定义 ROS 接口

如需订阅新的 topic 或调用新的 service，在 `rebot-ros-ui.js` 的 `REQUIRED_TOPICS` 或 `REQUIRED_SERVICES` 中添加，并在 `client.subscribe()` 或按钮事件中调用 `client.callService()`。`ReBotRosClient` 已封装 rosbridge 协议，无需手写 WebSocket 通信。

### 扩展 LLM 工具

LLM 工具由 `rebotarm_agent` 的 MCP Server 定义。新增工具需在 ROS2 工作空间的 `rebotarm_agent` 包中实现，重建后 text-agent 会自动暴露。网页端无需修改，工具调用过程会通过 `/api/llm/chat` 的 `events` 字段返回并渲染。

### 修改网页夹爪网格

网页专用夹爪 STL 位于 `split_meshes/grouped_gripper/`，包含 `gripper_base.stl`、`gripper_hardware.stl`、`left_finger.stl`、`right_finger.stl` 四个文件。替换这些文件后刷新页面即可。不要在网页目录添加第二份 `urdf/` 或 `meshes/` 副本，运行时只使用这四个夹爪 STL。

### 修改 rosbridge 连接地址

rosbridge WebSocket 地址由用户在网页「ROS2 桥接」面板手动输入，默认不硬编码。如需修改默认值或预设地址：

- `reBotArm_simulator-DM/public/js/ros/rebot-ros-client.js`（客户端默认空，由输入框提供）
- `reBotArm_simulator-DM/public/js/ros/rebot-ros-ui.js`（从 `localStorage` 读取上次地址）

网页会在输入框为空时尝试加载上次保存的地址。修改默认值或直接在网页连接面板手动输入实际地址即可。

<details>
<summary><b>关键文件速查</b>（点击展开）</summary>


| 文件 | 作用 |
|---|---|
| `reBotArm_simulator-DM/server.js` | Node.js 静态服务器 + LLM 代理 |
| `reBotArm_simulator-DM/package.json` | npm 脚本（start / dev） |
| `reBotArm_simulator-DM/.env` | 端口与代理目标配置 |
| `reBotArm_simulator-DM/public/index.html` | 单页应用入口与控制面板布局 |
| `reBotArm_simulator-DM/public/css/rebot-sim.css` | 暗色主题样式 |
| `reBotArm_simulator-DM/public/js/rebot-sim.js` | 3D 场景、IK、示教、拖拽核心 |
| `reBotArm_simulator-DM/public/js/rebot-llm.js` | LLM 聊天 UI |
| `reBotArm_simulator-DM/public/js/ros/rebot-ros-client.js` | rosbridge WebSocket 客户端 |
| `reBotArm_simulator-DM/public/js/ros/rebot-ros-ui.js` | ROS 控制面板 UI 与业务逻辑 |
| `reBotArm_simulator-DM/public/lib/three-r128.min.js` | Three.js 渲染引擎 |
| `reBotArm_simulator-DM/public/lib/STLLoader-umd.js` | STL 网格加载器 |
| `reBotArm_simulator-DM/public/lib/URDFLoader.js` | URDF 解析器 |
| `reBotArm_simulator-DM/split_meshes/grouped_gripper/` | 网页专用夹爪 STL（4 个文件） |

</details>

## FAQ

### 1. 启动浏览器后一直提示「正在加载 Rebot_ARM-B601-DM 机械臂模型...」

页面一直停在加载遮罩，说明 URDF 或 STL 网格请求失败。打开浏览器开发者工具的 Network 面板，检查 `/api/urdf` 与 `/api/description/meshes/*.STL` 是否返回 200。常见原因：

- `server.js` 的 `BRINGUP_DIR` 路径解析错误（网页目录被移动到非 monorepo 位置），导致找不到 `src/rebotarm_bringup/description/`；
- URDF 中 `package://rebotarm_bringup/...` 无法映射，确认 `loader.packages` 指向 `${origin}/api`；
- STL 文件缺失或路径大小写不符（Linux 区分大小写）。

### 2. 连接 ROS 后状态一直「离线」

按下面顺序检查：

- Ubuntu 侧 rosbridge 是否已启动并监听 `0.0.0.0:9090`（不是 `127.0.0.1`）；
- 网页主机能否访问 Ubuntu 的 9090 端口（防火墙、虚拟机网络模式）；
- WebSocket 地址是否以 `ws://` 开头（如 `ws://localhost:9090`）；

### 3. 关节滑块控不了真机

网页控制真机需要三步解锁：

1. 在「ROS2 桥接」面板连接 ROS（WebSocket 连接到真机控制器的 rosbridge）；
2. 勾选「允许网页向真实机械臂发控制」→ 确认对话框点「确定」；
3. 点「使能」按钮。

三步缺一不可。未勾选控制锁时拖滑块只动 3D 模型，不发 ROS 命令。

### 4. 夹爪不同步到网页

`/rebotarm/gripper/state` 的 position 必须是米（0~0.09），不是弧度。如果不同步，检查 ROS2 控制器的 `ros_publishers.py` 是否使用 `gripper_position_m()`。网页也会从 `/rebotarm/joint_states` 的 `finger_left` 反推夹爪开口作为备用反馈源。

### 5. LLM 助手启动失败

网页提示「连接失败」时，确认 Ubuntu 虚拟机中已启动 text-agent HTTP 服务：

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM
./scripts/start_rebotarm_text_agent_http.sh
```

并确认 `.env` 的 `REBOTARM_TEXT_AGENT_URL` 指向正确的虚拟机 IP 与端口（默认 `8082`）。网页会先调用 `/api/llm/health` 健康检查，失败时会在消息区显示具体错误。

### 6. 视觉抓取演示不工作

视觉抓取依赖完整物理仿真链路。检查：

- 是否已启动 MuJoCo overhead RGB camera，`/rebotarm/mujoco/overhead_rgb/image_raw` 有图像；
- 是否已启动 color detector，`/rebotarm/vision/color_blocks/detections` 有检测结果；
- 网页相机预览是否显示画面，颜色识别状态是否显示「N 个 / 目标 X」；
- 目标颜色选择是否正确（自动/红色/黄色/蓝色）。

### 7. 修改了前端代码不生效

前端资源由 Node.js 静态托管，修改后刷新浏览器即可。当前版本未注册 Service Worker，因此不存在离线缓存导致旧版本不更新的问题。如果浏览器仍显示旧内容，使用强制刷新（Ctrl+Shift+R）或清除常规缓存即可。

### 8. 提示找不到 `URDFLoader` 或 `THREE`

这些是 `public/lib/` 下的第三方库，由 `index.html` 通过 `<script>` 标签加载。确认：

- `public/lib/three-r128.min.js`、`public/lib/URDFLoader.js`、`public/lib/STLLoader-umd.js` 存在；
- `index.html` 中的 `<script>` 标签路径正确，且加载顺序为 Three.js → STLLoader → URDFLoader → 业务脚本；
- 浏览器控制台无 404 或加载顺序错误。

### 9. `setup.sh` 报错或安装失败

`setup.sh` 可重复运行，失败的组件会在最终汇总的 `Failed or still missing` 列出。常见情况：

- ROS apt 源未配置：安装器会自动下载 `ros2-apt-source` 包并添加源，需 sudo 权限；
- Python 版本不匹配：Jazzy 需要 3.12，Humble 需要 3.10，版本不符会列在 `Version/platform mismatches`；
- SDK 克隆失败：检查网络与 GitHub 可达性，或手动克隆到 `reBotArm_ros2_DM/third_party/reBotArm_control_py/` 后重跑；
- `colcon build` 失败：检查 `rosdep` 是否已初始化（`sudo rosdep init && rosdep update`），然后重跑 `./setup.sh`。

## 联系方式

- 技术支持：[提交 Issue](https://github.com/Seeed-Projects/reBot-DevArm/issues)
- 项目地址：[Github](https://github.com/Seeed-Projects/reBot-DevArm)
- 论坛：[Seeed Studio Forum](https://forum.seeedstudio.com/)

## 参考文档

- [reBot Arm B601-DM 快速入门](https://wiki.seeedstudio.com/cn/rebot_b601_dm_getting_started/)
- [reBot Arm B601-DM ROS2 集成](https://wiki.seeedstudio.com/cn/rebot_arm_b601_dm_ros2_integration/)
- [reBot Arm B601-DM 视觉夹取 Demo](https://wiki.seeedstudio.com/cn/rebot_arm_b601_dm_grasping_demo/)
- [reBot Arm B601-DM Pinocchio 与 MeshCat](https://wiki.seeedstudio.com/cn/rebot_arm_b601_dm_pinocchio_meshcat/)
- [reBot Arm B601-DM LeRobot 教程](https://wiki.seeedstudio.com/cn/rebot_arm_b601_dm_lerobot/)
- [ROS2 Jazzy 文档](https://docs.ros.org/en/jazzy/)
- [rosbridge_suite 文档](http://wiki.ros.org/rosbridge_suite)
- [Three.js 文档](https://threejs.org/docs/)
- [URDFLoader（gkjohnson）](https://github.com/gkjohnson/urdf-loaders)
- [Model Context Protocol](https://modelcontextprotocol.io/)
