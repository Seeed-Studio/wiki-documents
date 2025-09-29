---
description: LoRa/LoRaWAN 网关套件
title: LoRa/LoRaWAN 网关套件
keywords:
- Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/LoRa_LoRaWan_Gateway_Kit
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: LoRa/LoRaWAN Gateway Kit
category: Wireless
bzurl:  https://www.seeedstudio.com/LoRa-LoRaWAN-Gateway-868MHz-Kit-with-Raspberry-Pi-3-p-2823.html
prodimagename:
surveyurl: https://www.research.net/r/LoRa_LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3
sku: 110060622
--- -->
<!-- ![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/LoraWan%20Getway%20868MHz.jpg) -->

LoRa 是创建低功耗广域网络的完美长距离无线解决方案。到目前为止，我们已经发布了几款"LoRa"开发板，如 Seeeduino LoRaWan 和 Grove LoRa Radio 等。我们还为用户提供了即用型的 [SenseCAP M2 多平台 LoRaWAN 室内网关](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)。但是，如果您想构建自己的 LoRa 网络，您需要准备 3 样东西才能开始：一个网关、至少一个节点和一个本地服务器，您可以在其中监控所有设备。

该套件提供了您需要的所有基本元素：一个 Raspberry Pi 3、一个带 GPS 的 Seeeduino LoRaWAN 以及一个网关和本地服务器，允许您在所有 LoRa 节点之间收集和传输数据。通过将网关与 Seeeduino LoRaWAN 和 Grove 模块连接，您可以在几分钟内构建您的物联网原型。

关于网关模块 RHF0M301，它是一个 10 通道（8 x Multi-SF + 1 x 标准 LoRa + 1 x FSK）LoRaWan 网关模块，板载 24 引脚 DIP 端口，用户可以轻松地将 RHF0M301 与 PRI 2 桥接器 RHF4T002 连接，这是 Raspberry Pi 3 和 RHF0M301 的适配器。我们还包含了一个 868MHz 天线、一个 8GB SD 卡和 USB 线缆、以太网线缆和其他配件。

<iframe width={800} height={450} src="https://www.youtube.com/embed/4df5kaaKa6I" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

:::caution
请始终插入 3.7V 锂电池，以防 USB 电源供应不足。我们在本 wiki 中使用 868MHz 套件，但本 wiki 适用于 868MHz 套件和 915MHz 套件。

:::

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#26ADE4;}
.tg .tg-s6z2{:center}
.tg .tg-5hgy{background-color:#D2E4FC;:center}
</style> -->
<table className="tg">
  <tbody><tr>
      <th className="tg-s6z2">适用于 Raspberry Pi 3 的 868MHz 套件</th>
      <th className="tg-s6z2"><a href="https://www.seeedstudio.com/LoRa-LoRaWAN-Gateway-868MHz-Kit-with-Raspberry-Pi-3-p-2823.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" width={200} height={30} border={0} /></a></th>
    </tr>
    <tr>
      <td className="tg-5hgy">适用于 Raspberry Pi 3 的 915MHz 套件</td>
      <td className="tg-5hgy"><a href="https://www.seeedstudio.com/LoRa%2FLoRaWAN-Gateway-915MHz-for-Raspberry-Pi-3-p-2821.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" width={200} height={30} border={0} /></a></td>
    </tr>
  </tbody></table>

## 特性

- 低功耗和广域覆盖
- 工业标准可靠性
- 构建 LoRa /LoRaWAN 网络的经济解决方案
- 丰富的传感器和执行器配件
- 实时监控

## 硬件概述

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/loragate_hardware.png)

