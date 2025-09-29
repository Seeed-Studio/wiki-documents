---
description: reComputer Industrial J30シリーズおよびJ40シリーズのハードウェアとインターフェース使用方法
title: reComputer Industrial J40、J30 ハードウェアとインターフェース使用方法
tags:
  - reComputer Industrial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage
last_update:
  date: 05/16/2023
  author: Lakshantha
---

このwikiでは、reComputer Industrial J4012、J4011、J3011、J3010の様々なハードウェアとインターフェースについて紹介し、プロジェクトアイデアを拡張するための使用方法を説明します。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/2.png"/></div>

## CSIカメラ

reComputer Industrialには**2x 2レーン 15ピン MIPI CSIカメラコネクタ**が搭載されており、以下のカメラがサポートされています

- IMX219カメラ

  - [Raspberry Pi Camera V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)
  - [IMX219-77 8MP Camera with 77° FOV](https://www.seeedstudio.com/IMX219-77-Camera-77-FOV-Applicable-for-Jetson-Nano-p-4608.html)
  - [IMX219 M12/CS mount CMOS Camera Module](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)
  - [IMX219-83 8MP 3D Stereo Camera Module](https://www.seeedstudio.com/IMX219-83-Stereo-Camera-8MP-Binocular-Camera-Module-Depth-Vision-Applicable-for-Jetson-Nano-p-4610.html)
  - [IMX219-77IR 8MP IR Night Vision Camera with 77° FOV](https://www.seeedstudio.com/IMX219-77IR-Camera-77-FOV-Infrared-Applicable-for-Jetson-Nano-p-4607.html)
  - [IMX219 M12/CS mount CMOS Camera Module](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)

- IMX477カメラ

  - [Raspberry Pi High Quality Camera](https://www.seeedstudio.com/Raspberry-Pi-High-Quality-Cam-p-4463.html)
  - [Raspberry Pi HQ Camera - M12 mount](https://www.seeedstudio.com/Raspberry-Pi-HQ-Camera-M12-mount-p-5578.html)
  - [High Quality Camera for Raspberry Pi](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)

<!-- - [IMX219-160IR 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160IR-Camera160-FOV-Infrared-Applicable-for-Jetson-Nano-p-4602.html) -->
<!-- - [IMX219-130 8MP Camera with 130° FOV](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html) -->
<!-- - [IMX219-160 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160-Camera-160-FOV-Applicable-for-Jetson-Nano-p-4603.html)
- [IMX219-200 8MP Camera with 200° FOV](https://www.seeedstudio.com/IMX219-200-Camera-200-FOV-Applicable-for-Jetson-Nano-p-4609.html) -->

### 接続概要

ここで2つのCSIカメラコネクタは**CAM0とCAM1**としてマークされています。2つのコネクタのうちどちらか一方にカメラを1台接続するか、両方のコネクタに同時に2台のカメラを接続することができます。

**ステップ1:** CSIコネクタの黒いロックを優しく引き出します

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/5.png"/></div>

**ステップ2:** 金色の端子が下向きになるように15ピンリボンケーブルをコネクタに挿入します

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/6.png"/></div>

**ステップ3:** 黒いロックを押し込んでリボンケーブルを固定します

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/10.png"/></div>

### 使用方法

まず、使用する特定のカメラに適したドライバーをロードするようにボードを設定する必要があります。このためJetPackシステムには、IMX219およびIMX477カメラをサポートする内蔵ツールがあります。

**ステップ1:** ターミナルを開いて以下を実行します

```sh
sudo /opt/nvidia/jetson-io/jetson-io.py
```

**ステップ 2:** **Configure Jetson Nano CSI Connector** を選択します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/119.jpg"/></div>

**ステップ 3:** **Configure for compatible hardware** を選択します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/120.jpg"/></div>

**ステップ 4:** 使用したいカメラを選択します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/121.jpg"/></div>

**ステップ 5:** **Save pin changes** を選択します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/122.jpg"/></div>

**ステップ 6:** **Save and reboot to reconfigure pins** を選択します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/123.jpg"/></div>

**ステップ 7:** キーボードの任意のキーを押すと、適用されたカメラ設定でデバイスが再起動します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/124.jpg"/></div>

CSI カメラは2つの異なる方法で使用できます。カメラコネクタに応じて以下のコマンドに従ってください。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="Method 1">

CAM0ポート用

```sh
nvgstcapture-1.0 sensor-id=0 
```

CAM1ポート用

```sh
nvgstcapture-1.0 sensor-id=1  
```

:::note
カメラのさらなる設定を変更したい場合は、**"nvgstcapture-1.0 --help"** と入力することで、利用可能なすべての設定可能オプションにアクセスできます
:::

</TabItem>

<TabItem value="Method 2" label="Method 2">

CAM0ポート用

```bash
gst-launch-1.0 nvarguscamerasrc sensor-id=0 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

CAM1ポート用

```bash
gst-launch-1.0 nvarguscamerasrc sensor-id=1 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

:::note
カメラのさらなる設定を変更したい場合は、**width、height、framerate、format**などの引数を更新できます。
:::

</TabItem>
</Tabs>

## RTC

reComputer Industrialには、RTCバッテリーに接続する2つの異なる方法が搭載されています

### 接続概要

- 方法1:

以下に示すように、**3V CR1220コイン電池**をボード上のRTCソケットに接続します。電池の**プラス（+）**端が上向きになっていることを確認してください

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/11.jpg"/></div>

- 方法2:

以下に示すように、**JSTコネクタ付き3V CR2302コイン電池**をボード上の2ピン1.25mm JSTソケットに接続します

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/12.jpg"/></div>

### 使用方法

:::danger
reComputerデバイスが既にJetPack 6以降にアップデートされている場合、RTCは追加設定なしで正常に機能することにご注意ください。JetPack 5を使用している場合は、以下の内容を参照してクロック同期サービスを設定する必要があります。
:::

**ステップ1:** 上記のようにRTCバッテリーを接続します

**ステップ2:** reComputer Industrialの電源を入れます

**ステップ3:** Ubuntuデスクトップで、右上角のドロップダウンメニューをクリックし、`Settings > Date & Time`に移動し、イーサネットケーブル経由でネットワークに接続して**Automatic Date & Time**を選択し、日付/時刻を自動的に取得します

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::note
イーサネット経由でインターネットに接続していない場合は、ここで日付/時刻を手動で設定できます
:::

**ステップ4:** ターミナルウィンドウを開き、以下のコマンドを実行してハードウェアクロック時刻を確認します

```sh
sudo hwclock
```

以下のような出力が表示されますが、これは正しい日付/時刻ではありません

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/14.png"/></div>

**ステップ 5:** 以下のコマンドを入力して、ハードウェアクロック時刻を現在のシステムクロック時刻に変更します

```sh
sudo hwclock --systohc
```

**ステップ 6:** インターネットから時刻を取得しないようにするため、接続されているイーサネットケーブルをすべて取り外し、ボードを再起動してください

```sh
sudo reboot
```

**ステップ7:** ハードウェアクロック時刻を確認して、デバイスの電源がオフになっても日付/時刻が同じままであることを確認します

次に、各起動時にハードウェアクロックからシステムクロックを常に同期するスクリプトを作成します。

**ステップ8:** お好みのテキストエディタを使用して新しいシェルスクリプトを作成します。ここでは**vi**テキストエディタを使用します

```sh
sudo vi /usr/bin/hwtosys.sh 
```

**ステップ 9:** **i** を押して**挿入モード**に入り、ファイル内に以下の内容をコピー＆ペーストします

```sh
#!/bin/bash

sudo hwclock --hctosys
```

**ステップ 10:** スクリプトを実行可能にする

```sh
sudo chmod +x /usr/bin/hwtosys.sh 
```

**ステップ 11:** systemd ファイルを作成します

```sh
sudo nano /lib/systemd/system/hwtosys.service 
```

**ステップ 12:** ファイル内に以下を追加してください

```sh
[Unit]
Description=Change system clock from hardware clock

[Service]
ExecStart=/usr/bin/hwtosys.sh

[Install]
WantedBy=multi-user.target
```

**ステップ 13:** systemctl デーモンをリロードする

```sh
sudo systemctl daemon-reload 
```

**ステップ 14:** 新しく作成したサービスを起動時に開始するように有効化し、サービスを開始する

```sh
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

**ステップ 15:** スクリプトがsystemdサービスとして起動し実行されていることを確認する

```sh
sudo systemctl status hwtosys.service
```

**ステップ 16:** ボードを再起動すると、システムクロックがハードウェアクロックと同期されていることが確認できます

## M.2 Key M

reComputer Industrialには、M.2 Key Mスロットに接続された128GB SSDが標準で含まれており、JetPackシステムがプリインストールされています。

### 接続概要

付属のSSDを取り外して新しいものを取り付けたい場合は、以下の手順に従ってください。ここでは、[128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)、[256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)、[512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)ストレージのSeeed SSDのみを推奨します。これらのSSDのみをテストしているためです。さらに、このインターフェースはPCIe Gen4.0 SSDをサポートしています。

- **ステップ 1:** プリインストールされたSSDのネジを取り外します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/15.png"/></div>

- **ステップ 2:** SSDコネクタから離すようにスライドしてSSDを取り外します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/16.png"/></div>

- **ステップ 3:** 新しいSSDを挿入し、ネジを締め直します

### 使用方法

接続されたSSDで簡単なベンチマークを実行する方法を説明します

- **ステップ 1:** 以下のコマンドを実行して書き込み速度を確認します

```sh
sudo dd if=/dev/zero of=/home/nvidia/test bs=1M count=512 conv=fdatasync
```

- **ステップ 2:** 以下のコマンドを実行して読み取り速度を確認します。上記の書き込み速度のコマンドを実行した後に、必ずこれを実行してください。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/nvidia/test of=/dev/null bs=1M count=512
```

## mini PCIe

reComputer Industrial には、4G および LoRa モジュールをサポートする mini PCIe コネクタが付属しています。ただし、4G モジュールまたは LoRa モジュールのいずれか一方のみを同時に接続できます。

### 4G モジュール接続概要

現在、このボードは EC25EUXGA および EC20CEHCLG モジュールをサポートしています。

- **ステップ 1:** ボードが既に電源オンの場合は、電源をオフにします

- **ステップ 2:** 付属のスタンドオフを取り外します。このスタンドオフは M.2 Key B インターフェースを使用する場合にのみ必要です

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/110.jpg"/></div>

- **ステップ 3:** 4G モジュールを mini PCIe スロットにスライドして挿入し、事前に取り付けられているネジを使用して 2 つの穴にネジ止めし、4G モジュールを固定します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/17.png"/></div>

- **ステップ 4:** **MAIN** とラベル付けされたアンテナコネクタにアンテナを接続します。ここでは IPEX コネクタを使用する必要があります

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/18.png"/></div>

- **ステップ 5:** 4G 対応の nano SIM カードをボード上の SIM カードスロットに挿入します。SIM カードの金色の面が下向きになるようにしてください。カードを奥まで挿入し、内部のスプリングに当たって跳ね返り、所定の位置にロックされるようにします。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/19.png"/></div>

:::note
SIM カードを取り外したい場合は、カードを押し込んで内部のスプリングに当て、SIM がスロットから出てくるようにします
:::

- **ステップ 6:** **J8 (Control and UART) Header** の **SIM_MUX_SEL** と **GND** ピンの間にジャンパーを追加します

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/20.png"/></div>

- **ステップ 6:** ボードの電源をオンにします

### 4G モジュール使用方法 - テストダイヤル

EC25 モジュールを使用する場合、モジュールは自動的に起動し、使用準備が整います。ただし、EC20 モジュールを使用する場合は、動作させるためにモジュールをリセットする必要があります

**ステップ 1:** EC25 モジュールを使用している場合は、このステップをスキップできます。ただし、EC20 モジュールを使用している場合は、以下のコマンドを入力して、4G モジュールのリセットを担当する GPIO309 ピンにアクセスします。

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo su 
cd /sys/class/gpio
echo 309 > export 
cd gpio309
echo out > direction
echo 1 > value
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo gpioset --mode=wait gpiochip2 9=1
```

</TabItem>
</Tabs>

EC25モジュールの場合、ボードが起動するとすぐにLED2が緑色に点灯します。EC20モジュールの場合、上記で説明したようにモジュールをリセットした後にLED2が緑色に点灯します

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/118.jpg"/></div>

**ステップ 2:** minicomをインストールする

```sh
sudo apt update
sudo apt install minicom -y
```

**ステップ3:** 接続された4Gモジュールのシリアルコンソールに入り、ATコマンドを入力して4Gモジュールと対話できるようにします

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**ステップ4:** **Ctrl+A**を押してから**E**を押してローカルエコーをオンにします

**ステップ5:** コマンド**"AT"**を入力してEnterを押します。レスポンスが"OK"と表示されれば、4Gモジュールが正常に動作しています

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/></div>

**ステップ6:** コマンド**"ATI"**を入力してモジュール情報を確認します

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/></div>

**ステップ7:** モジュールをテストするには、以下のコマンドを入力して別の電話番号に発信します

```sh
ATD<phone_number>;
```

そして、以下の出力が表示されます

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/24.jpg"/></div>

入力した電話番号に電話がかかる場合、モジュールは期待通りに動作しています

### 4Gモジュールの使用方法 - インターネットへの接続

#### EC25モジュール

EC25モジュールを使用している場合は、以下の手順に従ってください

- **ステップ1:** 上記で説明した4Gモジュールのシリアルコンソールを開いた後（4Gモジュールの使用方法 - テストダイヤル セクション）、以下のコマンドを実行してインターネットに接続します。ここで**YOUR_APN**をネットワークプロバイダーのAPNに置き換えてください

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

#### EC20モジュール

EC20モジュールを使用している場合は、以下の手順に従ってください

- **ステップ1:** 前のセクション（4Gモジュール使用方法 - テストダイヤリングセクション）でEC20モジュール用に説明されているように4Gモジュールをすでにリセットしている場合は、このステップをスキップできます。ただし、まだ実行していない場合は、今すぐ実行してください

- **ステップ2:** 4Gモジュールのシリアルコンソールにアクセスし、以下のコマンドを入力してECMモードに設定します

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

### LoRa モジュール接続概要

現在このボードは WM1302 SPI モジュールをサポートしています。当社の Bazaar で入手可能な [US版](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html) または [EU版](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html) のいずれかを使用できます。

- **ステップ 1:** ボードがすでに電源オンの場合は電源を切ります

- **ステップ 2:** LoRa モジュールを mini PCIe スロットにスライドして挿入し、事前に取り付けられたネジを使用して 2 つの穴にネジ止めし、4G モジュールを所定の位置に固定します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/25.png"/></div>

- **ステップ 3:** アンテナをアンテナコネクタに接続します。ここでは IPEX コネクタを使用する必要があります

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/26.png"/></div>

:::note
**J8 (Control and UART) ヘッダー** の **SIM_MUX_SEL** と **GND** ピン間にジャンパーがないことを確認してください。このジャンパーは 4G モジュールを使用する場合にのみ必要です
:::

- **ステップ 4:** ボードの電源を入れます

### LoRa モジュール使用方法 - LoRa RF のテスト

LoRa モジュールが接続されると、モジュール上の緑と青の LED が点灯します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/27.png"/></div>

- **ステップ 1:** 以下のコマンドを入力して、LoRa モジュールがシステムによって検出されているかどうかを確認します

```sh
i2cdetect -r -y 7
```

以下の出力が表示された場合、モジュールがシステムによって検出されています

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/29.png"/></div>

- **ステップ 2:** 以下のコマンドを入力してLoRa信号送信ツールをコンパイルおよびビルドします

:::danger
この**LoRa信号送信ツール**はJetpack5にのみ適用可能であることにご注意ください。Jetpack6でLoRaモジュール機能をテストしたい場合は、[回路図](https://github.com/Seeed-Studio/OSHW-Jetson-Series/blob/main/reComputer%20Jetson%20carrier%20board/reComputer%20Industrial%20J201/Schematic/reComputer%20Industrial%20J201_V1.2.pdf)と[pinmux](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)を参照してピン名を確認し、`gpioset`コマンドを使用してピンの状態を設定してください。
:::

```bash
git clone https://github.com/lakshanthad/sx1302_hal
cd sx1302_hal
make
cd libloragw
cp ../tools/reset_lgw.sh .
sudo ./test_loragw_hal_tx -r 1250 -m LORA -f 867.1 -s 12 -b 125 -n 1000 -z 100 --dig 3 --pa 0 --pwid 13 -d /dev/spidev2.0
```

以下の結果が表示され、LoRaモジュールのLEDが赤色に点灯した場合、モジュールがRF信号を正常に送信していることを意味します

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/78.jpg"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/28.png"/></div>

送信を停止するには、キーボードで**CTRL + C**を押してください。

### LoRaモジュールの使用方法 - TTNへの接続

次に、TTN（The Things Network）に接続し、reComputer IndustrialをTTN LoRaWANゲートウェイとして使用します

- **ステップ1:** パケットフォワーダーを準備するために、以下を入力してください

```sh
cd ..
cd packet_forwarder
cp ../tools/reset_lgw.sh .
```

- **ステップ 2:** 使用している LoRa モジュールに応じて以下を実行します。ここでは SPI US915 バージョンをテストしました

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

- **ステップ 8:** 使用しているLoRaモジュールに応じて**Frequency plan**を入力してください。ここではモジュールのUS915バージョンを使用しているため、**United Stated 902-928 MHz, FSB 2 (used by TTN)**を選択しています。その後、**Register gateway**をクリックしてください

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

reComputer Industrialには、4Gおよび5GモジュールをサポートするM.2 Key Bコネクタが搭載されています。現在、**SIM8202G-M2 5Gモジュール**をテストしています

### 5Gモジュール接続概要

- **ステップ1:** ボードが既に電源オンの場合は、電源をオフにします

- **ステップ2:** スタンドオフが所定の位置にあることを確認し、スタンドオフの上部ネジを取り外します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/111.jpg"/></div>

- **ステップ2:** 5GモジュールをM.2 Key Bスロットにスライドして挿入し、スタンドオフネジを締めて5Gモジュールを固定します（スタンドオフについて説明）

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/112.jpg"/></div>

- **ステップ3:** モジュールのアンテナコネクタに4本のアンテナを接続します。ここではIPEX 4コネクタを使用する必要があります

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/113.jpg"/></div>

- **ステップ4:** 5G対応のnano SIMカードをボード上のSIMカードスロットに挿入します。SIMカードの金色の面が下向きになるようにしてください。ここでは、カードを奥まで挿入し、内部スプリングに当たって跳ね返り、所定の位置にロックされるようにします。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/19.png"/></div>

:::note
SIMカードを取り外したい場合は、カードを押し込んで内部スプリングに当て、SIMがスロットから出てくるようにします
:::

- **ステップ5:** ボードの電源をオンにします

### 5Gモジュール使用方法 - テストダイヤル

SIM8202G-M2 5Gモジュールを使用する場合、モジュールは自動的に起動しません。そのため、まずいくつかのGPIOを切り替えて起動させる必要があります

**ステップ1:** 以下を入力して5Gモジュールを起動します

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
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

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo gpioset --mode=wait gpiochip2 9=0
sudo gpioset --mode=wait gpiochip1 25=1
sudo gpioset --mode=wait gpiochip1 14=0
```

:::note
これらのコマンドを実行するために複数のターミナルを開き、各ターミナルウィンドウがアクティブな状態を保つようにしてください。
:::

</TabItem>
</Tabs>

上記を実行すると、LED2が以下のように緑色に点灯します

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/117.jpg"/></div>

**ステップ 2:** minicomをインストール

```sh
sudo apt update
sudo apt install minicom -y
```

**ステップ3:** 接続された5Gモジュールのシリアルコンソールに入り、ATコマンドを入力して5Gモジュールと対話できるようにします

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**ステップ4:** コマンド **"AT"** を入力してEnterキーを押します。レスポンスが"OK"と表示されれば、5Gモジュールが正常に動作しています

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/107.png"/></div>

**ステップ5:** コマンド **"ATI"** を入力してモジュール情報を確認します

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/108.png"/></div>

**ステップ6:** モジュールをテストするために、以下のコマンドを入力して他の電話番号に発信します

```sh
ATD<phone_number>;
```

そして、以下の出力が表示されます

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/109.png"/></div>

## DI/ DO

reComputer Industrialは4つのデジタル入力と4つのデジタル出力チャンネルをサポートしており、すべて光学的に絶縁されているため、電圧スパイクやその他の電気的外乱からメインボードを効果的に保護します。この同じコネクタにはCANインターフェースもあり、これについてはこのwikiで後ほど説明します。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/37.png"/></div>

### DI/ DO ピン配置表

<table>
  <thead>
    <tr>
      <th>タイプ</th>
      <th>ラベル名</th>
      <th>回路図信号</th>
      <th>モジュールピン番号</th>
      <th>BGA番号</th>
      <th>GPIO 番号</th>
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
      <td rowSpan={4}>12Vデジタル入力、グランド信号は<br />GND_DI (Pin2/4/6)に接続する必要があります</td>
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
      <td rowSpan={4}>デジタル出力、最大耐電圧<br />40V、グランド信号は<br />GND_DO(Pin8/10)に接続する必要があります</td>
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
      <td rowSpan={2}>標準差動信号を持つCANバス、<br />グランド信号はGND_ISO (Pin 12)に接続する必要があります</td>
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

:::danger
上記の表のピン番号はJetpack5でのみ有効であることにご注意ください。Jetpack6のピン番号は以下の方法で取得できます：

1. `gpioinfo`コマンドを使用してGPIO表を取得する。
2. **BGA番号**を確認してJetpack6での対応するピン番号を見つける。

:::

### DIの接続概要

以下の図に従ってDIの接続を行うことができます。DI線には直列に抵抗を追加することをお勧めします。ここではDI1ピンに接続された4.7kΩ抵抗でテストしています。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/38.png"/></div>

### DIの使用方法

入力として検出されるためには、DI線に12Vの電圧を入力する必要があります

**ステップ1：** 上記のように**DI1ピン**に接続を行い、**12V**を入力します

**ステップ2：** 以下のようにDI1のステータスを開いて確認します：

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo su 
cd /sys/class/gpio
echo 453 > export 
cd PQ.05

cat value
```

:::note
**DI/ DO ピン割り当て表**を参照して、GPIO番号とBGA番号を確認できます。上記の例では、DI1ピンの場合、GPIO番号は453、BGA番号はPQ.05です
:::

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo gpioget gpiochip0 105
```

</TabItem>
</Tabs>

出力が0の場合、12V入力があることを意味します。出力が1の場合、入力電圧がないことを意味します。

### DOの接続概要

以下の図に従ってDOの接続を行うことができます。DO線には直列に抵抗を追加することをお勧めします。ここでは4.7kΩ抵抗でテストしました。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/39.png"/></div>

### DOの使用方法

上記の図で示したように負荷を接続する必要があります。これをテストする最も簡単な方法は、マルチメーターがあればそれを接続するか、または最大40V未満の電圧を必要とする負荷を接続することです。

**ステップ1:** 上記のように**DO1ピン**に接続を行い、**最大40V**を入力します

**ステップ2:** 以下のようにD01のGPIOを開いてオンにします：

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```sh
sudo su 
cd /sys/class/gpio
echo 399 > export 
cd PI.00
echo out > direction

echo 1 > value
```

:::note
**DI/DO ピン割り当て表**を参照して、GPIO番号とBGA番号を確認できます。上記の例では、DO1ピンの場合、GPIO番号は399、BGA番号はPI.00です
:::

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo gpioset --mode=wait gpiochip0 51=1
```

</TabItem>
</Tabs>

負荷がオンになるか、マルチメーターが入力した電圧を出力する場合、テストは正常に機能しています。

## CAN

reComputer Industrialは、5MbpsでCAN FD（Controller Area Network Flexible Data-Rate）プロトコルをサポートするCANインターフェースを搭載しています。CANインターフェースは容量性絶縁を使用して絶縁されており、優れたEMI保護を提供し、産業用および自動化アプリケーションにおいて信頼性の高い通信を確保します。120Ωの終端抵抗がデフォルトでインストールされており、GPIOを使用してこの抵抗をON/OFFに切り替えることができます。

注意：CANインターフェースは絶縁電源を使用しているため、CANインターフェースに接続される外部デバイスのグランド信号はCGピンに接続する必要があります。

### USB to CANアダプターとの接続概要

CANバスをテストし、インターフェースするには、以下に示すようにUSB to CANアダプターをボード上のCANコネクターに接続します。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/40.png"/></div>

ここでは、当社のBazaarで入手可能な[USB to CAN Analyzer Adapter with USB Cable](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)を使用しています。

### USB to CANアダプターでの使用方法

- **ステップ1：** 使用しているUSB to CANアダプターのドライバーをメーカーのWebサイトからダウンロードしてインストールします。今回使用したアダプターの場合、ドライバーは[こちら](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver)で見つけることができます。

- **ステップ2：** 一部のアダプターには、CANデバイスと通信するためのPC用の必要なソフトウェアも付属しています。今回使用したアダプターの場合、[こちら](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)で見つけることができるソフトウェアをダウンロードしてインストールしました。

- **ステップ3：** reComputer Industrial上でターミナルウィンドウを開き、以下のコマンドを実行してCANインターフェースを設定し、有効にします。

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

- **ステップ 9:** reComputer Industrial で、以下のコマンドを実行して PC に CAN 信号を送信します

```sh
cansend can0 123#abcdabcd
```

以下のように、ソフトウェアが受信した上記の信号が表示されます

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/></div>

- **ステップ 10:** reComputer Industrial で、以下のコマンドを実行して PC からの CAN 信号の受信を待機します

```sh
candump can0 &
```

- **ステップ 11:** CANソフトウェアで、**Send a single frame**をクリックします

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/></div>

これで、以下のようにreComputer Industrialで受信されることが確認できます

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

### reTerminal DMとの接続概要

[reTerminal DM](https://www.seeedstudio.com/reTerminal-DM-p-5616.html)をお持ちの場合、reTerminal DMにもCANインターフェースがあるため、直接通信することができます。

reComputer IndustrialとreTerminal DMをCAN経由で接続するには、以下の画像を参照してください

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/49.png"/></div>

### reTerminal DMでの使用方法

- **ステップ 1:** reTerminal DMを使用する前に、[このwiki](https://wiki.seeedstudio.com/ja/reterminal-dm)を参照してreTerminal DMの使用を開始してください

- **ステップ 2:** reComputer Industrialでターミナルウィンドウを開き、以下のコマンドを実行してCANインターフェースを設定し、有効にします

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **ステップ 3:** reTerminal DM でターミナルウィンドウを開き、以下のコマンドを実行して CAN インターフェースを設定し、有効にします

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **ステップ4:** reTerminal DMでターミナルウィンドウを開き、以下のコマンドを実行してCANインターフェースを設定し有効化します

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **ステップ 5:** 両方のデバイスで **ifconfig** と入力すると、CANインターフェースが有効になっていることが確認できます

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **ステップ 6:** reTerminal DMで、以下を実行してreComputer IndustrialからのCAN信号の受信を待機します

```sh
candump can0 &
```

- **ステップ 7:** reComputer Industrial で、以下のコマンドを実行して reTerminal Industrial に CAN 信号を送信します

```sh
cansend can0 123#abcdabcd
```

今度は以下のようにreTerminal DMで受信されることが確認できます

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

- **ステップ 8:** **ステップ 6とステップ 7**を繰り返しますが、デバイスを入れ替えます。reTerminal DMを使用してCANシグナルを送信し、reComputer IndustrialでCANシグナルを受信します

## RS232/ RS422/ RS485 インターフェース

reComputer IndustrialにはRS232、RS422、RS485通信プロトコルをサポートするDB9コネクタがあり、オンボードにDIPスイッチパネルがあり、異なるインターフェースオプション間を切り替えることができます

DIPスイッチパネルは以下のように確認できます：

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/51.png"/></div>

:::note
DIPスイッチパネルを使用する前に、黄色のプラスチックカバーを必ず取り外してください
:::

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
      <td>終端抵抗付き1T/1R RS-422</td>
    </tr>
    <tr>
      <td rowSpan={3}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/57.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={3}>1</td>
      <td rowSpan={3}>0</td>
      <td rowSpan={3}>1</td>
      <td rowSpan={3}>純粋なRS-232</td>
      <td>RS485と共存する1T/1R RS-232</td>
    </tr>
    <tr>
      <td>バススイッチICを必要としない</td>
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
      <td>終端抵抗付き1T/1R RS-485</td>
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

上記の表は、DIPスイッチパネルの最初の3つのスイッチを考慮しています。ただし、4番目のスイッチはスルーレートの切り替えを担当しており、これはデータレートに直接関連しています

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

- **ステップ1：** [このウェブサイト](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)にアクセスし、PCのアーキテクチャに応じてPuttyをダウンロードしてください

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

**ステップ1:** ボードの電源を切る

**ステップ2:** ここでは、DIPスイッチを設定するために2つのオプションがあります。001モードまたは101モードのいずれかです。各モードのスイッチ位置を以下に示します

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/64.png"/></div>

**ステップ3:** USB to RS232アダプターをDB9コネクターに接続します。ここでは、上記で言及したアダプターを接続しました

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/68.jpg"/></div>

**ステップ4:** もう一方の端をPCのUSBポートの1つに接続します

**ステップ5:** ボードの電源を入れる

### RS232の使用方法

**ステップ1:** 使用しているアダプターのドライバーをインストールする必要がある場合があります。または、Windowsが自動的にドライバーをインストールします。Windowsの検索で**デバイスマネージャー**と入力してデバイスマネージャーを開き、接続されたアダプターがCOMデバイスとして表示されているかどうかを確認します。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/67.jpg"/></div>

**ステップ2:** アダプターが表示されない場合は、使用しているアダプターに応じてドライバーをインストールする必要があります。これらのドライバーは一般的にメーカーのウェブサイトで見つけることができます。私たちが使用しているアダプターについては、[このページ](https://www.ugreen.com/pages/download)にアクセスし、モデル番号として**20201**を検索し、それに応じてドライバーをダウンロードできます

**ステップ3:** PCでPuttyを開き、**Terminal**セクションを選択して以下を設定します

- ローカルエコー: 強制オン
- ローカル行編集: 強制オン

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

**ステップ4:** **Session**を選択し、**Connection type**で**Serial**を選択し、**デバイスマネージャー**で確認したシリアルポート番号を設定し、Speedはデフォルト（9600）のままにして**Open**をクリックします

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/71.jpg"/></div>

**ステップ5:** reTerminal Industrialのターミナルウィンドウで、以下を入力してreComputerからPCに信号を送信します

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS232 message from reComputer Industrial" > /dev/ttyTHS0
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo chmod 777 /dev/ttyTHS1
sudo echo "RS232 message from reComputer Industrial" > /dev/ttyTHS1
```

</TabItem>
</Tabs>

これで、Puttyにこのメッセージが表示されます

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/72.jpg"/></div>

**ステップ 6:** reTerminal Industrialのターミナルウィンドウで、以下を入力してPCからの信号の受信を待機します

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo cat /dev/ttyTHS0
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo cat /dev/ttyTHS1
```

</TabItem>
</Tabs>

Puttyで何かを入力し、**ENTER**を押すと、reComputer Industrialのターミナルウィンドウに表示されます

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/73.png"/></div>

### RS422接続概要

ここでは、USB to RS422アダプターを使用してインターフェースをテストできます。テストには[DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K)を使用しました。

**ステップ1:** ボードの電源を切る

**ステップ2:** ここでは、DIPスイッチを設定する2つのオプションがあります。000モードまたは100モードのいずれかです。各モードのスイッチ位置を以下に示します

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/65.png"/></div>

**ステップ3:** 以下に示すように、ジャンパーワイヤーを使用してUSB to RS422アダプターをDB9コネクターに接続します。ここでは、上記で言及したアダプターを接続しました

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/74.png"/></div>

**ステップ4:** もう一方の端をPCのUSBポートの1つに接続します

**ステップ5:** ボードの電源を入れる

### RS422の使用方法

**ステップ1:** 使用しているアダプターのドライバーをインストールする必要がある場合があります。または、Windowsが自動的にドライバーをインストールします。Windowsの検索で**デバイスマネージャー**と入力してデバイスマネージャーを開き、接続されたアダプターがCOMデバイスとして表示されているかどうかを確認します。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

**ステップ2:** アダプターが表示されない場合は、使用しているアダプターに応じてドライバーをインストールする必要があります。これらのドライバーは通常、メーカーのウェブサイトで見つけることができます。使用しているアダプターについては、[このページ](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)を参照してください

**ステップ3:** PCでPuttyを開き、**Terminal**セクションを選択して以下を設定します

- ローカルエコー: 強制オン
- ローカル行編集: 強制オン

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

**ステップ4:** **Session**を選択し、**Connection type**で**Serial**を選択し、**デバイスマネージャー**で確認したシリアルポート番号を設定し、Speedはデフォルト（9600）のままにして**Open**をクリックします

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

**ステップ5:** reTerminal Industrialのターミナルウィンドウで、以下を入力してreComputerからPCに信号を送信します

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS422 message from reComputer Industrial" > /dev/ttyTHS0
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo chmod 777 /dev/ttyTHS1
sudo echo "RS422 message from reComputer Industrial" > /dev/ttyTHS1
```

</TabItem>
</Tabs>

これで、Putty にこのメッセージが表示されます

**ステップ 6:** reTerminal Industrial のターミナルウィンドウで、以下を入力して PC からの信号の受信を待機します

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo cat /dev/ttyTHS0
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo cat /dev/ttyTHS1
```

</TabItem>
</Tabs>

Puttyで何かを入力し、**ENTER**を押すと、reComputer Industrialのターミナルウィンドウに表示されます

### RS485 接続概要

ここでは、USB to RS422アダプターを使用してインターフェースをテストできます。テストには[DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K)を使用しました。

**ステップ1:** ボードの電源を切る

**ステップ2:** ここでは、DIPスイッチを設定する3つのオプションがあります。010モード、011モード、または110モードのいずれかです。各モードのスイッチ位置を以下に示します

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/66.png"/></div>

**ステップ3:** 以下に示すように、ジャンパーワイヤーを使用してUSB to RS422アダプターをDB9コネクターに接続します。ここでは、上記で言及したアダプターを接続しました

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/77.png"/></div>

**ステップ4:** もう一方の端をPCのUSBポートの1つに接続します

**ステップ5:** ボードの電源を入れる

### RS485 使用方法

**ステップ1:** 使用しているアダプターのドライバーをインストールする必要がある場合があります。または、Windowsが自動的にドライバーをインストールします。Windowsの検索で**Device Manager**と入力してデバイスマネージャーを開き、接続されたアダプターがCOMデバイスとして表示されているかどうかを確認します。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

**ステップ2:** アダプターが表示されない場合は、使用しているアダプターに応じてドライバーをインストールする必要があります。これらのドライバーは通常、メーカーのウェブサイトで見つけることができます。使用しているアダプターについては、[このページ](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)を参照してください

**ステップ3:** PCでPuttyを開き、**Terminal**セクションを選択して以下を設定します

- ローカルエコー: 強制オン
- ローカル行編集: 強制オン

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

**ステップ4:** **Session**を選択し、**Connection type**で**Serial**を選択し、**Device Manager**で確認したシリアルポート番号を設定し、Speedはデフォルト（9600）のままにして**Open**をクリックします

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

**ステップ5:** reTerminal Industrialのターミナルウィンドウで、以下を入力してreComputerからPCに信号を送信します

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo su 
cd /sys/class/gpio 
echo 460 > export 
cd PR.04
echo out > direction
echo 0 > value
echo "RS485 message from reComputer Industrial" > /dev/ttyTHS0
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo chmod 777 /dev/ttyTHS1
sudo gpioset gpiochip0 112=0
echo "RS485 message from reComputer Industrial" > /dev/ttyTHS1
```

</TabItem>
</Tabs>

これで、Putty にこのメッセージが表示されます

**ステップ 6:** reTerminal Industrial のターミナルウィンドウで、以下を入力して PC からの信号の受信を待機します

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo su
cd /sys/class/gpio
echo 460 > export
cd PR.04
echo out > direction
echo 1 > value
cat /dev/ttyTHS0
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo chmod 777 /dev/ttyTHS1
sudo gpioset gpiochip0 112=1
cat /dev/ttyTHS1
```

</TabItem>
</Tabs>

Puttyで何かを入力し、**ENTER**を押すと、reComputer Industrialのターミナルウィンドウに表示されます

## ギガビットイーサネットコネクタ

reComputer Industrialには2つのギガビットイーサネット（10/100/1000M）コネクタがあり、それぞれ異なる機能を持っています

- 左端のコネクタはJetsonモジュールに直接接続されており、**PSE 802.3 af、15W**仕様のPoE機能を提供できます。これは、PoE IPカメラやその他のPoEデバイスをこのポートに接続して、接続されたデバイスに電力を供給できることを意味します。
- もう一方のコネクタは、PCIeからイーサネット（LAN7430-I/Y9X）モジュール経由で接続されています

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/36.png"/></div>

各イーサネットポートには2つのLED（緑と黄色）があり、以下を示します

- 緑LED：1000Mネットワークに接続されている場合のみ点灯
- 黄色LED：ネットワークアクティビティステータスを表示

## USB

reComputer Industrialには3つのUSB3.2コネクタがオンボードで搭載されており、以下の機能があります：

- デュアルスタックUSBコネクタでは、上下のUSBポートが電流制限ICを共有し、最大出力電流2.1Aの総電力供給能力を持ちます（単体でも2.1A可能）。2.1Aを超えると、過電流保護状態に入ります。
- デュアルスタックUSBコネクタの隣にある単体USBコネクタは、最大出力電流2.1Aの総電力供給能力を持ちます。2.1Aを超えると、過電流保護状態に入ります。
- Orin NXモジュールには3つのUSB3.2が搭載されており、そのうち1つのみがreComputerで使用され、3つに分岐されています（USB3.1 TYPE-A x2 - J4およびUSB3.1 TYPE-A x1 -J3）。
- USBホストのみサポート、デバイスモードはサポートしません
- 5V 2.1Aを提供
- ホットスワップ対応

### 使用方法

接続されたUSBフラッシュドライブで簡単なベンチマークを実行する方法を説明します

- **ステップ1：** 以下のコマンドを実行して書き込み速度を確認します

```sh
sudo dd if=/dev/zero of=/dev/$1 bs=100M count=10 conv=fdatasync
```

- **ステップ2:** 以下のコマンドを実行して読み取り速度を確認します。書き込み速度の上記コマンドを実行した後に、必ずこれを実行してください。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/dev/$1 of=/dev/null bs=100M count=10
```

## 設定可能なLED

基板上には以下に示すように緑色のLEDが配置されています。デフォルトでは、デバイスが正常に動作していることを示すLEDとして機能しています。ただし、このLEDをシステムによってON/OFFするようにプログラムすることも可能です。

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/21.png"/></div>

### 使用方法

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

**ステップ1:** ターミナルウィンドウで以下のコマンドを入力して、緑色LEDにアクセスします

```sh
sudo -i
cd /sys/class/gpio
echo 329 > export 
cd PCC.01
echo out > direction 
```

**ステップ 2:** LEDをオフにする

```sh
echo 0 > value 
```

**ステップ 3:** LED をONする

```sh
echo 1 > value 
```

LEDの使用が完了したら、以下を実行できます

```sh
cd ..
echo 329 > unexport
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

LEDをオフにする：

```sh
sudo gpioset gpiochip1 13=0
```

LEDをオンにする：

```bash
sudo gpioset gpiochip1 13=1
```

</TabItem>
</Tabs>

## システムパフォーマンスの監視

**jetson stats** アプリケーションを使用して、システムコンポーネントの温度を監視し、以下のような他のシステム詳細を確認できます

- CPU、GPU、RAM使用率の表示
- 電源モードの変更
- 最大クロックの設定
- JetPack 情報の確認

- **ステップ 1:** reComputer Industrial ターミナルウィンドウで、以下を入力します

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

## WiFi と Bluetooth

reComputer Industrial は、WiFi と Bluetooth を標準では搭載していません。しかし、PCB 上に予約されたセクションがあり、WiFi/Bluetooth モジュールを基板にはんだ付けできます。ここでは **BL-M8723DU1** モジュールをサポートするためのスペースを予約しています。

### 接続概要

- **ステップ 1:** **BL-M8723DU1** モジュールを自分ではんだ付けしたい場合は、はんだ付けできます。しかし、プロセス中に基板を損傷した場合、保証が無効になるため、これは推奨しません。推奨するのは、このモジュールを基板にはんだ付けするための専門サービスを利用することです。リクエストと共に order@seeed.cc にメールを送信してください。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/31.jpg"/></div>

- **ステップ 2:** WiFi と Bluetooth 用に、基板上の 2 つのアンテナコネクタに 2 つのアンテナを接続します。ここでは IPEX コネクタを使用する必要があります

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/32.png"/></div>

### 使用方法

- **ステップ 1:** 基板の電源を入れ、デバイスが Ubuntu Desktop に起動したら、右上角のドロップダウンメニューをクリックし、`Settings > Wi-Fi` に移動して、タイトルバーのボタンを切り替えて WiFi を有効にします。その後、WiFi ネットワークを選択し、必要なパスワードを入力して接続します

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/33.png"/></div>

- **ステップ 2:** 同じウィンドウで、**Bluetooth** を選択し、タイトルバーのボタンを切り替えて Bluetooth を有効にします。その後、接続する Bluetooth デバイスを選択します

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/34.png"/></div>

## TPM

reComputer Industrial には、外部 TPM モジュールを接続するための TPM インターフェースが付属しています。ここでは Infineon SLB9670 ベースの TPM2.0 モジュールでテストしました。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/114.jpg"/></div>

### 接続概要

以下に示すように、TPM モジュールを TPM コネクタに接続します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/115.jpg"/></div>

### 使用方法

以下のコマンドを実行して、TPM モジュールが正しく読み込まれているかどうかを確認します

```sh
sudo dmesg | grep TPM
ls /dev/tpm* -l
```

以下のような出力が表示されます

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/116.png"/></div>

## reComputer Industrial での最大パフォーマンス

reComputer Industrial で最大パフォーマンスを有効にしたい場合は、以下の手順に従ってください

- **ステップ 1:** 以下のコマンドを入力して最大パワーモードを有効にします

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

reComputer IndustrialのGPIOテーブルにアクセスして、すべてのピンマッピングに慣れることができます。

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

アクセスするには、ターミナル内で以下を実行してください

```bash
sudo cat /sys/kernel/debug/gpio
```

そして、以下のような出力が表示されます

```bash
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

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

ターミナル内で以下を実行してアクセスしてください。

```bash
gpioinfo
```

そして、以下のような出力が表示されます

```bash
seeed@seeed-desktop:~$ gpioinfo 
gpiochip0 - 164 lines:
 line   0:      "PA.00" "regulator-vdd-3v3-sd" output active-high [used]
 line   1:      "PA.01"       unused   input  active-high 
 line   2:      "PA.02"       unused   input  active-high 
 line   3:      "PA.03"       unused   input  active-high 
 line   4:      "PA.04"       unused   input  active-high 
 line   5:      "PA.05"       unused   input  active-high 
 line   6:      "PA.06"       unused   input  active-high 
 line   7:      "PA.07"       unused   input  active-high 
 line   8:      "PB.00"       unused   input  active-high 
 line   9:      "PC.00"       unused   input  active-high 
 line  10:      "PC.01"       unused   input  active-high 
 line  11:      "PC.02"       unused   input  active-high 
 line  12:      "PC.03"       unused   input  active-high 
 line  13:      "PC.04"       unused   input  active-high 
 line  14:      "PC.05"       unused   input  active-high 
 line  15:      "PC.06"       unused   input  active-high 
 line  16:      "PC.07"       unused   input  active-high 
 line  17:      "PD.00"       unused   input  active-high 
 line  18:      "PD.01"       unused   input  active-high 
 line  19:      "PD.02"       unused   input  active-high 
 line  20:      "PD.03"       unused   input  active-high 
 line  21:      "PE.00"       unused   input  active-high 
 line  22:      "PE.01"       unused   input  active-high 
 line  23:      "PE.02"       unused   input  active-high 
 line  24:      "PE.03"       unused   input  active-high 
 line  25:      "PE.04"       unused   input  active-high 
 line  26:      "PE.05"       unused   input  active-high 
 line  27:      "PE.06"       unused   input  active-high 
 line  28:      "PE.07"       unused   input  active-high 
 line  29:      "PF.00"       unused   input  active-high 
 line  30:      "PF.01"       unused   input  active-high 
 line  31:      "PF.02"       unused   input  active-high 
 line  32:      "PF.03"       unused   input  active-high 
 line  33:      "PF.04"       unused   input  active-high 
 line  34:      "PF.05"       unused   input  active-high 
 line  35:      "PG.00" "Force Recovery" input active-low [used]
 line  36:      "PG.01"       unused   input  active-high 
 line  37:      "PG.02"    "Suspend"   input   active-low [used]
 line  38:      "PG.03"       unused   input  active-high 
 line  39:      "PG.04"       unused   input  active-high 
 line  40:      "PG.05"       unused   input  active-high 
 line  41:      "PG.06"       unused   input  active-high 
 line  42:      "PG.07"       unused   input  active-high 
 line  43:      "PH.00"       unused   input  active-high 
 line  44:      "PH.01"       unused   input  active-high 
 line  45:      "PH.02"       unused   input  active-high 
 line  46:      "PH.03" "camera-control-output-low" output active-high [used]
 line  47:      "PH.04"       unused   input  active-high 
 line  48:      "PH.05"       unused   input  active-high 
 line  49:      "PH.06"       unused  output  active-high 
 line  50:      "PH.07"       unused   input  active-high 
 line  51:      "PI.00"       unused  output  active-high 
 line  52:      "PI.01"       unused   input  active-high 
 line  53:      "PI.02"       unused   input  active-high 
 line  54:      "PI.03"       unused   input  active-high 
 line  55:      "PI.04"       unused   input  active-high 
 line  56:      "PI.05"       kernel   input  active-high [used]
 line  57:      "PI.06"       unused   input  active-high 
 line  58:      "PJ.00"       unused   input  active-high 
 line  59:      "PJ.01"       unused   input  active-high 
 line  60:      "PJ.02"       unused   input  active-high 
 line  61:      "PJ.03"       unused   input  active-high 
 line  62:      "PJ.04"       unused   input  active-high 
 line  63:      "PJ.05"       unused   input  active-high 
 line  64:      "PK.00"       unused   input  active-high 
 line  65:      "PK.01"       unused   input  active-high 
 line  66:      "PK.02"       unused   input  active-high 
 line  67:      "PK.03"       unused   input  active-high 
 line  68:      "PK.04"       unused  output  active-high 
 line  69:      "PK.05"       unused  output  active-high 
 line  70:      "PK.06"       unused   input  active-high 
 line  71:      "PK.07"       unused   input  active-high 
 line  72:      "PL.00"       unused   input  active-high 
 line  73:      "PL.01"       unused   input  active-high 
 line  74:      "PL.02"       unused   input  active-high 
 line  75:      "PL.03"       unused   input  active-high 
 line  76:      "PM.00"       kernel   input  active-high [used]
 line  77:      "PM.01"       unused   input  active-high 
 line  78:      "PM.02"       unused   input  active-high 
 line  79:      "PM.03"       unused   input  active-high 
 line  80:      "PM.04"       unused   input  active-high 
 line  81:      "PM.05"       unused   input  active-high 
 line  82:      "PM.06"       unused   input  active-high 
 line  83:      "PM.07"       unused   input  active-high 
 line  84:      "PN.00"       unused   input  active-high 
 line  85:      "PN.01"  "interrupt"   input  active-high [used]
 line  86:      "PN.02"       unused   input  active-high 
 line  87:      "PN.03"       unused   input  active-high 
 line  88:      "PN.04"       unused   input  active-high 
 line  89:      "PN.05"       unused   input  active-high 
 line  90:      "PN.06"       unused   input  active-high 
 line  91:      "PN.07"       unused   input  active-high 
 line  92:      "PP.00"       unused   input  active-high 
 line  93:      "PP.01"       unused   input  active-high 
 line  94:      "PP.02"       unused   input  active-high 
 line  95:      "PP.03"       unused   input  active-high 
 line  96:      "PP.04"       unused   input  active-high 
 line  97:      "PP.05"       unused   input  active-high 
 line  98:      "PP.06"       unused   input  active-high 
 line  99:      "PP.07"       unused   input  active-high 
 line 100:      "PQ.00"       unused   input  active-high 
 line 101:      "PQ.01"       unused   input  active-high 
 line 102:      "PQ.02"       unused   input  active-high 
 line 103:      "PQ.03"       unused  output  active-high 
 line 104:      "PQ.04"       unused   input  active-high 
 line 105:      "PQ.05"       unused   input  active-high 
 line 106:      "PQ.06"       unused   input  active-high 
 line 107:      "PQ.07"       unused   input  active-high 
 line 108:      "PR.00"       unused   input  active-high 
 line 109:      "PR.01"       unused   input  active-high 
 line 110:      "PR.02"       unused   input  active-high 
 line 111:      "PR.03"       unused   input  active-high 
 line 112:      "PR.04"       unused   input  active-high 
 line 113:      "PR.05"       unused   input  active-high 
 line 114:      "PX.00"       kernel   input  active-high [used]
 line 115:      "PX.01"       kernel   input  active-high [used]
 line 116:      "PX.02"       unused   input  active-high 
 line 117:      "PX.03"       unused   input  active-high 
 line 118:      "PX.04"       unused   input  active-high 
 line 119:      "PX.05"       unused   input  active-high 
 line 120:      "PX.06"       unused   input  active-high 
 line 121:      "PX.07"       unused   input  active-high 
 line 122:      "PY.00"       unused   input  active-high 
 line 123:      "PY.01"       unused   input  active-high 
 line 124:      "PY.02"       unused   input  active-high 
 line 125:      "PY.03"       unused   input  active-high 
 line 126:      "PY.04"       unused   input  active-high 
 line 127:      "PY.05"       unused   input  active-high 
 line 128:      "PY.06"       unused   input  active-high 
 line 129:      "PY.07"       unused   input  active-high 
 line 130:      "PZ.00"       unused   input  active-high 
 line 131:      "PZ.01"       "vbus"   input   active-low [used]
 line 132:      "PZ.02"       unused   input  active-high 
 line 133:      "PZ.03"       unused   input  active-high 
 line 134:      "PZ.04"       unused   input  active-high 
 line 135:      "PZ.05"       unused   input  active-high 
 line 136:      "PZ.06"   "spi0 CS0"  output   active-low [used]
 line 137:      "PZ.07"       unused   input  active-high 
 line 138:     "PAC.00"       unused  output  active-high 
 line 139:     "PAC.01"       unused   input  active-high 
 line 140:     "PAC.02"       unused   input  active-high 
 line 141:     "PAC.03"       unused   input  active-high 
 line 142:     "PAC.04"       unused   input  active-high 
 line 143:     "PAC.05"       unused   input  active-high 
 line 144:     "PAC.06"       unused   input  active-high 
 line 145:     "PAC.07"       unused   input  active-high 
 line 146:     "PAD.00"       unused   input  active-high 
 line 147:     "PAD.01"       unused   input  active-high 
 line 148:     "PAD.02"       unused   input  active-high 
 line 149:     "PAD.03"       unused   input  active-high 
 line 150:     "PAE.00"       unused   input  active-high 
 line 151:     "PAE.01"       unused   input  active-high 
 line 152:     "PAF.00"       unused   input  active-high 
 line 153:     "PAF.01"       unused   input  active-high 
 line 154:     "PAF.02"       unused   input  active-high 
 line 155:     "PAF.03"       unused   input  active-high 
 line 156:     "PAG.00"       unused   input  active-high 
 line 157:     "PAG.01"       unused   input  active-high 
 line 158:     "PAG.02"       unused   input  active-high 
 line 159:     "PAG.03"       unused   input  active-high 
 line 160:     "PAG.04"       unused   input  active-high 
 line 161:     "PAG.05"       unused   input  active-high 
 line 162:     "PAG.06"       unused   input  active-high 
 line 163:     "PAG.07"       unused   input  active-high 
gpiochip1 - 32 lines:
 line   0:     "PAA.00"       unused   input  active-high 
 line   1:     "PAA.01"       unused   input  active-high 
 line   2:     "PAA.02"       unused   input  active-high 
 line   3:     "PAA.03"       unused   input  active-high 
 line   4:     "PAA.04"       unused  output  active-high 
 line   5:     "PAA.05" "regulator-vdd-3v3-pcie" output active-high [used]
 line   6:     "PAA.06"       unused   input  active-high 
 line   7:     "PAA.07"       unused   input  active-high 
 line   8:     "PBB.00"       unused   input  active-high 
 line   9:     "PBB.01"       unused   input  active-high 
 line  10:     "PBB.02"       unused   input  active-high 
 line  11:     "PBB.03"       unused  output  active-high 
 line  12:     "PCC.00"       unused  output  active-high 
 line  13:     "PCC.01"       unused  output  active-high 
 line  14:     "PCC.02"       unused  output  active-high 
 line  15:     "PCC.03"        "mux"  output  active-high [used]
 line  16:     "PCC.04"       unused   input  active-high 
 line  17:     "PCC.05"       unused   input  active-high 
 line  18:     "PCC.06"       unused   input  active-high 
 line  19:     "PCC.07"       unused   input  active-high 
 line  20:     "PDD.00"       unused   input  active-high 
 line  21:     "PDD.01"       unused   input  active-high 
 line  22:     "PDD.02"       unused   input  active-high 
 line  23:     "PEE.00"       unused   input  active-high 
 line  24:     "PEE.01"       unused   input  active-high 
 line  25:     "PEE.02"       unused   input  active-high 
 line  26:     "PEE.03"       unused   input  active-high 
 line  27:     "PEE.04"      "Power"   input   active-low [used]
 line  28:     "PEE.05"       unused   input  active-high 
 line  29:     "PEE.06"       unused   input  active-high 
 line  30:     "PEE.07"       unused   input  active-high 
 line  31:     "PGG.00"       unused   input  active-high 
gpiochip2 - 16 lines:
 line   0:     "wl_dis" "gpio_xten_pin@0" output active-high [used]
 line   1: "hst_wake_wl" "gpio_xten_pin@1" output active-high [used]
 line   2: "wl_wake_hst" "gpio_xten_pin@2" output active-low [used]
 line   3:     "bt_dis" "gpio_xten_pin@3" output active-high [used]
 line   4: "hst_wake_bt" unused input active-high 
 line   5: "bt_wake_hst" unused input active-high 
 line   6: "spi0_rst_3v3" "gpio_xten_pin@6" output active-low [used]
 line   7:  "gpio_pin7" "gpio_xten_pin@7" output active-low [used]
 line   8: "can_120R_en" unused input active-high 
 line   9: "M2B_PCIe_rst" unused input active-high 
 line  10: "USB_HUB_rst" "gpio_xten_pin@10" output active-high [used]
 line  11: "PCIe_ETH_rst" unused input active-high 
 line  12: "M2B_WOWWAN"       unused   input  active-high 
 line  13: "M2B_DPR_3V3" unused input active-high 
 line  14: "SIM_MUX_SEL" unused input active-high 
 line  15: "gpio_pin15"       unused   input  active-high 
```

</TabItem>
</Tabs>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験を可能な限りスムーズにしていただくため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
