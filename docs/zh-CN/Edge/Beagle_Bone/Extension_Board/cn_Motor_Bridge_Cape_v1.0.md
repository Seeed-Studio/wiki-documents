---
description: Motor Bridge Cape v1.0
title: Motor Bridge Cape v1.0
keywords:
- Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Motor_Bridge_Cape_v1.0
last_update:
  date: 1/10/2022
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/Motor_bridge_driver.jpg)

Motor Bridge Cape 配备了双向电机控制功能，使用两个 TB6612FNG 集成双 H 桥，因此它可以控制两个步进电机或四个有刷直流电机，支持 6~15V DC 电源，每个电机约 1A 电流消耗。该扩展板为 BBG 或 BBB 提供 5V 稳压电源，最大输入电压为 15V。它还具有六个舵机控制接口和六个扩展 I\O。所有功能均由板载 STM32F0 协处理器提供。MCU 可以通过 I<sup>2</sup>C 或 UART 接口与 BeagleBone® 通信。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Motor-Bridge-Cape-p-2569.html)

功能特点
--------

- 可驱动 4 个直流电机或 2 个步进电机
- 可驱动 6 个舵机
- Mbed 平台
- STM32F0 协处理器
- 两个 TB6612FNG
- 6 个扩展 I\O
- 通过 I<sup>2</sup>C 或 UART 接口与 BBG 通信

规格参数
--------

- 电池输入电压：6~15V
- H 桥工作电压：6~15V
- DC/DC 5V 输出电流：最大 2A
- 3V3 输出电流：最大 350mA
- 4 个 H 桥驱动器，每个额定电流：1.2A，峰值电流：3.2A
- 6 个舵机驱动器，工作电压：5V，总电流不超过 1.5A
- 输入反接保护
- 过流保护：3A 一次性快速熔断器

硬件概览
--------

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/Motor_Bridge_Hardware_overview.jpg)

- **3A 一次性熔断器**：过流保护
- **复位按钮**：复位协处理器
- **SWD 接口**：调试接口
- **原型板**：扩展其他电路
- **GPIOs**：扩展其他电路
- **舵机接口**：舵机电机接口
- **STM32F030R8**：协处理器
- **DC/DC**：电压转换电路
- **TB6612FNG**：H 桥 IC
- **指示灯**：电机方向指示灯
- **工作模式开关**：待机或工作模式
- **输入反接保护**：保护电路
- **Motor4/Motor3**：驱动 2 个直流电机或 1 个步进电机
- **Motor2/Motor1**：驱动 2 个直流电机或 1 个步进电机
- **电池**：为电机供电

快速入门
--------

在本节中，我将向您展示如何在 BBG 上使用 Motor Bridge Cape。在开始之前，请从 [Github](https://github.com/Seeed-Studio/MotorBridgeCapeforBBG_BBB) 下载 Motor Bridge Cape 驱动库代码。

要使用 Motor Bridge Cape 库，只需将 MotorBridge.py 文件添加到您的项目中。然后将该 Python 文件导入到您的项目，并创建一个 Motor Bridge Cape 的对象。

```
import MotorBridge
motor = MotorBridge.MotorBridgeCape()
```

### 安装依赖项

```
sudo apt-get update
sudo apt-get install build-essential python-pip python-dev python-smbus git
sudo pip install Adafruit-GPIO
```

### 步进电机

Motor Bridge Cape 的步进电机接口如下图所示。

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/StepperMotor.jpg)

#### 步进电机功能

以下是步进电机功能的简要说明。

**<u>StepperMotorAInit()</u>**

*描述*：初始化步进电机 A 端口。

**<u>StepperMotorAMove(MoveSteps,StepDelayTime)</u>**

*描述*：驱动步进电机 A。

*MoveSteps*：步进电机移动的步数。**正数**表示顺时针方向，**负数**表示逆时针方向。

*StepDelayTime*：每步的延迟时间，单位：微秒。

**<u>StepperMotorBInit()</u>**

*描述*：初始化步进电机 B 端口。

