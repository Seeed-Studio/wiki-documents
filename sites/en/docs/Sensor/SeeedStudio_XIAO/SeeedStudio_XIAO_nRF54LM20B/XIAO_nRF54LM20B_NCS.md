---
title: nRF Connect SDK with XIAO nRF54LM20B
sidebar_label: NCS for XIAO
description: ''
keywords:
  - xiao
  - nrf54lm20b
  - ncs
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/getting_start/xiao_nrf54lm20b_ncs.webp
slug: /xiao_nrf54lm20b_ncs
sku:
last_update:
  date: 10/19/2026
  author: Brandy
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/xiao_nrf54lm20b_ncs/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/XIAO_nRF54LM20B_Wiki_Banners/XIAO_nRF54LM20B_NCS.png" style={{width:600, height:'auto'}}/></div>

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

nRF Connect SDK (NCS) is Nordic Semiconductor's official software development kit, built on top of the Zephyr RTOS real-time operating system. It provides a complete, native, and highly optimized development framework for the nRF series chips. Compared with PlatformIO, NCS offers developers fuller access to the entire hardware capabilities of the nRF54 series, including native support for Bluetooth Low Energy (BLE), Thread, Matter, and other wireless protocol stacks, as well as finer-grained power management and peripheral control. Nordic officially maintains and updates this SDK continuously, ensuring optimal compatibility with chip firmware and early access to the latest features.

This tutorial will guide you step by step through the entire process — from setting up the nRF Connect SDK development environment and installing the toolchain, to creating and configuring your first project, and finally flashing your first example program onto the XIAO nRF54LM20B to see it in action.

## Getting Started with NCS

### Hardware Preparation

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO nRF54LM20B</th>
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

### Install nRF Connect for VS Code Extension Pack Extension

1. Open VS Code, search for and install the **nRF Connect for VS Code Extension Pack**. This extension will automatically install all sub-extensions required for the complete toolchain, including nRF Connect, Kconfig, DeviceTree and more.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. The nRF Connect for VS Code Extension Pack will automatically install the following extensions for you.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_2.png" style={{width:800, height:'auto'}}/></div>


### Install nRF Connect SDK and Toolchain

1. Open the nRF Connect extension, select **Install SDK**, then choose **nRF Connect SDK**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_4.png" style={{width:800, height:'auto'}}/></div>
<br/>

2. Select **v3.3.0** from the **Pre-packaged SDKs & Toolchains** list.



<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/NCS/7.png" style={{width:800, height:'auto'}}/></div>
<br/>

:::tip

For nRF Connect SDK v3.3.0, the pre-packaged installation includes both the SDK code and the matching toolchain. You do not need to install the toolchain separately.

The nRF Connect SDK is quite large, and the initial installation will take some time. Please ensure a stable network connection during installation to avoid failures.

It is recommended to choose version 3.3.0 or above
:::

### Environment Verification

After the installation finishes, the integrated environment for the nRF Connect SDK will be set up automatically. To ensure smooth subsequent development, we recommend verifying the environment at this step.

1. Launch **nRF Terminal**, a built-in terminal of the nRF Connect SDK.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/NCS/2.png" style={{width:800, height:'auto'}}/></div>
<br/>

:::tip
Please make sure that both the nRF Connect SDK (NCS) version and the Toolchain version are 3.3.0. Mixing different versions may cause build or compatibility issues.
:::

2. Enter commands to check the version information of required tools. You can copy and run the commands one by one for verification.

```bash
# Check west (project manager & build entry) version
west --version
#West version: v1.5.0

# Check CMake (build system generator) version
cmake --version
#cmake version 4.2.1

# Check Ninja (build executor) version
ninja --version
#1.13.2

# Check Python (scripting runtime for west & Zephyr tools) version
python --version
#Python 3.11.7

# Check ARM cross-compiler (Zephyr toolchain for Cortex-M) version
arm-zephyr-eabi-gcc --version
#arm-zephyr-eabi-gcc (Zephyr SDK 0.17.0) 12.2.0
#Copyright (C) 2022 Free Software Foundation, Inc.
#This is free software; see the source for copying conditions.  There is NO
#warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

# Check OpenOCD (on-chip debugger & flasher via CMSIS-DAP) version
openocd --version
#Open On-Chip Debugger 0.12.0+dev-01514-g21fa2de70 (2024-02-07-19:03)
#Licensed under GNU GPL v2
#For bug reports, read
#        http://openocd.org/doc/doxygen/bugs.html
```

