---
description: マウス
title: マウス
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-USBCLIENT-Mouse
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Wio Terminal をマウスとして使用する

このWikiでは、Wio Terminal を簡易マウスとして使用する方法を紹介します。これにより、上下左右のマウス移動をシミュレートすることができます。さらに、左/右のマウスボタンのクリックや、上下スクロールも実装可能です。

## ライブラリのインストール

この例では、追加のArduinoマウスライブラリが必要です：

1. [Arduino Mouse Library](https://github.com/arduino-libraries/Mouse) のリポジトリにアクセスし、リポジトリ全体をローカルドライブにダウンロードしてください。

2. 次に、Arduino IDEにライブラリをインストールします。Arduino IDEを開き、`スケッチ` -> `ライブラリを含める` -> `ZIP形式のライブラリを追加` をクリックし、先ほどダウンロードした `Mouse-master` ファイルを選択してください。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## 完全なコード

以下のコードをご確認ください。または、GitHubの[こちら](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/master/examples/WioTerminal_ButtonMouseControl/WioTerminal_ButtonMouseControl.ino)から確認できます。さらに機能を追加したい場合は、Arduinoの公式[マウス関数](https://www.arduino.cc/reference/en/language/functions/usb/mouse/)を参照してください。

```cpp
/*    
 * Wio Terminal をボタンでマウスとしてシミュレートするデモ。
 * マウスの上下移動、左右移動、
 * 左マウスボタンのクリック、右マウスボタンのクリック、
 * 上スクロール、下スクロールなどを含みます。
 *   
 * Copyright (c) 2020 seeed technology co., ltd.  
 * Author      : weihong.cai (weihong.cai@seeed.cc)  
 * Create Time : July 2020
 * Change Log  : 
 *
 * The MIT License (MIT)
 *
 * このソフトウェアおよび関連文書ファイル（以下「ソフトウェア」）を取得したすべての人に対し、
 * 以下の条件に従い、ソフトウェアを使用、コピー、変更、結合、公開、配布、サブライセンス、
 * または販売する権利を無償で許可します。
 * 
 * 上記の著作権表示およびこの許可表示は、ソフトウェアのすべてのコピーまたは重要な部分に含めるものとします。
 * 
 * このソフトウェアは「現状のまま」提供され、明示的または黙示的な保証はありません。
 * 商品性、特定目的への適合性、および権利非侵害の保証を含むがこれに限定されないものではありません。
 * 著者または著作権者は、契約、不法行為、またはその他の理由により、
 * ソフトウェアまたはその使用またはその他の取引に関連して発生するいかなる請求、損害、またはその他の責任についても責任を負いません。
 * 
 * 使用方法（Wio Terminal 内）:
 *    WIO_5S_UP を押す    --------------------> マウス上移動
 *    WIO_5S_DOWN を押す  --------------------> マウス下移動
 *    WIO_5S_LEFT を押す  --------------------> マウス左移動
 *    WIO_5S_RIGHT を押す --------------------> マウス右移動
 *    BUTTON_3 を押す ------------------------> 左マウスボタンのクリック
 *    BUTTON_2 を押す ------------------------> 右マウスボタンのクリック    
 *    WIO_5S_PRESS と WIO_5S_UP を押す   ----> 上スクロール
 *    WIO_5S_PRESS と WIO_5S_DOWN を押す ----> 下スクロール
 * 
 * 注意事項:
 * 1. PCがUSBデバイスを認識できず、Wio Terminal が動作しない場合があります。
 *    この問題はArduinoCoreを更新することで解決できます。
 *    詳細はこちらをご覧ください: https://forum.seeedstudio.com/t/seeeduino-xiao-cant-simulate-keys-pressed/252819/6?u=weihong.cai
 * 
 * Wio Terminal の詳細については、以下をご覧ください: https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/
 * 質問がある場合は、フォーラムにメッセージを残してください: https://forum.seeedstudio.com
 */

#include "Mouse.h"

/*----------------ボタンピンの定義---------------------------*/ 
const int upButton        = WIO_5S_UP;
const int downButton      = WIO_5S_DOWN;
const int leftButton      = WIO_5S_LEFT;
const int rightButton     = WIO_5S_RIGHT;
const int mouseWheel      = WIO_5S_PRESS;
const int mouseBttonLeft  = BUTTON_3;
const int mouseBttonRight = BUTTON_2;

  // XまたはY移動の出力範囲；移動速度に影響します          
int range = 2;

  // マウスの応答遅延（ミリ秒単位）
int responseDelay = 5;

  // 時間記録パラメータ
unsigned long _currentMillis;
unsigned long _previousMillis;

void setup() {
  // ボタン入力の初期化:
  pinMode(upButton,         INPUT);
  pinMode(downButton,       INPUT);
  pinMode(leftButton,       INPUT);
  pinMode(rightButton,      INPUT);
  pinMode(mouseWheel,       INPUT);
  pinMode(mouseBttonLeft,   INPUT);
  pinMode(mouseBttonRight,  INPUT);
  
  // マウス制御の初期化:
  Mouse.begin();
}

void loop() {
  // ボタン状態の読み取り:
  int upState                     = digitalRead(upButton);
  int downState                   = digitalRead(downButton);
  int rightState                  = digitalRead(rightButton);
  int leftState                   = digitalRead(leftButton);
  int clickState_mouseWheel       = digitalRead(mouseWheel);
  int clickState_mouseButtonLeft  = digitalRead(mouseBttonLeft);
  int clickState_mouseButtonRight = digitalRead(mouseBttonRight);

  // ボタン状態に基づいて移動距離を計算:
  int  xDistance = (leftState - rightState) * range;
  int  yDistance = (upState   - downState)  * range;

/*------------------マウス移動--------------------------------------*/
  // XまたはYがゼロでない場合、移動:
  if ((xDistance != 0) || (yDistance != 0)) {
    Mouse.move(xDistance, yDistance, 0);
  }
  
/*-------------左マウスボタンのクリック------------------------------*/
  // 左マウスボタンが押されている場合:
  if (clickState_mouseButtonLeft == LOW) {
    // マウスが押されていない場合、押す:
    if (!Mouse.isPressed(MOUSE_LEFT)) {
      Mouse.press(MOUSE_LEFT);
      //Mouse.click(MOUSE_LEFT);
    }
  }
  // 左マウスボタンが押されていない場合:
  else {
    // マウスが押されている場合、離す:
    if (Mouse.isPressed(MOUSE_LEFT)) {
      Mouse.release(MOUSE_LEFT);
    }
  }
  
/*-------------右マウスボタンのクリック-----------------------------*/
    // 右マウスボタンが押されている場合:
  if (clickState_mouseButtonRight == LOW) {
    // マウスが押されていない場合、押す:
    if (!Mouse.isPressed(MOUSE_RIGHT)) {
      Mouse.press(MOUSE_RIGHT);
      //Mouse.click(MOUSE_RIGHT);
    }
  }
  // 右マウスボタンが押されていない場合:
  else {
    // マウスが押されている場合、離す:
    if (Mouse.isPressed(MOUSE_RIGHT)) {
      Mouse.release(MOUSE_RIGHT);
    }
  }

/*------------------上スクロール----------------------------------------*/
  if ((upState == LOW) && (clickState_mouseWheel == LOW)) {
    Mouse.move(0, 0, 1);
    My_delay(200);
  }

/*------------------下スクロール--------------------------------------*/
  if ((downState == LOW) && (clickState_mouseWheel == LOW)) {
    Mouse.move(0, 0, -1);
    My_delay(200);
  }
    
/*-----------------------------------------------------------------*/ 
  // マウスが速く動きすぎないようにするための遅延:
  My_delay(responseDelay);
}

// millis() を使用した遅延関数
void My_delay(int Time)
{
  while((_currentMillis - _previousMillis) <= Time)
  {
      _currentMillis = millis();
  }
  _previousMillis = _currentMillis; 
}
```
