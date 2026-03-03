---
description: デバイスのインストール後、reComputer Industrial R20xxシリーズでハードウェアコンポーネントを設定およびテストする方法を学びます。このwikiでは、GPIOマッピング、USER LEDテスト、SPI通信、Wi-FiおよびBluetoothスキャン、LoRa®、5G、4G、Mini-PCIe経由のZigbee、RS485、RS232、DI/DOテスト、安全なシャットダウンのためのUPSについて説明します。
title: reComputer Industrial R20xxの設定
keywords:
- Raspberry pi
- Edge Controller
- reComputer Industrial R20xx
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg
slug: /ja/recomputer_industrial_r20xx_configure_system
last_update:
  date: 09/28/2025
  author: Nolan Chen
---

## 概要

デバイスのインストール後、reComputer Industrial R20xxシリーズでハードウェアコンポーネントを設定およびテストする方法を学びます。このwikiでは、GPIOマッピング、USER LEDテスト、SPI通信、Wi-FiおよびBluetoothスキャン、LoRa®、4G、5G、Mini-PCIe経由のZigbee、RS485、RS232、DI/DOテスト、安全なシャットダウンのためのUPSなどについて説明します。

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2045-12-p-6544.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## GPIOマッピングとオフセットの照会

GPIOマッピングとオフセットを照会するには、以下の手順に従ってください：

1. 以下のコマンドをコピーして貼り付け、GPIOマッピングを照会します：

```bash
cat /sys/kernel/debug/gpio
```

**このコマンドはGPIOマッピングとオフセットを表示し**、GPIOピンのデバッグや設定に必要な情報を提供します。

## USER LEDテスト

ユーザーが使用できる赤、青、緑の3色のLEDを提供しています。/sys/class/leds/ディレクトリに入って確認できます：

**1. LEDディレクトリに移動**  

```bash
cd /sys/class/leds/
ls
```

以下のコマンドを使用して、対応する色のLEDを点灯させます。

```bash
sudo su
echo 1 > /sys/class/leds/led-red//brightness
echo 1 > /sys/class/leds/led-blue/brightness
echo 1 > /sys/class/leds/led-green/brightness
```

これにより対応するLEDが**点灯**します。

**3. LEDを消灯（オプション）**  
特定のLEDを**消灯**するには、以下を使用します：

```bash
echo 0 > /sys/class/leds/led-red/brightness
echo 0 > /sys/class/leds/led-blue/brightness
echo 0 > /sys/class/leds/led-green/brightness
```

## SPI通信のテスト

TPMモジュールのMISOとMOSIピンをショートしてSPI通信をテストするには、以下の手順に従ってください：

1. spidev-testリポジトリをクローンします：

```bash
# Don't forget to connect to network before running command
git clone https://github.com/rm-hull/spidev-test.git
```

2. spidev-testディレクトリに移動します：

```bash
cd spidev-test
```

3. spidev_test.cファイルをコンパイルします：

```bash
gcc spidev_test.c -o spidev_test
```

4. 以下のコマンドでspidev_testプログラムを実行します：

```bash
./spidev_test -D /dev/spidev10.0 -v -p hello
```

このコマンドは、指定されたSPIデバイス（**/dev/spidev10.0**）でSPI通信をテストし、詳細出力（-v）で「hello」メッセージ（**-p hello**）を送信します。
TPMモジュールのMISOとMOSIピンをショートすることで、MOSIで送信されたデータがMISOで受信される効果的なループバックシナリオを作成します。この設定により、実際のデバイスを接続せずにSPI通信をテストできます。

## Wi-Fiスキャン

利用可能なWi-Fiネットワークとその詳細を一覧表示するには、以下を実行します：  

```bash
sudo iwlist wlan0 scan
```

- このコマンドは近くのすべてのWi-Fiネットワークをスキャンし、SSID、信号強度、暗号化タイプを表示します。  

## Bluetoothスキャン  

Bluetoothデバイスをスキャンするには、以下の手順に従ってください：  

**Bluetooth制御インターフェースを開く：**  

```bash
sudo bluetoothctl
```

このコマンドはBluetooth制御インターフェースを開きます。そこから、近くのBluetoothデバイスをスキャンするための追加コマンドを実行できます。

**スキャンを有効にする：**  

```bash
scan on
```

このコマンドは近くのBluetoothデバイスのスキャンを開始します。その後、***bluetoothctl***インターフェース内で他のコマンドを使用して、ペアリングや接続などのBluetoothデバイスとの相互作用を行うことができます。

