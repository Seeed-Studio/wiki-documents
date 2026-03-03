---
description: プロジェクト4 – ノイズメーカー
title: プロジェクト4 – ノイズメーカー
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Project_Four-Noise_Maker
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: プロジェクト4 – ノイズメーカー
category: チュートリアル
oldwikiname:  プロジェクト4 – ノイズメーカー
prodimagename:
surveyurl: https://www.research.net/r/Project_Four-Noise_Maker
--- -->

このスケッチの目的は、圧電ブザーを使用してビープ音を鳴らすことです。  
ポテンショメーターは再びアナログ入力として使用され、遅延時間を変化させます。ポテンショメーターを調整すると、ビープ音の速度が変わります。  
写真は誤っています - ポテンショメーターをアナログ A0/A1 入力ジャックに接続する必要があります（プロジェクト3と同様）。  
ポテンショメーターは D1 出力でアナログ電圧を生成し、それが Arduino の A0 アナログ入力に接続されます（A0/A1 入力ジャック経由）。  
ブザーを D6/D7 デジタル I/O ジャックに接続します。このスケッチでは、Arduino のピン D6 を使用して、ブザーの D1 入力に電力を送ります。

![](https://files.seeedstudio.com/wiki/Project_Four-Noise_Maker/img/Conn-four.jpg)

_**以下の Arduino スケッチをアップロードしてください：**_

```cpp
// プロジェクト4 - ノイズメーカー
//

void setup()
{
  pinMode(6, OUTPUT);
}

void loop()
{
  digitalWrite(6, HIGH);
  delay(analogRead(0));
  digitalWrite(6, LOW);
  delay(analogRead(0));
}
```

ご覧の通り、圧電ブザーはデジタル出力の別の形態として使用できます。この Grove ユニットを使用する際は、音をオフにしたい場合に接続された Grove の出力ピンを LOW に設定することを忘れないでください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>