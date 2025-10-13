---
description: Grove AI HAT para Computación en el Borde
title: Grove AI HAT para Computación en el Borde
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove_AI_HAT_for_Edge_Computing
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/Grove%20AI%20HAT%20for-Edge-Computing-wiki-front.jpg)

El Grove AI HAT para Computación en el Borde (en adelante llamado 'Grove AI HAT') está construido alrededor del módulo Sipeed MAix M1 AI con procesador Kendryte K210 en su interior. Es un sombrero AI de raspberry pi de bajo costo pero potente que ayuda a la raspberry pi a ejecutar IA en el borde, también puede funcionar independientemente para aplicaciones de computación en el borde.

El MAix M1 es un potente módulo AI RISC-V de 600MHz que cuenta con CPU dual core de 64 bits, KPU de 16 bits de 230GMULps (Procesador de Red Neuronal), FPU (Unidad de Punto Flotante) que soporta DP&SP, y APU (Procesador de Audio) que soporta 8 micrófonos.

Además del potente procesador Kendryte K210, la placa Grove AI HAT para Computación en el Borde proporciona una gran cantidad de periféricos: I2C/UART/SPI/I2S/PWM/GPIO. El sombrero también ofrece interfaz LCD y de cámara, que soportan la LCD QVGA de 2.4 pulgadas Sipeed y cámara DVP, será útil y conveniente para tu proyecto de visión AI. Al igual que el <a href="https://www.seeedstudio.com/Sipeed-MAix-BiT-for-RISC-V-AI-IoT-1-p-2873.html" target="_blank">Kit Sipeed MAix BiT para RISC-V AI+IoT</a>
, lanzaremos pronto el kit con cámara y LCD. Para aplicaciones de reconocimiento de voz AI, agregamos un micrófono de alta calidad. Y para aplicaciones de robot o movimiento, hay un sensor acelerómetro de 3 ejes integrado, que es más preciso y fácil de usar comparado con sensores externos.

Hemos lanzado varias variedades de productos SIPPED AI, creemos que es hora de hacerlo Grove, y traer todos nuestros cientos de sensores grove y actuadores grove a tus aplicaciones AI. Así que aquí viene el Grove AI HAT para Computación en el Borde. Hemos agregado 6 conectores grove a este sombrero, incluyendo 1xDigital IO, 2xAnalog IO, 1xI2C, 1xUART y 1xPWM. Además de eso, basado en <a href="https://github.com/kendryte/kendryte-standalone-sdk" target="_blank">kendryte-standalone-sdk</a>
, soportamos Linux, Windows, Mac OS X y otros entornos de desarrollo.

Esperamos que esta placa pueda ayudarte con tu computación en el borde, visión AI, reconocimiento de voz, y otros proyectos AI, solo disfrútala.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/5BF3ExL1HOQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-AI-HAT-for-Edge-Computing-p-4026.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Procesador: Módulo Sipeed MAIX-I sin WiFi (1er Módulo AI RISC-V 64, K210 en su interior)
- 1x USB 2.0 Device, Tipo C (Alimentación y Programación)
- 6x Interfaz Grove: incluye 1x Digital IO, 1x PWM, 1x I2C, 1x UART, 2x ADC
- 1x LED de Alimentación, 1x LED de Arranque
- 1x Botón de Reset, 1x Botón de Arranque
- 1x Interfaz LCD
- 1x Interfaz de Cámara
- 1x Micrófono Digital
- 1x Sensor Acelerómetro
- 1x Cabezal de Pines JTAG & ISP UART
- 2x Cabezal de 20 Pines con I2C, UART, SPI, I2S, PWM, GPIO

## Especificación

|Parámetro|Valor|
|---|---|
|CPU|K210 RISC-V Dual Core 64bit, 400Mh(Máx. 600Mhz) |
|FPU|FPU de alto rendimiento con pipeline compatible con IEEE754-2008|
|KPU(Procesador de Red Neuronal )|• Soporta el modelo de punto fijo que el marco de entrenamiento principal entrena según reglas de restricción específicas<br />• Soporte para núcleos de convolución 1x1 y 3x3<br />• Soporte para cualquier forma de función de activación<br />• El tamaño máximo de parámetros de red neuronal soportado para trabajo en tiempo real es de 5MiB a 5.9MiB|
|Soporte de Depuración|Interfaz UART de alta velocidad y JTAG para depuración|
|Voltaje de Alimentación|5V<br />no puede exceder 5.5V|
|Voltaje de E/S|3.3V|
|Temperatura Ambiente de Operación| -20 – 70℃|
|ADC|ADC de 16 bits integrado|
|Acelerómetros de 3 Ejes|ADXL345 ±2 g/±4 g/±8 g/±16 g|
|Micrófono|Sensibilidad:-26 dB;SNR:61 dB|
|GPIO|2x Conector de 20 Pines compatible con Raspberry Pi|
|Interfaz Grove|1x E/S Digital, 1x PWM, 1x I2C, 1x UART, 2x ADC|
|Interfaz USB|USB 2.0 Device, Tipo C(Alimentación y Programación)|
|Interfaz LCD|Conector FPC de 24P 0.5mm para LCD MCU de 8 bits|
|Interfaz de Cámara DVP|Conector FPC de 24P 0.5mm|
|Botón|1x Botón de Reset, 1x Botón de Boot (puede usarse como Botón de Usuario)|
|LED|1x LED de Alimentación, 1x LED de Boot(puede usarse como LED de Usuario)|

