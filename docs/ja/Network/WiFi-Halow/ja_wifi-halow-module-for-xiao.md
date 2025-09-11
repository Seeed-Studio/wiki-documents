---
description: XIAO ESP32S3 と Wio-WM6180 Wi-Fi HaLow モジュールのチュートリアル
title: XIAO 用 Wi-Fi HaLow モジュールの使用開始
image: https://files.seeedstudio.com/wiki/wifi_halow/pic/20.webp
slug: /ja/getting_started_with_wifi_halow_module_for_xiao
sidebar_class_name: hidden
last_update:
  date: 02/12/2025
  author: Citric
---


# XIAO 用 Wi-Fi HaLow モジュールの使用開始

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/20.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-Halow-Module-for-XIAO-p-6395.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## はじめに

このチュートリアルでは、Wio-WM6180 Wi-Fi HaLow モジュールと XIAO ESP32S3 を使用して Wi-Fi HaLow クライアントを構築するためのセットアップと使用方法をガイドします。Wi-Fi HaLow（IEEE 802.11ah）は、サブ 1 GHz 周波数帯で動作する長距離・低消費電力の IoT アプリケーション向けに設計されています。ハードウェアのセットアップ、ソフトウェアの設定、そして IoT プロジェクト用の Wi-Fi HaLow 接続を確立する方法をデモンストレーションします。

### 主な特徴

- 見通し距離最大 1km の長距離 Wi-Fi 接続
- IoT デバイスに最適な低消費電力
- 壁や障害物をより良く透過するサブ 1 GHz 動作
- XIAO ESP32S3 開発ボードとの互換性
- 簡単に従えるセットアップと設定プロセス

## ハードウェア概要

以下の表は、Wio-WM6180 Wi-Fi HaLow モジュールの主要仕様を示しています：

| 特性 | 値 | 単位 |
|:-------------:|:-----:|:----:|
| 動作電圧 | 3.3 | V |
| 動作電流 | TBD | mA |
| Wi-Fi プロトコル | IEEE 802.11ah | - |
| 周波数帯 | サブ 1 GHz | - |
| 通信距離 | 最大 1 | km |
| インターフェース | SPI | - |
| 寸法 | TBD | mm |

## Wi-Fi HaLow とは？

Wi-Fi HaLow は、モノのインターネット（IoT）アプリケーション向けに特別に設計された IEEE 802.11ah 標準に基づく無線ネットワーキングプロトコルです。サブ 1 GHz 周波数帯（通常 900 MHz）で動作する Wi-Fi HaLow は、従来の Wi-Fi に比べていくつかの重要な利点を提供します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/Wi-Fi_HaLow_frequency_band_graphic.png" style={{width:800, height:'auto'}}/></div>

1. **拡張された通信距離**: Wi-Fi HaLow は見通し条件で最大 1 キロメートルの距離を達成でき、従来の Wi-Fi の通信距離を大幅に上回ります。

2. **改善された透過性**: より低い周波数の信号は壁やその他の障害物をより良く透過できるため、困難な環境に最適です。

3. **低消費電力**: IoT デバイスを念頭に置いて設計されており、Wi-Fi HaLow は接続デバイスの数年間のバッテリー寿命を可能にします。

4. **スケーラビリティ**: 単一のアクセスポイントに数千のデバイスの接続をサポートし、大規模な IoT 展開に最適です。

5. **セキュリティ**: WPA3 暗号化を含む Wi-Fi ファミリーの堅牢なセキュリティ機能を継承しています。

### Wi-Fi HaLow が重要な理由

Wi-Fi HaLow は、長距離接続、低消費電力、および多数のデバイスを同時に処理する能力を必要とする IoT アプリケーションの成長するニーズに対応します。従来の Wi-Fi と LPWAN 技術の間のギャップを埋め、以下を提供します：

- **産業用 IoT**: 工場、倉庫、産業環境での信頼性の高い接続を可能にします。
- **スマート農業**: センサーネットワーク用の大規模農業エリア全体のカバレッジを提供します。
- **スマートシティ**: 都市環境での接続デバイスの広範なネットワークをサポートします。
- **資産追跡**: 貴重な資産や機器の長距離追跡を可能にします。

