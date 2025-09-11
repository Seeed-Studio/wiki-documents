---
description: デバイスをインストールした後に reComputer R1100 シリーズのハードウェアコンポーネントを設定およびテストする方法を学びます。この Wiki では GPIO マッピング、USER LED テスト、SPI 通信、Wi-Fi および Bluetooth スキャン、LoRa®、4G、Mini-PCIe 経由の Zigbee、RS485、RS232、DI/DO テスト、安全なシャットダウンのための UPS について説明します。
title: reComputer R1100 の設定
keywords:
- Raspberry pi
- Edge Controller
- reComputer R1100
image: https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg
slug: /ja/recomputer_r1100_configure_system
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 概要

デバイスをインストールした後に reComputer R1100 シリーズのハードウェアコンポーネントを設定およびテストする方法を学びます。この Wiki では GPIO マッピング、USER LED テスト、SPI 通信、Wi-Fi および Bluetooth スキャン、LoRa®、4G、Mini-PCIe 経由の Zigbee、RS485、RS232、DI/DO テスト、安全なシャットダウンのための UPS などについて説明します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## GPIO マッピングとオフセットの確認

GPIO マッピングとオフセットを確認するには、以下の手順を実行してください：
- **ターミナルで以下のコマンドを実行**

```bash
cat /sys/kernel/debug/gpio
```

**このコマンドは GPIO マッピングとオフセットを表示します**。これにより、GPIO ピンのデバッグや設定に必要な情報を得ることができます。

## LED インジケーターの制御

reComputer R1100 には **赤、青、緑**の3つの **LEDインジケーター** が搭載されています。以下のコマンドを使用して制御できます：

**1. LEDディレクトリに移動**  
```bash
cd /sys/class/leds/
ls
```
これにより、利用可能な LED が一覧表示されます。

**2. brightness ファイルに値を書き込んで LED を有効化**  
まず **スーパーユーザーモード** に切り替えます：  
```bash
sudo su
```
次に、LED をオンにします：  
```bash
echo 1 > /sys/class/leds/led-red/brightness
echo 1 > /sys/class/leds/led-blue/brightness
echo 1 > /sys/class/leds/led-green/brightness
```
これにより、対応する LED が **点灯** します。

**3. LED をオフにする（オプション）**  
特定の LED を **オフにする** には、以下を使用します：
```bash
echo 0 > /sys/class/leds/led-red/brightness
echo 0 > /sys/class/leds/led-blue/brightness
echo 0 > /sys/class/leds/led-green/brightness
```

## SPI 通信のテスト

**SPI 通信** を確認するには、TPM モジュールの MISO と MOSI ピンを **ショート接続** してループバックテストを実行します。この方法により、MOSI（Master Out, Slave In）で送信されたデータが MISO（Master In, Slave Out）で受信されることを確認できます。

**手順ガイド**

**1. インターネットに接続**  
テストを開始する前に、デバイスがネットワークに接続されていることを確認してください。

**2. `spidev-test` リポジトリをクローン**  

```bash
git clone https://github.com/rm-hull/spidev-test.git
```

**3. ディレクトリに移動**  

```bash
cd spidev-test
```

**4. `spidev_test.c` プログラムをコンパイル**  
```bash
gcc spidev_test.c -o spidev_test
```

**5. SPI テストを実行**

```bash
./spidev_test -D /dev/spidev0.1 -v -p "hello"
```
- `-D /dev/spidev0.1` → SPI デバイスを指定  
- `-v` → 詳細出力を有効化  
- `-p "hello"` → 文字列 `"hello"` を送信  

**6. ループバックテスト（オプション）**  
- テストを実行する前に、TPM モジュールの MISO と MOSI ピンを **ショート接続** します。
- SPI バスが正常に動作している場合、送信されたデータが **正しく受信** されていることが出力に表示されます。

## Wi-Fi スキャン
利用可能な Wi-Fi ネットワークとその詳細を一覧表示するには、以下を実行してください:  
```bash
sudo iwlist wlan0 scan
```
- このコマンドは、近隣のすべての Wi-Fi ネットワークをスキャンし、それらの SSID、信号強度、および暗号化タイプを表示します。  

## Bluetooth スキャン  
Bluetooth デバイスをスキャンするには、以下の手順を実行してください:  

**Bluetooth コントロールインターフェースを開く:**  
```bash
sudo bluetoothctl
```

