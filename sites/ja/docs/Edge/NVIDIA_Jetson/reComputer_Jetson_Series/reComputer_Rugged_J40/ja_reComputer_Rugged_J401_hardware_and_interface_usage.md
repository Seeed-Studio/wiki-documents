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

この wiki では、reComputer Rugged J40 のさまざまなハードウェアおよびインターフェースを紹介し、それらを使用してプロジェクトのアイデアを拡張する方法を説明します。reComputer Rugged J40 上のほとんどのインターフェースは M12 コネクタを採用しており、IP66 等級の防水・防塵性能と優れた耐振動性を備えています。これにより、船舶への搭載や港湾監視システムなど、過酷な屋外環境での長期運用に適しています。

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
      <td>1× M12 GbE + 4× M12 GbE PSE (IEEE 802.3af, 15 W, 10/100/1000 Mbps)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>4× USB 3.2 Type-A（防水コネクタ）+ 1× USB 3.0 Type-C（デバイス / 書き込み）+ 1× USB 2.0 Type-C（デバッグ）</td>
    </tr>
    <tr>
      <td>Display</td>
      <td>1× HDMI 2.1（防水キャップ）</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>2× CAN-FD（アイソレート）M12 A コード経由</td>
    </tr>
    <tr>
      <td>Serial</td>
      <td>1× RS-232/422/485（M12 A コード経由）</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td>2× DI + 2× DO（M12 A コード経由）</td>
    </tr>
    <tr>
      <td>SIM</td>
      <td>1× Nano-SIM カードスロット</td>
    </tr>
    <tr>
      <td>Antenna</td>
      <td>4× SMA 防水アンテナコネクタ</td>
    </tr>
    <tr>
      <td>Storage</td>
      <td>M.2 Key M</td>
      <td>1× M.2 Key M（NVMe 2280 SSD 用、128 GB SSD 付属）</td>
    </tr>
    <tr>
      <td rowSpan={2}>拡張</td>
      <td>M.2 Key E</td>
      <td>1× M.2 Key E（M.2 2230 Wi-Fi モジュール用、Wi-Fi 6 モジュール付属）</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td>1× M.2 Key B（5G モジュール用）</td>
    </tr>
    <tr>
      <td rowSpan={4}>オンボード</td>
      <td>SPI / I2C</td>
      <td>1× SPI、1× I2C（内部ピンヘッダ）</td>
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
      <td>Button</td>
      <td>1× Recovery ボタン、1× RST ボタン</td>
    </tr>
    <tr>
      <td>Power</td>
      <td>入力</td>
      <td>M12 A コード DC 19–48 V</td>
    </tr>
  </tbody>
</table>

## 電源

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/2.jpg" alt="Image" width={800} height="auto" /></p>

reComputer Rugged J401 は M12 A コード DC 19–48V 電源インターフェースを備えており、広い電圧入力範囲に対応しているため、さまざまな電源環境で使用できます。インターフェースの定義は以下の表のとおりです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/3.png" alt="Image" width={400} height="auto" /></p>

|Pin|用途|タイプ|線色|
|---|---|---|---|
|1|DC 電源入力|電源|茶|
|2|||白|
|3|グラウンド|グラウンド|青|
|4|||黒|

## ディスプレイ

防水サイドカバーを固定している 2 本のネジを外して開くと、高品質な映像出力を提供する HDMI 2.1 ポートにアクセスできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/4.jpg" alt="Image" width={800} height="auto" /></p>

## SSD 用 M.2 Key M と Wi-Fi / Bluetooth 用 M.2 Key E

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

テスト完了後は、キャッシュファイルを削除するために `sudo rm tempfile` コマンドを実行してください。

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

このコマンドは、システムに接続されているすべての USB デバイスの一覧を、メーカー（ID）、種類、その他の情報とともに表示します。たとえば、出力に Quectel Wireless Solutions Co., Ltd. EM12-G というデバイスが表示されれば、5G モジュールが存在していることを示します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/11.png" alt="Image" width={800} height="auto" /></p>

