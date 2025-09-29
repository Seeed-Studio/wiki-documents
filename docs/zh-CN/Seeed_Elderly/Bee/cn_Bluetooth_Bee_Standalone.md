---
description: 蓝牙 Bee
title: 蓝牙 Bee
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Bluetooth_Bee_Standalone
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/img/P3302883_02.jpg)

将你闲置的 Arduino 留给其他项目吧，这款两合一设备已经内置了 Arduino。带有 Arduino 的蓝牙 Bee 是蓝牙 Bee 的增强版。我们在其上添加了一个板载 ATMEGA168，使其成为一个功能齐全的 Arduino，同时保持与蓝牙 Bee 相同的尺寸和指令集。此外，它仍然可以堆叠在 XBee Carrier、XBee® Shield 和 UartSBee 上进行扩展或重新编程。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bluetooth-Bee-Standalone-p-1157.html)

## 特性

---

* 小尺寸
* 与蓝牙 Bee 相同的设置和配对方法
* 在蓝牙模块和 ATMEGA168 之间采用软件串口
* 兼容 XBee Carrier、XBee® Shield 和 UartsBee，用于扩展

### 硬件特性

* 典型 -80dBm 灵敏度。
* 高达 +4dBm 的 RF 发射功率。
* 完全符合 Bluetooth V2.0+EDR 3Mbps 调制标准。
* 3.3V 电源。
* 集成 PCB 天线。
* 可通过软件断开和监控蓝牙连接。
* xBee 兼容的接头。

### 软件特性

* 使用 SoftSerial 程序进行通信。
* 默认波特率：**38400**，数据位：8，停止位：1，无校验位，数据控制：有。
* 支持的波特率：9600、19200、38400、57600、115200、230400、460800。
* 使用 CTS 和 RTS 控制数据流。
* 通过 PC2 的上升沿断开蓝牙连接。
* 状态指示端口 PB2：低-未连接，高-已连接。
* PIO10 连接到红色 LED，PIO11 连接到蓝色 LED。当主设备和从设备配对时，红色和蓝色 LED 每 2 秒闪烁一次；未连接时，仅蓝色 LED 每秒闪烁两次。
* 默认情况下，通电后自动连接上次设备。
* 默认允许匹配设备连接。
* 默认 PINCODE：“0000”。
* 当因超出连接范围而断开时，30 分钟内自动重新连接。

## 应用场景

---

* 兼容 Arduino 的模块，支持蓝牙通信。
<!-- *   当与 [UartSBee](/cn/UartSBee_V4) 连接并上传 SoftSerial 程序到 **ATMEGA168** 时，可作为 PC 的蓝牙串口。 -->

:::caution
    * 需要 3.3V 电源。
    * 使用 UartSBee 时，请将工作电压设置为 3.3V。
    * 更改波特率的命令在复位后仍然有效，因此请记住下次使用的波特率。
:::

## 引脚定义和额定值

---
底视图：
 ![](https://files.seeedstudio.com/Grove-Red_LED/wiki/Bluetooth_Bee_Standalone/img/Bluetooth-standalone_pin.jpg)

* PD4 - PD7 = Arduino IDE 数字引脚 4 - 7  (5,6 PWM)

* PB0 , PB1 = Arduino IDE 数字引脚 8 , 9  (9 PWM)

* PC0 - PC3 = Arduino IDE 模拟引脚 0 - 3  (注意：PC2 通过上升沿断开蓝牙连接)

## 使用方法

---
<!-- 示例：使用 Bluetooth Bee-Standalone 控制 [Grove-Red_LED](/cn/Grove-Red_LED)，通过 XBee 扩展板实现。 -->

* 第一步

将 Grove-Red_LED 和 Bluetooth Bee-Standalone 模块连接到 XBee 扩展板，如下图所示。

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/img/Bluetooth_Bee-Standalone3.jpg)

* 第二步

使用 Arduino-IDE 编写程序，从 Bluetooth Softserial 端口读取信息，并识别以关闭或打开 LED。

