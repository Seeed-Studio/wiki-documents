---
description: Xadow - Breakout
title: Xadow - Breakout
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_Breakout
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_Breakout/img/Xadow_Breakout_01.jpg)

おそらく、Xadowにさまざまなモジュールを接続したいと思うでしょう。例えば、誰かが近くにいるかどうかを検知できるIRセンサーを接続することができます。このBreakoutモジュールを使用してセンサーを接続できます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Breakout-p-1519.html)

## 仕様
---
- アダプター
- ハードウェアで全てのGroveモジュールと互換性あり
- 寸法: 25.43mm x 20.35mm

## デモンストレーション
---
以下はブザーを制御するデモです。Grove - BuzzerをGroveケーブルでXadow Breakoutに接続し、FFCケーブルでXadow BreakoutをXadow Main Boardに接続する必要があります。

![](https://files.seeedstudio.com/wiki/Xadow_Breakout/img/XadowBreakoutUsage.jpg)

Xadow Breakoutは、IIC通信やシリアル通信を行うモジュールを制御できるだけでなく、デジタルポートやアナログポートとして使用できる2つのGroveコネクタを通じて他のモジュールも制御できます。つまり、すべてのGroveモジュールを制御することが可能です。

デモコードは以下の通りです：
```
Void setup()
{
    DDRD |=0x04;
}
void loop()
{
    PORTD |=0x04;
    delay(500);
    PORTD &=~(0x04);
    delay(500);
}
```
これでブザーが「ビビビ」と鳴るのが聞こえるはずです。Grove - LEDに置き換えることで、LEDのオン/オフを確認することもできます。

## オンライン回路図ビューア
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Breakout/res/Xadow%20-%20Breakout_eagle%20file.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース
---
- [Xadow Breakout Eagle File](https://files.seeedstudio.com/wiki/Xadow_Breakout/res/Xadow%20-%20Breakout_eagle%20file.rar)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>