---
description: Web APP 可視化の設定
title: Web APP 可視化の設定
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Configuring-Web-APP-Visualization
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# Web APP 可視化の設定

デバイスがHeliumネットワークに接続され、デバイスからHeliumネットワークを経由してMicrosoft Azure IoT Hubsにデータが流れるようになったので、このデータを分析し、可視化する方法を探ってみましょう。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/192.png" /></div>

## 環境準備

この手順を使用するには、事前に[Git](https://www.git-scm.com/downloads)とAzure CLIをコンピュータにダウンロードして設定してください。

ここではGitのインストールと設定については説明しませんが、WindowsおよびMacOSシステム向けのAzure CLIのインストールに焦点を当てます。

Azure コマンドラインインターフェイス (CLI) は、Azure に接続し、Azure リソース上で管理コマンドを実行するためのクロスプラットフォームのコマンドラインツールです。対話型のコマンドラインプロンプトやスクリプトを使用して、ターミナルを通じてコマンドを実行できます。

対話型で使用する場合、まずWindowsのcmd.exeやLinuxまたはmacOSのBashなどのシェルを起動し、シェルプロンプトでコマンドを入力します。繰り返しのタスクを自動化するには、選択したシェルのスクリプト構文を使用してCLIコマンドをシェルスクリプトに組み立て、そのスクリプトを実行します。

### インストール - Windows

Windowsの場合、Azure CLIはMSIを介してインストールされ、Windowsコマンドプロンプト（CMD）またはPowerShellを通じてCLIにアクセスできます。Windows Subsystem for Linux (WSL) にインストールする場合、Linuxディストリビューション用のパッケージが利用可能です。

現在のAzure CLIのバージョンは**2.37.0**です。最新リリースに関する情報は[リリースノート](https://docs.microsoft.com/en-us/cli/azure/release-notes-azure-cli)をご覧ください。インストール済みのバージョンを確認し、更新が必要かどうかを確認するには、[az version](https://docs.microsoft.com/en-us/cli/azure/reference-index#az_version)を実行してください。

PowerShellを使用してAzure CLIをインストールすることもできます。管理者としてPowerShellを開始し、以下のコマンドを実行してください：

:::note
    PowerShellは管理者として実行する必要があります。
:::
管理者としてPowerShellを開始し、以下のコマンドを実行してください：

```sh
$ProgressPreference = 'SilentlyContinue'; Invoke-WebRequest -Uri https://aka.ms/installazurecliwindows -OutFile .\AzureCLI.msi; Start-Process msiexec.exe -Wait -ArgumentList '/I AzureCLI.msi /quiet'; rm .\AzureCLI.msi
```

これにより、Windows用の最新バージョンのAzure CLIがダウンロードおよびインストールされます。すでにバージョンがインストールされている場合、インストーラーは既存のバージョンを更新します。

特定のバージョンをインストールするには、`-Uri`引数を`https://azcliprod.blob.core.windows.net/msi/azure-cli-<version>.msi`に置き換え、バージョンセグメントを変更してください。利用可能なバージョンは[Azure CLIリリースノート](https://docs.microsoft.com/en-us/cli/azure/release-notes-azure-cli)で確認できます。

:::note
インストールが完了したら、Azure CLIを使用するにはPowerShellを再度開く必要があります。
:::
これで、WindowsコマンドプロンプトまたはPowerShellから`az`コマンドを使用してAzure CLIを実行できるようになります。

### インストール - MacOS

macOSプラットフォームの場合、[homebrewパッケージマネージャ](https://brew.sh/)を使用してAzure CLIをインストールできます。Homebrewを使用すると、CLIのインストールを最新の状態に保つことが容易になります。CLIパッケージはmacOSバージョン10.9以降でテストされています。

現在のAzure CLIのバージョンは**2.34.1**です。最新リリースに関する情報は[リリースノート](https://docs.microsoft.com/en-us/cli/azure/release-notes-azure-cli)をご覧ください。インストール済みのバージョンを確認し、更新が必要かどうかを確認するには、[az version](https://docs.microsoft.com/en-us/cli/azure/reference-index#az_version)を実行してください。

macOSでAzure CLIをインストールするには、brewリポジトリ情報を更新し、`install`コマンドを実行します：

```sh
brew update && brew install azure-cli
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/1.jpg" /></div>

:::note
Azure CLIはHomebrewの`python@3.10`パッケージに依存しており、これがインストールされます。
:::

## Microsoft Azure CLI にログイン

初めて Microsoft Azure CLI をコンピュータで使用する際には、まず IoT ハブにログインする必要があります。コマンドウィンドウで `az login` を入力するとログインウィンドウが表示されます。この時点でログイン操作を完了してください。

CLI がデフォルトのブラウザを開ける場合、[認証コードフロー](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow)を開始し、デフォルトのブラウザで Azure サインインページを読み込みます。

そうでない場合は、[デバイスコードフロー](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-device-code)を開始し、&lt;https://aka.ms/devicelogin&gt; にアクセスして、ターミナルに表示されるコードを入力するよう指示されます。

ブラウザでアカウントの資格情報を使用してサインインしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/161.png" /></div>

## Microsoft Azure CLI を Microsoft Azure IoT Hub に接続

コンシューマーグループは、イベントストリームへの独立したビューを提供し、アプリや Azure サービスが同じ Event Hub エンドポイントから独立してデータを消費できるようにします。このセクションでは、Web APP がデータを読み取るために使用する IoT ハブの組み込みエンドポイントにコンシューマーグループを追加します。

IoT ハブにはいくつかのデフォルトのアクセスポリシーが作成されています。その中の1つがサービスポリシーで、これは IoT ハブのエンドポイントを読み書きするための十分な権限を提供します。以下のコマンドを実行して、サービスポリシーに準拠した IoT ハブの接続文字列を取得します：

```sh
az iot hub connection-string show --hub-name ${YourIotHub} --policy-name service
```

ここで、環境変数 `${YourIotHub}` は Azure IoT Hub の名前を示します。以下の例を参照してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/157.png" /></div>

接続文字列は以下のような形式になります：

```sh
"HostName={YourIotHubName}.azure-devices.net;SharedAccessKeyName=service;SharedAccessKey={YourSharedAccessKey}"
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/27.jpg" /></div>

**サービス接続文字列をメモしてください**。このチュートリアルの後半で必要になります。

:::note
何らかの理由で Azure CLI をコンピュータにインストールできない場合は、IoT ハブパネルから直接 Azure CLI 環境で bash を実行することを検討してください。これにより、次のステップを進めることができます。
:::
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/158.png" /></div>

上記の `az` コマンドをここで直接入力して接続文字列を取得できます。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/159.png" /></div>

## Web APP サービスフレームワークのダウンロード

使用したいセンサーの種類に応じて、対応するライブラリをダウンロードしてください。

<table align="center">
  <tbody><tr>
      <th>センサータイプ</th>
      <th>ダウンロードアドレス</th>
    </tr>
    <tr>
      <td align="center">Wio Terminal 内蔵光センサー</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/lightsensor-Web-APP">ダウンロード</a></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal 内蔵 IMU センサー</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/IMUsensor-Web-APP">ダウンロード</a></td>
    </tr>
    <tr>
      <td align="center">土壌湿度センサー</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/soil-moisture-Azure-IoT-hub-Web-APP">ダウンロード</a></td>
    </tr>
    <tr>
      <td align="center">VOC および eCO2 ガスセンサー (SGP30)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/SGP30-Azure-IoT-hub-Web-APP">ダウンロード</a></td>
    </tr>
    <tr>
      <td align="center">温湿度センサー (SHT40)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/SHT40-Azure-IoT-hub-Web-APP">ダウンロード</a></td>
    </tr>
    <tr>
      <td align="center">Vision AI モジュール</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/webapp/VisionAI-Azure-IoT-hub-Web-APP">ダウンロード</a></td>
    </tr>
  </tbody></table>

お好みのエディタで Web APP ライブラリを開いてください。以下は VS Code で表示したファイル構造の例です：

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/38.jpg" /></div>

以下のファイルを確認してください：

- **Chart-device-data.js**：クライアント側スクリプトで、Web ソケットをリッスンし、各 DeviceId を追跡し、各デバイスの最新50ポイントの受信データを保存します。その後、選択されたデバイスデータをチャートオブジェクトにバインドします。

- **Index.html**：Web ページの UI レイアウトを処理し、クライアント側ロジックに必要なスクリプトを参照します。

- **Event-hub-reader.js**：サービス側スクリプトで、指定された接続文字列とコンシューマーグループを使用して IoT ハブの組み込みエンドポイントに接続します。受信メッセージのメタデータから DeviceId と EnqueuedTimeUtc を抽出し、server.js に登録されたコールバックメソッドを使用してメッセージを中継します。

- **Server.js**：サービス側スクリプトで、Web ソケットと Event Hub ラッパークラスを初期化します。このクラスが Web ソケットに受信メッセージをブロードキャストするために使用するコールバックを提供します。

## Web APP の環境変数を設定する

IoT ハブからデータを読み取るために、Web APP は IoT ハブの接続文字列と、読み取るべきコンシューマーグループの名前を必要とします。これらの文字列は、以下の **server.js** のコード行でプロセス環境から取得されます。

```c
const iotHubConnectionString = process.env.IotHubConnectionString;
const eventHubConsumerGroup = process.env.EventHubConsumerGroup;
```

このステップには2つの方法がありますので、より一般的な方法から始めましょう。

- 最初の方法。以下のコマンドを使用して、コマンドウィンドウで環境変数を設定します。プレースホルダーの値を、IoT ハブのサービス接続文字列と、以前に作成したコンシューマーグループの名前に置き換えてください。文字列を引用符で囲まないでください。

```sh
set IotHubConnectionString = YourIoTHubConnectionString
set EventHubConsumerGroup = YourConsumerGroupName
```

- 2番目の方法では、コードを直接変更することができます。例えば、MacOS で環境変数を追加するのが面倒な場合に適しています。

エディタで **server.js** ファイルを開き、作成したコンシューマーグループの名前と [**step2**](https://wiki.seeedstudio.com/ja/Configuring-Web-APP-Visualization/#connecting-microsoft-azure-cli-to-microsoft-azure-iot-hub) で取得した接続文字列に従ってコードを変更してください。以下の図を参考にしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/160.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/29.jpg" /></div>

## Web APP を実行する

[以前の wiki](https://wiki.seeedstudio.com/ja/Connecting-to-Helium/#upload-code-send-data-to-helium) の内容に従ってコードをアップロードしてください。デバイスが稼働してデータを送信していることを確認してください。

コマンドウィンドウで以下のコマンドを実行して、参照パッケージをダウンロードおよびインストールし、ウェブサイトを開始します。

```sh
npm install
npm start
```

コンソールに、Web APP が IoT ハブに正常に接続し、ポート 3000 でリスニングしていることを示す出力が表示されるはずです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/30.jpg" /></div>

## Azure IoT ハブからのデータを表示するウェブページを開く

ブラウザで `http://localhost:3000` を開きます。

左上のリスト選択ボックスでデバイス ID 番号を選択します。次のデータセットが送信されるまで待機し、データ変化の折れ線グラフを観察することができます。

### 光センサーのライブ画像表示

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/31.png" /></div>

ブラウザクライアントに Web APP が送信しているメッセージを示すコンソール出力も表示されるはずです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/32.jpg" /></div>

### IMU センサーのライブ画像表示

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/176.png" /></div>

ブラウザクライアントに Web APP が送信しているメッセージを示すコンソール出力も表示されるはずです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/177.png" /></div>

### 土壌水分センサーのライブ画像表示

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/188.png" /></div>

ブラウザクライアントに Web APP が送信しているメッセージを示すコンソール出力も表示されるはずです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/187.png" /></div>

### SHT40 センサーのライブ画像表示

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/194.png" /></div>

ブラウザクライアントに Web APP が送信しているメッセージを示すコンソール出力も表示されるはずです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/193.png" /></div>

### SGP30 センサーのライブ画像表示

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/182.png" /></div>

ブラウザクライアントに Web APP が送信しているメッセージを示すコンソール出力も表示されるはずです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/183.png" /></div>

### Grove Vision AI モジュールのライブ画像表示

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/201.png" /></div>

ブラウザクライアントに Web APP が送信しているメッセージを示すコンソール出力も表示されるはずです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/199.png" /></div>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>