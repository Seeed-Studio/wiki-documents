---
description: Wio-WM1110 Dev Kit を始める
title: Wio-WM1110 Dev Kit を始める
keywords:
- Wio-WM1110 Dev Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Get_Started_with_Wio-WM1110_Dev_Kit
sidebar_position: 2
last_update:
  date: 8/7/2023
  author: Jessie
---

## 準備

- Wio-WM1110 Dev Kit x 1
- コンピュータ x 1
- USB Type-C ケーブル x 1
- J-Link Debug Programmer x 1

### デバイス接続

Wio-WM1110 Dev Board を J-Link Debug Programmer に以下のように接続します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/hardware_connection.png" alt="pir" width={800} height="auto" /></p>

:::info 接続:
**3V3** (Wio-WM1110 Dev Board) -> **VTref** (J-Link Debug Programmer Pin 1)  
**CLK** (Wio-WM1110 Dev Board) -> **SWCLK** (J-Link Debug Programmer Pin 9)  
**DIO** (Wio-WM1110 Dev Board) -> **SWDIO** (J-Link Debug Programmer Pin 7)  
**GND** (Wio-WM1110 Dev Board) -> **GND** (J-Link Debug Programmer GND)
:::

### ツールチェーンのセットアップ

開発を開始する前に、このスタートガイドには以下のツールが必要です。

#### SEGGER Embedded Studio (SES)

SES は、組み込みアプリケーションの管理、構築、テスト、デプロイのためのオールインワンソリューションです。これは、幅広い機能により、スムーズで効率的な開発作業を意味します。強力なプロジェクトマネージャーにより、大小のプロジェクトの管理が可能になります。バージョン管理機能により、自動アプリケーションデプロイメントが可能になります。

<a  href="https://www.segger.com/products/development-tools/embedded-studio/" target="_blank"><span>SEGGER Embedded Studio (SES)-ダウンロード</span></a>

:::tip
5.68 バージョンの使用を推奨します。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/5.68version.png" alt="pir" width={800} height="auto" /></p>

#### SEGGER J-Link ソフトウェアおよびドキュメントパック

<a  href="https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack" target="_blank"><span>SEGGER J-Link Software and Documentation Pack-ダウンロード</span></a>

#### nRF5 SDK

nRF5 SDK は、ペリフェラル、SoftDevices、独自の無線プロトコル用のドライバ、ライブラリ、サンプルの幅広い選択肢を含むことで、nRF5 シリーズデバイス用の豊富な開発環境を提供します。

SDK に含まれるすべてのコード例は、Wio-WM1110 Dev Kit でコンパイルして実行するように調整されています。

<a  href="https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs" target="_blank"><span>nRF5 SDK-ダウンロード</span></a>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/SDK_version.png" alt="pir" width={800} height="auto" /></p>

#### Seeed サンプルパッケージ

Seeed は、開発者がより迅速に開始できるようにサンプルプロジェクトを提供しています。このサンプルには、LoRaWAN 通信、位置情報取得、オンボードセンサーデータ取得などが含まれています。

<a  href="https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board" target="_blank"><span>Seeed サンプル-ダウンロード</span></a>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/list.png" alt="pir" width={600} height="auto" /></p>

## 最初のテストの実行

**nRF5 SDKにSeeedサンプルファイルを追加**

