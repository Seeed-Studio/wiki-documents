---
description: "如何用 Seeed_RoboController 工具调试 SO-ARM 舵机：检测舵机、修正 ID、写入中位值，并在 Windows、Ubuntu 和 Mac 上读取状态。"
title: SO-Arm 舵机调试工具
keywords:
  - Lerobot
  - SO-ARM
  - Robotics
  - Servo
  - Calibration
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/debug_tool.webp
slug: /lerobot_steering_gear_debugging_tool
last_update:
  date: 6/29/2026
  author: ZhuYuan
url: https://wiki.seeedstudio.com/cn/lerobot_steering_gear_debugging_tool/
createdAt: '2026-06-30'
updatedAt: '2026-09-16'
---
import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# LeRobot 中 SO-ARM 的舵机调试工具

<div align="center">
  <img
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp"
    width={800}
    height={600}
    style={{height: 'auto'}}
    alt="SO-ARM100 和 SO-ARM101 机械臂套件"
  />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://detail.tmall.com/item.htm?id=877820346195&mi_id=0000OU1g76NMAq5LGIUiPORgyMk3E8XbnysI4JwJCeVC1ow&skuId=6312174298846&spm=a1z10.1-b-s.w4004-26191638149.2.4789262ePdEW84" target="_blank" rel="noopener noreferrer">
    <span>立即购买 SO-ARM101 套件</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

<p align="center"><strong>支持平台</strong> · Windows / Ubuntu / macOS</p>

## 简介

舵机调试工具（Seeed_RoboController）是一款面向 LeRobot / SO-ARM 机械臂的图形化调试工具。通过该工具，你可以快速检测舵机状态、重新校准舵机 ID、写入中位值、单点控制舵机以及管理机械臂校准文件，从而更方便地完成主臂与从臂的组装、调试与维护。

## 一、安装

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

<h4>下载仓库</h4>

<p className="rebot-step-label">第 1 步</p>

```bash
git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

<h4>安装依赖</h4>

<p className="rebot-step-label">第 2 步</p>

建议在现有的 LeRobot 虚拟环境中安装依赖。若要独立安装，请新建虚拟环境，避免影响系统 Python。

```bash
pip install -r requirements.txt
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">

<h4>检查环境</h4>

<p className="rebot-step-label">第 3 步</p>

```bash
python setup.py
```

返回 [OK] 表示环境检查通过，可以启动工具。

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">

<h4>启动工具</h4>

<p className="rebot-step-label">第 4 步</p>

<Tabs defaultValue="interactive">
<TabItem value="interactive" label="交互选择端口">

启动后，在界面中选择串口。

```bash
python -m src.gui.factory_calibration_tool
```

</TabItem>
<TabItem value="manual" label="手动指定端口">

端口被占用时，可以手动指定端口。以下是 Linux 设备路径示例。

```bash
python -m src.gui.factory_calibration_tool --port1 /dev/ttyUSB0 --port2 /dev/ttyUSB1
```

</TabItem>
</Tabs>

</div>
</section>

</div>

## 二、开始使用（适用主臂和从臂）

先检测舵机。只有在排查连线和串口后仍怀疑舵机 ID 重复时，才继续后两步。

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

### 检测舵机是否正常 {#1检测舵机是否正常}

<p className="rebot-step-label">第 1 步</p>

在串口选择界面选中对应端口。如果 1–6 号舵机均被识别，说明检测通过。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/debug_tool.webp" />
</div>

如果某个舵机未被识别，先检查连线，再关闭并重新打开调试工具。若仍无法识别，请排查舵机 ID 是否重复。例如，误用舵机校准指令可能导致 ID 异常。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/02.png" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

### 拆除舵机线束 {#2拆除舵机线束}

<p className="rebot-step-label">第 2 步</p>

首先拆除6号舵机和5号舵机的连接线束

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/03.webp" />
</div>

而后拆除5号舵机和4号舵机的连接线束

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/04.webp" />
</div>

拆除4号舵机和3号舵机的连接线束

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/05.webp" />
</div>

拆除3号舵机和2号舵机的连接线束

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/06.webp" />
</div>

拆除2号舵机和1号舵机的连接线束

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/07.webp" />
</div>

拆除1号舵机和控制板的连接线束

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/08.webp" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">

### 重新校准舵机ID {#3重新校准舵机id}

<p className="rebot-step-label">第 3 步</p>

:::caution 逐个写入舵机 ID
写入 ID 时，确保串口总线上只连接一个舵机。例如，将 ID 4 改为 6 时，总线上所有 ID 为 4 的舵机都会被改为 6。
:::

如图，将 6 号舵机单独接到驱动板。其他舵机可按相同方式连接，无需拆卸机械臂。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/09.webp" />
</div>

如果实际连接的是 6 号舵机，界面却只识别到 ID 4，说明这个舵机的 ID 需要改回 6。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/10.png" />
</div>

在界面中选中 ID 4，将其改为 6。其他舵机也按相同方式逐个检查和修正。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/11.png" />
</div>

修正后，依次接回舵机线束。

</div>
</section>

</div>

### 中位值写入舵机 {#4中位值写入舵机}

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/12.jpg" />
</div>

1. 点击 **串口中位测试**，将机械臂姿态与上图对照。若姿态基本一致，中位值正常。
2. 若姿态不一致，先将机械臂移到中位，再点击 **串口中位校准**，将当前位置写为舵机中位值。
3. 扶稳机械臂后，点击 **串口失能电机**。失能后，舵机将失去保持力矩。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/13.png" />
</div>

### 单个舵机控制 {#5单个舵机控制}

工具界面默认显示各舵机的中位位置。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/14.png" />
</div>

#### 调整舵机位置

1. 开启目标舵机的力矩，或使用一键功能开启所有舵机的力矩。
2. 缓慢移动目标舵机的滑块，观察对应关节的位置变化。

:::caution 注意机械行程
机械臂结构会限制关节的实际行程。请缓慢移动滑块，避免拉到 0 或最大值。关闭力矩前请扶稳机械臂。
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/21.png" />
</div>

也可以对单个舵机执行中位校准，或清除其保存的中位、最小位置和最大位置。

#### 舵机状态字段

| 界面字段 | 含义 |
| --- | --- |
| `Pos` | 位置 |
| `V` | 电压 |
| `T` | 温度 |
| `Spd` | 速度 |
| `Load` | 力矩 |
| `Cur` | 电流 |
| `Mov` | 运动状态 |
| `Model` | 型号和权限 |
| `Status` | 正常、过流或过载 |

### 高级工具 {#6高级工具}

| 功能 | 用途 |
| --- | --- |
| 寄存器读写 | 读取或写入指定寄存器地址的数据。 |
| 修改波特率 | 调整舵机的串口通信速率。 |
| 恢复出厂设置 | 将舵机恢复到出厂设置。 |

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/16.png" />
</div>
