---
description: 将 Seeed Studio IoT 按钮连接到 ESPHome
title: 将 Seeed Studio IoT 按钮连接到 ESPHome
keywords:
  - ESPHOME
  - IoT Button
  - ESP32-C6
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.webp
slug: /cn/iot_button_for_esphome
last_update:
  date: 03/14/2025
  author: qiuyu wei, Citric
---

# 将 Seeed Studio IoT 按钮连接到 ESPHome

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.jpg" style={{width:600, height:'auto'}}/></div>

在本教程中，我们将向您展示如何使用 ESPHome 将 Seeed Studio IoT 按钮连接到 Home Assistant。您将学习如何设置按钮来检测不同的按压模式（单击、双击和长按），并在智能家居中触发不同的操作。

:::note
如果您按照本 Wiki 将 IoT 按钮连接到 ESPHome，请注意潜在的限制：

**手动唤醒和重连延迟：** 每次您想要使用按钮时，都需要通过按压来手动唤醒它。唤醒后，设备需要重新连接到网络，这可能需要一小段时间才能再次使用按钮。

如果您选择 IoT 按钮 V2，在 ESPHome 中将比第一代产品增加额外的电源检测功能。
:::


## 所需材料

<div class="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio IoT 按钮</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-IoT-Button-p-6419.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Seeed Studio IoT 按钮是一个多功能智能按钮，内置 ESP32-C6 芯片。它是一个完整的独立设备，可以与 Home Assistant 集成来控制各种设备并触发自动化。凭借其 ESP32-C6 芯片，它提供低功耗和可靠的连接性，无需任何额外的开发板。

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

**步骤 6**. 点击 **NEXT** 并为您的设备命名。我们建议使用 "seeedstudio-iot-button" 或类似的名称。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/6.png" style={{width:600, height:'auto'}}/></div>

**步骤 7**. 选择您的设备类型

对于内置 ESP32-C6 的 IoT 按钮，选择 "ESP32" 作为设备类型。我们稍后会修改配置以指定正确的 ESP32 变体。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/7.png" style={{width:580, height:'auto'}}/></div>

**步骤 8**. 成功添加设备后，最后点击 **SKIP**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/8.png" style={{width:600, height:'auto'}}/></div>

## 配置 IoT 按钮

### 使用 Web 烧录器（推荐方法）

开始使用 IoT 按钮最简单的方法是使用 Web 烧录器工具直接从浏览器安装预构建的 ESPHome 固件。

