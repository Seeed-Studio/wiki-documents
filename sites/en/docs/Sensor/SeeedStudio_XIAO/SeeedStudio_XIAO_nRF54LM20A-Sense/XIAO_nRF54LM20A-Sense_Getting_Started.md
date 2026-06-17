---
title: Getting Started with Seeed Studio XIAO nRF54LM20A Sense
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - pin_multiplexing
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/Seeed-Studio-XIAO-nRF54LM20A-Sense.webp
slug: /xiao_nrf54lm20a_getting_started
sku: 100018440
last_update:
  date: 05/13/2026
  author: Zeller
createdAt: '2025-05-13'
updatedAt: '2026-06-12'
url: https://wiki.seeedstudio.com/xiao_nrf54lm20a_getting_started/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/get_start_1.jpg" style={{width:600, height:'auto'}}/></div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Get One Now 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

## Introduction

Seeed Studio XIAO nRF54LM20A Sense is a compact, ultra-low-power wireless development board built around Nordic Semiconductor’s nRF54LM20A SoC. It combines a 128 MHz Arm Cortex-M33 processor, 512 KB RAM, 2 MB on-chip NVM, multiprotocol 2.4 GHz wireless connectivity, onboard IMU, digital microphone, 8MB external flash, IPEX antenna connector, and nPM1300 PMIC for advanced battery-powered IoT, wearable, smart sensing, and edge AI applications.

### Specification

<table>
  <thead>
    <tr>
      <th>Product Name</th>
      <th>Seeed Studio XIAO nRF54LM20A</th>
      <th>Seeed Studio XIAO nRF54LM20A Sense</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Processor</strong></td>
      <td colspan="2">Arm® Cortex®-M33 128 MHz &amp; RISC-V 128 MHz Coprocessor</td>
    </tr>
    <tr>
      <td><strong>RAM</strong></td>
      <td colspan="2">512KB</td>
    </tr>
    <tr>
      <td><strong>Flash</strong></td>
      <td colspan="2">2 MB Non-volatile Memory (NVM)</td>
    </tr>
    <tr>
      <td><strong>External Flash</strong></td>
      <td colspan="2">8MB onboard external flash</td>
    </tr>
    <tr>
      <td><strong>PMIC / Battery</strong></td>
      <td colspan="2">nPM1300 PMIC for power regulation and battery charging</td>
    </tr>
    <tr>
      <td><strong>Interface</strong></td>
      <td colspan="2">
        28x GPIO Pin<br/>
        9x Analog Pin<br/>
        1x I2C<br/>
        1x UART<br/>
        1x SPI<br/>
        1x NFC<br/>
        1x SHPHLD
      </td>
    </tr>
    <tr>
      <td><strong>Onboard</strong></td>
      <td>
        1x User LED (R/G/B 3 Color)<br/>
        1x Charge LED (Battery Charging Indicator)<br/>
        1x Reset Button<br/>
        1x User Button<br/>
        1x IPEX4 Connector (for external antenna)
      </td>
      <td>
        1x User LED (R/G/B 3 Color)<br/>
        1x Charge LED (Battery Charging Indicator)<br/>
        1x Reset Button<br/>
        1x User Button<br/>
        1x IPEX4 Connector (for external antenna)<br/>
        1x 6-Axis IMU<br/>
        1x PDM Microphone
      </td>
    </tr>
    <tr>
      <td><strong>Wireless Connectivity</strong></td>
      <td colspan="2">
        Bluetooth LE 6.0 (include Channel Sounding)<br/>
        Bluetooth Mesh<br/>
        NFC<br/>
        Thread<br/>
        Zigbee<br/>
        Matter<br/>
        Amazon Sidewalk<br/>
        Proprietary 2.4 GHz protocols
      </td>
    </tr>
    <tr>
      <td><strong>Power Input</strong></td>
      <td colspan="2">
        Type-C: 5V<br/>
        Battery: 3.7V
      </td>
    </tr>
    <tr>
      <td><strong>Low Power Mode (3.7V@2A)</strong></td>
      <td>/</td>
      <td>
        Light-Sleep: ~9.96µA<br/>
        Deep-Sleep (System OFF): ~4.76µA<br/>
        Deep-Sleep (System OFF, GRTC wake-up): ~4.92µA<br/>
        Ship-Mode: 0.33µA
      </td>
    </tr>
    <tr>
      <td><strong>Software Compatibility</strong></td>
      <td colspan="2">
        Nordic nRF Connect SDK (based on Zephyr RTOS)<br/>
        PlatformIO (based on Zephyr RTOS)
      </td>
    </tr>
    <tr>
      <td><strong>Working Temperature</strong></td>
      <td colspan="2">-20°C to 70°C</td>
    </tr>
    <tr>
      <td><strong>Dimensions</strong></td>
      <td colspan="2">21 x 17.8mm</td>
    </tr>
  </tbody>