**スキャンを有効にする:**  
```bash
scan on
```
- これにより、近隣の Bluetooth デバイスのスキャンが開始されます。  

## Mini-PCIe 経由の LoRa®

### LoRa® SPI 設定  

**SX1302_HAL リポジトリをクローンする:**  

```bash
cd ~
git clone https://github.com/Lora-net/sx1302_hal
```

**クローンしたディレクトリに移動する:** 

```bash
cd sx1302_hal
```

**設定ファイルを変更する:**  

I2C デバイス設定ファイルを開きます:  

```bash
sudo vim ./libloragw/inc/loragw_i2c.h
```
以下の行を変更します:  
```c
#define I2C_DEVICE "/dev/i2c-1"
```
次のように変更します:  
```c
#define I2C_DEVICE "/dev/i2c-3"
```

**コードをコンパイルする:** 

```bash
sudo make
```

**リセットスクリプトを変更する:**

`reset_lgw.sh` スクリプトを開きます:  

```bash
sudo vim ./tools/reset_lgw.sh
```
ピン設定を更新します: 

```bash
SX1302_RESET_PIN=580    # SX1302 リセット  
SX1302_POWER_EN_PIN=578 # SX1302 電源有効化  
SX1261_RESET_PIN=579    # SX1261 リセット (LBT/スペクトルスキャン)  
```

**リセットスクリプトをパケットフォワーダーディレクトリにコピーする:**  

```bash
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**LoRaWAN® 設定ファイルでデフォルトの SPI ポートを更新する:**  

`global_conf.json.sx1250.US915` ファイルを変更します:  
```bash
sed -i 's/spidev0.0/spidev0.1/g' global_conf.json.sx1250.US915
```

**LoRaWAN® モジュールを起動する:**  

```bash
cd ~/sx1302_hal/packet_forwarder
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

### LoRa® USB 設定
LoRa® USB モジュールを使用する場合、LoRa® SPI の手順とほぼ同じですが、最後のステップが異なります。

**SX1302 リセットピンをプルアップする**

```bash
echo 1 > /sys/class/gpio/gpio580/value
```
**LoRaWAN® USB モジュールを起動する**

```bash
cd ~/sx1302_hal/packet_forwarder
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```
LoRa® USB は reComputer R1100 上で設定され、動作しています。

## Mini-PCIe 経由の 4G セルラー

AT コマンドを使用して `minicom` 経由で 4G モジュールと対話するには、以下の手順を実行してください:  

