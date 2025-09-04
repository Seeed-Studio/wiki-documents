---
title: Grove - Altavoz Plus
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Speaker-Plus/
slug: /es/Grove-Speaker-Plus
last_update:
  date: 01/09/2022
  author: gunengyu
---

<!--     -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Speaker_Plus/IMG/03.png" alt="pir" width={600} height="auto" /></p>

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Speaker-Plus-p-4592.html)

Grove Altavoz Plus consiste en una potente placa de controlador amplificador y un altavoz de alta calidad. El altavoz genera diferentes tonos con diferentes frecuencias de entrada, fácil de controlar con señal PWM. Podrías crear efectos de sonido distintivos, reproducir tus canciones favoritas, o construir tu propia caja de música con codificación fácil o una gran cantidad de código musical existente.

Comparado con la versión anterior del Grove Altavoz, Grove Altavoz Plus tiene un altavoz de mejor calidad con diseño separado y reemplazable, lo que te permite reemplazarlo con otros altavoces que te gusten. Con la ayuda del potenciómetro integrado, puedes ajustar fácilmente el volumen de salida. ¿Ya estás cansado del altavoz fijo con mala calidad de sonido? ¿Quieres conectar y reproducir tu propio altavoz? Aquí está tu opción.

Características
-------

- Altavoz de buena calidad de sonido con alto volumen
- Diseño de altavoz separado y reemplazable
- Función de sonido ajustable con potenciómetro integrado
- Interfaz plug and play fácil de usar

:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Especificaciones
-------------

| Parámetros           | Valores |
|------|-----|
| Dimensiones | 130mm x90mm x12mm|
|Peso   |P.B 12g|

Plataformas Compatibles
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

#### Materiales Requeridos

| Seeeduino Lotus | Grove Speaker Plus|
|--------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/Seeeduino_Lotus.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Speaker_Plus/IMG/small.png)|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Speaker-Plus-p-4592.html)|

#### Conexión de Hardware

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Grove-Speaker_Plus/IMG/Hardware_Connection.jpg" alt="Grove-Speaker Plus'' OUTCOME" title="demo" />
<figcaption><b></b><i></i></figcaption>
</figure>
</div>

Uso
-----

### Jugar con Arduino

El altavoz puede emitir una variedad de sonidos como una bocina de coche, timbre de puerta e ignición. Los diferentes sonidos se basan en la frecuencia de la señal de entrada.

Puedes suministrar diferentes señales de frecuencia a este módulo con Arduino. Arduino genera estas señales a través de PWM o incluso escritura digital y retardo. Aquí vamos a mostrarte cómo generar estas señales usando *delay()*, el altavoz suena graves 1~7.

|Nota|Frecuencia correspondiente|Medio ciclo|
|---|---|----|
|1| 261.6255653 |1911.128216|
|1.5|277.182631|1803.864832|
|2|293.6647679|1702.621678|
|2.5|311.1269837|1607.060866|
|3|329.6275569|1516.863471|
|4|349.2282314|1431.728466|
|4.5|369.9944227|1351.371722|
|5|391.995436|1275.525055|
|5.5|415.3046976|1203.935334|
|6|440|1136.363636|
|6.5|466.1637615|1072.584446|
|7|493.8833013|1012.384907|


#### Código de Software

**Paso 1.** Conecta Grove - Speaker Plus al puerto **D3** en un Base Shield y conecta el Base Shield a tu Seeeduino.

**Paso 2.** Conecta Seeeduino a tu PC a través de un cable USB.

**Paso 3.** Sube el código de abajo a tu Arduino IDE.

:::tip
        Si esta es la primera vez que trabajas with Arduino, te recomendamos encarecidamente que veas [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

```cpp
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
<p class="admonition-title">Nota</p>
Debido a la influencia de la capacitancia, el módulo solo puede emitir la señal de graves, y los agudos no pueden ser emitidos.
</div>

:::tip
     Cuando el código termine de cargarse, escucharás al Altavoz hacer un sonido de DO a SI.
:::

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Speaker_Plus/202002903_Grove-Speaker_Plus_v1.0_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Cómo generar diferentes tonos con MCU](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Tone.pdf)
- [Hoja de Datos del Amplificador de Potencia de Audio de Bajo Voltaje LM386](https://files.seeedstudio.com/wiki/Grove-Speaker/res/LM386_Low_Voltage_Audio_Power_Amplifier_Datasheet.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
