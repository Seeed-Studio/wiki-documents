---
title: ワイヤレス転倒検知デバイス
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Wireless-Fall-Detection-Device/
slug: /ja/Wireless-Fall-Detection-Device
last_update:
  date: 05/15/2025
  author: gunengyu
---


# ワイヤレス転倒検知デバイス
## 序文
多くの人々がキャリアにおいて懸命に働くにつれて、国の経済は発展し始めています。しかし、社会の高齢化も進行していきます。若い世代のケアがない場合、高齢者の生活は常に困難で危険です。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/fall.jpg)

毎年、65歳以上の人々のうち3分の1から半数が転倒を経験しています。転倒は高齢者の怪我の主な原因であり、75歳以上の人々における偶発的な死亡の主な原因です。転倒が気づかれない場合、その危険性は倍増します。初期の怪我の可能性がある場合、短期間で治療されないとさらなる結果を悪化させる可能性があります。統計によると、最も深刻な結果は転倒そのものではなく、援助や治療の遅れによるものです。救助者が迅速に通知されれば、転倒の結果を大幅に軽減することができます。

多くの高齢者は子供たちが成長して家を出た後、アパートや小さな家で一人暮らしをしています。転倒後、高齢者が自力で起き上がることができない、または助けを呼ぶことができないことは珍しくありません。そのため、患者が意識を失ったり、転倒後に起き上がれない場合でも助けを呼ぶことができる自動転倒検知システムが必要です。

## ハードウェア

-  [Grove - 3-Axis Digital Accelerometer (LIS3DHTR)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g.html) 
-  [Wio RP2040 mini Dev Board](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html) を使用してこのプロジェクトを完成させます。

[Grove - 3-Axis Digital Accelerometer (LIS3DHTR)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g.html) は転倒を検知するセンサーとして使用でき、[Wio RP2040 mini Dev Board](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html) はデータを処理し、無線で緊急情報を送信するために使用できます。さらに、コンピュータとWiFiが必要です。
​

### 配線図

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/wiring.jpg)
​

## [ソフトウェア](https://wiki.seeedstudio.com/ja/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/#software)
### 1. Thonnyのインストール
簡単に始められます。ThonnyにはPython 3.7が組み込まれているため、シンプルなインストーラーを1つダウンロードするだけでプログラミングを学ぶ準備が整います。まず、[Thonny.org](https://thonny.org/) をクリックしてダウンロードページにアクセスします。ページの右上隅で、使用しているオペレーティングシステムに応じたThonnyインストールパッケージを選択してダウンロードします。ダウンロードしたインストールパッケージをダブルクリックして開き、手順に従ってインストールします。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny1.jpg)

Thonnyをインストールしたら、アプリケーションを開きます。Thonnyのメインインターフェースが表示されるはずです：

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny2.jpg)
 Thonnyのメインインターフェースは非常にシンプルで、以下の4つの部分に分かれています：

1. ツールバー：新規作成、開く、保存、現在のスクリプトの実行、停止などの基本的なツール。

2. コードエディタ：Thonnyのコアエリアで、ここでPython/MicroPythonコードを記述します。

3. シェル：ここでコマンドを実行でき、コマンドの結果が即座にシェルに表示されます。また、コードの出力もシェルウィンドウで確認できます。

4. インタープリタ：プログラムをコンパイルするインタープリタの種類を選択できます。「Python 3.7.9」をクリックし、ポップアップメニューで「MicroPython (Raspberry pi Pico)」を見つけてクリックし、インタープリタをPicoインタープリタに切り替えます。また、「Tools>>>Options>>>Interpreter」をクリックして選択することもできます。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny3.jpg)

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny4.jpg)

### 2. Wio RP2040 mini Dev Boardを接続する

データケーブルを使用して開発ボードをコンピュータに接続し、ツールバーの「Restart backend」ボタンをクリックします。Wio RP2040がコンピュータに正常に接続されると、シェルにMicroPythonのバージョン情報とデバイス名が表示されます。

 ![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny5.jpg)

### 3. コード

