---
title: Seeed Studio XIAO nRF54LM20A Sense 入門ガイド
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - pin_multiplexing
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/Seeed-Studio-XIAO-nRF54LM20A-Sense.webp
slug: /xiao_nrf54lm20a_getting_started
sku: 100018440
last_update:
  date: 05/13/2026
  author: Brandy
createdAt: '2025-05-13'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_getting_started/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/get_start_1.jpg" style={{width:600, height:'auto'}}/></div>

## はじめに

Seeed Studio XIAO nRF54LM20A Sense は、Nordic Semiconductor の nRF54LM20A SoC を中心に構成された、コンパクトで超低消費電力のワイヤレス開発ボードです。128 MHz Arm Cortex-M33 プロセッサ、512 KB RAM、2 MB のオンチップ NVM、マルチプロトコル 2.4 GHz ワイヤレス接続、オンボード IMU、デジタルマイク、8MB 外部フラッシュ、IPEX アンテナコネクタ、nPM1300 PMIC を組み合わせており、バッテリー駆動の高度な IoT、ウェアラブル、スマートセンシング、エッジ AI アプリケーションに適しています。

### 仕様

<table>
  <thead>
    <tr>
      <th>製品名</th>
      <th>Seeed Studio XIAO nRF54LM20A</th>
      <th>Seeed Studio XIAO nRF54LM20A Sense</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>プロセッサ</strong></td>
      <td colspan="2">Arm® Cortex®-M33 128 MHz &amp; RISC-V 128 MHz コプロセッサ</td>
    </tr>
    <tr>
      <td><strong>RAM</strong></td>
      <td colspan="2">512KB</td>
    </tr>
    <tr>
      <td><strong>フラッシュ</strong></td>
      <td colspan="2">2 MB 不揮発性メモリ (NVM)</td>
    </tr>
    <tr>
      <td><strong>外部フラッシュ</strong></td>
      <td colspan="2">8MB オンボード外部フラッシュ</td>
    </tr>
    <tr>
      <td><strong>PMIC / バッテリー</strong></td>
      <td colspan="2">電源制御およびバッテリー充電用 nPM1300 PMIC</td>
    </tr>
    <tr>
      <td><strong>インターフェース</strong></td>
      <td colspan="2">
        28x GPIO ピン<br/>
        9x アナログピン<br/>
        1x I2C<br/>
        1x UART<br/>
        1x SPI<br/>
        1x NFC<br/>
        1x SHPHLD
      </td>
    </tr>
    <tr>
      <td><strong>オンボード</strong></td>
      <td>
        1x ユーザー LED (R/G/B 3 色)<br/>
        1x 充電 LED (バッテリー充電インジケータ)<br/>
        1x リセットボタン<br/>
        1x ユーザーボタン<br/>
        1x IPEX4 コネクタ (外部アンテナ用)
      </td>
      <td>
        1x ユーザー LED (R/G/B 3 色)<br/>
        1x 充電 LED (バッテリー充電インジケータ)<br/>
        1x リセットボタン<br/>
        1x ユーザーボタン<br/>
        1x IPEX4 コネクタ (外部アンテナ用)<br/>
        1x 6 軸 IMU<br/>
        1x PDM マイク
      </td>
    </tr>
    <tr>
      <td><strong>ワイヤレス接続</strong></td>
      <td colspan="2">
        Bluetooth LE 6.0（Channel Sounding を含む）<br/>
        Bluetooth Mesh<br/>
        NFC<br/>
        Thread<br/>
        Zigbee<br/>
        Matter<br/>
        Amazon Sidewalk<br/>
        独自 2.4 GHz プロトコル
      </td>
    </tr>
    <tr>
      <td><strong>電源入力</strong></td>
      <td colspan="2">
        Type-C: 5V<br/>
        バッテリー: 3.7V
      </td>
    </tr>
    <tr>
      <td><strong>低消費電力モード (3.7V@2A)</strong></td>
      <td>/</td>
      <td>
        ライトスリープ: 約 9.96µA<br/>
        ディープスリープ (System OFF): 約 4.76µA<br/>
        ディープスリープ (System OFF, GRTC ウェイクアップ): 約 4.92µA<br/>
        シップモード: 0.33µA
      </td>
    </tr>
    <tr>
      <td><strong>ソフトウェア互換性</strong></td>
      <td colspan="2">
        Nordic nRF Connect SDK (Zephyr RTOS ベース)<br/>
        PlatformIO (Zephyr RTOS ベース)
      </td>
    </tr>
    <tr>
      <td><strong>動作温度</strong></td>
      <td colspan="2">-20°C ～ 70°C</td>
    </tr>
    <tr>
      <td><strong>寸法</strong></td>
      <td colspan="2">21 x 17.8mm</td>
    </tr>
  </tbody>