**適切なシリアルポートとボーレートで Minicom を開く:**  

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```
このコマンドは、指定されたシリアルポート (`/dev/ttyUSB2`) をボーレート **115200** で Minicom を開きます。  

**4G モジュールに AT コマンドを送信する:**  

Minicom が開いたら、**AT コマンド**を 4G モジュールに送信できます。例えば:  

```bash
AT
```
このコマンドはモジュールが応答可能かどうかを確認します。モジュールが正常に動作している場合、**"OK"** という応答を受け取るはずです。  

**4G モジュールを使用して電話番号をダイヤルする:**  

電話番号をダイヤルするには、`ATD` コマンドの後に電話番号を入力します:  

```bash
ATD<phone_number>;
```
- `<phone_number>` をダイヤルしたい電話番号に置き換えてください。  
- コマンドの最後に **セミコロン (;)** を含める必要があります。これは電話番号の終了を示します。  

## Mini-PCIe経由のZigbee
**Zigbeeモジュール間の通信**をテストするには、以下の手順に従ってください：

**利用可能なシリアルポートを確認する**  

以下のコマンドを実行して、利用可能なシリアルポートを確認します：  
```bash
cat /dev/ttyUSB*
```

**シリアル通信ツールをインストールする**  

グラフィカルなシリアルターミナルである**CuteCom**をインストールします：  

```bash
sudo apt-get install cutecom
```

**最初のZigbeeモジュール（コーディネーター）を設定する**  

- **CuteCom**を開き、**最初のシリアルポート**を設定します。  
- **設定内容：**
  - **ボーレート（Baud Rate）：** 115200  
  - インターフェース下部の**"Hex output"**を有効にします。  

**コーディネーターとして設定する手順：**  

1. **コーディネーターとして設定する：** 以下のコマンドを送信します：  
   ```  
   55 04 00 05 00 05  
   ```  
   - 期待される応答：  
   ```  
   55 04 00 05 00 05  
   ```  
2. **デバイスをリセットする：**  
   - **リセットボタン**を押す、または  
   - 以下のコマンドを送信します：  
     ```  
     55 07 00 04 00 FF FF 00 04  
     ```  
3. **ネットワークを形成する：**  
   - 以下のコマンドを送信します：  
   ```  
   55 03 00 02 02  
   ```  

**2つ目のZigbeeモジュール（ルーター）を設定する**  
- **CuteCom**の別のインスタンスを開き、**2つ目のシリアルポート**を同じ設定で構成します。  

**ルーターとして設定する手順：**  
1. **ルーターとして設定する：** 以下のコマンドを送信します：  
   ```  
   55 04 00 05 01 04  
   ```  
   - 期待される応答：  
   ```  
   55 04 00 05 00 05  
   ```  
2. **デバイスをリセットする：**  
   - **リセットボタン**を押す、または  
   - 以下のコマンドを送信します：  
     ```  
     55 07 00 04 00 FF FF 00 04  
     ```  
3. **ネットワークを形成する：** 以下のコマンドを送信します：  
   ```  
   55 03 00 02 02  
   ```  

**デバイスの状態を確認する**  
デバイスの状態を確認するには、以下を送信します：  
```  
55 03 00 00 00  
```  
 期待される応答：  
```  
55 2A 00 00 00 01 XX XX XX XX  
```  
- `XX`はデバイス固有の情報を表します。  

**透過モードに入る**  

**ネットワーク形成**が成功した場合、以下を送信して**透過モード**を有効にします：  
```  
55 07 00 11 00 03 00 01 13  
```  
**両方のモジュールが透過モードである必要があります**。  
**透過モードを終了する**には、以下を送信します：  
```  
+++  
```

**追加の注意事項**  
- **ルーターの設定に失敗**した場合、デバイスがすでに**コーディネーター**である可能性があります。ネットワークを離脱するには、以下を送信します：  
  ```  
  55 07 00 04 02 XXXX XX  
  ```  
- **送信電力をテスト**するには、以下を使用します：  
  - **電力を照会する：**  
    ```  
    55 04 0D 00 00 0D  
    ```  
  - **電力を設定する：**  
    ```  
    55 04 0D 01 XXXX  
    ```  

各Zigbeeモジュールに対して、**正しいシリアルポート**を使用するように`/dev/ttyUSB*`を置き換えてください。  
これらの手順を慎重に実行して、2つのモジュール間で**Zigbee通信**を確立してください。  

---

## RS485テスト 

reComputer R1100には**2つのRS485ポート**が含まれています。それぞれの**COMポート**と**デバイスファイル**は以下の通りです：  

<table>
<tr>
<th>**RS485ポート**</th>
<th>**COMポート**</th>
<th>**シルクスクリーンラベル**</th>
<th>**デバイスファイル**</th>
</tr>
<tr>
<td>**RS485_1**</td>
<td>COM1</td>
<td>A1 / B1 / GND</td>
<td>`/dev/ttyACM0`</td>
</tr>
<tr>
<td>**RS485_2**</td>
<td>COM2</td>
<td>A2 / B2 / GND</td>
<td>`/dev/ttyACM1`</td>
</tr>
</table>

**RS485機能をテストする手順**  

**RS485ポートを接続する**  

**RS485_1（A & B）**を**RS485_2（A & B）**に物理的に接続します。  

**RS485テストプログラムを実行する**  

2つのRS485ポート間で**データ送信を検証**し、速度を測定するためのテストプログラムを提供しています。  

以下のコマンドを実行して、テストプログラムをダウンロードして実行します：  
```bash
git clone https://github.com/ackPeng/R1100_TEST.git
cd R1100_TEST
gcc -o serial_test serial_test.c
./serial_test /dev/ttyACM0 /dev/ttyACM1 115200
```

**テストの説明**  
- このプログラムは、**RS485_1**から**RS485_2**に**1MBのデータを送信**します。  
- **完了時間を記録**し、実際のボーレートを計算します。  
- **注意：** 実際のボーレートは理論値よりわずかに低くなる場合がありますが、これは正常です。  

これらの手順を慎重に実行して、reComputer R1100でのRS485通信を検証してください。  

## RS232テスト

reComputer R1100は**2つのRS232ポート**を備えています。以下は対応するCOMポートとデバイスファイルです：

| RS232ポート | COMポート | ピンマッピング | デバイスファイル |
|-------------|-----------|----------------|------------------|
| **RS232_1** | COM3      | RX3/TX3/GND    | `/dev/ttyACM2`   |
| **RS232_2** | COM4      | RX4/TX4/GND    | `/dev/ttyACM3`   |

**RS232通信のテスト**

以下の手順に従ってRS232の機能をテストしてください：

1. **ポートを接続する**：
   - **RS232_1のTX**を**RS232_2のRX**に接続します。
   - **RS232_1のRX**を**RS232_2のTX**に接続します。

2. **テストプログラムを実行する**：
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

このテストでは、**1MBのデータ**をRS232_1からRS232_2に送信し、完了時間とボーレートを測定します。実際のボーレートが理論値より若干低くなる場合がありますが、これは正常です。

## DI（デジタル入力）テスト

reComputer R1100は**2つのデジタル入力（DI）ポート**を備えており、ユーザーの要件に基づいて設定可能です。

| **DIポート数** | **DIポート** | **対応する拡張GPIO** |
|----------------|--------------|----------------------|
| **2**          | **DI1**      | **GPIO530**          |
|                | **DI2**      | **GPIO531**          |

**DIポート仕様**  
- **入力タイプ**：PNP  
- **対応入力電圧**：**5VDC – 24VDC**  
- **電流**：**最大1000mA**

**DI機能をテストする手順**

**適切な接続を確認する**

reComputer R1100の**DIポート**が**外部負荷**に適切に接続されていることを確認してください。また、**G_Dポート**が**電源のGND**に接続されていることを確認してください。

**GPIOステータスを確認する**

以下のコマンドを実行して、**GPIO530**（DI1に対応）のステータスを確認します：
```bash
echo 530 > /sys/class/gpio/export
echo in > /sys/class/gpio/gpio530/direction
cat /sys/class/gpio/gpio530/value
```

**GPIO値の解釈**  
- **外部レベルがHIGHの場合**、`/sys/class/gpio/gpio530/value`の出力は**0**になります。
- **外部レベルがLOWの場合**、`/sys/class/gpio/gpio530/value`の出力は**1**になります。

## DO（デジタル出力）

**reComputer R1100**は**2つのデジタル出力（DO）ポート**を備えており、ユーザーの要件に基づいて設定可能です。

| **DOポート数** | **DOポート** | **対応する拡張GPIO** |
|----------------|--------------|----------------------|
| **2**          | **DO1**      | **GPIO532**          |
|                | **DO2**      | **GPIO533**          |

**DOポート仕様**  
- **出力タイプ**：トランジスタ  
- **対応出力電圧**：**最大60VDC**  
- **電流容量**：**500mA**

**DO機能をテストする手順**

**適切な接続を確認する**  
reComputer R1100の**DOポート**が**外部負荷**に適切に接続されていることを確認してください。

**DOポートはオープンコレクタ出力であり、駆動能力がないため、外部抵抗を使用して電源にプルアップする必要があります。**

**出力レベルを設定する**  
以下のコマンドを実行して出力を**HIGH**または**LOW**に設定します：
```bash
echo 532 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio532/direction
echo 1 > /sys/class/gpio/gpio532/value  # 出力をHIGHに設定
echo 0 > /sys/class/gpio/gpio532/value  # 出力をLOWに設定
```

## USBハブのテスト

**USBハブ**の機能を確認するには、以下の手順を実行してください：

**USBハブが検出されているか確認する**

以下のコマンドを実行して、ハブを含むすべての接続されたUSBデバイスを一覧表示します：
```bash
lsusb
```

**USBハブの検出を確認する**
- このコマンドは、システムに接続されているすべての**USBデバイス**（**USBハブ**を含む）の情報を表示します。
- USBハブが**正常に動作している場合**、その詳細がコマンドの出力に表示されるはずです。
- ハブが**リストに表示されない場合**、**ハブ自体またはシステムへの接続**に問題がある可能性があります。

**トラブルシューティング（USBハブが検出されない場合）**

- USBハブの**物理的な接続**を確認してください。
- ハブを**別のUSBポート**に接続してみてください。
- デバイスを再起動し、再度`lsusb`を実行してください。
- 問題が解決しない場合、ハブが故障している可能性があります。

---

## RTC（リアルタイムクロック）のテスト

**reComputer R1100**で**RTC機能**を確認するには、以下の手順を実行してください：

**自動時刻同期を無効化する**

RTCをテストする前に、自動時刻同期を停止して無効化し、競合を回避します：
```bash
sudo systemctl stop systemd-timesyncd  
sudo systemctl disable systemd-timesyncd  
```

**RTCの時刻を手動で設定する**

RTCに特定の日付と時刻（例：2024年11月12日12:00 PM）を設定します：
```bash
sudo hwclock --set --date "2024-11-12 12:00:00"
```

**RTCの時刻をシステムに同期する**

RTCの時刻をシステム時刻に更新します：
```bash
sudo hwclock --hctosys
```

**RTCの時刻を確認する**  
RTCに保存されている現在の時刻を確認します：
```bash
sudo hwclock -r
```
このコマンドはRTCの時刻を表示します。

**RTCの保持機能をテストする**
- RTCから**電源を切断**します。
- **数分間待機**します。
- **電源を再接続**し、再度RTCの時刻を確認します：
  ```bash
  sudo hwclock -r
  ```
- 時刻が正確であれば、RTCは正常に動作しています。

---

## ウォッチドッグタイマーのテスト

**reComputer R1100**で**ウォッチドッグタイマー**をテストするには、以下の手順を実行してください：

**ウォッチドッグソフトウェアをインストールする**

ウォッチドッグパッケージがインストールされていることを確認します：
```bash
sudo apt install watchdog
```

**ウォッチドッグを設定する**

**ウォッチドッグの設定ファイル**を編集します：
```bash
sudo apt-get install vim  # Vimがインストールされていない場合はインストール
sudo vim /etc/watchdog.conf
```
設定を以下のように変更します：
```ini
watchdog-device = /dev/watchdog  

