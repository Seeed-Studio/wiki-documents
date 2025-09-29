---
description: RePhone Lumi Kit
title: RePhone Lumi Kit
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/RePhone_Lumi_Kit
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/RePhone_Lumi_Kit_wiki_2.jpg)

RePhone Lumi KitはLED愛好家のために特別に設計されたキットです。Xadow GSM+BLEモジュールを素晴らしい照明デバイスに組み込み、SMSやBluetoothを介してライトを制御することができます！

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/RePhone-Lumi-Kit-p-2623.html)

## 仕様
---
### Xadow GSM+BLE

<table>
<tr>
<td> マイクロコントローラー </td>
<td> MT2502</td>
</tr>
<tr>
<td> MCUコア </td>
<td> 32ビット ARM7EJ-STM RISCプロセッサ</td>
</tr>
<tr>
<td> RAM </td>
<td> 4 MB</td>
</tr>
<tr>
<td> フラッシュメモリ </td>
<td> 16 MB</td>
</tr>
<tr>
<td> 電源供給 </td>
<td> 3.3 ~ 4.2V（SIMなし）/3.5 ~ 4.2V（SIMあり）</td>
</tr>
<tr>
<td> 消費電力 </td>
<td> 20mW/30mW/52mW @ 待機（無線なし）/待機（GSM）/待機（BT）</td>
</tr>
<tr>
<td> クアッドバンド </td>
<td> 850/900/1800/1900 MHz</td>
</tr>
<tr>
<td> GPRS </td>
<td> クラス12モデム</td>
</tr>
<tr>
<td> クロックスピード </td>
<td> 260 MHz</td>
</tr>
<tr>
<td> コネクタ </td>
<td> Xadowモジュール用35ピンコネクタ＆11ピンコネクタ; バッテリー用JST 1.0コネクタ</td>
</tr>
<tr>
<td> インターフェース </td>
<td> LCD、オーディオ、I2C、SPI、UART、GPIOなど</td>
</tr>
<tr>
<td> 寸法 </td>
<td> 25.37mm × 20.30mm / 1” × 0.8”</td>
</tr>
</table>

### Xadow Duino

<table>
<tr>
<td> マイクロコントローラー </td>
<td> ATmega32u4</td>
</tr>
<tr>
<td> 電源供給 </td>
<td>
 USB経由で5V、最大電流1.5A

バッテリーソケット経由で3.3 ~ 4.2V、最大電流1.5A

ブレークアウトピン経由で3.3 ~ 6V、最大電流500mA

Xadow GSM+BLE経由で3.3 ~ 4.2V、最大電流500mA

</td>
</tr>
<tr>
<td> 充電電流 </td>
<td> 500mA</td>
</tr>
<tr>
<td> フラッシュメモリ </td>
<td> 32 KB（ATmega32u4）、うち4 KBはブートローダーに使用</td>
</tr>
<tr>
<td> SRAM </td>
<td> 2.5 KB（ATmega32u4）</td>
</tr>
<tr>
<td> EEPROM </td>
<td> 1 KB（ATmega32u4）</td>
</tr>
<tr>
<td> クロックスピード </td>
<td> 16 MHz</td>
</tr>
<tr>
<td> コネクタ </td>
<td>
 2 × 11ピンXadowコネクタ

RGB LED WS2812b用のボンディングパッド

</td>
</tr>
<tr>
<td> インターフェース </td>
<td>
 Xadow GSM+BLEとのインターフェース

I2C（7ビットアドレス0x23）

</td>
</tr>
<tr>
<td> 寸法 </td>
<td> 25.37mm × 20.30mm / 1”× 0.8”</td>
</tr>
</table>

### Xadow GSM ブレイクアウト

<table>
<tr>
<td> 寸法 </td>
<td> 25.37mm × 20.30mm / 1” × 0.8”</td>
</tr>
</table>

## モジュール接続
---
Xadow GSM+BLEはXadow 36ピンコネクタとXadow 11ピンコネクタを統合しています。以下の画像に示されているように、Xadow GSM+BLEをXadow GSM BreakoutにXadow 36ピンケーブルで接続することができます。ただし、ケーブルは**しっかり**かつ**平らに**挿入する必要があり、最も重要なのは、**「TOP」側を上向きに保つ**ことです。Xadow 11ピンコネクタはより柔軟な設計を持ち、Xadow DuinoとメインボードをXadow 11ピンリボンケーブルで好きな方法で接続できます。ただし、ケーブルがしっかり挿入されていることを再度確認してください。

![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/RePhone_Lumi_Kit_wiki_2.jpg)

## SMSでライトを制御しよう！
---
以下は、RePhoneにメッセージを送信してRGB LEDを制御する例です。

