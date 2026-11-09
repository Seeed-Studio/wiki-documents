---
title: XIAO STM32C5 入門ガイド
description: ''
keywords:
  - xiao
  - stm32
  - stm32c5
  - can fd
image: https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/Seeed-Studio-XIAO-STM32C5.webp
slug: /xiao_stm32c5_getting_started
sku: 100036669
last_update:
  date: 08/11/2026
  author: Zeller
createdAt: '2026-08-07'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/ja/xiao_stm32c5_getting_started/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:600, height:'auto'}}/></div>

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

## 概要

初の STM32 搭載 XIAO をご紹介します。STM32C5A3CG（144MHz Arm Cortex-M33 コア）を中心に設計された XIAO STM32C5 は、コンパクトな XIAO フォームファクタに CAN FD 接続、16MB の外部 Flash、プログラマブル加熱機能付き 6 軸 IMU を搭載しています。IMU 周囲に配置された専用ヒーター抵抗により、ロボティクスやモーションセンシング向けプロジェクトで、ファームウェア制御によるウォームアップが可能です。2 系統のネイティブ CAN FD コントローラ（うち 1 チャンネルはオンボードの TCAN3403-Q1 トランシーバに接続）により、USB-CAN アダプタ、接続型センサ、ロボット制御プロジェクトの出発点を提供します。USB-C とオンボードのバッテリー充電機能により、デスクトップ開発とポータブルアプリケーションの両方をサポートします。

## 特長

- **初の STM32 搭載 XIAO**: STM32C5A3CG を採用し、144MHz Arm Cortex-M33 プロセッサ、浮動小数点演算サポート、組み込み制御およびセンサ処理向け DSP 命令を備えています。
- **CAN FD 接続を内蔵**: 2 系統のネイティブ CAN FD コントローラを搭載し、1 チャンネルはオンボードの TCAN3403-Q1 トランシーバに接続され、CANH/CANL パッドからアクセスできます。2 つ目のチャンネルを使用するには外部トランシーバを追加します。
- **プログラマブル加熱機能付き 6 軸 IMU**: オンボードの LSM6DS3TR-C 加速度センサおよびジャイロスコープは、センサ周囲の専用ヒーター抵抗と組み合わされています。GPIO 制御のヒーターによりプログラマブルなウォームアップが可能で、温度フィードバック対応ファームウェアと組み合わせることで、ロボティクスやモーションセンシング用途における温度起因ドリフト低減を目的としたクローズドループ温度制御が行えます。
- **16MB 外部 Flash**: アプリケーションデータ、センサログ、設定ファイル、CAN メッセージ記録などをアプリケーションファームウェアから保存できます。
- **通信タイミング用外部クリスタル**: オンボードの高速外部クリスタルが、CAN FD およびその他のタイミングに敏感なアプリケーション向けクロックリファレンスを提供します。
- **USB-C とバッテリー充電**: USB-C 経由で開発することも、オンボードのリチウムバッテリー充電回路とバッテリ接続パッドを用いてバッテリー駆動デバイスを構築することもできます。
- **コンパクトで統合しやすい設計**: XIAO フォームファクタとキャッスレーテッドエッジパッドにより、ヘッダを用いたブレッドボード試作やカスタムキャリアボードへの組み込みをサポートします。

## 仕様

