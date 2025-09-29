---
description: デバイスのインストール後にreComputer R1100シリーズのハードウェアコンポーネントを設定およびテストする方法を学習します。このwikiでは、GPIOマッピング、USER LEDテスト、SPI通信、Wi-FiおよびBluetoothスキャン、LoRa®、4G、Mini-PCIe経由のZigbee、RS485、RS232、DI/DOテスト、安全なシャットダウンのためのUPSについて説明します。
title: reComputer R1100の設定
keywords:
- Raspberry pi
- Edge Controller
- reComputer R1100
image: https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg
slug: /ja/recomputer_r1100_configure_system
last_update:
  date: 2/26/2024
  author: Kasun Thushara
---

## 概要

デバイスのインストール後にreComputer R1100シリーズのハードウェアコンポーネントを設定およびテストする方法を学習します。このwikiでは、GPIOマッピング、USER LEDテスト、SPI通信、Wi-FiおよびBluetoothスキャン、LoRa®、4G、Mini-PCIe経由のZigbee、RS485、RS232、DI/DOテスト、安全なシャットダウンのためのUPS、その他について説明します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## GPIOマッピングとオフセットの確認

GPIOマッピングとオフセットを確認するには、以下の手順に従ってください：

- **ターミナルで以下のコマンドを実行します**

```bash
cat /sys/kernel/debug/gpio
```

**このコマンドはGPIOマッピングとオフセットを表示し**、GPIOピンのデバッグや設定に必要な情報を提供します。

## LED インジケーターの制御

reComputer R1100は**赤、青、緑**の3つの**LEDインジケーター**を提供します。以下のコマンドを使用してそれらを制御できます：

**1. LEDディレクトリに移動**  

```bash
cd /sys/class/leds/
ls
```

これにより、利用可能なLEDが一覧表示されます。

**2. brightnessファイルに書き込んでLEDを有効にする**  
まず**スーパーユーザーモード**に切り替えます：  

```bash
sudo su
```

Then, turn on the LEDs:  

```bash
echo 1 > /sys/class/leds/led-red/brightness
echo 1 > /sys/class/leds/led-blue/brightness
echo 1 > /sys/class/leds/led-green/brightness
```

これにより、対応するLEDが**点灯**します。

**3. LEDを消す（オプション）**  
特定のLEDを**消す**には、以下を使用します：

```bash
echo 0 > /sys/class/leds/led-red/brightness
echo 0 > /sys/class/leds/led-blue/brightness
echo 0 > /sys/class/leds/led-green/brightness
```

## SPI通信のテスト

**SPI通信**を検証するには、**TPMモジュールのMISOピンとMOSIピンをショート**することでループバックテストを実行できます。この方法により、MOSI（Master Out, Slave In）で送信されたデータがMISO（Master In, Slave Out）で受信されることを確認できます。

**ステップバイステップガイド**

**1. インターネットに接続**  
続行する前に、デバイスがネットワークに接続されていることを確認してください。

**2. `spidev-test`リポジトリをクローン**  

```bash
git clone https://github.com/rm-hull/spidev-test.git
```

**3. ディレクトリに移動する**  

```bash
cd spidev-test
```

**4. Compile the `spidev_test.c` program**  

```bash
gcc spidev_test.c -o spidev_test
```

**5. SPIテストを実行する**

```bash
./spidev_test -D /dev/spidev0.1 -v -p "hello"
```

- `-D /dev/spidev0.1` → SPIデバイスを指定します  
- `-v` → 詳細出力を有効にします  
- `-p "hello"` → 文字列 `"hello"` を送信します  

**6. ループバックテスト（オプション）**  

- テストを実行する前に、**TPMモジュールのMISOピンとMOSIピンをショートさせます**。
- SPIバスが正常に機能している場合、出力には送信されたデータが**正しく受信されている**ことが表示されるはずです。

## Wi-Fiスキャン

