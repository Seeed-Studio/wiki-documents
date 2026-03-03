---
description: プロジェクト7 - 温度
title: プロジェクト7 - 温度
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Project_Seven-Temperature
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: プロジェクト7 - 温度
category: チュートリアル
oldwikiname: プロジェクト7 - 温度
prodimagename:
surveyurl: https://www.research.net/r/Project_Seven-Temperature
--- -->

次に進む Grove の旅では、温度センサーを使用します。このセンサーはアナログ形式の入力であり、前述の通り、周囲温度に応じた電圧ポテンシャルを返します。この電圧をアナログピンで測定し、温度に変換します。

温度センサーをアナログ A0/A1 入力ジャックに接続してください。  
Grove ユニットは D1 出力でアナログ電圧を生成し、それが Arduino の A0 アナログ入力に接続されます。

![](https://files.seeedstudio.com/wiki/Project_Seven-Temperature/img/Conn-seven.jpg)

_**次に、以下の Arduino スケッチをアップロードしてください:**_

```cpp
// プロジェクト7 - 温度
//

int a;
int del=1000; // 温度測定間の間隔
float ctemperature;
float ftemperature;
int B=3975;
float resistance;

void setup()
{
  Serial.begin(9600);
}

void loop()
{
  a=analogRead(0);
  resistance=(float)(1023-a)*10000/a;
  ctemperature=1/(log(resistance/10000)/B+1/298.15)-273.15;
  ftemperature=ctemperature*9/5+32;
  Serial.print(ctemperature);
  Serial.print("C ");
  Serial.print(ftemperature);
  Serial.println("F");
  delay(del);
}
```

上記のコードをコピーして貼り付けることで、独自のスケッチに温度機能を追加することができます。

スケッチをアップロードした後、Arduino IDE のシリアルモニターウィンドウを開くと、以下のようなボックスが表示されるはずです：

![](https://files.seeedstudio.com/wiki/Project_Seven-Temperature/img/Aq0PYQjuq.png)

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