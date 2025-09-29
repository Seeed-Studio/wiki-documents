---
description: 概述
title: 蜂鸣器入门指南
keywords:
- Wio_terminal Buzzer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Buzzer
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# 蜂鸣器入门指南

本仓库演示了如何在 Wio Terminal 中使用内置压电蜂鸣器作为组件。压电蜂鸣器可以连接到模拟脉宽调制(PWM)输出来生成各种音调和效果！

## 基础知识

Wio Terminal 的内置蜂鸣器是一个无源蜂鸣器，这意味着它需要一个交流信号(PWM)来触发并输出声音，所以你可以按照以下方式生成输出：

**注意：** **`WIO_BUZZER`** 是内置蜂鸣器引脚。

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

**注意：** 要生成默认的蜂鸣器声音，建议使用较低的电压来驱动蜂鸣器。

## 示例代码

这个示例使用蜂鸣器播放旋律。它向蜂鸣器发送适当频率的方波，生成相应的音调。

```cpp
/* 宏定义 */
#define BUZZER_PIN WIO_BUZZER /* 蜂鸣器的信号引脚 */

int length = 15;         /* 音符的数量 */
char notes[] = "ccggaagffeeddc ";
int beats[] = { 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 4 };
int tempo = 300;

void setup() {
    //设置蜂鸣器引脚为输出
    pinMode(BUZZER_PIN, OUTPUT);
}

void loop() {
    for(int i = 0; i < length; i++) {
        if(notes[i] == ' ') {
            delay(beats[i] * tempo);
        } else {
            playNote(notes[i], beats[i] * tempo);
        }
        delay(tempo / 2);    /* 音符之间的延迟 */
    }

}

//播放音调
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

    // 播放与音符名称对应的音调
    for (int i = 0; i < 8; i++) {
        if (names[i] == note) {
            playTone(tones[i], duration);
        }
    }
}
```