利用可能なWi-Fiネットワークとその詳細をリストアップするには、以下を実行します：  

```bash
sudo iwlist wlan0 scan
```

- このコマンドは、近くのすべてのWi-Fiネットワークをスキャンし、それらのSSID、信号強度、暗号化タイプを表示します。

## Bluetoothスキャン

Bluetoothデバイスをスキャンするには、以下の手順に従ってください：

**Bluetoothコントロールインターフェースを開く：**  

```bash
sudo bluetoothctl
```

**スキャンを有効にする:**  

```bash
scan on
```

- これにより、近くのBluetoothデバイスのスキャンが開始されます。

## LoRa® over Mini-PCIe

### LoRa® SPI 設定

**SX1302_HALリポジトリをクローンします：**  

```bash
cd ~
git clone https://github.com/Lora-net/sx1302_hal
```

**クローンしたディレクトリに移動します：**

```bash
cd sx1302_hal
```

**設定ファイルを変更する：**  

I2Cデバイス設定ファイルを開く：  

```bash
sudo vim ./libloragw/inc/loragw_i2c.h
```

この行を変更してください：  

```c
#define I2C_DEVICE "/dev/i2c-1"
```

変更先：  

```c
#define I2C_DEVICE "/dev/i2c-3"
```

**コードをコンパイルする:**

```bash
sudo make
```

**Modify the reset script:**

Open the `reset_lgw.sh` script:  

```bash
sudo vim ./tools/reset_lgw.sh
```

ピン設定を更新します：

```bash
SX1302_RESET_PIN=580    # SX1302 reset  
SX1302_POWER_EN_PIN=578 # SX1302 power enable  
SX1261_RESET_PIN=579    # SX1261 reset (LBT/Spectral Scan)  
```

**リセットスクリプトをパケットフォワーダーディレクトリにコピーします：**  

```bash
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**LoRaWAN® 設定ファイルのデフォルト SPI ポートを更新する：**

`global_conf.json.sx1250.US915` ファイルを変更します：  

```bash
sed -i 's/spidev0.0/spidev0.1/g' global_conf.json.sx1250.US915
```

**LoRaWAN®モジュールを開始する：**  

```bash
cd ~/sx1302_hal/packet_forwarder
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

### LoRa® USB設定

LoRa® SPIの代わりにLoRa® USBモジュールを使用している場合は、以下の手順に従ってください。ほとんどのコマンドはLoRa® SPIと同じですが、最後のステップが異なります。

**SX1302リセットピンをプルアップする**

```bash
echo 1 > /sys/class/gpio/gpio580/value
```

**LoRaWAN® USBモジュールを開始する**

