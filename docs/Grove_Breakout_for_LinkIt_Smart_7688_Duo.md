---
name: Grove Beginner Kit for Arduino
category: Others
bzurl:  
oldwikiname:  
prodimagename:
surveyurl: 
sku: 110020171
---


## GROVE SYSTEM

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/pack.jpg)

Grove is a modular prototyping system consist of a base unit and various modules with standardized connector. the base unit is generally a microprocessor which allows for communicates, processes and controls the input or output from the Grove modules. Every single Grove module typically addresses a single function, range from a simple button to a more complex heart rate sensor. the standardised Grove connector allows user to assemble Grove units with building block approach, compared to the jumper or solder based system it is much easier to assemble or disassemble, which simplifies the learning system for  experimenting, building and prototyping.
We also provide Grove to Pin Header Converter or Grove Base HAT available for variety developing platforms for those who wants to use grove sensor and actuator modules without Grove System Development Board.

![Grove header](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/grove-wire.jpg)![Grove connector](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connector.png)![Grove-jumper wire](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/jumperwire.png)

Grove system users need to have at least some basic electronic knowledge background, otherwise you need go through this basic tutorial to learn some basic operations on the Grove system, the first part of this tutorial consists list of basic information on the components included in the starter kit, followed by the basic setup of the Arduino IDE for Seeeduino Lotus. Then, the 11 tutorial sessions provide the basic operation on each individual components in the starter kit and the applications by combine multiple modules together, which gives learner some insight and basic knowledge on hooking up and coding with the Grove system.

## Grove Beginner Kit for Arduino


Grove Beginner Kit for Arduino contains one Seeeduino Lotus V1.1 Dev Board(Arduino Compatible) and 8 modules. The detailed information are listed below.

### Development Board

#### Seeeduino Lotus V1.1

Seeeduino Lotus is a development board with ATMEGA328 AVR microcontroller, it is the combination of Seeeduino and Grove Base Shield. It uses an Atmel ATmege328-MU microcontroller and CP2102N chip, ATmege328-MU is a high performance, low power AVR 8-bit Microcontroller, CP2102N is a USB to Serial converter chip which allows you to communicate the Seeeduino Lotus with computer by using a micro-USB cable. Seeeduino Lotus has 14 Digital input/output(6 can be used as PWM outputs) and 7 Analog input/output, a micro USB connection, an ICSP header, 12 Grove connector, a reset button.


**Features**

- Fully compatible with Arduino UNO
- ATmega328 microcontroller
- 2 on-board Grove connectors
- 14 Digital I/O Pins (6 PWM outputs)
- 6 Analog Inputs
- ISP Header
- Arduino UNO-R3 Shield Compatible
- Micro USB programming and power supply
- 5V Operating Voltage
- Supports Windows, Mac OS and Linux

**Hardware**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/pinout.png)

LED-D13: An LED is connected to D13 pin of the board. This can be used as an on-board LED indicator for programs/sketches.

USB Input: USB Port is used to connect the board to your PC for programming and for powering up. Micro USB is the a very common type of USB port, could be found with most Android phones, and other devices. You probably have dozens of these cables laying around your house.

Reset: This button is conveniently placed on the side to allow you to reset the Seeeduino board even when a shield is placed on top. whereas the button on the other Arduino board is placed on top which makes it hard to reach with shield attached.

Power Pins, Analog Pins & Digital Pins: These extra headers are available when you want to connect other none grove connector sensors and actuators, and especially the power headers are used when you want to power more sensors/devices.

Grove Connectors: Seeed Studio has a variety of sensors/devices that can make use of this Analog, Digital,I2C and UART connection. In addition, we sell independent Grove connectors to help you make our own sensor connections.

ICSP: This is the ICSP connection for the ATmega328P, it is located in the standard ICSP/SPI position for Arduino Uno, Due, Mega, and Leonardo compatible hardware. The SPI pins in this port: MISO, SCK, and MOSI, are also connected to digital pins 12, 13, and 11 respectively just like those of the Arduino Uno.

USB 2 Uart: Pinout of USB-2-Uart. These pads can be used to interact with other UART devices by putting the on-board ATmega328 in reset mode. This makes Seeeduino Lotus to be used as a USB2UART utility board.

**Arduino UNO vs Seeeduino Lotus**

|                        | Seeeduino Lotus V1.1 | Arduino Uno R3 |
|:----------------------:|:--------------------:|:--------------:|
|      Release Date      |        2018/03       |     2016/02    |
|     Microcontroller    |      ATMega328P      |   ATMega328P   |
|    Operating Voltage   |          5V          |       5V       |
|          Flash         |         32KB         |      32KB      |
|          SRAM          |          2KB         |       2KB      |
|         EEPROM         |          1KB         |       1KB      |
| Power supply interface |       Micro USB      |  USB, DC Port  |
|    Grove Connectors    |          12          |      None      |

#### Sensors 

**[Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)**


![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer.jpg)

This module uses piezo buzzer as the main component, it can produce high pitch tone while it is connected to digital output and logic level set to High, otherwise it can produce various tones according to the frequencies generated from the Analog PWM output that connected to it. (note: the frequency range that normal human ear can distinguish is between 20 Hz and 20kHz.)

**[Grove - Tilt Switch](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/Tilt.jpg)

Grove-Tilt Switch is the equivalent of a button, and is used as a digital input. Inside the tilt switch is a pair of balls that make contact with the pins when the case is upright. Tilt the case over and the balls don't touch, thus not making a connection. It is wired to the SIG line, NC is not used on this Grove module.