# ハードウェアタイムアウトを設定（デフォルトは1分）
watchdog-timeout = 120  

# テスト間隔を設定（watchdog-timeoutより短くする必要があります）
interval = 15  

# システム負荷の制限を設定
max-load-1 = 24  
# max-load-5 = 18  
# max-load-15 = 12  

# リアルタイム優先度を有効化
realtime = yes  
priority = 1  
```

**ウォッチドッグサービスを開始する**
ウォッチドッグサービスを有効化して開始します：
```bash
sudo systemctl start watchdog
```

**システムハングをシミュレートしてウォッチドッグをテストする**

**カーネルクラッシュ**をトリガーして、ウォッチドッグが**自動的にシステムを再起動**するか確認します：
```bash
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

**システムを監視する**
指定した**タイムアウト期間**後にシステムが**自動的に再起動**するか確認します。

**再起動が期待通りに発生した場合、ウォッチドッグは正常に動作しています。**

## GPIO を使用したブザーの制御  

ブザーは GPIO 587 にマッピングされています。以下のコマンドを使用してオンとオフを切り替えます。  

**ブザーをオンにする:**  

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


## CSI カメラのテスト  

**reComputer R1100** で **CSI カメラ** をテストするには、以下の手順を実行してください。  

**設定ファイルの変更**  