```bash
cd ~/sx1302_hal/packet_forwarder
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

 LoRa® USBが設定され、reComputer R1100で動作しています

## Mini-PCIe経由の4Gセルラー

`minicom`を使用してATコマンドで4Gモジュールと通信するには、以下の手順に従ってください：

**適切なシリアルポートとボーレートでMinicamを開く：**  

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

このコマンドは、指定されたシリアルポート（`/dev/ttyUSB2`）を**115200**のボーレートでMinicomを開きます。

**4GモジュールにATコマンドを送信：**

Minicomが開いたら、4Gモジュールに**ATコマンド**の送信を開始できます。例えば：  

```bash
AT
```

このコマンドは、モジュールが応答するかどうかを確認します。モジュールが正常に動作している場合、**"OK"** レスポンスを受信するはずです。

**4Gモジュールを使用して電話番号にダイヤルする：**

電話番号にダイヤルするには、電話番号に続けて `ATD` コマンドを使用します：  

```bash
ATD<phone_number>;
```

- `<phone_number>` を、ダイヤルしたい電話番号に置き換えてください。
- コマンドの最後に **セミコロン (;)** を含めて、電話番号の終了を示すようにしてください。

## Zigbee over Mini-PCIe

2つの Zigbee モジュール間で **Zigbee 通信** をテストするには、以下の手順に従ってください：

**利用可能なシリアルポートの確認**

以下のコマンドを実行して、利用可能なシリアルポートを確認してください：  

```bash
cat /dev/ttyUSB*
```

**シリアル通信ツールのインストール**

グラフィカルなシリアルターミナルである **CuteCom** を以下のコマンドでインストールします：  

```bash
sudo apt-get install cutecom
```

**最初のZigbeeモジュール（コーディネーター）を設定する**

- **CuteCom**を開き、**最初のシリアルポート**用に設定します。
- **設定:**
  - **ボーレート:** 115200
  - インターフェースの下部で**「Hex output」を有効にする**。

**コーディネーターとして設定する手順:**

1. **コーディネーターとして設定:** コマンドを送信:  

   ```  
   55 04 00 05 00 05  
   ```  

   - 期待される応答：  

   ```  
   55 04 00 05 00 05  
   ```  

2. **デバイスのリセット:**  
   - **リセットボタン**を押すか、または  
   - コマンドを送信:  

     ```  
     55 07 00 04 00 FF FF 00 04  
     ```  

3. **ネットワーク形成:**
   - コマンドを送信:  

   ```  
   55 03 00 02 02  
   ```  

**2番目のZigbeeモジュール（ルーター）を設定する**

- **CuteCom**の別のインスタンスを開き、同じ設定を使用して**2番目のシリアルポート**用に設定します。

**ルーターとして設定する手順：**

1. **ルーターとして設定：** コマンドを送信：  

   ```  
   55 04 00 05 01 04  
   ```  

   - 期待される応答：  

   ```  
   55 04 00 05 00 05  
   ```  

2. **デバイスのリセット:**  
   - **リセットボタン**を押すか、または  
   - コマンドを送信:  

     ```  
     55 07 00 04 00 FF FF 00 04  
     ```  

3. **ネットワーク形成:** コマンドを送信:  

   ```  
   55 03 00 02 02  
   ```  

**デバイスステータスの確認**  
デバイスステータスを確認するには、以下を送信します：  

```  
55 03 00 00 00  
```  

 期待される応答：  

```  
55 2A 00 00 00 01 XX XX XX XX  
```  

- `XX` はデバイス固有の情報を表します。

**透過モードに入る**

**ネットワーク形成**が成功した場合、以下を送信して**透過モード**を有効にします：  

```  
55 07 00 11 00 03 00 01 13  
```  

**直接通信を行うには、両方のモジュールが透過モードである必要があります。**  
**透過モードを終了する**には、以下を送信してください：  

```  
+++  
```

**追加注意事項**

- **ルーター設定が失敗**した場合、デバイスはすでに**コーディネーター**である可能性があります。ネットワークから離脱するには、以下を送信してください：  

  ```  
  55 07 00 04 02 XXXX XX  
  ```  

- **送信電力をテスト**するには、以下を使用してください：
  - **電力クエリ：**

    ```
    55 04 0D 00 00 0D
    ```

  - **電力設定：**

    ```
    55 04 0D 01 XXXX
    ```

各Zigbeeモジュールに対して、`/dev/ttyUSB*`を**正しいシリアルポート**に置き換えることを確認してください。
これらの手順を慎重に従って、2つのモジュール間で**成功したZigbee通信**を確立してください。

以下は、文法、可読性、フォーマットを改善した修正版と適切に構造化されたバージョンです：

---

## RS485テスト

reComputer R1100には**2つのRS485ポート**が含まれています。以下は対応する**COMポート**と**デバイスファイル**です：

| **RS485ポート** | **COMポート** | **シルクスクリーンラベル** | **デバイスファイル** |
|---------------|-------------|----------------------|----------------|
| **RS485_1**  | COM1        | A1 / B1 / GND       | `/dev/ttyACM0` |
| **RS485_2**  | COM2        | A2 / B2 / GND       | `/dev/ttyACM1` |

**RS485機能をテストする手順**

**RS485ポートを接続する**

**RS485_1（A & B）**を**RS485_2（A & B）**に物理的に接続してください。

**RS485テストプログラムを実行する**

2つのRS485ポート間の**データ送信を検証**し、速度を測定するテストプログラムを提供しています。

以下のコマンドを実行してテストプログラムをダウンロードし、実行してください：  

```bash
git clone https://github.com/ackPeng/R1100_TEST.git
cd R1100_TEST
gcc -o serial_test serial_test.c
./serial_test /dev/ttyACM0 /dev/ttyACM1 115200
```

**テスト説明**  

- このプログラムは **RS485_1** から **RS485_2** に **1MBのデータを送信** します。  
- **完了時間を記録** し、実際のボーレートを計算します。  
- **注意:** 実際のボーレートは理論的なボーレートよりもわずかに低くなる場合がありますが、これは予想される動作です。  

**reComputer R1100でのRS485通信を検証するために、以下の手順を注意深く実行してください。**

## RS232テスト

reComputer R1100は **2つのRS232ポート** を搭載しています。以下は対応するCOMポートとデバイスファイルです：  

| RS232ポート | COMポート | ピンマッピング | デバイスファイル |
|------------|---------|-------------|--------------|
| **RS232_1** | COM3 | RX3/TX3/GND | `/dev/ttyACM2` |
| **RS232_2** | COM4 | RX4/TX4/GND | `/dev/ttyACM3` |

**RS232通信のテスト**

RS232機能をテストするには、以下の手順に従ってください：

1. **ポートを接続する：**
   - **RS232_1のTX**を**RS232_2のRX**に接続します。
   - **RS232_1のRX**を**RS232_2のTX**に接続します。

2. **テストプログラムを実行する：**
   - テストプログラムのリポジトリをクローンします：

     ```bash
     git clone https://github.com/ackPeng/R1100_TEST.git
     ```

   - ディレクトリに移動します：

     ```bash
     cd R1100_TEST
     ```

   - テストプログラムをコンパイルします：

     ```bash
     gcc -o serial_test serial_test.c
     ```

   - テストを実行します：

     ```bash
     ./serial_test /dev/ttyACM2 /dev/ttyACM3 115200
     ```

このテストは**1MBのデータ**をRS232_1からRS232_2に送信し、完了時間とボーレートを測定します。実際のボーレートは理論値よりもわずかに低くなる場合がありますが、これは正常です。

## DI（デジタル入力）テスト

reComputer R1100には**2つのデジタル入力（DI）ポート**が含まれており、ユーザーの要件に基づいて設定できます。

| **DIポート数** | **DIポート** | **対応する拡張GPIO** |
|-----------------------|------------|--------------------------------|
| **2**                 | **DI1**     | **GPIO530**                    |
|                       | **DI2**     | **GPIO531**                    |

**DI ポート仕様**  

- **入力タイプ:** PNP  
- **サポート入力電圧:** **5VDC – 24VDC**  
- **電流:** **最大 1000mA**  

**DI 機能をテストする手順**  

**適切な接続を確認**  

reComputer R1100 の **DI ポート** が **外部負荷** に適切に接続されていることを確認し、また **G_D** ポートが **電源 GND** に接続されていることを確認してください。

**GPIO ステータスを確認**  

以下のコマンドを実行して **GPIO530**（DI1 に対応）のステータスを確認してください：  

```bash
echo 530 > /sys/class/gpio/export
echo in > /sys/class/gpio/gpio530/direction
cat /sys/class/gpio/gpio530/value
```

**GPIO値の解釈**

- **外部レベルがHIGHの場合**、`/sys/class/gpio/gpio530/value`の出力は**0**になります。
- **外部レベルがLOWの場合**、`/sys/class/gpio/gpio530/value`の出力は**1**になります。

## DO（デジタル出力）

**reComputer R1100**には**2つのデジタル出力（DO）ポート**が含まれており、ユーザーの要件に基づいて設定できます。

| **DOポート数** | **DOポート** | **対応する拡張GPIO** |
|-----------------------|------------|--------------------------------|
| **2**                 | **DO1**     | **GPIO532**                    |
|                       | **DO2**     | **GPIO533**                    |

**DO ポート仕様**  

- **出力タイプ:** トランジスタ  
- **サポート出力電圧:** **最大60VDC**  
- **電流容量:** **500mA**  

**DO機能テストの手順**  

**適切な接続の確認**  
reComputer R1100の**DOポート**が**外部負荷**に適切に接続されていることを確認してください。

**DOポートはオープンコレクタ出力であり、駆動能力がないため、外部抵抗を使用して電源にプルアップしてください。**

**出力レベルの設定**  
以下のコマンドを実行して、出力を**HIGH**または**LOW**に設定します：  

```bash
echo 532 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio532/direction
echo 1 > /sys/class/gpio/gpio532/value  # Set output to HIGH
echo 0 > /sys/class/gpio/gpio532/value  # Set output to LOW
```

## USB ハブテスト

**USB ハブ**の機能を確認するには、以下の手順に従ってください：

**USB ハブが検出されているかを確認**

以下のコマンドを実行して、ハブを含むすべての接続された USB デバイスをリストアップします：  

```bash
lsusb
```

**USBハブ検出の確認**

- このコマンドは、**USBハブ**を含む、システムに接続されているすべての**USBデバイス**の情報を表示します。
- USBハブが**正常に機能している**場合、その詳細がコマンド出力に表示されるはずです。
- ハブが**リストに表示されない**場合、**ハブ自体またはシステムへの接続**に問題がある可能性があります。

**トラブルシューティング（USBハブが検出されない場合）**

- USBハブの**物理的な接続**を確認してください。
- ハブを**別のUSBポート**に接続してみてください。
- デバイスを再起動し、`lsusb`を再実行してください。
- 問題が解決しない場合、ハブが故障している可能性があります。

## RTC（リアルタイムクロック）テスト

**reComputer R1100**で**RTC機能**を確認するには、以下の手順に従ってください：

**自動時刻同期の無効化**

RTCをテストする前に、競合を避けるために自動時刻同期を停止し、無効化してください：  

```bash
sudo systemctl stop systemd-timesyncd  
sudo systemctl disable systemd-timesyncd  
```

**手動でRTC時刻を設定する**

RTCを特定の日時に設定します（例：2024年11月12日午後12時）：  

```bash
sudo hwclock --set --date "2024-11-12 12:00:00"
```

**RTCの時刻をシステムに同期**

システム時刻をRTC時刻に合わせて更新します：  

```bash
sudo hwclock --hctosys
```

**RTCの時刻を確認する**  
RTCに保存されている現在の時刻を確認します：  

```bash
sudo hwclock -r
```

このコマンドはRTC時刻を表示します。

**RTCリテンション機能のテスト**  

- RTCから**電源を切断**します。  
- **数分間待機**します。  
- **電源を再接続**し、以下を使用してRTC時刻を再度確認します：  

  ```bash
  sudo hwclock -r
  ```

- 時刻が正しく保たれている場合、RTCは正常に機能しています。

## ウォッチドッグタイマーテスト

**reComputer R1100**の**ウォッチドッグタイマー**をテストするには、以下の手順に従ってください：

**ウォッチドッグソフトウェアのインストール**

ウォッチドッグパッケージがインストールされていることを確認してください：  

```bash
sudo apt install watchdog
```

**ウォッチドッグの設定**  

**ウォッチドッグ設定ファイル**を編集します：  

```bash
sudo apt-get install vim  # Install Vim if not already installed  
sudo vim /etc/watchdog.conf
```

設定を以下のように変更します：  

```ini
watchdog-device = /dev/watchdog  

