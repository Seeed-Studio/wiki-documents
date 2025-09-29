---
description: reComputer Industrial J20シリーズのハードウェアとインターフェース使用方法
title: reComputer Industrial J20 ハードウェアとインターフェース使用方法
tags:
  - reComputer Industrial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_Industrial_J20_Hardware_Interfaces_Usage
last_update:
  date: 05/16/2023
  author: Lakshantha
---

このwikiでは、reComputer Industrial J2012、J2011の様々なハードウェアとインターフェースについて紹介し、プロジェクトアイデアを拡張するための使用方法を説明します。

## reComputer Industrialの分解

まず最初に、すべてのインターフェースにアクセスするために外側のエンクロージャを分解することをお勧めします。reComputer Industrialを分解するために、以下のように背面にある4本のネジを外してください。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/98.png"/></div>

## CSIカメラ

reComputer Industrialには**2x 2レーン15ピンMIPI CSIカメラコネクタ**が搭載されており、以下のカメラがサポートされています

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

ここで2つのCSIカメラコネクタは**CAM0とCAM1**としてマークされています。2つのコネクタのうちどちらか一方にカメラを1台接続するか、両方のコネクタに同時に2台のカメラを接続することができます。

- **ステップ1:** CSIコネクタの黒いロックを優しく引き出します

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/5.png"/></div>

- **ステップ2:** 金色の端子が下向きになるようにして、15ピンリボンケーブルをコネクタに挿入します

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/6.png"/></div>

- **ステップ3:** 黒いロックを押し込んで、リボンケーブルを固定します

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/10.png"/></div>

### 使用方法

まず、使用する特定のカメラに適したドライバをロードするようにボードを設定する必要があります。このためJetPackシステムには、IMX219とIMX477カメラをサポートする内蔵ツールがあります。

- **ステップ1:** ターミナルを開いて以下を実行します

```sh
sudo /opt/nvidia/jetson-io/jetson-io.py
```

- **ステップ 2:** **Configure Jetson Nano CSI Connector** を選択します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/119.jpg"/></div>

- **ステップ 3:** **Configure for compatible hardware** を選択します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/120.jpg"/></div>

- **ステップ 4:** 使用したいカメラを選択します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/121.jpg"/></div>

- **ステップ 5:** **Save pin changes** を選択します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/122.jpg"/></div>

- **ステップ 6:** **Save and reboot to reconfigure pins** を選択します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/123.jpg"/></div>

- **ステップ 7:** キーボードの任意のキーを押すと、適用されたカメラ設定でデバイスが再起動します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/124.jpg"/></div>

CSI カメラは2つの異なる方法で使用できます。カメラコネクタに応じて以下のコマンドに従ってください

- Method 1:

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

- 方法 2:

CAM0ポート用

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=0 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

CAM1ポート用

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=1 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

:::note
カメラのさらなる設定を変更したい場合は、**width、height、framerate、format**などの引数を更新できます。
:::

## RTC

reComputer IndustrialはRTCバッテリーに接続する2つの異なる方法を備えています

### 接続概要

- 方法1：

以下に示すように、**3V CR1220コイン電池**をボード上のRTCソケットに接続します。電池の**プラス（+）**端子が上向きになっていることを確認してください

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/11.jpg"/></div>

- 方法2：

以下に示すように、**JSTコネクタ付き3V CR2302コイン電池**をボード上の2ピン1.25mm JSTソケットに接続します

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/12.jpg"/></div>

### 使用方法

- **ステップ1：** 上記のようにRTCバッテリーを接続します

- **ステップ2：** reComputer Industrialの電源を入れます

- **ステップ3：** Ubuntuデスクトップで、右上角のドロップダウンメニューをクリックし、`Settings > Date & Time`に移動し、イーサネットケーブル経由でネットワークに接続して**Automatic Date & Time**を選択し、日付/時刻を自動的に取得します

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

- **ステップ 11:** Create a systemd file

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

reComputer Industrialには、M.2 Key Mスロットに接続された128GB SSDが標準で含まれており、JetPackシステムがプリインストールされています。

### 接続概要

