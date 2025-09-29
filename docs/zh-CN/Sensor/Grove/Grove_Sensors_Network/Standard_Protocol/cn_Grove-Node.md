---
description: Grove - 节点
title: Grove - 节点
keywords:
- Grove_Sensors_Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Node
last_update:
  date: 1/20/2023
  author: jianjing Huang
---


Grove - 节点是一个简单灵活的电子模块，用于连接物理对象。它基于 IFTTT（如果这样-那么那样）的理念。它有两个 Grove 连接器来访问各种 Grove 模块。通过预编程的 IFTTT 固件，可以轻松创建带有模拟传感器和 0/1 执行器的物理对象。


它集成了蓝牙低功耗（BLE），使其极易与手机和平板电脑交互。为了扩展其可用性，内置了 DFU 引导加载程序，可通过 BLE 进行无线重新编程。它支持 ARM mbed 平台，可使用数百个库编写新固件。

## 特性

* 使用 IFTTT 模式

* 两个 Grove 连接器用于传感器和执行器

  * 与模拟传感器和高/低执行器即插即用

    * 灵活的 4 个 GPIO，全部可用于 PWM、ADC、I2C 和 UART

* Nordic nRF51822 多协议蓝牙® 4.0 低功耗/2.4GHz RF SoC

  * ARM Cortex-M0 处理器

    * 256kB 闪存，16kB RAM

* 板载电池充电电路

* OTA 固件

* mbed 支持

  * 在线 IDE

    * 易于使用的 C/C++ SDK

    * 便捷的库

## 规格参数

* 工作电压：3.3Vdc

* 电池容量：80mAH

* 最大充电电流：100mA

* Grove 接口供电电压：3.3V

* Grove 接口供电电流：100mA 最大

* Grove 接口输入电压：0~3.3V

## 引脚图

## 入门指南

* 开启 Grove 节点

将 Grove 节点连接到电池或 USB 线缆，然后按下按钮，它将运行。

<dl><dd>

* 双击 - 运行引导加载程序，红色 LED 将点亮。

* 其他情况 - 运行应用程序，绿色 LED 将闪烁。

</dd></dl>

* 关闭 Grove 节点

<dl><dd>

* 在引导加载程序模式下 - 等待一段时间进入应用程序。

* 在应用程序模式下 - 长按按钮直到所有 LED 熄灭

</dd></dl>

### 预编程固件入门

![](https://files.seeedstudio.com/wiki/Grove-Node/img/Milcandy_IFTTT.jpg)

首先，我们需要一个**输入** Grove 模块来感知物理世界。预编程固件仅支持模拟输入传感器或 0/1 数字输入传感器。
以下来自 Seeedstudio 的 Grove 模块可用作**输入**：

<table>
  <tbody><tr>
      <th>模块名称</th>
      <th>测量参数</th>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td width={300}> Grove - 80cm 红外接近传感器</td>
      <td width={400}> 距离</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - 按钮</td>
      <td colSpan={3} rowSpan={1}>开/关</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - 电流传感器</td>
      <td colSpan={3} rowSpan={1}> 电流</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - 气体传感器(MQ2&amp;MQ5)</td>
      <td colSpan={3} rowSpan={1}> 气体质量</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - 光传感器</td>
      <td colSpan={3} rowSpan={1}> 光线</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - 磁性开关</td>
      <td colSpan={3} rowSpan={1}> 磁性</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - 湿度传感器</td>
      <td colSpan={3} rowSpan={1}> 湿度</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - PIR 运动传感器</td>
      <td colSpan={3} rowSpan={1}> PIR 运动</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - 旋转角度传感器</td>
      <td colSpan={3} rowSpan={1}> 旋转角度</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - 倾斜开关</td>
      <td colSpan={3} rowSpan={1}>  物体位置</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - 声音传感器</td>
      <td colSpan={3} rowSpan={1}> 声音</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - 温度传感器</td>
      <td colSpan={3} rowSpan={1}> 温度</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - 触摸传感器</td>
      <td colSpan={3} rowSpan={1}> 人体触摸</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - 水传感器</td>
      <td colSpan={3} rowSpan={1}> 水</td>
      </tr>
    </tbody>
    </table>

其他不兼容 Grove 的模拟传感器需要稍作调整。只需将信号输出连接到 Grove 连接器的引脚4，然后连接 VCC 和 GND。_注意，只有输出模拟值或数字 1/0 值的传感器才能与预编程固件一起使用_

![](https://files.seeedstudio.com/wiki/Grove-Node/img/Mil_Grove_con.png)

其次，我们需要一个**输出** Grove 模块作为执行器。以下 Grove 模块可以使用：

<table>
  <tbody><tr>
      <th>模块名称</th>
      <th>触发时的动作</th>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td width={300}> Grove - 蜂鸣器</td>
      <td width={400}> 蜂鸣器启用</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - LED</td>
      <td colSpan={3} rowSpan={1}>LED 点亮</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - 振动器</td>
      <td colSpan={3} rowSpan={1}> 振动</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - 继电器</td>
      <td colSpan={3} rowSpan={1}> 开关其他电路</td>
      </tr>
    </tbody>
    </table>


例如，我们打算创建一个在环境黑暗时自动点亮、否则熄灭的灯，那么我们选择一个 [Grove-光传感器](/cn/Grove-Light_Sensor "Grove - 光传感器") 和一个 Grove-红色LED。


第三，教 Grove 节点一个逻辑。

将光传感器连接作为输入，LED 作为输出，然后开启 Grove 节点。

* 在正常环境中，单击 Grove 节点的按钮

* 用手遮住光传感器来模拟黑暗环境，然后双击，Grove - LED 将点亮。

* 松开光传感器，Grove - LED 将熄灭。

## 空中升级

Grove Node 具有预编程的 OTA 引导加载程序。要运行引导加载程序：

1. 关闭 Grove Node 的电源

2. 双击 Grove Node 的按钮

3. 红色 LED 将点亮，可以扫描到名为 SD7DFU 的 BLE 设备

4. 使用 [nRF Master Control Panel](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp) 升级 BLE 应用程序

![](https://files.seeedstudio.com/wiki/Grove-Node/img/Ota-ui.png)

更多信息可以在 [mbed.org](https://developer.mbed.org/teams/Bluetooth-Low-Energy/wiki/Firmware-Over-the-Air-FOTA-Updates) 找到。

## 开发新应用程序

请参阅 [mbed.org 上的 ble](http://developer.mbed.org/teams/Bluetooth-Low-Energy/)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Node/res/Grove-Node_v1.0_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

* [Grove - Node v1.0 原理图 pdf 文件](https://files.seeedstudio.com/wiki/Grove-Node/res/Grove-Node_v1.0.pdf)

* [Grove - Node v1.0 eagle 设计文件](https://files.seeedstudio.com/wiki/Grove-Node/res/Grove-Node_v1.0_eagle.zip)

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