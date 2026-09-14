---
description: XIAO ESP32S3 と Wio-WM6108 Wi-Fi HaLow モジュールのチュートリアル
title: XIAO 向け Wi-Fi HaLow モジュール入門
image: https://files.seeedstudio.com/wiki/wifi_halow/pic/20.webp
slug: /getting_started_with_wifi_halow_module_for_xiao
sku: 109100041
sidebar_class_name: hidden
last_update:
  date: 02/12/2025
  author: Citric
createdAt: '2025-02-13'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/ja/getting_started_with_wifi_halow_module_for_xiao/
---


# XIAO 向け Wi-Fi HaLow モジュール入門

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/20.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-HaLow-Module-for-XIAO-p-6395.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## はじめに

このチュートリアルでは、Wio-WM6108 Wi-Fi HaLow モジュールを XIAO ESP32S3 と組み合わせて Wi-Fi HaLow クライアントを構築する手順を説明します。Wi-Fi HaLow（IEEE 802.11ah）は、サブ 1 GHz 帯で動作する、長距離かつ低消費電力の IoT アプリケーション向けに設計された規格です。本チュートリアルでは、ハードウェアのセットアップ、ソフトウェアの設定方法を順を追って説明し、IoT プロジェクト向けに Wi-Fi HaLow 接続を確立する方法をデモします。

### 主な特長

- 見通し距離で最大 1km の長距離 Wi-Fi 接続
- IoT デバイスに最適な低消費電力
- 壁や障害物をよりよく透過できるサブ 1 GHz 帯で動作
- XIAO ESP32S3 開発ボードと互換
- 分かりやすいセットアップおよび設定手順

## ハードウェア概要

次の表に、Wio-WM6108 Wi-Fi HaLow モジュールの主な仕様を示します。

| 特性 | 値 | 単位 |
|:-------------:|:-----:|:----:|
| 動作電圧 | 3.3（デジタル）/ 5.0（RF フロントエンド）| V |
| 動作電流 | TBD | mA |
| Wi-Fi プロトコル | IEEE 802.11ah | - |
| 周波数帯 | サブ 1 GHz | - |
| 通信距離 | 最大 1 まで | km |
| インターフェース | SPI | - |
| 寸法 | TBD | mm |

:::caution Both 3.3/5.0V power supply are required
このボードには、**2 つ**の独立した電源入力が必要です：
- **3.3V パッド**は、モジュールのデジタル電源レールに給電します。
- **5.0V パッド**は、別系統のレールを介して RF フロントエンド（TX パワーアンプ）に給電します。

モジュールを XIAO 拡張ボードに挿し込んだ場合、両方の電源レールは拡張コネクタ経由で自動的に供給されます。

しかし、**パッドインターフェース経由でホストシステム（例：SPI 接続の Raspberry Pi）に配線する場合は、5V、3.3V、GND をすべて接続する必要があります。**

3.3V のみを接続した場合でも、モジュールはファームウェアをロードして正常に受信することはできますが、**定格出力で送信することはできません。**
:::

## Wi-Fi HaLow とは？

Wi-Fi HaLow は、IoT（Internet of Things）アプリケーション向けに特別に設計された IEEE 802.11ah 規格に基づく無線ネットワークプロトコルです。サブ 1 GHz 帯（一般的には 900 MHz 帯）で動作し、従来の Wi-Fi と比べていくつかの大きな利点があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/Wi-Fi_HaLow_frequency_band_graphic.png" style={{width:800, height:'auto'}}/></div>

1. **長距離通信**：Wi-Fi HaLow は、見通し条件下で最大 1km の距離を実現でき、従来の Wi-Fi の通信距離を大きく上回ります。

2. **優れた障害物透過性**：低い周波数の信号は、壁やその他の障害物をよりよく透過できるため、厳しい環境に最適です。

3. **低消費電力**：IoT デバイスを念頭に設計されており、接続デバイスのバッテリー寿命を数年単位で実現できます。

