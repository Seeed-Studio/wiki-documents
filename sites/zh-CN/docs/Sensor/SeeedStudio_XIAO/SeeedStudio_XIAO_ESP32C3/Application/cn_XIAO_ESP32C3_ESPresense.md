---
description: 基于 XIAO ESP32-C3 的存在检测节点可以与 Home Assistant 的 MQTT Room 组件配合工作，实现室内定位。
title: 在 Seeed Studio XIAO ESP32-C3 上部署 ESPresense 与 Home Assistant
keywords:
  - ESPresense
  - XIAO
  - Home Assistant
  - MQTT
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image132.webp
slug: /xiao-esp32c3-espresense
sku: 113991054
last_update:
  date: 01/16/2026
  author: Carla Guo
createdAt: '2026-01-20'
updatedAt: '2026-01-20'
url: https://wiki.seeedstudio.com/cn/xiao-esp32c3-espresense/
---

# 在 Seeed Studio XIAO ESP32-C3 上部署 ESPresense 与 Home Assistant


本文档描述了如何将开源蓝牙存在检测系统 **ESPresense** 与 **Seeed Studio XIAO ESP32-C3** 集成。基于 XIAO ESP32-C3 的存在检测节点可以与 Home Assistant 的 [MQTT Room 组件](https://www.home-assistant.io/components/sensor.mqtt_room/)配合工作，实现室内定位。



## 项目概述

**ESPresense** 是一个开源的蓝牙低功耗（BLE）存在检测系统，设计用于通过 **MQTT** 与 **Home Assistant** 配合工作。

在此迁移中：

### 1. 添加了 XIAO ESP32-C3 构建环境

`.ini` 配置已更新，为 **Seeed Studio XIAO ESP32-C3** 添加了专用的构建环境。

```ini
[env:seeed_xiao_esp32c3]
extends = esp32c3-cdc            ; XIAO ESP32-C3 uses native USB CDC
board = seeed_xiao_esp32c3
board_build.filesystem = spiffs
lib_deps =
  ${esp32c3.lib_deps}
  ${sensors.lib_deps}
build_flags =
  -D CORE_DEBUG_LEVEL=1
  -D FIRMWARE='"xiao-esp32c3"'   ; Firmware identifier
  -D SENSORS
  ${esp32c3-cdc.build_flags}
```

### 2. 改进了报告响应性

为了使数据报告更加响应，`defaults.h` 中的几个参数已调整如下：

#### A. 增加了移动敏感性

触发早期报告的距离阈值已从 **0.5 m** 降低到 **0.1 m**。即使是小幅移动现在也会激活"早期报告"逻辑。

```cpp
#define DEFAULT_SKIP_DISTANCE 0.1  // changed from 0.5
```

#### B. 缩短了强制报告间隔

最大报告间隔已从 **5 秒** 减少到 **1-2 秒**，确保即使在移动最小的情况下也能更及时地更新数据。

```cpp
#define DEFAULT_SKIP_MS 1000       // changed from 5000, now is 1 second
```

#### C. 改进了 Wi-Fi 和 BLE 共存（2.4 GHz）

当使用 2.4 GHz Wi-Fi（非 C5 芯片）时，蓝牙扫描会调整以避免独占共享天线。BLE 扫描窗口设置得比扫描间隔稍小，为 Wi-Fi 提供足够的空中时间进行 MQTT 连接和数据传输。

```cpp
#define BLE_SCAN_INTERVAL 0x80  // 128
#define BLE_SCAN_WINDOW   0x60  // reduced from 0x80 (~75% duty cycle)
```

此更改有助于减少内部争用并最小化由无线电资源抢占引起的延迟。


## 硬件要求

* Seeed Studio **XIAO ESP32-C3**
* USB-C 数据线（支持数据传输）
* PC（Windows/macOS/Linux）
* 稳定的 Wi-Fi 网络（2.4 GHz）
* Home Assistant 实例


## 软件和工具

| 工具                               | 用途                                               |
| ---------------------------------- | ----------------------------------------------------- |
| **PlatformIO**                     | 构建系统和烧录工具                          |
| ESP-IDF 工具链（通过 ESPresense） | 固件构建                                        |
| Web 浏览器                        | 设备配置                                  |
| Home Assistant                     | 存在集成                                  |
| Mosquitto Broker（HA 插件）       | MQTT 后端                                          |
| MQTT Explorer（可选）           | MQTT 调试                                        |
| nRF Connect（仅限 Android）         | BLE 广播                                       |




## 1. Home Assistant – MQTT 代理设置

### 安装 Mosquitto Broker 插件

- 打开 **Home Assistant**

   > 如果您还没有设置 Home Assistant，请参考此[指南](https://www.home-assistant.io/installation/)进行配置。

- 点击 **Settings → Add-ons → Add-on Store**
- 搜索 **Mosquitto broker**，安装它。安装后：
   - 点击 **Start**
   - 启用：

     - ✔ Start on boot
     - ✔ Watchdog

### 创建 MQTT 凭据

- 转到 **Configuration → Logins → Add**
- 创建专用的 MQTT 用户（推荐）
- 记录：

   - 用户名
   - 密码
   - Home Assistant IP 地址

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image1.png" style={{width:1000, height:'auto'}}/></div>


    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image2.png" style={{width:1000, height:'auto'}}/></div>





## 2. 构建和烧录 ESPresense

- 下载 [ESPresense 代码文件](https://github.com/Seeed-Studio/OSHW-XIAO-Series/tree/main/project/XIAO_ESP32-C3_BLE_ESPresense)，使用 PlatformIO 打开项目。

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image3.png" style={{width:1000, height:'auto'}}/></div>

   > 如果您还没有设置 Platform IO，请参考此[指南](https://docs.platformio.org/en/latest/integration/ide/vscode.html)进行下载。

- 等待依赖安装和环境设置完成。选择 **seeed_xiao_esp32c3** 环境，选择正确的端口，构建并上传。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image4.png" style={{width:1000, height:'auto'}}/></div>

- 等待固件烧录完成，按下复位按钮重启 XIAO ESP32-C3。


## 3. Wi-Fi 和 MQTT 配置（强制门户）

- 给 XIAO ESP32-C3 供电

- 在您的 PC 或手机上，打开 **Wi-Fi 设置**，连接到 ESPresense AP（例如 `ESPresense-XXXX`）

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image5.png" style={{width:400, height:'auto'}}/></div>

- 打开浏览器：`http://192.168.4.1`

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image6.png" style={{width:1000, height:'auto'}}/></div>

- 在网页上填写以下字段：

   | 字段              | 描述                            |
   | ------------------ | -------------------------------------- |
   | **Room Name**      | 逻辑房间标识符（例如 `room1`） |
   | **Wi-Fi SSID**     | 2.4 GHz 网络                        |
   | **Wi-Fi Password** | 网络密码                       |
   | **MQTT Broker IP** | Home Assistant IP                      |
   | **MQTT Port**      | `1883`（默认）                       |
   | **MQTT Username**  | 来自 Mosquitto 设置                   |
   | **MQTT Password**  | 来自 Mosquitto 设置                   |

- 点击 **Save**
- 保存后，重启 XIAO ESP32-C3。设备将自动连接到 WiFi 和 MQTT。

   > **建议：**
   > 在不同房间部署**至少两个 XIAO ESP32-C3 节点**以进行有意义的存在比较。

- 现在，打开 **Home Assistant**，导航到 **Settings → Devices & Services**


- ESPresense 节点将自动出现，设备名称格式：

   ```
   ESPresense + <Room Name>
   ```
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image7.png" style={{width:1000, height:'auto'}}/></div>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image8.png" style={{width:1000, height:'auto'}}/></div>



## 4. BLE 设备广播

接下来，我们需要让您的个人设备通过 BLE 被 ESPresense 发现。在某些情况下，您可能需要安装一个应用程序来使您的设备能够通过 BLE 广播。

### iOS 设备

Apple 设备发出各种 BTLE 连续性消息，通常由指纹 `apple:100?:*-*` 识别。
>在有多个 iPhone 的家庭中，附近信息可能会冲突，导致重复的指纹。您可以参考 https://espresense.com/devices/apple 来解决此问题。

### Android 设备（手动广播）

Android 设备通常比较保守，需要一个应用程序来让它们发出 BLE 广告。因此，需要一个应用程序来让我们找到它。

- 安装 **nRF Connect** 并打开应用程序。
- 转到 **ADVERTISER → "+" → ADD RECORD**，选择 **Manufacturer Data**
- 填写：

   | 字段      | 值                                            |
   | ---------- | ------------------------------------------------ |
   | Company ID | `0x004C`（这是 Apple Inc. 的固定 ID，所有 iBeacon 都必须使用此制造商 ID。）|
   | Data       | `0215E2C56DB5DFFB48D2B060D0F5A71096E000010001C5` |

   **数据格式说明**

   | 部分         | 描述     |
   | --------------- | --------------- |
   | `0215`          | iBeacon 前缀  |
   | `E2C56D...96E0` | UUID（16 字节） |
   | `0001`          | Major           |
   | `0001`          | Minor           |
   | `C5`            | 测量功率  |

- 保存并将广播切换为 **ON**

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image9.png" style={{width:400, height:'auto'}}/><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image10.png" style={{width:400, height:'auto'}}/></div>




### 其他支持的设备：
[https://espresense.com/devices](https://espresense.com/devices)



### MQTT 数据验证

您可以使用 [**MQTT Explorer**](https://mqtt-explorer.com/) 查看 ESPresense 发布的所有主题。
-  连接到：
   * Host：HA IP
   * Port：1883
   * Username / Password

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image11.png" style={{width:1000, height:'auto'}}/></div>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image12.png" style={{width:1000, height:'auto'}}/></div>

-  使用您的 UUID 的**前 8 个字符**进行搜索

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image13.png" style={{width:1000, height:'auto'}}/></div>






## 5. 通过 MQTT Room 传感器实现房间存在

### 编辑 `configuration.yaml`

- 前往 **Settings → Add-ons → Terminal**，打开终端
-  运行：

    ```bash
    ls /config
    ```
    确认 `configuration.yaml` 存在。

- 编辑文件：

    ```bash
    nano /config/configuration.yaml
    ```
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image14.png" style={{width:1000, height:'auto'}}/></div>

- 追加：

    ```yaml
    sensor:
      - platform: mqtt_room
        device_id: "iBeacon:e2c56db5-dffb-48d2-b060-d0f5a71096e0-1-1"
        name: "My iBeacon"
        state_topic: "espresense/devices/iBeacon:e2c56db5-dffb-48d2-b060-d0f5a71096e0-1-1"
        timeout: 60
        away_timeout: 120
    ```
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image15.png" style={{width:1000, height:'auto'}}/></div>

>⚠ **YAML 缩进至关重要**
>* 仅使用空格
>* 不要使用 TAB

- 保存：

   * `Ctrl + O` → Enter
   * `Ctrl + X`



### 验证并重启

- 前往 **Settings → System → Developer Tools**
- 打开 **YAML** 选项卡，点击 **Check Configuration**，如果有效，点击 **Restart**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image16.png" style={{width:1000, height:'auto'}}/></div>



## 6. 将实体添加到您的仪表板

重启后：

- 前往 **Developer Tools → States**
- 搜索：

    ```
    sensor.my_ibeacon
    ```

- 如果实体更新了房间名称，设置就完成了

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image17.png" style={{width:1000, height:'auto'}}/></div>

    >传感器初始化可能需要一些时间。如果状态显示 not_home，请耐心等待一段时间。如果长时间后仍然没有状态更新，我们建议使用 MQTT Explorer 检查 ESPresense 是否已离线，或验证您的个人设备是否能够成功扫描。

- 将实体添加到您的 **Dashboard**

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C3_ESPresense/image18.png" style={{width:1000, height:'auto'}}/></div>




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
