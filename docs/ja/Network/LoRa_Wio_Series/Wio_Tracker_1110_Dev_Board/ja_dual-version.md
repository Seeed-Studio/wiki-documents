---
description: Wio Tracker Dual Stack Version
title:  Amazon SidewalkとLoRaWANネットワークによるシームレスなアセット追跡
keywords:
- Tracker
- AWS
- Sidewalk
- LoRaWAN
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/wio_tracker_dual_stack
sidebar_position: 8
sidebar_class_name: hidden
last_update:
  date: 3/4/2024
  author: Jessie
---


## はじめに

このデュアルデバイスデモでシームレスなネットワーク統合を体験してください。セットアップには、多機能なSeeed Studio Wio Tracker Dev Boardと堅牢なSeeed Studio SenseCAP T1000-S Trackerデバイスが含まれており、両方とも最適なカバレッジのためにLoRaWANとSidewalkネットワーク間のシームレスな移行を実現しています。

- **デュアルネットワークサポート**: ボタンを一度押すだけで、LoRaWANとSidewalk間を切り替えて持続的な接続を維持できます。
- **クラウド接続**: AWS IoT Coreへのリアルタイムデータ転送を目撃し、ラップトップディスプレイ/モニター上のAWSウェブアプリを通じて可視化されます。
- **バッテリー駆動の効率性**: デバイスは一貫した動作を保証し、ワイヤーに縛られることなく真にモバイルな体験を提供します。

プロセスは以下の主要なステップに分かれています：

