---
title: XIAO nRF54LM20A Sense 的低功耗模式
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - low_power
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/xiao_nrf54lm20a_power.webp
slug: /xiao_nrf54lm20a_with_low_power
sku: 100018440
last_update:
  date: 06/01/2026
  author: Zeller
createdAt: '2025-06-01'
updatedAt: '2026-06-02'
url: https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_with_low_power/
---

# XIAO nRF54LM20A Sense 的低功耗模式

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/xiao_nrf54lm20a_power.png" style={{width:400, height:'auto'}}/></div>

XIAO nRF54LM20A 基于 nRF54LM20 SoC 打造，具备超低功耗特性。其出色的低功耗表现能够有效延长对电池续航要求严苛的应用的运行时间，例如可穿戴设备、物联网端节点以及远程传感单元。本文档将介绍如何在 XIAO nRF54LM20A 上实现并部署多种低功耗模式。

:::tip

本教程基于 PlatformIO 构建系统和 Zephyr RTOS 开发。如果你还不熟悉如何在 PlatformIO 下为 XIAO nRF54LM20A 创建项目，可以跳转到 [Getting Sarted With Seeed Studio XIAO nRF54LM20A](https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_getting_started/)。

:::

## 硬件准备

<div className="table-center">
<table align="center">
    <tr>
        <th>SeeedStudio XIAO nRF54LM20A Sense</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
</table>
</div>

## 使用电池供电

本章实现的所有模式均通过 XIAO nRF54LM20A 底部焊盘使用电池供电，而非通过 USB-C 供电。
XIAO nRF54LM20A 支持使用 3.7V 锂电池作为电源输入。你可以参考下图进行接线。

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/6_battry.png"alt="Battery wiring" style={{width: 600, height: 'auto'}}
  />
</div>

:::caution

焊接时请务必注意不要将正负极短路，以免烧毁电池和设备。
如果电池本身带电，切勿直接焊接到电路板上，否则可能烧毁电路板。在电路上电的情况下发生短路风险极大，建议使用适配器连接。

:::

## 低功耗模式

在 XIAO nRF54LM20A 上通过 System ON Sleep 等功能实现低功耗模式。在该模式下，系统仍保持工作，但功耗显著降低。CPU 时钟被门控并挂起，但 RAM 内容、外设状态以及程序上下文都会被完整保留，且包括 GRTC 在内的低功耗定时器仍在运行。本节将通过 `k_sleep` 函数和 BLE 广播来验证低功耗模式。

### 软件

1. 修改以 `.overlay` 结尾的设备树文件。

```dts
/* Switch BT HCI from Nordic SDC (needs nrfxlib binary) to Zephyr SW controller */
/ {
    chosen {
        zephyr,bt-hci = &bt_hci_controller;
    };
};

&bt_hci_sdc {
    status = "disabled";
};

&bt_hci_controller {
    status = "okay";
};

/* Disable unused regulators to reduce standby power */
&power_en {
    /delete-property/ regulator-boot-on;
};

&pmic {
    regulators {
        LDO1 {
            /delete-property/ regulator-boot-on;
        };
    };
};
```

2. 修改 `prj.conf` 配置文件以启用系统电源管理相关设置。

```conf
CONFIG_GPIO=y
CONFIG_NRFX_POWER=y
CONFIG_POWEROFF=y
CONFIG_HWINFO=y
CONFIG_CRC=y

# Device power management (peripheral level)
CONFIG_PM_DEVICE=y
CONFIG_PM_DEVICE_RUNTIME=y

# Bluetooth
CONFIG_BT=y
CONFIG_BT_BROADCASTER=y
CONFIG_BT_DEVICE_NAME="XIAO nRF54LM20A"
```

3. 修改 main.c 程序，通过 `k_sleep(K_SECONDS(10))` 启用低功耗模式，并配置 BLE 以 1 秒为间隔周期性广播消息。

```c
/*
 * BLE Low Power Broadcasting Demo for XIAO nRF54LM20A
 */
#include <zephyr/kernel.h>
#include <zephyr/bluetooth/bluetooth.h>
#include <zephyr/bluetooth/hci.h>

/* 1000ms / 0.625ms = 1600 = 0x0640 */
#define ADV_INTERVAL_1S 0x0640

static const struct bt_data ad[] = {
    BT_DATA_BYTES(BT_DATA_FLAGS, (BT_LE_AD_GENERAL | BT_LE_AD_NO_BREDR)),
    BT_DATA(BT_DATA_NAME_COMPLETE, "XIAO nRF54LM20A", 15),
};

static void bt_ready(int err)
{
    if (err) {
        return;
    }

    struct bt_le_adv_param param = BT_LE_ADV_PARAM_INIT(
        BT_LE_ADV_OPT_NONE,
        ADV_INTERVAL_1S,
        ADV_INTERVAL_1S,
        NULL
    );

    bt_le_adv_start(&param, ad, ARRAY_SIZE(ad), NULL, 0);
}

int main(void)
{
    bt_enable(bt_ready);

    /* BLE controller handles advertising autonomously; CPU sleeps */
    while (1) {
        k_sleep(K_SECONDS(10));
    }

    return 0;
}
```

