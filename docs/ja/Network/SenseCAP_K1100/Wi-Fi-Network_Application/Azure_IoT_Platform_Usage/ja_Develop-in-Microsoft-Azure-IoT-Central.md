---
description: Microsoft Azure IoT Centralでの開発
title: Microsoft Azure IoT Centralでの開発
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Develop-in-Microsoft-Azure-IoT-Central
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# Microsoft Azure IoT Centralでの開発

### ルールを追加してメールを送信する

IoT Centralのルールは、接続されたデバイスからの監視イベントに基づいてカスタマイズ可能な応答をトリガーするツールです。
例えば、このデモでは、光の強度レベルが50未満の場合にIoT Centralがメールを送信するよう設定できます。

- **ステップ 1:** Azure IoT Centralの左側のナビゲーションメニューから**Rules**をクリックします。

- **ステップ 2:** **+New**または**Create a rule**をクリックします。

- **ステップ 3:** ルールの名前を入力します。

- **ステップ 4:** **Device template**の下で、**Seeed Wio Terminal**を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/rule_1.png" alt="pir" width={830} height="auto" /></p>

- **ステップ 5:** **Conditions**の下で、**time aggregation**をオンにし、任意の**time window**を選択します。ここでは**5分**に設定します。

**注意:** **xx**分ごとに、ルールは過去**xx**分間のデータを評価します。

- **ステップ 6:** **Telemetry**の下で、任意のテレメトリを選択します。ここでは**Light intensity**を設定します。

- **ステップ 7:** **Aggregation**の下で、**Average**を選択します。これにより、設定した**time window**内の平均値が取得されます。

- **ステップ 8:** **Operator**の下で、任意の条件を選択します。ここでは**is less than**条件を使用します。

- **ステップ 9:** **Value**の下で値を入力します。ここでは**50**を入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/conditions_1.png" alt="pir" width={1200} height="auto" /></p>

- **ステップ 10:** **Actions**の下で、**Email**をクリックします。

- **ステップ 11:** メールの**Display name**、**To address**、および**Note**を入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/email_3.png" alt="pir" width={1200} height="auto" /></p>

**注意:** ここで使用する**メールアドレス**は、この**Azure IoT Centralアプリケーション**に追加され、少なくとも一度サインインしている必要があります。

- `Administration > Users`に移動し、**Assign user**をクリックして、**Email**を入力し、**Role**を割り当てて**Save**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/assign_user.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 12:** **Done**をクリックします。

- **ステップ 13:** 最後に**Save**をクリックします。

これで、メールを送信するルールが正常に作成されました。

### Microsoft Azure IoT Centralからハードウェアを制御する

Azure IoT Centralでテレメトリデータを表示するだけでなく、それを使用してハードウェアを制御することもできます。このデモでは、Wio Terminalの内蔵ブザーを制御し、ブザーが鳴る時間を指定することができます。

- **ステップ 1:** **Command**タブをクリックします。

- **ステップ 2:** **Duration**列の下にある欄に**値**を入力します。

**注意:** 値はミリ秒単位です。例: 1000 = 1000ms = 1秒

- **ステップ 3:** **Run**をクリックすると、指定した時間の間、ブザーからビープ音が聞こえます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/1000.png" alt="pir" width={500} height="auto" /></p>

## 他のセンサーを追加する方法

Wio Terminal に任意のセンサーを追加し、接続されたセンサーからのテレメトリデータを Azure IoT Central に送信することができます。ここでは、[Grove - 温度・湿度センサー (DHT11)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html) を Wio Terminal に接続し、温度と湿度のデータを Azure IoT Central に送信してダッシュボードで可視化する方法を説明します！

### Microsoft Visual Studio Code のセットアップ

#### Visual Studio Code のダウンロード、インストール、および設定

Azure IoT Central にテレメトリデータを送信するために Wio Terminal にさらにセンサーを追加したい場合、以前使用した .uf2 ファイルを簡単に使用することはできません。なぜなら、その .uf2 ファイルにはコードがすでにコンパイルされているからです。そのため、デモにさらにコードを追加したい場合は、Microsoft Visual Studio Code という IDE を使用して必要なコードを追加し、最終的にそれを Wio Terminal にアップロードする必要があります。

では、コンピュータに Microsoft Visual Studio Code をインストールする手順を見ていきましょう。

- **ステップ 1:** code.visualstudio.com にアクセスし、**Download** をクリックします。

**注意:** オペレーティングシステムに応じたインストーラーを選択してください。

- **ステップ 2:** インストールウィザードを進めてインストールを完了します。

- **ステップ 3:** Visual Studio Code を開きます。

- **ステップ 4:** 左側のナビゲーションメニューから **Extensions** をクリックし、検索ボックスに **platformIO** と入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio.png" alt="pir" width={380} height="auto" /></p>

- **ステップ 5:** **install** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio_install.png" alt="pir" width={550} height="auto" /></p>

#### Visual Studio Code でのデモ用コード

