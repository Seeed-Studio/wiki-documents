---
title: ワイヤレスデスクトップ雰囲気ランプ
nointro:
keywords:
  - ドキュメント
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Wireless-desktop-atmosphere-lamp/
slug: /ja/Wireless-desktop-atmosphere-lamp
last_update:
  date: 05/15/2025
  author: gunengyu
---


# ワイヤレスデスクトップ雰囲気ランプ

忙しい職場で健康的な気分を保つことは非常に重要です。一般の人々は装飾やリラックスのためにデスクにサボテンを置くことがよくあります。エンジニアとして、同じ機能を持つアイテムが必要であり、自分で小さな光る盆栽を作ることができれば最高です。このプロジェクトでは、光るワイヤレスデスクトップ雰囲気ランプを作ります。ワイヤレスでコマンドを送信して、異なる気分に合わせて異なる色を点灯させることができます。それでは、作り方を見てみましょう！

<div align="center">
  <iframe width={560} height={315} src="https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/display.mp4" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
</div>


## ハードウェア

- [Wio RP2040 mini Dev Board](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html)
- [WS2812](https://www.seeedstudio.com/Digital-Full-Color-LED-Strip-with-APP-p-4780.html)
- Type-C データケーブル
- PC
- WiFi

### 配線図

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/wiring.jpg)

## ソフトウェア

### 1. Thonny のインストール​

簡単に始められます。Thonny は Python 3.7 を内蔵しているため、シンプルなインストーラーを1つ実行するだけでプログラミングを学ぶ準備が整います。まず、[Thonny.org](https://thonny.org/) をクリックしてダウンロードページにアクセスします。ページの右上隅で、使用しているオペレーティングシステムに応じた Thonny インストールパッケージを選択してダウンロードします。ダウンロードしたインストールパッケージをダブルクリックして開き、手順に従ってインストールします。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny1.jpg)

Thonny をインストールしたら、アプリケーションを開きます。Thonny のメインインターフェースが表示されるはずです：

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny2.jpg)

1. ツールバー: 新規作成、開く、保存、現在のスクリプトの実行、停止などの基本的なツール。

2. コードエディタ: Thonny の中心的なエリアで、ここで Python/MicroPython のコードを書きます。

3. シェル: ここでコマンドを実行でき、コマンドの結果が即座にシェルに表示されます。また、コードの出力もシェルウィンドウで確認できます。

4. インタープリタ: プログラムをコンパイルするインタープリタの種類を選択できます。「Python 3.7.9」をクリックし、ポップアップメニューで「MicroPython (Raspberry pi Pico)」を見つけてクリックし、インタープリタを Pico インタープリタに切り替えます。また、「Tools>>>Options>>>Interpreter」をクリックして選択することもできます。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny3.jpg)

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny4.jpg)

### 2. Wio RP2040 mini Dev Board を接続する

データケーブルを使用して開発ボードをコンピュータに接続し、ツールバーの「Restart backend」ボタンをクリックします。Wio RP2040 がコンピュータに正常に接続されている場合、シェルに MicroPython のバージョン情報とデバイス名が表示されます。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny5.jpg)

### 3. コード

MicroPython で WS2812B RGB LED を呼び出すには、この WS2812B のライブラリファイルを Wio RP2040 のメモリにインポートする必要があります。以下の手順で行います：以下のコードをコピーして新しい Thonny エディタウィンドウに貼り付け、開発ボードに保存して「ws2812.py」という名前に変更します。