## Mini-PCIe経由のLoRa®

### LoRa® SPI設定  

LoRa® SPIをMini-PCIeスロット2にインストールした後、LoRa® SPIを設定するには、以下の手順に従ってください：

1. **SX1302_HAL**リポジトリをクローンします：

```bash
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
```

2. クローンしたディレクトリに移動します：

```bash
cd sx1302_hal
```

3. 設定ファイルを変更します：

I2Cデバイス設定ファイルを開きます：  

```bash
sudo nano ./libloragw/inc/loragw_i2c.h
```

この行を変更します：  

```c
#define I2C_DEVICE "/dev/i2c-1"
```

次のように変更します：  

```c
#define I2C_DEVICE "/dev/i2c-2"
```

**#define I2C_DEVICE "/dev/i2c-1"**を**#define I2C_DEVICE "/dev/i2c-2"**に変更します。
**ctrl+x**を押して終了し、**y**を押して変更を保存し、**Enter**を押してコマンドラインページに戻ります。

4. packet_forwarder/reset_lgw.shファイルを追加します：

```bash
sudo nano packet_forwarder/reset_lgw.sh
```

実行コードを追加します：

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

**ctrl+x**を押して終了し、**y**を押して変更を保存し、**Enter**を押してコマンドラインページに戻ります。

5. 設定コードを変更します：

```bash
sudo vim ./tools/reset_lgw.sh
```

ピン設定を更新します：

```bash
SX1302_RESET_PIN=632     # SX1302 reset
SX1302_POWER_EN_PIN=633  # SX1302 power enable
SX1261_RESET_PIN=634     # SX1261 reset (LBT / Spectral Scan)
# AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

18、29、35、42、53、54行目をそれぞれコメントアウトします：

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

ctrl+xを押して終了し、yを押して変更を保存し、Enterを押してコマンドラインページに戻ります。

6. global_conf.json.sx1250.US915設定ファイル内のLoraWAN®モジュールのデフォルトSPIポートを置き換えます（設定ファイルは使用しているモジュールに基づいて選択されます）：

```bash
sudo nano packet_forwarder/global_conf.json.sx1250.US915
```

com_pathパラメータを変更し、***"com_path": "/dev/spidev0.0"***を***"com_path": "/dev/spidev2.0"***に変更します。

7. コードをコンパイルします：

```bash
sudo make
```

これらの手順により、LoRa® SPIが設定され、指定された設定ファイルでパケットフォワーダーが実行されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.7.1_lora_spi_1.png" style={{width:800, height:'auto'}}/></div>

### LoRa® USB設定

LoRa® USBの場合、前のコマンドはLoRa® SPIと同じままです。ただし、最終コマンドを以下に変更する必要があります：

```bash
cho  632  >  /sys/class/gpio/export
echo  "out"  >  /sys/class/gpio/gpio632/direction
echo  "1"  >  /sys/class/gpio/gpio632/value

sudo  ./lora_pkt_fwd  -c  global_conf.json.sx1250.EU868.USB
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.7.2_lora_usb_1.png" style={{width:800, height:'auto'}}/></div>

このコマンドは、LoRa® USBに使用する設定ファイルを指定します。

## M.2 B-KEY経由の5Gセルラー

minicom経由でATコマンドを使用して5G/4Gモジュールと相互作用するには、以下の手順に従ってください：

1. 新しいpower_5g.shファイルを作成します：

```bash
nano power_5g.sh
```

sudo nanoで開き、以下のコマンドを入力し、***ctrl+x***を押して保存して終了します。

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

10-15秒後（モジュールの電源投入とUSB列挙に時間がかかります）、デバイスノードが表示されるかどうかを確認します：

```bash
ls /dev/ttyUSB*
```

/dev/ttyUSB0などが出力されます：
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.8_5g_cellular_over_m.2_b-key_1.png" style={{width:800, height:'auto'}}/></div>
適切なシリアルポートとボーレートでminicomを開きます：

```bash
sudo apt update
sudo apt install minicom
sudo minicom -D /dev/ttyUSB2 -b 115200
```

このコマンドは、指定されたシリアルポート（***/dev/ttyUSB2***）でボーレート115200のminicomを開きます。

1. minicomが開いたら、4GモジュールにATコマンドを送信できます。例えば：

```bash
AT
```