# Set the hardware timeout (default is 1 minute)
watchdog-timeout = 120  

# Set the interval between tests (should be shorter than watchdog-timeout)
interval = 15  

# Set system load limits  
max-load-1 = 24  
# max-load-5 = 18  
# max-load-15 = 12  

# Enable real-time priority  
realtime = yes  
priority = 1  
```

**ウォッチドッグサービスの開始**  
ウォッチドッグサービスを有効化して開始します：  

```bash
sudo systemctl start watchdog
```

**ウォッチドッグをシステムハングのシミュレーションでテストする**

**カーネルクラッシュ**をトリガーして、ウォッチドッグが**自動的にシステムを再起動**するかどうかを確認します：  

```bash
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

**システムの監視**  
指定された**タイムアウト期間**後にシステムが**自動的に再起動**するかどうかを確認してください。  

**期待通りに再起動が発生した場合、ウォッチドッグは正常に機能しています。**  

## GPIO経由でのブザーの制御  

ブザーはGPIO 587にマッピングされています。以下のコマンドを使用してオン/オフを切り替えてください：  

**ブザーをオンにする：**  

```bash
echo 587 > /sys/class/gpio/export  
echo out > /sys/class/gpio/gpio587/direction  
echo 1 > /sys/class/gpio/gpio587/value  
```  

