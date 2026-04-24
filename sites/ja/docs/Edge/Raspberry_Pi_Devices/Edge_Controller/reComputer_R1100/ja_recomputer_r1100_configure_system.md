---
description: デバイスを取り付けた後に、reComputer R1100 シリーズ上のハードウェアコンポーネントを設定およびテストする方法を説明します。この Wiki では、GPIO マッピング、USER LED テスト、SPI 通信、Wi-Fi と Bluetooth スキャン、LoRa®、4G、RS485、RS232、DI/DO テスト、安全なシャットダウンのための UPS などを扱います。
title: reComputer R1100 を設定する
keywords:
  - Raspberry pi
  - エッジコントローラ
  - reComputer R1100
image: https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg
slug: /recomputer_r1100_configure_system
last_update:
  date: 2/26/2024
  author: Kasun Thushara
createdAt: '2025-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/recomputer_r1100_configure_system/
---

## 概要

デバイスを取り付けた後に、reComputer R1100 シリーズ上のハードウェアコンポーネントを設定およびテストする方法を学びます。この Wiki では、GPIO マッピング、USER LED テスト、SPI 通信、Wi-Fi と Bluetooth スキャン、LoRa®、4G、RS485、RS232、DI/DO テスト、安全なシャットダウンのための UPS などを扱います。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

## GPIO マッピングとオフセットを確認する

GPIO のマッピングとオフセットを確認するには、次の手順に従います。

- **ターミナルで次のコマンドを実行します**

```bash
cat /sys/kernel/debug/gpio
```

**このコマンドは GPIO のマッピングとオフセットを表示し**、GPIO ピンのデバッグや設定に必要な情報を提供します。

## LED インジケータを制御する

reComputer R1100 には、**赤、青、緑**の 3 つの **LED インジケータ**が用意されています。次のコマンドを使用して制御できます。  

**1. LED ディレクトリへ移動する**  

```bash
cd /sys/class/leds/
ls
```

これにより、利用可能な LED が一覧表示されます。

**2. brightness ファイルへ書き込んで LED を有効にする**  
まず **スーパーユーザーモード** に切り替えます。  

```bash
sudo su
```

次に、LED を点灯させます。  

```bash
echo 1 > /sys/class/leds/led-red/brightness
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

**SPI 通信**を確認するには、**TPM モジュールの MISO ピンと MOSI ピンをショートさせる**ことでループバックテストを実行できます。この方法により、MOSI（Master Out, Slave In）から送信されたデータが、MISO（Master In, Slave Out）で受信されることを確認できます。  

**ステップバイステップガイド**  

**1. インターネットに接続する**  
先に進む前に、デバイスがネットワークに接続されていることを確認します。

**2. `spidev-test` リポジトリをクローンする**  

```bash
git clone https://github.com/rm-hull/spidev-test.git
```

**3. ディレクトリに移動する**  

```bash
cd spidev-test
```

**4. `spidev_test.c` プログラムをコンパイルする**  

```bash
gcc spidev_test.c -o spidev_test
```

**5. SPI テストを実行する**

```bash
./spidev_test -D /dev/spidev0.1 -v -p "hello"
```

- `-D /dev/spidev0.1` → 使用する SPI デバイスを指定します  
- `-v` → 冗長出力を有効にします  
- `-p "hello"` → 文字列 `"hello"` を送信します  

**6. ループバックテスト（任意）**  

- テストを実行する前に、**TPM モジュールの MISO ピンと MOSI ピンをショートさせます**。
- SPI バスが正常に動作していれば、送信したデータが**正しく受信**されていることが出力に表示されます。

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

**スキャンを有効にする：**  

```bash
scan on
```

- これにより、周辺の Bluetooth デバイスのスキャンが開始されます。  

## Mini-PCIe 経由の LoRa®

### LoRa® SPI 設定  

**SX1302_HAL リポジトリをクローンします。**  

```bash
cd ~
git clone https://github.com/Lora-net/sx1302_hal
```

**クローンしたディレクトリに移動します。**

```bash
cd sx1302_hal
```

**設定ファイルを編集します。**  

I2C デバイスの設定ファイルを開きます。  

```bash
sudo vim ./libloragw/inc/loragw_i2c.h
```

次の行を変更します。  

```c
#define I2C_DEVICE "/dev/i2c-1"
```

次のようにします。  

```c
#define I2C_DEVICE "/dev/i2c-3"
```

**コードをコンパイルします。**

```bash
sudo make
```

**リセットスクリプトを編集します。**

`reset_lgw.sh` スクリプトを開きます。  

```bash
sudo vim ./tools/reset_lgw.sh
```

ピン設定を更新します。

```bash
SX1302_RESET_PIN=580    # SX1302 reset  
SX1302_POWER_EN_PIN=578 # SX1302 power enable  
SX1261_RESET_PIN=579    # SX1261 reset (LBT/Spectral Scan)  
```

**リセットスクリプトをパケットフォワーダーディレクトリにコピーします。**  

```bash
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**LoRaWAN® 設定ファイルでデフォルトの SPI ポートを更新します。**  

