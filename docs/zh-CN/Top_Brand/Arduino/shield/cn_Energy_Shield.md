---
description: Energy_Shield
title: Energy Shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Energy_Shield
last_update:
  date: 01/11/2023  
  author: Eico 

no_comments: false # for Disqus

---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Energy_Shield.jpg" alt="pir" width={600} height="auto" /></p>

Energy Shield 是一个基于锂聚合物电池的电源扩展板，可以让您的项目持续运行。只要有可用的电源，它就会保持电池充电状态。它接受广泛的电源输入，从通过 JST 连接器连接的常见太阳能电池板和通过微控制器上的 USB 端口输入的 USB 电源，到通过 Arduino 上的 DC 插孔输入的 9V 和 12V 直流适配器。同时，它不仅可以为您的 Arduino 项目供电，扩展板上还配备了标准 USB 端口，还能够拯救您的移动电子设备免于电池耗尽，如手机、mp3 播放器和平板电脑。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/energy-shield-p-1373.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- 接受广泛的电源输入范围
- 过压保护
- 85%+ 高功率转换效率
- 全面的 LED 指示灯显示充电和工作状态

## 规格参数

**电源输出规格**

<table align="center">
  <tbody>
  <tr>
    <td><h3>项目</h3></td>
    <td><h3>最小值</h3></td>
    <td><h3>典型值</h3></td>
    <td><h3>最大值</h3></td>
    <td><h3>单位</h3></td>
  </tr>
  <tr>
    <td><h4>电压</h4></td>
    <td><h4>4.9</h4></td>
    <td><h4>5</h4></td>
    <td><h4>5.1</h4></td>
    <td><h4>V</h4></td>
  </tr>
  <tr>
    <td><h4>电流</h4></td>
    <td><h4>5</h4></td>
    <td><h4>/</h4></td>
    <td><h4>750</h4></td>
    <td><h4>mA</h4></td>
  </tr>
  </tbody></table>

**通过 JST 连接器的电源输入规格**

| 项目     | 最小值 | 典型值 | 最大值 | 单位 |
|----------|--------|--------|--------|------|
| 有效电压 | 4.5    | 5      | 5.5    | V    |
| 电流     | 1      | /      | 800    | mA   |
| 保护电压 | /      | /      | 12     | V    |

<table align="center">
  <tbody>
  <tr>
    <td><h3>项目</h3></td>
    <td><h3>最小值</h3></td>
    <td><h3>典型值</h3></td>
    <td><h3>最大值</h3></td>
    <td><h3>单位</h3></td>
  </tr>
  <tr>
    <td><h4>有效电压</h4></td>
    <td><h4>4.5</h4></td>
    <td><h4>5</h4></td>
    <td><h4>5.5</h4></td>
    <td><h4>V</h4></td>
  </tr>
  <tr>
    <td><h4>电流</h4></td>
    <td><h4>1</h4></td>
    <td><h4>/</h4></td>
    <td><h4>800</h4></td>
    <td><h4>mA</h4></td>
  </tr>
  <tr>
    <td><h4>保护电压</h4></td>
    <td><h4>/</h4></td>
    <td><h4>/</h4></td>
    <td><h4>12</h4></td>
    <td><h4>V</h4></td>
  </tr>
  </tbody></table>

**工作模式说明**

Energy Shield 可以从三个不同的端口获取电流来为电池充电，包括 JST 连接器、Arduino 上的 USB 端口和 DC 插孔。电压范围如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Working_Mode_Explanation.jpg" alt="pir" width={600} height="auto" /></p>

当输入电压低于 6.6V 时，您可以通过工作模式选择开关在"充电"和"开启"之间切换 Energy Shield 的工作模式。在"充电"状态下，锂聚合物电池不输出电力，只从任何现有电源获取电流。在"开启"状态下，电池在充电的同时也为整个系统供电。

