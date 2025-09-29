---
description: 学习如何使用 Quectel EG25 模块以 QMI 模式在 Raspberry Pi 上配置 4G HAT，实现可靠的 LTE 网络访问。本指南提供了在 Raspberry Pi 上配置、编译和使用 quectel-CM 拨号工具的分步教程。

title: 4G Raspberry Pi HAT - 在 Raspberry Pi OS 上配置 QMI 模式
keywords:
  - Raspberry Pi HAT
  - 入门指南
  - 工业物联网 (IIoT)
  - QMI
  - 4G LTE
  
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Raspberry-Pi-4G-LTE-CAT4-HAT.webp
slug: /cn/raspberry_pi_4g_lte_hat_qmi
last_update:
  date: 2025/3/20
  author: Kasun Thushara
---

## 简介

本指南介绍了如何在 Raspberry Pi 上使用配备 Quectel EG25-G 模块的 4G HAT 配置互联网访问。Quectel EG25-G 是一种广泛使用的 LTE 调制解调器，支持包括 QMI（Qualcomm MSM 接口）模式在内的多种网络协议，能够实现高效且高速的移动宽带连接。通过本指南，您将学习如何在 QMI 模式下设置模块，编译并使用 quectel-CM 拨号工具，以及在 Raspberry Pi 上建立稳定的 4G 网络连接。这种方法非常适合需要移动互联网接入的应用场景，例如物联网部署、远程监控和边缘计算。

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

### 软件需求

#### 移除之前的拨号配置

在继续之前，请确保已移除任何其他拨号方法以避免冲突。

1. **验证正确的串口**

运行以下命令以验证您正在使用正确的 AT 指令端口（如有需要，请替换 `/dev/ttyUSB2`）：

```bash
sudo minicom -D /dev/ttyUSB2
```

2. **检查并设置 USB 网络模式**

在 minicom 终端中输入：

```bash
AT+QCFG="usbnet"?
```
- 如果响应为 `usbnet,0`，则无需更改。

若需显式设置模式为 `0`：

```bash
AT+QCFG="usbnet",0
```

3. **重启模块**

使用以下命令重置模块：
```bash
AT+CFUN=1,1
```

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usbnet_qmi.PNG" 
    style={{ width: 600}} 
  />
</div>

## 验证内核驱动（qmi_wwan及其他）

检查是否加载了 `qmi_wwan` 驱动：

```bash
lsmod 
```

- 如果输出中显示 `qmi_wwan` 已加载，则说明内核驱动已激活。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/lsmod.PNG" 
    style={{ width: 600}} 
  />
</div>

## 移植拨号工具

1. **下载并解压工具**

- 下载后，[解压缩包](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/eg25qmi.zip)到你的主目录。
- 进入主目录：

```bash
ls
```
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ls1.PNG" 
    style={{ width: 600}} 
  />
</div>

- 你应该能看到一个名为 `eg25qmi` 的文件夹。

2. **进入工具目录**

```bash
cd eg25qmi
ls
```
- 你将看到拨号工具的源文件。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ls2.PNG" 
    style={{ width: 600}} 
  />
</div>

## 编译

1. **编译拨号工具**
```bash
sudo make
```
- 编译完成后，你将看到新生成的文件（以绿色高亮显示），包括拨号工具 `quectel-CM`。

### 验证编译后的文件

```bash
ls
```
- 你应该能看到 `quectel-CM` 可执行文件。这是用于连接互联网的拨号工具。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ls3.PNG" 
    style={{ width: 600}} 
  />
</div>

## 拨号上网

1. **启动拨号**

```bash
sudo ./quectel-CM
```
- 如果拨号成功，你将看到分配的IP地址和网关信息。
- 如果第一次尝试失败，请等待并重试；第二次尝试通常会成功。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/connect.PNG" 
    style={{ width: 600}} 
  />
</div>

## 拨号后验证

1. **检查网络接口**
```bash
ifconfig
```
- 查找带有IP地址的 `wwan0` 接口。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/wwan0.PNG" 
    style={{ width: 600}} 
  />
</div>

2. **测试连接**
```bash
ping -I wwan0 8.8.8.8
```
- 如果ping成功，则说明连接已激活。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ping.PNG" 
    style={{ width: 600}} 
  />
</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>