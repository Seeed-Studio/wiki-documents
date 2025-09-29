---
description: SEEED IOT BUTTON FOR AWS
title: SEEED IOT BUTTON FOR AWS
keywords:
- IOT_Button_For_AWS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SEEED-IOT-BUTTON-FOR-AWS
last_update:
  date: 1/13/2023
  author: jianjing Huang
---



![](https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/Side.png)

Seeed IoT Button For AWS 是一个基于 Wi-Fi 的可编程按钮，易于配置且使用简单。您可以使用 Seeed IoT Button For AWS 快速收集客户反馈，而无需让客户填写耗时的问卷调查。它专为企业和开发者设计，可使用 [AWS IoT 1-Click 服务](https://docs.aws.amazon.com/iot-1-click/latest/developerguide/what-is-1click.html) 轻松集成到现有的业务工作流程和系统中。此 IoT 按钮完全兼容官方 AWS IoT 1-Click iOS 应用和 Android 应用。该设备的电池为 NCR18650B 可充电锂离子电池。请注意包装中不包含电池，电池可在普通便利店购买，客户需要自行准备。我们推荐使用松下 NCR18650B 3.6V 3400mAh 电池。此 IoT 按钮配有支架。客户可以将其粘贴在墙上或其他表面上，方便将 IoT 按钮放入和取出支架。Seeed IoT Button for AWS 支持三种点击类型：单击、双击和长按，以及 3 个 LED 用于不同的指示。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Seeed-IoT-Button-for-AWS-p-4527.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- 单击/双击/长按点击事件
- 板载电源/事件/Wi-Fi 配置状态 LED
- 配备 Realtek RTL8720DN，双频 2.4Ghz / 5Ghz Wi-Fi
- 可拆卸和可充电的 NCR18650B 电池
- 电池极性反接保护和指示
- USB Type-C 充电
- 可粘贴支架

## 规格

|参数|值|
|---|---|
|尺寸|92\*32\*25mm|
|MCU|Realteak, RTL8720DNL 20MHz Cortex M0; 200MHz Cortex M4F|
|闪存|4MB |
|按钮| 100,000 次循环|
|LED|RGB|
|Wi-Fi|802.11 a/b/g/n 2.4GHz & 5GHz|
|蓝牙|BLE 5.0|
|电池|3.6V 锂离子 18650 可充电电池|
|充电接口|USB Type-C|
|充电电流|500mA|
|充电时间|4-6 小时（根据电池容量而定）|
|电池保护|过充、过流、过放、反极性保护|
|固件更新|支持 OTA|

## 硬件概述

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/Seeed_IOT_Button_HardwareOverview.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/Seeed_IOT_Button_HardwareOverview.png" /></a></p>
</figure>
</div>

### LED 状态指示

<table style={{borderCollapse: 'collapse', borderSpacing: 0}} className="tg"><tbody><tr><th style={{fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>电源 LED 状态</th><th style={{fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>指示</th></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>电池反接</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>红色</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>电池充电中</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>绿色常亮</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>电池充电完成</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>绿色熄灭</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', fontWeight: 'bold', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>事件 LED 状态</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', fontWeight: 'bold', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>指示</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>红色常亮</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>证书未烧录或证书无效</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>白色闪烁 -&gt; 绿色</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>事件发送成功</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>白色闪烁 -&gt; 红色</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>事件发送失败</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>白色闪烁 -&gt; 橙色</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Wi-Fi 连接失败，请检查路由器或更改网络配置</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>白色闪烁 -&gt; 紫色</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>服务器连接失败，请检查网络环境</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', fontWeight: 'bold', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>Wi-Fi 配置 LED 状态</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', fontWeight: 'bold', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>指示</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>蓝色闪烁</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>BLE 网络配置中</td></tr></tbody></table>

## 入门指南

### 上电

入门的第一步是给 IoT 按钮上电。有两种方式给按钮上电：

#### 方法 1 - USB Type-C

只需将 USB Type-C 线缆插入 USB 端口即可给设备上电。您应该看到电源指示 LED 闪烁**绿色**一次。

:::note
绿灯闪烁一次后，您还应该看到 LED 以非常低的亮度闪烁绿光。您可以在较暗的环境中看到它。
:::

#### 方法 2 - 使用电池

您也可以使用电池给 IoT 按钮上电。打开外壳（请参考下面的 gif）并放入电池。安装电池后，您还需要通过 USB Type-C 将 IoT 按钮连接到计算机或电源适配器**一次**以初始化电池电路。您应该看到电源指示 LED 为**绿色**。现在您可以移除 USB 连接，LED 将熄灭，一切就绪。

:::note
当电源状态 LED 为红色时，表示电池反接！
:::

#### 如何取出外壳

以下 gif 演示了如何使用包装中提供的三角塑料撬开工具取出外壳。

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/takingApart.gif"/></div>

### 在按钮上设置 Wi-Fi

1.从 Apple App Store 或 Google Play Store 下载最新的 AWS IoT 1-Click 应用

2.启动 **AWS IoT 1-Click 应用**并使用 Amazon AWS 账户注册

:::note
请确保蓝牙已开启，否则会出现如图所示的错误。
:::

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/Bluetooth-error.jpg"/></div>

3.在应用中按下 **Claim with Device ID**。在应用中按下 **Scan** 并扫描 Seeed IoT Button for AWS 底部的 **DSN**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/05.png"/></div>

4.按下 **Configure**

5.按住您的 **Seeed IoT Button for AWS** 7 秒钟，直到蓝灯闪烁

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/07-1.png"/></div>

6.从网络列表中选择一个 Wi-Fi 网络。这是您希望按钮使用的 Wi-Fi 网络

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/08.png"/></div>

7.输入 Wi-Fi 网络的密码（如果有）并继续

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/09.png"/></div>

8.等待应用中出现配置成功并按下 **Finish**。配置完成

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/10.png"/></div>

现在您可以开始使用您的 AWS 1-Click 服务了！

请确保按照[**此处**](https://wiki.seeedstudio.com/cn/SEEED-IOT-BUTTON-FOR-AWS/#ota-update)更新到最新固件。

### 操作说明

- **单击：** 发送单击事件

- **双击：** 发送双击事件

- **长按(2s~5s)：** 发送长按事件
  
- **长按(>7s)：** 进入 BLE 网络配置模式。在此模式下，其他事件被阻止。如果您需要手动退出 BLE 配网模式，可以再次长按超过 7 秒，或者会在两分钟后自动退出。

## OTA 更新

长按 **15 秒**开始搜索新版本升级：

1. **长按(>7s)**，Wi-Fi 配置 LED 开始闪烁。如果现在释放将进入网络配置模式。

2. 继续**按住 >8s（总计 > 15s）**，事件状态 LED 开始闪烁蓝色并进入 OTA 模式。

**当是最新版本时**，事件状态 LED 从**蓝色**闪烁变为**绿色**。更多信息请参考下表：

<table style={{borderCollapse: 'collapse', borderSpacing: 0}} className="tg"><tbody><tr><th style={{backgroundColor: '#9b9b9b', borderColor: '#000000', borderStyle: 'solid', borderWidth: 1, color: '#ffffff', fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', overflow: 'hidden', padding: '10px 5px', textAlign: 'center', verticalAlign: 'middle', wordBreak: 'normal'}}>事件 LED 状态</th><th style={{backgroundColor: '#9b9b9b', borderColor: '#000000', borderStyle: 'solid', borderWidth: 1, color: '#ffffff', fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', overflow: 'hidden', padding: '10px 5px', textAlign: 'center', verticalAlign: 'middle', wordBreak: 'normal'}}>指示</th></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>蓝色闪烁 -&gt; 绿色</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>更新发送成功</td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>蓝色闪烁 -&gt; 红色</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>更新发送失败</td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>蓝色闪烁 -&gt; 橙色</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Wi-Fi 连接失败，请检查路由器或更改网络配置</td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>蓝色闪烁 -&gt; 紫色</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>服务器连接失败，请检查网络环境</td></tr></tbody></table>

## 常见问题

**Q1.** 外壳 SN（序列号）被擦掉了。

在 AWS 按钮外壳内部，电池下方还有一个备用 SN 贴纸。

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/SN.png"/></div>

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