**[Grove - Chainable RGB LED](https://www.seeedstudio.com/Grove-Chainable-RGB-Led-V2-0-p-2903.html)**


![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/Grove-Chainable_RGB_LED_V2.0.jpg)

Grove - Chainable RGB LED is based on P9813 chip which is a full-color LED driver. It provides 3 constant-current drivers as well as modulated output of 256 shades of gray. It communicates with a MCU using 2-wire transmission (Data and Clock). This 2-wire transmission can be used to cascade additional Grove - Chainable RGB LED modules. The built-in clock regeneration enhances the transmission distance. This Grove module is suitable for any colorful LED based projects. 

**[Grove - Light Sensor](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-p-2727.html)**


![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/lightsensor.jpg)

The Grove - Light sensor integrates a photo-resistor(light dependent resistor) to detect the intensity of light. The resistance of photo-resistor decreases when the intensity of light increases. A dual OpAmp chip LM358 on board produces voltage corresponding to intensity of light(i.e. based on resistance value). The output signal is analog value, the brighter the light is, the larger the value.

**[Grove - Line Finder](https://www.seeedstudio.com/Grove-Line-Finder-v1-1-p-2712.html)**


---
name: Grove Beginner Kit for Arduino
category: Others
bzurl:  
oldwikiname:  
prodimagename:
surveyurl: 
sku: 110020171
---


## GROVE SYSTEM

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/pack.jpg)

Grove is a modular prototyping system consist of a base unit and various modules with standardized connector. the base unit is generally a microprocessor which allows for communicates, processes and controls the input or output from the Grove modules. Every single Grove module typically addresses a single function, range from a simple button to a more complex heart rate sensor. the standardised Grove connector allows user to assemble Grove units with building block approach, compared to the jumper or solder based system it is much easier to assemble or disassemble, which simplifies the learning system for  experimenting, building and prototyping.
We also provide Grove to Pin Header Converter or Grove Base HAT available for variety developing platforms for those who wants to use grove sensor and actuator modules without Grove System Development Board.

![Grove header](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/grove-wire.jpg)![Grove connector](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connector.png)![Grove-jumper wire](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/jumperwire.png)

Grove system users need to have at least some basic electronic knowledge background, otherwise you need go through this basic tutorial to learn some basic operations on the Grove system, the first part of this tutorial consists list of basic information on the components included in the starter kit, followed by the basic setup of the Arduino IDE for Seeeduino Lotus. Then, the 11 tutorial sessions provide the basic operation on each individual components in the starter kit and the applications by combine multiple modules together, which gives learner some insight and basic knowledge on hooking up and coding with the Grove system.

## Grove Beginner Kit for Arduino


Grove Beginner Kit for Arduino contains one Seeeduino Lotus V1.1 Dev Board(Arduino Compatible) and 8 modules. The detailed information are listed below.

### Development Board

#### Seeeduino Lotus V1.1

Seeeduino Lotus is a development board with ATMEGA328 AVR microcontroller, it is the combination of Seeeduino and Grove Base Shield. It uses an Atmel ATmege328-MU microcontroller and CP2102N chip, ATmege328-MU is a high performance, low power AVR 8-bit Microcontroller, CP2102N is a USB to Serial converter chip which allows you to communicate the Seeeduino Lotus with computer by using a micro-USB cable. Seeeduino Lotus has 14 Digital input/output(6 can be used as PWM outputs) and 7 Analog input/output, a micro USB connection, an ICSP header, 12 Grove connector, a reset button.


**Features**

- Fully compatible with Arduino UNO
- ATmega328 microcontroller
- 2 on-board Grove connectors
- 14 Digital I/O Pins (6 PWM outputs)
- 6 Analog Inputs
- ISP Header
- Arduino UNO-R3 Shield Compatible
- Micro USB programming and power supply
- 5V Operating Voltage
- Supports Windows, Mac OS and Linux

**Hardware**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/pinout.png)

LED-D13: An LED is connected to D13 pin of the board. This can be used as an on-board LED indicator for programs/sketches.

USB Input: USB Port is used to connect the board to your PC for programming and for powering up. Micro USB is the a very common type of USB port, could be found with most Android phones, and other devices. You probably have dozens of these cables laying around your house.

Reset: This button is conveniently placed on the side to allow you to reset the Seeeduino board even when a shield is placed on top. whereas the button on the other Arduino board is placed on top which makes it hard to reach with shield attached.

Power Pins, Analog Pins & Digital Pins: These extra headers are available when you want to connect other none grove connector sensors and actuators, and especially the power headers are used when you want to power more sensors/devices.

Grove Connectors: Seeed Studio has a variety of sensors/devices that can make use of this Analog, Digital,I2C and UART connection. In addition, we sell independent Grove connectors to help you make our own sensor connections.

ICSP: This is the ICSP connection for the ATmega328P, it is located in the standard ICSP/SPI position for Arduino Uno, Due, Mega, and Leonardo compatible hardware. The SPI pins in this port: MISO, SCK, and MOSI, are also connected to digital pins 12, 13, and 11 respectively just like those of the Arduino Uno.

USB 2 Uart: Pinout of USB-2-Uart. These pads can be used to interact with other UART devices by putting the on-board ATmega328 in reset mode. This makes Seeeduino Lotus to be used as a USB2UART utility board.

**Arduino UNO vs Seeeduino Lotus**

|                        | Seeeduino Lotus V1.1 | Arduino Uno R3 |
|:----------------------:|:--------------------:|:--------------:|
|      Release Date      |        2018/03       |     2016/02    |
|     Microcontroller    |      ATMega328P      |   ATMega328P   |
|    Operating Voltage   |          5V          |       5V       |
|          Flash         |         32KB         |      32KB      |
|          SRAM          |          2KB         |       2KB      |
|         EEPROM         |          1KB         |       1KB      |
| Power supply interface |       Micro USB      |  USB, DC Port  |
|    Grove Connectors    |          12          |      None      |