このコマンドはモジュールが応答するかどうかを確認します。モジュールが正常に動作している場合、***"OK"***レスポンスを受信するはずです。

2. 4Gモジュールを使用して電話番号にダイヤルするには、ATDコマンドの後に電話番号を続けて使用できます：

```bash
ATD<phone_number>;
```

**phone_number**をダイヤルしたい電話番号に置き換えてください。
電話番号の終了を示すために、コマンドの最後にセミコロン;を含めるようにしてください。

## Mini-PCIe経由の4Gセルラー

新しいpower_4g.shファイルを作成します：

```bash
sudo nano power_4g.sh
```

sudo nanoで開き、以下のコマンドを入力してから、ctrl+xを押して保存して終了します。

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

10-15秒後（モジュールの電源投入とUSB列挙に時間がかかります）、デバイスノードが表示されるかどうかを確認します：

```bash
ls /dev/ttyUSB*
```

/dev/ttyUSB0が出力されます。
GPIOの実際の動作を確認します：

```bash
cat /sys/class/gpio/gpio645/value # should be 0
cat /sys/class/gpio/gpio639/value # should be 0
```

両方の値が0 → スクリプトが正しくプルダウンされ、モジュールが動作状態にあります。
minicomに入ってコマンドを送信します：

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

● ***Ctrl+A,Z,E***を順番に押します。最初にATを送信して接続されているかどうかをテストします。OKが表示されれば、接続は成功です。
以下のコマンドを実行すると、モジュールが自動的に再起動します。minicomを終了しない場合、対応する設定情報を確認できます。
ECMダイヤルアップインターネットアクセス：

```bash
AT+QCFG="usbnet",1
```

最後の行にOKが表示されるまで、成功となります。

> 注意
> デバイスはしばらく待つ必要があり、その後ifconfigでusb0のIPアドレスを確認できます。

ネットワーク状態と通信をテストします：

```bash
# Check network status
ifconfig
# Test communication
ping www.baidu.com -I usb0
```

## Mini-PCIe経由のZigbee

2つのZigbeeモジュール間で**Zigbee通信**をテストするには、以下の手順に従ってください：  

1. 利用可能なシリアルポートを確認

以下のコマンドを使用して利用可能なシリアルポートを確認します：

```bash
cat /dev/ttyUSB*
```

**シリアル通信ツールのインストール**

2. シリアル通信ツールをインストールします：

```bash
sudo apt-get install cutecom
```

3. コーディネーター（最初のZigbeeモジュール）のシリアルポートを開きます：

- cutecomツールを開き、最初のシリアルポート用に設定します：
- ボーレート：***115200***
- インターフェースの下部にある***「Hex output」***オプションをチェックします。
- 以下の手順に従って最初のZigbeeモジュールを設定します：
- コーディネーターとして設定：コマンド***'55 04 00 05 00 05'***を送信し、レスポンス***'55 04 00 05 00 05'***を期待します。
- デバイスをリセット：リセットボタンを押すか、コマンド***'55 07 00 04 00 FF FF 00 04'***を送信します。
- ネットワーク形成：コマンド***'55 03 00 02 02'***を送信します。

4. ルーター（2番目のZigbeeモジュール）のシリアルポートを開きます：
***cutecom***の別のインスタンスを開き、前と同じ設定で2番目のシリアルポート用に設定します。
以下の手順に従って2番目のZigbeeモジュールを設定します：

- ルーターとして設定：コマンド***'55 04 00 05 01 04'***を送信し、レスポンス***'55 04 00 05 00 05'***を期待します。
- デバイスをリセット：リセットボタンを押すか、コマンド***'55 07 00 04 00 FF FF 00 04'***を送信します。
- ネットワーク形成：コマンド***'55 03 00 02 02'***を送信します。

5. デバイス状態を確認します：
コマンド***'55 03 00 00 00'***を送信してデバイス状態を確認します。***'55 2a 00 00 00 01 XX XX XX XX'***のようなレスポンスを期待します。ここで'XX'はデバイス情報を表します。
6. 透過モードに入ります：
ネットワーク形成が成功した場合、コマンド***55 07 00 11 00 03 00 01 13***を送信して透過モードに入ります。両方のモジュールが直接通信するために透過モードにある必要があります。透過モードを終了するには、「+++」を送信します。
7. 追加の注意事項：

