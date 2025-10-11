---
title: LTE Cat 1 Pi HAT
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/LTE_Cat_1_Pi_HAT/
slug: /cn/LTE_Cat_1_Pi_HAT
last_update:
  date: 01/11/2022
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/overview.JPG)

Seeed的LTE CAT.1 Pi HAT是一个基于u-blox LARA-R2xx系列的开源蜂窝扩展调制解调器，适用于Raspberry Pi，兼容Raspberry Pi 1 Model B+及更高版本。

LTE CAT.1 Pi HAT专为LTE Category 1网络设计，并支持2G回退（仅限欧洲版本）。嵌入了常见协议，如TCP/UDP、HTTP。

LTE CAT.1 Pi HAT支持UART和USB接口。通过UART，Raspberry Pi可以通过AT命令与LTE CAT.1 Pi HAT通信，无需任何特殊驱动程序。它非常适合快速构建原型。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/nQmORk9_EQM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

|版本|链接|
|--|--|
|欧洲版<br/>|<p style={{}}><a href="https://www.seeedstudio.com/TE-Cat-1-Pi-HAT-%28Europe%29-p-3060.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|
|美国-AT&T版<br/> |<p style={{}}><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28USA-AT%26T%29-p-3056.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|
|美国-VZW版<br />|<p style={{}}><a href="https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28USA-VZW%29-p-3061.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" /></a></p>|

## 版本

| 产品版本              | 变更 | 发布日期 |
|------------------------------|---------|---------------|
| LTE Cat 1 Pi HAT(USA-AT&T)   | 初始版本 | 2017年12月      |
| LTE Cat 1 Pi HAT(USA-VZW)    | 初始版本 | 2017年12月      |
| LTE Cat 1 Pi HAT(Europe)     | 初始版本 | 2017年12月      |

## 规格参数

- 兼容Raspberry Pi 1 Model
B+及更高版本

- LTE CAT.1并支持2G回退（仅限欧洲版本）

- UART和USB接口用于通信

- 支持Grove I2C和数字连接器

- 蜂窝模块协议

- 嵌入TCP/UDP协议栈

- 嵌入HTTP、FTP、SSL

- 双栈IPV4/IPV6

- 3GPP TS 27.007 [8]、TS 27.005 [9]标准AT命令

## 应用场景

- 物联网网关
- 数据记录器
- 自动售货机
- POS机
- 智能家居设备
- 机器人
- 广告设备
- 其他需要蜂窝网络的场景

## 硬件概述

**接口**

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/interfaces1.png)

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/interfaces2.png)

