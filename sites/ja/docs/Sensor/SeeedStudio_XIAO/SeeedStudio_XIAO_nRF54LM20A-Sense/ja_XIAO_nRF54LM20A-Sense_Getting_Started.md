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
  author: Zeller
createdAt: '2025-05-13'
updatedAt: '2026-06-17'
url: https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_getting_started/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/get_start_1.jpg" style={{width:600, height:'auto'}}/></div>

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
                  今すぐ入手 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

## はじめに

Seeed Studio XIAO nRF54LM20A Sense は、Nordic Semiconductor 社の nRF54LM20A SoC を中心に構成された、コンパクトで超低消費電力のワイヤレス開発ボードです。128 MHz Arm Cortex-M33 プロセッサ、512 KB RAM、2 MB オンチップ NVM、マルチプロトコル 2.4 GHz ワイヤレス接続、オンボード IMU、デジタルマイク、8MB 外部フラッシュ、IPEX アンテナコネクタ、nPM1300 PMIC を備え、バッテリー駆動の高度な IoT、ウェアラブル、スマートセンシング、エッジ AI アプリケーションに対応します。

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
        Bluetooth LE 6.0 (Channel Sounding を含む)<br/>
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
        Light-Sleep: 約 9.96µA<br/>
        Deep-Sleep (System OFF): 約 4.76µA<br/>
        Deep-Sleep (System OFF, GRTC ウェイクアップ): 約 4.92µA<br/>
        Ship-Mode: 0.33µA
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

  Seeed Studio XIAO nRF54LM20A Sense は、Nordic Semiconductor 社の nRF54LM20A SoC を搭載した、コンパクトで超低消費電力のワイヤレス開発ボードです。128 MHz Arm Cortex-M33 プロセッサ、512 KB RAM、2 MB オンチップ NVM、128 MHz RISC-V コプロセッサ、マルチプロトコル 2.4 GHz ワイヤレス接続、オンボード IMU、デジタルマイク、8MB 外部フラッシュ、IPEX アンテナコネクタ、Nordic nPM1300 PMIC による高効率な電源管理を備えています。Bluetooth LE、Bluetooth Channel Sounding、Bluetooth Mesh、Thread、Zigbee、Matter、最大 4 Mbps の独自 2.4 GHz プロトコルをサポートし、次世代のコネクテッド製品向けに設計されています。オンボードのモーションおよびオーディオセンサーにより、ウェアラブル、スマートセンシング、TinyML、ジェスチャ認識、音声トリガーデバイス、バッテリー駆動 IoT アプリケーションに最適です。

- **超低消費電力効率**

  Nordic nRF54LM20A と nPM1300 PMIC をベースとした XIAO nRF54LM20A Sense は、BAT 電源動作時にわずか 4.76 µA のディープスリープ電流を実測しています。nPM1300 PMIC と 0.33 µA の Ship Mode BAT 電流を組み合わせることで、アクティブなワイヤレス動作時でも、3.7 V の模擬バッテリー入力および TX 出力 +8 dBm 設定で平均電流 3.87 mA を記録し、長寿命バッテリー駆動のセンシングアプリケーション、ウェアラブル、常時接続の IoT デバイスに理想的です。

- **洗練された開発体験**

  Nordic nRF Connect SDK および PlatformIO (Zephyr) をフルサポートしており、効率的な組み込み開発ワークフローを実現します。（注: 現在 Arduino IDE には対応していません）

## ハードウェア概要

<Tabs>
<TabItem value="XIAO nRF54LM20A" label="XIAO nRF54LM20A" default>

### XIAO nRF54LM20A 表面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/XIAO_front.png" style={{width:800, height:'auto'}}/></div>

### XIAO nRF54LM20A 裏面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/XIAO_2.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
<TabItem value="XIAO nRF54LM20A Sense" label="XIAO nRF54LM20A Sense">

### XIAO nRF54LM20A Sense 表面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/4_pin.png" style={{width:800, height:'auto'}}/></div>