```python
import array, time
from machine import Pin
import rp2

# WS2812 LED の数を設定します。
# brightness = 0.2

@rp2.asm_pio(sideset_init=rp2.PIO.OUT_LOW, out_shiftdir=rp2.PIO.SHIFT_LEFT, autopull=True,pull_thresh=24)

def ws2812():
    T1 = 2
    T2 = 5
    T3 = 3
    wrap_target()
    label("bitloop")
    out(x, 1) .side(0) [T3 - 1]
    jmp(not_x, "do_zero") .side(1) [T1 - 1]
    jmp("bitloop") .side(1) [T2 - 1]
    label("do_zero")
    nop() .side(0) [T2 - 1]
    wrap()
class WS2812():        
    def __init__(self, pin_num, led_count, brightness = 0.5):
        self.Pin = Pin
        self.led_count = led_count
        self.brightness = brightness
        self.sm = rp2.StateMachine(0, ws2812, freq=8_000_000, sideset_base=Pin(pin_num))
        self.sm.active(1)
        self.ar = array.array("I", [0 for _ in range(led_count)])
        
    def pixels_show(self):
        dimmer_ar = array.array("I", [0 for _ in range(self.led_count)])
        for i,c in enumerate(self.ar):
            r = int(((c >> 8) & 0xFF) * self.brightness)
            g = int(((c >> 16) & 0xFF) * self.brightness)
            b = int((c & 0xFF) * self.brightness)
            dimmer_ar[i] = (g<<16) + (r<<8) + b
        self.sm.put(dimmer_ar, 8)
        time.sleep_ms(10)

    def pixels_set(self, i, color):
        self.ar[i] = (color[1]<<16) + (color[0]<<8) + color[2]

    def pixels_fill(self, color):
        for i in range(len(self.ar)):
            self.pixels_set(i, color)

    def color_chase(self,color, wait):
        for i in range(self.led_count):
            self.pixels_set(i, color)
            time.sleep(wait)
            self.pixels_show()
        time.sleep(0.2)
    def wheel(self, pos):
    # 0 から 255 の値を入力して色の値を取得します。
    # 色は r - g - b - r に戻る遷移です。
        if pos < 0 or pos > 255:
            return (0, 0, 0)
        if pos < 85:
            return (255 - pos * 3, pos * 3, 0)
        if pos < 170:
            pos -= 85
            return (0, 255 - pos * 3, pos * 3)
        pos -= 170
        return (pos * 3, 0, 255 - pos * 3)


    def rainbow_cycle(self, wait):
        for j in range(255):
            for i in range(self.led_count):
                rc_index = (i * 256 // self.led_count) + j
                self.pixels_set(i, self.wheel(rc_index & 255))
            self.pixels_show()
            time.sleep(wait)


```
次に、新しいプログラムウィンドウを作成して以下のコードを書き込みます。
```python
import network
import mqtt
import utime
from machine import Pin, I2C, ADC, UART, SPI, PWM
from time import sleep
from ws2812 import WS2812

BLACK = (0, 0, 0)
RED = (255, 0, 0)
YELLOW = (255, 150, 0)
GREEN = (0, 255, 0)
CYAN = (0, 255, 255)
BLUE = (0, 0, 255)
PURPLE = (180, 0, 255)
WHITE = (255, 255, 255)
led = WS2812(13,10)#WS2812(pin_num,led_count)

N1 = network.WLAN_SPI(network.STA_IF)
N1.active(True)
N1.connect("CHCK","depot0510")
sleep(1)
 
SERVER = 'mqtt.p2hp.com'
CLIENT_ID = 'Wio RP2040_Dev_board'
TOPIC = 'RGB_LED'
 
def mqtt_callback(topic):
    print('topic: {}'.format(topic[0]))
    print('msg:{}'.format(topic[1]))
    if(topic[1] == "RED"):
        print('RED')
        led.pixels_fill(RED)
        led.pixels_show()
        utime.sleep(0.2)
    if(topic[1] == "GREEN"):
        print('GREEN')
        led.pixels_fill(GREEN)
        led.pixels_show()
        utime.sleep(0.2)
    if(topic[1] == "YELLOW"):
        print('YELLOW')
        led.pixels_fill(YELLOW)
        led.pixels_show()
        utime.sleep(0.2)
    if(topic[1] == "CYAN"):
        print('CYAN')
        led.pixels_fill(CYAN)
        led.pixels_show()
        utime.sleep(0.2)
    if(topic[1] == "BLUE"):
        print('BLUE')
        led.pixels_fill(BLUE)
        led.pixels_show()
        utime.sleep(0.2)
    if(topic[1] == "PURPLE"):
        print('PURPLE')
        led.pixels_fill(PURPLE)
        led.pixels_show()
        utime.sleep(0.2)
    if(topic[1] == "WHITE"):
        print('WHITE')
        led.pixels_fill(WHITE)
        led.pixels_show()
        utime.sleep(0.2)
 
cl = mqtt.MQTTClient(CLIENT_ID, SERVER, mqtt_port = 1883)
cl.connect()
 
 
cl.publish(TOPIC,"start")
cl.subscribe(TOPIC)
cl.set_callback(mqtt_callback)
print('ok')

led.pixels_fill(RED)
led.pixels_show()
utime.sleep(0.2)
while True:
    cl.wait_msg()
    sleep(0.1)
```

