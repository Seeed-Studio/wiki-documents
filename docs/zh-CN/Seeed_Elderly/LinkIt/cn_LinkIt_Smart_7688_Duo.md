---
description: LinkIt Smart 7688 Duo
title: LinkIt Smart 7688 Duo
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/LinkIt_Smart_7688_Duo
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![输入图片描述](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Linkit_7688_DUO_Product_view.jpg)

:::danger
由于 MediaTek Labs 的关闭，所有相关链接已失效。如果需要下载相关文件，请在以下链接中搜索：[https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs)。
:::

LinkItTM Smart 7688 Duo（一个紧凑型控制板）是一款基于 MT7688（[数据手册](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/res/MT7688_datasheet.pdf)）和 ATmega32u4 的开放开发板。该板兼容 Arduino Yun 的草图，并基于 OpenWrt Linux 发行版。该板特别设计用于智能家居或办公室的丰富应用物联网设备的原型开发[1]。由于它与 Arduino 兼容良好，您可以使用 Arduino Yun 和 LinkIt Smart 7688 Duo 的不同功能[2]。这将帮助您基于各种稳健且已编译的 Arduino Yun 草图构建丰富的应用程序。该板为您提供了内存和数据包存储，以支持稳健的视频处理。该平台还提供了使用 Python、Node.js 和 C 编程语言创建设备应用程序的选项。

:::note
* 同一时间只能有一个控制器作为主控制器。
* 此开发板仅是 MediaTek LinkItTM Smart 7688 平台的一部分，该平台还包括其他开发板。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkIt-Smart-7688-Duo-p-2574.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 特性

* 580 MHz MIPS CPU
* 单输入单输出（1T1R）Wi-Fi 802.11 b/g/n（2.4G）
* GPIO、I2C、I2S、SPI、SPIS、UART、PWM 和以太网端口的引脚输出
* 32MB 闪存和 128MB DDR2 RAM
* USB 主机
* Micro SD 插槽
* 支持 Arduino API（ATmega32U4）

## 应用场景

* 物联网/网关设备
* 机器人
* 教学与学习

## 规格

* MPU
    * 芯片组：MT7688AN
    * 核心：MIPS24KEc
    * 时钟速度：580MHz
    * 工作电压：3.3V
* MCU
    * 芯片组：ATmega32U4
    * 核心：Atmel AVR
    * 时钟速度：8MHz
    * 工作电压：3.3V
* 内存
    * 闪存：32MB
    * RAM：128MB DDR2
* GPIO
    * 引脚数量：3（MT7688AN），24（ATmega32U4）
    * 电压：3.3V
* PWM
    * 引脚数量：8（ATmega32U4）
    * 电压：3.3V
    * 最大分辨率：16 位（可定制）
* ADC
    * 引脚数量：12（ATmega32U4）
    * 分辨率：10 位
* 外部中断：8
* SPI/SPIS
    * 引脚编号：S0、S1、S2、S3
    * 最大速度：4MHz
* I2C
    * 引脚编号：D2/D3
    * 速度：400KHz
* UART Lite
    * ATmega32U4 和 MT7688AN 各 1 个
    * 引脚编号：P8/P9（MT7688AN），D0/D1（ATmega32U4）
* USB 主机
    * 引脚编号：P6/P7
    * 接口类型：Micro-AB
* 通信
    * Wi-Fi：1T1R 802.11 b/g/n（2.4G）
    * 以太网：1 端口 10/100 FE PHY
    * 引脚编号：P2/P3/P4/P5
* 用户存储：SD 卡 Micro SD/SDXC
* 尺寸：60.8x26.0mm

## 硬件概览

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Front_component_view_with_text_1200_s.jpg)

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/7688_duo_backview_with_text_1200.jpg)


:::note
    * 为了保护产品免受不当操作的影响，请注意以下事项。选择输出稳定的更可靠电源适配器。推荐的 7688 电源输入条件：
          * 电源输入的过冲电压不应超过 5.5。
          * 电压波动应在额定电压的 ±100mV 范围内。
:::


## 入门指南

### 连接嵌入式操作系统

:::note
    手册中描述了两种方法。在本案例中，我们仅展示一种高级方法（使用 USB 转串口适配器），这可能看起来稍微复杂一些。但从长远来看，您将从中受益匪浅。
:::
#### 所需材料