**ブザーをオフにする:**  

```bash
echo 587 > /sys/class/gpio/export  
echo out > /sys/class/gpio/gpio587/direction  
echo 0 > /sys/class/gpio/gpio587/value  
```  

## CSI カメラテスト

**reComputer R1100** で **CSI カメラ** をテストするには、以下の手順に従ってください：

**設定ファイルの変更**

カメラモジュールを有効にするために **config.txt** ファイルを編集します：  

```bash
sudo nano /boot/firmware/config.txt
```

ファイルの**末尾**に以下の行を追加してください：  

```ini
dtoverlay=imx219,cam0
```

**システムを再起動する**

変更を適用するために再起動します：  

```bash
sudo reboot
```

**Check Camera Detection**  

再起動後、カメラが検出されているかを確認してください：

```bash
libcamera-jpeg --list-cameras
```

---

**Test the Camera**  

次のコマンドを実行してカメラを有効にしてください：

```bash
rpicam-hello --timeout 0
```

**カメラプレビューが正常に開始されれば、セットアップは完了です！**

## TPM 2.0 接続確認

デバイスに **TPM 2.0 モジュール** を接続している場合、以下のコマンドを使用してその検出を確認できます：  

```bash
ls /dev | grep tpm
```  

**出力の解釈：**

- 出力に **`tpm0`** と **`tpmrm0`** が表示される場合、**TPM（Trusted Platform Module）** が正常に検出され、利用可能であることを確認できます。
- これは、TPMハードウェアが認識され、アクセス可能であることを示しており、TPM関連の機能やアプリケーションを進めることができます。

