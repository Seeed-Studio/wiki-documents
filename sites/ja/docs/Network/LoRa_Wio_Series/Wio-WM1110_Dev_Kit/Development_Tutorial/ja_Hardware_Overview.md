---
description: Wio-WM1110 Dev Kit ハードウェア概要
title: ハードウェア概要
keywords:
- Wio-WM1110 Dev Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-WM1110_Dev_Kit_Hardware_Overview
last_update:
  date: 8/8/2023
  author: Jessie
---


Wio WM1110 Dev Kitは、IoTプロジェクトを構築するためのオープンソースプラットフォームです。低消費電力のLoRaネットワーク接続と包括的な位置情報サービスを提供します。このキットには様々なセンサーとペリフェラルも含まれており、IoTプロジェクトを構築するための多用途プラットフォームとなっています。

このチュートリアルでは、ハードウェア概要と独自のアプリケーションの開発方法を紹介します！

## ハードウェア概要

Wio-WM1110 Dev Kitは[Wio-WM1110 Module](https://www.seeedstudio.com/Wio-WM1110-Module-LR1110-and-nRF52840-p-5676.html)をベースとしており、Semtech社のLoRa®トランシーバーと位置情報用の多目的無線フロントエンドを統合しています。ボードには温湿度センサーと3軸加速度計が内蔵されており、様々なペリフェラルの接続オプションも提供しています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/hardware_overview1.png" alt="pir" width={800} height="auto" /></p>

## ピン配置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/PIN.png" alt="pir" width={800} height="auto" /></p>

## LoRaWAN®通信

### キーの設定

デバイスがNS経由で通信する前に、3つのキーでデバイスを登録する必要があります。

Wio-WM1110 DKでは、ユーザーがDevEUI、AppEUI、AppKeyを設定できるため、'lorawan_key_config.h'ファイルで独自のパラメータを設定し、DKにフラッシュできます。

```cpp
...\Seeed_Wio_WM1110_Dev_Board\apps\common\lorawan_key_config.h
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/keys.png" alt="pir" width={800} height="auto" /></p>

**LoRa Basics Modem LoRaWAN® Class A/C 例**

アプリケーションは自動的に LoRaWAN ネットワークに参加する手順を開始します。**lorawan_key_config.h** を参照してください。

ネットワークに参加すると（つまり、対応するイベントがトリガーされると）、アップリンクが定期的に送信されます。この定期的なアクションは、LoRa Basics Modem のアラーム機能に基づいています。アラーム関連のイベントがトリガーされるたびに、アプリケーションはアップリンクを要求します。

アップリンクの内容は、`smtc_modem_get_charge()` を呼び出すことで充電カウンターから読み取られた値です。

アプリケーションは、受信したダウンリンクのデータとメタデータを表示することもできます。

**設定**

`main_lorawan.h` ヘッダーファイルでいくつかのパラメータを更新できます：

| 定数                       | 説明                                                                         |
| -------------------------- | ----------------------------------------------------------------------------- |
| `LORAWAN_APP_PORT`         | アップリンクメッセージに使用される LoRaWAN® FPort                                |
| `LORAWAN_CONFIRMED_MSG_ON` | アップリンクメッセージが受信されたことの LNS からの確認を要求                      |
| `APP_TX_DUTYCYCLE`         | 2つのアップリンク間の遅延（秒）                                                |

## 測位

### GNSS

GNSS衛星から放送される信号の短い部分をキャプチャし、デバイス位置を計算するために必要な情報（疑似距離）を抽出します。この情報はNAVメッセージに集約され、バックエンドシステムに送信してデバイス位置を計算できます。

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTI1MQ_47857_JbH8r_MU_X1uz1V7_1687329215?w=1265&h=592&type=image/jpeg" alt="pir" width={800} height="auto" /></p>

Wio-WM1110のGNSSスキャナーには、自律モードとアシストモードの2つの動作モードがあります。

**GNSS自律モード：** アシスタンス位置やアルマナックデータを必要とせず、強い衛星信号の検出を目的とします。そのため、空の視界が良好な屋外条件に適しています。

**GNSSアシストモード：** 最も効率的なGNSS地理位置測定を可能にします。アシスタンス情報により、現在の時刻と位置で視界内にある衛星のリストを構築し、GNSS衛星の検索空間を削減することで、地理位置測定に費やす時間とエネルギーを最適化できます。アシスタンス情報はLPWANネットワークに合わせて調整され、送信データ、特にダウンリンクのサイズと頻度を制限します。これは以下で構成されます：

- LR1110の概算位置
- 現在時刻
- 最新の縮小サイズアルマナック情報（3ヶ月未満）

**地理位置測定GNSSの例**

この例では、GNSSスキャン手順を説明します：

- LoRa Basics Modemライブラリの設定、および
- *GNSS地理位置測定ミドルウェア*を使用したGNSS *スキャン & 送信* 機能の実行。

**GNSSデモンストレーション関連設定**

`main_geolocation_gnss.h`ヘッダーファイルは、地理位置測定パラメータを設定するためのいくつかの定数を定義します。

| 定数                                     | コメント                                                                                | 可能な値         | デフォルト値  |
| ---------------------------------------- | --------------------------------------------------------------------------------------- | ---------------- | ------------- |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_AUTO` | `true`に設定した場合：アプリケーションが自律的にアシスタンス位置を取得するよう設定      | {`true`,`false`} | `true`        |

手動モードでアシスタンス位置が選択された場合、以下の定数が使用される位置を定義します。

| 定数                                     | コメント                                                                        | 可能な値                   | デフォルト値       |
| ---------------------------------------- | ------------------------------------------------------------------------------- | -------------------------- | ------------------ |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LAT`  | GNSSアシストスキャンに使用する緯度（十進度）                                     | [-90, 90]の任意の`float`   | 45.181454          |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LONG` | GNSSアシストスキャンに使用する経度（十進度）                                    | [-180, 180]の任意の`float` | 5.720893           |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_TEXT` | アシスタンス位置のテキスト表現、情報印刷のみに使用 | 任意の定数c文字列      | "Grenoble, FRANCE" |

***注意***：事前定義された支援位置は、実際の位置から150km以内の範囲内にある必要があります。

| 定数                     | コメント                                                                                      | 可能な値                  | デフォルト値          |
| ------------------------ | --------------------------------------------------------------------------------------------- | ------------------------- | --------------------- |
| `GNSS_SCAN_GROUP_PERIOD` | スキャン＆送信シーケンスの終了から次のシーケンスの開始までの間隔を定義します                 | `uint32_t`                | 30                    |
| `GNSS_SCAN_MODE`         | スキャン＆送信シーケンスに使用するGNSSスキャンモード（静的またはモバイル）を定義します        | `gnss_mw_mode_t`内の値    | `GNSS_MW_MODE_STATIC` |

デフォルトで選択されるGNSSスキャンモードは`GNSS_MW_MODE_STATIC`で、このアプリケーション例が非移動オブジェクトを対象としていることを意味します。

### Wi-Fi

デバイス周辺で利用可能なWi-Fi b/g/nアクセスポイントを発見し、デバイスの位置特定を可能にするMACアドレスを抽出します。目的は、オンラインWi-Fi検索サービスに送信された後、デバイスの位置特定に使用できる少なくとも2つのMACアドレスを取得することです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Schematic02.png" alt="pir" width={800} height="auto" /></p>

**位置情報Wi-Fi例**

このアプリケーションは、Wi-Fi位置情報ミドルウェアの使用方法と、前提条件を満たすためにLoRa Basics Modemをどのように設定すべきかを実演します。
この例では、Wi-Fiスキャン手順を説明します：

- LoRa Basics Modemライブラリの設定；および
- *Wi-Fi位置情報ミドルウェア*を使用したWi-Fi *スキャン & 送信*機能の実行。

**Wi-Fiデモンストレーション関連設定**

`main_geolocation_wifi.h`ヘッダーファイルは、アプリケーションの設定可能なパラメータを定義するために設定できるいくつかの定数を定義します。

| 定数               | コメント                                                                                      | 可能な値        | デフォルト値  |
| ------------------ | --------------------------------------------------------------------------------------------- | --------------- | ------------- |
| `WIFI_SCAN_PERIOD` | スキャン & 送信シーケンスの終了から次のシーケンスの開始までの期間を定義                       | `uint32_t`      | 30            |

### GNSS と Wi-Fi

**ジオロケーション GNSS と Wi-Fi の例**
この例では、GNSS と Wi-Fi スキャン手順の組み合わせを説明します：

- LoRa Basics Modem ライブラリの設定、および
- *GNSS ジオロケーション ミドルウェア*と *Wi-Fi ジオロケーション ミドルウェア*を使用した GNSS と Wi-Fi の*スキャン & 送信*機能の同時実行。

**ジオロケーション デモンストレーション関連設定**

`main_geolocation_gnss_wifi.h` ヘッダーファイルは、ジオロケーション パラメータを設定するためのいくつかの定数を定義します。

| 定数                                     | コメント                                                                                | 可能な値         | デフォルト値  |
| ---------------------------------------- | --------------------------------------------------------------------------------------- | ---------------- | ------------- |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_AUTO` | `true` に設定した場合：アプリケーションが自律的にアシスタンス位置を取得するように設定   | {`true`,`false`} | `false`       |

手動モードでアシスタンス位置が選択された場合、以下の定数が使用される位置を定義します。

| 定数                                     | コメント                                                                        | 可能な値                   | デフォルト値       |
| ---------------------------------------- | ------------------------------------------------------------------------------- | -------------------------- | ------------------ |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LAT`  | GNSSアシストスキャンに使用する緯度（十進度）                                     | [-90, 90]の任意の`float`   | 45.181454          |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LONG` | GNSSアシストスキャンに使用する経度（十進度）                                    | [-180, 180]の任意の`float` | 5.720893           |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_TEXT` | アシスタンス位置のテキスト表現、情報印刷のみに使用 | 任意の定数c文字列      | "Grenoble, FRANCE" |

***注意***：事前定義された支援位置は、実際の位置から150km以内の範囲内にある必要があります。

| 定数                     | コメント                                                                                      | 可能な値                  | デフォルト値          |
| ------------------------ | --------------------------------------------------------------------------------------------- | ------------------------- | --------------------- |
| `GNSS_SCAN_GROUP_PERIOD` | スキャン＆送信シーケンスの終了と次のシーケンスの開始の間の期間を定義します                    | `uint32_t`                | 30                    |
| `GNSS_SCAN_MODE`         | スキャン＆送信シーケンスに使用するGNSSスキャンモード（静的またはモバイル）を定義します        | `gnss_mw_mode_t`内の値    | `GNSS_MW_MODE_MOBILE` |

デフォルトで選択されるGNSSスキャンモードは`GNSS_MW_MODE_MOBILE`で、このアプリケーション例が移動体を対象としていることを意味します。

## BLE

Low Energy Bluetooth（BLE）は、Bluetooth Low Energyとも呼ばれ、長期間の電源供給、低データ転送速度、短い通信距離を必要とするデバイスに低電力で低複雑性の通信方法を提供するために設計されたワイヤレス通信技術です。Bluetooth技術をベースに最適化されたBLEは、より低い消費電力とよりシンプルなプロトコルスタックを持ち、低電力およびモノのインターネット（IoT）アプリケーションに適しています。

Wio-WM1110はnRF52840チップをベースとしたLow Energy Bluetoothを搭載しています。

**Bluetoothルーチンでのテスト**

SDKには「Bluetooth: Peripheral UART」サンプルがあります。テストには、サンプルに接続し、接続されたターミナルエミュレータを開いている必要があります。

BLEデモの場所：
`nRF5_SDK_17.1.0_ddde560/examples/ble_peripheral/ble_app_uart/pca10056/s140/ses/`

- [モバイルデバイスでのテスト](https://infocenter.nordicsemi.com/index.jsp?topic=%2Fug_gsg_ses%2FUG%2Fgsg%2Ftest_mobile.html)

- [コンピュータでのテスト](https://infocenter.nordicsemi.com/index.jsp?topic=%2Fug_gsg_ses%2FUG%2Fgsg%2Ftest_desktop.html)

## オンボードセンサー

### THセンサー(SHT41)

SHT41はデジタル湿度・温度センサーで、I2Cインターフェースを通じてマイクロコントローラーやその他のデジタルデバイスと通信します。

SHT41センサーは、HVACシステム、気象観測所、室内空気質監視、産業プロセス制御など、幅広いアプリケーションで一般的に使用されています。小型サイズ、低消費電力、高精度により、さまざまなタイプのプロジェクトで人気の選択肢となっています。

|  | 範囲 | 精度 |
| -------- | -------- | -------- |
|温度  | -40~125°C |0.2°C|
| 湿度 | 0~100%RH |1.8%RH|

**コード:**

この例では、センサーの初期化、温度と湿度の値の読み取り、および温度単位の設定を行う関数を提供します。

このコードで定義されている関数の簡単な概要は以下の通りです：

**SHT41Init**: センサーをリセットして1ms待機してから処理を続行することで、センサーを初期化する関数。

**SHT41GetTemperature、SHT41GetHumidity、およびSHT41GetTempAndHumi**: センサーから温度および/または湿度の値を読み取る関数。これらの関数は、現在の温度単位設定に応じて、生のセンサー値を摂氏または華氏の浮動小数点値に変換します。

**SHT41SetTemperatureUnitおよびSHT41GetTemperatureUnit**: 温度単位を設定および取得する関数。
crc8: バイト配列のCRC-8チェックサムを計算する内部関数。

### 3軸加速度センサー(LIS3DHTR)

LIS3DHTRは、3次元の加速度を測定し、正確で信頼性の高い読み取り値を提供する高性能センサーです。

LIS3DHTRセンサーは、I2CまたはSPIインターフェースを通じてマイクロコントローラーやその他のデジタルデバイスと通信します。また、プログラム可能な割り込みや、消費電力を最小限に抑えるための幅広い省電力モードなどの高度な機能も含まれています。

| 範囲 | 帯域幅 | 感度(LSB/g) |
| -------- | -------- | -------- |
| ±2g, 4g, 8g, 16g | 0.5Hz ~ 625Hz |1000 (±2g) ~ 83 (±16g)

## Grove

DKには3つのGroveインターフェースがあり、400以上のGroveモジュールに接続でき、ADC/UARTおよびIIC伝送プロトコルをサポートしています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/grove_pins.png" alt="pir" width={600} height="auto" /></p>

### Grove IIC

DKにはGrove IICポートがあり、`SDA`はピン27、`SCL`はピン26にあります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_iic.png" alt="pir" width={300} height="auto" /></p>

Grove IICモジュールに接続するには、センサー電源を有効にする必要があります：`I2C_PWR`（ピン7）。このピンはIIC信号線のプルアップ電圧を制御します：

```cpp
#define IIC_POWER          7
```

使用前に `sdk_config.h` ファイルでTWIを有効にする必要があります。

```cpp
// <e> TWI_ENABLED - nrf_drv_twi - TWI/TWIM peripheral driver - legacy layer
//==========================================================
#ifndef TWI_ENABLED
#define TWI_ENABLED 1
#endif
// <e> TWI0_ENABLED - Enable TWI0 instance
//==========================================================
#ifndef TWI0_ENABLED
#define TWI0_ENABLED 1
#endif
// <q> TWI0_USE_EASY_DMA  - Use EasyDMA (if present)
#ifndef TWI0_USE_EASY_DMA
#define TWI0_USE_EASY_DMA 1
#endif
// </e>
// <e> TWI1_ENABLED - Enable TWI1 instance
//==========================================================
#ifndef TWI1_ENABLED
#define TWI1_ENABLED 1
#endif
// <q> TWI1_USE_EASY_DMA  - Use EasyDMA (if present)
 #ifndef TWI1_USE_EASY_DMA
#define TWI1_USE_EASY_DMA 1
#endif
```

**サンプルコード**

この例では、IICインターフェースを通じて[SHT41温湿度センサー](https://wiki.seeedstudio.com/ja/Grove-SHT4x/)の値を読み取り、シリアルモニターに出力します。

```cpp
#include "nrf_gpio.h"
#include "nrf_gpiote.h"
#include "nrf_drv_gpiote.h"
#include "nrf_delay.h"
#include "app_error.h"
#include "sht41.h"
#include "nrf_drv_twi.h"

int main(void)
{   
    float   temp = 0;
    float   humi = 0;
    hal_i2c_master_init( );
    hal_gpio_init_out( SENSOR_POWER, HAL_GPIO_SET ); 
    nrf_delay_ms(10);

    SHT41Init();
    
    while(1){
        SHT41GetTempAndHumi(&temp,&humi);
        nrf_delay_ms(1000);  
        printf("temperature:%.3f humidity:%.3f\n",temp,humi);
    }

}
```

すると、温度と湿度の値が取得できます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/valueSHT41.png" alt="pir" width={500} height="auto" /></p>

### Grove UART

Wio-WM1110 DKには2つのUARTペリフェラルがあり、それぞれ`uart0`と`uart1`です。`uart0`のピンはデバッグ用にCH340Cに接続されており、`uart1`はGrove UARTポートとして機能します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_uart.png" alt="pir" width={300} height="auto" /></p>

回路図を参照すると、TXDはピン8に、RXDはピン6に配置されています。

```cpp
#define     LED1                      13
#define     LED2                      14
#define     TXD                       8
#define     RXD                       6
#define     UART_TX_RX_BUF_SIZE       256
```

:::tip Note
ADCなどのアナログインターフェースを除き、nRF52840チップの他のデジタル周辺機器は固定ピンを持っています。ただし、他のデジタル周辺機器は任意のピンに再マッピングできます。例えば、RXDとTXDピンの設定を交換することができます。
:::

UARTを使用する前に、`sdk_config.h`ファイルで有効にする必要があります：

```cpp
/ <e> NRFX_UARTE_ENABLED - nrfx_uarte - UARTE peripheral driver
//==========================================================
#ifndef NRFX_UARTE_ENABLED
#define NRFX_UARTE_ENABLED 1
#endif
// <o> NRFX_UARTE0_ENABLED - Enable UARTE0 instance 
#ifndef NRFX_UARTE0_ENABLED
#define NRFX_UARTE0_ENABLED 1
#endif

// <o> NRFX_UARTE1_ENABLED - Enable UARTE1 instance 
#ifndef NRFX_UARTE1_ENABLED
#define NRFX_UARTE1_ENABLED 1
#endif

// <e> UART_ENABLED - nrf_drv_uart - UART/UARTE peripheral driver - legacy layer
//==========================================================
#ifndef UART_ENABLED
#define UART_ENABLED 1
#endif
```

**サンプルコード**

以下のサンプルコードは、フィードバック付きのシリアルポート送受信機能を実装しています。

```cpp
#include "nrf_gpio.h"
#include "nrf_gpiote.h"
#include "nrf_drv_gpiote.h"
#include "nrf_delay.h"
#include "smtc_hal.h"
#include "app_uart.h"
#include "app_error.h"
#include "nrf_uart.h"
#include "nrf_drv_uart.h"

static void uart_handleEvent( app_uart_evt_t *pEvent );

APP_UART_DEF( uart, 0, UART_TX_RX_BUF_SIZE, uart_handleEvent );

static app_uart_comm_params_t const commParams =
{
    .rx_pin_no    = RXD,
    .tx_pin_no    = TXD,
    .rts_pin_no   = NRF_UART_PSEL_DISCONNECTED,
    .cts_pin_no   = NRF_UART_PSEL_DISCONNECTED,                    
    .flow_control = APP_UART_FLOW_CONTROL_DISABLED,
    .use_parity   = false,
    .baud_rate    = NRF_UART_BAUDRATE_115200
};

void uart_tx( uint8_t* buff, uint16_t len )
{
        for( uint16_t i = 0; i < len; i++ )
        {
            app_uart_put( &uart, buff[i] );
        }
}


int main(void)
{
    uint32_t err_code;
    uart.comm_params = &commParams;
    uint8_t arr[] = "hello world\n";
    nrf_gpio_cfg_output(LED1);
    nrf_gpio_cfg_output(LED2);
    nrf_gpio_pin_clear(LED1);
    nrf_gpio_pin_clear(LED2);
    app_uart_init( &uart, &uart_buffers, APP_IRQ_PRIORITY_LOWEST );
    
    
    while( 1 )
    {
        nrf_delay_ms(1000);
        nrf_gpio_pin_toggle(LED2);
        uart_tx(arr,strlen(arr));
    }
}
            
void uart_handleEvent(app_uart_evt_t * p_event)
{
 uint8_t dat;
    if (p_event->evt_type == APP_UART_COMMUNICATION_ERROR)
    {
        APP_ERROR_HANDLER(p_event->data.error_communication);
    }
    else if (p_event->evt_type == APP_UART_FIFO_ERROR)
    {
        APP_ERROR_HANDLER(p_event->data.error_code);
    }
 
    else if (p_event->evt_type == APP_UART_DATA_READY)
 {
  app_uart_get(&uart,&dat); 
  app_uart_put(&uart,dat); 
 }
    else if (p_event->evt_type == APP_UART_TX_EMPTY) 
 {
  nrf_gpio_pin_toggle(LED1);
 }
}
```

### Grove ADC

DK上には8つのADCペリフェラル（0～7）があり、`ADC6`と`ADC7`がGrove ADCTポートとして使用されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_adc.png" alt="pir" width={300} height="auto" /></p>

:::tip Note
ADCピンは固定されており、再マッピングできません。
:::

ADCピンの対応関係は以下の表に示されています：

|ADC0|ADC1|ADC2|ADC3|ADC4|ADC5|ADC6|ADC7|
|:-------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
|2|3|4|5|28|29|30|31

SAADCは使用前に`sdk_config.h`ファイルで有効にする必要があります：

```cpp
// <e> SAADC_ENABLED - nrf_drv_saadc - SAADC peripheral driver - legacy layer
//==========================================================
#ifndef SAADC_ENABLED
#define SAADC_ENABLED 1
#endif
// <e> NRFX_SAADC_ENABLED - nrfx_saadc - SAADC peripheral driver
//==========================================================
#ifndef NRFX_SAADC_ENABLED
#define NRFX_SAADC_ENABLED 1
#endif
// <o> SAADC_CONFIG_RESOLUTION  - Resolution
 
// <0=> 8 bit 
// <1=> 10 bit 
// <2=> 12 bit 
// <3=> 14 bit 

#ifndef SAADC_CONFIG_RESOLUTION
#define SAADC_CONFIG_RESOLUTION 2
#endif
```

**サンプルコード**

これはADC6のサンプルプログラムで、ADC6ピンの単一チャンネルのアナログ入力値を読み取り、測定されたADC値をUARTを通じて出力する機能を実装しています：

```cpp
#include "nrf_gpio.h"
#include "nrf_gpiote.h"
#include "nrf_drv_gpiote.h"
#include "nrf_delay.h"
#include "app_uart.h"
#include "app_error.h"
#include "nrf_uart.h"
#include "nrf_drv_uart.h"
#include "nrf_drv_saadc.h"
#define     LED1                     13
#define     LED2                     14
#define     TXD                       8
#define     RXD                       6
#define     UART_TX_RX_BUF_SIZE       256

static void uart_handleEvent( app_uart_evt_t *pEvent );

APP_UART_DEF( uart, 0, UART_TX_RX_BUF_SIZE, uart_handleEvent );

static app_uart_comm_params_t const commParams =
{
    .rx_pin_no    = RXD,
    .tx_pin_no    = TXD,
    .rts_pin_no   = NRF_UART_PSEL_DISCONNECTED,
    .cts_pin_no   = NRF_UART_PSEL_DISCONNECTED,                    
    .flow_control = APP_UART_FLOW_CONTROL_DISABLED,
    .use_parity   = false,
    .baud_rate    = NRF_UART_BAUDRATE_115200
};

void uart_tx( uint8_t* buff, uint16_t len )
{
        for( uint16_t i = 0; i < len; i++ )
        {
            app_uart_put( &uart, buff[i] );
        }
}

void ADC_Interrupt(nrfx_saadc_evt_t const *p_event){
    
}

void uart_handleEvent(app_uart_evt_t * p_event)
{
 uint8_t dat;
    if (p_event->evt_type == APP_UART_COMMUNICATION_ERROR)
    {
        APP_ERROR_HANDLER(p_event->data.error_communication);
    }
    else if (p_event->evt_type == APP_UART_FIFO_ERROR)
    {
        APP_ERROR_HANDLER(p_event->data.error_code);
    }
 
    else if (p_event->evt_type == APP_UART_DATA_READY)
 {
  app_uart_get(&uart,&dat); 
  //app_uart_put(&uart,dat); 
 }
    else if (p_event->evt_type == APP_UART_TX_EMPTY) 
 {
  //nrf_gpio_pin_toggle(LED1);
 }
}

int main(void)
{
    nrf_saadc_value_t  saadc_val = 0; 
    uint8_t arr[32];
    nrf_saadc_channel_config_t channel_config = 
    {                                                   
        .resistor_p = NRF_SAADC_RESISTOR_DISABLED,      
        .resistor_n = NRF_SAADC_RESISTOR_DISABLED,      
        .gain       = NRF_SAADC_GAIN1_6,                
        .reference  = NRF_SAADC_REFERENCE_INTERNAL,     
        .acq_time   = NRF_SAADC_ACQTIME_10US,           
        .mode       = NRF_SAADC_MODE_SINGLE_ENDED,      
        .burst      = NRF_SAADC_BURST_DISABLED,         
        .pin_p      = NRF_SAADC_INPUT_AIN6,       
        .pin_n      = NRF_SAADC_INPUT_DISABLED          
    };
    
    nrf_drv_saadc_init(NULL, ADC_Interrupt);
    nrf_drv_saadc_channel_init(0, &channel_config);

    uart.comm_params = &commParams;
    app_uart_init( &uart, &uart_buffers, APP_IRQ_PRIORITY_LOWEST );

    nrf_gpio_cfg_output(LED2);
    while( 1 )
    {
        nrf_drv_saadc_sample_convert (0,&saadc_val);
        sprintf(arr,"value:%d\n",saadc_val);
        uart_tx(arr,strlen(arr));
        nrf_delay_ms(1000);
        nrf_gpio_pin_toggle(LED2);
    }
}

```

## リソース

[Seeed_Wio_WM1110_Dev_Board](https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board)

[nRF5-SDK](https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs)

## 技術サポート

**Wio-WM1110 Dev Kitでお困りですか？私たちがサポートいたします！**

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions" class="button_discussion"></a>
</div>
