---
title: Seeed Studio XIAO nRF54L15 Sense BLE 使用指南
description: |
  XIAO nRF54L15 Sense 蓝牙低功耗 (BLE) 使用完整指南，包括广播、连接、GATT 服务和功耗优化。
image: https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/1-101991422-XIAO-nRF54L15-Sense.webp
slug: /cn/xiao_nrf54l15_sense_bluetooth_usage
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

以下示例代码专为 PlatformIO 设计，但也兼容 nRF Connect SDK。

:::tip
基于 VS Code，如果您想在 nRF Connect SDK 上使用以下案例，请参考提供的连接，添加 app.overlay 文件并修改 prj.conf 中的内容

[XIAO nRF54L15 添加 overlay 文件并修改 conf 文件](https://wiki.seeedstudio.com/cn/xiao_nrf54l15_sense_getting_started/#/add-overlay-and-modify-the-conf-file/)。

:::

## BLE 观察者

一个演示蓝牙低功耗观察者角色功能的简单应用程序。该应用程序将定期扫描附近的设备。如果发现任何设备，将设备地址、RSSI 值、广播类型和广播数据长度打印到控制台。

如果使用的蓝牙低功耗控制器支持扩展扫描，您可以在项目配置文件 `prj.conf` 中启用 `CONFIG_BT_EXT_ADV`。有关更多详细信息，请参考项目配置文件。

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/obersever.png" alt="XIAO nRF54L15 Observer" style={{width:900, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>扫描结果</em></p>
</div>

### 添加 XIAO nRF54L15 开发板

要将 XIAO nRF54L15(Sense) 开发板添加到 NCS (nRF Connect SDK)，您可以参考 Seeed Studio Wiki 上的["入门指南"](https://wiki.seeedstudio.com/cn/xiao_nrf54l15_sense_getting_started/)。该指南将提供详细的操作说明。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### BLE 观察者代码

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/bluetooth/observer" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
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

- `main.c:` 初始化蓝牙子系统并启动观察者演示。

- `bt_enable(NULL):` 初始化蓝牙子系统。

- `observer_start():` 调用启动观察者的函数。

- `printk("Exiting %s thread.\n", __func__):` 在主函数退出时打印消息。

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

- `device_found:`在扫描过程中发现设备时调用的回调函数。它打印设备的地址、RSSI、类型和AD数据长度。

- `scan_recv:` 用于扩展广播的回调函数，打印接收到的广播数据包的详细信息，包括设备地址、发射功率、RSSI和广播数据。

- `data_cb:`由bt_data_parse使用的回调函数，用于从广播数据中提取设备名称。它处理缩短名称和完整名称。

- `phy2str:` 将PHY（物理层）值转换为人类可读字符串（例如"LE 1M"、"LE 2M"等）的辅助函数。

- `observer_start:`启动观察者的主函数。它定义扫描参数并启动扫描过程。

- `bt_le_scan_start:` 使用指定参数和发现设备时的回调函数启动BLE扫描的函数。

:::

## BLE广播

这个蓝牙广播教程基于官方[示例](https://academy.nordicsemi.com/courses/bluetooth-low-energy-fundamentals/lessons/lesson-2-bluetooth-le-advertising/topic/blefund-lesson-2-exercise-1/)代码，经过修改以在Nordic Connect SDK上运行。结合我们的开发板和官方文档，您可以深入了解更多蓝牙[应用](https://academy.nordicsemi.com/courses/bluetooth-low-energy-fundamentals/)。

当手机未连接到XIAO nRF54L15时，板载指示灯将保持常亮。一旦手机成功连接，指示灯将开始闪烁，表示已建立连接。

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/BLE.gif" alt="XIAO nRF54L15 Ultra-low Power Consumption in System Off Mode" style={{width:900, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>手机连接XIAO nRF54L15</em></p>
</div>

### BLE广播软件安装

对于这个示例，您需要在手机上下载官方蓝牙测试[应用](https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-mobile)nRF Connect。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrfconnect_app.png" style={{width:600, height:'auto'}}/></div>

将程序烧录到XIAO nRF54L15 Sense开发板后，您可以打开nRF Connect应用的主页面与其交互。

- 步骤1. 在nRF Connect应用中，点击右上角的扫描按钮开始扫描蓝牙设备。

- 步骤2. 接下来，在"Name"字段中输入您的XIAO nRF54L15 Sense设备名称。这将帮助您过滤并快速定位您的设备。

- 步骤3. 在扫描结果区域，找到您的XIAO nRF54L15 Sense设备并点击旁边的"Connect"按钮。

成功连接后，您将进入设备详情页面。在此页面上，您可以观察不同时间段内的蓝牙信号强度（RSSI）分布，这有助于您了解设备连接的稳定性。

<div class="table-center">
 <table align="center">
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/ble_image.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/ble_image2.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
 </table>
</div>

### 添加 XIAO nRF54L15 开发板

要将 XIAO nRF54L15(Sense) 开发板添加到 NCS (nRF Connect SDK) 中，您可以参考 Seeed Studio Wiki 上的["入门指南"](https://wiki.seeedstudio.com/cn/xiao_nrf54l15_sense_getting_started/)。该指南将提供详细的操作步骤说明。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### BLE 广播代码

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

- `ad:` 定义广播数据，包括通用可发现和不支持 BR/EDR 的标志，以及完整的设备名称。

- `sd:` 定义扫描响应数据，其中包含一个 URI（统一资源标识符）。

- `connected:` 当蓝牙设备成功连接时执行此回调函数。它将 device_connected 标志设置为 true。

- `disconnected:` 当蓝牙设备断开连接时执行此回调函数。它将 device_connected 标志设置为 false 并重新启动广播以允许新连接。

- `conn_callbacks:` 定义连接回调的结构，将 connected 和 disconnected 函数分配给各自的事件。

- `main:` 程序的主函数。

- `gpio_is_ready_dt:` 检查 LED GPIO 设备是否就绪。

- `gpio_pin_configure_dt:` 将 LED 引脚配置为输出，初始设置为非活动状态。

- `bt_enable(NULL):` 初始化蓝牙子系统。

- `bt_le_adv_start:` 启动蓝牙广播。此代码使用 ad 和 sd 数据启动可连接广播。

- `while (1):` 根据连接状态控制 LED 行为的无限循环。

- `gpio_pin_toggle_dt:` 切换 LED 的开关状态。

- `k_sleep:` 让线程休眠指定的时间。

- `device_connected:` 跟踪连接状态的布尔标志。当设备连接时，LED 以 500ms 间隔闪烁。当设备未连接时，LED 关闭，程序休眠 1000ms。

- `LOG_INF, LOG_ERR:` 用于记录信息和错误的函数。

:::

## BLE Central/GATT Write

这些代码文件共同实现了一个蓝牙低功耗（BLE）中央设备。中央设备持续扫描附近的蓝牙外围设备，当找到特定设备（RSSI 大于 -50）时自动建立连接。一旦建立连接，它会执行 GATT（通用属性配置文件）MTU（最大传输单元）交换以优化数据传输效率。

程序的核心功能是持续向连接的外围设备发送 GATT Write Without Response 命令。这通常用于性能测试，例如测量蓝牙连接的数据吞吐量或写入速率。

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/gatt.png" alt="XIAO nRF54L15 gatt" style={{width:900, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>gatt 结果</em></p>
</div>

### 添加 XIAO nRF54L15 开发板

要将 XIAO nRF54L15(Sense) 开发板添加到 NCS（nRF Connect SDK），您可以参考 Seeed Studio Wiki 上的["入门指南"](https://wiki.seeedstudio.com/cn/xiao_nrf54l15_sense_getting_started/)。该指南将提供详细的操作说明。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### BLE Central/GATT 代码

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/bluetooth/central_gatt_write" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
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

- `main:` 程序的入口点。它调用 `central_gatt_write` 函数，计数为 `0U`，这意味着写入命令将无限期发送。

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

- `device_found:` 在扫描过程中发现新设备时触发的回调函数。它打印找到的设备信息，并尝试连接既可连接又在近距离内的设备（RSSI 大于 -50）。在创建连接之前，它会停止扫描过程。

- `start_scan:` 启动主动 BLE 扫描的函数，使用 `device_found` 作为发现设备的回调函数。

- `mtu_updated:` GATT MTU 更新的回调函数，打印新的 TX 和 RX MTU 大小。

- `gatt_callbacks:` 注册 `mtu_updated` 函数作为 GATT 事件回调的结构体。

- `central_gatt_write:` 中心设备应用程序的主函数。它初始化蓝牙子系统，注册 GATT 回调，并开始扫描设备。然后进入循环，等待连接并重复调用 write_cmd 来执行 GATT 写入。该循环可以配置为运行特定次数或无限期运行。

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

- `write_cmd_cb:`一个用于 bt_gatt_write_without_response_cb 的回调函数。它计算并打印写入次数、长度和数据速率（以每秒比特数 bps 为单位）。如果自上次接收数据以来的时间超过一秒，它会重置这些指标。

- `mtu_exchange_cb:`一个在 MTU（最大传输单元）交换过程后调用的回调函数。它打印交换是否成功或失败，并显示新的 MTU 大小。

- `mtu_exchange:`启动 MTU 交换过程。它首先打印当前 MTU，然后尝试进行交换，使用 mtu_exchange_cb 作为回调。

- `connected:`连接建立时执行的回调函数。它打印已连接设备的地址及其角色。然后存储连接的引用并启动 MTU 交换。如果启用了安全性，它会尝试设置安全级别。

- `disconnected:`连接终止时执行的回调函数。它打印已断开连接设备的地址、其角色和断开连接的原因。它清除连接引用，如果设备是中心设备，则重新启动扫描。

- `le_param_req:` 用于处理来自外围设备的 LE 连接参数更新请求的回调函数。它打印请求的参数（间隔、延迟和超时）。

- `le_param_updated:` 连接参数成功更新时调用的回调函数。它打印新的间隔、延迟和超时值。

- `security_changed:`连接的安全级别发生变化时调用的回调函数。

- `write_cmd:` 准备并发送不需要响应的 GATT 写入命令的函数。它根据当前 MTU 确定最大数据长度，并将数据发送到句柄 0x0001。它使用 write_cmd_cb 作为回调。

:::

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
