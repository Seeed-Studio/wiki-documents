---
description: Teclado
title: Teclado
keywords:
  - Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-USBCLIENT-Keyboard
last_update:
  date: 1/17/2023
  author: jianjing Huang
createdAt: '2023-01-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-USBCLIENT-Keyboard/
---

# Usando o Wio Terminal como um Teclado

Este wiki apresenta como usar o Wio Terminal como um teclado simples. Ele atribuiu as 3 teclas `s`, `e`, `d` aos 3 botões no Wio Terminal. Isso pode ser facilmente implementado no seu projeto para tarefas mais desafiadoras.

## Instalando Bibliotecas

Este exemplo também requer uma biblioteca de teclado Arduino adicional:

1. Visite o repositório da [Arduino Keyboard Library](https://github.com/arduino-libraries/Keyboard) e baixe todo o repositório para o seu disco local.

2. Agora, a biblioteca pode ser instalada na IDE do Arduino. Abra a IDE do Arduino e clique em `sketch` -> `Include Library` -> `Add .ZIP Library`, e escolha o arquivo `Keyboard-master` que você acabou de baixar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## Código Completo

Para mais funcionalidades, consulte as [funções de teclado](https://www.arduino.cc/reference/en/language/functions/usb/keyboard/) oficiais do Arduino.

```cpp
#include "Keyboard.h" //keyboard library 

void setup() { 
  //set button pins as inputs
  pinMode(WIO_KEY_A, INPUT);
  pinMode(WIO_KEY_B, INPUT);
  pinMode(WIO_KEY_C, INPUT);

  Keyboard.begin(); //start keyboard communication
}

void loop() {  
  if (digitalRead(WIO_KEY_A) == LOW) { //detect button press
    Keyboard.write('s'); //single key is pressed (character) 
  }
  if (digitalRead(WIO_KEY_B) == LOW) {   
    Keyboard.write('e'); 
  }  
  if (digitalRead(WIO_KEY_C) == LOW) {        
    Keyboard.write('d');  
  } 

  delay(200); //delay between keypresses

}
```
