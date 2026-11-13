---
description: Wi-Fi HaLow 媒体网关应用——通过 XIAO ESP32-S3 和 Wio-WM6180 在 Wi-Fi HaLow 链路上向 HaLowLink 2 网关和 PC 媒体控制台上传智能手机媒体
title: Wi-Fi HaLow 媒体网关
keywords:
  - HaLowLink 2
  - Wi-Fi HaLow
  - Wio-WM8108
  - 媒体网关
  - XIAO ESP32-S3
  - Wio-WM6180
  - 应用
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /halowlink2_media_gateway
sku: 100072966
last_update:
  date: 11/12/2026
  author: Advent Jiang
createdAt: '2026-11-06'
updatedAt: '2026-11-12'
url: https://wiki.seeedstudio.com/cn/halowlink2_media_gateway/
---

# Wi-Fi HaLow 媒体网关

<!-- Internal note: TOP-PRIORITY application page. Content sourced from the Seeed engineering demo write-up "Wi-Fi HaLow Media Gateway Demo.docx" (received 2026-11-12) — the end-to-end path was demonstrated by Seeed engineering and the figures below come from that demonstration. Firmware files, source code, and flashing instructions must NOT be documented until officially released and verified; those parts stay as internal comments, not visible TODOs. -->

## 介绍

此应用将 HaLowLink 2 加上一块 XIAO ESP32-S3 节点变成一个**媒体网关**：一部普通智能手机可以通过长距离的 **Wi-Fi HaLow 链路**，把照片、视频和文件发送到 PC，而手机本身不需要任何 HaLow 支持。

演示的端到端路径为：

```text
Smartphone --2.4 GHz Wi-Fi--> XIAO ESP32-S3 + Wio-WM6180 --Wi-Fi HaLow--> HaLowLink 2 --Ethernet--> PC (Media Console)
```

智能手机只需要普通的 2.4 GHz Wi-Fi。XIAO 节点在两种网络之间起桥接作用：它为手机提供 2.4 GHz 热点，同时保持到网关的 HaLow 链路。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-setup.jpg" alt="HaLowLink 2 with antenna beside its retail box, and the XIAO ESP32-S3 plus Wio-WM6180 gateway node in front" width={600} height="auto" /></p>

## 硬件需求

| 产品 | SKU | 在演示中的角色 |
|:----|:----|:----|
| HaLowLink 2 Wi-Fi HaLow 网关 | 100072966 | Wi-Fi HaLow 接入点；到 PC 的以太网桥接 |
| Wi-Fi HaLow Transceiver for Seeed Studio XIAO (Wio-WM6180) | 109100041 | 网关节点上的 HaLow 射频 |
| Seeed Studio XIAO ESP32-S3 | 113991114 | 网关控制器：提供 2.4 GHz SoftAP 并转发媒体 |

你还需要：

- 一部支持 2.4 GHz Wi-Fi 的智能手机（不需要 HaLow 支持）
- 一台带以太网口、运行 Media Console 的 Windows PC
- 所有设备的电源和连接线

## 系统架构

共五个阶段，每一阶段将媒体交给下一个阶段：

| 阶段 | 链路 | 说明 |
|:-----:|:----:|:------|
| 智能手机 → XIAO 节点 | 2.4 GHz Wi-Fi | 手机通过浏览器页面上传到节点的 SoftAP |
| XIAO ESP32-S3 → Wio-WM6180 | SPI | 控制器将接收到的字节流发送到 HaLow 射频 |
| Wio-WM6180 → HaLowLink 2 | Wi-Fi HaLow（亚 1 GHz） | 长距离跳点；节点加入网关的 HaLow 网络 |
| HaLowLink 2 → Windows PC | 以太网 | 网关将流量传递给 Media Console |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-architecture.png" alt="System architecture of the Wi-Fi HaLow Media Gateway demo: smartphone, XIAO ESP32-S3, Wio-WM6180 transceiver, HaLowLink 2, Windows PC" width={800} height="auto" /></p>

## 配置网关端

