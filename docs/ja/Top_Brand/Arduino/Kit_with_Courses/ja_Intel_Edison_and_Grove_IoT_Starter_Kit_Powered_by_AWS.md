---
description: Intel® EdisonとGrove IoTスターターキット（AWS対応）
title: Intel® EdisonとGrove IoTスターターキット（AWS対応）
keywords:
- コース付きキット
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Intel® EdisonとGrove IoTスターターキット（AWS対応）
category: 廃止
bzurl:  https://www.amazon.com/dp/B0168KU5FK
oldwikiname: Intel® EdisonとGrove IoTスターターキット（AWS対応）
prodimagename:
surveyurl: https://www.research.net/r/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS
sku:
--- -->
![](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Aws_kit_wiki_cover.JPG)

_主要記事: まずはこちらから [Grove IoTスターターキット（AWS対応）](/ja/Grove_IoT_Starter_Kits_Powered_by_AWS "Grove IoTスターターキット（AWS対応）"), [Intel Edison](https://software.intel.com/en-us/iot/library/edison-getting-started)_

Intel Edisonモジュールは、専門的なメーカー、起業家、産業IoT企業向けに設計されており、完全にオープンソースのハードウェアおよびソフトウェア開発環境を提供することで、プロトタイピングを容易にします。Wi-FiおよびBLE 4.0接続をサポートしています。このキットには、屋内環境を追跡したりスマートハウスアプリケーションを作成したりするための11種類の選択されたGroveセンサーとアクチュエーターが含まれています。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.amazon.com/dp/B0168KU5FK)

## 同梱内容

![](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Aws_kit_edison.JPG)

