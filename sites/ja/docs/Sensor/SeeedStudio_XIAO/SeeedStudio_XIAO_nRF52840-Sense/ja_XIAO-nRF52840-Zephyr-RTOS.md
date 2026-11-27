---
description: XIAO nRF52840(sense) と Zephyr(RTOS)
title: XIAO nRF52840(sense) と Zephyr(RTOS)
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-nRF52840-Zephyr-RTOS
last_update:
  date: 06/07/2024
  author: Tim
createdAt: '2023-07-26'
updatedAt: '2025-09-11'
url: https://wiki.seeedstudio.com/ja/XIAO-nRF52840-Zephyr-RTOS/
---

# XIAO nRF52840(sense) と Zephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-ble.png"/></div>

## RTOS とは

今日の組み込みシステムで最も重要なコンポーネントの 1 つが **RTOS**（**Real-Time Operating System（リアルタイムオペレーティングシステム）**）であり、タスクスケジューリングからアプリケーションの実行まで、あらゆることを担当します。

**RTOS** は予測可能な実行モードを提供するように設計されています。処理がシステムの時間制約を満たさなければならない場合に RTOS が使用されます。そのため、GPOS（General Purpose Operating System、汎用オペレーティングシステム）と比較して、RTOS は通常軽量かつ小型であり、一般的に特定のハードウェア上で特定の種類のアプリケーションを実行するために必要な機能のみを提供します。場合によっては、開発者は既存の RTOS を変更し、特定のアプリケーションに必要な機能だけを提供するように縮小したり、機能や性能特性をカスタマイズしたりすることができます。

## [Zephyr](https://www.zephyrproject.org/) とは

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

