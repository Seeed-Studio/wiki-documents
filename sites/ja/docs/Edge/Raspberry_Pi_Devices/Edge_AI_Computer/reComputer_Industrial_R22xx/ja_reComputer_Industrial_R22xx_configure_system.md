---
description: reComputer Industrial R22xx は、Raspberry Pi CM5 をベースに Hailo-8 AI アクセラレータを搭載し、最大 26 TOPS を実現する産業グレードの AI 搭載 NVR です。PoE PSE をサポートする 4 つのギガビット Ethernet ポートに加え、さらに 1 つのギガビット Ethernet ポートを備え、高帯域幅のビデオストリーミングと IP カメラ向けのシンプルな PoE 展開を可能にします。豊富な産業用 I/O、柔軟なワイヤレス接続、ファンレス熱設計、–20 °C から 50 °C までの広い動作温度範囲を備え、要求の厳しいシナリオにおいても信頼性の高い AI ビデオ解析と連続した安定動作を実現します。
title: reComputer Industrial R22xx の設定
keywords:
  - エッジコントローラ
  - Raspberry pi
  - エッジコントローラ
  - reComputer Industrial R22xx
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrial-r2200_2.jpg
slug: /recomputer_industrial_r22xx_configure_system
sku: 100077451,100079040
last_update:
  date: 02/09/2026
  author: Nolan Chen
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/recomputer_industrial_r22xx_configure_system/
---

## 概要

デバイスを取り付けた後に、reComputer Industrial R22xx シリーズ上のハードウェアコンポーネントを構成およびテストする方法を学びます。この Wiki では、GPIO マッピング、USER LED テスト、SPI 通信、Wi-Fi および Bluetooth スキャン、LoRa®、4G、5G、Mini-PCIe 経由の Zigbee、RS485、RS232、CAN、DI/DO テスト、安全なシャットダウンのための UPS などを扱います。

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrial-r2200_2.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2235-12-p-6654.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## GPIO マッピングとオフセットの確認

GPIO マッピングとオフセットを確認するには、次の手順に従います。

1. GPIO マッピングを確認するには、次のコマンドをコピー＆ペーストします。

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

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.3-1.png" style={{width:800, height:'auto'}}/></div>


対応する色の LED を点灯させるには、次のコマンドを使用します。

```bash
sudo su
echo 1 > /sys/class/leds/led-red//brightness
echo 1 > /sys/class/leds/led-blue/brightness
echo 1 > /sys/class/leds/led-green/brightness
```

これにより、対応する LED が**点灯**します。

**3. LED を消灯する（任意）**  
特定の LED を**消灯**するには、次を使用します。

```bash
sudo su
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

このコマンドは、指定した SPI デバイス（**/dev/spidev10.0**）上で SPI 通信をテストし、詳細出力（ -v ）を有効にしてメッセージ "hello"（**-p hello**）を送信します。
TPM モジュールの MISO と MOSI ピンをショートさせることで、MOSI から送信されたデータが MISO で受信されるループバックの状態を作り出します。この構成により、実際のデバイスを接続しなくても SPI 通信をテストできます。

## Wi-Fi スキャン

利用可能な Wi-Fi ネットワークとその詳細を一覧表示するには、次を実行します。  

```bash
sudo iwlist wlan0 scan
```

- このコマンドは周辺のすべての Wi-Fi ネットワークをスキャンし、その SSID、信号強度、暗号化方式を表示します。  

## Bluetooth スキャン  

Bluetooth デバイスをスキャンするには、次の手順に従います。  

**Bluetooth 制御インターフェースを開く：**  

```bash
sudo bluetoothctl
```

このコマンドで Bluetooth 制御インターフェースが開きます。そこから、周辺の Bluetooth デバイスをスキャンするための追加コマンドを実行できます。

**スキャンを有効にする：**  

```bash
scan on
```

このコマンドで周辺の Bluetooth デバイスのスキャンが開始されます。その後、***bluetoothctl*** インターフェース内で、ペアリングや接続など Bluetooth デバイスとやり取りするための他のコマンドを使用できます。

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
SX1302_RESET_PIN=632     # SX1302 reset
SX1302_POWER_EN_PIN=633  # SX1302 power enable
SX1261_RESET_PIN=634     # SX1261 reset (LBT / Spectral Scan)
# AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)

```

