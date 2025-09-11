---
description: SES を使用して SenseCAP Card Tracker T1000-E を LoRaWAN に接続する方法
title: SES の使い方
keywords:
- トラッカー
image: https://files.seeedstudio.com/wiki/SenseCAP/LoRaWAN_Tracker/lorawan_opensource.webp
slug: /ja/open_source_lorawan
sidebar_position: 2
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 準備

### ハードウェア準備

* SenseCAP T1000-E x 1
* USB ケーブル x 1
* コンピュータ x 1

### ソフトウェア準備

開発を開始する前に、以下のソフトウェアツールが必要です。

#### SEGGER Embedded Studio (SES)

SES は、組み込みアプリケーションの管理、ビルド、テスト、デプロイを行うためのオールインワンソリューションです。幅広い機能により、スムーズで効率的な開発作業を実現します。強力なプロジェクトマネージャーは、大規模および小規模なプロジェクトの管理を可能にします。バージョン管理機能により、アプリケーションの自動デプロイが可能です。

お使いのオペレーティングシステムに応じたインストールパッケージをダウンロードしてください。

<a href="https://www.segger.com/products/development-tools/embedded-studio/" target="_blank"><span>SEGGER Embedded Studio (SES)-ダウンロード</span></a>

:::tip
バージョン 5.68 の使用を推奨します。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/5.68version.png" alt="pir" width={800} height="auto" /></p>

#### nRF5 SDK

nRF5 SDK は、nRF5 シリーズデバイス向けに豊富な開発環境を提供します。これには、周辺機器、SoftDevices、および独自の無線プロトコル用のドライバー、ライブラリ、例が含まれています。

<a href="https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs" target="_blank"><span>nRF5 SDK-ダウンロード</span></a>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/SDK_version.png" alt="pir" width={800} height="auto" /></p>

#### Seeed T1000-E Example Package

Seeed は、開発者がより迅速に開始できるようにするための例プロジェクトを提供しています。この例には、LoRaWAN 通信、位置情報の取得、オンボードセンサーのデータ取得などが含まれています。

<a href="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Seeed_T1000_E_Dev_Board_Alpha-main.zip" target="_blank"><span>Seeed Example-ダウンロード</span></a>

**Seeed Example ファイルを nRF5 SDK に追加**

`Seeed T1000-E Example file` を nRF5 SDK の以下のパスにコピーします：
`.../nRF5_SDK_17.1.0_ddde560/examples/ble_peripheral/`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/file-path.png" alt="pir" width={600} height="auto" /></p>

### ブートローダー情報の確認

開始する前に、まずブートローダー情報を確認してください。

* **ステップ 1:** DFU モードに入る

USB ケーブルを PC に接続し、デバイスのボタンを押し続けたまま充電ケーブルを接続します。`T1000-E` という名前のドライバーが表示されるはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 2:** INFO_UF2.TXT を確認

正しいブートローダー情報は以下の図のように表示されます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/bootloader-info.png" alt="pir" width={600} height="auto" /></p>

### LoRaWAN 例プロジェクトを実行

**例プロジェクトのインポート**

ここでは `08_ses_lorawan_gnss` プロジェクトを例として取り上げます。
SES を開き、例プロジェクトを開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/opensolution.png" alt="pir" width={800} height="auto" /></p>

**LoRaWAN パラメータの修正**

`lorawan_key_config.h` 内で REGION/DEVICE_EUI/JOIN_EUI/APP_KEY を定義します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keys-define.png" alt="pir" width={800} height="auto" /></p>

**修正したプロジェクトをビルド**

プロジェクトエクスプローラーで必要なプロジェクトを選択します。<br/>
`Build` > `Build` を選択するか、`F7` を押します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/build-done.png" alt="pir" width={800} height="auto" /></p>

#### UF2 ファイルへの変換

ビルドが成功すると、出力フォルダーに `.hex` ファイルが生成されます。`Firmware` フォルダーに含まれている Python スクリプト `uf2conv.py` を使用して、hex ファイルを uf2 ファイルに変換します。

ファイルパスに移動し、スクリプトを実行します：

```py
python uf2conv.py filename.hex -c -f 0xADA52840 -o filename.uf2
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/convert-uf2.png" alt="pir" width={600} height="auto" /></p>

#### アプリケーションファームウェアのフラッシュ

* **ステップ 1:** DFU モードに入る

USB ケーブルを PC に接続し、デバイスのボタンを押し続けたまま充電ケーブルを接続します。`T1000-E` という名前のドライバーが表示されるはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={600} height="auto" /></p>

* **ステップ 2:** LoRaWAN アプリケーションファームウェアをフラッシュ

`UF2` ファイルを DFU ドライブにコピーします。ファイルがダウンロードされ、デバイスが再起動するとファームウェアがフラッシュされます。

### LNS に接続

このセクションでは、デバイスを LNS（ここでは TTN を例として使用）に接続してデータを確認し、TTN Mapper を使用して位置を確認します。

まず、The Things Industries または The Things Network にアカウント登録を行います。

#### ステップ 1: アプリケーションを作成

Applications ページに移動し、「+Create application」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

Application ID を入力し、「Create Application」をクリックして変更を保存します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>

#### ステップ 2: デバイスを登録

「Register end device」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device.png" alt="pir" width={800} height="auto" /></p>

以下のパラメータを設定してください：

**周波数プラン**: 対象地域に適した周波数プランを選択してください

**LoRaWAN バージョン**: LoRaWAN Specification 1.0.4

**地域パラメータバージョン**: PR002 Regional Parameters V1.0.3


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device1.png" alt="pir" width={800} height="auto" /></p>


:::tip 
JoinEUI/DevEUI/APPEUI: これらは前の設定で 'lorawan_key_config.h' ファイルに定義したものです。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keys-define.png" alt="pir" width={600} height="auto" /></p>
:::


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device5.png" alt="pir" width={800} height="auto" /></p>


**ライブデータを確認**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/payload-data.png" alt="pir" width={800} height="auto" /></p>



### 工場出荷時のファームウェアに戻す


* 工場出荷時のファームウェアを使用するには、`t1000_e_dev_kit_11_lorawan_tracker.uf2` ファームウェアをフラッシュしてください。
* SenseCAP クラウドを使用する場合、デバイスラベルのQRコードをスキャンしてSenseCAPキーをインポートする必要があります。