**<u>StepperMotorBMove(MoveSteps,StepDelayTime)</u>**

*描述*：驱动步进电机 B。

*MoveSteps*：步进电机移动的步数。**正数**表示顺时针方向，**负数**表示逆时针方向。

*StepDelayTime*：每步的延迟时间，单位：微秒。

#### 步进电机示例

将以下代码复制到您的项目中，并保存为一个 Python 文件。

```
import MotorBridge
import time
 
def StepperMotorATest():
    print 'Hello From MotorBridge'
    motor.StepperMotorAInit()
    motor.StepperMotorAMove(1000,1000) # 1000 步，每步 1000 微秒
    time.sleep(1)
    motor.StepperMotorAMove(-1000,1000) # 1000 步，每步 1000 微秒
    time.sleep(1)
 
def StepperMotorBTest():
    print 'Hello From MotorBridge'
    motor.StepperMotorBInit()
    motor.StepperMotorBMove(1000,1000) # 1000 步，每步 1000 微秒
    time.sleep(1)
    motor.StepperMotorBMove(-1000,1000) # 1000 步，每步 1000 微秒
    time.sleep(1)
 
 
if __name__=="__main__":
    motor = MotorBridge.MotorBridgeCape()
    StepperMotorATest()
    StepperMotorBTest()
```

### 直流电机

Motor Bridge Cape 的直流电机接口如下图所示。

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/DCMotorBBG.jpg)

#### 直流电机功能

以下是直流电机功能的简要说明。

**<u>DCMotorInit(MotorName,Frequency)</u>**

*描述*：初始化直流电机并设置频率。

*MotorName*：1 ~ 4 表示 Motor1 ~ Motor4。

*Frequency*：设置直流电机的频率。

:::note
如果您更改直流电机频率，其他直流电机的频率也会随之更改。
:::

**<u>DCMotorMove(MotorName,Direction,PWMDuty)</u>**

*描述*：驱动直流电机，设置方向和 PWM 占空比。

*MotorName*：1 ~ 4 表示 Motor1 ~ Motor4。

*Direction*：1 表示顺时针方向，2 表示逆时针方向，3 表示停止电机。

*PWMDuty*：0 ~ 100 表示 PWM 占空比的百分比。

**<u>motor.DCMotorStop(MotorName)</u>**

*描述*：停止直流电机。

*MotorName*：1 ~ 4 表示 Motor1 ~ Motor4。

#### 直流电机示例

将以下代码复制到您的项目中，并保存为一个 Python 文件。

```
import MotorBridge
import time
 
MotorName        = 1
ClockWise        = 1
CounterClockWise = 2
PwmDuty          = 90
Frequency        = 1000
 
if __name__=="__main__":
    motor = MotorBridge.MotorBridgeCape()
    motor.DCMotorInit(MotorName,Frequency)
    while True:
        motor.DCMotorMove(MotorName,ClockWise,PwmDuty)
        time.sleep(2)
        motor.DCMotorMove(MotorName,CounterClockWise,PwmDuty)
        time.sleep(2)
        print "hello"
        motor.DCMotorStop(MotorName)
        time.sleep(2)
```

### 舵机

Motor Bridge Cape 的舵机接口如下图所示。

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/ServoBBG.jpg)

#### 舵机的功能

以下是关于舵机功能的简要说明。

**<u>ServoInit(ServoName,Frequency)</u>**

*描述*：初始化舵机并设置频率。

*ServoName*：1 ~ 6 代表 Servo1 ~ Servo6。

*Frequency*：设置舵机的频率，默认值为 50 Hz。

**<u>ServoMoveAngle(ServoName,Angle)</u>**

*描述*：驱动舵机，设置舵机角度。

*ServoName*：1 ~ 6 代表 Servo1 ~ Servo6。

*Angle*：0 ~ 180 代表 0 度到 180 度。

#### 舵机示例

将以下代码复制到您的项目中，并保存为一个 Python 文件。

