---
description: 通过 Web USB 在 ESP32S3 上烧录 MeshCore 中继固件的指南，以及在应用中配置 LoRa 区域和路径设置。
title: ESP32 MeshCore 入门
keywords:
  - Meshcore
  - ESP32 MeshCore
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/ESP32S3Series.png
slug: /get_started_with_esp32s3_meshcore
sku: 102010611,113110064
sidebar_position: 3
last_update:
  date: 4/20/2026
  author: Michelle Huang
createdAt: '2026-04-20'
updatedAt: '2026-07-10'
url: https://wiki.seeedstudio.com/cn/get_started_with_esp32s3_meshcore/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/ESP32S3Series.png" alt="pir" width={800} height="auto" /></p>

[MeshCore](https://meshcore.io/) 是一个开源系统，用于实现基于 LoRa Mesh 硬件的安全文本通信。你可以使用 MeshCore 中继器和 MeshCore 伴随节点来构建你的 MeshCore 网络。[XIAO ESP32S3 & Wio-SX1262 Kit](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html) 是开发 MeshCore 节点的灵活解决方案。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

<br></br>

## 固件烧录

使用 USB 线将设备连接到电脑。请确保该线缆支持数据传输。

:::warning
在数据传输过程中请保持 USB 线缆连接，否则设备可能会损坏。
:::

前往 [Meshcore Web Flasher](https://meshcore.io/flasher)。

在 `Community Firmware` 分组中选择 `Seeed Studio Xiao S3 Wio`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/ScreenShot_2026-04-20_140721_194.png" alt="pir" width={800} height="auto" /></p>

选择 `Repeater`。如果你想烧录其他固件，请[点击这里](https://docs.meshcore.io/)查看教程。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/RepeaterFirmware.png" alt="pir" width={800} height="auto" /></p>


选择固件版本。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/FirmwareVersion.png" alt="pir" width={600} height="auto" /></p>

按住 `Boot(B)` 按钮的同时，按下 `Reset(R)` 按钮进入烧录模式。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/RB.png" alt="pir" width={300} height="auto" /></p>

选择 `Erase device `，然后点击 `Flash` 并选择名为 `Xiao xxx` 或 `debug unit xxx` 的串口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/Flash1.png" alt="pir" width={800} height="auto" /></p>

当进度条完全填满时，表示烧录已完成。随后设备会自动重启。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/FlashigComplete.png" alt="pir" width={800} height="auto" /></p>

点击 `Reset(R)` 按钮重启设备。

## 设备连接

### 连接到 SX-1262

SX-1262 可以通过 B2B 接口连接到 Xiao ESP32-S3。SX-1262 使用 SPI 与 Xiao ESP32-S3 通信。

下图展示了 XIAO ESP32S3 与 Wio-SX1262 之间的 B2B 引脚映射。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/ESP32-S3B2B%E5%BA%A7%E5%AD%90%E5%BC%95%E8%84%9A%E5%9B%BE.png" style={{width:700, height:'auto'}} alt="XIAO ESP32S3 与 Wio-SX1262 之间的 B2B 引脚映射"/>
</div>
:::warning
兼容的 SX-1262 只能在套件中购买。
:::

### （可选）连接电池

XIAO ESP32S3 内置电源管理芯片，可使 XIAO ESP32S3 通过电池独立供电，或通过 XIAO ESP32S3 的 USB 口为电池充电。

如果你想为 XIAO 连接电池，我们建议你购买合格的可充电 `3.7V lithium` 电池，并带有 `protection circuit`。焊接电池时，请注意区分正负极。电源负极应为靠近 USB 口的一侧，电源正极为远离 USB 口的一侧。

<div class="table-center">
<iframe width="730" height="420" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Xiao%20Esp32S3%20Battery%20Connection.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### （可选）连接扩展板

扩展板是一个很好的连接工具，并可用于额外的应用，例如轻松添加 Grove 传感器和模块。

<table align="center">
  <tbody>
    <tr>
      <th>用于 Meshtastic 的 XIAO ESP32S3 & Wio-SX1262 套件</th>
      <th>（可选）扩展板</th>
    </tr>
    <tr>
      <td>
        <div align="center">
          <img
            src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg"
            style={{ width: 330, height: 'auto' }}
          />
        </div>
      </td>
      <td>
        <div align="center">
          <img
            src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/Expansion.jpg"
            style={{ width: 330, height: 'auto' }}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <div className="get_one_now_container" style={{ textAlign: 'center' }}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span style={{ color: '#FFFFFF', fontSize: '20px' }}>
                立即获取🖱️
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td align="center">
        <div className="get_one_now_container" style={{ textAlign: 'center' }}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span style={{ color: '#FFFFFF', fontSize: '20px' }}>
                立即获取🖱️
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## 配置

### 初始配置

当 MeshCore 中继固件首次被烧录到 MeshCore 设备上时，需要设置设备的频率，使其使用在你所在国家或地区合法的频段。

[点击这里](https://config.meshcore.io/) 来配置中继器。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

更改 LoRa 区域并保存设置。然后设备会自动重启。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/Configure.png" alt="pir" width={800} height="auto" /></p>

**区域列表**

|**区域代码**|**描述**|**频率范围 (MHz)**|**占空比 (%)**|**功率限制 (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未设置|N/A|N/A|N/A|
|US|美国|902.0 - 928.0|100|30|
|EU_868|欧盟 868MHz|869.4 - 869.65|10|27|

:::info
**EU_868** 必须遵守每小时 10% 的占空比限制，以滚动 1 小时为周期、每分钟计算一次。如果达到该限制，你的设备将停止发射，直到再次被允许。
:::

然后你就可以开始测试你自己的 Mesh 网络了。

### 发送广播

点击 "send advert" 以使其他 Meshcore 设备能够看到此中继器。然后该中继器就可以在设备列表中被看到。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/SendAdvert.png" alt="pir" width={800} height="auto" /></p>

### 管理员登录

中继器的默认管理员密码是 `password`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/Admin.png" alt="pir" width={800} height="auto" /></p>

登录后，你可以看到配置页面。现在你可以在 hone APP 上调整中继器的配置。

### 设置路径

在将中继器添加到你的路由之前，你可能需要先使用中继器发送广播。中继器会以固定间隔自动发送广播。该间隔可能是数小时（默认 3 小时）。因此你需要手动发送广播，否则就需要等待。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/SendAdvert.png" alt="pir" width={800} height="auto" /></p>

你可以手动设置消息发送路径。将你的蓝牙伴随设备连接到手机 APP。打开一个私信窗口。然后你可以选择已发现的中继器来组成你的路径。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SetPath1.png" alt="pir" width={600} height="auto" /></p>

设置路径后，传输方式会变为 “n hop”。例如，如果你在路由中添加 1 个中继器，它就会变为 1 hop。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/1Hop.png" alt="pir" width={300} height="auto" /></p>

### （可选）其他设置

如果你想在 MeshCore 节点地图上显示中继器的位置，你需要先为套件安装一个 GPS 模块。

<table align="center">
  <tbody>
    <tr>
      <th>用于 Meshtastic 的 XIAO ESP32S3 & Wio-SX1262 套件</th>
      <th>带外壳的 XIAO ESP32S3 & Wio-SX1262 套件</th>
      <th>（可选）L76K GNSS 模块</th>
    </tr>
    <tr>
      <td>
        <div align="center">
          <img
            src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg"
            style={{ width: 300, height: 'auto' }}
          />
        </div>
      </td>
      <td>
        <div align="center">
          <img
            src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/XiaoESP32S3Casing.jpg"
            style={{ width: 300, height: 'auto' }}
          />
        </div>
      </td>
      <td>
        <div align="center">
          <img
            src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg"
            style={{ width: 350, height: 'auto' }}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <div className="get_one_now_container" style={{ textAlign: 'center' }}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span style={{ color: '#FFFFFF', fontSize: '20px' }}>
                立即获取🖱️
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td align="center">
        <div className="get_one_now_container" style={{ textAlign: 'center' }}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-ESP32S3-for-Meshtastic-LoRa-with-3D-Printed-Enclosure-p-6314.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span style={{ color: '#FFFFFF', fontSize: '20px' }}>
                立即获取🖱️
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td align="center">
        <div className="get_one_now_container" style={{ textAlign: 'center' }}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span style={{ color: '#FFFFFF', fontSize: '20px' }}>
                立即获取🖱️
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </tbody>
</table>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Coonection.png" style={{width:800, height:'auto'}}/></div>

然后登录管理页面以启用 GPS。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/GPSS.jpg" alt="pir" width={300} height="auto" /></p>

此外，你可以调整广播广告间隔。`auto zero hop advert` 的间隔范围为 60-240 分钟。`auto flood advert` 的间隔范围为 3-168 小时。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertInterval.jpg" alt="pir" width={300} height="auto" /></p>

## 常见问题

### 设备断电后丢失已保存的设置

如果设备名称、LoRa 区域或其他设置在应用中看起来已成功保存，但设备断电后又消失，请检查 ESP32-S3 的 Flash 分区表是否异常。

你可以使用 [ESPConnect](https://thelastoutpostworkshop.github.io/ESPConnect/) 检查 ESP32-S3 的 Flash 存储分区表。ESPConnect 仅适用于 ESP 设备，不能用于 nRF52840 设备。

1. 打开 ESPConnect，并选择波特率 `115200`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/710-2.png" alt="ESPConnect baud rate selection" width={800} height="auto" /></p>

2. 点击 **Connect**，然后选择 **USB JTAG/serial debug unit**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/710-3.png" alt="Select USB JTAG serial debug unit in ESPConnect" width={600} height="auto" /></p>

3. 设备连接后，打开 **Partitions** 页面。
4. 检查分区列表中是否存在 `spiffs`。

如果分区表异常，ESPConnect 的 **Partitions** 页面可能只会显示：

- `nvs`
- `phy_init`
- `factory`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/710-4.png" alt="ESPConnect partition table without SPIFFS" width={800} height="auto" /></p>

然而，官方 MeshCore v1.15 的 `merged.bin` 固件应包含：

- `nvs`
- `otadata`
- `app0`
- `app1`
- `spiffs` 1.5 MB
- `coredump`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/710-5.png" alt="ESPConnect partition table with SPIFFS" width={800} height="auto" /></p>

MeshCore v1.15 会将设备名称和区域设置写入 SPIFFS 中的 `/new_prefs`。如果不存在 `spiffs` 分区，这些设置只会保存在 RAM 中。手机应用可能会显示设置已成功保存，但断电后就会丢失。

这通常发生在刷入了普通固件文件时，例如：

```text
Xiao_S3_WIO_companion_radio_ble-v1.15.0-dee3e26.bin
```

相反，应刷入完整的合并固件，例如：

```text
Xiao_S3_WIO_companion_radio_ble-v1.15.0-dee3e26-merged.bin
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/710-1.png" alt="MeshCore flasher download options for normal and merged firmware" width={800} height="auto" /></p>

要解决此问题，请擦除设备并重新刷入合并固件版本。

## 资源
- **[PDF]**[兼容 Xiao ESP32-S3 的 SX1262 原理图](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- **[PDF]**[Wio-SX1262 模组数据手册](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
- **[RAR]**[Wio-SX1262 for XlAO 3D 文件](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.rar)
- **[PDF]** [Seeed Studio XIAO ESP32S3 原理图](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)
- [XIAO ESP32S3 套件 Kicad 库](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20Wio%20SX1262%20for%20XIAO%20ESP32S3)
- **[STEP]** [Seeed Studio XIAO ESP32S3 3D 模型](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-3d_model.zip)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 Eagle 库](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)
- **[DXF]** [Seeed Studio XIAO ESP32S3 DXF 尺寸图](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)
- **[LBR]** [Seeed Studio XIAO ESP32S3 Eagle 封装](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)
- **[ZIP]** [Seeed Studio XIAO ESP32S3 出厂固件](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware-20240814.zip)
- **[XLSX]** [Seeed Studio XIAO ESP32S3 引脚分布表](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)
- 🔗 **[Kicad]** [Seeed Studio XIAO ESP32S3 封装 FootPrint](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)
- [外壳 3D 文件](https://www.thingiverse.com/thing:6888371)
## 课程资源

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[电子书]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## 技术支持与产品讨论

<p style={{textAlign: 'center'}}><a href="https://www.facebook.com/groups/1755190828846458" target="_blank"><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Banner_QRCode_FB.jpg" border="0" /></a></p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>
