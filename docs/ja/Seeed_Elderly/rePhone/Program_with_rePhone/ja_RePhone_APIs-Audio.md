---
description: RePhone APIs - オーディオ
title: RePhone APIs - オーディオ
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/RePhone_APIs-Audio
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/RePhone_APIs-Audio/img/Xadow_Audio.JPG)

RePhoneは、SDカードまたは内蔵フラッシュ上のオーディオファイルの再生をサポートしています。サポートされる形式には、**WAV**、**MP3**、**AAC**などがあります。このライブラリを使用すると、再生プロセスを**再生**、**一時停止**、**停止**し、**音量を調整**することができます。

再生（デコード）処理は**LinkIt**によって内部的に処理されます。そのため、すべての関数は**非同期**であり、playFile()を呼び出した後、オーディオが再生され、すぐにプログラムに戻ります。

getStatus()を使用して現在のステータスを確認し、それに応じて動作してください。オーディオのステータスは「再生中」、「再生終了」、「再生一時停止」などです。オーディオはLinkItボードのイヤホンジャックを通じて出力されます。

<div class="admonition note">
<p class="admonition-title">注意</p>
以前の再生が終了する前に別のオーディオファイルを再生しようとすると、以前の再生は自動的に停止され、新しいオーディオが再生されます。
</div>

