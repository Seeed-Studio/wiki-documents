---
title: Wio Terminal を Microsoft Azure IoT Central に接続する
nointro:
keywords:
  - ドキュメント
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central/
slug: /ja/Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central
last_update:
  date: 05/15/2025
  author: gunengyu
---


# Wio Terminal を Microsoft Azure IoT Central に接続する

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" alt="pir" width={1200} height="auto" /></p>

## はじめに

このチュートリアルでは、Wio Terminal を Microsoft Azure IoT Central に接続し、Wio Terminal のオンボードセンサーやハードウェア（3軸加速度センサー、光センサー、3つのボタンなど）からテレメトリデータを送信する手順を説明します。その後、インタラクティブなダッシュボードでセンサーデータを視覚化できるようになります。また、Azure IoT Central を使用して、Wio Terminal のオンボードブザーを鳴らすなどのハードウェア制御も可能です。Microsoft Azure IoT Central は HTTP、MQTT、AMQP プロトコルをサポートしていますが、このチュートリアルでは MQTT プロトコルを使用します。

### Microsoft Azure とは？

[Microsoft Azure](https://azure.microsoft.com) は、Microsoft が提供するパブリッククラウドコンピューティングプラットフォームです。Microsoft Azure を使用して、アプリケーションやサービスを構築、テスト、デプロイ、管理することができます。

また、コンピューティング、分析、ストレージ、ネットワーキングなど、さまざまなクラウドサービスを提供しています。Microsoft Azure は、ソフトウェア・アズ・ア・サービス (SaaS)、プラットフォーム・アズ・ア・サービス (PaaS)、インフラストラクチャ・アズ・ア・サービス (IaaS)、およびサーバーレスを提供します。さらに、多くのプログラミング言語、ツール、フレームワークをサポートしています。

### Microsoft Azure IoT とは？

[Microsoft Azure IoT](https://azure.microsoft.com/en-us/overview/iot) は、Microsoft が管理するクラウドサービスのコレクションで、数十億の IoT 資産を接続、監視、制御します。これには、デバイスや機器のセキュリティおよびオペレーティングシステム、データと分析が含まれ、企業が IoT アプリケーションを構築、展開、管理するのを支援します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/Azure_IoT.png" alt="pir" width={1200} height="auto" /></p>

### Microsoft Azure IoT Central とは？

[Microsoft Azure IoT Central](https://azure.microsoft.com/en-us/services/iot-central) は、完全に管理されたグローバル IoT SaaS（ソフトウェア・アズ・ア・サービス）ソリューションで、大規模な IoT 資産を簡単に接続、監視、管理できるようにします。高いセキュリティを備え、ビジネスの成長に応じてスケールし、投資の再利用性を確保し、既存のビジネスアプリケーションと統合します。また、ビジネスアプリケーションと IoT データの間のギャップを埋めます。さらに、デバイスの再構成や更新を集中管理する機能を提供します。

### IoT Plug and Play とは？

[IoT Plug and Play](https://docs.microsoft.com/en-us/azure/iot-pnp) は、ソリューションビルダーがスマートデバイスを手動設定なしでソリューションに統合できるようにします。IoT Plug and Play の中心には、デバイスが IoT Plug and Play 対応アプリケーションにその機能を通知するために使用するデバイスモデルがあります。このモデルには以下が含まれます：

- プロパティ: デバイスやその他のエンティティの読み取り専用または書き込み可能な状態を表します
- テレメトリ: デバイスから送信されるデータ
- コマンド: デバイスで実行可能な機能や操作を記述します

IoT Plug and Play 認定デバイスは、Azure IoT Central でのデバイス設定（テンプレートの作成や機能・インターフェースの追加など）の手間を省きます。

### IoT Plug and Play 認定デバイス

IoT Plug and Play 認定デバイスは、[Azure Certified Device Catalog](https://devicecatalog.azure.com) に IoT Plug and Play バッジ付きで掲載されているデバイスです。

[Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) は IoT Plug and Play 認定デバイスです。

<p style={{textAlign: 'center'}}><a href="https://devicecatalog.azure.com/devices/8b9c5072-68fd-4fc3-8e5f-5b15e3a20bd9"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg" alt="pir" width={650} height="auto" /></a></p>

IoT Plug and Play 認定を受けるには、いくつかの基準をクリアする必要があります。その一つとして、デバイスの機能を定義する DTDL（Digital Twins Definition Language）モデルを GitHub 上の [Azure/iot-plugandplay-models (DMR)](https://github.com/Azure/iot-plugandplay-models) に公開する必要があります。

これにより、IoT Plug and Play 認定デバイスを使用するクラウドサービスが、このリポジトリからデバイスの機能を学習できるようになります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/PnP_devices.png" alt="pir" width={850} height="auto" /></p>

## Wio Terminal を Microsoft Azure IoT Central に MQTT を使用して接続する

前述の通り、Wio Terminal と Microsoft Azure IoT Central 間の通信には MQTT を使用します。ただし、必要に応じて HTTP ブリッジを使用することも可能です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" alt="pir" width={1200} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_receive.png" alt="pir" width={1200} height="auto" /></p>

### Microsoft Azure IoT Central のセットアップ

まず、Microsoft Azure IoT Central にアクセスし、Microsoft アカウントにログインしてプロジェクト用の新しいアプリケーションを作成します。

- **ステップ 1:** [こちら](https://apps.azureiotcentral.com) にアクセスして新しいアプリケーションを作成します。

- **ステップ 2:** 左側のナビゲーションメニューから **Build** をクリックし、**Custom apps** を選択します。

**注意:** ログインを求められた場合は、Microsoft アカウントにログインしてください。

- **ステップ 3:** **Application name** を入力し、**Pricing plan** で **Free** を選択します。

**注意:** アプリケーション名を入力すると、アプリケーション URL が自動的に作成されます。

- **ステップ 4:** **Create** をクリックして新しいアプリケーションを作成します。

これで Azure IoT Central のセットアップが完了しました！

### Wio Terminal のセットアップ

#### RTL8720 ファームウェアの更新

Wio Terminal の Realtek RTL8720 ワイヤレスコアのファームウェアを更新する必要があります。[この Wiki](https://wiki.seeedstudio.com/ja/Wio-Terminal-Network-Overview) に従って RTL8720 ファームウェアを更新してください。

**注意:** 指定されたバージョンに従って [ファームウェア](https://github.com/SeeedJP/wioterminal-aziot-example/releases) を更新してください。

#### デモコードをダウンロードして Wio Terminal にアップロードする

まず、Wio Terminal のオンボードセンサーから Microsoft Azure IoT Central にテレメトリデータを送信するデモコードを使用します。

##### デモコードのダウンロード

- **ステップ 1:** GitHub の [このリポジトリ](https://github.com/SeeedJP/wioterminal-aziot-example) にアクセスします。
- **ステップ 2:** **Releases** をクリックします。
- **ステップ 3:** **Latest release** の下で **wioterminal-aziot-example.uf2** をクリックして .uf2 ファイルをダウンロードします。

##### デモコードを Wio Terminal にアップロードする

- **ステップ 1:** Wio Terminal を PC に接続して電源を入れます。
- **ステップ 2:** 電源スイッチを「ON」位置からさらに下げてリリースし、再度スライドしてリリースすることで **Bootloader モード** に入ります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" alt="pir" width={500} height="auto" /></p>

**注意:** Wio Terminal が Bootloader モードに入ると、青色の LED が点滅とは異なる呼吸のような動作を開始します。

- **ステップ 3:** PC のファイルエクスプローラーを開くと、**Arduino** という名前の新しい外部ドライブが表示されます。

- **ステップ 4:** 先ほどダウンロードした **.uf2 ファイル** をこの **Arduino ドライブ** にドラッグします。

- **ステップ 5:** Wio Terminal の電源をオフにします。

これでデモコードを Wio Terminal に正常にアップロードしました。

##### Wi-Fi と Azure IoT の設定

次に、Wi-Fi と Azure IoT の接続を設定します。

- **ステップ 1:** 3 つのボタンを押しながら Wio Terminal の電源を入れて設定モードに入ります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config.png" alt="pir" width={700} height="auto" /></p>

- **ステップ 2:** [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) などのシリアルコンソールアプリケーションを開きます。

- **ステップ 3:** 正しいシリアル **COM ポート** を入力し、**9600** をボーレートとして設定して Wio Terminal に接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config_new.png" alt="pir" width={500} height="auto" /></p>

- **ステップ 4:** キーボードで **ENTER** を押してシリアルターミナルに **help** と入力し、設定の使用方法を確認します。

- **ステップ 5:** **set_wifissid** `your_WI-Fi_network_name` と入力して Wi-Fi SSID を設定します。

**注意:** フィールド間にスペースを 1 つ追加してください。

- **ステップ 6:** **set_wifipwd** `your_WI-Fi_network_password` と入力して Wi-Fi パスワードを設定します。

**注意:** フィールド間にスペースを 1 つ追加してください。

- **ステップ 7:** [Azure IoT Central](https://apps.azureiotcentral.com) で以前作成したアプリケーションにアクセスして Azure IoT の接続情報を設定します。

- **ステップ 8:** 左側のナビゲーションメニューから `Administration > Device Connection` に移動し、**ID scope** を **notepad** にコピーします。

- **ステップ 9:** **SAS-IoT-Devices** をクリックして **primary key** を **notepad** にコピーします。

- **ステップ 10:** 以前開いたシリアルターミナルに移動し、**set_az_iotc** `your_ID_scope` `your_primary_key` `your_device_name` と入力します。

**注意:** 各フィールド間にスペースを 1 つ追加してください。また、`device name` は任意で決定できます。

- **ステップ 11:** スイッチを「ON」位置からさらに下げてリリースすることで Wio Terminal をリセットします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Reset.png" alt="pir" width={500} height="auto" /></p>

これで Wio Terminal の LCD に Wi-Fi 接続中、次に Azure IoT Hub 接続中と表示され、その後 Azure IoT Central に送信されるテレメトリデータが表示されます。

### Microsoft Azure IoT Central にテレメトリデータを表示する

次に、Wio Terminal の 3 軸加速度センサー、光センサー、3 つのボタンからの受信テレメトリデータを Azure IoT Central Dashboard に表示します。

- **ステップ 1:** 以前アクセスした Azure IoT Central Dashboard を開きます。

- **ステップ 2:** 左側のナビゲーションメニューから **Devices** をクリックします。

- **ステップ 3:** **Seeed Wio Terminal** が Devices の下に表示されます。それをクリックします。

- **ステップ 4:** 以前設定した **device name** のエントリをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/wio_demo.png" alt="pir" width={800} height="auto" /></p>

これで、オンボードの3軸加速度計からのデータをインタラクティブなダッシュボードで視覚化できるようになります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/accel_demo.png" alt="pir" width={800} height="auto" /></p>

これはデフォルトのビューであり、他のテレメトリデータも表示するためにいくつか変更を加える必要があります。

- **ステップ 5:** 左側のナビゲーションメニューから **Device templates** をクリックし、**Seeed Wio Terminal** をクリックしてテンプレートを設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/device_template.png" alt="pir" width={400} height="auto" /></p>

- **ステップ 6:** 左側のナビゲーションメニューから **Overview** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/overview.png" alt="pir" width={400} height="auto" /></p>

- **ステップ 7:** **select a telemetry** ドロップダウンメニューを展開し、視覚化したいテレメトリを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/overview_edit.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 8:** **Add tile** をクリックすると、Azure IoT Central Dashboard にタイルが追加されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard_add.png" alt="pir" width={300} height="auto" /></p>

**注意:** タイルのサイズ変更や視覚化の変更は好みに応じて行うことができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/resize.png" alt="pir" width={400} height="auto" /></p>

- **ステップ 9:** 左、中央、右の3つのボタンについても同じ手順を繰り返します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/draft_visual.png" alt="pir" width={850} height="auto" /></p>

**注意:** 以下のように設定しました：

| タイル名 | タイルサイズ | タイル視覚化 |
|-|-|-|
| 光強度 | 2 x 2 | 折れ線グラフ |
| 左ボタン | 1 x 1 | KPI |
| 右ボタン | 1 x 1 | KPI |
| 中央ボタン | 2 x 2 | KPI |

- **ステップ 10:** **Save** と **Publish** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/save.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 11:** Azure IoT Central ダッシュボードに戻ると、Wio Terminal から送信されるすべてのデータを視覚化できるようになります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/final.png" alt="pir" width={750} height="auto" /></p>

- **ステップ 12:** **Raw data** タブをクリックすると、すべてのテレメトリデータをリアルタイムで確認することもできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/raw_data.png" alt="pir" width={700} height="auto" /></p>

#### ルールを追加してメールを送信する

IoT Central のルールは、接続されたデバイスからの監視イベントに基づいてカスタマイズ可能な応答をトリガーするツールです。
例えば、このデモでは、光強度レベルが50未満の場合にメールを送信するように IoT Central を設定できます。

- **ステップ 1:** Azure IoT Central の左側のナビゲーションメニューから **Rules** をクリックします。

- **ステップ 2:** **+New** または **Create a rule** をクリックします。

- **ステップ 3:** ルールの名前を入力します。

- **ステップ 4:** **Device template** の下で **Seeed Wio Terminal** を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/rule_1.png" alt="pir" width={830} height="auto" /></p>

- **ステップ 5:** **Conditions** の下で **time aggregation** をオンにし、任意の **time window** を選択します。ここでは **5分** に設定します。

**注意:** 毎 **xx** 分ごとに、ルールは過去 **xx** 分間のデータを評価します。

- **ステップ 6:** **Telemetry** の下で任意のテレメトリを選択します。ここでは **光強度** を設定します。

- **ステップ 7:** **Aggregation** の下で **Average** を選択します。これにより、設定した **time window** の間の平均値が取得されます。

- **ステップ 8:** **Operator** の下で任意の条件を選択します。ここでは **is less than** 条件を使用します。

- **ステップ 9:** **Value** の下で値を入力します。ここでは **50** を入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/conditions_1.png" alt="pir" width={1200} height="auto" /></p>

- **ステップ 10:** **Actions** の下で **Email** をクリックします。

- **ステップ 11:** **Display name**、**To address**、**Note** を入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/email_3.png" alt="pir" width={1200} height="auto" /></p>

**注意:** ここで使用する **メールアドレス** は、この **Azure IoT Central アプリケーション** に追加され、少なくとも一度サインインしている必要があります。

- `Administration > Users` に移動し、**Assign user** をクリックして **Email** を入力し、**Role** を割り当てて **Save** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/assign_user.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 12:** **Done** をクリックします。

- **ステップ 13:** 最後に **Save** をクリックします。

これでメールを送信するルールが正常に作成されました。

### Microsoft Azure IoT Central からハードウェアを制御する

Azure IoT Central でテレメトリデータを表示するだけでなく、それを使用してハードウェアを制御することもできます。このデモでは、Wio Terminal の内蔵ブザーを制御し、指定した時間の間ブザーを鳴らすことができます。

- **ステップ 1:** **Command** タブをクリックします。

- **ステップ 2:** **Duration** 列の下に値を入力します。

**注意:** 値はミリ秒単位です。例: 1000 = 1000ms = 1秒

- **ステップ 3:** **Run** をクリックすると、指定した時間の間ブザーから音が鳴るのを聞くことができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/1000.png" alt="pir" width={500} height="auto" /></p>

## 他のセンサーを追加する方法

Wio Terminal に任意のセンサーを追加し、接続されたセンサーからのテレメトリーデータを Azure IoT Central に送信することができます。ここでは、[Grove - Temperature & Humidity Sensor (DHT11)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html) を Wio Terminal に接続し、温度と湿度のデータを Azure IoT Central に送信してダッシュボードで可視化する方法を説明します。

### Microsoft Visual Studio Code のセットアップ

#### Visual Studio Code のダウンロード、インストール、設定

Wio Terminal にさらにセンサーを追加してテレメトリーデータを Azure IoT Central に送信する場合、以前使用した .uf2 ファイルを簡単に使用することはできません。なぜなら、その .uf2 ファイルにはコードがすでにコンパイルされているためです。そのため、デモにコードを追加したい場合は、Microsoft Visual Studio Code という IDE を使用して必要なコードを追加し、最終的に Wio Terminal にアップロードする必要があります。

では、まずコンピュータに Microsoft Visual Studio Code をインストールする手順を進めましょう。

- **ステップ 1:** code.visualstudio.com にアクセスし、**Download** をクリックします。

**注意:** オペレーティングシステムに応じたインストーラーを選択してください。

- **ステップ 2:** インストールウィザードを進めてインストールを完了します。

- **ステップ 3:** Visual Studio Code を開きます。

- **ステップ 4:** 左側のナビゲーションメニューから **Extensions** をクリックし、検索ボックスに **platformIO** と入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio.png" alt="pir" width={380} height="auto" /></p>

- **ステップ 5:** **install** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio_install.png" alt="pir" width={550} height="auto" /></p>

#### Visual Studio Code でのデモ用コード

- **ステップ 1:** [このリンク](https://github.com/SeeedJP/wioterminal-aziot-example/releases) にアクセスして、[SeeedJP/wioterminal-aziot-example リポジトリ](https://github.com/SeeedJP/wioterminal-aziot-example) 内の利用可能なリリースを確認します。

- **ステップ 2:** **Latest release** に移動し、**Assets** の下で **Source code (zip)** をクリックします。これにより、ソースコードが .zip ファイルとしてダウンロードされます。

- **ステップ 3:** **.zip ファイル** を解凍します。

- **ステップ 4:** Visual Studio Code に戻り、`File > Open Folder...` に移動します。

- **ステップ 5:** 解凍したフォルダーを選択し、**Select Folder** をクリックします。

- **ステップ 6:** 左側のナビゲーションメニューから `wioterminal-aziot-example-0.10 > include > config.h` に移動します。

- **ステップ 7:** **config.h** を開いたら、**"dtmi:seeedkk:wioterminal:wioterminal_aziot_example;5"** を探し、**"dtmi:local:wioterminal_aziot_example;5"** に変更します。

**注意:** **dtmi:local:wioterminal_aziot_example;5** はモデル ID です。

- **ステップ 8:** 左側のナビゲーションメニューから `wioterminal-aziot-example-0.10 > seeedkk-wioterminal-wioterminal_aziot_example.json` に移動します。

- **ステップ 9:** **seeedkk-wioterminal-wioterminal_aziot_example.json** を開いたら、**"dtmi:seeedkk:wioterminal:wioterminal_aziot_example;5"** を探し、**"dtmi:local:wioterminal_aziot_example;5"** に変更します。

**注意:** **seeedkk-wioterminal-wioterminal_aziot_example.json** は以前に説明した DTDL モデルです。

現在、このモデルは **加速度、光強度、ボタンカウント** データ用に定義されています。これに **温度と湿度** を追加します。

- **ステップ 10:** 以下のコードを **"contents": [** の下に追加します。

```sh
  "contents": [
    {
      "@type": [
        "Telemetry",
        "Temperature"
      ],
      "name": "temp",
      "unit": "degreeCelsius",
      "displayName": {
        "en": "Temperature (C)",
        "ja": "温度"
      },
      "schema": "integer"
    },
    {
      "@type": "Telemetry",
      "name": "humi",
      "displayName": {
        "en": "Humidity (%RH)",
        "ja": "湿度"
      },
      "schema": "integer"
    },
```

**注意:** **name** は後でコード内で特定のテレメトリーデータを識別するために使用される名前です。**unit** はデータに対応する単位、**displayName** は Azure IoT Central に表示される名前（"en" は英語、"ja" は日本語）、**schema** はデータ型を示します。

- **ステップ 11:** 左側のナビゲーションメニューから `wioterminal-aziot-example-0.10 > platformio.ini` に移動します。

- **ステップ 12:** **platformio.ini** を開いたら、**lib_deps** の下に以下を追加します。

```sh
lib_deps = 
    https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor
```

**注意:** これは Grove - Temperature and Humidity Sensor (DHT11) のライブラリです。

- **ステップ 13:** 左側のナビゲーションメニューから `wioterminal-aziot-example-0.10 > src > main.cpp` に移動します。

- **ステップ 14:** **main.cpp** を開いたら、**#include "CliMode.h"** の後に DHT11 ライブラリを追加します。

```cpp
#include "CliMode.h"
#include "DHT.h"
```

- **ステップ 15:** **LIS3DHTR AccelSensor;** の後に DHT11 の定義と初期化を追加します。

```cpp
LIS3DHTR<TwoWire> AccelSensor;

#define DHTPIN 0 //DHTセンサーの信号ピンを定義
// #define DHTPIN PIN_WIRE_SCL //I2Cポートをデジタルポートとして使用
#define DHTTYPE DHT11 //DHTセンサーのタイプを定義
DHT dht(DHTPIN, DHTTYPE); //DHTセンサーの初期化
```

**注意:** DHT11 センサーは Wio Terminal の Grove ポートのどちらにも接続できます。**Digital Port** を使用する場合、ピンは **0** と定義され、**I2C port** を使用する場合、ピンは **PIN_WIRE_SCL** と定義されます。ポート図は後でこのドキュメントに示されます。

- **ステップ 16:** **SendTelemetry()** 関数の下に以下のコードを追加して、テレメトリーデータとともに JSON ファイルを解析します。

```cpp
static az_result SendTelemetry()
{
    float accelX;
    float accelY;
    float accelZ;
    AccelSensor.getAcceleration(&accelX, &accelY, &accelZ);

    int light;
    light = analogRead(WIO_LIGHT) * 100 / 1023;

    int temp; //温度を格納する変数を割り当て
    int humi; //湿度を格納する変数を割り当て
    temp = dht.readTemperature(); //温度を読み取る
    humi = dht.readHumidity(); //湿度を読み取る

    char telemetry_topic[128];
    if (az_result_failed(az_iot_hub_client_telemetry_get_publish_topic(&HubClient, NULL, telemetry_topic, sizeof(telemetry_topic), NULL)))
    {
        Log("Failed az_iot_hub_client_telemetry_get_publish_topic" DLM);
        return AZ_ERROR_NOT_SUPPORTED;
    }

    az_json_writer json_builder;
    char telemetry_payload[200];
    AZ_RETURN_IF_FAILED(az_json_writer_init(&json_builder, AZ_SPAN_FROM_BUFFER(telemetry_payload), NULL));
    AZ_RETURN_IF_FAILED(az_json_writer_append_begin_object(&json_builder));
    AZ_RETURN_IF_FAILED(az_json_writer_append_property_name(&json_builder, AZ_SPAN_LITERAL_FROM_STR("temp")));
    AZ_RETURN_IF_FAILED(az_json_writer_append_int32(&json_builder, temp));
    AZ_RETURN_IF_FAILED(az_json_writer_append_property_name(&json_builder, AZ_SPAN_LITERAL_FROM_STR("humi")));
    AZ_RETURN_IF_FAILED(az_json_writer_append_int32(&json_builder, humi));
```

- **ステップ 17:** **ntp.begin** の行の後に以下のコードを追加して、DHT11センサーを起動します。

```cpp
dht.begin(); //DHTセンサーを起動
```

これで、このデモのコードはすべて完成しました。

- **ステップ 18:** 左のナビゲーションメニューから **PlatformIO アイコン** をクリックし、**Build** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio_build.png" alt="pir" width={400} height="auto" /></p>

以下のメッセージが表示された場合、コードのコンパイルに成功しています。

```sh
================================== [SUCCESS] Took 30.56 seconds ==================================
```

### Microsoft Azure IoT Central のセットアップ

次に、Wio Terminal からのデータを Azure IoT Central Dashboard 上で可視化するために、カスタムデバイステンプレートを作成する必要があります。

#### 新しいデバイステンプレートの作成

- **ステップ 1:** Azure IoT Central にアクセスし、左のナビゲーションメニューから `Device templates` をクリックします。

- **ステップ 2:** **+ New** をクリックし、**IoT device** を選択して **Next:Customize** をクリックします。

- **ステップ 3:** **Device template name** ボックスに名前を入力し、**Next:Review** をクリックします。

- **ステップ 4:** **Create** をクリックします。

#### カスタムデバイスモデルのインポート

- **ステップ 1:** **Import a model** をクリックします。

- **ステップ 2:** 以前使用した **wioterminal-aziot-example-0.10** フォルダに移動し、**seeedkk-wioterminal-wioterminal_aziot_example.json** ファイルを見つけてクリックします。

- **ステップ 3:** **Open** をクリックします。

- **ステップ 4:** 左メニューから **Views** をクリックし、**Generate default views** をクリックします。

- **ステップ 5:** **Generate default dashboard view(s)** をクリックします。

- **ステップ 6:** 左メニューから **Overview** に移動し、ダッシュボードを好みに合わせてカスタマイズします。

**注意:** このドキュメントでは以前、ダッシュボードのカスタマイズ方法について説明しました。

- **ステップ 7:** 以下の設定を行います。

| タイル名 | タイルサイズ | タイルの可視化 |
|-|-|-|
| 光の強度 | 2 x 2 | 折れ線グラフ |
| 光の強度 | 1 x 1 | 最終値 |
| 温度 (C)、湿度 (%RH) | 2 x 2 | 折れ線グラフ |
| 温度 (C) | 1 x 1 | 最終値 |
| 湿度 (%RH) | 1 x 1 | 最終値 |
| 左ボタン | 1 x 1 | KPI |
| 中央ボタン | 1 x 1 | KPI |
| 右ボタン | 1 x 1 | KPI |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 8:** **Save** と **Publish** をクリックします。

### Wio Terminal のセットアップ

#### ハードウェアセットアップ

- **Grove - 温度と湿度センサー (DHT11)** を Wio Terminal の **Grove Digital Port** に接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/connection.png" alt="pir" width={380} height="auto" /></p>

#### ソフトウェアセットアップ

##### コードを Wio Terminal にアップロードする

次に、Wio Terminal にコードをアップロードして、Azure IoT Central にテレメトリデータを送信します。

- **ステップ 1:** VS Code に戻り、**PlatformIO アイコン** をクリックして **Upload** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformIO_upload.png" alt="pir" width={380} height="auto" /></p>

##### Wi-Fi と Azure IoT の設定

次に、以前と同様に Wi-Fi と Azure IoT の接続を設定します。

- **ステップ 1:** 3つのボタンを押しながら Wio Terminal をオンにして、設定モードに入ります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config.png" alt="pir" width={700} height="auto" /></p>

- **ステップ 2:** [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) などのシリアルコンソールアプリケーションを開きます。

- **ステップ 3:** 正しいシリアル **COM Port** を入力し、**9600** をボーレートとして設定して Wio Terminal に接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config_new.png" alt="pir" width={500} height="auto" /></p>

- **ステップ 4:** キーボードで **ENTER** を押し、シリアルターミナルで **help** を入力して設定の使用方法を確認します。

**注意:** Wi-Fi SSID とパスワードは以前の設定で保存されているため、再入力する必要はありません。

- **ステップ 5:** [Azure IoT Central](https://apps.azureiotcentral.com) で以前作成したアプリケーションにアクセスし、Azure IoT の接続情報を設定します。

- **ステップ 6:** 左のナビゲーションメニューから `Administration > Device Connection` に移動し、**ID scope** を **notepad** にコピーします。

- **ステップ 7:** **SAS-IoT-Devices** をクリックして、**primary key** を **notepad** にコピーします。

- **ステップ 8:** 以前開いたシリアルターミナルに移動し、**set_az_iotc** `your_ID_scope` `your_primary_key` `your_device_name` を入力します。

**注意:** 各フィールドの間にスペースを1つ追加してください。また、`device name` は任意で決めることができます。

- **ステップ 9:** スイッチを ON の位置からさらに下げてリリースすることで Wio Terminal をリセットします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Reset.png" alt="pir" width={500} height="auto" /></p>

これで、Wio Terminal の LCD に Wi-Fi と Azure IoT Hub に接続していることが表示され、その後 Azure IoT Central に送信されるテレメトリデータが表示されます。

### Azure IoT Central での可視化

Azure IoT Central に戻り、左のナビゲーションメニューから **Devices** をクリックし、**Device name** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard_final1.png" alt="pir" width={1000} height="auto" /></p>

これで、Wio Terminal からのすべてのセンサーデータを Microsoft Azure IoT Central Dashboard 上で可視化できるようになります！

## 技術サポートと製品ディスカッション

技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
