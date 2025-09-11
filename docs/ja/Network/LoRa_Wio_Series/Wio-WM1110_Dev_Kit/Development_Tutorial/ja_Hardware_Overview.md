---
description: Wio-WM1110 Dev Kit ハードウェア概要
title: ハードウェア概要
keywords:
- Wio-WM1110 Dev Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-WM1110_Dev_Kit_Hardware_Overview
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

Wio WM1110 Dev Kitは、IoTプロジェクトを構築するためのオープンソースプラットフォームです。低消費電力のLoRaネットワーク接続と、広範囲の位置情報サービスを提供します。このキットには、さまざまなセンサーと周辺機器が含まれており、IoTプロジェクトを構築するための多用途なプラットフォームとなっています。

このチュートリアルでは、ハードウェア概要と独自のアプリケーションを開発する方法を紹介します！


## ハードウェア概要

Wio-WM1110 Dev Kitは、[Wio-WM1110 Module](https://www.seeedstudio.com/Wio-WM1110-Module-LR1110-and-nRF52840-p-5676.html)を基にしており、SemtechのLoRa®トランシーバーと位置情報用の多目的ラジオフロントエンドを統合しています。このボードには、THセンサーと3軸加速度計が内蔵されており、さまざまな周辺機器との接続オプションも提供されています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/hardware_overview1.png" alt="pir" width={800} height="auto" /></p>



## ピン配置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/PIN.png" alt="pir" width={800} height="auto" /></p>




## LoRaWAN® 通信

### キーの設定

デバイスがNSを介して通信する前に、3つのキーを登録する必要があります。

Wio-WM1110 DKでは、ユーザーがDevEUI、AppEUI、およびAppKeyを設定できるため、'lorawan_key_config.h'ファイルで独自のパラメータを設定し、それをDKにフラッシュすることができます。

```cpp
...\Seeed_Wio_WM1110_Dev_Board\apps\common\lorawan_key_config.h
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/keys.png" alt="pir" width={800} height="auto" /></p>


**LoRa Basics Modem LoRaWAN® クラスA/Cの例**

アプリケーションは自動的にLoRaWANネットワークに参加する手続きを開始します。詳細は**lorawan_key_config.h**を参照してください。

ネットワークに参加すると（対応するイベントがトリガーされた場合）、アップリンクが定期的に送信されます。この定期的な動作は、LoRa Basics Modemのアラーム機能に基づいています。アラーム関連のイベントがトリガーされるたびに、アプリケーションはアップリンクを要求します。

アップリンクの内容は、`smtc_modem_get_charge()`を呼び出して取得したチャージカウンターの値です。

アプリケーションは、受信したダウンリンクのデータとメタデータを表示することも可能です。

**設定**

いくつかのパラメータは`main_lorawan.h`ヘッダーファイルで更新できます：

| 定数                       | 説明                                                                           |
| -------------------------- | ----------------------------------------------------------------------------- |
| `LORAWAN_APP_PORT`         | アップリンクメッセージに使用されるLoRaWAN® FPort                              |
| `LORAWAN_CONFIRMED_MSG_ON` | LNSからアップリンクメッセージが受信されたことを確認するリクエスト                   |
| `APP_TX_DUTYCYCLE`         | 2つのアップリンク間の秒単位の遅延                                               |

## 位置情報

### GNSS

GNSS衛星が送信する信号の短い部分をキャプチャし、デバイスの位置を計算するために必要な情報（擬似距離）を抽出します。この情報はNAVメッセージに集約され、バックエンドシステムに送信してデバイスの位置を計算することができます。

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTI1MQ_47857_JbH8r_MU_X1uz1V7_1687329215?w=1265&h=592&type=image/jpeg" alt="pir" width={800} height="auto" /></p>

Wio-WM1110のGNSSスキャナーには、以下の2つの動作モードがあります：自律モードと支援モード。

**GNSS自律モード:** 支援位置情報やアルマナックデータを必要とせず、強い衛星信号を検出することを目的としています。そのため、空がよく見える屋外環境に適しています。

**GNSS支援モード:** 最も効率的なGNSS位置情報を提供します。支援情報により、現在の時間と位置で視認可能な衛星のリストを作成し、GNSS衛星の探索範囲を縮小することで、位置情報取得にかかる時間とエネルギーを最適化します。支援情報はLPWANネットワークに合わせて調整されており、送信データ量、特にダウンリンクのサイズと頻度を制限します。支援情報は以下を含みます：
* LR1110の概算位置
* 現在時刻
* 最新の縮小サイズのアルマナック情報（3か月以内）

**GNSS位置情報の例**

この例では、GNSSスキャン手順を示します：

- LoRa Basics Modemライブラリの設定
- *GNSS位置情報ミドルウェア*を使用したGNSSの*スキャン＆送信*機能の実行

**GNSSデモ関連の設定**

`main_geolocation_gnss.h`ヘッダーファイルでは、位置情報パラメータを設定するためのいくつかの定数が定義されています。

| 定数                                     | コメント                                                                                  | 可能な値          | デフォルト値   |
| ---------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------- | ------------- |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_AUTO` | `true`に設定すると、アプリケーションが自動的に支援位置情報を取得するように設定されます       | {`true`,`false`} | `true`        |

支援位置情報の手動モードが選択された場合、以下の定数で使用する位置情報を定義します。

| 定数                                     | コメント                                                                        | 可能な値                | デフォルト値      |
| ---------------------------------------- | ------------------------------------------------------------------------------- | ----------------------- | ---------------- |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LAT`  | GNSS支援スキャンに使用する緯度（10進度）                                         | [-90, 90]の任意の`float` | 45.181454        |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LONG` | GNSS支援スキャンに使用する経度（10進度）                                         | [-180, 180]の任意の`float` | 5.720893         |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_TEXT` | 支援位置情報のテキスト表現（情報印刷用）                                         | 任意の定数文字列         | "Grenoble, FRANCE" |

***注意***: 事前定義された支援位置情報は、実際の位置から150km以内である必要があります。

| 定数                     | コメント                                                                                      | 可能な値               | デフォルト値         |
| ------------------------ | --------------------------------------------------------------------------------------------- | --------------------- | ------------------- |
| `GNSS_SCAN_GROUP_PERIOD` | スキャン＆送信シーケンスの終了から次のシーケンス開始までの期間を定義                           | `uint32_t`            | 30                  |
| `GNSS_SCAN_MODE`         | スキャン＆送信シーケンスに使用するGNSSスキャンモード（静的または移動）を定義                   | `gnss_mw_mode_t`の値  | `GNSS_MW_MODE_STATIC` |

デフォルトで選択されているGNSSスキャンモードは`GNSS_MW_MODE_STATIC`であり、このアプリケーション例は移動しないオブジェクトを対象としています。

### Wi-Fi

デバイスの近くにあるWi-Fi b/g/nアクセスポイントを検出し、デバイスの位置情報を取得するためのMACアドレスを抽出します。目標は少なくとも2つのMACアドレスを取得し、それらをオンラインWi-Fi検索サービスに送信してデバイスの位置を特定することです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Schematic02.png" alt="pir" width={800} height="auto" /></p>

**Wi-Fi位置情報の例**

このアプリケーションでは、Wi-Fi位置情報ミドルウェアの使用方法と、LoRa Basics Modemを設定して前提条件を満たす方法を示します。この例では、Wi-Fiスキャン手順を示します：

- LoRa Basics Modemライブラリの設定
- *Wi-Fi位置情報ミドルウェア*を使用したWi-Fiの*スキャン＆送信*機能の実行

**Wi-Fiデモ関連の設定**

`main_geolocation_wifi.h`ヘッダーファイルでは、アプリケーションの設定可能なパラメータを定義するためのいくつかの定数が定義されています。

| 定数               | コメント                                                                                      | 可能な値       | デフォルト値   |
| ------------------ | --------------------------------------------------------------------------------------------- | ------------- | ------------- |
| `WIFI_SCAN_PERIOD` | スキャン＆送信シーケンスの終了から次のシーケンス開始までの期間を定義                           | `uint32_t`    | 30            |

### GNSSとWi-Fi

**GNSSとWi-Fi位置情報の例**
この例では、GNSSとWi-Fiスキャン手順の組み合わせを示します：

- LoRa Basics Modemライブラリの設定
- *GNSS位置情報ミドルウェア*と*Wi-Fi位置情報ミドルウェア*を使用したGNSSとWi-Fiの*スキャン＆送信*機能の同時実行

**ジオロケーションデモに関連する設定**

`main_geolocation_gnss_wifi.h` ヘッダーファイルでは、ジオロケーションパラメータを設定するためのいくつかの定数が定義されています。

| 定数                                     | コメント                                                                                  | 可能な値           | デフォルト値    |
| ---------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------ | -------------- |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_AUTO` | `true` に設定すると、アプリケーションが自律的にアシスタンス位置を取得するように構成されます | {`true`,`false`}  | `false`        |

アシスタンス位置に手動モードを選択した場合、以下の定数で使用する位置を定義します。

| 定数                                     | コメント                                                                        | 可能な値                  | デフォルト値         |
| ---------------------------------------- | ------------------------------------------------------------------------------- | ------------------------ | ------------------- |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LAT`  | GNSS アシストスキャンに使用する緯度（10進度）                                   | [-90, 90] の任意の `float` | 45.181454           |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LONG` | GNSS アシストスキャンに使用する経度（10進度）                                   | [-180, 180] の任意の `float` | 5.720893            |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_TEXT` | アシスタンス位置のテキスト表現（情報出力用）                                    | 任意の定数 c-string       | "Grenoble, FRANCE" |

***注意***: 事前定義されたアシスタンス位置は、実際の位置から150 km以内である必要があります。

| 定数                     | コメント                                                                                      | 可能な値               | デフォルト値          |
| ------------------------ | --------------------------------------------------------------------------------------------- | --------------------- | -------------------- |
| `GNSS_SCAN_GROUP_PERIOD` | スキャン＆送信シーケンスの終了から次のシーケンスの開始までの期間を定義します                   | `uint32_t`            | 30                   |
| `GNSS_SCAN_MODE`         | スキャン＆送信シーケンスに使用する GNSS スキャンモード（静的または移動）を定義します           | `gnss_mw_mode_t` の値 | `GNSS_MW_MODE_MOBILE` |

デフォルトで選択されている GNSS スキャンモードは `GNSS_MW_MODE_MOBILE` であり、このアプリケーション例は移動体を対象としています。


## BLE

Bluetooth Low Energy (BLE)、または Bluetooth Low Energy としても知られる BLE は、長期的な電源供給、低データ転送速度、短距離通信を必要とするデバイス向けに設計された低消費電力かつ低複雑性の通信技術です。Bluetooth 技術を基に最適化された BLE は、消費電力が低く、プロトコルスタックが簡素化されており、低消費電力および IoT（モノのインターネット）アプリケーションに適しています。

Wio-WM1110 は、nRF52840 チップをベースにした Low Energy Bluetooth を搭載しています。


**Bluetooth ルーチンでのテスト**

SDK には「Bluetooth: Peripheral UART」サンプルがあります。このテストを実行するには、サンプルに接続し、接続されたターミナルエミュレーターを開いている必要があります。

BLE デモの場所:
`nRF5_SDK_17.1.0_ddde560/examples/ble_peripheral/ble_app_uart/pca10056/s140/ses/`


* [モバイルデバイスでのテスト](https://infocenter.nordicsemi.com/index.jsp?topic=%2Fug_gsg_ses%2FUG%2Fgsg%2Ftest_mobile.html)

* [コンピュータでのテスト](https://infocenter.nordicsemi.com/index.jsp?topic=%2Fug_gsg_ses%2FUG%2Fgsg%2Ftest_desktop.html)

## 搭載センサー

### 温湿度センサー(SHT41)

SHT41はデジタル温湿度センサーであり、I2Cインターフェースを介してマイクロコントローラーやその他のデジタルデバイスと通信します。

SHT41センサーは、HVACシステム、気象観測所、室内空気質モニタリング、産業プロセス制御など、幅広い用途で一般的に使用されています。その小型サイズ、低消費電力、高精度により、さまざまなプロジェクトで人気の選択肢となっています。

|  | 範囲 | 精度 |
| -------- | -------- | -------- |
| 温度 | -40~125°C | 0.2°C |
| 湿度 | 0~100%RH | 1.8%RH |

**コード:**

この例では、センサーの初期化、温度と湿度の値の読み取り、温度単位の設定に関する関数を提供します。

以下は、このコードで定義されている関数の簡単な概要です：

**SHT41Init**: センサーをリセットし、1ms待機してから処理を進める初期化関数。

**SHT41GetTemperature, SHT41GetHumidity, SHT41GetTempAndHumi**: センサーから温度および/または湿度の値を読み取る関数。これらの関数は、生のセンサー値を現在の温度単位設定に応じて摂氏または華氏の浮動小数点値に変換します。

**SHT41SetTemperatureUnitとSHT41GetTemperatureUnit**: 温度単位を設定および取得する関数。

**crc8**: バイト配列のCRC-8チェックサムを計算する内部関数。

---

### 3軸加速度センサー(LIS3DHTR)

LIS3DHTRは、3次元の加速度を測定し、正確で信頼性の高い読み取り値を提供する高性能センサーです。

LIS3DHTRセンサーは、I2CまたはSPIインターフェースを介してマイクロコントローラーやその他のデジタルデバイスと通信します。また、プログラム可能な割り込みや、消費電力を最小限に抑えるための幅広い省電力モードなどの高度な機能も備えています。

| 範囲 | 帯域幅 | 感度(LSB/g) |
| -------- | -------- | -------- | 
| ±2g, 4g, 8g, 16g | 0.5Hz ~ 625Hz | 1000 (±2g) ~ 83 (±16g) |

---

## Grove

DKには3つのGroveインターフェースがあり、400以上のGroveモジュールに接続可能で、ADC/UARTおよびIIC伝送プロトコルをサポートしています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/grove_pins.png" alt="pir" width={600} height="auto" /></p>

---

### Grove IIC

DKにはGrove IICポートがあり、`SDA`はピン27、`SCL`はピン26に接続されています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_iic.png" alt="pir" width={300} height="auto" /></p>

Grove IICモジュールに接続するには、センサー電源を有効にする必要があります：`I2C_PWR` (ピン7)。このピンはIIC信号線のプルアップ電圧を制御します：

```cpp
#define IIC_POWER          7
```

使用前に`sdk_config.h`ファイルでTWIを有効にする必要があります。

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

**コード例**

この例では、IICインターフェースを介して[SHT41温湿度センサー](https://wiki.seeedstudio.com/ja/Grove-SHT4x/)の値を読み取り、シリアルモニターに出力します。

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

これにより、温度と湿度の値が取得されます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/valueSHT41.png" alt="pir" width={500} height="auto" /></p>

---

### Grove UART

Wio-WM1110 DKには2つのUARTペリフェラル、すなわち`uart0`と`uart1`があります。`uart0`のピンはデバッグ目的でCH340Cに接続されており、`uart1`はGrove UARTポートとして機能します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_uart.png" alt="pir" width={300} height="auto" /></p>

回路図を参照すると、TXDはピン8、RXDはピン6に位置しています。

```cpp
#define     LED1                      13
#define     LED2                      14
#define     TXD                       8
#define     RXD                       6
#define     UART_TX_RX_BUF_SIZE       256
```

:::tip 注意
ADCのようなアナログインターフェースを除き、nRF52840チップには他のデジタルペリフェラル用の固定ピンがあります。ただし、他のデジタルペリフェラルは任意のピンに再マッピング可能です。例えば、RXDとTXDのピン構成を交換することができます。
:::

使用前に`sdk_config.h`ファイルでUARTを有効にする必要があります：

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

**コード例**

以下のサンプルコードは、シリアルポートの送受信機能をフィードバック付きで実装しています。

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

DK には 8 つの ADC ペリフェラル（0～7）があり、`ADC6` と `ADC7` は Grove ADC ポートとして使用されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_adc.png" alt="pir" width={300} height="auto" /></p>

:::tip 注意
ADC ピンは固定されており、リマップすることはできません。
:::

ADC ピンの対応関係は以下の表に示されています：

|ADC0|ADC1|ADC2|ADC3|ADC4|ADC5|ADC6|ADC7|
|:-------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
|2|3|4|5|28|29|30|31|

`sdk_config.h` ファイルで SAADC を有効にする必要があります：

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

以下は ADC6 のサンプルプログラムで、ADC6 ピンの単一チャネルのアナログ入力値を読み取り、測定した ADC 値を UART 経由で出力する機能を実装しています：

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

**Wio-WM1110 Dev Kit に関するサポートが必要ですか？私たちがサポートします！**




<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions" class="button_discussion"></a>
</div>