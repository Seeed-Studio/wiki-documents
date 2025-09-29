---
description: Kit GPS Bee
title: Kit GPS Bee
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/GPS_Bee_kit
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/Gpsbee_05.jpg)

Para hacer que el módulo GPS sea fácilmente compatible con el shield existente, utilizamos el mismo empaquetado de pines que el módulo inalámbrico XBee. Así puedes colocar el módulo GPS en el shield existente que sea compatible con XBee. También puedes usar el [UartSBee V4](https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=109) para conectar el módulo GPS al puerto USB, ejecutar un software llamado u-center para analizar los datos GPS y restablecer los parámetros del módulo GPS. Coloca el GPS Bee en el [UartSBee V4](https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=109), y conecta el [UartSBee V4](https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=109) a la PC, abre el u-center.exe, elige el puerto UartSB, entonces puedes ver los datos que el módulo GPS envía de vuelta, y el software los analiza y te muestra la información específica, como: tiempo, velocidad, latitud y longitud, ASL y demás.

El kit viene con Antena Mini Embebida U.FL para GPS, también puedes comprar otra Antena con tamaño más grande [Antena Embebida U.FL para GPS](https://www.seeedstudio.com/depot/embedded-antenna-ufl-for-gps-p-564.html?cPath=84_89). Compatible con todos los shields, breakouts, placas con conectores estándar Xbee.

¡[Cable jumper hembra de 4 pines 2.54mm a 2.0mm](https://www.seeedstudio.com/depot/4-pin-254mm-to-20mm-female-jumper-wire-100mm-p-403.html) también está disponible para una adaptación fácil!

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/gps-bee-kit-with-mini-embedded-antenna-p-560.html?cPath=144_145)

## Características

---
- Motor u-blox 5 de 50 canales con más de 1 millón de correladores efectivos
- &lt;1 segundo de Tiempo para Primera Fijación para Inicios en Caliente y Asistidos
- Sensibilidad de adquisición y seguimiento SuperSense® de -160dBm
- Inicio acelerado en señales débiles para módulos con característica KickStart
- Soporta servicios A-GPS AssistNow Online y AssistNow Offline; compatible con OMA SUPL
- Alta inmunidad a interferencias
- Tasa de actualización de posición de 4 Hz
- Conector miniatura de paso 2.0mm, compatible con conectores Xbee
- Interfaces UART, USB, DDC y SPI
- Cumple con RoHS

## Ideas de Aplicación

---
- Cualquier sistema de posicionamiento

## Especificación

---

| Elemento | Símbolo | Mín | Típ | Máx | Unidad |
|----------|---------|-----|-----|-----|--------|
| Fuente de Alimentación | Vcc | 2.7 | 3.0 | 3.6 | V |
| Corriente Pico de Alimentación (Vcc=3.6V) | | | | 150 | mA |
| Corriente Sostenida de Alimentación (Vcc=3.0V) | | | | | |
| Adquisición | | | 102 | | mA |
| Seguimiento | | | 44 | | mA |
| Ganancia de Antena | | | 30 | | dB |
| Temperatura de operación | | -40 | | 85 | ℃ |

### Definición de pines y especificaciones

![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/GPS.jpg)

| Pin | Nombre | Función |
|-----|--------|---------|
| 1 | Vcc | Suministro de energía, 2.7-3.6VDC |
| 2 | TX | Puerto Serie 1 |
| 3 | RX | Puerto Serie 2 |
| 4 | NC | Reservado |
| 5 | EX | Reservado |
| 6 | NC | Reservado |
| 7 | NC | Reservado |
| 8 | NC | Reservado |
| 9 | NC | Reservado |
| 10 | GND | Tierra |
| 11 | NC | Reservado |
| 12 | NC | Reservado |
| 13 | NC | Reservado |
| 14 | NC | Reservado |
| 15 | TP | Salida de pulso configurable (por defecto 1Hz, máx 4Hz) |
| 16 | NC | Reservado |
| 17 | NC | Reservado |
| 18 | NC | Reservado |
| 19 | SCL | Pin de reloj I2C (solo configuración) |
| 20 | SDA | Pin de datos I2C (solo configuración) |

## Uso

---
1.Escudo GPS de propósito general Beneficiándose de la compatibilidad de pines y voltaje con XBee, GPS Bee podría reutilizar cualquier socket Xbee, desde escudo Xbee hasta explorador Xbee. Por ejemplo, puedes simplemente montar el módulo Xbee a proyectos Arduino mediante un escudo Xbee.

2.

| | |
|---|---|
| USB | ![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/GPSBee-exam.jpg) |

| | |
|---|---|
| **Módulo GPS Bluetooth** Funciona con UartSB como un módulo GPS de puerto USB. Puedes usar el potente Ucenter para obtener detalles prácticos fácilmente. O, añade un módulo Bluetooth para obtener un módulo GPS Bluetooth para tus proyectos. | ![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/GPSBee-exam-2.jpg) |

![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/GPSBee-exam-3.jpg)

Haz clic [aquí](http://garden.seeedstudio.com/images/2/20/GPSBee-exam-3.jpg) para ver la imagen legible y completa.

### Nota del módulo SIM28

1. GPS Bee ha cambiado el módulo a SIM28 que tiene la misma huella que la versión original.

2. Debes usar las herramientas ["SIMCom GPS DEMO"](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/SIMCom_GPS_DEMO_V1.07.zip) para recibir los datos del módulo SIM28.

3. Abre las herramientas SIMCom_GPS_DEMO, ve a Module-&gt;properties-&gt;module-&gt;selecciona SIM28.

![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/SIM28_module_select.jpg)

4. Abre las herramientas SIMCom_GPS_DEMO, ve a Module-&gt;connect. Selecciona el puerto serie que usa el módulo GPS.

![](https://files.seeedstudio.com/wiki/GPS_Bee_kit/img/SIM28_module_tools_pannel.jpg)

## Seguimiento de Versiones

| Revisión | Descripciones | Lanzamiento |
|----------|-------------|----------|
| GPS Bee kit (con Mini Antena Integrada) | - | Nov 08, 2009 |
| v0.91 | complemento | Mar 15, 2011 |
| v1.2 | antena | May 18,2012 |
| v1.2 | cambio del módulo GPS a SIM28 | Dec 5,2013 |
| v1.3 | cambio del módulo GPS a SIM28, cambio del LED al lado inferior. | Jan 10,2014 |

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/GPS_Bee_v1.3_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---
- [Hoja de Datos NEO-5 de U-blox](https://www.seeedstudio.com/depot/datasheet/NEO-5x_Data_Sheet(GPS.G5-MS5-07025).pdf)

- [Hoja de Datos NEO-6 de U-blox](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/NEO-6_DataSheet-GPS.G6-HW-09005-.pdf)

- [Manual de Integración de Hardware LEA-6 NEO-6](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/LEA-6_NEO-6_HardwareIntegrationManual.pdf)

- [U-center](https://www.seeedstudio.com/depot/datasheet/u-center_5.07_Installer.rar)

- [Esquemático GPSBee v1.2.pdf](http://garden.seeedstudio.com/images/5/58/GPSBee_v1.2.pdf)

- [Archivo Eagle GPSBee v1.2](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/GPSBee_v1.2_eagle.zip)

- [Archivo de Datos SIM28](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/SIM28_DATA_File.zip)

- [SIMCom_GPS_DEMO_V1.07](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/SIMCom_GPS_DEMO_V1.07.zip)

- [Archivo Eagle GPSBee V1.3](https://files.seeedstudio.com/wiki/GPS_Bee_kit/res/GPS_Bee_v1.3_eagle.zip)

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
