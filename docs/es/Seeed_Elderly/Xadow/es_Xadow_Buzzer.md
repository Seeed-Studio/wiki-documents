---
description: Xadow - Buzzer
title: Xadow - Buzzer
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_Buzzer
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_Buzzer/img/Xadow_buzzer.jpg)

Este es un módulo Xadow que puede emitir un tono. Para controlarlo, necesitas dar control a dos pines simultáneamente: esto es diferente del Grove - Buzzer que usa un pin para controlar. ¡Es pequeño pero ruidoso! Se puede usar para hacer pitidos, tonos y alertas.

Xadow es una serie de placas compatibles con Arduino(TM) pequeñas pero perfectamente formadas que contienen varios módulos. Es un kit extremadamente adecuado para proyectos sensibles al espacio como dispositivos portátiles y diseños artísticos, que tienen mayores requisitos de tamaño, peso y conexión en cascada flexible. Puedes encontrar más módulos aquí.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Buzzer-p-1599.html)

## Especificaciones
---
- Voltaje de Trabajo: 3.3V
- Frecuencia Fundamental: 2700Hz
- Nivel de Presión Sonora: >75dB
- Dimensiones: 25.43mm x 20.35mm

## Demostración
---
Hay una demostración fácil para mostrar cómo hacer sonar el buzzer. Si lo has usado exitosamente, entonces puedes aplicarlo a tus grandes proyectos, como detectar el estado de la batería: el buzzer emitirá un sonido cuando la Placa Principal Xadow tenga batería baja.

![](https://files.seeedstudio.com/wiki/Xadow_Buzzer/img/Buzzer_Usage.jpg)

```
void setup()
{
    DDRB |= 0x06;
}

void loop()
{
    //turn on the buzzer
    PORTB |= 0x06;
    delay(1);
    //turn off the buzzer
    PORTB &= ~(0x06);
    delay(1);
}
```


## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Buzzer/res/Xadow_Buzzer_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [Archivo Eagle de Xadow Buzzer](https://files.seeedstudio.com/wiki/Xadow_Buzzer/res/Xadow_Buzzer_eagle_file.zip)

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