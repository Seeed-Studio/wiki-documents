---
description: Seeed Arduino シリアル
title: Seeed Arduino シリアル
keywords:
- ソフトウェア
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeed_Arduino_Serial
last_update:
  date: 05/15/2025
  author: hushuxu
---


シリアル通信は、Arduinoボードがコンピュータや他のデバイスとやり取りするための簡単で柔軟な方法を提供します。シリアル通信を実装するには、ハードウェアとソフトウェアの両方が必要です。ハードウェアは、Arduinoと通信相手のデバイス間の電気信号を提供します。ソフトウェアは、接続されたハードウェアが理解できるバイトやビットを送信するためにハードウェアを使用します。

ほとんどのArduinoボードには少なくとも1つのシリアルがあり、一部のボードには複数のシリアルがあります（Arduino Megaには4つのシリアルがあります）。

シリアル通信はデジタルピン0（RX）と1（TX）で行われ、USBを介してコンピュータとも通信します。そのため、ピン0とピンD1にUARTデバイスを接続する場合、USB経由でプログラムをダウンロードする前にそれらを取り外す必要があります。そうしないと、アップロードが失敗する原因となります。

時には、利用可能なハードウェアシリアルポートの数以上のシリアルポートが必要になる場合があります。この場合、[ソフトウェアシリアル](https://www.arduino.cc/en/Reference/SoftwareSerial)を使用することができます。これはソフトウェアを使用してシリアルハードウェアをエミュレートします。ただし、ソフトウェアシリアルはデータの送受信にArduinoコントローラの多くの助けを必要とするため、ハードウェアシリアルほど高速でも効率的でもありません。

Seeeduino Stalker V3.1やSeeeduino Ethernetのような一部のボードにはUSBサポートがなく、TTLをUSBに変換する[アダプタ](https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html)を使用してコンピュータに接続する必要があります。

!!!警告
    TX/RXはTTLロジックレベル（5V/3.3V）を使用します。RS232シリアルポート（+/-12Vで動作）に直接接続することはできません。電圧レベルを変換するために[TTLからRS232コンバータ](https://www.seeedstudio.com/Grove-RS232-P-2852.html)が必要です。

| ボード名                                          | マイクロコントローラ | USBシリアル             | ハードウェアシリアル                                          |                                                                  |                                                         |                         |
|---------------------------------------------------|------------------|-------------------------|--------------------------------------------------------------|------------------------------------------------------------------|---------------------------------------------------------|-------------------------|
| Seeeduino V4.2, Seeeduino Lotus                   | Atmega328        | Serial                  | Serial: 0(RX), 1(TX)                                         |                                                                  |                                                         |                         |
| Seeeduino Mega                                    | Atmega2560       | Serial                  | Serial: 0(RX), 1(TX)                                         | Serial1: 19(RX), 18(TX)                                          | Serial2: 17(RX), 16(TX)                                 | Serial3: 15(RX), 14(TX) |
| Seeeduino Ethernet, Seeeduino GPRS                | Atmega328P       | USB to TTLアダプタが必要 | Serial: 0(RX), 1(TX)                                         |                                                                  |                                                         |                         |
| Seeeduino GPRS                                    | Atmega32U4       | Serial                  | Serial: 0(RX), 1(TX)                                         |                                                                  |                                                         |                         |
| Seeeduino Cloud                                   | Atmega32U4       | Serial                  | Serial: 0(RX), 1(TX), Grove UARTポートおよびDraginoモジュールHE |                                                                  |                                                         |                         |
| Seeeduino Lite                                    | Atmega32U4       | Serial                  | Serial1: 0(RX), 1(TX)                                        |                                                                  |                                                         |                         |
| Seeeduino LoraWAN                                 | ATSAMD21G18      | SerialUSB               | Serial: GPSモジュールに接続                                   | Serial1: RHF76-052AMにATコマンド用および0(RX), 1(TX)に接続       | SerialDebug: RHF76-052AMにファームウェア更新用に接続    |                         |
| Seeeduino Lotus Cortex-M0+                        | ATSAMD21         | SerialUSB               | Serial: J2 UART Groveポートに接続                            | Serial1: 0(RX), 1(TX)に接続                                     |                                                         |                         |
| Wio Link                                          | ESP8266          | Serial                  | Serial: UART Groveポートに接続                                |                                                                  |                                                         |                         |
| Wio Tracker - GPS, BT3.0, GSM, Arduino Compatible | ATSAMD21G18A     | SerialUSB               | SerialDBG: Grove UARTポートに接続                             | serialMC20: MC20に接続                                          |                                                         |                         |
| Wio LTE Cat.1                                     | STM32F405RG      | SerialUSB               | serialDebug: EC21に接続                                       | Serial: Grove UARTポートに接続                                   |                                                         |                         |
| Wio LTE Cat M1/NB-IoT Tracker                     | STM32F405RG      | SerialDebug             | SerialGrove: Grove UARTポートに接続                           | SerialGSM: LTE M1/NB-IOTモジュールに接続                        | SerialGNSS: GPSモジュールに接続                         |                         |

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>