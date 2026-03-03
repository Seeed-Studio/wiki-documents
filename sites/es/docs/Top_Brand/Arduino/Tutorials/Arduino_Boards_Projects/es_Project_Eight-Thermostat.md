---
description: Proyecto Ocho - Termostato
title: Proyecto Ocho - Termostato
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Project_Eight-Thermostat
last_update:
  date: 2/15/2023
  author: jianjing Huang
---

<!-- ---
name: Project Eight - Thermostat
category: Tutorial
oldwikiname:  Project Eight - Thermostat
prodimagename:  
surveyurl: https://www.research.net/r/Project_Eight-Thermostat
--- -->

El proyecto final de nuestra serie puede parecer complejo, pero es bastante simple. Usamos el potenciómetro para permitir la entrada del usuario de un valor de temperatura, y usando el sensor de temperatura – si la temperatura ambiente se eleva por encima del valor establecido a través del potenciómetro, el relé se activa.

1. Conecta el Sensor de Temperatura al conector de entrada analógica A0/A1, como estaba en el Proyecto 7.
2. El Grove produce un voltaje analógico en su salida D1, que está conectada a la entrada analógica A0 de Arduino en el conector de entrada A0/A1.

3. Conecta el Potenciómetro al conector de entrada analógica A4/A5.

4. El Potenciómetro produce un voltaje analógico en su salida D1, que está conectada a la entrada analógica A4 de Arduino en el conector de entrada A4/A5.
 Conecta el Relé al conector de entrada D2/D3.

5. El pin D2 de Arduino envía una señal al Relé en el conector D1. La luz roja del Relé indica si el relé está encendido o apagado, y el relé hace un sonido de clic cuando cambia.

 ![](https://files.seeedstudio.com/wiki/Project_Eight-Thermostat/img/Conn-eight.jpg)

 _**Ahora sube el siguiente sketch de Arduino:**_

```cpp
// Project Eight - Thermostat
//

int a,c,d;
int z=3975;
int relaypin=2;
float b, q, resistance, temperature;

void setup()
{
  pinMode(relaypin, OUTPUT);
}

void loop()
{
  a=analogRead(4);
  b=0.0488*a;
  c=int(b);
  q=analogRead(0);
  resistance=(float)(1023-q)*10000/q;
  temperature=1/(log(resistance/10000)/z+1/298.15)-273.15;
  d=int(temperature);
  if (d>=c)
  {
    digitalWrite(relaypin, HIGH);
    delay(500);
  }
  if (d<c)
  {
    digitalWrite(relaypin, LOW);
    delay(500);
  }
}
```

Intenta girar el potenciómetro hacia la derecha e izquierda y observa si el relé se enciende o apaga.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>