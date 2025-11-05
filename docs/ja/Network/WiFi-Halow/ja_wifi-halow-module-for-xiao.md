---
description: XIAO ESP32S3 with Wio-WM6108 Wi-Fi HaLow Module Tutorial
title: XIAO 用 Wi-Fi HaLow モジュール入門ガイド
image: https://files.seeedstudio.com/wiki/wifi_halow/pic/20.webp
slug: /ja/getting_started_with_wifi_halow_module_for_xiao
sidebar_class_name: hidden
last_update:
  date: 02/12/2025
  author: Citric
---


# XIAO 用 Wi-Fi HaLow モジュール入門ガイド

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/20.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-HaLow-Module-for-XIAO-p-6395.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## はじめに

このチュートリアルでは、Wio-WM6108 Wi-Fi HaLow モジュールと XIAO ESP32S3 を使用して Wi-Fi HaLow クライアントを構築するためのセットアップと使用方法をガイドします。Wi-Fi HaLow（IEEE 802.11ah）は、サブ 1 GHz 周波数帯で動作する長距離・低消費電力 IoT アプリケーション向けに設計されています。ハードウェアのセットアップ、ソフトウェアの設定を説明し、IoT プロジェクト用の Wi-Fi HaLow 接続を確立する方法をデモンストレーションします。

### 主な特徴

- 見通し距離最大 1km の長距離 Wi-Fi 接続
- IoT デバイスに最適な低消費電力
- 壁や障害物をより良く透過するサブ 1 GHz 動作
- XIAO ESP32S3 開発ボードとの互換性
- 簡単に従えるセットアップと設定プロセス

## ハードウェア概要

以下の表は、Wio-WM6108 Wi-Fi HaLow モジュールの主要仕様を示しています：

| 特性 | 値 | 単位 |
|:-------------:|:-----:|:----:|
| 動作電圧 | 3.3 | V |
| 動作電流 | TBD | mA |
| Wi-Fi プロトコル | IEEE 802.11ah | - |
| 周波数帯 | サブ 1 GHz | - |
| 範囲 | 最大 1 | km |
| インターフェース | SPI | - |
| 寸法 | TBD | mm |

## Wi-Fi HaLow とは？

Wi-Fi HaLow は、IEEE 802.11ah 標準に基づく無線ネットワーキングプロトコルで、モノのインターネット（IoT）アプリケーション向けに特別に設計されています。サブ 1 GHz 周波数帯（通常 900 MHz）で動作する Wi-Fi HaLow は、従来の Wi-Fi に比べていくつかの重要な利点を提供します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/Wi-Fi_HaLow_frequency_band_graphic.png" style={{width:800, height:'auto'}}/></div>

1. **拡張範囲**：Wi-Fi HaLow は見通し条件で最大 1 キロメートルの距離を達成でき、従来の Wi-Fi の範囲を大幅に超えています。

2. **改善された透過性**：低周波数信号は壁やその他の障害物をより良く透過できるため、困難な環境に最適です。

3. **低消費電力**：IoT デバイスを念頭に置いて設計された Wi-Fi HaLow は、接続デバイスの数年間のバッテリー寿命を可能にします。

4. **スケーラビリティ**：単一のアクセスポイントに数千のデバイスの接続をサポートし、大規模な IoT 展開に最適です。

5. **セキュリティ**：WPA3 暗号化を含む Wi-Fi ファミリーの堅牢なセキュリティ機能を継承しています。

### Wi-Fi HaLow が重要な理由

Wi-Fi HaLow は、長距離接続、低消費電力、および多数のデバイスを同時に処理する能力を必要とする IoT アプリケーションの増大するニーズに対応します。従来の Wi-Fi と LPWAN 技術の間のギャップを埋め、以下を提供します：

- **産業 IoT**：工場、倉庫、産業環境での信頼性の高い接続を可能にします。
- **スマート農業**：センサーネットワーク用の大規模農業エリアでのカバレッジを提供します。
- **スマートシティ**：都市環境での接続デバイスの広範なネットワークをサポートします。
- **資産追跡**：貴重な資産や機器の長距離追跡を可能にします。

Wi-Fi の親しみやすさと低消費電力・長距離接続の利点を組み合わせることで、Wi-Fi HaLow は様々な業界での IoT アプリケーションの拡大において重要な役割を果たす準備ができています。

### Wi-Fi HaLow システムアーキテクチャ

典型的な Wi-Fi HaLow ネットワークは、長距離・低消費電力 IoT 接続を可能にするために連携して動作するいくつかの主要コンポーネントで構成されています：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/wifi-halow-architecture.png" style={{width:800, height:'auto'}}/></div>

