---
description: 基于 Quectel EG25-GL 的 4G LTE Raspberry Pi HAT 提供高速连接和精准的 GNSS 定位，非常适合 IoT 和 M2M 应用。兼容 Raspberry Pi 和 PC，支持全球频段、实时跟踪和可靠通信，可广泛应用于各行业。

title: Raspberry Pi 4G LTE HAT 入门指南
keywords:
  - Raspberry Pi HAT
  - 入门指南
  - 工业物联网 (IIoT)
  - 机器对机器通信 (M2M)
  - 4G LTE
  - 边缘计算
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/1-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi.webp
slug: /cn/getting_started_raspberry_pi_4g_lte_hat
last_update:
  date: 2024/10/12
  author: Kasun Thushara
---

## 概述

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/7-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi-feature.jpg" style={{width:600}}/></div>

4G Raspberry Pi HAT 是一款功能强大且多用途的扩展板，设计用于与 Raspberry Pi 各型号（包括 A+、B+、Pi 2、Pi 3、Pi 4、Pi 5 和 Zero）以及 PC 的无缝集成。配备 40 针 GPIO 接口，确保即插即用的兼容性。该 HAT 搭载 Quectel EG25-GL CAT4 LTE 模块，提供高速 4G 通信、短信功能以及 IoT 和 M2M 应用的云平台集成。此外，它还通过 Qualcomm® IZat 技术提供精准的 GNSS 定位，非常适合工业路由器、坚固型平板电脑、视频传输和数字标牌等应用。HAT 支持通过 UART 和 USB 进行通信，并附带软件工具，便于通过 AT 指令进行配置和调试。

核心模块 EG25-GL 提供强大的性能，支持全球频段，确保在 LTE、UMTS/HSPA+ 和 GSM/GPRS/EDGE 网络中的可靠连接。向后兼容 4G、3G 和 2G，支持多种通信协议，如 MIMO、DFOTA 和 DTMF。其多星座 GNSS 接收器确保定位精准且快速。

## 包装内容

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/9-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi-feature.jpg" 
    style={{ width: 600}} 
  />
</div>

4G LTE HAT 包装内包含安装和操作所需的所有组件：

- **螺丝和螺柱** 提供安装和固定 HAT 所需的所有硬件。  
- **螺丝刀** 便于安装的工具。  
- **2 根 4G 天线** 确保可靠的 LTE 连接。  
- **USB-A 转 USB-C 转接头** 用于连接 HAT 和 Raspberry Pi 的 USB 3.0 接口。  
- **2x20 针叠加排针** 提供安装时所需的高度和对齐间隙。  
- **0.3 米 Type-C 数据线** 支持供电和数据传输。  

## 硬件准备
<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
        <th>GPS 天线</th>
        <th>Raspberry Pi 4G LTE CAT4 HAT</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-110061521-gps-antenna-kit-for-reterminal-dm-4g-module-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/GPS-Antenna-Kit-for-reTerminal-DM-4G-Module-p-5774.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## 特性

- 支持全球频段，无区域限制。
- 即插即用，适配树莓派，无需安装驱动。
- 包含2根LTE天线及所有必要的安装配件，无需额外购买。
- 高速LTE CAT4通信，支持最高150 Mbps（下行）和最高50 Mbps（上行）。
- 支持拨号、短信、TCP、UDP、PPP、FTP、HTTP、NTP、PING、QMI、NITZ、SMTP、MQTT、CMUX、HTTPS、FTPS、SMTPS、SSL、MMS、文件传输。
- 支持GNSS：GPS、GLONASS、北斗（BDS）、伽利略（Galileo）、QZSS。
- 通过USB 2.0接口实现树莓派/PC的高速4G通信。
- 额外的支持PD协议的USB-C电源接口，可为4G帽和树莓派分别提供高达27W的电力，提供更高的负载能力。
- 板载LED PWR/NET状态灯，便于监控网络状态和模块运行。
- 板载RST PWR按钮，可快速手动复位和控制模块开/关。
- RST/PWR/RX/TX引脚通过40针GPIO连接到树莓派，可通过DIP开关启用复位、模块开/关和UART通信控制。

