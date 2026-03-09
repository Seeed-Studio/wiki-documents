---
description: Semtech LR2021 LoRa Plus™ 評価キットの入門ガイド。
title: Semtech LR2021 LoRa Plus™ 評価キット
keywords:
  - Semtech LR2021
  - XIAO
  - nRF54L15
  - docusaurus
slug: /semtech_lr2021_evk_getting_started
last_update:
  date: 12/30/2025
  author: David Du
createdAt: '2026-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/semtech_lr2021_evk_getting_started/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/2-100039980-LR2021-LoRa-Plus-Evaluation-kit-868Mhz-EU-V2.0.jpg" style={{width:600, height:'auto'}}/></div>

## 特徴

**Semtech LR2021 LoRa Plus 評価キット**は、強力な**Seeed Studio XIAO nRF54L15 コアボード**と**LoRa Plus 拡張ボード**をシームレスに統合するモジュラー設計を特徴としています。このコンパクトで堅牢なハードウェアプラットフォームは、地上から衛星への全シナリオ通信の評価に特化して設計されています。多数の主流IoTプロトコルとの互換性により、多様なアプリケーションシナリオでの開発要件を満たすことが保証されています。

### Semtech LR2021 トランシーバー

- **ユニバーサル接続（マルチバンドサポート）：**
    - **Sub-GHz LoRa/FSK：** 従来の470/868/915 MHz LoRaWANネットワークと完全に互換性があり、極めて長距離の伝送と浸透能力を維持します。
    - **2.4GHz LoRa：** グローバルISMバンドLoRa変調をサポートします。これにより、異なる国間の規制の断片化を解決し（「グローバルワンSKU」を実現）、Sub-GHzよりも高いデータレートを提供します。
    - **Sバンド衛星サポート：** 大幅なアップグレードです。LR2021は**1.9GHz - 2.5GHz**バンドのネイティブサポートを特徴とし、低軌道（LEO）衛星との直接通信を可能にして、地上ネットワークが到達できない海洋、砂漠、遠隔地域のカバレッジギャップを埋めます。

- **強化されたLR-FHSSサポート：** 
チップには**Long Range - Frequency Hopping Spread Spectrum（LR-FHSS）**のハードウェアサポートが内蔵されています。この変調技術により、ネットワーク容量と干渉耐性が大幅に向上し、**Direct-to-Satellite IoT**の重要な技術として機能します。

- **複数変調サポート：**
LoRa、LR-FHSS、FLRC、FSK/GFSK、OQPSK、OOK、BLE 5.0 PHY

- **複数プロトコル互換：**
LoRaWAN（Sub-GHz、2.4 GHz）、Amazon Sidewalk、Wi-SUN、Wireless M-Bus、Z-Wave、BLE、IEEE 802.15.4（Thread、Zigbee）

- **超低消費電力アーキテクチャ：** 
マルチバンドRFフロントエンドを統合しているにもかかわらず、LR2021はSemtechの業界をリードする低消費電力基準を維持しています： 
    - 105mA @ +22dBm 送信電力
    - 5.7mA 受信電流
    - 470nA スリープ電流

バッテリー駆動の長寿命アセット追跡デバイスに最適です。

- **強化されたチャネルアクティビティ検出（CAD）：**
LR2021のFast CADは、インテリジェントな適応しきい値と早期終了メカニズムを採用し、アイドルチャネル検出に必要な消費電力と時間を大幅に削減します。


### LoRa Plus 拡張ボードの特徴

#### デュアルアンテナインターフェース設計
- **LFポート（SMA）：** Sub-GHzバンド（150MHz - 960MHz）専用。
- **HFポート（SMA）：** 2.4GHz ISMおよびSバンド衛星周波数専用。

#### ホストコア：XIAO nRF54L15
- **次世代シリコン：** 
Nordic Semiconductorの最新**nRF54 シリーズ**（nRF54L15）を搭載。
- **高性能処理：** 
最大**128 MHz**で動作するARM Cortex-M33コアを特徴とし、複雑なLoRaWANプロトコルスタックとエッジAIアルゴリズムに十分な計算能力を提供します。
- **次世代効率：** 
nRF52 シリーズと比較して、nRF54は電力効率の飛躍的向上を実現します。LR2021と組み合わせることで、優れたバッテリー寿命を持つ端末製品の構築が可能になります。
- **コンパクトフォームファクター：** 
クラシックなXIAOスタンプホール設計を採用し、より小さなプロトタイプエンクロージャーへの統合を容易にします。

## 仕様

