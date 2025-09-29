---
description: reServer Industrial ハードウェアインターフェース使用方法
title: reServer Industrial ハードウェアインターフェース使用方法
keywords:
- reServer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reserver_industrial_hardware_interface_usage
last_update:
  date: 09/22/2023
  author: Lakshantha
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ハードウェアとインターフェースの使用方法

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/2.jpg"/></div>

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/3.jpg"/></div>

reServer Industrial は 2x 2.5" SATA HDD/SSD ドライブベイを搭載し、ビデオ分析アプリケーションにおいて数百のローカルビデオ映像を簡単に保存できます。また、5つのRJ-45イーサネットポート、1つのRS232/422/485、4つの絶縁DI/DO、1つのCAN、4つのUSB3.1など、複数の接続オプションを提供します。ファンレス設計と多様な取り付けオプションにより、-20℃から60℃での展開が可能で、より過酷な環境とより重い負荷に最適です。

reServer Industrial はパッシブヒートシンクとファンレス設計を採用しており、要求の厳しい環境での使用に最適です。パッシブヒートシンクにより、ファンを必要とせずに効率的な冷却が可能で、ほこりやその他の汚染物質による部品故障のリスクを軽減します。ファンレス設計はまた、騒音レベルと消費電力を削減し、騒音に敏感な環境での使用に適しており、エネルギーコストを最小限に抑えます。

reServer industrial は 5つの RJ45 GbE ポートを持ち、そのうち4つは IP カメラなどのデバイスに Power over Ethernet を提供する PoE PSE ポートです。これにより、別の電源の必要性がなくなり、電源コンセントが容易に利用できない場所でのネットワークデバイスの展開が簡単になります。残りの GbE ポートは、ネットワークスイッチまたはルーターへの接続に使用され、ネットワーク上の他のデバイスとの通信とインターネットへのアクセスを可能にします。

- **ファンレスコンパクトエッジAIサーバー:** NVIDIA Jetson™ Orin Nano/Orin NX モジュールを搭載、20 TOPS から 100 TOPS の AI パフォーマンス、0.7m/s の気流で -20 ~ 60°C のより広い温度範囲
- **マルチストリーム処理:** 5× GbE RJ45（4つは 802.3af PSE 対応）、リアルタイム処理で複数のストリームを処理
- **拡張可能ストレージ:** 2.5" SATA HDD/SSD 用の2つのドライブベイ、さらに NVMe SSD 用の M.2 2280 ソケット
- **産業用インターフェース:** COM ポート、DI/DO ポート、CAN ポート、USB 3.1、およびオプションの TPM2.0 モジュールを含む
- **ハイブリッド接続:** Nano SIM カードスロット付きで 5G/4G/LTE/LoRaWAN®（モジュールはオプション）をサポート
- **認証:** FCC、CE、UKCA、ROHS、KC

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## reServer Industrial の分解

まず最初に、すべてのインターフェースにアクセスするために外側のエンクロージャを分解することをお勧めします。詳細については[このドキュメント](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Assembly-Guide.pdf)を参照してください。

## ギガビットイーサネットコネクタ

reServer Industrialには10/100/1000Mbps仕様のイーサネットポートが5つあり、そのうち4つはPSE 802.3 af 15W定格で、これらのポート（LAN1-LAN4）にPoEカメラを直接接続できます。これらはPCIeからイーサネット（LAN7430-I/Y9X）モジュール経由で接続されています。ただし、残りのイーサネットポート（LAN0）は左端にあり、インターネット接続用のルーターへの接続にのみ使用されます。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reServer-Industrial/5.jpg"/></div>

各イーサネットポートには2つのLED（緑と黄）があり、以下を示します

- 緑LED：1000Mネットワークに接続されている場合のみ点灯
- 黄LED：ネットワークアクティビティステータスを表示

### 使用方法

- PoEカメラを接続する前に、4つのイーサネットポートのPoE機能を有効にする必要があります。以下のように有効にしてください：

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

### 物理ネットワークIPをeth番号にバインド

  **インターフェースeth0からeth3はPoE用に指定されており、eth3は特にPoE4と呼ばれます。**

  各POEインターフェースに異なるIPアドレスを設定する必要がある場合は、以下の手順に従ってください：

  **ステップ1**：POEをreServer Industrialデバイスに接続します。例えば、eth3を設定するには、eth3の名前をPOE3に設定します。

  ```bash
  sudo nmcli connection add type ethernet ifname eth4 con-name POE3
  ```

  **ステップ2**: POE3のIPアドレスを**192.168.6.6**に設定します。IPアドレスは実際の使用状況に応じてカスタマイズできます。

  ```bash
  sudo nmcli connection modify POE3 ipv4.addresses 192.168.6.6/24
  ```

  **ステップ3**: POE3のIPv4アドレスを手動設定に設定します。

  ```bash
  sudo nmcli connection modify POE3 ipv4.method manual
  ```

  **ステップ4**: 接続を開始する

  ```bash
  sudo nmcli connection up POE3
  ```

## SATA コネクタ

reServer Industrial は 2 台の SATA 2.5" HDD/SSD をサポートし、SATA データコネクタと電源コネクタの両方を備えています。以下のように HDD/SSD を接続できます

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/23.jpg"/></div>

### 使用方法

システムが起動した後、接続された SATA ドライブを以下の方法で確認できます

```sh
lsblk
```

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/28.png"/></div>

## RTC

reServer Industrialには、RTCバッテリーを接続する2つの異なる方法が搭載されています

### 接続概要

- 方法1：

**3V CR1220コイン電池**を以下に示すようにボード上のRTCソケットに接続します。電池の**プラス（+）**端子が上向きになるようにしてください

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/6.jpg"/></div>

- 方法2：

**JSTコネクタ付き3V CR2302コイン電池**を以下に示すようにボード上の2ピン1.25mm JSTソケットに接続します

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/7.jpg"/></div>

### 使用方法

- **ステップ1：** 上記のようにRTCバッテリーを接続します

- **ステップ2：** reServer Industrialの電源を入れます

- **ステップ3：** Ubuntuデスクトップで、右上角のドロップダウンメニューをクリックし、`設定 > 日付と時刻`に移動し、イーサネットケーブル経由でネットワークに接続して**自動日付と時刻**を選択し、日付/時刻を自動的に取得します

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::note
イーサネット経由でインターネットに接続していない場合は、ここで手動で日付/時刻を設定できます
:::