</table>

### Features

- **Powerful SoC with Advanced Connectivity & Security**

  Seeed Studio XIAO nRF54LM20A Sense is a compact, ultra-low-power wireless development board powered by Nordic Semiconductor’s nRF54LM20A SoC. It features a 128 MHz Arm Cortex-M33 processor, 512 KB RAM, 2 MB on-chip NVM, a 128 MHz RISC-V coprocessor, multiprotocol 2.4 GHz wireless connectivity, onboard IMU, digital microphone, 8MB external flash, IPEX antenna connector, and Nordic nPM1300 PMIC for efficient power management.With support for Bluetooth LE, Bluetooth Channel Sounding, Bluetooth Mesh, Thread, Zigbee, Matter, and proprietary 2.4 GHz protocols up to 4 Mbps, this board is built for next-generation connected products. The onboard motion and audio sensors make it ideal for wearables, smart sensing, TinyML, gesture recognition, voice-triggered devices, and battery-powered IoT applications.

- **Ultra-Low Power Efficiency**

  Built on Nordic nRF54LM20A and nPM1300 PMIC, XIAO nRF54LM20A Sense achieves a measured deep sleep current of only 4.76 µA under BAT power. Combined with the nPM1300 PMIC and its 0.33 µA Ship Mode BAT current, in active wireless operation, it records an average current of 3.87 mA with a 3.7 V simulated battery input and TX power set to +8 dBm, the board is ideal for long-life battery-powered sensing applications, wearables, and always-on IoT devices.

- **Streamlined Development Experience**

  Full support for Nordic nRF Connect SDK and PlatformIO (Zephyr) enables efficient embedded development workflows. (Note: Arduino IDE is currently not supported)

## Hardware Overview

### XIAO nRF54LM20A Sense Front

<div style={{textAlign: 'center'}}>
              <img
                src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/4_pin.png"
                style={{width: 1000, height: 'auto'}}
              />
            </div>

### XIAO nRF54LM20A Sense Back

<div style={{textAlign: 'center'}}>
              <img
                src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/5_pin.png"
                style={{width: 800, height: 'auto'}}
              />
            </div>

<!-- <div className="table-center">
  <TabItem value="54lm20a" label="XIAO nRF54LM20A" default>
    <table align="center">
      <tbody>
        <tr>
          <th>XIAO nRF54LM20A Pin List</th>
        </tr>
        <tr>
          <td>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/4_pin.png"
                style={{width: 1000, height: 'auto'}}
              />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/5_pin.png"
                style={{width: 800, height: 'auto'}}
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </TabItem>
</div> -->

## **Pin Map**

