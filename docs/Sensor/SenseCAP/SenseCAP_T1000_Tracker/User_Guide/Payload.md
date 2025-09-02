---
description: SenseCAP T1000 Tracker Payload Format
title: Payload Format
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /T1000_payload
last_update:
  date: 2/21/2023
  author: Jessie
---

## Uplink Packet Parsing

The Tracker data protocol provides different packets to correspond to different information, and the number of bytes of each packet may vary. The structure of the frame is shown in the image below. The frame content is sent in **big-endian byte order**.

|Data ID|Data Value|
| - | :- |
|1 byte|50 bytes (Max)|

**Data ID**: Function number.
**Data Value**: Position, sensor data an d other information.

### Device Status Packet -Event Mode 0x01

The Device Status Packet is uploaded when join LoRaWAN network. The Device Status packet has two packet formats in different working modes:

1) Event Mode, ID=0x01

1) Periodic Mode, ID= 0x02

### Device Status Packet -Event Mode: 0x01

|0x01|Byte2|Byte3~4|Byte5~6|Byte7|Byte8|Byte9~10|Byte11~12|
| - | :- | :- | :- | :- | :- | :- | :- |
|ID|Battery level|Software version|Hardware version|Work mode|Positioning strategy|Heartbeat interval|Uplink interval|

|Byte13~14|Byte15|Byte16|Byte17|Byte18~19|Byte20~21|
| :- | :- | :- | :- | :- | :- |
|Event mode uplink interval|Temp&light switch|SOS mode|Enable motion event|3-axis motion threshold|Motion start interval|

|<a name="ole_link1"></a>Byte22|Byte23~24|Byte25|Byte26~27|Byte28|Byte29~30|
| :- | :- | :- | :- | :- | :- |
|Enable motionless event|Motionless timeout|Enable shock event|3-axis shock threshold|Enable temperature event|Temperature event uplink interval|

|Byte31~32|Byte33~34|Byte35~36|Byte37|Byte38|Byte39~40|
| :- | :- | :- | :- | :- | :- |
|Temperature sample interval|Temperature threshold max|Temperature threshold min|Temperature warning type|Enable light event|Light event uplink interval|

|Byte41~42|Byte43~44|Byte45~46|Byte47|
| :- | :- | :- | :- |
|Light sample interval|Light threshold max|Light threshold min|Light warning type|

**The raw payload:**

0153010501050207001e00050005010000001e000500016801012c000005001e025800000000000500010064000000

|**Byte**|**Value**|**Type**|**Raw Data**|**Description**|
| - | - | - | - | - |
|1|Frame ID|uint8|01|01 is the packet ID.|
|2|Battery level|uint8|53|<p>53 is 0x53 = 83(DEC)</p><p>The battery level is 83%</p>|
|3~4|Software version|uint16|0105|<p>0105 is 0x0105 == v1.5</p><p>The software version is v1.5</p>|
|5~6|Hardware version|uint16|0105|<p>0105 is 0x0105 == v1.5</p><p>The hardware version is v1.5</p>|
|7|Work mode|uint8|02|<p>02 is 0x02, means the device use “Event mode”.</p><p>00: Standby mode</p><p>01: Periodic mode</p><p>02: Event mode</p>|
|8|Positioning strategy|uint8|07|<p>07 is 0x07, means the device use Bluetooth + Wi-Fi + GNSS positioning strategy.</p><p>00: Only GNSS</p><p>01: Only Wi-Fi</p><p>02: Wi-Fi+GNSS</p><p>03: GNSS + Wi-Fi</p><p>04: Only Bluetooth</p><p>05: Bluetooth + Wi-Fi</p><p>06: Bluetooth + GNSS</p><p>07: Bluetooth + Wi-Fi + GNSS</p>|
|9~10|Heartbeat interval|uint16|001e|001e is 0x001E = 30(DEC), the heartbeat interval is 30 minutes. |
|11~12|Uplink Interval|uint16|0005|0005 is 0x0005 = 5(DEC), the uplink interval is 5 minutes.|
|13~14|Event mode uplink interval|uint16|0005|0005 is 0x0005 = 5(DEC), the event mode uplink interval is 5 minutes.|
|15|Temp&light switch|uint8|01|<p>01 means open the temperature and light sensor.</p><p>00: Close the temperature and light sensor.</p><p>01: Open the temperature and light sensor.</p>|
|16|SOS mode|uint8|00|<p>00 means use SOS single mode.</p><p>00: use SOS single mode.</p><p>01: use SOS continuous mode.</p>|
|17|Enable motion event|uint8|00|<p>00 means disable Event mode.</p><p>00: disable Event mode.</p><p>01: enable Event mode.</p>|
|18~19|3-Axis motion threshold|uint16|001e|<p>001e is 0x001E=30(DEC) mg</p><p>When the acceleration exceeds 30mg, determine that the device is in motion, when it is 2 minutes below this value, determine that the device is in motionless.</p>|
|20~21|Motion start interval|uint16|0005|0005 is 0x0005 = 5(DEC), when device is on motion, the interval is 5 minutes.|
|22|Enable motionless event|uint8|00|<p>00 means disable motionless event.</p><p>00: disable motionless event.</p><p>01: enable motionless event.</p>|
|23~24|Motionless timeout|uint16|0168|0168 is 0x0168 = 360(DEC), when the device is stationary in a location for more than 360 minutes, a motionless timeout event is triggered.|
|25|Enable shock event|uint8|01|<p>01 means enable shock event.</p><p>00: disable shock event.</p><p>01: enable shock event.</p>|
|26~27|3-Axis shock threshold|uint16|012c|<p>012c is 0x012C=300(DEC) mg</p><p>When the acceleration exceeds 300mg, the shock event is triggered.</p>|
|28|Enable temperature event|uint8|00|<p>00 means enable shock event.</p><p>00: disable shock event.</p><p>01: enable shock event.</p>|
|29~30|Temperature event uplink interval|uint16|0005|0005 is 0x0005 = 5(DEC), when the temperature exceeds the threshold, the location and sensor data will upload every 5 minutes.|
|31~32|Temperature sample interval|uint16|001e|<p>001e is 0x001E=30(DEC) seconds</p><p>The temperature is detected every 30 seconds. When the threshold is triggered, upload location and sensor data.</p>|
|33~34|Temperature threshold max|int16|0258|<p>0258 is 0x0258 = 600(DEC),</p><p>Maximum threshold =600/10=60.0 ℃</p>|
|35~36|Temperature threshold min|int16|0000|<p>0000 is 0x0000 = 0(DEC), </p><p>Minimum threshold=0/10=0.0 ℃</p>|
|37|Temperature threshold rule|uint8|00|<p>00 means when temperature ≤ min threshold, device will upload location and temperature event.</p><p>00: temp ≤ min threshold</p><p>01: temp ≥ max threshold</p><p>02: temp ≤ min threshold and temp ≥ max threshold</p><p>03: min threshold≤ temp ≤max threshold</p>|
|38|Enable light event|uint8|00|<p>00 means disable light event.</p><p>00: disable light event.</p><p>01: enable light event.</p>|
|39~40|Light event uplink interval|uint16|0005|0005 is 0x0005 = 5(DEC), when the light exceeds the threshold, the location and sensor data will upload every 5 minutes.|
|41~42|Light sample interval|uint16|0001|<p>0001is 0x0001=1(DEC) seconds</p><p>The temperature is detected every 1 seconds. When the threshold is triggered, upload location and sensor data.</p>|
|43~44|Light threshold max|uint16|0064|<p>0064 is 0x0064 = 100(DEC) %</p><p>Maximum threshold =100%</p>|
|45~46|Light threshold min|uint16|0000|<p>0000 is 0x0000 = 0(DEC) %</p><p>Minimum threshold=0%</p>|
|47|Light warning type|uint8|00|<p>00 means when light ≤ min threshold, device will upload location and light event.</p><p>00: light ≤ min threshold</p><p>01: light ≥ max threshold</p><p>02: light ≤ min threshold and light ≥ max threshold</p><p>03: min threshold≤ light ≤max threshold</p>|

