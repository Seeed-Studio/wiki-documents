---
description: XIAO nRF52840でAmazon Sidewalkのサービスをデプロイする方法を紹介します。
title: Amazon SidewalkでのSeeed Studio XIAO nRF52840
keywords:
- sidewalk
- XIAO BLE
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao-ble-sidewalk
last_update:
  date: 05/17/2023
  author: Citric
---

# Amazon SidewalkでのSeeed Studio XIAO nRF52840

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/19.jpg" style={{width:1000, height:'auto'}}/></div>

## はじめに

Seeed StudioはAmazon Sidewalkエコシステムパートナーの一員であることを誇りに思い、Sidewalkネットワーク上で多様なIoTユースケースを可能にするSidewalk対応製品とソリューションを提供しています。

Amazon Sidewalkは、互換性のあるAmazon EchoやRingデバイスなどのAmazon Sidewalkゲートウェイ（Sidewalkブリッジとも呼ばれる）を使用してIoTエンドポイントデバイスにクラウド接続を提供する、安全なワイヤレスコミュニティネットワークです。

Amazon Sidewalkは、短距離通信にBluetooth Low Energy、長距離をカバーするために900MHz周波数でLoRaおよびFSK無線プロトコルを使用して、家庭内外での低帯域幅・長距離接続を可能にします。Sidewalkゲートウェイはユーザーのインターネット帯域幅の小さな部分を共有し、それがエンドポイントをネットワークに接続するために使用されます。Amazon Sidewalkネットワークの強度は、ゲートウェイの数の増加とともに向上します。[Amazon Sidewalk](https://www.aboutamazon.com/news/devices/everything-you-need-to-know-about-amazon-sidewalk)について詳しく学んでください。

:::note
Amazon Sidewalkは現在米国で利用可能です。開発者は、Sidewalk対応エンドポイントの開発およびテスト目的のみで、米国外でSidewalkゲートウェイ機能を利用することが許可されています。さらに、米国のライセンス不要帯域デバイスは開発目的のみを意図しているため、地域の規制機関に相談し、ゲートウェイがあなたの地域でその無線を動作させることが許可されているかを確認することをお勧めします。
:::

### Amazon Sidewalkの差別化要因

今日利用可能な他のネットワークとSidewalkを異なるものにする要因：

- **持続的な接続性**

    Amazon SidewalkネットワークはAmazon Sidewalkブリッジとして参加している数百万のAmazon EchoおよびRingデバイスによって駆動され、IoTデバイスにクラウド接続を提供します。これにより、家庭のWi-Fiネットワークの範囲外にあるデバイスや、クラウド接続のためにモバイルアプリや専用ゲートウェイに依存するデバイスに対して持続的な接続性を確保します。

- **接続の多様性**

    Amazon Sidewalkは、Bluetooth Low Energy（BLE）や900MHz/サブGHz波などのワイヤレスプロトコルを介してスマートデバイスが通信することを可能にします。これにより、幅広いIoTユースケースをサポートする安全で信頼性が高く多様な接続を提供します。

- **自動デバイスオンボーディング**

    Amazon Sidewalkのタッチレス登録プロセスは、Sidewalkゲートウェイと未登録のエンドポイントが互いの近距離にあるときに自動的に開始されます。顧客は複雑な設定なしにSidewalk対応デバイスをAmazon Sidewalkネットワークに接続できます。この簡単なセットアップは全体的なユーザーエクスペリエンスを向上させます。

- **コスト**

    Amazon Sidewalkは米国人口の90%以上をカバーする無料接続ネットワークです。別のネットワークインフラストラクチャを構築または管理する必要がないため、設備投資と運用コストの削減に役立ちます。

- **シンプルな開発体験**

    Sidewalk対応デバイスには、AWS IoT Coreとの暗号化接続を確立するために必要なセキュリティ証明書が事前にプロビジョニングされています。これにより、エッジデバイスをAWSに迅速に接続するIoTソリューションを作成でき、顧客にとってシームレスなプラグアンドプレイセットアップ体験を促進します。

- **プライバシーとセキュリティ**

    Amazon Sidewalkは、ネットワーク上を移動するデータを保護し、顧客データとプライバシー保護を確保するために、複数のプライバシーとセキュリティ機能を備えて設計されています。

## Amazon Sidewalk用Seeed Studio XIAO nRF52840

XIAO nRF52840は、Amazon Sidewalk認定のワイヤレスモジュールで、Amazon SidewalkネットワークでBluetooth Low Energyラジオ技術を介してIoTデバイス接続を提供します。

このモデルは、Amazon Sidewalk統合のための強力でコンパクトなSoM（System-on-Module）設計を持っています。内蔵のnRF52840チップセットにより、このモジュールはBLE機能を提供し、IoTアプリケーションのシームレスな接続を可能にします。Seeed Studio XIAOは小型フォームファクターを誇り、スペースに制約のある展開に理想的です。信頼性の高いパフォーマンスとAmazon Sidewalkのサポートにより、安全で信頼性の高いIoTソリューションの開発を簡素化し、加速します。

モジュールの技術仕様の詳細については、[こちら](https://wiki.seeedstudio.com/ja/XIAO_BLE/)をクリックしてください。

このドキュメントでは以下について説明します：

1. Amazon Sidewalkの開発環境のインストールと設定。

2. クラウドサービスの設定とXIAO nRF52840の管理。

3. Amazon SidewalkのBLEサンプルプログラムの実行。

完了すると、サンプルアプリケーションを実行し、Amazon Sidewalkでテストできるようになります。

## ハードウェアの準備

このチュートリアルの内容では、はんだ付けや追加配線の必要性を最小限に抑えます。そのため、現在利用可能な2つの拡張ボードを使用して、プロジェクトを可能な限り迅速に完了できるようにします。もちろん、追加費用を避けたい場合は、ブレッドボードやデュプレックスケーブルを介してデバイスを直接XIAOに接続することも選択できます。つまり、Essentialのデバイスは必須の基本ハードウェアであり、Optionalは必須ではありません。

### Essential

このサンプルチュートリアルの内容を完了するために、以下の準備が必要な場合があります。

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO nRF52840 Sense</th>
   <th>Amazon Sidewalkゲートウェイ（Echo Gen4）</th>
            <th>Grove - Red LED Button</th>
            <th>J-Link</th>
            <th>USB to UART</th>
  </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/20.jpeg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/21.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/22.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
            <td></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED-Button.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
            <td></td>
            <td></td>
  </tr>
 </table>
</div>

:::tip
米国外の**US-East-1**（バージニア北部）リージョン以外で作業している非米国開発者がAmazon Sidewalkのテストとエンドポイント開発を円滑に行うために、VPNセットアップが必要です。これにより、シームレスなアクセスが可能になり、開発プロセスへの効率的な参加が保証されます。
:::

### オプション

簡単な配線とGrove拡張、またはJLink経由でXIAOに簡単に接続するために、以下の拡張ボードが必要になる場合があります。

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio Expansion board for XIAO</th>
   <th>Seeed Studio Grove Base for XIAO</th>
  </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Amazon Sidewalkの開発環境を設定する

:::tip
nRF Connect SDKのクイックインストールの元のチュートリアルは[こちら](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/2.3.0/nrf/getting_started/assistant.html#installing-automatically)で読むことができます。
:::

Nordic SemiconductorのAmazon Sidewalkソリューションは、nRF Connect SDK v2.3.0に基づいています。以下のインストール方法のいずれかに従って開発環境を設定できます：

- 自動インストール（Toolchain Manager）
- [手動インストール](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/2.3.0/nrf/gs_installing.html#install-the-required-tools)

このセクションでは、自動インストール方法であるToolchain Manager経由でnRF Connect SDKをインストールする方法に焦点を当てます。システムはWindows 11に基づいています。

Toolchain Managerアプリケーションを使用してnRF Connect SDKを自動的にインストールするには、以下の手順を完了してください。このアプリケーションは、nRF Connect for VS Code拡張機能とnRF Connect SDKソースコードを含む、nRF Connect SDKの完全なツールチェーンをインストールします。

### 前提条件のインストール

ツールチェーンの設定を開始する前に、オペレーティングシステムの利用可能な更新をインストールしてください。サポートされているオペレーティングシステムとZephyr機能の情報については、[要件](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/2.3.0/nrf/getting_started/recommended_versions.html#gs-recommended-versions)を参照してください。

さらに、SEGGER J-LinkのUniversalバージョンをインストールしてください。これは、SEGGER J-LinkがIntelとARMアセンブリの両方で正しく動作するために必要です。

### Toolchain Managerのインストール

Toolchain Managerは、nRF Connect SDKのインストールを簡素化するさまざまなアプリケーションを提供するクロスプラットフォームツールであるnRF Connect for Desktopから利用できます。ツールとアプリケーションの両方が、Windows、Linux、macOSで利用できます。

**ステップ 1**. お使いのオペレーティングシステム用の[nRF Connect for Desktop](https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Connect-for-desktop)をダウンロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/1.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 2**. マシンにツールをインストールして実行します。

**ステップ 3**. **APPS**セクションで、**Toolchain Manager**の横にある**Install**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/2.png" style={{width:600, height:'auto'}}/></div>

**ステップ 4**. アプリがマシンにインストールされ、**Install**ボタンが**Open**に変わります。

**ステップ 5**. nRF Connect for DesktopでToolchain Managerを開きます。

ナビゲーションバーの**SDK ENVIRONMENTS**をクリックして、nRF Connect SDKをインストールする場所を指定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/3.png" style={{width:600, height:'auto'}}/></div>

**ステップ 6**. SDK ENVIRONMENTSで、インストールしたい**nRF Connect SDKバージョン**の横にある**Install**ボタンをクリックします。

選択したnRF Connect SDKバージョンがマシンにインストールされます。Installボタンが**Open VS Code**に変わります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/30.png" style={{width:600, height:'auto'}}/></div>

:::tip
インストール時間は環境のネットワークに関連しており、インストールには約**1時間**かかることが予想されます。この間、ソフトウェアは何も実行していないように見える場合がありますが、ジャムがあると仮定しないでください。ログを通じてインストールの進行状況を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/4.png" style={{width:600, height:'auto'}}/></div>
:::

### Amazon Sidewalkリポジトリのダウンロード

インストール後、アプリケーションをビルドする方法は2つあります：

- Visual Studio CodeとnRF Connect for VS Code拡張機能を使用
- コマンドラインを使用

**ステップ 7**. 私たちのプロジェクトでは、コマンドラインの使用で十分です。インストールしたバージョンの横にある下矢印をクリックし、**Open bash**を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/23.png" style={{width:600, height:'auto'}}/></div>

ディレクトリ構造は次のようになります：

```
.
|___ .west
|___ bootloader
|___ modules
|___ nrf
|___ nrfxlib
|___ zephyr
|___ ...
```

**ステップ 8**. [Amazon Sidewalk アプリケーションリポジトリ](https://github.com/nrfconnect/sdk-sidewalk)を sdk-sidewalk リポジトリから nRF Connect SDK フォルダにクローンし、以下のコマンドを実行して `sidewalk` という名前を付けます：

```
git clone https://github.com/nrfconnect/sdk-sidewalk.git sidewalk
```

**ステップ 9**. Amazon Sidewalk用のPython要件をインストールします。

```
pip install -r sidewalk/requirements.txt
```

:::note
お使いのコンピュータにPython環境がまだインストールされていない場合は、[こちら](https://www.digitalocean.com/community/tutorials/install-python-windows-10)のチュートリアルを読んで、最新のPython 3をコンピュータにインストールしてください。
:::

**ステップ 10**. Amazon Sidewalkアプリケーションマニフェストを設定し、更新します。

現在のマニフェストパスを確認します：

```
west manifest --path
```

返されるパスは以下の形式と似ているはずです。

```
> /path-to-ncs-folder/nrf/west.yml
```

マニフェストパスをAmazon Sidewalkリポジトリに設定します：

```
west config manifest.path sidewalk
```

すべてのリポジトリを更新：

```
west update
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/32.png" style={{width:800, height:'auto'}}/></div>

接続状況によっては、更新に時間がかかる場合があります。

新しいマニフェストパスを確認してください：

```
west manifest --path
```

返されるパスは以下の形式と同様になるはずです。

```
> /path-to-ncs-folder/sidewalk/west.yml
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/31.png" style={{width:600, height:'auto'}}/></div>

Bashウィンドウを開いたままにしてください。数分後に戻ってきます。

## AWSクラウドサービスの設定

:::tip
Amazon Sidewalk製品の設定に関する元のチュートリアルは[こちら](https://nrfconnect.github.io/sdk-sidewalk/setting_up_sidewalk_environment/setting_up_sidewalk_product.html)で読むことができます。
:::

次に、デバイスがキーを介してあなたのAWSアカウントに接続されるように、AWSクラウドサービスを設定する必要があります。

**ステップ 1**. Amazon Sidewalk Sample IoT Appリポジトリをローカルマシンにダウンロードします。新しいターミナルを開き（Windowsを使用している場合は、新しいPowershellを開く）、以下のコマンドを入力してリポジトリをクローンします。

```
git clone https://github.com/aws-samples/aws-iot-core-for-amazon-sidewalk-sample-app.git
```

**ステップ 2**. Amazon IoT Core を初めて使用する場合は、ルートアカウントにサインアップする必要があります。すでにルートアカウントまたは IAM アカウントをお持ちの場合は、[Amazon IoT Core コンソール](https://console.aws.amazon.com/iam)にログインしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/6.png" style={{width:800, height:'auto'}}/></div>

**ステップ 3**. アカウントキーを取得します。

ログイン後、コンソールの右上角でユーザー名をクリックし、「Security credentials」を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/33.png" style={{width:400, height:'auto'}}/></div>

次に、新しい認証情報を作成し、**Access Key ID** と **Secret Access Key** を保存してください。これらは後のステップで使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/34.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 4**. ローカルマシンで *credentials* ファイルを設定します。

:::note
まだ [AWS CLI](https://aws.amazon.com/cli/) をインストールしていない場合は、インストールする必要があります。
:::

AWS CLI がインストールされている場合は、aws configure コマンドを使用して認証情報ファイルを設定できます。Windows システムを使用している場合は、管理者権限で **CMD ウィンドウ** でコマンドを実行する必要があります。

```
aws configure
```

ウィンドウがキーの入力を求めますので、それぞれ個別に入力してEnterキーで確認してください。

```
aws_access_key_id = YOUR_ACCESS_KEY
aws_secret_access_key = YOUR_SECRET_KEY
```

これに続いて国と地域の選択があり、ここでは**us-east-1**を選択する必要があります。

```
region=us-east-1
```

残りの部分については、デフォルトのまま入力して終了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/35.png" style={{width:800, height:'auto'}}/></div>

**ステップ 5**. リソースを作成するためのユーザー権限を追加します。

ユーザーが管理者権限を持っている場合、前提条件はすでに満たされているため、この手順をスキップできます。

:::note
このチュートリアルでは、デフォルトで管理者権限アカウントを使用します。IAMアカウントを使用している場合は、管理者に連絡してアカウントに特定の権限を有効にしてもらってください。

- `python aws-iot-core-for-amazon-sidewalk-sample-app/ApplicationServerDeployment/policies/generate_policy.py` スクリプトを実行します。これにより、*ApplicationServerDeployment/policies/* ディレクトリにパーソナライズされたポリシードキュメントが生成されます
- IAMコンソールに移動し、*DeployStackPolicy.json* の内容を使用してポリシーを作成します
- 作成したポリシーをユーザーに割り当てます
詳細なガイダンスについては、[IAMチュートリアル: 最初のカスタマー管理ポリシーの作成とアタッチ](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_managed-policies.html)を参照してください。

*Simplicity Commander*（SiLabs用）がシステムのPATH環境変数に存在することを確認してください。

ターミナルで `commander --version` を呼び出して、Simplicity Commanderが利用可能であることを確認してください。
:::

## Amazon SidewalkのBLEサンプルを実行する

:::tip
Template Bluetooth LEの元のチュートリアルは[こちら](https://nrfconnect.github.io/sdk-sidewalk/testing_samples/sidewalk_application_samples/template_ble.html#template-ble)で読むことができます。
:::

### プロビジョニング生成

**ステップ 1**. AWS IoT Core for Amazon Sidewalkツールに移動します。

先ほどクローンした**aws-iot-core-for-amazon-sidewalk-sample-app**フォルダを開きます。

**ステップ 2**. `config.yaml`設定ファイルを設定します。**NORDIC**ハードウェアプラットフォームを設定します。

フォルダ内の**config.yaml**という名前のファイルを開きます（適切なエディタ、例えばVS Codeを使用）。以下を貼り付けて保存します。

```
Config:
AWS_PROFILE: default  # Name of your AWS profile from .aws/credentials
DESTINATION_NAME: SensorAppDestination  # Sidewalk destination used for uplink traffic routing
HARDWARE_PLATFORM: NORDIC  # Available values: NORDIC, TI, SILABS or ALL
USERNAME: null
PASSWORD: null
INTERACTIVE_MODE: True
Outputs:
    DEVICE_PROFILE_ID: null
    WEB_APP_URL: null
_Paths:
    PROVISION_SCRIPT_DIR: tools/provision
    SILABS_COMMANDER_TOOLS_DIR: null  # Not needed if Silabs Commander is already in system Path. Only needed for SILABS.
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/36.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 3**. プロビジョニングツール用のPython仮想環境をセットアップします：

```
cd aws-iot-core-for-amazon-sidewalk-sample-app
python -m pip install --user virtualenv
python -m venv sample-app-env
sample-app-env\Scripts\activate.bat
pip install pip==22.3.1
python -m pip install -r requirements.txt
python -m pip install pyjwt -t .\ApplicationServerDeployment\lambda\authLibs
```

**ステップ4**. この時点で、`helper env_check.py` スクリプトを実行して、最も一般的なエラーに対して環境の健全性チェックを行うことをお勧めします。

```
python env_check.py
```

表示されたメッセージが示されている場合、環境のインストールが正常に完了しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/37.png" style={{width:900, height:'auto'}}/></div>

**ステップ 5**. デバイスプロビジョニングスクリプトを実行します：

```
python EdgeDeviceProvisioning/provision_sidewalk_end_device.py
```

次の出力が表示されるはずです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/9.png" style={{width:800, height:'auto'}}/></div>

ここで生成された `Nordic_MFG.hex` ファイルが必要です。このファイルは最終的に XIAO nRF52840 にフラッシュされます。

:::note
**Nordic_MFG.hex** は、デバイスがあなたの Amazon IoT Core との通信リンクを確立するための唯一の認証情報であり、各デバイスまたはアカウントごとに異なります。
:::

プロビジョニングファイルは `EdgeDeviceProvisioning` ディレクトリに配置されています。デバイスは以下の構造に示すように、デバイスプロファイルのサブディレクトリにグループ化されています：

```
EdgeDeviceProvisioning \
- DeviceProfile_<profile-id> \
- DeviceProfile.json
- WirelessDevice_<device-id>\
    --  Nordic_MFG.bin
    --  Nordic_MFG.hex
    --  WirelessDevice.json
```

**Nordic_MFG.hex** ファイルをコピーして、簡単に見つけられる場所に保存してください。

**ステップ 6**. Python仮想環境を終了します：

```
deactivate
```

### 宛先にMQTTを追加

:::tip
このチュートリアルの部分については、Sidewalkが提供する[公式チュートリアル](https://nrfconnect.github.io/sdk-sidewalk/setting_up_sidewalk_environment/setting_up_sidewalk_product.html#add-mqtt-to-destination)をお読みください。
:::

### サンプル概要

このサンプルは、Amazon Sidewalk End Nodeアプリケーションのテンプレートを実演します。Bluetooth LEに最適化されています。

このサンプルは以下の開発キットをサポートしています：

| ハードウェアプラットフォーム | PCA | ボード名 | ビルドターゲット |
| ------------------ | --- | ---------- | ------------ |
| nRF52840 DK        | PCA10056 | nrf52840dk_nrf52840 | nrf52840dk_nrf52840 |

Amazon Sidewalkはまだ私たちのPR提出をマージしていないため、現在はサポートされているnRF52840 DKプラットフォームを変更することでXIAO nRF52840をサポートします。

| ハードウェアプラットフォーム | ボード名 | ビルドターゲット |
| ------------------ | ---------- | ------------ |
| Seeed Studio XIAO nRF52840 | nrf52840dk_nrf52840 | nrf52840dk_nrf52840 |

このサンプルは、Bluetooth LEトランスポートプロトコル用のAmazon Sidewalk APIの実装を示しています。これは、Bluetooth LEトランスポートプロトコルのみがサポートされているAmazon Sidewalk設定のメモリ最適化された例です。フットプリントが小さいため、アプリケーション用の両方のブートローダーパーティションは、サポートされているSoC（nRF52840）の内部フラッシュメモリに配置されます。

#### ユーザーインターフェース

ボタンアクションは、ボタンを離したときにトリガーされます。長押しアクションを使用するには、ボタンを2秒以上押し続けてから離してください。

ボタンの割り当ては以下の通りです：

- **ボタン1（長押し）-- D1**:

    ファクトリーリセット - アプリケーションはAmazon Sidewalkスタックにファクトリーリセットイベントを通知します。Amazon Sidewalkライブラリは不揮発性ストレージから設定をクリアします。リセットが成功した後、デバイスを再度クラウドサービスに登録する必要があります。

- **ボタン2 -- D3**:

    接続リクエストの切り替え - デバイスがBluetooth LEを通じてアドバタイジングしている間、Amazon Sidewalkゲートウェイにデバイスとの接続開始を要求します。接続が切断された後、ユーザーは再度ビーコン状態を設定する必要があります。ゲートウェイは接続されているデバイス数に依存するため、常にこのリクエストを処理できるとは限りません。

- **ボタン3 -- D4**:

    Hello送信 - このアクションはクラウドにメッセージをキューに入れます。Amazon Sidewalkが準備できていない場合、メッセージを送信せずに単純にエラーを表示します。キューは最終的に処理され、キューに入れられたすべてのメッセージが送信されます。

- **ボタン4（短押し）-- D9**:

    偽のバッテリーレベル設定 - このアクションはシミュレートされたバッテリーレベルを設定します。

- **ボタン4（長押し）-- D9**:
    DFU状態に入る - このアクションはAmazon Sidewalkスタックを無効にし、Bluetooth LE SMPサーバーを開始します。nRF Connect for mobileアプリケーションを使用してファームウェアイメージを更新できます。DFU状態を終了するには、デバイスの電源を入れ直してください。

LEDはアプリケーションの現在の状態を表します（まだ実現されていません）：

- **LED 1 -- D0**:

    アプリケーションが正常に接続されました。

- **LED 2 -- D2**:

    アプリケーションが正常に登録されました。

- **LED 3 -- D5**:

    アプリケーションの時刻同期が成功しました。

- **LED 4 -- D8**:

    アプリケーションリンクがアップしています。

### サンプルファームウェアの準備

この例では、Amazon Sidewalkが提供するBLEサンプルプログラムを使用します。ハードウェアドライバーのファームウェアはすべてのXIAO nRF52840に共通です。このセクションの手順を実行したくない場合は、私たちが提供する**merged.hex**ファイルを直接ダウンロードすることもできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/merged.hex" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ファイルをダウンロード</font></span></strong>
    </a>
</div><br />

以下が従うべき正確な手順です。

**ステップ1**. GithubからXIAO nRF52840用に書かれたプログラムをダウンロードします。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-nRF52840-sidewalk/releases/tag/v1.0.0" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> リリースをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

**ステップ2**. ダウンロード後、フォルダをncsディレクトリに解凍してください。デフォルトのパスは以下の通りです：

```
C:\ncs\v2.3.0\zephyr\boards\arm\nrf52840dk_nrf52840
```

:::caution
ファイルディレクトリは元々nRF52840 DKの開発ファイルを保持していました。簡単にするため、XIAO nRF52840プログラムの名前を変更することで開発ボードを上書きしました。

そのため、元のファイル**nrf52840dk_nrf52840**内のすべてのファイルを、zipアーカイブ内のすべてのファイルで上書きするだけです。
:::

**ステップ3**. nRF Connect SDKのBashウィンドウに戻りましょう。以下のコマンドを入力してファームウェア生成を実行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/38.png" style={{width:600, height:'auto'}}/></div>

```
cd sidewalk/samples/template_ble/
west build -b nrf52840dk_nrf52840
```

実行が正常に行われると、以下の出力が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/10.png" style={{width:800, height:'auto'}}/></div>

この時点で、サンプルファームウェアが取得されており、名前は `merged.hex` で、デフォルトの場所に保存されています：

```
C:\ncs\v2.3.0\sidewalk\samples\template_ble\build\zephyr
```

このファイルを先ほど準備した **Nordic_MFG.hex** ファイルと一緒に配置することから始めることができ、後でそれらを一緒に使用します。

### XIAO nRF52840 のファームウェアをフラッシュする

**ステップ 1**. **nRF Connect for Desktop** を開き、APPS で **Programmer** を見つけてインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/11.png" style={{width:600, height:'auto'}}/></div>

**ステップ 2**. XIAO nRF52840 を JLink 経由で接続します。

XIAO nRF52840 を SWD インターフェース経由で JLink に接続してください。

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF52840</th>
   <th>JLink（非教育版）</th>
  </tr>
  <tr>
   <td align="center">3V3</td>
   <td align="center">Vterf</td>
  </tr>
  <tr>
   <td align="center">GND</td>
   <td align="center">GND</td>
  </tr>
        <tr>
   <td align="center">SWDIO</td>
   <td align="center">SWIO</td>
  </tr>
        <tr>
   <td align="center">SWCLK</td>
   <td align="center">SWCK</td>
  </tr>
 </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/24.jpg" style={{width:600, height:'auto'}}/></div><br />

XIAO拡張ボードを使用する予定がない場合は、[XIAO nRF52840 Wiki](https://wiki.seeedstudio.com/ja/XIAO_BLE#access-the-swd-pins-for-debugging-and-reflashing-bootloader)のSWDインターフェースの使用方法を参照して、JLinkに追加でデュプレックスワイヤをはんだ付けしてください。

**ステップ3**. Programmerを開き、両方のファームウェアをXIAO nRF52840に書き込みます。

ソフトウェアの左上にある**Add file**ボタンをクリックし、この記事で準備した**merged.hex**ファイルと**Nordic_MFG.hex**をそれぞれ追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/12.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/13.png" style={{width:800, height:'auto'}}/></div>

次に、JLinkをコンピュータに接続し、左上をクリックしてデバイスを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/14.png" style={{width:800, height:'auto'}}/></div>

接続したら、左側のReadボタンをクリックしてXIAOのメモリパーティションを取得します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/15.png" style={{width:800, height:'auto'}}/></div>

次に**Erase & write**をクリックして、ファームウェアをXIAOにフラッシュします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/16.png" style={{width:800, height:'auto'}}/></div>

完了したら、**Read**をクリックしてメモリの形状が適切かどうかを確認できます。これにより、フラッシュメモリが成功したかどうかを確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/17.png" style={{width:800, height:'auto'}}/></div>

**ステップ4**. Amazon Sidewalkデバイスを組み立てて動作させます。

例のプレビューでは、LEDとButtonが接続されるピン位置をマークしました。次に、4つのGrove LEDボタンを使用する必要があります。これらはXIAOの動作を制御できるだけでなく、ボタン上のLEDによって異なる動作状態を表示することもできます。

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO nRF52840</th>
   <th>LED</th>
            <th>Button</th>
            <th>USB to UART</th>
  </tr>
  <tr>
   <td align="center">D0</td>
   <td align="center">LED1</td>
            <td align="center"></td>
            <td align="center"></td>
  </tr>
  <tr>
   <td align="center">D1</td>
   <td align="center"></td>
            <td align="center">Button1</td>
            <td align="center"></td>
  </tr>
        <tr>
   <td align="center">D2</td>
   <td align="center">LED2</td>
            <td align="center"></td>
            <td align="center"></td>
  </tr>
        <tr>
   <td align="center">D3</td>
   <td align="center"></td>
            <td align="center">Button2</td>
            <td align="center"></td>
  </tr>
        <tr>
            <td align="center">D4</td>
            <td align="center">LED3</td>
            <td align="center"></td>
            <td align="center"></td>
        </tr>
        <tr>
            <td align="center">D5</td>
            <td align="center"></td>
            <td align="center">Button3</td>
            <td align="center"></td>
        </tr>
        <tr>
            <td align="center">D8</td>
            <td align="center">LED4</td>
            <td align="center"></td>
            <td align="center"></td>
        </tr>
        <tr>
            <td align="center">D9</td>
            <td align="center"></td>
            <td align="center">Button4</td>
            <td align="center"></td>
        </tr>
        <tr>
            <td align="center">RX (D7)</td>
            <td align="center"></td>
            <td align="center"></td>
            <td align="center">TX</td>
        </tr>
        <tr>
            <td align="center">TX (D6)</td>
            <td align="center"></td>
            <td align="center"></td>
            <td align="center">RX</td>
        </tr>
    </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/25.jpg" style={{width:600, height:'auto'}}/></div>

XIAOはUSB経由で電源供給され、XIAO nRF52840はプッシュボタンを使用して制御され、XIAOの動作ログはUART経由で利用できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/18.png" style={{width:600, height:'auto'}}/></div>

## リソース

- [Amazon Sidewalk仕様書](https://docs.sidewalk.amazon/specifications/)
- [Amazon Sidewalkプライバシーとセキュリティホワイトペーパー](https://m.media-amazon.com/images/G/01/sidewalk/final_privacy_security_whitepaper.pdf)

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
