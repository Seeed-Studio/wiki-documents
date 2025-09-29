---
description: 本维基提供了 Myactuator 系列电机的教程。
title: 脉塔X系列电机
keywords:
- 执行器
- 电机
- 机械臂
- 机器人
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/myactuator_series
last_update:
  date: 2025/05/29
  author: ZhuYaoHui
---

# MyActuator 脉塔 X 系列电机入门指南
本文将介绍如何开始使用 MyActuator 脉塔关节电机，以及如何在 reComputer Mini Jetson Orin 上使用 Python 和 ROS 控制它们。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/all.png" />
</div>


## 规格参数

以下是所有电机型号的完整参数表：

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>X2-7</th>
      <th>X4-10</th>
      <th>X4-36</th>
      <th>X8-120</th>
      <th>X12-320</th>
      <th>X15-450</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>减速比</td><td>28.17</td><td>12.6</td><td>36</td><td>19.61</td><td>20</td><td>20.25</td></tr>
    <tr><td>输入电压 (V)</td><td>24</td><td>24</td><td>24</td><td>48</td><td>48</td><td>72</td></tr>
    <tr><td>空载转速 (RPM)</td><td>178</td><td>317</td><td>111</td><td>158</td><td>125</td><td>108</td></tr>
    <tr><td>空载输入电流 (A)</td><td>1</td><td>1</td><td>0.9</td><td>1.6</td><td>2.7</td><td>3.5</td></tr>
    <tr><td>额定转速 (RPM)</td><td>142</td><td>238</td><td>83</td><td>127</td><td>100</td><td>98</td></tr>
    <tr><td>额定扭矩 (N.m)</td><td>2.5</td><td>4</td><td>10.5</td><td>43</td><td>85</td><td>145</td></tr>
    <tr><td>额定输出功率 (W)</td><td>37</td><td>100</td><td>100</td><td>574</td><td>900</td><td>1480</td></tr>
    <tr><td>额定相电流 A(rms)</td><td>3</td><td>7.8</td><td>6.1</td><td>17.6</td><td>30</td><td>25</td></tr>
    <tr><td>峰值扭矩 (N.m)</td><td>7</td><td>10</td><td>34</td><td>120</td><td>320</td><td>450</td></tr>
    <tr><td>峰值相电流 A(rms)</td><td>8.1</td><td>19.5</td><td>21.5</td><td>43.8</td><td>100</td><td>69.2</td></tr>
    <tr><td>效率 (%)</td><td>63</td><td>69.5</td><td>63.1</td><td>79</td><td>75</td><td>82.4</td></tr>
    <tr><td>电机反电动势常数 (Vdc/Krpm)</td><td>4.3</td><td>6</td><td>6</td><td>19.2</td><td>17.9</td><td>29.9</td></tr>
    <tr><td>模块扭矩常数 (N.m/A)</td><td>0.8</td><td>0.8</td><td>1.9</td><td>2.4</td><td>3.3</td><td>5.8</td></tr>
    <tr><td>电机相电阻 (Ω)</td><td>0.61</td><td>0.32</td><td>0.35</td><td>0.18</td><td>0.12</td><td>0.08</td></tr>
    <tr><td>电机相电感 (mH)</td><td>0.13</td><td>0.14</td><td>0.17</td><td>0.31</td><td>0.05</td><td>0.14</td></tr>
    <tr><td>极对数</td><td>13</td><td>13</td><td>13</td><td>10</td><td>20</td><td>20</td></tr>
    <tr><td>三相连接方式</td><td colspan="6">Y</td></tr>
    <tr><td>反驱扭矩 (N.m)</td><td>0.4</td><td>0.8</td><td>1.14</td><td>3.21</td><td>3.8</td><td>4</td></tr>
    <tr><td>背隙 (弧分)</td><td>12</td><td>10</td><td>10</td><td>10</td><td>10</td><td>10</td></tr>
    <tr><td>输出轴承类型</td><td colspan="2">深沟球轴承</td><td colspan="4">交叉滚子轴承</td></tr>
    <tr><td>轴向承受力 (KN)</td><td>0.25</td><td>1.2</td><td>1.3</td><td>4</td><td>4.5</td><td>5.4</td></tr>
    <tr><td>轴向应力 (KN)</td><td>0.25</td><td>1.2</td><td>1.3</td><td>1</td><td>4.5</td><td>5.4</td></tr>
    <tr><td>径向载荷 (KN)</td><td>1</td><td>1.2</td><td>1.5</td><td>4.5</td><td>5</td><td>6</td></tr>
    <tr><td>惯量 (Kg.cm²)</td><td>0.17</td><td>0.25</td><td>0.3</td><td>1.5</td><td>12.9</td><td>31.6</td></tr>
    <tr><td>编码器类型及接口</td><td colspan="6">双编码器 ABS-17BIT (输入) / 17-18BIT (输出)</td></tr>
    <tr><td>控制精度 (度)</td><td colspan="6">&lt;0.01</td></tr>
    <tr><td>通信方式</td><td colspan="6">CAN 总线 / EtherCAT</td></tr>
    <tr><td>重量 (Kg)</td><td>0.26</td><td>0.33</td><td>0.36</td><td>1.40</td><td>2.37</td><td>3.50</td></tr>
    <tr><td>绝缘等级</td><td colspan="6">F</td></tr>
  </tbody>
