---

description: 本指南介绍如何将 EasySkyMesh 与 Wio Tracker L1 搭配使用，在 MeshCore 的基础上构建低功耗 IoT 传感器网络。
title: EasySkyMesh IoT 固件
keywords:
   - EasySkyMesh
   - MeshCore
   - Wio Tracker L1
   - LoRa Mesh
   - MeshCore Sensor
   - PowerSaving
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMesh_MeshCore_Device_Low_Power_Consumption_L1_Pro.png
slug: /easyskymesh_wio_tracker_l1
sku: 114993648,114993649,114993653,114993654
sidebar_position: 3
last_update:
   date: 9/17/2026
   author: Michelle Huang
createdAt: 2026-09-17
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/cn/easyskymesh_wio_tracker_l1/

---

# 适用于 Wio Tracker L1 的 EasySkyMesh IoT 固件

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[EasySkyMesh](https://github.com/IoTThinks/EasySkyMesh) 是一个基于 [MeshCore](https://meshcore.io/) 的社区项目，专注于构建低功耗固件。该固件使 L1 Pro 在保持 MeshCore 通信功能的同时，实现 **18 天** 的电池续航。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMeshProject.png" style={{width:900, height:'auto'}}/></div>

EasySkyMesh 增加了**省电和传感器数据采集**功能。传感器数据可以由 MeshCore 节点采集，并通过现有的 MeshCore 网络进行传输。它特别适用于：

* 低功耗传感器网络
* 远程监控
* 太阳能供电部署
* 环境监测
* 基础设施监测
* IoT 原型开发

## 固件烧录

### 硬件准备

在烧录固件之前，请准备：

* Wio Tracker L1。[点击这里](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-for-Meshcore-p-6717.html) 获取。
* USB Type-C 线缆
* 电脑

使用 USB Type-C 接口将 Wio Tracker L1 连接到电脑。

### 下载 EasySkyMesh 固件

前往 [EasySkyMesh Releases](https://github.com/IoTThinks/EasySkyMesh/releases) 页面。选择一个支持你开发板的版本。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMeshFirmwareDownload.png" style={{width:600, height:'auto'}}/></div>


EasySkyMesh 的发布版本可能会针对不同硬件和不同升级场景提供不同的固件文件。对于全新安装，项目通常会提供全新安装的固件镜像。对于已有安装，如果你希望保留现有配置，请使用升级固件。


### 烧录固件

EasySkyMesh 项目建议在受支持的设备上使用 MeshCore Web Flasher。

**步骤 1：** 打开 [MeshCore Web Flasher](https://meshcore.io/flasher)

**步骤 2：** 选择 **Custom Firmware**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/Choose_Custom_Firmware_MeshCore_EasySkyMesh.png" style={{width:600, height:'auto'}}/></div>

**步骤 3：** 选择 EasySkyMesh 固件文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMesh_Choose_zip.png" style={{width:600, height:'auto'}}/></div>

**步骤 4：** 如有需要，进入 DFU 模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMesh_Enter_DFU.png" style={{width:900, height:'auto'}}/></div>

**步骤 5：** 开始烧录。等待烧录过程完成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMesh_Flash.png" style={{width:900, height:'auto'}}/></div>

**步骤 6：** 重启设备。

## 省电功能

该项目提供针对不同 MeshCore 开发板优化的 PowerSaving 固件版本。EasySkyMesh 发布版本已经为基于 ESP32 和 nRF52 的设备引入了省电特性，并为不同 MeshCore 角色增加了额外的电源管理功能。

### Companion 固件

所有 PowerSaving 功能默认启用。RX PowerSaving 被设置为“balanced”。

在 OLED 上，电池图标左侧会显示以 m（分钟）、h m（小时 分钟）和 d h（天 小时）为单位的运行时间。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMesh_Runtime_Display.png" style={{width:600, height:'auto'}}/></div>

### 中继 & Room Server 固件

Powersaving 默认关闭。你可以通过 MeshCore CLI 启用 PowerSaving。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMesh_Powersaving_On.png" style={{width:900, height:'auto'}}/></div>

启用 powersaving 的方法：

```text
powersaving on
```

要检查当前 PowerSaving 状态：

```text
powersaving
```

[Click here](https://github.com/IoTThinks/EasySkyMesh/wiki/PowerSaving#11-repeaters-and-room-servers) 使用更多命令。

## 传感器支持

EasySkyMesh 为 MeshCore 扩展了传感器支持，使得可以通过现有的 MeshCore 网络采集和传输传感器读数。该项目目前记录了对多种常见 I2C 传感器的支持，包括：

| 传感器        | 测量项目                               | I2C 地址    |
| ------------- | --------------------------------------- | ----------- |
| AHT10 / AHT20 | 温度 / 湿度                            | `0x38`      |
| BME280        | 温度 / 湿度 / 气压                      | `0x76`      |
| BME680        | 温度 / 湿度 / 气压 / 气体               | `0x76`      |
| BMP280        | 温度 / 气压                            | `0x76`      |
| SHTC3         | 温度 / 湿度                            | `0x70`      |
| SHT4X         | 温度 / 湿度                            | `0x44`      |
| LPS22HB       | 温度 / 气压                            | `0x5C`      |
| INA3221       | 电压 / 电流 / 功率                     | `0x42`      |
| INA219        | 电压 / 电流 / 功率                     | `0x40`      |
| INA260        | 电压 / 电流 / 功率                     | `0x41`      |
| INA226        | 电压 / 电流 / 功率                     | `0x44`      |
| MLX90614      | 非接触式温度                           | `0x5A`      |
| VL53L0X       | 距离                                  | `0x29`      |

 某些固件版本可以自动选择 BME280、BME680 和 BMP280 等传感器的 I2C 地址。对于受支持的 EasySkyMesh 版本，可以使用 `sensor` CLI 命令检查 I2C 和 GPS 串口引脚：

```text
sensor
```


## 故障排查

### 设备未在 Flasher 中显示

1. 确认 USB 线缆支持数据传输。
2. 重新连接 Wio Tracker L1。
3. 再次进入 DFU 模式。
4. 刷新 Web Flasher。
5. 尝试更换 USB 接口或线缆。

### 传感器未被检测到

请检查：
1. VCC 和 GND 连接。
2. SDA 和 SCL 连接。
3. 传感器工作电压。
4. I2C 地址。
5. EasySkyMesh 固件版本。
6. 该传感器是否在支持列表中。


如果问题仍然存在，请查看 [EasySkyMesh GitHub 仓库](https://github.com/IoTThinks/EasySkyMesh) 以获取最新文档和问题反馈。

## 资源

* [EasySkyMesh GitHub 仓库](https://github.com/IoTThinks/EasySkyMesh)
* [EasySkyMesh 固件烧录说明](https://github.com/IoTThinks/EasySkyMesh/blob/main/firmware/Instruction-to-flash-firmware.md)
* [EasySkyMesh 传感器添加说明](https://github.com/IoTThinks/EasySkyMesh/blob/main/firmware/Add-sensors-to-repeaters.md)

## 技术支持与产品讨论
<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>