---
description: Grove - Giroscopio Digital de 3 Ejes
title: Grove - Giroscopio Digital de 3 Ejes
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-3-Axis_Digital_Gyro
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro.jpg" alt="pir" width={600} height="auto" /></p>


Grove - Módulo de Giroscopio Digital de 3 Ejes basado en ITG 3200. Es el primer chip único del mundo con salida digital, giroscopio de procesamiento de movimiento MEMS de 3 ejes optimizado para juegos, ratones 3D y aplicaciones de control remoto basadas en movimiento para televisores digitales conectados a Internet y decodificadores. El ITG-3200 cuenta con tres convertidores analógico-digitales (ADC) de 16 bits para digitalizar las salidas del giroscopio, un ancho de banda de filtro pasa-bajos interno seleccionable por el usuario y una interfaz I2C de modo rápido (400kHz).

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html)

Características
--------

-   Voltaje de Alimentación: 3.3V, 5V
-   Corriente de Operación: 6.5mA
-   Corriente en espera: 5μA
-   Sensibilidad: 14 LSBs por °/seg
-   Rango de escala completa: ±2000°/seg
-   Aceleración: 10,000g por 0.3ms
-   Interfaz I2C
-   Rango de escala completa de ±2000°/s y sensibilidad de 14.375 LSBs por °/s
-   Tres ADCs integrados de 16 bits
-   Sensor de temperatura en chip
-   Amplificadores integrados y filtros pasa-bajos
-   Sellado herméticamente para resistencia a temperatura y humedad
-   Cumple con RoHS y Green

:::tip
    Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::
Plataformas Soportadas
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::
Demostración
------------

Esta demostración te mostrará cómo obtener datos de este giroscopio digital, los datos están en unidades de rad/s.

Aquí necesitamos un Grove - 3-Axis Digital Gyro y un Seeeduino V3.0.

### Instalación de Hardware

La instalación de hardware es muy fácil, porque hay un Grove I2C en Seeeduino,

Entonces, lo que necesitamos hacer es conectarlo al Grove I2C a través de un cable Grove.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro_Hardware.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro_Hardware.JPG" alt="pir" width={600} height="auto" /></p>


### Descargar Código y Subir

Puedes descargar la biblioteca en github, haz clic [aquí](https://github.com/Seeed-Studio/Grove_3_Axis_Digital_Gyro/), luego extráela a la carpeta libraries de Arduino.

Luego abre File -> examples -> Grove_3_Digital_Gyro -> ITG3200_gyro, puedes abrir el código de demostración.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/ITG3200_gyro_ArduinoIde.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/ITG3200_gyro_ArduinoIde.jpg" alt="pir" width={600} height="auto" /></p>


<!-- Click Upload to upload the code, if you have any problem about how to start Arduino, please click [here](/es/Getting_Started_with_Seeeduino) for some help. -->


### Verificar el resultado

Ahora, puedes abrir el monitor serie para verificar el resultado.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro_SerialDta.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro_SerialDta.jpg" alt="pir" width={600} height="auto" /></p>

Referencia
----------

El diagrama a continuación muestra las orientaciones de los 3 ejes. Puedes usarlo para entender los significados físicos del resultado.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Gyro_Reference_1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Gyro_Reference_1.jpg" alt="pir" width={600} height="auto" /></p>


## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/res/Grove-3-Axis_Digital_Gyro_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


Recursos
--------

-   [Hoja de datos del ITG-3200.](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/res/ITG-3200.pdf)
-   [Archivo Eagle del Grove - 3-Axis Digital Gyro](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/res/Grove-3-Axis_Digital_Gyro_Eagle_File.zip)
-   [Biblioteca del Giroscopio Digital](https://github.com/Seeed-Studio/Grove_3_Axis_Digital_Gyro)


<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_3-Axis_Digital_Gyro -->

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