付属のSSDを取り外して新しいものを取り付けたい場合は、以下の手順に従ってください。ここでは、[128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)、[256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)、[512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)のSeeed SSDのみを推奨します。これらのSSDのみをテストしているためです。さらに、このインターフェースはPCIe Gen4.0 SSDをサポートしています。

- **ステップ 1:** プリインストールされたSSDのネジを取り外します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/15.png"/></div>

- **ステップ 2:** SSDコネクタから離すようにスライドさせてSSDを取り外します

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

reComputer Industrialには、4GおよびLoRaモジュールをサポートするmini PCIeコネクタが搭載されています。ただし、4GモジュールまたはLoRaモジュールのいずれか一方のみを同時に接続できます。

### 4Gモジュール接続概要

現在、このボードはEC25EUXGAおよびEC20CEHCLGモジュールをサポートしています。

- **ステップ1:** ボードが既に電源オンの場合は、電源をオフにします

- **ステップ2:** 付属のスタンドオフを取り外します。このスタンドオフは、M.2 Key Bインターフェースを使用する場合にのみ必要です

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/110.jpg"/></div>

- **ステップ3:** 4Gモジュールをmini PCIeスロットにスライドして挿入し、予め取り付けられているネジを使用して2つの穴にネジ止めし、4Gモジュールを固定します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/17.png"/></div>

- **ステップ4:** **MAIN**とラベル付けされたアンテナコネクタにアンテナを接続します。ここではIPEXコネクタを使用する必要があります

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/18.png"/></div>

- **ステップ5:** 4G対応のnano SIMカードをボード上のSIMカードスロットに挿入します。SIMカードの金色の面が下向きになるようにしてください。カードを奥まで押し込み、内部のスプリングに当たって跳ね返り、所定の位置にロックされるようにします。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/19.png"/></div>

:::note
SIMカードを取り外したい場合は、カードを押し込んで内部のスプリングに当て、SIMがスロットから出てくるようにします
:::

- **ステップ6:** **J8 (Control and UART) Header**の**SIM_MUX_SEL**と**GND**ピンの間にジャンパーを追加します

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/20.png"/></div>

- **ステップ6:** ボードの電源をオンにします

### 4Gモジュール使用方法 - テストダイヤル

EC25モジュールを使用する場合、モジュールは自動的に起動し、使用準備が整います。ただし、EC20モジュールを使用する場合は、動作させるためにモジュールをリセットする必要があります

- **ステップ1:** EC25モジュールを使用している場合は、このステップをスキップできます。ただし、EC20モジュールを使用している場合は、以下のコマンドを入力して、4Gモジュールのリセットを担当するGPIO298ピンにアクセスします

```sh
sudo su 
cd /sys/class/gpio
echo 298 > export 
cd gpio298
echo out > direction
echo 1 > value
```

EC25モジュールの場合、ボードが起動するとすぐにLED2が緑色に点灯します。EC20モジュールの場合、上記で説明したようにモジュールをリセットした後にLED2が緑色に点灯します

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/118.jpg"/></div>

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

入力した電話番号が通話を受信できる場合、モジュールは期待通りに動作しています

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

4Gモジュールとのシリアルターミナル接続が切断されます

- **ステップ 3:** **CTRL + A** を押してから **Q** を押して **minicom** を閉じます

- **ステップ 4:** **ifconfig** と入力すると、**usb0** インターフェースにIPアドレスが表示されます

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/93.png"/></div>

- **ステップ 5:** 以下のようにウェブサイトにpingを試して、インターネット接続があるかどうかを確認できます

