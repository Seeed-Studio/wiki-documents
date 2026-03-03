---
description: Xadow - 电机驱动模块
title: Xadow - 电机驱动模块
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_Motor_Driver
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/img/x%20motor.jpg)

Xadow Motor 可用于控制直流电机。其核心是低饱和度的双通道双向电机驱动芯片 LB1836M，由 ATmega168 控制，负责与 Xadow 主板的 I2C 通信。Xadow Motor 支持可更改的 I2C 地址，并需要单独的低功耗电源来驱动电机。

## 规格
---
- 电机驱动芯片：LB1836M
- 电池电压：2.5V ~ 9V
- 每通道输出电流（最大值）：300mA
- 通信模式：I2C
- I2C 地址可更改
- 尺寸：25.43mm x 20.35mm

## 产品视图
---
![](https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/img/Xadow_Motor_Black_View.png)

- ①：LB1836 IC，低饱和度双通道双向电机驱动芯片。
- ②：电机电源连接。
- ③,④：直流电机连接。
- ⑤,⑥：用于设置 I2C 地址。A0 和 A1 默认连接到高电平（H）。您可以通过对电路板进行一些修改将其更改为低电平（L）。详细信息请参考文档。
- ⑦：SPI 接口，用于上传 ATmega168 的固件。
- ⑧：微控制器 ATmega168。
- ⑨：用于选择 ATmega168 IC 的电源。在默认模式下，DVCC 连接到 VOUT，这意味着电源来自电机电源。当 DVCC 连接到 3.3V 时，Xadow 主板为 ATmega168 提供电源。

## 演示
---
Xadow Motor 可以同时驱动两个直流电机。基于我们提供的库，可以更轻松地让电机运行。现在让我们开始吧。

:::note
    该库不支持控制步进电机。
:::
**硬件安装：**

1. 将直流电机连接到 J5 和 J6 接口。您可以使用电烙铁进行焊接，以确保连接固定。我们为您配置了一块 3.7V 锂电池，因此您无法使用该电池驱动高功率电机。

2. 将电池连接到 Xadow Motor 的电池接口。如果没有电池，电机将无法旋转。

3. 将 Xadow Motor 连接到 Xadow 主板。不要忘记安装 Xadow 驱动程序。

:::note
    当将 Xadow 三轴加速度计连接到 Xadow 主板时，您需要注意连接方向。连接方法是一个 Xadow 模块的未填角需要连接到另一个模块的直角（参见每个 Xadow 模块的四个角）。
:::
上传代码：

4. 下载 [Xadow Motor 库](https://github.com/Seeed-Studio/Xadow_Motor_Driver) 并安装到 Arduino 库中。

5. 通过路径直接打开代码：File -> Example -> xadow_motor -> motorCtrl。

```
/*
有四种电机状态可供使用：

-MSTOP                -> 停止
-MFOR                        -> 前进
-MREV                        -> 后退
-MHOLD                -> 保持当前状态
**注意：
有四个地址可供选择，取决于硬件，
更多信息请参考 www.seeedstudio.com
-MOTORADDRESS0 0x40 // A0 低电平，A1 低电平
-MOTORADDRESS1 0x41 // A0 高电平，A1 低电平
-MOTORADDRESS2 0x42 // A0 低电平，A1 高电平
-MOTORADDRESS3 0x43 // A0 高电平，A1 高电平
使用此函数：setMotorRun(unsigned char sMotorA, unsigned char sMotorB);
您可以控制两个电机。
*/

#include <Wire.h>

#include "XadowMotor.h"

void setup()
{
    Serial.begin(38400);
    xadowMotor.begin(MOTORADDRESS3);
}

void loop()
{

    Serial.print("电池电压 :");
    Serial.println(xadowMotor.getBatVol());

    xadowMotor.setMotorRun(MFOR, MFOR);

    delay(2000);

    xadowMotor.setMotorRun(MSTOP, MSTOP);

    delay(500);

    xadowMotor.setMotorRun(MREV, MREV);

    delay(2000);

    xadowMotor.setPwrDown();
    delay(1000);
    xadowMotor.setWakeUp();

}
```

在此代码中，函数 xadowMotor.begin(MOTORADDRESS3) 用于设置 Xadow Motor 的 I2C 地址。当您更改 A0 引脚和 A1 引脚的连接时，需要更改参数 "MOTORADDRESS3"。详细信息请参考文档。

6. 上传代码。记得在 Arduino 环境的 Tools | Board 菜单中选择 Seeeduino Xadow，并选择 Xadow 主板使用的正确串口。

现在您可以看到您的电机会以固定的时间间隔向前或向后运行。通过打开串行监视器，您可以观察到电池电压。

## 参考
---
Xadow Motor 有四个 I2C 地址，这些地址由 A0 引脚和 A1 引脚决定。默认情况下，A0 和 A1 在板内连接到 H。但您可以更改它。例如，使用焊接工具断开 H 和 A0 之间的连接，然后将 ADR0 和 L 焊接起来，这样就可以将 A0 的值设置为 L。您可以在下表中找到硬件 I2C 地址与 A0 和 A1 值之间的关系。

|I2C 地址	|A0 输入状态| A1 输入状态|	代码中的对应参数|
|---|:---:|:---:|---|
|0x40	|L|	L|	MOTORADDRESS0|
|0x41|	L|	H|	MOTORADDRESS1|
|0x42	|H|	L|	MOTORADDRESS2|
|0x43	|H	|H|	MOTORADDRESS3|


## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/res/Xadow_Motor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源
---
- [Xadow Motor Eagle 文件](https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/res/Xadow_Motor_Eagle_File.zip)
- [Xadow Motor PDF 格式原理图](https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/res/Xadow_Motor_Schematic_in_PDF.pdf)
- [Xadow Motor 库](https://github.com/Seeed-Studio/Xadow_Motor_Driver)
- [LB1836 数据手册](https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/res/LB1836M.PDF)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>