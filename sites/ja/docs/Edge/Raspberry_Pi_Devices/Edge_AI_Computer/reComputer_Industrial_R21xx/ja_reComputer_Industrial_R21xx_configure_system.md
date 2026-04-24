---
description: デバイスを取り付けた後に、reComputer Industrial R21xx シリーズ上のハードウェアコンポーネントを設定およびテストする方法を学びます。この Wiki では、GPIO マッピング、USER LED テスト、SPI 通信、Wi-Fi および Bluetooth スキャン、LoRa®、5G，4G、RS485、RS232、DI/DO テスト、安全なシャットダウンのための UPS について説明します。
title: reComputer Industrial R21xx を設定する
keywords:
  - Raspberry pi
  - エッジコントローラ
  - reComputer Industrial R21xx
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg
slug: /recomputer_industrial_R21xx_configure_system
last_update:
  date: 09/28/2025
  author: Nolan Chen
createdAt: '2025-09-28'
updatedAt: '2026-04-21'
url: https://wiki.seeedstudio.com/ja/recomputer_industrial_R21xx_configure_system/
---

## 概要

デバイスを取り付けた後に、reComputer Industrial R21xx シリーズ上のハードウェアコンポーネントを設定およびテストする方法を学びます。この Wiki では、GPIO マッピング、USER LED テスト、SPI 通信、Wi-Fi および Bluetooth スキャン、LoRa®、4G、5G、RS485、RS232、CAN、DI/DO テスト、安全なシャットダウンのための UPS などについて説明します。

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## GPIO マッピングとオフセットの確認

GPIO マッピングとオフセットを確認するには、次の手順に従います。

1. 次のコマンドをコピー＆ペーストして、GPIO マッピングを確認します。

```bash
cat /sys/kernel/debug/gpio
```

**このコマンドは GPIO マッピングとオフセットを表示し**、GPIO ピンのデバッグや設定に必要な情報を提供します。

## USER LED テスト

ユーザーが使用できるように、赤、青、緑の 3 色の LED を用意しています。/sys/class/leds/ ディレクトリに入って確認できます：

**1. LED ディレクトリへ移動する**  

```bash
cd /sys/class/leds/
ls
```

次のコマンドを使用して、対応する色の LED を点灯させます。

```bash
sudo su
echo 1 > /sys/class/leds/led-red//brightness
echo 1 > /sys/class/leds/led-blue/brightness
echo 1 > /sys/class/leds/led-green/brightness
```

これにより、対応する LED が**点灯**します。

**3. LED を消灯する（任意）**  
特定の LED を**消灯する**には、次を使用します。

```bash
echo 0 > /sys/class/leds/led-red/brightness
echo 0 > /sys/class/leds/led-blue/brightness
echo 0 > /sys/class/leds/led-green/brightness
```

## SPI 通信のテスト

TPM モジュールの MISO と MOSI ピンをショートさせて SPI 通信をテストするには、次の手順に従います。

1. spidev-test リポジトリをクローンします。

```bash
# Don't forget to connect to network before running command
git clone https://github.com/rm-hull/spidev-test.git
```

2. spidev-test ディレクトリに移動します。

```bash
cd spidev-test
```

3. spidev_test.c ファイルをコンパイルします。

```bash
gcc spidev_test.c -o spidev_test
```

4. 次のコマンドで spidev_test プログラムを実行します。

```bash
./spidev_test -D /dev/spidev10.0 -v -p hello
```

このコマンドは、指定した SPI デバイス（**/dev/spidev10.0**）上で SPI 通信をテストし、詳細出力（ -v ）を有効にして、メッセージ "hello"（**-p hello**）を送信します。
TPM モジュールの MISO と MOSI ピンをショートさせることで、MOSI から送信されたデータが MISO で受信されるループバック状態を作成します。この構成により、実際のデバイスを接続せずに SPI 通信をテストできます。

## Wi-Fi スキャン

利用可能な Wi-Fi ネットワークとその詳細を一覧表示するには、次を実行します。  

```bash
sudo iwlist wlan0 scan
```

- このコマンドは、近くのすべての Wi-Fi ネットワークをスキャンし、その SSID、信号強度、暗号化方式を表示します。  

## Bluetooth スキャン  

Bluetooth デバイスをスキャンするには、次の手順に従います。  

**Bluetooth 制御インターフェースを開く：**  

```bash
sudo bluetoothctl
```

このコマンドで Bluetooth 制御インターフェースが開きます。そこから、近くの Bluetooth デバイスをスキャンするための追加コマンドを実行できます。

**スキャンを有効にする：**  

```bash
scan on
```

このコマンドにより、近くの Bluetooth デバイスのスキャンが開始されます。その後、***bluetoothctl*** インターフェース内で、ペアリングや接続など、Bluetooth デバイスとやり取りするための他のコマンドを使用できます。

## Mini-PCIe 経由の LoRa®

### LoRa® SPI 設定  

LoRa® SPI を Mini-PCIe スロット 2 に取り付けた後、次の手順で LoRa® SPI を設定できます。

