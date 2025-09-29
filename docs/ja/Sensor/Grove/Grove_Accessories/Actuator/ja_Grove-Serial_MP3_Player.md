---
title: Grove - シリアル MP3 プレーヤー
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-Serial_MP3_Player/
slug: /ja/Grove-Serial_MP3_Player
last_update:
  date: 05/15/2025
  author: gunengyu
---


[![](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/img/Mp3sensor_02.jpg)](https://www.seeedstudio.com/depot/grove-serial-mp3-player-p-1542.html)

Grove-シリアル MP3 プレーヤーは、高品質な MP3 オーディオチップ---WT5001 をベースに設計されたシンプルな MP3 プレーヤーデバイスです。8KHZ～44.1kHZ のサンプリング周波数の MP3 および WAV ファイル形式をサポートします。この製品には、標準的な UART Grove インターフェース、デュアルトラックヘッドフォンジャック、外部インターフェース、さらに Micro SD カードインターフェースなど、いくつかの周辺ポートがあります。シリアルポートツールを介してモジュールにコマンドを送信することで、MP3 の再生状態を制御できます（例：曲の切り替え、音量の変更、再生モードの変更など）。シンプルなモジュールに見えますが、非常に強力な機能を備えています。音質がどのようなものか気になりますか？ぜひ体験してみてください！

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/grove-serial-mp3-player-p-1542.html)

特徴
--------

- 標準 Grove インターフェース
- 非同期シリアルポートによる再生モード制御
- ビジーインジケーター
- リセットボタン
- 標準 Micro SD カードインターフェース
- FAT16 および FAT32 ファイルシステムをサポート

:::tip
    Grove モジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上記で対応プラットフォームとして挙げられているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能な MCU プラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

ハードウェア概要
-----------------

![](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/img/Mp3_interface.jpg)

- ①：左チャンネル Grove インターフェース
- ②：ヘッドセットインターフェース：3.5mm ヘッドフォン
- ③：右チャンネル Grove インターフェース
- ④：WT5001
- ⑤：LED インジケーター：音楽再生中に LED が点灯します。
- ⑥：UART Grove インターフェース
- ⑦：SD カード：Micro SD カード（≤2GB）

## Arduinoで遊ぼう

### ハードウェア

Grove - Serial MP3 PlayはArduino/Seeeduinoで制御できます。また、使用できるSerial_MP3テストコードも用意されています。簡単に始められると思います。詳細な情報については、以下の説明をご参照ください。ハードウェアの接続方法は以下の通りです：

- Grove - Serial MP3 PlayをArduino/Seeeduinoのデジタル2ポートに接続します。なお、ピン番号は自由に変更できますが、その場合はコードも対応して変更してください。その後、Arduino/SeeeduinoをUSBケーブルでPCに接続します。
- Grove - Serial MP3 Playにイヤホンを差し込みます。これでハードウェア部分の準備は完了です。

### ソフトウェア

- **ステップ1.** [Grove-MP3 v2.0](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player) をGithubからダウンロードします。
- **ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library) を参照して、Arduino用のライブラリをインストールします。
- **ステップ3.** **Seeed_Serial_MP3_Player/examples/WT2003S_Terminal_Player** の例を選択し、Arduinoにアップロードします。コードのアップロード方法が分からない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/) を確認してください。
- **ステップ4.** COMターミナルに以下のような情報が表示されます。

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/COM.png)

- **ステップ5.** 関連するコマンドを入力して音楽を再生してください。

:::tip
    このライブラリはAVR/SAMD/STM32F4デバイスをサポートしており、ハードウェアおよびソフトウェアシリアルの両方に対応しています。
:::

シリアルポートには2種類あります。一つはCOMSerialで、Grove-MP3モジュールとの通信ポートを指します。もう一つはShowSerialで、PCとの接続に使用されるシリアル情報表示ポートを指します。

ほとんどのArduinoボードには少なくとも1つのシリアルポートがあり、一部のボード（Arduino Megaなど）には複数のシリアルポート（4つのシリアルポート）があります。デジタルピン0（RX）と1（TX）で通信し、USBを介してコンピュータと接続します。そのため、ピンD0とピンD1にUARTデバイスを接続する場合、USB経由でプログラムをダウンロードする前にそれらを取り外す必要があります。そうしないと、アップロードが失敗する原因となります。ハードウェアシリアルポートの数よりも多くのシリアルポートが必要な場合は、ソフトウェアシリアルを使用できます。ソフトウェアシリアルは、シリアルハードウェアをエミュレートするためにソフトウェアを使用しますが、データの送受信にはArduinoコントローラの多大な支援が必要なため、ハードウェアシリアルほど高速または効率的ではありません。シリアルに関する詳細情報は、[Seeed Arduino Serial](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Serial/) を参照してください。

