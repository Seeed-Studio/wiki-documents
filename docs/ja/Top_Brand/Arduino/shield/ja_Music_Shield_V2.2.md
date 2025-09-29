---
description: Music_Shield_V2.2
title: Music Shield V2.2

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Music_Shield_V2.2
last_update:
  date: 05/15/2025
  author: Eico 

no_comments: false # for Disqus

---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_Shield_Picture.jpg" alt="pir" width={600} height="auto" /></p>

リアルタイムのMIDI楽器/音楽プレーヤーを作る時が来ました！このデバイスはMP3、WMA、WAV、AAC、MIDI、Ogg Vorbisなど多くのフォーマットを再生できます。Music Shieldは、Arduino、Seeeduino、Seeeduino Mega、Arduino Megaと互換性のあるオーディオエンコーダー/デコーダーです。VC1053Bチップをベースにしており、SDカードからの音声ファイルの再生や短時間の録音が可能です。また、ハードウェアの設定を少し変更するだけでMIDIノートを再生することもできます。SPI通信モードを採用しているため、使用するIOポートを最小限に抑え、ユーザーがこのデバイスを独自に開発するのを容易にします。さらに、新しい多機能ボタンにより、ユーザーが操作しやすくなっています。

:::note
録音機能はSeeeduino MegaおよびArduino Megaでのみ動作します。また、使用できるSDカードの最大サイズは2GBです。
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/depot/Music-Shield-V20-p-1372.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

Hardware Overview
-----------------

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_shield_frame.jpg" alt="pir" width={600} height="auto" /></p>

**多機能ボタン:** 音量の変更および曲の選択。

**再生/一時停止インジケータLED (緑):** 再生中に点滅。

**ヘッドセットインターフェース:** 16Ωまたは32Ωのイヤホンを駆動でき、外部オーディオ入力ポートとしても使用可能。

**Micro SDカード:** FAT16またはFAT32に対応。使用できるSDカードの最大サイズは2GB。

**U2:** VS1053B IC、Ogg Vorbis/MP3/AAC/WMA/FLAC/MIDIオーディオコーデック。

**U3, U7:** 74VHC125 IC、クアッドバッファ。

**I2S:** デジタルオーディオの入出力用。

**ISPインターフェース:** Megaシリーズ製品と使用する際にSPIポートを提供。

***Arduinoで使用されるピン***

**再生制御に使用されるピン:**

D3 - 音量アップボタンからの信号を受信。

D4 - 次の曲機能のスイッチからの信号を受信。

D5 - 再生＆停止および録音機能のスイッチからの信号を受信。

D6 - 前の曲機能のスイッチからの信号を受信。

D7 - 音量ダウンボタンからの信号を受信。

D8 - 緑色LEDの指示。

**SPIインターフェースに使用されるピン:**

D10 - SPIチップセレクト。

D11 - SPI MOSI。

D12 - SPI MISO。

D13 - SPI SCK。

**VS1053インターフェースに使用されるピン:**

A0 - VS1053のリセット。

A1 - VS1053のデータ要求。

A2 - VS1053のデータ選択。

A3 - VS1053のチップセレクト。

Getting Started
---------------

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_shield4.jpg" alt="pir" width={600} height="auto" /></p>

:::note
<ol><li>MIDI機能を使用する場合は、ハードウェアの設定を変更する必要があります。</li>
<li>MIDI機能を使用するためにハードウェアの設定を変更した場合、元の状態に戻すまで再生および録音機能を使用することはできません。</li></ol>
:::

### **音楽を再生する**

