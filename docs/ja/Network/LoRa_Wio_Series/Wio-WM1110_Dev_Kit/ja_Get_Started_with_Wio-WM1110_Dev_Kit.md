---
description: Wio-WM1110 Dev Kit の使い方を始める
title: Wio-WM1110 Dev Kit の使い方を始める
keywords:
- Wio-WM1110 Dev Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Get_Started_with_Wio-WM1110_Dev_Kit
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

* Wio-WM1110 Dev Kit x 1
* コンピュータ x 1
* USB Type-C ケーブル x 1
* J-Link デバッグプログラマ x 1

### デバイス接続

Wio-WM1110 Dev ボードを J-Link デバッグプログラマに以下のように接続します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/hardware_connection.png" alt="pir" width={800} height="auto" /></p>

:::info 接続:
**3V3** (Wio-WM1110 Dev ボード) -> **VTref** (J-Link デバッグプログラマ ピン 1)  
**CLK** (Wio-WM1110 Dev ボード) -> **SWCLK** (J-Link デバッグプログラマ ピン 9)  
**DIO** (Wio-WM1110 Dev ボード) -> **SWDIO** (J-Link デバッグプログラマ ピン 7)  
**GND** (Wio-WM1110 Dev ボード) -> **GND** (J-Link デバッグプログラマ GND)
:::

### ツールチェーンのセットアップ

開発を始める前に、このガイドに必要な以下のツールを準備してください。

#### SEGGER Embedded Studio (SES)

SES は、組み込みアプリケーションの管理、ビルド、テスト、デプロイを一括で行えるソリューションです。幅広い機能により、スムーズで効率的な開発作業を実現します。強力なプロジェクトマネージャーにより、小規模から大規模なプロジェクトの管理が可能です。バージョン管理機能により、自動的なアプリケーションデプロイが可能です。

<a  href="https://www.segger.com/products/development-tools/embedded-studio/" target="_blank"><span>SEGGER Embedded Studio (SES)-ダウンロード</span></a>

:::tip 
バージョン 5.68 の使用を推奨します。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/5.68version.png" alt="pir" width={800} height="auto" /></p>

#### SEGGER J-Link ソフトウェアおよびドキュメントパック

<a  href="https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack" target="_blank"><span>SEGGER J-Link ソフトウェアおよびドキュメントパック-ダウンロード</span></a>

#### nRF5 SDK

nRF5 SDK は、nRF5 シリーズデバイス向けに豊富な開発環境を提供します。これには、周辺機器、SoftDevices、および独自の無線プロトコル用のドライバ、ライブラリ、例が含まれています。

SDK に含まれるすべてのコード例は、Wio-WM1110 Dev Kit 用にコンパイルおよび実行するように調整されています。

<a  href="https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs" target="_blank"><span>nRF5 SDK-ダウンロード</span></a>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/SDK_version.png" alt="pir" width={800} height="auto" /></p>

#### Seeed サンプルパッケージ

Seeed は、開発者がより迅速に始められるようにサンプルプロジェクトを提供しています。このサンプルには、LoRaWAN 通信、位置情報の取得、オンボードセンサーデータの取得などが含まれています。

<a  href="https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board" target="_blank"><span>Seeed サンプル-ダウンロード</span></a>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/list.png" alt="pir" width={600} height="auto" /></p>

## 初めてのテストの実行

**Seeed Example ファイルを nRF5 SDK に追加**

