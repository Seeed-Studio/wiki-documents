---
title: XIAO nRF54LM20B Pin Multiplexing
sidebar_label: XIAO Pin Multiplexing
description: ''
keywords:
  - xiao
  - nrf54lm20b
  - pin_multiplexing
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/getting_start/Seeed-Studio-XIAO-nRF54LM20B.webp
slug: /xiao_nrf54lm20b_pin_multiplexing
sku:
last_update:
  date: 11/02/2026
  author: Brandy
createdAt: '2026-10-19'
updatedAt: '2026-11-02'
url: https://wiki.seeedstudio.com/xiao_nrf54lm20b_pin_multiplexing/
---

# Seeed Studio XIAO nRF54LM20B Pin Multiplexing

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/XIAO_nRF54LM20B_Wiki_Banners/XIAO_nRF54LM20B_Pin_Multiplexing.png" style={{width:600, height:'auto'}}/></div>

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

The XIAO nRF54LM20B breaks out a generous set of GPIOs and natively supports the standard peripheral interfaces commonly used on embedded boards: digital I/O, PWM, analog (ADC), UART, I2C, and SPI. This article walks through each interface with a runnable example — a button plus buzzer, a sweeping servo, an ADC read, a UART echo, an OLED display, and an RGB LCD — so you can see exactly which pin maps to which peripheral and how the devicetree overlay wires it up.