#### Sensors 

**[Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)**


![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer.jpg)

This module uses piezo buzzer as the main component, it can produce high pitch tone while it is connected to digital output and logic level set to High, otherwise it can produce various tones according to the frequencies generated from the Analog PWM output that connected to it. (note: the frequency range that normal human ear can distinguish is between 20 Hz and 20kHz.)

**[Grove - Tilt Switch](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/Tilt.jpg)

Grove-Tilt Switch is the equivalent of a button, and is used as a digital input. Inside the tilt switch is a pair of balls that make contact with the pins when the case is upright. Tilt the case over and the balls don't touch, thus not making a connection. It is wired to the SIG line, NC is not used on this Grove module.

**[Grove - Chainable RGB LED](https://www.seeedstudio.com/Grove-Chainable-RGB-Led-V2-0-p-2903.html)**


![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/Grove-Chainable_RGB_LED_V2.0.jpg)

Grove - Chainable RGB LED is based on P9813 chip which is a full-color LED driver. It provides 3 constant-current drivers as well as modulated output of 256 shades of gray. It communicates with a MCU using 2-wire transmission (Data and Clock). This 2-wire transmission can be used to cascade additional Grove - Chainable RGB LED modules. The built-in clock regeneration enhances the transmission distance. This Grove module is suitable for any colorful LED based projects. 

**[Grove - Light Sensor](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-p-2727.html)**


![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/lightsensor.jpg)

The Grove - Light sensor integrates a photo-resistor(light dependent resistor) to detect the intensity of light. The resistance of photo-resistor decreases when the intensity of light increases. A dual OpAmp chip LM358 on board produces voltage corresponding to intensity of light(i.e. based on resistance value). The output signal is analog value, the brighter the light is, the larger the value.

**[Grove - Line Finder](https://www.seeedstudio.com/Grove-Line-Finder-v1-1-p-2712.html)**


---
name: Grove Beginner Kit for Arduino
category: Others
bzurl:  
oldwikiname:  
prodimagename:
surveyurl: 
sku: 110020171
---


## GROVE SYSTEM

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/pack.jpg)

Grove is a modular prototyping system consist of a base unit and various modules with standardized connector. the base unit is generally a microprocessor which allows for communicates, processes and controls the input or output from the Grove modules. Every single Grove module typically addresses a single function, range from a simple button to a more complex heart rate sensor. the standardised Grove connector allows user to assemble Grove units with building block approach, compared to the jumper or solder based system it is much easier to assemble or disassemble, which simplifies the learning system for  experimenting, building and prototyping.
We also provide Grove to Pin Header Converter or Grove Base HAT available for variety developing platforms for those who wants to use grove sensor and actuator modules without Grove System Development Board.

![Grove header](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/grove-wire.jpg)![Grove connector](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connector.png)![Grove-jumper wire](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/jumperwire.png)

Grove system users need to have at least some basic electronic knowledge background, otherwise you need go through this basic tutorial to learn some basic operations on the Grove system, the first part of this tutorial consists list of basic information on the components included in the starter kit, followed by the basic setup of the Arduino IDE for Seeeduino Lotus. Then, the 11 tutorial sessions provide the basic operation on each individual components in the starter kit and the applications by combine multiple modules together, which gives learner some insight and basic knowledge on hooking up and coding with the Grove system.

## Grove Beginner Kit for Arduino


Grove Beginner Kit for Arduino contains one Seeeduino Lotus V1.1 Dev Board(Arduino Compatible) and 8 modules. The detailed information are listed below.

### Development Board

#### Seeeduino Lotus V1.1

Seeeduino Lotus is a development board with ATMEGA328 AVR microcontroller, it is the combination of Seeeduino and Grove Base Shield. It uses an Atmel ATmege328-MU microcontroller and CP2102N chip, ATmege328-MU is a high performance, low power AVR 8-bit Microcontroller, CP2102N is a USB to Serial converter chip which allows you to communicate the Seeeduino Lotus with computer by using a micro-USB cable. Seeeduino Lotus has 14 Digital input/output(6 can be used as PWM outputs) and 7 Analog input/output, a micro USB connection, an ICSP header, 12 Grove connector, a reset button.


**Features**

- Fully compatible with Arduino UNO
- ATmega328 microcontroller
- 2 on-board Grove connectors
- 14 Digital I/O Pins (6 PWM outputs)
- 6 Analog Inputs
- ISP Header
- Arduino UNO-R3 Shield Compatible
- Micro USB programming and power supply
- 5V Operating Voltage
- Supports Windows, Mac OS and Linux

**Hardware**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/pinout.png)

LED-D13: An LED is connected to D13 pin of the board. This can be used as an on-board LED indicator for programs/sketches.

USB Input: USB Port is used to connect the board to your PC for programming and for powering up. Micro USB is the a very common type of USB port, could be found with most Android phones, and other devices. You probably have dozens of these cables laying around your house.

Reset: This button is conveniently placed on the side to allow you to reset the Seeeduino board even when a shield is placed on top. whereas the button on the other Arduino board is placed on top which makes it hard to reach with shield attached.

Power Pins, Analog Pins & Digital Pins: These extra headers are available when you want to connect other none grove connector sensors and actuators, and especially the power headers are used when you want to power more sensors/devices.

