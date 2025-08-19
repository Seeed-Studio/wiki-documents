---
description: XIAO nRF52840(sense) と Zephyr(RTOS)
title:  XIAO nRF52840(sense) と Zephyr(RTOS)
keywords:
- ソフトウェア
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-nRF52840-Zephyr-RTOS
last_update:
  date: 05/15/2025
  author: Tim
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO nRF52840(sense) と Zephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-ble.png"/></div>

## RTOSとは

今日の組み込みシステムにおいて最も重要なコンポーネントの1つが**RTOS**（リアルタイムオペレーティングシステム）です。RTOSはタスクスケジューリングからアプリケーションの実行まで、すべてを管理します。

**RTOS**は予測可能な実行モードを提供するよう設計されています。処理がシステムの時間制限を満たす必要がある場合にRTOSが使用されます。そのため、GPOS（汎用オペレーティングシステム）と比較して、RTOSは通常軽量で小型であり、特定のハードウェア上で特定の種類のアプリケーションを実行するために必要な機能のみを提供します。場合によっては、開発者が既存のRTOSを変更し、特定のアプリケーションに必要な機能のみを提供するように縮小したり、その機能や性能特性をカスタマイズしたりすることができます。

## [Zephyr](https://www.zephyrproject.org/)とは

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

[**Zephyr**](https://www.zephyrproject.org/) OSは、小型カーネルを基盤とし、リソースが制約された組み込みシステムでの使用を目的としています。これには、シンプルな組み込み環境センサーやLEDウェアラブルから、高度な組み込みコントローラー、スマートウォッチ、IoTワイヤレスアプリケーションまでが含まれます。

## 特徴
Zephyrは、多数の機能を提供しており、その数は増え続けています。

### 豊富なカーネルサービス

Zephyrは開発に役立つ多くのサービスを提供します：

- *マルチスレッドサービス*：協調型、優先度ベース、非プリエンプティブ、プリエンプティブスレッドに対応し、オプションでラウンドロビンタイムスライシングをサポート。POSIX pthreads互換APIも含む。
- *割り込みサービス*：割り込みハンドラーのコンパイル時登録をサポート。
- *メモリ割り当てサービス*：固定サイズまたは可変サイズのメモリブロックの動的割り当てと解放をサポート。
- *スレッド間同期サービス*：バイナリセマフォ、カウントセマフォ、ミューテックスセマフォを提供。
- *スレッド間データ転送サービス*：基本的なメッセージキュー、拡張メッセージキュー、バイトストリームを提供。
- *電源管理サービス*：包括的なアプリケーションまたはポリシー定義のシステム電源管理や、ドライバー定義の細かいデバイス電源管理を提供。

### 複数のスケジューリングアルゴリズム

Zephyrは包括的なスレッドスケジューリングオプションを提供します：
- 協調型およびプリエンプティブスケジューリング
- Earliest Deadline First (EDF)
- 割り込みの「ボトムハーフ」または「タスクリット」動作を実装するMeta IRQスケジューリング
- タイムスライシング：同じ優先度のプリエンプティブスレッド間でのタイムスライシングを可能にする
- 複数のキュー戦略：
  - シンプルなリンクリスト準備キュー
  - 赤黒木準備キュー
  - 従来のマルチキュー準備キュー

### Bluetooth Low Energy 5.0 サポート
Bluetooth 5.0 準拠（ESR10）およびBluetooth Low Energyコントローラーサポート（LEリンクレイヤー）。BluetoothメッシュおよびBluetooth認定準備済みBluetoothコントローラーを含む。

- 汎用アクセスプロファイル（GAP）：すべてのLEロールに対応
- 汎用属性プロファイル（GATT）
- ペアリングサポート（Bluetooth 4.2のセキュアコネクション機能を含む）
- クリーンなHCIドライバー抽象化
- Zephyrをフルホストスタックではなくコントローラーとして実行するためのRaw HCIインターフェース
- 複数の人気コントローラーで検証済み
- 高い構成可能性

メッシュサポート：

- リレー、フレンドノード、低電力ノード（LPN）、およびGATTプロキシ機能
- 両方のプロビジョニングベアラーをサポート（PB-ADV & PB-GATT）
- 高い構成可能性で、少なくとも16k RAMを持つデバイスに適合

*参考: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## はじめに

Zephyr ツールチェーンがセットアップされ、関連する SDK がダウンロードされたら、アプリケーション開発を開始できます。

Xiao nrf52840 の場合、[ボード記述ファイル](https://docs.zephyrproject.org/latest/boards/seeed/xiao_ble/doc/index.html)を参照して、さらなるセットアップ情報を確認できます。

Xiao nrf52840 をプログラムするには、以下の手順を実行します：
1. サンプルまたはアプリケーションをビルドする
2. Xiao nrf52840 を接続する
3. `RST` ボタンをダブルクリックしてデバイスを uf2 ブートローダーモードに設定する
4. コマンド `west flash -r uf2` を実行してデバイスにフラッシュする

最も簡単な例として、ボード上で "Hello World" サンプルを実行します。Zephyr インストールディレクトリに移動した後、以下のコマンドを実行します。

```
west build -p always -b xiao_ble samples/hello_world
```

Xiao nRF52840 Sense ボードを使用している場合は、`xiao_ble` の代わりに `xiao_ble/nrf52840/sense` を使用してビルドできます（この例では違いはありません）。

```
west build -p always -b xiao_ble/nrf52840/sense samples/hello_world
```

これが完了したら、uf2 ブートローダーモードに入り、以下を入力します：
```
west flash -r uf2
```

デバイスのポートを確認します。Ubuntu の場合、`ls /dev/tty*` を使用して USB 接続時に表示されるデバイスを確認できます。

例として、`/dev/ttyACM0` が表示される場合：

`screen` を使用して接続し、シリアル応答を監視します：
```
screen /dev/ttyACM0 115200
```

以下のような応答が表示されるはずです：
```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
Hello World! xiao_ble/nrf52840
```

Xiao とその拡張ボードを Zephyr で使用するプロセスを支援するために、いくつかのオーバーレイと設定を含むリポジトリが構築されています。この Wiki 記事に含まれるコマンドは、Zephyr ルートに対して `../applications/xiao-zephyr-examples` に配置されていると仮定しています。以下のコマンドでリポジトリをクローンしてください。

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## ハードウェア準備

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO nrf52840 Sense</th>
      <th>Seeed Studio 拡張ボード</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html" target="_blank">
            <strong><span><font color="FFFFFF" size="4"> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color="FFFFFF" size="4"> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### 開発者向け知識

#### XIAO 拡張ボード

Seeed Studio XIAO nrf52840 で Grove モジュールを使用するには、[Seeed Studio XIAO 用拡張ベース](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) を使用し、XIAO nrf52840 を接続します。

その後、ボード上の Grove コネクタを使用して Grove モジュールを接続できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### ピン定義

Grove Shield for Seeed Studio XIAO の Grove コネクタに Grove モジュールを接続する際には、以下の図を参照して適切な内部ピン番号を使用してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/pinout2.png"style={{width:900, height:'auto'}}/></div>

### 主な機能

- オンボード LED
- オンボード IMU (Sense)
- オンボードマイク (Sense)
- Bluetooth
- TFLite

#### オンボード LED

この例では、オンボード LED を点滅させるために blinky サンプルを使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/basic/blinky
```

RESET ボタンをダブルクリックしてからフラッシュします：

```
west flash -r uf2
```

オンボードの赤色 LED が点滅しているのが確認できます。

この例がなぜ動作するのかを少し掘り下げてみましょう。

関連するサンプルコードは `led0` を参照しています：
```
#define LED0_NODE DT_ALIAS(led0)
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
```

これは Xiao nRF52840 のデバイスツリーコードでエイリアスとして定義されています：
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

Xiao ブレークアウトのピンを使用する場合、ボードファイルが Xiao コネクタを提供しているため、&gpio0 ピンマッピングを直接使用する必要はありません。これによりインターフェースが簡素化されます。

例えば、D0 を参照する場合、`&gpio 2` または `&xiao_d 0` として参照します。

```
/ {
	xiao_d: connector {
		compatible = "seeed,xiao-gpio";
		#gpio-cells = <2>;
		gpio-map-mask = <0xffffffff 0xffffffc0>;
		gpio-map-pass-thru = <0 0x3f>;
		gpio-map
			= <0 0 &gpio0 2 0>		/* D0 */
			, <1 0 &gpio0 3 0>		/* D1 */
			, <2 0 &gpio0 28 0>		/* D2 */
			, <3 0 &gpio0 29 0>		/* D3 */
			, <4 0 &gpio0 4 0>		/* D4 */
			, <5 0 &gpio0 5 0>		/* D5 */
			, <6 0 &gpio1 11 0>		/* D6 */
			, <7 0 &gpio1 12 0>		/* D7 */
			, <8 0 &gpio1 13 0>		/* D8 */
			, <9 0 &gpio1 14 0>		/* D9 */
			, <10 0 &gpio1 15 0>		/* D10 */
			;
	};
};
```

#### オンボード IMU (Sense)

Xiao nrf52840 の主な特徴の一つは、内蔵 IMU センサーです。このデータを使用して、機械学習モデルをトレーニングしたり、ジェスチャーやボードの動きを検出したりすることができます。

この機能をテストするために、IMU を利用する組み込みサンプルを使用し、その動作の理由に関連するコードを確認します。

```
cd ~/zephyrproject/zephyr
west build -p -b xiao_ble/nrf52840/sense samples/sensor/lsm6dsl
```

RESET ボタンを2回押してからフラッシュします：

```
west flash -r uf2
```

次に、出力を確認するために接続します：

```
screen /dev/ttyACM0 115200
```

以下のような出力が表示されるはずです：
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

なぜ動作するのか？Zephyr の GitHub リポジトリで [サンプルコード](https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/sensor/lsm6dsl) を確認できます。

```
	const struct device *const lsm6dsl_dev = DEVICE_DT_GET_ONE(st_lsm6dsl);
```

サンプルロジックは、ターゲットボードに関連する `st_lsm6dsl` デバイスツリーオブジェクトを見つけます。Xiao nrf52840 Sense のデバイスツリーを確認すると、さらにその構成がわかります：

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

GPIO がピン電源を有効にするために使用されています。定義ファイルから、GPIO1 8 が使用されていることがわかります。以下に [Xiao nRF52840 の回路図](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf) の関連部分を強調表示しました：

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/schematic-pin-highlight-imu.png?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/schematic-pin-highlight-imu.png" style={{width:500, height:'auto'}}/></div>

この回路図の強調表示から、GPIO1 8 が IMU の有効化ピンであることがわかります。さらに GPIO0 11 が割り込みピンです。このため、上記のデバイスツリーのスニペットに反映されています。

#### オンボードマイク (Sense)

Xiao nrf52840 の主な機能の1つは、内蔵マイクです。IMU と同様に、これにより多くの機械学習アプリケーションが可能になります。

この機能をテストするために、マイクを利用する組み込みサンプルを使用し、その動作の理由に関連するコードを確認します。

```
cd ~/zephyrproject/zephyr
west build -p -b xiao_ble/nrf52840/sense samples/drivers/audio/dmic
```

RESET ボタンを2回押してからフラッシュします：

```
west flash -r uf2
```

次に、出力を確認するために接続します：

```
screen /dev/ttyACM0 115200
```

以下のような出力が表示されるはずです：
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

なぜ動作するのか？Zephyr の GitHub リポジトリで [サンプルコード](https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/drivers/audio/dmic) を確認できます。

このサンプルは以下を示しています：

> これは、:ref:`Audio DMIC API` を使用する方法を示す非常にシンプルなアプリケーションであり、この API を実装するためのドライバを開発する際の補助としても役立ちます。1 チャンネルと 2 チャンネルを使用して異なる構成で 2 回の PDM 転送を実行しますが、受信したオーディオデータを処理することはありません。

```
const struct device *const dmic_dev = DEVICE_DT_GET(DT_NODELABEL(dmic_dev));
```

サンプルロジックは、ターゲットボードに関連する `dmic_dev` デバイスツリーオブジェクトを見つけます。Xiao nrf52840 Sense のデバイスツリーを確認すると、さらにその構成がわかります：

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

GPIOがピンの電源を有効化するために使用されています。以下に[Xiao nRF52840の回路図](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf)の関連部分をハイライトしました：

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/schematic-pin-highlight-mic.png?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/schematic-pin-highlight-mic.png" style={{width:500, height:'auto'}}/></div>

この回路図のハイライトから、GPIO1 10がマイクの有効化ピンであることがわかります。

#### Bluetooth

このセットアップをテストするために、Zephyrの既存のサンプルを使用できます：

```
west build -p always -b xiao_ble samples/bluetooth/observer
```

ボードにフラッシュします：
```
west flash -r uf2
```

フラッシュ後、MCUがリセットされるのを少し待ち、モニターに接続します：
```
screen /dev/ttyACM0 115200
```

ボードにコマンドを送信するためのコンソールが表示されます：
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

[confファイル](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/bluetooth/observer/prj.conf)では、ZephyrビルドのBluetooth関連機能を有効化しています。

#### TFLite - Hello World

ZephyrでTFLiteを有効化し、更新します：
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

フラッシュ後、MCUがリセットされるのを少し待ち、モニターに接続します：
```
screen /dev/ttyACM0 115200
```

コンソールから結果が返されます：
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

TFLiteに関する追加情報はこのガイドの範囲外ですが、この例はデバイスの機能とTFLiteセットアップを実行するために必要なコンポーネントのガイドとして役立ちます。

### 追加コンポーネント

- [Grove - 拡張ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2Cディスプレイ
- [Grove - 拡張ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - ボタン
- [Grove - 拡張ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - ブザー
- [Grove - 拡張ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - SDカード
- [Grove - 温湿度センサー (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69インチLCDディスプレイモジュール、240×280解像度、SPIインターフェース](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)
- [Xiao用ラウンドディスプレイ](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- [Xiao用ラウンドディスプレイ](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html) - SDカード

#### Grove - 拡張ボード - I2Cディスプレイ

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/xiao_expansion_oled-nrf.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/xiao_expansion_oled-nrf.jpg" style={{width:500, height:'auto'}}/></div>

このセットアップをテストするために、Zephyrの既存のサンプルを使用できます：

```
west build -p always -b xiao_ble samples/drivers/display --  -DSHIELD=seeed_xiao_expansion_board
west flash -r uf2
```

このディスプレイは2色のみをサポートしているため、複数の黒いボックスと隅に点滅するボックスが表示されます。

この例がなぜ動作するのかを少し掘り下げてみましょう：
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

このシールドは、0x3CレジスタにSSD1306 OLEDスクリーンを設定します。`chosen`セクションでZephyrディスプレイとして選択されています。

#### Grove - 拡張ボード - ボタン

このセットアップをテストするために、Zephyrの既存のサンプルを使用できます：

```
west build -p always -b xiao_ble samples/basic/button -- -DSHIELD=seeed_xiao_expansion_board
```

ボードにフラッシュします：
```
west flash -r uf2
```

フラッシュ後、MCUがリセットされるのを少し待ち、モニターに接続します：
```
screen /dev/ttyACM0 115200
```

ボタンを押すと、オンボードLEDが点灯します。

コンソールに以下のような結果が表示されます：

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

この例がなぜ動作するのかを詳しく見てみましょう：
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

シールド/オーバーレイファイルは、さまざまなボードコンポーネントを設定するために使用されます。このファイルを使用することで、ボタンの例を利用できるようになり、オーバーレイによりZephyrがボタンを設定し、関連するコードで使用できるようになります。

この場合、Xiao nrf52840のD1ピンがボタンとして動作するようにこのオーバーレイで設定されており、`sw0`という名前にエイリアスされています。この名前は、コードがこのサンプルで期待するものです。

#### Grove - 拡張ボード - ブザー

ブザーをアクティブにするために、PWM信号を使用して制御するblinky PWMの例を使用します。このために、A3ピンのPWMを有効にするカスタムオーバーレイを使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-nrf52480/xiao_expansion_buzzer.overlay"
```

フラッシュ後、サンプルが進行するにつれて音が変化する一連のブザー音が聞こえるはずです。

これがなぜ動作するのかを見てみましょう：
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

オーバーレイは、Xiao nrf52840のピン29（A3ピンに対応）のPWMロジックを設定します。

#### Grove - 拡張ボード - SDカード

ここでは、ファイルシステムのサンプルを使用して、Xiao拡張ボードシールドを使用し、SPI経由でSDカードリーダーとインターフェースを試みます。拡張ボードシールドには、関連する`&xiao_d 2`ピン用にCSピンが設定されているため、この機能をボードに関連付けるためにシールドを追加する以外の作業は必要ありません。さらに準備するために、SDカード機能を有効にするカスタム設定を使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

次にフラッシュしてモニターします（最初にRESETを2回押してuf2ブートローダーモードに入ります）：
```
west flash -r uf2
```

以下のような応答が表示されるはずです：
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

この場合、SDカードには2つのファイルがありました。それらの名前とサイズがコンソールに出力されました。

ここでの関連要素を見てみましょう：
```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

関連する設定では、SPI、SDMMCディスクドライバ、およびGPIOを有効にしています。この設定がないと、オーバーレイはエラーを引き起こし、サンプルがSDカードを見つけることができません。

Xiao拡張ボードシールドの関連部分は以下の通りです：
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

前述のように、`&xiao_d 2`ピンマッピングが使用されており、これにより、使用するボードが`&xiao_d`ピンセットアップをサポートしている限り、D2ピンを選択できます。

#### Grove - 温湿度センサー (SHT31)

まずピンをはんだ付けし、Xiao nrf52840を拡張ボードに接続します。その後、Grove SHT31と拡張ボードのI2Cポートの1つをGroveコネクタケーブルで接続します。

このセットアップをテストするために、Zephyrの既存のサンプルを使用します：

```
west build -p always -b xiao_ble samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay
```

uf2ブートローダーモードでボードをフラッシュします：
```
west flash -r uf2
```

フラッシュ後、MCUがリセットされるのを待ち、モニターに接続します：
```
screen /dev/ttyACM0 115200
```

コンソールに以下のような結果が表示されます：
```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
SHT3XD: 25.68 Cel ; 54.73 %RH
SHT3XD: 25.75 Cel ; 55.44 %RH
SHT3XD: 25.79 Cel ; 55.95 %RH
SHT3XD: 25.82 Cel ; 55.93 %RH
SHT3XD: 25.84 Cel ; 56.07 %RH
SHT3XD: 25.84 Cel ; 55.69 %RH
```

この例がなぜ動作するのかを詳しく見てみましょう：
```
 &xiao_i2c {
	sht3xd@44 {
			compatible = "sensirion,sht3xd";
			reg = <0x44>;
		};
	};
```

アプリオーバーレイファイルは、さまざまなボードコンポーネントを設定するために使用されます。このファイルを使用することで、SHT31の例を利用できるようになり、オーバーレイが[サンプルロジック](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c)にセンサーをボード用に設定する方法を通知します。

#### 1.69インチLCDディスプレイモジュール、240×280解像度、SPIインターフェース

この例では、SPIを使用して240x280解像度の1.69インチLCDに接続します。

まず、以下の画像をガイドとして使用して、ボードをLCDスクリーンに接続します（この場合、Xiao nrf52840を使用していますが、接続に使用するピンレイアウトは同じです）。

| 1.69インチLCD SPIディスプレイ | XIAO nrf52840 |
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

次に、ファームウェアをビルドしてフラッシュします：
```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
west flash -r uf2
```

新しいファームウェアが適用されると、デバイスは以前拡張ボードで見たデモ画面を表示しますが、今回はSPI経由のカラーLCDに更新されています。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/spi_lcd-nrf.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/spi_lcd-nrf.jpg" style={{width:500, height:'auto'}}/></div>

#### Xiao用の円形ディスプレイ

このセットアップをテストするために、Zephyrの既存のサンプルを使用できます：

```
west build -p always -b xiao_ble samples/drivers/display --  -DSHIELD=seeed_xiao_round_display
```

ブートローダーモードに入り、デバイスをフラッシュします：
```
west flash -r uf2
```

複数の色付きコーナーが表示され、黒いコーナーが点滅するディスプレイが見られます。

別の例では、タッチスクリーンの使用を示しています：

```
west build -p always -b xiao_ble samples/modules/lvgl/demos --  -DSHIELD=seeed_xiao_round_display -DCONFIG_LV_Z_DEMO_MUSIC=y
```

ここで示されている音楽デモは実際の画面の一部に過ぎませんが、タッチスクリーンの動作を示しています。再生ボタンをタッチすると音楽アニメーションがオンになることがわかります。

[シールドファイル](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/shields/seeed_xiao_round_display/seeed_xiao_round_display.overlay)から、この動作がSPI経由でGC9A01円形ディスプレイドライバーと、i2c経由でCHSC6Xタッチモジュールをインターフェースすることで実現されていることがわかります。

この例がどのように動作するかを少し掘り下げてみましょう：
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
 * xiao_serialはXiaoのD6およびD7ピンを使用します。これらはそれぞれ
 * 画面のバックライト制御およびタッチコントローラ割り込みとして使用されます。
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

このシールドは以下を行います：
- GC9A01ディスプレイをZephyrの選択されたディスプレイとして設定
- LVGLポインタロジックをCHSC6Xモジュールに設定
- シリアルを無効化（ピンがバックライトとタッチ割り込みに使用されるため、上記の`irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;`を参照）
- D1、D2、D3ピンを使用してSPI経由で円形ディスプレイを構成

[サンプルロジック](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/modules/lvgl/demos/src/main.c)は、[LVGLデモ例コード](https://github.com/lvgl/lvgl/tree/master/demos/music)に依存しており、さらに調査することができます。

#### Xiao用の円形ディスプレイ - SDカード

ここでは、SPI経由でSDカードリーダーとインターフェースするために、Xiao拡張ボードシールドとともにファイルシステムサンプルを使用します。拡張ボードシールドには、関連する`&xiao_d 2`ピンにCSピンが構成されているため、シールドを追加する以外にボードとの関連付けに関する作業は必要ありません。さらに準備するために、SDカード機能を有効にするカスタム設定を使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_round_display
```

次にフラッシュしてモニターします（最初にRESETを2回押してuf2ブートローダーモードに入ります）：
```
west flash -r uf2
```

フラッシュ後にMCUがリセットされるのを少し待ち、モニターに接続します：
```
screen /dev/ttyACM0 115200
```

以下のような応答が表示されるはずです：
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

予想通り、ファイル内容はXiao拡張ボードSDカード例の出力と同様に表示されます。

円形ディスプレイシールドの関連部分は以下の通りです：

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

D2はSD CSピンに使用されます。

## ✨ コントリビュータープロジェクト

- このプロジェクトは Seeed Studio の [コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=57293418) によってサポートされています。
- **Tim の努力**に感謝します。あなたの作業は [こちら](https://wiki.seeedstudio.com/ja/Honorary-Contributors/) で展示されます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、スムーズな体験を提供するため、さまざまなサポートをご用意しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>