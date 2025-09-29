---
description: シークレットボックス
title: シークレットボックス
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Secret_Box
last_update:
  date: 05/15/2025
  author: shuxu hu
---


**機能**

LinkIt ONEとGrove - Light Sensorを箱に入れます。箱が開けられると、メッセージがあなたの携帯電話に送信されます。

**接続**

<!-- *   [Grove - Light_Sensor](/ja/Grove-Light_Sensor "Grove - Light Sensor") connect to A0. -->

*   GSMアンテナ

*   SIMカード

*   リチウムバッテリー

**コード**
```
// Groveスターターキットのデモ - LinkIt ONE用
// シークレットボックス

#include <LGSM.h>

char num[20] = "13425171053";           // ここにあなたの電話番号を記入
char text[100] = "警告: あなたの箱が開けられました!!";    // 送信したいメッセージ


const int pinLight = A0;                // 光センサーをA0に接続

bool isLightInBox()
{
    return (analogRead(pinLight)<50);   // データが50未満の場合、光センサーが箱の中にあることを意味します
}

void setup()
{
    Serial.begin(115200);

    while(!isLightInBox());             // 箱に入れるまで待機
    delay(2000);
}


void loop()
{
    if(!isLightInBox())                 // 箱が開けられた場合
    {
        Serial.println("箱が開けられました");

        while(!LSMS.ready())
        {
            delay(1000);
        }

        Serial.println("SIMが作業可能です!");
        LSMS.beginSMS(num);
        LSMS.print(text);

        if(LSMS.endSMS())
        {
            Serial.println("SMSが送信されました");
        }
        else
        {
            Serial.println("SMS送信失敗");
        }

        while(!isLightInBox());             // 箱に戻されるまで待機
        delay(2000);
    }

    delay(10);
}
```

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>