* LinkIt Smart 7688 x 1
* USB 数据线（Type A 至 Micro Type-B）x 1
* USB 转串口适配器 x 1
* 跳线 x 3

### 在 Windows 上

**1.** 安装 [PuTTy](http://www.putty.org/)。PuTTY 提供了一个使用 SSH（安全外壳协议）访问开发板操作系统的系统控制台环境。

**2.** 安装 [Bonjour](https://support.apple.com/kb/DL999?viewlocale=en_US&locale=en_US) 打印服务（适用于 Windows 7、Windows 8、Windows 10）。

**3.** 安装驱动程序。如果您使用的是基于 FTDI 芯片的 USB 数据线，请从 [这里](https://www.ftdichip.com/Drivers/VCP.htm) 下载并安装其驱动程序。如果您遇到最新驱动程序的问题，请尝试安装 [旧版本](https://www.ftdichip.com/Support/Documents/InstallGuides.htm)。

**4.** 接下来，您需要将串口转 USB 数据线连接到 LinkIt Smart 7688 的 UART 引脚，如下表所示：

| USB 适配器上的引脚 |	LinkIt Smart 7688 上对应的连接引脚 |
|--------------------|-----------------------------------|
| Pin RX	| Pin 8 |
| Pin TX	| Pin 9 |
| Pin GND |	Pin GND |

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/7688_duo_demo_view_1200_s.jpg)

**5.** 连接串口转 USB 数据线后，打开设备管理器并注意 COM 端口号，如图 22 所示。此号码可能因不同的计算机而异。

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/COM_port.jpg)

**6.** 启动 PuTTY 终端，输入设备管理器中找到的 USB 设备的 COM 端口号，点击 Serial 单选按钮，在 Speed 框中输入 57600，然后点击 Open，如图 23 所示。

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Putty_configuration.jpg)

**7.** 要退出系统控制台，请点击 PuTTY 窗口右上角的 **关闭图标**。

### 在 Mac 上

**1.** 如果需要，请安装驱动程序。检查数据线制造商的网站以了解 Mac 上的驱动程序要求和安装说明。

**2.** 将数据线插入 PC/笔记本电脑，并将数据线连接到 LinkIt Smart 7688。

**3.** 打开一个终端会话。

**4.** 在终端中输入 **ls /dev/cu**。您应该会看到设备列表。寻找类似 cu.usbserial-XXXXXXXX 的设备，其中 XXXXXXXX 通常是随机标识符。这是用于访问系统控制台的串口设备。

**例如：**

```
$ls /dev/cu*

/dev/cu.Bluetooth-Incoming-Port

/dev/cu.Bluetooth-Modem

/dev/cu.pablop-WirelessiAP

/dev/cu.usbserial-A6YMCQBR

```

**5.** 使用 screen 工具连接到串口，并将波特率设置为 57600。因为系统控制台的默认波特率是 57600。例如：
```
$screen /dev/cu.usbserial-XXXXXXXX 57600
```
**6.** 现在您应该已连接到系统控制台。在终端中按 ENTER 键以显示提示符。您会注意到提示符与您的 OS X 终端应用程序不同，这是 LinkIt Smart 7688 的提示符，类似如下：
```
  root@myLinkIt:/#
```
**7.** 您可以通过此控制台对 LinkIt Smart 7688 系统进行更改。

### 在 Linux 上

**1.** 如果需要，请安装驱动程序。检查数据线制造商的网站以了解 Linux 上的驱动程序要求和安装说明。

**2.** 插入数据线并将数据线连接到 LinkIt Smart 7688 Duo。

**3.** 打开一个终端会话。

**4.** 在终端中输入 **ls /dev/ttyUSB***。您应该会看到设备列表。寻找类似 cu.usbserial-XXXXXXXX 的设备，其中 XXXXXXXX 通常是随机标识符。这是用于访问系统控制台的串口设备。例如：
```
$ls /dev/ttyUSB*
/dev/ttyUSB0
```
**5.** 使用 **screen** 工具连接到串口，并将波特率设置为 **57600**。因为系统控制台的默认波特率是 57600。例如：
```
$sudo screen /dev/ttyUSB0 57600
```
**6.** 现在您应该已连接到系统控制台。在终端中按 ENTER 键以显示提示符。您会注意到提示符与常规应用程序不同，这是 LinkIt Smart 7688 的提示符，类似如下：
```
  root@myLinkIt:/#
```
**7.** 您可以通过此控制台对 LinkIt Smart 7688 系统进行更改。

