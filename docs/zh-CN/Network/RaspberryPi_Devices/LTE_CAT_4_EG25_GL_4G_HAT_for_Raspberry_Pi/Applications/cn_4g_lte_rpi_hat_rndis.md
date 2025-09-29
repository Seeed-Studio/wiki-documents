---
description: 配置 Windows 上的 RNDIS 以通过 USB 连接 Raspberry Pi 4G LTE HAT，实现无缝的互联网和网络访问。

title: 4G LTE Raspberry Pi HAT 上的 RNDIS 配置（Windows）
keywords:
  - Raspberry Pi HAT
  - 入门指南
  - 工业物联网（IIoT）
  - RNDIS
  - 4G LTE
  
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/1-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi.webp
slug: /cn/raspberry_pi_4g_lte_hat_rndis
last_update:
  date: 2025/3/17
  author: Kasun Thushara
---

## 介绍

**RNDIS（远程网络驱动接口规范）** 是一种 Microsoft 协议，它使 USB 设备能够模拟网络适配器，从而通过 USB 连接为 Windows PC 提供互联网或网络访问。在 Windows 系统中，安装正确的 RNDIS 驱动程序对于像 Quectel 模块这样的设备作为虚拟以太网接口运行至关重要。一旦安装完成，驱动程序会使 PC 将设备识别为网络适配器，从而实现互联网共享或本地网络通信。这种方法在通过 USB 提供互联网连接的蜂窝模块中尤为常见。

## 前置条件

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


## 软件前置条件
如果您已经在 Windows 上安装了 NDIS 或其他驱动程序，请先卸载它，然后安装以下提供的 RNDIS 驱动程序。

- [点击此处下载](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Quectel_Windows_RNDIS_V1.1.12.zip)
- [获取最新更新](https://www.quectel.com/download-zone/?_sf_s=rndis)

您可以通过 `计算机管理` → `设备管理器` 检查安装结果。成功安装驱动程序后的“设备管理器”界面如下所示。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/devicetree.PNG" 
    style={{ width: 600}} 
  />
</div>



### 配置为 RNDIS 模式

要配置 RNDIS 模式，请使用 QCOM 工具并按照以下步骤操作：  
1. 在 [QCOM 工具](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/QCOM_V1.6.rar) 中输入并发送以下命令：  
   **AT+QCFG="usbnet"?**  
   
2. 如果响应未显示 **AT+QCFG="usbnet",3**，请手动将其设置为 RNDIS 模式，发送以下命令：  
   **AT+QCFG="usbnet",3**


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usbnetcommnad.PNG" 
    style={{ width: 600}} 
  />
</div>

### 连接网络

您应该会看到一个网络接口（例如，Network X）指示连接成功。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/connection.PNG" 
    style={{ width: 400}} 
  />
</div>

您可以使用 ipconfig 命令验证新的 RNDIS 配置。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/3.PNG" 
    style={{ width: 600}} 
  />
</div>


## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您在使用我们的产品时获得最佳体验。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>