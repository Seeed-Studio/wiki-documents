---
description: "reComputer Super のインターフェース：CSI、USB、M.2 Key M と E、Mini PCIe、RTC、Ethernet、LED、ファン、CAN。ピン配置、配線およびテスト済みコマンド。"
title: reComputer Super ハードウェアおよびインターフェースの使用方法
keywords:
  - reComputer Super
  - インターフェースの使用方法
  - Jetson
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super2.webp
slug: /recomputer_jetson_super_hardware_interfaces_usage
last_update:
  date: 11/06/2026
  author: Zibo
createdAt: '2025-05-29'
updatedAt: '2026-11-06'
url: https://wiki.seeedstudio.com/ja/recomputer_jetson_super_hardware_interfaces_usage/
---

<div align="center">
  <img alt="reComputer Super、本体の前面ポートが見える完成品と、横に置かれたベアキャリアボード" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super.png"/>  
</div>

reComputer Super は、4 つの MIPI CSI カメラポート、USB 3.2 と USB 2.0 Type-C、M.2 Key M と Key E、Mini PCIe、RTC、CAN、Ethernet、および 40 ピン拡張ヘッダを備えています。以下の各セクションでは、それぞれ 1 つのインターフェースの配線方法と、動作を確認するためのコマンドまたはチェック方法を示します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## CSI カメラ

reComputer Super は、画像および動画キャプチャ用に標準的な 4 つの MIPI CSI カメラをサポートします。以下の手順に従ってカメラを接続し、テストしてください。

### ハードウェア接続

<div align="center">
  <img alt="reComputer Super エンクロージャ内部の CSI スロットに接続された MIPI CSI カメラ用フラットケーブル" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/sci.jpg"/>  
</div>

**Step1.** reComputer Super の背面カバーを開けます。

**Step2.** MIPI CSI カメラを reComputer Super ボード上の適切な CSI ポートに接続します。

**Step3.** カメラを固定し、接続が確実であることを確認します。

### 使用手順

:::note
CSI カメラを使用する前に、必要なカメラドライバを含む JetPack バージョンがインストールされていることを確認してください。
:::

:::info
**対象バージョン:** 以下のコマンドは、JetPack 6.x におけるカメラおよび GPIO ツールの構成に基づいています。NVIDIA は後のリリースでカメラスタックの一部を変更しているため、JetPack 7.2 では実行前に `nvgstcapture-1.0` がインストールされていることを確認してください。バイナリが存在しない場合は、代わりに `gst-launch-1.0` と `nvarguscamerasrc` を使用してセンサを駆動してください。
:::

**Step1.** カメラがシステムに認識されているか確認します：

```bash
ls /dev/video*
```

**Step2.** （任意）ビデオユーティリティが未インストールの場合は、次のコマンドでインストールします：

```bash
sudo apt install v4l-utils
```

**Step3.** 次のコマンドを使用してカメラを起動し、ビデオストリームを表示します：

```bash
nvgstcapture-1.0 --sensor-id=0
```

:::info
複数のカメラを使用している場合は、`--sensor-id` を適切な値に変更してください。
:::

<div align="center">
  <img alt="reComputer Super デスクトップ上に表示された CSI カメラのプレビューウィンドウ" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/csi.png"/>
</div>

---

## USB

reComputer Super には合計 4 つの USB 3.2 ポートと、デバッグ用の USB 2.0 Type-C ポートが 1 つ搭載されています。

### USB 3.2 ポート

Jetson のターミナルで `watch -n 1 lsusb -tv` を入力することで、USB ポートを監視できます。USB デバイスが接続されると、そのポートに関する詳細情報がここに表示されます。

<div align="center">
  <img alt="reComputer Super に接続された USB デバイスを一覧表示する watch lsusb の出力" width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/usb_lsusb.png"/>
</div>

さらに、`dd` コマンドを使用して USB ストレージデバイスの読み書き速度をテストすることもできます：