### 零件清单
<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#26ADE4;}
.tg .tg-vn4c{background-color:#D2E4FC}
.tg .tg-0fxu{background-color:#6ab0de;vertical-align:top}
.tg .tg-6k2t{background-color:#D2E4FC;vertical-align:top}
.tg .tg-yw4l{vertical-align:top}
</style> -->
<table className="tg">
  <tbody><tr>
      <th className="tg-0fxu">零件编号</th>
      <th className="tg-0fxu">零件名称</th>
      <th className="tg-0fxu">数量</th>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">❶</font></td>
      <td className="tg-vn4c"><a href="https://wiki.seeedstudio.com/cn/Raspberry_Pi_3_Model_B/">Raspberry Pi 3</a></td>
      <td className="tg-vn4c">1 个</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">❷</font></td>
      <td className="tg-031e">网关模块 RHF0M301–868</td>
      <td className="tg-031e">1 个</td>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">❸</font></td>
      <td className="tg-vn4c">PRI 2 Bridge RHF4T002</td>
      <td className="tg-vn4c">1 个</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">❹</font></td>
      <td className="tg-031e"><a href="https://wiki.seeedstudio.com/cn/Seeeduino_LoRAWAN/">Seeeduino LoRaWAN with GPS (RHF76-052AM)</a></td>
      <td className="tg-031e">1 个</td>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">❺</font></td>
      <td className="tg-vn4c">USB 转 UART 适配器</td>
      <td className="tg-vn4c">1 个</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">❻</font></td>
      <td className="tg-031e">升级至 16GB Micro SD 卡 – Class 10</td>
      <td className="tg-031e">1 个</td>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">❼</font></td>
      <td className="tg-vn4c">0dBi 橡胶鸭式天线</td>
      <td className="tg-vn4c">1 个</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">❽</font></td>
      <td className="tg-yw4l">5V/2.1A 美标适配器带 Micro USB 连接器</td>
      <td className="tg-yw4l">1 个</td>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">❾</font></td>
      <td className="tg-6k2t">Micro USB 线缆 20cm</td>
      <td className="tg-6k2t">1 个</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">❿</font></td>
      <td className="tg-yw4l">Micro USB 线缆 100cm</td>
      <td className="tg-yw4l">1 个</td>
    </tr>
    <tr>
      <td className="tg-6k2t"><font face size={5} font color="00b0f0">⓫</font></td>
      <td className="tg-6k2t">RJ45 以太网线缆 200cm</td>
      <td className="tg-6k2t">1 个</td>
    </tr>
    <tr>
      <td className="tg-yw4l"><font face size={5} font color="00b0f0">⓬</font></td>
      <td className="tg-yw4l">JST2.0 线缆 10cm</td>
      <td className="tg-yw4l">1 个</td>
    </tr>
  </tbody></table>

## 应用创意

- 物联网
- 智能家居
- 安全
- 智能电网
- 智能农场
- 智能园区

## 入门指南

### 硬件

#### 接口概览

由于这里有许多接口，有必要了解这些接口的功能。详情请参考下图。
![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/Lora_interface.jpg)

- <font face size={5} font color="ffc000">❶</font> <strong>Micro-USB 输入：</strong>
整个系统使用此 Micro-USB 接口进行供电。

- <font face size={5} font color="ffc000">❂</font> <strong>USB HOST 连接器：</strong>
 输出电源为树莓派供电

- <font face size={5} font color="ffc000">❸</font> <strong>树莓派电源输入：</strong> 为树莓派输入电源。

- <font face size={5} font color="ffc000">❹</font> <strong>HDMI：</strong> 高清数字视频输出接口。

- <font face size={5} font color="ffc000">❺</font> <strong>耳机插孔：</strong> 3.5mm 耳机插孔

- <font face size={5} font color="ffc000">❻</font> <strong>以太网接口：</strong> 您可以使用以太网接口将此系统连接到互联网。或者您可以在配置无线网络后使用 Wifi。

### 硬件连接

- 步骤 1. 将 **网关模块 RHF0M301–868** 插入 **PRI 2 Bridge RHF4T002**。
- 步骤 2. 将 **PRI 2 Bridge RHF4T002** 插入 **树莓派 3**。
- 步骤 3. 通过 20cm Micro-USB 线缆连接 <font face size={5} font color="ffc000">❷</font> 和 <font face size={5} font color="ffc000">❸</font>。
- 步骤 4. 将 **USB 转 UART 适配器** 连接到 **树莓派 3** 的 GPIO。请按照下图所示连接它们。

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/RX-TX.png)

- 步骤 5. 将 **USB 转 UART 适配器** 插入您的 PC。
- 步骤 6. 通过 100cm Micro-USB 线缆将 <font face size={5} font color="ffc000">❶</font> 与 5V/2.1A 标准适配器连接。

当您完成所有步骤后，整个系统应该如下图所示。

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/connection.jpg)

## 软件

### 软件工具

在以下指南中，需要使用以下工具，请将其安装到您的计算机上。

- **[Arduino](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)**，便携式串口工具，用于打开 Seeeduino LoRaWAN with GPS (RHF76-052AM) 的串口并向其发送 AT 命令。
- **[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)**，终端工具包括串口和 SSH 终端，用于控制树莓派。
- 互联网浏览器，用于访问 RHF2S001 集成 LoRaWAN 服务器（建议使用 Chrome 或 Firefox）。

:::note
您可能有其他喜欢的串口工具，当然您可以使用它们。但是如果您不确定您的工具，请使用我们推荐的工具。

:::

### 连接到本地服务器

#### 步骤 1. 上电并连接到 putty

a) 首先，确保串口工具和 RPi（RHF4T002 适配器）正确连接。  

