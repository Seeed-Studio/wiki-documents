---
description: Seeeduino Stalker
title: Seeeduino Stalker
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino_Stalker
last_update:
  date: 1/31/2023
  author: shuxu hu
---

**Seeeduino Stalker** 是一个功能丰富的 Arduino 兼容**无线传感器网络节点**，具有**数据记录器功能**。其模块化结构和板载外设使其能够方便地定期记录带时间戳的传感器数据。**Seeeduino Stalker** 配备了_温度传感器、带备用电源的 RTC、SD 卡插槽、Bee 插槽和太阳能锂聚合物离子电池充电器_。**Seeeduino Stalker** 是您所有跟踪、监控和控制项目的理想选择。

请注意，当前（也是最新）版本是 Seeeduino-Stalker v3。

点击下面的图片将带您到相应版本的文档。

|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Seeeduino-stalker-168.jpg)   |![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Stalkerv21.jpg)   |![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Seeduino_Stalker_v2.1.jpg)   |![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Seeduino_Stalker_v2.2.jpg)   | ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Seeduino_Stalker_v2.2.jpg)| ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Seeed_Stalker_v3-6.png)|
|---|---|---|---|---|---|
| Seeeduino Stalker v1.0  |Seeeduino Stalker v2.0   |Seeeduino Stalker v2.1   |Seeeduino Stalker v2.2   | Seeeduino Stalker v2.3  | Seeeduino-Stalker v3  |

### Seeeduino Stalker 各版本之间的比较

