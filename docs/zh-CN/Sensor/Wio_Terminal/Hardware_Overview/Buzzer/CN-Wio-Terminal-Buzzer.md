---
description: 概述
title: 蜂鸣器入门指南
keywords:
- Wio_terminal Buzzer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Buzzer
last_update:
  date: 3/09/2024
  author: 金菊
---

# 蜂鸣器入门指南

蜂鸣器

## 基础知识

Wio terminal上的内置蜂鸣器是一个无源蜂鸣器，这意味着它需要一个交流信号（PWM）来触发并输出声音，因此您可以按照以下步骤生成输出：

**注:** **`WIO_BUZZER`** 是内置蜂鸣器的引脚。

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

**注:**  为了产生默认的蜂鸣器声音，建议使用较低的电压驱动蜂鸣器。

## 示例代码

此示例使用蜂鸣器播放旋律。它向蜂鸣器发送适当频率的方波，从而产生相应的音调。

```cpp
/* Macro Define */
#define BUZZER_PIN WIO_BUZZER /* sig pin of the buzzer */

int length = 15;         /* the number of notes */
char notes[] = "ccggaagffeeddc ";
int beats[] = { 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 4 };
int tempo = 300;

void setup() {
    //set buzzer pin as output
    pinMode(BUZZER_PIN, OUTPUT);
}

void loop() {
    for(int i = 0; i < length; i++) {
        if(notes[i] == ' ') {
            delay(beats[i] * tempo);
        } else {
            playNote(notes[i], beats[i] * tempo);
        }
        delay(tempo / 2);    /* delay between notes */
    }

}

//Play tone
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

    // play the tone corresponding to the note name
    for (int i = 0; i < 8; i++) {
        if (names[i] == note) {
            playTone(tones[i], duration);
        }
    }
}
```