`global_conf.json.sx1250.US915` ファイルを編集します。  

```bash
sed -i 's/spidev0.0/spidev0.1/g' global_conf.json.sx1250.US915
```

**LoRaWAN® モジュールを起動します。**  

```bash
cd ~/sx1302_hal/packet_forwarder
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

### LoRa® USB 設定

LoRa® SPI の代わりに LoRa® USB モジュールを使用している場合は、次の手順に従ってください。最後のステップを除き、ほとんどのコマンドは LoRa® SPI の場合と同じです。

**SX1302 リセットピンをプルアップする**

```bash
echo 1 > /sys/class/gpio/gpio580/value
```

**LoRaWAN® USB モジュールを起動する**

```bash
cd ~/sx1302_hal/packet_forwarder
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

これで LoRa® USB は reComputer R1100 上で設定され、動作しています。

## Mini-PCIe 経由の 4G セルラー

`minicom` を介して AT コマンドを使用し 4G モジュールと通信するには、次の手順に従います。  

**適切なシリアルポートとボーレートで Minicom を開きます。**  

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

このコマンドは、指定したシリアルポート（`/dev/ttyUSB2`）と **115200** のボーレートで Minicom を開きます。  

**4G モジュールに AT コマンドを送信します。**  

Minicom を開いたら、4G モジュールに **AT コマンド** を送信し始めることができます。例えば：  

```bash
AT
```

このコマンドは、モジュールが応答しているかどうかを確認します。モジュールが正常に動作していれば、**"OK"** という応答が返ってきます。  

**4G モジュールを使用して電話番号に発信します。**  

電話番号に発信するには、電話番号の前に `ATD` コマンドを付けて使用します。  

```bash
ATD<phone_number>;
```

- `<phone_number>` を、発信したい電話番号に置き換えてください。  
- 電話番号の終わりを示すために、コマンドの末尾に **セミコロン (;)** を必ず付けてください。  


## RS485 テスト

reComputer R1100 には **2 つの RS485 ポート**が搭載されています。以下は、それぞれに対応する **COM ポート** と **デバイスファイル** です。  

| **RS485 ポート** | **COM ポート** | **シルク印字ラベル** | **デバイスファイル** |
|---------------|-------------|----------------------|----------------|
| **RS485_1**  | COM1        | A1 / B1 / GND       | `/dev/ttyACM0` |
| **RS485_2**  | COM2        | A2 / B2 / GND       | `/dev/ttyACM1` |

**RS485 機能テスト手順**  

**RS485 ポートを接続する**  

物理的に **RS485_1（A & B）** を **RS485_2（A & B）** に接続します。  

**RS485 テストプログラムを実行する**  

2 つの RS485 ポート間での**データ送信を検証**し、速度を測定するためのテストプログラムを提供しています。  

次のコマンドを実行して、テストプログラムをダウンロードして実行します。  

```bash
git clone https://github.com/ackPeng/R1100_TEST.git
cd R1100_TEST
gcc -o serial_test serial_test.c
./serial_test /dev/ttyACM0 /dev/ttyACM1 115200
```

**テスト内容**  

- このプログラムは、**1MB のデータ**を **RS485_1** から **RS485_2** へ送信します。  
- **完了時間を記録**し、実際のボーレートを計算します。  
- **注意：** 実際のボーレートは理論値よりわずかに低くなる場合がありますが、これは想定内です。  

**これらの手順に従って、reComputer R1100 上で RS485 通信を確実に検証してください。**

## RS232 テスト

reComputer R1100 には **2 つの RS232 ポート**が搭載されています。以下は、それぞれに対応する COM ポートとデバイスファイルです。  

