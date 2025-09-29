---
description: ODYSSEY - X86J41x5
title: Azure IoT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ODYSSEY-X86J4105-AzureIOT
last_update:
  date: 05/15/2025
  author: Lakshantha

---


<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/ja/ODYSSEY-X86J4105-AzureIOT/
sku: 102110399
--- -->

# エッジ IoT - センサー データをクラウドに送信する

このチュートリアルでは、ODYSSEY - X86J41x5 に接続されたセンサー値を読み取り、それを **Microsoft Azure IoT Hub** に送信する方法を示します。このデータは表示されたり、さらなる IoT アプリケーションのために処理されたりします。

## 生データの受信

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/receivingData.gif" /></div>


## データの可視化

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/visulizeData.jpg" /></div>


## はじめに

[IoT Hub](https://azure.microsoft.com/en-us/services/iot-hub/) は、Microsoft Azure のサービスであり、IoT デバイスから大量のテレメトリをクラウドに取り込み、保存または処理することを可能にします。

## 前提条件

- ODYSSEY - X86J41x5 に [Python 3](https://www.python.org/downloads/windows/) をインストールする

- Microsoft Azure アカウント。まだ持っていない場合は、[無料アカウント](https://azure.microsoft.com/en-us/free/?WT.mc_id=A261C142F) を作成してください。

- Azure リソースを管理するためのコマンドラインツールである [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest) をダウンロードしてインストールします。

Azure CLI をインストールしたら、`cmd` または `Powershell` を開き、`az` コマンドを実行します。以下のような画面が表示されるはずです。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/AzureCLI.png" /></div>


## Azure CLI の事前設定

### Azure にログインする

`cmd` または `Powershell` を開き、`az login` コマンドを実行します。ブラウザウィンドウが表示され、Microsoft Azure アカウントにログインします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/azAcc.png" /></div>


### Azure CLI に Microsoft IoT Azure 拡張機能を追加する

以下のコマンドを実行して、Azure CLI に Microsoft Azure IoT 拡張機能を追加します。この IoT 拡張機能は、Azure CLI に IoT Hub、IoT Edge、および IoT デバイスプロビジョニングサービス (DPS) に特化したコマンドを追加します。

```shell
az extension add --name azure-cli-iot-ext
```

## IoT Hub の作成

このセクションでは、Azure ポータルを使用して IoT Hub を作成する方法を説明します。

1. [**Azure ポータル**](https://portal.azure.com) にサインインします。

2. **リソースの作成** を選択し、*マーケットプレイスを検索* で **IoT Hub** を検索します。

3. **IoT Hub** を選択し、**作成** をクリックします。

4. **基本** タブで以下のフィールドを入力します：

- **サブスクリプション:** ハブに使用するサブスクリプションを選択します。

- **リソース グループ:** リソース グループを選択するか、新しいものを作成します。新しいものを作成するには、**新規作成** を選択し、使用したい名前を入力します。

- **リージョン:** ハブを配置するリージョンを選択します。最も近いリージョンを選択してください。

- **IoT Hub 名:** IoT Hub の名前を入力します。この名前はグローバルに一意である必要があります。名前が利用可能であれば、緑色のチェックマークが表示されます。

**重要な注意:** IoT Hub は DNS エンドポイントとして公開されるため、IoT Hub の名前に機密情報を含めないようにしてください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/iotHub.jpg" /></div>


1. **次へ: サイズとスケール** を選択して続行します：

- **価格とスケールのティア:** 現時点では **F1: 無料ティア** を選択します。1 日あたりのメッセージ数や機能に応じて、いくつかのティアから選択できます。

2. **レビュー + 作成** タブを選択して設定を確認し、**作成** をクリックして新しい IoT Hub を作成します。IoT Hub の作成には数分かかる場合があります。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/iotHubProcess.jpg" /></div>

## デバイスの登録

デバイスを接続する前に、IoT Hub に登録する必要があります：

1. `cmd` または `Powershell` で以下のコマンドを実行し、IoT Hub CLI 拡張機能を追加してデバイス ID を作成します：

```sh
az iot hub device-identity create --hub-name iot-test-1 --device-id MyPythonDevice
```

### 注意:

- `hub-name` -> `iot-test-1` を作成した IoT Hub 名に置き換えてください。

- `device-id` -> `MyPythonDevice`。これは登録するデバイスの名前です。この例では、`MyPythonDevice` がデバイス ID です。

2. 以下のコマンドを実行して、登録したデバイスの *デバイス接続文字列* を取得します。

```sh
az iot hub device-identity show-connection-string --hub-name iot-test-1 --device-id MyPythonDevice --output table
```

デバイス接続文字列をメモしてください。この文字列は次のような形式です：`HostName={YourIoTHubName}.azure-devices.net;DeviceId=MyPythonDevice;SharedAccessKey={YourSharedAccessKey}`。後で使用します。

### 注意:

- 上記と同じように、`hub-name` と `device-id` を置き換えてください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/deviceID.png" /></div>

## Arduino Core を使用したデータ収集

このセクションでは、Arduino Core を使用してセンサー値を読み取り、シリアルモニターに出力します。このデータは他の場所から Python を使用して読み取ることができます。

1. **Arduino IDE** をダウンロード、インストール、設定するために Getting Started を参照してください。

2. Grove Light センサーの信号線を ODYSSEY - X86J41x5 の **A0** に接続し、電源とグラウンドも接続します。詳細については Getting Started のピン配置図を参照してください。

3. 以下のコードを Arduino IDE を使用して ODYSSEY - X86J41x5 にアップロードします。正しい **ボード** と **ポート** を選択することを忘れないでください。ここで使用する **ポート** をメモしてください。この例では、ポートは `COM4` です。

### Arduino コード

```cpp
#define LIGHT A0
#define Serial SerialUSB

void setup() {
  // 初期設定をここに記述します。1回だけ実行されます。
  Serial.begin(115200);
  pinMode(LIGHT, INPUT);
}

void loop() {
  // メインコードをここに記述します。繰り返し実行されます。
  int state = analogRead(LIGHT);
  Serial.println(state);
  
  delay(500);
}
```

4. Arduino IDE の **シリアルモニター** を開き、プログラムが正しく動作しているか確認します。

## 光センサーの読み取り値を Azure IoT Hub に送信

光センサーの読み取り値はシリアルに出力され、Python を使用してこのデータを抽出し、Azure IoT Hub に送信します。

1. `Powershell` を開き、以下のコマンドを実行して必要な Python ライブラリをインストールします。

```sh
pip install azure-iot-device
pip install pyserial
```

2. 以下の Python コードをコピーしてローカルドライブに保存します。テキストエディタを使用して以下の変更を行ってください。

- `serialPort` 変数の値を、先ほどメモしたシリアルポートに置き換えてください。

- `CONNECTION_STRING` 変数の値を、先ほどメモしたデバイス接続文字列に置き換えてください。

### Python コード

```py
# Copyright (c) Microsoft. All rights reserved.
# Licensed under the MIT license. See LICENSE file in the project root for full license information.

import time
import serial

# Python Device SDK for IoT Hub を使用：
#   https://github.com/Azure/azure-iot-sdk-python
# サンプルは IoT Hub のデバイス固有の MQTT エンドポイントに接続します。
from azure.iot.device import IoTHubDeviceClient, Message

# Arduino シリアルからの読み取り設定
serialPort= "COM4" # シリアルポートを変更してください。Arduino IDE で確認可能
baudRate = 115200
ser = serial.Serial(serialPort, baudRate, timeout=0.5)

# デバイス接続文字列。IoT Hub でデバイスを認証するために使用します。
# Azure CLI を使用：
# az iot hub device-identity show-connection-string --hub-name {YourIoTHubName} --device-id MyNodeDevice --output table
CONNECTION_STRING = "HostName=iot-test-1.azure-devices.net;DeviceId=MyPythonDevice;SharedAccessKey=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

# IoT Hub に送信する JSON メッセージを定義
MSG_TXT = '{{"Light": {light}}}'

def iothub_client_init():
    # IoT Hub クライアントを作成
    client = IoTHubDeviceClient.create_from_connection_string(CONNECTION_STRING)
    return client

def iothub_client_telemetry_sample_run():

    try:
        client = iothub_client_init()
        print("IoT Hub デバイスが定期的にメッセージを送信します。終了するには Ctrl-C を押してください。")

        while True:
            # シミュレートされたテレメトリ値でメッセージを構築
            time.sleep(0.1)
            light = ser.readline().decode("UTF-8")[:-2]
            if light:
              msg_txt_formatted = MSG_TXT.format(light=light)
              message = Message(msg_txt_formatted)

              # メッセージを送信
              print("メッセージを送信中: {}".format(message))
              client.send_message(message)
              print("メッセージが正常に送信されました")
              time.sleep(1)

    except KeyboardInterrupt:
        print("IoTHubClient サンプルが停止しました")
        ser.close()

if __name__ == '__main__':
    print("IoT Hub クイックスタート #1 - シミュレートされたデバイス")
    print("終了するには Ctrl-C を押してください")
    iothub_client_telemetry_sample_run()
```

3. `Powershell` で、保存した Python ファイルのディレクトリに移動します。Python スクリプトを実行してセンサーデータを Azure IoT Hub に送信します。

**注意:** この例では、Python ファイル名を `SendingData.py` としています。保存したファイル名に応じてコマンドを変更してください。

```sh
python3 SendingData.py
```

以下のスクリーンショットは、センサーデータを Azure IoT Hub に送信した出力を示しています。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/sendingData.png" /></div>

## Azure IoT Hubからデータを読み取る

IoT Hub CLI拡張機能は、IoT Hubのサービス側のEventsエンドポイントに接続できます。この拡張機能は、デバイスからクラウドへのメッセージを受信します。

以下のコマンドを任意のターミナルで実行すると、Azure IoT Hubに送信されたメッセージを監視できます。

```sh
az iot hub monitor-events --hub-name iot-test-1 --device-id MyPythonDevice
```

### 注意:

- `hub-name`と`device-id`を上記と同じように置き換えてください。

以下のスクリーンショットは、ODYSSEY - X86J41x5からIoT Hubに送信されたメッセージを示しています。このデータは処理または表示することができます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/recevingData.jpg" /></div>


---

## Microsoft Power BIを使用したセンサーデータのリアルタイム可視化

このセクションでは、[Microsoft Power BI](https://powerbi.microsoft.com/en-us/)を使用して光センサーの読み取り値をリアルタイムで表示する方法を説明します。Power BIアカウントをお持ちでない場合は、開始する前に無料アカウントに登録してください。

**注意: すべての前の手順を実行し、IoT Hubがメッセージを正常に受信できることを確認してください。**

## IoT Hubにコンシューマーグループを追加する

[コンシューマーグループ](https://docs.microsoft.com/zh-cn/azure/event-hubs/event-hubs-features#event-consumers)は、イベントストリームへの独立したビューを提供し、アプリやAzureサービスが同じEvent Hubエンドポイントから独立してデータを消費できるようにします。

コンシューマーグループを追加するには:

1. [**Azureポータル**](https://portal.azure.com)にサインインします。

2. IoT Hubを開き、**Built-in endpoints**を選択し、**Consumer Groups**の下に名前を入力して新しいコンシューマーグループを作成し、**保存**します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/endpoint.jpg" /></div>


この場合、`lightsensor`が新しいコンシューマーグループです。

## Stream Analytic Jobを作成、設定、実行する

Stream Analytic Jobを作成するには:

3. [**Azureポータル**](https://portal.azure.com)にサインインします。

4. **Create an resource**を選択し、*Marketplaceを検索*して**Stream Analytics job**を探します。

5. **Stream Analytics job**を選択して**作成**をクリックします。

6. 以下のフィールドを入力し、**作成**します:

- **Job name:** ジョブの名前。この名前はグローバルに一意である必要があります。この場合、`light-analytic`です。

- **Resource group:** IoT Hubが使用しているのと同じリソースグループを使用します。

- **Location:** リソースグループと同じ場所を使用します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/analytic.jpg" /></div>


## Stream Analyticsジョブに入力を追加する

1. Stream Analyticsジョブを開きます。

2. **Job topology**の下で**Inputs**をクリックします。

3. **Add stream input** -> **IoT Hub**をクリックします。

4. 以下のフィールドを入力します:

- **Input alias:** 入力名。任意の名前を使用できます。

- **IoT Hub:** これまで使用してきたものを選択します。

- **Consumer group:** 先ほど作成したものを選択します。

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/settings.jpg" /></div>


1. **保存**を選択します。

## Stream Analyticsジョブに出力を追加する

2. Stream Analyticsジョブを開きます。

3. **Job topology**の下で**Outputs**をクリックします。

4. **Add** -> **Power BI**をクリックします。

5. Microsoft Power BIアカウントで**認証**します。

6. 以下のフィールドを入力します:

- **Output alias:** 出力名。これも任意の名前を使用できます。

- **Authentication mode:** User tokenを選択します。

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/powerBI.jpg" /></div>


7. **保存**を選択します。

## Stream Analytics ジョブのクエリを設定する

1. **Job topology** の下で **Query** をクリックします。

2. `[YourInputAlias]` を入力エイリアスに置き換えます。私の場合は `SensorReadings` です。

3. `[YourOutputAlias]` を出力エイリアスに置き換えます。私の場合は `SensorOutput` です。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/PowerBIsettings.jpg" /></div>


## Stream Analytics ジョブを実行する

1. **Overview** の下で **Start** -> **Now** -> **Start** をクリックします。ジョブのステータスが **Stopped** から **Running** に変わります。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/run.jpg" /></div>


**注意: センサーの読み取りを開始するには、ODYSSEY - X86J41x5 で Python スクリプトを実行してクラウドにデータを送信することを忘れないでください。**

## Power BI レポートを作成して公開し、データを可視化する

1. [Power BI](https://app.powerbi.com/signupredirect?pbi_source=web) アカウントにサインインします。

2. **Workplaces** -> **My workspace** の下で **Datasets** を選択し、以前に指定したデータシートが表示されるはずです。

3. **Actions** の下で **最初のアイコン(レポートを作成)** を選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/PowerBI1.jpg" /></div>


4. ラインチャートを作成して、リアルタイムの光センサー値を時間経過とともに表示します。

- **Visualizations** の下で **Line chart** を選択します。

- **Fields** の下で **EventEnqueuedUtcTime** を選択します。

- **Fields** の下で **Light** を選択します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/PowerBI2.jpg" /></div>


5. **Save** をクリックしてレポートを保存します。

6. **File** -> **Publish to web** -> **Create embed code** -> **Publish** をクリックします。

これで、Power BI を使用してダッシュボード上でセンサーの読み取りを確認できます！

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/PowerBI3.jpg" /></div>


Microsoft は、Power BI ダッシュボードやレポートをモバイルデバイスで表示および操作するための [Power BI モバイルアプリ](https://powerbi.microsoft.com/en-us/documentation/powerbi-power-bi-apps-for-mobile-devices/) も提供しています。

## さらなる開発

ODYSSEY - X86J41x5 を使用して IoT シナリオのセットアップに成功しました。これを活用して独自の IoT ソリューションを構築することができます！

*詳細な技術サポートについては [Azure IoT](https://azure.microsoft.com/en-us/overview/iot/) をご覧ください。*

## 技術サポート & 製品ディスカッション
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>