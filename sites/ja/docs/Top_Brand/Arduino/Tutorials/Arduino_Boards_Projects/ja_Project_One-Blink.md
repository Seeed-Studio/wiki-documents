---
description: プロジェクト1 - 点滅
title: プロジェクト1 - 点滅
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Project_One-Blink
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: プロジェクト1 - 点滅
category: チュートリアル
oldwikiname: プロジェクト1 - 点滅
prodimagename:
surveyurl: https://www.research.net/r/Project_One-Blink
--- -->

このプロジェクトの目的は、LED Twigを使用してシンプルなデジタル出力ディスプレイを実演することです。以下の画像に示されているように機器を接続してください：
LED TwigをGrove ShieldのD1/D2デジタルI/Oジャックに接続します。
ArduinoのピンD1はTwigのSIGコネクタにある緑色のLEDに電力を供給します。

![](https://files.seeedstudio.com/wiki/Project_One-Blink/img/Blinkv1.0.jpg)

_**次に、以下のArduinoスケッチをアップロードしてください:**_

```
// プロジェクト1 - ダブル点滅
//

int del=500; // 点滅速度を調整

void setup()
{
  pinMode(1, OUTPUT);
}

void loop()
{
  digitalWrite(1, HIGH);

  delay(del);
  digitalWrite(1, LOW);

  delay(del);
}
```

非常にシンプルです。このスケッチでは、LEDが交互に点滅し、変数delによって点滅間の遅延が設定されます。このプロジェクトを通じて、Groveシステムがいかに簡単に使用できるかを体験することができます。

## 技術サポートと製品ディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>