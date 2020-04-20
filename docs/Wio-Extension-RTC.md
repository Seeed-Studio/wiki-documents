---
name: Wifi Shield V2.0
category: Shield
bzurl: https://seeedstudio.com/Wifi-Shield-V2.0-p-2505.html
oldwikiname: Wifi_Shield_V2.0
prodimagename: Wifi_Shield_v2.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/113030008 1.jpg
surveyurl: https://www.research.net/r/Wifi_Shield_V2_0
sku: 113030008
---

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_Shield_v2.jpg)

This WiFi shield features the RN171 TCP/IP module to allow your Arduino/Seeeduino to connect with up to 802.11b/g wireless networks.

The shield's default communication protocol with the Arduino is UART/Serial, and you may select which digital pins (D0 to D7) to use for RX and TX with two jumper rows we've incorporated. The shield also has two on-board Grove connectors for I2C and Serial to allow the shield to be used with any of our Grove devices.

An on-board antenna allows the shield to cover a wider range and transmit stronger signals. The RN171 module supports TCP, UDP, FTP, and HTTP communication protocols to meet the needs of most wireless and Internet of Things (IoT) network projects e.g. smart home networks, robots control, personal weather stations.

The shield is very well documented with our examples below and its [user manual](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf).

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](http://www.seeedstudio.com/depot/Wifi-Shield-V20-p-2505.html)

Version Tracker
---------------

| Parameter          | Wifi Shield V1.0                                                        | Wifi Shield V1.1(v1.2)                                                 | Wifi Shield V2.0                                                                          |
|--------------------|-------------------------------------------------------------------------|------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| Voltage            | +3.5V~+5V                                                               | +3.5V~+5V                                                              | +3.5V~+5V                                                                                 |
| Standard Shield    | Yes                                                                     | Yes                                                                    | Yes                                                                                       |
| Communication Mode | Serial port                                                             | Serial port                                                            | Serial port                                                                               |
| Standard Shield    | No                                                                      | Yes                                                                    | Yes                                                                                       |
| Antenna Type       | mast antenna                                                            | PCB antenna                                                            | <font color="Red">onboard antenna</font>                                                  |
| Library File       | [Wifi Shield Library V1.0](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WifiShield.zip) | [New Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield) | [New Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield) *the same as v1.2* |

Specifications
--------------

| Parameter                        | Value                                                                |
|----------------------------------|----------------------------------------------------------------------|
| Operating voltage                | 3.3~5.5 V                                                            |
| Compatible board directly        | Arduino Uno/Seeeduino                                                |
| Current                          | 25~400mA                                                             |
| Transmit power                   | 0-10 dBm                                                             |
| Frequency                        | 2402~2480 MHz                                                        |
| Channel                          | 0~13                                                                 |
| Network rate                     | 1-11 Mbps for 802.11b/6-54Mbps for 802.11g                           |
| Dimension                        | 60X56X19 mm                                                          |
| Net Weight                       | 24±1 g                                                               |
| Secure WiFi authentication       | WEP-128, WPA-PSK (TKIP), WPA2-PSK (AES)                              |
| Built-in networking applications | DHCP client, DNS client, ARP, ICMP ping, FTP, TELNET, HTTP, UDP, TCP |
| Certification                    | RN171: FCC, CE                                                      |

Hardware Overview
-----------------

The WiFi shield is compatible with any Arduino/Seeeduino development board as it only requires two digital pins of your choice between D0-D7 for UART/serial communication. To install, simply stack the shield on the Arduino/Seeeduino board.


![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_shield_v2_breakout.png)

1.  **Serial Peripheral Interface (SPI) Connections (MOSI, SCK, MISO):** These pins are not connected to any of the Arduino's pins, they are independent and the logic level output/input of them is 3.3V. They can be used to communicate with the Arduino via SPI but a 3.3V logic converter between these pins and the Arduino's will be needed. The data rate in SPI mode can reach up to 2Mbps.

    **RES_Wifi:** The Wifi shield has an on-board "Rest Button" for the RN-171 module, you may also reset the RN-171 via software by sending the reset command. Additionally, if you would like to connect this pin to the Arduino's digital 6 pin, simply solder the pad labeled "P5" on the shield.

2.  **RN171:** A super low power consumption wireless module with TCP/IP stack built in.
3.  **Antenna:** I.PEX connector.
4.  **RN171 breakout section:** The RN171 module has its own analog input and GPIO pins, which the shield provides access to via this breakout section. The GPIO pins (IO3, IO7, IO8, and IO9) are 3.3V tolerant while the analog input pins (S_0 and S_1) can read 0-400mV (Do not exceed 1.2V). The RN171 can be configured to use these pins by software or they may connected to other pins to use other RN171 functions such as adhoc mode. The voltage of VCC is dependent on the supply power of the WiFi shield.
5.  **UART/Serial Select area:** Two jumper rows to let you select which RX and TX pins you want to use to communicate with the Arduino.
6.  **Grove connectors:** Analog I2C Grove (if using Arduino UNO or Seeeduino) for pins A4&A5 and Digital Serial Grove for D8&D9. The voltage VCC is dependent on the power supply of the board.

### Pins Used / Shield Compatibility

The WiFi shield uses any two digital pins of your choice between D0 and D7 to communicate with the RN171 WiFi module, however keep in mind that D0 and D1 are used by the Arduino for programming and serial communication purposes and using them might interfere with these two functions.

In the example codes in this page we use D2 and D3 as RX and TX for the shield. In this case, the jumper hats should be connected as shown below:

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_shield_v1.1_pinout.png)
*D2 selected for WIFI_TX, D3 selected for WIFI_RX*