b) 将 FT232 工具插入 PC（如果 COM 端口未正确识别，请参考 [Virtual COM Port Drivers](https://www.ftdichip.com/Drivers/VCP.html)）<!-- 源文件链接有误 -->

c) 打开您 PC 的 **设备管理器** 以获取正确的 COM 端口。例如 COM15。根据下图配置
ExtraPuTTY（速度 115200，其他使用默认值），点击 **Open**。由于网关尚未打开，所以终端中没有任何内容。

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/putty_lora.png)

d) 为网关上电。启动日志将显示在 PuTTY 终端中，最后会提示您输入登录名。请注意，获取提示信息需要 1 或 2 分钟。

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/login_putty.png)

e)  请使用 RHF2S001 默认用户名和密码登录。（用户名：**rxhf**，密码：
**risinghf**）。注意，输入密码时没有任何回显

f)  通过以太网线缆将 RHF2S001 与路由器连接

g)  运行 **ifconfig** 检查 IP 地址和 MAC 地址。
![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/Lora_getip.png)

##### IP 在蓝色方框中，MAC 地址在橙色方框中（格式：b8:27:eb:xx:xx:xx）

:::note
获取 IP 后，建议通过 SSH 再次登录 RHF2S001。因为 SSH 更快（以太网比 UART）且稳定。我们通常使用串口工具获取 IP。重新打开 PuTTY，使用 SSH 模块重新连接。

:::

要通过 SSH 登录，您需要在主机名中填入刚刚获取的 IP 地址。使用端口 22，选择 SSH 连接类型。其他选项保持默认即可。然后简单点击 **Open**。

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/putty_lora.png)

#### 步骤 2. 扩展 SD 卡文件系统

默认情况下，镜像仅为 Raspbian 系统启用 2GB，建议扩展以使用整个 SD 卡（8GB 或 16GB）。否则 SD 卡很快就会满。
在 PuTTY 终端中运行以下命令启动 raspi-config，  

```
sudo raspi-config
```

选择"Expand Filesystem"，完成后重启使其生效。在 PuTTY 终端中运行以下命令了解 SD 卡容量和使用情况。

```
df -h
```

详情请参考树莓派 raspi-config 工具说明。点击[这里](https://www.raspberrypi.org/documentation/configuration/raspi-config.md)查看更多。

#### 步骤 3. 使用 RHF2S001 集成 LoRaWAN 服务器

**a) 将网关与内部服务器连接**

在 PuTTY 终端中运行以下命令，并检查状态：

```
sudo systemctl status pktfwd
```

如果 pktfwd 服务未激活，运行以下命令启动它：

```
sudo systemctl enable pktfwd
sudo systemctl restart pktfwd
```

**b) 频率计划**

