---
title: XIAO STM32C5 CANFD の使用
description: ''
keywords:
  - xiao
  - stm32
  - stm32c5
  - can fd
image: https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/Seeed-Studio-XIAO-STM32C5.webp
slug: /xiao_stm32c5_canfd_usage
sku: 100036669
last_update:
  date: 08/21/2026
  author: Zeller
createdAt: '2026-08-21'
updatedAt: '2026-08-28'
url: https://wiki.seeedstudio.com/ja/xiao_stm32c5_canfd_usage/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiaostm32c5_canfd.png" style={{width:600, height:'auto'}}/></div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html"
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

## CAN バスの概要

CAN（Controller Area Network）は、1983 年に Bosch によって開発が始まり、1986 年に公開されたシリアル通信バスです。当初は車載電子機器向けに設計されましたが、現在では産業オートメーション、ロボット、医療機器、組み込みシステムなどで広く使用されています。

CAN のデータリンク層と高速物理層は、ISO 11898 シリーズの規格によって定義されています。OSI 参照モデルの観点から見ると、CAN は主に次の 2 つの層を規定しています。

- **物理層**：配線、電気信号、ビットタイミング、トランシーバの接続を定義します。
- **データリンク層**：フレーム形式、バス仲裁、エラー検出、フォールトコンファインメントを定義します。

CAN の主な特徴は次のとおりです。

1. **マルチマスタ通信**：バスがアイドル状態のとき、専用マスタによるポーリングに依存せず、任意のノードが送信を試みることができます。
2. **メッセージベースのブロードキャスト**：フレームは送信元および宛先アドレスではなくメッセージ ID を運びます。各ノードはフィルタを用いて、どのメッセージを受信するかを判断します。
3. **非破壊型仲裁**：複数のノードが同時に送信を開始した場合、最上位ビットからビットごとに ID を比較します。最初に異なるビットで、優勢な `0` が劣勢な `1` を上書きし、数値的に小さい ID を持つフレームに高い優先度が与えられます。仲裁に負けたノードは、勝者のフレームを破壊することなく送信を停止します。
4. **堅牢なエラー処理**：CAN コントローラはビットエラー、スタッフィングエラー、CRC エラー、フォーマットエラー、ACK エラーを検出できます。エラーカウンタと自動再送機能により、通信の信頼性が向上します。
5. **低コストな配線と部品**：高速 CAN では通常、1 本のツイストペア、各ノードに 1 個のトランシーバ、およびバス両端に 1 個ずつの終端抵抗だけで済みます。

### CAN の物理信号

高速 CAN では通常、`CAN_H` と `CAN_L` からなるツイストペアが使用されます。レシーバは、2 本の信号線間の差動電圧からバスの状態を判断します。

`V_diff = V(CAN_H) - V(CAN_L)`

- **劣勢ビット `1`**：CAN_H と CAN_L はほぼ同じ電圧レベルとなり、差動電圧は 0 V 付近になります。一般的な 5 V 高速 CAN トランシーバでは、両線とも通常 2.5 V 付近になります。
- **優勢ビット `0`**：CAN_H の電圧が上昇し、CAN_L の電圧が低下します。一般的な 5 V 高速 CAN トランシーバでは、典型的なレベルはそれぞれ約 3.5 V と 1.5 V であり、差動電圧は約 2 V になります。

これらは代表的な電圧値です。実際の値は、トランシーバ、電源電圧、バス負荷、コモンモード電圧によって異なります。規定された動作範囲については、トランシーバのデータシートを参照してください。

CAN バスでは、優勢な `0` が劣勢な `1` よりも優先されます。この特性により、非破壊型のビット単位仲裁が可能となり、受信ノードは ACK スロットで優勢ビットを送信することで、フレームを正しく受信したことを確認できます。

### クラシック CAN データフレーム

次の Classical CAN 2.0A データフレームを例として使用します。ID は 0x00A、DLC は 1、データは 0x81、CRC-15/CAN は 0x18DA です。フィールド名、論理ビット、および CAN_H/CAN_L の波形は列ごとに整列しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_1.png" style={{width:1000, height:'auto'}}/></div>
<br/>
- データフレームのフィールド

| フィールド | 長さ | 説明 |
| --- | ---: | --- |
| SOF | 1 ビット | フレームの開始を示し、ノードを同期させる優勢な `0`。 |
| Identifier | 11 ビット | メッセージを識別し、その仲裁優先度を決定します。 |
| RTR | 1 ビット | データフレームでは優勢な `0`、リモートフレームでは劣勢な `1`。 |
| IDE | 1 ビット | 標準フレームでは優勢な `0`、拡張フレームでは劣勢な `1`。 |
| r0 | 1 ビット | 優勢な `0` として送信される予約ビット。 |
| DLC | 4 ビット | `0` から `8` の値は、`0` ～ `8` バイトのペイロード長を指定します。Classical CAN では、`9` から `15` の値も 8 バイトのペイロードを表します。 |
| Data | 0–8 バイト | DLC で指定されたペイロードを格納します。 |
| CRC sequence | 15 ビット | 受信ノードが伝送エラーを検出できるようにします。 |
| CRC delimiter | 1 ビット | 劣勢な `1` に固定されています。 |
| ACK slot | 1 ビット | 送信側は劣勢な `1` を送信し、エラーなくフレームを受信したノードはそれを優勢な `0` で上書きします。 |
| ACK delimiter | 1 ビット | 劣勢な `1` に固定されています。 |
| EOF | 7 ビット | 7 連続する劣勢ビットがフレームの終わりを示します。 |
| Intermission | 3 ビット | フレームに続く 3 ビットの劣勢ビットで、フレーム自体ではなくインタフレームスペースの一部です。 |