- ルーター設定が失敗した場合、デバイスがすでにコーディネーターである可能性があります。コマンド'55 07 00 04 02 xx xx xx'を使用してネットワークから離脱します。
- コマンド'55 04 0D 00 00 0D'（クエリ）と'55 04 0D 01 XX XX'（設定）を使用して送信電力をテストします。
各Zigbeeモジュールの正しいシリアルポートで***/dev/ttyUSB***を置き換えることを確認してください。これらの手順に注意深く従って、2つのモジュール間のZigbee通信を正常にテストしてください。

## RS485テスト

reComputer Industrial R20xxには**3つのRS485ポート**が含まれています。以下は対応する**COMポート**と**デバイスファイル**です：  

| **RS485ポート数** | **COMポート** | **シルクスクリーンラベル** | **デバイスファイル** |
|---------------------------|--------------|----------------------|-----------------|
| **RS485-2**               | COM2         | A2/B2/GND2           | `/dev/ttyACM1`  |
| **RS485-3**               | COM3         | A3/B3/GND3           | `/dev/ttyACM2`  |
| **RS485-4**               | COM4         | A4/B4/GND4           | `/dev/ttyACM3`  |

RS485機能をテストするには、以下の手順に従ってください（RS485_1とRS485_2を例とします）：

1. RS485_1とRS485_2のAとBを接続してください。
2. 2つのターミナルウィンドウでそれぞれminicomを開きます：

```bash
sudo minicom -D /dev/ttyACM1
sudo minicom -D /dev/ttyACM2
```

:::note
 拡張ボードがある場合、番号を1つ後ろにずらす必要があります。例えば***/dev/ttyAcM2***、***/dev/ttyAcM3***。
:::

3. 開いた両方のACMで以下の操作を実行する必要があります：

- ***Ctrl+A***を押してから***Z***を押すと、Minicomコマンドサマリーインターフェースが表示されます：
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_1.png" style={{width:800, height:'auto'}}/></div>
- 再度***O***を押して設定を開き、Serial port setupを選択して***Enter***を押します；すべてのRS485関連インターフェースを開き、***H/I/J/K/L***を順番に押して開きます；
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_2.png" style={{width:800, height:'auto'}}/></div>

- すべて「YES」が表示されたら、Enterを押して戻り、Exitを選択して終了します。

:::note

ACM2とACM3を例とします：
ACM2からACM3に送信したい場合、ACM2を再度設定する必要があります：***ctrl+A***、次に***Z***を押してから***E***を押し、シリアルポート書き込みコマンドを開始します。この時、ACM2で自由に文字列を印刷でき、同時にACM3でACM2の内容を確認できます；
逆に、ACM3からACM2に送信したい場合、ACM3を再度設定する必要があります：***ctrl+A***、次に***Z***を押してから***E***を押し、シリアルポート書き込みコマンドを開始します。この時、ACM3で自由に文字列を印刷でき、同時にACM2でACM3の内容を確認できます。図に示すとおりです。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_3.png" style={{width:800, height:'auto'}}/></div>

## RS232テスト

reComputer Industrial R20xxには1つのRS232ポートが含まれており、対応するCOMポートとデバイスファイルは以下のとおりです：

| **RS232ポート数** | **COMポート** | **シルクスクリーンラベル** | **デバイスファイル** |
|---------------------------|--------------|----------------------|-----------------|
| **RS232-1**               | COM1         | RX1/TX1/GND1         | `/dev/ttyACM0`  |

RS232は全二重通信であるため、RS232のTXとRXを直接短絡してループバックテストを実行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.12_rs232_testing_1.png" style={{width:800, height:'auto'}}/></div>

2つのターミナルを開く必要があります。拡張ボードが接続されている場合はACM1、拡張ボードが接続されていない場合はACM2：
**ターミナル1：***

```bash
sudo minicom -D /dev/ttyACM1 -b 9600
```

拡張ボードが接続されていない場合、***/dev/ttyACM1***を***/dev/ttyACM0***に変更する必要があります。

**ターミナル2：**

```bash
printf "hello seeed\r\n" > /dev/ttyACM1
```

ターミナル1には、ターミナル2が印刷を要求した内容が表示されます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.12_rs232_testing_2.png" style={{width:800, height:'auto'}}/></div>

## DI（デジタル入力）テスト