### RN171 WiFi Module

---
name: Wifi Shield V2.0
category: Shield
bzurl: https://seeedstudio.com/Wifi-Shield-V2.0-p-2505.html
oldwikiname: Wifi_Shield_V2.0
prodimagename: Wifi_Shield_v2.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/113030008 1.jpg
surveyurl: https://www.research.net/r/Wifi_Shield_V2_0
sku: 113030008
---

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_Shield_v2.jpg)

This WiFi shield features the RN171 TCP/IP module to allow your Arduino/Seeeduino to connect with up to 802.11b/g wireless networks.

The shield's default communication protocol with the Arduino is UART/Serial, and you may select which digital pins (D0 to D7) to use for RX and TX with two jumper rows we've incorporated. The shield also has two on-board Grove connectors for I2C and Serial to allow the shield to be used with any of our Grove devices.

An on-board antenna allows the shield to cover a wider range and transmit stronger signals. The RN171 module supports TCP, UDP, FTP, and HTTP communication protocols to meet the needs of most wireless and Internet of Things (IoT) network projects e.g. smart home networks, robots control, personal weather stations.

The shield is very well documented with our examples below and its [user manual](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf).

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](http://www.seeedstudio.com/depot/Wifi-Shield-V20-p-2505.html)

Version Tracker
---------------

| Parameter          | Wifi Shield V1.0                                                        | Wifi Shield V1.1(v1.2)                                                 | Wifi Shield V2.0                                                                          |
|--------------------|-------------------------------------------------------------------------|------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| Voltage            | +3.5V~+5V                                                               | +3.5V~+5V                                                              | +3.5V~+5V                                                                                 |
| Standard Shield    | Yes                                                                     | Yes                                                                    | Yes                                                                                       |
| Communication Mode | Serial port                                                             | Serial port                                                            | Serial port                                                                               |
| Standard Shield    | No                                                                      | Yes                                                                    | Yes                                                                                       |
| Antenna Type       | mast antenna                                                            | PCB antenna                                                            | <font color="Red">onboard antenna</font>                                                  |
| Library File       | [Wifi Shield Library V1.0](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WifiShield.zip) | [New Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield) | [New Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield) *the same as v1.2* |

Specifications
--------------

| Parameter                        | Value                                                                |
|----------------------------------|----------------------------------------------------------------------|
| Operating voltage                | 3.3~5.5 V                                                            |
| Compatible board directly        | Arduino Uno/Seeeduino                                                |
| Current                          | 25~400mA                                                             |
| Transmit power                   | 0-10 dBm                                                             |
| Frequency                        | 2402~2480 MHz                                                        |
| Channel                          | 0~13                                                                 |
| Network rate                     | 1-11 Mbps for 802.11b/6-54Mbps for 802.11g                           |
| Dimension                        | 60X56X19 mm                                                          |
| Net Weight                       | 24±1 g                                                               |
| Secure WiFi authentication       | WEP-128, WPA-PSK (TKIP), WPA2-PSK (AES)                              |
| Built-in networking applications | DHCP client, DNS client, ARP, ICMP ping, FTP, TELNET, HTTP, UDP, TCP |
| Certification                    | RN171: FCC, CE                                                      |

Hardware Overview
-----------------

The WiFi shield is compatible with any Arduino/Seeeduino development board as it only requires two digital pins of your choice between D0-D7 for UART/serial communication. To install, simply stack the shield on the Arduino/Seeeduino board.


![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_shield_v2_breakout.png)

1.  **Serial Peripheral Interface (SPI) Connections (MOSI, SCK, MISO):** These pins are not connected to any of the Arduino's pins, they are independent and the logic level output/input of them is 3.3V. They can be used to communicate with the Arduino via SPI but a 3.3V logic converter between these pins and the Arduino's will be needed. The data rate in SPI mode can reach up to 2Mbps.

    **RES_Wifi:** The Wifi shield has an on-board "Rest Button" for the RN-171 module, you may also reset the RN-171 via software by sending the reset command. Additionally, if you would like to connect this pin to the Arduino's digital 6 pin, simply solder the pad labeled "P5" on the shield.

2.  **RN171:** A super low power consumption wireless module with TCP/IP stack built in.
3.  **Antenna:** I.PEX connector.
4.  **RN171 breakout section:** The RN171 module has its own analog input and GPIO pins, which the shield provides access to via this breakout section. The GPIO pins (IO3, IO7, IO8, and IO9) are 3.3V tolerant while the analog input pins (S_0 and S_1) can read 0-400mV (Do not exceed 1.2V). The RN171 can be configured to use these pins by software or they may connected to other pins to use other RN171 functions such as adhoc mode. The voltage of VCC is dependent on the supply power of the WiFi shield.
5.  **UART/Serial Select area:** Two jumper rows to let you select which RX and TX pins you want to use to communicate with the Arduino.
6.  **Grove connectors:** Analog I2C Grove (if using Arduino UNO or Seeeduino) for pins A4&A5 and Digital Serial Grove for D8&D9. The voltage VCC is dependent on the power supply of the board.

### Pins Used / Shield Compatibility

The WiFi shield uses any two digital pins of your choice between D0 and D7 to communicate with the RN171 WiFi module, however keep in mind that D0 and D1 are used by the Arduino for programming and serial communication purposes and using them might interfere with these two functions.

In the example codes in this page we use D2 and D3 as RX and TX for the shield. In this case, the jumper hats should be connected as shown below:

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_shield_v1.1_pinout.png)
*D2 selected for WIFI_TX, D3 selected for WIFI_RX*

