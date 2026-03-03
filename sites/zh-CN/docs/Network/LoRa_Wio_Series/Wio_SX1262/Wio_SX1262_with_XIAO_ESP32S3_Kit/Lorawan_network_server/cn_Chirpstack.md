---
description: 基于 Wio SX1262 与 XIAO esp32s3 模块的 Chirpstack LNS 连接
title: 连接到 Chirpstack
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/51_1.png
slug: /cn/wio_sx1262_xiao_esp32s3_LNS_Chirpstack
sidebar_position: 2
last_update:
  date: 10/17/2024
  author: Evelyn Chen
---

# Wio-SX1262 与 XIAO ESP32S3 套件连接到 Chirpstack

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/51.png" alt="pir" width={900} height="auto" /></p>

## 概述

LoRaWAN 是一种基于 LoRa 技术构建的低功耗广域网络协议。它通过无线方式将设备连接到互联网，并管理终端节点设备与网络网关之间的通信。

按照 Lora 入门指南，我们将 Wio-SX1262 与 XIAO ESP32S3 配置为单通道集线器 lora 网关。

本 wiki 页面解释了如何基于 Wio-SX1262 与 XIAO ESP32S3 套件设置 LoraWAN 作为单通道网关进行数据交换。同时还将 Sensecap S210x lora 传感器节点连接到 Wio-SX1262 与 XIAO ESP32S3 套件，并将传感器数据传输到 Chirpstack。

## 本地安装 Chirpstack

请参考[说明](https://learn.semtech.com/mod/book/view.php?id=223&chapterid=266#:~:text=Enter%20the%20following%20to%20clone%20the%20ChirpStack%20Docker,Share%20it%20on%20any%20security%20popups%20you%20see.)在本地安装 Chirpstack。

1. 打开浏览器并访问 http://localhost:8080 。

您应该会看到 ChirpStack 登录页面。

2. 使用默认用户名 `admin` 和密码 `admin` 登录。

## 添加设备配置文件

在租户下添加设备配置文件：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/45.png" alt="pir" width={600} height="auto" /></p>

## 添加 LoRaWAN 网关

注册网关并填入网关 EUI：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/46.png" alt="pir" width={600} height="auto" /></p>

添加成功！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/47.png" alt="pir" width={600} height="auto" /></p>

## 添加 SenseCAP LoRa 传感器

### 通过 Sensecraft APP 配置 LoRa 传感器

我们将向 TTN 添加一个 sensecap 传感器节点。

**步骤 1**. 下载并打开 Sensecraft App。

**步骤 2**. 按住传感器按钮 3 秒，LED 将以 1 秒频率闪烁。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/41.png" alt="pir" width={300} height="auto" /></p>

**步骤 3**. 请点击"扫描"添加新设备并开始扫描设备上的二维码。

**步骤 4**. 点击"高级配置"并选择"其他平台"。

**步骤 5**. 选择与网关一致的频率计划。我们已经将网关设置为 EU868，所以传感器也设置为 EU868。

**步骤 6**. 设备默认使用 OTAA 加入 LoRaWAN 网络。记下 `设备 EUI`、`App EUI` 和 `APP key`。

### 添加到 Chirpstack

**步骤 1**. 创建应用程序

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/48.png" alt="pir" width={600} height="auto" /></p>

**步骤 2**. 在应用程序中添加设备，并将 `设备 EUI` 和 `AppKEY` 复制到相应的空白处。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/49.png" alt="pir" width={600} height="auto" /></p>

**步骤 3**. 检查传感器状态

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/50.png" alt="pir" width={600} height="auto" /></p>

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