| XIAO Pin       | Function       | Chip Pin                          | Description                                                                 |
| :------------: | :------------: | :-------------------------------: | :-------------------------------------------------------------------------- |
| **Power Pins** |                |                                   |                                                                             |
| VBUS           | VBUS           | -                                 | 5V Power Input/Output                                                       |
| GND            | GND            | -                                 | Ground                                                                      |
| 3V3            | 3V3-OUT        | -                                 | 3.3V Power Output                                                           |
| BAT+           | BAT+           | -                                 | Battery Input (monitored by nPM1300 via I²C)                                |
| BAT-           | BAT-           | -                                 | Battery Negative Terminal                                                  |
| SHPHLD         | SHPHLD         | -                                 | PMIC Ship/Hibernate Mode Control (ultra-low-power shipping state)          |
| **System & Control Pins** |        |                                   |                                                                             |
| RESET          | RESET          | -                                 | Board Reset                                                                 |
| SWCLK          | SWCLK          | nRF54LM20A SWCLK / SAMD11 SWCLK   | Serial Wire Clock (for nRF54 and SAMD11)                                    |
| SWDIO          | SWDIO          | nRF54LM20A SWDIO / SAMD11 SWDIO   | Serial Wire Data (for nRF54 and SAMD11)                                    |
| SAMD11_RESET   | RESET          | SAMD11 RESET                      | SAMD11 Co-processor Reset                                                  |
| **User & LED Pins** |            |                                   |                                                                             |
| -              | USER_BUTTON    | P0.09                             | User Button Input                                                           |
| -              | RGB-B          | P1.23                             | Onboard RGB LED Blue Channel                                                |
| -              | RGB-G          | P1.24                             | Onboard RGB LED Green Channel                                               |
| -              | RGB-R          | P1.22                             | Onboard RGB LED Red Channel                                                 |
| **Analog Input (ADC) Pins** |      |                                   |                                                                             |
| A0             | AIN0           | P1.00                             | Analog Input 0 / GPIO                                                       |
| A1             | AIN1           | P1.31                             | Analog Input 1 / GPIO                                                       |
| A2             | AIN2           | P1.30                             | Analog Input 2 / GPIO                                                       |
| A3             | AIN3           | P1.29                             | Analog Input 3 / GPIO                                                       |
| A7             | AIN7           | P1.03                             | Analog Input 7 / GPIO                                                       |
| **I2C Pins**   |                |                                   |                                                                             |
| SDA            | I2C_SDA        | P1.03                             | I2C Data Line (IMU & Peripheral)                                            |
| SCL            | I2C_SCL        | P1.07                             | I2C Clock Line (IMU & Peripheral)                                           |
| -              | BAT_SDA        | P1.18                             | Battery Monitor I2C SDA (nPM1300)                                           |
| -              | BAT_SCL        | P1.17                             | Battery Monitor I2C SCL (nPM1300)                                           |
| **UART Pins**  |                |                                   |                                                                             |
| TX             | UART_TX        | P1.08                             | UART Transmit                                                               |
| RX             | UART_RX        | P1.09                             | UART Receive                                                                |
| **SPI Pins**   |                |                                   |                                                                             |
| MOSI           | SPI_MOSI       | P1.06                             | SPI Master Out Slave In                                                     |
| MISO           | SPI_MISO       | P1.05                             | SPI Master In Slave Out                                                     |
| SCK            | SPI_SCK        | P1.04                             | SPI Serial Clock                                                            |
| **Onboard Peripheral Pins** |      |                                   |                                                                             |
| -              | MIC_DAT        | P1.14                             | Microphone Data Line                                                        |
| -              | MIC_CLK        | P1.13                             | Microphone Clock Line                                                       |
| -              | IMU_SDA        | P0.08                             | IMU I2C SDA (Onboard IMU)                                                   |
| -              | IMU_SCL        | P0.07                             | IMU I2C SCL (Onboard IMU)                                                   |
| -              | IMU_CS         | P3.12                             | IMU Chip Select                                                             |
| -              | IMU_INT1       | P0.06                             | IMU Interrupt 1                                                             |
| -              | NFC            | P1.02 / P1.01                     | NFC Antenna Pins                                                            |
| -              | GRTC           | P0.04 / P0.05                     | General Purpose RTC Pins                                                    |

## Getting Started With PlatformIO

In this section, we will guide you to quickly get started with the XIAO nRF54LM20A through the multi-color blinking effect of an RGB LED.
Please complete the hardware and software preparations below to set up your XIAO for subsequent development.

### Hardware Preperation

You need to prepare the following:

- 1 x [Seeed Studio XIAO nRF54LM20A Sense](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html)
- 1 x Computer
- 1 x USB Type-C cable

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO nRF54LM20A Sense</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg"
            style={{width: 400, height: 'auto'}}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Get One Now 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>

### Download VS Code

Download according to the system you are using [VS Code](https://code.visualstudio.com/download)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:800, height:'auto'}}/></div>

### Install the PlatformIO extension

Open VSCode, click on Extensions, then search for PlatformIO and select to install. After the installation is complete, restart VSCode.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:800, height:'auto'}}/></div>

### Install the platform-seeedboards platform package

The Seeed Studio XIAO series boards use a custom PlatformIO platform, so you need to install the corresponding platform package manually.

- Run the following command for a fresh installation:

```bash
pio pkg install -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
- If you have previously used Seeed Studio XIAO series boards in PlatformIO, run the command below to update:

```bash
pio pkg update -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
:::tip

If you want to use an existing PlatformIO project, replace the content of **platformio.ini** as follows:

```ini
[env:seeed-xiao-nrf54lm20a]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = zephyr
board = seeed-xiao-nrf54lm20a
```

:::

### Create New Project

1. Open the PlatformIO extension and select **Create New Project**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_2.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. Set the project name, select the development board, framework and file storage path.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_3.png" style={{width:800, height:'auto'}}/></div>
<br/>
3. After creation completes, a prompt to open the workspace will pop up. Click OK.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_4.png" style={{width:800, height:'auto'}}/></div>
<br/>
4. Navigate to the project folder. Files are stored in the default directory if you did not specify a custom path.

