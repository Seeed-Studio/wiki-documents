---
description: reServer 工業用ハードウェアインターフェースの使用方法
title: reServer 工業用ハードウェアインターフェースの使用方法
keywords:
- reServer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reserver_industrial_hardware_interface_usage
last_update:
  date: 05/15/2025
  author: Lakshantha
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# ハードウェアとインターフェースの使用方法

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/2.jpg"/></div>


<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/3.jpg"/></div>


reServer Industrial ボード上のすべてのハードウェアとインターフェースの使用方法について詳しく知りたい場合は、以下の Wiki セクションを参照することをお勧めします。

reServer Industrial は、2つの 2.5インチ SATA HDD/SSD ドライブベイを備えており、ビデオ分析アプリケーションで数百のローカルビデオ映像を簡単に保存できます。また、5つの RJ-45 イーサネットポート、1つの RS232/422/485、4つの絶縁 DI/DO、1つの CAN、4つの USB3.1 を含む複数の接続オプションを提供します。ファンレス設計と多用途な取り付けオプションにより、-20℃から60℃までの範囲での展開が可能で、より過酷な環境や重い負荷に最適です。

reServer Industrial はパッシブヒートシンクとファンレス設計を備えており、厳しい環境での使用に最適です。パッシブヒートシンクは、ファンを必要とせず効率的な冷却を可能にし、ほこりやその他の汚染物質による部品故障のリスクを軽減します。ファンレス設計は、騒音レベルと消費電力を削減し、騒音に敏感な環境での使用に適しており、エネルギーコストを最小限に抑えます。

reServer Industrial は 5つの RJ45 GbE ポートを備えており、そのうち4つは PoE PSE ポートで、IPカメラなどのデバイスにイーサネット経由で電力を供給します。これにより、別途電源を用意する必要がなくなり、電源コンセントが容易に利用できない場所でネットワークデバイスを展開するのが簡単になります。残りの GbE ポートはネットワークスイッチやルーターに接続するために使用され、ネットワーク上の他のデバイスとの通信やインターネットへのアクセスを可能にします。

- **ファンレスコンパクトエッジAIサーバー:** NVIDIA Jetson™ Orin Nano/Orin NX モジュールを搭載し、AI性能は20 TOPSから100 TOPSまで対応。温度範囲は -20 ~ 60°C、0.7m/s の気流で動作。
- **マルチストリーム処理:** 5つの GbE RJ45（うち4つは802.3af PSE対応）、リアルタイム処理で複数のストリームを処理。
- **拡張可能なストレージ:** 2つの 2.5インチ SATA HDD/SSD ドライブベイに加え、NVMe SSD 用の M.2 2280 ソケットを搭載。
- **工業用インターフェース:** COMポート、DI/DOポート、CANポート、USB 3.1、オプションの TPM2.0 モジュールを含む。
- **ハイブリッド接続:** Nano SIMカードスロットを使用して、5G/4G/LTE/LoRaWAN®（モジュールはオプション）をサポート。
- **認証:** FCC、CE、UKCA、ROHS、KC

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
</a></div>


## reServer Industrial の分解

まず最初に、すべてのインターフェースにアクセスするために外部エンクロージャを分解することをお勧めします。詳細については [このドキュメント](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Assembly-Guide.pdf) を参照してください。 

## ギガビットイーサネットコネクタ

reServer Industrialには10/100/1000Mbps仕様のイーサネットポートが5つあり、そのうち4つはPSE 802.3 af 15 Wに対応しており、これらのポート（LAN1-LAN4）に直接PoEカメラを接続することができます。これらはPCIe to Ethernet（LAN7430-I/Y9X）モジュールを介して接続されています。ただし、左端のイーサネットポート（LAN0）はインターネット接続用にルーターに接続するためだけに使用されます。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reServer-Industrial/5.jpg"/></div>

各イーサネットポートには2つのLED（緑と黄色）があり、以下を示します：

- 緑色LED：1000Mネットワークに接続されている場合のみ点灯
- 黄色LED：ネットワークのアクティビティステータスを表示

### 使用方法

- PoEカメラを接続する前に、4つのイーサネットポートのPoE機能を有効にする必要があります。以下の手順で有効にしてください：

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

### 物理ネットワークIPをeth番号にバインドする
  **インターフェースeth0からeth3はPoE用に指定されており、eth3は特にPoE4として参照されます。**

  各PoEインターフェースに異なるIPアドレスを設定する必要がある場合は、以下の手順に従ってください：

  **ステップ1**: PoEをreServer Industrialデバイスに接続します。例えば、eth3を設定する場合、eth3の名前をPOE3に設定します。

  ```bash
  sudo nmcli connection add type ethernet ifname eth4 con-name POE3
  ```

  **ステップ2**: POE3のIPアドレスを**192.168.6.6**に設定します。IPアドレスは実際の使用状況に応じてカスタマイズできます。
  ```bash
  sudo nmcli connection modify POE3 ipv4.addresses 192.168.6.6/24
  ```

  **ステップ3**: POE3のIPv4アドレスを手動設定に変更します。

  ```bash
  sudo nmcli connection modify POE3 ipv4.method manual
  ```

  **ステップ4**: 接続を開始します。
  ```bash
  sudo nmcli connection up POE3
  ```

## SATAコネクタ

reServer Industrialは2つのSATA 2.5インチHDD/SSDをサポートしており、SATAデータおよび電源コネクタが付属しています。以下の手順でHDD/SSDを接続できます。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/23.jpg"/></div>

### 使用方法

システムが起動した後、以下のコマンドで接続されたSATAドライブを確認できます。

```sh
lsblk
```

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/28.png"/></div>

## RTC

reServer IndustrialはRTCバッテリーに接続するための2つの異なる方法を備えています。

### 接続概要

- 方法1:

**3V CR1220コイン型電池**をボード上のRTCソケットに接続します。以下の図のように、電池の**正極（+）**が上向きになるようにしてください。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/6.jpg"/></div>

- 方法2:

**3V CR2302コイン型電池（JSTコネクタ付き）**をボード上の2ピン1.25mm JSTソケットに接続します。以下の図を参照してください。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/7.jpg"/></div>

