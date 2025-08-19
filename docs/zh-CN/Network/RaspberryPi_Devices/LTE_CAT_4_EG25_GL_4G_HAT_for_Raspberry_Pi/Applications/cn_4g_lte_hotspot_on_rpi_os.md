---
description: 使用本指南将您的树莓派变成一个强大的移动 Wi-Fi 热点。通过树莓派 4G LTE Hat，随时随地轻松连接互联网。
title: 在树莓派 OS 上使用树莓派 4G LTE Hat 设置热点
keywords:
  - 树莓派 Hat
  - 入门指南
  - 热点
  - 移动数据
  - 4G LTE
  - 边缘计算
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/1-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi.webp
slug: /cn/4g_lte_hotspot_on_raspberry_pi_os
last_update:
  date: 12/24/2024
  author: Kasun Thushara
---

## 介绍

本指南将引导您使用树莓派和 4G LTE Hat 设置 4G LTE 热点的过程。我们将涵盖所需的硬件和软件组件，包括树莓派、4G LTE Hat 和树莓派 OS（Bookworm）。您将学习如何配置 4G 模块、建立 Wi-Fi 网络，并安全地与其他设备共享您的互联网连接。

## 前置条件

### 硬件要求

<div class="table-center">
  <table align="center">
    <tr>
        <th>树莓派 5</th>
         <th>树莓派 4G LTE CAT4 HAT</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>    
         <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### 软件要求

- 需要安装了 Bookworm OS 的树莓派。

- 配置为互联网接入的 Quectel LTE 4G 模块。确保使用 RNIDS 或类似配置正确设置 LTE 连接。[链接](https://wiki.seeedstudio.com/cn/raspberry_pi_4g_hat_rndis_mobile_internet/)

## 启用热点的步骤

### 连接到 LTE 网络

确保您的 Quectel LTE 模块已连接并提供互联网接入。使用以下命令确认连接：

```bash
ping -c 4 google.com
```

### 创建热点

要使用内置 Wi-Fi 模块广播热点网络：

- 打开终端。
- 运行以下命令，将 `<hotspot name>` 和 `<hotspot password>` 替换为您想要的 SSID 和密码：

```bash
 sudo nmcli device wifi hotspot ssid <hotspot name> password <hotspot password> ifname wlan0
```

- **ssid**：设置热点网络的名称。
- **password**：设置访问热点的密码。
- **ifname wlan0**：指定要使用的 Wi-Fi 接口。

## 管理热点

### 禁用热点

要停止热点并将 Wi-Fi 接口恢复为客户端模式：

```bash
sudo nmcli device disconnect wlan0
```

### 重新连接到其他 Wi-Fi 网络

在禁用热点后，连接到其他 Wi-Fi 网络：

```bash
sudo nmcli device up wlan0
```

## 附加说明

- 您现在可以将树莓派用作便携式路由器或 Wi-Fi 接入点。
- 当长时间广播热点时，请确保树莓派的电源稳定。
- 您可以参考此[文档](https://www.raspberrypi.com/tutorials/host-a-hotel-wifi-hotspot/)获取更多信息。

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>