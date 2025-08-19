---
description: J401キャリアボードのハードウェアおよびインターフェースの使用方法
title: インターフェースの使用
tags:
  - J401キャリアボード
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/J401_carrierboard_Hardware_Interfaces_Usage
last_update:
  date: 05/15/2025
  author: Jiahao
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

**[reComputer J401キャリアボード](https://www.seeedstudio.com/reComputer-J401-Carrier-Board-for-Jetson-Orin-NX-Orin-Nano-p-5636.html)** は、**NVIDIA Jetson Orin Nano/NX（[Orin Nano 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html?___store=retailer)/[Orin Nano 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html)**、**[Orin NX 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)/[Orin NX 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html))** をサポートし、優れたパフォーマンスを提供します。このボードは、エッジコンピューティングの困難なタスクを容易に処理するよう設計されており、産業オートメーションシステムの開発や強力なAIアプリケーションの構築に最適な選択肢です。

このボードは、1つの**ギガビットイーサネットポート**を備えたネットワーキング機能を特徴としています。また、4つの**USB 3.2 Type-A（10Gbps）ポート**、1つの**USB 2.0 Type-Cポート**、および1つの**CANコネクタ**を備え、多様な接続オプションを提供します。この拡張ボードには、SSDカード用の1つの**M.2 Key M 2280**（128GB NVMe 2280 SSDが含まれています）と、LTEワイヤレス接続拡張用の1つの**M.2 Key E**スロットが搭載されています。

さらに、このボードは複数の周辺機器をサポートしています。2つの**15ピンMIPI-CSI**および1つの**HDMI 2.1**コネクタを使用して、高品質のビデオコンテンツをキャプチャおよび表示できます。また、**5V PWMファンヘッダー**、1つの**RTCソケット**、および**2ピンRTCヘッダー**も含まれています。

このボードは、**9-19V DC**の広い入力範囲をサポートしており、さまざまなコンピューティングタスクに柔軟に統合できます。動作温度範囲は-10°Cから60°Cです。

<div align="center"><img width ="1000" src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTE1NA_356376_xs4inuEPMdjVeyj__1679475367?w=1200&h=1335"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J401-Carrier-Board-for-Jetson-Orin-NX-Orin-Nano-p-5636.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
</a></div>

その他のアクセサリーの提案については、[reComputer J401のバンドルページ](https://www.seeedstudio.com/reComputer-Classic-Optional-Accessories-NVIDIA-Jetson-Orin-Powered-Edge-AI-Box.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlY29tcHUiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjoxLCJjX3RvdGFsX3Jlc3VsdHMiOjg4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D)をご参照ください。

## 260ピンSODIMM

260ピンSODIMMの主な機能は、キャリアボードを**[NVIDIA Jetson Orin Nano 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html?___store=retailer)/[NVIDIA Jetson Orin Nano 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html)**、**[NVIDIA Jetson Orin NX 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)/[NVIDIA Jetson Orin NX 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)** に接続することです。

### 接続概要

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Jetson-connect-J401.gif"/></div>

:::note
接続が正しい場合、電源アダプタを接続すると電源インジケータが点灯します。
:::

## M.2 Key M

M.2 Key Mは、PCIe（Peripheral Component Interconnect Express）インターフェースを使用して高速データ転送をサポートするM.2コネクタの物理的および電気的レイアウトに関する仕様です。M.2 Key Mコネクタは、主にソリッドステートドライブ（SSD）やその他の高性能拡張カードをマザーボードやその他のホストデバイスに接続するために使用されます。「Key M」という名称は、M.2コネクタの特定のピン構成とキーイングを指し、接続可能なデバイスの種類を決定します。

### 対応するSSDは以下の通りです：
- [128GB NVMe M.2 PCle Gen3x4 2280 内蔵SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 内蔵SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 内蔵SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 内蔵SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 内蔵SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-6265.html)

### 接続概要

付属のSSDを取り外して新しいSSDを取り付けたい場合は、以下の手順に従ってください。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-Install-new-ssd.gif"/></div>

### 使用方法

接続されたSSDで簡単なベンチマークを行う方法を説明します。

- **ステップ1:** 以下のコマンドを実行して書き込み速度を確認します。

```sh
sudo dd if=/dev/zero of=/home/nvidia/test bs=1M count=512 conv=fdatasync
```

- **ステップ2:** 以下のコマンドを実行して読み取り速度を確認します。このコマンドは、書き込み速度を確認するための上記のコマンドを実行した後に実行してください。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/nvidia/test of=/dev/null bs=1M count=512
```

## M.2 Key E

M.2 Key Eは、Wi-FiやBluetoothカードなどの無線通信モジュールをサポートするM.2コネクタの物理的および電気的レイアウトに関する仕様です。「Key E」という名称は、無線ネットワークデバイスに最適化されたM.2コネクタの特定のピン構成とキーイングを指します。M.2 Key Eコネクタは、無線接続オプションが必要なマザーボードやその他のデバイスで一般的に使用されます。ここでは、[Intel Wi-Fi/Bluetooth](https://www.seeedstudio.com/RTL8822CE-Wireless-NIC-Kits-for-Nvidia-Jetson-Orin.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6Ijg4MjIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjozLCJjX3RvdGFsX3Jlc3VsdHMiOjQsImNfc2VhcmNoX3Jlc3VsdF90eXBlIjoiUHJvZHVjdCIsImNfc2VhcmNoX2ZpbHRlcnMiOiJzdG9yZUNvZGU6W3JldGFpbGVyXSJ9)モジュールを推奨します。

### 接続概要

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-connect-wifi-model.gif"/></div>

### 使用方法

Wi-Fi/Bluetoothモジュールをインストールした後、右上隅にWi-Fi/Bluetoothアイコンが表示されます。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-bluetooth-test.gif"/></div>

#### Wi-Fiテスト

```
ifconfig
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-test.png"/></div>

#### Bluetoothテスト

```
bluetoothctl
power on   # Bluetoothをオンにする
agent on   # エージェントを登録する
scan on    # 他のBluetoothデバイスを検索する
connect xx:xx:xx:xx # 対象のBluetoothデバイスに接続する
paired-devices # ペアリング済みデバイスを表示する
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-bluetooth-test.png"/></div>

## CSIカメラ

CSIはCamera Serial Interface（カメラシリアルインターフェース）の略です。これは、イメージセンサーからホストプロセッサにビデオデータを転送するためのシリアル通信インターフェースを記述する仕様です。CSIは、モバイルデバイス、カメラ、組み込みシステムで一般的に使用されており、高速かつ効率的な画像およびビデオデータの転送を可能にし、処理や分析を行います。

### サポートされているカメラは以下の通りです：

- IMX219カメラ

  - [Raspberry Pi Camera V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)
  
  <!-- - [IMX219-130 8MP Camera with 130° FOV](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html)
  - [IMX219-160 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160-Camera-160-FOV-Applicable-for-Jetson-Nano-p-4603.html)
  - [IMX219-200 8MP Camera with 200° FOV](https://www.seeedstudio.com/IMX219-200-Camera-200-FOV-Applicable-for-Jetson-Nano-p-4609.html) -->
  
  - [IMX219-77 8MP Camera with 77° FOV](https://www.seeedstudio.com/IMX219-77-Camera-77-FOV-Applicable-for-Jetson-Nano-p-4608.html)
  - [IMX219 M12/CS mount CMOS Camera Module](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)
  - [IMX219-83 8MP 3D Stereo Camera Module](https://www.seeedstudio.com/IMX219-83-Stereo-Camera-8MP-Binocular-Camera-Module-Depth-Vision-Applicable-for-Jetson-Nano-p-4610.html)
  - [IMX219-77IR 8MP IR Night Vision Camera with 77° FOV](https://www.seeedstudio.com/IMX219-77IR-Camera-77-FOV-Infrared-Applicable-for-Jetson-Nano-p-4607.html)
  - [IMX219-160IR 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160IR-Camera160-FOV-Infrared-Applicable-for-Jetson-Nano-p-4602.html)

- IMX477カメラ

  - [Raspberry Pi High Quality Camera](https://www.seeedstudio.com/Raspberry-Pi-High-Quality-Cam-p-4463.html)
  - [Raspberry Pi HQ Camera - M12 mount](https://www.seeedstudio.com/Raspberry-Pi-HQ-Camera-M12-mount-p-5578.html)
  - [High Quality Camera for Raspberry Pi](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)

### 接続概要

2つのCSIカメラコネクタは**CAM0とCAM1**としてマークされています。2つのコネクタのいずれかに1台のカメラを接続するか、両方のコネクタに2台のカメラを同時に接続することができます。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/camera-connect-J401.gif"/></div>

### 使用方法
ターミナルを開き（Ctrl+Alt+T）、以下のようにコマンドを入力します：

```sh
sudo /opt/nvidia/jetson-io/jetson-io.py
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-cameral.gif" /></div>


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="Method 1">


CAM0ポートの場合

```sh
nvgstcapture-1.0 sensor-id=0 
```

CAM1ポートの場合

```sh
nvgstcapture-1.0 sensor-id=1  
```

:::note
カメラの設定をさらに変更したい場合は、**"nvgstcapture-1.0 --help"**と入力して、利用可能なすべての設定オプションにアクセスできます。
:::
</TabItem>

<TabItem value="Method 2" label="Method 2">

CAM0ポートの場合

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=0 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

CAM1ポートの場合

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=1 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

:::note
カメラの設定をさらに変更したい場合は、**width, height, framerate, format**などの引数を更新することができます。
:::
</TabItem>
</Tabs>

## RTC

RTCはReal-Time Clock（リアルタイムクロック）の略です。これは、メインシステムクロックとは独立して現在の時刻と日付を追跡する時計です。RTCは、コンピュータ、組み込みシステム、その他の電子機器で広く使用されており、デバイスの電源がオフになっている間でも正確な時刻を維持します。通常、小型のバッテリーで駆動され、電源サイクル中も時刻と日付の情報を保持します。

### 接続概要

<Tabs>
<TabItem value="Method 1" label="方法 1">

**3V CR1220 コイン型電池**を以下の図のようにボード上のRTCソケットに接続します。電池の**正極（+）**が上向きになるようにしてください。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-connect-coin-cell-back.gif"/></div>

</TabItem>

<TabItem value="Method 2" label="方法 2">

**JSTコネクタ付き3V CR2302コイン型電池**を以下の図のようにボード上の2ピン1.25mm JSTソケットに接続します。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-connect-coin-cell.gif"/></div>

</TabItem>
</Tabs>

### 使用方法

- **ステップ 1:** 上記の方法でRTCバッテリーを接続します。

- **ステップ 2:** reComputer Industrial の電源を入れます。

- **ステップ 3:** Ubuntuデスクトップで、右上のドロップダウンメニューをクリックし、`設定 > 日付と時刻`に移動します。Ethernetケーブルを使用してネットワークに接続し、**自動日付と時刻**を選択して日付/時刻を自動的に取得します。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::note
Ethernetを介してインターネットに接続していない場合は、ここで手動で日付/時刻を設定できます。
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

- **ステップ 6:** Ethernetケーブルを取り外し、インターネットから時刻を取得しないようにしてボードを再起動します。

```sh
sudo reboot
```

- **ステップ 7:** ハードウェアクロックの時刻を確認し、デバイスの電源がオフになっても日付/時刻が保持されていることを確認します。

- **ステップ 8:** 任意のテキストエディタを使用して新しいシェルスクリプトを作成します。ここでは**vi**テキストエディタを使用します。

```sh
sudo vi /usr/bin/hwtosys.sh 
```

- **ステップ 9:** **i**キーを押して**挿入モード**に入り、以下の内容をファイル内にコピー＆ペーストします。

```sh
#!/bin/bash

sudo hwclock --hctosys
```

- **ステップ 10:** スクリプトを実行可能にします。

```sh
sudo chmod +x /usr/bin/hwtosys.sh 
```

- **ステップ 11:** systemdファイルを作成します。

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

- **ステップ 13:** systemctlデーモンをリロードします。

```sh
sudo systemctl daemon-reload 
```

- **ステップ 14:** 新しく作成したサービスをブート時に開始するように有効化し、サービスを開始します。

```sh
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

- **ステップ 15:** スクリプトがsystemdサービスとして正常に動作していることを確認します。

```sh
sudo systemctl status hwtosys.service
```

- **ステップ 16:** ボードを再起動し、システムクロックがハードウェアクロックと同期していることを確認します。

## ファン制御

`nvfancontrol` はユーザースペースのファン速度制御デーモンです。これは、`nvfancontrol` の設定ファイル内の温度とファン速度のマッピングテーブルに基づいてファン速度を管理します。

`nvfancontrol` サービスには、Tmargin、キックスタートPWM、ファンプロファイル、ファン制御、ファンガバナーなどの基本要素があります。これらはすべて、ユーザーの好みに応じて設定ファイルを介してプログラム可能です。この章では、それぞれについて以下のセクションで説明します。

:::note
`nvfancontrol.conf` を変更したい場合は、[こちら](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)を必ずお読みください。
:::

### 使用方法

<Tabs>
<TabItem value="Method 1" label="方法 1">

- **ステップ 1:** `nvfancontrol` の systemd サービスを停止します。

```
sudo systemctl stop nvfancontrol
```

- **ステップ 2:** `nvfancontrol.conf` を変更します。

```
vi /etc/nvfancontrol.conf 
```
:::note
`nvfancontrol.conf` を変更した後、`Esc` を押して `:q` と入力して終了します。
:::

- **ステップ 3:** ステータスファイルを削除します。

```
sudo rm /var/lib/nvfancontrol/status
```

- **ステップ 4:** `nvfancontrol` の systemd サービスを再起動します。

```
sudo systemctl restart nvfancontrol
```
</TabItem>

<TabItem value="Method 2" label="方法 2">

- **ステップ 1:** ルートモードに入ります。

```
sudo -i
```

- **ステップ 2:** `nvfancontrol` の systemd サービスを停止します。

```
sudo systemctl stop nvfancontrol
```

- **ステップ 3:** PWM 値を変更します。

```
echo 100 > /sys/devices/platform/pwm-fan/hwmon/hwmon3/pwm1
```
:::note
値が大きいほどファン速度が速くなります。PWM 値は 0 から 255 の間で設定する必要があります。**hwmon3** があなたのパスでない可能性があるため、自分のパスを確認してください。
:::

- **ステップ 4:** RPM を確認します。

```
cat /sys/class/hwmon/hwmon0/rpm
```
</TabItem>
</Tabs>

## GPIO

**40ピンヘッダーの詳細は以下の通りです：**

<div class="table-center">
<table style={{textAlign: 'center'}}>
<thead>
<tr>
  <th>ヘッダーピン</th>
  <th>モジュールピン名</th>
  <th>モジュールピン</th>
  <th>SoCピン名</th>
  <th>デフォルト使用法</th>
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
      <td>SPI #0 マスター出力/スレーブ入力</td>
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
      <td>SPI #0 マスター入力/スレーブ出力</td>
    </tr>
    <tr>
      <td>22</td>
      <td>SPI1_MISO</td>
      <td>108</td>
      <td>SPI3_MISO</td>
      <td>GPIO</td>
      <td>SPI #1 マスター入力/スレーブ出力</td>
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
      <td>オーディオ I2S #0 フィールドセレクト</td>
    </tr>
    <tr>
      <td>36</td>
      <td>UART1_CTS*</td>
      <td>209</td>
      <td>UART1_CTS</td>
      <td>GPIO</td>
      <td>UART #1 送信クリア</td>
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

UARTはUniversal Asynchronous Receiver/Transmitter（汎用非同期受信送信機）の略です。これは、2つのデバイス間でシリアル通信を行うための通信プロトコルです。UART通信には、データを送信するためのピン（TX）とデータを受信するためのピン（RX）の2つが必要です。非同期通信であるため、デバイス間で共有されるクロック信号なしでデータが送信されます。UARTは、マイクロコントローラー、センサー、異なる電子デバイス間の通信など、さまざまな用途で広く使用されています。

#### 接続概要

UARTインターフェースは以下のピンを使用します。または、J401上の別のUARTインターフェースを使用することもできます：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>ヘッダーピン</th>
      <th>モジュールピン名</th>
      <th>モジュールピン</th>
      <th>SoCピン名</th>
      <th>デフォルト使用</th>
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
以下のようにJ401をTTLとUARTで接続します：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>J401ヘッダーピン</th>
      <th>使用</th>
      <th>USB TTL変換</th>
      <th>使用</th>
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

#### 使用方法

- **ステップ1:** [PuTTy](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) をWindowsのラップトップにインストールし、以下のようにPuTTyを設定します：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-windows-uart-set.png"/></div>

- **ステップ2:** JetsonにPuTTyをインストールし、ターミナル（ALT+Ctrl+T）を開いて以下のコマンドを入力します。

```
sudo apt install putty
```

- **ステップ3:** Windows上のPuTTyを使用してJetsonに「hello linux」を送信し、Jetson上のPuTTyを使用してWindowsに「hello windows」を送信します。

:::note
ボーレートが115200に設定されていることを確認してください。
:::

結果は以下のようになります：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-uart-result.gif"/></div>

### I2C

I2CはInter-Integrated Circuit（相互集積回路）の略です。これは、システム内の複数の集積回路間で通信を可能にする広く使用されているシリアル通信プロトコルです。I2Cは、データ用（SDA）とクロック用（SCL）の2つの双方向ラインを使用します。I2Cバスに接続されたデバイスは、マスターまたはスレーブとして動作でき、複数のデバイスが互いに通信することができます。I2Cは、そのシンプルさ、柔軟性、およびセンサー、メモリチップ、その他の周辺機器など、さまざまなデバイスを接続できる能力で人気があります。

#### 接続概要

I2Cインターフェースは以下のピンを使用します。または、J401上の別のI2Cインターフェースを使用することもできます：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>ヘッダーピン</th>
      <th>モジュールピン名</th>
      <th>モジュールピン</th>
      <th>SoCピン名</th>
      <th>デフォルト使用</th>
      <th>代替機能</th>
    </tr>
  </thead>
    <tr>
      <td>2</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>メイン5.0V供給</td>
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

以下のようにJ401を[Grove-3-Axis Digital Accelerometer](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-1-5g.html)とI2Cで接続します：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>J401</th>
      <th>使用</th>
      <th>Grove-3-Axis Digital Accelerometer</th>
      <th>使用</th>
    </tr>
  </thead>
    <tr>
      <td>2</td>
      <td>5V供給</td>
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

ターミナル（ALT+Ctrl+T）を開き、以下のコマンドを入力します：

```
i2cdetect -y -r 7
```

:::note
コマンド内のチャンネル番号```i2cdetect -y -r x```は、環境によって異なる場合があります。
:::

以下のような結果が表示されます。I2C接続前はチャンネル7にI2Cデバイスが検出されませんでしたが、接続後はアドレス0x19のI2Cデバイスが検出されました。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-I2C-test.png"/></div>

:::info
汎用IOピンをロジック制御に使用したい場合は、[このWiki](/ja/reComputer_Jetson_GPIO)を参照してください。
:::

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>