ファームウェアは標準で SPI モデル WM1302-SPI-US915-M をサポートしています。他のモデルを使用したい場合は、対応する RESET_PIN の定義を確認し、以下のコマンドを参考に RESET_PIN を変更できます。

```bash
cat /sys/kernel/debug/gpio
```

**ctrl+x** を押して終了し、**y** を押して変更を保存し、その後 **Enter** を押してコマンドライン画面に戻ります。

5. 設定コードを変更します。

```bash
cp ./tools/reset_lgw.sh ./packet_forwarder
```

6. 18、29、35、42、53、54 行目をそれぞれコメントアウトします。

```bash
nano ./packet_forwarder/global_conf.json.sx1250.US915
```

"com_path": "/dev/spidev0.0" を "com_path": "/dev/spidev2.0" に変更します。

```bash
 cd ./packet_forwarder
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.7.1-1.png" style={{width:800, height:'auto'}}/></div>




### LoRa® USB 設定

LoRa® USB の場合、前述のコマンドは LoRa® SPI の場合と同じです。ただし、最後のコマンドのみ次のように変更する必要があります。

```bash
cho  632  >  /sys/class/gpio/export
echo  "out"  >  /sys/class/gpio/gpio632/direction
echo  "1"  >  /sys/class/gpio/gpio632/value

sudo  ./lora_pkt_fwd  -c  global_conf.json.sx1250.EU868.USB
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.7.2_lora_usb_1.png" style={{width:800, height:'auto'}}/></div>

このコマンドは、LoRa® USB 用に使用する設定ファイルを指定します。

## M.2 B-KEY 経由の 5G セルラー

minicom を介して AT コマンドを使用し 5G/4G モジュールとやり取りするには、次の手順に従います。

1. 新しい power_5g.sh ファイルを作成します：

```bash
nano power_5g.sh
```

sudo nano で開き、次のコマンドを入力してから ***ctrl+x*** を押して保存して終了します。

