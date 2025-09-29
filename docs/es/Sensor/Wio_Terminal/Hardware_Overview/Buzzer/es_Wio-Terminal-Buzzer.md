---
description: Descripción general
title: Primeros pasos con el Buzzer
keywords:
- Wio_terminal Buzzer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Buzzer
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Primeros pasos con el Buzzer

Este repositorio demuestra cómo usar el buzzer piezoeléctrico integrado como un componente en Wio Terminal. ¡El piezo puede conectarse a una salida de modulación por ancho de pulso (PWM) analógica para generar varios tonos y efectos!

## Conceptos básicos

El buzzer integrado de Wio Terminal es un buzzer pasivo, lo que significa que requiere una señal AC (PWM) para activarse y producir un sonido, por lo que puedes generar una salida siguiendo esto:

**Nota:** **`WIO_BUZZER`** es el Pin del Buzzer integrado.

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

**Nota:** Para generar un sonido de buzzer predeterminado, se recomienda activar el buzzer usando un voltaje más bajo.

## Código de ejemplo

Este ejemplo usa un buzzer para reproducir melodías. Envía una onda cuadrada de la frecuencia apropiada al buzzer, generando el tono correspondiente.

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