---
description: Guia do Usuário de SPI para Placas Arduino
title: Guia do Usuário de SPI para Placas Arduino
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Software-SPI
last_update:
  date: 1/16/2023
  author: jianjing Huang
createdAt: '2023-01-16'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Software-SPI/
---

# Guia do Usuário de SPI por Software no Arduino

De forma semelhante às comunicações I2C e Serial, o [**SPI**](https://www.arduino.cc/en/reference/SPI) pode ser virtualizado usando software para superar limitações físicas. Aqui é apresentado um exemplo de uso de SPI por software com Arduino.

**O que é SPI**

Serial Peripheral Interface (SPI) é um protocolo síncrono de dados seriais usado por microcontroladores para se comunicar com um ou mais dispositivos periféricos rapidamente a curtas distâncias. Ele também pode ser usado para comunicação entre dois microcontroladores.

## Exemplo de SPI por Software

1. Visite o repositório [SoftSPI](https://github.com/MajenkoLibraries/SoftSPI) e baixe todo o repositório para o seu disco local.

2. Agora, a biblioteca SoftSPI pode ser instalada no Arduino IDE. Abra o Arduino IDE e clique em `sketch` -> `Include Library` -> `Add .ZIP Library`, e escolha o arquivo `SoftSPI` que você acabou de baixar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

```cpp
#include <SPI.h>
#include <SoftSPI.h>

// Create a new SPI port with:
// Pin 2 = MOSI,
// Pin 3 = MISO,
// Pin 4 = SCK
SoftSPI mySPI(2, 3, 4);

void setup() {
  mySPI.begin();
  Serial.begin(9600);
  }

void loop() {
  static uint8_t v = 0;

  Serial.print("Sending value: ");
  Serial.print(v, HEX);
  uint8_t in = mySPI.transfer(v);
  Serial.print(" Got value: ");
  Serial.print(in, HEX);
  Serial.println(v == in ? " PASS" : " FAIL");
  delay(1000);
  v++;
}
```

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
