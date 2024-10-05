---
title: Grove - 4通道单刀双掷继电器
description: Grove - 4通道单刀双掷继电器
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-4-Channel_SPDT_Relay/
slug: /cn/Grove-4-Channel_SPDT_Relay
last_update:
  date: 03/19/2024
  author: WuFeifei
---

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/main.jpg" /><figcaption><b /><i /></figcaption>
</div>

单刀双掷（SPDT）继电器在某些应用中非常有用，因为它有一个公共端子和两个触点，非常适合在两个选项之间进行选择。Grove - 4通道SPDT继电器具有四个单刀双掷（SPDT）开关。它只需要低电压和低电流信号来控制这些开关。具体来说，您可以使用5V直流电来控制最大250V交流电或110V直流电。 I2C地址是可变的，因此您可以在同一个项目中使用多个继电器模块。Grove - 4通道SPDT继电器具有四个单刀双掷（SPDT）开关。它只需要低电压和低电流信号来控制这些开关。具体来说，您可以使用5V直流电来控制最大250V交流电或110V直流电。

我们使用板载的STM32F030F4P6微控制器来单独控制通道。来自Arduino或其他板卡的指令通过I2C接口进行传输，板载的STM32F030F4P6将解析这些指令，从而让您能够控制您想要控制的开关。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-4-Channel-SPDT-Relay-p-3119.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

## 预读

如果您对**Grove继电器模块是什么**以及**继电器的工作原理**不熟悉，强烈建议您提前阅读相关内容。请访问我们下方的 **[博客](https://www.seeedstudio.com/blog/2020/01/03/arduino-tutorial-control-high-voltage-devices-with-relay-modules/)** 以获取详细信息：

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/blog/2020/01/03/arduino-tutorial-control-high-voltage-devices-with-relay-modules/" target="_blank"><img src="https://blog.seeedstudio.com/wp-content/uploads/2020/01/image-50-768x384.png" border={0} /></a></p>

## 产品特性

+ 高温耐受塑料外壳
+ 高电压负载
+ 低功耗
+ 耐用性强
+ 可选I2C地址
  + 0x00 ~ 0x7F

## 规格参数

|项目| 值                     |
|---|---|
|工作电压|5V|
|额定线圈电流|89.3mA|
|TUV认证负载 |10A 250VAC/  10A 30VDC|
|UL认证负载|10A 125VAC  28VDC|
|最大允许电压|250VAC/110VDC|
|功率消耗|约 0.45W|
|接触电阻|最大 100mΩ|
|绝缘电阻|最小 100MΩ (500VDC)|
|最大开关频率|30 次/分钟|
|环境温度|-40°C 至 +85°C|
|工作湿度|45% 至 85% 相对湿度|
|触点材料|AgCdO|
|输入接口|I^2^C|
|默认I²C地址|0x11 或 0x12|
|可选I²C地址 |0x00 ~ 0x7F|
|输出接口|3针DIP母螺丝端子-绿色|

:::提示
        对于负载参数，我们提供了两组认证数据。实际上，最大负载为10A 250VAC/10A 30VDC.
:::

## 应用领域

+ 家用电器
+ 办公设备
+ 遥控电视接收器
+ 显示器
+ 音频设备的高冲击电流使用应用

## 入门指南

### 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::警告
    上述提及的支持平台只是表示模块的软件或理论上的兼容性。在大多数情况下，我们只提供针对Arduino平台的软件库或代码示例。我们无法为所有可能的MCU平台提供软件库/演示代码。因此，用户需要自行编写软件库。
:::

### 玩转Arduino

#### 硬件

所需材料

| Seeeduino V4.2 | Base Shield| Grove - 4-Channel SPDT Relay |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Grove-4-Channel-SPDT-Relay-p-3119.html" target="_blank">立即获取</a>|

:::注意
     * 请轻轻插入USB线，否则可能会损坏端口。请使用内部有4根线的USB线，2根线的电缆无法传输数据。如果您不确定您手头的线缆是几根线，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)，查看我们的官方推荐USB线产品。

     * 购买每个Grove模块时都会附带一根Grove电缆。如果您不慎丢失了Grove电缆，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 进行购买。