Grove Connectors: Seeed Studio has a variety of sensors/devices that can make use of this Analog, Digital,I2C and UART connection. In addition, we sell independent Grove connectors to help you make our own sensor connections.

ICSP: This is the ICSP connection for the ATmega328P, it is located in the standard ICSP/SPI position for Arduino Uno, Due, Mega, and Leonardo compatible hardware. The SPI pins in this port: MISO, SCK, and MOSI, are also connected to digital pins 12, 13, and 11 respectively just like those of the Arduino Uno.

USB 2 Uart: Pinout of USB-2-Uart. These pads can be used to interact with other UART devices by putting the on-board ATmega328 in reset mode. This makes Seeeduino Lotus to be used as a USB2UART utility board.

**Arduino UNO vs Seeeduino Lotus**

|                        | Seeeduino Lotus V1.1 | Arduino Uno R3 |
|:----------------------:|:--------------------:|:--------------:|
|      Release Date      |        2018/03       |     2016/02    |
|     Microcontroller    |      ATMega328P      |   ATMega328P   |
|    Operating Voltage   |          5V          |       5V       |
|          Flash         |         32KB         |      32KB      |
|          SRAM          |          2KB         |       2KB      |
|         EEPROM         |          1KB         |       1KB      |
| Power supply interface |       Micro USB      |  USB, DC Port  |
|    Grove Connectors    |          12          |      None      |

#### Sensors 

**[Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)**


![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer.jpg)

This module uses piezo buzzer as the main component, it can produce high pitch tone while it is connected to digital output and logic level set to High, otherwise it can produce various tones according to the frequencies generated from the Analog PWM output that connected to it. (note: the frequency range that normal human ear can distinguish is between 20 Hz and 20kHz.)

**[Grove - Tilt Switch](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/Tilt.jpg)

Grove-Tilt Switch is the equivalent of a button, and is used as a digital input. Inside the tilt switch is a pair of balls that make contact with the pins when the case is upright. Tilt the case over and the balls don't touch, thus not making a connection. It is wired to the SIG line, NC is not used on this Grove module.

**[Grove - Chainable RGB LED](https://www.seeedstudio.com/Grove-Chainable-RGB-Led-V2-0-p-2903.html)**


![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/Grove-Chainable_RGB_LED_V2.0.jpg)

Grove - Chainable RGB LED is based on P9813 chip which is a full-color LED driver. It provides 3 constant-current drivers as well as modulated output of 256 shades of gray. It communicates with a MCU using 2-wire transmission (Data and Clock). This 2-wire transmission can be used to cascade additional Grove - Chainable RGB LED modules. The built-in clock regeneration enhances the transmission distance. This Grove module is suitable for any colorful LED based projects. 

**[Grove - Light Sensor](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-p-2727.html)**


![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/lightsensor.jpg)

The Grove - Light sensor integrates a photo-resistor(light dependent resistor) to detect the intensity of light. The resistance of photo-resistor decreases when the intensity of light increases. A dual OpAmp chip LM358 on board produces voltage corresponding to intensity of light(i.e. based on resistance value). The output signal is analog value, the brighter the light is, the larger the value.

**[Grove - Line Finder](https://www.seeedstudio.com/Grove-Line-Finder-v1-1-p-2712.html)**


---
name: Grove Beginner Kit for Arduino
category: Others
bzurl:  
oldwikiname:  
prodimagename:
surveyurl: 
sku: 110020171
---


## GROVE SYSTEM

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/pack.jpg)

Grove is a modular prototyping system consist of a base unit and various modules with standardized connector. the base unit is generally a microprocessor which allows for communicates, processes and controls the input or output from the Grove modules. Every single Grove module typically addresses a single function, range from a simple button to a more complex heart rate sensor. the standardised Grove connector allows user to assemble Grove units with building block approach, compared to the jumper or solder based system it is much easier to assemble or disassemble, which simplifies the learning system for  experimenting, building and prototyping.
We also provide Grove to Pin Header Converter or Grove Base HAT available for variety developing platforms for those who wants to use grove sensor and actuator modules without Grove System Development Board.

![Grove header](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/grove-wire.jpg)![Grove connector](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connector.png)![Grove-jumper wire](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/jumperwire.png)

Grove system users need to have at least some basic electronic knowledge background, otherwise you need go through this basic tutorial to learn some basic operations on the Grove system, the first part of this tutorial consists list of basic information on the components included in the starter kit, followed by the basic setup of the Arduino IDE for Seeeduino Lotus. Then, the 11 tutorial sessions provide the basic operation on each individual components in the starter kit and the applications by combine multiple modules together, which gives learner some insight and basic knowledge on hooking up and coding with the Grove system.

## Grove Beginner Kit for Arduino


Grove Beginner Kit for Arduino contains one Seeeduino Lotus V1.1 Dev Board(Arduino Compatible) and 8 modules. The detailed information are listed below.

### Development Board

#### Seeeduino Lotus V1.1

Seeeduino Lotus is a development board with ATMEGA328 AVR microcontroller, it is the combination of Seeeduino and Grove Base Shield. It uses an Atmel ATmege328-MU microcontroller and CP2102N chip, ATmege328-MU is a high performance, low power AVR 8-bit Microcontroller, CP2102N is a USB to Serial converter chip which allows you to communicate the Seeeduino Lotus with computer by using a micro-USB cable. Seeeduino Lotus has 14 Digital input/output(6 can be used as PWM outputs) and 7 Analog input/output, a micro USB connection, an ICSP header, 12 Grove connector, a reset button.


**Features**

- Fully compatible with Arduino UNO
- ATmega328 microcontroller
- 2 on-board Grove connectors
- 14 Digital I/O Pins (6 PWM outputs)
- 6 Analog Inputs
- ISP Header
- Arduino UNO-R3 Shield Compatible
- Micro USB programming and power supply
- 5V Operating Voltage
- Supports Windows, Mac OS and Linux

**Hardware**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/pinout.png)

