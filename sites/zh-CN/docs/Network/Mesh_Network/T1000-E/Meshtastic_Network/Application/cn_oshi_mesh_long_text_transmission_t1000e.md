---
description: 本指南解释了为什么在 LoRa 上发送长文本会占用更多空中时间，以及如何在两台 SenseCAP T1000-E 追踪器上使用 OSHI Mesh 发送长文本。
title: 长文本传输
draft: true
keywords:
  - Meshtastic
  - Long Text Transmission
  - OSHI Mesh
  - T1000-E
image: https://files.seeedstudio.com/wiki/SenseCAP/oshimesh/Oshifirst.png
slug: /meshtastic_long_text_transmission
sku: 114993369
sidebar_position: 1
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: '2026-11-25'
updatedAt: '2026-11-25'
url: https://wiki.seeedstudio.com/cn/meshtastic_long_text_transmission/
---

## 介绍

### LoRa 中的短文本 vs. 长文本

*空中时间（Airtime）* 是无线电用于发射的时间。在相同的无线电设置下，更多的数据包通常会占用更多空中时间。更高的扩频因子或更窄的带宽会让每个数据包持续更久。

| | 短文本 | 使用 OSHI Mesh 的长文本 |
| --- | --- | --- |
| **发送的数据包** | 一个数据包 | 多个数据包，加上一条送达回执以及对缺失分片的请求或重传。 |
| **中继流量** | 每个中继可以转发这一单个数据包。 | 中继可以转发每个分片，在整个 Mesh 中增加额外的发射。 |
| **对其他流量的影响** | 占用较少空中时间 | 占用更多空中时间。在繁忙信道上，重叠的发射可能导致数据包丢失和延迟。 |
| **送达条件** | 只需一个数据包到达。 | 所有分片都需要到达。稳定的链路和足够的重传空中时间会有所帮助。 |


### LoRa 中的消息长度限制

一条标准的 Meshtastic 文本消息大约可以在一个数据包中容纳 **230 字节**。表情符号和许多非英文字符每个会占用多个字节。

[OSHI Mesh](https://github.com/Lastoneparis/oshi-mesh-protocol) 通过三个步骤增加对长文本的支持。

1. **拆分。** 发送端将消息拆分为带编号的分片，并将它们封装在与 Meshtastic 兼容的数据包中。
2. **填补空缺。** 接收端请求缺失的分片，以便发送端可以重发这些部分。
3. **重组并确认。** 接收节点按顺序重组分片，并可以为完整消息发送一条回执。

![长文本被拆分为多个数据包，缺失的数据包通过 LoRa 重发，消息被重新组装](https://files.seeedstudio.com/wiki/SenseCAP/oshimesh/Deliverylogic.png)

### OSHI Mesh

![OSHI Messenger 网站和应用预览](https://files.seeedstudio.com/wiki/SenseCAP/oshimesh/Oshifirst.png)

- **OSHI Mesh** 是 OSHI 的[开源无线电固件](https://github.com/Lastoneparis/oshi-mesh-firmware)。它使用与 Meshtastic 兼容的 LoRa 设置、信道和密钥。运行任一固件的节点在配置为这样做时，都可以中继对方的流量。长消息、送达回执以及存储转发功能使用 OSHI Mesh 协议。
- **适用场景。** 在蜂窝网络不可用、且你希望确认完整文本已送达时，用于偶尔发送多段落更新，例如路线指引或现场交接说明。在支持的应用构建版本中，你可以发送数千字符的消息。具体长度取决于文本占用的字节数。

## 在 T1000-E 上烧录 OSHI Mesh

![SenseCAP T1000-E、磁吸数据线和 OSHI Mesh 烧录页面](https://files.seeedstudio.com/wiki/SenseCAP/oshimesh/OshiT1000-E.png)

如果两台追踪器都已运行 OSHI Mesh 固件 `2.8.1.fda175c`，你可以直接进入使用相同固件的应用设置步骤。

1. 从 **Boards that install a different way** 下载 **SenseCAP T1000-E** UF2 文件。[OSHI Mesh 烧录页面](https://oshi-messenger.com/lora/flash/)
2. **手动进入 DFU 模式。** 将磁吸数据线的 USB 端插入电脑。按住追踪器的按键不放，在不松开的情况下，快速将磁吸端两次连接到追踪器。绿色 LED 会常亮，并出现 **T1000-E** 盘符。[点击这里](https://wiki.seeedstudio.com/cn/sensecap_t1000_e/#step-1-enter-dfu-mode) 查看 DFU 模式的详细说明。

   ![T1000-E 磁吸数据线和 Finder 中的 DFU 盘符](https://files.seeedstudio.com/wiki/SenseCAP/oshimesh/T1000-EDFU.png)

3. 将 UF2 文件复制到 **T1000-E** 盘符中。追踪器会自动重启。对第二台追踪器重复此操作。

如果你已经安装了 Meshtastic CLI，可以在追踪器通过 USB 连接时进入 DFU 模式。将 `<YOUR_PORT>` 替换为它的串口号。

```bash
meshtastic --port <YOUR_PORT> --enter-dfu
```

## 设置应用并发送长消息

**应用要求。** 使用两部 Android 手机，并安装支持在 OSHI Mesh 上发送 LoRa 长消息的 OSHI 构建版本。

1. 在每部手机上，打开 OSHI 中的 **Settings → LoRa Node**，并与一台追踪器配对。如果提示输入默认 PIN，请输入 `123456`。
2. 将两台追踪器都设置为与你所在位置相同的 LoRa 区域，并使用默认信道。 
3. 先互相发送一条短消息，让每部手机都学习到对方联系人的节点。这样发送端就可以收到该长消息的送达回执。
4. 发送几段文字。观察状态从 **Queued** 变为 **Sent** 再到 **Delivered**。在第二部手机上检查所有段落是否一起出现且顺序正确。

## 预期表现

- **应用中的送达时间。** 在上述近距离设置下，一条长消息大约需要 **一到两分钟**。消息大小、无线电设置、信道流量、中继和重传次数都会影响等待时间。
- **EU_868 上的排队消息。** 固件会在滚动的一小时窗口内跟踪长消息的空中时间，以保持在区域占空比限制之内。发送几条长消息后，新消息可能会一直保持 **Queued** 状态，直到有更多可用空中时间。用于演示时，请一次只发送一条长消息，并在两次发送之间等待几分钟。

## 存储转发

如果离线联系人的节点已为 OSHI 节点所知，该节点可以将消息保存最长 **72 小时**。请保持保存消息的节点持续供电，这样当联系人的节点重新上线并可达时，它就能转发该消息。[OSHI Mesh 功能概览](https://oshi-messenger.com/lora/why-oshi-mesh)

## 技术支持与产品讨论

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>