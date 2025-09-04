---
description: Grove - Sensor Táctil I2C
title: Grove - Sensor Táctil I2C
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-I2C_Touch_Sensor
last_update:
  date: 2/22/2023
  author: jianjing Huang
---
<!-- ---
name: Grove - Sensor Táctil I2C
category: Sensor
bzurl: https://seeedstudio.com/Grove-I2C-Touch-Sensor-p-840.html
oldwikiname: Grove_-_I2C_Touch_Sensor
prodimagename: Grove-I2C-Touch-Sensor.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/P3202380.jpg
surveyurl: https://www.research.net/r/Grove-I2C_Touch_Sensor
sku: 101020047
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_linkit
--- -->

![](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/img/Grove-I2C-Touch-Sensor.jpg)

El Sensor Táctil I2C está basado en el Controlador de Sensor Táctil Capacitivo de Proximidad de FreeScale - MPR121. Detecta el toque o proximidad de dedos humanos. Este sensor incluye un controlador de Sensor Táctil y 4 sensores de dedo. Se pueden insertar los conectores de los sensores en la base del controlador del Sensor, y comenzar a detectar el toque.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Grove-I2C-Touch-Sensor-p-840.html)

Especificaciones
-------------

| Parámetro              | Valor/Rango                         |
|------------------------|-------------------------------------|
| Voltaje de operación   | 3~5.5V                              |
| Corriente en Modo Standby | 2μA                              |
| Canales Táctiles       | 12 (Incluyendo 4 con sensores táctiles) |
| Protocolo de Comunicación | I2C                              |
| Dirección I2C          | 0x5A                                |

:::tip
Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Plataformas Compatibles
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Descripción General del Hardware
-----------------

![](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/img/DSC_0030.png)

Hay 12 electrodos CH0-CH11. CH0-CH3 están conectados a 4 sensores táctiles.

Los CH4-CH11 son para que el cliente expanda la función. Si necesita más, puede hacer los sensores usted mismo.

Los cables de los sensores están trenzados para reducir el impacto del ambiente. El cable negro (tierra) puede cortarse si se necesita alta sensibilidad.

El pin INT tiene que ser extraído si los clientes quieren usar el pin de interrupción del MPR121.

Primeros Pasos
---------------

### **Grove - Ayuda**

Los siguientes documentos ayudan al usuario a comenzar con Grove.

- [Prefacio - Primeros Pasos](https://www.seeedstudio.com/document/pdf/Preface.pdf)
- [a Grove](https://www.seeedstudio.com/document/pdf/Introduction%20to%20Grove.pdf)

:::note
Dado que cada electrodo necesita ser auto-configurado por el MPR121 durante el encendido y no hay reinicio de energía en el controlador del sensor táctil, cada vez que inserte o retire un sensor, necesita reiniciar la energía del Seeeduino.
:::

Los sensores también pueden sentir los dedos del ser humano con algo entre ellos, es decir, no necesita tocar los sensores con sus dedos realmente.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/img/DSC_0026.jpg)

![](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/img/DSC_0027.jpg)

Con un cartón de aproximadamente 3 mm de grosor, el sensor puede sentir el toque de los dedos, lo que lo convierte en una buena solución para muchas aplicaciones.

### Jugar con Codecraft

#### Hardware

**Paso 1.** Usando un cable Grove conecte Grove - I2C Touch Sensor al puerto I2C del Seeeduino. Si está usando Arduino, por favor aproveche un Base Shield.

**Paso 2.** Conecte Seeedino/Arduino a su PC a través de un cable USB.

#### Software

**Paso 1.** Abra [Codecraft](https://ide.chmakered.com/), añada soporte para Arduino, y arrastre un procedimiento principal al área de trabajo.

:::note
Si esta es su primera vez usando Codecraft, vea también [Guía para Codecraft usando Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::

**Paso 2.** Arrastre bloques como en la imagen de abajo o abra el archivo cdc que puede descargarse al final de esta página.

![cc](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/img/cc_I2C_Touch_Sensor.png)

Suba el programa a su Arduino/Seeeduino.

:::tip
Cuando el código termine de subirse, verá qué canal tocó en el Monitor Serie.
:::

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/res/I2C_Touch_Sensor_eagle_files-v1.1-.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Biblioteca del Sensor Táctil I2C](https://github.com/Seeed-Studio/Grove_I2C_Touch_Sensor)
- [Archivos eagle del Sensor Táctil I2C(v1.1).zip](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/res/I2C_Touch_Sensor_eagle_files-v1.1-.zip)
- [PDF del Sensor Táctil I2C](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/res/Grove-I2C_Color_sensor_v1.2.pdf)
- [¿Cómo detectar el toque del dedo?](/es/How_to_detect_finger_touch)
- [Hoja de Datos del Sensor Táctil I2C](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/res/Freescale_Semiconductor;MPR121QR2.pdf)
- [Archivo CDC de Codecraft](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/res/Grove_I2C_Touch_Sensor_CDC_File.zip)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Grove_-_I2C_Touch_Sensor -->

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