LED-D13: An LED is connected to D13 pin of the board. This can be used as an on-board LED indicator for programs/sketches.

USB Input: USB Port is used to connect the board to your PC for programming and for powering up. Micro USB is the a very common type of USB port, could be found with most Android phones, and other devices. You probably have dozens of these cables laying around your house.

Reset: This button is conveniently placed on the side to allow you to reset the Seeeduino board even when a shield is placed on top. whereas the button on the other Arduino board is placed on top which makes it hard to reach with shield attached.

Power Pins, Analog Pins & Digital Pins: These extra headers are available when you want to connect other none grove connector sensors and actuators, and especially the power headers are used when you want to power more sensors/devices.

Grove Connectors: Seeed Studio has a variety of sensors/devices that can make use of this Analog, Digital,I2C and UART connection. In addition, we sell independent Grove connectors to help you make our own sensor connections.

ICSP: This is the ICSP connection for the ATmega328P, it is located in the standard ICSP/SPI position for Arduino Uno, Due, Mega, and Leonardo compatible hardware. The SPI pins in this port: MISO, SCK, and MOSI, are also connected to digital pins 12, 13, and 11 respectively just like those of the Arduino Uno.

USB 2 Uart: Pinout of USB-2-Uart. These pads can be used to interact with other UART devices by putting the on-board ATmega328 in reset mode. This makes Seeeduino Lotus to be used as a USB2UART utility board.

**Arduino UNO vs Seeeduino Lotus**

|                        | Seeeduino Lotus V1.1 | Arduino Uno R3 |
|:----------------------:|:--------------------:|:--------------:|
|      Release Date      |        2018/03       |     2016/02    |
|     Microcontroller    |      ATMega328P      |   ATMega328P   |
|    Operating Voltage   |          5V          |       5V       |
|          Flash         |         32KB         |      32KB      |
|          SRAM          |          2KB         |       2KB      |
|         EEPROM         |          1KB         |       1KB      |
| Power supply interface |       Micro USB      |  USB, DC Port  |
|    Grove Connectors    |          12          |      None      |

#### Sensors 

**[Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)**


![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer.jpg)

This module uses piezo buzzer as the main component, it can produce high pitch tone while it is connected to digital output and logic level set to High, otherwise it can produce various tones according to the frequencies generated from the Analog PWM output that connected to it. (note: the frequency range that normal human ear can distinguish is between 20 Hz and 20kHz.)

**[Grove - Tilt Switch](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/Tilt.jpg)

Grove-Tilt Switch is the equivalent of a button, and is used as a digital input. Inside the tilt switch is a pair of balls that make contact with the pins when the case is upright. Tilt the case over and the balls don't touch, thus not making a connection. It is wired to the SIG line, NC is not used on this Grove module.

**[Grove - Chainable RGB LED](https://www.seeedstudio.com/Grove-Chainable-RGB-Led-V2-0-p-2903.html)**


![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/Grove-Chainable_RGB_LED_V2.0.jpg)

Grove - Chainable RGB LED is based on P9813 chip which is a full-color LED driver. It provides 3 constant-current drivers as well as modulated output of 256 shades of gray. It communicates with a MCU using 2-wire transmission (Data and Clock). This 2-wire transmission can be used to cascade additional Grove - Chainable RGB LED modules. The built-in clock regeneration enhances the transmission distance. This Grove module is suitable for any colorful LED based projects. 

**[Grove - Light Sensor](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-p-2727.html)**


![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/lightsensor.jpg)

The Grove - Light sensor integrates a photo-resistor(light dependent resistor) to detect the intensity of light. The resistance of photo-resistor decreases when the intensity of light increases. A dual OpAmp chip LM358 on board produces voltage corresponding to intensity of light(i.e. based on resistance value). The output signal is analog value, the brighter the light is, the larger the value.

**[Grove - Line Finder](https://www.seeedstudio.com/Grove-Line-Finder-v1-1-p-2712.html)**


---
name: Grove Beginner Kit for Arduino
category: Others
bzurl:  
oldwikiname:  
prodimagename:
surveyurl: 
sku: 110020171
---


## GROVE SYSTEM

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/pack.jpg)

Grove is a modular prototyping system consist of a base unit and various modules with standardized connector. the base unit is generally a microprocessor which allows for communicates, processes and controls the input or output from the Grove modules. Every single Grove module typically addresses a single function, range from a simple button to a more complex heart rate sensor. the standardised Grove connector allows user to assemble Grove units with building block approach, compared to the jumper or solder based system it is much easier to assemble or disassemble, which simplifies the learning system for  experimenting, building and prototyping.
We also provide Grove to Pin Header Converter or Grove Base HAT available for variety developing platforms for those who wants to use grove sensor and actuator modules without Grove System Development Board.

![Grove header](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/grove-wire.jpg)![Grove connector](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connector.png)![Grove-jumper wire](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/jumperwire.png)

Grove system users need to have at least some basic electronic knowledge background, otherwise you need go through this basic tutorial to learn some basic operations on the Grove system, the first part of this tutorial consists list of basic information on the components included in the starter kit, followed by the basic setup of the Arduino IDE for Seeeduino Lotus. Then, the 11 tutorial sessions provide the basic operation on each individual components in the starter kit and the applications by combine multiple modules together, which gives learner some insight and basic knowledge on hooking up and coding with the Grove system.

## Grove Beginner Kit for Arduino


Grove Beginner Kit for Arduino contains one Seeeduino Lotus V1.1 Dev Board(Arduino Compatible) and 8 modules. The detailed information are listed below.

### Development Board

#### Seeeduino Lotus V1.1

Seeeduino Lotus is a development board with ATMEGA328 AVR microcontroller, it is the combination of Seeeduino and Grove Base Shield. It uses an Atmel ATmege328-MU microcontroller and CP2102N chip, ATmege328-MU is a high performance, low power AVR 8-bit Microcontroller, CP2102N is a USB to Serial converter chip which allows you to communicate the Seeeduino Lotus with computer by using a micro-USB cable. Seeeduino Lotus has 14 Digital input/output(6 can be used as PWM outputs) and 7 Analog input/output, a micro USB connection, an ICSP header, 12 Grove connector, a reset button.


**Features**

- Fully compatible with Arduino UNO
- ATmega328 microcontroller
- 2 on-board Grove connectors
- 14 Digital I/O Pins (6 PWM outputs)
- 6 Analog Inputs
- ISP Header
- Arduino UNO-R3 Shield Compatible
- Micro USB programming and power supply
- 5V Operating Voltage
- Supports Windows, Mac OS and Linux

**Hardware**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/pinout.png)

