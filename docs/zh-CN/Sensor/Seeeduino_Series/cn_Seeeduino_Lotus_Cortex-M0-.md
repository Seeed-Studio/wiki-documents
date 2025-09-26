---
description: Seeeduino Lotus Cortex-M0+
title: Seeeduino Lotus Cortex-M0+
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino_Lotus_Cortex-M0-
last_update:
  date: 1/31/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/main.jpg)

Seeeduino Lotus Cortex-M0+ 是一个基于 ATMEGA SAM D21 微控制器的开发板。Atmel® | SMART™ SAM D21 是一系列使用 32 位 ARM® Cortex®-M0+ 处理器的低功耗微控制器，具有 256KB Flash 和 32KB SRAM。你可以将 Seeeduino Lotus Cortex-M0+ 视为 Seeeduino 和 Base Shield 的组合。

Seeeduino Lotus Cortex-M0+ 具有 14 个数字输入/输出引脚（其中 10 个支持 PWM）和 6 个模拟输入/输出引脚，3 个串行通信接口，一个 micro USB 连接器，一个 JST2.0 锂电池连接器，一个 ICSP 接头，12 个 Grove 连接器，一个复位按钮。

Seeeduino Lotus Cortex-M0+ 是 [Seeeduino Lotus V1.1](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface-p-2917.html) 的升级版本，它采用了更强大的芯片，优化了电路布局，电源供应更加稳定。由于该芯片支持直接 USB 电平输出，因此无需使用串口转 USB 芯片，如 CP2102N。因此，用户可以使用更多的硬件串口。

Seeeduino Lotus 具有 14 个数字输入/输出引脚（其中 6 个可以输出 PWM）和 7 个模拟输入/输出引脚，一个 micro USB 连接，一个 ICSP 接头，12 个 Grove 连接，一个复位按钮。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)

## 版本

---

| 版本 | 描述                                              | 发布时间      |购买链接|
|----------|-----------------------------------------------------------|--------------|--------------|
| v1.0   | 初始公开发布（测试版）                             | 2014年7月22日  |[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)|
| v1.1   | 将 CH340 替换为 CP2102N 以实现与 MAC 的兼容性 |2016年12月22日   |[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-Lotus-V1.1-ATMega328-Board-with-Grove-Interface-p-2917.html)|
|Seeeduino Lotus Cortex-M0+| 将 Atmega328 微控制器芯片更换为 SAM D21 / 优化电路设计，电源供应更稳定|2018年10月29日|[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)|

### 升级说明

与 Seeeduino Lotus V1.1 相比，Seeeduino Lotus Cortex-M0+ 主要在硬件方面进行了升级。请查看下图。

|项目|Seeeduino Lotus V1.1|Seeeduino Lotus Cortex-M0+|
|---|---|----|
|MCU|Atmega328 |SAM D21|
|UART|1|2|
|锂电池支持|否|是|
|PWM 引脚|6|10|

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/block/area_chart.jpg" />
    <figcaption><b>图 1</b>. <i>对比图表</i></figcaption>
  </figure>
</div>

## 应用创意

* DIY
* 物联网和智能家居
* 机器人
* 教育

## 特性

* 完全兼容 Arduino UNO
* ARM® Cortex®-M0+ 32位 48MHz 微控制器(SAMD21)
* 12个板载Grove连接器
* 14个数字I/O引脚（10个PWM输出）
* 6个模拟输入
* 支持电源路径管理
* 支持micro-usb或锂聚合物电池供电
* 2A最大充电电流
* 适用于低功耗设计

## 规格参数

|项目|数值|
|------------|-----------|
|微控制器|SAM D21|
|电源输入|Micro-USB  / JST2.0|
|工作电压|USB:5V / 锂电池:3.5V~4.2V|
|数字I/O引脚|14|
|PWM通道|10|
|模拟输入通道|6|
|每个I/O引脚直流电流|40 mA|
|IO输入电压|3.3V|
|SRAM|32 KB|
|闪存|256KB|
|最大CPU频率|48 MHz|

## 引脚图

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/Pin_out.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/Pin_out.jpg" /></a></p>
    <figcaption><b>图 2</b>. <i>引脚图，您可以点击图片查看原始文件</i></figcaption>
  </figure>
</div>

## 硬件概述

下面的图片展示了Seeeduino Lotus硬件特性的概述。引脚图显示了Seeeduino Lotus各个引脚的引脚分布和替代功能。这可以用作快速参考。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/block/overview.jpg" />
    <figcaption><b>图 3</b>. <i>硬件概述</i></figcaption>
  </figure>
</div>

* **Grove数字接口**  
有6个grove数字连接器，让我们以**D3**为例：  

>GND: 系统GND  
>VCC: 输出3.3V VCC  
>D3: 连接到数字引脚3  
>D2: 连接到数字引脚2  

您可以在板子背面找到丝印标识。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/block/4.jpg" />
    <figcaption><b>图 4</b>. <i>Grove数字连接器</i></figcaption>
  </figure>
</div>

