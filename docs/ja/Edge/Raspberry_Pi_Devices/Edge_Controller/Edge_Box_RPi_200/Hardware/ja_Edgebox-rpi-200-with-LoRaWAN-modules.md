---
description: EdgeBox RPi 200 と LoRaWAN® モジュール
title: EdgeBox RPi 200 と LoRaWAN® モジュール
keywords:
  - Edge
  - EdgeBox-RPi-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/EdgeBox-rpi-200-with-LoRaWAN-module
last_update:
  date: 05/15/2025
  author: Peter Pan
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

EdgeBox-RPi-200 シリーズは、複数の産業用途を統合したオールインワンの Raspberry Pi ベースの産業用エッジコンピューティングコントローラーです。高い拡張性と堅牢な産業用ハードウェアとして設計され、豊富な IO リソースを備え、優れた Raspberry Pi 産業用ソフトウェアエコシステムに対応しています。スマートオートメーションや産業用 IoT（IIoT）ソリューションに最適な選択肢です。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## WM1302 LoRaWAN モジュール

> LoRaWAN® は LoRa Alliance® のライセンスの下で使用されるマークです。  
LoRa® マークは Semtech Corporation またはその子会社の商標です。

:::note
        最近、Wio-E5 モジュールをベースにした Wio-E5 シリーズをリリースしました。[こちら](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3)をクリックして、[Wio-E5 モジュール](https://wiki.seeedstudio.com/ja/LoRa-E5_STM32WLE5JC_Module/)、[Grove モジュール](https://wiki.seeedstudio.com/ja/Grove_LoRa_E5_New_Version/)、[ミニ開発ボード](https://wiki.seeedstudio.com/ja/LoRa_E5_mini/)、[開発キット](https://wiki.seeedstudio.com/ja/LoRa_E5_Dev_Board/)など、LoRa-E5 ファミリーの新しいメンバーをご覧ください。STM32WL シリーズ（SDK）用の STM32Cube MCU パッケージを使用して LoRaWAN® エンドノードを作成し、LoRaWAN® ネットワークに参加してデータを送信する方法については、[ミニ開発ボード](https://wiki.seeedstudio.com/ja/LoRa_E5_mini/)および[開発キット](https://wiki.seeedstudio.com/ja/LoRa_E5_Dev_Board/)の Wiki ページをご覧ください。
:::

WM1302 モジュールは、mini-PCIe フォームファクターを備えた新世代の LoRaWAN® ゲートウェイモジュールです。Semtech® SX1302 ベースバンド LoRaWAN® チップを基盤としており、ゲートウェイ製品における長距離無線通信の潜在能力をさらに引き出します。従来の SX1301 および SX1308 LoRa® チップと比較して、より高い感度、低消費電力、低動作温度を特徴としています。

WM1302 LoRaWAN® ゲートウェイモジュールは、SPI および USB バージョンがあり、US915 および EU868 周波数帯域に対応しています。これにより、EU868、US915、AS923、AS920、AU915、KR920、IN865 など、幅広い LoRaWAN® 周波数プランオプションを選択できます。

WM1302 モジュールは CE、FCC、および Telec 認証を取得しており、LoRaWAN® ゲートウェイデバイスの開発および認証プロセスを簡素化します。

WM1302 は M2M および IoT アプリケーション向けに設計されており、LPWAN ゲートウェイがサポートするシナリオに広く適用できます。LoRaWAN® ゲートウェイやホットスポットなどの LoRa® ゲートウェイデバイスを開発する際の技術的な困難や時間を大幅に削減するための最適な選択肢となるでしょう。

## ハードウェアのインストール

**ステップ 1:** Edgebox-RPI-200 を分解する

**ステップ 2:** LoRaWAN® モジュールを mini-PCIe スロットに挿入する

**ステップ 3:** Edgebox-RPI-200 を再組み立てし、電源を入れる

**ステップ 4:** モジュールのバージョンに応じて以下の手順に従ってください:

:::note
以下の手順は Edgebox-RPI-200 OS への直接アクセスが必要です。そのため、ssh を使用するか、ディスプレイ、マウス、キーボードを使用して `Terminal APP` を操作するなど、好みに応じた接続方法を選択してください。
:::

<!-- コード -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="WM1302 USB Module" label="WM1302 USB モジュール">


<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114992991-wio-wm1302-lorawan-gateway-module-_spi_---us915-m---first.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>


Terminal APP またはお好みのコマンドラインツールで

**ステップ 5.** コマンドラインで `sudo raspi-config` を入力して Raspberry Pi ソフトウェア設定ツールを開きます:

- インターフェイスオプションを選択
- I2C を選択し、**Yes** を選択して有効化
- シリアルポートを選択し、「ログインシェルを使用しますか...」に対して **No** を選択し、「シリアルポートハードウェアを使用しますか...」に対して **Yes** を選択

その後、これらの設定が機能することを確認するために Raspberry Pi を再起動してください。

**ステップ 6.** [WM1302 コード](https://github.com/Lora-net/sx1302_hal) をダウンロードしてコンパイルします。

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo make
```

**ステップ 7.** reset_lgw.sh スクリプトをコピーします

```
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**ステップ 8.** `global_conf.json.sx1250.US915.USB` 設定ファイルで LoraWAN® モジュールの USB ポートを置き換えます:

**ステップ 8-1.**
まず、特定の USB ポートを取得するために以下の手順に従ってください:

```sh
lsusb
```

この場合、WM1302 は `STMicroelectronics Virtual COM Port` を使用しているため、製品 ID `5740` を取得できます。

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/Edge_Box/find-lora-device.png"/></div>

**ステップ 8-2.**

次に、製品 ID 番号 `5740` を持つ USB デバイスを取得します。この場合、USB ポート番号 `1-1.3` を取得します:

```sh
sudo dmesg | grep 5740
```
<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/Edge_Box/find-lora-device-1.png"/></div>

その後、デバイスポートを以下のように取得できます:

```sh
sudo dmesg | grep 1-1.3
```

この場合、USB デバイスは `ttyACM0` です。

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/Edge_Box/find-lora-device-2.png"/></div>


したがって、`global_conf.json.sx1250.US915.USB` 設定で USB デバイスを以下の sed コマンドを使用して変更します: `sed -i 's/search_string/replacement_string/g' filename`。以下のパターンに従ってください: `sed -i 's/ttyACM0/the_result_from_above' global_conf.json.sx1250.frequency_of_your_module.USB`。`the_result_from_above` と `frequency_of_your_module` を自分のアプリケーションに合わせて置き換えてください。

例えば、私の場合:

```sh
sed -i 's/ttyACM0/ttyACM0/g'  global_conf.json.sx1250.US915.USB
```

**ステップ 9.** LoraWAN® モジュールを起動する

次のコードを実行して、WM1302 の動作周波数バージョンに応じて LoraWAN® モジュールを起動します。

```sh
USB version
$ cd ~/sx1302_hal/packet_forwarder
$ ./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```
<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/Edge_Box/lora-activate.png"/></div>


お好みの Lora® ネットワークサーバーを選択し、上記の画像に表示されている `EUI ID` を使用して接続を設定してください。


</TabItem>
<TabItem value="WM1302 SPI Module" label="WM1302 SPI モジュール">


<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114992967-spi-us915.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM1302-LoRaWAN-Gateway-Module-SPI-US-915-p-5454.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>


**ステップ 5.** コマンドラインで `sudo raspi-config` を入力して Raspberry Pi ソフトウェア設定ツールを開きます:

- インターフェイスオプションを選択
- SPI を選択し、**Yes** を選択して有効化
- I2C を選択し、**Yes** を選択して有効化
- シリアルポートを選択し、「ログインシェルを使用しますか...」に対して **No** を選択し、「シリアルポートハードウェアを使用しますか...」に対して **Yes** を選択

その後、これらの設定が機能することを確認するために Raspberry Pi を再起動してください。

**ステップ 6.** [WM1302 ソースコード](https://github.com/peterpanstechland/sx1302_hal.git) をダウンロードしてコンパイルします。

:::note
これは sx1302 hal ライブラリの修正版です。WM1302 モジュールの温度センサーが Edgebox-RPI-200 ではアクセスできないため、ソースコードが修正されています。また、`reset_lgw.sh` のピン構成も適切に設定されています。
:::

```sh
cd ~/
git clone https://github.com/peterpanstechland/sx1302_hal.git
cd sx1302_hal
git checkout Edgebox-RPI-200
sudo make
```

**ステップ 7.** reset_lgw.sh スクリプトをコピーします

```sh
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**ステップ 8.** LoraWAN® モジュールを起動する

次のコードを実行して、WM1302 の動作周波数バージョンに応じて LoraWAN® モジュールを起動します。

```sh
$ cd ~/sx1302_hal/packet_forwarder
$ ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/wm1302-spi.png"/></div>

お好みの Lora® ネットワークサーバーを選択し、上記の画像に表示されている `EUI ID` を使用して接続を設定してください。

</TabItem>
</Tabs>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社の製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>