---
title: Grove - 4通道 SPDT 继电器
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-4-Channel_SPDT_Relay/
slug: /cn/Grove-4-Channel_SPDT_Relay
last_update:
  date: 01/09/2022
  author: gunengyu
---

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/main.jpg" /><figcaption><b /><i /></figcaption>
</div>

单刀双掷（SPDT）继电器在某些应用中非常有用，因为它具有一个公共端子和两个触点，非常适合在两个选项之间进行选择。Grove - 4通道 SPDT 继电器拥有四个单刀双掷（SPDT）开关。它仅需要低电压和低电流信号来控制这些开关。具体来说，您可以使用5V DC来控制最大250V AC或110V DC。其I2C地址是可更改的，因此您可以在同一个项目中使用多个继电器模块。Grove - 4通道 SPDT 继电器拥有四个单刀双掷（SPDT）开关。它仅需要低电压和低电流信号来控制这些开关。具体来说，您可以使用5V DC来控制最大250V AC或110V DC。

我们使用板载的STM32F030F4P6来分别控制各通道。来自Arduino或其他板的命令通过I2C接口传输，板载的STM32F030F4P6会解析命令，从而让您可以控制所需的开关。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-4-Channel-SPDT-Relay-p-3119.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

## 预读

如果您对**什么是Grove继电器模块**以及**继电器如何工作**不熟悉，强烈建议您提前阅读相关介绍。请访问我们的**[博客](https://www.seeedstudio.com/blog/2020/01/03/arduino-tutorial-control-high-voltage-devices-with-relay-modules/)**以获取详细信息：

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/blog/2020/01/03/arduino-tutorial-control-high-voltage-devices-with-relay-modules/" target="_blank"><img src="https://blog.seeedstudio.com/wp-content/uploads/2020/01/image-50-768x384.png" border={0} /></a></p>

## 特性

+ 耐高温塑料外壳
+ 高电压负载
+ 低功耗
+ 持久耐用
+ 可选I2C地址
  + 0x00 ~ 0x7F

## 规格

|项目|参数|
|---|---|
|工作电压|5V|
|额定线圈电流|89.3mA|
|TUV认证负载|10A 250VAC/ 10A 30VDC|
|UL认证负载|10A 125VAC 28VDC|
|最大允许电压|250VAC/110VDC|
|功耗|约0.45W|
|接触电阻|最大100mΩ|
|绝缘电阻|最小100MΩ (500VDC)|
|最大开关次数|30次操作/分钟|
|环境温度|-40°C 至 +85°C|
|工作湿度|45% 至 85% r.h.|
|触点材料|AgCdO|
|输入接口|I^2^C|
|默认I^2^C地址|0x11 或 0x12|
|可用I^2^C地址|0x00 ~ 0x7F|
|输出接口|3针DIP母头螺丝端子-绿色|

:::tip
对于负载参数，我们提供了两组认证数据。实际上，最大负载为10A 250VAC/10A 30VDC。
:::

## 应用场景

+ 家用电器
+ 办公设备
+ 远程控制电视接收器
+ 显示器
+ 音频设备高冲击电流应用

## 入门指南

### 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg)  |

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

### 使用 Arduino

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield| Grove - 4-Channel SPDT Relay |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-4-Channel-SPDT-Relay-p-3119.html" target="_blank">立即购买</a>|

:::note
     * 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线是否符合要求，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

     * 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了 Grove 数据线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

**硬件概览**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/8.22%E8%BF%9E%E6%8E%A51.jpg" /><figcaption><b /><i /></figcaption>
</div>

:::note
        如果没有 Grove Base Shield，我们也可以直接将此模块连接到 Seeeduino，如下所示。
:::

| Seeeduino     |  Grove - 4-Channel SPDT Relay           |
|---------------|-------------------------|
| 5V            | 红色                     |
| GND           | 黑色                   |
| SDA           | 白色                   |
| SCL           | 黄色                  |

**引脚映射**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/pin_map_front.jpg" /><figcaption><b /><i /></figcaption>
</div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/pin_map_back.jpg" /><figcaption><b /><i /></figcaption>
</div>

:::note
    - 开关 1-4 的引脚功能相同，因此对于其他开关，可以参考 **NC1**/**COM1**/**NO1**。
    - 在 PCB 的背面，有两个接口：SWD 和 I^2^C。默认情况下，SWD 接口用于编程固件。如果您想使用 I^2^C（实际上作为启动 UART 工作），需要将 **BOOT** 设置为高电平。
:::
+ **步骤 1.** 将 Grove - 4-Channel SPDT Relay 连接到 Base Shield 的 **I^2^C** 接口。

+ **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

+ **步骤 3.** 使用 USB 数据线将 Seeeduino 连接到 PC。

#### 软件

:::note
        如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

+ **步骤 1.** 从 Github 下载 [Multi_Channel_Relay_Arduino](https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library) 库。

+ **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

+ **步骤 3.** 重启 Arduino IDE。通过以下路径打开示例：**File --> Examples --> Multi Channel Relay Arduino Library --> four_channel_relay_control**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/path.jpg" /><figcaption><b /><i /></figcaption>
</div>

或者，您可以直接点击代码块右上角的图标 ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) 将以下代码复制到 Arduino IDE 的新草稿中。