[![](https://files.seeedstudio.com/wiki/RePhone_APIs-Audio/img/Viewallapiofrephone.png)]

関数リスト
-------------

-   begin()
-   playFile()
-   setVolume()
-   pause()
-   resume()
-   stop()
-   getStatus()

API
----

### LAudio.begin()

オーディオモジュールを初期化します。

-   ***構文***

LAudio.begin()

-   ***パラメータ***

なし

-   ***戻り値***

なし

-   ***例***

```
#include <LAudio.h>
 
void setup()
{
    LAudio.begin();
    LAudio.setVolume(2);
    LAudio.playFile(storageFlash,(char*)"sample.mp3");
}
 
void loop()
{
 
}
```

### LAudio.playFile()

SDカードまたはフラッシュストレージ上のオーディオファイルを再生します。

-   ***構文***

```
LAudio.playFile(StorageEnum drv, char *songName)
LAudio.playFile(StorageEnum drv, wchar_t* songName)
```

-   ***パラメータ***
    -   *drv* - ストレージ、storageSD（SDカード）またはstorageFlash（フラッシュストレージ）
    -   *songName* - オーディオファイルのパス（ascii（char\*）またはunicode（wchar_t\*）エンコーディング）


-   ***戻り値***

なし

-   ***例***

```
#include <LAudio.h>
 
void setup()
{
    LAudio.begin();
    LAudio.setVolume(2);
    LAudio.playFile(storageFlash,(char*)"sample.mp3");
}
 
void loop()
{
 
}
```

### LAudio.setVolume()

再生音量を調整します。範囲は0（無音）から6（最大）です。

-   ***構文***

LAudio.setVolume(unsigned char volume)

-   ***パラメータ***
    -   *volume*: 音量レベル、**0**から**6**まで設定可能。0は無音、6は最大音量。


-   ***戻り値***

なし

-   ***例***

```
#include <LAudio.h>
 
void setup()
{
    LAudio.begin();
    LAudio.setVolume(2);
    LAudio.playFile(storageFlash,(char*)"sample.mp3");
}
 
void loop()
{
 
}
```

### LAudio.pause()

再生を一時停止します。これは、再生中（playFile()による）の場合にのみ機能します。

-   ***構文***

LAudio.pause()

-   ***パラメータ***

なし

-   ***戻り値***

なし

-   ***例***

```
#include <LAudio.h>
 
void setup()
{
    LAudio.begin();
    LAudio.playFile(storageFlash,(char*)"sample.mp3");
    LAudio.setVolume(2);
    delay(5000);
    LAudio.pause();    // 5秒再生して一時停止
 
    delay(5000);
    LAudio.resume();    // さらに5秒待って再開
 
    delay(5000);
    LAudio.stop();    // さらに5秒待って停止
}
 
void loop()
{
 
}
```

### LAudio.resume()

再生を再開します。一時停止中の場合にのみ機能します。

-   ***構文***

LAudio.resume()

-   ***パラメータ***

なし

-   ***戻り値***

なし

-   ***例***

```
#include <LAudio.h>

void setup()
{
    LAudio.begin();
    LAudio.playFile(storageFlash,(char*)"sample.mp3");
    LAudio.setVolume(2);
    delay(5000);
    LAudio.pause();  // 5秒再生して一時停止
 
    delay(5000);
    LAudio.resume(); // さらに5秒待って再開
 
    delay(5000);
    LAudio.stop();   // さらに5秒待って停止
}
 
void loop()
{
 
}
```

### LAudio.stop()

再生を停止します。

-   ***構文***

LAudio.stop()

-   ***パラメータ***

なし

-   ***戻り値***

なし

-   ***例***

```
#include <LAudio.h>
 
void setup()
{
    LAudio.begin();
    LAudio.playFile(storageFlash,(char*)"sample.mp3");
    LAudio.setVolume(2);
    delay(5000);
    LAudio.pause();  // 5秒再生して一時停止
 
    delay(5000);
    LAudio.resume(); // さらに5秒待って再開
 
    delay(5000);
    LAudio.stop();   // さらに5秒待って停止
}
 
void loop()
{
 
}
```

### LAudio.getStatus()

現在の再生ステータスを照会します。

-   ***構文***

LAudio.getStatus()

-   ***パラメータ***

なし

-   ***戻り値***
    -   *AudioStatus* - 再生ステータス、以下のいずれか：
    -   *AudioStop* - 再生が停止しています。
    -   *AudioPause* - 再生が一時停止中（再開可能）。
    -   *AudioResume* - 再生が再開中。
    -   *AudioEndOfFile* - 再生が終了しました。
    -   *AudioCommonFailed* - 再生に失敗しました（例：オーディオファイルが破損している）。


-   ***例***

```
#include <LAudio.h>
 
void setup()
{
    LAudio.begin();
    LAudio.setVolume(2);
    LAudio.playFile(storageFlash,(char*)"sample.mp3");
}
 
void loop()
{
    AudioStatus status;
    status = LAudio.getStatus();
    if(AudioEndOfFile == status)    // 再生終了を確認して再起動
    {
        LAudio.playFile(storageFlash,(char*)"sample.mp3");
    }
}
```

例
-------

-   ***説明***

この例では、mp3ファイルを再生できます。シリアルモニタを開いて番号を入力し、再生を制御します。

以下のコマンドを使用します：

1.  再生
2.  音量設定
3.  一時停止
4.  再開
5.  停止

-   ***コード***

コードは以下で見つけることができます：**File** -> **Examples** -> **LAudio** -> **AudioPlayer**

```
/*
  RePhone オーディオテストデモ
  まず、mp3ファイルをストレージに配置する必要があります
  次にシリアルモニタを開き、番号を入力してステータスを変更します
  1 - 再生
  2 - 音量設定
  3 - 一時停止
  4 - 再開
  5 - 停止
*/
#include <LAudio.h>
 
// 音楽ファイル名をここに追加
#define    FILE_NAME    "music.mp3"
 
#define    PLAY         1
#define    SETVOLUME    2
#define    PAUSE        3
#define    RESUME       4
#define    STOP         5
 
unsigned char Status_Value = STOP;
 
int volume = 6;
 
void changeVolume()
{
    volume++;
    volume = volume>6 ? 1 : volume;
}
 
void setup()
{
    LAudio.begin();
    Serial.begin(115200);
    Serial.println("Play      - 1");
    Serial.println("Setvolume - 2");
    Serial.println("Pause     - 3");
    Serial.println("Resume    - 4");
    Serial.println("Stop      - 5");
    Change_Status(PLAY);
}
 
char StatusFlag = 0;
 
void loop()
{
    unsigned char KEY_NUM;
    AudioStatus status;
 
    KEY_NUM = task_uart_key();
 
    if(KEY_NUM > 0)
    {
        Change_Status(KEY_NUM);
        KEY_NUM = 0;
    }
 
    status = LAudio.getStatus();
    if(StatusFlag != status)
    {
        StatusFlag = status;
        Serial.print("LAudio status is ");
        Serial.println(status);
    }
 
    if(status == AudioEndOfFile)
    {
        Status_Value = PLAY;
        Change_Status(Status_Value);
    }
}
 
void Change_Status(unsigned char status)
{
    switch(status)
    {
        case 1:
        LAudio.playFile(storageFlash,(char*)"music.mp3");
        LAudio.setVolume(volume);
        Serial.println("playOne");
        break;
 
        case 2:
        LAudio.setVolume(volume);
        changeVolume();
        Serial.print("set volume to ");
        Serial.println(volume);
        break;
 
        case 3:
        LAudio.pause();
        Serial.println("pause");
        break;
 
        case 4:
        LAudio.resume();
        Serial.println("resume");
        break;
 
        case 5:
        LAudio.stop();
        Serial.println("stop");
        break;
 
        default:
        break;
    }
}
 
unsigned int task_uart_key()
{
    String inString = "";
    unsigned int keyValue = 0;
    unsigned char bitCount = 0;
    unsigned char dataTemp1[10] = {0};
    while(Serial.available() > 0)
    {
        unsigned char inChar = Serial.read();
        inString += (char)inChar;
        dataTemp1[bitCount] = inChar - '0';
        bitCount += 1;
        delay(10);
    }
    if(inString != "")
    {
        if(bitCount > 4)
        {
            Serial.println("Key input error.");
        }
        else
        {
            for(char i=0;i<bitCount;i++)
            {
                unsigned int dataTemp2 = 1;
                for(char j=0;j<(bitCount-i-1);j++)dataTemp2 *= 10;
                keyValue += (dataTemp1[i] * dataTemp2);
            }
            Serial.print("Key value is: ");
            Serial.println(keyValue);
        }
    }
    return keyValue;
}
```

リソース
---------

<!-- -   [RePhone のメイン Wiki](/ja/RePhone)
-   [Xadow - Audio](/ja/Xadow_Audio)
-   [RePhone API メインページ](/ja/RePhone) -->


<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/RePhone_APIs_-_Audio から作成されました -->

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