| 項目                       | 仕様                                                                                                                  |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 製品名                     | Seeed Studio XIAO STM32C5                                                                                             |
| マイコン                   | STMicroelectronics STM32C5A3CG                                                                                        |
| CPU                        | シングルコア Arm Cortex-M33、最大 144MHz、FPU および DSP 命令対応                                                    |
| MCU パッケージ             | UFQFPN48                                                                                                              |
| 内蔵プログラム Flash       | 1MB                                                                                                                   |
| SRAM                       | 256KB                                                                                                                 |
| 外部 Flash                 | 16MB                                                                                                                  |
| CAN コントローラ           | ネイティブ CAN FD コントローラ ×2                                                                                    |
| オンボード CAN トランシーバ | TI TCAN3403-Q1 ×1                                                                                                     |
| オンボード CAN バス接続    | CANH/CANL パッド；信号リファレンスとしてボード GND を使用                                                            |
| 第 2 CAN チャンネル        | デジタル TX/RX 信号；外部 CAN トランシーバが必要                                                                      |
| CAN 終端                   | 120Ω、デフォルトで有効；切り取り可能なはんだリンクで切断可能                                                         |
| CAN 絶縁                   | オンボードのガルバニック絶縁なし                                                                                      |
| IMU                        | STMicroelectronics LSM6DS3TR-C、3 軸加速度センサおよび 3 軸ジャイロスコープ                                          |
| IMU 加熱                   | IMU 周囲の専用ヒーター抵抗、GPIO 制御駆動                                                                             |
| 温度制御                   | プログラマブルなウォームアップ；クローズドループの設定温度制御には温度フィードバックと適切なアプリケーションファームウェアが必要 |
| 外部クロック               | オンボード高速外部クリスタル                                                                                         |
| USB                        | USB-C；USB 2.0 Full Speed、12Mbps 信号レート                                                                          |
| ロジックレベル             | 3.3V                                                                                                                  |
| 電源                       | USB-C 5V 入力、または BAT パッド経由の対応リチウムバッテリー                                                          |
| バッテリー充電             | オンボード充電回路                                                                                                    |
| ユーザー操作               | リセットボタンおよびブートボタン                                                                                      |
| インジケータ               | ユーザー LED および充電インジケータ                                                                                  |
| デバッグインターフェース   | SWD                                                                                                                   |
| フォームファクタ           | キャッスレーテッドエッジパッド付きコンパクト XIAO モジュール                                                         |

## ハードウェア概要

<Tabs>
<TabItem value="XIAO STM32C5" label="XIAO STM32C5" default>

### XIAO STM32C5 表面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/XIAO STM32C5_Front_1.png" style={{width:1000, height:'auto'}}/></div>
<br/>
### XIAO STM32C5 裏面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/XIAO STM32C5_Back_1.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
</Tabs>

## **ピンマップ**

