---
description: Grove - Acelerómetro Digital de 3 Ejes (±400g)
title: Grove - Acelerómetro Digital de 3 Ejes (±400g)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-3-Axis_Digital_Accelerometer-400g
last_update:
  date: 1/5/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Grove_3Axis_Accelerometer400g.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Grove_3Axis_Accelerometer400g.jpg" alt="pir" width={600} height="auto" /></p>


El H3LIS331DL es un acelerómetro lineal de 3 ejes de alto rendimiento y bajo consumo perteneciente a la familia "nano", con salida estándar de interfaz serie digital I2C. El dispositivo cuenta con modos operacionales de ultra bajo consumo que permiten ahorro avanzado de energía y funciones inteligentes de suspensión para despertar. El H3LIS331DL tiene escalas completas seleccionables dinámicamente por el usuario de ±100g/±200g/±400g y es capaz de medir aceleraciones con tasas de datos de salida desde 0.5 Hz hasta 1 kHz.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer(%C2%B1400g)-p-1897.html)

Características
--------

-   Amplio rango de alimentación DC3.3V a 5V
-   Formato Grove
-   Detección de 3 ejes
-   Paquete pequeño y de perfil bajo: 3×3×1mm TFLGA
-   Bajo consumo 300µA a 3.3V (típico)
-   ±100g /±200g /±400g escala completa seleccionable dinámicamente
-   Interfaz de salida digital I2C
-   Supervivencia a choques altos de 10000 g
-   ECOPACK®RoHS y cumplimiento "Verde"

:::tip
    Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::
Ideas de Aplicación
-----------------

-   Detector de choques
-   Reconocimiento y registro de impactos
-   Detección de conmociones

Plataformas Soportadas
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Uso
---

A continuación te mostramos cómo leer los datos en bruto de este acelerómetro.

1. Conéctalo al puerto I2C de tu [Grove - Base Shield](https://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132_134).
<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Grove-3-Axis_Digital_Accelerometer_connect_BaseBoard.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Grove-3-Axis_Digital_Accelerometer_connect_BaseBoard.jpg" alt="pir" width={600} height="auto" /></p>


2. Descarga la [Biblioteca del Acelerómetro Digital(±400g)](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Accelerometer_H3LIS331DL) y descomprímela en arduino-1.0\\libraries en tu carpeta de instalación de Arduino.

3. Abre el código de demostración directamente por la ruta: File -> Example ->Grove_3Axis_Digital_Accelerometer_H3LIS331DL->H3LIS331DL_AdjVal. Es un sketch para ajustar los datos en bruto del H3LIS331DL para hacerlo más preciso.

4. Sube el código y abre el monitor serie.

5. Abre el monitor serie para obtener el valor de ajuste de referencia según los pasos descritos en la salida serie.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Adjust_value_of_Accelerometer.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Adjust_value_of_Accelerometer.jpg" alt="pir" width={600} height="auto" /></p>


6. Abre el código de demostración directamente por la ruta: File -> Example ->Grove_3Axis_Digital_Accelerometer_H3LIS331DL->H3LIS331DL_Demo. Luego modifica VAL_X_AXIS/VAL_Y_AXIS/VAL_Z_AXIS según lo que obtuviste del Sketch H3LIS331DL_AdjVal.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Redefine_the_VAL_of_Accelerometer.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Redefine_the_VAL_of_Accelerometer.jpg" alt="pir" width={600} height="auto" /></p>


7. Sube el código y abre el monitor serie y abre el monitor serie para verificar el resultado.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Raw_data_of_H3LIS331DL.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Raw_data_of_H3LIS331DL.jpg" alt="pir" width={600} height="auto" /></p>


## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/res/Grove-3-Axis_Digital_Accelerometer-400g-v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


Recursos
--------

-   [Archivo Eagle del Grove - Acelerómetro Digital de 3 Ejes(±400g)](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/res/Grove-3-Axis_Digital_Accelerometer-400g-v1.0.zip)
-   [repositorio github para el Acelerómetro Digital de 3 Ejes(±400g)](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Accelerometer_H3LIS331DL)
-   [Hoja de Datos H3LIS331DL PDF](http://www.st.com/web/en/resource/technical/document/datasheet/DM00053090.pdf)
 

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_3-Axis_Digital_Accelerometer(±400g) -->

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