```sh
ping -I usb0 www.bing.com -c 5
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/94.png"/></div>

#### EC20モジュール

EC20モジュールを使用している場合は、以下の手順に従ってください

- **ステップ1:** 前のセクション（4Gモジュール使用方法 - テストダイヤルセクション）でEC20モジュール用に説明されているように4Gモジュールをすでにリセットしている場合は、このステップをスキップできます。ただし、まだ実行していない場合は、今すぐ実行してください

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

- **ステップ 2:** LoRa モジュールを mini PCIe スロットにスライドして挿入し、事前に取り付けられているネジを使用して 2 つの穴にネジ止めし、4G モジュールを所定の位置に固定します

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

- **ステップ 8:** 使用しているLoRaモジュールに応じて**Frequency plan**を入力してください。ここではモジュールのUS915バージョンを使用しているため、**United Stated 902-928 MHz, FSB 2 (used by TTN)**を選択しました。その後、**Register gateway**をクリックしてください

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/85.jpg"/></div>

:::note
**Gateway ID**は自動的に入力されています。ただし、お好みに応じて変更することができます。**Gateway name**は必須ではありません。ただし、お好みに応じて入力することもできます
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

- **ステップ1:** ボードが既に電源オンの場合は電源を切ります

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

- **ステップ5:** ボードの電源を入れます

### 5Gモジュール使用方法 - テストダイヤル

SIM8202G-M2 5Gモジュールを使用する場合、モジュールは自動的に起動しません。そのため、まずいくつかのGPIOを切り替えて起動させる必要があります

- **ステップ1:** 以下を入力して5Gモジュールを起動します

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

上記を実行すると、LED2が以下のように緑色に点灯します

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/117.jpg"/></div>

- **ステップ 2:** minicomをインストールする

```sh
sudo apt update
sudo apt install minicom -y
```

- **ステップ 3:** 接続された5Gモジュールのシリアルコンソールに入り、ATコマンドを入力して5Gモジュールと対話できるようにします

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **ステップ 4:** コマンド **"AT"** を入力してエンターキーを押します。レスポンスが "OK" と表示されれば、5Gモジュールが正常に動作しています

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/107.png"/></div>

- **ステップ 6:** コマンド **"ATI"** を入力してモジュール情報を確認します

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/108.png"/></div>

- **ステップ 7:** モジュールをテストするには、以下のコマンドを入力して別の電話番号に発信します

```sh
ATD<phone_number>;
```

そして、以下の出力が表示されます

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/109.png"/></div>

### 5Gモジュール使用方法 - インターネット接続

近日公開予定

## DI/ DO

reComputer Industrialは4つのデジタル入力と4つのデジタル出力チャンネルをサポートしており、すべて光学的に絶縁されており、電圧スパイクやその他の電気的外乱からメインボードを効果的に保護します。この同じコネクタにはCANインターフェースもあり、これについてはこのwikiで後ほど説明します。

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
      <td>440</td>
      <td rowSpan={4}>12V/ 合計20mA電流</td>
      <td rowSpan={4}>12Vデジタル入力、グランド信号は<br />GND_DI（ピン2/4/6）に接続する必要があります</td>
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
      <td rowSpan={4}>ピンあたり40V/40mA負荷</td>
      <td rowSpan={4}>デジタル出力、最大耐電圧<br />40V、グランド信号は<br />GND_DO（ピン8/10）に接続する必要があります</td>
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
      <td rowSpan={2}>標準差動信号を持つCANバス、<br />グランド信号はGND_ISO（ピン12）に接続する必要があります</td>
    </tr>
    <tr>
      <td>CL</td>
    </tr>
    <tr>
      <td rowSpan={3}>グランド</td>
      <td>GND_DI</td>
      <td colSpan={5} rowSpan={3}>/</td>
      <td>12Vデジタル入力の基準グランド信号で、<br />DIのリターンパスでもあります</td>
    </tr>
    <tr>
      <td>GND_DO</td>
      <td>デジタル出力の基準グランド信号で、DOのリターンパスでもあります</td>
    </tr>
    <tr>
      <td>CG</td>
      <td>CANの基準グランド信号</td>
    </tr>
  </tbody>
</table>

### DI の接続概要

以下の図に従って DI の接続を行うことができます。DI ラインには直列に抵抗を追加することをお勧めします。ここでは DI1 ピンに接続された 4.7kΩ 抵抗でテストを行いました。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/38.png"/></div>

### DI の使用方法

入力として検出されるためには、DI ラインに 12V の電圧を入力する必要があります

- **ステップ 1:** 上記のように **DI1 ピン** に接続を行い、**12V** を入力します

- **ステップ 2:** 以下のように DI1 の GPIO を開きます

```sh
sudo su 
cd /sys/class/gpio
echo 440 > export 
cd PQ.05
```

:::note
**DI/ DO ピン割り当て表**を参照して、GPIO番号とBGA番号を確認できます。上記の例では、DI1ピンの場合、GPIO番号は440、BGA番号はPQ.05です
:::

- **ステップ 3:** 以下を実行してステータスを確認します

```sh
cat value
```

0を出力する場合は12V入力があることを意味します。1を出力する場合は入力電圧がないことを意味します。

### DOの接続概要

以下の図に従ってDOの接続を行うことができます。DO線には直列に抵抗を追加することをお勧めします。ここでは4.7kΩ抵抗でテストしています。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/39.png"/></div>

### DOの使用方法

上記の図で示されているように負荷を接続する必要があります。これをテストする最も簡単な方法は、マルチメーターがあればそれを接続するか、または最大40V未満の電圧を必要とする負荷を接続することです。

- **ステップ1:** 上記のように**DO1ピン**に接続を行い、**最大40V**を入力します

- **ステップ2:** 以下のようにD01のGPIOを開きます

```sh
sudo su 
cd /sys/class/gpio
echo 463 > export 
cd PT.06
echo out > direction
```

:::note
**DI/ DO ピン割り当て表**を参照して、GPIO番号とBGA番号を確認できます。上記の例では、DO1ピンの場合、GPIO番号は463、BGA番号はPT.06です
:::

- **ステップ 3:** 以下を実行してピンをオンにします

```sh
echo 1 > value
```

負荷がオンになっているか、マルチメーターが入力した電圧を出力している場合、テストは正常に機能しています。

## CAN

reComputer Industrialは、5MbpsでCAN FD（Controller Area Network Flexible Data-Rate）プロトコルをサポートするCANインターフェースを搭載しています。CANインターフェースは容量性絶縁を使用して絶縁されており、優れたEMI保護を提供し、産業用および自動化アプリケーションにおいて信頼性の高い通信を確保します。120Ωの終端抵抗がデフォルトでインストールされており、GPIOを使用してこの抵抗をONおよびOFFに切り替えることができます。

注意：CANインターフェースは絶縁電源を使用しているため、CANインターフェースに接続される外部デバイスのグランド信号はCGピンに接続する必要があります

### USB to CANアダプターとの接続概要

CANバスをテストし、インターフェースするには、以下に示すようにUSB to CANアダプターをボード上のCANコネクターに接続します

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/40.png"/></div>

ここでは、当社のBazaarで入手可能な[USB to CAN Analyzer Adapter with USB Cable](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)を使用しています。

### USB to CANアダプターでの使用方法

- **ステップ1：** 使用しているUSB to CANアダプターのドライバーをメーカーのWebサイトからダウンロードしてインストールします。今回の場合、使用したアダプターに応じて、ドライバーは[こちら](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver)で見つけることができます

- **ステップ2：** 一部のアダプターには、CANデバイスと通信するためのPC用の必要なソフトウェアも付属しています。今回の場合、使用したアダプターに応じて、[こちら](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)で見つけることができるソフトウェアをダウンロードしてインストールしました

- **ステップ3：** reComputer Industrial上でターミナルウィンドウを開き、以下のコマンドを実行してCANインターフェースを設定し、有効にします

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

以下のようにreTerminal DMで受信されることが確認できます

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

- **ステップ 8:** **ステップ 6とステップ 7**を繰り返しますが、デバイスを入れ替えます。reTerminal DMを使用してCANシグナルを送信し、reComputer IndustrialでCANシグナルを受信します

## RS232/ RS422/ RS485 インターフェース

reComputer IndustrialにはRS232、RS422、RS485通信プロトコルをサポートするDB9コネクタがあり、オンボードにDIPスイッチパネルがあり、異なるインターフェースオプション間で切り替えることができます

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
工場出荷時のデフォルトでは、スイッチのデフォルトモードは010でRS485に設定されます
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
      <td>SLEW= Vcc<br />このRS232/RS422/RS485マルチプロトコルトランシーバーは、通信レートを以下のように制限します：<br />RS-232: 最大データレートは1.5Mbps<br />RS-485/RS-422: 最大データレートは10Mbps<br />実際の最大データレートは使用されるJetson SOに依存します</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/63.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>SLEW = GND<br />RS-232: 最大データレートは250Kbps<br />RS-485/RS-422: 最大データレートは250kbps</td>
    </tr>
  </tbody>
</table>

ここでは、インターフェースをテストするためにUSBからRS232、RS485、RS422アダプターを使用します。そのため、先に進む前に、PCにシリアルターミナルアプリケーションをインストールする必要があります。ここでは、セットアップと使用が簡単な**Putty**をインストールすることをお勧めします。

- **ステップ1：** [このウェブサイト](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)にアクセスし、お使いのPCアーキテクチャに応じてPuttyをダウンロードしてください

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

- **ステップ3:** USB to RS232アダプターをDB9コネクターに接続します。ここでは上記で言及したアダプターを接続しました

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/68.jpg"/></div>

- **ステップ4:** もう一方の端をPCのUSBポートの1つに接続します

- **ステップ5:** ボードの電源を入れる

### RS232の使用方法

- **ステップ1:** 使用しているアダプターのドライバーをインストールする必要がある場合があります。または、Windowsが自動的にドライバーをインストールします。Windowsの検索で**デバイスマネージャー**と入力してデバイスマネージャーを開き、接続されたアダプターがCOMデバイスとして表示されているかどうかを確認します。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/67.jpg"/></div>

- **ステップ2:** アダプターが表示されない場合は、使用しているアダプターに応じてドライバーをインストールする必要があります。これらのドライバーは一般的にメーカーのウェブサイトで見つけることができます。私たちが使用しているアダプターについては、[このページ](https://www.ugreen.com/pages/download)にアクセスし、モデル番号として**20201**を検索し、それに応じてドライバーをダウンロードできます

- **ステップ3:** PCでPuttyを開き、**Terminal**セクションを選択して以下を設定します

- ローカルエコー: 強制オン
- ローカル行編集: 強制オン

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **ステップ4:** **Session**を選択し、**Connection type**で**Serial**を選択し、**デバイスマネージャー**で確認したシリアルポート番号を設定し、Speedはデフォルト（9600）のままにして**Open**をクリックします

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/71.jpg"/></div>

- **ステップ4:** reTerminal Industrialターミナルウィンドウで、以下を入力してreComputerからPCに信号を送信します

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS232 message from reComputer Industrial" > /dev/ttyTHS0
```

