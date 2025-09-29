---
description: 树莓派电机驱动板 v1.0
title: 树莓派电机驱动板 v1.0
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Raspberry_Pi_Motor_Driver_Board_v1.0
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/img/Raspberry_Pi_Motor_Board_v1.0.jpg)

树莓派电机驱动板 v1.0 基于飞思卡尔 MC33932 双 H 桥功率 IC，可以控制每个单桥峰值电流高达 5.0A 的感性负载。它让您可以使用树莓派 B/B+/A+ 和 Pi 2 Model B 驱动两个直流电机，独立控制每个电机的速度和方向。

树莓派电机驱动板 v1.0 支持非常宽的输入电压范围，从 6V 到 28V。此外，板载 DC/DC 转换器支持非常宽的输入电压范围，可以为树莓派提供 5V 电源，最大电流为 1000mA。因此，您只需要一个电源就可以驱动电机并为树莓派供电。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Raspberry-Pi-Motor-Board-v1.0-p-2411.html)

特性
--------

- 输出短路保护（对 VPWR 或 GND 短路）
- 通过内部恒定关断时间 PWM 进行过流限制（调节）
- 温度相关的电流限制阈值降低
- 兼容树莓派 3B/3B+/4

规格参数
--------------

<table border="1" cellspacing="0" width="600">
<tr>
<th scope="col">
项目
</th>
<th scope="col">
最小值
</th>
<th scope="col">
典型值
</th>
<th scope="col">
最大值
</th>
<th scope="col">
单位
</th>
</tr>
<tr align="center">
<th scope="row">
工作电压
</th>
<td>
6
</td>
<td>
/
</td>
<td>
28
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
DC/DC 输出：
</th>
<td>
/
</td>
<td>
5V/1000mA
</td>
<td>
/
</td>
<td>
</td>
</tr>
<tr align="center">
<th scope="row">
输出电流（每个通道）
</th>
<td>
/
</td>
<td>
2（连续工作）
</td>
<td>
5（峰值）
</td>
<td>
A
</td>
</tr>
<tr align="center">
<th scope="row">
PWM 频率
</th>
<td>
/
</td>
<td>
/
</td>
<td>
11
</td>
<td>
kHz
</td>
</tr>
<tr align="center">
<th scope="row">
输出占空比范围
</th>
<td>
0
</td>
<td>
/
</td>
<td>
100
</td>
<td>
 %
</td>
</tr>
<tr align="center">
<th scope="row">
逻辑输入电压
</th>
<td>
-0.3
</td>
<td>
/
</td>
<td>
7
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
工作温度
</th>
<td>
-40
</td>
<td>
/
</td>
<td>
120
</td>
<td>
℃
</td>
</tr>
<tr align="center">
<th scope="row">
尺寸
</th>
<td colspan="3">
91.20 *56.15* 32
</td>
<td>
mm
</td>
</tr>
</table>

硬件概述
-----------------

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/img/Raspberry_Pi_Motor_Board_v1.0_p3.jpg)

- **J1**：直流输入连接器。
- **J2**：电机驱动输出连接器。
- **EN,FT**：EN 控制和故障标志检测跳线。如果短接 EN 跳线，EN 信号将映射到 D4 引脚，您可以通过 D4 引脚控制 H 桥禁用输出或重置故障标志。如果短接 FT 跳线，故障标志信号将映射到 D3 引脚，您也可以从 D3 引脚读取故障标志。
- **IO**：逻辑电压电平选择跳线。您可以通过此跳线选择控制逻辑电压电平。
- **电源供应**：您必须通过 J1（直流输入连接器）为扩展板供电。输入电压范围可以设置为 6Vdc ~ 28Vdc。板载 DC/DC 转换器可以将直流输入电压转换为 5Vdc 输出电压来供应逻辑电路。DC/DC 转换器还可以通过"5V"引脚为微控制器板（Arduino/Seeeduino）供电，最大电流为 100mA。
- **电机接口**：Out 1 和 Out 2（Out 3 和 Out 4）连接电机 A（B）用于直流电机。

:::caution
工作期间请勿触摸 H 桥 IC 或 PCB 板。在满负载工作情况下，其温度可达到 100 度。
:::

使用方法
-----

此演示使用树莓派 B 来展示树莓派电机驱动板 v1.0 可用于控制直流电机正转和反转。

### 硬件安装

- 树莓派 B 和树莓派电机驱动板 v1.0
- 硬件连接如图所示

连接到网络并供电。

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/img/Raspberry_Pi_Motor_Board_v1.0_p6.jpg)

### 软件部分

1. 下载 [Motor_Driver.py](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/Motor_Driver.py) 和 [PiSoftPwn.py](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/PiSoftPwm.py) 到同一文件夹中。以下是 Motor_Driver.py 的代码。