1. ### <a name="_toc145487499"></a>**Device Status Packet -Periodic Mode 0x02**

The Device Status package is uploaded when join LoRaWAN network. The Device Status packet has two packet formats in different working modes:

1) Event Mode, ID=0x01

1) Periodic Mode, ID= 0x02

### Device Status Packet -Periodic Mode: 0x02

|0x02|Byte2|Byte3~4|Byte5~6|Byte7|Byte8|Byte9~10|Byte11~12|
| - | :- | :- | :- | :- | :- | :- | :- |
|ID|battery level|software version|hardware version|work mode|positioning strategy|heartbeat interval|uplink Interval|

|Byte13~14|Byte15|Byte16|
| :- | :- | :- |
|event mode uplink interval|temp&light switch|SOS mode|

**The raw payload:**

025601050105010002d0003c003c0000

|**Byte**|**Value**|**Type**|**Raw Data**|**Description**|
| - | - | - | - | - |
|1|Frame ID|uint8|02|02 is the packet ID.|
|2|Battery level|uint8|56|<p>56 is 0x56 = 86(DEC)</p><p>The battery level is 86%</p>|
|3~4|Software version|uint16|0105|<p>0105 is 0x0105 == v1.5</p><p>The software version is v1.5</p>|
|5~6|Hardware version|uint16|0105|<p>0105 is 0x0105 == v1.5</p><p>The hardware version is v1.5</p>|
|7|Work mode|uint8|01|<p>01 is 0x01, means the device use “Periodic mode”.</p><p>00: Standby mode</p><p>01: Periodic mode</p><p>02: Event mode</p>|
|8|Positioning strategy|uint8|00|<p>00 is 0x01, means the device use “GNSS only” positioning strategy.</p><p>00: Only GNSS</p><p>01: Only Wi-Fi</p><p>02: Wi-Fi+GNSS</p><p>03: GNSS + Wi-Fi</p><p>04: Only Bluetooth</p><p>05: Bluetooth + Wi-Fi</p><p>06: Bluetooth + GNSS</p><p>07: Bluetooth + Wi-Fi + GNSS</p>|
|9~10|Heartbeat interval|uint16|02d0|02d0 is 0x02D0 = 720(DEC) minutes, the heartbeat interval is 720 minutes. |
|11~12|Uplink Interval|uint16|003c|003c is 0x003C = 60(DEC) minutes, the uplink interval is 60 minutes.|
|13~14|Event mode uplink interval|uint16|003c|003c is 0x003C = 60(DEC), the event mode uplink interval is 60 minutes.|
|15|Temp&light switch|uint8|00|<p>00 means open the temperature and light sensor.</p><p>00: Close the temperature and light sensor.</p><p>01: Open the temperature and light sensor.</p>|
|16|SOS mode|uint8|00|<p>00 means use SOS single mode.</p><p>00: use SOS single mode.</p><p>01: use SOS continuous mode.</p>|

### Heartbeat Packet -0x05