1. Micro SDカードに曲が入っていることを確認してください。
2. [Music shield V2.0ライブラリ](https://github.com/Seeed-Studio/Music_Shield)をダウンロードします。
3. フォルダを解凍し、Arduinoのライブラリパスにコピーします: ..\arduino-1.0\libraries。

:::note

1. Arduinoがライブラリの読み込み時にエラーを出す場合は、解凍したライブラリのフォルダ名を変更してください。<br />
2. コンパイル時に`arduino.h: No such file or directory`エラーが発生した場合は、サンプルファイル内のヘッダーをArduino.hに変更してください。
:::

**デモ1: 曲を再生する（例: シャッフルモード）**

再生機能を使用するには、まずプレイリストを作成する必要があります。

1. Arduino IDEを再起動します。以下のパスで「creatList」サンプルを開きます: File --> Examples --> MusicPlayer --> creatList。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/OpenCreatListCode.jpg" alt="pir" width={600} height="auto" /></p>

2. 再生モードを設定します。「creatList」内で使用する関数は以下の通りです。

    **名前:** setPlayMode(unsigned char playmode);

    **機能:** 再生モードを設定します。設定できるモードは4つあります: MODE_NORMAL, MODE_SHUFFLE, MODE_REPEAT_LIST, MODE_REPEAT_ONE。それぞれ異なる再生順序を表します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Play_Mode.jpg" alt="pir" width={600} height="auto" /></p>

3. 使用しているArduinoボードの種類を以下のパスで選択します: Tools --> Board --> 例: Arduino UNO。
4. 使用しているシリアルポートを以下のパスで選択します: Tools --> Serial Port --> 例: COM3。
5. コードをアップロードします。「Done uploading」が表示されたらシリアルモニタをクリックし、曲の順序がリストでランダム化されているのを確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Play_List.jpg" alt="pir" width={600} height="auto" /></p>

多機能ボタンを上下に押すと音量が変わります。他の再生モードも試してみてください。

**デモ2: 選択した曲を再生する**

1. このデモでは、SDカード内のすべての曲の中から一部の曲を再生する方法を示します。「addToList」サンプルを以下のパスで開きます: File --> Examples --> MusicPlayer --> addToList。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Select_play.jpg" alt="pir" width={600} height="auto" /></p>

2. プレイリストから曲を選択します。関数addToPlayList(char *songName)内で正確に曲名をリストするだけで再生できます。
ただし、曲がSDカードに保存されており、フォーマットがMP3、WMA、WAV、AAC、MIDI、Ogg Vorbisのいずれかであることを確認してください。

3. コードをアップロードします。アップロードが完了すると、新しく追加した曲が再生されます。

**デモ 3: アナログポートで音量を制御する**

1. Grove-Base Shield を Music Shield に接続し、Grove ケーブルを使用して Rotary の Grove ソケットと Base Shield のアナログポート 4 を接続します。デジタルポートに変更することも可能ですが、その場合はデモコードの定義でポート番号を変更するのを忘れないでください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_shield_5.jpg" alt="pir" width={600} height="auto" /></p>

2. “analogInputControl” の例を開き、Arduino ボードにアップロードします。

3. ノブを回して音楽の音量を変更します。

**デモ 4: 音楽を録音する（ATmega1280 および ATmega2560 ベースのボードのみ対応）**

1. Music Shield ライブラリ内の任意のスケッチをアップロードします（例: "creatList" スケッチ）。シリアルモニタを開くと、SDカード内のオーディオファイルが再生されます。
2. 多機能ボタンを 5 秒間押し続けると、インジケータ LED が消灯します。
3. 再度多機能ボタンを 5 秒間押し続けると、Music Shield が録音を開始し、緑色のインジケータ LED が点滅します。
4. 再度多機能ボタンを素早く押すと、録音が停止します。
5. 録音した内容は最後に再生されます。

**デモ 5: MIDI の使用**

1. このデモでは、3.5mm ジャックを使用して MIDI で音符を再生する方法を紹介します。パス File --> Examples --> MusicPlayer --> MidiDemoPlayer を通じて "MidiDemoPlayer" の例を開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_shield_midi_demo.jpeg" alt="pir" width={600} height="auto" /></p>

2. Arduino UNO にコードをアップロードします。

参考
---------

**MIDI 番号と音符の対応表**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/MIDIlist.gif" alt="pir" width={600} height="auto" /></p>

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/res/Music_Shield_v2.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [Music Shield V2.2 Eagle ファイル](https://files.seeedstudio.com/wiki/Music_Shield_V2.2/res/Music_Shield_v2.2.zip)
- [Music Shield V2.2 回路図.pdf](https://files.seeedstudio.com/wiki/Music_Shield_V2.2/res/Music_Shield_v2.2_pdf.pdf)
- [VS1053 データシート](https://files.seeedstudio.com/wiki/Music_Shield_V2.2/res/VS1053.pdf)
- [Music Shield ライブラリ](https://github.com/Seeed-Studio/Music_Shield)

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Music_Shield_V2.2 から作成されました -->

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>