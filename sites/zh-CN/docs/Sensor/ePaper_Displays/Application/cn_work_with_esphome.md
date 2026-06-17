---
description: 使用 ESPHome 和 Home Assistant 驱动任意兼容 Seeed ePaper 产品的参考指南——YAML 工作流、通用骨架，以及各产品 cookbook 的查找位置。
title: 使用 ESPHome 工作
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
sidebar_position: 2
last_update:
  date: 04/28/2026
  author: dimo
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/cn/epaper_work_with_esphome/
updatedAt: '2026-06-15'
---

# 使用 ESPHome 工作

:::tip 在不搭建开发环境的情况下试用演示
如果你想在搭建开发环境之前，快速预览项目效果或试用基础演示固件，请打开 **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)**。你可以选择受支持的 reTerminal E 系列设备，并直接通过浏览器烧录演示固件。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware Flasher 🖱️</font></span></strong>
    </a>
</div><br />
:::

本页是通过 [ESPHome](https://esphome.io/) 驱动任意兼容 Seeed ePaper 产品并将其集成到 [Home Assistant](https://www.home-assistant.io/) 中的**参考手册**。它涵盖了所有硬件之间相同的部分：

1. 为什么你会选择使用 ESPHome 来驱动 ePaper 显示屏。
2. 如何使用 cookbook 中的 YAML 示例，将其调整为满足你的需求，并从 ESPHome 仪表板进行烧录。
3. 通用的 YAML 骨架——`wifi`、`api`、`ota`、`display`——每个产品都在此基础上结合自己的引脚映射进行专门化。
4. 每个产品的 cookbook 在哪里（外设、硬件相关的 lambda、仪表板配方）。

如果你想要一个**从“烧录 → 连接 → 第一个仪表板”的端到端演练**，可以直接跳转到下方与你硬件对应的 cookbook；这些页面复用本参考中的样板内容，并补充产品特定示例。

## 兼容硬件

在 [主汇总页面](/cn/seeed_epaper_displays) 上，所有 **ESPHome** 列被勾选的 Seeed ePaper 产品都可以使用本工作流：

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
      <td>
        <a href="https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_esphome/">显示基础、HA 集成与绘制</a><br/>
        <a href="https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_esphome_advanced/">按键、蜂鸣器、LED、电池、SHT4x 与深度睡眠</a><br/>
        <a href="https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_esphome_rtc_sd_microphone/">RTC、SD 卡与麦克风</a>
      </td>
    </tr>
    <tr>
      <td><strong>EE04 driver board</strong></td>
      <td>XIAO ESP32-S3 Plus</td>
      <td><a href="https://wiki.seeedstudio.com/cn/EE04_with_esphome_advanced/">EE04 ESPHome cookbook</a></td>
    </tr>
    <tr>
      <td><strong>XIAO 7.5" ePaper Panel</strong></td>
      <td>XIAO ESP32-C3</td>
      <td><a href="https://wiki.seeedstudio.com/cn/xiao_075inch_epaper_panel_esphome/">XIAO Panel ESPHome cookbook</a></td>
    </tr>
    <tr>
      <td><strong>TRMNL 7.5" (OG) DIY Kit</strong></td>
      <td>XIAO ESP32-S3 Plus</td>
      <td><a href="https://wiki.seeedstudio.com/cn/ogdiy_kit_works_with_esphome/">TRMNL DIY Kit ESPHome cookbook</a></td>
    </tr>
  </table>
</div>


## 为什么在 ePaper 上使用 ESPHome？

- **能效高** —— ePaper 只有在屏幕更新时才会消耗电能，因此组合（ESP32 + ESPHome 深度睡眠 + ePaper）可以在电池供电下运行数周甚至数月。
- **日光可读** —— 与 LCD 不同，显示屏在阳光下也清晰可见；非常适合作为壁挂式 Home Assistant 面板。
- **原生 HA 公民** —— 一旦设备出现在 Home Assistant 中，每个实体（空调、日历、传感器、人员、天气）都只差一个 Jinja 模板就能上墙显示。
- **本地优先** —— 无需云端，无厂商锁定。一切都在你的局域网中运行。

## 步骤 1：生成 ESPHome YAML 并烧录固件

最简单的入门方式是使用 **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)**。该 Hub 可以根据你的设备和功能选择生成 ESPHome YAML 文件，因此你无需手动拼装第一份配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/257.png" style={{width:1000, height:'auto'}}/></div>

