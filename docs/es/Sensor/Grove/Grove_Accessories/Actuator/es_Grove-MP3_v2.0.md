---
title: Grove - MP3 v2.0
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-MP3_v2.0/
slug: /es/Grove-MP3_v2.0
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/Grove-MP3_v2.0_Product_View_700_S.jpg)

Grove - MP3 v2.0 es un módulo de audio compacto y de tamaño pequeño. Soporta varias operaciones de archivos de audio para archivos de formato MP3, WAV y WMV, como reproducción aleatoria de música, reproducir música en archivos específicos, y más. Con comunicación serie, puedes usar todos los comandos predefinidos o combinaciones de comandos para realizar todas las operaciones en archivos de música. Este módulo también soporta sistemas de archivos generales como FAT16 y FAT32. Tiene una interfaz Grove UART, un conector de audio de 3.5 mm y una ranura micro-SD. Con este módulo, puedes añadir algo de sonido a tus aplicaciones silenciosas.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/3FMlt_aqhOc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{}}><a href="https://www.seeedstudio.com/Grove-MP3-v2-0-p-2597.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width={210} height={41} border={0} /></a></p>

## Versión

| Versión del Producto   | Cambios          | Fecha de Lanzamiento |
|------------------------|------------------|----------------------|
|  Grove - MP3 v1.0 | Inicial          | 28 de abril 2013 |
|  Grove - MP3 v2.0 | Cambio a KT403A | 15 de diciembre 2015   |

## Características

- Operaciones generales en archivos de audio
- Ranura micro-SD integrada y conector de audio de 3.5 mm
- Soporte de frecuencia de muestreo de 8 / 11.025 / 12 / 16 / 22.05 / 24 / 32 / 44.1 / 48(KHz)
- Salida DAC de 24 bits, rango de salida dinámico de 90 dB (máx.), relación señal-ruido de 85 dB
- Formato de audio MP3, WMV y WAV y sistema de archivos FAT16, FAT32 compatible
- Incorpora 10 niveles de ecualización en total

:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Ideas de aplicación

- Módulo de audio de nivel medio para cualquier aplicación.

## Especificaciones

| Parámetro                                  | Valor                                                                                                             |
|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| Entrada                                    | 5 V (DC)                                                                                                          |
| Corriente de operación (estado sin salida de señal) | menos de 15 mA                                                                                                   |
| Corriente de operación                     | menos de 40 mA                                                                                                   |
| Chip                                       | KT403A [(hoja de datos)](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_KT403A_datasheet_V1.3_EN-Recompiled_by_Seeed-.pdf) |
| Voltaje de salida LDO del chip             | 3.3 V                                                                                                             |
| Corriente de salida del chip               | 100mA(máx.)                                                                                                      |
| Formatos de archivo compatibles            | MP3, WAV, WMA                                                                                                     |
| Memoria máxima compatible para tarjeta SD  | 8 GB                                                                                                             |
| Frecuencia de muestreo                     | 8 / 11.025 / 12 / 16 / 22.05 / 24 / 32 / 44.1 / 48(KHz)                                                           |

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Descripción General del Hardware

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/Grove-MP3_v2.0_Component_view-front-1200_S.jpg)

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/Grove-MP3_v2.0_Component_View-Back-1200_S.jpg)

## Primeros Pasos

:::note
    Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar con Arduino

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield|  Grove - MP3 v2.0 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/Grove-MP3_v2.0_s.jpg)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/depot/Grove-MP3-v20-p-2597.html?cPath=98_106_57)|

:::note
    Necesitamos una tarjeta SD con música dentro y auriculares/audífonos o estéreo con conector de audio de 3.5 mm también.
:::

- **Paso 2.** Conecta Grove-MP3 v2.0 al puerto D2 del Grove-Base Shield.
- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.
- **Paso 4.** Conecta Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/seeeduino_mp3.jpg)

:::note
 Si no tenemos Grove Base Shield, también podemos conectar directamente Grove-MP3 v2.0 al Seeeduino como se muestra a continuación.
:::
| Seeeduino       | Grove-MP3 v2.0 |
|---------------|-------------------------|
| 5V            | Rojo                     |
| GND           | Negro                   |
| D3            | Blanco                   |
| D2            | Amarillo                  |

#### Software