1. **SX1302_HAL** リポジトリをクローンします。

```bash
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
```

2. クローンしたディレクトリに移動します。

```bash
cd sx1302_hal
```

3. 設定ファイルを編集します。

I2C デバイスの設定ファイルを開きます。  

```bash
sudo nano ./libloragw/inc/loragw_i2c.h
```

次の行を変更します。  

```c
#define I2C_DEVICE "/dev/i2c-1"
```

次のように変更します。  

```c
#define I2C_DEVICE "/dev/i2c-2"
```

**#define I2C_DEVICE "/dev/i2c-1"** を **#define I2C_DEVICE "/dev/i2c-2"** に変更します。
**ctrl+x** を押して終了し、**y** を押して変更を保存し、その後 **Enter** を押してコマンドライン画面に戻ります。

4. packet_forwarder/reset_lgw.sh ファイルを追加します。

```bash
sudo nano packet_forwarder/reset_lgw.sh
```

実行コードを追加します。

```bash
#!/bin/sh

# This script is intended to be used on SX1302 CoreCell platform, it performs
# the following actions:
#       - export/unpexort GPIO23 and GPIO18 used to reset the SX1302 chip and to enable the LDOs
#       - export/unexport GPIO22 used to reset the optional SX1261 radio used for LBT/Spectral Scan
#
# Usage examples:
#       ./reset_lgw.sh stop
#       ./reset_lgw.sh start

# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=632     # SX1302 reset
SX1302_POWER_EN_PIN=633  # SX1302 power enable
SX1261_RESET_PIN=634     # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=623    # AD5338R reset (full-duplex CN490 reference design)

WAIT_GPIO() {
    sleep 0.1
}

init() {
    # setup GPIOs
    echo "$SX1302_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO
    echo "$SX1261_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO
    echo "$SX1302_POWER_EN_PIN" > /sys/class/gpio/export; WAIT_GPIO
    echo "$AD5338R_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO

    # set GPIOs as output
    echo "out" > /sys/class/gpio/gpio$SX1302_RESET_PIN/direction; WAIT_GPIO
    echo "out" > /sys/class/gpio/gpio$SX1261_RESET_PIN/direction; WAIT_GPIO
    echo "out" > /sys/class/gpio/gpio$SX1302_POWER_EN_PIN/direction; WAIT_GPIO
    echo "out" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/direction; WAIT_GPIO
}

reset() {
    echo "CoreCell reset through GPIO$SX1302_RESET_PIN..."
    echo "SX1261 reset through GPIO$SX1302_RESET_PIN..."
    echo "CoreCell power enable through GPIO$SX1302_POWER_EN_PIN..."
    echo "CoreCell ADC reset through GPIO$AD5338R_RESET_PIN..."

    # write output for SX1302 CoreCell power_enable and reset
    echo "1" > /sys/class/gpio/gpio$SX1302_POWER_EN_PIN/value; WAIT_GPIO

    echo "1" > /sys/class/gpio/gpio$SX1302_RESET_PIN/value; WAIT_GPIO
    echo "0" > /sys/class/gpio/gpio$SX1302_RESET_PIN/value; WAIT_GPIO

    echo "0" > /sys/class/gpio/gpio$SX1261_RESET_PIN/value; WAIT_GPIO
    echo "1" > /sys/class/gpio/gpio$SX1261_RESET_PIN/value; WAIT_GPIO

    echo "0" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/value; WAIT_GPIO
    echo "1" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/value; WAIT_GPIO
}

term() {
    # cleanup all GPIOs
    if [ -d /sys/class/gpio/gpio$SX1302_RESET_PIN ]
    then
        echo "$SX1302_RESET_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
    if [ -d /sys/class/gpio/gpio$SX1261_RESET_PIN ]
    then
        echo "$SX1261_RESET_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
    if [ -d /sys/class/gpio/gpio$SX1302_POWER_EN_PIN ]
    then
        echo "$SX1302_POWER_EN_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
    if [ -d /sys/class/gpio/gpio$AD5338R_RESET_PIN ]
    then
        echo "$AD5338R_RESET_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
}

case "$1" in
    start)
    term # just in case
    init
    reset
    ;;
    stop)
    reset
    term
    ;;
    *)
    echo "Usage: $0 {start|stop}"
    exit 1
    ;;
esac

exit 0
```

**ctrl+x** を押して終了し、**y** を押して変更を保存し、その後 **Enter** を押してコマンドライン画面に戻ります。

5. 設定コードを修正します。

```bash
sudo vim ./tools/reset_lgw.sh
```

ピン設定を更新します。