- For Windows Default:

```bash
<path>: C:\Users\your_name\Documents\PlatformIO\Projects
```

- For Mac / Linux Default:

```bash
<path>: ~/Documents/PlatformIO/Projects
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_5.png" style={{width:800, height:'auto'}}/></div>

### Add the Blink program

This tutorial is developed based on Zephyr RTOS. The project consists of three core files:

- `main.c`: Main program that contains the application logic.
- `app.overlay`: Devicetree overlay file for hardware peripheral configuration.
- `prj.conf`: Project configuration file to enable required Zephyr modules.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_6.png" style={{width:800, height:'auto'}}/></div>

1. Add the **main.c** program

<details>

<summary>main.c</summary>

```c

/*
 * Copyright (c) 2016 Intel Corporation
 *
 * SPDX-License-Identifier: Apache-2.0
 */

#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/pwm.h>
#include <nrfx_power.h>

#define PWM_PERIOD_NS 1000000U
#define STEP_TIME_MS 500

#define LED_R_NODE DT_ALIAS(pwm_led1)
#define LED_G_NODE DT_ALIAS(pwm_led2)
#define LED_B_NODE DT_ALIAS(pwm_led0)

#if !DT_NODE_EXISTS(LED_R_NODE) || !DT_NODE_EXISTS(LED_G_NODE) || !DT_NODE_EXISTS(LED_B_NODE)
#error "This RGB blink demo expects pwm-led0/pwm-led1/pwm-led2 devicetree aliases"
#endif

static const struct pwm_dt_spec led_r = PWM_DT_SPEC_GET(LED_R_NODE);
static const struct pwm_dt_spec led_g = PWM_DT_SPEC_GET(LED_G_NODE);
static const struct pwm_dt_spec led_b = PWM_DT_SPEC_GET(LED_B_NODE);

struct rgb_step {
	uint8_t r;
	uint8_t g;
	uint8_t b;
	uint32_t delay_ms;
};

static int pwm_set_u8(const struct pwm_dt_spec *led, uint8_t level)
{
	uint32_t duty_ns = (PWM_PERIOD_NS * (uint32_t)level) / 255U;

	return pwm_set_dt(led, PWM_PERIOD_NS, duty_ns);
}

static int rgb_set(uint8_t r, uint8_t g, uint8_t b)
{
	int ret;

	ret = pwm_set_u8(&led_r, r);
	if (ret < 0) {
		return ret;
	}

	ret = pwm_set_u8(&led_g, g);
	if (ret < 0) {
		return ret;
	}

	ret = pwm_set_u8(&led_b, b);
	if (ret < 0) {
		return ret;
	}

	return 0;
}

int main(void)
{
	int ret;

#if defined(CONFIG_NRFX_POWER)
	nrfx_power_constlat_mode_request();
#endif

	if (!device_is_ready(led_r.dev) || !device_is_ready(led_g.dev) || !device_is_ready(led_b.dev)) {
		return -1;
	}

	static const struct rgb_step demo[] = {
		{ 255, 0, 0, STEP_TIME_MS },
		{ 0, 255, 0, STEP_TIME_MS },
		{ 0, 0, 255, STEP_TIME_MS },
		{ 255, 255, 0, STEP_TIME_MS },
		{ 0, 255, 255, STEP_TIME_MS },
		{ 255, 0, 255, STEP_TIME_MS },
		{ 255, 255, 255, STEP_TIME_MS },
		{ 0, 0, 0, STEP_TIME_MS },
	};

	while (1) {
		for (size_t i = 0; i < ARRAY_SIZE(demo); i++) {
			ret = rgb_set(demo[i].r, demo[i].g, demo[i].b);
			if (ret < 0) {
				return ret;
			}
			k_msleep(demo[i].delay_ms);
		}
	}

	return 0;
}
```

</details>

2. Add the app.overlay file

The devicetree overlay file does not exist in the newly created blank sample. You need to add it under the zephyr directory.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_7.png" style={{width:800, height:'auto'}}/></div>

<details>

<summary>app.overlay</summary>

```dts
/*
 * Device tree overlay for XIAO nRF54LM20A RGB LED PWM demo.
 *
 * PWM20 peripheral is used for RGB LED control:
 *   - Channel 0: P1.22 (Blue LED)  -> pwm_led0
 *   - Channel 1: P1.23 (Red LED)   -> pwm_led1
 *   - Channel 2: P1.24 (Green LED) -> pwm_led2
 */

