---
description: 使用 reCamera 与 Meshtastic 构建远距离安防系统——通过 LoRa 网格网络将 AI 检测告警无线推送至 Home Assistant
title: 使用 reCamera 与 Meshtastic 构建远距离安防系统
keywords:
  - Edge AI
  - reCamera
  - Meshtastic
  - LoRa
  - Home Assistant
image: https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/demo_show.gif
slug: /recamera_meshtastic_ha_security_system
sku: 100029708
sidebar_position: 13
last_update:
  date: 06/29/2026
  author: Sizhao zhou
createdAt: '2026-06-29'
updatedAt: '2026-06-29'
url: https://wiki.seeedstudio.com/cn/recamera_meshtastic_ha_security_system/
---

# 使用 reCamera 与 Meshtastic 构建远距离安防系统

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/demo_show.gif" /></div>

## 1. 简介

在没有 WiFi 和蜂窝网络覆盖的野外、大型农场或偏远山区，如何实现智能化的安防监控？

本教程提供了一种极具极客精神的"无网安防"解决方案：利用 **reCamera PoE** 强大的边缘 AI 算力进行实时人体检测，一旦发现目标，立刻通过底层硬件引脚触发 **XIAO ESP32S3 + Wio-SX1262 模块（发射端）**。告警信号将化作低频电波，跨越数公里的复杂地形，由室内的 **Wio-SX1262 接收端** 捕获，并无缝转译为 MQTT 消息推送至您的本地 **Home Assistant (HA)** 系统。

全链路无需任何云端服务器，真正做到隐私、低功耗与超远距离的完美结合。


### 系统通信架构

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/system_framework.png" /></div>

整体数据流向如下：

* reCamera PoE 运行 YOLO 人体检测模型，检测到人体后通过 GPIO 引脚输出低电平信号
* XIAO ESP32S3（发射端）通过 D2 引脚捕获低电平触发，通过 Wio-SX1262 发送 LoRa 射频报文
* XIAO ESP32S3（接收端）通过 Wio-SX1262 接收 LoRa 报文，通过 WiFi 以 MQTT 协议推送至 Home Assistant
* Home Assistant 接收 MQTT 消息，触发自动化告警（通知、联动其他智能设备等）

---

## 2. 硬件准备

<table align="center">
 <tr>
  <th>XIAO ESP32S3 & Wio-SX1262 Kit</th>
  <th>reCamera PoE</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 </font></span></strong>
   </a>
  </div></td>
  <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 </font></span></strong>
   </a>
  </div></td>
 </tr>
</table>

- XIAO ESP32S3 & Wio-SX1262 Kit：2 套（一套作 LoRa 发射端，一套作 LoRa 接收端）
- 本地智能主机： 1 台，用于运行 Home Assistant 与 MQTT Broker（任意能跑 HA 的小主机即可）
- 杜邦延长线： 若干，用于 reCamera GPIO 与 XIAO ESP32S3 之间的物理信号飞线

---

## 3. Meshtastic 组网配置

为了实现两块 XIAO ESP32S3 之间的远距离 LoRa 通信，我们需要为它们刷入 **Meshtastic** 开源固件。


### 3.1 固件烧录与基础射频同步（接收端与发射端均需执行）

**步骤 1**：将 XIAO ESP32S3 通过 USB-C 数据线连接至电脑。

:::note 注意
烧录前请让 ESP32 进入 Bootloader 下载模式。操作方法：按住 BOOT 键不放，按一下 RESET 键，松开 BOOT 键。
:::