4. **高いスケーラビリティ**：1 つのアクセスポイントに数千台のデバイスを接続でき、大規模な IoT 展開に最適です。

5. **セキュリティ**：WPA3 暗号化を含む Wi-Fi ファミリの堅牢なセキュリティ機能を継承しています。

### Wi-Fi HaLow が重要な理由

Wi-Fi HaLow は、長距離接続、低消費電力、そして多数のデバイスを同時に扱う必要がある IoT アプリケーションの高まるニーズに応えます。従来の Wi-Fi と LPWAN 技術のギャップを埋め、次のような用途に適したソリューションを提供します。

- **産業用 IoT**：工場、倉庫、産業環境における信頼性の高い接続を実現。
- **スマート農業**：広大な農地にわたるセンサーネットワークのカバレッジを提供。
- **スマートシティ**：都市環境における多数の接続デバイスから成る広域ネットワークをサポート。
- **資産トラッキング**：貴重な資産や機器を長距離で追跡可能。

Wi-Fi の親しみやすさと、低消費電力・長距離接続という利点を組み合わせることで、Wi-Fi HaLow はさまざまな産業分野における IoT アプリケーション拡大の中核的な役割を担うことが期待されています。

### Wi-Fi HaLow システムアーキテクチャ

典型的な Wi-Fi HaLow ネットワークは、長距離かつ低消費電力の IoT 接続を実現するために連携して動作する、いくつかの主要コンポーネントで構成されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/wifi-halow-architecture.png" style={{width:800, height:'auto'}}/></div>

1. **アクセスポイント（AP）**：Wi-Fi HaLow ネットワークの中心となるハブであり、デバイスとインターネット間の接続管理およびデータのルーティングを担当します。

2. **ステーション（STA）**：アクセスポイントに接続するクライアントデバイスです。センサー、アクチュエータ、その他の IoT デバイスが該当します。

3. **ゲートウェイ**：Wi-Fi HaLow ネットワークと他のネットワーク（例：Ethernet やセルラー）との間のブリッジとして機能します。

このチュートリアルでは、XIAO ESP32S3 を Wi-Fi HaLow アクセスポイントに接続するステーション（STA）クライアントとして設定します。XIAO は WM6108 モジュールを使用して HaLow 接続を確立・維持します。

## MM-IoT-SDK フレームワーク

