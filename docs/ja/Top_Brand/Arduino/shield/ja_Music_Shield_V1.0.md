---
description: Music Shield V1.0
title: Music Shield V1.0
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Music_Shield_V1.0
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name:  Music Shield V1.0
category: Discontinued
bzurl:
oldwikiname: Music_Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Music_Shield_V1-0
sku:
tags:

--- -->

![](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/img/Musicshieldnew500.jpg)

Music Shieldはプロフェッショナルなオーディオコーデックです。Arduino、Seeeduino、Seeeduino Mega、Arduino Megaと連携して動作します。VS1053b ICをベースにしており、Seeedが提供するArduinoライブラリを使用して、MicroSDカードに保存されたさまざまな音楽フォーマットを再生できます。

注意：録音は現在、Seeeduino MegaおよびArduino Megaでのみサポートされています。

## 特徴 ##

- Arduino、Seeeduino、Arduino Mega、Seeeduino Megaに対応

- 2つの制御プッシュボタンと1つのノブスイッチ

- MicroSDカードから音楽を再生可能。対応フォーマット：MP3、WAV、MIDI、Ogg Vorbis

- 外部DAC用のI2Sインターフェース

- 再生用のヘッドフォン/ラインアウト

- OGG形式で録音可能なラインイン

- ±1dBの周波数応答で優れた音質

- FCC認証取得

## 仕様 ##

|項目| 最小|標準|最大| 単位|
|--|--|--|--|--|
| 電圧|4.5| 5|5.5| VDC|
| 電流| /| /| 70|mA|
 |出力S/N比（Aウェイト付き）|/| 60|/|dB|
 |チャンネル分離度（Aウェイト付き）|/|50|/|dB|
 |周波数応答|-1|/|1|dB|
 |信号歪み|/|/|0.5%|/|
 |最大出力（各チャンネル16Ω負荷時）|500|/|/|mV|
 |オーディオインターフェース|3.5mmオーディオジャック|||/|
 |対応フォーマット|MP3、WAV、MIDI、Ogg|||/|
 |対応SDカード|Micro SDカード|||/|
 |ESD接触放電|±4|||KV|
 |ESD空気放電|±8|||/|
|寸法|80.4x52.5x13.9|||mm|
 |正味重量|11±2|||g|

## インターフェース機能 ##

![](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/img/MusicShield-hard.jpg)

**多機能ボタン:** 左に回すと前の曲を再生、右に回すと次の曲を再生、押し込むと一時停止と再開を切り替えます。

**ボリュームインジケータLED（赤）:** ボリュームを上げると赤いLEDが明るくなります。

**再生/一時停止インジケータLED（緑）:** 再生中は緑のLEDが点滅します。

**ラインアウト:** 16Ωまたは32Ωのイヤホンを駆動可能。

**ラインイン:** 他のリソースからの音声を録音するために使用します。

**Micro SDカード:** FAT16またはFAT32に対応し、2GB以上のサイズはサポートされていません。（注意：ライブラリに含まれるサンプルコードはFAT16形式のカードのみ使用可能です）

**I2SおよびGPIO:** デジタルオーディオ出力用。

**ISPインターフェース:** Mega使用時にSPIポートを提供するために保持されています。

### Arduinoでのピン使用 ###

**D0** - 未使用。

**D1** - 未使用。

**D2** - iPodドックからの信号を受信するために使用（iPodドックを使用しない場合は独自のアプリケーションに使用可能）。

**D3** - ボリュームアップボタンからの信号を受信するために使用（スイッチを使用しない場合は独自のアプリケーションに使用可能）。

**D4** - 次の曲機能のスイッチからの信号を受信するために使用（スイッチを使用しない場合は独自のアプリケーションに使用可能）。

**D5** - 再生＆停止および録音機能のスイッチからの信号を受信するために使用（スイッチを使用しない場合は独自のアプリケーションに使用可能）。

**D6** - 前の曲機能のスイッチからの信号を受信するために使用（スイッチを使用しない場合は独自のアプリケーションに使用可能）。

**D7** - ボリュームダウンボタンからの信号を受信するために使用（スイッチを使用しない場合は独自のアプリケーションに使用可能）。

**D8** - 緑色LEDの指示に使用（スイッチを使用しない場合は独自のアプリケーションに使用可能）。

**D9** - 赤色LEDの指示に使用（スイッチを使用しない場合は独自のアプリケーションに使用可能）。

**D10** - SPIチップセレクトに使用。

**D11** - SPI MOSIに使用。

**D12** - SPI MISOに使用。

**D13** - SPI SCKに使用。

**D14(A0)** - VS1053のリセットに使用。

**D15(A1)** - VS1053のデータ要求に使用。

**D16(A2)** - VS1053のデータセレクトに使用。

**D17(A3)** - VS1053のチップセレクトに使用。

**D18(A4)** - 未使用。

**D19(A5)** - 未使用。

## 使用方法 ##

### ハードウェアのインストール ###