&pwm20 {
	status = "okay";
};

/ {
	pwmleds {
		compatible = "pwm-leds";

		pwm_led0: pwm_led_0 {
			pwms = <&pwm20 0 PWM_MSEC(20) PWM_POLARITY_NORMAL>;
			label = "Blue LED";
		};

		pwm_led1: pwm_led_1 {
			pwms = <&pwm20 1 PWM_MSEC(20) PWM_POLARITY_NORMAL>;
			label = "Red LED";
		};

		pwm_led2: pwm_led_2 {
			pwms = <&pwm20 2 PWM_MSEC(20) PWM_POLARITY_NORMAL>;
			label = "Green LED";
		};
	};
};

/ {
	aliases {
		pwm-led0 = &pwm_led0;
		pwm-led1 = &pwm_led1;
		pwm-led2 = &pwm_led2;
	};
};
```

</details>

3. Modify `prj.conf` and enable the corresponding configurations.

```prj
CONFIG_GPIO=y
CONFIG_PWM=y
CONFIG_SERIAL=n
```

### Compile and upload the program

Two methods for compilation and uploading are introduced below.

1. Compile & Upload via Button

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_8.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. Compile & Upload via Command Line

```bash
pio run -e seeed-xiao-nrf54lm20a -t upload -v
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_9.png" style={{width:800, height:'auto'}}/></div>

### Observe the Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_5.gif" style={{width:800, height:'auto'}}/></div>

## Bluetooth Antenna

This board uses an external Bluetooth antenna. To ensure a better quality of Bluetooth signal and enhance your Bluetooth usage experience, it is recommended to install a Bluetooth antenna.
The connection method is shown below:

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_6.gif"
    alt="Bluetooth antenna connection"
    style={{width: 800, height: 'auto'}}
  />
</div>

## Battery Usage

The XIAO nRF54LM20A is capable of using a 3.7V lithium battery as the power supply input. You can refer to the following diagram for the wiring method.

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/6_battry.png"
    alt="Battery wiring"
    style={{width: 600, height: 'auto'}}
  />
</div>

:::caution
Please be careful not to short-circuit the positive and negative terminals and burn the battery and equipment when soldering.
If the battery has power, never solder it onto the board, as this may burn out the circuit board. Short-circuiting while the circuit is powered on poses a significant risk; it is recommended to use an adapter.

:::

**Instructions on the use of batteries:**

1. Please use qualified batteries that meet the specifications.
2. XIAO can be connected to your computer device via data cable while using the battery, rest assured that XIAO has a built-in circuit protection chip, which is safe.



### Battery Voltage Detection

The XIAO nRF54LM20A integrates a battery voltage detection feature that centers on efficiently managing battery power measurements using the nPM1300-CAA load switch. This guide will focus on analyzing the software implementation of the battery detection **(especially the main.c code)** and guide you on how to easily deploy and use this feature in a PlatformIO environment, avoiding the complexity of the Zephyr NCS SDK.

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_10.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:1000, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Detecting Battery Schematic</em></p>
</div>

What the nPM1300-CAA chip does:

nPM1300-CAA is a highly integrated power management IC (PMIC) that replaces the simple load switch function of the TPS22916. It not only controls battery voltage switching for low-power monitoring but also integrates charging, regulation, and precise fuel gauging (via voltage, current, temperature) to maximize battery life for the nRF54LM20A.



<div className="github_container" style={{textAlign: 'center'}}>
    <a className="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-battery" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>