1. **HaLowLink 2。** 按照 [Preparation](/cn/halowlink2_getting_started#preparation) 配置网关——天线、电源、电脑连接——然后通过 [Access the Web UI](/cn/halowlink2_getting_started#access-the-web-ui) 登录。出厂默认的 Router 配置足以完成独立演示；若要集成到现有 LAN，请使用 [Access Point Mode](/cn/halowlink2_getting_started#access-point-mode-推荐)。
2. **XIAO 节点。** 按照 [Wi-Fi HaLow Module for XIAO 指南](/cn/getting_started_with_wifi_halow_module_for_xiao)将 XIAO ESP32-S3 与 Wio-WM6180 模块组装在一起，连接天线，并烧录由 Seeed Studio 提供的 Media Gateway 固件。
3. **PC。** 通过以太网将 Windows PC 连接到网关的 **LAN 口**（演示网络 `192.168.12.x`），并启动 Media Console 服务器。

<!-- Pending official release (internal): XIAO firmware binary/source, flashing procedure, and the Media Console package. Do NOT fabricate download links, repository URLs, server ports, or flashing steps — insert the official ones here when the release package arrives. -->

上电后节点会自动运行：ESP32-S3 初始化 Wio-WM6180，通过 Wi-Fi HaLow 关联到 HaLowLink 2 接入点，并为手机启动其 2.4 GHz SoftAP。

**在运行演示前先验证 HaLow 链路：**在网关的 Home 页面打开 **Access Point (HaLow)** 卡片——已关联的节点会显示信号强度和 RX/TX 速率，而 **Local Network** / **Network → Interfaces** 页面会显示承载到 PC 流量的 LAN 侧。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-ap-clients.png" alt="HaLowLink 2 web UI Access Point (HaLow) dialog listing the associated gateway node with signal level and RX/TX rate" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>网关 Web UI：Access Point (HaLow) 卡片列出了已关联的网关节点及其信号强度和 RX/TX 速率——在任何媒体传输前就已建立链路。</em></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-lan-interface.png" alt="HaLowLink 2 web UI Network Interfaces page showing the LAN interface used for the demo network" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>网关 Web UI，Network → Interfaces：LAN 接口（192.168.12.x）承载到 PC 的演示流量。</em></p>

## 运行演示

1. **手机：**连接到 XIAO 节点的 2.4 GHz SoftAP，在浏览器中打开 `192.168.4.1` 的 Media Gateway 网页，选择一张照片、一个视频或文件并开始上传。
2. **节点：**ESP32-S3 接收上传数据并通过 HaLow 链路进行流式传输——不涉及中间存储。
3. **PC：**Media Console 接收、存储并列出文件；在其中打开即可预览、播放、保存或下载。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-phone-upload.png" alt="Smartphone browser page of the Media Gateway with a photo selected and the upload in progress" width={400} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>智能手机端：由 XIAO 节点的 SoftAP 提供的基于浏览器的上传页面，已选择一张照片并正在传输。</em></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-console.png" alt="PC Media Console page listing received photos, videos and files with preview and download actions" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>PC 端：Media Console 列出每一个接收的文件——照片、视频、文档——可随时预览、播放、保存或下载。</em></p>

节点如何传输数据：

- **双网络网关：**SoftAP 服务于手机侧，而 HaLow 接口服务于 PC 侧；默认路由管理确保出站媒体走 Wi-Fi HaLow 路径。
- **流式中继：**媒体以 **16 KB 块**转发——ESP32-S3 从不会在内存中缓存完整文件，也不使用 Base64 编码。
- **文件类型：**JPG、PNG、MP4 以及通用文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mediagw-node.png" alt="XIAO ESP32-S3 stacked with the Wio-WM6180 Wi-Fi HaLow module and antenna cable, the gateway node of the demo" width={600} height="auto" /></p>

## 演示结果

完整的端到端传输已由 Seeed 工程团队完成演示：

- **照片上传**——已验证 JPG / PNG 传输
- **视频传输**——已验证 MP4 上传和播放
- **通用文件**——支持上传和下载
- **PC Media Console**——接收的文件可被预览、播放、保存和下载
- **端到端连通性**——在手机不具备 HaLow 支持的情况下，实现智能手机到 PC 的 Wi-Fi HaLow 媒体传输

<!-- Pending demo verification (internal): record the exact firmware versions, HaLow channel/bandwidth, and distance used in the demonstration once the engineering write-up is finalized; add per-stage troubleshooting entries observed in real runs. -->

## 故障排查

关于网关和 HaLow 链路问题——Web UI 访问、配对、IP 地址分配、吞吐量——请参阅 [Getting Started → Troubleshooting](/cn/halowlink2_getting_started#troubleshooting)。

## 资源

- [Getting Started with Wi-Fi HaLow Module for XIAO](/cn/getting_started_with_wifi_halow_module_for_xiao)
- [Getting Started with Wi-Fi HaLow Mini PCIe Module](/cn/getting_started_with_wifi_halow_mini_pcie_module)
- [HaLowLink 2 Getting Started](/cn/halowlink2_getting_started)

<!-- Pending official release (internal): add source code / firmware links here once released. -->

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
