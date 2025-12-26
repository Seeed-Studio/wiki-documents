---
description: 本维基提供了 Stackforce 系列电机的教程。
title: Stackforce系列电机
keywords:
- actuator
- motor
- robotics
image: https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/6010.webp
slug: /cn/stackforce_series
last_update:
  date: 11/26/2025
  author: Li Shanghang
---

# Stackforce系列电机入门指南

本文将介绍如何开始使用 Stackforce系列电机，以及如何在 reComputer Mini Jetson Orin 上使用 Python 和 C++ 控制它们。

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/6010.webp" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱</font></span></strong>
    </a>
</div>

## 规格参数

以下是所有电机型号的完整参数表：

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>6010</th>
      <th>8108</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>额定电压</td><td>24V</td><td>24V</td></tr>
    <tr><td>额定电流</td><td>10.5A</td><td>7.5A</td></tr>
    <tr><td>额定功率</td><td>240W</td><td>180W</td></tr>
    <tr><td>额定扭矩</td><td>5 Nm</td><td>7.5 Nm</td></tr>
    <tr><td>峰值扭矩</td><td>11 Nm</td><td>22 Nm</td></tr>
    <tr><td>额定转速</td><td>120 RPM</td><td>110 RPM</td></tr>
    <tr><td>最大转速</td><td>270 RPM</td><td>320 RPM</td></tr>
    <tr><td>减速比</td><td>8:1</td><td>8:1</td></tr>
    <tr><td>通信协议</td><td>MIT协议</td><td>MIT协议</td></tr>
    <tr><td>控制模式</td><td>位置，速度，力矩控制</td><td>位置，速度，力矩控制</td></tr>
    <tr><td>外径</td><td>80 mm</td><td>97 mm</td></tr>
    <tr><td>厚度</td><td>47 mm</td><td>46 mm</td></tr>
    <tr><td>重量</td><td>392 g ±10%</td><td>395 g ±5%</td></tr>
    <tr><td>相电阻</td><td>0.48 Ω ±10%</td><td>0.439 Ω ±10%</td></tr>
    <tr><td>相电感</td><td>368 μH ±10%</td><td>403 μH ±10%</td></tr>
  </tbody>
</table>

## 主要特点

1. **高扭矩输出**
2. **MIT模式控制模式**
3. **磁性编码器反馈**
4. **轻巧和小巧设计**
5. **支持高速CAN总线通信**
6. **多样化应用**