EU868 频率计划
<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#6ab0de;}
.tg .tg-s6z2{:center}
.tg .tg-baqh{:center;vertical-align:top}
.tg .tg-5hgy{background-color:#D2E4FC;:center}
.tg .tg-j0tj{background-color:#D2E4FC;:center;vertical-align:top}
</style> -->
<table class="tg">
  <tr>
    <th class="tg-s6z2"></th>
    <th class="tg-s6z2">EU868</th>
    <th class="tg-s6z2">上行 DR</th>
  </tr>
  <tr>
    <td class="tg-5hgy">CH0</td>
    <td class="tg-5hgy">867.1</td>
    <td class="tg-5hgy">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-s6z2">CH1</td>
    <td class="tg-s6z2">867.3</td>
    <td class="tg-s6z2">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-5hgy">CH2</td>
    <td class="tg-5hgy">867.5</td>
    <td class="tg-5hgy">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-s6z2">CH3</td>
    <td class="tg-s6z2">867.7</td>
    <td class="tg-s6z2">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-j0tj">CH4</td>
    <td class="tg-j0tj">867.9</td>
    <td class="tg-j0tj">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-baqh">CH5</td>
    <td class="tg-baqh">868.1</td>
    <td class="tg-baqh">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-j0tj">CH6</td>
    <td class="tg-j0tj">868.3</td>
    <td class="tg-j0tj">DR0 ~ DR5</td>
  </tr>
  <tr>
    <td class="tg-baqh">CH7</td>
    <td class="tg-baqh">868.5</td>
    <td class="tg-baqh">DR0 ~ DR5</td>
  </tr>
</table>

US915 HYBRID 频率计划

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#6ab0de;}
.tg .tg-s6z2{:center}
.tg .tg-baqh{:center;vertical-align:top}
.tg .tg-5hgy{background-color:#D2E4FC;:center}
.tg .tg-j0tj{background-color:#D2E4FC;:center;vertical-align:top}
</style> -->
<table class="tg">
  <tr>
    <th class="tg-s6z2"></th>
    <th class="tg-s6z2">US915</th>
    <th class="tg-s6z2">上行链路 DR</th>
  </tr>
  <tr>
    <td class="tg-5hgy">CH0</td>
    <td class="tg-5hgy">902.3</td>
    <td class="tg-5hgy">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-s6z2">CH1</td>
    <td class="tg-s6z2">902.5</td>
    <td class="tg-s6z2">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-5hgy">CH2</td>
    <td class="tg-5hgy">902.7</td>
    <td class="tg-5hgy">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-s6z2">CH3</td>
    <td class="tg-s6z2">902.9</td>
    <td class="tg-s6z2">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-j0tj">CH4</td>
    <td class="tg-j0tj">903.1</td>
    <td class="tg-j0tj">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-baqh">CH5</td>
    <td class="tg-baqh">903.3</td>
    <td class="tg-baqh">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-j0tj">CH6</td>
    <td class="tg-j0tj">903.5</td>
    <td class="tg-j0tj">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-baqh">CH7</td>
    <td class="tg-baqh">903.7</td>
    <td class="tg-baqh">DR0 ~ DR3</td>
  </tr>
  <tr>
    <td class="tg-j0tj">CH64</td>
    <td class="tg-j0tj">903.0</td>
    <td class="tg-j0tj">DR4</td>
  </tr>
</table>

 **c) RHF76-052AM 设置**

 现在让我们配置 Seeeduino LoRaWAN with GPS (RHF76-052AM)。

- 首先，您需要将 Seeeduino LoRaWAN GPS 连接到您的 PC。

- 其次，打开 **[Arduino](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)** IDE，并将下面的代码复制到新的草图中。

```
 void setup()
 {
     Serial1.begin(9600);
     SerialUSB.begin(115200);
 }

 void loop()
 {
     while(Serial1.available())
     {
         SerialUSB.write(Serial1.read());
     }
     while(SerialUSB.available())
     {
         Serial1.write(SerialUSB.read());
     }
 }
```

- 然后选择 Seeeduino Lora GPS 的正确串口，并选择开发板 **Tool->Board->Seeeduino_LoRAWAN**。之后您可以点击上传按钮。如果您在开发板列表中找不到 Seeeduino_LoRAWAN 或不知道如何更新代码，请点击[这里](https://wiki.seeedstudio.com/cn/Seeeduino_LoRAWAN/#install-the-driver-for-windows)获取更多信息。

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/port_lora.png)

- 现在请打开右上角的串口监视器（或者您可以同时按 Ctrl+Shift+M）。选择 **Newline**（此选项将在每个命令的末尾添加"\r\n"），设置波特率为 9600。然后输入下面的命令并按 **send**。

对于 EU868

```
AT+FDEFAULT=RISINGHF
AT+DR=EU868
```

对于 US915

```
 AT+FDEFAULT=RISINGHF
 AT+DR=US915HYBRID
 AT+RXWIN2=923.3,DR8
```

 ![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/At_send.png)

:::caution
当您将 Seeeduino LoRaWAN with GPS 插入计算机后，您可能会发现两个串口。一个是用于 raspeberry 与 putty 的，一个是用于 Seeeduino LoRaWAN GPS 与 SSCOM 的，请选择正确的串口。
:::

**d) 访问内部服务器控制台**

在浏览器中填入 IP 地址（您的网关的 IP），它将跳转到下面的网站。

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/Lora_webin.png)

#### 步骤 4. 使用 Seeeduino LoRaWAN GPS(RHF76-052AM) 访问 LoRaWAN 服务器

有两种模式，在本 wiki 中我们只讨论 ABP 模式（此模式对任何人都是免费的），有关 OTAA 模式的更多信息（此模式是商业的，您需要付费），您可以点击[这里](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/res/%5BRHF-UM01649%5DIoT%20Discovery%20User%20Manual-seeed-v2.1.pdf)。

a) 在上面网站的右上角找到"Application"按钮，点击它，您将看到一个新页面。

