---
description: Visão geral
title: Primeiros Passos com o Buzzer
keywords:
  - Wio_terminal Buzzer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Buzzer
last_update:
  date: 1/17/2023
  author: jianjing Huang
createdAt: '2023-01-17'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Buzzer/
---

# Primeiros Passos com o Buzzer

Este repositório demonstra como usar o buzzer piezo embutido como um componente no Wio Terminal. O piezo pode ser conectado a uma saída de modulação por largura de pulso (PWM) analógica para gerar vários tons e efeitos!

## Conceitos básicos

O buzzer integrado do Wio Terminal é um buzzer passivo, o que significa que ele requer um sinal AC (PWM) para disparar e emitir um som, então você pode gerar uma saída seguindo isto:

**Observação:** **`WIO_BUZZER`** é o pino do Buzzer integrado.

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

**Observação:** Para gerar um som padrão do buzzer, é recomendado acionar o buzzer usando uma tensão mais baixa.

## Código de exemplo

Este exemplo usa um buzzer para tocar melodias. Ele envia uma onda quadrada com a frequência apropriada para o buzzer, gerando o tom correspondente.

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