### RN171 WiFi Module

---
name: Wifi Shield V2.0
category: Shield
bzurl: https://seeedstudio.com/Wifi-Shield-V2.0-p-2505.html
oldwikiname: Wifi_Shield_V2.0
prodimagename: Wifi_Shield_v2.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/113030008 1.jpg
surveyurl: https://www.research.net/r/Wifi_Shield_V2_0
sku: 113030008
---

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_Shield_v2.jpg)

This WiFi shield features the RN171 TCP/IP module to allow your Arduino/Seeeduino to connect with up to 802.11b/g wireless networks.

The shield's default communication protocol with the Arduino is UART/Serial, and you may select which digital pins (D0 to D7) to use for RX and TX with two jumper rows we've incorporated. The shield also has two on-board Grove connectors for I2C and Serial to allow the shield to be used with any of our Grove devices.

An on-board antenna allows the shield to cover a wider range and transmit stronger signals. The RN171 module supports TCP, UDP, FTP, and HTTP communication protocols to meet the needs of most wireless and Internet of Things (IoT) network projects e.g. smart home networks, robots control, personal weather stations.

The shield is very well documented with our examples below and its [user manual](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf).

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](http://www.seeedstudio.com/depot/Wifi-Shield-V20-p-2505.html)

Version Tracker
---------------

| Parameter          | Wifi Shield V1.0                                                        | Wifi Shield V1.1(v1.2)                                                 | Wifi Shield V2.0                                                                          |
|--------------------|-------------------------------------------------------------------------|------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| Voltage            | +3.5V~+5V                                                               | +3.5V~+5V                                                              | +3.5V~+5V                                                                                 |
| Standard Shield    | Yes                                                                     | Yes                                                                    | Yes                                                                                       |
| Communication Mode | Serial port                                                             | Serial port                                                            | Serial port                                                                               |
| Standard Shield    | No                                                                      | Yes                                                                    | Yes                                                                                       |
| Antenna Type       | mast antenna                                                            | PCB antenna                                                            | <font color="Red">onboard antenna</font>                                                  |
| Library File       | [Wifi Shield Library V1.0](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WifiShield.zip) | [New Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield) | [New Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield) *the same as v1.2* |

Specifications
--------------

| Parameter                        | Value                                                                |
|----------------------------------|----------------------------------------------------------------------|
| Operating voltage                | 3.3~5.5 V                                                            |
| Compatible board directly        | Arduino Uno/Seeeduino                                                |
| Current                          | 25~400mA                                                             |
| Transmit power                   | 0-10 dBm                                                             |
| Frequency                        | 2402~2480 MHz                                                        |
| Channel                          | 0~13                                                                 |
| Network rate                     | 1-11 Mbps for 802.11b/6-54Mbps for 802.11g                           |
| Dimension                        | 60X56X19 mm                                                          |
| Net Weight                       | 24±1 g                                                               |
| Secure WiFi authentication       | WEP-128, WPA-PSK (TKIP), WPA2-PSK (AES)                              |
| Built-in networking applications | DHCP client, DNS client, ARP, ICMP ping, FTP, TELNET, HTTP, UDP, TCP |
| Certification                    | RN171: FCC, CE                                                      |

Hardware Overview
-----------------

The WiFi shield is compatible with any Arduino/Seeeduino development board as it only requires two digital pins of your choice between D0-D7 for UART/serial communication. To install, simply stack the shield on the Arduino/Seeeduino board.


![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_shield_v2_breakout.png)

1.  **Serial Peripheral Interface (SPI) Connections (MOSI, SCK, MISO):** These pins are not connected to any of the Arduino's pins, they are independent and the logic level output/input of them is 3.3V. They can be used to communicate with the Arduino via SPI but a 3.3V logic converter between these pins and the Arduino's will be needed. The data rate in SPI mode can reach up to 2Mbps.

    **RES_Wifi:** The Wifi shield has an on-board "Rest Button" for the RN-171 module, you may also reset the RN-171 via software by sending the reset command. Additionally, if you would like to connect this pin to the Arduino's digital 6 pin, simply solder the pad labeled "P5" on the shield.

2.  **RN171:** A super low power consumption wireless module with TCP/IP stack built in.
3.  **Antenna:** I.PEX connector.
4.  **RN171 breakout section:** The RN171 module has its own analog input and GPIO pins, which the shield provides access to via this breakout section. The GPIO pins (IO3, IO7, IO8, and IO9) are 3.3V tolerant while the analog input pins (S_0 and S_1) can read 0-400mV (Do not exceed 1.2V). The RN171 can be configured to use these pins by software or they may connected to other pins to use other RN171 functions such as adhoc mode. The voltage of VCC is dependent on the supply power of the WiFi shield.
5.  **UART/Serial Select area:** Two jumper rows to let you select which RX and TX pins you want to use to communicate with the Arduino.
6.  **Grove connectors:** Analog I2C Grove (if using Arduino UNO or Seeeduino) for pins A4&A5 and Digital Serial Grove for D8&D9. The voltage VCC is dependent on the power supply of the board.

### Pins Used / Shield Compatibility

The WiFi shield uses any two digital pins of your choice between D0 and D7 to communicate with the RN171 WiFi module, however keep in mind that D0 and D1 are used by the Arduino for programming and serial communication purposes and using them might interfere with these two functions.

In the example codes in this page we use D2 and D3 as RX and TX for the shield. In this case, the jumper hats should be connected as shown below:

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_shield_v1.1_pinout.png)
*D2 selected for WIFI_TX, D3 selected for WIFI_RX*

