---
description: reComputer Industrial J30シリーズおよびJ40シリーズのハードウェアとインターフェースの使用方法
title: reComputer Industrial J40, J30 ハードウェアとインターフェースの使用方法
tags:
  - reComputer Industrial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage
last_update:
  date: 05/15/2025
  author: Lakshantha
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

このWikiでは、reComputer Industrial J4012、J4011、J3011、J3010のさまざまなハードウェアとインターフェースを紹介し、それらを使用してプロジェクトアイデアを拡張する方法を説明します。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/2.png"/></div>


## CSIカメラ

reComputer Industrialは、**2x 2レーン 15ピン MIPI CSIカメラコネクタ**を備えており、以下のカメラがサポートされています。

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

ここでは、2つのCSIカメラコネクタが**CAM0とCAM1**としてマークされています。1つのカメラを2つのコネクタのいずれかに接続するか、2つのカメラを両方のコネクタに同時に接続することができます。

**ステップ1:** CSIコネクタの黒いロックを優しく引き出します。

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/5.png"/></div>

**ステップ2:** 金色の端子が下向きになるようにして、15ピンリボンケーブルをコネクタに挿入します。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/6.png"/></div>

**ステップ3:** 黒いロックを押し込んでリボンケーブルを固定します。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/10.png"/></div>

### 使用方法

まず、使用する特定のカメラに適したドライバをロードするようにボードを設定する必要があります。JetPackシステムには、IMX219およびIMX477カメラをサポートする組み込みツールがあります。

**ステップ1:** ターミナルを開き、以下を実行します。

```sh
sudo /opt/nvidia/jetson-io/jetson-io.py
```

**ステップ2:** **Configure Jetson Nano CSI Connector**を選択します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/119.jpg"/></div>

**ステップ3:** **Configure for compatible hardware**を選択します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/120.jpg"/></div>

**ステップ4:** 使用するカメラを選択します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/121.jpg"/></div>

**ステップ5:** **Save pin changes**を選択します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/122.jpg"/></div>

**ステップ6:** **Save and reboot to reconfigure pins**を選択します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/123.jpg"/></div>

**ステップ7:** キーボードの任意のキーを押すと、デバイスが再起動し、カメラ設定が適用されます。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/124.jpg"/></div>

CSIカメラは2つの異なる方法で使用できます。以下のコマンドをカメラコネクタに応じて実行してください。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="方法1">

CAM0ポートの場合

```sh
nvgstcapture-1.0 sensor-id=0 
```

CAM1ポートの場合

```sh
nvgstcapture-1.0 sensor-id=1  
```

:::note
カメラの設定をさらに変更したい場合は、**"nvgstcapture-1.0 --help"**を入力して利用可能なすべての設定オプションにアクセスできます。
:::

</TabItem>

<TabItem value="Method 2" label="方法2">

CAM0ポートの場合

```bash
gst-launch-1.0 nvarguscamerasrc sensor-id=0 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

CAM1ポートの場合

```bash
gst-launch-1.0 nvarguscamerasrc sensor-id=1 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

:::note
カメラの設定をさらに変更したい場合は、**width, height, framerate, format**などの引数を更新できます。
:::

</TabItem>
</Tabs>

## RTC

reComputer Industrial には、RTC バッテリーを接続するための2つの異なる方法が用意されています。

### 接続概要

- 方法 1:

**3V CR1220 コイン型電池**を、以下の図のようにボード上の RTC ソケットに接続します。バッテリーの**正極（+）**が上向きになるようにしてください。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/11.jpg"/></div>

- 方法 2:

**JST コネクタ付き 3V CR2302 コイン型電池**を、以下の図のようにボード上の 2 ピン 1.25mm JST ソケットに接続します。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/12.jpg"/></div>

### 使用方法

:::danger
reComputer デバイスがすでに JetPack 6 以降に更新されている場合、RTC は追加の設定なしで正常に動作します。JetPack 5 を使用している場合は、以下の内容を参照してクロック同期サービスを設定する必要があります。
:::

**ステップ 1:** 上記のいずれかの方法で RTC バッテリーを接続します。

**ステップ 2:** reComputer Industrial を起動します。

**ステップ 3:** Ubuntu デスクトップで、右上のドロップダウンメニューをクリックし、`設定 > 日付と時刻` に移動します。Ethernet ケーブルを使用してネットワークに接続し、**自動日付と時刻**を選択して日付/時刻を自動的に取得します。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::note
Ethernet 経由でインターネットに接続していない場合は、ここで手動で日付/時刻を設定できます。
:::

**ステップ 4:** ターミナルウィンドウを開き、以下のコマンドを実行してハードウェアクロックの時刻を確認します。

```sh
sudo hwclock
```

以下のような出力が表示されますが、これは正しい日付/時刻ではありません。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/14.png"/></div>

**ステップ 5:** 以下のコマンドを入力して、ハードウェアクロックの時刻を現在のシステムクロックの時刻に変更します。

```sh
sudo hwclock --systohc
```

**ステップ 6:** Ethernet ケーブルを取り外し、インターネットから時刻を取得しないようにしてからボードを再起動します。

```sh
sudo reboot
```

**ステップ 7:** デバイスの電源を切った後でも日付/時刻が保持されていることを確認するために、ハードウェアクロックの時刻を再確認します。

次に、システムクロックを毎回起動時にハードウェアクロックから同期するスクリプトを作成します。

**ステップ 8:** 任意のテキストエディタを使用して新しいシェルスクリプトを作成します。ここでは **vi** テキストエディタを使用します。

```sh
sudo vi /usr/bin/hwtosys.sh 
```

**ステップ 9:** **i** キーを押して**挿入モード**に入り、以下の内容をファイル内にコピーして貼り付けます。

```sh
#!/bin/bash

sudo hwclock --hctosys
```

**ステップ 10:** スクリプトを実行可能にします。

```sh
sudo chmod +x /usr/bin/hwtosys.sh 
```

**ステップ 11:** systemd ファイルを作成します。

```sh
sudo nano /lib/systemd/system/hwtosys.service 
```

**ステップ 12:** 以下の内容をファイル内に追加します。

```sh
[Unit]
Description=Change system clock from hardware clock

[Service]
ExecStart=/usr/bin/hwtosys.sh

[Install]
WantedBy=multi-user.target
```

**ステップ 13:** systemctl デーモンをリロードします。

```sh
sudo systemctl daemon-reload 
```

**ステップ 14:** 作成したサービスを起動時に有効化し、サービスを開始します。

