---
description: RFbee V1.1 - Nodo compatible con Arduino inalámbrico
title: RFbee V1.1 - Nodo compatible con Arduino inalámbrico
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/RFbee_V1.1-Wireless_Arduino_compatible_node
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/rfbee1.jpg)

El RFBee es un módulo RF que proporciona transmisión de datos inalámbrica fácil y flexible entre dispositivos. Está basado en un AVR ATmega168 que funciona como un **Arduino** completamente funcional conectado vía SPI a un transceptor RF TI CC1101.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/rfbee-v11-wireless-arduino-compatible-node-p-614.html)

Seguimiento de Versiones
------------------------

| Revisión | Descripción                   | Lanzamiento  |
|----------|-------------------------------|--------------|
| v1.0     | Lanzamiento inicial           | Mar 05, 2010 |
| v1.1     | Lanzamiento revisado          | Aug 27, 2010 |
| v1.2     | Cambio de MCU a ATmega328     | Oct 10, 2015 |

Características
-----------

- Alcance: Interior/Urbano: hasta 50m; Exterior línea de vista: hasta 120m;
- Sensibilidad del Receptor: -95dBm
- Velocidad de Transmisión de Datos RF: 4,800bps; 76,800bps
- Frecuencia de Trabajo: 868MHz y 915MHz
- Tipo de Comunicación: Punto a Punto, o Punto a Multipunto.
- Interfaz Serie Fácil de Usar y puertos extensibles ricos
- Comando AT Fácil de Usar: Configurar modo de trabajo, Velocidad de Baudios Serie, etc.
- Hardware y Firmware de código abierto
- Socket compatible con el Xbee, por lo que puedes conectarlo en cualquier socket Xbee como un reemplazo rápido.

<div class="admonition note">
<p class="admonition-title">Nota</p>
Solo los pines Rx, Tx, VCC, GND son idénticos al Xbee. Los RFbee no se comunicarán con los Xbee, por lo que los RFbee necesitan ser usados en ambos extremos de la conexión inalámbrica.
</div>

Ideas de Aplicación
-------------------

- Control RF potente
- Fácil implementación de WSN (Red de Sensores Inalámbricos)

Especificaciones
---------------

| Especificación           | Valor                                                      |
|--------------------------|------------------------------------------------------------|
| Microprocesador          | ATmega168(Versión &lt; V1.2), ATmega328(Versión &gt;= 1.2) |
| Tamaño PCB               | 24.38mmx32.94mmx0.8mm                                      |
| Indicadores              | No                                                         |
| Fuente de alimentación   | 3.3V                                                       |
| Cantidad de IO           | 9                                                          |
| Entrada ADC              | 7(6 multiplexando con IO)                                  |
| Interfaz de programación | USB                                                        |
| Conectividad             | Socket compatible con XBee                                 |
| Protocolo de Comunicación| Uart(TTL)                                                  |
| Banda de Frecuencia de Operación | ISM 868MHz y 915MHz                                |
| Dimensión del Contorno   | 24.38mmx32.94mmx15mm                                       |

### Características Eléctricas

| Especificación        | Mín | Típ  | Máx | Unidad |
|-----------------------|-----|------|-----|--------|
| Voltaje de entrada    | 3.0 | 3.3  | 3.6 | VDC    |
| Corriente de transmisión |   | 34.5 |     | mA     |
| Corriente de recepción   |   | 18.1 |     | mA     |
| Corriente en reposo      |   | 5.2  |     | mA     |
| Corriente en apagado     |   | &lt;0.3 |     | mA     |
| Temperatura de operación | -50 |      | 125 | °C     |

Descripción del Hardware
------------------------

![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-pin.jpg)

