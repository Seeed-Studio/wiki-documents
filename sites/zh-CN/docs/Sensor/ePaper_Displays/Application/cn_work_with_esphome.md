---
description: 使用 ESPHome 和 Home Assistant 驱动任意兼容的 Seeed ePaper 产品的参考指南——烧录路径、通用 YAML 骨架，以及各产品 cookbook 的位置。
title: 使用 ESPHome
keywords:
  - ePaper 显示屏
  - ESPHome
  - Home Assistant
  - YAML
  - reTerminal
  - XIAO
  - TRMNL
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /epaper_work_with_esphome
sidebar_position: 1
last_update:
  date: 04/28/2026
  author: dimo
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 使用 ESPHome

本页是通过 [ESPHome](https://esphome.io/) 驱动任意兼容 Seeed ePaper 产品并将其集成到 [Home Assistant](https://www.home-assistant.io/) 中的**参考手册**。它涵盖了所有硬件之间相同的部分：

1. 为什么你会选择用 ESPHome 来驱动 ePaper 显示屏。
2. 两种烧录路径：**ESPHome Web Installer**（零配置、基于浏览器）和 **ESPHome CLI / HA 插件**（完整 YAML 控制）。
3. 通用 YAML 骨架——`wifi`、`api`、`ota`、`display`——每个产品都在此基础上结合自己的引脚映射进行专门化。
4. 每个产品的 cookbook 在哪里（外设、硬件相关 lambda、仪表盘配方）。

如果你想要一个**端到端的“烧录 → 连接 → 第一个仪表盘”演练**，可以直接跳到下面与你硬件对应的 cookbook；这些页面复用本参考中的样板内容，并添加产品特定示例。

## 兼容硬件

在[主汇总页面](/cn/seeed_epaper_displays)上，所有 **ESPHome** 列被勾选的 Seeed ePaper 产品都可以按本流程操作：

<div class="table-center">
  <table align="center">
    <tr>
      <th>产品</th>
      <th>MCU</th>
      <th>Cookbook</th>
    </tr>
    <tr>
      <td><strong>reTerminal E1001 / E1002 / E1003 / E1004</strong></td>
      <td>XIAO ESP32-S3</td>
      <td><a href="/cn/reterminal_e10xx_with_esphome">基础</a> · <a href="/cn/reterminal_e10xx_with_esphome_advanced">进阶（外设）</a></td>
    </tr>
    <tr>
      <td><strong>EE04 driver board</strong></td>
      <td>XIAO ESP32-S3 Plus</td>
      <td><a href="/cn/EE04_with_esphome_advanced">EE04 ESPHome cookbook</a></td>
    </tr>
    <tr>
      <td><strong>XIAO 7.5" ePaper Panel</strong></td>
      <td>XIAO ESP32-C3</td>
      <td><a href="/cn/xiao_075inch_epaper_panel_esphome">XIAO Panel ESPHome cookbook</a></td>
    </tr>
    <tr>
      <td><strong>TRMNL 7.5" (OG) DIY Kit</strong></td>
      <td>XIAO ESP32-S3 Plus</td>
      <td><a href="/cn/ogdiy_kit_works_with_esphome">TRMNL DIY Kit ESPHome cookbook</a></td>
    </tr>
  </table>
</div>

:::tip
在找 **TRMNL 云端仪表盘**（无 YAML、基于插件）吗？请查看 [使用 TRMNL](/cn/reterminal_e10xx_trmnl)。在找 **Seeed 的零代码可视化 HMI** 吗？请查看 [使用 SenseCraft HMI](/cn/EE04_with_hmi)。
:::

## 为什么在 ePaper 上使用 ESPHome？

- **能效高**——ePaper 只有在屏幕更新时才耗电，因此组合（ESP32 + ESPHome 深度睡眠 + ePaper）可以在电池供电下运行数周甚至数月。
- **日光可读**——与 LCD 不同，显示屏在阳光下也清晰可见；非常适合作为壁挂式 Home Assistant 面板。
- **原生 HA 公民**——一旦设备出现在 Home Assistant 中，每个实体（空调、日历、传感器、人员、天气）都只差一个 Jinja 模板就能上墙显示。
- **本地优先**——无云端、无厂商锁定。一切都在你的局域网中运行。

## 步骤 1：选择烧录路径

可以通过两种方式将 ESPHome 固件写入设备。正确的选择取决于你是想从零开始编写 YAML，还是只想快速获得一个可用的仪表盘。

<Tabs groupId="esphome-flash-path">
<TabItem value="web-installer" label="路径 A：ESPHome Web Installer（推荐首次使用者）" default>

Seeed 托管了一个预构建的固件 ZIP，通过浏览器使用 WebSerial 将其烧录到你的设备。

1. 使用 USB-C 线将设备连接到电脑。
2. 在 **Chrome** 或 **Edge** 中打开与你产品对应的烧录页面（从该产品的 cookbook 中链接）。
3. 点击 **Connect**，选择串口，然后点击 **Install**。
4. 烧录完成后，设备会启动到一个 Wi-Fi 强制门户（`ESPHome-XXXX`）。连接后设置 Wi-Fi，设备将通过 ESPHome 集成出现在 Home Assistant 中。

此路径**无需编辑 YAML**。如果你之后想开始自定义，可以在 ESPHome 仪表盘中“接管”该设备。

</TabItem>
<TabItem value="yaml-cli" label="路径 B：YAML + ESPHome 仪表盘（完全控制）">

若要对固件进行完全控制（自定义显示布局、自定义传感器、多页面仪表盘、深度睡眠调优、OTA 更新），请运行 **ESPHome 仪表盘**，方式可以是：

- 作为 Home Assistant 的 **插件（Add-on）**（如果你已经运行 HA OS / HA Supervised，推荐此方式），或
- 作为独立的 **Python CLI**（`pip install esphome` 然后 `esphome dashboard config/`）。

工作流程：

1. 在 ESPHome 仪表盘中，点击 **+ New device** → 输入名称 → 选择正确的 ESP 变体（ESP32-S3 / ESP32-C3 / 等——你的产品 cookbook 会告诉你选哪一个）。
2. 仪表盘会生成一个初始的 `<device-name>.yaml`。将其主体替换为 cookbook 中与你产品对应的 YAML（形状见下方步骤 2）。
3. 点击 **Install** → 首次烧录选择 **Plug into the computer running ESPHome**；之后的烧录通过 OTA 无线完成。
4. 设备会自动加入 Home Assistant 中的 ESPHome 集成。

</TabItem>
</Tabs>

## 步骤 2：通用 YAML 骨架

每个 Seeed ePaper 的 ESPHome 配置都遵循相同的结构。与你产品对应的 cookbook 会填入**产品特定部分**（替换项、引脚映射、屏幕型号）——但整体形状始终是：

```yaml
substitutions:
  device_name: my-epaper

esphome:
  name: ${device_name}
  friendly_name: ${device_name}

# Pick the right platform for your hardware.
# - reTerminal E Series & EE04 & TRMNL Kit: esp32 with framework: arduino (S3 variant)
# - XIAO 7.5" Panel: esp32 with framework: arduino (C3 variant)
esp32:
  board: seeed_xiao_esp32s3   # see your cookbook
  framework:
    type: arduino

logger:
api:
  encryption:
    key: !secret api_key
ota:
  - platform: esphome
    password: !secret ota_password
wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  ap:
    ssid: "${device_name} Fallback"

# SPI bus that drives the ePaper - exact pins come from the cookbook
spi:
  clk_pin: GPIO13
  mosi_pin: GPIO11

# The display block - the model + pin map are the part that's
# different per product. The cookbook gives you the right values.
display:
  - platform: waveshare_epaper
    id: epaper
    cs_pin: GPIO9
    dc_pin: GPIO15
    busy_pin: GPIO12
    reset_pin: GPIO14
    model: 7.50inv2
    update_interval: never   # we'll trigger refreshes from automations
    lambda: |-
      it.print(0, 0, id(roboto_24), "Hello, ePaper!");

font:
  - file: "fonts/Roboto-Regular.ttf"
    id: roboto_24
    size: 24
```

哪些是产品特定内容（并位于各自的 cookbook 中）：

- `esp32.board` —— E1001/E1002/EE04/TRMNL Kit 使用 `seeed_xiao_esp32s3`；XIAO 7.5" Panel 使用 `esp32-c3-devkitm-1`；等等。
- `spi` 和 `display` 的引脚映射。
- `model` 的取值（`7.50in-bwr`、`13.3in-spectra6` 等）。
- 任意板载外设（按键 / 蜂鸣器 / 电池 / SHT4x）——在相关 cookbook 的 **进阶** 章节中介绍。

## 步骤 3：连接到 Home Assistant

固件启动并加入你的 Wi-Fi 后，Home Assistant 会自动发现该设备：

1. **Settings → Devices & services**
2. ESPHome 集成会为你的设备显示一个 “Discovered” 卡片。
3. 点击 **Configure**，粘贴 API 加密密钥（来自 `secrets.yaml`），然后提交。
4. 设备及其所有实体（sensors、binary_sensors、display）现在都可以在 HA 中使用。

现在你可以将这些实体拖入 Lovelace 仪表盘，或者——在 ePaper 上更有趣的方式——使用 `display.lambda` 块，通过 [`homeassistant`](https://esphome.io/components/homeassistant.html) 组件将任意 HA 实体直接渲染到屏幕上。

## 接下来去哪——Cookbooks

本页有意只停留在样板层面。产品特定的 YAML、外设示例以及端到端配方都位于各产品的 cookbook 中：

- **[reTerminal E 系列 — 基础 ESPHome](/cn/reterminal_e10xx_with_esphome)** —— 第一个仪表盘、Wi-Fi 设置、适用于 E1001/E1002/E1003/E1004 的预构建固件 ZIP。
- **[reTerminal E 系列 — 进阶 ESPHome](/cn/reterminal_e10xx_with_esphome_advanced)** —— 按键、蜂鸣器、电池监控、SHT4x 传感器、深度睡眠、多页面仪表盘。
- **[EE04 driver board — ESPHome](/cn/EE04_with_esphome_advanced)** —— 在 XIAO ESP32-S3 + EE04 + 你选择的 ePaper 屏幕上实现完整 Home Assistant 集成。
- **[XIAO 7.5" ePaper Panel — ESPHome](/cn/xiao_075inch_epaper_panel_esphome)** —— 精简的 ESP32-C3 仪表盘。
- **[TRMNL 7.5" DIY Kit — ESPHome](/cn/ogdiy_kit_works_with_esphome)** —— 使用该套件硬件配合 ESPHome，而不是 TRMNL 云平台。

当有新的 ePaper 产品发布时，相应的 cookbook 会添加到各产品的文件夹下；本主页面也会更新链接到它。

## 常见问题

### 烧录后显示屏保持空白

- 确认 `display.platform` 和 `model` 字符串与你的屏幕匹配——错误的型号会在刷新时静默地保持空白。
- 检查 `busy_pin` 和 `reset_pin` 是否正确连接；悬空的 busy 线会阻塞所有刷新。
- 对于彩色 ePaper（`spectra6`、`7-color`、`bwr`），首次刷新可能需要 25–45 秒；在进一步排查前请耐心等待。

### 设备没有出现在 Home Assistant 中

- 确认设备已加入 Wi-Fi（在 ESPHome 仪表盘日志中查看）。
- 确保 YAML 中存在 `api:`，且 HA 中的加密密钥与 `secrets.yaml` 中一致。
- 手动添加集成：**Settings → Devices & services → Add Integration → ESPHome**，然后输入设备的 IP。

### 电池耗电比预期更快

只有当 SoC 的其余部分也处于睡眠状态时，ePaper 才能真正省电。添加一个 `deep_sleep` 块（参见与你产品对应的进阶 cookbook），并降低 `update_interval`。

若要对某个特定产品进行更深入的故障排查，请查看该硬件的 cookbook。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
