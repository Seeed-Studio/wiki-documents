---
description: デバイスのインストール後、reComputer Industrial R21xx シリーズでハードウェアコンポーネントを設定およびテストする方法を学びます。このwikiでは、GPIO マッピング、USER LED テスト、SPI 通信、Wi-Fi および Bluetooth スキャン、LoRa®、5G、4G、Mini-PCIe 経由の Zigbee、RS485、RS232、DI/DO テスト、安全なシャットダウンのための UPS について説明します。
title: reComputer Industrial R21xx の設定
keywords:
- Raspberry pi
- Edge Controller
- reComputer Industrial R21xx
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg
slug: /ja/recomputer_industrial_R21xx_configure_system
last_update:
  date: 09/28/2025
  author: Nolan Chen
---

## 概要

デバイスのインストール後、reComputer Industrial R21xx シリーズでハードウェアコンポーネントを設定およびテストする方法を学びます。このwikiでは、GPIO マッピング、USER LED テスト、SPI 通信、Wi-Fi および Bluetooth スキャン、LoRa®、4G、5G、Mini-PCIe 経由の Zigbee、RS485、RS232、CAN、DI/DO テスト、安全なシャットダウンのための UPS などについて説明します。

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## GPIO マッピングとオフセットの照会

GPIO マッピングとオフセットを照会するには、以下の手順に従ってください：

1. 以下のコマンドをコピーして貼り付け、GPIO マッピングを照会します：

```bash
cat /sys/kernel/debug/gpio
```

**このコマンドは GPIO マッピングとオフセットを表示し**、GPIO ピンのデバッグや設定に必要な情報を提供します。

## USER LED テスト

ユーザーが使用できる赤、青、緑の3色の LED を提供しています。/sys/class/leds/ ディレクトリに入って確認できます：

**1. LED ディレクトリに移動**  

```bash
cd /sys/class/leds/
ls
```

以下のコマンドを使用して、対応する色の LED を点灯させます。

```bash
sudo su
echo 1 > /sys/class/leds/led-red//brightness
echo 1 > /sys/class/leds/led-blue/brightness
echo 1 > /sys/class/leds/led-green/brightness
```

これにより対応する LED が**点灯**します。

**3. LED を消灯（オプション）**  
特定の LED を**消灯**するには、以下を使用します：

```bash
echo 0 > /sys/class/leds/led-red/brightness
echo 0 > /sys/class/leds/led-blue/brightness
echo 0 > /sys/class/leds/led-green/brightness
```

## SPI 通信のテスト

TPM モジュールの MISO と MOSI ピンをショートして SPI 通信をテストするには、以下の手順に従ってください：

1. spidev-test リポジトリをクローンします：

```bash
# Don't forget to connect to network before running command
git clone https://github.com/rm-hull/spidev-test.git
```

2. spidev-test ディレクトリに移動します：

```bash
cd spidev-test
```

3. spidev_test.c ファイルをコンパイルします：

```bash
gcc spidev_test.c -o spidev_test
```

4. 以下のコマンドで spidev_test プログラムを実行します：

```bash
./spidev_test -D /dev/spidev10.0 -v -p hello
```

このコマンドは、指定された SPI デバイス（**/dev/spidev10.0**）で詳細出力（-v）を使用して SPI 通信をテストし、メッセージ「hello」（**-p hello**）を送信します。
TPM モジュールの MISO と MOSI ピンをショートすることで、MOSI で送信されたデータが MISO で受信されるループバックシナリオを効果的に作成します。この設定により、実際のデバイスを接続せずに SPI 通信をテストできます。

## Wi-Fi スキャン

利用可能な Wi-Fi ネットワークとその詳細を一覧表示するには、以下を実行します：  

```bash
sudo iwlist wlan0 scan
```

- このコマンドは近くのすべての Wi-Fi ネットワークをスキャンし、SSID、信号強度、暗号化タイプを表示します。  

## Bluetooth スキャン  

Bluetooth デバイスをスキャンするには、以下の手順に従ってください：  

**Bluetooth 制御インターフェースを開く：**  

```bash
sudo bluetoothctl
```

このコマンドは Bluetooth 制御インターフェースを開きます。そこから、近くの Bluetooth デバイスをスキャンするための追加コマンドを実行できます。

**スキャンを有効にする：**  