| XIAO ピン / 信号 | 機能            | チップピン | 代替機能              | 説明                                                          |
| :---------------: | :-------------: | :-------: | :-----------------: | :----------------------------------------------------------- |
| VBUS              | 電源            |           | USB 5V              | 5V 電源入力/出力                                             |
| GND               | グラウンド      |           |                     | 電源グラウンド                                               |
| 3V3 / 3.3V-OUT    | 電源            |           | VOUT_3V3            | 安定化 3.3V 出力                                             |
| D0                | アナログ        | PA0       | A0, ADC             | GPIO およびアナログ入力                                      |
| D1                | アナログ        | PA1       | A1, ADC             | GPIO およびアナログ入力                                      |
| D2                | アナログ        | PA2       | A2, ADC             | GPIO およびアナログ入力                                      |
| D3                | アナログ        | PA3       | A3, ADC             | GPIO およびアナログ入力                                      |
| D4                | I2C             | PB7       | I2C1_SDA            | GPIO および I2C データ                                       |
| D5                | I2C             | PB6       | I2C1_SCL            | GPIO および I2C クロック                                     |
| D6                | UART            | PA9       | UART_TX             | GPIO および UART 送信                                        |
| D7                | UART            | PA10      | UART_RX             | GPIO および UART 受信                                        |
| D8                | SPI             | PE2       | SPI_SCK             | GPIO および SPI クロック                                     |
| D9                | SPI             | PB0       | SPI_MISO            | GPIO および SPI データ入力                                   |
| D10               | SPI             | PB15      | SPI_MOSI            | GPIO および SPI データ出力                                   |
| D11               | CAN FD          | PB8       | FDCAN1_RX           | GPIO および FDCAN1 受信                                      |
| D12               | CAN FD          | PB9       | FDCAN1_TX           | GPIO および FDCAN1 送信                                      |
| D13               | CAN FD          | PB5       | FDCAN2_RX           | GPIO およびオンボード CAN トランシーバ受信                   |
| D14               | CAN FD          | PB13      | FDCAN2_TX           | GPIO およびオンボード CAN トランシーバ送信                   |
| D15               | CAN 制御        | PB14      | CAN_STB             | オンボード CAN トランシーバのスタンバイモードを制御         |
| CAN_H             | CAN バス        |           | TCAN3403 CANH       | CAN FD 差動バス High                                         |
| CAN_L             | CAN バス        |           | TCAN3403 CANL       | CAN FD 差動バス Low                                          |
| CANFD2_TERM       | CAN 終端        |           | JP1, 120 ohm        | オンボード 120Ω 終端抵抗を無効化するにはカット/オープンする |
| BAT+              | バッテリー電源  |           | VBAT                | 3.7V Li-ion/LiPo バッテリーの正極端子                        |
| BAT-              | バッテリー GND  |           | GND                 | バッテリー負極端子                                           |
| BAT_EN            | バッテリーモニタ | PA15      |                     | バッテリー電圧測定回路を有効化                               |
| BAT_READ          | アナログ        | PA4       | ADC                 | バッテリー電圧を読み取り；ADC 入力はおおよそ VBAT / 2       |
| SWCLK             | デバッグ        | PA14      | SWD Clock           | Serial Wire Debug クロックパッド                             |
| SWDIO             | デバッグ        | PA13      | SWD Data            | Serial Wire Debug データパッド                               |
| RST               | システム        | NRST      | STM32C5_RESET       | ハードウェアリセットテストパッド                             |
| USB_D+            | USB             | PA12      | USB_DP              | USB 2.0 差動データ正                                         |
| USB_D-            | USB             | PA11      | USB_DN              | USB 2.0 差動データ負                                         |
| BOOT              | システム        | PH2-BOOT0 | STM32C5_BOOT        | ブートモードテストパッドおよびブートボタン信号              |
| CHARGE_LED        | インジケータ    |           | Charger NCHG output | 充電 IC により制御される赤色充電ステータス LED              |
| USER_LED          | GPIO インジケータ | PB12    | GPIO25 / User_LED   | 緑色ユーザー LED；アクティブ Low 接続                        |
| IMU_SDA           | オンボード IMU  | PB4       | I2C2_SDA            | オンボード LSM6DS3TR-C IMU 用 I2C データ                     |
| IMU_SCL           | オンボード IMU  | PB3       | I2C2_SCL            | オンボード LSM6DS3TR-C IMU 用 I2C クロック                   |
| IMU_INT           | オンボード IMU  | PC13      | IMU_INT1            | オンボード IMU からの割り込み出力                            |
| IMU_HEATER_PWM    | IMU ヒーター    | PA8       | PWM                 | IMU 温度補償ヒーター用 PWM 制御                              |

## ブートローダーの使用

XIAO STM32C5 には、主にファームウェア更新を目的とした UF2 対応ブートローダーが工場出荷時に書き込まれています。`.uf2` ファイルを書き込む前に、オンボードの Reset ボタンを素早く 2 回押してください。PC 上に **XIAOC5BOOT** という名前のマスストレージドライブがマウントされます。その後、このドライブにファームウェアファイルをコピーすることで書き込みが完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_disk_1.png" style={{width:400, height:'auto'}}/></div>

## PlatformIO を使ったはじめ方

このセクションでは、PlatformIO 開発プラットフォームと Zephyr RTOS フレームワークを使用して、オンボードユーザー LED を点灯させることで XIAO STM32C5 の開発と使用方法を説明します。

### ハードウェアの準備

以下を準備してください：

- 1 x [Seeed Studio XIAO STM32C5](https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html)
- 1 x コンピュータ
- 1 x USB Type-C ケーブル

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO STM32C5</th>
    </tr>
    <tr>
      <td>
       <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div>
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
    </tr>
  </table>
</div>

### ソフトウェアの準備

**Step 1.** VS Code をダウンロードする