| RS232 ポート | COM ポート | ピンマッピング | デバイスファイル |
|------------|---------|-------------|--------------|
| **RS232_1** | COM3 | RX3/TX3/GND | `/dev/ttyACM2` |
| **RS232_2** | COM4 | RX4/TX4/GND | `/dev/ttyACM3` |  

**RS232 通信テスト**  

RS232 の機能をテストするには、次の手順に従います。  

1. **ポートを接続する：**  
   - **RS232_1 の TX** を **RS232_2 の RX** に接続します。  
   - **RS232_1 の RX** を **RS232_2 の TX** に接続します。  

2. **テストプログラムを実行する：**  
   - テストプログラムのリポジトリをクローンします。  

     ```bash
     git clone https://github.com/ackPeng/R1100_TEST.git
     ```  

   - ディレクトリに移動します。  

     ```bash
     cd R1100_TEST
     ```  

   - テストプログラムをコンパイルします。  

     ```bash
     gcc -o serial_test serial_test.c
     ```  

   - テストを実行します。  

     ```bash
     ./serial_test /dev/ttyACM2 /dev/ttyACM3 115200
     ```  

このテストでは、RS232_1 から RS232_2 へ **1MB のデータ**を送信し、完了時間とボーレートを測定します。実際のボーレートは理論値よりわずかに低くなる場合がありますが、これは正常です。

## DI（デジタル入力）テスト

reComputer R1100 には **2 つのデジタル入力（DI）ポート**があり、ユーザーの要件に応じて設定できます。  

| **DI ポート数** | **DI ポート** | **対応する拡張 GPIO** |
|-----------------------|------------|--------------------------------|
| **2**                 | **DI1**     | **GPIO530**                    |
|                       | **DI2**     | **GPIO531**                    |

**DI ポート仕様**  

- **入力タイプ：** PNP  
- **対応入力電圧：** **5VDC – 24VDC**  
- **電流：** **最大 1000mA**  

**DI 機能テスト手順**  

**適切な接続を確認する**  

reComputer R1100 の **DI ポート** が **外部負荷**に正しく接続されていること、また **G_D ポート** が **電源の GND** に接続されていることを確認してください。

**GPIO ステータスを確認する**  

**DI1 に対応する GPIO530** のステータスを確認するには、次のコマンドを実行します。  

```bash
echo 530 > /sys/class/gpio/export
echo in > /sys/class/gpio/gpio530/direction
cat /sys/class/gpio/gpio530/value
```

**GPIO 値の解釈**  

- **外部レベルが HIGH の場合**、`/sys/class/gpio/gpio530/value` の出力は **0** になります。  
- **外部レベルがLOWの場合**、`/sys/class/gpio/gpio530/value` の出力は **1** になります。  

## DO（デジタル出力）

**reComputer R1100** には **2つのデジタル出力（DO）ポート** が搭載されており、ユーザーの要件に応じて設定できます。  

| **DOポート数** | **DOポート** | **対応する拡張GPIO** |
|-----------------------|------------|--------------------------------|
| **2**                 | **DO1**     | **GPIO532**                    |
|                       | **DO2**     | **GPIO533**                    |

**DOポート仕様**  

- **出力タイプ：** トランジスタ  
- **対応出力電圧：** **最大60VDC**  
- **電流容量：** **500mA**  

**DO機能のテスト手順**  

**正しい接続を確認する**  
reComputer R1100 の **DOポート** が **外部負荷** に正しく接続されていることを確認します。

**DOポートはオープンコレクタ出力であり、駆動能力を持たないため、外部抵抗を使用して電源にプルアップしてください。**

**出力レベルを設定する**  
出力を **HIGH** または **LOW** に設定するには、次のコマンドを実行します。  

```bash
echo 532 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio532/direction
echo 1 > /sys/class/gpio/gpio532/value  # Set output to HIGH
echo 0 > /sys/class/gpio/gpio532/value  # Set output to LOW
```

## USBハブのテスト

**USBハブ** の動作を確認するには、次の手順に従います。  

**USBハブが検出されているか確認する**  

ハブを含む、接続されているすべてのUSBデバイスを一覧表示するには、次のコマンドを実行します。  

```bash
lsusb
```

**USBハブ検出の確認**

