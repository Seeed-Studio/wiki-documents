---
description: 基于 XIAO ESP32S3 和 Wio-SX1262 套件的单通道 LoRaWAN 网关
title: 单通道 LoRaWAN 网关
keywords: ["XIAO ESP32S3", "LoRa", "Wio SX1262", "Single Channel Gateway"]
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /cn/wio_sx1262_xiao_esp32s3_for_single_channel_gateway
sidebar_position: 3
last_update:
  date: 10/09/2024
  author: Evelyn Chen
---

# **将 XIAO ESP32S3 和 Wio-SX1262 套件配置为单通道 LoRaWAN 网关**

单通道网关（称为单通道集线器）是低成本工具，使用户能够开始探索 LoRa 领域。这些网关可以在特定的扩频因子和通道上接收 LoRa 数据包，并促进这些数据包与网络的交换。由于其经济实惠，许多用户已经开始构建自己的单通道网关来试验 LoRa。

XIAO ESP32S3 作为主控 MCU 和 Wio-SX1262 LoRa 无线电套件可以配置为单通道网关。该套件为那些有兴趣深入研究 LoRa 技术并建立与 LNS（LoRa 网络服务器）连接的用户提供了实用的解决方案。

这是 GitHub 项目：[单通道集线器](https://github.com/Seeed-Studio/one_channel_hub/tree/xiao-esp32s3-sx1262-bt-config)。

## 刷写固件

固件已准备好安装，预刷写到带有 3D 外壳的 XIAO ESP32S3 和 Wio-SX1262 套件中。如果您想将 XIAO ESP32S3 和 Wio-SX1262 套件刷写为单通道 LoRaWAN 网关，只需从 [bin 库](https://github.com/Seeed-Studio/one_channel_hub/tree/xiao-esp32s3-sx1262-bt-config/bin) 下载。

:::tip
带有 3D 外壳的 XIAO ESP32S3 和 Wio-SX1262 套件已预刷写为单通道 LoRaWAN 网关，请跳转到下一节进行[配置](https://wiki.seeedstudio.com/cn/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/#configuration-via-sensecraft-app)。
:::

:::note
此固件构建时：

- 选择 Seeed XIAO ESP32S3 网关板
- 将闪存大小修改为 8 MB
- 启用从闪存获取配置
- 禁用 Wi-Fi 配网
- 禁用 OLED 显示

使用方法：

- 通过用户按钮启用/禁用配置
- 蓝牙广播名称为 "GW-XIAO-ESP32S3"
- 通过 SenseCraft APP 连接并配置 Wi-Fi/LoRa

:::

如果您不使用完整的 ESP-IDF 环境，也可以使用 **esptool** 实用程序刷写提供的二进制文件。

点击下载固件：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/SenseCAP/seeed_xiao_esp32s3_one_chanel_hub_2024_12_09_01.rar" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 下载 ⏬ </font></span></strong></a>
</div>

**步骤 1**：下载 Esptool，更多信息请参考 [Esptool 文档](https://docs.espressif.com/projects/esptool/en/latest/esp32/)。

```python
pip install esptool
```

**步骤 2**：将 XIAO ESP32S3 连接到您的 PC。

**步骤 3**：导航到下载的文件并打开终端/命令行，然后运行 **esptool.py** 命令。

- 对于 Linux/macOS

```linux
esptool.py --chip esp32s3 -p port -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 seeed_xiao_esp32s3_devkit_bootloader.bin 0x10000 seeed_xiao_esp32s3_devkit_lorahub.bin 0x8000 seeed_xiao_esp32s3_devkit_partition-table.bin
```

- For Windows

```linux
py -m esptool --chip esp32s3 -p COM14 -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 seeed_xiao_esp32s3_devkit_bootloader.bin 0x10000 seeed_xiao_esp32s3_devkit_lorahub.bin 0x8000 seeed_xiao_esp32s3_devkit_partition-table.bin
```

将 `port` 替换为所使用的串口名称。如果连接失败，请参阅[故障排除](https://docs.espressif.com/projects/esptool/en/latest/esp32/troubleshooting.html#troubleshooting)。

### 使用 esp-idf 烧录

识别与要烧录的单通道集线器关联的串行设备。
对于 linux 和 mac，可以通过以下方式检查串口

```
ls /dev/cu*
```

然后使用 `idf.py` 进行刷写，替换 **端口**

```
idf.py -p port flash
```

如果返回**权限错误**，请检查当前用户是否属于 dialout 组。如果不是，请执行以下操作，重启 Linux 机器并重试：

```
sudo usermod -a -G dialout $USERNAME
```

在 **Windows** 设置中，假设设备挂载为 COM14，上述命令将类似于：

```
idf.py -p COM14 flash
```

启动监视控制台以查看日志（可选）。

```
idf.py -p port monitor
```

### 使用 esptool 烧录

如果不使用完整的 ESP-IDF 环境，可以按照[第一节](https://wiki.seeedstudio.com/cn/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/#flash-firmware)下载提供的二进制文件。

### 使用 esptool-JS 烧录

推荐使用[在线 esptool](https://espressif.github.io/esptool-js/)进行烧录。

**步骤1**：将波特率设置为 115200 并连接到正确的端口。

**步骤2**：选择 bin 文件并填入相应的烧录地址。

|**烧录地址**|**文件**|
|----|----|
|0x0|seeed_xiao_esp32s3_devkit_bootloader.bin|
|0x10000|seeed_xiao_esp32s3_devkit_lorahub.bin|
|0x8000|seeed_xiao_esp32s3_devkit_partition-table.bin|

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/70.png" alt="pir" width={600} height="auto" /></p>

## 通过 Sensecraft APP 配置

### WiFi 和 LoRaWAN 配置

**步骤 1**：下载 `SenseCraft` 应用：[下载链接](https://sensecap-mate-download.seeed.cn/)

**步骤 2**：为 XIAO ESP32S3 和 Wio-SX1262 套件接通电源。

**步骤 3**：按照应用中的说明配置 WiFi 和 LoRaWAN。

- 注册并登录 SenseCraft APP
- 导航到 `用户` → `设备蓝牙配置`
- 选择 `XIAO ESP32S3 和 Wio-SX1262 套件`
- 点击 `设备已准备好配置`
- 按一次套件按钮，当 LED 开始闪烁时，将进入蓝牙配对模式。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/APPOperation.gif" alt="pir" width={300} height="auto" /></p>

**步骤 4**：在 The Things Network(TTN) 上注册 LoRaWAN 网关。

- 创建账户并登录到 https://eu1.cloud.thethings.network/。
- 注册网关。
- 将正确的 `网关 EUI` 复制到 TTN，并填写正确的 `频率计划` 和 `网关 ID`。
- 重启您的网关模块并等待约 2 分钟。然后可以检查网关的连接状态。

## 通过 ESP BLE prov 配置

:::note
如果您想使用 **ESP BLE prov** 配置 Wi-Fi 并使用 **web 客户端** 配置 LoRaWAN，您需要刷入[此固件](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/seeed_xiao_esp32s3_one_chanel_hub_20241016.zip)。请注意，这与通过 SenseCraft 应用配置使用的固件不同。此外，您可以按照[自定义和构建固件](https://wiki.seeedstudio.com/cn/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/#customize-and-build-firmware)配置 `启用 Wi-Fi 配置`。
:::

### Wi-Fi 配置

**步骤 1**：下载 `ESP BLE prov` 应用：

- [Android 版](https://play.google.com/store/apps/details?id=com.espressif.provble)
- [iOS 版](https://apps.apple.com/in/app/esp-ble-provisioning/id1473590141)

按下板子上的 `RST` 按钮，然后按下 `BOOT` 按钮，LED 将点亮。

**步骤 2**：将 XIAO 连接到您的 PC 并打开串口工具，如 PuTTY、COMTOOL 或任何其他您喜欢的工具。

**步骤 3**：打开终端通信

- 对于 `COMTOOL`：
  
(1). 选择正确的串口并将波特率设置为 **115200**

(2). 转到终端并打开通信

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/23.png" alt="pir" width={500} height="auto" /></p>

- 对于 `PuTTY`：

(1). 选择正确的串行线路并将波特率设置为 **115200**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/25.png" alt="pir" width={500} height="auto" /></p>

(2). 转到终端并点击 'Implicit CR in every LF'

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/26.png" alt="pir" width={500} height="auto" /></p>

**步骤 4**：在 ESP BLE prov 应用上点击 'Provison Device'

连接成功后，wifi 连接信息和 lora 网关 ID 将在终端显示。

<div class="table-center">
<iframe width="700" height="600" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/wifi.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="false"> </iframe>
</div>

:::tip
请记下这些信息，它们对 Lora 配置很有用。

1. IP 地址：192.168.1.44
2. 端口：8000
3. 网关 EUI：0xF09E9EFFFE20D02C

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/24.png" alt="pir" width={600} height="auto" /></p>

Json 格式的 lora 包转发器消息可以在终端上查看。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/27.png" alt="pir" width={400} height="auto" /></p>

### LoRaWAN 配置

根据我们记下的 IP 地址和端口，web 界面可在：`http://ip_address:8000` 访问，在浏览器中打开它。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/28.png" alt="pir" width={400} height="auto" /></p>

web 界面允许配置以下参数：

信道参数：

- 频率
- 扩频因子
- 带宽

LoRaWAN 网络服务器：

- 地址
- 端口

SNTP 服务器地址：获取 UTC 时间

配置表单底部有 2 个按钮：

`Configure`：按下时，HTML 表单中设置的参数将写入闪存（NVS）。<br/>
`Reboot`：按下时，触发重启命令，LoRaHub 将重启并应用新配置。

:::note
请注意，写入闪存的配置只有在下次重启时才会生效。
:::

全部设置完成。现在我们可以将 XIAO ESP32S3 和 SX1262 套件 lora 套件连接到 Lora 网络服务器，如 TTN（The things network）和 Chirpstack。

- [连接到 TTN](https://wiki.seeedstudio.com/cn/wio_sx1262_xiao_esp32s3_LNS_TTN/)
- [连接到 Chirpstack](https://wiki.seeedstudio.com/cn/wio_sx1262_xiao_esp32s3_LNS_Chirpstack/)

## 自定义和构建固件

如果您想重置配置，以下说明可以帮助您在 ESP-IDF 环境下自行构建固件。

### 设置环境

此项目基于 Espressif ESP-IDF 开发，查看此[指南](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html#installation)来设置环境。

#### 获取 ESP-IDF

```linux
mkdir -p ~/esp
cd ~/esp
git clone -b v5.2.1 --recursive https://github.com/espressif/esp-idf.git
```

#### Set up Tools

```linux
cd esp-idf/
./install.sh
```

### 安装 One Channel Hub

**步骤 1**: 将仓库克隆到本地仓库。并导航到项目路径。

```linux
git clone https://github.com/Seeed-Studio/one_channel_hub.git

cd ~/this_project_directory
```

**步骤 2**: 安装所需驱动

- SX126x 驱动程序(sx1261, sx1262, sx1268):

```
git clone -b v2.3.2 https://github.com/Lora-net/sx126x_driver.git sx126x_driver
```

- llcc68 驱动程序:

```
git clone -b v2.3.2 https://github.com/Lora-net/llcc68_driver.git llcc68_driver
```

- lr11xx 驱动程序(lr1121):

```
git clone -b v2.4.1 https://github.com/Lora-net/SWDR001.git lr11xx_driver
```

### Build Firmware

**步骤 1**: 进入 lorahub 目录。

```
cd lorahub
```

为从命令行使用 ESP-IDF 进行构建准备您的 Linux/MAC 终端。在 Windows 上可以跳过此步骤，因为已安装的 'ESP-IDF x.x CMD' 工具会自动准备环境。

```
. ~/esp/esp-idf/export.sh
```

配置要构建的 ESP32 目标。

```
idf.py set-target esp32s3
```

如有必要，自定义构建：

```
idf.py menuconfig
```

(1) 设置**板型**：

`LoRaWAN 1-CH HUB Configuration` → `Hardware Configuration` → `Board type` → `Seeed XIAO ESP32S3 Gateway`

Lora 无线电类型的默认设置是 `sx1262`。

不要忘记禁用 OLED 显示屏。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/21.png" alt="pir" width={800} height="auto" /></p>

(2) 设置**闪存大小**：

`Serial flasher config` → `Flash size` → 对于 XIAO ESP32S3 是 `8MB`。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/22.png" alt="pir" width={800} height="auto" /></p>

 (3) 设置 **Wi-Fi 配网**：

- 通过 **SenseCraft APP** 设置 Wi-Fi 配网：
 `LoRaWAN 1-CH HUB Configuration` → `WiFi Configuration` → `Disable WiFi Provisionning over BLE`

- 通过 **ESP BLE prov** 设置 Wi-Fi 配网：
 `LoRaWAN 1-CH HUB Configuration` → `WiFi Configuration` → `Enable WiFi Provisionning over BLE`

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/100.png" alt="pir" width={800} height="auto" /></p>

构建项目：

```
idf.py all
```

## 资源

- [XIAO ESP32S3 & Wio-SX1262 套件通过 SenseCraft APP 的单通道集线器固件](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/seeed_xiao_esp32s3_one_chanel_hub_2024120201.zip)
- [XIAO ESP32S3 & Wio-SX1262 套件通过 ESP BLE prov 的单通道集线器固件](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/seeed_xiao_esp32s3_one_chanel_hub_20241016.zip)
- [Github 仓库](https://github.com/Seeed-Studio/one_channel_hub/tree/xiao-esp32s3-sx1262-bt-config)

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
