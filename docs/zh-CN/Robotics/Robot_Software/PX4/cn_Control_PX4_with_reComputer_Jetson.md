---
description: 使用 reComputer Jetson 控制 PX4
title: 使用 reComputer Jetson 控制 PX4
keywords:
- NVIDIA
- PX4
- ROS
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.webp
slug: /cn/control_px4_with_recomputer_jetson
last_update:
  date: 7/21/2025
  author: TienjuiWong
---

将高性能的伴随计算机 **reComputer Mini J3010 (Jetson Orin Nano 4G)** 与 **PX4 飞控** 搭配，可为自动驾驶汽车、船只和无人机等各类智能无人系统构建核心架构。这一强大组合在物流、科学研究、搜救以及精准农业等领域解锁了创新应用。

该方案支持在机载端执行视觉导航、目标跟踪与实时避障等复杂任务。而这两颗“大脑”之间的通信链路，则是影响系统整体性能与可靠性的关键。

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-optional-accessories.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlY29tcHUiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjoyLCJjX3RvdGFsX3Jlc3VsdHMiOjg4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
</a></div>

:::tip[你将学到]

- 如何将 Jetson 与 Pixhawk 进行物理连接。
- uXRCE-DDS、MAVSDK 与 MAVROS 的优缺点。
- 三种通信方式的逐步配置步骤。
- 如何验证连接并排查常见问题。

:::

## 前置条件

开始前，请确认你具备以下条件：

- **硬件：** 见下方“实验环境”表格中的所有设备。
- **软件：** 全新安装的 Jetson Pack 6.2 与 ROS 2 Humble。
- **工具：** 在 Jetson 上已安装 `git` 与 `pip`。
- **知识：** 具备 Linux 命令行、ROS 2 基础（节点、话题）以及 QGroundControl 中 PX4 参数的基本认知。

## 系统配置

### 实验环境

| 组件                  | 设备/软件              | 版本/型号                         |
| :-------------------- | :--------------------- | :------------------------------- |
| **伴随计算机**        | **设备**               | reComputer Mini J3010 (Jetson Orin Nano 4G)  |
|                        | **操作系统**          | Ubuntu 22.04 (JetPack 6.2)      |
|                        | **ROS**               | ROS 2 Humble                    |
| **飞控**              | **MCU**               | Pixhawk 4 Mini                  |
|                        | **固件**              | PX4 v1.15                       |
| **地面站 PC**         | **操作系统**          | Ubuntu 22.04                    |
|                        | **QGC**               | QGroundControl v5.0 或更高      |

### 硬件连接

我们强烈建议使用 Jetson 的原生 UART，以获得稳健连接且不占用 USB 接口。

- **布线**：使用 4 针 JST-GH 线，将 **Pixhawk 4 Mini 的 `TELEM1`** 端口连接到 **Jetson Orin Nano 的 `UART1`** 引脚。
- **设备文件**：该串口在 Jetson 系统中对应 `/dev/ttyTHS1`。

<details>
<summary><strong>Pixhawk 4 Mini 端口与引脚详情（点击展开）</strong></summary>

<br/>

| UART   | 设备节点     | QGC 参数说明             | 飞控端口标注                 |
| :----- | :----------- | :----------------------- | :--------------------------- |
| UART1  | /dev/ttyS0   | GPS1                     | GPS Module                   |
| USART2 | /dev/ttyS1   | TELEM1                   | TELEM1                       |
| USART3 | /dev/ttyS2   | TELEM2                   | N/A                          |
| UART4  | /dev/ttyS3   | TELEM/SERIAL4            | UART/I2C B                   |
| USART6 | /dev/ttyS4   | N/A                      | RC IN                        |
| UART7  | /dev/ttyS5   | N/A                      | Debug                        |
| UART8  | /dev/ttyS6   | N/A                      | 未连接（无 PX4IO）           |

### TELEM1、TELEM2 端口

| 引脚      | 信号   | 电压  |
| :-------- | :----- | :---- |
| 1(红)     | VCC    | +5V   |
| 2(黑)     | TX(出) | +3.3V |
| 3(黑)     | RX(入) | +3.3V |
| 4(黑)     | CTS(入)| +3.3V |
| 5(黑)     | RTS(出)| +3.3V |
| 6(黑)     | GND    | GND   |

### DSM RC 端口