### 运行 Blink 示例

#### 所需材料

* LinkIt Smart 7688 x 1
* USB 数据线（Type A 至 Micro Type-B）x 1
* USB 转串口适配器 x 1
* 跳线 x 3

#### 运行 Blink 示例

**1.** 使用 Micro-USB 数据线为您的开发板供电（仅连接 USB 电源接口，而不是 USB 主机接口）。

**2.** 启动 PuTTy 并使用 USB 转串口适配器连接到系统，如前面部分所示。

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Connect_to_computer.jpg)

**3.** 输入 **python /IoT/examples/blink-gpio44.py** 并按 **Enter** 键运行 Blink 示例。
:::note
    请注意，第一个单词 "python" 后有一个空格，否则示例将无法找到。
:::
**4.** 大约 2 秒后，您会注意到 Wi-Fi LED 稳定地闪烁。

**5.** 在系统控制台中输入 **CTRL + C**，这将终止示例程序。

### 连接到互联网（切换到 Station 模式）

Wi-Fi 模式分为两种：AP 模式和 Station 模式。有关它们之间的区别，请参考这里。

**1.** 使用 micro-USB 电缆为开发板供电。

**2.** 打开电脑上的 Wi-Fi 连接工具，并连接到名为 LinkIt_Smart_7688_XXXXXX 的接入点。XXXXXX 是一种硬件标识符，每块开发板的标识符都不同。

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Connect_wifi.jpg)

**3.** 在浏览器中打开 URL mylinkit.local/ 或 192.168.100.1，设置 root 密码并登录。点击右上角的 Network。

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Network_conf.jpg)

**4.** 选择 Station 模式，点击右侧的 Refresh 或向下箭头以查找要连接的 AP。选择 AP 后，如果需要，请输入密码。点击 Configure & Restart 完成设置，如下图所示。然后等待大约 30 秒切换模式。

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Station_mode.jpg)

**5.** 启动 PuTTy，并使用 USB 转串口适配器连接到系统，如前一部分所示。

**6.** 输入 ifconfig 并找到 inet addr 的 IP 地址，如下图所示：

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/IFCONFIG.jpg)

:::note
    系统重启后仍会进入 Station 模式。按住 Wi-Fi 按钮至少 5 秒可切换回 AP 模式。注意：需要通过 reboot 命令重启嵌入式操作系统。
:::

**7.** 在浏览器的新标签页中输入 IP 地址，您可以登录到 Web 用户界面以配置系统。

**8.** 现在主机电脑和 LinkIt Smart 7688 都已连接到互联网。在控制台中输入 ping [www.mediatek.com](https://www.mediatek.com/)，您将看到以下结果：

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Ping_result.jpg)

**9.** 现在您可以使用互联网在开发板上配置系统。

### 安装 Arduino 编程环境

此开发板具有与 Arduino 兼容的功能，因此您可以将 Arduino 代码应用于 7688 平台，从而加快原型开发过程。在本节中，我们将向您展示如何构建 Arduino 编程环境。

#### 下载并安装 Arduino IDE

您可以在电脑上[安装 Arduino IDE 1.6.5](https://www.arduino.cc/en/Main/Software)。

配置 Arduino IDE 以支持 LinkIt Smart 7688 平台。

#### 安装开发板支持包

Arduino IDE 1.6.5 支持通过 **Board Manager** 工具集成第三方开发板。LinkIt Smart 7688 开发板是 Arduino IDE 的一个插件，您需要安装开发板包以使 Arduino 支持 LinkIt 开发板。请按照以下步骤操作：

**1.** 在 Arduino IDE 的 File 菜单中点击 Preferences，然后在 Additional Boards Manager URLs 字段中插入以下内容：

```
http://download.labs.mediatek.com/package_mtk_linkit_smart_7688_index.json
```

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Install_package.jpg)

**2.** 确保您的电脑已连接到互联网。[下载](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/res/LinkIt.zip) **LinkIt**，解压缩并将文件复制到与 **Preferences.txt** 文件相同位置的 **packages** 文件夹中。点击以下红色矩形标记部分以打开 **Preferences.txt** 文件的位置。

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/7688_duo_demo_preferences.txt_location_s.jpg)

**3.** 在 Arduino 的 **Tools** 菜单中指向 **Board**。

**4.** 现在 Boards Manager 的开发板列表中应该出现 LinkIt Smart 7688 项目，并选择端口 **COMxx**（**LinkIt Smart 7688 Duo**）。

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Install_SDK.jpg)