### CAN フレームが送信される仕組み

1. 送信ノードは、バスがアイドル状態であることを検出した後、SOF ビットでフレームを開始します。
2. 複数のノードが同時に送信を開始した場合、仲裁フィールド中にビットごとにバス状態を比較します。劣勢な `1` を送信しながら優勢な `0` を検出したノードは、仲裁に負けて送信を停止します。
3. 勝ったノードは制御フィールドとデータフィールドの送信を続けます。受信ノードは ID によってフレームをフィルタし、DLC からペイロード長を判断します。
4. 受信ノードはスタッフィングビットを除去し、CRC を検証します。フレーム形式と CRC が有効であれば、ACK スロットで優勢な `0` を送信します。
5. 送信ノードは ACK を検出すると送信を完了します。ACK が検出されない場合、ACK エラーを報告し、通常はコントローラの設定に従って再送を試みます。

### ビットスタッフィング

SOF から CRC シーケンスの終わりまで、送信側は同じ論理値が 5 ビット連続した後に、補数のスタッフィングビットを 1 ビット挿入します。受信側はこれらのスタッフィングビットを自動的に除去します。

ビットスタッフィングは、同期のための信号エッジを提供し、エラー検出を支援します。スタッフィングビットはどのフレームフィールドにも属さず、DLC や規定されたフィールド長にも含まれません。そのため、実際の伝送時間はビットレート、ペイロード長、および挿入されたスタッフィングビットの数に依存します。

## CAN FD の概要

Classical CAN は最大 8 バイトのペイロードと最大 1 Mbit/s の公称ビットレートをサポートします。より大きなデータ転送をサポートするため、Bosch は 2012 年に CAN FD（CAN with Flexible Data-rate）を導入しました。

主な改良点は次のとおりです。

- フレームあたりの最大ペイロードを **8 バイト** から **64 バイト** に拡張。
- BRS ビットを使用してデータフェーズ中により高いビットレートへ切り替え、ACK フィールドの前に公称ビットレートへ戻します。
- ペイロード長に応じて 17 ビットまたは 21 ビットの CRC シーケンスを使用し、新しい DLC とペイロード長のマッピングを導入。
- 仲裁フェーズでは、Classical CAN のメッセージ ID とビット単位仲裁メカニズムを維持。

達成可能な CAN FD のデータフェーズビットレートは、コントローラ、トランシーバ、クロック精度、ケーブル長、ノード数、ネットワークトポロジに依存します。一般的なデータフェーズビットレートには 2 Mbit/s、5 Mbit/s など、さらに高い値も含まれます。

## PlatformIO で CAN FD を使用する

XIAO STM32C5 は、オンボードトランシーバと終端抵抗を備えた CAN FD インターフェースを提供しており、CAN_H と CAN_L を介して直接接続できます。

この例では、PlatformIO と Zephyr フレームワーク、および 2 枚の XIAO STM32C5 ボードを使用します。

- **ボード A** は CAN FD フレームを送信します。
- **ボード B** はフレームを受信して処理し、受信データに応じてオンボードのユーザー LED を制御します。

:::note

