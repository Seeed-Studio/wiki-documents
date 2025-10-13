---
description: 4WD驱动平台V1.0
title: 4WD驱动平台V1.0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/4WD_Driver_Platform_V1.0
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/img/4WD_Driver_Platform_V1.0_1200.jpg)

4WD驱动平台V1.0（不包含Intel Edison芯片）是一款支持四轮驱动的电机驱动板，能够对每个电机进行双向和全面控制。该驱动板最重要的特点是通过Grove接口实现的扩展性，这使您的项目更加多样化。它还提供详细且简单的SDK（软件开发工具包），可以加快您的开发过程。安装Edison后，您可以构建一个强大的系统来满足不同需求。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/4WD-Driver-Platform-V1.0-p-2536.html)

## 特点
---
* 支持USB到设备UART桥接
* 支持OTG（On The Go）
* 支持SPI编程端口
* 支持Grove接口：1个UART端口，3个I2C端口
* 支持双向四轮编码电机驱动（峰值电流：3A）
* 支持过流、过载和短路保护功能
* 提供详细且简单的SDK
* 专为Intel Edison平台设计

## 规格
---

<table>
  <tr>
      <td>基本参数</td>
  </tr>
  <tr>
      <td>输入电压</td>
      <td>6-16V</td>
  </tr>
  <tr>
      <td>输出电压</td>
      <td>5V/4V/3.3V/1.8V</td>
  </tr>
  <tr>
      <td>空载电流</td>
      <td>小于150mA</td>
  </tr>
  <tr>
      <td>尺寸</td>
      <td>130*110mm</td>
  </tr>
  <tr>
      <td>电机驱动</td>
  </tr>
  <tr>
      <td>驱动芯片</td>
      <td>MC33931（Freescale）* 4，独立</td>
  </tr>
  <tr>
      <td>输入电压</td>
      <td>5-30V</td>
  </tr>
  <tr>
      <td>输出电流</td>
      <td>3A（最大）</td>
  </tr>
  <tr>
      <td>保护功能</td>
      <td>过温、低电压和短路情况下自动切断输出</td>
  </tr>
  <tr>
      <td>扩展性</td>
  </tr>
  <tr>
      <td>I2C接口</td>
      <td>3</td>
  </tr>
  <tr>
      <td>SPI接口</td>
      <td>1</td>
  </tr>
  <tr>
      <td>UART接口</td>
      <td>2</td>
  </tr>
  <tr>
      <td>USB OTG接口</td>
      <td>1</td>
  </tr>
</table>

## 应用场景
---

* 各种类型的机器人

* 电机驱动

* 玩具车

* 工业控制

## 硬件概览
---

![](https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/img/4WD_Driver_Platform_V1.0_3400_Modules.jpg)

**注意：所有电机接口和Grove模块仅支持3.3V电压。**

## 入门指南
---

:::note
    本节仅展示如何构建基本开发环境。
您可以按照以下指南为您的项目构建开发环境：
:::

### 将Edison安装到4WD驱动板上

**所需材料**
- 4WD驱动平台V1.0 *1

- Intel Edison *1

- 2根Micro B到Type A USB数据线

**软件准备**

* [下载Intel集成工具包（与驱动程序一起安装）](http://downloadmirror.intel.com/25028/eng/iotdk_win_installer.exe)

* [如果您在Arduino板上开发项目，请下载Arduino IDE](http://downloads.arduino.cc/arduino-1.6.5-r5-windows.exe)

提示：如果您的连接速度到Intel服务器不够快，我们建议您首次仅选择安装驱动程序和闪存工具。单独下载其他工具会更快。

:::note
    目前4WD驱动平台V1.0不支持Windows 10。
:::

**检查您的IDE**

[下载Putty用于串行通信](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)

1. 打开设备管理器。

2. 找到USB串行端口。在端口（COM & LPT）下找到_USB Serial Port(COMx)_（例如：USB Serial Port(COM3)）。

3. 启动Putty并按照下图所示进行配置（红色矩形标记部分）。

![](https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/img/Putty_config.jpg)Putty配置

4. 点击“Open”进入串行终端。

![](https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/img/Putty_login.png)

Putty登录界面

5. 按下回车键输入用户名和密码登录Edison系统。

:::note
    - 如果是您第一次使用Edison芯片，则不存在密码。
    - 您可以使用Intel Flash Tool将最新固件镜像刷入Edison。
:::

6. 现在您的IDE已成功安装。

## 示例
---
:::note
    - 本节将向您展示一个实现了一些简单功能的示例。
    - 请确保您已按照前面的章节成功搭建开发环境，并假设您已经具备 Arduino 平台的基本知识。
:::
您可以参考 [Edison 4WD Auto Robotic Platform 2.0](https://wiki.seeedstudio.com/cn/Edison_4WD_Auto_Robotic_Platform_2.0/) 了解使用 4WD Driver Platform V1.0 的实际应用。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/res/4WD_Auto_Robotic_Platform_V1.0_SCHAndPCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源
---
*   [原理图文件](https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/res/4WD_Auto_Robotic_Platform_V1.0_SCHAndPCB.zip)

*   [Git库(SDK)文件](https://github.com/Pillar1989/webrobot/blob/master/motor.py)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>