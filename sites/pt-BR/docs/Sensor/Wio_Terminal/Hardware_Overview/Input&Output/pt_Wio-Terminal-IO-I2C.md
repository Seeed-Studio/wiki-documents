---
title: I2C
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-IO-I2C/
slug: /Wio-Terminal-IO-I2C
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-18'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-IO-I2C/
---
# Usando a porta Grove I2C no Wio Terminal

Este repositório demonstra como usar a porta Grove I2C no Wio Terminal; você pode simplesmente usar essa funcionalidade plug and play com o Ecossistema Grove!

## Configurações da porta

Para usar a porta Grove I2C no Wio Terminal, basta conectar seu sensor Grove que utiliza I2C à porta física I2C no Wio Terminal.

**Observação:** Lembre-se de incluir as bibliotecas do sensor na Arduino IDE. Consulte este guia [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/) para mais informações.

## Código de exemplo

Neste exemplo, um Grove LCD é usado para demonstração. Este é o exemplo `HelloWorld` da biblioteca RGB LCD.

```cpp
#include <Wire.h>
#include "rgb_lcd.h"

rgb_lcd lcd;

const int colorR = 255;
const int colorG = 0;
const int colorB = 0;

void setup()
{
    // set up the LCD's number of columns and rows:
    lcd.begin(16, 2);

    lcd.setRGB(colorR, colorG, colorB);

    // Print a message to the LCD.
    lcd.print("hello, world!");

    delay(1000);
}

void loop() 
{
    // set the cursor to column 0, line 1
    // (note: line 1 is the second row, since counting begins with 0):
    lcd.setCursor(0, 1);
    // print the number of seconds since reset:
    lcd.print(millis()/1000);

    delay(100);
}
```

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
