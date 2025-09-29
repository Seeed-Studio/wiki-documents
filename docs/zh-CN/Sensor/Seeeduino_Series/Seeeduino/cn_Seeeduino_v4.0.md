---
description: Seeeduino v4.0
title: Seeeduino v4.0
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino_v4.0
last_update:
  date: 1/11/2023
  author: shuxu hu
---

<!-- <p style="text-align:center"><a href=target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/ARD128D2P_1_02.jpg" border=0 /></a></p>  -->
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/ARD128D2P_1_02.jpg)

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Seeeduino-V4-p-669.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->
<a href="https://www.seeedstudio.com/Seeeduino-V4-p-669.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></a>
Seeeduino v4.0 是一款基于 ATMEGA328 微控制器的开发板。ATMEGA328P-MU 是一款高性能、低功耗的 AVR 8 位微控制器。Seeeduino v4.0 具有 14 个数字输入/输出引脚（其中 6 个可用作 PWM 输出）和 6 个模拟引脚。该开发板还配备了 ATMEGA16U2 微控制器，用作 UART 转 USB 转换芯片，这意味着该开发板基本上可以像 FTDI 芯片一样工作。

Seeeduino v4.0 继承了 Arduino Duemilanove 和 Uno 的所有功能，同时还增加了一些自己的特色。该开发板与 Duemilanove 和 Uno 的引脚布局兼容，并且具有与 Duemilanove 相同的螺丝孔和板子尺寸。

