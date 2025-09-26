---
description: Seeeduino Lotus
title: Seeeduino Lotus
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino_Lotus
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/Seeeduino_Lotus_Cover.jpg)

Seeeduino Lotusは、ATMEGA328マイクロコントローラ開発ボードです。これは、SeeeduinoとBase Shieldを組み合わせたものです。Seeeduino Lotus v1.0は、Atmel ATMEGA328P-MUとCH340を使用しています。ATMEGA328P-MUは、高性能で低消費電力のAVR 8ビットマイクロコントローラです。CH340は、USBからシリアルインターフェースを実現するUSBバス変換チップです。Seeeduino Lotus v1.1では、CH340をCP2102Nに置き換え、MACとの互換性を実現しました。それ以外の変更はSeeeduino Lotus v1.0と同じです。Seeeduino Lotusには、14のデジタル入力/出力（うち6つはPWM出力可能）、7つのアナログ入力/出力、マイクロUSB接続、ICSPヘッダー、12のGrove接続、リセットボタンがあります。

:::warning
Seeeduino Lotus 1.0はWindowsオペレーティングシステムでのみ動作します。Seeeduino Lotus 1.1はWindowsおよびMacで動作します。
:::

## バージョン

---
| リビジョン | 説明                                                   | リリース日      |購入方法|
|----------|-----------------------------------------------------------|--------------|--------------|
| v1.0   | 初回公開リリース（ベータ版）                              | 2014年7月22日  |[![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)|
| v1.1   | CH340をCP2102Nに置き換え、MACとの互換性を実現             | 2016年12月22日 |[![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-Lotus-V1.1-ATMega328-Board-with-Grove-Interface-p-2917.html)|

## アプリケーションアイデア

* DIY
* IoTとスマートホーム
* ロボット
* 学習
* おもちゃ

以下は参考になる面白いプロジェクトです。

|トラックボールで制御する車|FM受信機|木製ガンを作る|
|-------|-------|-------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/example_1.png)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/Fm%20demo.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/gun.jpg)|
|[今すぐ作る](https://community.seeedstudio.com/A-Car-Controlled-by-Track-Ball-p-1132.html)|<a href="/ja/FM_Receiver" ><span><font size={"3"}> 今すぐ作る </font></span></a>|[今すぐ作る](https://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)|

## 特徴

* Arduino UNOと完全互換
* ATmega328マイクロコントローラ
* 12個のオンボードGroveコネクタ
* 14個のデジタルI/Oピン（6つのPWM出力）
* 6つのアナログ入力
* ISPヘッダー
* Arduino UNO-R3シールド互換
* マイクロUSBプログラミングおよび電源供給
* 5V動作電圧

## 仕様

|項目|値|
|------------|-----------|
|マイクロコントローラ|ATmega328P-MU|
|動作電圧|5V|
|デジタルI/Oピン|14|
|PWMチャンネル|6|
|アナログ入力チャンネル|7|
|I/OピンあたりのDC電流|40 mA|
|フラッシュメモリ|32 KB|
|RAM|2 KB|
|EEPROM|1 KB|
|クロックスピード|16 MHz|

## ハードウェア概要

以下の画像は、Seeeduino Lotus のハードウェア機能の概要を示しています。Seeeduino Lotus の各ピンのピンアウトと代替機能は、ピンアウト図に示されています。これを簡易リファレンスとして使用できます。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/seeeduino_lotus_hardware_overview.jpg)

* **LED-D13**  
D13 ピンには LED が接続されています。この LED は、プログラムやスケッチのオンボード LED インジケーターとして使用できます。

* **USB入力**  
USBポートは、PCに接続してプログラミングを行ったり、電源を供給するために使用されます。Micro USB は、ほとんどの Android 搭載スマートフォンやその他のデバイスで見られる一般的な USB バージョンです。おそらく家にこのケーブルが何本もあるでしょう。