### XIAO nRF54LM20A Sense 裏面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/5_pin.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

## **ピンマップ**

| XIAO ピン       | 機能           | チップピン                          | 説明                                                                         |
| :------------: | :------------: | :-------------------------------: | :-------------------------------------------------------------------------- |
| **電源ピン**   |                |                                   |                                                                             |
| VBUS           | VBUS           | -                                 | 5V 電源入力/出力                                                             |
| GND            | GND            | -                                 | グラウンド                                                                   |
| 3V3            | 3V3-OUT        | -                                 | 3.3V 電源出力                                                                |
| BAT+           | BAT+           | -                                 | バッテリー入力 (I²C 経由で nPM1300 により監視)                               |
| BAT-           | BAT-           | -                                 | バッテリーマイナス端子                                                      |
| SHPHLD         | SHPHLD         | -                                 | PMIC Ship/Hibernate モード制御（超低消費電力の出荷状態）                    |
| **システム & 制御ピン** |        |                                   |                                                                             |
| RESET          | RESET          | -                                 | ボードリセット                                                               |
| SWCLK          | SWCLK          | nRF54LM20A SWCLK / SAMD11 SWCLK   | シリアルワイヤクロック（nRF54 および SAMD11 用）                             |
| SWDIO          | SWDIO          | nRF54LM20A SWDIO / SAMD11 SWDIO   | シリアルワイヤデータ（nRF54 および SAMD11 用）                              |
| SAMD11_RESET   | RESET          | SAMD11 RESET                      | SAMD11 コプロセッサリセット                                                 |
| **ユーザー & LED ピン** |            |                                   |                                                                             |
| -              | USER_BUTTON    | P0.09                             | ユーザーボタン入力                                                           |
| -              | RGB-B          | P1.23                             | オンボード RGB LED 青チャンネル                                             |
| -              | RGB-G          | P1.24                             | オンボード RGB LED 緑チャンネル                                             |
| -              | RGB-R          | P1.22                             | オンボード RGB LED 赤チャンネル                                             |
| **アナログ入力 (ADC) ピン** |      |                                   |                                                                             |
| A0             | AIN0           | P1.00                             | アナログ入力 0 / GPIO                                                        |
| A1             | AIN1           | P1.31                             | アナログ入力 1 / GPIO                                                        |
| A2             | AIN2           | P1.30                             | アナログ入力 2 / GPIO                                                        |
| A3             | AIN3           | P1.29                             | アナログ入力 3 / GPIO                                                        |
| A7             | AIN7           | P1.03                             | アナログ入力 7 / GPIO                                                        |
| **I2C ピン**   |                |                                   |                                                                             |
| SDA            | I2C_SDA        | P1.03                             | I2C データライン (IMU および周辺機器)                                       |
| SCL            | I2C_SCL        | P1.07                             | I2C クロックライン (IMU および周辺機器)                                     |
| -              | BAT_SDA        | P1.18                             | バッテリーモニタ用 I2C SDA (nPM1300)                                        |
| -              | BAT_SCL        | P1.17                             | バッテリーモニタ用 I2C SCL (nPM1300)                                        |
| **UART ピン**  |                |                                   |                                                                             |
| TX             | UART_TX        | P1.08                             | UART 送信                                                                    |
| RX             | UART_RX        | P1.09                             | UART 受信                                                                    |
| **SPI ピン**   |                |                                   |                                                                             |
| MOSI           | SPI_MOSI       | P1.06                             | SPI マスタ出力・スレーブ入力                                                |
| MISO           | SPI_MISO       | P1.05                             | SPI マスタ入力・スレーブ出力                                                |
| SCK            | SPI_SCK        | P1.04                             | SPI シリアルクロック                                                         |
| **オンボード周辺ピン** |      |                                   |                                                                             |
| -              | MIC_DAT        | P1.14                             | マイクデータライン                                                           |
| -              | MIC_CLK        | P1.13                             | マイククロックライン                                                         |
| -              | IMU_SDA        | P0.08                             | IMU I2C SDA (オンボード IMU)                                                |
| -              | IMU_SCL        | P0.07                             | IMU I2C SCL (オンボード IMU)                                                |
| -              | IMU_CS         | P3.12                             | IMU チップセレクト                                                           |
| -              | IMU_INT1       | P0.06                             | IMU 割り込み 1                                                               |
| -              | NFC            | P1.02 / P1.01                     | NFC アンテナピン                                                             |
| -              | GRTC           | P0.04 / P0.05                     | 汎用 RTC ピン                                                                |