:::caution

- Todos los niveles de interfaz de E/S digital y analógica son de 3.3V. Por favor, no ingrese más de 3.3V, de lo contrario la CPU puede dañarse.
- El voltaje de alimentación de entrada es de 5V y no puede exceder 5.5V.
:::

## Aplicaciones

- IA para Computación en el Borde
- Edificio Inteligente
- Equipo médico
- Automatización y Control de Procesos
- Robot

## Descripción General del Hardware

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/pinout1.jpg" alt="Grove AI HAT for Edge Computing descripción general del hardware" title="descripción general del hardware" />
  <figcaption><b>Figura 1</b>. <i>Grove AI HAT for Edge Computing descripción general del hardware</i></figcaption>
</figure>
</div>

## Plataformas Compatibles

|                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

#### Demo Digital

**Materiales requeridos**

- [Grove AI HAT for Edge Computing](https://www.seeedstudio.com/Grove-AI-HAT-for-Edge-Computing-p-4026.html) x1
- [Grove - LED](https://www.seeedstudio.com/Grove-White-LED-p-1140.html) x1
- Cable USB Type C x1

##### Conexión de Hardware

- 1. Conecta el Grove - LED al puerto Grove **J2** (pin D13) del Grove AI HAT
- 2. Conecta el Grove AI HAT a la computadora a través del puerto USB Type C.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/Grove-AI-HAT-for-Edge-Computing-connect.png" alt="Grove AI HAT Arduino demo" title="Grove AI HAT Arduino demo" />
  <figcaption><b>Figura 8</b>. <i>Conexión de hardware</i></figcaption>
</figure>
</div>

#### Demo Analógico

**Materiales requeridos**

- [Grove AI HAT for Edge Computing](https://www.seeedstudio.com/Grove-AI-HAT-for-Edge-Computing-p-4026.html) x1
- [Grove - Round Force Sensor (FSR402)](https://www.seeedstudio.com/Grove-Round-Force-Sensor-FSR40-p-3110.html) x1
- Cable USB Type C x1

##### Conexión de Hardware

- 1 Conecta el Grove - Round Force Sensor (FSR402) al puerto Grove **J11** (pin A0) del Grove AI HAT
- 2 Conecta el Grove AI HAT a la computadora a través del puerto USB Type C.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/Grove-AI-HAT-for-Edge-Computing-connect2(1).png" alt="Grove AI HAT Arduino demo" title="Grove AI HAT Arduino demo" />
  <figcaption><b>Figura 9</b>. <i>Conexión de hardware</i></figcaption>
</figure>
</div>

#### Demo de Detección de Rostros

**Materiales requeridos**

- [Grove AI HAT for Edge Computing](https://www.seeedstudio.com/Grove-AI-HAT-for-Edge-Computing-p-4026.html) x1
- [Cámara OV2640](https://www.seeedstudio.com/OV2640-Fisheye-Camera-p-4048.html) x1
- [LCD TFT de 2.4 pulgadas](https://www.seeedstudio.com/2-4-TFT-LCD-p-4049.html) x1
- Cable USB Type C x1

##### Conexión de Hardware

- a. Conecta la cámara OV2640 al conector FPC de 24 pines para cámara del Grove AI Hat
- b. Conecta el LCD TFT de 2.4 pulgadas al conector FPC de 24 pines para LCD del Grove AI Hat
- c. Conecta el Grove AI HAT a la computadora a través del puerto USB Type C.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/wiki-connect.jpg" alt="Grove AI HAT face detect demo-1" title="" />
  <figcaption><b>Figura 12</b>. <i>Conexión de hardware del demo de detección de rostros</i></figcaption>
</figure>
</div>

## Recursos

- **[PDF]** [Archivo esquemático del Grove AI HAT for Edge Computing](https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/res/Grove%20AI%20HAT%20for%20Edge%20Computing_v1.0_SCH_190426.pdf)
- **[PDF]** [Hoja de datos del Sensor de Acelerómetros](https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/res/Accelerometers_Sensor_datasheet.pdf)
- **[PDF]** [Hoja de datos ADS1115](https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/res/ADS1115.pdf)

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