All six examples build on PlatformIO and Zephyr and share the same project layout, so once you have read the first one the rest will look familiar. The full source for each example lives in the `10_PinMux/` directory of the [XIAO_nRF54LM20B_wiki_examples](https://github.com/Seeed-Projects/XIAO_nRF54LM20B_wiki_examples) repository, and each section below links directly to the files it references.

:::tip

This tutorial is built on PlatformIO and the Zephyr RTOS. If you are not yet familiar with creating a project for the XIAO nRF54LM20B under PlatformIO, start with [Getting Started with Seeed Studio XIAO nRF54LM20B](https://wiki.seeedstudio.com/xiao_nrf54lm20b_getting_started/).

:::

The `platformio.ini` in the repo uses the short platform alias `SeeedStudio`; if you have not globally installed that platform package yet, follow the Getting Started guide, or simply change the `platform` line to the full URL `https://github.com/Seeed-Studio/platform-seeedboards`.

## Digital I/O

A digital pin controls external sensors and actuators by driving its output high or low. This example uses two plain GPIOs to read a Grove button and drive a Grove buzzer — no devicetree remapping is needed, because plain GPIOs on the nRF54L do not go through the pinctrl subsystem.

### Hardware Preparation

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20B</th>
        <th>Seeed Studio Grove Base for XIAO</th>
        <th>Grove - Piezo Buzzer</th>
        <th>Grove - Button</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/getting_start/Seeed-Studio-XIAO-nRF54LM20B.webp" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-08bazaar897330_2.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/p/e/perspectiive.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Buzzer.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
          <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Button.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Software Preparation

Per the XIAO nRF54LM20B pin assignment, **P1.0 / D0** is the input pin for the Grove button and **P1.31 / D1** is the output pin for the Grove buzzer. The full project is at [10_PinMux/1_digital_gpio](https://github.com/Seeed-Projects/XIAO_nRF54LM20B_wiki_examples/tree/main/10_PinMux/1_digital_gpio).

:::tip

See the XIAO nRF54LM20B pin assignment at [Getting Started · Pinout](https://wiki.seeedstudio.com/xiao_nrf54lm20b_getting_started/).

:::

**`app.overlay`** — This example uses plain GPIOs, which on the nRF54L do not go through pinctrl, so the overlay is intentionally empty (`/ {};`). Both P1.0 and P1.31 are broken out on the 20B connector as D0/D1 and need no remapping.

```dts
/*
 * XIAO nRF54LM20B -- Pin Multiplexing demo 1: Digital GPIO
 * ----------------------------------------------------------------------------
 * No hardware re-mapping is needed for this demo. gpio1 is a SoC-level
 * node, and the two pins used (P1.0 / D0 for the button, P1.31 / D1 for
 * the buzzer) are plain GPIO -- they do not go through the pinctrl
 * subsystem on nRF54L, so there is nothing to override here.
 *
 * The overlay file still exists (PlatformIO expects one); it is empty on
 * purpose.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

/ {};
```

**`prj.conf`** — Enables the GPIO driver plus the mcuboot image-manager options that every example in this repo uses.

```conf
# =============================================================================
# XIAO nRF54LM20B PinMux demo 1: Digital GPIO (Button + Buzzer)
#
# Console = board default USB CDC-ACM (cu.usbmodem*), auto-ready at boot.
# No SERIAL/CONSOLE options here: the board defconfig enables them; setting
# them would fight the mcuboot child image's need to turn the console off.
# =============================================================================

# ---- GPIO driver ----
CONFIG_GPIO=y

# ---- mcuboot self-confirmation (image becomes permanent at startup) ----
CONFIG_BOOTLOADER_MCUBOOT=y
CONFIG_IMG_MANAGER=y
CONFIG_MCUBOOT_IMG_MANAGER=y
CONFIG_FLASH=y
CONFIG_FLASH_MAP=y
CONFIG_STREAM_FLASH=y
```

**`src/main.c`** — Configures P1.0 as input and P1.31 as output, then in a loop copies the button level to the buzzer and prints state changes to the console. The full source is fairly long — click to expand.

<details>

<summary>src/main.c</summary>

```c
/*
 * XIAO nRF54LM20B -- Pin Multiplexing demo 1: Digital GPIO
 * ----------------------------------------------------------------------------
 * Port of the official XIAO nRF54LM20A wiki "数字引脚" demo to the 20B:
 *   Grove Button (P1.0 / D0)  -> input,  active-high (onboard pull-down)
 *   Grove Buzzer (P1.31 / D1) -> output, HIGH = on
 *   Button pressed  => Buzzer ON
 *   Button released => Buzzer OFF
 *
 * NOTE: requires an ACTIVE buzzer (built-in oscillator). A passive piezo
 *       buzzer must be driven with PWM -- use demo 2 (pwm_servo) instead.
 *
 * 20B adaptations vs the 20A original:
 *   - main() self-confirms the mcuboot image at startup (repo convention);
 *   - \r\n line endings (printk over the board's default USB CDC console);
 *   - no overlay needed: gpio1 is a SoC-level node and P1.0/P1.31 are both
 *     broken out on the 20B connector (D0/D1), so no pinctrl is required
 *     for plain GPIO (GPIO does not use the pinctrl subsystem on nRF54L).
 *
 * The wiki original pointed the console at &uart20 (physical pins
 * P1.11/P1.10); that is dropped here so output stays on USB CDC, matching
 * every other project in this repo (cu.usbmodem*).
 *
 * Source: https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_pin_multiplexing/#digital
 * SPDX-License-Identifier: Apache-2.0
 */

#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/sys/printk.h>
#include <zephyr/dfu/mcuboot.h>

#define BUTTON_PIN 0   /* P1.0  - Grove Button  - D0 */
#define BUZZER_PIN 31  /* P1.31 - Grove Buzzer - D1 */

int main(void)
{
	(void)boot_write_img_confirmed();

	const struct device *gpio1_dev = DEVICE_DT_GET(DT_NODELABEL(gpio1));

	printk("\r\n=== Grove Button + Buzzer (Digital Mode) ===\r\n");

	if (!device_is_ready(gpio1_dev)) {
		printk("ERROR: gpio1 device is not ready!\r\n");
		return -1;
	}
	printk("gpio1 device ready: %s\r\n", gpio1_dev->name);

	/* Grove Button has an onboard pull-down; HIGH = pressed */
	gpio_pin_configure(gpio1_dev, BUTTON_PIN, GPIO_INPUT);
	/* Buzzer: HIGH = on (start off) */
	gpio_pin_configure(gpio1_dev, BUZZER_PIN, GPIO_OUTPUT_INACTIVE);

	printk("Button:  P1.%d (input)\r\n", BUTTON_PIN);
	printk("Buzzer:  P1.%d (output)\r\n", BUZZER_PIN);
	printk("Press the button to turn on the buzzer...\r\n");

	int last_val = 0;

	while (1) {
		int val = gpio_pin_get(gpio1_dev, BUTTON_PIN);

		if (val >= 0) {
			gpio_pin_set(gpio1_dev, BUZZER_PIN, val);

			/* Only print on state change to avoid log spam */
			if (val != last_val) {
				printk("Button %s -> Buzzer %s\r\n",
				       val ? "PRESSED " : "released",
				       val ? "ON" : "OFF");
				last_val = val;
			}
		}

		k_msleep(10);
	}

	return 0;
}
```

</details>

:::caution

The buzzer must be an **active** buzzer (built-in oscillator). A passive piezo element needs a PWM drive signal — use the PWM example below instead.

:::

### Result

After flashing, press RST once and hold the Grove button: the buzzer sounds and the serial console prints `Button PRESSED -> Buzzer ON`; release it and the print becomes `Button released -> Buzzer OFF`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/pinmax/1.png" style={{width:600, height:'auto'}}/></div>
<br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/pinmax/1.gif" style={{width:600, height:'auto'}}/></div>
<br/>

## PWM

PWM is a timed waveform built on top of a digital output GPIO: it toggles the pin level at a fixed frequency and adjusts the duty cycle of the high portion within each period, delivering an equivalent analog signal to the load. This is the standard way to drive RC servos or dim an LED. This example sweeps a standard servo back and forth between 0° and 180° on P1.0 / D0.

### Hardware Preparation

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20B</th>
        <th>Seeed Studio Grove Base for XIAO</th>
        <th>Grove - Servo</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/getting_start/Seeed-Studio-XIAO-nRF54LM20B.webp" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedimg2016-06rjmxymiq9lqxkkxxwg6udxfm.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Servo.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Software Preparation

Per the XIAO nRF54LM20B pin assignment, **P1.0 / D0** is the PWM output pin for the servo. The full project is at [10_PinMux/2_pwm_servo](https://github.com/Seeed-Projects/XIAO_nRF54LM20B_wiki_examples/tree/main/10_PinMux/2_pwm_servo).

:::tip

See the XIAO nRF54LM20B pin assignment at [Getting Started · Pinout](https://wiki.seeedstudio.com/xiao_nrf54lm20b_getting_started/).

:::

**`app.overlay`** 

```dts
/*
 * XIAO nRF54LM20B -- Pin Multiplexing demo 2: PWM (servo on P1.0)
 * ----------------------------------------------------------------------------
 * Remaps PWM20 channel 0 from its board default (P1.22, the red channel of
 * the RGB LED) to P1.0 / D0 so a hobby servo can be driven there.
 *
 * Nothing else is touched: the console stays on the board-default USB CDC
 * (the wiki overlay moved it to &uart20 -- dropped here), and no uart20 /
 * spi23 redefinition is needed (the wiki warned spi23 and uart20 share an
 * instance; since we use neither, that conflict does not apply).
 *
 * SPDX-License-Identifier: Apache-2.0
 */

&pinctrl {
	servo_pwm20_default: servo_pwm20_default {
		group1 {
			psels = <NRF_PSEL(PWM_OUT0, 1, 0)>; /* P1.0 / D0 */
		};
	};

	servo_pwm20_sleep: servo_pwm20_sleep {
		group1 {
			psels = <NRF_PSEL(PWM_OUT0, 1, 0)>;
			low-power-enable;
		};
	};
};

&pwm20 {
	status = "okay";
	pinctrl-0 = <&servo_pwm20_default>;
	pinctrl-1 = <&servo_pwm20_sleep>;
	/* pinctrl-names = "default", "sleep" is already set by the board */
};
```

**`prj.conf`** — Enables the PWM driver and the mcuboot options.

```conf
# =============================================================================
# XIAO nRF54LM20B PinMux demo 2: PWM (servo on P1.0 / D0)
# Console = board default USB CDC-ACM. No SERIAL/CONSOLE options set here.
# =============================================================================

# ---- PWM driver ----
CONFIG_PWM=y

# ---- mcuboot self-confirmation ----
CONFIG_BOOTLOADER_MCUBOOT=y
CONFIG_IMG_MANAGER=y
CONFIG_MCUBOOT_IMG_MANAGER=y
CONFIG_FLASH=y
CONFIG_FLASH_MAP=y
CONFIG_STREAM_FLASH=y
```

**`src/main.c`** — Drives the servo at 50 Hz (20 ms period, 0.5–2.5 ms pulse maps to 0–180°), sweeping between 0°→180°→0° and printing the current angle. The pulse uses normal polarity, so the board-level RGB common-anode inversion does not affect the servo. The full source is fairly long — click to expand.

<details>

<summary>src/main.c</summary>

```c
/*
 * XIAO nRF54LM20B -- Pin Multiplexing demo 2: PWM (servo on P1.0)
 * ----------------------------------------------------------------------------
 * Port of the wiki "PWM" demo. A standard hobby servo is driven from PWM20
 * channel 0 on P1.0 / D0 at 50 Hz (20 ms period, 0.5-2.5 ms pulse -> 0-180 deg).
 * The angle sweeps 0->180 deg then back 180->0 deg, printed to the console.
 *
 * 20B adaptations vs the 20A original:
 *   - self-confirm the mcuboot image at startup;
 *   - \r\n line endings over the default USB CDC console;
 *   - console NOT moved to &uart20 -- output stays on USB CDC (cu.usbmodem*),
 *     so the wiki "chosen { zephyr,console = &uart20 }" and the whole uart20
 *     pinctrl block are dropped (this demo does not use uart20 at all);
 *   - the overlay only re-maps PWM20 channel 0 from its board default
 *     (P1.22, the red RGB LED) to P1.0 / D0 for the servo.
 *
 * Source: https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_pin_multiplexing/#pwm
 * SPDX-License-Identifier: Apache-2.0
 */

#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/pwm.h>
#include <zephyr/sys/printk.h>
#include <zephyr/dfu/mcuboot.h>

/* Standard servo: 50 Hz period, 0.5-2.5 ms pulse for 0-180 deg */
#define SERVO_PERIOD_NS  PWM_MSEC(20)
#define SERVO_MIN_NS      PWM_USEC(500)
#define SERVO_MAX_NS      PWM_USEC(2500)
#define SERVO_CHANNEL     0

/* 30 ms/step -> ~6 deg/step; full sweep takes ~5.4 s each way */
#define STEP_FWD_MS 30
#define STEP_RET_MS 30

static const struct device *pwm_dev = DEVICE_DT_GET(DT_NODELABEL(pwm20));

static int set_angle(int degrees)
{
	uint32_t pulse = SERVO_MIN_NS +
		(uint32_t)((uint64_t)degrees *
			   (SERVO_MAX_NS - SERVO_MIN_NS) / 180U);

	return pwm_set(pwm_dev, SERVO_CHANNEL, SERVO_PERIOD_NS, pulse,
		       PWM_POLARITY_NORMAL);
}

int main(void)
{
	(void)boot_write_img_confirmed();

	printk("\r\n=== boot ===\r\n");

	if (!device_is_ready(pwm_dev)) {
		printk("Error: PWM device not ready\r\n");
		return -1;
	}
	printk("Servo control started on P1.0\r\n");

	while (1) {
		/* 0 deg -> 180 deg */
		for (int a = 0; a <= 180; a++) {
			if (set_angle(a) != 0) {
				printk("PWM error at %d deg\r\n", a);
			} else {
				printk("Angle: %d deg\r\n", a);
			}
			k_msleep(STEP_FWD_MS);
		}

		/* 180 deg -> 0 deg */
		for (int a = 180; a >= 0; a--) {
			if (set_angle(a) != 0) {
				printk("PWM error at %d deg\r\n", a);
			} else {
				printk("Angle: %d deg\r\n", a);
			}
			k_msleep(STEP_RET_MS);
		}
	}

	return 0;
}
```

</details>

:::note

Power the servo from a separate 5 V supply and tie its ground to the XIAO ground. Do not draw servo current from the on-board 3.3 V rail.

:::

### Result

After flashing, press RST once; the servo sweeps back and forth between 0° and 180° and the console keeps printing `Angle: N deg`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/pinmax/2.png" style={{width:600, height:'auto'}}/></div>
<br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/pinmax/2.gif" style={{width:600, height:'auto'}}/></div>
<br/>

## Analog

Analog I/O centers on the analog-to-digital converter (ADC), which samples continuous voltages from external sensors. The raw 16-bit sample is then mapped to an engineering value through a linear or non-linear conversion. This example reads SAADC channel 0 on P1.0 / D0 (AIN0) every 500 ms and prints the raw value.

### Hardware Preparation

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20B</th>
        <th>Seeed Studio Grove Base for XIAO</th>
        <th>Grove - Moisture Sensor</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/getting_start/Seeed-Studio-XIAO-nRF54LM20B.webp" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/Moisture_sensor_.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Software Preparation

Per the XIAO nRF54LM20B pin assignment, **P1.0 / D0** (AIN0, SAADC channel 0) is the analog input. The full project is at [10_PinMux/3_adc](https://github.com/Seeed-Projects/XIAO_nRF54LM20B_wiki_examples/tree/main/10_PinMux/3_adc).

:::tip

See the XIAO nRF54LM20B pin assignment at [Getting Started · Pinout](https://wiki.seeedstudio.com/xiao_nrf54lm20b_getting_started/).

:::

**`app.overlay`** 

```dts
/*
 * XIAO nRF54LM20B -- Pin Multiplexing demo 3: Analog (ADC on P1.0 / AIN0)
 * ----------------------------------------------------------------------------
 * Declares the ADC channel used by the app under /zephyr,user (the standard
 * Zephyr pattern that ADC_DT_SPEC_GET(DT_PATH(zephyr_user)) consumes):
 *   io-channels = <&adc 0>   ->  SAADC channel 0 = AIN0 = P1.0 / D0
 *
 * The &adc node is disabled in the SoC dtsi by default, so it is enabled
 * here. The console is NOT touched (the wiki moved it to &uart20 -- dropped,
 * output stays on USB CDC), and no uart20 block is needed.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

/ {
	zephyr,user {
		io-channels = <&adc 0>;
	};
};

&adc {
	status = "okay";
};
```

**`prj.conf`** — Enables the ADC driver and the nRF SAADC backend, plus the mcuboot options.

```conf
# =============================================================================
# XIAO nRF54LM20B PinMux demo 3: Analog (ADC on P1.0 / AIN0)
# Console = board default USB CDC-ACM.
# =============================================================================

# ---- ADC (nRF SAADC) ----
CONFIG_ADC=y
CONFIG_ADC_NRFX_SAADC=y

# ---- mcuboot self-confirmation ----
CONFIG_BOOTLOADER_MCUBOOT=y
CONFIG_IMG_MANAGER=y
CONFIG_MCUBOOT_IMG_MANAGER=y
CONFIG_FLASH=y
CONFIG_FLASH_MAP=y
CONFIG_STREAM_FLASH=y
```

**`src/main.c`** — Configures the ADC channel from the devicetree spec, reads one 16-bit sample every 500 ms, and prints `ADC raw: N`. The full source is fairly long — click to expand.

<details>

<summary>src/main.c</summary>

```c
/*
 * XIAO nRF54LM20B -- Pin Multiplexing demo 3: Analog (ADC on P1.0 / AIN0)
 * ----------------------------------------------------------------------------
 * Port of the wiki "Analog" demo. Reads SAADC channel 0 (P1.0 / D0 = AIN0)
 * and prints the raw 16-bit sample every 500 ms.
 *
 * 20B adaptations vs the 20A original:
 *   - self-confirm the mcuboot image at startup;
 *   - \r\n line endings over the default USB CDC console;
 *   - console NOT moved to &uart20 (wiki "chosen { console=&uart20 }" and
 *     the uart20 pinctrl block are dropped -- this demo does not use uart20);
 *   - the ADC spec is still declared under /zephyr,user via io-channels
 *     = <&adc 0>, exactly as the wiki original. Channel 0 maps to AIN0,
 *     which on nRF54LM20 is P1.0 / D0 (same SoC dtsi on 20A and 20B).
 *
 * Source: https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_pin_multiplexing/#analog
 * SPDX-License-Identifier: Apache-2.0
 */

#include <zephyr/kernel.h>
#include <zephyr/drivers/adc.h>
#include <zephyr/sys/printk.h>
#include <zephyr/dfu/mcuboot.h>

static const struct adc_dt_spec adc_ch =
	ADC_DT_SPEC_GET(DT_PATH(zephyr_user));

int main(void)
{
	(void)boot_write_img_confirmed();

	int ret;

	if (!adc_is_ready_dt(&adc_ch)) {
		printk("ADC not ready\r\n");
		return -1;
	}

	ret = adc_channel_setup_dt(&adc_ch);
	if (ret < 0) {
		printk("ADC channel setup failed: %d\r\n", ret);
		return ret;
	}

	int16_t buf;
	struct adc_sequence seq = {
		.buffer = &buf,
		.buffer_size = sizeof(buf),
	};

	adc_sequence_init_dt(&adc_ch, &seq);

	printk("ADC reading on P1.0 / AIN0 every 500 ms...\r\n");

	while (1) {
		ret = adc_read_dt(&adc_ch, &seq);
		if (ret < 0) {
			printk("ADC read error: %d\r\n", ret);
		} else {
			printk("ADC raw: %d\r\n", buf);
		}

		k_msleep(500);
	}

	return 0;
}
```

</details>

### Result

After flashing, press RST once, insert the Grove soil-moisture sensor into the medium under test, and the console prints `ADC raw: N` about twice a second.

:::tip

Approximate raw values for the Grove soil-moisture sensor (12-bit SAADC, 3.0 V reference):

| Condition | Sensor output voltage | Expected ADC raw |
| -------------- | -------------- | ---------------- |
| In air (dry) | ~0.1–0.4 V | ~135–545 |
| In moist soil | ~1.0–1.8 V | ~1365–2450 |
| Fully immersed in water | ~2.4–3.0 V | ~3270–4095 |

:::

:::caution

Due to component variation, different modules measured under the same conditions may give different values.

:::

<div style={{display:'flex', justifyContent:'center', gap:'20px'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/pinmax/3.png" style={{width:300, height:'auto'}}/>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/pinmax/4.jpg" style={{width:300, height:'auto'}}/>
</div>
<br/>

## UART

UART is a standard asynchronous serial protocol. It needs no clock line — both ends agree on a baud rate, TX and RX cross over, and a shared ground is all that is required. Full-duplex and low-cost, it is commonly used for console output, peripheral debugging, and low-bandwidth point-to-point links. This example runs UART21 in polling mode: echoing every received line and sending a heartbeat every 5 s.

### Hardware Preparation

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20B</th>
        <th>USB to TTL Converter</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/getting_start/Seeed-Studio-XIAO-nRF54LM20B.webp" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-317990026-ch340g-usb-to-serial-_ttl_-module_adapter.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Software Preparation

Per the XIAO nRF54LM20B pin assignment, **P1.8 / D6** is UART21 TX and **P1.9 / D7** is UART21 RX. The full project is at [10_PinMux/4_uart](https://github.com/Seeed-Projects/XIAO_nRF54LM20B_wiki_examples/tree/main/10_PinMux/4_uart).

:::tip

See the XIAO nRF54LM20B pin assignment at [Getting Started · Pinout](https://wiki.seeedstudio.com/xiao_nrf54lm20b_getting_started/).

:::

**`app.overlay`** — UART21's pinctrl (P1.8 TX / P1.9 RX, both default and sleep states) is already defined in the board DTS, so the overlay only enables the node and sets the baud rate to 115200.

```dts
/*
 * XIAO nRF54LM20B -- Pin Multiplexing demo 4: UART (uart21 polling echo)
 * ----------------------------------------------------------------------------
 * UART21 is already configured in the board DTS (pinctrl P1.8 TX / P1.9 RX,
 * both default and sleep states). This overlay only enables it.
 *
 * The console is NOT touched: the wiki moved it to &uart20 and enabled
 * uart20 -- both dropped here, LOG output stays on the default USB CDC
 * console so you can watch it on cu.usbmodem*.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

&uart21 {
	current-speed = <115200>;
	status = "okay";
};
```

**`prj.conf`** 

```conf
# =============================================================================
# XIAO nRF54LM20B PinMux demo 4: UART (uart21 polling echo)
# LOG output goes to the board-default USB CDC-ACM console (cu.usbmodem*).
# =============================================================================

# ---- Serial / UART driver ----
CONFIG_SERIAL=y

# This demo uses uart_poll_in()/uart_poll_out(). On nrfx UARTE, enabling
# async mode for the instance makes uart_poll_in() return -ENOTSUP, which
# breaks RX on uart21 -- so do NOT enable UART async mode.

# ---- Console (USB CDC, board default) + logging ----
CONFIG_CONSOLE=y
CONFIG_UART_CONSOLE=y
CONFIG_LOG=y
CONFIG_LOG_BACKEND_UART=y
CONFIG_LOG_DEFAULT_LEVEL=3

# ---- mcuboot self-confirmation ----
CONFIG_BOOTLOADER_MCUBOOT=y
CONFIG_IMG_MANAGER=y
CONFIG_MCUBOOT_IMG_MANAGER=y
CONFIG_FLASH=y
CONFIG_FLASH_MAP=y
CONFIG_STREAM_FLASH=y
```

**`src/main.c`** — Reads and writes UART21 in polling mode, echoing received characters line by line and sending a heartbeat message every 5 s. LOG_INF output goes to the separate USB CDC console, so log traffic and echo traffic travel on two different ports and do not interfere. The full source is fairly long — click to expand.

<details>

<summary>src/main.c</summary>

```c
/*
 * XIAO nRF54LM20B -- Pin Multiplexing demo 4: UART (uart21 polling echo)
 * ----------------------------------------------------------------------------
 * Port of the wiki "UART" demo. Uses UART21 (TX=P1.8/D6, RX=P1.9/D7) in
 * polling mode: echoes received lines back over the same UART, and sends a
 * heartbeat every 5 s. LOG_INF output goes to the USB CDC console so you can
 * watch it on cu.usbmodem* while the echo traffic lives on uart21.
 *
 * 20B adaptations vs the 20A original:
 *   - self-confirm the mcuboot image at startup;
 *   - \r\n line endings;
 *   - console NOT moved to &uart20 (the wiki overlay enabled uart20 as the
 *     console -- dropped here, output stays on USB CDC). Only &uart21 is
 *     enabled; its pinctrl (P1.8/P1.9) is already defined in the board DTS.
 *
 * Source: https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_pin_multiplexing/#uart
 * SPDX-License-Identifier: Apache-2.0
 */

#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/uart.h>
#include <zephyr/logging/log.h>
#include <zephyr/dfu/mcuboot.h>
#include <stdio.h>
#include <string.h>

LOG_MODULE_REGISTER(uart21_demo, LOG_LEVEL_INF);

/* UART21 device */
static const struct device *uart21_dev = DEVICE_DT_GET(DT_NODELABEL(uart21));

#define RX_BUF_SIZE 128
#define TX_BUF_SIZE 256
#define HEARTBEAT_INTERVAL_MS 5000

static uint8_t rx_buf[RX_BUF_SIZE];
static size_t rx_buf_pos = 0;
static char tx_buf[TX_BUF_SIZE];

/* Send a string over UART21 using polling */
static void uart21_send_string(const char *str)
{
	while (*str)
	{
		uart_poll_out(uart21_dev, *str++);
	}
}

/* Receive a character from UART21 (non-blocking) */
static int uart21_recv_char(uint8_t *c)
{
	return uart_poll_in(uart21_dev, c);
}

static void handle_complete_line(void)
{
	rx_buf[rx_buf_pos] = '\0';
	if (rx_buf_pos > 0)
	{
		LOG_INF("Received: %s", rx_buf);
		uart21_send_string("\r\nYou sent: ");
		uart21_send_string((const char *)rx_buf);
	}
	uart21_send_string("\r\n");
	rx_buf_pos = 0;
	memset(rx_buf, 0, sizeof(rx_buf));
}

/* Process a received byte and maintain a simple line buffer */
static void process_rx_byte(uint8_t c)
{
	static bool last_was_cr;

	if (c == '\r' || c == '\n')
	{
		if (c == '\n' && last_was_cr)
		{
			last_was_cr = false;
			return;
		}
		uart21_send_string("\r\n");
		handle_complete_line();
		last_was_cr = (c == '\r');
		return;
	}
	last_was_cr = false;
	uart_poll_out(uart21_dev, c);
	if (rx_buf_pos < RX_BUF_SIZE - 1)
	{
		rx_buf[rx_buf_pos++] = c;
		return;
	}
	uart21_send_string("\r\n[Warning] Input too long, buffer cleared.\r\n");
	rx_buf_pos = 0;
	memset(rx_buf, 0, sizeof(rx_buf));
}

int main(void)
{
	(void)boot_write_img_confirmed();

	uint8_t c;
	uint32_t heartbeat_count = 0;
	int64_t last_heartbeat = 0;

	LOG_INF("========================================");
	LOG_INF("  UART21 Demo for XIAO nRF54LM20B");
	LOG_INF("========================================");
	LOG_INF("");

	/* Check if UART21 device is ready */
	if (!device_is_ready(uart21_dev))
	{
		LOG_ERR("UART21 device not ready!");
		return -1;
	}
	LOG_INF("UART21 device ready: %s", uart21_dev->name);

	/* Send welcome message */
	uart21_send_string("\r\n");
	uart21_send_string("========================================\r\n");
	uart21_send_string("  UART21 Demo for XIAO nRF54LM20B\r\n");
	uart21_send_string("========================================\r\n");
	uart21_send_string("\r\n");
	uart21_send_string("Pin Configuration:\r\n");
	uart21_send_string("  TX: P1.08\r\n");
	uart21_send_string("  RX: P1.09\r\n");
	uart21_send_string("  Baud Rate: 115200\r\n");
	uart21_send_string("\r\n");
	uart21_send_string("Type something and press Enter to see it echoed.\r\n");
	uart21_send_string("\r\n");

	LOG_INF("UART21 demo started. Waiting for data...");
	LOG_INF("Connect UART terminal to P1.8(TX) and P1.9(RX)");

	last_heartbeat = k_uptime_get();

	/* Main loop */
	while (1)
	{
		/* Check for received data */
		if (uart21_recv_char(&c) == 0)
		{
			process_rx_byte(c);
		}

		/* Check for heartbeat */
		int64_t now = k_uptime_get();
		if (now - last_heartbeat >= HEARTBEAT_INTERVAL_MS)
		{
			last_heartbeat = now;
			heartbeat_count++;
			snprintf(tx_buf, sizeof(tx_buf),
					 "\r\n[Heartbeat #%u] UART21 running...\r\n",
					 heartbeat_count);
			uart21_send_string(tx_buf);
			LOG_INF("Heartbeat #%u sent", heartbeat_count);
		}

		/* Small delay to prevent busy loop */
		k_msleep(10);
	}

	return 0;
}
```

</details>

### Result

1. Connect the USB-TTL converter to the board:

| XIAO nRF54LM20B | CH340 / USB-TTL |
| --------------- | ----- |
| GND | GND |
| P1.8 / D6 — TX | RX |
| P1.9 / D7 — RX | TX |

The USB-TTL side uses 3.3 V logic levels. The board's own USB CDC stays connected to the computer for `LOG_INF` output.

2. After flashing, press RST once and open two ports at 115200 baud:
   - On the **USB-TTL terminal** (UART21): type a line and press Enter — you get back `\r\nYou sent: <your input>\r\n`, plus a `[Heartbeat #N]` message every 5 s.
   - On **`cu.usbmodem*`** (the USB CDC console): you can see `UART21 device ready` and `Heartbeat #N sent` log lines.



<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/pinmax/5.png" style={{width:800, height:'auto'}}/></div>
<br/>

## I2C

I2C is a synchronous, half-duplex bus: a controller addresses one or more targets over a shared SCL clock line and SDA data line. Sensors and small OLED displays that need a higher transfer rate typically choose it. This example drives a 128×64 SSD1306 OLED on i2c22 and prints two lines of text centered using the character framebuffer.

### Hardware Preparation

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20B</th>
        <th>Seeed Studio Expansion Board Base for XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/getting_start/Seeed-Studio-XIAO-nRF54LM20B.webp" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/z/h/zheng2.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Software Preparation

Per the XIAO nRF54LM20B pin assignment, **P1.3 / D4** is i2c22 SDA and **P1.7 / D5** is i2c22 SCL. The full project is at [10_PinMux/5_i2c_oled](https://github.com/Seeed-Projects/XIAO_nRF54LM20B_wiki_examples/tree/main/10_PinMux/5_i2c_oled).

:::tip

See the XIAO nRF54LM20B pin assignment at [Getting Started · Pinout](https://wiki.seeedstudio.com/xiao_nrf54lm20b_getting_started/).

:::

**`app.overlay`**

```dts
/*
 * XIAO nRF54LM20B -- Pin Multiplexing demo 5: I2C (SSD1306 OLED)
 * ----------------------------------------------------------------------------
 * i2c22 (SDA=P1.3/D4, SCL=P1.7/D5) is already pinned out in the board DTS
 * (default + sleep states), so this overlay only enables it and adds the
 * SSD1306 framebuffer node as the chosen display. The console is NOT
 * touched (output stays on USB CDC).
 *
 * SPDX-License-Identifier: Apache-2.0
 */

/ {
	chosen {
		zephyr,display = &ssd1306_128x64;
	};
};

&i2c22 {
	status = "okay";
	zephyr,concat-buf-size = <2048>;
	ssd1306_128x64: ssd1306@3c {
		/* Zephyr 4.4 binding is "solomon,ssd1306" (NOT ssd1306fb) */
		compatible = "solomon,ssd1306";
		reg = <0x3c>;
		width = <128>;
		height = <64>;
		segment-offset = <0>;
		page-offset = <0>;
		display-offset = <0>;
		multiplex-ratio = <63>;
		segment-remap;
		com-invdir;
		prechargep = <0x22>;
	};
};
```

**`prj.conf`** — Enables I2C, the display driver, the SSD1306 panel, and the character framebuffer, plus the mcuboot options.

```conf
# =============================================================================
# XIAO nRF54LM20B PinMux demo 5: I2C (SSD1306 128x64 OLED on i2c22)
# Console = board default USB CDC-ACM.
# =============================================================================

CONFIG_STDOUT_CONSOLE=y
CONFIG_HEAP_MEM_POOL_SIZE=16384
CONFIG_I2C=y
CONFIG_DISPLAY=y
CONFIG_SSD1306=y
CONFIG_LOG=y
CONFIG_LOG_DEFAULT_LEVEL=4
CONFIG_CHARACTER_FRAMEBUFFER=y

# ---- mcuboot self-confirmation ----
CONFIG_BOOTLOADER_MCUBOOT=y
CONFIG_IMG_MANAGER=y
CONFIG_MCUBOOT_IMG_MANAGER=y
CONFIG_FLASH=y
CONFIG_FLASH_MAP=y
CONFIG_STREAM_FLASH=y
```

**`src/main.c`** — Initializes the framebuffer, selects the 8×8 font, and prints Hello XIAO and nRF54LM20B centered on the OLED, refreshing once a second. The full source is fairly long — click to expand.

<details>

<summary>src/main.c</summary>

```c
/*
 * XIAO nRF54LM20B -- Pin Multiplexing demo 5: I2C (SSD1306 OLED)
 * ----------------------------------------------------------------------------
 * Port of the wiki "I²C" demo. Drives a 128x64 SSD1306 OLED on i2c22
 * (SDA=P1.3/D4, SCL=P1.7/D5) via the character framebuffer, printing
 * "Hello XIAO" / "nRF54LM20B" centered.
 *
 * 20B adaptations vs the 20A original:
 *   - self-confirm the mcuboot image at startup;
 *   - \r\n line endings on LOG output (USB CDC console, untouched);
 *   - i2c22 pinctrl (P1.3/P1.7) is already in the board DTS, so the overlay
 *     only enables i2c22 and adds the ssd1306 node (no pinctrl redefinition);
 *   - line-2 text updated to "nRF54LM20B".
 *
 * Source: https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_pin_multiplexing/#i2c
 * SPDX-License-Identifier: Apache-2.0
 */

#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/display/cfb.h>
#include <zephyr/dfu/mcuboot.h>
#include <stdio.h>
#include <string.h>

#define LOG_LEVEL CONFIG_LOG_DEFAULT_LEVEL
#include <zephyr/logging/log.h>
LOG_MODULE_REGISTER(main_app, LOG_LEVEL);

#define CFB_MAX_FONT_INDEX  42

/* Display content */
#define LINE1_TEXT  "Hello XIAO"
#define LINE2_TEXT  "nRF54LM20B"
#define TOTAL_LINES 2

static int display_init(const struct device **dev)
{
	*dev = DEVICE_DT_GET(DT_CHOSEN(zephyr_display));
	if (!device_is_ready(*dev))
	{
		LOG_ERR("Device not ready");
		return -1;
	}
	if (display_set_pixel_format(*dev, PIXEL_FORMAT_MONO10) != 0)
	{
		if (display_set_pixel_format(*dev, PIXEL_FORMAT_MONO01) != 0)
		{
			LOG_ERR("Failed to set required pixel format");
			return -1;
		}
	}
	LOG_INF("Initialized display");
	return 0;
}

static int framebuffer_setup(const struct device *dev)
{
	if (cfb_framebuffer_init(dev))
	{
		LOG_ERR("Framebuffer initialization failed!");
		return -1;
	}
	cfb_framebuffer_clear(dev, false);
	display_blanking_off(dev);
	return 0;
}

static int select_font(const struct device *dev, uint8_t *font_width, uint8_t *font_height)
{
	int chosen_font_idx = -1;
	uint8_t current_font_width, current_font_height;

	for (int idx = 0; idx < CFB_MAX_FONT_INDEX; idx++)
	{
		if (cfb_get_font_size(dev, idx, &current_font_width, &current_font_height) != 0)
		{
			continue;
		}
		if (current_font_width == 0 || current_font_height == 0)
		{
			continue;
		}
		if (current_font_width == 8 && current_font_height == 8)
		{
			chosen_font_idx = idx;
			*font_width  = current_font_width;
			*font_height = current_font_height;
			cfb_framebuffer_set_font(dev, chosen_font_idx);
			LOG_INF("Selected 8x8 font idx: %d", chosen_font_idx);
			break;
		}
		if (chosen_font_idx == -1)
		{
			chosen_font_idx = idx;
			*font_width  = current_font_width;
			*font_height = current_font_height;
			cfb_framebuffer_set_font(dev, chosen_font_idx);
			LOG_INF("Fallback font idx: %d, size: %dx%d",
				chosen_font_idx, *font_width, *font_height);
		}
	}

	if (chosen_font_idx == -1)
	{
		LOG_ERR("No suitable font found!");
		return -1;
	}
	return 0;
}

static void print_text_centered(const struct device *dev,
				const char *text, int line_index, int total_lines,
				uint8_t font_width, uint8_t font_height,
				uint16_t x_res, uint16_t y_res)
{
	int text_len = (int)strlen(text);
	int pixel_x = (x_res - text_len * font_width) / 2;
	int block_height = total_lines * font_height;
	int pixel_y = (y_res - block_height) / 2 + line_index * font_height;

	if (pixel_x < 0) pixel_x = 0;
	if (pixel_y < 0) pixel_y = 0;

	if (cfb_print(dev, text, pixel_x, pixel_y))
	{
		LOG_ERR("Failed to print \"%s\" at (%d, %d)", text, pixel_x, pixel_y);
	}
}

int main(void)
{
	(void)boot_write_img_confirmed();

	const struct device *dev;
	uint8_t font_width  = 0;
	uint8_t font_height = 0;

	if (display_init(&dev)                          != 0) return 0;
	if (framebuffer_setup(dev)                      != 0) return 0;
	if (select_font(dev, &font_width, &font_height) != 0) return 0;

	uint16_t x_res = cfb_get_display_parameter(dev, CFB_DISPLAY_WIDTH);
	uint16_t y_res = cfb_get_display_parameter(dev, CFB_DISPLAY_HEIGHT);
	LOG_INF("Display resolution: %dx%d", x_res, y_res);

	cfb_set_kerning(dev, 0);

	while (1)
	{
		cfb_framebuffer_clear(dev, false);
		print_text_centered(dev, LINE1_TEXT, 0, TOTAL_LINES,
			    font_width, font_height, x_res, y_res);
		print_text_centered(dev, LINE2_TEXT, 1, TOTAL_LINES,
			    font_width, font_height, x_res, y_res);
		cfb_framebuffer_finalize(dev);
		k_sleep(K_MSEC(1000));
	}

	return 0;
}
```

</details>

:::note

In Zephyr 4.4 the SSD1306 binding is `solomon,ssd1306` — not the older `solomon,ssd1306fb`. Writing the wrong compatible fails to compile the driver without warning, ultimately surfacing as an undefined `__device_dts_ord` link error. The overlay in the repo already uses the correct string.

:::

### Result

After flashing, press RST once; the OLED shows **Hello XIAO** / **nRF54LM20B** centered, refreshing once a second. The USB CDC console prints `Initialized display`, `Display resolution: 128x64`, and `Selected 8x8 font idx: N`. The SSD1306 module is powered at 3.3 V, with SDA on D4 and SCL on D5, sharing ground with the board.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/pinmax/6.jpg" style={{display:'inline-block', width:500, height:'auto', margin:'-83px 0', transform:'rotate(-90deg)', transformOrigin:'center center'}}/></div>

## SPI

SPI is a high-speed, synchronous, full-duplex bus. Unlike UART, it carries a dedicated SCLK clock line for synchronization, and the classic four-wire topology uses MOSI, MISO, and a chip-select CS/SS. With independent transmit and receive channels and a high bus clock, it suits peripherals that need bandwidth: Flash and SD cards, high-resolution displays, fast sensors. This example drives a GC9A01 240×240 round LCD over spi23.

### Hardware Preparation

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20B</th>
        <th>Round Display for Seeed Studio XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/getting_start/Seeed-Studio-XIAO-nRF54LM20B.webp" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-104030087-seeed-studio-round-display-for-xiao-new-font.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/1-28-Round-Touch-Display-for-Seeed-Studio-XIAO-ESP32.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Software Preparation

The LCD's SPI signals sit on **P1.4 / D8 (SCK)**, **P1.5 / D9 (MISO)**, **P1.6 / D10 (MOSI)**, with **P1.31 / D1** as chip-select and **P1.29 / D3** as the data/command pin. The full project is at [10_PinMux/6_spi_lcd](https://github.com/Seeed-Projects/XIAO_nRF54LM20B_wiki_examples/tree/main/10_PinMux/6_spi_lcd).

:::tip

See the XIAO nRF54LM20B pin assignment at [Getting Started · Pinout](https://wiki.seeedstudio.com/xiao_nrf54lm20b_getting_started/).

:::

**`app.overlay`** 

```dts
/*
 * XIAO nRF54LM20B -- Pin Multiplexing demo 6: SPI (GC9A01 240x240 round LCD)
 * ----------------------------------------------------------------------------
 * GC9X01X 240x240 round LCD on spi23:
 *   SPI23:  SCK=P1.04/D8  MOSI=P1.06/D10  MISO=P1.05/D9
 *   CS:     P1.31/D1  (SPI bus software CS)
 *   DC:     P1.29/D3  (Data/Command select, on the MIPI DBI node)
 *
 * In Zephyr 4.x the GC9X01X driver uses the MIPI DBI interface: the display
 * node is a child of a zephyr,mipi-dbi-spi node, which references the SPI
 * controller via spi-dev.
 *
 * 20B adaptations: spi23 pinctrl (P1.4/P1.6/P1.5) is already in the board
 * DTS, so the wiki's spi23_default/sleep redefinition is dropped; only
 * status + cs-gpios are set here. The console stays on USB CDC (the wiki's
 * chosen console/rpc-uart/shell-uart on uart20, and the uart20_default/sleep
 * redefinition, are all dropped).
 *
 * SPDX-License-Identifier: Apache-2.0
 */

#include <zephyr/dt-bindings/gpio/gpio.h>
#include <zephyr/dt-bindings/display/panel.h>

/ {
	chosen {
		zephyr,display = &gc9x01x;
	};

	mipi_dbi {
		compatible = "zephyr,mipi-dbi-spi";
		spi-dev = <&spi23>;
		dc-gpios = <&gpio1 29 GPIO_ACTIVE_HIGH>;
		write-only;
		#address-cells = <1>;
		#size-cells = <0>;
		gc9x01x: gc9x01x@0 {
			compatible = "galaxycore,gc9x01x";
			reg = <0>;
			mipi-max-frequency = <40000000>;
			pixel-format = <PANEL_PIXEL_FORMAT_RGB_565>;
			display-inversion;
			width  = <240>;
			height = <240>;
			status = "okay";
		};
	};
};

&spi23 {
	status = "okay";
	/* CS P1.31 — index 0 used by the MIPI DBI driver */
	cs-gpios = <&gpio1 31 GPIO_ACTIVE_LOW>;
};
```

**`prj.conf`** — Enables SPI, the display driver, the character framebuffer, a 32 KB heap and a 4 KB main stack, plus the mcuboot options.

```conf
# =============================================================================
# XIAO nRF54LM20B PinMux demo 6: SPI (GC9A01 240x240 round LCD on spi23)
# Console = board default USB CDC-ACM (LOG output).
# =============================================================================

CONFIG_LOG=y
CONFIG_LOG_DEFAULT_LEVEL=3
CONFIG_CONSOLE=y
CONFIG_UART_CONSOLE=y
CONFIG_GPIO=y
CONFIG_SPI=y
CONFIG_DISPLAY=y
CONFIG_CHARACTER_FRAMEBUFFER=y
CONFIG_CHARACTER_FRAMEBUFFER_USE_DEFAULT_FONTS=y
CONFIG_HEAP_MEM_POOL_SIZE=32768
CONFIG_MAIN_STACK_SIZE=4096

# ---- mcuboot self-confirmation ----
CONFIG_BOOTLOADER_MCUBOOT=y
CONFIG_IMG_MANAGER=y
CONFIG_MCUBOOT_IMG_MANAGER=y
CONFIG_FLASH=y
CONFIG_FLASH_MAP=y
CONFIG_STREAM_FLASH=y
```

**`src/main.c`** — Sets the display to RGB565, then loops two scenes: a six-color full-screen fill (red, green, blue, yellow, cyan, magenta) and six vertical color bars. The ~115 KB framebuffer is declared as a global to avoid stack overflow. The full source is fairly long — click to expand.

<details>

<summary>src/main.c</summary>

```c
/*
 * XIAO nRF54LM20B -- Pin Multiplexing demo 6: SPI (GC9A01 240x240 round LCD)
 * ----------------------------------------------------------------------------
 * Port of the wiki "SPI" demo. Drives a GC9A01 240x240 round LCD over spi23
 * (SCK=P1.4/D8, MOSI=P1.6/D10, MISO=P1.5/D9) via the MIPI DBI SPI interface,
 * cycling solid colors then color bars in RGB565.
 *
 * 20B adaptations vs the 20A original:
 *   - self-confirm the mcuboot image at startup;
 *   - console NOT moved to &uart20 (wiki chosen console/rpc-uart/shell-uart
 *     on uart20 and the uart20_default/sleep pinctrl redefinition are dropped
 *     -- LOG output stays on USB CDC);
 *   - spi23 pinctrl (P1.4/P1.6/P1.5) is already defined in the board DTS, so
 *     the wiki's spi23_default/sleep redefinition is dropped; this overlay
 *     only enables spi23 and adds its cs-gpios;
 *   - banner text "nRF54LM20A" -> "nRF54LM20B".
 *
 * Source: https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_pin_multiplexing/#spi
 * SPDX-License-Identifier: Apache-2.0
 */

#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/display/cfb.h>
#include <zephyr/drivers/display.h>
#include <zephyr/dfu/mcuboot.h>
#include <string.h>
#include <stdlib.h>

#define LOG_LEVEL CONFIG_LOG_DEFAULT_LEVEL
#include <zephyr/logging/log.h>
LOG_MODULE_REGISTER(gc9a01_demo, LOG_LEVEL);

/* GC9A01 Resolution */
#define LCD_W  240
#define LCD_H  240

/* RGB565 Color Definitions */
#define COLOR_BLACK   0x0000U
#define COLOR_WHITE   0xFFFFU
#define COLOR_RED     0xF800U
#define COLOR_GREEN   0x07E0U
#define COLOR_BLUE    0x001FU
#define COLOR_YELLOW  0xFFE0U
#define COLOR_CYAN    0x07FFU
#define COLOR_MAGENTA 0xF81FU
#define COLOR_ORANGE  0xFD20U

/* Fill entire screen using display_write.
 * buf: RGB565 pixel buffer, length = w * h * 2 bytes.
 */
static uint16_t fb[LCD_W * LCD_H];   /* ~115 KB, global to avoid stack overflow */

static void fill_screen(const struct device *dev, uint16_t color)
{
	/* RGB565 Big-endian (Default for GC9A01) */
	uint16_t be = (color >> 8) | (color << 8);
	for (int i = 0; i < LCD_W * LCD_H; i++)
	{
		fb[i] = be;
	}
	struct display_buffer_descriptor desc = {
		.buf_size = sizeof(fb),
		.width    = LCD_W,
		.height   = LCD_H,
		.pitch    = LCD_W,
	};
	display_write(dev, 0, 0, &desc, fb);
}

/* Scene 1: Solid color full-screen fill, cycle colors */
static void demo_solid_colors(const struct device *dev)
{
	static const uint16_t colors[] = {
		COLOR_RED, COLOR_GREEN, COLOR_BLUE,
		COLOR_YELLOW, COLOR_CYAN, COLOR_MAGENTA,
	};
	static const char *names[] = {
		"RED", "GREEN", "BLUE", "YELLOW", "CYAN", "MAGENTA",
	};
	for (int i = 0; i < ARRAY_SIZE(colors); i++)
	{
		LOG_INF("Solid: %s", names[i]);
		fill_screen(dev, colors[i]);
		k_sleep(K_MSEC(600));
	}
}

/* Scene 2: Color vertical bars (6 bars, 40px width each) */
static void demo_color_bars(const struct device *dev)
{
	static const uint16_t bar_colors[] = {
		COLOR_RED, COLOR_ORANGE, COLOR_YELLOW,
		COLOR_GREEN, COLOR_BLUE, COLOR_MAGENTA,
	};
	static const int BAR_W = LCD_W / ARRAY_SIZE(bar_colors);  /* = 40 */

	for (int y = 0; y < LCD_H; y++)
	{
		for (int x = 0; x < LCD_W; x++)
		{
			uint16_t c = bar_colors[x / BAR_W];
			uint16_t be = (c >> 8) | (c << 8);
			fb[y * LCD_W + x] = be;
		}
	}
	struct display_buffer_descriptor desc = {
		.buf_size = sizeof(fb),
		.width    = LCD_W,
		.height   = LCD_H,
		.pitch    = LCD_W,
	};
	display_write(dev, 0, 0, &desc, fb);
	LOG_INF("Color bars");
	k_sleep(K_MSEC(2000));
}

int main(void)
{
	(void)boot_write_img_confirmed();

	LOG_INF("GC9A01 demo — XIAO nRF54LM20B");

	const struct device *dev = DEVICE_DT_GET(DT_CHOSEN(zephyr_display));
	if (!device_is_ready(dev))
	{
		LOG_ERR("Display device not ready");
		return 0;
	}

	/* Set pixel format: GC9A01 uses RGB565 */
	if (display_set_pixel_format(dev, PIXEL_FORMAT_RGB_565) != 0)
	{
		LOG_ERR("Failed to set pixel format");
		return 0;
	}
	display_blanking_off(dev);
	LOG_INF("Display ready, starting demo loop");

	while (1)
	{
		demo_solid_colors(dev);   /* 6-color cycle ~3.6s */
		demo_color_bars(dev);     /* Color vertical bars ~2s */
	}

	return 0;
}
```

</details>

### Result

After flashing, press RST once; the round LCD cycles red, green, blue, yellow, cyan, magenta full-screen fills (about 0.6 s each), then draws six vertical color bars for about 2 s, and repeats. The USB CDC console prints `GC9A01 demo — XIAO nRF54LM20B`, `Display ready, starting demo loop`, `Solid: RED …`, and `Color bars`. The GC9A01 module is powered at 3.3 V; BLK ties to 3.3 V (or a PWM pin), sharing ground with the board.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_spi_1.gif" style={{width:600, height:'auto'}}/></div>


## Tech Support & Product Discussion

Thank you for choosing our products! We provide multiple support channels to ensure your experience is as smooth as possible, accommodating different preferences and needs.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
