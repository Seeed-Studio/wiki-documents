---
title: XIAO nRF54LM20A Sense 的 Bluetooth LE
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - bluetooth low energy
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/xiao_nrf54lm20a_ble.webp
slug: /xiao_nrf54lm20a_with_bluetooth_lowpower
sku: 100018440
last_update:
  date: 05/13/2026
  author: Zeller
createdAt: '2025-05-20'
updatedAt: '2026-06-15'
url: https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_with_bluetooth_lowpower/
---

# XIAO nRF54LM20A Sense 的 Bluetooth LE

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/xiao_nrf54lm20a_ble.png" style={{width:400, height:'auto'}}/></div>

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
                  立即获取 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>


Bluetooth Low Energy（BLE）是 Bluetooth 4.0 中引入的一种低功耗无线通信标准。它专为间歇性的小数据量传输而设计，能够在数十米范围内实现无线连接，同时将平均电流消耗保持在微安级的超低水平。BLE 被广泛应用于可穿戴设备、智能家居传感器、室内定位以及工业物联网场景。

得益于 nRF54LM20A SoC，XIAO nRF54LM20A 系列支持 Bluetooth LE、Matter、Thread、Zigbee 以及 2.4GHz 私有协议，在低延迟场景下可提供高达 4 Mbps 的峰值数据速率。它还支持 Bluetooth Channel Sounding 和 Bluetooth Mesh。本文通过三个循序渐进的示例程序来展示其 BLE 功能，从基础的广播 Beacon 发送开始，进一步扩展到双向 UART 通信以及实时传感器数据上传。

:::tip

