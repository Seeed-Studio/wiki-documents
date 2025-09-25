---
description: ハードウェアとインターフェースの使用方法
title: ハードウェアとインターフェースの使用方法
keywords:
  - Edge
  - reTerminal 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-hardware-interfaces-usage
last_update:
  date: 1/31/2023
  author: jianjing Huang
---


# ハードウェアとインターフェースの使用方法

このwikiでは、reTerminal上の様々なハードウェアとインターフェースについて、それらをプロジェクトのアイデア拡張にどのように使用するかを紹介します。

**注意:** 一部のハードウェアとインターフェースについては、Raspberry Pi OSイメージ、[Buildrootイメージ](https://wiki.seeedstudio.com/ja/reTerminal-Buildroot-SDK)、[Yoctoイメージ](https://wiki.seeedstudio.com/ja/reTerminal-Yocto)を実行する際の使用方法が異なります。デフォルトの手順はRaspberry Pi OSイメージ用です。ただし、BuildrootイメージとYoctoイメージの手順が異なる場合は、明確に記載されています。

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/HW_overview.png" alt="pir" width="1000" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/hw-overview-internal-v1.3.jpg" alt="pir" width="1000" height="auto"/></p>

## 40ピンRaspberry Pi互換ピン

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/pinout-v2.jpg" alt="pir" width="1000" height="auto"/></p>

**40ピン**は**26個のGPIO、最大5個のI2C、最大5個のSPI、最大5個のUART、1個のPCM、1個のPWM、1個のSDIOインターフェース、1個のDPI（パラレルRGBディスプレイ）、最大3個のGPCLK出力、1個のUSBインターフェース**で構成されています。

**USBインターフェース**は、Compute Module 4の内部**USB 2.0インターフェース**から拡張されています。そのため、このインターフェースを使用してさらに多くのUSBコネクタに拡張し、最大**480 Mbit/s**の速度を得ることができます。

これらの40ピンを使用して**Raspberry Pi互換Hat**に接続し、プロジェクトを拡張することもできます！

[こちら](https://www.seeedstudio.com/hats-shields-c-840.html)でSeeed Studioが提供する幅広いRaspberry Pi Hatを探索し、[こちら](https://uk.pi-supply.com/collections/all-raspberry-pi-hats-and-phats)でさらに多くのサードパーティRaspberry Pi Hatをチェックしてください！

GPIOピンは安全に最大**50mA**の電流を流すことができます。これは全ピンに分散された50mAを意味します。したがって、個々のGPIOピンは安全に**16mA**の電流しか流すことができません。一方、残りの各ピンの最大電流引き込み量は**2A**です。これらのピンに追加のハードウェアを接続する際は、この点を念頭に置いてください。

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/40-pin_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**ヒント:** 高解像度画像は[こちら](https://files.seeedstudio.com/wiki/ReTerminal/40-pin_sch.jpg)をクリックしてください

### 使用方法 - GPIO

- **ステップ 1.** ピンをGPIOとして設定

```sh
sudo -i   #enable root account privileges 
cd /sys/class/gpio
echo 23 > export #GPIO23 which is Pin 16
cd gpio23
```

- **ステップ 2.** GPIOの入力/出力を設定する

```sh
echo in > direction  #set GPIO as input
echo out > direction  #set GPIO as output
```

- **ステップ 3.** GPIOのハイ/ローレベルを設定する

```sh
echo 1 > value  #set GPIO to high
echo 0 > value  #set GPIO to low
```

- **ステップ 4.** GPIO入力/出力ステータスを取得する

```sh
cat direction
```

- **ステップ 5.** GPIO レベル状態を取得する

```sh
cat value
```

- **ステップ 6.** ピンをデフォルトに戻す

```sh
cd ..
echo 23 > unexport
```

#### Buildrootイメージでの使用方法

- **root**アカウント権限を有効にするために、**sudo -i**を**su -**に置き換えてください
- 上記で説明した他の手順に従ってください

#### Yoctoイメージでの使用方法

- すでに**root**としてログインしているため、**sudo -i**は必要ありません
- 上記で説明した他の手順に従ってください

### 使用方法 - I2C

- **ステップ1.** reTerminalの電源を入れ、Raspberry Pi DesktopのUIでRaspberry Piアイコンをクリックし、`Preferences > Raspberry Pi Configuration`に移動します

- **ステップ2.** `Interfaces`タブをクリックし、**I2C**の横にある**Enabled**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/i2c-enable-1.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ3.** **OK**をクリックします

- **ステップ4.** I2CデバイスをreTerminalに接続します

- **ステップ5.** 利用可能なすべてのI2Cバスをリストアップします

```sh
i2cdetect -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/i2cdetect-l.png" alt="pir" width="750" height="auto"/></p>

- **ステップ 6.** I2Cバス1（i2c-1）上の標準アドレスをスキャンします

```sh
i2cdetect -y 1
```

**注意** 1 は I2C バス番号を表します

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-detect-2.png" alt="pir" width="600" height="auto"/></p>

上記の画像は、アドレス 0x20、0x51、0x45、0x19、0x29、0x5c で検出された I2C デバイスを示しています

#### Buildroot イメージでの使用方法

- Buildroot イメージでは I2C を有効にする必要はありません。**I2C はデフォルトで有効**になっているためです
- 上記で説明した他の手順に従ってください

#### Yocto イメージでの使用方法

- I2C は有効にしても動作しません。各起動後に **modprobe i2c-dev** でのみ動作します。これは修正され次第更新される予定です。

### 使用方法 - SPI

- **ステップ 1.** reTerminal の電源を入れ、Raspberry Pi デスクトップ UI の Raspberry Pi アイコンをクリックして `設定 > Raspberry Pi の設定` に移動します

- **ステップ 2.** `インターフェース` タブをクリックし、**SPI** の横にある **有効** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/spi-enable-1.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 3.** SPI デバイスを reTerminal に接続します

- **ステップ 4.** 利用可能なすべての SPI デバイスをリストアップします

```sh
ls /dev/spi*
```

以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/spi_list.png" alt="pir" width="450" height="auto"/></p>

- **ステップ 5.** ターミナルウィンドウを開き、以下を入力して **SPI テストツール** をダウンロードします

```sh
wget https://files.seeedstudio.com/wiki/102110497/spidev_test
```

- **ステップ 6.** ツールのユーザー権限を変更する

```sh
chmod +x spidev_test
```

- **ステップ 7.** ジャンパーワイヤーを使用して **GPIO 10 (Pin 19)** と **GPIO 9 (Pin 21)** をショートする

**注意:** ここでは **MOSI と MISO ピン** をショートサーキットします

- **ステップ 8.** 以下の SPI テストツールを実行する

```sh
./spidev_test -D /dev/spidev0.0 -v -p hello
```

以下の出力が表示されれば、SPIが正常に動作しています

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SPI_test.jpg" alt="pir" width="1000" height="auto"/></p>

#### Buildroot/ Yoctoイメージでの使用方法

- SPIを有効にするには、**vi /boot/config.txt**コマンドで**config.txt**を開きます
- 最後に**dtparam=spi=on**を追加します（**i**を押して編集モードに入ります）
- **ESC**を押して編集モードを終了します
- **:wq**と入力してファイルを保存します
- 再起動します
- spidev_testツールの実行時に問題があります。これは修正され次第更新されます。

## 拡張モジュール用高速インターフェース

reTerminalの背面には高速拡張インターフェースがあります。これは1つのPCIe 1-lane Host Gen 2（最大5Gbpsの速度をサポート）、1つのUSB 2.0、1つのPoE、および26個のGPIOで構成されています。26個のGPIOピンは、さらに2つのI2C、2つのSPI、および1つのUARTとして使用できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Expansion_Schematic.png" alt="pir" width="1000" height="auto"/></p>

**ヒント：** より高解像度の画像については[こちら](https://files.seeedstudio.com/wiki/ReTerminal/Expansion_Schematic.png)をクリックしてください

:::note
PCIe、USB 3.0、2 x CAN-FD、およびSDIO3.0インターフェースは将来の製品用に定義されているため、現時点では使用できません
:::

将来的にreTerminal用の拡張モジュールを構築する予定で、これらのモジュールをreTerminalに接続するためにこのインターフェースを予約しています。以下のような幅広いモジュールをリリース予定です：

- マイクアレイ＆スピーカーモジュール
- カメラモジュール
- 産業用I/O
- LoraWANモジュール
- 5G/4Gモジュール
- PoEモジュール
- イーサネットスイッチ

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/external_modules.png" alt="pir" width="750" height="auto"/></p>

reTerminalの側面には2つのM4機械ネジ穴があり、拡張モジュールを固定するのに役立ちます。

## CSIカメラインターフェース

reTerminalには2レーンMIPI CSIカメラインターフェースがあり、最大2台のカメラをreTerminalに接続できます。1つのインターフェースは**15ピン**で、もう1つのインターフェースは**22ピン**です。使用予定のインターフェースに対応する正しいフレックスケーブルを使用してください。これらのカメラインターフェースは、物体検出や機械学習アプリケーションに使用できます。

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/CSI_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**ヒント：** より高解像度の画像については[こちら](https://files.seeedstudio.com/wiki/ReTerminal/CSI_sch.jpg)をクリックしてください

#### 使用方法

- **ステップ1.** カメラを**15ピン**または**22ピン**の**FPCインターフェース**に接続します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FPC-label-1.jpg" alt="pir" width="800" height="auto"/></p>

- **ステップ2.** reTerminalを起動し、Raspberry Pi Desktop UIのRaspberry Piアイコンをクリックして`Preferences > Raspberry Pi Configuration`に移動します

- **ステップ3.** `Interfaces`タブをクリックし、**Camera**の横にある**Enabled**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Cam-enable.jpg" alt="pir" width="1000" height="auto"/></p>

- **ステップ4.** **Yes**をクリックして再起動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/cam-reboot.jpg" alt="pir" width="1000" height="auto"/></p>

- **ステップ5.** ターミナルウィンドウを開き、以下を入力して静止画を撮影してデスクトップに保存します

```sh
raspistill -o Desktop/image.jpg
```

**注意:** 保存場所はお好みに応じて変更できます

- **ステップ 6.** デスクトップに生成されたファイルをダブルクリックして画像を表示します

- **ステップ 7.** 以下を入力してビデオを録画し、デスクトップに保存します

```sh
raspivid -o Desktop/video.h264
```

**ステップ 8.** デスクトップに生成されたファイルをダブルクリックして、録画されたビデオを再生します

カメラの使用方法について詳しくは、[公式Raspberry Piドキュメント](https://projects.raspberrypi.org/en/projects/getting-started-with-picamera/3)をご覧ください

#### Buildroot/ Yoctoイメージでの使用方法

- CSIカメラインターフェースはまだテストされていません。テストが完了次第、更新される予定です。

## 5インチLCD

reTerminalに内蔵されている5インチLCDは、内部のキャリアボード上の**30ピンDSIインターフェース**に接続されています。このLCDは**5点マルチタッチ**をサポートしており、この機能を有効にするために、LCDはキャリアボード上の別の**TPインターフェース**に接続されています。

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/LCD_sch.png" alt="pir" width="1000" height="auto"/></p>

**ヒント:** より高解像度の画像については[こちら](https://files.seeedstudio.com/wiki/ReTerminal/LCD_sch.png)をクリックしてください

## LCD用タッチパネル

### 使用方法

LCD用のタッチパネルは**6ピンFPC**コネクタ経由で接続されています。evtestツールを使用してテストできます

- **ステップ 1.** 以下を入力して**evtest**をインストールします。これは入力デバイスイベントモニターおよびクエリツールです

```sh
sudo apt install evtest
```

- **ステップ 2.** evtestツールを開く

```sh
evtest
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/evtest-1.png" alt="pir" width="680" height="auto"/></p>

- **ステップ 3.** **1** を入力すると、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/tp-1.png" alt="pir" width="720" height="auto"/></p>

- **ステップ 4.** reTerminal LCD 上でランダムにタッチすると、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/tp-2.png" alt="pir" width="850" height="auto"/></p>

#### Buildroot イメージでの使用方法

- **evtest ツール**をインストールする必要はありません。既にインストールされています
- **evtest** を実行する前に、**su -** を入力して root に変更する必要があります
- 上記で説明した他のステップに従ってください

#### Yocto イメージでの使用方法

- **evtest ツール**をインストールする必要はありません。既にインストールされています
- 上記で説明した他のステップに従ってください

### I2C 経由で FPC コネクタに他のデバイスを接続する

タッチパネルは I2C 通信プロトコルを介して reTerminal に接続されています。そのため、必要に応じて他の I2C デバイスをこの 6 ピン FPC インターフェースに簡単に接続できます。接続図は以下の通りです

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FPC-I2C-connection.png" alt="pir" width="900" height="auto"/></p>

その後、I2C の使用方法に関する前のトピックのステップに従ってください

## 4 つのユーザープログラマブルボタン

reTerminal の前面には 4 つのユーザープログラマブルボタンがあります。これらのボタンはソフトウェアを使用して簡単に制御でき、アプリケーションに応じて異なる機能の ON/OFF を切り替えるように割り当てることができます！

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/keys_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**ヒント:** より高解像度の画像については[こちら](https://files.seeedstudio.com/wiki/ReTerminal/keys_sch.jpg)をクリックしてください

### 使用方法

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/key-label.jpg" alt="pir" width="500" height="auto"/></p>

- **ステップ 1.** evtest ツールを開きます

```sh
evtest
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/evtest.png" alt="pir" width="680" height="auto"/></p>

- **ステップ 2.** **0** を入力すると、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/button-test.jpg" alt="pir" width="680" height="auto"/></p>

- **ステップ 3.** 左から右へボタンを押すと、以下が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/button-test-result.png" alt="pir" width="800" height="auto"/></p>

**注意:** ボタンはデフォルトで**左から右**に **a s d f** として設定されています

- **ステップ 4.** ボタンを設定したい場合は、以下を入力してください

```sh
sudo nano /boot/config.txt
```

- **ステップ 5.** ファイルを変更し、末尾に以下を追加します

```sh
dtoverlay=reTerminal,key0=0x100,key1=0x101,key2=0x102,key3=0x103,tp_rotate=1
```

**注意:** ここで16進数の100、101、102、103がそれぞれkey0、key1、key2、key3に割り当てられています

#### Buildrootイメージでの使用方法

- **evtestツール**をインストールする必要はありません。既にインストールされているためです
- **evtest**を実行する前に、**su -**と入力してrootに変更する必要があります
- 上記で説明した他の手順に従ってください

#### Yoctoイメージでの使用方法

- **evtestツール**をインストールする必要はありません。既にインストールされているためです
- 上記で説明した他の手順に従ってください

## 3 ユーザープログラマブルLED

reTerminalの前面には2つのユーザープログラマブルLEDがあります。これらのLEDはソフトウェアを使用してON/OFFを切り替えることができ、異なるハードウェア機能を監視するためのステータスLEDとして使用したいシナリオで有用です。**USR** LEDは**緑色**に点灯でき、**STA** LEDは**赤色**または**緑色**のいずれかに点灯できます

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/LEDs_sch.jpg" alt="pir" width="700" height="auto"/></p>

**ヒント:** より高解像度の画像については[こちら](https://files.seeedstudio.com/wiki/ReTerminal/LEDs_sch.jpg)をクリックしてください

### 使用方法

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/led-label.jpg" alt="pir" width="550" height="auto"/></p>

- **ステップ1.** rootアカウント権限を有効にする

```sh
sudo -i
```

- **ステップ 2.** 次のディレクトリに入る

```sh
cd /sys/class/leds
```

- **ステップ 3.** **緑色 USR LED**を制御するために次のディレクトリに入る

```sh
cd usr_led0
```

- **ステップ 4.** LEDを最大輝度で点灯させる

```sh
echo 255 > brightness
```

**注意:** 明度レベルを調整するために1〜255の値を入力できます

- **ステップ5.** LEDをオフにする

```sh
echo 0 > brightness
```

- **ステップ 6.** 以下のディレクトリに入って**赤色 STA LED**を制御します

```sh
cd ..
cd usr_led1
```

- **ステップ 7.** ステップ 4 - 5 を繰り返して LED を制御します

- **ステップ 8.** 次のディレクトリに入って **緑色 STA LED** を制御します

```sh
cd ..
cd usr_led2
```

- **ステップ 9.** ステップ 4 - 5 を繰り返して LED を制御します

#### Buildroot イメージでの使用方法

- **sudo -i** を **su -** に置き換えて **root** アカウント権限を有効にします
- 上記で説明した他のステップに従います

#### Yocto イメージでの使用方法

- すでに **root** としてログインしているため、**sudo -i** は不要です
- 上記で説明した他のステップに従います

## ギガビットイーサネットポート

reTerminal にはギガビットイーサネットコネクタ（RJ45）がオンボードで搭載されています。このポートは **Broadcom BCM54210PE** をベースとした CM4 モジュールの **ギガビットイーサネット PHY** に接続されています。また、**IEEE 1588-2008 準拠** でもあります。

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ethernet_sch.png" alt="pir" width="900" height="auto"/></p>

**ヒント:** より高解像度の画像については[こちら](https://files.seeedstudio.com/wiki/ReTerminal/Ethernet_sch.png)をクリックしてください

## 暗号化コプロセッサ

reTerminal には、安全なハードウェアベースのキーストレージを備えた **Microchip ATECC608A 暗号化コプロセッサ** などのセキュリティ機能があります。また、最大 16 個のキー、証明書、またはデータ用の保護されたストレージも備えています。対称署名、検証、キー合意 – ECDSA のハードウェアサポートを提供します。対称アルゴリズム、ネットワークキー管理、セキュアブートのハードウェアサポートがあります。

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Encrypt_sch.jpg" alt="pir" width="800" height="auto"/></p>

**ヒント:** より高解像度の画像については[こちら](https://files.seeedstudio.com/wiki/ReTerminal/Encrypt_sch.jpg)をクリックしてください

### 使用方法

- **ステップ 1.** 利用可能なすべての I2C バスをリストアップします

```sh
i2cdetect -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/i2cdetect-l.png" alt="pir" width="750" height="auto"/></p>

- **ステップ 2.** I2Cバス3（i2c-3）上の標準アドレスをスキャンする

```sh
i2cdetect -y 3
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/i2cdetect-y3.png" alt="pir" width="530" height="auto"/></p>

**注意:** 3はI2Cバス番号を表します

I2Cアドレス **0x60** のデバイスは暗号化コプロセッサです

#### Buildrootイメージでの使用方法

- 上記と同様に動作します

#### Yoctoイメージでの使用方法

- 起動時にI2Cは有効になっていません。各起動後に **modprobe i2c-dev** でのみ動作します。これは修正され次第更新される予定です。

## RTC

reTerminalの内蔵RTCは **NXP Semiconductors PCF8563T** をベースとしており、**CR1220バッテリー** を使用して電源を供給します。低いバックアップ電流を持ち、VDD = 3.0V、温度 = 25°Cで標準的に0.25μAです。時刻保持機能を実装する必要があるプロジェクトで使用できます。

**注意:** CR1220バッテリーは開封時にすでに取り付けられています。

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/RTC_sch.jpg" alt="pir" width="800" height="auto"/></p>

**ヒント:** より高解像度の画像については[こちら](https://files.seeedstudio.com/wiki/ReTerminal/RTC_sch.jpg)をクリックしてください

### 使用方法

RTCから日付と時刻情報を取得するには、以下のコマンドを入力してください

```sh
sudo hwclock
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/hwclock.png" alt="pir" width="370" height="auto"/></p>

#### Buildrootイメージでの使用方法

- まず **su -** と入力して **root** アカウントを有効にします
- 次に **hwclock** と入力します

#### Yoctoイメージでの使用方法

- **sudo** は不要です。すでに **root** としてログインしているためです
- **hwclock** と入力するだけです

## 光センサー

reTerminalには **Levelek LTR-303ALS-01** デジタル光センサーが搭載されており、**6ピンFPCインターフェース** に接続されています。環境の光レベルを検知するために使用でき、周囲の光レベルに応じた **LCDバックライトの自動輝度調整** にも使用できます。

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/light_sch.jpg" alt="pir" width="700" height="auto"/></p>

**ヒント:** より高解像度の画像については[こちら](https://files.seeedstudio.com/wiki/ReTerminal/light_sch.jpg)をクリックしてください

### 使用方法

- **ステップ 1.** rootアカウント権限を有効にします

```sh
sudo -i
```

- **ステップ 2.** 次のディレクトリに入る

```sh
cd /sys/bus/iio/devices/iio:device0
```

- **ステップ3.** 以下を入力して光強度値を**Lux**で取得します

```sh
cat in_illuminance_input 
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/light-lux.png" alt="pir" width="900" height="auto"/></p>

光センサーは**I2C通信プロトコル**を介してreTerminalに接続されています。そのため、必要に応じて他のI2Cデバイスをこの**6ピンFPCインターフェース**に簡単に接続できます。接続図は以下の通りです

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/light-i2c.png" alt="pir" width="1000" height="auto"/></p>

その後、I2Cの使用方法について前のトピックの手順に従ってください

#### Buildrootイメージでの使用方法

- **root**アカウント権限を有効にするために**sudo -i**を**su -**に置き換えてください
- 上記で説明した他の手順に従ってください

#### Yoctoイメージでの使用方法

- すでに**root**としてログインしているため、**sudo -i**は必要ありません
- 上記で説明した他の手順に従ってください

## 加速度センサー

内蔵の**STMicroelectronics LIS3DHTR 3軸加速度センサー**を使用して、reTerminalで多くの異なるアプリケーションを実現できます。reTerminalを回転させると画面の向きが自動的に変わるようにしたり、その他多くの用途に使用できます。

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/accel_sch.jpg" alt="pir" width="600" height="auto"/></p>

**ヒント:** より高解像度の画像については[こちら](https://files.seeedstudio.com/wiki/ReTerminal/accel_sch.jpg)をクリックしてください

### 使用方法

- **ステップ 1.** evtestツールを開きます

```sh
evtest
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/evtest.png" alt="pir" width="680" height="auto"/></p>

- **ステップ 2.** **1** を入力すると、X、Y、Z の加速度値が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/accel-test.png" alt="pir" width="700" height="auto"/></p>

#### Buildroot イメージでの使用方法

- **evtest ツール**は既にインストールされているため、インストールする必要はありません
- **evtest** を実行する前に、**su -** を入力して **root** に変更する必要があります
- 上記で説明した他の手順に従ってください

#### Yocto イメージでの使用方法

- **evtest ツール**は既にインストールされているため、インストールする必要はありません
- 上記で説明した他の手順に従ってください

## ブザー

reTerminal には内蔵ブザーがあります。これはソフトウェアを使用して制御できます。このブザーは、さまざまなアプリケーションでインジケーターとして使用できます。

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buzzer_sch.jpg" alt="pir" width="500" height="auto"/></p>

**ヒント:** より高解像度の画像については[こちら](https://files.seeedstudio.com/wiki/ReTerminal/buzzer_sch.jpg)をクリックしてください

### 使用方法

- **ステップ 1.** root アカウント権限を有効にします

```sh
sudo -i
```

- **ステップ 2.** 次のディレクトリに入る

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

- **root** アカウント権限を有効にするために、**sudo -i** を **su -** に置き換えてください
- 上記で説明した他の手順に従ってください

#### Yocto イメージでの使用方法

- すでに **root** としてログインしているため、**sudo -i** は必要ありません
- 上記で説明した他の手順に従ってください

## USB 2.0 ポート

Raspberry Pi CM4 には既に **USB 2.0 Hub がオンボード** で搭載されています。この Hub は reTerminal 上で **USB HOST** として **2つの USB 2.0 ポート** に拡張されています

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**ヒント:** より高解像度の画像については[こちら](https://files.seeedstudio.com/wiki/ReTerminal/USB_sch.jpg)をクリックしてください

### 使用方法

- **ステップ 1.** reTerminal の USB 2.0 ポートの1つに USB デバイスを接続します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB-port.jpg" alt="pir" width="130" height="auto"/></p>

- **ステップ 2.** ターミナルウィンドウで以下を入力して、接続された USB デバイスをリストアップします

```sh
lsusb
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB-connected.png" alt="pir" width="850" height="auto"/></p>

- **ステップ 3.** 以下を入力して、接続されたUSBデバイスに関するドライブサイズ、パーティション、マウントポイントなどの詳細情報を収集します

```sh
lsblk
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB-mount.png" alt="pir" width="680" height="auto"/></p>

- **ステップ 4.** 接続されたUSBデバイスにアクセスし、内部のすべてのファイルを一覧表示する

```sh
cd /media/pi/NEW VOLUME
ls -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/USB-access.png" alt="pir" width="730" height="auto"/></p>

**注意:** マウントポイントはUSBデバイスによって変わります

## Micro - SDカードスロット

reTerminalには**micro-sdカードスロット**が搭載されています。これは**eMMCなしのCM4モジュール**を使用している場合に、micro-SDカードに**オペレーティングシステムをインストール**したい時に便利です。最低でも8GB以上のカードを使用することをお勧めします。詳細については[このリンク](https://wiki.seeedstudio.com/ja/reTerminal/#flash-to-micro-sd-card-cm4-non-emmc-version)をご覧ください！

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/SD_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**ヒント:** より高解像度の画像については[こちら](https://files.seeedstudio.com/wiki/ReTerminal/SD_sch.jpg)をクリックしてください

## Micro HDMIポート

reTerminalにはmicro HDMIポートがあり、**micro HDMIから標準HDMIケーブル**を使用してHDMIディスプレイに接続できます。60fpsで最大4K解像度をサポートしています。

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/HDMI_sch.jpg" alt="pir" width="1000" height="auto"/></p>

**ヒント:** より高解像度の画像については[こちら](https://files.seeedstudio.com/wiki/ReTerminal/HDMI_sch.jpg)をクリックしてください

### 使用方法

- **ステップ1.** micro-HDMIから標準HDMIケーブルを使用して、HDMIディスプレイをreTerminalのmicro-HDMIポートに接続します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/HDMI-port.jpg" alt="pir" width="250" height="auto"/></p>

- **ステップ2.** reTerminalの電源を入れると、reTerminal LCDと接続されたHDMIディスプレイの両方にUIが出力されます

**注意:** reTerminalの電源が入っている状態でディスプレイを接続した場合、接続されたHDMIディスプレイにUIを表示するには**sudo service lightdm restart**と入力する必要があります。

- **ステップ3.** ターミナルウィンドウで以下を入力して**Screen Configuration**ユーティリティをインストールします

```sh
sudo apt install arandr
```

- **ステップ 4.** 左上角のRaspberry Piアイコンをクリックし、`Preferences > Screen Configuration`に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/screen-config-setup.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 5.** **Screen Layout Editor**ウィンドウ内で、`Configure > Screens > HDMI-1 > Resolution`に移動し、接続されたHDMIディスプレイの解像度を調整して選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/screen-drag.png" alt="pir" width="1000" height="auto"/></p>

**注意:** ディスプレイの**周波数**と**向き**も変更できます

- **ステップ 6.** 2つのボックスをドラッグしてディスプレイの配置を変更します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/screen-setting.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 7.** **チェックマーク**をクリックして設定を適用します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/screen-apply.png" alt="pir" width="1000" height="auto"/></p>

#### Buildroot/ Yoctoイメージでの使用

- ホットプラグは現在動作しません。これは修正され次第更新されます。
- そのため、最初にHDMIディスプレイに接続してからreTerminalの電源を入れる必要があります
- **arandr**パッケージはBuildrootシステムイメージでは利用できないことに注意してください

## USB Type-Cポート

reTerminalの**USB Type-Cポート**は、**5V/4A（推奨）を使用してreTerminalに電源を供給する**ために使用できます。ただし、**USBデバイス**として動作させることもでき、reTerminalを**ホストPC**に接続すると、reTerminalが**USB大容量記憶装置**として動作します。ここでは、PC経由でreTerminalの**オンボードeMMC**にアクセスし、eMMCに**オペレーティングシステム**をフラッシュできます。詳細については[こちら](https://wiki.seeedstudio.com/ja/reTerminal/#flash-to-emmc-cm4-emmc-version)をクリックしてください！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/type-c.png" alt="pir" width="130" height="auto"/></p>

## 標準カメラマウント（1/4インチ）

reTerminalには**直径1/4インチの標準カメラマウント**があります。そのため、reTerminalを**標準三脚**に接続できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/tripod.png" alt="pir" width="450" height="auto"/></p>

## reTerminal用Pythonライブラリ

reTerminal上のオンボードハードウェアを使用できる**Pythonライブラリ**を準備しました。現在、**加速度計、ユーザーLED、ユーザーボタン、ブザー**にこのPythonライブラリを使用してアクセスできます。

### インストール

reTerminal上でターミナルウィンドウを開き、以下を実行します

```sh
sudo pip3 install seeed-python-reterminal
```

**注意:** ソースコードは[こちら](https://github.com/Seeed-Studio/Seeed_Python_ReTerminal)で確認できます

### 使用方法

- **ステップ 1.** 新しい**pythonファイル**を作成し、**nanoテキストエディタ**で開きます

```sh
nano test.py
```

- **ステップ 2.** Pythonコードを入力します

- **ステップ 3.** **CTRL + X** を押してから **Y** を押してファイルを保存します

- **ステップ 4.** 最後にファイルを実行します

```sh
python3 test.py
```

上記の手順に従って、以下のハードウェア機能をテストできます。各セクションに含まれるPythonコードは、test.pyファイルに直接入力してからファイルを実行できます

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

#### Buzzer Test

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

#### 加速度計テスト

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

#### 加速度計とボタンのテスト

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

#### Buildrootイメージでの使用方法

- このライブラリは後でBuildrootイメージに追加される予定です
- まず **su -** と入力してrootアカウントを有効にします
- 次に **pip3 install seeed-python-reterminal** と入力します
- Pythonファイルを作成する際は **vi** をテキストエディタとして使用します
- Accel + ボタンのデモに問題があります。これは修正され次第更新される予定です

#### Yoctoイメージでの使用方法

- Pythonはインストールされていますが、pipはインストールされていません。後でこのライブラリをシステムイメージ内にパッケージ化する予定です

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
