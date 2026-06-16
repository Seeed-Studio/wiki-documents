---
title: XIAO nRF54LM20A Sense の低消費電力モード
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
url: https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_with_low_power/
---

# XIAO nRF54LM20A Sense の低消費電力モード

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/xiao_nrf54lm20a_power.png" style={{width:400, height:'auto'}}/></div>

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
                  今すぐ入手 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

XIAO nRF54LM20A は nRF54LM20 SoC をベースとしており、超低消費電力を特長とします。その優れた低消費電力性能により、ウェアラブル機器、IoT エンドノード、リモートセンシングユニットなど、バッテリーが重要となるアプリケーションでの動作時間を効果的に延長できます。本ドキュメントでは、XIAO nRF54LM20A 上でさまざまな低消費電力モードを実装・展開する方法について説明します。

:::tip

このチュートリアルは PlatformIO ビルドシステムと Zephyr RTOS をベースに作成されています。PlatformIO 上で XIAO nRF54LM20A 用プロジェクトの作成に不慣れな場合は、[Getting Sarted With Seeed Studio XIAO nRF54LM20A](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_getting_started/) にジャンプしてください。

:::

## ハードウェアの準備

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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
</table>
</div>

## バッテリー駆動

本章で実装するすべてのモードは、USB-C からの給電ではなく、XIAO nRF54LM20A のボトムパッド経由でのバッテリー電源供給を採用しています。
XIAO nRF54LM20A は、電源入力として 3.7V リチウムバッテリーを使用できます。配線方法については、以下の図を参照してください。

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/6_battry.png"alt="Battery wiring" style={{width: 600, height: 'auto'}}
  />
</div>

:::caution

はんだ付けの際は、正負端子を短絡させてバッテリーや機器を損傷させないよう十分注意してください。
バッテリーに電力が残っている状態で、決して基板にはんだ付けしないでください。基板の回路が焼損するおそれがあります。通電中に短絡が発生すると大きなリスクを伴うため、アダプタの使用を推奨します。

:::

## 低消費電力モード

XIAO nRF54LM20A では、System ON Sleep などの機能を用いて低消費電力モードを実現します。このモードでは、システムを動作状態に保ったまま消費電力を削減します。CPU クロックはゲートされ一時停止しますが、RAM の内容、ペリフェラルの状態、プログラムコンテキストは完全に保持され、GRTC を含む低消費電力タイマは動作し続けます。本セクションでは、`k_sleep` 関数と BLE アドバタイジングを用いて低消費電力モードを検証します。

### ソフトウェア

1. `.overlay` で終わるデバイスツリーファイルを修正します。

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

2. `prj.conf` 設定ファイルを修正し、システム電源管理設定を有効にします。

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

3. main.c プログラムを修正し、`k_sleep(K_SECONDS(10))` で低消費電力モードを有効にするとともに、BLE が 1 秒間隔で定期的にメッセージをブロードキャストするよう設定します。

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

### 結果

ファームウェアを書き込んだ後、電力消費テスタを使用して、低消費電力状態における XIAO nRF54LM20A の動作電流を測定できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/low_power_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
同時に、Bluetooth でスキャンすると、`XIAO nRF54LM20A` という名前でアドバタイズしているデバイスを見つけることができます。

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

上記のテスト結果は、実験室環境下で測定されたものです。値は環境や測定機器によって変動する可能性があるため、実際の測定結果を参照してください。

:::

## 超低消費電力モード

XIAO nRF54LM20A は System OFF によって超低消費電力モードを実現します。このモードに入ると、すべてのペリフェラルクロックが停止し、ほとんどのペリフェラルの電源が完全にオフになるため、待機電流は最小で 5 µA まで低減されます。ウェイクアップトリガには、GRTC タイマまたは GPIO 割り込みが含まれます。システム状態は保持されず、ウェイクアップ後は電源再投入時と同様に動作し、プログラムは main() 関数から再スタートします。

本セクションでは、GPIO 割り込みによるウェイクアップを用いて、XIAO nRF54LM20A 上での System OFF モードの実動作性能を検証します。

### ソフトウェア

この例では、Flash を手動で無効化する必要があります。そうしないと、約 15 µA の追加リーク電流が発生し、超低消費電力アプリケーションに悪影響を与えます。

1. `.overlay` サフィックス付きのデバイスツリーファイルを修正します。

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

2. `prj.conf` ファイルを修正し、電源管理を含む各種設定を有効にします。

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

3. main.c プログラムを作成し、オンボードの Boot ボタンが押されたときに、超低消費電力モードからチップをウェイクアップするようにします。

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

### 結果

本デバイスは、電源投入後デフォルトで超低消費電力モードに入ります。XIAO nRF54LM20A を消費電力テスターで測定したところ、3.7 V バッテリーで給電した場合の平均動作電流は約 5.43 µA でした。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/low_power_4.png" style={{width:800, height:'auto'}}/></div>
<br/>
シリアルモニタ経由でオンボードの BOOT ボタンを押すことで、チップをウェイクアップさせ、再びディープスリープに入る前にステータス情報を出力させることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/low_power_5.png" style={{width:800, height:'auto'}}/></div>
<br/>
:::tip

上記のテスト結果は、実験室環境下で測定されたものです。環境や測定機器の違いにより値は変動する可能性がありますので、実際の測定性能を参照してください。

:::

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
