---
title: Grove - Interruptor de Distancia Digital 0.5 a 5cm(GP2Y0D805Z0F)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F_P/
slug: /es/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F
last_update:
  date: 01/04/2022
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/img/main.JPG)

Grove - Interruptor de Distancia Digital 0.5 a 5cm es un módulo de detección de distancia infrarroja basado en GP2Y0D805Z0F. Normalmente la salida de este sensor es 1(Alto), cuando el objeto entra en el rango de medición del sensor, se activará y emitirá un 0(BAJO). Al mismo tiempo el LED integrado se encenderá. Como su nombre sugiere, el rango de medición es de 0.5cm a 5cm.

Hay dos tipos de Grove - Interruptor de Distancia Digital 0.5 a 5cm: Grove - Interruptor de Distancia Digital 0.5 a 5cm(GP2Y0D805Z0F) y [Grove - Interruptor de Distancia Digital 0.5 a 5cm(GP2Y0D805Z0F)(P)](https://www.seeedstudio.com/Grove-Digital-Distance-Interrupter-0.5-to-5cm%28GP2Y0D805Z0F%29%28P%29-p-3085.html). Para la versión sin la letra P, la lente y la interfaz grove están en el mismo lado; para la versión con la letra P, la lente y la interfaz grove están en lados diferentes.

GP2Y0D805Z0F es una unidad de sensor de medición de distancia, compuesta por una combinación integrada de PD(fotodiodo), IRED (diodo emisor de infrarrojos) y circuito de procesamiento de señales. La variedad de la reflectividad del objeto, la temperatura ambiental y la duración de funcionamiento no influyen fácilmente en la detección de distancia debido a la adopción del método de triangulación.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Digital-Distance-Interrupter-0.5-to-5cm%28GP2Y0D805Z0F%29-p-3084.html" target="_blank"><img src=https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

## Características

- Fácil de usar
- LED indicador integrado
- Salida digital

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de funcionamiento|3.3v/5v|
|Rango de activación|0.5cm - 5cm |
|Temperatura de funcionamiento|-10℃ -- 60℃|

## Aplicaciones

- Interruptor sin contacto (Equipos sanitarios, Control de iluminación, etc.)
- Robot aspirador

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

:::note
    Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield| Grove - Digital Distance Interrupter 0.5 to 5cm |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/img/thumnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Digital-Distance-Interrupter-0.5-to-5cm%28GP2Y0D805Z0F%29-p-3084.html" target="_blank">Obtener Uno Ahora</a>|

:::note
    **1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en su interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

    **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta Grove - Digital Distance Interrupter 0.5 to 5cm al puerto **D2** del Grove-Base Shield.

- **Paso 2.** Conecta Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/img/connect.jpg)

:::note
 Si no tenemos Grove Base Shield, también podemos conectar directamente Grove-Mech keycap al Seeeduino como se muestra a continuación.
:::

| Seeeduino     | Grove - Digital Distance Interrupter 0.5 to 5cm|
|---------------|-------------------------|
| 5V            | Rojo                    |
| GND           | Negro                   |
| No Conectado  | Blanco                  |
| D2            | Amarillo                |


#### Software

- **Paso 1.** Abre el Arduino IDE y crea un nuevo archivo, luego copia el siguiente código en el nuevo archivo.

```cpp
/*
 *  
 * Copyright (c) 2018 Seeed Technology Co., Ltd.
 * Website    : www.seeed.cc
 * Author     : downey
 * Create Time: May 2018
 * Change Log :
 *
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

#define SENSOR  2

void setup()
{
 Serial.begin(115200);
 pinMode(SENSOR,INPUT);
}


void loop()
{
 short val=0;
 val=digitalRead(SENSOR);
 Serial.print("val=");
 Serial.println((int)val);
 if(0==val)
 {
  Serial.println("Sensor is triggered!!");
 }
 delay(100);
}

```

- **Paso 2.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 3.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramientas-> Monitor Serie**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Cambia la velocidad de baudios a **115200**.
si todo va bien, obtendrás la salida de este módulo.

El resultado debería ser algo así:

```
val=1
val=1
val=1
val=1
val=1
val=1
val=0
Sensor is triggered!!
val=0
Sensor is triggered!!
val=0
Sensor is triggered!!
val=1
val=1
val=1
val=1
```

Normalmente la salida de este sensor es 1(Alto), cuando el objeto entra en el rango de medición del sensor, se activará y emitirá un 0(BAJO)

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/res/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - Digital Distance Interrupter 0.5 to 5cm archivo eagle](https://files.seeedstudio.com/wiki/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/res/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F.zip)
- **[PDF]** [Hoja de datos GP2Y0D805Z0F](https://files.seeedstudio.com/wiki/Grove-Digital_Distance_Interrupter_0.5_to_5cm-GP2Y0D805Z0F/res/GP2Y0D805Z0F.pdf)

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
