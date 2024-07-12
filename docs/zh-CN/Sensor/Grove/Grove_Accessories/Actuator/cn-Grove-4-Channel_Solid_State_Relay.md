---
title: Grove - 4通道固态继电器
description: Grove - 4通道固态继电器
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-4-Channel_Solid_State_Relay/
slug: /cn/Grove-4-Channel_Solid_State_Relay
last_update:
  date: 03/19/2024
  author: WuFeifei
---


![](https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/img/5.jpg)

与线圈不同，封装固态继电器（SSR）使用的是诸如可控硅整流器和晶体管之类的功率半导体器件，这些器件提供的开关速度要比机械继电器快得多。Grove - 4通道固态继电器基于高质量的G3MC202P模块，它允许您使用5VDC来控制最大240VAC的电压。在Grove接口的帮助下，使用SSR与您的Arduino变得非常方便。

我们使用板载的 [STM32F030F4P6](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/STM32F030F4P6.pdf) 来单独控制各个通道。来自Arduino或其他板卡的命令通过I2C接口进行传输，板载的STM32F030F4P6会解析这个命令，从而让你能够控制你想要控制的开关。

根据不同的应用场景，我们为您准备了一系列固态继电器。

[Grove - 第二代固态继电器](https://wiki.seeedstudio.com/Grove-Solid_State_Relay_V2)

[Grove - 2通道固态继电器](https://wiki.seeedstudio.com/Grove-2-Channel_Solid_State_Relay)

[Grove - 4通道固态继电器](https://wiki.seeedstudio.com/Grove-4-Channel_Solid_State_Relay)

[Grove - 8通道固态继电器](https://wiki.seeedstudio.com/Grove-8-Channel_Solid_State_Relay)

<p style={{}}><a href="https://www.seeedstudio.com/Grove-4-Channel-Solid-State-Relay-p-3130.html
" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特点

+ 低功耗
+ 寿命长
+ 可选的I2C地址

+ 与机械继电器相比的优势：

  + 固态继电器与电磁继电器相比具有更快的切换速度，且没有物理触点磨损
  + 完全静音操作
  + 无物理触点意味着无火花，允许在爆炸性环境中使用，因为在切换过程中不会产生火花，这一点至关重要
  + 寿命更长，即使多次激活，由于没有移动部件磨损和没有触点磨损或积碳
  + 紧凑、薄型单块结构固态继电器，采用一体化引线框架，集成了PCB、端子和散热器，比机械继电器更小，可以集成更多通道

+ 缺点：

  + 闭合时电阻较高（产生热量），并增加了电气噪声
  + 断开时电阻较低，并存在反向漏电流
  + 仅适用于交流负载

## 规格参数

|项目|值|
|---|---|
|操作输入电压|4~6V|
|额定输入电压|5V|
|额定负载电压|100 至 240 VAC 50/60 Hz|
|负载电压范围|75 至 264 VAC 50/60 Hz|
|负载电流|0.1 至 2 A|
|漏电流|最大 1.5 mA (在 200 VAC 下)|
|绝缘电阻|最小 1,000 MΩ (在 500 VDC 下)|
|操作时间|1/2 of load power source cycle + 最大 1 ms|
|释放时间|负载电源周期的一半 + 最大 1 ms|
|存储温度|-30°C 至 100°C (无结冰或凝结)|
|操作温度|-30°C 至 80°C (无结冰或凝结)|
|操作湿度| 45% 至 85%RH |
|输入接口|I^2^C|
|默认I^2^C地址|0x11 或 0x12|
|可选I^2^C地址 |0x00 ~ 0x7F|
| 输出接口      |DIP  母座蓝色2针 x4|
|过零检测|支持|
|认证|UL /  CSA|

:::注意
        请注意，**漏电流**为1.5mA，这足以驱动低功耗LED。因此，当继电器关闭时，LED可能仍然会发出微弱的光。
:::

## 应用场景

+ 需要低延迟切换的操作，例如舞台灯光控制
+ 需要高稳定性的设备，例如医疗设备、交通信号灯
+ 需要防爆、防腐、防潮的场合，例如煤炭、化工等行业

## 硬件概述

### 引脚映射

![](https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/img/pin_map.jpg)

![](https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/img/pin_map_back.jpg)

:::注意
    - 开关1-4的引脚功能相同，因此对于其他开关，您可以参考**LOAD1**/**LOAD2**的引脚配置。
        - 在PCB的背面，有两个接口：SWD和I^2^C。在编程固件时，默认使用SWD接口。如果您想使用I^2^C（实际上作为启动UART工作），您需要将
        **BOOT** 引脚设置为高电平.
            :::

### 原理图

**继电器控制**

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/img/schematic_.jpg)

**K1** 是继电器模块。当在 **INT+** 和 **INT-** 之间施加5V电压时，继电器将被打开。此时**，LOAD1** 将与 **LOAD2** 连接。我们使用NPN晶体管 **Q1**(BC817-40) 来控制 **INT+** 和 **INT-** 之间的电压。

**CTR** 是来自Arduino或其他板卡的控制信号。如果没有信号，10k的R2电阻将 **CTR** 拉低**，Q1** 的'栅极'（端口1）将为0V，Q1将关闭，因此K1也将关闭。如果 **CTR** 变为5V，那么Q1将打开。K1的 **INT-** 将与系统的GND连接，对于K1来说**，INT+** 和 **INT-** 之间将有5V电压，因此K1将打开，并且 **LOAD1** 将与 **LOAD2** 连接。

**双向电平转换电路**
![](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/schematic_1.jpg)

这是一个典型的双向电平转换电路，用于连接I^2^C总线的两个不同电压部分。该传感器的I^2^C总线使用3.3V，如果Arduino的I^2^C总线使用5V，则需要此电路。在上面的原理图中，**Q17** 和 **Q18** 是N沟道MOSFET （型号为[2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf)），它们作为双向开关工作。为了更好地理解这部分内容，您可以参考[AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

:::注意
       本节中我们仅展示了部分原理图，如需完整文档，请参考 [资源](/#resources)
:::

## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::警告
    上面提到的支持平台是模块软件或理论兼容性的指示。在大多数情况下，我们只提供针对Arduino平台的软件库或代码示例。我们无法为所有可能的MCU平台提供软件库/示例代码。因此，用户必须编写自己的软件库。
:::

## 入门指南

### 玩转Arduino

#### 硬件

**所需材料**

| Seeeduino V4.2 | 基础扩展板 | Grove - 4通道固态继电器 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Grove-4-Channel-Solid-State-Relay-p-3130.html" target="_blank">立即获取</a>|

:::注意
    **1** 请轻轻插入USB线，否则可能会损坏端口。请使用内部有4根线的USB线，2根线的电缆无法传输数据。如果您不确定您手中的线缆是否合适，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 进行购买。

    **2** 购买每个Grove模块时都会附带一根Grove电缆。如果您不小心丢失了Grove电缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 进行购买。
:::

+ **步骤 1.** 将Grove - 4通道固态继电器连接到基础扩展板的**I^2^C**端口。

+ **步骤 2.**  将Grove - 基础扩展板插入Seeeduino中。

+ **步骤 3.** 通过USB线将Seeeduino连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/img/connect.jpg)

:::注意
        如果没有Grove基础扩展板，我们也可以直接将此模块连接到Seeeduino，如下所示。
:::

| Seeeduino | Grove - 4通道固态继电器 |
| --------- | ----------------------- |
| 5V        | 红色                    |
| GND       | 黑色                    |
| SDA       | 白色                    |
| SCL       | 黄色                    |

#### 软件

:::注意
        如果您是第一次使用Arduino，我们强烈建议您在开始之前先查看 [Arduino 入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

+ **步骤 1.** 从Github下载 [Multi_Channel_Relay_Arduino](https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library) 库。

+ **步骤 2.** 请参考 [如何安装库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) 以在Arduino中安装库。

+ **步骤 3.** 重启Arduino IDE。通过以下路径打开示例：**文件 --> 示例 --> Multi Channel Relay Arduino Library --> four_channel_relay_control**。

![](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/path.jpg)

或者，您也可以直接点击代码块右上角的 ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) 图标，将以下代码复制到Arduino IDE中的新草图中。

```c++
#include <multi_channel_relay.h>

Multi_Channel_Relay relay;

void setup()
{
  Serial.begin(9600);
  while(!Serial);   

   /* Scan I2C device detect device address */
  uint8_t old_address = relay.scanI2CDevice();
  if((0x00 == old_address) || (0xff == old_address)) { 
    while(1);
  }

  Serial.println("Start write address");
  relay.changeI2CAddress(old_address, 0x11);  /* Set I2C address and save to Flash */  
  Serial.println("End write address");

  /* Read firmware  version */
  Serial.print("firmware version: ");
  Serial.print("0x");
  Serial.print(relay.getFirmwareVersion(), HEX);
  Serial.println();
}

void loop()
{

  /** 
   *  channle: 8 7 6 5 4 3 2 1
   *  state: 0b00000000 -> 0x00  (all off)
   *  state: 0b11111111 -> 0xff  (all on)
  */  

  /* Begin Controlling Relay */ 
  Serial.println("Channel 1 on");
  relay.turn_on_channel(1);  
  delay(500);
  Serial.println("Channel 2 on");
  relay.turn_off_channel(1);
  relay.turn_on_channel(2);
  delay(500);
  Serial.println("Channel 3 on");
  relay.turn_off_channel(2);
  relay.turn_on_channel(3);  
  delay(500);
  Serial.println("Channel 4 on");
  relay.turn_off_channel(3);
  relay.turn_on_channel(4);  
  delay(500);
  relay.turn_off_channel(4);

  relay.channelCtrl(CHANNLE1_BIT | 
                    CHANNLE2_BIT | 
                    CHANNLE3_BIT | 
                    CHANNLE4_BIT);
  Serial.print("Turn all channels on, State: ");
  Serial.println(relay.getChannelState(), BIN);
  
  delay(2000);

  relay.channelCtrl(CHANNLE1_BIT |                   
                    CHANNLE3_BIT);
  Serial.print("Turn 1 3 channels on, State: ");
  Serial.println(relay.getChannelState(), BIN);

  delay(2000);

  relay.channelCtrl(CHANNLE2_BIT | 
                    CHANNLE4_BIT);
  Serial.print("Turn 2 4 channels on, State: ");
  Serial.println(relay.getChannelState(), BIN);
  
  delay(2000);


  relay.channelCtrl(0);
  Serial.print("Turn off all channels, State: ");
  Serial.println(relay.getChannelState(), BIN);
  
  delay(2000);
}
```

+ **步骤 4.** 上传示例程序。如果您不知道如何上传代码，请查看 [[如何上传代码]](https://wiki.seeedstudio.com/Upload_Code/)。

+ **步骤 5.** 通过点击**工具->串口监视器**打开Arduino IDE的**串口监视器**。或者同时按下++ctrl+shift+m++键。

:::提示
  如果一切正常，您将看到结果。同时，您会看到板载LED灯交替亮起和熄灭。
:::

```c++
Scanning...
I2C device found at address 0x12 !
Found 1 I2C devices
Start write address
End write address
firmware version: 0x1
Channel 1 on
Channel 2 on
Channel 3 on
Channel 4 on
Turn all channels on, State: 1111
Turn 1 3 channels on, State: 101
Turn 2 4 channels on, State: 1010
Turn off all channels, State: 0
Channel 1 on
Channel 2 on
```

![](https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/img/gif.gif)

:::注意
        本示例中我们没有添加负载，如果您想查看如何添加负载，请查阅 [Grove -  2通道固态继电器](https://wiki.seeedstudio.com/Grove-2-Channel_Solid_State_Relay)的文档。
:::

#### 功能描述

<table style={{tableLayout: 'fixed', width: 749}}>
  <colgroup>
    <col style={{width: 233}} />
    <col style={{width: 516}} />
  </colgroup>
  <tbody><tr>
      <th>功能</th>
      <th>描述</th>
    </tr>
    <tr>
      <td><span style={{fontWeight: 'bold'}}>更改I2C地址(uint8_t old_addr, uint8_t new_addr)</span></td>
      <td>更改设备地址，其中 <span style={{fontWeight: 'bold'}}>old_addr </span>是当前的地址； <span style={{fontWeight: 'bold'}}>new_addr </span>是您想要使用的新地址。只有输入正确的旧地址，新地址才能被成功设置。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>scanI2CDevice()</span></td>
      <td>用于获取 <span style={{fontWeight: 700}}>old_addr </span>（当前地址）。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 'bold'}}>getChannelState()</span></td>
      <td>用于获取每个通道的状态，例如“State: 1111”，这表示所有的继电器都已打开。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>getFirmwareVersion()</span></td>
      <td>用于获取烧录到板上微控制器（MCU）的固件版本。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>channelCtrl(uint8_t state)</span></td>
      <td>用于立即更改您选择的所有通道。 <span style={{fontWeight: 600}}>state参数列表包含：</span><br /> <br />  <span style={{fontWeight: 'bold'}}>CHANNLE1_BIT</span>或  <span style={{fontWeight: 'bold'}}>0x01</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE2_BIT</span>  或  <span style={{fontWeight: 'bold'}}>0x02</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE3_BIT</span>  或  <span style={{fontWeight: 'bold'}}>0x04</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE4_BIT</span>  或  <span style={{fontWeight: 'bold'}}>0x08</span><br /><br />例如: <br /><span style={{fontWeight: 600}}>        channelCtrl(CHANNLE2_BIT|CHANNLE3_BIT),</span>将打开通道2和通道3。<br /><span style={{fontWeight: 600}}>        channelCtrl(0x01|0x02|0x08), </span>将打开通道1、通道2和通道4。<br /><span style={{fontWeight: 600}}>        channelCtrl(0), </span>将关闭所有通道。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>turn_on_channel(uint8_t channel)</span></td>
      <td>用于打开单个通道。<br />例如:<br />        <span style={{fontWeight: 600}}>turn_on_channel(3), </span>将打开通道3。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>turn_off_channel(uint8_t channel)</span></td>
      <td>用于关闭单个通道。<br />例如: <br /><span style={{fontWeight: 600}}>       turn_off_channel(3), </span>将关闭通道3。</td>
    </tr>
  </tbody></table>



如果您想要更改地址，您需要在使用前设置地址。例如，我们想要将其更改为0x2f。我们可以使用以下代码。

```C++
#include <multi_channel_relay.h>

Multi_Channel_Relay relay;

void setup()
{
  Serial.begin(9600);
  while(!Serial);   

   /* Scan I2C device detect device address */
  uint8_t old_address = relay. ;
  if((0x00 == old_address) || (0xff == old_address)) { 
    while(1);
  }

  Serial.println("Start write address");
  relay.changeI2CAddress(old_address,0x2f);  /* Set I2C address as 0x2f and save it to the EEPRom */  
  Serial.println("End write address");

  /* Read firmware  version */
  Serial.print("firmware version: ");
  Serial.print("0x");
  Serial.print(relay.getFirmwareVersion(), HEX);
  Serial.println();
}


```

## 常见问题解答 

**Q1：如何烧录固件？**

**A1:** 我们推荐您使用J-Link烧录器和WSD接口来烧录固件。

您可以在这里下载固件：

[出厂固件](https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/res/Grove-4-Channel-Solid-Relay-Firmware.bin)

我们推荐您使用J-Flash软件来进行操作：

[J-flash烧录器](https://www.segger.com/downloads/jlink#J-LinkSoftwareAndDocumentationPack)

![](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/J-flash.jpg)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/res/Grove%20-%204-Channel%20Solid%20State%20Relay.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

+ **[Zip]** [Grove-4通道单刀双掷继电器Eagle文件](https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/res/Grove%20-%204-Channel%20Solid%20State%20Relay.zip)
+ **[Zip]** [多通道继电器Arduino库](https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library/archive/master.zip)
+ **[Bin]** [出厂固件](https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/res/Grove-4-Channel-Solid-Relay-Firmware.bin)
+ **[PDF]** [G3MC202P的数据手册](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/res/G3MC202p.pdf)
+ **[PDF]** [STM32的数据手册](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/STM32F030F4P6.pdf)

## 项目

这是本产品的介绍视频，里面包含了一些简单的演示，您可以尝试操作一下。

<iframe width="560" height="315" src="https://www.youtube.com/embed/5uBLf_a0DNc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您在使用我们的产品时能够拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足您不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
