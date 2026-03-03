---
description: 使用 OpenEPaperLink 配置生成器为电子纸生成配置
title: 电子纸的 OpenEPaperLink 配置构建器
keywords:
- XIAO eInk Expansion
- XIAO
- OEPL Config Builder
image: https://files.seeedstudio.com/wiki/eInk/xiao-expansion/OEPL_Config_img.webp
slug: /cn/epaper_breakout_board_with_oepl
sidebar_position: 2
last_update:
  date: 10/23/2025
  author: Zovey
---

# OpenEPaperLink 和电子纸配置构建器

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/seeed_logo_2.jpg" style={{width:500, height:'auto'}}/></div>

## 简介

[OpenEPaperLink](https://openepaperlink.de/)（以下文本将此项目简称为"OEPL"）是电子货架标签的替代协议和固件实现。通过基于 ESP32 的接入点和 802.15.4 无线电通信支持多种显示器。这是一个开源的电子纸标签通信系统，使用户能够无线更新电子墨水屏的显示内容。该系统由接入点（AP）和标签设备组成，支持各种类型的电子墨水屏。它提供了广泛的内容生成和传输功能。现在，该项目也兼容 Seeed Studio XIAO nRF52840 Sense Plus。

购买电子纸分线板后，您可能需要更换不同规格的电子纸屏幕。在本教程中，我们将使用两个工具来完成这个过程：OPEL Config Builder 用于修改电子纸的参数，OEPL Image Uploader 用于上传图像。

[OEPL Config Builder](https://config.openepaperlink.org/) 是一个低代码电子纸参数配置工具，使用 BLE 协议进行无线传输。用户不再需要编写复杂的配置代码；他们只需在网站上操作鼠标即可完成配置。

[OEPL Image Uploader](https://atc1441.github.io/ATC_BLE_OEPL_Image_Upload.html) 也是一个通过 BLE 协议进行无线传输的工具。不同之处在于该工具传输照片。

## 硬件准备

<table align="center">
  <tr>
    <th>4.26" 单色电子纸显示屏</th>
    <th>Seeed Studio XIAO 电子纸分线板</th>
    <th>Seeed Studio XIAO nRF52840 Sense Plus</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993631-4.26-monochrome-eink--epaper-display.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/4/-/4-105990172-epaper-breakout-board-45back.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102010694-seeedstudio-xiao-nrf52840-sense-plus-45font_1.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-Breakout-Board-p-5804.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

:::tip
XIAO nRF52840 系列的 MCU 都支持此工具，不限于 XIAO nRF52840 Sense Plus。电子纸屏幕仅支持 4.26 英寸显示屏。但是，我们将在未来继续更新以支持更多屏幕尺寸。
:::

## OEPL Config Builder 的使用

### 步骤 1：烧录 BLE 固件

第一步是您可以从 OEPL 的官方仓库获取 OEPL_BLE 固件。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/OpenEPaperLink/OEPL_BLE/releases/tag/test7" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/hub_oepl.png" style={{width:700, height:'auto'}}/></div>

将 Seeed Studio XIAO nRF52840 Sense Plus、电子纸分线板和屏幕连接在一起后，使用 USB 数据线将计算机连接到 nRF52840，然后连续按两次复位按钮。然后您将看到 PC 端弹出文件管理器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/file_pic.png" style={{width:700, height:'auto'}}/></div>

然后，将刚刚从 USB 驱动器获取的 `.uf2` 文件复制到 nRF52840 的文件管理器中。下次 MCU 上电时，它将自动执行此 `.uf2` 固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/firmware.jpg" style={{width:700, height:'auto'}}/></div>

### 步骤 2：使用 BLE 连接到构建器

在构建器界面中，通过 BLE 协议连接设备（如果没有显示设备，请重新刷写固件）。该网站只有在通过 BLE 协议连接时才能实现以下无线上传功能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Connect_demo_2.png" style={{width:700, height:'auto'}}/></div>

如果连接成功，您可以在终端框中看到"Connected"字样。

- **Read Config**：读取 MCU 中的配置。
- **Write Config**：将配置写入 MCU。
- **Reboot**：重启 MCU。

### 步骤 3：构建器面板

只需在面板上选择相应的变量或输入参数即可完成配置。

- **Config Builder 的参数**
  - **system_config**：保存有关主机 IC 和电源管理引脚的信息
  - **manufacturer_data**：制造商标识符和板卡信息
  - **power_option**：电源和睡眠相关选项
  - **display**：显示器/面板信息（可选）。对于具有多个显示器的设备可以出现多次。
  - **led**：可选的 LED 配置（可重复）。
  - **sensor_data**：可选的传感器读数/定义（可重复）。
  - **data_bus**：全局总线定义（I2C/SPI 等）。
  - **binary_inputs**：可选的二进制输入（按钮、开关）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Builder_demo_1.png" style={{width:700, height:'auto'}}/></div>

如果您想保存已设置的配置，可以在此面板中将其导出为 `.bin`、`Hex` 和 `JSON` 文件。相反，此面板也支持导入 `JSON` 文件进行配置。4.26 屏幕配置文件可以在这里获取。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/oep_config_base.json" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>点击这里获取</button></p>
</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Package_import_1.png" style={{width:700, height:'auto'}}/></div>

设置配置后，您可以使用 **Write Config** 功能将其上传到 MCU。

## OEPL Image Uploader 的使用

OEPL Image Uploader 是一个在线电子纸上传工具，它也通过 BLE 协议运行。该工具极其轻量且无需代码，消除了传统电子纸更新速度慢的麻烦。其使用方法与 OEPL Config Builder 类似。

### 步骤 1：连接到上传器

连接方法与构建器类似。设备通过 BLE 连接。但是，需要注意的是，由于之前的固件与此图像上传所需的引脚之间存在一些冲突，在使用此网页功能之前需要对固件进行一些修改。这里提供了一个新的固件用于烧录。只需按照前面提到的步骤执行烧录过程。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/oep_config_base.json" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>点击这里获取</button></p>
</a>
</div>

"E-Paper prefix filter(s)" 部分中的变量需要更改为 "OEPL"；否则无法检索到设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_4.png" style={{width:350, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_6.png" style={{width:500, height:'auto'}}/></div>

### 步骤 2：上传图像

然后点击 "Select File" 按钮选择本地文件进行上传。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_2.png" style={{width:550, height:'auto'}}/></div>

文件传输完成后，只需点击 "Upload Image" 按钮即可将其上传到电子纸。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_5.png" style={{width:350, height:'auto'}}/></div>

当显示 "Upload Complete" 时，表示烧录过程已成功完成！然后您将能够看到屏幕上的图片已经改变。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
