---
description: J401 キャリアボードのハードウェアおよびインターフェースの使用方法
title: インターフェースの使用方法
tags:
  - J401 キャリアボード
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /J401_carrierboard_Hardware_Interfaces_Usage
last_update:
  date: 04/29/2024
  author: Jiahao
createdAt: '2024-05-13'
updatedAt: '2026-04-28'
url: https://wiki.seeedstudio.com/ja/J401_carrierboard_Hardware_Interfaces_Usage/
---
## はじめに

**[reComputer J401 carrier board](https://www.seeedstudio.com/reComputer-J401-Carrier-Board-for-Jetson-Orin-NX-Orin-Nano-p-5636.html)** は **NVIDIA Jetson Orin Nano/NX（[Orin Nano 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html?___store=retailer)/[Orin Nano 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html)**、**[Orin NX 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)/[Orin NX 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html))** をサポートし、卓越した性能を発揮して、エッジコンピューティングの困難なタスクにも容易に対応できるよう設計されています。産業オートメーションシステムの開発や強力な AI アプリケーションの構築などに最適な選択肢です。

本ボードはネットワーク機能として、高速なネットワーキングを実現する 1x **ギガビット Ethernet ポート** を備えています。また、4x **USB 3.2 Type-A（10Gbps）ポート**、1x **USB 2.0 Type-C ポート**、1x **CAN コネクタ** を搭載し、多様な接続オプションを提供します。この拡張ボードには SSD カード用に 1x **M.2 Key M 2280**（128GB NVMe 2280 SSD 付属）と、LTE ワイヤレス接続拡張用の 1x **M.2 Key E** スロットが実装されています。

さらに、ボード上では複数の周辺機器がサポートされています。2x **15 ピン MIPI-CSI** と 1x **HDMI 2.1** コネクタにより、高品質なビデオコンテンツのキャプチャおよび表示が可能で、カメラやディスプレイを接続できます。また、**5V PWM ファンヘッダ**、1 つの **RTC ソケット**、および **2 ピン RTC ヘッダ** も備えています。

ボードは **9〜19V DC** の広い入力範囲をサポートしており、さまざまなコンピューティングタスクへ柔軟に組み込むことができます。動作温度範囲は -10°C から 60°C です。

<div align="center"><img width ="1000" src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTE1NA_356376_xs4inuEPMdjVeyj__1679475367?w=1200&h=1335"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J401-Carrier-Board-for-Jetson-Orin-NX-Orin-Nano-p-5636.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

アクセサリの推奨については、[reComputer J401 のバンドルページ](https://www.seeedstudio.com/reComputer-Classic-Optional-Accessories-NVIDIA-Jetson-Orin-Powered-Edge-AI-Box.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlY29tcHUiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjoxLCJjX3RvdGFsX3Jlc3VsdHMiOjg4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D) を参照してください。

## 260 ピン SODIMM

260 ピン SODIMM の主な機能は、キャリアボードを **[NVIDIA Jetson Orin Nano 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html?___store=retailer)/[NVIDIA Jetson Orin Nano 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html)**、**[NVIDIA Jetson Orin NX 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)/[NVIDIA Jetson Orin NX 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)** と接続することです。

### 接続概要

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Jetson-connect-J401.gif"/></div>

:::note
接続が正しければ、電源アダプタを接続したときに電源インジケータが点灯します。
:::

## M.2 Key M

M.2 Key M は、PCIe（Peripheral Component Interconnect Express）インターフェースを使用して高速データ転送をサポートする M.2 コネクタの物理的および電気的レイアウトに関する仕様です。M.2 Key M コネクタは、ソリッドステートドライブ（SSD）やその他の高性能拡張カードをマザーボードやその他のホストデバイスに接続するためによく使用されます。「Key M」という名称は、接続可能なデバイスの種類を決定する、M.2 コネクタの特定のピン構成とキー形状を指します。

### 対応 SSD は以下のとおりです

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-6265.html)

### 接続概要

付属の SSD を取り外して新しいものを取り付けたい場合は、以下の手順に従ってください。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-Install-new-ssd.gif"/></div>

### 使用方法

接続された SSD に対して簡単なベンチマークを行う方法を説明します。

- **ステップ 1：** 以下のコマンドを実行して書き込み速度を確認します。

```sh
sudo dd if=/dev/zero of=/home/nvidia/test bs=1M count=512 conv=fdatasync
```

- **ステップ 2：** 以下のコマンドを実行して読み取り速度を確認します。書き込み速度のコマンドを実行した後に実行するようにしてください。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/nvidia/test of=/dev/null bs=1M count=512
```

## M.2 Key E

M.2 Key E は、Wi-Fi や Bluetooth カードなどのワイヤレス通信モジュールをサポートする M.2 コネクタの物理的および電気的レイアウトに関する仕様です。「Key E」という名称は、ワイヤレスネットワークデバイス向けに最適化された、M.2 コネクタの特定のピン構成とキー形状を指します。M.2 Key E コネクタは、ワイヤレス接続オプションを必要とするマザーボードやその他のデバイスによく搭載されています。ここでは [Intel wifi/bluetooth](https://www.seeedstudio.com/RTL8822CE-Wireless-NIC-Kits-for-Nvidia-Jetson-Orin.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6Ijg4MjIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjozLCJjX3RvdGFsX3Jlc3VsdHMiOjQsImNfc2VhcmNoX3Jlc3VsdF90eXBlIjoiUHJvZHVjdCIsImNfc2VhcmNoX2ZpbHRlcnMiOiJzdG9yZUNvZGU6W3JldGFpbGVyXSJ9) モジュールを推奨します。

### 接続概要

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-connect-wifi-model.gif"/></div>

### 使用方法

wifi/bluetooth モジュールを取り付けると、右上隅に wifi/bluetooth のアイコンが表示されます。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-bluetooth-test.gif"/></div>

#### Wi-Fi テスト

```
ifconfig
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-test.png"/></div>

#### Bluetooth テスト

```
bluetoothctl
power on   #open bluetooth
agent on   #registe agent
scan on    #search other bluetooths
connect xx:xx:xx:xx #connect target bluetooth
paired-devices #show all paired devices
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-bluetooth-test.png"/></div>

## CSI カメラ

CSI は Camera Serial Interface の略です。これは、イメージセンサからホストプロセッサへビデオデータを転送するためのシリアル通信インターフェースを記述する仕様です。CSI は、モバイルデバイス、カメラ、組み込みシステムで一般的に使用され、画像およびビデオデータを処理・解析するために、高速かつ効率的な転送を可能にします。

### 対応カメラは以下のとおりです

- IMX219 カメラ

  - [Raspberry Pi Camera V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)

  <!-- - [IMX219-130 8MP Camera with 130° FOV](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html)
  - [IMX219-160 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160-Camera-160-FOV-Applicable-for-Jetson-Nano-p-4603.html)
  - [IMX219-200 8MP Camera with 200° FOV](https://www.seeedstudio.com/IMX219-200-Camera-200-FOV-Applicable-for-Jetson-Nano-p-4609.html) -->

  - [IMX219-77 8MP Camera with 77° FOV](https://www.seeedstudio.com/IMX219-77-Camera-77-FOV-Applicable-for-Jetson-Nano-p-4608.html)
  - [IMX219 M12/CS mount CMOS Camera Module](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)
  - [IMX219-83 8MP 3D Stereo Camera Module](https://www.seeedstudio.com/IMX219-83-Stereo-Camera-8MP-Binocular-Camera-Module-Depth-Vision-Applicable-for-Jetson-Nano-p-4610.html)
  - [IMX219-77IR 8MP IR Night Vision Camera with 77° FOV](https://www.seeedstudio.com/IMX219-77IR-Camera-77-FOV-Infrared-Applicable-for-Jetson-Nano-p-4607.html)
  - [IMX219-160IR 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160IR-Camera160-FOV-Infrared-Applicable-for-Jetson-Nano-p-4602.html)

- IMX477 カメラ

  - [Raspberry Pi High Quality Camera](https://www.seeedstudio.com/Raspberry-Pi-High-Quality-Cam-p-4463.html)
  - [Raspberry Pi HQ Camera - M12 mount](https://www.seeedstudio.com/Raspberry-Pi-HQ-Camera-M12-mount-p-5578.html)
  - [High Quality Camera for Raspberry Pi](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)

### 接続概要

ここでは 2 つの CSI カメラコネクタは **CAM0 と CAM1** としてマークされています。2 つのうち任意のコネクタに 1 台のカメラを接続することも、2 台のカメラを同時に両方のコネクタに接続することもできます。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/camera-connect-J401.gif"/></div>

### 使用方法

ターミナル（Ctrl+Alt+T）を開き、以下のようにコマンドを入力します：

```sh
sudo /opt/nvidia/jetson-io/jetson-io.py
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-cameral.gif" /></div>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="Method 1">

CAM0 ポートの場合

```sh
nvgstcapture-1.0 sensor-id=0 
```

CAM1 ポートの場合

```sh
nvgstcapture-1.0 sensor-id=1  
```

:::note
カメラのさらなる設定を変更したい場合は、**"nvgstcapture-1.0 --help"** と入力して、利用可能なすべての設定可能なオプションにアクセスできます。
:::
</TabItem>

<TabItem value="Method 2" label="Method 2">

CAM0 ポートの場合

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=0 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

CAM1 ポートの場合

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=1 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

:::note
カメラのさらなる設定を変更したい場合は、**width、height、framerate、format** などの引数を更新できます。
:::
</TabItem>
</Tabs>

## RTC

RTC は Real-Time Clock（リアルタイムクロック）の略です。これは、メインシステムクロックとは独立して現在の時刻と日付を追跡するクロックです。RTC は、デバイスの電源が切れているときでも正確な時刻を維持するために、コンピュータ、組み込みシステム、その他の電子機器で一般的に使用されます。多くの場合、小型のバッテリで駆動され、電源のオン/オフの間も継続して動作し、時刻と日付の情報を保持します。

### 接続概要

<Tabs>
<TabItem value="Method 1" label="Method 1">

下図のように、**3V CR1220 コイン電池** をボード上の RTC ソケットに接続します。電池の **プラス (+)** 側が上向きになっていることを確認してください。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-connect-coin-cell-back.gif"/></div>

</TabItem>

<TabItem value="Method 2" label="Method 2">

下図のように、**JST コネクタ付き 3V CR2302 コイン電池** をボード上の 2 ピン 1.25mm JST ソケットに接続します。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-connect-coin-cell.gif"/></div>

</TabItem>
</Tabs>

### 使い方

- **ステップ 1:** 上述のように RTC バッテリを接続します。

- **ステップ 2:** reComputer Industrial の電源を入れます。

- **ステップ 3:** Ubuntu デスクトップで右上のドロップダウンメニューをクリックし、`Settings > Date & Time` に移動して、Ethernet ケーブルでネットワークに接続し、**Automatic Date & Time** を選択して日付と時刻を自動取得します。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::note
Ethernet 経由でインターネットに接続していない場合は、ここで日付と時刻を手動で設定できます。
:::

- **ステップ 4:** ターミナルウィンドウを開き、以下のコマンドを実行してハードウェアクロックの時刻を確認します。

```sh
sudo hwclock
```

以下のような出力が表示されますが、これは正しい日付/時刻ではありません。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-RTC.png"/></div>

- **ステップ 5:** 以下のコマンドを入力して、ハードウェアクロックの時刻を現在のシステムクロックの時刻に変更します。

```sh
sudo hwclock --systohc
```

- **ステップ 6:** インターネットから時刻を取得しないように、接続されている Ethernet ケーブルをすべて取り外し、ボードを再起動します。

```sh
sudo reboot
```

- **ステップ 7:** ハードウェアクロックの時刻を確認し、デバイスの電源を切っても日付/時刻が同じままであることを確認します。

- **ステップ 8:** お好みのテキストエディタを使用して新しいシェルスクリプトを作成します。ここでは **vi** テキストエディタを使用します。

```sh
sudo vi /usr/bin/hwtosys.sh 
```

- **ステップ 9:** **i** を押して **挿入モード** に入り、次の内容をファイル内にコピー&ペーストします。

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

- **ステップ 12:** ファイル内に次の内容を追加します。

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

- **ステップ 14:** 作成したサービスをブート時に起動するよう有効化し、そのサービスを開始します。

```sh
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

- **ステップ 15:** スクリプトが systemd サービスとして稼働していることを確認します。

```sh
sudo systemctl status hwtosys.service
```

- **ステップ 16:** ボードを再起動すると、システムクロックがハードウェアクロックと同期していることがわかります。

## ファン制御

nvfancontrol はユーザ空間のファン速度制御デーモンです。これは、nvfancontrol 設定ファイル内の温度とファン速度のマッピングテーブルに基づいてファン速度を管理します。

nvfancontrol サービスには、Tmargin、キックスタート PWM、ファンプロファイル、ファン制御、ファンガバナなど、いくつかの基本要素があります。これらはすべて、ユーザーの好みに応じて設定ファイルを通じてプログラム可能です。本章では、以下のセクションでそれぞれについて説明します。

:::note
nvfancontrol.conf を変更したい場合は、事前に [こちら](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control) を必ず読んでください
:::

### 使い方

<Tabs>
<TabItem value="Method 1" label="Method 1">

- **ステップ 1:** nvfancontrol の systemd サービスを停止します。

```
sudo systemctl stop nvfancontrol
```

- **ステップ 2:** nvfancontrol.conf を変更します。

```
vi /etc/nvfancontrol.conf 
```

:::note
nvfancontrol.conf を変更した後、終了するには `Ese` と `:q` を入力します
:::

- **ステップ 3:** ステータスファイルを削除します。

```
sudo rm /var/lib/nvfancontrol/status
```

- **ステップ 4:** nvfancontrol の systemd サービスを再起動します。

```
sudo systemctl restart nvfancontrol
```

</TabItem>

<TabItem value="Method 2" label="Method 2">

- **ステップ 1:**  root モードに入ります。

```
sudo -i
```

- **ステップ 2:**  nvfancontrol の systemd サービスを停止します。

```
sudo systemctl stop nvfancontrol
```

- **ステップ 3:**  PWM 値を変更します。

```
echo 100 > /sys/devices/platform/pwm-fan/hwmon/hwmon3/pwm1
```

:::note
値が大きいほどファン速度は速くなります。PWM 値は 0 から 255 の間である必要があります。**hwmon3** はあなたのパスではない可能性があるため、自分のパスを確認してください
:::

- **ステップ 4:**  rpm を確認します。

```
cat /sys/class/hwmon/hwmon0/rpm
```

</TabItem>
</Tabs>

## GPIO

**40 ピンヘッダの詳細は以下のとおりです。**

<div class="table-center">
<table style={{textAlign: 'center'}}>
<thead>
<tr>
  <th>ヘッダーピン</th>
  <th>モジュールピン名</th>
  <th>モジュールピン</th>
  <th>SoC ピン名</th>
  <th>デフォルトの用途</th>
  <th>代替機能</th>
</tr>
</thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>メイン 3.3V 電源</td>
      <td>-</td>
    </tr>
    <tr>
      <td>2</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>メイン 5.0V 電源</td>
      <td>-</td>
    </tr>
    <tr>
      <td>3</td>
      <td>I2C1_SDA</td>
      <td>191</td>
      <td>DP_AUX_CH3_N</td>
      <td>I2C #1 データ</td>
      <td>-</td>
    </tr>
    <tr>
      <td>4</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>メイン 5.0V 電源</td>
      <td>-</td>
    </tr>
    <tr>
      <td>5</td>
      <td>I2C1_SCL</td>
      <td>189</td>
      <td>DP_AUX_CH3_P</td>
      <td>I2C #1 クロック</td>
      <td>-</td>
    </tr>
    <tr>
      <td>6</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>グラウンド</td>
      <td>-</td>
    </tr>
    <tr>
      <td>7</td>
      <td>GPIO09</td>
      <td>211</td>
      <td>AUD_MCLK</td>
      <td>GPIO</td>
      <td>オーディオマスタークロック</td>
    </tr>
    <tr>
      <td>8</td>
      <td>UART1_TXD</td>
      <td>203</td>
      <td>UART1_TX</td>
      <td>UART #1 送信</td>
      <td>GPIO</td>
    </tr>
    <tr>
      <td>9</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>グラウンド</td>
      <td>-</td>
    </tr>
    <tr>
      <td>10</td>
      <td>UART1_RXD</td>
      <td>205</td>
      <td>UART1_RX</td>
      <td>UART #1 受信</td>
      <td>GPIO</td>
    </tr>
    <tr>
      <td>11</td>
      <td>UART1_RTS*</td>
      <td>207</td>
      <td>UART1_RTS</td>
      <td>GPIO</td>
      <td>UART #2 送信要求</td>
    </tr>
    <tr>
      <td>12</td>
      <td>I2S0_SCLK</td>
      <td>199</td>
      <td>DAP5_SCLK</td>
      <td>GPIO</td>
      <td>オーディオ I2S #0 クロック</td>
    </tr>
    <tr>
      <td>13</td>
      <td>SPI1_SCK</td>
      <td>106</td>
      <td>SPI3_SCK</td>
      <td>GPIO</td>
      <td>SPI #1 シフトクロック</td>
    </tr>
    <tr>
      <td>14</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>グラウンド</td>
      <td>-</td>
    </tr>
    <tr>
      <td>15</td>
      <td>GPIO12</td>
      <td>218</td>
      <td>TOUCH_CLK</td>
      <td>GPIO</td>
      <td>-</td>
    </tr>
    <tr>
      <td>16</td>
      <td>SPI1_CSI1*</td>
      <td>112</td>
      <td>SPI3_CS1</td>
      <td>GPIO</td>
      <td>SPI #1 チップセレクト #1</td>
    </tr>
    <tr>
      <td>17</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>GPIO</td>
      <td>-</td>
    </tr>
    <tr>
      <td>18</td>
      <td>SPI1_CSI0*</td>
      <td>110</td>
      <td>SPI3_CS0</td>
      <td>GPIO</td>
      <td>SPI #0 チップセレクト #0</td>
    </tr>
    <tr>
      <td>19</td>
      <td>SPI0_MOSI</td>
      <td>89</td>
      <td>SPI1_MOSI</td>
      <td>GPIO</td>
      <td>SPI #0 Master Out/Slave In</td>
    </tr>
    <tr>
      <td>20</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>グラウンド</td>
      <td>-</td>
    </tr>
    <tr>
      <td>21</td>
      <td>SPI0_MISO</td>
      <td>93</td>
      <td>SPI1_MISO</td>
      <td>GPIO</td>
      <td>SPI #0 Master In/Slave Out</td>
    </tr>
    <tr>
      <td>22</td>
      <td>SPI1_MISO</td>
      <td>108</td>
      <td>SPI3_MISO</td>
      <td>GPIO</td>
      <td>SPI #1 Master In/Slave Out</td>
    </tr>
    <tr>
      <td>23</td>
      <td>SPI0_SCK</td>
      <td>91</td>
      <td>SPI1_SCK</td>
      <td>GPIO</td>
      <td>SPI #0 シフトクロック</td>
    </tr>
    <tr>
      <td>24</td>
      <td>SPI0_CS0*</td>
      <td>95</td>
      <td>SPI1_CS0</td>
      <td>GPIO</td>
      <td>SPI #0 チップセレクト #0</td>
    </tr>
    <tr>
      <td>25</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>グラウンド</td>
      <td>-</td>
    </tr>
    <tr>
      <td>26</td>
      <td>SPI0_CS1*</td>
      <td>97</td>
      <td>SPI1_CS1</td>
      <td>GPIO</td>
      <td>SPI #0 チップセレクト #1</td>
    </tr>
    <tr>
      <td>27</td>
      <td>I2C0_SDA</td>
      <td>187</td>
      <td>GEN2_I2C_SDA</td>
      <td>I2C #0 データ</td>
      <td>GPIO</td>
    </tr>
    <tr>
      <td>28</td>
      <td>I2C0_SCL</td>
      <td>185</td>
      <td>GEN2_I2C_SCL</td>
      <td>I2C #0 クロック</td>
      <td>GPIO</td>
    </tr>
    <tr>
      <td>29</td>
      <td>GPIO01</td>
      <td>118</td>
      <td>SOC_GPIO41</td>
      <td>GPIO</td>
      <td>汎用クロック #0</td>
    </tr>
    <tr>
      <td>30</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>グラウンド</td>
      <td>-</td>
    </tr>
    <tr>
      <td>31</td>
      <td>GPIO11</td>
      <td>216</td>
      <td>SOC_GPIO42</td>
      <td>GPIO</td>
      <td>汎用クロック #1</td>
    </tr>
    <tr>
      <td>32</td>
      <td>GPIO07</td>
      <td>206</td>
      <td>SOC_GPIO44</td>
      <td>GPIO</td>
      <td>PWM</td>
    </tr>
    <tr>
      <td>33</td>
      <td>GPIO13</td>
      <td>228</td>
      <td>SOC_GPIO54</td>
      <td>GPIO</td>
      <td>PWM</td>
    </tr>
    <tr>
      <td>34</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>グラウンド</td>
      <td>-</td>
    </tr>
    <tr>
      <td>35</td>
      <td>I2S0_FS</td>
      <td>197</td>
      <td>DAP5_FS</td>
      <td>GPIO</td>
      <td>オーディオ I2S #0 フレームセレクト</td>
    </tr>
    <tr>
      <td>36</td>
      <td>UART1_CTS*</td>
      <td>209</td>
      <td>UART1_CTS</td>
      <td>GPIO</td>
      <td>UART #1 送信許可 (CTS)</td>
    </tr>
    <tr>
      <td>37</td>
      <td>SPI1_MOSI</td>
      <td>104</td>
      <td>SPI3_MOSI</td>
      <td>GPIO</td>
      <td>SPI #1 マスター出力/スレーブ入力</td>
    </tr>
    <tr>
      <td>38</td>
      <td>I2S0_DIN</td>
      <td>195</td>
      <td>DAP5_DIN</td>
      <td>GPIO</td>
      <td>オーディオ I2S #0 データ入力</td>
    </tr>
    <tr>
      <td>39</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>グラウンド</td>
      <td>-</td>
    </tr>
    <tr>
      <td>40</td>
      <td>I2S0_DOUT</td>
      <td>193</td>
      <td>DAP5_DOUT</td>
      <td>GPIO</td>
      <td>オーディオ I2S #0 データ出力</td>
    </tr>
  </tbody>
</table>
</div>

### UART

UART は Universal Asynchronous Receiver/Transmitter（汎用非同期受信送信機）の略です。これは 2 つのデバイス間でシリアル通信を行うために使用される通信プロトコルです。UART 通信には 2 本のピンが関与し、1 本はデータ送信用（TX）、もう 1 本はデータ受信用（RX）です。非同期であるため、デバイス間で共有クロック信号なしにデータが送信されます。UART は、マイコン、センサ、さまざまな電子機器間の通信など、多くの用途で一般的に使用されています。

#### 接続概要

UART インターフェースは以下のピンを使用しますが、J401 上の別の UART インターフェースを使用することもできます。

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>ヘッダーピン</th>
      <th>モジュールピン名</th>
      <th>モジュールピン</th>
      <th>SoC ピン名</th>
      <th>デフォルトの用途</th>
      <th>代替機能</th>
    </tr>
  </thead>
  <tbody>
<tr>
      <td>6</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>グラウンド</td>
      <td>-</td>
    </tr>
    <tr>
      <td>8</td>
      <td>UART1_TXD</td>
      <td>203</td>
      <td>UART1_TX</td>
      <td>UART #1 送信</td>
      <td>GPIO</td>
    </tr>
    <tr>
      <td>10</td>
      <td>UART1_RXD</td>
      <td>205</td>
      <td>UART1_RX</td>
      <td>UART #1 受信</td>
      <td>GPIO</td>
    </tr>
  </tbody>
</table>
</div>
J401 を TTL の UART と以下のように接続します。

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>J401 ヘッダーピン</th>
      <th> 用途</th>
      <th>USB-TTL 変換</th>
      <th>用途</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>6</td>
      <td>グラウンド</td>
      <td>GND</td>
      <td>グラウンド</td>
    </tr>
    <tr>
      <td>8</td>
      <td>UART1_TXD</td>
      <td>U_RX</td>
      <td>UART_RX</td>
    </tr>
    <tr>
      <td>10</td>
      <td>UART1_RXD</td>
      <td>U_TX</td>
      <td>UART_TX</td>
    </tr>
  </tbody>
</table>
</div>

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-UART-connect.gif"/></div>

#### 使い方

- **Step 1:** Windows ノート PC に [PuTTy](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) をインストールし、以下のように PuTTy を設定します。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-windows-uart-set.png"/></div>

- **Step 2:** Jetson に PuTTy をインストールし、ターミナル（ALT+Ctrl+T）を開いて次のコマンドを入力します。

```
sudo apt install putty
```

- **Step 3:** Windows 上の PuTTy を使って Jetson に「hello linux」を送信し、Jetson 上の PuTTy を使って Windows に「hello windows」を送信します。

:::note
ボーレートが 115200 に設定されていることを確認してください。
:::

結果は次のようになります。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-uart-result.gif"/></div>

### I2C

I2C は Inter-Integrated Circuit（インター・インテグレーテッド・サーキット）の略です。これは、システム内の複数の集積回路間で通信を可能にする、広く使用されているシリアル通信プロトコルです。I2C は 2 本の双方向ラインを使用し、1 本はデータ用（SDA）、もう 1 本はクロック用（SCL）です。I2C バスに接続されたデバイスはマスタまたはスレーブとして動作でき、複数のデバイス同士が通信できます。I2C は、そのシンプルさ、柔軟性、センサ、メモリチップ、その他の周辺機器など、さまざまなデバイスを組み込みシステムや電子機器に接続できる点から広く利用されています。

#### 接続概要

I2C インターフェースは以下のピンを使用しますが、J401 上の他の I2C インターフェースを使用することもできます。

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>ヘッダーピン</th>
      <th>モジュールピン名</th>
      <th>モジュールピン</th>
      <th>SoC ピン名</th>
      <th>デフォルトの用途</th>
      <th>代替機能</th>
    </tr>
  </thead>
    <tr>
      <td>2</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>メイン 5.0V 電源</td>
      <td>-</td>
    </tr>
    <tr>
      <td>3</td>
      <td>I2C1_SDA</td>
      <td>191</td>
      <td>DP_AUX_CH3_N</td>
      <td>I2C #1 データ</td>
      <td>-</td>
    </tr>
    <tr>
      <td>5</td>
      <td>I2C1_SCL</td>
      <td>189</td>
      <td>DP_AUX_CH3_P</td>
      <td>I2C #1 クロック</td>
      <td>-</td>
    </tr>
    <tr>
      <td>6</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>グラウンド</td>
      <td>-</td>
    </tr>
    </table>
</div>

J401 を [Grove-3-Axis Digital Accelerometer](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-1-5g.html) と I2C で次のように接続します。

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>J401</th>
      <th>用途</th>
      <th>Grove-3-Axis Digital Accelerometer</th>
      <th>用途</th>
    </tr>
  </thead>
    <tr>
      <td>2</td>
      <td>5V 電源</td>
      <td>Vcc</td>
      <td>-</td>
    </tr>
    <tr>
      <td>3</td>
      <td>I2C1_SDA</td>
      <td>SDA</td>
      <td>I2C_SDA</td>
    </tr>
    <tr>
      <td>5</td>
      <td>I2C1_SCL</td>
      <td>SCL</td>
      <td>I2C_SCL</td>
    </tr>
        <tr>
      <td>6</td>
      <td>グラウンド</td>
      <td>GND</td>
      <td>グラウンド</td>
    </tr>
</table>
</div>

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-I2C-connect.gif"/></div>

#### テスト

ターミナル（ALT+Ctrl+T）を開き、次のコマンドを入力します。

```
i2cdetect -y -r 7
```

:::note
コマンド ```i2cdetect -y -r x``` の中のチャンネル番号は、ここで示しているものと異なる場合があります。
:::

結果は次のように表示されます。I2C を接続する前はチャンネル 7 上で I2C デバイスは検出されませんでしたが、接続後はアドレス 0x19 の I2C デバイスが検出されました。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-I2C-test.png"/></div>

:::info
ロジック制御用に汎用 IO ピンを使用したい場合は、[this wiki](/ja/reComputer_Jetson_GPIO) を参照してください。
:::


## CAN

reComputer J401 シリーズは CAN インターフェースを提供しており、CAN 信号は SOM から TTL/CMOS レベルで直接出力されます。これは標準的な差動信号ではないため、標準的な CAN バスに接続するには外部 CAN トランシーバが必要です。CAN FD フレーム形式をサポートしており、データ長の拡張とより高いデータレートが可能なため、産業オートメーション、ロボット工学、自動車プロトタイピングなど、信頼性が高くリアルタイム性が求められる通信を必要とする用途に適しています。


#### 接続概要

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/can.jpg"/></div>


#### 使い方

**Step 1.** can0 を設定して有効化します。

```bash
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 500000
sudo ip link set can0 up
```

**Step 2.** 通信テスト。信号を受信するためにターミナルを 1 つ開きます。
```bash
candump can0
```
**Step 3.** 別のターミナルを開き、信号を送信します。
```bash
cansend can0 123#abcdabcd
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/can.png"/></div>

#### CAN FD

**Step 1.** can0 を設定して有効化します。
```bash
# Install can-utils Tools 
sudo apt update && sudo apt install can-utils -y

# Enable CAN0 interface (FD mode, 5Mbps data segment rate) 
sudo ip link set can0 up type can bitrate 500000 dbitrate 2000000 fd on
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/can_fd1.png"/></div>

**ステップ 2.** 信号を送信するために別のターミナルを開きます。
```bash
cansend can0 123#1122334455667788
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/can_fd2.png"/></div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様それぞれの好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