| 引脚       | 信号               | 电压  |
| :--------- | :----------------- | :---- |
| 1(空)      | VDD_5V_SBUS_RC     | +5V   |
| 2(黄)      | SBUS*              | +3.3V |
| 3(空)      | RSSI**             | +3.3V |
| 4(红)      | VDD_3V3_SPEKTRUM   | +3.3V |
| 5(黑)      | GND                | GND   |

### UART & I2C B 端口 *

| 引脚      | 信号   | 电压  |
| :-------- | :----- | :---- |
| 1(红)     | VCC    | +5V   |
| 2(黑)     | TX(出) | +3.3V |
| 3(黑)     | RX(入) | +3.3V |
| 4(黑)     | SCL2   | +3.3V |
| 5(黑)     | SDA2   | +3.3V |
| 6(黑)     | GND    | GND   |

### SBUS RC 端口

| 引脚       | 信号               | 电压  |
| :--------- | :----------------- | :---- |
| 1(红)      | VDD_5V_SBUS_RC     | +5V   |
| 2(黄)      | SBUS*              | +3.3V |
| 3(空)      | RSSI**             | +3.3V |
| 4(空)      | VDD_3V3_SPEKTRUM   | +3.3V |
| 5(黑)      | GND                | GND   |

---
**脚注：**

- **（UART & I2C B 端口）：** 备用端口，可连接支持串口或 I2C 的传感器，例如第二个 GPS 模块可接入此处。
- **（SBUS 信号）：** 在此连接 SBUS 或 DSM/Spektrum 接收机的信号线。
- **（RSSI 信号）：** 向自动驾驶仪发送 RC 信号强度信息。

</details>

:::caution[关键：设置串口权限]

为避免每次执行串口命令都使用 `sudo`，你必须将当前用户加入 `dialout` 组。这是一次性的关键设置。

```bash
sudo usermod -a -G dialout $USER
```

**必须重启 Jetson，变更才会生效！**

:::

## 选择你的方法：对比

在开始之前，先理解各方案的取舍。最合适的方法完全取决于你的项目目标。

| 特性         | uXRCE-DDS（ROS 2 原生） 🚀              | MAVSDK（高级 API） 🐍                   | MAVROS（ROS 桥） 🌉                          |
| :--------- | :---------------------------------- | :---------------------------------- | :---------------------------------------- |
| **架构**     | PX4 与 ROS 2 共享 DDS 数据空间，实现**原生通信**。 | 独立的 C++ 库（含封装），提供高级 API。            | **桥接/网关**：将 MAVLink 协议转换为 ROS 话题/服务。      |
| **性能**     | **最高**。零拷贝数据传输，时延最低。                | **高**。API 调用直接生成高效的 MAVLink 消息。     | **良好**。由于 MAVLink→ROS 转换层存在少量开销。          |
| **易用性**    | 中等。需要编译 Agent 与 `px4_msgs`。         | **最简单**。函数式 API，适合快速原型。             | 学习曲线较陡，但与 ROS 生态的集成最深入。                   |
| **灵活性**    | **优秀**。可直接访问所有 PX4 内部 uORB 话题。      | **有限**。暴露常见动作（起飞、航点），不提供原始数据。       | **优秀**。几乎可访问全部 MAVLink 消息、参数与服务。          |
| **ROS 集成** | **原生 ROS 2**。官方、面向未来的方法。            | **与 ROS 无关**。可用于任意项目，也易于封装为 ROS 节点。 | **以 ROS 为中心**。ROS 1 事实标准，在 ROS 2 中也被广泛使用。 |
| **适用场景**   | 对低时延与底层数据访问有要求的性能关键型 ROS 2 项目。      | 任务级脚本、快速原型、非 ROS 项目与教学。             | 与 Nav2、MoveIt 等 ROS 包深度集成的复杂机器人系统。        |

## 方法 1：uXRCE-DDS（ROS 2 原生集成）

这是 PX4 面向 ROS 2 的官方方案，将其内部 `uORB` 消息系统直接桥接到 ROS 2 网络，实现近乎零开销的通信。

### 步骤 1：编译 Micro XRCE-DDS Agent

Agent 是运行在 Jetson 上的小程序，作为飞控串口与 ROS 2 网络间的代理。