- **ステップ4：** ターミナルウィンドウを開き、以下のコマンドを実行してハードウェアクロック時刻を確認します

```sh
sudo hwclock
```

以下のような出力が表示されますが、これは正しい日付/時刻ではありません

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/14.png"/></div>

- **ステップ 5:** 以下のコマンドを入力して、ハードウェアクロック時刻を現在のシステムクロック時刻に変更します

```sh
sudo hwclock --systohc
```

- **ステップ 6:** インターネットから時刻を取得しないようにするため、接続されているイーサネットケーブルをすべて取り外し、ボードを再起動します

```sh
sudo reboot
```

- **ステップ 7:** ハードウェアクロック時刻を確認して、デバイスの電源がオフになっても日付/時刻が同じままであることを確認する

次に、各起動時にハードウェアクロックからシステムクロックを常に同期するスクリプトを作成します。

- **ステップ 8:** お好みのテキストエディタを使用して新しいシェルスクリプトを作成する。ここでは **vi** テキストエディタを使用する

```sh
sudo vi /usr/bin/hwtosys.sh 
```

- **ステップ 9:** **i** を押して**挿入モード**に入り、ファイル内に以下の内容をコピー＆ペーストします

```sh
#!/bin/bash

sudo hwclock --hctosys
```

- **ステップ 10:** スクリプトを実行可能にする

```sh
sudo chmod +x /usr/bin/hwtosys.sh 
```

- **ステップ 11:** systemd ファイルを作成します

```sh
sudo nano /lib/systemd/system/hwtosys.service 
```

- **ステップ 12:** ファイル内に以下を追加してください

```sh
[Unit]
Description=Change system clock from hardware clock

[Service]
ExecStart=/usr/bin/hwtosys.sh

[Install]
WantedBy=multi-user.target
```

- **ステップ 13:** systemctl デーモンをリロードする

```sh
sudo systemctl daemon-reload 
```

- **ステップ 14:** 新しく作成したサービスを起動時に開始するように有効化し、サービスを開始します

```sh
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

- **ステップ 15:** スクリプトがsystemdサービスとして起動し実行されていることを確認する

```sh
sudo systemctl status hwtosys.service
```

- **ステップ 16:** ボードを再起動すると、システムクロックがハードウェアクロックと同期されていることが確認できます

## M.2 Key M

reServer Industrialには、M.2 Key Mスロットに接続された128GB SSDが標準で含まれており、JetPackシステムがプリインストールされています。

### 接続概要

付属のSSDを取り外して新しいものをインストールしたい場合は、以下の手順に従ってください。ここでは、[128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)、[256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)、[512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)、[1TB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)ストレージのSeeed SSDのみを推奨します。これらのSSDのみをテストしているためです。さらに、このインターフェースはPCIe Gen4.0 SSDをサポートしています。

- **ステップ 1:** プリインストールされたSSDのネジを取り外します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/8.jpg"/></div>

- **ステップ 2:** SSDコネクタから離すようにスライドしてSSDを取り外します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/9.jpg"/></div>

- **ステップ 3:** 新しいSSDを挿入し、ネジを締め直します

### 使用方法

接続されたSSDで簡単なベンチマークを実行する方法を説明します

- **ステップ 1:** 以下のコマンドを実行して書き込み速度を確認します

```sh
sudo dd if=/dev/zero of=/home/$USER/test bs=1M count=512 conv=fdatasync
```

- **ステップ 2:** 以下のコマンドを実行して読み取り速度を確認します。書き込み速度の上記コマンドを実行した後に、必ずこれを実行してください。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/$USER/test of=/dev/null bs=1M count=512
```

### mini PCIe

reServer Industrialには、4GおよびLoRaモジュールをサポートするmini PCIeコネクタが搭載されています。ただし、4GモジュールまたはLoRaモジュールのいずれか一方のみを同時に接続できます。一部の4GモジュールにはGPS機能が組み込まれています。これについても説明します。

#### 4Gモジュール接続概要

現在、このボードはEC25EUXGAおよびEC20CEHCLGモジュールをサポートしています。

- **ステップ1:** ボードが既に電源オンの場合は、電源をオフにします

- **ステップ2:** 付属のスタンドオフを取り外します。このスタンドオフは、M.2 Key Bインターフェースを使用する場合にのみ必要です

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/10.jpg"/></div>

- **ステップ3:** 4GモジュールをminiPCIeスロットにスライドして挿入し、事前に取り付けられているネジを使用して2つの穴にネジ止めし、4Gモジュールを固定します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/11.jpg"/></div>

- **ステップ4:** **MAIN**とラベル付けされたアンテナコネクタにアンテナを接続します。ここではIPEXコネクタを使用する必要があります

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/12.jpg"/></div>

- **ステップ5:** 4G対応のnano SIMカードをボード上のSIMカードスロットに挿入します。SIMカードの金色の面が上向きになるようにしてください。カードを奥まで挿入し、内部のスプリングに当たって跳ね返り、所定の位置にロックされるようにします。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/13.jpg"/></div>

:::note
SIMカードを取り外したい場合は、カードを押し込んで内部のスプリングに当て、SIMがスロットから出てくるようにします
:::

- **ステップ6:** **J8 (Control and UART) Header**の**SIM_MUX_SEL**と**GND**ピンの間にジャンパーを追加します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/14.jpg"/></div>

- **ステップ6:** ボードの電源をオンにします

#### 4Gモジュール使用方法 - テストダイヤル

EC25モジュールを使用する場合、モジュールは自動的に起動し、使用準備が整います。ただし、EC20モジュールを使用する場合は、動作させるためにモジュールをリセットする必要があります

- **ステップ1:** EC25モジュールを使用している場合は、このステップをスキップできます。ただし、EC20モジュールを使用している場合は、以下のコマンドを入力してGPIO309ピンにアクセスします。このピンは4Gモジュールのリセットを担当します

```sh
sudo su 
cd /sys/class/gpio
echo 309 > export 
cd gpio309
echo out > direction
echo 1 > value
```

EC25モジュールの場合、ボードが起動するとすぐにLED2が緑色に点灯します。EC20モジュールの場合、上記で説明したようにモジュールをリセットした後にLED2が緑色に点灯します

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/15.jpg"/></div>

- **ステップ 2:** minicomをインストールする

```sh
sudo apt update
sudo apt install minicom -y
```