```cpp
#include <multi_channel_relay.h>

Multi_Channel_Relay relay;

void setup()
{
  Serial.begin(9600);
  while(!Serial);   

   /* 扫描 I2C 设备以检测设备地址 */
  uint8_t old_address = relay.scanI2CDevice();
  if((0x00 == old_address) || (0xff == old_address)) { 
    while(1);
  }

  Serial.println("开始写入地址");
  relay.changeI2CAddress(old_address, 0x11);  /* 设置 I2C 地址并保存到 Flash */  
  Serial.println("结束写入地址");

  /* 读取固件版本 */
  Serial.print("固件版本: ");
  Serial.print("0x");
  Serial.print(relay.getFirmwareVersion(), HEX);
  Serial.println();
}

void loop()
{

  /** 
   *  通道: 8 7 6 5 4 3 2 1
   *  状态: 0b00000000 -> 0x00  (全部关闭)
   *  状态: 0b11111111 -> 0xff  (全部开启)
  */  

  /* 开始控制继电器 */ 
  Serial.println("通道 1 开启");
  relay.turn_on_channel(1);  
  delay(500);
  Serial.println("通道 2 开启");
  relay.turn_off_channel(1);
  relay.turn_on_channel(2);
  delay(500);
  Serial.println("通道 3 开启");
  relay.turn_off_channel(2);
  relay.turn_on_channel(3);  
  delay(500);
  Serial.println("通道 4 开启");
  relay.turn_off_channel(3);
  relay.turn_on_channel(4);  
  delay(500);
  relay.turn_off_channel(4);

  relay.channelCtrl(CHANNLE1_BIT | 
                    CHANNLE2_BIT | 
                    CHANNLE3_BIT | 
                    CHANNLE4_BIT);
  Serial.print("开启所有通道, 状态: ");
  Serial.println(relay.getChannelState(), BIN);
  
  delay(2000);

  relay.channelCtrl(CHANNLE1_BIT |                   
                    CHANNLE3_BIT);
  Serial.print("开启通道 1 和 3, 状态: ");
  Serial.println(relay.getChannelState(), BIN);

  delay(2000);

  relay.channelCtrl(CHANNLE2_BIT | 
                    CHANNLE4_BIT);
  Serial.print("开启通道 2 和 4, 状态: ");
  Serial.println(relay.getChannelState(), BIN);
  
  delay(2000);


  relay.channelCtrl(0);
  Serial.print("关闭所有通道, 状态: ");
  Serial.println(relay.getChannelState(), BIN);
  
  delay(2000);
}
```

:::note
库文件可能会更新。此代码可能不适用于更新后的库文件，因此我们建议您使用第一种方法。
:::

+ **步骤 4.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

+ **步骤 5.** 打开 Arduino IDE 的 **串行监视器**，点击 **工具->串行监视器**，或者同时按下 ++ctrl+shift+m++ 键。

:::tip
如果一切正常，您将看到结果。同时，您会看到板载 LED 交替亮起和熄灭。
:::

```
扫描中...
在地址 0x12 发现 I2C 设备！
发现 1 个 I2C 设备
开始写入地址
结束写入地址
固件版本: 0x1
通道 1 开启
通道 2 开启
通道 3 开启
通道 4 开启
开启所有通道，状态: 1111
开启通道 1 和 3，状态: 101
开启通道 2 和 4，状态: 1010
关闭所有通道，状态: 0
通道 1 开启
通道 2 开启
```

:::tip
如果一切正常，Grove - 4-Channel SPDT Relay 将按以下方式工作。
:::
<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/_DAS5552.MOV_20180822_104218.gif" /><figcaption><b /><i /></figcaption>
</div>