```bash
#!/bin/bash

RESET_PIN=655
POWER_PIN=660

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

2. ファイルを実行します。

```bash
sudo ./power_5g.sh
```

10〜15 秒後（モジュールの電源投入と USB の列挙に時間がかかります）、デバイスノードが現れるか確認します。

```bash
ls /dev/ttyUSB*
```

/dev/ttyUSB0 などが出力されます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.8_5g_cellular_over_m.2_b-key_1.png" style={{width:800, height:'auto'}}/></div>
適切なシリアルポートとボーレートで minicom を開きます。

```bash
sudo apt update
sudo apt install minicom
sudo minicom -D /dev/ttyUSB2 -b 115200
```

このコマンドは、指定したシリアルポート（***/dev/ttyUSB2***）をボーレート 115200 で開いて minicom を起動します。

1. minicom が開いたら、4G モジュールに AT コマンドを送信し始めることができます。例えば：

```bash
AT
```

このコマンドはモジュールが応答しているかどうかを確認します。モジュールが正常に動作していれば、***"OK"*** という応答が返ってくるはずです。

2. 4G モジュールを使用して電話番号に発信するには、ATD コマンドの後に電話番号を続けて使用します。

```bash
ATD<phone_number>;
```

**phone_number** を、発信したい電話番号に置き換えてください。
コマンドの末尾には、電話番号の終わりを示すためにセミコロン ; を必ず付けてください。

## Mini-PCIe 経由の 4G セルラー

新しい power_4g.sh ファイルを作成します。

```bash
sudo nano power_4g.sh
```

sudo nano で開き、次のコマンドを入力してから ctrl+x を押して保存して終了します。

```bash
# SIM_MUX_SEL
echo 655 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio655/direction
echo 0 > /sys/class/gpio/gpio655/value
echo 660 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio660/direction
echo 1 > /sys/class/gpio/gpio660/value
```

ファイルを実行します。

```bash
sudo ./power_4g.sh
```

minicom に入ってコマンドを送信します。

```bash
sudo apt install minicom -y
sudo minicom -D /dev/ttyUSB2 -b 115200
```

Ctrl+A、Z、E の順に押します。まず AT を送信して接続されているかテストします。OK が表示されれば接続は成功です。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.9-1.png" style={{width:800, height:'auto'}}/></div>


次のコマンドを実行すると、モジュールは自動的に再起動します。minicom を終了しなければ、対応する設定情報を確認できます。
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

## Mini-PCIe 経由の Zigbee

2つの Zigbee モジュール間で **Zigbee 通信** をテストするには、次の手順に従います。  

1. 利用可能なシリアルポートを確認する

次のコマンドを使用して、利用可能なシリアルポートを確認します。

```bash
cat /dev/ttyUSB*
```

**シリアル通信ツールをインストールする**

2. シリアル通信ツールをインストールします。

```bash
sudo apt-get install cutecom
```

3. コーディネータ用にシリアルポートを開く（1つ目の Zigbee モジュール）:

- cutecom ツールを開き、最初のシリアルポート用に設定します。
- ボーレート: ***115200***
- インターフェース下部の ***"Hex output"*** オプションにチェックを入れます。
- 次の手順に従って、1つ目の Zigbee モジュールを設定します。
- コーディネータとして設定: コマンド ***‘55 04 00 05 00 05’*** を送信し、応答 ***‘55 04 00 05 00 05’*** を期待します。
- デバイスをリセット: リセットボタンを押すか、コマンド ***‘55 07 00 04 00 FF FF 00 04’*** を送信します。
- ネットワーク形成: コマンド ***‘55 03 00 02 02’*** を送信します。

4. ルーター用にシリアルポートを開く（2つ目の Zigbee モジュール）:
別の ***cutecom*** インスタンスを開き、同じ設定で 2つ目のシリアルポート用に構成します。
次の手順に従って、2つ目の Zigbee モジュールを設定します。

- ルーターとして設定: コマンド ***‘55 04 00 05 01 04’*** を送信し、応答 ***‘55 04 00 05 00 05’*** を期待します。
- デバイスをリセット: リセットボタンを押すか、コマンド ***‘55 07 00 04 00 FF FF 00 04’*** を送信します。
- ネットワーク形成: コマンド ***‘55 03 00 02 02’*** を送信します。

5. デバイスステータスを確認する:
コマンド ***‘55 03 00 00 00’*** を送信してデバイスステータスを確認します。***‘55 2a 00 00 00 01 XX XX XX XX’*** のような応答が返ってくるはずです。ここで ‘XX’ はデバイス情報を表します。
6. 透過モードに入る:
ネットワーク形成が成功したら、コマンド ***55 07 00 11 00 03 00 01 13*** を送信して透過モードに入ります。直接通信するには、両方のモジュールが透過モードである必要があります。透過モードを終了するには "+++" を送信します。
7. 追加の注意事項:

- ルーターの設定に失敗する場合、そのデバイスはすでにコーディネータになっている可能性があります。コマンド '55 07 00 04 02 xx xx xx' を使用してネットワークから離脱してください。
- コマンド '55 04 0D 00 00 0D'（クエリ）および '55 04 0D 01 XX XX'（設定）を使用して送信電力をテストします。
各 Zigbee モジュールに対して、***/dev/ttyUSB*** を正しいシリアルポートに置き換えてください。これらの手順に注意深く従うことで、2つのモジュール間の Zigbee 通信を正常にテストできます。

## RS485 テスト

reComputer Industrial R21xx には **2x RS485 ポート** が搭載されています。以下はそれぞれに対応する **COM ポート** と **デバイスファイル** です。  

| **RS485 ポート数** | **COM ポート** | **シルク印字ラベル** | **デバイスファイル** |
|---------------------------|--------------|----------------------|-----------------|
| **RS485-2**               | COM2         | A2/B2/GND3           | `/dev/ttyACM1`  |
| **RS485-3**               | COM3         | A3/B3/GND4           | `/dev/ttyACM2`  |

RS485 機能をテストするには、以下の手順に従うことができます（RS485_1 と RS485_2 を例とします）。

1. RS485_1 と RS485_2 の A と B を接続してください。
2. 2つのターミナルウィンドウでそれぞれ minicom を開きます。

```bash
sudo minicom -D /dev/ttyACM1
sudo minicom -D /dev/ttyACM2
```

:::note
 拡張ボードがある場合、番号を 1 つ後ろにずらす必要があります。例えば ***/dev/ttyAcM2***、***/dev/ttyAcM3*** のようになります。
:::

3. 開いた両方の ACM で、次の操作を行う必要があります。

- ***Ctrl+A*** を押し、次に ***Z*** を押すと、Minicom Command Summary インターフェースが表示されます。
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_1.png" style={{width:800, height:'auto'}}/></div>
- さらに ***O*** を押して設定を開き、Serial port setup を選択して ***Enter*** を押します。すべての RS485 関連インターフェースを開き、***H/I/J/K/L*** を順に押して有効にします。
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_2.png" style={{width:800, height:'auto'}}/></div>

- すべてが "YES" と表示されたら Enter を押して戻り、その後 Exit を選択して終了します。

:::note

ACM2 と ACM3 を例にします。
ACM2 から ACM3 に送信したい場合、ACM2 を再度設定する必要があります。***ctrl+A*** を押し、次に ***Z***、続いて ***E*** を押してからシリアルポート書き込みコマンドを開始します。このとき、ACM2 で任意の文字列を出力でき、同時に ACM3 で ACM2 の内容を確認できます。
逆に、ACM3 から ACM2 に送信したい場合は、ACM3 を再度設定する必要があります。***ctrl+A*** を押し、次に ***Z***、続いて ***E*** を押してからシリアルポート書き込みコマンドを開始します。このとき、ACM3 で任意の文字列を出力でき、同時に ACM2 で ACM3 の内容を確認できます。図のようになります。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_3.png" style={{width:800, height:'auto'}}/></div>

## RS232 テスト

reComputer Industrial R21xx には **2x RS232** ポートが搭載されており、それぞれに対応する **COM ポート** と **デバイスファイル** は次のとおりです。

| **RS232 ポート数** | **COM ポート** | **シルク印字ラベル** | **デバイスファイル** |
|---------------------------|--------------|----------------------|-----------------|
| **RS232-1**               | COM1         | RX1/TX1/GND1         | `/dev/ttyACM0`  |
| **RS232-2**               | COM2         | RX2/TX2/GND2         | `/dev/ttyACM1`  |

RS232 は全二重通信であるため、RS232 の TX と RX を直接短絡させてループバックテストを行います。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.12-1.png" style={{width:800, height:'auto'}}/></div>

2つのターミナルを開く必要があります。拡張ボードが接続されている場合は ACM1、接続されていない場合は ACM2 を使用します。
**ターミナル 1:***

```bash
sudo minicom -D /dev/ttyACM1 -b 9600
```

拡張ボードが接続されていない場合は、***/dev/ttyACM1*** を ***/dev/ttyACM0*** に変更する必要があります。

**ターミナル 2:**

```bash
printf "hello seeed\r\n" > /dev/ttyACM1
```


ターミナル 1 には、ターミナル 2 から出力要求された内容が表示されます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.12-2.png" style={{width:800, height:'auto'}}/></div>

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

DI ポートの入力タイプは PNP です。5VDC〜24VDC の入力電圧をサポートし、電流は - 1000mA です。
DI の機能をテストするには、次の手順に従ってテストできます。

1. reComputer Industrial R21xx の DI ポートと外部負荷との接続が完了していることを確認します。
2. 次のコマンドを入力して GPIO のステータスを取得します。

```bash
echo 588 > /sys/class/gpio/export
echo in > /sys/class/gpio/gpio588/direction
cat /sys/class/gpio/gpio588/value
```

3. 外部レベルが高い場合、***/sys/class/gpio/gpio588/value*** の値は 0 です。外部レベルが低い場合、***/sys/class/gpio/gpio588/value*** の値は 1 です。

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

DO ポートの出力タイプはトランジスタです。60 VDC 未満の出力電圧と、500 mA の電流容量をサポートします。
DO の機能をテストするには、次の手順に従ってテストできます。

1. reComputer Industrial R21xx の DO ポートと外部負荷との接続が完了していることを確認します。
2. 出力を High レベルまたは Low レベルに設定するために、次のコマンドを入力します。

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
        <td rowspan="2">2</td>
        <td>CAN_H/CAN_L</td>
        <td>can0</td>
      </tr>
    </tbody>
  </table>
</div>

reComputer Industiral R22xx は単一の CAN インターフェースのみを備えているため、単体でのループバックテストは実行できません。その通信機能を検証するには、外部の対向デバイスまたは USB-to-CAN アダプタが必要です。このテストでは、デュアル CAN インターフェースを備えた reComputer Industiral R21xx を対向ノードとして使用し、reComputer Industiral R22xx と接続を確立します。具体的な接続方式および設定手順については、次のチュートリアルを参照してください。

1. 2 本のデュポン線を使用して can0 と can1 の H-H および L-L を短絡させ、最小ループテストを構成します。

```bash
CAN_H─────●───── CAN-H
CAN_L─────●───── CAN-L
G_CAN_H─────●───── G_CAN
```

2. ドライバがロードされていないことを防ぐために、2 つのネットワークインターフェース can0 と can1 がシステム上に実際に存在することを確認します：

```bash
# should print can0 can1
ls /sys/class/net | grep can 
# should see "successfully initialized"
dmesg | grep -i can
```


3. 2 つの CAN インターフェースを 500 kbit/s に設定してオンラインにし、データの送受信を行えるようにします（安全のために低レベルに設定します）：
R22xx:
```bash
sudo ip link set can0 down
sudo ip link set can0 up type can bitrate 500000
```
R21xx:
```bash
sudo ip link set can1 down
sudo ip link set can1 up type can bitrate 500000
```

4. 通信テスト（片方向）
can-utils を使用してデータを送受信します。

ステップ A: R21xx（CAN1）送信 → R22xx（CAN0）受信

- R22xx: candump can0

- R21xx: cansend can1 123#DE.AD.BE.EF.CA.FE.00.11

ステップ B: R22xx（CAN0）送信 → R21xx（CAN1）受信

- R21xx: candump can1

- R22xx: cansend can0 555#1122334455667788



## USB ハブのテスト

USB ハブをテストするには、次の手順を使用できます：

1. ***lsusb*** コマンドを実行して USB ハブが検出されているか確認します。このコマンドは、ハブを含む接続されているすべての USB デバイスを一覧表示します。

```bash
lsusb
```

このコマンドを実行すると、システムに接続されている USB デバイスに関する情報が表示され、その中に存在する USB ハブも含まれます。
USB ハブが正常に動作している場合、lsusb コマンドの出力にその詳細が表示されます。表示されない場合は、ハブまたはシステムへの接続に問題がある可能性があります。そのような場合は、USB ハブまたはその接続をトラブルシューティングする必要があります。

## RTC（リアルタイムクロック）のテスト

リアルタイムクロック（RTC）の機能をテストするには、次の手順に従います：

1. 自動時刻同期を無効にします：

```bash
sudo systemctl stop systemd-timesyncd
sudo systemctl disable systemd-timesyncd
```

2. 時刻を設定します：
RTC に特定の日付と時刻を設定します：

```bash
sudo hwclock --set --date "2025-10-23 16:00:00"
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

