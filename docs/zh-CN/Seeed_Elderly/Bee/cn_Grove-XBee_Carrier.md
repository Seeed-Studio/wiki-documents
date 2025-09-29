---
description: Grove - XBee 承载板
title: Grove - XBee 承载板
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-XBee_Carrier
last_update:
  date: 2/15/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Bee_Stem.jpg)

Grove - XBee 承载板是一款为 Bee 系列和 Grove 单元设计的无线传感器网络 (WSN) 基板。它主要适用于独立的 Bee 节点，例如带有 ATMega328 的 RFBee、Wifi Bee，以及 XBee (Zigbee) 模块。它兼容 [RFBee](/cn/RFbee_V1.1-Wireless_Arduino_compatible_node "RFbee V1.1 - Wireless Arduino compatible node")、[Wifi Bee](/cn/Wifi_Bee "Wifi Bee")、[XBee](http://garden.seeedstudio.com/index.php?title=Bee_series#ZigBee "Bee_series#ZigBee") 和 Bluetooth Bee。除了一个 Bee 插座外，板上还有两个 Grove 连接器。该板可以通过锂电池或 USB 电缆供电。您可以使用无线充电器、太阳能板或 USB 电缆为电池充电。板载的 FT232RL 芯片可以直接帮助将程序下载到 Bee 模块。

不带 ATMega328 的 Bee（例如 Bluetooth Bee）只能通过板载 FT232RL（USB 转 UART）进行配置。这些 Bee 不适合独立应用。

当未连接任何 Bee 模块时，板载 FT232RL 可以像其他任何 3.3V USB 转 UART 接口一样使用。这对于通过串口编程 3.3V MCU 非常有用。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/grove-xbee-carrier-p-905.html?cPath=132_134)

## 特性

---

* 兼容 Bee 的插座

* 两个 Grove 连接器

* 两个 Grove 占位符

* 用于电源、充电指示和 UART 传输的 LED

* 电源开关

* 复位按钮

## 应用场景

---

* 使用独立 Bee 节点（如 [Wifi Bee](/cn/Wifi_Bee "Wifi Bee")）的无线传感器网络。

* 使用 FT232RL 配置 Bee 的辅助工具。

* 使用板载充电控制器为锂离子电池充电。

* 基于 FT232RL 的 3.3V USB-UART。

## 注意事项

---
<font color="red">
</font>

* 请以正确方向插入 Bee。使用丝印上的 Bee 轮廓作为参考。

## 规格
---
<table>
<tr>
<th>项目</th>
<th>最小值</th>
<th>典型值</th>
<th>最大值</th>
<th>单位</th>
</tr>
<tr>
<th>电压</th>
<td>3.0</td>
<td>3.3</td>
<td>3.6</td>
<td>VDC</td>
</tr>
<tr>
<th>充电控制器</th>
<td colspan="4">CN3063</td>
</tr>
<tr>
<th>充电器（锂聚合物电池充电电压）</th>
<td colspan="4">4.4V 至 6V（根据 CN3063 规格）</td>
</tr>
<tr>
<th>充电电流</th>
<td colspan="4">最大 500mA</td>
</tr>
<tr>
<th>3.3V LDO</th>
<td colspan="4">低噪声和微功耗类型，适用于电池应用。</td>
</tr>
<tr>
<th>I/O 逻辑</th>
<td colspan="4">3.3V 逻辑</td>
</tr>
</table>

## 接口功能

---
![](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Xbee_Carrier_Interface.jpg)

**U2:** RT9167A_33PB IC，3.3V LDO 低噪声微功率稳压器  
**U3:** CN3083 IC，锂电池充电控制器（通过太阳能板充电）  
**U4:** FT232RL IC，USB转串口UART接口  

## 使用方法

---
使用 RFBee 时，以下是 RFBee 上 ATmage168 的引脚分配，用于 Arduino IDE：

引脚 5 是 Grove 接口的 I/O - 黄色线  
引脚 6 是 Grove 接口的 I/O - 白色线  

引脚 16 可能需要拉低以提供足够的功率给 I/O Grove [通过 MOSFET]  
引脚 17 可能需要拉低以提供足够的功率给 I2C Grove [通过 MOSFET]  

**注意：** 您可以使用两根 Grove 电缆，其中一根的白色和黄色线交换，以访问两个 I/O。

### 硬件安装

#### 充电

<!-- 现在您可以从 **SeeedStudio** [电池和充电器](/cn/Solar_Charger_Shield_V2.2 "Solar_Charger_Shield_V2.2") 中选择适合您应用的电池 -->