**デバイスがリストされている場合、TPMモジュールは適切に接続され、使用準備が整っています。**

## ATECC608Aとの通信とランダムシリアル番号の生成

**ATECC608A** デバイスと通信し、ランダムシリアル番号を生成するには、以下の手順に従ってください：

**`atecc-util` リポジトリをクローンする：**  

```bash
git clone https://github.com/wirenboard/atecc-util.git
```  

**`atecc-util` ディレクトリに移動:**  

```bash
cd atecc-util
```  

**`cryptoauthlib` リポジトリをクローンする:**  

```bash
git clone https://github.com/wirenboard/cryptoauthlib.git
```  

**ATECC ユーティリティをコンパイルする:**

```bash
make
```  

**ランダムなシリアル番号を生成する:**  

```bash
./atecc -b 1 -s 192 -c 'serial'
```  

- **`-b 1`** → スロット1を使用します。
- **`-s 192`** → シリアル番号のサイズを**192ビット**に設定します。
- **`-c 'serial'`** → ランダムなシリアル番号を生成します。

**期待される出力：**

生成されたシリアル番号が表示されます。例：  

```bash
01235595d3d621f0ee
```  

この方法により、**ATECC608A**デバイスとの相互作用が可能になり、ランダムシリアル番号の生成などの操作を効率的に実行できます。