- The output is shown below. If any components are missing, reinstall the toolchain and ensure a stable network during installation.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/NCS/3.png" style={{width:800, height:'auto'}}/></div>



### Add Custom Board Path

The board definitions for the XIAO nRF54LM20B have not yet been merged into the official nRF Connect SDK repository, so you need to add the board path manually.

1. Clone the **platform-seeedboards** repository to your preferred directory.

```bash
git clone https://github.com/Seeed-Studio/platform-seeedboards.git
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/ncs/13.png" style={{width:800, height:'auto'}}/></div>
<br/>


2. Open **Settings** at the bottom left corner of VS Code.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_10.png" style={{width:800, height:'auto'}}/></div>
<br/>
3. Search for **nRF Connect**, modify **Board Roots**, and add the path `~\your_path\platform-seeedboards\zephyr\nrf`. The board definitions for the XIAO nRF54LM20B are stored here.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/ncs-fix.jpeg" style={{width:800, height:'auto'}}/></div>

### Create a new application

In this section, we will modify a blank sample project.

1. In the extension, select **Create a blank application** to duplicate the template.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_12.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. Name the project `1_getting_start` and choose a storage path.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/ncs/1.png" style={{width:800, height:'auto'}}/></div>
<br/>
3. Once created, open the copied project.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/ncs/2.png" style={{width:800, height:'auto'}}/></div>
<br/>


### Write the Blinky Program

Since the XIAO nRF54LM20B features customized devicetree and hardware pin mappings, several files need to be modified. The files to be edited are listed below.

- `main.c`: Main program that contains the application logic.
- `app.overlay`: Devicetree overlay file for hardware peripheral configuration.
- `prj.conf`: Project configuration file to enable required Zephyr modules.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/ncs/7.png" style={{width:800, height:'auto'}}/></div>
<br/>

1. Modify the code in main.c

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

2. Add **xiao_nrf54lm20b_nrf54lm20b_cpuapp.overlay**

- Create a **board** folder in the root directory of the `1_getting_start` project, at the same level as folders such as src.

<div style={{display:'flex', gap:'1rem', justifyContent:'center', alignItems:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/ncs/5_wenjianja_2.png" style={{flex:1, minWidth:0, width:'100%', height:'auto'}}/>
  <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/ncs/6_wenjain_2.png" style={{flex:1, minWidth:0, width:'100%', height:'auto'}}/>
</div>

- Create the devicetree file **xiao_nrf54lm20b_nrf54lm20b_cpuapp.overlay** inside the board folder.

<details>

<summary>xiao_nrf54lm20b_nrf54lm20b_cpuapp.overlay</summary>

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

3. Modify the prj.conf file to enable the corresponding configurations.

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

### Add Build Configuration

1. Navigate to the APPLICATIONS section of the extension and select **Add build configuration**. Verify the SDK and toolchain versions. Set the **Board Target** to `xiao_nrf54lm20b/nrf54lm20b/cpuapp` and the base configuration files to `prj.conf`. Scroll down the page, then click **Generate and Build** to generate the corresponding configuration files.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/ncs/8_build.png" style={{width:800, height:'auto'}}/></div>
<br/>

:::tip

If `xiao_nrf54lm20b/nrf54lm20b/cpuapp` cannot be found here, check whether the path was added correctly in the [Add Custom Board Path](#add-custom-board-path) section.

:::



### Program Flashing

The XIAO nRF54LM20B has no on-board debug probe, so it cannot be flashed with `west flash` the way boards with a J-Link or an on-board debugger can. Instead, the board ships with the **MCUboot** bootloader pre-programmed, which supports **serial recovery mode**: over the USB CDC serial port, Nordic's official **nrfutil** tool uploads a signed firmware image to MCUboot. The whole procedure needs nothing more than a USB data cable — no external programmer hardware.

The flashing procedure has four steps: **install the tools → locate the firmware file → trigger MCUboot serial recovery mode → upload the firmware and reset the board**.

#### Step 1. Install the tools

nrfutil is Nordic's official command-line tool. Its `mcu-manager` subcommand talks to MCUboot over the serial port — uploading images, resetting the chip, and querying image state. Note that a freshly installed nrfutil ships with **no command modules** (only the core is installed), so `mcu-manager` must be installed explicitly; the command is safe to re-run if the module is already present. The 1200 bps trigger used in Step 3 also requires Python with the **pyserial** library.

<Tabs groupId="ncs-os">
<TabItem value="macos" label="macOS" default>

```bash
brew install nrfutil
nrfutil install mcu-manager
pip3 install pyserial
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/ncs/10.png" style={{width:800, height:'auto'}}/></div>
<br/>