```bash
SX1302_RESET_PIN=632     # SX1302 reset
SX1302_POWER_EN_PIN=633  # SX1302 power enable
SX1261_RESET_PIN=634     # SX1261 reset (LBT / Spectral Scan)
# AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

18、29、35、42、53、54 行をそれぞれコメントアウトします。

```bash
......
# echo "$AD5338R_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO
......
# echo "out" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/direction; WAIT_GPIO
......
# echo "CoreCell ADC reset through GPIO$AD5338R_RESET_PIN..."
......
# echo "0" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/value; WAIT_GPIO
# echo "1" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/value; WAIT_GPIO
```

ctrl+x を押して終了し、y を押して変更を保存し、その後 Enter を押してコマンドライン画面に戻ります。

6. 使用しているモジュールに応じて選択される global_conf.json.sx1250.US915 設定ファイル内で、LoraWAN® モジュールのデフォルト SPI ポートを置き換えます。

```bash
sudo nano packet_forwarder/global_conf.json.sx1250.US915
```

com_path パラメータを変更し、***"com_path": "/dev/spidev0.0"*** を ***"com_path": "/dev/spidev2.0"*** に変更します。

7. コードをコンパイルします。

```bash
sudo make
```

これらの手順により、LoRa® SPI が設定され、指定した設定ファイルでパケットフォワーダーが実行されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.7.1_lora_spi_1.png" style={{width:800, height:'auto'}}/></div>

### LoRa® USB 設定

LoRa® USB の場合、前述のコマンドは LoRa® SPI と同じです。ただし、最後のコマンドのみ次のように変更する必要があります。

```bash
cho  632  >  /sys/class/gpio/export
echo  "out"  >  /sys/class/gpio/gpio632/direction
echo  "1"  >  /sys/class/gpio/gpio632/value

sudo  ./lora_pkt_fwd  -c  global_conf.json.sx1250.EU868.USB
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.7.2_lora_usb_1.png" style={{width:800, height:'auto'}}/></div>

このコマンドは、LoRa® USB 用に使用する設定ファイルを指定します。

## M.2 B-KEY 経由の 5G セルラー

minicom を介して AT コマンドを使用し、5G/4G モジュールとやり取りするには、次の手順に従います。

1. 新しい power_5g.sh ファイルを作成します。：

```bash
nano power_5g.sh
```

sudo nano で開き、次のコマンドを入力してから ***ctrl+x*** を押して保存して終了します。

```bash
#!/bin/bash

RESET_PIN=645
POWER_PIN=639

if [ ! -d "/sys/class/gpio/gpio$RESET_PIN" ]; then
    echo $RESET_PIN > /sys/class/gpio/export
fi

if [ ! -d "/sys/class/gpio/gpio$POWER_PIN" ]; then
    echo $POWER_PIN > /sys/class/gpio/export
fi

echo "out" > /sys/class/gpio/gpio$RESET_PIN/direction
echo "out" > /sys/class/gpio/gpio$POWER_PIN/direction

echo 1 > /sys/class/gpio/gpio$RESET_PIN/value
echo 1 > /sys/class/gpio/gpio$POWER_PIN/value

echo "Start to reboot 5g module"

echo 0 > /sys/class/gpio/gpio$RESET_PIN/value
sleep 0.05
echo 0 > /sys/class/gpio/gpio$POWER_PIN/value

echo "5g module reboot completed"
```

2. ファイルを実行します：

```bash
sudo ./power_5g.sh
```

10〜15 秒後（モジュールの電源投入と USB の列挙に時間がかかります）、デバイスノードが現れるか確認します：

```bash
ls /dev/ttyUSB*
```

/dev/ttyUSB0 などが出力されます：
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.8_5g_cellular_over_m.2_b-key_1.png" style={{width:800, height:'auto'}}/></div>
適切なシリアルポートとボーレートで minicom を開きます：

```bash
sudo apt update
sudo apt install minicom
sudo minicom -D /dev/ttyUSB2 -b 115200
```

このコマンドは、指定したシリアルポート（***/dev/ttyUSB2***）をボーレート 115200 で minicom で開きます。

1. minicom を開いたら、4G モジュールに AT コマンドを送信し始めることができます。例えば：

```bash
AT
```

このコマンドはモジュールが応答しているかを確認します。モジュールが正常に動作していれば、***"OK"*** という応答が返ってくるはずです。

2. 4G モジュールを使用して電話番号に発信するには、ATD コマンドの後に電話番号を続けて使用します：

```bash
ATD<phone_number>;
```

**phone_number** を、発信したい目的の電話番号に置き換えてください。
コマンドの末尾にセミコロン ; を付けて、電話番号の終わりを示すようにしてください。

## Mini-PCIe 経由の 4G セルラー

新しい power_4g.sh ファイルを作成します：

```bash
sudo nano power_4g.sh
```

sudo nano で開き、次のコマンドを入力してから ctrl+x を押して保存して終了します。

```bash
# SIM_MUX_SEL
echo  643  >  export
echo  out  >  gpio643/direction
echo  0  >  gpio643/value
```

ファイルを実行します：

```bash
sudo ./power_4g.sh
```

10〜15 秒後（モジュールの電源投入と USB の列挙に時間がかかります）、デバイスノードが現れるか確認します：

```bash
ls /dev/ttyUSB*
```

/dev/ttyUSB0 が出力されます。
GPIO の実際の動作を確認します：