| Pin     |  #  | Tipo de Pad  | Descripción                        | Número de Pin Arduino   |
|---------|-----|--------------|------------------------------------|-----------------------|
| 3V3     | 1   | Entrada de alimentación | VCC, +3.3V                         | -                       |
| TX      | 2   | Salida       | Puerto Uart Tx                     | 1(DIO)                  |
| RX      | 3   | Entrada      | Puerto Uart Rx                     | 0(DIO)                  |
| PD4     | 4   | Entrada/Salida | ATmega168 PD4                      | 4(DIO)                  |
|  !RESET | 5   | Entrada      | Puerto Reset ATmega168             |                         |
| PB1     | 6   | Entrada/Salida | ATmega168 PB1                      | 9(DIO)                  |
| PB0     | 7   | Entrada/Salida | ATmega168 PB0                      | 8(DIO)                  |
| PD7     | 8   | Entrada/Salida | ATmega168 PD7                      | 7(DIO)                  |
|  DTR    | 9   | Entrada      | Usado para programar el ATmega168  | -                       |
| GND     | 10  | GND          | GND                                | -                       |
| PC3     | 11  | Entrada/Salida | ATmega168 PC3                      | 3(Entrada analógica)/17(DIO) |
| PC2     | 12  | Entrada/Salida | ATmega168 PC2                      | 2(Entrada analógica)/16(DIO) |
| PC1     | 13  | Entrada/Salida | ATmega168 PC1                      | 1(Entrada analógica)/15(DIO) |
| VREF    | 14  | Entrada      | Puerto AREF ATmega168              | -                       |
| PC0     | 15  | Entrada/Salida | ATmega168 PC0                      | 0(Entrada analógica)/14(DIO) |
| ADC7    | 16  | Entrada      | ATmega168 ADC7                     | 7(Entrada analógica)         |
| PD5     | 17  | Entrada/Salida | ATmega168 PD5                      | 5(DIO)                  |
| PD6     | 18  | Entrada/Salida | ATmega168 PD6                      | 6(DIO)                  |
| PC5     | 19  | Entrada/Salida | ATmega168 PC5                      | 5(Entrada analógica)/19(DIO) |
| PC4     | 20  | Entrada/Salida | ATmega168 PC4                      | 4(Entrada analógica)/18(DIO) |

Uso
---

### Instalación de Hardware

El RFBee se puede conectar de varias maneras, por ejemplo:

- a una PC vía USB usando un dispositivo UartSB.
- a un Seeeduino (o Arduino) vía un XbeeShield.
- a cualquier otro dispositivo que tenga un puerto Uart.

<div class="admonition note">
<p class="admonition-title">Nota</p>
El dispositivo UartSBee y el XbeeShield se venden por separado.
</div>

#### Figura 1: USB usando UartSBee (La siguiente imagen está demostrada con una versión anterior de UartSBee)

![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-figure1.jpg)

#### Figura 2: Seeduino vía XbeeShield (Versión 1)

![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-figure2.jpg)

#### Cualquier dispositivo usando un Uart

![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-figure3.jpg)

### Ejemplo

