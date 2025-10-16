---
title: Wio LTE Cat.1
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Wio_LTE_Cat.1/
slug: /cn/Wio_LTE_Cat.1
last_update:
  date: 01/11/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/wio_lte_v1.3.jpg)

Wio Tracker（无线输入输出）是一个开源网关，可实现更快的物联网 GPS 解决方案。它是 Arduino 和 Grove 兼容的开发板，可帮助您跟踪地球上几乎任何移动的物体，然后无线上传数据。Wio LTE 是 Wio Tracker 的 LTE 版本，所以现在我们有 2 个版本的 Wio Tracker，LTE（4G）版本会有一些不同。

与 2G 版本相比，Wio LTE 有三个主要更新。首先，从名称我们知道 Wio LTE 支持 LTE（4G）通信，这比 2G 更快更流行。其次，Wio LTE 总共支持 4 种不同的 GNSS - GPS、北斗、GLONSS 和伽利略，QZSS 也作为额外支持。有了更多的 GNSS 支持，定位将更加准确。第三，Wio LTE 的 MCU 升级到 STM32，基于 Cortex-M4，使 Wio LTE 比 2G 版本快 5 倍。此外，闪存和 RAM 也分别提升到 1MB 和 192+4k 字节。

除了三个主要更新外，LTE 版本与 2G 版本几乎相同。**如果您的项目正在使用 2G 版本，更新到 LTE 版本会非常容易，因为我们已经准备了可移植和可扩展的 AT 命令库。** Arduino 和 Grove 兼容性通过众多库和支持性社区实现更快的开发。与板子一起提供的 GPS 库不仅限于 Arduino - 如果您选择用 C/C++开发，它也能很好地工作。通过板载的 6 个 Grove 连接器，开发者可以创建我们 180 多个传感器和执行器的任何组合来构建项目并解决任何问题。简化原型设计和开发阶段是我们的目标。

Wio LTE 非常适合户外项目，设备可以连接到 GPS 卫星并提供其所附物品的实时位置。LTE 提供宽带宽，允许用户和设备之间更快的交互。如果您要构建共享单车服务、跟踪宠物或牲畜、定位车辆，甚至跟踪儿童等项目，Wio LTE 是最佳解决方案。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/D6DX5P9ncrc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

:::caution
    请始终插入 3.7V 锂电池，以防 USB 电源供应不足。
:::

|产品名称 | 购买方式|
|----------------|-----------|
|Wio LTE JP 版本|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Wio-LTE-JP-Version-v1-3-4G-Cat-1-p-3044.html)|
|Wio LTE AU 版本|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Wio-LTE-AU-Version-v1-3-4G-Cat-1-GNSS-p-2947.html)|
|Wio LTE EU 版本|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Wio-LTE-EU-Version-v1-3-4G-Cat-1-GNSS-p-3212.html)|
|Wio LTE US 版本|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Wio-LTE-US-Version-v1-3-4G-Cat-1-p-4523.html)|

## 版本

| 产品版本 | 变更                                  | 发布日期 |
|-----------------|------------------------------------------|---------------|
| Wio Lte v1.0    | 初始版本                                  | 2017 年 7 月 24 日  |
| Wio Lte v1.1    | 优化生产方法            | 2017 年 10 月 18 日  |
| Wio Lte v1.3    | 硬件变更，改善电源供应 | 2018 年 3 月 9 日 |
| Wio Lte v1.3b   | 调整布局                        | 2018 年 3 月 29 日|

**Wio Lte v1.3 发布说明**

自该产品发布以来，我们收到了大量用户反馈和建议。我们决定基于用户反馈进一步改进该产品，所以您看到的是 Wio Lte v1.3 的推出。

我们在电源电路中做了一些改变：

- 将 PMIC（电源管理 IC）更换为 MP2617，更加稳定。
- 移除为 LTE 模块供电的 DC-DC 模块，在此版本中我们通过主电路或锂电池为 LTE 模块供电。
- 添加两个 100uf 电容器使电源更稳定。

