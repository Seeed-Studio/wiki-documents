---
title: XIAO nRF54L15 功耗示例 (PlatformIO)
description: |
image: https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/1-101991422-XIAO-nRF54L15-Sense.webp
slug: /cn/xiao_nrf54l15_sense_power_consumptions
sidebar_position: 2
keywords:
  - XIAO
  - nRF54L15
last_update:
  date: 9/11/2025
  author: Jason
---


以下示例代码专为 PlatformIO 设计，但也与 nRF Connect SDK 兼容。

:::tip
基于 VS Code，如果您想在 nRF Connect SDK 上使用以下案例，请参考提供的连接，添加 app.overlay 文件并修改 prj.conf 中的内容

[XIAO nRF54L15 添加 overlay 文件并修改 conf 文件](https://wiki.seeedstudio.com/cn/xiao_nrf54l15_sense_getting_started/#/add-overlay-and-modify-the-conf-file/)。

:::

## 蓝牙连接

本节详细介绍了设备作为蓝牙低功耗 (BLE) 外设主动广播时的功耗特性。设备实现了自定义 BLE 服务，允许其他中心设备连接并与其交互。

以下图表展示了设备持续广播时的典型功耗配置文件：

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/new/7.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:900, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>BLE 广播期间的设备功耗</em></p>
</div>

如图所示，设备表现出与每个广播事件相对应的周期性电流峰值，随后是较低电流消耗的时期。广播期间的平均功耗高于系统关闭模式，反映了广播所需的主动无线电操作。

---

### BLE 广播代码示例

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-ble" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

以下是用于测试 BLE 广播期间功耗的代码：

```c
#include <stdio.h>

#include <zephyr/bluetooth/bluetooth.h>
#include <zephyr/bluetooth/hci.h>
#include <zephyr/bluetooth/conn.h>
#include <zephyr/bluetooth/uuid.h>
#include <zephyr/bluetooth/gatt.h>

// Custom 128-bit UUID for the ONOFF Service
#define BT_UUID_ONOFF_VAL BT_UUID_128_ENCODE(0x8e7f1a23, 0x4b2c, 0x11ee, 0xbe56, 0x0242ac120002)
#define BT_UUID_ONOFF     BT_UUID_DECLARE_128(BT_UUID_ONOFF_VAL)

// Custom 128-bit UUID for the ONOFF Action Characteristic (Write)
#define BT_UUID_ONOFF_ACTION_VAL \
    BT_UUID_128_ENCODE(0x8e7f1a24, 0x4b2c, 0x11ee, 0xbe56, 0x0242ac120002)
#define BT_UUID_ONOFF_ACTION BT_UUID_DECLARE_128(BT_UUID_ONOFF_ACTION_VAL)

// Custom 128-bit UUID for the ONOFF Read Characteristic (Read)
#define BT_UUID_ONOFF_READ_VAL \
    BT_UUID_128_ENCODE(0x8e7f1a25, 0x4b2c, 0x11ee, 0xbe56, 0x0242ac120003)
#define BT_UUID_ONOFF_READ BT_UUID_DECLARE_128(BT_UUID_ONOFF_READ_VAL)

// Static flag to hold the on/off state, initialized to 0 (off)
static uint8_t onoff_flag = 0;

// Advertising data: flags and complete device name
static const struct bt_data ad[] = {
 BT_DATA_BYTES(BT_DATA_FLAGS, (BT_LE_AD_GENERAL | BT_LE_AD_NO_BREDR)), // General Discoverable, No BR/EDR
 BT_DATA(BT_DATA_NAME_COMPLETE, CONFIG_BT_DEVICE_NAME, sizeof(CONFIG_BT_DEVICE_NAME) - 1), // Device Name
};

// Scan response data: include the 128-bit UUID of our custom service
static const struct bt_data sd[] = {
 BT_DATA_BYTES(BT_DATA_UUID128_ALL, BT_UUID_ONOFF_VAL), // Service UUID
};

/**
 * @brief GATT read callback for the ONOFF Read characteristic.
 *
 * This function is called when a connected central device attempts to read
 * the ONOFF Read characteristic. It returns the current value of onoff_flag.
 *
 * @param conn Pointer to the connection object.
 * @param attr Pointer to the GATT attribute being read.
 * @param buf Buffer to store the read value.
 * @param len Maximum length of the buffer.
 * @param offset Offset from which to read the attribute value.
 * @return Number of bytes read, or a negative error code.
 */
static ssize_t read_onoff_val(struct bt_conn *conn, const struct bt_gatt_attr *attr,
                  void *buf, uint16_t len, uint16_t offset)
{
    // The user_data field of the attribute points to onoff_flag
    const uint8_t *value = attr->user_data;
    // Perform the GATT attribute read operation
    return bt_gatt_attr_read(conn, attr, buf, len, offset, value, sizeof(*value));
}

/**
 * @brief GATT write callback for the ONOFF Action characteristic.
 *
 * This function is called when a connected central device attempts to write
 * to the ONOFF Action characteristic. It updates the onoff_flag based on
 * the received value.
 *
 * @param conn Pointer to the connection object.
 * @param attr Pointer to the GATT attribute being written.
 * @param buf Buffer containing the value to be written.
 * @param len Length of the value in the buffer.
 * @param offset Offset at which to write the attribute value.
 * @param flags Flags for the write operation.
 * @return Number of bytes written, or a negative error code.
 */
static ssize_t write_onoff_val(struct bt_conn *conn, const struct bt_gatt_attr *attr,
          const void *buf, uint16_t len, uint16_t offset, uint8_t flags)
{
 uint8_t val;

 // Ensure the length of the written data is 1 byte
 if (len != 1U) {
  return BT_GATT_ERR(BT_ATT_ERR_INVALID_ATTRIBUTE_LEN);
 }

 // Ensure the write operation starts from offset 0
 if (offset != 0) {
  return BT_GATT_ERR(BT_ATT_ERR_INVALID_OFFSET);
 }

 // Get the value from the buffer
 val = *((uint8_t *)buf);

 // Update onoff_flag based on the received value
 if (val == 0x00U) {
  printf("Write: 0\n");
  onoff_flag = 0; // Set to off
 } else if (val == 0x01U) {
  printf("Write: 1\n");
  onoff_flag = 1; // Set to on
 } else {
  // Return error if value is not 0 or 1
  return BT_GATT_ERR(BT_ATT_ERR_VALUE_NOT_ALLOWED);
 }

 return len; // Return number of bytes successfully written
}

// Define the custom GATT service and its characteristics
BT_GATT_SERVICE_DEFINE(lbs_svc, 
    BT_GATT_PRIMARY_SERVICE(BT_UUID_ONOFF), // Primary Service: ONOFF Service
    BT_GATT_CHARACTERISTIC(BT_UUID_ONOFF_ACTION, BT_GATT_CHRC_WRITE, // Characteristic: ONOFF Action (Write)
        BT_GATT_PERM_WRITE, NULL, write_onoff_val, NULL), // Permissions, callbacks
    BT_GATT_CHARACTERISTIC(BT_UUID_ONOFF_READ, BT_GATT_CHRC_READ, // Characteristic: ONOFF Read (Read)
        BT_GATT_PERM_READ, read_onoff_val, NULL, &onoff_flag), // Permissions, callbacks, user_data (onoff_flag)
);

/**
 * @brief Callback function for successful Bluetooth connection.
 *
 * @param conn Pointer to the connection object.
 * @param err Error code (0 if successful).
 */
static void connected(struct bt_conn *conn, uint8_t err)
{
 if (err != 0U) {
  printf("Connection failed (%02x, %s)\n", err, bt_hci_err_to_str(err));
  return;
 }

 printf("Connected\n");
}

/**
 * @brief Callback function for Bluetooth disconnection.
 *
 * @param conn Pointer to the connection object.
 * @param reason Reason for disconnection.
 */
static void disconnected(struct bt_conn *conn, uint8_t reason)
{
 printf("Disconnected (%02x, %s)\n", reason, bt_hci_err_to_str(reason));
}

// Define connection callbacks
BT_CONN_CB_DEFINE(conn_callbacks) = {
 .connected = connected,
 .disconnected = disconnected,
};

/**
 * @brief Main function of the application.
 *
 * Initializes the Bluetooth stack, starts advertising, and enters the main loop.
 * @return 0 on success, negative error code on failure.
 */
int main(void)
{
 int err;

 // Enable the Bluetooth stack
 err = bt_enable(NULL);
 if (err < 0) {
  printf("Bluetooth enable failed (err %d)", err);
  return err;
 }

 // Start BLE advertising
 err = bt_le_adv_start(BT_LE_ADV_CONN_FAST_1, ad, ARRAY_SIZE(ad), sd, ARRAY_SIZE(sd));
 if (err < 0) {
  printf("Advertising failed to start (err %d)", err);
  return err;
 }

 printf("Bluetooth enabled");
 return 0;
}
```

## 超低功耗状态

为了实现设备的极低功耗，我们在 **System Off** 模式下进行了功耗测试。System Off 模式是 Zephyr 操作系统提供的深度睡眠模式，在此模式下大部分外设和 CPU 都会关闭，仅保留必要的唤醒源（如 GPIO 中断）以最小化功耗。

以下图表展示了设备进入 System Off 模式后的典型功耗曲线：

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/new/6.png" alt="XIAO nRF54L15 Ultra-low Power Consumption in System Off Mode" style={{width:900, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>设备在 System Off 模式下的功耗</em></p>
</div>

如图所示，进入 System Off 模式后，功耗显著降低，仅维持在微安级别，这大大延长了电池寿命。当按下 `sw0` 按钮时，设备将从 System Off 模式唤醒并重新启动。

---

#### 功耗代码示例

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-lowpower" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

以下是用于测试上述 System Off 模式功耗的代码：

```c
/*
 * Copyright (c) 2019 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: Apache-2.0
 */
#include <inttypes.h>
#include <stdio.h>

#include <zephyr/device.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/drivers/hwinfo.h>
#include <zephyr/drivers/comparator.h>
#include <zephyr/kernel.h>
#include <zephyr/pm/device.h>
#include <zephyr/sys/poweroff.h>
#include <zephyr/sys/util.h>

static const struct gpio_dt_spec sw0 = GPIO_DT_SPEC_GET(DT_ALIAS(sw0), gpios);

void print_reset_cause(void)
{
 uint32_t reset_cause;

 hwinfo_get_reset_cause(&reset_cause);
 if (reset_cause & RESET_DEBUG) {
  printf("Reset by debugger.\n");
 } else if (reset_cause & RESET_CLOCK) {
  printf("Wakeup from System OFF by GRTC.\n");
 } else  {
  printf("Other wake up cause 0x%08X.\n", reset_cause);
 }
}

int main(void)
{
 int rc;
 const struct device *const cons = DEVICE_DT_GET(DT_CHOSEN(zephyr_console));

 if (!device_is_ready(cons)) {
  printf("%s: device not ready.\n", cons->name);
  return 0;
 }

 printf("\n%s system off demo\n", CONFIG_BOARD);
 print_reset_cause();


 /* configure sw0 as input, interrupt as level active to allow wake-up */
 rc = gpio_pin_configure_dt(&sw0, GPIO_INPUT);
 if (rc < 0) {
  printf("Could not configure sw0 GPIO (%d)\n", rc);
  return 0;
 }

 rc = gpio_pin_interrupt_configure_dt(&sw0, GPIO_INT_LEVEL_LOW);
 if (rc < 0) {
  printf("Could not configure sw0 GPIO interrupt (%d)\n", rc);
  return 0;
 }

 printf("Entering system off; press sw0 to restart\n");


 rc = pm_device_action_run(cons, PM_DEVICE_ACTION_SUSPEND);
 if (rc < 0) {
  printf("Could not suspend console (%d)\n", rc);
  return 0;
 }

 hwinfo_clear_reset_cause();
 sys_poweroff();

 return 0;
}
```

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
