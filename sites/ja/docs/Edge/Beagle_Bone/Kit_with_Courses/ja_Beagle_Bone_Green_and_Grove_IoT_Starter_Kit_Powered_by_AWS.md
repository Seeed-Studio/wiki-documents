---
description: BeagleBone Green と Grove IoT スターターキット（AWS 提供）
title: BeagleBone Green と Grove IoT スターターキット（AWS 提供）
keywords:
 - Beagle_Bone
 - Kit_with_Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Beagle Bone Green and Grove IoT Starter Kit Powered by AWS
category: BeagleBone
bzurl: https://www.amazon.com/BeagleBone-Green-Grove-Starter-Powered/dp/B017O3H49K
oldwikiname: Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS
prodimagename: Aws_kit_bbg_cover.JPG
bzprodimageurl: https://images-na.ssl-images-amazon.com/images/I/41ld4VguWCL.jpg
surveyurl: https://www.research.net/r/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS
--- -->

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Aws_kit_bbg_cover.JPG)

<!-- *Main articles: Start here [Grove IoT Starter Kits Powered by AWS](/ja/Grove_IoT_Starter_Kits_Powered_by_AWS "Grove IoT Starter Kits Powered by AWS") , [Beaglebone Green](/ja/BeagleBone_Green "Beaglebone green")* -->

[BeagleBone Green](https://www.seeedstudio.com/depot/BeagleBone-Green-p-2504.html?cPath=122_113) (BBG) は BeagleBoard.org と Seeed Studio の共同開発による製品です。これは [BeagleBone Black](https://beagleboard.org/BLACK) のオープンソースハードウェア設計を基にしており、2つの Grove コネクタが追加されています。このキットには新しい BBG、10個の Grove モジュール、およびそれらを迅速に接続するためのステップバイステップのチュートリアルが含まれています。Grove IoT スターターキットには、AWS クラウドコンピューティングを使用してアイデアを具体的なアプリケーションに変えるために最も頻繁に使用されるセンサーとアクチュエータが含まれています。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://wwww.amazon.com/dp/B0168L6B0C)

特徴
--------

- 箱から出してすぐに使用可能、プラグアンドプレイ、ブレッドボードやはんだ付け不要
- AWS サービスおよび AWS ベストプラクティスに完全準拠
- 開発者やメーカーが迅速に始められるようにするためのステップバイステップのチュートリアル

同梱物
-------------------

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Aws_kit_bbg.JPG)

