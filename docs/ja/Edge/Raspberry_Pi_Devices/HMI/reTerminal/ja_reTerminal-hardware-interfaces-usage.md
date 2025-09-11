---
description: ハードウェアとインターフェースの使用方法
title: ハードウェアとインターフェースの使用方法
keywords:
  - Edge
  - reTerminal 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-hardware-interfaces-usage
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# ハードウェアとインターフェースの使用方法

このWikiでは、reTerminalのさまざまなハードウェアとインターフェースについて紹介し、それらを使用してプロジェクトアイデアを拡張する方法を説明します。

**注意:** 一部のハードウェアとインターフェースについては、Raspberry Pi OSイメージ、[Buildrootイメージ](https://wiki.seeedstudio.com/ja/reTerminal-Buildroot-SDK)、および[Yoctoイメージ](https://wiki.seeedstudio.com/ja/reTerminal-Yocto)を使用する場合で使用方法が異なる場合があります。デフォルトの手順はRaspberry Pi OSイメージ用です。ただし、BuildrootイメージおよびYoctoイメージの手順が異なる場合は、明確に記載されています。

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/HW_overview.png" alt="pir" width="1000" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/hw-overview-internal-v1.3.jpg" alt="pir" width="1000" height="auto"/></p>

## Raspberry Pi互換40ピン

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/pinout-v2.jpg" alt="pir" width="1000" height="auto"/></p>

**40ピン**は、**26 GPIO、最大5 × I2C、最大5 × SPI、最大5 × UART、1 × PCM、1 × PWM、1 × SDIOインターフェース、1 × DPI（並列RGBディスプレイ）、最大3 × GPCLK出力、および1 USBインターフェース**で構成されています。

**USBインターフェース**は、Compute Module 4の内部**USB 2.0インターフェース**から拡張されています。このインターフェースを使用してさらに多くのUSBコネクタを拡張し、最大**480 Mbit/s**の速度を得ることができます。

また、これらの40ピンを使用して**Raspberry Pi互換のHAT**を接続し、プロジェクトを拡張することもできます！

[こちらを訪問](https://www.seeedstudio.com/hats-shields-c-840.html)してSeeed Studioが提供する幅広いRaspberry Pi HATを探索し、[こちらを訪問](https://uk.pi-supply.com/collections/all-raspberry-pi-hats-and-phats)してさらに多くのサードパーティ製Raspberry Pi HATを確認してください！

GPIOピンは最大**50mA**の電流を安全に引き出すことができます。これはすべてのピンに分配される50mAを意味します。そのため、個々のGPIOピンは安全に**16mA**の電流しか引き出すことができません。一方、残りの各ピンの最大電流引き出し量は**2A**です。これを念頭に置いて、これらのピンに追加のハードウェアを接続してください。

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/40-pin_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**ヒント:** 高解像度画像は[こちら](https://files.seeedstudio.com/wiki/ReTerminal/40-pin_sch.jpg)をクリックしてください

### 使用方法 - GPIO

- **ステップ 1.** ピンをGPIOとして設定

```sh
sudo -i   #rootアカウント権限を有効化
cd /sys/class/gpio
echo 23 > export #GPIO23はピン16
cd gpio23
```

- **ステップ 2.** GPIO入力/出力を設定

```sh
echo in > direction  #GPIOを入力として設定
echo out > direction  #GPIOを出力として設定
```

- **ステップ 3.** GPIOの高/低レベルを設定

```sh
echo 1 > value  #GPIOを高レベルに設定
echo 0 > value  #GPIOを低レベルに設定
```

- **ステップ 4.** GPIO入力/出力の状態を取得

```sh
cat direction
```

- **ステップ 5.** GPIOレベルの状態を取得

```sh
cat value
```

- **ステップ 6.** ピンをデフォルトに戻す

```sh
cd ..
echo 23 > unexport
```

#### Buildrootイメージでの使用方法

- **sudo -i**を**su -**に置き換えて**root**アカウント権限を有効化
- 他の手順は上記と同じように従ってください

#### Yoctoイメージでの使用方法

- **sudo -i**は必要ありません。すでに**root**としてログインしているためです
- 他の手順は上記と同じように従ってください

### 使用方法 - I2C

- **ステップ 1.** reTerminalをオンにし、Raspberry PiデスクトップUIのRaspberry Piアイコンをクリックして`Preferences > Raspberry Pi Configuration`に移動します

- **ステップ 2.** `Interfaces`タブをクリックし、**I2C**の横にある**Enabled**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/i2c-enable-1.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 3.** **OK**をクリックします

- **ステップ 4.** I2CデバイスをreTerminalに接続します

- **ステップ 5.** 利用可能なすべてのI2Cバスをリストします

```sh
i2cdetect -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/i2cdetect-l.png" alt="pir" width="750" height="auto"/></p>

- **ステップ 6.** I2Cバス1（i2c-1）の標準アドレスをスキャンします

```sh
i2cdetect -y 1
```

**注意:** 1はI2Cバス番号を表します

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-detect-2.png" alt="pir" width="600" height="auto"/></p>

上記の画像は、アドレス0x20、0x51、0x45、0x19、0x29、0x5cで検出されたI2Cデバイスを示しています

#### Buildrootイメージでの使用方法

- BuildrootイメージではI2Cをオンにする必要はありません。**I2Cはデフォルトで有効化されています**
- 他の手順は上記と同じように従ってください

#### Yoctoイメージでの使用方法

- I2Cはオンにしても有効化されていません。各起動後に**modprobe i2c-dev**を使用する必要があります。この問題が修正され次第、更新されます。

### 使用方法 - SPI

- **ステップ 1.** reTerminalをオンにし、Raspberry PiデスクトップUIのRaspberry Piアイコンをクリックして`Preferences > Raspberry Pi Configuration`に移動します

- **ステップ 2.** `Interfaces`タブをクリックし、**SPI**の横にある**Enabled**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/spi-enable-1.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 3.** SPIデバイスをreTerminalに接続します

- **ステップ 4.** 利用可能なすべてのSPIデバイスをリストします

```sh
ls /dev/spi*
```

以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/spi_list.png" alt="pir" width="450" height="auto"/></p>

- **ステップ 5.** ターミナルウィンドウを開き、以下を入力して**SPIテストツール**をダウンロードします

```sh
wget https://files.seeedstudio.com/wiki/102110497/spidev_test
```

- **ステップ 6.** ツールのユーザー権限を変更します

```sh
chmod +x spidev_test
```

- **ステップ 7.** ジャンパーワイヤーを使用して **GPIO 10 (ピン 19)** と **GPIO 9 (ピン 21)** をショート接続します

**注意:** ここでは **MOSI** と **MISO** ピンを短絡します

- **ステップ 8.** 以下の SPI テストツールを実行します

```sh
./spidev_test -D /dev/spidev0.0 -v -p hello
```

以下の出力が表示されれば、SPI は正常に動作しています

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SPI_test.jpg" alt="pir" width="1000" height="auto"/></p>

#### Buildroot/Yocto イメージでの使用方法

- SPI を有効にするには、**vi /boot/config.txt** コマンドで **config.txt** を開きます
- 最後に **dtparam=spi=on** を追加します（**i** を押して編集モードに入ります）
- **ESC** を押して編集モードを終了します
- **:wq** を入力してファイルを保存します
- 再起動します
- spidev_test ツールには実行時に問題があります。この問題は修正され次第更新されます。

## 拡張モジュール用の高速インターフェース

reTerminal の背面には高速拡張インターフェースがあります。このインターフェースは、1 PCIe 1レーン Host Gen 2（最大5Gbpsの速度をサポート）、1 USB 2.0、1 PoE、および26 GPIOで構成されています。26 GPIO ピンはさらに 2 I2C、2 SPI、1 UART として使用できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Expansion_Schematic.png" alt="pir" width="1000" height="auto"/></p>

**ヒント:** 高解像度画像は [こちら](https://files.seeedstudio.com/wiki/ReTerminal/Expansion_Schematic.png) をクリックしてください

:::note
PCIe、USB 3.0、2 x CAN-FD、および SDIO3.0 インターフェースは将来の製品向けに定義されており、現在は使用できません。
:::

私たちは将来的に reTerminal 用の拡張モジュールを構築する予定であり、これらのモジュールを reTerminal に接続するためにこのインターフェースを予約しています。以下のような幅広いモジュールをリリースする予定です：

- マイクアレイ & スピーカーモジュール
- カメラモジュール
- 産業用 I/O
- LoRaWAN モジュール
- 5G/4G モジュール
- PoE モジュール
- イーサネットスイッチ

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/external_modules.png" alt="pir" width="750" height="auto"/></p>

reTerminal の側面には 2 x M4 機械ネジ穴があり、拡張モジュールを固定するのに役立ちます。

## CSI カメラインターフェース

reTerminal には 2レーン MIPI CSI カメラインターフェースがあり、最大 2 台のカメラを reTerminal に接続できます。一方のインターフェースには **15 ピン**、もう一方のインターフェースには **22 ピン**があります。そのため、使用するインターフェースに対応する適切なフレックスケーブルを使用してください。このカメラインターフェースは、物体検出や機械学習アプリケーションに使用できます。

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/CSI_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**ヒント:** 高解像度画像は [こちら](https://files.seeedstudio.com/wiki/ReTerminal/CSI_sch.jpg) をクリックしてください

#### 使用方法

- **ステップ 1.** カメラを **15 ピン** または **22 ピン** の **FPC インターフェース** に接続します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FPC-label-1.jpg" alt="pir" width="800" height="auto"/></p>

- **ステップ 2.** reTerminal を起動し、Raspberry Pi デスクトップ UI の Raspberry Pi アイコンをクリックして `Preferences > Raspberry Pi Configuration` に移動します

- **ステップ 3.** `Interfaces` タブをクリックし、**Camera** の横にある **Enabled** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Cam-enable.jpg" alt="pir" width="1000" height="auto"/></p>

- **ステップ 4.** **Yes** をクリックして再起動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/cam-reboot.jpg" alt="pir" width="1000" height="auto"/></p>

- **ステップ 5.** ターミナルウィンドウを開き、以下を入力して静止画を撮影し、デスクトップに保存します

```sh
raspistill -o Desktop/image.jpg
```

**注意:** 保存場所はお好みに応じて変更できます

- **ステップ 6.** デスクトップに生成されたファイルをダブルクリックして画像を表示します

- **ステップ 7.** 以下を入力して動画を録画し、デスクトップに保存します

```sh
raspivid -o Desktop/video.h264
```

- **ステップ 8.** デスクトップに生成されたファイルをダブルクリックして録画した動画を再生します

カメラの使用方法についてさらに詳しく知りたい場合は、[公式 Raspberry Pi ドキュメント](https://projects.raspberrypi.org/en/projects/getting-started-with-picamera/3) を訪問してください

#### Buildroot/Yocto イメージでの使用方法

- CSI カメラインターフェースはまだテストされていません。テストが完了次第更新されます。

## 5インチLCD

reTerminalに内蔵されている5インチLCDは、内部のキャリアボード上の**30ピンDSIインターフェース**に接続されています。このLCDは**5点マルチタッチ**をサポートしており、この機能を有効にするために、LCDはキャリアボード上の別の**TPインターフェース**に接続されています。

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/LCD_sch.png" alt="pir" width="1000" height="auto"/></p>

**ヒント:** 高解像度画像は[こちら](https://files.seeedstudio.com/wiki/ReTerminal/LCD_sch.png)をクリックしてください。

## LCD用タッチパネル

### 使用方法

LCD用タッチパネルは**6ピンFPC**コネクタを介して接続されています。以下の手順でevtestツールを使用してテストできます。

- **ステップ1.** 入力デバイスイベントモニターおよびクエリツールである**evtest**をインストールするには、以下を入力します。

```sh
sudo apt install evtest
```

- **ステップ2.** evtestツールを開きます。

```sh
evtest
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/evtest-1.png" alt="pir" width="680" height="auto"/></p>

- **ステップ3.** **1**を入力すると、以下の出力が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/tp-1.png" alt="pir" width="720" height="auto"/></p>

- **ステップ4.** reTerminalのLCDをランダムにタッチすると、以下の出力が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/tp-2.png" alt="pir" width="850" height="auto"/></p>

#### Buildrootイメージでの使用

- **evtestツール**をインストールする必要はありません。すでにインストールされています。
- **evtest**を実行する前に、**su -**を入力してrootに切り替える必要があります。
- 上記の他の手順に従ってください。

#### Yoctoイメージでの使用

- **evtestツール**をインストールする必要はありません。すでにインストールされています。
- 上記の他の手順に従ってください。

### I2C経由でFPCコネクタに他のデバイスを接続

タッチパネルはI2C通信プロトコルを介してreTerminalに接続されています。そのため、希望に応じてこの6ピンFPCインターフェースに他のI2Cデバイスを簡単に接続できます。接続図は以下の通りです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FPC-I2C-connection.png" alt="pir" width="900" height="auto"/></p>

その後、I2Cの使用方法に関する前のトピックの手順に従ってください。

## 4つのユーザープログラム可能ボタン

reTerminalの前面には4つのユーザープログラム可能ボタンがあります。これらのボタンはソフトウェアを使用して簡単に制御でき、アプリケーションに応じてさまざまな機能のON/OFFを割り当てることができます！

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/keys_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**ヒント:** 高解像度画像は[こちら](https://files.seeedstudio.com/wiki/ReTerminal/keys_sch.jpg)をクリックしてください。

### 使用方法

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/key-label.jpg" alt="pir" width="500" height="auto"/></p>

- **ステップ1.** evtestツールを開きます。

```sh
evtest
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/evtest.png" alt="pir" width="680" height="auto"/></p>

- **ステップ2.** **0**を入力すると、以下の出力が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/button-test.jpg" alt="pir" width="680" height="auto"/></p>

- **ステップ3.** 左から右にボタンを押すと、以下のように表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/button-test-result.png" alt="pir" width="800" height="auto"/></p>

**注意:** ボタンはデフォルトで左から右に**a s d f**として設定されています。

- **ステップ4.** ボタンを設定したい場合は、以下を入力します。

```sh
sudo nano /boot/config.txt
```

- **ステップ5.** ファイルを編集し、以下を末尾に追加します。

```sh
dtoverlay=reTerminal,key0=0x100,key1=0x101,key2=0x102,key3=0x103,tp_rotate=1
```

**注意:** ここで、16進数の100, 101, 102, 103は、それぞれkey0, key1, key2, key3に割り当てられています。

#### Buildrootイメージでの使用

- **evtestツール**をインストールする必要はありません。すでにインストールされています。
- **evtest**を実行する前に、**su -**を入力してrootに切り替える必要があります。
- 上記の他の手順に従ってください。

#### Yoctoイメージでの使用

- **evtestツール**をインストールする必要はありません。すでにインストールされています。
- 上記の他の手順に従ってください。

## 3 つのユーザー設定可能な LED

reTerminal の前面には、2 つのユーザー設定可能な LED があります。これらの LED はソフトウェアを使用して ON/OFF を切り替えることができ、さまざまなハードウェア機能を監視するステータス LED として使用する場合に便利です。**USR** LED は **緑色** に点灯でき、**STA** LED は **赤色** または **緑色** に点灯できます。

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/LEDs_sch.jpg" alt="pir" width="700" height="auto"/></p>

**ヒント:** 高解像度画像は [こちら](https://files.seeedstudio.com/wiki/ReTerminal/LEDs_sch.jpg) をクリックしてください。

### 使用方法

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/led-label.jpg" alt="pir" width="550" height="auto"/></p>

- **ステップ 1.** root アカウント権限を有効にする

```sh
sudo -i
```

- **ステップ 2.** 以下のディレクトリに移動する

```sh
cd /sys/class/leds
```

- **ステップ 3.** **緑色の USR LED** を制御するために以下のディレクトリに移動する

```sh
cd usr_led0
```

- **ステップ 4.** 最大輝度で LED を点灯する

```sh
echo 255 > brightness
```

**注意:** 輝度レベルを調整するために 1 ～ 255 の値を入力できます。

- **ステップ 5.** LED を消灯する

```sh
echo 0 > brightness
```

- **ステップ 6.** **赤色の STA LED** を制御するために以下のディレクトリに移動する

```sh
cd ..
cd usr_led1
```

- **ステップ 7.** ステップ 4 ～ 5 を繰り返して LED を制御する

- **ステップ 8.** **緑色の STA LED** を制御するために以下のディレクトリに移動する

```sh
cd ..
cd usr_led2
```

- **ステップ 9.** ステップ 4 ～ 5 を繰り返して LED を制御する

#### Buildroot イメージでの使用方法

- **sudo -i** を **su -** に置き換えて **root** アカウント権限を有効にする
- 他の手順は上記と同様に従ってください

#### Yocto イメージでの使用方法

- **sudo -i** は不要です。すでに **root** としてログインしているためです。
- 他の手順は上記と同様に従ってください

## ギガビットイーサネットポート

reTerminal にはオンボードにギガビットイーサネットコネクタ (RJ45) が搭載されています。このポートは CM4 モジュールの **Gigabit Ethernet PHY** に接続されており、これは **Broadcom BCM54210PE** に基づいています。また、**IEEE 1588-2008 準拠**です。

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ethernet_sch.png" alt="pir" width="900" height="auto"/></p>

**ヒント:** 高解像度画像は [こちら](https://files.seeedstudio.com/wiki/ReTerminal/Ethernet_sch.png) をクリックしてください。

## 暗号化コプロセッサ

reTerminal には、セキュリティ機能として **Microchip ATECC608A 暗号化コプロセッサ** が搭載されており、安全なハードウェアベースのキー保存を提供します。また、最大 16 個のキー、証明書、またはデータの保護された保存を提供します。これにより、対称署名、検証、キー合意 – ECDSA のハードウェアサポートが提供されます。さらに、対称アルゴリズム、ネットワークキー管理、セキュアブートのハードウェアサポートも備えています。

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Encrypt_sch.jpg" alt="pir" width="800" height="auto"/></p>

**ヒント:** 高解像度画像は [こちら](https://files.seeedstudio.com/wiki/ReTerminal/Encrypt_sch.jpg) をクリックしてください。

### 使用方法

- **ステップ 1.** 利用可能なすべての I2C バスをリストする

```sh
i2cdetect -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/i2cdetect-l.png" alt="pir" width="750" height="auto"/></p>

- **ステップ 2.** I2C バス 3 (i2c-3) の標準アドレスをスキャンする

```sh
i2cdetect -y 3
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/i2cdetect-y3.png" alt="pir" width="530" height="auto"/></p>

**注意:** 3 は I2C バス番号を表します。

I2C アドレス **0x60** のデバイスが暗号化コプロセッサです。

#### Buildroot イメージでの使用方法

- 上記と同様に動作します。

#### Yocto イメージでの使用方法

- 電源を入れたときに I2C は有効になっていません。各起動後に **modprobe i2c-dev** を使用する必要があります。この問題が修正され次第、更新されます。

## RTC

reTerminalに内蔵されているRTCは、**NXP Semiconductors PCF8563T**をベースにしており、電源として**CR1220バッテリー**を使用しています。このRTCは低消費電流で、典型的にはVDD = 3.0 V、温度 = 25°Cの条件で0.25μAです。時間管理機能を実装する必要があるプロジェクトで使用できます。

**注意:** CR1220バッテリーは出荷時にすでに取り付けられています。

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/RTC_sch.jpg" alt="pir" width="800" height="auto"/></p>

**ヒント:** 高解像度画像は[こちら](https://files.seeedstudio.com/wiki/ReTerminal/RTC_sch.jpg)をクリックしてください。

### 使用方法

以下のコマンドを入力してRTCから日付と時刻情報を取得します。

```sh
sudo hwclock
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/hwclock.png" alt="pir" width="370" height="auto"/></p>

#### Buildrootイメージでの使用方法

- まず、**su -**を入力して**root**アカウントを有効にします。
- 次に**hwclock**を入力します。

#### Yoctoイメージでの使用方法

- **sudo**は不要です。すでに**root**としてログインしているためです。
- **hwclock**を入力するだけです。

## 光センサー

reTerminalには**Levelek LTR-303ALS-01**デジタル光センサーが搭載されており、**6ピンFPCインターフェース**に接続されています。このセンサーは環境の光レベルを検知するために使用でき、周囲の光レベルに応じて**LCDバックライトの自動輝度調整**にも使用できます。

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/light_sch.jpg" alt="pir" width="700" height="auto"/></p>

**ヒント:** 高解像度画像は[こちら](https://files.seeedstudio.com/wiki/ReTerminal/light_sch.jpg)をクリックしてください。

### 使用方法

- **ステップ1.** rootアカウントの権限を有効にします。

```sh
sudo -i
```

- **ステップ2.** 以下のディレクトリに移動します。

```sh
cd /sys/bus/iio/devices/iio:device0
```

- **ステップ3.** 以下を入力して光強度値を**Lux**単位で取得します。

```sh
cat in_illuminance_input 
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/light-lux.png" alt="pir" width="900" height="auto"/></p>

光センサーは**I2C通信プロトコル**を介してreTerminalに接続されています。そのため、必要に応じてこの**6ピンFPCインターフェース**に他のI2Cデバイスを簡単に接続できます。接続図は以下の通りです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/light-i2c.png" alt="pir" width="1000" height="auto"/></p>

その後、前のトピックで説明したI2Cの使用方法に従ってください。

#### Buildrootイメージでの使用方法

- **sudo -i**を**su -**に置き換えてrootアカウントの権限を有効にします。
- 他の手順は上記の通りに従ってください。

#### Yoctoイメージでの使用方法

- **sudo -i**は不要です。すでに**root**としてログインしているためです。
- 他の手順は上記の通りに従ってください。

## 加速度センサー

内蔵された**STMicroelectronics LIS3DHTR 3軸加速度センサー**を使用して、reTerminalでさまざまなアプリケーションを実現できます。このセンサーを使用して、reTerminalを回転させると画面の向きを自動的に変更するなどの機能を実現できます。

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/accel_sch.jpg" alt="pir" width="600" height="auto"/></p>

**ヒント:** 高解像度画像は[こちら](https://files.seeedstudio.com/wiki/ReTerminal/accel_sch.jpg)をクリックしてください。

### 使用方法

- **ステップ1.** evtestツールを開きます。

```sh
evtest
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/evtest.png" alt="pir" width="680" height="auto"/></p>

- **ステップ2.** **1**を入力すると、X、Y、Zの加速度値が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/accel-test.png" alt="pir" width="700" height="auto"/></p>

#### Buildrootイメージでの使用方法

- **evtestツール**をインストールする必要はありません。すでにインストールされています。
- **evtest**を実行する前に、**su -**を入力して**root**に切り替える必要があります。
- 他の手順は上記の通りに従ってください。

#### Yoctoイメージでの使用方法

- **evtestツール**をインストールする必要はありません。すでにインストールされています。
- 他の手順は上記の通りに従ってください。

## ブザー

reTerminal には内蔵ブザーが搭載されています。これはソフトウェアを使用して制御することができます。このブザーは、さまざまなアプリケーションでインジケーターとして使用できます。

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buzzer_sch.jpg" alt="pir" width="500" height="auto"/></p>

**ヒント:** 高解像度画像は [こちら](https://files.seeedstudio.com/wiki/ReTerminal/buzzer_sch.jpg) をクリックしてください。

### 使用方法

- **ステップ 1.** ルートアカウント権限を有効にする

```sh
sudo -i
```

- **ステップ 2.** 以下のディレクトリに移動する

```sh
cd /sys/class/leds/usr_buzzer
```

- **ステップ 3.** ブザーをオンにする

```sh
echo 1 > brightness
```

- **ステップ 4.** ブザーをオフにする

```sh
echo 0 > brightness
```

#### Buildroot イメージでの使用方法

- **sudo -i** を **su -** に置き換えて **root** アカウント権限を有効にします。
- 他の手順は上記と同じです。

#### Yocto イメージでの使用方法

- **sudo -i** は不要です。すでに **root** としてログインしているためです。
- 他の手順は上記と同じです。

## USB 2.0 ポート

Raspberry Pi CM4 にはすでに **USB 2.0 ハブがオンボード**で搭載されています。このハブは reTerminal 上で **USB HOST** として **2つのUSB 2.0ポート**に拡張されています。

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**ヒント:** 高解像度画像は [こちら](https://files.seeedstudio.com/wiki/ReTerminal/USB_sch.jpg) をクリックしてください。

### 使用方法

- **ステップ 1.** USBデバイスを reTerminal のUSB 2.0ポートの1つに接続する

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB-port.jpg" alt="pir" width="130" height="auto"/></p>

- **ステップ 2.** ターミナルウィンドウで以下を入力して接続されたUSBデバイスをリスト表示する

```sh
lsusb
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB-connected.png" alt="pir" width="850" height="auto"/></p>

- **ステップ 3.** 以下を入力して、接続されたUSBデバイスのドライブサイズ、パーティション、マウントポイントなどの詳細情報を取得する

```sh
lsblk
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB-mount.png" alt="pir" width="680" height="auto"/></p>

- **ステップ 4.** 接続されたUSBデバイスにアクセスし、内部のすべてのファイルをリスト表示する

```sh
cd /media/pi/NEW VOLUME
ls -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB-access.png" alt="pir" width="730" height="auto"/></p>

**注意:** マウントポイントはUSBデバイスごとに異なります。

## Micro - SDカードスロット

reTerminal には **micro-sdカードスロット** が装備されています。これは、**eMMCなしのCM4モジュール**を使用する際に、micro-SDカードに**オペレーティングシステムをインストール**する場合に便利です。最低でも8GB以上のカードを使用することを推奨します。[こちらのリンク](https://wiki.seeedstudio.com/ja/reTerminal/#flash-to-micro-sd-card-cm4-non-emmc-version) を参照して詳細を確認してください！

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/SD_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**ヒント:** 高解像度画像は [こちら](https://files.seeedstudio.com/wiki/ReTerminal/SD_sch.jpg) をクリックしてください。

## Micro HDMIポート

reTerminalにはマイクロHDMIポートがあり、**マイクロHDMIから標準HDMIケーブル**を使用してHDMIディスプレイに接続できます。最大4K解像度で60fpsをサポートしています。

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/HDMI_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**ヒント:** 高解像度画像は[こちら](https://files.seeedstudio.com/wiki/ReTerminal/HDMI_sch.jpg)をクリックしてください。

### 使用方法

- **ステップ1.** マイクロHDMIから標準HDMIケーブルを使用して、reTerminalのマイクロHDMIポートにHDMIディスプレイを接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/HDMI-port.jpg" alt="pir" width="250" height="auto"/></p>

- **ステップ2.** reTerminalを起動すると、reTerminalのLCDと接続されたHDMIディスプレイの両方にUIが表示されます。

**注意:** reTerminalが電源オンの状態でディスプレイを接続した場合、接続されたHDMIディスプレイにUIを表示するには、**sudo service lightdm restart**と入力する必要があります。

- **ステップ3.** ターミナルウィンドウで以下を入力して、**Screen Configuration**ユーティリティをインストールします。

```sh
sudo apt install arandr
```

- **ステップ4.** 左上のRaspberry Piアイコンをクリックし、`Preferences > Screen Configuration`に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/screen-config-setup.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ5.** **Screen Layout Editor**ウィンドウ内で、`Configure > Screens > HDMI-1 > Resolution`に移動し、接続されたHDMIディスプレイの解像度を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/screen-drag.png" alt="pir" width="1000" height="auto"/></p>

**注意:** **周波数**や**向き**も変更できます。

- **ステップ6.** 2つのボックスをドラッグしてディスプレイの配置を変更します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/screen-setting.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ7.** **チェックマーク**をクリックして設定を適用します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/screen-apply.png" alt="pir" width="1000" height="auto"/></p>

#### Buildroot/Yoctoイメージでの使用

- 現時点ではホットプラグは機能しません。修正され次第、更新されます。
- そのため、まずHDMIディスプレイに接続してからreTerminalを起動する必要があります。
- **arandr**パッケージはBuildrootシステムイメージでは利用できません。

## USB Type-Cポート

reTerminalの**USB Type-Cポート**は、**5V/4A（推奨）でreTerminalに電力を供給**するために使用できます。ただし、**USBデバイス**としても機能し、reTerminalを**ホストPC**に接続すると、reTerminalは**USBマスストレージデバイス**として動作します。この機能を使用して、PCを介してreTerminalの**オンボードeMMC**にアクセスし、eMMCに**オペレーティングシステム**をフラッシュすることができます。詳細は[こちら](https://wiki.seeedstudio.com/ja/reTerminal/#flash-to-emmc-cm4-emmc-version)をクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/type-c.png" alt="pir" width="130" height="auto"/></p>

## 標準カメラマウント (1/4インチ)

reTerminalには**直径1/4インチの標準カメラマウント**が搭載されています。そのため、reTerminalを**標準三脚**に接続することができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/tripod.png" alt="pir" width="450" height="auto"/></p>

## reTerminal用Pythonライブラリ

reTerminalのオンボードハードウェアを使用できるようにする**Pythonライブラリ**を準備しました。このPythonライブラリを使用すると、現在は**加速度センサー、ユーザーLED、ユーザーボタン、ブザー**にアクセスできます。

### インストール

reTerminal上でターミナルウィンドウを開き、以下を実行してください。

```sh
sudo pip3 install seeed-python-reterminal
```

**注意:** ソースコードは[こちら](https://github.com/Seeed-Studio/Seeed_Python_ReTerminal)で確認できます。

### 使用方法

- **ステップ1.** 新しい**Pythonファイル**を作成し、**nanoテキストエディタ**で開きます。

```sh
nano test.py
```

- **ステップ2.** Pythonコードを入力します。

- **ステップ3.** **CTRL + X**を押し、その後**Y**を押してファイルを保存します。

- **ステップ4.** 最後にファイルを実行します。

```sh
python3 test.py
```

上記の手順に従って、以下のハードウェア機能をテストできます。各セクションに含まれるPythonコードを直接test.pyファイルに入力し、ファイルを実行してください。

#### ユーザーLEDテスト

```python
import seeed_python_reterminal.core as rt
import time

print("STA ON, USR OFF")
rt.sta_led = True
rt.usr_led = False
time.sleep(1)

print("STA OFF, USR ON")
rt.sta_led = False
rt.usr_led = True
time.sleep(1)

print("STA RED, USR OFF")
rt.sta_led_green = False
rt.sta_led_red = True
rt.usr_led = False
time.sleep(1)

print("STA OFF, USR OFF")
rt.sta_led = False
rt.usr_led = False
```

#### ブザーテスト

```python
import seeed_python_reterminal.core as rt
import time

print("BUZZER ON")
rt.buzzer = True
time.sleep(1)

print("BUZZER OFF")
rt.buzzer = False
```

#### ユーザーボタンテスト

```python
import seeed_python_reterminal.core as rt
import seeed_python_reterminal.button as rt_btn


device = rt.get_button_device()
while True:
    for event in device.read_loop():
        buttonEvent = rt_btn.ButtonEvent(event)
        if buttonEvent.name != None:
            print(f"name={str(buttonEvent.name)} value={buttonEvent.value}")
```

#### 加速度センサーテスト

```python
import seeed_python_reterminal.core as rt
import seeed_python_reterminal.acceleration as rt_accel


device = rt.get_acceleration_device()
while True:
    for event in device.read_loop():
        accelEvent = rt_accel.AccelerationEvent(event)
        if accelEvent.name != None:
            print(f"name={str(accelEvent.name)} value={accelEvent.value}")
```

#### 加速度センサーとボタンテスト

```python
import asyncio
import seeed_python_reterminal.core as rt
import seeed_python_reterminal.acceleration as rt_accel
import seeed_python_reterminal.button as rt_btn


async def accel_coroutine(device):
    async for event in device.async_read_loop():
        accelEvent = rt_accel.AccelerationEvent(event)
        if accelEvent.name != None:
            print(f"accel name={str(accelEvent.name)} value={accelEvent.value}")


async def btn_coroutine(device):
    async for event in device.async_read_loop():
        buttonEvent = rt_btn.ButtonEvent(event)
        if buttonEvent.name != None:
            print(f"name={str(buttonEvent.name)} value={buttonEvent.value}")


accel_device = rt.get_acceleration_device()
btn_device = rt.get_button_device()

asyncio.ensure_future(accel_coroutine(accel_device))
asyncio.ensure_future(btn_coroutine(btn_device))

loop = asyncio.get_event_loop()
loop.run_forever()
```

#### Buildrootイメージでの使用

- このライブラリは後でBuildrootイメージに追加されます。
- まず**su -**と入力してrootアカウントを有効にします。
- 次に**pip3 install seeed-python-reterminal**と入力します。
- Pythonファイルを作成する際には**vi**をテキストエディタとして使用します。
- 加速度センサーとボタンのデモには問題があります。この問題は修正後に更新されます。

#### Yoctoイメージでの使用

- Pythonはインストールされていますが、pipはインストールされていません。このライブラリは後でこのシステムイメージにパッケージ化されます。

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