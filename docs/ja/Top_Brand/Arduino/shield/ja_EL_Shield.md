---
description: EL Shield
title: EL Shield
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/EL_Shield
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: EL Shield
category: Shield
bzurl: https://seeedstudio.com/EL-Shield-p-1287.html
oldwikiname: EL_Shield
prodimagename: EL_Shield_02.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/104030000 1.jpg
surveyurl: https://www.research.net/r/EL_Shield
sku: 104030000
--- -->

![](https://files.seeedstudio.com/wiki/EL_Shield/img/EL_Shield_02.jpg)

このシールドはELデバイスを制御するために使用されます。同時に4つのELデバイスを制御することができます。制御方法はLEDを制御するのと同じくらい簡単です。PWMによって駆動され、簡単なプログラムで各ELワイヤを制御することで、カラフルで華やかな効果を作り出すことができます。当社のELインバータと組み合わせることで、最大15mのELワイヤを駆動することができ、デザインに無限の可能性を提供します。さらに、シールドはアクリル板で覆われており、ユーザーの安全性を向上させます。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/el-shield-p-1287.html)

仕様
--------------

- 動作電圧: 5V
- インバータインターフェース: JST 2.0
- 制御チャンネルインターフェース: 2P - 2.5SMソケット

ハードウェア概要
---------

![](https://files.seeedstudio.com/wiki/EL_Shield/img/EL_Shield_interface.jpg)

デモンストレーション
-------------

以下はELシールド、4つのELテープ、およびELシールドに付属するカスタムインバータを使用した簡単なデモです。以下の画像のようにすべてを接続してください。

![](https://files.seeedstudio.com/wiki/EL_Shield/img/EL_Shield_Hardware_Installation.jpg)

以下のコードをマイクロコントローラにアップロードしてください。

```
// ELテストコード
 
void setup(){
 for(int i = 4; i<8; i++)
 {
  pinMode(i, OUTPUT);
 }
}
 
void setEL(int ch) // 特定のELをオンに設定
{
 for(int i = 4; i<8; i++) // すべてオフ
 digitalWrite(i, LOW);
 digitalWrite(ch+3, HIGH); // chオン
}
 
int count = 0;
 
void loop()
{
 setEL(count%4 + 1);
 delay(200);
 if(count++ == 1000)
 {
  count = 0;
 }
}
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/EL_Shield/res/EL_Shield_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [EL Shield Eagleファイル](https://files.seeedstudio.com/wiki/EL_Shield/res/EL_Shield_Eagle_File.zip)
- [Arduino 1.0用EL Shieldソースコードファイル](https://files.seeedstudio.com/wiki/EL_Shield/res/EL_Shield_Test_code.zip)
- [BT134W-600Dデータシート](https://files.seeedstudio.com/wiki/EL_Shield/res/BT134W-600D.pdf)
- [MOC 3063データシート](https://files.seeedstudio.com/wiki/EL_Shield/res/MOC3063M.pdf)

<!-- このMarkdownファイルはhttps://www.seeedstudio.com/wiki/EL_Shieldから作成されました -->

## 技術サポートと製品ディスカッション

当社の製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>