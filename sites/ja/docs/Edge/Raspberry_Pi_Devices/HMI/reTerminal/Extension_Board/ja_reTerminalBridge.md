---
description: reTerminal E10-1
title: reTerminal E10-1
keywords:
  - Edge
  - reTerminal Extension_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminalBridge
last_update:
  date: 2/1/2023
  author: jianjing Huang
createdAt: '2025-05-27'
updatedAt: '2026-02-27'
url: https://wiki.seeedstudio.com/ja/reTerminalBridge/
---

# **reTerminal E10-1 入門ガイド**

### **必要な材料**

| reTerminal | reTerminal E10-1 |
|--------------|--------------|
|<div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/ReTerminal/wiki_thumb.png" /></div>|<div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reterminale10overviewnew.jpeg" /></div>
|[**今すぐ入手**](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)|[**今すぐ入手**](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html)|

### **事前準備**

#### **接続**

向きに注意して reTerminal を reTerminal E10-1 上に載せ、しっかりと密着するまで押し込みます。このとき reTerminal E10-1 の電源が入っていれば、reTerminal は起動してシステムが立ち上がります。reTerminal について詳しく知りたい場合は、[**reTerminal**](https://wiki.seeedstudio.com/ja/reTerminal/) をクリックしてください。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image3.png"/></div>

#### **取り付けと取り外し**

reTerminal E10-1 を使用する過程で、周辺機器を追加するために筐体を取り外す必要がある場合があります。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image002.png"/></div>

#### **ドライバのインストール**

reTerminal で reTerminal E10-1 の機能を使用するには、最初に reTerminal 用のドライバをインストールする必要があります。reTerminal のターミナルウィンドウで次のコマンドに従ってください。

```sh
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays.git
cd seeed-linux-dtoverlays
sudo ./scripts/reTerminal.sh
```

:::note
**32bit OS** の場合は、`sudo ./scripts/reTerminal.sh` を実行する前に、次の手順を追加する必要があります

```
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```

:::

インストールが完了したら、マシンを再起動してください。その後、次のコマンドを使用して `reTerminal-bridge.dtbo` ファイルが存在するかどうかを確認し、ドライバのインストールが完了していることを確認します。

```sh
ls /boot/overlays/reTerminal-bridge.dtbo
```

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image1.jpg"/></div>

#### **ライブラリのインストール**

python3 ライブラリをインストールします。

```sh
sudo apt-get update
sudo apt-get install python3-pip
sudo pip3 install RPi.GPIO
sudo apt-get install python3-serial
```

git ライブラリをインストールします。

```sh
sudo apt install -y git
```

### **電源供給**

電源供給には、次の 3 つの方法があります。

- DC ジャック
- PoE
- UPS -18650 バッテリー

本機のバッテリーは NCR18650B 充電式リチウムイオンバッテリーです。パッケージにはバッテリーが含まれていないことにご注意ください。バッテリーは一般的なコンビニエンスストアで入手可能で、お客様ご自身でご用意いただく必要があります。推奨品は Panasonic NCR18650B 3.6V 3400mAh です。

#### **DC ジャック**

DC 12V @4A で reTerminal、拡張ボード、およびバッテリーに電源を供給します。

#### **PoE**

PoE 電源入力は RJ45 で、最大 25W の電力入力をサポートします。

#### **UPS -18650 バッテリー**

固定ピン付きバッテリーホルダー x2。

### **ファン**

**必要な材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- ファン（同梱） x1

高負荷時でも reTerminal と reTerminal E10-1 を正常な温度レベルに保つために、reTerminal E10-1 の内部には 3 ピンファンが搭載されています。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image29.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image031.jpg"/></div>

この例では、reTerminal E10-1 上のファンを制御する方法を紹介します。

**ステップ 1.** 次のコマンドでファンのオン／オフを直接制御できます。

```sh
#Toggle fan on
raspi-gpio set 23 op pn dh

#Toggle fan off
raspi-gpio set 23 op pn dl
```

**ステップ 2.** CPU の温度を検出してファンを有効／無効にすることもできます。以下の手順に従ってプログラムをダウンロードして実行してください。

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_Fan_control.git
cd Seeed_reTerminal_Bridge_Fan_control/
sudo python3 fan.py
```

参考用に **fan.py** のコードを示します。

```python
import sys 
import time
try:
 import RPi.GPIO as GPIO 
except RuntimeError:
 print("Error importting Rpi.GPIO")

MAX_TEMP = 40.0
MIN_TEMP = 20.0

def cpu_temp():
 f = open("/sys/class/thermal/thermal_zone0/temp",'r') 
 return float(f.read())/1000

def main():
 channel = 23
 GPIO.setmode(GPIO.BCM)

 # init 23 off
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

コードが正常に実行されると、CPU 温度が 40°C を超えたときにファンがオンになり、温度が 20°C 未満になるとファンがオフになります。

### **CAN 通信**

Controller Area Network（CAN）は、ホストコンピュータなしでマイクロコントローラやデバイス同士のアプリケーション間通信を可能にする、堅牢な車載バス規格です。

**必要な材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x2
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x2
- オス－オスケーブル x2

この例では、reTerminal E10-1 上で CAN を使用する方法を紹介します。

**ステップ 1.** オス－オスケーブルを使用して、CAN インターフェース経由で 2 台の reTerminal E10-1 を接続します。

H -> H
L -> L
GND -> GND

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/can.jpg"/></div>

**ステップ 2.** 2 台の reTerminal それぞれに **CAN-utils** をインストールします。

```sh
sudo apt install can-utils
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image4.jpg"/></div>

CAN-utils は、CAN インターフェースを使用する非常に有用なデバッグツールのコレクションです。次のようなアプリケーションが含まれます。

- candump – CAN パケットのダンプ – 表示、フィルタリング、およびディスクへのログ保存。
- canplayer – CAN ログファイルの再生。
- cansend – 単一フレームの送信。
- cangen – ランダムトラフィックの生成。
- canbusload – 現在の CAN バス使用率の表示。

CAN-utils のソースコードは [GitHub リポジトリ](https://github.com/linux-can/can-utils) から入手できます。

**ステップ 3.** 2 台の reTerminal に設定情報を追加します。エディタで **/boot/config.txt** ファイルを開き、末尾に `dtoverlay=seeed-can-fd-hat-v2` を追加して保存し、その後 reTerminal を再起動します。

:::note
ハードウェアを指定する ID EEPROM が「hat」に搭載されていない場合、Linux カーネルは SPI インターフェース上の CAN コントローラを自動的に検出しません。適切なドライバを読み込むには、起動時にデバイスツリーオーバーレイの設定を指定する必要があります。
:::

```sh
sudo nano /boot/config.txt
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image5.jpg"/></div>

**ステップ 4.** CAN インターフェースはネットワークインターフェースと同様に動作します。```ifconfig -a```（インターフェース設定）を使用して、さまざまな統計情報を取得できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image6.jpg"/></div>

コマンド `cangen can0 -v` を使用してランダムデータを送信し、CAN 通信が正常に行われているかテストします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image7.jpg"/></div>

**ステップ 5.** 次のコマンドで CAN インターフェースを手動で有効化できます。

```sh
sudo ip link set can0 up type can bitrate 500000
```

**ステップ 6.** [コード](https://github.com/limengdu/Seeed_reTerminal_Bridge_CAN_exmaple) を reTerminal にダウンロードします。

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_CAN_exmaple
```

一方の reTerminal では、データを送信するコードをコンパイルして実行します。

```sh
cd Seeed_reTerminal_Bridge_CAN_exmaple/
gcc cantransmit.c -o cantransmit
```

参考用に **cantransmit.c** のコードを示します。

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

もう一方の reTerminal では、データを受信するコードをコンパイルして実行します。

```sh
gcc canreceive.c -o canreceive
```

参考用に **canreceive.c** のコードを示します。

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

2台のreTerminalがCANインターフェースを介してデータの送受信に成功していることが分かります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image8.jpg"/></div>

読み取りに加えて、関連性のないCANフレームをフィルタリングしたい場合もあるでしょう。これはドライバレベルで行われ、ユーザーモードアプリケーションで各フレームを読み取るよりも効率的です。

```sh
gcc canfilter.c -o canfilter
```

参考として、**canfilter.c** のコードを以下に示します。

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
 To set up a filter, initialise a single can_filter structure or array of 
 structures and populate the can_id and can_mask. The call setsockopt():
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

 // And finally, if there is no further need for the socket, close it:
 if (close(s) < 0) {
  perror("Close");
  return 1;
 }

 return 0;
}
```

:::note
ほとんどのCANコントローラには、シリコン（ハードウェア）内にアクセプタンスフィルタとマスクが含まれています。残念ながら、現在のアーキテクチャではフィルタリングはカーネル内で実行され、最適とは言えませんが、それでもすべてのフレームをユーザーモードアプリに渡すよりは優れています。
:::

### **RS485 通信**

RS485は、TIA-485(-A) または EIA-485 とも呼ばれ、シリアル通信システムで使用されるドライバおよびレシーバの電気的特性を定義する規格です。電気信号はバランス型であり、マルチポイントシステムをサポートします。この規格を実装したデジタル通信ネットワークは、長距離や電気的ノイズの多い環境でも効果的に使用できます。このようなネットワークには、線形のマルチドロップバスとして複数のレシーバを接続できます。

**必要な材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- [USB To RS485 Industrial Isolated Converter](https://www.seeedstudio.com/USB-TO-RS232--RS485--TTL-Industrial-Isolated-Converter-p-3231.html) およびケーブル

この例では、reTerminal E10-1 上でRS485を使用する方法を紹介します。

**ステップ 1.** RS485機能はttyS0を使用するため、開始する前にttyS0のシステム対話機能を無効にする必要があります。

```sh
sudo raspi-config
```

順に **Interface Options**、**Serial port** を選択します。

次の画面で、シリアル経由でアクセス可能なログインシェルを有効にするかどうかを尋ねられるので、**No** を選択します。

次に “Do you want to use serial port hardware” で、**Yes** が選択されていることを確認します。

reTerminal が変更を適用すると、画面に次のようなテキストが表示されます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image9.jpg"/></div>

**ステップ 2.** ケーブルを使用して、RS485インターフェース経由でreTerminal E10-1をコンピュータに接続します。

A -> A
B -> B
GND -> GND

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/rs485.jpg"/></div>

**ステップ 3.** コマンド `dmesg | grep tty` を使用してシリアルポート名を確認します。コンピュータとのRS485通信に使用するシリアルポート名を特定します。これはコンピュータによって異なる場合がありますが、一般的には **ttyS0** です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image10.png"/></div>

**ステップ 4.** [code](https://github.com/limengdu/Seeed_reTerminal_Bridge_RS485_exmaple) をreTerminalにダウンロードします。

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_RS485_exmaple
cd Seeed_reTerminal_Bridge_RS485_exmaple/
```

コンピュータでシリアルポートソフトウェアを開きます。コマンド `sudo python3 rs485.py` を実行すると、次のような結果が得られます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image11.png"/></div>

同時に、メッセージを受信してから5秒以内であれば、シリアルポートアシスタントを介してreTerminalに16バイトのデータを送信することもできます。

参考として、**rs485.py** のコードを以下に示します。

```c
import serial, time
try:
    import RPi.GPIO as GPIO
except RuntimeError:
    print("Error importting Rpi.GPIO")

GPIO.setmode(GPIO.BCM)

ser = serial.Serial()
ser.port = "/dev/ttyS0"
channel1 = 25
channel2 = 17

#9600,N,8,1
ser.baudrate = 9600
ser.bytesize = serial.EIGHTBITS    #number of bits per bytes
ser.parity = serial.PARITY_NONE    #set parity check
ser.stopbits = serial.STOPBITS_ONE #number of stop bits

ser.timeout = 0.5                  #non-block read 0.5s
ser.writeTimeout = 0.5             #timeout for write 0.5s
ser.xonxoff = False                #disable software flow control
ser.rtscts = False                 #disable hardware (RTS/CTS) flow control
ser.dsrdtr = False                 #disable hardware (DSR/DTR) flow control

GPIO.setup(channel1,GPIO.OUT,initial=GPIO.LOW)
GPIO.setup(channel2,GPIO.OUT,initial=GPIO.LOW)

try:
    ser.open()
except Exception as ex:
    print ("open serial port error " + str(ex))
    exit()

if ser.isOpen():
    try:
        ser.flushInput() #flush input buffer
        ser.flushOutput() #flush output buffer
        GPIO.output(channel1,GPIO.HIGH)
        GPIO.output(channel2,GPIO.HIGH)
        time.sleep(0.1)
        #write data
        ser.write("rs485 communication is on, you can try to send data...\n".encode())
        print("Sent successfully\n")
        GPIO.output(channel2,GPIO.LOW)
        time.sleep(5)  #wait 5s
        #read data
        response = ser.read(16)
        print("read 16 byte data:")
        print(response)
        ser.close()
    except Exception as e1:
        print ("communicating error " + str(e1))
else:
    print ("open serial port error")
```

### **RS232 通信**

RS-232（Recommended Standard 232）は、もともと1960年にデータのシリアル通信伝送のために導入された規格です。DTE と DCE 間を接続する信号を正式に定義しています。RS-422、RS-485、Ethernet などの後発インターフェースと比較すると、RS-232 は伝送速度が遅く、最大ケーブル長が短く、電圧スイングが大きく、標準コネクタが大きく、マルチポイント機能がなく、マルチドロップ機能も限定的です。

**必要な材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- [USB To RS232 Industrial Isolated Converter](https://www.seeedstudio.com/USB-TO-RS232--RS485--TTL-Industrial-Isolated-Converter-p-3231.html) およびケーブル

この例では、reTerminal E10-1 上でRS232を使用する方法を紹介します。

**ステップ 1.** RS485機能はttyS0を使用するため、開始する前にttyS0のシステム対話機能を無効にする必要があります。

```sh
sudo raspi-config
```

順に **Interface Options**、**Serial port** を選択します。

次の画面で、シリアル経由でアクセス可能なログインシェルを有効にするかどうかを尋ねられるので、**No** を選択します。

次に “Do you want to use serial port hardware” で、**Yes** が選択されていることを確認します。

reTerminal が変更を適用すると、画面に次のようなテキストが表示されます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image9.jpg"/></div>

**ステップ 2.** ケーブルを使用して、RS232インターフェース経由でreTerminal E10-1をコンピュータに接続します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/rs232.jpg"/></div>

**ステップ 3.** コマンド `dmesg | grep tty` を使用してシリアルポート名を確認します。コンピュータとのRS232通信に使用するシリアルポート名を特定します。これはコンピュータによって異なる場合がありますが、一般的には **ttyS0** です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image12.jpg"/></div>

**ステップ 4.** [code](https://github.com/limengdu/Seeed_reTerminal_Bridge_RS232_exmaple) をreTerminalにダウンロードします。

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_RS232_exmaple
cd Seeed_reTerminal_Bridge_RS232_exmaple/
```

reTerminalの一方で、データを送信するコードをコンパイルして実行します。

```sh
sudo python3 rs232_send.py
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image13.jpg"/></div>

参考として、**rs232_send.py** のコードを以下に示します。

```python
#!/usr/bin/env python
import time
import serial

ser = serial.Serial(
        port='/dev/ttyS0',              # Please modify here according to the serial port name displayed by reTerminal
        baudrate = 9600,
        parity=serial.PARITY_NONE,
        stopbits=serial.STOPBITS_ONE,
        bytesize=serial.EIGHTBITS,
        timeout=1
)
counter=0
try:
        print("rs232 starts now!\n")
        ser.write("rs232 starts now!\n".encode())
        while 1:
                ser.write(("Write counter:{}\n".format(counter)).encode())
                time.sleep(1)
                counter += 1
except KeyboardInterrupt:
    exit()
```

もう一方のreTerminalで、データを受信するコードをコンパイルして実行します。

```sh
sudo python3 rs232_receive.py
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image14.jpg"/></div>

参考用に **rs232_receive.py** コードを以下に示します。

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
    print("Start receiving data now!\n")
    while 1:
            x=ser.readline()
            if x != b'':
                print(x)
except KeyboardInterrupt:
        exit()
```

### **Ethernet**

**必要な材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1

この例では、reTerminal E10-1 上で Ethernet 接続をテストする方法を紹介します。

**ステップ 1.** reTerminal とコンピュータ用に **iperf3** をダウンロードします。

```sh
git clone https://github.com/esnet/iperf.git
```

**ステップ 2.** 次のコードを使用して **iperf3** をインストールします

```
cd iperf
sudo ./configure
sudo make
sudo make install
```

**ステップ 3.** reTerminal をサーバーとして使用します。

```sh
iperf3 -s
```

コンピュータを使用して、reTerminal に接続されたネットワーク速度をテストします。このとき、コンピュータと reTerminal を同じローカルエリアネットワーク内に保ってください。

```sh
iperf3 -c 192.168.xxx.xxx
```

*上記の "192.168.xxx.xxx" アドレスは reTerminal のアドレスです。*

例えば、ここでは reTerminal の IP アドレスは ```192.168.31.187``` です：

```sh
iperf3 -c 192.168.31.187
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image17.jpg"/></div>

より多くのネットワークテスト機能を実行する必要がある場合は、[iperf](https://github.com/esnet/iperf) プロジェクト Web サイト上のクエリパラメータの使用方法を参照してください。

### **WM1302 (USB/SPI) LoRaWAN Gateway**

**必要な材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- [WM1302 LoRaWAN Gateway Module (USB/SPI) US/EU](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-EU868-p-4892.html) x1

USB モジュールと SPI モジュールの違いは次のとおりです：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa.png"/></div>

この例では、reTerminal E10-1 上で WM1302 LoRaWAN Gateway を使用する方法を紹介します。

**ステップ 1.** WM1302 モジュールを reTerminal E10-1 に取り付け、ネジで固定します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/039.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image18.jpg"/></div>

その後、ファンの横にあるボタンを PCIE に回します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/045.jpg"/></div>

**ステップ 2.** コマンドラインで `sudo raspi-config` と入力して Rasberry Pi Software Configuration Tool を開きます：

- Interface Options を選択
- SPI を選択し、**Yes** を選択して有効にします
- I2C を選択し、**Yes** を選択して有効にします
- Serial Port を選択し、"Would you like a login shell..." には **No** を選択し、"Would you like the serial port hardware..." には **Yes** を選択します

その後、これらの設定が有効になるように Raspberry Pi を再起動してください。

**ステップ 3.** [WM1302 code](https://github.com/Lora-net/sx1302_hal) を reTerminal にダウンロードしてコンパイルします。

```sh
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo make
```

**ステップ 4.** リセットスクリプトを設定します。まずファイルを **sx1302_hal/packet_forwarder** にダウンロードし、次のコマンドを使用します

```
cd sx1302_hal/packet_forwarder
wget https://files.seeedstudio.com/wiki/reTerminal_Bridge/reset_lgw.sh
```

次に、お使いの WM1302 バージョンに応じて、以下のコードテストを実行します。

```sh
USB version
$ cd packet_forwarder
$ sudo nano reset_lgw.sh
$ ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

```sh
SPI version
$ cd packet_forwarder
$ sudo nano reset_lgw.sh
$ ./lora_pkt_fwd -c global_conf.json.sx1250.EU868
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image20.jpg"/></div>

**ステップ 5.** [TTN website](https://www.thethingsnetwork.org/) にサインアップしてアカウントにログインします。まだアカウントがない場合は登録してください。その後 Gateway インターフェースに入り、"Get Starting" をクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa1.png"/></div>

自分の地域を選択します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa2.png"/></div>

"Go to gateways" を選択します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa3.png"/></div>

デバイスを追加するには **Add gateway** をクリックします：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image22.jpg"/></div>

その中で、**Gateway EUI** の値は **ステップ 4** でテストを実行したときにログに表示されます。Lora options の Frequency plan（ヨーロッパ版を例とします）では **Europe 863-870 MHz (SF9 for RX2 - recommended)** を選択します。その後 **Create gateway** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image23.jpg"/></div>

**ステップ 6.**（ヨーロッパ版を例とします）
SPI バージョンの場合、**sx1302_hal/packet_forwarder** 内の **global_conf.json.sx1250.EU868** を編集します。

USB バージョンの場合、**sx1302_hal/packet_forwarder** 内の **global_conf.json.sx1250.EU868.USB** を編集します。

対応するファイル内で **gateway_conf** を検索します。

- その後、後ろの **gateway_ID** を Web ページで入力した **Gateway EUI** に変更します。

- **server_address** を Web ページ内の **Gateway Server address** に変更します。

- **serv_port_up** と **serv_port_up** の両方を **1700** に変更します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image24.jpg"/></div>

**ステップ 7.** **ステップ 4** のコマンドを再度実行すると、その後 Web ページ上でデバイスの接続情報を確認できます。

```sh
USB version
$ ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

```sh
SPI version
$ ./lora_pkt_fwd -c global_conf.json.sx1250.EU868
```

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image25.jpg"/></div>

:::note
上記のチュートリアルは WM1302 のヨーロッパ版に基づいています。WM1302 の US 版を使用している場合、手順は概ね同じですが、チュートリアル内で変更および実行するファイルが異なります。ファイル名は、購入したバージョンおよび[次のページ](https://github.com/Lora-net/sx1302_hal/tree/master/packet_forwarder)を参照してください。
:::

### **Hard Drive Expansion**

**必要な材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- M.2 B key Connector x1

この例では、reTerminal E10-1 上でハードディスクを取り付けて動作を確認する方法を紹介します。

**ステップ 1.** reTerminal E10-1 の背面カバーを開け、M.2 SSD を Mini-PCIe Connector に挿入してネジで固定します。背面カバーを閉じ、reTerminal を接続して電源を入れます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/040.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image26.jpg"/></div>

その後、ファンの横にあるボタンを M.2 に回します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/046.jpg"/></div>

**ステップ 2.** SSD ストレージデバイスが検出されているかどうかを確認するためにコマンドを入力します。

```sh
sudo fdisk -l
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/025.png"/></div>

**ステップ 3.** また、dd コマンドを使用してハードドライブの読み書き速度をテストすることもできます。

```sh
Read
$ sudo dd if=/dev/sda3 of=/dev/null bs=512k count=500
```

```sh
Write
$ sudo dd if=/dev/zero of=/dev/sda3 bs=512k count=500
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/28.jpg"/></div>

:::note
M.2 B key を使用していることを確認してください。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/add_pic_1.png"/></div>
:::

#### ハードドライブをフォーマットする

:::caution
次のステップでは、reTerminal E10-1 に接続した SSD 上のすべてのデータが消去されます。また、誤ったドライブメディアを選択した場合も同様です。そのため、以下の手順を慎重に実行し、それぞれのステップの目的を理解していることを必ず確認してください。
:::

- **使用するソフトウェアツール**: ```lsblk```, ```fdisk```, ```mkfs```, ```mount```, ```umount```

**ステップ 1.** SSD デバイス名を見つける
SSD を reTerminal E10-1 に接続し、reTerminal に取り付けたら、システムの電源が入った後にターミナルを開き、次のコマンドを入力します：

```sh
lsblk
```

次のような表示がされるはずです：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsblk.png"/></div>

**ステップ 2.** fdisk を使用して SSD をパーティション分割する

:::caution
このステップを実行すると、reTerminal E10-1 に接続した SSD 上のデータは失われます。
:::

上記のステップに続いて、ターミナルに次のコマンドを入力します。/dev/**sdX** の **X** はフォーマット対象として選択した **SSD デバイス名** であることに注意してください。正しいデバイス名に自信がない限り、reTerminal に他の USB ドライブが接続されていないことを確認してください。

```sh
sudo fdisk /dev/sdX
```

例えば、ここでは次のようになります：

```sh
sudo fdisk /dev/sda
```

次のような表示がされるはずです：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/fdisk.png"/></div>

fdisk プロンプトで次を実行します：

```bash
Welcome to fdisk (util-linux 2.36.1).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.


Command (m for help):
```

まず SSD デバイス上のパーティションを削除するために **```d```** と入力します。

次に SSD デバイス上に新しいパーティションを作成するために **```n```** と入力します。

その後、次のメッセージが表示されるはずです：

```sh
Partition type
   p   primary (0 primary, 0 extended, 4 free)
   e   extended (container for logical partitions)
```

プライマリパーティションを作成するために **```p```** と入力し、その後 **```1```** を入力します。

次に First sector では、ドライブの先頭セクタを使用するデフォルト値を使う場合は **ENTER** を押します。または、SSD 上のパーティション 1 を開始したい特定のセクタ位置を指定することもできます。ここではデフォルト値を使用するために ENTER を押しました。

次にパーティション 1 の最後のセクタを選択します。パーティション 1 にドライブ全体の容量を割り当てたい場合は **ENTER** を押します。または、パーティション 1 の終了セクタ位置を指定することもできます。これは作成するパーティション 1 のストレージサイズを意味します。

次に署名を削除するために **```Y```** を押します。

その後、変更を書き込んで fdisk プロンプトを終了するために **```w```** を入力します。

以下はこのプロセスの例です：
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/fdisk_sample.png"/></div>

**ステップ 3.** SSD パーティションを ext4 形式でフォーマットする
ここまでで SSD にパーティションを作成したので、マウントして使用できるように、そのパーティションを ext4 形式でフォーマットする必要があります。これには mkfs.ext4 を使用します：

```bash
sudo mkfs.ext4 /dev/sdXX
```

同様に ```sdXX``` は SSD のデバイス名です。ここでは ```/dev/sda1``` を次のように使用しています：

```bash
sudo mkfs.ext4 /dev/sda1
```

そして ```Proceed anyway? (y,N)``` と表示されたら **```y```** と **```ENTER```** を入力し、処理が完了するまで数秒待ちます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/mkfs.png"/></div>

**ステップ 4.** パーティションをマウントする
これで SSD をマウントして、追加ストレージ用の外部ディスクとして使用できます。

```bash
sudo mkdir /media/"YOUR USER NAME"/"THE NAME YOU WANT TO MOUNT THE DRIVE"

sudo mount /dev/sdXX /media/"YOUR USER NAME"/"THE NAME YOU WANT TO MOUNT THE DRIVE"
```

ここで **"YOUR USER NAME"** は reTerminal システムのユーザー名、**"THE NAME YOU WANT TO MOUNT THE DRIVE"** はドライブをマウントするために作成する名前、**/dev/sdXX** はマウントしたい SSD パーティションのデバイス名です。

例えば、ここでは次のようになります：

```bash
sudo mkdir /media/seeed/SSD

sudo mount /dev/sda1 /media/seeed/SSD/
```

SSD が正常にマウントされたかどうかを確認するには次を実行します：

```bash
lsblk
```

次のような出力が表示されるはずです。ここで **```/dev/sda1```** が **```/media/seeed/SSD```** にマウントされています：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/mount.png"/></div>

### **EC25-EUX 4G モジュール**

**必要なもの**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- EC25-EUX 4G モジュール x1
- SIM カード x1

**ステップ 1.** reTerminal E10-1 の背面カバーを開け、EC25-EUX と SIM カードを reTerminal E10-1 に取り付けます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/039.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/041.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/042.jpg"/></div>

次にファンの横にあるスイッチを PCIE に切り替えます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/045.jpg"/></div>

**ステップ 2.** ```lsusb``` を使用して EC25-EUX が検出されているか確認します

```
lsusb
lsusb -t
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsusb.png"/></div>

**ステップ 3.** シリアル通信ツール minicom をインストールします。

```sh
sudo apt install minicom
```

**ステップ 4.** minicom を介して EC25-EUX 4G モジュールに接続します。

```sh
sudo minicom -D /dev/ttyUSB2 -b 1152008n1
```

シリアル接続が開いたら、AT と入力して Enter キーを押します。OK と表示されるはずです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image31.png"/></div>

**ステップ 5.** 4G モジュールを有効にして 4G ネットワークに接続する

4G 対応の SIM カードを Li-Po バッテリーホルダーの SIM カードスロットに挿入してください。この SIM カードスロットは micro SIM カードに対応しているため、nano SIM カードをお持ちの場合は、micro SIM カードに変換するアダプタを用意する必要があります。  

同じ minicom のシリアルウィンドウで次を入力します：

```sh
AT+QCFG="usbnet"
```

```+QCFG: "usbnet",0,``` のような結果が返ってきますが、これを 1（ECM モード）に設定する必要があるので、次のコマンドを入力します：

```sh
AT+QCFG="usbnet",1
```

次に、モデムの再起動を強制するために以下のコマンドを入力します：

```sh
AT+CFUN=1,1
```

その後、reTerminal を再起動するか、モジュールが SIM カードのキャリアからインターネット接続を取得するまでしばらく待ちます。

また、`ifconfig` コマンドを使用して reTerminal のネットワーク状態を確認することもできます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image33.png"/></div>

### **オーディオ**

さまざまなユーザーのマルチメディアニーズを満たすために、reTermnal E10-1 の内部にはスピーカーモジュール 1 個とマイクモジュール 2 個が搭載されており、音声の再生と録音が行えるようになっています。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/028.jpg"/></div>

**必要なもの**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1

**Step 1.** ドライバをダウンロードしてインストールします。

```sh
git clone https://github.com/Seeed-Projects/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh
```

**Step 2.** 設定項目を追加します。`dtoverlay=seeed-2mic-voicecard` を `/boot/config.txt` に追加します。その後、デバイスを再起動します。

```sh
sudo sed -i '$s/$/\ndtoverlay=seeed-2mic-voicecard/'  /boot/config.txt
```

`/boot/config.txt` を変更できているか確認するには、`nano` テキストエディタでファイルを開き、最後の行までスクロールして確認します：

```bash
nano /boot/config.txt
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image35.jpg"/></div>

一度 `/boot/config.txt` に追加したら、次のコマンドで再起動できます：

```bash
sudo reboot
```

再起動が完了したら、`arecord -l` コマンドを使用して録音デバイスを確認します。

```bash
arecord -L
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/030.png"/></div>

上図のように、**card 0 device 0** が録音に使用する必要があるデバイスです。

**Step 3.** 上記の情報に従って、コマンドを使用して録音および保存の操作を行います。

```sh
arecord -Dhw:0,0 -d 10 -f cd -r 44100 -c 2 -t wav test.wav
```

:::note
**パラメータの説明**

- **-D** は録音デバイスを指定します。0,0 は card 0 device 0 を意味し、bcm2835-i2s-wm8960-hifi wm8960-hifi-0 です。
- **-d** は録音時間を秒単位で指定します。
- **-f** は録音フォーマットを指定します。cd、cdr、dat のみサポートします。
- **-r** はサンプリングレートを Hz 単位で指定します。
- **-c** はチャンネル数を指定します。
- **-t** は生成されるファイル形式を指定します。

:::

**Step 4.** 再生デバイスを確認します。

```sh
aplay -l
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/031.png"/></div>

**Step 5.** 適切な音量に調整して音声を再生します。

```sh
sudo alsamixer
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image38.jpg"/></div>

```sh
sudo aplay -Dhw:0 test.wav
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image39.jpg"/></div>

## FAQ

1. どのタイプの 18650 バッテリーが互換性がありますか？

回答：Panasonic NCR18650B 3.6V 3400mAh を推奨します。

2. バッテリーには過電流 / 低電圧 / 過電圧保護機能が必要ですか？

回答：不要です。reTerminal E10-1 にはバッテリー保護回路が搭載されています。

3. 使用している CAN および RS485 コントローラの型番は何ですか？

回答：

- 485 コントローラ：TP485E
- CAN コントローラ：MCP2518FDT-E/QBB

4. 昨日 E10 を取り付けましたが、バッテリー情報（充電レベル）は正しいですか？ 充電器から外したばかりでも赤（0%）と表示されます。

```
Kernel: 5.10.103-v8+ aarch64 bits: 64 Console: tty 0 Distro: Debian GNU/Linux 10
```

電源表示機能：まだ開発されていませんが、ご要望は受け取りましたので、この機能の開発をスケジュールします。

5. reTerminal 拡張ボードは別の（独立した）イーサネットポートを提供しますか？つまり、2 つのイーサネットポートを使用できますか？

これら 2 つのポートは互いに影響を与えることなく同時に使用できます。

6. RS232 と RS485 は独立 / 分離されていますか（ハードウェアによってはどちらか一方しか使えない場合があります）？

RS232 と RS485 は同時には使用できず、どちらか一方のみ使用できます。


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