5. RTC から電源を切り離し、数分待ってから再接続し、RTC 時刻が正しい時刻を保持しているかどうかを再度確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.17-1.png" style={{width:800, height:'auto'}}/></div>

## ウォッチドッグタイマーのテスト

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

5. 指定したタイムアウト時間後にシステムが再起動することを確認するために監視します。
これらの手順により、システム上のウォッチドッグタイマーの機能をテストおよび確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.17_watchdog_1.png" style={{width:800, height:'auto'}}/></div>

## GPIO によるブザー制御  

ブザーに対応する GPIO は gpio627 です。ブザーをオン/オフするには、次のスクリプトを入力します：

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

出力に ***tpm0*** および ***tpmrm0*** が表示される場合、TPM（Trusted Platform Module）デバイスがシステム上で検出され、利用可能であることを意味します。これは TPM ハードウェアが認識されアクセス可能であることを示しており、良好な状態です。TPM 関連の機能やアプリケーションを、デバイスが存在しアクセス可能であることを前提に進めることができます。

## ATECC608A

ATECC608A デバイスと対話してランダムなシリアル番号を生成するには、次の手順に従います：

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

このコマンドは、ATECC ユーティリティにスロット 10（-b 10）を使用し、シリアル番号サイズを 192 ビット ***(-s 192)*** に設定し、ランダムなシリアル番号を生成するよう指示します ***(-c 'serial')***。出力は ***"01235595d3d621f0ee"*** のような生成されたシリアル番号になります。
このプロセスにより、ATECC608A デバイスと対話し、ランダムなシリアル番号の生成など、さまざまな操作を実行できます。

