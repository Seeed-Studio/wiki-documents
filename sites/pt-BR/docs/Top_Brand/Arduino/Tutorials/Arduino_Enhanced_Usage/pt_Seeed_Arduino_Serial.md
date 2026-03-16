---
description: Seeed Arduino Serial
title: Seeed Arduino Serial
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeed_Arduino_Serial
last_update:
  date: 1/16/2023
  author: hushuxu
createdAt: '2023-02-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Serial/
---
Comunicações seriais fornecem uma maneira fácil e flexível para sua placa Arduino interagir com seu computador e outros dispositivos. Implementar comunicações seriais envolve hardware e software. O hardware fornece a sinalização elétrica entre o Arduino e o dispositivo com o qual ele está se comunicando. O software usa o hardware para enviar bytes ou bits que o hardware conectado entende.

A maioria das placas Arduino têm pelo menos uma Serial, algumas têm múltiplas Serials (o Arduino Mega tem 4 Serials).

Ela se comunica nos pinos digitais 0 (RX) e 1 (TX), bem como com o computador via USB. Portanto, se você conectar um dispositivo UART no pino 0 e no pino D1, deverá removê-los antes de fazer o download do programa via USB. Caso contrário, isso causará falha no envio do código.

Às vezes, você precisa de mais portas seriais do que o número de portas seriais de hardware disponíveis. Se este for o caso, você pode usar uma [Software Serial](https://www.arduino.cc/en/Reference/SoftwareSerial) que utiliza software para emular o hardware serial. A Software Serial exige muita ajuda do controlador Arduino para enviar e receber dados, portanto não é tão rápida ou eficiente quanto a serial de hardware.

Algumas placas, como a Seeeduino Stalker V3.1 e a Seeeduino Ethernet, não possuem suporte USB e exigem um [adaptador](https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html) para conexão ao seu computador que converte TTL para USB.

!!!Warning
    O TX/RX usa níveis lógicos TTL (5v/3,3v). Você não pode conectá-lo diretamente à porta serial RS232, que opera em +/-12v. Você precisa do [conversor TTL para RS232](https://www.seeedstudio.com/Grove-RS232-P-2852.html) para alterar os níveis de tensão.

| PLACAS                                            | Microcontrolador | USB Serial              | Serial de Hardware                                           |                                                                  |                                                         |                         |
|---------------------------------------------------|------------------|-------------------------|--------------------------------------------------------------|------------------------------------------------------------------|---------------------------------------------------------|-------------------------|
| Seeeduino V4.2, Seeeduino Lotus                   | Atmega328        | Serial                  | Serial: 0(RX), 1(TX)                                         |                                                                  |                                                         |                         |
| Seeeduino Mega                                    | Atmega2560       | Serial                  | Serial: 0(RX), 1(TX)                                         | Serial1: 19(RX), 18(TX)                                          | Serial2: 17(RX), 16(TX)                                 | Serial3: 15(RX), 14(TX) |
| Seeeduino Ethernet, Seeeduino GPRS                | Atmega328P       | Necessita adaptador USB para TTL | Serial: 0(RX), 1(TX)                                         |                                                                  |                                                         |                         |
| Seeeduino GPRS                                    | Atmega32U4       | Serial                  | Serial: 0(RX), 1(TX)                                         |                                                                  |                                                         |                         |
| Seeeduino Cloud                                   | Atmega32U4       | Serial                  | Serial: 0(RX), 1(TX), porta Grove UART e módulo Dragino HE   |                                                                  |                                                         |                         |
| Seeeduino Lite                                    | Atmega32U4       | Serial                  | Serial1: 0(RX), 1(TX)                                        |                                                                  |                                                         |                         |
| Seeeduino LoraWAN                                 | ATSAMD21G18      | SerialUSB               | Serial: Conectado ao módulo GPS                              | Serial1: Conectado ao RHF76-052AM para comandos AT e 0(RX), 1(TX) | SerialDebug: Conectado ao RHF76-052AM para atualização de firmware |                         |
| Seeeduino Lotus Cortex-M0+                        | ATSAMD21         | SerialUSB               | Serial: Conectado à porta J2 UART Grove                      | Serial1: Conectado a 0(RX), 1(TX)                                |                                                         |                         |
| Wio Link                                          | ESP8266          | Serial                  | Serial: Conectado à porta Grove UART                         |                                                                  |                                                         |                         |
| Wio Tracker - GPS, BT3.0, GSM, Arduino Compatible | ATSAMD21G18A     | SerialUSB               | SerialDBG: Conectado à porta Grove UART                      | serialMC20: Conectado ao MC20                                    |                                                         |                         |
| Wio LTE Cat.1                                     | STM32F405RG      | SerialUSB               | serialDebug: Conectado ao EC21                               | Serial: Conectado à porta Grove UART                             |                                                         |                         |
| Wio LTE Cat M1/NB-IoT Tracker                     | STM32F405RG      | SerialDebug             | SerialGrove: Conectado à porta Grove UART                    | SerialGSM: Conectado ao módulo LTE M1/NB-IOT                     | SerialGNSS: Conectado ao módulo GPS                    |                         |

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