## PlatformIO でのはじめ方

このセクションでは、RGB LED の多色点滅エフェクトを通して、XIAO nRF54LM20A を素早く使い始める方法を案内します。
以下のハードウェアおよびソフトウェアの準備を完了し、今後の開発に向けて XIAO をセットアップしてください。

### ハードウェアの準備

次のものを用意してください：

- 1 x [Seeed Studio XIAO nRF54LM20A Sense](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html)
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

### VS Code のダウンロード

使用しているシステムに応じて [VS Code](https://code.visualstudio.com/download) をダウンロードしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:800, height:'auto'}}/></div>

### PlatformIO 拡張機能のインストール

VS Code を開き、Extensions をクリックして PlatformIO を検索し、インストールを選択します。インストール完了後、VS Code を再起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:800, height:'auto'}}/></div>

### platform-seeedboards プラットフォームパッケージのインストール

Seeed Studio XIAO シリーズのボードはカスタム PlatformIO プラットフォームを使用しているため、対応するプラットフォームパッケージを手動でインストールする必要があります。

- 新規インストールの場合は、次のコマンドを実行します：

```bash
pio pkg install -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
- 以前に PlatformIO で Seeed Studio XIAO シリーズのボードを使用したことがある場合は、以下のコマンドを実行して更新します：

```bash
pio pkg update -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
:::tip

既存の PlatformIO プロジェクトを使用したい場合は、**platformio.ini** の内容を次のように置き換えてください：

```ini
[env:seeed-xiao-nrf54lm20a]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = zephyr
board = seeed-xiao-nrf54lm20a
```

:::

### 新しいプロジェクトの作成

1. PlatformIO 拡張機能を開き、**Create New Project** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_2.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. プロジェクト名を設定し、開発ボード、フレームワーク、ファイルの保存パスを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_3.png" style={{width:800, height:'auto'}}/></div>
<br/>
3. 作成が完了すると、ワークスペースを開くかどうかのプロンプトが表示されます。[OK] をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_4.png" style={{width:800, height:'auto'}}/></div>
<br/>
4. プロジェクトフォルダに移動します。カスタムパスを指定していない場合、ファイルはデフォルトディレクトリに保存されます。

- Windows のデフォルト：

```bash
<path>: C:\Users\your_name\Documents\PlatformIO\Projects
```

- Mac / Linux のデフォルト：

```bash
<path>: ~/Documents/PlatformIO/Projects
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_5.png" style={{width:800, height:'auto'}}/></div>

### Blink プログラムの追加

このチュートリアルは Zephyr RTOS をベースに開発されています。プロジェクトは次の 3 つのコアファイルで構成されています：

- `main.c`: アプリケーションロジックを含むメインプログラム。
- `app.overlay`: ハードウェア周辺機器の設定を行う Devicetree オーバーレイファイル。
- `prj.conf`: 必要な Zephyr モジュールを有効にするプロジェクト設定ファイル。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_6.png" style={{width:800, height:'auto'}}/></div>

1. **main.c** プログラムを追加する

<details>

<summary>main.c</summary>

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

</details>

2. app.overlay ファイルを追加する

Devicetree オーバーレイファイルは、新しく作成した空のサンプルには存在しません。zephyr ディレクトリの下に追加する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_7.png" style={{width:800, height:'auto'}}/></div>

<details>

<summary>app.overlay</summary>

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

</details>

3. `prj.conf` を編集し、対応する設定を有効にします。

```prj
CONFIG_GPIO=y
CONFIG_PWM=y
CONFIG_SERIAL=n
```

### プログラムのコンパイルと書き込み

以下では、コンパイルと書き込みの 2 つの方法を紹介します。

1. ボタンからのコンパイル & 書き込み

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_8.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. コマンドラインからのコンパイル & 書き込み

```bash
pio run -e seeed-xiao-nrf54lm20a -t upload -v
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_9.png" style={{width:800, height:'auto'}}/></div>

