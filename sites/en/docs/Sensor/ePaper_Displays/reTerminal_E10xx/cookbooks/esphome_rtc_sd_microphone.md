---
description: ESPHome cookbook for reTerminal E1001 / E1002 - PCF8563 RTC time sync, microSD card power and detect pins, and onboard PDM microphone initialization.
title: 'ESPHome Cookbook: RTC, SD Card & Microphone (reTerminal E Series)'
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/27.webp
slug: /reterminal_e10xx_with_esphome_rtc_sd_microphone
sidebar_position: 5
sidebar_label: 'ESPHome - RTC, SD & Microphone'
last_update:
  date: 06/12/2026
  author: Citric
createdAt: '2026-06-12'
updatedAt: '2026-06-12'
url: https://wiki.seeedstudio.com/reterminal_e10xx_with_esphome_rtc_sd_microphone/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ESPHome Cookbook: RTC, SD Card & Microphone (reTerminal E Series)

:::tip Read the display cookbook first
This page assumes your reTerminal E Series device is already running ESPHome, connected to Wi-Fi, and visible in Home Assistant. If you have not flashed a first display example yet, start with **[ESPHome Cookbook: Display Basics](/reterminal_e10xx_with_esphome)**. For buttons, buzzer, LED, battery monitoring, SHT4x, and deep sleep, see **[ESPHome Cookbook: Buttons, Buzzer, LED, Battery & Low Power](/reterminal_e10xx_with_esphome_advanced)**.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/27.jpg" style={{width:700, height:'auto'}}/></div><br />

## Introduction

The first ESPHome cookbook focuses on the ePaper display, and the second cookbook covers everyday onboard peripherals such as buttons, buzzer, LED, battery monitoring, the SHT4x sensor, and deep sleep. This page covers three additional hardware blocks that are useful for more complete Home Assistant devices:

- **PCF8563 RTC** - keeps calendar time through an external real-time clock chip on the I²C bus.
- **microSD card slot** - provides card insertion detection and a switchable SD power rail.
- **PDM microphone** - initializes the onboard digital microphone so it can be referenced by ESPHome audio features.

The examples below currently target **reTerminal E1001** and **reTerminal E1002**, matching the tested ESPHome hardware examples for these two models.

:::note Model coverage
The RTC and microSD hardware are available across the reTerminal E Series hardware family, but the ready-to-copy ESPHome display examples on this page are provided for E1001 and E1002. The onboard microphone examples apply to models with the PDM microphone hardware; E1004 does not include the microphone.
:::

## Hardware Pin Summary

<div class="table-center">
  <table align="center">
    <tr>
      <th>Hardware Block</th>
      <th>ESPHome Component</th>
      <th>Pin / Address</th>
      <th>Purpose</th>
    </tr>
    <tr>
      <td>PCF8563 RTC</td>
      <td><code>time.pcf8563</code></td>
      <td>I²C address <code>0x51</code>, SDA <code>GPIO19</code>, SCL <code>GPIO20</code></td>
      <td>Read hardware time on boot and write Home Assistant time back to the RTC.</td>
    </tr>
    <tr>
      <td>microSD SPI bus</td>
      <td><code>spi</code></td>
      <td>SCLK <code>GPIO7</code>, MOSI <code>GPIO9</code>, MISO <code>GPIO8</code></td>
      <td>Shared SPI bus used by the ePaper display and the SD card interface.</td>
    </tr>
    <tr>
      <td>microSD power enable</td>
      <td><code>output.gpio</code></td>
      <td><code>GPIO16</code></td>
      <td>Turns on the SD card power rail during boot.</td>
    </tr>
    <tr>
      <td>microSD card detect</td>
      <td><code>binary_sensor.gpio</code></td>
      <td><code>GPIO15</code>, active LOW</td>
      <td>Reports whether a card is inserted.</td>
    </tr>
    <tr>
      <td>PDM microphone power</td>
      <td><code>output.gpio</code></td>
      <td><code>GPIO38</code></td>
      <td>Enables microphone power before the audio bus starts.</td>
    </tr>
    <tr>
      <td>PDM microphone clock</td>
      <td><code>i2s_audio</code></td>
      <td><code>GPIO42</code></td>
      <td>Provides the PDM clock signal.</td>
    </tr>
    <tr>
      <td>PDM microphone data</td>
      <td><code>microphone.i2s_audio</code></td>
      <td><code>GPIO41</code></td>
      <td>Receives microphone data from the onboard PDM microphone.</td>
    </tr>
  </table>