<!-- | ボード/部品                                                                                                                                   | 数量 | ドキュメント                                                                                     |
|----------------------------------------------------------------------------------------------------------------------------------------------|-----|---------------------------------------------------------------------------------------------------|
| [BeagleBone Green](https://www.seeedstudio.com/depot/BeagleBone-Green-p-2504.html?cPath=122_113)                                              | 1   | [こちらを読む](/ja/BeagleBone_Green "Beaglebone green")                                                 |
| [Grove - I2C ADC](https://www.seeedstudio.com/depot/Grove-I2C-ADC-p-1580.html?cPath=98_16)                                                    | 1   | [こちらを読む](/ja/Grove-I2C_ADC "Grove - I2C ADC")                                                     |
| [Grove - I2C Hub](https://www.seeedstudio.com/depot/Grove-I2C-Hub-p-851.html?cPath=98_16)                                                     | 1   | [こちらを読む](/ja/Grove-I2C_Hub "Grove - I2C Hub")                                                     |
| [Grove - Relay](https://www.seeedstudio.com/depot/Grove-Relay-p-769.html?cPath=39_42)                                                         | 1   | [こちらを読む](/ja/Grove-Relay "Grove - Relay")                                                         |
| [Grove - Buzzer](https://www.seeedstudio.com/depot/Grove-Buzzer-p-768.html?cPath=38)                                                          | 1   | [こちらを読む](/ja/Grove-Buzzer "Grove - Buzzer")                                                       |
| [Grove - OLED Display 0.96'](https://www.seeedstudio.com/depot/Grove-OLED-Display-096-p-824.html?cPath=34_36)'                                | 1   | [こちらを読む](/ja/Grove-OLED_Display_0.96inch "Grove - OLED Display 96*96")                               |
| [Grove - Button](https://www.seeedstudio.com/depot/Grove-Button-p-766.html?cPath=85_50)                                                       | 1   | [こちらを読む](/ja/Grove-Button "Grove - Button")                                                       |
| [Grove - Temperature Sensor](https://www.seeedstudio.com/depot/Grove-Temperature-Sensor-p-774.html?cPath=25_125)                              | 1   | [こちらを読む](/ja/Grove-Temperature_Sensor_V1.2 "Grove - Temperature Sensor V1.2")                     |
| [Grove - Sound Sensor](https://www.seeedstudio.com/depot/Grove-Sound-Sensor-p-752.html?cPath=25_128)                                          | 1   | [こちらを読む](/ja/Grove-Sound_Sensor "Grove - Sound Sensor")                                           |
| [Grove - 3-Axis Digital Accelerometer(±16g)](https://www.seeedstudio.com/depot/Grove-3Axis-Digital-Accelerometer16g-p-1156.html?cPath=25_132) | 1   | [こちらを読む](/ja/Grove-3-Axis_Digital_Accelerometer-16g "Grove - 3-Axis Digital Accelerometer(±16g\)") |
| [Grove - Chainable RGB LED](https://www.seeedstudio.com/depot/Grove-Chainable-RGB-LED-p-850.html?cPath=81_35)                                 | 1   | [こちらを読む](/ja/Grove-Chainable_RGB_LED "Grove - Chainable RGB LED")                                 |
| [Micro USB Cable - 48cm](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)                                                                                                                       | 1   |                                                                                                   |  -->



始め方
---------------

### AWS IoT サービスの設定

まず最初に、AWS IoT サービスアカウントを取得し、いくつかの設定を行う必要があります。

- [AWS アカウントを作成](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AMS5.0CreatingAnAWSAccount.html)
- [AWS IoT コンソール](https://aws.amazon.com/iot/)にアクセスし、AWS IoT ダッシュボード を開きます。

    1. 左上の **Services** をクリックし、その後 AWS IoT をクリックします。以下の画像を参照してください。

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_click_service.jpg)

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_click_iot.png)

    2. **Get started** ボタンをクリックします。

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_click_get_started.jpg)

    3. **Create a Resource** をクリックし、その後 **Create a thing** をクリックします。

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_click_create_a_thing.jpg)

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_view_a_thing.jpg)

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_name_a_thing.png)

    4. 任意の名前を入力します。ここでは "temperature" と名付けます。

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSCreateAThing.png)

    5. **Create** をクリックして作成を完了し、その後 **View thing** をクリックして作成したものの情報を確認します。

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSViewThing.png)

    6. **Connect a device** をクリックします。

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSConnectADevice.png)

    7. Node JS を選択し、**Generate certificate and policy** をクリックします。

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSGenerate.png)

    8. 3つのファイルが表示されます。これらをダウンロードしてください。後で使用します。その後、**Confirm & start connecting** をクリックします。

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSConfirm.png)

    9. AWS IoT Node.js SDK をダウンロードし、**Return to Thing Detail** をクリックします。

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSReturn.png)

これでこのステップは完了です。次のステップに進みましょう。

### BeagleBone Green のセットアップ

<!-- BBG をマイクロ USB ケーブルで PC に接続し、BBG をインターネットに接続します。BBG/BBB を初めて使用する場合は、[こちら](/ja/BeagleBone_Green) を参照して開始してください。 -->

以下の画像のように Grove モジュールを BBG に接続します。

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSSetup.jpg)

### ソフトウェアの作業

#### SDK とキー ファイルを Cloud9 の examples フォルダにアップロード

