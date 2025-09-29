---
description: XIAO nRF52840(sense) With Zephyr(RTOS)
title:  XIAO nRF52840(sense) With Zephyr(RTOS)
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO-nRF52840-Zephyr-RTOS
last_update:
  date: 06/07/2024
  author: Tim
---

# XIAO nRF52840(sense)とZephyr（RTOS）

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-ble.png"/></div>

## RTOSとは

今日の組み込みシステムの最も重要なコンポーネントの一つは、**RTOS**（**リアルタイムオペレーティングシステム**とも呼ばれる）であり、タスクスケジューリングからアプリケーションの実行まで、すべてを担当しています。

**RTOS**は予測可能な実行モードを提供するように設計されています。処理がシステムの時間制限を満たす必要がある場合、RTOSが使用されます。したがって、GPOS（汎用オペレーティングシステム）と比較して、RTOSは通常軽量で小さく、一般的に特定のハードウェア上で特定のタイプのアプリケーションを実行するために必要な機能のみを提供します。場合によっては、開発者は既存のRTOSを変更し、特定のアプリケーションに必要な機能のみを提供するように絞り込んだり、その機能や性能特性をカスタマイズしたりできます。

## [Zephyr](https://www.zephyrproject.org/)とは

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

[**Zephyr**](https://www.zephyrproject.org/) OSは、リソース制約のある組み込みシステムでの使用を目的として設計された小さなフットプリントカーネルに基づいています：シンプルな組み込み環境センサーやLEDウェアラブルから、高度な組み込みコントローラー、スマートウォッチ、IoTワイヤレスアプリケーションまで。

## 機能

Zephyrは、以下を含む多数の機能を提供し、その数は絶えず増加しています：

### 豊富なカーネルサービス群

Zephyrは開発のための多くの馴染みのあるサービスを提供します：

- *マルチスレッドサービス* - 協調的、優先度ベース、非プリエンプティブ、およびプリエンプティブスレッド用で、オプションのラウンドロビンタイムスライシング付き。POSIX pthreads互換API サポートを含みます。
- *割り込みサービス* - 割り込みハンドラーのコンパイル時登録用。
- *メモリ割り当てサービス* - 固定サイズまたは可変サイズメモリブロックの動的割り当てと解放用。
- *スレッド間同期サービス* - バイナリセマフォ、カウンティングセマフォ、およびミューテックスセマフォ用。
- *スレッド間データ受け渡しサービス* - 基本メッセージキュー、拡張メッセージキュー、およびバイトストリーム用。
- *電源管理サービス* - 包括的な、アプリケーションまたはポリシー定義のシステム電源管理や、細粒度の、ドライバー定義のデバイス電源管理など。

### 複数のスケジューリングアルゴリズム

  Zephyrは包括的なスレッドスケジューリング選択肢を提供します：

- 協調的およびプリエンプティブスケジューリング
- 最早期限優先（EDF）
- 「割り込みボトムハーフ」または「タスクレット」動作を実装するメタIRQスケジューリング
- タイムスライシング：同じ優先度のプリエンプティブスレッド間でのタイムスライシングを有効化
- 複数のキューイング戦略：
  - シンプルなリンクリスト準備キュー
  - 赤黒木準備キュー
  - 従来のマルチキュー準備キュー

### Bluetooth Low Energy 5.0サポート

Bluetooth 5.0準拠（ESR10）およびBluetooth Low Energyコントローラーサポート（LE Link Layer）。Bluetooth meshおよびBluetooth認定対応Bluetoothコントローラーを含みます。

- すべての可能なLEロールを持つGeneric Access Profile（GAP）
- Generic Attribute Profile（GATT）
- Bluetooth 4.2のSecure Connections機能を含むペアリングサポート
- クリーンなHCIドライバー抽象化
- 完全なHostスタックの代わりにZephyrをコントローラーとして実行するためのRaw HCIインターフェース
- 複数の人気コントローラーで検証済み
- 高度に設定可能

Meshサポート：

- リレー、フレンドノード、低電力ノード（LPN）およびGATT Proxy機能
- 両方のプロビジョニングベアラーをサポート（PB-ADV & PB-GATT）
- 高度に設定可能で、最低16k RAMのデバイスに適合

*参考: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## はじめに

Zephyrツールチェーンがセットアップされ、関連するSDKがダウンロードされたら、アプリケーション開発を開始できます。

Xiao nrf52840については、[ボード説明ファイル](https://docs.zephyrproject.org/latest/boards/seeed/xiao_ble/doc/index.html)を参照して、さらなるセットアップ情報を確認できます。

Xiao nrf52840をプログラムするには、以下の手順を実行できます：

1. サンプルまたはあなたのアプリケーションをビルドする
2. Xiao nrf52840を接続する
3. `RST`ボタンをダブルクリックして、デバイスをuf2ブートローダーモードに設定する
4. `west flash -r uf2`コマンドを実行してデバイスにフラッシュする

最も簡単な例は、ボード上で「Hello World」サンプルを実行することです。Zephyrインストールのディレクトリに移動した後、以下のコマンドを実行してください。

```
west build -p always -b xiao_ble samples/hello_world
```

Xiao nRF52840 Senseボードを使用している場合、`xiao_ble`の代わりに`xiao_ble/nrf52840/sense`を使用してボード定義ファイル用にビルドできます（この例では違いはありません）：

```
west build -p always -b xiao_ble/nrf52840/sense samples/hello_world
```

これが完了したら、uf2ブートローダーモードに入り、次のように入力します：

```
west flash -r uf2
```

デバイスのポートを見つけます。Ubuntuの場合は以下のコマンドで確認できます：`ls /dev/tty*` を実行し、USBを接続した際に表示されるデバイスを確認してください。

私の例では `/dev/ttyACM0` が表示されます：

screenを使用してシリアル応答に接続し、監視することができます：

```
screen /dev/ttyACM0 115200
```

以下のような応答が表示されるはずです：

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
Hello World! xiao_ble/nrf52840
```

Xiaoとその拡張ボードでZephyrを使用するプロセスを支援するため、ここで使用されるいくつかのオーバーレイと設定を含むリポジトリが構築されています。このwiki記事に含まれるコマンドは、zephyrルートに対して相対的に`../applications/xiao-zephyr-examples`に配置されていることを前提としています。以下のコマンドでパスを更新することで、代替パスを提供できます。

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## ハードウェア準備

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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### 開発者向け知識

#### XIAO拡張ボード

  Seeed Studio XIAO nrf52840でGroveモジュールを使用するために、[Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)を使用し、その上にXIAO nrf52840を接続します。

  その後、ボード上のGroveコネクタを使用してGroveモジュールを接続できます

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### ピン定義

  GroveモジュールをSeeed Studio XIAO用GroveシールドのGroveコネクタに接続する際は、以下の図に従って適切な内部ピン番号を使用する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/pinout2.png"style={{width:900, height:'auto'}}/></div>

### 主要機能

- オンボードLED
- オンボードIMU (Sense)
- オンボードマイク (Sense)
- Bluetooth
- TFLite

#### オンボードLED

この例では、blinkyサンプルを使用してオンボードLEDを点滅させます。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/basic/blinky
```

RESETボタンを2回押してからフラッシュします：

```
west flash -r uf2
```

オンボードの赤色LEDがオンとオフを切り替わり、点滅効果を作り出すのが見えるでしょう。

この例がなぜ動作するのかを理解するために、少し詳しく見てみましょう。

関連するサンプルコードはled0を参照しています：

```
#define LED0_NODE DT_ALIAS(led0)
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
```

これは、Xiao nRF52840 デバイスツリーコードでエイリアスを介して定義されています：

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

ボード上の26番ピンに対応しています。

Xiaoブレイクアウトのピンについては、ボードファイルがXiaoコネクタを提供しているため、&gpio0ピンマッピングを直接使用する必要はありません。これによりインターフェースが簡素化されます。

例えば、D0を参照する場合は、`&gpio 2`または`&xiao_d 0`として参照します。

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

#### オンボードIMU（センス）

Xiao nrf52840の主要な機能の一つは、内蔵のIMUセンサーです。このデータを使用して、機械学習モデルの訓練、ジェスチャーの検出、ボードの動きの検出などが可能です。

この機能をテストするために、IMUを利用する内蔵サンプルを使用し、その後、なぜそれが動作するのかに関連するコードを調べてみます。

```
cd ~/zephyrproject/zephyr
west build -p -b xiao_ble/nrf52840/sense samples/sensor/lsm6dsl
```

RESETボタンをダブルプレスしてからフラッシュします：

```
west flash -r uf2
```

次に、出力を確認するために接続する必要があります：

```
screen /dev/ttyACM0 115200
```

これは以下のような内容を表示するはずです：

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

なぜ動作するのでしょうか？Zephyrのgithubリポジトリを通じて[サンプルコード](https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/sensor/lsm6dsl)を確認できます。

```
 const struct device *const lsm6dsl_dev = DEVICE_DT_GET_ONE(st_lsm6dsl);
```

サンプルロジックは、ターゲットボード用の関連する `st_lsm6dsl` デバイスツリーオブジェクトを見つけます。Xiao nrf52840 sense デバイスツリーを確認して、それがどのように設定されているかをさらに詳しく見ることができます：

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

GPIOを使用してピン電源を有効にしています。定義ファイルから、GPIO1 8を使用していることがわかります。以下に[Xiao nRF52840回路図](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf)の関連部分をハイライトしました：

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/schematic-pin-highlight-imu.png?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/schematic-pin-highlight-imu.png" style={{width:500, height:'auto'}}/></div>

この回路図のハイライトから、GPIO1 8がIMUのイネーブルピンであることがわかります。さらに、GPIO0 11が割り込みピンです。そのため、これは上記のデバイスツリースニペットに反映されています。

#### オンボードマイク（Sense）

Xiao nrf52840の主要な機能の一つは、内蔵マイクです。IMUと同様に、その使用により多くの機械学習アプリケーションが可能になります。

この機能をテストするために、マイクを利用する内蔵サンプルを使用し、それが動作する理由に関連するコードを調べてみます。

```
cd ~/zephyrproject/zephyr
west build -p -b xiao_ble/nrf52840/sense samples/drivers/audio/dmic
```

RESETボタンをダブルプレスしてからフラッシュします：

```
west flash -r uf2
```

次に、出力を確認するために接続する必要があります：

```
screen /dev/ttyACM0 115200
```

これは次のような内容を表示するはずです：

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

なぜ動作するのでしょうか？Zephyrのgithubリポジトリを通じて[サンプルコード](https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/drivers/audio/dmic)を確認できます。

このサンプルは以下のことを実演しています：

> これは:ref:`Audio DMIC API`の使用方法を示し、このAPIを実装するドライバーの開発を支援することを目的とした非常にシンプルなアプリケーションです。異なる設定（1チャンネルと2チャンネルを使用）で2つのPDM転送を実行しますが、受信したオーディオデータを処理することはありません。

```
const struct device *const dmic_dev = DEVICE_DT_GET(DT_NODELABEL(dmic_dev));
```

サンプルロジックは、ターゲットボード用の関連する `dmic_dev` デバイスツリーオブジェクトを見つけます。Xiao nrf52840 sense のデバイスツリーを確認して、それがどのように設定されているかをさらに詳しく見ることができます：

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

サンプルプロジェクトのオーバーレイでは、このレギュレータが有効化されます：

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

GPIOがピン電源を有効にするために使用されています。以下に[Xiao nRF52840回路図](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf)の関連部分をハイライトしました：

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/schematic-pin-highlight-mic.png?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/schematic-pin-highlight-mic.png" style={{width:500, height:'auto'}}/></div>

この回路図のハイライトから、GPIO1 10がマイクの有効ピンであることがわかります。

#### Bluetooth

このセットアップをテストするために、Zephyrの既存のサンプルを使用できます：

```
west build -p always -b xiao_ble samples/bluetooth/observer
```

ボードにフラッシュします：

```
west flash -r uf2
```

フラッシュ後にMCUがリセットされるまで少し待ち、モニターに接続してください：

```
screen /dev/ttyACM0 115200
```

ボードにコマンドを送信するためのコンソールが利用可能になります：

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

[conf ファイル](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/bluetooth/observer/prj.conf)は、Zephyr ビルドに対してbluetooth関連機能を有効にします。

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

フラッシュ後にMCUがリセットされるまで少し待ち、モニターに接続してください：

```
screen /dev/ttyACM0 115200
```

コンソールから返される結果が表示されます：

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

TFLiteに関する追加情報はこのガイドの範囲外ですが、この例はデバイスの機能とTFLiteセットアップの実行に必要なコンポーネントのガイドとして役立ちます。

### 追加コンポーネント

- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2Cディスプレイ
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - ボタン
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - ブザー
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - SDカード
- [Grove - Temperature and Humidity Sensor (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69inch LCD Display Module, 240×280 Resolution, SPI Interface](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)
- [Round Display for Xiao](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- [Round Display for Xiao](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html) - SDカード

#### Grove - Expansion Board - I2Cディスプレイ

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/xiao_expansion_oled-nrf.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/xiao_expansion_oled-nrf.jpg" style={{width:500, height:'auto'}}/></div>

このセットアップをテストするために、Zephyrの既存のサンプルを使用できます：

```
west build -p always -b xiao_ble samples/drivers/display --  -DSHIELD=seeed_xiao_expansion_board
west flash -r uf2
```

この表示では、複数の黒いボックスと角で点滅するボックスが表示されます。この表示は2色のみをサポートしているためです。

この例がなぜ機能するのかを詳しく見てみましょう：

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

シールドは0x3CレジスタにSSD1306 OLEDスクリーンを設定します。これはchosenセクションでzephyrディスプレイとして選択されます。

#### Grove - 拡張ボード - ボタン

このセットアップをテストするために、Zephyrの既存のサンプルを使用できます：

```
west build -p always -b xiao_ble samples/basic/button -- -DSHIELD=seeed_xiao_expansion_board
```

ボードにフラッシュします：

```
west flash -r uf2
```

フラッシュ後にMCUがリセットされるまで少し待ち、モニターに接続してください：

```
screen /dev/ttyACM0 115200
```

ボタンをサンプルで押すと、オンボードLEDが点灯します。

コンソールから結果が返されるのが確認できます：

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

この例を少し詳しく見て、なぜ動作するのかを理解してみましょう：

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

シールド/オーバーレイファイルは、さまざまなボードコンポーネントのセットアップに使用されます。このファイルを使用することで、ボタンの例を活用できます。オーバーレイによりZephyrがボタンを設定し、関連するコードで使用できるようになります。

この場合、Xiao nrf52840のD1です。このオーバーレイでボタンとして動作するように設定され、sw0名にエイリアスされて、この名前を期待するコードを持つサンプルで使用できるようになります。

#### Grove - 拡張ボード - ブザー

blinky PWMの例を使用してブザーを有効化し、PWM信号を介してその動作を制御します。このために、A3ピンのPWMを有効にするカスタムオーバーレイを使用します。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-nrf52480/xiao_expansion_buzzer.overlay"
```

フラッシュ後、サンプルが実行される過程で音が変化する一連のブザー音が聞こえ始めるはずです。

これがなぜ機能するのかを見てみましょう：

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

オーバーレイは、Xiao nrf52840のピン配置のA3ピンに対応するピン29のPWMロジックを設定します。

#### Grove - 拡張ボード - SDカード

ここではファイルシステムサンプルをXiao拡張ボードシールドと一緒に使用して、SPI経由でSDカードリーダーとのインターフェースを試してみます。拡張ボードシールドには、関連する`&xiao_d 2`ピン用に設定されたCSピンがあるため、この機能をボードに関連付けるためにシールドを追加する以外に、あなたが行う作業はありません。さらに準備するために、SDカード機能を有効にするカスタム設定を使用しています。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

次にフラッシュして監視します（まずRESETを2回押してuf2ブートローダーモードに入ります）：

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

この場合、私のSDカードには2つのファイルがありました。それらの名前とサイズがコンソールに出力されました。

ここで関連する要素を見てみましょう：

```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

関連する設定では、SPI、SDMMCディスクドライバー、およびGPIOを有効にしています。この設定がないと、サンプルがSDカードを見つけることができないため、オーバーレイがエラーを引き起こします。

Xiao拡張ボードシールドの関連部分を以下に示します：

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

前述のように、`&xiao_d 2` ピンマッピングは、`&xiao_d` ピン設定をサポートしている限り、使用するボードに関係なく D2 ピンを選択できるようにするために使用されます。

#### Grove - 温湿度センサー (SHT31)

まずピンをはんだ付けし、Xiao nrf52840 を拡張ボードに接続します。次に、Grove SHT31 と拡張ボード上の I2C ポートの 1 つの間に Grove コネクタケーブルを接続します。

この設定をテストするために、Zephyr の既存のサンプルを使用できます：

```
west build -p always -b xiao_ble samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay
```

ボードがuf2ブートローダーモードになった後、ボードにフラッシュします：

```
west flash -r uf2
```

フラッシュ後にMCUがリセットされるまで少し待ち、モニターに接続してください：

```
screen /dev/ttyACM0 115200
```

コンソールから返される結果が表示されます：

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
SHT3XD: 25.68 Cel ; 54.73 %RH
SHT3XD: 25.75 Cel ; 55.44 %RH
SHT3XD: 25.79 Cel ; 55.95 %RH
SHT3XD: 25.82 Cel ; 55.93 %RH
SHT3XD: 25.84 Cel ; 56.07 %RH
SHT3XD: 25.84 Cel ; 55.69 %RH
```

この例を少し詳しく見て、なぜ動作するのかを理解しましょう：

```
 &xiao_i2c {
 sht3xd@44 {
   compatible = "sensirion,sht3xd";
   reg = <0x44>;
  };
 };
```

アプリオーバーレイファイルは、さまざまなボードコンポーネントをセットアップするために使用されます。このファイルを使用することで、SHT31の例を活用できます。オーバーレイが[サンプルロジック](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c)に対して、私たちのボード用にセンサーを設定する方法を通知するためです。

#### 1.69インチLCDディスプレイモジュール、240×280解像度、SPIインターフェース

この例では、SPIを使用して240x280解像度の1.69インチLCDに接続します。

まず、以下の画像をガイドとして使用してボードをLCDスクリーンに接続してください（この場合はXiao nrf52840を使用していますが、接続には同じピンレイアウトが使用されます）。

| 1.69インチLCD SPIディスプレイ| XIAO nrf52840 |
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

これでファームウェアをビルドしてフラッシュできます：

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
west flash -r uf2
```

新しいファームウェアが配置されると、デバイスは以前に拡張ボードで見たのと同じデモ画面を表示しますが、今度はSPI経由のカラーLCD用に更新されています。

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/spi_lcd-nrf.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/spi_lcd-nrf.jpg" style={{width:500, height:'auto'}}/></div>

#### Xiao用ラウンドディスプレイ

このセットアップをテストするために、Zephyrの既存のサンプルを使用できます：

```
west build -p always -b xiao_ble samples/drivers/display --  -DSHIELD=seeed_xiao_round_display
```

ブートローダーモードに入り、デバイスをフラッシュします：

```
west flash -r uf2
```

複数の色付きコーナーと黒いコーナーが点滅している表示が見えます。

別の例では、タッチスクリーンの使用方法を示しています：

```
west build -p always -b xiao_ble samples/modules/lvgl/demos --  -DSHIELD=seeed_xiao_round_display -DCONFIG_LV_Z_DEMO_MUSIC=y
```

ここで示されている音楽デモは実際の画面の一部分のみですが、それでもタッチスクリーンの動作を実演しています。ご覧のように、再生ボタンをタッチすると音楽アニメーションがオンになります。

[シールドファイル](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/shields/seeed_xiao_round_display/seeed_xiao_round_display.overlay)から分かるように、これはGC9A01円形ディスプレイドライバーとSPI経由でインターフェースし、CHSC6Xタッチモジュールとi2c経由でインターフェースすることで動作します。

この例について少し詳しく見て、どのように動作するかを確認してみましょう：

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

このシールドは以下の機能を実行します：

- GC9A01ディスプレイを選択されたZephyrディスプレイとして設定
- CHSC6Xモジュールを使用するようにLVGLポインタロジックを設定
- ピンがバックライトとタッチ割り込みに使用されるため、シリアルを無効化（上記の`irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;`で確認可能）
- D1、D2、D3ピンを使用してSPI用の円形ディスプレイを設定

[サンプルロジック](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/modules/lvgl/demos/src/main.c)は[LVGLデモサンプルコード](https://github.com/lvgl/lvgl/tree/master/demos/music)に依存しており、さらに詳しく調べることができます。

#### Round Display for Xiao - SDカード

ここではファイルシステムサンプルとXiao Expansion Boardシールドを使用して、SPI経由でSDカードリーダーとのインターフェースを試します。拡張ボードシールドには関連する`&xiao_d 2`ピン用にCSピンが設定されているため、この機能をボードに関連付けるためにシールドを追加する以外に作業は必要ありません。さらに準備するために、SDカード機能を有効にするカスタム設定を使用しています。

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_round_display
```

次にフラッシュして監視します（まずRESETを2回押してuf2ブートローダーモードに入ります）：

```
west flash -r uf2
```

フラッシュ後にMCUがリセットされるまで少し待ち、モニターに接続してください：

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

期待通り、ファイルの内容はXiao拡張ボードSDカードの例からの出力と同様の方法で表示されます。

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

D2はSD CSピンに使用されます。

## ✨ コントリビュータープロジェクト

- このプロジェクトはSeeed Studioの[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=57293418)によってサポートされています。
- **Timの努力**に感謝し、あなたの作品は[展示](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)されます。

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