* **リセット**  
このボタンは側面に便利に配置されており、シールドが上に置かれている場合でも Seeeduino ボードをリセットできます。他の Arduino ボードでは、ボタンが上部に配置されているためアクセスが難しい場合があります。

* **電源ピンとアナログピン**  
追加のデジタルヘッダーパッドと同様に、これらの追加接続は、特に複数のセンサーやデバイスをブレッドボードを使用せずに電源供給したい場合に、プロジェクトで必要になることが多いと実感しています。

* **Grove コネクタ**  
SeeedStudio には、アナログ、デジタル、I2C、UART 接続を利用できるさまざまなセンサーやデバイスがあります。さらに、独立した Grove コネクタを販売しており、独自のセンサー接続を作成するのに役立ちます。

* **ICSP**  
これは ATmega328P 用の ICSP 接続であり、Arduino Uno、Due、Mega、Leonardo 互換ハードウェア（例: シールド）がこのコネクタを使用する場合に標準の ICSP/SPI 位置に配置されています。このポートの SPI ピン（MISO、SCK、MOSI）は、Arduino Uno と同様にデジタルピン 12、13、11 にも接続されています。

* **USB 2 Uart**  
USB-2-Uart のピンアウトです。これらのパッドは、オンボード ATmega328 をリセットモードにすることで、他の UART デバイスと対話するために使用できます。これにより、Seeeduino Lotus を USB2UART ユーティリティボードとして使用できます。

:::warning  
Micro USB ソケットの取り扱いには注意してください。ソケットが破損する可能性があります。  
:::

## ドライバのインストール

まず以下を行ってください：

* **Micro-USB ケーブルを用意する**  
Micro-USB ケーブルが必要です。Android 搭載スマートフォンのデータケーブルで問題ありません。  
もし見つからない場合は、[こちら](https://www.seeedstudio.com/depot/Micro-USB-Cable-48cm-p-1475.html?cPath=98_100)で購入できます。

* **ボードを接続する**  
USB ケーブルを使用して Arduino ボードをコンピュータに接続します。緑色の電源 LED（**PWR** とラベル付けされています）が点灯するはずです。

:::note  
この CH340 ドライバ（Seeeduino_Lotus V1.0）は、Windows XP、Windows Vista、Windows 7、Windows 8/8.1、Windows 10 に対応しています。  
:::  
[![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/download_driver_for_seeeduino_lotus.png)](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/CH341SER.EXE)

ドライバをダブルクリックしてインストールしてください。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/driver_install.png)

:::note  
この CP2102N ドライバ（Seeeduino_Lotus V1.1）は、Windows XP、Windows Vista、Windows 7、Windows 8/8.1、Windows 10、および Mac に対応しています。  
:::  
[![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/download_driver_for_seeeduino_lotus.png)](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)  

## はじめに

:::note
    この部分は、Windows 10 上で Arduino 1.6.9 を使用して説明しています。
:::
まず最初に、Arduino ソフトウェアをインストールする必要があります。

