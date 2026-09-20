---
description: reComputer Rugged J401 のハードウェアおよびインターフェースの使用方法
title: reComputer Rugged J401 ハードウェアおよびインターフェースの使用方法
keywords:
  - reComputer Rugged
  - reComputer Rugged J401
  - IP66
  - Jetson
  - hardware interface
image: https://files.seeedstudio.com/wiki/rugged_J401/interface/1.png
slug: /ai_robotics_recomputer_rugged_j401_hardware_and_interface_usage
sku: 100046979,100002634
last_update:
  date: 09/18/2026
  author: Dongxu Jin
createdAt: '2026-08-14'
updatedAt: '2026-09-18'
url: https://wiki.seeedstudio.com/ja/ai_robotics_recomputer_rugged_j401_hardware_and_interface_usage/
---

# reComputer Rugged J401 ハードウェアおよびインターフェースの使用方法

この wiki では、reComputer Rugged J40 のさまざまなハードウェアおよびインターフェースを紹介し、それらをどのように活用してプロジェクトのアイデアを拡張できるかを説明します。reComputer Rugged J40 上のほとんどのインターフェースは M12 コネクタを採用しており、IP66 等級の防水・防塵性能と優れた耐振動性を備えています。これにより、船舶への搭載や港湾監視システムなど、過酷な屋外環境での長期運用に適しています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/1.png" alt="Image" width={800} height="auto" /></p>

## ハードウェア概要

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged_J401/hardware_veiw1.png"/>
  <p>側面図 1</p>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged_J401/hardware_veiw2.png"/>
  <p>側面図 2</p>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged_J401/hardware_veiw3.png"/>
  <p>底面図</p>
</div>

## キャリアボード仕様

<table>
  <thead>
    <tr>
      <th colSpan={2}>項目</th>
      <th>仕様</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={8}>I/O</td>
      <td>Ethernet</td>
      <td>1× M12 GbE + 4× M12 GbE PSE（IEEE 802.3af、15 W、10/100/1000 Mbps）</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>4× USB 3.2 Type-A（防水コネクタ）+ 1× USB 3.0 Type-C（デバイス / フラッシュ）+ 1× USB 2.0 Type-C（デバッグ）</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td>1× HDMI 2.1（防水キャップ付き）</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>2× CAN-FD（アイソレート）M12 A コード経由</td>
    </tr>
    <tr>
      <td>シリアル</td>
      <td>1× RS-232/422/485 M12 A コード経由</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td>2× DI + 2× DO M12 A コード経由</td>
    </tr>
    <tr>
      <td>SIM</td>
      <td>1× Nano-SIM カードスロット</td>
    </tr>
    <tr>
      <td>アンテナ</td>
      <td>4× SMA 防水アンテナコネクタ</td>
    </tr>
    <tr>
      <td>ストレージ</td>
      <td>M.2 Key M</td>
      <td>1× M.2 Key M、NVMe 2280 SSD 用（128 GB SSD 付属）</td>
    </tr>
    <tr>
      <td rowSpan={2}>拡張</td>
      <td>M.2 Key E</td>
      <td>1× M.2 Key E、M.2 2230 Wi-Fi モジュール用（Wi-Fi 6 モジュール付属）</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td>1× M.2 Key B、5G モジュール用</td>
    </tr>
    <tr>
      <td rowSpan={4}>オンボード</td>
      <td>SPI / I2C</td>
      <td>1× SPI、1× I2C（筐体内ピンヘッダ）</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>RTC ソケット、2 ピンコネクタ</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>1× PWR LED（緑）、1× SSD LED（緑）</td>
    </tr>
    <tr>
      <td>ボタン</td>
      <td>1× Recovery ボタン、1× RST ボタン</td>
    </tr>
    <tr>
      <td>電源</td>
      <td>入力</td>
      <td>M12 A コード DC 19–48 V</td>
    </tr>
  </tbody>
</table>

## 電源

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/2.jpg" alt="Image" width={800} height="auto" /></p>

reComputer Rugged J401 は M12 A コード DC 19〜48V 電源インターフェースを備えており、広い電圧入力範囲に対応しているため、さまざまな電源環境で使用できます。インターフェースの定義は以下の表のとおりです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/3.png" alt="Image" width={400} height="auto" /></p>

