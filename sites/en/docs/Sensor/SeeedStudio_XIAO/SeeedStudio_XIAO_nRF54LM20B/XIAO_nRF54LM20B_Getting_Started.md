---
title: Getting Started with XIAO nRF54LM20B
sidebar_label: Getting Started for XIAO
description: ''
keywords:
  - xiao
  - nrf54lm20b
  - getting_started
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/getting_start/Seeed-Studio-XIAO-nRF54LM20B.webp
slug: /xiao_nrf54lm20b_getting_started
sku:
last_update:
  date: 10/19/2026
  author: Brandy
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/xiao_nrf54lm20b_getting_started/
---

# Getting Started with XIAO nRF54LM20B

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/XIAO_nRF54LM20B_Wiki_Banners/XIAO_nRF54LM20B_Getting_Started.png" style={{width:600, height:'auto'}}/></div>

## Introduction

<!-- TODO: Product introduction. Highlight that the nRF54LM20B is the nRF54L-series variant with the
     integrated Axon NPU for edge-AI acceleration, plus 2 MB NVM / 512 KB RAM and high-speed USB.
     Mention the nPM1300 PMIC and 8 MB external flash if the hardware design carries them over from M20A. -->

The XIAO nRF54LM20B is a compact wireless development board based on the Nordic nRF54LM20B SoC.

### Specification

<!-- TODO: Fill in the specification table (SoC, CPU frequency, memory, wireless protocols, USB,
     PMIC, external flash, antenna, dimensions, power supply, operating temperature). -->

| Item | Value |
| ---- | ----- |
| SoC  | Nordic nRF54LM20B |

### Features

<!-- TODO: Bullet list of key features. Emphasize the Axon NPU (edge-AI inference acceleration)
     which distinguishes the M20B from the M20A. -->

## Hardware Overview

<!-- TODO: Front and back photos of the board with callouts for each component. -->

### XIAO nRF54LM20B Front

### XIAO nRF54LM20B Back

## **Pin Map**

<!-- TODO: Pin-out diagram and pin-function table. Verify against the actual board schematic —
     the M20B SoC exposes 66 GPIOs, so pin assignment may differ from the M20A wiki. -->

## Getting Started With PlatformIO

In this section, we will guide you to quickly get started with the XIAO nRF54LM20B through the multi-color blinking effect of an RGB LED.
Please complete the hardware and software preparations below to set up your XIAO for subsequent development.
### Hardware Preparation

You need to prepare the following:

- 1 x [Seeed Studio XIAO nRF54LM20B Sense](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html)
- 1 x Computer
- 1 x USB Type-C cable

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO nRF54LM20B Sense</th>
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


```SHELL
# for Windows
pio pkg update -g -p "SeeedStudio=https://github.com/Seeed-Studio/platform-seeedboards.git"
# for macOS/Linux
pio pkg uninstall -g -p "SeeedStudio" && pio pkg install -g -p "SeeedStudio=https://github.com/Seeed-Studio/platform-seeedboards.git" --force
```


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/getting_start/1_pio_update.png" style={{width:800, height:'auto'}}/></div>
<br/>


:::tip

If you want to use an existing PlatformIO project, replace the content of **platformio.ini** as follows:

```ini
[env:seeed-xiao-nrf54lm20b]
platform = https://github.com/Seeed-Studio/platform-seeedboards
framework = zephyr
board = seeed-xiao-nrf54lm20b
monitor_speed = 115200
```

:::

### Create New Project

1. Open the PlatformIO extension and select **Create New Project**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_2.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. Set the project name, select the development board, framework and file storage path.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/getting_start/2_pio_create_new_project.png" style={{width:800, height:'auto'}}/></div>
<br/>
3. After creation completes, a prompt to open the workspace will pop up. Click OK.

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


5. Before modifying any code, build the project once to confirm that the project was created and pulled successfully.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/getting_start/3_pio_create_2.png" style={{width:800, height:'auto'}}/></div>

### Add the Blink program

This tutorial is developed based on Zephyr RTOS. The project consists of three core files:

- `main.c`: Main program that contains the application logic.
- `app.overlay`: Devicetree overlay file for hardware peripheral configuration.
- `prj.conf`: Project configuration file to enable required Zephyr modules.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/getting_start/4_code.png" style={{width:800, height:'auto'}}/></div>

The complete getting-started project is also available on GitHub:

<div className="github_container" style={{textAlign: 'center'}}>
    <a className="github_item" href="https://github.com/Seeed-Projects/XIAO_nRF54LM20B_wiki_examples/tree/main/1_getting_start" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>

