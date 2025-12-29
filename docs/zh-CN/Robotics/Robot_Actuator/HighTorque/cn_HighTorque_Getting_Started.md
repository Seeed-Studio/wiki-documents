---
description: 高扭矩电机入门指南
title: 高扭矩电机入门指南
keywords:
- actuator
- motor
- arm
- robotics
image:   https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/damiao.webp
slug: /cn/hightorque_getting_started
last_update:
  date: 12/04/2025
  author: Tienjuiwong
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note 版本兼容性

本手册适用于 **高扭矩调试助手 v0.11.1** 及以上版本。
高扭矩调试助手适用于电机固件 **v3.1.0** 及以上版本。

:::

## 1. 电机使用指南

### 🔌 电机硬件接线

:::warning 重要安全提示
在进行任何连接之前，请务必确保电源已断开。
:::

| **规格** | **数值** |
|---|---|
| **额定电压** | 24VDC |
| **通信方式** | FDCAN（通过 USB-C 模块） |
| **电机型号** | 5047、4438 等 |

#### 连接步骤

1. **电源连接** 🔌
   将 24V 电源连接到 FDCAN 模块

2. **电机接口** 🔌
   使用 **GH1.25-3P 线缆**将电机 XT30（2+2）接口连接到 FDCAN 模块

3. **PC 连接** 💻
   通过 **USB-C** 将 FDCAN 模块连接到计算机

![电机连接概览](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_1_1_1.png)

![详细接线指南](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_1_1_2.png)

## 2. 高扭矩电机调试助手使用说明

### 🎛️ 常用功能

| **功能** | **描述** |
|---|---|
| **🔄 重新连接 USBCAN 设备** | 扫描并连接 USBCAN 设备，检测已连接的电机 |
| **🆔 电机 ID** | 当前连接电机的下拉选择器 |
| **⚙️ 电机校准** | 重新校准电机（⚠️ **电机必须空载**） |
| **🎯 重置当前电机零点** | 将当前位置设置为零点参考 |
| **💾 更新电机固件** | 下载并刷写新固件到电机 |
| **📊 输出信息** | 事件和错误的实时日志控制台 |

:::danger ⚠️ 严重警告
**电机校准**必须在电机**无负载**状态下进行。否则将导致编码器偏移计算不准确。
:::

![常用功能界面](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_1.png)

:::info 操作指南
使用 **Read Parameters** 获取当前设置，使用 **Write Parameters** 将更改保存到电机。
:::

| **参数组** | **描述** |
|---|---|
| **📋 基本信息** | 显示型号、极对数、减速比、固件版本 |
| **🛡️ 电机保护** | 过压（V）和过温（°C）限制 |
| **⚖️ PID 调节** | Kp、Ki、Kd 系数 + i_limit（积分限制） |
| **🆔 修改电机 ID** | 更改电机 ID（需要重新识别） |
| **📍 电机位置范围** | 位置最大/最小限制（设置为 `nan` 表示无限制） |
| **🚀 旋转限制** | 速度（rev/s）、加速度（rev/s²）、电流（A）限制 |

:::warning 注意
在位置范围和旋转限制部分，将值设置为 `nan` 表示无限制操作。
:::

![参数设置 - 基础](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_2_1.png)

![参数设置 - 高级](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_2_2.png)

### 🔧 电机调试

