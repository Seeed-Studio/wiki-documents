---
description: Grove - Sensor Hall
title: Grove - Sensor Hall
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Hall_Sensor
last_update:
  date: 2/22/2023
  author: jianjing Huang
---
<!-- ---
name: Grove - Hall Sensor
category: Sensor
bzurl: https://seeedstudio.com/Grove-Hall-Sensor-p-965.html
oldwikiname: Grove_-_Hall_Sensor
prodimagename: Grove-Hall_Sensor_New.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/product/hall sensor.jpg
surveyurl: https://www.research.net/r/Grove-Hall_Sensor
sku: 101020046
tags: grove_digital, io_5v, plat_duino, plat_linkit
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/img/Grove-Hall_Sensor_New.jpg)

El sensor Hall se basa en el Efecto Hall, que es la producción de una diferencia de voltaje a través de un conductor eléctrico, transversal a una corriente eléctrica en el conductor y un campo magnético perpendicular a la corriente. Hay un interruptor de tiempo continuo en este Grove. La salida de estos dispositivos cambia a bajo (se enciende) cuando un campo magnético (polaridad sur) perpendicular al sensor Hall excede el umbral del punto de operación BOP, y cambia a alto (se apaga) cuando el campo magnético desaparece. El módulo puede usarse para medir RPM.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/grove-hall-sensor-p-965.html)

## Seguimiento de Versiones

| Revisión | Descripciones           | Lanzamiento    |
|----------|------------------------|------------|
| Grove - Sensor Hall v0.9b    | Lanzamiento público inicial | 3,Oct,2011 |

## Características

- Interfaz Compatible con Grove
- Período de transición de 400ns para subida y bajada.
- Sensor de efecto hall de tiempo continuo
- Protección contra inversión de batería

:::tip
Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificaciones

| Elemento              | Mín | Típico  | Máx | Unidad |
|-----------------------|-----|---------|-----|--------|
| Voltaje de Alimentación | 3.8 | 5.0     | 24  | V      |
| Corriente de Alimentación | 4.1 | -       | 24  | mA     |
| Temperatura de Operación | -40 | -       | 85  | ºC     |

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Ideas de Aplicación

- Medidor de RPM.
- Motor de corriente continua simple.

## Primeros Pasos

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar con Arduino

#### Demostración

El Sensor Hall se utiliza aprovechando las interrupciones externas disponibles en el arduino/seeeduino. En este ejemplo estamos usando la interrupción 0, que se encuentra en el pin digital 2. Para otras interrupciones, consulta [attachInterrupt()](https://arduino.cc/en/Reference/AttachInterrupt).

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield| Grove - Hall Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/img/Grove-Hall_Sensor_New%20_small.jpg)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/grove-hall-sensor-p-965.html)|

- **Paso 2.** Conecta Grove - Hall Sensor al puerto D2 del Grove-Base Shield.
- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.
- **Paso 4.** Conecta Seeeduino a la PC mediante un cable USB.

:::note
Si no tenemos Grove Base Shield, también podemos conectar directamente Grove - Hall Sensor al Seeeduino como se muestra a continuación.
:::

| Seeeduino       | Grove - Hall Sensor |
|---------------|-------------------------|
| 5V           | Rojo                     |
| GND           | Negro                   |
| No Conectado | Blanco                   |
| D2            | Amarillo                  |


#### Software

- **Paso 1.**  Descarga el [Código del Sensor Hall](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Grove-Hall_Sensor_Demo_Code.zip)

- **Paso 2.**  Abre uno de los dos códigos. Por ejemplo, el Demo **MagnetControlLED**

- **Paso 3.**  Copia el código en Arduino IDE y súbelo. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

```c
/****************************************************************************/ 
// Function: When a magnet whose south pole is facing up is approaching to 
//     the onboard sensor, the LED will be turned on.Otherwise, the 
//     LED will be turned off.
// Hardware: Grove - Hall Sensor, Grove - LED
// Arduino IDE: Arduino-1.0
// Author:  FrankieChu  
// Date:   Jan 20,2013
// Version: v1.0
// by www.seeedstudio.com
//
//  This library is free software; you can redistribute it and/or
//  modify it under the terms of the GNU Lesser General Public
//  License as published by the Free Software Foundation; either
//  version 2.1 of the License, or (at your option) any later version.
//
//  This library is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
//  Lesser General Public License for more details.
//
//  You should have received a copy of the GNU Lesser General Public
//  License along with this library; if not, write to the Free Software
//  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
//
/*macro definitions of magnetic pin and LED pin*/
#define HALL_SENSOR 2
#define LED 4//the Grove - LED is connected to D4 of Arduino

void setup()
{
  pinsInit();
}
 
void loop() 
{
 if(isNearMagnet())//if the hall sensor is near the magnet?
 {
  turnOnLED();
 }
 else
 {
  turnOffLED();
 }
}
void pinsInit()
{
 pinMode(HALL_SENSOR, INPUT);
 pinMode(LED,OUTPUT);
}

/*If the hall sensor is near the magnet whose south pole is facing up, */
/*it will return ture, otherwise it will return false.    */
boolean isNearMagnet()
{
 int sensorValue = digitalRead(HALL_SENSOR);
 if(sensorValue == LOW)//if the sensor value is LOW?
 {
  return true;//yes,return ture
 }
 else
 {
  return false;//no,return false
 }
}
void turnOnLED()
{
 digitalWrite(LED,HIGH);
}
void turnOffLED()
{
 digitalWrite(LED,LOW);
}
```

- **Paso 4.**  Cuando un imán cuyo polo sur está orientado hacia arriba se acerca al sensor integrado, el LED se encenderá. De lo contrario, el LED se apagará.

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta un Grove - Hall Sensor al puerto D2, y conecta un Grove - Red LED al puerto D4 de un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
Si esta es tu primera vez usando Codecraft, consulta también [Guía para usar Codecraft con Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::

**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

![cc](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/img/cc_Hall_Sensor.png)

Sube el programa a tu Arduino/Seeeduino.

:::tip
Cuando el código termine de subirse, el LED se encenderá cuando el Hall Sensor detecte cambios en el campo magnético.
:::

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Twig_Hall_Sensor_v0.9b.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]** [Esquemático del Grove-Hall Sensor](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Twig_Hall_Sensor_v0.9b.zip)

- **[Demo]** [Código de Demostración del Hall Sensor](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Grove-Hall_Sensor_Demo_Code.zip)

- **[Datasheet]** [Hoja de datos A1101](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/datasheet.pdf)

- **[Codecraft]** [Archivo CDC](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Grove_Hall_Sensor_CDC_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Hall_Sensor -->

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