1. Add the **main.c** program

<details>

<summary>main.c</summary>

```c

/*
 * XIAO nRF54LM20B getting-started
 * ----------------------------------------------------------------------------
 *  1. On power-up the user RGB LED (common anode, red/green/blue channels)
 *     blinks in rotation: red 500ms -> off 500ms -> green 500ms -> off 500ms
 *     -> blue 500ms -> off 500ms, repeating.
 *  2. Once attached to a PC, the USBHS (CDC-ACM) serial port prints once:
 *     "Hello, XIAO nRF54LM20B".
 *  3. Sense variant: the same output is followed by current raw IMU
 *     (LSM6DS3TR-C) readings.
 *
 * The USB serial port is initialized automatically at boot by the board-level
 * defconfig (CDC_ACM_SERIAL_INITIALIZE_AT_BOOT=y); zephyr,console =
 * cdc_acm_uart is ready before main() runs. The application therefore does
 * not need to - and must not - build a second usbd context manually (that
 * would conflict with the automatic backend and break USB enumeration).
 *
 * Board-level devicetree (in the framework package):
 *   - led0/blue_led/red_led/green_led: common-anode RGB, GPIO_ACTIVE_LOW
 *   - zephyr_udc0 = &usbhs, cdc_acm_uart = zephyr,console
 *   - imu0 = lsm6ds3tr_c@6a (i2c30), imu_vdd = PMIC nPM1300 LDO1
 *
 * SPDX-License-Identifier: Apache-2.0
 */

#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/devicetree.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/drivers/uart.h>
#include <zephyr/drivers/sensor.h>
#include <zephyr/drivers/regulator.h>
#include <zephyr/sys/printk.h>
#include <zephyr/dfu/mcuboot.h>

/* ============================ Board resource bindings ============================ */

/* User RGB LED: board-level red_led/blue_led/green_led (common anode,
 * GPIO_ACTIVE_LOW - driven low to light up). The led0 alias is blue_led;
 * use the three nodelabels directly to get all three channels. */
static const struct gpio_dt_spec rgb[] = {
	GPIO_DT_SPEC_GET(DT_NODELABEL(red_led), gpios),
	GPIO_DT_SPEC_GET(DT_NODELABEL(green_led), gpios),
	GPIO_DT_SPEC_GET(DT_NODELABEL(blue_led), gpios),
};

/* USB CDC-ACM console (zephyr,console = cdc_acm_uart, on USBHS, ready at boot) */
static const struct device *const cons = DEVICE_DT_GET(DT_CHOSEN(zephyr_console));

/* IMU: LSM6DS3TR-C, alias imu0 (present on the Sense variant only; a missing
 * node is not a build error - checked at runtime with device_is_ready()). */
#if DT_NODE_EXISTS(DT_ALIAS(imu0))
static const struct device *const imu = DEVICE_DT_GET(DT_ALIAS(imu0));
#else
static const struct device *const imu = NULL;
#endif

/* IMU power rail: LDO1 of the PMIC nPM1300 (imu_vdd). Same graceful fallback
 * if the node does not exist. */
#if DT_NODE_EXISTS(DT_NODELABEL(imu_vdd))
static const struct device *const imu_vdd = DEVICE_DT_GET(DT_NODELABEL(imu_vdd));
#else
static const struct device *const imu_vdd = NULL;
#endif

/* ============================ IMU helpers ============================ */

static void imu_init(void)
{
	/*
	 * Power up the IMU supply rail LDO1 first. regulator-boot-on already
	 * enabled it once during kernel init; the regulator_enable() here is
	 * just an idempotent safety net (bumps the refcount, harmless).
	 * Done before the device_is_ready(imu) check, which is the logical order.
	 */
	if (imu_vdd != NULL && device_is_ready(imu_vdd)) {
		(void)regulator_enable(imu_vdd);
	}

	if (imu == NULL || !device_is_ready(imu)) {
		return;
	}

	/* After lsm6dsl init the ODR may still be power-down; set 52 Hz so
	 * valid data is produced. */
	struct sensor_value odr = { .val1 = 52, .val2 = 0 };
	(void)sensor_attr_set(imu, SENSOR_CHAN_ACCEL_XYZ,
			      SENSOR_ATTR_SAMPLING_FREQUENCY, &odr);
	(void)sensor_attr_set(imu, SENSOR_CHAN_GYRO_XYZ,
			      SENSOR_ATTR_SAMPLING_FREQUENCY, &odr);
}

/* Print the raw IMU readings once (accel m/s^2, gyro rad/s; the val1.val2
 * pair of each sensor_value). */
static void imu_print(void)
{
	if (imu == NULL || !device_is_ready(imu)) {
		printk("IMU: not available\r\n");
		return;
	}

	struct sensor_value acc[3];
	struct sensor_value gyr[3];
	int ret;

	ret = sensor_sample_fetch(imu);
	if (ret) {
		printk("IMU: sample_fetch failed (%d)\r\n", ret);
		return;
	}

	ret = sensor_channel_get(imu, SENSOR_CHAN_ACCEL_XYZ, acc);
	if (ret) {
		printk("IMU: accel channel_get failed (%d)\r\n", ret);
		return;
	}
	ret = sensor_channel_get(imu, SENSOR_CHAN_GYRO_XYZ, gyr);
	if (ret) {
		printk("IMU: gyro channel_get failed (%d)\r\n", ret);
		return;
	}

	printk("IMU accel[m/s^2] ax=%d.%06d ay=%d.%06d az=%d.%06d\r\n",
	       acc[0].val1, acc[0].val2, acc[1].val1, acc[1].val2,
	       acc[2].val1, acc[2].val2);
	printk("IMU gyro[rad/s]  gx=%d.%06d gy=%d.%06d gz=%d.%06d\r\n",
	       gyr[0].val1, gyr[0].val2, gyr[1].val1, gyr[1].val2,
	       gyr[2].val1, gyr[2].val2);
}

/* ============================ Main flow ============================ */

int main(void)
{
	int color = 0;
	bool led_on = false;
	bool greeted = false;

	/*
	 * 0) Self-confirm the running image: an image uploaded via mcuboot
	 *    starts as a test image (unconfirmed, and would be reverted).
	 *    Confirm it immediately at startup so this image stays permanent
	 *    and a reset no longer rolls back to an empty image.
	 *    Returns non-zero if already permanent - safe to ignore.
	 */
	(void)boot_write_img_confirmed();

	/* 1) RGB LED: configure all three channels as outputs, initially off
	 *    (with GPIO_ACTIVE_LOW, inactive = high level). */
	for (size_t i = 0; i < ARRAY_SIZE(rgb); i++) {
		if (!gpio_is_ready_dt(&rgb[i])) {
			return 0;
		}
		gpio_pin_configure_dt(&rgb[i], GPIO_OUTPUT_INACTIVE);
	}

	/* 2) IMU (Sense variant): power up + set sampling frequency */
	imu_init();

	/* 3) USB CDC console is already initialized by the board; nothing to do. */

	/*
	 * Main loop: toggle the LED every 500 ms => 1 Hz blinking, and switch
	 * to the next color on every rising (off -> on) edge (red -> green ->
	 * blue rotation); poll DTR at the same rate and print the Hello line
	 * (+IMU) only once, after the PC opens the serial port.
	 */
	while (1) {
		led_on = !led_on;
		if (led_on) {
			/* Advance to the next color on each off -> on edge */
			color = (color + 1) % (int)ARRAY_SIZE(rgb);
		}
		for (size_t i = 0; i < ARRAY_SIZE(rgb); i++) {
			gpio_pin_set_dt(&rgb[i], (led_on && (int)i == color) ? 1 : 0);
		}

		if (!greeted && cons != NULL && device_is_ready(cons)) {
			uint32_t dtr = 0U;

			if (uart_line_ctrl_get(cons, UART_LINE_CTRL_DTR, &dtr) == 0
			    && dtr != 0U) {
				/* Let the host finish port setup before printing */
				k_msleep(50);
				printk("Hello, XIAO nRF54LM20B\r\n");
				imu_print();
				greeted = true;
			}
		}

		k_sleep(K_MSEC(500));
	}

	return 0;
}
```

