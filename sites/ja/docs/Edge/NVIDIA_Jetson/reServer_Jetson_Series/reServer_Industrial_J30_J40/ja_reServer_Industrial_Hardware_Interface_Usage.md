---
description: reServer Industrial ハードウェアインターフェースの使用方法
title: reServer Industrial ハードウェアインターフェースの使用方法
keywords:
- reServer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reserver_industrial_hardware_interface_usage
last_update:
  date: 09/22/2023
  author: Lakshantha
sku: 114110247
createdAt: '2023-06-08'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/reserver_industrial_hardware_interface_usage/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ハードウェアおよびインターフェースの使用方法

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/2.jpg"/></div>

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/3.jpg"/></div>

reServer Industrial には 2 基の 2.5 インチ SATA HDD / SSD ドライブベイが搭載されており、ビデオ解析アプリケーションにおいて数百本のローカルビデオ映像を容易に保存できます。さらに、5 つの RJ-45 Ethernet ポート、1 つの RS232/422/485、4 つのアイソレート DI/DO、1 つの CAN、4 つの USB3.1 など、複数の接続オプションを備えています。ファンレス設計と多様な取り付けオプションにより、-20 ～ 60 ℃ の範囲で展開でき、より過酷な環境や高負荷用途に最適です。

reServer Industrial はパッシブヒートシンクとファンレス設計を採用しており、要求の厳しい環境での使用に最適です。パッシブヒートシンクによりファンを使用せずに効率的な冷却が可能となり、ほこりやその他の汚染物質によるコンポーネント故障のリスクを低減します。ファンレス設計は騒音レベルと消費電力も低減するため、静音性が求められる環境での使用に適しており、エネルギーコストの削減にもつながります。

reServer Industrial には 5 つの RJ45 GbE ポートがあり、そのうち 4 つは PoE PSE ポートで、IP カメラなどのデバイスに Ethernet 経由で電力を供給できます。これにより別途電源を用意する必要がなくなり、電源コンセントが容易に利用できない場所でもネットワーク機器を展開しやすくなります。残りの GbE ポートはネットワークスイッチやルーターに接続するために使用され、ネットワーク上の他のデバイスとの通信やインターネットへのアクセスを可能にします。

- **ファンレスコンパクト Edge AI サーバー:** NVIDIA Jetson™ Orin Nano/Orin NX モジュールを搭載し、20 TOPS から 100 TOPS までの AI 性能を提供、動作温度範囲は -20 ～ 60°C（0.7m/s の気流時）と広範囲
- **マルチストリーム処理:** 5× GbE RJ45（うち 4 ポートは 802.3af PSE 対応）で、複数ストリームをリアルタイム処理
- **拡張可能なストレージ:** 2 基の 2.5 インチ SATA HDD/SSD 用ドライブベイに加え、NVMe SSD 用 M.2 2280 ソケットを搭載
- **産業用インターフェース:** COM ポート、DI/DO ポート、CAN ポート、USB 3.1、およびオプションの TPM2.0 モジュールを搭載
- **ハイブリッド接続性:** Nano SIM カードスロットを備え、5G/4G/LTE/LoRaWAN®（モジュールはオプション）に対応
- **認証:** FCC、CE、UKCA、ROHS、KC

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## reServer Industrial を分解する

まず最初に、すべてのインターフェースへアクセスできるように外側の筐体を分解することをお勧めします。詳しくは [このドキュメント](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Assembly-Guide.pdf) を参照してください。

## ギガビット Ethernet コネクタ

reServer Industrial には 10/100/1000Mbps 仕様の Ethernet ポートが 5 つあり、そのうち 4 つは PSE 802.3 af 15 W に対応しており、PoE カメラをこれらのポート（LAN1～LAN4）に直接接続できます。これらは PCIe to Ethernet（LAN7430-I/Y9X）モジュール経由で接続されています。一方、左端の残りの Ethernet ポート（LAN0）は、インターネット接続用にルーターへ接続するためだけに使用されます。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reServer-Industrial/5.jpg"/></div>

各 Ethernet ポートには 2 つの LED（緑と黄）があり、それぞれ次のことを示します

- 緑色 LED: 1000M ネットワークに接続されている場合のみ点灯
- 黄色 LED: ネットワークアクティビティの状態を表示

### 使用方法

- PoE カメラを接続する前に、4 つの Ethernet ポートで PoE 機能を有効にする必要があります。次のように有効化します:

  <Tabs>
  <TabItem value="Jetpack 5.1.x" label="Jetpack 5.1.x">

    ```sh
    sudo -i
    cd /sys/class/gpio
    echo 315 > export 
    cd gpio315
    echo "out" > direction
    echo 1 > value
    ```

  </TabItem>
  <TabItem value="Jetpack 6" label="Jetpack 6">

    ```sh
    sudo apt update
    sudo apt install gpiod
    gpioset gpiochip2 15=1
    ```

  </TabItem>
  </Tabs>


### 物理ネットワーク IP を eth 番号にバインドする

  **LAN1 から LAN4 のインターフェースは PoE 用に割り当てられています。**

  各 PoE インターフェースに異なる IP アドレスを設定する必要がある場合は、次の手順に従ってください:

  :::warning
  インターフェース名（例: `enP1p1s0`）はシステムによって異なる場合があります。先に進む前に、次のコマンドを実行して、お使いのデバイス上での実際のインターフェース名を確認してください。以下のコマンドはあくまで参考例です — システムに表示されるインターフェース名に置き換えて使用してください。

  ```bash
  ifconfig
  ```
  :::

  **ステップ 1**: PoE デバイスを reServer Industrial に接続します。対象インターフェース用に新しい接続を作成します。例えば、インターフェース `enP1p1s0` を設定し、`POE1` という名前を付ける場合は次のようにします:

  ```bash
  sudo nmcli connection add type ethernet ifname enP1p1s0 con-name POE1
  ```

  **ステップ 2**: IP アドレスを設定します。IP アドレスは実際の用途に応じてカスタマイズできます。

  ```bash
  sudo nmcli connection modify POE1 ipv4.addresses 192.168.6.6/24
  ```

  **ステップ 3**: IPv4 の方式を手動（静的 IP）に設定します。

  ```bash
  sudo nmcli connection modify POE1 ipv4.method manual
  ```

  **ステップ 4**: 接続を有効化します。

  ```bash
  sudo nmcli connection up POE1
  ```

  **ステップ 5**: 設定を確認します。

  ```bash
  ifconfig
  ```

## SATA コネクタ

reServer Industrial は 2 台の SATA 2.5 インチ HDD/SSD をサポートしており、SATA データおよび電源コネクタの両方を備えています。HDD / SSD には次のように接続できます

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/23.jpg"/></div>

### 使用方法

システムの起動後、接続されている SATA ドライブを次のように確認できます

```sh
lsblk
```

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/28.png"/></div>

## RTC

reServer Industrial には、RTC バッテリーに接続する 2 つの異なる方法が用意されています

### 接続概要

- 方法 1:

下図のように、**3V CR1220 コイン電池**をボード上の RTC ソケットに接続します。バッテリーの **プラス (+)** 側が上向きになっていることを確認してください

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/6.jpg"/></div>

- 方法 2:

下図のように、**JST コネクタ付き 3V CR2302 コイン電池**をボード上の 2 ピン 1.25mm JST ソケットに接続します

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/7.jpg"/></div>

### 使用方法

- **ステップ 1:** 上記のいずれかの方法で RTC バッテリーを接続します

- **ステップ 2:** reServer Industrial の電源を入れます

- **ステップ 3:** Ubuntu デスクトップで右上のドロップダウンメニューをクリックし、`Settings > Date & Time` に移動して、Ethernet ケーブルでネットワークに接続し、**Automatic Date & Time** を選択して日付と時刻を自動取得します

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::note
Ethernet 経由でインターネットに接続していない場合は、ここで日付と時刻を手動で設定できます
:::

- **ステップ 4:** ターミナルウィンドウを開き、次のコマンドを実行してハードウェアクロックの時刻を確認します

```sh
sudo hwclock
```

次のような出力が表示されますが、これは正しい日付 / 時刻ではありません

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/14.png"/></div>

- **ステップ 5:** 次のコマンドを入力して、ハードウェアクロックの時刻を現在のシステムクロックの時刻に変更します