<table class="tg">
<thead>
<tr>
<th class="tg-6cwf">パラメータ</th><th class="tg-6cwf">仕様</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">寸法</td>
<td class="tg-g9rn">拡張ボード：65(W)x73(L)x27(H)mm  パッケージ：200x130x50mm</td>
</tr>
<tr>
<td class="tg-g9rn">電圧 - 供給</td>
<td class="tg-g9rn">5V（USB Type C）</td>
</tr>
<tr>
<td class="tg-g9rn">電圧 - 出力</td>
<td class="tg-g9rn">3.3V / 5V</td>
</tr>
<tr>
<td class="tg-g9rn">最大動作電流（送信機）</td>
<td class="tg-g9rn">Sub-GHz：105mA @ +22dBm<br />2.4 GHz：27mA @ +14dBm</td>
</tr>
<tr>
<td class="tg-g9rn">最大動作電流（受信機）</td>
<td class="tg-g9rn">LoRa SF7 @ 125KHz：5.7mA<br />FLRC：10.9mA</td>
</tr>
<tr>
<td class="tg-g9rn">周波数プラン</td>
<td class="tg-g9rn">EU868 / US915 / CN490</td>
</tr>
<tr>
<td class="tg-g9rn">出力電力</td>
<td class="tg-g9rn">Sub-GHz：+22dBmから-10dBm<br />2.4 GHz：+12dBm</td>
</tr>
<tr>
<td class="tg-g9rn">受信感度</td>
<td class="tg-g9rn">LoRa SF12 @ 125kHz：-141.5dBm<br />FLRC @ 260kbps：-111dBm<br />BLE @ 2Mbps：-97dBm</td>
</tr>
<tr>
<td class="tg-g9rn">インターフェース</td>
<td class="tg-g9rn">USB Type C / Grovex3（IICx2 / UARTx1） / SMA-Kx2 </td>
</tr>
<tr>
<td class="tg-g9rn">変調</td>
<td class="tg-g9rn">LoRa、（G）FSK、LR-FHSS、FLRC、OQPSK、OOK、BLE 5.0 PHY</td>
</tr>
<tr>
<td class="tg-g9rn">動作温度</td>
<td class="tg-g9rn">-40℃ ~ 85℃</td>
</tr>
</tbody>
</table>

<br />

## ハードウェア概要



### 図



### ピン配置

**拡張ボード：**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/100039980-LR2021-LoRa-Plus-Evaluation-kit-868Mhz-EU-V2.0-Pinout-Front.jpg" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/100039980-LR2021-LoRa-Plus-Evaluation-kit-868Mhz-EU-V2.0-Pinout-Back.jpg" style={{width:600, height:'auto'}}/></div>

<br />

**XIAO nRF54L15：**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nr_definition.png" style={{width:600, height:'auto'}}/></div>

<br />

**ピン配置マッピング：**

<table class="tg">
<thead>
<tr>
<th class="tg-6cwf">XIAOピン定義</th><th class="tg-6cwf">nRF54L15ピン定義</th><th class="tg-6cwf">ピン機能</th><th class="tg-6cwf">DeviceTreeインデックス</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">A0 / D0</td>
<td class="tg-g9rn">P1.04</td>
<td class="tg-g9rn">デジタルIO</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">A1 / D1</td>
<td class="tg-g9rn">P1.05</td>
<td class="tg-g9rn">デジタルIO</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">A2 / D2</td>
<td class="tg-g9rn">P1.06</td>
<td class="tg-g9rn">デジタルIO</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">A3 / D3</td>
<td class="tg-g9rn">P1.07</td>
<td class="tg-g9rn">デジタルIO</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">SDA0 / D4</td>
<td class="tg-g9rn">P1.10</td>
<td class="tg-g9rn">I2C</td>
<td class="tg-g9rn" rowspan="2">i2c22</td>
</tr>
<tr>
<td class="tg-g9rn">SCL0 / D5</td>
<td class="tg-g9rn">P1.11</td>
<td class="tg-g9rn">I2C</td>
</tr>
<tr>
<td class="tg-g9rn">TX / D6</td>
<td class="tg-g9rn">P2.08</td>
<td class="tg-g9rn">UART</td>
<td class="tg-g9rn" rowspan="2">uart21</td>
</tr>
<tr>
<td class="tg-g9rn">RX / D7</td>
<td class="tg-g9rn">P2.07</td>
<td class="tg-g9rn">UART</td>
</tr>
<tr>
<td class="tg-g9rn">SCK / D8</td>
<td class="tg-g9rn">P2.01</td>
<td class="tg-g9rn">SPI</td>
<td class="tg-g9rn" rowspan="3">spi00</td>
</tr>
<tr>
<td class="tg-g9rn">MISO / D9</td>
<td class="tg-g9rn">P2.04</td>
<td class="tg-g9rn">SPI</td>
</tr>
<tr>
<td class="tg-g9rn">MOSI / D10</td>
<td class="tg-g9rn">P2.02</td>
<td class="tg-g9rn">SPI</td>
</tr>
<tr>
<td class="tg-g9rn">SCL1 / D11</td>
<td class="tg-g9rn">P0.03</td>
<td class="tg-g9rn">I2C</td>
<td class="tg-g9rn" rowspan="2">i2c30</td>
</tr>
<tr>
<td class="tg-g9rn">SDA1 / D12</td>
<td class="tg-g9rn">P0.04</td>
<td class="tg-g9rn">I2C</td>
</tr>
<tr>
<td class="tg-g9rn">D13</td>
<td class="tg-g9rn">P2.10</td>
<td class="tg-g9rn">デジタルIO</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">D14</td>
<td class="tg-g9rn">P2.09</td>
<td class="tg-g9rn">デジタルIO</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">D15</td>
<td class="tg-g9rn">P2.06</td>
<td class="tg-g9rn">デジタルIO</td>
<td class="tg-g9rn"></td>
</tr>
</tbody>
</table>



