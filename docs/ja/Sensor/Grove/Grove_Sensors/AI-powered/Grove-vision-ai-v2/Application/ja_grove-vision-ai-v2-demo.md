---
description: Grove Vision AI V2 と XIAO ESP32 シリーズを使用したいくつかの例。
title: Grove Vision AI V2 と XIAO ESP32 の例
keywords:
- xiao
- vision AI
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/grove_vision_ai_v2_demo
last_update:
  date: 05/15/2025
  author: Citric
---


# Grove Vision AI V2 と XIAO ESP32 の例

エッジコンピューティングの可能性を解き放ち、Grove Vision AI V2 と XIAO ESP32 シリーズ MCU の強力な組み合わせで AI ビジョンの魅力的な世界を探求しましょう。このチュートリアルでは、これらの最先端技術のシームレスな統合を示す、2～3 の魅力的なデモを案内します。

経験豊富な開発者でも、好奇心旺盛な愛好家でも、これらのデモは Grove Vision AI V2 と XIAO ESP32 の能力を活用する実践的な経験を提供します。物体検出と認識からインテリジェントなシーン分析まで、可能性の限界を押し広げる革新的なアプリケーションを作成する方法を発見できます。

AI ビジョンの秘密を解き明かし、独自の画期的なプロジェクトを構築する力を得るためのエキサイティングな旅に出る準備をしましょう。それでは、Grove Vision AI V2 と XIAO ESP32 の魔法を一緒に解き放ちましょう！

この冒頭の説明は、読者の関心を引き付け、主要なコンポーネント（Grove Vision AI V2 と XIAO ESP32）を強調し、チュートリアルで取り上げる内容を簡単に紹介します。これらの技術を組み合わせることで得られるエキサイティングな可能性を強調し、読者がデモを熱心に探求するよう促します。必要に応じて、この段落をチュートリアルのスタイルやトーンに合わせて調整してください。

## はじめに

### ハードウェアの準備

この記事のチュートリアルと手順は、XIAO ESP32 シリーズ製品（XIAO ESP32S3、XIAO ESP32C3、XIAO ESP32C6 など）で使用できます。このチュートリアルの内容を完了するために、XIAO ESP32 シリーズ製品のいずれかを選択してください。

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ESP32S3</th>
			<th>XIAO ESP32C3</th>
            <th>XIAO ESP32C6</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:110, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

マスター MCU に加えて、このプロジェクトの内容を完了するために Grove Vision AI V2 と対応するカメラを準備する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/00.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-V2-Kit-p-5852.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