1. 以前にダウンロードした 3つのキー ファイルと Node JS SDK を覚えていますか？

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSFile.png)

2. SDK とキー ファイルを Cloud9 の examples フォルダにアップロードします。

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSUpload1.png)

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSUpload2.png)

#### 新しいターミナルを開く

SDK を解凍し、キーを正しい場所に移動する必要があります。

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSUNzip.png)

```
# cd examples
```

SDK ファイルを解凍します。

```
# unzip aws-iot-device-sdk-js-latest.zip
```

解凍されたフォルダに入ります。

```
# cd aws-iot-device-sdk-js
```

依存パッケージをインストールします。

```
# npm install
```

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSMkdir.png)

新しいフォルダ awsCerts を作成します。

```
# mkdir awsCerts && cd awsCerts
```

その後、3つのキー ファイルを新しいフォルダに移動します。

```
# mv ../../31f2fd2680-* .
```

31f2fd2680 は自身のキー ファイル番号に置き換えてください。

キー ファイルの名前を変更します。

```
# mv 31f2fd2680-certificate.pem.crt.txt  certificate.pem.crt
# mv 31f2fd2680-private.pem.key   private.pem.key
```

インターネットからファイルをダウンロードします。

```
# wget https://www.symantec.com/content/en/us/enterprise/verisign/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem
```

ダウンロードしたファイルの名前を root-CA.crt に変更します。

```
# mv VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem root-CA.crt
```

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSRename.png)

#### BBG 上でのプログラミング

examples フォルダに入ります。

# cd .. && cd examples/

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSexamples.png)

新しいファイル grove_temperature_sensor.py を作成します。

    # vim grove_temperature_sensor.py

以下のコードをファイルにコピーしてください。

```
#!/usr/bin/python
# -*- coding: utf-8 -*-
 
import time
import math
import Adafruit_BBIO.GPIO as GPIO
from Adafruit_I2C import Adafruit_I2C
BUZZER = "P9_22"            # GPIO P9_22
GPIO.setup(BUZZER, GPIO.OUT)
 
# ブザーをオンにする閾値は28度
THRESHOLD_TEMPERATURE = 28
ADDR_ADC121 = 0x50
 
REG_ADDR_RESULT = 0x00
REG_ADDR_ALERT = 0x01
REG_ADDR_CONFIG = 0x02
REG_ADDR_LIMITL = 0x03
REG_ADDR_LIMITH = 0x04
REG_ADDR_HYST = 0x05
REG_ADDR_CONVL = 0x06
REG_ADDR_CONVH = 0x07
 
i2c = Adafruit_I2C(ADDR_ADC121)           
 
class I2cAdc:
    def __init__(self):
        i2c.write8(REG_ADDR_CONFIG, 0x20)
 
    def read_adc(self):
        "ADCデータを読み取る 0-4095"
        data_list = i2c.readList(REG_ADDR_RESULT, 2)
        #print 'data list', data_list
        data = ((data_list[0] & 0x0f) << 8 | data_list[1]) & 0xfff
        return data
adc = I2cAdc()
 
#   read_temperature() メソッドの引数は接続されているGroveボード（Grove Temperature Sensor）のバージョンを定義します。
#   デフォルトは 'v1.2' です。例:
#       temp = read_temperature('v1.0')          # B値 = 3975
#       temp = read_temperature('v1.1')          # B値 = 4250
#       temp = read_temperature('v1.2')          # B値 = 4250
def read_temperature(model = 'v1.2'):
    "Grove Temperature Sensorから摂氏温度を読み取る"
    # 各センサーのリビジョンは異なるサーミスタを使用しており、それぞれに固有のB値定数があります
    if model == 'v1.2':
        bValue = 4250  # センサーv1.2はサーミスタ ??? を使用（SeeedStudioが明確にするまでNCP18WF104F03RCを仮定）
    elif model == 'v1.1':
        bValue = 4250  # センサーv1.1はサーミスタNCP18WF104F03RCを使用
    else:
        bValue = 3975  # センサーv1.0はサーミスタTTC3A103*39Hを使用
 
    total_value = 0
    for index in range(20):
        sensor_value = adc.read_adc()
        total_value += sensor_value
        time.sleep(0.05)
    average_value = float(total_value / 20)
 
    # ADCデータをArduinoプラットフォームのデータに変換
    sensor_value_tmp = (float)(average_value / 4095 * 2.95 * 2 / 3.3 * 1023)
    resistance = (float)(1023 - sensor_value_tmp) * 10000 / sensor_value_tmp
    temperature = round((float)(1 / (math.log(resistance / 10000) / bValue + 1 / 298.15) - 273.15), 2)
    return temperature
 
# 機能: 温度センサーがコードで設定した閾値に達すると、ブザーが1秒間鳴ります。
# ハードウェア: Grove - I2C ADC, Grove - Temperature Sensor, Grove - Buzzer
# 注意: P9_22(UART2_RXD)をGPIOとして使用。
# Grove BuzzerをBeaglebone GreenのUART Groveポートに接続。
# Grove - I2C ADCをBeaglebone GreenのI2C Groveポートに接続し、その後Grove - Temperature SensorをGrove - I2C ADCに接続。
if __name__ == '__main__':
 
    while True:
        try:
            # Grove Temperature Sensorから摂氏温度を読み取る
            temperature = read_temperature('v1.2')
 
            # 温度が設定した閾値に達した場合、ブザーが鳴る
            if temperature > THRESHOLD_TEMPERATURE:
                # HIGHを送信してBUZZERをオンにする
                GPIO.output(BUZZER, GPIO.HIGH)
            else:
                # LOWを送信してBUZZERをオフにする
                GPIO.output(BUZZER, GPIO.LOW)
 
            print "temperature = ", temperature
 
        except KeyboardInterrupt:
            GPIO.output(BUZZER, GPIO.LOW)
            break
 
        except IOError:
            print "Error"
```