- 本教程基于 PlatformIO 构建系统和 Zephyr RTOS 开发。如果你还不熟悉在 PlatformIO 下为 XIAO nRF54LM20A 创建项目，可以跳转到 [Getting Sarted With Seeed Studio XIAO nRF54LM20A](https://wiki.seeedstudio.com/cn/xiao_nrf54lm20a_getting_started/)
- 如果你想进一步了解 nRF54LM20A SoC 和 BLE，请访问以下链接：[**nRF54LM20A SoC Introduction**](https://www.nordicsemi.com/Products/nRF54LM20A) 和 [**Bluetooth-Low-Energy for Nordic**](https://www.nordicsemi.com/Products/Wireless/Bluetooth-Low-Energy)

:::

## 硬件准备

在开始例程实现之前，你需要至少准备一块 XIAO nRF54LM20A Sense。

<div className="table-center">
<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
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

## 蓝牙天线

该开发板使用外置蓝牙天线。为了确保更好的蓝牙信号质量并提升你的蓝牙使用体验，建议安装蓝牙天线。
连接方式如下图所示：

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_6.gif"
    alt="Bluetooth antenna connection"
    style={{width: 600, height: 'auto'}}
  />
</div>

### 天线安装

在 Seeed Studio XIAO nRF54LM20A 的包装内，附带有一个专用的 Wi-Fi/BT 天线连接器。为了获得最佳的 WiFi/蓝牙信号强度，你需要取出包装中附带的天线并将其连接到该连接器上。
<!--  -->
<div class="table-center">
 <table>
  <tr>
   <th>适用于 XIAO nRF54 系列的 2.4GHz FPC 天线 A-04</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100039813-2.4ghz-fpc-antenna-_1.86dbi_-for-xiao-nrf54l15.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/2-4GHz-FPC-Antenna-1-86dBi-for-XIAO-nRF54L15-p-6578.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 应用

本节将通过实际案例介绍 BLE 的核心特性以及在 XIAO nRF54LM20A Sense 上使用 BLE 的方法。

### BLE Beacon

本项目在 XIAO nRF54LM20A 上实现了 BLE Beacon 功能。设备上电后会持续广播携带 Manufacturer Specific Data 的广播包。该数据包中包含一个每秒递增的计数值，可以通过 nRF Connect 检查其实时变化。

#### 软件

1. 需要在 `app.overlay` 中启用相关设备树配置，以将 BLE 控制器切换为原生 Zephyr 实现。

```dts
/* Enable Zephyr native BLE controller (LL SW Split) */
&bt_hci_controller {
        status = "okay";
};

/ {
        chosen {
                zephyr,bt-hci = &bt_hci_controller;
        };
};

```

2. 在 `prj.conf` 中启用相关 Bluetooth 配置，设置日志输出模式，并将 Bluetooth 设备名称重命名为 **XIAO-Beacon**。

```prj
# GPIO
CONFIG_GPIO=y
# XIAO nRF54LM20A can fault early with the MPU enabled in this toolchain/board package.
CONFIG_ARM_MPU=n
# Regulator (for power_en)
CONFIG_REGULATOR=y
# Logging
CONFIG_LOG=y
# UART for console logging
CONFIG_SERIAL=y
CONFIG_UART_ASYNC_API=y
CONFIG_UART_20_ASYNC=y
CONFIG_UART_21_ASYNC=y
CONFIG_UART_NRFX_UARTE_ENHANCED_RX=y
# BLE
CONFIG_BT=y
CONFIG_BT_PERIPHERAL=y
CONFIG_BT_DEVICE_NAME="XIAO-Beacon"
# Avoid GCC 8.2 rejecting the controller's optimized assert inline asm path.
CONFIG_BT_CTLR_ASSERT_OPTIMIZE_FOR_SIZE=n
CONFIG_BT_CTLR_ASSERT_DEBUG=n
CONFIG_BT_CTLR_ASSERT_OVERHEAD_START=n
# Disable auto-procedures to avoid LL Procedure Collision on nRF54L
CONFIG_BT_AUTO_PHY_UPDATE=n
CONFIG_BT_DATA_LEN_UPDATE=n
# Memory
CONFIG_HEAP_MEM_POOL_SIZE=8192
# System workqueue stack
CONFIG_SYSTEM_WORKQUEUE_STACK_SIZE=2048
# Assert level
CONFIG_ASSERT=y

```

3. 在 main.c 中编写代码，自定义数据传输格式和内容。

<details>

<summary>main.c</summary>

```c
#include <stdio.h>

#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/drivers/regulator.h>
#include <zephyr/bluetooth/bluetooth.h>
#include <zephyr/bluetooth/hci.h>
#include <zephyr/logging/log.h>

LOG_MODULE_REGISTER(ble_beacon, LOG_LEVEL_INF);

/* Manufacturer Data configuration */
#define MANUF_COMPANY_ID    0x0059
#define MANUF_DATA_SIZE     8

static uint32_t manufacturer_counter;

/* Power enable regulator (GPIO1_12) - must be enabled before BLE init */
static const struct device *const power_en_dev =
    DEVICE_DT_GET(DT_NODELABEL(power_en));

static void adv_update_work_handler(struct k_work *work);

static K_WORK_DELAYABLE_DEFINE(adv_update_work, adv_update_work_handler);

static int enable_power(void)
{
    int ret;

    if (!device_is_ready(power_en_dev)) {
        LOG_ERR("power_en regulator is not ready");
        return -ENODEV;
    }

    ret = regulator_enable(power_en_dev);
    if (ret < 0 && ret != -EALREADY) {
        LOG_ERR("Failed to enable power_en: %d", ret);
        return ret;
    }

    k_sleep(K_MSEC(20));
    LOG_INF("Power rail enabled");
    return 0;
}

static void adv_update_work_handler(struct k_work *work)
{
    int err;
    uint8_t manuf_data[MANUF_DATA_SIZE];

    manufacturer_counter++;

    /* Build manufacturer data: [Company ID (2B)][Counter (4B)][Custom (2B)] */
    manuf_data[0] = MANUF_COMPANY_ID & 0xFF;
    manuf_data[1] = (MANUF_COMPANY_ID >> 8) & 0xFF;
    manuf_data[2] = (manufacturer_counter >> 0) & 0xFF;
    manuf_data[3] = (manufacturer_counter >> 8) & 0xFF;
    manuf_data[4] = (manufacturer_counter >> 16) & 0xFF;
    manuf_data[5] = (manufacturer_counter >> 24) & 0xFF;
    manuf_data[6] = 0xAA;
    manuf_data[7] = 0xBB;

    const struct bt_data ad[] = {
        BT_DATA_BYTES(BT_DATA_FLAGS, (BT_LE_AD_GENERAL | BT_LE_AD_NO_BREDR)),
        BT_DATA(BT_DATA_NAME_COMPLETE, CONFIG_BT_DEVICE_NAME,
            sizeof(CONFIG_BT_DEVICE_NAME) - 1),
        BT_DATA(BT_DATA_MANUFACTURER_DATA, manuf_data, sizeof(manuf_data)),
    };

    err = bt_le_adv_update_data(ad, ARRAY_SIZE(ad), NULL, 0);
    if (err < 0) {
        LOG_ERR("Failed to update advertising data (err %d)", err);
    } else {
        LOG_INF("Manufacturer counter: %u", manufacturer_counter);
    }

    k_work_schedule(&adv_update_work, K_SECONDS(1));
}

int main(void)
{
    int err;
    uint8_t init_data[MANUF_DATA_SIZE];

    LOG_INF("BLE Manufacturer Data Beacon");

    /* Enable board power rail before BLE initialization */
    err = enable_power();
    if (err < 0) {
        LOG_ERR("Power enable failed (err %d)", err);
        return err;
    }

    LOG_INF("Initializing BLE...");

    err = bt_enable(NULL);
    if (err < 0) {
        LOG_ERR("Bluetooth enable failed (err %d)", err);
        return err;
    }

    LOG_INF("BLE initialized");

    /* Initial advertising data with counter = 0 */
    init_data[0] = MANUF_COMPANY_ID & 0xFF;
    init_data[1] = (MANUF_COMPANY_ID >> 8) & 0xFF;
    init_data[2] = 0;
    init_data[3] = 0;
    init_data[4] = 0;
    init_data[5] = 0;
    init_data[6] = 0xAA;
    init_data[7] = 0xBB;

    const struct bt_data ad[] = {
        BT_DATA_BYTES(BT_DATA_FLAGS, (BT_LE_AD_GENERAL | BT_LE_AD_NO_BREDR)),
        BT_DATA(BT_DATA_NAME_COMPLETE, CONFIG_BT_DEVICE_NAME,
            sizeof(CONFIG_BT_DEVICE_NAME) - 1),
        BT_DATA(BT_DATA_MANUFACTURER_DATA, init_data, sizeof(init_data)),
    };

    err = bt_le_adv_start(BT_LE_ADV_NCONN, ad, ARRAY_SIZE(ad), NULL, 0);
    if (err < 0) {
        LOG_ERR("Advertising failed to start (err %d)", err);
        return err;
    }

    LOG_INF("BLE advertising started");

    /* Schedule counter update after 1 second */
    k_work_schedule(&adv_update_work, K_SECONDS(1));

    for (;;) {
        k_sleep(K_FOREVER);
    }

    return 0;
}
```

</details>

#### 结果

1. 上传固件后，安装 nRF Connect 应用以扫描和检测 BLE 设备。

同时，你可以在各大手机应用商店中搜索并下载 nRF Connect 应用，使手机能够搜索并连接蓝牙设备。

- Android: [nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en)
- IOS: [nRF Connect](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

2. 安装软件后，扫描名为 **XIAO-Beacon** 的蓝牙设备，并查看接收到的 Manufacturer Data。同时打开串口查看输出日志。

<div className="table-center">
<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_beacon_1.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_beacon_2.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>

- 获取到的 Manufacturer Data 为十六进制值 `<0x0059> 0x03000000AABB`。通过查看程序代码可知，其中的 `0x03000000` 段表示当前计数器值为 3。

```c
#define MANUF_COMPANY_ID    0x0059
static uint32_t manufacturer_counter;
...
manuf_data[0] = MANUF_COMPANY_ID & 0xFF;
manuf_data[1] = (MANUF_COMPANY_ID >> 8) & 0xFF;
manuf_data[2] = (manufacturer_counter >> 0) & 0xFF;
manuf_data[3] = (manufacturer_counter >> 8) & 0xFF;
manuf_data[4] = (manufacturer_counter >> 16) & 0xFF;
manuf_data[5] = (manufacturer_counter >> 24) & 0xFF;
manuf_data[6] = 0xAA;
manuf_data[7] = 0xBB;
```

- 打开串口工具，可以看到计数器值按行打印，当前计数达到 3。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_beacon_3.png" style={{width:800, height:'auto'}}/></div>
<br/>
从上述结果可以清晰地理解在 XIAO nRF54LM20A Sense 上发送自定义 BLE 广播数据包的过程，这有助于进一步研究 BLE 的工作特性。在具体应用场景中，可以通过广播数据来判断触发条件，而无需建立实际连接。

### BLE UART

本示例演示如何在 XIAO nRF54LM20A Sense 上通过 BLE 建立双向数据通道。基于 Nordic UART Service (NUS)，实现手机向设备发送字符串数据并获得回显反馈的基本交互。同时，设备通过 Notify 每秒上报一次状态计数值，展示 BLE GATT 两种核心数据传输模式：Write 和 Notify。

#### 软件

1. 在 `app.overlay` 中启用相关设备树配置，将 BLE 控制器切换为原生 Zephyr 实现。

```dts
/* Enable Zephyr native BLE controller (LL SW Split) */
&bt_hci_controller {
        status = "okay";
};

/ {
        chosen {
                zephyr,bt-hci = &bt_hci_controller;
        };
};

```

2. 在 prj.conf 中启用与 Bluetooth 相关的配置

```
# Standard output and console
CONFIG_STDOUT_CONSOLE=y
CONFIG_CBPRINTF_FP_SUPPORT=y

# Logging
CONFIG_LOG=y

# Bluetooth peripheral
CONFIG_BT=y
CONFIG_BT_PERIPHERAL=y
CONFIG_BT_DEVICE_NAME="XIAO BLE UART"

```

3. 在 `main.c` 中设置订阅逻辑和数据反馈机制


<details>

<summary>main.c</summary>

```c
#include <stdio.h>
#include <string.h>

#include <zephyr/kernel.h>
#include <zephyr/bluetooth/bluetooth.h>
#include <zephyr/bluetooth/conn.h>
#include <zephyr/bluetooth/gatt.h>
#include <zephyr/bluetooth/uuid.h>
#include <zephyr/logging/log.h>

LOG_MODULE_REGISTER(ble_uart, LOG_LEVEL_INF);

#define DEVICE_NAME     CONFIG_BT_DEVICE_NAME
#define DEVICE_NAME_LEN (sizeof(DEVICE_NAME) - 1)

/* NUS UUIDs — same as Nordic UART Service but defined here to avoid
 * the NUS library's STRUCT_SECTION_ITERABLE dependency.
 */
#define BT_UUID_NUS_SRV_VAL \
	BT_UUID_128_ENCODE(0x6e400001, 0xb5a3, 0xf393, 0xe0a9, 0xe50e24dcca9e)
#define BT_UUID_NUS_RX_CHAR_VAL \
	BT_UUID_128_ENCODE(0x6e400002, 0xb5a3, 0xf393, 0xe0a9, 0xe50e24dcca9e)
#define BT_UUID_NUS_TX_CHAR_VAL \
	BT_UUID_128_ENCODE(0x6e400003, 0xb5a3, 0xf393, 0xe0a9, 0xe50e24dcca9e)

#define BT_UUID_NUS_SRV BT_UUID_DECLARE_128(BT_UUID_NUS_SRV_VAL)
#define BT_UUID_NUS_TX  BT_UUID_DECLARE_128(BT_UUID_NUS_TX_CHAR_VAL)
#define BT_UUID_NUS_RX  BT_UUID_DECLARE_128(BT_UUID_NUS_RX_CHAR_VAL)

static struct bt_conn *current_conn;
static uint32_t notify_counter;
static bool notify_enabled;

extern const struct bt_gatt_service_static nus_svc;

static void nus_ccc_cfg_changed(const struct bt_gatt_attr *attr, uint16_t value)
{
	notify_enabled = (value == BT_GATT_CCC_NOTIFY);
	if (notify_enabled) {
		LOG_INF("BLE notify enabled");
	} else {
		LOG_INF("BLE notify disabled");
	}
}

static ssize_t nus_rx_write(struct bt_conn *conn,
			    const struct bt_gatt_attr *attr,
			    const void *buf, uint16_t len,
			    uint16_t offset, uint8_t flags)
{
	char rx_buf[128] = {0};
	char tx_buf[256] = {0};

	if (len > sizeof(rx_buf) - 1) {
		len = sizeof(rx_buf) - 1;
	}
	memcpy(rx_buf, buf, len);
	rx_buf[len] = '\0';

	LOG_INF("RX data: %s", rx_buf);

	snprintf(tx_buf, sizeof(tx_buf), "echo: %s", rx_buf);
	LOG_INF("TX echo: %s", rx_buf);

	int ret = bt_gatt_notify(conn, &nus_svc.attrs[1], tx_buf, strlen(tx_buf));
	if (ret) {
		LOG_ERR("BLE notify failed");
		LOG_ERR("Error code: %d", ret);
	}

	return len;
}

BT_GATT_SERVICE_DEFINE(nus_svc,
	BT_GATT_PRIMARY_SERVICE(BT_UUID_NUS_SRV),
	BT_GATT_CHARACTERISTIC(BT_UUID_NUS_TX,
		BT_GATT_CHRC_NOTIFY,
		BT_GATT_PERM_NONE,
		NULL, NULL, NULL),
	BT_GATT_CCC(nus_ccc_cfg_changed,
		BT_GATT_PERM_READ | BT_GATT_PERM_WRITE),
	BT_GATT_CHARACTERISTIC(BT_UUID_NUS_RX,
		BT_GATT_CHRC_WRITE | BT_GATT_CHRC_WRITE_WITHOUT_RESP,
		BT_GATT_PERM_WRITE,
		NULL, nus_rx_write, NULL),
);

static void connected(struct bt_conn *conn, uint8_t err)
{
	if (err) {
		LOG_ERR("Connection failed, error code: %d", err);
		return;
	}

	current_conn = bt_conn_ref(conn);
	LOG_INF("Device connected");
}

static void disconnected(struct bt_conn *conn, uint8_t reason)
{
	LOG_INF("Device disconnected, reason: %d", reason);
	if (current_conn) {
		bt_conn_unref(current_conn);
		current_conn = NULL;
	}
	notify_enabled = false;
}

BT_CONN_CB_DEFINE(conn_callbacks) = {
	.connected = connected,
	.disconnected = disconnected,
};

static void notify_work_handler(struct k_work *work);

static K_WORK_DELAYABLE_DEFINE(notify_work, notify_work_handler);

static void notify_work_handler(struct k_work *work)
{
	if (current_conn && notify_enabled) {
		char msg[64];

		notify_counter++;
		snprintf(msg, sizeof(msg), "status counter: %u", notify_counter);

		LOG_INF("Notify counter: %u", notify_counter);

		int ret = bt_gatt_notify(current_conn, &nus_svc.attrs[1],
					  msg, strlen(msg));
		if (ret) {
			LOG_ERR("BLE notify failed");
			LOG_ERR("Error code: %d", ret);
		}
	}

	k_work_schedule(&notify_work, K_SECONDS(1));
}

static const struct bt_data ad[] = {
	BT_DATA_BYTES(BT_DATA_FLAGS, (BT_LE_AD_GENERAL | BT_LE_AD_NO_BREDR)),
	BT_DATA(BT_DATA_NAME_COMPLETE, DEVICE_NAME, DEVICE_NAME_LEN),
};

int main(void)
{
	int ret;

	LOG_INF("BLE UART (NUS) example for XIAO nRF54LM20A");
	LOG_INF("BLE initialization started");

	ret = bt_enable(NULL);
	if (ret) {
		LOG_ERR("Bluetooth init failed");
		LOG_ERR("Error code: %d", ret);
		return 0;
	}
	LOG_INF("Bluetooth initialized");

	ret = bt_le_adv_start(BT_LE_ADV_CONN_FAST_1, ad, ARRAY_SIZE(ad), NULL, 0);
	if (ret) {
		LOG_ERR("Advertising start failed");
		LOG_ERR("Error code: %d", ret);
		return 0;
	}
	LOG_INF("BLE advertising started");

	k_work_schedule(&notify_work, K_SECONDS(1));

	while (1) {
		k_sleep(K_FOREVER);
	}

	return 0;
}
```

</details>

#### 结果

1. 上传固件后，安装 nRF Connect 应用以扫描和检测 BLE 设备。

同时，你可以在各大手机应用商店中搜索并下载 nRF Connect 应用，使手机能够搜索并连接蓝牙设备。

- Android: [nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en)
- IOS: [nRF Connect](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

2. 下载软件后，扫描并查蓝牙设备**XIAO BLE UART**,按照下面步骤连接

<div className="table-center">
<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_uart_1.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_uart_2.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>

3. 按照以下步骤开启 Notify 订阅。

- 在服务列表中找到 Nordic UART Service，展开 TX Characteristic，并点击 Notify 订阅按钮，以接收由 XIAO nRF54LM20A Sense 发送的计数信息。

<div className="table-center">
<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_uart_3.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_uart_4.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>

- 打开串口日志，可以看到 Notify 的使能状态和当前计数器值被打印出来。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_uart_7.png" style={{width:800, height:'auto'}}/></div>

4. 发送数据以演示接收数据转发的效果。

- 展开 RX 特征，点击 **Write** 按钮，输入如 `hello World` 的字符串并发送到 XIAO nRF54LM20A Sense。同时，可以通过 TX 特征接收转发后的字符串。

<div className="table-center">
<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_uart_5.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_uart_5_1.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_uart_6.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>

- 打开串口助手，它会打印接收和发送的数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_uart_8.png" style={{width:800, height:'auto'}}/></div>
<br/>
在本节中，你将对**BLE Notify 订阅机制**以及**数据接收与转发机制**有一个基本的了解。在某些特定场景下，将蓝牙连接与**传感器触发控制**相结合，可以使设备充当**可离线使用的自定义控制器**。

### BLE 传感器

本节在 XIAO nRF54LM20A Sense 上实现基于 BLE 的 IMU 运动数据实时上报功能。程序启动后，设备会自动开启 BLE 广播。用户可以通过手机上的 nRF Connect 连接设备并订阅 Notify，以接收实时的 X/Y/Z 加速度数据。当合成加速度超过预设阈值时，板载 LED 点亮，低于阈值时熄灭，从而实现基本的运动检测和可视化指示。

:::tip

XIAO nRF54LM20A 系列配备 LSM6DS3TR-C 六轴传感器。请参考 [Usage of Built-in Sensors for XIAO nRF54LM20A Sense](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_1.jpg)。

:::

#### 软件

1. 在 `app.overlay` 中启用相关设备树配置。

```dts
/*
 * BLE Sensor overlay for XIAO nRF54LM20A.
 *
 * Enables nPM1300 PMIC LDO1 (imu_vdd) at 3.3V for IMU power,
 * and marks IMU for deferred initialization so the application
 * can enable power before the sensor driver probes.
 *
 * nRF54LM20A does not have rfsw_pwr / vbat_pwr regulators.
 *
 * BLE: The board DTS sets zephyr,bt-hci = &bt_hci_sdc (Nordic SDC),
 * but SDC is not available in the PlatformIO SDK. We keep the node
 * label (so the chosen reference stays valid) but change its
 * compatible string to the Zephyr open-source split LL driver.
 */

&pmic_i2c {
	sda-gpios = <&gpio1 18 GPIO_ACTIVE_HIGH>;
	scl-gpios = <&gpio1 17 GPIO_ACTIVE_HIGH>;
	status = "okay";
};

&pwm20 {
	status = "disabled";
};

&green_led {
	gpios = <&gpio1 24 GPIO_ACTIVE_LOW>;
};

&pmic {
	regulators {
		imu_vdd: LDO1 {
			regulator-min-microvolt = <3300000>;
			regulator-max-microvolt = <3300000>;
			regulator-boot-on;
		};
	};
};

&lsm6ds3tr_c {
	wakeup-source;
	zephyr,deferred-init;
};

/* Replace SDC compatible with Zephyr open-source split LL */
&bt_hci_sdc {
	compatible = "zephyr,bt-hci-ll-sw-split";
};
```

2. 启用 IMU 配置，并将蓝牙设备名称设置为 **XIAO-IMU**。

```prj
# Standard output
CONFIG_STDOUT_CONSOLE=y
CONFIG_CBPRINTF_FP_SUPPORT=y

# Logging
CONFIG_LOG=y
CONFIG_LOG_BACKEND_UART=y
CONFIG_LOG_DEFAULT_LEVEL=3

# I2C and Sensor drivers
CONFIG_I2C=y
CONFIG_SENSOR=y
CONFIG_LSM6DSL=y
CONFIG_LSM6DSL_ACCEL_ODR=1
CONFIG_MFD=y

# Regulator support (nPM1300 on nrf54lm20a)
CONFIG_REGULATOR=y

# GPIO for LED
CONFIG_GPIO=y

# BLE
CONFIG_BT=y
CONFIG_BT_PERIPHERAL=y
CONFIG_BT_DEVICE_NAME="XIAO-IMU"
CONFIG_BT_DEVICE_APPEARANCE=0
CONFIG_BT_MAX_CONN=1
CONFIG_BT_MAX_PAIRED=1
CONFIG_BT_LL_SW_SPLIT=y

# BLE buffer configuration for reliable notify
CONFIG_BT_BUF_ACL_TX_COUNT=5

# Increased stack sizes for BLE + sensor processing
CONFIG_MAIN_STACK_SIZE=4096
CONFIG_SYSTEM_WORKQUEUE_STACK_SIZE=2048

# Enable Zephyr Power Management
CONFIG_PM=y
CONFIG_PM_DEVICE=y
```

3. 在 main.c 中编写 IMU 读取逻辑和 Notify 订阅机制。

<details>

<summary>main.c</summary>

```c
#include <stdio.h>
#include <math.h>
#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/drivers/sensor.h>
#include <zephyr/drivers/regulator.h>
#include <zephyr/logging/log.h>

#include <zephyr/bluetooth/bluetooth.h>
#include <zephyr/bluetooth/gatt.h>
#include <zephyr/bluetooth/hci.h>
#include <zephyr/bluetooth/uuid.h>

LOG_MODULE_REGISTER(ble_imu, LOG_LEVEL_INF);

/*===========================================================================*/
/* Device Definitions                                                        */
/*===========================================================================*/

#define IMU_NODE DT_ALIAS(imu0)

static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(DT_NODELABEL(green_led), gpios);

/*===========================================================================*/
/* Configurable Parameters                                                    */
/*===========================================================================*/

/* Motion threshold in m/s^2 - acceleration vector magnitude */
#define MOTION_THRESHOLD  12.0f

/* BLE notify interval in milliseconds */
#define NOTIFY_INTERVAL_MS 100

/*===========================================================================*/
/* nRF54LM20A IMU Power Management                                           */
/*===========================================================================*/

#if defined(DT_N_NODELABEL_power_en)
static const struct device *const power_en_dev =
	DEVICE_DT_GET(DT_NODELABEL(power_en));
#endif

#if defined(DT_N_NODELABEL_imu_vdd)
static const struct device *const imu_vdd_dev =
	DEVICE_DT_GET(DT_NODELABEL(imu_vdd));
#endif

static int enable_imu_power(void)
{
#if defined(DT_N_NODELABEL_power_en) || defined(DT_N_NODELABEL_imu_vdd)
	int ret;
#endif

#if defined(DT_N_NODELABEL_power_en)
	if (!device_is_ready(power_en_dev)) {
		LOG_ERR("power_en regulator is not ready");
		return -ENODEV;
	}
	ret = regulator_enable(power_en_dev);
	if (ret < 0 && ret != -EALREADY) {
		LOG_ERR("Failed to enable power_en: %d", ret);
		return ret;
	}
#endif

#if defined(DT_N_NODELABEL_imu_vdd)
	if (!device_is_ready(imu_vdd_dev)) {
		LOG_ERR("imu_vdd regulator is not ready");
		return -ENODEV;
	}
	ret = regulator_enable(imu_vdd_dev);
	if (ret < 0 && ret != -EALREADY) {
		LOG_ERR("Failed to enable imu_vdd: %d", ret);
		return ret;
	}
#endif

#if defined(DT_N_NODELABEL_power_en) || defined(DT_N_NODELABEL_imu_vdd)
	k_sleep(K_MSEC(20));
#endif

	return 0;
}

/*===========================================================================*/
/* BLE GATT Service: IMU Acceleration Data                                   */
/*===========================================================================*/

/* Custom 128-bit UUIDs for the IMU service and data characteristic */
#define BT_UUID_IMU_SERVICE_VAL \
	BT_UUID_128_ENCODE(0x00000001, 0x1234, 0x5678, 0x9abc, 0xdef012345678)
#define BT_UUID_IMU_DATA_VAL \
	BT_UUID_128_ENCODE(0x00000002, 0x1234, 0x5678, 0x9abc, 0xdef012345678)

static struct bt_uuid_128 imu_svc_uuid = BT_UUID_INIT_128(
	BT_UUID_IMU_SERVICE_VAL);
static struct bt_uuid_128 imu_data_uuid = BT_UUID_INIT_128(
	BT_UUID_IMU_DATA_VAL);

static bool notify_enabled;
static struct bt_conn *current_conn;

static void imu_data_ccc_cfg_changed(const struct bt_gatt_attr *attr,
				     uint16_t value)
{
	notify_enabled = (value & BT_GATT_CCC_NOTIFY);
	LOG_INF("Notify %s", notify_enabled ? "enabled" : "disabled");
}

/* CCC user data — defined separately to avoid GCC 8.x compound literal issues */
static struct bt_gatt_ccc_managed_user_data imu_ccc_data =
	BT_GATT_CCC_MANAGED_USER_DATA_INIT(imu_data_ccc_cfg_changed, NULL, NULL);

/* GATT Service definition — auto-registered via iterable section */
BT_GATT_SERVICE_DEFINE(imu_svc,
	BT_GATT_PRIMARY_SERVICE(&imu_svc_uuid),
	BT_GATT_CHARACTERISTIC(&imu_data_uuid.uuid,
		BT_GATT_CHRC_NOTIFY,
		BT_GATT_PERM_NONE,
		NULL, NULL, NULL),
	BT_GATT_CCC_MANAGED(&imu_ccc_data,
		BT_GATT_PERM_READ | BT_GATT_PERM_WRITE),
);

/*===========================================================================*/
/* BLE Connection Callbacks                                                  */
/*===========================================================================*/

static void connected(struct bt_conn *conn, uint8_t err)
{
	if (err) {
		LOG_ERR("Connection failed (err %u)", err);
		return;
	}
	current_conn = bt_conn_ref(conn);
	LOG_INF("Device connected");
}

static void disconnected(struct bt_conn *conn, uint8_t reason)
{
	if (current_conn) {
		bt_conn_unref(current_conn);
		current_conn = NULL;
	}
	notify_enabled = false;
	LOG_INF("Device disconnected (reason %u)", reason);
}

BT_CONN_CB_DEFINE(conn_callbacks) = {
	.connected = connected,
	.disconnected = disconnected,
};

/*===========================================================================*/
/* BLE Initialization                                                        */
/*===========================================================================*/

static int ble_init(void)
{
	int ret;

	ret = bt_enable(NULL);
	if (ret) {
		LOG_ERR("BLE init failed (err %d)", ret);
		return ret;
	}
	LOG_INF("BLE initialized");

	ret = bt_le_adv_start(BT_LE_ADV_CONN_NAME, NULL, 0, NULL, 0);
	if (ret) {
		LOG_ERR("BLE advertising start failed (err %d)", ret);
		return ret;
	}
	LOG_INF("BLE advertising started");

	return 0;
}

/*===========================================================================*/
/* IMU Data Reading                                                          */
/*===========================================================================*/

static float sv_to_float(const struct sensor_value *val)
{
	return (float)val->val1 + (float)val->val2 / 1000000.0f;
}

static int imu_read_accel(const struct device *dev,
			  float *x, float *y, float *z)
{
	struct sensor_value sv_x, sv_y, sv_z;
	int ret;

	ret = sensor_sample_fetch(dev);
	if (ret) {
		LOG_ERR("IMU sample fetch failed: %d", ret);
		return ret;
	}

	sensor_channel_get(dev, SENSOR_CHAN_ACCEL_X, &sv_x);
	sensor_channel_get(dev, SENSOR_CHAN_ACCEL_Y, &sv_y);
	sensor_channel_get(dev, SENSOR_CHAN_ACCEL_Z, &sv_z);

	*x = sv_to_float(&sv_x);
	*y = sv_to_float(&sv_y);
	*z = sv_to_float(&sv_z);

	return 0;
}

static float compute_accel_magnitude(float x, float y, float z)
{
	return sqrtf(x * x + y * y + z * z);
}

/*===========================================================================*/
/* LED Control                                                               */
/*===========================================================================*/

static void led_set(bool on)
{
	static bool current_state;

	if (on == current_state) {
		return;
	}
	current_state = on;
	gpio_pin_set_dt(&led, on ? 1 : 0);
	LOG_INF("LED %s", on ? "ON" : "OFF");
}

/*===========================================================================*/
/* BLE Notify                                                                */
/*===========================================================================*/

static int ble_send_imu_data(float x, float y, float z)
{
	char buf[64];
	int len;
	int ret;

	if (!notify_enabled || !current_conn) {
		return -EAGAIN;
	}

	len = snprintf(buf, sizeof(buf), "X:%.1f Y:%.1f Z:%.1f",
		       (double)x, (double)y, (double)z);
	if (len < 0 || len >= (int)sizeof(buf)) {
		LOG_ERR("Notify payload formatting failed");
		return -ENOMEM;
	}

	ret = bt_gatt_notify(NULL, &imu_svc.attrs[1], buf, len);
	if (ret && ret != -EAGAIN) {
		LOG_ERR("BLE notify failed: %d", ret);
	}
	return ret;
}

/*===========================================================================*/
/* Main                                                                      */
/*===========================================================================*/

int main(void)
{
	const struct device *imu_dev = DEVICE_DT_GET(IMU_NODE);
	float accel_x, accel_y, accel_z;
	float magnitude;
	bool motion_active = false;
	int ret;

	/* LED initialization */
	if (!gpio_is_ready_dt(&led)) {
		LOG_ERR("LED device not found");
		return 0;
	}
	gpio_pin_configure_dt(&led, GPIO_OUTPUT_INACTIVE);

	LOG_INF("XIAO nRF54LM20A BLE + IMU Sensor starting...");

	/* LED blink on startup */
	gpio_pin_set_dt(&led, 1);
	k_sleep(K_MSEC(250));
	gpio_pin_set_dt(&led, 0);

	/* Enable IMU power (regulators on nRF54LM20A) */
	ret = enable_imu_power();
	if (ret < 0) {
		LOG_ERR("Failed to enable IMU power: %d", ret);
		return 0;
	}

	/* Initialize IMU (deferred-init on nRF54LM20A) */
	if (!device_is_ready(imu_dev)) {
		ret = device_init(imu_dev);
		if (ret < 0 && ret != -EALREADY) {
			LOG_ERR("Failed to init IMU device: %d", ret);
			return 0;
		}
	}

	if (!device_is_ready(imu_dev)) {
		LOG_ERR("IMU device not ready");
		return 0;
	}
	LOG_INF("IMU sensor initialized: %s", imu_dev->name);

	/* Initialize BLE */
	ret = ble_init();
	if (ret < 0) {
		LOG_ERR("Failed to initialize BLE: %d", ret);
		return 0;
	}

	LOG_INF("Setup complete. Starting IMU + BLE notify loop.");
	LOG_INF("Motion threshold: %.1f m/s^2",
		(double)MOTION_THRESHOLD);
	LOG_INF("Notify interval: %d ms", NOTIFY_INTERVAL_MS);

	/* Main loop: read IMU, check motion, control LED, send notify */
	while (1) {
		ret = imu_read_accel(imu_dev, &accel_x, &accel_y, &accel_z);
		if (ret) {
			LOG_ERR("IMU read failed. Error code: %d", ret);
			k_sleep(K_MSEC(NOTIFY_INTERVAL_MS));
			continue;
		}

		magnitude = compute_accel_magnitude(accel_x, accel_y, accel_z);

		LOG_INF("IMU X=%.2f Y=%.2f Z=%.2f",
			(double)accel_x, (double)accel_y, (double)accel_z);

		/* Motion threshold detection */
		if (!motion_active && magnitude > MOTION_THRESHOLD) {
			motion_active = true;
			led_set(true);
			LOG_INF("Motion threshold triggered (mag=%.2f)",
				(double)magnitude);
		} else if (motion_active && magnitude <= MOTION_THRESHOLD) {
			motion_active = false;
			led_set(false);
			LOG_INF("Motion below threshold (mag=%.2f)",
				(double)magnitude);
		}

		/* Send IMU data via BLE notify if subscribed */
		ret = ble_send_imu_data(accel_x, accel_y, accel_z);
		if (ret && ret != -EAGAIN) {
			LOG_ERR("BLE send failed: %d", ret);
		}

		k_sleep(K_MSEC(NOTIFY_INTERVAL_MS));
	}

	return 0;
}
```

</details>

#### 结果

1. 上传固件后，安装 nRF Connect 应用以扫描和检测 BLE 设备。

同时，你也可以在各大手机应用商店中搜索并下载 nRF Connect 应用，它可以让你的手机搜索并连接蓝牙设备。

- Android: [nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en)
- IOS: [nRF Connect](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

2. 启动软件后，扫描蓝牙设备 **XIAO BLE IMU**，并按照下列步骤进行连接。

<div className="table-center">
<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_imu_1_1.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_imu_2.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>

3. 通过 nRF Connect 中的 Notify 订阅机制，从 XIAO nRF54LM20A Sense 订阅并接收 IMU 数据。

<div className="table-center">
<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_imu_3.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_imu_4_1.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>

- 打开串口工具检查数据格式，并确认订阅已启用。

<div className="table-center"> <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_imu_5.png" style={{width:800, height:'auto'}}/></div></td></div>

4. 摇动 XIAO nRF54LM20A Sense 以触发阈值报警机制。

- 阈值报警数值可以通过宏定义进行修改。地球上标准重力加速度的默认静态值为 9.8 m/s²。

```c
/* Motion threshold in m/s^2 - acceleration vector magnitude */
#define MOTION_THRESHOLD  12.0f
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_imu_6.gif" style={{width:800, height:'auto'}}/></div>

## 总结

通过以上示例，你将对 XIAO nRF54LM20A 上的 BLE 应用有一个扎实的理解。欢迎自由设计你自己的创意项目并分享你的成果。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