reComputer Industrial R20xxには8つのDIポートが含まれており、ユーザーは実際のニーズに応じてこれらのポートを設定できます。

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>ポート数</th>
        <th>DIポート</th>
        <th>対応する拡張GPIO</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="8">8</td>
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
      <tr>
        <td>DI5</td>
        <td>GPIO573</td>
      </tr>
      <tr>
        <td>DI6</td>
        <td>GPIO574</td>
      </tr>
      <tr>
        <td>DI7</td>
        <td>GPIO575</td>
      </tr>
      <tr>
        <td>DI8</td>
        <td>GPIO576</td>
      </tr>
    </tbody>
  </table>
</div>

DIポートの入力タイプはPNPです。入力電圧5VDC～24VDC、電流1000mAをサポートします。
DIの機能をテストするには、以下の手順に従ってテストできます：

1. reComputer Industrial R20xxのDIポートと外部負荷の接続が完了しています。
2. 以下のコマンドを入力してGPIOの状態を取得します：

```bash
echo 588 > /sys/class/gpio/export
echo in > /sys/class/gpio/gpio588/direction
cat /sys/class/gpio/gpio588/value
```

3. 外部レベルがハイの場合、***/sys/class/gpio/gpio588/value***の値は0になります。外部レベルがローの場合、***/sys/class/gpio/gpio588/value***は1になります。

## DO（デジタル出力）

reComputer Industrial R20xxには8つのDOポートが含まれており、ユーザーは実際のニーズに応じてこれらのポートを設定できます。

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>ポート数</th>
        <th>DIポート</th>
        <th>対応する拡張GPIO</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="8">8</td>
        <td>DO1</td>
        <td>GPIO638</td>
      </tr>
      <tr>
        <td>DO2</td>
        <td>GPIO637</td>
      </tr>
      <tr>
        <td>DO3</td>
        <td>GPIO590</td>
      </tr>
      <tr>
        <td>DO4</td>
        <td>GPIO636</td>
      </tr>
      <tr>
        <td>DO5</td>
        <td>GPIO635</td>
      </tr>
      <tr>
        <td>DO6</td>
        <td>GPIO577</td>
      </tr>
      <tr>
        <td>DO7</td>
        <td>GPIO594</td>
      </tr>
      <tr>
        <td>DO8</td>
        <td>GPIO596</td>
      </tr>
    </tbody>
  </table>
</div>

DOポートの出力タイプはトランジスタです。出力電圧60VDC未満、電流容量500mAをサポートします。
DOの機能をテストするには、以下の手順に従ってテストできます：

1. reComputer Industrial R20xxのDOポートと外部負荷の接続が完了しています。
2. 以下のコマンドを入力して出力をハイレベルまたはローレベルに設定します：

```bash
echo 638 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio638/direction
echo 1 > /sys/class/gpio/gpio638/value
echo 0 > /sys/class/gpio/gpio638/value
```

3. 外部レベルがハイの場合、/sys/class/gpio/gpio638/valueの値は0になります。外部レベルがローの場合、/sys/class/gpio/gpio638/valueは1になります。

## USBハブテスト

USBハブをテストするには、以下の手順を使用できます：

1. ***lsusb***コマンドを実行してUSBハブが検出されているかを確認します。このコマンドは、ハブを含むすべての接続されたUSBデバイスをリストします。

```bash
lsusb
```

このコマンドを実行すると、存在するUSBハブを含む、システムに接続されたUSBデバイスに関する情報が表示されます。
USBハブが正常に機能している場合、lsusbコマンドの出力にその詳細がリストされているはずです。リストされていない場合、ハブまたはシステムへの接続に問題がある可能性があります。そのような場合は、USBハブまたはその接続のトラブルシューティングが必要になる場合があります。

## RTC（リアルタイムクロック）テスト

リアルタイムクロック（RTC）機能をテストするには、以下の手順に従います：

1. 自動時刻同期を無効にします：

```bash
sudo systemctl stop systemd-timesyncd
sudo systemctl disable systemd-timesyncd
```

2. 時刻を設定します：
RTCを特定の日付と時刻に設定します：

```bash
sudo hwclock --set --date "2025-7-17 12:00:00"
```

3. RTC時刻をシステムに同期します
システム時刻をRTC時刻に合わせて更新します：

```bash
sudo hwclock --hctosys
```

4. RTC時刻を確認します：

```bash
sudo hwclock -r
```

このコマンドは、RTCに保存されている時刻を読み取って表示します。

