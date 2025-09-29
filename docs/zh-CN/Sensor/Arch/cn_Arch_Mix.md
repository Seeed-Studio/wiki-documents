---
description: Arch Mix
title: Arch Mix
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Arch_Mix
last_update:
  date: 1/12/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Arch_Mix/img/main1.jpg)

Arch Mix 是一款基于 NXP i.MX RT1052 处理器（3020 CoreMark/1284 DMIPS @ 600 MHz）的轻薄开发板。这使其非常适合工业控制，尤其是需要处理大量代码和高实时应用场景。

i.MX RT1052 是一个新型处理器系列，采用了 NXP 对 Arm Cortex®-M7 核心的先进实现。目前，i.MX RT1052 是性能最高的 Cortex-M7 解决方案，提供 3036 CoreMarks，性能是 LPC1788 微控制器的 13 倍。除了高速性能外，它还提供快速的实时响应能力。i.MX RT1050 还具有丰富的音频和视频功能，包括 LCD 显示、基础 2D 图形、摄像头接口、SPDIF 和 I2S 音频接口。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Arch-Mix-p-2901.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

:::caution
Arch Mix 的初始固件是 RT-Thread，但已被弃用，请按照本 Wiki 的说明将 Arduino Bootloader 刷入 Arch Mix，并将其用作 Arduino 开发板。
:::

## 应用场景

- 工业控制
- 智能建筑
- 工业人机界面
- 自动化与过程控制
- 机器人

## 特性

- ARM® Cortex®-M7 600MHz 微控制器（NXP i.MX RT1052）
- 超快的系统加载速度
- 丰富的外设接口：RMII、CAN、I2C、UART、CSI、I2S、ADC、SPDIF IN/OUT、SWD
- 比其他 RT1052/1050 的演示板更小：67mm x 39mm

## 规格

|参数|值|
|----|----|
|**处理器：NXP i.MX RT1052**||
|平台|ARM Cortex-M7 MPCore|
|频率|600 MHz|
|启动 ROM|96KB|
|片上 RAM|512KB|
|**内存**||
|SDRAM|32MB|
|QSPI Flash|8MB|
|HyperFlash（可选）|64MB|
|**连接性**||
|USB 2.0 主机|x1|
|USB 2.0 OTG 和 DC 5V 电源输入|x1|
|启动配置 DIP 开关|x1|
|LED|电源 LED x1<br />用户 RGB LED x1|
|按钮|复位按钮 x1，开/关按钮 x1，用户按钮 x1|
|24 位 RGB LCD 接口|x1|
|Micro SD 卡连接器|x1|
|RTC 3V 电池连接器|x1|
|22Pin 接头|RMII、CAN、I2C、UART、CSI、I2S、<br /> ADC、SPDIF IN/OUT、SWD|

<div align="center"><b>表 1.</b><i>规格</i></div>

## 硬件概览

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Arch_Mix/img/pinout_f.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/pinout_f.jpg" /></a></p>
  <figcaption><b>图 1</b>. <i>正面硬件概览</i></figcaption>
</figure>
</div>

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Arch_Mix/img/pinout_b.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/pinout_b.jpg" /></a></p>
  <figcaption><b>图 2</b>. <i>背面硬件概览</i></figcaption>
</figure>
</div>

