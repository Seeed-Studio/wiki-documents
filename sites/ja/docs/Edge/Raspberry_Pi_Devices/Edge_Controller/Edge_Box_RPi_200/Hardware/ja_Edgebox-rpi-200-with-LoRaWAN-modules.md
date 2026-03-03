---
description: EdgeBox RPi 200 with LoRaWAN® Module
title: EdgeBox RPi 200 with LoRaWAN® Module
keywords:
  - Edge
  - EdgeBox-RPi-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/EdgeBox-rpi-200-with-LoRaWAN-module
last_update:
  date: 7/14/2023
  author: Peter Pan
---

## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

EdgeBox-RPi-200シリーズは、複数の産業用途を組み合わせたRaspberry Piベースのオールインワン産業用エッジコンピューティングコントローラーです。高いスケーラビリティと堅牢な産業用ハードウェアとして設計され、豊富なIOリソースを搭載し、優れたRaspberry Pi産業用ソフトウェアエコシステムによってサポートされており、スマート自動化および産業用モノのインターネット（IIoT）ソリューションに理想的な選択肢です。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

## WM1302 LoRaWANモジュール

> LoRaWAN®は、LoRa Alliance®からのライセンスの下で使用されるマークです。
LoRa®マークは、Semtech Corporationまたはその子会社の商標です。

