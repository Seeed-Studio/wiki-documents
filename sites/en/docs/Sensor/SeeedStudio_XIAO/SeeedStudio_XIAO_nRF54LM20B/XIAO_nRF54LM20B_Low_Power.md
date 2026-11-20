---
title: Low Power Modes for XIAO nRF54LM20B
sidebar_label: Low Power for XIAO
description: ''
keywords:
  - xiao
  - nrf54lm20b
  - low_power
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/XIAO_nRF54LM20B_Wiki_Banners/XIAO_nRF54LM20B_Low_Power.png
slug: /xiao_nrf54lm20b_with_low_power
sku:
last_update:
  date: 11/04/2026
  author: Brandy
createdAt: '2026-10-19'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/xiao_nrf54lm20b_with_low_power/
---

# Low Power Modes for XIAO nRF54LM20B

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/XIAO_nRF54LM20B_Wiki_Banners/XIAO_nRF54LM20B_Low_Power.png" style={{width:600, height:'auto'}}/></div>

The XIAO nRF54LM20B is built around the nRF54LM20B SoC and a Nordic nPM1300 PMIC, which together deliver very low standby current for battery-critical designs such as wearables, IoT end nodes and remote sensors. This document walks through the two standby modes available on the board — **System ON Sleep** and **System OFF** — shows the firmware that enters each one, and compares exactly what is shut down in each mode.

:::tip