[Seeed Example ファイル](https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board) を以下の nRF5 SDK のパスにコピーします：
`.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/copyfile.png" alt="pir" width={800} height="auto" /></p>

ツールチェーンが正しくセットアップされているか確認するために、"ses_blinky" プロジェクトをビルドしてみましょう。
"ses_blinky" プロジェクトをインポートします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/opensolution.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/open-project.png" alt="pir" width={800} height="auto" /></p>

**テストアプリケーションのコンパイル**

"Build" > "Compile project_target" を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/complie.png" alt="pir" width={800} height="auto" /></p>

**テストアプリケーションのプログラミング**

アプリケーションをコンパイルした後、Dev ボードにプログラムを転送できます。

"Target" -- "Connect J-Link" をクリックします。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/connect-to-JLink.png" alt="pir" width={800} height="auto" /></p>

"Build" -- "Build and Run" をクリックして、blinky プロジェクトをビルドします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/run.png" alt="pir" width={800} height="auto" /></p>

完了すると "Download successful" と表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/download-seccessful.png" alt="pir" width={800} height="auto" /></p>

その後、ボード上の 2 つの LED が以下のように点滅します。

<div align="center"><img width={253} src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/blink-test.gif" /></div>

## はじめに

この章では、TTN を介して Node-Red に現在の位置情報を表示する方法を説明し、必要なすべてのサーバー（ネットワークサーバー（NS）およびアプリケーションサーバー（AS））のセットアップ方法を解説します。

**アーキテクチャとデータフロー**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/flow.png" alt="pir" width={800} height="auto" /></p>

### キーの設定

デバイスが NS を介して通信する前に、3 つのキーを登録する必要があります。

Wio-WM1110 DK では、DevEUI、AppEUI、および AppKey を設定できます。これは次のステップで必要になるため、'lorawan_key_config.h' ファイルで独自のパラメータを定義し、それを DK にフラッシュします。

ファイルの場所：
`.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/Seeed_Wio_WM1110_Dev_Board/apps/common/lorawan_key_config.h`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/keys.png" alt="pir" width={800} height="auto" /></p>

または、TTN によって生成されたキーを取得し、それを 'lorawan_key_config.h' ファイルに記入して DK 上で実行することもできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device3.png" alt="pir" width={800} height="auto" /></p>

### LoRa Cloud™ モデム & ジオロケーションサービス

LoRa Cloud モデム & ジオロケーションサービスは、LoRaWAN ネットワーク上で動作する LoRa® デバイスのライフサイクル管理機能を完全に提供します。これらの機能には以下が含まれますが、これに限定されません：

* 包括的なデバイスのテレメトリ
* デバイスおよびアプリケーションの設定
* クロック同期
* パケット損失に対する耐性を備えた高度なデータ転送サービス（バッファストリーミングおよびファイルアップロードを含む）
* ジオロケーション

まず、[LoRa Cloud™ ポータル](https://www.loracloud.com/?__hstc=212684107.3eb7c02aaa159a9e414cb1b589ca989c.1678419369281.1686727930327.1686794688289.35&__hssc=212684107.3.1686794688289&__hsfp=1476773244) にアクセスしてアカウントを登録してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/signup.png" alt="pir" width={800} height="auto" /></p>

#### ステップ 1: オーナーを作成する
トークンを作成するには、まずオーナーを作成する必要があります。
DEVICE OWNERS ページに移動します。
"CREATE NEW OWNER" をクリックします。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_owner.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_owner2.png" alt="pir" width={800} height="auto" /></p>

#### ステップ 2: トークンを取得する

トークンは、アプリケーションサーバーが LoRa Cloud モデム & ジオロケーションサービスサーバーへの呼び出しを認証するために必要です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/tokens.png" alt="pir" width={800} height="auto" /></p>

#### ステップ 3: API URL

LoRa Cloud モデム & ジオロケーションサービスの URL は、デバイスが展開される地域によって異なります。
"Manage Tokens" をクリックすると、API URL を確認できます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MGS.png" alt="pir" width={800} height="auto" /></p>

:::tip
デバイスからデータが受信されると、自動的に LoRa Cloud モデム & ジオロケーションサービスサーバーに登録されます。つまり、事前にデバイスを登録する必要はありません。
:::

### LoRaWAN® ネットワークサーバー (TTN)

現在、[The Things Network V3](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3) を使用しています。

まず、The Things Industries または The Things Network にアカウントを登録してください。

#### ステップ 1: アプリケーションを作成する

Applications ページに移動し、"+Create application" をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

アプリケーション ID を入力し、[Create Application] をクリックして変更を保存します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>


#### ステップ 2: デバイスを登録する

[Register end device] をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device.png" alt="pir" width={800} height="auto" /></p>

以下のパラメータを設定します：

**Frequency Plan**: 対象地域に適した周波数プランを選択します。

**LoRaWAN version**: LoRaWAN Specification 1.0.3

**Regional Parameters version**: V1.0.3 REV A

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device1.png" alt="pir" width={800} height="auto" /></p>

:::tip 
JoinEUI/DevEUI/APPEUI: これらは前の設定で 'lorawan_key_config.h' ファイルに定義したものです。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device5.png" alt="pir" width={800} height="auto" /></p>

#### ステップ 3: 認証情報を作成する

The Things Network V3 ネットワークサーバーでは、ユニークな MQTT パスワードを生成する必要があります。コンソールのアプリケーションページで以下を行います：

* [Integrations] をクリックし、次に [MQTT] を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MQTT1.png" alt="pir" width={800} height="auto" /></p>

* [Generate new API Key] を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/API_key.png" alt="pir" width={800} height="auto" /></p>

* 以下のフィールドから値をコピーします：Server Address、Username、Password。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MQTT2.png" alt="pir" width={800} height="auto" /></p>

### アプリケーションサーバー

アプリケーションサーバーは、アプリケーションデータとデバイス管理フレームを処理します。LoRaWAN® ネットワークサーバーと LoRa Cloud™ Modem & Geolocation Services の間にはバックグラウンド接続がないため、モデムトラフィックに関連するすべてのアップリンクはアプリケーションサーバーによって LoRa Cloud Modem & Geolocation Services に転送される必要があります。

私たちは Node-RED をアプリケーションサーバーとして使用します。Node-RED はブラウザベースのビジュアルプログラミングツールで、迅速なプロトタイピングを可能にします。Node.js 上に構築されており、広範なノードを使用してフローを接続することができます。これらのノードは、ワンクリックで Node-RED ランタイムにデプロイできます。

#### Node.js® をインストールする

Node-RED をローカルにインストールするには、<a href="https://nodered.org/docs/faq/node-versions" target="_blank"><span>対応する Node バージョン</span></a> が必要です。

公式サイトから最新の 16.x LTS バージョンの Node.js をダウンロードしてください：<a href="https://nodejs.org/en/" target="_blank"><span>Node.js</span></a>。これにより、システムに最適なバージョンが提供されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/nodejs_version.png" alt="pir" width={600} height="auto" /></p>

Node.js をインストールする際、プログラミング環境がインストールされていないコンピュータを使用している場合は、必要なツールをインストールするチェックボックスをオンにすることをお勧めします。これにより、多くのトラブルを回避できます。

Node-RED をインストールする最も簡単な方法は、Node のパッケージ管理ツール npm を使用することです。ただし、npm 1.x で Node-RED をインストールすることは推奨されません。代わりに最新の npm 2.x バージョンにアップグレードしてください。

:::note
Windows (Windows 10 以上が必要) では、Win+R ショートカットを使用して cmd と入力し、ポップアップウィンドウでターミナルを開き、以下のコマンドを実行します。
:::

MacOS または Linux を使用している場合は、ターミナルで以下のコマンドを実行し、非 root ユーザーの場合はコマンドの前に sudo を追加してください。

```cpp
npm install -g npm@2.x
```

インストール後、コマンドプロンプトを開き、以下のコマンドを実行して Node.js と npm が正しくインストールされていることを確認します。

```cpp
node --version && npm --version
```

以下のような出力が返されるはずです：

```cpp
> v18.7.0
> 9.6.5
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/npm_version.png" alt="pir" width={600} height="auto" /></p>

