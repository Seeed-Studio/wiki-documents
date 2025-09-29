---
description: Xadow - Breakout
title: Xadow - Breakout
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_Breakout
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_Breakout/img/Xadow_Breakout_01.jpg)

Tal vez quieras conectar varios módulos a Xadow. Por ejemplo, un sensor IR que puede detectar si alguien está cerca. Puedes conectar el sensor a este Módulo Breakout.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Breakout-p-1519.html)

## Especificaciones
---
- Un adaptador
- Compatible con todos los Módulos Grove en hardware
- Dimensiones: 25.43mm x 20.35mm

## Demostración
---
A continuación se muestra la demostración para controlar un zumbador. Necesitas conectar Grove - Buzzer a Xadow Breakout con un cable Grove y conectar Xadow Breakout a Xadow Main Board con un cable FFC.

![](https://files.seeedstudio.com/wiki/Xadow_Breakout/img/XadowBreakoutUsage.jpg)

Xadow breakout no solo puede controlar algunos módulos que son de comunicación IIC o comunicación Serial, sino que también puede controlar otros módulos porque los dos conectores Grove pueden usarse como puerto Digital o puerto Analógico. En otras palabras, puede controlar todos los módulos Grove.

El código de demostración es así:
```
Void setup()
{
    DDRD |=0x04;
}
void loop()
{
    PORTD |=0x04;
    delay(500);
    PORTD &=~(0x04);
    delay(500);
}
```
Ahora puedes escuchar el zumbador "Bi Bi Bi". Puedes reemplazarlo con Grove - LED y ver el LED encenderse/apagarse.


## Visor de Esquemas en Línea
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Breakout/res/Xadow%20-%20Breakout_eagle%20file.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [Archivo Eagle de Xadow Breakout](https://files.seeedstudio.com/wiki/Xadow_Breakout/res/Xadow%20-%20Breakout_eagle%20file.rar)

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