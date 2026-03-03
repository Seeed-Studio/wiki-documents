---
description: Lipo Rider Plus（充电器/升压器）- 5V/2.4A USB Type C
title: Lipo Rider Plus（充电器/升压器）- 5V/2.4A USB Type C
keywords:
- Accessories charge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Lipo-Rider-Plus
last_update:
  date: 1/13/2023
  author: jianjing Huang
---

<div align="center">
<figure>
<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/l/i/lipo-rider-plus-v1.0-preview.jpg" alt="Lipo Rider Plus'' OUTCOME" title="demo" />
<figcaption><b></b><i></i></figcaption>
</figure>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Lipo-Rider-Plus-p-4204.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/IMAGE/get+started.png" border="0" /></a></p>

Seeed 的 Lipo Rider Plus 不仅是一款快速充电器，同时也是一款强大的升压器，支持高达 5V/2A 的充电电流，集成升压输出，输出高达 5V/2.4A，还可以输出 3.3V /250mA。3.3V 输出通常是开启状态，而 5V 输出支持 IO 控制或手动开关，这意味着您可以使用 3.3V 为微控制器供电，并使用该微控制器的 I/O 来控制 5V 输出，完全可编程。哇，难以置信它的价格竟然不到 5 美元！

简单来说，Lipo Rider Plus 可以更快地为 Lipo 电池充电，同时还能为从设备提供强大的电力支持。哦，差点忘了介绍 Lipo Rider 和传统 Lipo 充电器之间的区别。

## 特性

- 高达 5V / 2A 充电电流 - USB Type C
- 高达 5V / 2.4A 输出电流 - USB Type A
- 提供 3.3V / 250mA 输出 - 引脚排针
- 支持关闭输出（IO 控制/手动开关）
- 板载充电状态指示 LED + 板载 4 段电量指示 LED
- 超小尺寸 2.5cm*4.1cm
- 单层布局，易于安装

## 入门指南

### 硬件连接

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Lipo-Rider-Plus/img/Hardware_connection.png" alt="Lipo Rider Plus'' OUTCOME" title="demo" />
<figcaption><b></b><i></i></figcaption>
</figure>
</div>

:::caution
确保您的锂电池使用了内置电池保护器，或者您可以连接一个单独的电池保护器，否则可能会导致电池过充或过放。
:::

### Lipo Rider VS Lipo Charger

众所周知，传统的 Lipo 充电器可以为锂电池充电。通常它们只能充电。那么 Lipo Rider 能做什么呢？

**为锂电池充电**

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Lipo-Rider-Plus/img/GIF.gif" alt="Lipo Rider Plus'' OUTCOME" title="demo" />
<figcaption><b></b><i></i></figcaption>
</figure>
</div>

当然，Lipo Rider Plus 可以为 Lipo 电池充电，而且速度非常快，5V/2A，10W 的充电功率，体验飞一般的速度。

**使用电池为设备供电**

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Lipo-Rider-Plus/img/GIF2.gif" alt="Lipo Rider Plus'' OUTCOME" title="demo" />
<figcaption><b></b><i></i></figcaption>
</figure>
</div>

不仅是充电器，还是电源和升压器。在 Lipo Rider Plus 的帮助下，您可以输入一个 3.7V 的 Lipo 电池，并通过 USB Type-A 端口输出高达 5V/2.4A。通过板载开关，您可以轻松控制 USB 端口的开/关。同时，我们提供了全功能引脚排针，可以输出 3.3V/250mA。

### Lipo Rider Plus VS Lipo Rider & Lipo Rider Pro

您可能发现我们已经发布了 [Lipo Rider V1.3](https://www.seeedstudio.com/Lipo-Rider-v1-3.html) 和 [Lipo Rider Pro](https://www.seeedstudio.com/LiPo-Rider-Pro-p-992.html)，那么 [Seeed Lipo Rider](https://www.seeedstudio.com/tag/Lipo-Rider.html) 有什么不同呢？简而言之，LiPo Rider Pro 和 Lipo Rider v1.3 都有两个 JST2.0 接口，可以使用太阳能板为 Lipo 电池充电。

然而，Lipo Rider Plus 只有一个 JST2.0 接口，因此无法使用太阳能板作为电源。好消息是，Lipo Rider Plus 变得更加紧凑，它的尺寸几乎是 LiPo Rider Pro 和 Lipo Rider v1.3 的一半，您可以轻松将其安装到任何项目中。更重要的是，它的性能比前两代产品更强。总而言之，如果您需要使用太阳能板，那么 LiPo Rider Pro 和 Lipo Rider v1.3 是您的最佳选择；如果您想体验快速充电，那么 Lipo Rider Plus 将是您的最佳选择。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Lipo-Rider-Plus/img/202002729_Lipo_Rider_Plus.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Lipo Rider Plus](https://files.seeedstudio.com/wiki/Lipo-Rider-Plus/img/202002729_Lipo_Rider_Plus.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您在使用我们的产品时获得流畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>