**ステップ 2.** ドライバのロードを確認

5G モジュールに必要な option ドライバがロードされていることを確認することが重要です。lsmod コマンドを使用して確認できます。

```Bash
lsmod | grep option 
```

option ドライバが正常にロードされていれば、出力にドライバに関する情報が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/12.png" alt="Image" width={800} height="auto" /></p>

**ステップ 3.** ModemManager の設定

ModemManager はモデムデバイスを管理するためのツールであり、インストールして再起動する必要があります。

```Bash
sudo apt install modemmanager 
sudo systemctl restart ModemManager 
```

apt install コマンドは ModemManager パッケージのインストールに使用され、systemctl restart は ModemManager サービスを再起動して新しい設定が有効になるようにします。

**ステップ 4.** モジュール認識の確認

ModemManager が 5G モジュールを正しく認識できているかを確認するために、mmcli -L コマンドを使用します。

```Bash
mmcli -L 
```

5G モジュールが認識されている場合、/org/freedesktop/ModemManager1/Modem/0 のような出力が表示され、検出されたモデムデバイスへのパスを示します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/13.png" alt="Image" width={800} height="auto" /></p>

**ステップ 5.** APN の設定

APN（Access Point Name）は、モバイルデバイスをネットワークに接続するために重要です。ここでは nmcli コマンドを使用してベアラープロファイルを作成します。中国移動通信（China Mobile）を例に、次のコマンドで設定ファイルを作成できます。

```Bash
sudo nmcli con add type gsm ifname "*" apn "CMNET" ipv4.method  auto 
```

このコマンドは、新しい GSM（Global System for Mobile Communications）タイプの接続を追加し、APN を「CMNET」に指定し、IPv4 の自動設定を使用します。

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

このコマンドは、メーカー、モデル、サポートおよび現在使用中のネットワーク技術、デバイスステータス、接続中のネットワークオペレータなど、5G モジュールに関する包括的な詳細情報を提供します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/15.png" alt="Image" width={800} height="auto" /></p>

## Ethernet

reComputer Rugged J401 は、1× 標準ギガビット Ethernet（10/100/1000M）RJ45 ポート（J35）と、4× ギガビット PSE（Power Sourcing Equipment）RJ45 ポート（J36–J39）を提供します。標準ギガビットポートは一般的なネットワーク接続に使用されます。PSE ポートは IEEE 802.3af/at 規格をサポートしており、IP カメラや無線アクセスポイントなど接続されたデバイスに対して、Ethernet 経由で最大 1 ポートあたり 15.4W（802.3af）の電力供給を可能にします。これにより、産業用途、AMR、および屋外エッジコンピューティング用途に最適で、別途電源配線を行う必要がありません。すべてのギガビットポートは Jetson Orin モジュール内の PCIe コントローラから供給されており、10/100/1000M のオートネゴシエーションをサポートします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/16.jpg" alt="Image" width={800} height="auto" /></p>

Linux のネットワークデバイス名は、以下に示すように物理 Ethernet ポートに対応しています。画像と同じ向きから Ethernet コネクタを見た場合、左から右への対応は `eth4`、`eth2`、`eth1`、`eth0`、`eth3` となります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/jetson/rugged-ethernet-Interface.png" alt="Mapping between Linux Ethernet device names and physical ports on reComputer Rugged J401" width={900} height="auto" /></p>

| 物理ポート位置 | Linux デバイス名 |
| :--- | :--- |
| 左から 1 番目 | `eth4` |
| 左から 2 番目 | `eth2` |
| 中央 | `eth1` |
| 右から 2 番目 | `eth0` |
| 右から 1 番目 | `eth3` |

各 Ethernet ポートのネゴシエートされた帯域幅と物理リンク状態を確認するには `ethtool` を使用します。コマンドが利用できない場合は、まずインストールしてください：

```bash
sudo apt update
sudo apt install -y ethtool
```

