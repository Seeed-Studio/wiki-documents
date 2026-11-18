---
title: Bluetooth LE for XIAO nRF54LM20B
sidebar_label: Bluetooth LE for XIAO
description: ''
keywords:
  - xiao
  - nrf54lm20b
  - bluetooth low energy
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/getting_start/xiao_nrf54lm20b_ble.webp
slug: /xiao_nrf54lm20b_with_bluetooth_lowpower
sku:
last_update:
  date: 10/19/2026
  author: Brandy
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/xiao_nrf54lm20b_with_bluetooth_lowpower/
---

# Bluetooth LE for XIAO nRF54LM20B

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/XIAO_nRF54LM20B_Wiki_Banners/XIAO_nRF54LM20B_Bluetooth_Usage.png" style={{width:600, height:'auto'}}/></div>

## Hardware Preparation

The `ble_advertising` and `ble_oberver` examples each need only a single XIAO nRF54LM20B board to run. `ble_central_gatt` needs a peer peripheral to talk to, so a full two-board setup takes **two** XIAO nRF54LM20B boards: one flashed with `ble_advertising` acting as the peripheral, the other flashed with `ble_central_gatt` acting as the central.

A phone with the **nRF Connect** app installed makes it easier to verify `ble_advertising` — scan for the device name `XIAO_BLE_ADV` and connect to it.

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