## EEPROM とのやり取り

EEPROM（Electrically Erasable Programmable Read-Only Memory）とやり取りするためのコマンドは次のとおりです：

1. EEPROM デバイスファイルに対してフルパーミッション（読み取り、書き込み、実行）を付与します：

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

SSD を含むディスクを一覧表示するには、fdisk -l コマンドを使用できます。方法は次のとおりです：

```bash
sudo fdisk -l
```

このコマンドは、システムに接続されているすべてのディスクの一覧を表示し、SSD が正しく検出されていればそれも含まれます。SSD を表すエントリを探してください。通常、***/dev/sd*** に続いて文字が付いた形式（例：***/dev/sda, /dev/sdb,*** など）になります。
SSD に対応するエントリを特定したら、必要に応じてパーティション作成やフォーマットを進めることができます。

## 安全なシャットダウンのための UPS

CPU と DC 電源入力の間の GPIO6 は、電源が落ちたときに CPU に警告するために使用されます。その後、CPU はスーパーキャパシタのエネルギーが尽きる前にスクリプト内で緊急の処理を行い、"$ shutdown" を実行する必要があります。
この機能を使用する別の方法は、GPIO ピンの変化時にシャットダウンを開始することです。指定された GPIO ピンは KEY_POWER イベントを生成する入力キーとして構成されます。このイベントは systemd-logind によって処理され、シャットダウンが開始されます。