これで、Putty にこのメッセージが表示されます

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/72.jpg"/></div>

- **ステップ 5:** reTerminal Industrial のターミナルウィンドウで、以下を入力して PC からの信号の受信を待機します

```sh
sudo cat /dev/ttyTHS0
```

- **ステップ 6:** Puttyで何かを入力し、**ENTER**を押すと、reComputer Industrialのターミナルウィンドウに表示されます

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/73.png"/></div>

### RS422接続概要

ここでは、USB to RS422アダプターを使用してインターフェースをテストできます。テストには[DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K)を使用しました。

- **ステップ 1:** ボードの電源を切ります

- **ステップ 2:** ここでは、DIPスイッチを設定するために2つのオプションがあります。000モードまたは100モードのいずれかです。各モードのスイッチ位置を以下に示します

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/65.png"/></div>

- **ステップ 3:** 以下に示すように、ジャンパーワイヤーを使用してUSB to RS422アダプターをDB9コネクターに接続します。ここでは、上記で言及したアダプターを接続しました

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/74.png"/></div>

- **ステップ 4:** もう一方の端をPCのUSBポートの1つに接続します

- **ステップ 5:** ボードの電源を入れます

### RS422の使用方法

- **ステップ 1:** 使用しているアダプターのドライバーをインストールする必要がある場合があります。または、Windowsが自動的にドライバーをインストールします。Windowsの検索で**Device Manager**と入力してDevice Managerに移動し、接続されたアダプターがCOMデバイスとして表示されるかどうかを確認します。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **ステップ 2:** アダプターが表示されない場合は、使用しているアダプターに応じてドライバーをインストールする必要があります。これらのドライバーは通常、メーカーのWebサイトで見つけることができます。使用しているアダプターについては、[このページ](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)を参照してください