1. **アクセスポイント（AP）**：Wi-Fi HaLow ネットワークの中央ハブで、接続の管理とデバイスとインターネット間のデータルーティングを担当します。

2. **ステーション（STA）**：アクセスポイントに接続するクライアントデバイス。これらはセンサー、アクチュエーター、またはその他の IoT デバイスです。

3. **ゲートウェイ**：Wi-Fi HaLow ネットワークと他のネットワーク（イーサネットやセルラーなど）間のブリッジとして機能します。

このチュートリアルでは、Wi-Fi HaLow アクセスポイントに接続するステーション（STA）クライアントとして XIAO ESP32S3 を設定します。XIAO は WM6108 モジュールを使用して HaLow 接続を確立・維持します。

## MM-IoT-SDK フレームワーク

WM6108 モジュールは [MorseMicro の MM-IoT-SDK](https://github.com/MorseMicro/mm-iot-esp32) を利用し、以下を提供します：

- **マルチプロトコルサポート**：様々な IoT プロトコルとのシームレスな統合を可能にします
- **低消費電力管理**：バッテリー駆動デバイス用に最適化された消費電力
- **セキュリティ機能**：内蔵の暗号化と認証メカニズム
- **簡単な設定**：ネットワークセットアップと管理のための簡素化された API

MM-IoT-SDK アーキテクチャは複数のレイヤーで構成されています：

1. **ハードウェア抽象化レイヤー（HAL）**：異なるハードウェアプラットフォーム用の統一インターフェースを提供
2. **ネットワークスタック**：Wi-Fi HaLow プロトコルスタックを実装
3. **アプリケーションレイヤー**：アプリケーション開発とデバイス管理用の API を提供

このフレームワークにより、開発者はカスタムアプリケーションの柔軟性を維持しながら、Wi-Fi HaLow 機能を迅速に実装できます。

## 必要な材料

このチュートリアルを実行するために必要な材料は以下の通りです。

<div class="table-center">
    <table align="center">
        <tr>
            <th>XIAO ESP32S3 Sense</th>
            <th>Wio-WM6108 Wi-Fi HaLow Module for XIAO</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/20.jpg" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-HaLow-Module-for-XIAO-p-6395.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

:::note
このチュートリアルは XIAO ESP32-S3 シリーズにのみ適用されます。このチュートリアルでは XIAO ESP32S3 Sense を例として使用します。
:::

上記に加えて、WiFi-Halow 使用に適した追加のアンテナを準備する必要がある場合があります。以下は検証済みの推奨アンテナモデルです。

<div class="table-center">
    <table align="center">
        <tr>
            <th>長距離屋内アンテナキット</th>
            <th>2.6dBi 長距離アンテナ</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/long_range_indoor_antenna.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/2.6dBi_long_range_antenna.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-Indoor-Antenna-Kit-860-930MHz-3dBi-295mm-p-5434.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/External-Antenna-915MHZ-2-6dBi-SMA-L195mm-p-5047.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

アンテナを WiFi-Halow モジュールに接続するには、**SMA to I-PEX アンテナケーブル**も購入する必要がある場合があります。

<div class="table-center">
    <table align="center">
        <tr>
            <th>SMA to I-PEX アンテナケーブル</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/antenna_cable.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/UF-L-SMA-K-1-13-120mm-p-5046.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

初回使用の場合は、アンテナの取り付けについて以下のビデオを参照してください。

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/wifi_halow/pic/install_xiao_wifi_halow_module.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## ESP-IDF v5.1.1 のインストール

プログラミングを開始する前に、コンピューターに ESP-IDF v5.1.1 をインストールする必要があります。ESP-IDF は ESP32 シリーズチップの公式開発フレームワークです。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Windows" label="Windows">

**ステップ 1.** Windows用ESP-IDFツールインストーラーをダウンロード

Windows用の[ESP-IDFツールインストーラー](https://dl.espressif.com/dl/esp-idf/?idf=5.1.1)をダウンロードします。このインストーラーには、ESP-IDF開発に必要なすべてのツールが含まれています。

**ステップ 2.** インストーラーを実行

1. ダウンロードしたインストーラーを管理者として実行
2. プロンプトに従ってPython、Git、その他の必要なツールをインストール
3. プロンプトが表示されたら、以下のオプションを選択：
   - ESP-IDF v5.1.1をインストール
   - Pythonをインストール
   - Gitをインストール
   - ESP-IDFツールをパスに追加

**ステップ 3.** インストールを確認

新しいコマンドプロンプトを開いて実行：

```bash
esp-idf --version
```

インストールが成功した場合、バージョン番号5.1.1が表示されるはずです。

</TabItem>

<TabItem value="MacOS" label="MacOS">

**ステップ 1.** 前提条件をインストール

ターミナルを開き、まだインストールしていない場合はHomebrewをインストール：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

必要なパッケージをインストール：

```bash
brew install cmake ninja dfu-util
```

**ステップ 2.** ESP-IDFをダウンロードしてインストール

```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.1.1 --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
./install.sh esp32s3
```

**ステップ 3.** 環境変数を設定

```bash
. $HOME/esp/esp-idf/export.sh
```

新しいターミナルを開いたときに環境変数を自動的に設定するために、この行を`~/.profile`または`~/.zshrc`に追加してください。

</TabItem>

<TabItem value="Linux" label="Linux">

**ステップ 1.** 前提条件をインストール

UbuntuとDebianの場合：

```bash
sudo apt-get install git wget flex bison gperf python3 python3-pip python3-setuptools cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0
```

他のディストリビューションの場合は、同等のパッケージをインストールしてください。

**ステップ 2.** ESP-IDFをダウンロードしてインストール

```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.1.1 --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
./install.sh esp32s3
```

**ステップ 3.** 環境変数を設定

```bash
. $HOME/esp/esp-idf/export.sh
```

新しいターミナルを開いたときに環境変数を自動的に設定するために、この行を`~/.bashrc`に追加してください。

</TabItem>
</Tabs>

:::tip
インストール後、すべての環境変数が適切に設定されるように、コンピューターを再起動する必要がある場合があります。
:::

:::note
ESP-IDF v5.1.1のインストールに関するより詳細な手順については、Espressifの公式ドキュメントを参照してください：

- [ESP-IDF Get Started Guide](https://docs.espressif.com/projects/esp-idf/en/v5.1.1/esp32s3/get-started/index.html)

:::

## mm-iot-esp32リポジトリのクローンと設定

以下の手順に従って、mm-iot-esp32リポジトリをクローンし、環境変数を設定してください：

<Tabs>
<TabItem value="Windows" label="Windows">

**ステップ 1.** リポジトリをクローン

```bash
cd %USERPROFILE%
git clone https://github.com/Seeed-Studio/mm-iot-esp32.git
```

**ステップ 2.** IDF変数をエクスポート

```bash
cd %USERPROFILE%\mm-iot-esp32
export.bat
```

**ステップ 3.** MMIOT_ROOT環境変数を設定

Windowsシステムプロパティを通じて永続的に設定できます：

1. システムプロパティを開く（Win + R、`sysdm.cpl`と入力）
2. "Environment Variables"をクリック
3. "User variables"の下で"New"をクリック
4. 変数名：`MMIOT_ROOT`
5. 変数値：`C:\Users\YourUsername\mm-iot-esp32`（実際のパスに置き換えてください）
6. "OK"をクリックして保存

または、コマンドプロンプトで一時的に設定することもできます：

```bash
set MMIOT_ROOT=C:\Users\YourUsername\mm-iot-esp32
```

</TabItem>

<TabItem value="MacOS" label="MacOS">

**ステップ 1.** リポジトリをクローン

```bash
cd ~
git clone https://github.com/Seeed-Studio/mm-iot-esp32.git
```

**ステップ 2.** IDF変数をエクスポート

```bash
cd ~/mm-iot-esp32
source export.sh
```

**ステップ 3.** MMIOT_ROOT環境変数を設定

一時的な使用の場合：

```bash
export MMIOT_ROOT=~/mm-iot-esp32
```

永続的な使用の場合、シェル設定ファイルに追加：

```bash
# For bash users (add to ~/.bash_profile or ~/.bashrc)
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.bash_profile

# For zsh users (add to ~/.zshrc)
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.zshrc
```

その後、シェル設定を再読み込み：

```bash
# For bash
source ~/.bash_profile

# For zsh
source ~/.zshrc
```

</TabItem>

<TabItem value="Linux" label="Linux">

**ステップ 1.** リポジトリをクローン

```bash
cd ~
git clone https://github.com/Seeed-Studio/mm-iot-esp32.git
```

**ステップ 2.** IDF変数をエクスポート

```bash
cd ~/mm-iot-esp32
source export.sh
```

**ステップ 3.** MMIOT_ROOT環境変数を設定

一時的な使用の場合：

```bash
export MMIOT_ROOT=~/mm-iot-esp32
```

永続的な使用の場合、シェル設定ファイルに追加：

```bash
# For bash users
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.bashrc

# For zsh users
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.zshrc
```

その後、シェル設定を再読み込み：

```bash
# For bash
source ~/.bashrc

# For zsh
source ~/.zshrc
```

</TabItem>
</Tabs>

:::tip
MMIOT_ROOT環境変数を設定する際は、絶対パスを使用してください。相対パスを使用すると、プロジェクトのビルド時に問題が発生する可能性があります。
:::

:::note
環境変数を設定した後、変更を有効にするためにターミナルを閉じて再度開く必要がある場合があります。
:::

## サンプルファームウェアのビルド

mm-iot-esp32リポジトリには、さまざまな機能を実演するいくつかのサンプルアプリケーションが含まれています。これらのサンプルをビルドして設定する方法は以下の通りです：

### サンプルアプリケーションの場所

すべてのサンプルアプリケーションは、リポジトリの`examples`ディレクトリにあります。利用可能なサンプルには以下が含まれます：

- `scan`：Wi-Fiスキャンサンプル
- `iperf`：iperfサーバーサンプル
- `sta_reboot`：Wi-Fiステーション再起動サンプル
- `sta_connect`：Wi-Fiステーション接続サンプル
- `web_camera_server`：Webカメラサーバーサンプル
- その他...

### ネットワーク認証情報の設定

ファームウェアをビルドする前に、サンプルの設定ファイルでネットワーク設定を構成する必要があります：

1. 選択したサンプルディレクトリに移動：

```bash
cd $MMIOT_ROOT/examples/example_name
```

2. 設定ファイルを編集：

```bash
# Open the configuration file
nano src/mm_app_loadconfig.c
```

3. このファイルで以下を変更できます：

- 国コード（製品が現在北米でのみ利用可能なため、**US**に設定する必要があります）
- Wi-Fi HaLowネットワーク認証情報
- その他のネットワーク関連パラメータ

:::caution
国コードに関する重要な注意事項：

- この製品は現在北米市場でのみ利用可能なため、国コードは「US」に設定する必要があります
- 規制要件により、この製品はまだ他の地域では利用できません
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

- `idf.py set-target`コマンドは、各サンプルに対して一度だけ実行する必要があります
- `idf.py fullclean`は、以前のビルド成果物をすべて削除してクリーンビルドを確実にします
- ビルドが成功すると、ファームウェアバイナリは`build`ディレクトリに配置されます

:::

### ビルド出力

ビルドが成功すると、以下のような出力が表示されるはずです：

```bash
# Project build complete. To flash, run this command:
idf.py -p (PORT) flash
```

以下では、いくつかのサンプルを実演します。

## サンプル 1. scan

このサンプルは、近くで利用可能なWi-Fi HaLowネットワークをスキャンする方法を実演します。scanサンプルをビルドして実行するには、以下の手順に従ってください：

### ステップ 1：スキャンサンプルに移動

```bash
cd ~/mm-iot-esp32/example/scan
```

### ステップ 2：国コードを設定

1. 設定ファイルを開く：

```bash
nano main/src/mm_app_loadconfig.c
```

2. 国コード行を見つけて変更：

```c
#define COUNTRY_CODE "US"  // Must use "US" as the product is only available for North America
```

### ステップ 3：ハードウェアセットアップ

1. Wio-WM6108 Wi-Fi HaLowモジュールをXIAO ESP32S3に接続

2. XIAO ESP32S3をUSB経由でコンピューターに接続

### ステップ 4：ビルドとフラッシュ

以下のコマンドを順番に実行：

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### ステップ 5：結果を監視

すべてが正常に動作している場合：

- フラッシュ後、シリアルモニターが自動的に開始されます
- プログラムはWi-Fi HaLowネットワークのスキャンを開始します
- Wi-Fi HaLowゲートウェイが範囲内にある場合、その情報がシリアルモニターに表示されます

シリアルモニターでの出力例：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/9.png" style={{width:1000, height:'auto'}}/></div>

:::tip

- ネットワークを検出するために、近くにWi-Fi HaLowゲートウェイがあることを確認してください
- スキャンプロセスは継続的に実行されるため、利用可能なネットワークの定期的な更新が表示されます
- Ctrl+Cを押してモニターを停止し、プログラムを終了します

:::

:::note
ネットワークが表示されない場合：

- Wi-Fi HaLowゲートウェイの電源が入っており、正常に動作していることを確認してください
- ゲートウェイの範囲内にいることを確認してください
- モジュールがXIAO ESP32S3に適切に接続されていることを確認してください

:::

## サンプル 2. iperf

このサンプルは、iPerfを使用してWi-Fi HaLow接続のネットワークパフォーマンスをテストする方法を実演します。iPerfサンプルをビルドして実行するには、以下の手順に従ってください：

### ステップ 1：iPerfサンプルに移動

```bash
cd ~/mm-iot-esp32/example/iperf
```

### ステップ 2：ネットワーク設定を構成

1. 設定ファイルを開く：

```bash
nano main/src/mm_app_loadconfig.c
```

2. 以下のパラメータを変更：

```cpp
// Set country code (must be "US" for North America)
#define COUNTRY_CODE "US"

// Set your Wi-Fi HaLow network credentials
#define SSID             Your_HaLow_SSID           // Replace with your network name
#define SAE_PASSPHRASE   Your_Password             // Replace with your network password
```

### ステップ 3：ハードウェアセットアップ

1. Wio-WM6108 Wi-Fi HaLowモジュールをXIAO ESP32S3に接続
2. XIAO ESP32S3をUSB経由でコンピューターに接続

### ステップ 4: ビルドとフラッシュ

以下のコマンドを順番に実行します：

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### ステップ 5: パフォーマンステストの実行

プログラムが正常に動作すると、iPerfサービスが開始されます。これで、Wi-Fi HaLowゲートウェイからパフォーマンステストを実行できます。

IPv4テストの場合、ゲートウェイで以下のコマンドを実行します：

```bash
iperf -c <device_ip> -p <port> -i 1 -u -b 20M
```

IPv6テストの場合、ゲートウェイで以下のコマンドを実行します：

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
- テストのニーズに応じて帯域幅（-bパラメータ）を調整できます

:::

:::note
よくある問題と解決策：

- 接続に失敗する場合は、ネットワーク認証情報を確認してください
- iPerfサービスが開始されない場合は、ハードウェア接続を確認してください
- パフォーマンスが悪い場合は、ゲートウェイの良好な範囲内にいることを確認してください

:::

## 例 3. web_camera_server

この例では、XIAO ESP32S3 SenseからWi-Fi HaLowネットワーク経由でカメラフィードをストリーミングする方法を示します。以下の手順に従ってWebカメラサーバーをビルドして実行してください：

### ステップ 1: Webカメラの例に移動

```bash
cd ~/mm-iot-esp32/example/web_camera_serve
```

### ステップ 2: ネットワーク設定の構成

1. 設定ファイルを開きます：

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

1. Wio-WM6108 Wi-Fi HaLowモジュールをXIAO ESP32S3 Senseに接続します
2. XIAO ESP32S3 Senseのカメラモジュールが適切に接続されていることを確認します
3. XIAO ESP32S3 SenseをUSB経由でコンピュータに接続します

### ステップ 4: ビルドとフラッシュ

以下のコマンドを順番に実行します：

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### ステップ 5: カメラフィードへのアクセス

プログラムが正常に動作したら：

1. シリアルモニターに表示されるIPアドレスをメモします
2. Wi-Fi HaLowゲートウェイと同じネットワークに接続されている任意のデバイスでWebブラウザを開きます
3. ブラウザのアドレスバーにIPアドレスを入力します
4. XIAO ESP32S3 Senseからのライブカメラフィードが表示されます

URL例：

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
- 画像が表示されない場合は、カメラモジュールが適切に接続されていることを確認してください
- ストリームが遅い場合は、Wi-Fi HaLowゲートウェイに近づいてみてください

:::

## リソース

- **[GITHUB]** [mm-iot-esp32 リポジトリ](https://github.com/Seeed-Studio/mm-iot-esp32.git)
- **[GITHUB]** [mm-iot ドキュメント](https://github.com/Seeed-Studio/mm-iot-esp32/blob/main/documentation.html)
- **[PDF]** [WI-FI_HALOW_FGH100M_EXT01_V30_SCH_20241107](https://files.seeedstudio.com/wiki/wifi_halow/res/WI-FI_HALOW_FGH100M_EXT01_V30_SCH_20241107.pdf)
- **[KiCAD]** [WI-FI_HALOW_FGH100M_EXT01_V30 KiCAD PCBファイル](https://files.seeedstudio.com/wiki/wifi_halow/res/WI-FI_HALOW_FGH100M_EXT01_V30.kicad_pcb)
- **[PDF]** [Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0](https://files.seeedstudio.com/wiki/wifi_halow/res/Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0_Preliminary_20241018.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