1. ハードウェア接続。

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

エディタを保存して終了します（***`Ctrl+O`*** で保存し、***`Enter`*** で確定し、***`Ctrl+X`*** で終了します）。

5. スクリプトを実行します。

- ターミナルを開きます。
- スクリプトを実行するために次のコマンドを実行します：

```bash
sudo python3 ups_shutdown.py
```

:::note
 `sudo` を使用して、スクリプトがシャットダウンコマンドを実行するのに十分な権限を持つようにします。
:::

6. 停電をシミュレートしたテスト

- 外部電源を切断します。
- システムが自動的にデータを保存してシャットダウンするかどうかを確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.23_ups_for_safe_shut_down_1.png" style={{width:800, height:'auto'}}/></div>

7. 結果を確認します

- 電源を再接続します。
- システムデータが完全で、正常に起動するかどうかを確認します。

:::note

1. UPS 機能については、詳細情報についてお問い合わせください。
2. アラーム信号はアクティブ LOW です。

:::

## AI アクセラレータ

reComputer Industrial R21xx の M.2 M-KEY 2280 スロットは、PCIE M.2 AI アクセラレータを搭載できるように設計されています。また、R21xx-12 シリーズには最大 26TOPS の Hailo-8 M.2 AI アクセラレーションがプリインストールされています。
R21xx-10 シリーズ製品を購入した場合は、AI 機能を有効にするために Hailo の NPU モジュールを別途購入する必要があります。
本デバイスには Hailo アクセラレータドライバがプリインストールされているため、そのまま使用してテストケースを実行できます：

1. テストケースディレクトリに移動します

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
購入した reComputer に Hailo-8 が含まれておらず、Hailo デバイスを購入して統合することを検討している場合は、公式の Hailo ドキュメント（https://github.com/hailo-ai）を参照して、ファームウェアと環境を構成し、サンプルを実行してデバイスが正常に使用できることを確認してください。
:::

## PoE IP カメラ

:::note
- 4 つの Ethernet ポートを同一ネットワークセグメントに設定してはいけません：そのように設定するとネットワーク競合が発生し、通信障害の原因となります。
- Ethernet ポートはホットスワップをサポートしません：Ethernet ケーブルを接続または取り外しする前に、開発ボードとカメラの両方の電源を切る必要があります。ホットスワップを行うと、ポートに恒久的なハードウェア損傷を与える可能性があります。
- IP カメラへの外部電源供給は固く禁止されています：カメラは Ethernet ケーブルを介した PoE のみで給電する必要があります。追加の外部電源を供給すると、電流の逆流が発生し、開発ボードの Ethernet ポートを損傷する可能性があります。
:::

1. ネットワークケーブルを接続し、ネットワークポートを起動します：

```bash
echo 652 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio652/direction
echo 1 > /sys/class/gpio/gpio652/value
```

2. ネットワークポートを設定します：

ネットワーク管理には systemd-networkd の使用を推奨します。再起動後も設定が失われず、他のネットワークツールとの競合も発生しません。手順は「一時的なテストと検証」と「永続的な設定の固定」の 2 つの部分に分かれます。

```bash
sudo systemctl enable --now systemd-networkd
sudo systemctl status systemd-networkd | grep -E 'active|error'
```
:::Note: 物理ネットワークポートは次の仮想ネットワークポートアドレスに対応します：
ETH0-eth0
ETH1-eth4
ETH2-eth3
ETH3-eth2
ETH4-eth1
:::