When no data is uploaded by the device within the heartbeat interval, a heartbeat packet will be triggered. This packet only contains battery information.

|0x05|Byte2|Byte3|Byte4|Byte5|
| - | :- | :- | :- | :- |
|ID|battery level|work mode|positioning strategy|SOS mode|

**The raw payload:**

0564010001

|**Byte**|**Value**|**Type**|**Raw Data**|**Description**|
| - | - | - | - | - |
|1|Frame ID|uint8|05|05 is the packet ID.|
|2|Battery level|uint8|64|<p>64 is 0x64 = 100(DEC)</p><p>The battery level is 100%</p>|
|3|Work mode|uint8|01|<p>01 is 0x01, means the device use “Periodic mode”.</p><p>00: Standby mode</p><p>01: Periodic mode</p><p>02: Event mode</p>|
|4|Positioning strategy|uint8|00|<p>00 is 0x01, means the device use “GNSS only” positioning strategy.</p><p>00: Only GNSS</p><p>01: Only Wi-Fi</p><p>02: Wi-Fi+GNSS</p><p>03: GNSS + Wi-Fi</p><p>04: Only Bluetooth</p><p>05: Bluetooth + Wi-Fi</p><p>06: Bluetooth + GNSS</p><p>07: Bluetooth + Wi-Fi + GNSS</p>|
|5|SOS mode|uint8|00|<p>00 means use SOS single mode.</p><p>00: use SOS single mode.</p><p>01: use SOS continuous mode.</p>|

### GNSS Location and Sensor Packet-0x06

ID 0x06 is used to upload GNSS location, sensor data and battery.

|0x06|Byte2~4|Byte5|Byte6~9|Byte10~13|Byte14~17|
| - | :- | :- | :- | :- | :- |
|ID|event status|motion segment number |UTC time|longitude|latitude|

|Byte18~19|Byte20~21|Byte22|
| - | :- | :- |
|Temperature|Light|battery level|

**The raw payload:**

06000008006462248d06ca502801587ec6<a name="ole_link3"></a>00fe000057

|**Byte**|**Value**|**Type**|**Raw Data**|**Description**|
| - | - | - | - | - |
|1|Frame ID|uint8|06|06 is the packet ID.|
|2~4|event status|uint24|000008|<p>000008 is 0x000008, 0x0000XX is reserved and 0x08 is the event status. This byte has 8 bits, each representing an event.</p><p>Bit1: Start moving event.</p><p>Bit2: End movement event.</p><p>Bit3: Motionless event.</p><p>Bit4: Shock event.</p><p>Bit5: Temperature event.</p><p>Bit6: Light event.</p><p>Bit7: SOS event.</p><p>Bit8: Press once event.</p><p></p><p>Convert to hexadecimal:</p><p>0x000000: no event</p><p>0x000001: Start moving event.</p><p>0x000002: End movement event.</p><p>0x000004: Motionless event.</p><p>0x000008: Shock event.</p><p>0x000010: Temperature event.</p><p>0x000020: Light event.</p><p>0x000040: SOS event.</p><p>0x000080: Press once event.</p>|
|5|Motion segment number|uint8|00|<p>00 is 0x00 == 0.</p><p>When the motion begins, the count increases by 1. Record that this is a movement.</p>|
|6~9|UTC time|uint32|6462248d|<p>6462248d is 0x6462248D = 1684153485(DEC) seconds.</p><p>Convert it to Beijing Time: 2023-05-15 20:24:45</p>|
|10~13|Longitude|int32|06ca5028|06ca5028 is 0x06CA5028 = 113922088(DEC), the longitude= 113922088/1000000=113.922088|
|14~17|Latitude|int32|01587ec6|01587ec6 is 0x01587EC6 = 22576838(DEC), the Latitude = 22576838/1000000=22.576838|
|18~19|Temperature|int16|00fe|00fe is 0x00FE = 254(DEC), temperature=254/10=25.4℃|
|20~21|Light|uint16|0000|0000 is 0x0000 = 0(DEC) minutes, the light=0=0%|
|22|Battery level|uint8|57|<p>57 is 0x57 = 87(DEC)</p><p>The battery level is 87%</p>|

1. ### <a name="_toc145487502"></a>**Wi-Fi Location and Sensor Packet-0x07**

ID 0x07 is used to upload Wi-Fi Mac addresses, sensor data and battery.

|0x07|Byte2~4|Byte5|Byte6~9|Byte10~15|Byte16|
| - | :- | :- | :- | :- | :- |
|ID|event status|motion segment number |UTC time|MAC address 1|The RSSI of MAC address 1, int8|

|Byte17~22|Byte23|Byte24~29|Byte30|Byte31~36|Byte37|
| :- | :- | :- | :- | :- | :- |
|MAC address 2|The RSSI of MAC address 2, int8|MAC address 3|The RSSI of MAC address 3, int8|MAC address 4|The RSSI of MAC address 4, int8|

|Byte38~39|Byte40~41|Byte42|
| - | :- | :- |
|Temperature|Light|battery level|

**The raw payload:**

070000080064622472487397162234bb3ccd5798fd2ebc74cf002f3ad0a9ec26ca022958b900fe000057