```bash
scan on
```

このコマンドは近くの Bluetooth デバイスのスキャンを開始します。その後、***bluetoothctl*** インターフェース内で他のコマンドを使用して、ペアリングや接続など、Bluetooth デバイスと対話できます。

## Mini-PCIe 経由の LoRa®

### LoRa® SPI 設定  

LoRa® SPI を Mini-PCIe スロット 2 にインストールした後、LoRa® SPI を設定するには、以下の手順に従ってください：

1. **SX1302_HAL** リポジトリをクローンします：

```bash
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
```

2. クローンしたディレクトリに移動します：

```bash
cd sx1302_hal
```

3. 設定ファイルを変更します：

I2C デバイス設定ファイルを開きます：  

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

**#define I2C_DEVICE "/dev/i2c-1"** を **#define I2C_DEVICE "/dev/i2c-2"** に変更します。
**ctrl+x** を押して終了し、**y** を押して変更を保存し、**Enter** を押してコマンドラインページに戻ります。

4. packet_forwarder/reset_lgw.sh ファイルを追加します：

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

**ctrl+x** を押して終了し、**y** を押して変更を保存し、**Enter** を押してコマンドラインページに戻ります。

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

ctrl+x を押して終了し、y を押して変更を保存し、Enter を押してコマンドラインページに戻ります。

6. global_conf.json.sx1250.US915 設定ファイル内の LoraWAN® モジュールのデフォルト SPI ポートを置き換えます（設定ファイルは使用しているモジュールに基づいて選択されます）：

```bash
sudo nano packet_forwarder/global_conf.json.sx1250.US915
```

com_path パラメータを変更し、***"com_path": "/dev/spidev0.0"*** を ***"com_path": "/dev/spidev2.0"*** に変更します。

7. コードをコンパイルします：

```bash
sudo make
```

これらの手順により、LoRa® SPI が設定され、指定された設定ファイルでパケットフォワーダーが実行されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.7.1_lora_spi_1.png" style={{width:800, height:'auto'}}/></div>

### LoRa® USB 設定

LoRa® USB の場合、前のコマンドは LoRa® SPI と同じままです。ただし、最終コマンドを以下に変更する必要があります：

