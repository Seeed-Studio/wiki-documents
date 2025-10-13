---
description: Hercules 双通道 15A 6-20V 电机控制器
title: Hercules 双通道 15A 6-20V 电机控制器
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Hercules_Dual_15A_6-20V_Motor_Controller
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/img/Hercules_03.jpg)

Hercules 双通道 15A 6-20V 电机控制器是一款高电流电机驱动控制板，包括微控制器处理器、电机驱动电路、充电电路和保护电路。它提供了一个完整的电源、控制和驱动解决方案。

与 L298 相比，其半桥电机控制器 IR2104 和 N-MOSFET 在驱动重载设备方面具有显著优势，输出电流甚至可达 15A。Hercules 双通道电机控制器设计为宽电源范围，因此遥控车和模型飞机中常用的 7.4~11.1V 锂电池也可以使用。保险丝在过载时保护电路板，对应的 LED 显示保护状态。

该电机控制器与 Arduino 兼容。最重要的是，它专注于高扩展性。预留的标准 Grove 接口为您提供了方便的连接方式，可连接到电动车平台上的丰富模块，例如舵机和编码器，因此它支持多功能，您可以构建多样化的杰作。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Hercules-Dual-15A-6-20V-Motor-Controller-p-1515.html)

功能特点
--------

-   基于 MOSFET 的全桥驱动电路支持两个独立通道，每个通道可达 15A
-   LED 显示保险丝保护状态
-   多个 Grove 接口，方便连接舵机、编码器和传感器
-   ATMega328 控制器，与 Arduino 兼容

规格参数
--------

| 项目                      | 最小值 | 典型值 | 最大值 | 单位 |
|---------------------------|--------|--------|--------|------|
| 工作电压                  | 6.0    | -      | 20.0   | VDC  |
| 每通道电机电流            | -      | -      | 15     | A    |
| I/O 电压                  | -      | 5      | -      | VDC  |
| I/O 逻辑 (TTL)            | -      | 5      | -      | VDC  |
| 温度范围                  | -40    |        | +125   | C    |

硬件概览
--------

![](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/img/4WD_Robot_Controller_Interface_Function.jpg)

**A:** 编码器连接器。

**B:** Grove 连接器。

**C:** 舵机连接器。

**D:** ATMega328P 集成电路。

**E:** SPI 连接器。

**F:** 编程连接器。

**G:** 复位按钮。

**H:** 通道 1 电机保险丝。

**J:** 通道 2 电机保险丝。

**K:** 通道 1 电机螺丝端子。

**L:** 通道 2 电机螺丝端子。

**M:** 电池输入螺丝端子。

使用方法
--------

### 连接器概览

**编码器连接器**