## 规格

### EG25-GL 4G模块规格

| **属性**                       | **详情**                                                                   |
|--------------------------------|---------------------------------------------------------------------------|
| **区域/运营商**                | 全球                                                                      |
| **尺寸（mm）**                 | 29.0 × 32.0 × 2.4                                                        |
| **重量（g）**                  | 约4.9                                                                     |
| **工作温度**                   | -35°C 至 +75°C                                                           |
| **扩展温度**                   | -40°C 至 +85°C                                                           |
| **频段**                       |                                                                           |
| - LTE-FDD                      | B1/2/3/4/5/7/8/12/13/18/19/20/25/26/28/66                                 |
| - LTE-TDD                      | B34/38/39/40/41                                                          |
| - WCDMA                        | B1/2/4/5/6/8/19                                                          |
| - TD-SCDMA                     | 不支持                                                                   |
| - GSM/EDGE                     | B2/3/5/8                                                                 |
| **GNSS**                       | GPS/GLONASS/北斗（BDS）/伽利略（Galileo）/QZSS                           |
| **增强功能**                   |                                                                           |
| - DTMF                         | 支持                                                                     |
| - DFOTA                        | 支持                                                                     |
| - QMI/RmNet                    | 支持                                                                     |
| - QuecFile®                    | 支持                                                                     |
| - (U)SIM卡检测                 | 支持                                                                     |
| **最大数据速率**               |                                                                           |
| - LTE-FDD（Mbps）              | 150（下行）/50（上行）                                                   |
| - LTE-TDD（Mbps）              | 130（下行）/30（上行）                                                   |
| - DC-HSPA+（Mbps）             | 42（下行）/5.76（上行）                                                  |
| - WCDMA（kbps）                | 384（下行）/384（上行）                                                  |
| - EDGE（kbps）                 | 296（下行）/236.8（上行）                                                |
| - GPRS（kbps）                 | 107（下行）/85.6（上行）                                                 |
| **支持的协议**                 | TCP、UDP、PPP、FTP、HTTP、NTP、PING、QMI、NITZ、SMTP、MQTT、CMUX、HTTPS、FTPS、SMTPS、SSL、MMS、文件传输 |
| **电气特性**                   |                                                                           |
| - 电源电压范围                 | 3.3–4.3 V，典型值3.8 V                                                  |
| - 功耗（关机）                 | 7 µA                                                                     |
| - 功耗（睡眠）                 | 1.3 mA                                                                   |
| - 功耗（空闲）                 | 15.7 mA                                                                  |

## 硬件概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/overview.jpg" style={{width:800}}/></div>

### 4G LTE HAT 与 Raspberry Pi GPIO 连接

4G LTE HAT 通过标准的 40 针 GPIO 接口与 Raspberry Pi 连接，实现无缝集成。主要的 GPIO 连接及其功能如下：

- **电源供应 (5V)**：HAT 通过 GPIO 接口上的 5V 引脚从 Raspberry Pi 获取电源。在连接 PowerMode 开关跳线后，Raspberry Pi 也可以通过这些引脚反向供电。

- **UART 通信 (RX/TX)**：Raspberry Pi 的 GPIO 引脚 8 (TXD) 和 10 (RXD) 连接到 HAT，作为与 4G 模块通信的主要 UART 接口。需要注意的是，PCB 上的 DIP 开关需要进行调整。具体设置将在后续的 DIP 开关部分详细讨论。

- **复位 (RST)**：GPIO 引脚 29 连接到 4G 模块的复位引脚，允许 Raspberry Pi 通过切换信号复位 4G 模块（默认低电平，高电平触发复位）。需要注意的是，PCB 上的 DIP 开关需要进行调整。具体设置将在后续的 DIP 开关部分详细讨论。

- **电源控制 (PWR)**：GPIO 引脚 31 连接到 4G 模块的电源控制引脚，使 Raspberry Pi 能够通过高电平信号打开模块，或通过低电平信号关闭模块。

这些连接确保了 Raspberry Pi 能够有效地为 4G LTE HAT 供电、通信和控制。需要注意的是，PCB 上的 DIP 开关需要进行调整。具体设置将在后续的 DIP 开关部分详细讨论。