3-Axis Digital Accelerometerを使用するためには、センサーのライブラリファイルをWio RP2040のメモリにインポートする必要があります。以下の手順で行います：
以下のコードをコピーし、新しいThonnyエディタウィンドウに貼り付けてから、開発ボードに保存し、「ACC_ Adxl345.py」という名前に変更します。
```python
from machine import I2C
import time

ADXL345_DEVICE = (0x53)

""" ------- レジスタ名 ------- """
ADXL345_DEVID           =0x00
ADXL345_RESERVED1       =0x01
ADXL345_THRESH_TAP      =0x1d
ADXL345_OFSX            =0x1e
ADXL345_OFSY            =0x1f
ADXL345_OFSZ            =0x20
ADXL345_DUR             =0x21
ADXL345_LATENT          =0x22
ADXL345_WINDOW          =0x23
ADXL345_THRESH_ACT      =0x24
ADXL345_THRESH_INACT    =0x25
ADXL345_TIME_INACT      =0x26
ADXL345_ACT_INACT_CTL   =0x27
ADXL345_THRESH_FF       =0x28
ADXL345_TIME_FF         =0x29
ADXL345_TAP_AXES        =0x2a
ADXL345_ACT_TAP_STATUS  =0x2b
ADXL345_BW_RATE         =0x2c
ADXL345_POWER_CTL       =0x2d
ADXL345_INT_ENABLE      =0x2e
ADXL345_INT_MAP         =0x2f
ADXL345_INT_SOURCE      =0x30
ADXL345_DATA_FORMAT     =0x31
ADXL345_DATAX0          =0x32
ADXL345_DATAX1          =0x33
ADXL345_DATAY0          =0x34
ADXL345_DATAY1          =0x35
ADXL345_DATAZ0          =0x36
ADXL345_DATAZ1          =0x37
ADXL345_FIFO_CTL        =0x38
ADXL345_FIFO_STATUS     =0x39

ADXL345_BW_1600         =0xF                 #  1111
ADXL345_BW_800          =0xE                 #  1110
ADXL345_BW_400          =0xD                 #  1101
ADXL345_BW_200          =0xC                 #  1100
ADXL345_BW_100          =0xB                 #  1011
ADXL345_BW_50           =0xA                 #  1010
ADXL345_BW_25           =0x9                 #  1001
ADXL345_BW_12           =0x8                 #  1000
ADXL345_BW_6            =0x7                 #  0111
ADXL345_BW_3            =0x6                 #  0110

"""
割り込みピン
INT1: 0
INT2: 1
"""
ADXL345_INT1_PIN            =0x00
ADXL345_INT2_PIN            =0x01

"""割り込みビット位置"""
ADXL345_INT_DATA_READY_BIT  =0x07
ADXL345_INT_SINGLE_TAP_BIT  =0x06
ADXL345_INT_DOUBLE_TAP_BIT  =0x05
ADXL345_INT_ACTIVITY_BIT    =0x04
ADXL345_INT_INACTIVITY_BIT  =0x03
ADXL345_INT_FREE_FALL_BIT   =0x02
ADXL345_INT_WATERMARK_BIT   =0x01
ADXL345_INT_OVERRUNY_BIT    =0x00

ADXL345_DATA_READY          =0x07
ADXL345_SINGLE_TAP          =0x06
ADXL345_DOUBLE_TAP          =0x05
ADXL345_ACTIVITY            =0x04
ADXL345_INACTIVITY          =0x03
ADXL345_FREE_FALL           =0x02
ADXL345_WATERMARK           =0x01
ADXL345_OVERRUNY            =0x00

ADXL345_OK                  =1                   #  エラーなし
ADXL345_ERROR               =0                   #  エラーが存在することを示す

ADXL345_NO_ERROR            =0                   #  初期状態
ADXL345_READ_ERROR          =1                   #  加速度計の読み取り問題
ADXL345_BAD_ARG             =2                   #  不適切なメソッド引数


class AccelerationAdxl345(object):

    def __init__(self, i2c, addr=ADXL345_DEVICE, drdy=None):
        self.i2c_device = i2c
        time.sleep(0.1)
        #self.rgbMatrixData = [0xFF]*64

    def read(self, reg_base, reg, buf):
        self.write(reg)
        time.sleep(.001)
        self.i2c_device.readfrom_into(59,buf)

    def write(self, buf=None):
        if buf is not None:
            self.i2c_device.writeto(ADXL345_DEVICE, buf)
        # i2c_device.writeto(0x58, bytearray([3,100,100,16,39]))

    def writeTo(self,address, val):
        dta_send = bytearray([address, val])
        self.write(dta_send)
    
    def readFrom(self, address, num):
        data_0 = address & 0xff
        dta_send = bytearray([data_0])
        self.write(dta_send)
        time.sleep(.001)
        result=self.i2c_device.readfrom(ADXL345_DEVICE, num)
        return result

    def setRegisterBit(self, regAdress,  bitPos,  state):  
        bytes=self.readFrom(regAdress, 1)
        for _b in bytes:
            value = int(_b)
        if (state):
            value |= (1 << bitPos)                 
        else:
            value &= ~(1 << bitPos)                   
        self.writeTo(regAdress, value)

    def acc_adxl345_init(self):
        #ADXL345をオンにする
        self.writeTo(ADXL345_POWER_CTL, 0)
        self.writeTo(ADXL345_POWER_CTL, 16)
        self.writeTo(ADXL345_POWER_CTL, 8)

        self.writeTo(ADXL345_THRESH_ACT, 75)
        self.writeTo(ADXL345_THRESH_INACT, 75)
        self.writeTo(ADXL345_TIME_INACT, 10)

        #この軸での活動の動きを確認 - 1 == オン; 0 == オフ
        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 6, 1)
        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 5, 1)
        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 4, 1)

        #この軸での非活動の動きを確認 - 1 == オン; 0 == オフ
        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 2, 1)
        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 1, 1)
        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 0, 1)

        self.setRegisterBit(ADXL345_TAP_AXES, 2, 0)
        self.setRegisterBit(ADXL345_TAP_AXES, 1, 0)
        self.setRegisterBit(ADXL345_TAP_AXES, 0, 0)

        #タップとダブルタップの基準値を設定 (0-255)
        #setTapThreshold(50); # 62.5mg per increment
        self.writeTo(ADXL345_THRESH_TAP, 50)

        self.writeTo(ADXL345_DUR, 15)

        self.writeTo(ADXL345_LATENT, 80)

        #setDoubleTapWindow(200); # 1.25ms per increment
        self.writeTo(ADXL345_WINDOW, 200)

        #自由落下とみなされる基準値を設定 (0-255)

        self.writeTo(ADXL345_THRESH_FF, 7)

        self.writeTo(ADXL345_TIME_FF, 45)
        #すべての割り込みをint pin 1で行うよう設定
        #int pin 2で問題が発生し、リセットできなかった

        self.setRegisterBit(ADXL345_INT_MAP, ADXL345_INT_SINGLE_TAP_BIT,   ADXL345_INT1_PIN)
        self.setRegisterBit(ADXL345_INT_MAP, ADXL345_INT_DOUBLE_TAP_BIT,   ADXL345_INT1_PIN)
        self.setRegisterBit(ADXL345_INT_MAP, ADXL345_INT_FREE_FALL_BIT,    ADXL345_INT1_PIN)
        self.setRegisterBit(ADXL345_INT_MAP, ADXL345_INT_ACTIVITY_BIT,     ADXL345_INT1_PIN)
        self.setRegisterBit(ADXL345_INT_MAP, ADXL345_INT_INACTIVITY_BIT,   ADXL345_INT1_PIN)

        #割り込み動作を登録 - 1 == オン; 0 == オフ
        self.setRegisterBit(ADXL345_INT_ENABLE, ADXL345_INT_SINGLE_TAP_BIT, 1)
        self.setRegisterBit(ADXL345_INT_ENABLE, ADXL345_INT_DOUBLE_TAP_BIT, 1)
        self.setRegisterBit(ADXL345_INT_ENABLE, ADXL345_INT_FREE_FALL_BIT,  1)
        self.setRegisterBit(ADXL345_INT_ENABLE, ADXL345_INT_ACTIVITY_BIT,   1)
        self.setRegisterBit(ADXL345_INT_ENABLE, ADXL345_INT_INACTIVITY_BIT, 1)

    def acc_adxl345_read_xyz(self):
        ADXL345_TO_READ = (6)
        _buff = self.readFrom(ADXL345_DATAX0, ADXL345_TO_READ) #ADXL345から加速度データを読み取る
        if _buff[1] <= 0:
            x=_buff[0]
        else:
            x=(_buff[0]-255)

        if _buff[3] <= 0:
            y=_buff[2]
        else:
            y=(_buff[2]-255)

        if _buff[5] <= 0:
            z=_buff[4]
        else:
            z=(_buff[4]-255)

        #x = int(((_buff[1]) << 8) | _buff[0]) 
        #y = int(((_buff[3]) << 8) | _buff[2]) 
        #z = int(((_buff[5]) << 8) | _buff[4]) 

        #print("%d, %d, %d\r\n", x, y, z) 
        return [x,y,z]

    def acc_adxl345_read_acc(self):
        __Gains = [0.00376390, 0.00376009, 0.00389265]
        xyz=self.acc_adxl345_read_xyz()

        ax = xyz[0] * __Gains[0]
        ay = xyz[1] * __Gains[1]
        az = xyz[2] * __Gains[2]
        return [ax,ay,az]

    def get_acc_adxl345_property(self,xyz):
        axyz=self.acc_adxl345_read_acc()
        if(xyz == 0):
            return axyz[0]
        if(xyz == 1):
            return axyz[1]
        if(xyz == 2):
            return axyz[2]

"""
acceleration = AccelerationAdxl345()
acceleration.acc_adxl345_init()
acceleration.get_acc_adxl345_property(0)
acceleration.get_acc_adxl345_property(1)
acceleration.get_acc_adxl345_property(2)
"""

```

