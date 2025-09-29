---
description: Grove_Speech_Recognizer_Kit_for_Arduino
title: Grove Speech Recognizer Kit for Arduino
keywords:
- Grove_Speech_Recognizer_Kit_for_Arduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove_Speech_Recognizer_Kit_for_Arduino
last_update:
  date: 05/15/2025
  author: Matthew
---


<!-- ---
name: Grove Speech Recognizer Kit for Arduino
category: Arduino
bzurl: https://www.seeedstudio.com/Grove-Speech-Recognizer-kit-for-Arduino-p-2726.html
oldwikiname:  Grove Speech Recognizer Kit for Arduino
prodimagename: LFUUlWtcc3wNmrxDp3yjPy7I.jpg
surveyurl: https://www.research.net/r/Grove_Speech_Recognizer_Kit_for_Arduino
sku:  110020108
--- -->
![](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer_Kit_for_Arduino/img/LFUUlWtcc3wNmrxDp3yjPy7I.jpg)

Grove Speech Recognizer Kit for Arduinoは、スマートホームのプロトタイプ用に設計されており、音声認識や赤外線エミッターなどの基本的な家庭要素を含んでいます。このキットを使用することで、音声認識の機能や応用を迅速に学ぶことができます。ガイドラインにはいくつかの一般的なデモが示されており、例えば「音楽を再生して」という音声コマンドで音楽を再生したり、対応するコマンドに従ってライトをオンにすることができます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Speech-Recognizer-kit-for-Arduino-p-2726.html)

## パーツリスト

---

1. Grove - Speech Recognizer  SKU:101020232

2. [Grove - MP3 v2.0](/ja/Grove-MP3_v2.0)

3. [Grove – RTC](/ja/Grove-RTC)

4. [Base Shield](/ja/Base_Shield_V2)

5. [Grove - Infrared Receiver](/ja/Grove-Infrared_Receiver)

6. [Grove - Infrared Emitter](/ja/Grove-Infrared_Emitter)

## 応用例

---

### テレビをオンにする方法

時々、テレビやエアコンなどを音声で操作したいことがあります。これらのデバイスは赤外線リモコンで操作されるため、まず赤外線リモコンの各ボタンのコードを知る必要があります。その後、そのコードをプログラムに組み込みます。最終的に、音声でボタンコードをトリガーし、赤外線リモコンのようにデバイスを操作することができます。

このデモを作成する前に、以下の必要なコンポーネントを準備してください：

* Grove - Infrared Receiver

* Grove - Infrared Emitter

* Grove - Speech Recognizer

* Base Shield

* Arduino UNO

* 赤外線リモコン

**Grove - Infrared Receiverを使用して赤外線リモコンのコードを取得する**

