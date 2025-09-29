---
description: 探索在树莓派上使用 ECM 模式和 4G LTE 的世界。本指南提供了逐步配置 ECM（以太网控制模型）实现蜂窝网络连接的说明，为您的项目提供无缝的互联网接入。

title: 为树莓派配置移动互联网 - ECM 设置

keywords:
  - 树莓派 HAT
  - 入门指南
  - 工业物联网 (IIoT)
  - ECM
  - 移动数据
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power2.webp
slug: /cn/raspberry_pi_4g_hat_ecm_mobile_internet
last_update:
  date: 2024/3/14
  author: Kasun Thushara
---

## 简介

**ECM（以太网控制模型）** 是一种 USB 网络协议，允许像 Quectel EG25-G 这样的 4G 模块在树莓派上作为网络接口运行。通过启用 ECM 模式，该模块提供蜂窝网络连接，非常适合用于便携式互联网路由器、物联网网关和远程监控系统等物联网应用。树莓派通过 AT 指令与模块通信，以管理 ECM 模式、GNSS 和短信等功能，从而确保在没有有线或 Wi-Fi 网络的区域实现可靠的互联网接入。

## 硬件准备

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

## 硬件设置

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/sms_setup.png" style={{width:800}}/></div>

使用 **AT 指令** 配置树莓派通过 ECM 模式（以太网控制模型）进行联网需要使用 Quectel 模块。

:::note
如果尚未安装用于 AT 指令通信的必要驱动程序，则需要[安装它们](https://wiki.seeedstudio.com/cn/getting_started_raspberry_pi_4g_lte_hat/#raspberry-pi)。
:::

## 网络配置

### 第 1 步：在树莓派上打开 Minicom

```bash
sudo minicom -D /dev/ttyUSB2
AT
```

### 第 2 步：启用 ECM 模式

```bash
AT+QCFG="usbnet",1
```

### 第 3 步：验证模式

```bash
AT+QCFG="usbnet"?
```
返回结果应为 **usbnet,1**，表示 ECM 模式已激活。

### 第 4 步：检查网络接口

```bash
ifconfig
```

您应该会看到一个新接口，例如 usb0 或 eth1，这是 ECM 模式的网络接口。在本例中为 usb0。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ifconfig_usb0.PNG" 
    style={{ width: 600}} 
  />
</div>

### 第 5 步：使用 DHCP 配置网络接口以访问互联网

```bash
sudo dhclient usb0
sudo ip link set usb0 up
```
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usb0-dhcp.png" 
    style={{ width: 600}} 
  />
</div>

### 第 6 步：确保路由设置正确以访问互联网

```bash
sudo ip route add default via 192.168.225.1 dev usb0
```
根据您的 usb0 IP 修改网关。

### 第 7 步：添加 DNS 条目以进行名称解析

**编辑 /etc/resolv.conf 文件以使用 Google 的 DNS：**

```bash
sudo nano /etc/resolv.conf
```

### 第 8 步：添加以下两行并保存

```bash
nameserver 8.8.8.8
nameserver 8.8.4.4
```

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/GoogleDNS.PNG" 
    style={{ width: 600}} 
  />
</div>

### 第 9 步：使 DNS 设置持久化

```bash
sudo nano /etc/NetworkManager/NetworkManager.conf
```

### 第 10 步：在 [main] 下添加以下内容并保存

```bash
dns=none
```
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/DNS.PNG" 
    style={{ width: 600}} 
  />
</div>

### 第 11 步：重启 NetworkManager

```bash
sudo systemctl restart NetworkManager
```

### 第 12 步：测试连接

```bash
ping -I usb0 8.8.8.8
nslookup google.com
```
成功连接到移动网络并使用 4G LTE HAT 后，您将拥有无限的可能性。您可以建立 **MQTT 连接** 进行物联网消息传递，与 **云服务** 无缝通信以处理数据，或设置 **FTP 服务器** 进行远程文件传输。此设置将您的树莓派转变为一个功能强大、便携的网关，适用于物联网、自动化等多种应用场景。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>