</div>

## Prerequisites

- A reTerminal E1001 or reTerminal E1002 already added to ESPHome.
- Home Assistant with the ESPHome integration enabled.
- Wi-Fi credentials stored in ESPHome `secrets.yaml`.
- For RTC time retention after power loss, install a CR1220 coin cell in the RTC battery holder.
- For SD card detection, insert a formatted microSD card into the card slot.

:::caution Keep your API and OTA secrets private
The examples use placeholders such as `REPLACE_WITH_YOUR_API_KEY` and `REPLACE_WITH_YOUR_OTA_PASSWORD`. Do not publish your real API encryption key, OTA password, Wi-Fi password, or Home Assistant token in a public repository.
:::

## Step 1: Add the Shared Buses and Power Enables

Add the shared SPI, I²C, and I²S bus definitions after `captive_portal:` in your ESPHome YAML. These buses are the foundation for the RTC, SD card detect circuit, microphone, and display.

```yaml
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8

i2c:
  scl: GPIO20
  sda: GPIO19

i2s_audio:
  i2s_lrclk_pin: GPIO42

output:
  - platform: gpio
    pin: GPIO16
    id: bsp_sd_enable

  - platform: gpio
    pin: GPIO38
    id: mic_power_enable
```

Then enable the SD card and microphone power rails during boot:

```yaml
esphome:
  name: reterminal-e1001
  friendly_name: reTerminal_E1001
  on_boot:
    priority: 600
    then:
      - output.turn_on: bsp_sd_enable
      - output.turn_on: mic_power_enable
      - delay: 200ms
      - pcf8563.read_time:
```

For E1002, keep the same boot sequence and change only the device name:

```yaml
esphome:
  name: reterminal-e1002
  friendly_name: reTerminal_E1002
  on_boot:
    priority: 600
    then:
      - output.turn_on: bsp_sd_enable
      - output.turn_on: mic_power_enable
      - delay: 200ms
      - pcf8563.read_time:
```

## Step 2: Configure the PCF8563 RTC

The PCF8563 is connected to the same I²C bus as the onboard SHT4x sensor. In ESPHome, you can read the RTC on boot and write the Home Assistant time back to the RTC after Home Assistant syncs.

```yaml
time:
  - platform: pcf8563
    id: rtc_time
    address: 0x51
    update_interval: never

  - platform: homeassistant
    on_time_sync:
      then:
        - pcf8563.write_time:
```

This configuration does two things:

- `pcf8563.read_time` reads the hardware RTC during boot.
- `pcf8563.write_time` writes the current Home Assistant time back to the PCF8563 after synchronization.

:::tip
If the displayed RTC time is wrong after a full power cycle, check whether the CR1220 coin cell is installed and still healthy. Without the coin cell, the PCF8563 cannot retain time when the main battery and USB power are removed.
:::

## Step 3: Add microSD Card Detection

ESPHome can read the card-detect pin as a binary sensor. The card-detect signal is active LOW, so the GPIO sensor is configured with `inverted: true`.

```yaml
binary_sensor:
  - platform: gpio
    pin:
      number: GPIO15
      mode: INPUT_PULLUP
      inverted: true
    id: sd_card_detect
    name: "SD Card Detected"
```

:::note ESPHome SD card scope
This example reports whether a card is inserted and enables the SD card power rail. ESPHome does not provide the same general-purpose SD file operations as an Arduino sketch, such as opening arbitrary files, creating folders, or recording WAV files directly from this YAML. For direct file read/write workflows, use the Arduino SD card cookbook instead.
:::

## Step 4: Initialize the PDM Microphone

The onboard PDM microphone uses an I²S audio interface in PDM mode. The microphone power rail must be enabled before the microphone is used.

```yaml
microphone:
  - platform: i2s_audio
    id: onboard_mic
    adc_type: external
    pdm: true
    i2s_din_pin: GPIO41
```

This initializes the onboard microphone so ESPHome audio-related features can reference `id(onboard_mic)`.

:::note
A full Home Assistant Assist voice pipeline may require additional Home Assistant and ESPHome configuration beyond microphone initialization, especially if you also want local wake-word detection or audio output. This page only covers the onboard microphone hardware setup.
:::

## Step 5: Display RTC, SD, and Microphone Status

The following complete examples show a simple hardware status dashboard:

- RTC date and time from the PCF8563.
- microSD insertion status from `GPIO15`.
- microphone hardware status from the configured PDM pins.