</details>

2. Add the app.overlay file

The devicetree overlay file does not exist in the newly created blank sample. You need to add it under the zephyr directory.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/getting_start/5_pio_create_5.png" style={{width:800, height:'auto'}}/></div>

<details>

<summary>app.overlay</summary>

```dts
/*
 * XIAO nRF54LM20B (Sense) application-level devicetree overlay
 * ----------------------------------------------------------------------------
 * Fixes the IMU (LSM6DS3TR-C) "device not ready" issue:
 *  the lsm6dsl driver reads WHO_AM_I during its POST_KERNEL init (see
 *  lsm6dsl.c:735), but its supply rail imu_vdd = nPM1300 LDO1 is off by
 *  default, so a regulator_enable() from the app in main() is too late -
 *  the driver has already decided it is not ready.
 *  regulator-boot-on here makes the regulator core enable the output during
 *  boot (before sensor init) and wait 5 ms for it to settle, so the rail is
 *  up by the time the IMU driver initializes.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

&imu_vdd {
	regulator-boot-on;
};

```

</details>

3. Modify `prj.conf` and enable the corresponding configurations.

<details>

<summary>prj.conf</summary>

```conf
# =============================================================================
# XIAO nRF54LM20B getting-started: GPIO + USBHS serial + IMU
#
# The board-level defconfig enables the USB CDC-ACM serial backend and
# initializes it automatically at boot (CDC_ACM_SERIAL_INITIALIZE_AT_BOOT=y,
# VID 2886:8013, product "XIAO_NRF54LM20B"); zephyr,console = cdc_acm_uart
# (on USBHS) is ready before main() runs.
# The application must therefore NOT build a second usbd context manually -
# it would conflict with the automatic backend and break USB enumeration.
# Only GPIO / sensor / DTR Kconfig options are added here.
# =============================================================================

# ---- GPIO (on-board RGB LED) ----
CONFIG_GPIO=y

# ---- mcuboot self-confirmation: an uploaded image starts as a test image
#      (unconfirmed, would be reverted). The app confirms itself at startup
#      so the image stays permanent and a reset no longer rolls back. ----
CONFIG_BOOTLOADER_MCUBOOT=y
# boot_write_img_confirmed() lives in the img_manager subsystem; enable it
CONFIG_IMG_MANAGER=y
CONFIG_MCUBOOT_IMG_MANAGER=y
# img_manager depends on flash_map / stream_flash (and thus the FLASH driver)
CONFIG_FLASH=y
CONFIG_FLASH_MAP=y
CONFIG_STREAM_FLASH=y

# ---- DTR detection: the board only enables UART_LINE_CTRL by default for
#      SHELL; enable it explicitly here to detect whether the PC has opened
#      the serial port, so the greeting prints exactly once. ----
CONFIG_UART_LINE_CTRL=y

# ---- IMU (Sense variant): LSM6DS3TR-C, compatible=st,lsm6dsl, alias imu0 ----
CONFIG_SENSOR=y
CONFIG_I2C=y
CONFIG_LSM6DSL=y
# PMIC nPM1300 + bit-bang I2C + regulator: powers the imu_vdd (LDO1) rail
CONFIG_MFD=y
CONFIG_REGULATOR=y
CONFIG_I2C_GPIO=y


```
</details>