[Seeedサンプルファイル](https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board)をnRF5 SDKの以下のパスにコピーします：
`.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/copyfile.png" alt="pir" width={800} height="auto" /></p>

ツールチェーンが正しく設定されているかを確認するために、「ses_blinky」プロジェクトをビルドしてみましょう。
「ses_blinky」プロジェクトをインポートします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/opensolution.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/open-project.png" alt="pir" width={800} height="auto" /></p>

**テストアプリケーションのコンパイル**

「Build」>「Compile project_target」を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/complie.png" alt="pir" width={800} height="auto" /></p>

**テストアプリケーションのプログラミング**

アプリケーションをコンパイルした後、開発ボードにプログラムできます。

「Target」--「Connect J-Link」をクリックします
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/connect-to-JLink.png" alt="pir" width={800} height="auto" /></p>

「Build」--「Build and Run」をクリックしてblinkプロジェクトをビルドします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/run.png" alt="pir" width={800} height="auto" /></p>

完了すると「Download successful」が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/download-seccessful.png" alt="pir" width={800} height="auto" /></p>

その後、ボード上の2つのLEDが以下のように点滅します。

<div align="center"><img width={253} src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/blink-test.gif" /></div>

## はじめに

この章では、TTN経由でNode-Redに現在の位置情報を表示する方法を説明し、必要なすべてのサーバー（ネットワークサーバー(NS)とアプリケーションサーバー(AS)）の設定方法を説明します。

**アーキテクチャとデータフロー**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/flow.png" alt="pir" width={800} height="auto" /></p>

### キーの設定

デバイスがNS経由で通信する前に、3つのキーでデバイスを登録する必要があります。

Wio-WM1110 DKでは、ユーザーがDevEUI、AppEUI、AppKeyを設定できます。これは次のステップで必要なので、'lorawan_key_config.h'ファイルで独自のパラメータを定義し、DKにフラッシュできます。

ファイルの場所：
`.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/Seeed_Wio_WM1110_Dev_Board/apps/common/lorawan_key_config.h`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/keys.png" alt="pir" width={800} height="auto" /></p>

または、TTNで生成されたキーを取得し、'lorawan_key_config.h'ファイルに入力してDKで実行することもできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device3.png" alt="pir" width={800} height="auto" /></p>

### LoRa Cloud™ モデム & 位置情報サービス

LoRa Cloud Modem & Geolocation Servicesは、LoRaWANネットワーク上で動作するLoRa®デバイス向けの包括的なライフサイクル管理機能を提供します。これらの機能には以下が含まれますが、これらに限定されません：

- 包括的なデバイステレメトリ
- デバイスとアプリケーションの設定
- クロック同期
- パケット損失に対する堅牢性と透明なデータ断片化を備えた高度なデータ転送サービス（バッファストリーミングとファイルアップロード）
- 位置情報

開始するには、[LoRa Cloud™ポータル](https://www.loracloud.com/?__hstc=212684107.3eb7c02aaa159a9e414cb1b589ca989c.1678419369281.1686727930327.1686794688289.35&__hssc=212684107.3.1686794688289&__hsfp=1476773244)にアクセスしてアカウントを登録してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/signup.png" alt="pir" width={800} height="auto" /></p>

#### ステップ1：オーナーの作成

トークンを作成するには、まずオーナーを作成する必要があります。
DEVICE OWNERSページに移動します。
CREATE NEW OWNERをクリックします。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_owner.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_owner2.png" alt="pir" width={800} height="auto" /></p>

#### ステップ2：トークンの取得

アプリケーションサーバーがLoRa Cloud Modem & Geolocation Servicesサーバーへの呼び出しを認証するためにトークンが必要です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/tokens.png" alt="pir" width={800} height="auto" /></p>

#### ステップ3：API URL

LoRa Cloud Modem & Geolocation Services URLは、デバイスが展開される地域によって異なります。
「Manage Tokens」をクリックすると、API URLを確認できます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MGS.png" alt="pir" width={800} height="auto" /></p>

:::tip
デバイスからデータを受信すると、LoRa Cloud Modem & Geolocation Servicesサーバーに自動的に登録されます。これは、デバイスを事前に登録する必要がないことを意味します。
:::

### LoRaWAN® ネットワークサーバー(TTN)

現在、[The Things Network V3](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3)を使用しています

開始するには、The Things IndustriesまたはThe Things Networkでアカウントを登録してください。

#### ステップ1：アプリケーションの作成

Applicationsページに移動し、「+Create application」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

Application IDを入力し、Create Applicationをクリックして変更を保存します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>

#### ステップ2：デバイスの登録

「Register end device」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device.png" alt="pir" width={800} height="auto" /></p>

以下のパラメータを設定します：

**Frequency Plan**：対象地域に適した周波数プランを選択

**LoRaWAN version**：LoRaWAN Specification 1.0.3

**Regional Parameters version**：V1.0.3 REV A

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device1.png" alt="pir" width={800} height="auto" /></p>

:::tip
JoinEUI/DevEUI/APPEUI：前の設定で'lorawan_key_config.h'ファイルで定義したものです。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device5.png" alt="pir" width={800} height="auto" /></p>

#### ステップ3：認証情報の作成

The Things Network V3ネットワークサーバーでは、一意のMQTTパスワードを生成する必要があります。コンソールのApplicationページで：

- IntegrationsをクリックしてからMQTTをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MQTT1.png" alt="pir" width={800} height="auto" /></p>

- Generate new API Keyを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/API_key.png" alt="pir" width={800} height="auto" /></p>

- 以下のフィールドから値をコピーします：Server Address、Username、Password。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MQTT2.png" alt="pir" width={800} height="auto" /></p>

### Application Server

アプリケーションサーバーはアプリケーションデータとデバイス管理フレームを処理します。LoRaWAN®ネットワークサーバーとLora Cloud™ Modem & Geolocation Servicesの間にバックグラウンド接続がないため、モデムトラフィックに関連するすべてのアップリンクは、アプリケーションサーバーによってLora Cloud Modem & Geolocation Servicesに転送される必要があります。

アプリケーションサーバーとしてNode-REDを使用します。Node-REDは、高速プロトタイピングを可能にするブラウザベースのビジュアルプログラミングツールです。Node.js上に構築されたNode-REDは、幅広いノードを使用してフローを接続するために使用できます。これらのノードは、ワンクリックでNode-REDランタイムにデプロイできます。

#### Node.js®のインストール

Node-REDをローカルにインストールするには、<a  href="https://nodered.org/docs/faq/node-versions" target="_blank"><span>サポートされているNodeバージョン</span></a>が必要です。

公式の<a  href="https://nodejs.org/en/" target="_blank"><span>Node.js</span></a>から最新の16.x LTSバージョンのNode.jsをダウンロードしてください。お使いのシステムに最適なバージョンが提供されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/nodejs_version.png" alt="pir" width={600} height="auto" /></p>

Node.jsをインストールする際、プログラミング環境がインストールされていないコンピューターを使用している場合は、Node.jsのインストール時に必要なツールをインストールするボックスにチェックを入れることをお勧めします。これにより、多くの必要なトラブルを回避できます。

Node-REDをインストールする最も簡単な方法は、Nodeのパッケージ管理ツールであるnpmを使用することです。ただし、npm 1.xでNode-REDをインストールすることはお勧めしませんが、最新のnpm 2.xバージョンにアップグレードすることをお勧めします。

:::note
Windows（Windows 10以上が必要）では、Win+Rショートカットを使用し、ポップアップウィンドウでcmdと入力してターミナルを起動し、以下のコマンドを実行します。
:::

MacOSまたはLinuxを使用している場合は、ターミナルで以下のコマンドを実行し、非rootユーザーの場合はコマンドの前にsudoを追加してください。

```cpp
npm install -g npm@2.x
```

インストールが完了したら、コマンドプロンプトを開いて以下のコマンドを実行し、Node.jsとnpmが正しくインストールされていることを確認してください。

```cpp
node --version && npm --version
```

以下のような出力が返されるはずです：

```cpp
> v18.7.0
> 9.6.5
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/npm_version.png" alt="pir" width={600} height="auto" /></p>