<Tabs>
<TabItem value="For E1001" label="For E1001" default>

```yaml
esphome:
  name: reterminal-e1001
  friendly_name: reTerminal_E1001
  on_boot:
    priority: 600
    then:
      - output.turn_on: bsp_sd_enable
      - output.turn_on: mic_power_enable
      - delay: 200ms
      - pcf8563.read_time:

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

logger:
  hardware_uart: UART0

api:
  encryption:
    key: "REPLACE_WITH_YOUR_API_KEY"

ota:
  - platform: esphome
    password: "REPLACE_WITH_YOUR_OTA_PASSWORD"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  ap:
    ssid: "reTerminal-E1001"
    password: "ChangeMe123"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8

i2c:
  scl: GPIO20
  sda: GPIO19

i2s_audio:
  i2s_lrclk_pin: GPIO42

output:
  - platform: gpio
    pin: GPIO16
    id: bsp_sd_enable

  - platform: gpio
    pin: GPIO38
    id: mic_power_enable

time:
  - platform: pcf8563
    id: rtc_time
    address: 0x51
    update_interval: never

  - platform: homeassistant
    on_time_sync:
      then:
        - pcf8563.write_time:

microphone:
  - platform: i2s_audio
    id: onboard_mic
    adc_type: external
    pdm: true
    i2s_din_pin: GPIO41

binary_sensor:
  - platform: gpio
    pin:
      number: GPIO15
      mode: INPUT_PULLUP
      inverted: true
    id: sd_card_detect
    name: "SD Card Detected"

font:
  - file: "gfonts://Inter@700"
    id: font_small
    size: 20
  - file: "gfonts://Inter@700"
    id: font_medium
    size: 32

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(400, 20, id(font_medium), TextAlign::TOP_CENTER,
                "reTerminal E1001 Hardware Status");
      it.line(20, 60, 780, 60);

      auto now = id(rtc_time).now();
      if (now.is_valid()) {
        it.strftime(30, 95, id(font_medium), "%Y-%m-%d %H:%M", now);
        ESP_LOGD("status", "RTC time is valid");
      } else {
        it.printf(30, 95, id(font_medium), "RTC: waiting for sync");
        ESP_LOGW("status", "RTC time is not valid yet");
      }

      if (id(sd_card_detect).state) {
        it.printf(30, 155, id(font_medium), "SD Card: inserted");
      } else {
        it.printf(30, 155, id(font_medium), "SD Card: not detected");
      }

      it.printf(30, 215, id(font_medium), "PDM Mic: enabled");
      it.printf(30, 265, id(font_small), "I2C: SDA GPIO19 / SCL GPIO20");
      it.printf(30, 295, id(font_small), "SD SPI: CLK GPIO7 / MOSI GPIO9 / MISO GPIO8");
      it.printf(30, 325, id(font_small), "Mic: CLK GPIO42 / DATA GPIO41 / EN GPIO38");
```

</TabItem>
<TabItem value="For E1002" label="For E1002">

