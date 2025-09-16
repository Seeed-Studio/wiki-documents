---
description: 本文档将介绍如何快速上手高擎系列电机.
title:  高擎系列电机
keywords:
- 关节模组
- 电机
- 机器人
- 机械臂
image: https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/damiao.webp
slug: /cn/hightorque_series
last_update:
  date: 06/24/2025
  author: ZhuYaoHui
---


# 高擎系列电机使用文档

<div className="quick-nav-container">
  <nav className="quick-nav">
    <a className="nav-item">
      <img width={100}  src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/4438.png" className="nav-icon" alt="4438-32"/>
      <span className="text">4438-32</span>
      <div className="hover-effect"></div>
    </a>
    <a className="nav-item">
      <img width={100} src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/5047-3.png" className="nav-icon" alt="5047-36"/>
      <span className="text">5047-36</span>
      <div className="hover-effect"></div>
    </a>
  </nav>
</div>


# 高擎系列电机快速入门指南
本文档将介绍如何快速上手高擎系列电机。

<div align="center">
    <img width={400} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque.png" />
</div>

## 技术规格

### 行星关节模组参数对比表
| **技术规格书下载**        | **[HTDW-5047-36-NE](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/HTDW-5047-36-NE.pdf)** |  **[HTDW-4438-32-NE](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/HTDW-4438-32-NE.pdf)** |  
|------------------------|------------------|---------------------|
| **减速比**             | 36                | 30                  | 
| **峰值扭矩(Nm)**       | 16                | 6                  | 
| **额定扭矩(Nm)**       | 4                 | 1.5                 | 
| **堵转扭矩(Nm)**        | 24               | 10                  | 
| **额定转速(RPM)**      | 40                | 36                  | 
| **空载转速(RPM)**      | 60                 | 75                  |
| **额定功率(W)**          | 17              | 13                  | 
| **扭矩常数(Nm/A)**     | 0.062             | 0.039               | 
| **极对数**             | 14                | -                   |
| **额定电压(V)**         | 12-48            | 12-48               | 
| **额定电流(A)**        | 2                 | 1                   | 
| **峰值电流(A)**          | 10              | 5                   | 
| **扭矩控制精度**       | ±10%              | ±20%                |
| **转速控制精度**      | ±8%                | ±10%                |
| **响应时间(μs)**      | ≤200               | ≤200                |
| **高速端编码器分辨率** | 14bit             | 14bit               | 
| **低速端编码器分辨率** | 12bit             | 12bit               |
| **通讯波特率(Mbps)**   | 5                | 5                   |
| **控制频率(Hz)**      | 3k                | 3k                  | 


###  电机安装尺寸
- **HTDM-4438-32**：

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/4438_install.png" />
</div>

- **HTDM-5047-36**：

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/5047_install.png" />
</div>