次のコマンドを実行すると、5 つすべての物理 Ethernet インターフェースについて、速度、デュプレックスモード、自動ネゴシエーション状態、およびリンク状態が表示されます：

```bash
for interface in eth0 eth1 eth2 eth3 eth4; do
  echo "=== ${interface} ==="
  sudo ethtool "${interface}" | grep -E 'Speed:|Duplex:|Auto-negotiation:|Link detected:'
done
```

:::note
`Speed` には `1000Mb/s` のようにネゴシエートされたリンク帯域幅が表示されます。`Duplex` は通常 `Full` と表示されるはずで、`Link detected: yes` は対応する物理ポートにアクティブな接続があることを示します。切断されたポートでは `Speed: Unknown!` や `Link detected: no` と表示される場合があります。
:::

## 使用手順

### ハードウェア接続
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/poe_connect.png" alt="" />
</div>

### PoE 出力を有効化する

4 つの PSE ポート（J36–J39）は、オンボードの PSE コントローラによって給電されますが、これは**デフォルトでは無効**になっています。標準システムではこれを有効にするものは何もないため、J36–J39 にカメラを接続しても、PSE 電源イネーブルラインが High に駆動され、**High のまま維持**されるまで電源は供給されません。

| 信号 | GPIO | 方向 | 意味 |
| --- | --- | --- | --- |
| `PSE_PWR_EN` | `gpiochip2` line 15 | output | High に駆動して PSE 出力をオンにする |
| `PSE_PG` | `gpiochip2` line 0 | input | `1` = PSE 電源正常 |
| `PSE_INTB` | `gpiochip2` line 1 | input | `0` = フォルトなし |

GPIO ツールがインストールされていない場合はインストールし、その後出力を有効にして保持します：

```bash
sudo apt-get install -y gpiod     # only if gpioset/gpioget are not already present

# Set PSE_PWR_EN high and keep it high.
# -m signal  : maintain the level until the process receives SIGINT/SIGTERM
# setsid + & : detach it from the terminal so the hold survives the SSH session
sudo setsid gpioset -m signal 2 15=1 >/dev/null 2>&1 &

# Confirm the hold is alive
ps aux | grep "[g]pioset -m signal 2 15=1"

# Confirm the controller reports power good -> expected output: "1 0"
sudo gpioget gpiochip2 0 1
```

**期待される出力：**

```text
1 0
```

`1 0` は `PSE_PG=1`（電源正常）かつ `PSE_INTB=0`（フォルトなし）を意味します。`PSE_PG` が `0` のままの場合、電力は供給されていません。ケーブルとカメラ自体の電源要件（802.3af ではポートあたり 15.4 W）を確認してください。`PSE_INTB` が `1` を示す場合、コントローラがフォルトをラッチしています — 負荷を外し、電源を再投入してから再度確認してください。

**重要:** レベルが駆動されるのは `gpioset` プロセスが生存している間だけです。キャラクタデバイス経由で要求された GPIO ラインは、それを保持している最後のプロセスが終了するとデフォルト状態に戻ります。これは `gpioset --help` に明示されています。そのため、コマンドを実行してすぐに戻ってしまうと、PSE は**オンのままにはなりません**。再起動後、またはプロセスが kill された場合、カメラへの電源は失われ、リンクはダウンします。

#### 再起動後も PSE をオンに保つ（オプション）

同じホールド処理を systemd ユニットにまとめ、毎回のブート時に適用され、終了した場合は自動的に再起動されるようにします：

```bash
sudo tee /etc/systemd/system/poe-pse-hold.service >/dev/null <<'EOF'
[Unit]
Description=Hold PoE PSE power enable (PSE_PWR_EN gpio2/15)

[Service]
Type=simple
ExecStart=/usr/bin/gpioset -m signal 2 15=1
Restart=on-failure
RestartSec=2

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable --now poe-pse-hold
systemctl status poe-pse-hold --no-pager
```