```bash
cho  632  >  /sys/class/gpio/export
echo  "out"  >  /sys/class/gpio/gpio632/direction
echo  "1"  >  /sys/class/gpio/gpio632/value

sudo  ./lora_pkt_fwd  -c  global_conf.json.sx1250.EU868.USB
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.7.2_lora_usb_1.png" style={{width:800, height:'auto'}}/></div>

このコマンドは、LoRa® USB に使用する設定ファイルを指定します。

## M.2 B-KEY 経由の 5G セルラー

minicom 経由で AT コマンドを使用して 5G/4G モジュールと対話するには、以下の手順に従ってください：

1. 新しい power_5g.sh ファイルを作成します：

```bash
nano power_5g.sh
```

sudo nano で開き、以下のコマンドを入力し、***ctrl+x*** を押して保存して終了します。

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

1. minicomが開いたら、4Gモジュールに対してATコマンドの送信を開始できます。例えば：

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
以下のコマンドを実行すると、モジュールは自動的に再起動します。minicomを終了しない場合、対応する設定情報を確認できます。
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

3. コーディネーター（最初のZigbeeモジュール）用のシリアルポートを開きます：

- cutecomツールを開き、最初のシリアルポート用に設定します：
- ボーレート：***115200***
- インターフェースの下部にある***"Hex output"***オプションをチェックします。
- 以下の手順に従って最初のZigbeeモジュールを設定します：
- コーディネーターとして設定：コマンド***'55 04 00 05 00 05'***を送信し、レスポンス***'55 04 00 05 00 05'***を期待します。
- デバイスリセット：リセットボタンを押すか、コマンド***'55 07 00 04 00 FF FF 00 04'***を送信します。
- ネットワーク形成：コマンド***'55 03 00 02 02'***を送信します。

4. ルーター（2番目のZigbeeモジュール）用のシリアルポートを開きます：
***cutecom***の別のインスタンスを開き、前と同じ設定で2番目のシリアルポート用に設定します。
以下の手順に従って2番目のZigbeeモジュールを設定します：

- ルーターとして設定：コマンド***'55 04 00 05 01 04'***を送信し、レスポンス***'55 04 00 05 00 05'***を期待します。
- デバイスリセット：リセットボタンを押すか、コマンド***'55 07 00 04 00 FF FF 00 04'***を送信します。
- ネットワーク形成：コマンド***'55 03 00 02 02'***を送信します。

5. デバイス状態を確認します：
コマンド***'55 03 00 00 00'***を送信してデバイス状態を確認します。***'55 2a 00 00 00 01 XX XX XX XX'***のようなレスポンスを期待します。ここで'XX'はデバイス情報を表します。
6. 透過モードに入ります：
ネットワーク形成が成功した場合、コマンド***55 07 00 11 00 03 00 01 13***を送信して透過モードに入ります。両方のモジュールが直接通信のために透過モードにある必要があります。透過モードを終了するには、"+++"を送信します。
7. 追加の注意事項：

- ルーター設定が失敗した場合、デバイスはすでにコーディネーターである可能性があります。コマンド'55 07 00 04 02 xx xx xx'を使用してネットワークから離脱します。
- コマンド'55 04 0D 00 00 0D'（クエリ）と'55 04 0D 01 XX XX'（設定）を使用して送信電力をテストします。
各Zigbeeモジュールの正しいシリアルポートで***/dev/ttyUSB***を置き換えることを確認してください。これらの手順に注意深く従って、2つのモジュール間のZigbee通信を正常にテストしてください。

## RS485テスト

reComputer Industrial R21xxには**2x RS485ポート**が含まれています。以下は対応する**COMポート**と**デバイスファイル**です：

| **RS485ポート数** | **COMポート** | **シルクスクリーンラベル** | **デバイスファイル** |
|---------------------------|--------------|----------------------|-----------------|
| **RS485-3**               | COM3         | A3/B3/GND3           | `/dev/ttyACM2`  |
| **RS485-4**               | COM4         | A4/B4/GND4           | `/dev/ttyACM3`  |

RS485機能をテストするには、以下の手順に従ってください（RS485_1とRS485_2を例として）：

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

- すべて"YES"が表示されたら、Enterを押して戻り、Exitを選択して終了します。

:::note

ACM2とACM3を例として：
ACM2からACM3に送信したい場合、ACM2を再度設定する必要があります：***ctrl+A***、次に***Z***を押してから***E***を押し、シリアルポート書き込みコマンドを開始します。この時、ACM2で自由に文字列を印刷でき、同時にACM3でACM2の内容を確認できます；
逆に、ACM3からACM2に送信したい場合、ACM3を再度設定する必要があります：***ctrl+A***、次に***Z***を押してから***E***を押し、シリアルポート書き込みコマンドを開始します。この時、ACM3で自由に文字列を印刷でき、同時にACM2でACM3の内容を確認できます。図に示すとおりです。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_3.png" style={{width:800, height:'auto'}}/></div>

## RS232テスト

reComputer Industrial R21xxには**2x RS232**ポートが含まれており、対応する**COMポート**と**デバイスファイル**は以下のとおりです：

| **RS232ポート数** | **COMポート** | **シルクスクリーンラベル** | **デバイスファイル** |
|---------------------------|--------------|----------------------|-----------------|
| **RS232-1**               | COM1         | RX1/TX1/GND1         | `/dev/ttyACM0`  |
| **RS232-2**               | COM2         | RX2/TX2/GND2         | `/dev/ttyACM1`  |

RS232は全二重通信であるため、RS232のTXとRXを直接短絡してループバックテストを実行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/21-rs232.png" style={{width:800, height:'auto'}}/></div>

2つのターミナルを開く必要があります。拡張ボードが接続されている場合はACM1、拡張ボードが接続されていない場合はACM2：
**ターミナル1：**

```bash
sudo minicom -D /dev/ttyACM1 -b 9600
```

拡張ボードが接続されていない場合、***/dev/ttyACM1***を***/dev/ttyACM0***に変更する必要があります。

**ターミナル2：**

```bash
printf "hello seeed\r\n" > /dev/ttyACM1
```

**ターミナル3：**

```bash
printf "hello seeed\r\n" > /dev/ttyACM0
printf "hello seeed\r\n" > /dev/ttyACM1
```

ターミナル1には、ターミナル2が印刷を要求した内容が表示されます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/232_test.png" style={{width:800, height:'auto'}}/></div>

## DI（デジタル入力）テスト

reComputer Industrial R21xxには4x DIポートが含まれており、ユーザーは実際のニーズに応じてこれらのポートを設定できます。

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

DIポートの入力タイプはPNPです。入力電圧5VDC～24VDC、電流1000mAをサポートします。
DIの機能をテストするには、以下の手順に従ってテストできます：

1. reComputer Industrial R21xxのDIポートと外部負荷の接続が完了しています。
2. 以下のコマンドを入力してGPIOの状態を取得します：

```bash
echo 588 > /sys/class/gpio/export
echo in > /sys/class/gpio/gpio588/direction
cat /sys/class/gpio/gpio588/value
```

3. 外部レベルがハイの場合、***/sys/class/gpio/gpio588/value***の値は0です。外部レベルがローの場合、***/sys/class/gpio/gpio588/value***は1です。

## DO（デジタル出力）

reComputer Industrial R21xxには4つのDOポートが含まれており、ユーザーは実際のニーズに応じてこれらのポートを設定できます。

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
    </tbody>
  </table>
</div>

DOポートの出力タイプはトランジスタです。出力電圧60VDC未満、電流容量500mAをサポートします。
DOの機能をテストするには、以下の手順に従ってテストできます：

1. reComputer Industrial R21xxのDOポートと外部負荷の接続が完了しています。
2. 以下のコマンドを入力して出力をハイレベルまたはローレベルに設定します：

```bash
echo 638 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio638/direction
echo 1 > /sys/class/gpio/gpio638/value
echo 0 > /sys/class/gpio/gpio638/value
```

3. 外部レベルがハイの場合、/sys/class/gpio/gpio638/valueの値は0です。外部レベルがローの場合、/sys/class/gpio/gpio638/valueは1です。

## CANテスト

### ループバックテスト

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

1. 2本のデュポンワイヤーを使用してcan0とcan1のH-HとL-Lをショートさせ、最小ループテストを形成します。

```bash
CAN-0_H─────●───── CAN-0_H
CAN-1_H─────●───── CAN-1_H
```

2. 2つのネットワークインターフェースcan0とcan1がシステムに表示されることを確認し、ドライバーが読み込まれていないことを防ぎます：

```bash
# should print can0 can1
ls /sys/class/net | grep can 
# should see "successfully initialized"
dmesg | grep -i can
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/can_test_1.png" style={{width:800, height:'auto'}}/></div>

