---
description: SenseCAP T1000 Tracker を AWS に接続する
title: AWS クラウドサービス
keywords:
- Tracker
- AWS
image: https://files.seeedstudio.com/wiki/SenseCAP/Tracker/t1000.webp
slug: /ja/SenseCAP_T1000_Tracker_AWS
last_update:
  date: 12/4/2024
  author: Leo
---

# SenseCAP T1000 Tracker 用 AWS クラウドサービスの使用

[AWS IoT](https://docs.aws.amazon.com/iot/latest/developerguide/iot-gs.html) は、IoT デバイスを他のデバイスや AWS クラウドサービスに接続するクラウドサービスを提供します。AWS IoT は、IoT デバイスを AWS IoT ベースのソリューションに統合するのに役立つデバイスソフトウェアを提供します。デバイスが AWS IoT に接続できる場合、AWS IoT はそれらを AWS が提供するクラウドサービスに接続できます。

[AWS IoT コンソール](https://console.aws.amazon.com/iot/home)にログインしてください

:::info
AWS アカウントをお持ちでない場合は、[こちら](https://portal.aws.amazon.com/billing/signup)をクリックして作成してください。
:::

## ゲートウェイの追加

`Internet of Things` に移動し、`IoT Core` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/iot=core.png" alt="pir" width={800} height="auto" /></p>

左側のメニューで、`LPWAN devices` → `Gateways` を選択し、`Add gateway` をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-gateway.png" alt="pir" width={800} height="auto" /></p>

`Gateway's EUI`: ゲートウェイの EUI。デバイスラベルで確認できます。<br/>
`Frequency`: ゲートウェイの周波数帯域。<br/>
`Name`: ゲートウェイに名前を付けます（オプション）<br/>
`SubBand`: オプションで、使用したいサブバンドやトラフィックフローを制御できるフィルターなどの LoRaWAN 設定データを指定することもできます。詳細については、[AWS IoT Core for LoRaWAN でワイヤレスリソースの位置を設定する](https://docs.aws.amazon.com/iot/latest/developerguide/connect-iot-lorawan-configure-location.html)を参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/gateway-eui.png" alt="pir" width={800} height="auto" /></p>

## ゲートウェイの設定

### ゲートウェイ証明書

ゲートウェイが AWS IoT と安全に通信できるように認証するため、LoRaWAN ゲートウェイは AWS IoT Core for LoRaWAN に秘密鍵と証明書を提示する必要があります。

`Create certificate` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create-cer.png" alt="pir" width={800} height="auto" /></p>

証明書ファイルとサーバー信頼証明書をダウンロードして保存します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS6.PNG" alt="pir" width={800} height="auto" /></p>

内部に4つのファイルがあるはずです。これらは後でゲートウェイの設定に使用します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/files.png" alt="pir" width={800} height="auto" /></p>

### ゲートウェイの権限

アカウントに IoTWirelessGatewayCertManagerRole IAM ロールを作成していない場合は、ゲートウェイの追加を続行する前にロールを作成してください。
このロールがないと、ゲートウェイは AWS IoT と通信できません。

Role: `IoT Wireless Gateway Cert Manager Role` を選択し、設定を送信します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/permissions.png" alt="pir" width={800} height="auto" /></p>

CUPS URL をコピーします。次のステップで使用します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cups.png" alt="pir" width={800} height="auto" /></p>

### ゲートウェイの設定

ゲートウェイの Luci 設定ページにログインします。詳細については [Get_Started](https://files.seeedstudio.com/products/SenseCAP%20M2/Quick%20Start%20for%20SenseCAP%20M2%20Multi-Platfrom%20Gateway%20&%20Sensors.pdf) を確認してください。

`LoRa` > `LoRa Network` に移動します。

`Mode`: Basic Station<br/>
`Gateway EUI`: ゲートウェイの EUI<br/>
`Server`: CUPS Server<br/>
`URL`: 先ほどコピーした CUPS URL<br/>
`Authentication Mode`: TLS Server and Client Authentication

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS21.PNG" alt="pir" width={800} height="auto" /></p>

先ほどダウンロードした証明書ファイルの内容をコピーします（証明書はテキスト形式で開くことができます）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS23.PNG" alt="pir" width={800} height="auto" /></p>

Gateways ページに移動し、追加したゲートウェイを選択します。

Gateway details ページの LoRaWAN specific details セクションで、接続ステータスと最後のアップリンクを受信した日時を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/gate-connected.png" alt="pir" width={800} height="auto" /></p>

## プロファイルの追加

デバイスプロファイルとサービスプロファイルを定義して、一般的なデバイス設定を記述できます。これらのプロファイルは、デバイス間で共有される設定パラメータを記述し、それらのデバイスの追加を容易にします。AWS IoT Core for LoRaWANは、デバイスプロファイルとサービスプロファイルをサポートしています。

### デバイスプロファイルの追加

`Devices` > `Profiles`に移動し、`Add device profile`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS11.PNG" alt="pir" width={800} height="auto" /></p>

デバイスプロファイル名を入力し、デバイスとゲートウェイで使用している周波数帯域（RfRegion）を選択し、その他の設定はデフォルト値のままにしておきます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/proflie2.png" alt="pir" width={800} height="auto" /></p>

### サービスプロファイルの追加

`Devices` > `Profiles`に移動し、`Add service profile`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS13.PNG" alt="pir" width={800} height="auto" /></p>

各ペイロードに対してRSSIやSNRなどのデータ送信に関する追加のゲートウェイメタデータを受信できるように、`AddGWMetaData`設定を有効にしておくことをお勧めします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/profile4.png" alt="pir" width={800} height="auto" /></p>

### 宛先の追加

`Devices` > `Destination`に移動し、`Add destination`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS15.PNG" alt="pir" width={800} height="auto" /></p>

ここで`Publish to AWS IoT Core Message Broker`を選択し、宛先の`MQTTトピック`に名前を付けます。

権限：既存のサービスロールを選択 > `IoT Wireless Gateway Cert Manager Role`

:::info
宛先名には英数字、-（ハイフン）、_（アンダースコア）文字のみを使用でき、スペースを含めることはできません。
:::
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS14.png" alt="pir" width={800} height="auto" /></p>

## LoRaWANデバイスの追加

### ワイヤレスデバイスの追加

`LPWAN devices` > `Devices`に移動し、`Add wireless device`をクリックします。

`Wireless device specification`：OTAAv1.0x

`DevEUI/APP EUI/APP key`：SenseCAP Mate APPで確認できます。詳細については[Get_Started](https://wiki.seeedstudio.com/ja/Get_Started_with_SenseCAP_T1000_tracker/#get-started)をご確認ください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS17.PNG" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG" alt="pir" width={800} height="auto" /></p>

前のステップで作成したデバイスプロファイルと宛先を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/device-eui2.png" alt="pir" width={800} height="auto" /></p>

Devicesページに移動し、前に追加したデバイスを選択します。

Wireless devices詳細ページのDetailsセクションで、受信日時を確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS19.PNG" alt="pir" width={800} height="auto" /></p>

## デコーダーの設定

### メッセージルールの作成

`Message routing` タブ → `Rules` に移動し、`Create Rule` ボタンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules.png" alt="pir" width={800} height="auto" /></p>

ルールに名前を付けて送信します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules2.png" alt="pir" width={800} height="auto" /></p>

`SQL version`: 2016-03-23<br/>
`SQL statement`: SELECT * FROM **"YourDestinationTopic"**

ここでは[Add Destination](#add-destination)に従って`t1000-raw`を入力します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sql.png" alt="pir" width={800} height="auto" /></p>

`Rule actions` セクションまでスクロールダウンし、`Action 1` から `Lambda` を選択し、`Create a Lambda function` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rule-action.png" alt="pir" width={800} height="auto" /></p>

`Function name`: 関数に名前を付けます。<br/>
`Runtime`: Node.js 20.x<br/>
`Architexture`: x86_64

`Create function` ボタンをクリックして新しい関数を作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cre-function.png" alt="pir" width={800} height="auto" /></p>

関数を作成した後、関数の設定ページに移動します。後で設定するので、ルールページに戻ります。

Refresh ボタンをクリックし、先ほど作成したLambda関数を選択します。次に`Next`をクリックしてStep 4に進みます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sel-function.png" alt="pir" width={800} height="auto" /></p>

ルールのすべての詳細が正しいことを確認し、`Create`をクリックしてルールを作成します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules3.png" alt="pir" width={800} height="auto" /></p>

### Lambda関数の設定

`Message routing` タブ → `Rules` に戻り、先ほど作成したルールを選択します。

`Actions` から `Lambda` をクリックし、リンクをクリックしてLambda関数設定ページに移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules4.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules5.png" alt="pir" width={800} height="auto" /></p>

以下の関数設定ページで、`index.mjs` ファイルを `index.js` にリネームし、すべてのコードを削除して[Resource](#resource)のスクリプトに置き換え、`Deploy` ボタンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decod.png" alt="pir" width={800} height="auto" /></p>

:::tip Note
お使いのデバイスに応じて `region` と `device id` を置き換えてください。
:::

デコーダーを設定した後、`Configuration` → `Permissions` → `Edit` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decod-per.png" alt="pir" width={800} height="auto" /></p>

下部の `View the xxxxxxxxxxx` ロールをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/existing-role.png" alt="pir" width={800} height="auto" /></p>

`Add permissions` → `Attach policies` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/policies.png" alt="pir" width={800} height="auto" /></p>

`AdministratorAccess` を検索し、左側のボックスにチェックを入れ、`Add Permissions` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/policies2.png" alt="pir" width={800} height="auto" /></p>

### データの確認

`MQTT test client` ページでデータを確認し、`#` を入力して `Subscribe` ボタンをクリックすると、データが表示されます。

T1000 Trackerのrawペイロードは`t1000-raw`から公開され、デコードされたデータは`tracker/measurement`から公開されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dataview1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dataview2.png" alt="pir" width={800} height="auto" /></p>

## Resource

[SenseCAP T1000 Tracker Decoder for AWS](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/AWS/SenseCAP_T1000_AWS_Decoder.js)
