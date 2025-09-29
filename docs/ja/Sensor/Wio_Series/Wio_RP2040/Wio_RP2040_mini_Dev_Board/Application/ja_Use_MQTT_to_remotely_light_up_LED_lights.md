---
title: MQTTを使用してLEDライトをリモートで点灯させる
nointro:
keywords:
  - ドキュメント
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Use_MQTT_to_remotely_light_up_LED_lights/
slug: /ja/Use_MQTT_to_remotely_light_up_LED_lights
last_update:
  date: 05/15/2025
  author: gunengyu
---


MQTTは、クライアントサーバー型のパブリッシュ/サブスクライブ型メッセージングトランスポートプロトコルです。クライアントはパブリッシャーまたはサブスクライバー、またはその両方として機能することができます。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_10.png)

パブリッシャーはトピックを作成し、そのトピックにメッセージを添付することができます。例えば、新しいトピック「今日の天気」を作成し、メッセージ内容を「25度」としてサーバーに送信することができます。サーバーがトピックメッセージを受信すると、パブリッシャーはそのトピックを購読しているクライアントに情報を配信します。つまり、サブスクライバーが「今日の天気」というトピックを購読している場合のみ、「25度」というメッセージを受信します。「今日の天気」というトピックを購読していない場合、パブリッシャーがどんなメッセージを送信しても、サブスクライバーはそのメッセージを受信しません。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_11.png)

### 1. MQTTサーバーの設定
MQTTXサーバーソフトウェアをダウンロードしてコンピューターにインストールし、MQTTサーバーを設定します。

---

このプロジェクトでは、「mqtt.p2hp.com」の無料サーバーを使用します。
**オンラインサーバー**

- アドレス: mqtt.p2hp.com
- ポート: 1883 (TCP), 8083 (WebSocket)
- タイプ: EMQ
- MQTT V3.1.1/V5.0対応

---

MQTTXソフトウェアに入り、新しい接続を作成します。名前、サーバー、ポート、トピックを入力し、「Connect」をクリックしてサーバーに接続します。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_12.png)

接続が成功すると、ソフトウェアの右上にポップアップが表示されます。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_13.png)

次に、以下でトピックとメッセージを設定します。このプロジェクトでは、MQTTメッセージを使用してメイン制御ボード上のLEDのオンとオフを制御するため、トピック（「LED」）とメッセージ内容（「on」）を入力します。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_14.png)

### 2. コード
以下のコードをコードエディタに入力してください:
```python
import network
import mqtt
from machine import Pin, I2C, ADC, UART, SPI, PWM
from time import sleep

N1 = network.WLAN_SPI(network.STA_IF)
N1.active(True)
N1.connect("CHCK","depot0510")
sleep(1)

led = Pin(13, Pin.OUT)
led.value(0)

SERVER = 'mqtt.p2hp.com'
CLIENT_ID = 'Wio RP2040_Dev_board'
TOPIC = 'LED'

def mqtt_callback(topic):
    print('topic: {}'.format(topic[0]))
    print('msg:{}'.format(topic[1]))
    if(topic[1] == "off"):
        led.value(0)
    if(topic[1] == "on"):
        led.value(1)
    
cl = mqtt.MQTTClient(CLIENT_ID, SERVER, mqtt_port = 1883)
cl.connect()

    
cl.publish("webscket_test","start")
cl.subscribe(TOPIC)
cl.set_callback(mqtt_callback)
print('ok')

while True:
    cl.wait_msg()
    sleep(0.1)
```

**コードの8行目にWiFi名とパスワードを入力することを忘れないでください**。その後、プログラムを実行します。Shellウィンドウに「ok」というプロンプトが表示されたら、接続が成功したことを意味します。その時点で、MQTTXで情報を送信して制御することができます。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_15.png)

ソフトウェアの右下に「LED」と「on」を入力し、送信アイコンをクリックします。この時点で、メイン制御ボードの青色LEDが点灯するはずです。「off」を送信することでLEDライトを消灯することもできます。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_16.png)
![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_17.png)

## 技術サポートと製品に関する議論
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社の製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>