---
title: Grove - LED de Color Variable
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Variable_Color_LED/
slug: /es/Grove-Variable_Color_LED
last_update:
  date: 01/09/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Variable_Color_LED1.jpg) ![](https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Variable_Color_LED_01.jpg)

Este Grove consiste en un LED RGB de 8mm. Opera a 5V DC. Cuando el pin SIG está en lógica HIGH, el LED RGB se encenderá. Perfecto para usar en salidas digitales de Seeeduino, o también puede ser controlado por modulación de ancho de pulso. Y utiliza tres resistores ajustables para cambiar el color del LED RGB.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html)

Características
--------

- Compatible con Grove
- Color ajustable

:::tip
    Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::
Ideas de Aplicación
-----------------

- Juguetes
- Decoración

:::caution
    Sea cuidadoso al ajustar las resistencias ajustables R, G y B para evitar girarlas en exceso.
:::

Especificaciones
-------------

| Elemento          | Típico  | Unidad |
|-------------------|---------|--------|
| Voltaje de Operación | 5.0   | VDC    |
| Corriente de Trabajo | 20    | mA     |
| Resistor Variable | &lt;1   | KΩ     |

Plataformas Compatibles
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Uso
---

Las tres resistencias ROJA, VERDE y AZUL del módulo controlan los canales R, G y B respectivamente. Ajustando las tres resistencias ajustables, puede producir color variable. Sin embargo, hay que tener en cuenta que hay que ser suave al girar las resistencias ajustables.

El siguiente sketch demuestra una aplicación simple de controlar su brillo. Como indica la imagen de abajo, el LED de Color Variable está conectado al puerto digital 9 del Grove - Base Shield. La instalación del hardware es la siguiente:

![](https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Grove-Variable_Color_LED.jpg)

- Copia y pega el código de abajo en un nuevo sketch de Arduino.

Código de demostración como:

```
int ledPin = 9;    // LED connected to digital pin 9

void setup()  {
    // nothing happens in setup
}

void loop()  {
    // fade in from min to max in increments of 5 points:
    for(int fadeValue = 0?; fadeValue <= 255; fadeValue +=5) {
        // sets the value (range from 0 to 255):
        analogWrite(ledPin, fadeValue);
        // wait for 30 milliseconds to see the dimming effect
        delay(30);
    }

    // fade out from max to min in increments of 5 points:
    for(int fadeValue = 255?; fadeValue >= 0; fadeValue -=5) {
        // sets the value (range from 0 to 255):
        analogWrite(ledPin, fadeValue);
        // wait for 30 milliseconds to see the dimming effect
        delay(30);
    }
}
```

- Sube el código. Ajusta las tres resistencias ajustables, estoy seguro de que te gustará. ¡Inténtalo!

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/res/Variable_Color_LED_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Archivo eagle del LED de Color Variable](https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/res/Variable_Color_LED_eagle_file.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Variable_Color_LED -->

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