### RN171 WiFi Module

---
name: Wifi Shield V2.0
category: Shield
bzurl: https://seeedstudio.com/Wifi-Shield-V2.0-p-2505.html
oldwikiname: Wifi_Shield_V2.0
prodimagename: Wifi_Shield_v2.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/113030008 1.jpg
surveyurl: https://www.research.net/r/Wifi_Shield_V2_0
sku: 113030008
---

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_Shield_v2.jpg)

This WiFi shield features the RN171 TCP/IP module to allow your Arduino/Seeeduino to connect with up to 802.11b/g wireless networks.

The shield's default communication protocol with the Arduino is UART/Serial, and you may select which digital pins (D0 to D7) to use for RX and TX with two jumper rows we've incorporated. The shield also has two on-board Grove connectors for I2C and Serial to allow the shield to be used with any of our Grove devices.

An on-board antenna allows the shield to cover a wider range and transmit stronger signals. The RN171 module supports TCP, UDP, FTP, and HTTP communication protocols to meet the needs of most wireless and Internet of Things (IoT) network projects e.g. smart home networks, robots control, personal weather stations.

The shield is very well documented with our examples below and its [user manual](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf).

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](http://www.seeedstudio.com/depot/Wifi-Shield-V20-p-2505.html)

Version Tracker
---------------

| Parameter          | Wifi Shield V1.0                                                        | Wifi Shield V1.1(v1.2)                                                 | Wifi Shield V2.0                                                                          |
|--------------------|-------------------------------------------------------------------------|------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| Voltage            | +3.5V~+5V                                                               | +3.5V~+5V                                                              | +3.5V~+5V                                                                                 |
| Standard Shield    | Yes                                                                     | Yes                                                                    | Yes                                                                                       |
| Communication Mode | Serial port                                                             | Serial port                                                            | Serial port                                                                               |
| Standard Shield    | No                                                                      | Yes                                                                    | Yes                                                                                       |
| Antenna Type       | mast antenna                                                            | PCB antenna                                                            | <font color="Red">onboard antenna</font>                                                  |
| Library File       | [Wifi Shield Library V1.0](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WifiShield.zip) | [New Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield) | [New Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield) *the same as v1.2* |

Specifications
--------------

| Parameter                        | Value                                                                |
|----------------------------------|----------------------------------------------------------------------|
| Operating voltage                | 3.3~5.5 V                                                            |
| Compatible board directly        | Arduino Uno/Seeeduino                                                |
| Current                          | 25~400mA                                                             |
| Transmit power                   | 0-10 dBm                                                             |
| Frequency                        | 2402~2480 MHz                                                        |
| Channel                          | 0~13                                                                 |
| Network rate                     | 1-11 Mbps for 802.11b/6-54Mbps for 802.11g                           |
| Dimension                        | 60X56X19 mm                                                          |
| Net Weight                       | 24±1 g                                                               |
| Secure WiFi authentication       | WEP-128, WPA-PSK (TKIP), WPA2-PSK (AES)                              |
| Built-in networking applications | DHCP client, DNS client, ARP, ICMP ping, FTP, TELNET, HTTP, UDP, TCP |
| Certification                    | RN171: FCC, CE                                                      |

Hardware Overview
-----------------

The WiFi shield is compatible with any Arduino/Seeeduino development board as it only requires two digital pins of your choice between D0-D7 for UART/serial communication. To install, simply stack the shield on the Arduino/Seeeduino board.


![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_shield_v2_breakout.png)

1.  **Serial Peripheral Interface (SPI) Connections (MOSI, SCK, MISO):** These pins are not connected to any of the Arduino's pins, they are independent and the logic level output/input of them is 3.3V. They can be used to communicate with the Arduino via SPI but a 3.3V logic converter between these pins and the Arduino's will be needed. The data rate in SPI mode can reach up to 2Mbps.

    **RES_Wifi:** The Wifi shield has an on-board "Rest Button" for the RN-171 module, you may also reset the RN-171 via software by sending the reset command. Additionally, if you would like to connect this pin to the Arduino's digital 6 pin, simply solder the pad labeled "P5" on the shield.

2.  **RN171:** A super low power consumption wireless module with TCP/IP stack built in.
3.  **Antenna:** I.PEX connector.
4.  **RN171 breakout section:** The RN171 module has its own analog input and GPIO pins, which the shield provides access to via this breakout section. The GPIO pins (IO3, IO7, IO8, and IO9) are 3.3V tolerant while the analog input pins (S_0 and S_1) can read 0-400mV (Do not exceed 1.2V). The RN171 can be configured to use these pins by software or they may connected to other pins to use other RN171 functions such as adhoc mode. The voltage of VCC is dependent on the supply power of the WiFi shield.
5.  **UART/Serial Select area:** Two jumper rows to let you select which RX and TX pins you want to use to communicate with the Arduino.
6.  **Grove connectors:** Analog I2C Grove (if using Arduino UNO or Seeeduino) for pins A4&A5 and Digital Serial Grove for D8&D9. The voltage VCC is dependent on the power supply of the board.

### Pins Used / Shield Compatibility

The WiFi shield uses any two digital pins of your choice between D0 and D7 to communicate with the RN171 WiFi module, however keep in mind that D0 and D1 are used by the Arduino for programming and serial communication purposes and using them might interfere with these two functions.

In the example codes in this page we use D2 and D3 as RX and TX for the shield. In this case, the jumper hats should be connected as shown below:

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_shield_v1.1_pinout.png)
*D2 selected for WIFI_TX, D3 selected for WIFI_RX*