```bash title="Terminal on Jetson"
# 1. 克隆指定版本的 Agent 仓库
cd ~
git clone -b v2.4.2 https://github.com/eProsima/Micro-XRCE-DDS-Agent.git
cd Micro-XRCE-DDS-Agent

# 2. 重要：修补 Fast-DDS 依赖版本
# 供应商移除了 v2.12.x 标签，这里更新为可用版本。
sed -i 's/v2.12.x/v2.13.x/g' SuperBuild.cmake

# 3. 构建并安装 Agent
mkdir build && cd build
cmake ..
make
sudo make install # 将 MicroXRCEAgent 安装为系统可执行
```

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '16px'
}}>
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/01.png" alt="PX4_dev_01" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/02.png" alt="PX4_dev_02" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/03.png" alt="PX4_dev_03" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/04.png" alt="PX4_dev_04" />
</div>

### 步骤 2：构建 `px4_msgs` ROS 2 包

为让 ROS 2 理解 PX4 的话题，需要构建其消息定义。

```bash title="Terminal on Jetson"
# 1. 创建 ROS 2 工作空间
mkdir -p ~/px4_ros_ws/src
cd ~/px4_ros_ws/src

# 2. 克隆所需仓库
git clone https://github.com/PX4/px4_msgs.git
git clone https://github.com/PX4/px4_ros_com.git # 包含示例

# 3. 切换到与你的固件版本匹配的分支
cd px4_msgs
git checkout release/1.15

# 4. 构建工作空间
cd ~/px4_ros_ws
source /opt/ros/humble/setup.bash
colcon build
```

:::caution[硬件兼容性（uXRCE-DDS）]

`px4_msgs` 的版本**必须**与 PX4 固件版本一致，这是兼容性的关键。

此外，自 PX4 固件 v1.14 起，uXRCE-DDS 原生 ROS 2 支持成为标准，这需要具备 **2MB 闪存** 的飞控（如本指南使用的 Pixhawk 4 Mini）。

较老的经典硬件，例如常见的 **Pixhawk 2.4.8**（以及其他基于 FMUv2 的板卡）只有 1MB 闪存，无法运行该方法所需的标准预编译固件。虽然理论上可以通过定制、裁剪固件实现，但过程复杂。

**如果你使用 Pixhawk 2.4.8 或其他 1MB 闪存的飞控，我们强烈建议跳过该方法，直接查看 [方法 2（MAVSDK）](#4-method-2-mavsdk-high-level-api) 或 [方法 3（MAVROS）](#5-method-3-mavros-the-powerful-ros-bridge)，这两种方法基于 MAVLink 协议，完全支持此类硬件。**

:::

:::info
`px4_msgs` 分支**必须**与 PX4 固件版本一致，以确保消息定义兼容。
:::

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '16px'
}}>
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/05.png" alt="PX4_dev_01" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/06.png" alt="PX4_dev_02" />
</div>

### 步骤 3：配置 PX4 固件

连接 QGroundControl，并设置以下参数：

1. **`UXRCE_DDS_CFG`**：设为 `TELEM1`，在该端口启用 XRCE-DDS 客户端。
2. **`SER_TEL1_BAUD`**：设为 `921600 8N1`。
3. **`MAV_1_CONFIG`**：设为 `Disabled`，避免 MAVLink 与该端口冲突。
4. 保存参数并重启飞控。

### 步骤 4：启动与验证

1. **在 Jetson 上启动 Agent**（终端 1）：

   ```bash title="Terminal 1: Run Agent"
   MicroXRCEAgent serial --dev /dev/ttyTHS1 -b 921600
   ```

2. **验证 ROS 2 话题**（终端 2）：

   ```bash title="Terminal 2: Verify Topics"
   # 每个新终端都需 source 工作空间
   source ~/px4_ros_ws/install/setup.bash

   # 你应能看到以 /fmu/ 开头的话题
   ros2 topic list | grep /fmu/

   # 回显某个话题，查看从飞控持续流入的数据
   ros2 topic echo /fmu/out/vehicle_odometry
   ```

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '16px'
}}>
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/11.png" alt="PX4_dev_01" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/12.png" alt="PX4_dev_02" />
</div>

---

## 方法 2：MAVSDK（高级 API）

MAVSDK 提供简洁、现代的编程接口来控制无人机，屏蔽 MAVLink 协议的复杂性，非常适合编写高层任务脚本。