- **読み取り:**

  ```bash
  sudo dd if=/dev/sda of=/dev/null bs=1024M count=5 iflag=direct
  ```

 <div align="center">
  <img alt="USB ドライブからの読み取り速度を測定する dd 読み取りテストの出力" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/usb_read.png"/>
</div>

- **書き込み:**

  ```bash
  sudo dd if=/dev/zero of=/dev/sda bs=1024M count=5 conv=fdatasync
  ```

<div align="center">
  <img alt="USB ドライブへの書き込み速度を測定する dd 書き込みテストの出力" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/usb_w.png"/>
</div>

### USB 2.0 Type-C ポート

このシリアルポートを USB Type-C データケーブル経由で使用することで、PC 側で入出力のデバッグ情報をモニタリングできます。

**Step1.** スイッチをデバッグモードに切り替えます。

<div align="center">
  <img alt="reComputer Super 上のデバッグ／フラッシュモード切り替えスイッチがデバッグモードに設定されている様子" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/debug.jpg"/>
</div>

**Step2.** USB データケーブルで PC と接続し、PC に [CP210X Driver](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads) をダウンロードします。

<div align="center">
  <img alt="Silicon Labs CP210x VCP ドライバのダウンロードページ" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/download_driver.png"/>
</div>

**Step3.** USB データケーブルで PC と接続し、ダウンロードしたファイルを展開して、PC にドライバをインストールします。

<div align="center">
  <img alt="展開したドライバフォルダ内で選択された CP210xVCPInstaller_x64.exe" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/install_driver.png"/>
</div>

**Step4.** Windows PC でデバイスマネージャーを開き、reComputer Super に割り当てられた COM ポート番号を確認します。"Ports (COM & LPT)" の下に "Silicon Labs CP210x USB to UART Bridge (COMX)" と表示され、X が COM ポート番号になります。

<div align="center">
  <img alt="デバイスマネージャーで Ports の下に表示された CP210x の COM ポート" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/debug1.png"/>
</div>

**Step5.** シリアルポートツール（ここでは例として MobaXterm ツールを使用）を開き、新しいセッションを作成します。

<div align="center">
  <img alt="最近のセッション一覧に COM3 を含む MobaXterm のメインウィンドウ" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png"/>
</div>

**Step6.** Serial ツールを選択します。

<div align="center">
  <img alt="Serial がハイライトされた MobaXterm のセッションタイプ選択画面" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png"/>
</div>

**Step7.** 対応するシリアルポートを選択し、ボーレートを 115200 に設定して "OK" をクリックします。

<div align="center">
  <img alt="COM ポートと 115200 のボーレートが選択された MobaXterm のシリアル設定画面" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/3.png"/>
</div>

**Step8.** ユーザー名とパスワードを入力して reComputer Super にログインします。

<div align="center">
  <img alt="デバッグポート経由のシリアルコンソールから reComputer Super にログインしている画面" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/4.png"/>
</div>

## M.2 Key M

M.2 Key M は、高速ソリッドステートドライブ（SSD）向けに設計されたインターフェースであり、超高速なデータ転送速度を提供し、高性能アプリケーションに最適です。

### 対応 SSD は以下のとおりです

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-6265.html)

### ハードウェア接続

<div align="center">
  <img alt="reComputer Super の M.2 Key M スロットに装着された NVMe SSD" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/ssd.jpg"/>  
</div>

### 使用手順

Jetson デバイスでターミナルを開き、以下のコマンドを入力して SSD の読み書き速度をテストします。

```bash
#create a blank test file first
sudo touch /ssd/test
dd if=/dev/zero of=/home/seeed/ssd/test bs=1024M count=5 conv=fdatasync
```

<div align="center">
  <img alt="NVMe SSD のスループットを測定する dd 書き込みテストのターミナル出力" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/ssd_w.png"/>
</div>

:::danger
テスト完了後は、キャッシュファイルを削除するために `sudo rm /home/seeed/ssd/test` コマンドを実行してください。
:::