推荐工作流：

1. 在桌面版 Chrome 或 Edge 中打开 [reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)。
2. 选择 **ESPHome** 作为平台。
3. 选择你的设备。
4. 在设置步骤中，选择你想启用的功能，例如显示屏、按键、电池、传感器、RTC、SD 卡、麦克风或深度睡眠（如果你的设备支持）。
5. 让页面生成匹配的 ESPHome YAML。
6. 使用 **Copy to clipboard** 或 **Download file** 导出生成的 YAML。
7. 将 YAML 粘贴或导入到你的 ESPHome 仪表板中。
8. 将手动编辑的精力集中在对你的项目最重要的部分：ePaper 显示内容、Home Assistant 实体、布局、字体和刷新行为。

:::tip
Firmware Hub 是新手推荐的起点，因为它处理了大量与设备相关的 YAML 结构。当你想理解生成的配置、组合高级功能，或从更小的示例构建自定义布局时，再使用各产品的 cookbook。
:::

运行 ESPHome 仪表板的方式可以是：

- 作为 Home Assistant 插件（如果你已经运行 HA OS / HA Supervised，推荐此方式），或
- 作为独立 Python CLI（`pip install esphome` 然后 `esphome dashboard config/`）。

手动 cookbook 工作流：

1. 打开与你硬件对应的 cookbook（见上表），并复制你需要的 YAML 示例。
2. 在 ESPHome 仪表板中点击 + New device，输入名称，并选择 cookbook 中列出的 ESP 变体（ESP32-S3、ESP32-C3 等）。
3. 用你的配置替换生成的起始文件。只有在你需要在同一设备上启用多个功能时，才组合多个 cookbook 片段。
4. 点击 Install → Plug into this computer 进行首次 USB 烧录。在 `wifi`、`api` 和 `ota` 设置完成后，后续更新可以通过 Wi-Fi 进行。
5. 当设备在线后，它会通过 ESPHome 集成出现在 Home Assistant 中。

## 步骤 2：理解生成的 YAML 结构

每个 Seeed ePaper 的 ESPHome 配置都遵循相同的基本结构，但硬件数值并非通用。请使用 Firmware Hub 或你产品的 cookbook 作为关于板卡类型、总线引脚、电源使能引脚、显示平台、显示型号以及板载外设的权威来源。

下面的代码块是一个**结构指南**，而不是可直接烧录的配置。它展示了在你生成或复制产品特定的 YAML 文件后，各类设置通常会出现的位置：

```yaml
substitutions:
  device_name: my-epaper
  friendly_name: My ePaper Display

esphome:
  name: ${device_name}
  friendly_name: ${friendly_name}
  # Optional. Some products enable power rails or read sensors during boot.
  # Keep this section from the generated YAML if your device needs it.
  on_boot:
    priority: 600
    then:
      - output.turn_on: <power_enable_output_id>
      - delay: 200ms

# Board and framework come from the Firmware Hub or your cookbook.
esp32:
  board: <board_from_generated_yaml>
  framework:
    type: arduino

logger:
  # Some ESP32-S3 products use a USB-to-UART bridge.
  # Keep hardware_uart from the generated YAML if it is present.
  # hardware_uart: UART0

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

captive_portal:

# Buses are hardware-specific. Do not reuse pins from another product.
spi:
  clk_pin: <spi_clk_from_generated_yaml>
  mosi_pin: <spi_mosi_from_generated_yaml>
  miso_pin: <spi_miso_if_required>

i2c:
  scl: <i2c_scl_if_required>
  sda: <i2c_sda_if_required>

i2s_audio:
  # Only needed when your generated YAML enables a microphone.
  i2s_lrclk_pin: <i2s_clock_if_required>

font:
  - file: "gfonts://Inter@700"
    id: font_medium
    size: 24

# Outputs are often used for LEDs, buzzers, or power-enable circuits.
output:
  - platform: gpio
    id: <output_id_from_generated_yaml>
    pin: <gpio_from_generated_yaml>

light:
  - platform: binary
    name: "Onboard LED"
    output: <output_id_from_generated_yaml>

time:
  - platform: homeassistant
    id: ha_time

sensor:
  # Add Home Assistant, onboard, or template sensors here.
  - platform: homeassistant
    id: outdoor_temperature
    entity_id: sensor.outdoor_temperature

binary_sensor:
  # Add buttons or status inputs here if your hardware provides them.
  - platform: gpio
    id: button_1
    pin: <button_gpio_from_generated_yaml>

display:
  - platform: <display_platform_from_generated_yaml>
    id: epaper_display
    # Keep the model and pin map from the generated YAML or cookbook.
    model: <display_model_from_generated_yaml>
    cs_pin: <display_cs_from_generated_yaml>
    dc_pin: <display_dc_from_generated_yaml>
    reset_pin: <display_reset_from_generated_yaml>
    busy_pin: <display_busy_from_generated_yaml>
    update_interval: never
    lambda: |-
      it.print(0, 0, id(font_medium), "Hello, ePaper!");
```