```sh
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

**ステップ 15:** スクリプトが systemd サービスとして正常に動作していることを確認します。

```sh
sudo systemctl status hwtosys.service
```

**ステップ 16:** ボードを再起動し、システムクロックがハードウェアクロックと同期していることを確認します。

## M.2 Key M

出荷時、reComputer Industrial には 128GB SSD が M.2 Key M スロットに接続されており、JetPack システムがプリインストールされています。

### 接続概要

付属の SSD を取り外して新しい SSD を取り付けたい場合は、以下の手順に従ってください。ここでは、[128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)、[256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)、[512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html) の Seeed SSD のみを使用することを推奨します。これらの SSD のみがテスト済みです。また、このインターフェースは PCIe Gen4.0 SSD をサポートしています。

- **ステップ 1:** プリインストールされた SSD のネジを取り外します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/15.png"/></div>

- **ステップ 2:** SSD コネクタからスライドさせて SSD を取り外します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/16.png"/></div>

- **ステップ 3:** 新しい SSD を挿入し、ネジを締め直します

### 使用方法

接続された SSD の簡単なベンチマークを行う方法を説明します。

- **ステップ 1:** 以下のコマンドを実行して書き込み速度を確認します

```sh
sudo dd if=/dev/zero of=/home/nvidia/test bs=1M count=512 conv=fdatasync
```

- **ステップ 2:** 以下のコマンドを実行して読み取り速度を確認します。このコマンドは、上記の書き込み速度確認コマンドを実行した後に実行してください。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/nvidia/test of=/dev/null bs=1M count=512
```

## mini PCIe

reComputer Industrial には mini PCIe コネクタが搭載されており、4G および LoRa モジュールをサポートしています。ただし、4G モジュールまたは LoRa モジュールのいずれか一方のみを接続できます。

### 4G モジュール接続概要

現在、このボードは EC25EUXGA および EC20CEHCLG モジュールをサポートしています。

- **ステップ 1:** ボードがすでに電源オンの場合は電源をオフにします

- **ステップ 2:** 付属のスタンドオフを取り外します。このスタンドオフは M.2 Key B インターフェースを使用する場合にのみ必要です

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/110.jpg"/></div>

- **ステップ 3:** 4G モジュールを mini PCIe スロットにスライドさせ、付属のネジを使用して 2 つの穴に固定します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/17.png"/></div>

- **ステップ 4:** **MAIN** とラベル付けされたアンテナコネクタにアンテナを接続します。この際、IPEX コネクタを使用する必要があります

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/18.png"/></div>

- **ステップ 5:** 4G 対応の nano SIM カードをボードの SIM カードスロットに挿入します。SIM カードの金属面が下向きになるようにし、内部のスプリングに当たるまで完全に挿入してロックします。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/19.png"/></div>

:::note
SIM カードを取り外す場合は、カードを押し込んで内部のスプリングに当てると、スロットから出てきます。
:::

- **ステップ 6:** **J8 (Control and UART) ヘッダー** の **SIM_MUX_SEL** ピンと **GND** ピンの間にジャンパーを追加します

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/20.png"/></div>

- **ステップ 7:** ボードの電源をオンにします

### 4G モジュール使用方法 - テストダイヤル

EC25 モジュールを使用する場合、モジュールは自動的に起動し、使用可能になります。ただし、EC20 モジュールを使用する場合は、モジュールをリセットする必要があります。

**ステップ 1:** EC25 モジュールを使用している場合、このステップをスキップできます。ただし、EC20 モジュールを使用している場合は、以下のコマンドを入力して 4G モジュールをリセットする GPIO309 ピンにアクセスします。

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

EC25 モジュールの場合、ボードが起動するとすぐに LED2 が緑色に点灯します。EC20 モジュールの場合は、上記の手順でモジュールをリセットした後に LED2 が緑色に点灯します。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/118.jpg"/></div>

**ステップ 2:** minicom をインストールします

```sh
sudo apt update
sudo apt install minicom -y
```

**ステップ 3:** 接続された 4G モジュールのシリアルコンソールに入り、AT コマンドを入力して 4G モジュールと対話します

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**ステップ 4:** **Ctrl+A** を押してから **E** を押してローカルエコーをオンにします

**ステップ 5:** コマンド **"AT"** を入力して Enter を押します。応答が "OK" と表示されれば、4G モジュールは正常に動作しています。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/></div>

**ステップ 6:** コマンド **"ATI"** を入力してモジュール情報を確認します

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/></div>

**ステップ 7:** モジュールをテストするために、以下のコマンドを入力して別の電話番号に発信します

```sh
ATD<phone_number>;
```

以下の出力が表示されます

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/24.jpg"/></div>

入力した電話番号が通話を受信できる場合、モジュールは期待通りに動作しています。

### 4G モジュール使用方法 - インターネット接続

#### EC25 モジュール

EC25 モジュールを使用している場合、以下の手順に従ってください。

- **ステップ 1:** 上記の「4G モジュール使用方法 - テストダイヤル」セクションで説明したように 4G モジュールのシリアルコンソールを開いた後、以下のコマンドを実行してインターネットに接続します。ここで **YOUR_APN** をネットワークプロバイダーの APN に置き換えてください。

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

#### EC20モジュール

EC20モジュールを使用している場合は、以下の手順に従ってください。

- **ステップ 1:** すでに前のセクション（4Gモジュール使用 - テストダイヤルセクション）で説明したように4Gモジュールをリセットしている場合、このステップをスキップできます。ただし、まだリセットしていない場合は、今すぐ行ってください。

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

### LoRaモジュール接続概要

現在、このボードはWM1302 SPIモジュールをサポートしています。[USバージョン](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html)または[EUバージョン](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html)を選択できます。これらはBazaarで入手可能です。

- **ステップ 1:** ボードがすでにオンの場合は電源をオフにします。

- **ステップ 2:** LoRaモジュールをmini PCIeスロットに挿入し、事前に取り付けられているネジを使用して、2つの穴にネジを締めて4Gモジュールを固定します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/25.png"/></div>

- **ステップ 3:** アンテナコネクタにアンテナを接続します。ここではIPEXコネクタを使用する必要があります。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/26.png"/></div>

:::note
**SIM_MUX_SEL**と**GND**ピンの間にジャンパーがないことを確認してください（**J8（制御およびUART）ヘッダー**）。このジャンパーは4Gモジュールを使用する場合のみ必要です。
:::

- **ステップ 4:** ボードの電源をオンにします。

### LoRaモジュール使用 - LoRa RFのテスト

LoRaモジュールが接続されると、モジュール上の緑色と青色のLEDが点灯します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/27.png"/></div>

- **ステップ 1:** 以下のコマンドを入力して、LoRaモジュールがシステムによって検出されているか確認します。

```sh
i2cdetect -r -y 7
```

以下の出力が表示された場合、モジュールはシステムによって検出されています。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/29.png"/></div>

- **ステップ 2:** 以下のコマンドを入力して、LoRa信号送信ツールをコンパイルしてビルドします。