## M.2 Key E

M.2 Key E インターフェースは、Wi-Fi や Bluetooth などの無線通信モジュール向けに設計されたコンパクトで高速なデータインターフェースであり、無線機能を拡張するために使用されます。

### ハードウェア接続

<div align="center">
  <img alt="アンテナリードが接続された Wi-Fi モジュールが M.2 Key E スロットに装着されている様子" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/wifi_c.png"/>
</div>

### 使用手順

Wi-Fi モジュールを取り付けてデバイスの電源を入れた後、デバイスの Wi-Fi および Bluetooth 設定を構成できます。

<div align="center">
  <img alt="無線モジュールを取り付けた後、Wi-Fi と Bluetooth のインジケータが表示されている Ubuntu デスクトップ" width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-bluetooth-test.gif"/>
</div>

もちろん、以下のコマンドを使用してデバイスの動作状態を確認することもできます。

```bash
ifconfig
```

<div align="center">
  <img alt="reComputer Super 上の無線インターフェースを一覧表示する ifconfig の出力" width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/wifi_ifconfig.png"/>
</div>

**Bluetooth:**

  ```bash
  bluetoothctl
  scan on
  ```

<div align="center">
  <img alt="reComputer Super 上で bluetoothctl scan on によりデバイス探索を開始している様子" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/bluetooth.png"/>
</div>

## Mini PCIe

reComputer Super には、LTE 4G モジュール用の Mini PCIe が搭載されています。

### ハードウェア接続

<div align="center">
  <img alt="Mini PCIe スロットに装着され、3 本のアンテナリードが接続された Quectel EC25 4G モジュール" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/mini_p.png"/>
</div>

:::note
SIM カードを取り外したい場合は、内部のバネに当たるまでカードを押し込むと、SIM がスロットから押し出されます。
:::

### 使用手順

**Step1.** minicom をインストールします：

```bash
sudo apt update
sudo apt install minicom -y
```

**ステップ2.** 接続されている 4G モジュールのシリアルコンソールに入ります。これにより AT コマンドを入力して 4G モジュールと対話できるようになります。

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**ステップ3.** Ctrl+A を押してから E を押し、ローカルエコーを有効にします。

**ステップ4.** コマンド "AT" を入力して Enter を押します。"OK" という応答が表示されれば、4G モジュールは正常に動作しています。

<div align="center">
  <img alt="AT コマンドを 4G モジュールに送信した後にシリアルターミナルが OK を返している様子" width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/>
</div>

**ステップ5.** コマンド "ATI" を入力して、モジュール情報を確認します。

<div align="center">
  <img alt="ATI コマンドの後にシリアルターミナルがモジュール情報を返している様子" width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/>
</div>

4G ネットワークを使用したインターネットアクセス

<div align="center">
  <img alt="4G 接続がインターネットトラフィックを運んでいることを示すネットワーク設定画面" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/4g2.png"/>
</div>

## RTC

reComputer Super には RTC インターフェースが搭載されており、システムの電源が切れているときでも正確な時刻を保持できます。

### ハードウェア接続

下図のように、3V CR1225 コイン電池をボード上の RTC ソケットに接続します。電池の**プラス (+)** 側が上向きになっていることを確認してください。

<div align="center">
  <img alt="reComputer Super の RTC ソケットに取り付けられた CR1225 コイン電池" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc.jpg"/>
</div>

### 使用手順

**ステップ1.** 上述のように RTC バッテリを接続します。

**ステップ2.** reComputer Super の電源を入れます。

**ステップ3.** Ubuntu デスクトップで右上のドロップダウンメニューをクリックし、`Settings > Date & Time` に移動して、Ethernet ケーブルでネットワークに接続し、**Automatic Date & Time** を選択して日付と時刻を自動取得します。

<div align="center">
  <img alt="自動時刻設定を有効にするために使用される Ubuntu の Date and Time 設定ページ" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/>