#### Node-REDのインストール

Node-REDをグローバルモジュールとしてインストールすると、システムパスにnode-redコマンドが追加されます。コマンドプロンプトで以下を実行してください：

```cpp
npm install -g --unsafe-perm node-red
```

Node-REDがグローバルnpmパッケージとしてインストールされている場合は、node-redコマンドを直接実行します：

```cpp
node-red
```

これにより、http://localhost:1880 でNode-REDエディタを表示できるようになります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/node-red.png" alt="pir" width={600} height="auto" /></p>

ユーザーインターフェースには3つの主要なエリアがあります：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/nodered1.png" alt="pir" width={800} height="auto" /></p>

- **パレット**: ここでノードを選択できます。これらはドラッグアンドドロップ可能な機能ブロックで、リンクしてフローを作成できます。
- **フロー**: これはプログラムのソースコードです。このペインでは、ノードをリンクしてアプリケーションを作成できます。
- **サイドバー**: サイドバーには、選択したノードで利用可能なヘルプやデバッグ情報が表示されます。

#### ライブラリのインストール

デモンストレーションをセットアップするために、2つの追加ライブラリをインストールします：

- [node-red-contrib-loracloud-utils](https://www.npmjs.com/package/@semtech-wsp-apps/node-red-contrib-loracloud-utils): LoRa Cloud™サーバーへの接続を処理

- [node-red-contrib-web-worldmap](https://www.npmjs.com/package/node-red-contrib-web-worldmap): 「もの」をプロットするための世界地図Webページ

右上角のメニューをクリックして「Manage palette」を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install.png" alt="pir" width={800} height="auto" /></p>

パレットメニューでInstallを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install_pak.png" alt="pir" width={800} height="auto" /></p>

「node-red-contrib-loracloud-utils」を検索してインストールします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install_loracloud.png" alt="pir" width={800} height="auto" /></p>

これらの手順を繰り返して「node-red-contrib-web-worldmap」ライブラリをインストールします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install_worldmap.png" alt="pir" width={800} height="auto" /></p>

#### フローのインポート

Seeedパッケージには、このサンプルプロジェクトを進めるのに役立つサンプルが含まれており、これら2つの設定ファイルをインポートするだけです。

```
.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/Seeed_Wio_WM1110_Dev_Board-master/apps/examples/geolocation_application_server/modem.json

.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/Seeed_Wio_WM1110_Dev_Board-master/apps/examples/geolocation_application_server/geolocation.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow2.png" alt="pir" width={800} height="auto" /></p>

すると、以下のフローが表示されます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow3.png" alt="pir" width={800} height="auto" /></p>

#### フローの設定

**LoRaWAN ネットワークサーバー（MQTT）の設定**
すべてのネットワークサーバーコネクタはデフォルトで有効になっていますが、MQTT接続は別途設定する必要があります。
開始する前に、必要なデータを取得してください：

- MQTTサーバーアドレス
- MQTTポート
- MQTTユーザー名
- MQTTパスワード

このデータは**ステップ3：認証情報の作成**で取得できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MQTT2.png" alt="pir" width={800} height="auto" /></p>

"TTN v3-Uplinks"ノードをダブルクリックし、MQTTノードを編集します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/configure_mqtt1.png" alt="pir" width={800} height="auto" /></p>

サーバーとポートは[前のステップ](https://wiki.seeedstudio.com/ja/Wio-WM1110_Dev_Kit_Server_Configuration/#step-3-create-credentials:~:text=Copy%20the%20values%20from%20the%20following%20fields%3A%20Server%20Address%2C%20Username%2C%20and%20Password.)で確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/TTN_TLS.png" alt="pir" width={800} height="auto" /></p>

次に、「Security」にユーザー名とパスワードを追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/TTN_se.png" alt="pir" width={800} height="auto" /></p>

「Add」をクリックし、次に「Done」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/add_and_done.png" alt="pir" width={600} height="auto" /></p>

"TTN joinReq"ノードをダブルクリックし、前のステップで追加したMQTTサーバーを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/select_server.png" alt="pir" width={800} height="auto" /></p>

**Modem & Geolocation Service設定**

サーバーを設定するには、[前のステップ](https://wiki.seeedstudio.com/ja/Wio-WM1110_Dev_Kit_Server_Configuration/#step-2-get-a-token)のMGS URLとMGS TOKEN値を使用します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_token.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_url.png" alt="pir" width={800} height="auto" /></p>

デバイスのEUIを入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_eui.png" alt="pir" width={800} height="auto" /></p>

「Deploy」ボタンをクリックしてフローをデプロイします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/deploy.png" alt="pir" width={800} height="auto" /></p>

#### データ表示

「Debug」をクリックして、LoRa Cloud Modem & Geolocation Servicesから返されるデータを表示します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/debug_page.png" alt="pir" width={800} height="auto" /></p>

**位置情報**

マップを表示するには、WebブラウザーのURLに`/worldmap`を追加します。
例：http://127.0.0.1:1880/worldmap

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/map_page.png" alt="pir" width={800} height="auto" /></p>

## Resources

[Seeed_Wio_WM1110_Dev_Board](https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board)

[nRF5-SDK](https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs)

[SEGGER J-Link Software and Documentation Pack](https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack)

## Tech Support

**Wio-WM1110 Dev Kitでお困りですか？サポートいたします！**

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions" class="button_discussion"></a>
</div>
