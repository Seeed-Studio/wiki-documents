---
description: El módulo Grove - Altavoz consiste en amplificación de poder y salidad de voz.
title: Módulo Grove - Altavoz
keywords:
  - Grove
  - Spanish
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: Grove-Speaker_Spanish
last_update:
  date: 06/20/2023
  author: Mario Andres De los Santos Hernandez
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Speaker/master/img/Grove_Speaker_01.jpg)

El módulo Grove - Altavoz consiste en amplificación de poder y salidad de voz. El volumen de salida puede ser ajustado con el potenciometro <em>On-Board</em>. Con distintas frecuencias de entrada, el altavoz genera distintos tonos. Crea tu música con Arduino ¡DIY tu propia caja de música!

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-Speaker-p-1445.html)

## Características

- Volumen Ajustable
- Interfaz Grove

¡Consejo!:
Para más detalles sobre los módulos Grove, por favor consulte [Sistema Grove](http://wiki.seeedstudio.com/Grove_System/).

## Especificaciones

| Articulo             | Min | Nominal | Max | Unidad |
| -------------------- | --- | ------- | --- | ------ |
| Voltaje de Operación | 4.0 | 5.0     | 5.5 | VDC    |
| Ganancia de Voltaje  | -   | -       | 46  | db     |
| Ancho de Banda       | -   | -       | 20  | KHz    |

## Plataformas Compatibles

| Arduino                                                                                               | Raspberry Pi                                                                                                 | BeagleBone                                                                                          | Wio                                                                                               | LinkIt ONE                                                                                             |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

¡Cuidado!
Las plataformas mencionadas arriba como compatibles, cuentan con software para el módulo o tienen las bases teóricas para la compatibilidad. Sólo ofrecemos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar bibliotecas de software/códigos de demostración para todas las plataformas de MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.

## Primeros Pasos

¡Nota!
Si es la primera vez que utilizas Arduino, ampliamente te recomendamos ver [Primeros pasos con Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) antes de comenzar.

### Jugando con Arduino

El altavoz puede emitir una variedad de sonidos como la bocina de un automóvil, timbre de puerta, entre otros. Los distintos sonidos se basa en la frecuencia de la señal de entrada.

Puedes además puedes brindar diferentes señales de frecuencia desde tu Arduino. Estos microcontroladores pueden generar dichas señales por medio de PWM o incluso digitalWrite() en conjunto con delay(). Aquí te mostraremos cómo generar señales utilizando _delay()_, el bass del sonido del altavoz es de 1~7.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Speaker/master/img/Tone.jpg)

```
/*macro definition of Speaker pin*/
#define SPEAKER 3

int BassTab[]={1911,1702,1516,1431,1275,1136,1012};//bass 1~7

void setup()
{
    pinInit();
}
void loop()
{
        /*sound bass 1~7*/
    for(int note_index=0;note_index<7;note_index++)
    {
        sound(note_index);
        delay(500);
    }
}
void pinInit()
{
    pinMode(SPEAKER,OUTPUT);
    digitalWrite(SPEAKER,LOW);
}
void sound(uint8_t note_index)
{
    for(int i=0;i<100;i++)
    {
        digitalWrite(SPEAKER,HIGH);
        delayMicroseconds(BassTab[note_index]);
        digitalWrite(SPEAKER,LOW);
        delayMicroseconds(BassTab[note_index]);
    }
}
```

<div class="admonition note">
<p class="admonition-title">Note</p>
Debido a la influencia de la capacitancia, el módulo solo puede dar salidas de bass, mientrás que no es capaz de emitir salidad treble.
</div>

### Jugando con Codecraft

#### Hardware

**Paso 1.** Conecta el Grove - Altavoz al puerto D3 de tu Shield Base.

**Paso 2.** Inserta el Shield base a tu Seeeduino/Arduino.

**Paso 3.** Enlaza tu Seeeduino/Arduino con tu PC por medio de un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), agrega soporte para Arduino, y arrastra <em>main procedure</em> al área de trabajo.

¡Nota!
Si es tu primera vez usando Codecraft, ve también [Guía de Codecraft para Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Paso 2.** Arrastra bloques como se muestra en la siguiente imagen, o abre el archivo cdc que puede ser descargado al final de esta página.

![](https://github.com/SeeedDocument/Grove-Speaker/raw/master/img/Speaker.png)

Carga el archivo a tu Seeeduino/Arduino.

¡Éxito!
Cuando el código finalice de subir, escucharás el altavoz de DO a SI.

## Recursos

- [Grove - Altavoz Archivos Eagle](https://raw.githubusercontent.com/SeeedDocument/Grove-Speaker/master/res/Grove-Speaker_Eagle_File.zip)
- [Como generar distintos tonos con MCU](https://raw.githubusercontent.com/SeeedDocument/Grove-Speaker/master/res/Tone.pdf)
- [Grove\_-_Altavoz_v1.0_brd.pdf](https://raw.githubusercontent.com/SeeedDocument/Grove-Speaker/master/res/Grove-Speaker_v1.0_brd.pdf)
- [Grove\_-_Altavoz_v1.0_sch.pdf](https://raw.githubusercontent.com/SeeedDocument/Grove-Speaker/master/res/Grove-Speaker_v1.0_sch.pdf)
- [LM386 Amplificador de Audio de bajo voltaje Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Speaker/master/res/LM386_Low_Voltage_Audio_Power_Amplifier_Datasheet.pdf)
- [CodeCraft Código](https://github.com/SeeedDocument/Grove-Speaker/raw/master/res/Speaker.zip)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Speaker -->

## Soporte técnico

Por favor, envíe cualquier duda o problema técnico a nuestro [foro](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>