- **Paso 1.** Descarga el [Grove-MP3 v2.0](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player) desde Github.
- **Paso 2.** Consulta [Cómo instalar biblioteca](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la biblioteca para Arduino.
- **Paso 3.** Puedes seleccionar el ejemplo **Seeed_Serial_MP3_Player/examples/KT403A_Terminal_player** y subirlo a arduino. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).
- **Paso 4.** Veremos la información en el terminal COM como se muestra a continuación.

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/COM.png)

:::note
    Para programación avanzada, puedes [descargar](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_KT403A_datasheet_V1.3_EN-Recompiled_by_Seeed-.pdf) la hoja de datos del chip KT403A.
:::

- **Paso 5.** Por favor ingresa el comando relacionado para reproducir la música.

:::tip
    La biblioteca soporta dispositivos AVR/SAMD/STM32F4, tanto serial por hardware como por software también.
:::
Hay 2 tipos de puertos serie. Uno es COMSerial, que significa puerto de comunicación (conectando con el módulo Grove-MP3). El otro es ShowSerial, que significa puerto de visualización de información serie (conectando con PC).

La mayoría de las placas arduino tienen al menos un Serial, algunas tienen múltiples seriales (Arduino Mega tiene 4 Seriales). Se comunica en los pines digitales 0 (RX) y 1 (TX) así como con la computadora vía USB. Así que si conectas un dispositivo UART en el pin D0 y pin D1, tienes que removerlos antes de descargar el programa a través de USB. De lo contrario causará fallas en la subida. A veces necesitas más puertos serie que el número de puertos serie por hardware disponibles. Si este es el caso, puedes usar un Serial por Software que usa software para emular el hardware serie. El serial por software requiere mucha ayuda del controlador Arduino para enviar y recibir datos, así que no es tan rápido o eficiente como el serial por hardware. Para más información sobre el Serial, por favor consulta [Seeed Arduino Serial](https://wiki.seeedstudio.com/es/Seeed_Arduino_Serial/).

- **AVR:** Para el ejemplo de abajo, Definimos Software Serial como COMSerial (conectando con el módulo Grove-MP3). NO todos los pines digitales pueden ser usados para serial por software. Puedes consultar [Software Serial](https://www.arduino.cc/en/Reference/SoftwareSerial) para pines detallados. Definimos hardware Serial como ShowSerial (conectando con PC). Si usas Arduino Mega, puedes conectar el hardware Serial a ShowSerial y el otro Serial1/Serial2/Serial3 a COMSerial. Así que puedes consultar la configuración AVR Mega.

- **SAMD:** Para el ejemplo de abajo, El SAMD no soporta serial por software. Usamos el serial por hardware **Serial1** para comunicarnos con el Módulo Grove-MP3 y **SerialUSB** para imprimir mensajes en PC.

- **STM32F4:** Para el ejemplo de abajo, Usamos el serial por hardware **Serial** para comunicarnos con el Módulo Grove-MP3 y **SerialUSB** para imprimir mensajes en PC.

:::note
    Para más información sobre el Serial, por favor consulta [Seeed Arduino Serial](https://wiki.seeedstudio.com/es/Seeed_Arduino_Serial/).
:::

```cpp
#ifdef __AVR__
#include <SoftwareSerial.h>
SoftwareSerial SSerial(2, 3); // RX, TX
#define COMSerial SSerial
#define ShowSerial Serial 

KT403A<SoftwareSerial> Mp3Player;
#endif

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
#define COMSerial Serial1
#define ShowSerial SerialUSB 

KT403A<Uart> Mp3Player;
#endif

#ifdef ARDUINO_ARCH_STM32F4
#define COMSerial Serial
#define ShowSerial SerialUSB 

KT403A<HardwareSerial> Mp3Player;
#endif
```

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_Schematic_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle&PDF]** [Archivos esquemáticos de Grove-MP3_v2.0](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_Schematic_files.zip)
- **[Librería]**  [Librerías de Grove-Serial MP3 Player V2.0](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player)
- **[Hoja de datos]** [Hoja de datos KT403A](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_KT403A_datasheet_V1.3_EN-Recompiled_by_Seeed-.pdf)

## Proyectos

**Proyecto de Seguridad Basado en Arduino Usando Cayenne**: Proyecto de Seguridad Doméstica basado en Arduino. Alertas SMS/email cuando se detecta un intruso. Mensajes personalizados para personal autorizado.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ArduinoBasics/arduino-based-security-project-using-cayenne-eb379b/embed' width='350'></iframe>

**Piano de Hojas**: Hicimos un piano usando un sensor táctil, así como hojas para las teclas del piano.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/leaf-piano-5261a6/embed' width='350'></iframe>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