```sh
sudo hwclock --systohc
```

- **ステップ 6:** インターネットから時刻を取得しないように、接続されている Ethernet ケーブルをすべて取り外し、ボードを再起動します

```sh
sudo reboot
```

- **ステップ 7:** ハードウェアクロックの時刻を確認し、デバイスの電源を切っても日付 / 時刻が変わらないことを確認します

次に、起動のたびにハードウェアクロックからシステムクロックを常に同期するスクリプトを作成します。

- **ステップ 8:** お好みのテキストエディタを使用して新しいシェルスクリプトを作成します。ここでは **vi** テキストエディタを使用します

```sh
sudo vi /usr/bin/hwtosys.sh 
```

- **ステップ 9:** **i** を押して **挿入モード** に入り、次の内容をファイル内にコピー＆ペーストします

```sh
#!/bin/bash

sudo hwclock --hctosys
```

- **ステップ 10:** スクリプトに実行権限を付与します

```sh
sudo chmod +x /usr/bin/hwtosys.sh 
```

- **ステップ 11:** systemd ファイルを作成します

```sh
sudo nano /lib/systemd/system/hwtosys.service 
```

- **ステップ 12:** ファイル内に次の内容を追加します

```sh
[Unit]
Description=Change system clock from hardware clock

[Service]
ExecStart=/usr/bin/hwtosys.sh

[Install]
WantedBy=multi-user.target
```

- **ステップ 13:** systemctl デーモンをリロードします

```sh
sudo systemctl daemon-reload 
```

- **ステップ 14:** 作成したサービスをブート時に起動するよう有効化し、サービスを開始します

```sh
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

- **ステップ 15:** スクリプトが systemd サービスとして稼働していることを確認します

```sh
sudo systemctl status hwtosys.service
```

- **ステップ 16:** ボードを再起動すると、システムクロックがハードウェアクロックと同期していることがわかります

## M.2 Key M

出荷時の reServer Industrial には、M.2 Key M スロットに接続された 128GB SSD が含まれており、JetPack システムがプリインストールされています。

### 接続概要

同梱の SSD を取り外して新しい SSD を取り付けたい場合は、以下の手順に従ってください。ここでは、[128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)、[256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)、[512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)、[1TB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html) の Seeed 製 SSD のみを使用することを推奨します。これらの SSD のみ動作検証を行っています。さらに、このインターフェースは PCIe Gen4.0 SSD をサポートします。

- **ステップ 1:** プリインストールされている SSD のネジを取り外します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/8.jpg"/></div>

- **ステップ 2:** SSD コネクタからスライドさせて SSD を取り外します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/9.jpg"/></div>

- **ステップ 3:** 新しい SSD を挿入し、ネジを締め直します

### 使用方法

接続された SSD に対して簡単なベンチマークを行う方法を説明します

- **ステップ 1:** 以下のコマンドを実行して書き込み速度を確認します

```sh
sudo dd if=/dev/zero of=/home/$USER/test bs=1M count=512 conv=fdatasync
```

- **ステップ 2:** 以下のコマンドを実行して読み出し速度を確認します。必ず書き込み速度用の上記コマンドを実行した後に実行してください。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/$USER/test of=/dev/null bs=1M count=512
```

### mini PCIe

reServer Industrial には 4G および LoRa モジュールをサポートする mini PCIe コネクタが搭載されています。ただし、一度に接続できるのは 4G モジュールか LoRa モジュールのどちらか一方のみです。一部の 4G モジュールには GPS 機能が内蔵されています。これについても説明します。

#### 4G モジュール接続概要

現在このボードは EC25EUXGA と EC20CEHCLG モジュールをサポートしています。

- **ステップ 1:** すでに電源が入っている場合はボードの電源を切ります

- **ステップ 2:** 付属のスタンドオフを取り外します。このスタンドオフは M.2 Key B インターフェースを使用する場合にのみ必要です

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/10.jpg"/></div>

- **ステップ 3:** 4G モジュールを mini PCIe スロットに差し込み、あらかじめ取り付けられているネジを 2 つの穴に締めて 4G モジュールを固定します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/11.jpg"/></div>

- **ステップ 4:** **MAIN** とラベルされたアンテナコネクタにアンテナを接続します。ここでは IPEX コネクタを使用する必要があります

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/12.jpg"/></div>

- **ステップ 5:** 4G 対応 nano SIM カードを、SIM カードの金属面が上向きになるようにボード上の SIM カードスロットに挿入します。ここではカードを内部のバネに当たるまで奥まで押し込み、跳ね返ってロックされるまで挿入します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/13.jpg"/></div>

:::note
SIM カードを取り外したい場合は、内部のバネに当たるまでカードを押し込むと、SIM がスロットから出てきます
:::

- **ステップ 6:** **J8 (Control and UART) Header** 上の **SIM_MUX_SEL** ピンと **GND** ピンの間にジャンパを追加します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/14.jpg"/></div>

- **ステップ 6:** ボードの電源を入れます

#### 4G モジュールの使用方法 - 発信テスト

EC25 モジュールを使用する場合、モジュールは自動的に起動し、すぐに使用可能になります。しかし EC20 モジュールを使用する場合は、動作させるためにモジュールをリセットする必要があります

- **ステップ 1:** EC25 モジュールを使用している場合、このステップはスキップできます。しかし EC20 モジュールを使用している場合は、4G モジュールのリセットを担当する GPIO309 ピンにアクセスするため、次のコマンドを入力します

```sh
sudo su 
cd /sys/class/gpio
echo 309 > export 
cd gpio309
echo out > direction
echo 1 > value
```

EC25 モジュールの場合、ボードの起動直後に LED2 が緑色に点灯します。EC20 モジュールの場合は、上記のようにモジュールをリセットした後に LED2 が緑色に点灯します

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/15.jpg"/></div>

- **ステップ 2:** minicom をインストールします

```sh
sudo apt update
sudo apt install minicom -y
```

- **ステップ 3:** 接続された 4G モジュールのシリアルコンソールに入って AT コマンドを入力し、4G モジュールと対話できるようにします

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **ステップ 4:** **Ctrl+A** を押してから **E** を押し、ローカルエコーを有効にします

- **ステップ 5:** **"AT"** コマンドを入力して Enter を押します。応答として "OK" が表示されれば、4G モジュールは正常に動作しています

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/></div>

- **ステップ 6:** **"ATI"** コマンドを入力してモジュール情報を確認します

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/></div>

- **ステップ 7:** モジュールをテストするため、以下のコマンドを入力して別の電話番号に発信します

```sh
ATD<phone_number>;
```

すると次のような出力が表示されます

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/24.jpg"/></div>

入力した電話番号で着信を受け取ることができれば、モジュールは期待どおりに動作しています

#### 4G モジュールの使用方法 - インターネットに接続

##### EC25 モジュール

EC25 モジュールを使用している場合は、以下の手順に従ってください

- **ステップ 1:** 上記（4G モジュールの使用方法 - 発信テスト セクション）で説明したように 4G モジュールのシリアルコンソールを開いた後、次のコマンドを実行してインターネットに接続します。ここで **YOUR_APN** を使用している通信事業者の APN に置き換えてください

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/89.jpg"/></div>

接続に成功すると、上の画像のように **OK** と出力されます

- **ステップ 2:** 次のコマンドを実行して 4G モジュールを再起動します

```sh
AT+CFUN=1,1
```

これでシリアルターミナル上で 4G モジュールとの接続が切れます

- **ステップ 3:** **CTRL + A** を押してから **Q** を押し、**minicom** を終了します

- **ステップ 4:** **ifconfig** と入力すると、**usb0** インターフェースに IP アドレスが表示されます

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/93.png"/></div>

- **ステップ 5:** 次のように Web サイトに ping を送信して、インターネット接続があるかどうかを確認できます

