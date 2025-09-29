---
description: LinkIt Smart 7688 Duo 用 Arduino ブレークアウト
title: LinkIt Smart 7688 Duo 用 Arduino ブレークアウト
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Arduino_Breakout_for_LinkIt_Smart_7688_Duo
last_update:
  date: 05/15/2025
  author: shuxu hu
---


:::danger note
MediaTek Labs の閉鎖により、関連するリンクはすべて無効になっています。関連ファイルをダウンロードする必要がある場合は、以下のリンクで検索してください：[https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs)。
:::

 **LinkIt Smart 7688 Duo 用 Arduino ブレークアウト** は、LinkIt Smart 7688 Duo 用の拡張ボードです。Seeed が製造した他のブレークアウトボードと同様に、このボードには 12 個の Grove ポートが統合されており、Grove モジュールを簡単に接続できます。このボードを使用することで、初心者は配線が簡略化されるため、通常はあまり楽しくない配線作業を避けて迅速に開始できます。さらに、このボードは Arduino と同じ MCU を共有しているため、LinkIt Smart 7688 の機能だけでなく、Arduino Yún の機能も利用でき、さまざまな堅牢でコンパイル済みの Arduino スケッチに基づいた豊富な IoT アプリケーションを構築できます。このボードには、LinkIt Smart 7688 Duo に簡単にアクセスできるピンが予約されているほか、I2C、UART などのシリアルバスをサポートし、USB と Ethernet を備えています。

![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/Arduino_Breakout_for_LinkIt_Smart_7688_Duo_product_view.jpg)

LinkIt Smart 7688 Duo は、OpenWrt Linux ディストリビューション、MT7688、および ATmega32u4 に基づいたオープン開発ボードです。このボードは、スマートホーム向けの豊富なアプリケーション IoT デバイスのプロトタイピングを可能にするように設計されています。LinkIt Smart 7688 Duo の詳細については、[こちら](https://www.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo)をクリックしてください。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Arduino-Breakout-for-LinkIt-Smart-7688-Duo-p-2576.html)

## 特徴

- Arduino シールド互換
- インターネット接続用 Ethernet
- USB 2.0 による周辺機器の拡張
- Grove インターフェース: I2C × 2、アナログ × 3、デジタル × 6、UART × 1
- 4 ピンデバッグポート × 1、ICSP × 1

## アプリケーションアイデア

- IoT/ゲートウェイデバイス
- ロボティクス
- スマートマルチメディアデバイス
- 教育と学習

## 仕様

- **入力電圧**: 5.0V (USB 電源ポート使用時)
- **動作電圧**: 3.3V

:::note
    デバッグピンは MT7688 に接続され、その他のピンは ATmega32U4 に接続されています。
:::

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/Arduino_Breakout_for_LinkIt_Smart_7688_Duo_components_with_text_1200_s.jpg)

|項目|数量|項目|数量|
|---|---|---|---|
|Arduino シールド|1|USB ポート(Type-A)|1|
|MT7688 UART2|1|USB ポート(マイクロ Type-B)|1|
|ICSP ポート|1|Ethernet ポート|1|
|リセットボタン(ATmega32u4)|1|LinkIt Smart 7688 Duo 用接続ポート|1|

## 始め方

この簡単なアプリケーションでは、ブザーを異なる音で鳴らします。始める前に、Arduino Breakout for LinkIt Smart 7688 Duo のほかに、以下の材料が手元にあるか確認してください。これらは Bazaar で入手できます。

|LinkIt Smart 7688 Duo|USB ケーブル|UARTBee |ジャンパーワイヤー x 3|Grove - ブザー|
|---|---|---|---|---|
|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/102110017%206.jpg)|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/48cmUSBc.jpg)|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/UartSBee%20V5_01.jpg)|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/jw100n.jpg)|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/107020000%201.jpg)|
|[**今すぐ購入**](https://www.seeedstudio.com/LinkIt-Smart-7688-Duo-p-2574.html)|[**今すぐ購入**](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|[**今すぐ購入**](https://www.seeedstudio.com/UartSBee-V5-p-1752.html)|[**今すぐ購入**](https://www.seeedstudio.com/1-pin-dual-female-jumper-wire-100mm-50pcs-pack-p-260.html)|[**今すぐ購入**](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

- ステップ1: LinkIt Smart 7688 Duo をインターネットに接続する方法を参照してください。

:::note
    * Pin 8、Pin 9、および Pin GND は、LinkIt Smart 7688 に接続するポートの近くにあります。
    * ジャンパーワイヤーを MT7688 UART2 ポートに差し込むことで、Pin 8、Pin 9、および Pin GND にハンダ付けする代わりに接続できます。
:::

- ステップ2: USB をシリアルアダプターに接続した後、コンソールを開きます。
- ステップ3: 以下のようにすべての部品を接続します。

![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/Arduino_Breakout_for_LinkIt_Smart_7688_Duo_demo_connection_view_1200_s.jpg)

- ステップ4: Grove - ブザーをポート D4 に差し込みます。

- ステップ5: ホストコンピューター上で LinkIt Smart 7688 Duo プラットフォーム用の Arduino 環境を構築します。このチュートリアルは LinkIt Smart 7688 の Wiki に記載されているため、[こちら](https://www.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo#Installing_Arduino_programming_environment)を参照してください。
- ステップ6: Firmata をダウンロードします。
- ステップ7: LinkIt Smart 7688 プラットフォーム用の Arduino IDE をインストールし、開発ボードに Firmata ファイルをフラッシュする方法については、[こちら](https://www.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo#Installing_Arduino_programming_environment)を参照してください。

:::note
    以下の手順は埋め込み OS (OpenWRT) 上で実行する必要があります。システムに Python がインストールされており、pip がインストールされていることを確認してください。
:::

- ステップ8: コンソールで `pip install pyfirmata` を入力し、Enter を押して Python ライブラリ pyfirmata をインストールします。
- ステップ9: コンソールで `vi buzzer.py` を入力して **buzzer.py** という名前のファイルを作成し、以下のコードをコピーして貼り付けます。

```python
from pyfirmata import Arduino, util
from time import sleep
board = Arduino('/dev/ttyS0')
print "Start blinking D4"
while True:
  board.digital[4].write(1)
  sleep(0.5)
  board.digital[4].write(0)
  sleep(0.5)
```

- ステップ10: **buzzer.py** を保存し、**python buzzer.py** と入力してサンプルコードを実行します。
- ステップ11: これでブザーの音が聞こえるはずです。

## 今すぐ作ってみよう

ブザーを鳴らすことに成功しましたか？ここでは、LinkIt Smart 7688 Duo を使用したさらに素晴らしいプロジェクトを2つ紹介します。さあ、作ってみましょう！

|WiFi接続可視化付きスマートルーター|Facebook「いいね」モニター|
|:---:|:---:|
|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/F9SCHIKIPH4SPTP.MEDIUM.jpg)|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/F9MQJJOIHQOBV4Q.MEDIUM.jpg)|
|[![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/200px-Wiki_makeitnow_logo.png)](https://www.instructables.com/id/ReRouter-Make-an-Extensible-IoT-Router/)|[![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/200px-Wiki_makeitnow_logo.png)](https://www.instructables.com/id/Facebook-Like-Monitor/)|

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/resources/Schematic_files_for_Arduino_Breakout_for_LinkIt_Smart_7688_Duo.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- [回路図ファイル](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/resources/Schematic_files_for_Arduino_Breakout_for_LinkIt_Smart_7688_Duo.zip)
- [LinkIt Smart 7688 Duo の Wiki リンク](https://www.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo)
- [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
