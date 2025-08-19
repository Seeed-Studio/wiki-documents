---
description: XIAO ESP32S3とWio-WM6180 Wi-Fi HaLowモジュールのチュートリアル
title: XIAO向けWi-Fi HaLowモジュールの使い方
image: https://files.seeedstudio.com/wiki/wifi_halow/pic/20.webp
slug: /ja/getting_started_with_wifi_halow_module_for_xiao
sidebar_class_name: hidden
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO向けWi-Fi HaLowモジュールの使い方

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/20.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-Halow-Module-for-XIAO-p-6395.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## はじめに

このチュートリアルでは、XIAO ESP32S3とWio-WM6180 Wi-Fi HaLowモジュールを使用してWi-Fi HaLowクライアントを構築する方法を説明します。Wi-Fi HaLow（IEEE 802.11ah）は、IoTアプリケーション向けに設計された長距離・低消費電力の通信技術で、1GHz未満の周波数帯域で動作します。本チュートリアルでは、ハードウェアのセットアップ、ソフトウェアの設定、そしてIoTプロジェクトでWi-Fi HaLow接続を確立する方法を紹介します。

### 主な特徴

- 最大1kmの見通し距離での長距離Wi-Fi接続
- IoTデバイスに最適な低消費電力
- 壁や障害物を通り抜ける優れた浸透性を持つ1GHz未満の動作
- XIAO ESP32S3開発ボードとの互換性
- 簡単に従えるセットアップと設定プロセス

## ハードウェア概要

以下の表は、Wio-WM6180 Wi-Fi HaLowモジュールの主な仕様を示しています：

| 特性 | 値 | 単位 |
|:-------------:|:-----:|:----:|
| 動作電圧 | 3.3 | V |
| 動作電流 | TBD | mA |
| Wi-Fiプロトコル | IEEE 802.11ah | - |
| 周波数帯域 | 1GHz未満 | - |
| 範囲 | 最大1 | km |
| インターフェース | SPI | - |
| 寸法 | TBD | mm |

## Wi-Fi HaLowとは？

Wi-Fi HaLowは、IoTアプリケーション向けに設計されたIEEE 802.11ah標準に基づく無線ネットワークプロトコルです。通常900MHzの周波数帯域で動作するWi-Fi HaLowは、従来のWi-Fiに比べていくつかの重要な利点を提供します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/Wi-Fi_HaLow_frequency_band_graphic.png" style={{width:800, height:'auto'}}/></div>

1. **拡張された範囲**: Wi-Fi HaLowは、見通し条件で最大1kmの距離を達成でき、従来のWi-Fiの範囲を大幅に超えています。

2. **改善された浸透性**: 低周波数信号は壁やその他の障害物をより効果的に通過できるため、困難な環境に最適です。

3. **低消費電力**: IoTデバイス向けに設計されており、接続されたデバイスのバッテリー寿命を数年間維持できます。

4. **スケーラビリティ**: 1つのアクセスポイントに数千のデバイスを接続でき、大規模なIoT展開に最適です。

5. **セキュリティ**: WPA3暗号化を含むWi-Fiファミリーの堅牢なセキュリティ機能を継承しています。

### Wi-Fi HaLowが重要な理由

Wi-Fi HaLowは、長距離接続、低消費電力、そして多数のデバイスを同時に扱う必要があるIoTアプリケーションの増大するニーズに対応します。これは従来のWi-FiとLPWAN技術の間のギャップを埋め、以下のような利点を提供します：

- **産業用IoT**: 工場、倉庫、産業環境での信頼性の高い接続を可能にします。
- **スマート農業**: センサーネットワークのために広大な農業地域をカバーします。
- **スマートシティ**: 都市環境での広範な接続デバイスネットワークをサポートします。
- **資産追跡**: 貴重な資産や機器の長距離追跡を可能にします。