```bash
cat /sys/class/gpio/gpio645/value # should be 0
cat /sys/class/gpio/gpio639/value # should be 0
```

両方の値が 0 → スクリプトが正しくプルダウンされており、モジュールは動作状態にあります。
minicom に入ってコマンドを送信します：

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

● ***Ctrl+A,Z,E*** を順番に押します。まず AT を送信して接続されているかをテストします。OK が表示されれば接続は成功です。
次のコマンドを実行すると、モジュールは自動的に再起動します。minicom を終了しなければ、対応する設定情報を見ることができます。
ECM ダイヤルアップによるインターネット接続：

```bash
AT+QCFG="usbnet",1
```

最後の行に OK と表示されれば成功です。

> Note
> デバイスはしばらく待つ必要があり、その後 ifconfig で usb0 の IP アドレスを確認できます。

ネットワーク状態と通信をテストします：

```bash
# Check network status
ifconfig
# Test communication
ping www.baidu.com -I usb0
```

## RS485 テスト

reComputer Industrial R21xx には **2 つの RS485 ポート** が含まれています。以下はそれぞれの **COM ポート** と **デバイスファイル** です：  

| **RS485 ポート数** | **COM ポート** | **シルク印刷ラベル** | **デバイスファイル** |
|---------------------------|--------------|----------------------|-----------------|
| **RS485-3**               | COM3         | A3/B3/GND3           | `/dev/ttyACM2`  |
| **RS485-4**               | COM4         | A4/B4/GND4           | `/dev/ttyACM3`  |

RS485 の機能をテストするには、以下の手順に従うことができます（RS485_1 と RS485_2 を例とします）：

1. RS485_1 と RS485_2 の A と B を接続してください。
2. それぞれ 2 つのターミナルウィンドウで minicom を開きます：

```bash
sudo minicom -D /dev/ttyACM1
sudo minicom -D /dev/ttyACM2
```

:::note
 拡張ボードがある場合は、番号を 1 つ後ろにずらす必要があります。例えば ***/dev/ttyAcM2***、***/dev/ttyAcM3*** のようになります。
:::

3. 開いた両方の ACM で、次の操作を行う必要があります：

- ***Ctrl+A*** を押してから ***Z*** を押すと、Minicom Command Summary インターフェースが表示されます：
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_1.png" style={{width:800, height:'auto'}}/></div>
- さらに ***O*** を押して設定を開き、Serial port setup を選択して ***Enter*** を押します；すべての RS485 関連インターフェースを開き、***H/I/J/K/L*** を順番に押して有効にします；
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_2.png" style={{width:800, height:'auto'}}/></div>

- すべてが "YES" と表示されたら Enter を押して戻り、その後 Exit を選択して終了します。

:::note

ACM2 と ACM3 を例にとります：
ACM2 から ACM3 に送信したい場合、ACM2 を再度設定する必要があります：***ctrl+A*** を押し、次に ***Z***、さらに ***E*** を押してからシリアルポート書き込みコマンドを開始します。このとき、ACM2 で任意の文字列を出力でき、同時に ACM3 で ACM2 の内容を見ることができます；
逆に、ACM3 から ACM2 に送信したい場合、ACM3 を再度設定する必要があります：***ctrl+A*** を押し、次に ***Z***、さらに ***E*** を押してからシリアルポート書き込みコマンドを開始します。このとき、ACM3 で任意の文字列を出力でき、同時に ACM2 で ACM3 の内容を見ることができます。図のようになります。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_3.png" style={{width:800, height:'auto'}}/></div>

## RS232 テスト

reComputer Industrial R21xx には **2 つの RS232** ポートが含まれており、対応する **COM ポート** と **デバイスファイル** は次のとおりです：

| **RS232 ポート数** | **COM ポート** | **シルク印刷ラベル** | **デバイスファイル** |
|---------------------------|--------------|----------------------|-----------------|
| **RS232-1**               | COM1         | RX1/TX1/GND1         | `/dev/ttyACM0`  |
| **RS232-2**               | COM2         | RX2/TX2/GND2         | `/dev/ttyACM1`  |

RS232 は全二重通信であるため、RS232 の TX と RX を直接短絡させてループバックテストを行います。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/21-rs232.png" style={{width:800, height:'auto'}}/></div>

2 つのターミナルを開く必要があります。拡張ボードが接続されている場合は ACM1、拡張ボードが接続されていない場合は ACM2 です：
**ターミナル 1：***

```bash
sudo minicom -D /dev/ttyACM1 -b 9600
```

拡張ボードが接続されていない場合は、***/dev/ttyACM1*** を ***/dev/ttyACM0*** に変更する必要があります。

**ターミナル 2：**

```bash
printf "hello seeed\r\n" > /dev/ttyACM1
```

**ターミナル 3：**

```bash
printf "hello seeed\r\n" > /dev/ttyACM0
printf "hello seeed\r\n" > /dev/ttyACM1
```

ターミナル 1 には、ターミナル 2 が出力するよう要求した内容が表示されます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/232_test.png" style={{width:800, height:'auto'}}/></div>

