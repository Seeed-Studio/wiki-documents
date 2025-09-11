---
description: SenseCAP T1000 トラッカーを AWS に接続する
title: AWS クラウドサービス
keywords:
- トラッカー
- AWS
image: https://files.seeedstudio.com/wiki/SenseCAP/Tracker/t1000.webp
slug: /ja/SenseCAP_T1000_Tracker_AWS
last_update:
  date: 05/15/2025
  author: Leo
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# SenseCAP T1000 トラッカーの AWS クラウドサービス利用

[AWS IoT](https://docs.aws.amazon.com/iot/latest/developerguide/iot-gs.html) は、IoT デバイスを他のデバイスや AWS クラウドサービスに接続するためのクラウドサービスを提供します。AWS IoT は、IoT デバイスを AWS IoT ベースのソリューションに統合するのに役立つデバイスソフトウェアを提供します。デバイスが AWS IoT に接続できる場合、AWS IoT はそれらを AWS が提供するクラウドサービスに接続できます。

[AWS IoT コンソール](https://console.aws.amazon.com/iot/home)にログインしてください。

:::info
AWS アカウントをお持ちでない場合は、[こちら](https://portal.aws.amazon.com/billing/signup)をクリックして作成してください。
:::


## ゲートウェイの追加

`Internet of Things` に移動し、`IoT Core` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/iot=core.png" alt="pir" width={800} height="auto" /></p>

左側のメニューで `LPWAN devices` → `Gateways` を選択し、`Add gateway` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-gateway.png" alt="pir" width={800} height="auto" /></p>

`Gateway's EUI`: ゲートウェイの EUI。デバイスラベルに記載されています。<br/>
`Frequency`: ゲートウェイの周波数帯。<br/>
`Name`: ゲートウェイの名前（任意）。<br/>
`SubBand`: 任意で、使用したいサブバンドやトラフィックの流れを制御するフィルターなど、LoRaWAN の構成データを指定できます。詳細は [AWS IoT Core for LoRaWAN を使用したワイヤレスリソースの位置の構成](https://docs.aws.amazon.com/iot/latest/developerguide/connect-iot-lorawan-configure-location.html) を参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/gateway-eui.png" alt="pir" width={800} height="auto" /></p>

## ゲートウェイの構成

### ゲートウェイ証明書

ゲートウェイが AWS IoT と安全に通信できるよう認証するために、LoRaWAN ゲートウェイは AWS IoT Core for LoRaWAN にプライベートキーと証明書を提示する必要があります。

`Create certificate` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create-cer.png" alt="pir" width={800} height="auto" /></p>

証明書ファイルとサーバートラスト証明書をダウンロードして保存します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS6.PNG" alt="pir" width={800} height="auto" /></p>

4つのファイルが含まれているはずです。これらは後でゲートウェイの構成に使用します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/files.png" alt="pir" width={800} height="auto" /></p>

### ゲートウェイの権限

IoTWirelessGatewayCertManagerRole IAM ロールをまだ作成していない場合は、ゲートウェイを追加する前にこのロールを作成してください。
このロールがないと、ゲートウェイは AWS IoT と通信できません。

ロールを選択します: `IoT Wireless Gateway Cert Manager Role`、その後、構成を送信します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/permissions.png" alt="pir" width={800} height="auto" /></p>

CUPS URL をコピーします。この URL は次のステップで使用します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cups.png" alt="pir" width={800} height="auto" /></p>

### ゲートウェイの構成

ゲートウェイの Luci 構成ページにログインします。詳細は [Get_Started](https://files.seeedstudio.com/products/SenseCAP%20M2/Quick%20Start%20for%20SenseCAP%20M2%20Multi-Platfrom%20Gateway%20&%20Sensors.pdf) を参照してください。

`LoRa` > `LoRa Network` に移動します。

`Mode`: Basic Station<br/>
`Gateway EUI`: ゲートウェイの EUI<br/>
`Server`: CUPS Server<br/>
`URL`: 前にコピーした CUPS URL<br/>
`Authentication Mode`: TLS Server and Client Authentication

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS21.PNG" alt="pir" width={800} height="auto" /></p>

ダウンロードした証明書ファイルの内容をコピーします（証明書はテキスト形式で開くことができます）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS23.PNG" alt="pir" width={800} height="auto" /></p>

ゲートウェイページに移動し、追加したゲートウェイを選択します。

ゲートウェイ詳細ページの LoRaWAN 特定の詳細セクションで、接続ステータスや最後に受信したアップリンクの日時を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/gate-connected.png" alt="pir" width={800} height="auto" /></p>

## プロファイルの追加

デバイスおよびサービスプロファイルは、一般的なデバイス構成を記述するために定義できます。これらのプロファイルは、デバイス間で共有される構成パラメータを記述し、それらのデバイスを簡単に追加できるようにします。AWS IoT Core for LoRaWAN は、デバイスプロファイルとサービスプロファイルをサポートしています。

### デバイスプロファイルの追加

`Devices` > `Profiles` に移動し、`Add device profile` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS11.PNG" alt="pir" width={800} height="auto" /></p>

デバイスプロファイル名を入力し、デバイスとゲートウェイで使用している周波数帯域 (RfRegion) を選択します。他の設定はデフォルト値のままにしておきます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/proflie2.png" alt="pir" width={800} height="auto" /></p>

### サービスプロファイルの追加

`Devices` > `Profiles` に移動し、`Add service profile` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS13.PNG" alt="pir" width={800} height="auto" /></p>

`AddGWMetaData` 設定を有効にしておくことをお勧めします。これにより、各ペイロードに対して追加のゲートウェイメタデータ（例えば、データ送信の RSSI や SNR）を受け取ることができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/profile4.png" alt="pir" width={800} height="auto" /></p>

### 宛先の追加

`Devices` > `Destination` に移動し、`Add destination` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS15.PNG" alt="pir" width={800} height="auto" /></p>

ここで `Publish to AWS IoT Core Message Broker` を選択し、宛先の `MQTT topic` を命名します。

権限: 既存のサービスロールを選択 > `IoT Wireless Gateway Cert Manager Role`

:::info
宛先名には英数字、-（ハイフン）、_（アンダースコア）のみ使用可能で、スペースを含めることはできません。
:::
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS14.png" alt="pir" width={800} height="auto" /></p>

## LoRaWAN デバイスの追加

### ワイヤレスデバイスの追加

`LPWAN devices` > `Devices` に移動し、`Add wireless device` をクリックします。

`Wireless device specification`: OTAAv1.0x

`DevEUI/APP EUI/APP key`: SenseCAP Mate アプリで確認できます。詳細は [Get_Started](https://wiki.seeedstudio.com/ja/Get_Started_with_SenseCAP_T1000_tracker/#get-started) を参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS17.PNG" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG" alt="pir" width={800} height="auto" /></p>

前のステップで作成したデバイスプロファイルと宛先を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/device-eui2.png" alt="pir" width={800} height="auto" /></p>

`Devices` ページに移動し、先ほど追加したデバイスを選択します。

ワイヤレスデバイス詳細ページの `Details` セクションで、受信したデータの日付を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS19.PNG" alt="pir" width={800} height="auto" /></p>

## デコーダーの設定

### メッセージルールの作成

`Message routing` タブ → `Rules` に移動し、`Create Rule` ボタンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules.png" alt="pir" width={800} height="auto" /></p>

ルールに名前を付けて送信します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules2.png" alt="pir" width={800} height="auto" /></p>

`SQL version`: 2016-03-23<br/>
`SQL statement`: SELECT * FROM **"YourDestinationTopic"**

ここでは、[Add Destination](#add-destination) に従って `t1000-raw` を入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sql.png" alt="pir" width={800} height="auto" /></p>

`Rule actions` セクションまでスクロールし、`Action 1` から `Lambda` を選択し、`Create a Lambda function` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rule-action.png" alt="pir" width={800} height="auto" /></p>

`Function name`: 関数に名前を付けます。<br/>
`Runtime`: Node.js 20.x<br/>
`Architexture`: x86_64

`Create function` ボタンをクリックして新しい関数を作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cre-function.png" alt="pir" width={800} height="auto" /></p>

関数を作成した後、関数の設定ページに移動します。後で設定するので、ルールページに戻ります。

`Refresh` ボタンをクリックし、先ほど作成した Lambda 関数を選択します。その後、`Next` をクリックしてステップ 4 に進みます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sel-function.png" alt="pir" width={800} height="auto" /></p>

ルールの詳細がすべて正しいことを確認し、`Create` をクリックしてルールを作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules3.png" alt="pir" width={800} height="auto" /></p>

### Lambda 関数の設定

`Message routing` タブ → `Rules` に戻り、先ほど作成したルールを選択します。

`Actions` から `Lambda` をクリックし、リンクをクリックして Lambda 関数の設定ページに移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules4.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules5.png" alt="pir" width={800} height="auto" /></p>

次の関数設定ページで、`index.mjs` ファイルの名前を `index.js` に変更し、すべてのコードを削除して [Resource](#resource) からスクリプトを置き換え、`Deploy` ボタンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decod.png" alt="pir" width={800} height="auto" /></p>

:::tip 注意
`region` と `device id` をデバイスに応じて置き換えてください。
:::

デコーダーを設定した後、`Configuration` → `Permissions` → `Edit` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decod-per.png" alt="pir" width={800} height="auto" /></p>

下部の `View the xxxxxxxxxxx` ロールをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/existing-role.png" alt="pir" width={800} height="auto" /></p>

`Add permissions` → `Attach policies` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/policies.png" alt="pir" width={800} height="auto" /></p>

`AdministratorAccess` を検索し、左側のボックスをチェックして `Add Permissions` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/policies2.png" alt="pir" width={800} height="auto" /></p>

### データの確認

`MQTT test client` ページでデータを確認します。`#` を入力して `Subscribe` ボタンをクリックすると、データが表示されます。

T1000 トラッカーの生データは `t1000-raw` から公開され、デコードされたデータは `tracker/measurement` から公開されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dataview1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dataview2.png" alt="pir" width={800} height="auto" /></p>

## リソース

[SenseCAP T1000 トラッカー デコーダー for AWS](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/AWS/SenseCAP_T1000_AWS_Decoder.js)