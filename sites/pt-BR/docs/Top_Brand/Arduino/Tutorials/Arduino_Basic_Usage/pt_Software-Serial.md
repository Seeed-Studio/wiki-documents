---
description: Guia de Usuário de Serial para Placas Arduino
title: Guia de Usuário de Serial para Placas Arduino
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Software-Serial
last_update:
  date: 1/16/2023
  author: jianjing Huang
createdAt: '2023-01-16'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Software-Serial/
---

# Guia de Usuário de Software Serial do Arduino

O hardware do Arduino tem suporte integrado para **comunicações seriais** nos pinos 0 e 1 (Serial de Hardware), mas em algumas circunstâncias, como quando esses pinos já estão em uso ou você precisa de mais portas seriais para depuração, o [**Software Serial**](https://www.arduino.cc/en/Reference/softwareSerial) pode parecer ser a solução.

Aqui também usaremos um exemplo para demonstrar como usar o Software Serial com o seu Arduino!

## Exemplo de Software Serial

```cpp
/*
RX is digital pin 2 (connect to TX of other device)
TX is digital pin 3 (connect to RX of other device)
*/

#include <SoftwareSerial.h>
SoftwareSerial mySerial(2, 3); // RX, TX

void setup()
{
  Serial.begin(115200);
  while (!Serial) {
  }

  Serial.println("Goodnight moon!");

  mySerial.begin(9600);
  mySerial.println("Hello, world?");
}

void loop()
{
  if (mySerial.available())
    Serial.write(mySerial.read());
  if (Serial.available())
    mySerial.write(Serial.read());
}
```

Na prática, você também pode usar outros dispositivos seriais, como módulos seriais de passagem sem fio, sensores seriais, etc., desde que sejam padrão. Os dispositivos seriais são todos programados de maneira muito semelhante.

## Usando Múltiplos Software Serial

Quando você precisa conectar vários dispositivos seriais, é possível criar múltiplas portas de software serial. Mas, devido à limitação de hardware, o Arduino UNO só pode escutar um software serial por vez. Aqui é fornecido um exemplo para múltiplos software serial:

```cpp
#include <SoftwareSerial.h>
SoftwareSerial serialOne(2, 3); // Software Serial ONE
SoftwareSerial serialTwo(8, 9); // Software Serial TWO

void setup() {
  Serial.begin(9600);
  while (!Serial) { // wait till Serial
  }

  serialOne.begin(9600);
  serialTwo.begin(9600);
}

void loop() {
  serialOne.listen(); // listening on Serial One

  Serial.println("Data from port one:");
  while (serialOne.available() > 0) {
    char inByte = serialOne.read();
    Serial.write(inByte);
  }

  Serial.println();

  serialTwo.listen(); // listening on Serial Two

  Serial.println("Data from port two:");
  while (serialTwo.available() > 0) {
    char inByte = serialTwo.read();
    Serial.write(inByte);
  }

  Serial.println();
}
```

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