### 使用方法

- **ステップ1:** 上記の方法でRTCバッテリーを接続します。

- **ステップ2:** reServer Industrialを起動します。

- **ステップ3:** Ubuntuデスクトップで、右上のドロップダウンメニューをクリックし、`設定 > 日付と時刻`に移動します。イーサネットケーブルを介してネットワークに接続し、**自動日付と時刻**を選択して日付/時刻を自動的に取得します。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::note
イーサネット経由でインターネットに接続していない場合は、ここで日付/時刻を手動で設定できます。
:::

- **ステップ4:** ターミナルウィンドウを開き、以下のコマンドを実行してハードウェアクロックの時刻を確認します。

```sh
sudo hwclock
```

以下のような出力が表示されますが、これは正しい日付/時刻ではありません。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/14.png"/></div>

- **ステップ5:** 以下のコマンドを入力して、ハードウェアクロックの時刻を現在のシステムクロックの時刻に変更します。

```sh
sudo hwclock --systohc
```

- **ステップ6:** イーサネットケーブルを取り外し、インターネットから時刻を取得しないようにしてボードを再起動します。

```sh
sudo reboot
```

- **ステップ7:** ハードウェアクロックの時刻を確認し、デバイスの電源がオフになっても日付/時刻が保持されていることを確認します。

次に、各起動時にハードウェアクロックからシステムクロックを常に同期するスクリプトを作成します。

- **ステップ8:** 任意のテキストエディタを使用して新しいシェルスクリプトを作成します。ここでは**vi**テキストエディタを使用します。

```sh
sudo vi /usr/bin/hwtosys.sh 
```

- **ステップ9:** **i**キーを押して挿入モードに入り、以下の内容をファイル内にコピー＆ペーストします。

```sh
#!/bin/bash

sudo hwclock --hctosys
```

- **ステップ10:** スクリプトを実行可能にします。

```sh
sudo chmod +x /usr/bin/hwtosys.sh 
```

- **ステップ11:** systemdファイルを作成します。

```sh
sudo nano /lib/systemd/system/hwtosys.service 
```

- **ステップ12:** ファイル内に以下を追加します。

```sh
[Unit]
Description=Change system clock from hardware clock

[Service]
ExecStart=/usr/bin/hwtosys.sh

[Install]
WantedBy=multi-user.target
```

- **ステップ13:** systemctlデーモンをリロードします。

```sh
sudo systemctl daemon-reload 
```

- **ステップ14:** 新しく作成したサービスを起動時に有効化し、サービスを開始します。

```sh
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

- **ステップ15:** スクリプトがsystemdサービスとして正常に動作していることを確認します。

```sh
sudo systemctl status hwtosys.service
```

- **ステップ16:** ボードを再起動し、システムクロックがハードウェアクロックと同期していることを確認します。

## M.2 Key M

出荷時、reServer Industrial には M.2 Key M スロットに接続された 128GB SSD が含まれており、JetPack システムがプリインストールされています。

### 接続概要

付属の SSD を取り外して新しい SSD を取り付けたい場合は、以下の手順に従ってください。ここでは、[128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)、[256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)、[512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)、および [1TB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html) の Seeed SSD のみを使用することを推奨します。これらの SSD のみがテストされています。また、このインターフェースは PCIe Gen4.0 SSD をサポートしています。

- **ステップ 1:** プリインストールされた SSD のネジを取り外します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/8.jpg"/></div>

- **ステップ 2:** SSD コネクタからスライドさせて SSD を取り外します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/9.jpg"/></div>

- **ステップ 3:** 新しい SSD を挿入し、ネジを締め直します

### 使用方法

接続された SSD の簡単なベンチマークを行う方法を説明します。

- **ステップ 1:** 以下のコマンドを実行して書き込み速度を確認します

```sh
sudo dd if=/dev/zero of=/home/$USER/test bs=1M count=512 conv=fdatasync
```

- **ステップ 2:** 以下のコマンドを実行して読み取り速度を確認します。このコマンドは、上記の書き込み速度確認コマンドを実行した後に実行してください。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/$USER/test of=/dev/null bs=1M count=512
```

### mini PCIe

reServer Industrial には mini PCIe コネクタが搭載されており、4G および LoRa モジュールをサポートしています。ただし、4G モジュールまたは LoRa モジュールのいずれか一方のみを接続できます。一部の 4G モジュールには GPS 機能が組み込まれています。これについても説明します。

#### 4G モジュール接続概要

現在、このボードは EC25EUXGA および EC20CEHCLG モジュールをサポートしています。

- **ステップ 1:** ボードがすでにオンになっている場合は電源をオフにします

- **ステップ 2:** 付属のスタンドオフを取り外します。このスタンドオフは M.2 Key B インターフェースを使用する場合にのみ必要です

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/10.jpg"/></div>

- **ステップ 3:** 4G モジュールを mini PCIe スロットにスライドさせ、プリインストールされたネジを使用して 2 つの穴に固定します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/11.jpg"/></div>

- **ステップ 4:** アンテナコネクタの **MAIN** とラベル付けされた部分にアンテナを接続します。この際、IPEX コネクタを使用する必要があります

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/12.jpg"/></div>

- **ステップ 5:** 4G 対応の nano SIM カードをボードの SIM カードスロットに挿入します。SIM カードの金属面が上向きになるようにし、内部のスプリングに当たってロックされるまで完全に挿入してください。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/13.jpg"/></div>

:::note
SIM カードを取り外す場合は、カードを押し込んで内部のスプリングに当てると、スロットから出てきます。
:::

- **ステップ 6:** **J8 (Control and UART) ヘッダー** の **SIM_MUX_SEL** と **GND** ピンの間にジャンパーを追加します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/14.jpg"/></div>

- **ステップ 7:** ボードの電源をオンにします

#### 4G モジュール使用方法 - ダイヤルテスト

EC25 モジュールを使用する場合、モジュールは自動的に起動し、使用可能になります。ただし、EC20 モジュールを使用する場合は、モジュールをリセットする必要があります。