### 步骤 1：配置 PX4 固件

在 QGroundControl 中，将端口配置从 DDS 调回 MAVLink 模式。

1. **`UXRCE_DDS_CFG`**：改回 `Disabled`。
2. **`MAV_1_CONFIG`**：设为 `TELEM 1`，将此端口分配给 MAVLink。
3. **`MAV_1_MODE`**：设为 `Onboard`，指定该链路用于伴随计算机。
4. **`SER_TEL1_BAUD`**：确保仍为 `921600 8N1`。
5. 保存参数并重启飞控。

### 步骤 2：安装 MAVSDK-Python

```bash title="Terminal on Jetson"
pip3 install mavsdk
```

### 步骤 3：编写并运行控制脚本

以下 Python 脚本将连接、起飞至 10 米、等待并降落。

```python title="takeoff_and_land.py"
import asyncio
from mavsdk import System

async def run():
    # Create a drone object and connect to the flight controller
    drone = System()
    await drone.connect(system_address="serial:///dev/ttyTHS1:921600")

    print("Waiting for drone to connect...")
    # This is an asynchronous generator that yields connection state updates
    async for state in drone.core.connection_state():
        if state.is_connected:
            print("--> Drone discovered!")
            break

if __name__ == "__main__":
    # Run the asyncio event loop
    asyncio.run(run())
```

在终端中执行：`python3 takeoff_and_land.py`。

---

## 方法 3：MAVROS（功能强大的 ROS 桥）

MAVROS 是久经验证的 MAVLink→ROS 网关，功能全面、稳定性高，适用于复杂的 ROS 系统。

### 步骤 1：配置 PX4 固件

MAVROS 的 PX4 配置与 MAVSDK **完全相同**。确保在 `TELEM1` 上将端口配置为 MAVLink 的 `Onboard` 模式。

### 步骤 2：安装 MAVROS 与依赖

```bash title="Terminal on Jetson"
sudo apt update
sudo apt install ros-humble-mavros ros-humble-mavros-msgs
```

:::info[避免常见崩溃！]
MAVROS 需要地理数据集来进行坐标转换。缺少该数据集是启动时崩溃的常见原因。以下脚本可下载并安装它：

```bash title="Terminal on Jetson"
sudo bash /opt/ros/humble/lib/mavros/install_geographiclib_datasets.sh 
```

:::

### 步骤 3：启动与验证

1. **启动 MAVROS 节点**：

   ```bash title="Terminal 1: Launch MAVROS"
   source /opt/ros/humble/setup.bash

   # 启动 mavros，并通过参数指定 FCU 串口
   ros2 launch mavros px4.launch fcu_url:="serial:///dev/ttyTHS1:921600"
   ```

2. **验证连接**：

   在新终端中回显 MAVROS 状态话题。

   ```bash title="Terminal 2: Verify Connection"
   ros2 topic echo /mavros/state
   ```

   观察输出。当 `connected` 字段变为 `true` 时，说明 MAVROS 已与 PX4 成功通信。

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '16px'
}}>
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/13.png" alt="PX4_dev_01" />
  <img src="https://files.seeedstudio.com/wiki/robotics/PX4_dev/14.png" alt="PX4_dev_02" />
</div>

---

## 常见问题排查

遇到问题时，先检查以下几点：

- **串口“Permission Denied”**：你忘记将用户加入 `dialout` 组并重启。参见“硬件连接”部分。
- **`/dev/ttyTHS1` 报 “No such file or directory”**：检查物理连接。飞控是否供电？运行 `ls /dev/ttyTHS*` 确认设备名。
- **MAVROS 启动即崩溃**：很可能遗漏了 `install_geographiclib_dataset.sh` 步骤。按方法 3 的命令执行。
- **`colcon build` 失败**：确保已先 `source /opt/ros/humble/setup.bash`。若依赖更复杂，可执行 `rosdep install --from-paths src --ignore-src -r -y`。

## 最后

至此，你已经掌握了在 Jetson Orin 与 PX4 飞控之间建立通信的三种强大方法。最佳选择取决于项目架构、性能需求与开发效率。理解各自取舍后，你就能为任何自主无人机应用打下坚实基础。

祝飞行顺利！🚁

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，确保获得尽可能顺畅的体验。我们提供多种交流方式以满足不同偏好与需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