:::note
我们在此示例中未添加负载，如果您想了解如何添加负载，请查看 [Grove - 2-Channel SPDT Relay](https://wiki.seeedstudio.com/cn/Grove-2-Channel_SPDT_Relay/)。
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
      <td>更改设备地址，<span style={{fontWeight: 'bold'}}>old_addr </span>是当前地址；<span style={{fontWeight: 'bold'}}>new_addr </span>是您想要使用的地址。只有输入正确的旧地址，新地址才能成功设置。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>scanI2CDevice()</span></td>
      <td>获取 <span style={{fontWeight: 700}}>old_addr </span>（当前地址）</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 'bold'}}>getChannelState()</span></td>
      <td>获取每个通道的状态，例如 "状态: 1111"，表示所有继电器已开启</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>getFirmwareVersion()</span></td>
      <td>获取烧录到板载 MCU 的固件版本</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>channelCtrl(uint8_t state)</span></td>
      <td>立即更改您选择的所有通道，<span style={{fontWeight: 600}}>状态参数列表:</span><br /> <br />  <span style={{fontWeight: 'bold'}}>CHANNLE1_BIT</span> 或 <span style={{fontWeight: 'bold'}}>0x01</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE2_BIT</span> 或 <span style={{fontWeight: 'bold'}}>0x02</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE3_BIT</span> 或 <span style={{fontWeight: 'bold'}}>0x04</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE4_BIT</span> 或 <span style={{fontWeight: 'bold'}}>0x08</span><br /><br />例如: <br /><span style={{fontWeight: 600}}>        channelCtrl(CHANNLE2_BIT|CHANNLE3_BIT),</span> 将开启通道 2 和通道 3<br /><span style={{fontWeight: 600}}>        channelCtrl(01|02|08), </span> 将开启通道 1、通道 2 和通道 4。<br /><span style={{fontWeight: 600}}>        channelCtrl(0), </span> 将关闭所有通道。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>turn_on_channel(uint8_t channel)</span></td>
      <td>开启单个通道。<br />例如:<br />        <span style={{fontWeight: 600}}>turn_on_channel(3), </span> 将开启通道 3</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>turn_off_channel(uint8_t channel)</span></td>
      <td>关闭单个通道。<br />例如:<br /><span style={{fontWeight: 600}}>       turn_off_channel(3), </span> 将关闭通道 3</td>
    </tr>
  </tbody></table>

如果您想更改地址，需要在使用前设置地址。例如，我们想将地址更改为 0x2f。可以使用以下代码。

```cpp
#include <multi_channel_relay.h>

Multi_Channel_Relay relay;

void setup()
{
  Serial.begin(9600);
  while(!Serial);   

   /* 扫描 I2C 设备以检测设备地址 */
  uint8_t old_address = relay. ;
  if((0x00 == old_address) || (0xff == old_address)) { 
    while(1);
  }

  Serial.println("开始写入地址");
  relay.changeI2CAddress(old_address,0x2f);  /* 设置 I2C 地址为 0x2f 并保存到 EEPROM */  
  Serial.println("结束写入地址");

  /* 读取固件版本 */
  Serial.print("固件版本: ");
  Serial.print("0x");
  Serial.print(relay.getFirmwareVersion(), HEX);
  Serial.println();
}
```

## 常见问题

**问题1：如何烧录固件？**

**回答1：** 我们推荐使用 J-Link 烧录器和 WSD 接口来烧录固件。

您可以在以下链接下载固件：

[出厂固件](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/Grove-4-Channel-SPDT-Relay-Firmware.bin)

我们推荐使用 J-flash 软件：

[J-flash](https://www.segger.com/downloads/jlink#J-LinkSoftwareAndDocumentationPack)

![](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/J-flash.jpg)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/Grove-4-Channel_SPDT_Relay.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

:::note

由于 ST32 系列芯片全球缺货，价格上涨了数倍且没有明确的交货日期，我们不得不改用 MM32 芯片。具体替换型号如下：STM32F030F4P6TR 替换为 MM32F031F6P6。芯片替换后，产品功能、特性、使用方法和代码保持不变。需要注意的是，固件版本已更改，出厂固件已根据不同芯片进行了调整。如果需要重新烧录固件，请下载与芯片对应的固件。
:::

## 资源

+ **[Zip]** [Grove-4-Channel SPDT Relay Eagle 文件](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/Grove-4-Channel_SPDT_Relay.zip)
+ **[Bin]** [STM32F030F4P6TR 固件](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/Grove-4-Channel-SPDT-Relay-Firmware.bin)
+ **[Bin]** [MM32F031F6P6 固件](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/firmware-spdt-4-channels.ino.bin)
+ **[PDF]** [SRD 05VDC-SL-C 继电器数据手册](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/SRD_05VDC-SL-C.pdf)
+ **[PDF]** [S9013 数据手册](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/Transistors_NPN_25V-500mA.pdf)
+ **[PDF]** [STM32 数据手册](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/STM32F030F4P6.pdf)
+ **[PDF]** [MM32F031F6P6 数据手册](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/MM32F031F6P6_Datasheet.pdf)

## 项目

这是该产品的介绍视频，包含简单的演示，您可以尝试一下。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/5NBdUr5D-8M?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

**家庭自动化与监控：** 一个基于 RSL10 Sense DB 的系统，可以通过智能手机应用和 Alexa 监控和控制温度、湿度和光强。

<iframe width="560" height="315" src="https://www.hackster.io/taifur/home-automation-and-monitoring-powered-by-rsl10-and-alexa-2439df" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

**Grove - 4-Channel SPDT Relay：** 嘿，Seeekers！这是我们 #新产品星期二 的第二周。在这段视频中，我们将展示新产品 Grove - 4-Channel SPDT Relay，并进行一个有趣的演示。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/watch?v=5NBdUr5D-8M" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>