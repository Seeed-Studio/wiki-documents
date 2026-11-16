---
description: Explore the SenseCAP MeshPager X2 Series of standalone Meshtastic communicators with LR2021 LoRa, dual-band GNSS, a 2.0-inch display, IP66 protection, and up to 7 days of battery life.
title: SenseCAP MeshPager X2 Series Introduction
keywords:
  - MeshPager X2 Series
  - Meshtastic
  - ESP32-S3
  - LR2021
slug: /meshpager_x2_intro
sidebar_position: 0
last_update:
  date: 11/12/2026
  author: Yves
createdAt: '2026-10-09'
updatedAt: '2026-11-12'
url: https://wiki.seeedstudio.com/meshpager_x2_intro/
---


The SenseCAP MeshPager X2 Series offers standalone handheld [Meshtastic®](https://meshtastic.org/) communicators for off-grid messaging and location sharing. Powered by the ESP32-S3 and the Wio-LR2021 module based on **Semtech LR2021**, it combines **863–928 MHz LoRa, Bluetooth LE, and Wi-Fi** with dual-band GNSS, a **2.0-inch IPS display**, physical controls, and a **3400 mAh battery**. With up to **7 days of runtime** and up to **10 km line-of-sight communication** tested at 915 MHz, you can compose messages, read conversations, and track locations directly on X2 without a smartphone.

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-product-angle.png" alt="MeshPager X2 product view showing the external antenna, display, orange buttons, and directional pad" width={1248} height={800} style={{width: 800, maxWidth: '100%', height: 'auto'}} />
  <figcaption>MeshPager X2. <a href="https://files.seeedstudio.com/wiki/MeshPagerX2/x2-product-front.png" target="_blank" rel="noopener noreferrer">View from the front.</a></figcaption>
</figure>

## Features

- **Standalone Communication and Easy Carrying:** Type text, view messages, and track locations directly on the 2.0-inch display using the physical controls. The compact body includes a metal belt clip and lanyard loop for attaching X2 to a backpack, belt, or apparel, wearing it on a lanyard, or carrying it in a pocket.

- **Next-Generation LoRa and Long Range:** Semtech LR2021 supports **863–928 MHz**, with receiver sensitivity down to **−141 dBm** and communication over **up to 10 km in line-of-sight conditions, tested at 915 MHz**. The external 70 mm flexible whip antenna supports long-range communication for teams in remote environments.

- **Dual-Band GNSS and Elevation Awareness:** The AG3335MV/B provides **L1 + L5 dual-band positioning** for challenging outdoor environments, including tree cover and canyons. A built-in barometer supplies atmospheric-pressure measurements for real-time elevation tracking, complementing GNSS location information on the trail.

- **Up to One Week of Battery Life with USB-C:** The **3400 mAh battery** provides **up to 7 days of continuous runtime** for multi-day outdoor trips. USB-C supports charging, firmware updates, and debugging.

- **IP66 Outdoor Protection:** The **IP66-rated enclosure** protects against dust and heavy rain for outdoor use in demanding conditions.

- **Built-In Sensors, Expandable Storage, and Audio Hardware:** A barometer, magnetometer, and gyroscope provide atmospheric, heading, and motion data. The **microSD card slot** supports offline maps and data logging with compatible firmware. The integrated microphone and speaker provide hardware for **future voice-messaging updates**.

Actual communication range and battery runtime vary with device settings, usage, terrain, and operating conditions.

## Specification

<table aria-label="MeshPager X2 specification" style={{width: '100%', display: 'table'}}>
  <thead>
    <tr>
      <th scope="col" style={{width: '42%', textAlign: 'center'}}>Item</th>
      <th scope="col" style={{textAlign: 'center'}}>Parameter</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Processor</th>
      <td>Espressif ESP32-S3R8, dual-core, up to 240 MHz</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="rowgroup" rowSpan={2} style={{textAlign: 'left', verticalAlign: 'middle'}}>LoRa</th>
      <td>Wio-LR2021 (Semtech LR2021)</td>
    </tr>
    <tr>
      <td>Frequency Range: 863–928 MHz</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>GNSS</th>
      <td>AG3335MV/B, dual-band L1 + L5 positioning</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Memory</th>
      <td>32 MB Flash / 8 MB PSRAM</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="rowgroup" rowSpan={5} style={{textAlign: 'left', verticalAlign: 'middle'}}>Antenna</th>
      <td>External LoRa antenna, RP-SMA male connector</td>
    </tr>
    <tr>
      <td>Frequency Range: 863–928 MHz</td>
    </tr>
    <tr>
      <td>Dimensions: Ø10.5 × 70 mm</td>
    </tr>
    <tr>
      <td>Peak Gain: 0.32 dBi</td>
    </tr>
    <tr>
      <td>Max Efficiency: 48.7%</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="rowgroup" rowSpan={2} style={{textAlign: 'left', verticalAlign: 'middle'}}>Wireless Connectivity</th>
      <td>Wi-Fi: 2.4 GHz</td>
    </tr>
    <tr>
      <td>Bluetooth 5.0</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="rowgroup" rowSpan={2} style={{textAlign: 'left', verticalAlign: 'middle'}}>Interface</th>
      <td>USB Type-C</td>
    </tr>
    <tr>
      <td>MicroSD card slot (1-bit SDIO/SDMMC)</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Power Input</th>
      <td>USB Type-C: 5 V DC</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="rowgroup" rowSpan={2} style={{textAlign: 'left', verticalAlign: 'middle'}}>IPS Display</th>
      <td>Size: 2.0 inch</td>
    </tr>
    <tr>
      <td>Resolution: 240 × 320 pixels</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Button</th>
      <td>Power × 1<br />Directional buttons × 4<br />Confirm × 1<br />Return × 1</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Audio</th>
      <td>Microphone: Analog microphone with ES7243E ADC<br />Output: ES8311 codec and NS4150B speaker amplifier</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Communication Distance</th>
      <td>Up to 10 km (line of sight, tested at 915 MHz)</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>IP Rating</th>
      <td>IP66</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Dimension</th>
      <td>110.6 × 64.3 × 26.85 mm</td>
    </tr>
  </tbody>
</table>

## Battery

<table aria-label="MeshPager X2 battery" style={{width: '100%', display: 'table'}}>
  <thead>
    <tr>
      <th scope="col" style={{width: '42%', textAlign: 'center'}}>Item</th>
      <th scope="col" style={{textAlign: 'center'}}>Parameter</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Battery Capacity</th>
      <td>3400 mAh</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Charging Port</th>
      <td>USB Type-C (charging, firmware flashing, and data transfer)</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Device Power Input</th>
      <td>5 V DC</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Operating Temperature (Discharging)</th>
      <td>-20°C to 60°C</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th scope="row" style={{textAlign: 'left', verticalAlign: 'middle'}}>Charging Temperature</th>
      <td>5°C to 45°C</td>
    </tr>
  </tbody>
</table>

<details>
<summary>Battery temperature conditions</summary>

The battery cell specifies different currents across these temperature ranges:

- **Discharging:** 0.2C from -20°C to 15°C; 0.5C from 15°C to 60°C.
- **Charging:** 0.2C from 5°C to 15°C; 0.5C from 15°C to 45°C.

Avoid prolonged charging or discharging at the temperature limits.

</details>

<details>
<summary style={{fontSize: '1.5rem', fontWeight: 600}}>Hardware overview</summary>

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <a href="https://files.seeedstudio.com/wiki/MeshPagerX2/MeshPager-X2-V1.0-2x.png" target="_blank" rel="noopener noreferrer">
    <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/MeshPager-X2-V1.0-2x.png" alt="MeshPager X2 V1.0 hardware block diagram showing power, ESP32-S3, LoRa, GNSS, sensors, display, storage, and audio connections, with GPIO41 feeding ES8311 DSDIN and ES7243E SDOUT feeding GPIO42" width={4680} height={3960} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  </a>
  <figcaption>MeshPager X2 hardware block diagram. Click to enlarge.</figcaption>
</figure>

| Component | Function |
| --- | --- |
| Front display | Messages, node information, GNSS status, and maps |
| Direction keys | Menu navigation, on-screen keyboard selection, and map panning |
| Confirm / Return | Select an item or return to the previous view |
| Power key | Power control and screen off/wake |
| Flexible LoRa antenna | Sub-GHz mesh radio connection |
| USB-C port | Charging and connection to a computer |
| microSD card slot | Storage for offline map tiles |
| Microphone and speaker | Audio input and output |
| Barometer | Atmospheric-pressure measurements for elevation tracking |
| Metal belt clip and lanyard loop | Attach X2 to a belt, backpack, or lanyard |

<figure style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="https://files.seeedstudio.com/wiki/MeshPagerX2/QQ20261010-142948.png" alt="Close-up of the MeshPager X2 microSD card slot with its outer cover removed" width={600} height={242} style={{maxWidth: '100%', height: 'auto'}} loading="lazy" />
  <figcaption>microSD card slot. See <a href="/x2_get_started_for_meshtastic/#microsd-and-offline-maps">microSD and Offline Maps</a> for card preparation.</figcaption>
</figure>

For setup and button operations, see [Get Started with MeshPager X2 Series](/x2_get_started_for_meshtastic/).

### Pin List

<details>
<summary>ESP32-S3 pin assignments</summary>

These assignments follow the MeshPager X2 V1.0 schematic. GPIO numbers identify ESP32-S3 signals, not package pin numbers.

| Function | Signal | ESP32-S3 GPIO |
| --- | --- | --- |
| Return / BOOT key | `ESP_BOOT/Return` | GPIO0 |
| Battery voltage | `BAT_ADC` | GPIO1 |
| Expander interrupt | `EXP_I2C_INT1` | GPIO2 |
| LoRa SPI clock | `LR_SPI_SCK` | GPIO3 |
| LoRa SPI data out | `LR_SPI_MOSI` | GPIO4 |
| LoRa SPI data in | `LR_SPI_MISO` | GPIO5 |
| LoRa chip select | `LR_NSS` | GPIO6 |
| LoRa interrupt | `LR_DIO8` | GPIO7 |
| LoRa busy | `LR_BUSY` | GPIO8 |
| Power key | `PWR_BUTTON` | GPIO9 |
| TFT chip select | `TFT_CS` | GPIO10 |
| TFT SPI data | `TFT_SDA` | GPIO11 |
| TFT SPI clock | `TFT_SCK` | GPIO12 |
| TFT data/command | `TFT_A0` | GPIO13 |
| microSD command | `SD_CMD` | GPIO14 |
| microSD clock | `SD_CLK` | GPIO15 |
| microSD data | `SD_DAT0` | GPIO16 |
| Expander / RTC I2C | SDA / SCL | GPIO17 / GPIO18 |
| Native USB | D− / D+ | GPIO19 / GPIO20 |
| GNSS pulse-per-second | `AG_PPS0` | GPIO21 |
| Audio master clock | `CODEC_I2S0_MCLK` | GPIO38 |
| Audio bit clock | `CODEC_I2S0_SCLK` | GPIO39 |
| Audio word clock | `CODEC_I2S0_LRCK` | GPIO40 |
| Audio playback data | `CODEC_I2S0_DSDIN` | GPIO41 |
| Audio capture data | `CODEC_I2S0_SDOUT` | GPIO42 |
| GNSS UART | MCU TX / MCU RX | GPIO43 / GPIO44 |
| RTC output | `RTC_OUT` | GPIO45 |
| TFT backlight | `TFT_PWM` | GPIO46 |
| Sensor / audio I2C | SDA / SCL | GPIO47 / GPIO48 |

</details>

<details>
<summary>I/O expander and I2C devices</summary>

**I/O Expander**

The TCA6424A is at I2C address `0x22`. Port names such as `P14` identify expander pins, not ESP32-S3 GPIOs.

| TCA6424A port | Schematic signal / function |
| --- | --- |
| P00 / P01 / P02 / P03 | Up / Down / Left / Right |
| P04 | Confirm |
| P05 | Test point TP47 |
| P06 | `CHARGER_STAT`, charger status |
| P07 | `EXP_SD_DET`, microSD detection |
| P10 / P11 | `AG_RTC_INT` / `AG_SLEEP_INT`, GNSS interrupts |
| P12 | `IMU_INT1`, motion-sensor interrupt |
| P13 | Test point TP41 |
| P14 | `VCC_SEN_EN`, sensor and audio-supply enable |
| P15 | `VCC_SD_EN`, microSD power enable |
| P16 | `VCC_TFT_EN`, TFT and backlight-supply enable |
| P17 | `AG_VRTC_EN`, GNSS backup-supply enable |
| P20 | `AG_PWR_EN`, GNSS main-supply enable |
| P21 | `VBAT_ADC_EN`, battery-measurement enable |
| P22 | `AUDIO_PA_EN`, speaker-amplifier enable |
| P23 | `USB_IN`, USB-input detection |
| P24 | `PWR_HOLD`, main-power latch |
| P25 / P26 / P27 | TFT / LoRa / GNSS reset |

**I2C Devices**

| Bus | Device | Address shown in schematic |
| --- | --- | --- |
| GPIO17 SDA / GPIO18 SCL | TCA6424A I/O expander | `0x22` |
| GPIO47 SDA / GPIO48 SCL | LSM6DSO motion sensor | `0x6A` |
| GPIO47 SDA / GPIO48 SCL | BMM350 magnetometer | `0x15` |
| GPIO47 SDA / GPIO48 SCL | SPA06-003 barometer | `0x77` |
| GPIO47 SDA / GPIO48 SCL | ES8311 codec | `0x18` |
| GPIO47 SDA / GPIO48 SCL | ES7243E ADC | `0x14` |

In the V1.0 schematic, BMM350's `ADSEL` pin is pulled high through R147 (10 kΩ), selecting `0x15`. ES7243E uses `0x14`, so the two devices have distinct addresses on the shared I2C bus.

</details>

<details>
<summary>Hardware integration notes</summary>

- **Antenna:** Specifications are for the M02-0401060R0A and use the supplier's reference test setup. Select the device's LoRa region according to local regulations.
- **Battery:** Use the specified X2 battery, rated for 4.4 V charging, with its temperature-sensing connection. Do not substitute a cell rated for a maximum charge voltage of 4.2 V.
- **Flash:** X2 has 32 MB of external flash. The V1.0 schematic specifies PY25Q256HB-SUH-IR. Use the partition layout supplied with the matching firmware package.
- **Buttons and power detection:** Return connects to ESP32-S3 `GPIO0`. TCA6424A `P06` provides charger status and `P23` provides USB-input detection; `P05` and `P13` connect to test points TP47 and TP41.
- **Radio:** LoRa uses the module's `Sub-G_RF` connection. Its `2.4G_RF` port is unconnected; Wi-Fi and Bluetooth use the ESP32-S3 antenna path.

</details>

</details>

## Application

- **Off-grid team communication:** Exchange text messages and share locations with other Meshtastic nodes when cellular or Wi-Fi service is unavailable.
- **Hiking and camping:** View GNSS position and preloaded offline maps directly on X2. Use the physical buttons to compose and read messages without a smartphone.

For setup and operation, see [Get Started with MeshPager X2 Series](/x2_get_started_for_meshtastic/).

## Document

- [MeshPager X2 Power Consumption Spreadsheet (.xlsx)](https://files.seeedstudio.com/wiki/MeshPagerX2/MeshPager%20X2%20power%20consumption.xlsx)

## Tech Support & Product Discussion

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank" rel="noopener noreferrer">
    <img
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg"
      alt="Join the Seeed Studio Meshtastic community on Facebook"
      style={{width: '90%', maxWidth: '800px', height: 'auto'}}
      loading="lazy"
    />
  </a>
</p>

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum" aria-label="Seeed Studio technical forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email" aria-label="Contact Seeed Studio support"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord" aria-label="Seeed Studio Discord community"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion" aria-label="Seeed Studio Wiki discussion"></a>
</div>