Wi-Fiの使いやすさと低消費電力・長距離接続の利点を組み合わせることで、Wi-Fi HaLowはさまざまな業界でのIoTアプリケーションの拡大において重要な役割を果たすことが期待されています。

### Wi-Fi HaLowシステムアーキテクチャ

典型的なWi-Fi HaLowネットワークは、長距離・低消費電力のIoT接続を可能にするために連携するいくつかの主要コンポーネントで構成されています：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/wifi-halow-architecture.png" style={{width:800, height:'auto'}}/></div>

1. **アクセスポイント（AP）**: Wi-Fi HaLowネットワークの中心的なハブで、デバイスとインターネット間の接続とデータルーティングを管理します。

2. **ステーション（STA）**: アクセスポイントに接続するクライアントデバイス。これらはセンサー、アクチュエーター、またはその他のIoTデバイスである可能性があります。

3. **ゲートウェイ**: Wi-Fi HaLowネットワークと他のネットワーク（例：イーサネットやセルラー）を橋渡しする役割を果たします。

このチュートリアルでは、XIAO ESP32S3をWi-Fi HaLowアクセスポイントに接続するステーション（STA）クライアントとして設定します。XIAOはWM6180モジュールを使用してHaLow接続を確立および維持します。

## MM-IoT-SDK フレームワーク

