---
description: LinkIt Smart 7688
title: LinkIt Smart 7688
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/LinkIt_Smart_7688
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![输入图片描述](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Linkit_Smart_product.jpg)

:::danger
由于 MediaTek Labs 的关闭，所有相关链接已失效。如果需要下载相关文件，请在以下链接中搜索：[https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs)。
:::

LinkIt Smart 7688（一个紧凑型控制板）是一款基于 OpenWrt Linux 发行版和 MT7688（[数据手册](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/MT7688_datasheet.pdf)）的开放开发板。该板专为智能家居丰富应用物联网设备的原型设计而打造。该板提供了充足的内存和存储空间以支持强大的视频处理功能。该平台还提供了使用 Python、Node.js 和 C 编程语言创建设备应用程序的选项。此开发板是 MediaTek LinkIt Smart 7688 平台的一部分，该平台还包括其他开发板。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkIt-Smart-7688-p-2573.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 特性
---
*   单输入单输出 (1T1R) Wi-Fi 802.11 b/g/n。
*   GPIO、I<sup>2</sup>C、I<sup>2</sup>S、SPI、UART、PWM 和以太网端口的引脚输出。
*   580 MHz MIPS CPU。
*   32MB 闪存和 128MB DDR2 RAM。
*   USB 主机。
*   Micro SD 插槽。

## 应用创意
---
*   智能家居丰富应用物联网设备
*   机器人

## 规格
---
<table>
  <tr>
    <th>类别</th>
    <th>特性</th>
    <th>规格</th>
  </tr>
<tr>
<td rowspan="4"> MPU </td>
<td> 芯片组 </td>
<td> MT7688AN </td>
</tr>
<tr>
<td> 核心 </td>
<td> MIPS24KEc </td>
</tr>
<tr>
<td> 时钟速度 </td>
<td> 580MHz </td>
</tr>
<tr>
<td> 工作电压 </td>
<td> 3.3V </td>
</tr>
<tr>
<td> PCB 尺寸 </td>
<td> 尺寸 </td>
<td> 55.7 x 26 mm </td>
</tr>
<tr>
<td rowspan="2"> 内存 </td>
<td> 闪存 </td>
<td> 32MB </td>
</tr>
<tr>
<td> RAM </td>
<td> 128MB DDR2 </td>
</tr>
<tr>
<td rowspan="2"> 电源 </td>
<td> USB 电源 </td>
<td> 5V (USB micro-B) </td>
</tr>
<tr>
<td> VCC </td>
<td> 3.3V (引脚输出) </td>
</tr>
<tr>
<td rowspan="2"> GPIO </td>
<td> 引脚数量 </td>
<td> 22 (MT7688AN) </td>
</tr>
<tr>
<td> 电压 </td>
<td> 3.3V </td>
</tr>
<tr>
<td rowspan="5"> PWM </td>
<td> 引脚数量 </td>
<td> 4 (MT7688AN) </td>
</tr>
<tr>
<td> 电压 </td>
<td> 3.3V </td>
</tr>
<tr>
<td> 最大分辨率 </td>
<td> 7 位（可定制） </td>
</tr>
<tr>
<td rowspan="2">最大频率@分辨率 </td>
<td>

100kHz@1位,
50kHz@2位,
25kHz@3位,
12.5kHz@4位,
6.25kHz@5位,
3.125kHz@6位,
1.5625kHz@7位（标准模式）

</td>
</tr>
<tr>
<td>

40MHz@1位,
20MHz@2位,
10MHz@3位,
5MHz@4位,
2.5MHz@5位,
1.25MHz@6位,
625kHz@7位
（快速模式）