|**Byte**|**Value**|**Type**|**Raw Data**|**Description**|
| - | - | - | - | - |
|1|Frame ID|uint8|07|07 is the packet ID.|
|2~4|event status|uint24|000008|<p>000008 is 0x000008, 0x0000XX is reserved and 0x08 is the event status. This byte has 8 bits, each representing an event.</p><p>Bit1: Start moving event.</p><p>Bit2: End movement event.</p><p>Bit3: Motionless event.</p><p>Bit4: Shock event.</p><p>Bit5: Temperature event.</p><p>Bit6: Light event.</p><p>Bit7: SOS event.</p><p>Bit8: Press once event.</p><p></p><p>Convert to hexadecimal:</p><p>0x000000: no event</p><p>0x000001: Start moving event.</p><p>0x000002: End movement event.</p><p>0x000004: Motionless event.</p><p>0x000008: Shock event.</p><p>0x000010: Temperature event.</p><p>0x000020: Light event.</p><p>0x000040: SOS event.</p><p>0x000080: Press once event.</p>|
|5|Motion segment number|uint8|00|<p>00 is 0x00 == 0.</p><p>When the motion begins, the count increases by 1. Record that this is a movement.</p>|
|6~9|UTC time|uint32|64622472|<p>64622472 is 0x64622472 = 1684153458 (DEC) seconds.</p><p>Convert it to Beijing Time: 2023-05-15 20:24:18</p>|
|10~15|MAC address 1|----|487397162234|<p>487397162234 </p><p>the MAC address (HEX)= 48:73:97:16:22:34</p>|
|16|The RSSI of MAC address 1|int8|bb|<p>bb is 0xBB = -69(DEC), the type is int8</p><p>the RSSI = -69</p>|
|17~22|MAC address 2|----|3ccd5798fd2e|<p>3ccd5798fd2e </p><p>the MAC address (HEX)= 3C:CD:57:98:FD:2E</p>|
|23|The RSSI of MAC address 2|int8|bc|<p>bc is 0xBC = -68(DEC), the type is int8</p><p>the RSSI = -68</p>|
|24~29|MAC address 3|----|74cf002f3ad0|<p>74cf002f3ad0</p><p>the MAC address (HEX)= 74:CF:00:2F:3A:D0</p>|
|30|The RSSI of MAC address 3|int8|a9|<p>a9 is 0xA9 = -87(DEC), the type is int8</p><p>the RSSI = -87</p>|
|31~36|MAC address 4|----|ec26ca022958|<p>ec26ca022958</p><p>the MAC address (HEX)= EC:26:CA:02:29:58</p>|
|37|The RSSI of MAC address 4|int8|b9|<p>b9 is 0xA9 = -71(DEC), the type is int8</p><p>the RSSI = -71</p>|
|38~39|Temperature|int16|00fe|00fe is 0x00FE = 254(DEC), temperature=254/10=25.4℃|
|40~41|Light|uint16|0000|0000 is 0x0000 = 0(DEC) minutes, the light=0=0%|
|42|battery level|uint8|57|<p>57 is 0x57 = 87(DEC)</p><p>The battery level is 87%</p>|

### Bluetooth Location and Sensor Packet-0x08

ID 0x08 is used to upload Bluetooth Beacon MAC addresses, sensor data and battery.

|0x08|Byte2~4|Byte5|Byte6~9|Byte10~15|Byte16|
| - | :- | :- | :- | :- | :- |
|ID|event status|motion segment number |UTC time|MAC address 1|The RSSI of MAC address 1, int8|

|Byte17~22|Byte23|Byte24~29|Byte30|Byte31~32|Byte33~34|Byte 35|
| :- | :- | :- | :- | :- | :- | :- |
|MAC address 2|The RSSI of MAC address 2, int8|MAC address 3|The RSSI of MAC address 3, int8|Temperature|light|battery level|

**The raw payload:**

0800000800646225bb5162d2c1b9d3ca1b5bd2afeae5c0d0e2d70529e8c900fa000057

|**Byte**|**Value**|**Type**|**Raw Data**|**Description**|
| - | - | - | - | - |
|1|Frame ID|uint8|08|08 is the packet ID.|
|2~4|event status|uint24|000008|<p>000008 is 0x000008, 0x0000XX is reserved and 0x08 is the event status. This byte has 8 bits, each representing an event.</p><p>Bit1: Start moving event.</p><p>Bit2: End movement event.</p><p>Bit3: Motionless event.</p><p>Bit4: Shock event.</p><p>Bit5: Temperature event.</p><p>Bit6: Light event.</p><p>Bit7: SOS event.</p><p>Bit8: Press once event.</p><p></p><p>Convert to hexadecimal:</p><p>0x000000: no event</p><p>0x000001: Start moving event.</p><p>0x000002: End movement event.</p><p>0x000004: Motionless event.</p><p>0x000008: Shock event.</p><p>0x000010: Temperature event.</p><p>0x000020: Light event.</p><p>0x000040: SOS event.</p><p>0x000080: Press once event.</p>|
|5|Motion segment number|uint8|00|<p>00 is 0x00 == 0.</p><p>When the motion begins, the count increases by 1. Record that this is a movement.</p>|
|6~9|UTC time|uint32|646225bb|<p>646225bb is 0x646225BB = 1684153787 (DEC) seconds.</p><p>Convert it to Beijing Time: 2023-05-15 20:29:47</p>|
|10~15|MAC address 1|-----|5162d2c1b9d3|<p>5162d2c1b9d3</p><p>the MAC address (HEX)=51:62:D2:C1:B9:D3</p>|
|16|The RSSI of MAC address 1|int8|c0|<p>c0 is 0xC0 = -64(DEC), the type is int8</p><p>the RSSI = -64</p>|
|17~22|MAC address 2|-----|1b5bd2afeae5|<p>1b5bd2afeae5</p><p>the MAC address (HEX)= 1B:5B:D2:AF:EA:E5</p>|
|23|The RSSI of MAC address 2|int8|bc|<p>bc is 0xBC = -68(DEC), the type is int8</p><p>the RSSI = -68</p>|
|24~29|MAC address 3|-----|d0e2d70529e8|<p>d0e2d70529e8</p><p>the MAC address (HEX)= D0:E2:D7:05:29:E8</p>|
|30|The RSSI of MAC address 3|int8|c9|<p>c9 is 0xC9 = -55(DEC), the type is int8</p><p>the RSSI = -55</p>|
|31~32|Temperature|int16|00fa|00fa is 0x00FA = 250(DEC), temperature=254/10=25.0℃|
|33~34|Light|uint16|0000|0000 is 0x0000 = 0(DEC) minutes, the light=0=0%|
|35|battery level|uint8|57|<p>57 is 0x57 = 87(DEC)</p><p>The battery level is 87%</p>|

