---
description: Seeeduino Crypto (ATmega4809 ECC608)
title: Seeeduino Crypto (ATmega4809 ECC608)
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino-Crypto-ATmega4809-ECC608
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像の説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/Seeed-Crypto-ATmega4809-ECC608-wiki.jpg)

Seeeduino Cryptoは暗号化のために設計されています。高性能なATmega4809とMicrochip ECC608暗号化チップを基盤としています。ECC608暗号化チップの助けを借りて、I2C暗号化やその他の暗号化通信を体験することができます。

暗号化機能に加えて、Seeeduino CryptoはSeeeduino V4.2やArduino Uno Rev3と同じ機能を備えています。6つのアナログ入力ピン、14のデジタルI/O（うち5つはPWM出力用）、2つのGrove I2Cポート、1つのGrove UARTポートなど、豊富なインターフェースリソースを持っています。センサーやアクチュエーターを簡単に接続して使用できます。

Seeeduino Cryptoの制御ソリューションはARDUINO UNO WIFI REV2と同じです。ただし、Seeeduino CryptoにはオンボードWiFiがありません。必要に応じてArduino WiFiモジュールを追加することができます。そのため、Seeeduino Cryptoの価格はARDUINO UNO WIFI REV2の半分以下です。

:::tip

この製品は、I2C通信の暗号化モードを柔軟に体験することができます。
:::

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeeduino-Crypto-ATmega4809-ECC608-p-4369.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

[![画像の説明を入力してください](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Crypto-ATmega4809-ECC608-p-4369.html)

## 特徴

- 高性能ATmega4809マイクロコントローラー
- 高セキュリティ暗号化チップECC608、SHA-256 & HMACハッシュ / AES-128をサポート
- 2つのGrove I2C + 1つのGrove UART、プロトタイピングが簡単
- Type C電源供給 + データ送信

## 仕様

| 項目 | 詳細 |
|---|---|
| チップ | マイクロコントローラー: ATMEGA4809-AFR / 暗号化: ECC608 |
| クロックスピード | 16Mhz |
| I/Oリソース | アナログ入力チャンネル: 6 / デジタルI/Oピン: 14 / PWMチャンネル: 5 |
| 周辺インターフェース | 2つのGrove I2Cポート / 1つのGrove UARTポート / 1つのICSPインターフェース / 1つのUSB Type Cデータポート |
| 動作電圧 | 5V |
| 電源供給 | 5V USB Type C / 8 - 15 V DCジャック入力 |

## ハードウェア概要

![画像の説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/Hardware-figure.jpg)

- **Type C**  
  ボードのType Cインターフェースで、PCに接続して電源供給やダウンロードに使用します。

- **LED RX / LED TX**  
  シリアル通信インジケーターLED（TX, RX）。シリアル通信の送受信状態をユーザーが確認するのに便利です。

- **DC電源ジャック**  
  入力電圧は8V-15Vです。

- **リセットボタンとリセットLED**  
  ボードをリセットするために使用します。リセット時にはリセットランプが点滅します。

- **電源LED**  
  システムの電源インジケーター。

- **ATMEGA32U4-MUチップ**  
  USBからUPDIへのダウンロード用チップで、マスターMCUであるATMEGA4809-AFRに接続してプログラムを焼き込みます。

- **ATECC608暗号化チップ**  
  I2C通信用の暗号化チップ。

- **ATMEGA4809-AFRチップ**  
  オンボードMCUで、システムのメイン制御チップとして機能します。

- **Groveコネクタ**  
  2つのI2Cと1つのUART標準Groveインターフェースを含みます。

:::note

シリアルポートを使用してデータを出力する際には、25ms以上の遅延を設ける必要があります。そうしないと、シリアルポートがフリーズする可能性があります。
:::

## はじめに

:::note

    この部分は、Windows 10 上で Arduino 1.8.10 を使用することを前提としています。
:::

まず、Arduino ソフトウェアをインストールする必要があります。

[![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Arduino アプリケーションを起動する**

以前にダウンロードした Arduino アプリケーション (arduino.exe) をダブルクリックします。

:::note

    Arduino ソフトウェアが異なる言語で読み込まれる場合は、設定ダイアログで言語を変更できます。詳細については [Arduino Software (IDE) ページ](https://www.arduino.cc/en/Guide/Environment#languages) を参照してください。
:::

**Blink サンプルを開く**

LED ブリンクのサンプルスケッチを開きます: **ファイル > サンプル > 01.Basics > Blink**。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/select-blink.png)

**Arduino IDE に Seeeduino を追加する**

**ツール > ボード > ボードマネージャ**をクリックし、検索バーに「MegaAVR」と入力します。**Arduino MegaAVR** を見つけてインストールします。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/install.png)

**ボードを選択する**

**ツール > ボード**メニューで、使用する Arduino に対応する項目を選択します。ここでは **Arduino Uno WIFI Rev2** を選択します。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/board.png)

**シリアルポートを選択する**

**ツール > シリアルポート**メニューから Arduino ボードのシリアルデバイスを選択します。通常、COM3 以上が選択されます (**COM1** と **COM2** は通常ハードウェアシリアルポートに予約されています)。確認するには、Arduino ボードを取り外してメニューを再度開きます。消える項目が Arduino ボードです。ボードを再接続してそのシリアルポートを選択します。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/port.png)

**プログラムをアップロードする**

環境内で「アップロード」ボタンをクリックするだけです。数秒待つと、アップロードが成功した場合、ステータスバーに「アップロード完了」と表示されます。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png)

アップロードが完了して数秒後、ボード上のピン 13 (L) LED がオレンジ色で点滅し始めるはずです。点滅した場合、おめでとうございます！Arduino が正常に動作しています。問題がある場合は、トラブルシューティングの提案を参照してください。

## リソース

- **回路図**    

   [Seeeduino Crypto 回路図](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/res/Seeeduino-Crypto-(ATmega4809%26ECC608).zip)  

- **データシート**

   [ATECC608A-MAHDA-S データシート](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/res/ATECC608A-MAHDA-S-datasheet.pdf)

   [ATMEGA32U4-MU データシート](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/res/ATMEGA32U4-MU-datasheet.pdf)

   [ATMEGA4809-AFR データシート](https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/res/ATMEGA4809-AFR-datasheet.pdf)  

- **参考資料**

   [Arduino の使い方](https://www.arduino.cc/en/Guide/HomePage)

   [Arduino 言語リファレンス](https://www.arduino.cc/en/Reference/HomePage)

   [Arduino ソフトウェア (IDE) のダウンロード](https://www.arduino.cc/en/Main/Software)

   [Arduino FAQ](https://www.arduino.cc/en/Main/FAQ)

   [Arduino の紹介](https://www.arduino.cc/en/guide/introduction)

   [Arduino の Wikipedia ページ](https://en.wikipedia.org/wiki/Arduino)

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なるご要望やお好みに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>