b) 现在您需要 Seeeduino LoRaWAN 的 **APPEui**、**DevAddr**、**DevEui** 来添加新应用程序。
为了获取 Seeeduino LoRaWAN 的 ID 信息，您需要在 Arduino IDE 的串口监视器中输入下面的命令。点击 **Send**，然后您将获得 ID。

```
at+id
```

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/at%2Bid.png)

c) 用您刚刚获得的 ID 信息填写空白处。您可以随意填写名称和所有者（这里我们使用 Seeed 和我的昵称：），使用您刚刚获得的 APPEui。然后点击 **Add** 按钮。

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/applicationpage.png)

然后您将跳转到配置页面。在此页面中，我们选择 Personalised Motes。用您的 Seeeduino LoRaWAN GPS 的 ID 信息填写 **DevEUI** 和 **DevAddr**。并将 **NWKSKEY** 和 **APPSKEY** 设置为默认值。您可以参考下面的图片。

- DevEui：通过 AT+ID 命令获得的 Seeeduino LoRaWAN GPS
- DevAddr：通过 AT+ID 命令获得的 Seeeduino LoRaWAN GPS
- NWKSKEY：默认值 2B7E151628AED2A6ABF7158809CF4F3C
- APPSKEY：默认值 2B7E151628AED2A6ABF7158809CF4F3C

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/Add_info.png)

d) 要测试您是否成功添加了设备，您可以使用 Arduino IDE 的串口监视器输入下面的命令。

```
at+mode=lwabp

AT+CMSGHEX="0a 0b 0c 0d 0e"
```

它应该看起来像下面这样。

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/test_send.png)

然后转到网站，点击 **Application->Seeed（您刚刚添加的应用程序名称）->View application data**，您将看到刚刚从 Seeeduino_LoRAWAN 发送的数据。恭喜！任务完成！

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/test.png)

### 连接到 Loriot 服务器

#### 步骤1 Loriot 服务器网关注册

a) 新用户需要先注册账户，点击 **[注册地址](https://cn1.loriot.io/register.html)** <!--源文件链接有误 -->。填写用户名、密码和邮箱地址进行注册，注册后会向您发送一封邮件，请按照邮件中的说明进行激活。

b) 激活成功后，点击 **[这里](https://cn1.loriot.io/home/login.html)** <!-- 源文件链接有误 -->登录。默认层级是"Community Network"，它支持1个网关（RHF2S001）和10个节点。

c) 进入 **Dashboard -> Gateway**，点击 **Add Gateway** 开始添加网关。