### GNSS Location Only Packet-0x09

When the sensor is turned off, the device does not upload the sensor measurement value. Only the location data is uploaded.

|0x09|Byte2~4|Byte5|Byte6~9|Byte10~13|Byte14~17|Byte18|
| - | :- | :- | :- | :- | :- | :- |
|ID|event status|motion segment number |UTC time|longitude|latitude|battery level|

**The raw payload:**

09000000006463186806ca506801587e4c56

|**Byte**|**Value**|**Type**|**Raw Data**|**Description**|
| - | - | - | - | - |
|1|Frame ID|uint8|09|09 is the packet ID.|
|2~4|event status|uint24|000000|<p>000000 is 0x000008, 0x0000XX is reserved and 0x08 is the event status. This byte has 8 bits, each representing an event.</p><p>Bit1: Start moving event.</p><p>Bit2: End movement event.</p><p>Bit3: Motionless event.</p><p>Bit4: Shock event.</p><p>Bit5: Temperature event.</p><p>Bit6: Light event.</p><p>Bit7: SOS event.</p><p>Bit8: Press once event.</p><p></p><p>Convert to hexadecimal:</p><p>0x000000: no event</p><p>0x000001: Start moving event.</p><p>0x000002: End movement event.</p><p>0x000004: Motionless event.</p><p>0x000008: Shock event.</p><p>0x000010: Temperature event.</p><p>0x000020: Light event.</p><p>0x000040: SOS event.</p><p>0x000080: Press once event.</p>|
|5|Motion segment number|uint8|00|<p>00 is 0x00 == 0.</p><p>When the motion begins, the count increases by 1. Record that this is a movement.</p>|
|6~9|UTC time|uint32|64631868|<p>64631868 is 0x64631868 = 1684215912 (DEC) seconds.</p><p>Convert it to Beijing Time: 2023-05-16 13:45:12</p>|
|10~13|Longitude|int32|06ca5068|06ca5068 is 0x06CA5068 = 113922152 (DEC), the longitude= 113922152/1000000=113.922152|
|14~17|Latitude|int32|01587e4c|01587e4c is 0x01587E4C = 22576716 (DEC), the Latitude = 22576716/1000000=22.576716|
|18|Battery level|uint8|56|<p>56 is 0x56 = 86(DEC)</p><p>The battery level is 86%</p>|

### Wi-Fi Location Only Packet-0x0A

|0x0A|Byte2~4|Byte5|Byte6~9|Byte10~15|Byte16|
| - | :- | :- | :- | :- | :- |
|ID|event status|motion segment number |UTC time|MAC address 1|The RSSI of MAC address 1, int8|

|Byte17~22|Byte23|Byte24~29|Byte30|Byte31~36|Byte37|Byte38|
| :- | :- | :- | :- | :- | :- | :- |
|MAC address 2|The RSSI of MAC address 2, int8|MAC address 3|The RSSI of MAC address 3, int8|MAC address 4|The RSSI of MAC address 4, int8|battery level|

**The raw payload:**

0A0000080064622472487397162234bb3ccd5798fd2ebc74cf002f3ad0a9ec26ca022958b957

|**Byte**|**Value**|**Type**|**Raw Data**|**Description**|
| - | - | - | - | - |
|1|Frame ID|uint8|0A|0A is the packet ID.|
|2~4|event status|uint32|000008|<p>000008 is 0x000008, 0x0000XX is reserved and 0x08 is the event status. This byte has 8 bits, each representing an event.</p><p>Bit1: Start moving event.</p><p>Bit2: End movement event.</p><p>Bit3: Motionless event.</p><p>Bit4: Shock event.</p><p>Bit5: Temperature event.</p><p>Bit6: Light event.</p><p>Bit7: SOS event.</p><p>Bit8: Press once event.</p><p></p><p>Convert to hexadecimal:</p><p>0x000000: no event</p><p>0x000001: Start moving event.</p><p>0x000002: End movement event.</p><p>0x000004: Motionless event.</p><p>0x000008: Shock event.</p><p>0x000010: Temperature event.</p><p>0x000020: Light event.</p><p>0x000040: SOS event.</p><p>0x000080: Press once event.</p>|
|5|Motion segment number|uint8|00|<p>00 is 0x00 == 0.</p><p>When the motion begins, the count increases by 1. Record that this is a movement.</p>|
|6~9|UTC time|uint32|64622472|<p>64622472 is 0x64622472 = 1684153458 (DEC) seconds.</p><p>Convert it to Beijing Time: 2023-05-15 20:24:18</p>|
|10~15|MAC address 1|-----|487397162234|<p>487397162234 </p><p>the MAC address (HEX)= 48:73:97:16:22:34</p>|
|16|The RSSI of MAC address 1|int8|bb|<p>bb is 0xBB = -69(DEC), the type is int8</p><p>the RSSI = -69</p>|
|17~22|MAC address 2|-----|3ccd5798fd2e|<p>3ccd5798fd2e </p><p>the MAC address (HEX)= 3C:CD:57:98:FD:2E</p>|
|23|The RSSI of MAC address 2|int8|bc|<p>bc is 0xBC = -68(DEC), the type is int8</p><p>the RSSI = -68</p>|
|24~29|MAC address 3|-----|74cf002f3ad0|<p>74cf002f3ad0</p><p>the MAC address (HEX)= 74:CF:00:2F:3A:D0</p>|
|30|The RSSI of MAC address 3|int8|a9|<p>a9 is 0xA9 = -87(DEC), the type is int8</p><p>the RSSI = -87</p>|
|31~36|MAC address 4|-----|ec26ca022958|<p>ec26ca022958</p><p>the MAC address (HEX)= EC:26:CA:02:29:58</p>|
|37|The RSSI of MAC address 4, int8|int8|b9|<p>b9 is 0xA9 = -71(DEC), the type is int8</p><p>the RSSI = -71</p>|
|38|battery level|uint8|57|<p>57 is 0x57 = 87(DEC)</p><p>The battery level is 87%</p>|