* **Grove模拟接口**  
有三个模拟Grove连接器，输入电压范围为0~3.3V。如果您需要超过3个模拟输入，可以使用排针区域的模拟引脚。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/block/5.jpg" />
    <figcaption><b>图 5</b>. <i>Grove模拟连接器</i></figcaption>
  </figure>
</div>

* **Grove UART**  
我们提供3个硬件UART端口，一个Grove UART，排针中的TX-RX引脚，以及SWD端口中的复用功能引脚**SCK** **SDO**。但是复用引脚目前不被固件支持。
所以实际上，现在只有两个硬件UART可用。**Serial**对应Grove UART，**Serial1**对应排针区域的RX-TX。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/block/3.jpg" />
    <figcaption><b>图 6</b>. <i>Grove硬件UART</i></figcaption>
  </figure>
</div>

* **母排针**  
Seeeduino Lotus Cortex-M0+母排针完全兼容Arduino UNO。值得一提的是，在数字部分，所有前面带有**~**的引脚都支持PWM输出。这意味着**D3,D4,D5,D6,D8,D9,D10,D11,D12,D13**，总共十个。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/block/2.jpg" />
    <figcaption><b>图 7</b>. <i>母排针</i></figcaption>
  </figure>
</div>

* **锂聚合物电池接口**  
您可以同时使用USB和锂聚合物电池为Seeeduino Lotus Cortex-M0+供电。同时，您可以使用这个板子为锂聚合物电池充电。当您用USB为板子供电并同时插入锂聚合物电池时，锂聚合物电池将被充电，**CHR** LED将闪烁。电池充满后，**CHR** LED将停止闪烁。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/block/7.jpg" />
    <figcaption><b>图 8</b>. <i>JST2.0锂聚合物电池接口</i></figcaption>
  </figure>
</div>

## 开始使用

### 硬件

首先，您需要：

* **获取一根 Micro-USB 数据线**
您首先需要一根 Micro-USB 数据线；安卓手机的数据线就可以。
如果您找不到，可以在[这里](https://www.seeedstudio.com/depot/Micro-USB-Cable-48cm-p-1475.html?cPath=98_100)购买一根。

* **连接开发板**
使用 USB 数据线将 Arduino 开发板连接到您的计算机。绿色电源 LED（标记为 **PWR**）应该会亮起。

### 软件

* **步骤 1. 您需要安装 Arduino 软件。**

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**启动 Arduino 应用程序**

双击您之前下载的 Arduino 应用程序（arduino.exe）。

:::note
    如果 Arduino 软件以不同的语言加载，您可以在首选项对话框中更改它。详情请参见 [Arduino 软件 (IDE) 页面](https://www.arduino.cc/en/Guide/Environment#languages)。
:::

* **步骤 2. 打开 Blink 示例**  
打开 LED 闪烁示例程序：**File > Examples >01.Basics > Blink**。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" />
    <figcaption><b>图 9</b>. <i>Blink 路径</i></figcaption>
  </figure>
</div>

* **步骤 3. 添加 Seeed 开发板**  
请按照 [Seeed 开发板安装指南](https://wiki.seeedstudio.com/cn/Seeed_Arduino_Boards/) 将 Seeeduino samd 添加到您的 Arduino IDE 中。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/board2.png" />
    <figcaption><b>图 10</b>. <i>关键词是 Lotus M0</i></figcaption>
  </figure>
</div>

* **步骤 4. 选择您的开发板和端口**  
您需要在 **Tools > Board** 菜单中选择与您的 Arduino 对应的条目。
选择 **Seeeduino Zero**。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/board1.png" />
    <figcaption><b>图 11</b>. <i>选择正确的开发板</i></figcaption>
  </figure>
</div>

从 Tools | Serial Port 菜单中选择 Arduino 开发板的串行设备。这很可能是 COM3 或更高（**COM1** 和 **COM2** 通常为硬件串行端口保留）。要找出端口，您可以断开 Arduino 开发板的连接并重新打开菜单；消失的条目应该就是 Arduino 开发板。重新连接开发板并选择该串行端口。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/port.png" />
    <figcaption><b>图 12</b>. <i>选择正确的端口</i></figcaption>
  </figure>
</div>

* **步骤 5. 上传程序**  
现在，只需点击环境中的"Upload"按钮。等待几秒钟，如果上传成功，状态栏中将显示"Done uploading."消息。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" />
    <figcaption><b>图 13</b>. <i>上传代码</i></figcaption>
  </figure>
</div>

上传完成几秒钟后，您应该会看到开发板上的引脚 13 (L) LED 开始闪烁（橙色）。如果是这样，恭喜您！您已经成功运行了 Arduino。如果遇到问题，请参阅故障排除建议。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/res/Seeeduino_Lotus_Cortex-M0%2B.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

* **[ZIP]** [Seeeduino Lotus Cortex-M0+ Eagle 文件](https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/res/Seeeduino_Lotus_Cortex-M0%2B.zip)
* **[PDF]** [SAM D21 数据手册](https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/res/SAM_D21.pdf)

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