#### Node-RED をインストールする

Node-RED をグローバルモジュールとしてインストールすると、システムパスに node-red コマンドが追加されます。コマンドプロンプトで以下を実行してください：
```cpp
npm install -g --unsafe-perm node-red
```

Node-RED がグローバル npm パッケージとしてインストールされている場合、以下のコマンドを直接実行してください：
```cpp
node-red
```

これにより、http://localhost:1880 で Node-RED エディタを確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/node-red.png" alt="pir" width={600} height="auto" /></p>

ユーザーインターフェースには以下の 3 つの主要な領域があります：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/nodered1.png" alt="pir" width={800} height="auto" /></p>

* **パレット**: ノードを選択する場所です。これらは機能ブロックであり、ドラッグ＆ドロップしてフローを作成するためにリンクできます。
* **フロー**: プログラムのソースコードです。このペインでは、ノードをリンクしてアプリケーションを作成できます。
* **サイドバー**: サイドバーには、選択したノードに関するヘルプやデバッグ情報が表示されます。

#### ライブラリをインストールする

デモを設定するために、以下の 2 つの追加ライブラリをインストールします：

* [node-red-contrib-loracloud-utils](https://www.npmjs.com/package/@semtech-wsp-apps/node-red-contrib-loracloud-utils): LoRa Cloud™ サーバーへの接続を処理します。

* [node-red-contrib-web-worldmap](https://www.npmjs.com/package/node-red-contrib-web-worldmap): "物"をプロットするためのワールドマップウェブページ

右上のメニューをクリックし、「パレットの管理」を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install.png" alt="pir" width={800} height="auto" /></p>

パレットメニューで「インストール」を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install_pak.png" alt="pir" width={800} height="auto" /></p>

「node-red-contrib-loracloud-utils」を検索してインストールします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install_loracloud.png" alt="pir" width={800} height="auto" /></p>

同じ手順を繰り返して「node-red-contrib-web-worldmap」ライブラリをインストールします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install_worldmap.png" alt="pir" width={800} height="auto" /></p>

#### フローのインポート

Seeed パッケージには、この例のプロジェクトを案内する便利なサンプルが含まれています。以下の2つの設定ファイルをインポートするだけです。

```
.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/Seeed_Wio_WM1110_Dev_Board-master/apps/examples/geolocation_application_server/modem.json

.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/Seeed_Wio_WM1110_Dev_Board-master/apps/examples/geolocation_application_server/geolocation.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow2.png" alt="pir" width={800} height="auto" /></p>

すると、以下のフローが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow3.png" alt="pir" width={800} height="auto" /></p>

#### フローの設定

**LoRaWAN ネットワークサーバー (MQTT) の設定**  
すべてのネットワークサーバーコネクタはデフォルトで有効化されていますが、MQTT接続は別途設定する必要があります。  
開始する前に、以下のデータを取得してください：
* MQTT サーバーアドレス
* MQTT ポート
* MQTT ユーザー名
* MQTT パスワード

これらのデータは **ステップ3: 認証情報の作成** で取得できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MQTT2.png" alt="pir" width={800} height="auto" /></p>

"TTN v3-Uplinks" ノードをダブルクリックし、MQTTノードを編集します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/configure_mqtt1.png" alt="pir" width={800} height="auto" /></p>

サーバーとポートは[前のステップ](https://wiki.seeedstudio.com/ja/Wio-WM1110_Dev_Kit_Server_Configuration/#step-3-create-credentials:~:text=Copy%20the%20values%20from%20the%20following%20fields%3A%20Server%20Address%2C%20Username%2C%20and%20Password.)で確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/TTN_TLS.png" alt="pir" width={800} height="auto" /></p>

次に、「セキュリティ」にユーザー名とパスワードを追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/TTN_se.png" alt="pir" width={800} height="auto" /></p>

「追加」をクリックし、その後「完了」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/add_and_done.png" alt="pir" width={600} height="auto" /></p>

"TTN joinReq" ノードをダブルクリックし、前のステップで追加したMQTTサーバーを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/select_server.png" alt="pir" width={800} height="auto" /></p>

**モデム & ジオロケーションサービスの設定**

サーバーを設定するには、[前のステップ](https://wiki.seeedstudio.com/ja/Wio-WM1110_Dev_Kit_Server_Configuration/#step-2-get-a-token)で取得した MGS URL と MGS TOKEN の値を使用します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_token.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_url.png" alt="pir" width={800} height="auto" /></p>

デバイスのEUIを入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_eui.png" alt="pir" width={800} height="auto" /></p>

「デプロイ」ボタンをクリックしてフローをデプロイします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/deploy.png" alt="pir" width={800} height="auto" /></p>

#### データビュー

「デバッグ」をクリックして、LoRa Cloud モデム & ジオロケーションサービスから返されるデータを確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/debug_page.png" alt="pir" width={800} height="auto" /></p>

**ジオロケーション**

マップを表示するには、ウェブブラウザのURLに `/worldmap` を追加します。  
例: http://127.0.0.1:1880/worldmap

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/map_page.png" alt="pir" width={800} height="auto" /></p>

## リソース

[Seeed_Wio_WM1110_Dev_Board](https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board)

[nRF5-SDK](https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs)

[SEGGER J-Link Software and Documentation Pack](https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack)



## 技術サポート

**Wio-WM1110 Dev Kit に関するサポートが必要ですか？私たちがサポートします！**




<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions" class="button_discussion"></a>
</div>