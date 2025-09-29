---
description: XBee 扩展板
title: XBee 扩展板
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XBee_Shield
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/XBee-Shield/img/Xbshieldn2.jpg) ![](https://files.seeedstudio.com/wiki/XBee-Shield/img/Xbshield_bottom.jpg)

**XBee 扩展板**允许 **Arduino** 或 [Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/) 板通过 **Bee 兼容模块**（如 Zigbee 或 BlueTooth Bee）进行无线通信。它专为 **MaxStream 的 XBee 模块**设计，可用作 **串口** / **USB 替代品**。它可以用于通过 **Zigbee** / **Bluetooth Bee** 连接两个 **Seeeduino**，或无线连接 **Seeeduino** 与 PC。两个拨动开关决定 Bee 模块的 **Rxd** 和 **Txd** 引脚如何连接到 **Seeeduino** 引脚。这两个开关提供了将 Bee 模块的 **RxD** 和 **TxD** 线路连接到 **Seeeduino 硬件串口**或 **数字引脚 11 和 12** 或 **FTDI RxD 和 Txd 引脚**的选项。

**型号：[WLS114A0P](https://www.seeedstudio.com/depot/xbee%C3%82%C2%AE-shield-v11-by-seeedstudio-p-419.html?cPath=104_109)**

Seeed Studio 的 **XBee® 扩展板**源自 [Arduino XBee 扩展板](https://arduino.cc/en/Main/ArduinoXbeeShield)，具有以下特点：

* 更小的尺寸
* 大部分组件采用 SMT 封装
* 低成本

要使用 X-CTU 配合 [Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/)，请上传以下代码：

```c
void setup()
{
  DDRB=0;
  DDRC=0;
  DDRD=0;
}

void loop()
{

}  
```

## 特点  

1. 31mm X 41mm 的板子尺寸。
2. 与 Arduino/Seeeduino 通信
    * 通过引脚 11、12 的软件串口，或
    * 通过硬件串口

3. XBee 模块可以通过 USB 使用 X-CTU 配置
4. 所有引脚均有引出

## 应用场景  

* 使用 Bee 模块无线连接 Seeeduino / Arduino 与 PC。
* 将 **GPS Bee** 连接到 Arduino / Seeeduino。

## 注意事项  

* 在连接 Bee 模块或 Arduino 之前，请将拨动开关设置到正确位置。

## 原理图  

![](https://files.seeedstudio.com/wiki/XBee-Shield/img/Xbee_Shield_Schematic.jpg)

## 规格  

请参阅 [特点](https://wiki.seeedstudio.com/cn/XBee_Shield/#features "XBee_Shield#Features")。

## 机械尺寸  

XBee® 扩展板的尺寸为 3.1cm X 4.1cm。

## 使用方法  

通过 XBee 扩展板将 **Bee 模块**连接到 Arduino / Seeeduino。如果使用 Seeeduino，请将工作电压开关设置为 3.3V 位置。通常情况下，通过设置拨动开关（**TOG_1** 和 **TOG_2**）到 **左侧**位置，Bee 模块通过软件串口连接。请参考以下表格了解不同配置。

### 硬件安装  

![](https://files.seeedstudio.com/wiki/XBee-Shield/img/Seeeduino_XBeeShield_XBeePro.jpg) ![](https://files.seeedstudio.com/wiki/XBee-Shield/img/Seeeduino_BluetoothBee_Xbee_Shield.JPG)

#### XBee 扩展板外观及拨动开关位置  

![](https://files.seeedstudio.com/wiki/XBee-Shield/img/XBee_Shield_Outline.jpg)

<table>
<caption>Arduino</caption>
<tr>
<th>TOG_1</th>
<th>TOG_2</th>
<th>XBee Tx 连接到</th>
<th>XBee Rx 连接到</th>
</tr>
<tr>
<td width="200">左</td>
<td width="200">左</td>
<td width="300">数字引脚 11</td>
<td width="300">数字引脚 12</td>
</tr>
<tr>
<td>左</td>
<td>右</td>
<td>FT232 RxD</td>
<td>FT232 TxD</td>
</tr>
<tr>
<td>右</td>
<td>左</td>
<td>数字引脚 11</td>
<td>数字引脚 12</td>
</tr>
<tr>
<td>右</td>
<td>右</td>
<td>Atmege RxD</td>
<td>Atmege TxD</td>
</tr>
</table>
<table>
<caption>Arduino Mega</caption>
<tr>
<th>TOG_1</th>
<th>TOG_2</th>
<th>XBee Tx 连接到</th>
<th>XBee Rx 连接到</th>
</tr>
<tr>
<td width="200">左</td>
<td width="200">左</td>
<td width="300">数字引脚 51</td>
<td width="300">数字引脚 50</td>
</tr>
<tr>
<td>左</td>
<td>右</td>
<td>FT232 RxD</td>
<td>FT232 TxD</td>
</tr>
<tr>
<td>右</td>
<td>左</td>
<td>数字引脚 51</td>
<td>数字引脚 50</td>
</tr>
<tr>
<td>右</td>
<td>右</td>
<td>Atmege RxD0</td>
<td>Atmege TxD0</td>
</tr>
</table>

### 测试 Bee 的 AT 指令  

创建一个新代码，并将以下代码下载到 Arduino 板中。

```c
//串口中继 - Arduino 将在计算机和 Bee 扩展板之间建立
//一个串口连接，速率为 9600 bps 8-N-1
//计算机连接到硬件 UART
//Bee 扩展板连接到软件 UART

#include <NewSoftSerial.h>
#define RxD 11
#define TxD 12

NewSoftSerial mySerial(RxD,TxD);

void setup()
{
    pinMode(RxD, INPUT);
    pinMode(TxD, OUTPUT);
    mySerial.begin(9600);               // Bee 的波特率  
    Serial.begin(9600);                 // 终端的波特率  
}

void loop()
{
    if(Serial.available())
    {
       mySerial.print((unsigned char)Serial.read());
     }
    else  if(mySerial.available())
    {
       Serial.print((unsigned char)mySerial.read());
     }  

}
```

之后，启动您喜欢的串口终端软件，选择 Arduino 的 COM 端口，将其设置为 Bee 的默认波特率（XBee 默认是 9600 8-N-1），连接并发送指令。尝试向 Arduino 板发送 "+++"（不带引号）给 XBee 模块，XBee 应该会回复 "OK"。

### 发送 AT 指令的更新版本（适用于 V 1.0）  

上述代码可能适用于早期版本，但 SoftwareSerial 库现在已成为核心的一部分。以下代码几乎直接取自 [Arduino SoftwareSerial 手册](https://arduino.cc/en/Reference/SoftwareSerial)。

```c
/*
来自 Arduino SoftwareSerial 教程的示例
 */
#include <SoftwareSerial.h>

SoftwareSerial mySerial(11, 12); // RX, TX

void setup()  
{
  // 打开串口通信并等待端口打开：
  Serial.begin(9600);
  mySerial.begin(9600);
}

void loop() // 不断运行
{
  if (mySerial.available())
    Serial.write(mySerial.read());
  if (Serial.available())
    mySerial.write(Serial.read());
}
```

将以下内容翻译为简体中文：

---

将此代码上传到安装了 Xbee Shield 的 Arduino，启动串行监视器，此时 Arduino 串行端口将通过无线电连接到任何其他正在运行的 Xbee 无线电设备——您在串行监视器中输入的任何内容都将发送到其他无线电设备，反之亦然。

### 编程  

以下代码将 [Bluetooth Bee](https://seeeddoc.github.io/Bluetooth_Bee/) 配置为 **从设备**，并等待来自 PC 或其他主设备的连接请求。Bluetooth Bee 通过 **XBee®_Shield** 连接到 Seeeduino，如上图所示。

```
/*
BluetoothBee 示例代码 - 基于流控制的实现
2010,2011 版权所有 (c) Seeed Technology Inc. 保留所有权利。

作者: Visweswara R

此示例代码是免费软件；您可以根据 GNU 较小通用公共许可证的条款重新分发和/或修改，
该许可证由自由软件基金会发布；可以是版本 2.1，也可以是任何更高版本。

此库分发的目的是希望它能发挥作用，
但不提供任何保证；甚至没有隐含的适销性或特定用途的适用性保证。
有关详细信息，请参阅 GNU 较小通用公共许可证。

您应该已经收到与此库一起分发的 GNU 较小通用公共许可证副本；如果没有，请联系自由软件基金会，
地址：51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA

有关产品的更多详细信息，请访问 https://www.seeedstudio.com/depot/

将此代码上传到 Seeeduino 并按下复位按钮*/

#include <NewSoftSerial.h>   //软件串行端口
#define RxD 11
#define TxD 12
#define DEBUG_ENABLED  1

NewSoftSerial blueToothSerial(RxD,TxD);

void setup()
{
pinMode(RxD, INPUT);
pinMode(TxD, OUTPUT);
setupBlueToothConnection();  
}

void loop()
{
//典型的蓝牙命令 - 响应模拟：  
//从 PC 蓝牙串行终端输入 'a'
//请参阅 Wiki 获取说明  

  if(blueToothSerial.read() == st0">'a')
  {
    blueToothSerial.println(st0">"You are connected"); //您可以在此处编写蓝牙通信逻辑
  }  
}

void setupBlueToothConnection()
{
  blueToothSerial.begin(38400); //将 BluetoothBee 波特率设置为默认波特率 38400
  delay(1000);
  sendBlueToothCommand(\r\n+STWMOD=0\r\n");
  sendBlueToothCommand(\r\n+STNA=SeeeduinoBluetooth\r\n");
  sendBlueToothCommand(\r\n+STAUTO=0\r\n");
  sendBlueToothCommand(\r\n+STOAUT=1\r\n");
  sendBlueToothCommand(\r\n +STPIN=0000\r\n");
  delay(2000); // 此延迟是必要的。
  sendBlueToothCommand(\r\n+INQ=1\r\n");
  delay(2000); // 此延迟是必要的。
}  


//检查是否收到响应 "OK"
void CheckOK()
{
  char a,b;

  while(1)
  {
    if(blueToothSerial.available()) { a = blueToothSerial.read();   if(st0">'O' == a)
    {

      // 等待下一个字符 K。在某些情况下需要 available()，因为 K 并不是立即可用。
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

  while( (a = blueToothSerial.read()) sy3">!= sy2">-1)
  {
     //等待直到接收到所有其他响应字符
  }
}


void sendBlueToothCommand(char command[])
{
   blueToothSerial.print(command);
   CheckOK();
}
```

请参阅 **Bluetooth Bee 编程** 以获取更多信息。

## 常见问题  

请在此列出您的问题（如果有）。

## 支持  

如果您有任何问题或更好的设计想法，可以前往我们的 [论坛](https://www.seeedstudio.com/forum) 或 **许愿** 页面进行讨论。

## 版本追踪  

<table>
<tbody>
<tr>
<th>版本</th>
<th>描述</th>
<th>发布日期</th>
</tr>
<tr style={{fontSize: '90%'}}>
<td width={300}>XBee® Shield V1.1</td>
<td width={500}>Seeedstudio 发布的新版本</td>
<td width={200}>2009年7月6日</td>
</tr>
</tbody>
</table>

## Bug追踪  

Bug追踪是您提交在使用过程中发现的任何问题的地方。请写下您的意见，您的反馈将帮助我们改进产品。

## 额外创意  

额外创意是您可以写下关于该产品的项目想法或其他用途的地方。您也可以将它们写在项目页面上。

## 如何购买  

点击此处购买：[https://www.seeedstudio.com/depot/xbee%C3%82%C2%AE-shield-v11-by-seeedstudio-p-419.html?cPath=104_109](https://www.seeedstudio.com/depot/xbee%C3%82%C2%AE-shield-v11-by-seeedstudio-p-419.html?cPath=104_109)

## 许可  

本文档采用 [Creative Commons Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) 授权。源代码和库采用 [GPL/LGPL](http://www.gnu.org/licenses/gpl.html) 授权，详情请参阅源代码文件。

## 参见  

[Bluetooth Bee 文档](/cn/Bluetooth_Bee "Bluetooth_Bee") 展示了 **XBee®_Shield** 的使用方法。

## 外部链接  

链接到提供更多应用创意、文档/数据表或软件库的外部网页。

## 在线原理图查看器  

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/XBee-Shield/res/Eagle_XBee_Shield_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源  

* **[Arduino]**    [Arduino Xbee Shield 页面](https://arduino.cc/en/Main/ArduinoXbeeShield)

* **[Eagle]**    [Xbee_Shield_v1.0 的 Eagle 文件](https://files.seeedstudio.com/wiki/XBee-Shield/res/Eagle_XBee_Shield_v1.0.zip)

* **[PDF]** [XBee_Shield PDF](https://files.seeedstudio.com/wiki/XBee-Shield/res/XBee_Shield.pdf)

* **[Eagle]** [XBee_Shield 原理图](https://files.seeedstudio.com/wiki/XBee-Shield/res/XBee_Shield.sch)

* **[Eagle]**    [Xbee_Shield_v1.1 的 Eagle 文件](https://files.seeedstudio.com/wiki/XBee-Shield/res/Elage_xbee_shield_v1.1.zip)

* **[PDF]** [Xbee_shield_v1.1 PDF](https://files.seeedstudio.com/wiki/XBee-Shield/res/Xbee_shield_v1.11.pdf)

* **[EAGLE]** [Xbee_shield_v1.1 原理图](https://files.seeedstudio.com/wiki/XBee-Shield/res/Xbee_shield_v1.11.sch)

## 技术支持与产品讨论  

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供以下沟通方式以满足不同的需求和偏好。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>