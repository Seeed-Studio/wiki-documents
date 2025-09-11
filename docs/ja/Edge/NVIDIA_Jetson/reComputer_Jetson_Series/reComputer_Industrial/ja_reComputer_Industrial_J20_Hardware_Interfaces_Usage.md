---
description: reComputer Industrial J20シリーズのハードウェアおよびインターフェースの使用方法
title: reComputer Industrial J20 ハードウェアおよびインターフェースの使用方法
tags:
  - reComputer Industrial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_Industrial_J20_Hardware_Interfaces_Usage
last_update:
  date: 05/15/2025
  author: Lakshantha
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

このWikiでは、reComputer Industrial J2012、J2011のさまざまなハードウェアおよびインターフェースと、それらを使用してプロジェクトアイデアを拡張する方法を紹介します。

## reComputer Industrial の分解

まず最初に、すべてのインターフェースにアクセスするために外装ケースを分解することをお勧めします。reComputer Industrialを分解するには、以下のように背面にある4本のネジを外します。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/98.png"/></div>

## CSIカメラ

reComputer Industrialには、**2つの2レーン15ピンMIPI CSIカメラコネクタ**が装備されており、以下のカメラがサポートされています。

- IMX219カメラ

  - [Raspberry Pi Camera V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)
  - [IMX219-130 8MP Camera with 130° FOV](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html)
  - [IMX219-160 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160-Camera-160-FOV-Applicable-for-Jetson-Nano-p-4603.html)
  - [IMX219-200 8MP Camera with 200° FOV](https://www.seeedstudio.com/IMX219-200-Camera-200-FOV-Applicable-for-Jetson-Nano-p-4609.html)
  - [IMX219-77 8MP Camera with 77° FOV](https://www.seeedstudio.com/IMX219-77-Camera-77-FOV-Applicable-for-Jetson-Nano-p-4608.html)
  - [IMX219 M12/CS mount CMOS Camera Module](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)
  - [IMX219-83 8MP 3D Stereo Camera Module](https://www.seeedstudio.com/IMX219-83-Stereo-Camera-8MP-Binocular-Camera-Module-Depth-Vision-Applicable-for-Jetson-Nano-p-4610.html)
  - [IMX219-77IR 8MP IR Night Vision Camera with 77° FOV](https://www.seeedstudio.com/IMX219-77IR-Camera-77-FOV-Infrared-Applicable-for-Jetson-Nano-p-4607.html)
  - [IMX219-160IR 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160IR-Camera160-FOV-Infrared-Applicable-for-Jetson-Nano-p-4602.html)
  - [IMX219 M12/CS mount CMOS Camera Module](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)

- IMX477カメラ

  - [Raspberry Pi High Quality Camera](https://www.seeedstudio.com/Raspberry-Pi-High-Quality-Cam-p-4463.html)
  - [Raspberry Pi HQ Camera - M12 mount](https://www.seeedstudio.com/Raspberry-Pi-HQ-Camera-M12-mount-p-5578.html)
  - [High Quality Camera for Raspberry Pi](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)

### 接続概要

2つのCSIカメラコネクタは**CAM0とCAM1**としてマークされています。1つのカメラを2つのコネクタのいずれかに接続するか、2つのカメラを両方のコネクタに同時に接続することができます。

- **ステップ1:** CSIコネクタの黒いロックを優しく引き出します。

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/5.png"/></div>

- **ステップ2:** 金色の端子が下向きになるように15ピンリボンケーブルをコネクタに挿入します。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/6.png"/></div>

- **ステップ3:** 黒いロックを押し込んでリボンケーブルを固定します。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/10.png"/></div>

### 使用方法

まず、使用する特定のカメラに適したドライバをロードするようにボードを設定する必要があります。このために、JetPackシステムにはIMX219およびIMX477カメラをサポートする組み込みツールがあります。

- **ステップ1:** ターミナルを開き、以下を実行します。

```sh
sudo /opt/nvidia/jetson-io/jetson-io.py
```

- **ステップ2:** **Configure Jetson Nano CSI Connector** を選択します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/119.jpg"/></div>

- **ステップ3:** **Configure for compatible hardware** を選択します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/120.jpg"/></div>

- **ステップ4:** 使用するカメラを選択します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/121.jpg"/></div>

- **ステップ5:** **Save pin changes** を選択します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/122.jpg"/></div>

- **ステップ6:** **Save and reboot to reconfigure pins** を選択します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/123.jpg"/></div>

- **ステップ7:** キーボードの任意のキーを押すと、デバイスが再起動し、カメラ設定が適用されます。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/124.jpg"/></div>

CSIカメラは2つの異なる方法で使用できます。以下のコマンドをカメラコネクタに応じて実行してください。

- 方法1:

CAM0ポートの場合

```sh
nvgstcapture-1.0 sensor-id=0 
```

CAM1ポートの場合

```sh
nvgstcapture-1.0 sensor-id=1  
```

:::note
カメラの設定をさらに変更したい場合は、**"nvgstcapture-1.0 --help"** を入力して利用可能なすべての設定オプションにアクセスできます。
:::

- 方法2:

CAM0ポートの場合

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=0 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

CAM1ポートの場合

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=1 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

:::note
カメラの設定をさらに変更したい場合は、**width, height, framerate, format** などの引数を更新できます。
:::

## RTC

reComputer Industrial は、RTC バッテリーを接続するための2つの異なる方法を備えています。

### 接続概要

- 方法 1:

**3V CR1220 コイン型電池**を、以下の図に示すようにボード上の RTC ソケットに接続します。バッテリーの**正極 (+)** が上向きになるようにしてください。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/11.jpg"/></div>

- 方法 2:

**JST コネクタ付き 3V CR2302 コイン型電池**を、以下の図に示すようにボード上の 2 ピン 1.25mm JST ソケットに接続します。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/12.jpg"/></div>

### 使用方法

- **ステップ 1:** 上記のいずれかの方法で RTC バッテリーを接続します。

- **ステップ 2:** reComputer Industrial を起動します。

- **ステップ 3:** Ubuntu デスクトップで、右上隅のドロップダウンメニューをクリックし、`設定 > 日付と時刻` に移動します。Ethernet ケーブルを使用してネットワークに接続し、**自動日付と時刻** を選択して日付/時刻を自動的に取得します。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::note
Ethernet 経由でインターネットに接続していない場合は、ここで手動で日付/時刻を設定できます。
:::

- **ステップ 4:** ターミナルウィンドウを開き、以下のコマンドを実行してハードウェアクロックの時刻を確認します。

```sh
sudo hwclock
```

以下のような出力が表示されますが、これは正しい日付/時刻ではありません。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/14.png"/></div>

- **ステップ 5:** 以下のコマンドを入力して、ハードウェアクロックの時刻を現在のシステムクロックの時刻に変更します。

```sh
sudo hwclock --systohc
```

- **ステップ 6:** Ethernet ケーブルを取り外し、インターネットから時刻を取得しないようにしてから、ボードを再起動します。

```sh
sudo reboot
```

- **ステップ 7:** ハードウェアクロックの時刻を確認し、デバイスの電源を切った後でも日付/時刻が保持されていることを確認します。

次に、各起動時にハードウェアクロックからシステムクロックを常に同期するスクリプトを作成します。

- **ステップ 8:** 任意のテキストエディタを使用して新しいシェルスクリプトを作成します。ここでは **vi** テキストエディタを使用します。

```sh
sudo vi /usr/bin/hwtosys.sh 
```

- **ステップ 9:** **i** キーを押して**挿入モード**に入り、以下の内容をファイル内にコピーして貼り付けます。

```sh
#!/bin/bash

sudo hwclock --hctosys
```

- **ステップ 10:** スクリプトを実行可能にします。

```sh
sudo chmod +x /usr/bin/hwtosys.sh 
```

- **ステップ 11:** systemd ファイルを作成します。

```sh
sudo nano /lib/systemd/system/hwtosys.service 
```

- **ステップ 12:** 以下の内容をファイル内に追加します。

```sh
[Unit]
Description=Change system clock from hardware clock

[Service]
ExecStart=/usr/bin/hwtosys.sh

[Install]
WantedBy=multi-user.target
```

- **ステップ 13:** systemctl デーモンをリロードします。

```sh
sudo systemctl daemon-reload 
```

- **ステップ 14:** 新しく作成したサービスを起動時に有効化し、サービスを開始します。

```sh
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

- **ステップ 15:** スクリプトが systemd サービスとして正常に動作していることを確認します。

```sh
sudo systemctl status hwtosys.service
```

- **ステップ 16:** ボードを再起動し、システムクロックがハードウェアクロックと同期していることを確認します。

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

- **ステップ 3:** 4G モジュールを mini PCIe スロットにスライドさせて挿入し、プリインストールされたネジを使用して 2 つの穴に固定します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/17.png"/></div>

- **ステップ 4:** アンテナコネクタの **MAIN** とラベル付けされた部分にアンテナを接続します。この際、IPEX コネクタを使用する必要があります

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/18.png"/></div>

- **ステップ 5:** 4G 対応の nano SIM カードをボードの SIM カードスロットに挿入します。SIM カードの金属面が下向きになるように挿入し、内部のスプリングに当たってロックされるまで完全に挿入してください。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/19.png"/></div>

:::note
SIM カードを取り外す場合は、カードを押し込んで内部スプリングに当てると、スロットからカードが出てきます。
:::

- **ステップ 6:** **J8 (Control and UART) Header** 上の **SIM_MUX_SEL** と **GND** ピンの間にジャンパーを追加します

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/20.png"/></div>

- **ステップ 7:** ボードの電源をオンにします

### 4G モジュール使用方法 - テストダイヤル

EC25 モジュールを使用する場合、モジュールは自動的に起動し、使用可能になります。ただし、EC20 モジュールを使用する場合は、モジュールをリセットする必要があります。

- **ステップ 1:** EC25 モジュールを使用している場合、このステップはスキップできます。ただし、EC20 モジュールを使用している場合は、以下のコマンドを入力して 4G モジュールをリセットする GPIO298 ピンにアクセスします。

```sh
sudo su 
cd /sys/class/gpio
echo 298 > export 
cd gpio298
echo out > direction
echo 1 > value
```

EC25 モジュールの場合、ボードが起動するとすぐに LED2 が緑色に点灯します。EC20 モジュールの場合は、上記の手順でモジュールをリセットした後に LED2 が緑色に点灯します。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/118.jpg"/></div>

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

- **ステップ 5:** コマンド **"AT"** を入力して Enter を押します。「OK」と表示されれば、4G モジュールは正常に動作しています。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/></div>

- **ステップ 6:** コマンド **"ATI"** を入力してモジュール情報を確認します

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/></div>

- **ステップ 7:** モジュールをテストするために、以下のコマンドを入力して別の電話番号に発信します

```sh
ATD<phone_number>;
```

以下のような出力が表示されます。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/24.jpg"/></div>

入力した電話番号が通話を受信できる場合、モジュールは期待通りに動作しています。

### 4G モジュール使用方法 - インターネット接続

#### EC25 モジュール

EC25 モジュールを使用している場合、以下の手順に従ってください。

- **ステップ 1:** 上記の「4G モジュール使用方法 - テストダイヤル」セクションで説明したように 4G モジュールのシリアルコンソールを開いた後、以下のコマンドを実行してインターネットに接続します。この際、**YOUR_APN** をネットワークプロバイダーの APN に置き換えてください。

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/89.jpg"/></div>

接続が成功すると、上記の画像のように **OK** と出力されます。

- **ステップ 2:** 以下のコマンドを実行して 4G モジュールを再起動します。

```sh
AT+CFUN=1,1
```

これにより、シリアルターミナルでの 4G モジュールとの接続が切断されます。

- **ステップ 3:** **CTRL + A** を押してから **Q** を押して **minicom** を終了します。

- **ステップ 4:** **ifconfig** を入力すると、**usb0** インターフェースに IP アドレスが表示されます。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/93.png"/></div>

- **ステップ 5:** 以下のようにウェブサイトに ping を送信して、インターネット接続があるか確認できます。

```sh
ping -I usb0 www.bing.com -c 5
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/94.png"/></div>

#### EC20 モジュール

EC20 モジュールを使用している場合は、以下の手順に従ってください。

- **ステップ 1:** すでに EC20 モジュール用に前のセクション（4G モジュール使用 - ダイヤルテストセクション）で説明したように 4G モジュールをリセットしている場合、このステップをスキップできます。ただし、まだ行っていない場合は、今すぐ実行してください。

- **ステップ 2:** 4G モジュールのシリアルコンソールに入り、以下のコマンドを入力して ECM モードに設定します。

```sh
AT+QCFG="usbnet",1
```

- **ステップ 3:** 4G モジュールをリセットします。

- **ステップ 4:** 4G モジュールコンソール内で以下のコマンドを実行してインターネットに接続します。ここで **YOUR_APN** をネットワークプロバイダーの APN に置き換えてください。

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

- **ステップ 6:** **ifconfig** を入力すると、**usb1** インターフェースに IP アドレスが表示されます。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/90.jpg"/></div>

- **ステップ 7:** 以下のように URL に ping を送信して、インターネット接続があるか確認できます。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/92.png"/></div>

### LoRa モジュール接続概要

現在、このボードは WM1302 SPI モジュールをサポートしています。[US バージョン](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html) または [EU バージョン](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html) を使用できます。これらは当社の Bazaar で入手可能です。

- **ステップ 1:** ボードがすでにオンになっている場合は電源をオフにします。

- **ステップ 2:** LoRa モジュールを mini PCIe スロットに差し込み、事前に取り付けられているネジを使用して、2 つの穴にネジを締めて 4G モジュールを固定します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/25.png"/></div>

- **ステップ 3:** アンテナコネクタにアンテナを接続します。この際、IPEX コネクタを使用する必要があります。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/26.png"/></div>

:::note
**SIM_MUX_SEL** と **GND** ピンの間にジャンパーがないことを確認してください（**J8（制御および UART ヘッダー）**）。このジャンパーは 4G モジュールを使用する場合にのみ必要です。
:::

- **ステップ 4:** ボードの電源をオンにします。

### LoRa モジュール使用 - LoRa RF のテスト

LoRa モジュールが接続されると、モジュール上の緑色と青色の LED が点灯します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/27.png"/></div>

- **ステップ 1:** 以下のコマンドを入力して、LoRa モジュールがシステムによって検出されているか確認します。

```sh
i2cdetect -r -y 7
```

以下の出力が表示された場合、モジュールはシステムによって検出されています。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/29.png"/></div>

- **ステップ 2:** 以下のコマンドを入力して、LoRa 信号送信ツールをコンパイルおよびビルドします。

```sh
git clone https://github.com/lakshanthad/sx1302_hal
cd sx1302_hal
make
cd libloragw
cp ../tools/reset_lgw.sh .
sudo ./test_loragw_hal_tx -r 1250 -m LORA -f 867.1 -s 12 -b 125 -n 1000 -z 100 --dig 3 --pa 0 --pwid 13 -d /dev/spidev2.0
```

以下の結果が表示され、LoRa モジュールの LED が赤色に点灯した場合、モジュールが RF 信号を正常に送信していることを意味します。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/78.jpg"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/28.png"/></div>

送信を停止するには、キーボードで **CTRL + C** を押します。

### LoRa モジュール使用 - TTN への接続

次に、TTN（The Things Network）に接続し、reComputer Industrial を TTN LoRaWAN ゲートウェイとして使用します。

- **ステップ 1:** 以下を入力してパケットフォワーダーを準備します。

```sh
cd ..
cd packet_forwarder
cp ../tools/reset_lgw.sh .
```

- **ステップ 2:** 使用している LoRa モジュールに応じて以下を実行します。ここでは SPI US915 バージョンをテストしました。

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

上記のコマンドを実行すると、以下の出力が表示され、最後の行に **concentrator EUI** 情報が表示されます。この情報は後で TTN ゲートウェイを設定する際に使用するため、保持してください。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/79.jpg"/></div>

- **ステップ 3:** [この URL](https://console.cloud.thethings.network) にアクセスして TTN コンソールに入り、希望の地域を選択します。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/80.png"/></div>

- **ステップ 4:** すでにアカウントをお持ちの場合はログインし、アカウントをお持ちでない場合は新しいアカウントを作成します。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/81.png"/></div>

- **ステップ 5:** **Go to gateways** をクリックします。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/82.png"/></div>

- **ステップ 6:** **+ Register gateway** をクリックします。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/83.png"/></div>

- **ステップ 7:** 先ほど取得した **Concentrator EUI** を **Gateway EUI** セクションに入力し、**Confirm** をクリックします。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/84.jpg"/></div>

- **ステップ 8:** 使用している LoRa モジュールに応じて、**周波数プラン**を入力します。ここでは、US915 バージョンのモジュールを使用しているため、**United States 902-928 MHz, FSB 2 (used by TTN)** を選択しました。その後、**Register gateway** をクリックします。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/85.jpg"/></div>

:::note
**Gateway ID** は自動的に入力されています。ただし、任意の値に変更することができます。**Gateway name** は必須ではありませんが、必要に応じて入力することもできます。
:::

- **ステップ 9:** ゲートウェイのメインホームページで **Gateway Server Address** をメモします。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/86.jpg"/></div>

- **ステップ 9:** reTerminal Industrial で、**lora_pkt_fwd** コマンドとともに使用した **global_conf_json** ファイルを編集します。以下のオプションを変更する必要があります。

  - gateway_ID: デバイスからの Concentrator EUI
  - server_address: TTN からの Gateway Server Address
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

reComputer Industrial には、4G および 5G モジュールをサポートする M.2 Key B コネクタが搭載されています。現在、**SIM8202G-M2 5G モジュール**をテスト済みです。

### 5G モジュール接続概要

- **ステップ 1:** ボードがすでにオンになっている場合は電源をオフにします。

- **ステップ 2:** スタンドオフが所定の位置にあることを確認し、スタンドオフの上部ネジを取り外します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/111.jpg"/></div>

- **ステップ 2:** 5G モジュールを M.2 Key B スロットにスライドさせ、スタンドオフネジを締めて 5G モジュールを固定します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/112.jpg"/></div>

- **ステップ 3:** モジュールのアンテナコネクタに 4 本のアンテナを接続します。この際、IPEX 4 コネクタを使用する必要があります。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/113.jpg"/></div>

- **ステップ 4:** 5G 対応の nano SIM カードをボードの SIM カードスロットに挿入します。SIM カードの金属面が下向きになるようにし、内部のスプリングに当たるまでカードを完全に挿入してロックします。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/19.png"/></div>

:::note
SIM カードを取り外す場合は、カードを押し込んで内部のスプリングに当てると、スロットからカードが出てきます。
:::

- **ステップ 5:** ボードの電源をオンにします。

### 5G モジュール使用 - 発信テスト

SIM8202G-M2 5G モジュールを使用する場合、モジュールは自動的に起動しません。まず、いくつかの GPIO をトグルして起動する必要があります。

- **ステップ 1:** 以下のコマンドを入力して 5G モジュールを起動します。

```sh
sudo su 
cd /sys/class/gpio
echo 298 > export 
cd gpio298
echo out > direction
echo 0 > value

cd..
echo 330 > export 
cd PEE.02
echo out > direction
echo 1 > value

cd..
echo 319 > export 
cd PCC.02
echo out > direction
echo 0 > value
```

上記を実行すると、以下のように LED2 が緑色に点灯します。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/117.jpg"/></div>

- **ステップ 2:** minicom をインストールします。

```sh
sudo apt update
sudo apt install minicom -y
```

- **ステップ 3:** 接続された 5G モジュールのシリアルコンソールに入り、AT コマンドを入力して 5G モジュールと対話します。

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **ステップ 4:** コマンド **"AT"** を入力して Enter を押します。「OK」という応答が表示された場合、5G モジュールは正常に動作しています。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/107.png"/></div>

- **ステップ 6:** コマンド **"ATI"** を入力してモジュール情報を確認します。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/108.png"/></div>

- **ステップ 7:** モジュールをテストするために、以下のコマンドを入力して別の電話番号に発信します。

```sh
ATD<phone_number>;
```

以下のような出力が表示されます。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/109.png"/></div>

### 5G モジュール使用 - インターネット接続

近日公開予定

## DI/ DO

reComputer Industrialは、4つのデジタル入力チャネルと4つのデジタル出力チャネルをサポートしており、すべて光学的に絶縁されています。これにより、電圧スパイクやその他の電気的な障害からメインボードを効果的に保護します。同じコネクタにはCANインターフェースもあり、これについては後ほどこのWikiで説明します。

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
      <td>440</td>
      <td rowSpan={4}>合計12V/ 20mA</td>
      <td rowSpan={4}>12Vデジタル入力、グランド信号は<br />GND_DI (Pin2/4/6)に接続する必要があります</td>
    </tr>
    <tr>
      <td>DI2</td>
      <td>DI_2_GPIO09</td>
      <td>211</td>
      <td>PS.04</td>
      <td>453</td>
    </tr>
    <tr>
      <td>DI3</td>
      <td>DI_3_GPIO11</td>
      <td>216</td>
      <td>PQ.06</td>
      <td>441</td>
    </tr>
    <tr>
      <td>DI4</td>
      <td>DI_4_GPIO13</td>
      <td>228</td>
      <td>PN.01</td>
      <td>419</td>
    </tr>
    <tr>
      <td rowSpan={4}>出力</td>
      <td>DO1</td>
      <td>DO_1_GPIO</td>
      <td>193</td>
      <td>PT.06</td>
      <td>463</td>
      <td rowSpan={4}>ピンごとに40V/40mA負荷</td>
      <td rowSpan={4}>デジタル出力、最大耐圧40V、グランド信号は<br />GND_DO (Pin8/10)に接続する必要があります</td>
    </tr>
    <tr>
      <td>DO2</td>
      <td>DO_2_GPIO</td>
      <td>195</td>
      <td>PT.07</td>
      <td>464</td>
    </tr>
    <tr>
      <td>DO3</td>
      <td>DO_3_GPIO</td>
      <td>197</td>
      <td>PU.00</td>
      <td>465</td>
    </tr>
    <tr>
      <td>DO4</td>
      <td>DO_4_GPIO</td>
      <td>199</td>
      <td>PT.05</td>
      <td>462</td>
    </tr>
    <tr>
      <td rowSpan={2}>CAN</td>
      <td>CH</td>
      <td colSpan={5} rowSpan={2}>/</td>
      <td rowSpan={2}>標準的な差動信号を持つCANバス、<br />グランド信号はGND_ISO (Pin12)に接続する必要があります</td>
    </tr>
    <tr>
      <td>CL</td>
    </tr>
    <tr>
      <td rowSpan={3}>グランド</td>
      <td>GND_DI</td>
      <td colSpan={5} rowSpan={3}>/</td>
      <td>12Vデジタル入力の基準グランド信号であり、<br />DIの戻り経路でもあります</td>
    </tr>
    <tr>
      <td>GND_DO</td>
      <td>デジタル出力の基準グランド信号であり、DOの戻り経路でもあります</td>
    </tr>
    <tr>
      <td>CG</td>
      <td>CANの基準グランド信号</td>
    </tr>
  </tbody>
</table>

### DIの接続概要

以下の図に従ってDIの接続を行うことができます。DIラインには直列に抵抗を追加することをお勧めします。ここでは、4.7kΩの抵抗をDI1ピンに接続してテストしました。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/38.png"/></div>

### DIの使用方法

DIラインに12Vの電圧を入力することで、入力として検出されます。

- **ステップ1:** 上記のように**DI1ピン**に接続し、**12V**を入力します。

- **ステップ2:** 以下のコマンドでDI1のGPIOを開きます。

```sh
sudo su 
cd /sys/class/gpio
echo 440 > export 
cd PQ.05
```

:::note
**DI/ DO ピン割り当て表**を参照して、GPIO番号とBGA番号を確認できます。上記の例では、DI1ピンのGPIO番号は440、BGA番号はPQ.05です。
:::

- **ステップ3:** 以下を実行してステータスを確認します。

```sh
cat value
```

出力が0の場合、12Vの入力があります。出力が1の場合、入力電圧がありません。

### DOの接続概要

以下の図に従ってDOの接続を行うことができます。DOラインには直列に抵抗を追加することをお勧めします。ここでは、4.7kΩの抵抗を使用してテストしました。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/39.png"/></div>

### DOの使用方法

上記の図に示されているように負荷を接続する必要があります。最も簡単なテスト方法は、マルチメーターを接続することです。マルチメーターがない場合は、最大40V以下の電圧を必要とする負荷を接続してください。

- **ステップ1:** 上記のように**DO1ピン**に接続し、**最大40V**を入力します。

- **ステップ2:** 以下のコマンドでDO1のGPIOを開きます。

```sh
sudo su 
cd /sys/class/gpio
echo 463 > export 
cd PT.06
echo out > direction
```

:::note
**DI/ DO ピン割り当て表**を参照して、GPIO番号とBGA番号を確認できます。上記の例では、DO1ピンのGPIO番号は463、BGA番号はPT.06です。
:::

- **ステップ3:** 以下を実行してピンをオンにします。

```sh
echo 1 > value
```

負荷がオンになるか、マルチメーターが入力した電圧を出力している場合、テストは正常に機能しています。

## CAN

reComputer Industrial は、5MbpsのCAN FD（Controller Area Network Flexible Data-Rate）プロトコルをサポートするCANインターフェースを備えています。このCANインターフェースは容量性絶縁を使用しており、優れたEMI保護を提供し、産業および自動化アプリケーションにおける信頼性の高い通信を保証します。デフォルトで120Ωの終端抵抗がインストールされており、この抵抗はGPIOを使用してON/OFFを切り替えることができます。

注意: CANインターフェースは絶縁電源を使用しているため、CANインターフェースに接続される外部デバイスのグラウンド信号はCGピンに接続する必要があります。

### USB to CANアダプターを使用した接続概要

CANバスをテストおよびインターフェースするには、以下の図のようにUSB to CANアダプターをボードのCANコネクタに接続します。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/40.png"/></div>

ここでは、Bazaarで入手可能な[USB to CAN Analyzer Adapter with USB Cable](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)を使用しています。

### USB to CANアダプターの使用方法

- **ステップ 1:** 使用しているUSB to CANアダプターのドライバーをメーカーのウェブサイトからダウンロードしてインストールします。今回使用したアダプターの場合、ドライバーは[こちら](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver)から入手できます。

- **ステップ 2:** 一部のアダプターには、CANデバイスと通信するためのPC用ソフトウェアが付属しています。今回使用したアダプターの場合、必要なソフトウェアは[こちら](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)からダウンロードしてインストールしました。

- **ステップ 3:** reComputer Industrial のターミナルウィンドウを開き、以下のコマンドを実行してCANインターフェースを設定および有効化します。

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **ステップ 4:** ターミナルで **ifconfig** を入力すると、CANインターフェースが有効化されていることが確認できます。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **ステップ 5:** 以前にインストールしたCANソフトウェアを開きます。この場合、使用しているCANアダプターに対応したソフトウェアを開きます。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/></div>

- **ステップ 6:** USB to CANアダプターをPCに接続し、Windowsの検索バーで「デバイスマネージャー」を検索して開きます。ここで、**Ports (COM & LPT)** の下に接続されたアダプターが表示されます。以下の画像では、シリアルポートは **COM9** です。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/></div>

- **ステップ 7:** CANソフトウェアを開き、**COM** セクションの横にある **Refresh** をクリックし、ドロップダウンメニューから接続されたアダプターに対応するシリアルポートを選択します。**COM bps** はデフォルトのままにして **Open** をクリックします。

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/></div>

- **ステップ 8:** **Mode** と **CAN bps** をデフォルトのままにし、**Type** を **Standard frame** に変更して **Set and Start** をクリックします。

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/></div>

- **ステップ 9:** reComputer Industrial で以下のコマンドを実行してPCにCAN信号を送信します。

```sh
cansend can0 123#abcdabcd
```

すると、以下のようにソフトウェアで信号が受信されます。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/></div>

- **ステップ 10:** reComputer Industrial で以下のコマンドを実行してPCからのCAN信号を受信待機します。

```sh
candump can0 &
```

- **ステップ 11:** CANソフトウェアで **Send a single frame** をクリックします。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/></div>

すると、以下のように reComputer Industrial で受信されます。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

### reTerminal DMを使用した接続概要

[reTerminal DM](https://www.seeedstudio.com/reTerminal-DM-p-5616.html) をお持ちの場合、直接通信が可能です。reTerminal DMもCANインターフェースを備えています。

以下の画像を参考にして、reComputer Industrial と reTerminal DM をCANで接続してください。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/49.png"/></div>

### reTerminal DMの使用方法

- **ステップ 1:** reTerminal DMを使用する前に、[このWiki](https://wiki.seeedstudio.com/ja/reterminal-dm)を訪問してreTerminal DMのセットアップを行ってください。

- **ステップ 2:** reComputer Industrial のターミナルウィンドウを開き、以下のコマンドを実行してCANインターフェースを設定および有効化します。

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **ステップ 3:** reTerminal DM のターミナルウィンドウを開き、以下のコマンドを実行してCANインターフェースを設定および有効化します。

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **ステップ 4:** reTerminal DM のターミナルウィンドウを開き、以下のコマンドを実行してCANインターフェースを設定および有効化します。

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **ステップ 5:** 両方のデバイスで **ifconfig** を入力すると、CANインターフェースが有効化されていることが確認できます。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **ステップ 6:** reTerminal DM で以下を実行して reComputer Industrial からのCAN信号を受信待機します。

```sh
candump can0 &
```

- **ステップ 7:** reComputer Industrial 上で以下のコマンドを実行し、reTerminal Industrial に CAN 信号を送信します。

```sh
cansend can0 123#abcdabcd
```

これで、reTerminal DM に受信される様子が以下のように表示されます。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

- **ステップ 8:** **ステップ 6 とステップ 7**を繰り返しますが、デバイスを入れ替えます。reTerminal DM を使用して CAN 信号を送信し、reComputer Industrial を使用してそれを受信します。

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
      <td>1T/1R RS-232 と RS485 の共存</td>
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
出荷時のデフォルトモードは工場設定で RS485（010）に設定されています。
:::

上記の表は DIP スイッチパネルの最初の 3 つのスイッチを考慮しています。ただし、4 番目のスイッチはスルーレートを切り替える役割を果たし、これはデータレートに直接関係します。

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
      <td>SLEW= Vcc<br />この RS232/RS422/RS485 マルチプロトコルトランシーバーは以下のように通信速度を制限します:<br />RS-232: 最大データレートは 1.5Mbps<br />RS-485/RS-422: 最大データレートは 10Mbps<br />実際の最大データレートは使用される Jetson SO M に依存します。</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/63.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>SLEW = GND<br />RS-232: 最大データレートは 250Kbps<br />RS-485/RS-422: 最大データレートは 250kbps</td>
    </tr>
  </tbody>
</table>

ここでは、USB を使用して RS232、RS485、RS422 アダプターを使用してインターフェースをテストします。そのため、次に進む前に PC にシリアルターミナルアプリケーションをインストールする必要があります。ここでは、セットアップが簡単で使いやすい **Putty** をインストールすることをお勧めします。

- **ステップ 1:** [このウェブサイト](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)にアクセスし、PC のアーキテクチャに応じて Putty をダウンロードしてください。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/60.png"/></div>

ここでは、使用した PC（X86 Windows 64 ビットマシン）に応じて Putty を選択しました。

- **ステップ 2:** ダウンロードしたセットアップを開き、プロンプトに従ってアプリケーションをインストールします。

### 一般的な接続概要

DB9 コネクタのピン番号と接続を参照することができます。

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

ここでは、USBからRS232へのアダプターを使用してインターフェースをテストできます。私たちは[UGREEN USB to RS232 Adapter](https://www.amazon.com/UGREEN-Converter-Adapter-Chipset-Windows/dp/B00QUZY4UG?th=1)を使用してテストを行いました。

- **ステップ 1:** ボードの電源をオフにします。

- **ステップ 2:** DIPスイッチを設定するための2つのオプションがあります。001モードまたは101モードのいずれかです。各モードのスイッチ位置は以下の通りです。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/64.png"/></div>

- **ステップ 3:** USBからRS232へのアダプターをDB9コネクターに接続します。ここでは、上記で述べたアダプターを接続しました。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/68.jpg"/></div>

- **ステップ 4:** アダプターのもう一方の端をPCのUSBポートの1つに接続します。

- **ステップ 5:** ボードの電源をオンにします。

### RS232 使用方法

- **ステップ 1:** 使用しているアダプターのドライバーをインストールする必要がある場合があります。あるいは、Windowsが自動的にドライバーをインストールします。Windows検索で**デバイスマネージャー**と入力してデバイスマネージャーを開き、接続されたアダプターがCOMデバイスとして表示されているか確認します。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/67.jpg"/></div>

- **ステップ 2:** アダプターが表示されない場合は、使用しているアダプターに応じたドライバーをインストールする必要があります。これらのドライバーは通常、製造元のウェブサイトで見つけることができます。私たちが使用しているアダプターの場合は、[このページ](https://www.ugreen.com/pages/download)で**20201**というモデル番号を検索し、適切なドライバーをダウンロードしてください。

- **ステップ 3:** PCでPuttyを開き、**Terminal**セクションを選択して以下を設定します。

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **ステップ 4:** **Session**を選択し、**Connection type**の下で**Serial**を選択します。**Device Manager**で表示されるシリアルポート番号を設定し、速度はデフォルト（9600）のままにして**Open**をクリックします。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/71.jpg"/></div>

- **ステップ 4:** reTerminal Industrialのターミナルウィンドウで以下を入力して、reComputerからPCに信号を送信します。

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS232 message from reComputer Industrial" > /dev/ttyTHS0
```

これで、このメッセージがPuttyに表示されます。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/72.jpg"/></div>

- **ステップ 5:** reTerminal Industrialのターミナルウィンドウで以下を入力して、PCからの信号を受信する準備をします。

```sh
sudo cat /dev/ttyTHS0
```

- **ステップ 6:** Puttyで任意の文字を入力し、**ENTER**を押すと、それがreComputer Industrialのターミナルウィンドウに表示されます。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/73.png"/></div>

### RS422 接続概要

ここでは、USBからRS422へのアダプターを使用してインターフェースをテストできます。私たちは[DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K)を使用してテストを行いました。

- **ステップ 1:** ボードの電源をオフにします。

- **ステップ 2:** DIPスイッチを設定するための2つのオプションがあります。000モードまたは100モードのいずれかです。各モードのスイッチ位置は以下の通りです。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/65.png"/></div>

- **ステップ 3:** ジャンパーワイヤーを使用して、USBからRS422へのアダプターをDB9コネクターに接続します。ここでは、上記で述べたアダプターを接続しました。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/74.png"/></div>

- **ステップ 4:** アダプターのもう一方の端をPCのUSBポートの1つに接続します。

- **ステップ 5:** ボードの電源をオンにします。

### RS422 使用方法

- **ステップ 1:** 使用しているアダプターのドライバーをインストールする必要がある場合があります。あるいは、Windowsが自動的にドライバーをインストールします。Windows検索で**デバイスマネージャー**と入力してデバイスマネージャーを開き、接続されたアダプターがCOMデバイスとして表示されているか確認します。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **ステップ 2:** アダプターが表示されない場合は、使用しているアダプターに応じたドライバーをインストールする必要があります。これらのドライバーは通常、製造元のウェブサイトで見つけることができます。私たちが使用しているアダプターの場合は、[このページ](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)をご覧ください。

- **ステップ 3:** PCでPuttyを開き、**Terminal**セクションを選択して以下を設定します。

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **ステップ 4:** **Session**を選択し、**Connection type**の下で**Serial**を選択します。**Device Manager**で表示されるシリアルポート番号を設定し、速度はデフォルト（9600）のままにして**Open**をクリックします。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **ステップ 4:** reTerminal Industrialのターミナルウィンドウで以下を入力して、reComputerからPCに信号を送信します。

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS422 message from reComputer Industrial" > /dev/ttyTHS0
```

これで、このメッセージがPuttyに表示されます。

- **ステップ 5:** reTerminal Industrialのターミナルウィンドウで以下を入力して、PCからの信号を受信する準備をします。

```sh
sudo cat /dev/ttyTHS0
```

- **ステップ 6:** Puttyで任意の文字を入力し、**ENTER**を押すと、それがreComputer Industrialのターミナルウィンドウに表示されます。

### RS485 接続概要 

ここでは、USB から RS422 アダプタを使用してインターフェースをテストできます。私たちは [DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) をテストに使用しました。

- **ステップ 1:** ボードの電源を切る

- **ステップ 2:** DIPスイッチを設定するための3つのオプションがあります。010モード、011モード、または110モードのいずれかです。各モードのスイッチ位置は以下の通りです。

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/66.png"/></div>

- **ステップ 3:** ジャンパーワイヤーを使用して、USB から RS422 アダプタを DB9 コネクタに接続します。以下の図のように接続します。ここでは、上記で言及したアダプタを接続しています。

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/77.png"/></div>

- **ステップ 4:** もう一方の端をPCのUSBポートの1つに接続します。

- **ステップ 5:** ボードの電源を入れる

### RS485 の使用方法

- **ステップ 1:** 使用しているアダプタのドライバをインストールする必要がある場合があります。または、Windowsが自動的にドライバをインストールします。Windows検索で **Device Manager** と入力してデバイスマネージャーを開き、接続されたアダプタがCOMデバイスとして表示されているか確認します。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **ステップ 2:** アダプタが表示されない場合は、使用しているアダプタに応じたドライバをインストールする必要があります。これらのドライバは通常、製造元のウェブサイトで見つけることができます。私たちが使用しているアダプタの場合は、[このページ](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485) を参照してください。

- **ステップ 3:** PCでPuttyを開き、**Terminal** セクションを選択して以下を設定します。

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **ステップ 4:** **Session** を選択し、**Connection type** で **Serial** を選択します。**Device Manager** に表示されているシリアルポート番号を設定し、速度はデフォルト（9600）のままにして **Open** をクリックします。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **ステップ 4:** reTerminal Industrial のターミナルウィンドウで以下を入力して、reComputer からPCに信号を送信します。

```sh
sudo su 
cd /sys/class/gpio 
echo 447 > export 
cd PR.04
echo out > direction
echo 0 > value
echo "RS485 message from reComputer Industrial" > /dev/ttyTHS0
```

これで、このメッセージがPuttyに表示されます。

- **ステップ 5:** reTerminal Industrial のターミナルウィンドウで以下を入力して、PCからの信号を受信する準備をします。

```sh
sudo su
cd /sys/class/gpio
echo 447 > export
cd PR.04
echo out > direction
echo 1 > value
cat /dev/ttyTHS0
```

- **ステップ 6:** Puttyで何かを入力し、**ENTER** を押すと、それが reComputer Industrial のターミナルウィンドウに表示されます。

## ギガビットイーサネットコネクタ

reComputer Industrial には2つのギガビットイーサネット（10/100/1000M）コネクタがあり、それぞれ異なる方法で機能します。

- 左端のコネクタは Jetson モジュールに直接接続されており、**PSE 802.3 af, 15W** 仕様でPoE機能を提供できます。これにより、PoE IPカメラやその他のPoEデバイスをこのポートに接続して、接続されたデバイスに電力を供給できます。
- もう一方のコネクタは、PCIe to Ethernet（LAN7430-I/Y9X）モジュールを介して接続されています。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/36.png"/></div>

各イーサネットポートには2つのLED（緑と黄色）があり、以下を示します。

- 緑色のLED: 1000Mネットワークに接続されている場合のみ点灯
- 黄色のLED: ネットワークアクティビティのステータスを表示

## USB

reComputer Industrialには3つのUSB3.2コネクタが搭載されており、以下の特徴があります：
- 二重スタックUSBコネクタでは、上部と下部のUSBポートが電流制限ICを共有しており、最大出力電流2.1Aの総電源容量があります（単独でも2.1A）。2.1Aを超えると過電流保護状態に入ります。
- 二重スタックUSBコネクタの隣にある単一USBコネクタでは、最大出力電流2.1Aの総電源容量があります。2.1Aを超えると過電流保護状態に入ります。
- Orin NXモジュールには3つのUSB3.2が搭載されていますが、reComputerではそのうち1つのみが使用され、3つに分岐されています（USB3.1 TYPE-A x2 - J4およびUSB3.1 TYPE-A x1 - J3）。
- USBホストのみをサポートし、デバイスモードはサポートしていません。
- 5V 2.1Aを供給。
- ホットスワップ対応。

### 使用方法

接続されたUSBフラッシュドライブで簡単なベンチマークを行う方法を説明します。

- **ステップ1:** 以下のコマンドを実行して書き込み速度を確認します。

```sh
sudo dd if=/dev/zero of=/dev/$1 bs=100M count=10 conv=fdatasync
```

- **ステップ2:** 以下のコマンドを実行して読み取り速度を確認します。このコマンドは、上記の書き込み速度確認コマンドを実行した後に実行してください。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/dev/$1 of=/dev/null bs=100M count=10
```

## 設定可能なLED

基板上に緑色のLEDが配置されており、以下の図に示されています。デフォルトでは、デバイスが正常に動作していることを示すLEDとして機能します。ただし、このLEDをプログラムしてシステムによってON/OFFを制御することも可能です。

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/21.png"/></div>

### 使用方法

- **ステップ1:** 緑色のLEDにアクセスするために、ターミナルウィンドウで以下のコマンドを入力します。

```sh
sudo -i
cd /sys/class/gpio
echo 318 > export 
cd PCC.01
echo out > direction 
```

- **ステップ2:** LEDをOFFにする。

```sh
echo 0 > value 
```

- **ステップ3:** LEDをONにする。

```sh
echo 1 > value 
```

LEDの使用を終了した場合は、以下を実行してください。

```sh
cd ..
echo 318 > unexport
```

## システム性能の監視

**jetson stats**アプリケーションを使用して、システムコンポーネントの温度を監視し、以下のようなその他のシステム詳細を確認できます：

- CPU、GPU、RAMの使用状況を表示
- 電力モードの変更
- 最大クロックに設定
- JetPack情報の確認

- **ステップ1:** reComputer Industrialのターミナルウィンドウで以下を入力します。

```sh
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```

- **ステップ2:** ボードを再起動します。

```sh
sudo reboot
```

- **ステップ3:** ターミナルで以下を入力します。

```sh
jtop
```

これで**jtop**アプリケーションが以下のように開きます。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/30.png"/></div>

- **ステップ4:** アプリケーションの異なるページを循環して、すべての機能を探索できます！

## WiFiとBluetooth

reComputer IndustrialにはWiFiとBluetoothが標準搭載されていません。ただし、PCB上にWiFi/Bluetoothモジュールをはんだ付けするための予約セクションがあります。このスペースは**BL-M8723DU1**モジュールをサポートするように設計されています。

### 接続概要

- **ステップ1:** **BL-M8723DU1**モジュールを自分ではんだ付けしたい場合は可能ですが、ボードを損傷した場合、保証が無効になるため推奨しません。推奨するのは、当社のプロフェッショナルサービスを利用してこのモジュールをボードに取り付けることです。リクエストをorder@seeed.ccにメールで送信してください。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/31.jpg"/></div>

- **ステップ2:** WiFiとBluetooth用にボード上の2つのアンテナコネクタに2つのアンテナを接続します。この際、IPEXコネクタを使用する必要があります。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/32.png"/></div>

### 使用方法

- **ステップ1:** ボードを起動し、デバイスがUbuntuデスクトップに起動したら、右上のドロップダウンメニューをクリックし、`設定 > Wi-Fi`に移動して、タイトルバーのボタンを切り替えてWiFiを有効にします。その後、WiFiネットワークを選択し、必要なパスワードを入力して接続します。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/33.png"/></div>

- **ステップ2:** 同じウィンドウで**Bluetooth**を選択し、タイトルバーのボタンを切り替えてBluetoothを有効にします。その後、Bluetoothデバイスを選択して接続します。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/34.png"/></div>

## TPM

reComputer Industrial には、外部 TPM モジュールを接続するための TPM インターフェースが付属しています。ここでは、Infineon SLB9670 ベースの TPM2.0 モジュールでテストを行いました。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/114.jpg"/></div>

### 接続概要

以下の図のように、TPM モジュールを TPM コネクタに接続します。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/115.jpg"/></div>

### 使用方法

以下のコマンドを実行して、TPM モジュールが正しくロードされているか確認します。

```sh
sudo dmesg | grep TPM
ls /dev/tpm* -l
```

以下のような出力が表示されます。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/116.png"/></div>

## reComputer Industrial の最大パフォーマンス

reComputer Industrial で最大パフォーマンスを有効にするには、以下の手順に従ってください。

- **ステップ 1:** 以下のコマンドを入力して最大電力モードを有効にします。

```sh
sudo nvpmodel -m 0
```

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/35.jpg"/></div>

ここで、ボードを再起動するために **YES** と入力する必要があります。

- **ステップ 2:** ボードが起動したら、以下のコマンドを入力して CPU クロックを最大周波数に設定します。

```sh
sudo jetson_clocks
```

## GPIO テーブル

reComputer Industrial の GPIO テーブルにアクセスして、すべてのピンマッピングを確認できます。

ターミナル内で以下を実行してください。

```sh
sudo cat /sys/kernel/debug/gpio
```

以下のような出力が表示されます。

```sh
gpiochip3: GPIOs 289-304, parent: i2c/1-0021, 1-0021, can sleep:
 gpio-289 (wl_dis              |gpio_xten_pin@0     ) out hi
 gpio-290 (hst_wake_wl         |gpio_xten_pin@1     ) out hi
 gpio-291 (wl_wake_hst         |gpio_xten_pin@2     ) out hi ACTIVE LOW
 gpio-292 (bt_dis              |gpio_xten_pin@3     ) out hi
 gpio-293 (hst_wake_bt         |gpio_xten_pin@4     ) out hi
 gpio-294 (bt_wake_hst         |gpio_xten_pin@5     ) out hi ACTIVE LOW
 gpio-295 (spi0_rst_3v3        |gpio_xten_pin@6     ) out lo ACTIVE LOW
 gpio-296 (gpio_pin7           |gpio_xten_pin@7     ) out lo ACTIVE LOW
 gpio-297 (can_120R_en         )
 gpio-298 (M2B_PCIe_rst        )
 gpio-299 (USB_HUB_rst         |gpio_xten_pin@10    ) out hi
 gpio-300 (PCIe_ETH_rst        )
 gpio-301 (M2B_WOWWAN          |gpio_xten_pin@12    ) out hi ACTIVE LOW
 gpio-302 (M2B_DPR_3V3         |gpio_xten_pin@13    ) out hi ACTIVE LOW
 gpio-303 (SIM_MUX_SEL         |gpio_xten_pin@14    ) out hi ACTIVE LOW
 gpio-304 (gpio_pin15          |gpio_xten_pin@15    ) out hi ACTIVE LOW

gpiochip2: GPIOs 305-334, parent: platform/c2f0000.gpio, tegra194-gpio-aon:
 gpio-305 (PAA.00              )
 gpio-306 (PAA.01              )
 gpio-307 (PAA.02              )
 gpio-308 (PAA.03              )
 gpio-309 (PAA.04              )
 gpio-310 (PAA.05              )
 gpio-311 (PAA.06              )
 gpio-312 (PAA.07              )
 gpio-313 (PBB.00              )
 gpio-314 (PBB.01              )
 gpio-315 (PBB.02              )
 gpio-316 (PBB.03              )
 gpio-317 (PCC.00              )
 gpio-318 (PCC.01              |pwr                 ) out hi
 gpio-319 (PCC.02              )
 gpio-320 (PCC.03              |mux                 ) out hi
 gpio-321 (PCC.04              )
 gpio-322 (PCC.05              )
 gpio-323 (PCC.06              )
 gpio-324 (PCC.07              )
 gpio-325 (PDD.00              )
 gpio-326 (PDD.01              )
 gpio-327 (PDD.02              )
 gpio-328 (PEE.00              )
 gpio-329 (PEE.01              )
 gpio-330 (PEE.02              )
 gpio-331 (PEE.03              )
 gpio-332 (PEE.04              |power-key           ) in  hi IRQ ACTIVE LOW
 gpio-333 (PEE.05              )
 gpio-334 (PEE.06              )
gpiochip1: GPIOs 335-503, parent: platform/2200000.gpio, tegra194-gpio:
 gpio-335 (PA.00               )
 gpio-336 (PA.01               )
 gpio-337 (PA.02               )
 gpio-338 (PA.03               )
 gpio-339 (PA.04               )
 gpio-340 (PA.05               )
 gpio-341 (PA.06               )
 gpio-342 (PA.07               )
 gpio-343 (PB.00               )
 gpio-344 (PB.01               )
 gpio-345 (PC.00               )
 gpio-346 (PC.01               )
 gpio-347 (PC.02               )
 gpio-348 (PC.03               )
 gpio-349 (PC.04               )
 gpio-350 (PC.05               )
 gpio-351 (PC.06               )
 gpio-352 (PC.07               )
 gpio-353 (PD.00               )
 gpio-354 (PD.01               )
 gpio-355 (PD.02               )
 gpio-356 (PD.03               )
 gpio-357 (PE.00               )
 gpio-358 (PE.01               )
 gpio-359 (PE.02               )
 gpio-360 (PE.03               )
 gpio-361 (PE.04               )
 gpio-362 (PE.05               )
 gpio-363 (PE.06               )
 gpio-364 (PE.07               )
 gpio-365 (PF.00               )
 gpio-366 (PF.01               )
 gpio-367 (PF.02               )
 gpio-368 (PF.03               )
 gpio-369 (PF.04               )
 gpio-370 (PF.05               )
 gpio-371 (PG.00               |force-recovery      ) in  hi IRQ ACTIVE LOW
 gpio-372 (PG.01               )
 gpio-373 (PG.02               |fixed-regulators:reg) out lo
 gpio-374 (PG.03               |wifi-enable         ) out hi
 gpio-375 (PG.04               )
 gpio-376 (PG.05               )
 gpio-377 (PG.06               )
 gpio-378 (PG.07               )
 gpio-379 (PH.00               )
 gpio-380 (PH.01               )
 gpio-381 (PH.02               )
 gpio-382 (PH.03               )
 gpio-383 (PH.04               )
 gpio-384 (PH.05               )
 gpio-385 (PH.06               )
 gpio-386 (PH.07               )
 gpio-387 (PI.00               )
 gpio-388 (PI.01               )
 gpio-389 (PI.02               )
 gpio-390 (PI.03               )
 gpio-391 (PI.04               )
 gpio-392 (PJ.00               )
 gpio-393 (PJ.01               )
 gpio-394 (PJ.02               )
 gpio-395 (PJ.03               )
 gpio-396 (PJ.04               )
 gpio-397 (PJ.05               )
 gpio-398 (PK.00               )
 gpio-399 (PK.01               )
 gpio-400 (PK.02               )
 gpio-401 (PK.03               )
 gpio-402 (PK.04               )
 gpio-403 (PK.05               )
 gpio-404 (PK.06               )
 gpio-405 (PK.07               )
 gpio-406 (PL.00               )
 gpio-407 (PL.01               )
 gpio-408 (PL.02               )
 gpio-409 (PL.03               )
 gpio-410 (PM.00               )
 gpio-411 (PM.01               |hdmi2.0_hpd         ) in  lo IRQ
 gpio-412 (PM.02               )
 gpio-413 (PM.03               )
 gpio-414 (PM.04               )
 gpio-415 (PM.05               )
 gpio-416 (PM.06               )
 gpio-417 (PM.07               )
 gpio-418 (PN.00               |fixed-regulators:reg) out lo
 gpio-419 (PN.01               )
 gpio-420 (PN.02               )
 gpio-421 (PO.00               )
 gpio-422 (PO.01               )
 gpio-423 (PO.02               )
 gpio-424 (PO.03               )
 gpio-425 (PO.04               )
 gpio-426 (PO.05               )
 gpio-427 (PP.00               )
 gpio-428 (PP.01               )
 gpio-429 (PP.02               )
 gpio-430 (PP.03               )
 gpio-431 (PP.04               )
 gpio-432 (PP.05               )
 gpio-433 (PP.06               )
 gpio-434 (PP.07               )
 gpio-435 (PQ.00               )
 gpio-436 (PQ.01               )
 gpio-437 (PQ.02               )
 gpio-438 (PQ.03               )
 gpio-439 (PQ.04               )
 gpio-440 (PQ.05               )
 gpio-441 (PQ.06               )
 gpio-442 (PQ.07               )
 gpio-443 (PR.00               )
 gpio-444 (PR.01               |phy_reset           ) out hi
 gpio-445 (PR.02               )
 gpio-446 (PR.03               )
 gpio-447 (PR.04               )
 gpio-448 (PR.05               )
 gpio-449 (PS.00               )
 gpio-450 (PS.01               )
 gpio-451 (PS.02               )
 gpio-452 (PS.03               )
 gpio-453 (PS.04               )
 gpio-454 (PS.05               )
 gpio-455 (PS.06               )
 gpio-456 (PS.07               )
 gpio-457 (PT.00               )
 gpio-458 (PT.01               )
 gpio-459 (PT.02               )
 gpio-460 (PT.03               )
 gpio-461 (PT.04               )
 gpio-462 (PT.05               )
 gpio-463 (PT.06               )
 gpio-464 (PT.07               )
 gpio-465 (PU.00               )
 gpio-466 (PV.00               )
 gpio-467 (PV.01               )
 gpio-468 (PV.02               )
 gpio-469 (PV.03               )
 gpio-470 (PV.04               )
 gpio-471 (PV.05               )
 gpio-472 (PV.06               )
 gpio-473 (PV.07               )
 gpio-474 (PW.00               )
 gpio-475 (PW.01               )
 gpio-476 (PX.00               )
 gpio-477 (PX.01               )
 gpio-478 (PX.02               )
 gpio-479 (PX.03               )
 gpio-480 (PX.04               )
 gpio-481 (PX.05               )
 gpio-482 (PX.06               )
 gpio-483 (PX.07               )
 gpio-484 (PY.00               )
 gpio-485 (PY.01               )
 gpio-486 (PY.02               )
 gpio-487 (PY.03               )
 gpio-488 (PY.04               )
 gpio-489 (PY.05               )
 gpio-490 (PY.06               )
 gpio-491 (PY.07               )
 gpio-492 (PZ.00               )
 gpio-493 (PZ.01               |vbus                ) in  hi IRQ ACTIVE LOW
 gpio-494 (PZ.02               )
 gpio-495 (PZ.03               )
 gpio-496 (PZ.04               )
 gpio-497 (PZ.05               )
 gpio-498 (PZ.06               |cs_gpio             ) out lo
 gpio-499 (PZ.07               |cs_gpio             ) out hi
 gpio-500 (PFF.00              )
 gpio-501 (PFF.01              )
 gpio-502 (PGG.00              )
 gpio-503 (PGG.01              )

gpiochip0: GPIOs 504-511, parent: i2c/4-003c, max77620-gpio, can sleep:
 gpio-510 (                    |gpio_default        ) in  hi
 gpio-511 (                    |gpio_default        ) in  hi
```

## 技術サポート

問題が発生した場合は、ぜひ私たちの[フォーラム](https://forum.seeedstudio.com/)に投稿してください。

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>