## DI（デジタル入力）テスト

reComputer Industrial R21xx には 4 つの DI ポートがあり、ユーザーは実際のニーズに応じてこれらのポートを設定できます。

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>ポート数</th>
        <th>DI ポート</th>
        <th>対応する拡張 GPIO</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="4">4</td>
        <td>DI1</td>
        <td>GPIO588</td>
      </tr>
      <tr>
        <td>DI2</td>
        <td>GPIO589</td>
      </tr>
      <tr>
        <td>DI3</td>
        <td>GPIO590</td>
      </tr>
      <tr>
        <td>DI4</td>
        <td>GPIO595</td>
      </tr>
    </tbody>
  </table>
</div>

DI ポートの入力タイプは PNP です。5VDC〜24VDC の入力電圧をサポートし、電流は 1000mA です。
DI の機能をテストするには、次の手順に従ってテストできます：

1. reComputer Industrial R21xx の DI ポートと外部負荷との接続が完了していることを確認します。
2. 次のコマンドを入力して GPIO の状態を取得します：

```bash
echo 588 > /sys/class/gpio/export
echo in > /sys/class/gpio/gpio588/direction
cat /sys/class/gpio/gpio588/value
```

3. 外部レベルが High のとき、***/sys/class/gpio/gpio588/value*** の値は 0 です。外部レベルが Low のとき、***/sys/class/gpio/gpio588/value*** は 1 です。

## DO（デジタル出力）

reComputer Industrial R21xx には 4 つの DO ポートがあり、ユーザーは実際のニーズに応じてこれらのポートを設定できます。

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>ポート数</th>
        <th>DI ポート</th>
        <th>対応する拡張 GPIO</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="4">4</td>
        <td>DO1</td>
        <td>GPIO638</td>
      </tr>
      <tr>
        <td>DO2</td>
        <td>GPIO637</td>
      </tr>
      <tr>
        <td>DO3</td>
        <td>GPIO636</td>
      </tr>
      <tr>
        <td>DO4</td>
        <td>GPIO635</td>
      </tr>
    </tbody>
  </table>
</div>

DO ポートの出力タイプはトランジスタです。60 VDC 未満の出力電圧と、500 mA の電流容量をサポートします。
DO の機能をテストするには、次の手順に従ってテストできます：

1. reComputer Industrial R21xx の DO ポートと外部負荷との接続が完了していることを確認します。
2. 次のコマンドを入力して、出力を High レベルまたは Low レベルに設定します：

```bash
echo 638 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio638/direction
echo 1 > /sys/class/gpio/gpio638/value
echo 0 > /sys/class/gpio/gpio638/value
```

3. 外部レベルが高い場合、/sys/class/gpio/gpio638/value の値は 0 です。外部レベルが低い場合、/sys/class/gpio/gpio638/value の値は 1 です。

## CAN テスト

### ループバックテスト

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>ポート数</th>
        <th>DI ポート</th>
        <th>対応する拡張 GPIO</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2">4</td>
        <td>CAN-0_H/CAN-0_</td>
        <td>can0</td>
      </tr>
      <tr>
        <td>CAN-1_H/CAN-1_L</td>
        <td>can1</td>
      </tr>
    </tbody>
  </table>
</div>

1. 2 本のデュポン線を使用して can0 と can1 の H-H および L-L を短絡させ、最小ループテストを構成します。

```bash
CAN-0_H─────●───── CAN-0_H
CAN-1_H─────●───── CAN-1_H
```

2. ドライバがロードされていないことを防ぐために、can0 と can1 の 2 つのネットワークインターフェースがシステム上に表示されていることを確認します。

```bash
# should print can0 can1
ls /sys/class/net | grep can 
# should see "successfully initialized"
dmesg | grep -i can
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/can_test_1.png" style={{width:800, height:'auto'}}/></div>

3. 2 つの CAN インターフェースを 500 kbit/s に設定してオンラインにし、データの送受信ができるように準備します（安全のため Low レベルに設定します）。

```bash
sudo ip link set can0 down
sudo ip link set can1 down
sudo ip link set can0 up type can bitrate 500000
sudo ip link set can1 up type can bitrate 500000
```

4. ピンの状態を確認します：

```bash
ip -d link show can0
ip -d link show can1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/can_test_2.png" style={{width:800, height:'auto'}}/></div>

5. can-utils をダウンロードしてインストールし、candump や cansend などの基本ツールを使用できるようにします。

```bash
sudo apt install can-utils
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/can_test_3.png" style={{width:800, height:'auto'}}/></div>

6. can0 を監視しながら can1 からフレームを送信します。メッセージが表示されれば、経路が正常であることを意味します。

```bash
# Terminal A
candump can0
# Terminal B
cansend can1 123#DE.AD.BE.EF.CA.FE.00.11
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/can_test_4.png" style={{width:800, height:'auto'}}/></div>

7. 逆に、can1 を監視しながら can0 からフレームを送信することもできます。メッセージが表示されれば、経路が正常であることを意味します。

