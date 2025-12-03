---
description: このガイドでは、reComputer Superのハードウェアコンポーネントとインターフェースの詳細な概要を提供し、CSIカメラ、USBポート、各種M.2インターフェース、mini PCIe、RTC、Ethernet、LED、ファン、CAN、拡張ポート、HDMIなどのデバイスの接続と使用方法について、ステップバイステップの手順とコマンド例を含めて説明します。
title: reComputer Super ハードウェアとインターフェース使用方法
keywords:
  - reComputer Super
  - インターフェース使用方法
  - Jetson
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super2.webp
slug: /ja/recomputer_jetson_super_hardware_interfaces_usage
last_update:
  date: 05/26/2025
  author: Zibo
---

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super.png"/>  
</div>

このwikiでは、reComputer Superの様々なハードウェアとインターフェースについて紹介し、プロジェクトアイデアを拡張するためにそれらを使用する方法を説明します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## CSI カメラ

reComputer Superは、画像とビデオキャプチャ用の標準4 MIPI CSIカメラをサポートしています。カメラを接続してテストするには、以下の手順に従ってください。

### ハードウェア接続

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/sci.jpg"/>  
</div>

**ステップ1.** Recomputer Superの背面カバーを開きます。

**ステップ2.** MIPI CSIカメラをreComputer Superボード上の適切なCSIポートに接続します。

**ステップ3.** カメラを固定し、接続がしっかりしていることを確認します。

### 使用方法

:::note
CSIカメラを使用する前に、必要なカメラドライバーを含むJetPackバージョンがインストールされていることを確認してください。
:::

**ステップ1.** カメラがシステムに認識されているかを確認します：

```bash
ls /dev/video*
```

**ステップ2.** （オプション）まだインストールされていない場合は、ビデオユーティリティをインストールします：

```bash
sudo apt install v4l-utils
```

**ステップ3.** 以下のコマンドを使用してカメラを起動し、ビデオストリームを表示します：

```bash
nvgstcapture-1.0 --sensor-id=0
```

:::info
複数のカメラがある場合は、`--sensor-id`を適切な値に変更してください。
:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/csi.png"/>
</div>

---

## USB

reComputer Superには、合計4つのUSB 3.2ポートと1つのデバッグ用USB 2.0 Type-Cポートがあります。

### USB 3.2 ポート

Jetsonターミナルで`watch -n 1 lsusb -tv`を入力してUSBポートを調べることができます。USBデバイスが接続されると、そのポートの詳細情報がここに表示されます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/usb_lsusb.png"/>
</div>

さらに、`dd`コマンドを使用してUSBストレージデバイスの読み書き速度をテストできます：

- **読み取り：**

  ```bash
  sudo dd if=/dev/sda of=/dev/null bs=1024M count=5 iflag=direct
  ```

 <div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/usb_read.png"/>
</div>

- **書き込み：**

  ```bash
  sudo dd if=/dev/zero of=/dev/sda bs=1024M count=5 conv=fdatasync
  ```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/usb_w.png"/>
</div>

### USB 2.0 Type-C ポート

このシリアルポートを使用して、USB Cデータケーブル経由でPC側の入出力デバッグ情報を監視できます。

**ステップ1.** スイッチをデバッグモードに切り替えます。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/debug.jpg"/>
</div>

**ステップ2.** USBデータケーブルでPCに接続し、PCに[CP210X Driver](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads)をダウンロードします。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/download_driver.png"/>
</div>

**ステップ3.** USBデータケーブルでPCに接続し、ダウンロードしたファイルを展開してPCにドライバーをインストールします。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/install_driver.png"/>
</div>

**ステップ4.** Windows PCでDevice Managerを開き、reComputer Superに割り当てられたCOMポート番号を確認します。「Ports (COM & LPT)」の下に「Silicon Labs CP210x USB to UART Bridge (COMX)」として表示されるはずです。ここでXはCOMポート番号です。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/debug1.png"/>
</div>

**ステップ5.** シリアルポートツール（ここではMobaXtermツールを例として使用）を開き、新しいセッションを作成します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png"/>
</div>

**ステップ6.** Serialツールを選択します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png"/>
</div>