### 結果を確認する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_5.gif" style={{width:800, height:'auto'}}/></div>

## Bluetooth アンテナ

このボードは外付け Bluetooth アンテナを使用します。より良い Bluetooth 信号品質を確保し、Bluetooth の使用体験を向上させるため、Bluetooth アンテナを取り付けることを推奨します。
接続方法は以下のとおりです：

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_6.gif"
    alt="Bluetooth antenna connection"
    style={{width: 800, height: 'auto'}}
  />
</div>

## バッテリーの使用

XIAO nRF54LM20A は、3.7V リチウムバッテリーを電源入力として使用することができます。配線方法については、以下の図を参照してください。

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/6_battry.png"
    alt="Battery wiring"
    style={{width: 600, height: 'auto'}}
  />
</div>

:::caution
はんだ付けの際には、バッテリーや機器を焼損させないよう、正極と負極をショートさせないよう十分注意してください。
バッテリーに電力が残っている場合は、絶対にそのまま基板にはんだ付けしないでください。基板の回路が焼損するおそれがあります。通電中にショートさせることは重大なリスクを伴うため、アダプタの使用を推奨します。

:::

**バッテリー使用上の注意：**

1. 規格を満たした適切なバッテリーを使用してください。
2. バッテリー使用中でも、XIAO はデータケーブルを介してコンピュータ機器に接続できます。XIAO には保護回路チップが内蔵されており、安全にご使用いただけます。



### バッテリー電圧検出

XIAO nRF54LM20A は、nPM1300-CAA ロードスイッチを用いてバッテリー電力を効率的に計測するバッテリー電圧検出機能を統合しています。本ガイドでは、バッテリー検出のソフトウェア実装 **（特に main.c コード）** を中心に解析し、Zephyr NCS SDK の複雑さを回避しつつ、PlatformIO 環境でこの機能を簡単に展開・利用する方法を解説します。

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_10.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:1000, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>バッテリー検出回路図</em></p>
</div>

nPM1300-CAA チップの役割：

nPM1300-CAA は高集積の電源管理 IC（PMIC）であり、TPS22916 の単純なロードスイッチ機能を置き換えるものです。低消費電力でのモニタリングのためにバッテリー電圧の切り替えを制御するだけでなく、充電、レギュレーション、および（電圧・電流・温度による）高精度な燃料計測を統合し、nRF54LM20A のバッテリー寿命を最大化します。



<div className="github_container" style={{textAlign: 'center'}}>
    <a className="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-battery" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>

