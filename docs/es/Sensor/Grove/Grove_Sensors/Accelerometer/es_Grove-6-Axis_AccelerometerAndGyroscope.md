---
description: Grove - Acelerómetro y Giroscopio de 6 Ejes
title: Grove - Acelerómetro y Giroscopio de 6 Ejes
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-6-Axis_AccelerometerAndGyroscope
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- tags: io_3v3, io_5v, grove_i2c, grove_analog, grove_digital, grove_uart, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit -->

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_product_view_1200_s.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_product_view_1200_s.jpg" alt="pir" width={600} height="auto" /></p>

Grove - Acelerómetro y Giroscopio de 6 Ejes es una combinación de sensores integrada con interfaz Grove rentable que incluye un acelerómetro digital de 3 ejes y un giroscopio digital de 3 ejes.

Con un chip digital LSM6DS3 de consumo de energía extremadamente bajo ([hoja de datos](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/res/LSM6DS3TR.pdf)) y un regulador de fuente de alimentación interno, presenta alta sensibilidad, tecnología verde y baja interferencia de ruido. Puede configurarse para diferentes niveles de sensibilidad de aceleración y diferentes rangos de medición de velocidad angular. Proporcionado con un SDK detallado, puede hacer que el proceso de prototipado sea más rápido y fácil.

Este producto puede utilizarse para diferentes aplicaciones de detección de inclinación, movimiento y toque, como robótica, dispositivos IoT y dispositivos electrónicos de consumo.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer&Gyroscope-p-2606.html)

Características
--------

-   Interfaz Grove y rentable.
-   Salida digital para datos de movimiento de 6 DOF.
-   Rango de detección de aceleración lineal de escala completa ±2/±4/±8/±16 g para varios entornos.
-   ±125, ±245, ±500, ±1000, ±2000 grados por segundo (dps) para el rango de medición de velocidad angular lo hace versátil.
-   SDK detallado para programación más fácil.
-   Fuente de alimentación regulada para recopilar datos confiables.
-   Interrupciones programadas para diferentes eventos.
-   Almacenamiento de datos de 8 kB.

:::tip
    Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::
Ideas de aplicación
-----------------

-   Robótica
-   Aeronaves de nivel de consumo
-   Dispositivos de entrada de computadora
-   Dispositivos portátiles.
-   Cosas IoT

Especificaciones
--------------

Para información detallada, consulte la [hoja de datos](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/res/LSM6DS3TR.pdf).

| Parámetro                             | Valor                                                                                |
|---------------------------------------|--------------------------------------------------------------------------------------|
| Voltaje de alimentación analógica:    | 5V/3.3V(DC)                                                                          |
| Consumo de energía:                   | 0.9 mA en modo normal combinado y 1.25 mA en modo de alto rendimiento combinado hasta 1.6 kHz |
| Rango de medición de aceleración lineal | ±2/±4/±8/±16 g escala completa (valor típico)                                        |
| Rango de medición de velocidad angular | ±125, ±245, ±500, ±1000, ±2000 dps(valor típico)                                    |
| Sensibilidad de aceleración lineal    | 0.061(FS = ±2), 0.122(FS = ±4), 0.244(FS = ±8), 0.488(FS = ±16) mg/LSB               |
| Sensibilidad de velocidad angular     | 4.375(FS = ±125), 8.75(FS = ±245), 17.50(FS = ±500), 35(FS = ±1000), 70(FS = ±2000)  |

### Plataformas Compatibles

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::
Descripción General del Hardware
-----------------

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_components_view_1200_s.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_components_view_1200_s.jpg" alt="pir" width={600} height="auto" /></p>

**Puerto Grove**   
Conecta la placa de control principal como la placa Seeeduino con la placa controladora.

**LSM6DS3**   
MCU principal.

### **Lista de partes**

| Nombre de las partes                   | Cantidad |
|----------------------------------------|----------|
| Grove - 6-Axis Accelerometer&Gyroscope | 1PC      |
| Cable Grove                        | 1PC      |

Comenzar
-----------

### **Material requerido**

-   Seeeduino * 1

-   Grove - Base Shield v2

### **Preparativos**

Consulta las siguientes guías para construir un IDE apropiado:

<div class="admonition note">
<p class="admonition-title">Nota</p>
Hemos elegido Seeeduino y es compatible con Arduino en este caso. También puedes usar una placa Arduino en su lugar.
</div>

- Comenzar en Windows

- Comenzar en Mac OS X

### **Conexiones de hardware**

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_demo_connection_1200_s.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_demo_connection_1200_s.jpg" alt="pir" width={600} height="auto" /></p>

<div classname="admonition note">
  <p classname="admonition-title">Nota</p>
  Conecta Grove - 6-Axis Accelerometer&amp;Gyroscope a la interfaz I<sup>2</sup>C en Grove - Base shield. Conecta la fuente de alimentación con cable USB.
</div>


### **Una pequeña demostración**

Descarga la [biblioteca](https://github.com/Seeed-Studio/Accelerometer_And_Gyroscope_LSM6DS3) para Grove - 6-Axis Accelerometer&Gyroscope. Consulta la Guía para usar demostraciones descargadas desde el Github de Seeed para una carga más rápida de tu código a la placa controladora principal. Hay tres ejemplos de demostración en total en el subdirectorio ***examples***.


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/res/Grove%20-%206-Axis%20Accelerometer%26Gyroscope%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


# Recursos
---------

- **[Eagle]** [Grove - 6-Axis Accelerometer&Gyroscopev 1.0 archivo Eagle](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/res/Grove%20-%206-Axis%20Accelerometer%26Gyroscope%20v1.0.zip)
-  **[Biblioteca]** [Grove-6-Axis_AccelerometerAndGyroscope](https://github.com/Seeed-Studio/Accelerometer_And_Gyroscope_LSM6DS3)
-  **[Hoja de datos]** [Hoja de datos de LSM6DS3](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/res/LSM6DS3TR.pdf)

## Proyecto

**Velero de Control Remoto Plug 'n Play**

<iframe frameBorder="{0}" height="327.5" scrolling="no" src="https://www.hackster.io/simon-werner/plug-n-play-remote-control-sailboat-b5724e/embed" width="{350}">
</iframe>


<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Grove_-_6-Axis_Accelerometer&Gyroscope -->

## Soporte Técnico y Discusión de Productos
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
