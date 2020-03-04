# Getting Started with Buzzer

This repo demonstartes how to use the built-in piezo buzzer as a component in Rescreen. The piezo can be connected to an analog pulse-width modulation(PWM) output to generate various tones and effects!

## Basics

The built-in buzzer of Rescreen is a passive buzzer, meaning that it requires a AC signal(PWM) to trigger and output a sound, so you can generate an output following this:

**Note:** **`BUZZER_CTR`** is the built-in Buzzer Pin.

```cpp
void setup() {
    pinMode(BUZZER_CTR, OUTPUT);
}

void loop() {
    analogWrite(BUZZER_CTR, 128);
    delay(1000);
    analogWrite(BUZZER_CTR, 0);
    delay(1000);
}
```

**Note:** To generate a default buzzer sound, it is recommneded to drive the buzzer using a lower voltage.

## Exmaple code

This example use a buzzer to play melodies. It sends a square wave of the appropriate frequency to the buzzer, generating the corresponding tone.

```cpp
/* Macro Define */
#define BUZZER_PIN BUZZER_CTR /* sig pin of the buzzer */

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
