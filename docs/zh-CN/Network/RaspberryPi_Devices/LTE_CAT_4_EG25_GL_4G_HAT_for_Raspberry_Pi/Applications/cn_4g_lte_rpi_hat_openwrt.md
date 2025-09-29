---
description: 使用 Raspberry Pi 5、OpenWrt 和 4G LTE HAT，随时随地享受可靠的互联网接入。学习如何创建一个高性能的便携式热点，适用于家庭、旅行和偏远地区。

title: 在 Raspberry Pi 5 上使用 4G LTE 模块设置 OpenWrt
keywords:
  - Raspberry Pi Hat
  - 入门指南
  - 热点
  - 移动数据
  - 4G LTE
  - OpenWRT
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mobile-cop.webp
slug: /cn/4g_lte_hat_and_raspberry_pi_router_with_openwrt
last_update:
  date: 2024/12/25
  author: Kasun Thushara
---

## 简介

将 Raspberry Pi 5 与 **OpenWrt** 和 4G LTE HAT 结合使用，可以提供一个强大且灵活的解决方案，用于创建便携式热点。这种设置非常适合在偏远地区提供互联网接入、支持物联网设备，或在旅途中创建个人无线网络。OpenWrt 的可定制性确保了与 4G LTE 模块的无缝集成，使用户能够充分利用 Raspberry Pi 5 作为可靠且高性能的无线路由器的潜力。无论是用于家庭、旅行还是专业用途，本指南将帮助您将 Raspberry Pi 5 转变为由 OpenWrt 和 4G LTE 连接支持的功能齐全的热点。

## 准备工作

### 硬件需求

<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
         <th>Raspberry Pi 4G LTE CAT4 HAT</th>
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

## 构建 OpenWrt 镜像

### 选择 OpenWrt 快照版本

要使用 4G LTE 模块，需要某些依赖项。OpenWrt 固件选择器提供了在镜像创建过程中包含这些依赖项的灵活性，使您能够编译自定义固件。如果不采用这种方法，您需要在设置后通过其他互联网来源在 Raspberry Pi 上安装这些依赖项。因此，建议构建一个已经包含必要依赖项的固件镜像。

- **访问 [OpenWrt 固件选择器](https://firmware-selector.openwrt.org/?version=SNAPSHOT&target=bcm27xx%2Fbcm2712&id=rpi-5) 并选择快照版本。**

- 快照版本更新频繁，适合高级用户。

- 点击 `Customize installed packages and/or first boot script`。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-build-1.PNG" 
    style={{ width: 500}} 
  />
</div>

在自定义构建过程中，确保包含以下软件包：

- kmod-usb-net-cdc-ether
- kmod-usb-serial-option
- picocom
- minicom

### 构建步骤

- 将所需的软件包添加到您的配置文件中。
- 编译 OpenWrt 固件。
- 在编译完成后下载生成的工厂镜像。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-build.PNG" 
    style={{ width: 500}} 
  />
</div>

## 在树莓派 5 上安装 OpenWrt

- 使用 **Balena Etcher** 等工具将编译好的镜像烧录到 SD 卡。
- 将 SD 卡插入树莓派 5。
- 将树莓派连接到 4G LTE 模块。

### 检查设备连接

通过 SSH 访问树莓派：

```bash
ssh root@192.168.1.1
```

### 验证设备详情：

- 使用 dmesg 检查已连接的设备：

```bash
dmesg | grep usb
```
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-dmsg.PNG" 
    style={{ width: 500}} 
  />
</div>

- 查看 USB 设备详情：
```bash
cat/sys/kernel/debug/usb/devices
```
:::note
此命令将显示有关制造商、产品及其他设备特定信息的详细信息。请确保模块已通电。
:::

## 配置 LTE 模块

### 使用 Minicom 调整设置

打开 **Minicom**

```bash
minicom -s
```
您将看到如下界面。使用方向键选择 Serial port setup。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-minicom-serial.PNG" 
    style={{ width: 500}} 
  />
</div>

配置设置：
- 将波特率设置为与您的 4G 模块匹配（例如，9600）。
- 选择正确的 COM 端口（例如，/dev/ttyUSB2）。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-minicom.PNG" 
    style={{ width: 500}} 
  />
</div>

- 并将设置保存为默认值。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-minicom-save.PNG" 
    style={{ width: 500}} 
  />
</div>

### 启用 ECM / 拨号模式：

发送以下 AT 命令以配置 USB 网络模式：

```bash
minicom -D /dev/ttyUSB2
```

```bash
AT+QCFG="usbnet"
AT+QCFG="usbnet",1 
```
### 添加新网络接口

- 通过浏览器登录 OpenWrt 的 LuCI 网页界面，地址为 **192.168.1.1**。
- 进入 **网络 > 接口 > 添加新接口**。
- 设置接口：
    - 选择检测到的设备（**eth1** 或 **usb0**）。
    - 使用 **DHCP 客户端** 协议。
    - 命名接口（例如，**USB_Modem**）。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-new-interface.PNG" 
    style={{ width: 500}} 
  />
</div>

- 配置防火墙设置：
    - 将接口分配到 WAN 区域。

<div style={{ textAlign: 'center' }}>  
<img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-firewall-interface.PNG" 
    style={{ width: 500}} 
  />
</div>

- 在 DHCP 服务器下，启用忽略接口。

### 设置无线接入点

- 在 LuCI 网页界面中，导航到 **网络 > 无线 > 添加**。

<div style={{ textAlign: 'center' }}>  
<img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-wireless.PNG" 
    style={{ width: 500}} 
  />
</div>

- 配置新的无线接口：
    - **SSID**：保持默认值或自定义。
    - **模式**：接入点。
    - **网络**：LAN。

<div style={{ textAlign: 'center' }}>  
<img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-wireless-settings.PNG" 
    style={{ width: 500}} 
  />
</div>

- 对于 **无线安全**：
    - 将加密设置为 **WPA2**。
    - 创建一个强密码。

<div style={{ textAlign: 'center' }}>  
<img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-password-wireless.PNG" 
    style={{ width: 500}} 
  />
</div>

- 重启设备。

### 测试无线网络：
- 您的无线 SSID 现在应该可以在附近设备上看到。
- 使用配置的密码连接以访问 4G LTE 网络。

<div style={{ textAlign: 'center' }}>  
<img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-connection.PNG" 
    style={{ width: 500}} 
  />
</div>

<div style={{ textAlign: 'center' }}>  
<img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mobile-cop.png" 
    style={{ width: 500}} 
  />
</div>

## 资源

- **[网页]** [LTE EG25-G](https://www.quectel.com/product/lte-eg25-g/)

- **[网页]** [OpenWRT 使用基于 cdc_ether 驱动的加密狗进行 WAN 连接](https://openwrt.org/docs/guide-user/network/wan/wwan/ethernetoverusb_cdc)


## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>