**步骤 2**：访问 [Meshtastic Web Flasher](https://flasher.meshtastic.org/)，设备类型选择 `Seeed Xiao ESP32-S3`，勾选 **Full Erase（完全擦除闪存）**，点击 **Flash** 写入固件。

**步骤 3**：固件刷写完成后，访问 [Meshtastic Web 客户端](https://client.meshtastic.org/)，点击 **Add Connection** 添加新设备，选择 **Serial（串口）** 连接方式，选择对应的串口设备后点击 **Connect**。

**步骤 4**：进入 **Settings → Radio Config → LoRa**，将 `Region` 调整为您所在的合法频段（如 `CN` 或 `US`），将 `Modem Preset` 设置为 **`Short Turbo`** 以获得更快的响应速率。

### 3.2 接收端配置（Receiver — 放在室内连接 HA）

接收端负责接收 LoRa 报文并通过 WiFi 以 MQTT 推送至 Home Assistant。

**步骤 1 — 生成并保存密钥**：在 **Channels** 选项卡中，为 Primary 频道生成一个 128-bit 的 `Pre-Shared Key`（共享密钥）。

:::note 注意
请务必复制并离线保存此密钥，稍后需要填入发射端，两端密钥必须完全一致。
:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/reCamera_Meshtastic_password.png" /></div>

**步骤 2 — 连接局域网**：在 **Device Config → Network** 中开启 WiFi，填入您家中的 WiFi SSID 与密码。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/xiao_connect_wifi.png" /></div>

**步骤 3 — 开启 MQTT 转发**：在 **Module Config → MQTT** 中勾选 `Enable MQTT Client`，开启 `JSON Enabled`，在 `Address` 中准确填入您 HA 主机的本地 IP 地址（例如 `192.168.4.7`）。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/xiao_mqtt_config.png" /></div>

**步骤 4**：全部配置完毕后，点击右上角 **Save** 保存，等待设备重启。

### 3.3 发射端配置（Transmitter — 放在室外连接 reCamera）

发射端负责监听 GPIO 引脚电平变化，检测到低电平后通过 LoRa 发送告警报文。

:::note 注意
发射端**不要**开启 WiFi 和 MQTT，它只需专注于接收 GPIO 触发并发送 LoRa 射频信号。
:::

**步骤 1**：断开接收端 ESP32，换上作为发射端的 ESP32，在 Meshtastic Web 客户端中直接点击 **Connect** 连接。

**步骤 2 — 同步射频参数**：进入 **Radio Config → LoRa**，确保与接收端保持一致（Region 和 Modem Preset 完全一致），无需开启 MQTT。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/xiao_shut_lora_config.png" /></div>

**步骤 3 — 填入共享密钥**：在 **Channels** 选项卡中，将接收端生成的 `Pre-Shared Key` 完整粘贴进去。


**步骤 4 — 配置 GPIO 硬件触发**：在 **Module Config → Detection Sensor** 中激活模块，并按如下参数配置：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/xiao_shut_detect_config.png" /></div>

| 参数 | 设定值 | 说明 |
| :--- | :--- | :--- |
| Minimum Broadcast Seconds | 15 | 最小广播间隔，防止频繁触发导致信道拥堵 |
| Friendly Name | Human | 自定义告警名称，将作为 MQTT 消息标识 |
| Monitor Pin | 3 | 对应 XIAO ESP32S3 的 D2 引脚 |
| Detection Triggered Type | LOGIC_LOW | 低电平触发（reCamera 检测到人体时输出低电平） |

**步骤 5**：点击右上角 **Save** 保存，等待设备重启。

---


## 4. reCamera 端点配置与物理接线

### 4.1 释放系统资源

默认情况下，reCamera 的 Node-RED 与 SSCMA 后台服务会占用摄像头资源。通过 SSH 登录 reCamera（默认 IP 为 `192.168.42.1`，用户名密码均为 `recamera`），在终端执行以下命令停止后台服务：

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```

### 4.2 启动视频流转发脚本

:::note 注意
运行脚本的主机需与 reCamera PoE **处于同一局域网**。reCamera PoE 版本只需将设备接入同一路由器或交换机即可获得 IP。
:::

在您用于接收视频流的监控主机上，运行 Python 脚本以接收 reCamera 推送的视频帧：

```bash
python udp_client.py
```

### 4.3 启动人体检测程序

在 reCamera 终端中执行以下命令，启动板载 YOLO 人体检测模型。第一个参数为模型文件路径（可直接使用 reCamera 自带的模型），第二个参数为运行视频流转发脚本的主机 IP 地址：

```bash
sudo ./model_detector ./Models/model.cvimodel 192.168.4.7
```

### 4.4 连接 ESP32 发射端到 reCamera

完成上述软件配置后，使用杜邦线将 XIAO ESP32S3（发射端）与 reCamera 进行物理连接：

- 黑色线：连接 ESP32 的 **GND** 引脚 → reCamera 的 **GND** 引脚
- 绿色线：连接 ESP32 的 **D2** 引脚 → reCamera 的 **GPIO** 信号输出引脚

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/reCamera_xiao_connect_line.png" /></div>

:::note 注意
请为 ESP32 发射端单独提供电源（通过 USB 线或电池供电），确保 LoRa 模块有足够的发射功率。
:::

---

## 5. Home Assistant 接收告警

### 5.1 确认接收端正常运行

在开始之前，请确保接收端 ESP32 已正常通电并运行、已连接到与 HA 主机相同的 WiFi 网络、MQTT 地址配置正确。

### 5.2 在 HA 中监听 MQTT 消息

打开浏览器，输入 Home Assistant 的 IP 地址，进入 **MQTT 管理界面**。在配置中开启 **监听全部（Listen to all）** 选项。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/ha_show_result.png" /></div>

当 reCamera 检测到人体时，Meshtastic 发射端会通过 LoRa 将告警信息发送至接收端，接收端再通过 MQTT 将包含 `Human`（发射端配置的 Friendly Name）的消息推送到 HA。您将在 MQTT 监听界面中实时看到告警消息：

```json
{
  "payload": {
    "text":"Human detect"
  }
}
```

### 5.3 配置 HA 自动化告警

在 Home Assistant 中创建自动化规则，当收到 MQTT 消息中的 `payload.text` 为 `Human detect` 时，触发告警动作（如手机通知、联动报警器、记录日志等），即可完成整套"无网安防"系统的闭环。

---

## 6. 注意事项

- 发射端与接收端的 LoRa `Region` 和 `Modem Preset` 必须完全一致，否则无法通信
- 发射端与接收端的 `Pre-Shared Key` 必须一致，否则报文无法正确解密
- `Minimum Broadcast Seconds` 设置过短可能导致 LoRa 信道拥堵，建议保持 15 秒以上
- reCamera GPIO 引脚为 3.3V 电平，与 XIAO ESP32S3 的 D2 引脚电平兼容，无需电平转换
- 发射端应尽量放置在开阔高处，以获得最佳的 LoRa 通信距离

---

## 7. 常见问题解答

### Q1: 接收端和发射端无法通信怎么办？

检查两端 LoRa `Region` 和 `Modem Preset` 是否完全一致，`Pre-Shared Key` 是否完全相同。此外确认两端设备之间的距离在 LoRa 有效通信范围内，并检查天线是否正确安装。

### Q2: reCamera 检测到人体但 HA 没有收到告警？

依次排查：reCamera 的 GPIO 信号输出是否正常（可用万用表测量）；发射端 Detection Sensor 模块的 Monitor Pin 是否正确配置为 3（D2）；接收端 WiFi 与 MQTT 配置是否正确，MQTT Address 是否填写了 HA 主机 IP。

### Q3: 如何确认 Meshtastic 接收端已正常连接 WiFi 和 MQTT？

在 Meshtastic Web 客户端中查看接收端的设备状态面板，确认 WiFi 状态为 Connected，MQTT 状态为 Connected。

---

## 8. 资源

- [reCamera 快速入门指南](https://wiki.seeedstudio.com/cn/recamera_getting_started/)
- [Meshtastic 官方文档](https://meshtastic.org/docs/)
- [Meshtastic Web Flasher](https://flasher.meshtastic.org/)
- [reCamera OS GitHub](https://github.com/Seeed-Studio/reCamera-OS)
- [XIAO ESP32S3 Wiki](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/)

---

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
