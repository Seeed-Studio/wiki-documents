---
description: Grove - Contador de Pasos(BMA456)
title: Grove - Contador de Pasos(BMA456)
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Step_Counter-BMA456
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/main.jpg)

El Grove - Contador de Pasos(BMA456) está basado en el BMA456, que es un módulo de aceleración triaxial, de bajo g y alto rendimiento extremadamente pequeño. Gracias al algoritmo especial de BOSCH, hemos convertido este módulo en un podómetro portátil.

Confiable, rentable, y además de eso, es muy fácil de usar, puedes agregar fácilmente este módulo plug and play a tus dispositivos portátiles.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Step-Counter-(BMA456)-p-3189.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Step-Counter-(BMA456)-p-3189.html)

## Versión

| Versión del Producto  | Cambios                                                                                               | Fecha de Lanzamiento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Contador de Pasos(BMA456) | Inicial                                                                                               | Oct 2018      |

## Características

- FIFO en chip
- Ultra bajo consumo
- Interrupción en chip
- Funcionalidad programable

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de Operación|3.3V / 5V|
|Rango de Aceleración|±2g, ±4g, ±8g, ±16g|
|Sensibilidad|16384 @±2g / 8192 @±4g / 4096 @±8g / 2048 @±16g|
|Interfaz|I^2^C|
|Dirección I^2^C|0x19(predeterminada) / 0x18(opcional)|
|Tamaño|L: 40mm A: 20mm H: 10mm|
|Peso|3.2g|
|Tamaño del paquete|L: 140mm A: 90mm H: 10mm|
|Peso bruto|9g|

## Aplicaciones típicas

- Aplicaciones con restricciones de altura
- Solución Plug and Play de contador de pasos con funcionalidad de marca de agua
- Aplicaciones de fitness / Seguimiento de actividad
- Gestión de energía para aplicaciones portátiles
- Encendido/apagado de pantalla y cambio de perfil
- Interfaz de usuario sin botones de hardware
- Compensación de inclinación de brújula electrónica y sincronización de datos
- Mediciones de ángulo de alto rendimiento

## Descripción general del hardware

### Distribución de pines

![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/pin_out.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/pin_out_back.jpg)

### Esquemático

**Alimentación**

![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/schematic_1.jpg)

El voltaje típico del BMA456 es 1.8V, por lo que usamos el chip [XC6206P182MR](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf) para proporcionar un 1.8V estable. La entrada del XC6206P33 va desde 1.8V a 6.0V, por lo que puedes usar este módulo con tu Arduino tanto en 3.3V como en 5V.

**Circuito cambiador de nivel bidireccional**

![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/schematic_2.jpg)

Este es un circuito cambiador de nivel bidireccional típico para conectar dos secciones de voltaje diferentes de un bus I^2^C. El bus I<sup>2</sup>C de este sensor usa 3.3V, si el bus I<sup>2</sup>C del Arduino usa 5V, este circuito será necesario. En el esquemático anterior, **Q6** y **Q5** son MOSFET de canal N [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf), que actúan como un interruptor bidireccional. Para entender mejor esta parte, puedes consultar el [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## Plataformas soportadas

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

| Seeeduino V4.2 | Base Shield | Grove - Step Counter(BMA456) |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Step-Counter-(BMA456)-p-3189.html" target="_blank">Obtener Uno Ahora</a>|

:::note
    **1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar
    
    **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta el Grove - Step Counter(BMA456) al puerto **I^2^C** del Grove-Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/connect.jpg)

:::note
        Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino      |  Cable Grove       | Grove - Step Counter(BMA456) |
|--------------- |--------------------|-----|
| GND            | Negro              | GND |
| 5V o 3.3V      | Rojo               | VCC |
| SDA            | Blanco             | SDA |
| SCL            | Amarillo           | SCL |

#### Software

:::note
        Si esta es la primera vez que trabajas with Arduino, te recomendamos encarecidamente que veas [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Descarga la librería [Seeed_BMA456](https://github.com/Seeed-Studio/Seeed_BMA456) desde Github.

- **Paso 2.** Consulta [How to install library](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo, puedes abrirlo de las siguientes tres maneras：
    1. Ábrelo directamente en el IDE de Arduino a través de la ruta: **File --> Examples --> Grove -Step Counter(BMA456) --> step_counter**.
    ![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/path_1.jpg)

    2. Ábrelo en tu computadora haciendo clic en **step_counter.ino** que puedes encontrar en la carpeta **XXXX\Arduino\libraries\Seeed_BMA456-master\examples\step_counter**, **XXXX** es la ubicación donde instalaste el IDE de Arduino.
    ![](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/img/path_2.jpg)

    3. O, puedes simplemente hacer clic en el icono ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) en la esquina superior derecha del bloque de código para copiar el siguiente código en un nuevo sketch en el IDE de Arduino.

```cpp
#include "arduino_bma456.h"

uint32_t step = 0;

void setup(void)
{    
    Serial.begin(115200);
    Serial.println("BMA456 Step Counter");
    
    bma456.initialize(RANGE_4G, ODR_1600_HZ, NORMAL_AVG4, CONTINUOUS);
    bma456.stepCounterEnable();
}

void loop(void)
{ 
    step = bma456.getStepCounterOutput();

    Serial.print("Step: ");
    Serial.println(step);
    
    delay(1000);
}
```

:::note
        El archivo de biblioteca puede actualizarse. Este código puede no ser aplicable al archivo de biblioteca actualizado, por lo que recomendamos que uses los primeros dos métodos.
:::

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramienta-> Monitor Serie**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Establece la velocidad de baudios a **115200**.

:::success
     Si todo va bien, cuando abras el Monitor Serie y camines con este sensor puesto o lo muevas para simular una postura de caminar, puede mostrar lo siguiente:
:::

```cpp
BM
Step: 0
BMA456 Step Counter
Step: 0
Step: 0
...
...
Step: 18
Step: 20
Step: 22
Step: 24
Step: 26
Step: 28
Step: 30
Step: 32
Step: 34
Step: 36
Step: 38
```

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/res/Grove%20-%20Step%20Counter(BMA456).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - Step Counter(BMA456) Archivos Eagle](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/res/Grove%20-%20Step%20Counter(BMA456).zip)

- **[Zip]** [Librería Seeed BMA456](https://github.com/Seeed-Studio/Seeed_BMA456/archive/master.zip)

- **[PDF]** [Hoja de Datos BMA456](https://files.seeedstudio.com/wiki/Grove-Step_Counter-BMA456/res/BMA456.pdf)

- **[PDF]** [HOJA DE DATOS XC6206](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)

## Proyecto

Este es el video de introducción de este producto, demostraciones simples, puedes intentarlo.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/gPi4EWuAGtg?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
