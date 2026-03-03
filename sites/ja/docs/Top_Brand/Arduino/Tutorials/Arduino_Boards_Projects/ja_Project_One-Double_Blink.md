---
description: プロジェクト1 - ダブルブリンク
title: プロジェクト1 - ダブルブリンク
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Project_One-Double_Blink
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: プロジェクト1 - ダブルブリンク
category: チュートリアル
oldwikiname:  プロジェクト1 - ダブルブリンク
prodimagename:  
surveyurl: https://www.research.net/r/Project_One-Double_Blink
--- -->
このプロジェクトの目的は、LED Grove を使用してシンプルなデジタル出力ディスプレイを実演することです。以下の画像に示されているように機器を接続してください：
LED Grove を Grove Shield の D1/D2 デジタル I/O ジャックに接続します。
Arduino のピン D1 は Grove の D1 コネクタ上の赤色 LED に電力を供給し、Arduino のピン D2 は Grove の D2 コネクタ上の緑色 LED に電力を供給します。

![](https://files.seeedstudio.com/wiki/Project_One-Double_Blink/img/Conn-one.jpg)

_**次に、以下の Arduino スケッチをアップロードしてください：**_

```
// プロジェクト1 - ダブルブリンク
//

int del=500; // 点滅速度を調整

void setup()
{
    pinMode(1, OUTPUT);
    pinMode(2, OUTPUT);
}

void loop()
{
    digitalWrite(1, HIGH);
    digitalWrite(2, LOW);
    delay(del);
    digitalWrite(1, LOW);
    digitalWrite(2, HIGH);
    delay(del);
}
```

ご覧の通り、とてもシンプルです。2つのLEDが交互に点滅し、その間隔は変数 `del` によって設定されています。しかし、このプロジェクトを通じて、Grove システムがいかに簡単に使用できるかを体験することができます。

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社の製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>