:::note
        最近、Wio-E5モジュールをベースとしたWio-E5シリーズをリリースしました。[こちら](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3)をクリックして、[Wio-E5モジュール](https://wiki.seeedstudio.com/ja/LoRa-E5_STM32WLE5JC_Module/)から[Groveモジュール](https://wiki.seeedstudio.com/ja/Grove_LoRa_E5_New_Version/)、[ミニ開発ボード](https://wiki.seeedstudio.com/ja/LoRa_E5_mini/)、[開発キット](https://wiki.seeedstudio.com/ja/LoRa_E5_Dev_Board/)まで、LoRa-E5ファミリーの新しいメンバーをご覧ください。STM32WLシリーズ用STM32Cube MCUパッケージ（SDK）を使用してLoRaWAN®エンドノードを作成し、LoRaWAN®ネットワークに参加してデータを送信する方法について詳しく学ぶには、[ミニ開発ボード](https://wiki.seeedstudio.com/ja/LoRa_E5_mini/)と[開発キット](https://wiki.seeedstudio.com/ja/LoRa_E5_Dev_Board/)のwikiページをお読みください。
:::

WM1302モジュールは、mini-PCIeフォームファクターを持つ新世代のLoRaWAN®ゲートウェイモジュールです。Semtech® SX1302ベースバンドLoRaWAN®チップをベースとし、WM1302はゲートウェイ製品の長距離無線伝送のより大きな潜在能力を解き放ちます。従来のSX1301およびSX1308 LoRa®チップと比較して、より高い感度、より少ない消費電力、より低い動作温度を特徴としています。

WM1302 LoRaWAN®ゲートウェイモジュールは、US915とEU868の両方の周波数帯域でSPIおよびUSBバージョンを提供し、EU868、US915、AS923、AS920、AU915、KR920、IN865を含む幅広いLoRaWAN®周波数プランオプションから選択できます。

WM1302モジュールは、CE、FCC、Telec認証を取得しており、LoRaWAN®ゲートウェイデバイスの開発および認証プロセスの簡素化に役立ちます。

WM1302は、M2MおよびIoTアプリケーション向けに設計されており、LPWANゲートウェイサポートシナリオで広く適用できます。LoRaWAN®ゲートウェイ、ホットスポットなどのLoRa®ゲートウェイデバイスを開発する際の技術的困難と時間消費を大幅に削減するための完璧な選択肢となるでしょう。

## ハードウェアインストール

**ステップ1:** Edgebox-RPI-200を分解します

**ステップ2:** LoRaWAN®モジュールをmini-PCIeスロットに配置します

**ステップ3:** Edgebox-RPI-200を再組み立てしてから電源を投入してください

**ステップ4:** お使いのモジュールバージョンに応じて以下の手順に従ってください：

:::note
以下の手順はEdgebox-RPI-200 OSへの直接アクセスが必要です。sshを使用するか、`Terminal APP`でディスプレイ、マウス、キーボードを使用するなど、お好みの方法で接続してください。
:::

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="WM1302 USB Module" label="WM1302 USB Module">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114992991-wio-wm1302-lorawan-gateway-module-_spi_---us915-m---first.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

Terminal APPまたはお好みのコマンドラインツールで

**ステップ5.** コマンドラインで`sudo raspi-config`と入力してRaspberry Piソフトウェア設定ツールを開きます：

- Interface Optionsを選択
- I2Cを選択し、**Yes**を選択して有効にします
- Serial Portを選択し、「Would you like a login shell...」に対して**No**を選択し、「Would you like the serial port hardware...」に対して**Yes**を選択します

この後、これらの設定が動作することを確認するためにRaspberry Piを再起動してください。

**ステップ6.** [WM1302コード](https://github.com/Lora-net/sx1302_hal)をダウンロードしてコンパイルします。

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo make
```

**ステップ 7.** reset_lgw.sh スクリプトをコピーする

```
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**ステップ 8.** `global_conf.json.sx1250.US915.USB` 設定ファイル内のLoraWAN®モジュールのUSBポートを置き換えます：

**ステップ 8-1.**
まず、特定のUSBポートを取得するために、以下の手順に従ってください：

```sh
lsusb
```

私の場合、WM1302は`STMicroelectronics Virtual COM Port`を使用しているため、プロダクトID `5740`を取得できます

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/Edge_Box/find-lora-device.png"/></div>

**ステップ 8-2.**

次に、プロダクトID番号`5740`でUSBデバイスを取得します。この場合、USBポート番号`1-1.3`を取得します：

```sh
sudo dmesg | grep 5740
```

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/Edge_Box/find-lora-device-1.png"/></div>

その後、以下のようにデバイスポートを取得できます：

```sh
sudo dmesg | grep 1-1.3
```

私の場合、USBデバイスは `ttyACM0` です

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/Edge_Box/find-lora-device-2.png"/></div>

それでは、`global_conf.json.sx1250.US915.USB` 設定のUSBデバイスを sed コマンド `sed -i 's/search_string/replacement_string/g' filename` で変更しましょう。パターンは `sed -i 's/ttyACM0/the_result_from_above' global_conf.json.sx1250.frequency_of_your_module.USB` に従ってください。`the_result_from_above` と `frequency_of_your_module` をあなたのアプリケーションに合わせて置き換えてください：

例えば私の場合：

```sh
sed -i 's/ttyACM0/ttyACM0/g'  global_conf.json.sx1250.US915.USB
```

**ステップ 9.** LoraWAN® モジュールを開始する

次に、お使いの WM1302 動作周波数バージョンに応じて、以下のコードを実行してLoraWAN® モジュールを開始します。

```sh
USB version
$ cd ~/sx1302_hal/packet_forwarder
$ ./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/Edge_Box/lora-activate.png"/></div>

上記の画像に示されている `EUI ID` を使用して、お好みのLora® ネットワークサーバーを選択し、接続を設定してください。

</TabItem>
<TabItem value="WM1302 SPI Module" label="WM1302 SPI Module">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114992967-spi-us915.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM1302-LoRaWAN-Gateway-Module-SPI-US-915-p-5454.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

**ステップ 5.** コマンドラインで `sudo raspi-config` と入力してRaspberry Pi ソフトウェア設定ツールを開きます：

- Interface Options を選択
- SPI を選択し、**Yes** を選択して有効にします
- I2C を選択し、**Yes** を選択して有効にします
- Serial Port を選択し、「Would you like a login shell...」に対して **No** を選択し、「Would you like the serial port hardware...」に対して **Yes** を選択します

この後、これらの設定が動作することを確認するためにRaspberry Pi を再起動してください。

**ステップ 6.** [WM1302 ソースコード](https://github.com/peterpanstechland/sx1302_hal.git) をダウンロードしてコンパイルします。

:::note
これはsx1302 halライブラリの修正版です。WM1302 モジュールの温度センサーがEdgebox-RPI-200でアクセスできないため、ソースコードがそれに応じて修正されており、`reset_lgw.sh` のピン設定もそれに応じて設定されています。
:::

```sh
cd ~/
git clone https://github.com/peterpanstechland/sx1302_hal.git
cd sx1302_hal
git checkout Edgebox-RPI-200
sudo make
```

**ステップ 7.** reset_lgw.sh スクリプトをコピーする

```sh
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**ステップ 8.** LoraWAN® モジュールを開始する

次に、お使いの WM1302 動作周波数バージョンに応じて、以下のコードを実行してLoraWAN® モジュールを開始します。

```sh
cd ~/sx1302_hal/packet_forwarder
./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/wm1302-spi.png"/></div>

お好みのLora®ネットワークサーバーを選択し、上記の画像に示されている`EUI ID`を使用して接続を設定してください。

</TabItem>
</Tabs>

<!-- Code END -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
