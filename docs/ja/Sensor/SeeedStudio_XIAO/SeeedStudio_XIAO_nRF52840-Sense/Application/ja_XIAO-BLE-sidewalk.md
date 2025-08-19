---
description: XIAO nRF52840でAmazon Sidewalkのサービスを展開する方法を紹介します。
title: Amazon Sidewalk上のSeeed Studio XIAO nRF52840
keywords:
- sidewalk
- XIAO BLE
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao-ble-sidewalk
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Amazon Sidewalk上のSeeed Studio XIAO nRF52840

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/19.jpg" style={{width:1000, height:'auto'}}/></div>

## はじめに

Seeed Studioは、Amazon Sidewalkエコシステムのパートナーの一員であることを誇りに思います。Sidewalk対応製品とソリューションを提供し、Sidewalkネットワーク上で多様なIoTユースケースを可能にします。

Amazon Sidewalkは、Amazon Sidewalkゲートウェイ（Sidewalkブリッジとも呼ばれる）を使用して、IoTエンドポイントデバイスにクラウド接続を提供する、安全なワイヤレスコミュニティネットワークです。これらのゲートウェイには、Amazon EchoやRingデバイスが含まれます。

Amazon Sidewalkは、短距離通信にはBluetooth Low Energyを使用し、長距離通信には900MHz帯のLoRaおよびFSK無線プロトコルを使用して、家庭内外での低帯域幅かつ長距離の接続を可能にします。Sidewalkゲートウェイは、ユーザーのインターネット帯域幅の一部を共有し、それを使用してエンドポイントをネットワークに接続します。Amazon Sidewalkネットワークの強度は、ゲートウェイの数が増えるほど向上します。[Amazon Sidewalkについて詳しくはこちら](https://www.aboutamazon.com/news/devices/everything-you-need-to-know-about-amazon-sidewalk)。

:::note
Amazon Sidewalkは現在、米国で利用可能です。開発者は、Sidewalk対応エンドポイントの開発およびテスト目的に限り、米国外でSidewalkゲートウェイ機能を利用することが許可されています。さらに、地元の規制当局に相談し、ゲートウェイがその地域で無線を運用することが許可されているかどうかを確認することをお勧めします。米国のライセンスフリーバンドデバイスは、開発目的のみに使用されることを意図しています。
:::

### Amazon Sidewalkの差別化ポイント

現在利用可能な他のネットワークと比較して、Sidewalkが異なる点は以下の通りです：

- **持続的な接続性**

    Amazon Sidewalkネットワークは、Amazon EchoやRingデバイスがSidewalkブリッジとして参加することで構築され、IoTデバイスにクラウド接続を提供します。これにより、家庭のWi-Fiネットワークの範囲外にあるデバイスや、モバイルアプリや専用ゲートウェイに依存してクラウド接続を行うデバイスに対しても、持続的な接続性が確保されます。

- **接続の多様性**

    Amazon Sidewalkは、Bluetooth Low Energy（BLE）や900MHz/サブGHz波などのワイヤレスプロトコルを介してスマートデバイスが通信できるようにします。これにより、幅広いIoTユースケースをサポートするための安全で信頼性が高く、多用途な接続が提供されます。

- **自動デバイスオンボーディング**

    Amazon Sidewalkのタッチレス登録プロセスは、Sidewalkゲートウェイと未登録のエンドポイントが近接しているときに自動的に開始されます。顧客は、複雑な設定を行うことなく、Sidewalk対応デバイスをAmazon Sidewalkネットワークに接続できます。この簡単なセットアップにより、全体的なユーザー体験が向上します。

- **コスト**

    Amazon Sidewalkは、米国人口の90%以上をカバーする無料接続ネットワークです。別途ネットワークインフラを構築または管理する必要がないため、資本投資および運用コストを削減できます。

- **シンプルな開発体験**

    Sidewalk対応デバイスは、AWS IoT Coreとの暗号化接続を確立するために必要なセキュリティ証明書が事前にプロビジョニングされています。これにより、エッジデバイスをAWSに迅速に接続するIoTソリューションを作成でき、顧客にシームレスなプラグアンドプレイのセットアップ体験を提供します。

- **プライバシーとセキュリティ**

    Amazon Sidewalkは、ネットワーク上を移動するデータを保護するために複数のプライバシーおよびセキュリティ機能を備えており、顧客データとプライバシーの保護を確保します。

## Seeed Studio XIAO nRF52840 for Amazon Sidewalk

XIAO nRF52840は、Amazon Sidewalkに対応したワイヤレスモジュールで、Bluetooth Low Energy無線技術を使用してAmazon Sidewalkネットワーク上でIoTデバイスの接続を提供します。

このモデルは、Amazon Sidewalk統合のための強力でコンパクトなSoM（System-on-Module）設計を備えています。内蔵のnRF52840チップセットにより、このモジュールはBLE機能を提供し、IoTアプリケーションのシームレスな接続を可能にします。Seeed Studio XIAOは小型のフォームファクターを持ち、スペースが限られた展開に最適です。その信頼性の高いパフォーマンスとAmazon Sidewalkのサポートにより、安全で信頼性の高いIoTソリューションの開発を簡素化し、加速します。

モジュールの技術仕様の詳細については、[こちら](https://wiki.seeedstudio.com/ja/XIAO_BLE/)をクリックしてください。

このドキュメントでは以下の内容を案内します：

1. Amazon Sidewalkの開発環境のインストールと設定。

2. クラウドサービスの設定とXIAO nRF52840の管理。

3. Amazon SidewalkのBLEサンプルプログラムの実行。

完了後、サンプルアプリケーションを実行し、Amazon Sidewalkでテストできるようになります。

## ハードウェア準備

このチュートリアルの内容では、はんだ付けや追加配線の必要性を最小限に抑えます。そのため、現在利用可能な2つの拡張ボードを使用して、プロジェクトを迅速に完了させます。もちろん、追加費用をかけたくない場合は、ブレッドボードやデュプレックスケーブルを使用してデバイスを直接XIAOに接続することもできます。とはいえ、「必須」のデバイスは基本的なハードウェアであり、「オプション」は必須ではありません。

### 必須

このサンプルチュートリアルの内容を完了するには、以下のものを準備する必要があります。

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO nRF52840 Sense</th>
			<th>Amazon Sidewalkゲートウェイ（Echo Gen4）</th>
            <th>Grove - 赤色LEDボタン</th>
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
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
            <td></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED-Button.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
            <td></td>
            <td></td>
		</tr>
	</table>
</div>

:::tip
**US-East-1**（北バージニア）地域外で作業する非米国開発者がAmazon Sidewalkのテストとエンドポイント開発を容易に行うためには、VPNの設定が必要です。これにより、シームレスなアクセスが可能になり、効率的な開発プロセスへの参加が保証されます。
:::

### オプション

簡単な配線やGrove拡張、またはJLinkを介したXIAOへの簡単な接続のために、以下の拡張ボードが必要になる場合があります。

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO用拡張ボード</th>
			<th>Seeed Studio XIAO用Groveベース</th>
		</tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## Amazon Sidewalkの開発環境を構築する

:::tip
nRF Connect SDKのクイックインストールに関する元のチュートリアルは[こちら](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/2.3.0/nrf/getting_started/assistant.html#installing-automatically)で読むことができます。
:::

Nordic SemiconductorのAmazon SidewalkソリューションはnRF Connect SDK v2.3.0に基づいています。以下のインストール方法のいずれかを使用して開発環境をセットアップできます：

- 自動インストール（Toolchain Manager）
- [手動インストール](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/2.3.0/nrf/gs_installing.html#install-the-required-tools)

このセクションでは、自動インストール方法であるToolchain Managerを使用してnRF Connect SDKをインストールする方法に焦点を当てます。システムはWindows 11に基づいています。

以下の手順を完了して、Toolchain Managerアプリケーションを使用してnRF Connect SDKを自動的にインストールしてください。このアプリケーションは、nRF Connect SDKの完全なツールチェーンをインストールし、nRF Connect for VS Code拡張機能やnRF Connect SDKのソースコードを含みます。

### 必要条件をインストールする

ツールチェーンのセットアップを開始する前に、オペレーティングシステムの利用可能な更新をインストールしてください。[Requirements](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/2.3.0/nrf/getting_started/recommended_versions.html#gs-recommended-versions)を参照して、サポートされているオペレーティングシステムとZephyrの機能に関する情報を確認してください。

さらに、SEGGER J-LinkのUniversalバージョンをインストールしてください。これは、SEGGER J-LinkがIntelおよびARMアセンブリの両方で正しく動作するために必要です。

### Toolchain Managerをインストールする

Toolchain Managerは、nRF Connect for Desktopから利用可能です。これは、nRF Connect SDKのインストールを簡素化するさまざまなアプリケーションを提供するクロスプラットフォームツールです。このツールとアプリケーションは、Windows、Linux、macOSで利用可能です。

**ステップ1**. オペレーティングシステムに適した[nRF Connect for Desktop](https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Connect-for-desktop)をダウンロードしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/1.png" style={{width:1000, height:'auto'}}/></div>

**ステップ2**. ツールをインストールして、マシン上で実行してください。

**ステップ3**. **APPS**セクションで、**Toolchain Manager**の横にある**Install**をクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/2.png" style={{width:600, height:'auto'}}/></div>

**ステップ4**. アプリがマシンにインストールされ、**Install**ボタンが**Open**に変わります。

**ステップ5**. nRF Connect for DesktopでToolchain Managerを開いてください。

ナビゲーションバーで**SDK ENVIRONMENTS**をクリックして、nRF Connect SDKをインストールする場所を指定してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/3.png" style={{width:600, height:'auto'}}/></div>

**ステップ6**. SDK ENVIRONMENTSで、インストールしたい**nRF Connect SDKバージョン**の横にある**Install**ボタンをクリックしてください。

選択したnRF Connect SDKバージョンがマシンにインストールされます。インストールボタンが**Open VS Code**に変わります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/30.png" style={{width:600, height:'auto'}}/></div>

:::tip
インストール時間は環境内のネットワークに関連しており、インストールには約**1時間**かかると予想されます。この間、ソフトウェアが何もしていないように見える場合がありますが、詰まりが発生していると仮定しないでください。インストールの進行状況はログで確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/4.png" style={{width:600, height:'auto'}}/></div>
:::

### Amazon Sidewalkリポジトリをダウンロードする

インストール後、アプリケーションをビルドする方法は2つあります：

- Visual Studio CodeとnRF Connect for VS Code拡張機能を使用する
- コマンドラインを使用する

**ステップ7**. このプロジェクトでは、コマンドラインの使用で十分です。インストールしたバージョンの横にある下矢印をクリックし、**Open bash**を選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/23.png" style={{width:600, height:'auto'}}/></div>

ディレクトリ構造は以下のようになるはずです：

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

**ステップ8**. [Amazon Sidewalkアプリケーションリポジトリ](https://github.com/nrfconnect/sdk-sidewalk)をsdk-sidewalkリポジトリからnRF Connect SDKフォルダにクローンし、以下のコマンドを実行して`sidewalk`という名前を付けてください：

```
git clone https://github.com/nrfconnect/sdk-sidewalk.git sidewalk
```

**ステップ9**. Amazon SidewalkのPython要件をインストールしてください。

```
pip install -r sidewalk/requirements.txt
```

:::note
コンピュータにPython環境がまだインストールされていない場合は、[こちら](https://www.digitalocean.com/community/tutorials/install-python-windows-10)のチュートリアルを読んで、最新のPython 3をコンピュータにインストールしてください。
:::

**ステップ10**. Amazon Sidewalkアプリケーションのマニフェストを設定して更新してください。

現在のマニフェストパスを確認してください：

```
west manifest --path
```

返されるパスは以下の形式に似ているはずです：

```
> /path-to-ncs-folder/nrf/west.yml
```

マニフェストパスをAmazon Sidewalkリポジトリに設定してください：

```
west config manifest.path sidewalk
```

すべてのリポジトリを更新してください：

```
west update
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/32.png" style={{width:800, height:'auto'}}/></div>

接続状況によっては、更新に時間がかかる場合があります。

新しいマニフェストパスを確認してください：

```
west manifest --path
```

返されるパスは以下の形式に似ているはずです：

```
> /path-to-ncs-folder/sidewalk/west.yml
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/31.png" style={{width:600, height:'auto'}}/></div>

Bashウィンドウを開いたままにしてください。数分後に戻ります。

## AWS クラウドサービスの設定

:::tip
Amazon Sidewalk 製品のセットアップに関する元のチュートリアルは [こちら](https://nrfconnect.github.io/sdk-sidewalk/setting_up_sidewalk_environment/setting_up_sidewalk_product.html) で読むことができます。
:::

次に、デバイスをキーを介して AWS アカウントに接続するために、AWS クラウドサービスを設定する必要があります。

**ステップ 1**. Amazon Sidewalk Sample IoT App リポジトリをローカルマシンにダウンロードします。新しいターミナルを開きます（Windows を使用している場合は新しい Powershell を開いてください）そして、以下のコマンドを入力してリポジトリをクローンします。

```
git clone https://github.com/aws-samples/aws-iot-core-for-amazon-sidewalk-sample-app.git
```

**ステップ 2**. Amazon IoT Core を初めて使用する場合は、ルートアカウントにサインアップする必要があるか、既にルートまたは IAM アカウントを持っている場合は、[Amazon IoT Core コンソール](https://console.aws.amazon.com/iam) にログインしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/6.png" style={{width:800, height:'auto'}}/></div>

**ステップ 3**. アカウントキーを取得します。

ログイン後、コンソールの右上隅でユーザー名をクリックし、「セキュリティ認証情報」を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/33.png" style={{width:400, height:'auto'}}/></div>

その後、新しい認証情報を作成し、**アクセスキー ID** と **シークレットアクセスキー** を保存してください。これらは後のステップで使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/34.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 4**. ローカルマシン上で *credentials* ファイルを設定します。

:::note
まだ [AWS CLI](https://aws.amazon.com/cli/) をインストールしていない場合は、インストールする必要があります。
:::

AWS CLI がインストールされている場合、`aws configure` コマンドを使用して認証情報ファイルを設定できます。Windows システムを使用している場合は、**管理者権限**で CMD ウィンドウを実行する必要があります。

```
aws configure
```

ウィンドウがキーの入力を求めるので、それぞれ入力し、Enter を押して確認してください。

```
aws_access_key_id = YOUR_ACCESS_KEY
aws_secret_access_key = YOUR_SECRET_KEY
```

次に、国と地域を選択します。ここでは **us-east-1** を選択する必要があります。

```
region=us-east-1
```

残りの項目については、Enter を押してデフォルトのままにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/35.png" style={{width:800, height:'auto'}}/></div>

**ステップ 5**. リソースを作成するためのユーザー権限を追加します。

ユーザーが管理者権限を持っている場合、この前提条件は既に満たされているため、このポイントをスキップできます。

:::note
このチュートリアルではデフォルトで管理者権限アカウントを使用します。IAM アカウントを使用している場合は、アカウントに特定の権限を有効にするよう管理者に連絡してください。

- `python aws-iot-core-for-amazon-sidewalk-sample-app/ApplicationServerDeployment/policies/generate_policy.py` スクリプトを実行します。このスクリプトは *ApplicationServerDeployment/policies/* ディレクトリに個別のポリシードキュメントを生成します。
- IAM コンソールに移動し、*DeployStackPolicy.json* の内容を使用してポリシーを作成します。
- 作成したポリシーをユーザーに割り当てます。
詳細については、[IAM チュートリアル: カスタマーマネージドポリシーの作成とアタッチ](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_managed-policies.html) を参照してください。

また、*Simplicity Commander*（SiLabs 用）がシステムの PATH 環境変数に含まれていることを確認してください。

ターミナルで `commander --version` を実行して、Simplicity Commander が利用可能であることを確認してください。
:::

## Amazon Sidewalk の BLE サンプルを実行する

:::tip
Template Bluetooth LE のオリジナルチュートリアルは [こちら](https://nrfconnect.github.io/sdk-sidewalk/testing_samples/sidewalk_application_samples/template_ble.html#template-ble) で読むことができます。
:::

### プロビジョニングの生成

**ステップ 1**. Amazon Sidewalk 用 AWS IoT Core ツールにアクセスします。

以前クローンしたフォルダ **aws-iot-core-for-amazon-sidewalk-sample-app** を開きます。

**ステップ 2**. `config.yaml` 設定ファイルを編集し、**NORDIC** ハードウェアプラットフォームを設定します。

フォルダ内の **config.yaml** という名前のファイルを開きます（適切なエディタ、例：VS Code を使用）。以下を貼り付けて保存します。

```
Config:
AWS_PROFILE: default  # .aws/credentials からの AWS プロファイル名
DESTINATION_NAME: SensorAppDestination  # アップリンクトラフィックルーティング用の Sidewalk デスティネーション
HARDWARE_PLATFORM: NORDIC  # 使用可能な値: NORDIC, TI, SILABS または ALL
USERNAME: null
PASSWORD: null
INTERACTIVE_MODE: True
Outputs:
    DEVICE_PROFILE_ID: null
    WEB_APP_URL: null
_Paths:
    PROVISION_SCRIPT_DIR: tools/provision
    SILABS_COMMANDER_TOOLS_DIR: null  # Silabs Commander がシステムパスに既にある場合は不要。SILABS のみ必要。
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/36.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 3**. プロビジョニングツール用に Python 仮想環境をセットアップします：

```
cd aws-iot-core-for-amazon-sidewalk-sample-app
python -m pip install --user virtualenv
python -m venv sample-app-env
sample-app-env\Scripts\activate.bat
pip install pip==22.3.1
python -m pip install -r requirements.txt
python -m pip install pyjwt -t .\ApplicationServerDeployment\lambda\authLibs
```

**ステップ 4**. この時点で、`helper env_check.py` スクリプトを実行して、環境が一般的なエラーに対して正常かどうかを確認することをお勧めします。

```
python env_check.py
```

以下のようなメッセージが表示されれば、環境のインストールは正常に完了しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/37.png" style={{width:900, height:'auto'}}/></div>

**ステップ 5**. デバイスプロビジョニングスクリプトを実行します：

```
python EdgeDeviceProvisioning/provision_sidewalk_end_device.py
```

以下のような出力が表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/9.png" style={{width:800, height:'auto'}}/></div>

ここで生成された `Nordic_MFG.hex` ファイルが必要です。このファイルは最終的に XIAO nRF52840 にフラッシュされます。

:::note
**Nordic_MFG.hex** は、Amazon IoT Core と通信リンクを確立するためのデバイス専用の認証情報であり、各デバイスまたはアカウントごとに異なります。
:::

プロビジョニングファイルは `EdgeDeviceProvisioning` ディレクトリ内にあります。デバイスは以下のようにデバイスプロファイルのサブディレクトリにグループ化されています：

```
EdgeDeviceProvisioning \
- DeviceProfile_<profile-id> \
- DeviceProfile.json
- WirelessDevice_<device-id>\
    --  Nordic_MFG.bin
    --  Nordic_MFG.hex
    --  WirelessDevice.json
```

**Nordic_MFG.hex** ファイルをコピーし、簡単に見つけられる場所に保存してください。

**ステップ 6**. Python 仮想環境を終了します：

```
deactivate
```

### デスティネーションに MQTT を追加する

:::tip
このチュートリアルのこの部分については、Sidewalk が提供する [公式チュートリアル](https://nrfconnect.github.io/sdk-sidewalk/setting_up_sidewalk_environment/setting_up_sidewalk_product.html#add-mqtt-to-destination) を参照してください。
:::

### サンプル概要

このサンプルは、Amazon Sidewalk エンドノードアプリケーションのテンプレートを示しています。Bluetooth LE に最適化されています。

このサンプルは以下の開発キットをサポートしています：

| ハードウェアプラットフォーム | PCA | ボード名 | ビルドターゲット |
| ------------------ | --- | ---------- | ------------ |
| nRF52840 DK        | PCA10056 | nrf52840dk_nrf52840 | nrf52840dk_nrf52840 |

Amazon Sidewalk はまだ PR 提出をマージしていないため、現在はサポートされている nRF52840 DK プラットフォームを変更することで XIAO nRF52840 をサポートします。

| ハードウェアプラットフォーム | ボード名 | ビルドターゲット |
| ------------------ | ---------- | ------------ |
| Seeed Studio XIAO nRF52840 | nrf52840dk_nrf52840 | nrf52840dk_nrf52840 |

このサンプルは、Bluetooth LE トランスポートプロトコル用の Amazon Sidewalk API の実装を示しています。これは、Bluetooth LE トランスポートプロトコルのみをサポートするメモリ最適化された Amazon Sidewalk 構成の例です。フットプリントが小さいため、アプリケーションの両方のブートローダーパーティションは、サポートされている SoC（nRF52840）の内部フラッシュメモリに配置されています。

#### ユーザーインターフェース

ボタンアクションはボタンを離したときにトリガーされます。長押しアクションを使用するには、ボタンを 2 秒以上押し続けてから離します。

ボタンの割り当ては以下の通りです：

- **ボタン 1（長押し） -- D1**:

    ファクトリーリセット - アプリケーションは Amazon Sidewalk スタックにファクトリーリセットイベントを通知します。Amazon Sidewalk ライブラリは不揮発性ストレージからその構成をクリアします。リセットが成功した後、デバイスは再びクラウドサービスに登録する必要があります。

- **ボタン 2 -- D3**:

    接続リクエストの切り替え - デバイスは Bluetooth LE を介してアドバタイズ中に Amazon Sidewalk ゲートウェイに接続を開始するようリクエストします。接続が切断された後、ユーザーはビーコン状態を再設定する必要があります。ゲートウェイは、このリクエストを常に処理できるわけではありません。接続されているデバイスの数に依存します。

- **ボタン 3 -- D4**:

    Hello メッセージの送信 - このアクションはクラウドへのメッセージをキューに入れます。Amazon Sidewalk が準備できていない場合、エラーを表示するだけでメッセージは送信されません。キューは最終的に処理され、すべてのキューに入ったメッセージが送信されます。

- **ボタン 4（短押し） -- D9**:

    擬似バッテリーレベルの設定 - このアクションはシミュレートされたバッテリーレベルを設定します。

- **ボタン 4（長押し） -- D9**:
    DFU 状態に入る - このアクションは Amazon Sidewalk スタックを無効にし、Bluetooth LE SMP サーバーを開始します。nRF Connect モバイルアプリケーションを使用してファームウェアイメージを更新できます。DFU 状態を終了するには、デバイスの電源を再投入してください。

LEDはアプリケーションの現在の状態を表します（まだ達成されていない場合）：

- **LED 1 -- D0**:

    アプリケーションが正常に接続されました。

- **LED 2 -- D2**:

    アプリケーションが正常に登録されました。

- **LED 3 -- D5**:

    アプリケーションの時刻同期が成功しました。

- **LED 4 -- D8**:

    アプリケーションリンクが確立されました。

### サンプルファームウェアの準備

この例では、Amazon Sidewalkが提供するBLEサンプルプログラムを使用します。ハードウェアドライバのファームウェアはすべてのXIAO nRF52840に共通です。このセクションの手順を省略したい場合は、提供されている**merged.hex**ファイルを直接ダウンロードすることもできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/merged.hex" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ファイルをダウンロード</font></span></strong>
    </a>
</div><br />

以下は具体的な手順です。

**ステップ 1**. GithubからXIAO nRF52840用に作成されたプログラムをダウンロードします。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio-XIAO-nRF52840-sidewalk/releases/tag/v1.0.0" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>リリースをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

**ステップ 2**. ダウンロードしたら、フォルダをncsディレクトリに解凍してください。デフォルトのパスは以下の通りです：

```
C:\ncs\v2.3.0\zephyr\boards\arm\nrf52840dk_nrf52840
```

:::caution
このファイルディレクトリには元々nRF52840 DKの開発ファイルが含まれていました。簡略化のため、XIAO nRF52840プログラムに名前を変更して開発ボードを上書きしました。

そのため、元のファイル**nrf52840dk_nrf52840**内のすべてのファイルを、zipアーカイブ内のすべてのファイルで上書きするだけで済みます。
:::

**ステップ 3**. nRF Connect SDKのBashウィンドウに戻り、以下のコマンドを入力してファームウェアを生成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/38.png" style={{width:600, height:'auto'}}/></div>

```
cd sidewalk/samples/template_ble/
west build -b nrf52840dk_nrf52840
```

実行が正常に進むと、以下の出力が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/10.png" style={{width:800, height:'auto'}}/></div>

この時点で、サンプルファームウェアが生成されました。このファームウェアは`merged.hex`という名前で、以下のデフォルトの場所に保存されています：

```
C:\ncs\v2.3.0\sidewalk\samples\template_ble\build\zephyr
```

このファイルを、以前準備した**Nordic_MFG.hex**ファイルと一緒に保存してください。後でこれらを一緒に使用します。

### XIAO nRF52840へのファームウェアの書き込み

**ステップ 1**. **nRF Connect for Desktop**を開き、APPS内で**Programmer**を見つけてインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/11.png" style={{width:600, height:'auto'}}/></div>

**ステップ 2**. JLinkを介してXIAO nRF52840を接続します。

SWDインターフェースを介してXIAO nRF52840をJLinkに接続してください。

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO nRF52840</th>
			<th>JLink（教育版以外）</th>
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

XIAO拡張ボードを使用しない場合は、SWDインターフェースの使用について[XIAO nRF52840 Wiki](https://wiki.seeedstudio.com/ja/XIAO_BLE#access-the-swd-pins-for-debugging-and-reflashing-bootloader)を参照し、JLinkにデュプレックスワイヤを追加でハンダ付けしてください。

**ステップ 3**. Programmerを開き、両方のファームウェアをXIAO nRF52840に書き込みます。

ソフトウェアの左上にある**Add file**ボタンをクリックし、この記事で準備した**merged.hex**ファイルと**Nordic_MFG.hex**ファイルをそれぞれ追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/12.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/13.png" style={{width:800, height:'auto'}}/></div>

次に、JLinkをコンピュータに接続し、左上のデバイス選択ボタンをクリックしてデバイスを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/14.png" style={{width:800, height:'auto'}}/></div>

接続が完了したら、左側のReadボタンをクリックしてXIAOのメモリパーティションを取得します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/15.png" style={{width:800, height:'auto'}}/></div>

次に、**Erase & write**をクリックしてファームウェアをXIAOに書き込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/16.png" style={{width:800, height:'auto'}}/></div>

メモリの形状が近似しているか確認するには、**Read** をクリックします。これにより、フラッシュメモリが成功したかどうかを確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/17.png" style={{width:800, height:'auto'}}/></div>

**ステップ 4**. Amazon Sidewalk デバイスを組み立てて動作させる

例のプレビューでは、LED とボタンが接続されるピン位置をマークしています。次に、4つの Grove LED ボタンを使用します。これにより、XIAO の動作を制御できるだけでなく、ボタン上の LED を通じてさまざまな動作状態を表示することができます。

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO nRF52840</th>
			<th>LED</th>
            <th>ボタン</th>
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

XIAO は USB を介して電源が供給され、その後、XIAO nRF52840 はプッシュボタンを使用して制御されます。また、XIAO の動作ログは UART を介して利用可能です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-sidewalk/18.png" style={{width:600, height:'auto'}}/></div>

## リソース

- [Amazon Sidewalk 仕様](https://docs.sidewalk.amazon/specifications/)
- [Amazon Sidewalk プライバシーとセキュリティのホワイトペーパー](https://m.media-amazon.com/images/G/01/sidewalk/final_privacy_security_whitepaper.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>