### 结果

烧录固件后，我们可以使用功耗测试仪测量 XIAO nRF54LM20A 在低功耗条件下的工作电流。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/low_power_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
同时，你可以通过蓝牙扫描，并找到以 `XIAO nRF54LM20A` 为名称进行广播的设备。

- Android: [nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en)
- IOS: [nRF Connect](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

<div className="table-center">
<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/low_power_2.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/low_power_3.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>
<br/>
:::tip

以上测试结果均在实验室条件下测得。不同环境和测试仪器可能导致数值有所差异，请以实际测得性能为准。

:::

## 超低功耗模式

XIAO nRF54LM20A 通过 System OFF 实现超低功耗模式。进入该模式后，所有外设时钟停止，大部分外设完全断电，待机电流最低可达 5 µA。唤醒源包括 GRTC 定时器或 GPIO 中断。系统状态不会被保留；唤醒后芯片行为等同于重新上电，程序会从 main() 函数重新开始执行。

本节将通过 GPIO 中断唤醒的方式，验证 XIAO nRF54LM20A 在 System OFF 模式下的实际表现。

### 软件

在本示例中，必须手动关闭 Flash，否则会引入约 15 µA 的额外漏电流，从而对超低功耗应用产生不利影响。

1. 修改以 `.overlay` 为后缀的设备树文件。

```dts
&power_en {
	// /delete-property/ regulator-boot-on;
};

&pmic {
	regulators {
		LDO1 {
			// /delete-property/ regulator-boot-on;
		};
	};
};

&py25q64 {
	status = "okay";
	// hold-gpios = <&gpio2 0 GPIO_ACTIVE_LOW>;
};
```

2. 修改 `prj.conf` 文件以启用包括电源管理在内的相关配置。

```conf
CONFIG_SERIAL=y
CONFIG_CONSOLE=y
CONFIG_UART_CONSOLE=y
CONFIG_PRINTK=y

CONFIG_GPIO=y
CONFIG_SPI=y
CONFIG_FLASH=y
CONFIG_SPI_NOR=y

CONFIG_PM_DEVICE=y
CONFIG_NRFX_POWER=y
CONFIG_POWEROFF=y
CONFIG_HWINFO=y
```

3. 编写 main.c 程序，使芯片在按下板载 Boot 按钮时从超低功耗模式唤醒。

<details>

<summary>main.c</summary>

```c
/*
 * Copyright (c) 2019 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: Apache-2.0
 */
#include <errno.h>
#include <inttypes.h>
#include <stdio.h>

#include <zephyr/device.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/drivers/hwinfo.h>
#include <zephyr/kernel.h>
#include <zephyr/pm/device.h>
#include <zephyr/sys/poweroff.h>

static const struct gpio_dt_spec sw0 = GPIO_DT_SPEC_GET(DT_ALIAS(sw0), gpios);
static const struct device *const cons = DEVICE_DT_GET(DT_CHOSEN(zephyr_console));
static const struct device *const flash_dev = DEVICE_DT_GET(DT_NODELABEL(py25q64));

static void print_reset_cause(uint32_t reset_cause)
{
	if (reset_cause & RESET_DEBUG) {
		printf("Reset by debugger.\n");
	} else if (reset_cause & RESET_CLOCK) {
		printf("Wakeup from System OFF by clock source.\n");
	} else if (reset_cause & RESET_LOW_POWER_WAKE) {
		printf("Wakeup from System OFF by GPIO.\n");
	} else if (reset_cause != 0U) {
		printf("Other wake up cause 0x%08" PRIX32 ".\n", reset_cause);
	} else {
		printf("Power-on reset or reset cause unavailable.\n");
	}
}

static int configure_gpio_wakeup(void)
{
	int rc;

	if (!gpio_is_ready_dt(&sw0)) {
		printf("sw0 GPIO device not ready.\n");
		return -ENODEV;
	}

	rc = gpio_pin_configure_dt(&sw0, GPIO_INPUT);
	if (rc < 0) {
		printf("Could not configure sw0 GPIO (%d)\n", rc);
		return rc;
	}

	rc = gpio_pin_interrupt_configure_dt(&sw0, GPIO_INT_LEVEL_ACTIVE);
	if (rc < 0) {
		printf("Could not configure sw0 GPIO interrupt (%d)\n", rc);
		return rc;
	}

	return 0;
}

/*
 * SPI pin assignments for PY25Q64HA:
 *   P2.05 = CS#    -> OUTPUT HIGH  (keep flash deselected, prevent DPD wake)
 *   P2.00 = HOLD#  -> OUTPUT HIGH  (inactive)
 *   P2.03 = WP#    -> OUTPUT HIGH  (inactive)
 *   P2.01 = SCK    -> OUTPUT LOW   (deterministic level)
 *   P2.02 = MOSI   -> OUTPUT LOW   (deterministic level)
 *   P2.04 = MISO   -> INPUT PULL_DOWN (flash output, pull to known level)
 *
 * Datasheet requires all flash inputs at 0V or Vcc during DPD for 0.2uA typ.
 */
static int configure_spi_pins_for_system_off(void)
{
	const struct device *gpio2 = DEVICE_DT_GET(DT_NODELABEL(gpio2));
	int rc;

	if (!device_is_ready(gpio2)) {
		printf("GPIO2 not ready.\n");
		return -ENODEV;
	}

	/* CS# = HIGH: keep flash deselected */
	rc = gpio_pin_configure(gpio2, 5, GPIO_OUTPUT_HIGH);
	if (rc < 0) {
		return rc;
	}

	/* HOLD# = HIGH: inactive */
	rc = gpio_pin_configure(gpio2, 0, GPIO_OUTPUT_HIGH);
	if (rc < 0) {
		return rc;
	}

	/* WP# = HIGH: inactive */
	rc = gpio_pin_configure(gpio2, 3, GPIO_OUTPUT_HIGH);
	if (rc < 0) {
		return rc;
	}

	/* SCK = LOW */
	rc = gpio_pin_configure(gpio2, 1, GPIO_OUTPUT_LOW);
	if (rc < 0) {
		return rc;
	}

	/* MOSI = LOW */
	rc = gpio_pin_configure(gpio2, 2, GPIO_OUTPUT_LOW);
	if (rc < 0) {
		return rc;
	}

	/* MISO = input with pull-down */
	rc = gpio_pin_configure(gpio2, 4, GPIO_INPUT | GPIO_PULL_DOWN);
	if (rc < 0) {
		return rc;
	}

	return 0;
}

static int suspend_external_flash(void)
{
	const struct device *flash_bus = DEVICE_DT_GET(DT_BUS(DT_NODELABEL(py25q64)));
	int rc;

	if (!device_is_ready(flash_dev)) {
		printf("Flash device %s is not ready.\n", flash_dev->name);
		return -ENODEV;
	}

	printf("Flash device: %s\n", flash_dev->name);

	/* Step 1: Suspend flash — spi-nor driver sends DPD (0xB9) automatically */
	printf("Suspending external flash (entering DPD)...\n");
	rc = pm_device_action_run(flash_dev, PM_DEVICE_ACTION_SUSPEND);
	if (rc < 0) {
		printf("Could not suspend external flash (%d)\n", rc);
		return rc;
	}
	printf("External flash suspended.\n");

	/* Step 2: Suspend SPI bus */
	if (device_is_ready(flash_bus)) {
		rc = pm_device_action_run(flash_bus, PM_DEVICE_ACTION_SUSPEND);
		if (rc < 0) {
			printf("Could not suspend SPI bus (%d)\n", rc);
			return rc;
		}
		printf("SPI bus suspended.\n");
	}

	/* Step 3: Drive all SPI GPIOs to deterministic levels */
	rc = configure_spi_pins_for_system_off();
	if (rc < 0) {
		printf("Could not configure SPI pins (%d)\n", rc);
		return rc;
	}
	printf("SPI GPIO pins configured for system_off.\n");

	return 0;
}

int main(void)
{
	int rc;

	if (!device_is_ready(cons)) {
		printf("%s: console device not ready.\n", cons->name);
		return 0;
	}

	printf("\n=== %s system off demo with PY25Q64HA ===\n", CONFIG_BOARD);

	uint32_t reset_cause = 0U;

	rc = hwinfo_get_reset_cause(&reset_cause);
	if (rc == 0) {
		print_reset_cause(reset_cause);
	} else {
		printf("Could not read reset cause (%d)\n", rc);
	}

	rc = configure_gpio_wakeup();
	if (rc < 0) {
		return 0;
	}

	rc = suspend_external_flash();
	if (rc < 0) {
		printf("Aborting system off because flash did not enter low power.\n");
		return 0;
	}

	printf("Entering system off; press sw0 to restart\n");

	rc = pm_device_action_run(cons, PM_DEVICE_ACTION_SUSPEND);
	if (rc < 0) {
		printf("Could not suspend console (%d)\n", rc);
		return 0;
	}

	rc = hwinfo_clear_reset_cause();
	if (rc < 0) {
		printf("Could not clear reset cause (rc=%d)\n", rc);
		return 0;
	}

	sys_poweroff();

	return 0;
}
```

</details>

### 测试结果

设备在上电后默认进入超低功耗模式。使用功耗测试仪对 XIAO nRF54LM20A 进行测量，当使用 3.7 V 电池供电时，其平均工作电流约为 5.43 µA。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/low_power_4.png" style={{width:800, height:'auto'}}/></div>
<br/>
通过串口监视器按下板载 BOOT 按钮，可以唤醒芯片，在其重新进入深度睡眠前打印状态信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/low_power_5.png" style={{width:800, height:'auto'}}/></div>
<br/>
:::tip

以上测试结果是在实验室条件下测得的。数值可能会因环境和测试仪器不同而有所变化，请以实际测得的性能为准。

:::

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