</div>

:::note
Ethernet 経由でインターネットに接続していない場合は、ここで日付と時刻を手動で設定できます。
:::

**ステップ4.** ターミナルウィンドウを開き、以下のコマンドを実行してハードウェアクロックの時刻を確認します。

```bash
cat /sys/devices/platform/bpmp/bpmp\:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```

<div align="center">
  <img alt="nvvrs-pseq-rtc デバイスから RTC 時刻を読み取っているターミナル" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc_time1(1).png"/>
</div>

**ステップ5.** ネットワーク接続を切断してデバイスを再起動します。システムは電源が失われても時刻が保持され、正常に動作していることが分かります。
<div align="center">
  <img alt="ネットワーク切断後も RTC によって保持されているシステム時刻を示すターミナル" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc_time2.png"/>
</div>

## Ethernet

reComputer Super には 10/100/1000M に対応した RJ45 ギガビット Ethernet ポートが 2 つ搭載されています。ETH0 はネイティブ Ethernet ポートで、もう一方の ETH1 は PCIe から変換されたポートです。

<div align="center">
  <img alt="reComputer Super 上の ETH0 と ETH1 とラベル付けされた 2 つの RJ45 ギガビット Ethernet ポート" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth.jpg"/>
</div>

各 Ethernet ポートには 2 つの LED（緑と黄）が搭載されています。

- 緑色 LED: 1000M/10G ネットワークに接続されているときのみ点灯します。
- 黄色 LED: ネットワークアクティビティの状態を示します。

Ethernet の速度をテストします。

```bash
iperf3 -c 192.168.254.100 -R
```

:::info
-c `<ip address>` はサーバーの IP アドレスを表し、-R はリバースモードを意味します。
:::

<div align="center">
  <img alt="reComputer Super 上で 942 Mbits/sec を受信している iperf3 リバースモードクライアント" width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth_a.png"/>
</div>

```bash
iperf3 -c 192.168.254.100
```

<div align="center">
  <img alt="reComputer Super 上でギガビット Ethernet スループットを計測している iperf3 クライアント出力" width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth_p.png"/>
</div>

## LED インジケータ

reComputer Super には 2 つの LED インジケータ（PWR と ACT）が搭載されており、電源状態とシステムアクティビティを表示して、ユーザーがデバイスの動作をリアルタイムで監視できるようになっています。

<div align="center">
  <img alt="reComputer Super 上の PWR と ACT の LED インジケータ" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/led.jpg"/>
</div>

## ファン

reComputer Super には、さまざまな電圧および冷却ニーズに対応する 2 種類のファンコネクタが搭載されています。

- 1x 4 ピンファンコネクタ（5V PWM）：低電圧・低消費電力の静音ファン向けに設計されており、PWM による回転数制御をサポートします。システム温度に応じてファン速度をインテリジェントに調整することで、省エネルギーと騒音低減を実現します。

- 1x 4 ピンファンコネクタ（12V PWM）：標準的な 12V PWM ファンに対応しており、こちらも精密な回転数制御をサポートするため、高性能な冷却が必要な用途に最適です。

### ハードウェア接続

<div align="center">
  <img alt="reComputer Super ボード上の 12V および 5V PWM ファンコネクタ" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/fan.jpg"/>
</div>

:::note
詳細については、[こちら](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)を参照してください。
:::

**ファン速度の設定:**

  ```bash
  sudo -i
  echo 100 > /sys/bus/platform/devices/pwm-fan/hwmon/hwmon1/pwm1
  ```

さらに、jtop ツールを使用してファン速度を手動で設定することもできます。

## CAN

reComputer Super シリーズは CAN インターフェースを備えており、CAN 信号は SOM から TTL/CMOS レベルで直接出力されます。これは標準的な差動信号ではないため、標準的な CAN バスに接続するには外部 CAN トランシーバが必要です。また、CAN FD フレーム形式をサポートしており、データ長の拡張とより高いデータレートが可能なため、産業オートメーション、ロボット工学、自動車プロトタイピングなど、信頼性の高いリアルタイム通信を必要とするアプリケーションに適しています。