### 电源供应

4G LTE HAT 支持多种电源供应模式，以确保灵活性和兼容性：

1. **Raspberry Pi 40 针 5V 电源供应**：HAT 可以直接从 Raspberry Pi 的 40 针 GPIO 接口上的 5V 引脚获取电源。这种方式适用于小型应用，但对于较大的功率需求可能不足，需要进行可靠性测试。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power4.jpg" style={{width:600}}/></div>

2. **Raspberry Pi USB-A 或 USB-C 电源供应**：HAT 可以通过 Raspberry Pi 的板载 USB-A 或 USB-C 接口供电。套件中包含的适配器简化了此设置，允许直接连接到 HAT。

`由 Raspberry Pi 供电。`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power1.jpg" style={{width:600}}/></div>

`由 PC 供电。`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power2.jpg" style={{width:600}}/></div>

3. **外部 USB-C 电源供应**：可以为 HAT 连接一个独立的 USB-C 电源，该电源支持 5-15V PD 电源供应，最大可提供 27W 功率。通过使用跳线，HAT 还可以通过 40 针 GPIO 接口直接为 Raspberry Pi 供电。

这些选项提供了灵活性，以满足不同应用需求和功率需求。需要注意的是，PCB 上的 DIP 开关需要进行调整。具体设置将在后续的 DIP 开关部分详细讨论。

`单独为 4G HAT 供电。`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power5.jpg" style={{width:600}}/></div>

`同时为 4G HAT 和 Raspberry Pi 供电。`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power3.jpg" style={{width:600}}/></div>

### SIM 卡插槽

4G LTE HAT 包含一个用于 CAT4 模块的 SIM 卡插槽，支持 3V 或 1.8V 电压的 Nano SIM 卡。为了正确安装，SIM 卡插槽应与位于其下方的 Raspberry Pi 网络端口垂直对齐。这可以确保连接安全并实现最佳性能。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/nano_sim_small.png" 
    style={{ width: 200}} 
  />
</div>

### 天线连接

4G LTE HAT 支持三个天线连接，每个连接使用 IPEX 1 接口：

1. **主 LTE 天线接口**：用于主要的 LTE 连接。
2. **辅助 LTE 天线接口**：提供辅助 LTE 支持，以增强性能。
3. **GPS/GNSS 天线接口**：专用于 GPS 和 GNSS 功能，确保精确定位。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/antenna_small.png" 
    style={{ width: 200}} 
  />
</div>

这些天线选项确保了 LTE 和基于位置的应用的强大可靠连接。

### LED 指示灯

4G LTE HAT 配备了两个 LED 指示灯，用于状态监控：

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/LED.PNG" 
    style={{ width: 200}} 
  />
</div>

- **PWR LED（红色）**：亮起表示 HAT 的电源状态。
- **NET LED（蓝色）**：指示网络连接状态。在活动连接和数据传输期间以特定间隔闪烁，如果未建立连接则保持关闭。

**网络指示灯状态及对应的网络状态**

| **指示灯**       | **指示灯状态**                     | **对应的网络状态**                   |
|------------------|-------------------------------------|---------------------------------------|
| **NET_STATUS**   | 闪烁 (200 毫秒亮 / 1800 毫秒灭)    | 已注册到 2G 网络                     |
|                  | 闪烁 (1800 毫秒亮 / 200 毫秒灭)    | 已注册到 4G 网络                     |
|                  | 常亮                              | 数据传输中                           |
|                  | 熄灭                              | 无网络连接                           |

这些 LED 提供了关于 HAT 电源和网络活动的快速视觉反馈。

### USB-C 接口

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usbcin.jpg" 
    style={{ width: 600}} 
  />
</div>

4G LTE HAT 包含两个具有不同功能的 USB-C 接口：

1. **USB-C 1 接口**

  - 集成了 EC25 模块，支持 USB 2.0 功能。
  - 支持 AT 命令通信、数据传输、GNSS NMEA 输出、软件调试和固件升级。

