---
description: Grove - Sensor Deslizante Táctil Capacitivo(CY8C4014LQI)
title: Grove - Sensor Deslizante Táctil Capacitivo(CY8C4014LQI)
category: Sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI
last_update:
  date: 2/22/2023
  author: jianjing Huang
---

<!-- ---
name: Grove - Sensor Deslizante Táctil Capacitivo(CY8C4014LQI)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101020552
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/main.jpg)

El Grove - Sensor Deslizante Táctil Capacitivo(CY8C4014LQI) es un sensor táctil multifuncional. Puedes tocar los dos botones o deslizar sobre el control deslizante de 5 segmentos, cada almohadilla táctil tiene un LED correspondiente para indicar el estado del toque. También proporcionamos un pin de interrupción alto por defecto, una vez que toques el botón o deslices el control, cambiará a bajo.

Será muy divertido usar este módulo como controlador de juego o aplicarlo a otras aplicaciones táctiles.

:::note
El producto viene con una carcasa acrílica, y recomendamos encarecidamente que no retires la carcasa para usarlo. Puede activarse por error cuando tu dedo toque la pista o almohadilla en la parte posterior.
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Capacitive-Touch-Slide-Sensor%28CY8C4014LQI%29-p-3183.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versión

| Versión del Producto  | Cambios                                                                                               | Fecha de Lanzamiento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Sensor Deslizante Táctil Capacitivo(CY8C4014LQI) | Inicial                                                                                               | Jul 2018      |

## Características

- Subsistema MCU de 32 bits
- CPU ARM Cortex-M0 de 16 MHz
- Hasta 16KB de flash con Acelerador de Lectura
- Hasta 2KB de SRAM
- Sintonización automática por hardware (SmartSense™) sobre un rango de sensor de 5 pF a 45 pF
- Interfaz I2C

## Especificación

|Elemento|Valor|
|---|---|
|Voltaje de Operación|3.3V / 5V|
|Temperatura Ambiente de Operación|-40°C a +85°C|
|Temperatura de Unión de Operación|-40°C a +100°C|
|Interfaz|I2C|
|Dirección I2C por Defecto|0x08|
|Tamaño|L: 60mm A: 20mm H: 6mm|
|Peso|8g|
|Tamaño del paquete|L: 140mm A: 90mm H: 10mm|
|Peso bruto|15g|

## Aplicaciones

- Controlador de juegos
- Aplicaciones táctiles

## Descripción General del Hardware

### Distribución de Pines

![](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/pin_out.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/pin_out_back.jpg)

### Esquemático

**Alimentación**

Este módulo está basado en **CY8C4014LQI**, el voltaje de entrada de este chip varía de 1.71v-5.5v, por lo que puedes usar tanto el pin de 3.3v como el de 5v de Arduino para alimentar este módulo.

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield | Grove - Sensor Deslizante Táctil Capacitivo |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Capacitive-Touch-Slide-Sensor%28CY8C4014LQI%29-p-3183.html" target="_blank">Obtener Uno Ahora</a>|

:::note
**1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en su interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta el Grove - Capacitive Touch Slide Sensor al puerto **I2C** del Grove-Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/connect.jpg)

:::note
Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino      |  Cable Grove   | Grove - Capacitive Touch Slide Sensor |
|--------------- |--------------------|-----|
| GND            | Negro              | GND |
| 5V o 3.3V      | Rojo               | VCC |
| SDA            | Blanco             | SDA |
| SCL            | Amarillo           | SCL |

#### Software

:::caution
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.** Descarga la librería [Grove_touch_sensor_CY8C40XX](https://github.com/Seeed-Studio/Grove_touch_sensor_CY8C40XX) desde Github.

- **Paso 2.** Consulta [Cómo instalar una librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo, puedes abrirlo de las siguientes tres maneras：
    1. Ábrelo directamente en el IDE de Arduino a través de la ruta: **File --> Examples --> Grove_touch_sensor_CY8C40XX --> basic_demo**.
    ![](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/path.png)

    2. Ábrelo en tu computadora haciendo clic en **basic_demo.ino** que puedes encontrar en la carpeta **XXXX\Arduino\libraries\Grove_touch_sensor_CY8C40XX-master\examples\basic_demo**, **XXXX** es la ubicación donde instalaste el IDE de Arduino.
    ![](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/path_1.jpg)

    3. O, puedes simplemente hacer clic en el icono ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) en la esquina superior derecha del bloque de código para copiar el siguiente código en un nuevo sketch en el IDE de Arduino.

```cpp

#include "Seeed_CY8C401XX.h"

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
#else
  #define SERIAL Serial
#endif

CY8C sensor;
void setup()
{
    SERIAL.begin(115200);
    
    sensor.init();
}


void loop()
{
    u8 value=0;
    sensor.get_touch_button_value(&value);
    SERIAL.print("button value is");
    SERIAL.println(value,HEX);
    if(value&0x01)
        SERIAL.println("button 1 is pressed");
    if(value&0x2)
        SERIAL.println("button 2 is pressed");

    sensor.get_touch_slider_value(&value);
    SERIAL.print("slider value is");
    SERIAL.println(value,HEX);
    SERIAL.println(" ");


    delay(1000);
}
```

:::caution
El archivo de biblioteca puede actualizarse. Este código puede no ser aplicable al archivo de biblioteca actualizado, por lo que recomendamos que uses los primeros dos métodos.
:::

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramienta-> Monitor Serie**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Establece la velocidad de baudios a **115200**.

:::tip
Si todo va bien, cuando abras el Monitor Serie y toques el sensor táctil deslizante, verás que el LED se enciende, y el Monitor Serie se muestra a continuación:
:::

```cpp
button value is1
button 1 is pressed
slider value is0
 
button value is3
button 1 is pressed
button 2 is pressed
slider value is9
```

![](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/img/result.gif)

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/res/Grove-Capacitive_Touch_Slider_Sensor.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - Capacitive Touch Slide Sensor(CY8C4014LQI) Archivos Eagle](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/res/Grove-Capacitive_Touch_Slider_Sensor.zip)

- **[Zip]** [Librería Grove touch sensor CY8C40XX](https://github.com/Seeed-Studio/Grove_touch_sensor_CY8C40XX/archive/master.zip)

- **[PDF]** [Hoja de Datos del CY8C4014LQI](https://files.seeedstudio.com/wiki/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI/res/CY8C4014LQI_Datasheet.pdf)

## Soporte Técnico y Discusión de Productos


  <br />¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
