---
title: Seeed Studio XIAO nRF54LM20A Sense での NRF Connect SDK の使用
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - ncs
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/Seeed-Studio-XIAO-nRF54LM20A-Sense.webp
slug: /xiao_nrf54lm20a_ncs
sku: 100018440
last_update:
  date: 05/13/2026
  author: Brandy
createdAt: '2025-05-13'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_ncs/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Seeed Studio XIAO nRF54LM20A Sense での nRFConnect SDK の使用

nRF Connect SDK (NCS) は、Zephyr RTOS リアルタイムオペレーティングシステム上に構築された、Nordic Semiconductor 公式のソフトウェア開発キットです。nRF シリーズチップ向けに、完全でネイティブかつ高度に最適化された開発フレームワークを提供します。PlatformIO と比較して、NCS は Bluetooth Low Energy (BLE)、Thread、Matter などの無線プロトコルスタックのネイティブサポートに加え、よりきめ細かな電源管理やペリフェラル制御など、nRF54 シリーズのハードウェア機能全体へより広範なアクセスを開発者に提供します。Nordic が公式にこの SDK を継続的に保守・更新しており、チップファームウェアとの最適な互換性と、最新機能へのいち早いアクセスを保証します。

このチュートリアルでは、nRF Connect SDK 開発環境のセットアップとツールチェーンのインストールから、最初のプロジェクトの作成と設定、そして最初のサンプルプログラムを XIAO nRF54LM20A Sense に書き込んで実際に動作させるところまで、全工程をステップバイステップで案内します。

## ハードウェアの準備

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

## VSCode で nRF Connect SDK を使用する

<details>

<summary>事前に nRF Connect SDK の知識をインストールする</summary>

このドキュメントでは、Windows 11 コンピュータに nRF Connect SDK 開発環境をインストールする方法を詳しく説明します。以下はインストールが必要なツールの概要です。