別のカメラを使用したい場合は、[こちらの対応カメラリスト](https://wiki.seeedstudio.com/ja/Grove-vision-ai-v2-camera-supported/)を参照して詳細を確認してください。

### ソフトウェアの準備

Grove Vision AI V2 を初めて使用する場合は、以下の Wiki を読んで SenseCraft AI の使用方法やモデルのアップロード方法を学び、Grove Vision AI V2 用の Arduino ライブラリのインストール方法を理解することをお勧めします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/grove_vision_ai_v2_software_support/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Wiki を見る</font></span></strong>
    </a>
</div>

## プロジェクト I: 顔追跡ファンの作成

このエキサイティングなデモでは、顔を自動的に追跡し、常に爽やかな風を送る顔追跡ファンの作成方法を紹介します。

Grove Vision AI V2 を使用して、顔認識の技術を活用し、リアルタイムで顔を検出・追跡します。Vision AI V2 は顔の座標を継続的に出力し、ファンの正確な位置決めに必要なデータを提供します。

### ステップ 1. 顔認識モデルを Grove Vision AI V2 にアップロードする

このプロジェクトでは、顔を追跡するファンを作成するため、Grove Vision AI V2 に顔認識モデルを使用します。このモデルは SenseCraft AI を使用してアップロードし、プレビューウィンドウで検出を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_demo/1.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 2. ファンと回転構造の準備

ファンの構造を改造するのは簡単ではないため、ファンの回転構造として、サーボで制御される水平回転シャーシを作成する予定です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_demo/2.jpg" style={{width:400, height:'auto'}}/></div>

次に、アクリル板とホットメルト接着剤を使用して、ファンをベースサーボに接着しました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_demo/3.jpg" style={{width:400, height:'auto'}}/></div>

サーボの配線は XIAO ESP32 の D6 ピンに接続され、5V で電源供給されます。Grove Vision AI V2 は Grove インターフェースを介して XIAO の IIC インターフェースに簡単に接続されます。ここでは、配線を簡単にするために [XIAO 用拡張ボード](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) も使用しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_demo/4.jpg" style={{width:400, height:'auto'}}/></div>

最後に、Grove Vision AI V2 のカメラをファンの中央に接着するのを忘れないでください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_demo/5.jpg" style={{width:400, height:'auto'}}/></div>

### ステップ 3. XIAO にプログラムをアップロードする

以下はこのプロジェクトの完全なプログラムです。XIAO ESP32 シリーズにこのプログラムをコンパイルしてアップロードしてください。

```cpp
#include <Seeed_Arduino_SSCMA.h>
SSCMA Infer;

void stop_rotate(void)
{
    digitalWrite(D6, HIGH);
    delayMicroseconds(1500);
    digitalWrite(D6, LOW);
}

void servo_rotate(int rtime, bool revers = false)
{
    uint32_t sleep;
    if (revers)
    {
        sleep = 2500;
    }
    else
    {
        sleep = 500;
    }
    digitalWrite(D6, HIGH);

    delayMicroseconds(sleep);
    digitalWrite(D6, LOW);
    delay(30 * rtime);
    stop_rotate();
}

void setup()
{
    Infer.begin();
    Serial.begin(9600);
    pinMode(D6, OUTPUT);
}

void loop()
{
    if (!Infer.invoke())
    {
        if (Infer.boxes().size() > 0)
        {
            if (Infer.boxes()[0].x < 80)
            {
                servo_rotate(1, true);
            }
            else if (Infer.boxes()[0].x > 140)
            {
                servo_rotate(1, false);
            }
            Serial.print("X==>>");
            Serial.print(Infer.boxes()[0].x);
            Serial.print("Y==>>");
            Serial.println(Infer.boxes()[0].y);
        }
    }
}
```

プログラムが正常に動作すれば、以下のような効果が確認できるはずです。

<div class="table-center">
<iframe width="500" height="300" src="https://files.seeedstudio.com/wiki/visionai_v2_demo/project1.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::note
サーボの回転や角度はサーボごとに異なる場合があるため、使用するサーボに応じて適切な調整が必要になる場合があります。
:::

### プログラムの注釈

コードは以下のように構成されています：

1. ライブラリのインクルード:
   - `Seeed_Arduino_SSCMA.h`: Grove Vision AI V2 を使用した推論を可能にします。

2. オブジェクトの宣言:
   - `SSCMA Infer`: 推論用の SSCMA クラスのインスタンスを作成します。

3. stop_rotate 関数:
   - 特定のパルス幅を送信してサーボモーターの回転を停止します。

4. servo_rotate 関数:
   - 指定された時間と方向でサーボモーターを回転させます。
   - `rtime`: 回転時間を 30 ミリ秒単位で指定します。
   - `revers`: 回転方向を指定します（true は逆方向、false は正方向）。

5. setup 関数:
   - Grove Vision AI V2、シリアル通信を初期化し、サーボモーターのピン (D6) を出力として設定します。

6. loop 関数:
   - 推論プロセスを継続的に呼び出します。
   - オブジェクトが検出された場合:
     - オブジェクトの x 座標が 80 未満の場合、サーボモーターは短時間逆方向に回転します。
     - オブジェクトの x 座標が 140 を超える場合、サーボモーターは短時間正方向に回転します。
   - 検出されたオブジェクトの x 座標と y 座標をシリアルモニターに出力します。

コードを変更してオブジェクト追跡システムをカスタマイズするには、以下を行うことができます：

1. ループ関数内の閾値 (80 と 140) を調整して、サーボモーターが停止する範囲を変更します。

2. `servo_rotate` 関数を変更して、サーボモーターの回転時間と速度を調整します。

3. オブジェクトの位置に基づいてシステムの動作をカスタマイズします。たとえば、検出されたオブジェクトの x 座標や y 座標に応じて追加の条件やアクションを追加できます。

4. 追加のサーボモーターを制御したり、オブジェクトの位置に基づいて他のアクションを実行するようにコードを拡張します。

## プロジェクト II: 自動PCロック/解除

Grove Vision AI V2とXIAO ESP32を使用したこの自動画面ロック/解除プロジェクトで、コンピュータのセキュリティと利便性を向上させましょう。この革新的なセットアップにより、離席時には画面がロックされ、戻った際には迅速に解除されるため、シームレスで安全なユーザー体験を提供します。

### ステップ 1. 顔認識モデルをGrove Vision AI V2にアップロード

このプロジェクトでは、コンピュータの前に誰かがいるかどうかに基づいてPCをロック/解除します。そのため、Grove Vision AI V2には顔認識モデルを使用する必要があります。このモデルはSenseCraft AIを使用してアップロードし、プレビューウィンドウで検出を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_demo/1.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 2. XIAOをコンピュータに接続し、XIAO用プログラムをアップロード

以下はこのプロジェクトの完全なプログラムです。このプログラムをXIAO ESP32シリーズにコンパイルしてアップロードしてください。

```cpp
#include "USB.h"
#include <USBHIDKeyboard.h>
#include <Seeed_Arduino_SSCMA.h>

#define KEY_DEBOUNCE 100
#define KEY_WAIT 500
// 周囲に誰もいない場合の画面停止時間（単位: ms）
#define SCREEN_TIME 10000

SSCMA Infer;
USBHIDKeyboard Keyboard;

extern char password[] = "YOUR_COMPUTER_PASSWORD";
extern uint pass_size = 6;
unsigned long times;

bool locked = false; 

void lockPC() {
  Keyboard.press(KEY_LEFT_CTRL);
  Keyboard.press(KEY_LEFT_ALT);
  Keyboard.press(KEY_DELETE);
  delay(KEY_DEBOUNCE);
  Keyboard.releaseAll();
  delay(KEY_WAIT);
  
  Keyboard.press(KEY_RETURN);
  delay(KEY_DEBOUNCE);
  Keyboard.releaseAll();
  locked = true;
}

void unlockPC (){
  Keyboard.press(KEY_RETURN);
  delay(KEY_DEBOUNCE);
  Keyboard.releaseAll();
  delay(KEY_WAIT);
  for(int i = 0; i < pass_size; i++){
    Keyboard.press(password[i]);
    delay(KEY_DEBOUNCE);
    Keyboard.releaseAll();
  }
  delay(KEY_WAIT);
  Keyboard.press(KEY_RETURN);
  delay(KEY_DEBOUNCE);
  Keyboard.releaseAll();
  locked = false;
}

void setup() {
  // 初回実行時のセットアップコード
  Serial.begin(115200);
  Serial.println("Scanning...");

  // HID開始
  Keyboard.begin();
  USB.begin();
  Infer.begin();

  times = millis();
}

void loop() {
  // 繰り返し実行されるメインコード
  if (!Infer.invoke()) {
    if (Infer.boxes().size() > 0) {
      if (locked) {
        unlockPC();
        Serial.println("Unlock");
      }
      times = millis();
    } else {
      if ((millis() - times) > SCREEN_TIME && !locked) {
        lockPC();
        Serial.println("Lock");
      }
    }
  } else {
    if ((millis() - times) > SCREEN_TIME && !locked) {
      lockPC();
      Serial.println("Lock");
    }
  }
}
```

プログラムが正常に動作すれば、以下のような効果が確認できます。

<div class="table-center">
<iframe width="500" height="300" src="https://files.seeedstudio.com/wiki/visionai_v2_demo/project2.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
1. このプログラムはWindowsコンピュータでのみ動作します。他のシステムを使用している場合は、画面をオフにするコマンドを変更する必要があります。

2. Windowsコンピュータが指紋認証やパスワード以外の解除方法を設定している場合、解除コードが機能しない可能性があります。
:::

### プログラムの注釈

コードは以下のように構成されています：

1. 必要なライブラリをインクルード:
   - `USB.h`: USB通信を処理します。
   - `USBHIDKeyboard.h`: USB HIDキーボード機能を有効にします。
   - `Seeed_Arduino_SSCMA.h`: 人物検出の推論機能を提供します。

2. 定数を定義:
   - `KEY_DEBOUNCE`: キーボード入力のデバウンス時間。
   - `KEY_WAIT`: キーボード入力間の待機時間。
   - `SCREEN_TIME`: 人物がいない場合に画面をロックするまでの時間。

3. SSCMA (Infer)とUSBHIDKeyboard (Keyboard)クラスのインスタンスを作成。

4. 変数を宣言:
   - `password[]`: コンピュータの解除用パスワードを格納。
   - `pass_size`: パスワードの長さを格納。
   - `times`: 最後に人物が検出されたタイムスタンプを格納。
   - `locked`: コンピュータの現在のロック状態を追跡。

5. lockPC関数:
   - キーボードショートカット（Win+L）をシミュレートしてコンピュータをロック。
   - `KEY_DEBOUNCE`と`KEY_WAIT`の期間待機。
   - リターンキーを押してロックアクションを確認。
   - ロック状態を示す`locked`変数を更新。

6. unlockPC関数:
   - リターンキーを押して解除プロセスを開始。
   - `KEY_DEBOUNCE`と`KEY_WAIT`の期間待機。
   - パスワードを1文字ずつ入力する動作をシミュレート。
   - リターンキーを押してパスワード入力を確認。
   - ロック解除状態を示す`locked`変数を更新。

7. setup関数:
   - シリアル通信を初期化。
   - USBキーボード（Keyboard）と推論エンジン（Infer）を開始。
   - 人物検出の初期タイムスタンプを設定。

8. loop関数:
   - 推論エンジン（Infer）を呼び出し。
   - 人物が検出された場合:
     - コンピュータがロックされている場合、`unlockPC`関数を呼び出して解除。
     - 最後に人物が検出されたタイムスタンプを更新。
   - 人物が検出されない場合:
     - 最後に人物が検出されてからの時間が`SCREEN_TIME`を超え、コンピュータがロックされていない場合、`lockPC`関数を呼び出してロック。
   - 推論が失敗した場合:
     - 最後に人物が検出されてからの時間が`SCREEN_TIME`を超え、コンピュータがロックされていない場合、`lockPC`関数を呼び出してロック。

コードをカスタマイズするには、以下の変更を行うことができます：

1. パスワードを更新:
   - `YOUR_COMPUTER_PASSWORD`を実際のコンピュータパスワードに置き換えます。
   - `pass_size`をパスワードの長さに合わせて変更します。

2. 定数を調整:
   - `KEY_DEBOUNCE`と`KEY_WAIT`を変更してキーボード入力のタイミングを調整します。
   - `SCREEN_TIME`を変更して、人物がいない場合に画面をロックするまでの時間を調整します。

3. ロックおよび解除プロセスをカスタマイズ:
   - `lockPC`および`unlockPC`関数内で、キーボードショートカットや入力シーケンスを特定のオペレーティングシステムやセキュリティ設定に合わせて変更できます。

4. 追加機能の統合:
   - コンピュータがロックまたはアンロックされた際に、追加のアクションや通知を含めるようにコードを拡張できます。
   - 例えば、メールを送信したり、アラームをトリガーしたり、イベントをログに記録したりすることが可能です。

## プロジェクト III: ジェスチャーコントロールマウス

Grove Vision AI V2 と XIAO ESP32 を使用して、画期的なジェスチャーコントロールマウスプロジェクトで人間とコンピュータのインタラクション体験を変革しましょう。従来のマウス入力に別れを告げ、より直感的で自然な方法でコンピュータを操作することができます。

このプロジェクトでは、Grove Vision AI V2 が中心的な役割を果たし、その高度なコンピュータビジョン機能を活用してユーザーの手のジェスチャーを検出および追跡します。高度なアルゴリズムを使用して、特定の手の動きを認識し、それを対応するマウスアクションに変換します。

### ステップ 1. ジェスチャー認識モデルを Grove Vision AI V2 にアップロードする

このプロジェクトでは、ジェスチャーに基づいてマウスを操作するため、Grove Vision AI V2 に必要なのはジェスチャー認識モデルです。このモデルを SenseCraft AI を使用してアップロードし、プレビューウィンドウで検出を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_demo/6.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 2. XIAO をコンピュータに接続し、プログラムをアップロードする

以下はこのプロジェクトの完全なプログラムです。XIAO ESP32 シリーズ用にコンパイルしてアップロードしてください。

```cpp
#include <Seeed_Arduino_SSCMA.h>
#include "USBHIDMouse.h"
#include "USB.h"

#define KEY_DEBOUNCE 100
#define KEY_WAIT 500
#define RESET_NUM 3
#define LEFT_CLICK_TARGET 0
#define MOVE_TARGET 1
#define RIGHT_CLICK_TARGET 2

SSCMA Infer;
USBHIDMouse Mouse;

int X = 0, Y = 0;
int8_t mx, my;
bool clicked = false;
int reset_mouse = RESET_NUM;

void setup() {
  // 初期設定: 一度だけ実行される
  Serial.begin(115200);
  Infer.begin();
  
  // マウス制御の初期化:
  Mouse.begin();
  USB.begin();
}

void move_mouse(int mx, int my) {
  Mouse.move(mx, my);
}

void loop() {
  if (!Infer.invoke()) {
    Serial.println("INVOKE SUCCESS:");
    if (Infer.boxes().size() == 0) {
      if (reset_mouse <= 0) {
        X = 0;
        Y = 0;
      } else {
        reset_mouse -= 1;
      }
    }

    for (int i = 0; i < Infer.boxes().size() && i < 1; i++) {
      reset_mouse = RESET_NUM;
      if (Infer.boxes()[i].target == MOVE_TARGET) {
//        Mouse.press(MOUSE_RIGHT);
        if (X == 0 && Y == 0) {
          X = Infer.boxes()[i].x;
          Y = Infer.boxes()[i].y;
        } else {
          mx = Infer.boxes()[i].x - X;
          my = Infer.boxes()[i].y - Y;
          X = Infer.boxes()[i].x;
          Y = Infer.boxes()[i].y;
          move_mouse(-mx * 2, my * 2);
          clicked = false;
        }
      } else if (Infer.boxes()[i].target == LEFT_CLICK_TARGET && !clicked) {
        Mouse.press(MOUSE_LEFT);
        delay(KEY_DEBOUNCE);
        Mouse.release(MOUSE_LEFT);
        delay(KEY_WAIT);
        clicked = true;
      } else if (Infer.boxes()[i].target == RIGHT_CLICK_TARGET && !clicked) {
        Mouse.press(MOUSE_RIGHT);
        delay(KEY_DEBOUNCE);
        Mouse.release(MOUSE_RIGHT);
        delay(KEY_WAIT);
        clicked = false;
      }
    }

  } else {
    Serial.println("INVOKE FAILE!");
  }
}
```

プログラムが正常に動作すると、以下のような効果が確認できます。

<div class="table-center">
<iframe width="500" height="300" src="https://files.seeedstudio.com/wiki/visionai_v2_demo/project3.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### プログラムの注釈

コードは以下のように構成されています：

1. 必要なライブラリをインクルード:
   - `Seeed_Arduino_SSCMA.h`: ターゲット検出の推論機能を提供。
   - `USBHIDMouse.h`: USB HID マウス機能を有効化。
   - `USB.h`: USB 通信を処理。

2. 定数を定義:
   - `KEY_DEBOUNCE`: マウスクリックのデバウンス時間。
   - `KEY_WAIT`: マウスクリック間の待機時間。
   - `RESET_NUM`: ターゲットが検出されないフレーム数がこの値に達するとマウス位置をリセット。
   - `LEFT_CLICK_TARGET`, `MOVE_TARGET`, `RIGHT_CLICK_TARGET`: 各アクションに対応するターゲット ID。

3. SSCMA (Infer) と USBHIDMouse (Mouse) クラスのインスタンスを作成。

4. 変数を宣言:
   - `X`, `Y`: 現在のマウス位置を格納。
   - `mx`, `my`: マウス移動の差分を格納。
   - `clicked`: クリック状態を追跡。
   - `reset_mouse`: マウス位置をリセットするためのカウンター。

5. setup 関数:
   - シリアル通信を初期化。
   - 推論エンジン (Infer) と USB マウス (Mouse) を開始。

6. move_mouse 関数:
   - 指定された差分 (`mx`, `my`) に基づいてマウスを移動。

7. loop 関数:
   - 推論エンジン (Infer) を呼び出し。
   - 推論が成功し、ターゲットが検出されない場合、`RESET_NUM` フレーム後にマウス位置をリセット。
   - 検出されたターゲットを反復処理 (このコードでは 1 つに制限):
     - ターゲットが `MOVE_TARGET` の場合:
       - ターゲットの座標に基づいてマウス位置を更新。
       - マウス移動の差分 (mx, my) を計算。
       - マウスを対応するように移動。
     - ターゲットが `LEFT_CLICK_TARGET` で、まだクリックされていない場合:
       - 左クリックを実行。
       - `KEY_DEBOUNCE` と `KEY_WAIT` の期間待機。
     - ターゲットが `RIGHT_CLICK_TARGET` で、まだクリックされていない場合:
       - 右クリックを実行。
       - `KEY_DEBOUNCE` と `KEY_WAIT` の期間待機。
   - 推論が失敗した場合、エラーメッセージを出力。

コードをカスタマイズするには、以下の変更を行うことができます：

1. 定数の調整:
   - `KEY_DEBOUNCE` と `KEY_WAIT` を変更してマウスクリックのタイミングを調整。
   - `RESET_NUM` を変更して、ターゲットが検出されないフレーム数を調整。
   - `LEFT_CLICK_TARGET`, `MOVE_TARGET`, `RIGHT_CLICK_TARGET` を更新して、特定のターゲット ID に対応。

2. ターゲット処理ロジックの変更:
   - loop 関数内で、検出されたターゲットに基づく条件やアクションを追加、削除、または変更。
   - 例えば、追加のマウスボタンを追加したり、ダブルクリックを実装したり、特定のターゲット ID に基づいて異なるアクションをトリガーすることが可能です。

3. マウス移動のカスタマイズ:
   - `move_mouse` 関数内で、マウス移動の挙動を調整することができます。例えば、乗算係数（`-mx * 2`、`my * 2`）を変更したり、追加のロジックを加えたりすることでカスタマイズが可能です。

4. 追加機能の統合:
   - 適切なライブラリや関数を利用することで、キーボード操作、メディアコントロール、その他必要な機能をコードに拡張して統合することができます。


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>