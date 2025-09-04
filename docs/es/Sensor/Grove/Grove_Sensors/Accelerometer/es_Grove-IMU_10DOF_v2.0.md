---
description: Grove - IMU 10DOF v2.0
title: Grove - IMU 10DOF v2.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-IMU_10DOF_v2.0
last_update:
  date: 1/5/2023
  author: shuxu hu
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/Grove-imu-10dof-v2.0.jpg" alt="pir" width={600} height="auto" /></p>

Grove-IMU 10DOF v2.0 es una versión mejorada de Grove-IMU-10DOF, que reemplaza el BMP180 con BMP280. Como sucesor del ampliamente adoptado BMP180, el BMP280 ofrece alto rendimiento en todas las aplicaciones que requieren medición precisa de presión. Este módulo está basado en MPU-9250 y BMP280, el MPU-9250 es un dispositivo de seguimiento de movimiento de 9 ejes que combina un giroscopio de 3 ejes, acelerómetro de 3 ejes, magnetómetro de 3 ejes y un Procesador de Movimiento Digital (DMP), y BMP280 es un sensor de presión digital de alta precisión y ultra bajo consumo para aplicaciones de consumo. Este módulo es muy adecuado para aplicaciones de teléfonos inteligentes, tabletas y dispositivos portátiles.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-IMU-10DOF-v2.0-p-2691.html)

## Versión

|  Versión del Producto       | Cambios                                                                                                                                                                                                                                      | Fecha de Lanzamiento  |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|
| Grove - IMU 10DOF      | Construido en [MPU-9250 ](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/MPU-9250A_Product_Specification.pdf ) y [BMP180 ](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/BMP180.pdf )  | Marzo 2015     |
| Grove - IMU 10DOF v2.0 | Actualización del sensor BMP180 a [BMP280 ](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf ) de BOSCH                                         | Septiembre 2016 |

## Especificaciones


-   Interfaz I2C Grove, incluye GND, VCC, SDA, SCL.
-   Dirección I2C del MPU-9250 seleccionable
-   Bajo Consumo de Energía
-   I2C de Modo Rápido a 400kHz para comunicarse con todos los registros
-   Sensores de velocidad angular (giroscopios) de salida digital en los ejes X, Y y Z con un rango de escala completa programable por el usuario de ±250, ±500, ±1000 y ±2000°/seg
-   Acelerómetro de 3 ejes de salida digital con un rango de escala completa programable de ±2g, ±4g, ±8g y ±16g
-   Magnetómetro de salida digital con un rango de escala completa de ±4800uT
-   Barómetro de salida digital con rango de 300 ~ 1100hPa(+9000m ~ -500m en relación al nivel del mar)
-   Dimensiones: 25.43mm x 20.35mm
- Dirección I2C: por defecto conectada a y b la dirección del pad de selección I2C es 0x68, si se conecta b y c la dirección es 0x69

:::note
    Si deseas usar múltiples dispositivos I2C, consulta [Software I2C](https://wiki.seeedstudio.com/es/Arduino_Software_I2C_user_guide/).
:::
:::tip
    Más detalles sobre los módulos Grove consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::
## Plataformas Compatibles


<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Descripción General del Hardware

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/dimensions.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/dimensions.jpg" alt="pir" width={600} height="auto" /></p>


-  Pad de selección de dirección I2C del MPU-9250, por defecto conectado **a** y **b** la dirección es 0x68, si se conecta **b** y **c** la dirección es 0x69
-  Pin de interrupción del MPU-9250, la interrupción debe ser configurada, las fuentes de interrupción disponibles son: detección de movimiento, desbordamiento de fifo, datos listos, error del maestro i2c
- Orientación de los Ejes:
El diagrama a continuación muestra la orientación de los ejes de sensibilidad y la polaridad de rotación.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Imu-10dof-dir-axes.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Imu-10dof-dir-axes.png" alt="pir" width={600} height="auto" /></p>

- El BMP280 es un sensor de presión barométrica absoluta especialmente diseñado para aplicaciones móviles. El módulo del sensor está alojado en un paquete LGA de tapa metálica extremadamente compacto de 8 pines con una huella de solo 2.0 × 2.5 mm2 y 0.95 mm de altura del paquete. Sus pequeñas dimensiones y su bajo consumo de energía de 2.7 μA @1Hz permiten la implementación en dispositivos alimentados por batería como teléfonos móviles, módulos GPS o relojes.


## Primeros Pasos


### Jugar con Arduino

#### Hardware

- **Paso 1.** Prepare las siguientes cosas:

| Seeeduino V4.2 | Base Shield| Base Shield |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/Grove-imu-10dof-v2.0_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-IMU-10DOF-v2.0-p-2691.html)|

- **Paso 2.** Conecta Grove - IMU 10DOF v2.0 al puerto **I2C** del shield base.
- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.
- **Paso 4.** Conecta Seeeduino a la PC mediante un cable USB.

<!--link-->
<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/with_ardu.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>


#### Software

- **Paso 1.** Descarga la [librería Grove-IMU_10DOF_v2.](https://github.com/Seeed-Studio/Grove_IMU_10DOF_v2.0/archive/master.zip)
- **Paso 2.** Por favor sigue los procedimientos de [cómo instalar una librería de arduino](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/) para instalar la librería.
- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo " IMM_10DOF_Test a través de la ruta: **File -> Example ->GROVE_IMU_10DOF_V2-master-> IMU_10DOF_V2_Test**.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/library%20example.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/library%20example.jpg" alt="pir" width={600} height="auto" /></p>

- **Paso 4.** Sube el código. Ten en cuenta que debemos seleccionar el tipo de placa y puerto COM correctos.
Podemos ver:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/ardu_result.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/ardu_result.jpg" alt="pir" width={600} height="auto" /></p>


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/res/Grove%20-%20IMU%2010DOF%20v2.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos


-   **[Eagle]** [Archivo eagle de Grove - IMU 10DOF v2](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/res/Grove%20-%20IMU%2010DOF%20v2.0.zip)
-   **[Librería]** [Obtener librería desde github](https://github.com/Seeed-Studio/Grove_IMU_10DOF_v2.0/archive/master.zip)
-   **[Hoja de datos]** [Hoja de datos BMP280](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/res/BMP280-Datasheet.pdf)
-   **[Hoja de datos]** [Hoja de datos MPU-9250](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/MPU-9250A_Product_Specification.pdf)


<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_IMU_10DOF -->

## Proyectos

**Aplicación de Datos de Motocicleta**: ¡Aprende de tu viaje como un profesional! Los equipos de carreras de motocicletas han usado datos de IMU durante años, con RideData+Arduino es fácil para ti hacer lo mismo.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/RideData/motorcycle-data-app-11698f/embed' width='350'></iframe>

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