- **ステップ 1:** EC25 モジュールを使用している場合、このステップはスキップできます。ただし、EC20 モジュールを使用している場合は、以下のコマンドを入力して 4G モジュールをリセットする GPIO309 ピンにアクセスします。

```sh
sudo su 
cd /sys/class/gpio
echo 309 > export 
cd gpio309
echo out > direction
echo 1 > value
```

EC25 モジュールの場合、ボードが起動するとすぐに LED2 が緑色に点灯します。EC20 モジュールの場合は、上記の手順でモジュールをリセットした後に LED2 が緑色に点灯します。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/15.jpg"/></div>

- **ステップ 2:** minicom をインストールします

```sh
sudo apt update
sudo apt install minicom -y
```

- **ステップ 3:** 接続された 4G モジュールのシリアルコンソールに入り、AT コマンドを入力して 4G モジュールと対話します

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **ステップ 4:** **Ctrl+A** を押してから **E** を押してローカルエコーをオンにします

- **ステップ 5:** **"AT"** コマンドを入力して Enter を押します。"OK" と表示されれば、4G モジュールは正常に動作しています。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/></div>

- **ステップ 6:** **"ATI"** コマンドを入力してモジュール情報を確認します

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/></div>

- **ステップ 7:** モジュールをテストするために、以下のコマンドを入力して別の電話番号に発信します

```sh
ATD<phone_number>;
```

以下のような出力が表示されます。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/24.jpg"/></div>

入力した電話番号が通話を受信できる場合、モジュールは期待通りに動作しています。

#### 4G モジュール使用方法 - インターネット接続

##### EC25 モジュール

EC25 モジュールを使用している場合、以下の手順に従ってください。

- **ステップ 1:** 上記の手順（4G モジュール使用方法 - ダイヤルテストセクション）で説明したように 4G モジュールのシリアルコンソールを開いた後、以下のコマンドを実行してインターネットに接続します。ここで **YOUR_APN** をネットワークプロバイダーの APN に置き換えてください。

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/89.jpg"/></div>

接続が成功すると、上記の画像のように **OK** と出力されます。

- **ステップ 2:** 以下のコマンドを実行して4Gモジュールを再起動します

```sh
AT+CFUN=1,1
```

これにより、シリアル端末で4Gモジュールへの接続が失われます。

- **ステップ 3:** **CTRL + A**を押してから**Q**を押して**minicom**を閉じます。

- **ステップ 4:** **ifconfig**を入力すると、**usb0**インターフェースにIPアドレスが表示されます。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/93.png"/></div>

- **ステップ 5:** 以下のようにウェブサイトにpingを送信して、インターネット接続があるか確認できます。

```sh
ping -I usb0 www.bing.com -c 5
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/94.png"/></div>

##### EC20モジュール

EC20モジュールを使用している場合は、以下の手順に従ってください。

- **ステップ 1:** EC20モジュール用に前のセクション（4Gモジュール使用 - テストダイヤルセクション）で説明したように4Gモジュールをリセットしている場合、このステップはスキップできます。ただし、まだリセットしていない場合は、今すぐ実行してください。

- **ステップ 2:** 4Gモジュールのシリアルコンソールに入り、以下のコマンドを入力してECMモードに設定します。

```sh
AT+QCFG="usbnet",1
```

- **ステップ 3:** 4Gモジュールをリセットします。

- **ステップ 4:** 4Gモジュールコンソール内で以下のコマンドを実行してインターネットに接続します。ここで**YOUR_APN**をネットワークプロバイダーのAPNに置き換えてください。

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

- **ステップ 6:** **ifconfig**を入力すると、**usb1**インターフェースにIPアドレスが表示されます。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/90.jpg"/></div>

- **ステップ 7:** 以下のようにURLにpingを送信して、インターネット接続があるか確認できます。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/92.png"/></div>

#### 4Gモジュール使用 - GPSへの接続

一部の4GモジュールにはGPSモジュールが組み込まれています。EC25EUXGAおよびEC20CEHCLGモジュールには4Gモジュールが含まれています。

- **ステップ 1:** 以下のコマンドを実行してGPSモジュールを再起動します。

```sh
echo -e "AT+QGPS=1\r\n" > /dev/ttyUSB2
echo -e "AT+QGPS=0\r\n" > /dev/ttyUSB2
```

- **ステップ 2:** 以下のコマンドを実行してGPSデータを取得します。

```sh
sudo cat /dev/ttyUSB1
```

以下のような出力が表示されます。

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

#### LoRaモジュール接続概要

現在、このボードはWM1302 SPIモジュールをサポートしています。[USバージョン](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html)または[EUバージョン](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html)を使用できます。これらはBazaarで入手可能です。

- **ステップ 1:** ボードがすでにオンの場合は電源をオフにします。

- **ステップ 2:** LoRaモジュールをmini PCIeスロットに挿入し、事前に取り付けられているネジを使用してLoRaモジュールを2つの穴に固定します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/16.jpg"/></div>

- **ステップ 3:** アンテナコネクタにアンテナを接続します。ここではIPEXコネクタを使用する必要があります。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/17.jpg"/></div>

:::note
**SIM_MUX_SEL**と**GND**ピン間にジャンパーがないことを確認してください。このジャンパーは4Gモジュールを使用する場合のみ必要です。
:::

- **ステップ 4:** ボードの電源をオンにします。

#### LoRaモジュール使用 - LoRa RFのテスト

LoRaモジュールが接続されると、モジュール上の緑色と青色のLEDが点灯します。

- **ステップ 1:** 以下のコマンドを入力して、LoRaモジュールがシステムによって検出されているか確認します。

```sh
i2cdetect -r -y 7
```

以下の出力が表示されれば、モジュールはシステムによって検出されています。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/29.png"/></div>

- **ステップ 2:** 以下のコマンドを入力してLoRa信号送信ツールをコンパイルおよびビルドします。

```sh
git clone https://github.com/lakshanthad/sx1302_hal
cd sx1302_hal
make
cd libloragw
cp ../tools/reset_lgw.sh .
sudo ./test_loragw_hal_tx -r 1250 -m LORA -f 867.1 -s 12 -b 125 -n 1000 -z 100 --dig 3 --pa 0 --pwid 13 -d /dev/spidev2.0
```

以下の結果が表示され、LoRaモジュールのLEDが赤色に変われば、モジュールがRF信号を正常に送信していることを意味します。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/78.jpg"/></div>

送信を停止するには、キーボードで**CTRL + C**を押します。

#### LoRaモジュール使用 - TTNへの接続

次に、TTN（The Things Network）に接続し、reServer IndustrialをTTN LoRaWANゲートウェイとして使用します。

- **ステップ 1:** 以下を入力してパケットフォワーダーを準備します。
```sh
cd ..
cd packet_forwarder
cp ../tools/reset_lgw.sh .
```

- **ステップ 2:** 使用しているLoRaモジュールに応じて以下を実行します。ここではSPI US915バージョンをテストしました。

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

ただし、他のモジュール用のコマンドは以下の通りです。

```sh
# USB 915
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB

