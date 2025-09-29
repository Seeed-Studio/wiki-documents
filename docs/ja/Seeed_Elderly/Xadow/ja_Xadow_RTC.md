---
description: Xadow - RTC（リアルタイムクロック）
title: Xadow - RTC（リアルタイムクロック）
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_RTC
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_RTC/img/Xadow_RTC_01.jpg)

時々、現在の時刻を知りたいと思うことがあります。デートに遅れていないか、3か月の子供の食事時間ではないかなどです。RTCモジュールはリアルタイムクロックを提供します。このモジュールに「ねえ、今何時？」と尋ねることができます。同時に、小さなコイン型電池を取り付けることを忘れないでください。この電池は6か月以上使用できます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-RTC-p-1523.html)

##  仕様
---
*   リアルタイムクロック（RTC）は秒、分、時間、年の日付、月、曜日、年をカウントし、うるう年補正をサポート
*   12時間形式または24時間形式に設定可能
*   2100年まで有効
*   寸法：25.43mm x 20.35mm

:::caution
    安定した性能を得るためには、3ボルトのCR1220リチウム電池をバッテリーホルダーに装着する必要があります。一次電源のみを使用すると、モジュールが正常に動作しない場合があります。これは、クリスタルが発振しない可能性があるためです。
:::

##  デモンストレーション
---
以下のスケッチは、時刻を設定して読み取る簡単なアプリケーションを示しています。

**ハードウェアのインストール:**

![](https://files.seeedstudio.com/wiki/Xadow_RTC/img/XadwoRTC.jpg)

注意：Xadow RTCをXadowメインボードに接続する際は、接続方向に注意してください。接続方法は、1つのXadowモジュールの未充填の角を別のモジュールの直角に接続することです（各Xadowモジュールの4つの角を参照）。

**以下のようにデモコードを示します:**

```
#include <Wire.h>
#define DS1337_CTRL_ID 0x68

unsigned char  second, minute, hour;
unsigned char  week, day, month;
unsigned int year;

void setup()
{
    Wire.begin();
    Serial.begin(38400);
    while (!Serial) {
        ; // シリアルポートが接続されるのを待つ。Leonardoのみ必要
    }

    fillByYMD(2013, 6, 17); // 2013年6月17日
    fillByHMS(23, 15, 43); // 23:15:43
    fillWeek(1); // 月曜日
    setTime();
}

void loop()
{
    readTime();
    Serial.print(year + 2000, DEC);
    Serial.print("/");
    Serial.print(month, DEC);
    Serial.print("/");
    Serial.print(day, DEC);
    Serial.print("  ");
    Serial.print(hour, DEC);
    Serial.print(":");
    Serial.print(minute, DEC);
    Serial.print(":");
    Serial.print(second, DEC);
    Serial.print("    ");
    switch (week) // 曜日をフレンドリーに出力
    {
        case 1:
        Serial.print("MON");
        break;
        case 2:
        Serial.print("TUE");
        break;
        case 3:
        Serial.print("WED");
        break;
        case 4:
        Serial.print("THU");
        break;
        case 5:
        Serial.print("FRI");
        break;
        case 6:
        Serial.print("SAT");
        break;
        case 7:
        Serial.print("SUN");
        break;
    }
    Serial.println("  ");
    delay(1000);
}

/* 関数: RTCから時刻と日付を読み取る */
void readTime(void)
{
    // Wireライブラリを使用してRTCに接続
    // レジスタポインタをゼロにリセット
    Wire.beginTransmission(DS1337_CTRL_ID);
    Wire.write(0x00);
    Wire.endTransmission();

    // 7バイトのデータを要求（秒、分、時、曜日、日付、月、年）
    Wire.requestFrom(DS1337_CTRL_ID, 7);
    // 一部のデータはマスクが必要。特定のビットは制御ビット
    second = bcdToDec(Wire.read() & 0x7f);
    minute = bcdToDec(Wire.read());
    hour = bcdToDec(Wire.read() & 0x3f); // 12時間形式の場合は変更が必要
    week = bcdToDec(Wire.read());
    day = bcdToDec(Wire.read());
    month = bcdToDec(Wire.read());
    year = bcdToDec(Wire.read());
}

/* 関数: 日付を含む時刻をRTCチップに書き込む */
void setTime(void)
{
    Wire.beginTransmission(DS1337_CTRL_ID);
    Wire.write(0x00);
    Wire.write(decToBcd(second)); // 0からビット7でクロックを開始
    Wire.write(decToBcd(minute));
    Wire.write(decToBcd(hour));  // 12時間形式の場合はビット6を設定
    Wire.write(decToBcd(week));
    Wire.write(decToBcd(day));
    Wire.write(decToBcd(month));
    Wire.write(decToBcd(year));
    Wire.endTransmission();
}

unsigned char decToBcd(unsigned char val)
{
    return ((val / 10 * 16) + (val % 10));
}

// バイナリコード化された10進数を通常の10進数に変換
unsigned char bcdToDec(unsigned char val)
{
    return ((val / 16 * 10) + (val % 16));
}

void fillByYMD(unsigned int _year, unsigned char _month, unsigned char _day)
{
    year = _year - 2000;
    month = _month;
    day = _day;
}

void fillWeek(unsigned char _dow)
{
    week = _dow;
}

void fillByHMS(unsigned char _hour, unsigned char _minute, unsigned char _second)
{
    // 変数を割り当て
    hour = _hour;
    minute = _minute;
    second = _second;
}
```

*   時刻を設定します。関数の引数を現在の日付/時刻に変更してください。引数の形式に注意してください。
```
fillByYMD(2013, 6, 17); // 2013年6月17日
fillByHMS(23, 15, 43); // 23:15:43
fillWeek(1); // 月曜日
```
*   出力結果:

![](https://files.seeedstudio.com/wiki/Xadow_RTC/img/Xadow-RTC_Result.jpg)

出力時刻は時計のように変化します。一度時刻を設定すると、RTCは時計の時刻データを継続的に更新します。その後、以下のコードをコメントアウトして再アップロードしてください。リアルタイムクロックが表示されます。
```
//setTime();
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_RTC/res/Xadow_RTC.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## リソース
---
*   [Xadow RTC Eagle ファイル](https://files.seeedstudio.com/wiki/Xadow_RTC/res/Xadow_RTC.zip)

*   [RTC DS1307 データシート](https://files.seeedstudio.com/wiki/Xadow_RTC/res/DS1307.pdf)

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