### ハードウェア接続

接続するラインの順序（R OUT ↔ RX、D IN ↔ TX）に注意し、その後 CAN バストランシーバを介して CAN_L と CAN_H に変換してください。

<div align="center">
  <img alt="reComputer Super 上で CAN バストランシーバに配線された CAN TX および RX ピン" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can1.png"/>
</div>

[Datasheet of reComputer Super](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_super_user_manual.pdf) に従って、CAN ヘッダを対応する方法で CAN バストランシーバに接続し、その後 CAN バストランシーバを [USB to CAN Analyzer Adapter](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html) に接続し、最後に Jetson に接続してループバック通信テストを行います。

<div align="center">
  <img alt="TX、RX、GND、3V3 ピンを一覧した CAN バスヘッダのデータシート表" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can_port.png"/>
</div>


<div align="center">
  <img alt="reComputer Super 上の CAN ヘッダに配線された USB-to-CAN アナライザ" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can_connect.png"/>
</div>

### 使用手順

**ステップ1.** can0 を設定してオープンします。

```bash
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 500000
sudo ip link set can0 up
```
**ステップ2.** 通信テストを行います。
信号を受信するためのターミナルを開きます。
```bash
candump can0
```

**ステップ3.** 別のターミナルを開き、信号を送信します。
```bash
cansend can0 123#abcdabcd
```
<div align="center">
  <img alt="can0 上でループバックされた CAN フレームを示す cansend と candump の出力" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can_loop.png"/>
</div>

## 拡張ポート

拡張ポートには 40 ピン拡張ヘッダと 12 ピン制御および UART ヘッダが含まれており、周辺機器や通信インターフェースに対して多用途な接続オプションを提供します。

### 40 ピン拡張ヘッダ

<div align="center">
  <img alt="reComputer Super キャリアボード上の 40 ピン拡張ヘッダ" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40pin3.jpg"/>
</div>

40 ピン拡張ヘッダは、GPIO、I2C、SPI、UART などのさまざまな機能を提供する多目的な拡張インターフェースであり、センサや周辺機器、その他のモジュールを接続するのに便利です。

40 ピンヘッダの詳細は以下のとおりです。

