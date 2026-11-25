---
title: Seeed Studio XIAO nRF54L15 系列的 NFC
description: 使用 nRF Connect SDK 在 XIAO nRF54L15 和 XIAO nRF54L15 Sense 上使用 NFC 接口。
keywords:
  - xiao
  - nrf54l15
  - nfc
  - ncs
slug: /xiao_nrf54l15_nfc
url: https://wiki.seeedstudio.com/cn/xiao_nrf54l15_nfc/
---

<div className="get_one_now_container" style={{textAlign: 'center'}}>
  <a
    className="get_one_now_item"
    href="https://www.seeedstudio.com/XIAO-nRF54L15-p-6493.html"
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

## 介绍

近场通信（NFC）是一种在两台设备之间无线传输少量数据的技术。它使用非常简单的协议，因此连接速度比低功耗蓝牙更快，但由于依赖磁感应，两台设备必须非常接近——小于 10 cm——才能连接。XIAO nRF54L15 将 nRF54L15 片上 NFCT 外设引出到两个引脚，让你可以把开发板当作 NFC 标签使用，手机或读卡器可以轻触来读取或写入。该外设同时支持 Type 2 和 Type 4 标签：下面的文本记录示例是 Type 2 只读文本标签，而可写 NDEF 示例是 Type 4 读写标签。

Nordic NFC 协议参考请参阅 [Near Field Communication (NFC)](https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/protocols/nfc/index.html)；规范本身请参阅 [NFC Forum specification overview](https://nfc-forum.org/build/specifications)。


## 硬件准备

你需要一块 XIAO nRF54L15 和一个 NFC 天线。裸 L15 板**没有板载 NFC 线圈**——NFC 引脚只被引出到 N1 和 N2 焊盘——因此要想让下面的任一示例能够被扫描，必须使用外部天线。

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO nRF54L15 Sense</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html"
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
      </td>
    </tr>
  </table>
</div>

:::tip
Nordic NFC 天线在 Seeed Studio Bazaar 上没有单独销售，因此你需要从其他渠道购买。
:::


### 焊接天线

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/0.png" style={{width:600, height:'auto'}}/></div>

在 XIAO nRF54L15 上，NFC 引脚为 P1.02 和 P1.03。将外部天线焊接到 N1 和 N2 焊盘；它们在板上的位置如上图所示。

:::caution
NFC 引脚不区分正负。细间距测试点焊接难度较大——请采取安全防护措施以避免人身伤害和设备损坏，或者改用飞线连接。
:::

## 软件

### NFC 文本记录（Type 2 只读文本标签）

本示例演示如何通过 NFC 读取文本信息。

1. 在扩展中创建一个空白例程，并选择复制现有例程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_3.png" style={{width:800, height:'auto'}}/></div>

2. 输入 nfc，选择 NFC text Records 示例

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/1.png" style={{width:800, height:'auto'}}/></div>

3. 选择存储路径

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/2.png" style={{width:800, height:'auto'}}/></div>

4. 打开项目，在对应扩展下添加 XIAO nRF54L15 配置并编译。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/1.png" alt="Adding the XIAO nRF54L15 board configuration and compiling" style={{width:1000, height:'auto'}}/></div>


5. 打开终端，输入命令 `west flash` 将固件烧录到 XIAO nRF54L15。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/2.png" alt="Flashing the XIAO nRF54L15 with west flash" style={{width:1000, height:'auto'}}/></div>


#### 结果

请选择一部带有 NFC 功能的手机来尝试本实验。

1. 若要更详细地查看 NFC 读取信息，你需要根据系统下载相应的应用。

- iOS ：[NFC Tools](https://apps.apple.com/app/nfc-tools/id1252962749)
- Android：[nRF NFC Toolbox](https://play.google.com/store/apps/details?id=no.nordicsemi.android.nfc)

2. 将手机的 NFC 区域靠近 NFC 天线，以读取详细的 NFC 信息。

手机上显示的文本信息为：

```txt
Hello World!
Hallo Verden!
Witaj świecie!
```
<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/10.gif"
    alt="NFC tag read on a phone"
    style={{width: 800, height: 'auto'}}
  />
</div>

### NFC 读写示例：可写 NDEF 消息（Type 4 读写标签）

这是 Nordic Connect SDK 的 **[writable NDEF message](https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/samples/nfc/writable_ndef_msg/README.html)** 示例，为 XIAO nRF54L15 构建。 



1. 从官方 nRF Connect SDK 拉取该示例。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/NFC/1.png" style={{width:600, height:'auto'}}/></div>




2. 构建该示例。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/4.png" alt="Building the writable NDEF message sample" style={{width:1000, height:'auto'}}/></div>


3. 烧录

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/5.png" alt="Flashing the writable NDEF message sample" style={{width:1000, height:'auto'}}/></div>
<br/>


#### 结果

1. 若要详细查看 NFC 内容，请为你的手机安装相应的应用。

- iOS: [NFC Tools](https://apps.apple.com/app/nfc-tools/id1252962749)
- Android: [nRF NFC Toolbox](https://play.google.com/store/apps/details?id=no.nordicsemi.android.nfc)

2. 给开发板上电，并将手机的 NFC 区域靠近天线。浏览器会打开 `http://www.nordicsemi.com`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/NFC/20261111-143425.630-4.jpg" style={{width:200, height:'auto'}}/></div>



3. 使用 NFC Tools（或类似应用）将标签覆盖为你自己的 NDEF 消息。由于这是一个读写示例，你可以输入一个不同的自定义 URL，然后轻触标签进行写入——下次再读取标签时，内容就会发生变化。

<div className="table-center">
<table align="center">
<tr>
<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/NFC/20261111-143425.630-2.jpg" style={{width:200, height:'auto'}}/></div></td>
<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/NFC/20261111-143425.630-5.jpg" style={{width:200, height:'auto'}}/></div></td>
<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/NFC/20261111-143425.630-1.jpg" style={{width:200, height:'auto'}}/></div></td>
</tr>
</table>
</div>




## 总结

NFC 可以在许多场景中复用——数据交接、低功耗唤醒、配对——而 nRF Connect SDK 为每种场景都提供了相应示例。你可以在此读写示例的基础上扩展为实际应用，例如将 NFC 低功耗唤醒与电机控制结合，构建一个简单的智能门锁。在天线焊好、示例运行之后，剩下的就交给你的创意以及你对开源社区的贡献了。




## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