请保留来自 Firmware Hub 或 cookbook 的以下数值：

- `esp32.board` 以及任何日志设置，例如 `hardware_uart`。
- `spi`、`i2c` 和 `i2s_audio` 引脚。
- 用于显示屏、电池测量、SD 卡、麦克风或其他板载电路的电源使能 `output` 模块。
- 按键、电池、RTC、SHT4x、SD 卡、麦克风、蜂鸣器和 LED 的定义。
- `display.platform`、`model`、引脚映射、复位行为、busy 引脚行为以及更新间隔。

你通常会自定义的部分包括：

- `substitutions`、设备名称和友好名称。
- `wifi`、`api` 和 `ota` 的密钥。
- `font` 的选择和字号。
- 提供你想绘制数据的 Home Assistant `sensor`、`binary_sensor`、`text_sensor` 或 `time` 实体。
- `display.lambda` 块，用于设计实际的电子纸屏幕布局。
- 刷新行为，例如 `update_interval`、按键触发刷新或深度睡眠定时。

## 步骤 3：连接到 Home Assistant

固件启动并加入你的 Wi-Fi 后，Home Assistant 会自动发现该设备：

1. **Settings → Devices & services**
2. ESPHome 集成会为你的设备显示一个 “Discovered” 卡片。
3. 点击 **Configure**，粘贴 API 加密密钥（来自 `secrets.yaml`），然后提交。
4. 设备及其所有实体（sensors、binary_sensors、display）现在都可以在 HA 中使用。

现在你可以将这些实体拖入 Lovelace 仪表盘，或者——在电子纸上更有趣的方式——使用 `display.lambda` 块，通过 [`homeassistant`](https://esphome.io/components/homeassistant.html) 组件将任意 HA 实体直接渲染到屏幕上。

## 接下来去哪儿 —— 菜谱（Cookbooks）

本页有意只停留在样板配置。与具体产品相关的 YAML、外设示例和端到端配方都在各产品的菜谱中：

- **[reTerminal E 系列 — ESPHome 显示](/cn/reterminal_e10xx_with_esphome)** — 适用于 E1001/E1002/E1003/E1004 的第一个仪表盘、Wi-Fi 设置和电子纸绘图示例。
- **[reTerminal E 系列 — ESPHome I/O、电池与电源](/cn/reterminal_e10xx_with_esphome_advanced)** — 按钮、蜂鸣器、板载 LED、电池监测、SHT4x 传感器、深度睡眠和多页面仪表盘。
- **[reTerminal E1001 / E1002 — ESPHome RTC、SD 与麦克风](/cn/reterminal_e10xx_with_esphome_rtc_sd_microphone)** — PCF8563 RTC 时间同步、microSD 卡电源/检测引脚以及板载 PDM 麦克风配置。
- **[EE04 驱动板 — ESPHome](/cn/EE04_with_esphome_advanced)** — 在 XIAO ESP32-S3 + EE04 + 你选择的电子纸屏幕上实现完整的 Home Assistant 集成。
- **[XIAO 7.5" 电子纸面板 — ESPHome](/cn/xiao_075inch_epaper_panel_esphome)** — 精简的 ESP32-C3 仪表盘。
- **[TRMNL 7.5" DIY 套件 — ESPHome](/cn/ogdiy_kit_works_with_esphome)** — 使用套件硬件搭配 ESPHome，而非 TRMNL 云平台。

当有新的电子纸产品发售时，相应的菜谱会添加到各产品的文件夹下；本主页面也会更新链接到它。

## 常见问题



## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