WM6108 モジュールは [MorseMicro の MM-IoT-SDK](https://github.com/MorseMicro/mm-iot-esp32) を利用しており、次の機能を提供します。

- **マルチプロトコル対応**：さまざまな IoT プロトコルとのシームレスな統合を実現
- **低消費電力マネジメント**：バッテリー駆動デバイス向けに電力消費を最適化
- **セキュリティ機能**：暗号化および認証メカニズムを内蔵
- **容易な設定**：ネットワークのセットアップと管理のためのシンプルな API

MM-IoT-SDK のアーキテクチャは、いくつかのレイヤーで構成されています。

1. **ハードウェア抽象化レイヤー（HAL）**：さまざまなハードウェアプラットフォーム向けに統一されたインターフェースを提供
2. **ネットワークスタック**：Wi-Fi HaLow プロトコルスタックを実装
3. **アプリケーションレイヤー**：アプリケーション開発およびデバイス管理のための API を提供

このフレームワークにより、開発者は柔軟性を保ちながら、Wi-Fi HaLow 機能を迅速に実装できます。

## 必要なもの

このチュートリアルを実行するために必要なものは次のとおりです。

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
このチュートリアルは XIAO ESP32-S3 シリーズにのみ適用されます。本チュートリアルでは、例として XIAO ESP32S3 Sense を使用します。
:::

上記に加えて、WiFi-Halow 用に適した追加アンテナを用意する必要がある場合があります。以下は検証済みで推奨されるアンテナモデルです。

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

アンテナを WiFi-Halow モジュールに接続するには、**SMA to I-PEX Antenna Cable** を別途購入する必要がある場合があります。

<div class="table-center">
    <table align="center">
        <tr>
            <th>SMA to I-PEX Antenna Cable</th>
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

初めて使用する場合は、アンテナの取り付けについて以下の動画を参照してください。

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/wifi_halow/pic/install_xiao_wifi_halow_module.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## ESP-IDF v5.1.1 をインストールする

プログラミングを始める前に、PC に ESP-IDF v5.1.1 をインストールする必要があります。ESP-IDF は ESP32 シリーズチップ向けの公式開発フレームワークです。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Windows" label="Windows">

**ステップ 1.** Windows 用 ESP-IDF Tools インストーラをダウンロードする

Windows 用の [ESP-IDF Tools Installer](https://dl.espressif.com/dl/esp-idf/?idf=5.1.1) をダウンロードします。このインストーラには、ESP-IDF 開発に必要なすべてのツールが含まれています。

**ステップ 2.** インストーラを実行する

1. ダウンロードしたインストーラを管理者として実行します
2. 画面の指示に従って Python、Git などの必要なツールをインストールします
3. プロンプトが表示されたら、次のオプションを選択します：
   - ESP-IDF v5.1.1 をインストール
   - Python をインストール
   - Git をインストール
   - ESP-IDF Tools を Path に追加

**ステップ 3.** インストールを確認する

新しいコマンドプロンプトを開き、次を実行します：

```bash
esp-idf --version
```

インストールが正常に完了していれば、バージョン番号 5.1.1 が表示されます。

</TabItem>

<TabItem value="MacOS" label="MacOS">

**ステップ 1.** 前提パッケージをインストールする

Terminal を開き、まだ Homebrew をインストールしていない場合はインストールします：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

必要なパッケージをインストールします：

```bash
brew install cmake ninja dfu-util
```

**ステップ 2.** ESP-IDF をダウンロードしてインストールする

```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.1.1 --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
./install.sh esp32s3
```

**ステップ 3.** 環境変数を設定する

```bash
. $HOME/esp/esp-idf/export.sh
```

新しいターミナルを開いたときに自動的に環境変数が設定されるように、この行を `~/.profile` または `~/.zshrc` に追加します。

</TabItem>

<TabItem value="Linux" label="Linux">

**ステップ 1.** 前提パッケージをインストールする

Ubuntu および Debian の場合：

```bash
sudo apt-get install git wget flex bison gperf python3 python3-pip python3-setuptools cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0
```

その他のディストリビューションでは、同等のパッケージをインストールしてください。

**ステップ 2.** ESP-IDF をダウンロードしてインストールする

```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.1.1 --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
./install.sh esp32s3
```

**ステップ 3.** 環境変数を設定する

```bash
. $HOME/esp/esp-idf/export.sh
```

新しいターミナルを開いたときに自動的に環境変数が設定されるように、この行を `~/.bashrc` に追加します。

</TabItem>
</Tabs>

:::tip
インストール後、すべての環境変数が正しく設定されるように、PC を再起動する必要がある場合があります。
:::

:::note
ESP-IDF v5.1.1 のインストールに関するより詳細な手順については、Espressif 公式ドキュメントを参照してください：

- [ESP-IDF 入門ガイド](https://docs.espressif.com/projects/esp-idf/en/v5.1.1/esp32s3/get-started/index.html)

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

**ステップ 2.** IDF 変数をエクスポートする

```bash
cd %USERPROFILE%\mm-iot-esp32
export.bat
```

**ステップ 3.** MMIOT_ROOT 環境変数を設定する

Windows のシステムのプロパティから永続的に設定できます：

1. システムのプロパティを開きます（Win + R を押して `sysdm.cpl` と入力）
2. "Environment Variables" をクリックします
3. "User variables" の下で "New" をクリックします
4. 変数名：`MMIOT_ROOT`
5. 変数値：`C:\Users\YourUsername\mm-iot-esp32`（実際のパスに置き換えてください）
6. "OK" をクリックして保存します

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

**ステップ 2.** IDF 変数をエクスポートする

```bash
cd ~/mm-iot-esp32
source export.sh
```

**ステップ 3.** MMIOT_ROOT 環境変数を設定する

一時的に使用する場合：

```bash
export MMIOT_ROOT=~/mm-iot-esp32
```

永続的に使用する場合は、シェルの設定ファイルに追加します：

```bash
# For bash users (add to ~/.bash_profile or ~/.bashrc)
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.bash_profile

# For zsh users (add to ~/.zshrc)
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.zshrc
```

その後、シェルの設定を再読み込みします：

```bash
# For bash
source ~/.bash_profile

# For zsh
source ~/.zshrc
```

</TabItem>

<TabItem value="Linux" label="Linux">

**ステップ 1.** リポジトリをクローンする

```bash
cd ~
git clone https://github.com/Seeed-Studio/mm-iot-esp32.git
```

**ステップ 2.** IDF 変数をエクスポートする

```bash
cd ~/mm-iot-esp32
source export.sh
```

**ステップ 3.** MMIOT_ROOT 環境変数を設定する

一時的に使用する場合：

```bash
export MMIOT_ROOT=~/mm-iot-esp32
```

永続的に使用する場合は、シェルの設定ファイルに追加します：

```bash
# For bash users
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.bashrc

# For zsh users
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.zshrc
```

その後、シェルの設定を再読み込みします：

```bash
# For bash
source ~/.bashrc

# For zsh
source ~/.zshrc
```

</TabItem>
</Tabs>

:::tip
MMIOT_ROOT 環境変数を設定する際は、必ず絶対パスを使用してください。相対パスを使用すると、プロジェクトのビルド時に問題が発生する可能性があります。
:::

:::note
環境変数を設定した後、変更を有効にするにはターミナルを一度閉じて再度開く必要がある場合があります。
:::

## サンプルファームウェアのビルド

mm-iot-esp32 リポジトリには、さまざまな機能を示す複数のサンプルアプリケーションが含まれています。ここでは、これらのサンプルをビルドおよび設定する方法を説明します：

### サンプルアプリケーションの場所

すべてのサンプルアプリケーションは、リポジトリの `examples` ディレクトリ内にあります。利用可能なサンプルには次のものがあります：

- `scan`: Wi-Fi スキャンのサンプル
- `iperf`: iperf サーバーのサンプル
- `sta_reboot`: Wi-Fi ステーションの再起動サンプル
- `sta_connect`: Wi-Fi ステーション接続サンプル
- `web_camera_server`: Web カメラサーバーのサンプル
- など

### ネットワーク認証情報の設定

ファームウェアをビルドする前に、サンプルの設定ファイル内でネットワーク設定を行う必要があります：

1. 選択したサンプルのディレクトリに移動します：

```bash
cd $MMIOT_ROOT/examples/example_name
```

2. 設定ファイルを編集します：

```bash
# Open the configuration file
nano src/mm_app_loadconfig.c
```

3. このファイルでは、次の項目を変更できます：

- 国コード（現在この製品は北米のみで利用可能なため、**US** に設定する必要があります）
- Wi-Fi HaLow ネットワークの認証情報
- その他のネットワーク関連パラメータ

:::caution
国コードに関する重要な注意事項：

- この製品は現在北米市場でのみ利用可能なため、国コードは必ず "US" に設定する必要があります
- 規制要件により、本製品は他の地域ではまだ利用できません
- 北米以外の地域で本製品を使用すると、現地の規制に違反する可能性があります

:::

### ビルド手順

ネットワーク設定を行ったら、次のコマンドを使用してファームウェアをビルドできます：

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
```

:::note

- `idf.py set-target` コマンドは、各サンプルごとに一度だけ実行すれば十分です
- `idf.py fullclean` は、以前のビルド成果物をすべて削除してクリーンビルドを行います
- ビルドが正常に完了すると、ファームウェアのバイナリは `build` ディレクトリに生成されます

:::

### ビルド出力

ビルドが正常に完了すると、次のような出力が表示されます：

```bash
# Project build complete. To flash, run this command:
idf.py -p (PORT) flash
```

以下では、いくつかのサンプルを紹介します。

## サンプル 1. scan

このサンプルでは、周囲で利用可能な Wi-Fi HaLow ネットワークをスキャンする方法を示します。以下の手順に従って、scan サンプルをビルドして実行します：

### ステップ 1: scan サンプルへ移動する

```bash
cd ~/mm-iot-esp32/example/scan
```

### ステップ 2: 国コードを設定する

1. 設定ファイルを開きます：

```bash
nano main/src/mm_app_loadconfig.c
```

2. 国コードの行を探して変更します：

```c
#define COUNTRY_CODE "US"  // Must use "US" as the product is only available for North America
```

### ステップ 3: ハードウェアのセットアップ

1. Wio-WM6108 Wi-Fi HaLow モジュールを XIAO ESP32S3 に接続します

2. XIAO ESP32S3 を USB 経由で PC に接続します

### ステップ 4: ビルドと書き込み

次のコマンドを順番に実行します：

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### ステップ 5: 結果のモニタリング

すべてが正しく動作していれば：

- 書き込み後、自動的にシリアルモニタが起動します
- プログラムが Wi-Fi HaLow ネットワークのスキャンを開始します
- 範囲内に Wi-Fi HaLow ゲートウェイがある場合、その情報がシリアルモニタに表示されます

シリアルモニタでの出力例：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/9.png" style={{width:1000, height:'auto'}}/></div>

:::tip

- ネットワークを検出するには、近くに Wi-Fi HaLow ゲートウェイがあることを確認してください
- スキャン処理は継続的に実行されるため、利用可能なネットワークの情報が定期的に更新されます
- モニタを停止してプログラムを終了するには Ctrl+C を押します

:::

:::note
ネットワークが何も表示されない場合：

- Wi-Fi HaLow ゲートウェイの電源が入っており、正常に動作していることを確認してください
- ゲートウェイの通信範囲内にいることを確認します
- モジュールが XIAO ESP32S3 に正しく接続されていることを確認します

:::

## 例 2. iperf

この例では、iPerf を使用して Wi-Fi HaLow 接続のネットワーク性能をテストする方法を示します。以下の手順に従って iPerf のサンプルをビルドして実行します：

### ステップ 1: iPerf サンプルへ移動

```bash
cd ~/mm-iot-esp32/example/iperf
```

### ステップ 2: ネットワーク設定を構成

1. 設定ファイルを開きます：

```bash
nano main/src/mm_app_loadconfig.c
```

2. 次のパラメータを変更します：

```cpp
// Set country code (must be "US" for North America)
#define COUNTRY_CODE "US"

// Set your Wi-Fi HaLow network credentials
#define SSID             Your_HaLow_SSID           // Replace with your network name
#define SAE_PASSPHRASE   Your_Password             // Replace with your network password
```

### ステップ 3: ハードウェアのセットアップ

1. Wio-WM6108 Wi-Fi HaLow モジュールを XIAO ESP32S3 に接続します
2. XIAO ESP32S3 を USB 経由でコンピュータに接続します

### ステップ 4: ビルドと書き込み

次のコマンドを順番に実行します：

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### ステップ 5: 性能テストを実行

プログラムが正常に動作すると、iPerf サービスが起動します。これで Wi-Fi HaLow ゲートウェイから性能テストを実行できます。

IPv4 テストの場合は、ゲートウェイ上で次のコマンドを実行します：

```bash
iperf -c <device_ip> -p <port> -i 1 -u -b 20M
```

IPv6 テストの場合は、ゲートウェイ上で次のコマンドを実行します：

```bash
iperf -c <device_ip>%wlan0 -p <port> -i 1 -V -u -b 20M
```

パラメータの説明：

- `-c`: クライアントモードで実行
- `-p`: ポート番号
- `-i`: レポート間隔（1 秒）
- `-u`: UDP プロトコルを使用
- `-b`: 目標帯域幅（20 Mbps）
- `-V`: IPv6 モード（IPv6 テスト時のみ）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/11.png" style={{width:1000, height:'auto'}}/></div>

:::tip

- 性能テストを実行する前に、デバイスが Wi-Fi HaLow ネットワークに正常に接続されていることを確認してください
- 接続後、デバイスの IP アドレスはシリアルモニタに表示されます
- テストの目的に応じて帯域幅（-b パラメータ）を調整できます

:::

:::note
よくある問題と解決策：

- 接続に失敗する場合は、ネットワーク認証情報を確認してください
- iPerf サービスが起動しない場合は、ハードウェア接続を確認してください
- 性能が低い場合は、ゲートウェイとの距離が適切か確認してください

:::

## 例 3. web_camera_server

この例では、XIAO ESP32S3 Sense から Wi-Fi HaLow ネットワーク経由でカメラ映像をストリーミングする方法を示します。以下の手順に従って Web カメラサーバーをビルドして実行します：

### ステップ 1: Web カメラのサンプルへ移動

```bash
cd ~/mm-iot-esp32/example/web_camera_serve
```

### ステップ 2: ネットワーク設定を構成

1. 設定ファイルを開きます：

```bash
nano main/src/mm_app_loadconfig.c
```

2. Wi-Fi HaLow の認証情報を変更します：

```cpp
// Set your Wi-Fi HaLow network credentials
#define SSID              Your_HaLow_SSID           // Replace with your network name
#define SAE_PASSPHRASE    Your_Password             // Replace with your network password
```

### ステップ 3: ハードウェアのセットアップ

1. Wio-WM6108 Wi-Fi HaLow モジュールを XIAO ESP32S3 Sense に接続します
2. XIAO ESP32S3 Sense 上のカメラモジュールが正しく接続されていることを確認します
3. XIAO ESP32S3 Sense を USB 経由でコンピュータに接続します

### ステップ 4: ビルドと書き込み

次のコマンドを順番に実行します：

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### ステップ 5: カメラ映像にアクセス

プログラムが正常に動作したら：

1. シリアルモニタに表示される IP アドレスを確認します
2. Wi-Fi HaLow ゲートウェイと同じネットワークに接続されている任意のデバイスで Web ブラウザを開きます
3. ブラウザのアドレスバーにその IP アドレスを入力します
4. XIAO ESP32S3 Sense からのライブカメラ映像が表示されるはずです

URL の例：

```
http://192.168.4.1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/14.png" style={{width:1000, height:'auto'}}/></div>

:::tip
最高のストリーミング体験のために：

- より良い画質のために十分な照明条件を確保してください
- XIAO ESP32S3 Sense を Wi-Fi HaLow ゲートウェイの良好な通信範囲内に保ってください
- 最新の Web ブラウザを使用すると最適な互換性が得られます

:::

:::note
トラブルシューティング：

- カメラ映像にアクセスできない場合は、デバイスが Wi-Fi HaLow ゲートウェイと同じネットワーク上にあることを確認してください
- 画像が表示されない場合は、カメラモジュールが正しく接続されているか確認してください
- ストリームが遅延する場合は、Wi-Fi HaLow ゲートウェイに近づいてみてください

:::

## リソース

- **[GITHUB]** [mm-iot-esp32 リポジトリ](https://github.com/Seeed-Studio/mm-iot-esp32.git)
- **[GITHUB]** [mm-iot ドキュメント](https://github.com/Seeed-Studio/mm-iot-esp32/blob/main/documentation.html)
- **[PDF]** [WI-FI_HALOW_FGH100M_EXT01_V30_SCH_20241107](https://files.seeedstudio.com/wiki/wifi_halow/res/WI-FI_HALOW_FGH100M_EXT01_V30_SCH_20241107.pdf)
- **[KiCAD]** [WI-FI_HALOW_FGH100M_EXT01_V30 KiCAD PCB ファイル](https://files.seeedstudio.com/wiki/wifi_halow/res/WI-FI_HALOW_FGH100M_EXT01_V30.kicad_pcb)
- **[PDF]** [Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0](https://files.seeedstudio.com/wiki/wifi_halow/res/Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0_Preliminary_20241018.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