有关所有功能的详细说明和概述，请参阅本 Wiki 中标题为[板子接口、功能和组件](https://seeeddoc.github.io/Seeeduino_v4.0/#Board_Interface.2C_Features.2C_and_Components)的部分。

##   板子接口、功能和组件

Seeeduino 开发板提供了多种功能，其中一些功能在其他 duino 开发板中找不到（例如 5V 或 3.3V 逻辑、额外的接头焊盘、直接的 USB 转 UART 连接器）。请参阅下面对开发板接口及其独特功能的详细描述。

![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_0_board_sections.png)
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4_0_board_sections.png" alt="pir" width={600} height="auto" /></p>

###   1. J2 焊盘

连接到 ATMEGA16U2（U5 芯片）的 PB4、PB5、PB6 和 PB7 引脚。

###   2. LED 指示灯 L、TX、RX

"L" LED 连接到数字引脚 13，可在您的项目中用作"状态"LED。TX 和 RX LED 自动工作，它们分别让您知道开发板何时发送或接收信息。

###   3. Micro USB 端口

用于将开发板连接到 PC 进行编程的端口。Micro USB 是 USB 的通用版本，在大多数 Android 手机和其他设备中都能找到。您家里可能有很多这样的线缆。

###   4. SW2 滑动开关（5V 3V3）

滑动开关用于将开发板的逻辑电平和电源输出更改为 5V 或 3.3V。如今许多新的优秀传感器都是为 3.3V 工作而开发的，使用其他 duino 开发板时，您需要在开发板和这些传感器之间放置一个逻辑电平转换器，而使用 Seeeduino V4.0 开发板，您只需滑动开关即可！

###   5. DC 电源插孔

DC 电源插孔允许您的 Seeeduino 开发板通过墙式适配器供电，这样您就可以在需要时为项目提供更多电力，例如使用 DC 电机或其他大功率设备时。DC 输入可以是 7V-12V。

###   6. U5 ICSP

ATMEGA16U2 芯片的 ICSP 和 SPI 端口。

###   7. U5

ATMEGA16U2 芯片。该芯片负责 USB 转 UART 连接，用于对 ATMEGA328P-MU（U1）进行编程，也可以使用类似 FTDI 的端口。

###   8. SW1 按钮（复位）

该按钮方便地放置在侧面，即使在顶部放置了扩展板时，也能让您重置 Seeeduino 开发板。这在其他 duino 开发板中是不存在的，因为按钮放在顶部，很难访问。

###   9. 额外接头焊盘（数字）

有时直接将传感器/设备连接到开发板而不通过面包板是非常方便的，或者您可能想在完成项目后将传感器直接焊接到开发板上，或者您可能想在引脚被其他设备使用时监控引脚的输出。无论如何，我们添加了这些额外的焊盘来帮助您。

###   10. U1

ATmega328P-MU 芯片，这是开发板的大脑，您编写的代码在这里执行。

###   11. 额外接头焊盘（电源和模拟）

就像额外的数字接头焊盘一样，这些额外的连接是我们个人意识到人们在项目中需要的，特别是如果您想在不使用面包板的情况下为多个传感器/设备供电时的电源连接。

###   12. UART 转 USB（FTDI）焊盘/端口

这是 ATMEGA16U2（U5）芯片的 UART 转 USB 功能的输出/输入。您可以使用此端口直接与需要 UART 转串行连接的设备通信，它非常适合快速测试这些设备而无需编写任何代码。如果需要，此端口使 Seeeduino 开发板基本上像 FTDI 芯片一样工作。

VCC 的输出电压将是 5V 或 3.3V，取决于您使用 SW2 选择的电压。

###   13. U1 ICSP

这是 ATmega328P-MU 的 ICSP 连接，它位于 Arduino Uno、Due、Mega 和 Leonardo 兼容硬件（例如扩展板）的标准 ICSP/SPI 位置，这些硬件可能使用此连接器。此端口中的 SPI 引脚：MISO、SCK 和 MOSI，也分别连接到数字引脚 12、13 和 11，就像 Arduino Uno 一样。

###   14. Grove 连接器

[我们的商店](https://www.seeedstudio.com/depot/) 有各种传感器/设备可以使用这个 I2C 或 UART 连接。此外，我们还销售独立的 Grove 连接器来帮助您制作自己的传感器连接。如果您想使用这些引脚，I2C Grove 连接器也连接到模拟引脚 4 和 5，分别用于 SDA 和 SCL。UART Grove 连接器连接到数字引脚 0 和 1，分别用于 RX 和 TX。

###   15. PWM 引脚

数字引脚 3、5、6、8、9 和 10 可用于脉宽调制 (PWM)。

##  规格参数

*   微控制器：ATmega328P-MU

*   工作电压：5V 或 3.3V（通过滑动开关选择）
*   数字 I/O 引脚：14

*   PWM 通道：6

*   模拟输入通道：6

*   DC 插孔输入：7v-12v

*   每个 I/O 引脚的直流电流：40 mA

*   闪存：32 KB (ATmega328P-MU)

*   RAM：2 KB (ATmega328P-MU)

*   EEPROM：1 KB (ATmega328P-MU)

*   时钟速度：16 MHz

##   驱动程序安装  

###   自动安装

Arduino/Seeeduino 驱动程序包含在 [Arduino 软件](https://arduino.cc/en/main/software) 中。在 Windows 中，一旦安装了 Arduino 软件，将您的 Seeeduino 板插入 PC 的 USB 端口，驱动程序安装将自动开始，如下面的屏幕截图所示：

<!-- [](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_driver_installation_first_window.png) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_driver_installation_first_window.png" alt="pir" width={600} height="auto" /></p>
Seeeduino V4.0 驱动程序安装窗口在 Windows 中的显示。

几分钟后（2-5 分钟），驱动程序应该完成安装，您将看到此窗口：

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_driver_installation_final_window.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_driver_installation_final_window.png" alt="pir" width={600} height="auto" /></p>

Seeeduino V4 驱动程序安装完成窗口在 Windows 中的显示。

此时 Seeeduino V4.0 已准备就绪可以使用。

###   手动安装

在 Windows 中，如果自动驱动程序安装失败，您可以手动安装驱动程序，它们位于 Arduino 软件文件夹中，请按照以下步骤操作：

**1.** 通过搜索打开"设备管理器"窗口，然后点击"设备管理器"，如下面的动画图像所示。或者，如果这对您不起作用，您可以右键单击"我的电脑"-&gt;管理-&gt;设备管理器。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_how_to_open_device_manager_window.gif)  


**2.** 在"设备管理器"窗口中，在"端口 (COM&amp;LPT)"或"其他设备"下查找"USB Serial Port"，这是 Seeeduino 板，但尚未被 Windows 识别。右键单击并选择"更新驱动程序软件..."

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver1.jpg" alt="pir" width={600} height="auto" /></p>

**3.** 接下来，选择"浏览我的计算机以查找驱动程序软件"选项。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver2.jpg)  -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver2.jpg" alt="pir" width={600} height="auto" /></p>

**4.** 最后，找到并选择名为"Drivers"的文件夹，该文件夹位于 Arduino 软件下载的文件夹中。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Updata_Driver_Software_for_Seeeduino_v4.0.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Updata_Driver_Software_for_Seeeduino_v4.0.jpg" alt="pir" width={600} height="auto" /></p>

**5.** 如果驱动程序安装成功，您应该看到下面的对话框。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver4.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver4.jpg" alt="pir" width={600} height="auto" /></p>

**6.** 在"设备管理器"窗口中，您右键单击的设备现在应该显示"Arduino Uno (COMXX)"或"USB Serial Port(COMXX)"，如下所示。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver5.jpg)  -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver5.jpg" alt="pir" width={600} height="auto" /></p>