:::note
以下のサンプルは PlatformIO と nRF Connect SDK の両方で動作します。PlatformIO ではそのまま使用できますが、SDK ではファイルを手動で追加する必要があります。詳しくはこの[リンク](https://wiki.seeedstudio.com/ja/xiao_nrf54l15_sense_getting_started/#バッテリー駆動ボード)を参照してください。
:::

## 周辺回路の概要

このボードの周辺回路には IMU とマイクが含まれます。下図でそれぞれの位置を確認できます。

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/8.IMU_MIC.png"
    alt="IMU and microphone locations"
    style={{width: 400, height: 'auto'}}
  />
</div>

## IMU

XIAO nRF54LM20A Sense には、3 軸加速度センサと 3 軸ジャイロスコープを備えた LSM6DS3TR-C IMU が搭載されています。

- [XIAO nRF54LM20A IMU の使用方法](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_with_onboard/#imu)

## MIC

XIAO nRF54LM20A Sense には、音声取得用の MSM261DGT006 デジタルマイクが搭載されています。
- [XIAO nRF54LM20A MIC の使用方法](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_with_onboard/#mic)

## FAQ

<!-- ### Issue 1: Stuck at **Reading CMake configuration** on macOS

When compiling and uploading programs with PlatformIO on macOS, the process may get stuck at the **Reading CMake configuration** step even after network issues have been ruled out. This is usually caused by a macOS compatibility problem that prevents the Python-based `arm-none-eabi-gdb-py` tool from running correctly.

**Recommended fix:** Replace the faulty `gdb-py` file with a symbolic link.

1. Navigate to the tool directory:
   `/Users/your_name/.platformio/packages/toolchain-gccarmnoneeabi@1.80201.181220/bin/`
2. Back up the original file by renaming `arm-none-eabi-gdb-py` to `arm-none-eabi-gdb-py.broken.bak`.
3. Create a new symbolic link named `arm-none-eabi-gdb-py` that points to `arm-none-eabi-gdb`. -->

1. **設定ファイルを変更した後のビルドエラー**

以前にフル Zephyr プロジェクトをビルドしており、その後に設定ファイルを変更した場合は、再ビルドおよびアップロードの前にビルドキャッシュをクリーンすることを推奨します。これにより、古いまたは破損したキャッシュファイルが原因のコンパイルエラーを回避できます。

```shell
pio run -t clean  // Clean command
```

<!-- ### Issue 3: Build errors after modifying configuration files

Some USB cables can only supply power and cannot transfer data. If you don't have a USB cable or don't know if your USB cable can transmit data, you can check [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html). -->

2. **インストール後に「zsh: command not found: openocd」と表示される**

ターミナルで直接「openocd」と入力した場合、シェルは PATH に含まれるディレクトリのみを検索します。ディレクトリがまだ追加されていないと、コマンドが見つからないというメッセージが表示されます。以下の手順に従って ~/.zshrc に永続的に追加してください。
この解決策は macOS ユーザー専用です。

```shell
echo 'export PATH="$HOME/Library/Application Support/Seeed/OpenOCD/tool-openocd/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
openocd --version
```

3. **過去に Seeed Studio XIAO シリーズボードを複数回ダウンロードしており、現在 Platform プロジェクトのプルダウンが失敗する場合はどうすればよいですか？**

再試行する前にクリーンアップすることを推奨します。PlatformIO のローカルパッケージ配下に重複した古い Seeed プラットフォームフォルダが蓄積されると、ファイル検索パスが過度に長くなり、バージョン競合が発生してプロジェクトの読み込みに失敗します。以下の手順に従って、冗長で混在したソースの Seeed プラットフォームディレクトリをクリーンアップし、PlatformIO によって自動的に取得される公式プラットフォームのみを残すことで、古く誤ったディレクトリによる競合を回避してください。
platform-seeed- および framework-seeed- で始まるすべてのフォルダを削除します。

```shell
rm -rf ~/.platformio/packages/platform-seeed-* ~/.platformio/packages/framework-seeed-*
```

## リソース

### Seeed Studio XIAO nRF54LM20A

**ハードウェア設計**
- **📄[データシート]** [Nordic nRF54LM20A データシート](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/nRF54LM20A_nRF54LM20B_Datasheet_v1.0.pdf)
- **📄[回路図]** [XIAO nRF54LM20A 回路図](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Schematic.pdf )
- **🗃️[PCB 設計ファイル]** [XIAO nRF54LM20A KiCad プロジェクト](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_V1.0_SCH&PCB_260508.zip )
- **🗃️[PCB ライブラリ]** 
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
- **🗃️[PCB ライブラリ]**
  - [XIAO シリーズ KiCad フットプリント](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [XIAO シリーズ KiCad SCH シンボル](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[ピン配置図]**[XIAO nRF54LM20A Sense ピン配置シート](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Pin_definition.xlsx)

<!-- **Mechanical**
- **🗃️[3D Dimensions]** [XIAO nRF54LM20A Sense Dimension in DXF](1) -->


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルを提供しています。

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
