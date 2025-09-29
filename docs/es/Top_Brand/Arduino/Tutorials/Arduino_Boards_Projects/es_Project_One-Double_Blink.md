---
description: Proyecto Uno - Doble Parpadeo
title: Proyecto Uno - Doble Parpadeo
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Project_One-Double_Blink
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: Project One - Double Blink
category: Tutorial
oldwikiname:  Project One - Double Blink
prodimagename:  
surveyurl: https://www.research.net/r/Project_One-Double_Blink
--- -->
El propósito de este proyecto es demostrar una pantalla digital de salida simple usando el LED Grove. Conecta tu equipo como se muestra en la imagen a continuación:
Conecta el LED Grove al conector D1/D2 Digital I/O en el Grove Shield.
El Pin D1 de Arduino alimenta el LED Rojo en el conector D1 del Grove, y el Pin D2 de Arduino alimenta el LED Verde en el conector D2 del Grove.

![](https://files.seeedstudio.com/wiki/Project_One-Double_Blink/img/Conn-one.jpg)

_**Ahora sube el siguiente sketch de Arduino:**_

```
// Project One - Double Blink
//

int del=500; // adjust for blink rate

void setup()
{
    pinMode(1, OUTPUT);
    pinMode(2, OUTPUT);
}

void loop()
{
    digitalWrite(1, HIGH);
    digitalWrite(2, LOW);
    delay(del);
    digitalWrite(1, LOW);
    digitalWrite(2, HIGH);
    delay(del);
}
```

Como puedes ver, es bastante simple. Los dos LEDs parpadean alternativamente, con el retraso entre los dos establecido por la variable del. Sin embargo, al hacerlo puedes experimentar por ti mismo lo simple que es usar el sistema Grove.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>