### Bluetooth Location Only Packet-0x0B

|<a name="ole_link4"></a>0x0B|Byte2~4|Byte5|Byte6~9|Byte10~15|Byte16|
| - | :- | :- | :- | :- | :- |
|ID|event status|motion segment number |UTC time|MAC address 1|The RSSI of MAC address 1, int8|

|Byte17~22|Byte23|Byte24~29|Byte30|Byte31|
| :- | :- | :- | :- | :- |
|MAC address 2|The RSSI of MAC address 2, int8|MAC address 3|The RSSI of MAC address 3, int8|battery level|

**The raw payload:**

0B00000800646225bb5162d2c1b9d3ca1b5bd2afeae5c0d0e2d70529e8c957

|**Byte**|**Value**|**Type**|**Raw Data**|**Description**|
| - | - | - | - | - |
|1|Frame ID|uint8|0B|0B is the packet ID.|
|2~4|event status|uint24|000008|<p>000008 is 0x000008, 0x0000XX is reserved and 0x08 is the event status. This byte has 8 bits, each representing an event.</p><p>Bit1: Start moving event.</p><p>Bit2: End movement event.</p><p>Bit3: Motionless event.</p><p>Bit4: Shock event.</p><p>Bit5: Temperature event.</p><p>Bit6: Light event.</p><p>Bit7: SOS event.</p><p>Bit8: Press once event.</p><p></p><p>Convert to hexadecimal:</p><p>0x000000: no event</p><p>0x000001: Start moving event.</p><p>0x000002: End movement event.</p><p>0x000004: Motionless event.</p><p>0x000008: Shock event.</p><p>0x000010: Temperature event.</p><p>0x000020: Light event.</p><p>0x000040: SOS event.</p><p>0x000080: Press once event.</p>|
|5|Motion segment number|uint8|00|<p>00 is 0x00 == 0.</p><p>When the motion begins, the count increases by 1. Record that this is a movement.</p>|
|6~9|UTC time|uint32|646225bb|<p>646225bb is 0x646225BB = 1684153787 (DEC) seconds.</p><p>Convert it to Beijing Time: 2023-05-15 20:29:47</p>|
|10~15|MAC address 1|-----|5162d2c1b9d3|<p>5162d2c1b9d3</p><p>the MAC address (HEX)=51:62:D2:C1:B9:D3</p>|
|16|The RSSI of MAC address 1, int8|int8|c0|<p>c0 is 0xC0 = -64(DEC), the type is int8</p><p>the RSSI = -64</p>|
|17~22|MAC address 2|-----|1b5bd2afeae5|<p>1b5bd2afeae5</p><p>the MAC address (HEX)= 1B:5B:D2:AF:EA:E5</p>|
|23|The RSSI of MAC address 2, int8|int8|bc|<p>bc is 0xBC = -68(DEC), the type is int8</p><p>the RSSI = -68</p>|
|24~29|MAC address 3|-----|d0e2d70529e8|<p>d0e2d70529e8</p><p>the MAC address (HEX)= D0:E2:D7:05:29:E8</p>|
|30|The RSSI of MAC address 3, int8|int8|c9|<p>c9 is 0xC9 = -55(DEC), the type is int8</p><p>the RSSI = -55</p>|
|31|battery level|uint8|57|<p>57 is 0x57 = 87(DEC)</p><p>The battery level is 87%</p>|

### Error Code Packet-0x0D

ID 0x0D packet is used to upload the error code.

**The raw payload:**

0D00000001

|**Byte**|**Value**|**Type**|**Raw Data**|**Description**|
| - | - | - | - | - |
|1|Frame ID|uint8|0D|0D is the packet ID.|
|2~5|Error code|uint32|00000001|<p>0x00000001: UTC time acquisition failed</p><p>0x00000002: Almanac too old</p><p>0x00000003: Doppler error</p>|

### Positioning Status and Sensor Packet-0x11

ID 0x11 is used to upload the positioning status, sensor data and battery.

**The raw payload:**

110100000064a763a0014100002f