この例では PlatformIO を使用します。PlatformIO に不慣れな場合は、[XIAO STM32C5 用 PlatformIO 入門](https://wiki.seeedstudio.com/ja/xiao_stm32c5_getting_started/#platformio-入門)を参照してください。

:::

1. CAN ペリフェラルのハードウェアピンリソースを確認します。

XIAO STM32C5 は 2 つの CAN FD インターフェースを提供します。1 つはロジックレベルの TX および RX 信号を出力し、外部 CAN トランシーバに接続できます。もう 1 つはオンボードの [TCAN3403-Q1](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/tcan3403-q1.pdf) CAN FD トランシーバに接続されており、CAN_H と CAN_L を介してバスへ直接アクセスできます。

オンボードの CAN FD 回路には、切り離し可能な 120 Ω 終端抵抗が含まれています。ボードがバスのいずれかの端にある場合は終端抵抗を有効にし、ボードが中間ノードである場合、またはバスの XIAO 側にすでに別の 120 Ω 抵抗が取り付けられている場合は、終端抵抗を切り離してください。トランシーバは、CAN 通信が不要なときに消費電力を削減するスタンバイモードもサポートします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_2.png" style={{width:550, height:'auto'}}/></div>

背面の CAN_H および CAN_L パッドはそのまま使用できます。ただし、丸形パッドを使用する場合は、独立した CAN 変換チップと整合する終端抵抗を使用する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_3.png" style={{width:700, height:'auto'}}/></div>

2. `app.overlay` devicetree ファイルを修正します。XIAO STM32C5 では、`canfd2` ノードが使用されます。CAN 送信/受信ピンは FDCAN2_RX‑PB5 と FDCAN2_TX‑PB13 で、CAN_STB‑PB14 です。対応する devicetree のエイリアスノードは `fdcan2_rx_pb5`、`fdcan2_tx_pb13`、`can_phy0` です。

```dts
/* FDCAN2, transceiver standby, and USB CDC are configured by the board DTS. */

```

3. 設定ファイルを修正し、`fdcan2` に関する設定を追加します。

```conf
# CAN FD: 500 kbit/s arbitration and 2 Mbit/s data phases.
CONFIG_CAN=y
CONFIG_CAN_FD_MODE=y
CONFIG_CAN_DEFAULT_BITRATE=500000
CONFIG_CAN_DEFAULT_BITRATE_DATA=2000000

# Keep application status output enabled; the board routes it to USB CDC.
CONFIG_PRINTK=y
```

4. `main.c` プログラムを作成します。この例では 2 枚の XIAO STM32C5 ボードを使用します。ボード A は送信機として動作し、CAN プロトコルデータを送信します。ボード B は受信機として動作し、CAN メッセージを受信して解析し、その後オンボード LED を点灯させます。

<details>

<summary>CANFD 送信プログラム</summary>

```cpp
/*
 * XIAO STM32C5 CAN FD sender (board A)
 *
 * Sends one 16-byte CAN FD frame with standard ID 0x123 over FDCAN2
 * every second. BRS uses 500 kbit/s for arbitration and 2 Mbit/s for
 * the data phase. Transmission status is printed through USB CDC ACM.
 */
#include <zephyr/device.h>
#include <zephyr/devicetree.h>
#include <zephyr/drivers/can.h>
#include <zephyr/kernel.h>

#include <stdint.h>

#define CAN_NODE DT_CHOSEN(zephyr_canbus)
#define CAN_ID 0x123U
#define CAN_DATA_LENGTH 16U
#define CAN_DATA_DLC 10U
#define SEND_PERIOD_MS 1000

static const struct device *const can_dev = DEVICE_DT_GET(CAN_NODE);

/* Encode multibyte fields explicitly as little-endian wire data. */
static void put_u16_le(uint8_t *dst, uint16_t value)
{
 dst[0] = (uint8_t)value;
 dst[1] = (uint8_t)(value >> 8);
}

static void put_u32_le(uint8_t *dst, uint32_t value)
{
 dst[0] = (uint8_t)value;
 dst[1] = (uint8_t)(value >> 8);
 dst[2] = (uint8_t)(value >> 16);
 dst[3] = (uint8_t)(value >> 24);
}

static uint8_t payload_checksum(const uint8_t *data)
{
 uint8_t checksum = 0U;

 for (size_t i = 0U; i < CAN_DATA_LENGTH - 1U; i++) {
  checksum ^= data[i];
 }

 return checksum;
}

/*
 * 16-byte application payload:
 *   [0..3]   sequence number (uint32, little-endian)
 *   [4..7]   sender uptime in milliseconds (uint32, little-endian)
 *   [8..9]   example measurement A (int16, little-endian)
 *   [10..11] example measurement B (int16, little-endian)
 *   [12]     state value cycling from 0 to 3
 *   [13..14] fixed markers 0x5A and 0xA5
 *   [15]     XOR checksum of bytes 0 through 14
 */
static void build_frame(struct can_frame *frame, uint32_t sequence)
{
 int16_t measurement_a = (int16_t)(250 + (sequence % 50U));
 int16_t measurement_b = (int16_t)(-100 + (sequence % 20U));

 *frame = (struct can_frame) {
  .id = CAN_ID,
  .dlc = CAN_DATA_DLC,
  /* FDF selects CAN FD; BRS enables the faster data phase. */
  .flags = CAN_FRAME_FDF | CAN_FRAME_BRS,
 };

 put_u32_le(&frame->data[0], sequence);
 put_u32_le(&frame->data[4], k_uptime_get_32());
 put_u16_le(&frame->data[8], (uint16_t)measurement_a);
 put_u16_le(&frame->data[10], (uint16_t)measurement_b);
 frame->data[12] = (uint8_t)(sequence & 0x03U);
 frame->data[13] = 0x5AU;
 frame->data[14] = 0xA5U;
 frame->data[15] = payload_checksum(frame->data);
}

int main(void)
{
 uint32_t sequence = 0U;
 int ret;

 if (!device_is_ready(can_dev)) {
  printk("FDCAN2 device is not ready\r\n");
  return 0;
 }

 /* The controller mode must be selected before the controller starts. */
 ret = can_set_mode(can_dev, CAN_MODE_FD);
 if (ret != 0) {
  printk("Failed to enable CAN FD mode: %d\r\n", ret);
  return 0;
 }

 ret = can_start(can_dev);
 if (ret != 0) {
  printk("Failed to start FDCAN2: %d\r\n", ret);
  return 0;
 }

 printk("FDCAN2 sender started: ID=0x%03x, 500 kbit/s + 2 Mbit/s data\r\n",
        CAN_ID);

 while (true) {
  struct can_frame frame;

  build_frame(&frame, sequence);
  /* A NULL callback makes this synchronous, with a 100 ms timeout. */
  ret = can_send(can_dev, &frame, K_MSEC(100), NULL, NULL);
  if (ret == 0) {
   printk("TX sequence=%u time=%u ms state=%u\r\n",
          sequence, k_uptime_get_32(), frame.data[12]);
   sequence++;
  } else {
   printk("FDCAN2 send failed: %d\r\n", ret);
  }

  k_msleep(SEND_PERIOD_MS);
 }

 return 0;
}
```

</details>

<details>

<summary>CAN 受信プログラム</summary>

```cpp
/*
 * XIAO STM32C5 CAN FD receiver (board B)
 *
 * FDCAN2 accepts standard ID 0x123, decodes the 16-byte application
 * payload, and prints it through USB CDC ACM. A valid frame lights the
 * onboard LED for 100 ms. With no traffic, the LED stays off and a
 * timeout warning is printed once per second.
 */
#include <zephyr/device.h>
#include <zephyr/devicetree.h>
#include <zephyr/drivers/can.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/kernel.h>

#include <stdint.h>

#define CAN_NODE DT_CHOSEN(zephyr_canbus)
#define CAN_ID 0x123U
#define CAN_DATA_LENGTH 16U
#define CAN_DATA_DLC 10U
#define LED_FLASH_MS 100
#define RX_POLL_MS 20
#define NO_RX_REPORT_MS 1000

static const struct device *const can_dev = DEVICE_DT_GET(CAN_NODE);
static const struct gpio_dt_spec led =
 GPIO_DT_SPEC_GET(DT_ALIAS(led0), gpios);

/* The driver posts frames from interrupt context; the main loop consumes them. */
CAN_MSGQ_DEFINE(rx_msgq, 10);

/* Decode multibyte fields using the sender's little-endian wire format. */
static uint16_t get_u16_le(const uint8_t *src)
{
 return (uint16_t)src[0] | ((uint16_t)src[1] << 8);
}

static uint32_t get_u32_le(const uint8_t *src)
{
 return (uint32_t)src[0] |
        ((uint32_t)src[1] << 8) |
        ((uint32_t)src[2] << 16) |
        ((uint32_t)src[3] << 24);
}

static uint8_t payload_checksum(const uint8_t *data)
{
 uint8_t checksum = 0U;

 for (size_t i = 0U; i < CAN_DATA_LENGTH - 1U; i++) {
  checksum ^= data[i];
 }

 return checksum;
}

/*
 * Print the raw payload and its decoded fields.
 * A true return value means the XOR checksum passed and permits an LED flash.
 */
static bool print_frame(const struct can_frame *frame)
{
 uint32_t sequence = get_u32_le(&frame->data[0]);
 uint32_t tx_time_ms = get_u32_le(&frame->data[4]);
 int16_t measurement_a = (int16_t)get_u16_le(&frame->data[8]);
 int16_t measurement_b = (int16_t)get_u16_le(&frame->data[10]);
 uint8_t state = frame->data[12];
 uint8_t received_checksum = frame->data[15];
 uint8_t calculated_checksum = payload_checksum(frame->data);

 printk("RX ID=0x%03x DLC=%u DATA=", frame->id, frame->dlc);
 for (size_t i = 0U; i < CAN_DATA_LENGTH; i++) {
  printk("%02x%s", frame->data[i],
         (i == CAN_DATA_LENGTH - 1U) ? "" : " ");
 }
 printk("\r\n");

 printk("PARSED sequence=%u tx_time=%u ms measurement_a=%d "
        "measurement_b=%d state=%u checksum=%s\r\n",
        sequence, tx_time_ms, measurement_a, measurement_b, state,
        received_checksum == calculated_checksum ? "OK" : "ERROR");

 return received_checksum == calculated_checksum;
}

int main(void)
{
 /* Match standard 11-bit ID 0x123; other IDs do not enter the queue. */
 const struct can_filter filter = {
  .id = CAN_ID,
  .mask = CAN_STD_ID_MASK,
  .flags = 0U,
 };
 int64_t led_off_time = 0;
 int64_t last_rx_time = k_uptime_get();
 int64_t last_no_rx_report_time = last_rx_time;
 int filter_id;
 int ret;

 if (!gpio_is_ready_dt(&led)) {
  printk("LED device is not ready\r\n");
  return 0;
 }

 /* GPIO_OUTPUT_INACTIVE honors devicetree polarity and starts with LED off. */
 ret = gpio_pin_configure_dt(&led, GPIO_OUTPUT_INACTIVE);
 if (ret != 0) {
  printk("Failed to configure LED: %d\r\n", ret);
  return 0;
 }

 if (!device_is_ready(can_dev)) {
  printk("FDCAN2 device is not ready\r\n");
  return 0;
 }

 /* Enable CAN FD mode before starting the controller. */
 ret = can_set_mode(can_dev, CAN_MODE_FD);
 if (ret != 0) {
  printk("Failed to enable CAN FD mode: %d\r\n", ret);
  return 0;
 }

 /* Queue matching frames so parsing and printing stay out of interrupt context. */
 filter_id = can_add_rx_filter_msgq(can_dev, &rx_msgq, &filter);
 if (filter_id < 0) {
  printk("Failed to add receive filter: %d\r\n", filter_id);
  return 0;
 }

 ret = can_start(can_dev);
 if (ret != 0) {
  printk("Failed to start FDCAN2: %d\r\n", ret);
  return 0;
 }

 printk("FDCAN2 receiver started: ID=0x%03x, output via USB CDC\r\n",
        CAN_ID);

 while (true) {
  struct can_frame frame;

  /*
   * Poll with a short timeout instead of blocking forever so the loop
   * can turn off the LED and report an absence of CAN traffic.
   */
  if (k_msgq_get(&rx_msgq, &frame, K_MSEC(RX_POLL_MS)) != 0) {
   int64_t now = k_uptime_get();

   if (led_off_time != 0 && now >= led_off_time) {
    (void)gpio_pin_set_dt(&led, 0);
    led_off_time = 0;
   }

   if ((now - last_rx_time) >= NO_RX_REPORT_MS &&
       (now - last_no_rx_report_time) >= NO_RX_REPORT_MS) {
    printk("WARN: no FDCAN2 data received for %lld ms\r\n",
           now - last_rx_time);
    last_no_rx_report_time = now;
   }
   continue;
  }

  last_rx_time = k_uptime_get();
  last_no_rx_report_time = last_rx_time;

  /* This example only decodes 16-byte CAN FD frames. */
  if ((frame.flags & CAN_FRAME_FDF) == 0U ||
      frame.dlc != CAN_DATA_DLC) {
   printk("Ignored non-matching frame: flags=0x%x dlc=%u\r\n",
          frame.flags, frame.dlc);
   (void)gpio_pin_set_dt(&led, 0);
   led_off_time = 0;
   continue;
  }

  if (print_frame(&frame)) {
   /* Logical GPIO levels automatically handle the active-low onboard LED. */
   (void)gpio_pin_set_dt(&led, 1);
   led_off_time = k_uptime_get() + LED_FLASH_MS;
  } else {
   (void)gpio_pin_set_dt(&led, 0);
   led_off_time = 0;
  }
 }

 return 0;
}
```

</details>

5. 結果は次の図のようになります。

- ボード A と B の間で CAN_H を CAN_H に、CAN_L を CAN_L に接続します。別々の電源を使用する場合は、グラウンドも接続します。ボード B はフレームを受信して検証した後、LED を点滅させます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_4.gif" style={{width:500, height:'auto'}}/></div>

- シリアルモニタを使用して、送信および解析されたデータを確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_5.png" style={{width:1000, height:'auto'}}/></div>

## USB から CAN へのブリッジ

CAN ブリッジは、XIAO STM32C5 を USB‑CAN アダプタに変換します。PC と CAN/CAN‑FD バス間でメッセージを双方向に転送し、PC から制御コマンドを送信したり、デバイスの状態を監視したり、バスのトラフィックをログ記録したりできるようにします。代表的なユースケースとしては、ロボット関節モータのデバッグ、自動車 ECU および車載ネットワーク解析、産業用サーボや CAN センサの統合テスト、BMS 状態監視などがあります。ロボット開発を例にすると、PC は CAN ブリッジ経由で関節モータコントローラに有効化、位置、速度コマンドを送信しつつ、角度、電流、温度、フォルト情報を受信できます。

このチュートリアルでは、`gs_usb` と `slcan` の 2 つの実装を提供します。どちらも CAN 側の機能はほぼ同じですが、ホストボードとのデータ転送方式、対応プラットフォーム、CAN‑FD 対応の有無が主な違いです。

### gs_usb と slcan の比較

`gs_usb` は USB‑CAN アダプタ用の通信プロトコルです。ボードは CAN メッセージを USB 経由で PC に転送します。Linux では、カーネル内の `gs_usb` ドライバがこれを `can0` などの SocketCAN インターフェースとして直接登録します。CAN‑FD をサポートし、高スループットを実現するため、高速通信、バスモニタリング、自動テスト、Linux 環境での長期デバッグに適しています。

`slcan` は、CAN メッセージを Lawicel ASCII コマンドでカプセル化する通信方式です。本プロジェクトでは、ボードは USB CDC シリアルポートを介して PC と通信します。ボードは Windows では COM ポート、Linux では `/dev/ttyACMx` として認識されます。SavvyCAN、python‑can、`slcand` と連携して動作させることができます。この方式は、プロトコルがシンプルで、アクセスが柔軟であり、クロスプラットフォーム互換性にも優れています。

### gs_usb を使う

このセクションでは、ビルド済みファームウェアを使用して機能をデモします。ソースコードは `platform‑seeedboards` リポジトリからダウンロードできます。

:::tip

- ボードにはオンボードの 120 Ω 終端抵抗があります。これが有効で、ボードがバスの端にある場合、その端には追加の抵抗は不要です。反対側の端にも終端があることを確認し、中間ノードとして使用する場合はオンボード抵抗を無効にしてください。
- このセクションは Ubuntu 22.04 LTS Linux ディストリビューションを前提としています。

:::

- **📄[Firmware]** [CAN-Bridge-gsusb Firmware](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/can-bridge-gsusb.uf2)
- ソースコードについては GitHub のリンクを参照してください。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/seeed-xiao-stm32c5/zephyr-can/zephyr-can-bridge-gsusb" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> zephyr-can-bridge-gsusb</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>

1. XIAO STM32C5 の Reset ボタンを 2 回押してブートローダーモードに入ります。ファームウェアファイルをダウンロードし、`XIAOC5BOOT` マスストレージドライブにコピーします。CAN‑FD の送受信性能をテストするには、2 枚の XIAO STM32C5 ボードにこのファームウェアを書き込んで検証します。

:::tip
配線については回路図を参照してください。[Using CANFD With PlatformIO](#CANFD-を-PlatformIO-で使用する)
:::

2. ボードを Linux ホストに接続し、ターミナルを開いて必要なソフトウェアパッケージをインストールします。その後、CAN デバイスが列挙され、通常は `can0` と `can1` が表示されます。

```bash
# Install can-utils
sudo apt update
sudo apt install can-utils

# Load gs_usb kernel module
sudo modprobe gs_usb
ip -brief link show type can
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_6.png" style={{width:700, height:'auto'}}/></div>

3. CAN インターフェースを設定します

```bash
# Bring up can0
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 500000 dbitrate 2000000 fd on
sudo ip link set can0 up

# Bring up can1
sudo ip link set can1 down
sudo ip link set can1 type can bitrate 5000000 dbitrate 2000000 fd on
sudo ip link set can1 up
```

4. CAN‑FD トラフィックを送信してモニタします

- 別のターミナルを開き、`can1` インターフェースでデータを受信します。

```bash
candump -x can1
```

- さらに別のターミナルで、`can0` インターフェース経由で BRS を有効にした 12 バイトの CAN‑FD フレームを送信します。

```bash
cansend can0 123##1000102030405060708090A0B
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_7.png" style={{width:700, height:'auto'}}/></div>

5. スクリプトで検証する

- `python‑can` モジュールをインストールします

```bash
sudo apt update
sudo apt install python3-can
```

- 受信側で実行します

<details>

<summary>canfd_2m_test.py</summary>

```python
# SPDX-License-Identifier: Apache-2.0
"""Send or receive CAN FD frames at 500 kbit/s nominal and 2 Mbit/s data."""

import argparse
import time

import can

NOMINAL_BITRATE = 500_000
DATA_BITRATE = 2_000_000


def open_bus(interface, channel, serial_number=None, loop_back=False):
    if interface == "socketcan":
        options = {
            "interface": "socketcan",
            "channel": channel,
            "fd": True,
        }
    else:
        try:
            candle_channel = int(channel)
        except ValueError:
            candle_channel = channel
        options = {
            "interface": "candle",
            "channel": candle_channel,
            "fd": True,
            "bitrate": NOMINAL_BITRATE,
            "data_bitrate": DATA_BITRATE,
            "loop_back": loop_back,
            "ignore_config": True,
        }
        if serial_number:
            options["serial_number"] = serial_number
    return can.Bus(**options)


def make_test_frames():
    payload_12 = bytes(range(12))
    payload_64 = bytes(range(64))
    return (
        can.Message(
            arbitration_id=0x200,
            is_extended_id=False,
            is_fd=True,
            bitrate_switch=True,
            data=payload_12,
        ),
        can.Message(
            arbitration_id=0x201,
            is_extended_id=False,
            is_fd=True,
            bitrate_switch=True,
            data=payload_64,
        ),
    )


def send_frames(bus, count, interval):
    frames = make_test_frames()

    acknowledged = 0
    for _ in range(count):
        for frame in frames:
            try:
                bus.send(frame, timeout=1.0)
                acknowledged += 1
                print(
                    f"TX ID={frame.arbitration_id:#05x} len={len(frame.data)} "
                    f"FD={frame.is_fd} BRS={frame.bitrate_switch}"
                )
            except can.CanError as error:
                print(f"TX failed for ID {frame.arbitration_id:#05x}: {error}")
            time.sleep(interval)

    print(f"Transmission complete: {acknowledged} CAN FD frames submitted")


def loopback_test(bus, count, interval):
    frames = make_test_frames()
    passed = 0
    expected = count * len(frames)

    for _ in range(count):
        for frame in frames:
            bus.send(frame, timeout=1.0)
            deadline = time.monotonic() + 1.0
            received = None

            while time.monotonic() < deadline:
                candidate = bus.recv(timeout=0.1)
                if candidate is None:
                    continue
                if (
                    candidate.arbitration_id == frame.arbitration_id
                    and candidate.is_fd
                    and candidate.bitrate_switch
                    and bytes(candidate.data) == bytes(frame.data)
                ):
                    received = candidate
                    break

            if received is None:
                print(
                    f"FAIL ID={frame.arbitration_id:#05x}: "
                    "no matching loopback frame"
                )
            else:
                passed += 1
                print(
                    f"PASS ID={received.arbitration_id:#05x} "
                    f"len={len(received.data)} FD={received.is_fd} "
                    f"BRS={received.bitrate_switch}"
                )
            time.sleep(interval)

    print(f"Loopback complete: {passed}/{expected} CAN FD frames passed")
    if passed != expected:
        raise RuntimeError("CAN FD loopback test failed")


def receive_frames(bus, duration):
    deadline = time.monotonic() + duration
    received = 0
    while time.monotonic() < deadline:
        frame = bus.recv(timeout=0.5)
        if frame is None:
            continue
        received += 1
        print(
            f"RX ID={frame.arbitration_id:#x} len={len(frame.data)} "
            f"FD={frame.is_fd} BRS={frame.bitrate_switch} "
            f"data={bytes(frame.data).hex().upper()}"
        )
    print(f"Reception complete: {received} frames")


def main():
    parser = argparse.ArgumentParser(
        description="XIAO STM32C5 gs_usb CAN FD 500k/2M test"
    )
    parser.add_argument("mode", choices=("send", "receive", "loopback"))
    parser.add_argument(
        "--interface",
        choices=("candle", "socketcan"),
        default="candle",
        help="candle uses direct USB; socketcan uses a Linux canX interface",
    )
    parser.add_argument(
        "--channel",
        default="0",
        help="candle channel number or SocketCAN interface name such as can0",
    )
    parser.add_argument("--serial-number", help="USB serial number for board selection")
    parser.add_argument("--count", type=int, default=10)
    parser.add_argument("--interval", type=float, default=0.1)
    parser.add_argument("--duration", type=float, default=10.0)
    args = parser.parse_args()

    print(
        f"Opening {args.interface} channel {args.channel}: "
        f"nominal={NOMINAL_BITRATE}, "
        f"data={DATA_BITRATE}, FD enabled, "
        f"loopback={args.mode == 'loopback'}"
    )
    bus = open_bus(
        args.interface,
        args.channel,
        args.serial_number,
        loop_back=args.mode == "loopback",
    )
    try:
        if args.mode == "send":
            send_frames(bus, args.count, args.interval)
        elif args.mode == "receive":
            receive_frames(bus, args.duration)
        else:
            loopback_test(bus, args.count, args.interval)
    finally:
        bus.shutdown()


if __name__ == "__main__":
    main()
```

</details>

```bash
python3 canfd_2m_test.py receive \
  --interface socketcan \
  --channel can1 \
  --duration 30
```

- 送信側で実行します

```bash
python3 canfd_2m_test.py send \
  --interface socketcan \
  --channel can0 \
  --count 10 \
  --interval 0.1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_7_1.png" style={{width:700, height:'auto'}}/></div>

### slcan を使う

このセクションでは、ビルド済みファームウェアを使用した機能を紹介します。ソースコードは `platform‑seeedboards` リポジトリからダウンロードできます。

:::tip

- XIAO STM32C5 には 120 Ω の CAN 終端抵抗が標準で内蔵されており、デフォルトで有効になっているため、CAN_H と CAN_L パッド間に追加の抵抗をはんだ付けする必要はありません。2 枚の XIAO ボードを使用する場合、それぞれのボードに内蔵された抵抗がバスの両端を終端します。
- このセクションは Ubuntu 22.04 LTS Linux ディストリビューションを前提としています。

:::

- **📄[Firmware]** [CAN-Bridge-slcan Firmware](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/can-bridge-slcan.uf2)
- ソースコードについては GitHub のリンクを参照してください。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/seeed-xiao-stm32c5/zephyr-can/zephyr-can-bridge-slcan" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> can-bridge-slcan</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>

1. XIAO STM32C5 の Reset ボタンを 2 回押してブートローダーモードに入ります。ファームウェアファイルをダウンロードし、`XIAOC5BOOT` マスストレージドライブにコピーします。ファームウェアを書き込んだ 2 枚の XIAO STM32C5 ボード、または 1 枚の XIAO STM32C5 と別の slcan 対応受信デバイスを使用します。
2. ボードを Linux ホストに接続し、ターミナルを開きます。`/dev/ttyACM*`（通常は `ttyACM0` と `ttyACM1`）の下にあるシリアルデバイスを確認します。

```bash
ls /dev/ttyACM*
```

<br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_8.png" style={{width:800, height:'auto'}}/></div>
<br/>

3. [SavvyCAN](https://github.com/collin80/SavvyCAN/releases) をインストールします。バージョン V220 以降をダウンロードし、SavvyCAN を介して接続を確立します。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/collin80/SavvyCAN/releases" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> SavvyCAN</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>
<br/>

:::tip

- Linux システムでは、使用前に `libfuse2` パッケージが必要です。

```bash
sudo apt update
sudo apt install libfuse2
```

:::

- この例では V220 リリースを使用します。Linux では以下のようにアプリケーションを実行します：

```bash
# For Linux
sudo chmod +x SavvyCAN-7c576c5-x86_64.AppImage
./SavvyCAN-7c576c5-x86_64.AppImage

# On Windows, directly launch the executable SavvyCAN.exe
```

4. **Connection → Open Connection Window** に移動します。**Add New Device Connection** をクリックします。接続タイプを **LAWICEL / SLCAN Serial** に設定します。Serial Port として `ttyACM0` を選択します。Serial Port Speed を `115200`、CAN Bus Speed を `500000 bit/s` に設定します。**CAN‑FD** を有効にし、CAN‑FD データレートを `2000000 bit/s` に設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_9.png" style={{width:400, height:'auto'}}/></div>

5. 設定後、接続ステータスに接続が成功したかどうかが表示されます。右上のコンソールを開いてログを確認し、パラメータが設定と一致していることを確認してから、設定を保存することを推奨します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_10.png" style={{width:800, height:'auto'}}/></div>

6. 新しいターミナルを開き、テストスクリプトを実行します。スクリプトは未使用の `/dev/ttyACM*` シリアルデバイスを自動的に検出し、CAN‑FD データを送信します。

```bash
python3 savvycan_fd_peer.py send
```

<details>
<summary>savvycan_fd_peer.py</summary>

```py
# SPDX-License-Identifier: Apache-2.0
"""Send or receive SavvyCAN LAWICEL CAN FD frames with a second XIAO board."""

import argparse
import time

import serial
import serial.tools.list_ports

SEEED_VID = 0x2886
SERIAL_BAUD = 115200


def find_available_port(explicit_port=None):
    candidates = [explicit_port] if explicit_port else [
        port.device
        for port in serial.tools.list_ports.comports()
        if port.vid == SEEED_VID
    ]

    for device in candidates:
        try:
            connection = serial.Serial(device, SERIAL_BAUD, timeout=0.35)
            connection.dtr = True
            connection.rts = False
            time.sleep(0.4)
            connection.reset_input_buffer()
            return connection
        except (OSError, serial.SerialException) as error:
            print(f"Skipping {device}: {error}")

    raise RuntimeError(
        "No available Seeed CDC port. Close SavvyCAN on the peer port or "
        "specify the unused port with --port."
    )


def command(connection, text, response_wait=0.08):
    connection.reset_input_buffer()
    connection.write((text + "\r").encode("ascii"))
    connection.flush()
    time.sleep(response_wait)
    response = connection.read(256)
    if b"\x07" in response:
        raise RuntimeError(f"Firmware rejected command {text!r}: {response!r}")
    if b"\r" not in response:
        raise RuntimeError(f"No acknowledgement for {text!r}: {response!r}")
    return response


def open_can_fd(connection):
    command(connection, "C")
    command(connection, "S6")  # 500 kbit/s nominal bitrate
    command(connection, "Y2")  # 2 Mbit/s CAN FD data bitrate
    command(connection, "O")


def send_frames(connection, duration):
    frames = [
        "d2009000102030405060708090A0B",  # 12-byte standard FD, no BRS
        "b201F" + "".join(f"{value:02X}" for value in range(64)),
        "B001ABCDE9AABBCCDDEEFF001122334455",  # 12-byte extended FD with BRS
    ]
    deadline = time.monotonic() + duration
    sent = 0

    print("Sending IDs 0x200, 0x201, and 0x1ABCDE to SavvyCAN...")
    while time.monotonic() < deadline:
        for frame in frames:
            command(connection, frame, response_wait=0.04)
            sent += 1
            time.sleep(0.16)
    print(f"Transmission complete: {sent} acknowledged CAN FD frames.")


def receive_frames(connection, duration):
    deadline = time.monotonic() + duration
    print("Waiting for CAN FD frames sent by SavvyCAN...")
    connection.reset_input_buffer()
    while time.monotonic() < deadline:
        line = connection.read_until(b"\r")
        if line:
            print(line.decode("ascii", errors="replace").strip())


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("mode", choices=("send", "receive"))
    parser.add_argument(
        "--port",
        help="Unused peer port, for example COM4 or /dev/ttyACM1",
    )
    parser.add_argument("--duration", type=float, default=12.0)
    args = parser.parse_args()

    connection = find_available_port(args.port)
    print(f"Using {connection.port} at {SERIAL_BAUD} baud")
    try:
        open_can_fd(connection)
        if args.mode == "send":
            send_frames(connection, args.duration)
        else:
            receive_frames(connection, args.duration)
        command(connection, "C")
    finally:
        connection.close()


if __name__ == "__main__":
    main()
```

</details>

スクリプトが `/dev/ttyACM1` デバイスに 24 個の CAN‑FD フレームを書き込んでいることが確認できます。`/dev/ttyACM0` は SavvyCAN によって占有されているため busy と表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_11.png" style={{width:800, height:'auto'}}/></div>

7. SavvyCAN のメインパネルで、受信および解析された CAN‑FD フレームデータを確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_12.png" style={{width:800, height:'auto'}}/></div>

## CAN 経由でモーターを駆動する

XIAO STM32C5 は、CAN 通信に対応した高精度ブラシレスモーターのドライバメインボードとして使用できます。ロボット制御、産業用制御、マルチモーター制御などの実用的なアプリケーションに適しています。

次の例では、DM4310 モーターを制御することで、その駆動能力をデモンストレーションします。

:::note

このサンプルは PlatformIO で構築されています。PlatformIO を初めて使用する場合は、[Getting Started with PlatformIO For XIAO STM32C5](https://wiki.seeedstudio.com/ja/xiao_stm32c5_getting_started/#getting-started-with-platformio) を参照してください。

:::

### ハードウェアの準備

- 1 × XIAO STM32C5
- Type‑C ケーブル付き PC
- 24 V 電源
- XT30 2+2 電源分離ボード
- DM4310 モーター

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO STM32C5</th>
   <th>DM4310</th>
   <th>XT30 2+2 電源分離ボード</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png"
            style={{width: 300, height: 'auto'}}
          />
        </div>
      </td>
         <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-100094243--seeed-gripper-01.jpg"
            style={{width: 400, height: 'auto'}}
          />
        </div>
      </td>
            <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100045091-xt30-2_2-power-separationboard.jpg"
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
            href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html"
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
      </td>
         <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Gripper-01-p-6561.html"
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
      </td>
   <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XT30-2-2-Power-Separation-Board-p-6707.html"
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
      </td>
    </tr>
  </table>
</div>

### ソフトウェアプログラム

:::caution
モーター駆動には 24 V 電源が必要です。機器や人身の安全に危険を及ぼさないよう、規格に適合した電源を使用してください！
:::

1. モーター ID を取得します。Damiao ホスト PC ソフトウェアを使用して、Motor CAN ID: `0x007`、Master ID: `0x017` に設定します。[Damiao 43 Series Motors Getting Started](https://wiki.seeedstudio.com/ja/damiao_series/) を参照してください。

2. PlatformIO を使用してプログラムを書き込むか、事前ビルド済みのテストファームウェアを書き込みます：
    - **📄[Firmware]** [CAN-Driver-DM4310 Firmware](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/can_driver_dm4310_v1.1.uf2)
    - ソースコードについては GitHub リンクを参照してください。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/seeed-xiao-stm32c5/zephyr-can/zephyr-damiao-j4340P-2EC-v11-speed-fdcan2" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Driver DM4310</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>
<br/>

3. モーターが有効化されると、DM‑J4310 は 5 秒ごとに目標速度 `0 → 3 → 6 → 10 → 6 → 3 rad/s` を循環します。目標速度がゼロ以外のときはオンボード LED が点灯し、ゼロのときは消灯します。同時に、モーターのフィードバックデータがシリアルポート経由で出力されます。

:::tip
- モーターを駆動する際は、XIAO STM32C5 上の CAN_H と CAN_L が、接続先デバイスの CAN_H と CAN_L に正しく対応していることを確認してください。配線が一致していないと通信に失敗します。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_12.gif" style={{width:400, height:'auto'}}/></div>

## まとめ

これらのサンプルに従うことで、XIAO STM32C5 上で CAN‑FD 機能を使用する方法について、基本的な理解が得られたはずです。CAN 経由で送信されるペイロードは、用途によって異なり、機能要件に依存します。CAN および CAN‑FD は、産業用制御、エンボディドインテリジェンス、ロボット制御、自動車エレクトロニクスなど、多くの分野で広く採用されています。この機能を使って面白いプロジェクトを作成し、その成果をオープンソースコミュニティで共有して、他の人が発見し、学び、再利用できるようにしましょう。

## 参考情報

- **[Community]** [Using CAN (bxCAN) in Normal mode with STM32 microcontrollers](https://community.st.com/stm32-mcus-60/using-can-bxcan-in-normal-mode-with-stm32-microcontrollers-part-1-151183)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