**5.** 安装完成。

### 安装 LinkIt Smart 7688 Duo COM 端口驱动程序

安装开发板包后，将 LinkIt Smart 7688 Duo 连接到您的电脑，您应该在设备管理器中看到一个 USB 串口 COM 端口，其端口 ID 如下：

* Boot loader COM 端口：VID=0x0E8D, PID=0xAB00
* Arduino Sketch COM 端口：VID=0x0E8D, PID=0xAB01

接下来，您需要根据操作系统安装驱动程序。步骤如下：

:::note
    对于 Windows 10，无需安装驱动程序。然而，需要额外步骤以确保 Windows 10 识别开发板。将 LinkIt Smart 7688 Duo 连接到您的 Windows 10 电脑，然后在 700 毫秒内快速按两次 MCU 重置按钮。系统现在应该识别 LinkIt Smart 7688 Duo 为 USB Serial Device (COM5)。数字 5 在不同的电脑上可能不同。您只需在首次连接开发板到 Windows 电脑时执行此操作。
:::
:::note
    对于 Windows 8，系统可能会阻止驱动程序安装。请参考此链接了解如何在 Windows 8 上禁用驱动程序签名强制。禁用签名强制后，请按照 Windows 7 的步骤安装驱动程序。
:::
:::note
    对于 Windows 7，请在以下路径中找到串口 COM 端口 INF 驱动程序。您也可以从此处安装：
`<Arduino IDE Preference Location>`Arduino15/packages/LinkIt/hardware/avr/0.1.5/driver/linkit_smart_7688.inf
:::
您可以在 **File -> Preferences** 中找到 Arduino 的偏好设置位置，查看 **preference.txt 路径**。

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Preference_location.jpg)

右键点击 linkit_smart_7688.inf 并选择安装，出现安全窗口时点击 **Install this driver software anyway**。至此驱动程序安装完成。

![输入图片描述](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Driver_inst_alert.jpg)

* 对于 Ubuntu Linux，无需安装驱动程序即可正常工作。LinkIt Smart 7688 应位于 /dev 文件夹中，并挂载为 ttyUSB0。数字 0 可能因每台 Ubuntu 机器而不同。
* 对于 OS X，也无需安装驱动程序，LinkIt Smart 7688 Duo 会作为一个串行设备挂载在 /dev/tty.usbmodem1413 下。数字 1413 可能因每台 OS X 机器而不同。

## 示例演示：Hello World 示例

:::note
    为避免在原生应用开发过程中内存不足，建议在更强大的主机环境中设置原生应用开发环境，以便交叉编译 LinkIt Smart 7688 目标的可执行格式。下表概述了 LinkIt Smart 7688 的编程语言及其在主机计算机上的相关开发环境。
:::

### Python