```sh
ping -I usb0 www.bing.com -c 5
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/94.png"/></div>

##### EC20 モジュール

EC20 モジュールを使用している場合は、以下の手順に従ってください

- **ステップ 1:** すでに前のセクション（4G モジュールの使用方法 - 発信テスト セクション）で説明したとおりに EC20 モジュールの 4G モジュールをリセットしている場合は、このステップをスキップできます。まだ行っていない場合は、ここで実行してください

- **ステップ 2:** 4G モジュールのシリアルコンソールに入り、次のコマンドを入力して ECM モードに設定します

```sh
AT+QCFG="usbnet",1
```

- **ステップ 3:** 4G モジュールをリセットします

- **ステップ 4:** 4G モジュールのコンソール内で、次のコマンドを実行してインターネットに接続します。ここで **YOUR_APN** を使用している通信事業者の APN に置き換えてください

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

- **ステップ 6:** **ifconfig** と入力すると、**usb1** インターフェースに IP アドレスが表示されます

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/90.jpg"/></div>

- **ステップ 7:** 次のように URL に ping を送信して、インターネット接続があるかどうかを確認できます

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/92.png"/></div>

#### 4G モジュールの使用方法 - GPS に接続

一部の 4G モジュールには GPS モジュールが内蔵されています。EC25EUXGA と EC20CEHCLG の両モジュールには 4G モジュールが内蔵されています。

- **ステップ 1:** 以下のコマンドを実行して GPS モジュールを再起動します

```sh
echo -e "AT+QGPS=1\r\n" > /dev/ttyUSB2
echo -e "AT+QGPS=0\r\n" > /dev/ttyUSB2
```

- **ステップ 2:** 以下のコマンドを実行して GPS データを取得します

```sh
sudo cat /dev/ttyUSB1
```

すると次のような出力が表示されます

```sh
seeed@seeed-x:~$ sudo cat /dev/ttyUSB1
[sudo] password for seeed:
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSA,A,1,,,,,,,,,,,,,,,,*32
$GPGGA,,,,,,0,,,,,,,,*66
$GPRMC,,V,,,,,,,,,,N*53
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSA,A,1,,,,,,,,,,,,,,,,*32
$GPGGA,,,,,,0,,,,,,,,*66
$GPRMC,,V,,,,,,,,,,N*53
$GPVTG,,T,,M,,N,,K,N*2C
```

#### LoRa モジュール接続概要

現在このボードは WM1302 SPI モジュールをサポートしています。[US バージョン](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html) または [EU バージョン](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html) のいずれかを、Bazaar から入手して使用できます。

- **ステップ 1:** すでに電源が入っている場合はボードの電源を切ります

- **ステップ 2:** LoRa モジュールを mini PCIe スロットに差し込み、あらかじめ取り付けられているネジを 2 つの穴に締めて LoRa モジュールを固定します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/16.jpg"/></div>

- **ステップ 3:** アンテナコネクタにアンテナを接続します。ここでは IPEX コネクタを使用する必要があります

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/17.jpg"/></div>

:::note
**J8 (Control and UART) Header** 上の **SIM_MUX_SEL** ピンと **GND** ピンの間にジャンパがないことを確認してください。このジャンパは 4G モジュールを使用する場合にのみ必要です
:::

- **ステップ 4:** ボードの電源を入れます

#### LoRa モジュールの使用方法 - LoRa RF のテスト

LoRa モジュールが接続されると、モジュール上の緑色と青色の LED が点灯します

- **ステップ 1:** 以下のコマンドを入力して、LoRa モジュールがシステムに認識されているか確認します

```sh
i2cdetect -r -y 7
```

次のような出力が表示されれば、モジュールはシステムに認識されています

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/29.png"/></div>

- **ステップ 2:** 以下のコマンドを入力して、LoRa 信号送信ツールをコンパイルおよびビルドします

```sh
git clone https://github.com/lakshanthad/sx1302_hal
cd sx1302_hal
make
cd libloragw
cp ../tools/reset_lgw.sh .
sudo ./test_loragw_hal_tx -r 1250 -m LORA -f 867.1 -s 12 -b 125 -n 1000 -z 100 --dig 3 --pa 0 --pwid 13 -d /dev/spidev2.0
```

次のような結果が表示され、LoRa モジュール上の LED が赤色に変われば、モジュールは RF 信号を正常に送信していることを意味します

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/78.jpg"/></div>

送信を停止するには、キーボードで **CTRL + C** を押します。

#### LoRa モジュールの使用方法 - TTN に接続

ここでは TTN (The Things Network) に接続し、reServer Industrial を TTN LoRaWAN ゲートウェイとして使用します

- **ステップ 1：** パケットフォワーダーを準備するために以下を入力します

```sh
cd ..
cd packet_forwarder
cp ../tools/reset_lgw.sh .
```

- **ステップ 2：** 使用している LoRa モジュールに応じて、以下を実行します。ここでは SPI US915 バージョンでテストしています

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

しかし、他のさまざまなモジュール向けのコマンドは次のとおりです

```sh
# USB 915
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB

# SPI EU868
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# USB EU868
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

上記のコマンドを実行すると、以下のような出力が表示され、最後の行に **concentrator EUI** 情報が表示されます。この情報は後で TTN でゲートウェイを設定する際に使用するので、必ず控えておいてください

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/79.jpg"/></div>