|Pin|用途|タイプ|線色|
|---|---|---|---|
|1|DC 電源入力|電源|Brown|
|2|||White|
|3|グラウンド|グラウンド|Blue|
|4|||Black|

## ディスプレイ

防水サイドカバーを固定している 2 本のネジを外して開くと、高品質なディスプレイ出力を提供する HDMI 2.1 ポートにアクセスできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/4.jpg" alt="Image" width={800} height="auto" /></p>

## SSD 用 M.2 Key M および Wi-Fi / Bluetooth 用 M.2 Key E

reComputer Rugged J401 には M.2 Key E インターフェースが搭載されており、これを通じてデバイスの Bluetooth および Wi-Fi 機能を拡張できます。Intel Dual Band RTL8822CE Wireless NIC の使用を推奨します。

M.2 Key M は、高速ソリッドステートドライブ（SSD）向けに設計されたインターフェースであり、超高速なデータ転送速度を提供し、高性能アプリケーションに最適です。

インターフェースの位置は以下の図のとおりです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/5.jpg" alt="Image" width={800} height="auto" /></p>

### **使用手順**

付属の SSD を取り外して新しい SSD を取り付ける場合は、お使いの SSD が次の 2 つの条件を満たしていることを確認する必要があります。

- **M.2 Key M スロット（x4 PCIe Gen3）** インターフェースをサポートしていること。

- **2242** サイズ仕様に準拠していること。



Jetson デバイスでターミナルを開き、次のコマンドを入力して SSD の読み書き速度をテストします。

```Bash
sudo dd if=/dev/zero of=tempfile bs=1M count=1024 conv=fdatasync
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/6.png" alt="Image" width={800} height="auto" /></p>

テスト完了後は、`sudo rm tempfile` コマンドを実行してキャッシュファイルを削除してください。

Wi-Fi モジュールを取り付けてデバイスの電源を入れたら、デバイスの Wi-Fi および Bluetooth 設定を行うことができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/7.gif" alt="Image" width={800} height="auto" /></p>

もちろん、次のコマンドを使用してデバイスの動作状態を確認することもできます。

```Bash
ifconfig
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/8.png" alt="Image" width={800} height="auto" /></p>