3. IP カメラの IP アドレスが 10.0.3.200 の場合を例に、eth1 のネットワークポート設定方法は次のとおりです：

- 一時的に IP を設定：

```bash
# Clear existing IP on eth1 to avoid conflicts
sudo ip addr flush dev eth1

# Shut down the port and reconfigure
sudo ip link set eth1 down
sudo ip addr add 10.0.3.10/24 dev eth1
sudo ip link set eth1 up

# Verify IP configuration (should display inet 10.0.3.10/24)
ip addr show eth1 | grep inet

# Test connectivity with the camera (0% packet loss indicates normal status)
ping 10.0.3.200 -I eth1 -c 3
```

- 永続的に IP を設定：

```bash
# Create the eth1 configuration file
sudo nano /etc/systemd/network/eth1.network

[Match]
Name=eth1 # Matches the interface name; replace if the actual name differs (e.g., enx00e04c68xxxx)

[Network]
Address=10.0.3.10/24 # Static IP and subnet mask
DHCP=no # Disable DHCP auto-acquisition
IPv6AcceptRA=no # Disable IPv6 to reduce interference

#[Link]
NamePolicy=kernel database onboard slot path # Maintain stable interface naming
```

- 保存して終了：Ctrl+O を押す → Enter で確定 → Ctrl+X を押します。

他のネットワークポートも同様の方法で設定し、最大 4 台の IP カメラを同時に接続できます。
以下の表の関係を用いた、4 台の IP カメラ構成の例です：

| Ethernet Port	| 対応するカメラ IP	| 開発ボード静的 IP	| カメラのユーザー名とパスワード| 
| eth1	| 10.0.3.200	| 10.0.3.10	| admin & c32bdc3e| 
| eth2	| 10.0.2.200	| 10.0.2.10	| admin & c32bdc3e| 
| eth3	| 10.1.4.200	| 10.1.4.10	| admin & 9c7d1f96| 
| eth4	| 10.1.1.200	| 10.1.1.1	| admin & c32bdc3e  | 
上記の手順に従って各ネットワークセグメントを設定します：

```bash
# ========== Batch Temporary Configuration for eth1-eth4 and Connectivity Testing ==========

# eth1 (Corresponding to camera 10.0.3.200)
sudo ip addr flush dev eth1
sudo ip link set eth1 down
sudo ip addr add 10.0.3.10/24 dev eth1
sudo ip link set eth1 up

# eth2 (Corresponding to camera 10.0.2.200)
sudo ip addr flush dev eth2
sudo ip link set eth2 down
sudo ip addr add 10.0.2.10/24 dev eth2
sudo ip link set eth2 up

# eth3 (Corresponding to camera 10.1.4.200)
sudo ip addr flush dev eth3
sudo ip link set eth3 down
sudo ip addr add 10.1.4.10/24 dev eth3
sudo ip link set eth3 up

# eth4 (Corresponding to camera 10.1.1.200)
sudo ip addr flush dev eth4
sudo ip link set eth4 down
sudo ip addr add 10.1.1.1/24 dev eth4
sudo ip link set eth4 up

# Verify IP configuration for all ports (should display the static IP for each port)
echo -e "\n==== IP Configuration Status for Each Port ===="
ip addr show | grep -E 'eth[1-4]|inet '

# Test connectivity with all cameras (0% packet loss indicates normal status)
echo -e "\n==== Connectivity Test for Each Camera ===="
ping 10.0.3.200 -I eth1 -c 3
ping 10.0.2.200 -I eth2 -c 3
ping 10.1.4.200 -I eth3 -c 3
ping 10.1.1.200 -I eth4 -c 3
```

その後、VLC を使用してアクセスします： 

```bash
vlc rtsp://admin:c32bdc3e@10.0.3.200/h264/ch1/main/av_stream --no-one-instance &
vlc rtsp://admin:c32bdc3e@10.0.2.200/h264/ch1/main/av_stream --no-one-instance &
vlc rtsp://admin:9c7d1f96@10.1.4.200/h264/ch1/main/av_stream --no-one-instance &
vlc rtsp://admin:c32bdc3e@10.1.1.200/h264/ch1/main/av_stream --no-one-instance
```

すべてのカメラウィンドウを閉じる必要がある場合は、次のコマンドを実行します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.26-1.png" style={{width:800, height:'auto'}}/></div>

## 技術サポートと製品ディスカッション

当社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択できるよう、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
