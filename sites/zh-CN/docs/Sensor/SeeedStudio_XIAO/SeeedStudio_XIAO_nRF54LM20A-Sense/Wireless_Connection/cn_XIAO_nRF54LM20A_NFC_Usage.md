---
title: XIAO nRF54LM20A Sense 的 NFC 功能
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - nfc
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/XIAO_nRF54LM20A_NFC.webp
slug: /xiao_nrf54lm20a_with_nfc
sku: 100018440
last_update:
  date: 05/13/2026
  author: Zeller
createdAt: '2025-05-25'
updatedAt: '2026-07-08'
url: https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_with_nfc/
---

# XIAO nRF54LM20A Sense 的 NFC 功能

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/XIAO_nRF54LM20A_NFC.png" style={{width:400, height:'auto'}}/></div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  立即获取 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

<br/>
近场通信（NFC）是一种用于在两台设备之间无线传输少量数据的技术。它使用非常简单的通信协议，因此比 Bluetooth® Low Energy 连接更快。然而，由于 NFC 使用磁感应来实现通信，设备之间必须非常接近（< 10 cm）才能建立连接。】

- *关于 Nordic 系列芯片的 NFC 教程和参考资料，请参阅 [Near Field Communication (NFC)](https://docs.nordicsemi.com/bundle/ncs-3.2.0/page/nrf/protocols/nfc/index.html)*
- *NFC 的技术规范可从 [NFC Forum specification overview](https://nfc-forum.org/build/specifications) 获取。*

XIAO nRF54LM20A 预留了 NFC 接口，方便你进一步探索和使用 NFC 功能。

:::tip

本教程基于 VS Code 和 nRF Connect 扩展。如果你对它们还不熟悉，可以参考 [XIAO nRF54LM20A nRFConnect SDK Usage](https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_ncs/)

:::

## 硬件准备

在开始实验之前，你需要准备一块 XIAO nRF54LM20A 和一根 Nordic NFC 天线。

<div className="table-center">
<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
 </tr>
</table>
</div>

:::tip

Nordic NFC 天线在 Seeed Studio Bazaar 上没有单独销售，因此你需要从其他渠道购买。

:::

### 焊接天线

在 XIAO nRF54LM20A 上，外接 NFC 天线的默认引脚为 P1.01 和 P1.02，在丝印上分别标记为 N1 和 N2。请参考下方焊接示例。

- 连接前示意图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_1.png" style={{width:600, height:'auto'}}/></div>
<br/>
- 实物连接示意图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_2.jpg" style={{width:600, height:'auto'}}/></div>
<br/>
:::caution

该焊接过程难度较大，需要较熟练的焊接技术。你也可以选择使用飞线连接 XIAO 和 NFC。操作时请注意安全，避免造成人身伤害和设备损坏。

NFC 的引脚不区分正负极

:::

## 软件

:::tip

- 本节基于 Nordic Connect SDK 的示例代码演示如何使用 NFC。
<!-- - 由于 Platfrom IO 下我们没有编写 NFC 的设备树支持，所以无法使用 -->

:::

### NFC 文本记录

本示例演示如何通过 NFC 读取文本信息。

1. 在扩展中创建一个空白例程，并选择复制现有例程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_3.png" style={{width:800, height:'auto'}}/></div>

2. 输入 nfc，选择 NFC text Records 示例

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/1.png" style={{width:800, height:'auto'}}/></div>

3. 选择存储路径

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/2.png" style={{width:800, height:'auto'}}/></div>

4. 打开项目，在对应扩展下添加 XIAO nRF54LM20A 的配置，并进行编译。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/3.png" style={{width:800, height:'auto'}}/></div>

5. 打开终端，输入命令 `west flash` 将固件烧录到 XIAO nRF54LM20A。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/4.png" style={{width:800, height:'auto'}}/></div>

#### 结果

请准备一部带有 NFC 功能的手机来尝试本实验。

1. 若想更详细地查看 NFC 读取信息，需要根据你的系统下载相应的 App。

- iOS ：[NFC Tools](https://apps.apple.com/app/nfc-tools/id1252962749)
- Android：[nRF NFC Toolbox](https://play.google.com/store/apps/details?id=no.nordicsemi.android.nfc)

2. 将手机的 NFC 区域靠近 NFC 天线，以读取详细的 NFC 信息。

手机上显示的文本信息为：

```txt
Hello World!
Hallo Verden!
Witaj świecie!
```

<div className="table-center">
<table align="center">
<tr>
      <td>NFC Tools</td>
      <td>nRF NFC Toolbox</td>
</tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_8.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_9.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>

### NFC 启动应用

本节涉及 NFC 启动应用功能。请搜索 **nRF Toolbox for Bluetooth LE**。

1. 在扩展中创建一个空白示例项目，选择复制现有示例，并选择 **NFC Launch App**。配置和编译方式可参考 [NFC Records text](#nfc-records-text)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_10.png" style={{width:800, height:'auto'}}/></div>

2. 打开项目，在对应扩展下添加 XIAO nRF54LM20A 的配置，并进行编译。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/5.png" style={{width:800, height:'auto'}}/></div>

3. 打开终端，输入 `west flash` 命令将其烧录到 XIAO nRF54LM20A 上。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/6.png" style={{width:800, height:'auto'}}/></div>

#### 结果

1. 若想更详细地查看 NFC 读取信息，需要根据你的系统下载相应的 App。

- iOS ：[NFC Tools](https://apps.apple.com/app/nfc-tools/id1252962749)
- Android：[nRF NFC Toolbox](https://play.google.com/store/apps/details?id=no.nordicsemi.android.nfc)

2. 将手机的 NFC 传感器靠近 NFC 天线，浏览器会启动并搜索 “no.nordicsemi.android.nrftoolbox”，读取记录会在 nRF NFC Toolbox 中显示。

<div className="table-center">
<table align="center">
<tr>
      <td>Chrome</td>
      <td>nRF NFC Toolbox</td>
</tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_12.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_13_1.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>

## 总结

NFC 功能可以在多种场景中复用，例如数据写入和低功耗唤醒。nRF Connect SDK 提供了相应的示例代码，你可以在此基础上扩展为实际应用。例如，将 NFC 低功耗唤醒与电机控制结合，就可以实现一个简单的日常使用智能门锁。

此外，通过以上示例，我们相信你已经对在 XIAO nRF54LM20A 上实现 NFC 有了基本了解。期待你将更多创意和项目贡献到开源社区。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