</td>
</tr>
<tr>
<td> 外部中断 </td>
<td> 引脚数量 </td>
<td> 22 (MT7688AN) </td>
</tr>
<tr>
<td rowspan="3"> SPI </td>
<td> 集数 </td>
<td> 1 (MT7688AN) </td>
</tr>
<tr>
<td> 引脚编号 </td>
<td> P22, P23, P24 (与板载闪存共享), P25 </td>
</tr>
<tr>
<td> 最大速度 </td>
<td> 25 MHz </td>
</tr>
<tr>
<td rowspan="3"> SPI 从设备 </td>
<td> 集数 </td>
<td> 1 (MT7688AN) </td>
</tr>
<tr>
<td> 引脚编号 </td>
<td> P28, P29, P30, P31 </td>
</tr>
<tr>
<td> 最大速度 </td>
<td> 25 MHz </td>
</tr>
<tr>
<td rowspan="2"> I<sup>2</sup>S </td>
<td> 集数 </td>
<td> 1 (MT7688AN) </td>
</tr>
<tr>
<td> 引脚编号 </td>
<td> P10, P11, P12, P13 </td>
</tr>
<tr>
<td rowspan="3"> I<sup>2</sup>C </td>
<td> 集数 </td>
<td> 1 </td>
</tr>
<tr>
<td> 引脚编号 </td>
<td> P20, P21 </td>
</tr>
<tr>
<td> 速度 </td>
<td> 120K/400K </td>
</tr>
<tr>
<td rowspan="3"> UART Lite </td>
<td> 集数 </td>
<td> 3 (MT7688AN) </td>
</tr>
<tr>
<td> 引脚编号 </td>
<td> P8, P9, P16, P17, P18, P19 </td>
</tr>
<tr>
<td> 最大速度 </td>
<td> 0.5Mbps </td>
</tr>
<tr>
<td rowspan="3"> USB 主机 </td>
<td> 集数 </td>
<td> 1 (MT7688AN) </td>
</tr>
<tr>
<td> 引脚编号 </td>
<td> P6, P7 </td>
</tr>
<tr>
<td> 速度 </td>
<td> Micro-AB </td>
</tr>
<tr>
<td rowspan="3"> 通信 </td>
<td> Wi-Fi </td>
<td> 1T1R 802.11 b/g/n (2.4G) </td>
</tr>
<tr>
<td> 以太网 </td>
<td> 1端口 10/100 FE PHY </td>
</tr>
<tr>
<td> 引脚编号 </td>
<td> P2, P3, P4, P5 </td>
</tr>
<tr>
<td> 用户存储 </td>
<td> SD 卡 </td>
<td> Micro SD SDXC </td>
</tr>
</table>

## 硬件概述
----
![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Component_intro_with_text_1200.jpg)

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Back_hardware_view_with_text_1200_s.jpg)


:::note
    * 为了保护产品免受不当操作的影响，请注意以下事项。选择输出稳定的更可靠电源适配器。推荐的 7688 电源输入条件：
      * - 电源输入的过冲电压不应超过 5.5。
      * - 电压波动应在额定电压的 ±100mV 范围内。
:::

### 部件清单

<table>
<tr>
<th>部件名称</th>
<th>数量</th>
</tr>
<tr>
<td> LinkIt<sup>TM</sup> Smart 7688 </td>
<td> 1个 </td>
</tr>
<tr>
<td> 手册 </td>
<td> 1本 </td>
</tr>
</table>

## 入门指南
----
### 连接嵌入式操作系统

:::note
    手册中描述了两种方法。这里我们仅展示高级方法（使用 USB 转串口适配器），虽然稍微复杂一些，但从长远来看您会从中受益匪浅。
:::
#### 所需材料

*   LinkIt Smart 7688 × 1
*   USB 数据线（A 型到 micro B 型）× 2
*   USB 转串口适配器 × 1
*   跳线 × 3


### 在 Windows 上