- **LTE CAT.1**: U-blox LARA-R2xx系列LTE CAT.1模块，更多信息请参考[u-blox LARA-R2系列产品页面](https://www.u-blox.com/en/product/lara-r2-series)。
- **Grove端口**: 2个Grove I2C/数字端口，连接到SDA_RPI、SCL_RPI，可用作I2C或GPIO端口。
- **开关**: 控制Grove端口电压为5V或3.3V
- **USB接口**: 可用于为LTE Cat.1 Pi HAT和Raspberry Pi一起供电，也可用作调试端口。关于如何用作调试端口，请参考FAQ Q1。
- **电池座**: MP2617用于电池电源管理。如果未连接电池，CHG LED将以6HZ频率闪烁。充电时熄灭，充电完成时点亮。连接器为JST2.0标准。
- **Lara-R2XX复位按钮**: 复位Lara-R2xx模块。
- **Lara-R2XX开机按钮**: 按2秒钟开启Lara-R2xx模块。
- **天线**: 包含2个天线，一个是主天线，另一个是分集天线。主天线用于发送和接收信号。必须连接。分集天线仅用于接收，用于提高接收器灵敏度。可选。
- **Rpi 40引脚**: 参考引脚图。
- **SIM卡槽**: 按照丝印方向插入LTE SIM卡。

:::caution
    对于电池，我们建议使用3.7V锂离子电池并连接到JST2.0。特别是对于Lara-R211（欧洲版）Pi HAT，它包含GSM功能，功耗较高。如果周围没有LTE信号，LTE CAT.1 Pi HAT也会消耗大量电源。因此我们强烈建议连接电池。
:::

**引脚图**

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/pinout.jpg)

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}\n.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}\n.tg .tg-us36{border-color:inherit;vertical-align:top}\n" }} />
  <table className="tg">
      <tbody><tr>
          <th className="tg-us36">引脚用途</th>
          <th className="tg-us36">Python (BCM)</th>
          <th className="tg-us36">WiringPi GPIO</th>
          <th className="tg-us36">名称</th>
          <th className="tg-us36" colSpan={2}>P1 引脚编号</th>
          <th className="tg-us36">名称</th>
          <th className="tg-us36">WiringPi GPIO</th>
          <th className="tg-us36">Python (BCM)</th>
          <th className="tg-us36">引脚用途</th>
        </tr>
        <tr>
          <td className="tg-us36">3V3_RPI</td>
          <td className="tg-us36" />
          <td className="tg-us36" />
          <td className="tg-us36">3.3v 直流电源</td>
          <td className="tg-us36">1</td>
          <td className="tg-us36">2</td>
          <td className="tg-us36">5v 直流电源</td>
          <td className="tg-us36" />
          <td className="tg-us36" />
          <td className="tg-us36">5V_RPI</td>
        </tr>
        <tr>
          <td className="tg-us36">SDA_RPI</td>
          <td className="tg-us36" />
          <td className="tg-us36">8</td>
          <td className="tg-us36">GPIO02 (SDA1, I2C)</td>
          <td className="tg-us36">3</td>
          <td className="tg-us36">4</td>
          <td className="tg-us36">5v 直流电源</td>
          <td className="tg-us36" />
          <td className="tg-us36" />
          <td className="tg-us36">5V_RPI</td>
        </tr>
        <tr>
          <td className="tg-us36">SCL_RPI</td>
          <td className="tg-us36" />
          <td className="tg-us36">9</td>
          <td className="tg-us36">GPIO03 (SCL1, I2C)</td>
          <td className="tg-us36">5</td>
          <td className="tg-us36">6</td>
          <td className="tg-us36">接地</td>
          <td className="tg-us36" />
          <td className="tg-us36" />
          <td className="tg-us36">GND</td>
        </tr>
        <tr>
          <td className="tg-us36">空闲</td>
          <td className="tg-us36">4</td>
          <td className="tg-us36">7</td>
          <td className="tg-us36">GPIO04</td>
          <td className="tg-us36">7</td>
          <td className="tg-us36">8</td>
          <td className="tg-us36">GPIO14 (TXD0)</td>
          <td className="tg-us36">15</td>
          <td className="tg-us36" />
          <td className="tg-us36">TX_RPI</td>
        </tr>
        <tr>
          <td className="tg-us36">GND</td>
          <td className="tg-us36" />
          <td className="tg-us36" />
          <td className="tg-us36">接地</td>
          <td className="tg-us36">9</td>
          <td className="tg-us36">10</td>
          <td className="tg-us36">GPIO15 (RXD0)</td>
          <td className="tg-us36">16</td>
          <td className="tg-us36" />
          <td className="tg-us36">RX_RPI</td>
        </tr>
        <tr>
          <td className="tg-us36">RTS_RPI</td>
          <td className="tg-us36">17</td>
          <td className="tg-us36">0</td>
          <td className="tg-us36">GPIO17</td>
          <td className="tg-us36">11</td>
          <td className="tg-us36">12</td>
          <td className="tg-us36">GPIO18</td>
          <td className="tg-us36">1</td>
          <td className="tg-us36">18</td>
          <td className="tg-us36">空闲</td>
        </tr>
        <tr>
          <td className="tg-us36">空闲</td>
          <td className="tg-us36">27</td>
          <td className="tg-us36">2</td>
          <td className="tg-us36">GPIO27</td>
          <td className="tg-us36">13</td>
          <td className="tg-us36">14</td>
          <td className="tg-us36">接地</td>
          <td className="tg-us36" />
          <td className="tg-us36" />
          <td className="tg-us36">GND</td>
        </tr>
        <tr>
          <td className="tg-us36">空闲</td>
          <td className="tg-us36">22</td>
          <td className="tg-us36">3</td>
          <td className="tg-us36">GPIO22</td>
          <td className="tg-us36">15</td>
          <td className="tg-us36">16</td>
          <td className="tg-us36">GPIO23</td>
          <td className="tg-us36">4</td>
          <td className="tg-us36">23</td>
          <td className="tg-us36">空闲</td>
        </tr>
        <tr>
          <td className="tg-us36">3V3_RPI</td>
          <td className="tg-us36" />
          <td className="tg-us36" />
          <td className="tg-us36">3.3v 直流电源</td>
          <td className="tg-us36">17</td>
          <td className="tg-us36">18</td>
          <td className="tg-us36">GPIO24</td>
          <td className="tg-us36">5</td>
          <td className="tg-us36">24</td>
          <td className="tg-us36">空闲</td>
        </tr>
        <tr>
          <td className="tg-us36">空闲</td>
          <td className="tg-us36" />
          <td className="tg-us36">12</td>
          <td className="tg-us36">GPIO10 (SPI0_MOSI)</td>
          <td className="tg-us36">19</td>
          <td className="tg-us36">20</td>
          <td className="tg-us36">接地</td>
          <td className="tg-us36" />
          <td className="tg-us36" />
          <td className="tg-us36">GND</td>
        </tr>
        <tr>
          <td className="tg-us36">空闲</td>
          <td className="tg-us36" />
          <td className="tg-us36">13</td>
          <td className="tg-us36">GPIO09 (SPI0_MISO)</td>
          <td className="tg-us36">21</td>
          <td className="tg-us36">22</td>
          <td className="tg-us36">GPIO25 </td>
          <td className="tg-us36">6</td>
          <td className="tg-us36">25</td>
          <td className="tg-us36">空闲</td>
        </tr>
        <tr>
          <td className="tg-us36">空闲</td>
          <td className="tg-us36" />
          <td className="tg-us36">14</td>
          <td className="tg-us36">GPIO11 (SPI0 SCLK)</td>
          <td className="tg-us36">23</td>
          <td className="tg-us36">24</td>
          <td className="tg-us36">GPIO08 (SPI0_CS0)</td>
          <td className="tg-us36">10</td>
          <td className="tg-us36" />
          <td className="tg-us36">空闲</td>
        </tr>
        <tr>
          <td className="tg-us36">GND</td>
          <td className="tg-us36" />
          <td className="tg-us36" />
          <td className="tg-us36">接地</td>
          <td className="tg-us36">25</td>
          <td className="tg-us36">26</td>
          <td className="tg-us36">GPIO07 (SPI0_CS1)</td>
          <td className="tg-us36">11</td>
          <td className="tg-us36" />
          <td className="tg-us36">空闲</td>
        </tr>
        <tr>
          <td className="tg-us36">空闲</td>
          <td className="tg-us36" />
          <td className="tg-us36">30</td>
          <td className="tg-us36">保留</td>
          <td className="tg-us36">27</td>
          <td className="tg-us36">28</td>
          <td className="tg-us36">保留</td>
          <td className="tg-us36">31</td>
          <td className="tg-us36" />
          <td className="tg-us36">空闲</td>
        </tr>
        <tr>
          <td className="tg-us36">LARA_PWR</td>
          <td className="tg-us36">5</td>
          <td className="tg-us36">21</td>
          <td className="tg-us36">GPIO05</td>
          <td className="tg-us36">29</td>
          <td className="tg-us36">30</td>
          <td className="tg-us36">接地</td>
          <td className="tg-us36" />
          <td className="tg-us36" />
          <td className="tg-us36">GND</td>
        </tr>
        <tr>
          <td className="tg-us36">LARA_RST</td>
          <td className="tg-us36">6</td>
          <td className="tg-us36">22</td>
          <td className="tg-us36">GPIO06</td>
          <td className="tg-us36">31</td>
          <td className="tg-us36">32</td>
          <td className="tg-us36">GPIO12</td>
          <td className="tg-us36">26</td>
          <td className="tg-us36">12</td>
          <td className="tg-us36">空闲</td>
        </tr>
        <tr>
          <td className="tg-us36">空闲</td>
          <td className="tg-us36">13</td>
          <td className="tg-us36">23</td>
          <td className="tg-us36">GPIO13</td>
          <td className="tg-us36">33</td>
          <td className="tg-us36">34</td>
          <td className="tg-us36">接地</td>
          <td className="tg-us36" />
          <td className="tg-us36" />
          <td className="tg-us36">GND</td>
        </tr>
        <tr>
          <td className="tg-us36">空闲</td>
          <td className="tg-us36">19</td>
          <td className="tg-us36">24</td>
          <td className="tg-us36">GPIO19(SPI1 MISO)</td>
          <td className="tg-us36">35</td>
          <td className="tg-us36">36</td>
          <td className="tg-us36">GPIO16(SPI1 CS0)</td>
          <td className="tg-us36">27</td>
          <td className="tg-us36">16</td>
          <td className="tg-us36">CTS_RPI</td>
        </tr>
        <tr>
          <td className="tg-us36">空闲</td>
          <td className="tg-us36">26</td>
          <td className="tg-us36">25</td>
          <td className="tg-us36">GPIO26</td>
          <td className="tg-us36">37</td>
          <td className="tg-us36">38</td>
          <td className="tg-us36">GPIO20(SPI1 MOSI)</td>
          <td className="tg-us36">28</td>
          <td className="tg-us36">20</td>
          <td className="tg-us36">空闲</td>
        </tr>
        <tr>
          <td className="tg-us36">GND</td>
          <td className="tg-us36" />
          <td className="tg-us36" />
          <td className="tg-us36">接地</td>
          <td className="tg-us36">39</td>
          <td className="tg-us36">40</td>
          <td className="tg-us36">GPIO21(SPI1 SCLK)</td>
          <td className="tg-us36">29</td>
          <td className="tg-us36">21</td>
          <td className="tg-us36">空闲</td>
        </tr>
      </tbody></table>
