---
title: Wio-LR2021 开发套件出厂固件用户指南
description: 'Wio-LR2021 开发套件出厂固件指南'
keywords:
  - Wio-LR2021
  - ESP32-S3
  - 出厂固件
  - 串口控制台
image: https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp
slug: /wio_lr2021_dev_kit_factory_firmware_user_guide
sku: 100038329
sidebar_position: 1
last_update:
  date: 11/05/2026
  author: David Du
createdAt: '2026-11-05'
updatedAt: '2026-11-05'
url: https://wiki.seeedstudio.com/cn/wio_lr2021_dev_kit_factory_firmware_user_guide/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Wio-LR2021 开发套件出厂固件用户指南

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp" style={{width:600, height:'auto'}}/>
</div>

每一块 Wio-LR2021 开发套件都预装了一个测试固件，它通过一个串口控制台暴露板载的射频、传感器、显示屏、摄像头、音频通路和 Flash。本指南将从首次上电开始，引导你完成一次完整的功能检查，并在每一步说明通过的判定标准。

:::note
你板子上的固件是本页的最终依据。输入 `help` 可以列出当前构建实际注册的命令；如果这里提到的某个命令缺失，说明你的板子运行的是不同版本。
:::

### 固件命令能做什么

- **Sub-GHz 和 2.4 GHz 链路**：在两块板子上配合 `lora_tx` 与 `lora_rx`；接收端计数会上升。
- **调制模式**：`gfsk_tx`、`flrc_rx`、`lr_fhss_tx`；统计正确数据包和 CRC 错误。
- **射频功率**：`lora_cw`；仪表上能看到载波。
- **BLE** — `ble -a 1`；扫描器会列出 `wio-lr2021-*`。
- **Wi-Fi 和 IP**：`sta_connect`、`ap_set`、`ping`；出现 `got ip:` 和应答计数。
- **GPIO、I²C 和电源轨**：`gpio_get`、`i2c_scan`、`io_exp_print`；`0x21` 和 `0x3D` 有响应。
- **电池**：`battery_get`；显示毫伏级电压和电量估计。
- **显示屏、摄像头、音频**：`oled_test`、`camera_capture`、`audio_slot_play`；图案、`PASS`、回放。
- **Flash**：`flash_info`、`flash_speed`；返回码为 `0` 表示通过。

## 准备工作

### 步骤 1. 安装天线并连接开发板

将 Sub-GHz 天线拧到 `SUB-1G`，将 2.4 GHz 天线拧到 `LR-2.4G`。使用带数据功能的 USB-C 线连接——仅充电线只能给板子供电，但不会出现串口。

:::caution
切勿在没有天线的情况下发射。PA 在 Sub-GHz 频段最高输出 +22 dBm，在 2.4 GHz 频段最高输出 +12 dBm 到失配负载，这可能损坏 LR2021。
:::

### 步骤 2. 找到串口

<Tabs groupId="operating-systems">
<TabItem value="win" label="Windows">

打开 **设备管理器（Device Manager）** 并展开 **端口 (COM 和 LPT) / Ports (COM & LPT)**。开发板会显示为 **USB Serial Device**，端口号类似 `COM5`。

</TabItem>
<TabItem value="mac" label="macOS">

```bash
ls /dev/cu.*
```

查找 `/dev/cu.usbmodem*`。

</TabItem>
<TabItem value="linux" label="Linux">

```bash
ls /dev/ttyACM*
```

开发板通常为 `/dev/ttyACM0`。如果端口无法打开，请将你的用户加入 `dialout` 组。

</TabItem>
</Tabs>

### 步骤 3. 打开终端