LED-D13: An LED is connected to D13 pin of the board. This can be used as an on-board LED indicator for programs/sketches.

USB Input: USB Port is used to connect the board to your PC for programming and for powering up. Micro USB is the a very common type of USB port, could be found with most Android phones, and other devices. You probably have dozens of these cables laying around your house.

Reset: This button is conveniently placed on the side to allow you to reset the Seeeduino board even when a shield is placed on top. whereas the button on the other Arduino board is placed on top which makes it hard to reach with shield attached.

Power Pins, Analog Pins & Digital Pins: These extra headers are available when you want to connect other none grove connector sensors and actuators, and especially the power headers are used when you want to power more sensors/devices.

Grove Connectors: Seeed Studio has a variety of sensors/devices that can make use of this Analog, Digital,I2C and UART connection. In addition, we sell independent Grove connectors to help you make our own sensor connections.

ICSP: This is the ICSP connection for the ATmega328P, it is located in the standard ICSP/SPI position for Arduino Uno, Due, Mega, and Leonardo compatible hardware. The SPI pins in this port: MISO, SCK, and MOSI, are also connected to digital pins 12, 13, and 11 respectively just like those of the Arduino Uno.

USB 2 Uart: Pinout of USB-2-Uart. These pads can be used to interact with other UART devices by putting the on-board ATmega328 in reset mode. This makes Seeeduino Lotus to be used as a USB2UART utility board.

**Arduino UNO vs Seeeduino Lotus**

|                        | Seeeduino Lotus V1.1 | Arduino Uno R3 |
|:----------------------:|:--------------------:|:--------------:|
|      Release Date      |        2018/03       |     2016/02    |
|     Microcontroller    |      ATMega328P      |   ATMega328P   |
|    Operating Voltage   |          5V          |       5V       |
|          Flash         |         32KB         |      32KB      |
|          SRAM          |          2KB         |       2KB      |
|         EEPROM         |          1KB         |       1KB      |
| Power supply interface |       Micro USB      |  USB, DC Port  |
|    Grove Connectors    |          12          |      None      |

#### Sensors 

**[Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)**


![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer.jpg)

This module uses piezo buzzer as the main component, it can produce high pitch tone while it is connected to digital output and logic level set to High, otherwise it can produce various tones according to the frequencies generated from the Analog PWM output that connected to it. (note: the frequency range that normal human ear can distinguish is between 20 Hz and 20kHz.)

**[Grove - Tilt Switch](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/Tilt.jpg)

Grove-Tilt Switch is the equivalent of a button, and is used as a digital input. Inside the tilt switch is a pair of balls that make contact with the pins when the case is upright. Tilt the case over and the balls don't touch, thus not making a connection. It is wired to the SIG line, NC is not used on this Grove module.