- **ステップ 3：** [この URL](https://console.cloud.thethings.network) にアクセスして TTN コンソールに入り、任意のリージョンを選択します

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/80.png"/></div>

- **ステップ 4：** すでにアカウントをお持ちの場合はログインし、アカウントをお持ちでない場合は新規登録します

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/81.png"/></div>

- **ステップ 5：** **Go to gateways** をクリックします

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/82.png"/></div>

- **ステップ 6：** **+ Register gateway** をクリックします

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/83.png"/></div>

- **ステップ 7：** 先ほど取得した **Concentrator EUI** を **Gateway EUI** セクションに入力し、**Confirm** をクリックします

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/84.jpg"/></div>

- **ステップ 8：** 使用している LoRa モジュールに応じて **Frequency plan** を入力します。ここではモジュールの US915 バージョンを使用しているため、**United Stated 902-928 MHz, FSB 2 (used by TTN)** を選択しています。その後 **Register gateway** をクリックします

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/85.jpg"/></div>

:::note
**Gateway ID** は自動的に入力されていますが、任意の値に変更することもできます。**Gateway name** は必須ではありませんが、必要に応じて入力することもできます
:::

- **ステップ 9：** ゲートウェイのメインホームページに表示されている **Gateway Server Address** を控えておきます

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/86.jpg"/></div>

- **ステップ 9：** reTerminal Industrial 上で、**lora_pkt_fwd** コマンドと一緒に使用した **global_conf_json** ファイルを編集します。ここで **gateway_ID**、**server_address**、**serv_port_up**、**serv_port_down** の各オプションを次のように変更する必要があります

  - gateway_ID: デバイスの Concentrator EUI
  - server_address: TTN の Gateway Server Address
  - serv_port_up: 1700
  - serv_port_down: 1700

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/87.png"/></div>

- **ステップ 10：** パケットフォワーダーを再実行します

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

以下のような出力が表示されれば、デバイスは TTN への接続に成功しています

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/88.jpg"/></div>

## M.2 Key B

reServer Industrial には 4G および 5G モジュールをサポートする M.2 Key B コネクタが搭載されています。現在、**SIM8202G-M2 5G module** でテスト済みです

### 5G モジュール接続概要

- **ステップ 1：** すでに電源が入っている場合はボードの電源を切ります

- **ステップ 2：** スタンドオフが所定の位置にあることを確認し、スタンドオフ上部のネジを取り外します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/18.jpg"/></div>

- **ステップ 2：** 5G モジュールを M.2 Key B スロットに差し込み、スタンドオフのネジを締めて 5G モジュールを固定します（スタンドオフについて説明）

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/19.jpg"/></div>

- **ステップ 3：** モジュール上のアンテナコネクタに 4 本のアンテナを接続します。ここでは IPEX 4 コネクタを使用する必要があります

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/20.jpg"/></div>

- **ステップ 4：** ボード上の SIM カードスロットに 5G 対応 nano SIM カードを挿入します。このとき、SIM カードの金属面が下向きになるようにしてください。内部のスプリングに当たるまでカードを奥まで押し込み、跳ね返ってロックされる状態にします。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/13.jpg"/></div>

:::note
SIM カードを取り外したい場合は、内部のスプリングに当たるまでカードを押し込むと、SIM がスロットから出てきます
:::

- **ステップ 5：** ボードの電源を入れます

### 5G モジュールの使用 - 発信テスト

SIM8202G-M2 5G モジュールを使用する場合、モジュールは自動的には起動しません。そのため、まずいくつかの GPIO をトグルして起動させる必要があります

- **ステップ 1：** 5G モジュールを起動するために以下を入力します

```sh
sudo su 
cd /sys/class/gpio
echo 309 > export 
cd gpio309
echo out > direction
echo 0 > value

cd..
echo 341 > export 
cd PEE.02
echo out > direction
echo 1 > value

cd..
echo 330 > export 
cd PCC.02
echo out > direction
echo 0 > value
```

上記が実行されると、LED2 が緑色に点灯します

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/15.jpg"/></div>

- **ステップ 2：** minicom をインストールします

```sh
sudo apt update
sudo apt install minicom -y
```

- **ステップ 3：** 接続されている 5G モジュールのシリアルコンソールに入ります。これにより AT コマンドを入力して 5G モジュールとやり取りできます

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **ステップ 4：** コマンド **"AT"** を入力して Enter キーを押します。応答として "OK" が表示されれば、5G モジュールは正常に動作しています

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/107.png"/></div>

- **ステップ 6：** コマンド **"ATI"** を入力してモジュール情報を確認します

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/108.png"/></div>

- **ステップ 7：** モジュールをテストするために、以下のコマンドを入力して別の電話番号に発信します

```sh
ATD<phone_number>;
```

すると、以下のような出力が表示されます

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/109.png"/></div>

### 5G モジュールの使用 - インターネット接続

近日公開

## DI/ DO

reServer Industrial は 4 チャンネルのデジタル入力と 4 チャンネルのデジタル出力をサポートしており、すべて光アイソレーションされているため、電圧スパイクやその他の電気的ノイズからメインボードを効果的に保護します。同じコネクタには CAN インターフェースもあり、これについては本 wiki の後半で説明します

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/37.png"/></div>

### DI/ DO ピン割り当て表

<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Label Name</th>
      <th>Schematic Signal</th>
      <th>Module Pin Number</th>
      <th>BGA Number</th>
      <th>GPIO Number</th>
      <th>V/A Limits</th>
      <th>Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>Input</td>
      <td>DI1</td>
      <td>DI_1_GPIO01</td>
      <td>118</td>
      <td>PQ.05</td>
      <td>453</td>
      <td rowSpan={4}>合計 12V/ 20mA 電流</td>
      <td rowSpan={4}>12V デジタル入力、グランド信号は<br />GND_DI (Pin2/4/6) に接続する必要があります</td>
    </tr>
    <tr>
      <td>DI2</td>
      <td>DI_2_GPIO09</td>
      <td>211</td>
      <td>PAC.06</td>
      <td>492</td>
    </tr>
    <tr>
      <td>DI3</td>
      <td>DI_3_GPIO11</td>
      <td>216</td>
      <td>PQ.06</td>
      <td>454</td>
    </tr>
    <tr>
      <td>DI4</td>
      <td>DI_4_GPIO13</td>
      <td>228</td>
      <td>PH.00</td>
      <td>391</td>
    </tr>
    <tr>
      <td rowSpan={4}>Output</td>
      <td>DO1</td>
      <td>DO_1_GPIO</td>
      <td>193</td>
      <td>PI.00</td>
      <td>399</td>
      <td rowSpan={4}>各ピンあたり 40V/40mA 負荷</td>
      <td rowSpan={4}>デジタル出力、最大耐圧 40V、グランド信号は<br />GND_DO(Pin8/10) に接続する必要があります</td>
    </tr>
    <tr>
      <td>DO2</td>
      <td>DO_2_GPIO</td>
      <td>195</td>
      <td>PI.01</td>
      <td>400</td>
    </tr>
    <tr>
      <td>DO3</td>
      <td>DO_3_GPIO</td>
      <td>197</td>
      <td>PI.02</td>
      <td>401</td>
    </tr>
    <tr>
      <td>DO4</td>
      <td>DO_4_GPIO</td>
      <td>199</td>
      <td>PH.07</td>
      <td>398</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>CH</td>
      <td colSpan={5} rowSpan={2}>/</td>
      <td rowSpan={2}>標準的な差動信号を持つ CAN バス、<br />グランド信号は GND_ISO (Pin 12) に接続する必要があります</td>
    </tr>
    <tr>
      <td />
      <td>CL</td>
    </tr>
    <tr>
      <td>Ground</td>
      <td>GND_DI</td>
      <td colSpan={5} rowSpan={3}>/</td>
      <td>12V デジタル入力用の基準グランド信号であり、<br />DI のリターンパスも兼ねています</td>
    </tr>
    <tr>
      <td />
      <td>GND_DO</td>
      <td>デジタル出力用の基準グランド信号であり、DO のリターンパスも兼ねています</td>
    </tr>
    <tr>
      <td />
      <td>CG</td>
      <td>CAN 用の基準グランド信号</td>
    </tr>
  </tbody>
</table>

### DI の接続概要

以下の図に従って DI の接続を行うことができます。DI ラインには直列に抵抗を追加することをお勧めします。ここでは DI1 ピンに 4.7kΩ の抵抗を接続してテストしました。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/38.png"/></div>

### DI の使用方法

入力として検出されるためには、DI ラインに 12V の電圧を入力する必要があります。DI / DO を有効にするコマンドは Jetpack 5 と Jetpack 6 で異なります。 



<Tabs>
<TabItem value="Jetpack 5" label="Jetpack 5">

- **ステップ 1:** 上図のように **DI1 ピン** に接続し、**12V** を入力します

- **ステップ 2:** 次のようにして DI1 用の GPIO をオープンします

```sh
sudo su 
cd /sys/class/gpio
echo 453 > export 
cd PQ.05
```

:::note
GPIO 番号と BGA 番号を確認するには、**DI/ DO ピン割り当て表** を参照してください。上記の例では、DI1 ピンの GPIO 番号は 453、BGA 番号は PQ.05 です
:::

- **ステップ 3:** 状態を確認するために次を実行します

```sh
cat value
```

出力が 0 の場合は 12V が入力されていることを意味します。出力が 1 の場合は入力電圧がないことを意味します。

</TabItem>
<TabItem value="Jetpack 6" label="Jetpack 6">

- **ステップ 1:** 上図のように **DI1 ピン** に接続し、**12V** を入力します

- **ステップ 2:** chip0 上の DI1 の **line offset** を確認します:

```sh
gpioinfo gpiochip0
```
BGA 番号に基づいて対応する **line offset** を見つけます。DI1 の **line offset** は `105` です。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/reserver-di.jpg"/></div>


:::note
GPIO 番号と BGA 番号を確認するには、**DI/ DO ピン割り当て表** を参照してください。上記の例では、DI1 ピンの GPIO 番号は 453、BGA 番号は PQ.05 です	
:::

- **ステップ 3:**
DI1 に対応する gpiochip0 の **line offset 105** を読み取るには次を実行します:
```sh
sudo gpioget gpiochip0 105
```
出力が 0 の場合は Low レベルを示します。出力が 1 の場合は High レベルを示します。  
コマンド形式は `sudo gpioset <gpiochip> <line>` のとおりです。

</TabItem>
</Tabs>


### DO の接続概要

以下の図に従って DO の接続を行うことができます。DO ラインには直列に抵抗を追加することをお勧めします。ここでは 4.7kΩ の抵抗でテストしています

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/39.png"/></div>

### DO の使用方法

ここでは上記の図で示したように負荷を接続する必要があります。テストする最も簡単な方法は、マルチメータをお持ちであればそれを接続するか、最大電圧 40V 未満を必要とする負荷を接続することです。DI / DO を有効にするコマンドは Jetpack 5 と Jetpack 6 で異なります。 


<Tabs>
<TabItem value="Jetpack 5" label="Jetpack 5">

- **ステップ 1:** 上図のように **DO1 ピン** に接続し、**最大 40V** を入力します

- **ステップ 2:** 次のようにして DO1 用の GPIO をオープンします

```sh
sudo su 
cd /sys/class/gpio
echo 399 > export 
cd PI.00
echo out > direction
```

:::note
GPIO 番号と BGA 番号を確認するには、**DI/ DO ピン割り当て表** を参照してください。上記の例では、DO1 ピンの GPIO 番号は 399、BGA 番号は PI.00 です
:::

- **ステップ 3:** ピンをオンにするために次を実行します

```sh
echo 1 > value
```

</TabItem>
<TabItem value="Jetpack 6" label="Jetpack 6">

- **ステップ 1:** 上図のように **DO1 ピン** に接続し、**最大 40V** を入力します

- **ステップ 2:** chip0 上の DO1 の **line offset** を確認します:

```sh
gpioinfo gpiochip0
```
BGA 番号に基づいて対応する **line offset** を見つけます。DO1 の **line offset** は `51` です。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/reserver-do.jpg"/></div>



:::note
GPIO 番号と BGA 番号を確認するには、**DI/ DO ピン割り当て表** を参照してください。上記の例では、DO1 ピンの GPIO 番号は 399、BGA 番号は PI.00 です
:::

- **ステップ 3:**
DO1 の状態を制御するには、次のコマンドを使用します:
```sh
# set to 12v
sudo gpioset --mode=wait gpiochip0 51=0

# set to 0v
sudo gpioset --mode=wait gpiochip0 51=1
```
コマンド形式は `sudo gpioset <gpiochip> <line>=<value>` のとおりです。

</TabItem>
</Tabs>

負荷がオンになる、またはマルチメータが入力した電圧を表示する場合、テストは正常に機能しています。

## CAN

reServer Industrial には、5Mbps の CAN FD（Controller Area Network Flexible Data-Rate）プロトコルをサポートする CAN インターフェースが搭載されています。CAN インターフェースは容量性アイソレーションによって絶縁されており、優れた EMI 保護を提供し、産業用およびオートメーション用途で信頼性の高い通信を実現します。120Ω の終端抵抗がデフォルトで実装されており、この抵抗は GPIO を使用して ON / OFF を切り替えることができます。

注意: CAN インターフェースはアイソレートされた電源を使用しているため、CAN インターフェースに接続される外部デバイスの GND 信号は CG ピンに接続する必要があります

### USB-CAN アダプタとの接続概要

CAN バスをテストおよびインターフェースするには、以下に示すように、ボード上の CAN コネクタに USB-CAN アダプタを接続します

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/40.png"/></div>

ここでは、Bazaar で入手可能な [USB to CAN Analyzer Adapter with USB Cable](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html) を使用しています。

### USB-CAN アダプタの使用方法

- **ステップ 1:** 使用している USB-CAN アダプタ用のドライバをメーカーのウェブサイトからダウンロードしてインストールします。今回使用したアダプタの場合、ドライバは [こちら](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver) から入手できます

- **ステップ 2:** 一部のアダプタには、CAN デバイスと通信するために PC 用のソフトウェアも付属しています。今回使用したアダプタの場合、[こちら](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program) からダウンロードしてインストールしたソフトウェアを使用します

- **ステップ 3:** reServer Industrial 上でターミナルウィンドウを開き、CAN インターフェースを設定して有効にするために次のコマンドを実行します

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **ステップ 4:** ターミナルで **ifconfig** と入力すると、CAN インターフェースが有効になっていることがわかります

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **ステップ 5:** 事前にインストールした CAN ソフトウェアを開きます。この場合、使用している CAN アダプタに対応してインストールしたソフトウェアを開きます

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/></div>

- **ステップ 6:** USB-CAN アダプタを PC に接続し、Windows の検索バーで **Device Manager** を検索して開きます。すると、**Ports (COM & LPT)** の下に接続されたアダプタが表示されます。ここに表示されているシリアルポートをメモします。下図によると、シリアルポートは **COM9** です

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/></div>

- **ステップ 7:** CAN ソフトウェアを開き、**COM** セクションの横にある **Refresh** をクリックし、ドロップダウンメニューをクリックして接続されたアダプタに対応するシリアルポートを選択します。**COM bps** はデフォルトのままにして **Open** をクリックします

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/></div>

- **ステップ 8:** **Mode** と **CAN bps** はデフォルトのままにし、**Type** を **Standard frame** に変更して **Set and Start** をクリックします

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/></div>

- **ステップ 9:** reServer Industrial 上で、PC に CAN 信号を送信するために次のコマンドを実行します

```sh
cansend can0 123#abcdabcd
```

すると、下図のようにソフトウェア側で上記の信号が受信されていることがわかります

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/></div>

- **ステップ 10:** reServer Industrial 上で、PC からの CAN 信号を受信するのを待つために次のコマンドを実行します

```sh
candump can0 &
```

- **ステップ 11:** CAN ソフトウェア上で **Send a single frame** をクリックします

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/></div>

すると、reServer Industrial 側で次のように受信されていることがわかります

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

#### reTerminal DM との接続概要

[reTerminal DM](https://www.seeedstudio.com/reTerminal-DM-p-5616.html) をお持ちの場合、reTerminal DM にも CAN インターフェースがあるため、直接通信することができます。

以下の画像を参照して、reServer Industrial と reTerminal DM を CAN 経由で接続します

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/49.png"/></div>

### reTerminal DM の使用方法

- **ステップ 1:** reTerminal DM を使用する前に、[この wiki](https://wiki.seeedstudio.com/ja/reterminal-dm) を参照して reTerminal DM の使い方を確認します

- **ステップ 2:** reServer Industrial 上でターミナルウィンドウを開き、CAN インターフェースを設定して有効にするために次のコマンドを実行します

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **ステップ 3:** reTerminal DM 上でターミナルウィンドウを開き、CAN インターフェースを設定して有効にするために次のコマンドを実行します

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **ステップ 4:** reTerminal DM 上でターミナルウィンドウを開き、CAN インターフェースを設定して有効にするために次のコマンドを実行します

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **ステップ 5:** 両方のデバイスで **ifconfig** と入力すると、CAN インターフェースが有効になっていることがわかります

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **ステップ 6:** reTerminal DM 上で、reServer Industrial からの CAN 信号を受信するのを待つために次を実行します

```sh
candump can0 &
```

- **Step 7:** reServer Industrial 上で、次のコマンドを実行して reTerminal Industrial へ CAN 信号を送信します

```sh
cansend can0 123#abcdabcd
```

すると、次のように reTerminal DM によって受信されているのが確認できます

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

- **Step 8:** **Step 6 と Step 7** を、デバイスを入れ替えて繰り返します。reTerminal DM を使用して CAN 信号を送信し、reServer Industrial を使用して受信します

## RS232/ RS422/ RS485 インターフェース

reServer Industrial には RS232、RS422、RS485 通信プロトコルをサポートする DB9 コネクタが搭載されており、オンボードの DIP スイッチパネルで異なるインターフェースオプションを切り替えることができます

DIP スイッチパネルは次のようになっています：

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/21.jpg"/></div>

そして、以下の表は DIP スイッチの位置に基づく各モードを説明しています

<table>
  <thead>
    <tr>
      <th />
      <th>MODE_0</th>
      <th>MODE_1</th>
      <th>MODE_2</th>
      <th>モード</th>
      <th>ステータス</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/52.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>RS-422 フルデュプレックス</td>
      <td>1T/1R RS-422</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/53.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>純粋な RS-232</td>
      <td>3T/5R RS-232</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/54.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>RS-485 ハーフデュプレックス</td>
      <td>1T/1R RS-485 ,TX ENABLE Low Active</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/55.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>1</td>
      <td>1</td>
      <td>RS-485 ハーフデュプレックス</td>
      <td>1T/1R RS-485 ,TX ENABLE High Active</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/56.png" alt="Image" width={200} height={127} /></td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>RS-422 フルデュプレックス</td>
      <td>終端抵抗付き 1T/1R RS-422</td>
    </tr>
    <tr>
      <td rowSpan={3}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/57.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={3}>1</td>
      <td rowSpan={3}>0</td>
      <td rowSpan={3}>1</td>
      <td rowSpan={3}>純粋な RS-232</td>
      <td>RS485 と共存する 1T/1R RS-232</td>
    </tr>
    <tr>
      <td>バスを必要としないアプリケーション</td>
    </tr>
    <tr>
      <td>スイッチ IC（特殊用途向け）。</td>
    </tr>
    <tr>
      <td rowSpan={2}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/58.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>0</td>
      <td rowSpan={2}>RS-485 ハーフデュプレックス</td>
      <td>終端抵抗付き 1T/1R RS-485</td>
    </tr>
    <tr>
      <td>TX ENABLE Low Active</td>
    </tr>
    <tr>
      <td rowSpan={2}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/59.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td>低消費電力</td>
      <td rowSpan={2}>すべての I/O ピンは高インピーダンスです</td>
    </tr>
    <tr>
      <td>シャットダウン</td>
    </tr>
  </tbody>
</table>

:::note
出荷時点では、スイッチのデフォルトモードは工場設定で 010 の RS485 に設定されています
:::

上記の表は DIP スイッチパネルの最初の 3 つのスイッチを考慮しています。ただし、4 番目のスイッチはスルーレートの切り替えを担当しており、これはデータレートに直接関係します

<table>
  <thead>
    <tr>
      <th />
      <th>ステータス</th>
      <th>注記</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/62.png" alt="Image" width={200} height={127} /></td>
      <td>1</td>
      <td>SLEW= Vcc<br />この RS232/RS422/RS485 マルチプロトコルトランシーバは通信速度を次のように制限します：<br />RS-232: 最大データレートは 1.5Mbps<br />RS-485/RS-422; 最大データレートは 10Mbps<br />実際の最大データレートは使用する Jetson SOM に依存します</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/63.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>SLEW = GND<br />RS-232: 最大データレートは 250Kbps<br />RS-485/RS-422: 最大データレートは 250kbps</td>
    </tr>
  </tbody>
</table>

ここではインターフェースをテストするために、USB から RS232、RS485、RS422 へのアダプタを使用します。そのため先に進む前に、PC にシリアルターミナルアプリケーションをインストールする必要があります。ここではセットアップと使用が簡単な **Putty** のインストールを推奨します。

- **Step 1:** [このウェブサイト](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) にアクセスし、PC のアーキテクチャに応じた Putty をダウンロードします

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/60.png"/></div>

ここでは、使用している PC（X86 Windows 64-bit マシン）に合わせて Putty を選択しました

- **Step 2:** ダウンロードしたセットアップファイルを開き、プロンプトに従ってアプリケーションをインストールします

### 一般的な接続概要

接続を行う際は、DB9 コネクタのピン番号と以下の表を参照してください

<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/61.png"/></div>

<table>
  <thead>
    <tr>
      <th>モード</th>
      <th>001/101</th>
      <th>000/100</th>
      <th>010/011/110</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PIN</td>
      <td>RS232</td>
      <td>RS422</td>
      <td>RS485</td>
    </tr>
    <tr>
      <td>1</td>
      <td />
      <td>TXD-</td>
      <td>Data-</td>
    </tr>
    <tr>
      <td>2</td>
      <td>RXD</td>
      <td>TXD+</td>
      <td>Data+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>TXD</td>
      <td>RXD+</td>
      <td />
    </tr>
    <tr>
      <td>4</td>
      <td />
      <td>RXD-</td>
      <td />
    </tr>
    <tr>
      <td>5</td>
      <td>GND</td>
      <td>GND</td>
      <td>GND</td>
    </tr>
    <tr>
      <td>6</td>
      <td />
      <td />
      <td />
    </tr>
    <tr>
      <td>7</td>
      <td>RTS</td>
      <td />
      <td />
    </tr>
    <tr>
      <td>8</td>
      <td>CTS</td>
      <td />
      <td />
    </tr>
    <tr>
      <td>9</td>
      <td />
      <td />
      <td />
    </tr>
  </tbody>
</table>

### RS232 接続概要

ここでは USB から RS232 へのアダプタを使用してインターフェースをテストできます。テストには [UGREEN USB to RS232 Adapter](https://www.amazon.com/UGREEN-Converter-Adapter-Chipset-Windows/dp/B00QUZY4UG?th=1) を使用しました。

- **Step 1:** ボードの電源を切ります

- **Step 2:** ここでは DIP スイッチの設定に 2 つのオプションがあります。001 モードまたは 101 モードのいずれかです。各モードのスイッチ位置は以下のとおりです

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/64.png"/></div>

- **Step 3:** USB から RS232 へのアダプタを DB9 コネクタに接続します

- **Step 4:** もう一方の端を PC の USB ポートのいずれかに接続します

- **Step 5:** ボードの電源を入れます

### RS232 の使用方法

- **Step 1:** 使用しているアダプタ用のドライバをインストールする必要がある場合があります。または Windows が自動的にドライバをインストールする場合もあります。Windows の検索で **Device Manager** と入力してデバイスマネージャーを開き、接続されたアダプタが COM デバイスとして表示されているか確認します。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/67.jpg"/></div>

- **Step 2:** アダプタが表示されない場合は、使用しているアダプタに応じてドライバをインストールする必要があります。これらのドライバは一般的にメーカーのウェブサイトで入手できます。ここで使用しているアダプタの場合は、[このページ](https://www.ugreen.com/pages/download) にアクセスし、型番として **20201** を検索して、該当するドライバをダウンロードします

- **Step 3:** PC 上で Putty を開き、**Terminal** セクションを選択して、次のように設定します

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **Step 4:** **Session** を選択し、**Coonection type** で **Serial** を選択し、**Device Manager** に表示されているシリアルポート番号を設定し、Speed はデフォルト（9600）のままにして **Open** をクリックします

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/71.jpg"/></div>

- **Step 4:** reServer Industrial のターミナルウィンドウで、次のコマンドを入力して reServer Industrial から PC へ信号を送信します

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS232 message from reServer Industrial" > /dev/ttyTHS0
```

すると、このメッセージが Putty 上に表示されます

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/72.jpg"/></div>

- **Step 5:** reTerminal Industrial のターミナルウィンドウで、次のコマンドを入力して PC からの信号を待ち受けます

```sh
sudo cat /dev/ttyTHS0
```

- **Step 6:** Putty 上で任意の文字を入力し、**ENTER** を押すと、その内容が reServer Industrial のターミナルウィンドウに表示されます

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/73.png"/></div>

### RS422 接続概要

ここでは USB から RS422 へのアダプタを使用してインターフェースをテストできます。テストには [DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) を使用しました。

- **ステップ 1:** ボードの電源を切ります

- **ステップ 2:** ここでは DIP スイッチを設定するための 2 つのオプションがあります。000 モードまたは 100 モードのいずれかです。各モードのスイッチ位置は以下のように示されています

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/65.png"/></div>

- **ステップ 3:** 下図のようにジャンパーワイヤーを使用して USB-RS422 アダプタを DB9 コネクタに接続します。ここでは上記で紹介したアダプタを接続しています

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/74.png"/></div>

- **ステップ 4:** もう一方の端を PC の USB ポートのいずれかに接続します

- **ステップ 5:** ボードの電源を入れます

### RS422 の使用方法

- **ステップ 1:** 使用しているアダプタ用のドライバをインストールする必要がある場合がありますが、Windows が自動的にドライバをインストールすることもあります。Windows の検索で **Device Manager** と入力してデバイスマネージャーを開き、接続されたアダプタが COM デバイスとして表示されているか確認します。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **ステップ 2:** アダプタが表示されない場合は、使用しているアダプタに応じてドライバをインストールする必要があります。これらのドライバは一般的にメーカーのウェブサイトで見つけることができます。ここで使用しているアダプタ用のドライバは [this page](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485) から入手できます

- **ステップ 3:** PC で Putty を開き、**Terminal** セクションを選択して、次のように設定します

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **ステップ 4:** **Session** を選択し、**Coonection type** の下で **Serial** を選択し、**Device Manager** に表示されているシリアルポート番号を設定し、Speed はデフォルト（9600）のままにして **Open** をクリックします

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **ステップ 4:** reServer Industrial のターミナルウィンドウで、reServer Industrial から PC へ信号を送信するために次のコマンドを入力します

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS422 message from reComputer Industrial" > /dev/ttyTHS0
```

すると、Putty 上に次のメッセージが表示されます

- **ステップ 5:** reTerminal Industrial のターミナルウィンドウで、PC からの信号を待ち受けるために次のコマンドを入力します

```sh
sudo cat /dev/ttyTHS0
```

- **ステップ 6:** Putty 上で任意の文字を入力し、**ENTER** を押すと、その内容が reServer Industrial のターミナルウィンドウに表示されます

### RS485 接続概要

ここでは USB-RS422 アダプタを使用してインターフェースをテストできます。テストには [DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) を使用しました。

- **ステップ 1:** ボードの電源を切ります

- **ステップ 2:** ここでは DIP スイッチを設定するための 3 つのオプションがあります。010 モード、011 モード、または 110 モードのいずれかです。各モードのスイッチ位置は以下のように示されています

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/66.png"/></div>

- **ステップ 3:** 下図のようにジャンパーワイヤーを使用して USB-RS422 アダプタを DB9 コネクタに接続します。ここでは上記で紹介したアダプタを接続しています

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/77.png"/></div>

- **ステップ 4:** もう一方の端を PC の USB ポートのいずれかに接続します

- **ステップ 5:** ボードの電源を入れます

### RS485 の使用方法

- **ステップ 1:** 使用しているアダプタ用のドライバをインストールする必要がある場合がありますが、Windows が自動的にドライバをインストールすることもあります。Windows の検索で **Device Manager** と入力してデバイスマネージャーを開き、接続されたアダプタが COM デバイスとして表示されているか確認します。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **ステップ 2:** アダプタが表示されない場合は、使用しているアダプタに応じてドライバをインストールする必要があります。これらのドライバは一般的にメーカーのウェブサイトで見つけることができます。ここで使用しているアダプタ用のドライバは [this page](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485) から入手できます

- **ステップ 3:** PC で Putty を開き、**Terminal** セクションを選択して、次のように設定します

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **ステップ 4:** **Session** を選択し、**Coonection type** の下で **Serial** を選択し、**Device Manager** に表示されているシリアルポート番号を設定し、Speed はデフォルト（9600）のままにして **Open** をクリックします

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **ステップ 4:** reServer Industrial のターミナルウィンドウで、reServer Industrial から PC へ信号を送信するために次のコマンドを入力します

```sh
sudo su 
cd /sys/class/gpio 
echo 460 > export 
cd PR.04
echo out > direction
echo 0 > value
echo "RS485 message from reServer Industrial" > /dev/ttyTHS0
```

すると、Putty 上に次のメッセージが表示されます

- **ステップ 5:** reTerminal Industrial のターミナルウィンドウで、PC からの信号を待ち受けるために次のコマンドを入力します

```sh
sudo su
cd /sys/class/gpio
echo 460 > export
cd PR.04
echo out > direction
echo 1 > value
cat /dev/ttyTHS0
```

- **ステップ 6:** Putty 上で任意の文字を入力し、**ENTER** を押すと、その内容が reServer Industrial のターミナルウィンドウに表示されます

## USB

reServer Industrial にはオンボードに 3 つの USB3.2 コネクタが搭載されており、次の機能があります：

- 二段重ねの USB コネクタでは、上下の USB ポートが電流制限 IC を共有しており、合計電源供給能力は最大出力電流 2.1A（単独でも 2.1A）です。2.1A を超えると過電流保護状態に入ります。
- 二段重ねの USB コネクタの隣にある単一の USB コネクタは、合計電源供給能力が最大出力電流 2.1A です。2.1A を超えると過電流保護状態に入ります。
- Orin NX モジュールには 3 つの USB3.2 が搭載されていますが、そのうち 1 つだけが reServer Industrial で使用され、3 系統に分岐されています。（USB3.1 TYPE-A x2 - J4 および USB3.1 TYPE-A
x1 -J3)。
- USB ホストのみをサポートし、デバイスモードはサポートしません
- 5V 2.1A を供給
- ホットスワップ対応

### 使用方法

接続された USB フラッシュドライブで簡単なベンチマークを行う方法を説明します

- **ステップ 1:** 以下のコマンドを実行して書き込み速度を確認します

```sh
sudo dd if=/dev/zero of=/dev/$1 bs=100M count=10 conv=fdatasync
```

- **ステップ 2:** 以下のコマンドを実行して読み取り速度を確認します。書き込み速度用の上記コマンドを実行した後に実行するようにしてください。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/dev/$1 of=/dev/null bs=100M count=10
```

### 設定可能な LED

下図のように、ボード上には緑色の LED が 1 つあります。デフォルトでは、デバイスが正常に動作していることを示す LED として機能します。ただし、この LED はシステムから ON および OFF するようにプログラムすることもできます

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/22.jpg"/></div>

### 使用方法

- **ステップ 1:** 緑色の LED にアクセスするために、ターミナルウィンドウで次のコマンドを入力します

```sh
sudo -i
cd /sys/class/gpio
echo 329 > export 
cd PCC.01
echo out > direction 
```

- **ステップ 2:** LED を OFF にします

```sh
echo 0 > value 
```

- **ステップ 3:** LED を ON にします

```sh
echo 1 > value 
```

LED の使用が終わったら、次のコマンドを実行できます

```sh
cd ..
echo 329 > unexport
```

## システムパフォーマンスの監視

システムコンポーネントの温度を監視し、次のようなその他のシステム情報を確認するために **jetson stats** アプリケーションを使用できます

- CPU、GPU、RAM の使用率を表示
- 電源モードの変更
- 最大クロックに設定
- JetPack 情報の確認

- **ステップ 1:** reServer Industrial のターミナルウィンドウで、次のコマンドを入力します

```sh
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```

- **ステップ 2:** ボードを再起動します

```sh
sudo reboot
```

- **ステップ 3:** ターミナルで次のコマンドを入力します

```sh
jtop
```

すると **jtop** アプリケーションが次のように起動します

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/30.png"/></div>

- **ステップ 4:** ここではアプリケーションのさまざまなページを切り替えて、すべての機能を確認できます！

## TPM

reServer Industrial には、外部 TPM モジュールを接続するための TPM インターフェースが搭載されています。ここでは Infineon SLB9670 ベースの TPM2.0 モジュールでテストしました。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/24.jpg"/></div>

### 接続概要

下図のように TPM モジュールを TPM コネクタに接続します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/27.jpg"/></div>

### 使用方法

TPM モジュールが正しくロードされているかどうかを確認するために、以下のコマンドを実行します

```sh
sudo dmesg | grep TPM
ls /dev/tpm* -l
```

すると、次のような出力が表示されます

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/116.png"/></div>

## reServer Industrial の最大パフォーマンス

reServer Industrial で最大パフォーマンスを有効にしたい場合は、以下の手順に従ってください

- **ステップ 1:** 最大電力モードを有効にするために、以下のコマンドを入力します

```sh
sudo nvpmodel -m 0
```

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/35.jpg"/></div>

ここでボードを再起動するために **YES** と入力するよう求められます  

- **ステップ 2:** ボードの起動が完了したら、CPU クロックを最大周波数に設定するために次のコマンドを入力します

```sh
sudo jetson_clocks
```

## GPIO テーブル

reServer Industrial の GPIO テーブルにアクセスして、すべてのピンマッピングに慣れることができます。

ターミナル内で次のコマンドを実行してアクセスします

```sh
sudo cat /sys/kernel/debug/gpio
```

そして、次のような出力が表示されます

```sh
gpiochip2: GPIOs 300-315, parent: i2c/1-0021, 1-0021, can sleep:
 gpio-300 (wl_dis              |gpio_xten_pin@0     ) out hi
 gpio-301 (hst_wake_wl         |gpio_xten_pin@1     ) out hi
 gpio-302 (wl_wake_hst         |gpio_xten_pin@2     ) out hi ACTIVE LOW
 gpio-303 (bt_dis              |gpio_xten_pin@3     ) out hi
 gpio-304 (hst_wake_bt         )
 gpio-305 (bt_wake_hst         )
 gpio-306 (spi0_rst_3v3        |gpio_xten_pin@6     ) out lo ACTIVE LOW
 gpio-307 (gpio_pin7           |gpio_xten_pin@7     ) out lo ACTIVE LOW
 gpio-308 (can_120R_en         )
 gpio-309 (M2B_PCIe_rst        )
 gpio-310 (USB_HUB_rst         |gpio_xten_pin@10    ) out hi
 gpio-311 (PCIe_ETH_rst        )
 gpio-312 (M2B_WOWWAN          )
 gpio-313 (M2B_DPR_3V3         )
 gpio-314 (SIM_MUX_SEL         )
 gpio-315 (gpio_pin15          )

gpiochip1: GPIOs 316-347, parent: platform/c2f0000.gpio, tegra234-gpio-aon:
 gpio-316 (PAA.00              )
 gpio-317 (PAA.01              )
 gpio-318 (PAA.02              )
 gpio-319 (PAA.03              )
 gpio-320 (PAA.04              )
 gpio-321 (PAA.05              |fixed-regulators:reg) out hi
 gpio-322 (PAA.06              )
 gpio-323 (PAA.07              )
 gpio-324 (PBB.00              )
 gpio-325 (PBB.01              )
 gpio-326 (PBB.02              )
 gpio-327 (PBB.03              )
 gpio-328 (PCC.00              )
 gpio-329 (PCC.01              )
 gpio-330 (PCC.02              )
 gpio-331 (PCC.03              |mux                 ) out hi
 gpio-332 (PCC.04              )
 gpio-333 (PCC.05              )
 gpio-334 (PCC.06              )
 gpio-335 (PCC.07              )
 gpio-336 (PDD.00              )
 gpio-337 (PDD.01              )
 gpio-338 (PDD.02              )
 gpio-339 (PEE.00              )
 gpio-340 (PEE.01              )
 gpio-341 (PEE.02              )
 gpio-342 (PEE.03              )
 gpio-343 (PEE.04              |power-key           ) in  hi IRQ ACTIVE LOW
 gpio-344 (PEE.05              )
 gpio-345 (PEE.06              )
 gpio-346 (PEE.07              )
 gpio-347 (PGG.00              )
gpiochip0: GPIOs 348-511, parent: platform/2200000.gpio, tegra234-gpio:
 gpio-348 (PA.00               |fixed-regulators:reg) out lo
 gpio-349 (PA.01               )
 gpio-350 (PA.02               )
 gpio-351 (PA.03               )
 gpio-352 (PA.04               )
 gpio-353 (PA.05               )
 gpio-354 (PA.06               )
 gpio-355 (PA.07               )
 gpio-356 (PB.00               )
 gpio-357 (PC.00               )
 gpio-358 (PC.01               )
 gpio-359 (PC.02               )
 gpio-360 (PC.03               )
 gpio-361 (PC.04               )
 gpio-362 (PC.05               )
 gpio-363 (PC.06               )
 gpio-364 (PC.07               )
 gpio-365 (PD.00               )
 gpio-366 (PD.01               )
 gpio-367 (PD.02               )
 gpio-368 (PD.03               )
 gpio-369 (PE.00               )
 gpio-370 (PE.01               )
 gpio-371 (PE.02               )
 gpio-372 (PE.03               )
 gpio-373 (PE.04               )
 gpio-374 (PE.05               )
 gpio-375 (PE.06               )
 gpio-376 (PE.07               )
 gpio-377 (PF.00               )
 gpio-378 (PF.01               )
 gpio-379 (PF.02               )
 gpio-380 (PF.03               )
 gpio-381 (PF.04               )
 gpio-382 (PF.05               )
 gpio-383 (PG.00               |force-recovery      ) in  hi IRQ ACTIVE LOW
 gpio-384 (PG.01               )
 gpio-385 (PG.02               )
 gpio-386 (PG.03               )
 gpio-387 (PG.04               )
 gpio-388 (PG.05               )
 gpio-389 (PG.06               )
 gpio-390 (PG.07               |cd                  ) in  lo IRQ
 gpio-391 (PH.00               )
 gpio-392 (PH.01               )
 gpio-393 (PH.02               )
 gpio-394 (PH.03               )
 gpio-395 (PH.04               )
 gpio-396 (PH.05               )
 gpio-397 (PH.06               )
 gpio-398 (PH.07               )
 gpio-399 (PI.00               )
 gpio-400 (PI.01               )
 gpio-401 (PI.02               )
 gpio-402 (PI.03               )
 gpio-403 (PI.04               )
 gpio-404 (PI.05               )
 gpio-405 (PI.06               )
 gpio-406 (PJ.00               )
 gpio-407 (PJ.01               )
 gpio-408 (PJ.02               )
 gpio-409 (PJ.03               )
 gpio-410 (PJ.04               )
 gpio-411 (PJ.05               )
 gpio-412 (PK.00               )
 gpio-413 (PK.01               )
 gpio-414 (PK.02               )
 gpio-415 (PK.03               )
 gpio-416 (PK.04               )
 gpio-417 (PK.05               )
 gpio-418 (PK.06               )
 gpio-419 (PK.07               )
 gpio-420 (PL.00               )
 gpio-421 (PL.01               )
 gpio-422 (PL.02               |nvidia,pex-wake     ) in  hi ACTIVE LOW
 gpio-423 (PL.03               )
 gpio-424 (PM.00               )
 gpio-425 (PM.01               )
 gpio-426 (PM.02               )
 gpio-427 (PM.03               )
 gpio-428 (PM.04               )
 gpio-429 (PM.05               )
 gpio-430 (PM.06               )
 gpio-431 (PM.07               )
 gpio-432 (PN.00               )
 gpio-433 (PN.01               )
 gpio-434 (PN.02               )
 gpio-435 (PN.03               )
 gpio-436 (PN.04               )
 gpio-437 (PN.05               )
 gpio-438 (PN.06               )
 gpio-439 (PN.07               )
 gpio-440 (PP.00               )
 gpio-441 (PP.01               )
 gpio-442 (PP.02               )
 gpio-443 (PP.03               )
 gpio-444 (PP.04               )
 gpio-445 (PP.05               )
 gpio-446 (PP.06               )
 gpio-447 (PP.07               )
 gpio-448 (PQ.00               )
 gpio-449 (PQ.01               )
 gpio-450 (PQ.02               )
 gpio-451 (PQ.03               )
 gpio-452 (PQ.04               )
 gpio-453 (PQ.05               )
 gpio-454 (PQ.06               )
 gpio-455 (PQ.07               )
 gpio-456 (PR.00               )
 gpio-457 (PR.01               )
 gpio-458 (PR.02               )
 gpio-459 (PR.03               )
 gpio-460 (PR.04               )
 gpio-461 (PR.05               )
 gpio-462 (PX.00               )
 gpio-463 (PX.01               )
 gpio-464 (PX.02               )
 gpio-465 (PX.03               )
 gpio-466 (PX.04               )
 gpio-467 (PX.05               )
 gpio-468 (PX.06               )
 gpio-469 (PX.07               )
 gpio-470 (PY.00               )
 gpio-471 (PY.01               )
 gpio-472 (PY.02               )
 gpio-473 (PY.03               )
 gpio-474 (PY.04               )
 gpio-475 (PY.05               )
 gpio-476 (PY.06               )
 gpio-477 (PY.07               )
 gpio-478 (PZ.00               )
 gpio-479 (PZ.01               |vbus                ) in  hi IRQ ACTIVE LOW
 gpio-480 (PZ.02               )
 gpio-481 (PZ.03               )
 gpio-482 (PZ.04               )
 gpio-483 (PZ.05               )
 gpio-484 (PZ.06               |cs_gpio             ) out lo
 gpio-485 (PZ.07               )
 gpio-486 (PAC.00              )
 gpio-487 (PAC.01              )
 gpio-488 (PAC.02              )
 gpio-489 (PAC.03              )
 gpio-490 (PAC.04              )
 gpio-491 (PAC.05              )
 gpio-492 (PAC.06              )
 gpio-493 (PAC.07              )
 gpio-494 (PAD.00              )
 gpio-495 (PAD.01              )
 gpio-496 (PAD.02              )
 gpio-497 (PAD.03              )
 gpio-498 (PAE.00              )
 gpio-499 (PAE.01              )
 gpio-500 (PAF.00              )
 gpio-501 (PAF.01              )
 gpio-502 (PAF.02              )
 gpio-503 (PAF.03              )
 gpio-504 (PAG.00              )
 gpio-505 (PAG.01              )
 gpio-506 (PAG.02              )
 gpio-507 (PAG.03              )
 gpio-508 (PAG.04              )
 gpio-509 (PAG.05              )
 gpio-510 (PAG.06              )
 gpio-511 (PAG.07              )
```

## リソース

(リンクを変更してください)

- [reServer Industrial データシート](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Datasheet.pdf)
- [reServer Industrial リファレンスガイド](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Reference-Guide.pdf)
- [NVIDIA Jetson デバイスおよびキャリアボードの比較](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [reServer Industrial 3D ファイル](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-3D.stp)

## 技術サポート

遠慮なく、私たちの[フォーラム](https://forum.seeedstudio.com/)に問題を投稿してください。

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