- **AVR:** 以下の例では、ソフトウェアシリアルをCOMSerial（Grove-MP3モジュールとの接続）として定義しています。すべてのデジタルピンがソフトウェアシリアルに使用できるわけではありません。詳細なピンについては[Software Serial](https://www.arduino.cc/en/Reference/SoftwareSerial) を参照してください。ハードウェアシリアルをShowSerial（PCとの接続）として定義しています。Arduino Megaを使用する場合、ハードウェアシリアルをShowSerialに接続し、他のSerial1/Serial2/Serial3をCOMSerialに接続できます。そのため、AVR Megaの設定を参照してください。

- **SAMD:** 以下の例では、SAMDはソフトウェアシリアルをサポートしていません。ハードウェアシリアル **Serial1** を使用してGrove-MP3モジュールと通信し、**SerialUSB** を使用してPCにメッセージを表示します。

- **STM32F4:** 以下の例では、ハードウェアシリアル **Serial** を使用してGrove-MP3モジュールと通信し、**SerialUSB** を使用してPCにメッセージを表示します。

:::note
    シリアルに関する詳細情報は、[Seeed Arduino Serial](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Serial/) を参照してください。
:::

```
#ifdef __AVR__
#include <SoftwareSerial.h>
SoftwareSerial SSerial(2, 3); // RX, TX
#define COMSerial SSerial
#define ShowSerial Serial 

WT2003S<SoftwareSerial> Mp3Player;
#endif

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
#define COMSerial Serial1
#define ShowSerial SerialUSB 

WT2003S<Uart> Mp3Player;
#endif

#ifdef ARDUINO_ARCH_STM32F4
#define COMSerial Serial
#define ShowSerial SerialUSB 

WT2003S<HardwareSerial> Mp3Player;
#endif
```

- これで、SDカードに保存された曲を聴くことができます。再生モードではD1インジケータが点灯し、一時停止モードではインジケータが点滅します。さらに多くの体験があなたを待っています！

別の方法として、シリアルツールを使用してMP3再生モードを制御することもできます。この方法では、[UartSBee](https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=63_66) を使用してMP3をPCに接続する必要があります。ハードウェアの接続方法は以下の通りです：
![](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/img/Using_UartSBee_to_Control_MP3.jpg)

接続が完了したら、シリアルツールを開いてコマンドを送信します。具体的なコマンドについては、リファレンス部分をご覧ください！
![](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/img/Serial_tool_to_send_commands.jpg)

さらに多くの体験があなたを待っています！

参考資料
----------

一般的なコマンドの説明：

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
コマンド名
</th>
<th scope="col">
コマンド形式
</th>
<th scope="col">
説明
</th>
</tr>
<tr>
<th scope="row">
一時停止
</th>
<td>
7E 02 A3 7E
</td>
<td>
このコマンドを初めて送信すると音楽が停止します。このコマンドを再送信すると、再生が再開されます。
</td>
</tr>
<tr>
<th scope="row">
停止
</th>
<td>
7E 02 A4 7E
</td>
<td>
このコマンドは次の曲を再生するか、最後の曲を再生中の場合は最初の曲を再生するトリガーになります。
</td>
</tr>
<tr>
<th scope="row">
次へ
</th>
<td>
7E 02 A5 7E
</td>
<td>
このコマンドは次の曲を再生するトリガーになります。最後の曲を再生中の場合は最初の曲を再生します。
</td>
</tr>
<tr>
<th scope="row">
前へ
</th>
<td>
7E 02 A6 7E
</td>
<td>
このコマンドは前の曲を再生するトリガーになります。最初の曲を再生中の場合、このコマンドを送信すると最後の曲が再生されます。
</td>
</tr>
<tr>
<th scope="row">
音量調整
</th>
<td>
7E 03 A7 1F 7E
</td>
<td>
音量レベルは00から31までの32段階です。00はミュート、31は最大音量です。
</td>
</tr>
<tr>
<th rowspan="4" scope="row">
指定再生モード
</th>
<td rowspan="4">
7E 03 A9 XX 7E
</td>
<td>
XX=00は単一再生（リピートなし）を意味します（デフォルト）
</td>
</tr>
<tr>
<td>
XX=01は単一リピート再生モードを意味します
</td>
</tr>
<tr>
<td>
XX=02は全トラックリピート再生モードを意味します。
</td>
</tr>
<tr>
<td>
XX=03はランダム再生を意味します。
</td>
</tr>
</table>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/res/Grove-UART_MP3_Play_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [Grove - Serial MP3 Play Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/res/Grove-UART_MP3_Play_Eagle_File.zip)
- [Grove - Serial MP3 Play 回路図（PDF形式）](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/res/Grove-Serial_MP3_Player.pdf)
- [GitHub上のデモコード](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player)
- [WT5001 データシート](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/res/WT5001_datasheet_V1.5.pdf)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_Serial_MP3_Player から作成されました -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>