**7.** 当您打开 Arduino IDE 时，相同的 COM 端口也将可用。请记住，如果在驱动程序安装期间打开了 Arduino IDE，请关闭并重新打开 Arduino IDE，否则串行端口将不可见。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver6.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver6.jpg" alt="pir" width={600} height="auto" /></p>

##   示例/应用

###   示例 1：您的第一个 Arduino/Seeeduino 程序（LED 闪烁）

如本 WiKi 的"板子接口、功能和组件"部分所述，Seeeduino 板有一个连接到引脚 13 的板载 LED。在这个示例中，我们将向您展示如何让该 LED 闪烁。闪烁 LED 是最简单的程序，可以让人熟悉板子的硬件和软件。

要让您的 Seeeduino 板上的 LED 闪烁，请按照下面动画图像中的步骤操作：

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_blink_led_program_step_by_step.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_blink_led_program_step_by_step.gif" alt="pir" width={600} height="auto" /></p>

或者如果您愿意，我们已经列出并描述了每个步骤：

**1.** 打开 Arduino IDE
**2.** 通过转到 Tools->Board->Arduino Uno 选择 Seeeduino 板。Seeeduino 板被识别为 Arduino Uno 板。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload3.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload3.jpg" alt="pir" width={600} height="auto" /></p>

**3.** 确保通过转到 Tools->Serial Port->COMXX 选择了您的 Seeeduino 板连接的串行 COM 端口，其中 COMXX 是您板子的 COM 端口。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload4.jpg)  -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload4.jpg" alt="pir" width={600} height="auto" /></p>

**4.** 通过转到 File->Examples->0.1Basics->Blink 打开"Blink"示例。将打开一个带有代码的新窗口，您可以关闭之前/原始的 Arduino 窗口。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload2.jpg)  -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload2.jpg" alt="pir" width={600} height="auto" /></p>

**5.** 在这个新窗口中点击"Upload"按钮，这将上传/发送代码到您的 Seeeduino 板。等待几秒钟直到显示"Done Uploading"消息，此消息表示代码已成功写入板子并准备使用。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload1.jpg" alt="pir" width={600} height="auto" /></p>

**6.** Seeduino 板上的蓝色板载 LED 应该开始闪烁，如下所示：

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_led_blink.gif)  -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_led_blink.gif" alt="pir" width={600} height="auto" /></p>

###   示例 2：UART-to-USB (FTDI) 和 3.3V 逻辑 - 无需额外电路和编写软件即可开始使用 ESP8266 WiFi 模块

与竞争对手相比，Seeeduino V4.0 板的两个重要特性是它能够在 5V 和 3.3V 逻辑之间切换，以及它的 USB-to-UART 端口本质上使其成为类似 FTDI 的设备，非常适合快速开始使用 UART 协议/接口的设备。

在这个示例中，我们将向您展示如何使用流行的 [ESP8266 WiFi 模块](https://www.seeedstudio.com/depot/WiFi-Serial-Transceiver-Module-w-ESP8266-p-1994.html?cPath=19_20)。这个示例很棒，因为使用其他 duino 板您需要电压转换器、逻辑转换器和软件来控制两个独立的串行端口，但使用 Seeeduino 板这三样都不需要。

**步骤 1：将板子设置为 3.3V 模式**

**1.** 从 Seeeduino 板上移除所有电源，使其完全关闭。
**2.** 将开关 SW2 滑动到 3V3 设置。

**步骤 2：ESP8266-Seeeduino 连接**

将您的 ESP8266 WiFi 模块连接到 Seeeduino 板，如下所示（请参见下面的照片原理图）：

<table>
<tr>
<th>Seeeduino 引脚</th>
<th>ESP8266 引脚</th>
</tr>
<tr>
<td>GND</td>
<td>GND</td>
</tr>
<tr>
<td>TX</td>
<td>RX</td>
</tr>
<tr>
<td>RX</td>
<td>TX</td>
</tr>
<tr>
<td>CH_PD</td>
<td>VCC</td>
</tr>
<tr>
<td>VCC</td>
<td>VCC</td>
</tr>
</table>

:::note
     Seeeduino V4.0 和 ESP8266 原理图。SW2 显示设置为 5V，但请将其滑动到 3V3。
:::
<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_esp8266_schematic.png)  -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_esp8266_schematic.png" alt="pir" width={600} height="auto" /></p>