**[Grove - Chainable RGB LED](https://www.seeedstudio.com/Grove-Chainable-RGB-Led-V2-0-p-2903.html)**


![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/Grove-Chainable_RGB_LED_V2.0.jpg)

Grove - Chainable RGB LED is based on P9813 chip which is a full-color LED driver. It provides 3 constant-current drivers as well as modulated output of 256 shades of gray. It communicates with a MCU using 2-wire transmission (Data and Clock). This 2-wire transmission can be used to cascade additional Grove - Chainable RGB LED modules. The built-in clock regeneration enhances the transmission distance. This Grove module is suitable for any colorful LED based projects. 

**[Grove - Light Sensor](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-p-2727.html)**


![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/lightsensor.jpg)

The Grove - Light sensor integrates a photo-resistor(light dependent resistor) to detect the intensity of light. The resistance of photo-resistor decreases when the intensity of light increases. A dual OpAmp chip LM358 on board produces voltage corresponding to intensity of light(i.e. based on resistance value). The output signal is analog value, the brighter the light is, the larger the value.

**[Grove - Line Finder](https://www.seeedstudio.com/Grove-Line-Finder-v1-1-p-2712.html)**


---
name: Grove Beginner Kit for Arduino
category: Others
bzurl:  
oldwikiname:  
prodimagename:
surveyurl: 
sku: 110020171
---


## GROVE SYSTEM

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/pack.jpg)

Grove is a modular prototyping system consist of a base unit and various modules with standardized connector. the base unit is generally a microprocessor which allows for communicates, processes and controls the input or output from the Grove modules. Every single Grove module typically addresses a single function, range from a simple button to a more complex heart rate sensor. the standardised Grove connector allows user to assemble Grove units with building block approach, compared to the jumper or solder based system it is much easier to assemble or disassemble, which simplifies the learning system for  experimenting, building and prototyping.
We also provide Grove to Pin Header Converter or Grove Base HAT available for variety developing platforms for those who wants to use grove sensor and actuator modules without Grove System Development Board.

![Grove header](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/grove-wire.jpg)![Grove connector](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connector.png)![Grove-jumper wire](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/jumperwire.png)

Grove system users need to have at least some basic electronic knowledge background, otherwise you need go through this basic tutorial to learn some basic operations on the Grove system, the first part of this tutorial consists list of basic information on the components included in the starter kit, followed by the basic setup of the Arduino IDE for Seeeduino Lotus. Then, the 11 tutorial sessions provide the basic operation on each individual components in the starter kit and the applications by combine multiple modules together, which gives learner some insight and basic knowledge on hooking up and coding with the Grove system.

## Grove Beginner Kit for Arduino


Grove Beginner Kit for Arduino contains one Seeeduino Lotus V1.1 Dev Board(Arduino Compatible) and 8 modules. The detailed information are listed below.

### Development Board

#### Seeeduino Lotus V1.1

Seeeduino Lotus is a development board with ATMEGA328 AVR microcontroller, it is the combination of Seeeduino and Grove Base Shield. It uses an Atmel ATmege328-MU microcontroller and CP2102N chip, ATmege328-MU is a high performance, low power AVR 8-bit Microcontroller, CP2102N is a USB to Serial converter chip which allows you to communicate the Seeeduino Lotus with computer by using a micro-USB cable. Seeeduino Lotus has 14 Digital input/output(6 can be used as PWM outputs) and 7 Analog input/output, a micro USB connection, an ICSP header, 12 Grove connector, a reset button.


**Features**

- Fully compatible with Arduino UNO
- ATmega328 microcontroller
- 2 on-board Grove connectors
- 14 Digital I/O Pins (6 PWM outputs)
- 6 Analog Inputs
- ISP Header
- Arduino UNO-R3 Shield Compatible
- Micro USB programming and power supply
- 5V Operating Voltage
- Supports Windows, Mac OS and Linux

**Hardware**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/pinout.png)

LED-D13: An LED is connected to D13 pin of the board. This can be used as an on-board LED indicator for programs/sketches.

USB Input: USB Port is used to connect the board to your PC for programming and for powering up. Micro USB is the a very common type of USB port, could be found with most Android phones, and other devices. You probably have dozens of these cables laying around your house.

Reset: This button is conveniently placed on the side to allow you to reset the Seeeduino board even when a shield is placed on top. whereas the button on the other Arduino board is placed on top which makes it hard to reach with shield attached.

Power Pins, Analog Pins & Digital Pins: These extra headers are available when you want to connect other none grove connector sensors and actuators, and especially the power headers are used when you want to power more sensors/devices.

Grove Connectors: Seeed Studio has a variety of sensors/devices that can make use of this Analog, Digital,I2C and UART connection. In addition, we sell independent Grove connectors to help you make our own sensor connections.

ICSP: This is the ICSP connection for the ATmega328P, it is located in the standard ICSP/SPI position for Arduino Uno, Due, Mega, and Leonardo compatible hardware. The SPI pins in this port: MISO, SCK, and MOSI, are also connected to digital pins 12, 13, and 11 respectively just like those of the Arduino Uno.

USB 2 Uart: Pinout of USB-2-Uart. These pads can be used to interact with other UART devices by putting the on-board ATmega328 in reset mode. This makes Seeeduino Lotus to be used as a USB2UART utility board.

**Arduino UNO vs Seeeduino Lotus**

|                        | Seeeduino Lotus V1.1 | Arduino Uno R3 |
|:----------------------:|:--------------------:|:--------------:|
|      Release Date      |        2018/03       |     2016/02    |
|     Microcontroller    |      ATMega328P      |   ATMega328P   |
|    Operating Voltage   |          5V          |       5V       |
|          Flash         |         32KB         |      32KB      |
|          SRAM          |          2KB         |       2KB      |
|         EEPROM         |          1KB         |       1KB      |
| Power supply interface |       Micro USB      |  USB, DC Port  |
|    Grove Connectors    |          12          |      None      |

#### Sensors 

**[Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)**


![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer.jpg)

This module uses piezo buzzer as the main component, it can produce high pitch tone while it is connected to digital output and logic level set to High, otherwise it can produce various tones according to the frequencies generated from the Analog PWM output that connected to it. (note: the frequency range that normal human ear can distinguish is between 20 Hz and 20kHz.)

**[Grove - Tilt Switch](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/Tilt.jpg)

Grove-Tilt Switch is the equivalent of a button, and is used as a digital input. Inside the tilt switch is a pair of balls that make contact with the pins when the case is upright. Tilt the case over and the balls don't touch, thus not making a connection. It is wired to the SIG line, NC is not used on this Grove module.