但是，当输入电压超过 6.6V 时，无论开关状态如何，Energy Shield 都会被强制进入"充电"模式。

## 硬件概述

---------
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Energy_Shield_Interface_V2.0.jpg" alt="pir" width={600} height="auto" /></p>

**硬件配置**

U1: ISL97516 IC，升压芯片；

U3: CN3065 IC，充电管理芯片；

U4,U8: LM293D IC，双差分比较器；

充电指示灯：在充电状态下点亮；

电量指示灯：指示电池的剩余电量；

SW2 按钮：检查电池电量；

**Arduino 上使用的引脚**

Vin 引脚：将 DC 插座的电源传输到电池进行充电；

5V 引脚：将 USB 端口的电源传输到电池进行充电；

**其他接口**

JST 插座：为需要 JST 连接器的外部电源提供，如太阳能电池板；

电池插座：用于连接锂聚合物电池；

USB 端口：为其他设备输出 5V 电源；

使用方法
-----

### 1. 充电示例

您可以使用多种外部电源为锂聚合物电池充电。这里我们向您展示两种常见电源的使用方法。

**1) 太阳能电池板**

太阳能电池板是我们使用的最常见的绿色电源之一。一个单元的典型输出约为 5V。我们在商店提供[大量太阳能电池板](https://www.seeedstudio.com/s/solar%20panel.html)。它们都预装了 JST 连接器，可以与 Energy Shield 无缝匹配。

将太阳能电池板插入扩展板上的 JST 插座，如下所示。

:::note
确保有足够的光线提供相当的电流。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Charge_using_Solar_Panel_.jpg" alt="pir" width={600} height="auto" /></p>

现在，按下 SW2。您会发现"充电"指示 LED 点亮。另一个指示灯"电量"指示电池的剩余电量。当剩余电量低于 30% 时，它变红。当剩余电量在 30% - 80% 之间时，它变黄。否则它是绿色的。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Remaining_power_indicator.jpg" alt="pir" width={600} height="auto" /></p>

**2) 9V 适配器**

如果您使用 DC 适配器为您的项目供电，那么 9V 适配器对您来说不会陌生。通过将 9V 适配器连接到 Arduino 的 DC 插座，您可以运行项目并同时为电池充电。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Remaining_power_indicator.jpg" alt="pir" width={600} height="auto" /></p>

![](https://files.seeedstudio.com/wiki/Energy_Shield/img/Charge_using_9V_Jack.jpg)

### 2. 扩展板为设备供电

**1) 为 Arduino 供电**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Charge_for_Arduino.jpg" alt="pir" width={600} height="auto" /></p>

将工作模式选择开关切换到"ON"。检查 Arduino 上的电源指示 LED，看看它是否正常工作。

**2) 为移动设备供电**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Charge_for_Phone.jpg" alt="pir" width={600} height="auto" /></p>

使用扩展板上的标准 USB 端口为移动设备供电。

### 3. 转换效率

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Convert_effect.jpg" alt="pir" width={600} height="auto" /></p>

上图描述了 Energy Shield 升压电路的转换效率。升压电路将锂聚合物电池的电压（通常为 4.2V 或随着剩余电量下降为 3.7V）升压到 5V 并向外供电。您可以发现当输出电流约为 200mA 时，这种转换效率达到峰值。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Energy_Shield/res/Energy_Shield_Eagel_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- [Energy Shield Eagle 文件](https://files.seeedstudio.com/wiki/Energy_Shield/res/Energy_Shield_Eagel_File.zip)
- [CN3065 数据手册](http://www.consonance-elec.com/pdf/datasheet/DSE-CN3065.pdf)
- [ISL97516 数据手册](https://files.seeedstudio.com/wiki/Energy_Shield/res/ISL97516.pdf)
- [LM293D 数据手册](https://files.seeedstudio.com/wiki/Energy_Shield/res/LM293D.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Energy_Shield -->

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