## 电机调试助手及使用说明书
**Windows PC端准备**
- 下载[电机调试助手v1.2.1](https://www.hightorque.cn/wp-content/uploads/2025/03/%E9%AB%98%E6%93%8E%E7%94%B5%E6%9C%BA%E8%B0%83%E8%AF%95%E5%8A%A9%E6%89%8Bv1.2.1.zip)
- 下载[上位机调试说明书](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/zn_user.pdf)
- 下载[CAN通信协议](https://www.hightorque.cn/wp-content/uploads/2024/12/%E9%AB%98%E6%93%8E%E7%94%B5%E6%9C%BAcan%E5%8D%8F%E8%AE%AE%E8%A7%A3%E6%9E%90v1.5.5.zip)
- 购买CAN-USB驱动板


## C++示例

C++控制需要额外的CAN-USB驱动板，请参考[livelybot_hardware_sdk](https://github.com/HighTorque-Robotics/livelybot_hardware_sdk)

<div align="center">
    <img width={400} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/USB-CAN.png" />
</div>




## 使用[reComputer Mini Jetson Orin](/cn/recomputer_jetson_mini_getting_started)控制电机

目前市场上电机最常用的CAN通信接口采用XT30(2+2)和JST连接器。我们的**reComputer Mini Jetson Orin**和**reComputer Robotics**设备配备了双XT30(2+2)端口和基于JST的CAN接口，提供无缝兼容性。

**reComputer Mini:**
<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

**reComputer Robotics**
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig5.jpg"/>  
</div>


有关CAN使用的更多细节，可参考此[wiki](https://wiki.seeedstudio.com/cn/recomputer_jetson_mini_hardware_interfaces_usage/#can)。

### 启用CAN接口

**步骤1:** 使用CAN0和CAN1前，请移除底盖并将两个120Ω终端电阻拨至ON位置

<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/7.png" />
</div>

**步骤2:** 通过XT30(2+2)接口将电机直接连接到reComputer Mini的CAN0

:::tip
reComputer Mini的CAN接口H/L引脚与电机的H/L相反，因此需要反转XT30 2+2线束中的H/L连接
:::

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can0-datasheet.png"/>
</div>

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/reComputer_mini_control.png" />
</div>

:::danger
此电源方案仅适用于单电机学习测试。多电机使用时请设计独立电源板，将Jetson电源与电机电源隔离，避免大电流直接通过Jetson
:::

#### 启用Jetson CAN通信
打开终端输入以下命令拉高GPIO引脚激活CAN0:
```bash
gpioset --mode=wait 0 43=0
```

若使用JST接口的CAN1，则拉高106引脚
```bash
gpioset --mode=wait 0 106=0
```

保持此终端开启，新建终端配置CAN0
```bash
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

### Python控制

- **安装Python环境**  
```bash
pip install python-can numpy
```

- **创建脚本目录**  
```bash
mkdir -p ~/hightorque/scripts
```

- **创建hightorque_motor.py文件**

```bash
cd ~/hightorque/scripts
touch hightorque_motor.py
```
将以下代码复制到hightorque_motor.py

<details>
<summary>hightorque_motor.py</summary>

```python
import can
import numpy as np
from time import sleep
from enum import IntEnum

class MotorType(IntEnum):
    """电机型号枚举"""
    HT5046 = 0  # 5046电机
    HT4538 = 1  # 4538电机
    HT5047_36 = 2  # 5047/6056双极36减速比
    HT5047_9 = 3  # 5047单极9减速比

class ControlMode(IntEnum):
    """控制模式枚举"""
    NORMAL = 0  # 普通模式
    TORQUE = 1  # 力矩模式
    COOPERATIVE = 2  # 协同控制模式

class Motor:
    def __init__(self, motor_type: MotorType, slave_id: int, master_id: int):
        """
        初始化电机对象
        :param motor_type: 电机型号
        :param slave_id: 从机ID
        :param master_id: 主机ID
        """
        self.motor_type = motor_type
        self.slave_id = slave_id
        self.master_id = master_id
        self.position = 0
        self.velocity = 0
        self.torque = 0
        self.temperature = 0
        
        # 根据电机型号设置扭矩转换参数
        if motor_type == MotorType.HT5046:
            self.torque_k = 0.005397
            self.torque_d = -0.455107
        elif motor_type == MotorType.HT4538:
            self.torque_k = 0.004587
            self.torque_d = -0.290788
        elif motor_type == MotorType.HT5047_36:
            self.torque_k = 0.004563
            self.torque_d = -0.493257
        elif motor_type == MotorType.HT5047_9:
            self.torque_k = 0.005332
            self.torque_d = -0.072956

    def update_status(self, position: float, velocity: float, torque: float, temperature: float):
        """更新电机状态"""
        self.position = position
        self.velocity = velocity
        self.torque = torque
        self.temperature = temperature

class MotorControl:
    def __init__(self, channel: str, bitrate: int = 1000000):
        """
        初始化电机控制器
        :param channel: CAN通道
        :param bitrate: CAN波特率
        """
        self.bus = can.interface.Bus(channel=channel, bustype='socketcan', bitrate=bitrate)
        self.motors = {}

    def add_motor(self, motor: Motor):
        """添加电机到控制器"""
        self.motors[motor.slave_id] = motor

    def __send_data(self, motor_id: int, data: bytes):
        """
        发送CAN数据
        :param motor_id: 电机ID
        :param data: 要发送的数据
        """
        msg = can.Message(
            arbitration_id=0x8000 | motor_id,
            data=data,
            is_extended_id=True
        )
        self.bus.send(msg)

    def enable(self, motor: Motor):
        """使能电机"""
        data = bytes([0x01, 0x00, 0x01])
        self.__send_data(motor.slave_id, data)
        sleep(0.1)

    def disable(self, motor: Motor):
        """失能电机"""
        data = bytes([0x01, 0x00, 0x00])
        self.__send_data(motor.slave_id, data)
        sleep(0.1)

    def set_zero_position(self, motor: Motor):
        """设置电机零位"""
        data = bytes([0x40, 0x01, 0x04, 0x64, 0x20, 0x63, 0x0a])
        self.__send_data(motor.slave_id, data)
        sleep(1.0)  # 等待1秒
        self.save_settings(motor)

    def save_settings(self, motor: Motor):
        """保存电机设置到flash"""
        data = bytes([0x05, 0xb3, 0x02, 0x00, 0x00])
        self.__send_data(motor.slave_id, data)

    def control_position(self, motor: Motor, position: float, torque: float):
        """
        位置控制
        :param motor: 电机对象
        :param position: 目标位置(单位: 0.0001圈)
        :param torque: 力矩限制
        """
        pos_bytes = int(position).to_bytes(2, 'little')
        tqe_bytes = int(torque).to_bytes(2, 'little')
        data = bytes([0x07, 0x07]) + pos_bytes + bytes([0x80, 0x00]) + tqe_bytes
        self.__send_data(motor.slave_id, data)

    def control_velocity(self, motor: Motor, velocity: float, torque: float):
        """
        速度控制
        :param motor: 电机对象
        :param velocity: 目标速度(单位: 0.00025转/秒)
        :param torque: 力矩限制
        """
        vel_bytes = int(velocity).to_bytes(2, 'little')
        tqe_bytes = int(torque).to_bytes(2, 'little')
        data = bytes([0x07, 0x07, 0x00, 0x80]) + vel_bytes + tqe_bytes
        self.__send_data(motor.slave_id, data)

    def control_torque(self, motor: Motor, torque: float):
        """
        力矩控制
        :param motor: 电机对象
        :param torque: 目标力矩
        """
        tqe_bytes = int(torque).to_bytes(2, 'little')
        data = bytes([0x05, 0x13]) + tqe_bytes
        self.__send_data(motor.slave_id, data)

    def control_cooperative(self, motor: Motor, position: float, velocity: float, torque: float):
        """
        协同控制(位置、速度、力矩同时控制)
        :param motor: 电机对象
        :param position: 目标位置(单位: 0.0001圈)
        :param velocity: 目标速度(单位: 0.00025转/秒)
        :param torque: 力矩限制
        """
        vel_bytes = int(velocity).to_bytes(2, 'little')
        tqe_bytes = int(torque).to_bytes(2, 'little')
        pos_bytes = int(position).to_bytes(2, 'little')
        data = bytes([0x07, 0x35]) + vel_bytes + tqe_bytes + pos_bytes
        self.__send_data(motor.slave_id, data)

    def read_motor_status(self, motor: Motor):
        """读取电机状态"""
        data = bytes([0x17, 0x01])
        self.__send_data(motor.slave_id, data)
        sleep(0.01)  # 等待接收数据
        
        # 接收并解析数据
        msg = self.bus.recv(timeout=0.1)
        if msg and msg.arbitration_id == (0x8000 | motor.slave_id):
            data = msg.data
            if len(data) >= 8 and data[0] == 0x27:
                position = int.from_bytes(data[2:4], 'little')
                velocity = int.from_bytes(data[4:6], 'little')
                torque = int.from_bytes(data[6:8], 'little')
                motor.update_status(position, velocity, torque, 0)

    def periodic_read_status(self, motor: Motor, period_ms: int):
        """
        设置周期性读取电机状态
        :param motor: 电机对象
        :param period_ms: 周期(毫秒)
        """
        period_bytes = int(period_ms).to_bytes(2, 'little')
        data = bytes([0x05, 0xb4, 0x02, 0x00]) + period_bytes
        self.__send_data(motor.slave_id, data)

    def close(self):
        """关闭CAN总线"""
        self.bus.shutdown() 
```

</details>

- **创建hightorque_test.py文件**

将以下代码复制到hightorque_test.py

<details>
<summary>hightorque_test.py</summary>

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import time
import math
import numpy as np
from hightorque_motor import Motor, MotorControl, MotorType

# 配置参数
NUM_MOTORS = 2  # 控制电机数量
CAN_INTERFACE = "can0"  # CAN接口名称
CAN_BITRATE = 1000000  # CAN波特率
MOTOR_TYPE = MotorType.HT5047_36  # 电机类型

# 正弦波参数
FREQUENCY = 0.1  # 频率 (Hz)
AMPLITUDE = 2500  # 幅度 (0.0001圈)
OFFSET = 2500    # 偏移量，确保位置始终为正
DURATION = 60.0  # 运行时间 (s)

def main():
    # 创建电机控制对象
    controller = MotorControl(channel=CAN_INTERFACE, bitrate=CAN_BITRATE)
    
    try:
        # 创建并添加电机
        motors = []
        for i in range(NUM_MOTORS):
            motor = Motor(MOTOR_TYPE, slave_id=i+1, master_id=0)
            controller.add_motor(motor)
            motors.append(motor)
            
            # 使能电机
            print(f"使能电机 {i+1}...")
            controller.enable(motor)
            time.sleep(1)  # 等待电机使能完成
            
            # 设置零位
            print(f"设置电机 {i+1} 零位...")
            controller.set_zero_position(motor)
            time.sleep(1)
            
            # 保存设置到flash
            print(f"保存电机 {i+1} 设置...")
            controller.save_settings(motor)
            time.sleep(1)
            
            # 读取初始状态
            controller.read_motor_status(motor)
            print(f"电机 {i+1} 初始状态:")
            print(f"位置: {motor.position * 0.0001:.4f}圈")
            print(f"速度: {motor.velocity * 0.00025:.4f}转/秒")
            print(f"力矩: {motor.torque * motor.torque_k + motor.torque_d:.4f}Nm")
        
        # 开始正弦波位置控制
        print("\n开始正弦波位置控制...")
        start_time = time.time()
        while time.time() - start_time < DURATION:
            current_time = time.time() - start_time
            
            # 计算正弦波位置，加上偏移量确保始终为正
            position = AMPLITUDE * math.sin(2 * math.pi * FREQUENCY * current_time) + OFFSET
            
            # 控制所有电机
            for motor in motors:
                # 使用位置控制模式，设置最大力矩为1000
                controller.control_position(motor, position=int(position), torque=1000)
            
            # 控制频率
            time.sleep(0.001)  # 1kHz控制频率
            
    except KeyboardInterrupt:
        print("\n程序被用户中断")
    finally:
        # 失能所有电机
        for motor in motors:
            print(f"失能电机 {motor.slave_id}...")
            controller.disable(motor)
        
        # 关闭CAN总线
        controller.close()
        print("CAN总线已关闭")

if __name__ == "__main__":
    main() 

```

</details>

- **运行hightorque_test.py**
```bash
python hightorque_test.py
```

<iframe width="960" height="640" src="//player.bilibili.com/player.html?isOutside=true&aid=114737031417384&bvid=BV1EFKGzYEYy&cid=30669933724&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

## 技术支持与产品讨论

感谢选择我们的产品！我们提供多种支持渠道确保您获得最佳使用体验。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>




<style>{`
/* 导航容器 */
.quick-nav-container {
  margin: 2rem 0;
  padding: 1rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #f8f9fa 100%);
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.card-container {
  margin: 0.1rem 0;
  padding: 0.5rem;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

/* Dark模式 - 导航容器 */
html[data-theme='dark'] .quick-nav-container {
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
}

/* 导航主体 */
.quick-nav {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  flex-wrap: wrap; /* 关键属性 */
  justify-content: left; /* 可选居中 */
}

/* 导航项 */
.nav-item {
  position: relative;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  flex: 0 0 calc(20% - 20px);
  margin-bottom: 20px;
  align-items: center;
  text-decoration: none !important;
  color: #333;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  z-index: 1;
}

/* Dark模式 - 导航项 */
html[data-theme='dark'] .nav-item {
  color: #e5e7eb;
  background: #374151;
  box-shadow: 0 2px 4px rgba(0,0,0,0.4);
}

/* 图标样式 */
.nav-item .icon {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  transition: transform 0.3s;
}

/* 文字样式 */
.nav-item .text {
  font-size: 0.95rem;
  white-space: nowrap;
}

/* 悬浮特效 */
.nav-item .hover-effect {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: linear-gradient(135deg, #4a90e2 0%, #50e3c2 100%);
  border-radius: 12px;
  transition: height 0.3s ease;
  z-index: -1;
}

/* 悬浮动画 */
.nav-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  color: white;
}

/* Dark模式 - 悬浮动画 */
html[data-theme='dark'] .nav-item:hover {
  box-shadow: 0 6px 12px rgba(0,0,0,0.6);
  color: white;
}

.nav-item:hover .icon {
  transform: scale(1.2) rotate(10deg);
}

.nav-item:hover .hover-effect {
  height: 100%;
}

.nav-item img {
  pointer-events: none;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .quick-nav {
    flex-direction: column;
    gap: 0.5rem;
  }
  .nav-item {
    flex-direction: row;
    justify-content: start;
    padding: 0.8rem 1rem;
  }
  .nav-item .icon {
    margin-bottom: 0;
    margin-right: 0.8rem;
  }
}
`}</style>


<style>{`
/* 内容卡片增强版样式 */
.nav-grid {
  display: block;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 2rem;
}

.category-card {
  position: relative;
  padding: 1.5rem;
  border-radius: 16px;
  background: white;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  z-index: 1;
}

/* Dark模式 - 内容卡片 */
html[data-theme='dark'] .category-card {
  background: #374151;
  box-shadow: 0 4px 6px rgba(0,0,0,0.4);
  color: #e5e7eb;
}

.category-group {
  margin-bottom: 2rem;
}

/* 分类色标 */
.category-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 100%;
}

.robot-kits::before { background: linear-gradient(to bottom, #4a90e2, #50e3c2); }
.actuators::before { background: linear-gradient(to bottom, #50e3c2, #a0e3c2); }
.sensors::before { background: linear-gradient(to bottom, #ff6b6b, #ff8e8e); }
.software::before { background: linear-gradient(to bottom, #f5a623, #f5c623); }

/* 悬浮特效 */
.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0,0,0,0.1);
}

/* Dark模式 - 悬浮特效 */
html[data-theme='dark'] .category-card:hover {
  box-shadow: 0 12px 20px rgba(0,0,0,0.6);
}

.category-card:hover::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
  z-index: -1;
}

/* Dark模式 - 悬浮光效 */
html[data-theme='dark'] .category-card:hover::after {
  background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
}

/* 链接动画 */
.category-card a {
  position: relative;
  display: inline-block;
  transition: all 0.2s;
  text-decoration: none !important;
  color: #333;
}

/* Dark模式 - 链接 */
html[data-theme='dark'] .category-card a {
  color: #d1d5db;
}

.category-card a:hover {
  color: #4a90e2;
  transform: translateX(5px);
}

/* Dark模式 - 链接悬浮 */
html[data-theme='dark'] .category-card a:hover {
  color: #60a5fa;
}

.category-card a::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #4a90e2;
  transition: width 0.3s;
}

/* Dark模式 - 链接下划线 */
html[data-theme='dark'] .category-card a::after {
  background: #60a5fa;
}

.category-card a:hover::after {
  width: 100%;
}

/* 标签样式增强 */
.tag {
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 12px;
  margin-left: 8px;
  transition: all 0.3s;
}

.stable { 
  background: #e6f4ea; 
  color: #137333;
  box-shadow: 0 2px 4px rgba(0,100,0,0.1);
}

/* Dark模式 - Stable标签 */
html[data-theme='dark'] .stable {
  background: #065f46;
  color: #a7f3d0;
  box-shadow: 0 2px 4px rgba(0,100,0,0.3);
}

.recommended { 
  background: #fce8e6; 
  color: #a50e0e;
  box-shadow: 0 2px 4px rgba(200,0,0,0.1);
}

/* Dark模式 - Recommended标签 */
html[data-theme='dark'] .recommended {
  background: #7f1d1d;
  color: #fca5a5;
  box-shadow: 0 2px 4px rgba(200,0,0,0.3);
}

.category-card:active {
  transform: translateY(-2px) scale(0.98);
  box-shadow: 0 6px 10px rgba(0,0,0,0.1);
}

/* Dark模式 - 点击效果 */
html[data-theme='dark'] .category-card:active {
  box-shadow: 0 6px 10px rgba(0,0,0,0.4);
}

/* 响应式优化 */
@media (max-width: 768px) {
  .nav-grid {
    grid-template-columns: 1fr;
  }
  
  .category-card {
    width: 100%;
    margin-top: 0.5rem; /* 卡片紧贴标题 */
  }
}

/* Dark模式 - 标题文字 */
html[data-theme='dark'] h1,
html[data-theme='dark'] h2,
html[data-theme='dark'] h3,
html[data-theme='dark'] h4,
html[data-theme='dark'] h5,
html[data-theme='dark'] h6 {
  color: #f9fafb;
}

/* Dark模式 - 正文文字 */
html[data-theme='dark'] p,
html[data-theme='dark'] li,
html[data-theme='dark'] strong {
  color: #e5e7eb;
}

/* Dark模式 - 引用块 */
html[data-theme='dark'] blockquote {
  color: #9ca3af;
  border-left-color: #4b5563;
}
`}</style>