Micro SDカードとイヤホンを挿入します。Music ShieldをArduino/Seeeduinoに接続します。USBケーブルを使用してボードをPCに接続します。  
![](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/img/MusicInstall.jpg)

### ソフトウェアのインストール ###

音楽を再生する:

1. Micro SDカードに曲が入っていることを確認してください。

2. [File:Music v1 14.zip](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_v1_14.zip) と [File:NewSoftSerial.zip](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/NewSoftSerial.zip) をダウンロードしてください。

3. これら2つのパッケージを解凍し、Arduino-0022プログラムの以下のディレクトリに配置してください:  
   `..\arduino-0022\libraries`

4. **[Linuxの場合は無視してください]** 新しい **portpins.h** ファイルをダウンロードし、Arduino-0022プログラムのデフォルトのportpins.hファイルを置き換えてください:  
   `..\arduino-0022\hardware\tools\avr\avr\include\avr`

5. Arduinoボード（Arduino UNOやDuemilanoveなど）を選択してください。

6. Arduinoプログラムを実行し、スケッチをコンパイルしてArduinoボードにアップロードしてください。

7. あとは楽しむだけです。

**音楽を録音する:**（ATmega1280およびATmega2560ベースのボードのみ対応）

1. **Arduino** のRESETボタンを押す前に、再生/停止ノブを押してください。

2. RESETボタンを1秒間押した後、再生/停止ノブを離してください。Music Shieldが録音を開始すると、緑と赤のLEDが同期して点滅します。

3. 再生/停止ノブを押すと録音が停止します。

Arduino 1.0の場合:
注意: Demo-1とDemo-2の間で使用されるFat16ライブラリは異なるため、2つのデモを使用する際には対応するライブラリをダウンロードしてください。また、2つのライブラリは同時に存在できないため、片方を削除してからもう片方を使用してください。

- Demo 1: SDライブラリを使用

このデモでは、Arduino 1.0に付属しているSDライブラリを使用します。

1. Micro SDカードに曲が入っていることを確認してください。

2. [File:MusicPlayer v1 7.zip](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/MusicPlayer_v1_7.zip) と [Fat16](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Demo1_Fat16.zip) をダウンロードしてください。

3. パッケージを解凍し、Arduino-1.0プログラムの以下のディレクトリに配置してください:  
   `..\arduino-1.0\libraries`

4. Arduinoボード（Arduino UNOやDuemilanoveなど）を選択してください。

5. **[Linuxの場合は無視してください]** 新しい **portpins.h** ファイルをダウンロードし、Arduino-1.0プログラムのデフォルトのportpins.hファイルを置き換えてください:  
   `..\arduino-1.0\hardware\tools\avr\avr\include\avr`

6. Arduinoプログラムを実行し、`music_v1_2 -> musicPlayAll` スケッチをコンパイルしてArduinoボードにアップロードしてください。

- Demo 2: Fat16ライブラリを使用

このデモでは、オープンソースライブラリ [Music_Shield_Demo_2_Library](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_Shield_Demo_2_Library.zip) を使用します。このデモには2つのスケッチがあります:  
MusicPlayRandomlyスケッチを使用すると、音楽をランダムに再生できます。MusicPlayWithNameを使用すると、名前で指定した曲を再生できます。（注意: このデモはDemo-1とライブラリ内で共存できません）

1. Micro SDカードに曲が入っていることを確認してください。

2. [Music_Shield_Demo_2_Library](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_Shield_Demo_2_Library.zip) をダウンロードしてください。

3. **[Linuxの場合]** `libraries/Fat16/Fat16util.h` を `libraries/Fat16/Fat16Util.h` にコピーしてください（utilとUtilの違いに注意）。インクルードのケースが間違っているため、これが最も簡単な回避策です。

4. これら2つのパッケージを解凍し、Arduino-1.0プログラムの以下のディレクトリに配置してください:  
   `..\arduino-1.0\libraries`

5. Arduinoボード（Arduino UNOやDuemilanoveなど）を選択してください。

6. **[Linuxの場合は無視してください]** 新しい **portpins.h** ファイルをダウンロードし、Arduino-1.0プログラムのデフォルトのportpins.hファイルを置き換えてください:  
   `..\arduino-1.0\hardware\tools\avr\avr\include\avr`

7. Arduinoプログラムを実行し、`MusicShieldNewSdLib` スケッチをコンパイルしてArduinoボードにアップロードしてください。

注意: ライブラリ内の特定の関数の具体的な使用方法については、Music Shield V2.0の[ソフトウェアインストール](https://wiki.seeedstudio.com/ja/Music_Shield_V1.0/#software-installation)を参照してください。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/MusicShielEagleFiles.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース ##

- **[Eagle]**[Music Shield Eagle ファイル](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/MusicShielEagleFiles.zip)
- **[PDF]**[Music Shield PDF](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music%20Shield.pdf)
- **[Eagle]**[Music Shield 回路図](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music%20Shield.sch)
- **[PDF]**[Music Shield 回路図 PDF](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_Shield.pdf)
- **[Library]**[Arduino 0022 用 Music Shield ソースコードファイル](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_v1_14.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>