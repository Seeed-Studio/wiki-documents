---
title: reBot Arm T701 HT 快速开始
sidebar_label: 快速开始
description: 开箱并组装 reBot Arm T701 HT，在 Ubuntu 上安装 SDK、检查关节反馈、设置零点并运行示例。
keywords:
  - reBot
  - T701 HT
  - OpenArm-HT-A1
  - 双臂机器人
  - Python SDK
slug: /rebot_t701_ht_getting_started
last_update:
  date: 11/19/2026
  author: liujunjie
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reBot Arm T701 HT 快速开始

<div align="center">
  <img
    width={800}
    height={586}
    style={{ height: 'auto', aspectRatio: '800 / 586', objectFit: 'contain', backgroundColor: '#000' }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp"
    alt="reBot Arm T701 HT 双臂机器人"
  />
</div>

<GitHubStarButton
  owner="Seeed-Projects"
  repo="reBot-Arm-T701"
  fallbackCount={35}
  ariaLabel="在 GitHub 上为 reBot Arm T701 点亮 Star"
/>

## 项目简介

reBot Arm T701 是 Seeed Studio 推出的开源双臂机器人平台，面向物理 AI（Physical AI）、机器人学习和真实世界数据采集。T701 延续了 reBot Arm B601 的开源设计，让开发者能够在同一平台上采集和研究双臂协作任务。

- **双臂结构**。两条 7 自由度机械臂安装在同一躯干上，关节由 CAN 总线电机驱动，每条手臂配有一个夹爪。
- **视觉与边缘计算**。平台预留 RealSense D405 腕部和 D435 头部相机安装位，以及 NVIDIA Jetson Orin 计算模块安装位。**Basic 版不附带摄像头。**
- **开源资料**。CAD 文件、物料清单（BOM）、装配指南和软件按项目路线图分阶段发布。

## 风险告知及免责声明

<div className="rebot-disclaimer-gallery">
  <figure className="rebot-disclaimer-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/Chinese%20version%20statement.png" alt="reBot Arm 中文风险告知及免责声明" />
  </figure>
  <figure className="rebot-disclaimer-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/English%20Version%20Statement.png" alt="reBot Arm 英文风险告知及免责声明" />
  </figure>
</div>

{/*
## 关于电源

- **TODO** 补充配套电源型号、额定输出、接口规格和供货说明。
*/}

## 开箱与组装机械臂

选择你的 T701 型号，观看对应的开箱与组装视频。

<Tabs>
<TabItem value="basic" label="Basic">

<div className="video-container">
  <iframe
    src="https://player.bilibili.com/player.html?bvid=BV18q1pzLEJM&autoplay=0"
    title="reBot Arm T701 Basic 版开箱与组装"
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
    allow="encrypted-media; picture-in-picture"
    allowFullScreen
  />
</div>

</TabItem>

<TabItem value="pro" label="Pro">

<div className="video-container">
  <iframe
    src="https://player.bilibili.com/player.html?bvid=BV1Sq1pzLEJz&autoplay=0"
    title="reBot Arm T701 Pro 版开箱与组装"
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
    allow="encrypted-media; picture-in-picture"
    allowFullScreen
  />
</div>

</TabItem>
</Tabs>

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">

### 开箱检查

打开行李箱，对照随箱发货清单核对机械臂部件和紧固件。

:::note[Basic 版不附带摄像头]
随箱物料以发货清单为准。
:::

<div align="center">
  <img width={760} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/10-unpacking.webp" alt="打开行李箱后可见双臂、躯干立柱和外壳，示例包含摄像头" loading="lazy" />
</div>

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">

### 将双臂固定到躯干立柱

1. 取出躯干立柱和右臂，对齐两张图中红圈标出的 4 处安装孔。
2. 用 4 颗随附的 **M6 螺丝**将右臂固定到立柱。

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>躯干立柱上的安装孔</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/11-torso-holes.webp" alt="躯干立柱侧面红圈标出的四个安装孔" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>右臂安装板上的对应孔位</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/11-arm-holes.webp" alt="右臂金属安装板红圈标出的四个安装孔" loading="lazy" />
  </figure>
</div>

固定后，从上方和侧面核对右臂与立柱的连接位置。

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>右臂固定后从上方看</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/12-arm-mounted-top.webp" alt="从上方看到右臂安装板和上侧固定螺丝" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>右臂固定后从侧面看</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/12-arm-mounted-side.webp" alt="从立柱侧面看到右臂安装板和下侧固定螺丝" loading="lazy" />
  </figure>
</div>

在断电状态下，将立柱侧面伸出的 **XT30 2+2 线束**插入右臂图示接口。左臂在立柱另一侧按相同方式固定和连接。

<div align="center">
  <img width={680} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/13-arm-connector.webp" alt="立柱侧面的 XT30 2+2 线束接入手臂接口后的走线" loading="lazy" />
</div>

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">

### 安装肩部外壳

1. 取出绿色肩部外壳件，把上下两片合拢装到肩部。
2. 按红圈标出的位置装入随附的**中短 M3 螺丝**，每侧 4 颗，两侧共 8 颗。

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>肩部外壳的上下两片</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/13-shoulder-cover-parts.webp" alt="两片绿色半环形肩部外壳" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>肩部外壳安装位置</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/14-shoulder-cover-fit.webp" alt="红框标出绿色肩部外壳合拢后的安装位置" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>肩部外壳上方螺丝位置</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/15-shoulder-cover-screws-top.webp" alt="红圈标出从上方可见的两颗肩部外壳螺丝" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>肩部外壳侧面螺丝位置</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/15-shoulder-cover-screws-side.webp" alt="红圈标出从侧面可见的肩部外壳螺丝" loading="lazy" />
  </figure>
</div>

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">

### 安装躯干外壳

1. 两侧肩部外壳都固定后，装上躯干外壳，将侧边线束放在对应的走线缺口。若设备装有图示 **RealSense D435i** 摄像头，确认摄像头与前壳开口对齐。**Basic 版不附带摄像头。**

   <div className="rebot-power-gallery">
     <figure className="rebot-power-gallery-item">
       <figcaption>前壳摄像头开口（Basic 版不附带摄像头）</figcaption>
       <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/16-torso-cover-front.webp" alt="红框标出前壳摄像头开口与 D435i 的对齐位置" loading="lazy" />
     </figure>
     <figure className="rebot-power-gallery-item">
       <figcaption>侧边走线缺口</figcaption>
       <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/16-torso-cover-cable.webp" alt="红圈标出躯干外壳侧边的线束走线缺口" loading="lazy" />
     </figure>
   </div>

2. 在背面红圈标出的位置拧入 4 颗随附的**最长 M3 螺丝**，固定躯干外壳。

   <div align="center">
     <img width={760} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/17-torso-cover-screws-repaired.webp" alt="躯干外壳背面红圈标出的四处螺丝位置" loading="lazy" />
   </div>

  </div>
</div>

</div>

{/* - **TODO** 补充底座固定和夹爪单独安装说明。 */}

## 连接机械臂

:::warning
接线前切断设备电源。给设备上电前，确认机器人已固定，并清空双臂的运动范围。
:::

1. 按下图连接电源。
2. 按下圆形电源开关开机。
3. 使用 USB 数据线连接电脑和主板的 Type-C 接口。

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>电源接线</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-power-connection.jpg" alt="T701 HT 底座电源接口及接线" loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>圆形电源开关和主板 Type-C 接口</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-type-c-mainboard.jpg" alt="T701 HT 主板旁的圆形电源开关与接入 Type-C 接口的 USB 数据线" loading="lazy" />
  </figure>
</div>

## 使用 T701-HT SDK 校准机械臂并完成首次运行

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">

### 安装 SDK

:::info[底层库支持范围]

SDK 的 `motor_whl/` 目录提供以下 `hightorque_robot` 预编译安装包。

| 平台 | 底层库版本 | CPython 版本 |
| --- | --- | --- |
| Linux x86_64 | 1.2.0 | 3.9、3.10、3.11、3.12 |
| Linux aarch64（ARM64） | 1.0.0 | 3.9、3.10、3.11、3.12 |

下文安装示例使用 **Ubuntu 22.04（x86_64）和 Python 3.10**。如使用表中的其他组合，请选择与架构和 Python 版本匹配的 `.whl` 文件，并执行下文的环境检查。

:::

克隆 [T701-HT SDK 仓库](https://github.com/Seeed-Projects/reBot-Arm-T701-SDK)，然后进入 SDK 根目录。

```bash
git clone https://github.com/Seeed-Projects/reBot-Arm-T701-SDK.git
cd reBot-Arm-T701-SDK
```

除非另有说明，以下 SDK 命令都在该目录执行。

电脑上尚未安装 Conda 时，先安装 Miniforge。

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

按安装提示初始化 Conda，重新打开终端并回到 SDK 项目根目录。创建环境后安装 SDK 和依赖。

```bash
conda create -n t701-ht python=3.10 pip
conda activate t701-ht
python -I -m pip install ./motor_whl/hightorque_robot-1.2.0-cp310-cp310-linux_x86_64.whl
python -I -m pip install -r requirements.txt
```

执行以下命令，检查依赖能否导入、URDF 模型能否加载。此步骤可离线验证。

```bash
python -I -c "import hightorque_robot, numpy, osqp, pinocchio, scipy, yaml; pinocchio.buildModelFromUrdf('T701-HT_URDF/urdf/T701-HT.urdf'); print('T701-HT 环境检查通过')"
```

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">

### 检查串口连接

左臂接 CAN1，右臂接 CAN2。将 SDK 中 `T701-HT_robot_param/serial_binding.yaml` 里的 `board_serial` 填为通信板的 USB 序列号。SDK 启动时按 USB 标识查找对应的串口。

执行以下命令检查双臂映射。这一步不打开串口。只检查单臂时，仅传入对应的 YAML 文件。

```bash
ls -l /dev/serial/by-id/
python scripts/t701_ht_can_serial_adapter.py T701-HT_robot_param/T701-HT_left.yaml T701-HT_robot_param/T701-HT_right.yaml
```

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">

### 读取关节和夹爪状态

运行脚本，输入 `1`、`2` 或 `3` 选择左臂、右臂或双臂。确认所选机械臂的 7 个关节和夹爪都有反馈，按 `Ctrl+C` 退出。

```bash
python scripts/t701_ht_read_state.py
```

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">

### 设置零点

<div align="center">
  <img width={520} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-zero-pose.png" alt="T701-HT 零点姿态" loading="lazy" />
</div>

启动脚本并选择机械臂。将关节和夹爪摆到预定零位，在操作菜单选 `3` 将当前姿态保存为零位，此操作会覆盖所选机械臂原有的零位。选 `4` 回到已保存的零位，选 `0` 退出。

```bash
python scripts/t701_ht_set_zero.py
```

  </div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">5</span>
  <div className="rebot-step-content">

### 运行示例

:::warning[运行前]
确认关节零点，取下负载并清空机械臂的活动范围。首次运行时选择单臂。启动和退出重力补偿示例时托住机械臂。
:::

先进入 `scripts` 目录。运行示例后，输入 `1`、`2` 或 `3` 选择左臂、右臂或双臂。

```bash
cd scripts
```

#### 重力补偿

示例通过 MIT 力矩前馈施加 `0.8 × G(q)`，减轻手动移动机械臂时的负担。关节 `Kp`、`Kd` 和夹爪力矩均为零。

```bash
python t701_ht_gravity_compensation.py
```

示例按配置限制关节力矩。按 `Ctrl+C` 退出时停止电机。

单电机五参数控制、状态反馈和回零退出说明见 [MIT 控制 SDK](https://wiki.seeedstudio.com/cn/rebot_t701_ht_control_mit/)。

正逆运动学验证、笛卡尔轨迹和键盘控制示例见 [T701 HT 与 Pinocchio](https://wiki.seeedstudio.com/cn/rebot_t701_ht_pinocchio/)。

通过 ROS 2 话题、服务和轨迹 action 控制机械臂，以及使用 RViz2 和运动学仿真，见 [ROS 2 SDK](./cn_reBot_Arm_T701_HT_ros2.md)。该 SDK 按对应页面单独安装。

  </div>
</div>

</div>

## 常见问题

- **找不到串口**。确认设备已开机，USB 数据线已接入主板的 Type-C 接口，再执行 `ls -l /dev/serial/by-id/`。
- **找不到对应的 USB 接口**。核对 `board_serial` 是否与连接的通信板一致，并检查左臂是否接 CAN1、右臂是否接 CAN2。
- **串口读写权限不足**。在 Ubuntu 上，检查当前用户是否通过 `dialout` 组获得该串口的读写权限。