Aquí hay un tutorial sobre cómo usar un transceptor RFBee de [SeeedStudio](https://www.seeedstudio.com) con un Analizador de Espectro RF Explorer de [rf-explorer.com](https://www.rf-explorer.com).

#### RFBee monitoreado por RF Explorer

El RFBee es un dispositivo agradable que acepta algunas cadenas de comandos AT ASCII simples para hacer configuración básica. Una herramienta ideal para experimentar con transmisión RF digital.

Este código de ejemplo está en el dominio público y disponible [aquí](http://micro.arocholl.com/download/RFBeeTutorial/Test_RFBee.pde) y probado en Arduino IDE v0022.

|                                                                              |                                                                              |                                                                              |
|------------------------------------------------------------------------------|------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-Exam1.jpg) | ![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-Exam2.jpg) | ![](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/img/RFBee-Exam3.jpg) |

##### Requisitos

Puedes usar un Seeeduino Stalker v02b para alojar el RFBee. Simplemente conecta el RFBee en la ranura XBee. También necesitas una forma de conectar tu Stalker a tu PC para subir el sketch, personalmente usé un puente USB CP2102, puedes usar otros puentes USB incluyendo el UartSBee recomendado por Seeed.

Alternativamente, puedes hacer lo mismo con una placa compatible con Arduino pero tendrás que conectar el RFBee con RX/TX de la CPU usando un conector XBee de 2mm, que puede no ser fácil de conseguir en tu tienda local.

Finalmente, necesitarás dos cables jumper para conectar el puerto 2 del Stalker a GND y el puerto 3 a GND. Los usaremos como interruptores simples para configurar el RFBee de diferentes maneras. Siéntete libre de revisar el código trivial del sketch para entender mejor cómo funciona, y hacer tus propios cambios.

Se requiere cierta familiaridad con RFExplorer y el manual de usuario de RFBee, de lo contrario algunos pasos pueden no ser obvios para ti.

##### Configurar RFBee para trabajar

Después de subir el script en el Stalker, apaga la unidad completamente para que ambos ATMegas (del Stalker y del RFBee) se reinicien al mismo tiempo y comiences desde un estado limpio.

Enciende la unidad de nuevo, comenzará la transmisión después de que el led del Stalker parpadee 6 veces.

RFExplorer mostrará la potencia recibida y la frecuencia. Juega con la orientación de la antena hasta que obtengas la mejor respuesta de potencia. En este tutorial usaremos RFBee en 915Mhz, pero se obtendrán resultados equivalentes en 868Mhz. Echa un vistazo al código del sketch y descomenta las líneas codificadas para 868Mhz si tu RF Explorer está en esa banda.

**Más detalles, por favor visita** [micro.arocholl.com](http://micro.arocholl.com/index.php?option=com_content&view=article&id=53:tutorial-how-to-use-rf-explorer-to-monitor-a-rfbee&catid=40:article&Itemid=61).

Soporte
-------

### Cómo actualizar el firmware

Puedes actualizar el firmware del RFbee usando el IDE de Arduino usando el procedimiento a continuación. Este procedimiento asume el uso de UartSB ya que esta es la forma más fácil de conectar un RFBee a una PC, consulta la sección sobre instalación de Hardware para diferentes formas de conectar.

1. Conecta tu RFBee al UartSB, mueve los interruptores a XBee y 3.3v, luego conéctalo a tu computadora a través de un cable USB.
2. Descarga el código fuente del firmware del RFBee en tu carpeta de sketches de Arduino
3. Abre el IDE de Arduino y abre el proyecto RFBee_vx_x. Luego selecciona Tools->Board->Arduino Pro or Pro Mini (3.3v, 8MHz) w/ATmega168 (ATmega328 cuando la versión >= V1.2). Elige el puerto serie correcto desde el menú Tools. Ahora puedes subir tu firmware del RFBee.
4. Vuelve a aplicar los cambios de configuración en el RFBee si se perdieron durante la actualización.
5. Podrías añadir o modificar el firmware según tus demandas, ya que el RFBee es capaz de trabajar de forma independiente como un Arduino.

**Firmware del RFBee:** [Descargar desde Google Code](http://code.google.com/p/rfbee/downloads/list)

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://www.seeedstudio.com/depot/datasheet/RFBee%20hardware%20v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Manual de Usuario del RFBee](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/res/rfbee-manual.pdf)
- [Firmware del RFbee para Arduino 1.0](https://files.seeedstudio.com/wiki/RFbee_V1.1-Wireless_Arduino_compatible_node/res/RFbee_for_arduino1.0.zip)
- [Firmware del RFbee 1.1 (más reciente)](https://github.com/Seeed-Studio/RFBee)
- [Esquemático y layout en archivo EAGLE](https://www.seeedstudio.com/depot/datasheet/RFBee%20hardware%20v1.1.zip)
- [Foro](https://forum.seeedstudio.com/viewtopic.php?f=10&t=682&sid=7a9b1bed4f9fd10a9b1003ca1e48e756)

<!-- Este archivo Markdown fue creado desde https://wiki.seeedstudio.com/es/RFbee_V1.1-Wireless_Arduino_compatible_node/ -->

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