Wi-Fi の親しみやすさと低消費電力・長距離接続の利点を組み合わせることで、Wi-Fi HaLow は様々な業界での IoT アプリケーションの拡大において重要な役割を果たす準備ができています。

### Wi-Fi HaLow システムアーキテクチャ

典型的な Wi-Fi HaLow ネットワークは、長距離・低消費電力の IoT 接続を可能にするために連携して動作するいくつかの主要コンポーネントで構成されています：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/wifi-halow-architecture.png" style={{width:800, height:'auto'}}/></div>

1. **アクセスポイント（AP）**: Wi-Fi HaLow ネットワークの中央ハブで、接続の管理とデバイスとインターネット間のデータルーティングを担当します。

2. **ステーション（STA）**: アクセスポイントに接続するクライアントデバイス。これらはセンサー、アクチュエーター、またはその他の IoT デバイスです。

3. **ゲートウェイ**: Wi-Fi HaLow ネットワークと他のネットワーク（例：イーサネットやセルラー）間のブリッジとして機能します。

このチュートリアルでは、Wi-Fi HaLow アクセスポイントに接続するステーション（STA）クライアントとして XIAO ESP32S3 を設定します。XIAO は WM6180 モジュールを使用して HaLow 接続を確立し、維持します。

## MM-IoT-SDK フレームワーク