# SPI EU868
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# USB EU868
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

上記のコマンドを実行すると、以下の出力が表示され、最後の行に**コンセントレーターEUI**情報が表示されます。この情報は後でTTNゲートウェイを設定する際に使用するため、保存してください。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/79.jpg"/></div>

- **ステップ 3:** [このURL](https://console.cloud.thethings.network)にアクセスしてTTNコンソールに入り、希望する地域を選択します。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/80.png"/></div>

- **ステップ 4:** すでにアカウントをお持ちの場合はログインしてください。アカウントをお持ちでない場合は新規登録を行ってください。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/81.png"/></div>

- **ステップ 5:** **Go to gateways** をクリックします。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/82.png"/></div>

- **ステップ 6:** **+ Register gateway** をクリックします。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/83.png"/></div>

- **ステップ 7:** 以前取得した **Concentrator EUI** を **Gateway EUI** セクションに入力し、**Confirm** をクリックします。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/84.jpg"/></div>

- **ステップ 8:** 使用している LoRa モジュールに応じて **Frequency plan** を入力します。ここでは US915 バージョンのモジュールを使用しているため、**United States 902-928 MHz, FSB 2 (used by TTN)** を選択しました。その後、**Register gateway** をクリックします。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/85.jpg"/></div>

:::note
**Gateway ID** は自動的に入力されています。ただし、任意の値に変更することも可能です。**Gateway name** は必須ではありませんが、必要に応じて入力することもできます。
:::

- **ステップ 9:** ゲートウェイのメインホームページで **Gateway Server Address** をメモしてください。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/86.jpg"/></div>

- **ステップ 9:** reTerminal Industrial 上で、**lora_pkt_fwd** コマンドとともに使用した **global_conf_json** ファイルを編集します。以下のオプションを変更する必要があります：

  - gateway_ID: デバイスから取得した Concentrator EUI
  - server_address: TTN から取得した Gateway Server Address
  - serv_port_up: 1700
  - serv_port_down: 1700

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/87.png"/></div>

- **ステップ 10:** パケットフォワーダーを再実行します。

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

以下の出力が表示された場合、デバイスが TTN に正常に接続されたことを意味します。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/88.jpg"/></div>

## M.2 Key B

reServer Industrial には、4G および 5G モジュールをサポートする M.2 Key B コネクタが搭載されています。現在、**SIM8202G-M2 5G モジュール**でテストされています。

### 5G モジュール接続概要

- **ステップ 1:** ボードがすでに電源オンの場合は電源をオフにします。

- **ステップ 2:** スタンドオフが所定の位置にあることを確認し、スタンドオフの上部ネジを取り外します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/18.jpg"/></div>

- **ステップ 2:** 5G モジュールを M.2 Key B スロットに差し込み、スタンドオフネジを締めて 5G モジュールを固定します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/19.jpg"/></div>

- **ステップ 3:** モジュールのアンテナコネクタに 4 本のアンテナを接続します。この際、IPEX 4 コネクタを使用する必要があります。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/20.jpg"/></div>

- **ステップ 4:** 5G 対応の nano SIM カードをボードの SIM カードスロットに挿入します。SIM カードの金属面が下向きになるように挿入してください。カードを内部のスプリングに当たるまで完全に挿入し、ロックされることを確認します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/13.jpg"/></div>

:::note
SIM カードを取り外す場合は、カードを押し込んで内部スプリングに当てると、スロットから出てきます。
:::

- **ステップ 5:** ボードの電源をオンにします。

### 5G モジュール使用 - 発信テスト

SIM8202G-M2 5G モジュールを使用する場合、モジュールは自動的に起動しません。まず、いくつかの GPIO を切り替えて起動する必要があります。

- **ステップ 1:** 以下のコマンドを入力して 5G モジュールを起動します。

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

上記を実行すると、LED2 が緑色に点灯します。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/15.jpg"/></div>

- **ステップ 2:** minicom をインストールします。

```sh
sudo apt update
sudo apt install minicom -y
```

- **ステップ 3:** 接続された 5G モジュールのシリアルコンソールに入り、AT コマンドを入力して 5G モジュールと対話します。

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **ステップ 4:** コマンド **"AT"** を入力して Enter を押します。「OK」と表示された場合、5G モジュールは正常に動作しています。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/107.png"/></div>

- **ステップ 6:** コマンド **"ATI"** を入力してモジュール情報を確認します。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/108.png"/></div>

- **ステップ 7:** モジュールをテストするために、以下のコマンドを入力して別の電話番号に発信します。

```sh
ATD<phone_number>;
```

以下の出力が表示されます。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/109.png"/></div>

### 5G モジュール使用 - インターネット接続

近日公開予定

## DI/ DO

reServer Industrialは、4つのデジタル入力チャネルと4つのデジタル出力チャネルをサポートしており、すべてが光学的に絶縁されています。これにより、メインボードを電圧スパイクやその他の電気的障害から効果的に保護します。同じコネクタにはCANインターフェースもあり、これについては後ほどこのWikiで説明します。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/37.png"/></div>

### DI/ DO ピン割り当て表

<table>
  <thead>
    <tr>
      <th>タイプ</th>
      <th>ラベル名</th>
      <th>回路図信号</th>
      <th>モジュールピン番号</th>
      <th>BGA番号</th>
      <th>GPIO番号</th>
      <th>電圧/電流制限</th>
      <th>備考</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>入力</td>
      <td>DI1</td>
      <td>DI_1_GPIO01</td>
      <td>118</td>
      <td>PQ.05</td>
      <td>453</td>
      <td rowSpan={4}>合計12V/ 20mA</td>
      <td rowSpan={4}>12Vデジタル入力、グラウンド信号は<br />GND_DI（ピン2/4/6）に接続する必要があります</td>
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
      <td rowSpan={4}>出力</td>
      <td>DO1</td>
      <td>DO_1_GPIO</td>
      <td>193</td>
      <td>PI.00</td>
      <td>399</td>
      <td rowSpan={4}>ピンごとに40V/40mA負荷</td>
      <td rowSpan={4}>デジタル出力、最大耐圧40V、グラウンド信号は<br />GND_DO（ピン8/10）に接続する必要があります</td>
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
      <td rowSpan={2}>標準的な差動信号を持つCANバス、<br />グラウンド信号はGND_ISO（ピン12）に接続する必要があります</td>
    </tr>
    <tr>
      <td />
      <td>CL</td>
    </tr>
    <tr>
      <td>グラウンド</td>
      <td>GND_DI</td>
      <td colSpan={5} rowSpan={3}>/</td>
      <td>12Vデジタル入力の基準グラウンド信号であり、<br />DIの戻り経路でもあります</td>
    </tr>
    <tr>
      <td />
      <td>GND_DO</td>
      <td>デジタル出力の基準グラウンド信号であり、DOの戻り経路でもあります</td>
    </tr>
    <tr>
      <td />
      <td>CG</td>
      <td>CANの基準グラウンド信号</td>
    </tr>
  </tbody>
</table>

### DIの接続概要

以下の図に従ってDIの接続を行うことができます。DIラインには直列に抵抗を追加することをお勧めします。ここでは、4.7kΩの抵抗をDI1ピンに接続してテストしました。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/38.png"/></div>

### DIの使用方法

DIラインに12Vの電圧を入力する必要があります。これにより入力として検出されます。

- **ステップ1:** 上記のように**DI1ピン**に接続し、**12V**を入力します。

- **ステップ2:** 次のコマンドでDI1のGPIOを開きます。

```sh
sudo su 
cd /sys/class/gpio
echo 453 > export 
cd PQ.05
```

:::note
**DI/ DO ピン割り当て表**を参照して、GPIO番号とBGA番号を確認できます。上記の例では、DI1ピンのGPIO番号は453、BGA番号はPQ.05です。
:::

- **ステップ3:** 次のコマンドを実行してステータスを確認します。

```sh
cat value
```

出力が0の場合、12Vの入力があります。出力が1の場合、入力電圧がありません。

### DOの接続概要

以下の図に従ってDOの接続を行うことができます。DOラインには直列に抵抗を追加することをお勧めします。ここでは、4.7kΩの抵抗を使用してテストしました。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/39.png"/></div>

### DOの使用方法

上記の図に示されているように負荷を接続する必要があります。最も簡単なテスト方法は、マルチメーターを接続することです。または、最大40V以下の電圧を必要とする負荷を接続します。

- **ステップ1:** 上記のように**DO1ピン**に接続し、**最大40V**を入力します。

- **ステップ2:** 次のコマンドでDO1のGPIOを開きます。

```sh
sudo su 
cd /sys/class/gpio
echo 399 > export 
cd PI.00
echo out > direction
```

:::note
**DI/ DO ピン割り当て表**を参照して、GPIO番号とBGA番号を確認できます。上記の例では、DO1ピンのGPIO番号は399、BGA番号はPI.00です。
:::

- **ステップ3:** 次のコマンドを実行してピンをオンにします。

```sh
echo 1 > value
```

負荷がオンになるか、マルチメーターが入力した電圧を出力している場合、テストは正常に機能しています。

## CAN

reServer Industrial は、5MbpsのCAN FD（Controller Area Network Flexible Data-Rate）プロトコルをサポートするCANインターフェースを備えています。このCANインターフェースは容量性絶縁を使用して絶縁されており、優れたEMI保護を提供し、産業および自動化アプリケーションでの信頼性の高い通信を保証します。120Ωの終端抵抗がデフォルトで取り付けられており、この抵抗はGPIOを使用してON/OFFを切り替えることができます。

注意: CANインターフェースは絶縁電源を使用しているため、CANインターフェースに接続される外部デバイスのグランド信号はCGピンに接続する必要があります。

### USB to CANアダプターを使用した接続概要

CANバスをテストおよびインターフェースするには、以下の図のようにUSB to CANアダプターをボードのCANコネクタに接続します。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/40.png"/></div>

ここでは、[USB to CAN Analyzer Adapter with USB Cable](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)（Seeed StudioのBazaarで入手可能）を使用しています。

### USB to CANアダプターの使用方法

- **ステップ 1:** 使用しているUSB to CANアダプターのドライバをメーカーのウェブサイトからダウンロードしてインストールします。今回使用したアダプターの場合、ドライバは[こちら](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver)から入手できます。

- **ステップ 2:** 一部のアダプターには、CANデバイスと通信するためのPC用ソフトウェアが付属しています。今回使用したアダプターの場合、ソフトウェアは[こちら](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)からダウンロードしてインストールしました。

- **ステップ 3:** reServer Industrialでターミナルウィンドウを開き、以下のコマンドを実行してCANインターフェースを設定および有効化します。

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **ステップ 4:** ターミナルで**ifconfig**と入力すると、CANインターフェースが有効になっていることが確認できます。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **ステップ 5:** 事前にインストールしたCANソフトウェアを開きます。この場合、使用しているCANアダプターに対応したソフトウェアを開きます。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/></div>

- **ステップ 6:** USB to CANアダプターをPCに接続し、Windowsの検索バーで「デバイスマネージャー」を検索して開きます。ここで、接続されたアダプターが**ポート（COM & LPT）**の下に表示されます。ここに記載されているシリアルポートをメモします。以下の画像では、シリアルポートは**COM9**です。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/></div>

- **ステップ 7:** CANソフトウェアを開き、**COM**セクションの横にある**Refresh**をクリックし、ドロップダウンメニューから接続されたアダプターに対応するシリアルポートを選択します。**COM bps**はデフォルトのままにして、**Open**をクリックします。

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/></div>

- **ステップ 8:** **Mode**と**CAN bps**をデフォルトのままにし、**Type**を**Standard frame**に変更して、**Set and Start**をクリックします。

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/></div>

- **ステップ 9:** reServer Industrialで以下のコマンドを実行して、PCにCAN信号を送信します。

```sh
cansend can0 123#abcdabcd
```

すると、以下のようにソフトウェアで信号が受信されます。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/></div>

- **ステップ 10:** reServer Industrialで以下のコマンドを実行して、PCからのCAN信号を受信する準備をします。

```sh
candump can0 &
```

- **ステップ 11:** CANソフトウェアで**Send a single frame**をクリックします。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/></div>

すると、以下のようにreServer Industrialで信号が受信されます。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

#### reTerminal DMとの接続概要

[reTerminal DM](https://www.seeedstudio.com/reTerminal-DM-p-5616.html)をお持ちの場合、直接通信が可能です。reTerminal DMにもCANインターフェースが搭載されています。

以下の画像を参照して、reServer IndustrialとreTerminal DMをCANで接続します。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/49.png"/></div>

### reTerminal DMの使用方法

- **ステップ 1:** reTerminal DMを使用する前に、[このWiki](https://wiki.seeedstudio.com/ja/reterminal-dm)を参照してreTerminal DMのセットアップを行ってください。

- **ステップ 2:** reServer Industrialでターミナルウィンドウを開き、以下のコマンドを実行してCANインターフェースを設定および有効化します。

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **ステップ 3:** reTerminal DMでターミナルウィンドウを開き、以下のコマンドを実行してCANインターフェースを設定および有効化します。

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **ステップ 4:** 両デバイスで**ifconfig**を入力すると、CANインターフェースが有効になっていることが確認できます。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **ステップ 5:** reTerminal DMで以下を実行して、reServer IndustrialからのCAN信号を受信する準備をします。

```sh
candump can0 &
```

- **ステップ 6:** reServer Industrialで以下のコマンドを実行して、reTerminal DMにCAN信号を送信します。

```sh
cansend can0 123#abcdabcd
```

次に、reTerminal DM によって受信された内容が以下のように表示されます。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

- **ステップ 8:** **ステップ 6 とステップ 7**を繰り返しますが、デバイスを入れ替えます。reTerminal DM を使用して CAN 信号を送信し、reServer Industrial を使用してそれを受信します。

## RS232/RS422/RS485 インターフェース

reServer Industrial には、RS232、RS422、および RS485 通信プロトコルをサポートする DB9 コネクタが搭載されており、オンボードの DIP スイッチパネルで異なるインターフェースオプションを切り替えることができます。

以下に DIP スイッチパネルを示します：

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/21.jpg"/></div>

以下の表は、DIP スイッチの位置に基づく異なるモードを説明しています。

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
      <td>純 RS-232</td>
      <td>3T/5R RS-232</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/54.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>RS-485 ハーフデュプレックス</td>
      <td>1T/1R RS-485, TX ENABLE Low Active</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/55.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>1</td>
      <td>1</td>
      <td>RS-485 ハーフデュプレックス</td>
      <td>1T/1R RS-485, TX ENABLE High Active</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/56.png" alt="Image" width={200} height={127} /></td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>RS-422 フルデュプレックス</td>
      <td>1T/1R RS-422 終端抵抗付き</td>
    </tr>
    <tr>
      <td rowSpan={3}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/57.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={3}>1</td>
      <td rowSpan={3}>0</td>
      <td rowSpan={3}>1</td>
      <td rowSpan={3}>純 RS-232</td>
      <td>1T/1R RS-232 が RS485 と共存</td>
    </tr>
    <tr>
      <td>バスを必要としないアプリケーション</td>
    </tr>
    <tr>
      <td>スイッチ IC（特殊用途向け）</td>
    </tr>
    <tr>
      <td rowSpan={2}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/58.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>0</td>
      <td rowSpan={2}>RS-485 ハーフデュプレックス</td>
      <td>1T/1R RS-485 終端抵抗付き</td>
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
      <td rowSpan={2}>すべての I/O ピンは高インピーダンス</td>
    </tr>
    <tr>
      <td>シャットダウン</td>
    </tr>
  </tbody>
</table>

:::note
出荷時のデフォルト設定では、DIP スイッチは工場出荷時に 010 の RS485 に設定されています。
:::

上記の表は、DIP スイッチパネルの最初の 3 つのスイッチを考慮しています。ただし、4 番目のスイッチはスルーレートを切り替える役割を果たし、これはデータレートに直接関連しています。

<table>
  <thead>
    <tr>
      <th />
      <th>ステータス</th>
      <th>備考</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/62.png" alt="Image" width={200} height={127} /></td>
      <td>1</td>
      <td>SLEW= Vcc<br />この RS232/RS422/RS485 マルチプロトコルトランシーバーは通信速度を以下のように制限します：<br />RS-232: 最大データレートは 1.5Mbps<br />RS-485/RS-422: 最大データレートは 10Mbps<br />実際の最大データレートは使用される Jetson SOM に依存します。</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/63.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>SLEW = GND<br />RS-232: 最大データレートは 250Kbps<br />RS-485/RS-422: 最大データレートは 250kbps</td>
    </tr>
  </tbody>
</table>

ここでは、USB から RS232、RS485、RS422 へのアダプターを使用してインターフェースをテストします。そのため、次に進む前に、PC にシリアルターミナルアプリケーションをインストールする必要があります。ここでは、セットアップが簡単で使いやすい **Putty** をインストールすることをお勧めします。

- **ステップ 1:** [このウェブサイト](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) にアクセスし、PC のアーキテクチャに応じて Putty をダウンロードします。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/60.png"/></div>

ここでは、使用した PC（X86 Windows 64 ビットマシン）に応じて Putty を選択しました。

- **ステップ 2:** ダウンロードしたセットアップを開き、プロンプトに従ってアプリケーションをインストールします。

### 一般的な接続概要

DB9 コネクタのピン番号と接続を行うための表を参照してください。

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
      <td>ピン</td>
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

ここでは、USB から RS232 へのアダプターを使用してインターフェースをテストできます。テストには [UGREEN USB to RS232 Adapter](https://www.amazon.com/UGREEN-Converter-Adapter-Chipset-Windows/dp/B00QUZY4UG?th=1) を使用しました。

- **ステップ 1:** ボードの電源をオフにします。

- **ステップ 2:** DIP スイッチを設定するには 2 つのオプションがあります。001 モードまたは 101 モードのいずれかです。各モードのスイッチ位置は以下の通りです。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/64.png"/></div>

- **ステップ 3:** USB から RS232 へのアダプターを DB9 コネクタに接続します。

- **ステップ 4:** アダプターのもう一方の端を PC の USB ポートのいずれかに接続します。

- **ステップ 5:** ボードの電源をオンにします。

### RS232 の使用方法

- **ステップ 1:** 使用しているアダプターのドライバーをインストールする必要がある場合があります。Windows が自動的にドライバーをインストールすることもあります。Windows の検索で **Device Manager** と入力してデバイスマネージャーを開き、接続されたアダプターが COM デバイスとして表示されているか確認します。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/67.jpg"/></div>

- **ステップ 2:** アダプターが表示されない場合は、使用しているアダプターに応じたドライバーをインストールする必要があります。これらのドライバーは通常、製造元のウェブサイトで見つけることができます。使用しているアダプターの場合は、[このページ](https://www.ugreen.com/pages/download)で **20201** をモデル番号として検索し、適切なドライバーをダウンロードしてください。

- **ステップ 3:** PC 上で Putty を開き、**Terminal** セクションを選択して以下を設定します。

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **ステップ 4:** **Session** を選択し、**Connection type** で **Serial** を選択します。**Device Manager** に表示されているシリアルポート番号を設定し、速度はデフォルト (9600) のままにして **Open** をクリックします。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/71.jpg"/></div>

- **ステップ 5:** reServer Industrial のターミナルウィンドウで以下を入力し、reServer Industrial から PC に信号を送信します。

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS232 message from reServer Industrial" > /dev/ttyTHS0
```

これで、このメッセージが Putty に表示されます。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/72.jpg"/></div>

- **ステップ 6:** reTerminal Industrial のターミナルウィンドウで以下を入力し、PC からの信号を受信する準備をします。

```sh
sudo cat /dev/ttyTHS0
```

- **ステップ 7:** Putty 上で任意の文字を入力し、**ENTER** を押すと、それが reServer Industrial のターミナルウィンドウに表示されます。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/73.png"/></div>

### RS422 接続概要

ここでは、USB から RS422 へのアダプターを使用してインターフェースをテストできます。テストには [DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) を使用しました。

- **ステップ 1:** ボードの電源をオフにします。

- **ステップ 2:** DIP スイッチを設定するには 2 つのオプションがあります。000 モードまたは 100 モードのいずれかです。各モードのスイッチ位置は以下の通りです。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/65.png"/></div>

- **ステップ 3:** ジャンパーワイヤーを使用して USB から RS422 へのアダプターを DB9 コネクタに接続します。以下に示すように、上記で言及したアダプターを接続しました。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/74.png"/></div>

- **ステップ 4:** アダプターのもう一方の端を PC の USB ポートのいずれかに接続します。

- **ステップ 5:** ボードの電源をオンにします。

### RS422 の使用方法

- **ステップ 1:** 使用しているアダプターのドライバーをインストールする必要がある場合があります。Windows が自動的にドライバーをインストールすることもあります。Windows の検索で **Device Manager** と入力してデバイスマネージャーを開き、接続されたアダプターが COM デバイスとして表示されているか確認します。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **ステップ 2:** アダプターが表示されない場合は、使用しているアダプターに応じたドライバーをインストールする必要があります。これらのドライバーは通常、製造元のウェブサイトで見つけることができます。使用しているアダプターの場合は、[このページ](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485) を参照してください。

- **ステップ 3:** PC 上で Putty を開き、**Terminal** セクションを選択して以下を設定します。

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **ステップ 4:** **Session** を選択し、**Connection type** で **Serial** を選択します。**Device Manager** に表示されているシリアルポート番号を設定し、速度はデフォルト (9600) のままにして **Open** をクリックします。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **ステップ 5:** reServer Industrial のターミナルウィンドウで以下を入力し、reServer Industrial から PC に信号を送信します。

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS422 message from reComputer Industrial" > /dev/ttyTHS0
```

これで、このメッセージが Putty に表示されます。

- **ステップ 6:** reTerminal Industrial のターミナルウィンドウで以下を入力し、PC からの信号を受信する準備をします。

```sh
sudo cat /dev/ttyTHS0
```

- **ステップ 7:** Putty 上で任意の文字を入力し、**ENTER** を押すと、それが reServer Industrial のターミナルウィンドウに表示されます。

### RS485 接続概要

ここでは、USB から RS422 へのアダプターを使用してインターフェースをテストできます。テストには [DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) を使用しました。

- **ステップ 1:** ボードの電源をオフにします。

- **ステップ 2:** ここでは、DIPスイッチを設定するための3つのオプションがあります。010モード、011モード、または110モードのいずれかです。各モードのスイッチ位置は以下の通りです。

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/66.png"/></div>

- **ステップ 3:** ジャンパーワイヤーを使用して、USBからRS422アダプターをDB9コネクタに接続します。以下の図のように接続してください。ここでは、上記で説明したアダプターを接続しています。

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/77.png"/></div>

- **ステップ 4:** もう一方の端をPCのUSBポートの1つに接続します。

- **ステップ 5:** ボードの電源を入れます。

### RS485の使用方法

- **ステップ 1:** 使用しているアダプターのドライバーをインストールする必要がある場合があります。もしくは、Windowsが自動的にドライバーをインストールします。Windowsの検索で**デバイスマネージャー**と入力してデバイスマネージャーを開き、接続されたアダプターがCOMデバイスとして表示されているか確認してください。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **ステップ 2:** アダプターが表示されない場合は、使用しているアダプターに応じたドライバーをインストールする必要があります。これらのドライバーは通常、製造元のウェブサイトで見つけることができます。使用しているアダプターの場合は、[このページ](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)をご覧ください。

- **ステップ 3:** PCでPuttyを開き、**Terminal**セクションを選択して以下を設定します。

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **ステップ 4:** **Session**を選択し、**Connection type**の下で**Serial**を選択します。**Device Manager**で確認したシリアルポート番号を設定し、速度はデフォルト（9600）のままにして**Open**をクリックします。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **ステップ 5:** reServer Industrialのターミナルウィンドウで以下を入力し、reServer IndustrialからPCに信号を送信します。

```sh
sudo su 
cd /sys/class/gpio 
echo 460 > export 
cd PR.04
echo out > direction
echo 0 > value
echo "RS485 message from reServer Industrial" > /dev/ttyTHS0
```

これで、このメッセージがPuttyに表示されます。

- **ステップ 6:** reTerminal Industrialのターミナルウィンドウで以下を入力し、PCからの信号を受信する準備をします。

```sh
sudo su
cd /sys/class/gpio
echo 460 > export
cd PR.04
echo out > direction
echo 1 > value
cat /dev/ttyTHS0
```

- **ステップ 7:** Puttyで任意の文字を入力し、**ENTER**を押すと、それがreServer Industrialのターミナルウィンドウに表示されます。

## USB

reServer Industrialには、オンボードに3つのUSB3.2コネクタがあり、以下の機能を備えています：
- デュアルスタックUSBコネクタでは、上部と下部のUSBポートが電流制限ICを共有しており、最大出力電流2.1Aの電源供給能力があります（単一でも2.1A）。2.1Aを超えると、過電流保護状態に入ります。
- デュアルスタックUSBコネクタの隣にある単一のUSBコネクタでは、最大出力電流2.1Aの電源供給能力があります。2.1Aを超えると、過電流保護状態に入ります。
- Orin NXモジュールには3つのUSB3.2が搭載されていますが、reServer Industrialではそのうち1つだけが使用され、3つに分岐されています（USB3.1 TYPE-A x2 - J4およびUSB3.1 TYPE-A x1 - J3）。
- USBホストのみをサポートし、デバイスモードはサポートしません。
- 5V 2.1Aを供給。
- ホットスワップ対応。

### 使用方法

接続されたUSBフラッシュドライブで簡単なベンチマークを行う方法を説明します。

- **ステップ 1:** 以下のコマンドを実行して書き込み速度を確認します。

```sh
sudo dd if=/dev/zero of=/dev/$1 bs=100M count=10 conv=fdatasync
```

- **ステップ 2:** 以下のコマンドを実行して読み取り速度を確認します。このコマンドは、上記の書き込み速度確認コマンドを実行した後に実行してください。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/dev/$1 of=/dev/null bs=100M count=10
```

### 設定可能なLED

ボード上には緑色のLEDが配置されており、以下の図のように表示されています。デフォルトでは、デバイスが正常に動作していることを示すLEDとして機能しています。ただし、このLEDをプログラムしてシステムによってON/OFFを切り替えることも可能です。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/22.jpg"/></div>

### 使用方法

- **ステップ 1:** 緑色のLEDにアクセスするために、ターミナルウィンドウで以下のコマンドを入力します。

```sh
sudo -i
cd /sys/class/gpio
echo 329 > export 
cd PCC.01
echo out > direction 
```

- **ステップ 2:** LEDをOFFにする。

```sh
echo 0 > value 
```

- **ステップ 3:** LEDをONにする。

```sh
echo 1 > value 
```

LEDの使用を終了した場合は、以下を実行してください。

```sh
cd ..
echo 329 > unexport
```

## システムパフォーマンスの監視

**jetson stats** アプリケーションを使用して、システムコンポーネントの温度を監視し、以下のようなその他のシステム詳細を確認できます。

- CPU、GPU、RAMの使用状況を表示
- 電力モードを変更
- 最大クロックに設定
- JetPack情報を確認

- **ステップ 1:** reServer Industrial のターミナルウィンドウで以下を入力してください。

```sh
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```

- **ステップ 2:** ボードを再起動します。

```sh
sudo reboot
```

- **ステップ 3:** ターミナルで以下を入力してください。

```sh
jtop
```

これで **jtop** アプリケーションが以下のように開きます。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/30.png"/></div>

- **ステップ 4:** アプリケーションの異なるページを循環し、すべての機能を探索してください！

## TPM

reServer Industrial には、外部TPMモジュールを接続するためのTPMインターフェースが付属しています。ここでは、Infineon SLB9670ベースのTPM2.0モジュールでテストを行いました。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/24.jpg"/></div>

### 接続概要

以下のようにTPMモジュールをTPMコネクタに接続してください。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/27.jpg"/></div>

### 使用方法

以下のコマンドを実行して、TPMモジュールが正しくロードされているか確認してください。

```sh
sudo dmesg | grep TPM
ls /dev/tpm* -l
```

以下のような出力が表示されます。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/116.png"/></div>

## reServer Industrial の最大パフォーマンス

reServer Industrial で最大パフォーマンスを有効にするには、以下の手順に従ってください。

- **ステップ 1:** 以下のコマンドを入力して最大電力モードを有効にします。

```sh
sudo nvpmodel -m 0
```

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/35.jpg"/></div>

ここで **YES** と入力してボードを再起動する必要があります。

- **ステップ 2:** ボードが起動したら、以下のコマンドを入力してCPUクロックを最大周波数に設定します。

```sh
sudo jetson_clocks
```

## GPIOテーブル

reServer Industrial のGPIOテーブルにアクセスして、すべてのピンマッピングを確認できます。

ターミナル内で以下を実行してください。

```sh
sudo cat /sys/kernel/debug/gpio
```

以下のような出力が表示されます。

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
- [NVIDIA Jetson デバイスとキャリアボードの比較](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [reServer Industrial 3D ファイル](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-3D.stp)

## 技術サポート

問題が発生した場合は、ぜひ私たちの[フォーラム](https://forum.seeedstudio.com/)に投稿してください。

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>