```bash
# Terminal A
candump can1
# Terminal B
cansend can0 123#DE.AD.BE.EF.CA.FE.00.11
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/can_test_5.png" style={{width:800, height:'auto'}}/></div>

8. その後の起動を簡単にしたい場合は、起動コマンドをスクリプトに書き込むことができます。起動時に 1 回実行するだけで、自動的にインターフェースを立ち上げることができます。

```bash
#!/bin/bash
sudo ip link set can0 down
sudo ip link set can1 down
sudo ip link set can0 up type can bitrate 500000
sudo ip link set can1 up type can bitrate 500000
echo "can0 & can1 are up @ 500 kbit/s"
```

### Python-CAN テスト

[Python-CAN](https://github.com/raspberrypi/usbboot) は、Controller Area Network (CAN) バス通信のための統一されたプログラミングインターフェースを提供するクロスプラットフォームの Python ライブラリであり、幅広い CAN ハードウェアインターフェースや仮想バスをサポートし、CAN メッセージの送信、受信、フィルタリング、バスモニタリングなどの操作を容易に実装できます。
同様に、ループバック通信を実現するには、CAN インターフェースを物理的に接続する必要があります。

1. 標準的な CAN ボーレート（500 kbit/s）を設定します：

```bash
sudo ip link set down can0
sudo ip link set down can1
sudo ip link set can0 type can bitrate 500000
sudo ip link set can1 type can bitrate 500000
sudo ip link set up can0
sudo ip link set up can1
```

2. 両方のインターフェースが UP 状態であることを確認します：出力に "state UP" と表示されていれば UP 状態を示します。

```bash
ip a show can0
ip a show can1
```

出力に "state UP" と表示されていれば UP 状態を示します。

3. Python 仮想環境と依存関係を構成します。

```bash
mkdir rpi_can_project
cd rpi_can_project
python3 -m venv can_env
source can_env/bin/activate
pip install python-can
```

4. Python スクリプトを入力します：

```python
# can_test.py
import can
import time

# create a bus instance using 'with' statement,
# this will cause bus.shutdown() to be called on the block exit;
# many other interfaces are supported as well (see documentation)
with can.Bus(interface='socketcan',
             channel='vcan0',
             receive_own_messages=True) as bus:

    # send a message
    message = can.Message(arbitration_id=0x7B, is_extended_id=True,
                          data=[0x11, 0x22, 0x33])

    try:
        bus.send(message, timeout=0.2)
        print(f"Message sent: ID={message.arbitration_id:X}, Data={message.data.hex()}")
    except can.exceptions.CanOperationError as e:
        print(f"Error sending message: {e}")

    # iterate over received messages
    print("Listening for 5 seconds...")
    start_time = time.time()


    while time.time() - start_time < 5:
        if msg:
            print(f"Received - ID: {msg.arbitration_id:X}, Data: {msg.data.hex()}")
        else:
            print("No message received in 1 second.")

print("Bus shut down and program finished.")
```

5. 実行します：

```bash
python can_test.py
deactivate
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/python-can.png" style={{width:800, height:'auto'}}/></div>

## USB ハブテスト

USB ハブをテストするには、次の手順を実行します：

1. ***lsusb*** コマンドを実行して USB ハブが検出されているか確認します。このコマンドは、ハブを含む接続されているすべての USB デバイスを一覧表示します。

```bash
lsusb
```

このコマンドを実行すると、システムに接続されている USB デバイスに関する情報が表示され、その中に存在する USB ハブも含まれます。
USB ハブが正常に動作していれば、lsusb コマンドの出力にその詳細が表示されます。表示されない場合は、ハブまたはシステムへの接続に問題がある可能性があります。そのような場合は、USB ハブまたはその接続をトラブルシューティングする必要があります。

## RTC（リアルタイムクロック）テスト

リアルタイムクロック（RTC）機能をテストするには、次の手順に従います：

1. 自動時刻同期を無効にします：

```bash
sudo systemctl stop systemd-timesyncd
sudo systemctl disable systemd-timesyncd
```

2. 時刻を設定します：
RTC に特定の日付と時刻を設定します：

```bash
sudo hwclock --set --date "2025-7-17 12:00:00"
```

3. RTC 時刻をシステムに同期します
システム時刻を RTC 時刻と一致するように更新します：  

```bash
sudo hwclock --hctosys
```

4. RTC 時刻を確認します：

```bash
sudo hwclock -r
```

このコマンドは RTC に保存されている時刻を読み取り、表示します。

5. RTC から電源を切り離し、数分待ってから再接続し、RTC 時刻を再度確認して正しい時刻が保持されているか確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.16_rtc_1.png" style={{width:800, height:'auto'}}/></div>

## ウォッチドッグタイマーテスト

ウォッチドッグテストを実行するには、次の手順に従います：

1. ウォッチドッグソフトウェアをインストールします：

```bash
sudo apt install watchdog
```

2. ウォッチドッグの設定ファイルを編集します：

```bash
# make sure you install vim already, if haven't, can install by the command below
sudo apt-get install vim
sudo vim /etc/watchdog.conf
```