如下图所示。

                      v1.3                                  v1.0

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/wio_ver1.jpg)
![](https://files.seeedstudio.com/wiki/Wio_LTE/img/wio_ver2.jpg)

随着电源电路的变化，电源指示灯的逻辑也发生了变化。

LED 状态 | 电池状态
-----|----
LED 亮| 充电中
LED 灭 | 充电完成
LED 闪烁 | 电池错误（包括无电池状态）

此外，**复位键**逻辑也发生了变化。

操作 | 复位范围
---|---
短时间按住复位按钮（2 秒内） | MCU 复位/LTE 模块不会复位
长时间按住复位按钮（超过 10 秒）| 整个板子将复位

## 特性

- 为宽带物联网应用优化的低成本、低功耗 LTE 连接
- 全球 LTE 和 UMTS/HSPA+
- 嵌入式电源管理单元（PMU），具有超低深度睡眠电流消耗
- GPS/北斗/GLONASS/伽利略和 QZSS
- 适用于 Wio Tracker 的可移植和可扩展 AT 命令库
- Arduino IDE 兼容
- 6 个 Grove 连接器
- Nano SIM 和 TF 卡二合一插槽

## 规格

| 项目            | 功能               | 值                                                                           |
| --------------- | ---------------------- | ------------------------------------------------------------------------------- |
| 微控制器 | 处理器              | STM32F405RG, ARM 32 位 Cortex-M4, 168MHZ                                       |
|                 | 闪存           | 1MB                                                                             |
|                 | SRAM                   | 192+4KB                                                                         |
|                 | 工作电压      | 3.3V                                                                            |
|                 | 每个 I/O 引脚的直流电流 | 7 mA                                                                            |
| LTE             | LTE Cat.1              | AT 命令：3GPP TS27.007 和增强 AT 命令                              |
|                 | 数据                   | LTE-FDD 最大 10Mbps（下行）最大 5Mbps（上行）                                           |
|                 |                        | 协议：TCP/UDP/PPP/FTP/HTTP/NTP/PING/QMI/HTTPS*/SMTP*/MMS*/FTPS*/SMTPS*/SSL* |
|                 | SMS                    | 点对点消息，SMS 广播，文本和 PDU 模式                          |
|                 | 音频                  | 回声消除，噪声消除                                            |
| GNSS            | 系统                 | GPS/北斗/GLONASS/伽利略/QZSS                                                 |
|                 | 精度              | &lt;2.5 m CEP                                                                      |
| 外设      | Grove                  | 2 x 数字端口                                                                |
|                 |                        | 2 x 模拟端口                                                                 |
|                 |                        | 1 x UART                                                                        |
|                 |                        | 1 x I2C                                                                         |
|                 | 天线                | 2 x LTE 天线                                                                 |
|                 |                        | 1 x GPS 天线                                                                 |
|                 | 其他                 | USB：电源供应和上传程序                                            |
|                 |                        | JST 1.0 电池连接器                                                   |
|                 |                        | 3.5mm 音频插孔                                                                |
|                 |                        | MCU 复位按钮，MCU 启动（DFU）按钮，EC21 电源按钮                       |
|                 |                        | 1 x 用户 RGB LED SK6812                                                         |
|                 |                        | Nano SIM 和 TF 卡二合一插槽                                              |
| 尺寸            | 长度                 | 54.7mm                                                                          |
|                 | 宽度                  | 48.2mm                                                                          |
| 重量                  |                 | 18g                                                                                |  |

## 功耗

| 状态                                                                                 | 电流                          |电压                         |
| -------------------------------------------------------------------------------------- | -------------------------------- |--------------------------------|
| 正常启动（启动瞬间）                                                               | 700mA                            |5V                              |
| 启动后（空闲模式）                                                                  | 300mA                            |5V                              |  
| 启动后，正常通信状态（网络传输功能）        | 600mA 左右，峰值达到 2A |5V                              |  
| 通话和短信（信号较好）                                                            | 100-300mA                        |5V                              |  
| 深度睡眠模式，关闭所有功能，需要外部唤醒（仅通过复位唤醒） | 300uA                            |4.2V                            |  
| MCU 深度睡眠模式，唤醒引脚连接到模块，通过模块唤醒               | 超过 300uA（需要测试）    |4.2V                            |


:::note
    有两种工作条件。一种是通过 5V USB 供电。另一种是通过 4.2V 电池供电。   
:::

## 应用创意

- 计步器
- 智能滑雪
- 智能两轮车
- 共享单车
- 宠物追踪器
- 儿童定位手表
- 智能手表
- 交通定位系统
- 车辆定位系统
- 财产安全

:::tip
    使用 Grove 模块来扩展您的应用。板上有 6 个 Grove 连接器。如果这是您第一次听说 Grove，请查看[Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)了解更多详情。简而言之，Grove 是数百种标准化传感器，包括传感器、执行器、显示器以及通信模块。
:::

## 硬件概述

![](https://files.seeedstudio.com/wiki/Wio_Tracker_LTE/img/wio_tracker_lte_v1._top.png)

![](https://files.seeedstudio.com/wiki/Wio_Tracker_LTE/img/wio_tracker_lte_v1_buttom.png)

:::tip
    如果您想使用板载 Grove 连接器，请使用 digitalWrite(B10, HIGH)来开启 3V3_B。除了 D38 默认上电外。否则您无法为 Grove 模块供电。
:::
**EC21 模块**

EC21 包含 9 个变体：EC21-E、EC21-A、EC21-V、EC21-AUT、EC21-AUV、EC21-AU、EC21-KL、EC21-J 和 EC21-CEL。这使其与现有的 EDGE 和 GSM/GPRS 网络向后兼容，确保它可以轻松地从 LTE 迁移到 2G 或 3G 网络。

而**EC21-A**是我们在 WIO Tracker - LTE 中使用的版本，它支持 AT&T 和 T-mobile SIM 卡。如果您想为其他地区定制 EC21 模块，请随时发邮件给我们：fae@seeed.cc

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}\n.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}\n.tg .tg-yw4l{vertical-align:top}\n" }} />
  <table className="tg">
    <tbody><tr>
        <th className="tg-031e" colSpan={2}>频率</th>
        <th className="tg-yw4l">EC21-E</th>
        <th className="tg-yw4l">EC21-A</th>
        <th className="tg-yw4l">EC21-V</th>
        <th className="tg-yw4l">EC21-AUT</th>
      </tr>
      <tr>
        <td className="tg-031e" rowSpan={2}>LTE</td>
        <td className="tg-031e">FDD-LTE</td>
        <td className="tg-yw4l">B1／B3／B5／B7／B8／B20</td>
        <td className="tg-yw4l">B2／B4／B12</td>
        <td className="tg-yw4l">B4／B13</td>
        <td className="tg-yw4l">B1／B3／B5／B7／B28</td>
      </tr>
      <tr>
        <td className="tg-031e">TDD-LTE</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
      </tr>
      <tr>
        <td className="tg-031e">3G</td>
        <td className="tg-031e">WCDMA</td>
        <td className="tg-yw4l">B1／B5／B8</td>
        <td className="tg-yw4l">B2／B4／B5</td>
        <td className="tg-yw4l" />
        <td className="tg-yw4l">B1／B5</td>
      </tr>
      <tr>
        <td className="tg-031e" colSpan={2}>GSM/EDGE</td>
        <td className="tg-yw4l">B3／B8</td>
        <td className="tg-yw4l" />
        <td className="tg-yw4l" />
        <td className="tg-yw4l" />
      </tr>
      <tr>
        <td className="tg-031e" colSpan={2}>嵌入式 GNSS</td>
        <td className="tg-yw4l">可选</td>
        <td className="tg-yw4l">可选</td>
        <td className="tg-yw4l">可选</td>
        <td className="tg-yw4l">可选</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan={2}>Wi-Fi 接口</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan={2}>地区</td>
        <td className="tg-yw4l">欧洲、中东、非洲、韩国、泰国、印度</td>
        <td className="tg-yw4l">北美</td>
        <td className="tg-yw4l">北美</td>
        <td className="tg-yw4l">澳大利亚</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan={2}>认证</td>
        <td className="tg-yw4l">CE/ GCF/ Vodafone</td>
        <td className="tg-yw4l">FCC/ PTCRB/ AT&amp;T/ IC/ ROGERS</td>
        <td className="tg-yw4l">FCC/ GCF/ Verizon</td>
        <td className="tg-yw4l">RCM/ Telstra</td>
      </tr>
    </tbody></table>
  <br />
</div>

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}\n.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}\n.tg .tg-yw4l{vertical-align:top}\n" }} />
  <table className="tg">
    <tbody><tr>
        <th className="tg-031e" colSpan={2}>频率</th>
        <th className="tg-yw4l">EC21-AUV</th>
        <th className="tg-yw4l">EC21-AU</th>
        <th className="tg-yw4l">EC21-KL</th>
        <th className="tg-yw4l">EC21-J</th>
        <th className="tg-yw4l">EC20-CEL</th>
      </tr>
      <tr>
        <td className="tg-031e" rowSpan={2}>LTE</td>
        <td className="tg-031e">FDD-LTE</td>
        <td className="tg-yw4l">B1／B3／B5／B8／B28</td>
        <td className="tg-yw4l">B1／B2①／B3／B4／B5／B7／B8／B28</td>
        <td className="tg-yw4l">B1／B3／B5／B7／B8</td>
        <td className="tg-yw4l">B1／B3／B8／B18／B19／B26</td>
        <td className="tg-yw4l">B1／B3／B5</td>
      </tr>
      <tr>
        <td className="tg-031e">TDD-LTE</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l">B40</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
      </tr>
      <tr>
        <td className="tg-031e">3G</td>
        <td className="tg-031e">WCDMA</td>
        <td className="tg-yw4l">B1／B5／B8</td>
        <td className="tg-yw4l">B1／B2／B5／B8</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
      </tr>
      <tr>
        <td className="tg-031e" colSpan={2}>GSM/EDGE</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l">四频</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
      </tr>
      <tr>
        <td className="tg-031e" colSpan={2}>嵌入式 GNSS</td>
        <td className="tg-yw4l">N<br></br>   </td>
        <td className="tg-yw4l">可选<br></br>   </td>
        <td className="tg-yw4l">N<br></br>   </td>
        <td className="tg-yw4l">N<br></br>   </td>
        <td className="tg-yw4l">N</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan={2}>Wi-Fi 接口</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan={2}>地区</td>
        <td className="tg-yw4l">澳大利亚沃达丰</td>
        <td className="tg-yw4l">南美、澳新、台湾</td>
        <td className="tg-yw4l">韩国</td>
        <td className="tg-yw4l">日本</td>
        <td className="tg-yw4l">中国电信</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan={2}>认证</td>
        <td className="tg-yw4l">RCM</td>
        <td className="tg-yw4l">RCM/ Anatel/ NCC</td>
        <td className="tg-yw4l">KC/ SKT/KT＊/ LGU+＊</td>
        <td className="tg-yw4l">JATE/ TELEC/ DOCOMO＊</td>
        <td className="tg-yw4l">CCC/ SRRC/ NAL</td>
      </tr>
    </tbody></table>