</table>

## RMD-X V4 系列命名规则
- **RMD**: 品牌名称 R-减速器 M-电机 D-驱动
- **X2**: X 代表系列名称：集成行星执行器，2 表示电机型号，例如：X2 X4 X6 X8 等
- **P28**: 行星齿轮比，例如：P12 P28 P32 等
- **7**: 峰值扭矩 7N.m
- **E**: 通信方式 E: CAN BUS 和 EtherCAT

## 主要特点

1. **CAN BUS 和 EtherCAT**
2. **交叉滚子轴承**
3. **双编码器**
4. **高扭矩密度**
5. **高精度**
6. **中空设计**

## 入门指南
### 使用前的环境准备
**PC上的Windows系统**
- 下载 [对应产品手册](https://www.myactuator.com/_files/archives/cab28a_b3f2a1c77d4645a08052a923690b40fc.zip?dn=MYACTUATOR_Setup%20Software_V4.0_20250206.zip)。
- 下载 [MYACTUATOR_Setup Software_V4.0.zip](https://www.myactuator.com/_files/archives/cab28a_b3f2a1c77d4645a08052a923690b40fc.zip?dn=MYACTUATOR_Setup%20Software_V4.0_20250206.zip)。

- 解压 `MYACTUATOR_Setup Software_V4.0.zip` 并安装以下内容：
    - 位于 `Required Runtime Environment\ZLGUSBCAN_Driver` 目录中的 `USBCAN_AllInOne_x86_x64_2.0.0.1.exe`
    - 位于 `Required Microsoft Runtime Libraries` 目录中的 `MSVBCRT.AIO.2019.10.19.X86 X64.exe`

### 连接电路
这里我们选择了 X4-36 电机，其接口图如下所示。

<div align="center">
    <img width={500} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/X4-36-circuit.png" />
</div>

<table>
  <tr>
    <th>端口定义</th>
    <th>端口描述</th>
  </tr>
  <tr>
    <td>① VCC</td>
    <td>电源正极</td>
  </tr>
  <tr>
    <td>② GND</td>
    <td>电源负极</td>
  </tr>
  <tr>
    <td>③ CAN_H</td>
    <td>CAN_H 网络信号端</td>
  </tr>
  <tr>
    <td>④ CAN_L</td>
    <td>CAN_L 网络信号端</td>
  </tr>
  <tr>
    <td>⑤ EtherCAT_IN</td>
    <td>EtherCAT 输入端</td>
  </tr>
  <tr>
    <td>⑥ EtherCAT_OUT</td>
    <td>EtherCAT 输出端</td>
  </tr>
  <tr>
    <td>⑦ T+</td>
    <td>主机向模块发送控制命令</td>
  </tr>
  <tr>
    <td>⑧ T-</td>
    <td>模块向主机发送状态反馈</td>
  </tr>
  <tr>
    <td>⑨ R+</td>
    <td>主机反映模块状态数据</td>
  </tr>
  <tr>
    <td>⑩ R-</td>
    <td>模块反映主机控制命令</td>
  </tr>
</table>

这里我们使用 CAN 通信方式，需要额外的 USB-CAN 接口通过 Windows 上位机进行调试。

<div align="center">
    <img width={500} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/6.jpg" />
</div>

此处需要为电机提供单独的 24V 电源，并将 USB 连接到您的电脑。

### 使用 `MYACTUATOR Setup Software 250206.exe` 测试电机

| **设置 ID 并连接** | **读取电机信息** | **校准电机** | **校准电机** | **运行电机旋转测试** |
|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/1.png) | ![fig2](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/2.png) | ![fig3](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/3.png) | ![fig4](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/4.png) |![fig5](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/5.png) |
| 默认电机 ID 为 1。输入 ID 为 1 并点击“连接”。 | 连接后，点击“读取”以获取电机的当前信息。|首次使用时，点击“校准电机”进行校准。|校准完成后，点击“读取”和“保存”。 |现在可以在电机运行部分测试不同的电机控制模式。 |

有关更多详细功能，请参考包含在 [MYACTUATOR_Setup Software_V4.0.zip](https://www.myactuator.com/_files/archives/cab28a_b3f2a1c77d4645a08052a923690b40fc.zip?dn=MYACTUATOR_Setup%20Software_V4.0_20250206.zip) 文件中的 **Setup Software Instruction Manual - V3.0.pdf**。

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

**步骤2：** 通过 XT30 (2+2) 接口将电机直接连接到 reComputer Mini 的 CAN0。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/8.jpg" />
</div>

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
git clone https://github.com/ZhuYaoHui1998/myactuator_rmd.git
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

#### 构建 C++ 库

要构建 C++ 驱动 SDK，请在此文件夹中打开一个新终端并执行以下命令。在较旧版本的 Linux 上，构建可能会失败并显示错误消息 `error: 'const struct can_frame' has no member named 'len'`，需要应用 [issue 5](https://github.com/2b-t/myactuator_rmd/issues/5) 中讨论的代码修改。

```bash
cd ~/myactuator_rmd
mkdir build
cd build
cmake .. -D PYTHON_BINDINGS=on
make -j $(nproc)
sudo make install
```

标志 `PYTHON_BINDINGS`（默认为关闭）会额外构建 Python 绑定。如果只需使用 C++ 库，可以忽略此标志。当以这种方式构建 Python 绑定时，它们将被编译为共享库但不会安装。这意味着需要手动安装库，或者只能在构建文件夹中本地导入它们。

要卸载该包，可以使用以下命令：`xargs rm < install_manifest.txt`。

#### 构建 Python 库

要构建并安装此 SDK 的 Python 绑定，请在主文件夹中打开一个新终端并执行以下命令：
```bash
cd ~/myactuator_rmd
pip3 install .
```

这将使用 `setup.py` 调用 CMake 并将绑定安装为 C++ 库。如果需要移除它们，只需调用 `pip3 uninstall myactuator-rmd-py`。

### 使用 C++ 控制
1. 创建项目目录结构  
在代码 `src` 目录下创建项目目录，例如命名为 `myactuator_example`，并在子目录下创建一个 `src` 文件夹。

```bash  
cd ~/myactuator_rmd
mkdir -p ~/myactuator_rmd/src/myactuator_example/src  
cd ~/myactuator_rmd/src/myactuator_example  
```  

2. 编写 CMakeLists.txt  
在 `~/myactuator_rmd/src/myactuator_example/CMakeLists.txt` 文件中写入以下内容：
```bash
touch CMakeLists.txt
```

```cmake  
cmake_minimum_required(VERSION 3.20)  
project(myactuator_example)  

# 查找 myactuator_rmd 库  
find_package(myactuator_rmd REQUIRED)  

# 创建可执行文件  
add_executable(myactuator_node  
src/main.cpp  
)  

# 使用 C++17 标准  
target_compile_features(myactuator_node PUBLIC  
cxx_std_17  
)  

# 链接 myactuator_rmd 库  
target_link_libraries(myactuator_node PUBLIC  
myactuator_rmd::myactuator_rmd  
)  
```

3. 编写 main.cpp  
在 `~/myactuator_rmd/src/myactuator_example/src/main.cpp` 文件中写入以下代码：

```bash
touch src/main.cpp
```

```cpp
#include <cstdlib>
#include <iostream>
#include <myactuator_rmd/myactuator_rmd.hpp>

int main() {
myactuator_rmd::CanDriver driver {"can0"};
myactuator_rmd::ActuatorInterface actuator {driver, 1};

std::cout << actuator.getVersionDate() << std::endl;
std::cout << actuator.sendPositionAbsoluteSetpoint(180.0, 500.0) << std::endl;
actuator.shutdownMotor();
return EXIT_SUCCESS;
}
```

4. 构建项目  
```bash
cd ~/myactuator_rmd/src/myactuator_example
mkdir build && cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
make
```

5. 运行程序  
```bash
sudo ./myactuator_node
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/Cresult.png" />
</div>

**前提条件**  
- CAN 接口 `can0` 必须正确配置（确保电机和 CAN 总线正确连接）。  
- `myactuator_rmd` 库必须正确安装（如果未安装，请先安装）。

有关更多 C++ 实现细节，请参考 `myactuator_rmd.hpp` 中的所有内容。我们将详细介绍 Python 的使用方法。

### 使用 Python 控制

在目录 `~/myactuator_rmd/src/myactuator_example` 下创建一个名为 scripts 的文件夹，用于存储 Python 脚本。
```bash
cd ~/myactuator_rmd/src/myactuator_example
mkdir scripts
```

#### **获取版本号**

在 scripts 目录下创建一个名为 `test.py` 的自定义 Python 脚本，并填入以下代码。
```python
import myactuator_rmd_py as rmd
import time

# 初始化 CAN 驱动和执行器接口
driver = rmd.CanDriver("can0")  # 使用 can0
actuator = rmd.ActuatorInterface(driver, 1)  # CAN ID 设置为 1

# 获取版本号
print("版本号:", actuator.getVersionDate())
```
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/8.png" />
</div>

加载库并继续为特定网络接口（此处为 can0）和驱动（此处为 1，对应 CAN 地址 0x140 + 1 = 0x141）创建驱动。

#### **获取电机状态**
```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# 电机状态 1
status1 = actuator.getMotorStatus1()
print(f"""
电机状态 1:
温度: {status1.temperature}°C
刹车状态: {'已释放' if status1.is_brake_released else '已锁定'}
电压: {status1.voltage}V
错误代码: {status1.error_code}
""")

# 电机状态 2
status2 = actuator.getMotorStatus2()
print(f"""
电机状态 2:
温度: {status2.temperature}°C
电流: {status2.current}A
轴速度: {status2.shaft_speed} RPM
轴角度: {status2.shaft_angle}°
""")

# 电机状态 3
status3 = actuator.getMotorStatus3()
print(f"""
电机状态 3:
温度: {status3.temperature}°C
相位 A 电流: {status3.current_phase_a}A
相位 B 电流: {status3.current_phase_b}A
相位 C 电流: {status3.current_phase_c}A
""")

## 扭矩计算

import myactuator_rmd_py as rmd
from myactuator_rmd_py.actuator_constants import X4_24  # 根据您的电机型号导入

def get_normalized_torque(actuator):
    """从电流计算归一化扭矩"""
    # 获取电流值
    status = actuator.getMotorStatus2()
    current = status.current
    
    # 计算归一化扭矩（电流/额定值）
    torque_ratio = current / X4_24.rated_current
    actual_torque = torque_ratio * X4_24.rated_torque
    return actual_torque

# 使用示例
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

try:
    while True:
        torque = get_normalized_torque(actuator)
        print(f"当前扭矩: {torque:.3f} Nm (额定: {X4_24.rated_torque} Nm)", end='\r')
        time.sleep(0.1)
except KeyboardInterrupt:
    actuator.shutdownMotor()
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/9.png" />
</div>

#### **控制模式**
- **获取当前控制模式**
```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)
mode = actuator.getControlMode()
print(f"当前控制模式: {mode}")
```
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/10.png" />
</div>

- **绝对位置控制**
```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# 移动到 180 度位置，速度为 100 度/秒
actuator.sendPositionAbsoluteSetpoint(180.0, 300.0)
time.sleep(5)  # 等待电机到达目标位置

# 获取当前位置
angle = actuator.getMultiTurnAngle()
print(f"当前位置: {angle}°")

time.sleep(5)
mode = actuator.getControlMode()
print(f"当前控制模式: {mode}")
actuator.shutdownMotor()
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/11.png" />
</div>

您将看到电机旋转到 180 度位置。

- **相对位置控制**
```python
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# 从当前位置再移动 90 度
current_angle = actuator.getMultiTurnAngle()
target_angle = current_angle + 90.0
actuator.sendPositionAbsoluteSetpoint(target_angle, 50.0)
time.sleep(3)
angle = actuator.getMultiTurnAngle()
print(f"当前位置: {angle}°")
mode = actuator.getControlMode()
print(f"当前控制模式: {mode}")
actuator.shutdownMotor()
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/12.png" />
</div>

您将观察到电机逆时针旋转 90 度。

- **速度控制**
```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# 连续旋转，速度为 500 RPM
actuator.sendVelocitySetpoint(500.0)
time.sleep(15)

# 停止电机
actuator.stopMotor()

# 获取当前位置
angle = actuator.getMultiTurnAngle()
print(f"当前位置: {angle}°")

mode = actuator.getControlMode()
print(f"当前控制模式: {mode}")
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/13.png" />
</div>

- **扭矩控制**
```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# 施加 0.5A 电流（扭矩）
actuator.sendCurrentSetpoint(0.5)
time.sleep(2)

# 停止扭矩输出
actuator.stopMotor()

# 获取当前位置
angle = actuator.getMultiTurnAngle()
print(f"当前位置: {angle}°")

mode = actuator.getControlMode()
print(f"当前控制模式: {mode}")
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/14.png" />
</div>

- **闭环运动控制**
```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time

# 初始化
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# 带反馈的位置控制
feedback = actuator.sendPositionAbsoluteSetpoint(180.0, 100.0)
time.sleep(5)
print(feedback)

    
# 带反馈的速度控制
feedback = actuator.sendVelocitySetpoint(20.0)
time.sleep(5)
print(feedback)
    
# 带反馈的扭矩控制
torque_constant = 0.32  # 根据电机型号设置
feedback = actuator.sendTorqueSetpoint(1.5, torque_constant)
time.sleep(5)
print(feedback)

actuator.stopMotor()
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/15.png" />
</div>

#### 电机刹车控制
```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# 启用刹车
actuator.lockBrake()
print("刹车已启用")

# 释放刹车
actuator.releaseBrake()
print("刹车已释放")
```

#### 电机电源控制
```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# 关闭电机电源
actuator.shutdownMotor()
print("电机电源已关闭")
```

#### 编码器功能
- **获取多圈编码器位置**
```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)
encoder_pos = actuator.getMultiTurnEncoderPosition()
print(f"多圈编码器位置: {encoder_pos}")
```

- **将当前位置设置为零点（需要重启）**
```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)
actuator.setCurrentPositionAsEncoderZero()
print("当前位置已设置为编码器零点")
```

- **设置自定义零点（需要重启）**
```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time

driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# 获取当前位置作为零点
current_pos = actuator.getMultiTurnEncoderOriginalPosition()
print(f"原始编码器位置: {current_pos}")

# 设置零点偏移
actuator.setEncoderZero(current_pos)
print(f"编码器零点已设置为: {current_pos}")

# 重启以应用设置
actuator.shutdownMotor()
time.sleep(1)  # 等待关闭
actuator = rmd.ActuatorInterface(driver, 1)  # 重新初始化

# 验证
new_pos = actuator.getMultiTurnEncoderPosition()
print(f"重启后的位置（应接近 0）: {new_pos}")
```

#### 加速度设置
```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
from myactuator_rmd_py.actuator_state import AccelerationType

# 初始化
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

## 获取初始加速度
print(f"初始加速度: {actuator.getAcceleration()}")

actuator.setAcceleration(5000, AccelerationType.POSITION_PLANNING_ACCELERATION)

## 获取修改后的加速度
print(f"修改后的加速度: {actuator.getAcceleration()}")

# 设置不同的加速度类型
actuator.setAcceleration(1000, AccelerationType.POSITION_PLANNING_ACCELERATION)
actuator.setAcceleration(800, AccelerationType.POSITION_PLANNING_DECELERATION)
actuator.setAcceleration(1200, AccelerationType.VELOCITY_PLANNING_ACCELERATION)
actuator.setAcceleration(1000, AccelerationType.VELOCITY_PLANNING_DECELERATION)
```

<iframe width="960" height="640" src="//player.bilibili.com/player.html?isOutside=true&aid=114737014705844&bvid=BV1vTKGzZEsT&cid=30669868360&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

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