**步骤 3：发送命令**

**1.** 将您的 Seeeduino 板连接到 PC 的 USB 端口。
**2.** 打开 Arduino IDE
**3.** 上传一个空白程序到您的板子，或确保它拥有的程序不使用任何串行功能。

```cpp
void setup()
{

    }

    void loop()
{

    }
```


**4.** 打开 Arduino "Serial Monitor" 窗口。

**5.** 在串行监视器窗口中将您的设置更改为"Both NL &amp;CR"，波特率设置为"9600"，或您的 ESP8266 的正确波特率，因为它可能不同。

**6.** ESP8266 已准备好接收和发送信息/命令。尝试发送"AT+RST"来重置模块，然后发送"AT+CWLAP"来列出您的 ESP8266 能够检测到的所有接入点。请参见下面的图像以获取示例响应。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Esp8266-output.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Esp8266-output.png" alt="pir" width={600} height="auto" /></p>

##  版本跟踪器  

以下是 Seeeduino 开发板在所有版本中所做更改的列表。

<table>
  <tbody>
    <tr>
      <th>版本</th>
      <th>描述</th>
      <th>发布日期</th>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td width="300px">Seeeduino V0.9</td>
      <td width="500px">初始公开发布</td>
      <td width="200px"></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Seeeduino v1.1</td>
      <td>
        1.  修复错误 - Pin4 线路上不必要的过孔。
        2.  修复错误 - 标签被开关错误覆盖。
        3.  添加了 I2C 和传感器端口。
        4.  为 vcc 开关添加了一个 100uF 电容。
        5.  分组新的 100mil 网格引脚。
        6.  将复位按钮替换为金属按钮。
        7.  重新排列文本和标签以获得更清晰的指示。
      </td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Seeeduino v2.12</td>
      <td>
        1.  关闭时零外部功耗
        2.  更强的开关
        3.  5V 直接输入的第二电源。[注意] 仅使用 5V！
        4.  3.3V 下 150mA 驱动能力
        5.  1.0mm 薄 PCB 重量更轻
        6.  为引脚排针预留额外行
      </td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Seeeduino v2.2</td>
      <td>
        1.  USB/EXT 电源自动选择
        2.  升级电源电容
        3.  清理布局
        4.  更容易复位
        5.  真正的石英晶体
        6.  外部电源二极管更改为 1N4004（Vin 引脚上更多功率）
      </td>
      <td>2010年12月16日</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Seeeduino v2.21</td>
      <td>
        1.  升级到更强的 mini USB 连接器。
      </td>
      <td>2011年1月12日</td>
    </tr>
    <tr>
      <td>Seeeduino v3.0</td>
      <td>
        1.  将 JST 连接器更改为 DC Jack 连接器
      </td>
      <td>2012年1月1日</td>
    </tr>
    <tr>
      <td>Seeeduino v4.0</td>
      <td>
        1.  移除 RST 开关
        2.  ATMEGA16U2 作为 USB 总线转换器芯片
        3.  DC-to-DC 转换器以减少功耗
        4.  Micro USB
        5.  UNO 引导加载程序
      </td>
      <td>2014年9月1日</td>
    </tr>
  </tbody>
</table>


##  错误报告

*   PWM 的丝印有错误。PWM 引脚应该是 D9、D10、D11。我们将尽快修复此错误。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_bug.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_bug.png" alt="pir" width={600} height="auto" /></p>


## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/res/Seeeduino_v4.0_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##   资源/参考资料

- **[Eagle]**  [Seeeduino v4.0 Eagle 文件](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/res/Seeeduino_v4.0_Eagle.zip)
- **[PDF]**[Seeeduino v4.0 pdf](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/res/Seeeduino%20v4.0.pdf)
- **[EAGLE]**[Seeeduino v4.0 sch](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/res/Seeeduino%20v4.0.sch)
- **[PDF]**  [Seeeduino v4.0 SCH 文件 ](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/res/Seeeduino_v4.0_pdf.pdf)
- **[数据手册]**  [ATMEGA328P-MU 摘要](http://www.atmel.com/Images/Atmel-8271-8-bit-AVR-Microcontroller-ATmega48A-48PA-88A-88PA-168A-168PA-328-328P_datasheet_Summary.pdf)
-  **[数据手册]** [ATMEGA16U2 摘要](http://www.atmel.com/Images/7799S.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>