- **ステップ 3:** PCでPuttyを開き、**Terminal**セクションを選択して以下を設定します

- ローカルエコー: 強制オン
- ローカル行編集: 強制オン

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **ステップ 4:** **Session**を選択し、**Connection type**で**Serial**を選択し、**Device Manager**で確認したシリアルポート番号を設定し、Speedはデフォルト（9600）のままにして**Open**をクリックします

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **ステップ 4:** reTerminal Industrialのターミナルウィンドウで、以下を入力してreComputerからPCに信号を送信します

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS422 message from reComputer Industrial" > /dev/ttyTHS0
```

これで、このメッセージが Putty に表示されます。

- **ステップ 5:** reTerminal Industrial のターミナルウィンドウで、PC からの信号を受信するのを待つために次のコマンドを入力します

```sh
sudo cat /dev/ttyTHS0
```

- **ステップ 6:** Puttyで何かを入力し、**ENTER**を押すと、reComputer Industrialのターミナルウィンドウに表示されます

### RS485 接続概要

ここでは、USB to RS422アダプターを使用してインターフェースをテストできます。テストには[DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K)を使用しました。

- **ステップ 1:** ボードの電源を切ります

- **ステップ 2:** ここでは、DIPスイッチを設定する3つのオプションがあります。010モード、011モード、または110モードのいずれかです。各モードのスイッチ位置を以下に示します

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/66.png"/></div>

- **ステップ 3:** 以下に示すように、ジャンパーワイヤーを使用してUSB to RS422アダプターをDB9コネクターに接続します。ここでは、上記で言及したアダプターを接続しました

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/77.png"/></div>

- **ステップ 4:** もう一方の端をPCのUSBポートの1つに接続します

- **ステップ 5:** ボードの電源を入れます

### RS485 使用方法

- **ステップ 1:** 使用しているアダプター用のドライバーをインストールする必要がある場合があります。または、Windowsが自動的にドライバーをインストールします。Windowsの検索で**Device Manager**と入力してデバイスマネージャーを開き、接続されたアダプターがCOMデバイスとして表示されているかどうかを確認します。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **ステップ 2:** アダプターが表示されない場合は、使用しているアダプターに応じてドライバーをインストールする必要があります。これらのドライバーは通常、メーカーのウェブサイトで見つけることができます。使用しているアダプターについては、[このページ](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)を参照してください

- **ステップ 3:** PCでPuttyを開き、**Terminal**セクションを選択して以下を設定します

- ローカルエコー: 強制オン
- ローカル行編集: 強制オン

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **ステップ 4:** **Session**を選択し、**Connection type**で**Serial**を選択し、**Device Manager**で確認したシリアルポート番号を設定し、Speedはデフォルト（9600）のままにして**Open**をクリックします

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **ステップ 4:** reTerminal Industrialのターミナルウィンドウで、以下を入力してreComputerからPCに信号を送信します

```sh
sudo su 
cd /sys/class/gpio 
echo 447 > export 
cd PR.04
echo out > direction
echo 0 > value
echo "RS485 message from reComputer Industrial" > /dev/ttyTHS0
```

これで、このメッセージが Putty に表示されます。

- **ステップ 5:** reTerminal Industrial のターミナルウィンドウで、PC からの信号を待機するために次のコマンドを入力します

```sh
sudo su
cd /sys/class/gpio
echo 447 > export
cd PR.04
echo out > direction
echo 1 > value
cat /dev/ttyTHS0
```

- **ステップ 6:** Putty で何かを入力し、**ENTER** を押すと、reComputer Industrial のターミナルウィンドウに表示されます

## ギガビットイーサネットコネクタ

reComputer Industrial には 2 つのギガビットイーサネット（10/100/1000M）コネクタがあり、それぞれ異なる機能を持っています

- 左端のコネクタは Jetson モジュールに直接接続されており、**PSE 802.3 af, 15W** 仕様の PoE 機能を提供できます。これは、PoE IP カメラやその他の PoE デバイスをこのポートに接続して、接続されたデバイスに電力を供給できることを意味します。
- もう一方のコネクタは PCIe to Ethernet（LAN7430-I/Y9X）モジュール経由で接続されています

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/36.png"/></div>

各イーサネットポートには 2 つの LED（緑と黄色）があり、以下を示します

- 緑色 LED：1000M ネットワークに接続されている場合のみ点灯
- 黄色 LED：ネットワークアクティビティステータスを表示

## USB

reComputer Industrial には 3 つの USB3.2 コネクタがオンボードで搭載されており、以下の機能があります：

- デュアルスタック USB コネクタでは、上下の USB ポートが電流制限 IC を共有し、合計電源供給容量は最大出力電流 2.1A です（単体でも 2.1A 可能）。2.1A を超えると、過電流保護状態に入ります。
- デュアルスタック USB コネクタの隣にある単体 USB コネクタは、最大出力電流 2.1A の合計電源供給容量を持っています。2.1A を超えると、過電流保護状態に入ります。
- Orin NX モジュールには 3 つの USB3.2 が搭載されており、そのうち 1 つだけが reComputer で使用され、3 系統に変換されています（USB3.1 TYPE-A x2 - J4 および USB3.1 TYPE-A x1 -J3）。
- USB Host のみサポート、Device モードはサポートしません
- 5V 2.1A を提供
- ホットスワップ対応

### 使用方法

接続された USB フラッシュドライブで簡単なベンチマークを実行する方法を説明します

- **ステップ 1:** 以下のコマンドを実行して書き込み速度を確認します

```sh
sudo dd if=/dev/zero of=/dev/$1 bs=100M count=10 conv=fdatasync
```

- **ステップ2:** 以下のコマンドを実行して読み取り速度を確認します。書き込み速度の上記コマンドを実行した後に、必ずこれを実行してください。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/dev/$1 of=/dev/null bs=100M count=10
```