- **ステップ 1:** [このリンク](https://github.com/SeeedJP/wioterminal-aziot-example/releases) にアクセスし、[SeeedJP/wioterminal-aziot-example リポジトリ](https://github.com/SeeedJP/wioterminal-aziot-example) 内の利用可能なリリースを見つけます。

- **ステップ 2:** **Latest release** に移動し、**Assets** の下にある **Source code (zip)** をクリックします。これにより、ソースコードが .zip ファイルとしてダウンロードされます。

- **ステップ 3:** **.zip ファイル** を解凍します。

- **ステップ 4:** Visual Studio Code に戻り、`File > Open Folder...` に移動します。

- **ステップ 5:** 先ほど解凍したフォルダを選択し、**Select Folder** をクリックします。

- **ステップ 6:** 左側のナビゲーションメニューから `wioterminal-aziot-example-0.10 > include > config.h` に移動します。

- **ステップ 7:** **config.h** を開いたら、**"dtmi:seeedkk:wioterminal:wioterminal_aziot_example;5"** を探し、**"dtmi:local:wioterminal_aziot_example;5"** に変更します。

**注意:** **dtmi:local:wioterminal_aziot_example;5** はモデル ID です。

- **ステップ 8:** 左側のナビゲーションメニューから `wioterminal-aziot-example-0.10 > seeedkk-wioterminal-wioterminal_aziot_example.json` に移動します。

- **ステップ 9:** **seeedkk-wioterminal-wioterminal_aziot_example.json** を開いたら、**"dtmi:seeedkk:wioterminal:wioterminal_aziot_example;5"** を探し、**"dtmi:local:wioterminal_aziot_example;5"** に変更します。

**注意:** **seeedkk-wioterminal-wioterminal_aziot_example.json** は以前に説明した DTDL モデルです。

現在、このモデルは **加速度、光強度、ボタンカウント** データ用に定義されています。ここに **温度と湿度** を追加します。

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

**注意:** ここで、**name** は後でコード内で特定のテレメトリデータを識別するために使用される名前です。**unit** はデータに対応する単位、**displayName** は Azure IoT Central に表示される名前（"en" は英語、"ja" は日本語）、**schema** はデータ型を示します。

- **ステップ 11:** 左側のナビゲーションメニューから `wioterminal-aziot-example-0.10 > platformio.ini` に移動します。

- **ステップ 12:** **platformio.ini** を開いたら、**lib_deps** の下に以下を追加します。

```sh 
lib_deps = 
    https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor
```

**注意:** これは Grove - 温度・湿度センサー (DHT11) 用のライブラリです。

- **ステップ 13:** 左側のナビゲーションメニューから `wioterminal-aziot-example-0.10 > src > main.cpp` に移動します。

- **ステップ 14:** **main.cpp** を開いたら、**#include "CliMode.h"** の後に DHT11 ライブラリを追加します。

```cpp
#include "CliMode.h"
#include "DHT.h"
```

- **ステップ 15:** **LIS3DHTR  AccelSensor;** の後に DHT11 の定義と初期化を追加します。

```cpp
LIS3DHTR<TwoWire> AccelSensor;

#define DHTPIN 0 // DHT センサーの信号ピンを定義
// #define DHTPIN PIN_WIRE_SCL // I2C ポートをデジタルポートとして使用
#define DHTTYPE DHT11 // DHT センサーのタイプを定義
DHT dht(DHTPIN, DHTTYPE); // DHT センサーを初期化
```

**注意:** DHT11 センサーは Wio Terminal の両方の Grove ポートに接続できます。**デジタルポート** を使用する場合、ピンは **0** と定義され、**I2C ポート** を使用する場合、ピンは **PIN_WIRE_SCL** と定義されます。ポートの図はこのドキュメントの後半で示されます。

- **ステップ 16:** **SendTelemetry()** 関数の下に以下のコードを追加し、テレメトリデータとともに JSON ファイルを解析します。

```cpp
static az_result SendTelemetry()
{
    float accelX;
    float accelY;
    float accelZ;
    AccelSensor.getAcceleration(&accelX, &accelY, &accelZ);

    int light;
    light = analogRead(WIO_LIGHT) * 100 / 1023;

    int temp; // 温度を格納する変数を割り当て
    int humi; // 湿度を格納する変数を割り当て
    temp = dht.readTemperature(); // 温度を読み取る
    humi = dht.readHumidity(); // 湿度を読み取る

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
dht.begin(); // DHTセンサーを起動
```

これで、このデモのすべてのコードが完成しました。

- **ステップ 18:** 左側のナビゲーションメニューから **PlatformIO アイコン** をクリックし、**Build** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio_build.png" alt="pir" width={400} height="auto" /></p>

以下のメッセージが表示された場合、コードのコンパイルに成功しています。

```sh
================================== [SUCCESS] Took 30.56 seconds ==================================
```

### Microsoft Azure IoT Central のセットアップ

次に、Wio Terminal からのデータを Azure IoT Central Dashboard 上で可視化するために、カスタムデバイステンプレートを作成する必要があります。

#### 新しいデバイステンプレートの作成

- **ステップ 1:** Azure IoT Central にアクセスし、左側のナビゲーションメニューから `Device templates` をクリックします。

- **ステップ 2:** **+ New** をクリックし、**IoT device** を選択して **Next:Customize** をクリックします。

- **ステップ 3:** **Device template name** ボックスに名前を入力し、**Next:Review** をクリックします。

- **ステップ 4:** **Create** をクリックします。

#### カスタムデバイスモデルのインポート

- **ステップ 1:** **Import a model** をクリックします。

- **ステップ 2:** 以前使用した **wioterminal-aziot-example-0.10** フォルダに移動し、**seeedkk-wioterminal-wioterminal_aziot_example.json** ファイルを見つけてクリックします。

- **ステップ 3:** **Open** をクリックします。

- **ステップ 4:** 左側のメニューから **Views** をクリックし、**Generate default views** をクリックします。

- **ステップ 5:** **Generate default dashboard view(s)** をクリックします。

- **ステップ 6:** 左側のメニューから **Overview** に移動し、ダッシュボードを好みに応じてカスタマイズします。

**注意:** このドキュメント内で、ダッシュボードのカスタマイズ方法については以前に説明しています。

- **ステップ 7:** 以下の設定を行います。

| タイル名 | タイルサイズ | タイルの可視化 |
|-|-|-|
| Light Intensity | 2 x 2 | 折れ線グラフ |
| Light Intensity | 1 x 1 | 最後に記録された値 |
| Temperature (C), Humidity (%RH) | 2 x 2 | 折れ線グラフ |
| Temperature (C) | 1 x 1 | 最後に記録された値 |
| Humidity (%RH) | 1 x 1 | 最後に記録された値 |
| Left button | 1 x 1 | KPI |
| Middle button | 1 x 1 | KPI |
| Right button | 1 x 1 | KPI |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 8:** **Save** と **Publish** をクリックします。

### Wio Terminal のセットアップ

#### ハードウェアのセットアップ

- **Grove - Temperature and Humidity Sensor (DHT11)** を Wio Terminal の **Grove Digital Port** に接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/connection.png" alt="pir" width={380} height="auto" /></p>

#### ソフトウェアのセットアップ

##### コードを Wio Terminal にアップロード

次に、Wio Terminal にコードをアップロードして、Azure IoT Central にテレメトリデータを送信します。

- **ステップ 1:** VS Code に戻り、**PlatformIO アイコン** をクリックして **Upload** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformIO_upload.png" alt="pir" width={380} height="auto" /></p>

##### Wi-Fi と Azure IoT の設定

次に、Wi-Fi と Azure IoT の接続を設定します。これは以前と同じ手順です。

- **ステップ 1:** 3つのボタンを押しながら Wio Terminal をオンにして、設定モードに入ります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config.png" alt="pir" width={700} height="auto" /></p>

- **ステップ 2:** [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) などのシリアルコンソールアプリケーションを開きます。

- **ステップ 3:** 正しいシリアル **COM ポート** を入力し、**9600** をボーレートとして設定して Wio Terminal に接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config_new.png" alt="pir" width={500} height="auto" /></p>

- **ステップ 4:** キーボードで **ENTER** を押し、シリアルターミナルで **help** と入力して設定の使用方法を確認します。

**注意:** Wi-Fi SSID とパスワードは以前の設定で保存されているため、再入力する必要はありません。

- **ステップ 5:** [Azure IoT Central](https://apps.azureiotcentral.com) で以前作成したアプリケーションにアクセスし、Azure IoT の接続情報を設定します。

- **ステップ 6:** 左側のナビゲーションメニューから `Administration > Device Connection` に移動し、**ID scope** を **notepad** にコピーします。

- **ステップ 7:** **SAS-IoT-Devices** をクリックし、**primary key** を **notepad** にコピーします。

- **ステップ 8:** 先ほど開いたシリアルターミナルに移動し、以下を入力します。

```sh
set_az_iotc your_ID_scope your_primary_key your_device_name
```

**注意:** 各フィールドの間にスペースを1つ追加してください。また、`device name` は任意で決めることができます。

- **ステップ 9:** スイッチを ON の位置からさらに下げてリリースすることで、Wio Terminal をリセットします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Reset.png" alt="pir" width={500} height="auto" /></p>

これで、Wio Terminal の LCD に Wi-Fi 接続中、次に Azure IoT Hub 接続中と表示され、その後 Azure IoT Central に送信されるテレメトリデータが表示されます。

### Azure IoT Central での可視化

Azure IoT Central に戻り、左側のナビゲーションメニューから **Devices** をクリックし、自分の **Device name** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard_final1.png" alt="pir" width={1000} height="auto" /></p>

これで、Wio Terminal からのすべてのセンサーデータを Microsoft Azure IoT Central Dashboard 上で可視化できるようになります！