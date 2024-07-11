---
title: Grove - 8通道固态继电器
description: Grove - 8通道固态继电器
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-8-Channel_Solid_State_Relay/
slug: /cn/Grove-8-Channel_Solid_State_Relay
last_update:
  date: 03/19/2024
  author: WuFeifei
---


![](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/img/main.jpg)

与使用线圈的机械继电器不同，封装型固态继电器（SSR）使用诸如晶闸管和晶体管等功率半导体器件，这些器件提供了比机械继电器更快的切换速度。**Grove - 8通道固态继电器**基于高质量的**G3MC202P**模块，允许您使用5VDC来控制最大240VAC的电压。借助Grove接口，使用SSR与您的Arduino变得非常方便。

我们使用板载的[STM32F030F4P6](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/STM32F030F4P6.pdf)来单独控制各通道。来自Arduino或其他控制板的指令通过I2C接口进行传输，板载的STM32F030F4P6将解析这些指令，这样您就可以控制您想要的开关了。

根据不同的应用场景，我们为您准备了一系列固态继电器。

[Grove - 固态继电器 V2](https://wiki.seeedstudio.com/Grove-Solid_State_Relay_V2)

[Grove - 2通道固态继电器](https://wiki.seeedstudio.com/Grove-2-Channel_Solid_State_Relay)

[Grove - 4通道固态继电器](https://wiki.seeedstudio.com/Grove-4-Channel_Solid_State_Relay)

[Grove - 8通道固态继电器](https://wiki.seeedstudio.com/Grove-8-Channel_Solid_State_Relay)

<p style={{}}><a href="https://www.seeedstudio.com/Grove-8-Channel-Solid-State-Relay-p-3131.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特点

+ 低功耗
+ 寿命长
+ 可选I2c地址

+ 与机械继电器相比的优势：

  + 固态继电器与电磁继电器相比具有更快的切换速度，且没有物理接触点会磨损
  + 完全静音运行
  + 无物理接触意味着不会产生火花，允许在爆炸性环境中使用，在这些环境中，切换过程中不能产生火花至关重要
  + 寿命更长，即使多次激活，也没有运动部件磨损和接触点磨损或积碳问题
  + 紧凑、薄型的一体式单块结构SSR集成了PCB、端子和散热器，比机械继电器小得多，可以集成更多通道

+ 缺点：

  + 闭合时电阻较高（产生热量），电气噪声增大
  + 断开时电阻较低，存在反向泄漏电流
  + 仅适用于交流负载

## 规格

|项目|值|
|---|---|
|工作输入电压|4~6V|
|额定输入电压|5V|
|额定负载电压|100 至 240 VAC 50/60 Hz|
|负载电压范围|75 至 264 VAC 50/60 Hz|
|负载电流|0.1 至 2 A|
|泄漏电流|最大1.5 mA (at 200 VAC)|
|绝缘电阻|最小1,000 MΩ (at 500 VDC)|
|动作时间|负载电源周期的一半 +1 ms 最大|
|释放时间|负载电源周期的一半 + 1 ms 最大|
|存储温度|-30°C 至 100°C (无结冰或凝结)|
|工作温度|-30°C 至 80°C (无结冰或凝结)|
|工作湿度| 45% 至 85%RH |
|输入接口|I^2^C|
|默认 I^2^C 地址|0x11 或 0x12|
|可选 I^2^C 地址 |0x00 ~ 0x7F|
|输出接口|DIP  蓝色母头 2 pin x8|
|过零检测|支持|
|认证|UL /  CSA|

:::注意
        请注意**泄漏电流**，1.5mA足以驱动低功耗LED，因此当继电器断开时，LED可能仍会发出微弱的光。
:::

## 应用领域

+ 需要低延迟切换的操作，例如舞台灯光控制
+ 需要高稳定性的设备，例如医疗设备、交通信号灯
+ 需要防爆、防腐、防潮的环境，例如煤炭、化工行业。

## 硬件概述

### 引脚映射

![](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/img/pin_map.jpg)

![](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/img/pin_map_back.jpg)

:::注意
    -  开关1-8具有相同的引脚功能，因此对于其他开关，您可以参考**LOAD1**/**LOAD2**。
        -  在PCB板的背面，有两个接口：SWD和I^2^C。在编程固件时，默认使用SWD接口。如果您想使用I^2^C（实际上作为启动UART工作），您应该将
        **BOOT** 设置为高电平。
            :::

### 原理图

**继电器控制**

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/img/schematic_.jpg)

**K1** 是继电器模块。当在 **INT+** 和 **INT-** 之间施加5V电压时，继电器将被打开。然后**，LOAD1** 将与 **LOAD2** 连接。我们使用NPN晶体管 **Q1**(BC817-40) 来控制 **INT+** 和 **INT-** 之间的电压。

**CTR** 是来自Arduino或其他板的控制信号。如果没有信号，它会被10k的R2下拉**，Q1** 的'栅极'（端口1）将为0V，Q1将关闭，因此K1也将关闭。如果 **CTR** 变为5V，那么Q1将打开。K1的 **INT-** 将与系统的GND连接，对于K1来说**，INT+** 和 **INT-** 之间将有5V的电压，因此K1将打开，并且 **LOAD1** 将连接到 **LOAD2**。

**双向电平移位电路**
![](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/schematic_1.jpg)

这是一个典型的双向电平移位电路，用于连接I^2^C总线上两个不同电压的部分。这个传感器的I<sup>2</sup>C总线使用3.3V，如果Arduino的I<sup>2</sup>C总线使用5V，那么就需要这个电路。在上面的原理图中，**Q17** 和 **Q18** 是N沟道MOSFET [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf)，它们作为双向开关工作。为了更好地理解这一部分，您可以参考[AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)。

:::注意
        在本节中，我们只向您展示了部分原理图，如需完整文档，请参考 [资源](/#resources)部分
:::

## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::注意
    上述提到的受支持平台是对模块软件或理论兼容性的指示。在大多数情况下，我们只提供适用于Arduino平台的软件库或代码示例。由于无法为所有可能的MCU平台提供软件库/演示代码，因此用户需要编写自己的软件库。
:::

## 入门指南

### 玩转 Arduino

#### 硬件

所需材料

| Seeeduino V4.2 | 基础盾板 | Grove - 8通道固态继电器 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Grove-8-Channel-Solid-State-Relay-p-3131.html" target="_blank">立即获取</a>|

:::注意

**1** 请轻轻插入USB线，否则可能会损坏端口。请使用内部有4根线的USB线，2根线的USB线无法传输数据。如果您不确定您手中的线是否符合要求，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)进行购买。

    **2** 购买每个Grove模块时都会附带一根Grove电缆。如果您丢失了Grove电缆，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 进行购买。
:::

+ **步骤 1.** 将 Grove - 8通道固态继电器连接到 Base Shield 的 **I^2^C** 端口。

+ **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

+ **步骤 3.** 通过 USB 线缆将 Seeeduino 连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/img/connect.jpg)

:::注意
        如果没有 Grove Base Shield，我们也可以直接将这个模块连接到 Seeeduino，如下所示。
:::

| Seeeduino | Grove - 8通道固态继电器 |
| --------- | ----------------------- |
| 5V        | 红色                    |
| GND       | 黑色                    |
| SDA       | 白色                    |
| SCL       | 黄色                    |

#### 软件

:::注意
        如果您是第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

+ **步骤 1.** 从Github下载[Multi_Channel_Relay_Arduino](https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library)库。

+ **步骤 2.** 参考[如何安装库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library)来为Arduino安装库。

+ **步骤 3.** 重启Arduino IDE。通过以下路径打开示例：**文件 --> 示例 --> Multi Channel Relay Arduino 库 --> eight_channel_relay_control**。

![](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/img/path.jpg)

或者，您可以直接点击代码块右上角的图标 ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) 将以下代码复制到Arduino IDE中的一个新草图中。

```c++
#include <multi_channel_relay.h>

#define USE_8_CHANNELS (1)

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
#if(1==USE_8_CHANNELS)  
  Serial.println("Channel 5 on");
  relay.turn_off_channel(4);
  relay.turn_on_channel(5);  
  delay(500);
  Serial.println("Channel 6 on");
  relay.turn_off_channel(5);
  relay.turn_on_channel(6);  
  delay(500);
  Serial.println("Channel 7 on");
  relay.turn_off_channel(6);
  relay.turn_on_channel(7);  
  delay(500);
  Serial.println("Channel 8 on");
  relay.turn_off_channel(7);
  relay.turn_on_channel(8);  
  delay(500);
  relay.turn_off_channel(8);
#endif

  relay.channelCtrl(CHANNLE1_BIT | 
                    CHANNLE2_BIT | 
                    CHANNLE3_BIT | 
                    CHANNLE4_BIT | 
                    CHANNLE5_BIT | 
                    CHANNLE6_BIT |
                    CHANNLE7_BIT |
                    CHANNLE8_BIT);
  Serial.print("Turn all channels on, State: ");
  Serial.println(relay.getChannelState(), BIN);
  
  delay(2000);

  relay.channelCtrl(CHANNLE1_BIT |                   
                    CHANNLE3_BIT | 
                    CHANNLE5_BIT | 
                    CHANNLE7_BIT);
  Serial.print("Turn 1 3 5 7 channels on, State: ");
  Serial.println(relay.getChannelState(), BIN);

  delay(2000);

  relay.channelCtrl(CHANNLE2_BIT | 
                    CHANNLE4_BIT | 
                    CHANNLE6_BIT |
                    CHANNLE8_BIT);
  Serial.print("Turn 2 4 6 8 channels on, State: ");
  Serial.println(relay.getChannelState(), BIN);
  
  delay(2000);


  relay.channelCtrl(0);
  Serial.print("Turn off all channels, State: ");
  Serial.println(relay.getChannelState(), BIN);
  
  delay(2000);
}
```

+ **步骤 4.** 上传演示程序。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

+ **步骤 5.** 通过点击 **工具->串行监视器** 打开Arduino IDE的**串行监视器**。或者同时按下 ++ctrl+shift+m++ 快捷键。

:::提示
     如果一切顺利，您将看到结果。同时，您会看到板载LED灯交替亮起和熄灭。
:::

```c++
Scanning...
I2C device found at address 0x11 !
Found 1 I2C devices
Start write address
End write address
firmware version: 0x1
Channel 1 on
Channel 2 on
Channel 3 on
Channel 4 on
Channel 5 on
Channel 6 on
Channel 7 on
Channel 8 on
Turn all channels on, State: 11111111
Turn 1 3 5 7 channels on, State: 1010101
Turn 2 4 6 8 channels on, State: 10101010
Turn off all channels, State: 0
Channel 1 on
Channel 2 on

```

![](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/img/gif.gif)

:::note
        在此演示中，我们没有添加负载。如果您想检查如何添加负载，请查看[Grove - 2通道固态继电器](https://wiki.seeedstudio.com/Grove-2-Channel_Solid_State_Relay)。
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
      <td><span style={{fontWeight: 'bold'}}>changeI2CAddress(uint8_t old_addr, uint8_t new_addr)</span></td>
      <td>更改设备地址，其中 <span style={{fontWeight: 'bold'}}>old_addr </span>是当前的地址； <span style={{fontWeight: 'bold'}}>new_addr </span>是您想要使用的地址。只有输入正确的旧地址，才能成功设置新地址。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>scanI2CDevice()</span></td>
      <td>获取 <span style={{fontWeight: 700}}>old_addr </span>(当前地址)</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 'bold'}}>getChannelState()</span></td>
      <td>获取每个通道的状态，例如“状态：1111”，这表示所有继电器都已打开。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>getFirmwareVersion()</span></td>
      <td>获取烧录在板载MCU（微控制器）上的固件版本</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>channelCtrl(uint8_t state)</span></td>
      <td>要立即更改您选择的所有通道， <span style={{fontWeight: 600}}>状态参数列表如下：</span><br /> <br />  <span style={{fontWeight: 'bold'}}>CHANNLE1_BIT</span>or  <span style={{fontWeight: 'bold'}}>0x01</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE2_BIT</span>  或  <span style={{fontWeight: 'bold'}}>0x02</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE3_BIT</span>  或  <span style={{fontWeight: 'bold'}}>0x04</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE4_BIT</span>  或  <span style={{fontWeight: 'bold'}}>0x08</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE5_BIT</span>  或  <span style={{fontWeight: 'bold'}}>0x10</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE6_BIT</span>  或  <span style={{fontWeight: 'bold'}}>0x20</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE7_BIT</span>  或  <span style={{fontWeight: 'bold'}}>0x40</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE8_BIT</span>  或  <span style={{fontWeight: 'bold'}}>0x80</span><br />
        <br />例如 <br /><span style={{fontWeight: 600}}>        channelCtrl(CHANNLE2_BIT|CHANNLE3_BIT),</span>将打开通道2和通道3。<br /><span style={{fontWeight: 600}}>        channelCtrl(0x01|0x02|0x08), </span>将打开通道1、通道2和通道4。<br /><span style={{fontWeight: 600}}>        channelCtrl(0), </span>将关闭所有通道。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>turn_on_channel(uint8_t channel)</span></td>
      <td>要打开单个通道。<br />例如：<br />        <span style={{fontWeight: 600}}>turn_on_channel(3), </span>将关闭通道3。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>turn_off_channel(uint8_t channel)</span></td>
      <td>要关闭单个通道。<br />例如：<br /><span style={{fontWeight: 600}}>       turn_off_channel(3), </span>将关闭通道3。</td>
    </tr>
  </tbody></table>


如果您想更改地址，您需要在使用之前设置地址。例如，我们想要将其更改为0x2f。我们可以使用以下代码。

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

**Q1: 如何烧录固件？**

**A1:** 我们建议您使用J-Link烧录器和WSD接口来烧录固件。

您可以在这里下载固件：

[出厂固件](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/res/Grove-8-Channel-Solid-Relay-Firmware.bin)

我们推荐您使用J-Flash软件来进行操作：

[J-flash烧录器](https://www.segger.com/downloads/jlink#J-LinkSoftwareAndDocumentationPack)

![](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/J-flash.jpg)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/res/Grove%20-%208-Channel%20Solid%20State%20Relay.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

+ **[Zip]** [Grove-88通道SPDT继电器 eagle 文件](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/res/Grove%20-%208-Channel%20Solid%20State%20Relay.zip)
+ **[Zip]** [多通道继电器Arduino库](https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library/archive/master.zip)
+ **[Bin]** [出厂固件](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/res/Grove-8-Channel-Solid-Relay-Firmware.bin)
+ **[PDF]** [G3MC202P的数据手册](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/res/G3MC202p.pdf)
+ **[PDF]** [STM32的数据手册](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/STM32F030F4P6.pdf)

## 项目

这是该产品的介绍视频，里面有一些简单的演示，您可以尝试一下。

<iframe width="560" height="315" src="https://www.youtube.com/embed/5uBLf_a0DNc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供各种支持，以确保您在使用我们产品时的体验尽可能顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