|**Byte**|**Value**|**Type**|**Raw Data**|**Description**|
| - | - | - | - | - |
|1|Frame ID|uint8|11|11 is the packet ID.|
|2|Positioning status|uint8|01|<p>00: Positioning successful</p><p>01: The GNSS scan timed out and failed to obtain the location.</p><p>02: The Wi-Fi scan timed out and failed to obtain the location.</p><p>03: The Wi-Fi + GNSS scan timed out and failed to obtain the location.</p><p>04: The GNSS + Wi-Fi scan timed out and failed to obtain the location.</p><p>05: The Bluetooth scan timed out and failed to obtain the location.</p><p>06: The Bluetooth + Wi-Fi scan timed out and failed to obtain the location.</p><p>07: The Bluetooth + GNSS scan timed out and failed to obtain the location.</p><p>08: The Bluetooth + Wi-Fi + GNSS scan timed out and failed to obtain the location.</p><p>09: Location Server failed to parse the GNSS location.</p><p>0A: Location Server failed to parse the Wi-Fi location.</p><p>0B: Location Server failed to parse the Bluetooth location.</p><p>0C: Failed to parse the GNSS location due to the poor accuracy.</p><p>0D: Time synchronization failed.</p><p>0E: Failed to obtain positioning due to the old Almanac.</p>|
|3～5|Event status|uint24|000000|<p>000000 is 0x000000, 0x0000XX is reserved and 0x00 is the event status. This byte has 8 bits, each representing an event.</p><p>Bit1: Start moving event.</p><p>Bit2: End movement event.</p><p>Bit3: Motionless event.</p><p>Bit4: Shock event.</p><p>Bit5: Temperature event.</p><p>Bit6: Light event.</p><p>Bit7: SOS event.</p><p>Bit8: Press once event.</p><p></p><p>Convert to hexadecimal:</p><p>0x000000: no event</p><p>0x000001: Start moving event.</p><p>0x000002: End movement event.</p><p>0x000004: Motionless event.</p><p>0x000008: Shock event.</p><p>0x000010: Temperature event.</p><p>0x000020: Light event.</p><p>0x000040: SOS event.</p><p>0x000080: Press once event.</p>|
|6～9|UTC Timestamp|uint32|64a763a0|<p>64a763a0 is 0x64a763a0 = 1688691616 (DEC) seconds.</p><p>Convert it to Beijing Time: 2023-07-07 09:00:16</p>|
|10～11|Temperature|int16|0141|0141 is 0x0141 = 321(DEC), temperature=321/10=32.1℃|
|12～13|Light|uint16|0000|0000 is 0x0000 = 0(DEC) minutes, the light=0=0%|
|14|Battery level|uint8|2F|<p>2F is 0x2F = 47(DEC)</p><p>The battery level is 47%</p>|

## Downlink Packet, FPort=5

The tracker supports LoRaWAN to downlink some commands to adjust parameters. If the device is hibernated, the downlink command takes effect the next time the device wakes up to upload data.

**Note: FPort=5**

### Setting the SOS Mode -0x80

|0x80|Byte2|
| - | :- |
|ID|<p>SOS mode</p><p>0: single mode</p><p>1: continuous mode</p>|

8000: set SOS to single mode.

8001: set SOS to continuous mode.

### Setting the Uplink Interval -0x81

|0x81|Byte2~3|Byte4~5|Byte6~7|
| - | :- | :- | :- |
|ID|<p>Heartbeat uplink interval</p><p>0000: Keep current configuration</p><p>Unit: minutes</p>|<p>Periodic mode uplink interval</p><p>0000: Keep current configuration</p><p>Unit: minutes </p>|<p>Event mode uplink interval</p><p>0000: Keep current configuration</p><p>Unit: minutes</p>|

**Example**: set the periodic mode interval to 30 minutes

Command: 810000001E0000

### Open the buzzer -0x82

After sending this command, a buzzer alarm tone will be turned on after the device wakes up and will continue to sound for 1 minute.

|0x82|Byte2|
| - | :- |
|ID|<p>Open the buzzer.</p><p>00: close</p><p>01: open</p>|

8200: close the buzzer<br/>
8201: open the buzzer<br/>

### Setting the Work Mode -0x83

|0x83|Byte2|
| - | :- |
|ID|<p>Open the buzzer.</p><p>00: standby mode</p><p>01: periodic mode</p><p>02: event mode</p>|

8300: set work mode to standby mode<br/>
8301: set work mode to periodic mode <br/>
8302: set work mode to event mode

### Setting the Work Mode -0x84

|0x84|Byte2|Byte3~4|Byte5~6|Byte7|Byte8~9|
| - | :- | :- | :- | :- | :- |
|ID|enable motion event|3-Axis motion threshold|motion start interval|enable motionless event|motionless timeout|

|Byte10|Byte11~12|Byte13|Byte14~15|Byte16~17|Byte18~19|
| - | - | - | - | :- | :- |
|enable shock event|3-Axis shock threshold|enable temperature event|temperature event uplink interval|temperature sample interval|temperature threshold max|

|Byte20~21|Byte22|Byte23|Byte24~25|Byte26~27|Byte28~29|
| - | - | - | - | :- | :- |
|Temperature threshold min|Temperature warning type|Enable light event|light event uplink interval|light sample interval|light threshold max|

|Byte30~31|Byte32|
| - | - |
|light threshold min|light warning type|

**The command:**

8400001e000500016801012c000005001e025800000000000500010064000000