<br />

## 入門ガイド

### 1. 概要
このガイドでは、オンボードの**XIAO-nRF54L15**で提供されるサンプルを使用して迅速な評価を行うために、Semtechの`usp_zephyr`モジュールと統合されたコマンドラインZephyr RTOS開発環境をセットアップするためのステップバイステップの手順を提供します。SemtechのLoRa [USP™（Unified Software Platform）](https://www.semtech.com/products/wireless-rf/unified-software-platform)について詳しく学んでください。また、ソースコードをダウンロードし、Semtech **usp_zephyr**リポジトリでより詳細な情報を見つけることもできます：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Lora-net/usp_zephyr" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>GitHubからダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

`usp_zephyr`プロジェクトは、以下を組み合わせたハイブリッド構造に従います：

- **West ワークスペースモジュール構造：** コアハードウェアサポート（ボード、ドライバー、HAL）は、標準モジュールとしてZephyrビルドシステムに直接統合されます。

- **階層構造:** アプリケーション層のライブラリと例は、より良い組織化と再利用のためにワークスペース内で別々に配置されています。

### 2. 前提条件

続行する前に、システムがこれらの要件を満たしていることを確認してください。Zephyr開発環境のセットアップについて[詳しく](https://docs.zephyrproject.org/latest/develop/getting_started/index.html)学んでください：

- **オペレーティングシステム:** 
    - Ubuntu 22.04 LTS（推奨）または他のサポートされているLinuxディストリビューション、Windows（10以降）、またはmacOS。

- **主要な依存関係:**

    - `west`（Zephyrのメタツール）

    - `ninja`

    - `cmake`（バージョン3.20.0以上）

    - Python 3.8以上と`pip`

    - デバイスツリーコンパイラ`dtc`


<details>
<summary>依存関係のインストールと確認</summary>

- Linux用：
```shell
sudo apt install --no-install-recommends git cmake ninja-build gperf \
  ccache dfu-util device-tree-compiler wget python3-dev python3-venv python3-tk \
  xz-utils file make gcc gcc-multilib g++-multilib libsdl2-dev libmagic1
```
AArch64（ARM64）システムでは`gcc-multilib`と`g++-multilib`が利用できないため、インストールするパッケージのリストからそれらを省略する必要がある場合があります。

- macOS用：
`brew`を使用して必要な依存関係をインストールします：
```shell
brew install cmake ninja gperf python3 python-tk ccache qemu dtc libmagic wget openocd
```

- Windows用：
ここでは事前にインストールされているWindowsパッケージマネージャー`winget`を使用します。これが選択肢でない場合は、それぞれのウェブサイトから依存関係をインストールし、環境変数を`PATH`に追加することもできます。

`winget`を使用して必要な依存関係をインストールします：
```shell
winget install Kitware.CMake Ninja-build.Ninja oss-winget.gperf Python.Python.3.12 Git.Git oss-winget.dtc wget 7zip.7zip
```

<br />

システムにインストールされている主要な依存関係のバージョンを確認できます：

```shell
cmake --version
```

```shell
python3 --version
```

```shell
ninja --version
```

</details>


### 3. Zephyrワークスペースのセットアップ（スタンドアロンワークスペース）

基本的なZephyrワークスペースを作成します：
```shell
# Create and navigate into your workspace directory
mkdir ~/zephyr_workspace && cd ~/zephyr_workspace
```

:::note
Python環境の競合を避けるため、開発とテスト用に仮想環境を作成して使用することを強く推奨します。作業を開始するたびに仮想環境をアクティブ化することを忘れないでください。
:::


<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Linux" label="Linux">

新しい仮想環境を作成します：
```shell
python3 -m venv ~/zephyr_workspace/.venv
```

仮想環境をアクティブ化します：
```shell
source ~/zephyr_workspace/.venv/bin/activate
```

アクティブ化されると、シェルに`(.venv)`のプレフィックスが付きます。仮想環境は`deactivate`を実行することでいつでも非アクティブ化できます。

```shell
# 1. Install west
pip3 install west

# 2. Navigate into your workspace directory
cd ~/zephyr_workspace

# 3. Clone the usp_zephyr repository from GitHub
git clone https://github.com/Lora-net/usp_zephyr.git

# 4. Initialize the workspace with the loacal manifest repository
west init -l usp_zephyr

# 5. Update/fetch all Zephyr modules and dependencies
west update

# 6. Install Python dependencies
west packages pip --install
```

次に、Zephyrでサポートされているすべてのアーキテクチャ用のツールチェーンを含むZephyr Software Development Kit（SDK）をインストールする必要があります。SDKには、Zephyrアプリケーションをビルドするために必要なコンパイラ、アセンブラ、リンカ、その他のプログラムが含まれています：
```shell
cd ~/zephyr_workspace/zephyr
west sdk install
```

</TabItem>
<TabItem value="macOS" label="macOS">

新しい仮想環境を作成します：
```shell
python3 -m venv ~/zephyr_workspace/.venv
```

仮想環境をアクティブ化します：
```shell
source ~/zephyr_workspace/.venv/bin/activate
```

アクティブ化されると、シェルに`(.venv)`のプレフィックスが付きます。仮想環境は`deactivate`を実行することでいつでも非アクティブ化できます。

```shell
# 1. Install west
pip3 install west

# 2. Navigate into your workspace directory
cd ~/zephyr_workspace

# 3. Clone the usp_zephyr repository from GitHub
git clone https://github.com/Lora-net/usp_zephyr.git

# 4. Initialize the workspace with the loacal manifest repository
west init -l usp_zephyr

# 5. Update/fetch all Zephyr modules and dependencies
west update

# 6. Install Python dependencies
west packages pip --install
```

次に、Zephyrでサポートされているすべてのアーキテクチャ用のツールチェーンを含むZephyr Software Development Kit（SDK）をインストールする必要があります。SDKには、Zephyrアプリケーションをビルドするために必要なコンパイラ、アセンブラ、リンカ、その他のプログラムが含まれています：
```shell
cd ~/zephyr_workspace/zephyr
west sdk install
```

</TabItem>
<TabItem value="Windows" label="Windows">

通常のユーザーとして`cmd.exe`を開き、新しい仮想環境を作成します：
```shell
cd %HOMEPATH%
python -m venv zephyr_workspace\.venv
```

仮想環境をアクティブ化します：
```shell
zephyr_workspace\.venv\Scripts\activate.bat
```

アクティブ化されると、シェルに`(.venv)`のプレフィックスが付きます。仮想環境は`deactivate`を実行することでいつでも非アクティブ化できます。

```shell
# 1. Install west
pip3 install west

# 2. Navigate into your workspace directory
cd ~/zephyr_workspace

# 3. Clone the usp_zephyr repository from GitHub
git clone https://github.com/Lora-net/usp_zephyr.git

# 4. Initialize the workspace with the loacal manifest repository
west init -l usp_zephyr

# 5. Update/fetch all Zephyr modules and dependencies
west update

# 6. Install Python dependencies
cmd /c scripts\utils\west-packages-pip-install.cmd
```

次に、Zephyrでサポートされているすべてのアーキテクチャ用のツールチェーンを含むZephyr [Software Development Kit（SDK）](https://docs.zephyrproject.org/latest/develop/toolchains/zephyr_sdk.html#toolchain-zephyr-sdk)をインストールする必要があります。SDKには、Zephyrアプリケーションをビルドするために必要なコンパイラ、アセンブラ、リンカ、その他のプログラムが含まれています：
```shell
cd %HOMEPATH%\zephyr_workspace\zephyr
west sdk install
```

</TabItem>
</Tabs>


<br />

`west`ツールがすべてのモジュールとコンポーネントの取得とインストールを完了するまでお待ちください。インストールが完了すると、以下の`zephyr_workspace`ディレクトリ構造が得られます：

```shell
zephyr_workspace/
├── bootloader/
├── modules/
├── tools/
├── usp_zephyr/
│       ├── boards/
│       │     ├── seeed/xiao_nrf54l15/
│       │     └── shields/
│       ├── doc/
│       ├── drivers/
│       │     └── usp/
│       │          ├── lr11xx/
│       │          ├── lr20xx/
│       │          └── sx126x/
│       ├── dts/bindings/
│       ├── include/zephyr/
│       ├── modules/
│       │     ├── lora_basics_modem/
│       │     ├── smtc_modem_hal/
│       │     ├── usp/
│       │     └── usp_drivers/
│       ├── samples/
│       │     └── usp/
│       │          ├── lbm/
│       │          ├── rac/
│       │          └── sdk/
│       ├── subsys/
│       └── zephyr/
│             └─ module.yml
└── zephyr
```

<br />

**Zephyrプロジェクト構造のUSP:**

<table class="tg">
<thead>
<tr>
<th class="tg-6cwf">ディレクトリパス</th><th class="tg-6cwf">説明</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">boards/</td>
<td class="tg-g9rn">**ボードサポート** ハードウェアプラットフォームの定義を含む：<br />- `seeed/xiao_nrf54l15/`：Seeed Studio XIAO nRF54L15ボードのサポート<br />- `shields/`：LoRaラジオドライバと互換性のあるZephyrシールド（アドオンボード）の定義</td>
</tr>
<tr>
<td class="tg-g9rn">drivers/usp/</td>
<td class="tg-g9rn">**デバイスドライバ** Semtechラジオ用のコアハードウェア抽象化レイヤー：<br />- `lr11xx/`、`lr20xx/`、`sx126x/`：特定のSemtech LoRaトランシーバチップ用のRadio HAL & BSP実装を含む。
ユーザーはこれらのファイルを変更すべきではありません。</td>
</tr>
<tr>
<td class="tg-g9rn">dts/bindings/</td>
<td class="tg-g9rn">**デバイスツリーバインディング** ZephyrデバイスツリーファイルでLoRaラジオハードウェア（SPI接続、制御ピン）を記述する方法を定義するYAMLファイルを含む。これによりハードウェア記述がドライバにリンクされます。</td>
</tr>
<tr>
<td class="tg-g9rn">include/zephyr/</td>
<td class="tg-g9rn">**パブリックAPIヘッダー** パブリックドライバAPI（`drivers/usp/lr20xx.h`）をZephyrアプリケーションコードの他の部分に公開します。</td>
</tr>
<tr>
<td class="tg-g9rn">modules/</td>
<td class="tg-g9rn">**Semtechライブラリ & HAL** <br />- `lora_basics_modem/`：Semtech LoRa Basics Modemソフトウェアライブラリ。<br />- `smtc_modem_hal/`：モデム用ハードウェア抽象化レイヤー（HAL）。<br />- `usp/` & `usp_drivers/`：Zephyrモジュール内の対応するコンポーネントを指すコンパイルファイルをガイドします。</td>
</tr>
<tr>
<td class="tg-g9rn">samples/usp/</td>
<td class="tg-g9rn">**サンプルアプリケーション** 主要機能を実演するビルド可能なサンプルコード。<br />- `lbm/`：Lora Basics Modem用のサンプル。<br />- `rac/`：Radio Abstraction Controller用のサンプル。<br />- `sdk/`：汎用SDKサンプル</td>
</tr>
<tr>
<td class="tg-g9rn">subsys/</td>
<td class="tg-g9rn">**サブシステム統合** </td>
</tr>
<tr>
<td class="tg-g9rn">zephyr/module.yml</td>
<td class="tg-g9rn">**モジュールマニフェスト** この`usp_zephyr/`ディレクトリ全体をZephyrモジュールとして宣言するYAMLファイル。`west`ツールはこれを使用してモジュールの`boards`、`drivers`を見つけてビルドに統合します。</td>
</tr>
</tbody>
</table>

<br />

### 4. ビルドと実行

Semtechは評価キットと共に迅速な評価のためのいくつかのサンプルを提供しています。すべてのサンプルは`samples/usp`ディレクトリにあり、定義されたサポートされているボード/シールドを使用してこれらのサンプルをビルドおよびフラッシュできます。新世代LR2021のコア機能を実演する`LBM`サンプルから始めます。

```shell
usp_zephyr/samples/
└── usp/
     ├── lbm/
     │    ├── geolocation
     │    ├── lctt_certif
     │    ├── periodical_uplink
     │    └── porting_tests     
     ├── rac/
     └── sdk/
```

<br />

:::note
**LoRa Basics Modem (LBM):**

LoRa Basics Modem は、Semtech によって設計されたユーザーフレンドリーなソフトウェアライブラリで、ISM Sub-GHz および 2.4GHz 帯域の両方で動作する LoRaWAN® エンドノードの開発を合理化し、世界的な相互運用性を確保します。開発者に高レベルなイベント駆動型インターフェースを提供し、[TS001-LoRaWAN L2 1.0.4](https://resources.lora-alliance.org/technical-specifications/ts001-1-0-4-lorawan-l2-1-0-4-specification) 仕様および Regional Parameters [RP2-1.0.3](https://resources.lora-alliance.org/technical-specifications/rp2-1-0-3-lorawan-regional-parameters) 標準への完全な準拠を維持しながら複雑さを抽象化します。

[LoRa Basics Modem](https://www.semtech.com/products/wireless-rf/lora-basics-modem) について詳しくはこちらをご覧ください。
:::

<br />

#### 4.1. LoRaWAN 定期アップリンク

このアプリケーションは、LoRa Basics Modem (LBM) スタックを使用して LoRaWAN デバイスをセットアップし、実行する方法を実演します。`定期的な自動アップリンク`、`手動ボタントリガーアップリンク`、および`ダウンリンク受信`をサポートし、基本的な LoRaWAN 機能検証のための理想的なプロトタイプとなります。

**主な機能**
- **LoRaWAN ネットワーク参加:** **OTAA** (Over-The-Air Activation) ネットワーク参加のみをサポート。
- **定期アップリンク:** デフォルトで 60 秒ごとに `FPort 101` で設定可能な自動アップリンク。
- **ボタントリガーアップリンク:** `FPort 102` でボタン押下によってトリガーされる手動アップリンク送信。
- **ダウンリンク受信:** ダウンリンクメッセージの受信と処理。
- **複数の LoRaWAN 地域:** EU868、US915、CN470 を含む複数の地域をサポート。
- **リレー TX サポート:** オプションの LoRaWAN リレー送信機能。
- **低電力モード:** オプションの電力最適化設定が利用可能。

**前提条件**

- **LoRaWAN ネットワーク**アカウント（The Things Network、ChirpStack など）
- 有効な LoRaWAN **認証情報**: `DevEUI`、`JoinEUI`、`AppKey`
- 範囲内の互換性のある **LoRaWAN ゲートウェイ**

**LoRaWAN 認証情報の設定**

:::note
ここでは The Thing Network を例として使用します。必要に応じて、お好みの LNS を選択できます。
:::

- **ステップ 1.** [The Things Network](https://www.thethingsnetwork.org) ウェブサイトにアクセスし、新しいアカウントにサインアップします。

- **ステップ 2.** ログイン後、プロフィールをクリックし、**Console** を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 3.** クラスターを選択して、ゲートウェイとデバイスの追加を開始します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_cluster.png" style={{width:600, height:'auto'}}/></div>

<br />

:::note
サイトでの LoRaWAN カバレッジネットワークの迅速な展開については、すぐに使える [SenseCAP M2 マルチプラットフォーム LoRaWAN 屋内ゲートウェイ](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html) をご確認ください。
:::

- **ステップ 4.** パネルの **Applications** をクリックし、**Add application** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_add_application.png" style={{width:600, height:'auto'}}/></div>

- **ステップ 5.** **Application ID** を入力し、**Create application** をクリックします。

- **ステップ 6.** 作成したアプリケーションをクリックし、パネルの **End devices** を選択し、**Register end device** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_add_device.png" style={{width:600, height:'auto'}}/></div>

- **ステップ 7.** **Manually** を選択して、登録認証情報を手動で入力します。

- **ステップ 8.** 地域に応じて **Frequency plan** を選択します。また、このデバイスを接続するゲートウェイと同じ周波数を使用することを確認してください。**LoRaWAN version** として **LoRaWAN Specification 1.0.4** を選択し、**Regional Parameters version** として **RP002 Regional Parameters 1.0.3** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_register_device_1.png" style={{width:500, height:'auto'}}/></div>

- **ステップ 9.** 必要に応じて **JoinEUI**、**DevEUI**、**AppKey** を設定します。これらの認証情報は、エンドデバイス設定でさらに使用されます。登録デバイスの **End device ID** を選択し、**Register end device** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_register_device_2.png" style={{width:500, height:'auto'}}/></div>

- **ステップ 10.** ファイル `boards/user_keys.overlay` を編集し、プレースホルダー値を実際の認証情報に置き換えます：

```dts
/ {
    zephyr,user {
        user-lorawan-device-eui = <0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00>;
        user-lorawan-join-eui = <0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00>;
        user-lorawan-gen_app-key = <0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
                                   0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00>;
        user-lorawan-app-key = <0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
                               0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00>;
        user-lorawan-region = "EU_868";
    };
};
```

サポートされているリストから適切な地域コードを選択し、`user_keys.overlay` の `user-lorawan-region` を更新します：

<table class="tg">
<thead>
<tr>
<th class="tg-6cwf">地域コード</th><th class="tg-6cwf">説明</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">EU_868</td>
<td class="tg-g9rn">ヨーロッパ 868 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">US_915</td>
<td class="tg-g9rn">北米 915 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">AS_923_GRP1</td>
<td class="tg-g9rn">アジア太平洋 923 MHz (GRP1)</td>
</tr>
<tr>
<td class="tg-g9rn">AS_923_GRP2</td>
<td class="tg-g9rn">アジア太平洋 923 MHz (GRP2)</td>
</tr>
<tr>
<td class="tg-g9rn">AS_923_GRP3</td>
<td class="tg-g9rn">アジア太平洋 923 MHz (GRP3)</td>
</tr>
<tr>
<td class="tg-g9rn">AS_923_GRP4</td>
<td class="tg-g9rn">アジア太平洋 923 MHz (GRP4)</td>
</tr>
<tr>
<td class="tg-g9rn">AU_915</td>
<td class="tg-g9rn">オーストラリア 915 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">CN_470</td>
<td class="tg-g9rn">中国 470 MHz (RP2)</td>
</tr>
<tr>
<td class="tg-g9rn">CN_470_RP_1_0</td>
<td class="tg-g9rn">中国 470 MHz (RP1)</td>
</tr>
<tr>
<td class="tg-g9rn">IN_865</td>
<td class="tg-g9rn">インド 865 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">KR_920</td>
<td class="tg-g9rn">韓国 920 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">RU_864</td>
<td class="tg-g9rn">ロシア 864 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">WW_2G4</td>
<td class="tg-g9rn">WW 2.4 GHz</td>
</tr>
</tbody>
</table>

<br />

**標準版のビルド:**

```shell
# Enable full logging and debug capabilities
west build --pristine --board xiao_nrf54l15/nrf54l15/cpuapp --shield semtech_loraplus_expansion_board --shield semtech_wio_lr2021 usp_zephyr/samples/usp/lbm/periodical_uplink
```

**低電力版のビルド:**

```shell
# Power-optimized with minimal logging features
west build --pristine --board xiao_nrf54l15/nrf54l15/cpuapp --shield semtech_loraplus_expansion_board --shield semtech_wio_lr2021 usp_zephyr/samples/usp/lbm/periodical_uplink -- -DCONF_FILE=prj_lowpower.conf
```



ビルドプロセスが成功した場合、以下に示すように Zephyr のコンパイルとビルド情報が表示されます：

```shell
...
-- Zephyr version: 4.2.0 (/Users/admin/zephyr_workspace/zephyr), build: v4.2.0
[248/248] Linking C executable zephyr/zephyr.elf
Memory region         Used Size  Region Size  %age Used
           FLASH:      257576 B      1428 KB     17.61%
             RAM:       40292 B       188 KB     20.93%
        IDT_LIST:          0 GB        32 KB      0.00%
Generating files from /Users/admin/zephyr_workspace/build/zephyr/zephyr.elf for board: xiao_nrf54l15
```

**デバイスのフラッシュ:**

```shell
# Flash the firmware to the board
west flash
```
**シリアルコンソール出力の監視:**

ログを表示するためにシリアルモニター（screen、PuTTY など）を接続します。ここでは、内蔵ターミナルアプリ `screen` を使用して実演します：

```shell
# Unplug the XIAO-nRF54L15
# Use ls /dev/tty.* command to list current ports
ls /dev/tty.*
```

```shell
# Plug in the Type-c cable and run the ls /dev/tty.* command again
/dev/tty.Bluetooth-Incoming-Port	/dev/tty.usbmodemB141F6A13
/dev/tty.debug-console			/dev/tty.wlan-debug
```

ここで、新しいエントリ `/dev/tty.usbmodemB141F6A13` が見つかります。これが開発ボードのポートです。

```shell
# Connect to the device with screen
# The default baud rate is 115200
screen /dev/tty.usbmodemB141F6A13 115200
```

これで、シリアル出力がターミナルに表示され、キットの出力ログを監視できます。`screen` セッションを終了するには、`Ctrl + A` を押してから `Ctrl + \` を押します。

<br />

**LNS への参加:**

<details>
<summary>出力: 起動と LNS への参加</summary>

```shell
[00:00:00.046,323] <inf> lorawan: smtc_modem_join_network
[00:00:00.046,388] <inf> lorawan:  Start a new join sequence in 5 seconds on stack 0
[00:00:05.057,559] <inf> lorawan: DevEUI
                                  70 b3 d5 7e d0 07 44 86                          |p..~..D.         
[00:00:05.057,586] <inf> lorawan: JoinEUI
                                  00 00 00 00 00 00 00 00                          |........         
[00:00:05.057,624] <inf> lorawan: DevNonce 0x1d2, stack_id 0
...
[00:00:12.433,537] <inf> usp: Event received: JOINED
[00:00:12.433,543] <inf> usp: Modem is now joined 
[00:00:12.433,568] <inf> lorawan: add send task
[00:00:12.438,666] <inf> lorawan:  User LoRaWAN tx on FPort 101
```

</details>

- **定期アップリンク:** デバイスは `FPort 101` で `01` から始まって増加するカウンターを使用して、1 分に 1 回データをアップロードします。以下に示すように、コンソールでリアルタイムでデータを監視できます：

<details>
<summary>出力: 定期アップリンク</summary>

```shell
[00:00:18.811,852] <inf> lorawan:   *************************************
[00:00:18.811,879] <inf> lorawan:   *  TX DONE
[00:00:18.811,896] <inf> lorawan:   *************************************
[00:00:18.811,984] <inf> lorawan: 

[00:00:18.812,016] <inf> lorawan:   Open Rx1 for Hook Id = 4
[00:00:18.812,072] <inf> lorawan:   RX1 LoRa at 23841 ms: freq:867300000, SF12, BW125, sync word = 0x34
[00:00:18.812,102] <inf> lorawan:   Timer will expire in 5030 ms
[00:00:24.041,328] <inf> lorawan: 

[00:00:24.041,357] <inf> lorawan:   *************************************
[00:00:24.041,389] <inf> lorawan:   * RX1 Timeout for stack_id = 0
[00:00:24.041,407] <inf> lorawan:   *************************************
[00:00:24.041,498] <inf> lorawan: 

[00:00:24.041,530] <inf> lorawan:   Open Rx2 for Hook Id = 4
[00:00:24.041,585] <inf> lorawan:   RX2 LoRa at 24813 ms: freq:869525000, SF9, BW125, sync word = 0x34
[00:00:24.041,614] <inf> lorawan:   Timer will expire in 772 ms
[00:00:24.839,344] <inf> lorawan: 

[00:00:24.839,363] <inf> lorawan:   *************************************
[00:00:24.839,408] <inf> lorawan:   * RX2 Timeout for stack_id = 0
[00:00:24.839,426] <inf> lorawan:   *************************************
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_periodical_uplink.png" style={{width:600, height:'auto'}}/></div>

<br />

**ボタントリガーアップリンク：** `user_key` を押すたびに即座にデータアップリンクがトリガーされ、`FPort 102` でカウンターが `1` ずつ増加します。ボタントリガーレポートは定期レポートのタイミングに影響しません。

<details>
<summary>出力：ボタントリガーアップリンク</summary>

```shell
[00:01:43.010,970] <inf> usp: Button pushed
[00:01:43.011,015] <inf> lorawan: add send task
[00:01:43.011,449] <inf> lorawan:  User LoRaWAN tx on FPort 102
[00:01:43.011,489] <inf> lorawan: 

[00:01:43.011,507] <inf> lorawan:   *************************************
[00:01:43.011,536] <inf> lorawan:   * Send Payload  for stack_id = 0
[00:01:43.011,553] <inf> lorawan:   *************************************
[00:01:43.011,627] <inf> lorawan:   Tx  LoRa at 107167 ms: freq:867100000, SF12, BW125, len 17 bytes 14 dBm, fcnt_up 4, toa = 1319
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_button_uplink.png" style={{width:600, height:'auto'}}/></div>

<br />

**スケジュールダウンリンク：** TTN の `Messaging` オプションからダウンリンクパケットをスケジュールします。フレームポート（`FPort 1`）とデータ内容（`AA BB CC DD`）を指定し、**Schedule downlink** をクリックします。ペイロードがキューで待機していることが確認でき、次のアップリンクが来ると、ダウンリンクパケットがネットワークサーバーから送信され、デバイスで受信されます。

<details>
<summary>出力：ダウンリンク受信</summary>

```shell
[00:02:14.666,960] <inf> lorawan:   Open Rx1 for Hook Id = 4
[00:02:14.667,016] <inf> lorawan:   RX1 LoRa at 139695 ms: freq:867100000, SF12, BW125, sync word = 0x34
[00:02:14.667,046] <inf> lorawan:   Timer will expire in 5029 ms
[00:02:20.837,445] <inf> lorawan: 

[00:02:20.837,477] <inf> lorawan:   *************************************
[00:02:20.837,523] <inf> lorawan:   * Receive a Valid downlink Rx1 for stack_id = 0, rssi: -121 dBm, snr: -9 dB
[00:02:20.837,540] <inf> lorawan:   *************************************
[00:02:20.837,594] <inf> usp: Event received: DOWNDATA
[00:02:20.837,625] <inf> usp: Event received: TXDONE
[00:02:20.837,630] <inf> usp: Transmission done 
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_downlink_config.png" style={{width:600, height:'auto'}}/></div>

<br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_downlink_payload.png" style={{width:600, height:'auto'}}/></div>


## リソース

### Semtech LR2021

- **[PDF]** [Semtech LR2021 データシート](https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/RQ00000BIigz/OP1EbZuxbCU2JJQ7kD9ooPlC8c0u0TFp3e0WDJ5yrNQ)

- **[PDF]** [Semtech LR2021_EU868/US915 回路図](https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/res/LR2021WIO1XDCS_Wio-LR2021_e769v02a_868_915_sch_layout.pdf)

- **[PDF]** [Semtech LR2021_CN490 回路図](https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/res/LR2021WIO1XGCS_Wio_LR2021_e768v02a_490_sch_layout.pdf)

### 拡張ボード

- **[PDF]** [拡張ボード回路図](https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/res/LR20xx_XIAO_LoRa_Plus_Expansion_Board_e758v03a_sch_layout.pdf)

### Seeed Studio XIAO nRF54L15

- **[PDF]** [Seeed Studio XIAO nRF54L15 回路図](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_Schematic.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF54L15 KiCAD ライブラリ](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_KICAD.zip)

- **[DXF]** [Seeed Studio XIAO nRF54L15 DXF 寸法図](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15(Sense)_DXF.zip)

- **[XLSX]** [Seeed Studio XIAO nRF54L15 ピン配置シート](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15datasheet.xlsx)


## 認証



## 技術サポート & 製品ディスカッション

技術的な問題については、[フォーラム](http://forum.seeedstudio.com/)にお送りください。

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