### Enter the bootloader manually

Every upload on this board goes through the **MCUboot bootloader**, so it is important to understand how the board enters it. The XIAO nRF54LM20B has no on-board debug probe — flashing always happens through the bootloader's serial recovery mode over the USB serial port.

To trigger it manually (replace `<PORT>` with the board's actual USB serial port, for example `/dev/cu.usbmodem*`, `/dev/ttyACM0`, or `COMx` on Windows):

```bash
~/.platformio/penv/bin/python -c "import serial; serial.Serial('<PORT>', 1200, timeout=1).close()"
```

In the normal case this is fully automatic and no buttons are needed: before every upload, PlatformIO finds the board's USB serial port, triggers the bootloader with a 1200-baud serial "touch", waits for the bootloader port to re-appear, and then uploads the signed firmware.

:::tip
The manual steps below are only needed as a fallback — for example when the upload cannot find the board or hangs waiting for it, typically because the running application has crashed and its USB serial port is no longer alive.
:::

To put the board into bootloader mode manually:

1. Press and hold the **B0** button (P0.09) — do not release it yet.
2. While still holding **B0**, press and release the **RST** button once. This resets the board.
3. Keep holding **B0** for about 2 more seconds, then release it.

The board is now in bootloader mode. On macOS, a system dialog may pop up when the board re-enumerates — this behavior is different from the reset behavior of the ESP32-based XIAO boards.

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/getting_start/12_2.gif"
    alt="Upload from the PlatformIO toolbar"
    style={{width: 800, height: 'auto'}}
  />
</div>

#### Special Thanks

The demo above uses a 3D-printed **XIAO Button Extender** that makes the small B0 and RST buttons easier to press. Special thanks to its contributor [Saheen Palayi](https://www.printables.com/@SaheenPalayi_5386471) — the model can be downloaded for free from [Printables](https://www.printables.com/model/1845960-xiao-button-extender/files).

:::note
If the serial port disappears after entering bootloader mode and the board cannot be found, give it some time. In one test, after flashing the getting-started example and switching to a different program, the port could not be detected while the board was in DFU mode. Repeating the **B0 + RST** sequence above and waiting about one minute brought the port back.
:::

### Compile and upload the program

#### Compile & Upload via Button

Click the **Upload** arrow (→) in the PlatformIO bottom toolbar to build and flash the firmware in one step.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/getting_start/6_pio_flasher.png" style={{width:800, height:'auto'}}/></div>
<br/>

### Observe the Result

After flashing, observe the XIAO. If the expected result does not show up, press the **RST** button once to restart the application.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/getting_start/10_gift.gif" style={{width:800, height:'auto'}}/></div>

The result on the serial monitor is shown below:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/getting_start/7-result.png" style={{width:800, height:'auto'}}/></div>

## Bluetooth Antenna

This board uses an external Bluetooth antenna. To ensure a better quality of Bluetooth signal and enhance your Bluetooth usage experience, it is recommended to install a Bluetooth antenna.
The connection method is shown below:

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/getting_start/11_2.gif"
    alt="Bluetooth antenna connection"
    style={{width: 800, height: 'auto'}}
  />
</div>

## Battery Usage

The XIAO nRF54LM20B is capable of using a 3.7V lithium battery as the power supply input. You can refer to the following diagram for the wiring method.

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/getting_start/13_battery.png"
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

### Charging Indicator Operating Effect
This example controls the onboard LEDDRV1 by reading the VBUS, VBAT and IBAT status of the nPM1300: the LED lights up during charging, and turns off when the battery is fully charged, no battery is connected, or the USB cable is unplugged. Meanwhile, the program outputs the battery voltage, charging current and charging status via the serial port for easy monitoring of the charging process.




### Battery Voltage Detection

The XIAO nRF54LM20B integrates a battery voltage detection feature that centers on efficiently managing battery power measurements using the nPM1300-CAA load switch. This guide will focus on analyzing the software implementation of the battery detection **(especially the main.c code)** and guide you on how to easily deploy and use this feature in a PlatformIO environment, avoiding the complexity of the Zephyr NCS SDK.

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_10.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:1000, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Detecting Battery Schematic</em></p>
</div>

What the nPM1300-CAA chip does:

nPM1300-CAA is a highly integrated power management IC (PMIC) that replaces the simple load switch function of the TPS22916. It not only controls battery voltage switching for low-power monitoring but also integrates charging, regulation, and precise fuel gauging (via voltage, current, temperature) to maximize battery life for the nRF54LM20B.



<div className="github_container" style={{textAlign: 'center'}}>
    <a className="github_item" href="https://github.com/Seeed-Projects/XIAO_nRF54LM20B_wiki_examples/tree/main/5_battery_npm1300" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>


## Peripherals Overview

The peripheral circuitry on this board includes an IMU and a microphone. You can see their locations in the diagram below:

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/getting_start/14_imu_mic.png"
    alt="IMU and microphone locations"
    style={{width: 400, height: 'auto'}}
  />
</div>

## IMU

The XIAO nRF54LM20B Sense features an LSM6DS3TR-C IMU with a 3-axis accelerometer and a 3-axis gyroscope.

- [Obtain Six-axis Data](https://wiki.seeedstudio.com/xiao_nrf54lm20b_with_onboard/#obtain-six-axis-data)
- [Wake on Motion](https://wiki.seeedstudio.com/xiao_nrf54lm20b_with_onboard/#wake-on-motion)
- [Posture Recognition](https://wiki.seeedstudio.com/xiao_nrf54lm20b_with_onboard/#posture-recognition)

## MIC

The XIAO nRF54LM20B Sense is equipped with an MSM261DGT006 digital microphone for audio capture.
- [Audio Recording](https://wiki.seeedstudio.com/xiao_nrf54lm20b_with_onboard/#record-and-save)

### FAQ

**Q1: What should I do if I encounter build errors after modifying the configuration files?**

If you previously built the project and then modified configuration files (such as `prj.conf`, `app.overlay`, or `CMakeLists.txt`), it is recommended to clean the build cache before rebuilding. This helps avoid compilation errors caused by stale or corrupted cache files.

Run the following command:

```shell
pio run -t clean
```

---

**Q2: Why do I get `zsh: command not found: openocd` after installation? (macOS)**

This issue usually occurs because the OpenOCD executable directory has not been added to your system `PATH`. You can permanently add it to your `~/.zshrc` file using the following commands.

> **Note:** This solution is for **macOS only**.

```shell
echo 'export PATH="$HOME/Library/Application Support/Seeed/OpenOCD/tool-openocd/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
openocd --version
```

If the version number is displayed successfully, the configuration has been completed.

---

**Q3: What should I do if the PlatformIO project dropdown fails after installing the Seeed Studio XIAO platform multiple times?**



If you have installed different versions of the Seeed Studio XIAO PlatformIO platform multiple times, duplicate or outdated platform packages may cause version conflicts and prevent PlatformIO projects from loading correctly.

It is recommended to remove all old Seeed platform packages and let PlatformIO download the latest official version automatically.

Run the following command:

```shell
rm -rf ~/.platformio/packages/platform-seeed-* ~/.platformio/packages/framework-seeed-*
```

After cleaning up, reopen PlatformIO and rebuild your project.

---

**Q4: Why does creating a Zephyr project fail with "Could not initialize project"? (macOS/Linux)**

When you create a Zephyr project for the XIAO nRF54LM20 series for the first time, PlatformIO Home may stay in the initialization stage for a long time and then report `Could not initialize project` and `[FAILED] Took xxx seconds`. The error window may show a stack trace involving `ZephyrConfig.cmake` or `boilerplate.cmake`, and the build log may contain clone failures such as:

```shell
Pre-installing: hal_nordic
 Cloning https://github.com/zephyrproject-rtos/hal_nordic.git (attempt 1/3)
 Failed: error: RPC failed; curl 28 Operation too slow. Less than 1000 bytes/sec...
```

The first build of a project has to download the Zephyr west dependencies, such as `hal_nordic`. If the network is slow or GitHub is not reachable, these downloads can time out, and the first initialization is then judged as failed. This does not mean that the PlatformIO environment or the SeeedStudio platform package is broken.

Usually, simply creating the project again solves the problem. Even if the IDE reports a failure, the project directory may already have been generated — you can open it and build directly from the command line:

```shell
pio run -d <project directory>
```

If it still fails, make sure your network can access GitHub normally, and then build again. Once the first-round dependency installation is complete, later project creation and builds usually return to normal and become noticeably faster. If you suspect the platform package itself is corrupted, reinstall it with:

```shell
pio pkg uninstall -g -p SeeedStudio
pio pkg install -g -p "SeeedStudio=https://github.com/Seeed-Studio/platform-seeedboards.git" --force
```

:::note
When copying commands from the browser, make sure the URL is copied without the Markdown link syntax `[]()`.
:::

As recommended in the [Create New Project](#create-new-project) section, build the project once before modifying any code, so that environment problems are caught before development starts.

## Resources

### Seeed Studio XIAO nRF54LM20B

**Hardware Design**
- **📄[Datasheet]** [Nordic nRF54LM20B Datasheet](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/nRF54LM20A_nRF54LM20B_Datasheet_v1.0.pdf)
- **📄[Schematic]** [XIAO nRF54LM20B Schematic](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/res/XIAO_nRF54LM20B_V1.01_SCH_260813.pdf)
- **🗃️[PCB Design Files]** [XIAO nRF54LM20B KiCad Project](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/res/XIAO%20nRF54LM20B_v1.01_SCH&PCB_260813.zip )
- **🗃️[PCB Design Libraries]** 
  - [XIAO Series KiCad Footprints](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO Series KiCad SCH Symbols](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )


<!-- **Mechanical**
- **🗃️[3D Dimensions]** [XIAO nRF54LM20B Dimension in DXF](1) -->

### Seeed Studio XIAO nRF54LM20B Sense

**Hardware Design**
- **📄[Datasheet]** [Nordic nRF54LM20B Datasheet](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/nRF54LM20A_nRF54LM20B_Datasheet_v1.0.pdf)
- **📄[Schematic]** [XIAO nRF54LM20B Schematic](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/res/XIAO_nRF54LM20B_V1.01_SCH_260813.pdf)
- **🗃️[PCB Design Files]** [XIAO nRF54LM20B KiCad Project](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/res/XIAO%20nRF54LM20B_v1.01_SCH&PCB_260813.zip )
- **🗃️[PCB Design Libraries]** 
  - [XIAO Series KiCad Footprints](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO Series KiCad SCH Symbols](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )

<!-- **Mechanical**
- **🗃️[3D Dimensions]** [XIAO nRF54LM20B Sense Dimension in DXF](1) -->


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