5. RTCから電源を切断し、数分待ってから再接続し、RTCが正しい時刻を保持しているかを確認するためにRTC時刻を再度チェックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.16_rtc_1.png" style={{width:800, height:'auto'}}/></div>

## ウォッチドッグタイマーテスト

ウォッチドッグテストを実行するには、以下の手順に従います：

1. ウォッチドッグソフトウェアをインストールします：

```bash
sudo apt install watchdog
```

2. ウォッチドッグ設定ファイルを編集します：

```bash
# make sure you install vim already, if haven't, can install by the command below
sudo apt-get install vim
sudo vim /etc/watchdog.conf
```

設定を以下のように変更します：

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

3. ウォッチドッグサービスが実行されていることを確認します：

```bash
sudo systemctl start watchdog
```

4. ウォッチドッグ機能をテストするには、以下のコマンドを実行してシステムハングをシミュレートします：

```bash
sudo su

echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

このコマンドはカーネルクラッシュを引き起こし、ウォッチドッグがシステムを再起動させるはずです。

5. システムを監視して、指定されたタイムアウト期間後にシステムが再起動することを確認します。
これらの手順は、システムのウォッチドッグタイマーの機能をテストし、確認するのに役立ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.17_watchdog_1.png" style={{width:800, height:'auto'}}/></div>

## GPIOによるブザーの制御

ブザーに対応するGPIOはgpio627です。以下のスクリプトを入力してブザーをオン/オフします：

1. ブザーをオンにします：

```bash
echo 627 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio627/direction
echo 1 > /sys/class/gpio/gpio627/value
```  

2. ブザーをオフにします：ブザーをオフにします：

```bash
echo 627 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio627/direction 
echo 0 > /sys/class/gpio/gpio627/value
```  

## TPM 2.0

TPM 2.0モジュールをデバイスに接続している場合、以下のコードでTPM接続を確認できます。

```bash
ls /dev | grep tpm
```  

**出力の解釈：**

出力に***tpm0***と***tpmrm0***が表示される場合、TPM（Trusted Platform Module）デバイスが検出され、システムで利用可能であることを意味します。これは、TPMハードウェアが認識され、アクセス可能であることを示しており、良い兆候です。デバイスが存在し、アクセス可能であることを知って、TPM関連の機能やアプリケーションの使用を続行できます。

## ATECC608A

ATECC608Aデバイスと対話し、ランダムなシリアル番号を生成するには、以下の手順に従います：

1. atecc-utilリポジトリをクローンします：

```bash
curl -LJO https://github.com/wirenboard/atecc-util/releases/download/v0.4.12/atecc-util_0.4.12_arm64.deb
```  

2. .debパッケージの内容を現在のディレクトリに展開します：

```bash
dpkg -x ./atecc-util_0.4.12_arm64.deb .
```  

3. ateccディレクトリに移動します：

```bash
cd usr/bin
```

4. ランダムなシリアル番号を生成します：

```bash
./atecc -b 10 -s 192 -c 'serial'
```

このコマンドは、ATECCユーティリティにスロット10を使用し（-b 10）、シリアル番号サイズを192ビットに設定し***（-s 192）***、ランダムなシリアル番号を生成する***（-c 'serial'）***よう指示します。出力は、***「01235595d3d621f0ee」***などの生成されたシリアル番号になります。
このプロセスにより、ATECC608Aデバイスと対話し、ランダムなシリアル番号の生成などのさまざまな操作を実行できます。

## EEPROMとの対話

EEPROM（電気的消去可能プログラマブル読み取り専用メモリ）と対話するためのコマンドは以下の通りです：

1. EEPROMデバイスファイルに完全な権限（読み取り、書き込み、実行）を付与します：

```bash
 sudo chmod 777 /sys/bus/i2c/devices/10-0050/eeprom
