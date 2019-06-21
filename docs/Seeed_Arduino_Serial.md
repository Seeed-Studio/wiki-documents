Serial communications provide an easy and flexible way for your Arduino board to interact with your computer and other devices. Implementing serial communications involves hardware and software. The hardware provides the electrical signaling between Arduino and the device it is talking to. The software uses the hardware to send bytes or bits that the connected hardware understands. 

Most of arduino boards have at least one Serial, some have multiple serials(Arduino Mega has 4 Serials). 

It communicates on digital pins 0 (RX) and 1 (TX) as well as with the computer via USB. So if you connect UART device on pin 0 and pin D1, you have to remove them before downloading program through USB. Or else it will cause upload fails.

Sometimes you need more serial ports than the number of hardware serial ports available. If this is the case, you can use an [Software Serial](https://www.arduino.cc/en/Reference/SoftwareSerial) that uses software to emulate serial hardware. Software serial requires a lot of help from the Arduino controller to send and receive data, so it’s not as fast or efficient as hardware serial.

Some boards, such as the Seeeduino Stalker V3.1 and Seeeduino Ethernet, do not have USB support and require an [adapter](https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html) for connecting to your computer that converts TTL to USB. 

!!!Warning
    The TX/RX uses TTL logic levels(5v/3.3v). You can not connect it directly to RS232 serial port, which operates at +/-12v. You need the [TTL to RS232 converter](https://www.seeedstudio.com/Grove-RS232-P-2852.html) to change the voltage levels. 


| BOARDs                                            | Micro Controller | USB Serial              | Hardware Serial                                              |                                                                  |                                                         |                         |
|---------------------------------------------------|------------------|-------------------------|--------------------------------------------------------------|------------------------------------------------------------------|---------------------------------------------------------|-------------------------|
| Seeeduino V4.2, Seeeduino Lotus                   | Atmega328        | Serial                  | Serial: 0(RX), 1(TX)                                         |                                                                  |                                                         |                         |
| Seeeduino Mega                                    | Atmega2560       | Serial                  | Serial: 0(RX), 1(TX)                                         | Serial1: 19(RX), 18(TX)                                          | Serial2: 17(RX), 16(TX)                                 | Serial3: 15(RX), 14(TX) |
| Seeeduino Ethernet, Seeeduino GPRS                | Atmega328P       | Need USB to TTL adapter | Serial: 0(RX), 1(TX)                                         |                                                                  |                                                         |                         |
| Seeeduino GPRS                                    | Atmega32U4       | Serial                  | Serial: 0(RX), 1(TX)                                         |                                                                  |                                                         |                         |
| Seeeduino Cloud                                   | Atmega32U4       | Serial                  | Serial: 0(RX), 1(TX), Grove UART port and Dragino module HE  |                                                                  |                                                         |                         |
| Seeeduino Lite                                    | Atmega32U4       | Serial                  | Serial1: 0(RX), 1(TX)                                        |                                                                  |                                                         |                         |
| Seeeduino LoraWAN                                 | ATSAMD21G18      | SerialUSB               | Serial: Connect to GPS module                                | Serial1: Connect to RHF76-052AM for AT commands and 0(RX), 1(TX) | SerialDebug: Connect to RHF76-052AM for firmware update |                         |
| Seeeduino Lotus Cortex-M0+                        | ATSAMD21         | SerialUSB               | Serial: Connect to J2 UART Grove Port                        | Serial1: Connect to 0(RX), 1(TX)                                 |                                                         |                         |
| Wio Link                                          | ESP8266          | Serial                  | Serial:Connect to UART Grove Port                            |                                                                  |                                                         |                         |
| Wio Tracker - GPS, BT3.0, GSM, Arduino Compatible | ATSAMD21G18A     | SerialUSB               | SerialDBG: Connect to Grove UART Port                        | serialMC20: Connect to MC20                                      |                                                         |                         |
| Wio LTE Cat.1                                     | STM32F405RG      | SerialUSB               | serialDebug: Connect to EC21                                 | Serial: Connect to Grove UART Port                               |                                                         |                         |
| Wio LTE Cat M1/NB-IoT Tracker                     | STM32F405RG      | SerialDebug             | SerialGrove: Connect to Grove UART Port                      | SerialGSM: Connect to LTE M1/NB-IOT module                       | SerialGNSS: Connect to GPS module                       |                         |

## Tech Support
Please do not hesitate to contact [techsupport@seeed.cc](techsupport@seeed.cc) if you have any technical issue. Or submit the issue into our [forum](http://forum.seeedstudio.com/). 


<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>