| 工具 | 平台 | 获取方式 |
| --- | --- | --- |
| PuTTY | Windows | [putty.org](https://www.putty.org/) |
| screen | macOS / Linux | 内置；运行 `screen /dev/cu.usbmodem* 115200` |
| Minicom | macOS / Linux | 通过包管理器安装；运行 `minicom -D /dev/ttyUSB* -b 115200` |

所有工具都需要相同的串口参数：

| 设置项 | 数值 |
| --- | --- |
| 波特率 | 115200 |
| 数据位 | 8 |
| 校验位 | 无 |
| 停止位 | 1 |
| 流控 | 无 |

### 步骤 4. 确认命令提示符

按下 **Enter**。开发板会返回它的命令提示符：

```bash
cmd>
```

输入 `help` 以列出所有已注册的命令。

```bash
cmd> help
```

## 快速上手

### 1. 列出所有命令

```bash
cmd> help
```

### 2. 读取电池信息

```bash
cmd> battery_get
I (737306) bsp_battery: calibration scheme version is Curve Fitting
I (737306) bsp_battery: Calibration Success
I (737386) bsp_battery: VBAT channel=7 raw_max=0 sense=0 mV battery=0 mV
I (737516) bsp_battery: VBAT channel=7 raw_max=2362 sense=2068 mV battery=4136 mV
I (737516) SENSOR_TEST: Battery probe: BAT_ADC_EN=0 -> 0 mV, BAT_ADC_EN=1 -> 4136 mV
I (737516) SENSOR_TEST: Battery voltage: 4136 mV, estimated level: 92%
```

它会报告电芯电压（单位毫伏）和电量估计值。如果没有接电池，读数会跟随 USB 供电电压变化。

### 3. 发送一帧 LoRa 数据包

:::caution
在发射前，将 Sub-GHz 天线安装到 `SUB-1G`。测试过程中让开发板与其他天线保持一米左右的距离。
:::

```bash
cmd> lora_tx -f 868000000 -d hello -n 1
I (922806) LR20XX: Power          = 10 dB
I (922806) LR20XX: Frequency      = 868000000 Hz
I (922806) LR20XX: SF             = RAL_LORA_SF7
I (922806) LR20XX: BandWidth      = RAL_LORA_BW_125_KHZ
I (922806) LR20XX: CodingRate     = RAL_LORA_CR_4_5
I (922816) LR20XX: CRC            = 1
I (922816) LR20XX: IQ             = 0
I (922816) LR20XX: SyncWord       = 0x34
I (922816) LR20XX: LDO            = 0
I (922816) LR20XX: Interval       = 0
I (922816) LR20XX: Num            = 1
I (922816) LR20XX: half_power     = 0
I (922816) LR20XX: duty_cycle     = 0
I (922816) LR20XX: lf_slices      = 0
I (922816) LR20XX: is_config_pa   = 0
I (922816) LR20XX: tx len 5, payload: hello
I (922836) LR20XX: Starting LoRa TX #0
I (922876) LR20XX: LoRa tx done

I (923886) LR20XX: End of send!
```

### 4. 接收 Sub-GHz 数据包

```bash
cmd> lora_rx -f 868000000 -s 7 -b 3               
I (47044) LR20XX: Frequency      = 868000000 Hz
I (47044) LR20XX: SF             = RAL_LORA_SF7
I (47044) LR20XX: BandWidth      = RAL_LORA_BW_125_KHZ
I (47044) LR20XX: CodingRate     = RAL_LORA_CR_4_5
I (47044) LR20XX: Header_type    = RAL_LORA_PKT_EXPLICIT
I (47044) LR20XX: CRC            = 1
I (47044) LR20XX: IQ             = 0
I (47044) LR20XX: SyncWord       = 0x34
I (47044) LR20XX: LDO            = 0

W (82904) LR20XX: rx_done 0
W (82904) LR20XX: rx_hdr_err 0
W (82904) LR20XX: rx_crc_err 0

I (82904) LR20XX: End of receive!
```

在 A 板上运行 `lora_rx -f 868000000 -s 7 -b 3` 命令，在 B 板上运行 `lora_tx -f 868000000 -s 7 -b 3 -p 14 -d hello -n 10`。A 板的计数器会随每个数据包递增，B 板在发送完 10 个包后返回。用 `Ctrl+C` 停止 A 板以打印统计结果。如果计数一直为 0，说明两块板在射频参数上不一致，或者有天线缺失。将 `-i` 保持在 `200` 或更高，否则接收端会记录 `hdr err` 行。

使用 `Ctrl+C` 在两块板上**结束测试**，避免任意一块一直停留在接收模式。

### 5. Wi-Fi STA 模式与 ping

```bash
cmd> sta_connect <ssid> <pass>
cmd> ping 192.168.1.1 -c 4
```

当出现包含 `got ip:` 的一行时，说明已成功加入网络。

### 6. 通过热点访问摄像头

```bash
cmd> camera_start
cmd> camera_http_start
```

连接名为 `wio-lr2021-camera` 的热点，密码为 `12345678`，然后打开 `http://192.168.4.1`。实时画面同时证明摄像头和 Wi-Fi 协议栈工作正常。

使用 `camera_http_stop` 和 `camera_stop` **结束测试**，然后重新连接到你正常使用的网络。

### 7. 绘制显示屏测试图案

```bash
cmd> oled_test -m text
I (2177034) bsp_oled_ssd13xx: OLED initialized (128x64, addr 0x3d)
I (2177064) OLED_TEST: OLED test pattern displayed: text
```

```bash
cmd> oled_test -m checker
I (2262024) OLED_TEST: OLED test pattern displayed: checker
```

```bash
cmd> oled_test -m clear
I (2316714) OLED_TEST: OLED test pattern displayed: clear
```

### 8. 录制并回放音频

```bash
audio_slot_record -d 5000
audio_slot_play
```

### 9. 识别 Flash 芯片

```bash
cmd> flash_info
I (2491984) FLASH_TEST: ==== SPI flash identification ====
I (2491984) FLASH_TEST:  JEDEC ID        : 0xEF4018
I (2491984) FLASH_TEST:  Manufacturer    : 0xEF (Winbond)
I (2491984) FLASH_TEST:  Memory type     : 0x40
I (2491984) FLASH_TEST:  Capacity (ID)   : 0x18 => 16777216 bytes (16.00 MB)
I (2491984) FLASH_TEST:  Physical size   : 16777216 bytes (16.00 MB)
I (2491984) FLASH_TEST:  Configured size : 16777216 bytes (16.00 MB)
I (2491984) FLASH_TEST:  Partition "flashtest" : addr=0x00C10000 size=1048576 (1.00 MB) subtype=0x06
I (2491984) FLASH_TEST: ==== Tail boundary authentication ====
I (2491994) FLASH_TEST:  head sector off=0x00000000, tail sector off=0x000FF000
I (2492114) FLASH_TEST:  head verify : PASS
I (2492124) FLASH_TEST:  tail verify : PASS
I (2492124) FLASH_TEST:  boundary auth: PASS
```

## 行为与限制

| 行为 | 命令 | 会发生什么 | 如何退出 |
| --- | --- | --- | --- |
| 持续接收 | `lora_rx`、`flrc_rx` | 统计数据包数量，无命令提示符 | `Ctrl+C` |
| 无线发射（无限循环） | `lora_tx -n 0`、`flrc_tx -c 0` | 持续发送，不会自动停止 | `Ctrl+C` |
| 连续波 | `lora_cw`、`lora_cw_pa` | 无调制载波，无有效负载 | `lora_cw_stop` |
| 后台任务 | `flash_endurance -a start` | 立即返回，后台持续擦除 | `flash_endurance -a stop` |
| 热点存续时间 | `ap_set`、`camera_http_start`、`audio_slot_send` | 无线电保持开启直到被关闭 | `wifi stop`、`camera_http_stop`、`audio_slot_stop` |

- 同一时间只有一个命令占用控制台：在接收或发送循环期间，固件会忽略输入。
- 输出为纯文本；启用终端日志可以保留测试记录。
- 某些终端将 `Ctrl+C` 绑定为复制；请确认你的终端会发送中断信号。

## 安全与合规

**1. 每个频段只接一根天线。** 同一频段的 SMA 接头和 U.FL 焊盘通过一个 0 Ω 电阻连接到同一射频网络，同时装两根天线会导致二者都无法良好匹配。

**2. 切勿长时间保持载波。** `lora_cw` 和 `lora_cw_pa` 会发射不带有效负载的连续载波。在移动开发板之前，请用 `lora_cw_stop` 将其停止。

**3. 核对你的频段规划。** Sub-GHz 输出最高可达 +22 dBm，2.4 GHz 最高可达 +12 dBm。868 MHz 适用于欧洲，902 ~ 928 MHz 适用于美洲。请确认你所在国家/地区的限值，并在认证测试时使用屏蔽箱。

**4. 电池与太阳能。** 在 `BAT-3.7V` 上使用一节 3.7 V 锂离子电池，并遵守丝印极性。CN3165 充电芯片提供约 495 mA 充电电流且没有热敏电阻输入，因此请勿无人看管地充电。

**5. 默认凭据。** 摄像头和音频热点的默认密码为 `12345678`，摄像头网页没有登录验证。在共用工位上请修改密码并在不用时关闭热点。

**6. Flash 耐久性测试会磨损芯片。** `flash_endurance` 会擦除 `flashtest` 分区中的真实扇区。仅在样机上运行此命令，切勿在仍需使用的板子上运行。

## 资源

- [**出厂固件命令参考**](/cn/wio_lr2021_dev_kit_command_reference)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