カメラモジュールを有効にするために **config.txt** ファイルを編集します:  
```bash
sudo nano /boot/firmware/config.txt
```
ファイルの **末尾** に以下の行を追加します:  
```ini
dtoverlay=imx219,cam0
```


**システムの再起動**  

変更を適用するために再起動します:  
```bash
sudo reboot
```


**カメラ検出の確認**  

再起動後、カメラが検出されているか確認します:  
```bash
libcamera-jpeg --list-cameras
```
---

**カメラのテスト**  

以下のコマンドを実行してカメラを起動します:  
```bash
rpicam-hello --timeout 0
```
**カメラのプレビューが正常に開始されれば、セットアップは完了です！**  


## TPM 2.0 接続確認  

**TPM 2.0 モジュール** をデバイスに接続した場合、以下のコマンドを使用して検出を確認できます:  

```bash
ls /dev | grep tpm
```  

**出力の解釈:**  

- 出力に **`tpm0`** および **`tpmrm0`** が表示される場合、**TPM (Trusted Platform Module)** が正常に検出され、利用可能であることを示します。  
- これは TPM ハードウェアが認識され、アクセス可能であることを意味し、TPM 関連の機能やアプリケーションを進めることができます。  

**デバイスがリストされている場合、TPM モジュールは正しく接続され、使用準備が整っています。**  


## ATECC608A との通信およびランダムシリアル番号の生成  

**ATECC608A** デバイスと通信し、ランダムシリアル番号を生成するには、以下の手順を実行してください。  

**`atecc-util` リポジトリをクローン:**  

```bash
git clone https://github.com/wirenboard/atecc-util.git
```  

