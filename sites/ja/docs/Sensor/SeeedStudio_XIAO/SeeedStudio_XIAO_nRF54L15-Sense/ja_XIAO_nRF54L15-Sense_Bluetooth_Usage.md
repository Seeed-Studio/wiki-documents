---
title: Seeed Studio XIAO nRF54L15 Sense BLE使用方法
description: |
  XIAO nRF54L15 SenseでBluetooth Low Energy（BLE）を使用するための完全ガイド。アドバタイジング、接続、GATTサービス、電力最適化を含みます。
image: https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/1-101991422-XIAO-nRF54L15-Sense.webp
slug: /ja/xiao_nrf54l15_sense_bluetooth_usage
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

以下のサンプルコードはPlatformIO用に設計されていますが、nRF Connect SDKとも互換性があります。

:::tip
VS Codeベースで、nRF Connect SDKで以下のケースを使用したい場合は、提供されたリンクを参照して、app.overlayファイルを追加し、prj.confの内容を変更してください。

[XIAO nRF54L15 オーバーレイファイルの追加とconfファイルの変更](https://wiki.seeedstudio.com/ja/xiao_nrf54l15_sense_getting_started/#/add-overlay-and-modify-the-conf-file/)。

:::

## BLE Observer

Bluetooth Low Energy Observerロール機能を実演するシンプルなアプリケーションです。アプリケーションは定期的に近くのデバイスをスキャンします。デバイスが見つかった場合、デバイスのアドレス、RSSI値、アドバタイジングタイプ、アドバタイジングデータ長をコンソールに出力します。

使用するBluetooth Low Energy ControllerがExtended Scanningをサポートしている場合、プロジェクト設定ファイル`prj.conf`で`CONFIG_BT_EXT_ADV`を有効にできます。詳細については、プロジェクト設定ファイルを参照してください。

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/obersever.png" alt="XIAO nRF54L15 Observer" style={{width:900, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>スキャン結果</em></p>
</div>

### XIAO nRF54L15ボードの追加

XIAO nRF54L15（Sense）ボードをNCS（nRF Connect SDK）に追加するには、Seeed Studio Wikiの[「Getting Started」](https://wiki.seeedstudio.com/ja/xiao_nrf54l15_sense_getting_started/)ガイドを参照してください。このガイドでは、プロセスの詳細な手順を提供します。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### BLE Observerコード

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/bluetooth/observer" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
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

- `main.c:` Bluetoothサブシステムを初期化し、observerデモを開始します。

- `bt_enable(NULL):` Bluetoothサブシステムを初期化します。

- `observer_start():` observerを開始する関数を呼び出します。

- `printk("Exiting %s thread.\n", __func__):` main関数が終了する際にメッセージを出力します。

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

- `device_found:`スキャン中にデバイスが見つかった際に呼び出されるコールバック関数です。デバイスのアドレス、RSSI、タイプ、ADデータ長を出力します。

- `scan_recv:` 拡張アドバタイジング用のコールバック関数で、受信したアドバタイジングパケットの詳細情報（デバイスアドレス、Tx電力、RSSI、アドバタイジングデータ）を出力します。

- `data_cb:`bt_data_parseで使用されるコールバック関数で、アドバタイジングデータからデバイス名を抽出します。短縮名と完全名の両方を処理します。

- `phy2str:` PHY（物理層）値を人間が読める文字列（例：「LE 1M」、「LE 2M」など）に変換するヘルパー関数です。

- `observer_start:`observerを開始するメイン関数です。スキャンパラメータを定義し、スキャンプロセスを開始します。

- `bt_le_scan_start:` 指定されたパラメータとデバイスが見つかった際のコールバック関数でBLEスキャンを開始する関数です。

:::

## BLE Advertising

このBluetoothアドバタイジングチュートリアルは、Nordic Connect SDKで動作するように変更された公式[サンプル](https://academy.nordicsemi.com/courses/bluetooth-low-energy-fundamentals/lessons/lesson-2-bluetooth-le-advertising/topic/blefund-lesson-2-exercise-1/)コードに基づいています。開発ボードと公式ドキュメントを組み合わせることで、より多くのBluetooth[アプリケーション](https://academy.nordicsemi.com/courses/bluetooth-low-energy-fundamentals/)に取り組むことができます。

スマートフォンがXIAO nRF54L15に接続されていない間、オンボードインジケータは常時点灯したままです。スマートフォンが正常に接続されると、インジケータが点滅を開始し、接続が確立されたことを示します。

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/BLE.gif" alt="XIAO nRF54L15 Ultra-low Power Consumption in System Off Mode" style={{width:900, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>携帯電話接続 XIAO nRF54L15</em></p>
</div>

### BLE Advertisingソフトウェアのインストール

この例では、携帯電話に公式Bluetoothテスト[アプリ](https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-mobile)であるnRF Connectをダウンロードする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrfconnect_app.png" style={{width:600, height:'auto'}}/></div>
XIAO nRF54L15 Senseボードにプログラムをフラッシュした後、nRF Connectアプリのメインページを開いて操作できます。

- ステップ1. nRF Connectアプリで、右上角のスキャンボタンをクリックしてBluetoothデバイスのスキャンを開始します。

- ステップ2. 次に、XIAO nRF54L15 Senseデバイスの名前を「Name」フィールドに入力します。これにより、デバイスをフィルタリングして素早く見つけることができます。

- ステップ3. スキャン結果エリアで、XIAO nRF54L15 Senseデバイスを見つけて、その横にある「Connect」ボタンをクリックします。

接続が成功すると、デバイス詳細ページに移動します。このページでは、異なる時間帯におけるBluetooth信号強度（RSSI）の分布を観察でき、デバイス接続の安定性を理解するのに役立ちます。

<div class="table-center">
 <table align="center">
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/ble_image.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/ble_image2.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
 </table>
</div>

### XIAO nRF54L15ボードの追加

XIAO nRF54L15(Sense)ボードをNCS（nRF Connect SDK）に追加するには、Seeed Studio Wikiの[「Getting Started」](https://wiki.seeedstudio.com/ja/xiao_nrf54l15_sense_getting_started/)ガイドを参照してください。このガイドでは、プロセスの詳細な手順を提供します。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### BLEアドバタイジングコード

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

- `ad:` アドバタイジングデータを定義し、一般的な発見可能フラグとBR/EDRサポートなしフラグ、および完全なデバイス名を含みます。

- `sd:` スキャン応答データを定義し、URI（Uniform Resource Identifier）を含みます。

- `connected:` このコールバック関数は、Bluetoothデバイスが正常に接続されたときに実行されます。device_connectedフラグをtrueに設定します。

- `disconnected:` このコールバック関数は、Bluetoothデバイスが切断されたときに実行されます。device_connectedフラグをfalseに設定し、新しい接続を許可するためにアドバタイジングを再開します。

- `conn_callbacks:` 接続コールバックを定義する構造体で、connectedおよびdisconnected関数をそれぞれのイベントに割り当てます。

- `main:` プログラムのメイン関数。

- `gpio_is_ready_dt:` LED GPIOデバイスが準備完了かどうかをチェックします。

- `gpio_pin_configure_dt:` LEDピンを出力として設定し、初期状態を非アクティブに設定します。

- `bt_enable(NULL):` Bluetoothサブシステムを初期化します。

- `bt_le_adv_start:` Bluetoothアドバタイジングを開始します。このコードは、adおよびsdデータを使用して接続可能なアドバタイジングを開始します。

- `while (1):` 接続状態に基づいてLEDの動作を制御する無限ループ。

- `gpio_pin_toggle_dt:` LEDのオン/オフを切り替えます。

- `k_sleep:` 指定された時間だけスレッドをスリープ状態にします。

- `device_connected:` 接続状態を追跡するブール値フラグ。デバイスが接続されているときはLEDが500ms間隔で点滅します。デバイスが接続されていないときは、LEDがオフになり、プログラムは1000msスリープします。

- `LOG_INF, LOG_ERR:` 情報とエラーをログ出力する関数。

:::

## BLE Central/GATT Write

これらのコードファイルは、Bluetooth Low Energy（BLE）Centralデバイスを実装しています。Centralは継続的に近くのBluetoothペリフェラルをスキャンし、特定のデバイス（RSSIが-50より大きい）を見つけると自動的に接続を確立します。接続が確立されると、データ転送効率を最適化するためにGATT（Generic Attribute Profile）MTU（Maximum Transmission Unit）交換を実行します。

プログラムの中核機能は、接続されたペリフェラルに対してGATT Write Without Responseコマンドを継続的に送信することです。これは、Bluetooth接続のデータスループットや書き込み速度を測定するなど、パフォーマンステストによく使用されます。

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/gatt.png" alt="XIAO nRF54L15 gatt" style={{width:900, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>gatt結果</em></p>
</div>

### XIAO nRF54L15ボードの追加

XIAO nRF54L15(Sense)ボードをNCS（nRF Connect SDK）に追加するには、Seeed Studio Wikiの[「Getting Started」](https://wiki.seeedstudio.com/ja/xiao_nrf54l15_sense_getting_started/)ガイドを参照してください。このガイドでは、プロセスの詳細な手順を提供します。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### BLE Central/GATTコード

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

- `main:` プログラムのエントリーポイント。`0U`のカウントで`central_gatt_write`関数を呼び出します。これは書き込みコマンドが無限に送信されることを意味します。

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

- `device_found:` スキャン中に新しいデバイスが見つかったときにトリガーされるコールバック関数。見つかったデバイスの情報を出力し、接続可能で近距離（RSSI が -50 より大きい）のデバイスに接続を試みます。接続を作成する前にスキャンプロセスを停止します。

- `start_scan:` 見つかったデバイスのコールバックとして`device_found`を使用してアクティブBLEスキャンを開始する関数。

- `mtu_updated:` 新しいTXおよびRX MTUサイズを出力するGATT MTU更新のコールバック関数。

- `gatt_callbacks:` GATTイベントのコールバックとして`mtu_updated`関数を登録する構造体。

- `central_gatt_write:` セントラルデバイスアプリケーションのメイン関数。Bluetoothサブシステムを初期化し、GATTコールバックを登録し、デバイスのスキャンを開始します。その後ループに入り、接続を待機し、GATT書き込みを実行するためにwrite_cmdを繰り返し呼び出します。ループは特定の回数実行するか、無限に実行するように設定できます。

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

- `write_cmd_cb:` bt_gatt_write_without_response_cbのコールバック関数。書き込み回数、長さ、およびビット毎秒（bps）でのデータレートを計算して出力します。最後にデータが受信されてからの時間が1秒を超えた場合、これらのメトリクスをリセットします。

- `mtu_exchange_cb:` MTU（最大転送単位）交換手順後に呼び出されるコールバック関数。交換が成功したか失敗したかを出力し、新しいMTUサイズを表示します。
- `mtu_exchange:`MTU交換手順を開始します。まず現在のMTUを印刷し、その後mtu_exchange_cbをコールバックとして使用してMTU交換を試行します。

- `connected:`接続が確立されたときに実行されるコールバック関数です。接続されたデバイスのアドレスとその役割を印刷します。その後、接続への参照を保存し、MTU交換を開始します。セキュリティが有効な場合、セキュリティレベルの設定を試行します。

- `disconnected:`接続が終了したときに実行されるコールバック関数です。切断されたデバイスのアドレス、その役割、および切断の理由を印刷します。接続参照をクリアし、デバイスがセントラルだった場合はスキャンを再開します。

- `le_param_req:` ペリフェラルからのLE接続パラメータ更新要求を処理するコールバック関数です。要求されたパラメータ（間隔、レイテンシ、タイムアウト）を印刷します。

- `le_param_updated:` 接続パラメータが正常に更新されたときに呼び出されるコールバック関数です。新しい間隔、レイテンシ、タイムアウト値を印刷します。

- `security_changed:`接続のセキュリティレベルが変更されたときに呼び出されるコールバック関数です。

- `write_cmd:` 応答なしのGATT書き込みコマンドを準備して送信する関数です。現在のMTUに基づいて最大データ長を決定し、ハンドル0x0001にデータを送信します。write_cmd_cbをコールバックとして使用します。

:::

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品でのご体験ができる限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
