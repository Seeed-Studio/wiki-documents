---
description: reTerminal E10-1
title: reTerminal E10-1
keywords:
  - Edge
  - reTerminal Extension_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminalBridge
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# **reTerminal E10-1 の使い方**

### **必要な材料**

| reTerminal | reTerminal E10-1 |
|--------------|--------------|
|<div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/ReTerminal/wiki_thumb.png" /></div>|<div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reterminale10overviewnew.jpeg" /></div>
|[**今すぐ購入**](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)|[**今すぐ購入**](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html)|

### **事前準備**

#### **接続**

向きを確認し、reTerminal を reTerminal E10-1 に取り付け、しっかりと固定してください。この時点で reTerminal E10-1 に電源が入っている場合、reTerminal は起動してシステムに入ります。reTerminal について詳しく知りたい場合は、[**reTerminal**](https://wiki.seeedstudio.com/ja/reTerminal/) をクリックしてください。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image3.png"/></div>

#### **取り付けと取り外し**

reTerminal E10-1 を使用する際、周辺機器を追加するためにケースを取り外す必要がある場合があります。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image002.png"/></div>

#### **ドライバのインストール**

reTerminal が reTerminal E10-1 の機能を使用するには、開始前に reTerminal 用のドライバをインストールする必要があります。reTerminal のターミナルウィンドウで以下のコマンドを実行してください。

```sh
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays.git
cd seeed-linux-dtoverlays
sudo ./scripts/reTerminal.sh
```
:::note
**32bit OS** を使用している場合は、`sudo ./scripts/reTerminal.sh` を実行する前に以下の手順を追加する必要があります。

```
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```
:::

インストールが完了したら、マシンを再起動してください。その後、以下のコマンドを使用して `reTerminal-bridge.dtbo` ファイルが存在するか確認し、ドライバのインストールが完了していることを確認してください。

```sh
ls /boot/overlays/reTerminal-bridge.dtbo
```

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image1.jpg"/></div>

#### **ライブラリのインストール**

Python3 ライブラリをインストールします。

```sh
sudo apt-get update
sudo apt-get install python3-pip
sudo pip3 install RPi.GPIO
sudo apt-get install python3-serial
```

Git ライブラリをインストールします。

```sh
sudo apt install -y git
```

### **電源供給**

以下の3つの方法で電源を供給できます：

- DCジャック
- PoE
- UPS - 18650バッテリー

このデバイス用のバッテリーは NCR18650B 充電式リチウムイオンバッテリーです。パッケージにはバッテリーが含まれていないため、通常のコンビニエンスストアで購入し、ユーザー自身で準備する必要があります。推奨されるバッテリーは Panasonic NCR18650B 3.6V 3400mAh です。

#### **DCジャック**

DC 12V @4A で reTerminal、拡張ボード、およびバッテリーに電源を供給します。

#### **PoE**

PoE 電源入力は RJ45 で、最大 25W の電力入力をサポートします。

#### **UPS - 18650バッテリー**

固定ピン付きのバッテリーホルダーが2つあります。

### **ファン**

**必要な材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- ファン（付属） x1

高負荷時に reTerminal と reTerminal E10-1 を通常の温度レベルに保つために、reTerminal E10-1 内部には 3ピンファンが搭載されています。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image29.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image031.jpg"/></div>

以下は、reTerminal E10-1 上のファンを制御する方法の例です。

**ステップ 1.** 以下のコマンドでファンスイッチを直接制御できます。

```sh
# ファンをオンにする
raspi-gpio set 23 op pn dh

# ファンをオフにする
raspi-gpio set 23 op pn dl
```

**ステップ 2.** CPU の温度を検出してファンを有効化または無効化することもできます。以下の手順に従ってプログラムをダウンロードして実行してください。

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_Fan_control.git
cd Seeed_reTerminal_Bridge_Fan_control/
sudo python3 fan.py
```

以下は参考用の **fan.py** コードです。

```python
import sys 
import time
try:
 import RPi.GPIO as GPIO 
except RuntimeError:
 print("Error importing Rpi.GPIO")

MAX_TEMP = 40.0
MIN_TEMP = 20.0
 
def cpu_temp():
 f = open("/sys/class/thermal/thermal_zone0/temp",'r') 
 return float(f.read())/1000
 
def main():
 channel = 23
 GPIO.setmode(GPIO.BCM)
 
 # 初期状態で23をオフに設定
 GPIO.setup(channel,GPIO.OUT,initial=GPIO.LOW)
 is_close = True
 while 1:
  temp = cpu_temp()
  if is_close:
   if temp > MAX_TEMP:
    GPIO.output(channel,GPIO.HIGH)
    is_close = False
  else:
   if temp < MIN_TEMP:
    GPIO.output(channel,GPIO.LOW)
    is_close = True
  time.sleep(2.0)
  GPIO.setwarnings(False) 
 
if __name__ == '__main__':
 main() 
```

コードが正常に実行されると、CPU 温度が 40°C を超えた場合にファンがオンになり、20°C 未満になった場合にファンがオフになります。

### **CAN 通信**

コントローラエリアネットワーク（CAN）は、ホストコンピュータを使用せずにマイクロコントローラやデバイスが互いのアプリケーションと通信できるように設計された堅牢な車載バス標準です。

**必要な材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x2
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x2
- オス-オスケーブル x2

以下は、reTerminal E10-1 上で CAN を使用する方法の例です。

**ステップ 1.** オス-オスケーブルを使用して、CAN インターフェースを介して2つの reTerminal E10-1 を接続します。

H -> H  
L -> L  
GND -> GND  

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/can.jpg"/></div>

**ステップ 2.** 2台の reTerminal に対して **CAN-utils** を個別にインストールします。

```sh
sudo apt install can-utils
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image4.jpg"/></div>

CAN-utils は、CANインターフェースを使用して非常に便利なデバッグツールのコレクションです。以下のようなアプリケーションが含まれています：

- candump – CANパケットのダンプ – 表示、フィルタリング、ディスクへのログ記録。
- canplayer – CANログファイルの再生。
- cansend – 単一フレームの送信。
- cangen – ランダムなトラフィックの生成。
- canbusload – 現在のCANバス利用率の表示。

CAN-utils のソースコードは [GitHubリポジトリ](https://github.com/linux-can/can-utils) から取得できます。

**ステップ 3.** 2台の reTerminal に対して設定情報を追加します。エディタで **/boot/config.txt** ファイルを開き、最後に `dtoverlay=seeed-can-fd-hat-v2` を追加して保存し、reTerminal を再起動します。

:::note
「ハット」にID EEPROMがない場合、LinuxカーネルはSPIインターフェース上のCANコントローラを自動的に検出しません。適切なドライバをロードするには、起動時にデバイスツリーオーバーレイ設定を指定する必要があります。
:::

```sh
sudo nano /boot/config.txt
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image5.jpg"/></div>

**ステップ 4.** CANインターフェースはネットワークインターフェースと同様に動作します。```ifconfig -a```（インターフェース設定）を使用してさまざまな統計情報を取得できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image6.jpg"/></div>

ランダムデータを送信してCAN通信が正常に動作するかテストするには、`cangen can0 -v` コマンドを使用します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image7.jpg"/></div>

**ステップ 5.** CANインターフェースを手動で起動するには、以下のコマンドを使用します：

```sh
sudo ip link set can0 up type can bitrate 500000
```

**ステップ 6.** [コード](https://github.com/limengdu/Seeed_reTerminal_Bridge_CAN_exmaple) を reTerminal にダウンロードします。

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_CAN_exmaple
```

1台の reTerminal でデータを送信するコードをコンパイルして実行します。

```sh
cd Seeed_reTerminal_Bridge_CAN_exmaple/
gcc cantransmit.c -o cantransmit
```

以下は参考用の **cantransmit.c** コードです。

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#include <net/if.h>
#include <sys/ioctl.h>
#include <sys/socket.h>

#include <linux/can.h>
#include <linux/can/raw.h>

int main(int argc, char **argv)
{
 int s; 
 struct sockaddr_can addr;
 struct ifreq ifr;
 struct can_frame frame;

 printf("CAN Sockets Demo\r\n");

 if ((s = socket(PF_CAN, SOCK_RAW, CAN_RAW)) < 0) {
  perror("Socket");
  return 1;
 }

 strcpy(ifr.ifr_name, "can0" );
 ioctl(s, SIOCGIFINDEX, &ifr);

 memset(&addr, 0, sizeof(addr));
 addr.can_family = AF_CAN;
 addr.can_ifindex = ifr.ifr_ifindex;

 if (bind(s, (struct sockaddr *)&addr, sizeof(addr)) < 0) {
  perror("Bind");
  return 1;
 }

 frame.can_id = 0x555;
 frame.can_dlc = 5;
 sprintf(frame.data, "Hello");

 if (write(s, &frame, sizeof(struct can_frame)) != sizeof(struct can_frame)) {
  perror("Write");
  return 1;
 }

 if (close(s) < 0) {
  perror("Close");
  return 1;
 }

 return 0;
}
```

もう1台の reTerminal でデータを受信するコードをコンパイルして実行します。

```sh
gcc canreceive.c -o canreceive
```

以下は参考用の **canreceive.c** コードです。

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#include <net/if.h>
#include <sys/ioctl.h>
#include <sys/socket.h>

#include <linux/can.h>
#include <linux/can/raw.h>

int main(int argc, char **argv)
{
 int s, i; 
 int nbytes;
 struct sockaddr_can addr;
 struct ifreq ifr;
 struct can_frame frame;

 printf("CAN Sockets Receive Demo\r\n");

 if ((s = socket(PF_CAN, SOCK_RAW, CAN_RAW)) < 0) {
  perror("Socket");
  return 1;
 }

 strcpy(ifr.ifr_name, "can0" );
 ioctl(s, SIOCGIFINDEX, &ifr);

 memset(&addr, 0, sizeof(addr));
 addr.can_family = AF_CAN;
 addr.can_ifindex = ifr.ifr_ifindex;

 if (bind(s, (struct sockaddr *)&addr, sizeof(addr)) < 0) {
  perror("Bind");
  return 1;
 }

 nbytes = read(s, &frame, sizeof(struct can_frame));

  if (nbytes < 0) {
  perror("Read");
  return 1;
 }

 printf("0x%03X [%d] ",frame.can_id, frame.can_dlc);

 for (i = 0; i < frame.can_dlc; i++)
  printf("%02X ",frame.data[i]);

 printf("\r\n");

 if (close(s) < 0) {
  perror("Close");
  return 1;
 }

 return 0;
}
```

2台の reTerminal がCANインターフェースを介してデータを正常に送受信する様子が確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image8.jpg"/></div>

データを読み取るだけでなく、関連性のないCANフレームをフィルタリングしたい場合があります。これはドライバレベルで行われ、ユーザーモードアプリケーションで各フレームを読み取るよりも効率的です。

```sh
gcc canfilter.c -o canfilter
```

以下は参考用の **canfilter.c** コードです。

```c

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#include <net/if.h>
#include <sys/ioctl.h>
#include <sys/socket.h>

#include <linux/can.h>
#include <linux/can/raw.h>

int main(int argc, char **argv)
{
 int s, i; 
 int nbytes;
 struct sockaddr_can addr;
 struct ifreq ifr;
 struct can_frame frame;

 printf("CAN Sockets Receive Filter Demo\r\n");

 if ((s = socket(PF_CAN, SOCK_RAW, CAN_RAW)) < 0) {
  perror("Socket");
  return 1;
 }

 strcpy(ifr.ifr_name, "can0" );
 ioctl(s, SIOCGIFINDEX, &ifr);

 memset(&addr, 0, sizeof(addr));
 addr.can_family = AF_CAN;
 addr.can_ifindex = ifr.ifr_ifindex;

 if (bind(s, (struct sockaddr *)&addr, sizeof(addr)) < 0) {
  perror("Bind");
  return 1;
 }

 /*
 フィルタを設定するには、単一の can_filter 構造体または構造体の配列を初期化し、
 can_id と can_mask を設定します。次に setsockopt() を呼び出します：
 */
 struct can_filter rfilter[1];

 rfilter[0].can_id   = 0x550;
 rfilter[0].can_mask = 0xFF0;
 //rfilter[1].can_id   = 0x200;
 //rfilter[1].can_mask = 0x700;

 setsockopt(s, SOL_CAN_RAW, CAN_RAW_FILTER, &rfilter, sizeof(rfilter));

 nbytes = read(s, &frame, sizeof(struct can_frame));

 if (nbytes < 0) {
  perror("Read");
  return 1;
 }

 printf("0x%03X [%d] ",frame.can_id, frame.can_dlc);

 for (i = 0; i < frame.can_dlc; i++)
  printf("%02X ",frame.data[i]);

 printf("\r\n");

 // 最後に、ソケットが不要になった場合は閉じます：
 if (close(s) < 0) {
  perror("Close");
  return 1;
 }

 return 0;
}
```

:::note
ほとんどのCANコントローラーには、シリコン（ハードウェア）に受信フィルターとマスクが含まれています。残念ながら、現在のアーキテクチャではカーネル内でフィルタリングを行っており、最適ではありませんが、それでもすべてのフレームをユーザーモードアプリに渡すよりは優れています。
:::

### **RS485通信**

RS485（TIA-485(-A)またはEIA-485としても知られる）は、シリアル通信システムで使用されるドライバーとレシーバーの電気的特性を定義する標準です。電気信号はバランスされており、マルチポイントシステムがサポートされています。この標準を実装したデジタル通信ネットワークは、長距離や電気的にノイズの多い環境でも効果的に使用できます。このようなネットワークには、複数のレシーバーを直線的なマルチドロップバスに接続することができます。

**必要な材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- [USB To RS485 Industrial Isolated Converter](https://www.seeedstudio.com/USB-TO-RS232--RS485--TTL-Industrial-Isolated-Converter-p-3231.html) とケーブル

この例では、reTerminal E10-1でRS485を使用する方法を紹介します。

**ステップ1.** RS485機能はttyS0を使用するため、開始する前にttyS0のシステムインタラクション機能を無効にする必要があります。

```sh
sudo raspi-config
```

**Interface Options**、**Serial port**を順に選択します。

次の画面で、シリアル経由でログインシェルを使用するかどうかを尋ねられますので、**No**を選択します。

その後、「シリアルポートハードウェアを使用しますか？」という質問に対して、**Yes**が選択されていることを確認してください。

reTerminalが変更を加えた後、以下のテキストが画面に表示されます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image9.jpg"/></div>

**ステップ2.** ケーブルを使用して、reTerminal E10-1をRS485インターフェースを介してコンピュータに接続します。

A -> A  
B -> B  
GND -> GND  

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/rs485.jpg"/></div>

**ステップ3.** コマンド `dmesg | grep tty` を使用してシリアルポート名を確認します。コンピュータとのRS485通信に使用するシリアルポート名を特定します。これはコンピュータによって異なる場合があります。一般的には**ttyS0**です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image10.png"/></div>

**ステップ4.** [コード](https://github.com/limengdu/Seeed_reTerminal_Bridge_RS485_exmaple)をreTerminalにダウンロードします。

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_RS485_exmaple
cd Seeed_reTerminal_Bridge_RS485_exmaple/
```

コンピュータ上でシリアルポートソフトウェアを開きます。コマンド `sudo python3 rs485.py` を実行して、以下のような効果を得ます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image11.png"/></div>

同時に、メッセージを受信してから5秒以内にシリアルポートアシスタントを通じてreTerminalに16バイトのデータを送信することもできます。

以下は参考用の**rs485.py**コードです。

```c
import serial, time
try:
    import RPi.GPIO as GPIO
except RuntimeError:
    print("Rpi.GPIOのインポートエラー")

GPIO.setmode(GPIO.BCM)

ser = serial.Serial()
ser.port = "/dev/ttyS0"
channel1 = 25
channel2 = 17

#9600,N,8,1
ser.baudrate = 9600
ser.bytesize = serial.EIGHTBITS    # 1バイトあたりのビット数
ser.parity = serial.PARITY_NONE    # パリティチェックの設定
ser.stopbits = serial.STOPBITS_ONE # ストップビットの数

ser.timeout = 0.5                  # 非ブロック読み取り 0.5秒
ser.writeTimeout = 0.5             # 書き込みタイムアウト 0.5秒
ser.xonxoff = False                # ソフトウェアフロー制御を無効化
ser.rtscts = False                 # ハードウェア(RTS/CTS)フロー制御を無効化
ser.dsrdtr = False                 # ハードウェア(DSR/DTR)フロー制御を無効化

GPIO.setup(channel1,GPIO.OUT,initial=GPIO.LOW)
GPIO.setup(channel2,GPIO.OUT,initial=GPIO.LOW)

try:
    ser.open()
except Exception as ex:
    print ("シリアルポートのオープンエラー " + str(ex))
    exit()

if ser.isOpen():
    try:
        ser.flushInput() # 入力バッファをフラッシュ
        ser.flushOutput() # 出力バッファをフラッシュ
        GPIO.output(channel1,GPIO.HIGH)
        GPIO.output(channel2,GPIO.HIGH)
        time.sleep(0.1)
        # データを書き込む
        ser.write("RS485通信が開始されました。データを送信してみてください...\n".encode())
        print("送信成功\n")
        GPIO.output(channel2,GPIO.LOW)
        time.sleep(5)  # 5秒待機
        # データを読み取る
        response = ser.read(16)
        print("16バイトのデータを読み取り:")
        print(response)
        ser.close()
    except Exception as e1:
        print ("通信エラー " + str(e1))
else:
    print ("シリアルポートのオープンエラー")
```

### **RS232通信**

RS-232（Recommended Standard 232）は、データのシリアル通信伝送のために1960年に最初に導入された標準です。この標準は、DTEとDCE間の信号を正式に定義します。RS-422、RS-485、Ethernetなどの後のインターフェースと比較して、RS-232は伝送速度が低く、最大ケーブル長が短く、電圧変動が大きく、標準コネクタが大きく、マルチポイント機能がなく、マルチドロップ機能が制限されています。

**必要な材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- [USB To RS232 Industrial Isolated Converter](https://www.seeedstudio.com/USB-TO-RS232--RS485--TTL-Industrial-Isolated-Converter-p-3231.html) とケーブル

この例では、reTerminal E10-1でRS232を使用する方法を紹介します。

**ステップ1.** RS485機能はttyS0を使用するため、開始する前にttyS0のシステムインタラクション機能を無効にする必要があります。

```sh
sudo raspi-config
```

**Interface Options**、**Serial port**を順に選択します。

次の画面で、シリアル経由でログインシェルを使用するかどうかを尋ねられますので、**No**を選択します。

その後、「シリアルポートハードウェアを使用しますか？」という質問に対して、**Yes**が選択されていることを確認してください。

reTerminalが変更を加えた後、以下のテキストが画面に表示されます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image9.jpg"/></div>

**ステップ 2.** ケーブルを使用して、reTerminal E10-1をRS232インターフェース経由でコンピュータに接続します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/rs232.jpg"/></div>

**ステップ 3.** コマンド `dmesg | grep tty` を使用してシリアルポート名を確認します。コンピュータとのRS232通信に使用するシリアルポート名を特定します。この名前はコンピュータによって異なる場合があります。一般的には **ttyS0** です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image12.jpg"/></div>

**ステップ 4.** [コード](https://github.com/limengdu/Seeed_reTerminal_Bridge_RS232_exmaple) をreTerminalにダウンロードします。

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_RS232_exmaple
cd Seeed_reTerminal_Bridge_RS232_exmaple/
```

1つのreTerminalでデータを送信するコードをコンパイルして実行します。

```sh
sudo python3 rs232_send.py
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image13.jpg"/></div>

以下は参考用の **rs232_send.py** コードです。

```python
#!/usr/bin/env python
import time
import serial

ser = serial.Serial(
        port='/dev/ttyS0',              # reTerminalで表示されるシリアルポート名に応じてここを修正してください
        baudrate = 9600,
        parity=serial.PARITY_NONE,
        stopbits=serial.STOPBITS_ONE,
        bytesize=serial.EIGHTBITS,
        timeout=1
)
counter=0
try:
        print("rs232が今開始されます！\n")
        ser.write("rs232が今開始されます！\n".encode())
        while 1:
                ser.write(("カウンターを書き込み:{}\n".format(counter)).encode())
                time.sleep(1)
                counter += 1
except KeyboardInterrupt:
    exit()
```

もう1つのreTerminalでデータを受信するコードをコンパイルして実行します。

```sh
sudo python3 rs232_receive.py
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image14.jpg"/></div>

以下は参考用の **rs232_receive.py** コードです。

```python
#!/usr/bin/env python
import time
import serial

ser = serial.Serial(
        port='/dev/ttyS0',
        baudrate = 9600,
        parity=serial.PARITY_NONE,
        stopbits=serial.STOPBITS_ONE,
        bytesize=serial.EIGHTBITS,
        timeout=1
)
try:
    print("データ受信を今開始します！\n")
    while 1:
            x=ser.readline()
            if x != b'':
                print(x)
except KeyboardInterrupt:
        exit()
```

### **イーサネット**

**必要な材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1

この例では、reTerminal E10-1でイーサネット接続をテストする方法を紹介します。

**ステップ 1.** reTerminalとコンピュータに**iperf3**をダウンロードします。

```sh
git clone https://github.com/esnet/iperf.git
```

**ステップ 2.** 以下のコードを使用して**iperf3**をインストールします。

```
cd iperf
sudo ./configure
sudo make
sudo make install
```

**ステップ 3.** reTerminalをサーバーとして使用します。

```sh
iperf3 -s
```

コンピュータを使用してreTerminalに接続されたネットワーク速度をテストします。この時点で、コンピュータとreTerminalを同じローカルエリアネットワーク内に保持してください。

```sh
iperf3 -c 192.168.xxx.xxx
```

*上記のアドレス "192.168.xxx.xxx" はreTerminalのアドレスです。*

例えば、私のセットアップではreTerminalのIPアドレスは ```192.168.31.187``` です：

```sh
iperf3 -c 192.168.31.187
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image17.jpg"/></div>

より多くのネットワークテスト機能を完了する必要がある場合は、[iperf](https://github.com/esnet/iperf)プロジェクトウェブサイトでクエリパラメータの使用を参照してください。

### **WM1302 (USB/SPI) LoRaWAN ゲートウェイ**

**必要な材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- [WM1302 LoRaWAN ゲートウェイモジュール (USB/SPI) US/EU](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-EU868-p-4892.html) x1

USBモジュールとSPIモジュールの違いは以下の通りです：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa.png"/></div>

この例では、reTerminal E10-1でWM1302 LoRaWAN ゲートウェイを使用する方法を紹介します。

**ステップ 1.** WM1302モジュールをreTerminal E10-1に取り付け、ネジで固定します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/039.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image18.jpg"/></div>

次に、ファンの横にあるボタンをPCIEに切り替えます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/045.jpg"/></div>

**ステップ 2.** コマンドラインで `sudo raspi-config` を入力してRaspberry Piソフトウェア構成ツールを開きます：

- インターフェースオプションを選択
- SPIを選択し、**Yes** を選択して有効にします
- I2Cを選択し、**Yes** を選択して有効にします
- シリアルポートを選択し、「ログインシェルを使用しますか...」に対して**No**を選択し、「シリアルポートハードウェアを使用しますか...」に対して**Yes**を選択します

これが完了したら、これらの設定が有効になるようにRaspberry Piを再起動してください。

**ステップ 3.** [WM1302コード](https://github.com/Lora-net/sx1302_hal) をreTerminalにダウンロードしてコンパイルします。

```sh
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo make
```

**ステップ 4.** リセットスクリプトを構成します。まず、以下のコマンドを使用してファイルを **sx1302_hal/packet_forwarder** にダウンロードします。

```
cd sx1302_hal/packet_forwarder
wget https://files.seeedstudio.com/wiki/reTerminal_Bridge/reset_lgw.sh
```

次に、WM1302のバージョンに応じて以下のコードを実行してテストします。

```sh
USBバージョン
$ cd packet_forwarder
$ ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

```sh
SPIバージョン
$ cd packet_forwarder
$ ./lora_pkt_fwd -c global_conf.json.sx1250.EU868
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image20.jpg"/></div>

**ステップ 5.** [TTNウェブサイト](https://www.thethingsnetwork.org/)にサインアップし、アカウントにログインします。アカウントをお持ちでない場合は登録してください。その後、ゲートウェイインターフェースに入り、「Get Starting」をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa1.png"/></div>

地域を選択します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa2.png"/></div>

「Go to gateways」を選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa3.png"/></div>

**Add gateway**をクリックしてデバイスを追加します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image22.jpg"/></div>

その中で、**Gateway EUI**の値は**ステップ 4**でテストを実行した際にログに表示されます。LoRaオプションの周波数プラン（例としてヨーロッパ版を使用）では、**Europe 863-870 MHz (SF9 for RX2 - recommended)**を選択します。その後、**Create gateway**をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image23.jpg"/></div>

**ステップ 6.** （例としてヨーロッパ版を使用）
SPIバージョンの場合、**sx1302_hal/packet_forwarder**内の**global_conf.json.sx1250.EU868**を編集します。

USBバージョンの場合、**sx1302_hal/packet_forwarder**内の**global_conf.json.sx1250.EU868.USB**を編集します。

対応するファイル内で**gateway_conf**を検索します。

- その後、ウェブページに入力した**Gateway EUI**に基づいて**gateway_ID**を変更します。
- **server_address**をウェブページの**Gateway Server address**に変更します。
- **serv_port_up**と**serv_port_down**の両方を**1700**に変更します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image24.jpg"/></div>

**ステップ 7.** **ステップ 4**のコマンドを再度実行し、その後ウェブページでデバイスの接続情報を確認できます。

```sh
USBバージョン
$ ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

```sh
SPIバージョン
$ ./lora_pkt_fwd -c global_conf.json.sx1250.EU868
```

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image25.jpg"/></div>

:::note
上記のチュートリアルはヨーロッパ版WM1302に基づいています。WM1302の米国版を使用している場合、手順は基本的に同じですが、チュートリアルで変更および実行するファイルが異なります。ファイル名は購入したバージョンと[以下のページ](https://github.com/Lora-net/sx1302_hal/tree/master/packet_forwarder)を参照してください。
:::

### **ハードドライブ拡張**

**必要な材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- M.2 Bキーコネクタ x1

この例では、reTerminal E10-1にハードディスクをインストールし、動作を確認する方法を紹介します。

**ステップ 1.** reTerminal E10-1の背面カバーを開け、M.2 SSDをMini-PCIeコネクタに挿入し、ネジで固定します。背面カバーを閉じ、reTerminalを接続して電源を入れます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/040.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image26.jpg"/></div>

その後、ファンの横にあるボタンをM.2に切り替えます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/046.jpg"/></div>

**ステップ 2.** SSDストレージデバイスが検出されているか確認するためにコマンドを入力します。

```sh
sudo fdisk -l
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/025.png"/></div>

**ステップ 3.** ddコマンドを使用してハードドライブの読み取りおよび書き込み速度をテストすることもできます。

```sh
読み取り
$ sudo dd if=/dev/sda3 of=/dev/null bs=512k count=500
```

```sh
書き込み
$ sudo dd if=/dev/zero of=/dev/sda3 bs=512k count=500
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/28.jpg"/></div>

:::note
M.2 Bキーを使用していることを確認してください。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/add_pic_1.png"/></div>
:::

#### ハードドライブのフォーマット

:::caution
以下の手順は、reTerminal E10-1に接続したSSDのすべてのデータを消去します。また、誤ったドライブメディアを選択した場合にもデータが失われる可能性があるため、以下の手順を慎重に実行し、各ステップの目的を十分に理解してください。
:::

- **使用するソフトウェアツール**: ```lsblk```, ```fdisk```, ```mkfs```, ```mount```, ```umount```

**ステップ 1.** SSDデバイス名を確認する
SSDをreTerminal E10-1に接続し、reTerminalに取り付けた後、システムが起動したらターミナルを開き、以下のコマンドを入力します。

```sh
lsblk
```

以下のような出力が表示されるはずです。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsblk.png"/></div>

**ステップ 2.** fdiskを使用してSSDをパーティション分割する

:::caution
このステップを実行すると、reTerminal E10-1に接続したSSDのデータが失われます。
:::

上記の手順に続いて、ターミナルで以下のコマンドを入力します。/dev/**sdX**の**X**はフォーマットするSSDデバイス名を指します。reTerminalに他のUSBドライブが接続されていないことを確認してください。正しいデバイス名に自信がある場合を除きます。

```sh
sudo fdisk /dev/sdX
```

例えば、私の場合は以下のようになります。

```sh
sudo fdisk /dev/sda
```

以下のような出力が表示されるはずです。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/fdisk.png"/></div>

fdiskプロンプトで以下を入力します。

```bash
Welcome to fdisk (util-linux 2.36.1).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.


Command (m for help):
```

まず、SSDデバイス上のパーティションを削除するために**```d```**を入力します。

次に、SSDデバイス上に新しいパーティションを作成するために**```n```**を入力します。

その後、以下のメッセージが表示されるはずです。

```sh
Partition type
   p   primary (0 primary, 0 extended, 4 free)
   e   extended (container for logical partitions)
```

**```p```** を入力してプライマリパーティションを作成し、その後に **```1```** を入力します。

次に、最初のセクタについては、ドライブの開始セクタをデフォルトで使用する場合は **ENTER** を押すか、SSDのパーティション1を開始する特定のセクタ位置を指定することもできます。私の場合、デフォルト値を使用するために **ENTER** を押しました。

その後、パーティション1の最後のセクタを選択します。パーティション1にドライブ全体のスペースを使用したい場合は **ENTER** を押すだけです。または、パーティション1の終了セクタ位置を指定することもできます。これにより、作成するパーティション1のストレージサイズが決まります。

次に、署名を削除するために **```Y```** を押します。

その後、**```w```** を押して変更を保存し、fdiskプロンプトを終了します。

以下はプロセスの例です：
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/fdisk_sample.png"/></div>

**ステップ3.** SSDパーティションをext4形式にフォーマットする  
SSDにパーティションを作成したら、そのパーティションをext4形式にフォーマットしてマウントし、使用できるようにする必要があります。以下のようにmkfs.ext4を使用してフォーマットします：

```bash
sudo mkfs.ext4 /dev/sdXX
```

ここで、```sdXX``` はSSDのデバイス名です。私の場合は ```/dev/sda1``` を使用しました：

```bash
sudo mkfs.ext4 /dev/sda1
```

そして、```Proceed anyway? (y,N)``` と表示されたら **```y```** を入力し、**ENTER** を押します。その後、プロセスが完了するまで数秒待ちます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/mkfs.png"/></div>

**ステップ4.** パーティションをマウントする  
SSDを外部ディスクとして追加ストレージとして使用するためにマウントします。

```bash
sudo mkdir /media/"YOUR USER NAME"/"THE NAME YOU WANT TO MOUNT THE DRIVE"

sudo mount /dev/sdXX /media/"YOUR USER NAME"/"THE NAME YOU WANT TO MOUNT THE DRIVE"
```

ここで、**"YOUR USER NAME"** はreTerminalシステムのユーザー名、**"THE NAME YOU WANT TO MOUNT THE DRIVE"** はドライブをマウントするために作成する名前、**/dev/sdXX** はマウントしたいSSDパーティションのデバイス名です。

私の場合の例：

```bash
sudo mkdir /media/seeed/SSD

sudo mount /dev/sda1 /media/seeed/SSD/
```

SSDが正常にマウントされたかどうかを確認するには、以下を実行します：

```bash
lsblk
```

以下のような出力が表示されるはずです。ここで、**```/dev/sda1```** が **```/media/seeed/SSD```** にマウントされています：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/mount.png"/></div>

### **EC25-EUX 4Gモジュール**

**必要な材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- EC25-EUX 4Gモジュール x1
- SIMカード x1

**ステップ1.** reTerminal E10-1の背面カバーを開け、EC25-EUXとSIMカードをreTerminal E10-1に取り付けます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/039.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/041.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/042.jpg"/></div>

その後、ファンの隣にあるボタンをPCIEに切り替えます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/045.jpg"/></div>

**ステップ2.** ```lsusb``` を使用してEC25-EUXが検出されているか確認します。

```
lsusb
lsusb -t
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsusb.png"/></div>

**ステップ3.** シリアル通信ツールminicomをインストールします。

```sh
sudo apt install minicom
```

**ステップ4.** minicomを使用してEC25-EUX 4Gモジュールに接続します。

```sh
sudo minicom -D /dev/ttyUSB2 -b 1152008n1
```

シリアル接続が開いたら、ATと入力して「Enter」を押します。「OK」と表示されるはずです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image31.png"/></div>

**ステップ5.** 4Gモジュールを有効にして4Gネットワークに接続します。

4G対応のSIMカードをLi-PoバッテリーホルダーのSIMカードスロットに挿入してください。このスロットはマイクロSIMカードをサポートしているため、ナノSIMカードを使用する場合はマイクロSIMカードアダプターが必要です。

同じminicomシリアルウィンドウで以下を入力します：

```sh
AT+QCFG="usbnet"
```

```+QCFG: "usbnet",0,``` のような出力が返されますが、これを1（ECMモード）に設定する必要があります。以下のコマンドを入力してください：

```sh
AT+QCFG="usbnet",1
```

その後、モデムを再起動するために以下のコマンドを入力します：

```sh
AT+CFUN=1,1
```

その後、再起動するか、モジュールがSIMカードキャリアからインターネットを取得するまでしばらく待ちます。

`ifconfig` コマンドを使用してreTerminalのネットワーク状態を確認することもできます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image33.png"/></div>

### **オーディオ**

さまざまなユーザーのマルチメディアニーズを満たすために、スピーカーモジュールと2つのマイクロフォンモジュールがreTerminal E10-1に内蔵されており、音声の再生と録音のニーズを実現します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/028.jpg"/></div>

**必要な材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1

**ステップ1.** ドライバーをダウンロードしてインストールします。

```sh
git clone https://github.com/Seeed-Projects/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh
```

**ステップ2.** 設定項目を追加します。`/boot/config.txt` に `dtoverlay=seeed-2mic-voicecard` を追加します。その後、デバイスを再起動します。

```sh
sudo sed -i '$s/$/\ndtoverlay=seeed-2mic-voicecard/'  /boot/config.txt
```

`/boot/config.txt` を変更したか確認するには、`nano` テキストエディタを使用してファイルを開き、最後の行をスクロールして確認します：

```bash
nano /boot/config.txt
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image35.jpg"/></div>

`/boot/config.txt` に追加されたら、再起動します：

```bash
sudo reboot
```

再起動を待った後、コマンド `arecord -l` を使用して録音デバイスを確認します。

```bash
arecord -L
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/030.png"/></div>

上図のように、**カード 0 デバイス 0** が録音に使用する必要があるデバイスです。

**ステップ 3.** 上記の情報に基づいて、録音と保存の操作を行うコマンドを使用します。

```sh
arecord -Dhw:0,0 -d 10 -f cd -r 44100 -c 2 -t wav test.wav
```

:::note
**パラメータ解析**

- **-D** 録音デバイスを指定します。0,0 はカード 0 デバイス 0 を意味し、これは bcm2835-i2s-wm8960-hifi wm8960-hifi-0 です。
- **-d** 録音の継続時間を秒単位で指定します。
- **-f** 録音フォーマットを指定します。cd、cdr、dat のみをサポートします。
- **-r** サンプリングレートを Hz 単位で指定します。
- **-c** チャンネル数を指定します。
- **-t** 生成されるファイル形式を指定します。
:::

**ステップ 4.** 再生デバイスを確認します。

```sh
aplay -l
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/031.png"/></div>

**ステップ 5.** 適切な音量を調整して音を再生します。

```sh
sudo alsamixer
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image38.jpg"/></div>

```sh
sudo aplay -Dhw:0 test.wav
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image39.jpg"/></div>

## リソース

## FAQ

1. どのタイプの 18650 バッテリーが互換性がありますか？

回答: Panasonic NCR18650B 3.6V 3400mAh を推奨します。

2. バッテリーには独自の過電流/低電圧/過電圧保護が必要ですか？

回答: 必要ありません。reTerminal E10-1 にはバッテリー保護回路が搭載されています。

3. 使用している CAN および RS485 コントローラーのモデルは何ですか？

回答:

- 485 コントローラー：TP485E
- CAN コントローラー：MCP2518FDT-E/QBB

4. 昨日 E10 をインストールしましたが、バッテリー情報（充電レベル）は正しいですか？充電器から取り出したばかりでも赤（0%）と表示されます。

```
Kernel: 5.10.103-v8+ aarch64 bits: 64 Console: tty 0 Distro: Debian GNU/Linux 10
```

電源表示機能: まだ開発されていませんが、皆様の声を受け取り、この機能の開発をスケジュールします。

5. reTerminal 拡張は別の（独立した）イーサネットポートを提供しますか？つまり、2 つのイーサネットポートを持つことになりますか？

これら 2 つのポートは互いに影響を与えることなく同時に使用できます。

6. RS232 と RS485 は独立していますか？（一部のハードウェアでは、どちらか一方しか使用できない場合があります）

RS232 または RS485 のいずれか一方のみを使用できます。

## リソース

* [DSN フォーマットの回路図ファイル](https://files.seeedstudio.com/wiki/reTerminal_Bridge/source/reTerminal_Bridge.DSN)
* [PCB ボード設計ファイル](https://files.seeedstudio.com/wiki/reTerminal_Bridge/source/reTerminal_Bridge.brd)
* [回路図 PDF バージョン](https://files.seeedstudio.com/wiki/reTerminal_Bridge/source/reTerminal_Bridge_SCH.pdf)

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