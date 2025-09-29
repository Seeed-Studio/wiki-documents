---
description: T1000-E 用户指南的 Arduino 示例
title: Arduino 入门指南
keywords:
- Tracker
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/tracker-t1000-e-for-meshtastic.webp
slug: /cn/t1000_e_arduino_examples
sidebar_position: 3
last_update:
  date: 03/24/2025
  author: Frederik Funk
---


以下 Arduino 示例可供使用：

<div class="table-center">
  <table align="center">
    <tr>
      <th>示例</th>
      <th>描述</th>
    </tr>
    <tr>
      <td>Blinky</td>
      <td>LED 闪烁 - 控制 GPIO 引脚使 LED 闪烁，用于功能测试和状态指示。</td>
    </tr>
    <tr>
      <td>Button</td>
      <td>打印按钮事件 - 检测按钮状态变化并打印事件信息，用于用户交互。</td>
    </tr>
    <tr>
      <td>Buzzer</td>
      <td>循环播放声音 - 驱动蜂鸣器产生声音，用于提醒或报警。</td>
    </tr>
    <tr>
      <td>Sensor</td>
      <td>打印温度/光照/电池值 - 读取并打印温度、光照强度和电池电压数据。</td>
    </tr>
    <tr>
      <td>Accelerometer</td>
      <td>打印 ax/ay/az/事件值 - 收集加速度数据，用于运动检测和姿态识别。</td>
    </tr>
    <tr>
      <td>GNSS</td>
      <td>打印纬度/经度值 - 获取并打印基于 GNSS 的位置数据。</td>
    </tr>
    <tr>
      <td>LoRaWAN</td>
      <td>通过 OTAA 加入，向 LNS 发送测试数据 - 连接到 LoRaWAN 并发送测试数据。</td>
    </tr>
    <tr>
      <td>LoRaWAN Sensor</td>
      <td>通过 OTAA 加入，读取温度/光照/电池/ax/ay/az，向 LNS 发送数据 - 通过 LoRaWAN 收集并传输各种传感器数据。</td>
    </tr>
    <tr>
      <td>LoRaWAN GNSS</td>
      <td>通过 OTAA 加入，扫描纬度/经度，向 LNS 发送数据 - 实时捕获并传输 GNSS 位置数据。</td>
    </tr>
    <tr>
      <td>LoRaWAN WiFi</td>
      <td>通过 OTAA 加入，扫描 WiFi MAC，向 LNS 发送数据 - 扫描 WiFi MAC 地址并传输数据用于定位。</td>
    </tr>
    <tr>
      <td>LoRaWAN Beacon</td>
      <td>通过 OTAA 加入，扫描 Beacon MAC，向 LNS 发送数据 - 扫描并传输 Beacon MAC 数据用于跟踪和识别。</td>
    </tr>
  </table>
</div>

## 准备工作

### 硬件准备

- SenseCAP T1000-E x 1
- USB 线缆 x 1
- 计算机 x 1

### 软件准备

在开始开发之前，需要以下软件工具。