`Type=simple` と `Restart=on-failure` の組み合わせにより、これはワンショットコマンドではなく*ホールド*として動作します。systemd がプロセス — したがって GPIO レベル — を生かし続けます。

### 2 台の PoE カメラを起動する

PSE 出力が有効になっていれば、外部 PoE インジェクタなしで 2 台のカメラに電源を供給し、アクセスできます。手動で立ち上げるには 3 つのステップが必要です。

**ステップ 1.** 実際にカメラが接続されているポートを特定します。5 つの Gigabit ポートは `eth0`–`eth4` として列挙されます。どのインデックスがどのコネクタに対応するかを決め打ちするのではなく、carrier フラグを読み取ります：

```bash
for i in eth0 eth1 eth2 eth3 eth4; do
  echo "$i carrier=$(cat /sys/class/net/$i/carrier 2>/dev/null) speed=$(cat /sys/class/net/$i/speed 2>/dev/null)"
done
```

**ステップ 2.** カメラの起動が完了するまで待ちます（PSE 電源が入ってから 30〜60 秒）。その後、Jetson 側のポートを各カメラと同じサブネットに設定します：

```bash
sleep 45

sudo ip link set eth1 up
sudo ip addr add 192.168.10.100/24 dev eth1     # camera A is 192.168.10.20
sudo ip link set eth2 up
sudo ip addr add 192.168.20.100/24 dev eth2       # camera B is 192.168.20.10
```

**ステップ 3.** リンクと 2 台のカメラを確認します：

```bash
ping -c2 -W1 192.168.10.20
ping -c2 -W1 192.168.20.10
ip -br addr show eth1
ip -br addr show eth2
```

**期待される出力：** 両方の ping が `0% packet loss` を報告し、各ポートは割り当てたアドレス付きで `UP` と表示されます：

```text
eth1             UP             192.168.10.100/24
eth2             UP             192.168.20.100/24
```

注意：

- 各カメラは設定されたアドレスを保持します。アドレスが分からない場合は、そのカメラが属するはずのサブネットにポートを設定し、ping スイープで探してください。
- `PSE_PG=1` の間もポートが `carrier=0` のままの場合、そのカメラは電力を消費していないか、防水コネクタが最後まで差し込まれていません。
- 上記のアドレスは 2 台のカメラ構成から取った例です。ご自身のカメラのサブネットを使用してください。`ip addr add` は再起動後に保持されません — 再起動後も設定を維持する必要がある場合は、NetworkManager または `systemd-networkd` でポートを設定してください。

```bash
# find an unknown camera on a port (example subnet)
for ip in $(seq 2 254); do ping -c1 -W1 192.168.10.$ip >/dev/null 2>&1 && echo "192.168.10.$ip is up"; done
```

### デュアルカメラのライブプレビュー

両方の RTSP ストリームを同時に表示でき、それぞれを別々の GStreamer ウィンドウに表示します。1 つ目のウィンドウには GPU/EGL パスを、2 つ目のウィンドウには X11/Xv パスを使用してください。このプラットフォームでは、2 つの EGL ベースのシンクを同時に動作させると EGL ディスプレイがクラッシュする可能性があります。

```bash
# Window A - GPU/EGL path
nohup env DISPLAY=:0 XAUTHORITY=/home/seeed/.Xauthority gst-launch-1.0 \
  rtspsrc location="rtsp://<user>:<password>@192.168.10.20:554/" protocols=tcp latency=200 ! \
  rtph265depay ! h265parse ! nvv4l2decoder ! \
  nvvidconv ! "video/x-raw(memory:NVMM),width=1152,height=648" ! \
  nvegltransform ! nveglglessink sync=false > /tmp/camA_disp.log 2>&1 &

# Window B - X11/Xv path
nohup env DISPLAY=:0 XAUTHORITY=/home/seeed/.Xauthority gst-launch-1.0 \
  rtspsrc location="rtsp://<user>:<password>@192.168.20.10:554/" protocols=tcp latency=200 ! \
  rtph265depay ! h265parse ! nvv4l2decoder ! \
  nvvidconv ! "video/x-raw,width=1280,height=720" ! \
  xvimagesink sync=false > /tmp/camB_disp.log 2>&1 &
```

