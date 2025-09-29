---
description: Xadow - GPS V2
title: Xadow - GPS V2
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_GPS_V2
last_update:
  date: 1/13/2023
  author: shuxu hu
---

---
![](https://files.seeedstudio.com/wiki/Xadow_GPS_V2/images/Xadow_GPS_v2.JPG)

Basado en el módulo GPS L70 de Quectel®, el Xadow GPS v2 combina la tecnología AGPS avanzada EASYTM (Sistema de Asistencia Integrado) y la tecnología AlwaysLocateTM para lograr alto rendimiento, consumo de energía ultra bajo y posicionamiento rápido incluso en niveles de señal interior. Con un excelente receptor de alta sensibilidad (-163dBm de seguimiento) y una antena chip integrada, el módulo puede rastrear hasta 22 satélites en 66 canales, convirtiéndolo en una opción perfecta para proyectos de navegación. La placa también adopta el nuevo conector Xadow de 11 PINES para mejorar la flexibilidad de las conexiones de módulos.

[![](https://files.seeedstudio.com/wiki/Xadow_GPS_V2/images/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Xadow-GPS-v2-p-2557.html)

## Características
---

- EASY™, tecnología AGPS avanzada sin necesidad de memoria externa
- Consumo de energía ultra bajo en modo de seguimiento
- AlwaysLocate™, un controlador inteligente de modos alternativos
- Alta sensibilidad
- Soporte QZSS
- Soporte DGPS, SBAS(WAAS/EGNOS/MSAS/GAGAN)
- Anti-interferencia, Cancelador de Interferencia Activa Multi-tono
- Antena chip integrada con eficiencia de hasta 83%
- Conectores Xadow de 11 PINES integrados para conexión completamente flexible con otros Módulos Xadow
- Apilable, encadenable y cosible con otros Módulos Xadow

## Especificaciones
---

|||
|---|---|
|**Microcontrolador**|	Kinetis KL02|
|**Núcleo**|	ARM® 32-bit Cortex® -M0+CPU|
|**Fuente de Alimentación**	|3.3 - 6 V (a través de pines de conexión)|
|**Flash**|	32 KB|
|**SRAM**|	4 KB|
|**Velocidad de Reloj**|	48 MHz|
|**Consumo de Energía**	|18mA@Seguimiento, 21mA@Adquisición|
|**Ahorro de Energía**|	Típ. 3mA@AlwaysLocateTM, 7uA@Modo de Respaldo, 180uA@Modo de Espera|
|**Canal**|	22(Seguimiento) / 66 (Adquisición)|
|**Tasa de Actualización**|	1Hz(Por defecto), hasta 10Hz|
|**Precisión de Posición Horizontal**|	&lt;2.5m CEP|
|**Precisión de Velocidad**|	&lt;0.1m/s|
|**Velocidad Máxima**|	Máx.515m/s|
|**Inicio frío/cálido con EASYTM**|215s/5s|
|**Sensibilidad de Adquisición**|-145dBm|
|**Sensibilidad de Seguimiento**|	-163dBm|
|**Temperatura de Operación**|-40℃ a 85℃|
|**Protocolos	NMEA**|0183/PMTK|
|**Tipo de Antena**|	Antena chip|
|**Interfaz**|	Interfaz con Xadow GSM+BLE a través de / I2C (dirección de 7 bits 0x05)|

|**Dimensiones**|	25.37mm X 20.30mm / 1" × 0.8"

## Descripción General del Hardware
---
![](https://files.seeedstudio.com/wiki/Xadow_GPS_V2/images/Xadow_GPS_v2.png)

## Acerca del Sistema de Posicionamiento Global (GPS)
---
El Sistema de Posicionamiento Global (GPS) es un sistema de navegación basado en el espacio que proporciona información geográfica en tiempo real y en cualquier condición climática sobre posición, altitud, velocidad de viaje y tiempo en cualquier lugar sobre o cerca de la Tierra donde haya una línea de visión sin obstrucciones a cuatro o más satélites GPS. Anteriormente se usaba solo en proyectos militares, y ahora es libremente accesible para cualquier persona con un receptor GPS. Las aplicaciones típicas del GPS cubren navegación de automóviles, transferencia de tiempo, sincronización de señales de tráfico, dispositivos antirrobo y de rastreo, etc.

## Comunidad Rephone
---
[![](https://files.seeedstudio.com/wiki/Xadow_GPS_V2/images/300px-RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

Hemos estado buscando un mejor lugar donde nuestros patrocinadores (Usuarios de RePhone) puedan sentarse juntos, cálida y cómodamente, tener conversaciones sobre RePhone, discutir problemas técnicos, compartir ideas/proyectos, y dar retroalimentación sobre el desarrollo de los módulos en el futuro. Y entonces aquí vamos, la [Comunidad RePhone](https://community.seeedstudio.com/discover.html?t=RePhone).

¡Ahora únete a nosotros en la [Comunidad RePhone](https://community.seeedstudio.com/discover.html?t=RePhone)! Juntos buscamos respuestas, hacemos cosas interesantes, nos preocupamos unos por otros, y compartimos nuestras experiencias.

**Preguntas Frecuentes**

Algunas preguntas frecuentes en la [Comunidad RePhone](https://community.seeedstudio.com/discover.html?t=RePhone) son recopiladas y respondidas en el tema "Preguntas Frecuentes de RePhone (FAQ)", el tema se mantendrá actualizándose cada vez que surja una nueva FAQ.


## Visor de Esquemáticos en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_GPS_V2/resources/202000729_PCBA%3BXadow%20GPS%20v2.1_schemic%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}></div>


## Recursos
---
Mantendremos actualizando el código fuente en nuestra página de github:

- [Código Fuente para Xadow GPS v2](https://github.com/WayenWeng/Xadow_GPS_v2/)
- [Código de Prueba para Xadow GPS v2 basado en Eclipse IDE](https://github.com/WayenWeng/Xadow_GPS_v2_test/)

El diagrama esquemático de Xadow GPS v2 se proporciona en el siguiente enlace:

- [Archivos de Esquemáticos de Xadow GPS v2](https://files.seeedstudio.com/wiki/Xadow_GPS_V2/resources/202000729_PCBA%3BXadow%20GPS%20v2.1_schemic%20file.zip)

Cuando encuentres que los valores del GPS están un poco lejos de tu ubicación real, podrías necesitar grabar nuevo firmware al Xadow GPS V2:

- [Aprende cómo grabar nuevo firmware con una placa mbed](https://files.seeedstudio.com/wiki/Xadow_GPS_V2/resources/Burn_to_Xadow_modules.zip)

Consulta más información sobre el GPS L70 y la antena de chip:

- [Especificación para GPS L70 y la antena de chip](https://files.seeedstudio.com/wiki/Xadow_GPS_V2/resources/GPS_L70_%26_Chip_Antenna.rar)

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
