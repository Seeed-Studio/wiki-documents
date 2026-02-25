---
description: 使用 MBIM 模式在 Windows 上设置 Quectel 4G Raspberry Pi HAT 以实现稳定的蜂窝网络连接指南。

title: 4G Raspberry Pi HAT - Windows 上的 MBIM 模式设置
keywords:
  - Raspberry Pi Hat
  - 入门指南
  - IIoT
  - MBIM
  - 4G LTE
  
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mbimcmd.webp
slug: /cn/raspberry_pi_4g_lte_hat_mbim
last_update:
  date: 3/18/2025
  author: Kasun Thushara
---

## 简介

**Quectel 4G Raspberry Pi HAT** 通过使用 MBIM（移动宽带接口模型）模式支持在 Windows 上进行互联网连接。该模式使 Windows 能够将 4G 模块识别为原生蜂窝调制解调器，从而实现稳定且受驱动支持的网络连接。

本指南将引导您完成在 MBIM 模式下配置 Quectel 模块并在 Windows 10/11 系统上连接互联网的必要步骤。

## 前提条件

### 硬件要求

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
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## 软件前提条件

在继续之前，请确保：

- 已卸载任何先前安装的 Quectel NDIS 或其他驱动程序。
- 已使用下方提供的链接安装正确的 MBIM 驱动程序。

### MBIM 驱动下载

- [下载 Quectel Windows MBIM 驱动 v1.3](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Quectel_Windows_MBIM_V1.3_EN.zip)
- [从 Quectel 获取最新更新](https://www.quectel.com/download-zone/?_sf_s=MBIM)

安装完成后，您可以通过进入 **计算机管理** → **设备管理器** 来验证驱动是否安装成功。安装成功后，将在“网络适配器”和“端口 (COM 和 LPT)”下看到类似下图的设备：

  <div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/devicetree_mbim.PNG"
    style={{ width: 600}}
  />
</div>

### 配置 MBIM 模式

要将模块切换到 MBIM 模式，您需要使用 **QCOM 工具**。

1. 下载并打开 [QCOM 工具](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/QCOM_V1.6.rar)。
2. 通过 USB 将您的 4G HAT 连接到 Windows PC 并为其上电。
3. 在 QCOM 中发送以下 AT 指令以检查当前 USB 模式：

   ```
   AT+QCFG="usbnet"?
   ```

   - 如果返回结果不是 `"usbnet",2`，请跳过此步骤。

4. 若需切换到 MBIM 模式，请发送：

   ```
   AT+QCFG="usbnet",2
   ```

5. 然后重启

   ```
   AT+CFUN=1,1
   ```

:::note
有时您可能会遇到 AT 端口无响应的情况。在这种情况下，请使用 DM 端口代替。
:::

  <div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mbimcommand.PNG"
    style={{ width: 600}}
  />
</div>

## 连接到网络

配置为 MBIM 模式后：

- Windows 应检测到一个 **蜂窝网络接口**。
- 您现在可以直接在 Windows 的 **网络和 Internet 设置** 中管理并连接网络。

   <div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/windows.PNG"
    style={{ width: 600}}
  />

</div>

## 验证网络配置

要验证您的 PC 是否通过 MBIM 获取了网络连接：

1. 打开命令提示符。
2. 运行：

   ```
   ipconfig
   ```

   您应在“移动宽带连接”或“蜂窝”下看到一个带有 IP 地址的接口。

   <div style={{ textAlign: 'center' }}>

  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mbimcmd.PNG"
    style={{ width: 600}}
  />
</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持方式，以确保您在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