**プログラムの20行目で、正しいWiFi名とパスワードに変更してください。**

### 4.MQTTクライアントの設定

MQTTは、クライアントサーバー型のパブリッシュ/サブスクライブ型メッセージングトランスポートプロトコルです。クライアントはパブリッシャーまたはサブスクライバー、またはその両方として動作することができます。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt1.jpg)

パブリッシャーは、トピックとそのトピックに関連付けられたメッセージを作成することができます。例えば、新しいトピック「今日の天気」を作成し、メッセージ内容を「25度」としてサーバーに送信することができます。サーバーがトピックメッセージを受信すると、その情報をそのトピックをサブスクライブしているクライアントに配信します。つまり、サブスクライバーは「今日の天気」というトピックをサブスクライブしている場合のみ「25度」というメッセージを受信します。「今日の天気」というトピックをサブスクライブしていない場合、パブリッシャーがどんなメッセージを送信しても、サブスクライバーはそのメッセージを受信しません。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt2.jpg)

MQTTXサーバーソフトウェアをダウンロードしてコンピューターにインストールし、MQTTサーバーを設定します。

---

このプロジェクトでは、「mqtt.p2hp.com」の無料サーバーを使用します。**オンラインサーバー**

- アドレス: mqtt.p2hp.com
- ポート: 1883 (TCP), 8083 (WebSocket)
- タイプ: EMQ
- MQTT V3.1.1/V5.0対応

---

MQTTXソフトウェアに入り、新しい接続を作成します。名前、サーバー、ポート、トピックを入力し、「Connect」をクリックしてサーバーに接続します。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt3.jpg)

接続が成功すると、ソフトウェアの右上にポップアップが表示されます。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt4.jpg)

次に、以下のようにトピックとメッセージを設定します。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt5.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt6.jpg)

データが受信されると、メッセージ数が上部に表示されます。メッセージが表示されない場合は、サブスクライブトピックをクリックしてください。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt7.jpg)

これでMQTTクライアントの設定が完了しました。次に、Thonnyエディターに戻りコードを実行します。「ok」と表示され、接続されたWS2812Bが赤色に点灯したら、プログラムは正常に動作しています。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt8.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/led.jpg)

## 外観

外装部分にはアクリル板と木板を使用して作成します。レーザー彫刻機またはノコギリが必要になる場合があります。

ベースとパネルについては、私の完成したデザインを使用して、レーザー彫刻機でカットすることができます。

**[panel.zip](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/panel.zip)**

**[base.zip](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/base.zip)**

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img1.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img2.jpg)

以下の部品が得られます。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img3.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img4.jpg)

次に、ベース部分を組み立てます。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img5.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img6.jpg)

その後、WS2812Bを部品に貼り付けます。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img7.jpg)

プログラムをデバッグし、ハードウェアが正常に動作しているか確認します。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img8.jpg)

すべてが完了したら、ホットメルト接着剤を使用して残りの板を接着します。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img9.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img10.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img11.jpg)

最後に、MQTTXで異なるコマンドを送信して、ワイヤレスで色を変更します！

---

**トピック:** RGB_LED

**メッセージ:** RED,BLACK,YELLOW,GREEN,CYAN,BLUE,PURPLE,WHITE

---

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt9.jpg)

もちろん、コードを編集して異なる照明効果を試すこともできます。ぜひあなたの作品を共有してください！

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img12.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img13.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img14.jpg)

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