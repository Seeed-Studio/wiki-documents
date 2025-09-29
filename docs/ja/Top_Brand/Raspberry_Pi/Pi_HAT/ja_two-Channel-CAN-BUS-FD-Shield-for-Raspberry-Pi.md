---
description: Raspberry Pi用2チャンネルCAN BUS FDシールド
title: Raspberry Pi用2チャンネルCAN BUS FDシールド
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![画像の説明を入力してください](https://files.seeedstudio.com/wiki/CAN-BUS-FD/MCP2518FD.png)

これはRaspberry Pi用のCAN BUSシールド（以下、2チャンネルPi HATと呼びます）で、2チャンネルのCAN BUS I/Oを備え、[CAN FD](https://en.wikipedia.org/wiki/CAN_FD)をサポートしています。CAN FDは、より高速な伝送速度（最大8Mbps）をサポートします。

また、オンボードに2つの120Ω終端抵抗があり、スイッチで制御可能です。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/CAN-BUS-FD-HAT-for-Raspberry-Pi-p-4742.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## バージョンの説明

Raspberry Pi用CAN BUSシールドには**3つのバージョン**があります。これらの3つのバージョンはすべてRaspberry Piプラットフォームで完全に動作します。Raspberry Piプラットフォームを使用している場合、このセクションをスキップしても構いません。

現在、このCAN BUSシールドはJetson Nano Developer Kit（SDカード）をサポートしていますが、eMMCを搭載したJetson Nano（reComputer J1010/J1020v2）はサポートしていません。CAN BUSシールドの異なるバージョンは**機能性に影響を与える**ため、Jetson Nanoプラットフォームで使用する場合は、以下の表をよく確認してください。

|製品名|チップ|RPiの状態|Jetson Nanoの状態|
|--|--|--|--|
|[Raspberry Pi用2チャンネルCAN-BUS(FD)シールド (MCP2517FD)](https://www.seeedstudio.com/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi-p-4072.html)|MCP2517FD|2チャンネル|1チャンネル（can0）|
|[Raspberry Pi用2チャンネルCAN-BUS(FD)シールド (MCP2518FD)](https://www.seeedstudio.com/CAN-BUS-FD-HAT-for-Raspberry-Pi-p-4742.html)|MCP2518FD|2チャンネル|2チャンネル|

ご覧の通り、Raspberry Pi用2チャンネルCAN-BUS(FD)シールド（MCP2517FD）には2つのバージョンのチップが使用されており、両チャンネルがRaspberry Piで動作しますが、Jetson Nanoプラットフォームでは1チャンネル（CAN0）のみが動作します！

## 特徴

- 高速転送レート：8Mbps@10m 20AWGシールドケーブル / 1Mbps@40m 20AWGシールドケーブル
- 安定した電源供給、Raspberry Pi電源またはDC電源を選択可能
- Raspberry Pi 2、Raspberry Pi 3、Raspberry Pi 4、Raspberry Pi Zeroに対応
- ワンボタンで120Ω終端抵抗を設定可能
- CAN FDをサポート

## ハードウェア概要

<div style={{textAlign: 'center'}}>
<figure>
  <a href="https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/img/block.jpg" target="_blank">
    <img src="https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/img/block.jpg" alt="Raspberry Pi CAN BUSシールド" title="ハードウェア概要" />
  </a>
  <figcaption><b>図1</b>. <i>ハードウェア概要(MCP2517)</i></figcaption>
</figure>
</div>

<div style={{textAlign: 'center'}}>
<figure>
  <a href="https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/img/block2.jpg" target="_blank">
    <img src="https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/img/block2.jpg" alt="Raspberry Pi CAN BUSシールド" title="ハードウェア概要" />
  </a>
  <figcaption><b>図2</b>. <i>ハードウェア概要(MCP2517)</i></figcaption>
</figure>
</div>

<div style={{textAlign: 'center'}}>
<figure>
  <a href="https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/img/block-diagram.jpg" target="_blank">
    <img src="https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/img/block-diagram.jpg" alt="Raspberry Pi CAN BUSシールド" title="ハードウェア概要" />
  </a>
  <figcaption><b>図3</b>. <i>ブロック図(MCP2517)</i></figcaption>
</figure>
</div>

<div style={{textAlign: 'center'}}>
<figure>
  <a href="https://files.seeedstudio.com/wiki/CAN-BUS-FD/CANBUS_REVIEW.png" target="_blank">
    <img src="https://files.seeedstudio.com/wiki/CAN-BUS-FD/CANBUS_REVIEW.png" alt="Raspberry Pi CAN BUSシールド" title="ハードウェア概要" />
  </a>
  <figcaption><b>図4</b>. <i>ハードウェア概要(MCP2518FD)</i></figcaption>
</figure>
</div>

## 取り付けガイド

<div style={{textAlign: 'center'}}>
<figure>
  <a href="https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/img/setup.jpg" target="_blank">
    <img src="https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/img/setup.jpg" alt="Raspberry Pi CAN BUS shield" title="hardware overview" />
  </a>
  <figcaption><b>図4</b>. <i>取り付けガイド</i></figcaption>
</figure>
</div>

:::caution
組み立て時にCAN BUSポートの金属端子とRaspberry PiのHDMIインターフェース間で短絡を防ぐためにナイロン柱を使用していることがわかります。そのため、必ず図のようにナイロン柱を組み立ててください。
:::

## 仕様

|パラメータ|値|
|---|---|
|電源入力|12V~24V DC<br />Raspberry Pi GPIO 5V|
|CAN FDコントローラー| [MCP2517FD](https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/res/MCP2517-datasheet.pdf) |
|CAN FDトランシーバー|[MCP2557FD](https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/res/MCP2557-datasheet.pdf)|
|CAN FDチャンネル|2|
|転送速度|8Mbps@10m 20AWGシールドケーブル <br /> 1Mbps@40m 20AWGシールドケーブル|
|Piとの通信インターフェース|SPI|
|Groveインターフェース|Grove I2C x2|

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div> | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## はじめに

### 必要な材料

| Raspberry Pi | 2-Channel CAN-BUS(FD) Shield| Arduinoボード |CAN-BUS Shield V2 |
|--------------|-------------|-----------------|-----|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/img/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi-thumbnail.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![](https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/img/CAN_BUS_Shield_V2.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi-p-4072.html)|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/CAN-BUS-Shield-V2.html)|

:bulb: **注意:** Raspberry Pi用2チャンネルCAN BUS FDシールドはカーネルバージョン6.6.42以下でのみサポートされています。

また、2本の[オス-オスジャンパー](https://www.seeedstudio.com/Breadboard-Jumper-Wire-Pack-241mm-200mm-160mm-117m-p-234.html)と、これらのボードに電力を供給するための電源ケーブルが必要です。

### ハードウェア接続

- **ステップ1**. [取り付けガイド](#mounting-guide)に従って、2-Channel CAN-BUS(FD) ShieldをRaspberry Piに接続します。

- **ステップ2**. CAN BUS Shield V2をSeeeduino（またはArduino）ボードに接続します。

- **ステップ3**. ジャンパーを使用して両方のシールドのCAN端子を接続します。

|2-Channel CAN-BUS(FD) Shield|CAN-BUS Shield V2|
|---|---|
|CAN_0_L|CANL|
|CAN_0_H|CANH|

:::tip
    シールドの裏側にシルクスクリーンが記載されています。
:::

- **ステップ4**. Raspberry PiとSeeeduinoに電力を供給します。

![](https://files.seeedstudio.com/pi_hat_hardware_connection.jpg)

### ソフトウェア

#### CAN-HATのインストール

- **ステップ1**. **config.txt**ファイルを開きます

```sh
sudo nano /boot/config.txt
```

- **ステップ2**. ファイルの末尾に以下の行を追加します

```sh
dtoverlay=seeed-can-fd-hat-v2
```

- **ステップ3**. **Ctrl + x**を押し、**y**を押して**Enter**を押し、ファイルを**保存**します

- **ステップ4**. Raspberry Piを**再起動**します

```sh
sudo reboot
```

- **ステップ5**. カーネルログを確認して、CAN-BUS HATが正常に初期化されたかどうかを確認します。また、ifconfigの結果リストに**can0**と**can1**が表示されます。

```cpp
pi@raspberrypi:~ $ dmesg | grep spi
[    6.178008] mcp25xxfd spi0.0 can0: MCP2517FD rev0.0 (-RX_INT +MAB_NO_WARN +CRC_REG +CRC_RX +CRC_TX +ECC -HD m:20.00MHz r:18.50MHz e:0.00MHz) successfully initialized.
[    6.218466] mcp25xxfd spi0.1 (unnamed net_device) (uninitialized): Failed to detect MCP25xxFD (osc=0x00000000).

pi@raspberrypi:~ $ ifconfig -a
can0: flags=128<NOARP>  mtu 16
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 10  (UNSPEC)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
        device interrupt 166

can1: flags=128<NOARP>  mtu 16
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 10  (UNSPEC)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
        device interrupt 167

eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 10.0.0.13  netmask 255.255.255.0  broadcast 10.0.0.255
        inet6 fe80::44cc:eeb8:47a0:7fce  prefixlen 64  scopeid 0x20<link>
        ether b8:27:eb:25:d4:e0  txqueuelen 1000  (Ethernet)
        RX packets 299  bytes 27437 (26.7 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 172  bytes 25974 (25.3 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

wlan0: flags=4098<BROADCAST,MULTICAST>  mtu 1500
        ether b8:27:eb:70:81:b5  txqueuelen 1000  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

- **ステップ 6**. CAN FD プロトコルを設定し、データビットレートを 8M の速度に設定します。[詳細な使用方法についてはカーネルドキュメントを参照してください](https://www.kernel.org/doc/Documentation/networking/can.txt)

```sh
sudo ip link set can0 up type can bitrate 1000000   dbitrate 8000000 restart-ms 1000 berr-reporting on fd on
sudo ip link set can1 up type can bitrate 1000000   dbitrate 8000000 restart-ms 1000 berr-reporting on fd on

sudo ifconfig can0 txqueuelen 65536
sudo ifconfig can1 txqueuelen 65536
```

- **ステップ 7**. 2つのターミナルウィンドウを開き、それぞれのウィンドウで以下のコマンドを入力して CAN FD プロトコルをテストします。

```bash
#データ送信
cangen can0 -mv 
```

```bash
#データ受信
candump can0
```

> ジャンパーを使用して 2 つのチャンネルを接続することで、CAN-BUS をテストできます: 0_L ←→ 1_L, 0_H ←→ 1_H。

#### Arduino CAN BUS シールドとの通信

このデモでは、2つのチャンネルのうち1つだけを使用します。

Arduino CAN BUS シールド用に Arduino コードを提供しています。Arduino の使い方がわからない場合は、[こちら](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照してください。

2 チャンネル Pi Hat では、送信と受信に 2 つの方法があります。**can-util**/**cangen** と **Python コード**の両方を使用できます。

##### CAN BUS シールドで送信し、CAN HAT で受信

Arduino CAN BUS シールド用コード:

```cpp
// デモ: CAN-BUS シールド、データ送信
// loovee@seeed.cc

#include <mcp_can.h>
#include <SPI.h>

// v1.1以降のバージョンのCSピンはデフォルトでD9
// v0.9bおよびv1.0はデフォルトでD10
const int SPI_CS_PIN = 9;

MCP_CAN CAN(SPI_CS_PIN);                                    // CSピンを設定

void setup()
{
    Serial.begin(115200);

    while (CAN_OK != CAN.begin(CAN_500KBPS))              // CANバスを初期化: ボーレート = 500k
    {
        Serial.println("CAN BUS シールドの初期化に失敗しました");
        Serial.println("CAN BUS シールドを再初期化します");
        delay(100);
    }
    Serial.println("CAN BUS シールドの初期化に成功しました!");
}

unsigned char stmp[8] = {0, 0, 0, 0, 0, 0, 0, 0};
void loop()
{
    // データ送信: ID = 0x00、標準フレーム、データ長 = 8、stmp: データバッファ
    stmp[7] = stmp[7]+1;
    if(stmp[7] == 100)
    {
        stmp[7] = 0;
        stmp[6] = stmp[6] + 1;
        
        if(stmp[6] == 100)
        {
            stmp[6] = 0;
            stmp[5] = stmp[6] + 1;
        }
    }
    
    CAN.sendMsgBuf(0x00, 0, 8, stmp);
    delay(100);                       // 100msごとにデータを送信
}
// ファイル終了
```

Raspberry Pi の設定を行い、**can-util** を使用して受信できます。

```sh
# 500k ボーレートを設定
pi@raspberrypi:~ $ sudo ip link set can0 up type can bitrate 500000
pi@raspberrypi:~ $ ip -details link show can0
3: can0: <NOARP,UP,LOWER_UP,ECHO> mtu 16 qdisc pfifo_fast state UNKNOWN mode DEFAULT group default qlen 10
    link/can  promiscuity 0 
    can state ERROR-ACTIVE (berr-counter tx 0 rx 0) restart-ms 0 
   bitrate 500000 sample-point 0.875 
   tq 25 prop-seg 34 phase-seg1 35 phase-seg2 10 sjw 1
   mcp25xxfd: tseg1 2..256 tseg2 1..128 sjw 1..128 brp 1..256 brp-inc 1
   mcp25xxfd: dtseg1 1..32 dtseg2 1..16 dsjw 1..16 dbrp 1..256 dbrp-inc 1
   clock 40000000numtxqueues 1 numrxqueues 1 gso_max_size 65536 gso_max_segs 65535 
# データ受信
pi@raspberrypi:~ $ candump can0
  can0  000   [8]  00 00 00 00 00 00 00 05
  can0  000   [8]  00 00 00 00 00 00 00 06
  can0  000   [8]  00 00 00 00 00 00 00 07
  can0  000   [8]  00 00 00 00 00 00 00 08
  can0  000   [8]  00 00 00 00 00 00 00 09
  can0  000   [8]  00 00 00 00 00 00 00 0A
  can0  000   [8]  00 00 00 00 00 00 00 0B
  can0  000   [8]  00 00 00 00 00 00 00 0C
  can0  000   [8]  00 00 00 00 00 00 00 0D
  can0  000   [8]  00 00 00 00 00 00 00 0E
  can0  000   [8]  00 00 00 00 00 00 00 0F
  can0  000   [8]  00 00 00 00 00 00 00 10
  can0  000   [8]  00 00 00 00 00 00 00 11
  can0  000   [8]  00 00 00 00 00 00 00 12
  can0  000   [8]  00 00 00 00 00 00 00 13
  can0  000   [8]  00 00 00 00 00 00 00 14
  can0  000   [8]  00 00 00 00 00 00 00 15
  can0  000   [8]  00 00 00 00 00 00 00 16
  can0  000   [8]  00 00 00 00 00 00 00 17
  can0  000   [8]  00 00 00 00 00 00 00 18
  can0  000   [8]  00 00 00 00 00 00 00 19
  can0  000   [8]  00 00 00 00 00 00 00 1A
  can0  000   [8]  00 00 00 00 00 00 00 1B
  can0  000   [8]  00 00 00 00 00 00 00 1C
  can0  000   [8]  00 00 00 00 00 00 00 1D
```

または、**Python コード**を使用して CAN データを取得することもできます。Python を使用して CAN データを受信するには、まず python-can をインストールする必要があります。

```sh
# python-can をインストール
sudo pip3 install python-can
```

新しい Python ファイルを開き、以下のコードをコピーして **can_test.py** として保存します。

```python
import can

can_interface = 'can0'
bus = can.interface.Bus(can_interface, bustype='socketcan_native')
while True:
    message = bus.recv(1.0) # タイムアウトは秒単位。
    if message is None:
            print('タイムアウトが発生しました。メッセージがありません。')
    print(message)
```

Python コードを実行すると、以下のような結果が得られます。

```sh
pi@raspberrypi:~ $ python3 can_test.py
Timestamp: 1550471771.628215        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0e 63     Channel: can0
Timestamp: 1550471772.629302        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 00     Channel: can0
Timestamp: 1550471773.630658        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 01     Channel: can0
Timestamp: 1550471774.632018        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 02     Channel: can0
Timestamp: 1550471775.633395        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 03     Channel: can0
Timestamp: 1550471776.634774        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 04     Channel: can0
Timestamp: 1550471777.636135        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 05     Channel: can0
Timestamp: 1550471778.637481        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 06     Channel: can0
Timestamp: 1550471779.638859        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 07     Channel: can0
Timestamp: 1550471780.640222        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 08     Channel: can0
Timestamp: 1550471781.641602        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 09     Channel: can0
Timestamp: 1550471782.642970        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 0a     Channel: can0
```

##### CAN BUS Shield 受信と CAN HAT 送信

Raspberry Pi では、**cangen** を使用してランダムなパッケージを送信できます：

```sh
pi@raspberrypi:~ $ cangen can0 -v 
  can0  442#14.C4.1A.1A.C2.25.79.25
  can0  748#4E.C7.8B.0B.6E.B9.15.77
  can0  1E4#64.D4.62.22.2F.A6.BF
  can0  1DD#69.6F.61.33.1F.59.E4.7C
  can0  63D#
  can0  764#2C.C1.E3
  can0  68B#11.9C.63.6D.EA.E9.4B
  can0  329#DA.06.2C.34.6C
  can0  7DD#2E.F5.E0.2A.26.77.58.38
  can0  1BE#94.30.6E.2F.A2.7B.E3.1D
  can0  654#D1.21.A3.58.31.E8.51.5F
  can0  706#51.41.36.5C.43.8D.AE.5D
  can0  34A#89.F2.DE.33.AE.52.38.6C
  can0  6AC#C1.35.83.41.37
  can0  38C#22.AF
  can0  208#22.8E.97.58.E5.69.F7.2C
```

Arduino では、以下のコードを使用して CAN データを受信できます。

```cpp
// デモ: CAN-BUS Shield、割り込みモードでデータを受信
// 割り込みモードでは、データの到着間隔が速すぎてはいけません。20ms以上必要です。
// それ以外の場合はチェックモードを使用してください。
// loovee, 2014-6-13

#include <SPI.h>
#include "mcp_can.h"

// v1.1以降のバージョンのCSピンはデフォルトでD9
// v0.9bおよびv1.0はデフォルトでD10
const int SPI_CS_PIN = 9;

MCP_CAN CAN(SPI_CS_PIN);                                    // CSピンを設定


unsigned char flagRecv = 0;
unsigned char len = 0;
unsigned char buf[8];
char str[20];

void setup()
{
    Serial.begin(115200);

    while (CAN_OK != CAN.begin(CAN_500KBPS))              // CANバスを初期化: ボーレート = 500k
    {
        Serial.println("CAN BUS Shield 初期化失敗");
        Serial.println("CAN BUS Shield を再初期化します");
        delay(100);
    }
    Serial.println("CAN BUS Shield 初期化成功!");

    attachInterrupt(0, MCP2515_ISR, FALLING); // 割り込みを開始
}

void MCP2515_ISR()
{
    flagRecv = 1;
}

void loop()
{
    if(flagRecv) 
    {                                   // データを受信したか確認

        flagRecv = 0;                   // フラグをクリア

        // 保留中のすべてのメッセージを反復処理
        // バスが飽和しているか、MCUがビジー状態の場合、
        // 両方のRXバッファが使用中であり、単一のメッセージを読み取ってもIRQ条件がクリアされない可能性があります。
        while (CAN_MSGAVAIL == CAN.checkReceive()) 
        {
            // データを読み取る, len: データ長, buf: データバッファ
            CAN.readMsgBuf(&len, buf);

            // データを出力
            for(int i = 0; i<len; i++)
            {
                Serial.print(buf[i]);Serial.print("\t");
            }
            Serial.println();
        }
    }
}

```

Arduino IDE の **シリアルモニタ** を開くには、**ツール -> シリアルモニタ** をクリックします。または `ctrl`+`shift`+`m` キーを同時に押します。ボーレートを **115200** に設定してください。結果は以下のようになります：

![](https://github.com/Seeed-Studio/pi-hats/raw/master/images/arduino_receive.png)

または、**python-can** を使用してデータを送信することもできます：

Python コードは以下の通りです：

```python
import time
import can

bustype = 'socketcan_native'
channel = 'can0'

def producer(id):
    """:param id: データIDを含むメッセージをバスに送信します。"""
    bus = can.interface.Bus(channel=channel, bustype=bustype)
    for i in range(10):
        msg = can.Message(arbitration_id=0xc0ffee, data=[id, i, 0, 1, 3, 1, 4, 1], extended_id=False)
        bus.send(msg)
    # Issue #3: 書き込みスレッドが生き続けるようにする必要があります。
    time.sleep(1)

producer(10)
```

#### CAN-HAT のアンインストール

この CAN-HAT をアンインストールしたい場合は、以下のコードを実行してください：

```sh
pi@raspberrypi:~/seeed-linux-dtoverlays/modules/CAN-HAT $ sudo ./uninstall.sh
...
------------------------------------------------------
Raspberry Pi を再起動してすべての設定を適用してください
ありがとうございました！
------------------------------------------------------
```

## Jetson NanoでCAN-BUSシールドを使用する

現在、CAN-BUSシールドはJetson Nanoプラットフォームもサポートしていますが、ハードウェアのバージョンによっていくつかの制限があります。Jetson Nanoプラットフォームを使用している場合は、[**バージョン宣言**](https://wiki.seeedstudio.com/ja/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/#version-declare)を参照してください！

- リポジトリをクローンする:

```sh
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- dtboとドライバーをビルドする:

```sh
cd seeed-linux-dtoverlays
export CUSTOM_MOD_LIST="CAN-HAT"; make all_jetsonnano
```

- ドライバーをインストールする:

```sh
sudo -E make install_jetsonnano
```

- dtboをインストールする:

```sh
sudo cp overlays/jetsonnano/2xMCP2518FD-spi0.dtbo /boot
sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "Seeed 2xMCP2518FD"
sudo reboot
```

これで、`dmesg | grep spi`や`ifconfig -a`を実行してCAN-BUSが正しく初期化されたか確認できます。ハードウェアによっては、**can0またはcan0とcan1の両方**が表示されるはずです。

:::note
ここで使用されているハードウェアは、**最新の2チャンネルCAN FDマスターハット（RPi用）であり、Jetson Nanoプラットフォームで2チャンネルをサポートしています。古いバージョンを使用している場合は、can0の単一チャンネルのみが利用可能です**。
:::

```sh
qqq@jetson-qqq:~$ dmesg | grep spi
[   10.867712] mcp25xxfd spi0.0 can0: MCP2518FD rev0.0 (-RX_INT -MAB_NO_WARN +CRC_REG +CRC_RX +CRC_TX +ECC -HD m:20.00MHz r:18.50MHz e:0.00MHz) successfully initialized.
[   10.879487] mcp25xxfd spi0.1 can1: MCP2518FD rev0.0 (-RX_INT -MAB_NO_WARN +CRC_REG +CRC_RX +CRC_TX +ECC -HD m:20.00MHz r:18.50MHz e:0.00MHz) successfully initialized.

qqq@jetson-qqq:~$ ifconfig -a
can0: flags=128<NOARP>  mtu 16
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 10  (UNSPEC)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
        device interrupt 112

can1: flags=128<NOARP>  mtu 16
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 10  (UNSPEC)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
        device interrupt 114
```

### テスト

> **注意:** ここでは2チャンネルCAN FDマスターハット（RPi用）をハードウェアとして使用しています。

以下のようにチャンネルを接続してテストすることができます:

0_L ←→ 1_L

0_H ←→ 1_H

<div align="center"><img src="https://files.seeedstudio.com/wiki/CAN-BUS-FD/jetson-connect.png"/></div>

2つのターミナルウィンドウを開き、以下のコマンドを入力してCAN FDプロトコルをテストします。

```sh
#データ送信
cangen can0 -mv 
```

```sh
#データ受信
candump can1 
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/CAN-BUS-FD/jetson-send.png"/></div>

## 内蔵RTCの使用

最新の2チャンネルCAN FDマスターハット（RPi用）にはオンボードRTCも搭載されています。以下の手順に従ってRaspberry PiにRTCドライバーをインストールしてください:

- Raspberry Piを更新して再起動:

```sh
sudo apt update
sudo apt upgrade
sudo reboot
```

- 依存関係をインストールする:

```sh
sudo apt install i2c-tools build-essential raspberrypi-kernel-headers
```

- ドライバーをダウンロードする:

```sh
curl -O -L https://github.com/dresden-elektronik/raspbee2-rtc/archive/master.zip
unzip master.zip
```

- RTCカーネルモジュールをコンパイルする:

```sh
cd raspbee2-rtc-master
make
```

- RTCカーネルモジュールをインストールする:

```sh
sudo make install
sudo reboot
```

- RTCモジュールにシステム時間を設定する:

```sh
sudo hwclock --systohc
```

- RTCが動作しているかテストする:

```sh
sudo hwclock --verbose
```

以下のコマンドでRTC時間を読み取ることができます:

```sh
sudo hwclock -r
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/CAN-BUS-FD/time.png"/></div>

## Wio Terminal を使用する

<div align="center"><img src="https://files.seeedstudio.com/wiki/CAN-BUS-FD/ban-1.png"/></div>

CAN-BUS Pi Hat を SBC と一緒に使用するだけでなく、[**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)（Arduino互換ボード）でも使用できます！これにより、MCU上でCAN関連のプロジェクトを開発することが可能です。

以下のWikiを確認して、Wio Terminalについてさらに詳しく知ることができます：

- [Wio Terminal 入門ガイド](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/)

### 必要なハードウェア

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [**Wio Terminal 用 40ピン Raspberry Pi Hat アダプタボード**](https://www.seeedstudio.com/40-Pin-Raspberry-Pi-Hat-Adapter-Board-For-Wio-Terminal-p-4730.html)

- [**2チャンネル CAN-BUS(FD) シールド for Raspberry Pi (MCP2518FD)**](https://www.seeedstudio.com/CAN-BUS-FD-HAT-for-Raspberry-Pi-p-4742.html)

テスト目的で、他のCAN-BUSデバイスコンポーネントを準備することもできます。この例では以下を使用しています：

- [**CAN-BUS Shield V2（MCP2515およびMCP2551を採用）**](https://www.seeedstudio.com/CAN-BUS-Shield-V2.html) + **Arduinoボード**

### Seeed_Arduino_CAN Arduinoライブラリのインストール

:::note
    Seeed SAMDボードライブラリをインストールし、最新バージョンに更新していることを確認してください！
:::

1. [**Seeed_Arduino_CAN**](https://github.com/Seeed-Studio/Seeed_Arduino_CAN) リポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードします。

2. 次に、Seeed_Arduino_CANライブラリをArduino IDEにインストールします。Arduino IDEを開き、`スケッチ` -> `ライブラリを含める` -> `ZIP形式のライブラリを追加` をクリックし、先ほどダウンロードした `Seeed_Arduino_CAN` ファイルを選択します。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### 送信例コード

これは、**2チャンネル CAN-BUS(FD) シールド for Raspberry Pi (MCP2518FD) を Wio Terminal と一緒に使用して、CAN-BUSデータを別のCAN-BUSデバイスに送信する**例です（この場合、CAN-BUS Shield V2（MCP2515およびMCP2551を採用）+ Arduino Uno）。

**ハードウェア接続**

- **2チャンネル CAN-BUS(FD) シールド for Raspberry Pi (MCP2518FD)** の `Channel 0 L` を **CAN-BUS Shield V2** の `CANL` に接続します。

- **2チャンネル CAN-BUS(FD) シールド for Raspberry Pi (MCP2518FD)** の `Channel 0 H` を **CAN-BUS Shield V2** の `CANH` に接続します。

- **40ピン Raspberry Pi Hat アダプタボード** を使用して、2チャンネル CAN-BUS(FD) シールド for Raspberry Pi (MCP2518FD) を Wio Terminal に接続します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/CAN-BUS-FD/connect.png"/></div>

- **Arduino Uno + CAN-BUS Shield V2 用コード**

```cpp
#include <SPI.h>
#include "mcp2515_can.h"

/*SAMD core*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define SERIAL SerialUSB
#else
    #define SERIAL Serial
#endif

const int SPI_CS_PIN = 9;
mcp2515_can CAN(SPI_CS_PIN);

unsigned char len = 0;
unsigned char buf[8];

void setup() {
    SERIAL.begin(115200);
    while (!SERIAL) {
        ; // ネイティブUSBポートのみ必要なシリアルポート接続を待機
    }
    while (CAN_OK != CAN.begin(CAN_500KBPS)) {             // CANバス初期化：ボーレート = 500k
        SERIAL.println("CAN BUS Shield 初期化失敗");
        SERIAL.println("CAN BUS Shield を再初期化します");
        delay(100);
    }
    SERIAL.println("CAN BUS Shield 初期化成功！");
}

void loop() {
        // 保留中のすべてのメッセージを反復処理
        // バスが飽和しているかMCUがビジー状態の場合、
        // 両方のRXバッファが使用中であり、単一メッセージの読み取りではIRQ条件がクリアされません。
        while (CAN_MSGAVAIL == CAN.checkReceive()) {
            // データを読み取る、len: データ長、buf: データバッファ
            SERIAL.println("checkReceive");
            CAN.readMsgBuf(&len, buf);

            // データを出力
            for (int i = 0; i < len; i++) {
                SERIAL.print(buf[i]); SERIAL.print("\t");
            }
            SERIAL.println();
        }
}
```

- **Wio Terminal + 2チャンネル CAN-BUS(FD) シールド for Raspberry Pi (MCP2518FD) 用コード**

```cpp
#include <SPI.h>
#include "mcp2518fd_can.h"

/*SAMD core*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define SERIAL SerialUSB
#else
    #define SERIAL Serial
#endif

// ハードウェアに応じてSPI CSピンを設定
// Wio Terminal w/ MCP2518FD RPi Hat：
// Channel 0 SPI_CS ピン: BCM 8
// Channel 1 SPI_CS ピン: BCM 7
// 割り込みピン: BCM25
// *****************************************
// Arduino MCP2515 Hat:
// SPI_CS ピン: D9

const int SPI_CS_PIN = BCM8;
mcp2518fd CAN(SPI_CS_PIN); // CSピンを設定

void setup() {
    SERIAL.begin(115200);
    while(!Serial){};

    while (0 != CAN.begin((byte)CAN_500K_1M)) {            // CANバス初期化：ボーレート = 500k
        SERIAL.println("CAN BUS Shield 初期化失敗");
        SERIAL.println("CAN BUS Shield を再初期化します");
        delay(100);
    }
    SERIAL.println("CAN BUS Shield 初期化成功！");
}

unsigned char stmp[8] = {0, 0, 0, 0, 0, 0, 0, 0};
void loop() {
    // データ送信: id = 0x00、標準フレーム、データ長 = 8、stmp: データバッファ
    stmp[7] = stmp[7] + 1;
    if (stmp[7] == 100) {
        stmp[7] = 0;
        stmp[6] = stmp[6] + 1;

        if (stmp[6] == 100) {
            stmp[6] = 0;
            stmp[5] = stmp[6] + 1;
        }
    }

    CAN.sendMsgBuf(0x00, 0, 8, stmp);
    delay(100);                       // 100msごとにデータを送信
    SERIAL.println("CAN BUS sendMsgBuf 成功！");
}
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/CAN-BUS-FD/Send.png"/></div>

### 受信例コード

これは、**2チャンネル CAN-BUS(FD) シールド for Raspberry Pi (MCP2518FD) を Wio Terminal と一緒に使用して、別のCAN-BUSデバイスからCAN-BUSデータを受信する**例です（この場合、CAN-BUS Shield V2（MCP2515およびMCP2551を採用）+ Arduino Uno）。

**ハードウェア接続**

送信例と同じ接続。

- **Arduino Uno + CAN-BUS Shield V2 用コード**

```cpp
#include <SPI.h>
#include "mcp2515_can.h"

/*SAMD core*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define SERIAL SerialUSB
#else
    #define SERIAL Serial
#endif

const int SPI_CS_PIN = 9;
mcp2515_can CAN(SPI_CS_PIN); // CSピンを設定


void setup() {
    SERIAL.begin(115200);
    while(!Serial){};

    while (CAN_OK != CAN.begin(CAN_500KBPS)) {             // CANバス初期化：ボーレート = 500k
        SERIAL.println("CAN BUS Shield 初期化失敗");
        SERIAL.println("CAN BUS Shield を再初期化します");
        delay(100);
    }
    SERIAL.println("CAN BUS Shield 初期化成功！");
}

unsigned char stmp[8] = {0, 0, 0, 0, 0, 0, 0, 0};
void loop() {
    // データ送信: id = 0x00、標準フレーム、データ長 = 8、stmp: データバッファ
    stmp[7] = stmp[7] + 1;
    if (stmp[7] == 100) {
        stmp[7] = 0;
        stmp[6] = stmp[6] + 1;

        if (stmp[6] == 100) {
            stmp[6] = 0;
            stmp[5] = stmp[6] + 1;
        }
    }

    CAN.sendMsgBuf(0x00, 0, 8, stmp);
    delay(100);                       // 100msごとにデータを送信
    SERIAL.println("CAN BUS sendMsgBuf 成功！");
}
```

- **Wio Terminal + 2-Channel CAN-BUS(FD) Shield for Raspberry Pi (MCP2518FD) 用コード**

```cpp
#include <SPI.h>
#include "mcp2518fd_can.h"

/*SAMDコア*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define SERIAL SerialUSB
#else
    #define SERIAL Serial
#endif

// ハードウェアに応じてSPI CSピンを設定
// Wio Terminal w/ MCP2518FD RPi Hatの場合：
// チャンネル0 SPI_CSピン: BCM 8
// チャンネル1 SPI_CSピン: BCM 7
// 割り込みピン: BCM25
// *****************************************
// Arduino MCP2515 Hatの場合：
// SPI_CSピン: D9

const int SPI_CS_PIN = BCM8;
mcp2518fd CAN(SPI_CS_PIN);

unsigned char len = 0;
unsigned char buf[8];

void setup() {
    SERIAL.begin(115200);
    while (!SERIAL) {
        ; // ネイティブUSBポートのみで必要なシリアルポート接続を待機
    }
    while (0 != CAN.begin((byte)CAN_500K_1M)) {            // CANバス初期化：ボーレート = 500k
        SERIAL.println("CAN BUS Shield 初期化失敗");
        SERIAL.println("CAN BUS Shield を再初期化します");
        delay(100);
    }
    SERIAL.println("CAN BUS Shield 初期化成功!");
}

void loop() {
        // 保留中のすべてのメッセージを反復処理
        // バスが飽和している場合やMCUが忙しい場合、
        // 両方のRXバッファが使用中であり、単一のメッセージを読み取ってもIRQ条件はクリアされません。
        while (CAN_MSGAVAIL == CAN.checkReceive()) {
            // データを読み取る、len: データ長、buf: データバッファ
            SERIAL.println("checkReceive");
            CAN.readMsgBuf(&len, buf);

            // データを出力
            for (int i = 0; i < len; i++) {
                SERIAL.print(buf[i]); SERIAL.print("\t");
            }
            SERIAL.println();
        }
}
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/CAN-BUS-FD/Receive.png"/></div>

### 割り込みを使用した受信例コード

これは、**2-Channel CAN-BUS(FD) Shield for Raspberry Pi (MCP2518FD) を使用して Wio Terminal が他のCAN-BUSデバイス（この場合、MCP2515とMCP2551を採用したCAN-BUS Shield V2 + Arduino Uno）からCAN-BUSデータを受信する例**です。より信頼性を高めるために、**割り込みを使用して受信データフローをトリガー**しています。

**ハードウェア接続**

- **Arduino Uno + CAN-BUS Shield V2 用コード**

```cpp
#include <SPI.h>
#include "mcp2515_can.h"

/*SAMDコア*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define SERIAL SerialUSB
#else
    #define SERIAL Serial
#endif

const int SPI_CS_PIN = 9;
mcp2515_can CAN(SPI_CS_PIN); // CSピンを設定

void setup() {
    SERIAL.begin(115200);
    while(!Serial){};

    while (CAN_OK != CAN.begin(CAN_500KBPS)) {             // CANバス初期化：ボーレート = 500k
        SERIAL.println("CAN BUS Shield 初期化失敗");
        SERIAL.println("CAN BUS Shield を再初期化します");
        delay(100);
    }
    SERIAL.println("CAN BUS Shield 初期化成功!");
}

unsigned char stmp[8] = {0, 0, 0, 0, 0, 0, 0, 0};
void loop() {
    // データ送信: id = 0x00、標準フレーム、データ長 = 8、stmp: データバッファ
    stmp[7] = stmp[7] + 1;
    if (stmp[7] == 100) {
        stmp[7] = 0;
        stmp[6] = stmp[6] + 1;

        if (stmp[6] == 100) {
            stmp[6] = 0;
            stmp[5] = stmp[6] + 1;
        }
    }

    CAN.sendMsgBuf(0x00, 0, 8, stmp);
    delay(100);                       // 100msごとにデータ送信
    SERIAL.println("CAN BUS sendMsgBuf 成功!");
}
```

**Wio Terminal + 2-Channel CAN-BUS(FD) Shield for Raspberry Pi (MCP2518FD) 用コード**

```cpp
#include <SPI.h>
#include "mcp2518fd_can.h"

/*SAMDコア*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define SERIAL SerialUSB
#else
    #define SERIAL Serial
#endif

// ハードウェアに応じてSPI CSピンを設定
// Wio Terminal w/ MCP2518FD RPi Hatの場合：
// チャンネル0 SPI_CSピン: BCM 8
// チャンネル1 SPI_CSピン: BCM 7
// 割り込みピン: BCM25
// *****************************************
// Arduino MCP2515 Hatの場合：
// SPI_CSピン: D9

const int SPI_CS_PIN = BCM8;
const int CAN_INT_PIN = BCM25;

mcp2518fd CAN(SPI_CS_PIN);

unsigned char flagRecv = 0;
unsigned char len = 0;
unsigned char buf[8];

void MCP2515_ISR() {
    Serial.println("割り込み発生!");
    flagRecv = 1;
}

void setup() {
    SERIAL.begin(115200);
    while (!SERIAL) {
        ; // ネイティブUSBポートのみで必要なシリアルポート接続を待機
    }
    pinMode(CAN_INT_PIN, INPUT);
    attachInterrupt(digitalPinToInterrupt(CAN_INT_PIN), MCP2515_ISR, FALLING); // 割り込み開始
    
    while (0 != CAN.begin((byte)CAN_500K_1M)) {            // CANバス初期化：ボーレート = 500k
        SERIAL.println("CAN BUS Shield 初期化失敗");
        SERIAL.println("CAN BUS Shield を再初期化します");
        delay(100);
    }
    SERIAL.println("CAN BUS Shield 初期化成功!");
}

void loop() {
  if (flagRecv) // 割り込みトリガー
  {
    flagRecv = 0;
  // 保留中のすべてのメッセージを反復処理
  // バスが飽和している場合やMCUが忙しい場合、
  // 両方のRXバッファが使用中であり、単一のメッセージを読み取ってもIRQ条件はクリアされません。
    while (CAN_MSGAVAIL == CAN.checkReceive()) {
        // データを読み取る、len: データ長、buf: データバッファ
      SERIAL.println("checkReceive");
      CAN.readMsgBuf(&len, buf);
  
        // データを出力
      for (int i = 0; i < len; i++) {
        SERIAL.print(buf[i]); SERIAL.print("\t");
        }
      SERIAL.println();
    }
  }
}
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/CAN-BUS-FD/Interrupt.png"/></div>

### 自己送信・受信例コード

これは、**2-Channel CAN-BUS(FD) Shield for Raspberry Pi (MCP2518FD) を使用して自身でCAN-BUSデータを送信および受信する例**です。

**ハードウェア接続**

- **2-Channel CAN-BUS(FD) Shield for Raspberry Pi (MCP2518FD)** の `Channel 0 L` を **2-Channel CAN-BUS(FD) Shield for Raspberry Pi (MCP2518FD)** の `Channel 1 L` に接続

- **2-Channel CAN-BUS(FD) Shield for Raspberry Pi (MCP2518FD)** の `Channel 0 H` を **2-Channel CAN-BUS(FD) Shield for Raspberry Pi (MCP2518FD)** の `Channel 1 H` に接続

<div align="center"><img src="https://files.seeedstudio.com/wiki/CAN-BUS-FD/connect-1.png"/></div>

```cpp
#include <SPI.h>
#include "mcp2518fd_can.h"

/*SAMDコア*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define SERIAL SerialUSB
#else
    #define SERIAL Serial
#endif

// ハードウェアに応じてSPI CSピンを設定
// Wio Terminal w/ MCP2518FD RPi Hatの場合：
// チャンネル0 SPI_CSピン: BCM 8
// チャンネル1 SPI_CSピン: BCM 7
// 割り込みピン: BCM25
// *****************************************
// Arduino MCP2515 Hatの場合：
// SPI_CSピン: D9

const int SPI_CS_PIN_SEND = BCM8;
const int SPI_CS_PIN_RECEIVE = BCM7;

mcp2518fd CAN_SEND(SPI_CS_PIN_SEND);
mcp2518fd CAN_RECEIVE(SPI_CS_PIN_RECEIVE);

unsigned char len = 0;
unsigned char buf[8];

void setup() {
    SERIAL.begin(115200);
    while(!Serial); // シリアル待機

    if (CAN_SEND.begin((byte)CAN_500K_1M) != 0 || CAN_RECEIVE.begin((byte)CAN_500K_1M) != 0) {
      Serial.println("CAN-BUS 初期化エラー!");
      while(1);
    }
    
    SERIAL.println("CAN BUS Shield 初期化成功!");
}

unsigned char stmp[8] = {0, 0, 0, 0, 0, 0, 0, 0};
void loop() {
    // データ送信: id = 0x00、標準フレーム、データ長 = 8、stmp: データバッファ
    stmp[7] = stmp[7] + 1;
    if (stmp[7] == 100) {
        stmp[7] = 0;
        stmp[6] = stmp[6] + 1;

        if (stmp[6] == 100) {
            stmp[6] = 0;
            stmp[5] = stmp[6] + 1;
        }
    }

    CAN_SEND.sendMsgBuf(0x00, 0, 8, stmp);
    delay(100);                       // 100msごとにデータ送信
    SERIAL.println("CAN BUS sendMsgBuf 成功!");

    // ---------------------
        
    if (CAN_MSGAVAIL == CAN_RECEIVE.checkReceive()) {
    // データを読み取る、len: データ長、buf: データバッファ
      SERIAL.println("checkReceive");
      CAN_RECEIVE.readMsgBuf(&len, buf);
    // データを出力
    for (int i = 0; i < len; i++) {
        SERIAL.print(buf[i]); SERIAL.print(" ");
    }
    SERIAL.println();
    }
    SERIAL.println("---LOOP END---");
}
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/CAN-BUS-FD/send-rec.png"/></div>

### FD送信例コード

これは、Raspberry Pi用2チャンネルCAN-BUS(FD)シールド（MCP2518FD）を使用して、**`FD`プロトコルを使用して独自にCAN-BUSデータ（最大64ビット）を送受信する例**です。

**ハードウェア接続**

自己送受信例と同じ接続です。

```cpp
#include <SPI.h>
#include "mcp2518fd_can.h"

/*SAMDコア*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define SERIAL SerialUSB
#else
    #define SERIAL Serial
#endif

// ハードウェアに応じてSPI CSピンを設定
// Wio Terminal w/ MCP2518FD RPi Hatの場合：
// チャンネル0 SPI_CSピン: BCM 8
// チャンネル1 SPI_CSピン: BCM 7
// 割り込みピン: BCM25
// *****************************************
// Arduino MCP2515 Hatの場合:
// SPI_CSピン: D9

const int SPI_CS_PIN_SEND = BCM8;
const int SPI_CS_PIN_RECEIVE = BCM7;

mcp2518fd CAN_SEND(SPI_CS_PIN_SEND);
mcp2518fd CAN_RECEIVE(SPI_CS_PIN_RECEIVE);

void setup() {
    SERIAL.begin(115200);
    while(!Serial); // Serialが準備完了するまで待機
    CAN_SEND.setMode(0);
    CAN_RECEIVE.setMode(0);
    
    if (CAN_SEND.begin((byte)CAN_500K_1M) != 0 || CAN_RECEIVE.begin((byte)CAN_500K_1M) != 0) {
      Serial.println("CAN-BUS初期化エラー！");
      while(1);
    }
    byte send_mode = CAN_SEND.getMode();
    byte receive_mode = CAN_RECEIVE.getMode();
    SERIAL.printf("CAN BUS送信モード = %d, CAN BUS受信モード = %d\n\r",send_mode, receive_mode);
    SERIAL.println("CAN BUSシールド初期化完了！");
}

unsigned char stmp[64] = {0};
unsigned char len = 0;
unsigned char buf[64];

void loop() {
    stmp[63] = stmp[63] + 1;
    if (stmp[63] == 100) {
        stmp[63] = 0;
        stmp[62] = stmp[62] + 1;

        if (stmp[62] == 100) {
            stmp[62] = 0;
            stmp[61] = stmp[62] + 1;
        }
    }

    CAN_SEND.sendMsgBuf(0x00, 0, 15, stmp);
    delay(100);                       // 100msごとにデータを送信
    SERIAL.println("CAN BUS sendMsgBuf完了！");

    // ---------------------
        
    if (CAN_MSGAVAIL == CAN_RECEIVE.checkReceive()) {
    // データを読み取り、len: データ長、buf: データバッファ
      SERIAL.println("checkReceive");
      CAN_RECEIVE.readMsgBuf(&len, buf);
    // データを出力
    for (int i = 0; i < len; i++) {
        SERIAL.print(buf[i]); SERIAL.print(" ");
    } 
    SERIAL.println();
    }
    SERIAL.println("---ループ終了---");
}
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/CAN-BUS-FD/fd.png"/></div>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/res/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[PDF]** [Raspberry Pi用2チャンネルCAN-BUS(FD)シールド（MCP2518FD）回路図](https://files.seeedstudio.com/wiki/CAN-BUS-FD/CAN-BUS(FD)-HAT-for-Raspberry-Pi_MCP2518FD_SCH.pdf)
- **[ZIP]** [Raspberry Pi用2チャンネルCAN-BUS(FD)シールド回路図ファイル](https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/res/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi.zip)
- **[ZIP]** [Raspberry Pi用2チャンネルCAN FDマスターハット回路図ファイル](https://files.seeedstudio.com/wiki/CAN-BUS-FD/2-Channel%20CAN-BUS(FD)%20Shield%20for%20Raspberry%20Pi_SCH&PCB.zip)
- **[PDF]** [MCP2517データシート](https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/res/MCP2517-datasheet.pdf)
- **[PDF]** [MCP2557データシート](https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/res/MCP2557-datasheet.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートを提供しております。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>