必要なライブラリをGitHubからダウンロードしてください：[IRSendRev](https://github.com/Seeed-Studio/IRSendRev)。<font color="Red">ライブラリのパスに注意してください: .../arduino/libraries </font>

* 次に、"recv"の例ファイルを開きます：File --&gt; Sketchbook --&gt; libraries --&gt; IRSendRev --&gt; recv。
* プログラムをArduino UNOにアップロードします。

* Base ShieldをArduino UNOに接続し、Grove - ReceiverをBase ShieldのD2ポートに接続します。

```
const int pinRecv = 2;
```

また、ピンの定義を変更することで別のポートを使用することもできます。

* Arduino UNOのモニターを開きます。

任意の赤外線リモコンのボタンを押すと、そのボタンの詳細な情報コードが表示されます。以下のようになります：

![](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer_Kit_for_Arduino/img/IR_Receiver_IR_controller.png)

押したいボタンの詳細情報を書き留めます。以下はボタンの情報です：

```
+------------------------------------------------------+
LEN = 9
START_H: 179    START_L: 88
DATA_H: 11    DATA_L: 33

DATA_LEN = 4
DATA: 0x80    0x7E    0x10    0xEF
DATA: 128    126    16    239
+------------------------------------------------------+
```

**IRSendプログラムを修正する**

次に、ボタンの情報コードを使用します。

* "send"の例ファイルを開きます：File --&gt; Sketchbook --&gt; libraries --&gt; IRSendRev --&gt; send。

* プログラムをArduino UNOにアップロードします。

* Base ShieldをArduino UNOに接続し、Grove - ReceiverをBase ShieldのD3ポートに接続します。

まず、ボタンのデフォルト情報を修正する必要があります：

```
unsigned char dtaSend[20];

void dtaInit()
{
  ............
}
```

以前に書き留めた情報に従ってこれらの情報を修正します：

```
unsigned char dtaSend[20];

void dtaInit()
{
    dtaSend[BIT_LEN]        = 9;            // 送信する必要があるすべてのデータ
    dtaSend[BIT_START_H]    = 179;          // ボタンの論理的な高い持続時間
    dtaSend[BIT_START_L]    = 88;           // ボタンの論理的な低い持続時間
    dtaSend[BIT_DATA_H]     = 11;           // 通信における論理的な「長い」持続時間
    dtaSend[BIT_DATA_L]     = 33;           // 通信における論理的な「短い」持続時間

    dtaSend[BIT_DATA_LEN]   = 4;            // 送信されるデータの数。他の数値の場合、dtaSend[BIT_DATA+x]を増減する必要があります。

    dtaSend[BIT_DATA+0]     = 128;          // 送信されるデータ
    dtaSend[BIT_DATA+1]     = 126;
    dtaSend[BIT_DATA+2]     = 16;
    dtaSend[BIT_DATA+3]     = 239;
    //dtaSend[BIT_DATA+4]     = 192;
    //dtaSend[BIT_DATA+5]     = 63;
}
```

以下のように観察できます：

```
DATA_LEN = 4
```

したがって、これらの2行をメモまたは削除することができます。

```
   //dtaSend[BIT_DATA+4]     = 192;
    //dtaSend[BIT_DATA+5]     = 63;
```

もちろん、多くのボタンを定義することもできます：

```
#include <IRSendRev.h>

#define BIT_LEN         0
#define BIT_START_H     1
#define BIT_START_L     2
#define BIT_DATA_H      3
#define BIT_DATA_L      4
#define BIT_DATA_LEN    5
#define BIT_DATA        6

const int ir_freq = 38;

unsigned char OpenTV[20];
unsigned char CloseTV[20];
unsigned char IncreaseTemp[20];
unsigned char DecreaseTemp[20];

void OpenTVInit()
{
    OpenTV[BIT_LEN]        = 11;
    OpenTV[BIT_START_H]    = 179;
    /*............ omit ............*/
}

void CloseTVInit()
{
    CloseTV[BIT_LEN]        = 11;
    CloseTV[BIT_START_H]    = 179;
    /*............ omit ............*/
}

void IncreaseTempInit()
{
    IncreaseTemp[BIT_LEN]        = 11;
    IncreaseTemp[BIT_START_H]    = 179;
    /*............ omit ............*/
}

void DecreaseTempInit()
{
    DecreaseTemp[BIT_LEN]        = 11;
    DecreaseTemp[BIT_START_H]    = 179;
   /*............ omit ............*/
}

void setup()
{
    OpenTVInit();
    CloseTVInit();
    IncreaseTempInit();
    DecreaseTempInit();
}

void loop()
{
    IR.Send(OpenTV, 38);
    delay(200);
    IR.Send(CloseTV, 38);
    delay(200);
    IR.Send(IncreaseTemp, 38);
    delay(200);
    IR.Send(DecreaseTemp, 38);

    delay(2000);
}
```

**IRSendプログラムに音声認識機能を追加する**

* 音声認識機能を単独で使用するのは非常に簡単です。まずはそのWikiをご覧ください。

以下の表に基づいて必要なボタンを選択できます。[Grove - Speech Recognizer](https://wiki.seeedstudio.com/ja/Seeed_BLE_Shield/)の返り値の表をご参照ください。以下は返り値の表です：

<center>
<table>
<tr>
<th>コマンド</th>
<th>返り値</th>
</tr>
<tr>
<td width="200px">ライトを点ける</td>
<td width="200px">1</td>
</tr>
<tr>
<td>ライトを消す</td>
<td>2</td>
</tr>
<tr>
<td>音楽を再生</td>
<td>3</td>
</tr>
<tr>
<td>一時停止</td>
<td>4</td>
</tr>
<tr>
<td>次へ</td>
<td>5</td>
</tr>
<tr>
<td>前へ</td>
<td>6</td>
</tr>
<tr>
<td>上へ</td>
<td>7</td>
</tr>
<tr>
<td>下へ</td>
<td>8</td>
</tr>
<tr>
<td>テレビを点ける</td>
<td>9</td>
</tr>
<tr>
<td>テレビを消す</td>
<td>10</td>
</tr>
<tr>
<td>温度を上げる</td>
<td>11</td>
</tr>
<tr>
<td>温度を下げる</td>
<td>12</td>
</tr>
<tr>
<td>時間を教えて</td>
<td>13</td>
</tr>
<tr>
<td>ドアを開ける</td>
<td>14</td>
</tr>
<tr>
<td>ドアを閉める</td>
<td>15</td>
</tr>
<tr>
<td>左へ</td>
<td>16</td>
</tr>
<tr>
<td>右へ</td>
<td>17</td>
</tr>
<tr>
<td>停止</td>
<td>18</td>
</tr>
<tr>
<td>開始</td>
<td>19</td>
</tr>
<tr>
<td>モード1</td>
<td>20</td>
</tr>
<tr>
<td>モード2</td>
<td>21</td>
</tr>
<tr>
<td>進む</td>
<td>22</td>
</tr>
</table>
</center>

以下の例では、2つのコマンド「テレビを点ける」と「テレビを消す」を使用します。

* 読み取った後、音声認識プログラムをIRSendプログラムに組み込むことができます。以下は完成したプログラムです：

```
#include <IRSendRev.h>
#include <SoftwareSerial.h>

/*========  IRタイプ ========*/

#define BIT_LEN         0
#define BIT_START_H     1
#define BIT_START_L     2
#define BIT_DATA_H      3
#define BIT_DATA_L      4
#define BIT_DATA_LEN    5
#define BIT_DATA        6
const int ir_freq = 38;                 // 38k

/* ========  送信するIRボタンの数を設定  ========*/

unsigned char OpenTV[20];
unsigned char CloseTV[20];


/*=========  音声認識のピンを選択  ==========*/

#define SOFTSERIAL_RX_PIN  5
#define SOFTSERIAL_TX_PIN  6

SoftwareSerial speech(SOFTSERIAL_RX_PIN,SOFTSERIAL_TX_PIN);


/* =======  IRデータの書き方  ========*/
/* ====  IR受信機を使用してこれらのデータを取得可能  ==== */

void OpenTVInit()
{
    OpenTV[BIT_LEN]        = 9;            // 送信する全データ
    OpenTV[BIT_START_H]    = 180;          // "OpenTV"の論理ハイの持続時間
    OpenTV[BIT_START_L]    = 88;           // "OpenTV"の論理ローの持続時間
    OpenTV[BIT_DATA_H]     = 11;           // 通信中の論理"長い"持続時間
    OpenTV[BIT_DATA_L]     = 33;           // 通信中の論理"短い"持続時間

    OpenTV[BIT_DATA_LEN]   = 4;            // 送信するデータの数。異なる場合はdtaSend[BIT_DATA+x]を増減する必要があります。

    OpenTV[BIT_DATA+0]     = 50;           // 送信するデータ
    OpenTV[BIT_DATA+1]     = 166;
    OpenTV[BIT_DATA+2]     = 80;
    OpenTV[BIT_DATA+3]     = 175;
}

void CloseTVInit()
{
    CloseTV[BIT_LEN]        = 9;            // 送信する全データ
    CloseTV[BIT_START_H]    = 178;          // "CloseTV"の論理ハイの持続時間
    CloseTV[BIT_START_L]    = 89;           // "CloseTV"の論理ローの持続時間
    CloseTV[BIT_DATA_H]     = 10;           // 通信中の論理"長い"持続時間
    CloseTV[BIT_DATA_L]     = 33;           // 通信中の論理"短い"持続時間

    CloseTV[BIT_DATA_LEN]   = 4;            // 送信するデータの数。異なる場合はdtaSend[BIT_DATA+x]を増減する必要があります。

    CloseTV[BIT_DATA+0]     = 50;           // 送信するデータ
    CloseTV[BIT_DATA+1]     = 166;
    CloseTV[BIT_DATA+2]     = 168;
    CloseTV[BIT_DATA+3]     = 87;
}


void setup()
{
    OpenTVInit();
    CloseTVInit();
    Serial.begin(9600);
    speech.begin(9600);
    speech.listen();
}

void loop()
{
    int a=0;

    if(speech.available())
    {
        a = speech.read();    // 音声認識機から返り値を読み取る
        switch (a)
        {
            case 9:                     // もし(返り値)なら(IRデータを送信)
            IR.Send(OpenTV, 38);
            delay(1000);
            break;
            case 10:
            IR.Send(CloseTV, 38);
            delay(1000);
            break;
            default:
            break;
        }
    }
}
```

### 音楽を制御する方法

音声認識機能のコマンドを見ると、「音楽を再生」「一時停止」「停止」「前へ」「次へ」など、音楽に関連する多くのコマンドがあります。では、この音声音楽ボックスを作りましょう！

必要なライブラリをGitHubからダウンロードしてください：
[Grove_Serial_MP3_Player_V2.0](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player.git);
ライブラリ、[Grove - MP3 v2.0](/ja/Grove-MP3_v2.0)、<font color="Red">ライブラリのパスに注意してください：.../arduino/libraries </font>。

**Grove - MP3 v2に関する便利な関数**

Grove - MP3にはいくつかの便利な基本関数があります：

```
PlayPause();    // 音楽を一時停止
PlayResume();   // 音楽を再開
PlayNext();     // 次の曲
PlayPrevious(); // 前の曲
PlayLoop();     // 全曲をループ再生
SetVolume(uint8_t volume);  // 音量を設定。デフォルト値は"0x0E"、範囲は0x00から0x1E。
IncreaseVolume();  // 音量を上げる
DecreaseVolume();  // 音量を下げる
```

しかし、注意が必要な特殊な関数もあります：

* SelectPlayerDevice(uint8_t device)。_デフォルトのデバイス値は0x02で、SDカードをプレイヤーデバイスとして選択します。_

```
SelectPlayerDevice(0x02);
```

* SpecifyMusicPlay(uint16_t index)。_名前で曲を再生します。_

<dl><dd>曲の名前に注意してください。以下の形式のように設定できます：</dd></dl>

![](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer_Kit_for_Arduino/img/Type_of_songs.png)

<dl><dd>この関数を使用して「005」という曲を再生できます：</dd></dl>

```
SpecifyMusicPlay(5);
```

* SpecifyfolderPlay(uint8_t folder, uint8_t index);   // 指定したフォルダ内の名前で曲を再生します

<dl><dd>さらに、新しいフォルダで音楽を再生する場合、前述の機能が便利です。</dd></dl>

![](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer_Kit_for_Arduino/img/Form_of_folder.png)

:::note
フォルダのインデックス範囲は01-99です。そのため、フォルダ名は01から99までの任意の数字になります。1から9の数字については、フォルダ名を01-09として追加する必要があります。
:::

例えば、フォルダ「01」の中の「005」を再生したい場合、以下のようにします：

```
SpecifyfolderPlay(1,5);
```

* その他の注意点：

各曲には再生時間があります。そのため、曲を1つずつ指定して再生したい場合、以下の2つの方法から選べます：

```
delay(length of time);  // 曲が再生されるまでの時間を遅延させる

while(QueryPlayStatus() != 0);  // 戻り値: 0: 再生終了; 1: 再生中

```

通常、後者の方法を使用します。例えば：

```

SpecifyMusicPlay(1);
while(QueryPlayStatus() != 0);
SpecifyMusicPlay(2);
while(QueryPlayStatus() != 0);
SpecifyMusicPlay(3);
while(QueryPlayStatus() != 0);

```

**統合プログラム**

では、Speech RecognizerとGrove - MP3を統合してみましょう。以下のデモでは、音楽の再生、音楽の一時停止、再開、次の曲、前の曲といったMP3のいくつかの機能を制御できます。

* プログラムをコピーしてArduino UNOにアップロードしてください。

* Base ShieldをArduino UNOに接続し、Grove - MP3 v2をBase ShieldのD2ポートに接続してください。

```cpp
# include <SoftwareSerial.h>

# include <MP3Player_KT403A.h>

/****** MP3のピンを定義 ******/
SoftwareSerial mp3(2, 3);

/****** Speech Recognizerのピンを定義 ******/

# define SOFTSERIAL_RX_PIN  5

# define SOFTSERIAL_TX_PIN  6

SoftwareSerial speech(SOFTSERIAL_RX_PIN,SOFTSERIAL_TX_PIN);

void setup()
{
    mp3.begin(9600);
    speech.begin(9600);
    Serial.begin(9600);
    delay(100);

    SelectPlayerDevice(0x02);       // SDカードをプレイヤーデバイスとして選択
    SetVolume(0x15);                // 音量を設定、範囲は0x00から0x1E
}

void loop()
{
    int a=0;
    if(speech.available())
    {
        a = speech.read();   // Speech Recognizerからの戻り値を読み取る
        switch (a)
        {
            case 3:      // 音声コマンド: 音楽を再生
            SpecifyMusicPlay(1);   // MP3: "001"を再生
            break;
            case 4:   // 音声コマンド: 一時停止
            PlayPause();    // MP3: 音楽を一時停止
            break;
            case 19:   // 音声コマンド: 再開
            PlayResume();  // MP3: 音楽を再開
            break;
            case 5:   // 音声コマンド: 次の曲
            PlayNext();    // MP3: 次の曲を再生
            break;
            case 6:   // 音声コマンド: 前の曲
            PlayPrevious();  // MP3: 前の曲を再生
            break;
            default:
            break;
        }

        delay(1000);
    }
}

```

### リアルタイム放送の方法

Grove - MP3を使用してリアルタイム放送を行ったことはありますか？Speech Recognizer、Grove - MP3、Grove - RTCを使用して試してみましょう。

**リアルタイムの調整**

必要なライブラリをGitHubからダウンロードしてください：<font color="Red">[RTC_DS1307](https://github.com/Seeed-Studio/RTC_DS1307);[library, Grove - RTC](/ja/Grove-RTC); ライブラリのパスに注意してください: .../arduino/libraries</font> 。

* "SetTimeAndDisplay"のサンプルファイルを開きます：File --&gt; Sketchbook --&gt; libraries --&gt; RTC_DS1307 --&gt; SetTimeAndDisplay。

* Base ShieldをArduino UNOに接続し、Grove - RTCをBase ShieldのI2Cポートに接続します。

* RTCの正しい時刻を設定します。

```txt
clock.fillByYMD(2016,1,19);//2016年1月19日
clock.fillByHMS(15,28,30);//15:28:30
clock.fillDayOfWeek(Mon);//月曜日
```

* 修正したプログラムをArduino UNOにアップロードします。

**テキスト読み上げ**

ご存知の通り、時間を放送する際には60個の数字（0〜59）があります。また、MP3が時間を放送する前にいくつかの単語を追加することができます（例: "It's"）。そのため、SDカードに61個の音声ファイルを追加する必要があります。

<font color="Red">ただし、SDカードについて注意すべき点があります：</font>

* SDカードの形式：FAT32。

* 曲を削除する前にSDカードをフォーマットしてください。曲を追加する場合は何もする必要はありません。

* 再生の順序は、SDカードに曲を追加した順序に依存します。_したがって、特定の順序で曲を再生したい場合は、SDカードにその順序で曲を追加する必要があります。_

ちなみに、61個の音声ファイルをフォルダにまとめましたので、[こちらからダウンロード](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer_Kit_for_Arduino/res/Sound_file.zip)してSDカードにコピーしてください。もちろん、最初にSDカードをフォーマットする必要があるかもしれません。

<center>
<table>
<tr>
<th> 音声ファイル名 </th>
<th> <font color="Red">SDカード内のファイル番号</font> </th>
<th> 音声テキスト </th>
</tr>
<tr>
<td width="200px"> 000 </td>
<td width="200px"> 1番目 </td>
<td width="200px"> 0 </td>
</tr>
<tr>
<td width="200px"> 001 </td>
<td width="200px"> 2番目 </td>
<td width="200px"> 1 </td>
</tr>
<tr>
<td width="200px"> ... </td>
<td width="200px"> ... </td>
<td width="200px">  ... </td>
</tr>
<tr>
<td width="200px"> 059 </td>
<td width="200px"> 60番目 </td>
<td width="200px"> 59 </td>
</tr>
<tr>
<td width="200px"> 060 </td>
<td width="200px"> 61番目 </td>
<td width="200px"> It's </td>
</tr>
</table>
</center>

**統合プログラムとリアルタイム放送**

* Base ShieldをArduino UNOに接続します。Grove - MP3 v2をBase ShieldのD2ポートに接続します。Grove - Speech RecognizerをBase ShieldのD5ポートに接続します。Grove - RTCをBase ShieldのI2Cポートに接続します。

* 以下のコードをArduino IDEの新しいスケッチにコピーし、Arduino UNOにプログラムをアップロードします。

* 「HiCell, What's the time」と言うと、MP3がリアルタイムを放送します。

```

# include <Wire.h>

# include "DS1307.h"

# include <SoftwareSerial.h>

# include <MP3Player_KT403A.h>

/******* MP3のピンを定義 ******/
SoftwareSerial mp3(2, 3);

/******* Speech Recognizerのピンを定義 ******/

# define SOFTSERIAL_RX_PIN  5

# define SOFTSERIAL_TX_PIN  6

SoftwareSerial speech(SOFTSERIAL_RX_PIN,SOFTSERIAL_TX_PIN);

/******* DS1307クラスのオブジェクトを定義 ******/
DS1307 clock;//DS1307クラスのオブジェクトを定義

void setup ()
{
  mp3.begin(9600);
  speech.begin(9600);
  clock.begin();
  Serial.begin(9600);
  delay(100);

  SelectPlayerDevice(0x02);       // SDカードをプレイヤーデバイスとして選択
  SetVolume(0x15);   // 音量を設定、範囲は0x00から0x1E
}

void loop ()
{
  int a=0;
  speech.listen();   // Speech Recognizerのソフトウェアポートからデータ受信を開始
  if(speech.available())
  {
    a = speech.read();  // Speech Recognizerからの戻り値を読み取る
    if(a==13)
    {
      clock.getTime();   // Grove - RTCからリアルタイムを取得
      int b=1+clock.hour;  // 時間データを取得; "0"の音声ファイルが1番目のため、名前の番号に1を加える必要がある
      int c=1+clock.minute;  // 分データを取得; "0"の音声ファイルが1番目のため、名前の番号に1を加える必要がある

      mp3.listen();   // Grove - MP3のソフトウェアポートからデータ受信を開始
      SpecifyMusicPlay(61);   // "It's"の音声はSDカードフォルダ内の61番目の曲
      while(QueryPlayStatus() != 0);  // 前の曲が再生終了する前に次の曲を再生
      SpecifyMusicPlay(b);  // SDカードフォルダ内の"b"番目の曲を再生
      while(QueryPlayStatus() != 0);
      SpecifyMusicPlay(c);  // SDカードフォルダ内の"c"番目の曲を再生
      while(QueryPlayStatus() != 0);
    }
  }
    delay(1000);
}

```

## リソース

---

* [Github: IRSendRev](https://github.com/Seeed-Studio/IRSendRev)

* [Github: MP3](https://github.com/Seeed-Studio/Grove_Serial_MP3_Player_V2.0)

* [Github: RTC](https://github.com/Seeed-Studio/RTC_DS1307)

* [放送用音声ファイル](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer_Kit_for_Arduino/res/Sound_file.zip)

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