使用不同的运行模式进行调试（详细信息请参见[电机运行模式](#电机运行模式)）。

| **功能** | **描述** |
|---|---|
| **📈 电机运行模式** | 点击 **"Add Waveform"** 实时可视化位置、速度、扭矩、温度 |
| **📊 电机状态** | FDCAN 帧信息（float、int16、int32、CAN 帧） |
| **🛠️ 生成帧** | 为开发创建自定义 CAN 帧 |
| **🛑 停止和制动** | 控制电机停止行为 |

#### 帧生成类型

<Tabs>
  <TabItem value="numeric" label="数值类型">
    **float、int16、int32**

    有关实现示例和数据类型处理，请参考本节中的 FDCAN 协议示例
  </TabItem>
  <TabItem value="can" label="CAN 帧">
    **CAN 帧**

    有关 CAN 帧生成和处理示例，请参考协议实现指南
  </TabItem>
</Tabs>

#### 停止和制动控制

| **控制** | **行为** |
|---|---|
| **🛑 停止** | 断开所有三相 - 电机通过惯性滑行停止 |
| **⚡ 制动** | 将所有三相短路到地 - 电机**立即**停止 |

![调试 - 波形视图](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_3_1.png)

![调试 - 状态监控](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_3_2.png)

### 🎮 电机运行模式

<Tabs>
  <TabItem value="position" label="1️⃣ 位置模式">
    **位置模式** 🎯

    为电机轴提供精确的角度控制。输入目标位置（以转数为单位）并点击发送。电机将使用位置环 PID 控制移动到精确指定的位置。

    **适用于：**机器人关节、CNC 机床、执行器系统

    ![位置模式界面](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_1.png)
  </TabItem>

  <TabItem value="velocity" label="2️⃣ 速度模式">
    **速度模式** 🔄

    无论负载变化如何（在容量范围内），都保持恒定的旋转速度。输入目标速度（rev/s）并点击发送。电机将使用配置的加速度限制加速到指定速度。

    **适用于：**传送带、风扇、旋转台

    ![速度模式界面](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_2.png)
  </TabItem>

  <TabItem value="torque" label="3️⃣ 扭矩模式">
    **扭矩模式** 💪

    直接控制输出扭矩。电机将尝试保持指定的扭矩值，无论速度如何。如果外部阻力超过设定扭矩，电机将停转以保护系统。

    **单位：**牛顿米（Nm）

    **适用于：**张紧系统、压装操作、负载保持

    ![扭矩模式界面](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_3.png)
  </TabItem>

  <TabItem value="voltage" label="4️⃣ 电压模式">
    **电压模式** ⚡

    提供对施加到电机的 Q 轴电压的直接控制。这种高级模式允许自定义控制算法，通常用于研究应用或专用控制系统。

    **单位：**伏特（V）

    ![电压模式界面](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_4.png)
  </TabItem>

  <TabItem value="current" label="5️⃣ 电流模式">
    **电流模式** 🔋

    控制流过电机绕组的 Q 轴电流。这种模式比扭矩模式提供更直接的扭矩生成控制，因为电流是磁场强度的基本驱动因素。

    **单位：**安培（A）

    **适用于：**精确扭矩控制应用

    ![电流模式界面](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_5.png)
  </TabItem>

  <TabItem value="position-speed-torque" label="6️⃣ 位置+速度+扭矩">
    **位置、速度、最大扭矩** 🎛️

    结合位置控制与速度和扭矩限制的混合模式，实现安全、受控的运动。电机将以目标速度移动到指定位置，同时确保输出扭矩永远不超过最大限制。

    **适用于：**机器人夹爪、门执行器、力限制应用

    如果不需要扭矩限制，请将最大扭矩设置为 `nan`。

    ![位置+速度+扭矩模式界面](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_6.png)
  </TabItem>

  <TabItem value="trapezoidal" label="7️⃣ 梯形控制">
    **梯形控制** 📈

    生成具有受控加速和减速阶段的平滑 S 曲线轨迹。电机将：1）均匀加速到最大速度，2）保持恒定速度，然后 3）均匀减速以精确停在目标位置。

    **适用于：**拾取和放置操作、CNC 定位、精密自动化

    ![梯形控制界面](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_7.png)
  </TabItem>

  <TabItem value="motion-control" label="8️⃣ 运动控制">
    **运动控制模式** 🤖

    使用以下公式的高级基于 PID 的控制模式：

    **电机输出扭矩 = Kp × 位置误差 + Kd × 速度误差 + 前馈扭矩**

    这种模式结合位置误差（P 项）和速度误差（D 项）进行复杂的运动控制。

    **适用于：**高精度应用、伺服压机、力控装配

    ![运动控制模式界面](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque_tool_2_4_8.png)
  </TabItem>
</Tabs>

---

## 3. 🔌 FDCAN 协议分析

:::info 协议参考
本节涵盖基本电机控制操作的基本 FDCAN 协议信息。有关全面的寄存器映射和高级协议详细信息，请参考电机控制文档。
:::

### 示例：int32 数据帧速度模式

以 **int32 数据帧速度模式**为例：

```hex
01000a0a2000000080204e0000
```

---

### **1️⃣ 子帧 1** - 电机模式配置

此子帧配置电机操作模式。

| **字段** | **值** | **描述** |
|---|---|---|
| **0x01** | 头部 | 第一个子帧的开始 |
| **位 7-4** | `0000` | 写操作到电机寄存器 |
| **位 3-0** | `0001` | 数据类型 **int8_t**，1 个数据单元 |
| **0x00** | 寄存器地址 | **电机模式设置**寄存器 |
| **0x0a** | 数据 | 将电机设置为**速度模式** |

---

### **2️⃣ 子帧 2** - 运动参数

此子帧配置运动参数（位置和速度目标）。

| **字段** | **值** | **描述** |
|---|---|---|
| **0x02** | 帧头 | 第二个子帧的开始 |
| **位 7-4** | `0000` | 写操作 |
| **位 3-0** | `0010` | 数据类型 **int32_t**，2 个数据单元 |
| **0x20** | 寄存器起始 | 位置目标寄存器 (0x20) |
| **0x00 0x00 0x00 0x80** | 位置数据 | **0x80000000** = 位置 **无限制/NaN** |
| **0x20 0x4e 0x00 0x00** | 速度数据 | **0x00004e20** = **20000** (十进制) |

:::success 单位转换
**速度计算：**
- **十进制值：** 20000
- **LSB 权重：** 每单位 0.00001 rev/s
- **目标速度：** 20000 × 0.00001 = **0.2 rev/s**
:::

---

## 📚 附录

### ⚠️ 电机错误代码参考

:::info 状态代码 0 = 正常运行
非零值表示错误。请参考下表了解具体原因和解决方案。
:::

| **代码** | **错误名称** | **描述** | **解决方案** |
|---|---|---|---|
| **32** | 🔧 校准故障 | 校准期间编码器无法检测到磁铁 | 确保磁铁正确安装；在无负载情况下重新校准 |
| **33** | ⚡ 电机驱动器故障 | 欠压或电流不足 | 检查电源电压和电流容量 |
| **34** | 🔺 过压 | 总线电压超过限制 | 验证电源电压额定值 |
| **35** | 📡 编码器故障 | 编码器读取错误 | 检查编码器连接和接线 |
| **36** | 🚫 电机未校准 | 电机尚未校准 | 在无负载情况下运行校准程序 |
| **37** | 📊 PWM 周期限制超出 | 内部固件错误 | 联系技术支持 |
| **38** | 🌡️ 过温 | 温度超过最大限制 | 让电机冷却；检查散热 |
| **39** | 🎯 超出范围 | 位置控制超出定义限制 | 调整位置范围参数 |
| **40** | 🔋 低电压 | 供电电压过低 | 检查电源和连接 |
| **41** | ⚙️ 配置已更改 | 运行期间关键配置发生更改 | 更改参数前停止电机 |
| **42** | 🔄 角度无效 | 无有效换向编码器 | 检查编码器功能和连接 |
| **43** | 📍 位置无效 | 无有效输出编码器 | 验证输出编码器连接 |

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
