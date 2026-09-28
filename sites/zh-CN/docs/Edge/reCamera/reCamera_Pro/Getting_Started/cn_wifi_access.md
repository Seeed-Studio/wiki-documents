---
description: 将 reCamera Pro 连接到你的 Wi-Fi 网络，找到其局域网 IP 地址，并从直接 USB 连接切换到完全无线管理。
title: 通过 Wi-Fi 访问设备
keywords:
  - reCamera
  - reCamera Pro
  - Wi-Fi
  - 无线访问
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_wifi_access
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/cn/recamera_pro_wifi_access/
---

# 通过 Wi-Fi 访问设备

开箱后，你可以通过 USB Type-C 线缆在 `192.168.42.1` 访问 reCamera Pro。要让设备访问互联网，或从本地网络中的任意位置进行管理，请将其连接到 Wi-Fi，并切换到其局域网 IP 地址。

## 1. 连接到 Wi-Fi 网络

1. 登录 Web UI（如果尚未登录，请参阅[快速开始](/cn/recamera_pro_getting_started/)）。
2. 点击左侧导航栏中的 **Device Info**。
3. 打开 **Network Settings**。reCamera Pro 内置 Wi-Fi 模块——如果 Wi-Fi 处于关闭状态，请先启用，系统会扫描附近的网络。
4. 选择你的 Wi-Fi SSID，输入密码并连接。

![无线网络配置步骤示意图](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/en_wifi_setting.png)

## 2. 查找设备的局域网 IP 地址

连接成功后，点击已连接网络右侧的提示信息图标（感叹号），即可查看详细的网络信息——包括分配的 IP 地址、MAC 地址等。

![查看 Wi-Fi 详情示意图](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/wifi_details.png)

![Device Info 中的网络详情](https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_vq4u1biblp.png)

## 3. 切换到无线访问并验证

1. 在一台连接到**同一局域网**的电脑上，打开浏览器并访问刚刚找到的局域网 IP，例如 `http://192.168.4.200`。
2. 使用管理员密码登录——你应当能看到与通过 USB 访问时相同的 Web UI。
3. 打开 **Real-time Preview** 并点击 **Start**，确认视频流也可以通过 Wi-Fi 正常工作。

:::tip 拔掉 USB 线缆以实现完全无线运行
一旦 Web UI 能通过局域网 IP 正常访问，你就可以安全地**拔掉 USB Type-C 线缆**。USB 连接只传输数据——设备会继续使用自身的电源供电运行。
:::

:::note 仍然需要供电
拔掉 USB 线缆并**不会**切断电源：reCamera Pro 必须始终连接到其 12 V 直流电源（或其他合适的电源）才能持续运行。

{/* TODO(verify): confirm supported power options when the USB cable is unplugged (DC barrel only, or also PD over Type-C) and state them explicitly here. */}
:::

## 注意事项

- 如果电脑和设备处于不同的网络（例如 2.4 GHz 与 5 GHz 的 SSID 之间相互隔离，或处于访客网络），则可能无法访问该局域网 IP——请将两者放在同一网络中。
- 当设备重新连接时，Wi-Fi 地址可能会发生变化。对于长期部署，请在路由器上为设备的 MAC 地址保留一个固定地址，并在[网络、时间和访问控制](/cn/recamera_pro_device_info/)中完成其余网络设置。
- 如果在此步骤中出现连接失败，请参阅[按现象排查](/cn/recamera_pro_faqs/)。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
