---
description: プロジェクト8 - サーモスタット
title: プロジェクト8 - サーモスタット
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Project_Eight-Thermostat
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: プロジェクト8 - サーモスタット
category: チュートリアル
oldwikiname:  プロジェクト8 - サーモスタット
prodimagename:  
surveyurl: https://www.research.net/r/Project_Eight-Thermostat
--- -->

このシリーズの最終プロジェクトは一見複雑に見えるかもしれませんが、実際には非常にシンプルです。ポテンショメータを使用して温度値をユーザーが入力し、温度センサーを使用して、周囲温度がポテンショメータで設定された値を超えるとリレーが作動します。

1. 温度センサーをアナログ A0/A1 入力ジャックに接続します（プロジェクト7と同様）。
2. Grove は D1 出力でアナログ電圧を生成し、それが Arduino の A0 アナログ入力（A0/A1 入力ジャック）に接続されます。

3. ポテンショメータをアナログ A4/A5 入力ジャックに接続します。

4. ポテンショメータは D1 出力でアナログ電圧を生成し、それが Arduino の A4 アナログ入力（A4/A5 入力ジャック）に接続されます。
   リレーを D2/D3 入力ジャックに接続します。

5. Arduino の D2 ピンは D1 コネクタ上のリレーに信号を送ります。リレーの赤いライトはリレーがオンかオフかを示し、リレーが切り替わるときにクリック音がします。

 ![](https://files.seeedstudio.com/wiki/Project_Eight-Thermostat/img/Conn-eight.jpg)

 _**次の Arduino スケッチをアップロードしてください：**_

```cpp
// プロジェクト8 - サーモスタット
//

int a,c,d;
int z=3975;
int relaypin=2;
float b, q, resistance, temperature;

void setup()
{
  pinMode(relaypin, OUTPUT);
}

void loop()
{
  a=analogRead(4);
  b=0.0488*a;
  c=int(b);
  q=analogRead(0);
  resistance=(float)(1023-q)*10000/q;
  temperature=1/(log(resistance/10000)/z+1/298.15)-273.15;
  d=int(temperature);
  if (d>=c)
  {
    digitalWrite(relaypin, HIGH);
    delay(500);
  }
  if (d<c)
  {
    digitalWrite(relaypin, LOW);
    delay(500);
  }
}
```

ポテンショメータを右や左に回して、リレーがオンまたはオフになるかどうかを確認してください。

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社の製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>