WM6180 モジュールは [MorseMicro の MM-IoT-SDK](https://github.com/MorseMicro/mm-iot-esp32) を利用しており、以下の機能を提供します：

- **マルチプロトコルサポート**: 様々な IoT プロトコルとのシームレスな統合を可能にします
- **低消費電力管理**: バッテリー駆動デバイス向けに最適化された消費電力
- **セキュリティ機能**: 内蔵の暗号化と認証メカニズム
- **簡単な設定**: ネットワークセットアップと管理のための簡素化された API

MM-IoT-SDK アーキテクチャは複数のレイヤーで構成されています：

1. **ハードウェア抽象化レイヤー (HAL)**: 異なるハードウェアプラットフォーム向けの統一インターフェースを提供
2. **ネットワークスタック**: Wi-Fi HaLow プロトコルスタックを実装
3. **アプリケーションレイヤー**: アプリケーション開発とデバイス管理のための API を提供

このフレームワークにより、開発者はカスタムアプリケーションの柔軟性を維持しながら、Wi-Fi HaLow 機能を迅速に実装できます。

## 必要な材料

このチュートリアルを実行するために必要な材料は以下の通りです。

<div class="table-center">
    <table align="center">
        <tr>
            <th>XIAO ESP32S3 Sense</th>
            <th>XIAO ESP32C3</th>
            <th>XIAO ESP32C6</th>
            <th>Wio-WM6180 Wi-Fi HaLow Module for XIAO</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:90, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/20.jpg" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-Halow-Module-for-XIAO-p-6395.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

:::note
このチュートリアルは、すべてのXIAO ESP32シリーズに適用されます。このチュートリアルでは、XIAO ESP32S3 Senseを例として使用します。
:::

上記に加えて、WiFi-Halow使用に適した追加のアンテナを準備する必要がある場合があります。以下は、検証済みの推奨アンテナモデルです。

<div class="table-center">
    <table align="center">
        <tr>
            <th>長距離屋内アンテナキット</th>
            <th>2.6dBi長距離アンテナ</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/long_range_indoor_antenna.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/2.6dBi_long_range_antenna.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-Indoor-Antenna-Kit-860-930MHz-3dBi-295mm-p-5434.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/External-Antenna-915MHZ-2-6dBi-SMA-L195mm-p-5047.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

WiFi-Halowモジュールにアンテナを接続するには、**SMA to I-PEXアンテナケーブル**の購入も必要になる場合があります。

<div class="table-center">
    <table align="center">
        <tr>
            <th>SMA to I-PEXアンテナケーブル</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/antenna_cable.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/UF-L-SMA-K-1-13-120mm-p-5046.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

初回使用の場合は、アンテナの取り付けについて以下の動画を参考にしてください。

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/wifi_halow/pic/install_xiao_wifi_halow_module.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## ESP-IDF v5.1.1のインストール

プログラミングを開始する前に、コンピューターにESP-IDF v5.1.1をインストールする必要があります。ESP-IDFはESP32シリーズチップの公式開発フレームワークです。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Windows" label="Windows">

**ステップ1.** Windows用ESP-IDFツールインストーラーをダウンロード

Windows用の[ESP-IDFツールインストーラー](https://dl.espressif.com/dl/esp-idf/?idf=5.1.1)をダウンロードします。このインストーラーには、ESP-IDF開発に必要なすべてのツールが含まれています。

**ステップ2.** インストーラーを実行

1. ダウンロードしたインストーラーを管理者として実行
2. プロンプトに従ってPython、Git、その他の必要なツールをインストール
3. プロンプトが表示されたら、以下のオプションを選択：
   - ESP-IDF v5.1.1をインストール
   - Pythonをインストール
   - Gitをインストール
   - ESP-IDFツールをパスに追加

**ステップ3.** インストールの確認

新しいコマンドプロンプトを開いて以下を実行：

```bash
esp-idf --version
```

インストールが成功した場合、バージョン番号 5.1.1 が表示されるはずです。

</TabItem>

<TabItem value="MacOS" label="MacOS">

**ステップ 1.** 前提条件をインストールする

ターミナルを開き、まだインストールしていない場合は Homebrew をインストールします：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

必要なパッケージをインストールします：

```bash
brew install cmake ninja dfu-util
```

**Step 2.** Download and install ESP-IDF

```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.1.1 --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
./install.sh esp32s3
```

**Step 3.** Set up the environment variables

```bash
. $HOME/esp/esp-idf/export.sh
```

この行を `~/.profile` または `~/.zshrc` に追加して、新しいターミナルを開いたときに環境変数を自動的に設定します。

</TabItem>

<TabItem value="Linux" label="Linux">

**ステップ 1.** 前提条件をインストール

Ubuntu と Debian の場合：

```bash
sudo apt-get install git wget flex bison gperf python3 python3-pip python3-setuptools cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0
```

他のディストリビューションについては、同等のパッケージをインストールしてください。

**ステップ 2.** ESP-IDF をダウンロードしてインストールする

```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.1.1 --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
./install.sh esp32s3
```

**Step 3.** Set up the environment variables

```bash
. $HOME/esp/esp-idf/export.sh
```

この行を `~/.bashrc` に追加して、新しいターミナルを開いた際に環境変数が自動的に設定されるようにします。

</TabItem>
</Tabs>

:::tip
インストール後、すべての環境変数が適切に設定されるように、コンピュータの再起動が必要な場合があります。
:::

:::note
ESP-IDF v5.1.1のインストールに関するより詳細な手順については、Espressifの公式ドキュメントを参照してください：

- [ESP-IDF Get Started Guide](https://docs.espressif.com/projects/esp-idf/en/v5.1.1/esp32s3/get-started/index.html)

:::

## mm-iot-esp32 リポジトリのクローンと設定

以下の手順に従って、mm-iot-esp32 リポジトリをクローンし、環境変数を設定します：

<Tabs>
<TabItem value="Windows" label="Windows">

**ステップ 1.** リポジトリをクローンする

```bash
cd %USERPROFILE%
git clone https://github.com/Seeed-Studio/mm-iot-esp32.git
```

**ステップ 2.** IDF変数をエクスポートする

```bash
cd %USERPROFILE%\mm-iot-esp32
export.bat
```

**ステップ 3.** MMIOT_ROOT 環境変数を設定する

これは Windows システムプロパティを通じて永続的に設定できます：

1. システムプロパティを開く（Win + R を押して `sysdm.cpl` と入力）
2. 「環境変数」をクリック
3. 「ユーザー環境変数」の下で「新規」をクリック
4. 変数名：`MMIOT_ROOT`
5. 変数値：`C:\Users\YourUsername\mm-iot-esp32`（実際のパスに置き換えてください）
6. 「OK」をクリックして保存

または、コマンドプロンプトで一時的に設定することもできます：

```bash
set MMIOT_ROOT=C:\Users\YourUsername\mm-iot-esp32
```

</TabItem>

<TabItem value="MacOS" label="MacOS">

**ステップ 1.** リポジトリをクローンする

```bash
cd ~
git clone https://github.com/Seeed-Studio/mm-iot-esp32.git
```

**ステップ 2.** IDF変数をエクスポートする

```bash
cd ~/mm-iot-esp32
source export.sh
```

**ステップ 3.** MMIOT_ROOT環境変数を設定する

一時的な使用の場合：

```bash
export MMIOT_ROOT=~/mm-iot-esp32
```

永続的に使用するには、シェル設定ファイルに追加してください：

```bash
# For bash users (add to ~/.bash_profile or ~/.bashrc)
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.bash_profile

# For zsh users (add to ~/.zshrc)
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.zshrc
```

その後、シェル設定を再読み込みしてください：

```bash
# For bash
source ~/.bash_profile

# For zsh
source ~/.zshrc
```

</TabItem>

<TabItem value="Linux" label="Linux">

**Step 1.** Clone the repository

```bash
cd ~
git clone https://github.com/Seeed-Studio/mm-iot-esp32.git
```

**ステップ 2.** IDF変数をエクスポートする

```bash
cd ~/mm-iot-esp32
source export.sh
```

**ステップ 3.** MMIOT_ROOT環境変数を設定する

一時的な使用の場合：

```bash
export MMIOT_ROOT=~/mm-iot-esp32
```

永続的に使用するには、シェル設定ファイルに追加してください：

```bash
# For bash users
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.bashrc

# For zsh users
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.zshrc
```

その後、シェル設定を再読み込みします：

```bash
# For bash
source ~/.bashrc

# For zsh
source ~/.zshrc
```

</TabItem>
</Tabs>

:::tip
MMIOT_ROOT環境変数を設定する際は、必ず絶対パスを使用してください。相対パスを使用すると、プロジェクトのビルド時に問題が発生する可能性があります。
:::

:::note
環境変数を設定した後、変更を有効にするためにターミナルを一度閉じて再度開く必要がある場合があります。
:::

## サンプルファームウェアのビルド

mm-iot-esp32リポジトリには、さまざまな機能を実演するいくつかのサンプルアプリケーションが含まれています。これらのサンプルをビルドして設定する方法は以下の通りです：

### サンプルアプリケーションの場所

すべてのサンプルアプリケーションは、リポジトリの`examples`ディレクトリにあります。利用可能なサンプルには以下が含まれます：

- `scan`: Wi-Fiスキャンサンプル
- `iperf`: iperfサーバーサンプル
- `sta_reboot`: Wi-Fiステーション再起動サンプル
- `sta_connect`: Wi-Fiステーション接続サンプル
- `web_camera_server`: Webカメラサーバーサンプル
- その他...

### ネットワーク認証情報の設定

ファームウェアをビルドする前に、サンプルの設定ファイルでネットワーク設定を構成する必要があります：

1. 選択したサンプルディレクトリに移動します：

```bash
cd $MMIOT_ROOT/examples/example_name
```

2. 設定ファイルを編集します：

```bash
# Open the configuration file
nano src/mm_app_loadconfig.c
```

3. このファイルでは、以下を変更できます：

- 国コード（製品は現在北米でのみ利用可能なため、**US** に設定する必要があります）
- Wi-Fi HaLow ネットワーク認証情報
- その他のネットワーク関連パラメータ

:::caution
国コードに関する重要な注意事項：

- この製品は現在北米市場でのみ利用可能なため、国コードは「US」に設定する必要があります
- 規制要件により、この製品は他の地域ではまだ利用できません
- 北米以外の地域でこの製品を使用すると、現地の規制に違反する可能性があります

:::

### ビルドプロセス

ネットワーク設定を構成した後、以下のコマンドを使用してファームウェアをビルドできます：

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
```

:::note

- `idf.py set-target` コマンドは各例につき一度だけ実行する必要があります
- `idf.py fullclean` は以前のビルド成果物をすべて削除してクリーンビルドを確実にします
- ビルドが成功すると、ファームウェアバイナリは `build` ディレクトリに配置されます

:::

### ビルド出力

ビルドが成功すると、以下のような出力が表示されます：

```bash
# Project build complete. To flash, run this command:
idf.py -p (PORT) flash
```

以下に、いくつかの例を示します。

## 例 1. スキャン

この例では、周辺で利用可能な Wi-Fi HaLow ネットワークをスキャンする方法を示します。以下の手順に従って、スキャン例をビルドして実行してください：

### ステップ 1: スキャン例に移動する

```bash
cd ~/mm-iot-esp32/example/scan
```

### ステップ2: 国コードの設定

1. 設定ファイルを開く：

```bash
nano main/src/mm_app_loadconfig.c
```

2. 国コード行を見つけて修正します：

```c
#define COUNTRY_CODE "US"  // Must use "US" as the product is only available for North America
```

### ステップ 3: ハードウェアセットアップ

1. Wio-WM6180 Wi-Fi HaLow モジュールを XIAO ESP32S3 に接続します

2. XIAO ESP32S3 を USB 経由でコンピュータに接続します

### ステップ 4: ビルドとフラッシュ

以下のコマンドを順番に実行します：

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### ステップ5: 結果の監視

すべてが正常に動作している場合：

- フラッシュ後にシリアルモニターが自動的に開始されます
- プログラムがWi-Fi HaLowネットワークのスキャンを開始します
- 範囲内にWi-Fi HaLowゲートウェイがある場合、その情報がシリアルモニターに表示されます

シリアルモニターでの出力例：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/9.png" style={{width:1000, height:'auto'}}/></div>

:::tip

- ネットワークを検出するために、近くにWi-Fi HaLowゲートウェイがあることを確認してください
- スキャンプロセスは継続的に実行されるため、利用可能なネットワークの定期的な更新が表示されます
- Ctrl+Cを押してモニターを停止し、プログラムを終了します

:::

:::note
ネットワークが表示されない場合：

- Wi-Fi HaLowゲートウェイの電源が入っており、正常に機能していることを確認してください
- ゲートウェイの範囲内にいることを確認してください
- モジュールがXIAO ESP32S3に正しく接続されていることを確認してください

:::

## 例2. iperf

この例では、iPerfを使用してWi-Fi HaLow接続のネットワークパフォーマンスをテストする方法を示します。以下の手順に従ってiPerfの例をビルドして実行してください：

### ステップ1: iPerfの例に移動

```bash
cd ~/mm-iot-esp32/example/iperf
```

### ステップ2: ネットワーク設定の構成

1. 設定ファイルを開く：

```bash
nano main/src/mm_app_loadconfig.c
```

2. 以下のパラメータを変更してください：

```cpp
// Set country code (must be "US" for North America)
#define COUNTRY_CODE "US"

// Set your Wi-Fi HaLow network credentials
#define SSID             Your_HaLow_SSID           // Replace with your network name
#define SAE_PASSPHRASE   Your_Password             // Replace with your network password
```

### ステップ 3: ハードウェアセットアップ

1. Wio-WM6180 Wi-Fi HaLow モジュールを XIAO ESP32S3 に接続します
2. XIAO ESP32S3 を USB 経由でコンピュータに接続します

### ステップ 4: ビルドとフラッシュ

以下のコマンドを順番に実行します：

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### ステップ5: パフォーマンステストの実行

プログラムが正常に動作すると、iPerfサービスが起動するのが確認できます。これで、Wi-Fi HaLowゲートウェイからパフォーマンステストを実行できます。

IPv4テストの場合、ゲートウェイで以下のコマンドを実行してください：

```bash
iperf -c <device_ip> -p <port> -i 1 -u -b 20M
```

For IPv6 testing, execute this command on your gateway:

```bash
iperf -c <device_ip>%wlan0 -p <port> -i 1 -V -u -b 20M
```

パラメータの説明：

- `-c`: クライアントモードで実行
- `-p`: ポート番号
- `-i`: レポート間隔（1秒）
- `-u`: UDPプロトコルを使用
- `-b`: 目標帯域幅（20 Mbps）
- `-V`: IPv6モード（IPv6テストのみ）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/11.png" style={{width:1000, height:'auto'}}/></div>

:::tip

- パフォーマンステストを実行する前に、デバイスがWi-Fi HaLowネットワークに正常に接続されていることを確認してください
- 接続後、デバイスのIPアドレスがシリアルモニターに表示されます
- テストニーズに基づいて帯域幅（-bパラメータ）を調整できます

:::

:::note
よくある問題と解決策：

- 接続に失敗した場合は、ネットワーク認証情報を確認してください
- iPerfサービスが開始されない場合は、ハードウェア接続を確認してください
- パフォーマンスが悪い場合は、ゲートウェイの良好な範囲内にいることを確認してください

:::

## 例3. web_camera_server

この例では、XIAO ESP32S3 SenseからWi-Fi HaLowネットワーク経由でカメラフィードをストリーミングする方法を示します。以下の手順に従ってWebカメラサーバーを構築して実行してください：

### ステップ1: Webカメラの例に移動

```bash
cd ~/mm-iot-esp32/example/web_camera_serve
```

### ステップ2: ネットワーク設定の構成

1. 設定ファイルを開く：

```bash
nano main/src/mm_app_loadconfig.c
```

2. Wi-Fi HaLow認証情報を変更します：

```cpp
// Set your Wi-Fi HaLow network credentials
#define SSID              Your_HaLow_SSID           // Replace with your network name
#define SAE_PASSPHRASE    Your_Password             // Replace with your network password
```

### ステップ 3: ハードウェアセットアップ

1. Wio-WM6180 Wi-Fi HaLow モジュールを XIAO ESP32S3 Sense に接続します
2. XIAO ESP32S3 Sense のカメラモジュールが適切に接続されていることを確認します
3. XIAO ESP32S3 Sense を USB 経由でコンピュータに接続します

### ステップ 4: ビルドとフラッシュ

以下のコマンドを順番に実行します：

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### ステップ5: カメラフィードにアクセスする

プログラムが正常に動作したら：

1. シリアルモニターに表示されるIPアドレスをメモする
2. Wi-Fi HaLowゲートウェイと同じネットワークに接続されている任意のデバイスでWebブラウザを開く
3. ブラウザのアドレスバーにIPアドレスを入力する
4. XIAO ESP32S3 Senseからのライブカメラフィードが表示されるはずです

URLの例：

```
http://192.168.4.1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/14.png" style={{width:1000, height:'auto'}}/></div>

:::tip
最適なストリーミング体験のために：

- より良い画質のために良好な照明条件を確保してください
- XIAO ESP32S3 SenseをWi-Fi HaLowゲートウェイの良好な範囲内に保ってください
- 最適な互換性のために最新のWebブラウザを使用してください

:::

:::note
トラブルシューティング：

- カメラフィードにアクセスできない場合は、デバイスがWi-Fi HaLowゲートウェイと同じネットワーク上にあることを確認してください
- 画像が表示されない場合は、カメラモジュールが正しく接続されていることを確認してください
- ストリームが遅延する場合は、Wi-Fi HaLowゲートウェイに近づいてみてください

:::

## リソース

- **[GITHUB]** [mm-iot-esp32 repository](https://github.com/Seeed-Studio/mm-iot-esp32.git)
- **[GITHUB]** [mm-iot Document](https://github.com/Seeed-Studio/mm-iot-esp32/blob/main/documentation.html)
- **[PDF]** [WI-FI_HALOW_FGH100M_EXT01_V30_SCH_20241107](https://files.seeedstudio.com/wiki/wifi_halow/res/WI-FI_HALOW_FGH100M_EXT01_V30_SCH_20241107.pdf)
- **[KiCAD]** [WI-FI_HALOW_FGH100M_EXT01_V30 KiCAD PCB File](https://files.seeedstudio.com/wiki/wifi_halow/res/WI-FI_HALOW_FGH100M_EXT01_V30.kicad_pcb)
- **[PDF]** [Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0](https://files.seeedstudio.com/wiki/wifi_halow/res/Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0_Preliminary_20241018.pdf)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