**1.** 安装 [PuTTy](http://www.putty.org/)。PuTTY 提供了一个使用 SSH（安全外壳协议）访问开发板操作系统的系统控制台环境。

**2.** 安装 [Bonjour](https://support.apple.com/kb/DL999?viewlocale=en_US&locale=en_US) 打印服务（适用于 Windows 7、Windows 8、Windows 10）。

**3.** 安装驱动程序。如果您使用的是基于 FTDI 芯片的 USB 数据线，请从 [这里](https://www.ftdichip.com/Drivers/VCP.htm) 下载并安装其驱动程序。如果您遇到最新驱动程序的问题，请尝试安装 [旧版本](https://www.ftdichip.com/Support/Documents/InstallGuides.htm)。

**4.** 接下来，您需要将串口转 USB 数据线连接到 LinkIt Smart 7688 的 UART 引脚，如下表所示：

| USB 适配器上的引脚 |	对应连接到 LinkIt Smart 7688 的引脚 |
|-----------------------------------|--------------------------------------------------------|
| RX 引脚	| 引脚 8 |
| TX 引脚	| 引脚 9 |
| GND 引脚 |	GND 引脚 |

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/LinkIt_Smart_7688_demo_connection_1200_s.jpg)

**5.** 连接串口转 USB 数据线后，打开设备管理器并注意 COM 端口号，如下图所示。此号码可能因不同的计算机而异。

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/COM_port.jpg)

**6.** 启动 PuTTY 终端，输入设备管理器中找到的 USB 设备的 COM 端口号，点击 Serial 单选按钮，在 Speed 框中输入 57600，然后点击 Open，如下图所示。
![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Putty_configuration.jpg)

**7.** 现在您将看到类似于 Linux 控制台的打印文本。

### 在 Mac 上

**1.** 如果需要，请安装驱动程序。检查数据线制造商的网站以了解 Mac 上的驱动程序要求和安装说明。

**2.** 插入数据线到 PC/笔记本电脑，并将数据线连接到 LinkIt Smart 7688。

**3.** 打开一个终端会话。

**4.** 在终端中输入 **ls /dev/cu***。您应该会看到设备列表。寻找类似 cu.usbserial-XXXXXXXX 的设备，其中 XXXXXXXX 通常是随机标识符。这是用于访问系统控制台的串口设备。例如：

```
$ls /dev/cu*

/dev/cu.Bluetooth-Incoming-Port

/dev/cu.Bluetooth-Modem

/dev/cu.pablop-WirelessiAP

/dev/cu.usbserial-A6YMCQBR

```

**5.** 使用 screen 工具连接到串口并将波特率设置为 57600。因为系统控制台的默认波特率是 57600。例如：
```
$screen /dev/cu.usbserial-XXXXXXXX 57600
```

**6.** 现在您应该已连接到系统控制台。在终端中按 ENTER 键以显示提示符。您会注意到提示符与您的 OS X 终端应用程序不同，这是 LinkIt Smart 7688 的提示符，类似如下：
```
  root@myLinkIt:/#
```

**7.** 您现在可以通过此控制台对 LinkIt Smart 7688 系统进行更改。

### 在 Linux 上

**1.** 如果需要，请安装驱动程序。检查数据线制造商的网站以了解 Linux 上的驱动程序要求和安装说明。

**2.** 插入数据线并将数据线连接到 LinkIt Smart 7688。

**3.** 打开一个终端会话。

**4.** 在终端中输入 **ls /dev/ttyUSB***。您应该会看到设备列表。寻找类似 ttyUSB0 的设备，这是用于访问系统控制台的串口设备。例如：
```
$ls /dev/ttyUSB*
/dev/ttyUSB0
```
**5.** 使用 **screen** 工具连接到串口并将波特率设置为 **57600**。因为系统控制台的默认波特率是 57600。例如：
```
$sudo screen /dev/ttyUSB0 57600
```
**6.** 现在您应该已连接到系统控制台。在终端中按 ENTER 键以显示提示符。您会注意到提示符与常规应用程序不同，这是 LinkIt Smart 7688 的提示符，类似如下：
```
  root@myLinkIt:/#
```
**7.** 您现在可以通过此控制台对 LinkIt Smart 7688 系统进行更改。

### 运行 Blink 示例

#### 所需材料

* LinkIt Smart 7688 x 1
* USB 数据线（A 型到 micro B 型） x 1
* USB 转串口适配器 x 1
* 跳线 x 3

#### 获取 Blink 示例运行

**1.** 使用 micro-USB 数据线为开发板供电（仅连接 USB 电源接口，而不是 USB 主机接口）。
![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Power_up.jpg)

**2.** 启动 PuTTy 并使用 USB 转串口适配器连接到系统，如前面部分所示。

**3.** 输入 **python /IoT/examples/blink-gpio44.py** 并按 **Enter** 键运行 Blink 示例。

:::note
    请注意，第一个单词 "python" 后有一个空格，否则示例将无法找到。
:::
**4.** 大约 2 秒后，您会注意到 Wi-Fi LED 稳定地闪烁。

**5.** 在系统控制台中输入 **CTRL + C**，这将终止示例程序。

### 连接到互联网（切换到 Station 模式）

Wi-Fi 模式有两种：AP 模式和 Station 模式。有关它们之间的区别，请参考[此链接](https://answers.yahoo.com/question/index?qid=20061207225409AANCN17)。

**1.** 使用 micro-USB 数据线为开发板供电。

**2.** 在电脑上打开 Wi-Fi 连接工具，并连接到名为 LinkIt_Smart_7688_XXXXXX 的接入点。XXXXXX 是一种硬件标识符，每块开发板的标识符都不同。

![输入图片描述](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Connect_wifi.jpg)

**3.** 在浏览器中打开 URL mylinkit.local/ 或 192.168.100.1，设置 root 的密码并登录。点击右上角的 Network。

![输入图片描述](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Network_conf.jpg)

**4.** 选择 Station 模式，然后点击右侧的 Refresh 或向下箭头以查找要连接的 AP。选择 AP 后，如果需要密码，请输入密码。点击 Configure & Restart 完成配置，如下图所示。然后等待大约 30 秒以切换模式。

![输入图片描述](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Station_mode.jpg)

**5.** 启动 PuTTy，并使用 USB 转串口适配器连接到系统，如前一部分所示。

**6.** 输入 ifconfig 并找到 inet addr 的 IP 地址，如下图所示：

![输入图片描述](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/IFCONFIG.jpg)

:::note
    系统重启后仍会进入 Station 模式。按住 Wi-Fi 按钮至少 5 秒可切换回 AP 模式。注意：需要通过 reboot 命令重启嵌入式操作系统。
:::

**7.** 在浏览器的新标签页中输入该 IP 地址，您可以登录到 Web 用户界面以配置系统。

**8.** 现在主机电脑和 LinkIt Smart 7688 都已连接到互联网。在控制台中输入 ping **www.mediatek.com** ，您将看到以下结果：

![输入图片描述](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/img/Ping_result.jpg)

**9.** 现在您可以使用互联网在开发板上配置您的系统。

## 示例：Hello World 示例
---

:::note
    为避免在进行本地应用开发时内存不足，您应该在更强大的主机环境中设置本地应用开发环境，以便交叉编译 LinkIt Smart 7688 目标的可执行格式。下表概述了 LinkIt Smart 7688 的编程语言及其在主机电脑上的相关开发环境。
:::

| 编程语言            | 工具和库                              | 应用程序                                   | 支持的主机平台          |
|---------------------|---------------------------------------|-------------------------------------------|-------------------------|
| C/C++               | 交叉编译工具链                       | 系统编程                                   | OS X Linux             |
| Python              | LinkIt Smart 7688 上的 Python 运行时 | 原型开发 网络 Arduino 桥接库              | OS X Linux Windows     |
| Node.js             | LinkIt Smart 7688 上的 Node.js 运行时| 原型开发 网络                              | OS X Linux Windows     |

### Python 的 Hello World 示例

**1.** 使用 FileZilla 并参考此[教程](https://wiki.filezilla-project.org/FileZilla_Client_Tutorial_%28en%29)，服务器 IP（替换 **主机名**）地址是之前[切换到 Station 模式](https://seeeddoc.github.io/LinkIt_Smart_7688_Duo#Switch_to_Station_mode)部分找到的 inet addr，用户名为 root，密码是您在该部分设置的密码。

**2.** 打开文本编辑器，复制并粘贴以下示例代码，并保存为 **helloworld.py**。
```
print "Hello World!"
```

**3.** 使用 FileZilla 将文件 **helloworld.py** 复制到目标开发环境（LinkIt Smart 7688）系统中，放置在 **root** 文件夹下。

**4.** 启动 PuTTy，并使用 USB 转串口适配器连接到系统。

**5.** 将工作目录设置为 **/root**，然后输入 **python helloworld.py** 执行代码。

**6.** 现在您可以在控制台中看到 **Hello World**! 的输出。

## 常见问题解答

[这里](https://docs.labs.mediatek.com/resource/linkit-smart-7688/en/faq)是来自联发科的常见问题解答。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/Hardware_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源
----
* **[Eagle]** [LinkIt_Smart_7688](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/Hardware_Schematics.zip)
* **[PDF]** [LinkIt_Smart_7688 PCB](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/LinkIt%20Smart%207688%20Layout.pdf)
* **[PDF]** [LinkIt_Smart_7688 原理图](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/LinkIt%20Smart%207688.pdf)
* **[文档]** [手册](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/Manual.zip)
* **[文档]** [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)
* **[文档]** [联发科 LinkIt Smart 7688 资源](https://labs.mediatek.com/site/global/developer_tools/mediatek_linkit_smart_7688/hdk_intro/index.gsp)
* **[文档]** [固件升级说明](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/LinkIt_Smart_7688_Firmware_upgrade.zip)
* **[文档]** [证书](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688/res/LinkIt_Smart_7688-Certificate.zip)
* **[文档]** [联发科](https://labs.mediatek.com/en/platform/linkit-smart-7688)

## 项目

**myva-Home（语音控制的家庭自动化）**：我的语音激活/控制的家庭，使用 LinkIt Smart 和 Android，提供易于使用的示例和库。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/smerkousdavid/myva-home-voice-controlled-home-automation-f4cfe3/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>