- **ステップ 3:** 接続された4Gモジュールのシリアルコンソールに入り、ATコマンドを入力して4Gモジュールと対話できるようにします

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **ステップ 4:** **Ctrl+A** を押してから **E** を押してローカルエコーをオンにします

- **ステップ 5:** コマンド **"AT"** を入力してエンターを押します。レスポンスが "OK" と表示されれば、4Gモジュールが正常に動作しています

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/></div>

- **ステップ 6:** コマンド **"ATI"** を入力してモジュール情報を確認します

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/></div>

- **ステップ 7:** モジュールをテストするには、以下のコマンドを入力して別の電話番号に発信します

```sh
ATD<phone_number>;
```

そして、以下の出力が表示されます

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/24.jpg"/></div>

入力した電話番号に通話を受信できる場合、モジュールは期待通りに動作しています

#### 4Gモジュールの使用方法 - インターネットへの接続

##### EC25モジュール

EC25モジュールを使用している場合は、以下の手順に従ってください

- **ステップ1:** 上記で説明した4Gモジュールのシリアルコンソールを開いた後（4Gモジュールの使用方法 - テストダイヤル セクション）、以下のコマンドを実行してインターネットに接続します。ここで**YOUR_APN**をお使いのネットワークプロバイダーのAPNに置き換えてください

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/89.jpg"/></div>

接続が成功すると、上の画像で確認できるように **OK** が出力されるはずです

- **ステップ 2:** 以下を実行して4Gモジュールを再起動します

```sh
AT+CFUN=1,1
```

これで、シリアルターミナル上で4Gモジュールとの接続が失われます

- **ステップ 3:** **CTRL + A** を押してから **Q** を押して **minicom** を閉じます

- **ステップ 4:** **ifconfig** と入力すると、**usb0** インターフェースにIPアドレスが表示されます

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/93.png"/></div>

- **ステップ 5:** インターネット接続があるかどうかを確認するために、以下のようにWebサイトにpingを試すことができます

```sh
ping -I usb0 www.bing.com -c 5
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/94.png"/></div>

##### EC20 モジュール

EC20 モジュールを使用している場合は、以下の手順に従ってください

- **ステップ 1:** 前のセクション（4G モジュール使用方法 - テストダイヤルセクション）で EC20 モジュール用に説明されているように、すでに 4G モジュールをリセットしている場合は、このステップをスキップできます。ただし、まだ実行していない場合は、今すぐ実行してください

- **ステップ 2:** 4G モジュールのシリアルコンソールに入り、以下のコマンドを入力して ECM モードに設定します

```sh
AT+QCFG="usbnet",1
```

- **ステップ 3:** 4Gモジュールをリセットする

- **ステップ 4:** 4Gモジュールコンソール内で、以下のコマンドを実行してインターネットに接続します。ここで **YOUR_APN** をあなたのネットワークプロバイダーのAPNに置き換えてください

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

- **ステップ 6:** **ifconfig** と入力すると、**usb1** インターフェースに IP アドレスが表示されます

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/90.jpg"/></div>

- **ステップ 7:** 以下のように URL に ping を試して、インターネット接続があるかどうかを確認できます

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/92.png"/></div>

#### 4G モジュールの使用方法 - GPS への接続

一部の 4G モジュールには GPS モジュールが組み込まれています。EC25EUXGA と EC20CEHCLG の両方のモジュールには 4G モジュールが搭載されています。

- **ステップ 1:** 以下のコマンドを実行して GPS モジュールを再起動します

```sh
echo -e "AT+QGPS=1\r\n" > /dev/ttyUSB2
echo -e "AT+QGPS=0\r\n" > /dev/ttyUSB2
```

- **ステップ 2:** 以下のコマンドを実行してGPSデータを取得する

```sh
sudo cat /dev/ttyUSB1
```

すると、以下のような出力が表示されます

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

現在このボードはWM1302 SPIモジュールをサポートしています。当社のBazaarで入手可能な[US版](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html)または[EU版](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html)のいずれかを使用できます。

- **ステップ1:** ボードがすでに電源オンの場合は電源を切る

- **ステップ2:** LoRaモジュールをmini PCIeスロットにスライドして挿入し、事前に取り付けられているネジを使用して2つの穴にネジ止めしてLoRaモジュールを固定する

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/16.jpg"/></div>

- **ステップ3:** アンテナコネクタにアンテナを接続する。ここではIPEXコネクタを使用する必要があります

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/17.jpg"/></div>

:::note
**J8 (Control and UART) Header**の**SIM_MUX_SEL**と**GND**ピン間にジャンパーがないことを確認してください。このジャンパーは4Gモジュールを使用する場合にのみ必要です
:::

- **ステップ4:** ボードの電源を入れる

#### LoRaモジュール使用方法 - LoRa RF テスト

LoRaモジュールが接続されると、モジュール上の緑と青のLEDが点灯します

- **ステップ1:** 以下のコマンドを入力してLoRaモジュールがシステムによって検出されているかどうかを確認する

```sh
i2cdetect -r -y 7
```

以下の出力が表示された場合、モジュールがシステムによって検出されています

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/29.png"/></div>

- **ステップ 2:** 以下のコマンドを入力して、LoRa信号送信ツールをコンパイルおよびビルドします

```sh
git clone https://github.com/lakshanthad/sx1302_hal
cd sx1302_hal
make
cd libloragw
cp ../tools/reset_lgw.sh .
sudo ./test_loragw_hal_tx -r 1250 -m LORA -f 867.1 -s 12 -b 125 -n 1000 -z 100 --dig 3 --pa 0 --pwid 13 -d /dev/spidev2.0
```

以下の結果が表示され、LoRaモジュールのLEDが赤色に点灯した場合、モジュールがRF信号を正常に送信していることを意味します

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/78.jpg"/></div>

送信を停止するには、キーボードで **CTRL + C** を押してください。

#### LoRaモジュールの使用方法 - TTNへの接続

次に、TTN（The Things Network）に接続し、reServer IndustrialをTTN LoRaWANゲートウェイとして使用します

- **ステップ 1:** パケットフォワーダーを準備するために以下を入力してください

```sh
cd ..
cd packet_forwarder
cp ../tools/reset_lgw.sh .
```

- **ステップ 2:** 使用している LoRa モジュールに応じて以下を実行します。ここでは SPI US915 バージョンをテストしています

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

ただし、他の異なるモジュールのコマンドは以下の通りです

```sh
# USB 915
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB

