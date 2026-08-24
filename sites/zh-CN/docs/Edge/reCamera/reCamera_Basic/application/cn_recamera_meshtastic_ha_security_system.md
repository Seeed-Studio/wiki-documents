---
description: 使用 reCamera 和 Meshtastic 构建远距离安防系统——通过 LoRa 自组网将 AI 检测告警无线推送到 Home Assistant
title: 使用 reCamera 和 Meshtastic 构建远距离安防系统
keywords:
  - 边缘 AI
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
  author: Sizhao Zhou
createdAt: '2026-06-29'
updatedAt: '2026-07-22'
url: https://wiki.seeedstudio.com/cn/recamera_meshtastic_ha_security_system/
---

# 使用 reCamera 和 Meshtastic 构建远距离安防系统  

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/demo_show.gif" /></div>  

## 1. 介绍  

在没有 WiFi 或蜂窝网络覆盖的荒野、大型农场或偏远山区，如何实现智能安防监控？  

本教程提供了一套极客范十足的“无网安防”方案：利用 **reCamera PoE** 强大的边缘 AI 算力进行实时人体检测，一旦检测到目标，立即通过底层硬件引脚触发 **XIAO ESP32S3 + Wio-SX1262 模组（发射端）**。告警信号被转换为低频无线电波，跨越数公里复杂地形，被室内的 **Wio-SX1262 接收端** 捕获，并无缝转换为 MQTT 消息推送到本地的 **Home Assistant (HA)** 系统。  

整个链路无需任何云端服务器，真正实现隐私、安全、低功耗与超远距离的完美结合。  

### 系统通信架构  

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/system_framework.png" /></div>  

整体数据流如下：  

- reCamera PoE 运行 YOLO 人体检测模型，在检测到人时通过 GPIO 引脚输出低电平信号  
- XIAO ESP32S3（发射端）通过 D2 引脚捕获低电平触发，并通过 Wio-SX1262 发送 LoRa 无线数据包  
- XIAO ESP32S3（接收端）通过 Wio-SX1262 接收 LoRa 数据包，并通过 WiFi 使用 MQTT 协议将其推送到 Home Assistant  
- Home Assistant 接收 MQTT 消息并触发自动化告警（通知、与其他智能设备联动等）  

---  

## 2. 硬件准备  

<table align="center">
 <tr>
  <th>XIAO ESP32S3 & Wio-SX1262 套件</th>
  <th>reCamera PoE</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 </font></span></strong>
   </a>
  </div></td>
  <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 </font></span></strong>
   </a>
  </div></td>
 </tr>
</table>  

- XIAO ESP32S3 & Wio-SX1262 套件：2 套（1 套作为 LoRa 发射端，1 套作为 LoRa 接收端）  
- 本地智能主机：1 台，用于运行 Home Assistant 和 MQTT Broker（任何能够运行 HA 的小型主机均可）  
- 杜邦延长线：若干，用于 reCamera GPIO 与 XIAO ESP32S3 之间的物理信号连线  

---  

## 3. Meshtastic 网络配置  

为了实现两块 XIAO ESP32S3 之间的远距离 LoRa 通信，我们需要为其刷入 **Meshtastic** 开源固件。  

### 3.1 固件烧录与基础射频同步（接收端与发射端都需要）  

**步骤 1**：使用 USB-C 数据线将 XIAO ESP32S3 连接到电脑。  

:::note Note  
在烧录前，需要将 ESP32 置于 Bootloader 下载模式。操作方法：按住 BOOT 键，按一次 RESET 键，然后松开 BOOT 键。  
:::  

