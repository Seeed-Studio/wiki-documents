---
description: 概要
title: 赤外線エミッターの使い方
keywords:
- Wio_terminal 赤外線エミッター
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-Infrared-Emitter
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# 赤外線エミッターの使い方

このリポジトリでは、Wio Terminal に内蔵されている赤外線エミッターをコンポーネントとして使用する方法を示します。赤外線エミッターはデジタルインターフェースであり、リモコンのように赤外線信号を送信することができます！

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-IR.gif)

## Wio Terminal 用赤外線ライブラリのインストール

1. [Seeed_Arduino_IR](https://github.com/Seeed-Studio/Seeed_Arduino_IR) リポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードしてください。

2. 次に、赤外線ライブラリを Arduino IDE にインストールします。Arduino IDE を開き、`スケッチ` -> `ライブラリを含める` -> `ZIP形式のライブラリを追加` をクリックし、先ほどダウンロードした `Seeed_Arduino_IR` ファイルを選択してください。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## サンプルコード

**ファイル** -> **例** -> **IRLib2** -> **Send** に移動します。送信の例が表示され、以下のようになります。Wio Terminal からの赤外線信号をテストするには、[Grove - 赤外線受信モジュール](https://wiki.seeedstudio.com/ja/Grove-Infrared_Receiver/) を使用できます。このコードを簡単に変更して、Wio Terminal をテレビのリモコンとして使用することもできます！

**注意:** **`WIO_IR`** は内蔵赤外線エミッター用に定義されています（このライブラリのヘッダーファイルで既に定義されているため、inoファイルで再定義する必要はありません）。

```cpp
/* send.ino IRLib2の例スケッチ
 *  コードを送信する方法を示します。
 */
#include <IRLibSendBase.h>    // まず送信ベースをインクルード
// 使用したいプロトコルのみをインクルードします。
// 最も番号が小さいプロトコルを最初に、その後は任意の順序で追加可能。
#include <IRLib_P01_NEC.h>
#include <IRLib_P02_Sony.h>
#include <IRLibCombo.h>     // すべてのプロトコルの後にこれをインクルード
// 上記により、必要なプロトコルのみを含むユニバーサル送信クラス "IRsend" が自動的に作成されます。
// 次に送信インスタンスを宣言します。

IRsend mySender;

void setup() {
  Serial.begin(9600);
  delay(2000); while (!Serial); // Leonardo用の遅延
  Serial.println(F("シリアルモニターでキーを押すたびに信号を送信します。"));
}

void loop() {
  if (Serial.read() != -1) {
  // シリアルポートから文字が受信されるたびにコードを送信します。
  // このスケッチを変更して、デジタル入力ピンに接続されたボタンを押したときに送信するようにできます。
  // 以下のステートメントでデバイスに合わせて値とプロトコルを置き換えてください。
  //  mySender.send(SONY,0xa8bca, 20);//Sony DVD電源 A8BCA, 20ビット
    mySender.send(NEC,0x61a0f00f,0);//NEC TV電源ボタン=0x61a0f00f
    Serial.println(F("信号を送信しました。"));
  }
}
```

**注意:** 赤外線エミッターは Wio Terminal の背面、SDカードスロットの左側にあります。