</div>

**尺寸**

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/Hard01.png)

<iframe src="https://3dwarehouse.sketchup.com/embed.html?mid=eeee1715-69fe-4e5e-a643-15a3c1f3510d" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="800" height="450" allowfullscreen></iframe>

**版本**

现在我们已经制作了三个版本的 LTE Cat 1 Pi HAT。除了支持不同的网络外，它们几乎相同。您可能需要注意的是，只有欧洲版本支持 2G 网络。

| 版本     | 模块      | 网络    |
|----------|-----------|---------|
| 欧洲版   | LARA-R211 | 2G/4G   |
| 美国-AT&T | LARA-R203 | 4G      |
| 美国-VZW  | LARA-R204 | 4G      |

## 入门指南

### 硬件

:::note
    我们在下面的演示中使用 Raspberry Pi3 和 2018-04-18 [RASPBIAN STRETCH WITH DESKTOP](https://www.raspberrypi.org/downloads/raspbian/)。
:::

- 步骤 1. 将 LTE Cat 1 Pi HAT 堆叠在 Raspberry Pi 顶部并连接 2 根天线。

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/Rasp_Pi_HAT.jpg)

- 步骤 2. 同时连接鼠标、键盘和显示器。
- 步骤 3. 给 Raspberry Pi 供电。