|**Byte**|**Value**|**Type**|**Raw Data**|**Description**|
| - | - | - | - | - |
|1|Frame ID|uint8|84|84 is the packet ID.|
|2|Enable motion event|uint8|00|<p>00 means disable Event mode.</p><p>00: disable Event mode.</p><p>01: enable Event mode.</p>|
|3~4|3-Axis motion threshold|uint16|001e|<p>001e is 0x001E=30(DEC) mg</p><p>When the acceleration exceeds 30mg, determine that the device is in motion, when it is 2 minutes below this value, determine that the device is in motionless.</p>|
|5~6|Motion start interval|uint16|0005|0005 is 0x0005 = 5(DEC), when device is on motion, the interval is 5 minutes.|
|7|Enable motionless event|uint8|00|<p>00 means disable motionless event.</p><p>00: disable motionless event.</p><p>01: enable motionless event.</p>|
|8~9|Motionless timeout|uint16|0168|0168 is 0x0168 = 360(DEC), when the device is stationary in a location for more than 360 minutes, a motionless timeout event is triggered.|
|10|Enable shock event|uint8|01|<p>01 means enable shock event.</p><p>00: disable shock event.</p><p>01: enable shock event.</p>|
|11~12|3-Axis shock threshold|uint16|012c|<p>012c is 0x012C=300(DEC) mg</p><p>When the acceleration exceeds 300mg, the shock event is triggered.</p>|
|13|Enable temperature event|uint8|00|<p>00 means enable shock event.</p><p>00: disable shock event.</p><p>01: enable shock event.</p>|
|14~15|Temperature event uplink interval|uint16|0005|0005 is 0x0005 = 5(DEC), when the temperature exceeds the threshold, the location and sensor data will upload every 5 minutes.|
|16~17|Temperature sample interval|uint16|001e|<p>001e is 0x001E=30(DEC) seconds</p><p>The temperature is detected every 30 seconds. When the threshold is triggered, upload location and sensor data.</p>|
|18~19|Temperature threshold max|int16|0258|<p>0258 is 0x0258 = 600(DEC),</p><p>Maximum threshold =600/10=60.0 ℃</p>|
|20~21|Temperature threshold min|int16|0000|<p>0000 is 0x0000 = 0(DEC), </p><p>Minimum threshold=0/10=0.0 ℃</p>|
|22|Temperature threshold rule|uint8|00|<p>00 means when temperature ≤ min threshold, device will upload location and temperature event.</p><p>00: temp ≤ min threshold</p><p>01: temp ≥ max threshold</p><p>02: temp ≤ min threshold and temp ≥ max threshold</p><p>03: min threshold≤ temp ≤max threshold</p>|
|23|Enable light event|uint8|00|<p>00 means disable light event.</p><p>00: disable light event.</p><p>01: enable light event.</p>|
|24~25|Light event uplink interval|uint16|0005|0005 is 0x0005 = 5(DEC), when the light exceeds the threshold, the location and sensor data will upload every 5 minutes.|
|26~27|Light sample interval|uint16|0001|<p>0001is 0x0001=1(DEC) seconds</p><p>The temperature is detected every 1 seconds. When the threshold is triggered, upload location and sensor data.</p>|
|28~29|Light threshold max|uint16|0064|<p>0064 is 0x0064 = 100(DEC) %</p><p>Maximum threshold =100%</p>|
|30~31|Light threshold min|uint16|0000|<p>0000 is 0x0000 = 0(DEC) %</p><p>Minimum threshold=0%</p>|
|32|Light warning type|uint8|00|<p>00 means when light ≤ min threshold, device will upload location and light event.</p><p>00: light ≤ min threshold</p><p>01: light ≥ max threshold</p><p>02: light ≤ min threshold and light ≥ max threshold</p><p>03: min threshold≤ light ≤max threshold</p>|

### Request Location -0x85

The request tracker initiates location and uploads based on the current configuration. It is usually used in standby mode.

|0x85|
| - |
|ID|

Example:

85: request location.

### Setting Positioning strategy -0x86

|0x86|Byte2|
| - | :- |
|ID|<p>Positioning strategy</p><p>00: Only GNSS</p><p>01: Only Wi-Fi</p><p>02: Wi-Fi+GNSS</p><p>03: GNSS + Wi-Fi</p><p>04: Only Bluetooth</p><p>05: Bluetooth + Wi-Fi</p><p>06: Bluetooth + GNSS</p><p>07: Bluetooth + Wi-Fi + GNSS</p>|

Example:

8600: Set the positioning strategy to “Only GNSS”.

### Request Event Parameters -0x87

|0x87|
| - |
|ID|

Example:

87: request event parameters.

### Request Device Status Packet -0x88

|0x88|
| - |
|ID|

Example:

88: request Device Status packet(0x01 or 0x02).

### Reboot Device -0x89

|0x89|
| - |
|ID|

Example:

89: After the command is sent, the device reboots and join the network again. Please use this command with caution.

### Enable Temperature and Light Sensor -0x8C

Enable data collection and upload for the temperature and light sensor.

|0x8C|Byte2|
| - | :- |
|ID|<p>Open the temperature and light sensor.</p><p>00: Close the temperature and light sensor.</p><p>01: Open the temperature and light sensor.</p>|

Example:

8C00: Close the temperature and light sensor.<br/>
8C01: Open the temperature and light sensor.

### Enable SOS Alarm -0x8D

Enable SOS continuous mode, upload positioning quickly, once every minute, stop after 30 consecutive times, accompanied by sound and light alarm.

Turn off SOS by closing the command or by double clicking the key.

|0x8D|Byte2|
| - | :- |
|ID|<p>Open the SOS.</p><p>00: Close.</p><p>01: Open.</p>|

Example:

8D00: Close the SOS alarm.<br/>
8D01: Open the SOS alarm.