:::

**硬件概述**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/8.22%E8%BF%9E%E6%8E%A51.jpg" /><figcaption><b /><i /></figcaption>
</div>
:::注意
        如果没有Grove基础底板，我们也可以直接将这个模块连接到Seeeduino上，如下所示。
:::

| Seeeduino | Grove -  4通道单刀双掷继电器 |
| --------- | ---------------------------- |
| 5V        | 红色                         |
| GND       | 黑色                         |
| SDA       | 白色                         |
| SCL       | 黄色                         |

**引脚映射**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/pin_map_front.jpg" /><figcaption><b /><i /></figcaption>
</div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/pin_map_back.jpg" /><figcaption><b /><i /></figcaption>
</div>
:::注意
    - 在PCB的背面，有两个接口：SWD和I²C。在编程固件时默认使用SWD接口，如果您想使用I²C（实际上作为启动UART工作），您应该将
        **BOOT** 设置为高电平。
        :::

+ **步骤 1.** 将 Grove - 4通道单刀双掷继电器连接到基础底板的**I²C**端口。

+ **步骤 2.** 将 Grove - 基础底板插入 Seeeduino。

+ **步骤 3.** 通过USB线将 Seeeduino 连接到电脑。

#### 软件

:::注意
        如果您是第一次使用Arduino，我们强烈建议您在开始之前先查看 [Arduino 入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

+ **步骤 1.** 从Github下载 [Multi_Channel_Relay_Arduino](https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library) 库。

+ **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) 为Arduino安装库。

+ **步骤 3.** 重启Arduino IDE。通过以下路径打开示例：**文件 --> 示例 --> Multi Channel Relay Arduino 库 --> four_channel_relay_control**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/path.jpg" /><figcaption><b /><i /></figcaption>
</div>

或者，您只需点击代码块右上角的图标 ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) ，即可将以下代码复制到Arduino IDE中的新草图中。

```cpp
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

:::注意
        库文件可能会更新。此代码可能不适用于更新的库文件，因此我们建议您使用第一种方法。
:::

+ **步骤 4.** 上传示例代码。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)的说明。

+ **步骤 5.** 在Arduino IDE中，通过点击**工具->串口监视器**来打开**串口监视器**。或者同时按下++ctrl+shift+m++键。

:::提示
     如果一切顺利，您将看到结果。同时，您将看到板载LED灯交替亮起和熄灭。
:::

```
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

:::提示
        如果一切顺利，Grove - 4通道单刀双掷继电器将按以下方式工作。
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/_DAS5552.MOV_20180822_104218.gif" /><figcaption><b /><i /></figcaption>
</div>
:::注意
        我们在此示例中没有添加负载，如果您想检查如何添加负载，请查看 [Grove - 2通道单刀双掷继电器](https://wiki.seeedstudio.com/Grove-2-Channel_SPDT_Relay/)的说明。
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
      <td>改变设备地址 <span style={{fontWeight: 'bold'}}>old_addr </span>当前地址是； <span style={{fontWeight: 'bold'}}>new_addr </span>这是您想要使用的地址。只有输入正确的旧地址，新地址才能成功设置。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>scanI2CDevice()</span></td>
      <td>获取 <span style={{fontWeight: 700}}>old_addr </span>(current address)</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 'bold'}}>getChannelState()</span></td>
      <td>获取每个通道的状态，例如“状态：1111”，这表示所有继电器都已打开。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>getFirmwareVersion()</span></td>
      <td>获取烧录在板载MCU中的固件版本</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>channelCtrl(uint8_t state)</span></td>
      <td>要立即更改您选择的所有通道， <span style={{fontWeight: 600}}>状态参数列表：</span><br /> <br />  <span style={{fontWeight: 'bold'}}>CHANNLE1_BIT</span>or  <span style={{fontWeight: 'bold'}}>0x01</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE2_BIT</span>  or  <span style={{fontWeight: 'bold'}}>0x02</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE3_BIT</span>  or  <span style={{fontWeight: 'bold'}}>0x04</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE4_BIT</span>  or  <span style={{fontWeight: 'bold'}}>0x08</span><br /><br />例如 <br /><span style={{fontWeight: 600}}>        channelCtrl(CHANNLE2_BIT|CHANNLE3_BIT),</span>将打开通道2和通道3<br /><span style={{fontWeight: 600}}>        channelCtrl(01|02|08), </span>将打开通道1、通道2和通道4。<br /><span style={{fontWeight: 600}}>        channelCtrl(0), </span>将关闭所有通道。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>turn_on_channel(uint8_t channel)</span></td>
      <td>开启单个通道。<br />例如<br />        <span style={{fontWeight: 600}}>turn_on_channel(3), </span>将打开通道3。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>turn_off_channel(uint8_t channel)</span></td>
      <td>关闭单个通道。<br />e.g.<br /><span style={{fontWeight: 600}}>       turn_off_channel(3), </span>将关闭通道3。</td>
    </tr>
  </tbody></table>


