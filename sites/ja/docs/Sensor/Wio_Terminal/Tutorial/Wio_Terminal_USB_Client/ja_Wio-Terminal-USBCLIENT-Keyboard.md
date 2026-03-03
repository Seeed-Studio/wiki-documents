---
description: キーボード
title: キーボード
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-USBCLIENT-Keyboard
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio Terminal をキーボードとして使用する

このウィキでは、Wio Terminal をシンプルなキーボードとして使用する方法を紹介します。3つのボタンにそれぞれ `s`、`e`、`d` のキーが割り当てられています。これを利用して、より高度なタスクに簡単に組み込むことができます。

## ライブラリのインストール

この例では、追加の Arduino キーボードライブラリが必要です：

1. [Arduino Keyboard Library](https://github.com/arduino-libraries/Keyboard) リポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードします。

2. 次に、このライブラリを Arduino IDE にインストールします。Arduino IDE を開き、`スケッチ` -> `ライブラリをインクルード` -> `ZIP形式のライブラリを追加` をクリックし、先ほどダウンロードした `Keyboard-master` ファイルを選択します。

![ライブラリのインストール](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## 完全なコード

より多くの機能については、Arduino の公式 [キーボード関数](https://www.arduino.cc/reference/en/language/functions/usb/keyboard/) を参照してください。

```cpp
#include "Keyboard.h" // キーボードライブラリ

void setup() { 
  // ボタンピンを入力として設定
  pinMode(WIO_KEY_A, INPUT);
  pinMode(WIO_KEY_B, INPUT);
  pinMode(WIO_KEY_C, INPUT);
  
  Keyboard.begin(); // キーボード通信を開始
}

void loop() {  
  if (digitalRead(WIO_KEY_A) == LOW) { // ボタンが押されたか検出
    Keyboard.write('s'); // 単一キーが押された（文字）
  }
  if (digitalRead(WIO_KEY_B) == LOW) {   
    Keyboard.write('e'); 
  }  
  if (digitalRead(WIO_KEY_C) == LOW) {        
    Keyboard.write('d');  
  } 
  
  delay(200); // キー押下間の遅延
}
```