</table>

### 特長

- **高度な接続性とセキュリティを備えた高性能 SoC**

  Seeed Studio XIAO nRF54LM20A Sense は、Nordic Semiconductor の nRF54LM20A SoC を搭載した、コンパクトで超低消費電力のワイヤレス開発ボードです。128 MHz Arm Cortex-M33 プロセッサ、512 KB RAM、2 MB オンチップ NVM、128 MHz RISC-V コプロセッサ、マルチプロトコル 2.4 GHz ワイヤレス接続、オンボード IMU、デジタルマイク、8MB 外部フラッシュ、IPEX アンテナコネクタ、Nordic nPM1300 PMIC を備え、効率的な電源管理を実現します。Bluetooth LE、Bluetooth Channel Sounding、Bluetooth Mesh、Thread、Zigbee、Matter、および最大 4 Mbps の独自 2.4 GHz プロトコルをサポートし、このボードは次世代のコネクテッド製品向けに設計されています。オンボードのモーションおよびオーディオセンサーにより、ウェアラブル、スマートセンシング、TinyML、ジェスチャ認識、音声トリガーデバイス、バッテリー駆動 IoT アプリケーションに最適です。

- **超低消費電力効率**

  Nordic nRF54LM20A と nPM1300 PMIC をベースとした XIAO nRF54LM20A Sense は、BAT 電源時のディープスリープ電流がわずか 4.76 µA という実測値を達成しています。nPM1300 PMIC とその 0.33 µA のシップモード BAT 電流と組み合わせることで、アクティブなワイヤレス動作時には、3.7 V の模擬バッテリー入力および TX 出力 +8 dBm 設定で平均電流 3.87 mA を記録し、このボードは長寿命バッテリー駆動のセンシングアプリケーション、ウェアラブル、常時接続の IoT デバイスに理想的です。

- **洗練された開発体験**

  Nordic nRF Connect SDK および PlatformIO (Zephyr) を完全サポートしており、効率的な組み込み開発ワークフローを実現します。（注: 現在 Arduino IDE には対応していません）

## ハードウェア概要

<div className="table-center">
  <TabItem value="54lm20a" label="XIAO nRF54LM20A" default>
    <table align="center">
      <tbody>
        <tr>
          <th>XIAO nRF54LM20A ピン一覧</th>
        </tr>
        <tr>
          <td>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/4_pin.png"
                style={{width: 800, height: 'auto'}}
              />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/5_pin.png"
                style={{width: 800, height: 'auto'}}
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </TabItem>
</div>

## **ピンマップ**