[**Zephyr**](https://www.zephyrproject.org/) OS は、小さなフットプリントのカーネルをベースとしており、リソースに制約のある組み込みシステムでの使用を目的に設計されています。シンプルな環境センサーや LED ウェアラブルから、高度な組み込みコントローラ、スマートウォッチ、IoT ワイヤレスアプリケーションまで対応します。

## 特長

Zephyr は、数多くの、そして増え続けている機能を提供します。

### 充実したカーネルサービス群

Zephyr は、開発向けにおなじみのサービスを多数提供します。

- *マルチスレッドサービス*：協調型、優先度ベース、非プリエンプティブおよびプリエンプティブスレッドに対応し、オプションでラウンドロビンタイムスライスを提供します。POSIX pthreads 互換の API サポートを含みます。
- *割り込みサービス*：割り込みハンドラのコンパイル時登録。
- *メモリアロケーションサービス*：固定サイズまたは可変サイズのメモリブロックの動的な割り当てと解放。
- *スレッド間同期サービス*：バイナリセマフォ、カウンティングセマフォ、ミューテックスセマフォ。
- *スレッド間データ受け渡しサービス*：基本メッセージキュー、拡張メッセージキュー、バイトストリーム。
- *電源管理サービス*：包括的でアプリケーションまたはポリシー定義のシステム電源管理と、ドライバ定義のきめ細かなデバイス電源管理。

### 複数のスケジューリングアルゴリズム

  Zephyr は包括的なスレッドスケジューリングの選択肢を提供します。

- 協調型およびプリエンプティブスケジューリング
- Earliest Deadline First（EDF）
- 「割り込みボトムハーフ」または「タスクレット」動作を実装する Meta IRQ スケジューリング
- タイムスライシング：同一優先度のプリエンプティブスレッド間でのタイムスライスを有効化
- 複数のキューイング戦略：
  - シンプルなリンクリストレディキュー
  - 赤黒木レディキュー
  - 従来型マルチキューレディキュー

### Bluetooth Low Energy 5.0 サポート

Bluetooth 5.0 準拠（ESR10）および Bluetooth Low Energy コントローラサポート（LE Link Layer）。Bluetooth Mesh と、Bluetooth 認証取得済みの Bluetooth コントローラを含みます。

- すべての LE ロールに対応した Generic Access Profile（GAP）
- Generic Attribute Profile（GATT）
- Bluetooth 4.2 の Secure Connections 機能を含むペアリングサポート
- クリーンな HCI ドライバ抽象化
- Zephyr をフルホストスタックではなくコントローラとして動作させるための Raw HCI インターフェース
- 複数の一般的なコントローラで検証済み
- 高い構成可能性

Mesh サポート：

- Relay、Friend Node、Low-Power Node（LPN）、GATT Proxy 機能
- 両方のプロビジョニングベアラー（PB-ADV と PB-GATT）をサポート
- 高い構成可能性があり、少なくとも 16k RAM を持つデバイスに収まります

*参考: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## 入門ガイド

Zephyr ツールチェーンをセットアップし、関連する SDK をダウンロードしたら、アプリケーション開発を開始できます。

Xiao nrf52840 については、さらなるセットアップ情報として [ボード記述ファイル](https://docs.zephyrproject.org/latest/boards/seeed/xiao_ble/doc/index.html) を参照できます。

Xiao nrf52840 に書き込むには、次の手順を実行します。

1. サンプルまたは自分のアプリケーションをビルドする
2. Xiao nrf52840 を接続する
3. `RST` ボタンをダブルクリックして、デバイスを uf2 ブートローダーモードにする
4. コマンド `west flash -r uf2` を実行してデバイスを書き込む

最も簡単な例は、ボード上で "Hello World" サンプルを実行することです。Zephyr をインストールしたディレクトリに移動した後、次のコマンドを実行します。

```
west build -p always -b xiao_ble samples/hello_world
```

Xiao nRF52840 Sense ボードを使用している場合は、`xiao_ble` の代わりに `xiao_ble/nrf52840/sense` を使用することで、そのボード定義ファイル向けにビルドできます（この例では違いはありません）。

```
west build -p always -b xiao_ble/nrf52840/sense samples/hello_world
```

これが完了したら uf2 ブートローダーモードに入り、次を入力します。

```
west flash -r uf2
```

デバイスのポートを見つけます。Ubuntu の場合は `ls /dev/tty*` を実行し、USB を接続したときにどのデバイスが現れるかを確認することで行えます。

この例では `/dev/ttyACM0` が表示されます。

screen を使用して、シリアル応答に接続してモニタリングできます。

```
screen /dev/ttyACM0 115200
```

次のような応答が表示されるはずです。

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
Hello World! xiao_ble/nrf52840
```

Xiao とその拡張ボードで Zephyr を使用するプロセスを支援するために、ここで使用されている複数のオーバーレイと設定を含むリポジトリが作成されています。この wiki 記事に含まれるコマンドは、Zephyr のルートから相対パスで `../applications/xiao-zephyr-examples` に配置されていることを前提としています。別のパスを使用する場合は、以下のコマンド内のパスを更新してください。

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## ハードウェアの準備

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO nrf52840 Sense</th>
      <th>Seeed Studio Expansion Board</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### 開発者向けの知識

#### XIAO 拡張ボード

  Seeed Studio XIAO nrf52840 で Grove モジュールを使用するために、[Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) を使用し、その上に XIAO nrf52840 を接続します。

  その後、ボード上の Grove コネクタを使用して Grove モジュールを接続できます。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### ピン定義

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=nrf52840sense" target="_blank" rel="noopener noreferrer">インタラクティブなピン配置を確認</a>
</div>

  Grove Shield for Seeed Studio XIAO 上の Grove コネクタに Grove モジュールを接続する際は、以下の図に従って、適切な内部ピン番号を使用する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/pinout2.png"style={{width:900, height:'auto'}}/></div>

### 主な機能

- オンボード LED
- オンボード IMU（Sense）
- オンボードマイク（Sense）
- Bluetooth
- TFLite

#### オンボード LED

この例では、blinky サンプルを使用してオンボード LED を点滅させます。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/basic/blinky
```

RESET ボタンをダブルクリックしてから、次のように書き込みます。

```
west flash -r uf2
```

オンボードの赤色 LED がオンとオフを切り替え、点滅しているのが確認できます。

なぜ動作するのか、この例を少し掘り下げてみましょう。

関連するサンプルコードでは led0 を参照しています。

```
#define LED0_NODE DT_ALIAS(led0)
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
```

これはエイリアスを介して Xiao nRF52840 の devicetree コード内で定義されています。

```
 aliases {
  led0 = &led0;
 };

 leds {
  compatible = "gpio-leds";
  led0: led_0 {
   gpios = <&gpio0 26 GPIO_ACTIVE_LOW>;
   label = "Red LED";
  };
  ...
  }
```

これはボード上の 26 番ピンに対応しています。

Xiao のブレークアウトピンについては、ボードファイルがインターフェースを簡素化する Xiao コネクタを提供しているため、&gpio0 のピンマッピングを直接使用する必要はありません。

たとえば D0 を参照する場合、`&gpio 2` または `&xiao_d 0` のいずれかとして参照します。

```
/ {
 xiao_d: connector {
  compatible = "seeed,xiao-gpio";
  #gpio-cells = <2>;
  gpio-map-mask = <0xffffffff 0xffffffc0>;
  gpio-map-pass-thru = <0 0x3f>;
  gpio-map
   = <0 0 &gpio0 2 0>  /* D0 */
   , <1 0 &gpio0 3 0>  /* D1 */
   , <2 0 &gpio0 28 0>  /* D2 */
   , <3 0 &gpio0 29 0>  /* D3 */
   , <4 0 &gpio0 4 0>  /* D4 */
   , <5 0 &gpio0 5 0>  /* D5 */
   , <6 0 &gpio1 11 0>  /* D6 */
   , <7 0 &gpio1 12 0>  /* D7 */
   , <8 0 &gpio1 13 0>  /* D8 */
   , <9 0 &gpio1 14 0>  /* D9 */
   , <10 0 &gpio1 15 0>  /* D10 */
   ;
 };
};
```

#### オンボード IMU（Sense）

Xiao nrf52840 の主な機能の 1 つは、内蔵 IMU センサーです。このデータを用いて機械学習モデルを学習させたり、ジェスチャーやボードの動きを検出したりすることができます。

この機能をテストするために、IMU を利用するビルトインサンプルを使用し、その後でなぜ動作するのかに関する関連コードを確認します。

```
cd ~/zephyrproject/zephyr
west build -p -b xiao_ble/nrf52840/sense samples/sensor/lsm6dsl
```

RESET ボタンを素早く 2 回押してから、次をフラッシュします：

```
west flash -r uf2
```

次に、出力を確認するために接続する必要があります：

```
screen /dev/ttyACM0 115200
```

次のような内容が表示されるはずです：

```
3LSM6DSL sensor samples:

accel x:1.330409 ms/2 y:-1.705484 ms/2 z:9.957133 ms/2
gyro x:0.049632 dps y:-0.070860 dps z:-0.006184 dps
loop:46 trig_cnt:9677

3LSM6DSL sensor samples:

accel x:1.314257 ms/2 y:-1.734198 ms/2 z:9.902696 ms/2
gyro x:-0.220216 dps y:0.032833 dps z:-0.000458 dps
loop:47 trig_cnt:9892

3LSM6DSL sensor samples:

accel x:1.414158 ms/2 y:-1.476371 ms/2 z:9.835697 ms/2
gyro x:0.035430 dps y:-0.132252 dps z:-0.007788 dps
loop:48 trig_cnt:10107
```

なぜ動作するのでしょうか？Zephyr の GitHub リポジトリから [sample code](https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/sensor/lsm6dsl) を確認できます。

```
 const struct device *const lsm6dsl_dev = DEVICE_DT_GET_ONE(st_lsm6dsl);
```

このサンプルロジックは、ターゲットボードに対応する `st_lsm6dsl` devicetree オブジェクトを見つけます。Xiao nrf52840 sense の devicetree を確認することで、それがどのように設定されているかをさらに確認できます：

```
 lsm6ds3tr-c-en {
  compatible = "regulator-fixed-sync", "regulator-fixed";
  enable-gpios = <&gpio1 8 (NRF_GPIO_DRIVE_S0H1 | GPIO_ACTIVE_HIGH)>;
  regulator-name = "LSM6DS3TR_C_EN";
  regulator-boot-on;
  startup-delay-us = <3000>;
 };
```

```
&i2c0 {
 compatible = "nordic,nrf-twim";
 /* Cannot be used together with spi0. */
 status = "okay";
 pinctrl-0 = <&i2c0_default>;
 pinctrl-1 = <&i2c0_sleep>;
 pinctrl-names = "default", "sleep";
 clock-frequency = <I2C_BITRATE_FAST>;

 lsm6ds3tr_c: lsm6ds3tr-c@6a {
  compatible = "st,lsm6dsl";
  reg = <0x6a>;
  irq-gpios = <&gpio0 11 GPIO_ACTIVE_HIGH>;
  status = "okay";
 };
};
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/imu.jpg" style={{width:500, height:'auto'}}/></div>

GPIO がピン電源を有効にするために使用されています。定義ファイルから、GPIO1 8 が使用されていることがわかります。以下に、[Xiao nRF52840 の回路図](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf)の関連部分をハイライトしました：

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/schematic-pin-highlight-imu.png?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/schematic-pin-highlight-imu.png" style={{width:500, height:'auto'}}/></div>

この回路図のハイライトから、GPIO1 8 が IMU のイネーブルピンであることがわかります。さらに GPIO0 11 は割り込みピンです。そのため、これは上記の devicetree スニペットに反映されています。

#### オンボードマイク（Sense）

Xiao nrf52840 の主な機能の 1 つは、内蔵マイクです。IMU と同様に、これを利用することで多くの機械学習アプリケーションが可能になります。

この機能をテストするために、マイクを利用するビルトインサンプルを使用し、その後でなぜ動作するのかに関する関連コードを確認します。

```
cd ~/zephyrproject/zephyr
west build -p -b xiao_ble/nrf52840/sense samples/drivers/audio/dmic
```

RESET ボタンを素早く 2 回押してから、次をフラッシュします：

```
west flash -r uf2
```

次に、出力を確認するために接続する必要があります：

```
screen /dev/ttyACM0 115200
```

次のような内容が表示されるはずです：

```
[00:00:00.297,088] <inf> dmic_sample: PCM output rate: 16000, channels: 1
[00:00:00.297,119] <inf> dmic_nrfx_pdm: PDM clock frequency: 1280000, actual PCM rate: 16000
[00:00:00.397,216] <inf> dmic_sample: 0 - got buffer 0x20008380 of 3200 bytes
[00:00:00.497,222] <inf> dmic_sample: 1 - got buffer 0x20006a80 of 3200 bytes
[00:00:00.597,229] <inf> dmic_sample: 2 - got buffer 0x20005180 of 3200 bytes
[00:00:00.697,235] <inf> dmic_sample: 3 - got buffer 0x20008380 of 3200 bytes
[00:00:00.797,241] <inf> dmic_sample: 4 - got buffer 0x20006a80 of 3200 bytes
[00:00:00.897,247] <inf> dmic_sample: 5 - got buffer 0x20005180 of 3200 bytes
[00:00:00.997,222] <inf> dmic_sample: 6 - got buffer 0x20008380 of 3200 bytes
[00:00:01.097,229] <inf> dmic_sample: 7 - got buffer 0x20006a80 of 3200 bytes
[00:00:01.097,259] <inf> dmic_sample: PCM output rate: 16000, channels: 2
[00:00:01.097,259] <inf> dmic_nrfx_pdm: PDM clock frequency: 1280000, actual PCM rate: 16000
[00:00:01.197,387] <inf> dmic_sample: 0 - got buffer 0x20008380 of 6400 bytes
[00:00:01.297,393] <inf> dmic_sample: 1 - got buffer 0x20005180 of 6400 bytes
[00:00:01.397,399] <inf> dmic_sample: 2 - got buffer 0x20006a80 of 6400 bytes
[00:00:01.497,375] <inf> dmic_sample: 3 - got buffer 0x20008380 of 6400 bytes
[00:00:01.597,381] <inf> dmic_sample: 4 - got buffer 0x20005180 of 6400 bytes
[00:00:01.697,387] <inf> dmic_sample: 5 - got buffer 0x20006a80 of 6400 bytes
[00:00:01.797,393] <inf> dmic_sample: 6 - got buffer 0x20008380 of 6400 bytes
[00:00:01.897,399] <inf> dmic_sample: 7 - got buffer 0x20005180 of 6400 bytes
[00:00:01.897,399] <inf> dmic_sample: Exiting
```

なぜ動作するのでしょうか？Zephyr の GitHub リポジトリから [sample code](https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/drivers/audio/dmic) を確認できます。

このサンプルは次の内容を示しています：

> これは、:ref:`Audio DMIC API` の使用方法を示すこと、そしてこの API を実装するドライバを開発する際の助けとなることを目的とした、非常にシンプルなアプリケーションです。異なる構成（1 チャンネルと 2 チャンネルを使用）で 2 回の PDM 転送を実行しますが、受信したオーディオデータを一切処理しません。

```
const struct device *const dmic_dev = DEVICE_DT_GET(DT_NODELABEL(dmic_dev));
```

このサンプルロジックは、ターゲットボードに対応する `dmic_dev` devicetree オブジェクトを見つけます。Xiao nrf52840 sense の devicetree を確認することで、それがどのように設定されているかをさらに確認できます：

```
/ {
 msm261d3526hicpm-c-en {
  compatible = "regulator-fixed";
  enable-gpios = <&gpio1 10 (NRF_GPIO_DRIVE_S0H1 | GPIO_ACTIVE_HIGH)>;
  regulator-name = "MSM261D3526HICPM-C-EN";
 };
}

&pdm0 {
 pinctrl-0 = <&pdm0_default>;
 pinctrl-1 = <&pdm0_sleep>;
 pinctrl-names = "default", "sleep";
 clock-source = "PCLK32M";
};
```

サンプルプロジェクトのオーバーレイでは、このレギュレータが有効化されています：

```
/ {
 msm261d3526hicpm-c-en {
  regulator-boot-on;
 };
};

dmic_dev: &pdm0 {
 status = "okay";
};
```

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/mic.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/mic.jpg" style={{width:500, height:'auto'}}/></div>

GPIO がピン電源を有効にするために使用されています。以下に、[Xiao nRF52840 の回路図](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf)の関連部分をハイライトしました：

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/schematic-pin-highlight-mic.png?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/schematic-pin-highlight-mic.png" style={{width:500, height:'auto'}}/></div>

この回路図のハイライトから、GPIO1 10 がマイクのイネーブルピンであることがわかります。

#### Bluetooth

このセットアップをテストするために、Zephyr の既存サンプルを使用できます：

```
west build -p always -b xiao_ble samples/bluetooth/observer
```

ボードにフラッシュします：

```
west flash -r uf2
```

フラッシュ後、MCU がリセットされるまで少し待ち、モニタに接続します：

```
screen /dev/ttyACM0 115200
```

ボードにコマンドを送信するためのコンソールが利用可能になっているのがわかります：

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
Starting Observer Demo
Started scanning...
Exiting main thread.
Device found: EC:11:27:22:AF:D2 (public) (RSSI -74), type 0, AD data len 31
Device found: 0D:9A:BE:8D:10:FC (random) (RSSI -81), type 3, AD data len 31
Device found: D2:70:D8:F2:6F:C4 (random) (RSSI -68), type 0, AD data len 20
Device found: 72:7C:3C:87:E2:17 (random) (RSSI -77), type 0, AD data len 17
Device found: 65:65:23:B9:AD:EC (random) (RSSI -68), type 0, AD data len 17
Device found: 6D:39:26:C2:94:B5 (random) (RSSI -70), type 0, AD data len 18
```

```
CONFIG_BT=y
CONFIG_BT_OBSERVER=y
```

ここでの [conf file](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/bluetooth/observer/prj.conf) は、Zephyr ビルド用の Bluetooth 関連機能を有効にします。

#### TFLite - Hello World

Zephyr で TFLite を有効にして更新します：

```
west config manifest.project-filter -- +tflite-micro
west update
```

サンプルをビルドしてボードにフラッシュします：

```
west build -p always -b xiao_ble samples/modules/tflite-micro/hello_world
```

ボードにフラッシュします：

```
west flash -r uf2
```

フラッシュ後、MCU がリセットされるまで少し待ち、モニタに接続します：

```
screen /dev/ttyACM0 115200
```

コンソールから結果が返されるのがわかります：

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
x_value: 1.0*2^-127, y_value: 1.0*2^-127

x_value: 1.2566366*2^-2, y_value: 1.4910772*2^-2

x_value: 1.2566366*2^-1, y_value: 1.1183078*2^-1

x_value: 1.8849551*2^-1, y_value: 1.677462*2^-1

x_value: 1.2566366*2^0, y_value: 1.9316229*2^-1

x_value: 1.5707957*2^0, y_value: 1.0420598*2^0

x_value: 1.8849551*2^0, y_value: 1.9146791*2^-1

x_value: 1.0995567*2^1, y_value: 1.6435742*2^-1

x_value: 1.2566366*2^1, y_value: 1.0674761*2^-1

x_value: 1.4137159*2^1, y_value: 1.8977352*2^-3
```

TFLite に関する追加情報はこのガイドの範囲外ですが、この例はデバイスの機能と、TFLite セットアップを実行するために必要なコンポーネントのガイドとして役立ちます。

### 追加コンポーネント

- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2C ディスプレイ
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - ボタン
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - ブザー
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - SD カード
- [Grove - Temperature and Humidity Sensor (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69inch LCD Display Module, 240×280 Resolution, SPI Interface](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)
- [Round Display for Xiao](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- [Round Display for Xiao](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html) - SD カード

#### Grove - 拡張ボード - I2C ディスプレイ

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/xiao_expansion_oled-nrf.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/xiao_expansion_oled-nrf.jpg" style={{width:500, height:'auto'}}/></div>

このセットアップをテストするために、Zephyr に用意されているサンプルを使用できます：

```
west build -p always -b xiao_ble samples/drivers/display --  -DSHIELD=seeed_xiao_expansion_board
west flash -r uf2
```

このディスプレイは 2 色のみをサポートしているため、複数の黒いボックスと、隅で点滅するボックスが表示されます。

なぜ動作するのか、このサンプルを少し掘り下げてみましょう：

```
/ {
    chosen {
      zephyr,display = &ssd1306;
    };
};

&xiao_i2c {
  status = "okay";

  ssd1306: ssd1306@3c {
    compatible = "solomon,ssd1306fb";
    reg = <0x3c>;
    width = <128>;
    height = <64>;
    segment-offset = <0>;
    page-offset = <0>;
    display-offset = <0>;
    multiplex-ratio = <63>;
    segment-remap;
    com-invdir;
    prechargep = <0x22>;
  };
};

```

シールドは 0x3C レジスタに SSD1306 OLED 画面を設定します。`chosen` セクションで Zephyr のディスプレイとして選択されています。

#### Grove - 拡張ボード - ボタン

このセットアップをテストするために、Zephyr に用意されているサンプルを使用できます：

```
west build -p always -b xiao_ble samples/basic/button -- -DSHIELD=seeed_xiao_expansion_board
```

ボードに書き込みます：

```
west flash -r uf2
```

書き込み後、MCU がリセットされるまで少し待ち、モニタに接続します：

```
screen /dev/ttyACM0 115200
```

このサンプルでは、ボタンを押すとオンボード LED が点灯します。

コンソールから次のような結果が返されます：

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
Set up button at gpio@50000000 pin 3
Set up LED at gpio@50000000 pin 26
Press the button
Button pressed at 839637
Button pressed at 857904
Button pressed at 883367
Button pressed at 1001258
```

なぜ動作するのか、このサンプルを少し掘り下げてみましょう：

```
/ {
    aliases {
      sw0 = &xiao_button0;
    };

    buttons {
      compatible = "gpio-keys";
      xiao_button0: button_0 {
        gpios = <&xiao_d 1 (GPIO_PULL_UP | GPIO_ACTIVE_LOW)>;
        label = "SW0";
        zephyr,code = <INPUT_KEY_0>;
      };
    };
};
```

シールド / オーバーレイファイルは、さまざまなボードコンポーネントを設定するために使用されます。このファイルを使用することで、オーバーレイが Zephyr にボタンを構成させ、関連するコードから利用できるようにするため、ボタンのサンプルを使用できます。

この場合、Xiao nrf52840 上の D1 です。このオーバーレイではボタンとして動作するように設定されており、サンプル側のコードがこれを想定しているため、`sw0` という名前にエイリアスされています。

#### Grove - 拡張ボード - ブザー

ここでは、blinky PWM サンプルを使用して PWM 信号でブザーの動作を制御します。そのために、A3 ピン向けに PWM を有効化するカスタムオーバーレイを使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-nrf52480/xiao_expansion_buzzer.overlay"
```

書き込み後、サンプルが進行するにつれて音が変化する一連のブザー音が聞こえるはずです。

なぜ動作するのか見てみましょう：

```
&pwm0 {
 status = "disabled";
};

&sw_pwm {
 status = "okay";
 channel-gpios = <&gpio0 29 PWM_POLARITY_INVERTED>;
};

&pwm_led0 {
 pwms = <&sw_pwm 0 PWM_MSEC(20) PWM_POLARITY_INVERTED>;
};
```

オーバーレイは、Xiao nrf52840 のピン配置において A3 ピンに対応するピン 29 の PWM ロジックを構成します。

#### Grove - 拡張ボード - SD カード

ここでは、Xiao 拡張ボードシールドとともに filesystem サンプルを使用し、SPI 経由で SD カードリーダーとのインターフェースを試します。拡張ボードシールドでは、対応する `&xiao_d 2` ピンに CS ピンが設定されているため、シールドを追加する以外に、この機能をボードに関連付けるための作業は不要です。さらに準備として、SD カード機能を有効にするカスタム config を使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

次に、書き込みとモニタを行います（最初に RESET を 2 回押して uf2 ブートローダーモードに入ります）：

```
west flash -r uf2
```

次のような応答が表示されるはずです：

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
[00:00:00.483,367] <inf> sd: Maximum SD clock is under 25MHz, using clock of 24000000Hz
[00:00:00.483,856] <inf> main: Block count 15519744
Sector size 512
Memory Size(MB) 7578
Disk mounted.

Listing dir /SD: ...
[FILE] IMAGE1.JPG (size = 58422)
[FILE] IMAGE2.JPG (size = 97963)
```

この場合、私の SD カードには 2 つのファイルがありました。それらの名前とサイズがコンソールに出力されました。

ここで関係する要素を確認してみましょう：

```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

関連する config では、SPI、SDMMC ディスクドライバ、および GPIO を有効にしています。この config がないと、サンプルが SD カードを見つけられないため、オーバーレイはエラーにつながります。

Xiao 拡張ボードシールドの関連部分を以下に示します：

```
&xiao_spi {
 status = "okay";
 cs-gpios = <&xiao_d 2 GPIO_ACTIVE_LOW>;

 sdhc0: sdhc@0 {
  compatible = "zephyr,sdhc-spi-slot";
  reg = <0>;
  status = "okay";
  mmc {
   compatible = "zephyr,sdmmc-disk";
   status = "okay";
  };
  spi-max-frequency = <24000000>;
 };
};
```

前述のとおり、`&xiao_d 2` ピンマッピングは、ボードが `&xiao_d` ピン設定をサポートしている限り、使用するボードに関係なく D2 ピンを選択できるようにするために使用されます。

#### Grove - 温湿度センサ (SHT31)

まずピンをはんだ付けし、Xiao nrf52840 を拡張ボードに接続します。次に、Grove SHT31 と拡張ボード上の I2C ポートの 1 つの間を Grove コネクタケーブルで接続します。

このセットアップをテストするために、Zephyr に用意されているサンプルを使用できます：

```
west build -p always -b xiao_ble samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay
```

uf2 ブートローダーモードに入ったら、ボードに書き込みます：

```
west flash -r uf2
```

書き込み後、MCU がリセットされるまで少し待ち、モニタに接続します：

```
screen /dev/ttyACM0 115200
```

コンソールから次のような結果が返されます：

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
SHT3XD: 25.68 Cel ; 54.73 %RH
SHT3XD: 25.75 Cel ; 55.44 %RH
SHT3XD: 25.79 Cel ; 55.95 %RH
SHT3XD: 25.82 Cel ; 55.93 %RH
SHT3XD: 25.84 Cel ; 56.07 %RH
SHT3XD: 25.84 Cel ; 55.69 %RH
```

なぜ動作するのか、このサンプルを少し掘り下げてみましょう：

```
 &xiao_i2c {
 sht3xd@44 {
   compatible = "sensirion,sht3xd";
   reg = <0x44>;
  };
 };
```

app オーバーレイファイルは、さまざまなボードコンポーネントを設定するために使用されます。このファイルを使用することで、オーバーレイが [サンプルロジック](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c) に対して、センサをこのボード向けにどのように構成するかを伝えるため、SHT31 のサンプルを利用できます。

#### 1.69インチ LCD ディスプレイモジュール、240×280 解像度、SPI インターフェース

この例では、SPI を使用して 240x280 解像度の 1.69 インチ LCD に接続します。

まず、次の画像をガイドとして使用し、ボードを LCD 画面に接続します（ここでは Xiao nrf52840 を使用していますが、接続に使用するピン配置は同じです）。

| 1.69-inch LCD SPI Display| XIAO nrf52840 |
| ------------- | ------------------------- |
| VCC | 3V3 |
| GND | GND |
| DIN | D10 |
| CLK | D8 |
| CS | D1 |
| DC | D3 |
| RST | D0 |
| BL | D6 |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/10.png" style={{width:700, height:'auto'}}/></div>

これでファームウェアをビルドして書き込むことができます：

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
west flash -r uf2
```

新しいファームウェアが書き込まれると、デバイスには、先ほど拡張ボードで見たのと同じデモ画面が、SPI 経由のカラー LCD 用に更新された形で表示されます。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/spi_lcd-nrf.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/spi_lcd-nrf.jpg" style={{width:500, height:'auto'}}/></div>

#### Round Display for Xiao

このセットアップをテストするために、Zephyr に用意されているサンプルを使用できます：

```
west build -p always -b xiao_ble samples/drivers/display --  -DSHIELD=seeed_xiao_round_display
```

ブートローダーモードに入り、デバイスに書き込みます：

```
west flash -r uf2
```

複数の色付きのコーナーが表示され、そのうちの 1 つの黒いコーナーが点滅しているのが見えるはずです。

別のサンプルでは、タッチスクリーンの使用方法を示しています：

```
west build -p always -b xiao_ble samples/modules/lvgl/demos --  -DSHIELD=seeed_xiao_round_display -DCONFIG_LV_Z_DEMO_MUSIC=y
```

ここで示しているミュージックデモは実際の画面の一部に過ぎませんが、それでもタッチスクリーンが動作している様子を示しています。ご覧のとおり、再生ボタンに触れると音楽アニメーションがオンになります。

[shield ファイル](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/shields/seeed_xiao_round_display/seeed_xiao_round_display.overlay)からわかるように、これは SPI 経由で GC9A01 ラウンドディスプレイドライバと、i2c 経由で CHSC6X タッチモジュールとインターフェースすることで動作しています。

どのように動作するのか、このサンプルを少し掘り下げてみましょう：

```
/ {
    chosen {
      zephyr,display = &gc9a01_xiao_round_display;
    };

 lvgl_pointer {
  compatible = "zephyr,lvgl-pointer-input";
  input = <&chsc6x_xiao_round_display>;
 };
};

/*
 * xiao_serial uses pins D6 and D7 of the Xiao, which are used respectively to
 * control the screen backlight and as touch controller interrupt.
 */
&xiao_serial {
 status = "disabled";
};

&xiao_i2c {
 clock-frequency = < I2C_BITRATE_FAST >;

 chsc6x_xiao_round_display: chsc6x@2e {
  status = "okay";
  compatible = "chipsemi,chsc6x";
  reg = <0x2e>;
  irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;
 };
};

&xiao_spi {
 status = "okay";
 cs-gpios = <&xiao_d 1 GPIO_ACTIVE_LOW>, <&xiao_d 2 GPIO_ACTIVE_LOW>;

 gc9a01_xiao_round_display: gc9a01@0 {
  status = "okay";
  compatible = "galaxycore,gc9x01x";
  reg = <0>;
  spi-max-frequency = <DT_FREQ_M(100)>;
  cmd-data-gpios = <&xiao_d 3 GPIO_ACTIVE_HIGH>;
  pixel-format = <PANEL_PIXEL_FORMAT_RGB_565>;
  width = <240>;
  height = <240>;
  display-inversion;
 };
};
```

このシールドは次のことを行います：

- GC9A01 ディスプレイを選択された Zephyr ディスプレイとして選択します
- LVGL ポインターロジックを CHSC6X モジュールを使用するように設定します
- ピンがバックライトとタッチ割り込みに使用されているため、シリアルを無効にします（上記の `irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;` を参照）
- D1、D2、D3 ピンを使用して SPI 用にラウンドディスプレイを構成します

[sample logic](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/modules/lvgl/demos/src/main.c) は、さらに確認できる [LVGL demo example code](https://github.com/lvgl/lvgl/tree/master/demos/music) に依存しています。

#### Round Display for Xiao - SD Card

ここではファイルシステムサンプルと Xiao Expansion Board シールドを使用して、SPI 経由で SD カードリーダーとのインターフェースを試します。拡張ボードシールドでは、CS ピンが対応する `&xiao_d 2` ピンに設定されているため、この機能をボードに関連付けるためにシールドを追加する以外に、あなたが行う作業は必要ありません。さらに準備として、SD カード機能を有効にするカスタム設定を使用しています。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_round_display
```

次にフラッシュしてモニタします（最初に RESET を 2 回押して uf2 ブートローダーモードに入ります）：

```
west flash -r uf2
```

フラッシュ後に MCU がリセットされるまで少し待ち、モニタに接続します：

```
screen /dev/ttyACM0 115200
```

次のような応答が表示されるはずです：

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
[00:00:00.491,485] <inf> sd: Maximum SD clock is under 25MHz, using clock of 24000000Hz
[00:00:00.491,973] <inf> main: Block count 15519744
Sector size 512
Memory Size(MB) 7578
Disk mounted.

Listing dir /SD: ...
[FILE] IMAGE1.JPG (size = 58422)
[FILE] IMAGE2.JPG (size = 97963)
```

予想どおり、ファイルの内容は Xiao Expansion Board の SD カード例の出力と同様の形式で表示されます。

ラウンドディスプレイシールドの関連部分を以下に示します：

```
&xiao_spi {
 status = "okay";
 cs-gpios = <&xiao_d 1 GPIO_ACTIVE_LOW>, <&xiao_d 2 GPIO_ACTIVE_LOW>;

 sdhc_xiao_round_display: sdhc@1 {
  compatible = "zephyr,sdhc-spi-slot";
  reg = <1>;
  status = "okay";
  mmc {
   compatible = "zephyr,sdmmc-disk";
   status = "okay";
  };
  spi-max-frequency = <DT_FREQ_M(24)>;
 };
};
```

D2 は SD の CS ピンとして使用されます。

## ✨ Contributor Project

- このプロジェクトは Seeed Studio の [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=57293418) によってサポートされています。
- **Tim の尽力**に感謝するとともに、あなたの成果は[展示](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)されます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