```Bash
bluetoothctl
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/9.png" alt="Image" width={800} height="auto" /></p>

## 4G/5G モジュール用 M.2 Key B

M.2 Key B スロットは、Nano SIM カードホルダー付きの 4G/5G セルラーモジュールをサポートします。

### ハードウェア接続

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/10.png" alt="Image" width={800} height="auto" /></p>

### 使用手順

**ステップ 1.** ハードウェア認識の確認

```Bash
lsusb 
```

このコマンドは、システムに接続されているすべての USB デバイスの一覧を、メーカー（ID）、種類、その他の情報とともに表示します。たとえば、出力に Quectel Wireless Solutions Co., Ltd. EM12-G というデバイスが表示されていれば、5G モジュールが存在していることを示します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/11.png" alt="Image" width={800} height="auto" /></p>

**ステップ 2.** ドライバのロード確認

5G モジュールに必要な option ドライバがロードされていることを確認することが重要です。lsmod コマンドを使用して確認できます。

```Bash
lsmod | grep option 
```

option ドライバが正常にロードされていれば、出力にドライバに関する関連情報が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/12.png" alt="Image" width={800} height="auto" /></p>

**ステップ 3.** ModemManager の設定

ModemManager はモデムデバイスを管理するためのツールであり、インストールして再起動する必要があります。

```Bash
sudo apt install modemmanager 
sudo systemctl restart ModemManager 
```

apt install コマンドは ModemManager パッケージのインストールに使用され、systemctl restart は ModemManager サービスを再起動して新しい設定が有効になるようにします。

**ステップ 4.** モジュール認識の確認

mmcli -L コマンドを使用して、ModemManager が 5G モジュールを正しく認識できているかを確認できます。

```Bash
mmcli -L 
```

5G モジュールが認識されている場合、/org/freedesktop/ModemManager1/Modem/0 のような出力が表示され、検出されたモデムデバイスへのパスを示します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/13.png" alt="Image" width={800} height="auto" /></p>

**ステップ 5.** APN の設定

APN（Access Point Name）は、モバイルデバイスをネットワークに接続するために重要な設定です。ここでは nmcli コマンドを使用してベアラープロファイルを作成します。China Mobile を例に、次のコマンドで設定ファイルを作成できます。

```Bash
sudo nmcli con add type gsm ifname "*" apn "CMNET" ipv4.method  auto 
```

このコマンドは、新しい GSM（Global System for Mobile Communications）タイプの接続を追加し、APN を「CMNET」と指定し、IPv4 の自動設定を使用します。

**ステップ 6.** 接続の有効化

ベアラープロファイルを作成したら、接続を有効化する必要があります。

```Bash
sudo nmcli con up "gsm" 
```

このコマンドは GSM 接続を有効化し、成功すると確認メッセージが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/14.png" alt="Image" width={800} height="auto" /></p>

**ステップ 7.** モジュール認識の再確認

APN を設定した後もモジュールが認識されていることを確認するために、再度 mmcli -L コマンドを実行します。

```Bash
mmcli -L 
```

**ステップ 8.** モジュールステータスの確認

最後に、mmcli -m 0 コマンドを使用して、IP 割り当て、キャリア、ネットワーク接続状態など、モジュールに関する詳細情報を確認できます。

```Bash
mmcli -m 0 
```

このコマンドは、5G モジュールのメーカー、モデル、サポートおよび現在使用中のネットワーク技術、デバイスステータス、接続中のネットワークオペレーターなど、包括的な詳細情報を提供します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/15.png" alt="Image" width={800} height="auto" /></p>

## Ethernet

reComputer Rugged J401 は、1× 標準 Gigabit Ethernet（10/100/1000M）RJ45 ポート（J35）と 4× Gigabit PSE（Power Sourcing Equipment）RJ45 ポート（J36–J39）を提供します。標準 Gigabit ポートは一般的なネットワーク接続に使用されます。PSE ポートは IEEE 802.3af/at 規格をサポートしており、IP カメラや無線アクセスポイントなど接続されたデバイスに対して Ethernet 経由で電力を供給でき、ポートあたり最大 15.4W（802.3af）を出力できます。これにより、産業用途、AMR、および屋外エッジコンピューティング用途に最適で、別途電源配線を行う必要がありません。すべての Gigabit ポートは Jetson Orin モジュール内の PCIe コントローラから供給されており、10/100/1000M のオートネゴシエーションをサポートします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/16.jpg" alt="Image" width={800} height="auto" /></p>

## USB

reComputer Rugged J401 は、4× USB 3.2 Type-A ポート（内部 USB 3.1 Gen1 ハブ経由で提供され、高速周辺機器、ストレージデバイス、カメラなどの接続に最大 5Gbps のデータレートをサポート）と、1× USB 2.0 Type-C デバッグポート（シリアルコンソールとして機能し、システムログへのアクセス、ブート問題のデバッグ、ファームウェア更新の実行に使用）を提供します。

### USB-A 速度テスト

USB デバイスの速度をテストするスクリプトを作成します：

```Bash
vim test_usb.sh
```

次の内容を貼り付けます：

```Bash
cat <<'EOF' | sudo tee test_usb.sh >/dev/null
#!/bin/bash
set -e

MOUNT_POINT="$1"
TEST_FILE="$MOUNT_POINT/test_usb_speed.bin"

if [ -z "$MOUNT_POINT" ]; then
  echo "Usage: $0 <mount_point>"
  echo "Example: $0 /media/seeed/USB"
  exit 1
fi

if [ ! -d "$MOUNT_POINT" ]; then
  echo "Error: $MOUNT_POINT is not a directory"
  exit 1
fi

echo "Write test..."
dd if=/dev/zero of="$TEST_FILE" bs=1M count=2048 conv=fdatasync status=progress

echo
echo "Drop caches..."
sync
echo 3 | sudo tee /proc/sys/vm/drop_caches >/dev/null

echo "Read test..."
dd if="$TEST_FILE" of=/dev/null bs=1M count=2048 status=progress

echo
echo "Cleaning up..."
rm -f "$TEST_FILE"
EOF
```

Esc キーを押して挿入モードを終了し、`:w` と入力して Enter を押してスクリプトを保存し、その後プロセスを終了します。

スクリプトに実行権限を付与してテストします：

```Bash
sudo chmod +x test_usb.sh
./test_usb.sh /mnt          # If your USB drive is mounted at /mnt
# Or
./test_usb.sh /media/usb    # If your USB drive is mounted at /media/usb
# Or
./test_usb.sh /path/to/your/usb/mount_point
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/17.png" alt="Image" width={800} height="auto" /></p>