```  

2. 文字列「This is a test string」をEEPROMデバイスに書き込みます：

```bash
echo "This is a test string" > /sys/bus/i2c/devices/10-0050/eeprom
```  

3. EEPROMデバイスの内容を読み取り、hexdumpユーティリティを使用して***16進数***形式で表示します：

```bash
cat /sys/bus/i2c/devices/6-0050/eeprom | hexdump -C
```  

## SSD検出の確認

SSDを含むディスクをリストするには、fdisk -lコマンドを使用できます。方法は以下の通りです：

```bash
sudo fdisk -l
```

このコマンドは、SSDが適切に検出されている場合はそれを含む、システムに接続されたすべてのディスクのリストを表示します。SSDを表すエントリを探してください。通常、***/dev/sd***で始まり、その後に文字が続きます（例：***/dev/sda、/dev/sdb***など）。
SSDに対応するエントリを特定したら、必要に応じてパーティション分割やフォーマットを続行できます。

## 安全なシャットダウンのためのUPS

CPUとDC電源入力の間のGPIO6は、電源が落ちたときにCPUに警告するために使用されます。その後、CPUはスーパーキャパシタのエネルギーが枯渇する前にスクリプト内で緊急の処理を行い、「$ shutdown」を実行する必要があります。
この機能を使用する別の方法は、GPIOピンが変化したときにシャットダウンを開始することです。指定されたGPIOピンは、KEY_POWERイベントを生成する入力キーとして設定されます。このイベントは、systemd-logindによってシャットダウンを開始することで処理されます。

1. ハードウェア接続。

UPSデバイスの***'CM5_UPS_DET'***ピンがR20xxデバイスのGPIO16ピンに接続されていることを確認してください。

2. 設定ファイルを変更します。

- ターミナルを開きます。
- 以下のコマンドを実行して設定ファイルを編集します：

```bash
sudo nano /boot/firmware/config.txt
```

3. ファイルの末尾に以下の内容を追加します：

```bash
dtoverlay=gpio-shutdown,gpio_pin=GPIO16,active_low=1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.23_ups_for_safe_shut_down_1.png" style={{width:800, height:'auto'}}/></div>

エディタを保存して終了します（***`Ctrl+O`*** で保存、***`Enter`*** で確認、***`Ctrl+X`*** で終了）。

4. Pythonスクリプトを準備します

- 新しいPythonスクリプトファイルを作成します：

```bash
cd ~
sudo nano ups_shutdown.py
```

- 以下のコードをファイルにコピー＆ペーストします：

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

エディタを保存して終了します（***`Ctrl+O`*** で保存、***`Enter`*** で確認、***`Ctrl+X`*** で終了）。

5. スクリプトを実行します。

- ターミナルを開きます。
- 以下のコマンドを実行してスクリプトを実行します：

```bash
sudo python3 ups_shutdown.py
```

:::note
 スクリプトがシャットダウンコマンドを実行するのに十分な権限を持つように、`sudo`を使用してください。
:::

6. 停電シミュレーションテスト

- 外部電源を切断します。
- システムが自動的にデータを保存してシャットダウンするかを観察します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.23_ups_for_safe_shut_down_1.png" style={{width:800, height:'auto'}}/></div>

7. 結果を確認します

- 電源を再接続します。
- システムデータが完全で正常に起動するかを確認します。

:::note

1. UPS機能については、詳細情報をお問い合わせください。
2. アラーム信号はアクティブLOWです。

:::

## AIアクセラレータ

reComputer Industrial R20xxのM.2 M-KEY 2280スロットは、PCIE M.2 AIアクセラレータに対応するよう設計されています。R20xx-12シリーズには、最大26TOPSのHailo-8 M.2 AIアクセラレーションが事前にインストールされています。
R20xx-10シリーズ製品をご購入の場合、AI機能を有効にするためにHailoのNPUモジュールを購入する必要があります。
デバイスにはHailoアクセラレータドライバが事前にインストールされているため、直接使用してテストケースを実行できます：

1. テストケースディレクトリに移動します

```bash
cd /mnt/hailo-rpi5-examples/
```

2. 仮想環境を開始します

```bash
source ./setup_env.sh
```

3. シンプルな検出例を実行します

```bash
python basic_pipelines/detection_simple.py
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.24_ai__accelerator_1.png" style={{width:800, height:'auto'}}/></div>

アプリケーションを終了するには、***`Ctrl+C`*** を押してください。
これは検出例の軽量版で、主にCPU負荷を最小限に抑えながらHailoのパフォーマンスを実証することに焦点を当てています。内部のGStreamerビデオ処理パイプラインは、ビデオ処理タスクを最小限に抑えることで簡素化され、YOLOv6 Nanoモデルが使用されています。

:::note
ご購入のreComputerにHailo-8が含まれておらず、統合用のHailoデバイスの購入をご検討の場合は、Hailoの公式ドキュメント（https://github.com/hailo-ai）を参照してファームウェアと環境を設定し、例を実行してデバイスが正常に使用できることを確認してください。
:::

## 技術サポート＆製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
