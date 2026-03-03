---
description: Proyecto Cuatro – Generador de Ruido
title: Proyecto Cuatro – Generador de Ruido
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Project_Four-Noise_Maker
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: Project Four – Noise Maker
category: Tutorial
oldwikiname:  Project Four – Noise Maker
prodimagename:
surveyurl: https://www.research.net/r/Project_Four-Noise_Maker
--- -->

El propósito de este sketch es usar el zumbador piezoeléctrico para hacer un ruido de pitido.
El potenciómetro se usa nuevamente como una entrada analógica para variar el tiempo de retardo. Mientras ajustas el potenciómetro, la velocidad de los pitidos cambiará.
La imagen es incorrecta - necesitas conectar el Potenciómetro al conector de entrada analógica A0/A1, como estaba en el Proyecto 3.
El Potenciómetro produce un voltaje analógico en su salida D1, que está conectada a la entrada analógica A0 de Arduino en el conector de entrada A0/A1.
Conecta el Zumbador al conector de E/S Digital D6/D7. El sketch usa el Pin D6 de Arduino para enviar energía al Zumbador en su entrada D1.

![](https://files.seeedstudio.com/wiki/Project_Four-Noise_Maker/img/Conn-four.jpg)

_**Ahora sube el siguiente sketch de Arduino:**_

```cpp
// Project Four - Noise maker
//

void setup()
{
  pinMode(6, OUTPUT);
}

void loop()
{
  digitalWrite(6, HIGH);
  delay(analogRead(0));
  digitalWrite(6, LOW);
  delay(analogRead(0));
}
```

Como puedes ver, el piezoeléctrico puede ser usado como otra forma de salida digital. Cuando uses esta unidad Grove, no olvides configurar el pin de salida conectado al Grove de vuelta a LOW cuando quieras que el sonido se apague.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>