<!-- まず、**[Arduino IDE for RePhone Kit](/ja/Arduino_IDE_for_RePhone_Kit "Arduino IDE for RePhone Kit")** の指示に従い、RePhone Kit用のArduino IDEをダウンロードし、ドライバーをインストールしてください。 -->
次に、以下のコードをRePhone用のArduino IDEにコピーしてください。**ボードを「RePhone」と選択**し、**「MTK USB Debug Port」でダウンロード**してください。
```
#include <LCheckSIM.h>
#include <LGSM.h>
#include <LWs2812.h>
#include <string.h>
#include <stdio.h>
#include <stdlib.h>

//SMSコマンド 0 : "OFF" - 表示をオフにする。
//SMSコマンド 1 : "R100G0B0" - 赤色が100、緑色が0、青色が0。
char num[20];
char buf_contex[200];


void setup()
{
    Serial.begin(115200);
    Serial.print("Ws2812 test.\r\n");
}

void loop()
{
    unsigned long rgb_color;

    if(LSMS.available())
    {
        LSMS.remoteNumber(num, 20);
        LSMS.remoteContent(buf_contex, 50);

        Serial.println("新しいSMSを受信しました: ");

        Serial.print("番号:");
        Serial.println(num);

        Serial.print("内容:");
        Serial.println(buf_contex);

        if(strcmp("OFF", buf_contex) == 0)
        {
            Serial.print("RGBオフ。\r\n");
            LWs2812.monochrome(5, 0, 1);
        }
        else
        {
            if(StingFind(buf_contex, "R", 1))
            {
                if(StingFind(buf_contex, "G", 1))
                {
                    if(StingFind(buf_contex, "B", 1))
                    {
                        Serial.print("RGBフラグが見つかりました。\r\n");
                        char color_r[4] = {0};
                        char color_g[4] = {0};
                        char color_b[4] = {0};

                        sscanf(buf_contex + 1,"%[^G]", color_r);
                        sscanf(buf_contex,"%*[^G]G%[^B]", color_g);
                        sscanf(buf_contex,"%*[^B]B%[^\0]", color_b);

                        rgb_color = atol(color_r)*256*256 + atol(color_g)*256 + atol(color_b);

                        Serial.print("RGBカラーは ");
                        Serial.println(rgb_color);
                        delay(100);
                        LWs2812.monochrome(5, rgb_color, 0);
                        delay(100);
                        LWs2812.monochrome(5, rgb_color, 0);
                    }
                }
            }
        }
    }
}

int StingFind(char* string, char* find, int number)
{
    char* pos = string;
    char* p = string;
    int count = 0;

    while(number > 0)
    {
        pos = strstr(p, find);
        if(pos == 0)return -1;

        while(p <= pos)
        {
            if(*p > 0x80 || *p < 0)
            {
                p ++;
            }
            p ++;
            count ++;
        }
        number --;
    }
    return count;
}
```

このコードでは、SMSコマンドを以下のように設定しています：
···
**"OFF"** - 表示をオフにする。
**"R100G0B0"** - 赤色が100、緑色が0、青色が0。
···

したがって、RePhoneに **"R100G0B0"** を送信すると、LEDが以下のように赤色になります：

![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/TESTR100.jpg)

## さらに多くのサンプルコード
---
より興味深いプロジェクトに取り組む場合、いくつかのサンプルコードを試してみるのは良いスタートとなるでしょう。

1. **スケッチブックの場所**を**設定**で、RePhone用のArduino IDEをインストールした場所に簡単に設定してください。これでサンプルコードを確認できるようになります。

![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/Arduino_Sketchlocation.png)

2. 以下のパスで、すべてのRePhoneモジュール用に手動で作成されたArduinoのサンプルコードを見つけることができます：

_**Arduino_IDE_for_RePhone-master\hardware\arduino\mtk\libraries**_

![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/Example_code_Arduino_IDE.png)

## RePhone コミュニティ
---
[![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/RePhone_Community-2.png)](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)

私たちは、RePhoneユーザー（支援者）が集まり、温かく快適に会話を楽しみ、RePhoneについて議論し、技術的な問題を話し合い、アイデアやプロジェクトを共有し、将来のモジュール開発に関するフィードバックを提供できる、より良い場所を探してきました。そして、ここに「RePhone コミュニティ」があります。

今すぐ[RePhone コミュニティ](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)に参加しましょう！一緒に答えを探し、面白いものを作り、お互いを気遣い、経験を共有しましょう。

### よくある質問

RePhone コミュニティでよくある質問を収集し、トピック**["Frequently Asked Questions of RePhone (FAQ)"](https://forum.seeedstudio.com/viewtopic.php?f=71&amp;t=6664&amp;p=23753#p23753)**で回答しています。このトピックは、新しいFAQが出るたびに更新されます。

## リソース
---
<!-- 詳細については、Wikiページ [Xadow Duino](/ja/Xadow_Duino) をご覧ください。 -->

## 技術サポート & 製品ディスカッション

私たちの製品を選んでいただきありがとうございます！お客様が製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>