| XIAO ピン      | 機能           | チップピン                          | 説明                                                                        |
| :------------: | :------------: | :-------------------------------: | :-------------------------------------------------------------------------- |
| **電源ピン**   |                |                                   |                                                                             |
| VBUS           | VBUS           | -                                 | 5V 電源入力/出力                                                            |
| GND            | GND            | -                                 | グラウンド                                                                  |
| 3V3            | 3V3-OUT        | -                                 | 3.3V 電源出力                                                               |
| BAT+           | BAT+           | -                                 | バッテリー入力（I²C 経由で nPM1300 により監視）                            |
| BAT-           | BAT-           | -                                 | バッテリーマイナス端子                                                     |
| SHPHLD         | SHPHLD         | -                                 | PMIC シップ/ハイバネートモード制御（超低消費電力の出荷状態）              |
| **システム & 制御ピン** |        |                                   |                                                                             |
| RESET          | RESET          | -                                 | ボードリセット                                                              |
| SWCLK          | SWCLK          | nRF54LM20A SWCLK / SAMD11 SWCLK   | シリアルワイヤクロック（nRF54 および SAMD11 用）                           |
| SWDIO          | SWDIO          | nRF54LM20A SWDIO / SAMD11 SWDIO   | シリアルワイヤデータ（nRF54 および SAMD11 用）                             |
| SAMD11_RESET   | RESET          | SAMD11 RESET                      | SAMD11 コプロセッサリセット                                                |
| **ユーザー & LED ピン** |            |                                   |                                                                             |
| -              | USER_BUTTON    | P0.09                             | ユーザーボタン入力                                                          |
| -              | RGB-B          | P1.23                             | オンボード RGB LED 青チャンネル                                            |
| -              | RGB-G          | P1.24                             | オンボード RGB LED 緑チャンネル                                            |
| -              | RGB-R          | P1.22                             | オンボード RGB LED 赤チャンネル                                            |
| **アナログ入力 (ADC) ピン** |      |                                   |                                                                             |
| A0             | AIN0           | P1.00                             | アナログ入力 0 / GPIO                                                       |
| A1             | AIN1           | P1.31                             | アナログ入力 1 / GPIO                                                       |
| A2             | AIN2           | P1.30                             | アナログ入力 2 / GPIO                                                       |
| A3             | AIN3           | P1.29                             | アナログ入力 3 / GPIO                                                       |
| A7             | AIN7           | P1.03                             | アナログ入力 7 / GPIO                                                       |
| **I2C ピン**   |                |                                   |                                                                             |
| SDA            | I2C_SDA        | P1.03                             | I2C データライン (IMU & 周辺機器)                                          |
| SCL            | I2C_SCL        | P1.07                             | I2C クロックライン (IMU & 周辺機器)                                        |
| -              | BAT_SDA        | P1.18                             | バッテリーモニタ用 I2C SDA (nPM1300)                                       |
| -              | BAT_SCL        | P1.17                             | バッテリーモニタ用 I2C SCL (nPM1300)                                       |
| **UART ピン**  |                |                                   |                                                                             |
| TX             | UART_TX        | P1.08                             | UART 送信                                                                   |
| RX             | UART_RX        | P1.09                             | UART 受信                                                                   |
| **SPI ピン**   |                |                                   |                                                                             |
| MOSI           | SPI_MOSI       | P1.06                             | SPI マスタ出力・スレーブ入力                                               |
| MISO           | SPI_MISO       | P1.05                             | SPI マスタ入力・スレーブ出力                                               |
| SCK            | SPI_SCK        | P1.04                             | SPI シリアルクロック                                                        |
| **オンボード周辺ピン** |      |                                   |                                                                             |
| -              | MIC_DAT        | P1.14                             | マイクデータライン                                                          |
| -              | MIC_CLK        | P1.13                             | マイククロックライン                                                        |
| -              | IMU_SDA        | P0.08                             | IMU I2C SDA (オンボード IMU)                                                |
| -              | IMU_SCL        | P0.07                             | IMU I2C SCL (オンボード IMU)                                                |
| -              | IMU_CS         | P3.12                             | IMU チップセレクト                                                          |
| -              | IMU_INT1       | P0.06                             | IMU 割り込み 1                                                              |
| -              | NFC            | P1.02 / P1.01                     | NFC アンテナピン                                                            |
| -              | GRTC           | P0.04 / P0.05                     | 汎用 RTC ピン                                                               |
## はじめに

このセクションでは、RGB LED のマルチカラー点滅効果を通して、XIAO nRF54LM20A をすばやく使い始める方法を案内します。
以下のハードウェアおよびソフトウェアの準備を完了し、今後の開発に向けて XIAO をセットアップしてください。

### ハードウェア

以下を準備する必要があります：

- 1 x [Seeed Studio XIAO nRF54LM20A](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-p-5884.html)
- 1 x コンピュータ
- 1 x USB Type-C ケーブル

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO nRF54LM20A Sense</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg"
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
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html"
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

## ソフトウェア

<!-- <Tabs>
  <TabItem value="platformio" label="PlatformIO" default> -->

### XIAO nRF54LM20A 用の PlatformIO セットアップ

以下の簡潔な手順に従って開発環境を構成し、XIAO nRF54LM20A 上で最初のアプリケーションをデプロイします。

#### VS Code 用 PlatformIO IDE 拡張機能のインストール

まだインストールしていない場合は、Visual Studio Code 内から直接 PlatformIO IDE 拡張機能をインストールしてください。この強力な拡張機能により、VS Code が本格的な組み込み開発環境に変わります。

