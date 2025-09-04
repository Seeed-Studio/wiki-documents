---
description: Proyecto Siete - Temperatura
title: Proyecto Siete - Temperatura
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Project_Seven-Temperature
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: Project Seven - Temperature
category: Tutorial
oldwikiname:  Project Seven - TemperatureProject Seven - Temperature
prodimagename:
surveyurl: https://www.research.net/r/Project_Seven-Temperature
--- -->

Lo siguiente en nuestro viaje con Grove es el sensor de temperatura. Es una forma analógica de entrada, y como se describió anteriormente, devuelve un potencial de voltaje relativo a la temperatura ambiente. Medimos este voltaje usando un pin analógico, y lo convertimos a una temperatura.

Conecta el Sensor de Temperatura al conector de entrada analógica A0/A1.
La unidad Grove produce un voltaje analógico en su salida D1, que está conectada a la entrada analógica A0 de Arduino en el conector de entrada A0/A1.

![](https://files.seeedstudio.com/wiki/Project_Seven-Temperature/img/Conn-seven.jpg)

_**Ahora sube el siguiente sketch de Arduino:**_

```cpp
// Project Seven - temperature
//

int a;
int del=1000; // duration between temperature readings
float ctemperature;
float ftemperature;
int B=3975;
float resistance;

void setup()
{
  Serial.begin(9600);
}

void loop()
{
  a=analogRead(0);
  resistance=(float)(1023-a)*10000/a;
  ctemperature=1/(log(resistance/10000)/B+1/298.15)-273.15;
  ftemperature=ctemperature*9/5+32;
  Serial.print(ctemperature);
  Serial.print("C ");
  Serial.print(ftemperature);
  Serial.println("F");
  delay(del);
}
```

Puedes copiar y pegar las líneas anteriores para añadir capacidad de temperatura a tus propios sketches.

Después de que hayas subido el sketch, abre la ventana del monitor serie en el IDE de Arduino, y deberías ver una caja similar a esta:

![](https://files.seeedstudio.com/wiki/Project_Seven-Temperature/img/Aq0PYQjuq.png)

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