---
description: ArduPy LCD
title: ArduPy LCD
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/ArduPy-LCD
last_update:
  date: 05/15/2025
  author: Matthew
---


# LCD - ArduPy API リファレンス

これは ArduPy 用の LCD API リファレンスです。現在、このリファレンスは Wio Terminal 上の LCD モジュールでのみテストされています。

詳細については、[**ArduPy**](https://github.com/Seeed-Studio/ArduPy) をご覧ください。ArduPy の使い方を始めるには、[こちら](https://wiki.seeedstudio.com/ja/Wio-Terminal-ArduPy/)をご参照ください。

**使用例:**

```py
from machine import LCD

lcd = LCD()                            # LCD を初期化し、バックライトをオンにする
lcd.fillScreen(lcd.color.BLACK)        # LCD 画面を黒色で塗りつぶす
lcd.setTextSize(2)                     # フォントサイズを 2 に設定
lcd.setTextColor(lcd.color.GREEN)      # テキストの色を緑色に設定
lcd.drawString("Hello World!", 0, 0)   # (0, 0) の位置に "Hello World!" を表示
```

## コンストラクタ

```py
class machine.LCD(self)
```

新しい LCD オブジェクトを作成します。

## メソッドリファレンス

```py
LCD.setRotation(r)
```

ディスプレイを `r` の回転に設定します。例: `LCD.setRotation(1)`。

```py
LCD.setTextColor(color)
LCD.setTextColor(fgcolor, bgcolor)
```

テキストのフォントを `color` に設定、または `fgcolor` を前景色、`bgcolor` を背景色に設定します。例: `LCD.setTextColor(LCD.color.RED)`。

```py
LCD.drawCentreString(string, dX, poY, font)
```

指定されたフォントで (x, y) の中心から文字列を描画します。フォントは数値で指定します。例: `LCD.drawCentreString("Hello", 0, 0, 1)`。

```py
LCD.drawString(string, poX, poY, font)
```

指定されたフォントで (x, y) に文字列を描画します。例: `LCD.drawString("Hello", 160, 120, 2)`。

```py
LCD.drawChar(char, poX, poY)
```

`char` を (x, y) に描画します。`char` は ASCII 番号です。例: `LCD.drawChar(65, 160, 120)`。

```py
LCD.drawCircle(x0, y0, r, color)
```

(x, y) に `r` 半径の円を指定された色で描画します。例: `LCD.drawCircle(160, 120, 10, LCD.color.GREEN)`。

```py
LCD.drawCircleHelper(x0, y0, r, cornername, color)
```

(x0, y0) に `r` 半径の円ヘルパーを指定された番号の cornername で描画します。例: `LCD.drawCircleHelper(160, 120, 100, 1, LCD.color.WHITE)`。

```py
LCD.drawEllipse(x, y, rx, ry, color)
```

(x, y) に `rx` と `ry` 半径の楕円を `color` で描画します。例: `LCD.drawEllipse(160,120,10,5,LCD.color.RED)`。

```py
LCD.drawFastHLine(x, y, w, color)
```

(x, y) から始まる幅 `w` の水平線を描画します。例: `LCD.drawFastHLine(0, 120, 160, LCD.color.WHITE)`。

```py
LCD.drawFastVLine(x, y, h, color)
```

(x, y) から始まる高さ `h` の垂直線を描画します。例: `LCD.drawFastVLine(160, 0, 120, LCD.color.WHITE)`。

```py
LCD.drawFloat(floatNumber, decimal, x, y , font)
```

小数点以下の桁数を指定して (x, y) に浮動小数点数を描画します。例: `LCD.drawFloat(3.1415, 2, 160, 120, 1)`。

```py
LCD.drawLine(x, y, x1, x2, color)
```

(x, y) から (x1, y1) までの線を `color` で描画します。例: `LCD.drawLine(0, 0, 320, 240,  LCD.color.WHITE)`。

```py
LCD.drawNumber(number, x, y, font)
```

(x, y) に整数 `number` を描画します。例: `LCD.drawNumber(23, 160, 120, 1)`。

```py
LCD.drawPixel(x, y, color)
```

(x, y) にピクセルを描画します。例: `LCD.drawPixel(160, 120, LCD.color.RED)`。

```py
LCD.drawRect(x, y, w, h, color)
```

(x, y) を始点として幅 `w`、高さ `h` の矩形を描画します。例: `LCD.drawRect(0, 0, 160, 120, LCD.color.WHITE)`。

```py
LCD.drawRoundRect(x, y, w, h, r, color)
```

(x, y) を始点として幅 `w`、高さ `h`、角の半径 `r` の角丸矩形を描画します。例: `LCD.drawRoundRect(0, 0, 160, 120, 10, LCD.color.WHITE)`。

```py
LCD.drawTriangle(x0, y0, x1, y1, x2, y2, color)
```

(x0, y0)、(x1, y1)、(x2, y2) を使用して三角形を描画します。例: `LCD.drawTriangle(160, 70, 60, 170, 260, 170, LCD.color.WHITE)`。

```py
LCD.fillCircle(x0, y0, r, color)
```

(x, y) に `r` 半径の円を指定された色で塗りつぶします。例: `LCD.fillCircle(160, 120, 10, LCD.color.GREEN)`。

```py
LCD.fillCircleHelper(x0, y0, r, cornername, color)
```

(x0, y0) に `r` 半径の円ヘルパーを指定された番号の cornername で塗りつぶします。例: `LCD.drawCircleHelper(160, 120, 100, 1, LCD.color.WHITE)`。

```py
LCD.fillEllipse(x, y, rx, ry, color)
```

(x, y) に `rx` と `ry` 半径の楕円を `color` で塗りつぶします。例: `LCD.fillEllipse(160,120,10,5,LCD.color.RED)`。

```py
LCD.fillRect(x, y, w, h, color)
```

(x, y) を始点として幅 `w`、高さ `h` の矩形を塗りつぶします。例: `LCD.fillRect(0, 0, 160, 120, LCD.color.WHITE)`。

```py
LCD.fillRoundRect(x, y, w, h, r, color)
```

(x, y) を始点として幅 `w`、高さ `h`、角の半径 `r` の角丸矩形を塗りつぶします。例: `LCD.fillRoundRect(0, 0, 160, 120, 10, LCD.color.WHITE)`。

```py
LCD.fillTriangle(x0, y0, x1, y1, x2, y2, color)
```

(x0, y0)、(x1, y1)、(x2, y2) を使用して三角形を塗りつぶします。例: `LCD.fillTriangle(160, 70, 60, 170, 260, 170, LCD.color.WHITE)`。

```py
LCD.fillScreen(color)
```

LCD 画面全体を指定された色で塗りつぶします。例: `LCD.fillScreen(LCD.color.GREEN)`。

```py
LCD.invertDisplay(n)
```

ディスプレイを反転します。例: `LCD.invertDisplay(0)` または `LCD.invertDisplay(1)`。

```py
LCD.setPivot(x, y)
```

(x, y) にピボットを設定します。

```py
LCD.setTextDatum(datum)
```

`datum` をテキストの基準点として設定します。

```py
LCD.setTextFont(font)
```

フォントを設定します。フォントは色として使用できます。例: `LCD.setTextFont(2)`。

```py
LCD.setTextSize(size)
```

フォントのサイズを設定します。例: `LCD.setTextSize(5)`。

```py
LCD.textWidth(string)
```

文字列の長さを返します。例: `LCD.textWidth("Hello World")`。

## 定数リファレンス

```py
LCD.color.BLACK # 他の利用可能な色を確認するには TAB を使用
```

定義済みの色。多くの異なる色も含まれており、`dir(LCD.color)` を使用してすべての利用可能な色を確認できます。

```py
LCD.color565(R, G, B)
```

RGB カラーモデルを 16 ビットのカラーコードに変換します。例えば、`LCD.fillScreen(LCD.color565(255,0,0))` を使用して画面を赤で塗りつぶすことができます。

```py
LCD.color16to8()
```

16 ビットカラーを 8 ビットカラーに変換します。

```py
LCD.width # LCD の幅、320
```

```py
LCD.height # LCD の高さ、240
```

```py
LCD.getCursorX()
```

カーソルの x 座標を返します。

```py
LCD.getCursorY()
```

カーソルの y 座標を返します。

```py
LCD.getRotation()
```

LCD 表示の現在の回転を返します。

```py
LCD.getTextDatum()
```

テキストの基準点（Datum）を返します。

## 使用例

ここでは、LCD API を使用して描画されたいくつかのグラフィックを紹介します。

### 円グラフ

<div align="center"><img src="https://blog.seeedstudio.com/wp-content/uploads/2020/06/Piechart-1-2.gif" /></div>

完全なコードは [こちら](https://www.seeedstudio.com/blog/2020/06/17/piechart-and-meters-reading-using-wio-terminal-and-ardupy/) をご覧ください。

### アナログメーター

<div align="center"><img src="https://blog.seeedstudio.com/wp-content/uploads/2020/06/Meter.gif" /></div>

完全なコードは [こちら](https://www.seeedstudio.com/blog/2020/06/17/piechart-and-meters-reading-using-wio-terminal-and-ardupy/) をご覧ください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>