</div>

## 入门指南

### 安装 USB 驱动

- **Windows 用户**：大多数版本的 Windows 不会自动加载 USB 串口的内置驱动程序。您需要下载 ST 的 USB 驱动程序[STM32 虚拟 COM 端口驱动程序](https://www.st.com/en/development-tools/stsw-stm32102.html#get-software)。

- **Mac OS X 和 Chromebook 用户**：板子可以直接插入使用，无需驱动程序！

### 更改 DFU 驱动

**对于 Windows 用户**：

- 步骤 1. 按住 BOOT 按钮并连接到计算机，您将在设备管理器中看到**STM32 Device in DFU Mode**，如下所示。

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/before_driver_installation.png)

- 步骤 2. 这表示您需要使用[zadig_xx.exe](https://files.seeedstudio.com/wiki/Wio_LTE/res/zadig_2.1.2.exe)将 DFU 驱动从**STTub30**更改为**WinUSB**，如下所示。如果我们在 Zadig 上看不到任何信息，请点击 Options--> List All Devices，然后选择 STM32 Virtual COM Ports。

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/zadig.png)

- 步骤 3. 您将在设备管理器中看到"STMicroelectronics Virtual COM Port"，如下所示。

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/after_driver_installation.png)

### 使用 Arduino

**1. 软件配置**