:::note
The following example works for both PlatformIO and nRF Connect SDK. It can be used directly in PlatformIO, while the SDK requires manually adding files. Refer to this [link](https://wiki.seeedstudio.com/xiao_nrf54l15_sense_getting_started/#battery-powered-board)
:::

## Peripherals Overview

The peripheral circuitry on this board includes an IMU and a microphone. You can see their locations in the diagram below:

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/8.IMU_MIC.png"
    alt="IMU and microphone locations"
    style={{width: 400, height: 'auto'}}
  />
</div>

## IMU

The XIAO nRF54LM20A features an LSM6DS3TR-C IMU, supporting 3-axis accelerometer, gyroscope.

- [XIAO nRF54LM20A IMU Usage](https://wiki.seeedstudio.com/xiao_nrf54lm20a_with_onboard/#imu)

## MIC

The XIAO nRF54LM20A is equipped with an MSM261DGT006 microphone, supporting 16-bit audio capture.
- [XIAO nRF54LM20A MIC Usage](https://wiki.seeedstudio.com/xiao_nrf54lm20a_with_onboard/#mic)

## FAQ

<!-- ### Issue 1: Stuck at **Reading CMake configuration** on macOS

When compiling and uploading programs with PlatformIO on macOS, the process may get stuck at the **Reading CMake configuration** step even after network issues have been ruled out. This is usually caused by a macOS compatibility problem that prevents the Python-based `arm-none-eabi-gdb-py` tool from running correctly.

**Recommended fix:** Replace the faulty `gdb-py` file with a symbolic link.

1. Navigate to the tool directory:
   `/Users/your_name/.platformio/packages/toolchain-gccarmnoneeabi@1.80201.181220/bin/`
2. Back up the original file by renaming `arm-none-eabi-gdb-py` to `arm-none-eabi-gdb-py.broken.bak`.
3. Create a new symbolic link named `arm-none-eabi-gdb-py` that points to `arm-none-eabi-gdb`. -->

1. **Build errors after modifying configuration files**

If you previously built the full Zephyr project and later modified configuration files, it is recommended to clean the build cache before rebuilding and uploading. This helps avoid compilation errors caused by stale or corrupted cache files.

```shell
pio run -t clean  // Clean command
```

<!-- ### Issue 3: Build errors after modifying configuration files

Some USB cables can only supply power and cannot transfer data. If you don't have a USB cable or don't know if your USB cable can transmit data, you can check [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html). -->

2. **zsh: command not found: openocd after installation**

When directly entering "openocd" in the terminal, the shell will only search in the directories within the PATH; if the directory has not been added yet, it will prompt that the command cannot be found. Simply add it permanently to ~/.zshrc, following the instructions below.
This solution is for macOS users only

```shell
echo 'export PATH="$HOME/Library/Application Support/Seeed/OpenOCD/tool-openocd/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
openocd --version
```

3. **What should I do if I previously downloaded Seeed Studio XIAO series boards multiple times and now the drop-down of the Platform project fails?**

It is recommended to clean up before trying again. Accumulated duplicate and outdated Seeed platform folders under PlatformIO local packages cause overlong file lookup paths and version conflicts, resulting in project loading failure. Clean up redundant mixed-source Seeed platform directories according to the steps below, and only retain the official platform automatically pulled by PlatformIO to avoid conflicts caused by old and incorrect directories:
Delete all folders starting with platform-seeed- and framework-seeed-

```shell
rm -rf ~/.platformio/packages/platform-seeed-* ~/.platformio/packages/framework-seeed-*
```

## Resources

### Seeed Studio XIAO nRF54LM20A

**Hardware Design**
- **📄[Datasheet]** [Nordic nRF54LM20A Datasheet](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/nRF54LM20A_nRF54LM20B_Datasheet_v1.0.pdf)
- **📄[Schematic]** [XIAO nRF54LM20A Schematic](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Schematic.pdf )
- **🗃️[PCB Design Files]** [XIAO nRF54LM20A KiCad Project](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_V1.0_SCH&PCB_260508.zip )
- **🗃️[PCB Design Libraries]** 
  - [XIAO Series KiCad Footprints](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO Series KiCad SCH Symbols](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Pinout Diagram]**[XIAO nRF54LM20A Pinout Sheet](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Pin_definition.xlsx)

<!-- **Mechanical**
- **🗃️[3D Dimensions]** [XIAO nRF54LM20A Dimension in DXF](1) -->

### Seeed Studio XIAO nRF54LM20A Sense

**Hardware Design**
- **📄[Datasheet]** [Nordic nRF54LM20A Datasheet](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/nRF54LM20A_nRF54LM20B_Datasheet_v1.0.pdf)
- **📄[Schematic]** [XIAO nRF54LM20A Sense Schematic](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Schematic.pdf )
- **🗃️[PCB Design Files]** [XIAO nRF54LM20A KiCad Project](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_V1.0_SCH&PCB_260508.zip )
- **🗃️[PCB Design Libraries]**
  - [XIAO Series KiCad Footprints](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO Series KiCad SCH Symbols](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Pinout Diagram]**[XIAO nRF54LM20A Sense Pinout Sheet](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Pin_definition.xlsx)

<!-- **Mechanical**
- **🗃️[3D Dimensions]** [XIAO nRF54LM20A Sense Dimension in DXF](1) -->


## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