2. **USB-C 2 接口**

  - 用于为 LTE HAT 提供高达 5V-15V 的高功率供电。
  - 电源供电可以通过 DIP 开关进行切换。
  - 连接 PowerMode 开关跳线后，该接口可直接为 Raspberry Pi 供电。

这些接口确保了 HAT 的高效通信、调试和电源传输。
这些接口为 HAT 提供了高效的通信和调试功能，其中 USB-C 2 接口专用于电源传输。

### Boot Pads

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/bootpads.PNG" 
    style={{ width: 500}} 
  />
</div>

- 提供对 LTE 模块的 **USB_BOOT** 引脚和 **1.8V VDD** 的访问。
- 短接 USB_BOOT 引脚可强制 LTE 模块进入启动模式，从而通过 **USB-C 1** 接口进行固件烧录。

### RST/PWR 按钮

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/rstpwr.PNG" 
    style={{ width: 300}} 
  />
</div>

- **RST 按钮**：一键重置 LTE 模块。按钮为水平安装，设计便于操作。
- **PWR 按钮**：
  - 在关闭状态下，按下按钮可开启 HAT。
  - 在开启状态下，长按按钮可关闭 HAT。

### DIP 开关

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/dipswitches.PNG" 
    style={{ width: 150}} 
  />
</div>

- **自动开机开关**：
  - **0（关闭）**：禁用。
  - **1（开启）**：在通电后自动开启 LTE HAT。
- **外部电源开关**：
  - **0（关闭）**：禁用。
  - **1（开启）**：允许通过 USB-C 2 接口提供外部电源。
- **RX 连接开关**：
  - **0（关闭）**：禁用。
  - **1（开启）**：启用与 Raspberry Pi UART-RX 的通信。
- **TX 连接开关**：
  - **0（关闭）**：禁用。
  - **1（开启）**：启用与 Raspberry Pi UART-TX 的通信。
- **RST 连接开关**：
  - **0（关闭）**：禁用。
  - **1（开启）**：允许 Raspberry Pi 通过 GPIO 控制 LTE 模块的重置。
- **PWR 连接开关**：
  - **0（关闭）**：禁用。
  - **1（开启）**：允许 Raspberry Pi 通过 GPIO 控制 LTE 模块的电源状态。

### 布局

4G LTE HAT 的设计经过精心对齐和布局，以便与 Raspberry Pi 5 无缝集成：

- **USB-C 1 接口**：安装后，与 Raspberry Pi 5 的 USB 3.0 接口垂直对齐。
- **USB-C 2 接口**：与 Raspberry Pi 5 的 USB-C 电源端口垂直对齐。
- **Nano SIM 卡槽**：与 Raspberry Pi 5 的以太网端口垂直对齐。
- **状态指示灯（PWR/NET）**：这些指示灯与 Raspberry Pi 5 的状态 LED 垂直对齐，便于清晰查看。
- **天线连接器**：三个均匀分布的天线连接器位于板后部，便于连接。
- **Boot Pads**：方便地位于板的外缘，允许用户轻松短接以进行启动模式操作。

这种周到的布局确保了与 Raspberry Pi 5 的兼容性、易用性和整洁的安装设置。

## HAT 结构与 Raspberry Pi 兼容性

4G LTE HAT 的设计与 Raspberry Pi 的尺寸相匹配，确保无缝集成。主要的兼容性和结构特点包括：

- **40 针 GPIO 对齐**：HAT 通过 40 针 GPIO 接头连接，并与 Raspberry Pi 完美对齐。添加了堆叠连接器以保持与官方 Raspberry Pi 散热器的兼容性。
  
- **支持 USB-A 转 USB-C 适配器**：安装堆叠连接器后，USB-C 1 端口位于适当的高度，可直接连接 USB-A 转 USB-C 适配器。
  
- **摄像头连接器访问**：PCB 布局为 Raspberry Pi 5 的摄像头连接器预留了空间，并提供了孔位以便摄像头线缆轻松通过。

- **固定安装孔**：HAT 包含四个安装孔，与 Raspberry Pi 5 的安装点对齐，可通过铜柱和螺钉确保牢固固定。
  