- 1 x [Seeed Studio XIAO nRF54LM20B Sense](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html)
- Android: [nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en)
- iOS: [nRF Connect](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

Each example is built, signed, and flashed with the one-shot script `flash.sh` (PlatformIO build → imgtool signing → nrfutil mcu-manager upload). If the PlatformIO + Zephyr toolchain is not set up yet, start with [Getting Started with XIAO nRF54LM20B](https://wiki.seeedstudio.com/xiao_nrf54lm20b_getting_started/).

The XIAO nRF54LM20B radio operates in the 2.4 GHz band, shared by Bluetooth LE, Thread, Zigbee, and proprietary 2.4 GHz protocols. For better communication range, confirm the antenna is properly installed before running the BLE examples.

### Antenna Installation

This board uses an external Bluetooth antenna. To ensure a better quality of Bluetooth signal and enhance your Bluetooth usage experience, it is recommended to install a Bluetooth antenna.
The connection method is shown below:

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/getting_start/11_2.gif"
    alt="Bluetooth antenna connection"
    style={{width: 800, height: 'auto'}}
  />
</div>

## Application

<!-- TODO: Port the BLE Beacon and BLE LBS samples from the M20A Bluetooth page. The M20A page
     carries several workarounds worth re-checking on the M20B toolchain: the MPU-early-fault
     workaround, the controller assert-inline-asm GCC workaround, and the LL procedure-collision
     Kconfig tweak. Verify each one is still needed before copying. -->

### ble_advertising



This example configures the XIAO nRF54LM20B as a **connectable BLE peripheral**. On power-up it advertises continuously: the advertising packet carries a custom 16-bit service UUID `0x18AA`, and the scan response carries the device name `XIAO_BLE_ADV`. It also registers a GATT service with a single writable characteristic (UUID `0x2AB1`, a 1-byte counter), so once a phone or another board connects it can write data into it. When the link drops, advertising resumes automatically from the recycled callback of the connection object, keeping the device rediscoverable at all times.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_nRF54LM20B_wiki_examples/tree/main/3_ble/ble_advertising" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

#### Software

1. Enable the Zephyr native BLE controller in `app.overlay`.
```dts
&radio {
	bt_hci_controller: bt_hci_controller {
		compatible = "zephyr,bt-hci-ll-sw-split";
		status = "okay";
	};
};

/ {
	chosen {
		zephyr,bt-hci = &bt_hci_controller;
	};
};

&ieee802154 {
	status = "disabled";
};
```

2. In `prj.conf`, enable the peripheral role, set the device name, and add the toolchain adaptation options.

```conf
# ---- Bluetooth: host + peripheral (advertising) role ----
CONFIG_BT=y
CONFIG_BT_PERIPHERAL=y
CONFIG_BT_DEVICE_NAME="XIAO_BLE_ADV"

# ---- Bluetooth controller: Zephyr software controller (enabled via DT node) ----
CONFIG_BT_LL_SW_SPLIT=y

# ---- Workaround: GCC 8.2 toolchain lacks GCC12 "asm inline"; hal/debug.h's
#      LL_ASSERT under ASSERT_OPTIMIZE_FOR_SIZE fails to compile. Disable it. ----
CONFIG_BT_CTLR_ASSERT_OPTIMIZE_FOR_SIZE=n

# ---- Disable 802.15.4 and yield the RADIO to the BLE controller ----
CONFIG_IEEE802154=n

# ---- GPIO for the RGB status LED (gpio-leds driver) ----
CONFIG_GPIO=y

# ---- mcuboot: image takes effect on boot ----
CONFIG_BOOTLOADER_MCUBOOT=y
```

3. Implement the advertising data, GATT service, and connection callbacks in `main.c`.

<details>
<summary>main.c</summary>

```c
/*
 * XIAO nRF54LM20B BLE Advertising Demo
 * Ported from the Zephyr samples/bluetooth/beacon, made connectable so a phone
 * (nRF Connect) or another board can scan and connect to it.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

#include <zephyr/kernel.h>
#include <zephyr/sys/printk.h>
#include <zephyr/bluetooth/bluetooth.h>
#include <zephyr/bluetooth/conn.h>
#include <zephyr/bluetooth/hci.h>
#include <zephyr/bluetooth/uuid.h>
#include <zephyr/bluetooth/gatt.h>

#include <string.h>

#include "led.h"

#define DEVICE_NAME      CONFIG_BT_DEVICE_NAME
#define DEVICE_NAME_LEN  (sizeof(DEVICE_NAME) - 1)

/* Custom 16-bit service UUID advertised so centrals can recognise this demo. */
#define ADV_SVC_UUID_VAL 0x18AA

static const struct bt_data ad[] = {
	BT_DATA_BYTES(BT_DATA_FLAGS,
		      BT_LE_AD_GENERAL | BT_LE_AD_NO_BREDR),
	BT_DATA_BYTES(BT_DATA_UUID16_ALL,
		      (ADV_SVC_UUID_VAL & 0xff),
		      ((ADV_SVC_UUID_VAL >> 8) & 0xff)),
};

static const struct bt_data sd[] = {
	BT_DATA(BT_DATA_NAME_COMPLETE, DEVICE_NAME, DEVICE_NAME_LEN),
};

/* ---- GATT service: one writable characteristic so a central (the
 * ble_central_gatt demo, or nRF Connect) can connect and write an incrementing
 * byte to us. The service UUID matches ADV_SVC_UUID_VAL (0x18AA) advertised in
 * ad[], so the central's UUID filter finds this board among other BLE traffic.
 * The characteristic holds a 1-byte counter; each write is echoed on the log.
 */
static struct bt_uuid_16 gatt_svc_uuid = BT_UUID_INIT_16(ADV_SVC_UUID_VAL);
static struct bt_uuid_16 gatt_chr_uuid = BT_UUID_INIT_16(0x2AB1);

static uint8_t gatt_counter;

static ssize_t write_counter(struct bt_conn *conn, const struct bt_gatt_attr *attr,
			     const void *buf, uint16_t len, uint16_t offset,
			     uint8_t flags)
{
	uint8_t *value = attr->user_data;

	if (offset + len > sizeof(gatt_counter)) {
		return BT_GATT_ERR(BT_ATT_ERR_INVALID_OFFSET);
	}

	memcpy(value + offset, buf, len);
	printk("GATT write received: counter = 0x%02x\n", gatt_counter);
	return len;
}

BT_GATT_SERVICE_DEFINE(gatt_svc,
	BT_GATT_PRIMARY_SERVICE(&gatt_svc_uuid),
	BT_GATT_CHARACTERISTIC(&gatt_chr_uuid,
			       BT_GATT_CHRC_WRITE,
			       BT_GATT_PERM_WRITE,
			       NULL, write_counter,
			       &gatt_counter),
);

static void start_advertising(void)
{
	int err;
	char addr_s[BT_ADDR_LE_STR_LEN];
	bt_addr_le_t addr = {0};
	size_t count = 1;

	/* Zephyr 4.4 dropped the BT_LE_ADV_CONN shorthand; use the connectable
	 * FAST_1 param set (BT_LE_ADV_OPT_CONN + fast advertising intervals).
	 */
	err = bt_le_adv_start(BT_LE_ADV_CONN_FAST_1, ad, ARRAY_SIZE(ad),
			      sd, ARRAY_SIZE(sd));
	if (err) {
		printk("Advertising failed to start (err %d)\n", err);
		led_set_state(LED_RED_ON);
		return;
	}

	bt_id_get(&addr, &count);
	bt_addr_le_to_str(&addr, addr_s, sizeof(addr_s));
	printk("Advertising started as %s (connectable, name \"%s\")\n",
	       addr_s, DEVICE_NAME);
	led_set_state(LED_BLUE_SLOW);
}

static void connected(struct bt_conn *conn, uint8_t err)
{
	char addr[BT_ADDR_LE_STR_LEN];

	bt_addr_le_to_str(bt_conn_get_dst(conn), addr, sizeof(addr));

	if (err) {
		printk("Failed to connect to %s (0x%02x)\n", addr, err);
		led_set_state(LED_RED_ON);
		return;
	}

	printk("Connected: %s\n", addr);
	led_set_state(LED_GREEN_ON);
}

static void disconnected(struct bt_conn *conn, uint8_t reason)
{
	char addr[BT_ADDR_LE_STR_LEN];

	bt_addr_le_to_str(bt_conn_get_dst(conn), addr, sizeof(addr));
	printk("Disconnected: %s (reason 0x%02x)\n", addr, reason);

	/* Do NOT restart advertising here. The stack still holds a reference to
	 * the connection object at this point, so the connection pool has no
	 * free slot and a connectable bt_le_adv_start() would fail with
	 * -ENOMEM. Restart from the recycled callback instead: it fires once
	 * the connection object has actually been returned to the pool.
	 */
	printk("Waiting for connection object to be recycled...\n");
	led_set_state(LED_RED_ON);
}

static void recycled(void)
{
	printk("Connection object recycled; restarting advertising\n");
	start_advertising();
}

BT_CONN_CB_DEFINE(conn_callbacks) = {
	.connected = connected,
	.disconnected = disconnected,
	.recycled = recycled,
};

static void bt_ready(int err)
{
	if (err) {
		printk("Bluetooth init failed (err %d)\n", err);
		led_set_state(LED_RED_ON);
		return;
	}

	printk("Bluetooth initialized\n");
	start_advertising();
}

int main(void)
{
	int err;

	printk("Starting BLE Advertising Demo\n");

	err = bt_enable(bt_ready);
	if (err) {
		printk("Bluetooth init failed (err %d)\n", err);
		led_set_state(LED_RED_ON);
	}

	return 0;
}
```

</details>

4. Configure the PlatformIO project in `platformio.ini`.

```ini
[env:seeed-xiao-nrf54lm20b]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = zephyr
board = seeed-xiao-nrf54lm20b
monitor_speed = 115200
```

#### Result

After flashing, scan with the nRF Connect app on a phone and a device named `XIAO_BLE_ADV` shows up. Connect to it, and under the `0x18AA` service the writable `0x2AB1` characteristic is visible; writing one byte to it makes the board echo the value on its serial port.



LED meaning: blue slow blink = advertising; green steady = connected; red = error.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/ble/11.gif" style={{width:800, height:'auto'}}/></div>
<br/>

### ble_oberver

`ble_oberver` (observer/scanner) and `ble_advertising` (advertiser) are the two foundational BLE roles that point in opposite directions:

<div className="table-center">

| | ble_advertising (advertiser) | ble_oberver (observer/scanner) |
|---|---|---|
| What the board does | Sends advertising packets, calling "I'm here" | Receives advertising packets, listening "who's around" |
| Direction | Others discover me | I discover others |
| Transmits? | ✅ Actively transmits advertising | ❌ Does not transmit its own advertising, only listens passively |
| Connects? | Connectable | Does not connect, just glances and logs |
| Phone side | Phone scans → sees the board → connects | Board scans → sees the phone/other devices → prints addresses |
| Analogy | Lighthouse: emits light to be found | Radar: scans to see what's around |

</div>


This example actively scans the surrounding advertising packets and flashes the green LED once per packet received. It also parses the device name out of the AD data and de-duplicates by address — each address is printed only once, so the same device does not flood the log across the three advertising channels and its scan response. The parsing and de-duplication logic lives in the `device_found()` callback in `observer.c`: it first walks the AD fields with `bt_data_parse()` looking for `BT_DATA_NAME_SHORTENED`/`BT_DATA_NAME_COMPLETE`, then keeps a small 16-entry table of already-reported addresses and skips the print on a hit (the green fast flash still fires every time, so scanning activity stays visible).

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_nRF54LM20B_wiki_examples/tree/main/3_ble/ble_oberver" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

#### Software

1. `app.overlay` is identical to the one in `ble_advertising` — so it is not repeated here.

2. In `prj.conf`, enable only the observer role (no peripheral/central role needed); the controller and toolchain adaptation options are otherwise the same.

```conf
# ---- Bluetooth: host + observer role ----
CONFIG_BT=y
CONFIG_BT_OBSERVER=y

# ---- Bluetooth controller: Zephyr software controller (enabled via DT node, see app.overlay) ----
CONFIG_BT_LL_SW_SPLIT=y

# ---- Workaround: the GCC 8.2 toolchain does not support GCC12's "asm inline" qualifier.
#      hal/debug.h's LL_ASSERT uses __asm__ inline volatile under
#      ASSERT_OPTIMIZE_FOR_SIZE and fails to compile. Disable it and fall back to
#      the BT_ASSERT(cond) branch. ----
CONFIG_BT_CTLR_ASSERT_OPTIMIZE_FOR_SIZE=n

# ---- Disable 802.15.4 and yield the RADIO to the BLE controller ----
CONFIG_IEEE802154=n

# ---- GPIO for the RGB status LED (gpio-leds driver) ----
CONFIG_GPIO=y

# ---- mcuboot: image takes effect on boot ----
CONFIG_BOOTLOADER_MCUBOOT=y
```

3. The program entry lives in `main.c`, which only calls `observer_start()` after `bt_enable(NULL)`; the scan, parse, and de-duplication logic lives in `observer.c`.

<details>
<summary>main.c</summary>

```c
/*
 * XIAO nRF54LM20B BLE Observer Demo (ported from NCS SDK samples/bluetooth/observer)
 * Starts BLE scanning and passively listens to surrounding advertising packets,
 * printing the discovered device address, RSSI, advertising type and AD data
 * length on the USB CDC serial port.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

#include <zephyr/sys/printk.h>
#include <zephyr/bluetooth/bluetooth.h>

#include "led.h"

int observer_start(void);

int main(void)
{
	int err;

	printk("Starting Observer Demo\n");

	/* Initialize the Bluetooth Subsystem */
	err = bt_enable(NULL);
	if (err) {
		printk("Bluetooth init failed (err %d)\n", err);
		led_set_state(LED_RED_ON);
		return 0;
	}

	printk("Bluetooth initialized\n");
	(void)observer_start();

	printk("Exiting %s thread.\n", __func__);
	return 0;
}
```

</details>

<details>
<summary>observer.c</summary>

```c
/*
 * Ported from NCS SDK samples/bluetooth/observer/src/observer.c.
 * SPDX-License-Identifier: Apache-2.0
 */

#include <zephyr/kernel.h>
#include <zephyr/sys/printk.h>
#include <zephyr/bluetooth/bluetooth.h>
#include <zephyr/bluetooth/hci.h>

#include <string.h>

#include "led.h"

/* Briefly flash green on each device found, then return to the blue scanning
 * pattern. Rescheduled on every device_found callback.
 */
static void led_back_to_scan(struct k_work *w);
static K_WORK_DELAYABLE_DEFINE(led_back_dwork, led_back_to_scan);

static void led_back_to_scan(struct k_work *w)
{
	led_set_state(LED_BLUE_SLOW);
}

/* ---- Enhancement: parse the advertised name + de-duplicate per address. -----
 * The stock device_found() callback prints every single packet, which floods
 * the console (one device is reported on each of the 3 adv channels, again on
 * its scan response, and repeatedly thereafter). We:
 *   - parse the AD payload for a local-name field so the log is useful, and
 *   - print each distinct peer address only once (a small fixed table).
 * The green flash still fires on every packet so scanning activity stays
 * visible on the LED.
 */
#define NAME_LEN_LP 30

struct ad_name {
	char buf[NAME_LEN_LP];
	bool found;
};

static bool name_cb(struct bt_data *data, void *user_data)
{
	struct ad_name *n = user_data;
	size_t len;

	if (data->type != BT_DATA_NAME_SHORTENED &&
	    data->type != BT_DATA_NAME_COMPLETE) {
		return true;
	}
	len = MIN(data->data_len, sizeof(n->buf) - 1);
	memcpy(n->buf, data->data, len);
	n->buf[len] = '\0';
	n->found = true;
	return false;
}

#define MAX_SEEN 16
struct seen_dev {
	bt_addr_le_t addr;
	bool used;
};
static struct seen_dev seen[MAX_SEEN];

static bool already_seen(const bt_addr_le_t *addr)
{
	for (int i = 0; i < MAX_SEEN; i++) {
		if (seen[i].used && bt_addr_le_cmp(&seen[i].addr, addr) == 0) {
			return true;
		}
	}
	return false;
}

static void mark_seen(const bt_addr_le_t *addr)
{
	for (int i = 0; i < MAX_SEEN; i++) {
		if (!seen[i].used) {
			bt_addr_le_copy(&seen[i].addr, addr);
			seen[i].used = true;
			return;
		}
	}
	/* Table full: drop everything and start over with just this device. */
	memset(seen, 0, sizeof(seen));
	bt_addr_le_copy(&seen[0].addr, addr);
	seen[0].used = true;
}

static void device_found(const bt_addr_le_t *addr, int8_t rssi, uint8_t type,
			 struct net_buf_simple *ad)
{
	char addr_str[BT_ADDR_LE_STR_LEN];
	struct ad_name name = {0};

	/* Green flash on every received packet so scanning activity stays
	 * visible even when we suppress the log line below.
	 */
	led_set_state(LED_GREEN_FAST);
	k_work_reschedule(&led_back_dwork, K_MSEC(300));

	if (already_seen(addr)) {
		return;	/* already reported this address — keep the log clean */
	}
	mark_seen(addr);

	bt_data_parse(ad, name_cb, &name);
	bt_addr_le_to_str(addr, addr_str, sizeof(addr_str));
	printk("Device found: %s (RSSI %d), type %u, AD len %u, name \"%s\"\n",
	       addr_str, rssi, type, ad->len, name.found ? name.buf : "(none)");
}

static int scan_start(void)
{
	/* 30 ms continuous active scanning with duplicate filtering. */
	struct bt_le_scan_param scan_param = {
		.type       = BT_LE_SCAN_TYPE_ACTIVE,
		.options    = BT_LE_SCAN_OPT_FILTER_DUPLICATE,
		.interval   = BT_GAP_SCAN_FAST_INTERVAL_MIN,
		.window     = BT_GAP_SCAN_FAST_WINDOW,
	};
	int err;

scan_start_retry:
	printk("Starting scanning...\n");
	err = bt_le_scan_start(&scan_param, device_found);
	if (err) {
		printk("Start scanning failed (err %d)\n", err);
		led_set_state(LED_RED_ON);
		return err;
	}

	printk("success.\n");
	led_set_state(LED_BLUE_SLOW);
	return 0;
}

int observer_start(void)
{
	int err;

	err = scan_start();
	if (err != 0) {
		return err;
	}

	return 0;
}
```

</details>

4. `platformio.ini` is identical to the one in `ble_advertising`.

```ini
[env:seeed-xiao-nrf54lm20b]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = zephyr
board = seeed-xiao-nrf54lm20b
monitor_speed = 115200
```

#### Result

After flashing, the board starts scanning and the serial output looks like this (each address appears only once):

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/ble/2.jpeg" style={{width:800, height:'auto'}}/></div>
<br/>


### central_gatt

`ble_central_gatt` goes one step further than the previous two examples: the observer only discovers others, while the central discovers and then connects to read and write the peer's data. The three roles form a single progression:

<div className="table-center">

| Example | What it does | Discovery method | Connects? |
|---|---|---|---|
| `ble_advertising` | Advertises, gets discovered by others | Passively discovered | Connectable |
| `ble_oberver` | Receives advertising, discovers others | Actively discovers | Does not connect |
| `ble_central_gatt` | Receives advertising to discover others → connects → reads/writes peer data | Actively discovers | Connects + GATT read/write |

</div>



This example configures the XIAO nRF54LM20B as a BLE central. It actively scans and filters, in the AD data, for devices advertising the service UUID `0x18AA` (so random phones and earbuds nearby are skipped). On a match it stops scanning and automatically initiates a connection; once connected it does a GATT characteristic discovery, picks the first writable characteristic, and writes an incrementing byte to it every 1 second. On disconnect it automatically re-scans and reconnects.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_nRF54LM20B_wiki_examples/tree/main/3_ble/ble_central_gatt" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

#### Software

1. `app.overlay` is identical to the one in `ble_advertising` (enables `bt_hci_controller`, disables `&ieee802154`), and is not repeated here.

2. In `prj.conf`, enable the central + GATT client roles, and enlarge the ACL/L2CAP buffers to accommodate the GATT writes. `CONFIG_BT_SMP` is turned on so the link can still come up when the peer requires encryption; this example does not enforce pairing.

```conf
# ---- Bluetooth: host + central + GATT client ----
CONFIG_BT=y
CONFIG_BT_CENTRAL=y
CONFIG_BT_GATT_CLIENT=y
CONFIG_BT_SMP=y

# ---- ACL/L2CAP buffers sized for GATT writes (match upstream sample) ----
CONFIG_BT_BUF_ACL_RX_SIZE=255
CONFIG_BT_BUF_ACL_TX_SIZE=251
CONFIG_BT_BUF_CMD_TX_SIZE=255
CONFIG_BT_L2CAP_TX_MTU=247

# ---- Bluetooth controller: Zephyr software controller (enabled via DT node) ----
CONFIG_BT_LL_SW_SPLIT=y
CONFIG_BT_CTLR_ASSERT_OPTIMIZE_FOR_SIZE=n

# ---- Disable 802.15.4 and yield the RADIO to the BLE controller ----
CONFIG_IEEE802154=n

# ---- GPIO for the RGB status LED ----
CONFIG_GPIO=y

# ---- mcuboot ----
CONFIG_BOOTLOADER_MCUBOOT=y
```

3. Implement the scan filter, connection, characteristic discovery, and periodic write in `main.c`.

<details>
<summary>main.c</summary>

```c
/*
 * XIAO nRF54LM20B BLE Central / GATT Write Demo
 * Ported from Zephyr samples/bluetooth/central_gatt_write, simplified for a
 * readable demo: scan -> connect -> discover characteristics -> periodically
 * write an incrementing byte to the first writable characteristic found.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

#include <zephyr/kernel.h>
#include <zephyr/sys/printk.h>
#include <zephyr/bluetooth/bluetooth.h>
#include <zephyr/bluetooth/conn.h>
#include <zephyr/bluetooth/gatt.h>
#include <zephyr/bluetooth/hci.h>
#include <zephyr/bluetooth/uuid.h>

#include <string.h>

#include "led.h"

static K_SEM_DEFINE(sem_connected, 0, 1);
static K_SEM_DEFINE(sem_discovered, 0, 1);

static struct bt_conn *conn;
static struct bt_gatt_discover_params discover_params;

/* First writable characteristic value handle we find. */
static uint16_t write_handle;
static bool write_handle_found;

/* Only connect to our advertising demo. ble_advertising advertises the 16-bit
 * service UUID 0x18AA (ADV_SVC_UUID_VAL) in its ad[] payload. We parse the AD
 * data and require that UUID, so random phones/headphones nearby are skipped.
 */
#define TARGET_SVC_UUID_VAL 0x18AA

struct ad_match {
	bool uuid_ok;
};

static bool ad_parse_cb(struct bt_data *data, void *user_data)
{
	struct ad_match *m = user_data;

	if (data->type == BT_DATA_UUID16_ALL ||
	    data->type == BT_DATA_UUID16_SOME) {
		for (uint16_t i = 0; i + 1 < data->data_len; i += 2) {
			uint16_t u = data->data[i] | (data->data[i + 1] << 8);
			if (u == TARGET_SVC_UUID_VAL) {
				m->uuid_ok = true;
				return false;
			}
		}
	}
	return true;
}

static void device_found(const bt_addr_le_t *addr, int8_t rssi, uint8_t type,
			 struct net_buf_simple *ad)
{
	char dev[BT_ADDR_LE_STR_LEN];
	struct ad_match m = {0};
	int err;

	/* Only connect to connectable advertising in close proximity. */
	if (type != BT_GAP_ADV_TYPE_ADV_IND &&
	    type != BT_GAP_ADV_TYPE_ADV_DIRECT_IND) {
		return;
	}
	if (rssi < -70) {
		return;
	}

	/* Only connect to peers advertising our target service UUID. */
	bt_data_parse(ad, ad_parse_cb, &m);
	if (!m.uuid_ok) {
		return;
	}

	bt_addr_le_to_str(addr, dev, sizeof(dev));
	printk("[DEVICE]: %s, AD evt type %u, AD len %u, RSSI %i (target UUID 0x%04X matched)\n",
	       dev, type, ad->len, rssi, TARGET_SVC_UUID_VAL);

	err = bt_le_scan_stop();
	if (err) {
		printk("Stop LE scan failed (err %d)\n", err);
		return;
	}

	printk("Connecting to %s ...\n", dev);
	led_set_state(LED_GREEN_ON);

	err = bt_conn_le_create(addr, BT_CONN_LE_CREATE_CONN,
				BT_LE_CONN_PARAM_DEFAULT, &conn);
	if (err) {
		printk("Create conn failed (err %d)\n", err);
		led_set_state(LED_BLUE_SLOW);
		(void)bt_le_scan_start(BT_LE_SCAN_ACTIVE, device_found);
	}
}

static void start_scan(void)
{
	int err;

	err = bt_le_scan_start(BT_LE_SCAN_ACTIVE, device_found);
	if (err) {
		printk("Scanning failed to start (err %d)\n", err);
		led_set_state(LED_RED_ON);
		return;
	}

	printk("Scanning...\n");
	led_set_state(LED_BLUE_SLOW);
}

static void mtu_exchange_cb(struct bt_conn *c, uint8_t err,
			    struct bt_gatt_exchange_params *params)
{
	printk("MTU exchange %s (%u)\n", err == 0U ? "success" : "failed",
	       bt_gatt_get_mtu(c));
}

static void write_cb(struct bt_conn *c, uint8_t err,
		     struct bt_gatt_write_params *params)
{
	if (err) {
		printk("Write failed (err 0x%02x)\n", err);
		led_set_state(LED_RED_ON);
	} else {
		printk("Write OK\n");
		led_set_state(LED_GREEN_FAST);
	}
}

static uint8_t discover_func(struct bt_conn *c, const struct bt_gatt_attr *attr,
			     struct bt_gatt_discover_params *params)
{
	struct bt_gatt_chrc *chrc;
	char str[BT_UUID_STR_LEN];

	if (!attr) {
		printk("Discovery complete.\n");
		if (!write_handle_found) {
			printk("No writable characteristic found on peer.\n");
			led_set_state(LED_RED_ON);
		}
		k_sem_give(&sem_discovered);
		return BT_GATT_ITER_STOP;
	}

	if (params->type == BT_GATT_DISCOVER_CHARACTERISTIC) {
		chrc = (struct bt_gatt_chrc *)attr->user_data;
		bt_uuid_to_str(chrc->uuid, str, sizeof(str));
		printk("  char %s  handle 0x%04x (value 0x%04x)  props 0x%02x\n",
		       str, attr->handle, chrc->value_handle, chrc->properties);

		if (!write_handle_found &&
		    (chrc->properties & (BT_GATT_CHRC_WRITE |
					 BT_GATT_CHRC_WRITE_WITHOUT_RESP))) {
			write_handle = chrc->value_handle;
			write_handle_found = true;
			printk("  -> selected for GATT writes (handle 0x%04x)\n",
			       write_handle);
		}
	}

	return BT_GATT_ITER_CONTINUE;
}

static void connected(struct bt_conn *c, uint8_t err)
{
	char addr[BT_ADDR_LE_STR_LEN];
	static struct bt_gatt_exchange_params mtu_params = { .func = mtu_exchange_cb };

	bt_addr_le_to_str(bt_conn_get_dst(c), addr, sizeof(addr));

	if (err) {
		printk("Failed to connect to %s (0x%02x)\n", addr, err);
		led_set_state(LED_RED_ON);
		conn = NULL;
		start_scan();
		return;
	}

	printk("Connected: %s\n", addr);
	led_set_state(LED_GREEN_ON);

	conn = bt_conn_ref(c);

	(void)bt_gatt_exchange_mtu(conn, &mtu_params);

	/* Discover all characteristics. */
	discover_params.uuid = NULL;
	discover_params.func = discover_func;
	discover_params.start_handle = BT_ATT_FIRST_ATTRIBUTE_HANDLE;
	discover_params.end_handle = BT_ATT_LAST_ATTRIBUTE_HANDLE;
	discover_params.type = BT_GATT_DISCOVER_CHARACTERISTIC;

	err = bt_gatt_discover(conn, &discover_params);
	if (err) {
		printk("Discovery failed to start (err %d)\n", err);
		led_set_state(LED_RED_ON);
	}

	k_sem_give(&sem_connected);
}

static void disconnected(struct bt_conn *c, uint8_t reason)
{
	char addr[BT_ADDR_LE_STR_LEN];

	bt_addr_le_to_str(bt_conn_get_dst(c), addr, sizeof(addr));
	printk("Disconnected: %s (reason 0x%02x)\n", addr, reason);

	bt_conn_unref(c);
	conn = NULL;
	write_handle_found = false;
	write_handle = 0U;

	start_scan();
}

BT_CONN_CB_DEFINE(conn_callbacks) = {
	.connected = connected,
	.disconnected = disconnected,
};

int main(void)
{
	int err;
	uint8_t counter = 0;

	printk("Starting BLE Central / GATT Write Demo\n");

	err = bt_enable(NULL);
	if (err) {
		printk("Bluetooth init failed (err %d)\n", err);
		led_set_state(LED_RED_ON);
		return 0;
	}
	printk("Bluetooth initialized\n");

	start_scan();

	k_sem_take(&sem_connected, K_FOREVER);
	k_sem_take(&sem_discovered, K_FOREVER);

	if (!write_handle_found) {
		/* Nothing to write; just hold the connection. */
		while (1) {
			k_sleep(K_SECONDS(1));
		}
	}

	printk("Starting periodic GATT writes every 1 s...\n");

	while (1) {
		struct bt_gatt_write_params wp;
		int werr;

		wp.func = write_cb;
		wp.handle = write_handle;
		wp.offset = 0;
		wp.data = &counter;
		wp.length = 1;

		printk("Write sent: 0x%02x -> handle 0x%04x\n", counter, write_handle);
		werr = bt_gatt_write(conn, &wp);
		if (werr) {
			printk("bt_gatt_write failed (err %d)\n", werr);
			led_set_state(LED_RED_ON);
		}

		counter++;
		k_sleep(K_SECONDS(1));
	}

	return 0;
}
```

</details>

4. `platformio.ini` is identical to the one in `ble_advertising`.

```ini
[env:seeed-xiao-nrf54lm20b]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = zephyr
board = seeed-xiao-nrf54lm20b
monitor_speed = 115200
```

#### Result

Two-board setup: flash one board with `ble_advertising` (peripheral) and the other with `ble_central_gatt` (central), then power both on. The central scans, finds the peripheral, and connects automatically; afterwards a GATT write happens once per second, and the two serial ports advance in lockstep — the central prints the write and `Write OK`, the peripheral prints the received counter value. The captured serial output is below:

Board B (`cu.usbmodem1101`, central_gatt) — writes an incrementing value each second:
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/ble/3.png" style={{width:500, height:'auto'}}/></div>
<br/>

Board A (`cu.usbmodem1201`, advertising) — receives a write each second:


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/ble/4.png" style={{width:500, height:'auto'}}/></div>
<br/>

Final result:
<div style={{display:'flex', justifyContent:'center', alignItems:'center', height:400, overflow:'visible'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/ble/5.gif" style={{width:400, height:'auto', transform:'rotate(90deg)'}}/></div>
<br/>

### channel_sounding

The first three example groups demonstrate the three BLE roles (advertising, scanning, connecting). This group goes a different direction: BLE Channel Sounding (CS) ranging. CS is a ranging feature Bluetooth introduced that exchanges dedicated ranging signals between two ends, an order of magnitude more accurate than traditional RSSI ranging, targeting decimeter or even centimeter level. This demo has two XIAO nRF54LM20B boards take the roles of initiator (central, starts the ranging) and reflector (peripheral, responds to the ranging); after a BLE connection is established they run a CS procedure periodically, and at the end of each procedure the initiator prints one distance estimate.

This example differs fundamentally from the first three groups in one way: **it cannot be built with PlatformIO**. CS needs Nordic's proprietary BLE controller, and the Zephyr software controller (`CONFIG_BT_LL_SW_SPLIT`) used by the first three groups does not support CS. So this example is built with the nRF Connect SDK (NCS) instead; the toolchain installation and board path configuration match the [NCS page](/xiao_nrf54lm20b_ncs), and only the parts specific to this example are covered below.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_nRF54LM20B_wiki_examples/tree/main/3_ble/ble_channel_sounding" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

#### Software

Step 1: download the two sample projects, one initiator and one reflector.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/ble/6.png" style={{width:800, height:'auto'}}/></div>
<br/>

Step 2: build the two projects separately; the configuration method is the same for both.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/ble/7.png" style={{width:800, height:'auto'}}/></div>
<br/>

The demo is split into two independent projects, each with its own `CMakeLists.txt` and `prj.conf`:

- `initiator/` — the BLE central. It actively scans for devices advertising the name `CS Sample`, and on a match connects, encrypts, negotiates the CS config, starts the CS procedure, and computes and prints the distance at the end of each procedure.
- `reflector/` — the BLE peripheral. It advertises `CS Sample`, and once the initiator connects it cooperates to complete the CS procedure; at the end of each round it sends its local step data back to the initiator with a single GATT Prepare Write. The distance is computed only on the initiator side; during normal operation the reflector's serial port stays quiet.

The only key difference between the two `prj.conf` files is the role:

<details>
<summary>initiator/prj.conf</summary>

```conf
CONFIG_BT=y
CONFIG_BT_SMP=y
CONFIG_BT_CENTRAL=y
CONFIG_BT_GAP_AUTO_UPDATE_CONN_PARAMS=n
CONFIG_BT_AUTO_PHY_CENTRAL_NONE=y
CONFIG_BT_GATT_CLIENT=y
CONFIG_BT_GATT_DYNAMIC_DB=y
CONFIG_BT_ATT_PREPARE_COUNT=3
CONFIG_BT_CHANNEL_SOUNDING=y

CONFIG_BT_BUF_ACL_RX_SIZE=251
CONFIG_BT_BUF_ACL_TX_SIZE=251
CONFIG_BT_L2CAP_TX_MTU=247

CONFIG_MAIN_STACK_SIZE=4096
CONFIG_CBPRINTF_FP_SUPPORT=y
```
</details>

<details>
<summary>reflector/prj.conf</summary>

```conf
CONFIG_BT=y
CONFIG_BT_SMP=y
CONFIG_BT_PERIPHERAL=y
CONFIG_BT_GAP_AUTO_UPDATE_CONN_PARAMS=n
CONFIG_BT_GATT_CLIENT=y
CONFIG_BT_CHANNEL_SOUNDING=y

CONFIG_BT_BUF_ACL_RX_SIZE=251
CONFIG_BT_BUF_ACL_TX_SIZE=251
CONFIG_BT_L2CAP_TX_MTU=247

CONFIG_MAIN_STACK_SIZE=4096
CONFIG_CBPRINTF_FP_SUPPORT=y
```
</details>

`CONFIG_BT_CHANNEL_SOUNDING=y` is turned on on both sides — it is the master switch that enables CS. The extra `CONFIG_BT_ATT_PREPARE_COUNT=3` on the initiator makes room for that one 512-byte GATT Prepare Write the reflector sends back; `CONFIG_BT_AUTO_PHY_CENTRAL_NONE=y` disables the central's automatic PHY update so the PHY does not jump during CS negotiation. `CONFIG_CBPRINTF_FP_SUPPORT=y` is needed because the distance is printed with `printk("%f")`, and float formatting has to be enabled separately.

Both ends use the same pair of custom 128-bit UUIDs for their GATT service, defined in the shared `common.h`, which the reflector uses to discover the step-data characteristic registered by the initiator:

<details>
<summary>common.h (identical for initiator and reflector)</summary>

```c
#include <zephyr/bluetooth/gatt.h>

#define NAME_LEN          30
#define STEP_DATA_BUF_LEN 512 /* Maximum GATT characteristic length */

static struct bt_uuid_128 step_data_char_uuid =
	BT_UUID_INIT_128(BT_UUID_128_ENCODE(0x87654321, 0x4567, 0x2389, 0x1254, 0xf67f9fedcba8));
static const struct bt_uuid_128 step_data_svc_uuid =
	BT_UUID_INIT_128(BT_UUID_128_ENCODE(0x87654321, 0x4567, 0x2389, 0x1254, 0xf67f9fedcba9));
```
</details>

The initiator's main flow is a chain of synchronous milestones, each one waiting on a semaphore for a callback to confirm completion:

<details>
<summary>initiator/src/connected_cs_initiator.c (main flow)</summary>

```c
int main(void)
{
	printk("Starting Channel Sounding Demo\n");

	bt_enable(NULL);
	bt_gatt_service_register(&step_data_gatt_service);  /* register the step-data service, wait for reflector to write back */
	bt_le_scan_start(BT_LE_SCAN_ACTIVE_CONTINUOUS, device_found);  /* scan for "CS Sample" */

	k_sem_take(&sem_connected, K_FOREVER);          /* Connected to ... */

	/* local role = initiator */
	bt_le_cs_set_default_settings(connection, &default_settings);
	bt_conn_set_security(connection, BT_SECURITY_L2);   /* CS requires L2 encryption first */
	k_sem_take(&sem_acl_encryption_enabled, K_FOREVER); /* Security changed to level 2 */

	bt_le_cs_read_remote_supported_capabilities(connection);
	k_sem_take(&sem_remote_capabilities_obtained, K_FOREVER); /* CS capability exchange completed */

	bt_le_cs_create_config(connection, &get_cs_config_params(),
			       BT_LE_CS_CREATE_CONFIG_CONTEXT_LOCAL_AND_REMOTE);
	k_sem_take(&sem_config_created, K_FOREVER);   /* CS config creation complete. ID: 0 */

	bt_le_cs_security_enable(connection);
	k_sem_take(&sem_cs_security_enabled, K_FOREVER); /* CS security enabled */

	/* procedure params: procedure interval 100, subevent_len 50000 (collapsed to a single subevent to limit step count) */
	bt_le_cs_set_procedure_parameters(connection, &procedure_params);
	bt_le_cs_procedure_enable(connection, &params);   /* CS procedures enabled */

	while (true) {
		k_sem_take(&sem_procedure_done, K_FOREVER);  /* one procedure round complete */
		k_sem_take(&sem_data_received, K_FOREVER);   /* peer step data sent back by reflector received */
		estimate_distance(latest_local_steps, latest_step_data_len,
				  latest_peer_steps, /*len*/, n_ap, BT_CONN_LE_CS_ROLE_INITIATOR);
	}
}
```
</details>

The CS config decides which ranging mode is used and which channels are swept:

<details>
<summary>CS config parameters (get_cs_config_params)</summary>

```c
struct bt_le_cs_create_config_params config_params = {
	.id = 0,
	.mode = BT_CONN_LE_CS_MAIN_MODE_2_SUB_MODE_1,  /* Mode 2: IQ phase sampling, used for PBR */
	.min_main_mode_steps = 2,
	.max_main_mode_steps = 10,
	.main_mode_repetition = 0,
	.mode_0_steps = NUM_MODE_0_STEPS,              /* 1 Mode 0 step, used for RTT */
	.role = BT_CONN_LE_CS_ROLE_INITIATOR,
	.rtt_type = BT_CONN_LE_CS_RTT_TYPE_AA_ONLY,
	.cs_sync_phy = BT_CONN_LE_CS_SYNC_1M_PHY,
	.channel_map_repetition = 1,                   /* channel table walked only once, to limit total step count */
	.channel_selection_type = BT_CONN_LE_CS_CHSEL_TYPE_3B,
	.ch3c_shape = BT_CONN_LE_CS_CH3C_SHAPE_HAT,
	.ch3c_jump = 2,
};
/* enable 36 consecutive channels (starting at 26; channels 23/24/25 are forbidden by the spec) */
for (uint8_t i = 26; i < 62; i++)
	BT_LE_CS_CHANNEL_BIT_SET_VAL(config_params.channel_map, i, 1);
```
</details>

The distance computation lives in `distance_estimation.c` and uses two independent methods, each computed on its own:

<details>
<summary>distance_estimation.c (two ranging methods)</summary>

```c
/* Method 1: Phase-Based Ranging (based on the IQ phase slope from Mode 2)
 * Multiply the IQ samples taken on the local and peer sides on the same channel,
 * take atan2 to get the phase, sort by frequency, unwrap the phase, then run a
 * linear regression over (frequency, phase) to get the slope.
 * distance = -phase_slope * c / (4π), scaled to meters. */
static float estimate_distance_using_phase_slope(struct iq_sample_and_channel *data, uint8_t len)
{
	/* ... complex multiply, atan2, sort by frequency, phase unwrapping ... */
	float phase_slope = linear_regression(frequencies, theta, num_angles);
	float distance = -phase_slope * (SPEED_OF_LIGHT_M_PER_S / (4 * PI));
	return distance / 1000000.0f;
}

/* Method 2: Round-Trip Timing (based on the toa/tod from Mode 1)
 * ToF = (toa_tod_initiator - tod_toa_reflector) / 2, accumulated as a moving
 * average, then multiplied by the speed of light to convert to meters.
 * Depends on antenna delay calibration; without calibration, near distances skew negative. */
static float estimate_distance_using_time_of_flight(uint8_t n_samples)
{
	/* ... accumulate a moving average for tof_mean ... */
	float tof_mean_ns = tof_mean / 2.0f;
	return tof_mean_ns * SPEED_OF_LIGHT_NM_PER_S;
}
```
</details>

#### Result

When testing channel sounding the antennas need to be aligned, as shown below:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/ble/10.jpeg" style={{width:400, height:'auto'}}/></div>
<br/>

Flash the initiator and reflector onto the two boards, power the reflector on first (so it starts advertising), then power on the initiator. The initiator's serial port prints the milestones of the whole chain in turn, and finally enters periodic ranging:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/ble/9.png" style={{width:500, height:'auto'}}/></div>
<br/>


Each procedure interval is about 40 seconds (`min=max_procedure_interval=100`, 36 channels, `subevent_len=50000`, plus the reflector's 512-byte GATT write-back) — the board is not stuck. After the link comes up the reflector's serial port stays quiet — the distance is computed only on the initiator, and the reflector does not print while it normally writes its step data back. That is by design, not a sign it is not working.

The difference between the two methods' output is expected, and worth understanding: **Phase-Based Ranging** (PBR) gives a stable, trustworthy distance — with the two boards placed roughly half a meter apart, PBR fluctuates in a small band around 0.4–0.7 m, which is the right order of magnitude. **Round-Trip Timing** (RTT) frequently returns negative values (-0.7 to -5 m), because this example does not perform antenna delay calibration. The ToF method in CS ranging is only accurate after subtracting the antenna TX/RX delay; at short range, an uncalibrated delay pushes the distance off, even negative. That is the known behavior of the upstream sample, not a porting or hardware problem.

In other words, this demo verifies that "the CS link runs and produces distance numbers," and the PBR method's output can serve as a rough distance reference. Reaching the centimeter-level accuracy CS advertises would require adding antenna delay calibration on top of this (calibrating each board's TX/RX delay at a known distance and writing it back to the controller) and swapping in Nordic's CS distance library in place of the simplified estimator here — that is beyond the scope of this example.



## Summary

These three examples cover the three core BLE roles: `ble_advertising` shows how a peripheral advertises and gets discovered; `ble_oberver` shows how to passively scan the surrounding devices; `ble_central_gatt` shows how a central scans, filters, connects, and does GATT read/write on a peer. Flashing `ble_advertising` and `ble_central_gatt` onto two boards runs a complete "advertise → scan → auto-connect → periodic write" link, which is the foundation for more complex BLE applications (sensor data reporting, phone-based provisioning, Mesh nodes, and so on).

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