使用しているシステムに応じて [VS Code](https://code.visualstudio.com/download) をダウンロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
**Step 2.** PlatformIO 拡張機能をインストールする

VSCode を開き、Extensions をクリックして PlatformIO を検索し、インストールを選択します。インストールが完了したら、VSCode を再起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:800, height:'auto'}}/></div>
<br/>

**Step 3.** platform-seeedboards プラットフォームパッケージをインストールする

Seeed Studio XIAO シリーズボードはカスタム PlatformIO プラットフォームを使用しているため、対応するプラットフォームパッケージを手動でインストールする必要があります。

- 新規インストールの場合は、次のコマンドを実行します：

```bash
pio pkg install -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_1.png" style={{width:800, height:'auto'}}/></div>
<br/>

- 以前に PlatformIO で Seeed Studio XIAO シリーズボードを使用したことがある場合は、以下のコマンドを実行して更新します：


```bash
# for Windows
pio pkg update -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"

# for macOS/Linux
pio pkg uninstall -g -p "SeeedStudio" && pio pkg install -g -p "SeeedStudio=https://github.com/Seeed-Studio/platform-seeedboards.git" --force
```

:::tip

既存の PlatformIO プロジェクトを使用したい場合は、**platformio.ini** の内容を次のように置き換えてください：

```ini
[env:seeed-xiao-stm32c5]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = zephyr
board = seeed-xiao-stm32c5
```

:::

**Step 4.** 新しいプロジェクトを作成する

<details>

<summary>初回の新規プロジェクト作成を高速化する手順（任意）</summary>

このステップでは、最初の新規プロジェクトの作成を高速化するために、XIAO STM32C5 開発に必要なリソースパッケージを事前にダウンロードしておくことができます。

**1. Zephyr フレームワークパッケージをインストールする。**

```bash
pio pkg install --global --tool "framework-zephyr-nrf54lm20=https://dl.registry.platformio.org/download/platformio/tool/framework-zephyr/3.40400.260428/framework-zephyr-3.40400.260428.tar.gz"
```

**2. Zephyr モジュールと STM32 HAL をインストールする。**

お使いのオペレーティングシステム用のコマンドブロックを VS Code のターミナルにコピーします。複数行貼り付けの警告が表示された場合は、改行を保持するために **Paste** をクリックしてください。**Paste as one line** はクリックしないでください。

Windows（PowerShell）の場合：

```powershell
$env:PATH = "$HOME/.platformio/penv/Scripts;$env:PATH"

python "$HOME/.platformio/packages/framework-zephyr-nrf54lm20/scripts/platformio/install-deps.py" `
  --platform ststm32 `
  --secondary-installation
```

macOS/Linux（Bash または Zsh）の場合：

```bash
export PATH="$HOME/.platformio/penv/bin:$PATH"

python "$HOME/.platformio/packages/framework-zephyr-nrf54lm20/scripts/platformio/install-deps.py" \
  --platform ststm32 \
  --secondary-installation
```

:::tip

ダウンロードサイズが大きいため、完了するまでしばらくお待ちいただき、ネットワーク接続を安定させてください。

:::

</details>

- PlatformIO プラグインのインターフェースで、新しいプロジェクトの作成を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_1.png" style={{width:800, height:'auto'}}/></div>

- プロジェクトに名前を付け、ターゲットボードとして **Seeed Studio XIAO STM32C5** を選択し、開発フレームワークとプロジェクトの保存パスを設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_2.png" style={{width:800, height:'auto'}}/></div>

:::tip

初回起動時のプロジェクト作成には時間がかかる場合がありますので、しばらくお待ちください。

:::

### ビルドとアップロード

**Step 1.** LED 点滅プログラムを書く

XIAO STM32C5 には GPIO PB12 に割り当てられたユーザー LED が 1 つ搭載されています。この LED はロジック Low で点灯します。この例では、500ms ごとに点滅するように設定します。

プロジェクトは次の 3 つのコアファイルで構成されます：

- `main.c`: アプリケーションロジックを含むメインプログラム。
- `app.overlay`: ハードウェアペリフェラル設定用の Devicetree オーバーレイファイル。
- `prj.conf`: 必要な Zephyr モジュールを有効にするためのプロジェクト設定ファイル。

以下の手順に従って LED を点灯させます：

- 新しく作成したプロジェクトを開き、`zephyr` フォルダの下に `app.overlay` Devicetree ファイルを作成します。

```overlay
/* USB CDC console and the user LED are configured by the board DTS. */
```

- `zephyr` フォルダ内に `prj.conf` 設定ファイルを作成します。

```conf
# GPIO for LED control
CONFIG_GPIO=y
```

- 下記のリファレンスコードを `main.c` にコピーします。

```c
/*
 * Copyright (c) 2026 Seeed Technology Co., Ltd.
 * SPDX-License-Identifier: Apache-2.0
 *
 * Blinky example for XIAO STM32C5 with TinyUF2 bootloader support.
 * Based on Zephyr samples/basic/blinky.
 *
 * The 1200-bps UF2 bootloader trigger is armed automatically by the
 * board support package — no code changes needed in this example.
 */