- 步骤 1. 安装 Arduino IDE，推荐 IDE 版本 1.8.0 以上。
- 步骤 2. 按照[如何将 Seeed 开发板添加到 Arduino IDE](https://wiki.seeedstudio.com/cn/Seeed_Arduino_Boards/)将 Wio_LTE 添加到 Arduino 开发板管理器中。

复制并粘贴 json URL 到 Arduino 首选项

```
https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_seeeduino_boards_index.json
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio_LTE/img/boardManager_stm32.png" style={{width:800, height:'auto'}}/></div>


- 步骤 3. 从 Github 下载[Wio_LTE 库](https://github.com/Seeed-Studio/Wio_LTE_Arduino_Library)。
- 步骤 4. 参考[如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)为 Arduino 安装库。

**2. 使用短信发送功能**

- 步骤 1. 将 Nano SIM 卡插入 Nano SIM 卡槽，靠近 PCB 板侧。

- 步骤 2. 选择 File--> Examples-->Wio_LTE_Arduino_Library-->SMSSend 示例。
- 步骤 3. 更改电话号码和信息。
- 步骤 4. 按住 Wio LTE 背面的 BOOT 按钮并将 USB 连接到 PC。
- 步骤 5. 我们将在设备管理器中看到 **STM BOOTLARDER**。
- 步骤 6. 选择 Tools-->Boards-->Wio_Tracker_LTE。
- 步骤 7. 保持 COM 端口为空。
- 步骤 8. 选择 Sketch-->Upload 将代码上传到 Wio_LTE。
- 步骤 9. 按 **RST** 按钮启用 COM 端口。

```cpp
#include "wio_tracker.h"

char message[128] = "Hello from Wio Traker!";

WioTracker wio = WioTracker();

void setup() {
  wio.Power_On();
  SerialUSB.println("Power On!");

  if(!wio.waitForNetworkRegister())
  {
    SerialUSB.println("Network error!");
    return;
  } else {
    SerialUSB.println("Network ready!");
  }

  // Change xxxxxxxxxxx to your test phone number
  if(wio.sendSMS("185XXX26402", message))
  {
    SerialUSB.println("Send OK!");
  }
  else
  {
    SerialUSB.println("Send Error!");
  }

}

void loop() {
  AT_bypass();
}
```

- 步骤 10. 使用 COM 监视器工具打印串行消息。**请不要使用 Arduino IDE COM 监视器！这可能会导致下次下载失败，但重新打开 Arduino IDE 可以恢复该问题**。
- 步骤 11. 电话号码所有者将收到消息。

```cpp
Power On!


Network ready!


Send OK!
```

**3. 使用 SMS 读取功能**

- 步骤 1. 将 Nano SIM 卡插入 Nano SIM 卡槽，靠近 PCB 板侧。
- 步骤 2. 选择 File--> Examples-->Wio_LTE_Arduino_Library-->SMSRead 示例。
- 步骤 3. 按住 Wio LTE 背面的 BOOT 按钮并将 USB 连接到 PC。
- 步骤 4. 我们将在设备管理器中看到 **STM BOOTLARDER**。
- 步骤 5. 选择 Tools-->Boards-->Wio_Tracker_LTE。
- 步骤 6. 保持 COM 端口为空。
- 步骤 7. 选择 Sketch-->Upload 将代码上传到 Wio_LTE。
- 步骤 8. 按 **RST** 按钮启用 COM 端口。

```cpp
#include "wio_tracker.h"

uint16_t newSMSNumber = -1;
char message[128];
char phone[32];
char dateTime[32];


WioTracker wio = WioTracker();

void setup() {
  wio.Power_On();
  SerialUSB.println("Power On!");
  SerialUSB.println("Wait for network registered...");

  if(!wio.waitForNetworkRegister())
  {
    SerialUSB.println("Network error!");
    return;
  } else {
    SerialUSB.println("Network ready!");
  }
  wio.readAllRecUnreadSMS();  // Set all "REC UNREAD SMS" to "REC READ SMS"
}

void loop() {
  int id = wio.detectRecUnreadSMS();
  if(-1 != id){
    newSMSNumber = id;
    wio.readSMS(newSMSNumber, message, 128, phone, dateTime);
    SerialUSB.println("++++++++++++++ Start +++++++++++++++++");
    SerialUSB.print("From: ");
    SerialUSB.println(phone);
    SerialUSB.print("Date: ");
    SerialUSB.println(dateTime);
    SerialUSB.println(message);
    SerialUSB.println("++++++++++++++++ End +++++++++++++++");
  } else {
    SerialUSB.println("Waiting for new SMS!");
  }

  delay(1000);
}

```

- 步骤 9. 使用 COM 监视器工具打印串行消息。**请不要使用 Arduino IDE COM 监视器！这可能会导致下次下载失败，但重新打开 Arduino IDE 可以恢复该问题**。
- 步骤 10. 打开串行监视器，当看到 **Waitting for new SMS!** 时，向板子发送消息，新消息将很快显示，包含电话号码、时间和内容。

```cpp
Power On!
Wait for network registered...


Network ready!


Waiting for new SMS!
Waiting for new SMS!
Waiting for new SMS!

++++++++++++++ Start +++++++++++++++++
From: 1375002xxxx
Date: 17/12/20,17:40:38+32
Hello tracker
++++++++++++++++ End +++++++++++++++
Waiting for new SMS!
Waiting for new SMS!
```

**4. 使用 GPS 功能**

- 步骤 1. 将 Nano SIM 卡插入 Nano SIM 卡槽，靠近 PCB 板侧。
- 步骤 2. 选择 File--> Examples-->Wio_LTE_Arduino_Library-->GNNS-->GNSS_Show_Coordinate 示例。
- 步骤 3. 按住 Wio LTE 背面的 BOOT 按钮并将 USB 连接到 PC。
- 步骤 4. 我们将在设备管理器中看到 **STM BOOTLARDER**。
- 步骤 5. 选择 Tools-->Boards-->Wio_Tracker_LTE。
- 步骤 6. 保持 COM 端口为空。
- 步骤 7. 选择 Sketch-->Upload 将代码上传到 Wio_LTE。
- 步骤 8. 按 **RST** 按钮启用 COM 端口。

```cpp
#include "gnss.h"


GNSS gnss = GNSS();

void setup() {
  gnss.Power_On();
  while(false == gnss.Check_If_Power_On()){
    SerialUSB.println("Waitting for module to alvie...");
    delay(1000);
  }
  SerialUSB.println("\n\rPower On!");

  if(!(gnss.open_GNSS())){
    SerialUSB.println("\n\rGNSS init failed!");
    return;
  }

  SerialUSB.println("Open GNSS OK.");
  delay(2000);
}

void loop() {
  if(gnss.getCoordinate()){
    SerialUSB.println();
    SerialUSB.print("GNSS: \r\n");

    // Output double type
    SerialUSB.print("Data type in double: ");
    SerialUSB.print(gnss.longitude, 6);
    SerialUSB.print(",");
    SerialUSB.println(gnss.latitude, 6);

    // Output char* type
    SerialUSB.print("Data type in string: ");
    SerialUSB.print(gnss.str_longitude);
    SerialUSB.print(",");
    SerialUSB.println(gnss.str_latitude);
  } else{
    SerialUSB.print("...");
  }
}

```

- 步骤 9. 使用 COM 监视器工具打印串行消息。**请不要使用 Arduino IDE COM 监视器！这可能会导致下次下载失败，但重新打开 Arduino IDE 可以恢复该问题**。
- 步骤 10. 我们将看到屏幕上打印的纬度、经度信息。

```cpp
Waitting for module to alvie...
Waitting for module to alvie...
Waitting for module to alvie...

RDY
AT

OK


Power On!


Open GNSS OK.
.................................
GNSS:
Data type in double: 113.966255,22.583820
Data type in string: 113.966255,22.583819

GNSS:
Data type in double: 113.966248,22.583818
Data type in string: 113.966248,22.583818

GNSS:
Data type in double: 113.966248,22.583817
Data type in string: 113.966248,22.583816

GNSS:
Data type in double: 113.966248,22.583820
Data type in string: 113.966248,22.583819
```

**5. 在 NMEA 模式下使用 GPS**

- 步骤 1. 将 Nano SIM 卡插入 Nano SIM 卡槽，靠近 PCB 板侧。
- 步骤 2. 选择 File--> Examples-->Wio_LTE_Arduino_Library-->GNNS-->GNSS_NMEA 示例。
- 步骤 3. 按住 Wio LTE 背面的 BOOT 按钮并将 USB 连接到 PC。
- 步骤 4. 我们将在设备管理器中看到 **STM BOOTLARDER**。
- 步骤 5. 选择 Tools-->Boards-->Wio_Tracker_LTE。
- 步骤 6. 保持 COM 端口为空。
- 步骤 7. 选择 Sketch-->Upload 将代码上传到 Wio_LTE。
- 步骤 8. 按 **RST** 按钮启用 COM 端口。

```cpp
#include "gnss.h"


char nmea_sentence[192];
char nmea_GSV_sentence[512];
GNSS gnss = GNSS();

void setup() {
  gnss.Power_On();
  while(false == gnss.Check_If_Power_On()){
    SerialUSB.println("Waitting for module to alvie...");
    delay(1000);
  }
  SerialUSB.println("\n\rPower On!");

  if(!(gnss.open_GNSS())){
    SerialUSB.println("\n\rGNSS init failed!");
    return;
  }
  SerialUSB.println("Open GNSS OK.");
  gnss.enable_NMEA_mode();  // Set output sentence in NMEA mode
}

void loop() {  
  clean_buffer(nmea_sentence, 192);
  gnss.read_NMEA(GGA, nmea_sentence);
  SerialUSB.print(nmea_sentence);

  clean_buffer(nmea_sentence, 192);
  gnss.read_NMEA(RMC, nmea_sentence);
  SerialUSB.print(nmea_sentence);

  clean_buffer(nmea_sentence, 192);
  gnss.read_NMEA(GSA, nmea_sentence);
  SerialUSB.print(nmea_sentence);

  clean_buffer(nmea_sentence, 192);
  gnss.read_NMEA(VTG, nmea_sentence);
  SerialUSB.print(nmea_sentence);

  clean_buffer(nmea_GSV_sentence, 512);
  gnss.read_NMEA_GSV(nmea_sentence);
  SerialUSB.print(nmea_sentence);

  SerialUSB.println("\r\n");

  delay(1000);
}

```

- 步骤 9. 使用 COM 监视器工具打印串行消息。**请不要使用 Arduino IDE COM 监视器！这可能会导致下次下载失败，但重新打开 Arduino IDE 可以恢复该问题**。
- 步骤 10. 我们将看到以下日志。

```cpp
Waitting for module to alvie...
Waitting for module to alvie...
Waitting for module to alvie...
Waitting for module to alvie...


Power On!


Open GNSS OK.

$GPRMC,,V,,,,,,,,,,N*53
$GPGSA,A,1,,,,,,,,,,,,,,,*1E
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSV,3,1,12,16,60,324,40,27,54,171,40,03,19,253,,08,21,198,*7B
$GPGSV,3,2,12,09,02,322,,14,32,147,,21,04,080,,22,17,233,*7E
$GPGSV,3,3,12,23,32,314,,26,45,018,,31,35,073,,32,10,149,*7C


$GPGGA,,,,,,0,,,,,,,,*66
$GPRMC,,V,,,,,,,,,,N*53
$GPGSA,A,1,,,,,,,,,,,,,,,*1E
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSV,3,1,12,03,19,253,38,08,21,198,34,14,32,147,37,16,60,324,42*70
$GPGSV,3,2,12,22,17,233,37,23,32,314,38,26,45,018,40,27,54,171,44*7D
$GPGSV,3,3,12,31,35,073,40,09,02,322,,21,04,080,,32,10,149,*75


$GPGGA,,,,,,0,,,,,,,,*66
$GPRMC,,V,,,,,,,,,,N*53
$GPGSA,A,1,,,,,,,,,,,,,,,*1E
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSV,4,1,13,03,19,253,40,04,,,37,08,21,198,36,09,02,322,33*43
$GPGSV,4,2,13,14,32,147,37,16,60,324,41,22,17,233,40,23,32,314,39*72
$GPGSV,4,3,13,26,45,018,41,27,54,171,41,31,35,073,40,21,04,080,*78
$GPGSV,4,4,13,32,10,149,*47


$GPGGA,,,,,,0,,,,,,,,*66
$GPRMC,,V,,,,,,,,,,N*53
$GPGSA,A,1,,,,,,,,,,,,,,,*1E
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSV,4,1,14,03,19,253,39,04,,,37,08,21,198,36,09,02,322,34*4D
$GPGSV,4,2,14,14,32,147,36,16,60,324,41,22,17,233,37,23,32,314,39*74
$GPGSV,4,3,14,26,45,018,41,27,54,171,41,31,35,073,41,21,04,080,*7E
$GPGSV,4,4,14,32,10,149,,33,,,34*47
$GPVTG,,T,,M,,N,,K,N*2C


$GPGGA,110917.30,2235.028403,N,11357.974736,E,1,10,0.9,52.2,M,-1.0,M,,*43
$GPRMC,110917.30,A,2235.028403,N,11357.974736,E,0.0,,050118,2.3,W,A*0B
$GPGSA,A,3,03,08,09,14,16,22,23,26,27,31,,,1.8,0.9,1.6*37
$GPVTG,,T,2.3,M,0.0,N,0.0,K,A*0C
$GPGSV,4,1,15,03,19,253,38,04,,,36,08,21,198,34,09,02,322,33*49
$GPGSV,4,2,15,14,32,147,36,16,60,324,40,22,17,233,36,23,32,314,38*74
$GPGSV,4,3,15,26,45,018,40,27,54,171,40,31,35,073,40,21,04,080,*7E
$GPGSV,4,4,15,32,10,149,,33,,,34,46,,,34*43
$GPVTG,,T,2.3,M,0.0,N,0.0,K,A*0C

```

**6. 使用拨打电话功能**

- 步骤 1. 将 Nano SIM 卡插入 Nano SIM 卡槽，靠近 PCB 板侧。
- 步骤 2. 选择 File--> Examples-->Wio_LTE_Arduino_Library-->Callup 示例。
- 步骤 3. 更改电话号码。
- 步骤 4. 按住 Wio LTE 背面的 BOOT 按钮并将 USB 连接到 PC。
- 步骤 5. 我们将在设备管理器中看到 **STM BOOTLARDER**。
- 步骤 6. 选择 Tools-->Boards-->Wio_Tracker_LTE。
- 步骤 7. 保持 COM 端口为空。
- 步骤 8. 选择 Sketch-->Upload 将代码上传到 Wio_LTE。
- 步骤 9. 按 **RST** 按钮启用 COM 端口。
- 步骤 10. 使用 COM 监视器工具打印串行消息。**请不要使用 Arduino IDE COM 监视器！这可能会导致下次下载失败，但重新打开 Arduino IDE 可以恢复该问题**。
- 步骤 11. 电话号码所有者将接到电话。


```cpp
#include "wio_tracker.h"

WioTracker wio = WioTracker();

void setup() {
  wio.Power_On();
  SerialUSB.println("Power On!");

  while(!wio.init()){
    delay(1000);
    SerialUSB.println("Accessing network...");
  }
  SerialUSB.println("Initialize done...");

  bool ret = wio.waitForNetworkRegister();
  if(true == ret){
      SerialUSB.println("Network accessed!");
  }else {
      SerialUSB.println("Network failed!");
      return;
  }

  // Make a phone call
  wio.callUp("185XXX26402");
  SerialUSB.println("Calling...");

}

void loop() {
  /* Debug */
  AT_bypass();
}

```

**7. 使用 Socket TCP/UDP 客户端**

- 步骤 1. 将 Nano SIM 卡插入 Nano SIM 卡槽，靠近 PCB 板一侧。
- 步骤 2. 选择 File--> Examples-->Wio_LTE_Arduino_Library-->TCPConnect。
- 步骤 3. 更改电话号码。
- 步骤 4. 按住 Wio LTE 背面的 BOOT 按钮，并将 USB 连接到 PC。
- 步骤 5. 我们将在设备管理器中看到 **STM BOOTLARDER**。
- 步骤 6. 选择 Tools-->Boards-->Wio_Tracker_LTE。
- 步骤 7. 保持 COM 端口为空。
- 步骤 8. 选择 Sketch-->Upload 将代码上传到 Wio_LTE。

```cpp
#include "ethernet.h"

Ethernet eth = Ethernet();


// const char apn[10] = "CMNET";
const char apn[10] = "UNINET";
const char URL[100] = "mbed.org";
char http_cmd[100] = "GET /media/uploads/mbed_official/hello.txt HTTP/1.0\n\r\n\r";
int port = 80;

int ret = 0;


void setup() {
  SerialUSB.println("Begin...");
  eth.Power_On();
  while(false == eth.Check_If_Power_On()){
    SerialUSB.println("Waitting for module to alvie...");
    delay(1000);
  }

  while(!eth.init()){
    delay(1000);
    SerialUSB.println("Accessing network...");
  }
  SerialUSB.println("Initialize done...");

  eth.join(apn);
  SerialUSB.print("\n\rIP: ");
  SerialUSB.print(eth.ip_string);

  if(eth.connect(URL, port, TCP))
  {
    eth.write(http_cmd);
    while(MODULE_PORT.available()){
        serialDebug.write(MODULE_PORT.read());
    }    
    eth.close(1);
  }
  else {
    SerialUSB.println("Connect Error!");
  }

}

void loop() {
  /* Debug */
  AT_bypass();
}
```

- 步骤 9. 按下 **RST** 按钮以启用 COM 端口。
- 步骤 10. 使用 COM 监视器工具打印串行消息。**请不要使用 Arduino IDE COM 监视器！这可能会导致下次下载失败，但重新打开 Arduino IDE 可以恢复该问题**。

```
Begin...
Waitting for module to alvie...
Waitting for module to alvie...
Waitting for module to alvie...


Initialize done...


IP: 10.229.226.108


+QIURC: "recv",0,389
HTTP/1.1 200 OK
Server: nginx/1.11.12
Date: Mon, 25 Dec 2017 04:45:01 GMT
Content-Type: text/plain
Content-Length: 14
Connection: close
Last-Modified: Fri, 27 Jul 2012 13:30:34 GMT
Accept-Ranges: bytes
Cache-Control: max-age=36000
Expires: Mon, 25 Dec 2017 14:44:58 GMT
X-Upstream-L1-next-hop: 217.140.101.22:8080
X-Upstream-L1: developer-sjc-cyan-border-nginx

Hello world!


+QIURC: "closed",0
```

**8. 使用 SD 卡**

:::note
    Epruino 固件 v1.94 不支持 SD 卡驱动，请使用 v1.96 或更高版本，最新版本是 v1.99。
:::

- 步骤 1. 将 micro SD 卡插入 SD 卡槽。
- 步骤 2. 选择 File--> Examples-->Wio_LTE_Arduino_Library-->SDCard->CardInfo。
- 步骤 3. 更改电话号码。
- 步骤 4. 按住 Wio LTE 背面的 BOOT 按钮，并将 USB 连接到 PC。
- 步骤 5. 我们将在设备管理器中看到 **STM BOOTLARDER**。
- 步骤 6. 选择 Tools-->Boards-->Wio_Tracker_LTE。
- 步骤 7. 保持 COM 端口为空。
- 步骤 8. 选择 Sketch-->Upload 将代码上传到 Wio_LTE。

```cpp
 // include the SD library:
#include <SD.h>

// set up variables using the SD utility library functions:
Sd2Card card;
SdVolume volume;
SdFile root;

const int chipSelect = 43;

void setup()
{

  SerialUSB.print("\nInitializing SD card...");
  pinMode(SS, OUTPUT);


  // we'll use the initialization code from the utility libraries
  // since we're just testing if the card is working!
  while (!card.init(SPI_HALF_SPEED, chipSelect)) {
    SerialUSB.println("initialization failed. Things to check:");
    SerialUSB.println("* is a card is inserted?");
    SerialUSB.println("* Is your wiring correct?");
    SerialUSB.println("* did you change the chipSelect pin to match your shield or module?");
  }

  // print the type of card
  SerialUSB.print("\nCard type: ");
  switch(card.type()) {
    case SD_CARD_TYPE_SD1:
      SerialUSB.println("SD1");
      break;
    case SD_CARD_TYPE_SD2:
      SerialUSB.println("SD2");
      break;
    case SD_CARD_TYPE_SDHC:
      SerialUSB.println("SDHC");
      break;
    default:
      SerialUSB.println("Unknown");
  }

  // Now we will try to open the 'volume'/'partition' - it should be FAT16 or FAT32
  if (!volume.init(card)) {
    SerialUSB.println("Could not find FAT16/FAT32 partition.\nMake sure you've formatted the card");
    return;
  }


  // print the type and size of the first FAT-type volume
  uint32_t volumesize;
  SerialUSB.print("\nVolume type is FAT");
  SerialUSB.println(volume.fatType(), DEC);
  SerialUSB.println();

  volumesize = volume.blocksPerCluster();    // clusters are collections of blocks
  volumesize *= volume.clusterCount();       // we'll have a lot of clusters
  volumesize *= 512;                            // SD card blocks are always 512 bytes
  SerialUSB.print("Volume size (bytes): ");
  SerialUSB.println(volumesize);
  SerialUSB.print("Volume size (Kbytes): ");
  volumesize /= 1024;
  SerialUSB.println(volumesize);
  SerialUSB.print("Volume size (Mbytes): ");
  volumesize /= 1024;
  SerialUSB.println(volumesize);


  SerialUSB.println("\nFiles found on the card (name, date and size in bytes): ");
  root.openRoot(volume);

  // list all files in the card with date and size
  root.ls(LS_R | LS_DATE | LS_SIZE);
}


void loop(void) {

}
```

- 步骤 9. 按下 **RST** 按钮以启用 COM 端口。
- 步骤 10. 使用 COM 监视器工具打印串行消息。**请不要使用 Arduino IDE COM 监视器！这可能会导致下次下载失败，但重新打开 Arduino IDE 可以恢复该问题**。

```cpp

Initializing SD card...
Card type: SDHC

Volume type is FAT32

Volume size (bytes): 2689048576
Volume size (Kbytes): 2626024
Volume size (Mbytes): 2564

Files found on the card (name, date and size in bytes):

```

**9. 使用 Grove 模块**

**9.1 使用 Grove 数字模块**  

我们使用 [Grove-TemperatureAndHumidity_Sensor](https://wiki.seeedstudio.com/cn/Grove-TemperatureAndHumidity_Sensor/) 作为数字输入，并连接到 Wio LTE 的 D20。

- 步骤 1. 按住 Wio LTE 背面的 BOOT 按钮，并将 USB 连接到 PC。
- 步骤 2. 我们将在设备管理器中看到 **STM BOOTLARDER**。
- 步骤 3. 选择 Tools-->Boards-->Wio_Tracker_LTE。
- 步骤 4. 保持 COM 端口为空。
- 步骤 5. 从 Github 下载 [WioLTEforArduino Library](https://github.com/SeeedJP/WioLTEforArduino/archive/master.zip) 和 [Grove-TemperatureAndHumidity_Sensor Library](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor/archive/master.zip)。参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。
- 步骤 6. 将下面的代码复制到 Sketch。
- 步骤 7. 点击 Upload 将代码上传到 Wio_LTE。

```c
#include <WioLTEforArduino.h>
#include "DHT.h"
#define DHTPIN  (WIOLTE_D20)
#define INTERVAL    (100)

// Uncomment whatever type you're using!
#define DHTTYPE DHT11   // DHT 11 
//#define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)

WioLTE Wio;
DHT dht(DHTPIN, DHTTYPE);

void setup()
{
  delay(200);
  SerialUSB.println("### I/O Initialize.");
  Wio.Init();
  SerialUSB.println("### Power supply ON.");
  Wio.PowerSupplyGrove(true);
  delay(500);
  SerialUSB.println("### Initial temperature and humidity sensor.");
  dht.begin();
}

void loop()
{
    // Reading temperature or humidity takes about 250 milliseconds!
    // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)
    float h = dht.readHumidity();
    float t = dht.readTemperature();

    // check if returns are valid, if they are NaN (not a number) then something went wrong!
    if (isnan(t) || isnan(h)) 
    {
        SerialUSB.println("Failed to read from DHT");
    } 
    else 
    {
        SerialUSB.print("Humidity: "); 
        SerialUSB.print(h);
        SerialUSB.print(" %\t");
        SerialUSB.print("Temperature: "); 
        SerialUSB.print(t);
        SerialUSB.println(" *C");
    }
}
```

- 步骤 8. 按下 **RST** 按钮以启用 COM 端口。
- 步骤 9. 使用 COM 监视器工具打印串行消息。**请不要使用 Arduino IDE COM 监视器！这可能会导致下次下载失败，但重新打开 Arduino IDE 可以恢复该问题**。

```
### I/O Initialize.
### Power supply ON.
### Initial temperature and humidity sensor.
Humidity: 40.00 % Temperature: 27.00 *C
Humidity: 40.00 % Temperature: 27.00 *C
Humidity: 40.00 % Temperature: 27.00 *C
Humidity: 40.00 % Temperature: 27.00 *C
Humidity: 39.00 % Temperature: 27.00 *C
```

**9.2 使用 Grove 模拟模块**  

我们使用 [Grove-Light Sensor](https://wiki.seeedstudio.com/cn/Grove-Light_Sensor/) 作为模拟输入，并连接到 Wio LTE 的 A4（12 位 ADC）。

- 步骤 1. 按住 Wio LTE 背面的 BOOT 按钮，并将 USB 连接到 PC。
- 步骤 2. 我们将在设备管理器中看到 **STM BOOTLARDER**。
- 步骤 3. 选择 Tools-->Boards-->Wio_Tracker_LTE。
- 步骤 4. 保持 COM 端口为空。
- 步骤 5. 从 Github 下载 [WioLTEforArduino Library](https://github.com/SeeedJP/WioLTEforArduino/archive/master.zip)。参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。
- 步骤 6. 将下面的代码复制到 Sketch。
- 步骤 7. 点击 Upload 将代码上传到 Wio_LTE。

```c
#include <WioLTEforArduino.h>
#define LIGHT_PIN  (WIOLTE_A4)
WioLTE Wio;

void setup() {
  delay(200);
  SerialUSB.println("### I/O Initialize.");
  Wio.Init();
  SerialUSB.println("### Power supply ON.");
  Wio.PowerSupplyGrove(true);
  delay(500);
  SerialUSB.println("### Setup pin mode.");
  pinMode(LIGHT_PIN, INPUT_ANALOG);
}

void loop() {
  int light = analogRead(LIGHT_PIN);
  SerialUSB.println(light);
  delay(1000);
}

```

- 步骤 8. 按下 **RST** 按钮以启用 COM 端口。
- 步骤 9. 使用 COM 监视器工具打印串行消息。**请不要使用 Arduino IDE COM 监视器！这可能会导致下次下载失败，但重新打开 Arduino IDE 可以恢复该问题**。


```
### I/O Initialize.
### Power supply ON.
### Setup pin mode.
2531
2530
2530
2530
2531
2533
2532
2531
```

**9.3 使用 Grove I2C 模块**  

我们使用 [Grove - 3-Axis Digital Accelerometer(±16g)](https://wiki.seeedstudio.com/cn/Grove-3-Axis_Digital_Accelerometer-16g/) 作为 I2C 设备，并连接到 Wio LTE 的 I2C 端口。

- 步骤 1. 按住 Wio LTE 背面的 BOOT 按钮，并将 USB 插入 PC。
- 步骤 2. 我们将在设备管理器中看到 **STM BOOTLARDER**。
- 步骤 3. 选择 Tools-->Boards-->Wio_Tracker_LTE。
- 步骤 4. 保持 COM 端口为空。
- 步骤 5. 从 Github 下载 [WioLTEforArduino Library](https://github.com/SeeedJP/WioLTEforArduino/archive/master.zip) 和 [ADXL345](https://github.com/Seeed-Studio/Accelerometer_ADXL345/archive/master.zip)。参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。
- 步骤 6. 将下面的代码复制到 Sketch。
- 步骤 7. 点击上传将代码上传到 Wio_LTE。

```c
#include <WioLTEforArduino.h>
#include <ADXL345.h>       

#define INTERVAL    (100)

WioLTE Wio;
ADXL345 Accel;

void setup()
{ 
  delay(200);
  SerialUSB.println("### I/O Initialize.");
  Wio.Init(); 
  SerialUSB.println("### Power supply ON.");
  Wio.PowerSupplyGrove(true);
  delay(500);
  Accel.powerOn();
  SerialUSB.println("### Setup completed.");
}

void loop()
{
  int x;
  int y;
  int z;
  Accel.readXYZ(&x, &y, &z);
  SerialUSB.print(x);
  SerialUSB.print(' ');
  SerialUSB.print(y);
  SerialUSB.print(' ');
  SerialUSB.println(z); 
  delay(INTERVAL);
}
```

- 步骤 8. 按下 **RST** 按钮以启用 COM 端口。
- 步骤 9. 使用 COM 监视器工具打印串行消息。**请不要使用 Arduino IDE COM 监视器！这可能会导致下次下载失败，但重新打开 Arduino IDE 可以恢复该问题**。

```
### I/O Initialize.
### Power supply ON.
### Setup completed.
-224 -51 -82
-227 -40 -90
-231 -37 -91
-229 -37 -90
-227 -38 -90
-229 -39 -90
```

**9.4 使用 Grove UART 模块**  

我们使用 [Grove-CO2](https://wiki.seeedstudio.com/cn/Grove-CO2_Sensor/) 作为 UART 设备，并连接到 Wio LTE 的 UART 端口。

- 步骤 1. 按住 Wio LTE 背面的 BOOT 按钮，并将 USB 插入 PC。
- 步骤 2. 我们将在设备管理器中看到 **STM BOOTLARDER**。
- 步骤 3. 选择 Tools-->Boards-->Wio_Tracker_LTE。
- 步骤 4. 保持 COM 端口为空。
- 步骤 5. 从 Github 下载 [WioLTEforArduino Library](https://github.com/SeeedJP/WioLTEforArduino/archive/master.zip)。参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。
- 步骤 6. 将下面的代码复制到 Sketch。
- 步骤 7. 点击上传将代码上传到 Wio_LTE。

```c
#include <WioLTEforArduino.h>
#include <ADXL345.h>       
#define INTERVAL    (100)

const unsigned char cmd_get_sensor[] =
{
    0xff, 0x01, 0x86, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x79
};

unsigned char dataRevice[9];
int temperature;
int CO2PPM;

WioLTE Wio;

void setup()
{ 
  delay(200);
  SerialUSB.println("### I/O Initialize.");
  Wio.Init(); 
  SerialUSB.println("### Power supply ON.");
  Wio.PowerSupplyGrove(true);
  delay(500);
  SerialUSB.println("Initial UART.");
  Serial.begin(9600);
}

void loop() {
    if(dataRecieve())
    { 
        SerialUSB.print("Temperature: ");
        SerialUSB.print(temperature);
        SerialUSB.print("  CO2: ");
        SerialUSB.print(CO2PPM);
        SerialUSB.println("");
    }
    delay(1000); 
}


bool dataRecieve(void)
{
    byte data[9];
    int i = 0;

    //transmit command data
    for(i=0; i<sizeof(cmd_get_sensor); i++)
    {
        Serial.write(cmd_get_sensor[i]);
    }
    delay(10);
    //begin reveiceing data
    if(Serial.available())
    {
        while(Serial.available())
        {
            for(int i=0;i<9; i++)
            {
                data[i] = Serial.read();
            }
        }
    }

    for(int j=0; j<9; j++)
    {
        Serial.print(data[j]);
        Serial.print(" ");
    }
    Serial.println("");

    if((i != 9) || (1 + (0xFF ^ (byte)(data[1] + data[2] + data[3] + data[4] + data[5] + data[6] + data[7]))) != data[8])
    {
        return false;
    }

    CO2PPM = (int)data[2] * 256 + (int)data[3];
    temperature = (int)data[4] - 40;

    return true;
}
```

- 步骤 8. 按下 **RST** 按钮以启用 COM 端口。
- 步骤 9. 使用 COM 监视器工具打印串行消息。**请不要使用 Arduino IDE COM 监视器！这可能会导致下次下载失败，但重新打开 Arduino IDE 可以恢复该问题**。

```
### I/O Initialize.
### Power supply ON.
### Initial UART.
Temperature: 22  CO2: 410
Temperature: 22  CO2: 1031
Temperature: 22  CO2: 2699
Temperature: 22  CO2: 2579
Temperature: 22  CO2: 2972
```

## 常见问题

**Q1: 我们无法使用 Arduino IDE 下载程序，并在 Arduino IDE 底部看到以下错误信息。**

A3: 这是一个错误。当使用 Arduino 串口打印信息时，Arduino IDE 会记住串口号。因此没有可用的串口来下载新程序。我们可以重启 Arduino IDE 作为临时解决方案。对于预防性解决方案，请使用其他 COM 监视器软件，如 SSCOM。请确保我们在程序下载过程中看到进度条。否则，我们将看到以下信息，程序不会被下载。

```
Sketch uses 23068 bytes (2%) of program storage space. Maximum is 1048576 bytes.
Global variables use 13864 bytes of dynamic memory.
DFU begin
dfu-util 0.8

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2014 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to dfu-util@lists.gnumonks.org

Invalid DFU suffix signature
A valid DFU suffix will be required in a future dfu-util release!!!
No DFU capable USB device available
DFU end
```

**Q2: 更改 dfu 驱动程序后，我们在设备管理器中看不到 COM 端口。**

A5: 请按下 RST 按钮，我们将在设备管理器中看到 COM 端口。

**Q3: 我们在 Zadig 软件上看不到任何信息。**

A6: 请点击 Options--> List All Devices，然后选择 STM32 Virtual COM Ports。

## Wio LTE AU 版本 v1.3b 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20AU%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Wio LTE EU 版本 v1.3b 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20EU%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Wio LTE JP 版本 v1.3b 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20JP%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Wio LTE US 版本 v1.3b 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20US%20Version%20v1.3b%20-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Eagle&PDF]** [Wio LTE AU 版本 v1.3b](https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20AU%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip)

- **[Eagle&PDF]** [Wio LTE EU 版本 v1.3b](https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20EU%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip)

- **[Eagle&PDF]** [Wio LTE JP 版本 v1.3b](https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20JP%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip)

- **[Eagle&PDF]** [Wio LTE US 版本 v1.3b](https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20US%20Version%20v1.3b%20-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip)

- **[库]** [Wio_LTE_Arduino_Library](https://github.com/Seeed-Studio/Wio_LTE_Arduino_Library)

- **[数据手册]** [AT 命令](https://files.seeedstudio.com/wiki/Wio_LTE/res/AT_Command.zip)

## 项目

**使用 Google 地图进行交通数据可视化**：我们使用 Wio LTE cat.1 监控交通 GPS 和其他信息。对于冷链，我们可以监控 GPS 位置以及温度和湿度。对于骑行，我们可以监控 GPS 位置以及心率。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/transportation-data-visualization-with-google-map-517ce4/embed' width='350'></iframe>

**大气污染可视化**：空气污染问题越来越受到关注。这次我们尝试使用 Wio LTE 和新的激光 PM2.5 传感器监控 PM2.5。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/atmospheric-pollution-visualization-1940f4/embed' width='350'></iframe>

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
