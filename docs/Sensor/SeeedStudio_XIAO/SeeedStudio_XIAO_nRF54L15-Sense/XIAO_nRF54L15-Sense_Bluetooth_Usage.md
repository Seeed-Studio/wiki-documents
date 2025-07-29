---
title: Seeed Studio XIAO nRF54L15 Sense BLE Usage
description: |
  Complete guide for using Bluetooth Low Energy (BLE) with XIAO nRF54L15 Sense, including advertising, connections, GATT services, and power optimization.
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/top.jpg
slug: /xiao_nrf54l15_sense_bluetooth_usage
keywords:
  - XIAO
  - nRF54L15
  - BLE
  - Bluetooth
  - Zephyr
last_update:
  date: 7/2/2025
  author: Jason
sidebar_position: 3
---



## nRF COnnect SDK

This Bluetooth advertising tutorial is based on the official [sample](https://academy.nordicsemi.com/courses/bluetooth-low-energy-fundamentals/lessons/lesson-2-bluetooth-le-advertising/topic/blefund-lesson-2-exercise-1/) code modified to run on the Nordic Connect SDK. With our development board combined with the official documentation, you can dive into more Bluetooth [applications](https://academy.nordicsemi.com/courses/bluetooth-low-energy-fundamentals/).

While the phone is not connected to the XIAO nRF54L15, the on-board indicator will remain permanently lit. Once the phone is successfully connected, the indicator will begin flashing to indicate that a connection has been established.

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/BLE.gif" alt="XIAO nRF54L15 Ultra-low Power Consumption in System Off Mode" style={{width:600, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Cell Phone Connection XIAO nRF54L15</em></p>
</div>

### BLE Advertising Software Install

For this example, you'll need to download the official Bluetooth testing [app](https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-mobile), nRF Connect, on your mobile phone.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrfconnect_app.png" style={{width:600, height:'auto'}}/></div>

Once you've flashed the program onto your XIAO nRF52840 Sense board, you can open the nRF Connect app's main page to interact with it.

- Step 1 . in the nRF Connect app, click the scan button in the top right corner to start scanning for Bluetooth devices.

- Step 2 .Next, enter the name of your XIAO nRF52840 Sense device  into the "Name" field. This will help you filter and quickly locate your device.

- Step 3 .In the scan results area, find your XIAO nRF52840 Sense device and click the "Connect" button next to it .

Upon successful connection, you will be directed to the device details page. On this page, you can observe the Bluetooth signal strength (RSSI) distribution over different time periods , which helps you understand the stability of the device's connection.


<div class="table-center">
	<table align="center">
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/ble_image.jpg" style={{width:300, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/ble_image2.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
	</table>
</div>

### Add XIAO nRF54L15 Board

To add the XIAO nRF52840 Sense board to NCS (nRF Connect SDK), you can refer to the ["Getting Started"](https://wiki.seeedstudio.com/xiao_nrf54l15_sense_getting_started/) guide on the Seeed Studio Wiki. This guide will provide detailed instructions on the process.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### BLE Advertising Code

```c
#include <zephyr/kernel.h>
#include <zephyr/logging/log.h>
#include <zephyr/bluetooth/bluetooth.h>
#include <zephyr/bluetooth/gap.h>
#include <zephyr/bluetooth/conn.h>
#include <zephyr/sys/printk.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/dt-bindings/gpio/nordic-nrf-gpio.h>

LOG_MODULE_REGISTER(BLE_LowPower, LOG_LEVEL_INF);

#define DEVICE_NAME CONFIG_BT_DEVICE_NAME
#define DEVICE_NAME_LEN (sizeof(DEVICE_NAME) - 1)

static const struct gpio_dt_spec led0 = GPIO_DT_SPEC_GET(DT_ALIAS(led0), gpios);

static const struct bt_data ad[] = {
    BT_DATA_BYTES(BT_DATA_FLAGS, BT_LE_AD_GENERAL | BT_LE_AD_NO_BREDR),
    BT_DATA(BT_DATA_NAME_COMPLETE, DEVICE_NAME, DEVICE_NAME_LEN),
};

static unsigned char url_data[] = {
    0x17,
    '/', '/', 'a', 'c', 'a', 'd', 'e', 'm', 'y', '.',
    'n', 'o', 'r', 'd', 'i', 'c', 's', 'e', 'm', 'i', '.',
    'c', 'o', 'm'
};

static const struct bt_data sd[] = {
    BT_DATA(BT_DATA_URI, url_data, sizeof(url_data)),
};

static bool device_connected = false;

static void connected(struct bt_conn *conn, uint8_t err)
{
    if (err) {
        LOG_ERR("Connection failed (err 0x%02x)\n", err);
    } else {
        LOG_INF("Device connected\n");
        device_connected = true;
    }
}

static void disconnected(struct bt_conn *conn, uint8_t reason)
{
    LOG_INF("Device disconnected (reason 0x%02x)\n", reason);
    device_connected = false;

    int err = bt_le_adv_start(BT_LE_ADV_CONN, ad, ARRAY_SIZE(ad), sd, ARRAY_SIZE(sd));
    if (err) {
        LOG_ERR("Failed to restart advertising (err %d)\n", err);
    } else {
        LOG_INF("Advertising successfully restarted (connectable)\n");
    }
}

BT_CONN_CB_DEFINE(conn_callbacks) = {
    .connected = connected,
    .disconnected = disconnected,
};

int main(void)
{
    int err;

    if (!gpio_is_ready_dt(&led0)) {
        LOG_ERR("Error: LED device %s is not ready\n", led0.port->name);
        return -1;
    }

    err = gpio_pin_configure_dt(&led0, GPIO_OUTPUT_INACTIVE);
    if (err) {
        LOG_ERR("Error: Failed to configure LED pin %d (err %d)\n", led0.pin, err);
        return -1;
    }

    LOG_INF("LED configured, initially off.");

    err = bt_enable(NULL);
    if (err) {
        LOG_ERR("Bluetooth initialization failed (err %d)\n", err);
        return -1;
    }
    LOG_INF("Bluetooth initialized\n");

    err = bt_le_adv_start(BT_LE_ADV_CONN, ad, ARRAY_SIZE(ad), sd, ARRAY_SIZE(sd));
    if (err) {
        LOG_ERR("Advertising failed to start (err %d)\n", err);
        return -1;
    }
    LOG_INF("Advertising successfully started (connectable)\n");

    while (1) {
        if (device_connected) {
            gpio_pin_toggle_dt(&led0);
            k_sleep(K_MSEC(500));
        } else {
            gpio_pin_set_dt(&led0, 0);
            k_sleep(K_MSEC(1000));
        }
    }

    return 0;
}
```


## PlatformIO

This Bluetooth radio example program is specifically designed for development on the PlatformIO platform. The main advantage of choosing PlatformIO is that it provides an integrated development environment that greatly simplifies the setup, compilation and burn-in process of embedded projects, making it easier and faster for even beginners to start developing Bluetooth applications.

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/BLE.gif" alt="XIAO nRF54L15 Ultra-low Power Consumption in System Off Mode" style={{width:600, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Cell Phone Connection XIAO nRF54L15</em></p>
</div>


### BLE Advertising Code

```cpp
#include <stdio.h>

#include <zephyr/bluetooth/bluetooth.h>
#include <zephyr/bluetooth/hci.h>
#include <zephyr/bluetooth/conn.h>
#include <zephyr/bluetooth/uuid.h>
#include <zephyr/bluetooth/gatt.h>

#define BT_UUID_ONOFF_VAL BT_UUID_128_ENCODE(0x8e7f1a23, 0x4b2c, 0x11ee, 0xbe56, 0x0242ac120002)
#define BT_UUID_ONOFF     BT_UUID_DECLARE_128(BT_UUID_ONOFF_VAL)
#define BT_UUID_ONOFF_ACTION_VAL \
    BT_UUID_128_ENCODE(0x8e7f1a24, 0x4b2c, 0x11ee, 0xbe56, 0x0242ac120002)
#define BT_UUID_ONOFF_ACTION BT_UUID_DECLARE_128(BT_UUID_ONOFF_ACTION_VAL)

#define BT_UUID_ONOFF_READ_VAL \
    BT_UUID_128_ENCODE(0x8e7f1a25, 0x4b2c, 0x11ee, 0xbe56, 0x0242ac120003)
#define BT_UUID_ONOFF_READ BT_UUID_DECLARE_128(BT_UUID_ONOFF_READ_VAL)

static uint8_t onoff_flag = 0;

static const struct bt_data ad[] = {
	BT_DATA_BYTES(BT_DATA_FLAGS, (BT_LE_AD_GENERAL | BT_LE_AD_NO_BREDR)),
	BT_DATA(BT_DATA_NAME_COMPLETE, CONFIG_BT_DEVICE_NAME, sizeof(CONFIG_BT_DEVICE_NAME) - 1),
};

static const struct bt_data sd[] = {
	BT_DATA_BYTES(BT_DATA_UUID128_ALL, BT_UUID_ONOFF_VAL),
};

static ssize_t read_onoff_val(struct bt_conn *conn, const struct bt_gatt_attr *attr,
                  void *buf, uint16_t len, uint16_t offset)
{
    const uint8_t *value = attr->user_data;
    return bt_gatt_attr_read(conn, attr, buf, len, offset, value, sizeof(*value));
}

static ssize_t write_onoff_val(struct bt_conn *conn, const struct bt_gatt_attr *attr,
			       const void *buf, uint16_t len, uint16_t offset, uint8_t flags)
{
	uint8_t val;

	if (len != 1U) {
		return BT_GATT_ERR(BT_ATT_ERR_INVALID_ATTRIBUTE_LEN);
	}

	if (offset != 0) {
		return BT_GATT_ERR(BT_ATT_ERR_INVALID_OFFSET);
	}

	val = *((uint8_t *)buf);

	if (val == 0x00U) {
		printf("Write: 0\n");
		onoff_flag = 0;
	} else if (val == 0x01U) {
		printf("Write: 1\n");
		onoff_flag = 1;
	} else {
		return BT_GATT_ERR(BT_ATT_ERR_VALUE_NOT_ALLOWED);
	}

	return len;
}

BT_GATT_SERVICE_DEFINE(lbs_svc, 
    BT_GATT_PRIMARY_SERVICE(BT_UUID_ONOFF),
    BT_GATT_CHARACTERISTIC(BT_UUID_ONOFF_ACTION, BT_GATT_CHRC_WRITE,
        BT_GATT_PERM_WRITE, NULL, write_onoff_val, NULL),
    BT_GATT_CHARACTERISTIC(BT_UUID_ONOFF_READ, BT_GATT_CHRC_READ,
        BT_GATT_PERM_READ, read_onoff_val, NULL, &onoff_flag),
);

static void connected(struct bt_conn *conn, uint8_t err)
{
	if (err != 0U) {
		printf("Connection failed (%02x, %s)\n", err, bt_hci_err_to_str(err));
		return;
	}

	printf("Connected\n");
}

static void disconnected(struct bt_conn *conn, uint8_t reason)
{
	printf("Disconnected (%02x, %s)\n", reason, bt_hci_err_to_str(reason));
}

BT_CONN_CB_DEFINE(conn_callbacks) = {
	.connected = connected,
	.disconnected = disconnected,
};

int main(void)
{
	int err;

	err = bt_enable(NULL);
	if (err < 0) {
		printf("Bluetooth enable failed (err %d)", err);
		return err;
	}

	err = bt_le_adv_start(BT_LE_ADV_CONN_FAST_1, ad, ARRAY_SIZE(ad), sd, ARRAY_SIZE(sd));
	if (err < 0) {
		printf("Advertising failed to start (err %d)", err);
		return err;
	}

	printf("Bluetooth enabled");
	return 0;
}
```

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

