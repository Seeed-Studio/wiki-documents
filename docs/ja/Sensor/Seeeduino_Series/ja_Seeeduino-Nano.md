---
description: Seeeduino Nano
title: Seeeduino Nano
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino-Nano
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像を入力してください](https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/seeeduino-Nano-wiki.jpg)

Seeeduino Nanoは、[Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html)/Arduino UNOに似たコンパクトなボードであり、ピン配置とサイズにおいて[Arduino Nano](https://store.arduino.cc/usa/arduino-nano)と完全に互換性があります。

Seeeduino V4.2と同様に、Seeeduino NanoはAtmega328P -- 8ビットAVRマイクロコントローラーを中心に構築されています。そのため、両方のボードで同じプログラムコードを使用することができます。ただし、2つのボードの寸法は大きく異なります。サイズは4分の1以下ですが、ほぼ同じ機能を備えており、Seeeduino Nanoはプロジェクトのスペースを節約し、スペースが制約される場面により適しています。

![画像を入力してください](https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/seeeduino-Nano-compare-2.jpg)

Seeeduino Nanoは、Arduino Nanoと同じ機能と高品質な体験を提供しながら、価格は半分以下です。一方で、Seeeduino NanoはArduino Nanoと比較して以下の改善を行っています。1- Mini-USBをType-Cに変更し、対称的でリバーシブルな設計に。2- Grove I2Cコネクタを1つ追加。Groveシステムを利用することで、センサーやアクチュエータを簡単に接続して使用できます。

さらに、オンボードのGroveコネクタが1つだけでは足りない場合を考慮して、[Grove Shield for Arduino Nano](https://www.seeedstudio.com/Grove-Shield-for-Arduino-Nano-p-4112.html)を作成しました。このシールドには、3つのGroveデジタルコネクタ、3つのGroveアナログコネクタ、1つのGrove I2Cコネクタ、1つのGrove UARTコネクタが含まれています。

[![画像を入力してください](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html)

## 特徴

- 43mm*18mmの小型ボード
- 16M ATmega328P
- Arduino Nanoと完全互換
- プログラミングと電源供給用のUSB Type C
- オンボードのGrove I2Cコネクタ
- ブレッドボードに適した設計

## 仕様

|項目|値|
|------------|-----------|
|マイクロコントローラー|ATmega328P|
|電源入力|USB Type C|
|動作電圧|USB:5V|
|デジタルI/Oピン|14|
|PWMチャンネル|6|
|アナログ入力チャンネル|8|
|各I/OピンのDC電流|40 mA|
|I/O入力電圧|5V|
|SRAM|2 KB|
|フラッシュメモリ|32KB|
|最大CPU周波数|16 MHz|

## ハードウェア概要

![画像を入力してください](https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/pinout-1.jpg) 
 
![画像を入力してください](https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/pinout-2.png)

:::note
    I2Cインターフェースにはプルアップ抵抗が装備されていません。使用する際には、4.7kΩの抵抗を使用してVCCにプルアップすることを推奨します。
:::

### 電源

**Type C**ポートを使用して電源を供給する代わりに、**VIN**および**GND**ピンを使用してSeeeduino Nanoに電源を供給することもできます。この場合、VINの入力範囲は7V ~ 12Vです。

![画像を入力してください](https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/Power-1.jpg)
![画像を入力してください](https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/Power-1.jpg)

最大電力パラメータ

|項目|値|
|---|---|
|USB Type Cの最大入力電流|2A|
|VCCの最大出力電流|1A|
|3V3ピンの最大出力電流|200mA| 

## はじめに

### ハードウェア

**必要な材料**

- Seeeduino Nano x1  
- コンピュータ x1  
- USBタイプCケーブル x1  

:::tip
    一部のUSBケーブルは電力供給のみ可能で、データ転送ができない場合があります。USBケーブルを持っていない場合や、使用しているUSBケーブルがデータ転送可能かどうかわからない場合は、[Seeed USBタイプC対応USB 3.1](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html)を確認してください。
:::

USBケーブルを使用してSeeeduino Nanoをコンピュータに接続します。青色の電源LED（**PWR**とラベル付けされています）が点灯するはずです。

### ソフトウェア

- **ステップ1. Arduinoソフトウェアをインストールする必要があります。**

[![画像の説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Arduinoアプリケーションを起動する**

以前にダウンロードしたArduinoアプリケーション（arduino.exe）をダブルクリックします。

:::note
    Arduinoソフトウェアが異なる言語で読み込まれる場合は、設定ダイアログで変更できます。詳細は[Arduinoソフトウェア（IDE）ページ](https://www.arduino.cc/en/Guide/Environment#languages)をご覧ください。
:::

- **ステップ2. Blink例を開く**  
LED点滅の例を開きます: **ファイル > Examples > 01.Basics > Blink**。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" />
    <figcaption><b>図9</b>. <i>Blinkのパス</i></figcaption>
  </figure>
</div>

- **ステップ3. Seeedボードを追加する**  
[Seeedボードインストールガイド](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/)に従い、キーワード**Seeeduino AVR**を検索して**Seeeduino Nano**をArduino IDEに追加してください。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/IDE-1.jpg" />
    <figcaption><b>図10</b>. <i>キーワードは**Seeeduino Nano**です</i></figcaption>
  </figure>
</div>

:::tip 
    Seeeduino AVRボードをインストールする際は、バージョン1.2.1以上を選択してください。
:::

- **ステップ4. ボードとポートを選択する**  
**ツール > ボード**メニューでArduinoに対応するエントリを選択する必要があります。**Seeeduino Nano**を選択してください。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/IDE-2.jpg" />
    <figcaption><b>図11</b>. <i>正しいボードを選択</i></figcaption>
  </figure>
</div>

Arduinoボードのシリアルデバイスを**ツール | シリアルポート**メニューから選択します。これは通常COM3以上になります（**COM1**および**COM2**は通常ハードウェアシリアルポートに予約されています）。確認するには、Arduinoボードを取り外してメニューを再度開き、消えるエントリがArduinoボードであるはずです。ボードを再接続してそのシリアルポートを選択してください。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/IDE-3.jpg" />
    <figcaption><b>図12</b>. <i>正しいポートを選択</i></figcaption>
  </figure>
</div>

- **ステップ5. プログラムをアップロードする**  
環境内で「アップロード」ボタンをクリックするだけです。数秒待つと、アップロードが成功した場合、ステータスバーに「Done uploading.」というメッセージが表示されます。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" />
    <figcaption><b>図13</b>. <i>コードをアップロード</i></figcaption>
  </figure>
</div>

アップロードが完了して数秒後、ボード上のピン13（L）LEDが点滅（オレンジ色）を開始するはずです。点滅した場合、おめでとうございます！Arduinoが正常に動作しています。問題がある場合は、トラブルシューティングの提案を参照してください。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino-Nano/res/Seeeduino%20nano.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース

- **[ZIP]** [Seeeduino nano Eagle ファイル](https://files.seeedstudio.com/wiki/Seeeduino-Nano/res/Seeeduino%20nano.zip)
- **[PDF]** [ATmega328 データシート](https://files.seeedstudio.com/wiki/Seeeduino-Nano/res/ATmega328-datasheet.pdf)



## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>