- このコマンドは、**USBハブ** を含むシステムに接続されているすべての **USBデバイス** の情報を表示します。  
- USBハブが **正常に動作している場合**、その情報がコマンド出力に表示されます。  
- ハブが **一覧に表示されない場合**、**ハブ自体またはシステムとの接続** に問題がある可能性があります。  

**トラブルシューティング（USBハブが検出されない場合）**  

- USBハブの **物理的な接続** を確認します。  
- ハブを **別のUSBポート** に接続してみます。  
- デバイスを再起動し、`lsusb` を再実行します。  
- 問題が解決しない場合、ハブが故障している可能性があります。  

## RTC（リアルタイムクロック）のテスト

**reComputer R1100** 上の **RTC機能** を確認するには、次の手順に従います。  

**自動時刻同期を無効化する**  

RTCをテストする前に、自動時刻同期を停止して無効化し、競合を避けます。  

```bash
sudo systemctl stop systemd-timesyncd  
sudo systemctl disable systemd-timesyncd  
```

**RTC時刻を手動で設定する**

RTCに特定の日付と時刻を設定します（例：2024年11月12日 12:00 PM）。  

```bash
sudo hwclock --set --date "2024-11-12 12:00:00"
```

**RTC時刻をシステムに同期する**

システム時刻をRTC時刻に合わせて更新します。  

```bash
sudo hwclock --hctosys
```

**RTC時刻を確認する**  
RTCに保存されている現在時刻を確認します。  

```bash
sudo hwclock -r
```

このコマンドはRTC時刻を表示します。

**RTC保持のテスト**  

- RTCから **電源を切り離します**。  
- **数分待ちます**。  
- **電源を再接続** し、次のコマンドでRTC時刻を再度確認します。  

  ```bash
  sudo hwclock -r
  ```

- 時刻が正しいままであれば、RTCは正常に動作しています。  

## ウォッチドッグタイマーのテスト

**reComputer R1100** 上の **ウォッチドッグタイマー** をテストするには、次の手順に従います。  

**ウォッチドッグソフトウェアをインストールする**  

ウォッチドッグパッケージがインストールされていることを確認します。  

```bash
sudo apt install watchdog
```

**ウォッチドッグを設定する**  

**ウォッチドッグ設定ファイル** を編集します。  

```bash
sudo apt-get install vim  # Install Vim if not already installed  
sudo vim /etc/watchdog.conf
```

設定を次のように変更します。  

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

**ウォッチドッグサービスを開始する**  
ウォッチドッグサービスを有効化して開始します。  

```bash
sudo systemctl start watchdog
```

**システムハングを模擬してウォッチドッグをテストする**

**カーネルクラッシュ** を発生させ、ウォッチドッグがシステムを **自動的に再起動** するか確認します。  