```yaml
esphome:
  name: reterminal-e1002
  friendly_name: reTerminal_E1002
  on_boot:
    priority: 600
    then:
      - output.turn_on: bsp_sd_enable
      - output.turn_on: mic_power_enable
      - delay: 200ms
      - pcf8563.read_time:

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

logger:
  hardware_uart: UART0

api:
  encryption:
    key: "REPLACE_WITH_YOUR_API_KEY"

ota:
  - platform: esphome
    password: "REPLACE_WITH_YOUR_OTA_PASSWORD"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  ap:
    ssid: "reTerminal-E1002"
    password: "ChangeMe123"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8

i2c:
  scl: GPIO20
  sda: GPIO19

i2s_audio:
  i2s_lrclk_pin: GPIO42

output:
  - platform: gpio
    pin: GPIO16
    id: bsp_sd_enable

  - platform: gpio
    pin: GPIO38
    id: mic_power_enable

time:
  - platform: pcf8563
    id: rtc_time
    address: 0x51
    update_interval: never

  - platform: homeassistant
    on_time_sync:
      then:
        - pcf8563.write_time:

microphone:
  - platform: i2s_audio
    id: onboard_mic
    adc_type: external
    pdm: true
    i2s_din_pin: GPIO41

binary_sensor:
  - platform: gpio
    pin:
      number: GPIO15
      mode: INPUT_PULLUP
      inverted: true
    id: sd_card_detect
    name: "SD Card Detected"

font:
  - file: "gfonts://Inter@700"
    id: font_small
    size: 20
  - file: "gfonts://Inter@700"
    id: font_medium
    size: 32

display:
  - platform: epaper_spi
    id: epaper_display
    model: Seeed-reTerminal-E1002
    update_interval: 300s
    lambda: |-
      const auto BLACK = Color(0, 0, 0, 0);
      const auto BLUE = Color(0, 0, 255, 0);
      const auto GREEN = Color(0, 255, 0, 0);
      const auto RED = Color(255, 0, 0, 0);

      it.printf(400, 20, id(font_medium), BLACK, TextAlign::TOP_CENTER,
                "reTerminal E1002 Hardware Status");
      it.line(20, 60, 780, 60, BLACK);

      auto now = id(rtc_time).now();
      if (now.is_valid()) {
        it.strftime(30, 95, id(font_medium), BLUE, "%Y-%m-%d %H:%M", now);
        ESP_LOGD("status", "RTC time is valid");
      } else {
        it.printf(30, 95, id(font_medium), RED, "RTC: waiting for sync");
        ESP_LOGW("status", "RTC time is not valid yet");
      }

      if (id(sd_card_detect).state) {
        it.printf(30, 155, id(font_medium), GREEN, "SD Card: inserted");
      } else {
        it.printf(30, 155, id(font_medium), RED, "SD Card: not detected");
      }

      it.printf(30, 215, id(font_medium), BLUE, "PDM Mic: enabled");
      it.printf(30, 265, id(font_small), BLACK, "I2C: SDA GPIO19 / SCL GPIO20");
      it.printf(30, 295, id(font_small), BLACK, "SD SPI: CLK GPIO7 / MOSI GPIO9 / MISO GPIO8");
      it.printf(30, 325, id(font_small), BLACK, "Mic: CLK GPIO42 / DATA GPIO41 / EN GPIO38");
```

</TabItem>
</Tabs>

## Expected Result

After the firmware is uploaded and the device reconnects to Home Assistant:

- The display shows the RTC time after the first successful Home Assistant time sync.
- The `SD Card Detected` binary sensor appears in Home Assistant.
- Inserting or removing a microSD card changes the `SD Card Detected` state.
- The screen shows `PDM Mic: enabled` after the microphone power rail and I²S microphone configuration are initialized.

## Troubleshooting

### Q1: Why does the screen show "RTC: waiting for sync"?

The device has not received a valid time yet. Confirm that the device is connected to Wi-Fi, the ESPHome API is connected to Home Assistant, and Home Assistant has the correct system time. After Home Assistant syncs time, ESPHome writes the time back to the PCF8563 RTC.

### Q2: Why does the RTC time disappear after removing power?

The PCF8563 needs a CR1220 coin cell to keep time when the main battery and USB power are removed. Install or replace the coin cell, boot the device again, and let Home Assistant sync the time once.

### Q3: Why does Home Assistant always show the SD card as not detected?

Check three things:

- Confirm the card is fully inserted into the slot.
- Make sure `bsp_sd_enable` on `GPIO16` is turned on during boot.
- Keep `GPIO15` configured as `INPUT_PULLUP` with `inverted: true`, because the detect signal is active LOW.

### Q4: Can ESPHome record microphone audio directly to the SD card?

Not with the simple YAML shown in this page. The microphone snippet initializes the onboard PDM microphone for ESPHome audio features, while the SD card snippet only powers the SD rail and reads the detect pin. If your goal is to record WAV files to the SD card, use the Arduino microphone and SD examples instead.

### Q5: Why is there no serial log over USB?

The reTerminal E Series uses a CH340K USB-to-UART bridge on UART0. Keep this logger setting in your YAML:

```yaml
logger:
  hardware_uart: UART0
```

## Resources

- **[Wiki]** [ESPHome Cookbook: Display Basics](/reterminal_e10xx_with_esphome)
- **[Wiki]** [ESPHome Cookbook: Buttons, Buzzer, LED, Battery & Low Power](/reterminal_e10xx_with_esphome_advanced)
- **[Wiki]** [Work with ESPHome](/epaper_work_with_esphome)
- **[Wiki]** [Arduino Cookbook: RTC, Low Power, Audio & Touch](/reterminal_e10xx_with_arduino_peripherals_2)
- **[Documentation]** [ESPHome Time Component](https://esphome.io/components/time/)
- **[Documentation]** [ESPHome I²S Audio Component](https://esphome.io/components/i2s_audio.html)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