[![ここに画像の説明を入力](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Arduino アプリケーションを起動する**

事前にダウンロードした Arduino アプリケーション (arduino.exe) をダブルクリックします。

:::note
Arduino ソフトウェアが異なる言語で読み込まれる場合は、設定ダイアログで言語を変更できます。詳細は [Arduino Software (IDE) ページ](https://www.arduino.cc/en/Guide/Environment#languages) を参照してください。
:::

**Blink サンプルを開く**

LED ブリンクのサンプルスケッチを開きます：**ファイル > サンプル > 01.Basics > Blink**。

![ここに画像の説明を入力](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png)

**Seeeduino Lite を Arduino IDE に追加する**

Arduino IDE のボード一覧には *Seeeduino Lite* オプションがありません。[Seeed ボードを Arduino IDE に追加する方法](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/) をクリックして手順を確認してください。

**ボードを選択する**
Arduino に対応するエントリを **ツール > ボード** メニューから選択する必要があります。
ここでは **Seeeduino Lotus** を選択します。

![ここに画像の説明を入力](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/select_seeeduino_lotus.jpg)

**シリアルポートを選択する**
ツール | シリアルポート メニューから Arduino ボードのシリアルデバイスを選択します。通常、COM3 以上が該当します（**COM1** と **COM2** は通常ハードウェアシリアルポートに予約されています）。確認するには、Arduino ボードを取り外してメニューを再度開きます。消えたエントリが Arduino ボードです。ボードを再接続してそのシリアルポートを選択してください。

![ここに画像の説明を入力](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/select_com.jpg)

**プログラムをアップロードする**
次に、環境内の「アップロード」ボタンをクリックします。数秒待つと、アップロードが成功した場合、ステータスバーに「アップロード完了」と表示されます。

![ここに画像の説明を入力](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png)

アップロードが完了して数秒後、ボード上のピン 13 (L) LED が点滅（オレンジ色）を開始するはずです。もしそうなれば、おめでとうございます！Arduino のセットアップが完了しました。問題がある場合は、トラブルシューティングの提案を参照してください。

## Seeeduino Lotus v1.0 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.0_Sch.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Seeeduino Lotus v1.1 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* **回路図**
  * [Seeeduino Lotus Eagle ファイル V1.0](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.0_Sch.zip)
  * [Seeeduino Lotus Eagle ファイル V1.1](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.1.zip)
  * [Seeeduino Lotus SCH PDF ファイル V1.0](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.0_SCH.pdf)
  * [Seeeduino Lotus SCH PDF ファイル V1.1](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino%20Lotus%20v1.1%20SCH.pdf)
  * [Seeeduino Lotus PCB PDF ファイル V1.0](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.0_PCB.pdf)
  * [Seeeduino Lotus PCB PDF ファイル V1.1](https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino%20Lotus%20v1.1%20PCB.pdf)

* **データシート**
  * [ATmega328P](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/ATmega328.pdf)
  * [ATmega16U2](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/ATmega16u2.pdf)

* **参考資料**
  * [Arduino の始め方](https://www.arduino.cc/en/Guide/HomePage)
  * [Arduino 言語リファレンス](https://www.arduino.cc/en/Reference/HomePage)
  * [Arduino ソフトウェア (IDE) のダウンロード](https://www.arduino.cc/en/Main/Software)
  * [Arduino FAQ](https://www.arduino.cc/en/Main/FAQ)
  * [Arduino 入門](https://www.arduino.cc/en/guide/introduction)
  * [Arduino の Wikipedia ページ](https://en.wikipedia.org/wiki/Arduino)
  * [Seeeduino Lotus V1.1 USB ドライバ](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)

## FAQ

**Q1. Arduino UNO と Seeeduino Lotus の違いは何ですか？**

Seeeduino Lotus は Arduino UNO と完全に互換性があります。また、Seeeduino Lotus には 12 個の Grove コネクタがあり、Seeed Studio の Grove モジュールを使用してデモを簡単に作成できます。さらに、Seeeduino Lotus はマイクロ USB を使用して電源供給およびプログラムを行います。

**Q2. Seeeduino Lotus にスケッチをアップロードできません**

以下を確認してください：

* 電源 LED が点灯しているか
* 正しいポートとボード (Seeeduino Lotus) を選択しているか
* Arduino IDE を閉じて再度開き、再試行してください

## プロジェクト

**ダ・ヴィンチ・コード**  
この作品はアートとエレクトロニクスを組み合わせたものです。アート部分はスケルトンを作成し、中密度繊維板の 11 層で構成されています。

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/coding-with-da-vince/the-da-vinci-code-3b91a8/embed" width={350} />

**小さな宇宙、ジェスチャー制御のフロアランプ**  
小さな宇宙は、ジェスチャー制御のフロアランプで、3 本の木製の脚と芸術的なランプヘッドを備えています。

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/100385/the-little-universe-a-gesture-controlled-floor-lamp-323503/embed" width={350} />

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>