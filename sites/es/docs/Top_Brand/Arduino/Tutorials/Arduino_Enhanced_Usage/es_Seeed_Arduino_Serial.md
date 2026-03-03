---
description: Seeed Arduino Serial
title: Seeed Arduino Serial
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeed_Arduino_Serial
last_update:
  date: 1/16/2023
  author: hushuxu
---
Las comunicaciones serie proporcionan una forma fácil y flexible para que tu placa Arduino interactúe con tu computadora y otros dispositivos. La implementación de comunicaciones serie involucra hardware y software. El hardware proporciona la señalización eléctrica entre Arduino y el dispositivo con el que se está comunicando. El software utiliza el hardware para enviar bytes o bits que el hardware conectado entiende.

La mayoría de las placas Arduino tienen al menos un Serial, algunas tienen múltiples seriales (Arduino Mega tiene 4 Seriales).

Se comunica en los pines digitales 0 (RX) y 1 (TX) así como con la computadora vía USB. Así que si conectas un dispositivo UART en el pin 0 y el pin D1, tienes que removerlos antes de descargar el programa a través de USB. De lo contrario causará fallas en la carga.

A veces necesitas más puertos serie que el número de puertos serie de hardware disponibles. Si este es el caso, puedes usar un [Software Serial](https://www.arduino.cc/en/Reference/SoftwareSerial) que usa software para emular hardware serie. El serial por software requiere mucha ayuda del controlador Arduino para enviar y recibir datos, por lo que no es tan rápido o eficiente como el serial por hardware.

Algunas placas, como el Seeeduino Stalker V3.1 y Seeeduino Ethernet, no tienen soporte USB y requieren un [adaptador](https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html) para conectarse a tu computadora que convierte TTL a USB.

!!!Warning
    El TX/RX usa niveles lógicos TTL (5v/3.3v). No puedes conectarlo directamente al puerto serie RS232, que opera a +/-12v. Necesitas el [convertidor TTL a RS232](https://www.seeedstudio.com/Grove-RS232-P-2852.html) para cambiar los niveles de voltaje.

| PLACAS                                            | Micro Controlador | USB Serial              | Hardware Serial                                              |                                                                  |                                                         |                         |
|---------------------------------------------------|------------------|-------------------------|--------------------------------------------------------------|------------------------------------------------------------------|---------------------------------------------------------|-------------------------|
| Seeeduino V4.2, Seeeduino Lotus                   | Atmega328        | Serial                  | Serial: 0(RX), 1(TX)                                         |                                                                  |                                                         |                         |
| Seeeduino Mega                                    | Atmega2560       | Serial                  | Serial: 0(RX), 1(TX)                                         | Serial1: 19(RX), 18(TX)                                          | Serial2: 17(RX), 16(TX)                                 | Serial3: 15(RX), 14(TX) |
| Seeeduino Ethernet, Seeeduino GPRS                | Atmega328P       | Necesita adaptador USB a TTL | Serial: 0(RX), 1(TX)                                         |                                                                  |                                                         |                         |
| Seeeduino GPRS                                    | Atmega32U4       | Serial                  | Serial: 0(RX), 1(TX)                                         |                                                                  |                                                         |                         |
| Seeeduino Cloud                                   | Atmega32U4       | Serial                  | Serial: 0(RX), 1(TX), puerto UART Grove y módulo Dragino HE  |                                                                  |                                                         |                         |
| Seeeduino Lite                                    | Atmega32U4       | Serial                  | Serial1: 0(RX), 1(TX)                                        |                                                                  |                                                         |                         |
| Seeeduino LoraWAN                                 | ATSAMD21G18      | SerialUSB               | Serial: Conectar al módulo GPS                                | Serial1: Conectar a RHF76-052AM para comandos AT y 0(RX), 1(TX) | SerialDebug: Conectar a RHF76-052AM para actualización de firmware |                         |
| Seeeduino Lotus Cortex-M0+                        | ATSAMD21         | SerialUSB               | Serial: Conectar al puerto UART Grove J2                        | Serial1: Conectar a 0(RX), 1(TX)                                 |                                                         |                         |
| Wio Link                                          | ESP8266          | Serial                  | Serial: Conectar al puerto UART Grove                            |                                                                  |                                                         |                         |
| Wio Tracker - GPS, BT3.0, GSM, Compatible con Arduino | ATSAMD21G18A     | SerialUSB               | SerialDBG: Conectar al puerto UART Grove                        | serialMC20: Conectar a MC20                                      |                                                         |                         |
| Wio LTE Cat.1                                     | STM32F405RG      | SerialUSB               | serialDebug: Conectar a EC21                                 | Serial: Conectar al puerto UART Grove                               |                                                         |                         |
| Wio LTE Cat M1/NB-IoT Tracker                     | STM32F405RG      | SerialDebug             | SerialGrove: Conectar al puerto UART Grove                      | SerialGSM: Conectar al módulo LTE M1/NB-IOT                       | SerialGNSS: Conectar al módulo GPS                       |                         |

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