## EEPROMとの相互作用

**EEPROM**（電気的消去可能プログラマブル読み取り専用メモリ）にデータを読み書きするには、以下の手順に従ってください：

**EEPROMデバイスファイルに完全な権限を付与する：**  

```bash
sudo chmod 777 /sys/bus/i2c/devices/6-0050/eeprom
```  

**EEPROMにデータを書き込む：**  

```bash
echo "This is a test string" > /sys/bus/i2c/devices/6-0050/eeprom
```  

**EEPROM の内容を16進数形式で読み取る：**  

```bash
cat /sys/bus/i2c/devices/6-0050/eeprom | hexdump -C
```  

## SSD検出の確認

SSDを含む、接続されているすべてのディスクをリストするには、以下のコマンドを使用します：  

```bash
sudo fdisk -l
```  

このコマンドは、検出されたすべてのストレージデバイスのリストを表示します。SSDを表すエントリを探してください。通常は以下のようにラベル付けされています：

- `/dev/sda`  
- `/dev/sdb`  
- `/dev/sdc`など  

正しいSSDエントリを特定したら、必要に応じて**パーティション分割、フォーマット、またはその他のディスク管理タスク**を進めることができます。

## 安全なシャットダウンのためのUPS

**CPUとDC電源入力**間の**GPIO6**接続は、電源が落ちた際にCPUに通知するために使用されます。CPUは、スーパーキャパシタのエネルギーが枯渇する前に**スクリプトを介して緊急タスクを実行**し、その後**安全なシャットダウン（`$shutdown`）**を開始する必要があります。

**代替シャットダウン方法**  
この機能を使用する別の方法は、**GPIOピンの状態が変化したときにシャットダウンをトリガー**することです。指定されたGPIOピンは**入力キー**として設定され、**KEY_POWERイベント**を生成します。これらのイベントは**systemd-logind**によって処理され、自動的にシステムシャットダウンが開始されます。

この機能を有効にするには、`/boot/overlays/README`を参照し、`/boot/firmware/config.txt`を変更して以下を追加してください：  

```ini
dtoverlay=gpio-shutdown,gpio_pin=6,active_low=1
```

:::note

1. **UPS機能の詳細**については、お問い合わせください。
2. **アラーム信号はアクティブLOW**です。

:::
---

#### 安全シャットダウンのためのPythonコード

以下のPythonスクリプトは、**GPIO6を介してスーパーキャパシタUPSの動作モードを検出する方法**を示しています。システムが電源オフイベントを検出すると、**自動的にデータを保存し、安全にシャットダウン**します。  

```python
import RPi.GPIO as GPIO
import time
import os

num = 0

GPIO.setmode(GPIO.BCM)  # Set GPIO numbering mode
GPIO.setup(6, GPIO.IN, pull_up_down=GPIO.PUD_UP)  # Set GPIO6 as input with pull-up resistor
GPIO.add_event_detect(6, GPIO.FALLING, bouncetime=500)  # Add debounce time for stabilization

while True:
    if GPIO.event_detected(6):
        print("...External power off detected...")
        os.system("sync")  # Ensure data is written to disk
        print("...Saving data...")
        time.sleep(3)
        os.system("sync")  # Save data again
        
        while num < 5:
            print(f"--- {5 - num} seconds remaining ---")
            num += 1
            time.sleep(1)

        os.system("sudo shutdown -h now")  # Execute system shutdown
```

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
