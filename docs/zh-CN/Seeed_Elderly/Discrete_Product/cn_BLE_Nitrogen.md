---
description: BLE氮气模块
title: BLE氮气模块
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/BLE_Nitrogen
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![输入图片描述](https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/cover.png)

Zephyr 应用使用 nrf52_nitrogen 配置在 nRF52 Nitrogen 硬件上运行。它支持 Nordic Semiconductor nRF52832 ARM Cortex-M4F CPU以及以下设备：

* NVIC（嵌套向量中断控制器）
* SYSTICK（系统时钟）
* UART
* GPIO
* FLASH

[Nordic Semiconductor Infocenter](http://infocenter.nordicsemi.com/) 包含处理器的信息和数据手册。

强烈建议您使用最新的 [SDK](https://www.zephyrproject.org/downloads/tools) 更新您的开发环境，因为新功能会针对最新版本进行测试。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/BLE-Nitrogen-p-2711.html)


## 特性

* nRF52832微控制器，具有512kB Flash和64kB RAM
    * Cortex M4
    * BLE
    * NFC
* 带保险保护的USB电源
* 电池管理
    * 板载电池充电器
    * 电池连接器
    * 电池充电指示LED
* LPC11U35板载SWD调试器
    * SWD调试器固件
    * USB转UART
    * 拖放固件升级
    * 固件升级后自动重置并运行
* BLE功耗测量
    * 板载电流测量电路
    * 1uA测量能力
    * 最大150mA电流测量
* 7个LED
    * USR1, BT, PWR, CDC, DAP, MSD, 电池充电
* 两个按钮
    * USR和RESET（也用于LPC11U35固件升级）
* SWD调试连接器
    * nRF52832 SWD连接器
    * nRF52832 UART连接器
* 板载芯片天线
* 1.8V工作电压
* 2x20针2.0mm间距低速连接器
* 完全兼容96Boards IoT标准


## 规格参数

| 参数 | 值 |
|-----------|-------|
|芯片组 | nRF52832 |
|时钟速度 | 64MHz |
|Flash | 512KB |
|SRAM | 96KB |
|数字输出电压 | 1.8V |
|模拟引脚 | 4 |
|模拟输入电压 | 1.8V |
|尺寸 | 60x30mm |

## 硬件概览

![输入图片描述](https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/hardware_ov.png)

1. **Micro USB** - 用于调试、编程、电源和电池充电。

2. **LED指示灯**

* ***USR1*** - 用户控制的LED，连接到P0.29
* ***BT*** - 蓝牙指示灯。当连接到设备时，该LED会亮起。
* ***PWR*** - 当插入USB或电池时亮起。
* ***CDC*** - UART数据指示灯。
* ***DAP*** - SWD指示灯。
* ***MSD*** - 大容量存储/拖放指示灯。

3. **电池连接器** - 一个用于3.7V锂电池的JST-1.0连接器

* **充电指示灯**
    * 闪烁：未插入电池
    * 常亮：正在充电
    * 熄灭：充电完成

4. **复位按钮** - 按下以重置系统

5. **用户按钮** - 用户按钮，连接到P0.27，带上拉

6. **用于调试的UART**

7. **蓝牙芯片天线**

8. **NFC天线UFL连接器**

9. **引脚** - 详情请参考引脚图

A.IC - **NRF52832**

B.IC - **LPC11U35**

C.IC - **ETA6003**

## 引脚图

[![输入图片描述](https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/pin_map.png)](https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/pin_map.png)

:::note
    点击查看大图。
:::

## 软件

### 安装驱动

点击下载 [Mbed驱动](https://developer.mbed.org/media/downloads/drivers/mbedWinSerial_16466.exe)。

通过Micro USB线将板子插入PC，并双击mbedWinSerial_16466.exe进行安装，然后您将在设备管理器中找到一个新设备。

![输入图片描述](https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/install_driver.png)

### 高级指南

[![输入图片描述](https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/guide.png)](https://www.zephyrproject.org/)



## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BLE-Nitrogen/res/BLE_Nitrogen_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源

* [Eagle格式原理图](https://files.seeedstudio.com/wiki/BLE-Nitrogen/res/BLE_Nitrogen_Eagle_File.zip)
* [PDF格式原理图](https://files.seeedstudio.com/wiki/BLE-Nitrogen/res/BLE%20Nitrogen%20v1.0_SCH.pdf)
* [Mbed驱动](https://developer.mbed.org/media/downloads/drivers/mbedWinSerial_16466.exe)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多种沟通方式以满足不同的需求和偏好。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>