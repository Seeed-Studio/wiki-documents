---
description: Grove - Acelerómetro Analógico de 3 Ejes
title: Grove - Acelerómetro Analógico de 3 Ejes
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-3-Axis_Analog_Accelerometer
last_update:
  date: 1/5/2023
  author: shuxu hu
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/Grove-3-axis_Analog_Accelerometer_photo.JPG" alt="pir" width={600} height="auto" /></p>

El ADXL335 es un acelerómetro completo de 3 ejes pequeño, delgado, de bajo consumo con salidas de voltaje acondicionadas. El producto mide la aceleración con un rango mínimo de escala completa de ±3 g.
El módulo fue diseñado como una placa de conexión porque la señal del ADXL335 es analógica (se requieren más puertos). Pero el contorno de la placa es un módulo grove que puedes fijar convenientemente como otros groves. El sensor combina alimentación de 3.3 y 5V, puede ser usado en dispositivos Arduino estándar y Seeeduino Stalker. El siguiente código de programa incluye un filtro de primer orden que puede hacer que la salida sea suave si el sensor se usa en un robot o coche de juguete.

<!-- [![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-p-1086.html) -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-p-1086.html)

Características
--------

- Amplio rango de alimentación DC3V a 5V
- Contorno Grove
- Detección de 3 ejes
- Paquete pequeño y de perfil bajo: 4×4×1.45mm LFCSP
- Bajo consumo 350µA a 3V (típico)
- Alta sensibilidad
- Supervivencia a choques de 10,000 g
- Ajuste de BW con un solo capacitor por eje
- Cumple con RoHS/WEEE libre de plomo

:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Ideas de Aplicación
-----------------

- Sensor de movimiento
- Detector de choques
- Sensor de vibración
- Coche de juguete
- Robot

Plataformas Soportadas
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Antes del uso
------------

Te sugerimos leer estos conocimientos antes de usar el sensor de gas, te ayudará a aprender más sobre Arduino y nuestros productos, y también te permitirá usar hardware de código abierto más fácilmente.

- Comenzando con Arduino
- Qué es el sistema Grove
- ¿Por qué necesito un shield base?

Después de leer eso sabrás cómo usar el shield base con productos Grove para trabajar bien con Arduino. ¡Comencemos!

Comenzando
-----

El contorno del sensor es una placa de conexión, puedes soldar cables en la placa o usar cables puente para conectar el sensor.

- El VCC se conecta a la fuente de alimentación (DC5V o DC3.3V), GND a tierra, X al puerto analógico A0 de Arduino, Y a A1, Z a A2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/Grove-3-axis_analog_accelerometer_V1.0_hardware.jpg" alt="pir" width={600} height="auto" /></p>

- Descarga la [Biblioteca del Acelerómetro Analógico de 3 Ejes](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/res/AnalogAccelerometer.zip) y descomprímela en el archivo de bibliotecas del IDE de Arduino por la ruta: ..\\arduino-1.0.1\\libraries.
- Calibra el sensor

El sensor es un dispositivo analógico, debes calibrar el sensor antes de combinarlo con tu sistema.

**Paso 1:** Abre la Demo: Calibración y súbela a Arduino.

**Paso 2:** Abre tu monitor serie, asegúrate de que el sensor esté conectado. Sigue las instrucciones de los ejes impresas en la placa del sensor. Primero, asegúrate de que la dirección del eje Z esté completamente vertical, por favor escribe cualquier carácter si estás listo. Cambia la posición del sensor, repite la operación anterior para obtener que las direcciones del eje X y del eje Y estén completamente verticales.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/3-Axis_Analog_Accelerometer.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/3-Axis_Analog_Accelerometer.jpg" alt="pir" width={600} height="auto" /></p>

**Paso 3:** Puedes obtener los valores como se muestra arriba. Por favor modifica las definiciones de macro con estos resultados en ADXL335.h

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/Analog_Accelerometer_Code.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/Analog_Accelerometer_Code.jpg" alt="pir" width={600} height="auto" /></p>

Ahora la calibración ha sido completada.

- Descargando el código de demostración: Midiendo Aceleración, luego abre el monitor serie, gira el sensor a cualquier ángulo, puedes ver el valor de ángulo digital enviado desde el acelerómetro al monitor.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/3-Axis_Analog_Accelerometer1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/3-Axis_Analog_Accelerometer1.jpg" alt="pir" width={600} height="auto" /></p>

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/res/Grove-3-Axis_Analog_Accelerometer_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Archivo Eagle del Grove - Acelerómetro Analógico de 3 Ejes](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/res/Grove-3-Axis_Analog_Accelerometer_Eagle_File.zip)

- [Librería del Acelerómetro Analógico de 3 Ejes](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/res/AnalogAccelerometer.zip)

- [repositorio github para el Acelerómetro Analógico de 3 Ejes](https://github.com/Seeed-Studio/Grove_3Axis_Analog_Accelerometer)

- [Hoja de datos ADXL335.pdf](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/res/ADXL335_datasheet.pdf)

## Proyecto

**Grove - Introducción al Acelerómetro Digital de 3 Ejes** Cómo usar un acelerómetro digital de 3 ejes.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-3-axis-digital-accelerometer-ea05c3/embed' width='350'></iframe>

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_3-Axis_Analog_Accelerometer -->

**Sistema de Gestión Dual de Panel Solar (SP DMS)** Este prototipo IoT realiza dos funciones: 1) Prevención de robo y 2) Indicación de mantenimiento del panel solar usando LinkIt ONE y Sensores.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/skyline/solar-panel-dual-management-system-sp-dms-3a87ca/embed' width='350'></iframe>

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
