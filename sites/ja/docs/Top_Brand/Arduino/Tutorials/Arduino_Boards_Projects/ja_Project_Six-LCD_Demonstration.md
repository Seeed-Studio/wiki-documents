---
description: プロジェクト6 – LCDデモンストレーション
title: プロジェクト6 – LCDデモンストレーション
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Project_Six-LCD_Demonstration
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: プロジェクト6 – LCDデモンストレーション
category: チュートリアル
oldwikiname:  プロジェクト6 – LCDデモンストレーション
prodimagename:  
surveyurl: https://www.research.net/r/Project_Six-LCD_Demonstration
--- -->
ここでは、LCDモジュールと対応するGroveユニットをデモンストレーションします。LCDを使用すると、2行8文字のディスプレイにデータやメッセージを表示できます。この例では、以下のLCDソケットからGrove Base Shieldへの配線を接続してください：

* 右下をD1/2に接続;

* 左下をD3/4に接続;

* 右下をD5/6に接続;

![](https://files.seeedstudio.com/wiki/Project_Six-LCD_Demonstration/img/Conn-six.jpg)

_**次に、以下のArduinoスケッチをアップロードしてください：**_

```cpp
// プロジェクト6 - LCDデモンストレーション
//

#include <LiquidCrystal.h>

LiquidCrystal lcd(1,2,3,4,5,6);

void setup()
{
  lcd.begin(8,2);
}

void loop()
{
  lcd.clear();
  lcd.setCursor(0,0);
  lcd.print("01234567");
  lcd.setCursor(0,1);
  lcd.print("ABCDEFGH");
  delay(65000);
}
```

`lcd.clear()`関数はLCD画面をクリアします。`lcd.setCursor()`はカーソルを(列, 行)に移動させます。そして、`lcd.print("")`はLCD上のカーソル位置にテキストを書き込みます。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>