**步骤 2**：访问 [Meshtastic Web Flasher](https://flasher.meshtastic.org/)，在设备类型中选择 `Seeed Xiao ESP32-S3`，勾选 **Full Erase**，点击 **Flash** 写入固件。  

**步骤 3**：固件烧录完成后，访问 [Meshtastic Web Client](https://client.meshtastic.org/)，点击 **Add Connection** 添加新设备，选择 **Serial** 作为连接方式，选择对应的串口设备并点击 **Connect**。  

**步骤 4**：进入 **Settings → Radio Config → LoRa**，将 `Region` 调整为你所在地区的合法频段（例如 `CN` 或 `US`），并将 `Modem Preset` 设置为 **`Short Turbo`** 以获得更快的响应速度。  

### 3.2 接收端配置（放置在室内连接 HA）  

接收端负责接收 LoRa 数据包，并通过 WiFi 以 MQTT 方式推送到 Home Assistant。  

**步骤 1 — 生成并保存密钥**：在 **Channels** 选项卡中，为 Primary 通道生成一个 128 位的 `Pre-Shared Key`。  

:::note Note  
务必将该密钥复制并离线保存，稍后需要在发射端中输入，两端密钥必须完全一致。  
:::  

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/reCamera_Meshtastic_password.png" /></div>  

**步骤 2 — 连接本地网络**：在 **Device Config → Network** 中，启用 WiFi，并输入家中 WiFi 的 SSID 和密码。  

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/xiao_connect_wifi.png" /></div>  

**步骤 3 — 启用 MQTT 转发**：在 **Module Config → MQTT** 中，勾选 `Enable MQTT Client`，启用 `JSON Enabled`，并在 `Address` 中准确填写 HA 主机的本地 IP 地址（例如 `192.168.4.7`）。  

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/xiao_mqtt_config.png" /></div>  

**步骤 4**：完成所有配置后，点击右上角 **Save** 保存并等待设备重启。  

### 3.3 发射端配置（放置在室外连接 reCamera）  

发射端负责监测 GPIO 引脚电平变化，在检测到低电平时发送 LoRa 告警数据包。  

:::note Note  
请**不要**在发射端启用 WiFi 和 MQTT；它只需专注于接收 GPIO 触发并发送 LoRa 无线信号。  
:::  

**步骤 1**：断开接收端 ESP32，将其替换为发射端使用的 ESP32，并在 Meshtastic Web Client 中直接点击 **Connect** 进行连接。  

**步骤 2 — 同步射频参数**：进入 **Radio Config → LoRa**，确保与接收端保持一致（Region 和 Modem Preset 完全相同）；无需启用 MQTT。  

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/xiao_shut_lora_config.png" /></div>  

**步骤 3 — 输入预共享密钥**：在 **Channels** 选项卡中，完整粘贴接收端生成的 `Pre-Shared Key`。  

**步骤 4 — 配置 GPIO 硬件触发**：在 **Module Config → Detection Sensor** 中启用该模块，并按如下参数进行配置：  

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/xiao_shut_detect_config.png" /></div>  

| 参数 | 设置 | 说明 |
| :--- | :--- | :--- |
| Minimum Broadcast Seconds | 15 | 最小广播间隔，防止频繁触发导致信道拥塞 |
| Friendly Name | Human | 自定义告警名称，将作为 MQTT 消息标识符使用 |
| Monitor Pin | 3 | 对应 XIAO ESP32S3 的 D2 引脚 |
| Detection Triggered Type | LOGIC_LOW | 低电平触发（reCamera 在检测到人时输出低电平） |  

**步骤 5**：点击右上角 **Save** 保存并等待设备重启。  

---  

## 4. reCamera 端配置与物理连线  

### 4.1 释放系统资源  

默认情况下，reCamera 的 Node-RED 和 SSCMA 后台服务会占用相机资源。通过 SSH 登录 reCamera（默认 IP 为 `192.168.42.1`，用户名和密码均为 `recamera`），在终端中执行以下命令以停止后台服务：  

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```  

### 4.2 启动视频流转发脚本  

:::note Note  
运行脚本的主机必须与 reCamera PoE 处于**同一局域网**。reCamera PoE 版本只需连接到同一台路由器或交换机即可获取 IP 地址。  
:::  

在你用于接收视频流的监控主机上，运行 Python 脚本以接收 reCamera 推送的视频帧：  

```bash
python udp_client.py
```  

### 4.3 启动人体检测程序  

在 reCamera 终端中执行以下命令，启动板载 YOLO 人体检测模型。第一个参数为模型文件路径（可直接使用 reCamera 自带的模型），第二个参数为运行视频流转发脚本的主机 IP 地址：  

```bash
sudo ./model_detector ./Models/model.cvimodel 192.168.4.7
```  

### 4.4 将 ESP32 发射端连接到 reCamera  

完成上述软件配置后，使用杜邦线将 XIAO ESP32S3（发射端）与 reCamera 进行物理连接：  

- 黑色线：连接 ESP32 的 **GND** 引脚 → reCamera 的 **GND** 引脚  
- 绿色线：连接 ESP32 的 **D2** 引脚 → reCamera 的 GPIO 信号输出引脚  

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/reCamera_xiao_connect_line.png" /></div>  

:::note Note  
请为 ESP32 发射端单独供电（通过 USB 线或电池），以确保 LoRa 模块具有充足的发射功率。  
:::  

---  

## 5. 在 Home Assistant 中接收告警  

### 5.1 确认接收端运行正常  

在开始之前，请确保接收端 ESP32 已上电并正常运行，连接到与 HA 主机相同的 WiFi 网络，且 MQTT 地址配置正确。  

### 5.2 在 HA 中监听 MQTT 消息  

打开浏览器，输入 Home Assistant 的 IP 地址，进入 **MQTT 管理界面**。在配置中启用 **Listen to all** 选项。  

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/ha_show_result.png" /></div>  

当 reCamera 检测到有人体时，Meshtastic 发射端会通过 LoRa 将告警信息发送给接收端，接收端再通过 MQTT 向 HA 推送一条包含 `Human`（在发射端配置的 Friendly Name）的消息。你将会在 MQTT 监听界面实时看到这条告警消息：  

```json
{
  "payload": {
    "text":"Human detect"
  }
}
```  

### 5.3 在 HA 中配置自动化告警  

在 Home Assistant 中创建一条自动化规则，当 MQTT 消息中的 `payload.text` 为 `Human detect` 时，触发告警动作（如手机通知、联动警报器、日志记录等），从而完成整个“无网络安防”系统的闭环。  

---  

## 6. 注意事项  

- 发射端和接收端的 LoRa `Region` 和 `Modem Preset` 必须完全一致，否则将无法通信  
- 发射端和接收端的 `Pre-Shared Key` 必须相同，否则数据包将无法被正确解密  
- 将 `Minimum Broadcast Seconds` 设置得过短可能导致 LoRa 信道拥塞，建议保持在 15 秒以上  
- reCamera 的 GPIO 引脚为 3.3V 电平，与 XIAO ESP32S3 的 D2 引脚电平兼容，无需电平转换  
- 发射端应尽量放置在开阔且较高的位置，以获得最佳的 LoRa 通信距离  

---  

## 7. 常见问题  

### Q1：如果接收端和发射端无法通信怎么办？  

检查两端的 LoRa `Region` 和 `Modem Preset` 是否完全一致，以及 `Pre-Shared Key` 是否相同。此外，确认两台设备之间的距离是否在有效的 LoRa 通信范围内，并检查天线是否安装正确。  

### Q2：reCamera 检测到人体，但 HA 没有收到告警？  

按以下顺序排查：reCamera 的 GPIO 信号输出是否正常（可用万用表测量）；发射端上 Detection Sensor 模块的 Monitor Pin 是否正确配置为 3（D2）；接收端的 WiFi 和 MQTT 配置是否正确，以及 MQTT Address 是否填写为 HA 主机的 IP。  

### Q3：如何确认 Meshtastic 接收端已成功连接到 WiFi 和 MQTT？  

在 Meshtastic Web Client 中查看接收端的设备状态面板，确认 WiFi 状态为 Connected，MQTT 状态为 Connected。  

---  

## 8. 资源  

- [reCamera 快速上手指南](https://wiki.seeedstudio.com/cn/recamera_getting_started/)  
- [Meshtastic 官方文档](https://meshtastic.org/docs/)  
- [Meshtastic Web Flasher](https://flasher.meshtastic.org/)  
- [reCamera OS GitHub](https://github.com/Seeed-Studio/reCamera-OS)  
- [XIAO ESP32S3 Wiki](https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started/)  

---  

## 技术支持与产品讨论  

感谢你选择我们的产品！我们提供不同层级的支持，以确保你在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。  

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>  

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>