### RN171 WiFi Module

---
name: Wifi Shield V2.0
category: Shield
bzurl: https://seeedstudio.com/Wifi-Shield-V2.0-p-2505.html
oldwikiname: Wifi_Shield_V2.0
prodimagename: Wifi_Shield_v2.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/113030008 1.jpg
surveyurl: https://www.research.net/r/Wifi_Shield_V2_0
sku: 113030008
---

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_Shield_v2.jpg)

This WiFi shield features the RN171 TCP/IP module to allow your Arduino/Seeeduino to connect with up to 802.11b/g wireless networks.

The shield's default communication protocol with the Arduino is UART/Serial, and you may select which digital pins (D0 to D7) to use for RX and TX with two jumper rows we've incorporated. The shield also has two on-board Grove connectors for I2C and Serial to allow the shield to be used with any of our Grove devices.

An on-board antenna allows the shield to cover a wider range and transmit stronger signals. The RN171 module supports TCP, UDP, FTP, and HTTP communication protocols to meet the needs of most wireless and Internet of Things (IoT) network projects e.g. smart home networks, robots control, personal weather stations.

The shield is very well documented with our examples below and its [user manual](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf).

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](http://www.seeedstudio.com/depot/Wifi-Shield-V20-p-2505.html)

Version Tracker
---------------

| Parameter          | Wifi Shield V1.0                                                        | Wifi Shield V1.1(v1.2)                                                 | Wifi Shield V2.0                                                                          |
|--------------------|-------------------------------------------------------------------------|------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| Voltage            | +3.5V~+5V                                                               | +3.5V~+5V                                                              | +3.5V~+5V                                                                                 |
| Standard Shield    | Yes                                                                     | Yes                                                                    | Yes                                                                                       |
| Communication Mode | Serial port                                                             | Serial port                                                            | Serial port                                                                               |
| Standard Shield    | No                                                                      | Yes                                                                    | Yes                                                                                       |
| Antenna Type       | mast antenna                                                            | PCB antenna                                                            | <font color="Red">onboard antenna</font>                                                  |
| Library File       | [Wifi Shield Library V1.0](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WifiShield.zip) | [New Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield) | [New Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield) *the same as v1.2* |

Specifications
--------------

| Parameter                        | Value                                                                |
|----------------------------------|----------------------------------------------------------------------|
| Operating voltage                | 3.3~5.5 V                                                            |
| Compatible board directly        | Arduino Uno/Seeeduino                                                |
| Current                          | 25~400mA                                                             |
| Transmit power                   | 0-10 dBm                                                             |
| Frequency                        | 2402~2480 MHz                                                        |
| Channel                          | 0~13                                                                 |
| Network rate                     | 1-11 Mbps for 802.11b/6-54Mbps for 802.11g                           |
| Dimension                        | 60X56X19 mm                                                          |
| Net Weight                       | 24±1 g                                                               |
| Secure WiFi authentication       | WEP-128, WPA-PSK (TKIP), WPA2-PSK (AES)                              |
| Built-in networking applications | DHCP client, DNS client, ARP, ICMP ping, FTP, TELNET, HTTP, UDP, TCP |
| Certification                    | RN171: FCC, CE                                                      |

Hardware Overview
-----------------

The WiFi shield is compatible with any Arduino/Seeeduino development board as it only requires two digital pins of your choice between D0-D7 for UART/serial communication. To install, simply stack the shield on the Arduino/Seeeduino board.


![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_shield_v2_breakout.png)

1.  **Serial Peripheral Interface (SPI) Connections (MOSI, SCK, MISO):** These pins are not connected to any of the Arduino's pins, they are independent and the logic level output/input of them is 3.3V. They can be used to communicate with the Arduino via SPI but a 3.3V logic converter between these pins and the Arduino's will be needed. The data rate in SPI mode can reach up to 2Mbps.

    **RES_Wifi:** The Wifi shield has an on-board "Rest Button" for the RN-171 module, you may also reset the RN-171 via software by sending the reset command. Additionally, if you would like to connect this pin to the Arduino's digital 6 pin, simply solder the pad labeled "P5" on the shield.

2.  **RN171:** A super low power consumption wireless module with TCP/IP stack built in.
3.  **Antenna:** I.PEX connector.
4.  **RN171 breakout section:** The RN171 module has its own analog input and GPIO pins, which the shield provides access to via this breakout section. The GPIO pins (IO3, IO7, IO8, and IO9) are 3.3V tolerant while the analog input pins (S_0 and S_1) can read 0-400mV (Do not exceed 1.2V). The RN171 can be configured to use these pins by software or they may connected to other pins to use other RN171 functions such as adhoc mode. The voltage of VCC is dependent on the supply power of the WiFi shield.
5.  **UART/Serial Select area:** Two jumper rows to let you select which RX and TX pins you want to use to communicate with the Arduino.
6.  **Grove connectors:** Analog I2C Grove (if using Arduino UNO or Seeeduino) for pins A4&A5 and Digital Serial Grove for D8&D9. The voltage VCC is dependent on the power supply of the board.

### Pins Used / Shield Compatibility

The WiFi shield uses any two digital pins of your choice between D0 and D7 to communicate with the RN171 WiFi module, however keep in mind that D0 and D1 are used by the Arduino for programming and serial communication purposes and using them might interfere with these two functions.

In the example codes in this page we use D2 and D3 as RX and TX for the shield. In this case, the jumper hats should be connected as shown below:

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_shield_v1.1_pinout.png)
*D2 selected for WIFI_TX, D3 selected for WIFI_RX*