新しいファイル python_sensor.py を作成します。

新しいファイル `python_sensor.py` を作成します。

    #vim python_sensor.py

以下のコードを新しいファイルにコピーしてください。

```python
import socket
import grove_temperature_sensor
if __name__ == "__main__":
    client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    client.connect(('127.0.0.1', 7000))
 
    while True:
        temperature = grove_temperature_sensor.read_temperature('v1.2')
        print temperature
        client.sendall(str('%.2f' % temperature))
        data = client.recv(1024)
        print data
    client.close()
 
    print 'Received', repr(data)
```

新しいファイル `rgbled.js` を作成します。

    #vim rgbled.js

以下のコードを新しいファイルにコピーしてください。

```javascript
var exec = require('child_process').exec; 
var value = 0;
 
exports.initpins = function(){
    exec("echo 3 > /sys/class/gpio/export", function(error, stdout, stderr){
        if(error) 
            console.info('stderr : ' + stderr);
    });
    exec("echo out > /sys/class/gpio/gpio3/direction", function(error, stdout, stderr){
        if(error) 
            console.info('stderr : ' + stderr);
    });
 
    exec("echo 2 > /sys/class/gpio/export", function(error, stdout, stderr){
        if(error) 
            console.info('stderr : ' + stderr);
    });
 
    exec("echo out > /sys/class/gpio/gpio2/direction", function(error, stdout, stderr){
        if(error) 
            console.info('stderr : ' + stderr);
    });
}
digitalwrite = function(pin, state){
    exec("echo " + state.toString() + " > /sys/class/gpio/gpio" + pin.toString() + "/value",
        function(error, stdout, stderr){
            if(error) 
                console.log('stderr : ' + stderr);
        });
}
sleep = function(sleepTime) {
    for(var start = +new Date; +new Date - start <= sleepTime; ) { }
}
clk = function(){
    digitalwrite(2, 0);
    sleep(2);
    digitalwrite(2, 1);
    sleep(2);
}
sendByte = function(b){
    for(var i = 0; i < 8; i++){
        if((b & 0x80) != 0)
            digitalwrite(3, 1);
        else
            digitalwrite(3, 0);
        clk();
        b = b << 1; 
    }
}
setColor = function(red, green, blue){
    var prefix = 0xc0;
    if((blue & 0x80) == 0)
        prefix |= 0x20;
    if((blue & 0x40) == 0)
        prefix |= 0x10;
    if((green & 0x80) == 0)
        prefix |= 0x08;
    if((green & 0x40) == 0)
        prefix |= 0x04;
    if((red & 0x80) == 0)
        prefix |= 0x02;
    if((red & 0x40) == 0)
        prefix |= 0x01;
    sendByte(prefix);
    sendByte(blue);
    sendByte(green);
    sendByte(red);
}
exports.setColorRGB = function(led, red, green, blue){
    sendByte(0x00);
    sendByte(0x00);
    sendByte(0x00);
    sendByte(0x00);
    for(var i = 0; i < led; i++ ){
        setColor(red, green, blue);
    }
    sendByte(0x00);
    sendByte(0x00);
    sendByte(0x00);
    sendByte(0x00);
    console.log("set rgb");
}
test = function(){
    initpins();
    while(1){
        console.log("loop");
        setColorRGB(1, 255, 0, 0);
        setColorRGB(1, 0, 255, 0);
        setColorRGB(1, 0, 0, 255);
        setColorRGB(1, 0, 255, 255);
        setColorRGB(1, 255, 0, 255);
        setColorRGB(1, 255, 255, 0);
        setColorRGB(1, 255, 255, 255);
    }
}
```

