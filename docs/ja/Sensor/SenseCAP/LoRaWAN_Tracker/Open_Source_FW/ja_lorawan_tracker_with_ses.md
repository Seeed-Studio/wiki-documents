---
description: SenseCAP Card Tracker T1000-E for LoRaWAN を SES で始める
title: SES で始める
keywords:
- Tracker
image: https://files.seeedstudio.com/wiki/SenseCAP/LoRaWAN_Tracker/lorawan_opensource.webp
slug: /ja/open_source_lorawan
sidebar_position: 2
last_update:
  date: 1/2/2025
  author: Jessie
---


## 準備

### ハードウェアの準備

- SenseCAP T1000-E x 1
- USB ケーブル x 1
- コンピュータ x 1

### ソフトウェアの準備

開発を始める前に、以下のソフトウェアツールが必要です。

#### SEGGER Embedded Studio (SES)

SES は、組み込みアプリケーションの管理、構築、テスト、デプロイのためのオールインワンソリューションです。これは、幅広い機能により、スムーズで効率的な開発作業を意味します。強力なプロジェクトマネージャーにより、大小のプロジェクトの管理が可能です。バージョン管理機能により、アプリケーションの自動デプロイが可能になります。

お使いのオペレーティングシステムに応じて、対応するインストールパッケージをダウンロードしてください。

<a  href="https://www.segger.com/products/development-tools/embedded-studio/" target="_blank"><span>SEGGER Embedded Studio (SES)-ダウンロード</span></a>

:::tip
5.68 バージョンの使用を推奨します。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/5.68version.png" alt="pir" width={800} height="auto" /></p>

#### nRF5 SDK

nRF5 SDK は、ペリフェラル、SoftDevices、独自の無線プロトコル用のドライバ、ライブラリ、サンプルを幅広く含むことで、nRF5 シリーズデバイス向けの豊富な開発環境を提供します。

<a  href="https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs" target="_blank"><span>nRF5 SDK-ダウンロード</span></a>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/SDK_version.png" alt="pir" width={800} height="auto" /></p>

#### Seeed T1000-E サンプルパッケージ

Seeed は、開発者がより迅速に開始できるようにサンプルプロジェクトを提供しています。このサンプルには、LoRaWAN 通信、位置情報取得、オンボードセンサーデータ取得などが含まれています。

<a  href="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Seeed_T1000_E_Dev_Board_Alpha-main.zip" target="_blank"><span>Seeed サンプル-ダウンロード</span></a>

**Seeed サンプルファイルを nRF5 SDK に追加**

`Seeed T1000-E サンプルファイル`を nRF5 SDK の以下のパスにコピーしてください：
`.../nRF5_SDK_17.1.0_ddde560/examples/ble_peripheral/`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/file-path.png" alt="pir" width={600} height="auto" /></p>

### ブートローダー情報の確認

開始する前に、まずブートローダー情報を確認してください。

- **ステップ 1:** DFU モードに入る

 USB ケーブルを PC に接続し、デバイスボタンを押し続けながら充電ケーブルを接続すると、`T1000-E` という名前のドライバが表示されるはずです。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2:** INFO_UF2.TXT を確認

 正しいブートローダー情報は図に示されています：

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/bootloader-info.png" alt="pir" width={600} height="auto" /></p>

### LoRaWAN サンプルプロジェクトの実行

**サンプルプロジェクトのインポート**

ここでは `08_ses_lorawan_gnss` プロジェクトを例に説明します。
SES を開き、サンプルプロジェクトを開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/opensolution.png" alt="pir" width={800} height="auto" /></p>

**LoRaWAN パラメータの変更**

`lorawan_key_config.h` で REGION/DEVICE_EUI/JOIN_EUI/APP_KEY を定義します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keys-define.png" alt="pir" width={800} height="auto" /></p>

**変更されたプロジェクトのビルド**

プロジェクトエクスプローラーで必要なプロジェクトを選択します。<br/>
`Build` > `Build` を選択するか、`F7` を押します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/build-done.png" alt="pir" width={800} height="auto" /></p>

#### UF2 ファイルへの変換

ビルドが成功すると、出力フォルダに `.hex` ファイルが作成されます。`Firmware` フォルダに hex ファイルを uf2 ファイルに変換するための Python スクリプト `uf2conv.py` を含めています。

ファイルパスに移動してスクリプトを実行します：

```py
python uf2conv.py filename.hex -c -f 0xADA52840 -o filename.uf2
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/convert-uf2.png" alt="pir" width={600} height="auto" /></p>

#### アプリケーションファームウェアのフラッシュ

- **ステップ 1:** DFUモードに入る

 USBケーブルをPCに接続し、デバイスボタンを押し続けながら充電ケーブルを接続すると、`T1000-E`という名前のドライバが表示されます。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 2:** LoRaWANアプリケーションファームウェアのフラッシュ

 `UF2`ファイルをDFUドライブにコピーします。ファイルがダウンロードされ、デバイスが再起動した後、ファームウェアがフラッシュされます。

### LNSへの接続

このセクションでは、デバイスをLNS（ここではTTNを例に取ります）に接続してデータを表示し、TTN Mapperを通じて位置を確認します。

まず、The Things IndustriesまたはThe Things Networkでアカウントを登録してください。

#### ステップ 1: アプリケーションの作成

Applicationsページに移動し、「+Create application」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

Application IDを入力し、Create Applicationをクリックして変更を保存します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>

#### ステップ 2: デバイスの登録

「Register end device」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device.png" alt="pir" width={800} height="auto" /></p>

以下のパラメータを設定します：

**Frequency Plan**: 対象地域に適したFrequency planを選択

**LoRaWAN version**:LoRaWAN Specification 1.0.4

**Regional Parameters version**: PR002 Regional Parameters V1.0.3

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device1.png" alt="pir" width={800} height="auto" /></p>

:::tip
JoinEUI/DevEUI/APPEUI: 前の設定で'lorawan_key_config.h'ファイルで定義したものです。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keys-define.png" alt="pir" width={600} height="auto" /></p>
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device5.png" alt="pir" width={800} height="auto" /></p>

**ライブデータの確認**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/payload-data.png" alt="pir" width={800} height="auto" /></p>

### 工場出荷時ファームウェアの復元

- 工場出荷時ファームウェアを使用する場合は、`t1000_e_dev_kit_11_lorawan_tracker.uf2`ファームウェアをフラッシュしてください。
- SenseCAP cloudを使用する場合は、デバイスラベルのQRコードをスキャンしてSenseCAPキーをインポートする必要があります。