3. 2つのCANインターフェースを500 kbit/sに設定してオンラインにし、データの送受信準備を行います（安全のためローレベルに設定）：

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

5. can-utilsをダウンロードしてインストールし、candumpやcansendなどの必須ツールを使用します。

```bash
sudo apt install can-utils
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/can_test_3.png" style={{width:800, height:'auto'}}/></div>

6. can0を監視しながら、can1からフレームを送信します。メッセージが表示されれば、パスが正常であることを意味します。

```bash
# Terminal A
candump can0
# Terminal B
cansend can1 123#DE.AD.BE.EF.CA.FE.00.11
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/can_test_4.png" style={{width:800, height:'auto'}}/></div>

7. 逆に、can0からフレームを送信しながらcan1を監視することもできます。メッセージが表示されれば、パスが正常であることを意味します。

```bash
# Terminal A
candump can1
# Terminal B
cansend can0 123#DE.AD.BE.EF.CA.FE.00.11
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/can_test_5.png" style={{width:800, height:'auto'}}/></div>

8. 後続の起動をより簡単にしたい場合は、起動コマンドをスクリプトに書き込むことができます。起動時に一度実行するだけで、インターフェースが自動的に立ち上がります。

```bash
#!/bin/bash
sudo ip link set can0 down
sudo ip link set can1 down
sudo ip link set can0 up type can bitrate 500000
sudo ip link set can1 up type can bitrate 500000
echo "can0 & can1 are up @ 500 kbit/s"
```

### Python-CANテスト

[Python-CAN](https://github.com/raspberrypi/usbboot)は、Controller Area Network（CAN）バス通信用の統一されたプログラミングインターフェースを提供するクロスプラットフォームPythonライブラリで、幅広いCANハードウェアインターフェースと仮想バスをサポートし、CANメッセージの送信、受信、フィルタリング、バス監視などの操作を簡単に実装できます。
同様に、CANインターフェースはループバック通信を実現するために物理的に接続する必要があります。

1. 標準CANボーレート（500 kbit/s）を設定します：

```bash
sudo ip link set down can0
sudo ip link set down can1
sudo ip link set can0 type can bitrate 500000
sudo ip link set can1 type can bitrate 500000
sudo ip link set up can0
sudo ip link set up can1
```

2. 両方のインターフェースがUP状態であることを確認します：「state UP」が出力されればUP状態を示します。

```bash
ip a show can0
ip a show can1
```

「state UP」の出力はUP状態を示します。

3. Python仮想環境と依存関係を設定します。

```bash
mkdir rpi_can_project
cd rpi_can_project
python3 -m venv can_env
source can_env/bin/activate
pip install python-can
```

4. Pythonスクリプトを入力します：

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

5. 実行して動作させます：

```bash
python can_test.py
deactivate
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/python-can.png" style={{width:800, height:'auto'}}/></div>

