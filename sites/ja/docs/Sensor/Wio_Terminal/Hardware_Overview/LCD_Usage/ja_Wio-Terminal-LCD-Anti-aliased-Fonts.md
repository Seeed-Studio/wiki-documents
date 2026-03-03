---
title: スムースフォント
nointro:
keywords:
  - ドキュメント
  - Docusaurus
image: https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Anti-aliased-Fonts./
slug: /ja/Wio-Terminal-LCD-Anti-aliased-Fonts
last_update:
  date: 05/15/2025
  author: gunengyu
---


# アンチエイリアスフォントの表示

このリポジトリでは、Wio Terminalでアンチエイリアスフォントを使用する方法を示しています（**つまり、日本語文字、ギリシャ文字、その他のUCS-2グリフを表示する**）。さらに、スムースフォントを使用して、コンピュータ内のお気に入りのフォントで通常の英語文字を表示することもできます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117131650.gif" /></div>

## ライブラリのインストール

### Wio Terminal用SDカードライブラリのインストール

- [ファイルシステム概要](https://wiki.seeedstudio.com/ja/Wio-Terminal-FS-Overview/)を訪問してください。

### Wio Terminal用TFT LCDライブラリのインストール

- [TFT LCD概要](https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Overview/)を訪問してください。

## vlwフォントファイルの生成

ここでは、Wio Terminalでスムースフォントに使用できるvlwフォントファイルを生成する方法を示します。

### ステップ1

[**Processing**](https://processing.org/)ソフトウェアをダウンロードし、オペレーティングシステムに応じてダウンロードしてください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117095509.jpg" /></div>

### ステップ2

**Processing**を開き、`Tools` -> `Create Font...`に移動します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117100029.jpg" /></div>

### ステップ3

**Create Font**ウィンドウが表示されます。コンピュータにあるフォントを選択できます。フォントサイズを変更し、`Characters...`をクリックします。また、vlwファイルのファイル名を変更することもできます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117100808.jpg" /></div>

### ステップ4

**Character Selector**ウィンドウが表示され、特定の言語のUnicode文字ブロック（この場合はBasic Latin）を選択できます。***アジア文字の場合、CJK CompatibilityまたはCJKカテゴリのUnicodeブロックを使用することをお勧めします。*** `OK`をクリックしてフォント設定を保存します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117104728.jpg" /></div>

### ステップ5

`File` -> `Save`に移動し、スケッチファイルをコンピュータのローカルドライブに保存します。これで、vlwフォントファイルが生成されました！

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117105224.jpg" /></div>

## SDカードへの保存

vlwフォントファイルを生成したら、前のステップで保存したスケッチファイル内の**`data`**フォルダ内にvlwファイルが見つかります。

次に、vlwフォントファイルをSDカードにコピーし、SDカードをWio Terminalに戻します。

## LCDライブラリの設定

デフォルトでは、Wio Terminalのリソースを節約するためにLCDライブラリのスムースフォントオプションは**オフ**になっています。**したがって、Wio Terminalでスムースフォントを有効にするには設定が必要です。**

Arduinoライブラリフォルダ（**libraries**） -> **Seeed_Arduino_LCD**に移動し、エディタで**`User_Setup.h`**を開きます。**`#define SMOOTH_FONT`**を検索し、以下のように行をコメント解除します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/smoothFont.png" /></div>

これでWio Terminalでスムースフォントが有効になり、好きなフォントや文字を表示できます！

## 表示

- **SDカードからWio Terminalにフォントをロードするには:**

```cpp
void loadFont(String fontName);
```

ここで`fontName`はvlwフォントファイルの名前です。

- **vlw内のすべての文字を画面に表示するには:**

```cpp
void showFont(uint32_t td);
```

ここで`td`はすべての文字を表示する際の画面間の遅延時間です。

- **フォントをアンロードするには:**

```cpp
void unloadFont();
```

画面に文字を表示するには、**`tft.println()`**を使用してtftライブラリ内の関数と同様に使用できます。さらに、**`tft.setCursor()`**や**`tft.setTextColor`**などの関数を使用して、文字表示の位置や色を変更することもできます。

**注意**: LCDライブラリ内の`User_Setup.h`を確認し、`#define SMOOTH_FONT`がコメント解除されていることを確認してください。

## 完全なコード

完全なコードと例のvlwファイルを[こちら](https://files.seeedstudio.com/wiki/Wio-Terminal/res/JanpaneseFonts.zip)からダウンロードしてください。

```cpp
#include<SPI.h>
#include "Seeed_FS.h"
#include "SD/Seeed_SD.h"
#include"TFT_eSPI.h"

TFT_eSPI tft;

void setup() {
    tft.begin();
    Serial.begin(115200);
    tft.setRotation(3);
    tft.fillScreen(TFT_BLACK); // 黒背景

    while(!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)){
        Serial.println("SDカードエラー！\n");
        while(1);
  }
  delay(1000);

  tft.loadFont("Apple-Chancery-24");
  // 画面間で2秒（2000ms）の遅延で画面上にすべての文字を表示
  tft.showFont(2000); // 注意: この関数はカーソル位置を移動します！

  tft.setTextColor(TFT_RED,TFT_BLACK);
  tft.setCursor(0,0);

  tft.println("こんにちは");
  tft.println("さようなら");
  tft.println();
  tft.unloadFont();

  tft.loadFont("Latin-Hiragana-24");
  tft.setTextColor(TFT_GREEN,TFT_BLACK);
  tft.println("こんにちは");
  tft.println("さようなら");
  tft.unloadFont();
  
}
void loop(){}
```

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>