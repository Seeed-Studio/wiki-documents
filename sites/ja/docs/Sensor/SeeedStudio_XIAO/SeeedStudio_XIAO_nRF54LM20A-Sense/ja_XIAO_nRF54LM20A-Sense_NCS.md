---
title: XIAO nRF54LM20A Sense での NRF Connect SDK
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - ncs
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/Seeed-Studio-XIAO-nRF54LM20A-Sense.webp
slug: /xiao_nrf54lm20a_ncs
sku: 100018440
last_update:
  date: 06/15/2026
  author: Brandy
createdAt: '2025-05-13'
updatedAt: '2026-06-30'
url: https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_ncs/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_first.png" style={{width:600, height:'auto'}}/></div>

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

nRF Connect SDK (NCS) は、Zephyr RTOS リアルタイムオペレーティングシステムの上に構築された、Nordic Semiconductor 公式のソフトウェア開発キットです。nRF シリーズチップ向けに、完全でネイティブかつ高度に最適化された開発フレームワークを提供します。PlatformIO と比較して、NCS は Bluetooth Low Energy (BLE)、Thread、Matter などの無線プロトコルスタックのネイティブサポートに加え、よりきめ細かな電源管理やペリフェラル制御など、nRF54 シリーズのハードウェア機能全体へより広くアクセスできるようにします。Nordic が公式にこの SDK を継続的に保守・更新しており、チップファームウェアとの最適な互換性と、最新機能へのいち早いアクセスを保証します。

このチュートリアルでは、nRF Connect SDK 開発環境のセットアップとツールチェーンのインストールから、最初のプロジェクトの作成と設定、そして最初のサンプルプログラムを XIAO nRF54LM20A Sense に書き込んで実際に動作させるところまで、全工程をステップバイステップで案内します。

## NCS を使い始める

### ハードウェアの準備

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

### VS Code をダウンロード