## USBハブテスト

USBハブをテストするには、以下の手順を使用できます：

1. ***lsusb***コマンドを実行してUSBハブが検出されているかを確認します。このコマンドは、ハブを含む接続されたすべてのUSBデバイスをリストします。

```bash
lsusb
```

このコマンドを実行すると、存在するUSBハブを含む、システムに接続されたUSBデバイスに関する情報が表示されます。
USBハブが正常に機能している場合、lsusbコマンドの出力にその詳細がリストされているはずです。リストされていない場合、ハブまたはシステムへの接続に問題がある可能性があります。そのような場合は、USBハブまたはその接続のトラブルシューティングが必要になる場合があります。

## RTC（リアルタイムクロック）テスト

リアルタイムクロック（RTC）機能をテストするには、以下の手順に従ってください：

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

3. RTC時刻をシステムに同期
システム時刻をRTC時刻に合わせて更新します：

```bash
sudo hwclock --hctosys
```

4. RTC時刻を確認します：

```bash
sudo hwclock -r
```

このコマンドは、RTCに保存されている時刻を読み取って表示します。

5. RTCから電源を切断し、数分待ってから再接続し、RTC時刻を再度確認して正しい時刻が保持されているかを確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.16_rtc_1.png" style={{width:800, height:'auto'}}/></div>

## ウォッチドッグタイマーテスト

ウォッチドッグテストを実行するには、以下の手順に従ってください：

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

必要に応じて他の設定も調整できます。

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

このコマンドはカーネルクラッシュを引き起こし、ウォッチドッグによってシステムが再起動されるはずです。

5. 指定されたタイムアウト期間後にシステムが再起動することを確認するため、システムを監視します。
これらの手順により、システム上のウォッチドッグタイマーの機能をテストし、確認することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.17_watchdog_1.png" style={{width:800, height:'auto'}}/></div>

## GPIO によるブザーの制御  

ブザーに対応する GPIO は gpio627 です。以下のスクリプトを入力してブザーのオン/オフを切り替えます：

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

TPM 2.0 モジュールをデバイスに接続した場合、以下のコードで TPM 接続を確認できます。

```bash
ls /dev | grep tpm
```  

**出力の解釈：**  

出力に ***tpm0*** と ***tpmrm0*** が表示される場合、TPM（Trusted Platform Module）デバイスが検出され、システムで利用可能であることを意味します。これは TPM ハードウェアが認識され、アクセス可能であることを示しており、良い兆候です。デバイスが存在し、アクセス可能であることを知った上で、TPM 関連の機能やアプリケーションの使用を進めることができます。

## ATECC608A

ATECC608A デバイスと対話し、ランダムなシリアル番号を生成するには、以下の手順に従ってください：

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

このコマンドは、ATECC ユーティリティにスロット 10 を使用し（-b 10）、シリアル番号のサイズを 192 ビットに設定し ***(-s 192)***、ランダムなシリアル番号を生成する ***(-c 'serial')*** よう指示します。出力は ***"01235595d3d621f0ee"*** などの生成されたシリアル番号になります。
このプロセスにより、ATECC608A デバイスと対話し、ランダムなシリアル番号の生成などの様々な操作を実行できます。

## EEPROM との対話

EEPROM（Electrically Erasable Programmable Read-Only Memory）と対話するためのコマンドは以下の通りです：

