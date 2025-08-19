---
description: 使用 SenseCAP 数据记录器构建 LoRaWAN 传感器
title: 使用 SenseCAP 数据记录器构建 LoRaWAN 传感器
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Builder_build_LoRaWAN_Sensors
last_update:
  date: 11/20/2023
  author: Matthew
---

## 概述

您可以使用 Grove 传感器构建一个定制的、经济高效的工业级 LoRaWAN 传感器，通过 SenseCAP 数据记录器连接到 SenseCAP 云平台，实现长距离无线数据传输。

<div align="center"><img width={700} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-e22011019-sensecap-s2110-lorawan-sensor-kit-first_1_.jpg"/></div>

## 准备工作

### 硬件准备

本教程需要以下产品：

:::tip
在本教程中，使用的是 Grove - 氧气传感器 (MIX8410)。有关更多可用的 Grove 模块以及定制您自己的 Grove 模块的方法，您可以查看[这里](https://记得加链接)了解更多信息。
:::

<div class="table-center">
  <table align="center">
    <tr>
        <th>SenseCAP S2110 传感器构建器</th>
        <th>Grove - 氧气传感器 (MIX8410)</th>
        <th>SenseCAP S2100 数据记录器/DTU</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP_S2110_builder/SenseCAP-S2110-Sensor-Builder-105.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/101990680_preview-34.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/f/i/first_page_all-22.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Oxygen-Sensor-MIX8410-p-4697.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 软件准备

根据您的操作系统，在手机上下载并安装 **SenseCAP Mate App**。

- [Android](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate&hl=en&gl=US)
- [iOS](https://apps.apple.com/gb/app/sensecap-mate/id1619944834)

如果这是您第一次使用 SenseCAP 平台，请先点击**注册**按钮注册账户，然后使用新创建的账户登录

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/2.jpg"/></div>

:::note
带有*的字段为必填字段，不带*的字段可以选择性填写。
:::

### LoRaWAN 网络覆盖检查

我们在这里使用 LoRaWAN 网络。因此，需要检查您是否在 Helium 或 TTN（The Things Network）的 LoRaWAN 网络覆盖范围内。

- [查看 Helium 网络地图](https://explorer.helium.com/)
- [查看 TTN 网络地图](https://www.thethingsnetwork.org/map)

:::note
如果您没有网络覆盖，您可以使用任何由 Helium/TTN 支持的网关将传感器数据发送到云端。
- [SenseCAP M1 LoRaWAN 室内网关](https://www.seeedstudio.com/SenseCAP-M1-LoRaWAN-Indoor-Gateway-US915-p-5023.html) 或 [SenseCAP M2 LoRaWAN 室内网关](https://www.seeedstudio.com/SenseCAP-M2-Data-Only-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5342.html) 或任何其他支持 Helium 的网关用于 Helium。
- [SenseCAP 户外 LoRaWAN 网关](https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html) 或其他支持 TTN 的网关用于 TTN
:::

## 开始使用

我们现在可以开始了。

### 1. 将 Grove 传感器连接到 SenseCAP S2110 传感器构建器

- **步骤 1：** 拧下 SenseCAP S2110 传感器构建器盖子上的四颗螺丝并打开盖子

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/84.jpg"/></div>

- **步骤 2：** 取下螺纹盖

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/78.jpg"/></div>

- **步骤 3：** 将随附的电缆穿过盖子进入 SenseCAP S2110 传感器构建器

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/79.jpg"/></div>

- **步骤 4：** 按如下方式将电缆的导线连接到螺丝端子

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/86.jpg"/></div>

- **步骤 5：** 将 Grove 传感器放置在 SenseCAP S2110 传感器构建器内并拧紧螺丝。

:::note
带有 2 个孔的 Grove（例如：Grove - 光传感器 v1.2）
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/80.jpg"/></div>
带有 3 个孔的 Grove（Grove 温度和气压传感器 (BMP280)）
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/81.jpg"/></div>
:::

- **步骤 6：** 将 Grove 电缆连接到 Grove 传感器和 SenseCAP S2110 传感器构建器板上的 Grove 连接器

- **步骤 7：** 关闭盖子并重新拧紧螺丝

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/82.jpg"/></div>

- **步骤 8：** 拧紧螺纹盖并固定到位

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/83.jpg"/></div>

### 2. 将 SenseCAP S2110 传感器构建器连接到 SenseCAP 数据记录器

- **步骤 1：** 拧下数据记录器上的三颗螺丝

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/70.jpg"/></div>

- **步骤 2：** 取下底盖并取出内部 PCBA 直到螺丝端子可以接触。您不需要取出整个板子

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

- **步骤 3：** 通过逆时针方向拧下来取下螺纹盖

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/72.jpg"/></div>

- **步骤 4：** 将随附的电缆穿过螺纹盖和底盖

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/73.jpg"/></div>

- **步骤 5：** 按如下方式将电缆的导线连接到螺丝端子

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/74.png"/></div>

:::note
由于电缆内有 5 根导线而我们只使用 4 根，最好将多余的导线用胶带包起来以避免意外接触螺丝端子
:::

- **步骤 6：** 将硬件单元放回外壳内，从底盖关闭并重新拧紧螺丝

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/75.jpg"/></div>

- **步骤 7：** 拧紧螺纹盖并将电缆固定到位

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/76.jpg"/></div>

一旦 SenseCAP S2110 传感器构建器和数据记录器的所有连接都完成，它应该如下所示：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/93.jpg"/></div>

### 3. 通过 SenseCAP Mate 应用程序连接到 SenseCAP 云

- **步骤 1：** 打开 SenseCAP Mate 应用程序，通过输入您注册的**邮箱和密码**并点击**登录**按钮来登录您的 SenseCAP 账户

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/1.jpg"/></div>

:::note
保持**服务器位置**为**全球**，这是默认设置
:::

#### a. 更新数据记录器固件

- **步骤：** 在**配置**页面下，选择 **S2100 数据记录器**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/4.jpg"/></div>

- **步骤 2：** 按住 SenseCAP 数据记录器上的配置按钮 3 秒钟以进入蓝牙配对模式

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/96.jpg"/></div>

如果进入蓝牙配对模式，绿色 LED 将开始闪烁

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/99.gif"/></div>

- **步骤 3：** 点击**更新**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/5.jpg"/></div>

- **步骤 4：** 现在它会提示您打开位置服务。点击**前往**以打开手机上的位置服务页面

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/6.jpg"/></div>

- **步骤 5：** 打开位置服务。对于 Android，它将如下所示

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/9.jpg"/></div>

- **步骤 6：** 返回 SenseCAP Mate 应用程序并点击**扫描**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/10.jpg"/></div>

现在它将开始扫描附近的 SenseCAP 数据记录器

- **步骤 7：** 点击发现的设备

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/11.jpg"/></div>

- **步骤 8：** 如果有可用更新，点击**获取更新**以更新到最新版本。更新到最新版本后，或者如果显示**设备已运行最新固件**，返回到之前的设置页面

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12.jpg"/></div>

#### b. 配置数据记录器和 SenseCAP S2110 传感器构建器通信设置

- **步骤 1：** 再次在数据记录器上进入**蓝牙配对模式**并点击**设置**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/13.jpg"/></div>

- **步骤 2：** 点击找到的设备

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/14.jpg"/></div>

它将打开一个页面，在 **General** 下显示有用的信息

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/15.jpg"/></div>

- **步骤 3：** 转到 **Setting** 页面，在 **Basic Setting** 下，选择平台为 **SenseCAP for the Things Network** 或 **SenseCAP for Helium**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/16.jpg"/></div>

**注意：** 您也可以选择其他选项，但在这种情况下，您无法使用 SenseCAP 平台

- **步骤 4：** 选择 **Frequency Plan**、**Uplink interval** 和 **Packet Policy**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/17.jpg"/></div>

:::note
默认的 Packet Policy 是 **2C+1N**，下表对此和其他选项进行了更多说明

| 参数 | 描述 |
|---|---|
| 2C+1N (默认) | 2C+1N（2个确认数据包和1个非确认数据包）是最佳策略，该模式可以最大限度地减少数据包丢失率，但是设备在 TTN 中会消耗最多的数据包，或在 Helium 网络中消耗最多的数据积分。 |
| 1C | 1C（1个确认）设备在从服务器获得1个接收确认数据包后将进入睡眠状态。 |
| 1N | 1N（1个非确认）设备只发送数据包然后开始睡眠，无论服务器是否接收到数据。 |

:::


- **步骤 5：** 在 Sensor Setting 下，按如下方式填写

| 参数 | 描述 |
|---|:---:|
| Protocol | RS485 Modbus RTU |
| Baud Rate | 与传感器通信的波特率。在此选择 **9600**。 |
| Modbus Address | 传感器的从机地址。范围是1到247。在此输入 **1**。 |
| Power Type | 周期性供电：在数据采集前给传感器供电，数据采集后断电。此模式降低功耗并延长电池寿命。常开：当传感器需要持续供电时选择此模式。通常使用外部12V直流电源。如果仅由电池供电，可能无法长时间工作。在此选择 **periodic power**。 |
| Power Voltage | 选择传感器的供电电压。支持3V/5V/12V。在此选择 **5V**。 |
| Sensor Warm-up Time | 预热时间表示传感器在施加电压供应后达到最高精度或性能水平所需的时间。这因传感器而异。Grove **Oxygen Sensor (MIX8410)** 和 **CO2 & Temperature & Humidity Sensor(SCD41)** 需要 **5s** 的预热时间，这意味着您需要在框中输入 **5000**。目前 SenseCAP S2110 Sensor Builder 支持的其他 Grove 传感器只需要 **0ms** 预热时间。 |
| Response Timeout | 数据记录器向传感器发起数据读取请求后，等待响应的超时时间。如果超过此时间，将重新发送命令。在此输入 **1**，表示 **100ms**。 |
| Startup Time | 传感器从上电到能够与 Modbus 通信的时间长度。在此输入 **20**，表示 **2000ms=2s** |

填写完成的设置页面如下所示

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/18.jpg"/></div>

- **步骤 6：** 对于 **Measurement Number**，根据具体传感器参考下表。

<table>
<thead>
  <tr>
    <th>Grove 传感器名称</th>
    <th>测量数量</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Grove - Light Sensor v1.2</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Grove - Flame Sensor</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Grove - Oxygen Sensor (MIX8410)</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Grove - CO2 &amp; Temperature &amp; Humidity Sensor (SCD41)</td>
    <td>3</td>
  </tr>
  <tr>
    <td>Grove - Sunlight sensor (SI1151)</td>
    <td>3</td>
  </tr>
  <tr>
    <td>Grove Temperature and Barometer Sensor (BMP280)</td>
    <td>3</td>
  </tr>
</tbody>
</table>

:::note
SenseCAP Data Logger 在 RS485 模式下可以收集0到10个测量值。
:::

- **步骤 7：** 指定 **Measurement Number** 后，您需要填写 **Measurement Settings**。这里我们将选择 **Grove - Light Sensor v1.2**。对于此传感器，我们只需要 **一个测量值**，即光照水平。为 **Measurement Number** 选择 **1** 并点击 **Measurement Setting**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/19.jpg"/></div>

- **步骤 8：** 在 **Measurement Setting** 下点击 **Measurement1**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/20.jpg"/></div>

如果您使用 **Grove - CO2 & Temperature & Humidity Sensor (SCD41)**，我们需要 **三个测量值**，即 **温度、湿度和CO2水平**。为 **Measurement Number** 选择 **3** 并点击 **Measurement Setting**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/23.jpg"/></div>

此外，这里您需要分别配置3个测量值

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/24.jpg"/></div>

- **步骤 9：** 对于 **Register Address**，参考下表并输入 **寄存器地址** 的 **十进制值**

<table>
<thead>
  <tr>
    <th>Grove 传感器名称</th>
    <th>寄存器名称</th>
    <th>寄存器地址<br />（十六进制）</th>
    <th>寄存器地址<br />（十进制）</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Grove - Oxygen Sensor (MIX8410)</td>
    <td>Oxygen</td>
    <td>0x000E</td>
    <td>14</td>
  </tr>
  <tr>
    <td>Atmospheric Pressure</td>
    <td>0x0018</td>
    <td>24</td>
  </tr>
  <tr>
    <td>Height</td>
    <td>0x001A</td>
    <td>26</td>
  </tr>
  <tr>
     <td rowspan="4">Grove - Temperature Humidity Pressure Gas Sensor(BME680)</td>
     <td>Temperature</td>
     <td>0x001C</td>
     <td>28</td>
  </tr>
  <tr>
    <td>Atmospheric Pressure</td>
    <td>0x001E</td>
    <td>30</td>
  </tr>
  <tr>
    <td>Humidity</td>
    <td>0x0020</td>
    <td>32</td>
  </tr>
  <tr>
    <td>Air Quality(VOC)</td>
    <td>0x0022</td>
    <td>34</td>
  </tr>
  <tr>
    <td rowspan="4">Grove - Gas Sensor V2(Multichannel)</td>
    <td>N02</td>
    <td>0x0024</td>
    <td>36</td>
  </tr>
  <tr>
    <td>C2H50H</td>
    <td>0x0026</td>
    <td>38</td>
  </tr>
  <tr>
    <td>VOC</td>
    <td>0x0028</td>
    <td>40</td>
  </tr>
  <tr>
    <td>CO</td>
    <td>0x002A</td>
    <td>42</td>
  </tr>
  <tr>
    <td>Grove - UV Sensor</td>
    <td>UV Intensity</td>
    <td>0x002C</td>
    <td>44</td>
  </tr>
  <tr>
    <td>Grove - Turbidity Sensor Meter V1.0</td>
    <td>Turbidity</td>
    <td>0x002E</td>
    <td>46</td>
  </tr>
  <tr>
    <td>Grove - TDS Sensor</td>
    <td>TDS</td>
    <td>0x0030</td>
    <td>48</td>
  </tr>
  <tr>
    <td>Grove - Ultrasonic Ranger</td>
    <td>Distance</td>
    <td>0x0032</td>
    <td>50</td>
  </tr>
</tbody>
</table>

**Grove - Light Sensor v1.2** 的填写寄存器地址如下所示

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/21.jpg"/></div>

**Grove - CO2 & Temperature & Humidity Sensor (SCD41)** 的填写寄存器地址如下所示

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/26.jpg"/></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/28.jpg"/></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/29.jpg"/></div>

- **步骤 10：** 其余设置对所有 Grove 传感器都是通用的，按如下方式填写

| 功能码 | Modbus 功能码。这里选择 **03** |
|---|---|
| 数据类型 | 数据类型决定从传感器读取的寄存器数量以及数据应如何解析值。这里选择 **Signed 32bit integer, 0xABCD**。 |
| 精度 | 值的精度。您可以选择测量值的小数位数。如果选择 1，则保留一位小数。这里选择 **2, #.##**。 |
| Y= Ax + B | "Y"：这是数据记录器将上传的值。"x"：这是原始当前值。工厂 A：可以按 "x" 的倍数放大或缩小的自定义值。工厂 B：增加或减少 "x" 值的自定义值。通过设置 A 和 B 的值，您可以计算出所需的值。如果只需要上传原始值，请设置 A=1 和 B=0。这里我们设置 **工厂 A 为 0.001，工厂 B 为 0**。 |
| 写入策略 | 此功能仅对某些特殊传感器启用，通常默认禁用。读取寄存器值后，可以向传感器发出特殊指令，例如读取寄存器 0 后清空寄存器的指令。None：默认关闭。After Read：读取寄存器后向传感器发送 RS485 命令。On New Data：每 24 小时向传感器发送一次 RS485 命令。我们不需要写入策略，所以这里选择 **None** |

填写完成的 **测量设置** 页面如下所示

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/30.jpg"/></div>

- **步骤 11：** 点击 **确认** 保存更改，它将返回到 **设置** 页面

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/32.jpg"/></div>

- **步骤 12：** 点击 **发送** 将更改发送到数据记录器

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/33.jpg"/></div>

#### c. 本地测试和查看传感器数据

现在我们需要测试 SenseCAP S2110 传感器构建器是否正确地将传感器数据发送到数据记录器。

- **步骤 1：** 转到常规并点击 **测量**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/34.jpg"/></div>

现在它将显示传感器值，您将看到 SenseCAP S2110 传感器构建器上的 Seeed Studio XIAO RP2040 的 LED 灯亮起。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/101.gif"/></div>

下面是 **Grove - Oxygen Sensor (MIX8410)** 的结果。这表示空气中的氧气浓度为 21.36%。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/35.jpg"/></div>

下面是 **Grove Temperature and Barometer Sensor (BMP280)** 的结果。这表示气压温度为 30.55°C，大气压力为 101401Pa，高度为 53.08m。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/36.jpg"/></div>

#### d. 将新创建的传感器添加到 SenseCAP 平台

- **步骤 1：** 返回应用主页，数据记录器的红色 LED 将开始闪烁几秒钟，然后绿色 LED 短暂闪烁，表示 LoRaWAN 连接成功并且数据已发送。或者，您可以按一次数据记录器上的按钮来强制发送数据。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/100.gif"/></div>

您还将看到 SenseCAP S2110 传感器构建器上的 Seeed Studio XIAO RP2040 的 LED 灯亮起

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/101.gif"/></div>

现在我们需要将此传感器添加到 SenseCAP 平台，以便在云端查看数据

- **步骤 2：** 转到 **设备** 页面，点击 **+** 符号并点击 **添加设备**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/39.jpg"/></div>

- **步骤 3：** 扫描位于数据记录器上的二维码

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/40.jpg"/></div>

- **步骤 4：** 根据连接的 Grove 传感器输入 **设备名称** 并点击 **下一步**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/41.jpg"/></div>

- **步骤 5：** 输入 **设备位置** 并点击 **确认**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/42.jpg"/></div>

### 4. 在 SenseCAP Mate 应用上可视化传感器数据

现在您将在 SenseCAP Mate 应用上看到数据记录器在线

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/43.jpg"/></div>

点击它以显示传感器值

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/45.jpg"/></div>

下面是 **Grove Temperature and Barometer Sensor (BMP280)** 的结果。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/44.jpg"/></div>

### 5. （可选）在 SenseCAP 仪表板上可视化传感器数据

您还可以使用 SenseCAP Web 仪表板来可视化传感器数据。

- **步骤 1：** 访问 sensecap.seeed.cc 并登录您之前在 SenseCAP Mate App 中创建的 SenseCAP 账户。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/88.png"/></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/87.png"/></div>

- **步骤 2：** 点击 **Sensor Node** 并选择我们之前在 SenseCAP Mate App 中创建的传感器。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/89.png"/></div>

- **步骤 3：** 点击 **Data** 选项卡，您将看到来自连接的 Grove 传感器的所有传感器数据。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/90.jpg"/></div>

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