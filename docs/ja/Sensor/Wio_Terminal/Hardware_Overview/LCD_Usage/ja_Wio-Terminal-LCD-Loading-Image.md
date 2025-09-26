---
title: 画像の読み込み
nointro:
keywords:
  - ドキュメント
  - Docusaurus
image: https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Loading-Image/
slug: /ja/Wio-Terminal-LCD-Loading-Image
last_update:
  date: 05/15/2025
  author: gunengyu
---


# 画像の読み込み

このリポジトリでは、Wio TerminalのSDカードからTFT LCDスクリーンに画像を読み込んで表示する方法を説明します。この実装はデザインに非常に役立ち、さまざまな場面で使用できます！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WechatIMG2314.jpeg.jpg" /></div>

## ライブラリのインストール

### Wio Terminal用SDカードライブラリのインストール

- [File System Overview](https://wiki.seeedstudio.com/ja/Wio-Terminal-FS-Overview/)を訪問してください。

### Wio Terminal用TFT LCDライブラリのインストール

- [TFT LCD Overview](https://wiki.seeedstudio.com/ja/Wio-Terminal-LCD-Overview/)を訪問してください。

## 画像フォーマットの設定

### ステップ 1: 画像の準備
:::note
    画像フォーマットをWindows 24ビットBMP形式に変換し、適切なフォルダに配置する必要があります。これには`Microsoft Paint`を使用することをお勧めします。
:::
 - **ステップ 1-1:** `Microsoft Paint`を使用して画像をリサイズし、スクリーン表示領域の最大ピクセルサイズに収まるようにします。

 - **ステップ 1-2:** 次に、`名前を付けて保存`をクリックし、`BMP画像`を選択して、ファイルタイプのドロップダウンから`24ビットビットマップ(.bmp)`を選択して保存します。
  
 - **ステップ 1-3:** フォルダ名を`bmp`とし、このフォルダ内にWindows `.bmp`形式の画像を保存します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/wioterminaltu.png" /></div>

### ステップ 2: `24ビットビットマップ`画像をマイクロコントローラで読み取り可能な`8ビットまたは16ビットbmp`形式に変換
:::note
    組み込みシステムでbmp画像を表示するには、Windows bmp形式の一部情報（ヘッダファイル）を削除する必要があります。この作業を自動化するPythonスクリプトを作成しましたので、以下の2つのオプションから選択して画像を変換してください。
:::
#### オプション1: 事前構築されたWindows実行ファイルを使用（Windowsのみ）

- **ステップ 2-1-1:** [Pyinstaller](https://pyinstaller.org/en/stable/)パッケージを使用して実行ファイルを準備しました。[bmp_converter.exe](https://files.seeedstudio.com/wiki/Wio-Terminal/res/bmp_converter.exe)をクリックしてダウンロードしてください。

- **ステップ 2-1-2:** ダウンロードした`bmp_converter.exe`を`ステップ 1-3`で作成した`bmpフォルダ`と同じディレクトリに配置します。

- **ステップ 2-1-3:** `bmp_converter.exe`をダブルクリックして実行し、ポップアップした`ターミナル`で以下の2つのオプションから選択します: "`1`を入力して8ビットカラーに変換; `2`を入力して16ビットカラーに変換"。

#### オプション2: Pythonソースコードを使用（クロスプラットフォーム対応）
:::note
    コンピュータにPythonがインストールされている必要があります。
:::
- **ステップ 2-2-1:** Pythonスクリプト[bmp_converter.py](https://files.seeedstudio.com/wiki/Wio-Terminal/res/bmp_converter.py)をダウンロードし、`ステップ 1-3`で作成した`bmpフォルダ`と同じディレクトリに保存します。

- **ステップ 2-2-2:** `cmd`または`ターミナル`を開いてPythonスクリプトを実行します。まず、`bmp_converter.py`と`bmpフォルダ`が保存されているディレクトリに`cd`で移動し、Pythonスクリプトを実行します。

- **ステップ 2-2-3:** 以下の2つのオプションから選択します: "`1`を入力して8ビットカラーに変換; `2`を入力して16ビットカラーに変換"

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/PythonScript.gif" /></div>

### ステップ 3: 画像の準備完了

変換された`.bmp`画像は、`bmpフォルダ`内の`rgb332`（8ビット）または`rgb565`（16ビット）という名前の別フォルダに保存されます。

## はじめに

### [`RawImage.h`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/RawImage.h)ライブラリのインストール

このライブラリは画像の読み込みと表示を簡単にするために使用されます。[`RawImage.h`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/RawImage.h)をダウンロードし、このヘッダファイルをスケッチの場所に添付してください。

### Arduinoでの画像初期化

- **スクリーンに画像を表示するには**

```Cpp
//スクリーン上に8ビットカラー画像を描画するには、(x, y)から開始します:
drawImage<uint8_t>("SDカード画像へのパス", x, y);

//スクリーン上に16ビットカラー画像を描画するには、(x, y)から開始します:
drawImage<uint16_t>("SDカード画像へのパス", x, y);
```

- **画像を初期化するには（上記のdrawImage関数を使用する場合は不要）**

```Cpp
//8ビットカラーを使用する場合、以下のように画像を初期化します:
Raw8 * img8 = newImage<uint8_t>("SDカード画像へのパス");

//16ビットカラーを使用する場合、以下のように画像を初期化します:
Raw16 * img16 = newImage<uint16_t>("SDカード画像へのパス");
```

## サンプルコード

```cpp

# include"TFT_eSPI.h"
# include "Seeed_FS.h" //SDカードライブラリを含む
# include"RawImage.h"  //画像処理ライブラリを含む
TFT_eSPI tft;

void setup() {
    //SDカードを初期化
    if(!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
        while (1);
    }
    tft.begin();
    tft.setRotation(3);

    drawImage<uint8_t>("test.bmp", 0, 0); //SDカード内のこの8ビット画像を(0, 0)から表示

}

void loop() {
}

```

## FAQs

**`ImportError: No module named PIL`が発生した場合:**

- cmdまたはターミナルで`pip install pillow`を入力してPythonモジュールをインストールしてください。

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