### USB 2.0 Type-C ポート

このシリアルポートを USB-C データケーブル経由で使用することで、PC 側で入出力のデバッグ情報をモニタリングできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/18.jpg" alt="Image" width={400} height="auto" /></p>

Windows に Silicon Labs CP210x Universal Windows VCP Driver をインストールします。

デバイスマネージャーで、シリアルデバイスに割り当てられた COM ポートを探して確認します。

（スクリーンショットでは COM8）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/19.png" alt="Image" width={800} height="auto" /></p>

PowerShell で次のコマンドを実行します：

```PowerShell
#Choose your own serial port 
python -m serial.tools.miniterm COM8 115200
```

ユーザー名とパスワードでログインします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/20.png" alt="Image" width={800} height="auto" /></p>

## RTC

reComputer Rugged J401 には、バッテリバックアップ付きのハードウェア RTC が搭載されており、正確な時刻管理が可能です。CR1220 および CR1225 コイン型電池に対応しています。

### ハードウェア接続

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/21.jpg" alt="Image" width={400} height="auto" /></p>

### 使用手順

**ステップ 1.** 上述のように RTC バッテリを接続します。

**ステップ 2.** reComputer Rugged J401 の電源を入れます。

**ステップ 3.** Ubuntu デスクトップで右上のドロップダウンメニューをクリックし、`Settings > Date & Time` に移動して、Ethernet ケーブルでネットワークに接続し、**Automatic Date & Time** を選択して日付と時刻を自動取得します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/22.png" alt="Image" width={800} height="auto" /></p>

Ethernet 経由でインターネットに接続していない場合は、ここで日付と時刻を手動で設定できます。

**ステップ 4.** ターミナルウィンドウを開き、次のコマンドを実行してハードウェアクロックの時刻を確認します：

```Bash
cat /sys/devices/platform/bpmp/bpmp:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```

**ステップ 5.** ネットワーク接続を切断してデバイスを再起動します。システムは電源が切れても時刻情報を保持し、正常に動作していることが分かります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/23.png" alt="Image" width={800} height="auto" /></p>

## CAN