**ステップ7.** 対応するシリアルポートを選択し、ボーレートを115200に設定して「OK」をクリックします。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/3.png"/>
</div>

**ステップ8.** ユーザー名とパスワードでreComputer Superにログインします。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/4.png"/>
</div>

## M.2 Key M

M.2 Key Mは、高速ソリッドステートドライブ（SSD）用に設計されたインターフェースで、超高速データ転送速度を提供し、高性能アプリケーションに最適です。

### サポートされているSSDは以下の通りです

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-6265.html)

### ハードウェア接続

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/ssd.jpg"/>  
</div>

### 使用方法

Jetsonデバイスでターミナルを開き、以下のコマンドを入力してSSDの読み書き速度をテストします。

```bash
#create a blank test file first
sudo touch /ssd/test
dd if=/dev/zero of=/home/seeed/ssd/test bs=1024M count=5 conv=fdatasync
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/ssd_w.png"/>
</div>

:::danger
テスト完了後は、`sudo rm /home/seeed/ssd/test`コマンドを実行してキャッシュファイルを削除してください。
:::

## M.2 Key E

M.2 Key Eインターフェースは、Wi-FiやBluetoothなどの無線通信モジュール用に設計されたコンパクトで高速なデータインターフェースで、無線機能を拡張するために使用されます。

### ハードウェア接続

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/wifi_c.png"/>
</div>

### 使用方法

Wi-Fiモジュールをインストールしてデバイスの電源を入れた後、デバイスのWi-FiとBluetooth設定を構成できます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-bluetooth-test.gif"/>
</div>

もちろん、以下のコマンドを使用してデバイスの動作状態を確認することもできます。

```bash
ifconfig
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/wifi_ifconfig.png"/>
</div>

**Bluetooth：**

  ```bash
  bluetoothctl
  scan on
  ```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/bluetooth.png"/>
</div>

## Mini PCIe

reComputer superには、LTE 4Gモジュール用のmini-PCIeが付属しています。

#### ハードウェア接続

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/mini_p.png"/>
</div>

:::note
SIMカードを取り外したい場合は、カードを押し込んで内部のスプリングを作動させると、SIMがスロットから出てきます
:::

### 使用方法

**ステップ1.** minicomをインストールします：

```bash
sudo apt update
sudo apt install minicom -y
```

**ステップ2.** 接続された4Gモジュールのシリアルコンソールに入り、ATコマンドを入力して4Gモジュールと対話できるようにします：

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**ステップ3.** Ctrl+Aを押してからEを押してローカルエコーをオンにします。

**ステップ4.** コマンド「AT」を入力してEnterを押します。応答が「OK」と表示されれば、4Gモジュールは正常に動作しています。

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/>
</div>

**ステップ5.** コマンド「ATI」を入力してモジュール情報を確認します。

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/>
</div>

4Gネットワークを使用したインターネットアクセス

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/4g2.png"/>
</div>

## RTC

reComputer SuperにはRTCインターフェースが搭載されており、システムの電源が切れていても正確な時刻を保持します。

### ハードウェア接続

以下に示すように、3V CR1225コイン電池をボード上のRTCソケットに接続します。電池の**プラス（+）**端が上向きになるようにしてください。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc.jpg"/>
</div>

### 使用方法

**ステップ1.** 上記のようにRTC電池を接続します。

**ステップ2.** reComputer Superの電源を入れます。

**ステップ3.** Ubuntuデスクトップで、右上角のドロップダウンメニューをクリックし、`Settings > Date & Time`に移動し、Ethernetケーブルでネットワークに接続して**Automatic Date & Time**を選択し、日付/時刻を自動的に取得します。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/>
</div>

:::note
Ethernet経由でインターネットに接続していない場合は、ここで日付/時刻を手動で設定できます。
:::

**ステップ4.** ターミナルウィンドウを開き、以下のコマンドを実行してハードウェアクロック時刻を確認します：