**[Grove - Chainable RGB LED](https://www.seeedstudio.com/Grove-Chainable-RGB-Led-V2-0-p-2903.html)**


![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/Grove-Chainable_RGB_LED_V2.0.jpg)

Grove - Chainable RGB LED is based on P9813 chip which is a full-color LED driver. It provides 3 constant-current drivers as well as modulated output of 256 shades of gray. It communicates with a MCU using 2-wire transmission (Data and Clock). This 2-wire transmission can be used to cascade additional Grove - Chainable RGB LED modules. The built-in clock regeneration enhances the transmission distance. This Grove module is suitable for any colorful LED based projects. 

**[Grove - Light Sensor](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-p-2727.html)**


![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/lightsensor.jpg)

The Grove - Light sensor integrates a photo-resistor(light dependent resistor) to detect the intensity of light. The resistance of photo-resistor decreases when the intensity of light increases. A dual OpAmp chip LM358 on board produces voltage corresponding to intensity of light(i.e. based on resistance value). The output signal is analog value, the brighter the light is, the larger the value.

**[Grove - Line Finder](https://www.seeedstudio.com/Grove-Line-Finder-v1-1-p-2712.html)**


---
name: Grove Breakout for LinkIt Smart 7688 Duo
category: LinkIt
bzurl: https://www.seeedstudio.com/Grove-Breakout-for-LinkIt-Smart-7688-Duo-p-2575.html
oldwikiname: Grove Breakout for LinkIt Smart 7688 Duo
prodimagename: Breakout_for_LinkIt_Smart_7688_product_view_1200_s.jpg
surveyurl: https://www.surveymonkey.com/r/grove-breakout-for-linkit-smart-7688-duo
sku: 103030032
---

---
![](https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/img/Breakout_for_LinkIt_Smart_7688_product_view_1200_s.jpg)

Grove Breakout for LinkIt Smart 7688 Duo is a grove port integrated and a feature expansion board for LinkIt Smart 7688 Duo[1] development board. This breakout board will save a lot of work for quicker prototyping, by the simplified wiring procedure, even a beginner who has little electronic knowledge can start a project quickly. It supports serial buses like I2C, UART and provides access to reserved original pins of LinkItTM Smart 7688 Duo.

[1] LinkItTM Smart 7688 Duo is an open development board based on the OpenWrt Linux distribution, MT7688 and ATmega32u4. The board is designed especially to enable the prototyping of Rich Application IoT devices for Smart-Home.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Breakout-for-LinkIt-Smart-7688-Duo-p-2575.html)

## Features
---
- Grove interfaced, makes wiring easier.
- More Grove ports, more expandable to rich Grove modules.
- Cost-effective.

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)

## Application ideas
---
- IoT/Gateway Device.
- Robotics
- Smart multimedia devices
- Teaching and learning

## Specification
---
- Input voltage:	5.0V (With USB Power port)
- Operating voltage:	3.3V
- Debug pins connect with MT7688, other pins connect with ATmega32U4.


## Hardware Overview
 ---
 ![](https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/img/Grove_Breakout_for_LinkIt_Smart_7688_Duo_component_with_text_1200_s.jpg)

 !!!Note
     As you need to plug LinkIt Smart 7688 Duo on this breakout, align the side with USB micro type-B of LinkIt Smart 7688 Duo to the side with silkscreen Host of Grove Breakout for LinkIt Smart 7688 Duo.

**Grove interface**

Connect rich [Grove](/Grove_System/) interfaced functional modules. With this kind of ports, you never need jumper wire or soldering work, and you can make more powerful applications with those functional modules.

## Getting started

**Materials required**

- LinkIt Smart 7688 Duo × 1
- USB cable (type A to micro type-B) × 1
- USB to Serial adapter × 1
- Jumper wires × 3
- Grove - Buzzer × 1

**Make some sound with a Grove Buzzer**

1.Refer [wiki of LinkIt Smart 7688 Duo](/LinkIt_Smart_7688_Duo/) to connect your LinkIt Smart 7688 Duo to internet.

!!!Note
    1. You can find Pin 8, Pin 9 and Pin GND close to the port to be connected LinkIt Smart 7688.
    2. You can plug jumper wires into MT7688 UART2 port instead of soldering them to Pin 8, Pin 9 and Pin GND.

2.Open a console after connecting an USB to Serial adapter to LinkIt Smart 7688 Duo.

3.Connect all parts as shown below:

![](https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/img/Arduino_Breakout_for_LinkIt_Smart_7688_Duo_demo_connection_view_1200_s.jpg)

!!!Note
    Plug Grove - Buzzer into port D4.

4.Refer to [wiki of LinkIt Smart 7688 Duo](/LinkIt_Smart_7688_Duo/)to build the Arduino environment for LinkIt Smart 7688 Duo platform on host computer.

5.Download [firmata](https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/res/Firmata_to_build_Arduino_IDE_for.zip). Refer to [wiki of LinkIt Smart 7688 Duo](/LinkIt_Smart_7688_Duo/) to install Arduino IDE for LinkIt Smart 7688 platform, and flash the file firmata to developent board.

!!!!Note
    Following steps are carried out on embedded OS(OpenWRT).

6.Type **pip install pyfirmata** into console and press Enter to install python library pyfirmata.

7.Create a file named buzzer.py with typing vi buzzer.py in console, copy the code below into it.

```
from pyfirmata import Arduino, util
from time import sleep
board = Arduino('/dev/ttyS0')
print "Start blinking D4"
while True:
  board.digital[4].write(1)
  sleep(0.5)
  board.digital[4].write(0)
  sleep(0.5)
```
8.Save buzzer.py and type python buzzer.py to run the example code.

9.Now you will hear the buzzing.


## Schematic Online Viewer

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/res/Schematic_files_for_Grove_Breakout_for_LinkIt_Smart_7688_Duo.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


## Resources
---
- [Schematic files](https://files.seeedstudio.com/wiki/Grove-Breakout_for_LinkIt_Smart_7688_Duo/res/Schematic_files_for_Grove_Breakout_for_LinkIt_Smart_7688_Duo.zip)
- [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>