新しいファイル `shadow.js` を作成します。

# vim shadow.js

以下のコードを新しいファイルにコピーしてください。

```javascript
var awsIot = require('..');
var net = require('net');
var rgbled = require('./rgbled.js');
var exec = require('child_process').exec;    
var myThingName = 'temperature';
var thingShadows = awsIot.thingShadow({
   keyPath: '/var/lib/cloud9/examples/aws-iot-device-sdk-js/awsCerts/private.pem.key',
  certPath: '/var/lib/cloud9/examples/aws-iot-device-sdk-js/awsCerts/certificate.pem.crt',
    caPath: '/var/lib/cloud9/examples/aws-iot-device-sdk-js/awsCerts/root-CA.crt',
  clientId: 'myAwsClientId',
    region: 'us-west-2'
});
var HOST = '127.0.0.1';
var PORT = 7000;
var temperature = 25;
var red = 0;
var green = 0;
var blue = 0;
// サーバーインスタンスを作成し、listen関数をチェーンします
net.createServer(function(socket) {
    console.log('CONNECTED: ' + socket.remoteAddress +':'+ socket.remotePort);
            // このソケットインスタンスに 'data' イベントハンドラを追加
    socket.on('data', function(data) {
        console.log('DATA ' + socket.remoteAddress + ': ' + data);
        temperature = data.toString().substr(0,5);
        socket.write('This is your request: "' + data + '"');
    });
    // このソケットインスタンスに 'close' イベントハンドラを追加
    socket.on('close', function(data) {
        console.log('Socket connection closed... ');
    });
}).listen(PORT, HOST);
//
// Thing Shadowの状態
//
var rgbLedLampState = {"state":{"desired":{"red":187,"green":114,"blue":222,value:25}}};
 
//
// thingShadows.update() 操作から返されるクライアントトークン値
//
var clientTokenUpdate;
 
thingShadows.on('connect', function() {
//
// AWS IoTプラットフォームに接続した後、
// 'RGBLedLamp' という名前のThing Shadowに関心を登録します。
//
    thingShadows.register( myThingName );
//
// 登録後2秒後に、最新のデバイス状態で 'RGBLedLamp' という名前のThing Shadowを更新し、
// クライアントトークンを保存して、ステータスまたはタイムアウトイベントと関連付けることができます。
//
// 注意：遅延は最初の更新にのみ必要であり、
// デフォルトパラメータを使用したThing Shadow登録後の最初の更新に限ります。
// updateメソッドのAPIドキュメントを参照してください。
//
    exec('python python_sensor.py',function(error,stdout,stderr){
            if(stdout.length >1){
                console.log('you offer args:',stdout);
            }else {
                console.log('you don\'t offer args');
            }
            if(error) {
                console.info('stderr : '+stderr);
            }});
    rgbled.initpins();
    setTimeout( function() {
       clientTokenUpdate = thingShadows.update(myThingName, rgbLedLampState );
       }, 2000 );
    });
setInterval(function(){
        new_data = {"state":{"desired":{"red":187,"green":114,"blue":222,value:temperature.toString()}}};
        //new_data = {"state":{"desired":{"value":temperature.toString()}}};
        console.log(new_data);
       clientTokenUpdate = thingShadows.update(myThingName, new_data )
},2000);
thingShadows.on('status', 
    function(thingName, stat, clientToken, stateObject) {
       console.log('received '+stat+' on '+thingName+': '+
                   JSON.stringify(stateObject));
    });
 
thingShadows.on('delta', 
    function(thingName, stateObject) {
       console.log('received delta '+' on '+thingName+': '+
                   JSON.stringify(stateObject));
        //console.log(stateObject["state"]);
    if(stateObject["state"]["red"]      != red ||
       stateObject["state"]["green"]  != green||
      stateObject["state"]["blue"]    != blue)
            rgbled.setColorRGB(1,stateObject["state"]["red"],
                        stateObject["state"]["green"],
                        stateObject["state"]["blue"]);
 
    red = stateObject["state"]["red"];
    green = stateObject["state"]["green"];
    blue = stateObject["state"]["blue"];
    });
 
thingShadows.on('timeout',
    function(thingName, clientToken) {
       console.log('received timeout '+' on '+thingName+': '+
                   clientToken);
    });
```