## 入门指南
### 使用前的环境准备
**PC上的Windows系统**
- [对应产品手册](https://files.seeedstudio.com/products/stackforce/%E6%96%B0%E7%89%886010%E5%85%B3%E8%8A%82%E7%94%B5%E6%9C%BA%E7%94%A8%E6%88%B7%E6%96%87%E6%A1%A3V1.1.pdf)。
- 下载 [VOFA](https://www.vofa.plus/)。

电机的 CANID 与 CANMode 都是通过串口进行修改，电机出厂默认 CANID 为 0x01，CANMode 为 CAN2.0 1Mbps。

### 串口接线 

依次将 V，G，T，R 连接到串口通信模块的 VCC（3.3V），GND，RX，TX（RX 与 TX 要交差连接）。如下图所示：

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/串口通信端口
    .png"/>
</div>

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/串口工具.png"/>
</div>

### 修改CANID

设置串口波特率为1Mbps。

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/修改CANID.png"/>
</div>

发送的CANID是0x**,设置的ID就是0x**，最大不能超过0x7F。设置CANID成功后会打印如下日志：

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/修改CANID反馈.png"/>
</div>

### 修改CAN模式

串口发送CANMODE:0或CANMODE:1

CANMODE:0为CAN2.0模式（1Mbps），CANMODE:1为CANFD模式（5Mbps）。

修改CAM模式成功如下图所示：

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/CAN模式反馈1.png"/>
</div>

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/CAN模式反馈2.png"/>
</div>

## 使用 [​reComputer Mini Jetson Orin](/cn/recomputer_jetson_mini_getting_started) 控制电机

目前市场上电机最常见的 CAN 通信接口使用 **XT30 (2+2)** 和 **JST 接头**。我们的 **reComputer Mini Jetson Orin** 和**reComputer Robotics**设备配备了 **双 XT30 (2+2) 接口** 和 **基于 JST 的 CAN 接口**，提供无缝兼容性。

**reComputer Mini:**
<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

**reComputer Robotics**
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig5.jpg"/>  
</div>


有关 CAN 使用的更多详细信息，请参考此 [wiki](https://wiki.seeedstudio.com/cn/recomputer_jetson_mini_hardware_interfaces_usage/#can)。

### 启用 CAN 接口

**步骤1：** 在使用 CAN0 和 CAN1 之前，请移除底部盖板并将两个 120Ω 终端电阻设置为 ON 位置。

<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/7.png" />
</div>

将电机上集成的120Ω的CAN通信终端电阻的波动开关关闭。

<div align="center">
    <img width={400} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/电阻开关.png" />
</div>

:::tip
如果recomputer Mini没有设置120Ω 终端电阻为 ON，可以选择将电机的CAN通信终端电阻的波动开关打开。
:::

**步骤2：** 通过 XT30 (2+2) 接口将电机直接连接到 reComputer Mini 的 CAN0。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/Mini连接.jpg" />
</div>

:::tip
因为[reComputer Mini的can接口设计](https://wiki.seeedstudio.com/cn/recomputer_jetson_mini_hardware_interfaces_usage/#can0can1-%E9%80%9A%E4%BF%A1)与电机的can接口相反，所以需要手动焊接，反接数据线。

<div align="center">
    <img width={400} 
     src="https://files.seeedstudio.com/wiki/recomputer_mini/can0-datasheet.png" />
     <img width={400} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/电机can接口.png" />
</div>

<div align="center">
    <img width={600} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/TX30.jpg" />
</div>

考虑到电机所需要的大电压和大电流，推荐购买24v 300w的电源适配器来给reComputer Mini供电，以便驱动单个电机，如果要接入更多电机，可以根据需要购买更大功率的电源适配器。

<div align="center">
    <img width={600} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/stackforce/适配器.jpg" />
</div>

:::

:::danger
此电源仅用于单电机学习和测试。对于多个电机，请设计单独的电源板，并将 Jetson 的电源与电机电源隔离，以避免高电流直接通过 Jetson。
:::

#### 启用 Jetson CAN 通信
打开终端并输入以下命令，将 GPIO 引脚拉高以激活 CAN0：
```bash
gpioset --mode=wait 0 43=0
```

如果使用 JST 接口的 CAN1，请将引脚 106 拉高。
```bash
gpioset --mode=wait 0 106=0
```

保持此终端打开，启动一个新终端并配置 CAN0。
```bash
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

### 构建 Python 和 C++ 环境

**步骤1：** 克隆 SDK。
```bash
git clone https://github.com/Seeed-Projects/Stackforce-Motor-SDK.git
```

**步骤2：** 此驱动 SDK 需要安装以下依赖项。对于 Debian Linux，可以通过以下命令安装：

```bash
sudo apt-get install -y build-essential cmake
sudo apt install linux-modules-extra-5.15.0-1025-nvidia-tegra # 对于 Jetson Jetpack 6.0
```

如果需要使用 Python 绑定，还需额外安装 Python 3、pip 和 pybind11：
```bash
sudo apt-get install -y python3 python3-pip python3-pybind11 python3-setuptools
```

安装依赖项后，需按照以下步骤将驱动 SDK 安装为 C++ 库或 Python 包。两者都将使用 CMake 编译 C++ 代码。

### 使用 C++ 控制

```bash
cd build
cmake ..
make
```

编译后的可执行文件将位于 `build/sfmotor_control`。运行程序：

```bash
./sfmotor_control
```

程序默认会控制 ID 为 0x01 的电机，在运行过程中可以通过键盘输入目标角度值，单位rad。同时接收电机角度，角速度的反馈数据。

### 使用 python 控制

Python 脚本位于 `script/` 目录中，可以直接运行无需编译。

```bash
python main.py 
```

程序默认会控制 ID 为 0x01 的电机，在运行过程中可以通过键盘输入目标角度值，单位rad。同时接收电机角度，角速度的反馈数据。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