1. EEPROM デバイスファイルに完全な権限（読み取り、書き込み、実行）を付与します：

```bash
 sudo chmod 777 /sys/bus/i2c/devices/10-0050/eeprom
```  

2. 文字列「This is a test string」を EEPROM デバイスに書き込みます：

```bash
echo "This is a test string" > /sys/bus/i2c/devices/10-0050/eeprom
```  

3. EEPROM デバイスの内容を読み取り、hexdump ユーティリティを使用して ***16進数*** 形式で表示します：

```bash
cat /sys/bus/i2c/devices/6-0050/eeprom | hexdump -C
```  

## SSD 検出の確認

SSD を含むディスクをリストするには、fdisk -l コマンドを使用できます。方法は以下の通りです：

```bash
sudo fdisk -l
```

このコマンドは、SSD が適切に検出されている場合はそれを含む、システムに接続されているすべてのディスクのリストを表示します。SSD に対応するエントリを探してください。通常、***/dev/sd*** で始まり、その後に文字が続きます（例：***/dev/sda、/dev/sdb*** など）。
SSD に対応するエントリを特定したら、必要に応じてパーティション分割やフォーマットを進めることができます。

## 安全なシャットダウンのための UPS

CPU と DC 電源入力の間の GPIO6 は、電源が落ちた際に CPU に警告するために使用されます。その後、CPU はスーパーキャパシタのエネルギーが枯渇する前に、スクリプト内で緊急の処理を行い、「$ shutdown」を実行する必要があります。
この機能を使用するもう一つの方法は、GPIO ピンの変化時にシャットダウンを開始することです。指定された GPIO ピンは、KEY_POWER イベントを生成する入力キーとして設定されます。このイベントは systemd-logind によって処理され、シャットダウンが開始されます。

1. ハードウェア接続。

UPS デバイスの ***'CM5_UPS_DET'*** ピンが R21xx デバイスの GPIO16 ピンに接続されていることを確認してください。

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

エディタを保存して終了します（***`Ctrl+O`*** を押して保存、***`Enter`*** で確認、***`Ctrl+X`*** で終了）。

4. Python スクリプトを準備します

- 新しい Python スクリプトファイルを作成します：

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

エディタを保存して終了します（***`Ctrl+O`*** を押して保存、***`Enter`*** で確認、***`Ctrl+X`*** で終了）。

5. スクリプトを実行します。

- ターミナルを開きます。
- 以下のコマンドを実行してスクリプトを実行します：

```bash
sudo python3 ups_shutdown.py
```

:::note
 スクリプトがシャットダウンコマンドを実行するのに十分な権限を持つように、`sudo` を使用してください。
:::

6. 停電テストをシミュレートします

- 外部電源を切断します。
- システムが自動的にデータを保存してシャットダウンするかを観察します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.23_ups_for_safe_shut_down_1.png" style={{width:800, height:'auto'}}/></div>

7. 結果を確認します

- 電源を再接続します。
- システムデータが完全で、正常に起動するかを確認します。

:::note

1. UPS 機能については、詳細情報をお問い合わせください。
2. アラーム信号はアクティブ LOW です。

:::

## AI アクセラレータ

reComputer Industrial R21xx の M.2 M-KEY 2280 スロットは、PCIE M.2 AI アクセラレータを収容するように設計されています。R21xx-12 シリーズには、最大 26TOPS の Hailo-8 M.2 AI アクセラレーションが事前にインストールされています。
R21xx-10 シリーズ製品を購入した場合、AI 機能を有効にするために Hailo の NPU モジュールを購入する必要があります。
デバイスには Hailo アクセラレータドライバが事前にインストールされているため、直接使用してテストケースを実行できます：

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
これは検出例の軽量版で、CPU 負荷を最小限に抑えながら Hailo のパフォーマンスを実証することに主に焦点を当てています。内部の GStreamer ビデオ処理パイプラインは、ビデオ処理タスクを最小限に抑えることで簡素化され、YOLOv6 Nano モデルが使用されています。

:::note
購入した reComputer に Hailo-8 が含まれておらず、統合のために Hailo デバイスの購入を検討している場合は、公式の Hailo ドキュメント（https://github.com/hailo-ai）を参照してファームウェアと環境を設定し、例を実行してデバイスが正常に使用できることを確認してください。
:::

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、様々なサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