```bash
cat /sys/devices/platform/bpmp/bpmp\:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc_time1(1).png"/>
</div>

**ステップ5.** ネットワーク接続を切断してデバイスを再起動します。システム時刻は電源を失いましたが、まだ正常に機能していることがわかります。
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc_time2.png"/>
</div>

## イーサネット

reComputer Super には 10/100/1000M をサポートする 2 つの RJ45 ギガビットイーサネットがあります。ETH0 はネイティブイーサネットポートで、もう一つの ETH1 は PCIe から変換されたものです。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth.jpg"/>
</div>

各イーサネットポートには 2 つの LED（緑と黄色）があります：

- 緑色 LED：1000M/10G ネットワークに接続されている場合のみ点灯します。
- 黄色 LED：ネットワークアクティビティステータスを表示します。

イーサネット速度をテストします：

```bash
iperf3 -c 192.168.254.100 -R
```

:::info
-c `<ip address>` はサーバーの IP アドレスで、-R はリバースモードを意味します。
:::

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth_a.png"/>
</div>

```bash
iperf3 -c 192.168.254.100
```

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth_p.png"/>
</div>

## LED インジケータ

reComputer Super には電源状態とシステムアクティビティを表示する 2 つの LED インジケータ（PWR と ACT）が装備されており、ユーザーがデバイスの動作をリアルタイムで監視できます。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/led.jpg"/>
</div>

## ファン

reComputer Super には、異なる電圧と冷却ニーズに対応するため、2 種類のファンコネクタが装備されています：

- 1x 4ピンファンコネクタ（5V PWM）：低電圧、低電力の静音ファン用に設計されており、このコネクタは PWM 速度制御をサポートし、システム温度に基づいてファン速度をインテリジェントに調整して、エネルギー効率を向上させ、ノイズを削減します。

- 1x 4ピンファンコネクタ（12V PWM）：標準的な 12V PWM ファンと互換性があり、精密な速度制御もサポートしており、高性能冷却要件に最適です。

### ハードウェア接続

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/fan.jpg"/>
</div>

:::note
詳細については、[こちら](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)をご確認ください。
:::

**ファン速度を設定：**

  ```bash
  sudo -i
  echo 100 > /sys/bus/platform/devices/pwm-fan/hwmon/hwmon1/pwm1
  ```

さらに、jtop ツールを使用してファン速度を手動で設定することもできます。

## CAN

reComputer Super シリーズは CAN インターフェースを提供しており、CAN 信号は SOM から TTL/CMOS レベルで直接出力されます。これは標準的な差動信号ではないため、標準的な CAN バスに接続するには外部 CAN トランシーバーが必要です。CAN FD フレーム形式をサポートし、拡張データ長とより高いデータレートを可能にし、信頼性の高いリアルタイム通信を必要とする産業オートメーション、ロボティクス、自動車プロトタイピング、その他のアプリケーションに適しています。

### ハードウェア接続

接続線の順序（R OUT ↔ RX、D IN ↔ TX）に注意し、CAN バストランシーバーを通じて CAN_L と CAN_H に変換してください。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can1.png"/>
</div>

[reComputer Super のデータシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_super_user_manual.pdf)に従って、CAN ヒーターを対応する方法で CAN バストランシーバーに接続し、次に CAN バストランシーバーを [USB to CAN Analyzer Adapter](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html) に接続し、最後に Jetson に接続してループバック通信テストを行います。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can_port.png"/>
</div>


<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can_connect.png"/>
</div>

### 使用方法

**ステップ 1.** can0 を設定して開きます：

```bash
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 500000
sudo ip link set can0 up
```
**ステップ 2.** 通信テスト。
ターミナルを開いて信号を受信します。
```bash
candump can0
```

**ステップ 3.** 別のターミナルを開いて信号を送信します。
```bash
cansend can0 123#abcdabcd
```
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can_loop.png"/>
</div>

## 拡張ポート

拡張ポートには 40 ピン拡張ヘッダーと 12 ピン制御・UART ヘッダーが含まれており、周辺機器と通信インターフェース用の多様な接続オプションを提供します。

### 40 ピン拡張ヘッダー

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40pin3.jpg"/>
</div>

40 ピン拡張ヘッダーは、GPIO、I2C、SPI、UART などの様々な機能を提供する多用途拡張インターフェースで、センサー、周辺機器、その他のモジュールの接続に便利です。

40 ピンヘッダーの詳細は以下の通りです：

<div class="table-center">
<table style={{textAlign: 'center'}}>
<thead>
<tr>
  <th>ヘッダーピン</th>
  <th>信号</th>
  <th>BGA ピン</th>
  <th>デフォルト機能</th>
</tr>
</thead>
<tbody>
<tr><td>1</td><td>3.3V</td><td>-</td><td>メイン 3.3V 電源</td></tr>
<tr><td>2</td><td>5V</td><td>-</td><td>メイン 5V 電源</td></tr>
<tr><td>3</td><td>I2C1_SDA</td><td>PDD.02</td><td>I2C #1 データ</td></tr>
<tr><td>4</td><td>5V</td><td>-</td><td>メイン 5V 電源</td></tr>
<tr><td>5</td><td>I2C1_SCL</td><td>PDD.01</td><td>I2C #1 クロック</td></tr>
<tr><td>6</td><td>GND</td><td>-</td><td>グランド</td></tr>
<tr><td>7</td><td>GPIO09</td><td>PAC.06</td><td>汎用 I/O</td></tr>
<tr><td>8</td><td>UART1_TXD</td><td>PR.02</td><td>UART #1 送信</td></tr>
<tr><td>9</td><td>GND</td><td>-</td><td>グランド</td></tr>
<tr><td>10</td><td>UART1_RXD</td><td>PR.03</td><td>UART #1 受信</td></tr>
<tr><td>11</td><td>UART1_RTS</td><td>PR.04</td><td>UART #1 送信要求</td></tr>
<tr><td>12</td><td>I2S0_SCLK</td><td>PH.07</td><td>オーディオ I2S #0 クロック</td></tr>
<tr><td>13</td><td>SPI1_SCK</td><td>PY.00</td><td>SPI #1 クロック</td></tr>
<tr><td>14</td><td>GND</td><td>-</td><td>グランド</td></tr>
<tr><td>15</td><td>GPIO12</td><td>PN.01</td><td>汎用 I/O</td></tr>
<tr><td>16</td><td>SPI1_CS1</td><td>PY.04</td><td>SPI #1 チップセレクト #1</td></tr>
<tr><td>17</td><td>3.3V</td><td>-</td><td>メイン 3.3V 電源</td></tr>
<tr><td>18</td><td>SPI1_CS0</td><td>PY.03</td><td>SPI #1 チップセレクト #0</td></tr>
<tr><td>19</td><td>SPI0_MOSI</td><td>PZ.05</td><td>SPI #0 マスター出力/スレーブ入力</td></tr>
<tr><td>20</td><td>GND</td><td>-</td><td>グランド</td></tr>
<tr><td>21</td><td>SPI0_MISO</td><td>PZ.04</td><td>SPI #0 マスター入力/スレーブ出力</td></tr>
<tr><td>22</td><td>SPI1_MISO</td><td>PY.01</td><td>SPI #1 マスター入力/スレーブ出力</td></tr>
<tr><td>23</td><td>SPI0_SCK</td><td>PZ.03</td><td>SPI #0 クロック</td></tr>
<tr><td>24</td><td>SPI0_CS0</td><td>PZ.06</td><td>SPI #0 チップセレクト #0</td></tr>
<tr><td>25</td><td>GND</td><td>-</td><td>グランド</td></tr>
<tr><td>26</td><td>SPI0_CS1</td><td>PZ.07</td><td>SPI #0 チップセレクト #1</td></tr>
<tr><td>27</td><td>ID_I2C_SDA (I2C0_SDA)</td><td>PDD.00</td><td>I2C #0 データ</td></tr>
<tr><td>28</td><td>ID_I2C_SCL (I2C0_SCL)</td><td>PCC.07</td><td>I2C #0 クロック</td></tr>
<tr><td>29</td><td>GPIO01</td><td>PQ.05</td><td>汎用 I/O</td></tr>
<tr><td>30</td><td>GND</td><td>-</td><td>グランド</td></tr>
<tr><td>31</td><td>GPIO11</td><td>PQ.06</td><td>汎用 I/O</td></tr>
<tr><td>32</td><td>GPIO07</td><td>PG.06</td><td>汎用 I/O</td></tr>
<tr><td>33</td><td>GPIO13</td><td>PG.00</td><td>システム予約</td></tr>
<tr><td>34</td><td>GND</td><td>-</td><td>グランド</td></tr>
<tr><td>35</td><td>I2S0_LRCK (I2S0_FS)</td><td>PI.02</td><td>オーディオ I2S #0 フレーム同期</td></tr>
<tr><td>36</td><td>UART1_CTS</td><td>PR.05</td><td>UART #1 送信許可</td></tr>
<tr><td>37</td><td>SPI1_MOSI</td><td>PY.02</td><td>SPI #1 マスター出力/スレーブ入力</td></tr>
<tr><td>38</td><td>I2S0_SDIN (I2S0_DIN)</td><td>PI.01</td><td>オーディオ I2S #0 データ入力</td></tr>
<tr><td>39</td><td>GND</td><td>-</td><td>グランド</td></tr>
<tr><td>40</td><td>I2S0_SDOUT (I2S0_DOUT)</td><td>PI.00</td><td>オーディオ I2S #0 データ出力</td></tr>
</tbody>
</table>
</div>


### 使用方法

シンプルな GPIO 制御例
```bash
#install
sudo apt-get install gpiod