在 [Hercules 平台](https://wiki.seeedstudio.com/cn/Skeleton_Bot-4WD_hercules_mobile_robotic_platform) 的电机中有编码器，用于测量电机速度。这两个连接器用于连接这些编码器。接头还提供 5VDC 电源以为编码器供电。

**Grove 连接器**

这些舵机连接器设置为标准舵机样式接头，包括 GND、+5V 和信号，用于控制舵机角度。

**电池输入螺丝端子**

电池连接器在输入螺丝端子上标有 GND 和 VM。VM 是电池的正极，GND 是电池的负极。请确保输入电压范围在 6~20V 之间，以避免任何损坏。

**电机螺丝端子**

电机螺丝端子标有 M1A / M1B（通道 1）和 M2A / M2B（通道 2）。电机没有特定的极性。如果电机运行方向与您期望的相反，您可以反转电机线以改变旋转方向。请注意，J21&J20 和 J22&J23 是并联连接的，也就是说，您应该将 [Hercules](https://wiki.seeedstudio.com/cn/Skeleton_Bot-4WD_hercules_mobile_robotic_platform) 的左侧两个电机连接到一个通道，右侧两个电机连接到另一个通道。

### 使用方法

<div class="admonition note">
<p class="admonition-title">注意</p>
控制器不能直接通过连接到 PC 的编程连接器供电以下载代码。
</div>

控制器必须通过 J1 电源螺丝端子供电，可以使用电池或 DC 电源（6-20V）。控制器使用两个 15A 慢熔保险丝保护“H”桥。在连接电源后：

-   将一个直流电机连接到通道 1 螺丝端子。
-   使用 UartSBee V4 和 USB 数据线将控制器连接到您的电脑。

![](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/img/IMG_0204-1-.JPG)

-   加载 [Motor Controller Library](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/Motor_Controller_Library.zip) 并运行 "motorDriverDemo" 程序。

```
    #include "motordriver_4wd.h"
    #include <seeed_pwm.h>

    void setup()
    {
        MOTOR.init(); //初始化所有引脚
    }

    void loop()
    {
        MOTOR.setSpeedDir(DIRF, 80); //设置电机 1 和电机 2 的方向：DIRF，速度：80（范围：0-100）。
        delay(3000);
        MOTOR.setSpeedDir(DIRR, 80); //设置电机 1 和电机 2 的方向：DIRR，速度：80（范围：0-100）。
        delay(3000);
    }
```

<div className="admonition note">
  <p className="admonition-title">注意</p>
  电机有两个运行方向：DIRF（前进）和 DIRR（后退）。如果电机运行方向相反，您可以反转电机线以改变旋转方向。
</div>

-   从电脑断开控制器。
-   通过电池输入螺丝端子将控制器连接到电池或 DC 电源。
-   现在您可以看到电机以一定速度旋转。

### 参考

"motorDriverDemo" 包含一些函数。要了解每一行代码如何影响结果，您需要仔细研究注释。请参考 motodriver_4wd 库中定义的以下函数。

**1. setStop1()**

描述：停止电机 1

**2. setStop2()**

描述：停止电机 2

**3. void setSpeedDir(int ispeed, unsigned char dir)**

描述：设置 motor1 和 motor2 的速度和方向

**4. void setSpeedDir1(int ispeed, unsigned char dir)**

描述：设置 motor1 的速度和方向

**5. void setSpeedDir2(int ispeed, unsigned char dir)**

描述：设置 motor2 的速度和方向

扩展使用
------------

基于 Hercules Dual 15A 6-20V 电机控制器，我们设计了一款遥控车，具有强大的动力和良好的减震效果。

### 遥控

**所需物品：**

- RFBee 模块
- Grove - 拇指摇杆
- Grove - XBee 扩展板
- 电池

RFBee 模块：用于远程发送数据。

Grove - 拇指摇杆：用于遥控汽车。

Grove - XBee 扩展板：提供使用 RFBee 的便利。我们可以使用 MiniUSB 插口为 RFBee 上传代码。

<div class="admonition note">
<p class="admonition-title">注意</p>
您可以使用 USB 数据线连接到 PC 来替代电池。
</div>

- 将 RFBee 插入 Grove - XBee 扩展板的 Bee 插槽。
- 下载 [RFBee Library](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/RFBee_Library.zip) 并解压到 Arduino IDE 的 libraries 文件夹中，路径为：..\arduino-1.0.1\libraries。
- 下载并上传示例代码：[Remote lvc](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/Remote_lvc.zip) 到一个 RFBee。在上传之前，需要选择 Tools->Board->Arduino Pro 或 Pro Mini (3.3V, 8MHz) w/ ATmega168，并从 Tools 菜单中选择正确的串口。
- 将 Grove - 拇指摇杆连接到 Grove - XBee 扩展板的 IIC Grove 接口。
- 将电池连接到 Grove - XBee 扩展板的电池接口。

![](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/img/Remote_Control.jpg)

<div className="admonition note">
  <p className="admonition-title">注意</p>
  您可以参考 Grove - XBee 扩展板 wiki 的接口功能说明。
</div>

### 接收端

**所需物品：**

- RFBee 模块
- Grove - XBee 扩展板
- Hercules Dual 15A 6-20V 电机控制器

RFBee 模块：用于远程发送数据。

Grove - XBee 扩展板：提供使用 RFBee 的便利。我们可以使用 MiniUSB 插口为 RFBee 上传代码。

15A 6-20V 电机控制器：驱动电机旋转。

- 将 RFBee 插入 Grove - XBee 扩展板的 Bee 插槽。
- 将 Grove - XBee 扩展板的 IIC 接口连接到电机控制器的 IIC 接口。
- 将四个电机连接到 Motor1A/Motor1B(Motor2A/Motor2B)。

我们使用 **4WD Hercules 移动机器人平台** 作为电机控制器，如下图所示：
![](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/img/4WD_Robot_Car_Body.jpg)

- 将代码上传到另一个 RFBee 模块。
```
    // rfbee 发送和接收示例
    #include <Arduino.h>
    #include <EEPROM.h>
    #include <RFBeeSendRev.h>
    #include <RFBeeCore.h>
    #include <Wire.h>

    #define FRAMESTART1                 0x53                // 数据帧起始1
    #define FRAMESTART2                 0x01                // 数据帧起始2
    #define FRAMEEND1                   0x2f                // 数据帧结束1
    #define FRAMEEND2                   0x45                // 数据帧结束2

    void sendToI2C(unsigned char ilen, unsigned char *idata)
    {
        Wire.beginTransmission(4);                           // 传输到设备 #4
        for(int i = 0; i<ilen; i++) {Wire.write(idata[i]);}  // 发送一个字节
        Wire.endTransmission();                              // 停止传输
        
    }

    void setup(){

        pinMode(10, OUTPUT);
        RFBEE.init();
        Wire.begin();
        Serial.begin(38400);
        Serial.println("ok");
    }

    unsigned char rxData1[200];               // 数据长度
    unsigned char len1;                       // 长度
    unsigned char srcAddress1;
    unsigned char destAddress1;
    char rssi1;
    unsigned char lqi1;
    int result1;

    unsigned char cntGetDta = 5;

    void loop()
    {
        if(RFBEE.isDta())
        {
            result1 = receiveData(rxData1, &len1, &srcAddress1, &destAddress1, (unsigned char *)&rssi1 , &lqi1);
            Serial.println(len1);
            for(int i = 0; i< len1; i++)
            {
                Serial.print(rxData1[i]);Serial.print("\t");
            }
            
            Serial.println();
            
            sendToI2C(6, rxData1);
        }
    }
```

- 下载 [Motodriver 4wd.zip](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/Motodriver_4wd.zip) 电机控制器库。在上传之前，需要选择 Tools->Board->Arduino Duemilanove w/ ATmega328。

### 结果

基于 Hercules Dual 15A 6-20V 电机控制器和 4WD Hercules 移动机器人平台的遥控车可以承载一个容量为 19L 的水容器。

![](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/img/4WD_Robot.jpg)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/Source_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



资源
---------

- [4WD机器人控制器 Eagle 文件](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/Source_file.zip)
- [4WD机器人控制器原理图.pdf](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/4WD_Robot_Controller_Schematic.pdf)
- [电机控制器库](https://files.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller/res/Motor_Controller_Library.zip)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Hercules_Dual_15A_6-20V_Motor_Controller -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>