- `<user>:<password>` をご自身のカメラの認証情報に置き換え、IP アドレスも上で確認したものに置き換えてください。
- `DISPLAY=:0` と `XAUTHORITY=/home/seeed/.Xauthority` は、SSH 経由でコマンドを起動する場合に必要です。デスクトップユーザーが `seeed` でない場合はパスを調整してください。JetPack デスクトップセッション内のターミナルから実行する場合はどちらも不要です。
- `protocols=tcp` を使用しているのは、産業用ネットワークでは RTSP over UDP がブロックされたりロスが多かったりすることが多く、`latency=200` によってストリームに 200 ms のジッタバッファを与えるためです。
- ここでテストしたカメラは **H.265** を配信します。ご自身のカメラを確認し、H.264 の場合は depayloader/パーサのペアを入れ替えてください。
- 最初のフレームが表示されるまで数秒かかります（RTSP ハンドシェイク、デコーダのウォームアップ、カメラのキーフレーム間隔）。ウィンドウが黒いままの場合は、`/tmp/camA_disp.log` または `/tmp/camB_disp.log` を確認してください。
- プレビューを停止するには `pkill -f "gst-launch-1.0.*rtspsrc"` を実行するか、両方を同じシェルから起動した場合は `kill %1 %2` を実行します。

ストリームのコーデックを確認するには：

```bash
timeout 20 gst-launch-1.0 -v rtspsrc location="rtsp://<user>:<password>@192.168.10.20:554/" \
  protocols=tcp latency=200 ! fakesink 2>&1 | grep -o "encoding-name=(string)H26[45]" | head -1
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/rugged_poe.png" alt="" />
</div>

H.264 カメラの場合は、`rtph265depay ! h265parse` の代わりに `rtph264depay ! h264parse` を使用してください。それ以外のパイプラインは変更しません。

## USB

reComputer Rugged J401 は、4 つの USB 3.2 Type-A ポート（内部 USB 3.1 Gen1 ハブ経由で、高速な周辺機器、ストレージデバイス、カメラを接続するために最大 5Gbps のデータレートをサポート）と、1 つの USB 2.0 Type-C デバッグポート（シリアルコンソールとして機能し、システムログへのアクセス、ブート問題のデバッグ、ファームウェア更新の実行に使用）を提供します。

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

Esc を押して挿入モードを終了し、その後 `:w` と入力して Enter を押してスクリプトを保存し、プロセスを終了します。

スクリプトに実行権限を与えてテストします：

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

デバイスマネージャーで、シリアルデバイスに割り当てられた COM ポートを探して確認します

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

reComputer Rugged J401 には、バッテリーバックアップ付きのハードウェア RTC が搭載されており、正確な時刻管理が可能です。CR1220 および CR1225 コイン型電池に対応しています。

### ハードウェア接続

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/21.jpg" alt="Image" width={400} height="auto" /></p>

### 使用手順

**ステップ 1.** 上述のように RTC バッテリーを接続します。

**ステップ 2.** reComputer Rugged J401 の電源を入れます。

**ステップ 3.** Ubuntu デスクトップで右上のドロップダウンメニューをクリックし、`Settings > Date & Time` に移動して、Ethernet ケーブルでネットワークに接続し、**Automatic Date & Time** を選択して日付と時刻を自動取得します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/22.png" alt="Image" width={800} height="auto" /></p>

Ethernet 経由でインターネットに接続していない場合は、ここで日付と時刻を手動で設定できます。

**ステップ 4.** ターミナルウィンドウを開き、次のコマンドを実行してハードウェアクロックの時刻を確認します：

```Bash
cat /sys/devices/platform/bpmp/bpmp:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```

**ステップ 5.** ネットワーク接続を切断してデバイスを再起動します。システムの電源が切れても時刻が保持され、正常に動作していることが分かります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/23.png" alt="Image" width={800} height="auto" /></p>

## CAN

NVIDIA Jetson Orin Nano/NX モジュールは、ネイティブ CAN コントローラ（[Controller Area Network (CAN) — NVIDIA Jetson Linux Developer Guide](https://docs.nvidia.com/jetson/archives/r36.4/DeveloperGuide/HR/ControllerAreaNetworkCan.html)）を 1 つだけ提供します。2 つ目の CAN インターフェースを取得するには、MCP2518FDT-E などの外部 CAN コントローラが必要です。2 つ目の CAN ポートを有効にするには、`sudo modprobe mttcan` でドライバをロードします。

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

reComputer Rugged J401 の DI/DO インターフェースは、CAN インターフェースと共用で J47 2x10P コネクタに統合されています。2 チャンネルのデジタル入力と 2 チャンネルのデジタル出力をサポートし、安定した信号伝送と産業グレードの電圧適応を備えており、デジタルセンサ、リレー、その他の周辺機器の接続に適しています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/24.png" alt="Image" width={500} height="auto" /></p>

### ハードウェア接続

M12 インターフェース上の対応する DI/DO ピンは、以下の図のとおりです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/25.png" alt="Image" width={500} height="auto" /></p>

デジタル入力（DI）/ デジタル出力（DO）チャンネル

### 使用手順

#### デジタル出力（DO）の操作

DO インターフェースはオープンドレイン出力を採用しています。コマンドによって出力レベル（High/Low）を設定し、リレーや LED などの周辺機器を制御できます。

次のコマンドを実行して DO チャンネルを有効にします（外部プルアップ抵抗と 12V 電源により 12V を出力）：

```Markdown
# Enable DO_30V_1 (gpiochip0 106)
sudo gpioset --mode=wait 0 106=1