### 软件

- 步骤 1. 使用 dtoverlay=pi3-disable-bt 来启用 Raspberry Pi3/Pi4 UART0。

```
sudo nano /boot/config.txt
```

然后在 config.txt 的底部添加 `dtoverlay=pi3-disable-bt` 和 `enable_uart=1`。它应该看起来像这样。

```bash
[all]
#dtoverlay=vc4-fkms-v3d
dtoverlay=pi3-disable-bt
enable_uart=1
```

- 步骤 2. 禁用系统服务以使用 UART0。

```
sudo systemctl disable hciuart 
```

:::note
    Pi3-disable-bt 禁用蓝牙设备并将 UART0/ttyAMA0 恢复到 GPIO 14 和 15。还需要禁用初始化调制解调器的系统服务，这样它就不会使用 UART：sudo systemctl disable hciuart。
:::

- 步骤 3. 删除 cmdline.txt 中的 console=serial0,115200。

```
sudo nano /boot/cmdline.txt
```

然后从字符串中删除 console=serial0,115200。

- 步骤 4. 重启 Raspberry Pi3/Pi4

```
sudo reboot
```

- 步骤 5. 运行以下命令来运行演示

```
cd ~
git clone https://github.com/Seeed-Studio/ublox_lara_r2_pi_hat.git
cd ublox_lara_r2_pi_hat
sudo python setup.py install
cd test
sudo python test01.py
```

- 步骤 6. 这是终端的输出。

```
pi@raspberrypi:~/Desktop/ublox_lara_r2_pi_hat/examples $ sudo python test01.py
40-pin GPIO header detected
Enabling CTS0 and RTS0 on GPIOs 16 and 17
rts cts on
waking up...
module name:  LARA-R211
RSSI:  3
```