<div class="table-center">
<table style={{textAlign: 'center'}}>
<thead>
<tr>
  <th>ヘッダピン</th>
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
<tr><td>6</td><td>GND</td><td>-</td><td>グラウンド</td></tr>
<tr><td>7</td><td>GPIO09</td><td>PAC.06</td><td>汎用 I/O</td></tr>
<tr><td>8</td><td>UART1_TXD</td><td>PR.02</td><td>UART #1 送信</td></tr>
<tr><td>9</td><td>GND</td><td>-</td><td>グラウンド</td></tr>
<tr><td>10</td><td>UART1_RXD</td><td>PR.03</td><td>UART #1 受信</td></tr>
<tr><td>11</td><td>UART1_RTS</td><td>PR.04</td><td>UART #1 送信要求</td></tr>
<tr><td>12</td><td>I2S0_SCLK</td><td>PH.07</td><td>オーディオ I2S #0 クロック</td></tr>
<tr><td>13</td><td>SPI1_SCK</td><td>PY.00</td><td>SPI #1 クロック</td></tr>
<tr><td>14</td><td>GND</td><td>-</td><td>グラウンド</td></tr>
<tr><td>15</td><td>GPIO12</td><td>PN.01</td><td>汎用入出力</td></tr>
<tr><td>16</td><td>SPI1_CS1</td><td>PY.04</td><td>SPI #1 チップセレクト #1</td></tr>
<tr><td>17</td><td>3.3V</td><td>-</td><td>メイン 3.3V 電源</td></tr>
<tr><td>18</td><td>SPI1_CS0</td><td>PY.03</td><td>SPI #1 チップセレクト #0</td></tr>
<tr><td>19</td><td>SPI0_MOSI</td><td>PZ.05</td><td>SPI #0 マスター出力 / スレーブ入力</td></tr>
<tr><td>20</td><td>GND</td><td>-</td><td>グラウンド</td></tr>
<tr><td>21</td><td>SPI0_MISO</td><td>PZ.04</td><td>SPI #0 マスター入力 / スレーブ出力</td></tr>
<tr><td>22</td><td>SPI1_MISO</td><td>PY.01</td><td>SPI #1 マスター入力 / スレーブ出力</td></tr>
<tr><td>23</td><td>SPI0_SCK</td><td>PZ.03</td><td>SPI #0 クロック</td></tr>
<tr><td>24</td><td>SPI0_CS0</td><td>PZ.06</td><td>SPI #0 チップセレクト #0</td></tr>
<tr><td>25</td><td>GND</td><td>-</td><td>グラウンド</td></tr>
<tr><td>26</td><td>SPI0_CS1</td><td>PZ.07</td><td>SPI #0 チップセレクト #1</td></tr>
<tr><td>27</td><td>ID_I2C_SDA (I2C0_SDA)</td><td>PDD.00</td><td>I2C #0 データ</td></tr>
<tr><td>28</td><td>ID_I2C_SCL (I2C0_SCL)</td><td>PCC.07</td><td>I2C #0 クロック</td></tr>
<tr><td>29</td><td>GPIO01</td><td>PQ.05</td><td>汎用入出力</td></tr>
<tr><td>30</td><td>GND</td><td>-</td><td>グラウンド</td></tr>
<tr><td>31</td><td>GPIO11</td><td>PQ.06</td><td>汎用入出力</td></tr>
<tr><td>32</td><td>GPIO07</td><td>PG.06</td><td>汎用入出力</td></tr>
<tr><td>33</td><td>GPIO13</td><td>PG.00</td><td>システム予約</td></tr>
<tr><td>34</td><td>GND</td><td>-</td><td>グラウンド</td></tr>
<tr><td>35</td><td>I2S0_LRCK (I2S0_FS)</td><td>PI.02</td><td>オーディオ I2S #0 フレーム同期</td></tr>
<tr><td>36</td><td>UART1_CTS</td><td>PR.05</td><td>UART #1 送信許可 (CTS)</td></tr>
<tr><td>37</td><td>SPI1_MOSI</td><td>PY.02</td><td>SPI #1 マスター出力 / スレーブ入力</td></tr>
<tr><td>38</td><td>I2S0_SDIN (I2S0_DIN)</td><td>PI.01</td><td>オーディオ I2S #0 データ入力</td></tr>
<tr><td>39</td><td>GND</td><td>-</td><td>グラウンド</td></tr>
<tr><td>40</td><td>I2S0_SDOUT (I2S0_DOUT)</td><td>PI.00</td><td>オーディオ I2S #0 データ出力</td></tr>
</tbody>
</table>
</div>


### 使用手順

シンプルな GPIO 制御の例
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
**デフォルトで有効になっていない GPIO を設定したい場合は、次の手順を参照してください。**

40 ピンヘッダを有効化：
```bash
  sudo /opt/nvidia/jetson-io/jetson-io.py
```

<div align="center">
  <img alt="40 ピンヘッダの構成オプションを一覧表示する jetson-io.py メインメニュー" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_1.png"/>
</div>

<div align="center">
  <img alt="構成可能なオプション付きで 40 ピンヘッダのピンマップを表示する Jetson Expansion Header Tool" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_2.png"/>

</div>

<div align="center">
  <img alt="uarta.cts と uarta.rts が切り替えられた 40 ピンヘッダの機能選択リスト" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_3.png"/>
</div>

保存して再起動します。

**オーバーレイ設定を通して未制御の GPIO を構成します：**