設定を次のように変更します：

```bash
watchdog-device = /dev/watchdog
# Uncomment and edit this line for hardware timeout values that differ
# from the default of one minute.
watchdog-timeout = 120
# If your watchdog trips by itself when the first timeout interval
# elapses then try uncommenting the line below and changing the
# value to 'yes'.
#watchdog-refresh-use-settimeout = auto
# If you have a buggy watchdog device (e.g. some IPMI implementations)
# try uncommenting this line and setting it to 'yes'.
#watchdog-refresh-ignore-errors = no
# ====================== Other system settings ========================
#
# Interval between tests. Should be a couple of seconds shorter than
# the hardware time-out value.
interval = 15
max-load-1 = 24
#max-load-5 = 18
#max-load-15 = 12
realtime = yes
priority = 1
```

必要に応じて他の設定を調整できます。

3. ウォッチドッグサービスが実行中であることを確認します：

```bash
sudo systemctl start watchdog
```

4. ウォッチドッグ機能をテストするには、次のコマンドを実行してシステムハングをシミュレートします：

```bash
sudo su

echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

このコマンドはカーネルクラッシュをトリガーし、ウォッチドッグによってシステムが再起動されるはずです。

5. 指定したタイムアウト期間後にシステムが再起動することを確認するため、システムを監視します。
これらの手順により、システム上のウォッチドッグタイマーの機能をテストし、確認することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.17_watchdog_1.png" style={{width:800, height:'auto'}}/></div>

## GPIO によるブザー制御  

ブザーに対応する GPIO は gpio627 です。ブザーをオン／オフするには、次のスクリプトを入力します：

1. ブザーをオンにする：

```bash
echo 627 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio627/direction
echo 1 > /sys/class/gpio/gpio627/value
```  

2. ブザーをオフにする：ブザーをオフにする：

```bash
echo 627 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio627/direction 
echo 0 > /sys/class/gpio/gpio627/value
```  

## TPM 2.0

TPM 2.0 モジュールをデバイスに接続している場合、次のコードで TPM 接続を確認できます。

```bash
ls /dev | grep tpm
```  

**出力の解釈：**  

出力に ***tpm0*** と ***tpmrm0*** が表示されていれば、TPM（Trusted Platform Module）デバイスが検出され、システム上で利用可能であることを意味します。これは TPM ハードウェアが認識されアクセス可能であることを示しており、良好な状態です。デバイスが存在しアクセス可能であることを前提に、TPM 関連の機能やアプリケーションを使用して進めることができます。

## ATECC608A

ATECC608A デバイスと対話し、ランダムなシリアル番号を生成するには、次の手順に従います：

1. atecc-util リポジトリをクローンします：

```bash
curl -LJO https://github.com/wirenboard/atecc-util/releases/download/v0.4.12/atecc-util_0.4.12_arm64.deb
```  

2. .deb パッケージの内容を現在のディレクトリに展開します：

```bash
dpkg -x ./atecc-util_0.4.12_arm64.deb .
```  

3. atecc ディレクトリに移動します：

```bash
cd usr/bin
```

4. ランダムなシリアル番号を生成します：

```bash
./atecc -b 10 -s 192 -c 'serial'
```

このコマンドは、ATECC ユーティリティにスロット 10（-b 10）を使用し、シリアル番号のサイズを 192 ビットに設定 ***(-s 192)*** し、ランダムなシリアル番号を生成するように指示します ***(-c 'serial')***。出力は、***"01235595d3d621f0ee"*** のような生成されたシリアル番号になります。
このプロセスにより、ATECC608A デバイスと対話し、ランダムなシリアル番号の生成など、さまざまな操作を実行できます。

## EEPROM とのやり取り

EEPROM（電気的消去可能プログラム可能読み出し専用メモリ）とやり取りするためのコマンドは次のとおりです：

1. EEPROM デバイスファイルに対して、読み取り・書き込み・実行のフルパーミッションを付与します：

```bash
 sudo chmod 777 /sys/bus/i2c/devices/10-0050/eeprom