```
#!/usr/bin/python
import RPi.GPIO as GPIO
import time
import signal   

from PiSoftPwm import *

#print '前进_1...'
#frequency = 1.0 / self.sc_1.GetValue()
#speed = self.sc_2.GetValue()

class Motor():
    def __init__(self):
    # MC33932 引脚
        self.PWMA = 25  
        self.PWMB = 22
        self._IN1 = 23  
        self._IN2 = 24 
        self._IN3 = 17
        self._IN4 = 27

    # 初始化 PWMA PWMB 
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(self.PWMA, GPIO.OUT)
        GPIO.setup(self.PWMB, GPIO.OUT)
        GPIO.output(self.PWMA, True)
        GPIO.output(self.PWMB, True)

    # 初始化 PWM 输出
        self.OUT_1  = PiSoftPwm(0.1, 100, self._IN1, GPIO.BCM)
        self.OUT_2  = PiSoftPwm(0.1, 100, self._IN2, GPIO.BCM)
        self.OUT_3  = PiSoftPwm(0.1, 100, self._IN3, GPIO.BCM)
        self.OUT_4  = PiSoftPwm(0.1, 100, self._IN4, GPIO.BCM)

        # 关闭 pwm 输出
        self.OUT_1.start(0)
        self.OUT_2.start(0)
        self.OUT_3.start(0)
        self.OUT_4.start(0)

        self.frequency = 0.01
        self.duty = 60

    def Setting(self, frequency, duty):
        self.frequency = frequency
        self.duty = duty

    def Go_1(self):
        self.OUT_1.changeBaseTime(self.frequency)
        self.OUT_2.changeBaseTime(self.frequency)
        self.OUT_1.changeNbSlicesOn(self.duty)
        self.OUT_2.changeNbSlicesOn(0)

    def Back_1(self):
        self.OUT_1.changeBaseTime(self.frequency)
        self.OUT_2.changeBaseTime(self.frequency)
        self.OUT_1.changeNbSlicesOn(0)
        self.OUT_2.changeNbSlicesOn(self.duty)

    def Go_2(self):
        self.OUT_3.changeBaseTime(self.frequency)
        self.OUT_4.changeBaseTime(self.frequency)
        self.OUT_3.changeNbSlicesOn(0)
        self.OUT_4.changeNbSlicesOn(self.duty)

    def Back_2(self):
        self.OUT_3.changeBaseTime(self.frequency)
        self.OUT_4.changeBaseTime(self.frequency)
        self.OUT_3.changeNbSlicesOn(self.duty)
        self.OUT_4.changeNbSlicesOn(0)

    def Stop(self):
        self.OUT_1.changeNbSlicesOn(0)
        self.OUT_2.changeNbSlicesOn(0)
        self.OUT_3.changeNbSlicesOn(0)
        self.OUT_4.changeNbSlicesOn(0)

if __name__=="__main__":
    motor=Motor()
    # 在进程中断时调用。将所有引脚设置为"输入"默认模式。
    def endProcess(signalnum = None, handler = None):
        motor.OUT_1.stop()
        motor.OUT_2.stop()
        motor.OUT_3.stop()
        motor.OUT_4.stop()
        motor.GPIO.cleanup()
        exit(0)

    # 为进程退出准备处理程序
    signal.signal(signal.SIGTERM, endProcess)
    signal.signal(signal.SIGINT, endProcess)
    signal.signal(signal.SIGHUP, endProcess)
    signal.signal (signal.SIGQUIT, endProcess)

    motor.Setting(0.01, 60)
    print '电机启动...'
    while True:
        print '电机 A 正向转动...'
        motor.Go_1()
        time.sleep(1)
        print '电机 A 反向转动...'
        motor.Back_1()
        time.sleep(1)
        print '电机 A 停止...'
     motor.Stop()
     time.sleep(1)
        print '电机 B 正向转动...'
        motor.Go_2()
        time.sleep(1)
        print '电机 B 反向转动...'
        motor.Back_2()
        time.sleep(1)
        print '电机 B 停止...'
     motor.Stop()
     time.sleep(1)

```

2.运行此程序。Raspberry Pi Motor Driver Board v1.0 上的 LED1、LED2 将交替点亮；LED3、LED4 也将交替点亮。

这意味着 Out 1 和 Out 2（Out 3 和 Out 4）连接电机 A（B）的正向和反向。

3.您可以看到如下现象：

串行控制台：

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/img/Raspberry_Pi_Motor_Board_v1.0_p4.jpg)

Raspberry Pi Motor Driver Board v1.0：
绿色 LED 和蓝色 LED 交替点亮。

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/img/Raspberry_Pi_Motor_Board_v1.0_p5.jpg)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/Raspberry_Pi_Motor_Driver_Board_v1.0_sch_pcb_20150119.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [Eagle 文件 Raspberry Pi Motor Driver Board v1.0](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/Raspberry_Pi_Motor_Driver_Board_v1.0_sch_pcb_20150119.zip)
- [PDF Raspberry Pi Motor Driver Board v1.0](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/Raspberry_Pi_Motor_Driver_Board_v1.0.pdf)
- [MC33932VW 数据手册](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/MC33932VW.pdf)
- [TD1519A 数据手册](https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/TD1519A.pdf)

<!-- 此 Markdown 文件创建自 https://www.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0 -->

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