---
description: 概要
title: ブザーの使い方
keywords:
- Wio_terminal ブザー
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-Buzzer
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# ブザーの使い方

このリポジトリでは、Wio Terminal に内蔵されている圧電ブザーをコンポーネントとして使用する方法を示します。圧電ブザーはアナログのパルス幅変調（PWM）出力に接続することで、さまざまな音や効果を生成することができます！

## 基本

Wio Terminal の内蔵ブザーはパッシブブザーであり、音を出力するためには交流信号（PWM）が必要です。そのため、以下のように出力を生成することができます：

**注意:** **`WIO_BUZZER`** は内蔵ブザーのピンです。

```cpp
    void setup() {
        pinMode(WIO_BUZZER, OUTPUT);
    }

    void loop() {
        analogWrite(WIO_BUZZER, 128);
        delay(1000);
        analogWrite(WIO_BUZZER, 0);
        delay(1000);
    }
```

**注意:** デフォルトのブザー音を生成するには、ブザーを低電圧で駆動することを推奨します。

## サンプルコード

この例では、ブザーを使用してメロディを再生します。ブザーに適切な周波数の矩形波を送信することで、対応する音を生成します。

```cpp
/* マクロ定義 */
#define BUZZER_PIN WIO_BUZZER /* ブザーの信号ピン */

int length = 15;         /* 音符の数 */
char notes[] = "ccggaagffeeddc ";
int beats[] = { 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 4 };
int tempo = 300;

void setup() {
    // ブザーピンを出力として設定
    pinMode(BUZZER_PIN, OUTPUT);
}

void loop() {
    for(int i = 0; i < length; i++) {
        if(notes[i] == ' ') {
            delay(beats[i] * tempo);
        } else {
            playNote(notes[i], beats[i] * tempo);
        }
        delay(tempo / 2);    /* 音符間の遅延 */
    }

}

// 音を再生
void playTone(int tone, int duration) {
    for (long i = 0; i < duration * 1000L; i += tone * 2) {
        digitalWrite(BUZZER_PIN, HIGH);
        delayMicroseconds(tone);
        digitalWrite(BUZZER_PIN, LOW);
        delayMicroseconds(tone);
    }
}

void playNote(char note, int duration) {
    char names[] = { 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'C' };
    int tones[] = { 1915, 1700, 1519, 1432, 1275, 1136, 1014, 956 };

    // 音符名に対応する音を再生
    for (int i = 0; i < 8; i++) {
        if (names[i] == note) {
            playTone(tones[i], duration);
        }
    }
}
```