| 部品                                                                                                                                                                      | Wiki                                                                                                                                     |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| [Intel® Edison for Arduino](https://www.seeedstudio.com/depot/Intel-Edison-for-Arduino-p-2149.html)                                                                         | [こちらを読む](https://software.intel.com/en-us/iot/library/edison-getting-started)                                                         |
| [Base Shield](https://www.seeedstudio.com/depot/Base-Shield-V2-p-1378.html?cPath=98_16)                                                                                     | [こちらを読む](/ja/Base_Shield_V2 "Base shield v2")                                                                                           |
| [Grove - Temperature&Humidity Sensor (High-Accuracy & Mini)](https://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-HighAccuracy-Mini-p-1921.html?cPath=25_125) | [こちらを読む](/ja/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0 "Grove - Tempture&Humidity Sensor (High-Accuracy &Mini) v1.0") |
| [Grove - Moisture Sensor](https://www.seeedstudio.com/depot/Grove-Moisture-Sensor-p-955.html?cPath=25_27)                                                                   | [こちらを読む](/ja/Grove-Moisture_Sensor "Grove - Moisture Sensor")                                                                           |
| [Grove - Light Sensor](https://www.seeedstudio.com/depot/Grove-Light-Sensor-p-746.html?cPath=25_27)                                                                         | [こちらを読む](/ja/Grove-Light_Sensor "Grove - Light Sensor")                                                                                 |
| [Grove - UV Sensor](https://www.seeedstudio.com/depot/Grove-UV-Sensor-p-1540.html?cPath=25_27)                                                                              | [こちらを読む](/ja/Grove-UV_Sensor "Grove - UV Sensor")                                                                                       |
| [Grove - PIR Motion Sensor](https://www.seeedstudio.com/depot/Grove-PIR-Motion-Sensor-p-802.html?cPath=25_31)                                                               | [こちらを読む](/ja/Grove-PIR_Motion_Sensor "Grove - PIR Motion Sensor")                                                                       |
| [Grove - Encoder](https://www.seeedstudio.com/depot/Grove-Encoder-p-1352.html?cPath=85_52)                                                                                  | [こちらを読む](/ja/Grove-Encoder "Grove - Encoder")                                                                                           |
| [Grove - Button](https://www.seeedstudio.com/depot/Grove-Button-p-766.html)                                                                                                 | [こちらを読む](/ja/Grove-Button "Grove - Button")                                                                                             |
| [Grove - LCD RGB Backlight](https://www.seeedstudio.com/depot/Grove-LCD-RGB-Backlight-p-1643.html?cPath=34_36)                                                              | [こちらを読む](/ja/Grove-LCD_RGB_Backlight "Grove - LCD RGB Backlight")                                                                       |
| [Grove - Relay](https://www.seeedstudio.com/depot/Grove-Relay-p-769.html?cPath=39_42)                                                                                       | [こちらを読む](/ja/Grove-Relay "Grove - Relay")                                                                                               |
| [Grove - Servo](https://www.seeedstudio.com/depot/Grove-Servo-p-1241.html?cPath=39_41)                                                                                      | [こちらを読む](/ja/Grove-Servo "Grove - Servo")                                                                                               |
| [Grove - Buzzer](https://www.seeedstudio.com/depot/Grove-Buzzer-p-768.html?cPath=38)                                                                                        | [こちらを読む](/ja/Grove-Buzzer "Grove - Buzzer")                                                                                             |
| USBケーブル; 480mm-ブラック                                                                                                                                                     |                                                                                                                                          |
| USB壁用電源                                                                                                                                                      |                                                                                                                                          |

## 特徴

* 箱から出してすぐに使用可能。プラグアンドプレイで、ブレッドボードやはんだ付け作業は不要です。

* AWSのサービスおよびAWSの実践に完全準拠。

* 開発者やメーカー向けのステップバイステップのチュートリアルで、迅速なプロトタイピングを支援。

## はじめに

### AWS IoTサービスの設定

[AWSコンソール](http://console.aws.amazon.com)にアクセスし、アカウントを登録してログインしてください。

1. ダッシュボードに移動し、サービス → AWS IoT をクリックします。

![](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_click_iot.png)

2. 「Get started」をクリックします。

![](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_click_get_started.jpg)

3. 新しいユーザーを作成します。

![](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_create_a_new_user.png)

![](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_create_a_new_user2.png)

![](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_create_a_new_user3.png)

4. ユーザー名を保存し、セキュリティ資格情報をダウンロードします。

![](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_Edison_starter_kit_get_Security_Credentials1.png)

![](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_Edison_starter_kit_get_Security_Credentials2.png)

5. AdministratorAccessポリシーをアタッチして設定します。

![](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_Edison_starter_kit_get_Security_Credentials3.png)

![](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_Edison_starter_kit_get_Security_Credentials4.png)

6. Thingを作成します。

このセクションでは、[Beagle Bone wiki](/ja/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS)を参照して、Thingを作成し残りのタスクを完了する別の方法を確認することもできます。違いは、Beagle BoneではAWS CLIツールを使用して認証を取得しない点です。

![](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_Edison_starter_kit_create_a_thing1.png)

![](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_Edison_starter_kit_create_a_thing2.png)

### Intel EdisonボードでAWS IoTデバイスSDKを設定する

**開始前の準備**

* ボードをセットアップするために`configure_edison --setup`コマンドを実行したことを確認してください。

* Intel® EdisonボードがローカルWi-Fiネットワークを介してオンラインであることを確認してください（`configure_edison`セットアップ中に行われるはずです）。

* SSHを使用してEdisonコンソールにログインします（PuttyまたはXshellを使用）。

**AWS CLIのインストール**

AWS CLIは、ボードからAWSサービスを管理する方法です。SDKをダウンロードするには、まずこれをインストールする必要があります。

1. まず、pip（Pythonパッケージマネージャー）をインストールします：

```cpp
curl https://bootstrap.pypa.io/ez_setup.py -o - | python
easy_install pip
```

2. 次に、pipを使用してAWS CLIをインストールします：

```cpp
pip install awscli
```

注意: ヘルプファイル（"aws iot help"）を表示するには、GroffとBusyBox以外のバージョンのlessをインストールする必要があります。

3. Groffのインストール：

```cpp
wget http://ftp.gnu.org/gnu/groff/groff-1.22.3.tar.gz
tar -zxvf groff-1.22.3.tar.gz
cd groff-1.22.3
./configure
make
make install
export PATH=$PATH:/usr/local/bin/
cd ~
```

4. Lessのインストール：
まず古いバージョンのlessをリネームします。

```cpp
mv /usr/bin/less /usr/bin/less-OLD
```

次に新しいバージョンのlessをインストールします。

```cpp
wget http://www.greenwoodsoftware.com/less/less-458.zip
unzip less-458.zip
cd less-458
chmod 777 *
./configure
make
make install
cd ~
```

5. すべてが正しくインストールされていることを確認するために、iotヘルプファイルを実行します：

```cpp
aws iot help
```

**AWS資格情報の取得：**

この時点で、AWS CLIがインストールされているはずです。そして、以前にダウンロードしたアクセスIDとキーを使用してAWSを設定し、以下を入力します：

```cpp
aws configure
```

![](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_Edison_starter_kit_get_aws_cli1.png)
![](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_Edison_starter_kit_get_aws_cli2.png)

1. まず、証明書を保存するフォルダを作成します：

```cpp
mkdir aws_certs
cd aws_certs
```

2. OpenSSLを使用して秘密鍵を生成します：

```cpp
openssl genrsa -out privateKey.pem 2048
openssl req -new -key privateKey.pem -out cert.csr
```

3. フィールドに自分の情報を入力します。

![](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_Edison_starter_kit_get_aws_cli3.png)

4. 次のコマンドを実行して証明書をアクティブ化します：

```cpp
aws iot create-certificate-from-csr --certificate-signing-request file://cert.csr --set-as-active > certOutput.txt
```

5. 次のコマンドを実行して証明書をcert.pemファイルに保存します：

```cpp
aws iot describe-certificate --certificate-id <certificate ID> --output text --query certificateDescription.certificatePem  > cert.pem
```

![](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_Edison_starter_kit_get_aws_cli4.png)

注意: `<certificate ID>`をcertOutput.txtの"certificateId"フィールドに保存されているIDに置き換えてください。ファイルを表示するには以下を入力します：`more certOutput.txt`

6. AWS IoT SDK用のJsonポリシードキュメントを作成します：

* 以下のテキストをコピーします（Ctrl+C）：

```cpp
{
"Version": "2012-10-17",
"Statement": [{
"Effect": "Allow",
"Action":["iot:*"],
"Resource": ["*"]
}]
}
```

* `vi policy.doc`を入力し、`a`を押して右クリックでテキストを貼り付けます。
* Escapeキーを押して`:wq`を入力し、保存して終了します。

![](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_Edison_starter_kit_get_aws_cli5.png)

7. 次のコマンドを入力します：

```cpp
 aws iot create-policy --policy-name PubSubToAnyTopic --policy-document file://policy.doc
```

注意: ポリシー名は任意の名前にすることができます。

![](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_Edison_starter_kit_get_aws_cli6.png)

8.その後、ポリシーと証明書がAWSコンソールに表示されます。

![](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_Edison_starter_kit_get_aws_cli7.png)

9.次に、以下のコマンドを使用してポリシーを証明書にアタッチします：

```cpp
aws iot attach-principal-policy --principal <principal arn> --policy-name "PubSubToAnyTopic"
```

注意: &lt;principal arn&gt; を、outputCert.txtファイル内の "certifcateArn" に保存されている値に置き換えてください。

![](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_Edison_starter_kit_get_aws_cli8.png)

10.証明書がポリシーにアタッチされていることが確認できます。

![](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_Edison_starter_kit_get_aws_cli9.png)

**MQTTを使用してAWSにサブスクライブおよびパブリッシュする**

* 証明書が整ったので、MQTTを使用してクラウドにサブスクライブおよびパブリッシュできます。
* まず、ルートCA pemファイルを取得します：

```cpp
curl https://www.symantec.com/content/en/us/enterprise/verisign/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem > rootCA.pem
```

![](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_Edison_starter_kit_get_aws_cli10.png)

### Node.jsでアプリケーションをコーディングする

1. Node.jsプロジェクトを作成します

```cpp
cd ~
mkdir aws_nodejs && cd aws_nodejs
npm init
npm install --save aws-iot-device-sdk
touch main.js
```

![](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_Edison_starter_kit_coding1.png)

2. デモコードをmain.jsにコピーして保存します

```cpp
vi main.js
```

```cpp
// Grove - リレーをベースシールドのポートD2に接続
// Grove - 温湿度センサー（高品質）をI2Cポートに接続

var sensor1 = require('jsupm_th02');
var th02 = new sensor1.TH02();

var sensor2 = require('jsupm_grove');
var relay = new sensor2.GroveRelay(2);

// デバイス値をシミュレート
var temp = 24.00;
var humi = 50;
var relayState = false;
var reported_state = {"Temperature":temp, "Humidity": humi, "RelayState": relayState};

//
// thingShadows.update()操作から返されるクライアントトークン値
//
const thingShadow = require('./node_modules/aws-iot-device-sdk/thing');

var awsIot = require('aws-iot-device-sdk');

var thingShadows = awsIot.thingShadow({
    keyPath: '/home/root/aws_certs/privateKey.pem',
    certPath: '/home/root/aws_certs/cert.pem',
    caPath: '/home/root/aws_certs/rootCA.pem',
    clientId: 'myAwsClientId',
    region: 'us-east-1'
});

// デバイス値をシミュレート
var temp = 24.00;
var humi = 50;
var relayState = false;

//
// thingShadows.update()操作から返されるクライアントトークン値
//
var clientTokenUpdate;

var thingName = "EdisonDemo";
thingShadows.on('connect', function() {
    thingShadows.register(thingName);
    console.log(thingName + ' 登録中...');

    setInterval(function(){
      readSensor(sendData);
    }, 5000);
});

thingShadows.on('status', function(thingName, stat, clientToken, stateObject) {
    console.log('   '+thingName+' で '+stat+' を受信: '+ JSON.stringify(stateObject));
    //
    // これらのイベントは、update()、get()、delete()呼び出しのステータスを報告します。
    // イベントに関連付けられたclientToken値は、以前のget()、update()、delete()呼び出しで返された値と同じです。
    // ステータスイベントを使用してシャドウ操作のステータスを追跡します。
    //
});

thingShadows.on('delta', function(thingName, stateObject) {
    console.log('    '+thingName+' でデルタを受信: '+ JSON.stringify(stateObject));

    if(stateObject.state.RelayState == true){
        relay.on();
        console.log('リレーがオンになりました。');
    }
    else if(stateObject.state.RelayState == false) {
        relay.off();
        console.log('リレーがオフになりました。');
    }
});

thingShadows.on('timeout', function(thingName, clientToken) {
    console.log('    '+thingName+' でタイムアウトを受信、トークン: '+ clientToken);
    //
    // シャドウ操作がタイムアウトした場合、これらのイベントを受信します。
    // イベントに関連付けられたclientToken値は、以前のget()、update()、delete()呼び出しで返された値と同じです。
    //
});

function readSensor(callback){
    temp = th02.getTemperature();
    humi = th02.getHumidity();
    relayState = relay.isOn();

    callback();
};

function sendData(){
    var reported_state = {"Temperature":temp, "Humidity": humi, "RelayState": relayState};
    var relayTH02State = {"state":{desired: reported_state}};  // desired属性を使用するとデルタを受信可能
    // 詳細は http://docs.aws.amazon.com/iot/latest/developerguide/thing-shadow-mqtt.html#update-pub-sub-message を参照

    clientTokenUpdate = thingShadows.update(thingName, relayTH02State);

    if (clientTokenUpdate === null)
    {
       console.log('シャドウの更新に失敗しました。操作はまだ進行中です。');
    }
};
```

3. Node.jsアプリケーションを開始します

* 以下のようにGroveセンサーを接続します

* リレー - D2

* 温度センサー - I2Cポート

![](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_Edison_starter_kit_coding5.png)

```cpp
  node main.js
```

![](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_Edison_starter_kit_coding2.png)

4. AWSコンソールでデータを確認します

![](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_Edison_starter_kit_coding3.png)

5. シャドウを更新してリレーの状態を変更します

![](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_Edison_starter_kit_coding4.png)

6. アップロードが成功すると、Grove - リレーがオンになります。

## リソース

* [aws-iot-intel GitHub ページ](https://github.com/intel-iot-devkit/avs-alexa-iot-intel-speech-enabling-kit)

* [aws-iot-device-sdk-js GitHub ページ](https://github.com/aws/aws-iot-device-sdk-js)

* [Intel UPM GitHub ページ](https://github.com/intel-iot-devkit/upm)

* [AWS IoT Intel GitHub ページ](https://github.com/intel-iot-devkit/avs-alexa-iot-intel-speech-enabling-kit)

* [AWS IoT MQTT 更新トピック形式](http://docs.aws.amazon.com/iot/latest/developerguide/thing-shadow-mqtt.html#update-pub-sub-message)

* **[PDF]** [AWS IoT 開発者ガイド](https://files.seeedstudio.com/wiki/Intel_Edison_and_Grove_IoT_Starter_Kit_Powered_by_AWS/res/AWS_IoT_Developer_Guide.pdf)

* [Wiki]<a href="/ja/Grove_IoT_Starter_Kits_Powered_by_AWS" target="_blank"><span><font color={'000000'} size={"3"}> AWS 対応 Grove IoT スターターキットのメインページ </font></span></a>

* [Edison の始め方](https://software.intel.com/en-us/iot/library/edison-getting-started)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>