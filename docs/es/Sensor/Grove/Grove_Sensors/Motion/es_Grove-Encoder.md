---
description: Grove-Encoder
title: Grove-Encoder
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Encoder
last_update:
  date: 1/7/2023
  author: shuxu hu
---
<!-- 
![](https://files.seeedstudio.com/wiki/Grove-Encoder/img/encoder.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Encoder/img/encoder.jpg" alt="pir" width={600} height="auto" /></p>


Este módulo es un codificador rotativo incremental. Codifica la señal de rotación del eje y emite la señal mediante pulsos electrónicos. El Grove – Encoder es uno de la serie Grove y tiene una interfaz Grove estándar.
Cuando necesites añadir una perilla rotatoria a tu proyecto, por ejemplo una perilla de volumen para un altavoz, un panel de selección o una entrada digital, esta será tu primera opción.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Encoder-p-1352.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Encoder-p-1352.html)

## Características

*   Codificador incremental.
*   Interfaz Grove.
*   Rotación de 360 grados.

## Especificaciones

| Elemento | Mín | Típico | Máx | Unidad |
|--|--|--|--|--|
| Voltaje | 4.5 | 5 | 5.5 | V |
| Corriente | 10 | 20 | 30 | mA |
| Dimensión | |20x 20 | |mm |
| Peso Neto || 12 || g |

## Plataformas Compatibles

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

:::note
    Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::
### Jugar Con Arduino

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield|  Grove - Circular LED | Grove - Encoder|
|--------------|-------------|-----------------|----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Encoder/img/Grove%20Circular%20LED._Sjpg.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Encoder/img/Grove%20Encoder.jpg" alt="pir" width={600} height="auto" /></p>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Circular-LED-p-1353.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Encoder-p-1352.html)|

- **Paso 2.** Conecta Grove-Encoder al puerto D2 del Grove-Base Shield.
- **Paso 3.** Conecta Grove-Circular LED al puerto D5 del Grove-Base Shield.
- **Paso 4.** Conecta Grove-Base Shield al Seeeduino.
- **Paso 5.** Conecta Seeeduino a la PC mediante un cable USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Encoder/img/ardu_connection.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Encoder/img/ardu_connection.JPG" alt="pir" width={600} height="auto" /></p>

:::note
	Si no tenemos Grove Base Shield, también podemos conectar directamente Grove-Encoder y conectar Grove-Circular LED al Seeeduino como se muestra a continuación.
:::
| Seeeduino       | Grove-Encoder  |
|---------------|-------------------------|
| 5V           | Rojo                     |
| GND           | Negro                   |
| D3           | Blanco                   |
| D2            | Amarillo                  |
| Seeeduino       | Grove-Circular LED  |
|---------------|-------------------------|
| 5V           | Rojo                     |
| GND           | Negro                   |
| D6           | Blanco                   |
| D5           | Amarillo                  |

:::note
    Si quieres cambiar a otro puerto para Grove-Encoder, por favor cambia digitalRead(2) y digitalRead(3) en Encoder.cpp.
:::
#### Software

- **Paso 1.** Descarga la [Librería Encoder](https://files.seeedstudio.com/wiki/Grove-Encoder/res/Encoder.zip), [Librería CircularLED](https://files.seeedstudio.com/wiki/Grove-Encoder/res/CircularLED.zip), [Librería TimerOne](https://files.seeedstudio.com/wiki/Grove-Encoder/res/TimerOne.zip) desde Github.
- **Paso 2.** Consulta [Cómo instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.
- **Paso 3.** Copia el código en Arduino IDE y súbelo. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

```cpp
#include <CircularLED.h>
#include <Encoder.h>
#include <TimerOne.h>
CircularLED circularLED(6,5);

unsigned int LED[24];
int index_LED;
void setup()
{
  encoder.Timer_init();
}
void loop()
{
    if (encoder.rotate_flag ==1)
  {
    if (encoder.direct==1)
    {
      index_LED++;
      if (index_LED>23)
      index_LED=24;
      SenttocircularBar(index_LED);
    }
     else
     {
      index_LED--;
      if(index_LED<0)
      index_LED=0;
      SenttocircularBar(index_LED);
     }
    encoder.rotate_flag =0;
  }
}
void SenttocircularBar(int index)
{
  for (int i=0;i<24;i++)
  {
    if (i<index)
    {
      LED[i]=0xff;
    }
    else
    LED[i]=0;
  }
  circularLED.CircularLEDWrite(LED);
}

```

- **Paso 4.** La luz cambiará mientras el encoder gira como se muestra a continuación.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Encoder/img/EncoderAndCircular_LED.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Encoder/img/EncoderAndCircular_LED.gif" alt="pir" width={600} height="auto" /></p>

:::note
    Es capaz de generar otra señal cuando se presiona hacia abajo. Sin embargo, debido a la limitación del número de cables de señal Grove, el módulo está fabricado sin salida de esta señal.
:::

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://seeeddoc.github.io/Grove-Encoder/res/Grove-Encoder_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos

- **[Eagle]** [Archivos Eagle de Grove-Encoder](https://seeeddoc.github.io/Grove-Encoder/res/Grove-Encoder_eagle_files.zip)
- **[Librería]** [Librería TimeOne](https://files.seeedstudio.com/wiki/Grove-Encoder/res/TimerOne.zip)
- **[Librería]** [Librería Encoder](https://files.seeedstudio.com/wiki/Grove-Encoder/res/Encoder.zip)
- **[Librería]** [Librería CircularLED](https://files.seeedstudio.com/wiki/Grove-Encoder/res/CircularLED.zip)
- **[Demo]** [Demo en el foro de Arduino](https://arduino.cc/playground/Main/RotaryEncoders)


## Soporte Técnico y Discusión del Producto
¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