**步骤 1**：访问 [Seeed Studio IoT Button Firmware Flasher](https://gadgets.seeed.cc/) 网站。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/iot_button_zigbee/3.png" style={{width:800, height:'auto'}}/></div>

**步骤 2**：使用 USB 线将您的 IoT 按钮连接到计算机。

**步骤 3**：点击 Web 烧录器页面上的 "Install" 按钮。

**步骤 4**：从弹出对话框中选择正确的 USB 端口。

**步骤 5**：浏览器将自动下载固件并烧录到您的设备。

**步骤 6**：烧录完成后，IoT 按钮将创建自己的 WiFi 网络。从您的计算机或智能手机连接到名为 "seeedstudio-iot-button" 的 WiFi 网络。

**步骤 7**：连接后，您的设备应该会自动打开配置页面。如果没有，请打开浏览器并导航到 `http://192.168.4.1`。

**步骤 8**：在配置页面上：
   - 输入您的家庭 WiFi 网络名称（SSID）和密码
   - 确保这与您的 Home Assistant 连接的网络相同
   - 点击 "Save" 应用设置

**步骤 9**：IoT 按钮将重启并连接到您的家庭 WiFi 网络。

**步骤 10**：在 Home Assistant 中，转到设置 > 设备和服务。您应该会看到发现新 ESPHome 设备的通知。点击 "Configure" 将设备添加到 Home Assistant。

**步骤 11**：按照提示完成设置。IoT 按钮现在将出现在您的 Home Assistant 仪表板中，带有对应不同按钮操作的三个虚拟开关。

### 替代方法：使用 ESPHome 仪表板

如果您更喜欢使用 ESPHome 仪表板来更好地控制配置，请按照以下步骤操作。

### 添加 ESPHome 配置

**步骤 1**. 相应的设备卡片将出现在 ESPHome 页面上，然后点击 **EDIT**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/9.png" style={{width:1000, height:'auto'}}/></div>

**步骤 2**. 用以下代码替换整个配置：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/10.png" style={{width:1000, height:'auto'}}/></div>

由于代码频繁更新，请点击下面发布的按钮访问 Yaml 程序。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/xiao-esphome-projects/blob/main/projects/seeedstudio-iot-button/seeedstudio-iot-button.yaml" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>IoT Button V1 Yaml 🖱️</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/xiao-esphome-projects/blob/main/projects/seeedstudio-iot-button/seeedstudio-iot-button-v2.yaml" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>IoT Button V2 Yaml 🖱️</font></span></strong>
    </a>
</div>


:::note
确保将 "Your_WiFi_SSID" 和 "Your_WiFi_Password" 替换为您的实际 WiFi 凭据。WiFi 配置应与运行 Home Assistant 服务器的网络匹配，以确保正确的连接性。
:::

### 理解配置

让我们分解此配置的关键部分：

1. **ESP32 配置**：
   - 为 IoT 按钮的内置芯片指定 ESP32-C6 变体和板类型
   - 将闪存大小设置为 4MB
   - 使用 ESP32-C6 所需的 ESP-IDF 框架

2. **按钮配置**：
   - 连接到内部连接物理按钮的 GPIO9
   - Inverted: True 表示未按下时引脚被拉高，按下时变低
   - 配置三种不同的按压模式：
     - 单次短按（快速按下并释放）
     - 双击（两次快速按压）
     - 长按（保持 1-2.5 秒）

3. **虚拟开关**：
   - 创建三个将出现在 Home Assistant 中的模板开关
   - 每个开关对应不同的按钮按压模式
   - 这些开关可用于自动化以控制其他设备

**步骤 3**. 完成配置后，点击右上角的 **INSTALL**，然后选择 **Plug into this computer**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/12.png" style={{width:1000, height:'auto'}}/></div>

**步骤 4**. 等待编译过程完成。然后点击 **Download project**，选择 **Factory format** 下载项目文件，然后点击 **Open ESPHome Web**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.2.png" style={{width:1000, height:'auto'}}/></div>

**步骤 5**. 通过 USB 将 IoT 按钮连接到您的计算机。点击 **CONNECT** 并选择正确的串行端口。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.3.png" style={{width:1000, height:'auto'}}/></div>

**步骤 6**. 点击 **INSTALL** 将固件刷写到您的 IoT 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/15.png" style={{width:1000, height:'auto'}}/></div>

**步骤 7**. 如果一切顺利，您将看到安装成功的消息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/16.png" style={{width:1000, height:'auto'}}/></div>

## 将 IoT 按钮添加到 Home Assistant

**步骤 16**. 返回到 Home Assistant。点击 **Settings**，然后选择 **Devices & services**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/17.png" style={{width:1000, height:'auto'}}/></div>

**步骤 17**. 您应该会看到关于发现新设备的通知。点击 **CONFIGURE**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/18.png" style={{width:1000, height:'auto'}}/></div>

**步骤 18**. 按照提示将 IoT 按钮添加到 Home Assistant。您可以选择设备所属的区域并点击 **FINISH**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/19.png" style={{width:1000, height:'auto'}}/></div>

**步骤 19**. IoT 按钮及其三个虚拟开关现在将出现在您的 Home Assistant 仪表板中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/20.png" style={{width:1000, height:'auto'}}/></div>

## 使用 IoT 按钮创建自动化

现在您的 IoT 按钮已经设置完成，您可以创建自动化来控制智能家居中的设备。让我们创建一个简单的自动化，当您按下按钮时打开灯光。

**步骤 20**. 在 Home Assistant 中，转到 **Settings** > **Automations & scenes**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/21.png" style={{width:1000, height:'auto'}}/></div>

**步骤 21**. 点击 **CREATE AUTOMATION**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/22.png" style={{width:1000, height:'auto'}}/></div>

**步骤 22**. 设置您的自动化：

1. **Name**：为您的自动化提供一个描述性名称，如"IoT Button Single Press - Turn On Light"
2. **Trigger**：选择"State"作为触发器类型
   - Entity：选择"Switch 1"（用于单击）
   - From："off"
   - To："on"
3. **Action**：选择您想要控制的设备
   - 例如，选择一个灯光并将其设置为打开

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/23.png" style={{width:1000, height:'auto'}}/></div>

**步骤 23**. 点击 **SAVE** 创建自动化。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/24.png" style={{width:1000, height:'auto'}}/></div>

## 高级用法：使用不同按压模式控制不同设备

IoT Button 配置的强大功能之一是能够检测不同的按压模式。以下是使用每种模式的一些想法：

1. **单击（开关 1）**：
   - 开启/关闭当前房间的灯光
   - 切换常用设备

2. **双击（开关 2）**：
   - 激活场景（例如，"电影夜晚"，调暗灯光并打开电视）
   - 同时控制一组设备

3. **长按（开关 3）**：
   - 激活安全功能（布防/撤防警报）
   - 触发紧急例程
   - 一次性关闭多个设备

要设置这些高级自动化，请按照上述步骤创建额外的自动化，但选择适当的开关（开关 1、2 或 3）作为触发器并配置所需的操作。

## 故障排除

如果您在使用 IoT Button 时遇到问题，以下是一些常见的故障排除步骤：

1. **按钮无法连接到 WiFi**：
   - 在 ESPHome 配置中验证您的 WiFi 凭据
   - 确保您的 WiFi 网络是 2.4GHz（ESP32-C6 支持 2.4GHz 和 5GHz，但 2.4GHz 通常具有更好的范围）

2. **按钮未出现在 Home Assistant 中**：
   - 检查按钮和 Home Assistant 是否在同一网络上
   - 重启 ESPHome 插件和 Home Assistant

3. **按钮按压未被检测到**：
   - 验证 GPIO 引脚配置（标准 IoT Button 为 GPIO9）
   - 检查 ESPHome 中的日志以查看是否检测到按钮按压

4. **自动化未触发**：
   - 验证自动化已启用
   - 检查触发条件是否完全匹配（状态从"off"变为"on"）

## 故障排除

### Q1：为什么我的设备在更换电池后持续掉线且无法连接到互联网？我可以确认电池已充电。

电池被移除后，由于 18650 电池的芯片保护策略，需要通过充电的 USB 电源线稍微激活一下才能正常工作。

## 资源

- **[GITHUB]** [Seeed IoT Button Github 仓库](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/seeedstudio-iot-button)
- **[PDF]** [Seeed IoT Button 原理图 PDF](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH.pdf)
- **[SCH&PCB]** [Seeed IoT Button 原理图和 PCB](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH&PCB.zip)


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