<table>
<tr>
<th>参数</th>
<th>v1.0</th>
<th>v2.0</th>
<th>v2.1</th>
<th>v2.2</th>
<th>v2.3</th>
<th>v3</th>
<th>备注</th>
</tr>
<tr>
<td><strong><font>产品发布日期</font></strong></td>
<td><strong><font>2009年12月23日</font></strong></td>
<td><strong><font>2010年12月17日</font></strong></td>
<td><strong><font>2011年10月3日</font></strong></td>
<td><strong><font>2011年12月27日</font></strong></td>
<td><strong><font>2011年12月29日</font></strong></td>
<td><strong><font>2014年6月6日</font></strong></td>
<td></td>
</tr>
<tr>
<td><strong>生产状态</strong></td>
<td><strong><font>已停产</font></strong></td>
<td><strong><font>已停产</font></strong></td>
<td><strong><font>已停产</font></strong></td>
<td><strong><font>已停产</font></strong></td>
<td><strong><font>生产中</font></strong></td>
<td><strong><font>生产中</font></strong></td>
<td></td>
</tr>
<tr>
<td><strong>用户 LED 和开关</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>用户 LED</td>
<td>PB5 (Arduino 引脚 13)</td>
<td>PB0 (Arduino 引脚 8)</td>
<td>PB0 (Arduino 引脚 8)</td>
<td>PB5 (Arduino 引脚 13)</td>
<td>PB5 (Arduino 引脚 13)</td>
<td>PB0 (Arduino 引脚 13)</td>
<td></td>
</tr>
<tr>
<td>用户开关</td>
<td>PB4 (Arduino 引脚 12)</td>
<td>不存在</td>
<td>不存在</td>
<td>不存在</td>
<td>不存在</td>
<td>不存在</td>
<td></td>
</tr>
<tr>
<td><strong>Arduino 兼容性</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>物理上与 Arduino 引脚兼容</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td>与 Diecimila/Duemilanove/UNO 兼容</td>
</tr>
<tr>
<td>软件上与 Arduino 兼容</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td>预装引导程序</td>
</tr>
<tr>
<td>Atmega168 变体可用</td>
<td>是</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td></td>
</tr>
<tr>
<td>Atmega328 变体可用</td>
<td>否</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td></td>
</tr>
<tr>
<td>AVRISP 6 引脚接头存在</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td></td>
</tr>
<tr>
<td>FT232RL 和 USB 连接器存在</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>在两个版本中，必须单独购买"UartSBee V3.1"或<strong>V4.0</strong>，并用于通过 Arduino IDE 下载程序。两个版本上都有与 UartSBee 配对的连接器。微控制器复位将由 DTR 自动控制。</td>
</tr>
<tr>
<td>独立运行</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td></td>
</tr>
<tr>
<td>作为 Arduino/Seeeduino 的扩展板运行</td>
<td>是</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td></td>
</tr>
<tr>
<td>在扩展板模式下可以进一步堆叠？</td>
<td>是</td>
<td>不适用</td>
<td>不适用</td>
<td>不适用</td>
<td>不适用</td>
<td>不适用</td>
<td>使用 I<sup>2</sup>C 接口</td>
</tr>
<tr>
<td><strong>实时时钟</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>芯片</td>
<td>DS1307</td>
<td>RX8025</td>
<td>DS3231</td>
<td>DS3231</td>
<td>DS3231</td>
<td>DS1337</td>
<td></td>
</tr>
<tr>
<td>板载备用电源</td>
<td>CR2032 纽扣电池</td>
<td>超级电容器</td>
<td>CR2032 纽扣电池</td>
<td>CR2032 纽扣电池</td>
<td>CR2032 纽扣电池</td>
<td>CR1220 纽扣电池</td>
<td></td>
</tr>
<tr>
<td>接口</td>
<td>I<sup>2</sup>C</td>
<td>I<sup>2</sup>C</td>
<td>I<sup>2</sup>C</td>
<td>I<sup>2</sup>C</td>
<td>I<sup>2</sup>C</td>
<td>I<sup>2</sup>C</td>
<td></td>
</tr>
<tr>
<td><strong>I<sup>2</sup>C 接口</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>直接连接到微控制器 PC4 和 PC5（即 SCL 和 SDA）的连接器</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td></td>
</tr>
<tr>
<td>板载电平转换，用于在微控制器以 3.3v 模式运行时连接到 5.0 伏设备</td>
<td>是（使用 PCA9306）</td>
<td>是（使用 N 沟道增强型 MOSFET）</td>
<td>是（使用 N 沟道增强型 MOSFET）</td>
<td>是（使用 N 沟道增强型 MOSFET）</td>
<td>是（使用 N 沟道增强型 MOSFET）</td>
<td>是（使用 N 沟道增强型 MOSFET）</td>
<td></td>
</tr>
<tr>
<td><strong>电源供应</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>来自直流电源</td>
<td>是（5-12V DC）</td>
<td>是（连接到太阳能电池连接器，但仅施加 5.0 伏）</td>
<td>是（连接到太阳能电池连接器，但仅施加 5.0 伏）</td>
<td>是（连接到太阳能电池连接器，但仅施加 5.0 伏）</td>
<td>是（连接到太阳能电池连接器，但仅施加 5.0 伏）</td>
<td>是（连接到太阳能电池连接器，但仅施加 5.0 伏）</td>
<td></td>
</tr>
<tr>
<td>来自 USB</td>
<td>是（与 UartSBee V3.1 一起使用时）</td>
<td>是（与 UartSBee V3.1 一起使用时）</td>
<td>是（与 UartSBee V4.0 或 FTDI 电缆一起使用时）</td>
<td>是（与 UartSBee V4.0 或 FTDI 电缆一起使用时）</td>
<td>是（与 UartSBee V4.0 或 FTDI 电缆一起使用时）</td>
<td>是（与 UartSBee V4.0 或 FTDI 电缆一起使用时）</td>
<td></td>
</tr>
<tr>
<td>来自太阳能板</td>
<td>否</td>
<td>是（存在单独连接器）</td>
<td>是（存在单独连接器）</td>
<td>是（存在单独连接器）</td>
<td>是（存在单独连接器）</td>
<td>是（存在单独连接器）</td>
<td></td>
</tr>
<tr>
<td>来自锂聚合物电池</td>
<td>否</td>
<td>是（存在单独连接器）</td>
<td>是（存在单独连接器）</td>
<td>是（存在单独连接器）</td>
<td>是（存在单独连接器）</td>
<td>是（存在单独连接器）</td>
<td></td>
</tr>
<tr>
<td>电池电压测量</td>
<td>否</td>
<td>是（连接到 ADC7 的跳线）</td>
<td>是（连接到 ADC7 的跳线）</td>
<td>是（连接到 ADC7 的跳线）</td>
<td>是（连接到 ADC7 的跳线）</td>
<td>是（电池电压连接到 ADC7）</td>
<td></td>
</tr>
<tr>
<td>电池充电？</td>
<td>否</td>
<td>是（通过太阳能电池，由 CN3063 芯片管理）</td>
<td>是（通过太阳能电池，由 CN3063 芯片管理）</td>
<td>是（通过太阳能电池，由 CN3063 芯片管理）</td>
<td>是（通过太阳能电池，由 CN3063 芯片管理）</td>
<td>是（通过太阳能电池，由 CN3065 芯片管理）</td>
<td></td>
</tr>
<tr>
<td>电池充电状态读取？</td>
<td>否</td>
<td>是（数字引脚 6 和 7）</td>
<td>是（数字引脚 6 和 7）</td>
<td>是（ADC6）</td>
<td>是（ADC6）</td>
<td>是（ADC6）</td>
<td></td>
</tr>
</table>

## 技术支持与产品讨论

   <br />
感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>