# Search for the corresponding number for the pin
sudo gpiofind PH.00
gpiochip0 43

#Set the pin to H, then press Enter to release.
sudo gpioset --mode=wait 0 43=1

#Set the Pin to L, then press Enter to release.
sudo gpioset --mode=wait 0 43=0

#gpio 0_119 Low level maintained for 2 seconds
sudo gpioset --mode=time -s 2 0 119=0

#input
sudo gpioget 0 43
```
**デフォルトで有効になっていない GPIO を設定したい場合は、以下の手順を参照してください：**

40 ピンヘッダーを有効にします：
```bash
  sudo /opt/nvidia/jetson-io/jetson-io.py
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_1.png"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_2.png"/>

</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_3.png"/>
</div>

保存して再起動します。

**Overlay 設定を通じて制御されていない GPIO を設定：**

**ステップ 1.** [overlay パッケージ](https://files.seeedstudio.com/wiki/overlay.zip)をダウンロードして、Jetson デバイスに展開します。
```bash
wget https://files.seeedstudio.com/wiki/overlay.zip
```
**ステップ 2.** build.sh と gpio-overlay.dts を Jetson にコピーします。

**ステップ 3.** `pio-overlay.dts` ファイルを編集し、必要なピンの pinmux 定義を含むように変更します。
:::info
詳細については、[jetson-orin-nx-and-orin-nano-series-pinmux-config](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template) を参照してください
:::

**ステップ 3.**   オーバーレイ設定を有効にします。
```bash
sudo bash ./build.sh
#The following command needs to be executed only once.
sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "seeed gpio config Overlay"
```
**ステップ 4.** デバイスを再起動して設定を有効にします。
```bash
sudo reboot
```
**ステップ 5.** これで、先ほど変更したピンを `gpioset` で制御できるようになります。
```bash
#For example px7
sudo gpioset --mode=wait 0 121=1
```


### 12ピン制御・UARTヘッダー

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/12pin2.jpg"/>
</div>

12ピン制御・UARTヘッダーは、外部デバイスの接続と管理に必要な制御信号とUART通信インターフェースを提供します。

:::note
reComputer Super のピン機能は reComputer Classic と似ています。詳細については、[こちら](https://wiki.seeedstudio.com/ja/J401_carrierboard_Hardware_Interfaces_Usage/#gpio) を参照してください。
:::

## HDMI

reComputer Super は HDMI 2.1 Type A ポートを搭載しており、7680x4320 の解像度をサポートしています。これにより、超高精細ビデオ出力が可能です。

## リソース
- [ユーザーマニュアル・データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_super_user_manual.pdf)
- [温度テストレポート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_Super_Temperature_Test_Report.pdf)
- [回路図](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Super%20J401_v1.0_SCH_PDF_250401.pdf)
- [3Dファイル](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Super%20J401.stp)
- [機械図面-reComputer Super](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Super.dxf)
- [機械図面-reComputer Super PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Super_PCBA.dxf)

## 技術サポート・製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
