---
title: Grove - 8通道固态继电器
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-8-Channel_Solid_State_Relay/
slug: /cn/Grove-8-Channel_Solid_State_Relay
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/img/main.jpg)

与使用线圈的机械继电器不同，封装的固态继电器（SSR）使用电力半导体器件，例如晶闸管和晶体管，这提供了比机械继电器更快的切换速度。**Grove - 8通道固态继电器**基于高质量的**G3MC202P**模块，允许您使用5VDC控制最大240VAC。借助Grove接口，使用Arduino操作SSR变得非常方便。

我们使用板载的[STM32F030F4P6](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/STM32F030F4P6.pdf)分别控制各通道。来自Arduino或其他板的命令通过I2C接口传输，板载的STM32F030F4P6将解析命令，从而可以控制您想要的开关。

根据不同的应用场景，我们为您准备了一系列固态继电器：

[Grove - 固态继电器 V2](https://wiki.seeedstudio.com/cn/Grove-Solid_State_Relay_V2)

[Grove - 2通道固态继电器](https://wiki.seeedstudio.com/cn/Grove-2-Channel_Solid_State_Relay)

[Grove - 4通道固态继电器](https://wiki.seeedstudio.com/cn/Grove-4-Channel_Solid_State_Relay)

[Grove - 8通道固态继电器](https://wiki.seeedstudio.com/cn/Grove-8-Channel_Solid_State_Relay)

<p style={{}}><a href="https://www.seeedstudio.com/Grove-8-Channel-Solid-State-Relay-p-3131.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

+ 低功耗
+ 持久耐用
+ 可选I2C地址

+ 相较于机械继电器的优势：

  + 固态继电器相比电机继电器具有更快的切换速度，并且没有物理触点磨损
  + 完全静音操作
  + 无物理触点意味着无火花，可用于爆炸性环境中，确保切换时不会产生火花
  + 即使频繁激活也能延长使用寿命，因为没有活动部件磨损，也没有触点产生凹坑或积碳
  + 紧凑的薄型单块结构SSR，集成了PCB、端子和散热器，比机械继电器更小，并且可以集成更多通道

+ 缺点：

  + 闭合时，较高的电阻（产生热量）和增加的电噪声
  + 开启时，较低的电阻和反向漏电流
  + 仅适用于交流负载

## 规格

|项目|值|
|---|---|
|工作输入电压|4~6V|
|额定输入电压|5V|
|额定负载电压|100至240 VAC 50/60 Hz|
|负载电压范围|75至264 VAC 50/60 Hz|
|负载电流|0.1至2 A|
|漏电流|最大1.5 mA（在200 VAC时）|
|绝缘电阻|最小1,000 MΩ（在500 VDC时）|
|操作时间|负载电源周期的一半 + 1 ms最大值|
|释放时间|负载电源周期的一半 + 1 ms最大值|
|存储温度|-30°C至100°C（无结冰或凝结）|
|工作温度|-30°C至80°C（无结冰或凝结）|
|工作湿度|45%至85%RH|
|输入接口|I^2^C|
|默认I^2^C地址|0x11或0x12|
|可用I^2^C地址|0x00 ~ 0x7F|
|输出接口|DIP Female Blue 2 pin x8|
|零交叉|支持|
|认证|UL / CSA|

:::note
请注意**漏电流**，1.5mA足以驱动低功耗LED，因此当继电器关闭时，LED可能仍会发出微弱的光。
:::

## 应用场景

+ 需要低延迟切换的操作，例如舞台灯光控制
+ 需要高稳定性的设备，例如医疗设备、交通信号灯
+ 需要防爆、防腐、防潮的场景，例如煤矿、化工行业

## 硬件概览

### 引脚图

![](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/img/pin_map.jpg)

![](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/img/pin_map_back.jpg)

:::note
    - 开关 1-8 的引脚功能相同，因此对于其他开关，可以参考 **LOAD1**/**LOAD2**。
    - 在 PCB 的背面，有两个接口：SWD 和 I^2^C。默认情况下，固件编程使用 SWD 接口，如果您想使用 I^2^C（实际上作为启动 UART 工作），需要将 **BOOT** 设置为高电平。
:::

### 原理图

**继电器控制**

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/img/schematic_.jpg)

**K1** 是继电器模块，当在 **INT+** 和 **INT-** 之间施加 5V 电压时，继电器将被打开。然后 **LOAD1** 将连接到 **LOAD2**。我们使用 NPN 晶体管 **Q1**（BC817-40）来控制 **INT+** 和 **INT-** 之间的电压。

**CTR** 是来自 Arduino 或其他板子的控制信号。它通过 10k 的电阻 R2 下拉，如果没有信号，**Q1** 的“栅极”（端口 1）将为 0V，**Q1** 将关闭，因此 **K1** 将关闭。如果 **CTR** 变为 5V，则 **Q1** 将打开。**K1** 的 **INT-** 将连接到系统的 GND，对于 **K1**，**INT+** 和 **INT-** 之间将有 5V，因此 **K1** 将打开，**LOAD1** 将连接到 **LOAD2**。

**双向电平转换电路**
![](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/schematic_1.jpg)

这是一个典型的双向电平转换电路，用于连接 I^2^C 总线的两个不同电压部分。该传感器的 I<sup>2</sup>C 总线使用 3.3V，如果 Arduino 的 I<sup>2</sup>C 总线使用 5V，则需要此电路。在上面的原理图中，**Q17** 和 **Q18** 是 N-Channel MOSFET [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf)，它们充当双向开关。为了更好地理解这一部分，您可以参考 [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)。

:::note
        在本节中我们仅展示了部分原理图，完整文档请参考 [资源](#资源)
:::

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg)  |

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。无法为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

### 使用 Arduino

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove - 8通道固态继电器 |
|----------------|-------------|-----------------------------|
|![图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-8-Channel-Solid-State-Relay-p-3131.html" target="_blank">立即购买</a>|

:::note
    **1** 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，只有 2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线是否符合要求，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

    **2** 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了 Grove 数据线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

+ **步骤 1.** 将 Grove - 8通道固态继电器连接到 Base Shield 的 **I^2^C** 接口。

+ **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

+ **步骤 3.** 使用 USB 数据线将 Seeeduino 连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/img/connect.jpg)

:::note
        如果没有 Grove Base Shield，我们也可以直接将该模块连接到 Seeeduino，如下所示。
:::

| Seeeduino     | Grove - 8通道固态继电器 |
|---------------|-----------------------------|
| 5V            | 红色                       |
| GND           | 黑色                       |
| SDA           | 白色                       |
| SCL           | 黄色                       |

#### 软件

:::note
        如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

+ **步骤 1.** 从 Github 下载 [Multi_Channel_Relay_Arduino](https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library) 库。

+ **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

+ **步骤 3.** 重启 Arduino IDE。通过以下路径打开示例：**文件 --> 示例 --> Multi Channel Relay Arduino Library --> eight_channel_relay_control**。

![](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/img/path.jpg)

或者，您可以直接点击代码块右上角的图标 ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) 将以下代码复制到 Arduino IDE 的新草图中。

```cpp
#include <multi_channel_relay.h>

#define USE_8_CHANNELS (1)

Multi_Channel_Relay relay;

void setup()
{
  Serial.begin(9600);
  while(!Serial);   

   /* 扫描 I2C 设备以检测设备地址 */
   relay.begin();
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
#if(1==USE_8_CHANNELS)  
  Serial.println("通道 5 开启");
  relay.turn_off_channel(4);
  relay.turn_on_channel(5);  
  delay(500);
  Serial.println("通道 6 开启");
  relay.turn_off_channel(5);
  relay.turn_on_channel(6);  
  delay(500);
  Serial.println("通道 7 开启");
  relay.turn_off_channel(6);
  relay.turn_on_channel(7);  
  delay(500);
  Serial.println("通道 8 开启");
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
  Serial.print("开启所有通道，状态: ");
  Serial.println(relay.getChannelState(), BIN);
  
  delay(2000);

  relay.channelCtrl(CHANNLE1_BIT |                   
                    CHANNLE3_BIT | 
                    CHANNLE5_BIT | 
                    CHANNLE7_BIT);
  Serial.print("开启通道 1 3 5 7，状态: ");
  Serial.println(relay.getChannelState(), BIN);

  delay(2000);

  relay.channelCtrl(CHANNLE2_BIT | 
                    CHANNLE4_BIT | 
                    CHANNLE6_BIT |
                    CHANNLE8_BIT);
  Serial.print("开启通道 2 4 6 8，状态: ");
  Serial.println(relay.getChannelState(), BIN);
  
  delay(2000);


  relay.channelCtrl(0);
  Serial.print("关闭所有通道，状态: ");
  Serial.println(relay.getChannelState(), BIN);
  
  delay(2000);
}
```

+ **步骤 4.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

+ **步骤 5.** 打开 Arduino IDE 的 **串口监视器**，点击 **工具->串口监视器**，或者同时按下 ++ctrl+shift+m++ 键。

:::提示
     如果一切正常，您将看到结果。同时，您会看到板载 LED 交替亮起和熄灭。
:::

```cpp
扫描中...
在地址 0x11 发现 I2C 设备！
发现 1 个 I2C 设备
开始写入地址
结束写入地址
固件版本：0x1
通道 1 打开
通道 2 打开
通道 3 打开
通道 4 打开
通道 5 打开
通道 6 打开
通道 7 打开
通道 8 打开
打开所有通道，状态：11111111
打开 1、3、5、7 通道，状态：1010101
打开 2、4、6、8 通道，状态：10101010
关闭所有通道，状态：0
通道 1 打开
通道 2 打开

```

![](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/img/gif.gif)

:::注意
        此演示中我们没有添加负载，如果您想了解如何添加负载，请查看 [Grove - 2-Channel Solid State Relay](https://wiki.seeedstudio.com/cn/Grove-2-Channel_Solid_State_Relay)。
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
      <td>更改设备地址，<span style={{fontWeight: 'bold'}}>old_addr </span>是当前地址；<span style={{fontWeight: 'bold'}}>new_addr </span>是您想要使用的地址。只有输入正确的旧地址，才能成功设置新地址。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>scanI2CDevice()</span></td>
      <td>获取 <span style={{fontWeight: 700}}>old_addr </span>（当前地址）</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 'bold'}}>getChannelState()</span></td>
      <td>获取每个通道的状态，例如 "状态：1111"，表示所有继电器都已打开</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>getFirmwareVersion()</span></td>
      <td>获取烧录到板载 MCU 的固件版本</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>channelCtrl(uint8_t state)</span></td>
      <td>立即更改您选择的所有通道，<span style={{fontWeight: 600}}>状态参数列表：</span><br /> <br />  <span style={{fontWeight: 'bold'}}>CHANNLE1_BIT</span> 或 <span style={{fontWeight: 'bold'}}>0x01</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE2_BIT</span> 或 <span style={{fontWeight: 'bold'}}>0x02</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE3_BIT</span> 或 <span style={{fontWeight: 'bold'}}>0x04</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE4_BIT</span> 或 <span style={{fontWeight: 'bold'}}>0x08</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE5_BIT</span> 或 <span style={{fontWeight: 'bold'}}>0x10</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE6_BIT</span> 或 <span style={{fontWeight: 'bold'}}>0x20</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE7_BIT</span> 或 <span style={{fontWeight: 'bold'}}>0x40</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE8_BIT</span> 或 <span style={{fontWeight: 'bold'}}>0x80</span><br />
        <br />例如：<br /><span style={{fontWeight: 600}}>        channelCtrl(CHANNLE2_BIT|CHANNLE3_BIT),</span>将打开通道 2 和通道 3<br /><span style={{fontWeight: 600}}>        channelCtrl(0x01|0x02|0x08), </span>将打开通道 1、通道 2 和通道 4。<br /><span style={{fontWeight: 600}}>        channelCtrl(0), </span>将关闭所有通道。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>turn_on_channel(uint8_t channel)</span></td>
      <td>打开单个通道。<br />例如：<br />        <span style={{fontWeight: 600}}>turn_on_channel(3), </span>将打开通道 3</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>turn_off_channel(uint8_t channel)</span></td>
      <td>关闭单个通道。<br />例如：<br /><span style={{fontWeight: 600}}>       turn_off_channel(3), </span>将关闭通道 3</td>
    </tr>
  </tbody></table>

如果您想更改地址，需要在使用前设置地址。例如，我们想将地址更改为 0x2f，可以使用以下代码。

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
  relay.changeI2CAddress(old_address,0x2f);  /* 将 I2C 地址设置为 0x2f 并保存到 EEPROM */  
  Serial.println("结束写入地址");

  /* 读取固件版本 */
  Serial.print("固件版本：");
  Serial.print("0x");
  Serial.print(relay.getFirmwareVersion(), HEX);
  Serial.println();
}
```

## 常见问题

**Q1: 如何烧录固件？**

**A1:** 我们推荐使用 J-Link 烧录器和 WSD 接口来烧录固件。

您可以在以下链接下载固件：

[出厂固件](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/res/Grove-8-Channel-Solid-Relay-Firmware.bin)

我们推荐使用 J-flash 软件：

[J-flash](https://www.segger.com/downloads/jlink#J-LinkSoftwareAndDocumentationPack)

![](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/J-flash.jpg)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/res/Grove%20-%208-Channel%20Solid%20State%20Relay.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

+ **[Zip]** [Grove-8-Channel SPDT Relay Eagle 文件](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/res/Grove%20-%208-Channel%20Solid%20State%20Relay.zip)
+ **[Zip]** [多通道继电器 Arduino 库](https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library/archive/master.zip)
+ **[Bin]** [出厂固件](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/res/Grove-8-Channel-Solid-Relay-Firmware.bin)
+ **[PDF]** [G3MC202P 数据手册](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/res/G3MC202p.pdf)
+ **[PDF]** [STM32 数据手册](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/STM32F030F4P6.pdf)

## 项目

这是该产品的介绍视频，包含简单的演示，您可以尝试一下。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/5uBLf_a0DNc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>