- **高度调整**：堆叠接头将 HAT 提升到 Raspberry Pi 上方的适当高度，为组件提供足够的间隙，并确保 USB-C 1 端口可用。
  
这些设计考虑使 HAT 完全兼容 Raspberry Pi 5，同时保持易于安装和功能性。



## 安装指南

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/steps.jpg" 
    style={{ width: 900}} 
  />
</div>

## 软件准备

### 对于 Windows

**步骤 1：安装驱动程序**

对于 Windows 用户，[下载并安装](https://www.quectel.com/download/quectel_lte5g_windows_usb_driver_v2-7/) 模块所需的驱动程序。
这是与模块正常通信的必要条件。

**步骤 2：连接模块**
使用 USB 线缆将模块插入 PC。
确保 SIM 卡已正确插入模块。

**步骤 3：启动模块**
按下模块上的电源按钮以启动模块。

**步骤 4：访问通信端口**
安装驱动程序后，您将看到三个独立的 COM 端口可用于与模块通信。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/drivers.PNG" 
    style={{ width: 400}} 
  />
</div>

**步骤 5：安装 GUI 工具 (QCOM v1.6)**

[下载并安装](https://www.quectel.com/download/qcom_v1-6/) QCOM v1.6，这是一个用于与模块交互的图形界面工具。
打开工具以开始发送 AT 命令。

**步骤 6：配置并测试 COM 端口**

打开 GUI 工具并选择模块的相应 COM 端口。
根据需要调整通信设置（例如波特率）。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/USBcommunication-2.PNG" 
    style={{ width: 600}} 
  />
</div>

在命令输入框中输入以下测试命令：

```bash
AT
```
**步骤 7：验证输出**

如果设置成功，模块将返回以下输出：

```bash
OK
```

### Raspberry Pi

**步骤 1：安装驱动程序**

- **1.1. 验证内核兼容性**
确保您的 Raspberry Pi 安装了最新的内核。使用以下命令检查内核版本：

```bash
uname -r
```

本指南使用的内核版本为 6.6.xx（Bookworm）。安装相应的 Quectel USB 驱动程序。

- **1.2. 更新并安装所需工具**
运行以下命令更新系统并安装必要的工具：

```bash
sudo apt upgrade
sudo apt install git make gcc
```

- **1.3. 下载并安装 Quectel USB 驱动程序**
克隆驱动程序仓库并构建驱动程序：

```bash
git clone https://github.com/QuecPython/Quectel_Linux_USB_Serial_Option_Driver.git
cd Quectel_Linux_USB_Serial_Option_Driver/src/v6.4.11
sudo make install
```

- **1.4. 连接并验证**

通过 USB 将模块连接到 Raspberry Pi。
按下模块上的电源按钮。
验证模块是否被正确检测：

```bash
lsusb
```

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usb-rpi-small.PNG" 
    style={{ width: 600}} 
  />
</div>

```bash
ls /dev/ttyUSB*
```
对于 AT 命令，使用 /dev/ttyUSB2 作为通信端口。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usb-list.PNG" 
    style={{ width: 600}} 
  />
</div>

**步骤 2：安装 Minicom**

 - **2.1. 安装 Minicom**
安装 Minicom 工具以发送 AT 命令：

```bash
sudo apt install minicom
```

- **2.2. 配置 Minicom**
以设置模式运行 Minicom：

```bash
sudo minicom -s
```

配置以下设置：

```bash
端口: /dev/ttyUSB2
波特率: 9600
校验: N
```
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usb-settings.PNG" 
    style={{ width: 600}} 
  />
</div>

**步骤 3：使用 AT 命令测试**

- **3.1 在配置的端口上打开 Minicom**
```bash
sudo minicom -D /dev/ttyUSB2
```
输入以下命令测试通信：

```bash
AT
```
模块应返回以下响应：
```bash
OK
```

## 资源

- **[网页]** [LTE EG25-G](https://www.quectel.com/product/lte-eg25-g/)

- **[文档]** [AT 指令手册 V2.0](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Quectel_EC2xEG9xEG2x-GEM05_Series_AT_Commands_Manual_V2.0.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>