**1.** 使用 FileZilla，并参考此 [教程](https://wiki.filezilla-project.org/FileZilla_Client_Tutorial_%28en%29)，服务器 IP（替换 **主机名**）地址是之前 [切换到站点模式](https://seeeddoc.github.io/LinkIt_Smart_7688_Duo#Switch_to_Station_mode) 部分中找到的 inet addr，用户名为 root，密码是您在该部分设置的密码。

**2.** 打开文本编辑器，复制并粘贴以下示例代码，并保存为 **helloworld.py**。
```
print "Hello World!"
```

**3.** 使用 FileZilla 将文件 **helloworld.py** 复制到目标开发环境（LinkIt Smart 7688）系统中，放置在 **root** 文件夹下。

**4.** 启动 PuTTy 并使用 USB 到串口适配器连接到系统。

**5.** 将工作目录设置为 **/root**，然后输入 **python helloworld.py** 执行。

**6.** 现在您可以在控制台中看到 **Hello World**! 的输出。

### Arduino

#### 在主机计算机上（Arduino 端）

MCU 端是以 Arduino 草图的形式编写的。在此示例中，草图简单地监听从 MPU（Linux）端发送的命令，并根据命令切换板载 LED。

**1.** 首先，将 LinkIt Smart 7688 Duo 连接到您的 PC，然后打开 Arduino IDE，并将以下草图代码粘贴到 IDE 中：

```
void setup() {
    Serial.begin(115200); // 打开与 USB 串口的连接（连接到您的计算机）
    Serial1.begin(57600); // 打开与 MT7688 的内部串口连接
    // 在 MT7688 中，这映射到设备
    pinMode(13, OUTPUT);
}
void loop() {
    int c = Serial1.read(); // 从 MT7688 读取数据
    if (c != -1) {
        switch(c) {
        case '0': // 接收到 "0" 时关闭 D13
            digitalWrite(13, 0);
            break;
        case '1': // 接收到 "1" 时打开 D13
            digitalWrite(13, 1);
            break;
        }
    }
}
```

**2.** 然后通过点击 **工具 -> 端口** 从 IDE 中选择正确的 COM 端口（检查您的设备管理器）。

**3.** 将草图上传到开发板。注意此时板上的 LED 尚未闪烁——您需要在 Linux 端编写程序使其闪烁，这将在下一步中完成。

![输入图片描述](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Blink_in_arduino.jpg)

#### 在开发板上（Linux 端）

**1.** 使用您选择的文本编辑器创建一个新文件（Python 文件），然后复制以下代码并保存。

```
import serial
import time
s = None
def setup():
    global s
# 打开串口 COM 端口到 /dev/ttyS0，这映射到 UART0(D0/D1)
# 波特率设置为 57600，应该与上传到 ATmega32U4 的 Arduino 草图中指定的波特率相同。
s = serial.Serial("/dev/ttyS0", 57600)
def loop():
# 向 ATmega32U4 上的 Arduino 草图发送 "1"。
# 草图将打开连接到开发板 D13 的 LED
s.write("1")
time.sleep(1)
# 向草图发送 "0" 以关闭 LED
s.write("0")
time.sleep(1)
if __name__ == '__main__':
setup()
while True:
loop()
```

**2.** 在系统控制台中执行此 Python 程序——此程序基本上将字符串 "1" 和 "0" 写入 /dev/ttyS0 端口，该端口映射到 Arduino 中的 Serial1 接口。之前上传的 Arduino 草图将接收字符串，并根据字符串使板载 LED 闪烁。

现在，您可以扩展 Arduino 草图以驱动其他设备，例如 PWM、I2C 设备，并通过扩展 Arduino 和 Linux 端之间的命令消息来同步状态。如果需要包含更多外设类型，可以使用一些外部库来实现通信协议。其中一种协议——Firmata，在以下部分中进行了描述。

## 常见问题解答

[这里](https://docs.labs.mediatek.com/resource/linkit-smart-7688/en/faq)是来自联发科的常见问题解答。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/res/317080023_DIP_Module;LinkIt_Smart_7688_Duo;2x20P.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

* [硬件原理图文件](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/res/Hardware_Schematics.zip)
* [手册](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/res/Manual.zip)
* [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)
* [联发科 LinkIt Smart 7688 资源](https://labs.mediatek.com/site/global/developer_tools/mediatek_linkit_smart_7688/hdk_intro/index.gsp)
* [如何通过 USB 驱动器刷新固件](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/res/Linkit_Smart_7688_DUO_Firmware.pdf)
* [证书](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/res/LinkIt_Smart_7688_Duo-Certificate.zip)
* [联发科](https://labs.mediatek.com/en/platform/linkit-smart-7688)

## 项目

**基于 Alexa 的智能家居监控**：您在办公室，想了解家里的情况吗？无论您身在何处，都可以控制家用设备并接收家居警报！

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/adithya-tg/alexa-based-smart-home-monitoring-e36b7f/embed' width='350'></iframe>

**DIY 智能灯 - 通过拨动开关和 Alexa 控制**：制作一个智能灯，可以通过拨动开关和 Alexa 控制，仅需 $35。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/darian-johnson/diy-smart-lamp-controlled-by-toggle-switch-and-alexa-7de243/embed' width='350'></iframe>

**ReRouter - 制作一个可扩展的物联网路由器**：将打印机集成到我的路由器中，这样我的爷爷或我可以在网页上写下内容并让打印机打印出来。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/seeed-studio/rerouter-make-an-extensible-iot-router-12f1e3/embed' width='350'></iframe>

**物联网水族箱控制器**：一个开源的 3D 打印水族箱控制器，具有物联网功能。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/roroid/iot-aquarium-controller-448dac/embed' width='350'></iframe>

**智能照明和通知**：使用联发科 LinkIt Smart 7688 Duo 将智能 LED 无线连接到您的家庭自动化系统。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/phigax/smart-lighting-and-notifications-1c8a1b/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>