:::note
<font color="red"><b>*0</b></font> 您需要通过 USB OTG 端口为 Arch Mix 供电。关于 USB HOST 和 USB OTG 的区别，请查看 [这里](https://www.quora.com/What-is-the-difference-between-USB-host-VS-USB-OTG)。
<br />
<br />
<font color="red"><b>*1</b></font> 我们提供两种闪存选项，您可以使用 64M HyperFlash（U7-默认 DNP）或 8M QSPI Flash（U11-默认选择）。
<br />
<br />
<font color="red"><b>*2</b></font> 板子通过 USB OTG 供电后，您可以通过按住（约 3~5 秒）此按钮来开关系统。
<br />
<br />
<font color="red"><b>*3</b></font> 请注意，此端口是一个 1.25mm CR2032 电池端口，请勿插入 Li-Po 电池。如果您想使用 RTC 功能，可以在 Amazon 或其他网站搜索“带线引的 CR2032 电池”。
:::

**电源**

请通过 Micro-USB **OTG** 端口供电。

:::caution Danger

- 输入电源电压为 5V，不能超过 5.5V。  
- 所有数字和模拟 IO 接口电平为 3.3V，请勿输入超过 3.3V，否则可能会损坏 CPU。  
- RTC 的电池供电接口（J6）只能连接约 3V 的纽扣电池，电压不能超过 3.6V。
:::

**开关**

Arch Mix 可以配置为三种不同的启动模式：HyperFlash、QSPI Flash 和 SD 卡。默认使用 QSPI Flash，当您更改启动模式时，需要将 DIP 开关切换到对应位置。

设备 | BOOT_CFG | SW1 四键值
---|---|---
HyperFlash|0x02_00|0 , 1 , 1 , 0
QSPI Flash|0x00_00|0 , 0 , 1 , 0
SD|0x00_40|1 , 0 , 1 , 0

<div align="center"><b>表 2.</b><i>启动配置</i></div>

**按钮**

此板上有三个按钮，请查看功能表。

名称|功能|详情
---|---|---
SW2|用户按钮|用于用户配置，此开发板的第 125 引脚为 SW2
SW3|复位|系统复位，按下此按钮时系统将重新启动
SW4|开/关|通过按住（约 3~5 秒）此按钮开关系统

<div align="center"><b>表 3.</b><i>按钮功能表</i></div>

**LCD 接口**

如您所见，此板上有一个 50 针 LCD 接口，支持最高 1366 x 768 WXGA 分辨率。如果您需要为此板使用 LCD 屏幕，可以使用 LCD8000 系列屏幕。请查看以下链接。

[NXP 的 LCD](https://www.nxp.com/support/developer-resources/software-development-tools/i.mx-developer-resources/evaluation-kit-for-the-i.mx-6ull-and-6ulz-applications-processor:MCIMX6ULL-EVK?tab=Buy_Parametric_Tab#/)  
[Embest 的 LCD](http://www.embest-tech.com/prod_view.aspx?TypeId=118&Id=277)

### 引脚图

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Arch_Mix/img/pinout.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/pinout.png" /></a></p>
  <figcaption><b>图 3</b>. <i>引脚图，点击图片查看原始文件</i></figcaption>
</figure>
</div>

:::提示
NXP i.MX RT1050 处理器的大多数引脚具有复用功能，您可以点击下面的附件查看详细的引脚复用信息。
:::

[Arch Mix 引脚定义表](https://files.seeedstudio.com/wiki/Arch_Mix/res/Arch%20Mix_v1.0_Pin.xlsx)

### 模块图

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Arch_Mix/img/Block.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/Block.jpg" /></a></p>
  <figcaption><b>图 4</b>. <i>Arch Mix 模块图，点击图片查看原始文件</i></figcaption>
</figure>
</div>

### 尺寸图

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Arch_Mix/img/D1.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/D1.jpg" /></a></p>
</figure>
</div>

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Arch_Mix/img/D2.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/D2.jpg" /></a></p>
  <figcaption><b>图 5</b>. <i>板尺寸，单位(mm)</i></figcaption>
</figure>
</div>

## 将 Arduino Bootloader 刷入 Arch Mix

现在您可以将 **Arduino Bootloader** 刷入 Arch Mix，并像使用 Arduino 板一样使用它！这可能是市场上最强大的 (Cortex M7) Arduino 板之一。

### 开关设置

确保它运行在 **QSPI** 模式下，开关设置如下：

- **0010**

### 所需硬件

- Arch Mix x 1

- **J-Link 调试探针** x 1

### 入门指南

- 从官方网站下载并安装 [**J-Flash**](https://www.segger.com/products/debug-probes/j-link/tools/j-flash/about-j-flash/) 软件，根据您的电脑操作系统选择合适版本。

- 找到 **J-Flash 的安装路径** 并进行以下更改。

- 导航到安装位置：`SEGGER/JLink_V686/Devices/NXP/iMXRT105x`。

>例如，对于 macOS，我的安装路径是：`/Applications/SEGGER/JLink_V686/Devices/NXP/iMXRT105x`

- 下载并解压 **[iMXRT105x.zip](https://files.seeedstudio.com/wiki/Arch_Mix/res/iMXRT105x.zip)**，将文件粘贴并替换到上述路径。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/1.png"/></div>

- 返回到 `SEGGER/JLink_V686` 的根目录，应该有一个名为 **`JLinkDevices.xml`** 的文件。用编辑器打开该文件并搜索 `NXP_iMXRT105x_`，您应该会看到一些选项。将以下代码复制并粘贴到与图示相同的部分：

```xml
  <Device>
    <ChipInfo Vendor="NXP" Name="MCIMXRT1051QSPI" WorkRAMAddr="0x20000000" WorkRAMSize="0x00080000" Core="JLINK_CORE_CORTEX_M7" />
    <FlashBankInfo Name="QSPI Flash" BaseAddr="0x60000000" MaxSize="0x02000000" Loader="Devices/NXP/iMXRT105x/NXP_iMXRT105x_QSPI.elf" LoaderType="FLASH_ALGO_TYPE_OPEN" />
  </Device>
  <Device>
    <ChipInfo Vendor="NXP" Name="MCIMXRT1052QSPI" WorkRAMAddr="0x20000000" WorkRAMSize="0x00080000" Core="JLINK_CORE_CORTEX_M7" />
    <FlashBankInfo Name="QSPI Flash" BaseAddr="0x60000000" MaxSize="0x02000000" Loader="Devices/NXP/iMXRT105x/NXP_iMXRT105x_QSPI.elf" LoaderType="FLASH_ALGO_TYPE_OPEN" />
  </Device>
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/2.png"/></div>

- 保存文件。

- 现在 J-Flash 已配置完成，您可以打开 J-Flash 软件。

- 创建一个新的 J-Flash 项目，并选择 **MCIMXRT1052QSPI** 作为芯片。您可以使用过滤器帮助找到该芯片。如果无法看到该芯片，则说明之前的 J-Flash 配置有问题，请重新检查。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/3.png"/></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/4.png"/></div>

- 在此处下载 [**Arch Mix 的 Arduino Bootloader**](https://files.seeedstudio.com/wiki/Arch_Mix/res/bootloader.hex)。您也可以在 GitHub 上查看 [**源代码**](https://github.com/Seeed-Studio/ArduinoCore-imxrt)。

- 将此 hex 引导程序拖入 J-Flash。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/5.png"/></div>

- **连接 J-Link 的 SWD 引脚到 Arch Mix 的 SWD 引脚**。
  - DIO 对接 DIO
  - CLK 对接 CLK
  - GND 对接 GND

- 从 J-Flash 左上角下拉菜单中选择 **Target** -> **Connect**。连接成功后，您应该看到：

>如果无法连接，请检查 J-Link 和 Arch Mix 的接线。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/6.png"/></div>

- 从 J-Flash 菜单中选择 **Target** -> **Production Programming**，将引导程序刷入 Arch Mix。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/7.png"/></div>

- 重置 Arch Mix，现在 Arduino Bootloader 已刷入！

### Arduino 入门

- 将 Arch Mix 板库添加到 Arduino IDE：

打开 Arduino IDE，点击 **文件** > **首选项**，并将以下 URL 复制到 **附加板管理器 URLs**：

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

点击 **工具** > **板** > **板管理器**，在板管理器中搜索 Arch Mix。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/IDE.png"/></div>

- 打开 LED 闪烁示例代码：**文件** > **示例** > **01.Basics** > **Blink**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/select_blink.jpg"/></div>

- 您需要在 **工具** > **板** 菜单中选择与您的 Arduino 对应的条目，选择 Arch Mix。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/board.png"/></div>

- 选择正确的端口：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/port.png"/></div>

- 点击上传，Arch Mix 上的 LED 应开始闪烁！现在您手中拥有一个强大的 Cortex M7 板！

:::注意
关于 Arduino 引脚映射，您可以点击 [这里](https://github.com/Seeed-Studio/ArduinoCore-imxrt/blob/master/variants/arch_mix/variant.h) 查看更多参考。
:::

## 使用 NXP Boot Utility 刷写 Arduino Bootloader

如果您**没有 J-Link**，还有另一种方法可以使用 [**NXP Boot Utility**](https://github.com/JayHeng/NXP-MCUBootUtility) 来刷写 Bootloader，但**仅支持 Windows**。

- 下载 [NXP Boot Utility](https://github.com/JayHeng/NXP-MCUBootUtility)。

```sh
git clone https://github.com/JayHeng/NXP-MCUBootUtility
```

- 进入 **NXP-MCUBootUtility** 文件夹，打开 `NXP-MCUBootUtility/bin` 并运行 **NXP-MCUBootUtility.exe**。

- 使用母跳线将 Arch Mix 的 **Rx 引脚**连接到 **3.3V 引脚**，并**将开关调整为 0001**。

- 将 Arch Mix 连接到您的电脑，您应该会看到以下界面：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/boot-1.png"/></div>

- 点击 **Boot Device Configuration**，选择 Flash 并点击 **OK**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/boot-2.png"/></div>

- 点击 Connect to ROM 进入下载模式：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/boot-3.png"/></div>

- 选择 Bootloader：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/boot-4.png"/></div>

- 点击 All in One Action，系统将下载 Bootloader 到 Arch Mix！

- 刷写完成后，**将开关调整回 0010**并按下复位按钮。现在，Arduino Bootloader 已通过 NXP Boot Utility 刷写到 Arch Mix！

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#F5A9A9', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#DF0101', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>注意</p>
    <p style={{color: '#000000', fontSize: 14}}>确保开关调整回 0010，以便从 QSPI Flash 启动并作为 Arduino 开发板工作。</p>
  </div>
</div>

## 资源

[Arch Mix 固件指南](https://files.seeedstudio.com/wiki/Arch_Mix/res/micropython_firmware.pdf)  
[工具](https://files.seeedstudio.com/wiki/GM6020/res/Firmware_and_Tools.zip)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_Mix/202001930_PCBA_Arch%20Mix_v1.0_SCH%20%26%20PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [原理图](https://files.seeedstudio.com/wiki/Arch_Mix/res/202001930_PCBA_Arch%20Mix_v1.0_SCH%20%26%20PCB.zip)
- **[ZIP]** [固件和工具](#)
- **[PDF]** [PDF 格式 Wiki](https://files.seeedstudio.com/wiki/Arch_Mix/res/Arch_Mix.pdf)
- **[PDF]** [i.MX RT1050 数据手册](https://files.seeedstudio.com/wiki/Arch_Mix/res/i.MX%20RT1050.pdf)
- **[PDF]** [尺寸图](https://files.seeedstudio.com/wiki/Arch_Mix/res/ARCH%20MIX_V1.0_Dimension.pdf)
- **[xlsx]** [Arch Mix_v1.0 引脚功能](https://files.seeedstudio.com/wiki/Arch_Mix/res/Arch%20Mix_v1.0_Pin.xlsx)

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