次に、新しいプログラムウィンドウを作成して以下のコードを書きます。
```python
import network
import mqtt
from Acc_Adxl345 import AccelerationAdxl345
from machine import Pin,I2C
from time import sleep
i2c = I2C(0,sda = Pin(4),scl= Pin(5))
ax = AccelerationAdxl345(i2c)
ax.acc_adxl345_init()

N1 = network.WLAN_SPI(network.STA_IF)
N1.active(True)
N1.connect("CHCK","depot0510")
sleep(1)
print('ネットワーク情報:', N1.ifconfig())
led = Pin(13, Pin.OUT)
button = Pin(12,Pin.IN,Pin.PULL_UP)
led.value(1)

SERVER = 'mqtt.p2hp.com'
CLIENT_ID = 'Wio_RP2040'
TOPIC = 'Security_status'

def mqtt_callback(topic):
    print('トピック: {}'.format(topic[0]))
    print('メッセージ:{}'.format(topic[1]))
    
cl = mqtt.MQTTClient(CLIENT_ID, SERVER, mqtt_port = 1883)
cl.connect()
cl.set_callback(mqtt_callback)

val_last = 1
print("準備完了")
cl.publish(TOPIC,"準備完了")

while True:
    a = ax.acc_adxl345_read_acc()
    b = ax.acc_adxl345_read_acc()
    for i in range(0,3):
        a[0] = a[i] * a[i]
        b[0] = b[i] * b[i]
    if a[0] - b[0] > 0.4 or b[0] - a[0] > 0.4:
        cl.publish(TOPIC,"助けて！")
```
**プログラムの12行目で、正しいWiFi名とパスワードに変更してください。**
**​**

