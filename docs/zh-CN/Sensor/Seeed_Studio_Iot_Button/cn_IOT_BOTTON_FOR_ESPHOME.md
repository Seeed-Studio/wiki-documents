---
description: Seeed Studio Iot Button 连接到 ESPHome
title: Iot Button 连接到 ESPHome
keywords:
  - ESPHOME
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.jpg
slug: /cn/iot_botton_connect_to_esphome
last_update:
  date: 11/11/2024
  author: qiuyu wei
---


## 入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.jpg" style={{width:600, height:'auto'}}/></div>

在这个示例中，我们将介绍如何将 Iot Button 连接到 home assistant，并使用 Iot Button 控制蜂鸣器的开关。

### 所需材料

<div class="table-center">
  <table align="center">
    <tr>
      <th>Iot Button</th>
      <th>XIAO ESP32C3</th>
      <th>XIAO 扩展板底座</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/XIAOESP32C3.png" style={{width:170, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/BOARD.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://files.seeedstudio.com/seeed_iot_botton_connect_to_esphome" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
       <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

这是一个功能强大的 Seeed Studio XIAO 功能扩展板，具有丰富的外设，包括蜂鸣器。我们还选择了 XIAO ESP32C3 作为主控，当然，您也可以基于这个案例自由发挥创作！

## 在 Home Assistant 上安装 ESPHome

 **步骤 1**. **点击设置** --> **插件** --> **插件商店**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/1.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/1.5.png" style={{width:1000, height:'auto'}}/></div>

**步骤 2**. 搜索 **ESPHome**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/2.png" style={{width:1000, height:'auto'}}/></div>

**步骤 3**. 点击 **安装**，然后点击 **启动**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/3.png" style={{width:1000, height:'auto'}}/></div>

**步骤 4**. 安装成功

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/4.png" style={{width:1000, height:'auto'}}/></div>

## 将 IoT 按钮添加到 ESPHome

**步骤 5**. 点击 **+NEW DEVICE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/5.png" style={{width:1000, height:'auto'}}/></div>

**步骤 6**. 点击 **NEXT** 并为您的设备起一个您喜欢的名称。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/6.png" style={{width:800, height:'auto'}}/></div>

**步骤 7**. 选择您的设备类型

这里我们暂时选择第一个，因为 ESPHome 目前不支持 ESP32C6，所以我们暂时无法在列表中找到 ESP32C6 选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/7.png" style={{width:580, height:'auto'}}/></div>

**步骤 8**. 成功添加设备，最后点击 **SKIP**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/8.png" style={{width:780, height:'auto'}}/></div>

## 配置 IOT BUTTON

### 向 IOT BUTTON 添加程序

**步骤 9**. 相应的设备卡片将出现在 ESPHome 页面上，然后点击 **EDIT**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/9.png" style={{width:1000, height:'auto'}}/></div>

**步骤 10**. 进入编辑界面后，您需要配置 **ESP32**，您可以直接复制代码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/10.png" style={{width:1000, height:'auto'}}/></div>

```yaml
esp32:
  board: esp32-c6-devkitc-1
  variant: esp32c6
  flash_size: 4MB # upload.flash_size
  framework:
    type: esp-idf
    platform_version: 6.5.0 # Need at least 6.4 for ESP32-C6

    # Tasmota's release of 5.1.3 works, first-party release does not LOL
    version: 5.1.3
    source: https://github.com/tasmota/esp-idf/releases/download/v5.1.3.240325/esp-idf-v5.1.3.zip

    # Fix flash size by ensuring IDF flash size is also set (was defaulting to 2MB?!?)
    # See https://github.com/esphome/issues/issues/5404
    sdkconfig_options:
      CONFIG_ESPTOOLPY_FLASHSIZE_4MB: y
```

**步骤 11**. 添加相应的组件并初始化和配置设备引脚。

:::note
WIFI ssid 和密码配置应与服务器相同，以确保连接到同一网络！
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/11.png" style={{width:1000, height:'auto'}}/></div>

```yaml
binary_sensor:
  - platform: gpio
    pin:
      number: GPIO3
      mode: INPUT_PULLUP
      inverted: True
    name: "IoT Button"
```

**步骤 12**. 完成上述步骤后，点击右上角的 **INSTALL**，然后选择 **Plug into this computer**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/12.png" style={{width:1000, height:'auto'}}/></div>

**步骤 13**. 然后请耐心等待，等待时间结束后，点击 **Download project**，选择 **Factory format** 下载项目文件，然后点击 **Open ESPHome Web**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.2.png" style={{width:1000, height:'auto'}}/></div>

**步骤 14**. 此时您需要通过 USB 将 IoT Button 连接到计算机，然后点击 **CONNECT** 选择 **正确的串口**！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.3.png" style={{width:1000, height:'auto'}}/></div>

**步骤 15**. 获取您的 ESPHome 项目的 **factory 文件**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/15.png" style={{width:1000, height:'auto'}}/></div>

**步骤 16**. 如果一切顺利，您将能够看到以下图像。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/16.png" style={{width:1000, height:'auto'}}/></div>

### 将 IoT Button 添加到仪表板

**步骤 17**. 点击 **Settings**，然后选择 **Devices & services**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/17.png" style={{width:1000, height:'auto'}}/></div>

**步骤 18**. 选择相应的设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/18.png" style={{width:1000, height:'auto'}}/></div>

**步骤 19**. 选择要添加的 IoT Button，您可以为设备选择区域并点击 **FINISH**！IoT Button 出现在主页的 **仪表板** 中！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/19.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/20.png" style={{width:1000, height:'auto'}}/></div>

## IoT 按钮控制蜂鸣器

### 向蜂鸣器添加程序

:::note
请确保您已在 Home Assistant 中添加了蜂鸣器，您可以参考上述过程来完成此操作。
:::

首先，您需要根据上述过程将蜂鸣器添加到 ESPHome。然后您可以开始编写程序，您可以参考我们提供的示例，但需要注意实际引脚的差异。

```yaml
esphome:
  name: buzzer
  friendly_name: buzzer

esp32:
  board: esp32-c3-devkitm-1
  framework:
    type: arduino

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "k13mbm4GBgaxe8yf5IHojn7am3imn0pFZrUwRe3IbRQ="

ota:
  - platform: esphome
    password: "ba8bb045e584ddeb1803debf2cce1311"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Buzzer Fallback Hotspot"
    password: "EL0JOgoaGbQq"

captive_portal:

output:
  - platform: ledc
    id: my_buzzer
    pin: GPIO5

switch:
  - platform: template
    name: "Buzzer"
    turn_on_action:
      - output.turn_on: my_buzzer
      - output.ledc.set_frequency:
          id: my_buzzer
          frequency: 1000Hz
      - output.set_level:
          id: my_buzzer
          level: 50%
    turn_off_action:
      - output.turn_off: my_buzzer
```

### 自动化

**步骤 20**. 选择 **Automations & scenes**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/21.png" style={{width:1000, height:'auto'}}/></div>

**步骤 21**. 点击 **CREATE AUTOMATION**，创建新的自动化。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/22.png" style={{width:1000, height:'auto'}}/></div>

**步骤 22**. 您可以参考以下配置来创建您自己的自动化。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/23.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/24.png" style={{width:1000, height:'auto'}}/></div>

如果您已成功完成上述步骤，当您按下按钮时，蜂鸣器将成功发声并持续两秒钟。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>