d) 选择 **Raspberry Pi 3**

e) 设置如下：

- Radio front-end  ->  RHF2S001 868/915 MHz(SX1257)
- BUS  ->  SPI

f) 填入您的 RHF2S001 的 MAC 地址，格式应为 b8:27:eb:xx:xx:xx。同时输入网关位置信息。

g) 点击"Register Raspberry Pi gateway"完成注册。

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/add_gateway.png)

h) 点击已注册的网关进入配置页面，手动切换"Frquency Plan"，您的计划由 RHF2S001 类型决定，可用计划有 CN470、CN473、CN434、CN780、EU868，选择后请刷新页面以获取确切的频道。在本教程中我们选择 **EU868**。

i) 在 putty 终端中运行命令：

```
cd /home/rxhf/loriot/1.0.2
sudo systemctl stop pktfwd
sudo gwrst
wget https://cn1.loriot.io/home/gwsw/loriot-risinghf-rhf2s008-rhf1257-SPI-0-latest.bin -O loriot-gw.bin
chmod +x loriot-gw.bin
./loriot-gw.bin -f -s cn1.loriot.io
```

j) 完成网关注册。您将看到网关现在已连接。接下来是注册节点。

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/service_done.png)

#### 步骤2. Loriot 服务器连接节点设备

**a) 获取可用的网关频道**

当前网关频道可以从 **Dashboard -> Gateway -> Your Gateway** 获取，您可以看到可用频道如下图所示。

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/radio_list.png)

**b) Seeeduino LoRAWAN GPS(RHF3M076) 配置**

打开 Arduino IDE 的串口监视器，输入以下命令。

```
at+ch
```  

确认您的 Seeeduino_LoRAWAN GPS 的默认频道，您将得到3个频道。如果没有可用频道，您可以通过以下命令更改 Seeeduino_LoRAWAN 的频道。

```
at+ch=0,868.1
at+ch=1,868.3
at+ch=2,868.5
```

然后您可以再次使用 **at+ch** 进行检查。

**c) 将 Seeeduino_LoRAWAN GPS 添加为 ABP 节点**

登录 Loriot 服务器，点击 **Dash Board->Applications->SimpleApp**。点击 **Import ABP**，输入以下项目：

- DevAddr：通过"AT+ID"命令从 Seeeduino_LoRAWAN GPS 获取（注意：Loriot 不支持冒号连接符，需要手动删除）
- FCntUp：设置为1
- FCntDn：设置为1
- NWKSKEY：默认值 2B7E151628AED2A6ABF7158809CF4F3C
- APPSKEY：默认值 2B7E151628AED2A6ABF7158809CF4F3C
- EUI：DEVEUI，通过"AT+ID"命令从 Seeeduino_LoRAWAN GPS 获取

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/add_apb.png)

点击 **Import Device** 按钮完成设备导入。
现在选择 **Dashboard -> Applications -> SampleApp**，您将看到刚刚添加的新 ABP 节点。

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/inite_status_apb.png)

**d) 从 Seeeduino_LoRAWAN 发送数据**

回到 Arduino IDE 的串口监视器，发送命令：

```
AT+CMSGHEX="0a 0b 0c 0d 0e"
```

然后转到 **Dashboard -> Applications -> SampleApp ->Device**，点击节点设备 EUI 或 DevAddr，您将在这里找到刚刚发送的数据。

![](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/final.png)。