### 4.MQTTクライアントの設定
MQTTは、クライアントサーバー型のパブリッシュ/サブスクライブ型メッセージングトランスポートプロトコルです。クライアントはパブリッシャーまたはサブスクライバー、またはその両方として動作できます。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt1.jpg)

パブリッシャーは、トピックとそのトピックに関連付けられたメッセージを作成できます。例えば、新しいトピック「今日の天気」を作成し、メッセージ内容を「25度」としてサーバーに送信することができます。サーバーがトピックメッセージを受信すると、パブリッシャーはそのトピックを購読しているクライアントに情報を配信します。つまり、サブスクライバーは「今日の天気」というトピックを購読している場合のみ「25度」というメッセージを受信します。「今日の天気」というトピックを購読していない場合、パブリッシャーがどんなメッセージを送信しても、サブスクライバーはそのメッセージを受信しません。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt2.jpg)

MQTTXサーバーソフトウェアをダウンロードしてコンピュータにインストールし、MQTTサーバーを設定します。

---

このプロジェクトでは、無料の「mqtt.p2hp.com」サーバーを使用します。**オンラインサーバー**

- アドレス: mqtt.p2hp.com
- ポート: 1883 (TCP), 8083 (WebSocket)
- タイプ: EMQ
- MQTT V3.1.1/V5.0互換

---

MQTTXソフトウェアに入り、新しい接続を作成します。名前、サーバー、ポート、トピックを入力し、「接続」をクリックしてサーバーに接続します。
![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt3.jpg)

接続が成功すると、ソフトウェアの右上にポップアップが表示されます。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt4.jpg)

次に、以下でトピックとメッセージを設定します。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt5.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt6.jpg)

データが受信されると、メッセージ数が上部に表示されます。メッセージが表示されない場合は、購読トピックをクリックしてください。
![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt7.jpg)

これでMQTTクライアントの展開が完了しました。Thornyエディタに戻りコードを実行し、3軸デジタル加速度計を高い場所から落として、MQTTクライアントがメッセージを受信したかどうかを観察します。

<iframe width="560" height="315" src="https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/show.mp4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt8.jpg)

## インストールとテスト

メッセージを正常に受信できた場合、おめでとうございます。ほとんどの作業が完了しました。次に、バッテリーを開発ボードに接続し、デバイスを5cm * 5cmの段ボールに固定するだけです。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/sample.jpg)

最後に、それを布製のポケットに入れます。このシンプルな転倒検知デバイスが完成です！現時点では、このプロジェクトは単なる簡単な実験的プロトタイプです。実際の使用では誤検知が発生する可能性があります。フィードバックをいただければ、このプロジェクトを一緒に最適化していきます。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/device.jpg)

## 技術サポートと製品ディスカッション

技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社の製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>