---
description: Seeeduino Cortex M0
title: Seeeduino Cortex M0
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino-Cortex-M0
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/img/102010248-wiki.jpg)

Seeeduino Cortex-M0+は、32ビットARM® Cortex®-M0+プロセッサをベースとしたAtmel SAMD21 MCUを搭載しています。この強力なコアの助けを借りて、SAMD21はAVRよりもはるかに強力であり、AVRチップでは実現できない多くの機能やより複雑な計算を実現することができます。

[Seeeduino M0+](https://www.seeedstudio.com/tag/Seeeduino-M0%2B.html)は、Arduino Zeroと完全に互換性のある新しい製品ラインであり、このシリーズには現在、Seeeduino Cortex-M0+と[Seeeduino Lotus Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)があります。

Seeeduino Cortex-M0+は、Seeeduino Lotus Cortex-M0+と同じヘッダーピン配置を持ち、14のデジタルI/O（10のPWM出力）と6つのアナログI/Oを含んでいます。同時に、2つのI2Cと1つのUARTを含む3つのオンボードGroveコネクタを提供します。より多くのGroveポートを使用したい場合は、[Base Shield V2](https://www.seeedstudio.com/Base-Shield-V2.html)をこのボードと組み合わせて使用することができます。

さらに、Seeeduino Cortex-M0+はUSB Type Cインターフェースを備えた初のSeeeduino開発ボードです。USB Type Cは未来のトレンドであり、プラグがリバーシブルで、高速なデータ転送率を持ち、より拡張性のある機能を提供します。今後、Type Cを搭載した開発ボードをさらに紹介していきます。Type Cを使用して電力供給やデータ転送を行うことができるほか、7〜15VのDCジャックを使用してこのボードに電力を供給することも可能です。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html)

## 特徴

- 最大48MHzで動作するARM Cortex-M0+ CPU
- 256KBのインシステム自己プログラム可能なフラッシュメモリ
- 32KBのSRAMメモリ
- Arduino Zeroと互換性あり
- 10ビット、350kspsのデジタル-アナログコンバータ（DAC）
- 最大20チャンネルの12ビット、350kspsのアナログ-デジタルコンバータ（ADC）
- 電力供給およびデータ転送用のUSB Type C

## 仕様

|項目|値|
|------------|-----------|
|マイクロコントローラ|SAM D21|
|電力入力|USB Type C|
|動作電圧|USB:5V|
|デジタルI/Oピン|14|
|PWMチャンネル|10|
|アナログ入力チャンネル|6|
|I/OピンあたりのDC電流|40 mA|
|I/O入力電圧|3.3V|
|SRAM|32 KB|
|フラッシュメモリ|256KB|
|最大CPU周波数|48 MHz|

## ハードウェア概要

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/img/hardware.png)

### UART

[Seeed M0シリーズボード](https://www.seeedstudio.com/tag/SEEEDUINO-M0%2B.html)には、以下の図に示されるように3つのUARTポートがあります。Arduino IDEでコードを書く際には、対応するポート名を使用する必要があります。

```
SerialUSB または Serial
```
Type Cポート用;

```
Serial1
```
Grove UARTポート用;

そして

```
Serial2
```
ヘッダーピンのUARTピン用

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/img/UART(1).jpg)

### ピン配置

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/img/102010248-pinout.jpg)

## はじめに

### ハードウェア

**必要な材料**

- Seeeduino Cortex-M0+ x1  
- コンピュータ x1  
- USB Type-C ケーブル x1  

:::tip
    一部のUSBケーブルは電力供給のみでデータ転送ができない場合があります。USBケーブルをお持ちでない場合や、データ転送が可能かどうかわからない場合は、[Seeed USB Type-C サポート USB 3.1](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html)をご確認ください。
:::

USBケーブルを使用してSeeeduino Cortex-M0+をコンピュータに接続します。青色の電源LED（**PWR**とラベル付けされています）が点灯するはずです。

### ソフトウェア

- **ステップ1. Arduinoソフトウェアをインストールする必要があります。**

[![ここに画像の説明を入力](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Arduinoアプリケーションを起動する**

以前にダウンロードしたArduinoアプリケーション（arduino.exe）をダブルクリックします。

:::note
    Arduinoソフトウェアが異なる言語で読み込まれる場合は、設定ダイアログで変更できます。詳細は[Arduinoソフトウェア（IDE）ページ](https://www.arduino.cc/en/Guide/Environment#languages)をご覧ください。
:::

- **ステップ2. Blink例を開く**  
LED点滅の例スケッチを開きます：**ファイル > Examples > 01.Basics > Blink**。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" />
    <figcaption><i>Blinkのパス</i></figcaption>
  </figure>
</div>

- **ステップ3. Seeedボードを追加する**  
[Seeedボードインストールガイド](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/)に従い、キーワード**Seeeduino samd**を検索して、Arduino IDEに**Seeeduino Zero**を追加してください。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/board2.png" />
    <figcaption><i>キーワードは<b>samd_zero</b></i></figcaption>
  </figure>
</div>

- **ステップ4. ボードとポートを選択する**  
**ツール > ボード**メニューから、使用しているArduinoに対応するエントリを選択します。**Seeeduino Zero**を選択してください。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/board1.png" />
    <figcaption><i>正しいボードを選択</i></figcaption>
  </figure>
</div>

Arduinoボードのシリアルデバイスを**ツール | シリアルポート**メニューから選択します。通常、COM3以上が該当します（**COM1**と**COM2**は通常ハードウェアシリアルポートに予約されています）。確認するには、Arduinoボードを取り外してメニューを再度開き、消えたエントリがArduinoボードであるはずです。ボードを再接続して、そのシリアルポートを選択してください。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/port.png" />
    <figcaption><i>正しいポートを選択</i></figcaption>
  </figure>
</div>

- **ステップ5. プログラムをアップロードする**  
環境内で「アップロード」ボタンをクリックするだけです。数秒待つと、アップロードが成功した場合、ステータスバーに「Done uploading.」というメッセージが表示されます。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" />
    <figcaption><i>コードをアップロード</i></figcaption>
  </figure>
</div>

アップロードが完了して数秒後、ボード上のピン13（L）LEDが点滅し始めるはずです。もしそうなれば、おめでとうございます！Arduinoのセットアップが完了しました。問題がある場合は、トラブルシューティングの提案を参照してください。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/res/Seeeduino%20Cortex-M0%2B%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース

- **[ZIP]** [Seeeduino Cortex-M0+ v1.0 Eagle ファイル](https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/res/Seeeduino%20Cortex-M0%2B%20v1.0.zip)
- **[PDF]** [SAMD21 データシート](https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/res/SAM-D21-Datasheet.pdf)



:::note
        Seeeduino Cortex-M0+ の UART を使用するには、`` を使用する必要があります。
:::


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>