```bash
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

**システムを監視する**  
指定した **タイムアウト時間** の後にシステムが **自動的に再起動** するか確認します。  

**期待どおりに再起動が行われれば、ウォッチドッグは正常に動作しています。**  

## GPIOによるブザー制御  

ブザーはGPIO 587にマッピングされています。次のコマンドを使用して、ブザーをオン／オフにします。  

**ブザーをオンにする：**  

```bash
echo 587 > /sys/class/gpio/export  
echo out > /sys/class/gpio/gpio587/direction  
echo 1 > /sys/class/gpio/gpio587/value  
```  

**ブザーをオフにする：**  

```bash
echo 587 > /sys/class/gpio/export  
echo out > /sys/class/gpio/gpio587/direction  
echo 0 > /sys/class/gpio/gpio587/value  
```  

## CSIカメラのテスト

**reComputer R1100** 上の **CSIカメラ** をテストするには、次の手順に従います。  

**設定ファイルを変更する**  

カメラモジュールを有効にするために **config.txt** ファイルを編集します。  

```bash
sudo nano /boot/firmware/config.txt
```

ファイルの **末尾** に次の行を追加します。  

```ini
dtoverlay=imx219,cam0
```

**システムを再起動する**

変更を反映させるために再起動します。  

```bash
sudo reboot
```

**カメラ検出の確認**  

再起動後、カメラが検出されているか確認します。  

```bash
libcamera-jpeg --list-cameras
```

---

**カメラのテスト**  

カメラを起動するには、次のコマンドを実行します。  

```bash
rpicam-hello --timeout 0
```

**カメラプレビューが正常に開始されれば、セットアップは完了です！**  

## TPM 2.0 接続確認

デバイスに **TPM 2.0モジュール** を接続している場合、次のコマンドを使用して検出状況を確認できます。  

```bash
ls /dev | grep tpm
```  

**出力の解釈：**  

- 出力に **`tpm0`** および **`tpmrm0`** が表示されていれば、**TPM（Trusted Platform Module）** が正常に検出され、利用可能であることが確認できます。  
- これは、TPMハードウェアが認識されアクセス可能であり、TPM関連の機能やアプリケーションを続行できることを示します。  

**デバイスが一覧に表示されていれば、TPMモジュールは正しく接続され、使用準備が整っています。**  

## ATECC608Aとの連携とランダムシリアル番号の生成

**ATECC608A** デバイスと通信し、ランダムなシリアル番号を生成するには、次の手順に従います。  

**`atecc-util` リポジトリをクローンする：**  

```bash
git clone https://github.com/wirenboard/atecc-util.git
```  

**`atecc-util` ディレクトリに移動する：**  

```bash
cd atecc-util
```  

**`cryptoauthlib` リポジトリをクローンする：**  

```bash
git clone https://github.com/wirenboard/cryptoauthlib.git
```  

**ATECCユーティリティをコンパイルする：**

```bash
make
```  

**ランダムシリアル番号を生成する：**  

```bash
./atecc -b 1 -s 192 -c 'serial'
```  

- **`-b 1`** → スロット1を使用します。  
- **`-s 192`** → シリアル番号のサイズを **192ビット** に設定します。  
- **`-c 'serial'`** → ランダムなシリアル番号を生成します。  

**期待される出力：**  

生成されたシリアル番号が、次のように表示されます。  

```bash
01235595d3d621f0ee
```  

この方法により、**ATECC608A** デバイスと連携し、ランダムシリアル番号の生成などの操作を効率的に行うことができます。  

## EEPROMとの連携

**EEPROM**（Electrically Erasable Programmable Read-Only Memory）にデータを読み書きするには、次の手順に従います。  

**EEPROMデバイスファイルにフルパーミッションを付与する：**  

```bash
sudo chmod 777 /sys/bus/i2c/devices/6-0050/eeprom
```  

**EEPROMにデータを書き込む：**  

```bash
echo "This is a test string" > /sys/bus/i2c/devices/6-0050/eeprom
```  

**EEPROMの内容を16進数形式で読み出す：**  

```bash
cat /sys/bus/i2c/devices/6-0050/eeprom | hexdump -C
```  

## SSD検出の確認

SSDを含む、接続されているすべてのディスクを一覧表示するには、次のコマンドを使用します。  

```bash
sudo fdisk -l
```  

このコマンドは、検出されたすべてのストレージデバイスの一覧を表示します。通常、SSDを表すエントリは次のように表示されます。  

- `/dev/sda`  
- `/dev/sdb`  
- `/dev/sdc` など  

正しいSSDエントリを特定したら、必要に応じて **パーティション作成、フォーマット、その他のディスク管理作業** を実行できます。

## 安全なシャットダウンのためのUPS

**CPUとDC電源入力** 間の **GPIO6** 接続は、電源が落ちたことをCPUに通知するために使用されます。CPUは、スーパーキャパシタのエネルギーが尽きる前に **スクリプトを介して緊急タスクを実行** し、その後 **安全なシャットダウン（`$shutdown`）** を開始する必要があります。  

**代替シャットダウン方法**  
この機能を使用する別の方法として、**GPIOピンの状態変化をトリガとしてシャットダウンを実行** することができます。指定したGPIOピンは **入力キー** として設定され、**KEY_POWERイベント** を生成します。これらのイベントは **systemd-logind** によって処理され、自動的にシステムシャットダウンが開始されます。  

この機能を有効にするには、まず `/boot/overlays/README` を参照し、その後 `/boot/firmware/config.txt` を編集して次の行を追加します。  

```ini
dtoverlay=gpio-shutdown,gpio_pin=6,active_low=1
```

:::note

1. **UPS機能の詳細** については、弊社までお問い合わせください。  
2. **アラーム信号はアクティブLOW** です。  

:::
---

#### 安全なシャットダウンのためのPythonコード  

次のPythonスクリプトは、**GPIO6を介してスーパーキャパシタUPSの動作モードを検出する方法** を示しています。システムが電源オフイベントを検出すると、**自動的にデータを保存し、安全にシャットダウン** します。  

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

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせてお選びいただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