</TabItem>
<TabItem value="windows" label="Windows">

```powershell
winget install nrfutil
nrfutil install mcu-manager
pip install pyserial
```

:::note
If `nrfutil` is not recognized after the winget installation, open a new terminal window so that the updated `PATH` takes effect. The `pip` command comes from [Python 3](https://www.python.org/downloads/) — during its installation, tick **Add python.exe to PATH**.
:::

</TabItem>
<TabItem value="linux" label="Linux">

```bash
curl -o nrfutil https://files.nordicsemi.com/artifactory/swtools/external/nrfutil/executables/x86_64-unknown-linux-gnu/nrfutil
chmod +x nrfutil
sudo mv nrfutil /usr/local/bin/
nrfutil install mcu-manager
pip3 install pyserial
```

:::note
On Ubuntu 24.04 and newer, `pip3` may refuse with an "externally-managed-environment" error. In that case install pyserial as a system package instead: `sudo apt install python3-serial`.
:::

</TabItem>
</Tabs>

Whichever method was used, verify the installation with:

```bash
nrfutil --version
```

:::note
The version flag is `--version`. A plain `nrfutil version` (without the dashes) is **not** a valid command and will print "Subcommand nrfutil-version not found".
:::

#### Step 2. Locate the firmware file

After a successful build, the flashable firmware is located at `build/<build configuration>/zephyr/zephyr.signed.bin`, where `<build configuration>` is the build configuration created in nRF Connect for VS Code — it defaults to the name of the project directory. For the `1_getting_start` project created above:

```bash
ls -t ~/1_getting_start/build/*/zephyr/zephyr.signed.bin
```


#### Step 3. Trigger MCUboot serial recovery mode

MCUboot enters recovery mode by convention: **the USB serial port is opened at 1200 bps and then closed again**. When the board detects this, it resets itself into serial recovery mode and then keeps waiting until the host uploads new firmware.

1. Find the serial port the board is currently using:

<Tabs groupId="ncs-os">
<TabItem value="macos" label="macOS" default>

```bash
ls /dev/cu.usbmodem*
```

</TabItem>
<TabItem value="windows" label="Windows">

```powershell
python -m serial.tools.list_ports
```

The port is named like `COM5`. It can also be found in **Device Manager → Ports (COM & LPT)** as a *USB Serial Device*.

</TabItem>
<TabItem value="linux" label="Linux">

```bash
ls /dev/ttyACM*
```

</TabItem>
</Tabs>

2. Open that port at 1200 bps and close it again — this triggers the reset into recovery mode. Replace the port name with your own:

<Tabs groupId="ncs-os">
<TabItem value="macos" label="macOS" default>

```bash
python3 -c "import serial; serial.Serial('/dev/cu.usbmodem1201', 1200, timeout=1).close()"
```

</TabItem>
<TabItem value="windows" label="Windows">

```powershell
python -c "import serial; serial.Serial('COM5', 1200, timeout=1).close()"
```

</TabItem>
<TabItem value="linux" label="Linux">

```bash
python3 -c "import serial; serial.Serial('/dev/ttyACM0', 1200, timeout=1).close()"
```

</TabItem>
</Tabs>

3. After the board enters recovery mode, the USB device re-enumerates and **the port name may change**. Run the listing command from step 1 again, note the new port, and use it in all remaining commands.

#### Step 4. Upload the firmware and reset the board

Replace the port after `--serial-port` with the one confirmed in Step 3, and the path after `--firmware` with the file located in Step 2, then upload:

<Tabs groupId="ncs-os">
<TabItem value="macos" label="macOS" default>

```bash
nrfutil mcu-manager serial image-upload --serial-port /dev/cu.usbmodem1201 --timeout 120 --firmware ~/1_getting_start/build/1_getting_start/zephyr/zephyr.signed.bin
```

</TabItem>
<TabItem value="windows" label="Windows">

```powershell
nrfutil mcu-manager serial image-upload --serial-port COM5 --timeout 120 --firmware $HOME\1_getting_start\build\1_getting_start\zephyr\zephyr.signed.bin
```

</TabItem>
<TabItem value="linux" label="Linux">

```bash
nrfutil mcu-manager serial image-upload --serial-port /dev/ttyACM0 --timeout 120 --firmware ~/1_getting_start/build/1_getting_start/zephyr/zephyr.signed.bin
```

</TabItem>
</Tabs>

Progress is displayed in the terminal while the image uploads. When it finishes, run the reset command to make MCUboot switch to the newly flashed image and start running it:

<Tabs groupId="ncs-os">
<TabItem value="macos" label="macOS" default>

```bash
nrfutil mcu-manager serial reset --serial-port /dev/cu.usbmodem1201 --timeout 30
```

</TabItem>
<TabItem value="windows" label="Windows">

```powershell
nrfutil mcu-manager serial reset --serial-port COM5 --timeout 30
```

</TabItem>
<TabItem value="linux" label="Linux">

```bash
nrfutil mcu-manager serial reset --serial-port /dev/ttyACM0 --timeout 30
```

</TabItem>
</Tabs>

:::tip
If the application does not start running after the reset command, simply unplug and replug the USB cable once — it has the same effect.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/ncs/11.png" style={{width:800, height:'auto'}}/></div>
<br/>



### Observe the Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/getting_start/10_gift.gif" style={{width:800, height:'auto'}}/></div>

After flashing, observe the XIAO. If the expected result does not show up, press the **RST** button once to restart the application.

The result on the serial monitor is shown below:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/getting_start/7-result.png" style={{width:800, height:'auto'}}/></div>

## FAQ

 **Q1: Downloading the nRF Connect SDK is very slow or gets stuck**

If the SDK download is very slow or gets stuck, you can use **aria2** to download the required packages with multiple connections, and then install the SDK using **nrfutil**.

**Step 1. Install aria2**

For macOS:

```bash
brew install aria2
```

For Windows:

```bash
winget install aria2.aria2
```

**Step 2. Create the download directory**

```bash
mkdir -p /opt/nordic/ncs/downloads
```

**Step 3. Download the Toolchain Bundle**

```bash
aria2c -c -x 16 -s 16 -k 1M --file-allocation=none \
  -d /opt/nordic/ncs/downloads \
  -o ncs-toolchain-aarch64-macos-0c0f19d91c.tar.gz \
  "https://files.nordicsemi.cn/artifactory/NCS/external/bundles/v3/ncs-toolchain-aarch64-macos-0c0f19d91c.tar.gz"
```

**Step 4. Download the nRF Connect SDK Bundle**

```bash
aria2c -c -x 16 -s 16 -k 1M --file-allocation=none \
  -d /opt/nordic/ncs/downloads \
  -o sdk-nrf-bundle-v3.3.0.tar.gz \
  "https://files.nordicsemi.cn/artifactory/ncs-src-mirror/external/sdk-nrf/v3.3.0/src.tar.gz"
```

**Step 5. Install nRF Connect SDK v3.3.0**

```bash
nrfutil sdk-manager install v3.3.0 \
  --sdk-path /opt/nordic/ncs/v3.3.0 \
  --type nrf
```

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