# SPI EU868
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# USB EU868
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

上記のコマンドを実行すると、最後の行に**concentrator EUI**情報が表示された以下の出力が表示されます。この情報は後でTTNでゲートウェイを設定する際に使用するため、保存しておいてください。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/79.jpg"/></div>

- **ステップ 3:** [このURL](https://console.cloud.thethings.network)にアクセスしてTTNコンソールに入り、お好みの地域を選択してください

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/80.png"/></div>

- **ステップ 4:** すでにアカウントをお持ちの場合はログインし、アカウントをお持ちでない場合は新しいアカウントにサインアップしてください

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/81.png"/></div>

- **ステップ 5:** **Go to gateways**をクリックしてください

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/82.png"/></div>

- **ステップ 6:** **+ Register gateway**をクリックしてください

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/83.png"/></div>

- **ステップ 7:** 先ほど取得した**Concentrator EUI**を**Gateway EUI**セクションに入力し、**Confirm**をクリックしてください

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/84.jpg"/></div>

- **ステップ 8:** 使用しているLoRaモジュールに応じて**Frequency plan**を入力してください。ここではモジュールのUS915バージョンを使用しているため、**United Stated 902-928 MHz, FSB 2 (used by TTN)**を選択しました。その後、**Register gateway**をクリックしてください

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/85.jpg"/></div>

:::note
**Gateway ID**は自動的に入力されています。ただし、お好みに応じて変更することができます。**Gateway name**は必須ではありませんが、お好みに応じて入力することもできます
:::

- **ステップ 9:** ゲートウェイのメインホームページで**Gateway Server Address**をメモしてください

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/86.jpg"/></div>

- **ステップ 9:** reTerminal Industrialで、**lora_pkt_fwd**コマンドと一緒に使用した**global_conf_json**ファイルを編集してください。ここで、以下のように**gateway_ID**、**server_address**、**serv_port_up**、**serv_port_down**オプションを変更する必要があります

  - gateway_ID: デバイスからのConcentrator EUI
  - server_address: TTNからのGateway Server Address
  - serv_port_up: 1700
  - serv_port_down: 1700

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/87.png"/></div>

- **ステップ 10:** パケットフォワーダーを再実行してください

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

以下の出力が表示された場合、デバイスがTTNに正常に接続されたことを意味します

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/88.jpg"/></div>

## M.2 Key B

reServer Industrialには、4Gおよび5GモジュールをサポートするM.2 Key Bコネクタが搭載されています。現在、**SIM8202G-M2 5Gモジュール**をテストしています

### 5Gモジュール接続概要

- **ステップ1:** ボードが既に電源オンの場合は電源を切ります

- **ステップ2:** スタンドオフが所定の位置にあることを確認し、スタンドオフの上部ネジを取り外します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/18.jpg"/></div>

- **ステップ2:** 5GモジュールをM.2 Key Bスロットにスライドして挿入し、スタンドオフネジを締めて5Gモジュールを固定します（スタンドオフについて説明）

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/19.jpg"/></div>

- **ステップ3:** モジュールのアンテナコネクタに4本のアンテナを接続します。ここではIPEX 4コネクタを使用する必要があります

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/20.jpg"/></div>

- **ステップ4:** 5G対応のnano SIMカードをボード上のSIMカードスロットに挿入します。SIMカードの金色の面が下向きになるようにしてください。ここでは、カードを奥まで挿入し、内部スプリングに当たって跳ね返り、所定の位置にロックされるようにします。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/13.jpg"/></div>

:::note
SIMカードを取り外したい場合は、カードを押し込んで内部スプリングに当て、SIMがスロットから出てくるようにします
:::

- **ステップ5:** ボードの電源を入れます

### 5Gモジュール使用方法 - テストダイヤル

SIM8202G-M2 5Gモジュールを使用する場合、モジュールは自動的に起動しません。そのため、まずいくつかのGPIOを切り替えて起動させる必要があります

- **ステップ1:** 以下を入力して5Gモジュールを起動します

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

上記を実行すると、LED2が緑色に点灯します

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/15.jpg"/></div>

- **ステップ 2:** minicomをインストールする

```sh
sudo apt update
sudo apt install minicom -y
```

- **ステップ 3:** 接続された5Gモジュールのシリアルコンソールに入り、ATコマンドを入力して5Gモジュールと対話できるようにします

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **ステップ4:** コマンド **"AT"** を入力してエンターキーを押します。レスポンスが "OK" と表示されれば、5Gモジュールが正常に動作しています

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/107.png"/></div>

- **ステップ6:** コマンド **"ATI"** を入力してモジュール情報を確認します

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/108.png"/></div>

- **ステップ7:** モジュールをテストするために、以下のコマンドを入力して他の電話番号に発信します

```sh
ATD<phone_number>;
```

そして、以下の出力が表示されます

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/109.png"/></div>

### 5Gモジュール使用方法 - インターネット接続

近日公開予定

## DI/ DO

reServer Industrialは4つのデジタル入力と4つのデジタル出力チャンネルをサポートしており、すべて光学的に絶縁されており、電圧スパイクやその他の電気的外乱からメインボードを効果的に保護します。この同じコネクタにはCANインターフェースもあり、これについてはこのwikiで後ほど説明します。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/37.png"/></div>

### DI/ DOピン配置表

<table>
  <thead>
    <tr>
      <th>タイプ</th>
      <th>ラベル名</th>
      <th>回路図信号</th>
      <th>モジュールピン番号</th>
      <th>BGA番号</th>
      <th>GPIO番号</th>
      <th>V/A制限</th>
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
      <td rowSpan={4}>12V/ 合計20mA電流</td>
      <td rowSpan={4}>12Vデジタル入力、グランド信号は<br />GND_DI（ピン2/4/6）に接続する必要があります</td>
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
      <td rowSpan={4}>ピンあたり40V/40mA負荷</td>
      <td rowSpan={4}>デジタル出力、最大耐電圧<br />40V、グランド信号は<br />GND_DO（ピン8/10）に接続する必要があります</td>
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
      <td rowSpan={2}>標準差動信号を持つCANバス、<br />グランド信号はGND_ISO（ピン12）に接続する必要があります</td>
    </tr>
    <tr>
      <td />
      <td>CL</td>
    </tr>
    <tr>
      <td>グランド</td>
      <td>GND_DI</td>
      <td colSpan={5} rowSpan={3}>/</td>
      <td>12Vデジタル入力の基準グランド信号で、<br />DIのリターンパスでもあります</td>
    </tr>
    <tr>
      <td />
      <td>GND_DO</td>
      <td>デジタル出力の基準グランド信号で、DOのリターンパスでもあります</td>
    </tr>
    <tr>
      <td />
      <td>CG</td>
      <td>CANの基準グランド信号</td>
    </tr>
  </tbody>
</table>

### DI接続概要

以下の図に従ってDIの接続を行うことができます。DI線に直列抵抗を追加することをお勧めします。ここでは、DI1ピンに接続された4.7kΩ抵抗でテストを行いました。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/38.png"/></div>

### DIの使用方法

DI線で入力として検出されるためには、12Vの電圧を入力する必要があります。DI / DOを有効にするコマンドは、Jetpack 5とJetpack 6で異なります。

<Tabs>
<TabItem value="Jetpack 5" label="Jetpack 5">

- **ステップ1:** 上記のように**DI1ピン**に接続を行い、**12V**を入力します

- **ステップ2:** 以下のようにDI1のGPIOを開きます

```sh
sudo su 
cd /sys/class/gpio
echo 453 > export 
cd PQ.05
```

:::note
**DI/ DO ピン割り当て表**を参照して、GPIO番号とBGA番号を確認できます。上記の例では、DI1ピンの場合、GPIO番号は453、BGA番号はPQ.05です
:::

- **ステップ 3:** 以下を実行してステータスを確認します

```sh
cat value
```

0を出力する場合は12V入力があることを意味します。1を出力する場合は入力電圧がないことを意味します。

</TabItem>
<TabItem value="Jetpack 6" label="Jetpack 6">

- **ステップ1:** 上記のように**DI1ピン**に接続し、**12V**を入力します

- **ステップ2:** chip0上のDI1の**line offset**を確認します：

```sh
gpioinfo gpiochip0
```

BGA番号に基づいて対応する**ラインオフセット**を見つけます。DI1の**ラインオフセット**は`105`です。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/reserver-di.jpg"/></div>

:::note
**DI/ DO Pin Assignment Table**を参照してGPIO番号とBGA番号を確認できます。上記の例では、DI1ピンの場合、GPIO番号は453、BGA番号はPQ.05です。
:::

- **ステップ3:**
DI1に対応するgpiochip0の**ラインオフセット105**を読み取るには：

```sh
sudo gpioget gpiochip0 105
```

出力0は低レベルを示します。出力1は高レベルを示します。  
コマンド形式は以下の通りです `sudo gpioset <gpiochip> <line>`。

</TabItem>
</Tabs>

### DOの接続概要

以下の図に従ってDOの接続を行うことができます。DO線には直列に抵抗を追加することをお勧めします。ここでは4.7kΩ抵抗でテストしました。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/39.png"/></div>

### DOの使用方法

ここでは上記の図に示すように負荷を接続する必要があります。これをテストする最も簡単な方法は、マルチメーターがあればそれを接続するか、または最大40V未満の電圧を必要とする負荷を接続することです。DI / DOを有効にするコマンドはJetpack 5とJetpack 6で異なります。

<Tabs>
<TabItem value="Jetpack 5" label="Jetpack 5">

- **ステップ1:** 上記のように**DO1ピン**に接続を行い、**最大40V**を入力します

- **ステップ2:** 以下のようにD01のGPIOを開きます

```sh
sudo su 
cd /sys/class/gpio
echo 399 > export 
cd PI.00
echo out > direction
```

:::note
**DI/ DO ピン割り当て表**を参照して、GPIO番号とBGA番号を確認できます。上記の例では、DO1ピンの場合、GPIO番号は399、BGA番号はPI.00です。
:::

- **ステップ 3:** 以下を実行してピンをオンにします

```sh
echo 1 > value
```

</TabItem>
<TabItem value="Jetpack 6" label="Jetpack 6">

- **ステップ 1:** 上記のように **DO1 ピン** に接続し、**最大 40V** を入力します

- **ステップ 2:** chip0 の DO1 の **line offset** を確認します：

```sh
gpioinfo gpiochip0
```

対応するBGA番号に基づいて**ライン オフセット**を見つけます。DO1の**ライン オフセット**は`51`です。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/reserver-do.jpg"/></div>

:::note
**DI/ DO Pin Assignment Table**を参照してGPIO番号とBGA番号を見つけることができます。上記の例では、DO1ピンの場合、GPIO番号は399、BGA番号はPI.00です
:::

- **ステップ 3:**
以下のコマンドを使用してDO1の状態を制御します：

```sh
# set to 12v
sudo gpioset --mode=wait gpiochip0 51=0

# set to 0v
sudo gpioset --mode=wait gpiochip0 51=1
```

コマンドの形式は次の通りです `sudo gpioset <gpiochip> <line>=<value>`。

</TabItem>
</Tabs>

負荷がオンになるか、マルチメーターが入力した電圧を出力する場合、テストは正常に機能しています。

## CAN

reServer Industrialは、5MbpsでCAN FD（Controller Area Network Flexible Data-Rate）プロトコルをサポートするCANインターフェースを搭載しています。CANインターフェースは容量性絶縁を使用して絶縁されており、優れたEMI保護を提供し、産業用および自動化アプリケーションでの信頼性の高い通信を保証します。120Ωの終端抵抗がデフォルトでインストールされており、GPIOを使用してこの抵抗をONとOFFに切り替えることができます。

注意：CANインターフェースは絶縁電源を使用しているため、CANインターフェースに接続される外部デバイスのグランド信号はCGピンに接続する必要があります

### USB to CANアダプターとの接続概要

CANバスをテストし、インターフェースするには、以下に示すようにUSB to CANアダプターをボード上のCANコネクターに接続します

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/40.png"/></div>

ここでは、当社のBazaarで入手可能な[USB to CAN Analyzer Adapter with USB Cable](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)を使用しました。

### USB to CANアダプターでの使用方法

- **ステップ1：** 使用しているUSB to CANアダプターのドライバーをメーカーのWebサイトからダウンロードしてインストールします。私たちの場合、使用したアダプターに応じて、ドライバーは[こちら](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver)で見つけることができます

- **ステップ2：** 一部のアダプターには、CANデバイスと通信するためのPC用の必要なソフトウェアも付属しています。私たちの場合、使用したアダプターに応じて、[こちら](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)で見つけることができるソフトウェアをダウンロードしてインストールしました

- **ステップ3：** reServer Industrial上でターミナルウィンドウを開き、以下のコマンドを実行してCANインターフェースを設定し、有効にします

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **ステップ 4:** ターミナルで **ifconfig** と入力すると、CAN インターフェースが有効になっていることが確認できます

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **ステップ 5:** 以前にインストールした CAN ソフトウェアを開きます。この場合、使用している CAN アダプターに応じてインストールしたソフトウェアを開きます

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/></div>

- **ステップ 6:** USB to CAN アダプターを PC に接続し、Windows の検索バーで検索して **デバイス マネージャー** を開きます。接続されたアダプターが **ポート (COM と LPT)** の下に表示されます。ここに表示されているシリアル ポートをメモしてください。下の画像によると、シリアル ポートは **COM9** です

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/></div>

- **ステップ 7:** CAN ソフトウェアを開き、**COM** セクションの横にある **Refresh** をクリックし、ドロップダウン メニューをクリックして、接続されたアダプターに応じてシリアル ポートを選択します。**COM bps** はデフォルトのままにして、**Open** をクリックします

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/></div>

- **ステップ 8:** **Mode** と **CAN bps** はデフォルトのままにし、**Type** を **Standard frame** に変更して、**Set and Start** をクリックします

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/></div>

- **ステップ 9:** reServer Industrial で、以下のコマンドを実行して PC に CAN 信号を送信します

```sh
cansend can0 123#abcdabcd
```

以下のように、ソフトウェアが受信した上記の信号が表示されます

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/></div>

- **ステップ 10:** reServer Industrial で、以下のコマンドを実行して PC からの CAN 信号の受信を待機します

```sh
candump can0 &
```

- **ステップ 11:** CANソフトウェアで、**Send a single frame**をクリックします

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/></div>

これで、以下のようにreServer Industrialで受信されることが確認できます

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

#### reTerminal DMとの接続概要

[reTerminal DM](https://www.seeedstudio.com/reTerminal-DM-p-5616.html)にアクセスできる場合、reTerminal DMにもCANインターフェースがあるため、直接通信することができます。

reServer IndustrialとreTerminal DMをCAN経由で接続するには、以下の画像を参照してください

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/49.png"/></div>

### reTerminal DMでの使用方法

- **ステップ 1:** reTerminal DMを使用する前に、[このwiki](https://wiki.seeedstudio.com/ja/reterminal-dm)にアクセスして、reTerminal DMの使用を開始してください

- **ステップ 2:** reServer Industrialでターミナルウィンドウを開き、以下のコマンドを実行してCANインターフェースを設定し、有効にします

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **ステップ 3:** reTerminal DM でターミナルウィンドウを開き、以下のコマンドを実行して CAN インターフェースを設定し有効化します

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **ステップ4:** reTerminal DMでターミナルウィンドウを開き、以下のコマンドを実行してCANインターフェースを設定し、有効にします

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **ステップ 5:** 両方のデバイスで **ifconfig** と入力すると、CANインターフェースが有効になっていることが確認できます

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **ステップ 6:** reTerminal DMで以下を実行し、reServer IndustrialからのCAN信号の受信を待機します

```sh
candump can0 &
```

- **ステップ 7:** reServer Industrial で、以下のコマンドを実行して reTerminal Industrial に CAN 信号を送信します

```sh
cansend can0 123#abcdabcd
```

今度は以下のようにreTerminal DMで受信されることが確認できます

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

- **ステップ 8:** **ステップ 6とステップ 7**を繰り返しますが、デバイスを入れ替えます。reTerminal DMを使用してCANシグナルを送信し、reServer Industrialで受信します

## RS232/ RS422/ RS485 インターフェース

reServer IndustrialにはRS232、RS422、RS485通信プロトコルをサポートするDB9コネクタがあり、基板上にDIPスイッチパネルがあり、異なるインターフェースオプション間で切り替えることができます

DIPスイッチパネルは以下のように確認できます：

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/21.jpg"/></div>

以下の表は、DIPスイッチの位置に基づく異なるモードを説明しています

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
      <td>RS-422 全二重</td>
      <td>1T/1R RS-422</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/53.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>純粋なRS-232</td>
      <td>3T/5R RS-232</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/54.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>RS-485 半二重</td>
      <td>1T/1R RS-485 ,TX ENABLE Low Active</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/55.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>1</td>
      <td>1</td>
      <td>RS-485 半二重</td>
      <td>1T/1R RS-485 ,TX ENABLE High Active</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/56.png" alt="Image" width={200} height={127} /></td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>RS-422 全二重</td>
      <td>1T/1R RS-422 終端抵抗付き</td>
    </tr>
    <tr>
      <td rowSpan={3}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/57.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={3}>1</td>
      <td rowSpan={3}>0</td>
      <td rowSpan={3}>1</td>
      <td rowSpan={3}>純粋なRS-232</td>
      <td>1T/1R RS-232 と RS485 の共存</td>
    </tr>
    <tr>
      <td>バス切り替えICを必要としない</td>
    </tr>
    <tr>
      <td>アプリケーション（特殊用途）。</td>
    </tr>
    <tr>
      <td rowSpan={2}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/58.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>0</td>
      <td rowSpan={2}>RS-485 半二重</td>
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
      <td>低電力</td>
      <td rowSpan={2}>すべてのI/Oピンがハイインピーダンス</td>
    </tr>
    <tr>
      <td>シャットダウン</td>
    </tr>
  </tbody>
</table>

:::note
工場出荷時、スイッチのデフォルトモードは010でRS485に設定されています
:::

上記の表は、DIPスイッチパネルの最初の3つのスイッチを考慮しています。ただし、4番目のスイッチはスルーレートの切り替えを担当しており、これはデータレートに直接関係しています

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
      <td>SLEW= Vcc<br />このRS232/RS422/RS485マルチプロトコルトランシーバーは、通信レートを以下のように制限します：<br />RS-232: 最大データレートは1.5Mbps<br />RS-485/RS-422: 最大データレートは10Mbps<br />実際の最大データレートは使用するJetson SOによって異なります</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/63.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>SLEW = GND<br />RS-232: 最大データレートは250Kbps<br />RS-485/RS-422: 最大データレートは250kbps</td>
    </tr>
  </tbody>
</table>

ここでは、インターフェースをテストするためにUSBからRS232、RS485、RS422アダプターを使用します。そのため、先に進む前に、PCにシリアルターミナルアプリケーションをインストールする必要があります。ここでは、セットアップと使用が簡単な**Putty**をインストールすることをお勧めします。

- **ステップ1：** [このウェブサイト](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)にアクセスし、PCアーキテクチャに応じてPuttyをダウンロードしてください

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/60.png"/></div>

ここでは、使用したPCに応じてPuttyを選択しました。これはX86 Windows 64ビットマシンです

- **ステップ2：** ダウンロードしたセットアップを開き、プロンプトに従ってアプリケーションをインストールしてください

### 一般的な接続概要

DB9コネクタのピン番号と表を参照して接続を行うことができます

<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/61.png"/></div>

<table>
  <thead>
    <tr>
      <th>MODE</th>
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

### RS232接続概要

ここでは、USB to RS232アダプターを使用してインターフェースをテストできます。テストには[UGREEN USB to RS232アダプター](https://www.amazon.com/UGREEN-Converter-Adapter-Chipset-Windows/dp/B00QUZY4UG?th=1)を使用しました。

- **ステップ1:** ボードの電源を切る

- **ステップ2:** ここではDIPスイッチを設定する2つのオプションがあります。001モードまたは101モードのいずれかです。各モードのスイッチ位置を以下に示します

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/64.png"/></div>

- **ステップ3:** USB to RS232アダプターをDB9コネクターに接続する

- **ステップ4:** もう一方の端をPCのUSBポートの1つに接続する

- **ステップ5:** ボードの電源を入れる

### RS232の使用方法

- **ステップ1:** 使用しているアダプターのドライバーをインストールする必要がある場合があります。または、Windowsが自動的にドライバーをインストールします。Windowsの検索で**デバイスマネージャー**と入力してデバイスマネージャーを開き、接続されたアダプターがCOMデバイスとして表示されているかどうかを確認してください。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/67.jpg"/></div>

- **ステップ2:** アダプターが表示されない場合は、使用しているアダプターに応じてドライバーをインストールする必要があります。これらのドライバーは一般的にメーカーのウェブサイトで見つけることができます。私たちが使用しているアダプターについては、[このページ](https://www.ugreen.com/pages/download)にアクセスし、モデル番号として**20201**を検索し、それに応じてドライバーをダウンロードできます

- **ステップ3:** PCでPuttyを開き、**Terminal**セクションを選択して以下を設定します

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **ステップ4:** **Session**を選択し、**Connection type**で**Serial**を選択し、**デバイスマネージャー**で確認したシリアルポート番号を設定し、Speedはデフォルト（9600）のままにして**Open**をクリックします

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/71.jpg"/></div>

- **ステップ4:** reServer Industrialターミナルウィンドウで、以下を入力してreServer IndustrialからPCに信号を送信します

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS232 message from reServer Industrial" > /dev/ttyTHS0
```

これで、Putty にこのメッセージが表示されます

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/72.jpg"/></div>

- **ステップ 5:** reTerminal Industrial のターミナルウィンドウで、以下を入力して PC からの信号の受信を待機します

```sh
sudo cat /dev/ttyTHS0
```

- **ステップ 6:** Putty で何かを入力し、**ENTER** を押すと、reServer Industrial のターミナルウィンドウに表示されます

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/73.png"/></div>

### RS422 接続概要

ここでは、USB to RS422 アダプターを使用してインターフェースをテストできます。テストには [DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) を使用しました。

- **ステップ 1:** ボードの電源を切ります

- **ステップ 2:** ここでは DIP スイッチを設定する 2 つのオプションがあります。000 モードまたは 100 モードのいずれかです。各モードのスイッチ位置を以下に示します

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/65.png"/></div>

- **ステップ 3:** 以下に示すように、ジャンパーワイヤーを使用して USB to RS422 アダプターを DB9 コネクターに接続します。ここでは上記で言及したアダプターを接続しました

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/74.png"/></div>

- **ステップ 4:** もう一方の端を PC の USB ポートの 1 つに接続します

- **ステップ 5:** ボードの電源を入れます

### RS422 の使用方法

- **ステップ 1:** 使用しているアダプターのドライバーをインストールする必要がある場合があります。または、Windows が自動的にドライバーをインストールします。Windows 検索で **Device Manager** と入力してデバイスマネージャーを開き、接続されたアダプターが COM デバイスとして表示されるかどうかを確認します。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **ステップ 2:** アダプターが表示されない場合は、使用しているアダプターに応じてドライバーをインストールする必要があります。これらのドライバーは通常、メーカーのウェブサイトで見つけることができます。使用しているアダプターについては、[このページ](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485) を参照してください

- **ステップ 3:** PC で Putty を開き、**Terminal** セクションを選択して以下を設定します

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **ステップ 4:** **Session** を選択し、**Connection type** で **Serial** を選択し、**Device Manager** で確認したシリアルポート番号を設定し、Speed はデフォルト（9600）のままにして **Open** をクリックします

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **ステップ 4:** reServer Industrial のターミナルウィンドウで、以下を入力して reServer Industrial から PC に信号を送信します

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS422 message from reComputer Industrial" > /dev/ttyTHS0
```

これで、このメッセージが Putty に表示されます。

- **ステップ 5:** reTerminal Industrial のターミナルウィンドウで、PC からの信号を受信するのを待つために次のコマンドを入力します

```sh
sudo cat /dev/ttyTHS0
```

- **ステップ 6:** Putty で何かを入力し、**ENTER** を押すと、reServer Industrial のターミナルウィンドウに表示されます

### RS485 接続概要

ここでは、USB to RS422 アダプターを使用してインターフェースをテストできます。テストには [DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) を使用しました。

- **ステップ 1:** ボードの電源を切ります

- **ステップ 2:** ここでは DIP スイッチを設定する 3 つのオプションがあります。010 モード、011 モード、または 110 モードのいずれかです。各モードのスイッチ位置を以下に示します

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/66.png"/></div>

- **ステップ 3:** 以下に示すように、ジャンパーワイヤーを使用して USB to RS422 アダプターを DB9 コネクターに接続します。ここでは上記で言及したアダプターを接続しました

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/77.png"/></div>

- **ステップ 4:** もう一方の端を PC の USB ポートの 1 つに接続します

- **ステップ 5:** ボードの電源を入れます

### RS485 使用方法

- **ステップ 1:** 使用しているアダプターのドライバーをインストールする必要がある場合があります。または Windows が自動的にドライバーをインストールします。Windows 検索で **Device Manager** と入力してデバイスマネージャーを開き、接続されたアダプターが COM デバイスとして表示されているかどうかを確認します。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **ステップ 2:** アダプターが表示されない場合は、使用しているアダプターに応じてドライバーをインストールする必要があります。これらのドライバーは一般的にメーカーのウェブサイトで見つけることができます。使用しているアダプターについては、[このページ](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485) を参照してください

- **ステップ 3:** PC で Putty を開き、**Terminal** セクションを選択して以下を設定します

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **ステップ 4:** **Session** を選択し、**Connection type** で **Serial** を選択し、**Device Manager** で確認したシリアルポート番号を設定し、Speed はデフォルト（9600）のままにして **Open** をクリックします

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **ステップ 4:** reServer Industrial のターミナルウィンドウで、以下を入力して reServer Industrial から PC に信号を送信します

```sh
sudo su 
cd /sys/class/gpio 
echo 460 > export 
cd PR.04
echo out > direction
echo 0 > value
echo "RS485 message from reServer Industrial" > /dev/ttyTHS0
```

これで、このメッセージが Putty に表示されます。

- **ステップ 5:** reTerminal Industrial のターミナルウィンドウで、PC からの信号を受信するのを待機するために次のコマンドを入力します

```sh
sudo su
cd /sys/class/gpio
echo 460 > export
cd PR.04
echo out > direction
echo 1 > value
cat /dev/ttyTHS0
```

- **ステップ 6:** Putty で何かを入力し、**ENTER** を押すと、reServer Industrial のターミナルウィンドウに表示されます

## USB

reServer Industrial には 3x USB3.2 コネクタがオンボードで搭載されており、以下の機能があります：

- デュアルスタック USB コネクタでは、上下の USB ポートが電流制限 IC を共有し、最大出力電流 2.1A の総電源供給能力があります（単体でも 2.1A 可能）。2.1A を超えると、過電流保護状態に入ります。
- デュアルスタック USB コネクタの隣にある単体 USB コネクタは、最大出力電流 2.1A の総電源供給能力があります。2.1A を超えると、過電流保護状態に入ります。
- Orin NX モジュールには 3 つの USB3.2 が搭載されており、そのうち 1 つのみが reServer Industrial で使用され、3 系統に変換されています。（USB3.1 TYPE-A x2 - J4 および USB3.1 TYPE-A x1 -J3）。
- USB Host のみサポート、Device モードは非対応
- 5V 2.1A を提供
- ホットスワップ対応

### 使用方法

接続された USB フラッシュドライブで簡単なベンチマークを実行する方法を説明します

- **ステップ 1:** 以下のコマンドを実行して書き込み速度を確認します

```sh
sudo dd if=/dev/zero of=/dev/$1 bs=100M count=10 conv=fdatasync
```

- **ステップ 2:** 以下のコマンドを実行して読み取り速度を確認します。書き込み速度の上記コマンドを実行した後に、必ずこれを実行してください。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/dev/$1 of=/dev/null bs=100M count=10
```

### 設定可能なLED

以下に示すように、ボード上に緑色のLEDが配置されています。デフォルトでは、デバイスが正常に動作していることを示すLEDとして機能しています。ただし、このLEDをシステムによってON/OFFするようにプログラムすることも可能です

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/22.jpg"/></div>

### 使用方法

- **ステップ 1:** ターミナルウィンドウで以下のコマンドを入力して、緑色のLEDにアクセスします

```sh
sudo -i
cd /sys/class/gpio
echo 329 > export 
cd PCC.01
echo out > direction 
```

- **ステップ 2:** LEDをオフにする

```sh
echo 0 > value 
```

- **ステップ 3:** ON LEDを点灯する

```sh
echo 1 > value 
```

LEDの使用が完了したら、以下を実行できます

```sh
cd ..
echo 329 > unexport
```

## システムパフォーマンスの監視

**jetson stats** アプリケーションを使用して、システムコンポーネントの温度を監視し、以下のような他のシステム詳細を確認できます

- CPU、GPU、RAM使用率の表示
- 電源モードの変更
- 最大クロックの設定
- JetPack 情報の確認

- **ステップ 1:** reServer Industrial ターミナルウィンドウで、以下を入力します

```sh
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```

- **ステップ 2:** ボードを再起動する

```sh
sudo reboot
```

- **ステップ 3:** ターミナルで以下を入力してください

```sh
jtop
```

**jtop** アプリケーションが以下のように開きます

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/30.png"/></div>

- **ステップ 4:** ここでアプリケーションの異なるページを循環して、すべての機能を探索できます！

## TPM

reServer Industrial には外部 TPM モジュールを接続するための TPM インターフェースが付属しています。ここでは Infineon SLB9670 ベースの TPM2.0 モジュールでテストしました。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/24.jpg"/></div>

### 接続概要

以下に示すように TPM モジュールを TPM コネクタに接続します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/27.jpg"/></div>

### 使用方法

以下のコマンドを実行して TPM モジュールが正しく読み込まれているかを確認します

```sh
sudo dmesg | grep TPM
ls /dev/tpm* -l
```

以下のような出力が表示されます

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/116.png"/></div>

## reServer Industrial での最大パフォーマンス

reServer Industrial で最大パフォーマンスを有効にしたい場合は、以下の手順に従ってください

- **ステップ 1:** 以下のコマンドを入力して最大電力モードを有効にします

```sh
sudo nvpmodel -m 0
```

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/35.jpg"/></div>

ここで、ボードを再起動するために **YES** と入力するよう求められます

- **ステップ 2:** ボードが起動したら、以下のコマンドを入力してCPUクロックを最大周波数に設定します

```sh
sudo jetson_clocks
```

## GPIO テーブル

reServer IndustrialのGPIOテーブルにアクセスして、すべてのピンマッピングを把握することができます。

ターミナル内で以下を実行してアクセスしてください

```sh
sudo cat /sys/kernel/debug/gpio
```

そして、以下のような出力が表示されます

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
- [reServer Industrial 3Dファイル](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-3D.stp)

## 技術サポート

お気軽に私たちの[フォーラム](https://forum.seeedstudio.com/)に問題を投稿してください。

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