### RN171 WiFi Module

---
name: Wifi Shield V2.0
category: Shield
bzurl: https://seeedstudio.com/Wifi-Shield-V2.0-p-2505.html
oldwikiname: Wifi_Shield_V2.0
prodimagename: Wifi_Shield_v2.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/113030008 1.jpg
surveyurl: https://www.research.net/r/Wifi_Shield_V2_0
sku: 113030008
---

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_Shield_v2.jpg)

This WiFi shield features the RN171 TCP/IP module to allow your Arduino/Seeeduino to connect with up to 802.11b/g wireless networks.

The shield's default communication protocol with the Arduino is UART/Serial, and you may select which digital pins (D0 to D7) to use for RX and TX with two jumper rows we've incorporated. The shield also has two on-board Grove connectors for I2C and Serial to allow the shield to be used with any of our Grove devices.

An on-board antenna allows the shield to cover a wider range and transmit stronger signals. The RN171 module supports TCP, UDP, FTP, and HTTP communication protocols to meet the needs of most wireless and Internet of Things (IoT) network projects e.g. smart home networks, robots control, personal weather stations.

The shield is very well documented with our examples below and its [user manual](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf).

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](http://www.seeedstudio.com/depot/Wifi-Shield-V20-p-2505.html)

Version Tracker
---------------

| Parameter          | Wifi Shield V1.0                                                        | Wifi Shield V1.1(v1.2)                                                 | Wifi Shield V2.0                                                                          |
|--------------------|-------------------------------------------------------------------------|------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| Voltage            | +3.5V~+5V                                                               | +3.5V~+5V                                                              | +3.5V~+5V                                                                                 |
| Standard Shield    | Yes                                                                     | Yes                                                                    | Yes                                                                                       |
| Communication Mode | Serial port                                                             | Serial port                                                            | Serial port                                                                               |
| Standard Shield    | No                                                                      | Yes                                                                    | Yes                                                                                       |
| Antenna Type       | mast antenna                                                            | PCB antenna                                                            | <font color="Red">onboard antenna</font>                                                  |
| Library File       | [Wifi Shield Library V1.0](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WifiShield.zip) | [New Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield) | [New Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield) *the same as v1.2* |

Specifications
--------------

| Parameter                        | Value                                                                |
|----------------------------------|----------------------------------------------------------------------|
| Operating voltage                | 3.3~5.5 V                                                            |
| Compatible board directly        | Arduino Uno/Seeeduino                                                |
| Current                          | 25~400mA                                                             |
| Transmit power                   | 0-10 dBm                                                             |
| Frequency                        | 2402~2480 MHz                                                        |
| Channel                          | 0~13                                                                 |
| Network rate                     | 1-11 Mbps for 802.11b/6-54Mbps for 802.11g                           |
| Dimension                        | 60X56X19 mm                                                          |
| Net Weight                       | 24±1 g                                                               |
| Secure WiFi authentication       | WEP-128, WPA-PSK (TKIP), WPA2-PSK (AES)                              |
| Built-in networking applications | DHCP client, DNS client, ARP, ICMP ping, FTP, TELNET, HTTP, UDP, TCP |
| Certification                    | RN171: FCC, CE                                                      |

Hardware Overview
-----------------

The WiFi shield is compatible with any Arduino/Seeeduino development board as it only requires two digital pins of your choice between D0-D7 for UART/serial communication. To install, simply stack the shield on the Arduino/Seeeduino board.


![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_shield_v2_breakout.png)

1.  **Serial Peripheral Interface (SPI) Connections (MOSI, SCK, MISO):** These pins are not connected to any of the Arduino's pins, they are independent and the logic level output/input of them is 3.3V. They can be used to communicate with the Arduino via SPI but a 3.3V logic converter between these pins and the Arduino's will be needed. The data rate in SPI mode can reach up to 2Mbps.

    **RES_Wifi:** The Wifi shield has an on-board "Rest Button" for the RN-171 module, you may also reset the RN-171 via software by sending the reset command. Additionally, if you would like to connect this pin to the Arduino's digital 6 pin, simply solder the pad labeled "P5" on the shield.

2.  **RN171:** A super low power consumption wireless module with TCP/IP stack built in.
3.  **Antenna:** I.PEX connector.
4.  **RN171 breakout section:** The RN171 module has its own analog input and GPIO pins, which the shield provides access to via this breakout section. The GPIO pins (IO3, IO7, IO8, and IO9) are 3.3V tolerant while the analog input pins (S_0 and S_1) can read 0-400mV (Do not exceed 1.2V). The RN171 can be configured to use these pins by software or they may connected to other pins to use other RN171 functions such as adhoc mode. The voltage of VCC is dependent on the supply power of the WiFi shield.
5.  **UART/Serial Select area:** Two jumper rows to let you select which RX and TX pins you want to use to communicate with the Arduino.
6.  **Grove connectors:** Analog I2C Grove (if using Arduino UNO or Seeeduino) for pins A4&A5 and Digital Serial Grove for D8&D9. The voltage VCC is dependent on the power supply of the board.

### Pins Used / Shield Compatibility

The WiFi shield uses any two digital pins of your choice between D0 and D7 to communicate with the RN171 WiFi module, however keep in mind that D0 and D1 are used by the Arduino for programming and serial communication purposes and using them might interfere with these two functions.

In the example codes in this page we use D2 and D3 as RX and TX for the shield. In this case, the jumper hats should be connected as shown below:

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_shield_v1.1_pinout.png)
*D2 selected for WIFI_TX, D3 selected for WIFI_RX*

