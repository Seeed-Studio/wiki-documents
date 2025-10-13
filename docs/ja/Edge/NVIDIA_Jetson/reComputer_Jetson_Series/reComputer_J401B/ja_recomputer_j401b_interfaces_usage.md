---
description: このwikiは、reComputer J401Bキャリアボードのハードウェアインターフェースと機能に関する包括的なガイドを提供します。4Gモジュールのインストール、SSD/Wi-Fi拡張、カメラ接続、GPIOの使用、ファン制御などが含まれます。
title: J401Bインターフェースの使用方法
tags:
  - J401 carrier board
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/J401B/j401b_interfaces.webp
slug: /ja/recomputer_j401b_interfaces_usage
last_update:
  date: 4/27/2025
  author: Youjiang
---


## はじめに

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401B/j401b_interfaces.png"/>
</div>

このwikiでは、reComputer J401Bの様々なハードウェアとインターフェースについて紹介し、プロジェクトのアイデアを拡張するための使用方法を説明します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J401B-optional-accessories.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong></a>
</div>

## Mini-PCIe

reComputer J401Bには、4Gをサポートするmini PCIeコネクタが搭載されています。

### サポートされている4Gモジュール

- [LTE Cat 4 EC25-AFXGA](https://www.seeedstudio.com/LTE-Cat-4-EC25-AFXGA-mini-PCIe-p-5668.html)
- [LTE Cat 4 EC25-EUX](https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html)
- [LTE Cat 4 EC25-AUXGR](https://www.seeedstudio.com/LTE-Cat-4-EC25-AUXGR-mini-PCIe-p-5885.html)
- [LTE Cat 4 EC25-EFA](https://www.seeedstudio.com/LTE-Cat-4-EC25-EFA-mini-PCIe-p-5824.html)
- [LTE Cat 4 EC25-EMGA](https://www.seeedstudio.com/LTE-Cat-4-EC25-EMGA-mini-PCIe-p-5831.html)
- [LTE Cat 4 EC25-JFA](https://www.seeedstudio.com/LTE-Cat-4-EC25-JFA-mini-PCIe-p-5899.html)

### 接続の概要

- ステップ1. 4Gモジュールをインストールする
- ステップ2. アンテナを取り付ける
- ステップ3. SIMカードを挿入する

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/q5nV0RqvceU" title="Assembling 4g module for j401b" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### 使用方法

- ステップ1. モバイルブロードバンドを開き、4G SIMカードの仕様に従ってネットワーク接続を設定します。`設定` --> `ネットワーク` --> `モバイルブロードバンド`

- ステップ2. ブラウザを開いて、4Gネットワークが正常に機能しているかテストします。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/IJEvmHhrmbc" title="J401B 4G Network Usage" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 260ピン SODIMM

260ピン SODIMMの主な機能は、キャリアボードを**[NVIDIA Jetson Orin Nano 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html?___store=retailer)/[NVIDIA Jetson Orin Nano 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html)**、**[NVIDIA Jetson Orin NX 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)/[NVIDIA Jetson Orin NX 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)**と接続することです。

### 接続の概要

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Jetson-connect-J401.gif"/></div>

:::note
接続が正しい場合、電源アダプターを接続すると電源インジケーターが点灯します。
:::

## M.2 Key M

M.2 Key M は、PCIe（Peripheral Component Interconnect Express）インターフェースを使用した高速データ転送をサポートする M.2 コネクタの物理的および電気的レイアウトの仕様です。M.2 Key M コネクタは、ソリッドステートドライブ（SSD）やその他の高性能拡張カードをマザーボードまたはその他のホストデバイスに接続するために一般的に使用されます。「Key M」の指定は、M.2 コネクタの特定のピン構成とキーイングを指し、これによって接続できるデバイスの種類が決まります。

### サポートされている SSD は以下の通りです

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-6265.html)

### 接続概要

付属の SSD を取り外して新しいものをインストールしたい場合は、以下の手順に従ってください。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-Install-new-ssd.gif"/></div>

### 使用方法

接続された SSD で簡単なベンチマークを実行する方法を説明します。

- **ステップ 1:** 以下のコマンドを実行して書き込み速度を確認します。

```sh
sudo dd if=/dev/zero of=/home/nvidia/test bs=1M count=512 conv=fdatasync
```

- **ステップ 2:** 以下のコマンドを実行して読み取り速度を確認します。書き込み速度の上記コマンドを実行した後に、必ずこれを実行してください。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/nvidia/test of=/dev/null bs=1M count=512
```

## M.2 Key E

M.2 Key Eは、Wi-FiやBluetoothカードなどの無線通信モジュールをサポートするM.2コネクタの物理的および電気的レイアウトの仕様です。「Key E」の指定は、無線ネットワークデバイス用に最適化されたM.2コネクタの特定のピン構成とキーイングを指します。M.2 Key Eコネクタは、無線接続オプションを必要とするマザーボードやその他のデバイスで一般的に見られます。ここでは[Intel wifi/bluetooth](https://www.seeedstudio.com/RTL8822CE-Wireless-NIC-Kits-for-Nvidia-Jetson-Orin.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6Ijg4MjIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjozLCJjX3RvdGFsX3Jlc3VsdHMiOjQsImNfc2VhcmNoX3Jlc3VsdF90eXBlIjoiUHJvZHVjdCIsImNfc2VhcmNoX2ZpbHRlcnMiOiJzdG9yZUNvZGU6W3JldGFpbGVyXSJ9)モジュールを推奨します。

### 接続概要

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-connect-wifi-model.gif"/></div>

### 使用方法

wifi/bluetoothモジュールをインストール後、右上角にwifi/bluetoothアイコンが表示されます。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-bluetooth-test.gif"/></div>

#### Wi-Fiテスト

```
ifconfig
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-test.png"/></div>

#### Bluetoothテスト

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

CSI は Camera Serial Interface の略です。これは、イメージセンサーからホストプロセッサーへビデオデータを転送するためのシリアル通信インターフェースを記述する仕様です。CSI は、モバイルデバイス、カメラ、組み込みシステムで一般的に使用され、処理と分析のための画像およびビデオデータの高速で効率的な転送を可能にします。

### サポートされているカメラは以下の通りです

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
  - [Raspberry Pi用高品質カメラ](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)

### 接続概要

ここで、2つの CSI カメラコネクタは **CAM0 と CAM1** としてマークされています。2つのコネクタのうちどちらか一方にカメラを1台接続するか、または両方のコネクタに同時に2台のカメラを接続することができます。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/camera-connect-J401.gif"/></div>

### 使用方法

ターミナルを開き（Ctrl+Alt+T）、以下のようなコマンドを入力してください：

```sh
sudo /opt/nvidia/jetson-io/jetson-io.py
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-cameral.gif" /></div>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="方法 1">

CAM0ポート用

```sh
nvgstcapture-1.0 sensor-id=0 
```

CAM1ポート用

```sh
nvgstcapture-1.0 sensor-id=1  
```

:::note
カメラのさらなる設定を変更したい場合は、**"nvgstcapture-1.0 --help"** と入力することで、利用可能なすべての設定可能オプションにアクセスできます。
:::
</TabItem>

<TabItem value="Method 2" label="Method 2">

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
</TabItem>
</Tabs>

## RTC

RTCはReal-Time Clockの略です。これは、メインシステムクロックとは独立して現在の時刻と日付を追跡するクロックです。RTCは、コンピュータ、組み込みシステム、その他の電子機器で一般的に使用され、デバイスの電源がオフになっていても正確な時刻を維持します。電源サイクル中も継続的に動作し、時刻と日付の情報を保持するために、小さなバッテリーで電源供給されることがよくあります。

### 接続概要

<Tabs>
<TabItem value="Method 1" label="Method 1">

以下に示すように、**3V CR1220コイン電池**をボード上のRTCソケットに接続します。電池の**プラス（+）**端が上向きになるようにしてください。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-connect-coin-cell-back.gif"/></div>

</TabItem>

<TabItem value="Method 2" label="Method 2">

以下に示すように、**JSTコネクタ付き3V CR2302コイン電池**をボード上の2ピン1.25mm JSTソケットに接続します：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-connect-coin-cell.gif"/></div>

</TabItem>
</Tabs>

### 使用方法

- **ステップ1：** 上記のようにRTCバッテリーを接続します。

- **ステップ2：** reComputer Industrialの電源を入れます。

- **ステップ3：** Ubuntuデスクトップで、右上角のドロップダウンメニューをクリックし、`Settings > Date & Time`に移動し、イーサネットケーブルでネットワークに接続して**Automatic Date & Time**を選択し、日付/時刻を自動的に取得します。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::note
イーサネット経由でインターネットに接続していない場合は、ここで手動で日付/時刻を設定できます。
:::

- **ステップ4：** ターミナルウィンドウを開き、以下のコマンドを実行してハードウェアクロック時刻を確認します。

```sh
sudo hwclock
```

以下のような出力が表示されますが、これは正しい日付/時刻ではありません。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-RTC.png"/></div>

- **ステップ 5:** 以下のコマンドを入力して、ハードウェアクロック時刻を現在のシステムクロック時刻に変更します。

```sh
sudo hwclock --systohc
```

- **ステップ 6:** インターネットから時刻を取得しないようにするため、接続されているイーサネットケーブルをすべて取り外し、ボードを再起動します。

```sh
sudo reboot
```

- **ステップ 7:** ハードウェアクロック時刻を確認して、デバイスの電源がオフになっても日付/時刻が同じままであることを確認します。

- **ステップ 8:** お好みのテキストエディタを使用して新しいシェルスクリプトを作成します。ここでは **vi** テキストエディタを使用します。

```sh
sudo vi /usr/bin/hwtosys.sh 
```

- **ステップ 9:** **i** を押して**挿入モード**に入り、以下の内容をファイル内にコピー＆ペーストします。

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

- **ステップ 12:** ファイル内に以下を追加します。

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

- **ステップ 14:** 新しく作成したサービスを起動時に開始するように有効化し、サービスを開始します。

```sh
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

- **ステップ 15:** スクリプトがsystemdサービスとして起動し、実行されていることを確認する。

```sh
sudo systemctl status hwtosys.service
```

- **ステップ 16:** ボードを再起動すると、システムクロックがハードウェアクロックと同期されていることが確認できます。

## ファン制御

nvfancontrolは、ユーザースペースのファン速度制御デーモンです。これは、nvfancontrol設定ファイル内の温度対ファン速度マッピングテーブルに基づいてファン速度を管理します。

nvfancontrolサービスには、Tmargin、キックスタートPWM、ファンプロファイル、ファン制御、ファンガバナーなど、いくつかの基本要素があります。これらはすべて、ユーザーの好みに基づいて設定ファイルを介してプログラムできます。この章では、以下のセクションでそれぞれについて説明します。

:::note
nvfancontrol.confを変更したい場合は、必ず[こちら](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)を読んでください
:::

### 使用方法

<Tabs>
<TabItem value="Method 1" label="Method 1">

- **ステップ 1:** nvfancontrol systemdサービスを停止します。

```
sudo systemctl stop nvfancontrol
```

- **ステップ 2:** nvfancontrol.conf を変更します。

```
vi /etc/nvfancontrol.conf 
```

:::note
nvfancontrol.confを変更した後、`Esc`と`:q`を入力して終了してください
:::

- **ステップ3:** ステータスファイルを削除します。

```
sudo rm /var/lib/nvfancontrol/status
```

- **ステップ 4:** nvfancontrol systemd サービスを再起動します。

```
sudo systemctl restart nvfancontrol
```

</TabItem>

<TabItem value="Method 2" label="Method 2">

- **ステップ 1:** rootモードに入る。

```
sudo -i
```

- **ステップ 2:** nvfancontrol systemd サービスを停止します。

```
sudo systemctl stop nvfancontrol
```

- **ステップ 3:** PWM値を変更します。

```
echo 100 > /sys/devices/platform/pwm-fan/hwmon/hwmon3/pwm1
```

:::note
値が大きいほど、ファンの速度が速くなります。PWM値は0から255の間である必要があります。**hwmon3**があなたのパスワードではない可能性があるので、自分のパスワードを確認してください
:::

- **ステップ4:** rpmを確認します。

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
  <th>デフォルト用途</th>
  <th>代替機能</th>
</tr>
</thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>メイン3.3V電源</td>
      <td>-</td>
    </tr>
    <tr>
      <td>2</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>メイン5.0V電源</td>
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
      <td>メイン5.0V電源</td>
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
      <td>グランド</td>
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
      <td>グランド</td>
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
      <td>オーディオI2S #0 クロック</td>
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
      <td>グランド</td>
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
      <td>グランド</td>
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
      <td>グランド</td>
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
      <td>グランド</td>
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
      <td>グランド</td>
      <td>-</td>
    </tr>
    <tr>
      <td>35</td>
      <td>I2S0_FS</td>
      <td>197</td>
      <td>DAP5_FS</td>
      <td>GPIO</td>
      <td>オーディオI2S #0 フィールドセレクト</td>
    </tr>
    <tr>
      <td>36</td>
      <td>UART1_CTS*</td>
      <td>209</td>
      <td>UART1_CTS</td>
      <td>GPIO</td>
      <td>UART #1 送信許可</td>
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
      <td>オーディオI2S #0 データ入力</td>
    </tr>
    <tr>
      <td>39</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>グランド</td>
      <td>-</td>
    </tr>
    <tr>
      <td>40</td>
      <td>I2S0_DOUT</td>
      <td>193</td>
      <td>DAP5_DOUT</td>
      <td>GPIO</td>
      <td>オーディオI2S #0 データ出力</td>
    </tr>
  </tbody>
</table>
</div>

### UART

UARTは、Universal Asynchronous Receiver/Transmitterの略です。これは、2つのデバイス間でのシリアル通信に使用される通信プロトコルです。UART通信には2つのピンが関与します：データを送信するためのピン（TX）とデータを受信するためのピン（RX）です。これは非同期であり、デバイス間で共有クロック信号なしでデータが送信されることを意味します。UARTは、マイクロコントローラー、センサー、および異なる電子デバイス間の通信など、さまざまなアプリケーションで一般的に使用されています。

#### 接続概要

UARTインターフェースは以下のピンを使用しています。または、J401の別のUARTインターフェースを使用することもできます：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>ヘッダーピン</th>
      <th>モジュールピン名</th>
      <th>モジュールピン</th>
      <th>SoCピン名</th>
      <th>デフォルト用途</th>
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
      <th>J401 ヘッダーピン</th>
      <th>用途</th>
      <th>USB変換TTL</th>
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

#### 使用方法

- **ステップ 1:** Windows ラップトップに [PuTTy](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) をインストールし、以下のように PuTTy を設定します：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-windows-uart-set.png"/></div>

- **ステップ 2:** Jetson に PuTTy をインストールし、ターミナル（ALT+Ctrl+T）を開いて以下のコマンドを入力します。

```
sudo apt install putty
```

- **ステップ 3:** Windows上のPuTTyを使用してJetsonに'hello linux'を送信し、Jetson上のPuTTyを使用してWindowsに'hello windows'を送信します。

:::note
ボーレートが115200に設定されていることを確認してください。
:::

結果は以下の通りです：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-uart-result.gif"/></div>

### I2C

I2Cは Inter-Integrated Circuit の略です。これは、システム内の複数の集積回路間の通信を可能にする広く使用されているシリアル通信プロトコルです。I2Cは2つの双方向ライン（データ用のSDAとクロック用のSCL）を使用します。I2Cバスに接続されたデバイスは、マスターまたはスレーブとして動作でき、複数のデバイスが相互に通信することを可能にします。I2Cは、その簡潔性、柔軟性、および組み込みシステムや電子機器において、センサー、メモリチップ、その他の周辺機器などの様々なデバイスを接続する能力で人気があります。

#### 接続概要

I2Cインターフェースは以下のピンを使用しています。または、J401上の他のI2Cインターフェースを使用することもできます：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>ヘッダーピン</th>
      <th>モジュールピン名</th>
      <th>モジュールピン</th>
      <th>SoCピン名</th>
      <th>デフォルト用途</th>
      <th>代替機能</th>
    </tr>
  </thead>
    <tr>
      <td>2</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>メイン5.0V電源</td>
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

J401を[Grove-3軸デジタル加速度計](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-1-5g.html)にI2Cで以下のように接続します：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>J401</th>
      <th>用途</th>
      <th>Grove-3軸デジタル加速度計</th>
      <th>用途</th>
    </tr>
  </thead>
    <tr>
      <td>2</td>
      <td>5V電源</td>
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
      <td>グランド</td>
      <td>GND</td>
      <td>グランド</td>
    </tr>
</table>
</div>

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-I2C-connect.gif"/></div>

#### テスト

ターミナルを開き（ALT+Ctrl+T）、以下のコマンドを入力します：

```
i2cdetect -y -r 7
```

:::note
コマンド ```i2cdetect -y -r x``` では、あなたのチャンネルは私のものと異なる場合があります。
:::

以下のような結果が表示されます。I2Cに接続する前は、チャンネル7でI2Cデバイスが検出されませんでしたが、接続後はアドレス0x19のI2Cデバイスが検出されました。:

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-I2C-test.png"/></div>

:::info
一般的なIOピンをロジック制御に使用したい場合は、[このwiki](/ja/reComputer_Jetson_GPIO)を参照してください。
:::

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