NVIDIA Jetson Orin Nano/NX モジュールは、ネイティブ CAN コントローラ（[Controller Area Network (CAN) — NVIDIA Jetson Linux Developer Guide](https://docs.nvidia.com/jetson/archives/r36.4/DeveloperGuide/HR/ControllerAreaNetworkCan.html)）を 1 つだけ提供します。2 つ目の CAN インターフェースを取得するには、MCP2518FDT-E のような外部 CAN コントローラが必要です。2 つ目の CAN ポートを有効にするには、`sudo modprobe mttcan` でドライバをロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/can-1.jpg" alt="Image" width={800} height="auto" /></p>

### 使用手順

#### USB-CAN テスト

USB-CAN アダプタを使用して、次のように CAN 通信を検証します。

:::note
USB-CAN アダプタには、通常終端抵抗が内蔵されています。

- `CAN0_120R_EN_3V3=1` の場合、CAN0 のオンボード 120 Ω 終端抵抗は切り離されます。
- `CAN0_120R_EN_3V3=0` の場合、CAN0 のオンボード 120 Ω 終端抵抗は接続されます。

同じロジックが CAN1 の終端制御ピンにも適用されます。
:::

##### ドライバのロードとインターフェースの設定

```Bash
# Load the driver to bring up the second CAN port
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up

# Disconnect the onboard 120 Ω termination resistors
# because the USB-CAN adapter already provides termination
sudo gpioset -m wait gpiochip2 2=1 3=1
```

##### データのモニタリングと送信

```Bash
# Monitor data
candump can0 &
candump can1 &

# Send data
cansend can0 123#abcdabcd
```

CAN0 の受信および送信：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/can-2.png" alt="Image" width={800} height="auto" /></p>

CAN1 の送信：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/can-3.png" alt="Image" width={800} height="auto" /></p>

#### CAN ループバックテスト

CAN0 と CAN1 を相互接続して、ボードレベルのループバックテストを行うこともできます。2 つの CAN バス（`CAN0_H` と `CAN1_H`、`CAN0_L` と `CAN1_L`）を物理的に短絡し、両側のオンボード 120 Ω 終端抵抗を有効にしてから、2 つのインターフェース間の双方向通信を検証します。

3 つのターミナルを開き、次のコマンドを実行します。

**ウィンドウ 1：CAN0 の設定とテスト**

```Bash
sudo modprobe mttcan
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 250000
sudo ip link set can0 up

# Send frames from can0
cangen can0

# Receive frames on can0
candump can0
```

**ウィンドウ 2：CAN1 の設定とテスト**

```Bash
sudo modprobe mttcan
sudo ip link set can1 down
sudo ip link set can1 type can bitrate 250000
sudo ip link set can1 up

# Send frames from can1
cangen can1

# Receive frames on can1
candump can1
```

**ウィンドウ 3：終端抵抗の有効化とリンクカウンタの確認**

```Bash
# Enable the onboard 120 Ω termination resistors on both CAN ports
gpioset -m wait gpiochip2 2=0 3=0

# Check low-level TX/RX counters
ip -d -s link show can0
ip -d -s link show can1
```

配線と終端が正しければ、一方のインターフェースで生成されたフレームはもう一方のインターフェースで受信され、TX/RX カウンタがそれに応じて増加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/can-4.png" alt="Image" width={800} height="auto" /></p>

## DI/DO

reComputer Rugged J401 の DI/DO インターフェースは、CAN インターフェースと共用で J47 2x10P コネクタに統合されています。2 チャネルのデジタル入力と 2 チャネルのデジタル出力をサポートし、安定した信号伝送と産業グレードの電圧適応を備えており、デジタルセンサ、リレー、その他の周辺機器の接続に適しています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/24.png" alt="Image" width={500} height="auto" /></p>

### ハードウェア接続

M12 インターフェース上の対応する DI/DO ピンは、以下の図のとおりです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/25.png" alt="Image" width={500} height="auto" /></p>

デジタル入力（DI）/デジタル出力（DO）チャネル

### 使用手順

#### デジタル出力（DO）の操作

DO インターフェースはオープンドレイン出力を採用しています。コマンドで出力レベル（High/Low）を設定することで、リレーや LED などの周辺機器を制御できます。

次のコマンドを実行して DO チャネルを有効にします（外部プルアップ抵抗と 12V 電源により 12V を出力）：

```Markdown
# Enable DO_30V_1 (gpiochip0 106)
sudo gpioset --mode=wait 0 106=1

# Enable DO_30V_2 (gpiochip0 43)
sudo gpioset --mode=wait 0 43=1
```

次のコマンドを実行して DO チャネルを無効にします（出力約 0V）：

```PowerShell
# Disable DO_30V_1 (gpiochip0 106)
sudo gpioset --mode=wait 0 106=0

# Disable DO_30V_2 (gpiochip0 43)
sudo gpioset --mode=wait 0 43=0
```

DO プルアップ前：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/26.png" alt="Image" width={800} height="auto" /></p>

DO プルアップ後：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/27.png" alt="Image" width={800} height="auto" /></p>

#### **デジタル入力（DI）の操作**

`gpioget` コマンドを使用して DI チャネルの入力レベルを読み取ります（戻り値 `1` = High レベル、`0` = Low レベル）ことで、周辺機器の状態を取得します。

```PowerShell
# Read DI_12V_1 (gpiochip0 105) status
gpioget gpiochip0 105

# Read DI_12V_2 (gpiochip0 144) status
gpioget gpiochip0 144
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/28.png" alt="Image" width={400} height="auto" /></p>



## UART

reComputer Rugged J401 には、RS232、RS422、および RS485 通信モードをサポートする独立した UART インターフェース（UART1）が搭載されており、安定した信号伝送と周辺機器との高い互換性を備えています。

### ハードウェア接続

UART インターフェースチャネル

SW3 スイッチを切り替えることで、RS232、RS485、RS422 モードを切り替えます。

注意：スイッチを押し下げた状態（ON）のときビットは 0、押されていないときビットは 1 です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/29.png" alt="Image" width={500} height="auto" /></p>

|Mode_0|Mode_1|Mode_2|Mode|Status|
|---|---|---|---|---|
|0|0|0|RS-422 フルデュプレックス|1T/1R RS-422|
|0|0|1|純粋な RS-232|3T/5R RS-232|
|0|1|0|RS-485 ハーフデュプレックス|1T/1R RS-485, TX ENABLE <br />Low Active|
|0|1|1|RS-485 ハーフデュプレックス|1T/1R RS-485, TX ENABLE High Active|
|1|0|0|RS-422 フルデュプレックス|終端抵抗付き RS-422|
|1|0|1|RS-232|1T/1R RS-232 は、バススイッチバスを必要とせず RS485 アプリケーションと共存可能（特殊用途向け）|
|1|1|0|RS-485|終端抵抗付き 1T/1R RS-485, TX ENABLE Low Active|
|1|1|1|シャットダウン|すべての I/O ピンは高インピーダンス|



## SPI

### ハードウェア接続

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/30.jpg" alt="Image" width={800} height="auto" /></p>

### 使用手順

Dupont ワイヤを使用して、対象 SPI チャネルのコアピンを接続します（例として /dev/spidev0.0 を使用）：MOSI ピンをその MISO ピンに接続し（データのループバック送受信を実現）、接続します。

配線図は次のとおりです：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/31.jpg" alt="Image" width={500} height="auto" /></p>

**ステップ 1: SPI カーネルモジュールをロードする（前提条件）**

SPI インターフェースを操作する前に、`spidev` カーネルモジュールがロードされていることを確認してください（デフォルトのシステムでは事前にロードされている場合がありますが、手動で確認することを推奨します）:

```Bash
sudo modprobe spidev
```

コマンドがエラーメッセージなしで実行された場合、モジュールは正常にロードされています。すでにロードされている場合は、コマンドは何も情報を返しませんが、これは正常な動作です。

**ステップ 2: SPI デバイスノードを確認する**

ターミナルで次のコマンドを入力し、reComputer Rugged J401 の SPI インターフェースによりマッピングされたデバイス名を確認します:

```Bash
ls /dev/spidev*
```

デバイスノードが表示されない場合は、`spidev` モジュールが正常にロードされていないことを意味します。`sudo modprobe spidev` を再実行し、システムログを確認してトラブルシューティングを行ってください。

**ステップ 3: SPI テストコードの取得とコンパイル**

GitHub から `spidev-test` テストコードを取得し、コンパイルします:

```Bash
git clone https://github.com/rm-hull/spidev-test
cd spidev-test
gcc spidev_test.c -o spidev_test
```

**ステップ 4: SPI テストプログラムを実行する**

ターミナルで次のコマンドを入力して SPI テストプログラムを実行します（`/dev/spidev2.0` を例とします）:

```Bash
sudo ./spidev_test -v -D /dev/spidev0.0 -s 100000 -p "Hello SPI"
```

**ステップ 5: テスト結果を確認する**

テストコマンドを実行した後、ターミナル上で SPI0.0 インターフェースの送受信状態を確認できます。主な出力は次のとおりです:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/32.png" alt="Image" width={800} height="auto" /></p>

> 重要な判定基準: TX（送信）データと RX（受信）データが一致していれば、SPI ループバックテストが成功し、SPI インターフェース機能が正常であることを示します。
> 
> 

## **I2C**

Rugged J401 は J8 2x10 ピンコネクタを介して I2C インターフェースを提供しており、センサーや周辺機器を簡単に接続してシステムを拡張できます。

### **ハードウェア接続**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/33.png" alt="Image" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/34.jpg" alt="Image" width={500} height="auto" /></p>

I2C デバイスをキャリアボード上の I2C インターフェースに接続します:

- Ground -> Ground (Pin 1)

- SDA -> SDA (Pin 16)

- SCL -> SCL (Pin 14)

- VCC -> 3V3 (Pin 20)

### **使用手順**

**ステップ 1.** I2C テストツールをインストールします:

```Bash
sudo apt update
sudo apt-get install i2c-tools
```

**ステップ 2.** I2C バスのマッピングを確認します:

```Bash
i2cdetect -l
```

**ステップ 3.** I2C バス上のデバイスをスキャンします:

```Bash
sudo i2cdetect -y -r 1
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/35.png" alt="Image" width={500} height="auto" /></p>



## リソース

- [reComputer Rugged J40 Datasheet](#) *(近日公開予定)*
- [Linux_for_Tegra Source Code](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [NVIDIA Jetson Devices Comparison](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
