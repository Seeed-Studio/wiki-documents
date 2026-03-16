---
description: Visão geral
title: Primeiros Passos com o Emissor Infravermelho
keywords:
  - Wio_terminal Infrared_Emitter
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Infrared-Emitter
last_update:
  date: 1/17/2023
  author: jianjing Huang
createdAt: '2023-01-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Infrared-Emitter/
---

# Primeiros Passos com o Emissor Infravermelho

Este repositório demonstra como usar o Emissor Infravermelho integrado como componente no Wio Terminal. O Emissor Infravermelho é uma Interface Digital e pode ser usado para enviar sinal IR, exatamente como faz um controle remoto!

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-IR.gif)

## Instalando a Biblioteca de Infravermelho para o Wio Terminal

1. Acesse o repositório [Seeed_Arduino_IR](https://github.com/Seeed-Studio/Seeed_Arduino_IR) e faça o download de todo o repositório para o seu disco local.

2. Agora, a biblioteca de Infravermelho pode ser instalada na Arduino IDE. Abra a Arduino IDE e clique em `sketch` -> `Include Library` -> `Add .ZIP Library`, e escolha o arquivo `Seeed_Arduino_IR` que você acabou de baixar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## Código de Exemplo

Navegue até **Files** -> **Examples** -> **IRLib2** -> **Send**. O exemplo de envio aparecerá e deverá ser semelhante ao mostrado abaixo. Para testar o sinal IR do Wio Terminal, você pode usar um [Grove - Infrared Receiver](https://wiki.seeedstudio.com/pt-br/Grove-Infrared_Receiver/). Isso pode ser facilmente modificado para usar o Wio Terminal como seu controle remoto de TV!

**Observação:** **`WIO_IR`** é definido para o Emissor Infravermelho integrado (já definido no arquivo de cabeçalho desta biblioteca, portanto não há necessidade de defini-lo no arquivo ino)

```cpp
/* send.ino Example sketch for IRLib2
 *  Illustrates how to send a code.
 */
#include <IRLibSendBase.h>    // First include the send base
//Now include only the protocols you wish to actually use.
//The lowest numbered protocol should be first but remainder 
//can be any order.
#include <IRLib_P01_NEC.h>
#include <IRLib_P02_Sony.h>
#include <IRLibCombo.h>     // After all protocols, include this
// All of the above automatically creates a universal sending
// class called "IRsend" containing only the protocols you want.
// Now declare an instance of that sender.

IRsend mySender;

void setup() {
  Serial.begin(9600);
  delay(2000); while (!Serial); //delay for Leonardo
  Serial.println(F("Every time you press a key is a serial monitor we will send."));
}

void loop() {
  if (Serial.read() != -1) {
  //   send a code every time a character is received from the 
  //   serial port. You could modify this sketch to send when you
  //   push a button connected to an digital input pin.
  //   Substitute values and protocols in the following statement
  //   for device you have available.
  //  mySender.send(SONY,0xa8bca, 20);//Sony DVD power A8BCA, 20 bits
    mySender.send(NEC,0x61a0f00f,0);//NEC TV power button=0x61a0f00f
    Serial.println(F("Sent signal."));
  }
}
```

**Observação:** O Emissor Infravermelho está na parte de trás do Wio Terminal, à esquerda do slot para cartão SD.