***myThingName*** の値（5行目）は、AWSアカウントで事前に作成したThing名と同じである必要があることに注意してください。

#### コードの実行

BBGの再起動が完了したら、コードを実行してください。

    # cd examples/aws-iot-device-sdk-js/examples/
    # node shadow.js

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSRun.png)

### 結果を確認する

次に、[AWS IoT](https://aws.amazon.com/iot/) のウェブサイトを開き、アカウントにサインインします。そして数分前に作成した Thing をクリックします。これで温度がウェブサイトにアップロードされたことが確認できます。

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSResult.png)

Grove Chainable LED の色を変更したい場合は、Shadow の値を更新することができます。例：

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSChange.png)

BBG が新しい RGB 値を取得したことが確認できます。

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSRGB.png)

そして Grove - Chainable RGB LED も緑色に変わります。

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSGreen.png)

[AWS IoT Services Getting Started Guide](https://docs.aws.amazon.com/iot/latest/developerguide/iot-dg.pdf) を参照して、AWS IoT に関する詳細情報を取得してください。

トラブルシューティング
------------------------

### 192.168.7.2 にアクセスできない

192.168.7.2 にアクセスできない場合は、最新のソフトウェアを更新してください。

**ステップ \#1: 最新のソフトウェアイメージをダウンロードする**

*<font color="Blue">更新日時: 2015年11月15日</font>*

[Google Drive](https://drive.google.com/file/d/0BwBIy7Eq4Nucd3NTaUkzS0dtT2s/view?usp=sharing) から最新のイメージをダウンロードしてください。

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_BBG_4.png)

**ステップ \#2: 圧縮ユーティリティをインストールする**

[7-zip](http://www.7-zip.org/download.html) をダウンロードしてインストールしてください。

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_BBG_1.png)

**ステップ \#3: イメージを解凍する**

7-zip を使用して .img ファイルをデスクトップまたは他のフォルダに解凍してください。

**ステップ \#4: SDカードプログラミングユーティリティをインストールする**

[Image Writer for Windows](http://sourceforge.net/projects/win32diskimager/files/latest/download) をダウンロードしてインストールしてください。バイナリ配布版をダウンロードすることを確認してください。

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_BBG_2.png)

**ステップ \#5: SDカードをコンピュータに接続する**

少なくとも8GBのmicroSDカードを使用し、SDアダプタまたはUSBアダプタを使用してSDカードをコンピュータに接続してください。

**ステップ \#6: SDカードにイメージを書き込む**

Ubuntu Image Writer またはそのページの指示を使用して、解凍したイメージをSDカードに書き込んでください。

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_BBG_3.png)

