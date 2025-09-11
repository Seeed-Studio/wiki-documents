---
description: 体验 ReSpeaker XVF3800 USB 4-Mic Array 的强大功能——这是一款先进的圆形麦克风阵列，具备 AEC、波束成形、噪声抑制和 360° 语音捕获功能。与紧凑的 XIAO ESP32S3 配对，为智能设备、机器人和物联网应用提供高性能语音控制。加入我们，演示与 Home Assistant 的无缝集成，使用语音命令控制设备。

title: 使用 Home Assistant 的智能家居语音控制

keywords:
- reSpeaker
- XIAO
- ESP32S3
- Home Assistant
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /cn/respeaker_xvf3800_xiao_home_assistant
last_update:
  date: 7/30/2025
  author: Kasun Thushara
---

## 概述

使用全新的 **ReSpeaker XMOS XVF3800 与 XIAO ESP32S3** 与智能空间对话，通过语音开关灯光、播放音乐，甚至询问天气

在本章中，我们将使用 ReSpeaker XMOS XVF3800 与 XIAO ESP32S3 HA 语音助手连接 Sonoff 智能开关，实现语音控制灯光开关。

<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/iqlsNezHYuE"
          title="ReSpeaker XVF3800 with XIAO ESP32S3 Home Assistant"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>

## 所需硬件

<table align="center">
  <tr>
      <th>ReSpeaker XVF3800 与 XIAO ESP32S3</th>
        <th>Home Assistant 设备</th>
        <th>Sonoff BASICR2</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home_Assistant_Green/HAyellow.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991074-sonoff-basicr2-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Yellow-Standard-Version-with-CM4-p-5809.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Sonoff-BasicR2-p-5514.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

## 固件更新

为了获得最佳的播放体验，我们需要将 XMOS 固件更新到
从这里下载固件。在您的计算机上，插入带有 XIAO ESP32S3 的 ReSpeaker XMOS XVF3800，并按照我们指南中的说明运行：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_firmware.PNG" alt="pir" width={800} height="auto" /></p>

:::note
XVF3800 麦克风阵列需要 12.288 MHz MCLK 才能工作，但 ESPHome（在 Home Assistant 中使用）由于 API 限制无法生成它。此固件使 XVF3800 充当 I2S 主设备，因此它可以生成自己的时钟，而无需来自 ESP32 的 MCLK。
我们的固件修复了这个限制，因此麦克风可以与 Home Assistant 正常工作。
:::

您可以从[这里](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/i2s)下载固件

安装指南在[这里](https://wiki.seeedstudio.com/respeaker_xvf3800_introduction/#update-firmware)

## 准备带有 XIAO ESP32S3 的 ReSpeaker XMOS XVF3800

转到 **Home Assistant > Settings > Add-ons**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_Settings.PNG" alt="pir" width={800} height="auto" /></p>

点击 **Add-on Store**（通常在右下角）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_addon.PNG" alt="pir" width={800} height="auto" /></p>

在 **Official add-ons** 下，搜索并安装 **ESPHome Device Builder**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome.PNG" alt="pir" width={800} height="auto" /></p>

安装后，点击 **Start** 运行 ESPHome 插件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_Start.PNG" alt="pir" width={800} height="auto" /></p>

启用 **Start on Boot、Watchdog 和 Show in Sidebar** 以便更容易访问。

从 Home Assistant 侧边栏，转到 **ESPHome Builder**。

点击 **+ NEW DEVICE**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_add_new.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_device.PNG" alt="pir" width={500} height="auto" /></p>

出现提示时，点击 **SKIP** – 我们将手动创建配置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_skip.PNG" alt="pir" width={500} height="auto" /></p>

选择您的新设备条目并点击 **EDIT**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_respeaker_device.PNG" alt="pir" width={800} height="auto" /></p>

用您的自定义 **YAML 配置**替换内容

您可以从[这里](https://github.com/respeaker/reSpeaker_XVF3800_ESPHome_Assistant)找到 YAML 文件

保存 YAML 后，点击 **INSTALL**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_yaml.PNG" alt="pir" width={800} height="auto" /></p>

选择 **Manual Download**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_manual.PNG" alt="pir" width={800} height="auto" /></p>

等待固件编译。

将生成的 .bin 固件文件下载到您的计算机。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_factory.PNG" alt="pir" width={800} height="auto" /></p>

使用 **USB Type-C 线缆**将 **ESP32-S3** 开发板（连接了 XVF3800）连接到您的 PC。

在 Chrome 或 Edge 中打开 [**Web-ESPHome**](https://web.esphome.io/?dashboard_wizard)。

点击 **CONNECT** 并选择适当的串行端口

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/connect-port.png" alt="pir" width={800} height="auto" /></p>

连接后，点击 **INSTALL**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_install.PNG" alt="pir" width={500} height="auto" /></p>

选择您刚刚下载的 .bin 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_bin_write.PNG" alt="pir" width={500} height="auto" /></p>

等待安装完成（可能需要几分钟）。

成功后，您将看到确认消息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_congrats.PNG" alt="pir" width={500} height="auto" /></p>

返回 **Home Assistant > Settings > Devices & Services**。

您应该看到 **ESPHome** 列为已发现的集成。

点击 **CONFIGURE**，然后点击 **Submit** 完成设置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_discover.PNG" alt="pir" width={800} height="auto" /></p>

## 添加您的智能设备

根据制造商的用户手册设置 **Sonoff BASICR2** 设备。您需要创建 eWELink 账户。

### 安装 HACS

如果尚未安装，请按照官方指南设置 [**Home Assistant Community Store**](https://hacs.xyz/docs/use/)：

从侧边栏打开 **HACS**。
在搜索部分搜索 **Sonoff LAN**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_HACS.PNG" alt="pir" width={800} height="auto" /></p>

点击 **Install** 添加集成。
重启 Home Assistant 以应用更改。

### Sonoff

导航到 **Settings → Devices & Services**。
点击 **Add Integration**。
搜索并选择 **Sonoff**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_sonoff.PNG" alt="pir" width={800} height="auto" /></p>

输入您的 **eWeLink 账户凭据** 进行身份验证。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/credentials.png" alt="pir" width={500} height="auto" /></p>

成功连接后，您将在以下位置看到关联的实体列表：
**Settings → Devices & Services → Entities**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/sonoff-id.png" alt="pir" width={800} height="auto" /></p>

## 使用 Nabu Cloud 的语音助手

在此演示中，我们展示如何使用语音连接 **Home Assistant Cloud (Nabu Casa)**。设置简单，您可以利用 **一个月免费试用** 来探索其全部功能。
通过内置的 **唤醒词**："Okay Nabu"，您可以轻松触发语音命令，并与设备和服务 **无缝集成**，**随时随地** — 无需复杂配置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_voice.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_voice_nabu.PNG" alt="pir" width={800} height="auto" /></p>

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