使用しているシステムに応じて [VS Code](https://code.visualstudio.com/download) をダウンロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:800, height:'auto'}}/></div>

### nRF Connect for VS Code Extension Pack 拡張機能をインストール

1. VS Code を開き、**nRF Connect for VS Code Extension Pack** を検索してインストールします。この拡張機能は、nRF Connect、Kconfig、DeviceTree など、完全なツールチェーンに必要なすべてのサブ拡張機能を自動的にインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. nRF Connect for VS Code Extension Pack は、以下の拡張機能を自動的にインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_2.png" style={{width:800, height:'auto'}}/></div>


### nRF Connect SDK とツールチェーンをインストール

1. nRF Connect 拡張機能を開き、**Install SDK** を選択してから **nRF Connect SDK** を選びます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_4.png" style={{width:800, height:'auto'}}/></div>
<br/>

2. **Pre-packaged SDKs & Toolchains** リストから **v3.3.0** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/NCS/7.png" style={{width:800, height:'auto'}}/></div>
<br/>

:::tip

nRF Connect SDK v3.3.0 では、事前パッケージ版のインストールに SDK コードと対応するツールチェーンの両方が含まれています。ツールチェーンを別途インストールする必要はありません。

nRF Connect SDK はかなり大きく、初回インストールには時間がかかります。インストール中はネットワーク接続を安定させ、失敗を避けてください。

:::

### 環境の検証

インストールが完了すると、nRF Connect SDK の統合環境が自動的にセットアップされます。以降の開発をスムーズに進めるため、この段階で環境を検証することをお勧めします。

1. nRF Connect SDK に内蔵されているターミナル **nRF Terminal** を起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/NCS/2.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. 必要なツールのバージョン情報を確認するためのコマンドを入力します。以下のコマンドを 1 つずつコピーして実行し、検証してください。

```bash
# Check west (project manager & build entry) version
west --version

# Check CMake (build system generator) version
cmake --version

# Check Ninja (build executor) version
ninja --version

# Check Python (scripting runtime for west & Zephyr tools) version
python --version

# Check ARM cross-compiler (Zephyr toolchain for Cortex-M) version
arm-zephyr-eabi-gcc --version

# Check OpenOCD (on-chip debugger & flasher via CMSIS-DAP) version
openocd --version
```

- 出力例を以下に示します。もしコンポーネントが不足している場合は、ツールチェーンを再インストールし、インストール中のネットワークが安定していることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/NCS/3.png" style={{width:800, height:'auto'}}/></div>

### カスタムボードパスを追加

XIAO nRF54LM20A シリーズのボード定義は、まだ公式の NCS リポジトリにマージされていないため、ボードパスを手動で追加する必要があります。

1. 任意のディレクトリに **platform-seeedboards** リポジトリをクローンします。

```bash
git clone https://github.com/Seeed-Studio/platform-seeedboards.git
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_9.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. VS Code 左下の **Settings** を開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_10.png" style={{width:800, height:'auto'}}/></div>
<br/>
3. **nRF Connect** を検索し、**Board Roots** を編集して、パス `~\your_path\platform-seeedboards\zephyr` を追加します。XIAO nRF54LM20A シリーズのボード定義はここに保存されています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_11.png" style={{width:800, height:'auto'}}/></div>

### 新しいアプリケーションを作成

このセクションでは、空のサンプルプロジェクトを変更していきます。

1. 拡張機能内で **Create a blank application** を選択し、テンプレートを複製します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_12.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. プロジェクト名を `blinky` とし、保存パスを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_13.png" style={{width:800, height:'auto'}}/></div>
<br/>
3. 作成が完了したら、コピーされたプロジェクトを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_14.png" style={{width:800, height:'auto'}}/></div>
<br/>

4. 元の設定を削除します。このステップにより、次の段階で XIAO nRF54LM20A に関連する設定を行う際の干渉を取り除きます。（プロジェクトにビルドがない場合は、このステップをスキップして構いません）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_15.png" style={{width:800, height:'auto'}}/></div>

### Blinky プログラムを書く

XIAO nRF54LM20A シリーズはカスタマイズされた devicetree とハードウェアピンマッピングを備えているため、いくつかのファイルを変更する必要があります。編集するファイルは以下のとおりです。

- `main.c`: アプリケーションロジックを含むメインプログラム。
- `app.overlay`: ハードウェアペリフェラル設定用の devicetree オーバーレイファイル。
- `prj.conf`: 必要な Zephyr モジュールを有効にするためのプロジェクト設定ファイル。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_16.png" style={{width:800, height:'auto'}}/></div>
<br/>

1. main.c のコードを修正します

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

2. **xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay** を追加します

- blinky プロジェクトのルートディレクトリに **board** フォルダを作成します。`src` などのフォルダと同じ階層に配置します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_17.png" style={{width:600, height:'auto'}}/></div>
<br/>

- board フォルダ内にデバイスツリー・ファイル **xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay** を作成します。

<details>

<summary>xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay</summary>

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

3. prj.conf ファイルを変更して、対応する設定を有効にします。

```conf
CONFIG_GPIO=y
CONFIG_PWM=y
CONFIG_SERIAL=n
```

1. 拡張機能の APPLICATIONS セクションに移動し、Add build configuration を選択します。SDK とツールチェーンのバージョンを確認します。Board Target を xiao_nrf54lm20a/nrf54lm20a/cpuapp に設定し、ベース設定ファイルを prj.conf に設定します。ページを下までスクロールし、Generate and Build をクリックして対応する設定ファイルを生成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/NCS/4_2.png" style={{width:800, height:'auto'}}/></div>
<br/>

:::tip

ここで `xiao_nrf54lm20a/nrf54lm20a/cpuapp` が見つからない場合は、[Add Custom Board Path](#Add-Custom-Board-Path) セクションでパスが正しく追加されているか確認してください。

:::

2. ビルドが成功すると、ターミナルに次の情報が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/NCS/5.png" style={{width:800, height:'auto'}}/></div>
<br/>

### プログラムの書き込み

このセクションでは、nRF Connect SDK の west ツールを使用してプログラムを書き込みます。

1. XIAO nRF54LM20A Sense を USB-C ケーブルで接続します。nRF Terminal を開き、west コマンドを入力してプログラムを書き込みます。

```bash
west flash
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/NCS/6.png" style={{width:800, height:'auto'}}/></div>
<br/>

:::tip

書き込むファームウェアが **Add build configuration** で最初に作成した設定ファイルから生成されたものであり、`build` や `build_1` など複数の設定フォルダが存在する場合は、設定パスを指定する必要があります。

```bash
# examples: west flash configgration build_1
west flash --build-dir build_1
```

:::

### 結果を確認する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_5.gif" style={{width:600, height:'auto'}}/></div>

## FAQ
SDK のダウンロードに時間がかかりすぎる場合は、比較的高速なダウンロード方法も提供しています。
- ステップ 1: aria2 をインストールします
```
brew install aria2
```

- ステップ 2: ダウンロードディレクトリを作成します
```
mkdir -p /opt/nordic/ncs/downloads
```

- ステップ 3: Toolchain Bundle をダウンロードします
```
aria2c -c -x 16 -s 16 -k 1M --file-allocation=none \
  -d /opt/nordic/ncs/downloads \
  -o ncs-toolchain-aarch64-macos-0c0f19d91c.tar.gz \
  "https://files.nordicsemi.cn/artifactory/NCS/external/bundles/v3/ncs-toolchain-aarch64-macos-0c0f19d91c.tar.gz"
```

- ステップ 4: nRF Connect SDK Bundle をダウンロードします
```
aria2c -c -x 16 -s 16 -k 1M --file-allocation=none \
  -d /opt/nordic/ncs/downloads \
  -o sdk-nrf-bundle-v3.3.0.tar.gz \
  "https://files.nordicsemi.cn/artifactory/ncs-src-mirror/external/sdk-nrf/v3.3.0/src.tar.gz"
```

- ステップ 5: nRF Connect SDK v3.3.0 をインストールします
```
nrfutil sdk-manager install v3.3.0 \
  --sdk-path /opt/nordic/ncs/v3.3.0 \
  --type nrf
```

## 技術サポート & 製品ディスカッション

当社の製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