如果您想要更改地址，您需要在使用之前设置地址。例如，我们想要将其更改为0x2f。我们可以使用以下代码。

```cpp
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

**Q1:  如何烧录固件？**

**A1:**  我们建议您使用J-Link烧录器和WSD接口来烧录固件。

您可以在此处下载固件：

[出厂固件](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/Grove-4-Channel-SPDT-Relay-Firmware.bin)

我们推荐您使用J-Flash软件来进行操作：

[J-flash烧录器](https://www.segger.com/downloads/jlink#J-LinkSoftwareAndDocumentationPack)

![](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/J-flash.jpg)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/Grove-4-Channel_SPDT_Relay.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

:::注意

由于ST32系列芯片全球缺货，价格已经上涨数倍，且交货日期不明确。我们别无选择，只能改用MM32芯片。具体替换型号如下：STM32F030F4P6TR被替换为MM32F031F6P6。芯片更换后，产品功能、特性、使用方法和代码保持不变。需要注意的是，固件版本已经更改，且出厂固件已根据不同芯片进行了调整。如果需要重新烧录固件，请下载与芯片相对应的固件。
:::

## 资源

+ **[Zip]** [Grove-4通道单刀双掷（SPDT）继电器 eagle 文件](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/Grove-4-Channel_SPDT_Relay.zip)
+ **[Bin]** [STM32F030F4P6TR固件](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/Grove-4-Channel-SPDT-Relay-Firmware.bin)
+ **[Bin]** [MM32F031F6P6固件](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/firmware-spdt-4-channels.ino.bin)
+ **[PDF]** [SRD 05VDC-SL-C 继电器数据手册](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/SRD_05VDC-SL-C.pdf)
+ **[PDF]** [S9013数据手册](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/Transistors_NPN_25V-500mA.pdf)
+ **[PDF]** [STM32数据手册](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/STM32F030F4P6.pdf)
+ **[PDF]** [MM32F031F6P6_数据手册.pdf](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/MM32F031F6P6_Datasheet.pdf)

## 项目

这是该产品的介绍视频，包括简单的演示，您可以尝试观看一下。

<iframe width="560" height="315" src="https://www.youtube.com/embed/5NBdUr5D-8M?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

**家庭自动化与监控：**基于RSL10 Sense DB的系统，可以通过智能手机应用程序和Alexa监控和控制温度、湿度和光照强度。

<iframe width="560" height="315" src="https://www.hackster.io/taifur/home-automation-and-monitoring-powered-by-rsl10-and-alexa-2439df" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

**Grove - 4通道SPDT继电器：**嘿，Seekers们！！！这是我们#newproductsTuesday系列的第二周。在这个视频中，我们将展示我们的新产品——Grove - 4通道SPDT继电器，并为大家带来一个有趣且酷炫的演示。

<iframe width="560" height="315" src="https://www.youtube.com/watch?v=5NBdUr5D-8M" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供全方位的支持，以确保您在使用我们的产品时获得尽可能流畅的体验。我们提供多种沟通渠道，以满足不同用户的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
