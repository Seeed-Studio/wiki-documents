---
description: 概要
title: 光センサーの使い方
keywords:
  - Wio_terminal 光センサー
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Light
last_update:
  date: 05/15/2025
  author: jianjing Huang
createdAt: '2025-05-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/Wio-Terminal-Light/
---


# 光センサーの使い方

このリポジトリでは、Wio Terminal に内蔵されている光センサーをコンポーネントとして使用する方法を示します。光センサーはアナログインターフェースを使用しており、そのピンを読み取ることで周囲の光センサー値を簡単に取得できます。

## サンプルコード

**注意:** **`WIO_LIGHT`** は内蔵光センサーのピンです。光センサーは **A13** に接続されています。

```cpp
void setup() {
  pinMode(WIO_LIGHT, INPUT);
  Serial.begin(115200);

}

void loop() {
   int light = analogRead(WIO_LIGHT);
   Serial.print("光の値: ");
   Serial.println(light);
   delay(200);
}
```

**注意:** 光センサーは Wio Terminal の背面、microSDカードスロットのすぐ上にあります。