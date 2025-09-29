---
description:   reTerminal E10-1
title:   reTerminal E10-1
keywords:
  - Edge
  - reTerminal Extension_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminalBridge
last_update:
  date: 2/1/2023
  author: jianjing Huang
---

# **reTerminal E10-1 を始める**

### **必要な材料**

| reTerminal | reTerminal E10-1 |
|--------------|--------------|
|<div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/ReTerminal/wiki_thumb.png" /></div>|<div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reterminale10overviewnew.jpeg" /></div>
|[**今すぐ購入**](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)|[**今すぐ購入**](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html)|

### **事前準備**

#### **接続**

向きに注意して、reTerminal を reTerminal E10-1 の上に置き、しっかりと密着するまで押し込みます。この時点で reTerminal E10-1 の電源が入っていれば、reTerminal が起動してシステムにブートします。reTerminal についてもっと知りたい場合は、[**reTerminal**](https://wiki.seeedstudio.com/ja/reTerminal/) をクリックしてください。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image3.png"/></div>

#### **取り付けと取り外し**

reTerminal E10-1 を使用する過程で、周辺機器を追加するためにケースを取り外す必要がある場合があります。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image002.png"/></div>

#### **ドライバーのインストール**

reTerminal で reTerminal E10-1 の機能を使用したい場合は、開始前に reTerminal 用のドライバーをインストールする必要があります。reTerminal のターミナルウィンドウで以下のコマンドに従ってください。

```sh
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays.git
cd seeed-linux-dtoverlays
sudo ./scripts/reTerminal.sh
```

:::note
**32bit OS**の場合、`sudo ./scripts/reTerminal.sh`を実行する前に以下のステップを追加する必要があります

```
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```

:::

インストールが完了したら、マシンを再起動してください。その後、以下のコマンドを使用して `reTerminal-bridge.dtbo` ファイルが存在するかを確認し、ドライバーのインストールが完了していることを確認してください。

```sh
ls /boot/overlays/reTerminal-bridge.dtbo
```

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image1.jpg"/></div>

#### **ライブラリのインストール**

python3ライブラリをインストールします。

```sh
sudo apt-get update
sudo apt-get install python3-pip
sudo pip3 install RPi.GPIO
sudo apt-get install python3-serial
```

gitライブラリをインストールします。

```sh
sudo apt install -y git
```

### **電源供給**

以下に示す3つの方法で電源を供給できます：

- DC ジャック
- PoE
- UPS -18650 バッテリー

この装置のバッテリーは NCR18650B 充電式リチウムイオンバッテリーです。パッケージにはバッテリーが含まれていないことをご了承ください。バッテリーは一般的なコンビニエンスストアで入手可能で、お客様ご自身でご準備いただく必要があります。推奨するのは Panasonic NCR18650B 3.6V 3400mAh です。

#### **DC ジャック**

reTerminal、拡張ボード、バッテリーに DC 12V @4A で電源を供給します。

#### **PoE**

PoE 電源入力は RJ45 で、最大 25W の電源入力をサポートします。

#### **UPS -18650 バッテリー**

固定ピン付きの 2 x バッテリーホルダー。

### **ファン**

**必要な材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- ファン（付属） x1

高負荷時に reTerminal と reTerminal E10-1 を正常な温度レベルに保つため、reTerminal E10-1 内部に 3 ピンファンがあります。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image29.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image031.jpg"/></div>

この例では、reTerminal E10-1 のファンを制御する方法を紹介します。

**ステップ 1.** 以下のコマンドでファンのスイッチを直接制御できます。

```sh
#Toggle fan on
raspi-gpio set 23 op pn dh

#Toggle fan off
raspi-gpio set 23 op pn dl
```

**ステップ2.** CPUの温度を検出してファンの有効化と無効化を行うこともできます。以下の手順に従ってプログラムをダウンロードして実行してください。

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_Fan_control.git
cd Seeed_reTerminal_Bridge_Fan_control/
sudo python3 fan.py
```

参考用の **fan.py** コードは以下の通りです。

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

コードが正常に実行された後、CPU温度が40°Cより高いことが検出されると、ファンがオンになります。温度が20°Cより低くなると、ファンがオフになります。

### **CAN通信**

Controller Area Network（CAN）は、マイクロコントローラーとデバイスがホストコンピューターなしでお互いのアプリケーションと通信できるように設計された堅牢な車両バス標準です。

**必要な材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x2
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x2
- オス-オスケーブル x2

この例では、reTerminal E10-1でCANを使用する方法を紹介します。

**ステップ1.** オス-オスケーブルを使用して、CANインターフェースを通じて2台のreTerminal E10-1を接続します。

H -> H
L -> L
GND -> GND

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/can.jpg"/></div>

**ステップ2.** 2台のreTerminalに**CAN-utils**をそれぞれインストールします。

```sh
sudo apt install can-utils
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image4.jpg"/></div>

CAN-utilsは、CANインターフェースを使用した非常に有用なデバッグツールのコレクションです。以下のようなアプリケーションが含まれています：

- candump – CANパケットをダンプ – 表示、フィルタリング、ディスクへのログ記録。
- canplayer – CANログファイルの再生。
- cansend – 単一フレームの送信。
- cangen – ランダムトラフィックの生成。
- canbusload – 現在のCANバス使用率の表示。

CAN-utilsのソースは[GitHubリポジトリ](https://github.com/linux-can/can-utils)から入手できます。

**ステップ3.** 2つのreTerminalの設定情報を追加します。エディタで**/boot/config.txt**ファイルを開き、末尾に`dtoverlay=seeed-can-fd-hat-v2`を追加して保存し、reTerminalを再起動します。

:::note
'hat'にハードウェアを指定するID EEPROMがないため、LinuxカーネルはSPIインターフェース上のCANコントローラを自動的に発見しません。適切なドライバをロードするには、起動時にデバイスツリーオーバーレイ設定を指定する必要があります。
:::

```sh
sudo nano /boot/config.txt
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image5.jpg"/></div>

**ステップ 4.** CANインターフェースはネットワークインターフェースと同じように動作します。```ifconfig -a```（インターフェース設定）を使用して様々な統計情報を取得できるはずです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image6.jpg"/></div>

`cangen can0 -v`コマンドを使用してランダムデータを送信し、CAN通信が正常に動作するかテストします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image7.jpg"/></div>

**ステップ 5.** 以下のコマンドを使用してCANインターフェースを手動で起動できます：

```sh
sudo ip link set can0 up type can bitrate 500000
```

**ステップ 6.** [コード](https://github.com/limengdu/Seeed_reTerminal_Bridge_CAN_exmaple)をreTerminalにダウンロードします。

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_CAN_exmaple
```

reTerminalの1つがデータを送信するコードをコンパイルして実行します。

```sh
cd Seeed_reTerminal_Bridge_CAN_exmaple/
gcc cantransmit.c -o cantransmit
```

参考用の **cantransmit.c** コードは以下の通りです。

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

別のreTerminalがデータを受信するコードをコンパイルして実行します。

```sh
gcc canreceive.c -o canreceive
```

参考用の **canreceive.c** コードは以下の通りです。

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

2つのreTerminalがCANインターフェースを通じてデータの送受信に成功していることが確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image8.jpg"/></div>

読み取りに加えて、関連性のないCANフレームをフィルタリングしたい場合があります。これはドライバーレベルで行われ、ユーザーモードアプリケーションで各フレームを読み取るよりも効率的です。

```sh
gcc canfilter.c -o canfilter
```

参考用の **canfilter.c** コードは以下の通りです。

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
ほとんどのCANコントローラーには、シリコン（ハードウェア）にアクセプタンスフィルターとマスクが含まれています。残念ながら、現在のアーキテクチャはカーネルでフィルタリングを実行するため最適ではありませんが、それでもすべてのフレームをユーザーモードアプリに渡すよりは優れています。
:::

### **RS485 通信**

RS485は、TIA-485(-A)またはEIA-485としても知られ、シリアル通信システムで使用するドライバーと受信機の電気的特性を定義する標準です。電気信号はバランス型で、マルチポイントシステムがサポートされています。この標準を実装するデジタル通信ネットワークは、長距離および電気的ノイズの多い環境で効果的に使用できます。複数の受信機を、線形のマルチドロップバスでそのようなネットワークに接続できます。

**必要な材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- [USB To RS485 Industrial Isolated Converter](https://www.seeedstudio.com/USB-TO-RS232--RS485--TTL-Industrial-Isolated-Converter-p-3231.html) とケーブル

この例では、reTerminal E10-1でRS485を使用する方法を紹介します。

**ステップ1.** RS485機能はttyS0を使用するため、開始前にttyS0システム対話機能を閉じる必要があります。

```sh
sudo raspi-config
```

**インターフェースオプション**、**シリアルポート**を順番に選択します。

次の画面では、シリアル経由でログインシェルにアクセスするかどうかを尋ねられるので、**No**を選択します。

次に「シリアルポートハードウェアを使用しますか」で、**Yes**が選択されていることを確認してください。

reTerminalが変更を行った後、画面に以下のテキストが表示されます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image9.jpg"/></div>

**ステップ2.** ケーブルを使用して、reTerminal E10-1をRS485インターフェース経由でコンピュータに接続します。

A -> A
B -> B
GND -> GND

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/rs485.jpg"/></div>

**ステップ3.** `dmesg | grep tty`コマンドを使用してシリアルポート名を確認します。コンピュータとのRS485通信用のシリアルポート名を特定します。これはコンピュータによって異なる場合があります。一般的には**ttyS0**です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image10.png"/></div>

**ステップ4.** [コード](https://github.com/limengdu/Seeed_reTerminal_Bridge_RS485_exmaple)をreTerminalにダウンロードします。

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_RS485_exmaple
cd Seeed_reTerminal_Bridge_RS485_exmaple/
```

コンピュータでシリアルポートソフトウェアを開きます。コマンド `sudo python3 rs485.py` を実行して、以下の効果を得ます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image11.png"/></div>

同時に、メッセージを受信してから5秒以内にシリアルポートアシスタントを通じてreTerminalに16バイトのデータを送信することもできます。

参考用の **rs485.py** コードは以下の通りです。

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

### **RS232通信**

RS-232またはRecommended Standard 232は、データのシリアル通信伝送のために1960年に最初に導入された標準です。DTEとDCE間の接続信号を正式に定義しています。RS-422、RS-485、Ethernetなどの後期インターフェースと比較して、RS-232は伝送速度が低く、最大ケーブル長が短く、電圧スイングが大きく、標準コネクタが大きく、マルチポイント機能がなく、マルチドロップ機能が制限されています。

**必要な材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- [USB To RS232 Industrial Isolated Converter](https://www.seeedstudio.com/USB-TO-RS232--RS485--TTL-Industrial-Isolated-Converter-p-3231.html) とケーブル

この例では、reTerminal E10-1でRS232を使用する方法を紹介します。

**ステップ1.** RS485機能はttyS0を使用するため、開始前にttyS0システム相互作用機能を閉じる必要があります。

```sh
sudo raspi-config
```

**インターフェースオプション**、**シリアルポート**を順番に選択します。

次の画面では、シリアル経由でログインシェルにアクセスするかどうかを尋ねられるので、**No**を選択します。

次に「シリアルポートハードウェアを使用しますか」で、**Yes**が選択されていることを確認してください。

reTerminalが変更を行った後、画面に以下のテキストが表示されます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image9.jpg"/></div>

**ステップ2.** ケーブルを使用してreTerminal E10-1をRS232インターフェース経由でコンピュータに接続します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/rs232.jpg"/></div>

**ステップ3.** `dmesg | grep tty`コマンドを使用してシリアルポート名を確認します。コンピュータとRS232通信を行うためのシリアルポート名を特定します。これはコンピュータによって異なる場合があります。一般的には**ttyS0**です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image12.jpg"/></div>

**ステップ4.** [コード](https://github.com/limengdu/Seeed_reTerminal_Bridge_RS232_exmaple)をreTerminalにダウンロードします。

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_RS232_exmaple
cd Seeed_reTerminal_Bridge_RS232_exmaple/
```

reTerminalの1つがデータを送信するコードをコンパイルして実行します。

```sh
sudo python3 rs232_send.py
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image13.jpg"/></div>

参考用の **rs232_send.py** コードは以下の通りです。

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

別のreTerminalでデータを受信するコードをコンパイルして実行します。

```sh
sudo python3 rs232_receive.py
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image14.jpg"/></div>

参考用の **rs232_receive.py** コードは以下の通りです。

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

この例では、reTerminal E10-1でイーサネット接続をテストする方法を紹介します。

**ステップ 1.** reTerminalとコンピューター用の**iperf3**をダウンロードします。

```sh
git clone https://github.com/esnet/iperf.git
```

**ステップ 2.** 以下のコードを使用して**iperf3**をインストールしてください

```
cd iperf
sudo ./configure
sudo make
sudo make install
```

**ステップ3.** reTerminalをサーバーとして使用します。

```sh
iperf3 -s
```

コンピュータを使用してreTerminalに接続されたネットワーク速度をテストします。この時、コンピュータとreTerminalを同じローカルエリアネットワーク内に保持してください。

```sh
iperf3 -c 192.168.xxx.xxx
```

*上記のアドレス「192.168.xxx.xxx」はreTerminalのアドレスです。*

例えば、私の設定ではreTerminalのIPアドレスは```192.168.31.187```です：

```sh
iperf3 -c 192.168.31.187
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image17.jpg"/></div>

より多くのネットワークテスト機能を完了する必要がある場合は、[iperf](https://github.com/esnet/iperf)プロジェクトウェブサイトでクエリパラメータの使用方法を参照できます。

### **WM1302 (USB/SPI) LoRaWANゲートウェイ**

**必要な材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- [WM1302 LoRaWANゲートウェイモジュール (USB/SPI) US/EU](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-EU868-p-4892.html) x1

USBとSPIモジュールの違いは以下の通りです：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa.png"/></div>

この例では、reTerminal E10-1でWM1302 LoRaWANゲートウェイを使用する方法を紹介します。

**ステップ1.** WM1302モジュールをreTerminal E10-1に取り付け、ネジで固定します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/039.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image18.jpg"/></div>

次に、ファンの隣のボタンをPCIEに回します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/045.jpg"/></div>

**ステップ2.** コマンドラインで`sudo raspi-config`と入力してRaspberry Pi Software Configuration Toolを開きます：

- Interface Optionsを選択
- SPIを選択し、**Yes**を選択して有効にする
- I2Cを選択し、**Yes**を選択して有効にする
- Serial Portを選択し、「Would you like a login shell...」に対して**No**を選択し、「Would you like the serial port hardware...」に対して**Yes**を選択

この後、これらの設定が機能するようにRaspberry Piを再起動してください。

**ステップ3.** [WM1302コード](https://github.com/Lora-net/sx1302_hal)をreTerminalにダウンロードしてコンパイルします。

```sh
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo make
```

**ステップ 4.** リセットスクリプトを設定します。まず **sx1302_hal/packet_forwarder** にファイルをダウンロードし、次のコマンドを使用します

```
cd sx1302_hal/packet_forwarder
wget https://files.seeedstudio.com/wiki/reTerminal_Bridge/reset_lgw.sh
```

次に、お使いのWM1302のバージョンに応じて以下のコードテストを実行してください。

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

**ステップ 5.** [TTN ウェブサイト](https://www.thethingsnetwork.org/)でサインアップし、アカウントにログインします。アカウントをお持ちでない場合は登録してください。その後、Gateway インターフェースに入り、「Get Starting」をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa1.png"/></div>

お住まいの地域を選択します。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa2.png"/></div>

「Go to gateways」を選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa3.png"/></div>

**Add gateway** をクリックしてデバイスを追加します：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image22.jpg"/></div>

その中で、**Gateway EUI** の値は **ステップ 4** でテストを実行した際にログに表示されます。Lora オプションの Frequency plan（ヨーロッパ版を例とする）では **Europe 863-870 MHz (SF9 for RX2 - recommended)** を選択します。その後、**Create gateway** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image23.jpg"/></div>

**ステップ 6.** （ヨーロッパ版を例とする）
SPI 版の場合、**sx1302_hal/packet_forwarder** の **global_conf.json.sx1250.EU868** を編集します。

USB 版の場合、**sx1302_hal/packet_forwarder** の **global_conf.json.sx1250.EU868.USB** を編集します。

対応するファイル内で **gateway_conf** を検索します。

- その後、後ろの **gateway_ID** をウェブページで入力した **Gateway EUI** に変更します。

- **server_address** をウェブページの **Gateway Server address** に変更します。

- **serv_port_up** と **serv_port_up** の両方を **1700** に変更します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image24.jpg"/></div>

**ステップ 7.** **ステップ 4** のコマンドを再度実行すると、後でウェブページでデバイスの接続情報を確認できます。

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
上記のチュートリアルはWM1302のヨーロッパ版に基づいています。WM1302のUS版を使用している場合、手順は基本的に同じですが、チュートリアルで変更・実行するファイルが異なります。ファイル名は購入したバージョンと[以下のページ](https://github.com/Lora-net/sx1302_hal/tree/master/packet_forwarder)を参照してください。
:::

### **ハードドライブ拡張**

**必要な材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- M.2 B key コネクタ x1

この例では、reTerminal E10-1でハードディスクの取り付けと動作確認の方法を紹介します。

**ステップ 1.** reTerminal E10-1の背面カバーを開け、M.2 SSDをMini-PCIeコネクタに挿入し、ネジで固定します。背面カバーを閉じ、reTerminalを接続して電源を入れます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/040.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image26.jpg"/></div>

次に、ファンの横にあるボタンをM.2に切り替えます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/046.jpg"/></div>

**ステップ 2.** コマンドを入力して、SSDストレージデバイスが検出されているかを確認します。

```sh
sudo fdisk -l
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/025.png"/></div>

**ステップ 3.** ddコマンドを使用してハードドライブの読み書き速度をテストすることもできます。

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
M.2 B keyを使用していることを確認してください。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/add_pic_1.png"/></div>
:::

#### ハードドライブのフォーマット

:::caution
以下の手順では、reTerminal E10-1に接続したSSDからすべてのデータが消去されます。また、間違ったドライブメディアを選択した場合も同様です。そのため、以下の手順を慎重に実行し、各手順の目的を理解していることを確認してください。
:::

- **使用するソフトウェアツール**: ```lsblk```、```fdisk```、```mkfs```、```mount```、```umount```

**ステップ1.** SSDデバイス名を確認する
reTerminal E10-1にSSDを接続し、reTerminalに取り付けた後、システムが起動したらターミナルを開き、以下のコマンドを入力します：

```sh
lsblk
```

以下のような表示が確認できるはずです：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsblk.png"/></div>

**ステップ 2.** fdiskを使用してSSDをパーティション分割する

:::caution
この手順を実行すると、reTerminal E10-1に接続したSSD上のデータが失われます。
:::

上記の手順に続いて、ターミナルで以下のコマンドを入力してください。/dev/**sdX**の**X**は、フォーマットを行うために選択した**SSDデバイス名**であることに注意してください。正しいデバイス名に確信がない限り、reTerminalに他のUSBドライブが接続されていないことを確認してください。

```sh
sudo fdisk /dev/sdX
```

例えば、私の場合：

```sh
sudo fdisk /dev/sda
```

以下のような表示が確認できるはずです：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/fdisk.png"/></div>

fdiskプロンプトで：

```bash
Welcome to fdisk (util-linux 2.36.1).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.


Command (m for help):
```

まず **```d```** を入力してSSDデバイス上のパーティションを削除します。

次に **```n```** を入力してSSDデバイス上に新しいパーティションを作成します。

その後、以下のメッセージが表示されるはずです：

```sh
Partition type
   p   primary (0 primary, 0 extended, 4 free)
   e   extended (container for logical partitions)
```

**```p```** を入力してプライマリパーティションを作成し、続いて **```1```** を入力します。

次に、最初のセクターについては、ドライブの開始セクターをデフォルトで使用する場合は **ENTER** を押すか、SSD上の特定のセクター位置でパーティション1を開始する場所を指定することもできます。私の場合は、デフォルト値でEnterを押しました。

続いて、パーティション1の最後のセクターを選択します。パーティション1にドライブの全容量を使用したい場合は **ENTER** を押すか、パーティション1の終了位置の特定のセクター位置を入力することもできます。これは作成するパーティション1のストレージサイズを意味します。

次に、署名を削除するために **```Y```** を押します。

続いて **```w```** を押して変更を書き込み、fdiskプロンプトを終了します。

以下がプロセスの例です：
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/fdisk_sample.png"/></div>

**ステップ3.** SSDパーティションをext4形式でフォーマットする
SSD用のパーティションを作成したら、マウントして使用するためにパーティションをext4形式でフォーマットする必要があります。これを行うには、mkfs.ext4を使用します：

```bash
sudo mkfs.ext4 /dev/sdXX
```

同様に、```sdXX```はあなたのSSDのデバイス名です。私の場合は```/dev/sda1```を使用します：

```bash
sudo mkfs.ext4 /dev/sda1
```

```Proceed anyway? (y,N)``` で **```y```** を入力し、**```ENTER```** を押して、プロセスが完了するまで数秒待ちます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/mkfs.png"/></div>

**ステップ 4.** パーティションをマウントする
これで SSD をマウントして、追加ストレージ用の外部ディスクとして使用できます。

```bash
sudo mkdir /media/"YOUR USER NAME"/"THE NAME YOU WANT TO MOUNT THE DRIVE"

sudo mount /dev/sdXX /media/"YOUR USER NAME"/"THE NAME YOU WANT TO MOUNT THE DRIVE"
```

**"YOUR USER NAME"** はあなたの reTerminal システムのユーザー名で、**"THE NAME YOU WANT TO MOUNT THE DRIVE"** はドライブをマウントするために作成する名前、**/dev/sdXX** はマウントしたい SSD パーティションのデバイス名です。

例えば私の場合：

```bash
sudo mkdir /media/seeed/SSD

sudo mount /dev/sda1 /media/seeed/SSD/
```

SSDが正常にマウントされたかどうかを確認するには：

```bash
lsblk
```

私と同様の出力が表示されるはずです。ここで **```/dev/sda1```** が **```/media/seeed/SSD```** にマウントされています：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/mount.png"/></div>

### **EC25-EUX 4G モジュール**

**必要な材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- EC25-EUX 4G モジュール x1
- SIM カード x1

**ステップ 1.** reTerminal E10-1 の背面カバーを開き、EC25-EUX と SIM カードを reTerminal E10-1 に取り付けます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/039.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/041.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/042.jpg"/></div>

次に、ファンの隣にあるボタンを PCIE に切り替えます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/045.jpg"/></div>

**ステップ 2.** ```lsusb``` を使用して EC25-EUX が検出されるかどうかを確認します

```
lsusb
lsusb -t
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsusb.png"/></div>

**ステップ 3.** シリアル通信ツール minicom をインストールします。

```sh
sudo apt install minicom
```

**ステップ4.** minicomを通じてEC25-EUX 4Gモジュールに接続します。

```sh
sudo minicom -D /dev/ttyUSB2 -b 1152008n1
```

シリアル接続が開いたら、ATと入力して'Enter'を押すと、OKが表示されるはずです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image31.png"/></div>

**ステップ 5.** 4Gモジュールを有効にして4Gネットワークに接続する

Li-Poバッテリーホルダーのsimカードスロットに4G対応のsimカードを挿入してください。simカードスロットはmicro simカードに対応しているため、nano simカードをお持ちの場合は、micro simカードアダプターを使用してmicro simカードに変換する必要があります。

同じminicomシリアルウィンドウで以下を入力してください：

```sh
AT+QCFG="usbnet"
```

以下のような結果が返されます ```+QCFG: "usbnet",0,``` が、これを1（ECMモード）に設定する必要があるため、以下のコマンドを入力してください：

```sh
AT+QCFG="usbnet",1
```

次に、以下のコマンドを入力してモデムを強制的に再起動します：

```sh
AT+CFUN=1,1
```

その後、再起動するか、しばらく待ってモジュールがSIMカードキャリアからインターネット接続を取得するのを待ちます。

また、`ifconfig`コマンドを使用してreTerminalのネットワーク状態を確認することもできます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image33.png"/></div>

### **オーディオ**

異なるユーザーのマルチメディアニーズに対応するため、reTermnal E10-1の内部にはスピーカーモジュールと2つのマイクロフォンモジュールが搭載されており、音声再生と録音のニーズを実現します。

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

**ステップ2.** 設定項目を追加します。`/boot/config.txt`に`dtoverlay=seeed-2mic-voicecard`を追加します。その後、デバイスを再起動します。

```sh
sudo sed -i '$s/$/\ndtoverlay=seeed-2mic-voicecard/'  /boot/config.txt
```

`/boot/config.txt` を変更したかどうかを確認するには、`nano` テキストエディタを使用してファイルを開き、最後の行までスクロールして確認できます：

```bash
nano /boot/config.txt
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image35.jpg"/></div>

`/boot/config.txt`に追加したら、今すぐ再起動できます：

```bash
sudo reboot
```

再起動を待った後、`arecord -l` コマンドを使用して録音デバイスを確認します。

```bash
arecord -L
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/030.png"/></div>

上図に示すように、**card 0 device 0** が録音に使用する必要があるデバイスです。

**ステップ 3.** 上記の情報に従って、コマンドを使用して録音と保存の操作を実行します。

```sh
arecord -Dhw:0,0 -d 10 -f cd -r 44100 -c 2 -t wav test.wav
```

:::note
**パラメータ解析**

- **-D** は録音デバイスを指定します。0,0 はカード 0 デバイス 0 を意味し、これは bcm2835-i2s-wm8960-hifi wm8960-hifi-0 です。
- **-d** は録音の継続時間を秒単位で指定します。
- **-f** は録音フォーマットを指定します。cd、cdr、dat のみサポートしています。
- **-r** はサンプリングレートを Hz 単位で指定します。
- **-c** はチャンネル数を指定します。
- **-t** は生成されるファイル形式を指定します。

:::

**ステップ 4.** 再生デバイスを確認します。

```sh
aplay -l
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/031.png"/></div>

**ステップ 5.** 適切な音量に調整して音声を再生します。

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

1. どのタイプの18650バッテリーが対応していますか？

回答：Panasonic NCR18650B 3.6V 3400mAhが推奨されます。

2. バッテリーには独自の過電流/低電圧/過電圧保護が必要ですか？

回答：いいえ、reTerminal E10-1にはバッテリー保護回路が搭載されているためです。

3. CANとRS485コントローラーはどのモデルを使用していますか？

回答：

- 485コントローラー：TP485E
- CANコントローラー：MCP2518FDT-E/QBB

4. 昨日E10をインストールしましたが、バッテリー情報（充電レベル）は正確ですか？充電器から取り出したばかりでも赤（0%）と表示されます。

```

Kernel: 5.10.103-v8+ aarch64 bits: 64 Console: tty 0 Distro: Debian GNU/Linux 10

```

電力表示機能：まだ開発されていませんが、あなたの声は届いており、この機能の開発をスケジュールに入れる予定です

5. reTerminal拡張ボードは別の（独立した）イーサネットポートを提供しますか --> つまり、2つのイーサネットポートがあるということですか？

これら2つのポートは互いに影響することなく同時に使用できます。

6. RS232とRS485は独立/分離されていますか（時々、一部のハードウェアでは、1つだけ使用できる場合があります...）

RS232またはRS485のいずれか一方のみを一度に使用できます。

## リソース

- [DSN形式回路図ファイル](https://files.seeedstudio.com/wiki/reTerminal_Bridge/source/reTerminal_Bridge.DSN)
- [PCB基板設計ファイル](https://files.seeedstudio.com/wiki/reTerminal_Bridge/source/reTerminal_Bridge.brd)
- [回路図PDF版](https://files.seeedstudio.com/wiki/reTerminal_Bridge/source/reTerminal_Bridge_SCH.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