:::danger
この**LoRa信号送信ツール**はJetpack5でのみ適用可能です。Jetpack6でLoRaモジュールの機能をテストする場合は、[回路図](https://github.com/Seeed-Studio/OSHW-Jetson-Series/blob/main/reComputer%20Jetson%20carrier%20board/reComputer%20Industrial%20J201/Schematic/reComputer%20Industrial%20J201_V1.2.pdf)と[ピンマップ](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)を参照してピン名を特定し、`gpioset`コマンドを使用してピン状態を設定してください。
:::

```bash
git clone https://github.com/lakshanthad/sx1302_hal
cd sx1302_hal
make
cd libloragw
cp ../tools/reset_lgw.sh .
sudo ./test_loragw_hal_tx -r 1250 -m LORA -f 867.1 -s 12 -b 125 -n 1000 -z 100 --dig 3 --pa 0 --pwid 13 -d /dev/spidev2.0
```

以下の結果が表示され、LoRaモジュールのLEDが赤色に変わった場合、モジュールがRF信号を正常に送信していることを意味します。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/78.jpg"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/28.png"/></div>

送信を停止するには、キーボードで**CTRL + C**を押します。

### LoRaモジュール使用 - TTNへの接続

次に、TTN（The Things Network）に接続し、reComputer IndustrialをTTN LoRaWANゲートウェイとして使用します。

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

ただし、他のモジュールに対するコマンドは以下の通りです。

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

reComputer Industrial には、4G および 5G モジュールをサポートする M.2 Key B コネクタが搭載されています。現在、**SIM8202G-M2 5G モジュール**でテストされています。

### 5G モジュール接続概要

- **ステップ 1:** ボードがすでに電源オンの場合は電源をオフにします。

- **ステップ 2:** スタンドオフが正しい位置にあることを確認し、スタンドオフの上部ネジを取り外します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/111.jpg"/></div>

- **ステップ 2:** 5G モジュールを M.2 Key B スロットに差し込み、スタンドオフネジを締めて 5G モジュールを固定します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/112.jpg"/></div>

- **ステップ 3:** モジュールのアンテナコネクタに 4 本のアンテナを接続します。この際、IPEX 4 コネクタを使用する必要があります。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/113.jpg"/></div>

- **ステップ 4:** 5G 対応の nano SIM カードをボードの SIM カードスロットに挿入します。SIM カードの金属面が下向きになるように挿入してください。カードを完全に挿入すると、内部のスプリングに当たってロックされます。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/19.png"/></div>

:::note
SIM カードを取り外す場合は、カードを押し込んで内部スプリングを作動させ、スロットからカードを取り出してください。
:::

- **ステップ 5:** ボードの電源をオンにします。

### 5G モジュール使用 - ダイヤルテスト

SIM8202G-M2 5G モジュールを使用する場合、モジュールは自動的に起動しません。最初にいくつかの GPIO をトグルして起動する必要があります。

**ステップ 1:** 以下のコマンドを入力して 5G モジュールを起動します。

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
これらのコマンドを実行するには複数のターミナルを開き、それぞれのターミナルウィンドウがアクティブな状態を維持してください。
:::

</TabItem>
</Tabs>

上記を実行すると、以下のように LED2 が緑色に点灯します。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/117.jpg"/></div>

**ステップ 2:** minicom をインストールします。

```sh
sudo apt update
sudo apt install minicom -y
```

**ステップ 3:** 接続された 5G モジュールのシリアルコンソールに入り、AT コマンドを入力して 5G モジュールと対話します。

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**ステップ 4:** **"AT"** コマンドを入力して Enter を押します。「OK」と表示された場合、5G モジュールは正常に動作しています。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/107.png"/></div>

**ステップ 5:** **"ATI"** コマンドを入力してモジュール情報を確認します。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/108.png"/></div>

**ステップ 6:** モジュールをテストするには、以下のコマンドを入力して別の電話番号に発信します。

```sh
ATD<phone_number>;
```

以下のような出力が表示されます。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/109.png"/></div>

## DI/ DO

reComputer Industrialは、4つのデジタル入力チャンネルと4つのデジタル出力チャンネルをサポートしており、すべて光学的に絶縁されています。これにより、電圧スパイクやその他の電気的な障害からメインボードを効果的に保護します。同じコネクタにはCANインターフェースもあり、これについては後ほどこのWikiで説明します。

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
      <td rowSpan={4}>合計12V/20mA</td>
      <td rowSpan={4}>12Vデジタル入力、グランド信号は<br />GND_DI (Pin2/4/6) に接続する必要があります</td>
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
      <td rowSpan={4}>デジタル出力、最大耐圧40V、グランド信号は<br />GND_DO (Pin8/10) に接続する必要があります</td>
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
      <td rowSpan={2}>標準的な差動信号を持つCANバス、<br />グランド信号はGND_ISO (Pin12) に接続する必要があります</td>
    </tr>
    <tr>
      <td />
      <td>CL</td>
    </tr>
    <tr>
      <td>グランド</td>
      <td>GND_DI</td>
      <td colSpan={5} rowSpan={3}>/</td>
      <td>12Vデジタル入力の基準グランド信号であり、<br />DIの戻り経路でもあります</td>
    </tr>
    <tr>
      <td />
      <td>GND_DO</td>
      <td>デジタル出力の基準グランド信号であり、DOの戻り経路でもあります</td>
    </tr>
    <tr>
      <td />
      <td>CG</td>
      <td>CANの基準グランド信号</td>
    </tr>
  </tbody>
</table>

:::danger
上記の表に記載されているピン番号はJetpack5にのみ有効です。Jetpack6のピン番号を取得するには、以下の方法を使用できます：

1. `gpioinfo`コマンドを使用してGPIOテーブルを取得します。
2. **BGA番号**を確認して、Jetpack6上の対応するピン番号を見つけます。

:::

### DIの接続概要

以下の図に従ってDIの接続を行うことができます。DIラインには直列に抵抗を追加することをお勧めします。ここでは、4.7kΩの抵抗をDI1ピンに接続してテストしました。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/38.png"/></div>

### DIの使用方法

DIラインに12Vの電圧を入力することで、入力として検出されます。

**ステップ1:** 上記の図に従って**DI1ピン**に接続し、**12V**を入力します。

**ステップ2:** 以下の手順でDI1の状態を確認します：

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
**DI/ DO ピン割り当て表**を参照して、GPIO番号とBGA番号を確認できます。上記の例では、DI1ピンのGPIO番号は453、BGA番号はPQ.05です。
:::

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo gpioget gpiochip0 105
```

</TabItem>
</Tabs>

出力が0の場合、12Vの入力があります。出力が1の場合、入力電圧がありません。

### DOの接続概要

以下の図に従ってDOの接続を行うことができます。DOラインには直列に抵抗を追加することをお勧めします。ここでは、4.7kΩの抵抗を使用してテストしました。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/39.png"/></div>

### DOの使用方法

上記の図に示されているように負荷を接続する必要があります。最も簡単なテスト方法は、マルチメーターを接続することです。または、最大40V以下の電圧を必要とする負荷を接続します。

**ステップ1:** 上記の図に従って**DO1ピン**に接続し、**最大40V**を入力します。

**ステップ2:** 以下の手順でDO1のGPIOをオンにします：

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
**DI/ DO ピン割り当て表**を参照して、GPIO番号とBGA番号を確認できます。上記の例では、DO1ピンのGPIO番号は399、BGA番号はPI.00です。
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

reComputer Industrial は、5MbpsのCAN FD（Controller Area Network Flexible Data-Rate）プロトコルをサポートするCANインターフェースを備えています。このCANインターフェースは容量性絶縁を使用して絶縁されており、優れたEMI保護を提供し、産業および自動化アプリケーションでの信頼性の高い通信を保証します。120Ωの終端抵抗がデフォルトで取り付けられており、この抵抗はGPIOを使用してON/OFFを切り替えることができます。

注意: CANインターフェースは絶縁電源を使用しているため、CANインターフェースに接続される外部デバイスのグランド信号はCGピンに接続する必要があります。

### USB to CANアダプターを使用した接続概要

CANバスをテストおよびインターフェースするには、以下の図のようにUSB to CANアダプターをボードのCANコネクタに接続します。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/40.png"/></div>

ここでは、[USB to CAN Analyzer Adapter with USB Cable](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)を使用しています。この製品はSeeedのBazaarで入手可能です。

### USB to CANアダプターの使用方法

- **ステップ 1:** 使用しているUSB to CANアダプターのドライバーをメーカーのウェブサイトからダウンロードしてインストールします。今回使用したアダプターの場合、ドライバーは[こちら](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver)から入手できます。

- **ステップ 2:** 一部のアダプターには、CANデバイスと通信するためのPC用ソフトウェアが付属しています。今回使用したアダプターの場合、ソフトウェアは[こちら](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)からダウンロードしてインストールしました。

- **ステップ 3:** reComputer Industrial上でターミナルウィンドウを開き、以下のコマンドを実行してCANインターフェースを設定および有効化します。

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **ステップ 4:** ターミナルで**ifconfig**と入力すると、CANインターフェースが有効になっていることが確認できます。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **ステップ 5:** 事前にインストールしたCANソフトウェアを開きます。この場合、使用しているCANアダプターに対応したソフトウェアを開きます。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/></div>

- **ステップ 6:** USB to CANアダプターをPCに接続し、Windowsの検索バーで「デバイスマネージャー」を検索して開きます。ここで、**ポート (COM & LPT)**の下に接続されたアダプターが表示されます。ここに記載されているシリアルポートをメモします。以下の画像では、シリアルポートは**COM9**です。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/></div>

- **ステップ 7:** CANソフトウェアを開き、**COM**セクションの横にある**Refresh**をクリックし、ドロップダウンメニューから接続されたアダプターに対応するシリアルポートを選択します。**COM bps**はデフォルトのままにして、**Open**をクリックします。

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/></div>

- **ステップ 8:** **Mode**と**CAN bps**をデフォルトのままにし、**Type**を**Standard frame**に変更して、**Set and Start**をクリックします。

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/></div>

- **ステップ 9:** reComputer Industrial上で以下のコマンドを実行して、PCにCAN信号を送信します。

```sh
cansend can0 123#abcdabcd
```

すると、以下のようにソフトウェアで信号が受信されます。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/></div>

- **ステップ 10:** reComputer Industrial上で以下のコマンドを実行して、PCからのCAN信号を受信する準備をします。

```sh
candump can0 &
```

- **ステップ 11:** CANソフトウェアで**Send a single frame**をクリックします。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/></div>

すると、以下のようにreComputer Industrialで信号が受信されます。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

### reTerminal DMを使用した接続概要

[reTerminal DM](https://www.seeedstudio.com/reTerminal-DM-p-5616.html)をお持ちの場合、直接通信が可能です。reTerminal DMもCANインターフェースを備えています。

以下の画像を参照して、reComputer IndustrialとreTerminal DMをCANで接続します。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/49.png"/></div>

### reTerminal DMの使用方法

- **ステップ 1:** reTerminal DMを使用する前に、[このWiki](https://wiki.seeedstudio.com/ja/reterminal-dm)を参照してreTerminal DMのセットアップを行ってください。

- **ステップ 2:** reComputer Industrial上でターミナルウィンドウを開き、以下のコマンドを実行してCANインターフェースを設定および有効化します。

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **ステップ 3:** reTerminal DM上でターミナルウィンドウを開き、以下のコマンドを実行してCANインターフェースを設定および有効化します。

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **ステップ 4:** 両デバイスで**ifconfig**を入力すると、CANインターフェースが有効になっていることが確認できます。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **ステップ 5:** reTerminal DM上で以下を実行して、reComputer IndustrialからのCAN信号を受信する準備をします。

```sh
candump can0 &
```

- **ステップ 7:** reComputer Industrial 上で以下のコマンドを実行し、reTerminal Industrial に CAN 信号を送信します。

```sh
cansend can0 123#abcdabcd
```

これで、reTerminal DM に受信された内容が以下のように表示されます。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

- **ステップ 8:** **ステップ 6 とステップ 7**を繰り返しますが、デバイスを入れ替えてください。reTerminal DM を使用して CAN 信号を送信し、reComputer Industrial を使用してそれを受信します。

## RS232/ RS422/ RS485 インターフェース

reComputer Industrial には RS232、RS422、RS485 通信プロトコルをサポートする DB9 コネクタが搭載されており、オンボードの DIP スイッチパネルで異なるインターフェースオプションを切り替えることができます。

以下のように DIP スイッチパネルを見ることができます。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/51.png"/></div>

:::note
DIP スイッチパネルを使用する前に黄色のプラスチックカバーを取り外してください。
:::

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
      <td>1T/1R RS-485 ,TX ENABLE 低アクティブ</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/55.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>1</td>
      <td>1</td>
      <td>RS-485 ハーフデュプレックス</td>
      <td>1T/1R RS-485 ,TX ENABLE 高アクティブ</td>
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
      <td>スイッチ IC (特殊用途向け)</td>
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
      <td>TX ENABLE 低アクティブ</td>
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
出荷時のデフォルト設定では、スイッチは工場出荷時に 010 の RS485 に設定されています。
:::

上記の表は DIP スイッチパネルの最初の 3 つのスイッチを考慮しています。ただし、4 番目のスイッチはスルーレートを切り替える役割を果たし、これはデータレートに直接関係しています。

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
      <td>SLEW= Vcc<br />この RS232/RS422/RS485 マルチプロトコル トランシーバーは通信速度を以下のように制限します:<br />RS-232: 最大データレートは 1.5Mbps<br />RS-485/RS-422: 最大データレートは 10Mbps<br />実際の最大データレートは使用される Jetson SOM に依存します。</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/63.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>SLEW = GND<br />RS-232: 最大データレートは 250Kbps<br />RS-485/RS-422: 最大データレートは 250kbps</td>
    </tr>
  </tbody>
</table>

ここでは、USB から RS232、RS485、RS422 アダプターを使用してインターフェースをテストします。そのため、先に PC にシリアルターミナルアプリケーションをインストールする必要があります。ここでは、セットアップが簡単で使いやすい **Putty** をインストールすることをお勧めします。

- **ステップ 1:** [このウェブサイト](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) にアクセスし、PC のアーキテクチャに応じて Putty をダウンロードしてください。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/60.png"/></div>

ここでは、使用した PC が X86 Windows 64 ビットマシンであるため、それに応じて Putty を選択しました。

- **ステップ 2:** ダウンロードしたセットアップを開き、プロンプトに従ってアプリケーションをインストールします。

### 一般的な接続概要

DB9 コネクタのピン番号と接続方法を以下の表で参照してください。

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

ここでは、USBからRS232へのアダプターを使用してインターフェースをテストできます。私たちはテストに [UGREEN USB to RS232 Adapter](https://www.amazon.com/UGREEN-Converter-Adapter-Chipset-Windows/dp/B00QUZY4UG?th=1) を使用しました。

**ステップ 1:** ボードの電源をオフにします。

**ステップ 2:** DIPスイッチを設定するための2つのオプションがあります。001モードまたは101モードのいずれかです。各モードのスイッチ位置は以下の通りです。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/64.png"/></div>

**ステップ 3:** USBからRS232へのアダプターをDB9コネクターに接続します。ここでは、上記で言及したアダプターを接続しました。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/68.jpg"/></div>

**ステップ 4:** もう一方の端をPCのUSBポートの1つに接続します。

**ステップ 5:** ボードの電源をオンにします。

### RS232 使用方法

**ステップ 1:** 使用しているアダプターのドライバーをインストールする必要がある場合があります。または、Windowsが自動的にドライバーをインストールします。Windows検索で **Device Manager** と入力してデバイスマネージャーを開き、接続されたアダプターがCOMデバイスとして表示されているか確認します。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/67.jpg"/></div>

**ステップ 2:** アダプターが表示されない場合は、使用しているアダプターに応じたドライバーをインストールする必要があります。これらのドライバーは通常、製造元のウェブサイトで見つけることができます。私たちが使用しているアダプターの場合は、[このページ](https://www.ugreen.com/pages/download)で **20201** をモデル番号として検索し、ドライバーをダウンロードしてください。

**ステップ 3:** PCでPuttyを開き、**Terminal** セクションを選択して以下を設定します。

- Local echo: Force on  
- Local line editing: Force on  

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

**ステップ 4:** **Session** を選択し、**Connection type** の下で **Serial** を選択します。**Device Manager** に表示されているシリアルポート番号を設定し、速度はデフォルト（9600）のままにして **Open** をクリックします。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/71.jpg"/></div>

**ステップ 5:** reTerminal Industrial のターミナルウィンドウで以下を入力して、reComputer からPCに信号を送信します。

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

これで、このメッセージがPuttyに表示されます。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/72.jpg"/></div>

**ステップ 6:** reTerminal Industrial のターミナルウィンドウで以下を入力して、PCからの信号を受信する準備をします。

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

Puttyで何かを入力し、**ENTER** を押すと、それが reComputer Industrial のターミナルウィンドウに表示されます。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/73.png"/></div>

### RS422 接続概要

ここでは、USBからRS422へのアダプターを使用してインターフェースをテストできます。私たちはテストに [DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) を使用しました。

**ステップ 1:** ボードの電源をオフにします。

**ステップ 2:** DIPスイッチを設定するための2つのオプションがあります。000モードまたは100モードのいずれかです。各モードのスイッチ位置は以下の通りです。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/65.png"/></div>

**ステップ 3:** ジャンパーワイヤーを使用して、USBからRS422へのアダプターをDB9コネクターに接続します。以下のように接続しました。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/74.png"/></div>

**ステップ 4:** もう一方の端をPCのUSBポートの1つに接続します。

**ステップ 5:** ボードの電源をオンにします。

### RS422 使用方法

**ステップ 1:** 使用しているアダプターのドライバーをインストールする必要がある場合があります。または、Windowsが自動的にドライバーをインストールします。Windows検索で **Device Manager** と入力してデバイスマネージャーを開き、接続されたアダプターがCOMデバイスとして表示されているか確認します。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

**ステップ 2:** アダプターが表示されない場合は、使用しているアダプターに応じたドライバーをインストールする必要があります。これらのドライバーは通常、製造元のウェブサイトで見つけることができます。私たちが使用しているアダプターの場合は、[このページ](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485) を参照してください。

**ステップ 3:** PCでPuttyを開き、**Terminal** セクションを選択して以下を設定します。

- Local echo: Force on  
- Local line editing: Force on  

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

**ステップ 4:** **Session** を選択し、**Connection type** の下で **Serial** を選択します。**Device Manager** に表示されているシリアルポート番号を設定し、速度はデフォルト（9600）のままにして **Open** をクリックします。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

**ステップ 5:** reTerminal Industrial のターミナルウィンドウで以下を入力して、reComputer からPCに信号を送信します。

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

次に、Putty上で以下のメッセージが表示されるのを確認します。

**ステップ 6:** reTerminal インダストリアル端末ウィンドウで、以下のコマンドを入力してPCからの信号を受信する準備をします。

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

Putty上で任意の文字を入力し、**ENTER**を押すと、reComputer インダストリアル端末ウィンドウに表示されます。

### RS485 接続概要

ここでは、USBからRS422アダプタを使用してインターフェースをテストできます。テストには[DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K)を使用しました。

**ステップ 1:** ボードの電源をオフにします。

**ステップ 2:** DIPスイッチを設定するための3つのオプションがあります。010モード、011モード、または110モードのいずれかです。各モードのスイッチ位置は以下の通りです。

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/66.png"/></div>

**ステップ 3:** ジャンパーワイヤーを使用して、USBからRS422アダプタをDB9コネクタに接続します。以下の画像のように、上記で述べたアダプタを接続します。

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/77.png"/></div>

**ステップ 4:** もう一方の端をPCのUSBポートの1つに接続します。

**ステップ 5:** ボードの電源をオンにします。

### RS485 使用方法

**ステップ 1:** 使用しているアダプタのドライバをインストールする必要がある場合があります。Windowsが自動的にドライバをインストールすることもあります。Windows検索で**デバイスマネージャー**と入力してデバイスマネージャーを開き、接続されたアダプタがCOMデバイスとして表示されているか確認します。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

**ステップ 2:** アダプタが表示されない場合は、使用しているアダプタに応じたドライバをインストールする必要があります。これらのドライバは通常、製造元のウェブサイトで見つけることができます。使用しているアダプタの場合は、[このページ](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)を参照してください。

**ステップ 3:** PCでPuttyを開き、**Terminal**セクションを選択して以下を設定します。

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

**ステップ 4:** **Session**を選択し、**Connection type**で**Serial**を選択します。**Device Manager**で確認したシリアルポート番号を設定し、速度はデフォルト（9600）のままにして**Open**をクリックします。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

**ステップ 5:** reTerminal インダストリアル端末ウィンドウで、以下のコマンドを入力してreComputerからPCに信号を送信します。

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

次に、Putty上でこのメッセージが表示されるのを確認します。

**ステップ 6:** reTerminal インダストリアル端末ウィンドウで、以下のコマンドを入力してPCからの信号を受信する準備をします。

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

Putty上で任意の文字を入力し、**ENTER**を押すと、reComputer インダストリアル端末ウィンドウに表示されます。

## ギガビットイーサネットコネクタ

reComputer Industrialには2つのギガビットイーサネット（10/100/1000M）コネクタがあり、それぞれ異なる機能を持っています。

- 左端のコネクタはJetsonモジュールに直接接続されており、**PSE 802.3 af, 15W**仕様でPoE機能を提供します。これにより、PoE対応のIPカメラやその他のPoEデバイスをこのポートに接続して、接続されたデバイスに電力を供給することができます。
- もう一方のコネクタは、PCIeからイーサネット（LAN7430-I/Y9X）モジュールを介して接続されています。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/36.png"/></div>

各イーサネットポートには2つのLED（緑と黄色）があり、以下を示します。

- 緑色LED: 1000Mネットワークに接続されている場合のみ点灯
- 黄色LED: ネットワークのアクティビティステータスを表示

## USB

reComputer Industrialには3つのUSB3.2コネクタが搭載されており、以下の特徴があります：
- デュアルスタックUSBコネクタでは、上部と下部のUSBポートが電流制限ICを共有しており、最大出力電流は合計2.1A（単独でも2.1A）です。2.1Aを超えると過電流保護状態になります。
- デュアルスタックUSBコネクタの隣にある単一USBコネクタでは、最大出力電流は合計2.1Aです。2.1Aを超えると過電流保護状態になります。
- Orin NXモジュールには3つのUSB3.2が搭載されていますが、reComputerではそのうち1つのみが使用され、3つに分岐されています。（USB3.1 TYPE-A x2 - J4およびUSB3.1 TYPE-A x1 - J3）
- USBホストモードのみ対応、デバイスモードは非対応
- 5V 2.1Aを供給
- ホットスワップ対応

### 使用方法

接続されたUSBフラッシュドライブで簡単なベンチマークを行う方法を説明します。

- **ステップ1:** 以下のコマンドを実行して書き込み速度を確認します。

```sh
sudo dd if=/dev/zero of=/dev/$1 bs=100M count=10 conv=fdatasync
```

- **ステップ2:** 以下のコマンドを実行して読み取り速度を確認します。書き込み速度確認後に実行してください。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/dev/$1 of=/dev/null bs=100M count=10
```

## 設定可能なLED

基板上に緑色のLEDが配置されており、以下の図に示されています。デフォルトでは、このLEDはデバイスが正常に動作していることを示します。ただし、このLEDをプログラムしてシステムによってON/OFFを制御することも可能です。

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/21.png"/></div>

### 使用方法

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

**ステップ1:** 緑色LEDにアクセスするために、以下のコマンドをターミナルウィンドウで入力します。

```sh
sudo -i
cd /sys/class/gpio
echo 329 > export 
cd PCC.01
echo out > direction 
```

**ステップ2:** LEDを消灯します。

```sh
echo 0 > value 
```

**ステップ3:** LEDを点灯します。

```sh
echo 1 > value 
```

LEDの使用を終了した場合は、以下を実行してください。

```sh
cd ..
echo 329 > unexport
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

LEDを消灯する：

```sh
sudo gpioset gpiochip1 13=0
```

LEDを点灯する：

```bash
sudo gpioset gpiochip1 13=1
```

</TabItem>
</Tabs>

## システムパフォーマンスの監視

**jetson stats** アプリケーションを使用して、システムコンポーネントの温度を監視し、以下のようなその他のシステム詳細を確認できます。

- CPU、GPU、RAMの使用状況を表示
- 電力モードを変更
- 最大クロックに設定
- JetPack情報を確認

- **ステップ 1:** reComputer Industrial のターミナルウィンドウで以下を入力してください。

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

- **ステップ 4:** アプリケーションの異なるページを巡回し、すべての機能を探索してください！

## WiFiとBluetooth

reComputer Industrial にはWiFiとBluetoothが標準では搭載されていません。ただし、PCB上にWiFi/Bluetoothモジュールをボードにハンダ付けするための予約スペースがあります。このスペースは **BL-M8723DU1** モジュールをサポートするように設計されています。

### 接続概要

- **ステップ 1:** **BL-M8723DU1** モジュールを自分でハンダ付けしたい場合は可能です。ただし、プロセス中にボードを損傷した場合、保証が無効になるため、これを推奨しません。推奨するのは、当社のプロフェッショナルサービスを利用してこのモジュールをボードにハンダ付けしてもらうことです。リクエストを order@seeed.cc にメールで送信してください。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/31.jpg"/></div>

- **ステップ 2:** WiFiとBluetooth用にボード上の2つのアンテナコネクタにアンテナを接続します。この際、IPEXコネクタを使用する必要があります。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/32.png"/></div>

### 使用方法

- **ステップ 1:** ボードを起動し、デバイスがUbuntu Desktopにブートしたら、右上のドロップダウンメニューをクリックし、`設定 > Wi-Fi` に移動して、タイトルバーのボタンを切り替えてWiFiを有効にします。その後、WiFiネットワークを選択し、必要なパスワードを入力して接続します。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/33.png"/></div>

- **ステップ 2:** 同じウィンドウで **Bluetooth** を選択し、タイトルバーのボタンを切り替えてBluetoothを有効にします。その後、Bluetoothデバイスを選択して接続します。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/34.png"/></div>

## TPM

reComputer Industrial には外部TPMモジュールを接続するためのTPMインターフェースが搭載されています。ここでは、Infineon SLB9670ベースのTPM2.0モジュールでテストを行いました。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/114.jpg"/></div>

### 接続概要

TPMモジュールを以下のようにTPMコネクタに接続します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/115.jpg"/></div>

### 使用方法

以下のコマンドを実行してTPMモジュールが正しくロードされているか確認します。

```sh
sudo dmesg | grep TPM
ls /dev/tpm* -l
```

以下のような出力が表示されます。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/116.png"/></div>

## reComputer Industrialでの最大パフォーマンス

reComputer Industrialで最大パフォーマンスを有効にするには、以下の手順に従ってください。

- **ステップ 1:** 以下のコマンドを入力して最大パワーモードを有効にします。

```sh
sudo nvpmodel -m 0
```

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/35.jpg"/></div>

ここで、ボードを再起動するために**YES**と入力する必要があります。

- **ステップ 2:** ボードが起動したら、以下のコマンドを入力してCPUクロックを最大周波数に設定します。

```sh
sudo jetson_clocks
```

## GPIOテーブル

reComputer IndustrialのGPIOテーブルにアクセスして、すべてのピンマッピングを確認できます。

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

ターミナル内で以下を実行してアクセスします。

```bash
sudo cat /sys/kernel/debug/gpio
```

すると、以下のような出力が表示されます。

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

以下のコマンドをターミナルで実行してアクセスします。

```bash
gpioinfo
```

すると、次のような出力が表示されます。

```bash
seeed@seeed-desktop:~$ gpioinfo 
gpiochip0 - 164 行:
	line   0:      "PA.00" "regulator-vdd-3v3-sd" 出力 active-high [使用中]
	line   1:      "PA.01"       未使用   入力  active-high 
	line   2:      "PA.02"       未使用   入力  active-high 
	line   3:      "PA.03"       未使用   入力  active-high 
	line   4:      "PA.04"       未使用   入力  active-high 
	line   5:      "PA.05"       未使用   入力  active-high 
	line   6:      "PA.06"       未使用   入力  active-high 
	line   7:      "PA.07"       未使用   入力  active-high 
	line   8:      "PB.00"       未使用   入力  active-high 
	line   9:      "PC.00"       未使用   入力  active-high 
	line  10:      "PC.01"       未使用   入力  active-high 
	line  11:      "PC.02"       未使用   入力  active-high 
	line  12:      "PC.03"       未使用   入力  active-high 
	line  13:      "PC.04"       未使用   入力  active-high 
	line  14:      "PC.05"       未使用   入力  active-high 
	line  15:      "PC.06"       未使用   入力  active-high 
	line  16:      "PC.07"       未使用   入力  active-high 
	line  17:      "PD.00"       未使用   入力  active-high 
	line  18:      "PD.01"       未使用   入力  active-high 
	line  19:      "PD.02"       未使用   入力  active-high 
	line  20:      "PD.03"       未使用   入力  active-high 
	line  21:      "PE.00"       未使用   入力  active-high 
	line  22:      "PE.01"       未使用   入力  active-high 
	line  23:      "PE.02"       未使用   入力  active-high 
	line  24:      "PE.03"       未使用   入力  active-high 
	line  25:      "PE.04"       未使用   入力  active-high 
	line  26:      "PE.05"       未使用   入力  active-high 
	line  27:      "PE.06"       未使用   入力  active-high 
	line  28:      "PE.07"       未使用   入力  active-high 
	line  29:      "PF.00"       未使用   入力  active-high 
	line  30:      "PF.01"       未使用   入力  active-high 
	line  31:      "PF.02"       未使用   入力  active-high 
	line  32:      "PF.03"       未使用   入力  active-high 
	line  33:      "PF.04"       未使用   入力  active-high 
	line  34:      "PF.05"       未使用   入力  active-high 
	line  35:      "PG.00" "Force Recovery" 入力 active-low [使用中]
	line  36:      "PG.01"       未使用   入力  active-high 
	line  37:      "PG.02"    "Suspend"   入力   active-low [使用中]
	line  38:      "PG.03"       未使用   入力  active-high 
	line  39:      "PG.04"       未使用   入力  active-high 
	line  40:      "PG.05"       未使用   入力  active-high 
	line  41:      "PG.06"       未使用   入力  active-high 
	line  42:      "PG.07"       未使用   入力  active-high 
	line  43:      "PH.00"       未使用   入力  active-high 
	line  44:      "PH.01"       未使用   入力  active-high 
	line  45:      "PH.02"       未使用   入力  active-high 
	line  46:      "PH.03" "camera-control-output-low" 出力 active-high [使用中]
	line  47:      "PH.04"       未使用   入力  active-high 
	line  48:      "PH.05"       未使用   入力  active-high 
	line  49:      "PH.06"       未使用  出力  active-high 
	line  50:      "PH.07"       未使用   入力  active-high 
	line  51:      "PI.00"       未使用  出力  active-high 
	line  52:      "PI.01"       未使用   入力  active-high 
	line  53:      "PI.02"       未使用   入力  active-high 
	line  54:      "PI.03"       未使用   入力  active-high 
	line  55:      "PI.04"       未使用   入力  active-high 
	line  56:      "PI.05"       カーネル   入力  active-high [使用中]
	line  57:      "PI.06"       未使用   入力  active-high 
	line  58:      "PJ.00"       未使用   入力  active-high 
	line  59:      "PJ.01"       未使用   入力  active-high 
	line  60:      "PJ.02"       未使用   入力  active-high 
	line  61:      "PJ.03"       未使用   入力  active-high 
	line  62:      "PJ.04"       未使用   入力  active-high 
	line  63:      "PJ.05"       未使用   入力  active-high 
	line  64:      "PK.00"       未使用   入力  active-high 
	line  65:      "PK.01"       未使用   入力  active-high 
	line  66:      "PK.02"       未使用   入力  active-high 
	line  67:      "PK.03"       未使用   入力  active-high 
	line  68:      "PK.04"       未使用  出力  active-high 
	line  69:      "PK.05"       未使用  出力  active-high 
	line  70:      "PK.06"       未使用   入力  active-high 
	line  71:      "PK.07"       未使用   入力  active-high 
	line  72:      "PL.00"       未使用   入力  active-high 
	line  73:      "PL.01"       未使用   入力  active-high 
	line  74:      "PL.02"       未使用   入力  active-high 
	line  75:      "PL.03"       未使用   入力  active-high 
	line  76:      "PM.00"       カーネル   入力  active-high [使用中]
	line  77:      "PM.01"       未使用   入力  active-high 
	line  78:      "PM.02"       未使用   入力  active-high 
	line  79:      "PM.03"       未使用   入力  active-high 
	line  80:      "PM.04"       未使用   入力  active-high 
	line  81:      "PM.05"       未使用   入力  active-high 
	line  82:      "PM.06"       未使用   入力  active-high 
	line  83:      "PM.07"       未使用   入力  active-high 
	line  84:      "PN.00"       未使用   入力  active-high 
	line  85:      "PN.01"  "interrupt"   入力  active-high [使用中]
	line  86:      "PN.02"       未使用   入力  active-high 
	line  87:      "PN.03"       未使用   入力  active-high 
	line  88:      "PN.04"       未使用   入力  active-high 
	line  89:      "PN.05"       未使用   入力  active-high 
	line  90:      "PN.06"       未使用   入力  active-high 
	line  91:      "PN.07"       未使用   入力  active-high 
	line  92:      "PP.00"       未使用   入力  active-high 
	line  93:      "PP.01"       未使用   入力  active-high 
	line  94:      "PP.02"       未使用   入力  active-high 
	line  95:      "PP.03"       未使用   入力  active-high 
	line  96:      "PP.04"       未使用   入力  active-high 
	line  97:      "PP.05"       未使用   入力  active-high 
	line  98:      "PP.06"       未使用   入力  active-high 
	line  99:      "PP.07"       未使用   入力  active-high 
	line 100:      "PQ.00"       未使用   入力  active-high 
	line 101:      "PQ.01"       未使用   入力  active-high 
	line 102:      "PQ.02"       未使用   入力  active-high 
	line 103:      "PQ.03"       未使用  出力  active-high 
	line 104:      "PQ.04"       未使用   入力  active-high 
	line 105:      "PQ.05"       未使用   入力  active-high 
	line 106:      "PQ.06"       未使用   入力  active-high 
	line 107:      "PQ.07"       未使用   入力  active-high 
	line 108:      "PR.00"       未使用   入力  active-high 
	line 109:      "PR.01"       未使用   入力  active-high 
	line 110:      "PR.02"       未使用   入力  active-high 
	line 111:      "PR.03"       未使用   入力  active-high 
	line 112:      "PR.04"       未使用   入力  active-high 
	line 113:      "PR.05"       未使用   入力  active-high 
	line 114:      "PX.00"       カーネル   入力  active-high [使用中]
	line 115:      "PX.01"       カーネル   入力  active-high [使用中]
	line 116:      "PX.02"       未使用   入力  active-high 
	line 117:      "PX.03"       未使用   入力  active-high 
	line 118:      "PX.04"       未使用   入力  active-high 
	line 119:      "PX.05"       未使用   入力  active-high 
	line 120:      "PX.06"       未使用   入力  active-high 
	line 121:      "PX.07"       未使用   入力  active-high 
	line 122:      "PY.00"       未使用   入力  active-high 
	line 123:      "PY.01"       未使用   入力  active-high 
	line 124:      "PY.02"       未使用   入力  active-high 
	line 125:      "PY.03"       未使用   入力  active-high 
	line 126:      "PY.04"       未使用   入力  active-high 
	line 127:      "PY.05"       未使用   入力  active-high 
	line 128:      "PY.06"       未使用   入力  active-high 
	line 129:      "PY.07"       未使用   入力  active-high 
	line 130:      "PZ.00"       未使用   入力  active-high 
	line 131:      "PZ.01"       "vbus"   入力   active-low [使用中]
	line 132:      "PZ.02"       未使用   入力  active-high 
	line 133:      "PZ.03"       未使用   入力  active-high 
	line 134:      "PZ.04"       未使用   入力  active-high 
	line 135:      "PZ.05"       未使用   入力  active-high 
	line 136:      "PZ.06"   "spi0 CS0"  出力   active-low [使用中]
	line 137:      "PZ.07"       未使用   入力  active-high 
	line 138:     "PAC.00"       未使用  出力  active-high 
	line 139:     "PAC.01"       未使用   入力  active-high 
	line 140:     "PAC.02"       未使用   入力  active-high 
	line 141:     "PAC.03"       未使用   入力  active-high 
	line 142:     "PAC.04"       未使用   入力  active-high 
	line 143:     "PAC.05"       未使用   入力  active-high 
	line 144:     "PAC.06"       未使用   入力  active-high 
	line 145:     "PAC.07"       未使用   入力  active-high 
	line 146:     "PAD.00"       未使用   入力  active-high 
	line 147:     "PAD.01"       未使用   入力  active-high 
	line 148:     "PAD.02"       未使用   入力  active-high 
	line 149:     "PAD.03"       未使用   入力  active-high 
	line 150:     "PAE.00"       未使用   入力  active-high 
	line 151:     "PAE.01"       未使用   入力  active-high 
	line 152:     "PAF.00"       未使用   入力  active-high 
	line 153:     "PAF.01"       未使用   入力  active-high 
	line 154:     "PAF.02"       未使用   入力  active-high 
	line 155:     "PAF.03"       未使用   入力  active-high 
	line 156:     "PAG.00"       未使用   入力  active-high 
	line 157:     "PAG.01"       未使用   入力  active-high 
	line 158:     "PAG.02"       未使用   入力  active-high 
	line 159:     "PAG.03"       未使用   入力  active-high 
	line 160:     "PAG.04"       未使用   入力  active-high 
	line 161:     "PAG.05"       未使用   入力  active-high 
	line 162:     "PAG.06"       未使用   入力  active-high 
	line 163:     "PAG.07"       未使用   入力  active-high 
gpiochip1 - 32 行:
	line   0:     "PAA.00"       未使用   入力  active-high 
	line   1:     "PAA.01"       未使用   入力  active-high 
	line   2:     "PAA.02"       未使用   入力  active-high 
	line   3:     "PAA.03"       未使用   入力  active-high 
	line   4:     "PAA.04"       未使用  出力  active-high 
	line   5:     "PAA.05" "regulator-vdd-3v3-pcie" 出力 active-high [使用中]
	line   6:     "PAA.06"       未使用   入力  active-high 
	line   7:     "PAA.07"       未使用   入力  active-high 
	line   8:     "PBB.00"       未使用   入力  active-high 
	line   9:     "PBB.01"       未使用   入力  active-high 
	line  10:     "PBB.02"       未使用   入力  active-high 
	line  11:     "PBB.03"       未使用  出力  active-high 
	line  12:     "PCC.00"       未使用  出力  active-high 
	line  13:     "PCC.01"       未使用  出力  active-high 
	line  14:     "PCC.02"       未使用  出力  active-high 
	line  15:     "PCC.03"        "mux"  出力  active-high [使用中]
	line  16:     "PCC.04"       未使用   入力  active-high 
	line  17:     "PCC.05"       未使用   入力  active-high 
	line  18:     "PCC.06"       未使用   入力  active-high 
	line  19:     "PCC.07"       未使用   入力  active-high 
	line  20:     "PDD.00"       未使用   入力  active-high 
	line  21:     "PDD.01"       未使用   入力  active-high 
	line  22:     "PDD.02"       未使用   入力  active-high 
	line  23:     "PEE.00"       未使用   入力  active-high 
	line  24:     "PEE.01"       未使用   入力  active-high 
	line  25:     "PEE.02"       未使用   入力  active-high 
	line  26:     "PEE.03"       未使用   入力  active-high 
	line  27:     "PEE.04"      "Power"   入力   active-low [使用中]
	line  28:     "PEE.05"       未使用   入力  active-high 
	line  29:     "PEE.06"       未使用   入力  active-high 
	line  30:     "PEE.07"       未使用   入力  active-high 
	line  31:     "PGG.00"       未使用   入力  active-high 
gpiochip2 - 16 行:
	line   0:     "wl_dis" "gpio_xten_pin@0" 出力 active-high [使用中]
	line   1: "hst_wake_wl" "gpio_xten_pin@1" 出力 active-high [使用中]
	line   2: "wl_wake_hst" "gpio_xten_pin@2" 出力 active-low [使用中]
	line   3:     "bt_dis" "gpio_xten_pin@3" 出力 active-high [使用中]
	line   4: "hst_wake_bt" 未使用 入力 active-high 
	line   5: "bt_wake_hst" 未使用 入力 active-high 
	line   6: "spi0_rst_3v3" "gpio_xten_pin@6" 出力 active-low [使用中]
	line   7:  "gpio_pin7" "gpio_xten_pin@7" 出力 active-low [使用中]
	line   8: "can_120R_en" 未使用 入力 active-high 
	line   9: "M2B_PCIe_rst" 未使用 入力 active-high 
	line  10: "USB_HUB_rst" "gpio_xten_pin@10" 出力 active-high [使用中]
	line  11: "PCIe_ETH_rst" 未使用 入力 active-high 
	line  12: "M2B_WOWWAN"       未使用   入力  active-high 
	line  13: "M2B_DPR_3V3" 未使用 入力 active-high 
	line  14: "SIM_MUX_SEL" 未使用 入力 active-high 
	line  15: "gpio_pin15"       未使用   入力  active-high 
```

</TabItem>
</Tabs>

## 技術サポート & 製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>