#include <zephyr/kernel.h>
#include <zephyr/drivers/gpio.h>

#define SLEEP_TIME_MS 500

#define LED0_NODE DT_ALIAS(led0)

static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);

int main(void)
{
	int ret;
	bool led_state = true;

	if (!gpio_is_ready_dt(&led)) {
		return 0;
	}

	ret = gpio_pin_configure_dt(&led, GPIO_OUTPUT_ACTIVE);
	if (ret < 0) {
		return 0;
	}

	while (1) {
		ret = gpio_pin_toggle_dt(&led);
		if (ret < 0) {
			return 0;
		}

		led_state = !led_state;
		printk("LED state: %s\n", led_state ? "ON" : "OFF");
		k_msleep(SLEEP_TIME_MS);
	}

	return 0;
}
```

**Step 2.** プログラムをビルドしてアップロードする

- 下部ツールバーでワンクリックプロジェクトビルドを実行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_3.png" style={{width:800, height:'auto'}}/></div>

または、コマンドラインインターフェースからビルドを実行することもできます。

```bash
pio run -e seeed-xiao-stm32c5
```

- ファームウェアをアップロードする

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_4.png" style={{width:800, height:'auto'}}/></div>

同様に、ファームウェアのアップロードもコマンドラインから実行できます。

```bash
pio run -e seeed-xiao-stm32c5 -t upload
```

- プログラム実行結果

XIAO STM32C5 のオンボード LED が 500ms 間隔で点滅します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_4_1.gif" style={{width:500, height:'auto'}}/></div>

同時に、シリアルポートには LED のオン／オフ状態が出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_4_2.png" style={{width:600, height:'auto'}}/></div>

## バッテリーの使用

XIAO STM32C5 の裏面には、3.7V〜4.2V のリチウムイオンバッテリーで給電するための **BAT** バッテリーコネクタが用意されています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_5.png" style={{width:600, height:'auto'}}/></div>

### バッテリー電圧の読み取り

XIAO STM32C5 には、バッテリー電圧検出回路とバッテリー充電回路が組み込まれています。

検出回路では、**BAT_EN / PA15** が TPS22916CNYFPR チップを有効にし、**BAT_Reading / PA4** がバッテリー電圧を読み取ります。10kΩ の分圧抵抗が 2 本使用されているため、測定値は実際のリチウムイオンバッテリー電圧の 1/2 になります。

Charge_LED は充電中に点滅し、充電が完了すると消灯します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_6.png" style={{width:550, height:'auto'}}/></div>

- 対応するアプリケーションコードを修正します。

<details>

<summary>app.overlay</summary>

```overlay
/ {
	/* Expose the battery ADC input to the application. */
	zephyr,user {
		io-channels = <&adc1 4>;
	};
};

