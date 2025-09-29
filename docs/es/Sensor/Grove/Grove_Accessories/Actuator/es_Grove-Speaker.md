---
title: Grove - Altavoz
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Speaker/
slug: /es/Grove-Speaker
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Speaker/img/Grove_Speaker_01.jpg)

El Grove - Altavoz es un módulo que consiste en amplificación de potencia y salidas de voz. El volumen se puede ajustar mediante el potenciómetro integrado. Con diferentes frecuencias de entrada, el altavoz genera diferentes tonos. ¡Codifica la música en arduino y crea tu propia caja de música!

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Speaker-p-1445.html)

Características
-------

- Volumen Ajustable
- Interfaz Grove

:::tip
    Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Especificaciones
-------------

| Elemento        | Mín | Típico | Máx | Unidad |
|-----------------|-----|--------|-----|--------|
| Voltaje de Trabajo | 4.0 | 5.0    | 5.5 | VDC    |
| Ganancia de Voltaje | -   | -      | 46  | db     |
| Ancho de Banda  | -   | -      | 20  | KHz    |

Plataformas Compatibles
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Uso
---

### Jugar con Arduino

El altavoz puede emitir una variedad de sonidos como una bocina de coche, timbre de puerta e ignición. Los diferentes sonidos se basan en la frecuencia de la señal de entrada.

Puedes suministrar diferentes señales de frecuencia a este módulo con Arduino. Arduino genera estas señales a través de PWM o incluso escritura digital y retardo. Aquí vamos a mostrarte cómo generar estas señales usando *delay()*, el altavoz suena graves 1~7.

![](https://files.seeedstudio.com/wiki/Grove-Speaker/img/Tone.jpg)

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

:::note
Debido a la influencia de la capacitancia, el módulo solo puede emitir la señal de graves, y los agudos no pueden emitirse.
:::

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta Grove - Speaker al puerto D3 en un Base Shield

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
    Si esta es tu primera vez usando Codecraft, consulta también [Guía para usar Codecraft con Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::
**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

![](https://files.seeedstudio.com/wiki/Grove-Speaker/img/Speaker.png)

Sube el programa a tu Arduino/Seeeduino.

:::tip
    Cuando el código termine de subirse, escucharás al Speaker haciendo un sonido de DO a SI.
:::

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Speaker/res/Grove-Speaker_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Grove - Speaker Eagle File](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Grove-Speaker_Eagle_File.zip)
- [Cómo generar diferentes tonos con MCU](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Tone.pdf)
- [Grove_-_Speaker_v1.0_brd.pdf](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Grove-Speaker_v1.0_brd.pdf)
- [Grove_-_Speaker_v1.0_sch.pdf](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Grove-Speaker_v1.0_sch.pdf)
- [Hoja de Datos del Amplificador de Potencia de Audio de Bajo Voltaje LM386](https://files.seeedstudio.com/wiki/Grove-Speaker/res/LM386_Low_Voltage_Audio_Power_Amplifier_Datasheet.pdf)
- [Código CodeCraft](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Speaker.zip)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Grove_-_Speaker -->

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