- VS Code を開きます。
- 拡張機能ビューを開きます（Ctrl+Shift+X または Cmd+Shift+X）。
- [**PlatformIO IDE**](https://platformio.org/platformio-ide) を検索し、Install をクリックします。

#### 新しい PlatformIO プロジェクトを作成する

ここでは、任意の開発ボードを選択してプロジェクトファイルを作成できます。ここでは例として XIAO ESP32 C3 を使用します。

<div className="table-center">
<table align="center">
  <tr>
      <th>操作 1</th>
        <th>操作 2</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_platform/mg24patform2.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_PlatformIO/mg24_platformIO.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
</table>
</div>

#### XIAO nRF54LM20A の Zephyr 対応用に platformio.ini を設定する

プロジェクトが作成されたら、プロジェクトディレクトリのルートにある platformio.ini ファイルを探します（左側の VS Code Explorer に表示されます）。このファイルは PlatformIO プロジェクト設定の中核です。

<table align="center">
  <tbody>
    <tr>
      <th>操作 3</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/1.1.png"style={{width: 800, height: 'auto'}}
          />
        </div>
      </td>
    </tr>
  </tbody>
</table>


platformio.ini ファイルの内容全体を、次の設定に置き換える必要があります：

```ini
[env:seeed-xiao-nrf54lm20a]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = zephyr
board = seeed-xiao-nrf54lm20a
```

その後、platformio.ini ファイルを再度保存（Ctrl+S または Cmd+S）し、完全に読み込みが完了するまで待ちます。

読み込みが完了したら、このプロジェクトは閉じて構いません。このステップは必要なライブラリファイルをダウンロードするためのものです。

:::tip
以前に他の XIAO ライブラリをインストールしている場合は、以下の PlatformIO コマンドを使用して、このライブラリを最新バージョンに更新することをお勧めします。
これは公式に推奨されている方法です。プロジェクトのルートディレクトリで、次のコマンドを直接実行するだけで構いません（platform フォルダに移動する必要はありません）:

```bash
pio pkg update -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_1.png" style={{width:800, height:'auto'}}/></div>

:::

#### 最初の Blink サンプルをコンパイルして書き込む

ここでは、クラシックな **Blink** サンプルでセットアップをテストしてみましょう。このコードは、XIAO nRF54LM20A Sense の内蔵 LED を点滅させます。

以下はライブラリをダウンロードするためのリンクです。このプロジェクトを直接ローカルマシンにダウンロードしてから、VS Code でそのまま開くこともできます。あるいは、次の手順に従って、一部のデモコードを置き換えて追加することもできます。このプロセスには次の作業が含まれます：

:::tip

Seeed Studio XIAO シリーズ開発ボードの定義は **platform-seeedboards** リポジトリに保存されています。XIAO nRF54LM20A Sense を使用している場合は、このリポジトリを必ず最新バージョンに更新してください。

<div className="github_container" style={{textAlign: 'center'}}>
    <a className="github_item" href="hhttps://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-blink" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

:::

ステップ 1: 新しいプロジェクトを作成する
<table align="center">
  <tbody>
    <tr>
      <th>操作 4</th>
    </tr>
    <tr>
      <td>
<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/2.png"
    style={{width: 800, height: 'auto'}}
  />
</div>
      </td>
    </tr>
  </tbody>
</table>

ステップ 2: プロジェクトを開く
まずコンパイルして、取得したプロジェクトが正しく動作するか確認できます。問題なく動作すれば、プロジェクトの取得は成功しています。
下図を参照してください：
<table align="center">
  <tbody>
    <tr>
      <th>操作 5</th>
    </tr>
    <tr>
      <td>
<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_2.png"
    style={{width: 800, height: 'auto'}}
  />
</div>  
      </td>
    </tr>
  </tbody>
</table>

ステップ 3: プロジェクトコードを置き換える
- **src/main.c** と **Zephyr/prj.conf** ファイルを開き、元のコードを以下のコードに置き換えます。
<table align="center">
  <tbody>
    <tr>
      <th>操作 6</th>
    </tr>
    <tr>
      <td>
<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/14io.png"
    style={{width: 800, height: 'auto'}}
  />
</div>
      </td>
    </tr>
  </tbody>
</table>


<details>
<summary>src/main.c</summary>
<div>

```c

/*
 * Copyright (c) 2016 Intel Corporation
 *
 * SPDX-License-Identifier: Apache-2.0
 */

#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/pwm.h>
#include <nrfx_power.h>

#define PWM_PERIOD_NS 1000000U
#define STEP_TIME_MS 500

#define LED_R_NODE DT_ALIAS(pwm_led1)
#define LED_G_NODE DT_ALIAS(pwm_led2)
#define LED_B_NODE DT_ALIAS(pwm_led0)

#if !DT_NODE_EXISTS(LED_R_NODE) || !DT_NODE_EXISTS(LED_G_NODE) || !DT_NODE_EXISTS(LED_B_NODE)
#error "This RGB blink demo expects pwm-led0/pwm-led1/pwm-led2 devicetree aliases"
#endif

static const struct pwm_dt_spec led_r = PWM_DT_SPEC_GET(LED_R_NODE);
static const struct pwm_dt_spec led_g = PWM_DT_SPEC_GET(LED_G_NODE);
static const struct pwm_dt_spec led_b = PWM_DT_SPEC_GET(LED_B_NODE);

struct rgb_step {
	uint8_t r;
	uint8_t g;
	uint8_t b;
	uint32_t delay_ms;
};

static int pwm_set_u8(const struct pwm_dt_spec *led, uint8_t level)
{
	uint32_t duty_ns = (PWM_PERIOD_NS * (uint32_t)level) / 255U;

	return pwm_set_dt(led, PWM_PERIOD_NS, duty_ns);
}

static int rgb_set(uint8_t r, uint8_t g, uint8_t b)
{
	int ret;

	ret = pwm_set_u8(&led_r, r);
	if (ret < 0) {
		return ret;
	}

	ret = pwm_set_u8(&led_g, g);
	if (ret < 0) {
		return ret;
	}

	ret = pwm_set_u8(&led_b, b);
	if (ret < 0) {
		return ret;
	}

	return 0;
}

int main(void)
{
	int ret;

#if defined(CONFIG_NRFX_POWER)
	nrfx_power_constlat_mode_request();
#endif

	if (!device_is_ready(led_r.dev) || !device_is_ready(led_g.dev) || !device_is_ready(led_b.dev)) {
		return -1;
	}

	static const struct rgb_step demo[] = {
		{ 255, 0, 0, STEP_TIME_MS },
		{ 0, 255, 0, STEP_TIME_MS },
		{ 0, 0, 255, STEP_TIME_MS },
		{ 255, 255, 0, STEP_TIME_MS },
		{ 0, 255, 255, STEP_TIME_MS },
		{ 255, 0, 255, STEP_TIME_MS },
		{ 255, 255, 255, STEP_TIME_MS },
		{ 0, 0, 0, STEP_TIME_MS },
	};

	while (1) {
		for (size_t i = 0; i < ARRAY_SIZE(demo); i++) {
			ret = rgb_set(demo[i].r, demo[i].g, demo[i].b);
			if (ret < 0) {
				return ret;
			}
			k_msleep(demo[i].delay_ms);
		}
	}

	return 0;
}

```

</div>
</details> 


<details>
<summary>Zephyr/prj.conf</summary>
<div>

```prj
CONFIG_GPIO=y
CONFIG_PWM=y
CONFIG_SERIAL=n
```

</div>
</details>

<details>
1. デバイスツリーノードの内容を変更または再定義する必要がある場合は、Zephyr ディレクトリ内に新しい **app.overlay** ファイルを作成し、デバイスノードを明示的にバインドしてください。
2. デバイスツリーファイルを変更した場合は、再ビルドの前に元のファイルをクリーンアップして、CMake が変更を認識できずに失敗するのを防いでください。

<summary>Zephyr/app.overlay</summary>
<div>

```dts
/*
 * Device tree overlay for XIAO nRF54LM20A RGB LED PWM demo.
 *
 * PWM20 peripheral is used for RGB LED control:
 *   - Channel 0: P1.22 (Blue LED)  -> pwm_led0
 *   - Channel 1: P1.23 (Red LED)   -> pwm_led1
 *   - Channel 2: P1.24 (Green LED) -> pwm_led2
 */

&pwm20 {
	status = "okay";
};

/ {
	pwmleds {
		compatible = "pwm-leds";

		pwm_led0: pwm_led_0 {
			pwms = <&pwm20 0 PWM_MSEC(20) PWM_POLARITY_NORMAL>;
			label = "Blue LED";
		};

		pwm_led1: pwm_led_1 {
			pwms = <&pwm20 1 PWM_MSEC(20) PWM_POLARITY_NORMAL>;
			label = "Red LED";
		};

		pwm_led2: pwm_led_2 {
			pwms = <&pwm20 2 PWM_MSEC(20) PWM_POLARITY_NORMAL>;
			label = "Green LED";
		};
	};
};

/ {
	aliases {
		pwm-led0 = &pwm_led0;
		pwm-led1 = &pwm_led1;
		pwm-led2 = &pwm_led2;
	};
};
```

</div>
</details>

次に、XIAO nRF54LM20A を USB 経由でコンピュータに接続します。保存・コンパイル・ダウンロードが完了すると、RGB ライトが点滅し始めます。VS Code では：

<!-- You can use the command line or the buttons.

```bash
pio run -e seeed-xiao-nrf54lm20a -t upload -v
```

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_3.png"
    style={{width: 800, height: 'auto'}}
  />
</div> -->

<table align="center">
  <tbody>
    <tr>
      <th>操作 7</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_4.png"
            style={{width: 800, height: 'auto'}}
          />
        </div>
      </td>
    </tr>
  </tbody>
</table>

ターミナルの出力には、コンパイルと書き込みが正常に完了したことが示されているはずです。

### コードの説明

- **src/main.c**
LED の色設定、ブリージングエフェクト、点滅リズム制御、ボタンによるモード切り替え、その他のハードウェア制御動作など、デモロジックを実装するメインアプリケーションのエントリポイントです。

- **zephyr/prj.conf**
Zephyr RTOS の設定ファイルで、ロギング、UART、PWM、I2C、SPI、低消費電力管理などのシステムコンポーネントや周辺ドライバの有効化／無効化を行います。

#### 結果を確認する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_5.gif" style={{width:600, height:'auto'}}/></div>

## Bluetooth アンテナ

このボードは外部 Bluetooth アンテナを使用します。より良い Bluetooth 信号品質を確保し、Bluetooth の使用体験を向上させるため、Bluetooth アンテナを取り付けることを推奨します。
接続方法は以下のとおりです：

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_6.gif"
    alt="Bluetooth antenna connection"
    style={{width: 600, height: 'auto'}}
  />
</div>

## バッテリーの使用

XIAO nRF54LM20A は、3.7V リチウムバッテリーを電源入力として使用できます。配線方法については、以下の図を参照してください。

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/6_battry.png"
    alt="Battery wiring"
    style={{width: 600, height: 'auto'}}
  />
</div>

:::caution
はんだ付けの際、正極と負極を短絡させてバッテリーや機器を損傷しないよう十分注意してください。
バッテリーに電力が残っている場合は、絶対に基板上にはんだ付けしないでください。基板を焼損するおそれがあります。通電中に短絡すると大きなリスクを伴うため、アダプタの使用を推奨します。

:::

**バッテリー使用上の注意：**

1. 規格を満たした認定バッテリーを使用してください。
2. バッテリー使用中でも、XIAO はデータケーブルを介してコンピュータデバイスに接続できます。XIAO には保護回路チップが内蔵されており、安全に使用できます。



### バッテリー電圧検出

XIAO nRF54LM20A は、nPM1300-CAA ロードスイッチを用いてバッテリー電力を効率的に測定することを中心とした、バッテリー電圧検出機能を統合しています。本ガイドでは、バッテリー検出のソフトウェア実装 **（特に main.c コード）** を解析し、Zephyr NCS SDK の複雑さを回避しつつ、PlatformIO 環境でこの機能を簡単に展開・利用する方法を説明します。

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/9_battery.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:600, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>バッテリー検出回路図</em></p>
</div>

nPM1300-CAA チップの役割：

nPM1300-CAA は高集積の電源管理 IC（PMIC）であり、TPS22916 の単純なロードスイッチ機能を置き換えます。低消費電力監視のためのバッテリー電圧切り替えを制御するだけでなく、充電、レギュレーション、および電圧・電流・温度による高精度な燃料ゲージ機能を統合し、nRF54LM20A のバッテリー寿命を最大化します。



<div className="github_container" style={{textAlign: 'center'}}>
    <a className="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-battery" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>

:::note
以下のサンプルは PlatformIO と nRF Connect SDK の両方で動作します。PlatformIO ではそのまま使用でき、SDK ではファイルを手動で追加する必要があります。詳しくはこの [リンク](https://wiki.seeedstudio.com/ja/xiao_nrf54l15_sense_getting_started/#battery-powered-board) を参照してください。
:::

## 周辺機能の概要

このボードの周辺回路には IMU とマイクが含まれます。配置位置は以下の図で確認できます：

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/8.IMU_MIC.png"
    alt="IMU and microphone locations"
    style={{width: 400, height: 'auto'}}
  />
</div>

## IMU

XIAO nRF54LM20A には LSM6DS3TR-C IMU が搭載されており、6 軸加速度センサ、ジャイロスコープ、および磁力計をサポートします。

- [XIAO nRF54LM20A IMU の使用方法](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_with_onboard/#imu)

## MIC

XIAO nRF54LM20A には MSM261DGT006 マイクが搭載されており、16 ビットオーディオの取得をサポートします。
- [XIAO nRF54LM20A MIC の使用方法](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_with_onboard/#mic)

## FAQ

### 問題 1：macOS で **Reading CMake configuration** のまま止まる

macOS 上で PlatformIO を使ってプログラムをコンパイルおよびアップロードする際、ネットワークの問題を除外しても、処理が **Reading CMake configuration** の段階で止まってしまうことがあります。これは通常、Python ベースの `arm-none-eabi-gdb-py` ツールが正しく動作しない、macOS との互換性問題が原因です。

**推奨される対処法：** 不具合のある `gdb-py` ファイルをシンボリックリンクに置き換えます。

1. ツールディレクトリに移動します：
   `/Users/mengdu/.platformio/packages/toolchain-gccarmnoneeabi@1.80201.181220/bin/`
2. 元のファイルをバックアップするため、`arm-none-eabi-gdb-py` の名前を `arm-none-eabi-gdb-py.broken.bak` に変更します。
3. `arm-none-eabi-gdb` を指す `arm-none-eabi-gdb-py` という名前の新しいシンボリックリンクを作成します。

### 問題 2：設定ファイルを変更した後のビルドエラー

以前に Zephyr プロジェクト全体をビルドしていて、その後に設定ファイルを変更した場合は、再ビルドおよびアップロードの前にビルドキャッシュをクリーンすることを推奨します。これにより、古いまたは破損したキャッシュファイルが原因のコンパイルエラーを回避できます。

```cpp
pio run -t clean  // Clean command
```

### 問題 3：設定ファイルを変更した後のビルドエラー

一部の USB ケーブルは電源供給のみで、データ転送ができません。USB ケーブルを持っていない場合や、使用している USB ケーブルがデータ転送に対応しているか分からない場合は、[Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html) を確認してください。

## リソース

### Seeed Studio XIAO nRF54LM20A

**ハードウェア設計**
- **📄[データシート]** [Nordic nRF54LM20A Datasheet](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/nRF54LM20A_nRF54LM20B_Datasheet_v1.0.pdf)
- **📄[回路図]** [XIAO nRF54LM20A Schematic](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Schematic.pdf )
- **🗃️[PCB 設計ファイル]** [XIAO nRF54LM20A KiCad Project](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_V1.0_SCH&PCB_260508.zip )
- **🗃️[PCB ライブラリファイル]** 
  - [XIAO シリーズ KiCad フットプリント](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO シリーズ KiCad SCH シンボル](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[ピン配置図]**[XIAO nRF54LM20A ピン配置シート](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Pin_definition.xlsx)

<!-- **Mechanical**
- **🗃️[3D Dimensions]** [XIAO nRF54LM20A Dimension in DXF](1) -->

### Seeed Studio XIAO nRF54LM20A Sense

**ハードウェア設計**
- **📄[データシート]** [Nordic nRF54LM20A データシート](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/nRF54LM20A_nRF54LM20B_Datasheet_v1.0.pdf)
- **📄[回路図]** [XIAO nRF54LM20A Sense 回路図](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Schematic.pdf )
- **🗃️[PCB 設計ファイル]** [XIAO nRF54LM20A KiCad プロジェクト](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_V1.0_SCH&PCB_260508.zip )
- **🗃️[PCB 設計ライブラリ]**
  - [XIAO シリーズ KiCad フットプリント](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO シリーズ KiCad SCH シンボル](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[ピン配置図]**[XIAO nRF54LM20A Sense ピン配置シート](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Pin_definition.xlsx)

<!-- **Mechanical**
- **🗃️[3D Dimensions]** [XIAO nRF54LM20A Sense Dimension in DXF](1) -->


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