## 設定可能なLED

以下に示すように、ボード上に緑色のLEDが配置されています。デフォルトでは、デバイスが正常に動作していることを示すLEDとして機能しています。ただし、このLEDをシステムによってON/OFFするようにプログラムすることも可能です。

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/21.png"/></div>

### 使用方法

- **ステップ1:** ターミナルウィンドウで以下のコマンドを入力して、緑色のLEDにアクセスします

```sh
sudo -i
cd /sys/class/gpio
echo 318 > export 
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
echo 318 > unexport
```

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

現在、**jtop** アプリケーションが以下のように開きます

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/30.png"/></div>

- **ステップ 4:** ここで、アプリケーションの異なるページを循環して、すべての機能を探索できます！

## WiFi と Bluetooth

reComputer Industrial は、WiFi と Bluetooth を標準では搭載していません。しかし、PCB 上に予約されたセクションがあり、WiFi/ Bluetooth モジュールを基板にはんだ付けできます。ここでは、**BL-M8723DU1** モジュールをサポートするためのスペースを予約しています。

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

reComputer Industrial には、外部 TPM モジュールを接続するための TPM インターフェースが付属しています。ここでは、Infineon SLB9670 ベースの TPM2.0 モジュールでテストしました。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/114.jpg"/></div>

### 接続概要

以下に示すように、TPM モジュールを TPM コネクタに接続します

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/115.jpg"/></div>

### 使用方法

以下のコマンドを実行して、TPM モジュールが適切にロードされているかどうかを確認します

```sh
sudo dmesg | grep TPM
ls /dev/tpm* -l
```

出力は以下のようになります

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

reComputer IndustrialのGPIOテーブルにアクセスして、すべてのピンマッピングを把握することができます。

ターミナル内で以下を実行してアクセスしてください

```sh
sudo cat /sys/kernel/debug/gpio
```

そして、以下のような出力が表示されます

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

お気軽に私たちの[フォーラム](https://forum.seeedstudio.com/)に問題を投稿してください。

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