**ステップ 1.** [overlay package](https://files.seeedstudio.com/wiki/overlay.zip) をダウンロードして Jetson デバイスに展開します。
```bash
wget https://files.seeedstudio.com/wiki/overlay.zip
```
**ステップ 2.** build.sh と gpio-overlay.dts を Jetson にコピーします。

**ステップ 3.** `pio-overlay.dts` ファイルを編集し、必要なピンの pinmux 定義を含めるように修正します。
:::info
詳細については、[jetson-orin-nx-and-orin-nano-series-pinmux-config](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template) を参照してください。
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


### 12 ピン制御および UART ヘッダ

<div align="center">
  <img alt="12 ピンのボタンおよび LED ヘッダと、そのピンリスト：PC_LED、UART2、AC OK、SYS_RESET、FORCE_RECOVERY、PWR_BTN" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/12pin2.jpg"/>
</div>

12 ピン制御および UART ヘッダは、外部デバイスの接続と管理のための重要な制御信号と UART 通信インターフェースを提供します。

:::note
reComputer Super のピン機能は reComputer Classic のものと類似しています。より詳細な情報については、[こちら](https://wiki.seeedstudio.com/ja/J401_carrierboard_Hardware_Interfaces_Usage/#gpio) を参照してください。
:::

## HDMI

reComputer Super には HDMI 2.1 Type A ポートが搭載されており、7680x4320 の解像度をサポートします。これにより、超高精細なビデオ出力が可能です。

## FAQ

**CSI ポートは同時に何台のカメラを駆動できますか？**
4 台です。このボードには 4 つの MIPI CSI カメラポートがあり、このページのテストでは `nvgstcapture` を使用してそのうち 1 台をプレビューし、複数のカメラが接続されている場合は `--sensor-id` を変更します。

**なぜ ETH0 だけがネイティブインターフェースとして報告されるのですか？**
ETH1 は PCIe から変換されているため、2 つのポートは同じコントローラを共有していません。どちらも 10/100/1000 Mbps でネゴシエーションしますが、モジュールから直接出ているのは ETH0 のみです。

**時刻を保持するために RTC 用のバッテリは必要ですか？**
はい。RTC ソケットに 3V CR1225 コイン電池をプラス面を上にして装着してください。そうしないと、ボードの電源が切れたときに時計が時刻を失います。

**4G モジュールは AT コマンドに応答しますが、インターネットに接続できません。**
`OK` 応答は、モジュールがシリアルポート上で動作していることを示すだけです。ネットワーク設定からデータ接続を有効にし、このページの 4G 手順で示すように、そのインターフェースからトラフィックが出ていることを確認してください。

**40 ピンヘッダと 12 ピンヘッダの違いは何ですか？**
40 ピンヘッダには標準的な Jetson の GPIO セットがあり、`jetson-io.py` を通じて構成されます。12 ピンヘッダは周辺機器向けの別個の制御および UART ヘッダであり、40 ピンマップの一部ではありません。

## 関連リソース

- [reComputer Super を使い始める](/ja/recomputer_jetson_super_getting_started/)
- [reComputer Super と Classic の比較：エッジ推論における AI パフォーマンス](/ja/recomputer_jetson_super_performance/)
- [reComputer アンテナの取り付け](/ja/recomputer_antenna_installation/)
- [reComputer Super J4012 製品ページ](https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html)
- [wiki-documents リポジトリとディスカッション](https://github.com/Seeed-Studio/wiki-documents/discussions/69)

## リソース
- [ユーザーマニュアル & データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_super_user_manual.pdf)
- [温度試験レポート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_Super_Temperature_Test_Report.pdf)
- [回路図](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Super%20J401_v1.0_SCH_PDF_250401.pdf)
- [3D ファイル](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Super%20J401.stp)
- [メカニカルドキュメント - reComputer Super](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Super.dxf)
- [メカニカルドキュメント - reComputer Super PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Super_PCBA.dxf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