## 常见问题

**Q1: 我们可以直接用 PC 与 LTE Cat 1 Pi HAT 通信吗？**

A1: 是的，有 2 种方式。一种是 USB，另一种是 UART 端口。

- 对于 USB，请使用 USB 线缆直接将 Pi HAT 与 PC 连接。然后下载并安装 [u-blox Cellular USB_Windows Driver, v2.0](https://www.u-blox.com/sites/default/files/ubloxCell_usbcdc_windows_3264_v2.0.0.0.exe.zip)。在设备管理器中，COM3 和 COM4 用于 AT 命令。我们可以使用任何串行 COM 监控工具来运行 AT 命令，或者使用评估软件 [m-center for Windows, version 1.11.0](https://www.u-blox.com/sites/default/files/products/tools/m-center-01.11.00.exe) for windows。

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/device_manager.png)

- 对于 UART 端口，请使用 [usb to serial adaptor](https://www.seeedstudio.com/UartSBee-V5-p-1752.html)，按照以下连接并使用波特率 115200。我们可以使用任何串行 COM 监控工具来运行 AT 命令。

|   USB 转 UART 适配器 | LTE Cat1 Pi HAT              |
|-----------------------|------------------------------|
| GND                   | Pin6-GND                     |
| TX                    | Pin8-TX_RPI                  |
| RX                    | Pin10-RX_RPI                 |
| NA                    | Pin11-RTS_RPI 连接到 Pin9-GND |

![](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/UART.png)

:::caution
    如果我们使用 UART 端口进行通信，请务必将 RTS_RPI 连接到 GND，如上图红色标记所示。
:::
**Q2: 你们有 AT 命令列表吗？**

A2: 这里是 [u-blox-CEL_ATCommands](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/u-blox-CEL_ATCommands_(UBX-13002752).pdf)。

**Q3: Lara-R203/204/211 之间有什么区别？**

A3: 请参考 [u-blox LARA-R2 series product page](https://www.u-blox.com/en/product/lara-r2-series)。

**Q4: 如何为 LARA-203 注册到 AT&T 网络？**

A4: 请运行以下命令。

```
AT+COPS=2
AT+UMNOCONF=2
AT+COPS=0
```

您可以尝试以下命令来验证 AT&T 网络连接。

```
AT+UPSD=0,1,"AT&T"
AT+UPSDA=0,3
AT+UPING="www.google.com"
```

**Q5: 如何为 LARA-204 注册到 Verizon 网络？**

A5: 请运行以下命令。

```
AT+COPS=2
AT+UMNOCONF=3
AT+COPS=0
```

您可以尝试以下命令来验证 Verizon 网络连接。

```
AT+UPSD=0,1,"vzwinternet"
AT+UPSDA=0,3
AT+UPING="www.google.com"
```

## 资源

- **[PDF]** [LTE Cat.1 Pi HAT 原理图](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/LTE%20CAT.1%20Pi%20HAT%20v1.0.pdf)
- **[PDF]** [u-blox-CEL_AT命令](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/u-blox-CEL_ATCommands_(UBX-13002752).pdf)
- **[PDF]** [LARA-R2_数据手册](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/LARA-R2_DataSheet_(UBX-16005783).pdf)
- **[PDF]** [LARA-R2_系统集成手册](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/LARA-R2_SysIntegrManual_(UBX-16010573).pdf)
- **[PDF]** [AT命令示例应用笔记](https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/AT-CommandsExamples_AppNote_(UBX-13001820).pdf)

我们在 [geppetto](https://geppetto.seeedstudio.com/) 中提供了这个部件，通过 Seeed 和 Geppeto 轻松实现模块化电子设计。立即构建。[geppetto.seeedstudio.com](https://geppetto.seeedstudio.com/)

## 项目

**基于 LTE Pi HAT 的人脸识别智能锁**：人脸识别正变得越来越广泛应用，我们可以用它来制作智能锁。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/face-recognization-smart-lock-with-lte-pi-hat-abcec9/embed' width='350'></iframe>

## 技术支持与产品讨论

如果您有任何技术问题，请将问题提交到我们的[论坛](http://forum.seeedstudio.com/)。
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