This tutorial is built on PlatformIO + Zephyr RTOS. If you have not yet created a project for the XIAO nRF54LM20B under PlatformIO, start with [Getting Started with Seeed Studio XIAO nRF54LM20B](https://wiki.seeedstudio.com/xiao_nrf54lm20b_getting_started/).

:::

## Power measurement setup

All currents in this document are measured on the battery rail with a power analyzer (Nordic Power Profiler Kit II or equivalent). The board is powered from a 3.7 V lithium cell soldered to the BAT+/GND pads, and **the USB-C cable must be unplugged** during measurement — if USB is left connected, VBUS feeds the board in parallel with the battery and the reading is meaningless.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/getting_start/13_battery.png" alt="Battery wiring" style={{width:600, height:'auto'}}/>
</div>

:::caution

When soldering the battery, do not short the positive and negative pads. Never solder a charged cell onto a powered board — shorting a live circuit can burn the board. Use a battery holder or adapter if possible.

:::

## Two modes at a glance

The nRF54LM20B supports two distinct standby modes. They differ in what stays alive, what is shut down, how the chip wakes, and — most importantly for battery sizing — in the resulting current. The table below lists, subsystem by subsystem, exactly what each mode turns off.

<div className="table-center">
<table align="center">
<tr><th>Subsystem / Rail</th><th>System ON Sleep</th><th>System OFF</th></tr>
<tr><td>SoC CPU core</td><td>Clock gated via WFI (<code>k_sem_take(..., K_FOREVER)</code>); suspended</td><td>Powered off via <code>sys_poweroff()</code></td></tr>
<tr><td>CPUAPP SRAM (512 KB)</td><td><b>Fully retained</b> — no RAM power-control API used</td><td><b>Not retained</b> — wake reboots from <code>main()</code></td></tr>
<tr><td>Console</td><td>Off (<code>CONFIG_SERIAL=n</code>, <code>CONFIG_CONSOLE=n</code>)</td><td>UART on <code>uart21</code>; suspended with <code>pm_device_action_run(..., SUSPEND)</code> right before poweroff</td></tr>
<tr><td>USB CDC / <code>usbhs</code> controller</td><td>Off (<code>CONFIG_USB_DEVICE_STACK_NEXT=n</code>)</td><td>Off (<code>CONFIG_USB_DEVICE_STACK_NEXT=n</code>)</td></tr>
<tr><td>External flash PY25Q128HA</td><td>SPI NOR <code>SUSPEND</code> → Deep Power-Down; SPI pins driven to low-leakage states (CS#/HOLD#/WP# high, SCK/MOSI low, MISO pull-down)</td><td>Same: SPI NOR <code>SUSPEND</code> → Deep Power-Down; same pin levels</td></tr>
<tr><td>nPM1300 LDO1 (IMU + PDM mic rail)</td><td><code>regulator-boot-on</code> removed in overlay <b>and</b> runtime <code>regulator_disable()</code></td><td>Not touched by the overlay — relies on the IMU/mic falling back to their own power-down defaults once the SoC stops driving them</td></tr>
<tr><td>nPM1300 status LEDs (<code>pmic_leds</code>)</td><td><code>status = "disabled"</code> in overlay</td><td>Not touched — PMIC OTP leaves the LED outputs off, so no static current</td></tr>
<tr><td>Radio, NFCT, temp sensor, ADC, PDM, extra SPI/I²C/UART, PWM</td><td>Each explicitly <code>status = "disabled"</code> in overlay (the SoC is still alive, so every enabled node would otherwise draw)</td><td>Not touched in overlay — <code>sys_poweroff()</code> removes power from all SoC peripheral controllers at once, so there is nothing left to gate by hand</td></tr>
<tr><td>nPM1300 BUCK1 / BUCK2 (VSYS_3V3 → SoC VDD)</td><td>On</td><td>On — must stay to bias the SoC always-on DETECT/reset domain</td></tr>
<tr><td>Wake source</td><td>BOOT button (SW0) GPIO interrupt — wakes the CPU <b>without</b> a reset, program continues</td><td><b>None</b> — only an external reset or power cycle restarts the board</td></tr>
<tr><td>Measured avg current @ 3.7 V</td><td>~11.54 µA (PPK2)</td><td>~2.5 µA (R&amp;D lab instrument)</td></tr>
</table>
</div>

## System ON Sleep

System ON Sleep is the shallowest standby mode. The CPU clock is gated and the core is suspended through WFI, but RAM contents, peripheral state and program context are fully preserved, and low-power timers keep running. In this demo the main loop blocks on a semaphore forever; the BOOT button (SW0) is wired as a GPIO interrupt that gives the semaphore, so a press wakes the CPU without resetting it.

Because the SoC itself stays powered in this mode, every peripheral that is left enabled would continue to draw static current. The overlay therefore disables every node the demo does not use — radio, NFCT, temp, ADC, PDM, the extra SPI/I²C/UART buses, PWM, the PMIC status LEDs — and the firmware turns off the nPM1300 LDO1 (the IMU + PDM microphone rail) at runtime over the PMIC I²C bus. The external flash is sent into Deep Power-Down and its SPI pins are driven to defined low-leakage levels so the unselected flash cannot leak through its I/O.

<div className="github_container" style={{textAlign: 'center'}}>
    <a className="github_item" href="https://github.com/Seeed-Projects/XIAO_nRF54LM20B_wiki_examples/tree/main/11_low_power/system_on_sleep" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>

### Software

1. Modify the devicetree overlay (`app.overlay`). Enable the external flash on `spi00`, remove `regulator-boot-on` from LDO1, disable the PMIC status LEDs, and disable every other peripheral node the demo does not use.

```dts
&spi00 { status = "okay"; cs-gpios = <&gpio2 5 GPIO_ACTIVE_LOW>; };
&py25q128 { status = "okay"; spi-max-frequency = <8000000>;
            wp-gpios = <&gpio2 3 GPIO_ACTIVE_LOW>;
            hold-gpios = <&gpio2 0 GPIO_ACTIVE_LOW>; };

/* Drop the mic/IMU rail boot-on so it can be turned off at runtime. */
&pmic {
	regulators {
		LDO1 { /delete-property/ regulator-boot-on; };
	};
};
&pmic_leds { status = "disabled"; };
/* Keep the PMIC I²C bus up — main() uses it to disable LDO1, then does no more PMIC I/O. */
&pmic_i2c { status = "okay"; };

/* Every node below is left enabled by the board dtsi but unused by this demo.
 * The SoC stays powered in System ON Sleep, so each one must be disabled by hand. */
&spi23 { status = "disabled"; };
&i2c22 { status = "disabled"; };
&i2c30 { status = "disabled"; };
&adc   { status = "disabled"; };
&pdm20 { status = "disabled"; };
&uart20 { status = "disabled"; };
&uart21 { status = "disabled"; };
&usbhs { status = "disabled"; };
&pwm20 { status = "disabled"; };
&radio { status = "disabled"; };
&nfct  { status = "disabled"; };
&temp  { status = "disabled"; };
```


2. Modify `prj.conf`. Console, logging and USB are all off — this mode has no serial port while running.

```conf
CONFIG_GPIO=y
CONFIG_SPI=y
CONFIG_FLASH=y
CONFIG_SPI_NOR=y
CONFIG_SPI_NOR_FLASH_LAYOUT_PAGE_SIZE=4096
CONFIG_I2C=y
CONFIG_MFD=y
CONFIG_REGULATOR=y
CONFIG_PM_DEVICE=y

CONFIG_SERIAL=n
CONFIG_CONSOLE=n
CONFIG_LOG=n
CONFIG_BOOT_BANNER=n
CONFIG_TIMESLICING=n
CONFIG_USB_DEVICE_STACK_NEXT=n

# The board defconfig enables the lsm6dsl IMU driver, but this overlay disables
# its i2c30 bus; drop the sensor subsystem so the driver does not fail to compile.
CONFIG_SENSOR=n
CONFIG_LSM6DSL=n

# The board defconfig injects the xiao_dfu_reset module (1200-bps DFU trigger),
# which depends on the USB stack. USB is off here, so disable it to avoid
# unresolved usbd_* symbols at link time.
CONFIG_XIAO_DFU_RESET=n

CONFIG_BOOTLOADER_MCUBOOT=y
```

3. Write `main.c`. It blinks the blue LED once as a boot marker, configures the external flash for Deep Power-Down, disables LDO1, configures the BOOT button as a wake interrupt, and then blocks on a semaphore — the WFI entry point. A five-second CPU-active LED-on interval runs first so the ammeter has a clear high-current reference before the low-current sleep interval.

<details>
<summary>main.c</summary>

```c
/*
 * System ON Sleep current baseline for XIAO nRF54LM20B.
 *
 * The application blocks on a semaphore, allowing Zephyr's idle thread to
 * enter WFI/System ON Idle. All CPUAPP SRAM remains retained. BOOT (sw0)
 * wakes the application without a reset.
 */

#include <errno.h>

#include <zephyr/device.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/drivers/regulator.h>
#include <zephyr/kernel.h>
#include <zephyr/pm/device.h>

static const struct gpio_dt_spec button = GPIO_DT_SPEC_GET(DT_ALIAS(sw0), gpios);
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(DT_ALIAS(led0), gpios);
static const struct device *const flash = DEVICE_DT_GET(DT_NODELABEL(py25q128));
/* power_en (P1.12) is not modeled on the 20B board DTS, so only the nPM1300
 * LDO1 (dmic_vdd) rail is disabled here. */
static const struct device *const board_peripheral_vdd =
	DEVICE_DT_GET(DT_NODELABEL(dmic_vdd));

static struct gpio_callback button_callback;
static struct k_sem wake_sem;

static void button_isr(const struct device *port,
		       struct gpio_callback *callback, uint32_t pins)
{
	ARG_UNUSED(port);
	ARG_UNUSED(callback);
	ARG_UNUSED(pins);

	k_sem_give(&wake_sem);
}

static int configure_wakeup_button(void)
{
	int err;

	if (!gpio_is_ready_dt(&button)) {
		return -ENODEV;
	}

	err = gpio_pin_configure_dt(&button, GPIO_INPUT);
	if (err < 0) {
		return err;
	}

	gpio_init_callback(&button_callback, button_isr, BIT(button.pin));
	err = gpio_add_callback(button.port, &button_callback);
	if (err < 0) {
		return err;
	}

	return gpio_pin_interrupt_configure_dt(&button, GPIO_INT_EDGE_TO_ACTIVE);
}

/* The XIAO nRF54LM20B blue LED is active-low. Use physical levels directly as a
 * visible state marker. */
static void set_led_running(void)
{
	if (gpio_is_ready_dt(&led)) {
		(void)gpio_pin_configure(led.port, led.pin, GPIO_OUTPUT_LOW);
	}
}

static void set_led_sleeping(void)
{
	if (gpio_is_ready_dt(&led)) {
		(void)gpio_pin_configure(led.port, led.pin, GPIO_OUTPUT_HIGH);
	}
}

/* PY25Q128HA DPD requires all pins to stay at defined levels. CS# must remain
 * high: a low CS# releases the flash from deep power-down. */
static int set_flash_pins_for_dpd(void)
{
	const struct device *const gpio2 = DEVICE_DT_GET(DT_NODELABEL(gpio2));
	int err;

	if (!device_is_ready(gpio2)) {
		return -ENODEV;
	}

	err = gpio_pin_configure(gpio2, 5, GPIO_OUTPUT_HIGH); /* CS# */
	if (err < 0) return err;
	err = gpio_pin_configure(gpio2, 0, GPIO_OUTPUT_HIGH); /* HOLD# */
	if (err < 0) return err;
	err = gpio_pin_configure(gpio2, 3, GPIO_OUTPUT_HIGH); /* WP# */
	if (err < 0) return err;
	err = gpio_pin_configure(gpio2, 1, GPIO_OUTPUT_LOW);  /* SCK */
	if (err < 0) return err;
	err = gpio_pin_configure(gpio2, 2, GPIO_OUTPUT_LOW);  /* MOSI */
	if (err < 0) return err;
	return gpio_pin_configure(gpio2, 4, GPIO_INPUT | GPIO_PULL_DOWN); /* MISO */
}

static int prepare_flash_for_sleep(void)
{
	const struct device *const bus = DEVICE_DT_GET(DT_BUS(DT_NODELABEL(py25q128)));
	int err;

	if (!device_is_ready(flash)) {
		return -ENODEV;
	}

	/* The Zephyr spi-nor driver issues the DPD (0xB9) command here. */
	err = pm_device_action_run(flash, PM_DEVICE_ACTION_SUSPEND);
	if (err < 0) {
		return err;
	}

	if (device_is_ready(bus)) {
		err = pm_device_action_run(bus, PM_DEVICE_ACTION_SUSPEND);
		if (err < 0) {
			return err;
		}
	}

	return set_flash_pins_for_dpd();
}

static int disable_board_peripheral_rails(void)
{
	int err;

	if (!device_is_ready(board_peripheral_vdd)) {
		return -ENODEV;
	}

	err = regulator_disable(board_peripheral_vdd);
	if (err < 0 && err != -EALREADY) {
		return err;
	}

	return 0;
}

static void wait_for_button_release(void)
{
	while (gpio_pin_get_dt(&button) > 0) {
		k_sleep(K_MSEC(10));
	}
}

/* Deliberately a busy (CPU-active) interval, not k_sleep(). It gives the
 * ammeter a five second, LED-on reference before each System ON idle interval. */
static void run_active_reference_interval(void)
{
	set_led_running();

	for (int ms = 0; ms < 5000; ++ms) {
		k_busy_wait(1000);
	}
}

int main(void)
{
	int err;

	k_sem_init(&wake_sem, 0, 1);
	set_led_running();

	err = configure_wakeup_button();
	if (err < 0) {
		return err;
	}

	err = prepare_flash_for_sleep();
	if (err < 0) {
		return err;
	}

	err = disable_board_peripheral_rails();
	if (err < 0) {
		return err;
	}

	for (;;) {
		/* Physical low = blue LED on: five-second CPU-active reference. */
		run_active_reference_interval();

		/* Physical high = blue LED off: the System ON idle measurement starts here. */
		set_led_sleeping();

		/* System ON entry point: no busy loop and no poweroff. */
		k_sem_take(&wake_sem, K_FOREVER);

		/* BOOT woke the CPU; do not start the next reference while held down. */
		wait_for_button_release();
	}
}
```

</details>

### Result

<!-- TODO: replace with a PPK2 capture of the System ON Sleep current. -->

After flashing, the board runs a five-second LED-on CPU-active interval, then turns the LED off and blocks on the semaphore. During the blocked interval the board draws an average of approximately **11.54 µA** at 3.7 V on the battery rail. Pressing the BOOT button (SW0) wakes the CPU without a reset — the blue LED comes back on for another five-second reference interval, then sleep resumes.



<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/lower_power/a5.png" alt="PPK2 capture of System ON Sleep current" style={{width:800, height:'auto'}}/>
</div>

:::tip

The above test results are measured under laboratory conditions. Values may vary with different environments and test instruments; refer to actual measured performance.

:::

## System OFF

System OFF is the deepest standby mode. Entered with `sys_poweroff()`, it removes power from the entire SoC except the always-on DETECT/reset domain. System state is **not retained** — after wake the chip behaves as if power-cycled and the program restarts from `main()`. In this demo no wake source is configured, so the board stays in System OFF indefinitely until an external reset or power cycle.

Because `sys_poweroff()` cuts power to every SoC peripheral controller at once, there is no need to disable peripheral nodes one by one in the overlay — the overlay only needs to enable the external flash (so its driver can bind and send the Deep Power-Down command) and point the console at `uart21`. The firmware still places the external flash into Deep Power-Down and fixes its SPI pins to low-leakage levels before poweroff, because the flash is an off-chip device powered from a rail that stays up, and its I/O would otherwise leak through the unpowered SoC. The UART console is suspended as the last step so its transceiver does not draw while the SoC is off.

<div className="github_container" style={{textAlign: 'center'}}>
    <a className="github_item" href="https://github.com/Seeed-Projects/XIAO_nRF54LM20B_wiki_examples/tree/main/11_low_power/system_off" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>

### Software

1. Modify the devicetree overlay (`app.overlay`). Route the console to `uart21` and enable the external flash on `spi00` — nothing else needs touching.

```dts
/ {
	chosen {
		zephyr,console = &uart21;
		zephyr,shell-uart = &uart21;
	};
};

/* Enable the flash only long enough to send it into Deep Power-Down before System OFF. */
&spi00 {
	status = "okay";
	cs-gpios = <&gpio2 5 GPIO_ACTIVE_LOW>;
};

&py25q128 {
	status = "okay";
	spi-max-frequency = <8000000>;
	wp-gpios = <&gpio2 3 GPIO_ACTIVE_LOW>;
	hold-gpios = <&gpio2 0 GPIO_ACTIVE_LOW>;
};
```

2. Modify `prj.conf`. Bluetooth and USB are off; SPI NOR is enabled so the driver binds and can deep-power-down the flash. `CONFIG_POWEROFF=y` provides `sys_poweroff()`.

```conf
CONFIG_GPIO=y
CONFIG_SPI=y
CONFIG_FLASH=y
CONFIG_SPI_NOR=y
CONFIG_PM_DEVICE=y
CONFIG_POWEROFF=y
CONFIG_HWINFO=y

CONFIG_SERIAL=y
CONFIG_CONSOLE=y
CONFIG_UART_CONSOLE=y
CONFIG_USB_DEVICE_STACK_NEXT=n

# Drop the sensor subsystem and the xiao_dfu_reset module for the same reasons
# as in System ON Sleep (board defconfig enables both; USB is off here).
CONFIG_SENSOR=n
CONFIG_LSM6DSL=n
CONFIG_XIAO_DFU_RESET=n

CONFIG_BOOTLOADER_MCUBOOT=y
```

3. Write `main.c`. It blinks the LED once as a boot marker, prints the reset cause, puts the external flash into Deep Power-Down and fixes its SPI pins, suspends the UART console, and then calls `sys_poweroff()`.

<details>
<summary>main.c</summary>

```c
/*
 * System OFF minimum baseline for XIAO nRF54LM20B — no wakeup source.
 *
 * The external flash is placed into Deep Power-Down before sys_poweroff();
 * only an external reset or power cycle can restart the board.
 */

#include <inttypes.h>

#include <zephyr/device.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/drivers/hwinfo.h>
#include <zephyr/kernel.h>
#include <zephyr/pm/device.h>
#include <zephyr/sys/poweroff.h>
#include <zephyr/sys/printk.h>

static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(DT_ALIAS(led0), gpios);
static const struct device *const flash = DEVICE_DT_GET(DT_NODELABEL(py25q128));

static void blink_boot_marker(void)
{
	if (!gpio_is_ready_dt(&led)) {
		return;
	}
	if (gpio_pin_configure_dt(&led, GPIO_OUTPUT_INACTIVE) < 0) {
		return;
	}
	gpio_pin_set_dt(&led, 1);
	k_sleep(K_MSEC(120));
	gpio_pin_set_dt(&led, 0);
	k_sleep(K_MSEC(120));
	/* Do not retain the LED output driver during System OFF. */
	(void)gpio_pin_configure_dt(&led, GPIO_DISCONNECTED);
}

static void print_reset_cause(void)
{
	uint32_t cause;

	if (hwinfo_get_reset_cause(&cause) < 0) {
		printk("Unable to read reset cause\n");
		return;
	}
	printk("Reset cause: 0x%08" PRIX32 "\n", cause);
	(void)hwinfo_clear_reset_cause();
}

static int prepare_flash_for_system_off(void)
{
	const struct device *bus = DEVICE_DT_GET(DT_BUS(DT_NODELABEL(py25q128)));
	const struct device *gpio2 = DEVICE_DT_GET(DT_NODELABEL(gpio2));
	int err;

	if (!device_is_ready(flash) || !device_is_ready(gpio2)) {
		return -ENODEV;
	}
	/* spi-nor suspend sends the flash Deep Power-Down command. */
	err = pm_device_action_run(flash, PM_DEVICE_ACTION_SUSPEND);
	if (err < 0) {
		return err;
	}
	if (device_is_ready(bus)) {
		err = pm_device_action_run(bus, PM_DEVICE_ACTION_SUSPEND);
		if (err < 0) {
			return err;
		}
	}
	/* Keep all flash pins at deterministic DPD-safe levels. */
	err = gpio_pin_configure(gpio2, 5, GPIO_OUTPUT_HIGH); /* CS# */
	if (err < 0) return err;
	err = gpio_pin_configure(gpio2, 0, GPIO_OUTPUT_HIGH); /* HOLD# */
	if (err < 0) return err;
	err = gpio_pin_configure(gpio2, 3, GPIO_OUTPUT_HIGH); /* WP# */
	if (err < 0) return err;
	err = gpio_pin_configure(gpio2, 1, GPIO_OUTPUT_LOW);  /* SCK */
	if (err < 0) return err;
	err = gpio_pin_configure(gpio2, 2, GPIO_OUTPUT_LOW);  /* MOSI */
	if (err < 0) return err;
	return gpio_pin_configure(gpio2, 4, GPIO_INPUT | GPIO_PULL_DOWN); /* MISO */
}

int main(void)
{
	const struct device *console = DEVICE_DT_GET(DT_CHOSEN(zephyr_console));
	int err;

	blink_boot_marker();
	printk("\nSystem OFF minimum baseline\n");
	print_reset_cause();

	err = prepare_flash_for_system_off();
	if (err < 0) {
		printk("Flash low-power preparation failed: %d\n", err);
		return err;
	}

	printk("Flash DPD ready; entering System OFF without wakeup source\n");
	/* Flush UART before disconnecting it for System OFF. */
	k_sleep(K_MSEC(20));
	err = pm_device_action_run(console, PM_DEVICE_ACTION_SUSPEND);
	if (err < 0) {
		return err;
	}

	hwinfo_clear_reset_cause();
	sys_poweroff();
	return 0;
}
```

</details>

### Result

After startup, the firmware blinks the LED once, puts the external flash into Deep Power-Down, suspends the UART console, and enters System OFF. The board draws approximately **2.5 µA** at 3.7 V on the battery rail.

This current is at — and partly below — the practical resolution floor of a PPK2 in its µA range, where offset and noise make a clean average difficult to read. The figure shown is taken from an R&amp;D laboratory instrument with a lower noise floor. Because no wake source is configured, there is nothing to measure dynamically: reset the board (or power-cycle it) to restart it.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/lower_power/a1.png" alt="R&amp;D lab measurement of System OFF current" style={{width:800, height:'auto'}}/>
</div>

:::tip

The above test results are measured under laboratory conditions. Values may vary with different environments and test instruments; refer to actual measured performance.

:::

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