&adc1 {
	/* Add the battery input on PA4 (ADC1_IN4). */
	pinctrl-0 = <&adc1_in0_pa0 &adc1_in1_pa1 &adc1_in2_pa2
		     &adc1_in3_pa3 &adc1_in4_pa4>;

	channel@4 {
		reg = <4>;
		zephyr,gain = "ADC_GAIN_1";
		zephyr,reference = "ADC_REF_INTERNAL";
		zephyr,acquisition-time = <ADC_ACQ_TIME(ADC_ACQ_TIME_TICKS, 289)>;
		zephyr,resolution = <12>;
	};
};
```

</details>

<details>

<summary>prj.conf</summary>

```overlay
# Battery voltage measurement. USB CDC console support is supplied by the board.
CONFIG_ADC=y
CONFIG_GPIO=y
```

</details>

<details>

<summary>main.c</summary>

```c
/*
 * Copyright (c) 2026 Seeed Technology Co., Ltd.
 * SPDX-License-Identifier: Apache-2.0
 *
 * Read the XIAO STM32C5 battery voltage once per second.
 * printk() output uses USB CDC;
 * BAT_Reading/PA4 is added by app.overlay. BAT_EN/PA15 and USB CDC are
 * supplied by the board devicetree.
 */

#include <zephyr/device.h>
#include <zephyr/drivers/adc.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/kernel.h>
#include <zephyr/sys/printk.h>

#if !DT_NODE_EXISTS(DT_PATH(zephyr_user)) || \
	!DT_NODE_HAS_PROP(DT_PATH(zephyr_user), io_channels)
#error "No battery ADC io-channel specified"
#endif

#define BATTERY_ADC_NODE        DT_PATH(zephyr_user)
#define BAT_EN_NODE             DT_ALIAS(baten)
#define BATTERY_ENABLE_DELAY_MS 5
#define ADC_AVG_SAMPLES         16
#define SAMPLE_PERIOD_MS        1000

static const struct adc_dt_spec battery_adc =
	ADC_DT_SPEC_GET_BY_IDX(BATTERY_ADC_NODE, 0);
static const struct gpio_dt_spec bat_en =
	GPIO_DT_SPEC_GET(BAT_EN_NODE, gpios);