WM6180モジュールは、[MorseMicroのMM-IoT-SDK](https://github.com/MorseMicro/mm-iot-esp32)を利用しており、以下の機能を提供します：

- **マルチプロトコル対応**: 様々なIoTプロトコルとのシームレスな統合を可能にします
- **低消費電力管理**: バッテリー駆動デバイス向けに最適化された電力消費
- **セキュリティ機能**: 組み込みの暗号化と認証メカニズム
- **簡易設定**: ネットワーク設定と管理のための簡易化されたAPI

MM-IoT-SDKのアーキテクチャは以下の層で構成されています：

1. **ハードウェア抽象化層 (HAL)**: 異なるハードウェアプラットフォームに対する統一されたインターフェースを提供
2. **ネットワークスタック**: Wi-Fi HaLowプロトコルスタックを実装
3. **アプリケーション層**: アプリケーション開発とデバイス管理のためのAPIを提供

このフレームワークにより、開発者はWi-Fi HaLow機能を迅速に実装しながら、カスタムアプリケーションの柔軟性を維持することができます。

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
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-Halow-Module-for-XIAO-p-6395.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

:::note
このチュートリアルはすべてのXIAO ESP32シリーズに適用可能です。このチュートリアルではXIAO ESP32S3 Senseを例として使用します。
:::

上記に加えて、WiFi-HaLow用に適した追加のアンテナを準備する必要がある場合があります。以下は検証済みの推奨アンテナモデルです。

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
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/External-Antenna-915MHZ-2-6dBi-SMA-L195mm-p-5047.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

WiFi-HaLowモジュールにアンテナを接続するには、**SMA to I-PEXアンテナケーブル**を購入する必要がある場合があります。

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
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

初めて使用する場合は、以下のビデオを参考にしてアンテナを取り付けてください。

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/wifi_halow/pic/install_xiao_wifi_halow_module.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## ESP-IDF v5.1.1 のインストール

プログラミングを開始する前に、ESP-IDF v5.1.1 をコンピュータにインストールする必要があります。ESP-IDF は ESP32 シリーズチップの公式開発フレームワークです。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Windows" label="Windows">

**ステップ 1.** Windows 用 ESP-IDF ツールインストーラーをダウンロード

[ESP-IDF Tools Installer](https://dl.espressif.com/dl/esp-idf/?idf=5.1.1) をダウンロードしてください。このインストーラーには、ESP-IDF 開発に必要なすべてのツールが含まれています。

**ステップ 2.** インストーラーを実行

1. ダウンロードしたインストーラーを管理者として実行します。
2. プロンプトに従って Python、Git、その他必要なツールをインストールします。
3. 以下のオプションを選択してください：
   - ESP-IDF v5.1.1 をインストール
   - Python をインストール
   - Git をインストール
   - ESP-IDF ツールを Path に追加

**ステップ 3.** インストールを確認

新しいコマンドプロンプトを開き、以下を実行します：
```bash
esp-idf --version
```

インストールが成功した場合、バージョン番号 5.1.1 が表示されます。

</TabItem>

<TabItem value="MacOS" label="MacOS">

**ステップ 1.** 必要な準備をインストール

ターミナルを開き、Homebrew をインストールします（まだインストールしていない場合）：
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

必要なパッケージをインストールします：
```bash
brew install cmake ninja dfu-util
```

**ステップ 2.** ESP-IDF をダウンロードしてインストール

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

この行を `~/.profile` または `~/.zshrc` に追加して、新しいターミナルを開いた際に環境変数が自動的に設定されるようにします。

</TabItem>

<TabItem value="Linux" label="Linux">

**ステップ 1.** 必要な準備をインストール

Ubuntu および Debian の場合：
```bash
sudo apt-get install git wget flex bison gperf python3 python3-pip python3-setuptools cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0
```

その他のディストリビューションの場合は、同等のパッケージをインストールしてください。

**ステップ 2.** ESP-IDF をダウンロードしてインストール

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

この行を `~/.bashrc` に追加して、新しいターミナルを開いた際に環境変数が自動的に設定されるようにします。

</TabItem>
</Tabs>

:::tip
インストール後、すべての環境変数が正しく設定されるようにコンピュータを再起動する必要がある場合があります。
:::

:::note
ESP-IDF v5.1.1 のインストールに関する詳細な手順については、公式の Espressif ドキュメントを参照してください：
- [ESP-IDF Get Started Guide](https://docs.espressif.com/projects/esp-idf/en/v5.1.1/esp32s3/get-started/index.html)
:::

## mm-iot-esp32 リポジトリのクローンと設定

以下の手順に従って mm-iot-esp32 リポジトリをクローンし、環境変数を設定してください：

<Tabs>
<TabItem value="Windows" label="Windows">

**ステップ 1.** リポジトリをクローン
```bash
cd %USERPROFILE%
git clone https://github.com/Seeed-Studio/mm-iot-esp32.git
```

**ステップ 2.** IDF 変数をエクスポート
```bash
cd %USERPROFILE%\mm-iot-esp32
export.bat
```

**ステップ 3.** MMIOT_ROOT 環境変数を設定

Windows システムプロパティを使用して永続的に設定する方法：
1. システムプロパティを開く（Win + R を押して `sysdm.cpl` と入力）
2. 「環境変数」をクリック
3. 「ユーザー変数」の下で「新規」をクリック
4. 変数名：`MMIOT_ROOT`
5. 変数値：`C:\Users\YourUsername\mm-iot-esp32`（実際のパスに置き換えてください）
6. 「OK」をクリックして保存

または、コマンドプロンプトで一時的に設定する方法：
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

**ステップ 2.** IDF 変数をエクスポート
```bash
cd ~/mm-iot-esp32
source export.sh
```

**ステップ 3.** MMIOT_ROOT 環境変数を設定

一時的に使用する場合：
```bash
export MMIOT_ROOT=~/mm-iot-esp32
```

永続的に使用する場合は、シェル設定ファイルに追加してください：
```bash
# bash ユーザーの場合（~/.bash_profile または ~/.bashrc に追加）
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.bash_profile

# zsh ユーザーの場合（~/.zshrc に追加）
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.zshrc
```

その後、シェル設定をリロードします：
```bash
# bash の場合
source ~/.bash_profile

# zsh の場合
source ~/.zshrc
```

</TabItem>

<TabItem value="Linux" label="Linux">

**ステップ 1.** リポジトリをクローン
```bash
cd ~
git clone https://github.com/Seeed-Studio/mm-iot-esp32.git
```

**ステップ 2.** IDF 変数をエクスポート
```bash
cd ~/mm-iot-esp32
source export.sh
```

**ステップ 3.** MMIOT_ROOT 環境変数を設定

一時的に使用する場合：
```bash
export MMIOT_ROOT=~/mm-iot-esp32
```

永続的に使用する場合は、シェル設定ファイルに追加してください：
```bash
# bash ユーザーの場合
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.bashrc

# zsh ユーザーの場合
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.zshrc
```

その後、シェル設定をリロードします：
```bash
# bash の場合
source ~/.bashrc

# zsh の場合
source ~/.zshrc
```

</TabItem>
</Tabs>

:::tip
MMIOT_ROOT 環境変数を設定する際は、絶対パスを使用してください。相対パスを使用すると、プロジェクトのビルド時に問題が発生する可能性があります。
:::

:::note
環境変数を設定した後、変更を反映させるためにターミナルを閉じて再度開く必要がある場合があります。
:::

## 例題ファームウェアの構築

mm-iot-esp32リポジトリには、さまざまな機能を示す複数の例題アプリケーションが含まれています。以下はこれらの例題を構築および設定する方法です。

### 例題アプリケーションの場所

すべての例題アプリケーションはリポジトリの`examples`ディレクトリにあります。利用可能な例題には以下が含まれます：

- `scan`: Wi-Fiスキャンの例
- `iperf`: iperfサーバーの例
- `sta_reboot`: Wi-Fiステーション再起動の例
- `sta_connect`: Wi-Fiステーション接続の例
- `web_camera_server`: Webカメラサーバーの例
- その他...

### ネットワーク認証情報の設定

ファームウェアを構築する前に、例題の設定ファイルでネットワーク設定を構成する必要があります：

1. 選択した例題ディレクトリに移動します：

```bash
cd $MMIOT_ROOT/examples/example_name
```

2. 設定ファイルを編集します：

```bash
# 設定ファイルを開く
nano src/mm_app_loadconfig.c
```

3. このファイル内で以下を変更できます：

- 国コード（現在、製品は北米のみで利用可能なため**US**に設定する必要があります）
- Wi-Fi HaLowネットワーク認証情報
- その他のネットワーク関連パラメータ

:::caution
国コードに関する重要な注意点：
- 国コードは「US」に設定する必要があります。この製品は現在北米市場のみで利用可能です。
- 規制要件のため、他の地域ではまだ利用できません。
- 北米以外の地域で製品を使用すると、現地の規制に違反する可能性があります。
:::

### 構築プロセス

ネットワーク設定を構成した後、以下のコマンドを使用してファームウェアを構築できます：

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
```

:::note
- `idf.py set-target`コマンドは各例題ごとに一度だけ実行する必要があります。
- `idf.py fullclean`は以前のビルド成果物をすべて削除し、クリーンなビルドを保証します。
- ビルドが成功すると、ファームウェアバイナリは`build`ディレクトリに配置されます。
:::

### ビルド出力

ビルドが成功すると、以下のような出力が表示されます：

```bash
# プロジェクトのビルドが完了しました。フラッシュするには以下のコマンドを実行してください：
idf.py -p (PORT) flash
```

以下では、いくつかの例題を示します。

## 例題1. scan

この例題では、周辺の利用可能なWi-Fi HaLowネットワークをスキャンする方法を示します。以下の手順に従ってscan例題を構築および実行してください：

### ステップ1: Scan例題ディレクトリに移動

```bash
cd ~/mm-iot-esp32/example/scan
```

### ステップ2: 国コードの設定

1. 設定ファイルを開きます：

```bash
nano main/src/mm_app_loadconfig.c
```

2. 国コードの行を探して変更します：

```c
#define COUNTRY_CODE "US"  // 製品は北米のみで利用可能なため「US」を使用する必要があります
```

### ステップ3: ハードウェアのセットアップ

1. Wio-WM6180 Wi-Fi HaLowモジュールをXIAO ESP32S3に接続します。

2. XIAO ESP32S3をUSB経由でコンピュータに接続します。

### ステップ4: ビルドとフラッシュ

以下のコマンドを順に実行します：

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### ステップ5: 結果のモニタリング

すべてが正常に動作している場合：
- フラッシュ後にシリアルモニターが自動的に開始されます。
- プログラムがWi-Fi HaLowネットワークのスキャンを開始します。
- 範囲内にWi-Fi HaLowゲートウェイがある場合、その情報がシリアルモニターに表示されます。

シリアルモニターの例出力：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/9.png" style={{width:1000, height:'auto'}}/></div>

:::tip
- ネットワークを検出するには、近くにWi-Fi HaLowゲートウェイがあることを確認してください。
- スキャンプロセスは継続的に実行されるため、利用可能なネットワークの定期的な更新が表示されます。
- Ctrl+Cを押してモニターを停止し、プログラムを終了します。
:::

:::note
ネットワークが表示されない場合：
- Wi-Fi HaLowゲートウェイが電源オンで正常に動作していることを確認してください。
- ゲートウェイの範囲内にいることを確認してください。
- モジュールがXIAO ESP32S3に正しく接続されていることを確認してください。
:::


## 例 2. iperf

この例では、iPerf を使用して Wi-Fi HaLow 接続のネットワーク性能をテストする方法を示します。以下の手順に従って iPerf の例を構築し、実行してください。

### 手順 1: iPerf の例に移動

```bash
cd ~/mm-iot-esp32/example/iperf
```

### 手順 2: ネットワーク設定を構成

1. 設定ファイルを開きます:

```bash
nano main/src/mm_app_loadconfig.c
```

2. 以下のパラメータを変更します:

```cpp
// 国コードを設定 (北米の場合は "US" にする必要があります)
#define COUNTRY_CODE "US"

// Wi-Fi HaLow ネットワークの認証情報を設定
#define SSID             Your_HaLow_SSID           // ネットワーク名に置き換えてください
#define SAE_PASSPHRASE   Your_Password             // ネットワークパスワードに置き換えてください
```

### 手順 3: ハードウェアのセットアップ

1. Wio-WM6180 Wi-Fi HaLow モジュールを XIAO ESP32S3 に接続します。
2. XIAO ESP32S3 を USB 経由でコンピュータに接続します。

### 手順 4: ビルドとフラッシュ

以下のコマンドを順番に実行します:

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### 手順 5: パフォーマンステストを実行

プログラムが正常に実行されると、iPerf サービスが起動します。これで Wi-Fi HaLow ゲートウェイからパフォーマンステストを実行できます。

IPv4 テストの場合、ゲートウェイで以下のコマンドを実行します:

```bash
iperf -c <device_ip> -p <port> -i 1 -u -b 20M
```

IPv6 テストの場合、ゲートウェイで以下のコマンドを実行します:

```bash
iperf -c <device_ip>%wlan0 -p <port> -i 1 -V -u -b 20M
```

パラメータの説明:

- `-c`: クライアントモードで実行
- `-p`: ポート番号
- `-i`: レポート間隔 (1秒)
- `-u`: UDP プロトコルを使用
- `-b`: 目標帯域幅 (20 Mbps)
- `-V`: IPv6 モード (IPv6 テストの場合のみ)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/11.png" style={{width:1000, height:'auto'}}/></div>

:::tip
- パフォーマンステストを実行する前に、デバイスが Wi-Fi HaLow ネットワークに正常に接続されていることを確認してください。
- 接続後、デバイスの IP アドレスがシリアルモニターに表示されます。
- テストのニーズに応じて帯域幅 (-b パラメータ) を調整できます。
:::

:::note
一般的な問題と解決策:
- 接続に失敗した場合、ネットワーク認証情報を確認してください。
- iPerf サービスが起動しない場合、ハードウェア接続を確認してください。
- パフォーマンスが低い場合、ゲートウェイの良好な範囲内にいることを確認してください。
:::

## 例 3. web_camera_server

この例では、XIAO ESP32S3 Sense を使用して Wi-Fi HaLow ネットワーク経由でカメラフィードをストリーミングする方法を示します。以下の手順に従ってウェブカメラサーバーを構築し、実行してください。

### 手順 1: Web カメラの例に移動

```bash
cd ~/mm-iot-esp32/example/web_camera_serve
```

### 手順 2: ネットワーク設定を構成

1. 設定ファイルを開きます:

```bash
nano main/src/mm_app_loadconfig.c
```

2. Wi-Fi HaLow の認証情報を変更します:

```cpp
// Wi-Fi HaLow ネットワークの認証情報を設定
#define SSID              Your_HaLow_SSID           // ネットワーク名に置き換えてください
#define SAE_PASSPHRASE    Your_Password             // ネットワークパスワードに置き換えてください
```

### 手順 3: ハードウェアのセットアップ

1. Wio-WM6180 Wi-Fi HaLow モジュールを XIAO ESP32S3 Sense に接続します。
2. XIAO ESP32S3 Sense 上のカメラモジュールが正しく接続されていることを確認します。
3. XIAO ESP32S3 Sense を USB 経由でコンピュータに接続します。

### 手順 4: ビルドとフラッシュ

以下のコマンドを順番に実行します:

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### 手順 5: カメラフィードにアクセス

プログラムが正常に実行されると:

1. シリアルモニターに表示される IP アドレスを確認します。
2. Wi-Fi HaLow ゲートウェイと同じネットワークに接続されている任意のデバイスでウェブブラウザを開きます。
3. ブラウザのアドレスバーに IP アドレスを入力します。
4. XIAO ESP32S3 Sense からのライブカメラフィードが表示されます。

例 URL:

```
http://192.168.4.1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/14.png" style={{width:1000, height:'auto'}}/></div>

:::tip
最適なストリーミング体験のために:
- 良好な照明条件を確保して画像品質を向上させます。
- XIAO ESP32S3 Sense を Wi-Fi HaLow ゲートウェイの良好な範囲内に保ちます。
- 最新のウェブブラウザを使用して互換性を最適化します。
:::

:::note
トラブルシューティング:
- カメラフィードにアクセスできない場合、デバイスが Wi-Fi HaLow ゲートウェイと同じネットワークにあることを確認してください。
- 画像が表示されない場合、カメラモジュールが正しく接続されていることを確認してください。
- ストリームが遅延する場合、Wi-Fi HaLow ゲートウェイに近づいてみてください。
:::

## リソース

- **[GITHUB]** [mm-iot-esp32 リポジトリ](https://github.com/Seeed-Studio/mm-iot-esp32.git)
- **[GITHUB]** [mm-iot ドキュメント](https://github.com/Seeed-Studio/mm-iot-esp32/blob/main/documentation.html)
- **[PDF]** [WI-FI_HALOW_FGH100M_EXT01_V30_SCH_20241107](https://files.seeedstudio.com/wiki/wifi_halow/res/WI-FI_HALOW_FGH100M_EXT01_V30_SCH_20241107.pdf)
- **[KiCAD]** [WI-FI_HALOW_FGH100M_EXT01_V30 KiCAD PCB ファイル](https://files.seeedstudio.com/wiki/wifi_halow/res/WI-FI_HALOW_FGH100M_EXT01_V30.kicad_pcb)
- **[PDF]** [Quectel_FGH100M-H_短距離モジュール仕様書_V1.0.0](https://files.seeedstudio.com/wiki/wifi_halow/res/Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0_Preliminary_20241018.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>