# Enable DO_30V_2 (gpiochip0 43)
sudo gpioset --mode=wait 0 43=1
```

次のコマンドを実行して DO チャンネルを無効にします（出力約 0V）：

```PowerShell
# Disable DO_30V_1 (gpiochip0 106)
sudo gpioset --mode=wait 0 106=0

# Disable DO_30V_2 (gpiochip0 43)
sudo gpioset --mode=wait 0 43=0
```

DO を High にする前：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/26.png" alt="Image" width={800} height="auto" /></p>

DO を High にした後：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/27.png" alt="Image" width={800} height="auto" /></p>

#### **デジタル入力（DI）の操作**

`gpioget` コマンドを使用して DI チャンネルの入力レベルを読み取ります（戻り値 `1` = High レベル、`0` = Low レベル）ことで、周辺機器の状態を取得します。

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

UART インターフェースチャンネル

SW3 スイッチを切り替えることで、RS232、RS485、RS422 モードを切り替えます。

注意：スイッチを押し下げた状態（ON）のときビットは 0、押されていないときビットは 1 です

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/29.png" alt="Image" width={500} height="auto" /></p>

|Mode_0|Mode_1|Mode_2|モード|ステータス|
|---|---|---|---|---|
|0|0|0|RS-422 フルデュプレックス|1T/1R RS-422|
|0|0|1|純粋な RS-232|3T/5R RS-232|
|0|1|0|RS-485 ハーフデュプレックス|1T/1R RS-485, TX ENABLE <br />Low Active|
|0|1|1|RS-485 ハーフデュプレックス|1T/1R RS-485, TX ENABLE High Active|
|1|0|0|RS-422 フルデュプレックス|終端抵抗付き RS-422|
|1|0|1|RS-232|1T/1R RS-232 はバススイッチなしで RS485 アプリケーションと共存可能（特殊用途向け）|
|1|1|0|RS-485|終端抵抗付き 1T/1R RS-485, TX ENABLE Low Active|
|1|1|1|シャットダウン|すべての I/O ピンは高インピーダンス|



## SPI

### ハードウェア接続

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/30.jpg" alt="Image" width={800} height="auto" /></p>

### 使用手順

Dupont ワイヤーを使用して、対象となる SPI チャンネルのコアピン（ここでは /dev/spidev0.0 を例とします）を接続します：MOSI ピンをその MISO ピンに接続し（データのループバック送受信を実現します）。

配線図は次のとおりです：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/31.jpg" alt="Image" width={500} height="auto" /></p>

**ステップ 1: SPI カーネルモジュールをロードする（前提条件）**

SPI インターフェースを操作する前に、`spidev` カーネルモジュールがロードされていることを確認します（デフォルトのシステムでは事前にロードされている場合がありますが、手動で確認することを推奨します）：

```Bash
sudo modprobe spidev
```

コマンド実行時にエラーが表示されなければ、モジュールは正常にロードされています。すでにロード済みの場合は、コマンドは何も情報を返しませんが、これは正常な動作です。

**ステップ 2: SPI デバイスノードを確認する**

ターミナルで次のコマンドを入力し、reComputer Rugged J401 の SPI インターフェースによりマッピングされたデバイス名を確認します：

```Bash
ls /dev/spidev*
```

デバイスノードが表示されない場合は、`spidev` モジュールが正常にロードされていないことを意味します。`sudo modprobe spidev` を再実行し、システムログを確認してトラブルシューティングを行ってください。

**ステップ 3: SPI テストコードの取得とコンパイル**

GitHub から `spidev-test` テストコードを取得し、コンパイルします：

```Bash
git clone https://github.com/rm-hull/spidev-test
cd spidev-test
gcc spidev_test.c -o spidev_test
```

**ステップ 4: SPI テストプログラムの実行**

ターミナルで次のコマンドを入力して SPI テストプログラムを実行します（`/dev/spidev2.0` を例とします）：

```Bash
sudo ./spidev_test -v -D /dev/spidev0.0 -s 100000 -p "Hello SPI"
```

**ステップ 5: テスト結果の確認**

テストコマンドを実行した後、ターミナル上で SPI0.0 インターフェースのデータ送受信状況を確認できます。主な出力は次のとおりです：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/32.png" alt="Image" width={800} height="auto" /></p>

> 重要な判定基準：TX（送信）データと RX（受信）データが一致していれば、SPI ループバックテストが成功し、SPI インターフェース機能が正常であることを示します。
> 
> 

## **I2C**

Rugged J401 は J8 2x10 ピンコネクタを介して I2C インターフェースを提供し、センサーや周辺機器を容易に接続してシステム拡張を行うことができます。

### **ハードウェア接続**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/33.png" alt="Image" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/34.jpg" alt="Image" width={500} height="auto" /></p>

I2C デバイスをキャリアボード上の I2C インターフェースに接続します：

- Ground -> Ground（ピン 1）

- SDA -> SDA（ピン 16）

- SCL -> SCL（ピン 14）

- VCC -> 3V3（ピン 20）

### **使用手順**

**ステップ 1.** I2C テストツールをインストールします：

```Bash
sudo apt update
sudo apt-get install i2c-tools
```

**ステップ 2.** I2C バスのマッピングを確認します：

```Bash
i2cdetect -l
```

**ステップ 3.** I2C バス上のデバイスをスキャンします：

```Bash
sudo i2cdetect -y -r 1
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/35.png" alt="Image" width={500} height="auto" /></p>



## リソース

- [reComputer Rugged J40 データシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_rugged_J401_datasheet.pdf) 
- [キャリアボード回路図](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Rugged%20J401%20Carrier%20Board%20V1.1_SCH.pdf)
- [PSE ボード回路図](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Rugged%20J401%20PSE%20Board%20V1.1_SCH.pdf)
- [3D ファイル](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_Rugged_asm.stp)
- [Linux_for_Tegra ソースコード](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [NVIDIA Jetson デバイス比較](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)



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