int main(void)
{
	uint16_t raw;
	struct adc_sequence sequence = {
		.buffer = &raw,
		.buffer_size = sizeof(raw),
	};
	int err;

	if (!device_is_ready(battery_adc.dev) || !gpio_is_ready_dt(&bat_en)) {
		printk("Battery ADC hardware is not ready\n");
		return 0;
	}

	err = gpio_pin_configure_dt(&bat_en, GPIO_OUTPUT_ACTIVE);
	if (err) {
		printk("BAT_EN configure failed: %d\n", err);
		return 0;
	}

	k_msleep(BATTERY_ENABLE_DELAY_MS);

	err = adc_channel_setup_dt(&battery_adc);
	if (err) {
		printk("Battery ADC channel setup failed: %d\n", err);
		return 0;
	}

	err = adc_sequence_init_dt(&battery_adc, &sequence);
	if (err) {
		printk("Battery ADC sequence init failed: %d\n", err);
		return 0;
	}

	printk("Battery voltage monitor (USB CDC)\n");

	while (1) {
		uint32_t raw_sum = 0;
		uint16_t raw_avg;
		int32_t adc_mv;

		/* Discard the first conversion after the one-second idle period. */
		err = adc_read(battery_adc.dev, &sequence);
		for (int i = 0; !err && i < ADC_AVG_SAMPLES; i++) {
			err = adc_read(battery_adc.dev, &sequence);
			raw_sum += raw;
		}

		if (!err) {
			raw_avg = raw_sum / ADC_AVG_SAMPLES;
			adc_mv = raw_avg;
			err = adc_raw_to_millivolts_dt(&battery_adc, &adc_mv);
			if (err) {
				printk("Battery voltage conversion failed: %d\n", err);
			} else {
				/* The 1:1 divider halves the battery voltage. */
				printk("Battery: %d mV\n", adc_mv * 2);
			}
		} else {
			printk("Battery ADC read failed: %d\n", err);
		}

		k_msleep(SAMPLE_PERIOD_MS);
	}

	return 0;
}
```

</details>

- 電圧読み取り結果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_6_1.png" style={{width:550, height:'auto'}}/></div>

## IMU

XIAO STM32C5 には、オンボードの **[LSM6DS3TR‑C](https://www.st.com.cn/resource/en/datasheet/lsm6ds3tr-c.pdf) 6 軸慣性センサ** が搭載されており、3 軸加速度センサと 3 軸ジャイロスコープが統合されています。姿勢検出、動作認識、振動監視などの用途に利用できます。

センサのバイアスおよび測定安定性に対する周囲温度変動の影響を軽減するため、ボードには能動温度補償用の加熱回路が実装されています。IMU の周囲に配置されたヒーター抵抗がセンサを均一に加熱し、加熱電力は PWM 信号によって調整できます。IMU 内部の温度読み取りと組み合わせることで、ソフトウェア制御によりセンサを比較的安定した温度で動作させることができます。これにより、温度ドリフトに起因する測定ドリフトが低減され、長時間動作や温度変化のある環境下でもデータの一貫性が向上します。

- 参考用法: [XIAO STM32C5 IMU Usage](https://wiki.seeedstudio.com/ja/xiao_stm32c5_application/#imu-usage)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_7.png" style={{width:550, height:'auto'}}/></div>

## CAN FD

XIAO STM32C5 には 2 つの CAN FD コントローラがあります。FDCAN1 はロジックレベルの TX および RX ピンを外部に出力しており、CAN バスに接続するには外付け CAN トランシーバが必要です。FDCAN2 はオンボードの [TCAN3403-Q1](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/tcan3403-q1.pdf) トランシーバに接続されており、CAN_H および CAN_L パッドを介してバスに接続されます。このボードは Classical CAN フレームの送受信も可能です。ただし、Classical CAN のみ対応のノードは CAN FD フレームをデコードできないため、FD トラフィックを送信する前に、バス上で動作しているノードが CAN FD をサポートしていることを確認してください。CAN FD は最大 64 バイトのペイロードをサポートし、ビットレート切り替えが有効な場合、データフェーズでより高いビットレートを使用できます。

ボードには、オンボードの 120 Ω 終端抵抗が搭載されており、デフォルトで有効になっています。XIAO が CAN バスの物理的な端点にあり、その端点に他の終端抵抗がない場合は有効のままにしてください。XIAO が中間ノードである場合、または同じ端点にすでに別の終端抵抗が取り付けられている場合は無効にしてください。バスの反対側の端点にも適切な終端が施されていることを確認してください。トランシーバは、CAN 通信が不要なときに消費電力を削減するためのスタンバイモードをサポートしています。

- 参考用法: [XIAO STM32C5 CANFD Usage](https://wiki.seeedstudio.com/ja/xiao_stm32c5_canfd_usage/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_2.png" style={{width:550, height:'auto'}}/></div>

## リソース

**ハードウェア設計**
- **📄[データシート]** [STM32C5A3CG](https://www.st.com/resource/en/datasheet/stm32c5a3cg.pdf)
- **📄[データシート]** [LSM6DS3TR-C](https://www.st.com.cn/resource/en/datasheet/lsm6ds3tr-c.pdf)
- **📄[データシート]** [TCAN3403D4BQ1](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/tcan3403-q1.pdf)
- **📄[回路図]** [XIAO STM32C5 Schematic](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/Seeed-Studio-XIAO-STM32C5-v1.0.pdf)
- **🗃️[PCB 設計ファイル]** 
  - [ XIAO STM32C5 KiCad プロジェクト](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/XIAO_STM32C5_v1.0_SCH&PCB.zip)
  - [XIAO STM32C5 Eagle プロジェクト](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/XIAO_STM32C5_v1.0_SCH&PCB.zip)
- **🗃️[PCB 設計ライブラリ]** 
  - [XIAO シリーズ KiCad フットプリント](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip)
  - [XIAO シリーズ KiCad SCH シンボル](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip)
- **📄[ピン配置図]** [XIAO STM32C5 ピン配置シート](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/XIAO-STM32C5-pinout_sheet.xlsx)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