### RN171 WiFi Module

---
name: Wio-Extension-RTC
category: 
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 103100082

---

![](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/p/r/preview_4_2.png)


The Wio Extension - RTC is an extension board for Wio LTE, it can provide the Real-Time Clock function via the I2C port. This board is based on NXP PCF8523 chip, which can provide year, month, day, weekday, hours, minutes, and seconds information. 
  
This board is powered by Micro-USB port, communicate with the Wio LTE via I2C port, and we also provide a USB power output which can be turned off/on by a on-board switch, so that you can use the Wio Extension - RTC board to power the Wio LTE. When the power supply to Wio boards ( Like the following picture), the standby current of whole system is less than 1 uA.



<p style=":center"><a href="https://www.seeedstudio.com/Wio-Extension-RTC-p-4002.html" target="_blank"><img   src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>



## Feature  
 
- Extensibility
- Able to supply Wio boards with 3.3 voltage.





## Hardware Overview



<div align="center">
<figure>
  <p style=":center"><a href="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/pinout.jpg" /></a></p> 
  </div>


![](https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/rtc_diagram.png)


## Platforms Supported
    



| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |







## Getting Started


### Play With Arduino


**Materials required**

| Wio LTE Boards |   Wio-Extension-RTC  |  Grove - Buzzer |Grove - Red LED |
|--------------|-------------|-----------------|---------|
|![enter image description here](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedfile2018-06bazaar837387_img_0005a.jpg)|![enter image description here](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/p/r/preview_4_2.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Buzzer/images/Grove%20Buzzer.jpg)|![enter image description here](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedfile2018-09bazaar939479_1040300054.jpg)|
|[Get ONE Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Wio-Extension-RTC-p-4002.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Buzzer.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|    








>Since Wio Extension - RTC just controlling USB power supply set from I2C, you can use this board to manage the power supply almost for every MCU boards powering from USB.




!!!note
        **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy 
    
        **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.                   




                 




#### Hardware            






  
- **Step 1.** Connect the Wio-Extension-RTC to the **I2C** port of the Wio LTE Boards.

- **Step 2.**  Connect Wio LTE Boards.to PC via a USB cable.

- **Step 3.** Connect [Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) or [Grove - Red LED](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html) to D38 of Wio LTE.


<div align="center">
<figure>
  <p style=":center"><a href="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/connection.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/connection.png" /></a></p>  </div>



#### Software

!!!Attention
    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.The driver of this board is rely on the head file of   `Seeed STM32F4 Board(JP mirror) by Seeed K.K.` , so whether you have installed your wio board with the  tutorial of  [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/), you need to do the following step.

**Step 1** Install library
Open your Arudino IDE, click on File > Preferences, and copy below url to Additional Boards Manager URLs.  
`http://www.seeed.co.jp/package_SeeedJP_index.json`  
![](https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/Preferences.png)  

Click on Toos > Board > Board Manager, and enter `Wio` to the text box.

![](https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/Boards_Manager.png)

Click `Seeed STM32F4 Board(JP mirror) by Seeed K.K.` then an Install button appear, click on it to finish the step, this process takes about 5 minutes to half an hour, which depend on the speed of your network.
Click on Tools > Manage Libraries, and enter `Wio` to the text box.

![](https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/Library_Manager.png)
Click `Wio LTE for Arduino by Seeed K.K.` then an Install button appear, click on it to finish the step.

Unzip the [sample sketch](https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/wiortc-sample.zip), and open `wiortc-sample.ino` with Arduino IDE.


**Step2** Download the code

1. Press and hold BOOT button at back side of the Wio LTE and plug the USB to PC.
2. We will see STM BOOTLARDER in device manager.
3. Select Tools→Boards→Wio_Tracker_LTE.
![Alt text](https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/Snipaste_2019-04-10_15-15-20.jpg)

4. Select Sketch→Upload to upload the code to Wio_LTE.
5. Press RST button to enable the COM port.
**Tips**
>When you download most Arduino bords, you need to choose a right COM port, but for this board, you must keep the COM configuration to be blank. 

>![Alt text](https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/port.jpg)

6. Use Serial monitor to print the serial message. 


```c++
#include <WioLTEforArduino.h>
#include "WioRTC.h"

////////////////////////////////////////////////////////////////////////////////
// Defines

#define BOOT_INTERVAL   (30)  // [sec.]

////////////////////////////////////////////////////////////////////////////////
// Global variables

WioLTE Wio;
WioRTC Rtc;

////////////////////////////////////////////////////////////////////////////////
// setup and loop

void setup()
{
  delay(200);

  SerialUSB.begin(115200);
  SerialUSB.println("");
  SerialUSB.println("--- START ---------------------------------------------------");

  ////////////////////////////////////////
  // Low-level initialize

  SerialUSB.println("### I/O Initialize.");
  Wio.Init();

  SerialUSB.println("### Power supply ON.");
  Wio.PowerSupplyGrove(true);
  delay(500);
  
  ////////////////////////////////////////
  // Device initialize
  
  SerialUSB.println("### Device initialize.");
  Wire.begin();
  Rtc.begin();

  ////////////////////////////////////////
  // Completed

  SerialUSB.println("### Completed.");
}

void loop()
{
  uint8_t val;
  Rtc.EepromRead(0, &val, sizeof(val));
  SerialUSB.print("EEPROM value is ");
  SerialUSB.println(val);
  
  val++;
  Rtc.EepromWrite(0, &val, sizeof(val));
  
  SerialUSB.println("Beep.");
  pinMode(WIO_D38, OUTPUT);
  digitalWrite(WIO_D38, HIGH);
  delay(200);
  digitalWrite(WIO_D38, LOW);
  
  SerialUSB.println("Shutdown.");
  Rtc.SetWakeupPeriod(BOOT_INTERVAL);
  Rtc.Shutdown();
  while (1) {}
}
```


## Schematic Online Viewer

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/res/Wio%20Extension%20%E2%80%93%20RTC%20v1.0.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


## Resources

- **[ZIP]** [ Wio-Extension-RTC](https://files.seeedstudio.com/wiki/Wio_Extension-RTC/res/Wio%20Extension%20%E2%80%93%20RTC%20v1.0.zip)
- **[Sample]** [Wio-Extension-RTC Sample Code](https://github.com/Seeed-Studio/Wio_Extension_RTC/blob/master/wiortc-sample.zip)





## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>