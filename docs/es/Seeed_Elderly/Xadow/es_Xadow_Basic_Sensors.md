---
description: Xadow - Sensores Básicos
title: Xadow - Sensores Básicos
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_Basic_Sensors
last_update:
  date: 1/13/2023
  author: shuxu hu
---

---
![](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/Xadow_Basic_Sensors.JPG)

Xadow Basic Sensors integra tres sensores diferentes en una sola placa:
- Acelerómetro de 3 ejes para detección de movimiento, monitoreo de actividad y seguimiento de velocidad
- Sensor de Luz Digital de doble diodo que puede medir por separado luz infrarroja, espectro completo o luz visible para humanos
- Sensor de Temperatura para monitoreo de temperatura.

[![](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Xadow-Basic-Sensors-p-2555.html)

## Características
---
- Placa de sensores tres en uno
- Plug-and-play si se conecta con RePhone Kit Create
- Diseño de código abierto y modular
- Delgado y pequeño
- Conectores Xadow de 11 PINES integrados para conexión completamente flexible con otros Módulos Xadow
- Apilable, encadenable y cosible con otros Módulos Xadow.

## Especificaciones
---
**Descripción General**

|Elemento|Valor|
|---|---|
|Microcontrolador	|STM32F030F4
|Núcleo|	CPU ARM® de 32 bits Cortex® -M0
|Fuente de Alimentación|	3.3 ~ 6 V (a través de pines de conexión)
|Flash	|16 KB
|SRAM|	4 KB
|Velocidad de Reloj|	48 MHz
|Rango de Temperatura de Operación	|-30°C a 70°C
|Interfaces|	Interfaz con Xadow GSM+BLE a través de I2C (dirección de 7 bits 0x03)
|Dimensión	|25.37mm × 20.30mm / 1" × 0.8"

**Acelerómetro de 3 Ejes (ADXL345)**

|Elemento|valor|
|---|---|
|Rango de Prueba g|	±2g (predeterminado), ±4g, ±8g, o ±16g
|Resolución|	Aumenta con el rango g, hasta resolución de 13 bits a ±16g

**Sensor de Luz Digital (TSL2561) -- Aproxima la Respuesta del Ojo Humano**

|Elemento|Valor|
|---|---|
|Rango Dinámico (Lux)|	0.1 a 40,000 Lux
|Fotodiodos Duales	|Infrarrojo y espectro completo

**Sensor de Temperatura (LM75ADP)**

|Elemento|Valor|
|---|---|
|Rango de Temperatura|	-55°C a 125 °C
|Precisión	|± 2°C para rango de temperatura de -25°C a 100°C / ± 3°C para rango de temperatura de -55°C a 25°C y de 100 °C a 125°C|

## Descripción General del Hardware
---
![](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/Xadow_Basic_Sensors.png)

## Úsalo con RePhone Kit Create
---
**Obtener los Datos del Sensor**

Sin ninguna programación, puedes conectarlo al Módulo Principal (Xadow GSM+BLE) de tu 'RePhone Kit Create' para leer todos los datos de los sensores.
![](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/Xadow_Basic_Sensors_Sensor_Value.png)

**Configurar 'Si Esto Entonces Aquello'**

También puedes configurar los datos del sensor como una condición para activar una serie de actuadores como audio, matriz LED y tira LED, o activar acciones como hacer una llamada y enviar un mensaje.
![](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/Xadow_Basic_Sensors_Set_Sensor_Condition.png)

## Comunidad RePhone
---
[![](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/images/300px-RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

Hemos estado buscando un mejor lugar donde nuestros patrocinadores (Usuarios de RePhone) puedan sentarse juntos, cálida y cómodamente, tener conversaciones sobre RePhone, discutir problemas técnicos, compartir ideas/proyectos, y dar retroalimentación sobre el desarrollo de los módulos en el futuro. Y entonces aquí vamos, la [Comunidad RePhone](https://community.seeedstudio.com/discover.html?t=RePhone).

¡Ahora únete a nosotros en la [Comunidad RePhone](https://community.seeedstudio.com/discover.html?t=RePhone)! Juntos buscamos respuestas, hacemos cosas interesantes, nos preocupamos unos por otros, y compartimos nuestras experiencias.

**Preguntas Frecuentes**

Algunas preguntas frecuentes en la [Comunidad RePhone](https://community.seeedstudio.com/discover.html?t=RePhone) son recopiladas y respondidas en el tema "Preguntas Frecuentes de RePhone (FAQ)", el tema se mantendrá actualizándose cada vez que surja una nueva FAQ.

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/resources/202000745_PCBA%3BXadow%20Basic%20Sensors%20v1.0_schemic%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
Mantendremos actualizado el código fuente en nuestra página de github:
- [Código Fuente para Xadow Basic Sensors](https://github.com/WayenWeng/Xadow_Basic_Sensors/)

El diagrama esquemático de Xadow Basic Sensors se proporciona en el siguiente enlace:
- [Archivos Esquemáticos de Xadow Duino](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/resources/202000745_PCBA%3BXadow%20Basic%20Sensors%20v1.0_schemic%20file.zip)

Consulta más información sobre la hoja de datos de cada sensor:
- [ADXL345 - Acelerómetro de 3 Ejes](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/res/ADXL345-3_Axis_Acceserometer.pdf)
- [LM75A NXP - Sensor de Temperatura](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/res/LM75A_NXP-Temperature_Sensor_.pdf)
- [TSL2561 - Sensor de Luz](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/res/TSL2561-Light_Sensor_.pdf)

Y el MCU STM32F030F4:
- [STM32F030F4](https://files.seeedstudio.com/wiki/Xadow_Basic_Sensors/res/STM32F030F4.pdf)

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