* 将 3.7V LiPo 电池连接到 **BAT** JST 插座。

* 将电源（如太阳能板）连接到 **CHARGER** JST 插座。

* 电池将持续充电。充电结束时，标记为“OK”的 LED 会亮起。

![](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Bee_Stem_with_LiPOBattery_Being_Charged_By_SolarCell.jpg)

#### 使用独立 Bee 节点

Bee 节点是独立的 Arduino 兼容无线节点。**SeeedStudio** 有两个这样的节点 - [Wifi Bee](/cn/Wifi_Bee "Wifi Bee") 和 [RFBee](/cn/RFbee_V1.1-Wireless_Arduino_compatible_node "RFbee V1.1 - Wireless Arduino compatible node")。

* 下图展示了 [WiFi Bee](/cn/Wifi_Bee "Wifi Bee") 与 **Grove - XBee Carrier** 的连接。

* 任何 Grove 模块都可以连接到提供的 Grove 插座。

* WiFi Bee 板载 **AtMega328P** 的编程通过 USB 端口连接到 PC 进行。（使用 FT232RL）

![](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Bee_Stem_Connected_to_Wifi_BEE_and_A_Grove.jpg)

Bee Stem 连接到 Wifi BEE 和一个 Twig.jpg

* 请参考 [Wifi Bee 使用文档中的编程示例](http://garden.seeedstudio.com/index.php?title=Wifi_Bee#Usage "Wifi_Bee#Usage")

![](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Bee_Stem_Connected_To_RFBee_And_TwoTwigs.jpg)

Bee Stem 连接到 RFBee 和两个 Twig.jpg

#### 使用 Bee 模块

本节介绍那些没有预编程 Arduino 引导程序的 MCU 的 Bee 模块。这些模块通常仅作为无线收发器使用。这些 **Bee 模块**（如 Bluetooth Bee 等）也可以与 PC 通信。在这种情况下，**Grove - XBee Carrier** 作为这些 Bee 的载体，提供必要的电源和通过 FT232RL USB 到 UART 的通信接口。

<!-- *   在下面的示例中，[Bluetooth Bee](/cn/Bluetooth_Bee "Bluetooth Bee") 连接到 **Grove - XBee Carrier** 并通过 USB-UART 配置 -->

![](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Stem_XBee_Carrier_Connected_to_BluetoothBee.jpg)

* Bluetooth Bee 和 PC 的通信通过串口终端应用程序捕获。

* 您可以在下面的截图中看到命令及其回复。

* Bluetooth Bee 被置于 INQ 模式，并检测到附近的一个蓝牙设备。

![](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Stem_XBee_Carrier_BluetoothBee_Commands.png)

<!-- *   有关使用 [Bluetooth Bee](/cn/Bluetooth_Bee "Bluetooth Bee") 的更多信息，请参考 [Bluetooth Bee 命令文档](/cn/Bluetooth_Bee#Commands_to_change_default_configuration "Bluetooth Bee")。 -->

### 编程

```
/*
  用于 XBee Carrier 和 RF Bee 的测试代码

  将 PD5（例如：Grove 继电器）打开一秒钟，然后关闭一秒钟，重复此过程。
*/

void setup()
{
    // 将数字引脚初始化为输出 [引脚 5 是 Grove 接口的 I/O]
    pinMode(5, OUTPUT);

    // 以下代码确保继电器能够吸合 [为 Grove 提供电源]
    pinMode(16, OUTPUT);
    digitalWrite(16, LOW);
}

void loop() {
    digitalWrite(5, HIGH);   // 打开 LED
    delay(1000);             // 等待一秒
    digitalWrite(5, LOW);    // 关闭 LED
    delay(1000);             // 等待一秒
}
```

## 版本追踪

---
<table>
<tr>
<th>版本</th>
<th>描述</th>
<th>发布日期</th>
</tr>
<tr>
<td>v0.9b</td>
<td>首次公开发布</td>
<td>2011年7月13日</td>
</tr>
</table>

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/res/PCBA-Grove%20XBee%20Carrier_Eagle.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---

* [Grove - XBee Carrier Eagle 文件](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/res/PCBA-Grove%20XBee%20Carrier_Eagle.rar)

* [Grove - XBee Carrier PDF 原理图文件](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/res/Bee_Stem_v0.9b.pdf)

* [CN3063](http://www.consonance-elec.com/pdf/%E6%8A%80%E6%9C%AF%E8%AF%B4%E6%98%8E%E4%B9%A6/DSC-CN3063.pdf)

* [RT9167A_33PB](http://www.richtek.com/download_ds.jsp?s=238)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>