查看这里了解如何[开始使用 Arduino](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。

:::tip
版本需要新于 v1.6.12。
:::

## 开始使用

### 先决条件

1. 添加 URL

导航到 `文件` -> `首选项`，并将以下 URL 添加到 `附加开发板管理器网址`：

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/add-url.png" alt="pir" width={800} height="auto" /></p>

2. 安装开发板

导航到 `Boards Manager`，搜索 `seeed nrf52`，选择最新版本并安装。

### 构建示例

1. 选择开发板和端口

**开发板**: Seeed Tracker T1000 E <br/>
**端口**: 您的设备端口

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/board-select.png" alt="pir" width={800} height="auto" /></p>

2. 构建示例

导航到 `File` -> `Examples` -> `Seeed Tracker T1000 E LoRaWAN`，然后打开您选择的示例（在这种情况下是加速度计示例）：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/example_select.png" alt="pir" width={800} height="auto" /></p>

### 上传到目标设备

由于 T1000-E 引导加载程序 _仅_ 支持通过 `.uf2` 拖放方式刷写，因此无法直接通过 Arduino IDE 上传示例。
请按照以下步骤操作：

1. 从 Arduino IDE 导出编译后的二进制文件。您将在与 `.ino` 草图相同的文件夹中找到它。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/export_binary.png" alt="pir" width={800} height="auto" /></p>

2. 将 `.hex` 文件转换为 `.uf2` 文件。这是使用 Python 脚本完成的，可以从[这里](https://github.com/Seeed-Studio/Adafruit_nRF52_Arduino/blob/1.1.9/tools/uf2conv/uf2conv.py)下载。下载并从终端使用以下参数运行脚本：  
`python uf2conv.py -f 0xADA52840 -c -o test.uf2 <your_hex_file>.hex`

3. 通过按住设备按钮将设备置于 DFU 模式，然后快速连接充电线两次，绿色 LED 将常亮。您现在应该能找到 T1000-E 作为大容量存储设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={600} height="auto" /></p>

4. 将 `.uf2` 文件复制到大容量存储设备。复制完成后，设备会自动开始运行它。

## 读取串行消息

使用 `Serial.println` 和 `Serial.printf` 从设备打印出的消息可以使用 Arduino IDE 的集成终端读取。
确保您已启用并选择了 USB-CDC：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/usb_cdc.png" alt="pir" width={800} height="auto" /></p>

然后使用 `Tools -> Serial Monitor` 打开串行监视器并开始观察消息：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/serial_monitor.png" alt="pir" width={800} height="auto" /></p>

## LoRaWAN 示例

包含 LoRaWAN 消息传递的示例需要进一步的两个步骤。

### 设置 LNS

您需要一个 LoRaWAN 网络服务器（LNS），您的跟踪器可以连接到该服务器。在此示例中，我们使用 The Things Network（TTN），但任何其他服务器都应该可以正常工作。
为了与 TTN 配合使用，您需要拥有 The Things Industries 或 The Things Network 的账户，并能够访问网关（如果没有可用的公共网关，则需要您自己的网关）。

#### 步骤 1：创建应用程序

导航到应用程序页面并点击"+ Create application"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

输入应用程序 ID 并点击"Create application"保存您的更改。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>

#### 步骤 2：注册设备

点击"+ Register end device"。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device.png" alt="pir" width={800} height="auto" /></p>

设置以下参数：

**Frequency Plan**: 为目标区域选择适当的频率计划  
**LoRaWAN version**: LoRaWAN Specification 1.0.4  
**Regional Parameters version**: V1.0.3 REV A

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device1.png" alt="pir" width={800} height="auto" /></p>

现在，为您的设备创建凭据。生成新的凭据集或输入现有的凭据。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device5.png" alt="pir" width={800} height="auto" /></p>

### 调整示例代码

为了使其工作，请在示例代码中设置上一步的凭据。还要指定区域，例如 `SMTC_MODEM_REGION_AS_923_GRP1`、`SMTC_MODEM_REGION_EU_868` 或 `SMTC_MODEM_REGION_US_915`。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/lorawan_credentials.png" alt="pir" width={800} height="auto" /></p>

如果您的区域有占空比限制，请确保在重置处理程序中启用限制：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/duty_cycle_limitation.png" alt="pir" width={800} height="auto" /></p>

### 运行示例代码

以与其他示例相同的方式编译和刷写 LoRaWAN 示例（创建 `.uf2` 文件并通过拖放方式刷写）。
之后，您应该在 TTN 界面中看到传入的消息：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/ttn_live_data.png" alt="pir" width={800} height="auto" /></p>

## ✨ 贡献者项目

- 本项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)支持。
- 特别感谢 [Frederik](https://github.com/orgs/Seeed-Studio/projects/6/views/1?filterQuery=Support+Arduino+to+our+new+open-source+LoRaWAN+device%2C+the+new+T1000-E+for+LoRaWAN&pane=issue&itemId=94352679&issue=Seeed-Studio%7Cwiki-documents%7C2144) 的专注努力。您的工作将被[展示](https://wiki.seeedstudio.com/contributors/)。

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