```  

2. 文字列 "This is a test string" を EEPROM デバイスに書き込みます：

```bash
echo "This is a test string" > /sys/bus/i2c/devices/10-0050/eeprom
```  

3. EEPROM デバイスの内容を読み取り、hexdump ユーティリティを使用して ***16 進数*** 形式で表示します：

```bash
cat /sys/bus/i2c/devices/6-0050/eeprom | hexdump -C
```  

## SSD 検出の確認

SSD を含むディスクを一覧表示するには、`fdisk -l` コマンドを使用できます。方法は次のとおりです：

```bash
sudo fdisk -l
```

このコマンドは、システムに接続されているすべてのディスクの一覧を表示し、適切に検出されていれば SSD も含まれます。SSD を表すエントリを探してください。通常、***/dev/sd*** に続いて文字が付きます（例：***/dev/sda, /dev/sdb,*** など）。
SSD に対応するエントリを特定したら、必要に応じてパーティション分割やフォーマットを行うことができます。

## 安全なシャットダウンのための UPS

CPU と DC 電源入力の間の GPIO6 は、電源が落ちたときに CPU に警告を出すために使用されます。その後、CPU はスーパーキャパシタのエネルギーが尽きる前にスクリプト内で緊急の処理を行い、"$ shutdown" を実行する必要があります。
この機能を使用する別の方法は、GPIO ピンの変化をトリガとしてシャットダウンを開始することです。指定された GPIO ピンは、KEY_POWER イベントを生成する入力キーとして構成されます。このイベントは systemd-logind によって処理され、シャットダウンが開始されます。

1. ハードウェア接続

UPS デバイスの ***'CM5_UPS_DET'*** ピンが R21xx デバイスの GPIO16 ピンに接続されていることを確認してください。

2. 設定ファイルを変更します。

- ターミナルを開きます。
- 次のコマンドを実行して設定ファイルを編集します：

```bash
sudo nano /boot/firmware/config.txt
```

3. ファイルの末尾に次の内容を追加します：

```bash
dtoverlay=gpio-shutdown,gpio_pin=GPIO16,active_low=1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.23_ups_for_safe_shut_down_1.png" style={{width:800, height:'auto'}}/></div>

エディタを保存して終了します（***`Ctrl+O`*** で保存し、***`Enter`*** で確定、***`Ctrl+X`*** で終了します）。

4. Python スクリプトを準備します

- 新しい Python スクリプトファイルを作成します：

```bash
cd ~
sudo nano ups_shutdown.py
```

- 次のコードをファイルにコピー＆ペーストします：

```bash
import RPi.GPIO as GPIO
import time, os

num = 0

GPIO.setmode(GPIO.BCM)

# Set GPIO16 to input mode
# Add 500ms anti-shake time to stabilize the software
GPIO.setup(16, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.add_event_detect(16, GPIO.FALLING, bouncetime=500)

while True:
    if GPIO.event_detected(16):
        print("...External power off...")
        print("")

        # Sync data to disk
        os.system('sync')
        print("...Data saving...")
        print("")

        # Sleep for 3 seconds
        time.sleep(3)

        # Synchronize data again
        os.system('sync')

        # Countdown 5 seconds
        while num < 5:
            print('----------')
            s = 5 - num
            print('---' + str(s) + '---')
            num = num + 1
            time.sleep(1)
            print('----------')

        # Execute shutdown command
        os.system('sudo shutdown -h now')
```

エディタを保存して終了します（***`Ctrl+O`*** で保存し、***`Enter`*** で確定、***`Ctrl+X`*** で終了します）。

5. スクリプトを実行します。

- ターミナルを開きます。
- 次のコマンドを実行してスクリプトを実行します：

```bash
sudo python3 ups_shutdown.py
```

:::note
 シャットダウンコマンドを実行するために十分な権限を確保するため、`sudo` を使用してください。
:::

6. 電源障害テストをシミュレートします

- 外部電源を遮断します。
- システムが自動的にデータを保存してシャットダウンするかどうかを確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.23_ups_for_safe_shut_down_1.png" style={{width:800, height:'auto'}}/></div>

7. 結果を確認します

- 電源を再接続します。
- システムデータが完全で、正常に起動するかどうかを確認します。

:::note

1. UPS 機能については、詳細情報についてお問い合わせください。
2. アラーム信号はアクティブ Low です。

:::

## AI アクセラレータ

reComputer Industrial R21xx の M.2 M-KEY 2280 スロットは、PCIE M.2 AI アクセラレータを搭載できるように設計されています。また、R21xx-12 シリーズには最大 26TOPS の Hailo-8 M.2 AI アクセラレーションがプリインストールされています。
R21xx-10 シリーズ製品を購入した場合は、AI 機能を有効にするために Hailo の NPU モジュールを別途購入する必要があります。
本デバイスには Hailo アクセラレータドライバがプリインストールされているため、そのまま使用してテストケースを実行できます：

1. テストケースのディレクトリに移動します

```bash
cd /mnt/hailo-rpi5-examples/
```

2. 仮想環境を起動します

```bash
source ./setup_env.sh
```

3. シンプルな検出サンプルを実行します

```bash
python basic_pipelines/detection_simple.py
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.24_ai__accelerator_1.png" style={{width:800, height:'auto'}}/></div>

アプリケーションを終了するには、***`Ctrl+C`*** を押します。
これは検出サンプルの軽量版であり、CPU 負荷を最小限に抑えつつ Hailo の性能を示すことに主眼を置いています。内部の GStreamer ビデオ処理パイプラインは、ビデオ処理タスクを最小限にすることで簡略化されており、YOLOv6 Nano モデルが使用されています。

:::note
購入した reComputer に Hailo-8 が含まれておらず、Hailo デバイスの導入を検討している場合は、公式の Hailo ドキュメント（https://github.com/hailo-ai）を参照して、ファームウェアと環境を構成し、サンプルを実行してデバイスが正常に使用できることを確認してください。
:::

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択できる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