**`atecc-util` ディレクトリに移動:**  

```bash
cd atecc-util
```  

**`cryptoauthlib` リポジトリをクローン:**  

```bash
git clone https://github.com/wirenboard/cryptoauthlib.git
```  

**ATECC ユーティリティをコンパイル:**  

```bash
make
```  

**ランダムシリアル番号を生成:**  

```bash
./atecc -b 1 -s 192 -c 'serial'
```  
- **`-b 1`** → スロット 1 を使用します。  
- **`-s 192`** → シリアル番号サイズを **192 ビット** に設定します。  
- **`-c 'serial'`** → ランダムシリアル番号を生成します。  

**期待される出力:**  

生成されたシリアル番号が表示されます。例:  
```bash
01235595d3d621f0ee
```  

この方法により、**ATECC608A** デバイスと通信し、ランダムシリアル番号を効率的に生成することができます。  

## EEPROM との通信  

**EEPROM** (電気的消去可能プログラム可能読み取り専用メモリ) にデータを読み書きするには、以下の手順を実行してください。  

**EEPROM デバイスファイルに完全な権限を付与:**  
```bash
sudo chmod 777 /sys/bus/i2c/devices/6-0050/eeprom
```  

**EEPROM にデータを書き込む:**  
```bash
echo "This is a test string" > /sys/bus/i2c/devices/6-0050/eeprom
```  

**EEPROM の内容を 16 進数形式で読み取る:**  

```bash
cat /sys/bus/i2c/devices/6-0050/eeprom | hexdump -C
```  

## SSD検出の確認

接続されているすべてのディスク（SSDを含む）を一覧表示するには、以下のコマンドを使用してください：  
```bash
sudo fdisk -l
```  

このコマンドは、検出されたすべてのストレージデバイスのリストを表示します。SSDを表すエントリを探してください。通常、以下のようにラベル付けされています：  
- `/dev/sda`  
- `/dev/sdb`  
- `/dev/sdc` など  

正しいSSDエントリを特定したら、必要に応じて**パーティション作成、フォーマット、その他のディスク管理タスク**を実行できます。



## 安全なシャットダウンのためのUPS

**CPUとDC電源入力**間の**GPIO6**接続は、電源供給が停止した際にCPUに通知するために使用されます。CPUは、**スーパキャパシタのエネルギーが尽きる前にスクリプトを介して緊急タスクを実行**し、その後**安全なシャットダウン（`$shutdown`）**を開始する必要があります。  

**代替シャットダウン方法**  
この機能を使用するもう1つの方法は、**GPIOピンの状態変化をトリガーとしてシャットダウンを実行する**ことです。指定されたGPIOピンは**入力キー**として構成され、**KEY_POWERイベント**を生成します。これらのイベントは**systemd-logind**によって処理され、自動的にシステムシャットダウンが開始されます。  

この機能を有効にするには、`/boot/overlays/README`を参照し、`/boot/firmware/config.txt`を以下のように変更してください：  
```ini
dtoverlay=gpio-shutdown,gpio_pin=6,active_low=1
```

:::note 
1. **UPS機能の詳細**についてはお問い合わせください。  
2. **アラーム信号はLOWアクティブ**です。  
:::
---

#### 安全なシャットダウンのためのPythonコード  
以下のPythonスクリプトは、**GPIO6を介してスーパキャパシタUPSの動作モードを検出する方法**を示しています。システムが電源オフイベントを検出すると、**データを自動的に保存し、安全にシャットダウン**します。  

```python
import RPi.GPIO as GPIO
import time
import os

num = 0

GPIO.setmode(GPIO.BCM)  # GPIO番号モードを設定
GPIO.setup(6, GPIO.IN, pull_up_down=GPIO.PUD_UP)  # GPIO6を入力として設定し、プルアップ抵抗を使用
GPIO.add_event_detect(6, GPIO.FALLING, bouncetime=500)  # 安定化のためのデバウンス時間を追加

while True:
    if GPIO.event_detected(6):
        print("...外部電源オフが検出されました...")
        os.system("sync")  # データをディスクに書き込むことを保証
        print("...データを保存中...")
        time.sleep(3)
        os.system("sync")  # 再度データを保存
        
        while num < 5:
            print(f"--- 残り {5 - num} 秒 ---")
            num += 1
            time.sleep(1)

        os.system("sudo shutdown -h now")  # システムシャットダウンを実行
```

## 技術サポートと製品に関する議論

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>