- [SDKのインストールとセットアップ](https://wiki.seeedstudio.com/ja/wio_tracker_dual_stack#setup-toolchain)
- [ファームウェアのフラッシュ](https://wiki.seeedstudio.com/ja/wio_tracker_dual_stack#build-and-flash-the-demo)
- AWS IoT Coreの設定
- Amazon Locationの設定
- [ウェブアプリの設定](https://wiki.seeedstudio.com/ja/wio_tracker_dual_stack#building-web-app)

## 前提条件

### nRF Connect SDKのインストール

nRF Connect SDKをインストールする方法は、お好みの開発環境と[ツールチェーン管理ツール](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/recommended_versions.html#toolchain-management-tools)によっていくつかあります：

- Visual Studio CodeとnRF Connect for VS Code拡張機能を使用（推奨）

- コマンドラインとnRF Utilを使用

**ステップ1: オペレーティングシステムの更新**

ツールチェーンのセットアップを開始する前に、オペレーティングシステムの利用可能な更新をインストールしてください。サポートされているオペレーティングシステムの情報については、[要件](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/recommended_versions.html#requirements)を参照してください。

**ステップ2: 前提条件のインストール**

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="VSc" label="Visual Studio Code">

- <a href="https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/recommended_versions.html#requirements-clt">nRF Command Line Tools</a>パッケージの最新版。<a href="https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Command-Line-Tools">nRF Command Line Tools</a>ページからダウンロードしてください。<br/>

- お使いのオペレーティングシステム用のVisual Studio Codeの最新版を<a href="https://code.visualstudio.com/download">Visual Studio Codeダウンロードページ</a>から入手してください。<br/>

- Visual Studio Codeで、<a href="https://marketplace.visualstudio.com/items?itemName=nordic-semiconductor.nrf-connect-extension-pack">nRF Connect for VS Code Extension Pack</a>の最新版。

</TabItem>
<TabItem value="CLine" label="Command Line">

- <a href="https://www.nordicsemi.com/Products/Development-tools/nrf-util">nRF Util開発ツール</a>の最新版、Nordic製品用の統合コマンドライン ユーティリティ。<br/>

<div className="tip" style={{backgroundColor: 'lightblue', padding: '1em', borderRadius: '0.5em'}}>
  <p style={{marginBottom: '0.5em'}}>
    <strong>注意:</strong>
  </p>
  <p style={{marginTop: '0'}}>
      nRF Util実行ファイルをダウンロードした後、システム<code>PATH</code>にあるディレクトリに移動してください。macOSとLinuxでは、ダウンロードしたファイルに<code>chmod +x nrfutil</code>と入力するか、ファイルプロパティのチェックボックスをチェックして実行権限を与える必要があります。
  </p>
</div>

- <a href="https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/recommended_versions.html#requirements-clt">nRF Command Line Tools</a>パッケージの最新版、<a href="https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Command-Line-Tools">nRF Command Line Tools</a>ページからダウンロードしてください。

<div className="tip" style={{backgroundColor: 'lightblue', padding: '1em', borderRadius: '0.5em'}}>
    <p style={{marginBottom: '0.5em'}}>
      <strong>注意:</strong>
    </p>
    <p style={{marginTop: '0'}}>
      ツールをダウンロードしてインストールした後、環境変数でnrfjprogをシステム<code>PATH</code>に追加してください。
    </p>
  </div>

</TabItem>
</Tabs>

**ステップ3: nRF Connect SDKツールチェーンのインストール**

<Tabs>
<TabItem value="VScode" label="nRF Connect for Visual Studio Code">
  
- <code>Activity Bar</code>のアイコンをクリックして、Visual Studio CodeでnRF Connect拡張機能を開きます。<br/><br/>
- 拡張機能の<code>Welcome View</code>で、<code>Install Toolchain</code>をクリックします。<br/><br/>
- インストールするツールチェーンバージョンを選択します。ツールチェーンバージョンは、作業予定のnRF Connect SDKバージョンと一致する必要があります。<code>V2.5.0</code>（推奨）を使用します。<br/><br/>

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/bar2.png"/></div>
ツールチェーンをインストールした後、<code>Manage toolchains</code>をクリックして<code>Install Toolchain</code>オプションにアクセスできます。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/manage-toolchain.png"/></div>

</TabItem>
<TabItem value="CL" label="Command Line">

- ターミナルウィンドウを開きます。

- 以下のコマンドを実行してnRF Util toolchain-managerコマンドをインストールします：

 ```cpp
 nrfutil install toolchain-manager
 ```

- 以下のコマンドを実行して、利用可能なインストールを一覧表示します：

 ```cpp
 nrfutil toolchain-manager search
 ```

このリストのバージョンは nRF Connect SDK のバージョンに対応しており、次のステップでバージョン管理されます。

- 選択した SDK バージョンに対応するツールチェーンバージョンをインストールするには、以下のコマンドを実行してください：

 ```cpp
 nrfutil toolchain-manager install --ncs-version version
 ```

 例えば：

 ```cpp
 nrfutil toolchain-manager install --ncs-version v2.5.0
 ```

この例のコマンドは、nRF Connect SDK v2.5.0（推奨）に必要なツールチェーンをインストールします。

:::tip
ツールチェーンは、Windowsでは C:/ncs/toolchains、Linuxでは ~/ncs/toolchains、macOSでは /opt/nordic/ncs/toolchains にデフォルトでインストールされます。
:::

現在の設定を確認するには、<code>nrfutil toolchain-manager config --show</code> コマンドを使用してください。<br/>これらのコマンドについて詳しく読むには、<code>nrfutil toolchain-manager --help</code> コマンドを使用してください。
  </TabItem>
</Tabs>

**ステップ 4: nRF Connect SDK コードを取得する**

  <Tabs>
  <TabItem value="VScode4" label="nRF Connect for Visual Studio Code">

nRF Connect SDK コードをクローンするには、以下の手順を完了してください：

- <code>Activity Bar</code> のアイコンをクリックして、Visual Studio Code で nRF Connect 拡張機能を開きます。

- 拡張機能の <code>Welcome View</code> で、<code>Manage SDKs</code> をクリックします。Visual Studio Code のクイックピックにアクションのリストが表示されます。

- <code>Install SDK</code> をクリックします。Visual Studio Code のクイックピックに利用可能な SDK バージョンのリストが表示されます。

- インストールする SDK バージョンを選択します。ここでは `V2.5.0` を使用します。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/manage-sdk2.png"/></div>

SDK のインストールが開始され、数分かかる場合があります。

  </TabItem>
  <TabItem value="CLine4" label="Command Line">

リポジトリをクローンするには、以下の手順を完了してください：

- コマンドラインで、`ncs` ディレクトリを開きます。デフォルトでは、これはツールチェーンをインストールした場所から1つ上のレベルです。このディレクトリには、すべての nRF Connect SDK リポジトリが保存されます。

- 以下のコマンドを使用して、お使いのオペレーティングシステム用のツールチェーン環境を開始します：

  Windows

  ```cpp
  nrfutil toolchain-manager launch --terminal
  ```

  Linux/macOS

  ```cpp
  nrfutil toolchain-manager launch --shell
  ```

- 作業したいnRF Connect SDKのリビジョンの識別子を決定します。詳細については上記の表を参照してください。nRF Connect SDKを初めてインストールする際は、SDKとツールチェーンの最新リリース版をインストールすることを推奨します。

- チェックアウトしたいnRF Connect SDKのリビジョンでwestを初期化し、nRFConnectSDK_revisionを識別子に置き換えます：

  ```cpp
  west init -m https://github.com/nrfconnect/sdk-nrf --mr nRFConnectSDK_revision
  ```

例えば：

  **特定のリリース**: v2.5.0リリースをチェックアウトするには、以下のコマンドを入力してください：

  ```cpp
  west init -m https://github.com/nrfconnect/sdk-nrf --mr v2.5.0
  ```

**開発タグ**: v1.9.2-dev1 タグをチェックアウトするには、以下のコマンドを入力してください：

  ```cpp
  west init -m https://github.com/nrfconnect/sdk-nrf --mr v1.9.2-dev1
  ```

  **ブランチ**: 開発の最新状態を含むメインブランチをチェックアウトするには、以下のコマンドを入力してください：

  ```cpp
  west init -m https://github.com/nrfconnect/sdk-nrf --mr main
  ```

これにより、マニフェストリポジトリ sdk-nrf が nrf にクローンされます。

マニフェストファイルの特定のリビジョンで west を初期化しても、リポジトリがこのバージョンにロックされるわけではありません。sdk-nrf リポジトリで異なるブランチやタグをチェックアウトして west update を実行すると、作業する nRF Connect SDK のバージョンが変更されます。

<div className="tip" style={{backgroundColor: 'lightblue', padding: '1em', borderRadius: '0.5em'}}>
    <p style={{marginBottom: '0.5em'}}>
      <strong>注意:</strong>
    </p>
    <p style={{marginTop: '0'}}>
      west の実行時にエラーメッセージが表示される場合は、west を最新バージョンに更新してください。詳細については、Zephyr ドキュメントの <a href="https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/zephyr/develop/west/troubleshooting.html#west-troubleshooting">Troubleshooting West</a> を参照してください。
    </p>
  </div>
  
- 以下のコマンドを入力してプロジェクトリポジトリをクローンします：

  ```cpp
  west update
  ```

接続状況によっては、これには時間がかかる場合があります。

- Zephyr CMake パッケージをエクスポートします。これにより、CMake が nRF Connect SDK アプリケーションのビルドに必要なボイラープレートコードを自動的にロードできるようになります：

  ```cpp
  west zephyr-export
  ```

[nRF Connect SDKのインストール](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/install_ncs.html#id9)で詳細を確認してください。

</TabItem>
</Tabs>

### Sidewalk環境のセットアップ

nRF Connect SDK用のSidewalkアプリケーションをダウンロードするには、以下の手順に従ってください：

- ターミナルウィンドウを開きます。ディレクトリ構造は以下のようになっているはずです：

```cpp
.
|___ .west
|___ bootloader
|___ modules
|___ nrf
|___ nrfxlib
|___ zephyr
|___ ...
```

- マニフェストパスがnrfディレクトリ内のwest.ymlを指していることを確認してください：

```cpp
west manifest --path
/path-to-ncs-folder/nrf/west.yml
```

マニフェストパスが異なるファイルを指している場合は、以下のコマンドを使用してください：

```cpp
west config manifest.path nrf
```

- west用のSidewalkグループフィルターを有効にします。

```cpp
west config manifest.group-filter "+sidewalk"
```

westでSidewalkの存在を確認する：

```cpp
west list sidewalk
sidewalk     sidewalk                     <sidewalk_revision> https://github.com/nrfconnect/sdk-sidewalk
```

- すべてのリポジトリを更新：

```cpp
west update
```

接続状況によっては、更新に時間がかかる場合があります。

- Sidewalk用のPython要件をインストールします。

```cpp
pip install -r sidewalk/requirements.txt
```

### nRF Connect SDK Sidewalk ExtensionにLR11xxを追加

このリポジトリには、[LR11xxファミリー](https://www.semtech.com/products/wireless-rf/lora-edge)のシリコンが[Nordic nRF52840 MCU](https://www.nordicsemi.com/Products/Development-hardware/nrf52840-dk)およびnRF Connect SDKと組み合わせてSidewalkプロトコルをサポートできるようにするソフトウェアドライバが含まれています。このドライバはバイナリ形式で提供され、LoRaまたはFSK接続をサポートするために必要な「プラットフォーム抽象化レイヤー」インターフェースを実装する静的ライブラリとして提供されます。静的ライブラリには、SemtechのSWDR001（LR11xxドライバ）の完全な実装が含まれており、WIFIやGNSSスキャニング、測距などのLR11xxシリコンの他の機能にアクセスするために使用できます。

- [SWDM016](https://drive.google.com/drive/folders/1vHJVEFgyx4arHHPlSjdMkffVStnTpHqg?usp=sharing)をダウンロード

- クローンしたnordicリポジトリの作業ディレクトリで、トップレベルディレクトリ、つまり``~/ncs/<version>/sidewalk``で：

 ```cpp
 patch -p1 < ../nRF52840_LR11xx_driver_v010000.diff
 ```

親ディレクトリパス `..` は、diffファイルをそこに配置することを前提としています。そうでない場合は、その場所への完全パスを指定できます。

- 無線ドライバライブラリ ``lib*.a`` をsidewalkプロジェクトの ``~/ncs/<version>/sidewalk/lib/lora_fsk/`` にコピーしてください。  
2つのライブラリが提供されており、1つは ``LOG_RUNTIME_FILTERING`` が有効になっているもの、もう1つは無効になっているものです。

- ``~/template_lbm_wio_tracker/boards/arm/wio_tracker_1110`` フォルダを ``~/ncs/v2.5.0/zephyr/boards/arm`` にコピーしてください。

```cpp
·
├─── .west/
├─── modules/
├─── nrf/
├─── ...
└─── zephyr/
     └─── Boards/
          └─── arm/
               └─── wio_tracker_1110/
```

### リソースの作成

**ステップ1: Cloud9環境のデプロイ**

このセクションでは、開始前に必要なすべてのリソースを作成します。最初のステップとして、他のリソースの構築とデプロイに使用するCloud9ワークスペースを作成します。次に、Asset Trackerアプリのすべてのバックエンドリソースを含むCDKスタックをデプロイします。最後に、すべてのフロントエンドの依存関係をインストールし、アプリを設定します。

- [AWS Cloud9コンソール](https://us-east-1.console.aws.amazon.com/cloud9/home?region=us-east-1)を開き、`Create Environment`をクリックします

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/cloud-9-environment.png"/></div>

- **Instance type**以外のすべての設定はデフォルトのままにします。`m5.large`を選択します。

<div align="center"><img width="{600}" src="https://static.us-east-1.prod.workshops.aws/public/f3adb45a-50d1-499b-a20d-93bbbb82ee26/static/images/001/002/c9.3.png"/></div>

**ステップ2: 前提条件の設定**

- Cloud9 IDEを開きます。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/open-cloud9.png"/></div>

- 以下のコマンドを入力して、Cloud9環境のターミナルでgithubリポジトリをクローンします：

 ```cpp
 git clone --recurse-submodules https://github.com/aws-samples/aws-iot-asset-tracker-demo.git /home/ec2-user/environment/asset-tracking-workshop
 ```

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/open-could9.png"/></div>

- サンプルアプリディレクトリに移動します：

 ```cpp
 cd ~/environment/asset-tracking-workshop
 ```

- 基盤となるEC2インスタンスのEBSボリュームをリサイズします。

 ```cpp
 npm run utils:resizeC9EBS
 ```

- プロジェクトの依存関係をインストールします：

 ```cpp
 npm ci
 ```

- バックエンドインフラストラクチャをデプロイする：

 ```cpp
 # Prepare the AWS account for CDK
 npm run infra:bootstrap
 # Deploy the backend resources
 npm run infra:deploy
 ```

- 設定ファイルを作成する：

 ```cpp
 npm run utils:createConfig
 ```

## LoRaWAN設定

### AWS上でLoRaWANゲートウェイを追加

[SenseCAP M2 Multi-Platformゲートウェイ](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html)をAWS IoT Coreに追加するには、この[Get Started](https://wiki.seeedstudio.com/ja/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT/#add-gateway)をご確認ください。

### AWS上でLoRaWANデバイスを追加

**ステップ1: キーを定義する**

`src/lorawan_v4/example_options.h`で`DevEUI/JoinEUI/APPkey`と`REGION`を定義します。

:::tip
JoinEUIはAppEUIとも呼ばれます
:::

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/3-params.png"/></div>

**ステップ2: プロファイルを作成する**

[AWS IoTコンソール](https://console.aws.amazon.com/iot/home)にログインし、`Devices`に移動して`Profiles`をクリックします。

- デバイスプロファイル

デバイスプロファイルは、ネットワークサーバーがLoRaWAN無線アクセスサービスを設定するために使用するデバイス機能とブートパラメータを定義します。LoRa周波数帯域、LoRa地域パラメータバージョン、デバイスのMACバージョンなどのパラメータの選択が含まれます。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/device-profiles.png"/></div>

異なる周波数帯域について詳しく学ぶには、[ゲートウェイとデバイス接続のLoRa周波数帯域の選択を検討する](https://docs.aws.amazon.com/iot-wireless/latest/developerguide/lorawan-rfregion-permissions.html#lorawan-frequency-bands)をご覧ください。

- サービスプロファイル

各ペイロードに対してRSSIやSNRなどの追加のゲートウェイメタデータを受信できるように、`AddGWMetaData`設定を有効にしておくことをお勧めします。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/service-profiles.png"/></div>

**ステップ3: デバイスを追加する**

`LPWAN devices` > `Devices`に移動し、`Add wireless device`をクリックします。

`Wireless device specification`: OTAAv1.0x

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG" alt="pir" width={800} height="auto" /></p>

前のステップで作成したデバイスプロファイルと宛先を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/device-eui2.png" alt="pir" width={800} height="auto" /></p>

Devicesページに移動し、前に追加したデバイスを選択します。

## Sidewalk設定

### Sidewalkゲートウェイの設定（オプション）

Sidewalkゲートウェイを設定し、構成して、ゲートウェイをAmazonアカウントに関連付けることができます。SidewalkエンドポイントはAmazon Sidewalkに登録された後、Sidewalkゲートウェイに接続して通信します。

詳細については、[Sidewalkゲートウェイの設定](https://docs.sidewalk.amazon/getting-started/sidewalk-onboard-prereq-gateway.html)をご確認ください。

### Sidewalkデバイスの設定

#### Sidewalkデバイスを追加する

**ステップ1: デバイスプロファイルとSidewalkエンドデバイスを追加する**

ワイヤレスデバイスを作成する前に、まずデバイスプロファイルを作成します。

[Devices hubのSidewalkタブ](https://console.aws.amazon.com/iot/home#/wireless/devices?tab=sidewalk)に移動し、`Provision device`を選択して、以下のステップを実行します。

**ステップ2: デバイスJSONファイルを取得する**

SidewalkデバイスをプロビジョニングするためのJSONファイルを取得するには：

- [Sidewalk devices hub](https://console.aws.amazon.com/iot/home#/wireless/devices?tab=sidewalk)に移動します。

- Amazon SidewalkのAWS IoT Coreに追加したデバイスを選択して、その詳細を表示します。

- 追加したデバイスの詳細ページで`Download device JSON file`を選択してJSONファイルを取得します。

エンドデバイスのプロビジョニングに必要な情報を含む`certificate.json`ファイルがダウンロードされます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/dual/download-json.png" alt="pir" width={800} height="auto" /></p>

**ステップ3: Sidewalkエンドポイントをプロビジョニングする**

**バイナリイメージを生成する**

- 要件ファイルをインストールする

Sidewalk SDKフォルダ`$[Amazon Sidewalk repository]/tools/scripts/public/provision/`に移動し、以下のコマンドを実行して`requirements`ファイルをインストールします。

 ```cpp
 pip3 install -r requirements.txt
 ```

- 製造バイナリイメージを生成する

 `provision.py` スクリプトを実行して、Sidewalk エンドポイントとして使用する開発ボードをプロビジョニングするために使用される製造バイナリイメージファイルを生成します。

- AWS IoT コンソールから取得した結合デバイス JSON ファイルを使用している場合は、プロビジョニングスクリプトを実行する際に certificate_json パラメータを使用してこのファイルを入力として指定してください。

 ```cpp
 python3 provision.py aws --output_bin mfg.bin --certificate_json certificate.json \ 
    --config config/[device_vendor]/[device]_dk/config.yaml
 ```

 別々のデバイスJSONファイルを使用している場合（GetDeviceProfileおよびGetWirelessDevice API操作からのレスポンスとして取得したもの）、プロビジョニングスクリプトを実行する際に、wireless_device_jsonおよびdevice_profile_jsonパラメータを使用してこれらのファイルを入力として指定してください。

 ```cpp
 python3 provision.py aws --output_bin mfg.bin \  
    --wireless_device_json wireless_device.json \
    --device_profile_json device_profile.json \ 
    --config config/[device_vendor]/[device]_dk/config.yaml
 ```

以下の出力が表示されるはずです：

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/gen-files.png"/></div>

- mfg.hexファイルをフラッシュします

 プロビジョニングファイルは通常、`EdgeDeviceProvisioning`ディレクトリに配置されます。

 バイナリイメージをフラッシュするには、Nordic Semiconductor HDKでバイナリイメージをロードする際にアドレス`0xFD000`を使用してください。バイナリイメージのフラッシュについては、Nordic Semiconductorのドキュメントを参照してください。

**ステップ4：デモをビルドしてフラッシュする**

- ターミナルウィンドウを開きます。

- `template_lbm_wio_tracker`ディレクトリに移動します。

 例：

  ```cpp
  cd /opt/nordic/ncs/v2.5.0/sidewalk/samples/template_lbm_wio_tracker
  ```

- 以下のwestコマンドを使用してアプリケーションをビルドします：

 ```cpp
 west build --board wio_tracker_1110 -- -DRADIO=LR1110_SRC
 ```

または事前コンパイル済みの無線ドライバライブラリを使用する場合：

 ```cpp
 west build --board wio_tracker_1110 -- -DRADIO=LR1110
 ```

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/comparing.png"/></div>

- 以下のwestコマンドを使用してアプリケーションをフラッシュします：

 ```cpp
 west flash
 ```

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/flash-suc.png"/></div>

### Sidewalk登録

Sidewalkエンドポイントをプロビジョニングした後、Sidewalkネットワーク経由で通信できるようにエンドポイントを登録する必要があります。

Sidewalkエンドポイントを登録するには、Sidewalk Frustration Free Networking（FFN）を使用した自動タッチレス登録を使用するか、登録スクリプトを実行するMacまたはネイティブUbuntuマシンを使用してデバイスを手動で登録します。

|基準 自動|登録（Sidewalk FFNを使用）|手動登録|
 |--|--|--|
 |ユーザーとエンドポイントの関連付け| この登録方法では、Sidewalkエンドポイントとユーザー間の関連付けは必要ありません。エンドポイントは、どのユーザーとも関連付けられることなくSidewalkネットワークに参加できます。 |この登録方法では、Sidewalkエンドポイントとユーザーのアマゾンアカウント間の関連付けが必要です。|
 |LWA（Login with Amazon）| LWAは必要ありません。| LWAは、ユーザーのアマゾンアカウントとSidewalkエンドポイント開発者が使用するAWSアカウントをリンクするために必要です。|

**Sidewalk FFNを使用して登録を実行するには：**

- Sidewalkゲートウェイとエンドポイントの電源を入れる必要があります。
- ゲートウェイはSidewalkにオプトインされ、エンドポイントの近距離にある必要があります。デバイス同士を10メートル以内に保つことをお勧めします。

 `手動Sidewalk登録`およびその他の詳細については、[こちら](https://docs.sidewalk.amazon/provisioning/iot-sidewalk-register-endpoint.html)をご確認ください。

### ネットワーク切り替え

 デフォルトはLoRaWANネットワークです。`ユーザーボタン`をクリックしてネットワークを切り替えます。

 <div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/click-button.png"/></div>

### メッセージの表示

#### 宛先の追加

[IoT Coreコンソール](https://us-east-1.console.aws.amazon.com/iot/home?region=us-east-1#/home)で、左メニューから`LPWAN devices`を選択し、次に`Destinations`を選択します。

`Edit`を選択し、`Publish to AWS IoT Core message broker`を選択します。トピックテキストボックスに、MQTTトピックとしてassetsを入力します。

`Permissions`の下で`Create a new service role`を選択し、`Role name`は空白のままにします。

- **ExpressionType**: `MqttTopic`
- **Expression**: `EmbeddedWorldTrackerDemo`

#### デコーダールールの追加

`Message routing`タブ → `Rules`に移動し、`Create Rule`ボタンをクリックします。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules.png"/></div>

ルールに名前を付けて送信します。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules2.png"/></div>

IoT Core Ruleから、`Lambda`関数を選択します。次に`Create a Lambda function`をクリックします。

Author from scratch<br/>
`Function name`: 関数に名前を付けます。<br/>
`Runtime`: Node.js 14.x<br/>
`Architexture`: x86_64<br/>

`Create function`ボタンをクリックして新しい関数を作成します

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cre-function.png"/></div>

次の関数設定ページで、すべてのコードを削除し、以下のスクリプトに置き換えて、`Deploy`ボタンをクリックします。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decod.png"/></div>

<details>
<summary>Lambdaコード</summary>

```javascript
const {IoTDataPlaneClient, PublishCommand} = require("@aws-sdk/client-iot-data-plane");
const {IoTWirelessClient, GetWirelessDeviceCommand} = require("@aws-sdk/client-iot-wireless");
const client = new IoTDataPlaneClient({
    "region": "us-east-1"
});
const wireless_client = new IoTWirelessClient({
    "region": "us-east-1"
});

function decodeUplink(input) {
    const originMessage = input.toLocaleUpperCase()
    const decoded = {
        valid: true,
        err: 0,
        payload: input,
        messages: []
    }
    let measurement = messageAnalyzed(originMessage)
    if (measurement.length === 0) {
        decoded.valid = false
        return {data: decoded}
    }

    for (let message of measurement) {
        if (message.length === 0) {
            continue
        }
        let elements = []
        for (let element of message) {
            if (element.errorCode) {
                decoded.err = element.errorCode
                decoded.errMessage = element.error
            } else {
                elements.push(element)
            }
        }
        if (elements.length > 0) {
            decoded.messages.push(elements)
        }
    }
    return {data: decoded}
}

function messageAnalyzed(messageValue) {
    try {
        let frames = unpack(messageValue)
        let measurementResultArray = []
        for (let i = 0; i < frames.length; i++) {
            let item = frames[i]
            let dataId = item.dataId
            let dataValue = item.dataValue
            let measurementArray = deserialize(dataId, dataValue)
            measurementResultArray.push(measurementArray)
        }
        return measurementResultArray
    } catch (e) {
        return e.toString()
    }
}

function unpack(messageValue) {
    return [{dataId: 0, dataValue: messageValue}]
}

function deserialize(dataId, dataValue) {
    let measurementArray = null
    measurementArray = [
        {
            measurementId: '4198',
            type: 'Latitude',
            measurementValue: parseFloat(getSensorValue(dataValue.substring(0, 8), 1000000))
        },
        {
            measurementId: '4197',
            type: 'Longitude',
            measurementValue: parseFloat(getSensorValue(dataValue.substring(8, 16), 1000000))
        },
        {
            measurementId: '4097',
            type: 'Air Temperature',
            measurementValue: getSensorValue(dataValue.substring(16, 20), 10)
        },
        {
            measurementId: '4098',
            type: 'Air Humidity',
            measurementValue: getSensorValue(dataValue.substring(20, 22))
        }
    ]
    return measurementArray
}

function getSensorValue(str, dig) {
    if (str === '8000') {
        return null
    } else {
        return loraWANV2DataFormat(str, dig)
    }
}

function bytes2HexString(arrBytes) {
    var str = ''
    for (var i = 0; i < arrBytes.length; i++) {
        var tmp
        var num = arrBytes[i]
        if (num < 0) {
            tmp = (255 + num + 1).toString(16)
        } else {
            tmp = num.toString(16)
        }
        if (tmp.length === 1) {
            tmp = '0' + tmp
        }
        str += tmp
    }
    return str
}

function loraWANV2DataFormat(str, divisor = 1) {
    let strReverse = bigEndianTransform(str)
    let str2 = toBinary(strReverse)
    if (str2.substring(0, 1) === '1') {
        let arr = str2.split('')
        let reverseArr = arr.map((item) => {
            if (parseInt(item) === 1) {
                return 0
            } else {
                return 1
            }
        })
        str2 = parseInt(reverseArr.join(''), 2) + 1
        return '-' + str2 / divisor
    }
    return parseInt(str2, 2) / divisor
}

function bigEndianTransform(data) {
    let dataArray = []
    for (let i = 0; i < data.length; i += 2) {
        dataArray.push(data.substring(i, i + 2))
    }
    return dataArray
}

function toBinary(arr) {
    let binaryData = arr.map((item) => {
        let data = parseInt(item, 16)
            .toString(2)
        let dataLength = data.length
        if (data.length !== 8) {
            for (let i = 0; i < 8 - dataLength; i++) {
                data = `0` + data
            }
        }
        return data
    })
    return binaryData.toString().replace(/,/g, '')
}

exports.handler = async (event) => {
    try {
        let device_id = event['WirelessDeviceId'];
        let lorawan_info = null;
        let sidewalk_info = null;
        let payload = null
        let timestamp = null

        let queryDeviceRequest = {
            Identifier: device_id,
            IdentifierType: "WirelessDeviceId"
        }
        let deviceInfo = await wireless_client.send(new GetWirelessDeviceCommand(queryDeviceRequest))
        console.log("device_info：" + JSON.stringify(deviceInfo))
        if (!deviceInfo || deviceInfo.name) {
            return {
                statusCode: 500,
                body: 'can not find this wirelessDeviceId: ' + device_id
            };
        }
        let device_name = deviceInfo.Name

        if (event["WirelessMetadata"]["LoRaWAN"]) {
            lorawan_info = event["WirelessMetadata"]["LoRaWAN"]
            timestamp = lorawan_info["Timestamp"]
            let bytes = Buffer.from(event["PayloadData"], 'base64');
            payload = bytes2HexString(bytes)
        } else if (event["WirelessMetadata"]["Sidewalk"]) {
            timestamp = new Date().getTime()
            let origin = new Buffer(event["PayloadData"], 'base64')
            payload = origin.toString('utf8')
        }

        console.log(`event.PayloadData: ${payload}`)
        const resolved_data = decodeUplink(payload);
        
        // publish all measurement data
        const input = { // PublishRequest
            topic: `tracker/EmbeddedWorldTrackerDemo/sensor/${device_id}`,
            qos: 0,
            retain: false,
            payload: JSON.stringify({
                DeviceName: "assettracker",
                timestamp: timestamp,
                data: resolved_data.data,
                WirelessDeviceId: device_id,
                PayloadData: event['PayloadData'],
                WirelessMetadata: event["WirelessMetadata"]
            })
        };

        const command = new PublishCommand(input);
        const response = await client.send(command);
        console.log("response: " + JSON.stringify(response));
        return {
            statusCode: 200,
            body: 'Message published successfully' + JSON.stringify(event)
        };
    } catch (error) {
        console.error('Error publishing message:', error);

        return {
            statusCode: 500,
            body: 'Error publishing message'
        };
    }
};
```

</details>

<div align="center"><img width="{600}" src="https://static.us-east-1.prod.workshops.aws/public/f3adb45a-50d1-499b-a20d-93bbbb82ee26/static/images/004/001/lambda.1.png"/></div>

次に`Device Destination`に戻り、Enter a rule nameを選択して、先ほど作成した名前を入力します。

`AWS IoT Core Console`に移動し、`MQTT Test Client`を選択してトピックを購読します。

#### トラッカールールを追加

上記の手順を繰り返して新しいルールを作成し、以下のLambdaコードをコピーします：

<details>
<summary>Lambda Code</summary>

```javascript
const {IoTDataPlaneClient, PublishCommand} = require("@aws-sdk/client-iot-data-plane");

const {LocationClient, BatchUpdateDevicePositionCommand} = require("@aws-sdk/client-location")

const {IoTWirelessClient, UpdateResourcePositionCommand } = require("@aws-sdk/client-iot-wireless");
const client = new IoTDataPlaneClient({
    "region": "us-east-1"
});
const wireless_client = new IoTWirelessClient({
    "region": "us-east-1"
});

exports.handler = async (event) => {
    console.log(`message received: ${JSON.stringify(event)}`)
    let device_id = event['WirelessDeviceId']
    let device_name = event['DeviceName']
    let measurements = event['data']['messages']
    let resolver_time = event['timestamp']
    let network = 1; // 1: lorawan 2: sidewalk
    if (event["WirelessMetadata"] && event["WirelessMetadata"]["Sidewalk"]) {
        network = 2
    }

    let longitude;
    let latitude;
    let gps_data = null
    let sensor_map = {}
    if (measurements && measurements.length > 0) {
        for (let i = 0; i < measurements.length; i++) {
            for (let j = 0; j < measurements[i].length; j++) {
                if (measurements[i][j].measurementId === "4097") {
                    sensor_map["Temperature"] = measurements[i][j].measurementValue;
                }
                if (measurements[i][j].measurementId === "4098") {
                    sensor_map["Humidity"] = measurements[i][j].measurementValue;
                }
                if (measurements[i][j].measurementId === "4197") {
                    longitude = measurements[i][j]["measurementValue"];
                }
                if (measurements[i][j].measurementId === "4198") {
                    latitude = measurements[i][j]["measurementValue"];
                }

                if (latitude && longitude) {
                    try {
                        gps_data = {
                            "type": "Point",
                            "coordinates": [longitude, latitude]
                            // "coordinates": [33.3318, -22.2155, 13.123]
                        }
                    } catch (e) {
                        console.log(`===>error`, e)
                    }
                }
            }
        }
    }

    if (gps_data) {
        console.log(`update device location : ${JSON.stringify(gps_data)}`)
        await updateDevicePosition(gps_data, device_id);
        const input = { // PublishRequest
            topic: `tracker/EmbeddedWorldTrackerDemo/location/${device_id}`,
            qos: 0,
            retain: false,
            payload: JSON.stringify({
                timestamp: resolver_time,
                deviceId: device_id,
                deviceName: device_name,
                latitude: gps_data.coordinates[1],
                longitude: gps_data.coordinates[0],
                positionProperties: {'batteryLevel': 90, "sensor:": 60}
            })
        };
        const command = new PublishCommand(input);
        const response = await client.send(command);
        console.log("mqtt push response: " + JSON.stringify(response));

        let locationClient = new LocationClient()
        let location_info = {
            TrackerName: 'AssetTracker',
            Updates: [
                {
                    DeviceId: 'assettracker',
                    SampleTime: new Date(resolver_time),
                    Position: [
                        gps_data.coordinates[0], gps_data.coordinates[1]
                    ],
                    Accuracy: {
                        Horizontal: 1,
                    },
                    PositionProperties: {
                        "context": JSON.stringify({net: network}),
                        "sensor": JSON.stringify(sensor_map)
                    }
                }
            ]
        }
        let loc_response = await locationClient.send(new BatchUpdateDevicePositionCommand(location_info))
        console.log("loc update response: " + JSON.stringify(loc_response));

    }
}

async function updateDevicePosition(gps_data, device_id) {
    const input = { // UpdateResourcePositionRequest
        ResourceIdentifier: device_id, // required
        ResourceType: "WirelessDevice", // required
        GeoJsonPayload: JSON.stringify(gps_data),
    };
    const command = new UpdateResourcePositionCommand(input);
    const wireless_response = await wireless_client.send(command);
    console.log(wireless_response)
}
```

</details>

## Webアプリの構築

デバイスをマップ上に表示するために必要なAmazon Location Serviceリソースをデプロイします。

### マップの作成

最初のステップとして、新しいAmazon Location ServiceのMapリソースを作成する必要があります。AWSコンソールを使用して行います。

- [Amazon Location Serviceコンソール](https://console.aws.amazon.com/location/home)を開きます。

- 画面左側のナビゲーションバーを展開し、Mapsを選択します。

- この画面で新しいマップを作成します：

- マップの名前を入力し、`HERE Explore`マップスタイルを選択して、`Create map`をクリックします。

<div align="center"><img width="{600}" src="https://static.us-east-1.prod.workshops.aws/public/f3adb45a-50d1-499b-a20d-93bbbb82ee26/static/images/003/create-map.2.png"/></div>

### ルート計算機の作成

- [Amazon Location Serviceコンソール](https://console.aws.amazon.com/location/home)を開きます。

- 画面左側のナビゲーションバーを展開し、`Route calculators`を選択します。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/router-cal.png"/></div>

データプロバイダーとして`HERE`を選択し、`Create route calculator`ボタンをクリックして続行します。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/create-router.png"/></div>

### トラッカーの作成

`Trackers` -> `Create tracker`に移動します：

トラッカーの名前を入力し、位置フィルタリングの下で`Time-based filtering`を選択します。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/time-based.png"/></div>

次に下にスクロールし、EventBridge設定の下で`Enable EventBridge events`設定をマークして、`Create tracker`をクリックします。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/enable-bridge.png"/></div>

### ジオフェンスコレクションの作成

`Geofence collections`に移動し、`create geofence collection`をクリックします。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/geolocate.png"/></div>

## Webアプリの表示

### Cloudfrontへのアプリのデプロイ

- Cloud9ターミナルで、`/home/ec2-user/environment/asset-tracking-workshop`に移動します：

 ```cpp
 cd /home/ec2-user/environment/asset-tracking-workshop
 ```

- 以下のコマンドを実行してください：

 ```cpp
 npm run frontend:publish
 ```

- 完了すると、ウェブサイトのURLが表示されます。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/web-url.png"/></div>

- ブラウザでこのURLにアクセスして、トラッキングアプリケーションを表示します。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/s3-map.png"/></div>

## リソース

[SWDM016](https://drive.google.com/drive/folders/1vHJVEFgyx4arHHPlSjdMkffVStnTpHqg?usp=sharing)

[template_lbm_wio_tracker](https://drive.google.com/drive/folders/1UVte1UbfFor1remgAcpfmCHSKXvOGyYn)