## 总结
  本文介绍了 LoRa/LoRaWAN 网关套件以及创建您自己的 LoRaWAN 网关的过程。我们涵盖了硬件连接和软件工具配置的关键步骤，包括连接必要的组件和与 LoRaWAN 服务器通信。这种 DIY 网关方法提供了灵活性和定制化，允许用户根据需要构建强大的 LoRaWAN 网络。

  然而，对于一些用户来说，创建自己的 LoRaWAN 网关可能具有挑战性，他们更喜欢即用型设备。我们理解这种需求，并提供 [SenseCAP M2 多平台 LoRaWAN 室内网关](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html) 的选择。只需 99 美元，您就可以购买这个网关来轻松构建您自己的 LoRaWAN 网络。更进一步，我们还提供专为探索 LoRaWAN 的初学者量身定制的 [SenseCAP LoRaWAN 入门套件](https://www.seeedstudio.com/SenseCAP-LoRaWAN-Starter-Kit-EU868-p-5789.html)。该套件包括一个 SenseCAP M2 多平台 LoRaWAN 室内网关、[XIAO ESP32-S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)、[Grove-Wio-E5](https://www.seeedstudio.com/Grove-LoRa-E5-STM32WLE5JC-p-4867.html) 和两个 Grove 传感器。它专门设计用于促进 LoRaWAN 的学习过程和实验。
  
 <div style={{ display: 'flex', justifyContent: 'center' }}>
  <a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html">
    <img src="https://files.seeedstudio.com/wiki/LoRa/LoRaWAN%20Gateway%20Kit/114992981_45-M2_1.jpg" width={450} height="auto" style={{ marginRight: '20px' }} />
  </a>
  <a href="https://www.seeedstudio.com/SenseCAP-LoRaWAN-Starter-Kit-EU868-p-5789.html">
    <img src="https://files.seeedstudio.com/wiki/LoRa/LoRaWAN%20Gateway%20Kit/1-114993166-sensecap-lorawan-starter-kit-eu-45font.jpg"  width={450} height="auto" />
  </a>
</div>

## 常见问题

**Q1: 如何找到出厂固件？**

**A1:** 当固件损坏或发生严重错误时，您可以在[这里](https://drive.google.com/open?id=1MVLQlxjhir_mWvKhvuqBsr1a0ievZRDC)下载固件。它仅适用于 raspberry 3b，不支持 raspberry 3b +。

**Q2: 如何构建最新镜像？**

**A2:** 它在 raspberry 3b 和 3b+ 上都能很好地工作。我们在 2018-11-13 raspbian 镜像下进行了测试。

- 步骤 1. 下载[最新的 raspberry 镜像](https://www.raspberrypi.org/downloads/raspbian/)

- 步骤 2. 通过运行 `wget https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/res/libssl1.0.0.deb` 将 libssl1.0.0.deb 下载到您的 Raspberry Pi，并在终端中运行 `sudo dpkg -i ./libssl1.0.0.deb` 来安装它。

- 步骤 3. 在终端中运行 `sudo raspi-config`，选择 _Interfacing Options_ -- _P4 SPI_ -- _YES_ 来启用 SPI，以便 Raspberry Pi 可以与 RHF0M301 通信。

- 步骤 4. 在终端中运行以下命令，下载并启动 loriot 网关。

```
wget https://cn1.loriot.io/home/gwsw/loriot-pi-3-rhf1257-SPI-0-latest.bin -O loriot-gw
chmod +x loriot-gw
./loriot-gw -f
```

## 资源

- **[PDF]** [下载 Wiki PDF](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/res/LoRa_LoRaWan_Gateway_Kit.pdf)
- **[用户手册]** [用户手册](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/res/%5BRHF-UM01649%5DIoT%20Discovery%20User%20Manual%20-%20v3.2.pdf)。<!-- 源文件链接有误 -->
- **[更多阅读]** <a href="/cn/Seeeduino_LoRAWAN" ><span><font size={"3"}> Seeeduino LoRaWAN 的 Wiki </font></span></a>
- **[更多阅读]** [RisingHF 网站](http://www.risinghf.com/product/risinghf-iot-dicovery/?lang=en)
- **[Azure IoT Edge LoRaWAN]** [Azure IoT Edge LoRaWAN](https://github.com/Azure/iotedge-lorawan-starterkit/)

## 项目

**LoRa IoTea**：应用于茶园的自动信息收集系统。它是智能农业信息收集的一部分。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

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