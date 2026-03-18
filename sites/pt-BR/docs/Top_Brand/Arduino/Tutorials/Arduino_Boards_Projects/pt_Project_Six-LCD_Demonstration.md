---
description: Projeto Seis – Demonstração do LCD
title: Projeto Seis – Demonstração do LCD
keywords:
  - Arduino
  - Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Project_Six-LCD_Demonstration
last_update:
  date: 2/15/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Project_Six-LCD_Demonstration/
---
<!-- ---
name: Project Six – LCD Demonstration
category: Tutorial
oldwikiname:  Project Six – LCD Demonstration
prodimagename:  
surveyurl: https://www.research.net/r/Project_Six-LCD_Demonstration
--- -->
Agora é hora de demonstrar o módulo LCD e as unidades Grove correspondentes. Com o LCD você pode exibir dados ou mensagens no visor de duas linhas com oito caracteres. Para este exemplo, conecte os fios dos seguintes soquetes do LCD ao Grove Base Shield:

* canto inferior direito ao D1/2;

* canto inferior esquerdo ao D3/4;

* canto inferior direito ao D5/6;

![](https://files.seeedstudio.com/wiki/Project_Six-LCD_Demonstration/img/Conn-six.jpg)

_**Agora faça o upload do seguinte sketch Arduino:**_

```cpp
// Project Six - LCD demonstration
//

#include <LiquidCrystal.h>

LiquidCrystal lcd(1,2,3,4,5,6);

void setup()
{
  lcd.begin(8,2);
}

void loop()
{
  lcd.clear();
  lcd.setCursor(0,0);
  lcd.print("01234567");
  lcd.setCursor(0,1);
  lcd.print("ABCDEFGH");
  delay(65000);
}
```

As funções lcd.clear() apagam a tela do LCD; lcd.setCursor() move o cursor para (coluna, linha); e lcd.print(“”); escreve texto na posição do cursor no LCD.

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