```
/*
BluetoothBee 示例代码 - 基于流控制的实现
2010,2011 版权所有 (c) Seeed Technology Inc. 保留所有权利。

作者: Visweswara R      修改: Joinj

此示例代码是免费软件；您可以根据 GNU 较小通用公共许可证的条款重新分发和/或修改，
该许可证由自由软件基金会发布；可以选择版本 2.1 或更高版本。

此库分发的目的是希望它能发挥作用，但不提供任何保证；甚至不包括适销性或特定用途的隐含保证。
有关详细信息，请参阅 GNU 较小通用公共许可证。

您应该已经收到此库附带的 GNU 较小通用公共许可证副本；如果没有，请写信给自由软件基金会，
地址：51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA

有关产品的更多详细信息，请访问 https://www.seeedstudio.com/depot/

*/


/* 将此代码上传到 Seeeduino 并按下复位按钮 */

#include <NewSoftSerial.h>   //软件串口
#define RxD 2
#define TxD 3

#define DEBUG_ENABLED  1

NewSoftSerial blueToothSerial(RxD,TxD);

void setup()
{
    pinMode(RxD, INPUT);
    pinMode(TxD, OUTPUT);
    pinMode(5,OUTPUT);
    setupBlueToothConnection();
}

void loop()
{
    unsigned char control;
    unsigned char temp;
    while(temp!='4')  {
        temp=blueToothSerial.read();
    }
    Serial.println("您已连接");
    blueToothSerial.print("您已连接");      //您可以在此处编写蓝牙通信逻辑
    while(1)  {
        temp=blueToothSerial.read();
        switch(temp)  {
            case 'O':{while(temp!='N')  {temp=blueToothSerial.read();}  digitalWrite(5,HIGH);break;}
            case 'S':{while(temp!='H')  {temp=blueToothSerial.read();}  digitalWrite(5,LOW);break;}
            default:break;
        }
    }
}


void setupBlueToothConnection()
{
    blueToothSerial.begin(38400); //将 BluetoothBee 波特率设置为默认波特率 38400
    delay(1000);
    sendBlueToothCommand("\r\n+STWMOD=0\r\n");
    sendBlueToothCommand("\r\n+STNA=SeeedBluetooth-st\r\n");
    sendBlueToothCommand("\r\n+STAUTO=0\r\n");
    sendBlueToothCommand("\r\n+STOAUT=1\r\n");
    sendBlueToothCommand("\r\n +STPIN=0000\r\n");
    delay(2000); // 此延迟是必需的。
    sendBlueToothCommand("\r\n+INQ=1\r\n");
    delay(2000); // 此延迟是必需的。
}

//检查是否收到响应 "OK"
void CheckOK()
{
    char a,b;
    while(1)
    {
        if(blueToothSerial.available())
        {
            a = blueToothSerial.read();

            if('O' == a)
            {
                // 等待下一个字符 K。某些情况下需要 available()，因为 K 并不是立即可用。
                while(blueToothSerial.available())
                {
                    b = blueToothSerial.read();
                    break;
                }
                if('K' == b)
                {
                    break;
                }
            }
        }
    }

    while( (a = blueToothSerial.read()) != -1)
    {
        //等待接收所有其他响应字符
    }
}

void sendBlueToothCommand(char command[])
{
    blueToothSerial.print(command);
    CheckOK();
}
```

* 第三步

使用 USB 数据线将 XBee 扩展板连接到电脑，并将程序上传到 **ATMEGA168** 上的 Bluetooth Bee-Standalone。

* 第四步

从 XBee 扩展板移除 USB 数据线，并将 3.7V 电池连接到 XBee 扩展板，如下图所示。

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/img/Bluetooth_Bee-Standalone2.jpg)

* 第五步

<!-- 使用另一个 Bluetooth Bee 连接到 Bluetooth Bee-Standalone。如何连接？您可以参考 [Bluetooth Bee](/cn/Bluetooth_Bee)。连接后，您可以通过另一个 Bluetooth Bee 控制 LED。当您发送 "ON" 到 Bluetooth Bee-Standalone 时，LED 将亮起；发送 "SH"（SHUT 的缩写）时，LED 将熄灭。 -->

![](https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/img/Bluetooth_Bee-Standalone1.jpg)

## 其他想法

---

* [如何测试你的 Bluetooth Bee - 独立版](http://dejwoot.blogspot.hk/2012/07/howto-test-your-bluetooth-bee-standalone.html)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/res/Bluetooth_Bee-Standalone_schematic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---

* [Bluetooth Bee-Standalone Eagle 文件](https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/res/Bluetooth_Bee-Standalone_schematic.zip)。

* [NewSoftLibrary](http://arduiniana.org/NewSoftSerial/NewSoftSerial10c.zip)

* 在 Seeedstudio 论坛中可以找到关于如何设置 Bluetooth Bee 之间连接的[信息](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=687)。

* 在 Seeedstudio 论坛中可以找到关于 PC 连接 Bluetooth Bee 的[信息](https://forum.seeedstudio.com/viewtopic.php?f=18&amp;t=1436&amp;p=5637#p5637)。

* [文件: Bluetooth Bee Standalone v1.0.pdf](https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/res/Bluetooth_Bee_Standalone_v1.0.pdf "文件: Bluetooth Bee Standalone v1.0.pdf")

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