```
import MotorBridge
import time
ServoName   =  2
Frequency   =  50
Angle1      =  20
Angle2      =  160
 
if __name__=="__main__":
    motor = MotorBridge.MotorBridgeCape()
    motor.ServoInit(ServoName,Frequency)
 
    while True:
        print 'Servo Test'
        motor.ServoMoveAngle(ServoName,Angle1)
        time.sleep(2)
        motor.ServoMoveAngle(ServoName,Angle2)
        time.sleep(2)
```

固件升级
--------

如果您的扩展板出现问题，请尝试升级固件。本节介绍如何使用 BeagleBone® Green 升级 Motor Bridge Cape 固件。此方法同样适用于 BBGW 和 BBB。

1. 将 Motor Bridge Cape 插入 BBG/BBGW/BBB，并通过 USB 数据线将 BBG 连接到您的电脑。

2. 让 BBG 连接到互联网，并通过 SSH 访问，如下图所示。

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/BBG1.PNG)

3. 通过执行以下命令从 Github 下载代码：

```
git clone https://github.com/Seeed-Studio/MotorBridgeCapeFirmware
```

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/BBG2.PNG)

4. 进入 "MotorBridgeCapeFirmware" 目录并执行 "make flash" 命令以刷新固件。

```
cd MotorBridgeCapeFirmware/ && make flash
```

几秒钟后，您可以在终端中看到 "Verification OK" 的信息。

5. 通过执行以下命令检查固件是否刷新成功：

```
i2cdetect -y -r 1
```

![](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/img/BBG3.PNG)

如果您发现 I2C 地址 0x4b，说明固件已成功刷新。

### 已知问题

#### 无法找到 I2C 地址

问：我已经更新了固件，但无法检测到 I2C 地址？

答：确保 P9_23 引脚为高电平，因为 P9_23 引脚连接到 STM32 的复位引脚。我在 MotorBridgeCape 类的初始化函数中将 P9_23 引脚设置为高电平。

#### 无法更新固件

问：当我更新固件时，错误信息显示无法找到 UART2？

答：您需要启用 BB-UART2，因为 BBG 通过 UART2 将固件刷新到 Motor Bridge Cape。

    vi /boot/uEnv.txt

然后取消注释 "cape_enable=capemgr.enable_partno=BB-UART2"。保存并退出编辑器，最后重启您的开发板。

#### 扩展板仍然无法工作

问：我已经成功更新了固件并可以检测到 I2C 地址，但为什么扩展板仍然无法工作？

答：请注意，板上有一个工作模式开关，确保开关已切换到工作模式。如果您仍有其他问题，请访问我们的论坛。

#### 无法运行 make flash

问：运行 make flash 时出现错误代码 "Can't init. Ensure BOOT0=1 BOOT1=0, and reset Device"？

答：请按照以下步骤解决问题。

- 第一步：运行 `sudo nano /boot/uEnv.txt`，然后在 uEnv.txt 的底部添加以下两行：

```
uboot_overlay_addr0=/lib/firmware/BB-UART2-00A0.dtbo
enable_uboot_cape_universal=1  
```

- 第二步：重启 BBGW
- 第三步：再次运行 `sudo make flash`。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/res/Motor%20Bridge%20Cape%20v1.0%20eagle%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

我们在 [geppetto](https://geppetto.seeedstudio.com/) 上提供了此部件，使用 Seeed 和 Geppetto 轻松进行模块化电子设计。立即开始构建吧。[geppetto.seeedstudio.com](https://geppetto.seeedstudio.com/)

资源
---------

- [PDF 格式原理图](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/res/Motor_Bridge_Cape_v1.0_sch.pdf)
- [Eagle 文件格式 PCB](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/res/Motor_Bridge_Cape_v1.0brd.rar)
- [Eagle 文件格式原理图](https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/res/Motor_Bridge_Cape_v1.0sch.rar)
- [Motor Bridge Cape 库文件](https://github.com/Seeed-Studio/MotorBridgeCapeforBBG_BBB)
- [Motor Bridge Cape 固件源代码](https://github.com/Lee-Kevin/MotorBridgeCapeFirmwareSourceCode)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0 -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>