<div className="admonition danger">
  <p className="admonition-title">注意事項</p>
  <p> 1. デバイスを損傷する可能性があるという警告が表示される場合があります。これは、書き込み先がSDカードであることを確認している限り問題ありません。</p>
  <p> 2. この時点で BeagleBone をコンピュータに接続してはいけません。</p>
</div>

**ステップ \#7: SDカードを取り出す**

新しくプログラムされたSDカードを取り出してください。

**ステップ \#8: SDカードからボードを起動する**

SDカードを（電源がオフの状態の）ボードに挿入し、USBケーブルまたは5Vアダプタで電源を供給してください。開始するとフラッシュLEDが点灯し、この再起動には最大10分かかる場合があります。最新のDebianフラッシャーイメージは完了時に自動的にボードの電源をオフにします。ボードの電源をオフにし、SDカードを取り外して再度電源を供給すると完了です。

頑張ってください。

ファームウェア更新
-------------------

[2015年11月15日更新](https://drive.google.com/file/d/0BwBIy7Eq4Nucd3NTaUkzS0dtT2s/view?usp=sharing):

- 192.168.7.2 にアクセスできない問題を修正
- Windows 10 に対応

リソース
--------

- [【PDF】AWS IoT Developer Guide](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/res/AWS_IoT_Developer_Guide.pdf)
- [【PDF】AWS User Guide for BBG](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/res/AWS_User_Guide_for_BBG.pdf)
<!-- - [Main Page for Grove IoT Starter Kits Powered by AWS](/ja/Main Page for Grove IoT Starter Kits Powered by AWS) -->
- [【Github】AWS SDK for BeagleBone Green kit](https://github.com/Seeed-Studio/AWS_SDK_for_BBG)
- [【Github】Libraries for BeagleBone Green kit](https://github.com/Seeed-Studio/Grove_Starter_Kit_for_BBG)
<!-- - [BeagleBone Green](/ja/BeagleBone_Green) -->
- [Main page of Beagleboard](https://beagleboard.org/getting-started)
<!-- - [Grove - I2C ADC](/ja/Grove_Sensors_Network/Standard_Protocol) -->
- [Grove - I2C Hub](/ja/Grove-I2C_Hub)
<!-- - [Grove - Relay](/ja/Grove-Relay) -->
<!-- - [Grove - Buzzer](/ja/Grove-Buzzer) -->
- [Grove - OLED Display 96\*96](/ja/Grove-OLED_Display_0.96inch)
- [Grove - Button](/ja/Grove-Button)
- [Grove - Temperature sensor v1.2](/ja/Grove-Temperature_Sensor_V1.2)
- [Grove - Sound sensor](/ja/Grove-Sound_Sensor)
- [Grove - 3-Axis Digital Accelerometer ADXL345](/ja/Grove-3-Axis_Digital_Accelerometer-16g)
<!-- - [Grove - Chainable RGB LED](/ja/Grove-Chainable_RGB_LED) -->
<!-- 上述リンク欠落 -->

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS から作成されました -->

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