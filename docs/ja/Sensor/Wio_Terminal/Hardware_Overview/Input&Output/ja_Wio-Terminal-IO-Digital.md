---
title: デジタル
nointro:
keywords:
  - ドキュメント
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Wio-Terminal-IO-Digital/
slug: /ja/Wio-Terminal-IO-Digital
last_update:
  date: 05/15/2025
  author: gunengyu
---


# Wio Terminal の Grove デジタルポートの使用方法

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-12%2014-55-44.2019-12-12%2014_56_10.gif" /></div>

このリポジトリでは、Wio Terminal の Grove ポートをデジタルポートとして使用する方法を示します。この機能を使用して、Grove エコシステムを簡単に楽しむことができます！

## RPI デジタルピン

Raspberry Pi のピン配置は以下のように定義されています：

- `RPI_D0` -> `RPI_D8`

## Grove ポートの設定

**Grove 設定可能 A/D ポート** をデジタルポートとして使用するには、以下のように定義します：

```cpp
void setup() {
    pinMode(D0, INPUT); //UART TX をデジタルポートとして設定
}
```

### Grove I2C ポートをデジタルポートとして使用する

**Grove I2C ポート** も Wio Terminal 上でデジタルポートとして使用できます：

```cpp
void setup() {
    pinMode(PIN_WIRE_SCL, INPUT); //I2C ポートの SCL をデジタル入力として定義
```

次に、物理的な Grove ポートに Grove センサーを接続してください！

**注意:** より詳細なバリアントピン名については、回路図および `variant.h` を確認してください。

## サンプルコード

この例では、Grove ボタンと Grove LED を使用して動作を示します：

```cpp
#define BUTTON D0 //Grove UART ポートにボタンを接続
#define LED PIN_WIRE_SCL //Grove I2C ポートに LED を接続

void setup() {
  Serial.begin(115200);
  pinMode(BUTTON, INPUT);
  pinMode(LED, OUTPUT);
}

void loop() {
  int buttonState = digitalRead(BUTTON);
  Serial.print("ボタンの状態: ");
  Serial.println(buttonState);

  if (buttonState == HIGH) {
    digitalWrite(LED, HIGH);
  }
  else {
    digitalWrite(LED, LOW);
  }
  delay(50);
}
```

## PWM 出力サンプルコード (サーボ)

この例では、Grove サーボを使用して PWM 出力を示します：

```cpp
#include <Servo.h>
Servo myservo;

int pos = 0;

void setup() {
  myservo.attach(D0); //Grove デジタルポートにサーボを接続
}

void loop() {
  for (pos = 0; pos <= 180; pos += 1) {
    // 1度ずつ移動
    myservo.write(pos);
    delay(15);
  }
  for (pos = 180; pos >= 0; pos -= 1) {
    myservo.write(pos);
    delay(15);
  }
}
```

**注意:** Wio Terminal で Servo ライブラリを使用するには、SAMD51 に対応した [Adafruit のバージョン](https://github.com/PaintYourDragon/Servo) を含めてください。

## UART シリアル

- Wio Terminal の USB シリアル: `Serial`

- ブレークアウトされた UART ポート: `Serial1`

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