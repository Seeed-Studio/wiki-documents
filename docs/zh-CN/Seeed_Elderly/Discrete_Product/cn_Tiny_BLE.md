---
description: Tiny BLE
title: Tiny BLE
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Tiny_BLE
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Tiny_BLE/img/BLE_Smurfs_Photo.png)

Tiny BLE 是一款专为低能耗和小尺寸设计的蓝牙低功耗开发板。它集成了电流测量功能，可提供实时能耗数据，这对于开发者优化软件以设计长续航设备至关重要。它支持基于云的 ARM mbed IDE，配备便捷的 C/C++ SDK 和大量开源库，使原型设计和开发变得极为简单。

|![](https://files.seeedstudio.com/wiki/Tiny_BLE/img/Ble_smurfs_interface.png) |![](https://files.seeedstudio.com/wiki/Tiny_BLE/img/Ble_smurfs_ble.png)
|---|---|

凭借其模块化设计，我们可以将其分为两个部分——CMSIS DAP 接口部分和 BLE 部分。CMSIS DAP 接口部分就像瑞士军刀，提供拖放编程、CMSIS DAP 调试、USB 虚拟串口、电流测量和电池充电功能。BLE 部分基于 Nordic nRF51822，配备蓝牙低功耗 2.4GHz 多协议无线电和运行频率为 16MHz 的 32 位 ARM Cortex-M0 内核。集成了 MPU6050，一个具有 3D 加速度计和 3D 陀螺仪的 6 自由度传感器，用于提供运动检测功能。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeed-Tiny-BLE-BLE-%2B-6DOF-Mbed-Platform-p-2268.html)

## 特性
---
* nRF51822：ARM Cortex-M0 + 2.4GHz 无线电（BLE 或 ANT+）

* MPU-6050：3D 加速度计 + 3D 陀螺仪

* LPC11U35FHI33：CMSIS DAP

* 电流测量

* CN3065：USB 部分的电池充电端口

* 电源：USB/电池（3.5-4.2V）

* 输出电压：3.3V

* 4 个 I/O，均可用作模拟输入、数字输入/输出、I2C、SPI 或 UART

* VCC 输出控制

## 规格
---
<table>
<tr>
<th>规格</th>
<th>值</th>
</tr>
<tr>
<td width="200px">微控制器</td>
<td width="400px">nRF51822QFAA；LPC11U35FHI33</td>
</tr>
<tr>
<td>外形尺寸</td>
<td>43.3mm x 29.0mm x 4.3mm</td>
</tr>
<tr>
<td>电源</td>
<td>USB/电池（JST-1.0 电池座）</td>
</tr>
</table>

## 入门指南
---
![](https://files.seeedstudio.com/wiki/Tiny_BLE/img/Get_started_with_mbed.png)

1. 点击[此链接](https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Tiny-BLE) **登录或注册 mbed**

2. [导入 mbed_blinky 程序](https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Tiny-BLE)，并将 main.cpp 的代码更改如下。

3. 点击顶部工具栏的 **Compile** 图标编译程序，然后下载编译后的 hex 文件。

4. 将下载的 hex 文件拖放到 MBED 磁盘中。

5. 蓝色 LED 将开始闪烁。
```
#include "mbed.h"

DigitalOut red(p22);           // 红色 LED
DigitalOut green(p21);         // 绿色 LED
DigitalOut blue(p23);          // 蓝色 LED

int main()
{
    while (true) {
        blue = !blue;
        wait(0.1);
    }
}
```

[Seeed_Tiny_BLE_Get_Started 程序](http://developer.mbed.org/teams/Seeed/code/Seeed_Tiny_BLE_Get_Started/) 包括运动检测、按钮和电池电量检测。这是一个很好的入门参考。

### 调试

要启用 SWD 调试并通过 USB 虚拟串口获取调试信息，请安装 [mbed 提供的驱动程序](https://developer.mbed.org/handbook/Windows-serial-configuration)。

### 能耗监测

将 USB 虚拟串口的波特率更改为 4000000+ 将触发电流测量。我们设计了一款工具——Tiny BLE MONITOR，方便您轻松获取功耗信息。

* [Tiny BLE MONITOR for Windows](http://tangram.qiniudn.com/ble_smurfs_monitor_v0.1.exe)

* [Tiny BLE MONITOR for Linux/Mac OS](https://github.com/Seeed-Studio/Tiny_BLE/tree/master/utils)，额外需求：pyqtgraph

![](https://files.seeedstudio.com/wiki/Tiny_BLE/img/Ble_smurfs_monitor_preview.png)

### 更新或恢复固件

Arch BLE 的最新固件版本为 v0221，构建日期为 2015 年 2 月 6 日。要检查您的固件版本和构建日期，请在文本编辑器中打开 MBED 磁盘中的 MBED.HTM 或 DETAILS.TXT。

更新日志：

* 2015-02-07 修复 Mac OS X 10.10 问题

固件：

* [最新接口固件 v221 2015-02-06](https://github.com/Seeed-Studio/Tiny_BLE/raw/master/seeed_tiny_ble_interface_latest.bin)

### 无线更新

我们为您定制了一个 DFU 引导加载程序，用于通过无线更新您的应用程序。它位于 [github.com/Seeed-Studio/nrf51_dfu_bootloader](https://github.com/Seeed-Studio/nrf51_dfu_bootloader)。另请参阅 [mbed.org FOTA](https://developer.mbed.org/teams/Bluetooth-Low-Energy/wiki/Firmware-Over-the-Air-FOTA-Updates)。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Tiny_BLE/res/BLE_Smurfs_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源
---
*   [Tiny BLE V1.0 Eagle 文件](https://files.seeedstudio.com/wiki/Tiny_BLE/res/BLE_Smurfs_v1.0.zip)

*   [Tiny BLE V1.0.pdf](https://files.seeedstudio.com/wiki/Tiny_BLE/res/BLE_Smurfs_v1.0_PDF.pdf)

*   [GitHub 上的资源](https://github.com/Seeed-Studio/Tiny_BLE)

*   [Fritzing 部件](https://github.com/Seeed-Studio/Tiny_BLE/blob/master/tiny_ble.fzpz)

*   [MPU6050 库](http://developer.mbed.org/teams/Seeed/code/eMPL_MPU6050/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时能够获得流畅的体验。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>