- VS Studio Code をインストール

  [Visual Studio Code - Code Editing .Redefined](https://code.visualstudio.com/ )

- nRF Command Line Tools
- nRF Connect for Desktop
- Git

- Ninja

```cpp
ninja --version
```

- CMake

```cpp
cmake --version
```

- Zephyr SDK

```cpp
west --version
```

- nRF Connect SDK
- VSCode nRF Connect プラグイン

***すでにコンピュータにインストール済みの場合は、以下のコマンドに従ってツールのバージョン番号を確認できます***

</details>

<Steppers>

### 拡張機能をインストールする

VS Code を開き、プラグインセンターで **nRF Connect for VS Code Extension Pack** を検索します。このプラグインパックは、nRF Connect に必要な他の VS Code プラグインを自動的にインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Learn8.png" style={{width:600, height:'auto'}}/></div>
<br />
nRF Connect for VS Code 拡張機能により、開発者は一般的な Visual Studio Code 統合開発環境 (VS Code IDE) を利用して、Nordic の nRF Connect SDK (Software Development Kit) に基づく組み込みアプリケーションを開発、ビルド、デバッグ、およびデプロイできます。この拡張機能には、コンパイラインターフェース、リンカ、完全なビルドシステム、RTOS 対応デバッガ、nRF Connect SDK とのシームレスなインターフェース、デバイスツリー可視化エディタ、統合シリアルターミナルなどの便利な開発ツールが含まれています。

VS Code 用 nRF Connect 拡張パッケージには、次のコンポーネントが含まれます。

- nRF Connect for VS Code: メイン拡張機能であり、ビルドシステムと nRF Connect SDK 間のインターフェース、および nRF Connect SDK のバージョンとツールチェーンを管理するためのインターフェースを含みます。
- nRF DeviceTree: デバイスツリー言語サポートとデバイスツリー可視化エディタを提供します。
- nRF Kconfig: Kconfig 言語サポートを提供します。
- nRF Terminal: シリアルおよび RTT ターミナル。
- Microsoft C/C++: IntelliSense 機能を含む C/C++ の言語サポートを追加します。
- CMake: CMake 言語サポート。
- GNU Linker Mapping Files: リンカマッピングファイルのサポート。
拡張機能を通じて、任意のバージョンの nRF Connect SDK とそのツールチェーンをダウンロードしてインストールできます。VS Code 用 nRF Connect の完全なドキュメントは https://docs.nordicsemi.com/bundle/nrf-connect-vscode/page/index.html で参照できます。

### ツールチェーンのインストール

ツールチェーンは、アセンブラ、コンパイラ、リンカ、CMake コンポーネントなど、nRF Connect SDK アプリケーションをビルドするために連携して動作するツールの集合です。
VS Code で nRF Connect を初めて開くと、ツールチェーンのインストールを促すメッセージが表示されます。これは通常、拡張機能がコンピュータ上にインストールされたツールチェーンを検出できない場合に発生します。
Install Toolchain をクリックすると、コンピュータにダウンロードしてインストールできるツールチェーンバージョンの一覧が表示されます。使用予定の nRF Connect SDK のバージョンに一致するツールチェーンのバージョンを選択してください。常に最新のタグ付きバージョンの nRF Connect SDK を使用することを推奨します。

デフォルトでは、VS Code 用 nRF Connect はツールチェーンの Released タブ（つまり安定版）だけを表示します。新機能を評価しており、Preview タブや別の種類のタブ（例: Customer Sampling -cs）を使用したい場合は、以下に示すように "Show all toolchain versions" をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_7.png" style={{width:800, height:'auto'}}/></div>

:::note
**ここでの ToolChain は 3.3.0 以上です**
:::

### nRF Connect SDK のインストール

VS Code 用 nRF Connect 拡張機能で、Manage SDK をクリックします。Manage SDK メニューから、nRF Connect SDK バージョンをインストールまたはアンインストールできます。今回が拡張機能を初めて使用する場合、インターフェースには 2 つのオプションのみが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/install_sdk.png" style={{width:800, height:'auto'}}/></div>

Install SDK をクリックすると、ローカルにダウンロードしてインストールできるすべての利用可能な nRF Connect SDK バージョンが一覧表示されます。プロジェクトの開発に必要な nRF Connect SDK のバージョンを選択してください。

:::note
**ここでの nRF Connect SDK は 3.2.4 以上です**
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_8_1.png" style={{width:800, height:'auto'}}/></div>


:::tip
これら 2 つのオプションのいずれも表示されない場合は、nRF Connect for VS Code 拡張パッケージの最新バージョンがインストールされていることを確認してください。
重要な点として、nRF Connect SDK は IDE に依存しないため、任意の IDE を使用することも、まったく使用しないこともできます。nRF Connect SDK は https://www.nordicsemi.com/Products/Development-tools/nRF-Util (nrfutil) コマンドラインインターフェース (CLI) を通じても利用可能であり、これにより nRF Connect をダウンロードしてインストールできます。しかし、私たちは VS Code と組み合わせた nRF Connect for VS Code 拡張機能の使用を強く推奨します。これは、便利なグラフィカルユーザーインターフェース (GUI) と効率的なコマンドラインインターフェース (CLI) を統合しているだけでなく、ファームウェア開発を大幅に簡素化する多くの機能も含んでいるためです。nRF Connect SDK を他の IDE で動作させるには、ここで扱う範囲を超える追加の手動設定が必要になります。
:::

### ユーザープログラムの作成

この演習では、blinky サンプルに基づいたシンプルなアプリケーションを書き、開発ボード上の LED の点滅を制御します。同じ手順は、すべての対応 Nordic Semiconductor 開発ボード（nRF54、nRF53、nRF52、nRF70、nRF91 シリーズ）に適用できます。目的は、サンプルをビルドして書き込むために必要なすべてのツールが正しくセットアップされていることを確認することです。焦点は、「Copy Example」テンプレートを使用してアプリケーションを作成し、ビルドし、Nordic チップ開発ボードに書き込む方法を学ぶことにあります。

- VS Code で nRF Connect 拡張機能アイコンをクリックします。Welcome ビューで、Create New Application をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/create_project1.png" style={{width:800, height:'auto'}}/></div>

- 検索バーに blinky と入力し、下図のように 2 番目の Blinky サンプル（パス zephyr/samples/basic/blinky）を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/create_project2.png" style={{width:800, height:'auto'}}/></div>

Blinky サンプルは、開発ボード上の LED1 を連続的に点滅させます。しかし、私たちの nRF54LM20A には RGB ライトが搭載されているため、以下の手順でいくつかのファイルを変更することで、RGB ライトにさまざまなライティングエフェクトを出させることができます。

最初のアプリケーションは Blinky サンプルをベースにします。Blinky サンプルは nRF Connect SDK 内の Zephyr モジュールブロックから派生しているため、サンプルパスには zephyr\samples\basic\blinky のように zephyr という名前が含まれています。

### XIAO nRF54LM20A ボードを追加する

<div className="github_container" style={{textAlign: 'center'}}>
    <a className="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

開始するには、まず**GitHub リンクからリポジトリをクローン**して、任意のローカルフォルダに保存します。クローンが完了したら、`platform-seeedboards/zephyr/` ディレクトリに移動します。**この `zephyr` フォルダのパスを覚えておいてください**。

```bash
git clone https://github.com/Seeed-Studio/platform-seeedboards.git
```

VS Code で nRF Connect 用にボードを設定するには、次の手順に従います。

- VS Code を開き、Settings に移動します。

- 検索ボックスに nRF Connect と入力します。

- Board Roots 設定項目を見つけ、Edit in settings.json をクリックします。

- ダウンロードした XIAO nRF54LM20A ボードファイルの `zephyr` パスを boardRoots 配列に追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/12ncs_2.PNG" style={{width:800, height:'auto'}}/></div>
<br/>
:::tip
追加するパスの終点は `platform-seeedboards` フォルダのパスではなく、`boards` フォルダのパスであることに注意してください。
:::

- application ビューで、アプリケーション名の下にある Add Build Configuration をクリックします。

- Board target で XIAO nRF54LM20A のモデルを選択し、Base configuration files でデフォルトの prj.config ファイルを選択し、最後に `Generate and Build` をクリックしてファイルをビルドします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/11ncs_1.PNG" style={{width:800, height:'auto'}}/></div>

### バーンイン用プラグインのダウンロード

<Tabs>
<TabItem  value="window" label="Window" default>

**追加プラグイン：**

Windows では、Chocolatey パッケージマネージャーを使用して OpenOCD をインストールします。

**1.PowerShell を開く（管理者として実行）：**

- Windows の検索バーに **PowerShell** と入力します。
- **Windows PowerShell** を右クリックし、**Run as administrator** を選択します。

**2.PowerShell の実行ポリシーを確認：**

- `Get-ExecutionPolicy` と入力して Enter を押します。
- `Get-ExecutionPolicy -List` と入力して Enter を押します。

**3.Chocolatey をインストール：**

- 次のコマンドを貼り付けて実行します：

```cpp
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

このコマンドは、現在の PowerShell セッションの実行ポリシーを一時的にバイパスして Chocolatey をインストールします。インストール後、PowerShell ウィンドウを閉じて再度開き（引き続き管理者として実行）、作業を続けます。

**4.OpenOCD をインストール：**

- 新しい PowerShell ウィンドウ（管理者として）で次を入力します：

```cpp
choco install openocd
```

**5.OpenOCD のインストールを確認：**

- `Get-Command openocd` と入力して Enter を押します。

- インストールが成功していれば、このコマンドによって openocd.exe へのパスが表示されます。

</TabItem>

<TabItem value="mac" label="Mac OS" default>

**追加プラグイン：**

macOS では、Homebrew パッケージマネージャーを使用して必要なツールをインストールします。

**1.Homebrew をインストール（未インストールの場合）：**

- Terminal.app を開きます。

- 次のコマンドを実行します：

```cpp
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- 画面の指示に従います。macOS ユーザーパスワードの入力を求められる場合があります。インストール後、ターミナルに表示される指示に従って Homebrew を PATH 環境変数に追加します（例：`(e.g., eval "$(/opt/homebrew/bin/brew shellenv)")`）。その後、ターミナルを閉じて再度開きます。

**2.Ccache をインストール：**

ターミナルで次を入力します：

```cpp
brew install ccache
```

**3.OpenOCD をインストール：**

ターミナルで次を入力します：

```cpp
brew install openocd
```

**4.OpenOCD のインストールを確認：**

- `which openocd` と入力して Enter を押します。

- インストールが成功していれば、このコマンドによって `openocd` 実行ファイルへのパスが表示されます。

</TabItem>

</Tabs>

### バーンインプログラム

- **src/main.c** と **prj.conf** ファイルを開き、元のコードを次のコードに置き換えます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_1.png" style={{width:800, height:'auto'}}/></div>

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
<summary>prj.conf</summary>
<div>

```prj
CONFIG_GPIO=y
CONFIG_PWM=y
CONFIG_SERIAL=n

```

</div>
</details>

<details>
<summary>board/xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay</summary>
1. デバイスツリーノードの内容を変更または再定義する必要がある場合は、Zephyr ディレクトリ内に新しい **xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay** ファイルを作成し、デバイスノードを明示的にバインドします。
2. デバイスツリーファイルを変更した場合は、再ビルドの前に元のファイルをクリーンアップして、CMake が変更を正しく認識できるようにしてください。
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

- 次に **Open terminal** を開き、`west flash` コマンドを入力します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_2.png" style={{width:800, height:'auto'}}/></div>
<br/>
:::tip
 west flash エラーが発生した場合は、ビルド構成を再度追加する必要があることを意味しますが、その前に誤ったビルドを削除する必要があります。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/error.jpg" style={{width:800, height:'auto'}}/></div>
<br/>
:::

</Steppers>

### コードの説明

- **src/main.c**
LED の色設定、ブリージングエフェクト、点滅リズム制御、ボタンによるモード切り替え、その他のハードウェアとのインタラクション動作など、デモロジックを実装するメインアプリケーションのエントリポイントです。

- **zephyr/prj.conf**
ロギング、UART、PWM、I2C、SPI、低消費電力管理などの機能を含む、システムコンポーネントおよび周辺ドライバの有効化/無効化を行う Zephyr RTOS の設定ファイルです。

### 結果を確認する

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_5.gif" style={{width:600, height:'auto'}}/></div>


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
