---
description: Lerobot 中 SO-ARM 的舵机调试工具。
title: Lerobot 中 SO-ARM 的舵机调试工具
keywords:
  - Lerobot
  - SO-ARM
  - Robotics
  - Servo
  - Calibration
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_steering_gear_debugging_tool
last_update:
  date: 6/29/2026
  author: ZhangJiaQuan
url: https://wiki.seeedstudio.com/cn/lerobot_steering_gear_debugging_tool/
createdAt: '2026-06-29'
updatedAt: '2026-06-29'
---

# Lerobot 中 SO-ARM 的舵机调试工具

## 介绍

舵机调试工具（Seeed_RoboController）是用于 Lerobot/SO-ARM 机械臂的图形化调试工具。通过该工具，你可以快速检测舵机状态、重新校准舵机 ID、写入中值、控制单个舵机以及管理机械臂标定文件，从而更轻松地完成主从机械臂的组装、调试和维护。

## 1. 安装

适用于 Windows、Ubuntu 和 Mac 系统。

1\. 首先克隆仓库。

```Plain
git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
```

2\. 建议在 Lerobot 虚拟环境中安装该工具。如果你更倾向于独立安装，请新建一个虚拟环境，以避免污染系统 Python。

```Plain
pip install -r requirements.txt
```

3\. 检查环境。如果返回 `[OK] Environment check passed`，则说明项目可以运行。

```Plain
python setup.py
```

4\. 启动工具。

运行以下命令以开始交互式端口选择。

```Plain
python -m src.gui.factory_calibration_tool
```

（可选）如果端口被占用，可以手动指定端口。

```Plain
python -m src.gui.factory_calibration_tool --port1 /dev/ttyUSB0 --port2 /dev/ttyUSB1
```

## 2. 快速上手（适用于主机械臂和从机械臂）

### 1. 检查舵机是否正常

如果 1-6 号舵机都检测成功，说明舵机识别正常，基本功能正常。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/debug_tool.webp" />
</div>

如果有部分舵机显示未检测到，首先检查接线是否正确，关闭页面重新打开。如果仍然未检测到，可能是舵机 ID 重复（可能是误将机械臂标定命令当作舵机标定命令执行）。此时需要重新校准这些舵机的 ID。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/02.png" />
</div>

### 2. 拆除舵机线束

首先拆除 6 号舵机与 5 号舵机之间的连接线束。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/03.webp" />
</div>

然后拆除 5 号舵机与 4 号舵机之间的连接线束。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/04.webp" />
</div>

拆除 4 号舵机与 3 号舵机之间的连接线束。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/05.webp" />
</div>

拆除 3 号舵机与 2 号舵机之间的连接线束。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/06.webp" />
</div>

拆除 2 号舵机与 1 号舵机之间的连接线束。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/07.webp" />
</div>

拆除 1 号舵机与控制板之间的连接线束。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/08.webp" />
</div>

### 3. 重新校准舵机 ID

确保机械臂上只连接了一个舵机。

（在给舵机烧录 ID 时，由于舵机共用一条串口总线，如果存在重复 ID——例如将 ID 4 改为 6——那么总线上所有 ID 为 4 的舵机都会被改为 6。因此必须将所有舵机拆下，逐个重新烧录。）

例如，你可以将 6 号舵机按下图所示连接到驱动板。其他舵机的连接方式类似，这样可以避免拆解机械臂。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/09.webp" />
</div>

如图所示，当前只识别到 4 号舵机，但实际连接的是 6 号舵机。这说明舵机 ID 错误，需要将其改回 6。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/10.png" />
</div>

此时，你可以点击 4 号舵机，将其 ID 改为 6。其他舵机依次重复相同操作。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/11.png" />
</div>

舵机校准完成后，将线束依次插回即可完成。

### 4. 向舵机写入中值

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/12.jpg" />
</div>

1\. 点击 **串口中值测试**，检查机械臂的中位姿态是否与上图一致。如果大致相同，则说明机械臂的中值正常。

2\. 如果不一致，将机械臂移动到中位姿态，然后点击 **串口中值标定**。机械臂会将当前姿态作为中值写入舵机。

3\. 点击 **串口关闭电机**，机械臂会失去支撑，你需要用手托住。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/13.png" />
</div>

### 5. 单个舵机控制

默认情况下，页面上的所有舵机都处于中位姿态，如图所示。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/14.png" />
</div>

首先开启力矩。你可以一键开启全部力矩，也可以只为单个舵机开启力矩，然后拖动滑块将舵机移动到对应位置。但一定要缓慢移动。由于机械臂的打印件会在物理上阻挡某些位置，机械臂实际上无法到达滑块的边缘位置，存在最大和最小运动限制，因此不要将滑块拖到 0 或最大值。关闭力矩后，机械臂会变得松软无力。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/15.png" />
</div>

如上图所示，开启力矩后，对应舵机的运动会发生变化。

Pos：位置

V：电压

T：温度

Spd：速度

Load：力矩

Cur：电流

Mov：运动状态

Model：型号、权限

Status：状态会显示 Normal、Overcurrent 或 Overload

### 6. 高级工具

你可以读取对应寄存器地址的数据，并写入相应数据。

可以修改波特率。

可以恢复出厂设置。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/16.png" />
</div>

### 7. 机械臂标定文件管理

你可以选择对应的从机械臂标定文件或主机械臂标定文件进行运行、修改或删除。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/17.png" />
</div>

### 8. 新建机械臂标定文件

点击 **GUI 标定向导**，选择对应的机械臂和端口号。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/18.png" />
</div>

你可以为每个舵机进行最小值、最大值和中值标定。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/19.png" />
</div>

首先记录每个舵机的中值。将每个舵机摆放到图中所示位置，然后依次点击 1-6 号舵机的 **记录中值**。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/20.png" />
</div>

然后为每个舵机点击 **开始记录范围**，将舵机旋转到最大和最小范围，再点击 **停止记录范围**。对每个舵机重复上述操作，最后为标定文件命名并保存。
