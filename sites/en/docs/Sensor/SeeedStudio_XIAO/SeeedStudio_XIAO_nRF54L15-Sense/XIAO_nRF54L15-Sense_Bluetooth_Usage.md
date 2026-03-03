---
title: Seeed Studio XIAO nRF54L15 Sense BLE Usage
description: |
  Complete guide for using Bluetooth Low Energy (BLE) with XIAO nRF54L15 Sense, including advertising, connections, GATT services, and power optimization.
image: https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/1-101991422-XIAO-nRF54L15-Sense.webp
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

The following sample code is designed for PlatformIO, but it is also compatible with the nRF Connect SDK.

:::tip
Based on VS Code, if you want to use the following case on the nRF Connect SDK, please refer to the provided connection, add the app.overlay file and modify the contents in prj.conf

[XIAO nRF54L15 Add overlay file and modify conf file](https://wiki.seeedstudio.com/xiao_nrf54l15_sense_getting_started/#/add-overlay-and-modify-the-conf-file/).

:::

## BLE Oberver

A simple application demonstrating Bluetooth Low Energy Observer role functionality. The application will periodically scan for devices nearby. If any found, prints the address of the device, the RSSI value, the Advertising type, and the Advertising data length to the console.

If the used Bluetooth Low Energy Controller supports Extended Scanning, you may enable `CONFIG_BT_EXT_ADV` in the project configuration file `prj.conf`. Refer to the project configuration file for further details.

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/obersever.png" alt="XIAO nRF54L15 Observer" style={{width:900, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Scan Result</em></p>
</div>

### Add XIAO nRF54L15 Board

To add the XIAO nRF54L15(Sense) board to NCS (nRF Connect SDK), you can refer to the ["Getting Started"](https://wiki.seeedstudio.com/xiao_nrf54l15_sense_getting_started/) guide on the Seeed Studio Wiki. This guide will provide detailed instructions on the process.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### BLE Observer Code

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/bluetooth/observer" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

**Main.c**

```cpp
#include <zephyr/sys/printk.h>
#include <zephyr/bluetooth/bluetooth.h>

int observer_start(void);

int main(void)
{
 int err;

 printk("Starting Observer Demo\n");

 err = bt_enable(NULL);
 if (err) {
  printk("Bluetooth init failed (err %d)\n", err);
  return 0;
 }

 (void)observer_start();

 printk("Exiting %s thread.\n", __func__);
 return 0;
}
```

:::note

- `main.c:` Initializes the Bluetooth subsystem and starts the observer demo.

- `bt_enable(NULL):` Initializes the Bluetooth Subsystem.

- `observer_start():` Calls the function that starts the observer.

- `printk("Exiting %s thread.\n", __func__):` Prints a message when the main function is exiting.

:::

**observer.c**

```cpp
#include <zephyr/sys/printk.h>
#include <zephyr/bluetooth/bluetooth.h>
#include <zephyr/bluetooth/hci.h>

#define NAME_LEN 30

static void device_found(const bt_addr_le_t *addr, int8_t rssi, uint8_t type,
    struct net_buf_simple *ad)
{
 char addr_str[BT_ADDR_LE_STR_LEN];

 bt_addr_le_to_str(addr, addr_str, sizeof(addr_str));
 printk("Device found: %s (RSSI %d), type %u, AD data len %u\n",
        addr_str, rssi, type, ad->len);
}

#if defined(CONFIG_BT_EXT_ADV)
static bool data_cb(struct bt_data *data, void *user_data)
{
 char *name = user_data;
 uint8_t len;

 switch (data->type) {
 case BT_DATA_NAME_SHORTENED:
 case BT_DATA_NAME_COMPLETE:
  len = MIN(data->data_len, NAME_LEN - 1);
  (void)memcpy(name, data->data, len);
  name[len] = '\0';
  return false;
 default:
  return true;
 }
}

static const char *phy2str(uint8_t phy)
{
 switch (phy) {
 case BT_GAP_LE_PHY_NONE: return "No packets";
 case BT_GAP_LE_PHY_1M: return "LE 1M";
 case BT_GAP_LE_PHY_2M: return "LE 2M";
 case BT_GAP_LE_PHY_CODED: return "LE Coded";
 default: return "Unknown";
 }
}

static void scan_recv(const struct bt_le_scan_recv_info *info,
        struct net_buf_simple *buf)
{
 char le_addr[BT_ADDR_LE_STR_LEN];
 char name[NAME_LEN];
 uint8_t data_status;
 uint16_t data_len;

 (void)memset(name, 0, sizeof(name));

 data_len = buf->len;
 bt_data_parse(buf, data_cb, name);

 data_status = BT_HCI_LE_ADV_EVT_TYPE_DATA_STATUS(info->adv_props);

 bt_addr_le_to_str(info->addr, le_addr, sizeof(le_addr));
 printk("[DEVICE]: %s, AD evt type %u, Tx Pwr: %i, RSSI %i "
        "Data status: %u, AD data len: %u Name: %s "
        "C:%u S:%u D:%u SR:%u E:%u Pri PHY: %s, Sec PHY: %s, "
        "Interval: 0x%04x (%u ms), SID: %u\n",
        le_addr, info->adv_type, info->tx_power, info->rssi,
        data_status, data_len, name,
        (info->adv_props & BT_GAP_ADV_PROP_CONNECTABLE) != 0,
        (info->adv_props & BT_GAP_ADV_PROP_SCANNABLE) != 0,
        (info->adv_props & BT_GAP_ADV_PROP_DIRECTED) != 0,
        (info->adv_props & BT_GAP_ADV_PROP_SCAN_RESPONSE) != 0,
        (info->adv_props & BT_GAP_ADV_PROP_EXT_ADV) != 0,
        phy2str(info->primary_phy), phy2str(info->secondary_phy),
        info->interval, info->interval * 5 / 4, info->sid);
}

static struct bt_le_scan_cb scan_callbacks = {
 .recv = scan_recv,
};
#endif /* CONFIG_BT_EXT_ADV */

int observer_start(void)
{
 struct bt_le_scan_param scan_param = {
  .type       = BT_LE_SCAN_TYPE_PASSIVE,
  .options    = BT_LE_SCAN_OPT_FILTER_DUPLICATE,
  .interval   = BT_GAP_SCAN_FAST_INTERVAL,
  .window     = BT_GAP_SCAN_FAST_WINDOW,
 };
 int err;

#if defined(CONFIG_BT_EXT_ADV)
 bt_le_scan_cb_register(&scan_callbacks);
 printk("Registered scan callbacks\n");
#endif /* CONFIG_BT_EXT_ADV */

 err = bt_le_scan_start(&scan_param, device_found);
 if (err) {
  printk("Start scanning failed (err %d)\n", err);
  return err;
 }
 printk("Started scanning...\n");

 return 0;
}
```

:::note

- `device_found:`Callback function that is called when a device is found during a scan. It prints the device's address, RSSI, type, and AD data length.

- `scan_recv:` Callback function for extended advertising that prints detailed information about the received advertisement packet, including the device address, Tx power, RSSI, and advertisement data.

- `data_cb:`Callback function used by bt_data_parse to extract the device name from the advertisement data. It handles both shortened and complete names.

- `phy2str:` Helper function that converts the PHY (Physical Layer) value to a human-readable string (e.g., "LE 1M", "LE 2M", etc.).

- `observer_start:`The main function to start the observer. It defines the scan parameters and starts the scanning process.

- `bt_le_scan_start:` Function that starts the BLE scan with the specified parameters and a callback function for when devices are found.

:::

## BLE Advertising

This Bluetooth advertising tutorial is based on the official [sample](https://academy.nordicsemi.com/courses/bluetooth-low-energy-fundamentals/lessons/lesson-2-bluetooth-le-advertising/topic/blefund-lesson-2-exercise-1/) code modified to run on the Nordic Connect SDK. With our development board combined with the official documentation, you can dive into more Bluetooth [applications](https://academy.nordicsemi.com/courses/bluetooth-low-energy-fundamentals/).

While the phone is not connected to the XIAO nRF54L15, the on-board indicator will remain permanently lit. Once the phone is successfully connected, the indicator will begin flashing to indicate that a connection has been established.

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/BLE.gif" alt="XIAO nRF54L15 Ultra-low Power Consumption in System Off Mode" style={{width:900, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Cell Phone Connection XIAO nRF54L15</em></p>
</div>

### BLE Advertising Software Install

For this example, you'll need to download the official Bluetooth testing [app](https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-mobile), nRF Connect, on your mobile phone.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrfconnect_app.png" style={{width:600, height:'auto'}}/></div>

Once you've flashed the program onto your XIAO nRF54L15 Sense board, you can open the nRF Connect app's main page to interact with it.

- Step 1 . in the nRF Connect app, click the scan button in the top right corner to start scanning for Bluetooth devices.

- Step 2 .Next, enter the name of your XIAO nRF54L15 Sense device  into the "Name" field. This will help you filter and quickly locate your device.

- Step 3 .In the scan results area, find your XIAO nRF54L15 Sense device and click the "Connect" button next to it .

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

To add the XIAO nRF54L15(Sense) board to NCS (nRF Connect SDK), you can refer to the ["Getting Started"](https://wiki.seeedstudio.com/xiao_nrf54l15_sense_getting_started/) guide on the Seeed Studio Wiki. This guide will provide detailed instructions on the process.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
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

:::note

- `ad:` Defines the advertising data, including the flags for general discoverable and no BR/EDR support, and the complete device name.

- `sd:` Defines the scan response data, which contains a URI (Uniform Resource Identifier).

- `connected:` This callback function is executed when a Bluetooth device successfully connects. It sets the device_connected flag to true.

- `disconnected:` This callback function is executed when a Bluetooth device disconnects. It sets the device_connected flag to false and restarts advertising to allow new connections.

- `conn_callbacks:` A structure that defines the connection callbacks, assigning the connected and disconnected functions to their respective events.

- `main:` The main function of the program.

- `gpio_is_ready_dt:` Checks if the LED GPIO device is ready.

- `gpio_pin_configure_dt:` Configures the LED pin as an output, initially set to inactive.

- `bt_enable(NULL):` Initializes the Bluetooth subsystem.

- `bt_le_adv_start:` Starts Bluetooth advertising. This code starts connectable advertising using the ad and sd data.

- `while (1):`An infinite loop that controls the LED's behavior based on the connection status.

- `gpio_pin_toggle_dt:`Toggles the LED on and off.

- `k_sleep:`Puts the thread to sleep for a specified amount of time.

- `device_connected:`A boolean flag that tracks the connection status. The LED blinks at 500ms intervals when a device is connected. When a device is not connected, the LED is turned off, and the program sleeps for 1000ms.

- `LOG_INF, LOG_ERR:`Functions for logging information and errors.

:::

## BLE Central/GATT Write

Together, these code files implement a Bluetooth Low Energy (BLE) Central device. The Central continuously scans for nearby Bluetooth peripherals and automatically establishes a connection when it finds a specific device (RSSI greater than -50). Once the connection is established, it performs a GATT (Generic Attribute Profile) MTU (Maximum Transmission Unit) exchange to optimize data transfer efficiency.

The core function of the program is to continuously send GATT Write Without Response commands to the connected peripheral. This is often used for performance testing, for example to measure the data throughput or write rate of a Bluetooth connection.

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/gatt.png" alt="XIAO nRF54L15 gatt" style={{width:900, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>gatt Result</em></p>
</div>

### Add XIAO nRF54L15 Board

To add the XIAO nRF54L15(Sense) board to NCS (nRF Connect SDK), you can refer to the ["Getting Started"](https://wiki.seeedstudio.com/xiao_nrf54l15_sense_getting_started/) guide on the Seeed Studio Wiki. This guide will provide detailed instructions on the process.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### BLE Central/GATT Code

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/bluetooth/central_gatt_write" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

**Main.c**

```cpp
#include <stdint.h>

extern uint32_t central_gatt_write(uint32_t count);

int main(void)
{
 (void)central_gatt_write(0U);
 return 0;
}

```

:::note

- `main:` The entry point of the program. It calls the `central_gatt_write`function with a count of`0U`, which means the write commands will be sent indefinitely.

:::
**central_gatt_write.c**

```cpp
/*
 * Copyright (c) 2022 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: Apache-2.0
 */

#include <zephyr/kernel.h>
#include <zephyr/sys/printk.h>

#include <zephyr/bluetooth/bluetooth.h>
#include <zephyr/bluetooth/conn.h>
#include <zephyr/bluetooth/gatt.h>
#include <zephyr/bluetooth/hci.h>

extern int mtu_exchange(struct bt_conn *conn);
extern int write_cmd(struct bt_conn *conn);
extern struct bt_conn *conn_connected;
extern uint32_t last_write_rate;
extern void (*start_scan_func)(void);

static void device_found(const bt_addr_le_t *addr, int8_t rssi, uint8_t type,
    struct net_buf_simple *ad)
{
 char dev[BT_ADDR_LE_STR_LEN];
 struct bt_conn *conn;
 int err;

 bt_addr_le_to_str(addr, dev, sizeof(dev));
 printk("[DEVICE]: %s, AD evt type %u, AD data len %u, RSSI %i\n",
        dev, type, ad->len, rssi);

 /* We're only interested in connectable events */
 if (type != BT_GAP_ADV_TYPE_ADV_IND &&
     type != BT_GAP_ADV_TYPE_ADV_DIRECT_IND) {
  return;
 }

 /* connect only to devices in close proximity */
 if (rssi < -50) {
  return;
 }

 err = bt_le_scan_stop();
 if (err) {
  printk("%s: Stop LE scan failed (err %d)\n", __func__, err);
  return;
 }

 err = bt_conn_le_create(addr, BT_CONN_LE_CREATE_CONN,
    BT_LE_CONN_PARAM_DEFAULT, &conn);
 if (err) {
  printk("%s: Create conn failed (err %d)\n", __func__, err);
  start_scan_func();
 } else {
  bt_conn_unref(conn);
 }
}

static void start_scan(void)
{
 int err;

 err = bt_le_scan_start(BT_LE_SCAN_ACTIVE, device_found);
 if (err) {
  printk("%s: Scanning failed to start (err %d)\n", __func__,
         err);
  return;
 }

 printk("%s: Scanning successfully started\n", __func__);
}

void mtu_updated(struct bt_conn *conn, uint16_t tx, uint16_t rx)
{
 printk("Updated MTU: TX: %d RX: %d bytes\n", tx, rx);
}

static struct bt_gatt_cb gatt_callbacks = {
 .att_mtu_updated = mtu_updated
};

uint32_t central_gatt_write(uint32_t count)
{
 int err;

 err = bt_enable(NULL);
 if (err) {
  printk("Bluetooth init failed (err %d)\n", err);
  return 0U;
 }
 printk("Bluetooth initialized\n");

 bt_gatt_cb_register(&gatt_callbacks);

 conn_connected = NULL;
 last_write_rate = 0U;

 start_scan_func = start_scan;
 start_scan_func();

 while (true) {
  struct bt_conn *conn = NULL;

  if (conn_connected) {
   /* Get a connection reference to ensure that a
    * reference is maintained in case disconnected
    * callback is called while we perform GATT Write
    * command.
    */
   conn = bt_conn_ref(conn_connected);
  }

  if (conn) {
   (void)write_cmd(conn);
   bt_conn_unref(conn);

   if (count) {
    count--;
    if (!count) {
     break;
    }
   }

   k_yield();
  } else {
   k_sleep(K_SECONDS(1));
  }
 }

 return last_write_rate;
}

```

:::note

- `device_found:` Callback function that is triggered when a new device is found during a scan. It prints information about the found device and attempts to connect to devices that are both connectable and in close proximity (RSSI greater than -50). It stops the scanning process before creating a connection.

- `start_scan:` Function that starts an active BLE scan with`device_found` as the callback for found devices.

- `mtu_updated:` Callback function for GATT MTU updates that prints the new TX and RX MTU sizes.

- `gatt_callbacks:`A structure that registers the` mtu_updated `function as the callback for GATT events.

- `central_gatt_write:`The main function of the central device application. It initializes the Bluetooth subsystem, registers the GATT callbacks, and starts scanning for devices. It then enters a loop, where it waits for a connection and repeatedly calls write_cmd to perform GATT writes. The loop can be configured to run for a specific number of times or indefinitely.

:::

**gatt_write_common.c**

```cpp
/*
 * Copyright (c) 2022 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: Apache-2.0
 */

#include <zephyr/kernel.h>
#include <zephyr/sys/printk.h>

#include <zephyr/bluetooth/bluetooth.h>
#include <zephyr/bluetooth/conn.h>
#include <zephyr/bluetooth/gatt.h>
#include <zephyr/bluetooth/hci.h>

static struct bt_gatt_exchange_params mtu_exchange_params;
static uint32_t write_count;
static uint32_t write_len;
static uint32_t write_rate;
struct bt_conn *conn_connected;
uint32_t last_write_rate;
void (*start_scan_func)(void);

static void write_cmd_cb(struct bt_conn *conn, void *user_data)
{
 static uint32_t cycle_stamp;
 uint64_t delta;

 delta = k_cycle_get_32() - cycle_stamp;
 delta = k_cyc_to_ns_floor64(delta);

 if (delta == 0) {
  /* Skip division by zero */
  return;
 }

 /* if last data rx-ed was greater than 1 second in the past,
  * reset the metrics.
  */
 if (delta > (1U * NSEC_PER_SEC)) {
  printk("%s: count= %u, len= %u, rate= %u bps.\n", __func__,
         write_count, write_len, write_rate);

  last_write_rate = write_rate;

  write_count = 0U;
  write_len = 0U;
  write_rate = 0U;
  cycle_stamp = k_cycle_get_32();
 } else {
  uint16_t len;

  write_count++;

  /* Extract the 16-bit data length stored in user_data */
  len = (uint32_t)user_data & 0xFFFF;

  write_len += len;
  write_rate = ((uint64_t)write_len << 3) * (1U * NSEC_PER_SEC) /
        delta;
 }
}

static void mtu_exchange_cb(struct bt_conn *conn, uint8_t err,
       struct bt_gatt_exchange_params *params)
{
 printk("%s: MTU exchange %s (%u)\n", __func__,
        err == 0U ? "successful" : "failed",
        bt_gatt_get_mtu(conn));
}

static int mtu_exchange(struct bt_conn *conn)
{
 int err;

 printk("%s: Current MTU = %u\n", __func__, bt_gatt_get_mtu(conn));

 mtu_exchange_params.func = mtu_exchange_cb;

 printk("%s: Exchange MTU...\n", __func__);
 err = bt_gatt_exchange_mtu(conn, &mtu_exchange_params);
 if (err) {
  printk("%s: MTU exchange failed (err %d)", __func__, err);
 }

 return err;
}

static void connected(struct bt_conn *conn, uint8_t conn_err)
{
 struct bt_conn_info conn_info;
 char addr[BT_ADDR_LE_STR_LEN];
 int err;

 bt_addr_le_to_str(bt_conn_get_dst(conn), addr, sizeof(addr));

 if (conn_err) {
  printk("%s: Failed to connect to %s (%u)\n", __func__, addr,
         conn_err);
  return;
 }

 err = bt_conn_get_info(conn, &conn_info);
 if (err) {
  printk("Failed to get connection info (%d).\n", err);
  return;
 }

 printk("%s: %s role %u\n", __func__, addr, conn_info.role);

 conn_connected = bt_conn_ref(conn);

 (void)mtu_exchange(conn);

#if defined(CONFIG_BT_SMP)
 if (conn_info.role == BT_CONN_ROLE_CENTRAL) {
  err = bt_conn_set_security(conn, BT_SECURITY_L2);
  if (err) {
   printk("Failed to set security (%d).\n", err);
  }
 }
#endif
}

static void disconnected(struct bt_conn *conn, uint8_t reason)
{
 struct bt_conn_info conn_info;
 char addr[BT_ADDR_LE_STR_LEN];
 int err;

 bt_addr_le_to_str(bt_conn_get_dst(conn), addr, sizeof(addr));

 err = bt_conn_get_info(conn, &conn_info);
 if (err) {
  printk("Failed to get connection info (%d).\n", err);
  return;
 }

 printk("%s: %s role %u, reason %u %s\n", __func__, addr, conn_info.role,
        reason, bt_hci_err_to_str(reason));

 conn_connected = NULL;

 bt_conn_unref(conn);

 if (conn_info.role == BT_CONN_ROLE_CENTRAL) {
  start_scan_func();
 }
}

static bool le_param_req(struct bt_conn *conn, struct bt_le_conn_param *param)
{
 printk("%s: int (0x%04x, 0x%04x) lat %u to %u\n", __func__,
        param->interval_min, param->interval_max, param->latency,
        param->timeout);

 return true;
}

static void le_param_updated(struct bt_conn *conn, uint16_t interval,
        uint16_t latency, uint16_t timeout)
{
 printk("%s: int 0x%04x lat %u to %u\n", __func__, interval,
        latency, timeout);
}

#if defined(CONFIG_BT_SMP)
static void security_changed(struct bt_conn *conn, bt_security_t level,
        enum bt_security_err err)
{
 printk("%s: to level %u, err %s(%u)\n", __func__, level, bt_security_err_to_str(err), err);
}
#endif

BT_CONN_CB_DEFINE(conn_callbacks) = {
 .connected = connected,
 .disconnected = disconnected,
 .le_param_req = le_param_req,
 .le_param_updated = le_param_updated,
#if defined(CONFIG_BT_SMP)
 .security_changed = security_changed,
#endif
};

int write_cmd(struct bt_conn *conn)
{
 static uint8_t data[BT_ATT_MAX_ATTRIBUTE_LEN] = {0, };
 static uint16_t data_len;
 uint16_t data_len_max;
 int err;

 data_len_max = bt_gatt_get_mtu(conn) - 3;
 if (data_len_max > BT_ATT_MAX_ATTRIBUTE_LEN) {
  data_len_max = BT_ATT_MAX_ATTRIBUTE_LEN;
 }

#if TEST_FRAGMENTATION_WITH_VARIABLE_LENGTH_DATA
 /* Use incremental length data for every write command */
 /* TODO: Include test case in BabbleSim tests */
 static bool decrement;

 if (decrement) {
  data_len--;
  if (data_len <= 1) {
   data_len = 1;
   decrement = false;
  }
 } else {
  data_len++;
  if (data_len >= data_len_max) {
   data_len = data_len_max;
   decrement = true;
  }
 }
#else
 /* Use fixed length data for every write command */
 data_len = data_len_max;
#endif

 /* Pass the 16-bit data length value (instead of reference) in
  * user_data so that unique value is pass for each write callback.
  * Using handle 0x0001, we do not care if it is writable, we just want
  * to transmit the data across.
  */
 err = bt_gatt_write_without_response_cb(conn, 0x0001, data, data_len,
      false, write_cmd_cb,
      (void *)((uint32_t)data_len));
 if (err) {
  printk("%s: Write cmd failed (%d).\n", __func__, err);
 }

 return err;
}
```

:::note

- `write_cmd_cb:`A callback function for bt_gatt_write_without_response_cb. It calculates and prints the write count, length, and data rate in bits per second (bps). It resets these metrics if the time since the last data was received exceeds one second.

- `mtu_exchange_cb:`A callback function that is called after an MTU (Maximum Transmission Unit) exchange procedure. It prints whether the exchange was successful or failed and displays the new MTU size.

- `mtu_exchange:`Initiates an MTU exchange procedure. It first prints the current MTU and then attempts to exchange it, using mtu_exchange_cb as the callback.

- `connected:`A callback function executed when a connection is established. It prints the address of the connected device and its role. It then stores a reference to the connection and starts an MTU exchange. If security is enabled, it attempts to set the security level.

- `disconnected:`A callback function executed when a connection is terminated. It prints the address of the disconnected device, its role, and the reason for the disconnection. It clears the connection reference and, if the device was a central, restarts the scan.

- `le_param_req:` A callback function for handling LE connection parameter update requests from the peripheral. It prints the requested parameters (interval, latency, and timeout).

- `le_param_updated:` A callback function that is called when the connection parameters are successfully updated. It prints the new interval, latency, and timeout values.

- `security_changed:`A callback function that is called when the security level of a connection is changed.

- `write_cmd:` A function that prepares and sends a GATT write command without a response. It determines the maximum data length based on the current MTU and sends the data to the handle 0x0001. It uses the write_cmd_cb as a callback.

:::

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
